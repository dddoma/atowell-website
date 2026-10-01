import assert from 'node:assert/strict';
import test from 'node:test';
import { existsSync, readFileSync } from 'node:fs';
import nextConfig from '../next.config.ts';

const source = path => readFileSync(new URL(path, import.meta.url), 'utf8');

test('permanently redirects the previous BMI URL to the tools route', async () => {
  const redirects = await nextConfig.redirects();
  assert.deepEqual(redirects.find(({ source }) => source === '/bmi'), {
    source: '/bmi', destination: '/tools/bmi', permanent: true,
  });
});

test('serves the calculator only at the new canonical route', () => {
  assert.match(source('../app/tools/bmi/page.tsx'), /canonical: "\/tools\/bmi"/);
  assert.equal(existsSync(new URL('../app/bmi/page.tsx', import.meta.url)), false);
});

test('obesity page links directly to the tools route in a safe new tab', () => {
  const page = source('../app/clinic/obesity/page.tsx');
  assert.match(page, /href="\/tools\/bmi"\s+target="_blank"\s+rel="noopener noreferrer"/);
  assert.doesNotMatch(page, /href="\/bmi"/);
});
