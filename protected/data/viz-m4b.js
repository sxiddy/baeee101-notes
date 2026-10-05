/* Module 4 diagrams: X-rays and XRD */
(function () {
  'use strict';
  const MONO = 'JetBrains Mono, ui-monospace, monospace';
  const RAD = Math.PI / 180;
  function T(api, p, x, y, s, o) { return api.svg('text', Object.assign({ x, y, 'font-size': 13, fill: api.C.text, 'text-anchor': 'middle', text: s }, o || {}), p); }

  // ---------------------------------------------------------------- X-ray tube
  VIZ.register('xray-tube', {
    title: 'Making X-rays', kind: 'Animation',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 400', body, 'X-ray tube, emission mechanism and spectrum');
      const ANODE = { Cr: [2.29, 2.08], Fe: [1.94, 1.76], Co: [1.79, 1.62], Cu: [1.54, 1.39], Mo: [0.71, 0.63] };
      // tube
      api.svg('rect', { x: 30, y: 40, width: 340, height: 120, rx: 60, fill: 'rgba(124,192,255,0.05)', stroke: C.line2, 'stroke-width': 1.5 }, s);
      T(api, s, 150, 30, 'evacuated tube', { fill: C.dim, 'font-size': 11 });
      const fil = api.svg('path', { d: 'M70 85 l6 8 l6 -16 l6 16 l6 -16 l6 16 l6 -8', fill: 'none', stroke: C.heat, 'stroke-width': 2.5 }, s);
      api.svg('rect', { x: 60, y: 70, width: 8, height: 60, fill: C.metal }, s);
      T(api, s, 85, 150, 'W filament (−)', { fill: C.dim, 'font-size': 11 });
      api.svg('path', { d: 'M300 60 L340 60 L340 140 L300 140 L285 100 Z', fill: '#b8784e' }, s);
      const anT = T(api, s, 320, 30, '', { fill: C.dim, 'font-size': 11 });
      api.svg('rect', { x: 262, y: 157, width: 36, height: 6, fill: C.good }, s); T(api, s, 280, 190, 'window', { fill: C.good, 'font-size': 11 });
      const kvT = T(api, s, 200, 64, '', { fill: C.white, 'font-size': 12, 'font-family': MONO });
      const layer = api.svg('g', null, s);
      const el = Array.from({ length: 8 }, (_, i) => ({ t: i / 8, n: api.svg('circle', { r: 4, fill: C.e }, layer) }));
      const xr = Array.from({ length: 5 }, (_, i) => ({ t: i / 5, n: api.svg('path', { fill: 'none', stroke: C.photon, 'stroke-width': 2 }, layer) }));
      // atom inset
      const A = api.svg('g', { transform: 'translate(510,100)' }, s);
      api.svg('circle', { r: 16, fill: '#b8784e' }, A); T(api, A, 0, 5, 'nucleus', { 'font-size': 9, fill: '#2a1a10' });
      const shells = [34, 58, 80].map((r, i) => { api.svg('circle', { r, fill: 'none', stroke: C.line2, 'stroke-dasharray': '3 4' }, A); return T(api, A, r + 4, -4, 'KLM'[i], { 'font-size': 11, fill: C.dim, 'text-anchor': 'start' }); });
      const inE = api.svg('circle', { r: 5, fill: C.e }, A), outE = api.svg('circle', { r: 5, fill: C.e }, A), drop = api.svg('circle', { r: 5, fill: C.cat }, A), hole = api.svg('circle', { r: 6, fill: 'none', stroke: C.hole, 'stroke-width': 2 }, A);
      const xph = api.svg('path', { fill: 'none', stroke: C.photon, 'stroke-width': 2.5 }, A);
      const mT = T(api, A, 0, 104, '', { 'font-size': 12, fill: C.white });
      // spectrum
      const P = api.svg('g', { transform: 'translate(60,220)' }, s);
      api.svg('rect', { width: 540, height: 140, rx: 6, fill: C.surface2 }, P);
      const cont = api.svg('path', { fill: 'rgba(124,192,255,0.15)', stroke: C.e, 'stroke-width': 2 }, P);
      const ka = api.svg('line', { y1: 140, stroke: C.cat, 'stroke-width': 3 }, P), kb = api.svg('line', { y1: 140, stroke: C.cat, 'stroke-width': 2.5 }, P);
      const kaT = T(api, P, 0, 0, 'Kα', { fill: C.cat, 'font-size': 12 }), kbT = T(api, P, 0, 0, 'Kβ', { fill: C.cat, 'font-size': 12 });
      const lmT = T(api, P, 0, 132, '', { fill: C.dim, 'font-size': 11, 'text-anchor': 'start' });
      [0, 0.5, 1, 1.5, 2, 2.5].forEach((v) => T(api, P, v / 2.5 * 540, 158, v + ' Å', { 'font-size': 11, fill: C.dim, 'font-family': MONO }));
      T(api, P, 270, 174, 'wavelength λ', { 'font-size': 11, fill: C.dim });
      let kv = 40, an = 'Cu', mech = 'b', t = 0;
      const ctl = api.controls();
      api.segmented([{ value: 'b', label: 'Bremsstrahlung' }, { value: 'c', label: 'Characteristic' }], mech, (v) => { mech = v; t = 0; paint(); }, ctl);
      api.select({ label: 'Anode', value: 'Cu', options: Object.keys(ANODE).map((k) => ({ value: k, label: `${k} (Kα ${ANODE[k][0]} Å)` })) }, (v) => { an = v; paint(); }, ctl);
      api.slider({ label: 'Tube voltage', min: 25, max: 150, step: 5, value: kv, format: (v) => v + ' kV' }, (v) => { kv = v; paint(); }, ctl);
      const cap = api.caption('');
      function paint() {
        kvT.textContent = kv + ' kV accelerating'; anT.textContent = an + ' anode (+)';
        const lmin = 12.398 / kv; let d = 'M0 140'; const kr = (l) => (l > lmin ? (l / lmin - 1) / (l * l) : 0), norm = kr(2 * lmin);
        for (let x = 0; x <= 540; x += 3) { const l = x / 540 * 2.5; d += ` L${x} ${(140 - kr(l) / norm * 80).toFixed(1)}`; }
        cont.setAttribute('d', d + ' L540 140 Z');
        const [la, lb] = ANODE[an], xa = la / 2.5 * 540, xb = lb / 2.5 * 540;
        ka.setAttribute('x1', xa); ka.setAttribute('x2', xa); ka.setAttribute('y2', 16); kb.setAttribute('x1', xb); kb.setAttribute('x2', xb); kb.setAttribute('y2', 50);
        kaT.setAttribute('x', xa + 14); kaT.setAttribute('y', 22); kbT.setAttribute('x', xb - 14); kbT.setAttribute('y', 56);
        lmT.textContent = `λmin = 12.4/kV = ${lmin.toFixed(2)} Å`; lmT.setAttribute('x', lmin / 2.5 * 540 + 4); lmT.setAttribute('y', 132);
        mT.textContent = mech === 'b' ? 'electron swerves near nucleus' : 'K vacancy filled from L (Kα)';
        cap.set(mech === 'b' ? `Electrons boiled off the hot tungsten filament (thermionic emission) are accelerated by <b>${kv} kV</b> into the anode. Slowing down in a nucleus's field, each loses kinetic energy as an X-ray: <b>Bremsstrahlung</b>, a continuous "white" spectrum (the blue hump). Higher voltage pushes it to shorter λ.`
          : `A fast electron knocks out a <b>K-shell</b> electron. An <b>L</b> electron drops in and emits <b>Kα</b> (M → K gives <b>Kβ</b>). These sharp lines are fixed by the anode metal. <b>Cu Kα = 1.5406 Å (8.04 keV)</b> is the standard lab XRD line.`);
      }
      paint();
      api.loop((dt, tt) => {
        const sp = api.reduced ? 0 : dt;
        el.forEach((e) => { e.t = (e.t + sp * (0.4 + kv / 150)) % 1; const x = 100 + e.t * 185; e.n.setAttribute('cx', x); e.n.setAttribute('cy', 100 + Math.sin(e.t * 9 + e.t) * 3); });
        xr.forEach((x) => { x.t = (x.t + sp * 0.6) % 1; const y = 108 + x.t * 90, xx = 290 - x.t * 20; x.n.setAttribute('d', `M${xx} ${y} l4 5 l-8 5 l8 5 l-4 5`); x.n.setAttribute('opacity', (1 - x.t).toFixed(2)); });
        fil.setAttribute('opacity', (0.7 + 0.3 * Math.sin(tt * 8)).toFixed(2));
        t = (t + sp * 0.5) % 1;
        const k = api.reduced ? 0.8 : t;
        xph.setAttribute('d', '');
        if (mech === 'b') {
          drop.setAttribute('opacity', 0); hole.setAttribute('opacity', 0); outE.setAttribute('opacity', 0); inE.setAttribute('opacity', 1);
          const a = -2.6 + k * 2.2; const r = 95 - Math.sin(k * Math.PI) * 55;
          inE.setAttribute('cx', Math.cos(a) * r); inE.setAttribute('cy', Math.sin(a) * r);
          if (k > 0.45) xph.setAttribute('d', `M${Math.cos(-1.5) * 40} ${Math.sin(-1.5) * 40} l6 -8 l6 8 l6 -8 l6 8 l6 -8`);
        } else {
          inE.setAttribute('opacity', k < 0.35 ? 1 : 0); inE.setAttribute('cx', -100 + k / 0.35 * 66); inE.setAttribute('cy', 0);
          outE.setAttribute('opacity', k >= 0.35 ? 1 : 0); outE.setAttribute('cx', -34 - (k - 0.35) * 150); outE.setAttribute('cy', -(k - 0.35) * 60);
          hole.setAttribute('opacity', k >= 0.35 && k < 0.7 ? 1 : 0); hole.setAttribute('cx', -34); hole.setAttribute('cy', 0);
          drop.setAttribute('opacity', k >= 0.5 ? 1 : 0); const q = api.clamp((k - 0.5) / 0.2, 0, 1); drop.setAttribute('cx', -58 + 24 * q); drop.setAttribute('cy', 0);
          if (k > 0.7) xph.setAttribute('d', 'M-34 -8 l6 -8 l6 8 l6 -8 l6 8 l6 -8');
        }
      });
    }
  });

  // ---------------------------------------------------------------- interference
  VIZ.register('interference', {
    title: 'Constructive and destructive interference', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 280', body, 'Two waves and their sum');
      [60, 140, 220].forEach((y, i) => { api.svg('line', { x1: 70, x2: 610, y1: y, y2: y, stroke: C.line }, s); T(api, s, 62, y + 4, ['wave 1', 'wave 2', 'sum'][i], { 'text-anchor': 'end', 'font-size': 11, fill: C.dim }); });
      const w1 = api.svg('path', { fill: 'none', stroke: C.e, 'stroke-width': 2 }, s), w2 = api.svg('path', { fill: 'none', stroke: C.cat, 'stroke-width': 2 }, s), w3 = api.svg('path', { fill: 'none', stroke: C.white, 'stroke-width': 2.5 }, s);
      let phi = 0;
      const ctl = api.controls();
      const sl = api.slider({ label: 'Phase difference', min: 0, max: 2, step: 0.01, value: 0, format: (v) => v.toFixed(2) + 'π' }, (v) => { phi = v; }, ctl);
      api.button('In phase', () => { phi = 0; sl.set(0); }, ctl); api.button('Half a wave out', () => { phi = 1; sl.set(1); }, ctl);
      const ro = api.readouts(); const r1 = api.readout('Resulting amplitude', ro), r2 = api.readout('Type', ro);
      api.caption('Waves <b>in phase</b> (difference 0, 2π…) add up to a wave of <b>double amplitude</b>: constructive interference. Half a wavelength out (π) they <b>cancel</b>: destructive. X-ray diffraction peaks are exactly the directions where scattered waves come out in phase.');
      api.loop((dt, t) => {
        const ph = api.reduced ? 0 : t * 3, P = phi * Math.PI;
        const path = (y0, f) => { let d = ''; for (let x = 70; x <= 610; x += 3) d += (d ? ' L' : 'M') + x + ' ' + (y0 - f((x - 70) / 70 * Math.PI - ph) * 24).toFixed(1); return d; };
        w1.setAttribute('d', path(60, (a) => Math.sin(a))); w2.setAttribute('d', path(140, (a) => Math.sin(a + P))); w3.setAttribute('d', path(220, (a) => (Math.sin(a) + Math.sin(a + P)) / 1.2));
        const amp = Math.abs(2 * Math.cos(P / 2));
        r1.set(amp.toFixed(2) + ' × single wave'); r2.set(amp > 1.9 ? '<span style="color:#86d4a9">constructive</span>' : amp < 0.1 ? '<span style="color:#f08c8c">destructive</span>' : 'partial');
      });
    }
  });

  // ---------------------------------------------------------------- Bragg
  VIZ.register('bragg', {
    title: "Bragg's law: 2d sin θ = nλ", kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 380', body, 'X-rays reflecting from two crystal planes');
      const st = { th: 19.1, d: 2.35, lam: 1.5406 };
      const G = api.svg('g', null, s);
      const det = api.svg('circle', { r: 16, stroke: C.line2, 'stroke-width': 2 }, s);
      const ins = api.svg('g', { transform: 'translate(440,300)' }, s);
      api.svg('rect', { x: 0, y: -40, width: 190, height: 80, rx: 6, fill: C.surface2 }, ins);
      const o1 = api.svg('path', { fill: 'none', stroke: C.e, 'stroke-width': 1.5 }, ins), o2 = api.svg('path', { fill: 'none', stroke: C.cat, 'stroke-width': 1.5 }, ins), o3 = api.svg('path', { fill: 'none', stroke: C.white, 'stroke-width': 2 }, ins);
      T(api, ins, 95, 54, 'waves leaving: ray 1, ray 2, sum', { 'font-size': 10.5, fill: C.dim });
      const ctl = api.controls();
      const sT = api.slider({ label: 'Angle θ', min: 3, max: 85, step: 0.1, value: st.th, format: (v) => v.toFixed(1) + '°' }, (v) => { st.th = v; draw(); }, ctl);
      const sD = api.slider({ label: 'Plane spacing d', min: 1.5, max: 4, step: 0.01, value: st.d, format: (v) => v.toFixed(2) + ' Å' }, (v) => { st.d = v; draw(); }, ctl);
      const sL = api.slider({ label: 'Wavelength λ', min: 0.5, max: 3, step: 0.01, value: st.lam, format: (v) => v.toFixed(3) + ' Å' }, (v) => { st.lam = v; draw(); }, ctl);
      const ctl2 = api.controls();
      [1, 2, 3].forEach((n) => api.button('Snap to n = ' + n, () => { const x = n * st.lam / (2 * st.d); if (x <= 1) { st.th = Math.asin(x) / RAD; sT.set(st.th); draw(); } else cap.set(`No n = ${n} reflection: nλ/2d = ${x.toFixed(2)} &gt; 1, so sin θ cannot reach it. Use a shorter λ or larger d.`); }, ctl2));
      const ro = api.readouts();
      const r1 = api.readout('Path difference 2d sin θ', ro), r2 = api.readout('2d sin θ / λ', ro), r3 = api.readout('Result', ro);
      const cap = api.caption('');
      let ratio = 1;
      function draw() {
        G.innerHTML = '';
        const dpx = st.d * 34, y1 = 150, x0 = 250, th = st.th * RAD;
        for (let k = 0; k < 3; k++) { const y = y1 + k * dpx; api.svg('line', { x1: 40, x2: 560, y1: y, y2: y, stroke: C.line2, 'stroke-dasharray': '2 6' }, G); for (let x = 50; x < 560; x += 44) api.svg('circle', { cx: x + (k % 2) * 0, cy: y, r: 5, fill: C.metal }, G); }
        T(api, G, 566, y1 + 4, 'plane 1', { 'text-anchor': 'start', 'font-size': 11, fill: C.dim }); T(api, G, 566, y1 + dpx + 4, 'plane 2', { 'text-anchor': 'start', 'font-size': 11, fill: C.dim });
        api.svg('line', { x1: 60, x2: 60, y1, y2: y1 + dpx, stroke: C.good, 'stroke-width': 1.5, 'marker-end': api.arrow(s, C.good), 'marker-start': api.arrow(s, C.good) }, G);
        T(api, G, 48, y1 + dpx / 2 + 4, 'd', { fill: C.good, 'font-style': 'italic', 'text-anchor': 'end' });
        const dir = [Math.cos(th), Math.sin(th)], rdir = [Math.cos(th), -Math.sin(th)];
        const Ap = [x0, y1], Bp = [x0, y1 + dpx], Lr = 230;
        const line = (a, b, col, w, dash) => api.svg('line', { x1: a[0], y1: a[1], x2: b[0], y2: b[1], stroke: col, 'stroke-width': w || 2, 'stroke-dasharray': dash || null }, G);
        const sub = (p, v, k) => [p[0] - v[0] * k, p[1] - v[1] * k], add = (p, v, k) => [p[0] + v[0] * k, p[1] + v[1] * k];
        line(sub(Ap, dir, Lr), Ap, C.e, 2); line(Ap, add(Ap, rdir, Lr), C.e, 2);
        line(sub(Bp, dir, Lr + 20), Bp, C.cat, 2); line(Bp, add(Bp, rdir, Lr + 20), C.cat, 2);
        const ext = st.d * Math.sin(th) * 34;
        const Cp = sub(Bp, dir, ext), Dp = add(Bp, rdir, ext);
        line(Ap, Cp, C.faint, 1.2, '3 3'); line(Ap, Dp, C.faint, 1.2, '3 3');
        line(Cp, Bp, C.warn, 4); line(Bp, Dp, C.warn, 4);
        [[Ap, 'A'], [Bp, 'B'], [Cp, 'C'], [Dp, 'D']].forEach(([p, n]) => T(api, G, p[0] + (n === 'C' ? -12 : n === 'D' ? 12 : 0), p[1] + (n === 'B' ? 20 : n === 'A' ? -10 : 4), n, { fill: C.white, 'font-size': 12, 'font-weight': 600 }));
        T(api, G, x0 - 90, y1 - 14 - 0, 'θ', { fill: C.photon, 'font-style': 'italic', 'font-size': 15 });
        const ep = add(Ap, rdir, Lr); det.setAttribute('cx', ep[0]); det.setAttribute('cy', ep[1]);
        ratio = 2 * st.d * Math.sin(th) / st.lam;
        const n = Math.round(ratio), ok = n >= 1 && Math.abs(ratio - n) < 0.04;
        det.setAttribute('fill', ok ? 'rgba(255,224,122,0.85)' : C.surface2);
        r1.set((2 * st.d * Math.sin(th)).toFixed(3) + ' Å'); r2.set(ratio.toFixed(3)); r3.set(ok ? `<span style="color:#86d4a9">constructive, n = ${n}</span>` : '<span style="color:#f08c8c">waves out of step</span>');
        cap.set(`The ray reflected from plane 2 travels the extra amber path <b>CB + BD = 2d sin θ</b>. When that equals a whole number of wavelengths (<b>nλ</b>), the two reflected waves line up and the detector lights: a diffraction peak. ${ok ? `Here 2 × ${st.d.toFixed(2)} × sin ${st.th.toFixed(1)}° = ${n} × ${st.lam.toFixed(3)} Å.` : 'Move θ, or press a Snap button.'}`);
      }
      draw();
      api.loop((dt, t) => {
        const ph = api.reduced ? 0 : t * 4, P = ratio * 2 * Math.PI;
        const path = (f, amp) => { let d = ''; for (let x = 6; x <= 184; x += 3) d += (d ? ' L' : 'M') + x + ' ' + (-f((x) / 18 - ph) * amp).toFixed(1); return d; };
        o1.setAttribute('d', path((a) => Math.sin(a), 12)); o2.setAttribute('d', path((a) => Math.sin(a + P), 12)); o3.setAttribute('d', path((a) => (Math.sin(a) + Math.sin(a + P)) / 2, 22));
      });
    }
  });

  // ---------------------------------------------------------------- XRD pattern
  VIZ.register('xrd-pattern', {
    title: 'Reading an XRD pattern', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 300', body, 'Diffractogram: intensity against 2 theta');
      const X0 = 50, X1 = 610, Y0 = 250, Y1 = 30, A0 = 10, A1 = 80;
      const X = (a) => X0 + (a - A0) / (A1 - A0) * (X1 - X0);
      api.svg('line', { x1: X0, x2: X1, y1: Y0, y2: Y0, stroke: C.line2 }, s); api.svg('line', { x1: X0, x2: X0, y1: Y0, y2: Y1, stroke: C.line2 }, s);
      for (let a = 10; a <= 80; a += 10) T(api, s, X(a), Y0 + 18, a + '°', { 'font-size': 11, fill: C.dim, 'font-family': MONO });
      T(api, s, 330, Y0 + 40, '2θ (degrees)', { 'font-size': 12, fill: C.dim }); T(api, s, 20, 140, 'intensity', { 'font-size': 12, fill: C.dim, transform: 'rotate(-90 20 140)' });
      const PK = [[28.44, 1], [47.3, 0.55], [56.12, 0.32], [69.13, 0.08], [76.38, 0.12]];
      const curve = api.svg('path', { fill: 'rgba(124,192,255,0.12)', stroke: C.e, 'stroke-width': 2 }, s);
      const hv = api.svg('g', { opacity: 0 }, s); api.svg('line', { y1: Y1, y2: Y0, stroke: C.photon, 'stroke-dasharray': '3 3' }, hv); const hvT = T(api, hv, 0, Y1 - 6, '', { fill: C.photon, 'font-size': 11, 'font-family': MONO });
      let D = 40, amorph = false;
      const ctl = api.controls();
      api.segmented([{ value: false, label: 'Crystalline' }, { value: true, label: 'Amorphous' }], amorph, (v) => { amorph = v; draw(); }, ctl);
      const sl = api.slider({ label: 'Crystallite size D', min: 2, max: 100, step: 1, value: D, format: (v) => v + ' nm' }, (v) => { D = v; draw(); }, ctl);
      const ro = api.readouts();
      const r1 = api.readout('Main peak 2θ', ro), r2 = api.readout('FWHM β', ro), r3 = api.readout('Scherrer D', ro);
      const cap = api.caption('');
      const fwhm = (a) => (0.94 * 0.15406 / (D * Math.cos(a / 2 * RAD))) / RAD;
      function draw() {
        sl.el.style.opacity = amorph ? 0.4 : 1;
        let d = `M${X0} ${Y0}`;
        for (let a = A0; a <= A1; a += 0.1) {
          let I = 0.02;
          if (amorph) I += 0.35 * Math.exp(-((a - 22) ** 2) / (2 * 4.5 ** 2));
          else PK.forEach(([p, h]) => { const sg = fwhm(p) / 2.355; I += h * 0.9 * Math.exp(-((a - p) ** 2) / (2 * sg * sg)); });
          d += ` L${X(a).toFixed(1)} ${(Y0 - Math.min(1, I) * (Y0 - Y1)).toFixed(1)}`;
        }
        curve.setAttribute('d', d + ` L${X1} ${Y0} Z`);
        if (amorph) { r1.set('none'); r2.set('broad hump'); r3.set('no long-range order'); cap.set('An <b>amorphous</b> solid (like glass SiO₂) has no long-range order, so there are no sharp Bragg peaks, only a <b>broad hump</b>.'); }
        else { const w = fwhm(28.44); r1.set('28.44°'); r2.set(w.toFixed(2) + '° = ' + (w * RAD).toFixed(4) + ' rad'); r3.set(D + ' nm');
          cap.set(`Peak <b>position</b> gives the plane spacing (Bragg), <b>intensity</b> reflects how many atoms scatter in phase, and <b>width</b> gives size: β = Kλ / (D cos θ). Shrink D and the peaks <b>broaden</b>; big crystals give thin peaks. Match positions against <b>JCPDS / ICSD</b> to identify the phase. Hover the plot.`); }
      }
      draw();
      api.listen(s, 'mousemove', (e) => {
        const r = s.getBoundingClientRect(); if (!r.width) return;
        const x = (e.clientX - r.left) / r.width * 640; const a = A0 + (x - X0) / (X1 - X0) * (A1 - A0);
        if (a < A0 || a > A1 || amorph) { hv.setAttribute('opacity', 0); return; }
        const pk = PK.reduce((b, p) => (Math.abs(p[0] - a) < Math.abs(b[0] - a) ? p : b));
        hv.setAttribute('opacity', 1); hv.setAttribute('transform', `translate(${X(pk[0])},0)`);
        hvT.textContent = `2θ ${pk[0]}°, FWHM ${fwhm(pk[0]).toFixed(2)}°`;
      });
      api.listen(s, 'mouseleave', () => hv.setAttribute('opacity', 0));
    }
  });

  // ---------------------------------------------------------------- XRD calculators
  VIZ.register('xrd-calc', {
    title: 'Bragg and Scherrer calculators', kind: 'Calculator',
    mount(body, api) {
      let tab = 'b';
      const top = api.controls();
      api.segmented([{ value: 'b', label: "Bragg's law" }, { value: 's', label: 'Scherrer size' }], tab, (v) => { tab = v; show(); }, top);
      const B = api.el('div', null, body), S = api.el('div', null, body);
      // Bragg
      const bs = { solve: 'd', n: 1, lam: 0.9, th: 7, d: 3.69 };
      const bc = api.controls(B);
      api.select({ label: 'Solve for', value: 'd', options: [{ value: 'd', label: 'plane spacing d' }, { value: 'th', label: 'angle θ' }, { value: 'lam', label: 'wavelength λ' }] }, (v) => { bs.solve = v; calcB(); }, bc);
      const bn = api.number({ label: 'order n', value: 1, step: 1, min: 1 }, (v) => { bs.n = v; calcB(); }, bc);
      const bl = api.number({ label: 'λ', value: 0.9, step: 0.001, unit: 'Å' }, (v) => { bs.lam = v; calcB(); }, bc);
      const bt = api.number({ label: 'θ', value: 7, step: 0.01, unit: '°' }, (v) => { bs.th = v; calcB(); }, bc);
      const bd = api.number({ label: 'd', value: 3.69, step: 0.001, unit: 'Å' }, (v) => { bs.d = v; calcB(); }, bc);
      api.button('Slide example: λ 0.9 Å, θ 7°', () => { Object.assign(bs, { solve: 'd', n: 1, lam: 0.9, th: 7 }); bc.querySelector('select').value = 'd'; bn.set(1); bl.set(0.9); bt.set(7); calcB(); }, api.controls(B));
      const bout = api.caption('', B);
      function calcB() {
        const { n, lam, th, d } = bs; let html;
        [bl, bt, bd].forEach((f) => { f.input.disabled = false; f.el.style.opacity = 1; });
        const off = { d: bd, th: bt, lam: bl }[bs.solve]; off.input.disabled = true; off.el.style.opacity = 0.55;
        if (bs.solve === 'd') { const v = n * lam / (2 * Math.sin(th * RAD)); bd.set(v.toFixed(4)); html = `d = nλ / (2 sin θ) = ${n} × ${lam} / (2 × sin ${th}°) = ${n * lam} / (2 × ${Math.sin(th * RAD).toFixed(4)}) = <b>${v.toFixed(3)} Å</b>`; }
        else if (bs.solve === 'th') { const x = n * lam / (2 * d); if (x > 1) html = `nλ / 2d = ${x.toFixed(3)} &gt; 1: this reflection cannot occur.`; else { const v = Math.asin(x) / RAD; bt.set(v.toFixed(3)); html = `sin θ = nλ / 2d = ${x.toFixed(4)}, so θ = <b>${v.toFixed(2)}°</b> (2θ = ${(2 * v).toFixed(2)}°)`; } }
        else { const v = 2 * d * Math.sin(th * RAD) / n; bl.set(v.toFixed(4)); html = `λ = 2d sin θ / n = 2 × ${d} × sin ${th}° / ${n} = <b>${v.toFixed(3)} Å</b>`; }
        bout.set(html + (bs.solve === 'd' && Math.abs(lam - 0.9) < 1e-9 && Math.abs(th - 7) < 1e-9 ? '. The slide writes 3.69 × 10⁻¹⁰ "cm"; it should be <b>m</b> (3.69 Å).' : ''));
      }
      // Scherrer
      const ss = { tt: 21.61, fw: 2.51, k: 0.94, lam: 1.5406 };
      const sc = api.controls(S);
      const f1 = api.number({ label: '2θ', value: ss.tt, step: 0.01, unit: '°' }, (v) => { ss.tt = v; calcS(); }, sc);
      const f2 = api.number({ label: 'FWHM', value: ss.fw, step: 0.01, unit: '°' }, (v) => { ss.fw = v; calcS(); }, sc);
      const f3 = api.number({ label: 'K', value: ss.k, step: 0.01 }, (v) => { ss.k = v; calcS(); }, sc);
      const f4 = api.number({ label: 'λ', value: ss.lam, step: 0.0001, unit: 'Å' }, (v) => { ss.lam = v; calcS(); }, sc);
      api.button('Slide example (K 0.94 → 3.36 nm; set K 0.9 → 3.22 nm)', () => { Object.assign(ss, { tt: 21.61, fw: 2.51, k: 0.94, lam: 1.5406 }); f1.set(21.61); f2.set(2.51); f3.set(0.94); f4.set(1.5406); calcS(); }, api.controls(S));
      const sro = api.readouts(S);
      const s1 = api.readout('θ', sro), s2 = api.readout('β (radians)', sro), s3 = api.readout('cos θ', sro), s4 = api.readout('D', sro);
      const sout = api.caption('', S);
      function calcS() {
        const th = ss.tt / 2, b = ss.fw * RAD, c = Math.cos(th * RAD), Dnm = ss.k * (ss.lam / 10) / (b * c);
        s1.set(th.toFixed(3) + '°'); s2.set(b.toFixed(6)); s3.set(c.toFixed(6)); s4.set('<b>' + (isFinite(Dnm) ? Dnm.toFixed(2) + ' nm' : '—') + '</b>');
        sout.set(`D = Kλ / (β cos θ) = ${ss.k} × ${(ss.lam / 10).toFixed(5)} nm / (${b.toFixed(6)} × ${c.toFixed(6)}) = <b>${isFinite(Dnm) ? Dnm.toFixed(2) : '—'} nm</b>. Remember: halve 2θ for θ, and convert FWHM to radians.`);
      }
      function show() { B.hidden = tab !== 'b'; S.hidden = tab !== 's'; }
      calcB(); calcS(); show();
    }
  });

  // ---------------------------------------------------------------- size hierarchy
  VIZ.register('size-hierarchy', {
    title: 'Particle, grain, crystallite, unit cell', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 320', body, 'Nested size levels of a powder particle');
      const g = api.svg('g', null, s);
      const lab = T(api, s, 320, 306, '', { fill: C.white, 'font-size': 13 });
      const rnd = (i, k) => { const x = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453; return x - Math.floor(x); };
      const L = [
        { n: 'Particle', tool: 'TEM', d: 'A <b>particle</b> is a single crystal or an agglomerate of several grains. Particle size is measured by <b>TEM</b> and is always ≥ crystallite size.' },
        { n: 'Grain', tool: 'SEM', d: 'During growth many nucleation centres start at once, so a particle is split into <b>grains</b>. Each grain holds several crystallites. Grain size comes from <b>SEM</b>.' },
        { n: 'Crystallite', tool: 'XRD (Scherrer)', d: 'A <b>crystallite</b> is the part of a crystal that diffracts X-rays <b>coherently</b>: one uninterrupted lattice. Its size comes from XRD peak width with <b>Scherrer</b>.' },
        { n: 'Unit cell', tool: 'XRD (Bragg)', d: 'The <b>unit cell</b> is the smallest repeating box of atoms. Bragg peak positions give its dimensions. Order: <b>particle ≥ grain ≥ crystallite &gt; unit cell</b> (the slide prints it backwards).' },
      ];
      let lv = 0;
      function scene() {
        g.innerHTML = '';
        if (lv === 0) {
          api.svg('circle', { cx: 320, cy: 150, r: 130, fill: 'rgba(255,181,107,0.1)', stroke: C.cat, 'stroke-width': 2 }, g);
          for (let i = 0; i < 18; i++) { const a = rnd(i, 1) * 6.28, r = Math.sqrt(rnd(i, 2)) * 100; api.svg('circle', { cx: 320 + Math.cos(a) * r, cy: 150 + Math.sin(a) * r, r: 26, fill: 'rgba(255,181,107,0.12)', stroke: 'rgba(255,181,107,0.5)' }, g); }
        } else if (lv === 1) {
          for (let i = 0; i < 9; i++) { const cx = 190 + (i % 3) * 130, cy = 40 + Math.floor(i / 3) * 90; api.svg('polygon', { points: [0, 1, 2, 3, 4, 5].map((k) => { const a = k * 1.047 + rnd(i, 3); return `${cx + Math.cos(a) * 56},${cy + 45 + Math.sin(a) * 44}`; }).join(' '), fill: i === 4 ? 'rgba(124,192,255,0.2)' : 'rgba(255,181,107,0.1)', stroke: i === 4 ? C.e : 'rgba(255,181,107,0.6)', 'stroke-width': 1.5 }, g); }
        } else if (lv === 2) {
          for (let i = 0; i < 4; i++) {
            const ox = i % 2 ? 330 : 170, oy = i < 2 ? 30 : 160, ang = [0, 25, -30, 60][i];
            const cl = api.svg('g', { transform: `translate(${ox + 70},${oy + 60}) rotate(${ang})` }, g);
            api.svg('rect', { x: -70, y: -58, width: 140, height: 116, rx: 10, fill: i === 1 ? 'rgba(134,212,169,0.12)' : 'rgba(124,192,255,0.08)', stroke: i === 1 ? C.good : C.e }, cl);
            for (let y = -50; y <= 50; y += 14) api.svg('line', { x1: -62, x2: 62, y1: y, y2: y, stroke: 'rgba(255,255,255,0.18)' }, cl);
          }
        } else {
          for (let i = 0; i < 9; i++) for (let j = 0; j < 6; j++) api.svg('circle', { cx: 160 + i * 40, cy: 50 + j * 40, r: 8, fill: C.metal }, g);
          api.svg('rect', { x: 280, y: 130, width: 40, height: 40, fill: 'rgba(233,196,106,0.15)', stroke: C.warn, 'stroke-width': 2.5 }, g);
          T(api, g, 300, 196, 'unit cell', { fill: C.warn, 'font-size': 12 });
        }
        lab.textContent = `${L[lv].n} · measured by ${L[lv].tool}`;
        cap.set(L[lv].d);
        api.tween(0.5, (q) => { g.setAttribute('opacity', q); g.setAttribute('transform', `translate(320,150) scale(${0.85 + 0.15 * q}) translate(-320,-150)`); });
      }
      const seg = api.segmented(L.map((x, i) => ({ value: i, label: x.n })), lv, (v) => { lv = v; scene(); }, api.controls());
      const ctl = api.controls(); api.button('Zoom in →', () => { lv = (lv + 1) % 4; seg.set(lv); scene(); }, ctl, { primary: true });
      const cap = api.caption('');
      scene();
    }
  });
})();
