/* Module 3 diagrams: nanomaterials and coolants */
(function () {
  'use strict';
  const MONO = 'JetBrains Mono, ui-monospace, monospace';
  function T(api, p, x, y, s, o) { return api.svg('text', Object.assign({ x, y, 'font-size': 13, fill: api.C.text, 'text-anchor': 'middle', text: s }, o || {}), p); }
  function nm(v) { if (v >= 1e6) return (v / 1e6).toFixed(v >= 1e7 ? 0 : 1) + ' mm'; if (v >= 1e3) return (v / 1e3).toFixed(v >= 1e4 ? 0 : 1) + ' µm'; return (v >= 10 ? Math.round(v) : v.toFixed(1)) + ' nm'; }

  // ---------------------------------------------------------------- nano scale
  VIZ.register('nano-scale', {
    title: 'How small is a nanometre?', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 260', body, 'Logarithmic size ruler from millimetres to atoms');
      const lo = -1, hi = 6, X0 = 40, X1 = 600, Y = 150;
      const X = (lg) => X0 + (lg - lo) / (hi - lo) * (X1 - X0);
      api.svg('rect', { x: X(0), y: Y - 26, width: X(2) - X(0), height: 52, rx: 8, fill: 'rgba(134,212,169,0.12)', stroke: 'rgba(134,212,169,0.4)' }, s);
      T(api, s, (X(0) + X(2)) / 2, Y + 48, 'nanoscale 1–100 nm', { fill: C.good, 'font-size': 12 });
      api.svg('line', { x1: X0, x2: X1, y1: Y, y2: Y, stroke: C.line2, 'stroke-width': 2 }, s);
      for (let k = lo; k <= hi; k++) { api.svg('line', { x1: X(k), x2: X(k), y1: Y - 6, y2: Y + 6, stroke: C.dim }, s); T(api, s, X(k), Y + 22, k < 0 ? '0.1 nm' : nm(Math.pow(10, k)), { 'font-size': 11, fill: C.dim, 'font-family': MONO }); }
      const items = [
        { v: 0.1, t: 'atom' }, { v: 1, t: '10 atoms' }, { v: 2, t: 'DNA width' }, { v: 5, t: 'quantum dot' },
        { v: 100, t: 'virus' }, { v: 1000, t: 'bacterium' }, { v: 7000, t: 'red blood cell' }, { v: 80000, t: 'human hair' }, { v: 1e6, t: '1 mm' },
      ];
      items.forEach((it, i) => {
        const x = X(Math.log10(it.v)), lv = [44, 66, 88][i % 3];
        api.svg('circle', { cx: x, cy: Y, r: 4, fill: C.white }, s);
        api.svg('line', { x1: x, x2: x, y1: Y, y2: Y - lv, stroke: C.faint }, s);
        T(api, s, x, Y - lv - 6, it.t, { 'font-size': 12, fill: C.text });
      });
      const mk = api.svg('g', null, s);
      api.svg('path', { d: 'M0 -40 L-7 -52 H7 Z', fill: C.photon, transform: `translate(0,${Y + 10})` }, mk);
      api.svg('line', { x1: 0, x2: 0, y1: Y - 30, y2: Y + 30, stroke: C.photon, 'stroke-width': 2 }, mk);
      let lg = Math.log10(5);
      api.slider({ label: 'Size', min: lo, max: hi, step: 0.01, value: lg, format: (v) => nm(Math.pow(10, v)) }, (v) => { lg = v; paint(); }, api.controls());
      const ro = api.readouts();
      const r1 = api.readout('In metres', ro), r2 = api.readout('Times smaller than a hair', ro), r3 = api.readout('Atoms across', ro), r4 = api.readout('Nanoscale?', ro);
      api.caption('1 nm = 10<sup>−9</sup> m, a millionth of a millimetre. An atom is about 0.1 nm, so <b>10 atoms side by side make 1 nm</b>. A hair (50,000–100,000 nm) is about <b>100,000 times</b> wider than a nanometre. A nanomaterial has at least one dimension below ~100 nm.');
      function paint() {
        const v = Math.pow(10, lg);
        mk.setAttribute('transform', `translate(${X(lg)},0)`);
        r1.set(api.sci(v * 1e-9, 2) + ' m'); r2.set(v < 80000 ? Math.round(80000 / v).toLocaleString() + '×' : '—'); r3.set(Math.round(v / 0.1).toLocaleString());
        r4.set(v <= 100 ? '<span style="color:#86d4a9">yes</span>' : 'no');
      }
      paint();
    }
  });

  // ---------------------------------------------------------------- 0D-3D
  VIZ.register('nano-dims', {
    title: 'Classifying by free dimensions', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 280', body, 'Nanomaterial dimensionality');
      const g = api.svg('g', { transform: 'translate(250,150)' }, s);
      const info = api.svg('g', { transform: 'translate(430,70)' }, s);
      const D = {
        0: { n: '0D', ex: ['Nanoparticles', 'Colloids', 'Quantum dots'], nano: [1, 1, 1] },
        1: { n: '1D', ex: ['Nanowires', 'Nanorods', 'Nanotubes', 'Biopolymers'], nano: [0, 1, 1] },
        2: { n: '2D', ex: ['Nanolayers', 'Surface coatings', 'Thin films'], nano: [0, 0, 1] },
        3: { n: '3D', ex: ['Nanoparticle dispersions', 'Nanowire / nanotube bundles', 'Multiple nanolayers'], nano: [0, 0, 0] },
      };
      let d = 1;
      const cap = api.caption('');
      api.segmented([0, 1, 2, 3].map((k) => ({ value: k, label: D[k].n })), d, (v) => { d = v; draw(); }, api.controls());
      function arrow(x1, y1, x2, y2, ok, lab) {
        const col = ok ? C.good : C.faint;
        api.svg('line', { x1, y1, x2, y2, stroke: col, 'stroke-width': 2, 'marker-end': api.arrow(s, col), 'marker-start': api.arrow(s, col) }, g);
        T(api, g, (x1 + x2) / 2 + (y1 === y2 ? 0 : -14), (y1 + y2) / 2 + (y1 === y2 ? 18 : 4), lab, { 'font-size': 11, fill: col, 'font-family': MONO });
      }
      function draw() {
        g.innerHTML = ''; info.innerHTML = '';
        const k = D[d], fillS = 'rgba(255,181,107,0.35)', st = C.cat;
        if (d === 0) { api.svg('circle', { r: 26, fill: fillS, stroke: st, 'stroke-width': 1.5 }, g); arrow(-26, 40, 26, 40, 1, '< 100 nm'); }
        if (d === 1) { api.svg('rect', { x: -170, y: -12, width: 340, height: 24, rx: 12, fill: fillS, stroke: st, 'stroke-width': 1.5 }, g); arrow(-170, 36, 170, 36, 0, 'long'); arrow(-186, -12, -186, 12, 1, 'nano'); }
        if (d === 2) { api.svg('path', { d: 'M-160 -30 L60 -70 L170 -10 L-50 30 Z', fill: fillS, stroke: st, 'stroke-width': 1.5 }, g); api.svg('path', { d: 'M-50 30 L-50 38 L170 -2 L170 -10', fill: 'rgba(255,181,107,0.6)' }, g); arrow(-160, 60, 60, 20, 0, 'large'); arrow(190, -10, 190, -2, 1, 'thin'); }
        if (d === 3) { for (let i = 0; i < 6; i++) for (let j = 0; j < 4; j++) api.svg('rect', { x: -110 + i * 36, y: -70 + j * 36, width: 28, height: 28, rx: 14, fill: fillS, stroke: st }, g); arrow(-110, 84, 106, 84, 0, 'bulk'); }
        T(api, info, 0, 0, k.n + ' nanomaterial', { 'text-anchor': 'start', fill: C.white, 'font-size': 16, 'font-weight': 600 });
        const ax = ['length', 'width', 'thickness'];
        ax.forEach((a, i) => T(api, info, 0, 28 + i * 20, `${a}: ${k.nano[i] ? 'nanoscale' : 'outside nanoscale'}`, { 'text-anchor': 'start', 'font-size': 12, fill: k.nano[i] ? C.good : C.dim }));
        k.ex.forEach((e, i) => T(api, info, 0, 104 + i * 20, '· ' + e, { 'text-anchor': 'start', 'font-size': 12, fill: C.text }));
        api.tween(0.35, (q) => g.setAttribute('opacity', q));
        cap.set(`<b>${k.n}:</b> ${3 - d} dimension${3 - d === 1 ? '' : 's'} in the nanoscale, ${d} outside it. The name counts how many dimensions are <b>free</b> (not nano).`);
      }
      draw();
    }
  });

  // ---------------------------------------------------------------- surface area / volume
  VIZ.register('sa-volume', {
    title: 'Cut a cube, grow its surface', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 300', body, 'Cube divided into smaller cubes');
      const g = api.svg('g', { transform: 'translate(320,150)' }, s);
      let n = 2, ex = 0;
      const S = 118, cx = 0.62, cy = 0.36; // isometric-ish projection
      const P = (x, y, z) => [(x - z) * cx * S, (-(y) + (x + z) * cy) * S];
      function face(pts, fill) { api.svg('polygon', { points: pts.map((p) => p.join(',')).join(' '), fill, stroke: '#151517', 'stroke-width': 1.2 }, g); }
      function draw() {
        g.innerHTML = '';
        const k = Math.min(n, 10), a = 1 / k, gap = ex * 0.06;
        const cubes = [];
        for (let i = 0; i < k; i++) for (let j = 0; j < k; j++) for (let l = 0; l < k; l++) cubes.push([i, j, l]);
        cubes.sort((A, B) => (A[0] + A[2] - A[1]) - (B[0] + B[2] - B[1]));
        const off = (k - 1) * (a + gap) / 2;
        cubes.forEach(([i, j, l]) => {
          const x = i * (a + gap) - off - 0.5, y = j * (a + gap) - off - 0.5, z = l * (a + gap) - off - 0.5;
          // only draw outer cubes when not exploded (speed)
          if (!gap && i < k - 1 && j < k - 1 && l < k - 1) return;
          face([P(x, y + a, z), P(x + a, y + a, z), P(x + a, y + a, z + a), P(x, y + a, z + a)], '#a8484a');
          face([P(x + a, y, z), P(x + a, y + a, z), P(x + a, y + a, z + a), P(x + a, y, z + a)], '#7e3436');
          face([P(x, y, z + a), P(x + a, y, z + a), P(x + a, y + a, z + a), P(x, y + a, z + a)], '#92393b');
        });
      }
      const ctl = api.controls();
      const sl = api.slider({ label: 'Cuts per edge (n)', min: 1, max: 10, step: 1, value: n, format: (v) => v + ' → ' + (v * v * v) + ' cubes' }, (v) => { n = v; big = false; api.tween(0.5, (q) => { ex = q; draw(); }); paint(); }, ctl);
      let big = false;
      api.button('Jump to 10 nm cubes', () => { big = true; paint(); }, ctl);
      const ro = api.readouts();
      const r1 = api.readout('Volume', ro), r2 = api.readout('Cube side', ro), r3 = api.readout('Total surface area', ro), r4 = api.readout('SA / V', ro);
      const cap = api.caption('');
      function paint() {
        const N = big ? 1e6 : n;
        r1.set('1 cm³ (unchanged)'); r2.set(big ? '10 nm' : api.fmt(1 / N, 3) + ' cm');
        r3.set(big ? '6 × 10<sup>6</sup> cm² = 600 m²' : (6 * N) + ' cm²'); r4.set(big ? '6 × 10<sup>6</sup> cm⁻¹' : (6 * N) + ' cm⁻¹');
        cap.set(big ? 'Cut a 1 cm cube into <b>10 nm</b> cubes (10<sup>6</sup> per edge) and the same metal exposes <b>600 m²</b>, about a tennis court. That is why nanoparticles are such good catalysts.'
          : `Area = 6 × (1/n)² × n³ = <b>6n cm²</b>. The slide's cases: n = 1 → 6, n = 2 → 12, n = 3 → 18 cm². Volume stays 1 cm³, so the <b>surface-to-volume ratio</b> climbs, giving better catalytic efficiency.`);
      }
      draw(); paint();
      api.tween(0.8, (q) => { ex = q; draw(); });
    }
  });

  // ---------------------------------------------------------------- gold colour
  VIZ.register('gold-color', {
    title: 'Bulk gold vs nano gold', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 280', body, 'Gold nanoparticle colour and surface plasmon resonance');
      const anchors = [[10, [150, 30, 45]], [25, [190, 32, 48]], [50, [60, 150, 80]], [100, [225, 130, 40]]];
      function col(d) { let a = anchors[0], b = anchors[anchors.length - 1]; for (let i = 0; i < anchors.length - 1; i++) if (d >= anchors[i][0] && d <= anchors[i + 1][0]) { a = anchors[i]; b = anchors[i + 1]; } const f = (d - a[0]) / Math.max(1, b[0] - a[0]); return a[1].map((v, i) => Math.round(v + (b[1][i] - v) * f)); }
      const glass = api.svg('rect', { x: 40, y: 40, width: 200, height: 200, rx: 14, stroke: C.line2, 'stroke-width': 1.5 }, s);
      const gl = T(api, s, 140, 262, '', { fill: C.dim, 'font-size': 12 });
      const p = api.svg('g', { transform: 'translate(440,140)' }, s);
      const cloud = api.svg('ellipse', { rx: 62, ry: 58, fill: 'rgba(124,192,255,0.22)', stroke: C.e, 'stroke-dasharray': '4 4' }, p);
      const core = api.svg('circle', { r: 50, fill: '#d4a93a' }, p);
      const plus = T(api, p, 0, 5, '', { fill: '#4a3500', 'font-size': 14, 'font-weight': 700 });
      const wave = api.svg('path', { fill: 'none', stroke: C.photon, 'stroke-width': 2 }, s);
      T(api, s, 300, 30, 'light', { fill: C.photon, 'font-size': 12 });
      const lab = T(api, s, 440, 250, '', { fill: C.dim, 'font-size': 12 });
      let d = 25, bulk = false;
      const ctl = api.controls();
      api.segmented([{ value: false, label: 'Nano gold' }, { value: true, label: 'Bulk gold' }], bulk, (v) => { bulk = v; paint(); }, ctl);
      const sl = api.slider({ label: 'Particle size in glass', min: 10, max: 100, step: 1, value: d, format: (v) => v + ' nm' }, (v) => { d = v; paint(); }, ctl);
      const ro = api.readouts();
      const r1 = api.readout('Colour (reflected)', ro), r2 = api.readout('Melting point', ro), r3 = api.readout('Behaves as', ro);
      const cap = api.caption('');
      function paint() {
        sl.el.style.opacity = bulk ? 0.4 : 1;
        if (bulk) {
          glass.setAttribute('fill', '#d4a93a'); gl.textContent = 'polished bulk gold: lustrous yellow';
          r1.set('shiny yellow'); r2.set('~1080 °C (slide)'); r3.set('inert metal, good conductor');
          cap.set('<b>Bulk gold</b> is lustrous, malleable, ductile, a good conductor of heat and electricity, dense, high-melting and inert to air and most reagents.');
        } else {
          const c = col(d); glass.setAttribute('fill', `rgb(${c.join(',')})`); gl.textContent = `gold nanoparticles (${d} nm) in glass`;
          const name = d < 38 ? 'red' : d < 75 ? 'green' : 'orange';
          r1.set(name); r2.set('~940 °C'); r3.set('very good catalyst');
          cap.set(`Nano gold is <b>never gold-coloured</b>. Light's electric field makes the surface electrons slosh back and forth together: <b>surface plasmon resonance</b>. Which colours are absorbed or reflected depends on <b>size, shape</b> and spacing. Slide values: 25 nm red, 50 nm green, 100 nm orange.`);
        }
        cloud.setAttribute('opacity', bulk ? 0 : 1); core.setAttribute('r', bulk ? 70 : 30 + d * 0.25); plus.textContent = bulk ? 'Au' : '+';
        lab.textContent = bulk ? 'bulk metal' : 'electron cloud oscillates against the core';
      }
      paint();
      api.loop((dt, t) => {
        const ph = api.reduced ? 0 : t * 5;
        wave.setAttribute('d', 'M260 60 ' + Array.from({ length: 40 }, (_, i) => `L${260 + i * 2.5} ${60 + Math.sin(ph - i * 0.35) * 10}`).join(' '));
        if (!bulk) cloud.setAttribute('cx', (Math.sin(ph) * 10).toFixed(2));
      });
    }
  });

  // ---------------------------------------------------------------- top-down vs bottom-up
  VIZ.register('topdown-bottomup', {
    title: 'Top-down vs bottom-up', kind: 'Animation',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 300', body, 'Breaking down bulk versus assembling atoms');
      api.svg('line', { x1: 320, x2: 320, y1: 30, y2: 280, stroke: C.line, 'stroke-dasharray': '4 4' }, s);
      T(api, s, 160, 26, 'Top-down: break it down', { fill: C.white, 'font-weight': 600 });
      T(api, s, 480, 26, 'Bottom-up: build it up', { fill: C.white, 'font-weight': 600 });
      const lL = T(api, s, 160, 285, '', { fill: C.cat, 'font-size': 12 }), lR = T(api, s, 480, 285, '', { fill: C.e, 'font-size': 12 });
      const A = [], B = [];
      const rnd = (i, k) => { const x = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453; return x - Math.floor(x); };
      for (let i = 0; i < 64; i++) {
        const gx = i % 8, gy = Math.floor(i / 8);
        A.push({ bx: 100 + gx * 15, by: 90 + gy * 15, px: 60 + (gx % 4) * 60 + rnd(i, 1) * 18, py: 70 + Math.floor(gy / 2) * 50 + rnd(i, 2) * 14, n: api.svg('rect', { width: 15, height: 15, fill: C.cat, stroke: '#151517' }, s) });
        const cl = i % 8, ccx = 380 + (cl % 4) * 60, ccy = 110 + Math.floor(cl / 4) * 90, ang = (Math.floor(i / 8)) / 8 * Math.PI * 2;
        B.push({ rx: 340 + rnd(i, 3) * 280, ry: 50 + rnd(i, 4) * 210, cx: ccx + Math.cos(ang) * 9, cy: ccy + Math.sin(ang) * 9, n: api.svg('circle', { r: 4, fill: C.e }, s) });
      }
      let t = 0, playing = !api.reduced;
      const ctl = api.controls();
      api.button('Replay', () => { t = 0; playing = true; }, ctl, { primary: true });
      api.caption('<b>Top-down</b> grinds or etches bulk material into smaller pieces (milling, etching, laser ablation, sputtering). Good for long-range order. <b>Bottom-up</b> assembles atoms and molecules into clusters and particles (sol–gel, CVD, chemical reduction, green synthesis). Best for short-range order and precise nanoscale assembly.');
      function draw() {
        const k = api.ease(Math.min(1, t / 3));
        A.forEach((a, i) => {
          const spread = Math.min(1, k * 1.4), shrink = Math.max(0, (k - 0.5) * 2);
          const x = a.bx + (a.px - a.bx) * spread, y = a.by + (a.py - a.by) * spread, w = 15 - 10 * shrink;
          a.n.setAttribute('x', x + (15 - w) / 2); a.n.setAttribute('y', y + (15 - w) / 2); a.n.setAttribute('width', w); a.n.setAttribute('height', w); a.n.setAttribute('rx', w / 2 * shrink);
        });
        B.forEach((b) => { b.n.setAttribute('cx', b.rx + (b.cx - b.rx) * k); b.n.setAttribute('cy', b.ry + (b.cy - b.ry) * k); });
        lL.textContent = k < 0.3 ? 'bulk' : k < 0.75 ? 'powder' : 'nanoparticles';
        lR.textContent = k < 0.3 ? 'atoms / molecules' : k < 0.75 ? 'nuclei / clusters' : 'nanoparticles';
      }
      draw();
      api.loop((dt) => { if (api.reduced) { t = 3; draw(); return; } if (playing) { t += dt; if (t > 4.5) playing = false; draw(); } });
    }
  });

  // ---------------------------------------------------------------- ball mill
  VIZ.register('ball-mill', {
    title: 'Mechanical (ball) milling', kind: 'Animation',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 300', body, 'Balls impacting powder inside a sealed vial');
      const cx = 200, cy = 150, R = 115;
      api.svg('circle', { cx, cy, r: R + 8, fill: C.surface2, stroke: C.metal, 'stroke-width': 3 }, s);
      const heat = api.svg('circle', { cx, cy, r: R, fill: 'rgba(255,123,92,0)' }, s);
      T(api, s, cx, cy + R + 28, 'sealed vial (shaken violently)', { fill: C.dim, 'font-size': 12 });
      const powder = Array.from({ length: 70 }, () => { const a = Math.random() * 6.28, r = Math.random() * (R - 12); return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r, n: api.svg('circle', { r: 4, fill: C.cat, opacity: 0.85 }, s) }; });
      const balls = Array.from({ length: 6 }, (_, i) => ({ x: cx + Math.cos(i) * 50, y: cy + Math.sin(i) * 50, vx: Math.cos(i * 2) * 220, vy: Math.sin(i * 2) * 220, n: api.svg('circle', { r: 17, fill: '#8a9099', stroke: '#c5cad2', 'stroke-width': 1.5 }, s) }));
      const flashes = [];
      let hrs = 0;
      const gfx = api.svg('g', { transform: 'translate(360,40)' }, s);
      const rows = [['Particle size', ''], ['Hot-spot temperature', ''], ['Fe contamination', ''], ['Phases', '']];
      const vals = rows.map((r, i) => { T(api, gfx, 0, 20 + i * 44, r[0], { 'text-anchor': 'start', fill: C.dim, 'font-size': 12 }); return T(api, gfx, 0, 40 + i * 44, '', { 'text-anchor': 'start', fill: C.white, 'font-size': 15, 'font-family': MONO }); });
      const warn = T(api, gfx, 0, 220, '', { 'text-anchor': 'start', fill: C.bad, 'font-size': 13, 'font-weight': 600 });
      api.slider({ label: 'Milling time', min: 0, max: 40, step: 1, value: 0, format: (v) => v + ' h' }, (v) => { hrs = v; paint(); }, api.controls());
      api.caption('~50 µm powder is sealed with hardened-steel or WC-coated balls (ball : powder mass 5 : 10 as printed) and shaken. Repeated impacts fracture and cold-weld the grains into <b>nanocrystalline, amorphous or quasicrystalline</b> phases. It is cheap with <b>high production rates</b>, but impacts heat the interphase to <b>100–200 °C</b>, the target size is hard to hit, and tools and air contaminate the powder. Mill in an inert glove box and keep runs short.');
      function size(h) { return 50000 * Math.exp(-h / 3.2) + 20 + 15 * Math.exp(-h / 20); }
      function paint() {
        const d = size(hrs);
        vals[0].textContent = d >= 1000 ? (d / 1000).toFixed(1) + ' µm' : Math.round(d) + ' nm';
        vals[1].textContent = hrs ? '100–200 °C' : 'room temperature';
        const fe = hrs <= 30 ? hrs / 30 * 2 : 2 + (hrs - 30) * 1.0;
        vals[2].textContent = (hrs > 30 ? '> 10' : fe.toFixed(1)) + ' %';
        vals[3].textContent = hrs < 5 ? 'coarse crystals' : hrs < 20 ? 'nanocrystalline' : 'nano / amorphous';
        warn.textContent = hrs > 30 ? '> 30 h: tool contamination > 10%' : '';
        const r = 4 - 2.8 * Math.min(1, hrs / 20);
        powder.forEach((p) => p.n.setAttribute('r', r.toFixed(2)));
        powder.forEach((p, i) => p.n.setAttribute('fill', hrs > 30 && i % 4 === 0 ? '#8a9099' : C.cat));
      }
      paint();
      api.loop((dt) => {
        if (api.reduced) return;
        heat.setAttribute('fill', `rgba(255,123,92,${hrs ? 0.06 + 0.04 * Math.random() : 0})`);
        balls.forEach((b) => {
          b.vy += 260 * dt; b.x += b.vx * dt; b.y += b.vy * dt;
          const dx = b.x - cx, dy = b.y - cy, dist = Math.hypot(dx, dy);
          if (dist > R - 17) {
            const nx = dx / dist, ny = dy / dist, dot = b.vx * nx + b.vy * ny;
            b.vx -= 2 * dot * nx; b.vy -= 2 * dot * ny;
            b.vx += (Math.random() - 0.5) * 120; b.vy += (Math.random() - 0.5) * 120;
            b.x = cx + nx * (R - 18); b.y = cy + ny * (R - 18);
            if (flashes.length < 8) { const f = api.svg('circle', { cx: b.x + nx * 16, cy: b.y + ny * 16, r: 4, fill: C.heat }, s); flashes.push({ f, t: 0 }); }
          }
          const sp = Math.hypot(b.vx, b.vy); if (sp > 420) { b.vx *= 420 / sp; b.vy *= 420 / sp; }
          b.n.setAttribute('cx', b.x.toFixed(1)); b.n.setAttribute('cy', b.y.toFixed(1));
        });
        for (let i = flashes.length - 1; i >= 0; i--) { const f = flashes[i]; f.t += dt; f.f.setAttribute('r', 4 + f.t * 40); f.f.setAttribute('opacity', Math.max(0, 1 - f.t * 4)); if (f.t > 0.25) { f.f.remove(); flashes.splice(i, 1); } }
        powder.forEach((p) => { p.x += (Math.random() - 0.5) * 40 * dt; p.y += (Math.random() - 0.5) * 40 * dt; const dx = p.x - cx, dy = p.y - cy, d = Math.hypot(dx, dy); if (d > R - 8) { p.x = cx + dx / d * (R - 9); p.y = cy + dy / d * (R - 9); } p.n.setAttribute('cx', p.x.toFixed(1)); p.n.setAttribute('cy', p.y.toFixed(1)); });
      });
    }
  });

  // ---------------------------------------------------------------- sol-gel
  VIZ.register('sol-gel', {
    title: 'Sol–gel: from alkoxide to nanoparticles', kind: 'Step-through',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 280', body, 'Sol-gel process stages');
      const box = api.svg('rect', { x: 150, y: 30, width: 340, height: 200, rx: 16, fill: 'rgba(124,192,255,0.08)', stroke: C.line2 }, s);
      const net = api.svg('g', null, s), parts = api.svg('g', null, s);
      const N = 22, P = [];
      const rnd = (i, k) => { const x = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453; return x - Math.floor(x); };
      for (let i = 0; i < N; i++) P.push({ x0: 175 + rnd(i, 1) * 290, y0: 50 + rnd(i, 2) * 160, n: api.svg('g', null, parts) });
      P.forEach((p) => { p.c = api.svg('circle', { r: 9, fill: C.metal }, p.n); p.t = T(api, p.n, 0, 3, 'M', { 'font-size': 9, fill: '#151517', 'font-weight': 700 }); p.lig = api.svg('g', null, p.n); for (let k = 0; k < 4; k++) api.svg('circle', { cx: Math.cos(k * 1.57) * 14, cy: Math.sin(k * 1.57) * 14, r: 4, fill: C.an }, p.lig); });
      const links = [];
      for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) { const d = Math.hypot(P[i].x0 - P[j].x0, P[i].y0 - P[j].y0); if (d < 78) links.push({ i, j, n: api.svg('line', { stroke: C.good, 'stroke-width': 2, opacity: 0 }, net) }); }
      const eq = T(api, s, 320, 258, '', { fill: C.white, 'font-family': MONO, 'font-size': 13 });
      const stage = T(api, s, 320, 22, '', { fill: C.dim, 'font-size': 12 });
      const steps = [
        { n: 'Precursor', eq: 'M(OR)ₙ  metal alkoxide', d: 'Start from a <b>metal alkoxide</b> dissolved in water or alcohol. Violet dots are the –OR groups.' },
        { n: 'Hydrolysis → sol', eq: '–M–OR + H₂O → –M–OH + ROH', d: '<b>Hydrolysis</b> swaps –OR for –OH, releasing alcohol. Small particles now float in the liquid: a <b>sol</b>.' },
        { n: 'Condensation → gel', eq: '–M–OH + HO–M– → –M–O–M– + H₂O', d: '<b>Condensation</b> links particles through M–O–M (oxo) or M–OH–M (hydroxo) bridges. Viscosity rises until a porous network, the <b>gel</b>, forms.' },
        { n: 'Aging', eq: 'polycondensation continues', d: '<b>Aging:</b> bonding continues, changing structure and properties; porosity decreases while the distance between colloidal particles increases.' },
        { n: 'Drying', eq: 'water + solvent removed', d: '<b>Drying</b> removes water and organic solvent; the gel shrinks (a xerogel).' },
        { n: 'Calcination', eq: 'heat → metal-oxide nanoparticles', d: '<b>Calcination</b> burns off residues and crystallises the oxide into nanoparticles. Low temperature overall and monosized particles, but slow and prone to agglomeration.' },
      ];
      let i = 0, t = 0, playing = !api.reduced;
      const cap = api.caption('');
      const ctl = api.controls();
      api.button('← Back', () => go(i - 1), ctl);
      const pb = api.button(playing ? 'Pause' : 'Play', () => { playing = !playing; pb.textContent = playing ? 'Pause' : 'Play'; }, ctl, { primary: true });
      api.button('Next →', () => go(i + 1), ctl);
      const dots = api.stepper(steps.length, (k) => go(k));
      function go(k) { i = (k + steps.length) % steps.length; t = 0; cap.set(steps[i].d); eq.textContent = steps[i].eq; stage.textContent = `${i + 1} · ${steps[i].n}`; dots.set(i); }
      go(0);
      api.loop((dt, tt) => {
        if (playing) { t += dt; if (t > 3) go(i + 1); }
        const k = Math.min(1, t / 1.2), wob = api.reduced ? 0 : 1;
        const shrink = i >= 4 ? 0.7 : 1, cx = 320, cy = 130;
        box.setAttribute('fill', i >= 4 ? 'rgba(124,192,255,0.02)' : 'rgba(124,192,255,0.08)');
        P.forEach((p, j) => {
          let x = p.x0 + Math.sin(tt * 1.3 + j) * 3 * wob * (i < 2 ? 1 : 0.3), y = p.y0 + Math.cos(tt + j) * 3 * wob * (i < 2 ? 1 : 0.3);
          x = cx + (x - cx) * (i === 4 ? 1 - 0.3 * k : shrink); y = cy + (y - cy) * (i === 4 ? 1 - 0.3 * k : shrink);
          p.n.setAttribute('transform', `translate(${x.toFixed(1)},${y.toFixed(1)})`);
          p.lig.querySelectorAll('circle').forEach((c) => c.setAttribute('fill', i === 0 ? C.an : C.e));
          p.lig.setAttribute('opacity', i === 0 ? 1 : i === 1 ? 1 : Math.max(0, 1 - (i - 1) * 0.5));
          p.c.setAttribute('fill', i === 5 ? api.lerp(0, 1, k) > 0.5 ? C.white : C.metal : C.metal);
          p.c.setAttribute('r', i === 5 ? 9 + 3 * k : 9);
          p.x = x; p.y = y;
        });
        const show = i >= 2 ? (i === 2 ? k : 1) : 0;
        links.forEach((l) => { const a = P[l.i], b = P[l.j]; l.n.setAttribute('x1', a.x); l.n.setAttribute('y1', a.y); l.n.setAttribute('x2', b.x); l.n.setAttribute('y2', b.y); l.n.setAttribute('opacity', i === 5 ? 0.25 * (1 - k) : show); l.n.setAttribute('stroke-width', i === 3 ? 3 : 2); });
      });
    }
  });

  // ---------------------------------------------------------------- confinement
  VIZ.register('confinement', {
    title: 'Quantum confinement: bands break into levels', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 300', body, 'Energy levels versus particle size');
      const g = api.svg('g', null, s);
      const dot = api.svg('circle', { cx: 110, cy: 150, r: 20, fill: 'rgba(255,181,107,0.35)', stroke: C.cat }, s);
      const dl = T(api, s, 110, 250, '', { fill: C.white, 'font-family': MONO });
      let L = 12;
      api.slider({ label: 'Particle size', min: 1, max: 20, step: 0.5, value: L, format: (v) => v + ' nm' }, (v) => { L = v; draw(); }, api.controls());
      const ro = api.readouts();
      const r1 = api.readout('Band gap (illustrative)', ro), r2 = api.readout('Levels', ro), r3 = api.readout('Behaviour', ro);
      const cap = api.caption('');
      function draw() {
        g.innerHTML = '';
        const Eg = 1.2 + 14 / (L * L), mid = 150, sc = 26;
        const top = mid - (Eg / 2) * sc, bot = mid + (Eg / 2) * sc;
        const cnt = Math.max(2, Math.round(L * 1.6));
        for (let k = 0; k < cnt; k++) {
          const e = (k * k) / (cnt * cnt) * 3 + 0.02;
          api.svg('line', { x1: 260, x2: 560, y1: Math.max(20, top - e * sc * 1.4), y2: Math.max(20, top - e * sc * 1.4), stroke: C.e, 'stroke-width': L > 10 ? 1 : 2 }, g);
          api.svg('line', { x1: 260, x2: 560, y1: Math.min(280, bot + e * sc * 1.4), y2: Math.min(280, bot + e * sc * 1.4), stroke: C.hole, 'stroke-width': L > 10 ? 1 : 2 }, g);
        }
        api.svg('rect', { x: 262, y: top + 1, width: 296, height: Math.max(0, bot - top - 2), fill: 'rgba(233,196,106,0.10)' }, g);
        T(api, g, 410, mid + 5, 'gap ' + Eg.toFixed(2) + ' eV', { fill: C.warn, 'font-family': MONO });
        T(api, g, 580, Math.max(34, top - 20), 'conduction', { 'text-anchor': 'start', fill: C.e, 'font-size': 12 });
        T(api, g, 580, Math.min(270, bot + 24), 'valence', { 'text-anchor': 'start', fill: C.hole, 'font-size': 12 });
        dot.setAttribute('r', 6 + L * 3.4); dl.textContent = L + ' nm';
        r1.set(Eg.toFixed(2) + ' eV'); r2.set(L > 10 ? 'near-continuous bands' : 'discrete, well separated'); r3.set(L > 10 ? 'bulk-like' : L > 4 ? 'confined (semiconductor-like)' : 'strongly confined (insulator-like)');
        cap.set(L > 10 ? 'A large particle behaves like bulk: so many closely spaced levels that they merge into <b>continuous bands</b>.' : 'Shrink the particle towards the <b>de Broglie wavelength</b> of its conduction electrons and they are confined: levels become <b>discrete</b> and the <b>gap widens</b>, pushing a material from metal towards semiconductor and insulator.');
      }
      draw();
    }
  });

  // ---------------------------------------------------------------- QD size
  VIZ.register('qd-size', {
    title: 'Quantum dot size sets its colour', kind: 'Interactive',
    mount(body, api) {
      const C = api.C, s = api.stage('0 0 640 300', body, 'Quantum dot emission versus size');
      const lam = (d) => Math.min(660, 430 + 48 * (d - 2));
      const glow = api.svg('circle', { cx: 150, cy: 120, r: 60 }, s);
      const dotC = api.svg('circle', { cx: 150, cy: 120, r: 20 }, s);
      const dl = T(api, s, 150, 210, '', { fill: C.white, 'font-family': MONO });
      const gapG = api.svg('g', { transform: 'translate(330,30)' }, s);
      T(api, gapG, 70, 0, 'band gap', { fill: C.dim, 'font-size': 12 });
      const cb = api.svg('rect', { x: 0, width: 140, height: 20, rx: 4, fill: 'rgba(124,192,255,0.35)' }, gapG);
      const vb = api.svg('rect', { x: 0, y: 150, width: 140, height: 20, rx: 4, fill: 'rgba(255,141,161,0.3)' }, gapG);
      const arr = api.svg('line', { x1: 70, x2: 70, y2: 150, 'stroke-width': 3 }, gapG);
      const eT = T(api, gapG, 160, 90, '', { 'text-anchor': 'start', fill: C.white, 'font-family': MONO });
      const vials = [];
      for (let k = 0; k < 7; k++) { const d = 2 + k; const x = 60 + k * 80; const g = api.svg('g', { transform: `translate(${x},250)` }, s); api.svg('rect', { x: -14, y: -26, width: 28, height: 40, rx: 6, fill: api.wavelengthToColor(lam(d), 0.85) }, g); T(api, g, 0, 30, d + ' nm', { 'font-size': 11, fill: C.dim }); vials.push(g); }
      let d = 3;
      api.slider({ label: 'Dot diameter', min: 2, max: 8, step: 0.1, value: d, format: (v) => v.toFixed(1) + ' nm' }, (v) => { d = v; paint(); }, api.controls());
      const ro = api.readouts();
      const r1 = api.readout('Emission (approx.)', ro), r2 = api.readout('Band gap ≈ 1240/λ', ro), r3 = api.readout('Colour', ro);
      api.caption('Illustrative mapping for CdSe-like dots. <b>Smaller dots (2–3 nm)</b> have a wider gap and emit high-energy <b>blue/violet</b> light; <b>larger dots (5–6 nm)</b> emit lower-energy <b>orange/red</b>. Band gap falls and emission red-shifts as size grows, which is why one material can give every colour.');
      function paint() {
        const l = lam(d), E = 1240 / l, c = api.wavelengthToColor(l);
        dotC.setAttribute('r', 6 + d * 5); dotC.setAttribute('fill', c); glow.setAttribute('fill', api.wavelengthToColor(l, 0.25)); glow.setAttribute('r', 20 + d * 9);
        dl.textContent = d.toFixed(1) + ' nm';
        const gap = E * 45; cb.setAttribute('y', 150 - gap - 20); arr.setAttribute('y1', 150 - gap); arr.setAttribute('stroke', c); eT.textContent = E.toFixed(2) + ' eV'; eT.setAttribute('y', 150 - gap / 2);
        r1.set(Math.round(l) + ' nm'); r2.set(E.toFixed(2) + ' eV');
        r3.set(l < 450 ? 'violet' : l < 495 ? 'blue' : l < 570 ? 'green' : l < 590 ? 'yellow' : l < 620 ? 'orange' : 'red');
        vials.forEach((v, k) => v.setAttribute('opacity', Math.abs(2 + k - d) < 0.6 ? 1 : 0.45));
      }
      paint();
      api.loop((dt, t) => { if (!api.reduced) glow.setAttribute('opacity', (0.75 + 0.25 * Math.sin(t * 3)).toFixed(2)); });
    }
  });

  // ---------------------------------------------------------------- coolant picker
  VIZ.register('coolant-picker', {
    title: 'Pick the right coolant', kind: 'Interactive',
    mount(body, api) {
      const C = api.C;
      const K = {
        water: { n: 'Water', why: 'Best plain heat carrier: high thermal conductivity, specific heat and latent heat, low viscosity, low risk, compatible with most materials, cheap.' },
        di: { n: 'Deionised water + corrosion inhibitors', why: 'Tap water carries minerals and pathogens. DI water is less corrosive, but air still makes it corrosive, so add phosphates, tolyltriazole or 2-ethylhexanoic acid.' },
        glycol: { n: 'Water–ethylene / propylene glycol', why: 'Glycol lowers the freezing point and raises the boiling point while keeping good heat transfer. Propylene glycol if toxicity matters.' },
        formate: { n: 'Water–potassium formate / acetate', why: 'Freezing point near −70 °C and less corrosive than NaCl/CaCl₂ brines. Used in food, beverage, chemical and pharma plants.' },
        hfe: { n: 'Dielectric: hydrofluoroether (HFE)', why: 'Does not conduct, so it can touch live chips (immersion or direct-to-chip). Non-flammable, low toxicity, low GWP and zero ODP.' },
        pfc: { n: 'Dielectric: perfluorocarbon (PFC)', why: 'Dielectric and non-flammable with zero ODP, but a high GWP, so avoid it when environmental limits apply.' },
      };
      const Sc = [
        { v: 'car', l: 'Car engine, cold winter', c: { elec: false, sub: true, deep: false, food: false, env: false, budget: true } },
        { v: 'dc', l: 'Data-centre immersion', c: { elec: true, sub: false, deep: false, food: false, env: true, budget: false } },
        { v: 'laptop', l: 'Laptop cold plate', c: { elec: false, sub: false, deep: false, food: false, env: false, budget: true } },
        { v: 'food', l: 'Food chiller to −70 °C', c: { elec: false, sub: true, deep: true, food: true, env: false, budget: false } },
        { v: 'lab', l: 'Lab chiller', c: { elec: false, sub: false, deep: false, food: false, env: false, budget: false } },
      ];
      let c = Object.assign({}, Sc[0].c);
      const ctl = api.controls();
      api.select({ label: 'Scenario', value: 'car', options: Sc.map((x) => ({ value: x.v, label: x.l })) }, (v) => { c = Object.assign({}, Sc.find((x) => x.v === v).c); sync(); pick(); }, ctl);
      const ctl2 = api.controls();
      const tg = {};
      [['elec', 'Touches live electronics'], ['sub', 'Below 0 °C'], ['deep', 'Below −40 °C'], ['food', 'Near food / people'], ['env', 'Strict climate limits'], ['budget', 'Tight budget']].forEach(([k, l]) => {
        tg[k] = api.button(l, () => { c[k] = !c[k]; if (k === 'deep' && c.deep) c.sub = true; sync(); pick(); }, ctl2);
      });
      function sync() { for (const k in tg) tg[k].classList.toggle('on', !!c[k]); }
      const card = api.el('div', { class: 'vro', style: 'margin-top:14px;padding:14px 16px' }, body);
      const ttl = api.el('div', { style: 'font-size:17px;color:#f4f4f6;font-weight:600;margin:2px 0 6px' }, card);
      const why = api.el('div', { style: 'font-size:14px;line-height:1.6;color:#cfcfd6' }, card);
      const rules = api.caption('');
      function pick() {
        let k, notes = [];
        if (c.elec) { k = c.env ? 'hfe' : 'hfe'; notes.push('Water and glycol mixes conduct, and a spill can destroy electronics, so the fluid must be <b>dielectric</b>.'); if (!c.env) notes.push('PFC also works, but its GWP is high.'); }
        else if (c.deep) { k = 'formate'; notes.push('Below −40 °C most glycol mixes are near their limit; salt brines freeze low but are <b>highly corrosive</b>.'); }
        else if (c.sub) { k = c.food ? 'formate' : 'glycol'; notes.push('Plain water freezes, so lower the freezing point.'); }
        else { k = c.budget ? 'water' : 'di'; if (c.budget) notes.push('Add inhibitors if the loop contains metal that can corrode.'); }
        notes.push('Flash point below 93 °C counts as flammable (ethanol, methanol, benzene). Cu and Al are the preferred wetted metals.');
        ttl.textContent = K[k].n; why.innerHTML = K[k].why; rules.set(notes.join(' '));
        card.animate && !api.reduced && card.animate([{ opacity: 0.3, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], { duration: 300, easing: 'ease-out' });
      }
      sync(); pick();
    }
  });
})();
