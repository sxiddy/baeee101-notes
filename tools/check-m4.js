// Numbers used in Module 4 notes. node tools/check-m4.js
const assert = require('assert');
const dof = (N, P1, P2 = 0) => 3 * (N - 1) - 2 * P1 - P2;
assert.strictEqual(dof(4, 4), 1, 'slider crank');
assert.strictEqual(20 - 17, 3, 'rolling draft example');
assert.ok(1 * 4500 > 2000, '1 kg U vs coal and oil');
console.log('m4 numbers ok: slider crank F =', dof(4, 4), ', draft =', 20 - 17, 'mm');
