/* Module 2 widgets: op-amp gain, BJT currents, radar range (Pro).
 * Presets use the course examples; numbers match tools/check-m2.js. */
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
    api.css('m2-work', ['.m2-work{overflow-x:auto;font-family:' + MONO + ';font-size:13px;line-height:1.6;color:#b3b3bb}', '.m2-work .hd{display:block;margin:8px 0 2px;color:#f4f4f6;font-weight:600;font-family:inherit}', '.m2-work .ln{display:block}'].join(''));
    return api.el('div', { class: 'm2-work' }, parent);
  }

  // ---------------------------------------------------------------- BJT currents
  VIZ.register('bjt-currents', {
    title: 'BJT currents, α and β', kind: 'Calculator',
    mount(body, api) {
      const C = api.C;
      const st = { beta: 100, IB: 50 };
      const s = api.stage('0 0 480 230', body, 'Bars for base, collector and emitter current');
      const g = api.svg('g', null, s);
      const ctl = api.controls();
      api.slider({ label: 'β', min: 10, max: 500, step: 1, value: st.beta, format: (v) => String(v) }, (v) => { st.beta = v; draw(); }, ctl);
      api.slider({ label: 'Base current I<sub>B</sub>', min: 5, max: 200, step: 5, value: st.IB, format: (v) => v + ' µA' }, (v) => { st.IB = v; draw(); }, ctl);
      const ro = api.readouts();
      const rc = api.readout('I<sub>C</sub>', ro), re = api.readout('I<sub>E</sub>', ro), ra = api.readout('α', ro), rs = api.readout('I<sub>B</sub> share of I<sub>E</sub>', ro);
      const work = workBox(api, body);
      function bar(x, label, val, max, col, txt) {
        const h = Math.max(2, 115 * val / max);
        api.svg('rect', { x, y: 180 - h, width: 90, height: h, rx: 4, fill: col, opacity: 0.85 }, g);
        T(api, g, x + 45, 202, label, { fill: C.text });
        T(api, g, x + 45, 172 - h, txt, { fill: C.white, 'font-family': MONO, 'font-size': 14 });
      }
      function draw() {
        g.innerHTML = '';
        const IB = st.IB / 1000, IC = st.beta * IB, IE = (1 + st.beta) * IB, alpha = st.beta / (1 + st.beta);
        const max = 100 * 0.2 * 5 + 0.0001; // fixed scale so changes are visible: 5 × the reference
        const M = Math.max(IE, 1);
        bar(60, 'I B', IB, M, C.hole, nf(IB, 3) + ' mA');
        bar(195, 'I C', IC, M, C.e, nf(IC, 2) + ' mA');
        bar(330, 'I E', IE, M, C.cat, nf(IE, 2) + ' mA');
        T(api, g, 240, 20, 'I E = I B + I C', { fill: C.dim });
        rc.set(nf(IC, 2) + ' mA'); re.set(nf(IE, 2) + ' mA'); ra.set(nf(alpha, 3)); rs.set(nf(100 * IB / IE, 2) + ' %');
        work.innerHTML = '<span class="hd">Working</span><span class="ln">I<sub>C</sub> = βI<sub>B</sub> = ' + st.beta + ' × ' + st.IB + ' µA = ' + nf(IC, 3) + ' mA</span>' +
          '<span class="ln">I<sub>E</sub> = (1 + β)I<sub>B</sub> = ' + (1 + st.beta) + ' × ' + st.IB + ' µA = ' + nf(IE, 3) + ' mA</span>' +
          '<span class="ln">α = β/(1 + β) = ' + st.beta + '/' + (1 + st.beta) + ' = ' + nf(alpha, 3) + '</span>' +
          '<span class="ln">Check: I<sub>B</sub> + I<sub>C</sub> = ' + nf(IB + IC, 3) + ' mA = I<sub>E</sub></span>';
        void max;
      }
      draw();
    }
  });

  // ---------------------------------------------------------------- radar range
  VIZ.register('radar-range', {
    title: 'Radar: echo time to range', kind: 'Interactive',
    mount(body, api) {
      const C = api.C;
      const st = { t: 100 };
      const s = api.stage('0 0 480 200', body, 'A radar pulse travelling to a target and back');
      const g = api.svg('g', null, s);
      const ctl = api.controls();
      api.slider({ label: 'Echo time t (out and back)', min: 1, max: 1000, step: 1, value: st.t, format: (v) => v + ' µs' }, (v) => { st.t = v; draw(); }, ctl);
      const ro = api.readouts();
      const rr = api.readout('Range R', ro), rt = api.readout('One-way time', ro);
      const work = workBox(api, body);
      function draw() {
        g.innerHTML = '';
        const R = 3e8 * st.t * 1e-6 / 2; // metres
        const km = R / 1000;
        const x = 70 + 340 * (km / 150);
        api.svg('circle', { cx: 50, cy: 100, r: 14, fill: C.e }, g);
        T(api, g, 50, 140, 'Radar', { fill: C.text });
        api.svg('line', { x1: 64, y1: 92, x2: x - 14, y2: 92, stroke: C.cat, 'stroke-width': 3, 'marker-end': api.arrow(s, C.cat) }, g);
        api.svg('line', { x1: x - 14, y1: 110, x2: 64, y2: 110, stroke: C.good, 'stroke-width': 3, 'stroke-dasharray': '6 5', 'marker-end': api.arrow(s, C.good) }, g);
        api.svg('rect', { x: x - 10, y: 84, width: 22, height: 32, rx: 4, fill: C.heat }, g);
        T(api, g, x, 140, 'Target', { fill: C.text });
        T(api, g, 240, 26, 'out and back = 2R, so R = ct/2', { fill: C.dim });
        T(api, g, 240, 180, nf(km, 2) + ' km', { fill: C.white, 'font-family': MONO });
        rr.set(nf(km, 2) + ' km'); rt.set(nf(st.t / 2, 1) + ' µs');
        work.innerHTML = '<span class="hd">Working (c = 3 × 10<sup>8</sup> m/s)</span><span class="ln">R = ct/2 = 3×10<sup>8</sup> × ' + st.t + '×10<sup>−6</sup> / 2</span><span class="ln">R = ' + nf(R, 0) + ' m = ' + nf(km, 2) + ' km</span><span class="ln">Course example: 100 µs gives 15 km</span>';
      }
      draw();
    }
  });
})();
