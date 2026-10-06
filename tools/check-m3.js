// Numbers and projections used in Module 3 notes and figures. node tools/check-m3.js
const assert = require('assert');
const { GEO: A } = require('./figs/m3a.js');

// A-series trimmed sizes (IS 10711, slide L1-16)
const table = [[841, 1189], [594, 841], [420, 594], [297, 420], [210, 297], [148, 210]];
assert.deepStrictEqual(A.sheets, table, 'A0..A5 by halving');
assert.ok(Math.abs(841 * 1189 / 1e6 - 1) < 0.001, 'A0 is about 1 m2');
table.forEach(([a, b]) => assert.ok(Math.abs(b / a - Math.SQRT2) < 0.01, 'sides in ratio root 2'));
// untrimmed sizes from the same table, each bigger than trimmed
[[880, 1230], [625, 880], [450, 625], [330, 450], [240, 330], [165, 240]].forEach(([a, b], i) => assert.ok(a > table[i][0] && b > table[i][1]));

// A2 layout (slide L1-18): margins and title block fit
const g = A.layout;
assert.strictEqual(g.workW, 544); assert.strictEqual(g.workH, 380);
assert.ok(g.tw < g.workW && g.th < g.workH);

// Scales (slides L1-19, L1-20): drawn = actual x factor
const drawn = (actual, n, d) => actual * n / d;
assert.strictEqual(A.scale.drawnLeg, 50); assert.strictEqual(A.scale.drawnT, 5);
[[100, 1, 2, 50], [10, 1, 2, 5], [250, 1, 5, 50], [60, 1, 5, 12], [40, 1, 5, 8], [20, 1, 5, 4], [1000, 1, 10, 100], [40, 1, 10, 4],
 [10000, 1, 100, 100], [20000, 1, 100, 200], [6, 2, 1, 12], [10, 2, 1, 20], [8, 5, 1, 40]].forEach(([a, n, d, e]) => assert.strictEqual(drawn(a, n, d), e, `${a} at ${n}:${d}`));

console.log('m3 numbers ok: A0..A5', table.map(t => t.join('x')).join(', '), '| A2 working area', g.workW + 'x' + g.workH);
