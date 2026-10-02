import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';

const source = path => readFileSync(new URL(path, import.meta.url), 'utf8');
const medicalCss = source('../app/medical/dermatology/[slug]/article.module.css');
const cellRule = medicalCss.match(/\.tableScroll th, \.tableScroll td\s*\{([^}]+)\}/)?.[1];

test('medical table cells explicitly override the global price-table nowrap rule', () => {
  assert.match(source('../app/globals.css'), /th, td\s*\{[^}]*white-space:\s*nowrap/);
  assert.ok(cellRule);
  assert.match(cellRule, /white-space:\s*normal\s*;/);
  assert.match(cellRule, /overflow-wrap:\s*anywhere\s*;/);
  assert.match(cellRule, /vertical-align:\s*top\s*;/);
  assert.match(cellRule, /padding:\s*14px\s*;/);
});

test('narrow medical tables retain a bounded horizontal-scroll container', () => {
  assert.match(medicalCss, /\.tableScroll\s*\{[^}]*overflow-x:\s*auto/);
  assert.match(medicalCss, /\.tableScroll table\s*\{[^}]*table-layout:\s*fixed;[^}]*min-width:\s*520px/);
  const page = source('../app/medical/dermatology/[slug]/page.tsx');
  assert.match(page, /className=\{styles\.tableScroll\} role="region" aria-label=\{section\.title\} tabIndex=\{0\}/);
});
