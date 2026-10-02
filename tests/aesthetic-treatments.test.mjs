import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const source = path => readFileSync(new URL(path, import.meta.url), 'utf8');
const moduleUrl = text => `data:text/javascript;base64,${Buffer.from(ts.transpileModule(text, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText).toString('base64')}`;
const { aestheticTreatments } = await import(moduleUrl(source('../data/aestheticTreatments.ts')));
const articlesUrl = moduleUrl(source('../data/skinTreatmentArticles.ts'));
const { skinTreatmentArticles, isSkinTreatmentPublished } = await import(moduleUrl(
  source('../data/skinTreatmentPublication.ts').replaceAll('"./skinTreatmentArticles"', JSON.stringify(articlesUrl))
));

test('the five requested clinic cards link to the matching published medical articles', () => {
  assert.deepEqual(aestheticTreatments.map(item => item.title), ['점 제거', '티눈·사마귀 제거', '양성종양 제거', '보톡스·필러', 'IPL·토닝']);
  assert.equal(new Set(aestheticTreatments.map(item => item.slug)).size, 5);
  for (const treatment of aestheticTreatments) {
    const article = skinTreatmentArticles.find(item => item.slug === treatment.slug);
    assert.ok(article, `Missing medical article: ${treatment.slug}`);
    assert.equal(article.topic, treatment.title);
    assert.ok(isSkinTreatmentPublished(article));
    assert.ok(treatment.description.length > 20 && treatment.description.length <= 100);
    assert.notEqual(treatment.description, article.description);
    assert.notEqual(treatment.description, article.answer);
  }
});

test('the service section follows the introduction and precedes the unchanged consultation principles', () => {
  const page = source('../app/clinic/aesthetic/page.tsx');
  assert.ok(page.indexOf('className="page-hero aesthetic-hero"') < page.indexOf('aria-labelledby="treatments-title"'));
  assert.ok(page.indexOf('aria-labelledby="treatments-title"') < page.indexOf('>상담 원칙<'));
  assert.match(page, /<h2 id="treatments-title">주요 피부치료<\/h2>/);
  assert.match(page, /href=\{`\/medical\/skin-treatments\/\$\{treatment\.slug\}`\}/);
  assert.match(page, /aria-label=\{`\$\{treatment\.title\} 의료정보 보기`\}/);
  for (const text of ['피부 상태부터 확인합니다', '기대효과와 한계를 설명합니다', '필요한 선택지를 제안합니다', '방문 전 안내']) assert.ok(page.includes(text));
  assert.match(page, /href="tel:054-776-0294">시술 문의/);
  assert.match(page, /href="\/location">진료시간 확인/);
  assert.match(page, /href="\/medical\/skin-treatments">피부치료 의료정보/);
});

test('the new card styles are responsive and expose a keyboard focus indicator', () => {
  const css = source('../app/clinic/aesthetic/aesthetic.module.css');
  assert.match(css, /repeat\(3, minmax\(0, 1fr\)\)/);
  assert.match(css, /repeat\(2, minmax\(0, 1fr\)\)/);
  assert.match(css, /grid-template-columns: minmax\(0, 1fr\)/);
  assert.match(css, /\.card:focus-visible\s*\{/);
});
