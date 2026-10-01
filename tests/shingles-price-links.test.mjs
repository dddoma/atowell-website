import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const source = path => readFileSync(new URL(path, import.meta.url), 'utf8');
const load = async text => import(`data:text/javascript;base64,${Buffer.from(ts.transpileModule(text, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText).toString('base64')}`);
const { herpesArticles } = await load(source('../data/herpesArticles.ts'));

test('vaccine FAQ links directly to the existing vaccination price section', () => {
  const article = herpesArticles.find(article => article.slug === 'shingles');
  const faq = article.faq.find(faq => faq.id === 'vaccination');
  assert.match(faq.answer, /현재 대상포진을 치료하지 않습니다/);
  assert.deepEqual(faq.links, [{ title: '대상포진 예방접종 비용 확인하기 (1회·2회)', href: '/price#vaccinations' }]);
  assert.doesNotMatch(JSON.stringify(article), /220,000|440,000/);
  for (const other of herpesArticles.filter(article => article.slug !== 'shingles')) {
    assert.ok(other.faq.every(faq => !faq.links));
  }
});

test('price card preserves central prices and links back to the vaccine explanation', () => {
  const page = source('../app/price/page.tsx');
  assert.match(page, /id="vaccinations"/);
  assert.match(page, /GeneralPriceTable items=\{vaccinationPrices\}/);
  assert.match(page, /href="\/medical\/dermatology\/shingles#vaccination"/);
  assert.doesNotMatch(page, /220,000|440,000/);
});

test('FAQ renders optional links and both anchor destinations clear the sticky header', () => {
  const page = source('../app/medical/dermatology/[slug]/page.tsx');
  assert.match(page, /id=\{faq.id\}/);
  assert.match(page, /faq.links.map/);
  assert.match(source('../app/medical/dermatology/[slug]/article.module.css'), /\.faqItem\s*\{\s*scroll-margin-top: 100px/);
  assert.match(source('../app/globals.css'), /\.price-card\[id\]\s*\{\s*scroll-margin-top: 100px/);
});
