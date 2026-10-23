import assert from 'node:assert/strict';
import test from 'node:test';
import { koreaDate, addWeeks, weightRange, contactText, buildPlanMessage } from '../lib/maintenancePlan.ts';
test('BMI target, half-kg range, and invalid height handling', () => {
 assert.deepEqual(weightRange('165',24,1.5), {target:65.3,low:63.8,high:66.8});
 assert.deepEqual(weightRange('170',20,0.5), {target:57.8,low:57.3,high:58.3});
 assert.deepEqual(weightRange('170',30,3), {target:86.7,low:83.7,high:89.7});
 for(const v of ['', 'abc', '0', '-1', '99', '231']) assert.equal(weightRange(v,24,1.5),null);
});
test('four calendar weeks uses Korean date and handles month/year/leap boundaries', () => {
 assert.equal(koreaDate(new Date('2026-10-23T15:01:00Z')),'2026-10-24');
 assert.equal(addWeeks('2026-10-23'),'2026-11-20');
 assert.equal(addWeeks('2026-12-20'),'2027-01-17');
 assert.equal(addWeeks('2028-02-10'),'2028-03-09');
});
test('SMS includes selected content, computed bounds, date, canonical guide and clinic phone', () => {
 const range=weightRange('165',24,1.5);
 const message=buildPlanMessage({date:'2026-10-23',bmi:24,range,margin:1.5,contact:contactText(range),meals:['단백질 챙기기'],exercise:'걷기: 하루 20분, 주 5일',medicine:'현재 처방 유지',nextDate:'2026-11-20'});
 for(const value of ['63.8~66.8kg','단백질 챙기기','하루 20분','2026-11-20','https://atowell.kr/medical/obesity/weight-maintenance']) assert.ok(message.includes(value));
 assert.ok(message.endsWith('아토웰의원 054-776-0294\n'));
});
