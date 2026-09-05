import assert from 'node:assert/strict';
const base = process.env.CHECK_BASE_URL || 'http://localhost:3000';
const canonicalBase = 'https://atowell-website.vercel.app';
const paths = ['/', '/about', '/clinic/mounjaro', '/clinic/wegovy', '/clinic/obesity', '/clinic/dermatology', '/price', '/location', '/medical/obesity', '/medical/dermatology'];
const pages = new Map();
for (const path of paths) {
  const response = await fetch(base + path);
  assert.equal(response.status, 200, path);
  const html = await response.text(); pages.set(path, html);
  assert.equal((html.match(/<h1(?:\s[^>]*)?>/g) || []).length, 1, path + ': one H1');
  assert.equal(new URL(html.match(/rel="canonical" href="([^"]+)"/)[1]).toString(), new URL(path, canonicalBase).toString(), path + ': canonical');
  assert.equal(new URL(html.match(/property="og:url" content="([^"]+)"/)[1]).toString(), new URL(path, canonicalBase).toString(), path + ': OG URL');
  assert(!html.includes('https://atowell.kr'), path + ': no premature domain migration');
  assert(!html.includes('reviewedBy'), path + ': no unverified review claims');
  for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) JSON.parse(match[1]);
  if (path.startsWith('/medical/') || process.env.EXPECT_NOINDEX === '1') assert(/name="robots" content="[^"]*noindex/.test(html), path + ': noindex');
  for (const [, href] of html.matchAll(/<a[^>]+href="([^"#]+)"/g)) {
    if (href.startsWith('/')) assert(paths.includes(href), path + ': internal link ' + href);
  }
}
const titles = [...pages.values()].map(html => html.match(/<title>(.*?)<\/title>/)?.[1]);
assert.equal(new Set(titles).size, paths.length, 'unique titles');
const ogTitles = [...pages.values()].map(html => html.match(/property="og:title" content="([^"]+)"/)?.[1]);
assert.equal(new Set(ogTitles).size, paths.length, 'unique OG titles');
const priceTables = html => [...html.matchAll(/<table>[\s\S]*?<\/table>/g)].map(match => match[0]);
assert.equal(priceTables(pages.get('/clinic/mounjaro'))[0], priceTables(pages.get('/price'))[0], 'shared mounjaro table');
assert.equal(priceTables(pages.get('/clinic/wegovy'))[0], priceTables(pages.get('/price'))[1], 'shared wegovy table');
for (const path of ['/', '/clinic/mounjaro', '/clinic/wegovy', '/price']) assert(pages.get(path).includes('15,000원') && pages.get(path).includes('별도'), path + ': consultation fee');
const sitemap = await (await fetch(base + '/sitemap.xml')).text();
assert(!sitemap.includes('/medical/'), 'unpublished library excluded from sitemap');
assert(!sitemap.includes('<lastmod>'), 'no generated modification timestamps');
for (const path of paths.filter(p => !p.startsWith('/medical/'))) assert(sitemap.includes(new URL(path, canonicalBase).toString()), 'sitemap ' + path);
const robots = await (await fetch(base + '/robots.txt')).text();
assert(robots.includes('User-Agent: OAI-SearchBot\nAllow: /'));
assert(robots.includes(canonicalBase + '/sitemap.xml'));
assert.equal((await fetch(base + '/medical/obesity/unreviewed-draft')).status, 404);
console.log('PASS: 10 pages, internal links, unique metadata, Schema JSON, shared prices/fees, sitemap, robots, absent draft route.');
