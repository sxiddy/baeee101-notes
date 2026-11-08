/* One Pro tool open to everyone (op-amp gain). The other interactive models stay in Pro. */
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


  // ---------------------------------------------------------------- op-amp gain
  VIZ.register('opamp-gain', {
    title: 'Op-amp amplifier gain', kind: 'Interactive',
    mount(body, api) {
      const C = api.C;
      const st = { mode: 'inv', Ri: 10, Rf: 100, Vin: 0.5 };
      api.segmented([{ value: 'inv', label: 'Inverting' }, { value: 'non', label: 'Non-inverting' }], st.mode, (v) => {
        st.mode = v;
        if (v === 'inv') { sA.set(10); sB.set(100); st.Ri = 10; st.Rf = 100; } else { sA.set(10); sB.set(90); st.Ri = 10; st.Rf = 90; }
        draw();
      }, body);
      const s = api.stage('0 0 480 250', body, 'Input and output waveforms of an op-amp amplifier');
      const g = api.svg('g', null, s);
      const ctl = api.controls();
      const sA = api.slider({ label: 'Input resistor (R<sub>i</sub> or R<sub>2</sub>)', min: 1, max: 100, step: 1, value: st.Ri, format: (v) => v + ' kΩ' }, (v) => { st.Ri = v; draw(); }, ctl);
      const sB = api.slider({ label: 'Feedback resistor (R<sub>f</sub> or R<sub>1</sub>)', min: 1, max: 200, step: 1, value: st.Rf, format: (v) => v + ' kΩ' }, (v) => { st.Rf = v; draw(); }, ctl);
      const sV = api.slider({ label: 'Input amplitude V<sub>in</sub>', min: 0.1, max: 2, step: 0.1, value: st.Vin, format: (v) => nf(v, 1) + ' V' }, (v) => { st.Vin = v; draw(); }, ctl);
      const ro = api.readouts();
      const rg = api.readout('Gain A<sub>v</sub>', ro), rv = api.readout('Output amplitude', ro), rp = api.readout('Output phase', ro);
      const work = workBox(api, body);
      function wave(x0, w, cy, a, scale, col) {
        const pts = [];
        for (let k = 0; k <= 120; k++) { const t = k / 120; pts.push(r1(x0 + t * w) + ',' + r1(cy - a * scale * Math.sin(2 * Math.PI * 2 * t))); }
        api.svg('polyline', { points: pts.join(' '), fill: 'none', stroke: col, 'stroke-width': 2.5 }, g);
      }
      function draw() {
        g.innerHTML = '';
        const inv = st.mode === 'inv';
        const A = inv ? -st.Rf / st.Ri : 1 + st.Rf / st.Ri;
        const Vo = A * st.Vin;
        const sc = 28;
        T(api, g, 20, 22, 'Input', { 'text-anchor': 'start', fill: C.dim });
        api.svg('line', { x1: 20, y1: 70, x2: 460, y2: 70, stroke: C.line2 }, g);
        wave(20, 440, 70, st.Vin, sc, C.e);
        T(api, g, 20, 124, 'Output (same scale, clipped to the frame)', { 'text-anchor': 'start', fill: C.dim });
        api.svg('line', { x1: 20, y1: 190, x2: 460, y2: 190, stroke: C.line2 }, g);
        const amp = Math.min(Math.abs(Vo), 2.0);
        wave(20, 440, 190, amp * Math.sign(Vo || 1), sc, inv ? C.cat : C.good);
        rg.set(nf(A, 2));
        rv.set(nf(Math.abs(Vo), 2) + ' V');
        rp.set(inv ? 'opposite' : 'same');
        work.innerHTML = inv
          ? '<span class="hd">Inverting amplifier</span><span class="ln">A<sub>v</sub> = −R<sub>f</sub>/R<sub>i</sub> = −' + st.Rf + '/' + st.Ri + ' = ' + nf(A, 2) + '</span><span class="ln">V<sub>out</sub> = A<sub>v</sub> V<sub>in</sub> = ' + nf(A, 2) + ' × ' + nf(st.Vin, 1) + ' = ' + nf(Vo, 2) + ' V</span>'
          : '<span class="hd">Non-inverting amplifier</span><span class="ln">A<sub>v</sub> = 1 + R<sub>1</sub>/R<sub>2</sub> = 1 + ' + st.Rf + '/' + st.Ri + ' = ' + nf(A, 2) + '</span><span class="ln">V<sub>out</sub> = ' + nf(A, 2) + ' × ' + nf(st.Vin, 1) + ' = ' + nf(Vo, 2) + ' V</span>';
      }
      draw();
    }
  });
})();
