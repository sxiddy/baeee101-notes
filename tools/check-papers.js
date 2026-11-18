// Numbers behind the model answers in content/papers-pro.js (papers cat1-a1, cat2-b1, cat2-d1, fat-a1, fat-e1).
// Run: node tools/check-papers.js   (prints every value used; asserts the cross-checks)
const assert = require('assert');
const close = (a, b, t = 1e-6) => assert(Math.abs(a - b) < t, `${a} vs ${b}`);
const f = (x, d = 3) => +x.toFixed(d);
const rad = (d) => d * Math.PI / 180, deg = (r) => r * 180 / Math.PI;

// Gaussian elimination
function solve(A, b) {
  const n = b.length; const M = A.map((r, i) => r.concat(b[i]));
  for (let i = 0; i < n; i++) {
    let p = i; for (let r = i + 1; r < n; r++) if (Math.abs(M[r][i]) > Math.abs(M[p][i])) p = r;
    [M[i], M[p]] = [M[p], M[i]];
    for (let r = 0; r < n; r++) if (r !== i) { const k = M[r][i] / M[i][i]; for (let c = i; c <= n; c++) M[r][c] -= k * M[i][c]; }
  }
  return M.map((r, i) => r[n] / r[i]);
}

console.log('--- cat1-a1 Q1 bridge, mesh ---');
{
  const E = 20, Rs = 3, R1 = 4, R2 = 2, R3 = 2, R4 = 1, R5 = 5;
  // I1: source loop (B->E->Rs->T->R1->L->R3->B); I2: T->R2->R->R5->L->R1->T; I3: B->R3->L->R5->R->R4->B
  const [I1, I2, I3] = solve([[Rs + R1 + R3, -R1, -R3], [-R1, R1 + R2 + R5, -R5], [-R3, -R5, R3 + R4 + R5]], [E, 0, 0]);
  console.log({ I1: f(I1), I2: f(I2), I3: f(I3) });
  // nodal cross-check: nodes T, L, R (bottom = 0), source branch
  const [VT, VL, VR] = solve([[1 / (Rs) + 1 / R1 + 1 / R2, -1 / R1, -1 / R2], [-1 / R1, 1 / R1 + 1 / R3 + 1 / R5, -1 / R5], [-1 / R2, -1 / R5, 1 / R2 + 1 / R4 + 1 / R5]], [E / Rs, 0, 0]);
  close(I1, (E - VT) / Rs);
  const iR1 = I1 - I2, iR2 = I2, iR3 = I1 - I3, iR4 = I3, iR5 = I2 - I3;
  close(iR1, (VT - VL) / R1); close(iR2, (VT - VR) / R2); close(iR3, VL / R3); close(iR4, VR / R4); close(iR5, (VL - VR) / R5);
  const P = { Rs: Rs * I1 ** 2, R1: R1 * iR1 ** 2, R2: R2 * iR2 ** 2, R3: R3 * iR3 ** 2, R4: R4 * iR4 ** 2, R5: R5 * iR5 ** 2 };
  const tot = Object.values(P).reduce((a, b) => a + b, 0);
  console.log({ VT: f(VT), VL: f(VL), VR: f(VR), iR1: f(iR1), iR2: f(iR2), iR3: f(iR3), iR4: f(iR4), iR5: f(iR5) });
  console.log('P', Object.fromEntries(Object.entries(P).map(([k, v]) => [k, f(v)])), 'total', f(tot), 'source', f(E * I1));
  close(tot, E * I1);
}
console.log('--- cat1-a1 Q2 superposition ---');
{
  const R1 = 2.2, R2 = 3.3; // kohm, mA
  const a = 5 * R2 / (R1 + R2), b = 8 / (R1 + R2);
  const V1 = solve([[1 / R1 + 1 / R2]], [5 + 8 / R2])[0];
  console.log({ fromCurrentSource_mA: f(a, 4), fromBattery_mA: f(b, 4), total_mA: f(a + b, 4), V1: f(V1, 4), nodal_mA: f(V1 / R1, 4) });
  close(a + b, V1 / R1);
}
console.log('--- cat1-a1 Q3 Thevenin ladder ---');
{
  const par = (a, b) => a * b / (a + b);
  // node X after R1 (shunt R2), node Y after R3 (shunt R4), open circuit after R5
  const [VX, VY] = solve([[1 / 20 + 1 / 5 + 1 / 12, -1 / 12], [-1 / 12, 1 / 12 + 1 / 16]], [20 / 20, 0]);
  const Rth = par(par(20, 5) + 12, 16) + 2; // 20V shorted
  const IL = VY / (Rth + 10);
  console.log({ VX: f(VX), Vth: f(VY), Rth: f(Rth), IL: f(IL, 4), VL: f(IL * 10) });
}
console.log('--- cat1-a1 Q4 series RLC ---');
{
  const R = 6, XL = 7, XC = 15, V = 100, X = XL - XC, Z = Math.hypot(R, X), I = V / Z;
  console.log({ Z, I, phi: f(deg(Math.atan2(X, R)), 2), VR: I * R, VL: I * XL, VC: I * XC, P: I * I * R, Q: I * I * X, S: V * I, pf: R / Z });
}

console.log('--- cat2-b1 Q4 pentagon, side 30 ---');
{
  const s = 30, Rc = s / (2 * Math.sin(rad(36))), a = s / (2 * Math.tan(rad(36)));
  const diag = s * (1 + Math.sqrt(5)) / 2, h = Rc + a;
  console.log({ circumR: f(Rc, 2), apothem: f(a, 2), height: f(h, 2), across: f(2 * Rc * Math.sin(rad(72)), 2), diag: f(diag, 2), halfWidth: f(diag / 2, 2) });
  close(2 * Rc * Math.sin(rad(72)), diag);
}
console.log('--- cat2-b1 Q5 cylinder d35 L70, nearer face 20 in front ---');
console.log({ centreHeight: 17.5, topViewDepthFrom: 20, to: 20 + 70 });

console.log('--- cat2-d1 Q1 nodal ---');
{
  // nodes A, B, C ; 12 V + 4 ohm to A ; A-B 2 ; B-C 4 ; B-gnd 4 ; C-gnd 2 ; A-C 4 ; 9 A from A to C
  const G = [[1 / 4 + 1 / 2 + 1 / 4, -1 / 2, -1 / 4], [-1 / 2, 1 / 2 + 1 / 4 + 1 / 4, -1 / 4], [-1 / 4, -1 / 4, 1 / 4 + 1 / 4 + 1 / 2]];
  const [VA, VB, VC] = solve(G, [12 / 4 - 9, 0, 9]);
  const Isrc = (12 - VA) / 4;
  console.log({ VA: f(VA), VB: f(VB), VC: f(VC), VBC: f(VB - VC), I12: f(Isrc) });
  close(Isrc, (VA - VB) / 2 + (VA - VC) / 4 + 9);
}
console.log('--- cat2-d1 Q2 Thevenin ---');
{
  const VN = 24 * 8 / 12, Vth = VN - 12, Rth = 5 + 4 * 8 / 12 + 3, I = Vth / (Rth + 10);
  console.log({ VN, Vth, Rth: f(Rth), I: f(I, 4) });
}
console.log('--- cat2-d1 Q3 coil + capacitor, 230 V 50 Hz ---');
{
  const w = 2 * Math.PI * 50, XL = w * 0.06, XC = 1 / (w * 6.8e-6), R = 2.5, X = XL - XC, Z = Math.hypot(R, X), I = 230 / Z;
  const phi = deg(Math.atan2(X, R)), pf = R / Z, P = I * I * R;
  console.log({ XL: f(XL, 2), XC: f(XC, 2), X: f(X, 2), Z: f(Z, 2), I: f(I, 3), phi: f(phi, 2), pf: f(pf, 4), P: f(P, 2), VA: f(230 * I, 2) });
}

console.log('--- fat-a1 Q1a mesh (R4 top, R1, R3 middle row, R2 centre, V1 left +up, V2 right + down) ---');
{
  const V1 = 12, V2 = 6, R1 = 3, R2 = 8, R3 = 6, R4 = 4;
  const [i1, i2, i3] = solve([[R1 + R2, -R2, -R1], [-R2, R2 + R3, -R3], [-R1, -R3, R1 + R3 + R4]], [V1, V2, 0]);
  console.log({ i1: f(i1), i2: f(i2), i3: f(i3), R1: f(i1 - i3), R2: f(i1 - i2), R3: f(i2 - i3), R4: f(i3) });
  // nodal check: nodes M (middle), P (top-left), Q (top-right); bottom = 0, P = 12 + 0? V1 + at P => VP... use: V(P)=V1 (V1 + top, bottom wire = 0), V(Q) = -V2 (V2 + at bottom)
  const VP = V1, VQ = -V2; const VM = (VP / R1 + VQ / R3) / (1 / R1 + 1 / R3 + 1 / R2);
  close(i1 - i3, (VP - VM) / R1); close(i1 - i2, VM / R2); close(i2 - i3, (VM - VQ) / R3); close(i3, (VP - VQ) / R4);
  console.log({ VM: f(VM), VP, VQ });
}
console.log('--- fat-a1 Q1b Thevenin ---');
{
  const Vn = (32 / 4 + 2) / (1 / 4 + 1 / 12), Rth = 4 * 12 / 16 + 1, I = Vn / (Rth + 6);
  console.log({ Vth: f(Vn), Rth, I });
}
console.log('--- fat-a1 Q2 series RL ---');
{
  const XL = 2 * Math.PI * 50 * 0.02, Z = Math.hypot(20, XL), I = 230 / Z;
  console.log({ XL: f(XL, 3), Z: f(Z, 2), I: f(I, 2), VR: f(I * 20, 1), VL: f(I * XL, 1), phi: f(deg(Math.atan(XL / 20)), 2), check: f(Math.hypot(I * 20, I * XL), 1) });
}
console.log('--- fat-a1 Q7 pentagonal pyramid, side 30, axis 50: base vertices (side horizontal) ---');
{
  const s = 30, Rc = s / (2 * Math.sin(rad(36)));
  const pts = [0, 1, 2, 3, 4].map((k) => { const ang = rad(-90 - 36 + 72 * k + 72); return [f(Rc * Math.cos(ang), 2), f(Rc * Math.sin(ang), 2)]; });
  console.log({ Rc: f(Rc, 2), pts });
  console.log({ isoScale: f(Math.sqrt(2 / 3), 4), sideIsoLen: f(30 * Math.sqrt(2 / 3), 2), axisIsoLen: f(50 * Math.sqrt(2 / 3), 2) });
}
console.log('--- fat-a1 Q9b degrees of freedom (Grubler) ---');
{
  const dof = (n, j, h = 0) => 3 * (n - 1) - 2 * j - h;
  console.log({ fourBar: dof(4, 4), fiveLink: dof(5, 5) });
}

console.log('--- fat-e1 Q1 loop analysis (clockwise loops; B1,B5 + top; B2,B3 + bottom; B4 + right) ---');
{
  const [I1, I2, I3] = solve([[5 + 3, -3, 0], [-3, 4 + 2 + 3, -2], [0, -2, 8 + 2]], [20 + 5, 5 - 5 + 5 + 0, -5 - 30]);
  // eq2 rise: -5 (B2 going up) +5 (B4) +5 (B3 going down) = 5
  console.log({ I1: f(I1), I2: f(I2), I3: f(I3) });
  console.log({ B1: f(I1), B2: f(I1 - I2), B4: f(I2), B3: f(I2 - I3), B5_supplied: f(-I3) });
  // power balance: supplied by batteries (V*I out of +) vs resistor losses
  const Pb = 20 * I1 + 5 * (I1 - I2) + 5 * I2 + 5 * (I2 - I3) + 30 * (-I3);
  const Pr = 5 * I1 ** 2 + 3 * (I1 - I2) ** 2 + 4 * I2 ** 2 + 2 * (I2 - I3) ** 2 + 8 * I3 ** 2;
  console.log({ batteryPower: f(Pb), resistorPower: f(Pr) });
  close(Pb, Pr, 1e-6);
}
console.log('--- fat-e1 Q2 superposition ---');
{
  const I120 = -120 * 50 / 200 * 0 - 30, I40 = 30, I10 = 10 / 200;
  const total = I120 + I40 + I10;
  console.log({ from120A: I120, from40A: I40, from10V: I10, total });
  // nodal supernode check
  const VTL = (-160 * 150 - 10) / 4, mid = 120 + VTL / 50;
  console.log({ VTL, bottomRailRight: f(mid, 3), I_left: f(-mid, 3) });
  close(-mid, total);
}
console.log('--- fat-e1 Q3a complex V, I ---');
{
  const V = [176, 132], I = [6.6, 8.8];
  const Vm = Math.hypot(...V), Im = Math.hypot(...I), th = deg(Math.atan2(V[1], V[0])), ti = deg(Math.atan2(I[1], I[0]));
  const Zr = (V[0] * I[0] + V[1] * I[1]) / (Im * Im), Zi = (V[1] * I[0] - V[0] * I[1]) / (Im * Im);
  const phi = th - ti, C = 1 / (2 * Math.PI * 50 * -Zi);
  console.log({ Vm, Im, th: f(th, 2), ti: f(ti, 2), phi: f(phi, 2), R: f(Zr, 3), X: f(Zi, 3), C_uF: f(C * 1e6, 1), pf: f(Math.cos(rad(phi)), 4), P: f(Vm * Im * Math.cos(rad(phi)), 2), IsqR: f(Im * Im * Zr, 2) });
}
console.log('--- fat-e1 Q3b lamp and choke ---');
{
  const I = 80 / 100, R = 100 / I, Z = 230 / I, XL = Math.sqrt(Z * Z - R * R), L = XL / (2 * Math.PI * 50);
  const Vl = I * XL;
  console.log({ I, R, Z, XL: f(XL, 2), L: f(L, 4), L_H: f(L, 3), Vchoke: f(Vl, 1), check: f(Math.hypot(100, Vl), 2) });
}
console.log('--- fat-e1 Q7 hexagonal prism side 25, axis 50, face parallel to HP, axis 35 above, nearer end 20 in front ---');
{
  const s = 25, flats = s * Math.sqrt(3), corners = 2 * s;
  console.log({ acrossFlats: f(flats, 2), acrossCorners: corners, bottomFlatAboveHP: f(35 - flats / 2, 2), topFlatAboveHP: f(35 + flats / 2, 2), topViewFrom: 20, to: 70, longLinesAt: [f(s / 2, 1), s] });
}

// ================= Fall 2026-27 FAT papers (fat-a1-2026, fat-a2-2026, fat-b1-2026)
const par = (a, b) => a * b / (a + b);
console.log('--- fat-a1-2026 Part 1 Q1 superposition, branch AB ---');
{
  // 12 V alone (9 A opened)
  const Rright = 4 + par(2, 2), RA = par(6, Rright), I12 = 12 / (2 + RA), VA = I12 * RA, IAB1 = VA / Rright;
  // 9 A alone (12 V shorted): 9 A into B splits between 2||2 = 1 ohm and 4 + (2||6)
  const Rleft = 4 + par(2, 6), IBA2 = 9 * par(2, 2) / (par(2, 2) + Rleft);
  // nodal cross-check: (VA-12)/2 + VA/6 + (VA-VB)/4 = 0 ; (VB-VA)/4 + VB/1 = 9
  const [VAn, VBn] = solve([[1 / 2 + 1 / 6 + 1 / 4, -1 / 4], [-1 / 4, 1 / 4 + 1]], [6, 9]);
  console.log({ Rright, RA: f(RA, 4), I12: f(I12, 4), VA: f(VA, 4), IAB_12V: f(IAB1, 4), Rleft, IBA_9A: f(IBA2, 4), net_AB: f(IAB1 - IBA2, 6), VA_nodal: f(VAn, 4), VB_nodal: f(VBn, 4) });
  close(IAB1 - IBA2, (VAn - VBn) / 4); close(IAB1 - IBA2, 0);
}
console.log('--- fat-a1-2026 Part 1 Q2 mesh, two 12 V sources ---');
{
  // clockwise meshes: 1 = left source, 2 ohm, 4 ohm ; 2 = 4, 7, 6 ; 3 = 6, 3, right source (+ on top)
  const [I1, I2, I3] = solve([[6, -4, 0], [-4, 17, -6], [0, -6, 9]], [12, 0, -12]);
  const V = { R2: 2 * I1, R4: 4 * (I1 - I2), R7: 7 * I2, R6: 6 * (I2 - I3), R3: 3 * I3 };
  console.log({ I1: f(I1, 4), I2: f(I2, 4), I3: f(I3, 4) }, Object.fromEntries(Object.entries(V).map(([k, v]) => [k, f(v, 3)])));
  // nodal check: X = node after 2 ohm, Y = node after 7 ohm
  const [VX, VY] = solve([[1 / 2 + 1 / 4 + 1 / 7, -1 / 7], [-1 / 7, 1 / 7 + 1 / 6 + 1 / 3]], [6, 4]);
  close(VX, V.R4); close(VY, V.R6); close(12 - VX, V.R2);
  console.log({ VX: f(VX, 3), VY: f(VY, 3) });
}
console.log('--- fat-a1-2026 Part 1 Q3 series RLC, 50 V, R 3, XL 7, XC 10 ---');
{
  const R = 3, XL = 7, XC = 10, E = 50, X = XL - XC, Z = Math.hypot(R, X), I = E / Z, phi = deg(Math.atan2(X, R));
  const out = { Z: f(Z, 4), phiZ: f(phi, 2), I: f(I, 3), Iangle: f(-phi, 2), VR: f(I * R, 2), VL: f(I * XL, 2), VC: f(I * XC, 2), P: f(I * I * R, 2), Q: f(I * I * X, 2), S: f(E * I, 2), pf: f(R / Z, 4) };
  console.log(out); close(Math.hypot(I * R, I * XL - I * XC), E);
}
console.log('--- fat-a1-2026 Part 2 Q2 isometric cylinder; fat-a2-2026 Q7 cone; fat-b1-2026 Part 2 Q2 hexagonal prism ---');
{
  const { GEO } = require('./figs/fat2026.js');
  console.log({ cylinder: { major: f(GEO.cyl.major, 2), minor: f(GEO.cyl.minor, 2) }, cone: { major: f(GEO.cone.major, 2), minor: f(GEO.cone.minor, 2), slant: f(Math.hypot(25, 70), 2) }, hex: { acrossFlats: f(GEO.hex.acrossFlats, 2), acrossCorners: GEO.hex.acrossCorners } });
  close(GEO.cyl.major, 60 * Math.sqrt(1.5)); close(GEO.hex.acrossFlats, 34.641016, 1e-5);
}
console.log('--- fat-a2-2026 Q1 node voltages, 6 A in, 10 A out ---');
{
  const [V1, V2] = solve([[1 / 8 + 1 / 4, -1 / 4], [-1 / 4, 1 / 4 + 1 / 2]], [6, -10]);
  const P8 = V1 * V1 / 8, P4 = (V1 - V2) ** 2 / 4, P2 = V2 * V2 / 2;
  console.log({ V1: f(V1, 4), V2: f(V2, 4), I8: f(V1 / 8, 4), I4: f((V1 - V2) / 4, 4), I2: f(V2 / 2, 4), P8: f(P8, 2), P4: f(P4, 2), P2: f(P2, 2), total: f(P8 + P4 + P2, 2), sources: f(6 * V1 - 10 * V2, 2) });
  close(P8 + P4 + P2, 6 * V1 - 10 * V2);
}
console.log('--- fat-b1-2026 Part 1 Q1 nodal, current in the 5 ohm ---');
{
  // L: VL/4 + (VL-VC)/2 = -4 + 5 ; C: VC/2 + (VC-VL)/2 + (VC-VR)/3 = 4 - 3 ; R: VR/5 + (VR-VC)/3 = 3 - 5
  const [VL, VC, VR] = solve([[1 / 4 + 1 / 2, -1 / 2, 0], [-1 / 2, 1 / 2 + 1 / 2 + 1 / 3, -1 / 3], [0, -1 / 3, 1 / 5 + 1 / 3]], [1, 1, -2]);
  console.log({ VL: f(VL, 4), VC: f(VC, 4), VR: f(VR, 4), I5: f(VR / 5, 4), I4: f(VL / 4, 4), I2v: f(VC / 2, 4), I2h: f((VL - VC) / 2, 4), I3: f((VC - VR) / 3, 4) });
  close(VL / 4 + VC / 2 + VR / 5, 0); // all current into D sums to zero (sources form a loop among L, C, R)
}
console.log('--- fat-b1-2026 Part 1 Q2 superposition, power in 5 ohm ---');
{
  const Rx = par(10, 5 + 15), I2V = 2 / (1 + Rx), VX = I2V * Rx, Ia = VX / 20; // X -> Y
  const Rl = 5 + par(1, 10), Ib = 4 * 15 / (15 + Rl); // X -> Y, feeding the 4 A drawn out of Y
  const I = Ia + Ib, P = 5 * I * I;
  const [VXn, VYn] = solve([[1 + 1 / 10 + 1 / 5, -1 / 5], [-1 / 5, 1 / 5 + 1 / 15]], [2, -4]);
  console.log({ Rx: f(Rx, 4), I2V: f(I2V, 4), VX: f(VX, 4), I5_from2V: f(Ia, 4), Rl: f(Rl, 4), I5_from4A: f(Ib, 4), I5: f(I, 4), P5: f(P, 3), wrongSumOfPowers: f(5 * Ia * Ia + 5 * Ib * Ib, 3), VX_nodal: f(VXn, 4), VY_nodal: f(VYn, 4) });
  close(I, (VXn - VYn) / 5);
}
console.log('--- fat-b1-2026 Part 1 Q3 v = 200√2 sin(wt + 20°), i = 10√2 cos(314t − 25°) ---');
{
  const Vm = 200, Im = 10, thV = 20, thI = -25 + 90; // cos(x) = sin(x + 90°)
  const phi = thV - thI, Z = Vm / Im, R = Z * Math.cos(rad(phi)), X = Z * Math.sin(rad(phi)), C = 1 / (314 * -X);
  console.log({ thI, phi, Z, R: f(R, 3), Xc: f(-X, 3), C_uF: f(C * 1e6, 1), pf: f(Math.cos(rad(phi)), 4), P: f(Vm * Im * Math.cos(rad(phi)), 1), Q: f(Vm * Im * Math.sin(rad(phi)), 1), S: Vm * Im, f_Hz: f(314 / (2 * Math.PI), 2) });
}
