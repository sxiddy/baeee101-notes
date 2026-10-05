/* Module 2 diagrams: solar */
(function () {
  'use strict';
  const MONO = 'JetBrains Mono, ui-monospace, monospace';
  function T(api, p, x, y, s, o) { return api.svg('text', Object.assign({ x, y, 'font-size': 13, fill: api.C.text, 'text-anchor': 'middle', text: s }, o || {}), p); }
  function poly(pts, t) {
    let L = 0; const seg = [];
    for (let i = 1; i < pts.length; i++) { const d = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); seg.push(d); L += d; }
    let d = api_clamp01(t) * L;
    for (let i = 0; i < seg.length; i++) { if (d <= seg[i]) { const f = d / seg[i]; return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * f, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * f]; } d -= seg[i]; }
    return pts[pts.length - 1];
  }
  function api_clamp01(t) { return Math.max(0, Math.min(1, t)); }

  // ---------------------------------------------------------------- p-n junction
  VIZ.register('pn-junction', {
    title: 'Silicon PV cell: how light becomes current', kind: 'Animation',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 360', body, 'Cross-section of a p-n junction solar cell');
      const L = 150, R = 490, nTop = 110, jn = 165, dep = 22, pBot = 300;
      api.svg('rect', { x: L, y: nTop, width: R - L, height: jn - nTop, fill: 'rgba(124,192,255,0.16)', stroke: C.line2 }, s);
      api.svg('rect', { x: L, y: jn, width: R - L, height: pBot - jn, fill: 'rgba(255,141,161,0.12)', stroke: C.line2 }, s);
      api.svg('rect', { x: L, y: jn - dep / 2, width: R - L, height: dep, fill: 'rgba(233,196,106,0.14)' }, s);
      T(api, s, R + 12, 140, 'n-type Si', { 'text-anchor': 'start', fill: C.e });
      T(api, s, R + 12, jn + 4, 'depletion layer', { 'text-anchor': 'start', fill: C.warn, 'font-size': 12 });
      T(api, s, R + 12, 250, 'p-type Si', { 'text-anchor': 'start', fill: C.hole });
      for (let x = L + 20; x < R; x += 40) { T(api, s, x, jn - 1, '+', { fill: C.e, 'font-size': 12 }); T(api, s, x + 20, jn + 10, '−', { fill: C.hole, 'font-size': 12 }); }
      T(api, s, L - 16, jn + 4, 'E', { fill: C.warn, 'font-style': 'italic', 'text-anchor': 'end' });
      // contacts & circuit
      for (let x = L + 30; x < R; x += 80) api.svg('rect', { x, y: nTop - 8, width: 20, height: 8, fill: C.metal }, s);
      api.svg('rect', { x: L, y: pBot, width: R - L, height: 8, fill: C.metal }, s);
      const circ = [[R - 30, nTop - 8], [R - 30, 60], [590, 60], [590, 330], [320, 330], [320, 308]];
      api.svg('polyline', { points: circ.map((p) => p.join(',')).join(' '), fill: 'none', stroke: C.line2, 'stroke-width': 3 }, s);
      const bulb = api.svg('circle', { cx: 590, cy: 190, r: 16, fill: C.surface2, stroke: C.photon, 'stroke-width': 2 }, s);
      T(api, s, 590, 225, 'load', { fill: C.dim, 'font-size': 12 });
      const layer = api.svg('g', null, s);
      const cur = [];
      for (let i = 0; i < 10; i++) cur.push({ t: i / 10, n: api.svg('circle', { r: 4, fill: C.e }, layer) });
      const events = [];
      let rate = 3, acc = 0, amps = 0;
      api.slider({ label: 'Light intensity', min: 0, max: 10, step: 1, value: rate, format: (v) => (v * 10) + '%' }, (v) => { rate = v; }, api.controls());
      const ro = api.readouts();
      const rI = api.readout('Current (relative)', ro), rE = api.readout('Electrons go to', ro, 'n side → top contact'), rH = api.readout('Holes go to', ro, 'p side → back contact');
      api.caption('A photon with energy above the band gap makes an <b>electron–hole pair</b>. The built-in field of the depletion layer sweeps the <b>electron to the n side</b> and the <b>hole to the p side</b>. Electrons leave by the top contact, do work in the load, and return through the back contact to fill holes.');
      function spawn() {
        const x = L + 30 + Math.random() * (R - L - 60), y = jn + 10 + Math.random() * 60;
        const g = api.svg('g', null, layer);
        const ph = api.svg('path', { d: '', stroke: C.photon, 'stroke-width': 2, fill: 'none' }, g);
        const e = api.svg('circle', { r: 4.5, fill: C.e, opacity: 0 }, g);
        const h = api.svg('circle', { r: 5, fill: 'none', stroke: C.hole, 'stroke-width': 2, opacity: 0 }, g);
        events.push({ x, y, t: 0, g, ph, e, h });
      }
      api.loop((dt) => {
        if (api.reduced) dt = dt * 0.3;
        acc += rate * dt * 0.8;
        while (acc > 1) { acc--; if (events.length < 24) spawn(); }
        for (let i = events.length - 1; i >= 0; i--) {
          const ev = events[i]; ev.t += dt;
          if (ev.t < 0.5) { const k = ev.t / 0.5, y0 = 20, y = y0 + (ev.y - y0) * k; ev.ph.setAttribute('d', `M${ev.x - 6} ${y - 30} q3 5 0 10 q-3 5 0 10 q3 5 0 10`); ev.ph.setAttribute('transform', `translate(0,${(y - y0) * 0.0})`); ev.ph.setAttribute('d', `M${ev.x} ${y - 24} l3 6 l-6 6 l6 6 l-3 6`); }
          else {
            ev.ph.setAttribute('d', '');
            const k = Math.min(1, (ev.t - 0.5) / 1.1);
            ev.e.setAttribute('opacity', 1); ev.h.setAttribute('opacity', 1 - Math.max(0, k - 0.8) * 5);
            ev.e.setAttribute('cx', ev.x); ev.e.setAttribute('cy', ev.y + (nTop + 6 - ev.y) * k);
            ev.h.setAttribute('cx', ev.x + 8); ev.h.setAttribute('cy', ev.y + (pBot - 8 - ev.y) * k);
            if (k >= 1) { ev.g.remove(); events.splice(i, 1); amps += 1; }
          }
        }
        amps *= Math.pow(0.5, dt);
        const sp = 0.05 + rate * 0.02;
        cur.forEach((c) => { c.t = (c.t + dt * sp) % 1; const [x, y] = poly(circ, c.t); c.n.setAttribute('cx', x); c.n.setAttribute('cy', y); c.n.setAttribute('opacity', rate ? 1 : 0); });
        bulb.setAttribute('fill', rate ? api.wavelengthToColor(580, 0.15 + rate * 0.07) : C.surface2);
        rI.set('█'.repeat(Math.round(rate)) + '░'.repeat(10 - Math.round(rate)));
      });
    }
  });

  // ---------------------------------------------------------------- DSSC
  VIZ.register('dssc', {
    title: 'Dye-sensitized solar cell: one full cycle', kind: 'Step-through',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 380', body, 'Grätzel cell cycle');
      // layers (left to right): glass/FTO | TiO2 + dye | electrolyte | counter electrode | glass
      const Lx = { fto: 60, tio: 90, ely: 250, ce: 470, glass2: 500 };
      api.svg('rect', { x: 40, y: 60, width: 20, height: 250, fill: 'rgba(180,200,220,0.2)', stroke: C.line2 }, s);
      api.svg('rect', { x: 60, y: 60, width: 30, height: 250, fill: 'rgba(124,192,255,0.3)' }, s);
      const tio = api.svg('rect', { x: 90, y: 60, width: 160, height: 250, fill: 'rgba(240,240,245,0.10)', stroke: C.line2 }, s);
      for (let i = 0; i < 40; i++) { const x = 100 + (i % 8) * 19, y = 75 + Math.floor(i / 8) * 48; api.svg('circle', { cx: x, cy: y, r: 8, fill: 'rgba(230,230,235,0.22)' }, s); api.svg('circle', { cx: x + 7, cy: y - 6, r: 3, fill: '#c0405a' }, s); }
      const ely = api.svg('rect', { x: 250, y: 60, width: 220, height: 250, fill: 'rgba(233,196,106,0.10)', stroke: C.line2 }, s);
      const ce = api.svg('rect', { x: 470, y: 60, width: 22, height: 250, fill: C.graphite }, s);
      api.svg('rect', { x: 492, y: 60, width: 20, height: 250, fill: 'rgba(180,200,220,0.2)', stroke: C.line2 }, s);
      T(api, s, 50, 330, 'glass', { 'font-size': 11, fill: C.dim }); T(api, s, 75, 345, 'FTO', { 'font-size': 11, fill: C.e });
      T(api, s, 170, 330, 'TiO₂ + dye', { 'font-size': 12, fill: C.white }); T(api, s, 360, 330, 'I⁻ / I₃⁻ electrolyte', { 'font-size': 12, fill: C.warn });
      T(api, s, 482, 345, 'Pt / graphite', { 'font-size': 11, fill: C.dim });
      const circ = [[75, 60], [75, 30], [320, 30], [481, 30], [481, 60]];
      api.svg('polyline', { points: circ.map((p) => p.join(',')).join(' '), fill: 'none', stroke: C.line2, 'stroke-width': 3 }, s);
      const bulb = api.svg('circle', { cx: 280, cy: 30, r: 13, fill: C.surface2, stroke: C.photon, 'stroke-width': 2 }, s);
      const mark = api.svg('g', null, s);
      const photon = api.svg('path', { d: '', stroke: C.photon, 'stroke-width': 2.5, fill: 'none' }, mark);
      const dot = api.svg('circle', { r: 6, fill: C.e, opacity: 0 }, mark);
      const ion = api.svg('g', { opacity: 0 }, mark);
      api.svg('rect', { x: -20, y: -11, width: 40, height: 22, rx: 11, fill: C.warn }, ion);
      const ionT = T(api, ion, 0, 5, 'I₃⁻', { 'font-size': 12, fill: '#151517', 'font-weight': 600 });
      const glow = api.svg('circle', { cx: 177, cy: 164, r: 0, fill: 'rgba(255,224,122,0.35)' }, mark);
      const eqBox = T(api, s, 320, 372, '', { fill: C.white, 'font-family': MONO, 'font-size': 13 });
      const steps = [
        { h: tio, eq: 'Dye + hν → Dye*', txt: '<b>1 · Light absorption.</b> A photon passes through the glass, FTO and TiO₂ and is absorbed by a dye molecule, which jumps to its excited state Dye*.' },
        { h: tio, eq: 'Dye* → Dye⁺ + e⁻ (TiO₂)', txt: '<b>2 · Electron injection.</b> Within nanoseconds the excited electron drops into the conduction band of TiO₂, which lies just below Dye*. The dye is now oxidised (Dye⁺).' },
        { h: bulb, eq: 'e⁻: TiO₂ → FTO → load → counter electrode', txt: '<b>3 · Transport and collection.</b> The electron hops through the porous TiO₂ to the FTO, then round the external circuit, lighting the bulb, to the counter electrode.' },
        { h: ce, eq: 'I₃⁻ + 2e⁻ → 3I⁻', txt: '<b>4 · Reduction at the counter electrode.</b> On Pt or graphite, the returning electrons reduce tri-iodide back to iodide.' },
        { h: ely, eq: '2Dye⁺ + 3I⁻ → 2Dye + I₃⁻', txt: '<b>5 · Dye regeneration.</b> Iodide diffuses to the oxidised dye and gives it back an electron, forming I₃⁻ again. The cycle is closed and nothing is used up.' },
      ];
      let i = 0, t = 0, playing = !api.reduced;
      const cap = api.caption('');
      const ctl = api.controls();
      api.button('← Back', () => go(i - 1), ctl);
      const pb = api.button(playing ? 'Pause' : 'Play', () => { playing = !playing; pb.textContent = playing ? 'Pause' : 'Play'; }, ctl, { primary: true });
      api.button('Next →', () => go(i + 1), ctl);
      const dots = api.stepper(steps.length, (k) => go(k));
      function go(k) { i = (k + steps.length) % steps.length; t = 0; paint(); }
      function paint() {
        [tio, ely, ce].forEach((r) => r.setAttribute('stroke-width', 1));
        steps[i].h.setAttribute('stroke-width', 3); steps[i].h.setAttribute('stroke', C.white);
        [tio, ely].forEach((r) => { if (r !== steps[i].h) r.setAttribute('stroke', C.line2); });
        cap.set(steps[i].txt); eqBox.textContent = steps[i].eq; dots.set(i);
      }
      paint();
      api.loop((dt) => {
        if (playing) { t += dt; if (t > 2.6) go(i + 1); }
        const k = Math.min(1, t / 1.6);
        photon.setAttribute('d', ''); dot.setAttribute('opacity', 0); ion.setAttribute('opacity', 0); glow.setAttribute('r', 0);
        bulb.setAttribute('fill', C.surface2);
        if (i === 0) { const x = 10 + 167 * k; photon.setAttribute('d', `M${x - 30} 164 l6 -5 l6 10 l6 -10 l6 10 l6 -5`); if (k > 0.9) glow.setAttribute('r', 16); }
        if (i === 1) { glow.setAttribute('r', 12 * (1 - k)); dot.setAttribute('opacity', 1); dot.setAttribute('cx', 177 - 60 * k); dot.setAttribute('cy', 164 - 20 * k); }
        if (i === 2) { dot.setAttribute('opacity', 1); const path = [[117, 144], [75, 144], ...circ]; const [x, y] = poly(path, k); dot.setAttribute('cx', x); dot.setAttribute('cy', y); if (k > 0.45 && k < 0.8) bulb.setAttribute('fill', 'rgba(255,224,122,0.6)'); }
        if (i === 3) { ion.setAttribute('opacity', 1); ionT.textContent = k < 0.6 ? 'I₃⁻' : '3I⁻'; ion.setAttribute('transform', `translate(${440},${200})`); dot.setAttribute('opacity', k < 0.6 ? 1 : 0); dot.setAttribute('cx', 470 - 10 * k); dot.setAttribute('cy', 90 + 110 * k); }
        if (i === 4) { ion.setAttribute('opacity', 1); ionT.textContent = k < 0.7 ? '3I⁻' : 'I₃⁻'; ion.setAttribute('transform', `translate(${440 - 250 * Math.min(1, k * 1.3)},${200 - 36 * k})`); }
      });
    }
  });

  // ---------------------------------------------------------------- solar routes
  VIZ.register('solar-routes', {
    title: 'Ways to tap solar energy', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 360', body, 'Tree of solar energy conversion methods');
      const nodes = [
        { id: 'root', x: 320, y: 30, t: 'Solar energy', d: 'Theoretical potential 1.2 × 10⁵ TW; practical ≈ 600 TW. One hour of sunlight ≈ 14 TW for a year.' },
        { id: 'A', p: 'root', x: 80, y: 110, t: 'A · Photosynthesis', eta: [2, 4], d: 'Plants, using visible light. η = 2–4%.' },
        { id: 'B', p: 'root', x: 240, y: 110, t: 'B · Water heaters', d: 'Flat-plate and tube collectors, using IR radiation (heat, not electricity).' },
        { id: 'Cc', p: 'root', x: 400, y: 110, t: 'C · PV cells', eta: [12, 26], d: 'p/n Si, GaAs, using visible light. η = 12–26%.' },
        { id: 'D', p: 'root', x: 560, y: 110, t: 'D · Chemical routes', d: 'Store sunlight as chemical energy or drive redox with a semiconductor.' },
        { id: 'D1', p: 'D', x: 420, y: 190, t: 'D1 · Biomimetism', d: 'Mimicking photosynthesis with chemicals.' },
        { id: 'D2', p: 'D', x: 565, y: 190, t: 'D2 · PEC cells', d: 'Photoelectrochemical cells: a semiconductor in an electrolyte.' },
        { id: 'a', p: 'D2', x: 220, y: 270, t: 'a · LJSC', d: 'Liquid junction solar cells: sunlight → electricity.' },
        { id: 'b', p: 'D2', x: 505, y: 270, t: 'b · PES cells', d: 'Photoelectrosynthesis: sunlight → fuels (chemical energy).' },
        { id: 'a1', p: 'a', x: 140, y: 340, t: 'Sc/Elect/M', eta: [13, 14], d: 'Semiconductor | electrolyte | metal. η = 13–14%.' },
        { id: 'a2', p: 'a', x: 285, y: 340, t: 'Photogalvanic', eta: [0.01, 0.01], d: 'Metal | electrolyte | metal. η = 0.01%.' },
        { id: 'b1', p: 'b', x: 435, y: 340, t: 'Photoelectrolysis', eta: [13.3, 13.3], d: 'Photoassisted electrolysis cells. η = 13.3%.' },
        { id: 'b2', p: 'b', x: 568, y: 340, t: 'Electrosynthesis', d: 'Photoassisted electrosynthesis: CO₂ → CH₃OH, N₂ → NH₃.' },
      ];
      const byId = {}; nodes.forEach((n) => { byId[n.id] = n; });
      const lines = api.svg('g', null, s);
      nodes.forEach((n) => { if (!n.p) return; const p = byId[n.p]; n.line = api.svg('path', { d: `M${p.x} ${p.y + 12} C${p.x} ${(p.y + n.y) / 2}, ${n.x} ${(p.y + n.y) / 2}, ${n.x} ${n.y - 12}`, fill: 'none', stroke: C.line2, 'stroke-width': 1.5 }, lines); });
      const cap = api.caption('');
      let sel = 'root';
      nodes.forEach((n) => {
        const g = api.svg('g', { transform: `translate(${n.x},${n.y})`, style: 'cursor:pointer', tabindex: 0, role: 'button' }, s);
        const w = Math.max(84, n.t.length * 7.2 + 16);
        n.box = api.svg('rect', { x: -w / 2, y: -13, width: w, height: 26, rx: 8, fill: C.surface2, stroke: n.eta ? C.good : C.line2, 'stroke-width': 1.5 }, g);
        T(api, g, 0, 5, n.t, { 'font-size': 12, fill: C.white });
        const pick = () => { sel = n.id; paint(); };
        g.addEventListener('click', pick); g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); } });
      });
      function chain(id) { const out = new Set(); let c = byId[id]; while (c) { out.add(c.id); c = byId[c.p]; } return out; }
      function paint() {
        const on = chain(sel);
        nodes.forEach((n) => { n.box.setAttribute('fill', on.has(n.id) ? (n.id === sel ? C.white : C.surface) : C.surface2); n.box.parentNode.querySelector('text').setAttribute('fill', n.id === sel ? '#151517' : C.white); if (n.line) { n.line.setAttribute('stroke', on.has(n.id) ? C.white : C.line2); } });
        cap.set(`<b>${byId[sel].t}.</b> ${byId[sel].d} <span style="color:#80808a">Green outline = has an efficiency figure. Click any box.</span>`);
      }
      paint();
      // efficiency comparison bars
      const s2 = api.stage('0 0 640 150', body, 'Efficiency comparison');
      const bars = nodes.filter((n) => n.eta).sort((a, b) => b.eta[1] - a.eta[1]);
      bars.forEach((n, k) => {
        const y = 14 + k * 26;
        T(api, s2, 150, y + 12, n.t, { 'text-anchor': 'end', 'font-size': 12, fill: C.dim });
        api.svg('rect', { x: 160, y, width: 420, height: 16, rx: 4, fill: C.surface2 }, s2);
        const b = api.svg('rect', { x: 160, y, width: 0, height: 16, rx: 4, fill: C.good }, s2);
        T(api, s2, 590, y + 12, n.eta[0] === n.eta[1] ? n.eta[0] + '%' : n.eta[0] + '–' + n.eta[1] + '%', { 'text-anchor': 'start', 'font-size': 12, 'font-family': MONO, fill: C.white });
        api.tween(0.9 + k * 0.1, (q) => b.setAttribute('width', Math.max(2, 420 * n.eta[1] / 26 * q)));
      });
    }
  });
})();
