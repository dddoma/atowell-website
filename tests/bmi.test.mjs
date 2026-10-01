import assert from 'node:assert/strict';
import test from 'node:test';
import { BMI_THRESHOLDS, BMI_BANDS, BMI_COLUMNS, bmiPosition, getBmiStatus } from '../lib/bmi.ts';

test('preserves original 20/25/30 thresholds and category boundary behavior', () => {
  assert.deepEqual(BMI_THRESHOLDS, [20, 25, 30]);
  for (const [bmi, label] of [[10, '저체중'], [19.999, '저체중'], [20, '정상'], [24.999, '정상'], [25, '과체중'], [29.999, '과체중'], [30, '비만'], [60, '비만']]) {
    assert.equal(getBmiStatus(bmi).label, label);
  }
});

test('preserves gauge domain, clamping and band proportions', () => {
  assert.equal(bmiPosition(10), 0);
  assert.equal(bmiPosition(14), 0);
  assert.equal(bmiPosition(40), 100);
  assert.equal(bmiPosition(60), 100);
  assert.equal(BMI_COLUMNS, '6fr 5fr 5fr 10fr');
  assert.deepEqual(BMI_BANDS.map(({ color }) => color), ['#5fc7ff', '#52dd99', '#ffd166', '#ff6b72']);
});
