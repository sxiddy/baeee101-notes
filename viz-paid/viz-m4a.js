/* Module 4 diagrams: EMR and UV-Vis */
(function () {
  'use strict';
  const MONO = 'JetBrains Mono, ui-monospace, monospace';
  const c0 = 2.998e8, h = 6.626e-34, eV = 1.602e-19;
  function T(api, p, x, y, s, o) { return api.svg('text', Object.assign({ x, y, 'font-size': 13, fill: api.C.text, 'text-anchor': 'middle', text: s }, o || {}), p); }
  const REG = [
    { n: 'Radio', lo: 0.1, hi: 100, fx: 'nuclear spin flips', tech: 'NMR' },
    { n: 'Microwave', lo: 1e-3, hi: 0.1, fx: 'rotation, electron spin', tech: 'ESR / microwave' },
    { n: 'Infrared', lo: 7e-7, hi: 1e-3, fx: 'molecular vibration', tech: 'IR spectroscopy' },
    { n: 'Visible', lo: 4e-7, hi: 7e-7, fx: 'valence electron transitions', tech: 'UV-Vis' },
    { n: 'Ultraviolet', lo: 1e-8, hi: 4e-7, fx: 'valence electron transitions', tech: 'UV-Vis' },
    { n: 'X-ray', lo: 1e-11, hi: 1e-8, fx: 'inner-shell electrons, diffraction by lattice', tech: 'XRD, X-ray spectroscopy' },
    { n: 'Gamma', lo: 1e-14, hi: 1e-11, fx: 'nuclear transitions', tech: 'gamma / Mössbauer' },
  ];
  const regionOf = (lam) => REG.find((r) => lam >= r.lo && lam < r.hi) || (lam >= 100 ? REG[0] : REG[6]);
  function lenStr(m) { if (m >= 1) return m.toPrecision(3) + ' m'; if (m >= 1e-3) return (m * 1e3).toPrecision(3) + ' mm'; if (m >= 1e-6) return (m * 1e6).toPrecision(3) + ' µm'; if (m >= 1e-9) return (m * 1e9).toPrecision(3) + ' nm'; return (m * 1e10).toPrecision(3) + ' Å'; }

  // ---------------------------------------------------------------- EM spectrum
  VIZ.register('em-spectrum', {
    title: 'The electromagnetic spectrum', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 250', body, 'Electromagnetic spectrum from radio to gamma');
      const lo = 1, hi = -12, X0 = 30, X1 = 610, Y = 150;
      const X = (lg) => X0 + (lo - lg) / (lo - hi) * (X1 - X0);
      REG.forEach((r, i) => {
        const a = X(Math.log10(Math.min(r.hi, 10))), b = X(Math.log10(Math.max(r.lo, 1e-12)));
        const fill = r.n === 'Visible' ? null : ['#2b3140', '#2e3445', '#3a2f2f', '', '#352a45', '#2c3a3a', '#3a3030'][i];
        const rect = api.svg('rect', { x: a, y: Y - 24, width: Math.max(2, b - a), height: 48, fill: fill || '#fff' }, s);
        if (r.n === 'Visible') { const gid = api.uid('vis'); const d = api.svg('defs', null, s); const lg = api.svg('linearGradient', { id: gid }, d); [700, 620, 580, 530, 470, 400].forEach((w, k) => api.svg('stop', { offset: k / 5, 'stop-color': api.wavelengthToColor(w) }, lg)); rect.setAttribute('fill', `url(#${gid})`); }
        if (r.n !== 'Visible') T(api, s, (a + b) / 2, Y + 5, r.n, { 'font-size': 12, fill: C.white });
      });
      T(api, s, X(Math.log10(5.5e-7)), Y - 32, 'visible', { 'font-size': 11, fill: C.dim });
      T(api, s, X0, Y + 44, '← long λ, low ν, low E', { 'text-anchor': 'start', 'font-size': 12, fill: C.dim });
      T(api, s, X1, Y + 44, 'short λ, high ν, high E →', { 'text-anchor': 'end', 'font-size': 12, fill: C.dim });
      const wave = api.svg('path', { fill: 'none', stroke: C.photon, 'stroke-width': 2 }, s);
      const mk = api.svg('g', null, s);
      api.svg('line', { y1: Y - 30, y2: Y + 30, stroke: C.white, 'stroke-width': 2 }, mk);
      api.svg('path', { d: `M0 ${Y - 30} l-7 -10 h14 z`, fill: C.white }, mk);
      let lg = Math.log10(5e-8);
      api.slider({ label: 'Wavelength', min: hi, max: lo, step: 0.01, value: lg, format: (v) => lenStr(Math.pow(10, v)) }, (v) => { lg = v; paint(); }, api.controls());
      const ro = api.readouts();
      const r = ['Region', 'Frequency ν = c/λ', 'Energy E = hν', 'Per mole', 'Effect on molecules', 'Technique'].map((l) => api.readout(l, ro));
      function paint() {
        const lam = Math.pow(10, lg), nu = c0 / lam, E = h * nu, e = E / eV;
        mk.setAttribute('transform', `translate(${X(lg)},0)`);
        const rg = regionOf(lam);
        r[0].set(rg.n); r[1].set(api.sci(nu, 2) + ' Hz'); r[2].set(api.sci(e, 2) + ' eV'); r[3].set(api.sci(e * 96.48, 2) + ' kJ/mol'); r[4].set(rg.fx); r[5].set(rg.tech);
        const px = 8 + (lg - hi) / (lo - hi) * 70;
        let d = 'M30 60'; for (let x = 30; x <= 610; x += 2) d += ` L${x} ${60 + Math.sin((x - 30) / px * Math.PI * 2) * 18}`;
        wave.setAttribute('d', d);
        wave.setAttribute('stroke', rg.n === 'Visible' ? api.wavelengthToColor(lam * 1e9) : C.photon);
      }
      paint();
    }
  });

  // ---------------------------------------------------------------- wave calc
  VIZ.register('wave-calc', {
    title: 'λν = c and E = hν calculator', kind: 'Calculator',
    mount(body, api) {
      let mode = 'lam', val = 5.0e-8, unit = 'm';
      const U = { m: 1, nm: 1e-9, 'Å': 1e-10 };
      const ctl = api.controls();
      api.segmented([{ value: 'lam', label: 'I know λ' }, { value: 'nu', label: 'I know ν' }], mode, (v) => { mode = v; inp.set(mode === 'lam' ? 5e-8 : 2.8e20); val = parseFloat(inp.input.value); unitSel.el.style.display = mode === 'lam' ? '' : 'none'; calc(); }, ctl);
      const ctl2 = api.controls();
      const inp = api.number({ label: 'Value', value: val, step: 'any' }, (v) => { val = v; calc(); }, ctl2);
      const unitSel = api.select({ label: 'Unit', value: 'm', options: [{ value: 'm', label: 'm' }, { value: 'nm', label: 'nm' }, { value: 'Å', label: 'Å' }] }, (v) => { unit = v; calc(); }, ctl2);
      const ctl3 = api.controls();
      api.button('Slide Q1: λ = 5.00 × 10⁻⁸ m', () => { mode = 'lam'; unit = 'm'; unitSel.set('m'); inp.set(5e-8); val = 5e-8; calc(); }, ctl3);
      api.button('Slide Q2: ν = 2.80 × 10²⁰ s⁻¹', () => { mode = 'nu'; inp.set(2.8e20); val = 2.8e20; calc(); }, ctl3);
      const ro = api.readouts();
      const r = ['Wavelength λ', 'Frequency ν', 'Energy (J)', 'Energy (eV)', 'Region'].map((l) => api.readout(l, ro));
      const cap = api.caption('');
      function calc() {
        if (!(val > 0)) { cap.set('Enter a positive number.'); return; }
        const lam = mode === 'lam' ? val * U[unit] : 3.00e8 / val, nu = 3.00e8 / lam, E = h * nu;
        r[0].set(api.sci(lam, 3) + ' m'); r[1].set(api.sci(nu, 3) + ' s⁻¹'); r[2].set(api.sci(E, 3) + ' J'); r[3].set(api.sci(E / eV, 3) + ' eV'); r[4].set(regionOf(lam).n);
        cap.set(mode === 'lam' ? `ν = c/λ = 3.00 × 10<sup>8</sup> / ${api.sci(lam, 2)} = <b>${api.sci(nu, 2)} s⁻¹</b>, so E = hν = ${api.sci(E, 2)} J. This lies in the <b>${regionOf(lam).n}</b> region.`
          : `λ = c/ν = 3.00 × 10<sup>8</sup> / ${api.sci(nu, 2)} = <b>${api.sci(lam, 2)} m</b>, E = hν = ${api.sci(E, 2)} J. This lies in the <b>${regionOf(lam).n}</b> region.`);
      }
      calc();
    }
  });

  // ---------------------------------------------------------------- transitions
  VIZ.register('transitions', {
    title: 'Electronic transitions in UV-Vis', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 320', body, 'Molecular orbital energy ladder');
      const L = { 'σ*': 40, 'π*': 105, n: 190, π: 235, σ: 290 };
      Object.keys(L).forEach((k) => { api.svg('line', { x1: 80, x2: 520, y1: L[k], y2: L[k], stroke: k.includes('*') ? C.e : C.metal, 'stroke-width': 2, 'stroke-dasharray': k.includes('*') ? '6 4' : null }, s); T(api, s, 60, L[k] + 5, k, { fill: C.white, 'font-size': 15, 'text-anchor': 'end' }); });
      T(api, s, 530, L['σ*'] + 5, 'antibonding', { 'text-anchor': 'start', fill: C.dim, 'font-size': 11 });
      T(api, s, 530, L.n + 5, 'non-bonding', { 'text-anchor': 'start', fill: C.dim, 'font-size': 11 });
      T(api, s, 530, L.σ + 5, 'bonding', { 'text-anchor': 'start', fill: C.dim, 'font-size': 11 });
      T(api, s, 22, 20, 'E ↑', { fill: C.dim, 'font-size': 12 });
      const TR = [
        { id: 'ss', from: 'σ', to: 'σ*', x: 150, r: '100–150 nm', ex: 'simple single bonds: C–H, C–C (alkanes such as cyclopentane)', col: '#b48cff' },
        { id: 'ns', from: 'n', to: 'σ*', x: 260, r: '150–250 nm', ex: 'atoms with lone pairs: N, O, S (ethers, amines)', col: '#7cc0ff' },
        { id: 'pp', from: 'π', to: 'π*', x: 370, r: '200–700 nm', ex: 'unsaturated and aromatic groups: C=C, benzene', col: '#86d4a9' },
        { id: 'np', from: 'n', to: 'π*', x: 480, r: '250–500 nm', ex: 'lone pair + unsaturation: C=O in aldehydes, ketones', col: '#e9c46a' },
      ];
      TR.forEach((t) => {
        t.g = api.svg('g', { style: 'cursor:pointer' }, s);
        t.line = api.svg('line', { x1: t.x, x2: t.x, y1: L[t.from] - 4, y2: L[t.to] + 6, stroke: t.col, 'stroke-width': 3, 'marker-end': api.arrow(s, t.col, 10) }, t.g);
        T(api, t.g, t.x, L[t.from] + 22, `${t.from}→${t.to}`, { fill: t.col, 'font-size': 13, 'font-weight': 600 });
        t.dot = api.svg('circle', { cx: t.x, cy: L[t.from], r: 6, fill: C.white, opacity: 0 }, t.g);
        t.g.addEventListener('click', () => pick(t));
      });
      let cur = TR[2], k = 0;
      const ctl = api.controls();
      const seg = api.segmented(TR.map((t) => ({ value: t.id, label: `${t.from}→${t.to}` })), cur.id, (v) => pick(TR.find((t) => t.id === v)), ctl);
      const ro = api.readouts();
      const r1 = api.readout('Absorbs at', ro), r2 = api.readout('Energy rank', ro), r3 = api.readout('Found in', ro);
      const cap = api.caption('Energy order: <b>σ→σ* &gt; n→σ* &gt; π→π* &gt; n→π*</b>. A longer arrow means more energy and so a shorter wavelength. Only π→π* and n→π* fall in the everyday 200–700 nm UV-Vis range, which is why UV-Vis spots conjugation and C=O groups.');
      // epsilon strip
      const s2 = api.stage('0 0 640 80', body, 'Molar absorptivity bands');
      const bands = [['forbidden', 1, 10], ['partly allowed', 10, 1000], ['allowed', 1000, 1e5], ['highly allowed', 1e5, 1e6]];
      const EX = (v) => 40 + Math.log10(v) / 6 * 560;
      bands.forEach(([n, a, b], i) => { api.svg('rect', { x: EX(a), y: 14, width: EX(b) - EX(a) - 2, height: 24, rx: 4, fill: ['#3a3040', '#3a3a30', '#2e3a33', '#2a3446'][i] }, s2); T(api, s2, (EX(a) + EX(b)) / 2, 31, n, { 'font-size': 11, fill: C.white }); });
      [1, 10, 1000, 1e5, 1e6].forEach((v) => T(api, s2, EX(v), 58, v >= 1e5 ? '10' + (v === 1e5 ? '⁵' : '⁶') : String(v), { 'font-size': 11, fill: C.dim, 'font-family': MONO }));
      T(api, s2, 320, 76, 'ε (L mol⁻¹ cm⁻¹): intensity reflects how probable the transition is', { 'font-size': 11, fill: C.dim });
      function pick(t) {
        cur = t; k = 0; seg.set(t.id);
        TR.forEach((x) => x.g.setAttribute('opacity', x === t ? 1 : 0.35));
        r1.set(t.r); r2.set(String(TR.indexOf(t) + 1) + ' of 4 (1 = highest)'); r3.set(t.ex);
      }
      pick(cur);
      api.loop((dt) => {
        k = (k + dt * 0.7) % 1.3;
        TR.forEach((x) => x.dot.setAttribute('opacity', 0));
        const q = api.ease(Math.min(1, k));
        cur.dot.setAttribute('opacity', 1); cur.dot.setAttribute('cy', L[cur.from] + (L[cur.to] - L[cur.from]) * (api.reduced ? 1 : q));
      });
    }
  });

  // ---------------------------------------------------------------- colour wheel
  VIZ.register('color-wheel', {
    title: 'Absorbed colour vs the colour you see', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 280', body, 'Complementary colour wheel and absorbance spectrum');
      const rgb = (nm) => api.wavelengthToColor(nm).match(/\d+/g).map(Number);
      const W = api.svg('g', { transform: 'translate(120,140)' }, s);
      for (let a = 0; a < 360; a += 6) {
        const nm = 400 + a / 360 * 300; const r0 = 50, r1 = 95, t0 = (a - 90) * Math.PI / 180, t1 = (a + 6 - 90) * Math.PI / 180;
        api.svg('path', { d: `M${Math.cos(t0) * r0} ${Math.sin(t0) * r0} L${Math.cos(t0) * r1} ${Math.sin(t0) * r1} A${r1} ${r1} 0 0 1 ${Math.cos(t1) * r1} ${Math.sin(t1) * r1} L${Math.cos(t1) * r0} ${Math.sin(t1) * r0} A${r0} ${r0} 0 0 0 ${Math.cos(t0) * r0} ${Math.sin(t0) * r0}`, fill: api.wavelengthToColor(nm) }, W);
      }
      const pin = api.svg('line', { x1: 0, y1: 0, stroke: C.white, 'stroke-width': 2 }, W);
      const pin2 = api.svg('line', { x1: 0, y1: 0, stroke: C.white, 'stroke-width': 2, 'stroke-dasharray': '4 3' }, W);
      T(api, W, 0, 124, 'solid = absorbed · dashed = seen', { 'font-size': 11, fill: C.dim });
      const cuv = api.svg('rect', { x: 250, y: 60, width: 60, height: 150, rx: 6, stroke: C.line2 }, s);
      T(api, s, 280, 232, 'solution', { 'font-size': 12, fill: C.dim });
      const P = api.svg('g', { transform: 'translate(350,40)' }, s);
      api.svg('rect', { x: 0, y: 0, width: 260, height: 180, rx: 8, fill: C.surface2 }, P);
      const curve = api.svg('path', { fill: 'rgba(255,255,255,0.08)', stroke: C.white, 'stroke-width': 2 }, P);
      [400, 500, 600, 700].forEach((nm) => T(api, P, (nm - 400) / 300 * 260, 198, nm + ' nm', { 'font-size': 11, fill: C.dim, 'font-family': MONO }));
      T(api, P, -6, 90, 'A', { 'font-size': 12, fill: C.dim, 'text-anchor': 'end' });
      const EXs = { mb: { n: 'Methylene blue', b: [[610, 28], [665, 28]] }, cr: { n: 'Congo red', b: [[500, 35]] }, ch: { n: 'Chlorophyll', b: [[430, 25], [665, 20]] }, custom: { n: 'Custom', b: [[600, 30]] } };
      let ex = 'mb', lam = 660;
      const ctl = api.controls();
      api.segmented(Object.keys(EXs).map((k) => ({ value: k, label: EXs[k].n })), ex, (v) => { ex = v; if (v === 'custom') EXs.custom.b = [[lam, 30]]; else lam = EXs[v].b[EXs[v].b.length - 1][0]; sl.set(lam); paint(); }, ctl);
      const sl = api.slider({ label: 'Absorbed wavelength', min: 400, max: 700, step: 5, value: lam, format: (v) => v + ' nm' }, (v) => { lam = v; ex = 'custom'; EXs.custom.b = [[v, 30]]; paint(); }, ctl);
      const ro = api.readouts();
      const r1 = api.readout('Absorbs', ro), r2 = api.readout('You see', ro);
      const cap = api.caption('');
      function name([r, g, b]) { const mx = Math.max(r, g, b), mn = Math.min(r, g, b); if (mx - mn < 30) return 'grey'; let hh; if (mx === r) hh = ((g - b) / (mx - mn)) % 6; else if (mx === g) hh = (b - r) / (mx - mn) + 2; else hh = (r - g) / (mx - mn) + 4; hh = (hh * 60 + 360) % 360; return hh < 15 ? 'red' : hh < 40 ? 'orange' : hh < 65 ? 'yellow' : hh < 160 ? 'green' : hh < 200 ? 'cyan / blue-green' : hh < 250 ? 'blue' : hh < 290 ? 'violet' : hh < 335 ? 'purple / magenta' : 'red'; }
      function paint() {
        const bands = EXs[ex].b;
        let absorbed = [0, 0, 0];
        bands.forEach(([c]) => { const v = rgb(c); absorbed = absorbed.map((x, i) => x + v[i]); });
        const seen = absorbed.map((v) => Math.round(255 - Math.min(255, v) * 0.85));
        cuv.setAttribute('fill', `rgb(${seen.join(',')})`);
        const ang = (bands[bands.length - 1][0] - 400) / 300 * 360 - 90, rad = ang * Math.PI / 180;
        pin.setAttribute('x2', Math.cos(rad) * 100); pin.setAttribute('y2', Math.sin(rad) * 100);
        pin2.setAttribute('x2', -Math.cos(rad) * 100); pin2.setAttribute('y2', -Math.sin(rad) * 100);
        let d = 'M0 180';
        for (let nm = 400; nm <= 700; nm += 3) { let a = 0; bands.forEach(([c, w]) => { a += Math.exp(-((nm - c) ** 2) / (2 * w * w)); }); d += ` L${(nm - 400) / 300 * 260} ${180 - Math.min(1, a) * 160}`; }
        curve.setAttribute('d', d + ' L260 180 Z');
        r1.set(bands.map(([c]) => c + ' nm (' + name(rgb(c)) + ')').join(' + ')); r2.set(name(seen));
        cap.set(ex === 'mb' ? 'Methylene blue absorbs <b>600–700 nm</b> (orange-red), so the light that reaches you looks <b>blue</b>.' : ex === 'cr' ? 'Congo red absorbs most strongly near <b>500 nm</b> (green), so it looks <b>red</b>.' : ex === 'ch' ? 'Chlorophyll absorbs <b>red and blue</b>, so leaves look <b>green</b>.' : 'A solution shows the <b>complementary</b> colour of what it absorbs: roughly the opposite side of the wheel.');
      }
      paint();
    }
  });

  // ---------------------------------------------------------------- Beer-Lambert
  VIZ.register('beer-lambert', {
    title: 'Beer–Lambert law', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 260', body, 'Light passing through a cuvette');
      const cell = api.svg('rect', { x: 180, y: 60, width: 160, height: 110, rx: 6, stroke: C.line2, 'stroke-width': 1.5 }, s);
      const gid = api.uid('bl'), defs = api.svg('defs', null, s), grad = api.svg('linearGradient', { id: gid }, defs);
      const st0 = api.svg('stop', { offset: 0 }, grad), st1 = api.svg('stop', { offset: 1 }, grad);
      const beamIn = api.svg('rect', { x: 30, y: 102, width: 150, height: 26, fill: C.photon }, s);
      const beamCell = api.svg('rect', { x: 180, y: 102, width: 160, height: 26, fill: `url(#${gid})` }, s);
      const beamOut = api.svg('rect', { x: 340, y: 102, width: 110, height: 26, fill: C.photon }, s);
      T(api, s, 90, 92, 'I₀', { fill: C.photon, 'font-size': 15 }); const iT = T(api, s, 400, 92, 'I', { fill: C.photon, 'font-size': 15 });
      const Ltxt = T(api, s, 260, 190, '', { fill: C.dim, 'font-size': 12, 'font-family': MONO });
      api.svg('rect', { x: 452, y: 96, width: 30, height: 38, rx: 4, fill: C.surface2, stroke: C.line2 }, s); T(api, s, 467, 150, 'detector', { fill: C.dim, 'font-size': 11 });
      const P = api.svg('g', { transform: 'translate(510,30)' }, s);
      api.svg('rect', { width: 110, height: 150, rx: 6, fill: C.surface2 }, P);
      const line = api.svg('line', { x1: 0, y1: 150, stroke: C.good, 'stroke-width': 2 }, P);
      const pt = api.svg('circle', { r: 5, fill: C.white }, P);
      T(api, P, 55, 168, 'A vs c', { fill: C.dim, 'font-size': 11 });
      const mols = Array.from({ length: 60 }, (_, i) => api.svg('circle', { cx: 0, cy: 0, r: 2.5, fill: C.an, opacity: 0 }, s));
      const st = { c: 5e-5, L: 1, e: 8400 };
      const ctl = api.controls();
      const sc = api.slider({ label: 'Concentration c', min: 0, max: 1.5e-4, step: 1e-6, value: st.c, format: (v) => api.sci(v, 2) + ' M' }, (v) => { st.c = v; paint(); }, ctl);
      const sL = api.slider({ label: 'Path length L', min: 0.2, max: 4, step: 0.1, value: st.L, format: (v) => v.toFixed(1) + ' cm' }, (v) => { st.L = v; paint(); }, ctl);
      const sE = api.slider({ label: 'ε', min: 1000, max: 20000, step: 100, value: st.e, format: (v) => v + ' L mol⁻¹ cm⁻¹' }, (v) => { st.e = v; paint(); }, ctl);
      api.button('Solve the slide example (A = 0.70)', () => { st.e = 8400; st.L = 1; st.c = 0.70 / 8400; sE.set(8400); sL.set(1); sc.set(st.c); paint(); }, api.controls(), { primary: true });
      const ro = api.readouts();
      const r = ['Absorbance A = εLc', 'Transmittance T = 10⁻ᴬ', 'Light through', 'Concentration'].map((l) => api.readout(l, ro));
      const cap = api.caption('');
      function paint() {
        const A = st.e * st.L * st.c, Tt = Math.pow(10, -A);
        const w = 40 + st.L * 30; cell.setAttribute('x', 260 - w / 2); cell.setAttribute('width', w); beamIn.setAttribute('width', 260 - w / 2 - 30); beamCell.setAttribute('x', 260 - w / 2); beamCell.setAttribute('width', w); beamOut.setAttribute('x', 260 + w / 2); beamOut.setAttribute('width', 452 - (260 + w / 2));
        cell.setAttribute('fill', `rgba(199,164,255,${Math.min(0.5, st.c / 1.5e-4 * 0.5)})`);
        st0.setAttribute('stop-color', C.photon); st1.setAttribute('stop-color', C.photon); st1.setAttribute('stop-opacity', Tt.toFixed(3));
        beamOut.setAttribute('opacity', Math.max(0.03, Tt).toFixed(3)); iT.setAttribute('opacity', Math.max(0.2, Tt));
        Ltxt.textContent = 'L = ' + st.L.toFixed(1) + ' cm';
        const n = Math.round(st.c / 1.5e-4 * 60 * Math.min(1, w / 160));
        mols.forEach((m, i) => { m.setAttribute('opacity', i < n ? 0.9 : 0); m.setAttribute('cx', 260 - w / 2 + 6 + ((i * 37) % 100) / 100 * (w - 12)); m.setAttribute('cy', 66 + ((i * 53) % 100) / 100 * 98); });
        const Amax = 20000 * 4 * 1.5e-4 * 0.25; // plot scale
        const slope = st.e * st.L;
        line.setAttribute('x2', 110); line.setAttribute('y2', 150 - Math.min(150, slope * 1.5e-4 / 2 * 150));
        pt.setAttribute('cx', st.c / 1.5e-4 * 110); pt.setAttribute('cy', 150 - Math.min(150, A / 2 * 150));
        r[0].set(api.fmt(A, 3)); r[1].set(api.fmt(Tt, 3)); r[2].set(api.fmt(Tt * 100, 1) + ' %'); r[3].set(api.sci(st.c, 3) + ' M');
        cap.set(`A = ε × L × c = ${st.e} × ${st.L.toFixed(1)} × ${api.sci(st.c, 2)} = <b>${api.fmt(A, 3)}</b>. Absorbance rises in a <b>straight line</b> with concentration and path length, while the transmitted light falls exponentially. Rearranged: <b>c = A / εL</b>.`);
      }
      paint();
    }
  });

  // ---------------------------------------------------------------- spectrophotometer
  VIZ.register('spectrophotometer', {
    title: 'UV-Vis spectrophotometer', kind: 'Animation',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 300', body, 'Beam path in single and double beam spectrophotometers');
      const layer = api.svg('g', null, s);
      let mode = 'd', paths = [], ph = [];
      function box(x, y, w, t, sub, col) { const g = api.svg('g', null, layer); api.svg('rect', { x, y, width: w, height: 44, rx: 8, fill: C.surface2, stroke: col || C.line2, 'stroke-width': 1.5 }, g); T(api, g, x + w / 2, y + (sub ? 19 : 27), t, { fill: C.white, 'font-size': 12 }); if (sub) T(api, g, x + w / 2, y + 35, sub, { fill: C.dim, 'font-size': 10.5 }); }
      function build() {
        layer.innerHTML = ''; ph = []; const under = api.svg('g', null, layer);
        if (mode === 's') {
          box(10, 128, 96, 'Source', 'polychromatic'); box(140, 128, 108, 'Wavelength', 'selector'); box(282, 128, 92, 'Sample', 'cuvette', C.an); box(408, 128, 92, 'Detector'); box(534, 128, 96, 'Display', 'screen / PC');
          paths = [[[106, 150], [140, 150], [248, 150], [282, 150], [374, 150], [408, 150]]];
        } else {
          box(10, 128, 90, 'D₂ + W', 'lamps'); box(118, 128, 70, 'Filter'); box(206, 128, 108, 'Mono-', 'chromator'); box(330, 128, 76, 'Beam', 'splitter');
          box(430, 50, 88, 'Sample', 'cell', C.an); box(430, 206, 88, 'Reference', 'solvent', C.good);
          box(540, 50, 90, 'Photodiode'); box(540, 206, 90, 'Photodiode');
          T(api, layer, 585, 150, 'ratio I / I₀ → A', { fill: C.white, 'font-size': 12 });
          T(api, layer, 585, 168, 'data processing', { fill: C.dim, 'font-size': 11 });
          paths = [[[100, 150], [118, 150], [188, 150], [206, 150], [314, 150], [368, 150], [368, 72], [430, 72], [518, 72], [540, 72]], [[100, 150], [118, 150], [188, 150], [206, 150], [314, 150], [368, 150], [368, 228], [430, 228], [518, 228], [540, 228]]];
        }
        paths.forEach((p, k) => { api.svg('polyline', { points: p.map((q) => q.join(',')).join(' '), fill: 'none', stroke: 'rgba(255,224,122,0.25)', 'stroke-width': 3 }, under); for (let i = 0; i < 6; i++) ph.push({ k, t: i / 6, n: api.svg('circle', { r: 4, fill: C.photon }, under) }); });
      }
      function at(p, t) { let L = 0; const seg = []; for (let i = 1; i < p.length; i++) { const d = Math.hypot(p[i][0] - p[i - 1][0], p[i][1] - p[i - 1][1]); seg.push(d); L += d; } let d = t * L; for (let i = 0; i < seg.length; i++) { if (d <= seg[i]) { const f = d / seg[i]; return [p[i][0] + (p[i + 1][0] - p[i][0]) * f, p[i][1] + (p[i + 1][1] - p[i][1]) * f, i]; } d -= seg[i]; } return [...p[p.length - 1], seg.length]; }
      api.segmented([{ value: 's', label: 'Single beam' }, { value: 'd', label: 'Double beam' }], mode, (v) => { mode = v; build(); paint(); }, api.controls());
      const cap = api.caption('');
      function paint() {
        cap.set(mode === 's' ? '<b>Single beam</b> (Beckman, 1940): a polychromatic source, a wavelength selector (and source selector), the sample compartment, a detector and a screen or computer. Blank and sample are measured one after the other.'
          : '<b>Double beam:</b> deuterium (UV) and tungsten (visible) lamps feed a filter and monochromator; a beam splitter sends one beam through the <b>sample</b> and one through the <b>reference</b>. Two photodiodes compare them at once, so lamp drift cancels and A = log(I₀/I) is read directly.');
      }
      build(); paint();
      api.loop((dt) => {
        ph.forEach((p) => {
          p.t = (p.t + (api.reduced ? 0 : dt * 0.22)) % 1;
          const [x, y] = at(paths[p.k], p.t);
          p.n.setAttribute('cx', x); p.n.setAttribute('cy', y);
          const afterSample = mode === 's' ? x > 374 : x > 518;
          p.n.setAttribute('opacity', afterSample && (mode === 's' || p.k === 0) ? 0.45 : 1);
        });
      });
    }
  });
})();
