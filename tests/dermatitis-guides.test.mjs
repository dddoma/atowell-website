import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const source = path => readFileSync(new URL(path, import.meta.url), 'utf8');
const load = async text => import(`data:text/javascript;base64,${Buffer.from(ts.transpileModule(text, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText).toString('base64')}`);
const { dermatitisArticles } = await load(source('../data/dermatitisArticles.ts'));
const { handProtectionArticle } = await load(source('../data/handProtectionArticle.ts'));
const { herpesArticles } = await load(source('../data/herpesArticles.ts'));
const slugs = ['contact-dermatitis', 'atopic-dermatitis'];
const publicationSource = environment => source('../data/dermatologyArticles.ts')
  .replace('import { herpesArticles } from "./herpesArticles";', `const herpesArticles = ${JSON.stringify(herpesArticles)};`)
  .replace('import { dermatitisArticles } from "./dermatitisArticles";', `const dermatitisArticles = ${JSON.stringify(dermatitisArticles)};`)
  .replace('import { handProtectionArticle } from "./handProtectionArticle";', `const handProtectionArticle = ${JSON.stringify(handProtectionArticle)};`)
  .replaceAll('process.env.VERCEL_ENV', JSON.stringify(environment))
  .replaceAll('process.env.NODE_ENV', '"production"');

test('two patient guides have valid sources, unique anchors and related links', () => {
  assert.deepEqual(dermatitisArticles.map(article => article.slug), slugs);
  for (const article of dermatitisArticles) {
    assert.equal(article.draft, false);
    assert.ok(article.title.length > 10);
    assert.ok(article.description && article.answer);
    assert.ok(article.sections.length >= 4);
    assert.ok(article.faq.length >= 3);
    assert.equal(new Set(article.sections.map(section => section.id)).size, article.sections.length);
    for (const block of [...article.sections, ...article.faq, article.alert].filter(Boolean)) {
      assert.ok(block.sources.length);
      for (const number of block.sources) assert.ok(Number.isInteger(number) && number >= 1 && number <= article.references.length);
    }
    for (const reference of article.references) assert.equal(new URL(reference.url).protocol, 'https:');
    assert.ok(article.related.some(link => link.href.endsWith(`/${slugs.find(slug => slug !== article.slug)}`)));
  }
});

test('published guides stay public while explicitly awaiting physician review', async () => {
  for (const environment of ['production', 'preview']) {
    const { dermatologyArticles, getDermatologyPublication } = await load(publicationSource(environment));
    for (const slug of slugs) {
      const article = dermatologyArticles.find(article => article.slug === slug);
      assert.ok(article);
      const publication = getDermatologyPublication(article);
      assert.equal(publication.publishedAt, '2026-10-02');
      assert.equal(publication.modifiedAt, '2026-10-02');
      assert.equal(publication.sourceCheckedAt, '2026-10-02');
      assert.equal(publication.medicalReviewCompleted, false);
      assert.equal(publication.reviewedAt, '');
      assert.equal(publication.reviewerName, '');
      assert.equal(article.publication.reviewedAt, undefined);
      assert.equal(article.publication.reviewerName, undefined);
    }
    const olderArticle = dermatologyArticles.find(article => article.slug === 'acne');
    assert.equal(getDermatologyPublication(olderArticle).reviewedAt, '2026-09-30');
    assert.equal(getDermatologyPublication(olderArticle).medicalReviewCompleted, true);
    const shingles = dermatologyArticles.find(article => article.slug === 'shingles');
    assert.equal(getDermatologyPublication(shingles).reviewedAt, '2026-10-01');
    assert.equal(getDermatologyPublication(shingles).reviewerName, '권병현');
    const unpublished = { ...olderArticle, draft: true };
    assert.equal(getDermatologyPublication(unpublished).publishedAt, '');
    assert.equal(getDermatologyPublication(unpublished).medicalReviewCompleted, false);
    assert.equal(getDermatologyPublication(unpublished).reviewerName, '');
  }
});

test('both links appear inside the first eczema clinic category', () => {
  const clinic = source('../app/clinic/dermatology/page.tsx');
  const eczema = clinic.slice(clinic.indexOf('"title": "피부염·습진"'), clinic.indexOf('"title": "여드름·모낭염"'));
  for (const slug of slugs) assert.ok(eczema.includes(`"href": "/medical/dermatology/${slug}"`));
  assert.ok(eczema.includes('/medical/dermatology/dermatitis-eczema'));
  assert.ok(eczema.includes('/medical/dermatology/seborrheic-dermatitis'));
});

test('reviewer UI and JSON-LD require medical review separately from publication', () => {
  const page = source('../app/medical/dermatology/[slug]/page.tsx');
  assert.match(page, /lastReviewed: article\.draft \? undefined : publication\.medicalReviewCompleted \?/);
  assert.match(page, /reviewedBy: article\.draft \? undefined : publication\.medicalReviewCompleted \?/);
  assert.match(page, /publication\.medicalReviewCompleted && <><p>이 글은/);
  assert.match(page, /!publication\.medicalReviewCompleted && <p>의학적 검토: 대기 중/);
  assert.match(page, /의학적 검토 대기 · 일반 의료정보/);
  assert.match(source('../app/medical/dermatology/page.tsx'), /getDermatologyPublication\(article\)\.medicalReviewCompleted/);
  assert.match(source('../app/sitemap.ts'), /getDermatologyPublication\(article\)\.modifiedAt/);
});
