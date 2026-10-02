import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';

const source = path => readFileSync(new URL(path, import.meta.url), 'utf8');

test('clinic navigation and categories use the same weight-management name as medical information', () => {
  assert.match(source('../components/Header.tsx'), /\["비만·체중관리", "\/clinic\/obesity"\]/);
  assert.match(source('../components/Footer.tsx'), /href="\/clinic\/obesity">비만·체중관리<\/Link>/);
  assert.match(source('../app/page.tsx'), /title: "비만·체중관리"/);
  for (const path of ['../app/about/page.tsx', '../app/layout.tsx', '../app/clinic/obesity/page.tsx']) {
    assert.ok(source(path).includes('비만·체중관리'), path);
    assert.ok(!source(path).includes('비만치료'), path);
  }
  assert.match(source('../app/medical/obesity/page.tsx'), /<h1>비만·체중관리 의료정보<\/h1>/);
  assert.match(source('../app/clinic/obesity/page.tsx'), /title: "경주 비만·체중관리 상담"/);
});

test('drug-page category labels and clinic backlinks are consistent while clinical treatment language stays intact', () => {
  for (const drug of ['mounjaro', 'wegovy']) {
    const text = source(`../app/clinic/${drug}/page.tsx`);
    assert.match(text, /className="kicker">비만·체중관리 · 약물치료/);
    assert.match(text, /href="\/clinic\/obesity">비만·체중관리 안내/);
    assert.ok(text.includes('비만치료 상담을 시행합니다'));
  }
  assert.match(source('../app/medical/obesity/mounjaro-guide/page.tsx'), /href="\/clinic\/obesity">비만·체중관리<\/Link>/);
});

test('existing clinic and medical-information URLs are preserved', () => {
  assert.match(source('../app/clinic/obesity/page.tsx'), /canonical: "\/clinic\/obesity"/);
  assert.match(source('../app/medical/obesity/page.tsx'), /canonical: "\/medical\/obesity"/);
  assert.match(source('../app/clinic/obesity/page.tsx'), /href="\/medical\/obesity">비만·체중관리 의료정보/);
});
