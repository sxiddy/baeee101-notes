// Numbers used in Module 4 notes. node tools/check-m4.js
const assert = require('assert');
const dof = (N, P1, P2 = 0) => 3 * (N - 1) - 2 * P1 - P2;
assert.strictEqual(dof(4, 4), 1, 'slider crank');
assert.strictEqual(20 - 17, 3, 'rolling draft example');
assert.ok(1 * 4500 > 2000, '1 kg U vs coal and oil');
assert.strictEqual(24*1.0/20,1.2); assert.strictEqual(dof(6,7),1); assert.strictEqual(dof(7,9),0); assert.strictEqual(dof(5,4,1),3); assert.strictEqual(dof(4,4),1);
assert.strictEqual(400*3*0.25,300); assert.strictEqual(3000/2,1500); assert.strictEqual(2*4500,9000); assert.strictEqual(2*2000,4000);
console.log('m4 numbers ok: slider crank F =', dof(4, 4), ', draft =', 20 - 17, 'mm');
