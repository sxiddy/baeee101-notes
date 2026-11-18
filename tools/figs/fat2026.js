// Generates the figures of the Fall 2026-27 FAT papers (fat-a1-2026, fat-a2-2026, fat-b1-2026) into figs-svg/:
// the question circuits, redrawn from the scans, and the isometric views drawn in the model answers.
// Usage: node tools/figs/fat2026.js figs-svg
// Exports GEO (the numbers drawn) so tools/check-papers.js can check them.
const fs = require('fs');
const path = require('path');
const out = process.argv[2] || 'figs-svg';

const MK = ['w', 'b', 'o', 'r'].map((c) => `<marker id="a${c}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="13" markerHeight="13" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0 0 10 5 0 10z" class="df${c}"/></marker>`).join('');
const f1 = (n) => Math.round(n * 10) / 10;
const svg = (h, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 ${h}">\n<defs>${MK}</defs>\n${body}\n</svg>\n`;
const T = (x, y, s, o = {}) => `<text x="${f1(x)}" y="${f1(y)}" font-size="${o.size || 24}" class="${o.c || 'dt'}"${o.anchor ? ` text-anchor="${o.anchor}"` : ''}${o.w ? ` font-weight="${o.w}"` : ''}${o.i ? ' font-style="italic"' : ''}>${s}</text>`;
const sub = (a, b) => `${a}<tspan dy="7" font-size="22">${b}</tspan>`;
const P = (d, o = {}) => `<path d="${d}" class="${o.c || 'ds'}" stroke-width="${o.w || 2.5}" fill="${o.fill || 'none'}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}${o.arrow ? ` marker-end="url(#a${o.arrow})"` : ''}${o.arrowS ? ` marker-start="url(#a${o.arrowS})"` : ''}/>`;
const pl = (pts, o) => P('M' + pts.map((p) => p.map(f1).join(' ')).join('L'), o);
const dot = (x, y) => `<circle cx="${x}" cy="${y}" r="6" class="dfw"/>`;

// an element centred on the segment (x1,y1)-(x2,y2), drawn in a local frame (u along the segment)
function along(x1, y1, x2, y2, len, drawLocal) {
  const dx = x2 - x1, dy = y2 - y1, d = Math.hypot(dx, dy), ux = dx / d, uy = dy / d;
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  const at = (u, v) => [mx + ux * u - uy * v, my + uy * u + ux * v];
  return pl([[x1, y1], at(-len / 2, 0)]) + pl([at(len / 2, 0), [x2, y2]]) + drawLocal(at);
}
const res = (x1, y1, x2, y2, len = 64) => along(x1, y1, x2, y2, len, (at) => {
  const pts = [at(-len / 2, 0)], n = 6, st = len / n;
  for (let i = 0; i < n; i++) pts.push(at(-len / 2 + st * (i + 0.5), i % 2 ? 12 : -12));
  pts.push(at(len / 2, 0));
  return pl(pts);
});
const wire = (...pts) => (Array.isArray(pts[pts.length - 1]) ? pl(pts) : pl(pts.slice(0, -1), pts[pts.length - 1]));
// vertical battery, long (+) plate on top
function battV(x, y1, y2) {
  const m = (y1 + y2) / 2;
  return wire([x, y1], [x, m - 8]) + wire([x, m + 8], [x, y2]) + wire([x - 26, m - 8], [x + 26, m - 8], { w: 3 }) + `<line x1="${x - 14}" y1="${m + 8}" x2="${x + 14}" y2="${m + 8}" class="ds" stroke-width="7"/>`;
}
// current source on a vertical branch, arrow up (dir = -1) or down (dir = 1)
function isrcV(x, y1, y2, dir) {
  const m = (y1 + y2) / 2, r = 28;
  return wire([x, y1], [x, m - r]) + wire([x, m + r], [x, y2]) + `<circle cx="${x}" cy="${m}" r="${r}" class="ds" fill="none" stroke-width="2.5"/>` + P(`M${x} ${m - dir * 17}L${x} ${m + dir * 15}`, { arrow: 'w' });
}
// current source on a horizontal branch, arrow right (dir = 1) or left (dir = -1)
function isrcH(x1, x2, y, dir) {
  const m = (x1 + x2) / 2, r = 26;
  return wire([x1, y], [m - r, y]) + wire([m + r, y], [x2, y]) + `<circle cx="${m}" cy="${y}" r="${r}" class="ds" fill="none" stroke-width="2.5"/>` + P(`M${m - dir * 16} ${y}L${m + dir * 14} ${y}`, { arrow: 'w' });
}
const ground = (x, y) => wire([x, y], [x, y + 14]) + wire([x - 20, y + 14], [x + 20, y + 14]) + wire([x - 12, y + 22], [x + 12, y + 22]) + wire([x - 4, y + 30], [x + 4, y + 30]);

const figs = {};
const GEO = {};

// ---- A1 (M1, M2) Q1: superposition, branch AB
{
  const yt = 90, yb = 300;
  let s = '';
  s += battV(60, yt, yb) + T(52, 245, '12 V', { anchor: 'end' }) + T(88, 172, '+', { c: 'dt2' });
  s += res(60, yt, 230, yt) + T(145, yt - 24, '2 Ω', { anchor: 'middle' });
  s += res(230, yt, 390, yt) + T(310, yt - 24, '4 Ω', { anchor: 'middle' });
  s += wire([390, yt], [550, yt]);
  s += res(230, yt, 230, yb) + T(250, 205, '6 Ω');
  s += res(390, yt, 390, yb) + T(410, 205, '2 Ω');
  s += res(470, yt, 470, yb) + T(462, 250, '2 Ω', { anchor: 'end' });
  s += isrcV(550, yt, yb, -1) + T(596, 250, '9 A', { anchor: 'end' });
  s += wire([60, yb], [550, yb]);
  s += dot(230, yt) + dot(390, yt) + dot(470, yt) + dot(230, yb) + dot(390, yb) + dot(470, yb);
  s += T(230, yt - 22, 'A', { anchor: 'middle', w: 700, c: 'dtb' }).replace(`y="${yt - 22}"`, `y="${yt - 50}"`) + T(390, yt - 50, 'B', { anchor: 'middle', w: 700, c: 'dtb' });
  figs['m1-fat26-a1-q1'] = svg(360, s);
}

// ---- A1 (M1, M2) Q2: mesh analysis, two 12 V sources
{
  const yt = 80, yb = 300;
  let s = '';
  s += battV(60, yt, yb) + T(52, 245, '12 V', { anchor: 'end' }) + T(88, 172, '+', { c: 'dt2' });
  s += res(60, yt, 230, yt) + T(145, yt - 24, '2 Ω', { anchor: 'middle' });
  s += res(230, yt, 400, yt) + T(315, yt - 24, '7 Ω', { anchor: 'middle' });
  s += res(400, yt, 540, yt) + T(470, yt - 24, '3 Ω', { anchor: 'middle' });
  s += res(230, yt, 230, yb) + T(250, 205, '4 Ω');
  s += res(400, yt, 400, yb) + T(420, 205, '6 Ω');
  s += battV(540, yt, yb) + T(568, 172, '+', { c: 'dt2' }) + T(592, 240, '12 V', { anchor: 'end' });
  s += wire([60, yb], [540, yb]) + dot(230, yt) + dot(400, yt) + dot(230, yb) + dot(400, yb);
  figs['m1-fat26-a1-q2'] = svg(330, s);
}

// ---- A1 (M1, M2) Q3: series RLC on 50 V at 0°
{
  const yt = 90, yb = 300;
  let s = '';
  s += wire([70, yt], [70, 165]) + wire([70, 225], [70, yb]) + `<circle cx="70" cy="195" r="30" class="ds" fill="none" stroke-width="2.5"/>` + P('M52 195C58 177 64 177 70 195S82 213 88 195');
  s += T(110, 175, '+', { c: 'dt2' }) + T(110, 250, '−', { c: 'dt2' }) + T(110, 205, 'E = 50∠0° V', { c: 'dtb' });
  s += res(70, yt, 230, yt) + T(150, yt - 26, 'R = 3 Ω', { anchor: 'middle' });
  // inductor: four loops
  s += wire([230, yt], [270, yt]);
  let d = 'M270 ' + yt;
  for (let i = 0; i < 4; i++) d += `a12 14 0 0 1 24 0`;
  s += P(d) + wire([366, yt], [410, yt]) + T(318, yt - 30, sub('X', 'L') + ' = 7 Ω', { anchor: 'middle' });
  // capacitor
  s += wire([410, yt], [452, yt]) + `<line x1="452" y1="${yt - 22}" x2="452" y2="${yt + 22}" class="ds" stroke-width="3"/><line x1="466" y1="${yt - 22}" x2="466" y2="${yt + 22}" class="ds" stroke-width="3"/>` + wire([466, yt], [540, yt]) + T(470, yt - 34, sub('X', 'C') + ' = 10 Ω', { anchor: 'middle' });
  s += wire([540, yt], [540, yb]) + wire([70, yb], [540, yb]);
  s += P(`M568 160L568 240`, { c: 'dsb', arrow: 'b' }) + T(580, 205, 'I', { c: 'dtb', i: 1 });
  s += T(150, yt + 46, '+ ' + sub('V', 'R') + ' −', { anchor: 'middle', c: 'dt2', size: 22 }) + T(318, yt + 46, '+ ' + sub('V', 'L') + ' −', { anchor: 'middle', c: 'dt2', size: 22 }) + T(459, yt + 46, '+ ' + sub('V', 'C') + ' −', { anchor: 'middle', c: 'dt2', size: 22 });
  figs['m1-fat26-a1-q3'] = svg(330, s);
}

// ---- A2 Q1: node voltage analysis, 6 A and 10 A sources
{
  const yt = 90, yb = 300;
  let s = '';
  s += isrcV(70, yt, yb, -1) + T(20, 205, '6 A', { anchor: 'middle' }).replace('x="20"', 'x="22"');
  s += res(210, yt, 210, yb) + T(230, 205, '8 Ω');
  s += res(210, yt, 390, yt) + T(300, yt - 24, '4 Ω', { anchor: 'middle' });
  s += res(390, yt, 390, yb) + T(410, 205, '2 Ω');
  s += isrcV(530, yt, yb, 1) + T(522, 150, '10 A', { anchor: 'end' });
  s += wire([70, yt], [210, yt]) + wire([390, yt], [530, yt]) + wire([70, yb], [530, yb]);
  s += dot(210, yt) + dot(390, yt) + dot(210, yb) + dot(390, yb) + ground(300, yb);
  s += T(210, yt - 24, sub('V', '1'), { anchor: 'middle', c: 'dtb', w: 700 }).replace(`x="210"`, 'x="190"') + T(410, yt - 24, sub('V', '2'), { anchor: 'middle', c: 'dtb', w: 700 });
  figs['m1-fat26-a2-q1'] = svg(345, s);
}

// ---- B1 (M1, M2) Q1: nodal analysis, three current sources, reference node D
{
  const yL = 300, xL = 110, xC = 300, xR = 490, D = [300, 470];
  let s = '';
  s += res(xL, yL, xC, yL) + T(205, yL + 40, '2 Ω', { anchor: 'middle' });
  s += res(xC, yL, xR, yL) + T(395, yL + 40, '3 Ω', { anchor: 'middle' });
  s += res(xL, yL, D[0], D[1]) + T(150, 410, '4 Ω', { anchor: 'middle' });
  s += res(xC, yL, D[0], D[1]) + T(322, 400, '2 Ω');
  s += res(xR, yL, D[0], D[1]) + T(450, 410, '5 Ω', { anchor: 'middle' });
  // 4 A from the left node to the centre node, 3 A from the centre to the right, 5 A from the right back to the left
  s += wire([xL, yL], [xL, 200]) + isrcH(xL, xC, 200, 1) + wire([xC, 200], [xC, yL]) + T(205, 160, '4 A', { anchor: 'middle' });
  s += isrcH(xC, xR, 200, 1) + wire([xR, 200], [xR, yL]) + T(395, 160, '3 A', { anchor: 'middle' });
  s += wire([xL, yL], [40, yL], [40, 80]) + isrcH(40, 560, 80, -1) + wire([560, 80], [560, yL], [xR, yL]) + T(300, 40, '5 A', { anchor: 'middle' });
  s += dot(xL, yL) + dot(xC, yL) + dot(xR, yL) + dot(xC, 200) + dot(D[0], D[1]);
  s += T(xL - 8, yL - 14, 'L', { anchor: 'end', c: 'dtb', w: 700 }).replace(`x="${xL - 8}"`, `x="${xL - 12}"`).replace(`y="${yL - 14}"`, `y="${yL + 34}"`);
  s += T(xC + 14, yL - 14, 'C', { c: 'dtb', w: 700 }) + T(xR + 12, yL + 34, 'R', { c: 'dtb', w: 700 }) + T(D[0], D[1] + 36, 'D', { anchor: 'middle', c: 'dtb', w: 700 });
  figs['m1-fat26-b1-q1'] = svg(520, s);
}

// ---- B1 (M1, M2) Q2: superposition, power in the 5 Ω
{
  const yt = 80, yb = 330, xl = 70, xX = 240, xY = 420, xs = 540;
  let s = '';
  s += res(xl, yt, xl, 200) + T(xl + 20, 150, '1 Ω');
  s += battV(xl, 200, yb) + T(xl - 30, 275, '2 V', { anchor: 'end' }).replace(`x="${xl - 30}"`, 'x="42"') + T(xl + 30, 252, '+', { c: 'dt2' });
  s += wire([xl, yt], [xX, yt]) + res(xX, yt, xX, yb) + T(xX + 20, 215, '10 Ω');
  s += res(xX, yt, xY, yt) + T(330, yt - 24, '5 Ω', { anchor: 'middle' });
  s += res(xY, yt, xY, yb) + T(xY + 20, 215, '15 Ω');
  s += wire([xY, yt], [xs, yt]) + isrcV(xs, yt, yb, 1) + T(xs - 36, 150, '4 A', { anchor: 'end' });
  s += wire([xl, yb], [xs, yb]) + dot(xX, yt) + dot(xY, yt) + dot(xX, yb) + dot(xY, yb);
  s += T(xX, yt - 24, 'X', { anchor: 'middle', c: 'dtb', w: 700 }).replace(`x="${xX}"`, `x="${xX - 18}"`) + T(xY + 18, yt - 24, 'Y', { anchor: 'middle', c: 'dtb', w: 700 });
  figs['m1-fat26-b1-q2'] = svg(360, s);
}

// ---- isometric views (true lengths along the three isometric axes)
const C30 = Math.cos(Math.PI / 6);
function isoFrame(k, cx, cy) { return (x, y, z) => [cx + (x - y) * C30 * k, cy + ((x + y) / 2 - z) * k]; }
const dimV = (x, y1, y2, label) => P(`M${f1(x)} ${f1(y1)}L${f1(x)} ${f1(y2)}`, { c: 'dsb', w: 2, arrow: 'b', arrowS: 'b' }) + T(x - 12, (y1 + y2) / 2 + 8, label, { anchor: 'end', c: 'dtb' });

// cylinder: diameter 60, height 65, base on HP, axis vertical
{
  const D = 60, H = 65, r = D / 2, k = 3.6, iso = isoFrame(k, 300, 370);
  const ring = (z, a0, a1, n = 120) => Array.from({ length: n + 1 }, (_, i) => { const t = a0 + (a1 - a0) * i / n; return iso(r * Math.cos(t), r * Math.sin(t), z); });
  // silhouette generators where the surface normal is square to the viewing direction (1,1,1): theta = 135° and 315°
  const tA = 3 * Math.PI / 4, tB = -Math.PI / 4;
  let s = '';
  s += pl(ring(H, 0, 2 * Math.PI), { w: 3.5 });
  s += pl(ring(0, tB, tA), { w: 3.5 });
  for (const t of [tA, tB]) s += pl([iso(r * Math.cos(t), r * Math.sin(t), 0), iso(r * Math.cos(t), r * Math.sin(t), H)], { w: 3.5 });
  // axis
  s += pl([iso(0, 0, -6), iso(0, 0, H + 8)], { c: 'dso', w: 1.8, dash: '18 5 3 5' });
  const pa = iso(r * Math.cos(tA), r * Math.sin(tA), 0), pb = iso(r * Math.cos(tA), r * Math.sin(tA), H);
  s += dimV(pa[0] - 30, pb[1], pa[1], '65');
  // diameter on the top ellipse, along the x axis
  const d1 = iso(-r, 0, H), d2 = iso(r, 0, H);
  s += P(`M${f1(d1[0])} ${f1(d1[1])}L${f1(d2[0])} ${f1(d2[1])}`, { c: 'dsb', w: 2, arrow: 'b', arrowS: 'b' }) + T((d1[0] + d2[0]) / 2 + 20, (d1[1] + d2[1]) / 2 - 10, 'Ø60', { c: 'dtb' });
  s += T(300, 30, 'Isometric view: cylinder Ø60 × 65', { anchor: 'middle', size: 24 });
  const big = 2 * r * Math.sqrt(1.5), small = 2 * r / Math.SQRT2;
  s += T(300, 500, `Ellipse ${f1(big)} × ${f1(small)} (major × minor)`, { anchor: 'middle', size: 22, c: 'dt2' });
  GEO.cyl = { D, H, major: big, minor: small };
  figs['m3-fat26-iso-cylinder'] = svg(520, s);
}

// cone: base diameter 50, height 70, base on HP, axis vertical
{
  const D = 50, H = 70, r = D / 2, k = 4, iso = isoFrame(k, 300, 390);
  const A = iso(0, 0, H), pt = (t) => iso(r * Math.cos(t), r * Math.sin(t), 0);
  // tangent points: where the line from the apex touches the base ellipse (cross product changes sign)
  const g = (t) => { const p = pt(t), dp = [-r * Math.sin(t), r * Math.cos(t)]; const tx = (dp[0] - dp[1]) * C30, ty = (dp[0] + dp[1]) / 2; return tx * (p[1] - A[1]) - ty * (p[0] - A[0]); };
  const roots = [];
  for (let i = 0; i < 3600; i++) { const a = i * Math.PI / 1800, b = (i + 1) * Math.PI / 1800; if (g(a) * g(b) <= 0) { let lo = a, hi = b; for (let j = 0; j < 50; j++) { const m = (lo + hi) / 2; if (g(lo) * g(m) <= 0) hi = m; else lo = m; } roots.push((lo + hi) / 2); } }
  const [t1, t2] = roots; // the front arc (containing 45°, nearest the viewer) is visible
  const inFront = (t) => t1 < Math.PI / 4 && Math.PI / 4 < t2 ? t > t1 && t < t2 : !(t > t1 && t < t2);
  const arc = (a0, a1, n = 120) => Array.from({ length: n + 1 }, (_, i) => pt(a0 + (a1 - a0) * i / n));
  let s = '';
  const front = inFront((t1 + t2) / 2) ? [t1, t2] : [t2, t1 + 2 * Math.PI];
  const back = inFront((t1 + t2) / 2) ? [t2, t1 + 2 * Math.PI] : [t1, t2];
  s += pl(arc(front[0], front[1]), { w: 3.5 });
  for (const t of [t1, t2]) s += pl([pt(t), A], { w: 3.5 });
  s += pl([iso(0, 0, -6), iso(0, 0, H + 6)], { c: 'dso', w: 1.8, dash: '18 5 3 5' });
  const base = iso(0, 0, 0);
  s += dimV(Math.min(pt(t1)[0], pt(t2)[0]) - 34, A[1], base[1], '70');
  const d1 = iso(-r, 0, 0), d2 = iso(r, 0, 0);
  s += P(`M${f1(d1[0])} ${f1(d1[1])}L${f1(d2[0])} ${f1(d2[1])}`, { c: 'dsb', w: 2, arrow: 'b', arrowS: 'b' }) + T((d1[0] + d2[0]) / 2 + 24, (d1[1] + d2[1]) / 2 + 30, 'Ø50', { c: 'dtb' });
  s += T(300, 34, 'Isometric view: cone Ø50, height 70', { anchor: 'middle', size: 24 });
  GEO.cone = { D, H, major: D * Math.sqrt(1.5), minor: D / Math.SQRT2, tangentDeg: roots.map((t) => t * 180 / Math.PI) };
  figs['m3-fat26-iso-cone'] = svg(500, s);
}

// hexagonal prism: side 20, height 60, base on HP, two base edges parallel to VP (the x axis)
{
  const a = 20, H = 60, k = 4.4, iso = isoFrame(k, 300, 390);
  const V = Array.from({ length: 6 }, (_, i) => [a * Math.cos(i * Math.PI / 3), a * Math.sin(i * Math.PI / 3)]);
  let s = '';
  // top face: all six edges visible
  s += pl(V.concat([V[0]]).map(([x, y]) => iso(x, y, H)), { w: 3.5 });
  for (let i = 0; i < 6; i++) {
    const p = V[i], q = V[(i + 1) % 6], nx = (p[0] + q[0]) / 2, ny = (p[1] + q[1]) / 2; // outward normal of the side face
    const vis = nx + ny > 1e-9; // faces turned towards the viewer (1, 1, 1)
    if (vis) s += pl([iso(p[0], p[1], 0), iso(q[0], q[1], 0)], { w: 3.5 });
  }
  for (let i = 0; i < 6; i++) {
    const prev = V[(i + 5) % 6], p = V[i], next = V[(i + 1) % 6];
    const f1v = (p[0] + prev[0]) + (p[1] + prev[1]) > 1e-9, f2v = (p[0] + next[0]) + (p[1] + next[1]) > 1e-9;
    if (f1v || f2v) s += pl([iso(p[0], p[1], 0), iso(p[0], p[1], H)], { w: 3.5 });
  }
  s += pl([iso(0, 0, -6), iso(0, 0, H + 8)], { c: 'dso', w: 1.8, dash: '18 5 3 5' });
  const lx = iso(V[3][0], V[3][1], 0), ly = iso(V[3][0], V[3][1], H);
  s += dimV(Math.min(lx[0], iso(V[4][0], V[4][1], 0)[0]) - 50, ly[1], lx[1], '60');
  const e1 = iso(V[1][0], V[1][1], H), e2 = iso(V[2][0], V[2][1], H);
  s += T((e1[0] + e2[0]) / 2, (e1[1] + e2[1]) / 2 - 16, '20', { anchor: 'middle', c: 'dtb' });
  s += T(300, 34, 'Isometric view: hexagonal prism, side 20, height 60', { anchor: 'middle', size: 22 });
  GEO.hex = { a, H, acrossFlats: a * Math.sqrt(3), acrossCorners: 2 * a };
  figs['m3-fat26-iso-hexprism'] = svg(500, s);
}

// ---- notes figure for m4-machining-basics: single point tool and a multi-point (milling) cutter
{
  let s = T(20, 34, 'Single point cutting tool (side view)', { size: 24, w: 700 });
  const tip = [470, 112];
  s += pl([[30, 80], [330, 80], tip, [440, 190], [30, 190], [30, 80]], { w: 3 });
  s += P('M330 80L470 112', { c: 'dsb', w: 4 }) + P('M470 112L440 190', { c: 'dso', w: 4 });
  s += wire([tip[0], tip[1]], [560, tip[1]], { c: 'ds3', w: 1.5, dash: '6 5' }) + wire([tip[0], tip[1]], [tip[0], 230], { c: 'ds3', w: 1.5, dash: '6 5' });
  s += P('M545 112A75 75 0 0 0 543 95', { c: 'dsb', w: 2 }) + T(560, 92, 'α', { c: 'dtb', i: 1 });
  s += P('M470 182A70 70 0 0 1 458 179', { c: 'dso', w: 2 }) + T(478, 214, 'γ', { c: 'dto', i: 1 });
  s += P('M470 112C500 80 500 50 470 45C445 42 440 65 455 70', { c: 'ds2', w: 3 }) + T(500, 48, 'chip', { c: 'dt2', size: 22 });
  s += wire([380, 230], [600, 230], { w: 2 }) + T(590, 256, 'work', { anchor: 'end', size: 22, c: 'dt2' });
  s += T(140, 145, 'Shank', { anchor: 'middle' }) + T(380, 70, 'Face (rake face)', { anchor: 'middle', c: 'dtb' }).replace('y="70"', 'y="72"').replace('x="380"', 'x="300"');
  s += T(420, 250, 'Flank', { anchor: 'end', c: 'dto' }) + T(300, 280, 'Tip: cutting edge and nose', { anchor: 'middle', size: 22 });
  s += T(20, 316, 'α = rake angle (chip flow, cutting force)', { size: 22, c: 'dtb' }) + T(20, 346, 'γ = relief (clearance) angle: flank clears the work', { size: 22, c: 'dto' });
  // milling cutter
  s += T(20, 400, 'Multi-point tool: plain milling cutter', { size: 24, w: 700 });
  const cx = 300, cy = 530, r = 90, n = 12;
  let d = '';
  for (let i = 0; i < n; i++) { const a = i * 2 * Math.PI / n, b = a + 2 * Math.PI / n * 0.75, c = a + 2 * Math.PI / n;
    const p = (ang, rr) => [cx + rr * Math.cos(ang), cy + rr * Math.sin(ang)];
    const q = [p(a, r - 18), p(a, r + 12), p(b, r), p(c, r - 18)]; d += (i ? 'L' : 'M') + q.map((x) => x.map(f1).join(' ')).join('L'); }
  s += P(d + 'Z', { w: 2.5 }) + '<circle cx="300" cy="530" r="18" class="ds" fill="none" stroke-width="2.5"/>';
  s += P('M' + (cx + 125) + ' ' + cy + 'A125 125 0 0 0 ' + f1(cx + 125 * Math.cos(-1.2)) + ' ' + f1(cy + 125 * Math.sin(-1.2)), { c: 'dsb', w: 2.5, arrow: 'b' }) + T(470, 470, 'rotation', { c: 'dtb', size: 22 });
  s += pl([[120, 640], [480, 640], [480, 700], [120, 700], [120, 640]], { w: 2.5 }) + T(300, 680, 'workpiece', { anchor: 'middle', size: 22, c: 'dt2' });
  s += P('M150 725L260 725', { c: 'dso', w: 2.5, arrow: 'o' }) + T(270, 733, 'table feed', { c: 'dto', size: 22 });
  s += T(20, 775, 'Each tooth is a small single point edge with its', { size: 22 }) + T(20, 803, 'own rake and relief; teeth cut one after another.', { size: 22 });
  figs['m4-cutting-tools'] = svg(820, s);
}

if (require.main === module) {
  for (const [id, body] of Object.entries(figs)) fs.writeFileSync(path.join(out, id + '.svg'), body);
  console.log('wrote', Object.keys(figs).length, 'figures');
}
module.exports = { GEO };
