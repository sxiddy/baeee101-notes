/* Module 4 widgets: rolling draft and length, degrees of freedom of a planar mechanism (Pro).
 * Presets use the course examples; numbers match tools/check-m4.js. */
(function () {
  'use strict';
  const MONO = 'JetBrains Mono, ui-monospace, monospace';
  const r1 = (v) => Math.round(v * 10) / 10;
  const nf = (v, d) => {
    if (!isFinite(v)) return '—';
    let s = Number(v).toFixed(d == null ? 3 : d);
    if (s.indexOf('.') >= 0) s = s.replace(/0+$/, '').replace(/\.$/, '');
    if (/^-0$/.test(s)) s = '0';
    return s.replace('-', '−');
  };
  function T(api, p, x, y, s, o) {
    return api.svg('text', Object.assign({ x: r1(x), y: r1(y), 'font-size': 15, fill: api.C.text, 'text-anchor': 'middle', text: s }, o || {}), p);
  }
  function workBox(api, parent) {
    api.css('m4-work', ['.m4-work{overflow-x:auto;font-family:' + MONO + ';font-size:13px;line-height:1.6;color:#b3b3bb}', '.m4-work .hd{display:block;margin:8px 0 2px;color:#f4f4f6;font-weight:600;font-family:inherit}', '.m4-work .ln{display:block}'].join(''));
    return api.el('div', { class: 'm4-work' }, parent);
  }

  // ---------------------------------------------------------------- rolling
  VIZ.register('rolling-draft', {
    title: 'Rolling: draft and new length', kind: 'Interactive',
    mount(body, api) {
      const C = api.C;
      const st = { t0: 20, t1: 17, L0: 1 };
      const s = api.stage('0 0 480 220', body, 'A strip before and after the rolls, thinner and longer');
      const g = api.svg('g', null, s);
      const ctl = api.controls();
      const sB = api.slider({ label: 'Final thickness t<sub>1</sub>', min: 1, max: 49, step: 1, value: st.t1, format: (v) => v + ' mm' }, (v) => { st.t1 = v; draw(); }, ctl);
      api.slider({ label: 'Initial thickness t<sub>0</sub>', min: 2, max: 50, step: 1, value: st.t0, format: (v) => v + ' mm' }, (v) => { st.t0 = v; if (st.t1 >= v) { st.t1 = v - 1; sB.set(v - 1); } draw(); }, ctl);
      api.slider({ label: 'Initial length L<sub>0</sub>', min: 0.5, max: 5, step: 0.5, value: st.L0, format: (v) => nf(v, 1) + ' m' }, (v) => { st.L0 = v; draw(); }, ctl);
      const ro = api.readouts();
      const rd = api.readout('Draft', ro), rl = api.readout('New length', ro), rp = api.readout('Reduction', ro);
      const work = workBox(api, body);
      function draw() {
        g.innerHTML = '';
        if (st.t1 >= st.t0) st.t1 = st.t0 - 1;
        const t0 = st.t0, t1 = st.t1, L1 = st.L0 * t0 / t1;
        const h0 = 4 + t0 * 1.4, h1 = 4 + t1 * 1.4;
        const w0 = 120, w1 = Math.min(250, 120 * L1 / st.L0);
        const x0 = 20, x1 = 200;
        api.svg('rect', { x: x0, y: 110 - h0 / 2, width: w0, height: h0, rx: 3, fill: C.heat }, g);
        api.svg('rect', { x: 440 - w1, y: 110 - h1 / 2, width: w1, height: h1, rx: 3, fill: C.heat }, g);
        api.svg('circle', { cx: 190, cy: 52, r: 30, fill: 'none', stroke: C.cat, 'stroke-width': 3 }, g);
        api.svg('circle', { cx: 190, cy: 168, r: 30, fill: 'none', stroke: C.cat, 'stroke-width': 3 }, g);
        T(api, g, x0 + w0 / 2, 36, 'Before', { fill: C.dim });
        T(api, g, 440 - w1 / 2, 36, 'After', { fill: C.dim });
        T(api, g, x0 + w0 / 2, 205, 't₀ = ' + t0 + ' mm', { fill: C.white, 'font-family': MONO });
        T(api, g, 380, 205, 't₁ = ' + t1 + ' mm', { fill: C.white, 'font-family': MONO });
        rd.set(nf(t0 - t1, 1) + ' mm'); rl.set(nf(L1, 2) + ' m'); rp.set(nf((t0 - t1) / t0 * 100, 1) + ' %');
        work.innerHTML = '<span class="hd">Working (width unchanged)</span><span class="ln">Draft = t₀ − t₁ = ' + t0 + ' − ' + t1 + ' = ' + (t0 - t1) + ' mm</span><span class="ln">Volume constant: t₀L₀ = t₁L₁</span><span class="ln">L₁ = ' + t0 + ' × ' + nf(st.L0, 1) + ' / ' + t1 + ' = ' + nf(L1, 2) + ' m</span><span class="ln">Course example: 20 mm to 17 mm gives a draft of 3 mm</span>';
      }
      draw();
    }
  });

  // ---------------------------------------------------------------- degrees of freedom
  VIZ.register('mech-dof', {
    title: 'Degrees of freedom of a planar mechanism', kind: 'Interactive',
    mount(body, api) {
      const C = api.C;
      const st = { N: 4, P1: 4, P2: 0 };
      const s = api.stage('0 0 480 170', body, 'The degrees of freedom F and what it means');
      const g = api.svg('g', null, s);
      const ctl = api.controls();
      api.slider({ label: 'Links N (including the fixed link)', min: 2, max: 10, step: 1, value: st.N, format: (v) => String(v) }, (v) => { st.N = v; draw(); }, ctl);
      api.slider({ label: 'One-DoF pairs P<sub>1</sub>', min: 0, max: 12, step: 1, value: st.P1, format: (v) => String(v) }, (v) => { st.P1 = v; draw(); }, ctl);
      api.slider({ label: 'Two-DoF pairs P<sub>2</sub>', min: 0, max: 4, step: 1, value: st.P2, format: (v) => String(v) }, (v) => { st.P2 = v; draw(); }, ctl);
      const ro = api.readouts();
      const rf = api.readout('F', ro), rm = api.readout('Meaning', ro);
      const work = workBox(api, body);
      function draw() {
        g.innerHTML = '';
        const F = 3 * (st.N - 1) - 2 * st.P1 - st.P2;
        const meaning = F > 0 ? 'Mechanism: ' + F + ' input' + (F > 1 ? 's' : '') + ' needed' : F === 0 ? 'Structure: no motion' : 'Over-constrained';
        const col = F > 0 ? C.good : F === 0 ? C.heat : C.e;
        T(api, g, 240, 100, 'F = ' + F, { fill: col, 'font-size': 56, 'font-family': MONO });
        T(api, g, 240, 145, meaning, { fill: C.dim });
        T(api, g, 240, 28, 'F = 3(N − 1) − 2P₁ − P₂', { fill: C.white, 'font-family': MONO });
        rf.set(String(F)); rm.set(meaning);
        work.innerHTML = '<span class="hd">Working</span><span class="ln">F = 3(' + st.N + ' − 1) − 2(' + st.P1 + ') − ' + st.P2 + '</span><span class="ln">F = ' + (3 * (st.N - 1)) + ' − ' + (2 * st.P1) + ' − ' + st.P2 + ' = ' + F + '</span><span class="ln">Course example: slider crank N = 4, P₁ = 4 gives F = 1</span>';
      }
      draw();
    }
  });
})();
