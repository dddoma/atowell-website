import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';

const source = path => readFileSync(new URL(path, import.meta.url), 'utf8');

test('navigation, page labels, and site metadata use the skin-treatment category', () => {
  for (const path of ['../components/Header.tsx', '../components/Footer.tsx', '../app/page.tsx', '../app/about/page.tsx', '../app/layout.tsx', '../app/clinic/aesthetic/page.tsx', '../app/medical/skin-treatments/page.tsx']) {
    const text = source(path);
    assert.ok(text.includes('피부치료'), path);
    assert.ok(!text.includes('피부미용'), path);
  }
  assert.match(source('../components/Header.tsx'), /\["피부치료", "\/clinic\/aesthetic"\]/);
  assert.match(source('../components/Footer.tsx'), /href="\/clinic\/aesthetic">피부치료<\/Link>/);
  assert.match(source('../app/clinic/aesthetic/page.tsx'), /title: "경주 피부치료 상담"/);
  assert.match(source('../app/medical/skin-treatments/page.tsx'), /href="\/clinic\/aesthetic">피부치료 진료 안내/);
});

test('the category subtitle appears on the home care card and clinic page without changing the route', () => {
  const home = source('../app/page.tsx');
  const page = source('../app/clinic/aesthetic/page.tsx');
  assert.match(home, /title: "피부치료",\s+subtitle: "피부 병변 제거와 레이저·주사 시술"/);
  assert.match(home, /area.subtitle && <p className="care-subtitle">\{area.subtitle\}<\/p>/);
  assert.match(page, /<div className="kicker">피부치료<\/div>\s+<p className=\{styles.subtitle\}>피부 병변 제거와 레이저·주사 시술<\/p>/);
  assert.match(page, /canonical: "\/clinic\/aesthetic"/);
  assert.match(source('../app/sitemap.ts'), /"\/clinic\/aesthetic": "2026-10-02"/);
});

test('clinical cosmetic-purpose wording and non-covered price information remain intact', () => {
  const articles = source('../data/skinTreatmentArticles.ts');
  const prices = source('../app/price/page.tsx');
  assert.ok(articles.includes('미용 목적의 제거에 앞서 진단이 필요합니다'));
  assert.ok(articles.includes('성인의 미용 목적 시술을 이해하기 위한 일반 안내'));
  assert.match(prices, /<div className="eyebrow">피부치료<\/div><h2>레이저·주사 시술<\/h2>/);
  assert.ok(prices.includes('비급여 가격 안내'));
});
