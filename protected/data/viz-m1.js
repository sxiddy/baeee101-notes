/* Module 1 widgets: DC circuits, AC circuits and machines (Pro).
 * Every preset uses the course examples; numbers match tools/check-m1.js. */
(function () {
  'use strict';
  const MONO = 'JetBrains Mono, ui-monospace, monospace';
  const FS = 15;
  const r1 = (v) => Math.round(v * 10) / 10;
  const TAU = Math.PI * 2;

  // ---------------------------------------------------------------- shared helpers
  function T(api, p, x, y, s, o) {
    return api.svg('text', Object.assign({ x: r1(x), y: r1(y), 'font-size': FS, fill: api.C.text, 'text-anchor': 'middle', text: s }, o || {}), p);
  }
  // text with one subscript: TS(api, g, x, y, 'V', 'th', ' = 5.45 V', opts)
  function TS(api, p, x, y, main, sub, rest, o) {
    const t = api.svg('text', Object.assign({ x: r1(x), y: r1(y), 'font-size': FS, fill: api.C.text, 'text-anchor': 'middle' }, o || {}), p);
    api.svg('tspan', { text: main }, t);
    if (sub) api.svg('tspan', { text: sub, 'font-size': 13, dy: 4 }, t);
    if (rest) api.svg('tspan', { text: rest.replace(/^ /, ' '), dy: sub ? -4 : null }, t);
    return t;
  }
  // mixed text: parts are strings or [main, subscript] pairs
  function TM(api, p, x, y, parts, o) {
    const t = api.svg('text', Object.assign({ x: r1(x), y: r1(y), 'font-size': FS, fill: api.C.text, 'text-anchor': 'middle' }, o || {}), p);
    let low = false;
    parts.forEach((q) => {
      if (typeof q === 'string') { api.svg('tspan', { text: q.replace(/^ /, ' '), dy: low ? -4 : null }, t); low = false; }
      else { api.svg('tspan', { text: q[0], dy: low ? -4 : null }, t); api.svg('tspan', { text: q[1], 'font-size': 13, dy: 4 }, t); low = true; }
    });
    return t;
  }
  // compact number: up to d decimals, trailing zeros dropped, real minus sign
  function nf(v, d) {
    if (!isFinite(v)) return '—';
    let s = Number(v).toFixed(d == null ? 3 : d);
    if (s.indexOf('.') >= 0) s = s.replace(/0+$/, '').replace(/\.$/, '');
    if (/^-0$/.test(s)) s = '0';
    return s.replace('-', '−');
  }
  // fixed decimals
  function fx(v, d) {
    if (!isFinite(v)) return '—';
    let s = Number(v).toFixed(d == null ? 2 : d);
    if (/^-0(\.0*)?$/.test(s)) s = s.slice(1);
    return s.replace('-', '−');
  }
  const neg = (v, d) => (v < 0 ? '(' + nf(v, d) + ')' : nf(v, d));
  const inum = (v) => String(+(+v).toFixed(5)); // value for <input type=number>
  const sub = (m, s) => m + '<sub>' + s + '</sub>';

  function ptsStr(a) { return a.map((p) => r1(p[0]) + ',' + r1(p[1])).join(' '); }
  function wire(api, g, a, col, w) {
    return api.svg('polyline', { points: ptsStr(a), fill: 'none', stroke: col || api.C.metal, 'stroke-width': w || 2.5, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, g);
  }
  function unit(a, b) { const dx = b[0] - a[0], dy = b[1] - a[1], d = Math.hypot(dx, dy) || 1; return { ux: dx / d, uy: dy / d, nx: -dy / d, ny: dx / d, d }; }
  function resistor(api, g, a, b, col) {
    const u = unit(a, b), k = 6, p = [a];
    for (let i = 0; i < k; i++) { const t = (i + 0.5) / k * u.d, s = (i % 2 ? -1 : 1) * 8; p.push([a[0] + u.ux * t + u.nx * s, a[1] + u.uy * t + u.ny * s]); }
    p.push(b);
    return wire(api, g, p, col || api.C.white, 2.2);
  }
  function battery(api, g, a, b, plusAtB, col) {
    const u = unit(a, b), C = api.C, c = col || C.white;
    const pl = plusAtB ? b : a, mi = plusAtB ? a : b, sg = plusAtB ? 1 : -1;
    const line = (q, h, w) => api.svg('line', { x1: r1(q[0] - u.nx * h), y1: r1(q[1] - u.ny * h), x2: r1(q[0] + u.nx * h), y2: r1(q[1] + u.ny * h), stroke: c, 'stroke-width': w }, g);
    line(pl, 15, 2.5); line(mi, 8, 5);
    const sx = Math.abs(u.uy) > 0.5 ? 1 : 0, sy = sx ? 0 : -1;
    T(api, g, pl[0] + u.ux * sg * 9 + sx * 19, pl[1] + u.uy * sg * 9 + sy * 17 + 5, '+', { fill: c, 'font-size': 15 });
  }
  function coil(api, g, a, b, col) {
    const u = unit(a, b), n = 4, step = u.d / n;
    let d = `M${r1(a[0])} ${r1(a[1])}`;
    for (let i = 1; i <= n; i++) d += ` A${r1(step / 2)} ${r1(step / 2)} 0 0 1 ${r1(a[0] + u.ux * step * i)} ${r1(a[1] + u.uy * step * i)}`;
    return api.svg('path', { d, fill: 'none', stroke: col || api.C.cat, 'stroke-width': 2.5 }, g);
  }
  function head(api, g, x, y, ang, col, s) {
    s = s || 9;
    const c = Math.cos(ang), si = Math.sin(ang);
    const p = (a, b) => r1(x + a * c - b * si) + ',' + r1(y + a * si + b * c);
    return api.svg('path', { d: `M${p(s, 0)} L${p(-s * 0.7, s * 0.65)} L${p(-s * 0.7, -s * 0.65)} Z`, fill: col || api.C.warn }, g);
  }
  function isrc(api, g, c, r, ang, col) {
    const C = api.C;
    api.svg('circle', { cx: r1(c[0]), cy: r1(c[1]), r, fill: 'none', stroke: col || C.white, 'stroke-width': 2.2 }, g);
    const dx = Math.cos(ang), dy = Math.sin(ang);
    api.svg('line', { x1: r1(c[0] - dx * r * 0.6), y1: r1(c[1] - dy * r * 0.6), x2: r1(c[0] + dx * r * 0.3), y2: r1(c[1] + dy * r * 0.3), stroke: col || C.white, 'stroke-width': 2.2 }, g);
    head(api, g, c[0] + dx * r * 0.45, c[1] + dy * r * 0.45, ang, col || C.white, 7);
  }
  const HALF = { R: 26, E: 7, coil: 30, src: 20 };
  // straight branch a -> b with elements on it: parts [{k:'R'|'E'|'coil'|'src', at:0..1, plus:'a'|'b', col}]
  function branch(api, g, a, b, parts, col) {
    const u = unit(a, b), at = (t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
    let cur = a;
    (parts || []).slice().sort((p, q) => p.at - q.at).forEach((p) => {
      const c = at(p.at), h = HALF[p.k] || 0, s0 = [c[0] - u.ux * h, c[1] - u.uy * h], s1 = [c[0] + u.ux * h, c[1] + u.uy * h];
      wire(api, g, [cur, s0], col);
      if (p.k === 'R') resistor(api, g, s0, s1, p.col);
      else if (p.k === 'E') battery(api, g, s0, s1, p.plus === 'b', p.col);
      else if (p.k === 'coil') coil(api, g, s0, s1, p.col);
      else if (p.k === 'src') isrc(api, g, c, h, p.plus === 'b' ? Math.atan2(u.uy, u.ux) : Math.atan2(-u.uy, -u.ux), p.col);
      cur = s1;
    });
    wire(api, g, [cur, b], col);
    return u;
  }
  function dot(api, g, p, col) { return api.svg('circle', { cx: r1(p[0]), cy: r1(p[1]), r: 3.6, fill: col || api.C.white }, g); }
  function term(api, g, p) { return api.svg('circle', { cx: r1(p[0]), cy: r1(p[1]), r: 5, fill: '#1b1b1e', stroke: api.C.white, 'stroke-width': 2 }, g); }
  // clockwise mesh-current arrow with a label in the middle
  function meshArc(api, g, cx, cy, r, col, k) {
    const a0 = -150 * Math.PI / 180, a1 = a0 + 290 * Math.PI / 180;
    const P = (a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
    const p0 = P(a0), p1 = P(a1);
    api.svg('path', { d: `M${r1(p0[0])} ${r1(p0[1])} A${r} ${r} 0 1 1 ${r1(p1[0])} ${r1(p1[1])}`, fill: 'none', stroke: col, 'stroke-width': 2 }, g);
    head(api, g, p1[0], p1[1], a1 + Math.PI / 2, col, 8);
    if (k) TS(api, g, cx, cy + 5, 'I', String(k), null, { fill: col, 'font-size': 15 });
  }
  // point at fraction t along a polyline
  function poly(pts, t) {
    let L = 0; const seg = [];
    for (let i = 1; i < pts.length; i++) { const d = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); seg.push(d); L += d; }
    let d = (((t % 1) + 1) % 1) * L;
    for (let i = 0; i < seg.length; i++) { if (d <= seg[i]) { const f = seg[i] ? d / seg[i] : 0; return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * f, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * f]; } d -= seg[i]; }
    return pts[pts.length - 1];
  }
  function plen(pts) { let L = 0; for (let i = 1; i < pts.length; i++) L += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); return L; }
  function workBox(api, parent) {
    api.css('m1-work', [
      '.m1-work{overflow-x:auto}',
      '.m1-work .ln{display:block;margin:3px 0}',
      '.m1-work .hd{display:block;margin:10px 0 2px;color:#f4f4f6;font-weight:600}',
      '.m1-work .ex{display:block;margin:6px 0 0;color:#80808a}',
      '.m1-mat{display:inline-grid;vertical-align:middle;border-left:2px solid #80808a;border-right:2px solid #80808a;border-radius:3px;padding:1px 6px;margin:2px 3px;font-family:"JetBrains Mono",ui-monospace,monospace;font-size:13px;line-height:1.5}',
      '.m1-mat span{display:flex;gap:10px;justify-content:flex-end}',
      '.m1-mat i{font-style:normal;min-width:2.4em;text-align:right}',
      '.m1-mat i.hl{color:#e9c46a}',
      '.m1-ok{color:#86d4a9}.m1-bad{color:#f08c8c}'
    ].join('\n'));
    return api.el('div', { class: 'viz-caption m1-work' }, parent);
  }
  function matHTML(M, hl) {
    return '<span class="m1-mat">' + M.map((r) => '<span>' + r.map((x, j) => `<i${hl === j ? ' class="hl"' : ''}>${nf(x, 4)}</i>`).join('') + '</span>').join('') + '</span>';
  }
  function det(M) {
    if (M.length === 2) return M[0][0] * M[1][1] - M[0][1] * M[1][0];
    return M[0][0] * (M[1][1] * M[2][2] - M[1][2] * M[2][1]) - M[0][1] * (M[1][0] * M[2][2] - M[1][2] * M[2][0]) + M[0][2] * (M[1][0] * M[2][1] - M[1][1] * M[2][0]);
  }
  function detWork(M) {
    const n = (v) => neg(v, 4);
    if (M.length === 2) return `${n(M[0][0])} × ${n(M[1][1])} − ${n(M[0][1])} × ${n(M[1][0])}`;
    const [[a, b, c], [d, e, f], [g, h, i]] = M;
    return `${n(a)}[${n(e)}×${n(i)} − ${n(f)}×${n(h)}] − ${n(b)}[${n(d)}×${n(i)} − ${n(f)}×${n(g)}] + ${n(c)}[${n(d)}×${n(h)} − ${n(e)}×${n(g)}]`;
  }
  function replaceCol(M, k, v) { return M.map((r, i) => r.map((x, j) => (j === k ? v[i] : x))); }

  // ================================================================ series-parallel
  VIZ.register('series-parallel', {
    title: 'Series and parallel resistors', kind: 'Interactive',
    mount(body, api) {
      const C = api.C;
      const s = api.stage('0 0 480 260', body, 'Resistors connected in series or in parallel across a battery');
      const g = api.svg('g', null, s), dg = api.svg('g', null, s);
      const st = { mode: 's', n: 3, R: [10, 20, 30], V: 12 };
      const COL = [C.e, C.cat, C.an];
      const ctl = api.controls();
      api.segmented([{ value: 's', label: 'Series' }, { value: 'p', label: 'Parallel' }], st.mode, (v) => { st.mode = v; draw(); }, ctl);
      api.segmented([{ value: 2, label: '2 resistors' }, { value: 3, label: '3 resistors' }], st.n, (v) => { st.n = v; sl[2].el.style.display = v === 3 ? '' : 'none'; draw(); }, ctl);
      const ctl2 = api.controls();
      const sl = [0, 1, 2].map((i) => api.slider({ label: sub('R', i + 1), min: 1, max: 100, step: 1, value: st.R[i], format: (v) => v + ' Ω' }, (v) => { st.R[i] = v; draw(); }, ctl2));
      api.slider({ label: 'Supply V', min: 1, max: 60, step: 1, value: st.V, format: (v) => v + ' V' }, (v) => { st.V = v; draw(); }, ctl2);
      const ro = api.readouts();
      const rq = api.readout(sub('R', 'eq'), ro), ri = api.readout('Total current I', ro), rp = api.readout('Total power P', ro), rc = api.readout('Check', ro);
      const work = workBox(api, body);
      let dots = [];

      function draw() {
        g.innerHTML = ''; dg.innerHTML = '';
        const n = st.n, R = st.R.slice(0, n), V = st.V, idx = R.map((_, i) => i);
        const A = [50, 50], B = [430, 50], Cc = [430, 215], D = [50, 215];
        branch(api, g, D, A, [{ k: 'E', at: 0.5, plus: 'b' }]);
        T(api, g, 50, 246, V + ' V', { fill: C.white, 'font-family': MONO });
        const names = (p) => idx.map((i) => sub(p, i + 1));
        let html = '', Req, I, flows;
        if (st.mode === 's') {
          Req = R.reduce((a, b) => a + b, 0); I = V / Req;
          const Vk = R.map((r) => V * r / Req);
          const top = n === 3 ? [0.3, 0.7] : [0.5];
          branch(api, g, A, B, top.map((at, i) => ({ k: 'R', at, col: COL[i] })));
          branch(api, g, B, Cc, [{ k: 'R', at: 0.5, col: COL[n - 1] }]);
          wire(api, g, [Cc, D]);
          top.forEach((at, i) => {
            const x = 50 + 380 * at;
            TS(api, g, x, 30, 'R', String(i + 1), ' = ' + R[i] + ' Ω', { fill: COL[i] });
            TS(api, g, x, 86, 'V', String(i + 1), ' = ' + fx(Vk[i], 2) + ' V', { fill: C.white, 'font-family': MONO, 'font-size': 14 });
          });
          TS(api, g, 412, 126, 'R', String(n), ' = ' + R[n - 1] + ' Ω', { fill: COL[n - 1], 'text-anchor': 'end' });
          TS(api, g, 412, 148, 'V', String(n), ' = ' + fx(Vk[n - 1], 2) + ' V', { fill: C.white, 'text-anchor': 'end', 'font-family': MONO, 'font-size': 14 });
          head(api, g, 240, 215, Math.PI, C.warn);
          T(api, g, 240, 244, 'I = ' + fx(I, 3) + ' A', { fill: C.warn, 'font-family': MONO, 'font-size': 14 });
          flows = [{ p: [A, B, Cc, D, A], v: 70 }];
          const sumV = Vk.reduce((a, b) => a + b, 0);
          html += `<span class="ln">${sub('R', 'eq')} = ${names('R').join(' + ')} = ${R.join(' + ')} = <b>${nf(Req)} Ω</b></span>`;
          html += `<span class="ln">I = V / ${sub('R', 'eq')} = ${V} / ${nf(Req)} = <b>${fx(I, 3)} A</b>, the same current through every resistor</span>`;
          html += `<span class="ln">Voltage division: ` + idx.map((i) => `${sub('V', i + 1)} = V × ${sub('R', i + 1)}/${sub('R', 'eq')} = ${V} × ${R[i]}/${nf(Req)} = <b>${fx(Vk[i], 3)} V</b>`).join('; ') + '</span>';
          html += `<span class="ln">KVL check: ${names('V').join(' + ')} = ${Vk.map((v) => fx(v, 3)).join(' + ')} = ${fx(sumV, 3)} V = supply <span class="m1-ok">✓</span></span>`;
          html += `<span class="ln">Power: P = VI = ${V} × ${fx(I, 3)} = ${fx(V * I, 3)} W = ${idx.map((i) => 'I²' + sub('R', i + 1)).join(' + ')} = ${R.map((r) => fx(I * I * r, 3)).join(' + ')} W</span>`;
          rc.set('KVL adds up <span class="m1-ok">✓</span>');
        } else {
          const G = R.reduce((a, r) => a + 1 / r, 0); Req = 1 / G;
          const Ik = R.map((r) => V / r); I = Ik.reduce((a, b) => a + b, 0);
          const xs = n === 3 ? [180, 305, 430] : [240, 430];
          wire(api, g, [A, [xs[n - 1], 50]]); wire(api, g, [[xs[n - 1], 215], D]);
          const imax = Math.max.apply(null, Ik);
          flows = [];
          xs.forEach((x, i) => {
            branch(api, g, [x, 50], [x, 215], [{ k: 'R', at: 0.5, col: COL[i] }]);
            if (i < n - 1) { dot(api, g, [x, 50]); dot(api, g, [x, 215]); }
            TS(api, g, x - 16, 126, 'R', String(i + 1), ' = ' + R[i] + ' Ω', { fill: COL[i], 'text-anchor': 'end' });
            TS(api, g, x - 16, 148, 'I', String(i + 1), ' = ' + fx(Ik[i], 2) + ' A', { fill: C.white, 'text-anchor': 'end', 'font-family': MONO, 'font-size': 14 });
            head(api, g, x, 86, Math.PI / 2, C.warn);
            flows.push({ p: [D, A, [x, 50], [x, 215], D], v: 25 + 80 * Ik[i] / imax });
          });
          head(api, g, 135, 215, Math.PI, C.warn);
          T(api, g, 140, 244, 'I = ' + fx(I, 3) + ' A', { fill: C.warn, 'font-family': MONO, 'font-size': 14 });
          html += `<span class="ln">1/${sub('R', 'eq')} = ${names('R').map((r) => '1/' + r).join(' + ')} = ${R.map((r) => '1/' + r).join(' + ')} = ${nf(G, 5)}, so ${sub('R', 'eq')} = 1/${nf(G, 5)} = <b>${fx(Req, 3)} Ω</b></span>`;
          if (n === 2) html += `<span class="ln">Two resistors: ${sub('R', 'eq')} = ${sub('R', 1)}${sub('R', 2)}/(${sub('R', 1)} + ${sub('R', 2)}) = ${R[0]} × ${R[1]}/(${R[0]} + ${R[1]}) = ${fx(Req, 3)} Ω</span>`;
          html += `<span class="ln">The same voltage V = ${V} V sits across every branch.</span>`;
          html += '<span class="ln">' + idx.map((i) => `${sub('I', i + 1)} = V/${sub('R', i + 1)} = ${V}/${R[i]} = <b>${fx(Ik[i], 3)} A</b>`).join('; ') + '</span>';
          html += `<span class="ln">KCL check: ${names('I').join(' + ')} = ${Ik.map((v) => fx(v, 3)).join(' + ')} = ${fx(I, 3)} A = V/${sub('R', 'eq')} = ${V}/${fx(Req, 3)} <span class="m1-ok">✓</span></span>`;
          if (n === 2) html += `<span class="ln">Current division: ${sub('I', 1)} = I × ${sub('R', 2)}/(${sub('R', 1)} + ${sub('R', 2)}) = ${fx(I, 3)} × ${R[1]}/${R[0] + R[1]} = ${fx(I * R[1] / (R[0] + R[1]), 3)} A; ${sub('I', 2)} = I × ${sub('R', 1)}/(${sub('R', 1)} + ${sub('R', 2)}) = ${fx(I * R[0] / (R[0] + R[1]), 3)} A</span>`;
          html += `<span class="ln">Power: P = VI = ${V} × ${fx(I, 3)} = ${fx(V * I, 3)} W = ${idx.map((i) => 'V²/' + sub('R', i + 1)).join(' + ')} = ${R.map((r) => fx(V * V / r, 3)).join(' + ')} W</span>`;
          rc.set('KCL adds up <span class="m1-ok">✓</span>');
        }
        rq.set(fx(Req, 3) + ' Ω'); ri.set(fx(I, 3) + ' A'); rp.set(fx(V * I, 3) + ' W');
        work.innerHTML = html;
        dots = [];
        flows.forEach((f) => {
          const L = plen(f.p), k = Math.max(4, Math.round(L / 75));
          for (let i = 0; i < k; i++) dots.push({ f, L, s: i / k, n: api.svg('circle', { r: 3.4, fill: C.warn, opacity: 0.8 }, dg) });
        });
        place(0);
      }
      function place(dt) {
        dots.forEach((d) => { d.s = (d.s + d.f.v * dt / d.L) % 1; const p = poly(d.f.p, d.s); d.n.setAttribute('cx', r1(p[0])); d.n.setAttribute('cy', r1(p[1])); });
      }
      draw();
      if (!api.reduced) api.loop((dt) => place(dt));
      api.caption('Dots show the direction of conventional current (out of the + terminal). In parallel they run faster through the smaller resistor, which takes the larger share.');
    }
  });

  // ================================================================ source-convert
  VIZ.register('source-convert', {
    title: 'Source conversion: voltage form and current form', kind: 'Interactive',
    mount(body, api) {
      const C = api.C;
      const s = api.stage('0 0 480 320', body, 'A voltage source with series resistance and the equivalent current source with parallel resistance, each feeding the same load');
      const g = api.svg('g', null, s);
      const st = { V: 10, Rs: 2, RL: 3 };
      const ctl = api.controls();
      const fV = api.number({ label: 'Source voltage V', value: st.V, step: 0.5, unit: 'V' }, (v) => { st.V = v; fI.set(inum(st.V / st.Rs)); draw(); }, ctl);
      api.number({ label: 'Source resistance R<sub>s</sub>', value: st.Rs, step: 0.5, min: 0.1, unit: 'Ω' }, (v) => { if (v <= 0) return; st.Rs = v; fI.set(inum(st.V / st.Rs)); draw(); }, ctl);
      const fI = api.number({ label: 'Source current I<sub>s</sub>', value: st.V / st.Rs, step: 0.5, unit: 'A' }, (v) => { st.V = v * st.Rs; fV.set(inum(st.V)); draw(); }, ctl);
      api.slider({ label: 'Load R<sub>L</sub>', min: 0.5, max: 50, step: 0.5, value: st.RL, format: (v) => v + ' Ω' }, (v) => { st.RL = v; draw(); }, api.controls());
      const ro = api.readouts();
      const a1 = api.readout('I<sub>L</sub>, voltage form', ro), a2 = api.readout('V<sub>L</sub>, voltage form', ro), b1 = api.readout('I<sub>L</sub>, current form', ro), b2 = api.readout('V<sub>L</sub>, current form', ro);
      const work = workBox(api, body);
      function load(y1, y2, IL, VL) {
        branch(api, g, [400, y1], [400, y2], [{ k: 'R', at: 0.5, col: C.e }]);
        TS(api, g, 386, (y1 + y2) / 2 - 6, 'R', 'L', ' = ' + nf(st.RL, 2) + ' Ω', { fill: C.e, 'text-anchor': 'end' });
        TS(api, g, 386, (y1 + y2) / 2 + 16, 'V', 'L', ' = ' + fx(VL, 3) + ' V', { fill: C.white, 'text-anchor': 'end', 'font-family': MONO, 'font-size': 14 });
        head(api, g, 352, y1, 0, C.warn);
        TS(api, g, 350, y1 - 13, 'I', 'L', ' = ' + fx(IL, 3) + ' A', { fill: C.warn, 'font-family': MONO, 'font-size': 14 });
        term(api, g, [300, y1]); term(api, g, [300, y2]);
      }
      function draw() {
        g.innerHTML = '';
        const V = st.V, Rs = st.Rs, RL = st.RL, Is = V / Rs;
        const IL1 = V / (Rs + RL), VL1 = IL1 * RL, IL2 = Is * Rs / (Rs + RL), VL2 = IL2 * RL;
        // voltage form
        T(api, g, 14, 18, 'Voltage source form', { 'text-anchor': 'start', fill: C.dim, 'font-size': 14 });
        let y1 = 50, y2 = 140;
        branch(api, g, [60, y2], [60, y1], [{ k: 'E', at: 0.5, plus: 'b' }]);
        branch(api, g, [60, y1], [300, y1], [{ k: 'R', at: 0.5, col: C.cat }]);
        wire(api, g, [[300, y1], [400, y1]]); wire(api, g, [[400, y2], [60, y2]]);
        T(api, g, 86, 100, nf(V, 3) + ' V', { 'text-anchor': 'start', fill: C.white, 'font-family': MONO });
        TS(api, g, 180, 34, 'R', 's', ' = ' + nf(Rs, 3) + ' Ω', { fill: C.cat });
        load(y1, y2, IL1, VL1);
        // current form
        T(api, g, 14, 184, 'Current source form', { 'text-anchor': 'start', fill: C.dim, 'font-size': 14 });
        y1 = 214; y2 = 304;
        branch(api, g, [60, y2], [60, y1], [{ k: 'src', at: 0.5, plus: 'b' }]);
        wire(api, g, [[60, y1], [400, y1]]); wire(api, g, [[400, y2], [60, y2]]);
        branch(api, g, [180, y1], [180, y2], [{ k: 'R', at: 0.5, col: C.cat }]);
        dot(api, g, [180, y1]); dot(api, g, [180, y2]);
        TS(api, g, 118, 253, 'I', 's', '', { fill: C.white });
        T(api, g, 118, 274, fx(Is, 3) + ' A', { fill: C.white, 'font-family': MONO, 'font-size': 14 });
        TS(api, g, 196, 254, 'R', 's', ' = ' + nf(Rs, 3) + ' Ω', { fill: C.cat, 'text-anchor': 'start' });
        load(y1, y2, IL2, VL2);
        a1.set(fx(IL1, 3) + ' A'); a2.set(fx(VL1, 3) + ' V'); b1.set(fx(IL2, 3) + ' A'); b2.set(fx(VL2, 3) + ' V');
        work.innerHTML =
          `<span class="ln">Conversion: ${sub('I', 's')} = V/${sub('R', 's')} = ${nf(V, 3)}/${nf(Rs, 3)} = <b>${fx(Is, 3)} A</b>, with the same ${sub('R', 's')} now in parallel. Going back: V = ${sub('I', 's')}${sub('R', 's')} = ${fx(Is, 3)} × ${nf(Rs, 3)} = ${nf(V, 3)} V.</span>` +
          `<span class="ln">Voltage form: ${sub('I', 'L')} = V/(${sub('R', 's')} + ${sub('R', 'L')}) = ${nf(V, 3)}/(${nf(Rs, 3)} + ${nf(RL, 2)}) = <b>${fx(IL1, 3)} A</b>; ${sub('V', 'L')} = ${sub('I', 'L')}${sub('R', 'L')} = ${fx(IL1, 3)} × ${nf(RL, 2)} = <b>${fx(VL1, 3)} V</b></span>` +
          `<span class="ln">Current form (current division): ${sub('I', 'L')} = ${sub('I', 's')} × ${sub('R', 's')}/(${sub('R', 's')} + ${sub('R', 'L')}) = ${fx(Is, 3)} × ${nf(Rs, 3)}/(${nf(Rs, 3)} + ${nf(RL, 2)}) = <b>${fx(IL2, 3)} A</b>; ${sub('V', 'L')} = <b>${fx(VL2, 3)} V</b></span>` +
          `<span class="ln">Same load current and voltage for every ${sub('R', 'L')} <span class="m1-ok">✓</span> The load cannot tell the two sources apart.</span>`;
      }
      draw();
    }
  });

  // ================================================================ mesh-solver
  // Branch list: f -> t, R (Ω), E (V, + at 'plus' end), m = sign of each clockwise mesh current going f -> t.
  const MESH = {
    p11: {
      label: 'Course example: 5 V, three meshes',
      nodes: { a: [60, 40], b: [240, 40], c: [420, 40], h: [240, 150], d: [420, 150], g: [60, 260], f: [240, 260], e: [420, 260] },
      nodeLab: { a: [-10, -8, 'end'], b: [0, -10], c: [10, -8, 'start'], h: [-10, -8, 'end'], d: [12, -8, 'start'], g: [-10, 16, 'end'], f: [0, 24], e: [10, 16, 'start'] },
      meshes: [{ c: [140, 105], name: 'a b h f g' }, { c: [325, 95], name: 'b c d h' }, { c: [325, 212], name: 'h d e f' }],
      br: [
        { f: 'g', t: 'a', E: 5, plus: 'b', m: [1, 0, 0], el: 'l', cp: [76, 88, 'start'], ca: 0.78, ell: 'Source (5 V)' },
        { f: 'a', t: 'b', R: 1, m: [1, 0, 0], el: 't', cl: 'b', ca: 0.76, rl: 'R a–b' },
        { f: 'b', t: 'h', R: 3, m: [1, -1, 0], el: 'l', cl: 'l', rl: 'R b–h' },
        { f: 'h', t: 'f', R: 2, m: [1, 0, -1], el: 'l', cl: 'r', rl: 'R h–f' },
        { f: 'f', t: 'g' }, { f: 'b', t: 'c' }, { f: 'e', t: 'f' },
        { f: 'c', t: 'd', R: 2, m: [0, 1, 0], el: 'r', cl: 'l', ca: 0.3, rl: 'R c–d' },
        { f: 'h', t: 'd', R: 1, m: [0, -1, 1], el: 't', cl: 'b', rl: 'R h–d' },
        { f: 'd', t: 'e', R: 4, m: [0, 0, 1], el: 'r', cl: 'l', rl: 'R d–e' }
      ],
      note: 'The course writes these as 6I₁ − 3I₂ − 2I₃ = 5, −3I₁ + 6I₂ − I₃ = 0, −2I₁ − I₂ + 7I₃ = 0 and stops at Cramer\'s rule; the numbers below finish it.'
    },
    p26: {
      label: 'Course exercise: two cells feeding 1 Ω (two meshes)',
      nodes: { TL: [90, 50], TR: [390, 50], A: [90, 150], B: [390, 150], AL: [40, 150], BR: [440, 150], BLo: [40, 255], BRo: [440, 255] },
      nodeLab: { A: [-12, -10, 'end'], B: [12, -10, 'start'] },
      meshes: [{ c: [240, 100] }, { c: [240, 205] }],
      br: [
        { f: 'TL', t: 'TR', R: 0.005, E: 2.05, plus: 'b', m: [1, 0], el: 't', cl: 'b', dn: ['A', 'B (top cell)'], rl: 'Cell 1 resistance', ell: 'Cell 1 EMF' },
        { f: 'A', t: 'B', R: 0.04, E: 2.15, plus: 'b', m: [-1, 1], el: 't', cl: 'b', dn: ['A', 'B (lower cell)'], rl: 'Cell 2 resistance', ell: 'Cell 2 EMF' },
        { f: 'BRo', t: 'BLo', R: 1, m: [0, 1], el: 'b', cl: 't', dn: ['B', 'A (through R)'], rl: 'R (load)' },
        { f: 'A', t: 'TL' }, { f: 'TR', t: 'B' }, { f: 'A', t: 'AL' }, { f: 'AL', t: 'BLo' }, { f: 'BRo', t: 'BR' }, { f: 'BR', t: 'B' }
      ],
      note: 'The figure shows 0.04 Ω for cell 2 (the question text says 0.004 Ω; type it in to compare). The course answer 2.06 A is the current through R, the same as found by superposition.'
    },
    p15: {
      label: 'Nodal example circuit (10 V and 6 V) by meshes',
      nodes: { L: [70, 50], a: [190, 50], b: [310, 50], R: [430, 50], Lb: [70, 240], c1: [190, 240], c2: [310, 240], Rb: [430, 240] },
      nodeLab: { a: [0, -10], b: [0, -10] },
      meshes: [{ c: [130, 175] }, { c: [250, 175] }, { c: [365, 140] }],
      br: [
        { f: 'Lb', t: 'L', E: 10, plus: 'b', m: [1, 0, 0], el: 'l', cp: [84, 112, 'start'], ca: 0.66, dn: ['c', 'top left'], ell: 'Left source' },
        { f: 'L', t: 'a', R: 5, m: [1, 0, 0], el: 't', cl: 'b', dn: ['10 V side', 'a'], rl: 'R 5 Ω (to a)' },
        { f: 'a', t: 'c1', R: 15, m: [1, -1, 0], el: 'l', cl: 'r', dn: ['a', 'c'], rl: 'R a to ground' },
        { f: 'a', t: 'b', R: 10, m: [0, 1, 0], el: 't', cl: 'b', rl: 'R a–b' },
        { f: 'b', t: 'c2', R: 8, m: [0, 1, -1], el: 'l', cl: 'r', dn: ['b', 'c'], rl: 'R b to ground' },
        { f: 'b', t: 'R', R: 12, m: [0, 0, 1], el: 't', cl: 'b', dn: ['b', '6 V side'], rl: 'R 12 Ω (to b)' },
        { f: 'R', t: 'Rb', E: 6, plus: 'a', m: [0, 0, 1], el: 'r', cp: [416, 197, 'end'], ca: 0.75, dn: ['top right', 'c'], ell: 'Right source' },
        { f: 'Rb', t: 'c2' }, { f: 'c2', t: 'c1' }, { f: 'c1', t: 'Lb' }
      ],
      extraLab: [[250, 264, 'c (reference)']],
      note: 'Same circuit as the nodal-analysis example. The branch currents match the nodal answers: 0.706, 0.275, 0.431, 0.190 and 0.465 A (Va = 6.469 V).'
    }
  };

  VIZ.register('mesh-solver', {
    title: 'Mesh analysis with Cramer\'s rule', kind: 'Calculator',
    mount(body, api) {
      const C = api.C, MC = [C.e, C.cat, C.an];
      const s = api.stage('0 0 480 290', body, 'Circuit with mesh currents and branch currents');
      const g = api.svg('g', null, s);
      let key = 'p11', P = null;
      const ctl = api.controls();
      api.select({ label: 'Circuit', value: key, options: Object.keys(MESH).map((k) => ({ value: k, label: MESH[k].label })) }, (v) => { key = v; load(); }, ctl);
      const fields = api.controls();
      const ro = api.readouts();
      const work = workBox(api, body);
      function load() {
        P = JSON.parse(JSON.stringify(MESH[key]));
        fields.innerHTML = '';
        P.br.forEach((b) => {
          if (b.E != null) api.number({ label: b.ell || 'Source', value: b.E, step: 0.01, unit: 'V' }, (v) => { b.E = v; solve(); }, fields);
          if (b.R != null) api.number({ label: b.rl || 'R', value: b.R, step: 0.001, min: 0, unit: 'Ω' }, (v) => { b.R = Math.max(0, v); solve(); }, fields);
        });
        solve();
      }
      function solve() {
        const n = P.meshes.length, N = P.nodes;
        const M = P.meshes.map(() => P.meshes.map(() => 0)), V = P.meshes.map(() => 0);
        const live = P.br.filter((b) => b.m && (b.R || b.E));
        live.forEach((b) => {
          for (let i = 0; i < n; i++) {
            if (!b.m[i]) continue;
            if (b.R) for (let j = 0; j < n; j++) if (b.m[j]) M[i][j] += (b.R || 0) * b.m[i] * b.m[j];
            if (b.E) V[i] += b.E * b.m[i] * (b.plus === 'b' ? 1 : -1);
          }
        });
        const D = det(M), Dk = V.map((_, k) => det(replaceCol(M, k, V))), I = Dk.map((d) => d / D);
        const ok = Math.abs(D) > 1e-12;
        // ---- drawing
        g.innerHTML = '';
        const IB = (b) => (b.m ? b.m.reduce((a, sg, i) => a + sg * (I[i] || 0), 0) : 0);
        P.br.forEach((b) => {
          const A = N[b.f], B = N[b.t], parts = [];
          const both = b.R != null && b.E != null;
          if (b.R != null) parts.push({ k: 'R', at: both ? 0.32 : (b.ep || 0.5), col: C.white });
          if (b.E != null) parts.push({ k: 'E', at: both ? 0.7 : 0.5, plus: b.plus });
          branch(api, g, A, B, parts);
          const vert = Math.abs(A[0] - B[0]) < 1;
          const lab = (at, txt, isE) => {
            const x = A[0] + (B[0] - A[0]) * at, y = A[1] + (B[1] - A[1]) * at, off = isE ? 24 : 16;
            const o = { fill: isE ? C.white : C.text, 'font-family': MONO, 'font-size': 14 };
            if (b.el === 't') T(api, g, x, y - (isE ? 30 : 15), txt, o);
            else if (b.el === 'b') T(api, g, x, y + 26, txt, o);
            else if (b.el === 'l') T(api, g, x - off, y + 5, txt, Object.assign(o, { 'text-anchor': 'end' }));
            else T(api, g, x + off, y + 5, txt, Object.assign(o, { 'text-anchor': 'start' }));
          };
          if (b.R != null) lab(both ? 0.32 : (b.ep || 0.5), nf(b.R, 3) + ' Ω');
          if (b.E != null) lab(both ? 0.7 : 0.5, nf(b.E, 3) + ' V', true);
          if (!b.m || !(b.R || b.E) || !ok) return;
          const ib = IB(b), ca = b.ca || 0.86;
          const x = A[0] + (B[0] - A[0]) * ca, y = A[1] + (B[1] - A[1]) * ca;
          if (Math.abs(ib) < 5e-4) return;
          const ang = Math.atan2(B[1] - A[1], B[0] - A[0]) + (ib < 0 ? Math.PI : 0);
          head(api, g, x, y, ang, C.warn, 8);
          const txt = fx(Math.abs(ib), 3) + ' A', o = { fill: C.warn, 'font-family': MONO, 'font-size': 14 };
          if (b.cp) T(api, g, b.cp[0], b.cp[1], txt, Object.assign(o, { 'text-anchor': b.cp[2] || 'middle' }));
          else if (b.cl === 'b') T(api, g, x, y + 22, txt, o);
          else if (b.cl === 't') T(api, g, x, y - 12, txt, o);
          else if (b.cl === 'l') T(api, g, x - 12, y + 5, txt, Object.assign(o, { 'text-anchor': 'end' }));
          else T(api, g, x + 12, y + 5, txt, Object.assign(o, { 'text-anchor': 'start' }));
          void vert;
        });
        Object.keys(P.nodeLab || {}).forEach((k) => { const p = N[k], o = P.nodeLab[k]; T(api, g, p[0] + o[0], p[1] + o[1], k.length > 2 ? '' : k, { fill: C.dim, 'font-style': 'italic', 'text-anchor': o[2] || 'middle' }); });
        (P.extraLab || []).forEach((e) => T(api, g, e[0], e[1], e[2], { fill: C.dim, 'font-size': 14 }));
        // junction dots: nodes touched by 3+ branches
        const deg = {}; P.br.forEach((b) => { deg[b.f] = (deg[b.f] || 0) + 1; deg[b.t] = (deg[b.t] || 0) + 1; });
        Object.keys(deg).forEach((k) => { if (deg[k] >= 3) dot(api, g, N[k]); });
        P.meshes.forEach((m, i) => meshArc(api, g, m.c[0], m.c[1], 19, MC[i], i + 1));
        // ---- readouts
        ro.innerHTML = '';
        I.forEach((v, i) => api.readout('Mesh current ' + sub('I', i + 1), ro, ok ? fx(v, 3) + ' A' : '—'));
        api.readout('Δ', ro, nf(D, 4));
        // ---- working
        const Ik = (k) => sub('I', k + 1);
        let h = '<span class="hd">1. Mesh equations (KVL, all mesh currents clockwise)</span>';
        P.meshes.forEach((m, i) => {
          const self = live.filter((b) => b.m[i] && b.R).map((b) => nf(b.R, 4));
          const rhs = live.filter((b) => b.m[i] && b.E).map((b) => ({ v: b.E * b.m[i] * (b.plus === 'b' ? 1 : -1) }));
          let lhs = `(${self.join(' + ')})${Ik(i)}`;
          for (let j = 0; j < n; j++) if (j !== i && M[i][j]) lhs += ` ${M[i][j] < 0 ? '−' : '+'} ${Math.abs(M[i][j]) === 1 ? '' : nf(Math.abs(M[i][j]), 4)}${Ik(j)}`;
          const rs = rhs.length ? rhs.map((r, q) => (q === 0 ? nf(r.v, 4) : (r.v < 0 ? ' − ' : ' + ') + nf(Math.abs(r.v), 4))).join('') : '0';
          let clean = '';
          for (let j = 0; j < n; j++) { const c = M[i][j]; if (!c) continue; clean += (clean ? (c < 0 ? ' − ' : ' + ') : (c < 0 ? '−' : '')) + (Math.abs(c) === 1 ? '' : nf(Math.abs(c), 4)) + Ik(j); }
          h += `<span class="ln">Mesh ${i + 1}${m.name ? ' (' + m.name + ')' : ''}: ${lhs} = ${rs}  →  <b>${clean} = ${nf(V[i], 4)}</b></span>`;
        });
        h += `<span class="ln">Matrix form [R][I] = [V]: ${matHTML(M)} [I] = ${matHTML(V.map((v) => [v]))}</span>`;
        h += '<span class="hd">2. Determinants (Cramer\'s rule)</span>';
        h += `<span class="ln">Δ = ${matHTML(M)} = ${detWork(M)} = <b>${nf(D, 4)}</b></span>`;
        Dk.forEach((d, k) => { h += `<span class="ln">Δ${Ik(k)} (column ${k + 1} replaced by [V]) = ${matHTML(replaceCol(M, k, V), k)} = ${detWork(replaceCol(M, k, V))} = <b>${nf(d, 4)}</b></span>`; });
        h += '<span class="hd">3. Mesh currents</span>';
        if (!ok) h += '<span class="ln">Δ = 0: these values have no single solution.</span>';
        else I.forEach((v, k) => { h += `<span class="ln">${Ik(k)} = Δ${Ik(k)}/Δ = ${nf(Dk[k], 4)}/${nf(D, 4)} = <b>${fx(v, 4)} A</b>${v < 0 ? ' (negative: it really flows anticlockwise)' : ''}</span>`; });
        if (ok) {
          h += '<span class="hd">4. Branch currents (arrows on the circuit)</span>';
          live.forEach((b) => {
            const used = b.m.map((sg, i) => (sg ? { sg, i } : null)).filter(Boolean);
            const expr = used.map((u, q) => (q === 0 ? (u.sg < 0 ? '−' : '') : (u.sg < 0 ? ' − ' : ' + ')) + Ik(u.i)).join('');
            const nums = used.map((u, q) => (q === 0 ? (u.sg < 0 ? '−' : '') : (u.sg < 0 ? ' − ' : ' + ')) + neg(I[u.i], 3)).join('');
            const ib = IB(b), dn = b.dn || [b.f, b.t];
            const name = b.R != null ? nf(b.R, 3) + ' Ω' : nf(b.E, 3) + ' V source';
            h += `<span class="ln">${name}${b.R != null && b.E != null ? ' + ' + nf(b.E, 3) + ' V' : ''}: ${expr}${used.length > 1 ? ' = ' + nums : ''} = ${fx(ib, 3)} A, so <b>${fx(Math.abs(ib), 3)} A from ${ib >= 0 ? dn[0] + ' to ' + dn[1] : dn[1] + ' to ' + dn[0]}</b></span>`;
          });
        }
        if (P.note) h += `<span class="ex">${P.note}</span>`;
        work.innerHTML = h;
      }
      load();
    }
  });

  // ================================================================ thevenin
  VIZ.register('thevenin', {
    title: 'Thevenin\'s theorem, step by step', kind: 'Step-through',
    mount(body, api) {
      const C = api.C;
      const s = api.stage('0 0 500 270', body, 'The course Thevenin exercise reduced to an equivalent circuit');
      const g = api.svg('g', null, s);
      // course exercise: 10 V – 2 Ω – x; x–4 Ω–ground; x – 2 Ω – a; a: 4 Ω + 4 V (+ top) to ground; load between a and b
      const E1 = 10, R1 = 2, R2 = 4, R3 = 2, R4 = 4, E2 = 4;
      const M = [[R1 + R2, -R2], [-R2, R2 + R3 + R4]], VV = [E1, -E2];
      const D = det(M), D1 = det(replaceCol(M, 0, VV)), D2 = det(replaceCol(M, 1, VV));
      const I1 = D1 / D, I2 = D2 / D, Vth = E2 + R4 * I2;
      const p12 = R1 * R2 / (R1 + R2), s3 = p12 + R3, Rth = s3 * R4 / (s3 + R4);
      let step = 0, RL = 1;
      const top = 60, bot = 230;
      function net(showRL, killed, meshes) {
        if (killed) { wire(api, g, [[50, bot], [50, top]]); T(api, g, 60, 150, 'short', { 'text-anchor': 'start', fill: C.warn, 'font-size': 14 }); }
        else { branch(api, g, [50, bot], [50, top], [{ k: 'E', at: 0.5, plus: 'b' }]); T(api, g, 74, 150, '10 V', { 'text-anchor': 'start', fill: C.white, 'font-family': MONO }); }
        branch(api, g, [50, top], [190, top], [{ k: 'R', at: 0.5, col: C.cat }]); T(api, g, 120, top - 16, '2 Ω', { fill: C.cat });
        branch(api, g, [190, top], [320, top], [{ k: 'R', at: 0.5, col: C.cat }]); T(api, g, 255, top - 16, '2 Ω', { fill: C.cat });
        branch(api, g, [190, top], [190, bot], [{ k: 'R', at: 0.5, col: C.cat }]); T(api, g, 174, 150, '4 Ω', { 'text-anchor': 'end', fill: C.cat });
        if (killed) { branch(api, g, [320, top], [320, bot], [{ k: 'R', at: 0.32, col: C.cat }]); T(api, g, 330, 190, 'short', { 'text-anchor': 'start', fill: C.warn, 'font-size': 14 }); }
        else { branch(api, g, [320, top], [320, bot], [{ k: 'R', at: 0.32, col: C.cat }, { k: 'E', at: 0.74, plus: 'a' }]); T(api, g, 300, 192, '4 V', { 'text-anchor': 'end', fill: C.white, 'font-family': MONO }); }
        T(api, g, 304, 120, '4 Ω', { 'text-anchor': 'end', fill: C.cat });
        wire(api, g, [[320, top], [410, top]]); wire(api, g, [[50, bot], [410, bot]]);
        [[190, top], [190, bot], [320, top], [320, bot]].forEach((p) => dot(api, g, p));
        if (showRL) {
          wire(api, g, [[410, top], [470, top]]); wire(api, g, [[470, bot], [410, bot]]);
          branch(api, g, [470, top], [470, bot], [{ k: 'R', at: 0.5, col: C.e }]);
          TS(api, g, 440, 136, 'R', 'L', '', { fill: C.e });
          T(api, g, 440, 158, nf(RL, 1) + ' Ω', { fill: C.e, 'font-family': MONO, 'font-size': 14 });
        }
        term(api, g, [410, top]); term(api, g, [410, bot]);
        T(api, g, 410, top - 14, 'a', { fill: C.white, 'font-style': 'italic' });
        T(api, g, 410, bot + 26, 'b', { fill: C.white, 'font-style': 'italic' });
        if (meshes) {
          meshArc(api, g, 112, 112, 18, C.e, 1); meshArc(api, g, 250, 112, 18, C.an, 2);
          T(api, g, 112, 154, fx(I1, 3) + ' A', { fill: C.e, 'font-family': MONO, 'font-size': 14 });
          T(api, g, 250, 154, fx(I2, 3) + ' A', { fill: C.an, 'font-family': MONO, 'font-size': 14 });
        }
      }
      function equiv() {
        branch(api, g, [90, bot], [90, top], [{ k: 'E', at: 0.5, plus: 'b', col: C.good }]);
        TS(api, g, 118, 150, 'V', 'th', '', { 'text-anchor': 'start', fill: C.good });
        T(api, g, 118, 172, fx(Vth, 3) + ' V', { 'text-anchor': 'start', fill: C.good, 'font-family': MONO, 'font-size': 14 });
        branch(api, g, [90, top], [300, top], [{ k: 'R', at: 0.5, col: C.warn }]);
        TS(api, g, 195, top - 16, 'R', 'th', ' = ' + fx(Rth, 3) + ' Ω', { fill: C.warn });
        wire(api, g, [[300, top], [410, top]]); wire(api, g, [[410, bot], [90, bot]]);
        branch(api, g, [410, top], [410, bot], [{ k: 'R', at: 0.5, col: C.e }]);
        TS(api, g, 394, 136, 'R', 'L', '', { fill: C.e, 'text-anchor': 'end' });
        T(api, g, 394, 158, nf(RL, 1) + ' Ω', { fill: C.e, 'text-anchor': 'end', 'font-family': MONO, 'font-size': 14 });
        term(api, g, [300, top]); term(api, g, [300, bot]);
        T(api, g, 300, top + 24, 'a', { fill: C.white, 'font-style': 'italic' });
        T(api, g, 300, bot - 12, 'b', { fill: C.white, 'font-style': 'italic' });
        head(api, g, 360, top, 0, C.warn);
        TS(api, g, 360, top - 14, 'I', 'L', ' = ' + fx(Vth / (Rth + RL), 3) + ' A', { fill: C.warn, 'font-family': MONO, 'font-size': 14 });
      }
      const caps = [
        () => `<b>The exercise.</b> Find the current in a load ${sub('R', 'L')} between a and b, for ${sub('R', 'L')} = 1 Ω and 2 Ω. Thevenin replaces everything to the left of a–b by one source ${sub('V', 'th')} in series with one resistance ${sub('R', 'th')}.`,
        () => `<b>Remove the load.</b> Take ${sub('R', 'L')} out and leave a–b open. The voltage across the open terminals is ${sub('V', 'th')}, the open-circuit voltage.`,
        () => `<b>Find ${sub('V', 'th')} (loop currents, clockwise).</b> Mesh 1: (2 + 4)${sub('I', 1)} − 4${sub('I', 2)} = 10. Mesh 2: −4${sub('I', 1)} + (4 + 2 + 4)${sub('I', 2)} = −4 (the 4 V source pushes against ${sub('I', 2)}). ` +
          `Δ = 6 × 10 − (−4)(−4) = ${nf(D)}; ${sub('I', 1)} = (10 × 10 − (−4)(−4))/${nf(D)} = ${nf(D1)}/${nf(D)} = ${fx(I1, 3)} A; ${sub('I', 2)} = (6 × (−4) − 10 × (−4))/${nf(D)} = ${nf(D2)}/${nf(D)} = ${fx(I2, 3)} A. ` +
          `Going down from a to b through the 4 Ω and the 4 V source: <b>${sub('V', 'th')} = 4 + 4 × ${fx(I2, 4)} = ${fx(Vth, 3)} V</b>.`,
        () => `<b>Find ${sub('R', 'th')}.</b> Replace both voltage sources by short circuits (no internal resistance is given) and look back into a–b. ` +
          `The 2 Ω and 4 Ω on the left are now in parallel: 2 × 4/(2 + 4) = ${fx(p12, 3)} Ω; add the series 2 Ω: ${fx(s3, 3)} Ω; this sits in parallel with the 4 Ω branch at a: ` +
          `<b>${sub('R', 'th')} = ${fx(s3, 3)} × 4/(${fx(s3, 3)} + 4) = ${fx(Rth, 3)} Ω</b>.`,
        () => `<b>Thevenin equivalent with the load back.</b> ${sub('I', 'L')} = ${sub('V', 'th')}/(${sub('R', 'th')} + ${sub('R', 'L')}) = ${fx(Vth, 3)}/(${fx(Rth, 3)} + ${nf(RL, 1)}) = <b>${fx(Vth / (Rth + RL), 3)} A</b>. ` +
          `For the two asked loads: 1 Ω gives ${fx(Vth / (Rth + 1), 3)} A and 2 Ω gives ${fx(Vth / (Rth + 2), 3)} A.`
      ];
      const titles = ['Circuit', 'Remove R<sub>L</sub>', 'V<sub>th</sub>', 'R<sub>th</sub>', 'Equivalent'];
      const ctl = api.controls();
      const back = api.button('← Back', () => go(step - 1), ctl);
      const dots = api.stepper(5, (i) => go(i), ctl);
      const next = api.button('Next →', () => go(step + 1), ctl, { primary: true });
      const stepT = api.el('div', { class: 'viz-caption' }, body);
      const cap = api.caption('');
      // power curve (Extra)
      const p = api.stage('0 0 500 215', body, 'Power in the load against load resistance');
      const pg = api.svg('g', null, p);
      const ctl2 = api.controls();
      const sl = api.slider({ label: 'Load R<sub>L</sub>', min: 0.1, max: 10, step: 0.1, value: RL, format: (v) => v.toFixed(1) + ' Ω' }, (v) => { RL = v; paint(); }, ctl2);
      api.button('R<sub>L</sub> = 1 Ω', () => { RL = 1; sl.set(1); paint(); }, ctl2);
      api.button('R<sub>L</sub> = 2 Ω', () => { RL = 2; sl.set(2); paint(); }, ctl2);
      const ro = api.readouts();
      const rI = api.readout('Load current I<sub>L</sub>', ro), rV = api.readout('Load voltage I<sub>L</sub>R<sub>L</sub>', ro), rP = api.readout('Load power I<sub>L</sub>²R<sub>L</sub>', ro), rM = api.readout('Extra: maximum power', ro);
      function go(i) { step = api.clamp(i, 0, 4); paint(); }
      function curve() {
        pg.innerHTML = '';
        const x0 = 60, x1 = 480, y0 = 180, y1 = 56, Pm = Vth * Vth / (4 * Rth), Py = Pm * 1.18;
        const X = (r) => x0 + (x1 - x0) * r / 10, Y = (w) => y0 - (y0 - y1) * w / Py, PW = (r) => Vth * Vth * r / Math.pow(Rth + r, 2);
        T(api, pg, 12, 18, 'Extra: power delivered to the load', { 'text-anchor': 'start', fill: C.warn, 'font-size': 14 });
        wire(api, pg, [[x0, y1 - 6], [x0, y0], [x1, y0]], C.line2, 1.5);
        for (let r = 0; r <= 10; r += 2) { api.svg('line', { x1: X(r), x2: X(r), y1: y0, y2: y0 + 5, stroke: C.faint }, pg); T(api, pg, X(r), y0 + 21, String(r), { fill: C.dim, 'font-size': 13, 'font-family': MONO }); }
        TM(api, pg, x1, y0 - 8, [['R', 'L'], ' (Ω)'], { 'text-anchor': 'end', fill: C.dim, 'font-size': 14 });
        [0, 2, 4].forEach((w) => { if (w <= Py) { T(api, pg, x0 - 8, Y(w) + 5, String(w), { 'text-anchor': 'end', fill: C.dim, 'font-size': 13, 'font-family': MONO }); } });
        T(api, pg, x0 - 8, y1 - 14, 'P (W)', { 'text-anchor': 'end', fill: C.dim, 'font-size': 13 });
        const pts = []; for (let i = 0; i <= 160; i++) { const r = 10 * i / 160; pts.push([X(r), Y(PW(r))]); }
        wire(api, pg, pts, C.good, 2.4);
        api.svg('line', { x1: X(Rth), x2: X(Rth), y1: y0, y2: Y(Pm), stroke: C.warn, 'stroke-dasharray': '4 4', 'stroke-width': 1.5 }, pg);
        TM(api, pg, X(Rth) + 8, Y(Pm) - 10, ['peak where ', ['R', 'L'], ' = ', ['R', 'th'], ' = ' + fx(Rth, 2) + ' Ω'], { 'text-anchor': 'start', fill: C.warn, 'font-size': 14 });
        const pw = PW(RL);
        api.svg('circle', { cx: r1(X(RL)), cy: r1(Y(pw)), r: 6, fill: C.e, stroke: '#1b1b1e', 'stroke-width': 2 }, pg);
        T(api, pg, X(RL) + 10, Y(pw) + 24, fx(pw, 2) + ' W', { 'text-anchor': 'start', fill: C.e, 'font-size': 14, 'font-family': MONO });
      }
      function paint() {
        g.innerHTML = '';
        if (step === 0) net(true, false, false);
        else if (step === 1) net(false, false, false);
        else if (step === 2) {
          net(false, false, true);
          T(api, g, 410, top + 24, '+', { fill: C.good, 'font-size': 18 }); T(api, g, 410, bot - 12, '−', { fill: C.good, 'font-size': 18 });
          TS(api, g, 456, 136, 'V', 'th', '', { fill: C.good });
          T(api, g, 456, 158, fx(Vth, 3) + ' V', { fill: C.good, 'font-family': MONO, 'font-size': 14 });
        } else if (step === 3) {
          net(false, true, false);
          TS(api, g, 456, 136, 'R', 'th', '', { fill: C.warn });
          T(api, g, 456, 158, fx(Rth, 3) + ' Ω', { fill: C.warn, 'font-family': MONO, 'font-size': 14 });
        } else equiv();
        dots.set(step);
        back.disabled = step === 0; next.disabled = step === 4;
        stepT.innerHTML = `<b>Step ${step + 1} of 5:</b> ${titles[step]}`;
        cap.set(caps[step]());
        const IL = Vth / (Rth + RL);
        rI.set(fx(IL, 3) + ' A'); rV.set(fx(IL * RL, 3) + ' V'); rP.set(fx(IL * IL * RL, 3) + ' W'); rM.set(fx(Vth * Vth / (4 * Rth), 3) + ' W at ' + fx(Rth, 3) + ' Ω');
        curve();
      }
      paint();
      api.caption(`<b>Extra:</b> the load takes the most power when ${sub('R', 'L')} = ${sub('R', 'th')} (maximum power transfer), here ${sub('V', 'th')}²/(4${sub('R', 'th')}) = ${fx(Vth, 3)}²/(4 × ${fx(Rth, 3)}) = ${fx(Vth * Vth / (4 * Rth), 3)} W.`);
    }
  });

  // ================================================================ ac-wave
  VIZ.register('ac-wave', {
    title: 'Sinusoidal AC: values, phase and phasors', kind: 'Animation',
    mount(body, api) {
      const C = api.C;
      const s = api.stage('0 0 520 260', body, 'A sine wave traced by a rotating phasor, with an optional second wave to show phase difference');
      const g = api.svg('g', null, s), dyn = api.svg('g', null, s);
      const COURSE = { Vm: 282.8, f: 314 / TAU, ph: 0 };
      const st = { Vm: COURSE.Vm, f: COURSE.f, ph: 0, t: 0.004, two: false, ph2: -60, play: !api.reduced };
      const cx = 100, cy = 122, K = 90 / 400, x0 = 215, x1 = 505, TW = 0.04, A2 = 0.6;
      const X = (t) => x0 + (x1 - x0) * t / TW;
      const ctl = api.controls();
      api.button('Course exercise: v = 282.8 sin 314t', () => { Object.assign(st, COURSE, { t: 0.004 }); sVm.set(st.Vm); sF.set(st.f); sPh.set(0); sT.set(4); setPlay(false); redraw(); }, ctl);
      const playB = api.button('', () => setPlay(!st.play), ctl);
      const twoB = api.button('Second wave', () => { st.two = !st.two; twoB.classList.toggle('on', st.two); sPh2.el.style.display = st.two ? '' : 'none'; rD.el.style.display = st.two ? '' : 'none'; redraw(); }, ctl);
      const c2 = api.controls();
      const sVm = api.slider({ label: 'Peak V<sub>m</sub>', min: 10, max: 400, step: 0.1, value: st.Vm, format: (v) => v.toFixed(1) + ' V' }, (v) => { st.Vm = v; redraw(); }, c2);
      const sF = api.slider({ label: 'Frequency f', min: 25, max: 100, value: st.f, format: (v) => v.toFixed(2) + ' Hz' }, (v) => { st.f = v; redraw(); }, c2);
      const sPh = api.slider({ label: 'Phase φ', min: -180, max: 180, step: 5, value: 0, format: (v) => v + '°' }, (v) => { st.ph = v; redraw(); }, c2);
      const sT = api.slider({ label: 'Time t', min: 0, max: 40, step: 0.1, value: st.t * 1000, format: (v) => v.toFixed(1) + ' ms' }, (v) => { st.t = v / 1000; setPlay(false); drawDyn(); }, c2);
      const sPh2 = api.slider({ label: 'Second wave phase', min: -180, max: 180, step: 5, value: st.ph2, format: (v) => v + '°' }, (v) => { st.ph2 = v; redraw(); }, c2);
      sPh2.el.style.display = 'none';
      const ro = api.readouts();
      const rT = api.readout('Period T = 1/f', ro), rW = api.readout('ω = 2πf', ro), rR = api.readout('RMS 0.707 V<sub>m</sub>', ro), rA = api.readout('Average 0.637 V<sub>m</sub>', ro);
      const rF = api.readout('Form factor', ro), rK = api.readout('Peak factor', ro), rV = api.readout('v at time t', ro), rD = api.readout('Phase difference', ro);
      rD.el.style.display = 'none';
      const work = workBox(api, body);
      function setPlay(p) { st.play = p && !api.reduced; playB.innerHTML = st.play ? 'Pause' : 'Play'; playB.disabled = api.reduced; }
      const w = () => TAU * st.f;
      function redraw() {
        g.innerHTML = '';
        const r = st.Vm * K;
        // axes
        wire(api, g, [[x0, cy], [x1, cy]], C.line2, 1.5); wire(api, g, [[x0, cy - 100], [x0, cy + 100]], C.line2, 1.5);
        for (let k = 0; k <= 4; k++) { const x = X(k * 0.01); api.svg('line', { x1: x, x2: x, y1: cy, y2: cy + 5, stroke: C.faint }, g); T(api, g, x, 246, k * 10 + (k === 4 ? ' ms' : ''), { fill: C.dim, 'font-size': 13, 'font-family': MONO, 'text-anchor': k === 4 ? 'end' : 'middle' }); }
        api.svg('line', { x1: x0, x2: x1, y1: r1(cy - r), y2: r1(cy - r), stroke: C.faint, 'stroke-dasharray': '3 4' }, g);
        api.svg('line', { x1: x0, x2: x1, y1: r1(cy - r * Math.SQRT1_2), y2: r1(cy - r * Math.SQRT1_2), stroke: C.good, 'stroke-dasharray': '6 4', opacity: 0.7 }, g);
        TM(api, g, x1, cy - r * Math.SQRT1_2 - 6, [['V', 'rms']], { 'text-anchor': 'end', fill: C.good, 'font-size': 14 });
        TM(api, g, 8, 20, [['V', 'm'], ' = ' + st.Vm.toFixed(1) + ' V'], { 'text-anchor': 'start', fill: C.e, 'font-size': 14 });
        // waves
        const wave = (amp, ph, col) => { const p = []; for (let i = 0; i <= 240; i++) { const t = TW * i / 240; p.push([X(t), cy - amp * Math.sin(w() * t + ph)]); } wire(api, g, p, col, 2.4); };
        if (st.two) wave(r * A2, st.ph2 * Math.PI / 180, C.cat);
        wave(r, st.ph * Math.PI / 180, C.e);
        api.svg('circle', { cx, cy, r: r1(r), fill: 'none', stroke: C.line2, 'stroke-dasharray': '3 4' }, g);
        if (st.two) api.svg('circle', { cx, cy, r: r1(r * A2), fill: 'none', stroke: C.line2, 'stroke-dasharray': '2 4' }, g);
        wire(api, g, [[cx - 100, cy], [cx + 100, cy]], C.line, 1);
        // readouts + working
        const Vm = st.Vm, T0 = 1 / st.f, om = w(), Vr = Vm * Math.SQRT1_2, Va = 2 * Vm / Math.PI;
        rT.set(fx(T0 * 1000, 2) + ' ms'); rW.set(fx(om, 1) + ' rad/s'); rR.set(fx(Vr, 1) + ' V'); rA.set(fx(Va, 1) + ' V');
        rF.set(fx(Vr / Va, 2)); rK.set(fx(Vm / Vr, 3));
        let d = ((st.ph2 - st.ph + 540) % 360) - 180;
        rD.set(d === 0 ? 'in phase' : d === -180 ? '180°, opposite' : 'wave 2 ' + (d > 0 ? 'leads by ' : 'lags by ') + Math.abs(d) + '°');
        drawDyn();
      }
      function drawDyn() {
        dyn.innerHTML = '';
        const r = st.Vm * K, om = w(), th = om * st.t + st.ph * Math.PI / 180;
        const tip = [cx + r * Math.cos(th), cy - r * Math.sin(th)], xc = X(st.t);
        api.svg('line', { x1: r1(xc), x2: r1(xc), y1: cy - 100, y2: cy + 100, stroke: C.faint }, dyn);
        if (st.two) {
          const th2 = om * st.t + st.ph2 * Math.PI / 180, t2 = [cx + r * A2 * Math.cos(th2), cy - r * A2 * Math.sin(th2)];
          wire(api, dyn, [t2, [xc, t2[1]]], C.cat, 1); dyn.lastChild.setAttribute('stroke-dasharray', '3 4');
          wire(api, dyn, [[cx, cy], t2], C.cat, 2.6); head(api, dyn, t2[0], t2[1], Math.atan2(t2[1] - cy, t2[0] - cx), C.cat, 8);
          api.svg('circle', { cx: r1(xc), cy: r1(t2[1]), r: 4.5, fill: C.cat }, dyn);
        }
        wire(api, dyn, [tip, [xc, tip[1]]], C.e, 1); dyn.lastChild.setAttribute('stroke-dasharray', '3 4');
        wire(api, dyn, [[cx, cy], tip], C.e, 3); head(api, dyn, tip[0], tip[1], Math.atan2(tip[1] - cy, tip[0] - cx), C.e, 9);
        api.svg('circle', { cx: r1(xc), cy: r1(tip[1]), r: 5, fill: C.e }, dyn);
        const deg = ((th * 180 / Math.PI) % 360 + 360) % 360;
        T(api, dyn, cx, 246, 'ωt + φ = ' + deg.toFixed(0) + '°', { fill: C.dim, 'font-size': 14 });
        const v = st.Vm * Math.sin(th);
        rV.set(fx(v, 1) + ' V');
        const om0 = om, Vm = st.Vm;
        work.innerHTML =
          `<span class="ln">v = ${sub('V', 'm')} sin(ωt + φ) = ${fx(Vm, 1)} sin(${fx(om0, 1)}t ${st.ph < 0 ? '−' : '+'} ${Math.abs(st.ph)}°) V</span>` +
          `<span class="ln">T = 1/f = 1/${fx(st.f, 2)} = ${fx(1000 / st.f, 2)} ms; ω = 2πf = 2π × ${fx(st.f, 2)} = ${fx(om0, 1)} rad/s</span>` +
          `<span class="ln">${sub('V', 'rms')} = 0.707 × ${fx(Vm, 1)} = <b>${fx(Vm * Math.SQRT1_2, 1)} V</b>; ${sub('V', 'avg')} (half cycle) = 0.637 × ${fx(Vm, 1)} = <b>${fx(2 * Vm / Math.PI, 1)} V</b></span>` +
          `<span class="ln">Form factor = rms/average = 0.707/0.637 = <b>1.11</b>; peak factor = max/rms = 1/0.707 = <b>1.414</b> (the same for every sine wave)</span>` +
          `<span class="ln">At t = ${fx(st.t * 1000, 1)} ms: v = ${fx(Vm, 1)} sin(${fx(om0, 1)} × ${nf(st.t, 4)} ${st.ph < 0 ? '−' : '+'} ${Math.abs(st.ph)}°) = ${fx(Vm, 1)} sin(${deg.toFixed(1)}°) = <b>${fx(v, 1)} V</b></span>` +
          (st.two ? `<span class="ln">The second wave reaches its peak ${(() => { const d = ((st.ph2 - st.ph + 540) % 360) - 180; return d === 0 ? 'at the same instant (in phase)' : d === -180 ? 'half a cycle apart (180° out of phase)' : (d > 0 ? 'earlier: it <b>leads</b> by ' : 'later: it <b>lags</b> by ') + Math.abs(d) + '°'; })()}. Phasors keep the same angle between them as they rotate.</span>` : '');
      }
      setPlay(st.play);
      redraw();
      if (!api.reduced) api.loop((dt) => { if (!st.play) return; st.t = (st.t + dt * 0.01) % TW; sT.set(st.t * 1000); drawDyn(); });
      api.caption('The phasor turns anticlockwise at ω; its height is the instantaneous value. Time runs about 100 times slower than real 50 Hz. Drag "Time t" to stop at any instant.');
    }
  });

  // ================================================================ rlc-phasor
  VIZ.register('rlc-phasor', {
    title: 'Series RL, RC and RLC circuits', kind: 'Calculator',
    mount(body, api) {
      const C = api.C;
      const PRE = {
        rl1: { label: 'RL example 1: 3.5 Ω, 0.1 H, 220 V, 50 Hz', mode: 'RL', R: 3.5, L: 100, C: 100, f: 50, V: 220, note: 'The example gives v = 220∠30° V. Using V as the reference only turns both phasors by 30°: the current is really 6.96∠−53.64° A.' },
        rlc3: { label: 'Coil 8 Ω, 0.03 H on 240 V, 50 Hz (RLC example 3a)', mode: 'RL', R: 8, L: 30, C: 168.9, f: 50, V: 240 },
        rlc3b: { label: 'Same coil + 168.9 µF in series (RLC example 3b)', mode: 'RLC', R: 8, L: 30, C: 168.9, f: 50, V: 240, note: `With X<sub>C</sub> = 2X<sub>L</sub> = 18.85 Ω the net reactance only flips sign (+9.42 Ω becomes −9.42 Ω), so Z, the current and the power stay as with the coil alone. The power factor turns from lagging to leading.` },
        rlc2: { label: 'RLC example 2: 50 Ω, 0.15 H, 25 µF, 230 V, 50 Hz', mode: 'RLC', R: 50, L: 150, C: 25, f: 50, V: 230 },
        rc: { label: 'RC: 50 Ω with 25 µF, 230 V, 50 Hz (example 2 without the coil)', mode: 'RC', R: 50, L: 150, C: 25, f: 50, V: 230 }
      };
      const st = Object.assign({ key: 'rlc2' }, PRE.rlc2);
      const s1 = api.stage('0 0 520 270', body, 'Phasor diagram and power triangle');
      const g = api.svg('g', null, s1);
      const ctl = api.controls();
      const sel = api.select({ label: 'Example', value: st.key, options: Object.keys(PRE).map((k) => ({ value: k, label: PRE[k].label })).concat([{ value: 'own', label: 'Your own values' }]) }, (k) => { if (PRE[k]) { Object.assign(st, PRE[k], { key: k }); sync(); } }, ctl);
      const ctlm = api.controls();
      const seg = api.segmented([{ value: 'RL', label: 'RL' }, { value: 'RC', label: 'RC' }, { value: 'RLC', label: 'RLC' }], st.mode, (m) => { st.mode = m; own(); sync(); }, ctlm);
      const c2 = api.controls();
      const sR = api.slider({ label: 'Resistance R', min: 1, max: 100, step: 0.5, value: st.R, format: (v) => v + ' Ω' }, (v) => { st.R = v; own(); calc(); }, c2);
      const sL = api.slider({ label: 'Inductance L', min: 1, max: 500, step: 1, value: st.L, format: (v) => v + ' mH' }, (v) => { st.L = v; own(); calc(); }, c2);
      const sC = api.slider({ label: 'Capacitance C', min: 1, max: 500, step: 0.1, value: st.C, format: (v) => v.toFixed(1) + ' µF' }, (v) => { st.C = v; own(); calc(); }, c2);
      const sF = api.slider({ label: 'Frequency f', min: 5, max: 200, step: 1, value: st.f, format: (v) => v + ' Hz' }, (v) => { st.f = v; own(); calc(); }, c2);
      const nV = api.number({ label: 'Supply V (rms)', value: st.V, step: 1, min: 0, unit: 'V' }, (v) => { st.V = Math.max(0, v); own(); calc(); }, c2);
      const ro = api.readouts();
      const R_ = (l) => api.readout(l, ro);
      const rXL = R_('X<sub>L</sub>'), rXC = R_('X<sub>C</sub>'), rZ = R_('Impedance Z'), rI = R_('Current I'), rPh = R_('Phase angle φ'), rPf = R_('Power factor'), rP = R_('Active power P'), rQ = R_('Reactive power Q'), rS = R_('Apparent power S'), rFr = R_('Extra: resonance f<sub>r</sub>');
      const work = workBox(api, body);
      const s2 = api.stage('0 0 520 190', body, 'Current against frequency with the resonance marked');
      const g2 = api.svg('g', null, s2);
      function own() { if (st.key !== 'own') { st.key = 'own'; sel.set('own'); } }
      function sync() { seg.set(st.mode); sR.set(st.R); sL.set(st.L); sC.set(st.C); sF.set(st.f); nV.set(st.V); calc(); }
      function arrow(a, b, col, w, lab, lo) {
        wire(api, g, [a, b], col, w || 2.6);
        if (Math.hypot(b[0] - a[0], b[1] - a[1]) > 6) head(api, g, b[0], b[1], Math.atan2(b[1] - a[1], b[0] - a[0]), col, 8);
        if (lab) TM(api, g, b[0] + (lo ? lo[0] : 0), b[1] + (lo ? lo[1] : 0), lab, { fill: col, 'font-size': 14, 'text-anchor': lo && lo[2] ? lo[2] : 'middle' });
      }
      function calc() {
        const hasL = st.mode !== 'RC', hasC = st.mode !== 'RL';
        sL.el.style.display = hasL ? '' : 'none'; sC.el.style.display = hasC ? '' : 'none';
        rXL.el.style.display = hasL ? '' : 'none'; rXC.el.style.display = hasC ? '' : 'none'; rFr.el.style.display = hasL && hasC ? '' : 'none';
        const L = st.L / 1000, Cf = st.C * 1e-6, om = TAU * st.f, V = st.V, R = st.R;
        const XL = hasL ? om * L : 0, XC = hasC ? 1 / (om * Cf) : 0, X = XL - XC, Z = Math.hypot(R, X), I = V / Z;
        const ph = Math.atan2(X, R), pf = Math.cos(ph), P = V * I * pf, Q = V * I * Math.sin(ph), S = V * I;
        const kind = Math.abs(X) < 1e-9 ? 'unity' : X > 0 ? 'lagging' : 'leading';
        const fr = hasL && hasC ? 1 / (TAU * Math.sqrt(L * Cf)) : NaN;
        rXL.set(fx(XL, 2) + ' Ω'); rXC.set(fx(XC, 2) + ' Ω'); rZ.set(fx(Z, 2) + ' Ω'); rI.set(fx(I, 3) + ' A');
        rPh.set(fx(Math.abs(ph) * 180 / Math.PI, 2) + '°'); rPf.set(fx(pf, 3) + ' ' + (kind === 'unity' ? '(unity)' : kind));
        rP.set(fx(P, 1) + ' W'); rQ.set(fx(Math.abs(Q), 1) + ' VAR'); rS.set(fx(S, 1) + ' VA'); rFr.set(fx(fr, 2) + ' Hz');
        // ---- phasor diagram, V along +x (math coordinates, V = 1); VL and VC drawn from the tip of VR
        g.innerHTML = '';
        const id = [Math.cos(-ph), Math.sin(-ph)], pp = [Math.sin(ph), Math.cos(ph)];
        const VR = R / Z, VLm = XL / Z, VCm = XC / Z;
        const P0 = [0, 0], P1 = [id[0] * VR, id[1] * VR], PL = [P1[0] + pp[0] * VLm, P1[1] + pp[1] * VLm], PC = [P1[0] - pp[0] * VCm, P1[1] - pp[1] * VCm], It = [id[0] * 0.35, id[1] * 0.35];
        const all = [P0, [1, 0], P1, It].concat(hasL ? [PL] : [], hasC ? [PC] : []);
        const minx = Math.min(...all.map((q) => q[0])), maxx = Math.max(...all.map((q) => q[0])), miny = Math.min(...all.map((q) => q[1])), maxy = Math.max(...all.map((q) => q[1]));
        const sc = Math.min(200 / Math.max(maxx - minx, 0.01), 170 / Math.max(maxy - miny, 0.01), 210);
        const ox = 34 + (210 - (maxx - minx) * sc) / 2 - minx * sc, oy = 52 + (180 - (maxy - miny) * sc) / 2 + maxy * sc;
        const S_ = (q) => [ox + q[0] * sc, oy - q[1] * sc];
        const away = ph > 0 ? [-pp[0], -pp[1]] : [pp[0], pp[1]];
        const off = (q, d, px) => { const p = S_(q); return [p[0] + d[0] * px, p[1] - d[1] * px + 5]; };
        T(api, g, 150, 20, 'Phasors (V as reference)', { fill: C.dim, 'font-size': 14 });
        wire(api, g, [[S_(P0)[0] - 10, S_(P0)[1]], [S_([1, 0])[0] + 30, S_(P0)[1]]], C.line, 1);
        if (Math.abs(ph) > 0.02) {
          const ra = 30, o = S_(P0), q0 = [o[0] + ra, o[1]], q1 = [o[0] + ra * Math.cos(-ph), o[1] - ra * Math.sin(-ph)];
          api.svg('path', { d: 'M' + r1(q0[0]) + ' ' + r1(q0[1]) + ' A' + ra + ' ' + ra + ' 0 0 ' + (ph > 0 ? 1 : 0) + ' ' + r1(q1[0]) + ' ' + r1(q1[1]), fill: 'none', stroke: C.warn, 'stroke-width': 1.5 }, g);
          T(api, g, o[0] + 44 * Math.cos(-ph / 2) + 4, o[1] - 44 * Math.sin(-ph / 2) + 5, 'φ', { fill: C.warn, 'font-size': 15, 'text-anchor': 'start' });
        }
        if (hasL && hasC) { wire(api, g, [S_(P1), S_([1, 0])], C.faint, 1.5); g.lastChild.setAttribute('stroke-dasharray', '4 4'); }
        arrow(S_(P0), S_(P1), C.good, 2.4);
        if (hasL) { arrow(S_(P1), S_(PL), C.cat, 2.4); const q = off(PL, pp, 16); TM(api, g, q[0], q[1], [['V', 'L']], { fill: C.cat, 'font-size': 14 }); }
        if (hasC) { arrow(S_(P1), S_(PC), C.an, 2.4); const q = off(PC, [-pp[0], -pp[1]], 16); TM(api, g, q[0], q[1], [['V', 'C']], { fill: C.an, 'font-size': 14 }); }
        arrow(S_(P0), S_([1, 0]), C.white, 3);
        { const q = S_([1, 0]); T(api, g, q[0] - 18, q[1] + (ph > 0 ? -10 : 22), 'V', { fill: C.white, 'font-size': 15 }); }
        arrow(S_(P0), S_(It), C.e, 3.4);
        { const q = off(It, [-away[0], -away[1]], 14); T(api, g, q[0], q[1], 'I', { fill: C.e, 'font-size': 15 }); }
        { const q = off([P1[0] / 2, P1[1] / 2], away, 16); TM(api, g, q[0], q[1], [['V', 'R']], { fill: C.good, 'font-size': 14 }); }
        // ---- power triangle (values are in the readouts)
        const O = [340, 140], k = 85 / Math.max(S, 1e-9), pw = P * k, qh = Q * k;
        T(api, g, 410, 20, 'Power triangle', { fill: C.dim, 'font-size': 14 });
        api.svg('path', { d: 'M' + O[0] + ' ' + O[1] + ' L' + r1(O[0] + pw) + ' ' + O[1] + ' L' + r1(O[0] + pw) + ' ' + r1(O[1] - qh) + ' Z', fill: 'rgba(233,196,106,0.08)', stroke: 'none' }, g);
        wire(api, g, [O, [O[0] + pw, O[1]]], C.good, 2.6);
        wire(api, g, [[O[0] + pw, O[1]], [O[0] + pw, O[1] - qh]], C.cat, 2.6);
        wire(api, g, [O, [O[0] + pw, O[1] - qh]], C.warn, 2.6);
        T(api, g, O[0] + pw / 2, O[1] + (qh >= 0 ? 22 : -10), 'P', { fill: C.good, 'font-size': 15, 'font-weight': 600 });
        if (Math.abs(qh) > 8) T(api, g, O[0] + pw + 10, O[1] - qh / 2 + 5, 'Q', { fill: C.cat, 'font-size': 15, 'font-weight': 600, 'text-anchor': 'start' });
        { const hl = Math.hypot(pw, qh) || 1, nx = -qh / hl, ny = -pw / hl; T(api, g, O[0] + pw / 2 + nx * 16 * (qh >= 0 ? 1 : -1), O[1] - qh / 2 + ny * 16 * (qh >= 0 ? 1 : -1) + 5, 'S', { fill: C.warn, 'font-size': 15, 'font-weight': 600 }); }
        T(api, g, 410, 248, 'S = ' + fx(S, 0) + ' VA, P = ' + fx(P, 0) + ' W', { fill: C.dim, 'font-size': 13, 'font-family': MONO });
        T(api, g, 410, 266, kind === 'unity' ? 'unity power factor' : (kind === 'lagging' ? 'Q up: inductive, I lags' : 'Q down: capacitive, I leads'), { fill: C.dim, 'font-size': 13 });
        // ---- working
        const pi = '2π × ' + nf(st.f, 2);
        let h = '';
        if (hasL) h += `<span class="ln">${sub('X', 'L')} = 2πfL = ${pi} × ${nf(L, 4)} = <b>${fx(XL, 2)} Ω</b></span>`;
        if (hasC) h += `<span class="ln">${sub('X', 'C')} = 1/(2πfC) = 1/(${pi} × ${nf(st.C, 2)} × 10⁻⁶) = <b>${fx(XC, 2)} Ω</b></span>`;
        const xs = hasL && hasC ? `(${fx(XL, 2)} − ${fx(XC, 2)})²` : `${fx(hasL ? XL : XC, 2)}²`;
        const xn = hasL && hasC ? `(${sub('X', 'L')} − ${sub('X', 'C')})²` : (hasL ? sub('X', 'L') + '²' : sub('X', 'C') + '²');
        h += `<span class="ln">Z = √(R² + ${xn}) = √(${nf(R, 2)}² + ${xs}) = <b>${fx(Z, 2)} Ω</b></span>`;
        h += `<span class="ln">I = V/Z = ${nf(V, 2)}/${fx(Z, 2)} = <b>${fx(I, 3)} A</b></span>`;
        h += `<span class="ln">cos φ = R/Z = ${nf(R, 2)}/${fx(Z, 2)} = <b>${fx(pf, 3)} ${kind}</b>, φ = ${fx(Math.abs(ph) * 180 / Math.PI, 2)}°${kind === 'lagging' ? ' (current lags the voltage)' : kind === 'leading' ? ' (current leads the voltage)' : ''}</span>`;
        h += `<span class="ln">P = VI cos φ = ${nf(V, 2)} × ${fx(I, 3)} × ${fx(pf, 3)} = <b>${fx(P, 1)} W</b>; Q = VI sin φ = <b>${fx(Math.abs(Q), 1)} VAR</b>; S = VI = <b>${fx(S, 1)} VA</b> = √(P² + Q²)</span>`;
        if (hasL && hasC) h += `<span class="ex"><b>Extra:</b> resonance at ${sub('f', 'r')} = 1/(2π√(LC)) = 1/(2π√(${nf(L, 4)} × ${nf(st.C, 2)} × 10⁻⁶)) = ${fx(fr, 2)} Hz. There ${sub('X', 'L')} = ${sub('X', 'C')}, Z = R and the current is largest: V/R = ${fx(V / R, 3)} A.</span>`;
        const note = PRE[st.key] && PRE[st.key].note;
        if (note) h += `<span class="ex">${note}</span>`;
        work.innerHTML = h;
        // ---- resonance curve
        g2.innerHTML = '';
        s2.parentNode.style.display = hasL && hasC ? '' : 'none';
        if (hasL && hasC) {
          const x0 = 58, x1 = 500, y0 = 158, y1 = 40, fmax = Math.max(2 * fr, 1.25 * st.f, 10), Imax = V / R;
          const Xf = (f) => x0 + (x1 - x0) * f / fmax, Yi = (i) => y0 - (y0 - y1) * i / (Imax * 1.1 || 1);
          const If = (f) => { const o = TAU * f; return V / Math.hypot(R, o * L - 1 / (o * Cf)); };
          T(api, g2, 12, 18, 'Extra: current against frequency (series resonance)', { 'text-anchor': 'start', fill: C.warn, 'font-size': 14 });
          wire(api, g2, [[x0, y1 - 8], [x0, y0], [x1, y0]], C.line2, 1.5);
          const stp = [1, 2, 5, 10, 20, 25, 50, 100, 200, 500].find((q) => fmax / q <= 6) || 1000;
          for (let f = 0; f <= fmax + 1e-9; f += stp) { const x = Xf(f); api.svg('line', { x1: r1(x), x2: r1(x), y1: y0, y2: y0 + 5, stroke: C.faint }, g2); T(api, g2, x, y0 + 21, String(f), { fill: C.dim, 'font-size': 13, 'font-family': MONO }); }
          T(api, g2, x1, y0 - 8, 'f (Hz)', { 'text-anchor': 'end', fill: C.dim, 'font-size': 13 });
          T(api, g2, x0 - 6, y1 - 2, 'I', { 'text-anchor': 'end', fill: C.dim, 'font-size': 13 });
          const pts = []; for (let i = 1; i <= 220; i++) { const f = fmax * i / 220; pts.push([Xf(f), Yi(If(f))]); }
          wire(api, g2, pts, C.e, 2.4);
          api.svg('line', { x1: r1(Xf(fr)), x2: r1(Xf(fr)), y1: y0, y2: r1(Yi(Imax)), stroke: C.warn, 'stroke-dasharray': '4 4', 'stroke-width': 1.5 }, g2);
          TM(api, g2, Xf(fr) + 8, Yi(Imax) - 4, [['f', 'r'], ' = ' + fx(fr, 1) + ' Hz'], { 'text-anchor': 'start', fill: C.warn, 'font-size': 14 });
          api.svg('circle', { cx: r1(Xf(st.f)), cy: r1(Yi(I)), r: 6, fill: C.white, stroke: '#1b1b1e', 'stroke-width': 2 }, g2);
          T(api, g2, Xf(st.f) + (Xf(st.f) > 380 ? -10 : 10), Yi(I) + 22, fx(I, 2) + ' A at ' + nf(st.f, 1) + ' Hz', { 'text-anchor': Xf(st.f) > 380 ? 'end' : 'start', fill: C.white, 'font-size': 14, 'font-family': MONO });
        }
      }
      sync();
    }
  });

  // ================================================================ dc-machine
  VIZ.register('dc-machine', {
    title: 'DC machine: EMF, generator and motor', kind: 'Calculator',
    mount(body, api) {
      const C = api.C;
      const s = api.stage('0 0 480 250', body, 'DC machine: poles and armature, or the equivalent circuit');
      const g = api.svg('g', null, s), rot = api.svg('g', null, s);
      const PRE = {
        emf43: { mode: 'emf', label: 'Example 4.3 data: 8 poles, 0.162 Wb, 256 lap, 600 rpm', P: 8, phi: 0.162, Z: 256, N: 600, wind: 'lap' },
        emfm1: { mode: 'emf', label: 'Motor example 1 data: 4 poles, 25 mWb, 800 wave, 289.5 rpm', P: 4, phi: 0.025, Z: 800, N: 289.5, wind: 'wave' },
        g41: { mode: 'gen', label: 'Example 4.1: shunt, 400 A at 220 V', type: 'shunt', V: 220, IL: 400, Ra: 0.15, Rsh: 250, Rse: 0, bd: 0, emf: false },
        g42: { mode: 'gen', label: 'Example 4.2: short-shunt compound, 25 A at 230 V', type: 'short', V: 230, IL: 25, Ra: 0.04, Rse: 0.26, Rsh: 200, bd: 1, emf: false },
        g43: { mode: 'gen', label: 'Example 4.3: 50 kW at 400 V, shunt, 8 poles, 256 lap, 600 rpm', type: 'shunt', V: 400, IL: 125, Ra: 0.1, Rsh: 200, Rse: 0, bd: 1, P: 8, Z: 256, N: 600, wind: 'lap', emf: true },
        m1: { mode: 'mot', label: 'Motor example 1: series, 220 V, 45 A, 4 poles, 800 wave', type: 'series', V: 220, IL: 45, Ish: 0, Ra: 0.6, Rse: 0, P: 4, phi: 0.025, Z: 800, wind: 'wave', Pout: 8200 },
        m2: { mode: 'mot', label: 'Motor example 2: shunt, 220 V, 32 A, 4 poles, 540 lap', type: 'shunt', V: 220, IL: 32, Ish: 1, Ra: 0.09, Rse: 0, P: 4, phi: 0.03, Z: 540, wind: 'lap', Pout: 5595 }
      };
      const v = { mode: 'gen', key: 'g41', P: 8, phi: 0.162, Z: 256, N: 600, wind: 'lap', type: 'shunt', V: 220, IL: 400, Ra: 0.15, Rsh: 250, Rse: 0, bd: 0, Ish: 1, Pout: 0, emf: false };
      const ctl = api.controls();
      const modeSeg = api.segmented([{ value: 'emf', label: 'EMF equation' }, { value: 'gen', label: 'Generator' }, { value: 'mot', label: 'Motor' }], v.mode, (m) => { v.mode = m; apply(Object.keys(PRE).find((k) => PRE[k].mode === m)); }, ctl);
      const pctl = api.controls(), tctl = api.controls(), fctl = api.controls();
      const F = {};
      const add = (k, label, unit, step) => { F[k] = api.number({ label, value: v[k], step, unit, min: 0 }, (x) => { v[k] = x; if (v.mode === 'gen' && (k === 'P' || k === 'Z' || k === 'N')) v.emf = true; calc(); }, fctl); };
      add('P', 'Poles P', '', 2); add('phi', 'Flux per pole φ', 'Wb', 0.001); add('Z', 'Conductors Z', '', 1); add('N', 'Speed N', 'rpm', 1);
      const wseg = api.segmented([{ value: 'lap', label: 'Lap (A = P)' }, { value: 'wave', label: 'Wave (A = 2)' }], v.wind, (x) => { v.wind = x; if (v.mode === 'gen') v.emf = true; calc(); }, fctl);
      add('V', 'Terminal voltage V', 'V', 1); add('IL', 'Load current I<sub>L</sub>', 'A', 1); add('Ra', 'Armature R<sub>a</sub>', 'Ω', 0.01);
      add('Rsh', 'Shunt field R<sub>sh</sub>', 'Ω', 1); add('Rse', 'Series field R<sub>se</sub>', 'Ω', 0.01); add('bd', 'Brush drop per brush', 'V', 0.5);
      add('Ish', 'Shunt field current I<sub>sh</sub>', 'A', 0.1); add('Pout', 'Output power', 'W', 100);
      const ro = api.readouts();
      const work = workBox(api, body);
      const setLab = (k, html) => { F[k].el.querySelector('.vnum-label').innerHTML = html; };
      function apply(key) {
        Object.assign(v, { P: 4, phi: 0.025, Z: 500, N: 1000, wind: 'lap', Rse: 0, bd: 0, Ish: 0, Pout: 0, emf: false }, PRE[key], { key });
        v.mode = PRE[key].mode;
        modeSeg.set(v.mode); wseg.set(v.wind);
        pctl.innerHTML = '';
        api.select({ label: 'Example', value: key, options: Object.keys(PRE).filter((k) => PRE[k].mode === v.mode).map((k) => ({ value: k, label: PRE[k].label })) }, (k) => apply(k), pctl);
        tctl.innerHTML = '';
        if (v.mode !== 'emf') {
          const opts = v.mode === 'gen'
            ? [{ value: 'shunt', label: 'Shunt' }, { value: 'series', label: 'Series' }, { value: 'long', label: 'Long-shunt compound' }, { value: 'short', label: 'Short-shunt compound' }]
            : [{ value: 'shunt', label: 'Shunt' }, { value: 'series', label: 'Series' }];
          api.segmented(opts, v.type, (x) => { v.type = x; calc(); }, tctl);
        }
        Object.keys(F).forEach((k) => F[k].set(inum(v[k])));
        setLab('V', v.mode === 'mot' ? 'Supply voltage V' : 'Terminal voltage V');
        setLab('IL', v.mode === 'mot' ? 'Line current I<sub>L</sub>' : 'Load current I<sub>L</sub>');
        calc();
      }
      function show() {
        const m = v.mode, t = v.type, sh = t !== 'series', se = t !== 'shunt';
        const vis = { P: true, phi: m !== 'gen', Z: true, N: m !== 'mot', V: m !== 'emf', IL: m !== 'emf', Ra: m !== 'emf',
          Rsh: m === 'gen' && sh, Rse: (m === 'gen' && se) || (m === 'mot' && t === 'series'), bd: m === 'gen', Ish: m === 'mot' && t === 'shunt', Pout: m === 'mot' };
        Object.keys(F).forEach((k) => { F[k].el.style.display = vis[k] ? '' : 'none'; });
      }
      // ---------- drawings
      let arm = { cx: 240, cy: 125, r: 60 }, rpm = 0;
      function drawPoles(A) {
        const cx = 240, cy = 125, P = Math.max(2, Math.min(12, Math.round(v.P / 2) * 2));
        arm = { cx, cy, r: 58 };
        api.svg('circle', { cx, cy, r: 112, fill: 'none', stroke: C.metal, 'stroke-width': 10, opacity: 0.6 }, g);
        for (let i = 0; i < P; i++) {
          const a = -Math.PI / 2 + i * TAU / P, isN = i % 2 === 0;
          const gp = api.svg('g', { transform: `rotate(${r1(a * 180 / Math.PI + 90)} ${cx} ${cy})` }, g);
          api.svg('path', { d: `M${cx - 16} ${cy - 108} L${cx + 16} ${cy - 108} L${cx + 16} ${cy - 84} L${cx + 26} ${cy - 70} L${cx - 26} ${cy - 70} L${cx - 16} ${cy - 84} Z`, fill: isN ? 'rgba(240,140,140,0.35)' : 'rgba(124,192,255,0.35)', stroke: isN ? C.bad : C.e, 'stroke-width': 1.5 }, gp);
          T(api, g, cx + 92 * Math.cos(a), cy + 92 * Math.sin(a) + 5, isN ? 'N' : 'S', { fill: isN ? C.bad : C.e, 'font-size': 14, 'font-weight': 700 });
        }
        api.svg('circle', { cx, cy, r: 58, fill: C.surface2, stroke: C.white, 'stroke-width': 1.5 }, g);
        T(api, g, 12, 24, 'P = ' + nf(v.P, 0) + ' poles', { 'text-anchor': 'start', fill: C.white, 'font-size': 14 });
        T(api, g, 12, 44, 'A = ' + A + ' paths', { 'text-anchor': 'start', fill: C.white, 'font-size': 14 });
        T(api, g, 12, 64, 'Z/A = ' + nf(v.Z / A, 1) + ' in series', { 'text-anchor': 'start', fill: C.dim, 'font-size': 14 });
        T(api, g, 468, 24, nf(v.N, 1) + ' rpm', { 'text-anchor': 'end', fill: C.white, 'font-size': 14, 'font-family': MONO });
        if (P !== v.P) T(api, g, 468, 240, '(drawn with ' + P + ' poles)', { 'text-anchor': 'end', fill: C.dim, 'font-size': 13 });
        rot.innerHTML = '';
        const nz = Math.min(48, Math.max(4, Math.round(v.Z)));
        for (let i = 0; i < nz; i++) { const a = i * TAU / nz; api.svg('circle', { cx: r1(cx + 50 * Math.cos(a)), cy: r1(cy + 50 * Math.sin(a)), r: 3, fill: C.cat }, rot); }
        api.svg('circle', { cx, cy, r: 10, fill: C.metal }, rot);
        wire(api, rot, [[cx - 38, cy], [cx + 38, cy]], C.faint, 2);
      }
      function drawCircuit(gen, vals) {
        const top = 60, bot = 210, ax = 110, ac = 135, xr = 420, t = v.type;
        const L = { shunt: { xs: 250 }, series: { cs: 265 }, long: { cs: 178, xs: 265 }, short: { xs: 190, cs: 290 } }[t];
        arm = { cx: ax, cy: ac, r: 26 };
        wire(api, g, [[ax, top], [ax, ac - 27]]); wire(api, g, [[ax, ac + 27], [ax, bot]]);
        api.svg('circle', { cx: ax, cy: ac, r: 26, fill: C.surface2, stroke: C.white, 'stroke-width': 2.2 }, g);
        api.svg('rect', { x: ax - 7, y: ac - 33, width: 14, height: 7, fill: C.metal }, g);
        api.svg('rect', { x: ax - 7, y: ac + 26, width: 14, height: 7, fill: C.metal }, g);
        branch(api, g, [ax, top], [xr, top], L.cs ? [{ k: 'coil', at: (L.cs - ax) / (xr - ax), col: C.cat }] : []);
        wire(api, g, [[ax, bot], [xr, bot]]);
        if (gen) branch(api, g, [xr, top], [xr, bot], [{ k: 'R', at: 0.5, col: C.e }]);
        else branch(api, g, [xr, bot], [xr, top], [{ k: 'E', at: 0.5, plus: 'b' }]);
        T(api, g, xr + 14, ac - (gen ? 22 : 44), gen ? 'Load' : 'Supply', { 'text-anchor': 'start', fill: gen ? C.e : C.white, 'font-size': 14 });
        T(api, g, xr + 14, ac + 26, nf(v.V, 2) + ' V', { 'text-anchor': 'start', fill: C.white, 'font-size': 14, 'font-family': MONO });
        // armature labels (left column)
        TM(api, g, 46, ac - 34, gen ? ['E'] : [['E', 'b']], { fill: C.good });
        T(api, g, 46, ac - 14, fx(vals.E, gen ? 3 : 2) + ' V', { fill: C.good, 'font-size': 13, 'font-family': MONO });
        TM(api, g, 46, ac + 24, [['I', 'a']], { fill: C.warn });
        T(api, g, 46, ac + 44, fx(vals.Ia, 2) + ' A', { fill: C.warn, 'font-size': 14, 'font-family': MONO });
        head(api, g, ax, 88, gen ? -Math.PI / 2 : Math.PI / 2, C.warn, 8);
        T(api, g, ax, ac + 5, '', {});
        if (L.xs) {
          branch(api, g, [L.xs, top], [L.xs, bot], [{ k: 'coil', at: 0.5, col: C.an }]);
          dot(api, g, [L.xs, top]); dot(api, g, [L.xs, bot]);
          head(api, g, L.xs, top + 24, Math.PI / 2, C.an, 7);
          TM(api, g, L.xs + 18, ac - 6, [['R', 'sh'], ' = ' + nf(v.Rsh, 2) + ' Ω'], { 'text-anchor': 'start', fill: C.an, 'font-size': 14 });
          TM(api, g, L.xs + 18, ac + 16, [['I', 'sh'], ' = ' + fx(vals.Ish, 3) + ' A'], { 'text-anchor': 'start', fill: C.an, 'font-size': 14 });
        }
        if (L.cs) {
          TM(api, g, L.cs, top - 16, [['R', 'se'], ' = ' + nf(v.Rse, 3) + ' Ω'], { fill: C.cat, 'font-size': 14 });
          TM(api, g, L.cs, top + 34, [['I', 'se'], ' = ' + fx(vals.Ise, 2) + ' A'], { fill: C.cat, 'font-size': 14 });
        }
        head(api, g, xr - 28, top, gen ? 0 : Math.PI, C.warn, 8);
        TM(api, g, xr - 28, top - 14, [['I', 'L'], ' = ' + nf(v.IL, 2) + ' A'], { fill: C.warn, 'font-size': 14 });
        rot.innerHTML = '';
        wire(api, rot, [[ax - 20, ac], [ax + 20, ac]], C.faint, 2); wire(api, rot, [[ax, ac - 20], [ax, ac + 20]], C.faint, 2);
      }
      function calc() {
        show();
        g.innerHTML = '';
        const A = v.wind === 'lap' ? v.P : 2, Aw = v.wind === 'lap' ? `A = P = ${nf(v.P, 0)} (lap)` : 'A = 2 (wave)';
        let h = '';
        ro.innerHTML = '';
        const RO = (l, x) => api.readout(l, ro, x);
        if (v.mode === 'emf') {
          const E = v.P * v.phi * v.Z * v.N / (60 * A);
          drawPoles(A); rpm = v.N;
          RO('Parallel paths A', String(A)); RO('EMF per conductor', fx(v.P * v.phi * v.N / 60, 3) + ' V'); RO('Generated EMF E', '<b>' + fx(E, 2) + ' V</b>');
          h += `<span class="ln">${Aw}</span>`;
          h += `<span class="ln">Flux cut per conductor in one turn = Pφ; time for one turn = 60/N s; EMF per conductor = PφN/60 = ${nf(v.P, 0)} × ${nf(v.phi, 4)} × ${nf(v.N, 1)}/60 = ${fx(v.P * v.phi * v.N / 60, 3)} V</span>`;
          h += `<span class="ln">Each path has Z/A = ${nf(v.Z, 0)}/${A} = ${nf(v.Z / A, 2)} conductors in series, so E = PφZN/(60A) = ${nf(v.P, 0)} × ${nf(v.phi, 4)} × ${nf(v.Z, 0)} × ${nf(v.N, 1)}/(60 × ${A}) = <b>${fx(E, 2)} V</b></span>`;
        } else if (v.mode === 'gen') {
          const bd2 = 2 * v.bd, t = v.type;
          let Ish = 0, Ia, Ise = 0, E, lines = [];
          if (t === 'shunt') { Ish = v.V / v.Rsh; Ia = v.IL + Ish; E = v.V + Ia * v.Ra + bd2;
            lines = [`${sub('I', 'sh')} = V/${sub('R', 'sh')} = ${nf(v.V, 2)}/${nf(v.Rsh, 2)} = ${nf(Ish, 4)} A`, `${sub('I', 'a')} = ${sub('I', 'L')} + ${sub('I', 'sh')} = ${nf(v.IL, 2)} + ${nf(Ish, 4)} = ${nf(Ia, 4)} A`,
              `E = V + ${sub('I', 'a')}${sub('R', 'a')}${bd2 ? ' + brush drop' : ''} = ${nf(v.V, 2)} + ${nf(Ia, 4)} × ${nf(v.Ra, 3)}${bd2 ? ' + ' + nf(bd2, 2) : ''} = <b>${fx(E, 3)} V</b>`]; }
          else if (t === 'series') { Ia = v.IL; Ise = Ia; E = v.V + Ia * (v.Ra + v.Rse) + bd2;
            lines = [`${sub('I', 'a')} = ${sub('I', 'se')} = ${sub('I', 'L')} = ${nf(v.IL, 2)} A`, `E = V + ${sub('I', 'a')}(${sub('R', 'a')} + ${sub('R', 'se')})${bd2 ? ' + brush drop' : ''} = ${nf(v.V, 2)} + ${nf(Ia, 2)} × (${nf(v.Ra, 3)} + ${nf(v.Rse, 3)})${bd2 ? ' + ' + nf(bd2, 2) : ''} = <b>${fx(E, 3)} V</b>`]; }
          else if (t === 'long') { Ish = v.V / v.Rsh; Ia = v.IL + Ish; Ise = Ia; E = v.V + Ia * (v.Ra + v.Rse) + bd2;
            lines = [`${sub('I', 'sh')} = V/${sub('R', 'sh')} = ${nf(v.V, 2)}/${nf(v.Rsh, 2)} = ${nf(Ish, 4)} A`, `${sub('I', 'a')} = ${sub('I', 'se')} = ${sub('I', 'L')} + ${sub('I', 'sh')} = ${nf(Ia, 4)} A (the series field carries the armature current)`,
              `E = V + ${sub('I', 'a')}(${sub('R', 'a')} + ${sub('R', 'se')})${bd2 ? ' + brush drop' : ''} = ${nf(v.V, 2)} + ${nf(Ia, 4)} × (${nf(v.Ra, 3)} + ${nf(v.Rse, 3)})${bd2 ? ' + ' + nf(bd2, 2) : ''} = <b>${fx(E, 3)} V</b>`]; }
          else { const Vsh = v.V + v.IL * v.Rse; Ish = Vsh / v.Rsh; Ia = v.IL + Ish; Ise = v.IL; E = Vsh + Ia * v.Ra + bd2;
            lines = [`Series field carries the load current: drop = ${sub('I', 'L')}${sub('R', 'se')} = ${nf(v.IL, 2)} × ${nf(v.Rse, 3)} = ${fx(v.IL * v.Rse, 3)} V, so the shunt sees ${fx(Vsh, 3)} V`,
              `${sub('I', 'sh')} = ${fx(Vsh, 3)}/${nf(v.Rsh, 2)} = ${nf(Ish, 4)} A; ${sub('I', 'a')} = ${sub('I', 'L')} + ${sub('I', 'sh')} = ${nf(Ia, 4)} A`,
              `E = ${fx(Vsh, 3)} + ${sub('I', 'a')}${sub('R', 'a')}${bd2 ? ' + brush drop' : ''} = ${fx(Vsh, 3)} + ${nf(Ia, 4)} × ${nf(v.Ra, 3)}${bd2 ? ' + ' + nf(bd2, 2) : ''} = <b>${fx(E, 3)} V</b>`]; }
          if (bd2) lines.splice(lines.length - 1, 0, `Brush drop: ${nf(v.bd, 2)} V per brush × 2 brushes = ${nf(bd2, 2)} V`);
          drawCircuit(true, { E, Ia, Ish, Ise }); rpm = v.N;
          RO('Armature current I<sub>a</sub>', fx(Ia, 3) + ' A'); if (t !== 'series') RO('Shunt current I<sub>sh</sub>', nf(Ish, 4) + ' A'); RO('Generated EMF E', '<b>' + fx(E, 3) + ' V</b>');
          h += lines.map((l) => `<span class="ln">${l}</span>`).join('');
          if (v.emf) {
            const phi = 60 * A * E / (v.P * v.Z * v.N);
            RO('Flux per pole φ', fx(phi, 4) + ' Wb');
            h += `<span class="ln">Flux from the EMF equation (${Aw}): φ = 60AE/(PZN) = 60 × ${A} × ${fx(E, 2)}/(${nf(v.P, 0)} × ${nf(v.Z, 0)} × ${nf(v.N, 1)}) = <b>${fx(phi, 4)} Wb</b></span>`;
          } else h += '<span class="ex">This example gives no poles, conductors or speed; type them in to get the flux per pole too.</span>';
          if (v.key === 'g42') h += `<span class="ex">The course answer 239.845 V is what the long-shunt connection gives (switch to Long-shunt to see it); for short shunt the EMF is ${fx(E, 3)} V.</span>`;
        } else {
          const t = v.type, Ia = t === 'shunt' ? v.IL - v.Ish : v.IL, Rt = v.Ra + (t === 'series' ? v.Rse : 0);
          const Eb = v.V - Ia * Rt, N = 60 * A * Eb / (v.P * v.phi * v.Z), Ta = 0.159 * v.phi * v.Z * Ia * v.P / A, Tsh = v.Pout > 0 ? v.Pout / (TAU * N / 60) : NaN;
          drawCircuit(false, { E: Eb, Ia, Ish: v.Ish, Ise: Ia }); rpm = N;
          RO('Armature current I<sub>a</sub>', fx(Ia, 2) + ' A'); RO('Back EMF E<sub>b</sub>', fx(Eb, 2) + ' V'); RO('Speed N', '<b>' + fx(N, 1) + ' rpm</b>'); RO('Armature torque T<sub>a</sub>', fx(Ta, 2) + ' N·m');
          if (v.Pout > 0) RO('Shaft torque T<sub>sh</sub>', fx(Tsh, 1) + ' N·m');
          h += t === 'shunt' ? `<span class="ln">${sub('I', 'a')} = ${sub('I', 'L')} − ${sub('I', 'sh')} = ${nf(v.IL, 2)} − ${nf(v.Ish, 2)} = ${fx(Ia, 2)} A</span>` : `<span class="ln">Series motor: ${sub('I', 'a')} = ${sub('I', 'L')} = ${nf(v.IL, 2)} A</span>`;
          h += `<span class="ln">${sub('E', 'b')} = V − ${sub('I', 'a')}${t === 'series' && v.Rse ? '(' + sub('R', 'a') + ' + ' + sub('R', 'se') + ')' : sub('R', 'a')} = ${nf(v.V, 2)} − ${fx(Ia, 2)} × ${nf(Rt, 3)} = <b>${fx(Eb, 2)} V</b></span>`;
          h += `<span class="ln">${Aw}. N = ${sub('E', 'b')} × 60 × A/(φZP) = ${fx(Eb, 2)} × 60 × ${A}/(${nf(v.phi, 4)} × ${nf(v.Z, 0)} × ${nf(v.P, 0)}) = <b>${fx(N, 1)} rpm</b> (${fx(N / 60, 2)} rps)</span>`;
          h += `<span class="ln">${sub('T', 'a')} = 0.159 φZ${sub('I', 'a')}(P/A) = 0.159 × ${nf(v.phi, 4)} × ${nf(v.Z, 0)} × ${fx(Ia, 2)} × (${nf(v.P, 0)}/${A}) = <b>${fx(Ta, 2)} N·m</b> (0.159 = 1/2π)</span>`;
          h += `<span class="ln">Power developed = ${sub('E', 'b')}${sub('I', 'a')} = ${fx(Eb, 2)} × ${fx(Ia, 2)} = ${fx(Eb * Ia, 0)} W</span>`;
          if (v.Pout > 0) h += `<span class="ln">${sub('T', 'sh')} = output/(2πN/60) = ${nf(v.Pout, 0)}/(2π × ${fx(N, 1)}/60) = <b>${fx(Tsh, 1)} N·m</b>, a little below ${sub('T', 'a')} (the gap is iron and friction loss)</span>`;
          if (v.key === 'm1') h += '<span class="ex">The course solution writes 289.5 rpm as "30 rps" and gets 43.52 N·m for the shaft torque. 289.5 rpm is 4.83 rps, which gives the shaft torque above.</span>';
        }
        work.innerHTML = h;
        rot.setAttribute('transform', `rotate(${r1(ang)} ${arm.cx} ${arm.cy})`);
      }
      let ang = 0;
      apply('g41');
      if (!api.reduced) api.loop((dt) => { ang = (ang + dt * 360 * Math.min(0.6, Math.max(0, rpm) / 600 * 0.25)) % 360; rot.setAttribute('transform', `rotate(${r1(ang)} ${arm.cx} ${arm.cy})`); });
    }
  });

  // ================================================================ transformer
  VIZ.register('transformer', {
    title: 'Single-phase transformer', kind: 'Animation',
    mount(body, api) {
      const C = api.C;
      const s = api.stage('0 0 480 260', body, 'Transformer core with primary and secondary windings and alternating flux');
      const g = api.svg('g', null, s), fl = api.svg('g', null, s);
      const st = { N1: 400, N2: 100, V1: 230, f: 50, RL: 20 };
      const c1 = api.controls();
      api.slider({ label: 'Primary turns N<sub>1</sub>', min: 50, max: 1000, step: 10, value: st.N1, format: (v) => String(v) }, (v) => { st.N1 = v; draw(); }, c1);
      api.slider({ label: 'Secondary turns N<sub>2</sub>', min: 50, max: 1000, step: 10, value: st.N2, format: (v) => String(v) }, (v) => { st.N2 = v; draw(); }, c1);
      const c2 = api.controls();
      api.slider({ label: 'Supply V<sub>1</sub>', min: 10, max: 440, step: 1, value: st.V1, format: (v) => v + ' V' }, (v) => { st.V1 = v; draw(); }, c2);
      api.slider({ label: 'Frequency f', min: 25, max: 100, step: 1, value: st.f, format: (v) => v + ' Hz' }, (v) => { st.f = v; draw(); }, c2);
      api.slider({ label: 'Load R<sub>L</sub>', min: 1, max: 500, step: 1, value: st.RL, format: (v) => v + ' Ω' }, (v) => { st.RL = v; draw(); }, c2);
      const ro = api.readouts();
      const rK = api.readout('Ratio K = N<sub>2</sub>/N<sub>1</sub>', ro), rV2 = api.readout('Secondary V<sub>2</sub>', ro), rI2 = api.readout('Secondary I<sub>2</sub>', ro), rI1 = api.readout('Primary I<sub>1</sub>', ro), rPh = api.readout('Peak flux Φ<sub>m</sub>', ro), rVA = api.readout('VA, both sides', ro);
      const work = workBox(api, body);
      const arrows = [];
      function winding(x0, x1, n, col) {
        for (let i = 0; i < n; i++) { const y = 98 + i * (64 / Math.max(1, n - 1)); wire(api, g, [[x0, y + 4], [x1, y - 4]], col, 3); }
      }
      function draw() {
        g.innerHTML = '';
        const K = st.N2 / st.N1, V2 = K * st.V1, I2 = V2 / st.RL, I1 = K * I2, phim = st.V1 / (4.44 * st.f * st.N1), E2 = 4.44 * st.f * st.N2 * phim;
        api.svg('path', { d: 'M120 40 H360 V220 H120 Z M170 90 V170 H310 V90 Z', fill: 'rgba(154,160,168,0.16)', 'fill-rule': 'evenodd', stroke: C.metal, 'stroke-width': 1.5 }, g);
        const n1 = 2 + Math.round(st.N1 / 100), n2 = 2 + Math.round(st.N2 / 100);
        winding(112, 178, n1, C.cat); winding(302, 368, n2, C.cat);
        // primary circuit
        wire(api, g, [[112, 98 + 4], [45, 102], [45, 112]]); wire(api, g, [[45, 148], [45, 162 + 4], [112, 166]]);
        api.svg('circle', { cx: 45, cy: 130, r: 18, fill: 'none', stroke: C.white, 'stroke-width': 2.2 }, g);
        api.svg('path', { d: 'M33 130 q6 -10 12 0 t12 0', fill: 'none', stroke: C.white, 'stroke-width': 2 }, g);
        // secondary circuit
        wire(api, g, [[368, 94], [430, 94]]); wire(api, g, [[368, 162], [430, 162]]);
        branch(api, g, [430, 94], [430, 162], [{ k: 'R', at: 0.5, col: C.e }]);
        TM(api, g, 45, 202, [['V', '1'], ' = ' + st.V1 + ' V'], { fill: C.white, 'font-size': 14 });
        TM(api, g, 45, 222, [['I', '1'], ' = ' + fx(I1, 2) + ' A'], { fill: C.warn, 'font-size': 14 });
        TM(api, g, 430, 202, [['V', '2'], ' = ' + fx(V2, 1) + ' V'], { fill: C.white, 'font-size': 14 });
        TM(api, g, 430, 222, [['I', '2'], ' = ' + fx(I2, 2) + ' A'], { fill: C.warn, 'font-size': 14 });
        TM(api, g, 448, 135, [['R', 'L']], { fill: C.e, 'font-size': 14, 'text-anchor': 'start' });
        TM(api, g, 145, 245, [['N', '1'], ' = ' + st.N1], { fill: C.cat, 'font-size': 14 });
        TM(api, g, 335, 245, [['N', '2'], ' = ' + st.N2], { fill: C.cat, 'font-size': 14 });
        T(api, g, 240, 26, 'Primary', { fill: C.dim, 'font-size': 13, 'text-anchor': 'end', x: 160 });
        T(api, g, 320, 26, 'Secondary', { fill: C.dim, 'font-size': 13, 'text-anchor': 'start' });
        TM(api, g, 240, 126, [['Φ = Φ', 'm'], ' sin ωt'], { fill: C.dim, 'font-size': 14 });
        T(api, g, 240, 150, K > 1 ? 'step-up' : K < 1 ? 'step-down' : '1 : 1', { fill: K === 1 ? C.dim : C.good, 'font-size': 15, 'font-weight': 600 });
        rK.set(fx(K, 3) + (K > 1 ? ' (step-up)' : K < 1 ? ' (step-down)' : ''));
        rV2.set(fx(V2, 2) + ' V'); rI2.set(fx(I2, 3) + ' A'); rI1.set(fx(I1, 3) + ' A'); rPh.set(fx(phim * 1000, 3) + ' mWb'); rVA.set(fx(st.V1 * I1, 1) + ' VA');
        work.innerHTML =
          `<span class="ln">K = ${sub('N', 2)}/${sub('N', 1)} = ${st.N2}/${st.N1} = <b>${fx(K, 3)}</b>: ${K > 1 ? 'more turns on the secondary, a <b>step-up</b> transformer' : K < 1 ? 'fewer turns on the secondary, a <b>step-down</b> transformer' : 'equal turns'}</span>` +
          `<span class="ln">Peak flux from E = 4.44 f N Φ<sub>m</sub> (taking ${sub('E', 1)} = ${sub('V', 1)}): Φ<sub>m</sub> = ${sub('V', 1)}/(4.44 f ${sub('N', 1)}) = ${st.V1}/(4.44 × ${st.f} × ${st.N1}) = <b>${fx(phim * 1000, 3)} mWb</b></span>` +
          `<span class="ln">The same flux links the secondary: ${sub('E', 2)} = 4.44 f ${sub('N', 2)} Φ<sub>m</sub> = 4.44 × ${st.f} × ${st.N2} × ${nf(phim, 6)} = <b>${fx(E2, 2)} V</b> = K${sub('V', 1)} = ${sub('V', 2)}</span>` +
          `<span class="ln">${sub('I', 2)} = ${sub('V', 2)}/${sub('R', 'L')} = ${fx(V2, 2)}/${st.RL} = <b>${fx(I2, 3)} A</b>; same VA on both sides, so ${sub('I', 1)} = K${sub('I', 2)} = ${fx(K, 3)} × ${fx(I2, 3)} = <b>${fx(I1, 3)} A</b> (${sub('V', 1)}${sub('I', 1)} = ${fx(st.V1 * I1, 1)} VA = ${sub('V', 2)}${sub('I', 2)})</span>` +
          `<span class="ex">Ideal transformer assumed (no losses, no magnetising current). Raising f lowers Φ<sub>m</sub> for the same voltage; the voltages do not depend on f.</span>`;
      }
      // flux arrows on the core centre line (clockwise loop)
      [[240, 65, 0], [335, 130, Math.PI / 2], [240, 195, Math.PI], [145, 130, -Math.PI / 2]].forEach((a) => {
        const gr = api.svg('g', null, fl); arrows.push({ a, gr });
      });
      const loopPath = api.svg('path', { d: 'M145 65 H335 V195 H145 Z', fill: 'none', stroke: C.e, 'stroke-width': 2, 'stroke-dasharray': '6 6' }, fl);
      function flux(th) {
        const k = Math.sin(th);
        loopPath.setAttribute('opacity', (0.15 + 0.6 * Math.abs(k)).toFixed(2));
        arrows.forEach(({ a, gr }) => {
          gr.innerHTML = '';
          if (Math.abs(k) < 0.08) return;
          const ang = a[2] + (k < 0 ? Math.PI : 0);
          head(api, gr, a[0], a[1], ang, C.e, 6 + 7 * Math.abs(k));
        });
      }
      draw();
      let th = Math.PI / 2;
      flux(th);
      if (!api.reduced) api.loop((dt) => { th += dt * TAU * 0.4; flux(th); });
      api.caption(api.reduced ? 'Flux shown at its positive peak. It alternates at the supply frequency, reversing every half cycle.' : 'The flux in the core alternates at the supply frequency (shown slowed down): it grows, falls to zero and reverses every half cycle, inducing the EMF in both windings.');
    }
  });

  // ================================================================ induction-motor
  VIZ.register('induction-motor', {
    title: 'Three-phase induction motor: rotating field', kind: 'Animation',
    mount(body, api) {
      const C = api.C;
      const s = api.stage('0 0 500 300', body, 'Stator with three phases, the rotating magnetic field and the rotor following it');
      const g = api.svg('g', null, s), dyn = api.svg('g', null, s);
      const st = { f: 50, P: 4, s: 0.04, play: !api.reduced };
      const PH = [{ n: 'R', col: C.bad, sh: 0 }, { n: 'Y', col: C.warn, sh: -TAU / 3 }, { n: 'B', col: C.e, sh: -2 * TAU / 3 }];
      const cx = 150, cy = 150;
      const ctl = api.controls();
      api.slider({ label: 'Supply frequency f', min: 10, max: 60, step: 1, value: st.f, format: (v) => v + ' Hz' }, (v) => { st.f = v; calc(); }, ctl);
      api.segmented([2, 4, 6, 8].map((p) => ({ value: p, label: p + ' poles' })), st.P, (p) => { st.P = p; calc(); }, ctl);
      const c2 = api.controls();
      api.slider({ label: 'Slip s', min: 0, max: 1, step: 0.01, value: st.s, format: (v) => (v * 100).toFixed(0) + ' %' }, (v) => { st.s = v; calc(); }, c2);
      const playB = api.button('', () => { st.play = !st.play && !api.reduced; lab(); }, c2);
      api.button('Step 30°', () => { st.play = false; lab(); advance(TAU / 12); }, c2);
      const ro = api.readouts();
      const rNs = api.readout('Field speed N<sub>s</sub>', ro), rN = api.readout('Rotor speed N', ro), rSl = api.readout('Slip speed N<sub>s</sub> − N', ro), rFr = api.readout('Rotor frequency s·f', ro);
      const work = workBox(api, body);
      function lab() { playB.innerHTML = st.play ? 'Pause' : 'Play'; playB.disabled = api.reduced; }
      let th = 0, fieldA = 0, rotA = 0;
      // static: stator and phase plot frame
      api.svg('circle', { cx, cy, r: 128, fill: 'rgba(154,160,168,0.14)', stroke: C.metal, 'stroke-width': 1.5 }, g);
      api.svg('circle', { cx, cy, r: 100, fill: '#1b1b1e', stroke: C.metal, 'stroke-width': 1.5 }, g);
      const slots = [];
      [['R', 0, 90], ['Y', 1, 210], ['B', 2, 330], ["R'", 0, 270], ["Y'", 1, 30], ["B'", 2, 150]].forEach(([n, k, deg]) => {
        const a = -deg * Math.PI / 180, x = cx + 114 * Math.cos(a), y = cy + 114 * Math.sin(a);
        const c = api.svg('circle', { cx: r1(x), cy: r1(y), r: 11, fill: PH[k].col, opacity: 0.5 }, g);
        T(api, g, x, y + 5, n, { fill: '#151517', 'font-size': 13, 'font-weight': 700 });
        slots.push({ c, k, neg: n.length > 1 });
      });
      const px0 = 300, px1 = 490, pcy = 150, pa = 52;
      T(api, g, 395, 70, 'Phase currents', { fill: C.dim, 'font-size': 14 });
      wire(api, g, [[px0, pcy], [px1, pcy]], C.line2, 1.2);
      PH.forEach((p, k) => {
        const pts = []; for (let i = 0; i <= 120; i++) { const a = TAU * i / 120; pts.push([px0 + (px1 - px0) * i / 120, pcy - pa * Math.sin(a + p.sh)]); }
        wire(api, g, pts, p.col, 2);
        T(api, g, px0 + 18 + k * 30, pcy + 84, 'i' + p.n, { fill: p.col, 'font-size': 14, 'font-family': MONO });
      });
      T(api, g, px1, pcy + 84, 'one cycle', { 'text-anchor': 'end', fill: C.dim, 'font-size': 13 });
      function calc() {
        const Ns = 120 * st.f / st.P, N = Ns * (1 - st.s);
        rNs.set(fx(Ns, 0) + ' rpm'); rN.set(fx(N, 0) + ' rpm'); rSl.set(fx(Ns - N, 0) + ' rpm'); rFr.set(fx(st.s * st.f, 2) + ' Hz');
        work.innerHTML =
          `<span class="ln">${sub('N', 's')} = 120f/P = 120 × ${st.f}/${st.P} = <b>${fx(Ns, 0)} rpm</b>. More poles, slower field: each cycle of the supply turns the field by 2/P of a revolution (${st.P === 2 ? 'one full turn' : '1/' + (st.P / 2) + ' turn'} here).</span>` +
          `<span class="ln"><b>Extra:</b> slip s = (${sub('N', 's')} − N)/${sub('N', 's')}, so N = ${sub('N', 's')}(1 − s) = ${fx(Ns, 0)} × (1 − ${nf(st.s, 2)}) = <b>${fx(N, 0)} rpm</b>; rotor current frequency = s·f = ${nf(st.s, 2)} × ${st.f} = <b>${fx(st.s * st.f, 2)} Hz</b>.</span>` +
          `<span class="ln"><b>Extra:</b> the rotor has to run slower than the field. At N = ${sub('N', 's')} its bars would see no change of flux, so no EMF, no current and no torque.${st.s === 1 ? ' At s = 100 % the rotor is at standstill (the moment of starting).' : ''}</span>`;
        drawDyn();
      }
      function drawDyn() {
        dyn.innerHTML = '';
        const P = st.P;
        // stator coil brightness follows the phase currents
        slots.forEach((q) => { const i = Math.sin(th + PH[q.k].sh); q.c.setAttribute('opacity', (0.25 + 0.75 * Math.abs(i)).toFixed(2)); });
        // rotor
        const rg = api.svg('g', { transform: `rotate(${r1(-rotA * 180 / Math.PI)} ${cx} ${cy})` }, dyn);
        api.svg('circle', { cx, cy, r: 72, fill: C.surface2, stroke: C.metal, 'stroke-width': 1.5 }, rg);
        for (let i = 0; i < 16; i++) { const a = i * TAU / 16; api.svg('circle', { cx: r1(cx + 62 * Math.cos(a)), cy: r1(cy + 62 * Math.sin(a)), r: 4, fill: C.cat, opacity: 0.8 }, rg); }
        api.svg('circle', { cx, cy, r: 9, fill: C.metal }, rg);
        wire(api, rg, [[cx, cy], [cx + 56, cy]], C.white, 3);
        api.svg('circle', { cx: cx + 56, cy, r: 6, fill: C.white }, rg);
        // field poles in the air gap
        for (let i = 0; i < P; i++) {
          const a = fieldA + i * TAU / P, isN = i % 2 === 0, x = cx + 86 * Math.cos(a), y = cy - 86 * Math.sin(a);
          api.svg('circle', { cx: r1(x), cy: r1(y), r: 10, fill: isN ? 'rgba(240,140,140,0.9)' : 'rgba(199,164,255,0.9)' }, dyn);
          T(api, dyn, x, y + 5, isN ? 'N' : 'S', { fill: '#151517', 'font-size': 13, 'font-weight': 700 });
        }
        const fa = [cx + 70 * Math.cos(fieldA), cy - 70 * Math.sin(fieldA)];
        wire(api, dyn, [[cx, cy], fa], C.warn, 2); dyn.lastChild.setAttribute('stroke-dasharray', '5 4');
        let lag = ((fieldA - rotA) * 180 / Math.PI) % 360; if (lag < 0) lag += 360;
        T(api, dyn, cx, 296, 'field ahead of rotor mark by ' + lag.toFixed(0) + '°', { fill: C.dim, 'font-size': 13 });
        // phase-plot cursor
        const xc = px0 + (px1 - px0) * (((th % TAU) + TAU) % TAU) / TAU;
        api.svg('line', { x1: r1(xc), x2: r1(xc), y1: pcy - pa - 8, y2: pcy + pa + 8, stroke: C.white, 'stroke-width': 1.2 }, dyn);
        PH.forEach((p) => api.svg('circle', { cx: r1(xc), cy: r1(pcy - pa * Math.sin(th + p.sh)), r: 4, fill: p.col }, dyn));
      }
      function advance(dth) {
        th += dth;
        const dField = dth * 2 / st.P;
        fieldA += dField; rotA += dField * (1 - st.s);
        drawDyn();
      }
      lab(); calc();
      if (!api.reduced) api.loop((dt) => { if (st.play) advance(dt * TAU * st.f / 100); });
      api.caption('Three currents 120° apart in the R, Y and B windings make a field of constant strength that rotates at N<sub>s</sub>. Everything runs about 100 times slower than real. The white mark on the rotor falls behind the field at the slip rate. <b>Extra:</b> the three-phase resultant is 1.5 Φ<sub>m</sub>; the course draws it with two components as Φ<sub>m</sub>.');
    }
  });
})();
