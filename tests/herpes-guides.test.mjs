import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const source = path => readFileSync(new URL(path, import.meta.url), 'utf8').replace(/\r\n/g, '\n');
const load = async text => import(`data:text/javascript;base64,${Buffer.from(ts.transpileModule(text, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText).toString('base64')}`);
const { herpesArticles } = await load(source('../data/herpesArticles.ts'));
const { dermatitisArticles } = await load(source('../data/dermatitisArticles.ts'));
const { handProtectionArticle } = await load(source('../data/handProtectionArticle.ts'));
const { atopicCareArticle } = await load(source('../data/atopicCareArticle.ts'));
const slugs = ['shingles', 'herpes-simplex', 'chickenpox'];

function publicationSource(environment) {
  return source('../data/dermatologyArticles.ts')
    .replace('import { herpesArticles } from "./herpesArticles";', `const herpesArticles = ${JSON.stringify(herpesArticles)};`)
    .replace('import { dermatitisArticles } from "./dermatitisArticles";', `const dermatitisArticles = ${JSON.stringify(dermatitisArticles)};`)
    .replace('import { handProtectionArticle } from "./handProtectionArticle";', `const handProtectionArticle = ${JSON.stringify(handProtectionArticle)};`)
    .replace('import { atopicCareArticle } from "./atopicCareArticle";', `const atopicCareArticle = ${JSON.stringify(atopicCareArticle)};`)
    .replaceAll('process.env.VERCEL_ENV', JSON.stringify(environment))
    .replaceAll('process.env.NODE_ENV', '"production"');
}

test('three complete reviewed articles have valid source citations and related links', () => {
  assert.deepEqual(herpesArticles.map(article => article.slug), slugs);
  for (const article of herpesArticles) {
    assert.equal(article.draft, false);
    assert.equal(article.publication.sourceCheckedAt, '2026-10-01');
    assert.ok(article.sections.length >= 4);
    assert.equal(new Set(article.sections.map(section => section.id)).size, article.sections.length);
    for (const block of [...article.sections, ...article.faq, article.alert]) {
      assert.ok(block.sources.length);
      for (const number of block.sources) assert.ok(Number.isInteger(number) && number >= 1 && number <= article.references.length);
    }
    for (const reference of article.references) assert.equal(new URL(reference.url).protocol, 'https:');
    for (const slug of slugs.filter(slug => slug !== article.slug)) assert.ok(article.related.some(link => link.href.endsWith(`/${slug}`)));
  }
});

test('preview and production include the approved articles with accurate review dates', async () => {
  const preview = await load(publicationSource('preview'));
  const production = await load(publicationSource('production'));
  assert.equal(preview.dermatologyArticles.length, production.dermatologyArticles.length);
  assert.deepEqual(production.dermatologyArticles.map(article => article.slug), preview.dermatologyArticles.filter(article => !article.draft).map(article => article.slug));
  for (const slug of slugs) {
    const draft = preview.dermatologyArticles.find(article => article.slug === slug);
    assert.ok(draft);
    assert.ok(production.dermatologyArticles.some(article => article.slug === slug));
    const publication = preview.getDermatologyPublication(draft);
    assert.equal(publication.medicalReviewCompleted, true);
    assert.equal(publication.reviewedAt, '2026-10-01');
    assert.equal(publication.reviewerName, '권병현');
    assert.equal(publication.publishedAt, '2026-10-01');
    assert.equal(publication.modifiedAt, '2026-10-01');
  }
});

test('sixth clinic entry links each published article and schema/sitemap retain draft protections', () => {
  const clinic = source('../app/clinic/dermatology/page.tsx');
  assert.ok(clinic.indexOf('대상포진·단순포진·수두",\n    text:') > clinic.indexOf('"title": "사마귀·티눈"'));
  for (const slug of slugs) assert.ok(clinic.includes(`href: "/medical/dermatology/${slug}", draft: false`));
  assert.match(clinic, /!link.draft \|\| dermatologyDraftsVisible/);
  const page = source('../app/medical/dermatology/[slug]/page.tsx');
  for (const field of ['datePublished', 'lastReviewed', 'reviewedBy']) assert.ok(page.includes(`${field}: article.draft ? undefined`));
  assert.match(page, /index: false, follow: false/);
  assert.match(source('../app/sitemap.ts'), /if \(article.draft\) continue;/);
});
