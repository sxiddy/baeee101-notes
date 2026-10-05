// Numbers check for the Module 1 worked examples. Prints every result the notes quote.
//   node tools/check-m1.js
const d = (x, n = 4) => +x.toFixed(n);
const det3 = (m) => m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) - m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) + m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);
const solve = (A, b) => {
  const n = A.length, M = A.map((r, i) => [...r, b[i]]);
  for (let i = 0; i < n; i++) {
    let p = i;
    for (let k = i + 1; k < n; k++) if (Math.abs(M[k][i]) > Math.abs(M[p][i])) p = k;
    [M[i], M[p]] = [M[p], M[i]];
    for (let k = 0; k < n; k++) if (k !== i) { const f = M[k][i] / M[i][i]; for (let j = i; j <= n; j++) M[k][j] -= f * M[i][j]; }
  }
  return M.map((r, i) => r[n] / r[i]);
};
const out = {};

// mesh example (deck p12-13)
{
  const R = [[6, -3, -2], [-3, 6, -1], [-2, -1, 7]], V = [5, 0, 0];
  const col = (k) => R.map((r, i) => r.map((x, j) => (j === k ? V[i] : x)));
  out.mesh = { D: det3(R), D1: det3(col(0)), D2: det3(col(1)), D3: det3(col(2)), I: solve(R, V).map((x) => d(x)) };
}
// nodal example (p17): (10-Va)/5 - (Va-Vb)/10 - Va/15 = 0 ; Vb/8 - (Va-Vb)/10 - (6-Vb)/12 = 0
{
  const [Va, Vb] = solve([[1 / 5 + 1 / 10 + 1 / 15, -1 / 10], [-1 / 10, 1 / 8 + 1 / 10 + 1 / 12]], [10 / 5, 6 / 12]);
  out.nodal = { Va: d(Va), Vb: d(Vb), I1: d((10 - Va) / 5), I2: d((Va - Vb) / 10), I3: d(Va / 15), I4: d((6 - Vb) / 12), I5: d(Vb / 8) };
}
// superposition exercise (p26): two cells in parallel feeding R
for (const r2 of [0.004, 0.04]) {
  const E1 = 2.05, r1 = 0.005, E2 = 2.15, R = 1;
  const V = (E1 / r1 + E2 / r2) / (1 / r1 + 1 / r2 + 1 / R);
  const p1 = E1 / (r1 + (r2 * R) / (r2 + R)) * r2 / (r2 + R), p2 = E2 / (r2 + (r1 * R) / (r1 + R)) * r1 / (r1 + R);
  out['super_r2_' + r2] = { IR: d(V / R), fromE1: d(p1), fromE2: d(p2), I1: d((E1 - V) / r1), I2: d((E2 - V) / r2) };
}
// AC example (p33)
{
  const Im = Math.SQRT2 * 20, w = 2 * Math.PI * 50;
  out.ac = { Im: d(Im), w: d(w), i_0025: d(Im * Math.cos(w * 0.0025)), i_0125: d(Im * Math.cos(w * 0.0125)), t1414_ms: d(Math.acos(14.14 / Im) / w * 1000) };
}
// exercises (p34)
{
  const Vm = 282.8, w = 314;
  out.ex34_1 = { Vrms: d(Vm / Math.SQRT2), f: d(w / (2 * Math.PI)), v_4ms_rad: d(Vm * Math.sin(w * 0.004)) };
  const w2 = 2 * Math.PI * 50;
  out.ex34_2 = { a: d(-100 * Math.sin(w2 / 600)), b_ms: d(Math.asin(0.866) / w2 * 1000) };
}
// RL examples (p36-37)
{
  const R = 3.5, L = 0.1, XL = 2 * Math.PI * 50 * L, Z = Math.hypot(R, XL), ph = Math.atan2(XL, R), I = 220 / Z;
  out.rl1 = { XL: d(XL), Z: d(Z), phi: d(ph * 180 / Math.PI), I: d(I), Iang: d(30 - ph * 180 / Math.PI), pf: d(Math.cos(ph)), P: d(220 * I * Math.cos(ph)), Q: d(220 * I * Math.sin(ph)), S: d(220 * I), I2R: d(I * I * R) };
}
{
  const V = [0, -10], I = [8, 0.6], den = I[0] ** 2 + I[1] ** 2;
  out.rl2_as_printed = { Z: [d((V[0] * I[0] + V[1] * I[1]) / den), d((V[1] * I[0] - V[0] * I[1]) / den)] };
  out.rl2_V_for_6_j8 = [d(6 * I[0] - 8 * I[1]), d(6 * I[1] + 8 * I[0])];
}
{
  const Z = 100, R = Z * Math.cos(Math.PI / 3), X = Z * Math.sin(Math.PI / 3), L = X / (2 * Math.PI * 50);
  const X25 = 2 * Math.PI * 25 * L, Z25 = Math.hypot(R, X25), I25 = 100 / Z25;
  out.rl3 = { R: d(R), X: d(X), L: d(L), X25: d(X25), Z25: d(Z25), I25: d(I25), P25: d(I25 ** 2 * R) };
}
{
  const ZA = 100 / 8, RA = 120 / 64, XA = Math.sqrt(ZA ** 2 - RA ** 2), ZB = 10, RB = 5, XB = Math.sqrt(ZB ** 2 - RB ** 2);
  const R = RA + RB, X = XA + XB, Z = Math.hypot(R, X), I = 100 / Z;
  out.rl4 = { RA, XA: d(XA), RB, XB: d(XB), R, X: d(X), Z: d(Z), I: d(I), P: d(I ** 2 * R), pf: d(R / Z) };
}
{
  const P = 3000, Q = 2000, S = Math.hypot(P, Q), I = S / 240, R = P / I ** 2, X = Q / I ** 2, XB = 2 * Math.PI * 50 * 0.015, XA = X - XB, RB = R - 5;
  out.rl5 = { S: d(S), I: d(I), R: d(R), X: d(X), RB: d(RB), XB: d(XB), XA: d(XA), LA: d(XA / (2 * Math.PI * 50), 5), VA: d(I * Math.hypot(5, XA)), VB: d(I * Math.hypot(RB, XB)) };
}
{
  const f = 377 / (2 * Math.PI), XL = 1.25 * f / 25, Z = Math.hypot(4, XL), ph = Math.atan2(XL, 4) * 180 / Math.PI;
  out.rl6 = { f: d(f), XL: d(XL), Z: d(Z), Im: d(141.4 / Z), phi: d(ph), iPhase: d(30 - ph) };
}
{
  const I = 5, V = 220, VR = 125, Vc = 200, Vr = (V ** 2 - VR ** 2 - Vc ** 2) / (2 * VR);
  out.rl7 = { Z: V / I, Rres: VR / I, Zcoil: Vc / I, coilResistiveVolts: d(Vr), consistent: Vr >= 0 };
  // what supply voltage would the printed answer (coil R = 5.5 ohm) need?
  const r = 5.5, x = Math.sqrt(40 ** 2 - r ** 2);
  out.rl7_printed = { coilX: d(x), supplyNeeded: d(5 * Math.hypot(25 + r, x)), coilP: d(25 * r), totalP: d(25 * (25 + r)) };
}
// RLC (p40)
{
  const Xc = 1 / (2 * Math.PI * 50 * 100e-6), R = 0.6 * Xc, X = 0.8 * Xc;
  out.rlc1 = { Xc: d(Xc), R: d(R), X: d(X), L_mH: d(X / (2 * Math.PI * 50) * 1000) };
}
{
  const R = 50, XL = 2 * Math.PI * 50 * 0.15, XC = 1 / (2 * Math.PI * 50 * 25e-6), Z = Math.hypot(R, XL - XC), I = 230 / Z, pf = R / Z;
  out.rlc2 = { XL: d(XL), XC: d(XC), Z: d(Z), I: d(I), pf: d(pf), leading: XC > XL, S: d(230 * I), Q: d(230 * I * Math.sqrt(1 - pf * pf)), P: d(230 * I * pf) };
}
{
  const R = 8, XL = 2 * Math.PI * 50 * 0.03, Z = Math.hypot(R, XL), I = 240 / Z, XC = 2 * XL;
  out.rlc3 = { XL: d(XL), Z: d(Z), I: d(I), pf: d(R / Z), P: d(I * I * R), XC: d(XC), C_uF: d(1e6 / (2 * Math.PI * 50 * XC)) };
}
// DC generators (p58)
{ const Ish = 220 / 250, Ia = 400 + Ish; out.g41 = { Ish, Ia, Eg: d(220 + Ia * 0.15) }; }
{
  const Vsh = 230 + 25 * 0.26, Ish = Vsh / 200, Ia = 25 + Ish;
  out.g42 = { Vsh: d(Vsh), Ish: d(Ish), Ia: d(Ia), E: d(230 + 25 * 0.26 + Ia * 0.04 + 2), E_longShunt: d(230 + (25 + 230 / 200) * 0.3 + 2) };
}
{ const Ia = 125 + 2, E = 400 + Ia * 0.1 + 2; out.g43 = { Ia, E: d(E), phi: d(E * 60 * 8 / (256 * 600 * 8), 5) }; }
// DC motors (p62-63)
{
  const phi = 25e-3, Z = 800, Ia = 45, P = 4, A = 2, Eb = 220 - 27, N = Eb * 60 * A / (phi * Z * P);
  out.mot1 = { Ta: d(phi * Z * Ia * (P / A) / (2 * Math.PI)), Ta_0159: d(0.159 * phi * Z * Ia * P / A), Eb, N: d(N), rps: d(N / 60), Tsh: d(8200 / (2 * Math.PI * N / 60)), Tsh_slide: d(8200 / (2 * 3.14 * 30)) };
}
{
  const phi = 30e-3, Z = 540, Ia = 31, Eb = 220 - 31 * 0.09, N = Eb * 60 * 4 / (phi * Z * 4);
  out.mot2 = { Eb: d(Eb), N: d(N), Ta: d(phi * Z * Ia / (2 * Math.PI)), Tsh: d(5595 / (2 * Math.PI * N / 60)), Pdev: d(Eb * Ia) };
}
// chunk 1a extras: tiny MNA for the unsolved exercises (R: [a,b,ohm], V: [plus,minus,volt], I: [from,to,amp]); node '0' = reference
const mna = ({ R = [], V = [], I = [] }) => {
  const names = [...new Set([...R, ...V, ...I].flatMap((e) => [e[0], e[1]]))].filter((x) => x !== '0');
  const ix = Object.fromEntries(names.map((n, i) => [n, i])), N = names.length, S = N + V.length;
  const A = Array.from({ length: S }, () => Array(S).fill(0)), b = Array(S).fill(0);
  const g = (p, q, v) => { if (p !== '0' && q !== '0') A[ix[p]][ix[q]] += v; };
  for (const [p, q, r] of R) { g(p, p, 1 / r); g(q, q, 1 / r); g(p, q, -1 / r); g(q, p, -1 / r); }
  for (const [fr, to, i] of I) { if (to !== '0') b[ix[to]] += i; if (fr !== '0') b[ix[fr]] -= i; }
  V.forEach(([p, n, v], k) => { const r = N + k; if (p !== '0') { A[ix[p]][r] += 1; A[r][ix[p]] += 1; } if (n !== '0') { A[ix[n]][r] -= 1; A[r][ix[n]] -= 1; } b[r] = v; });
  const x = solve(A, b), v = (n) => (n === '0' ? 0 : x[ix[n]]);
  return { V: Object.fromEntries(names.map((n) => [n, d(v(n))])), I: Object.fromEntries(R.map(([p, q, r]) => [`${p}>${q}`, d((v(p) - v(q)) / r)])), Isrc: V.map((e, k) => d(-x[N + k])) };
};
// Thevenin exercise (p24): loop currents with RL removed, Vth, Rth, IL for 1 and 2 ohm
{
  const [I1, I2] = solve([[6, -4], [-4, 10]], [10, -4]), Vth = 4 * I2 + 4, Rth = 1 / (1 / (2 + (2 * 4) / (2 + 4)) + 1 / 4);
  out.thev24 = { I1: d(I1), I2: d(I2), Vth: d(Vth), Rth: d(Rth), IL_1ohm: d(Vth / (Rth + 1)), IL_2ohm: d(Vth / (Rth + 2)) };
}
// Superposition figure (p25), both + terminals on top as drawn: 6 V (0.5 + 2.5 ohm), 12 V (1 + 2 ohm), 6 ohm A-B
{
  const one = (E) => { const It = E / (3 + (3 * 6) / 9); return { It: d(It), I6: d(It * 3 / 9) }; };
  out.super25 = { from6V: one(6), from12V: one(12), full: mna({ R: [['P', 'A', 3], ['Q', 'A', 3], ['A', '0', 6]], V: [['P', '0', 6], ['Q', '0', 12]] }) };
}
// Class assignments (p14 mesh, p19 nodal): answers for self-checking
out.p14 = {
  ex1: mna({ R: [['X', 'L', 4], ['L', 'R', 4], ['L', 'M', 2], ['M', '0', 6], ['R', '0', 1]], V: [['X', '0', 10], ['M', 'R', 2]] }),
  ex2: mna({ R: [['T', 'L', 3], ['T', 'R', 14], ['L', '0', 11], ['R', '0', 3], ['L', 'R', 4]], V: [['T', '0', 54]] }),
  ex3: mna({ R: [['T', 'L', 10], ['L', '0', 12], ['T', 'R', 24], ['R', '0', 4], ['L', 'R', 4]], V: [['T', '0', 24]] }),
};
out.p19 = {
  ex1_kohm_mA: mna({ R: [['TL', 'TR', 3.3], ['TL', 'M', 1.2], ['M', 'TR', 2.2], ['M', 'X', 0.47], ['X', '0', 0.33], ['0', 'BR', 100]], V: [['TL', '0', 15], ['BR', 'TR', 5]] }),
  ex2: mna({ R: [['a', '0', 5], ['a', 'b', 4], ['b', '0', 20], ['b', 'c', 2], ['c', '0', 10]], I: [['0', 'a', 1.5], ['0', 'c', 1]] }),
  ex3: mna({ R: [['L', '0', 7], ['M', '0', 4], ['M', 'R', 8], ['L', 'R', 3]], I: [['L', 'M', 3], ['R', '0', 2]] }),
  ex4: mna({ R: [['V1', '0', 2], ['V1', 'V2', 5], ['V2', '0', 2], ['V2', 'X', 2]], V: [['X', '0', 28]], I: [['0', 'V1', 4]] }),
  ex5: mna({ R: [['P', 'TL', 1], ['TR', 'TL', 0.5], ['Q', 'TR', 1], ['TL', '0', 1], ['TR', '0', 2]], V: [['P', '0', 15], ['Q', '0', 20]] }),
};
out.factors = { avg: d(2 / Math.PI), rms: d(1 / Math.SQRT2), formFactor: d((1 / Math.SQRT2) / (2 / Math.PI)), crest: d(Math.SQRT2), k444: d(2 * Math.PI / Math.SQRT2) };
console.log(JSON.stringify(out, null, 1));
