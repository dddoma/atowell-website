import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { scrollRailToItem } from '../app/bmi/scrollRail.ts';

function fixture({ itemLeft = 360, itemTop = 1200, scrollLeft = 200 } = {}) {
  const calls = [];
  const rail = {
    clientWidth: 300, clientLeft: 1, scrollWidth: 1800,
    scrollLeft, scrollTop: 7,
    getBoundingClientRect: () => ({ left: 100, top: 1200 }),
    scrollTo: options => calls.push(options),
  };
  const item = {
    getBoundingClientRect: () => ({ left: itemLeft, top: itemTop, width: 48 }),
    scrollIntoView: () => assert.fail('Must not scroll viewport ancestors'),
  };
  return { rail, item, calls };
}

test('centers only the rail and preserves its vertical position', () => {
  const { rail, item, calls } = fixture();
  scrollRailToItem(rail, item);
  assert.deepEqual(calls, [{ left: 333, top: 7, behavior: 'auto' }]);
});

test('offscreen target BMI chips never trigger ancestor/viewport scrolling', () => {
  for (const itemTop of [-10000, 10000]) {
    const { rail, item, calls } = fixture({ itemTop });
    scrollRailToItem(rail, item, 'smooth');
    assert.deepEqual(calls, [{ left: 333, top: 7, behavior: 'smooth' }]);
  }
});

test('clamps the first and last chips inside the horizontal rail', () => {
  for (const [itemLeft, expected] of [[-500, 0], [5000, 1500]]) {
    const { rail, item, calls } = fixture({ itemLeft });
    scrollRailToItem(rail, item);
    assert.equal(calls[0].left, expected);
  }
});

test('does nothing for unavailable rail or a BMI shortcut outside the range', () => {
  const { rail, item, calls } = fixture();
  scrollRailToItem(null, item);
  scrollRailToItem(rail, undefined);
  assert.deepEqual(calls, []);
});

test('all input and BMI chip effects use rail-scoped scrolling', () => {
  const source = readFileSync(new URL('../app/bmi/BmiCalculator.tsx', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /scrollIntoView/);
  assert.equal((source.match(/scrollRailToItem\(railRef\.current/g) || []).length, 4);
  assert.equal((source.match(/ref=\{railRef\}/g) || []).length, 2);
});
