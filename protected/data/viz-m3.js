/* Module 3 widgets: drawing scales, first vs third angle placement, views of a solid standing on the HP (Pro).
 * Presets use the course examples; numbers match tools/check-m3.js. */
(function () {
  'use strict';
  const r1 = (v) => Math.round(v * 10) / 10;
  const nf = (v, d) => {
    if (!isFinite(v)) return '—';
    let s = Number(v).toFixed(d == null ? 2 : d);
    if (s.indexOf('.') >= 0) s = s.replace(/0+$/, '').replace(/\.$/, '');
    return s;
  };
  function T(api, p, x, y, s, o) {
    return api.svg('text', Object.assign({ x: r1(x), y: r1(y), 'font-size': 15, fill: api.C.text, 'text-anchor': 'middle', text: s }, o || {}), p);
  }
  const line = (api, p, x1, y1, x2, y2, o) => api.svg('line', Object.assign({ x1: r1(x1), y1: r1(y1), x2: r1(x2), y2: r1(y2), stroke: api.C.white, 'stroke-width': 2 }, o || {}), p);

  // ---------------------------------------------------------------- scale-calc
  const SCALES = [['2:1', 2, 1], ['5:1', 5, 1], ['1:1', 1, 1], ['1:2', 1, 2], ['1:5', 1, 5], ['1:10', 1, 10], ['1:100', 1, 100]];
  VIZ.register('scale-calc', {
    title: 'Scale: drawn size from actual size', kind: 'Interactive',
    mount(body, api) {
      const C = api.C;
      const st = { a: 250, i: 4 };
      const s = api.stage('0 0 480 170', body, 'Actual length and drawn length as two bars');
      const g = api.svg('g', null, s);
      const ctl = api.controls();
      api.number({ label: 'Actual length', value: st.a, step: 1, min: 1, unit: 'mm' }, (v) => { if (v > 0) { st.a = v; draw(); } }, ctl);
      api.select({ label: 'Scale', value: String(st.i), options: SCALES.map((x, i) => ({ value: String(i), label: x[0] })) }, (v) => { st.i = +v; draw(); }, ctl);
      const ro = api.readouts();
      const rf = api.readout('Scale factor', ro), rd = api.readout('Drawn length', ro), rk = api.readout('Kind', ro);
      const cap = api.caption('');
      function draw() {
        g.innerHTML = '';
        const [name, n, d] = SCALES[st.i], f = n / d, dr = st.a * f;
        const big = Math.max(st.a, dr), px = 400 / big;
        T(api, g, 40, 52, 'Actual', { 'text-anchor': 'start', fill: C.dim, 'font-size': 14 });
        api.svg('rect', { x: 40, y: 60, width: r1(Math.max(1, st.a * px)), height: 22, fill: C.e, 'fill-opacity': 0.35, stroke: C.e }, g);
        T(api, g, 40, 118, 'Drawn at ' + name, { 'text-anchor': 'start', fill: C.dim, 'font-size': 14 });
        api.svg('rect', { x: 40, y: 126, width: r1(Math.max(1, dr * px)), height: 22, fill: C.cat, 'fill-opacity': 0.35, stroke: C.cat }, g);
        rf.set(nf(f, 3)); rd.set(nf(dr, 2) + ' mm'); rk.set(f > 1 ? 'Enlarged' : f < 1 ? 'Reduced' : 'Full size');
        cap.set('drawn = ' + nf(st.a, 2) + ' × ' + n + '/' + d + ' = <b>' + nf(dr, 2) + ' mm</b>. The dimension written on the drawing is still ' + nf(st.a, 2) + '.');
      }
      draw();
    }
  });

  // ---------------------------------------------------------------- ortho-angle
  // The slide-18 block: base 50 x 50 x 10, ribs 10 thick on the front and back edges, rib top 20..30, slope to the right corner, height 40.
  VIZ.register('ortho-angle', {
    title: 'First or third angle: where the views go', kind: 'Interactive',
    mount(body, api) {
      const C = api.C;
      let mode = 'first';
      const s = api.stage('0 0 400 330', body, 'Front, top and side views of a block arranged in first or third angle');
      const g = api.svg('g', null, s);
      const ctl = api.controls();
      api.segmented([{ value: 'first', label: 'First angle (BIS)' }, { value: 'third', label: 'Third angle (ASME)' }], mode, (v) => { mode = v; draw(); }, ctl);
      const cap = api.caption('');
      const k = 2;
      function fv(ox, oy) { // FV with bottom-left at (ox, oy)
        const p = (x, z) => [ox + x * k, oy - z * k];
        const poly = [[0, 0], [50, 0], [50, 10], [0, 10], [0, 0]];
        api.svg('polyline', { points: poly.map((q) => p(...q).join(',')).join(' '), fill: 'none', stroke: C.white, 'stroke-width': 2 }, g);
        api.svg('polyline', { points: [[20, 10], [20, 40], [30, 40], [50, 10]].map((q) => p(...q).join(',')).join(' '), fill: 'none', stroke: C.white, 'stroke-width': 2 }, g);
      }
      function tv(ox, oy, frontDown) { // TV with top-left at (ox, oy); frontDown: front of object at the bottom
        const p = (x, y) => [ox + x * k, oy + (frontDown ? 50 - y : y) * k];
        api.svg('rect', { x: ox, y: oy, width: 50 * k, height: 50 * k, fill: 'none', stroke: C.white, 'stroke-width': 2 }, g);
        [[0, 10], [40, 50]].forEach(([a, b]) => { const yi = a === 0 ? b : a; line(api, g, ...p(20, yi), ...p(50, yi)); line(api, g, ...p(20, a), ...p(20, b)); line(api, g, ...p(30, a), ...p(30, b)); });
      }
      function sv(ox, oy) { // LSV with bottom-left at (ox, oy)
        const p = (y, z) => [ox + y * k, oy - z * k];
        api.svg('rect', { x: ox, y: oy - 10 * k, width: 50 * k, height: 10 * k, fill: 'none', stroke: C.white, 'stroke-width': 2 }, g);
        [[0, 10], [40, 50]].forEach(([a, b]) => api.svg('polyline', { points: [[a, 10], [a, 40], [b, 40], [b, 10]].map((q) => p(...q).join(',')).join(' '), fill: 'none', stroke: C.white, 'stroke-width': 2 }, g));
      }
      function draw() {
        g.innerHTML = '';
        const first = mode === 'first', xy = first ? 120 : 160;
        line(api, g, 20, xy, 380, xy, { stroke: C.e, 'stroke-width': 1.5 });
        T(api, g, 14, xy + 5, 'X', { fill: C.e, 'font-size': 13 }); T(api, g, 388, xy + 5, 'Y', { fill: C.e, 'font-size': 13 });
        const fx = first ? 60 : 220, sx = first ? 240 : 60;
        if (first) { fv(fx, xy - 14); sv(sx, xy - 14); tv(fx, xy + 14, true); }
        else { tv(fx, xy - 14 - 100, false); fv(fx, xy + 14 + 80); sv(sx, xy + 14 + 80); }
        const fvTop = first ? xy - 14 - 80 : xy + 14;
        T(api, g, fx + 50, first ? fvTop - 8 : xy + 14 + 80 + 18, 'Front view', { fill: C.cat, 'font-size': 14 });
        T(api, g, sx + 50, first ? fvTop - 8 : xy + 14 + 80 + 18, 'Left side view', { fill: C.cat, 'font-size': 14 });
        T(api, g, fx + 50, first ? xy + 14 + 100 + 18 : xy - 14 - 100 - 8, 'Top view', { fill: C.cat, 'font-size': 14 });
        cap.set(first ? 'First angle: object between you and the plane. Top view <b>below</b> the front view, left view on the <b>right</b>; the front of the block faces away from the front view.'
          : 'Third angle: plane between you and the object. Top view <b>above</b> the front view, left view on the <b>left</b>; the front of the block faces the front view.');
      }
      draw();
    }
  });

  // ---------------------------------------------------------------- solid-views
  const rad = (d) => d * Math.PI / 180;
  const sub3 = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const mean = (ps) => ps.reduce((s, p) => s.map((v, i) => v + p[i] / ps.length), [0, 0, 0]);
  function build(V, F) {
    const c = mean(V);
    const N = F.map((f) => { let n = cross(sub3(V[f[1]], V[f[0]]), sub3(V[f[2]], V[f[0]])); if (dot(n, sub3(mean(f.map((i) => V[i])), c)) < 0) n = n.map((v) => -v); return n; });
    const E = new Map();
    F.forEach((f, fi) => f.forEach((a, i) => { const b = f[(i + 1) % f.length], key = Math.min(a, b) + '-' + Math.max(a, b); if (!E.has(key)) E.set(key, { a, b, faces: [] }); E.get(key).faces.push(fi); }));
    return { V, N, E: [...E.values()] };
  }
  function view(S, dir, pj) {
    const segs = S.E.map((e) => ({ p: pj(S.V[e.a]), q: pj(S.V[e.b]), vis: e.faces.some((fi) => dot(S.N[fi], dir) > 1e-9) })).filter((s) => Math.hypot(s.p[0] - s.q[0], s.p[1] - s.q[1]) > 1e-6);
    const vis = segs.filter((s) => s.vis);
    const on = (pt, g) => { const [ax, ay] = g.p, [bx, by] = g.q, l = Math.hypot(bx - ax, by - ay), t = ((pt[0] - ax) * (bx - ax) + (pt[1] - ay) * (by - ay)) / (l * l); return t > -1e-6 && t < 1 + 1e-6 && Math.abs((pt[0] - ax) * (by - ay) - (pt[1] - ay) * (bx - ax)) / l < 1e-6; };
    return segs.filter((g) => g.vis || ![0, 0.25, 0.5, 0.75, 1].every((t) => vis.some((v) => on([g.p[0] + t * (g.q[0] - g.p[0]), g.p[1] + t * (g.q[1] - g.p[1])], v))));
  }
  const SOLIDS = {
    hexpyr: { label: 'Hexagonal pyramid 30, axis 60', n: 6, side: 30, h: 60, pyr: true },
    sqpyr: { label: 'Square pyramid 40, axis 60', n: 4, side: 40, h: 60, pyr: true },
    triprism: { label: 'Triangular prism 40, axis 50', n: 3, side: 40, h: 50, pyr: false },
    sqprism: { label: 'Square prism 35, height 50', n: 4, side: 35, h: 50, pyr: false },
    pentprism: { label: 'Pentagonal prism 30, axis 60', n: 5, side: 30, h: 60, pyr: false }
  };
  function solidAt(def, ang) { // base on the HP, a base edge at ang degrees to the VP, nearest corner 10 mm in front of the VP
    const R = def.side / (2 * Math.sin(Math.PI / def.n));
    // corner angles chosen so edge 0-1 makes 'ang' with the x axis
    const a0 = ang - 90 - 180 / def.n;
    let base = [...Array(def.n).keys()].map((i) => [R * Math.cos(rad(a0 + 360 * i / def.n)), R * Math.sin(rad(a0 + 360 * i / def.n))]);
    const y0 = 10 - Math.min(...base.map((p) => p[1]));
    base = base.map((p) => [p[0], p[1] + y0]);
    const n = def.n, V = base.map((p) => [p[0], p[1], 0]), F = [[...Array(n).keys()]];
    if (def.pyr) { V.push([0, y0, def.h]); for (let i = 0; i < n; i++) F.push([i, (i + 1) % n, n]); }
    else { base.forEach((p) => V.push([p[0], p[1], def.h])); F.push([...Array(n).keys()].map((i) => n + i)); for (let i = 0; i < n; i++) F.push([i, (i + 1) % n, n + (i + 1) % n, n + i]); }
    return build(V, F);
  }
  VIZ.register('solid-views', {
    title: 'Views of a solid standing on the HP', kind: 'Interactive',
    mount(body, api) {
      const C = api.C;
      const st = { id: 'hexpyr', ang: 45 };
      const s = api.stage('0 0 360 340', body, 'Front view above XY and top view below, with hidden edges dashed');
      const g = api.svg('g', null, s);
      const ctl = api.controls();
      api.select({ label: 'Solid', value: st.id, options: Object.keys(SOLIDS).map((k) => ({ value: k, label: SOLIDS[k].label })) }, (v) => { st.id = v; draw(); }, ctl);
      const sl = api.slider({ label: 'Base edge to the VP', min: 0, max: 90, step: 5, value: st.ang, format: (v) => v + '°' }, (v) => { st.ang = v; draw(); }, ctl);
      const ro = api.readouts();
      const rFirst = api.readout('Draw first', ro, 'Top view'), rH = api.readout('Hidden edges in FV', ro), rW = api.readout('FV width', ro);
      api.caption('The top view shows the true shape of the base, so it is drawn first. Corners are projected up to XY; edges behind the solid are dashed.');
      function draw() {
        g.innerHTML = '';
        const def = SOLIDS[st.id], S = solidAt(def, st.ang), k = 2, ox = 180, xy = 150;
        const fv = view(S, [0, 1, 0], (p) => [p[0], p[2]]), tv = view(S, [0, 0, 1], (p) => [p[0], p[1]]);
        line(api, g, 20, xy, 340, xy, { stroke: C.e, 'stroke-width': 1.5 });
        T(api, g, 14, xy + 5, 'X', { fill: C.e, 'font-size': 13 }); T(api, g, 348, xy + 5, 'Y', { fill: C.e, 'font-size': 13 });
        const drawSegs = (segs, to) => segs.slice().sort((a, b) => a.vis - b.vis).forEach((q) => line(api, g, ...to(q.p), ...to(q.q), q.vis ? { 'stroke-width': 2.2 } : { stroke: C.cat, 'stroke-width': 1.3, 'stroke-dasharray': '5 4' }));
        drawSegs(fv, ([x, z]) => [ox + x * k, xy - z * k]);
        drawSegs(tv, ([x, y]) => [ox + x * k, xy + y * k]);
        // projectors from the top view corners
        S.V.filter((p) => p[2] === 0).forEach((p) => line(api, g, ox + p[0] * k, xy + p[1] * k, ox + p[0] * k, xy, { stroke: C.faint, 'stroke-width': 0.8, 'stroke-dasharray': '2 3' }));
        const xs = S.V.map((p) => p[0]);
        rH.set(String(fv.filter((q) => !q.vis).length)); rW.set(nf(Math.max(...xs) - Math.min(...xs), 1) + ' mm');
        sl.set(st.ang);
      }
      draw();
    }
  });
})();
