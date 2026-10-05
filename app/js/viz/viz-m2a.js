/* Module 2 diagrams: cells and semiconductors */
(function () {
  'use strict';
  const MONO = 'JetBrains Mono, ui-monospace, monospace';
  function T(api, p, x, y, s, o) { return api.svg('text', Object.assign({ x, y, 'font-size': 13, fill: api.C.text, 'text-anchor': 'middle', text: s }, o || {}), p); }
  function poly(pts, t) {
    let L = 0; const seg = [];
    for (let i = 1; i < pts.length; i++) { const d = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); seg.push(d); L += d; }
    let d = ((t % 1) + 1) % 1 * L;
    for (let i = 0; i < seg.length; i++) { if (d <= seg[i]) { const f = d / seg[i]; return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * f, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * f]; } d -= seg[i]; }
    return pts[pts.length - 1];
  }

  // ---------------------------------------------------------------- Daniell cell
  VIZ.register('cell-galvanic', {
    title: 'Daniell cell: galvanic vs electrolytic', kind: 'Animation',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 360', body, 'Daniell cell with electron and ion flow');
      const g = api.svg('g', null, s);
      // beakers
      [[70, 'ZnSO₄ (1 M)'], [390, 'CuSO₄ (1 M)']].forEach(([x, lab], i) => {
        api.svg('rect', { x, y: 150, width: 180, height: 150, rx: 6, fill: i ? 'rgba(124,192,255,0.14)' : 'rgba(180,180,190,0.08)', stroke: C.line2, 'stroke-width': 1.5 }, g);
        api.svg('path', { d: `M${x - 6} 130 V300 a6 6 0 0 0 6 6 H${x + 174} a6 6 0 0 0 6 -6 V130`, fill: 'none', stroke: C.metal, 'stroke-width': 2 }, g);
        T(api, g, x + 90, 326, lab, { fill: C.dim });
      });
      // electrodes
      api.svg('rect', { x: 140, y: 90, width: 22, height: 170, rx: 3, fill: '#8f95a0' }, g);
      api.svg('rect', { x: 478, y: 90, width: 22, height: 170, rx: 3, fill: '#c9825a' }, g);
      T(api, g, 120, 84, 'Zn', { fill: C.white, 'font-weight': 600 });
      T(api, g, 520, 84, 'Cu', { fill: C.white, 'font-weight': 600 });
      // salt bridge
      api.svg('path', { d: 'M215 250 V120 Q215 100 235 100 H405 Q425 100 425 120 V250', fill: 'none', stroke: 'rgba(233,196,106,0.35)', 'stroke-width': 26, 'stroke-linecap': 'round' }, g);
      T(api, g, 320, 94, 'salt bridge (KCl in gelatine)', { fill: C.warn, 'font-size': 12 });
      // wire + device
      const wire = [[151, 90], [151, 40], [489, 40], [489, 90]];
      api.svg('polyline', { points: wire.map((p) => p.join(',')).join(' '), fill: 'none', stroke: C.line2, 'stroke-width': 3 }, g);
      const dev = api.svg('g', null, g);
      api.svg('rect', { x: 275, y: 20, width: 90, height: 40, rx: 8, fill: C.surface2, stroke: C.line2 }, dev);
      const devT = T(api, dev, 320, 45, '1.10 V', { fill: C.white, 'font-family': MONO, 'font-size': 14 });
      const labA = T(api, g, 151, 285, '', { 'font-size': 12 }), labC = T(api, g, 489, 285, '', { 'font-size': 12 });
      const signA = T(api, g, 120, 110, '', { 'font-size': 20, 'font-weight': 700 }), signC = T(api, g, 525, 110, '', { 'font-size': 20, 'font-weight': 700 });
      const dirT = T(api, g, 420, 32, '', { fill: C.e, 'font-size': 12 });
      const pl = api.svg('g', null, g);
      const elec = Array.from({ length: 9 }, (_, i) => ({ t: i / 9, n: api.svg('circle', { r: 5, fill: C.e }, pl) }));
      const ions = Array.from({ length: 10 }, (_, i) => ({ side: i % 2, p: Math.random(), y: 170 + Math.random() * 100, n: null }));
      ions.forEach((o) => { o.n = api.svg('g', null, pl); api.svg('circle', { r: 7, fill: o.side ? C.cat : 'rgba(154,160,168,0.9)' }, o.n); T(api, o.n, 0, 4, '2+', { 'font-size': 8, fill: '#151517' }); });
      const bridge = Array.from({ length: 8 }, (_, i) => ({ k: i % 2, t: i / 8, n: api.svg('circle', { r: 5, fill: i % 2 ? C.an : C.cat }, pl) }));
      const bridgePath = [[215, 240], [215, 110], [425, 110], [425, 240]];
      let mode = 'g';
      const cap = api.caption('');
      function paint() {
        const gal = mode === 'g';
        labA.textContent = 'Anode · oxidation'; labC.textContent = 'Cathode · reduction';
        if (!gal) { labA.textContent = 'Cathode · reduction'; labC.textContent = 'Anode · oxidation'; }
        signA.textContent = gal ? '−' : '−'; signC.textContent = gal ? '+' : '+';
        signA.setAttribute('fill', C.e); signC.setAttribute('fill', C.cat);
        devT.textContent = gal ? '1.10 V' : '> 1.10 V';
        dirT.textContent = gal ? 'e⁻  Zn → Cu' : 'e⁻  Cu → Zn';
        cap.set(gal
          ? '<b>Galvanic (ΔG &lt; 0):</b> Zn → Zn²⁺ + 2e⁻ at the anode, Cu²⁺ + 2e⁻ → Cu at the cathode. Electrons run through the wire Zn → Cu; in the bridge K⁺ drifts to the Cu side, Cl⁻ to the Zn side. The voltmeter reads 1.10 V.'
          : '<b>Electrolytic (ΔG &gt; 0):</b> an external supply above 1.10 V forces the reverse: Cu → Cu²⁺ + 2e⁻ (now the anode, oxidation), Zn²⁺ + 2e⁻ → Zn (cathode). Electrons and bridge ions reverse. Oxidation is always at the anode.');
      }
      api.segmented([{ value: 'g', label: 'Galvanic (ΔG &lt; 0)' }, { value: 'e', label: 'Electrolytic (ΔG &gt; 0)' }], mode, (v) => { mode = v; paint(); }, api.controls());
      paint();
      api.loop((dt) => {
        const dir = mode === 'g' ? 1 : -1, sp = api.reduced ? 0 : dt;
        elec.forEach((e) => { e.t = (e.t + dir * sp * 0.12 + 1) % 1; const [x, y] = poly(wire, e.t); e.n.setAttribute('cx', x); e.n.setAttribute('cy', y); e.n.setAttribute('opacity', (y < 45 && x > 268 && x < 372) ? 0 : 1); });
        ions.forEach((o) => {
          o.p = (o.p + sp * 0.25) % 1;
          // side 0: Zn beaker, side 1: Cu beaker. gal: Zn2+ leaves Zn rod (outward); Cu2+ moves to Cu rod (inward)
          const out = (o.side === 0) === (mode === 'g');
          const rod = o.side ? 489 : 151, far = o.side ? 410 : 230;
          const f = out ? o.p : 1 - o.p;
          const x = rod + (far - rod) * f;
          o.n.setAttribute('transform', `translate(${x},${o.y})`);
          o.n.setAttribute('opacity', Math.min(1, Math.sin(o.p * Math.PI) * 2).toFixed(2));
        });
        bridge.forEach((b) => {
          const toCu = (b.k === 0) === (mode === 'g'); // K+ (k=0) to Cu side in galvanic
          b.t = (b.t + sp * 0.08) % 1;
          const [x, y] = poly(bridgePath, toCu ? b.t : 1 - b.t);
          b.n.setAttribute('cx', x); b.n.setAttribute('cy', y);
        });
      });
      const lg = api.readouts();
      api.readout('<span style="color:#7cc0ff">●</span> electron', lg, 'external wire');
      api.readout('<span style="color:#ffb56b">●</span> Cu²⁺ / K⁺', lg, 'cations');
      api.readout('<span style="color:#c7a4ff">●</span> Cl⁻', lg, 'anion in bridge');
    }
  });

  // ---------------------------------------------------------------- Nernst
  VIZ.register('nernst', {
    title: 'Nernst equation calculator', kind: 'Calculator',
    mount(body, api) {
      const C = api.C;
      const P = {
        daniell: { ca: 0.34, an: -0.76, n: 2, a: 1, c: 1, lab: 'Zn | Zn²⁺ ‖ Cu²⁺ | Cu' },
        cdcu: { ca: 0.34, an: -0.40, n: 2, a: 0.01, c: 0.5, lab: 'Cd | Cd²⁺ ‖ Cu²⁺ | Cu' },
      };
      const st = Object.assign({}, P.cdcu);
      const s = api.stage('0 0 640 120', body, 'Cell potential gauge');
      api.svg('rect', { x: 40, y: 50, width: 560, height: 14, rx: 7, fill: C.surface2, stroke: C.line2 }, s);
      const fill = api.svg('rect', { x: 40, y: 50, width: 0, height: 14, rx: 7, fill: C.good }, s);
      for (let v = 0; v <= 2; v += 0.5) { const x = 40 + v / 2 * 560; api.svg('line', { x1: x, x2: x, y1: 68, y2: 76, stroke: C.faint }, s); T(api, s, x, 92, v.toFixed(1) + ' V', { fill: C.dim, 'font-size': 12, 'font-family': MONO }); }
      const needle = api.svg('g', null, s);
      api.svg('path', { d: 'M0 44 l-6 -12 h12 z', fill: C.white }, needle);
      const big = T(api, needle, 0, 24, '', { fill: C.white, 'font-size': 16, 'font-family': MONO, 'font-weight': 600 });
      const cellT = T(api, s, 320, 112, '', { fill: C.dim, 'font-size': 12 });
      const ctl = api.controls();
      api.select({ label: 'Preset', value: 'cdcu', options: [{ value: 'cdcu', label: 'Slide example: Cd / Cu' }, { value: 'daniell', label: 'Daniell: Zn / Cu' }, { value: 'custom', label: 'Custom' }] }, (v) => { if (P[v]) { Object.assign(st, P[v]); sync(); } }, ctl);
      const ctl2 = api.controls();
      const f = {
        ca: api.number({ label: 'E° cathode', value: st.ca, step: 0.01, unit: 'V' }, (v) => { st.ca = v; calc(); }, ctl2),
        an: api.number({ label: 'E° anode', value: st.an, step: 0.01, unit: 'V' }, (v) => { st.an = v; calc(); }, ctl2),
        n: api.number({ label: 'n (electrons)', value: st.n, step: 1, min: 1 }, (v) => { st.n = Math.max(1, v); calc(); }, ctl2),
        a: api.number({ label: '[anode ion]', value: st.a, step: 0.001, min: 0, unit: 'M' }, (v) => { st.a = v; calc(); }, ctl2),
        c: api.number({ label: '[cathode ion]', value: st.c, step: 0.001, min: 0, unit: 'M' }, (v) => { st.c = v; calc(); }, ctl2),
      };
      const ro = api.readouts();
      const r1 = api.readout('E°cell', ro), r2 = api.readout('Q = [anode]/[cathode]', ro), r3 = api.readout('Correction', ro), r4 = api.readout('E<sub>cell</sub>', ro);
      const cap = api.caption('');
      function sync() { f.ca.set(st.ca); f.an.set(st.an); f.n.set(st.n); f.a.set(st.a); f.c.set(st.c); calc(); }
      let shown = 0;
      function calc() {
        const e0 = st.ca - st.an;
        const ok = st.a > 0 && st.c > 0 && st.n > 0;
        const Q = ok ? st.a / st.c : NaN;
        const corr = ok ? -(0.0591 / st.n) * Math.log10(Q) : NaN;
        const E = e0 + corr;
        r1.set(api.fmt(e0, 3) + ' V'); r2.set(ok ? api.sci(Q, 2) : '—'); r3.set(ok ? (corr >= 0 ? '+' : '') + api.fmt(corr, 3) + ' V' : '—'); r4.set(ok ? '<b>' + api.fmt(E, 3) + ' V</b>' : 'needs concentrations &gt; 0');
        cellT.textContent = ok ? `anode ion ${st.a} M  ·  cathode ion ${st.c} M` : '';
        cap.set(ok ? `E<sub>cell</sub> = (${api.fmt(st.ca, 2)} − ${api.fmt(st.an, 2)}) − (0.0591/${st.n}) log(${st.a}/${st.c}) = ${api.fmt(e0, 3)} ${corr >= 0 ? '+' : '−'} ${api.fmt(Math.abs(corr), 3)} = <b>${api.fmt(E, 3)} V</b>. ${E > 0 ? 'Positive, so the cell reaction is feasible as written.' : 'Negative: the reaction runs the other way.'}` : 'Enter positive concentrations.');
        const target = ok ? E : 0;
        const from = shown;
        api.tween(0.5, (k) => { shown = from + (target - from) * k; const x = 40 + api.clamp(shown / 2, 0, 1) * 560; needle.setAttribute('transform', `translate(${x},0)`); fill.setAttribute('width', Math.max(0, x - 40)); fill.setAttribute('fill', shown > 0 ? C.good : C.bad); big.textContent = api.fmt(shown, 2) + ' V'; });
      }
      calc();
    }
  });

  // ---------------------------------------------------------------- bands
  VIZ.register('bands', {
    title: 'Band gaps and temperature', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 330', body, 'Band diagrams for conductor, semiconductor and insulator');
      const kB = 8.617e-5;
      const cols = [
        { name: 'Conductor (metal)', x: 20, gap: -0.4 },
        { name: 'Semiconductor (Si)', x: 230, gap: 1.1 },
        { name: 'Insulator', x: 440, gap: 6 },
      ];
      cols.forEach((c) => {
        const g = api.svg('g', { transform: `translate(${c.x},0)` }, s); c.g = g;
        T(api, g, 90, 22, c.name, { fill: C.white, 'font-weight': 600 });
        const gapPx = c.gap < 0 ? -30 : c.gap < 2 ? 50 : 110;
        const vbTop = 200, cbBot = vbTop - gapPx;
        c.cb = { y: Math.min(cbBot - 60, 40), h: 60 }; c.cb.y = cbBot - 60; c.vb = { y: vbTop, h: 60 };
        api.svg('rect', { x: 20, y: c.cb.y, width: 140, height: 60, rx: 6, fill: 'rgba(124,192,255,0.08)', stroke: C.line2 }, g);
        api.svg('rect', { x: 20, y: c.vb.y, width: 140, height: 60, rx: 6, fill: 'rgba(124,192,255,0.28)', stroke: C.line2 }, g);
        T(api, g, 90, c.cb.y + 14, 'conduction band', { 'font-size': 11, fill: C.dim });
        T(api, g, 90, c.vb.y + 52, 'valence band', { 'font-size': 11, fill: C.dim });
        if (c.gap > 0) {
          api.svg('line', { x1: 30, x2: 30, y1: c.cb.y + 60, y2: c.vb.y, stroke: C.faint, 'stroke-dasharray': '3 3' }, g);
          T(api, g, 90, (c.cb.y + 60 + c.vb.y) / 2 + 5, 'gap ' + c.gap + ' eV', { 'font-size': 13, fill: C.warn, 'font-family': MONO });
        } else T(api, g, 90, 205, 'bands overlap', { 'font-size': 12, fill: C.warn });
        c.dots = [];
        for (let i = 0; i < 16; i++) {
          const e = api.svg('circle', { r: 4, fill: C.e, opacity: 0 }, g);
          const h = api.svg('circle', { r: 4, fill: 'none', stroke: C.hole, 'stroke-width': 1.6, opacity: 0 }, g);
          c.dots.push({ e, h, x: 30 + Math.random() * 120, ph: Math.random() * 6 });
        }
        api.svg('rect', { x: 20, y: 284, width: 140, height: 10, rx: 5, fill: C.surface2 }, g);
        c.bar = api.svg('rect', { x: 20, y: 284, width: 0, height: 10, rx: 5, fill: C.good }, g);
        T(api, g, 90, 314, 'conductivity', { 'font-size': 11, fill: C.dim });
      });
      let Tk = 300;
      api.slider({ label: 'Temperature', min: 0, max: 600, step: 10, value: 300, format: (v) => v + ' K' }, (v) => { Tk = v; paint(); }, api.controls());
      const cap = api.caption('');
      function count(c) {
        if (c.gap < 0) return 12;
        if (Tk <= 0 || c.gap > 3) return 0;
        const n = Math.pow(Tk, 1.5) * Math.exp(-c.gap / (2 * kB * Tk));
        const nmax = Math.pow(600, 1.5) * Math.exp(-1.1 / (2 * kB * 600));
        const nmin = Math.pow(150, 1.5) * Math.exp(-1.1 / (2 * kB * 150));
        return Math.round(api.clamp((Math.log(n) - Math.log(nmin)) / (Math.log(nmax) - Math.log(nmin)), 0, 1) * 14);
      }
      function paint() {
        cols.forEach((c) => {
          const k = count(c); c.k = k;
          let w;
          if (c.gap < 0) w = 140 * api.clamp(1 - Tk / 1500, 0.5, 1);
          else w = 140 * k / 14;
          c.bar.setAttribute('width', w.toFixed(1));
        });
        cap.set(Tk === 0 ? '<b>0 K:</b> every electron is frozen in the valence band, so the semiconductor behaves as an insulator.'
          : `At <b>${Tk} K</b> heat lifts electrons across the ~1 eV gap in silicon, leaving holes behind, so its conductivity <b>rises</b> with temperature. The metal already has free electrons; heating only scatters them more, so its conductivity dips slightly. The insulator's gap is too wide.`);
      }
      paint();
      api.loop((dt, t) => {
        cols.forEach((c) => {
          c.dots.forEach((d, i) => {
            const on = i < c.k;
            const jig = api.reduced ? 0 : Math.sin(t * 2 + d.ph) * 6;
            if (c.gap < 0) { d.e.setAttribute('cx', d.x + jig); d.e.setAttribute('cy', 175 + (i % 4) * 7); d.e.setAttribute('opacity', on ? 1 : 0); d.h.setAttribute('opacity', 0); return; }
            d.e.setAttribute('cx', d.x + jig); d.e.setAttribute('cy', c.cb.y + 28 + (i % 3) * 9); d.e.setAttribute('opacity', on ? 1 : 0);
            d.h.setAttribute('cx', d.x - jig * 0.6); d.h.setAttribute('cy', c.vb.y + 18 + (i % 3) * 9); d.h.setAttribute('opacity', on ? 1 : 0);
          });
        });
      });
    }
  });

  // ---------------------------------------------------------------- doping
  VIZ.register('doping', {
    title: 'Doping silicon: intrinsic, n-type, p-type', kind: 'Animation',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 330', body, 'Silicon lattice with dopant');
      const cols = 7, rows = 4, dx = 80, dy = 72, ox = 80, oy = 50;
      const at = (i, j) => [ox + i * dx, oy + j * dy];
      const lat = api.svg('g', null, s);
      for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
        const [x, y] = at(i, j);
        if (i < cols - 1) { api.svg('line', { x1: x + 16, x2: x + dx - 16, y1: y - 3, y2: y - 3, stroke: C.line2, 'stroke-width': 1.5 }, lat); api.svg('line', { x1: x + 16, x2: x + dx - 16, y1: y + 3, y2: y + 3, stroke: C.line2, 'stroke-width': 1.5 }, lat); }
        if (j < rows - 1) { api.svg('line', { x1: x - 3, x2: x - 3, y1: y + 16, y2: y + dy - 16, stroke: C.line2, 'stroke-width': 1.5 }, lat); api.svg('line', { x1: x + 3, x2: x + 3, y1: y + 16, y2: y + dy - 16, stroke: C.line2, 'stroke-width': 1.5 }, lat); }
      }
      const atoms = [];
      for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
        const [x, y] = at(i, j);
        const g = api.svg('g', { transform: `translate(${x},${y})` }, s);
        const c = api.svg('circle', { r: 15, fill: C.surface2, stroke: C.metal, 'stroke-width': 1.5 }, g);
        const t = T(api, g, 0, 4, 'Si', { 'font-size': 12, fill: C.text });
        atoms.push({ i, j, c, t });
      }
      const dop = atoms.find((a) => a.i === 3 && a.j === 1);
      const e = api.svg('circle', { r: 5, fill: C.e }, s);
      const h = api.svg('circle', { r: 6, fill: 'none', stroke: C.hole, 'stroke-width': 2 }, s);
      const pairE = api.svg('circle', { r: 5, fill: C.e, opacity: 0 }, s), pairH = api.svg('circle', { r: 6, fill: 'none', stroke: C.hole, 'stroke-width': 2, opacity: 0 }, s);
      let mode = 'n', field = false;
      const ctl = api.controls();
      api.segmented([{ value: 'i', label: 'Intrinsic' }, { value: 'n', label: 'n-type (P)' }, { value: 'p', label: 'p-type (B)' }], mode, (v) => { mode = v; reset(); paint(); }, ctl);
      const fb = api.button('Apply field →', () => { field = !field; fb.classList.toggle('on', field); paint(); }, ctl);
      const ro = api.readouts();
      const rMaj = api.readout('Majority carrier', ro), rDop = api.readout('Dopant', ro), rRel = api.readout('Carriers', ro);
      const cap = api.caption('');
      const pe = { x: 0, y: 0, vx: 0, vy: 0 }, ph = { x: 0, y: 0, cool: 0 };
      function reset() { const [x, y] = at(3, 1); pe.x = x + 24; pe.y = y - 22; ph.x = x + dx / 2; ph.y = y - 3; }
      function paint() {
        dop.c.setAttribute('fill', mode === 'n' ? 'rgba(124,192,255,0.25)' : mode === 'p' ? 'rgba(255,141,161,0.22)' : C.surface2);
        dop.c.setAttribute('stroke', mode === 'n' ? C.e : mode === 'p' ? C.hole : C.metal);
        dop.t.textContent = mode === 'n' ? 'P' : mode === 'p' ? 'B' : 'Si';
        e.setAttribute('opacity', mode === 'n' ? 1 : 0); h.setAttribute('opacity', mode === 'p' ? 1 : 0);
        rMaj.set(mode === 'n' ? 'electrons (n<sub>e</sub> ≫ n<sub>h</sub>)' : mode === 'p' ? 'holes (n<sub>h</sub> ≫ n<sub>e</sub>)' : 'none: n<sub>e</sub> = n<sub>h</sub>');
        rDop.set(mode === 'n' ? 'pentavalent: P, As, Sb' : mode === 'p' ? 'trivalent: B, Al, In' : 'none (pure Si)');
        rRel.set(field ? (mode === 'p' ? 'holes drift with the field →' : 'electrons drift against the field ←') : 'random thermal motion');
        cap.set(mode === 'n' ? 'Phosphorus has <b>5 valence electrons</b>. Four go into bonds; the <b>fifth is free</b> to wander, so electrons carry the current.'
          : mode === 'p' ? 'Boron has only <b>3 valence electrons</b>, so one bond is short an electron: a <b>hole</b>. A neighbouring electron hops in, and the hole moves.'
            : 'Pure silicon: every electron is locked in a bond. Heat occasionally frees one, leaving a hole, so electrons and holes are always <b>equal in number</b> and conductivity is poor.');
      }
      reset(); paint();
      let pairT = 0;
      api.loop((dt) => {
        if (api.reduced) dt = 0;
        const minX = ox - 30, maxX = ox + (cols - 1) * dx + 30, minY = oy - 30, maxY = oy + (rows - 1) * dy + 30;
        if (mode === 'n') {
          pe.vx += (Math.random() - 0.5) * 900 * dt + (field ? -60 * dt : 0); pe.vy += (Math.random() - 0.5) * 900 * dt;
          pe.vx *= 0.94; pe.vy *= 0.94;
          pe.x += pe.vx * dt * 3; pe.y += pe.vy * dt * 3;
          if (pe.x < minX) pe.x = maxX; if (pe.x > maxX) pe.x = minX; pe.y = api.clamp(pe.y, minY, maxY);
          e.setAttribute('cx', pe.x); e.setAttribute('cy', pe.y);
        } else if (mode === 'p') {
          ph.cool -= dt;
          if (ph.cool <= 0) {
            ph.cool = 0.45;
            const horiz = Math.random() < 0.6;
            let step = (Math.random() < (field ? 0.8 : 0.5) ? 1 : -1);
            if (horiz) { ph.x += step * dx; if (ph.x > maxX - 30) ph.x = ox + dx / 2; if (ph.x < ox) ph.x = ox + (cols - 1.5) * dx; }
            else { ph.y = api.clamp(ph.y + (Math.random() < 0.5 ? dy : -dy), oy - 3, oy + (rows - 1) * dy - 3); }
          }
          h.setAttribute('cx', ph.x); h.setAttribute('cy', ph.y);
        } else {
          pairT += dt;
          const k = (pairT % 3) / 3;
          const [x, y] = at(1 + Math.floor(pairT / 3) % 5, 2);
          pairE.setAttribute('opacity', mode === 'i' ? Math.sin(k * Math.PI) : 0); pairH.setAttribute('opacity', mode === 'i' ? Math.sin(k * Math.PI) : 0);
          pairE.setAttribute('cx', x + dx / 2 - (field ? 40 * k : 0)); pairE.setAttribute('cy', y - 3 - 26 * k);
          pairH.setAttribute('cx', x + dx / 2 + (field ? 40 * k : 0)); pairH.setAttribute('cy', y - 3);
        }
        if (mode !== 'i') { pairE.setAttribute('opacity', 0); pairH.setAttribute('opacity', 0); }
      });
    }
  });

  // ---------------------------------------------------------------- zone refining
  VIZ.register('zone-refining', {
    title: 'Zone refining', kind: 'Animation',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 260', body, 'Molten zone sweeping impurities along a rod');
      const X0 = 50, X1 = 590, Y = 110, H = 50, ZW = 56;
      api.svg('rect', { x: X0, y: Y, width: X1 - X0, height: H, rx: 8, fill: '#3b3f47', stroke: C.metal, 'stroke-width': 1.5 }, s);
      const pure = api.svg('rect', { x: X0, y: Y, width: 0, height: H, rx: 8, fill: 'rgba(134,212,169,0.12)' }, s);
      const zone = api.svg('rect', { x: 0, y: Y, width: ZW, height: H, fill: 'rgba(255,123,92,0.45)' }, s);
      const heater = api.svg('g', null, s);
      api.svg('rect', { x: -ZW / 2 - 4, y: Y - 16, width: ZW + 8, height: 10, rx: 4, fill: C.heat }, heater);
      api.svg('rect', { x: -ZW / 2 - 4, y: Y + H + 6, width: ZW + 8, height: 10, rx: 4, fill: C.heat }, heater);
      T(api, heater, 0, Y - 24, 'heater', { fill: C.heat, 'font-size': 12 });
      T(api, s, X0, 200, 'start', { fill: C.dim, 'text-anchor': 'start', 'font-size': 12 });
      T(api, s, X1, 200, 'impurities collect here', { fill: C.warn, 'text-anchor': 'end', 'font-size': 12 });
      T(api, s, 320, 60, 'impurities prefer the melt, so the moving molten zone carries them along', { fill: C.dim, 'font-size': 12 });
      const N = 60;
      const imp = Array.from({ length: N }, () => ({ x: X0 + 10 + Math.random() * (X1 - X0 - 20), y: Y + 8 + Math.random() * (H - 16), n: api.svg('circle', { r: 3, fill: C.warn }, s) }));
      let zx = X0 - ZW, passes = 0, running = !api.reduced, speed = 90;
      const ctl = api.controls();
      const pb = api.button('Pause', () => { running = !running; pb.textContent = running ? 'Pause' : 'Play'; }, ctl);
      if (!running) pb.textContent = 'Play';
      api.button('Reset rod', () => { imp.forEach((p) => { p.x = X0 + 10 + Math.random() * (X1 - X0 - 20); }); passes = 0; zx = X0 - ZW; }, ctl);
      api.slider({ label: 'Heater speed', min: 40, max: 200, step: 10, value: speed, format: (v) => v + ' px/s' }, (v) => { speed = v; }, ctl);
      const ro = api.readouts();
      const rP = api.readout('Passes', ro), rQ = api.readout('Impurities left in first 80%', ro), rS = api.readout('Crystal behind the zone', ro, 'pure, polycrystalline');
      function step1() {
        imp.forEach((p) => {
          const left = zx - ZW / 2, right = zx + ZW / 2;
          if (p.x >= left && p.x <= right && !p.skip) {
            if (p.x < left + 3) { if (Math.random() < 0.9) p.x = left + 3; else p.skip = true; }
          }
          if (p.x > X1 - 8) p.x = X1 - 8 - Math.random() * 10;
          p.n.setAttribute('cx', p.x.toFixed(1)); p.n.setAttribute('cy', p.y.toFixed(1));
        });
      }
      function stats() {
        const bad = imp.filter((p) => p.x < X0 + 0.8 * (X1 - X0)).length;
        rP.set(String(passes)); rQ.set(`${bad} of ${N}`);
      }
      step1(); stats();
      api.loop((dt) => {
        if (!running) return;
        zx += speed * dt;
        if (zx > X1 + ZW) { zx = X0 - ZW; passes++; imp.forEach((p) => { p.skip = false; }); }
        const zl = Math.max(X0, zx - ZW / 2), zr = Math.min(X1, zx + ZW / 2);
        zone.setAttribute('x', zl); zone.setAttribute('width', Math.max(0, zr - zl));
        pure.setAttribute('width', api.clamp(zx - ZW / 2 - X0, 0, X1 - X0));
        heater.setAttribute('transform', `translate(${zx},0)`);
        step1(); stats();
      });
    }
  });

  // ---------------------------------------------------------------- Czochralski
  VIZ.register('czochralski', {
    title: 'Czochralski crystal pulling', kind: 'Animation',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 380', body, 'Seed crystal pulled from molten silicon');
      const cx = 320, melt = 290;
      // furnace
      api.svg('path', { d: `M200 ${melt - 30} V345 Q200 362 218 362 H422 Q440 362 440 345 V${melt - 30}`, fill: 'none', stroke: C.metal, 'stroke-width': 3 }, s);
      api.svg('rect', { x: 203, y: melt, width: 234, height: 60, fill: 'rgba(255,123,92,0.35)' }, s);
      api.svg('line', { x1: 203, x2: 437, y1: melt, y2: melt, stroke: C.heat, 'stroke-width': 1.5 }, s);
      const coils = [];
      for (let i = 0; i < 5; i++) { coils.push(api.svg('rect', { x: 180, y: melt - 20 + i * 18, width: 10, height: 10, rx: 3, fill: C.heat }, s)); coils.push(api.svg('rect', { x: 450, y: melt - 20 + i * 18, width: 10, height: 10, rx: 3, fill: C.heat }, s)); }
      T(api, s, 320, 350, 'molten Si (melt)', { fill: C.white, 'font-size': 12 });
      T(api, s, 150, melt + 20, 'heater', { fill: C.heat, 'font-size': 12 });
      T(api, s, 500, melt + 40, 'crucible', { fill: C.dim, 'font-size': 12 });
      const rod = api.svg('rect', { x: cx - 3, y: 0, width: 6, height: 10, fill: C.metal }, s);
      const clip = api.uid('cz');
      const defs = api.svg('defs', null, s);
      const cp = api.svg('clipPath', { id: clip }, defs);
      const ingotClip = api.svg('path', { d: '' }, cp);
      const ingot = api.svg('g', { 'clip-path': `url(#${clip})` }, s);
      api.svg('rect', { x: 200, y: 0, width: 240, height: 380, fill: '#6c7482' }, ingot);
      const stripes = [];
      for (let i = 0; i < 8; i++) stripes.push(api.svg('rect', { x: 0, y: 0, width: 6, height: 380, fill: 'rgba(255,255,255,0.14)' }, ingot));
      const outline = api.svg('path', { d: '', fill: 'none', stroke: '#b9c0cc', 'stroke-width': 1.5 }, s);
      const seedL = T(api, s, 0, 0, 'seed', { fill: C.e, 'font-size': 12, 'text-anchor': 'start' });
      const pullL = T(api, s, 400, 40, '↑ pull + ↻ rotate', { fill: C.white, 'font-size': 13 });
      const crL = T(api, s, 480, 150, '', { fill: C.good, 'font-size': 12, 'text-anchor': 'start' });
      let t = 0, speed = 1;
      const ctl = api.controls();
      api.button('Restart', () => { t = 0; }, ctl, { primary: true });
      api.slider({ label: 'Pull speed', min: 0.3, max: 2.5, step: 0.1, value: 1, format: (v) => v.toFixed(1) + '×' }, (v) => { speed = v; }, ctl);
      const cap = api.caption('');
      function profile(L) { // radius at distance d from seed along ingot of length L
        return (d) => { if (d < 14) return 5; if (d < 40) return 5 + (d - 14) / 26 * 55; return 60; };
      }
      function draw() {
        const dipEnd = 1.5;
        let seedY, L;
        if (t < dipEnd) { seedY = 40 + (melt - 40 - 12) * (t / dipEnd); L = 12; }
        else { L = 12 + (t - dipEnd) * 22; if (L > melt - 60) { L = melt - 60; } seedY = melt - L; }
        const r = profile(L);
        const pts = [];
        const steps = 30;
        for (let k = 0; k <= steps; k++) { const d = L * k / steps; pts.push([cx + r(d), seedY + d]); }
        const left = pts.map(([x, y]) => [2 * cx - x, y]).reverse();
        const d = 'M' + pts.concat(left).map((p) => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' L') + ' Z';
        ingotClip.setAttribute('d', d); outline.setAttribute('d', d);
        rod.setAttribute('height', Math.max(0, seedY));
        seedL.setAttribute('x', cx + 12); seedL.setAttribute('y', seedY + 10);
        const phase = (t * 40 * speed) % 30;
        stripes.forEach((st, i) => st.setAttribute('x', cx - 70 + i * 20 + phase));
        crL.textContent = L > 60 ? 'single crystal (boule)' : '';
        crL.setAttribute('y', seedY + Math.min(L, 120) * 0.6);
        cap.set(t < dipEnd ? 'A small <b>single-crystal seed</b> is lowered into the melt.'
          : L < melt - 60 ? 'The seed is <b>pulled up slowly while rotating</b>. Atoms freezing onto it copy its arrangement, so one large <b>single crystal</b> grows: first a thin neck, then the full diameter.'
            : 'Finished ingot. Industrial Cz silicon reaches <b>300 mm</b> across and over <b>250 kg</b>. Zone-refined Si was polycrystalline; this is one crystal.');
        coils.forEach((c, i) => c.setAttribute('opacity', (0.6 + 0.4 * Math.sin(t * 3 + i)).toFixed(2)));
      }
      draw();
      api.loop((dt) => { if (api.reduced) { t = 20; draw(); return; } t += dt * speed; if (t > 18) t = 18; draw(); });
    }
  });
})();
