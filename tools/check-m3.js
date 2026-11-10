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
assert.strictEqual(B.demo.baseMM, 90, 'demo base drawn 90 mm'); assert.strictEqual(B.demo.holeDia, 10, 'demo hole 10');
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

// Chunk 3d: projections of solids (models in tools/figs/m3d.js)
const { GEO: D } = require('./figs/m3d.js');
const dist = (p, q) => Math.hypot(...p.map((v, i) => v - q[i]));
const near = (a, b, msg) => assert.ok(Math.abs(a - b) < 1e-6, msg + ': ' + a + ' vs ' + b);
const sides = (P) => P.map((p, i) => dist(p, P[(i + 1) % P.length]));
// hexagonal pyramid: base side 30 on the HP, axis 60, one base edge at 45 deg to the VP (x axis in the top view)
const hp = D.hexPyr; sides(hp.hex).forEach(d => near(d, 30, 'hex side'));
hp.hex.forEach(p => near(p[2], 0, 'base on HP'));
const apex = hp.S.V[6]; near(apex[2], 60, 'axis 60'); near(dist([apex[0], apex[1]], [0, apex[1]]), 0, 'apex over centre x');
const ang = hp.hex.map((p, i) => { const q = hp.hex[(i + 1) % 6]; return ((Math.atan2(q[1] - p[1], q[0] - p[0]) * 180 / Math.PI) + 360) % 180; });
assert.ok(ang.some(a => Math.abs(a - 45) < 1e-6), 'one edge at 45 deg');
assert.strictEqual(hp.S.E.length, 12, 'hex pyramid has 12 edges'); assert.strictEqual(hp.tv.filter(g => !g.vis).length, 0, 'top view: nothing hidden');
assert.ok(hp.fv.some(g => !g.vis), 'front view has hidden slant edges');
// triangular prism: equilateral 40, axis 50, one rectangular face perpendicular to the VP (its top-view edge along y)
const tp = D.triPrism.S; sides(tp.V.slice(0, 3)).forEach(d => near(d, 40, 'triangle side')); near(tp.V[3][2], 50, 'axis 50');
near(tp.V[0][0], tp.V[1][0], 'face edge perpendicular to XY');
// pentagonal prism: end edge 20, length 50, ends parallel to the VP, face ab at 45 deg to the HP rising to the left, corner b on the HP
const pp = D.pentPrism; sides(pp.pent).forEach(d => near(d, 20, 'pentagon side'));
near(pp.pent[1][1], 0, 'b on HP'); assert.ok(Math.min(...pp.pent.map(p => p[1])) > -1e-9, 'nothing below HP');
near(Math.atan2(pp.pent[0][1] - pp.pent[1][1], pp.pent[0][0] - pp.pent[1][0]) * 180 / Math.PI, 135, 'ab at 45 deg, to the left');
near(pp.S.V[5][1] - pp.S.V[0][1], 50, 'length 50'); assert.strictEqual(D.pentPrism.tv.filter(g => !g.vis).length, 1, 'one hidden long edge (b) in TV');
// square pyramid: base 40 in the VP, axis 65, edge dc at 30 deg to the HP, corner d on the HP
const sp = D.sqPyr; sides(sp.sq).forEach(d => near(d, 40, 'square side')); sp.S.V.slice(0, 4).forEach(p => near(p[1], 0, 'base in VP'));
near(sp.sq[0][1], 0, 'corner on HP'); near(Math.atan2(sp.sq[1][1], sp.sq[1][0]) * 180 / Math.PI, 30, 'edge at 30 deg');
near(sp.S.V[4][1], 65, 'axis 65'); assert.ok(Math.min(...sp.sq.map(p => p[1])) > -1e-9);
// cylinder and cone (Problem 13-3)
assert.deepStrictEqual([D.cylCone.fvW, D.cylCone.fvH], [40, 50]);

// Questions q-3a / q-3b
assert.strictEqual(drawn(1000, 1, 10), 100); assert.strictEqual(drawn(40, 1, 10), 4); assert.strictEqual(drawn(8, 5, 1), 40);
assert.deepStrictEqual([594 / 2, 420], [297, 420]); assert.deepStrictEqual([Math.floor(420 / 2), 297], [210, 297]);
near(40 * Math.sqrt(3) / 2, 34.64101615137755, 'tri prism FV width'); assert.strictEqual(+(40 * Math.sqrt(3) / 2).toFixed(1), 34.6);
assert.strictEqual(10 + 30, 40, 'slide 18 block height');

// Audit additions: A6-A8, dimensioned plate, title block, solids worked problems
assert.deepStrictEqual([[148, 105], [105, 74], [74, 52]].map(([a, b]) => [b, a]), [[105, 148], [74, 105], [52, 74]], 'A6, A7, A8 by halving the long side of A5, A6, A7');
assert.strictEqual(16 + 28 + 16, 60, 'plate: 16 + 28 + 16 = 60'); assert.strictEqual(20 + 75 + 40 + 35, 170, 'base plate stations sum to 170');
assert.strictEqual(30 + 30, 60); assert.strictEqual(100 * 0.5, 50); assert.strictEqual(250 * 0.2, 50); assert.strictEqual(2 * 6, 12);
assert.strictEqual(+(35 * Math.sqrt(3) / 2).toFixed(1), 30.3, 'tri prism 35 top-view depth');
assert.strictEqual(+(25 * Math.sqrt(3)).toFixed(1), 43.3, 'hexagon side 25 across flats'); assert.strictEqual(2 * 25, 50, 'hexagon corner to corner');
assert.strictEqual(+(30 / (2 * Math.sin(Math.PI / 5)) + 30 / (2 * Math.tan(Math.PI / 5))).toFixed(1), 46.2, 'pentagon side 30, corner down');
assert.strictEqual(+(30 / (2 * Math.sin(Math.PI / 5))).toFixed(1), 25.5); assert.strictEqual(+(30 / (2 * Math.tan(Math.PI / 5))).toFixed(1), 20.6);
assert.strictEqual(25 * 2 === 50 && 2.5 * 10 === 25 && 5 * 10 === 50 && 3.5 * 10 === 35 && 2 * 10 === 20, true, 'Problem 13-7 cm to mm');

console.log('m3 numbers ok: A0..A5', table.map(t => t.join('x')).join(', '), '| A2 working area', g.workW + 'x' + g.workH);
