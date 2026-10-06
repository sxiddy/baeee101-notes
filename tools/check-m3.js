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

// Chunk 3b: lines, lettering, dimensioning
const { GEO: B } = require('./figs/m3b.js');
assert.deepStrictEqual(B.lineLetters, ['A','B','C','D','E','F','G','H','J','K'], 'IS 10714 letters, no I');
assert.strictEqual(B.demo.baseMM, 90, 'demo base drawn 90 mm'); assert.strictEqual(B.demo.holeDia, 12, 'demo hole 12');
assert.strictEqual(B.dimsys.w, 50); assert.strictEqual(B.dimsys.h, 30);
[[0.7, 0.35], [0.5, 0.25]].forEach(([t, n]) => assert.strictEqual(t / n, 2, 'thick : thin = 2 : 1'));
[[1.0, 0.5], [0.7, 0.35], [0.5, 0.25]].forEach(([t, n]) => assert.strictEqual(t / n, 2, 'slide 8 widths A0/A1/A3 thick vs thin'));
const lower = h => [0.7 * h, 0.3 * h]; assert.deepStrictEqual(lower(10).map(v => +v.toFixed(2)), [7, 3], 'lowercase body 0.7h, ascender 0.3h');

// Chunk 3c: orthographic projection of the slide-18 block (first angle)
const { GEO: C } = require('./figs/m3c.js');
const b = C.block, m = b.model;
// every model point: FV and TV share the x screen position (vertical projector); FV and LSV share the z screen position (horizontal projector)
for (const x of [0, 20, 30, 50]) for (const y of [0, 10, 40, 50]) for (const z of [0, 10, 40]) {
  assert.strictEqual(b.FV(x, z)[0], b.TV(x, y)[0], 'FV-TV projector at x=' + x);
  assert.strictEqual(b.FV(x, z)[1], b.SV(y, z)[1], 'FV-LSV projector at z=' + z);
}
// first angle placement: FV above XY, TV below XY, LSV to the right of the FV
assert.ok(b.FV(0, 0)[1] < b.xyY && b.TV(0, 0)[1] > b.xyY);
assert.ok(b.SV(0, 0)[0] > b.FV(50, 0)[0], 'left view drawn on the right');
// first angle: the front of the object (y = 0) faces away from the FV in the top and side views
assert.ok(b.SV(0, 0)[0] > b.SV(50, 0)[0], 'LSV: front far from the FV');
assert.ok(b.TV(0, 0)[1] - b.xyY > b.TV(0, 50)[1] - b.xyY, 'TV: front far from XY');
// model sizes match the slide: base 50 x 50 x 10, ribs 10 thick, rib top 10 wide starting 20 from the left
assert.deepStrictEqual([m.base.x[1], m.base.y[1], m.base.z[1]], [50, 50, 10]);
m.ribY.forEach(([a, c]) => assert.strictEqual(c - a, 10, 'rib thickness'));
assert.strictEqual(m.ribXZ[0][0], 20); assert.strictEqual(m.ribXZ[2][0] - m.ribXZ[1][0], 10);
assert.deepStrictEqual(m.ribXZ[3], [50, 10], 'slope ends at the right corner of the base top');
// view sizes in mm (screen / k)
const k = b.k, mm = (p, q, i) => Math.abs(p[i] - q[i]) / k;
assert.strictEqual(mm(b.FV(0, 0), b.FV(50, 0), 0), 50); assert.strictEqual(mm(b.FV(0, 0), b.FV(0, 40), 1), 40);
assert.strictEqual(mm(b.TV(0, 0), b.TV(0, 50), 1), 50); assert.strictEqual(mm(b.SV(0, 0), b.SV(50, 0), 0), 50);
// six-view placement and quadrants
assert.deepStrictEqual(C.six.first, { top: 'below', bottom: 'above', left: 'right', right: 'left' });
assert.deepStrictEqual(C.six.third, { top: 'above', bottom: 'below', left: 'left', right: 'right' });
assert.ok(C.symbols.firstCirclesRight && !C.symbols.thirdCirclesRight);

console.log('m3 numbers ok: A0..A5', table.map(t => t.join('x')).join(', '), '| A2 working area', g.workW + 'x' + g.workH);
