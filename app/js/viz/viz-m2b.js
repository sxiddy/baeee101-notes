/* viz-m2b.js — Module 2 diagrams: cell-types, liion, fuelcell.
 * Built on viz-core.js. One IIFE, no globals beyond VIZ.register calls.
 */
(function () {
  'use strict';
  if (!window.VIZ) return;
  const VIZ = window.VIZ;
  const MONO = 'JetBrains Mono, ui-monospace, monospace';
  const INK = '#151517';

  // ------------------------------------------------------------------ helpers

  // Tiny chemistry markup for SVG text: "Li_{1−n}CoO_2", "O^{2−}", "e^−".
  function setChem(api, t, str) {
    while (t.firstChild) t.removeChild(t.firstChild);
    const fs = parseFloat(t.getAttribute('font-size')) || 14;
    const small = +(fs * 0.74).toFixed(1);
    const SUB = +(fs * 0.3).toFixed(1);
    const SUP = -(+(fs * 0.4).toFixed(1));
    const runs = [];
    let buf = '';
    let i = 0;
    while (i < str.length) {
      const ch = str[i];
      if ((ch === '_' || ch === '^') && i + 1 < str.length) {
        if (buf) { runs.push([0, buf]); buf = ''; }
        let s;
        if (str[i + 1] === '{') {
          const j = str.indexOf('}', i + 2);
          const end = j < 0 ? str.length : j;
          s = str.slice(i + 2, end);
          i = end + 1;
        } else { s = str[i + 1]; i += 2; }
        runs.push([ch === '_' ? 1 : 2, s]);
      } else { buf += ch; i++; }
    }
    if (buf) runs.push([0, buf]);
    let cur = 0;
    let pendDx = 0;
    const SP = fs * 0.27;
    runs.forEach(([m, s0]) => {
      // spaces at tspan edges get trimmed by some renderers, so turn them into dx
      let s = s0, dx = pendDx;
      pendDx = 0;
      const lead = s.match(/^ +/), trail = s.match(/ +$/);
      if (lead && runs.length > 1) { dx += SP * lead[0].length; s = s.slice(lead[0].length); }
      if (trail && s.length && runs.length > 1) { pendDx = SP * trail[0].length; s = s.slice(0, s.length - trail[0].length); }
      if (!s) { pendDx += dx; return; }
      const off = m === 1 ? SUB : m === 2 ? SUP : 0;
      const a = { text: s };
      if (off !== cur) a.dy = +(off - cur).toFixed(1);
      if (dx) a.dx = +dx.toFixed(1);
      if (m) a['font-size'] = small;
      api.svg('tspan', a, t);
      cur = off;
    });
  }
  function chem(api, parent, x, y, str, attrs) {
    const t = api.svg('text', Object.assign({ x, y }, attrs || {}), parent);
    setChem(api, t, str);
    return t;
  }
  // Same markup to HTML.
  function hchem(s) {
    return s.replace(/_\{([^}]*)\}|_(.)/g, '<sub>$1$2</sub>').replace(/\^\{([^}]*)\}|\^(.)/g, '<sup>$1$2</sup>');
  }

  function hexRgb(h) { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
  function mix(a, b, t) {
    const A = hexRgb(a), B = hexRgb(b);
    return 'rgb(' + A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(',') + ')';
  }

  function dedupe(pts) {
    const out = [];
    pts.forEach((p) => { const q = out[out.length - 1]; if (!q || Math.abs(q[0] - p[0]) > 0.01 || Math.abs(q[1] - p[1]) > 0.01) out.push([p[0], p[1]]); });
    return out;
  }

  // Arc-length parametrised polyline: at(u) with u in 0..1.
  function polyline(ptsIn) {
    const pts = dedupe(ptsIn);
    if (pts.length === 1) pts.push(pts[0].slice());
    const seg = [];
    let L = 0;
    for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); seg.push(l); L += l; }
    return {
      len: L,
      pts,
      at(u) {
        let d = Math.max(0, Math.min(1, u)) * L;
        for (let i = 0; i < seg.length; i++) {
          if (d <= seg[i] || i === seg.length - 1) {
            const f = seg[i] ? Math.min(1, d / seg[i]) : 0;
            const a = pts[i], b = pts[i + 1];
            return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
          }
          d -= seg[i];
        }
        return pts[pts.length - 1].slice();
      },
      atLen(d) { return this.at(L ? d / L : 0); },
      reversed() { return polyline(pts.slice().reverse()); }
    };
  }

  // Corners replaced by quadratic curves (radius r), returned as dense points.
  function roundPts(ptsIn, r) {
    const pts = dedupe(ptsIn);
    if (pts.length < 3) return pts;
    const out = [pts[0]];
    for (let i = 1; i < pts.length - 1; i++) {
      const a = pts[i - 1], p = pts[i], b = pts[i + 1];
      const la = Math.hypot(p[0] - a[0], p[1] - a[1]), lb = Math.hypot(b[0] - p[0], b[1] - p[1]);
      const ra = Math.min(r, la / 2), rb = Math.min(r, lb / 2);
      const s = [p[0] + (a[0] - p[0]) * ra / la, p[1] + (a[1] - p[1]) * ra / la];
      const e = [p[0] + (b[0] - p[0]) * rb / lb, p[1] + (b[1] - p[1]) * rb / lb];
      for (let k = 0; k <= 8; k++) {
        const t = k / 8, m = 1 - t;
        out.push([m * m * s[0] + 2 * m * t * p[0] + t * t * e[0], m * m * s[1] + 2 * m * t * p[1] + t * t * e[1]]);
      }
    }
    out.push(pts[pts.length - 1]);
    return out;
  }
  function roundD(ptsIn, r) {
    const pts = dedupe(ptsIn);
    const f = (p) => p[0].toFixed(1) + ' ' + p[1].toFixed(1);
    let d = 'M' + f(pts[0]);
    for (let i = 1; i < pts.length - 1; i++) {
      const a = pts[i - 1], p = pts[i], b = pts[i + 1];
      const la = Math.hypot(p[0] - a[0], p[1] - a[1]), lb = Math.hypot(b[0] - p[0], b[1] - p[1]);
      const ra = Math.min(r, la / 2), rb = Math.min(r, lb / 2);
      const s = [p[0] + (a[0] - p[0]) * ra / la, p[1] + (a[1] - p[1]) * ra / la];
      const e = [p[0] + (b[0] - p[0]) * rb / lb, p[1] + (b[1] - p[1]) * rb / lb];
      d += ' L' + f(s) + ' Q' + f(p) + ' ' + f(e);
    }
    return d + ' L' + f(pts[pts.length - 1]);
  }
  // Catmull-Rom through the points, sampled into an arc-length polyline.
  function smooth(pts, n) {
    const P = dedupe(pts);
    if (P.length < 3) return polyline(P);
    const out = [];
    const at = (i) => P[Math.max(0, Math.min(P.length - 1, i))];
    const k = n || 10;
    for (let i = 0; i < P.length - 1; i++) {
      const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2);
      for (let j = 0; j < k; j++) {
        const t = j / k, t2 = t * t, t3 = t2 * t;
        out.push([0, 1].map((c) => 0.5 * ((2 * p1[c]) + (-p0[c] + p2[c]) * t + (2 * p0[c] - 5 * p1[c] + 4 * p2[c] - p3[c]) * t2 + (-p0[c] + 3 * p1[c] - 3 * p2[c] + p3[c]) * t3)));
      }
    }
    out.push(P[P.length - 1].slice());
    return polyline(out);
  }

  const smoothstep = (u) => u * u * (3 - 2 * u);
  const easeOut = (u) => 1 - Math.pow(1 - u, 1.8);
  // Stop-and-go motion: k hops with a pause at each lattice site.
  const hopper = (k) => (u) => u - Math.sin(2 * Math.PI * k * u) / (2 * Math.PI * k);

  function wait(api, s) {
    return new Promise((r) => { if (api.reduced || s <= 0) r(); else api.timeout(r, s * 1000); });
  }

  // Particle glyphs, drawn centred on 0,0 ---------------------------------------------
  function electronEl(api, parent) {
    const g = api.svg('g', null, parent);
    api.svg('circle', { r: 7.5, fill: api.C.e, opacity: 0.2 }, g);
    api.svg('circle', { r: 4, fill: api.C.e }, g);
    return g;
  }
  function cationEl(api, parent, r) {
    const g = api.svg('g', null, parent);
    const halo = api.svg('circle', { r: r + 5, fill: api.C.cat, opacity: 0.18 }, g);
    api.svg('circle', { r, fill: api.C.cat }, g);
    const a = (r * 0.5).toFixed(1);
    api.svg('path', { d: `M-${a} 0H${a}M0 -${a}V${a}`, stroke: INK, 'stroke-width': 1.7, 'stroke-linecap': 'round', fill: 'none' }, g);
    g._halo = halo;
    return g;
  }
  function anionEl(api, parent) {
    const g = api.svg('g', null, parent);
    api.svg('circle', { r: 11, fill: api.C.an, opacity: 0.18 }, g);
    api.svg('circle', { r: 6.8, fill: api.C.an }, g);
    api.svg('path', { d: 'M-3.2 0H3.2', stroke: INK, 'stroke-width': 1.7, 'stroke-linecap': 'round', fill: 'none' }, g);
    return g;
  }
  const ATOM = { H: ['#e6e6ec', 5], O: ['#f08c8c', 6.6], C: ['#8d929b', 6.2] };
  function atom(api, g, k, x, y) {
    api.svg('circle', { cx: x, cy: y, r: ATOM[k][1], fill: ATOM[k][0], stroke: INK, 'stroke-width': 1 }, g);
  }
  function molEl(api, parent, kind) {
    const g = api.svg('g', null, parent);
    if (kind === 'H2') { atom(api, g, 'H', -4, 0); atom(api, g, 'H', 4, 0); }
    else if (kind === 'O2') { atom(api, g, 'O', -5, 0); atom(api, g, 'O', 5, 0); }
    else if (kind === 'CO') { atom(api, g, 'C', -5, 0); atom(api, g, 'O', 5.5, 0); }
    else if (kind === 'CO2') { atom(api, g, 'O', -10, 0); atom(api, g, 'O', 10, 0); atom(api, g, 'C', 0, 0); }
    else if (kind === 'H2O') { atom(api, g, 'O', 0, 0); atom(api, g, 'H', -5.6, 4.4); atom(api, g, 'H', 5.6, 4.4); }
    else if (kind === 'O') { atom(api, g, 'O', 0, 0); }
    return g;
  }

  function legend(api, parent, items) {
    const wrap = api.el('div', { class: 'vz-legend', 'aria-hidden': 'true' }, parent);
    items.forEach(([col, label]) => {
      const s = api.el('span', null, wrap);
      api.el('i', { style: 'background:' + col }, s);
      api.el('span', { html: label }, s);
    });
    return wrap;
  }

  function reactionPanel(api, parent) {
    const box = api.el('div', { class: 'vz-rx' }, parent);
    return {
      el: box,
      set(rows) {
        box.innerHTML = '';
        box.classList.remove('vz-swap');
        rows.forEach((r) => {
          const row = api.el('div', { class: 'vz-rx-row' + (r.net ? ' vz-net' : '') }, box);
          api.el('span', { class: 'vz-rx-k', html: r.k }, row);
          api.el('span', { class: 'vz-rx-v', html: hchem(r.v) }, row);
        });
        void box.offsetWidth;
        box.classList.add('vz-swap');
      }
    };
  }

  function addCss(api) {
    api.css('viz-m2b', `
.vz-rx{display:grid;gap:7px;margin:12px 0 2px;padding:12px 14px;border:1px solid var(--line,#2f2f35);border-radius:12px;background:var(--bg-2,#1b1b1e)}
.vz-rx-row{display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 14px}
.vz-rx-k{flex:0 0 13.5em;font:600 11px/1.5 "JetBrains Mono",ui-monospace,monospace;letter-spacing:.06em;text-transform:uppercase;color:var(--text-dim,#80808a)}
.vz-rx-v{font-family:"JetBrains Mono",ui-monospace,monospace;font-size:13.5px;line-height:1.5;color:var(--white,#f4f4f6)}
.vz-rx-row.vz-net{padding-top:7px;border-top:1px dashed var(--line-2,#3a3a41)}
.vz-rx-row.vz-net .vz-rx-v{color:var(--text,#b3b3bb)}
.vz-rx.vz-swap .vz-rx-row{animation:vzRxIn .45s cubic-bezier(.2,.7,.2,1) both}
.vz-rx.vz-swap .vz-rx-row:nth-child(2){animation-delay:.06s}
.vz-rx.vz-swap .vz-rx-row:nth-child(3){animation-delay:.12s}
@keyframes vzRxIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
.vz-legend{display:flex;flex-wrap:wrap;gap:6px 16px;margin:10px 0 0;font-size:12.5px;color:var(--text-dim,#80808a)}
.vz-legend>span{display:inline-flex;align-items:center;gap:7px}
.vz-legend i{width:10px;height:10px;border-radius:50%;display:inline-block;flex:none}
.vz-ct-chip,.vz-ct-bucket{outline:none}
.vz-ct-chip.vz-live,.vz-ct-bucket.vz-live{cursor:pointer}
.vz-ct-chip:focus-visible .vz-ct-bg,.vz-ct-bucket:focus-visible .vz-ct-bk{stroke:#f4f4f6;stroke-width:2.2;stroke-opacity:1}
.vz-ct-chip.vz-live:hover .vz-ct-bg{stroke:#80808a}
.vz-ct-bucket.vz-live:hover .vz-ct-bk{stroke-opacity:.9}
@media (max-width:520px){.vz-rx-k{flex-basis:100%}}
@media (prefers-reduced-motion:reduce){.vz-rx.vz-swap .vz-rx-row{animation:none}}
`);
  }

  // ======================================================================
  // 1. cell-types — sort examples with two questions
  // ======================================================================
  VIZ.register('cell-types', {
    title: 'Primary, secondary or fuel cell?',
    kind: 'Interactive',
    mount(body, api) {
      addCss(api);
      const C = api.C, S = api.svg;
      const svg = api.stage('0 0 640 484', body, 'Decision tree that sorts nine example cells into primary, secondary, and flow or fuel cells');
      const CW = 184, CH = 26;
      const CAT = {
        p: { name: 'Primary', sub: 'not reversible · use once', col: C.warn, x: 112 },
        s: { name: 'Secondary', sub: 'reversible · rechargeable', col: C.good, x: 320 },
        f: { name: 'Flow & fuel cells', sub: 'reactants flow through', col: C.e, x: 528 }
      };
      const ITEMS = [
        { label: 'Li-ion battery', cat: 's', why: 'Sealed, and on charging Li^+ is pushed back from LiCoO_2 into graphite, so the reaction runs in reverse. 3.7 V per cell.' },
        { label: 'Leclanché dry cell', cat: 'p', why: 'Reactants are sealed in the can and the cell reaction is not reversible. Once they are used up, the cell is dead.' },
        { label: 'H_2–O_2 fuel cell', cat: 'f', why: 'H_2 and O_2 are fed in continuously (about 50 atm) and water leaves. It stores nothing and runs as long as the gases flow.' },
        { label: 'Ni–Cd cell', cat: 's', why: 'Sealed, and passing current the opposite way reverses its reaction. About 1.3 V per cell.' },
        { label: 'Alkaline cell', cat: 'p', why: 'Sealed and one-way, like the dry cell. It works as long as the active materials last, then it is replaced.' },
        { label: 'Solid oxide (SOFC)', cat: 'f', why: 'H_2 and CO are fed to the anode and air to the cathode at 800–1000 °C, and the exhaust leaves. Energy is drawn continuously, never stored.' },
        { label: 'Lithium primary cell', cat: 'p', why: 'Sealed, reaction not reversible. Lithium cells in pacemakers and watches are replaced, not recharged.' },
        { label: 'Lead–acid battery', cat: 's', why: 'The lead storage battery in cars. Charging drives its reaction backwards and regenerates the reactants.' },
        { label: 'NiMH cell', cat: 's', why: 'Nickel–metal hydride: sealed and rechargeable, about 1.3 V per cell.' }
      ];
      const TRAY_X = [112, 320, 528];
      const slotY = (k) => 362 + k * 30;

      // Layers: lines < buckets < tray ghosts < chips (route tokens) < question boxes < top (direct flights)
      const L = {};
      ['lines', 'buckets', 'ghosts', 'fly', 'q', 'top'].forEach((k) => { L[k] = S('g', null, svg); });

      const trayLabel = S('text', { x: 16, y: 18, 'font-size': 13, fill: C.dim, 'letter-spacing': '0.08em', text: 'EXAMPLES · TAP ONE TO SORT IT' }, L.ghosts);

      // --- connectors
      const markers = {};
      [['dim', C.line2], ['p', C.warn], ['s', C.good], ['f', C.e]].forEach(([k, col]) => { markers[k] = api.arrow(svg, col, 9); });
      const BR = {};
      function branch(key, pts, lx, ly, text, anchor) {
        const p = S('path', { d: roundD(pts, 12), fill: 'none', stroke: C.line2, 'stroke-width': 2, 'stroke-linecap': 'round', 'marker-end': key.length === 3 ? markers.dim : null }, L.lines);
        const t = S('text', { x: lx, y: ly, 'font-size': 13, fill: C.dim, 'text-anchor': anchor || 'start', text }, L.lines);
        BR[key] = { p, t, end: key.length === 3 };
      }
      branch('q1f', [[470, 172], [528, 172], [528, 289]], 499, 163, 'fed in', 'middle');
      branch('q1s', [[320, 188], [320, 217]], 330, 207, 'sealed inside');
      branch('q2p', [[112, 250], [112, 289]], 122, 276, 'no');
      branch('q2s', [[320, 250], [320, 289]], 330, 276, 'yes');
      BR.q1s.end = false;
      BR.q1s.p.removeAttribute('marker-end');
      const ROUTE = { f: ['q1f'], p: ['q1s', 'q2p'], s: ['q1s', 'q2s'] };
      function lightRoute(cat, upto) {
        const keys = ROUTE[cat].slice(0, upto == null ? 9 : upto);
        Object.keys(BR).forEach((k) => {
          const on = keys.indexOf(k) >= 0;
          const b = BR[k];
          b.p.setAttribute('stroke', on ? CAT[cat].col : C.line2);
          b.p.setAttribute('stroke-width', on ? 2.6 : 2);
          if (b.end) b.p.setAttribute('marker-end', on ? markers[cat] : markers.dim);
          b.t.setAttribute('fill', on ? C.white : C.dim);
        });
      }
      function dimRoute() {
        Object.keys(BR).forEach((k) => {
          const b = BR[k];
          b.p.setAttribute('stroke', C.line2); b.p.setAttribute('stroke-width', 2);
          if (b.end) b.p.setAttribute('marker-end', markers.dim);
          b.t.setAttribute('fill', C.dim);
        });
      }

      // --- question boxes
      function qbox(n, cx, cy, w, text) {
        const g = S('g', null, L.q);
        const r = S('rect', { x: cx - w / 2, y: cy - 16, width: w, height: 32, rx: 10, fill: C.surface2, stroke: C.line2, 'stroke-width': 1.5 }, g);
        S('circle', { cx: cx - w / 2 + 18, cy, r: 10, fill: C.bg, stroke: C.line2, 'stroke-width': 1.2 }, g);
        S('text', { x: cx - w / 2 + 18, y: cy + 4.5, 'font-size': 13, 'font-family': MONO, 'text-anchor': 'middle', fill: C.dim, text: String(n) }, g);
        S('text', { x: cx + 10, y: cy + 5, 'font-size': 14, 'text-anchor': 'middle', fill: C.white, text }, g);
        return { r, glow(col) { r.setAttribute('stroke', col || C.line2); r.setAttribute('stroke-width', col ? 2.2 : 1.5); r.setAttribute('fill', col ? mix(C.surface2, col, 0.12) : C.surface2); } };
      }
      const Q1 = qbox(1, 320, 172, 300, 'Reactants sealed inside, or fed in?');
      const Q2 = qbox(2, 220, 234, 316, 'Can charging reverse the reaction?');

      // --- buckets
      const BK = {};
      Object.keys(CAT).forEach((k) => {
        const c = CAT[k];
        const g = S('g', { class: 'vz-ct-bucket', role: 'button', tabindex: -1, 'aria-label': c.name + ' bucket' }, L.buckets);
        const bk = S('rect', { class: 'vz-ct-bk', x: c.x - 98, y: 292, width: 196, height: 182, rx: 14, fill: C.bg2, stroke: c.col, 'stroke-opacity': 0.35, 'stroke-width': 1.5 }, g);
        S('path', { d: `M${c.x - 98} 344V306a14 14 0 0 1 14 -14H${c.x + 84}a14 14 0 0 1 14 14V344Z`, fill: c.col, opacity: 0.06 }, g);
        S('text', { x: c.x, y: 315, 'font-size': 15, 'font-weight': 600, 'text-anchor': 'middle', fill: C.white, text: c.name }, g);
        S('text', { x: c.x, y: 334, 'font-size': 13, 'text-anchor': 'middle', fill: c.col, opacity: 0.85, text: c.sub }, g);
        S('line', { x1: c.x - 82, x2: c.x + 82, y1: 344, y2: 344, stroke: C.line, 'stroke-width': 1 }, g);
        const count = S('text', { x: c.x + 86, y: 309, 'font-size': 13, 'font-family': MONO, 'text-anchor': 'end', fill: C.faint, text: '' }, g);
        BK[k] = { g, bk, count, n: 0 };
      });
      function flashBucket(k, col) {
        const b = BK[k];
        b.bk.setAttribute('stroke', col); b.bk.setAttribute('stroke-opacity', 1); b.bk.setAttribute('stroke-width', 2.6);
        const back = () => { b.bk.setAttribute('stroke', CAT[k].col); b.bk.setAttribute('stroke-opacity', 0.35); b.bk.setAttribute('stroke-width', 1.5); };
        if (api.reduced) { api.timeout(back, 700); return; }
        api.tween(0.9, (k2) => { b.bk.setAttribute('stroke-opacity', (1 - 0.65 * k2).toFixed(2)); b.bk.setAttribute('stroke-width', (2.6 - 1.1 * k2).toFixed(2)); }).then(back);
      }

      // --- chips
      const items = ITEMS.map((d, i) => {
        const hx = TRAY_X[i % 3], hy = 44 + Math.floor(i / 3) * 36;
        S('rect', { x: hx - CW / 2, y: hy - CH / 2, width: CW, height: CH, rx: CH / 2, fill: 'none', stroke: C.line, 'stroke-width': 1.2, 'stroke-dasharray': '4 4' }, L.ghosts);
        const g = S('g', { class: 'vz-ct-chip vz-live', role: 'button', tabindex: 0, 'aria-label': d.label.replace(/[_^{}]/g, '') }, L.fly);
        const halo = S('circle', { r: 14, fill: C.white, opacity: 0 }, g);
        const bg = S('rect', { class: 'vz-ct-bg', x: -CW / 2, y: -CH / 2, width: CW, height: CH, rx: CH / 2, fill: C.surface2, stroke: C.line2, 'stroke-width': 1.4 }, g);
        const dot = S('circle', { cx: -CW / 2 + 15, cy: 0, r: 4.5, fill: C.faint }, g);
        const lab = chem(api, g, -CW / 2 + 27, 5, d.label, { 'font-size': 14, fill: C.text });
        const it = Object.assign({}, d, { i, g, bg, dot, lab, halo, hx, hy, x: hx, y: hy, s: 1, m: 0, tok: 0, state: 'tray', sel: false, tries: 0, tokenCol: C.white });
        api.listen(g, 'click', () => onChip(it));
        api.listen(g, 'keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onChip(it); } });
        apply(it);
        return it;
      });
      Object.keys(BK).forEach((k) => {
        api.listen(BK[k].g, 'click', () => onBucket(k));
        api.listen(BK[k].g, 'keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onBucket(k); } });
      });

      function apply(it) {
        const lift = it.sel ? -4 : 0;
        it.g.setAttribute('transform', `translate(${it.x.toFixed(1)} ${(it.y + lift).toFixed(1)}) scale(${it.s.toFixed(3)})`);
        const m = it.m;
        const w = api.lerp(CW, 18, m), h = api.lerp(CH, 18, m);
        it.bg.setAttribute('x', (-w / 2).toFixed(1)); it.bg.setAttribute('width', w.toFixed(1));
        it.bg.setAttribute('y', (-h / 2).toFixed(1)); it.bg.setAttribute('height', h.toFixed(1));
        it.bg.setAttribute('rx', (h / 2).toFixed(1));
        const tOp = api.clamp(1 - m * 2.5, 0, 1);
        it.lab.setAttribute('opacity', tOp.toFixed(2));
        it.dot.setAttribute('opacity', tOp.toFixed(2));
        it.halo.setAttribute('opacity', (0.3 * m).toFixed(3));
        it.halo.setAttribute('fill', it.tokenCol);
        it.bg.setAttribute('fill', m > 0.001 ? mix(C.surface2, it.tokenCol, m) : C.surface2);
      }
      function styleChip(it) {
        const c = CAT[it.cat];
        if (it.state === 'sorted') {
          it.bg.setAttribute('stroke', c.col); it.bg.setAttribute('stroke-opacity', 0.55); it.bg.removeAttribute('stroke-dasharray');
          it.dot.setAttribute('fill', c.col); it.lab.setAttribute('fill', C.white);
        } else {
          it.bg.setAttribute('stroke', it.sel ? C.white : C.line2); it.bg.setAttribute('stroke-opacity', 1);
          if (it.state === 'queued') it.bg.setAttribute('stroke-dasharray', '5 3'); else it.bg.removeAttribute('stroke-dasharray');
          it.dot.setAttribute('fill', it.sel ? C.white : C.faint); it.lab.setAttribute('fill', it.sel ? C.white : C.text);
        }
        const live = it.state === 'tray' || (mode === 'show' && it.state !== 'sorted');
        it.g.classList.toggle('vz-live', live);
        it.g.setAttribute('tabindex', it.state === 'tray' ? 0 : -1);
        it.g.setAttribute('aria-pressed', String(!!it.sel));
      }

      // --- state
      let mode = 'show';
      let gen = 0;
      let busy = false;
      let pendingAll = false;
      const queue = [];
      let selIt = null;
      let firstTry = 0, answered = 0;
      const SPEED = 520;

      function takeSlot(cat) { const k = BK[cat].n++; return { x: CAT[cat].x, y: slotY(k) }; }
      function moveTween(it, tok, dur, fn, easing) {
        return api.tween(dur, (k) => { if (it.tok === tok) fn(k); }, easing).then(() => it.tok === tok);
      }

      function land(it, quiet) {
        it.state = 'sorted'; it.sel = false; it.m = 0; it.s = 1;
        L.fly.appendChild(it.g);
        styleChip(it); apply(it);
        const b = BK[it.cat];
        b.count.textContent = String(items.filter((x) => x.state === 'sorted' && x.cat === it.cat).length);
        if (!quiet) {
          flashBucket(it.cat, CAT[it.cat].col);
          cap.set('<b>' + hchem(it.label) + '</b> → <b>' + CAT[it.cat].name + '</b>. ' + hchem(it.why));
        }
        updateReadouts();
      }

      async function flyRoute(it) {
        const tok = ++it.tok;
        const g0 = gen;
        const ok = () => it.tok === tok && gen === g0;
        it.state = 'flying'; it.sel = false; styleChip(it);
        L.fly.appendChild(it.g);
        dimRoute(); Q1.glow(); Q2.glow();
        it.tokenCol = C.white;
        cap.set('Sorting <b>' + hchem(it.label) + '</b>…');
        if (!(await moveTween(it, tok, 0.26, (k) => { it.m = k; apply(it); }))) return;
        const slot = takeSlot(it.cat);
        const legs = [{ pts: [[it.x, it.y], [it.x, 143], [320, 143], [320, 172]], at: () => { Q1.glow(C.white); lightRoute(it.cat, 1); } }];
        if (it.cat === 'f') legs.push({ pts: [[320, 172], [528, 172], [528, slot.y]], pre: () => Q1.glow() });
        else {
          legs.push({ pts: [[320, 172], [320, 234]], pre: () => Q1.glow(), at: () => { Q2.glow(C.white); lightRoute(it.cat, 2); } });
          if (it.cat === 'p') legs.push({ pts: [[320, 234], [112, 234], [112, slot.y]], pre: () => Q2.glow() });
          else legs.push({ pts: [[320, 234], [320, slot.y]], pre: () => Q2.glow() });
        }
        for (const leg of legs) {
          if (leg.pre) leg.pre();
          const pl = polyline(roundPts(leg.pts, 12));
          const dur = Math.max(0.25, pl.len / SPEED);
          if (!(await moveTween(it, tok, dur, (k) => { const p = pl.at(k); it.x = p[0]; it.y = p[1]; apply(it); }))) return;
          if (leg.at) { leg.at(); await wait(api, 0.42); if (!ok()) return; }
        }
        it.tokenCol = CAT[it.cat].col;
        if (!(await moveTween(it, tok, 0.3, (k) => { it.m = 1 - k; apply(it); }))) return;
        land(it);
      }

      async function flyDirect(it, delay) {
        const tok = ++it.tok;
        it.state = 'flying'; it.sel = false; styleChip(it);
        L.top.appendChild(it.g);
        await wait(api, delay);
        if (it.tok !== tok) return;
        const slot = takeSlot(it.cat);
        const x0 = it.x, y0 = it.y, x1 = slot.x, y1 = slot.y;
        const cx = (x0 + x1) / 2 + (x1 - x0) * 0.15, cy = (y0 + y1) / 2 - 40;
        const ok = await moveTween(it, tok, 0.75, (k) => {
          const m = 1 - k;
          it.x = m * m * x0 + 2 * m * k * cx + k * k * x1;
          it.y = m * m * y0 + 2 * m * k * cy + k * k * y1;
          it.s = 1 - 0.1 * Math.sin(k * Math.PI);
          apply(it);
        });
        if (ok) land(it, true);
      }

      async function wrongGuess(it, k) {
        const tok = ++it.tok;
        it.state = 'flying'; styleChip(it);
        L.top.appendChild(it.g);
        const x0 = it.hx, y0 = it.hy, tx = x0 + (CAT[k].x - x0) * 0.6, ty = y0 + (300 - y0) * 0.6;
        if (!(await moveTween(it, tok, 0.35, (e) => { it.x = api.lerp(x0, tx, e); it.y = api.lerp(y0, ty, e); apply(it); }))) return;
        flashBucket(k, C.bad);
        if (!(await moveTween(it, tok, 0.4, (e) => { it.x = tx + Math.sin(e * Math.PI * 6) * 7 * (1 - e); apply(it); }, (u) => u))) return;
        if (!(await moveTween(it, tok, 0.45, (e) => { it.x = api.lerp(tx, x0, e); it.y = api.lerp(ty, y0, e); apply(it); }))) return;
        L.fly.appendChild(it.g);
        it.state = 'tray'; it.sel = true; selIt = it;
        styleChip(it); apply(it);
        busy = false;
      }

      function pump() {
        if (busy) return;
        const it = queue.shift();
        if (!it) { if (pendingAll) { pendingAll = false; sortAll(); } return; }
        busy = true;
        const g0 = gen;
        flyRoute(it).then(() => { if (g0 !== gen) return; busy = false; pump(); });
      }

      function onChip(it) {
        if (mode === 'show') {
          if (it.state !== 'tray') return;
          it.state = 'queued'; styleChip(it);
          queue.push(it); pump();
          return;
        }
        if (busy || it.state !== 'tray') return;
        if (selIt && selIt !== it) { selIt.sel = false; styleChip(selIt); apply(selIt); }
        it.sel = !it.sel; selIt = it.sel ? it : null;
        styleChip(it); apply(it);
        setBucketsLive();
        cap.set(it.sel ? 'Where does <b>' + hchem(it.label) + '</b> go? Tap the bucket you think is right.' : 'Pick a cell, then tap the bucket it belongs in.');
      }

      function onBucket(k) {
        if (mode !== 'guess' || busy || !selIt) return;
        const it = selIt;
        if (!it.tries) answered++;
        it.tries++;
        if (k === it.cat) {
          if (it.tries === 1) firstTry++;
          selIt = null; it.sel = false;
          setBucketsLive();
          busy = true;
          const g0 = gen;
          flyRoute(it).then(() => { if (g0 !== gen) return; busy = false; updateReadouts(); if (items.every((x) => x.state === 'sorted')) doneCaption(); });
        } else {
          busy = true;
          cap.set(hint(it, k));
          updateReadouts();
          wrongGuess(it, k);
        }
      }

      function hint(it, guess) {
        const n = '<b>' + hchem(it.label) + '</b>';
        if (guess === 'f') return 'Not a fuel cell. ' + n + ' keeps its reactants sealed inside; nothing is fed in while it runs.';
        if (it.cat === 'f') return 'Not sealed. The fuel and oxidant of ' + n + ' are fed in continuously, so it is a flow / fuel cell.';
        if (guess === 'p') return 'Not primary. ' + n + ' can be recharged: current passed the opposite way reverses its reaction.';
        return 'Not secondary. The reaction in ' + n + ' cannot be reversed, so it cannot be recharged.';
      }

      function sortAll() {
        if (busy) { pendingAll = true; queue.length = 0; return; }
        if (mode === 'guess' && selIt) { selIt.sel = false; styleChip(selIt); apply(selIt); selIt = null; }
        const rest = items.filter((x) => x.state === 'tray' || x.state === 'queued');
        queue.length = 0;
        dimRoute(); Q1.glow(); Q2.glow();
        rest.forEach((it, k) => flyDirect(it, k * 0.09));
        setBucketsLive();
        doneCaption();
      }

      function doneCaption() {
        cap.set('<b>Primary</b>: sealed and one-way. <b>Secondary</b>: sealed and reversible, galvanic while discharging and electrolytic while charging. <b>Flow &amp; fuel cells</b>: reactants replenished continuously, energy drawn continuously, nothing stored.');
      }

      function reset(silent) {
        gen++;
        busy = false; pendingAll = false; queue.length = 0; selIt = null;
        firstTry = 0; answered = 0;
        Object.keys(BK).forEach((k) => { BK[k].n = 0; BK[k].count.textContent = ''; });
        dimRoute(); Q1.glow(); Q2.glow();
        items.forEach((it) => {
          const tok = ++it.tok;
          const x0 = it.x, y0 = it.y, m0 = it.m, s0 = it.s;
          it.state = 'tray'; it.sel = false; it.tries = 0; it.tokenCol = C.white;
          L.fly.appendChild(it.g);
          styleChip(it);
          moveTween(it, tok, 0.5, (k) => { it.x = api.lerp(x0, it.hx, k); it.y = api.lerp(y0, it.hy, k); it.m = api.lerp(m0, 0, k); it.s = api.lerp(s0, 1, k); apply(it); });
        });
        setBucketsLive();
        updateReadouts();
        if (!silent) introCaption();
      }

      function setBucketsLive() {
        const live = mode === 'guess' && !!selIt;
        Object.keys(BK).forEach((k) => {
          BK[k].g.classList.toggle('vz-live', live);
          BK[k].g.setAttribute('tabindex', live ? 0 : -1);
          if (live) BK[k].bk.setAttribute('stroke-dasharray', '6 4');
          else BK[k].bk.removeAttribute('stroke-dasharray');
        });
      }

      function introCaption() {
        cap.set(mode === 'show'
          ? 'Two questions sort any cell. Are the reactants <b>sealed inside</b> or <b>fed in continuously</b>? If sealed, can <b>charging reverse</b> the reaction? Tap an example and watch it answer them.'
          : 'Your turn. Pick a cell, then tap the bucket it belongs in. A wrong bucket bounces it back with a hint.');
        trayLabel.textContent = mode === 'show' ? 'EXAMPLES · TAP ONE TO SORT IT' : 'PICK A CELL, THEN A BUCKET';
      }

      // --- controls
      const ctr = api.controls();
      api.segmented([{ value: 'show', label: 'Show me' }, { value: 'guess', label: 'Let me guess' }], 'show', (v) => { mode = v; reset(); }, ctr);
      api.button('Sort all', () => sortAll(), ctr);
      api.button('Reset', () => reset(), ctr);
      const ro = api.readouts();
      const roSorted = api.readout('Sorted', ro, '0 / 9');
      const roScore = api.readout('First-try correct', ro, '—');
      const cap = api.caption('');
      cap.el.setAttribute('aria-live', 'polite');
      function updateReadouts() {
        roSorted.set(items.filter((x) => x.state === 'sorted').length + ' / ' + items.length);
        roScore.set(mode === 'guess' && answered ? firstTry + ' / ' + answered : '—');
      }
      introCaption();
      updateReadouts();
    }
  });

  // ======================================================================
  // 2. liion — charge / discharge
  // ======================================================================
  VIZ.register('liion', {
    title: 'Li-ion cell: charge and discharge',
    kind: 'Animation',
    mount(body, api) {
      addCss(api);
      const C = api.C, S = api.svg;
      const svg = api.stage('0 0 640 400', body, 'Lithium-ion cell: graphite, electrolyte with separator, and LiCoO2. Lithium ions cross the electrolyte while electrons take the outer circuit.');
      const defs = S('defs', null, svg);
      const glowId = api.uid('glow');
      const rg = S('radialGradient', { id: glowId }, defs);
      S('stop', { offset: '0%', 'stop-color': C.photon, 'stop-opacity': 0.6 }, rg);
      S('stop', { offset: '100%', 'stop-color': C.photon, 'stop-opacity': 0 }, rg);

      const CY0 = 110, CY1 = 302;
      const LAYERS = [118, 146, 174, 202, 230, 258, 286];
      const GAPS = [132, 160, 188, 216, 244, 272];
      const G_NEAR = 156, G_DEEP = 102, K_NEAR = 484, K_DEEP = 538;
      const N_SITE = GAPS.length * 2;

      const gBase = S('g', null, svg);
      const gWire = S('g', null, svg);
      const gE = S('g', null, svg);
      const gDev = S('g', null, svg);
      const gIons = S('g', null, svg);
      const gFx = S('g', null, svg);
      const gLab = S('g', null, svg);

      // cell body
      S('rect', { x: 48, y: CY0, width: 544, height: CY1 - CY0, rx: 12, fill: C.bg2, stroke: C.line2, 'stroke-width': 1.5 }, gBase);
      S('rect', { x: 64, y: CY0 + 1, width: 132, height: CY1 - CY0 - 2, fill: 'rgba(154,160,168,0.06)' }, gBase);
      S('rect', { x: 196, y: CY0 + 1, width: 248, height: CY1 - CY0 - 2, fill: C.water }, gBase);
      S('rect', { x: 444, y: CY0 + 1, width: 132, height: CY1 - CY0 - 2, fill: 'rgba(154,160,168,0.06)' }, gBase);
      // separator
      S('rect', { x: 314, y: CY0 + 1, width: 12, height: CY1 - CY0 - 2, fill: 'rgba(244,244,246,0.06)' }, gBase);
      [314, 326].forEach((x) => S('line', { x1: x, x2: x, y1: CY0 + 2, y2: CY1 - 2, stroke: C.dim, 'stroke-width': 1.3, 'stroke-dasharray': '6 5', opacity: 0.7 }, gBase));
      // graphite sheets (zig-zag edge view of graphene)
      LAYERS.forEach((y) => {
        const pts = [];
        for (let x = 70, k = 0; x <= 190; x += 6, k++) pts.push(x + ',' + (y + (k % 2 ? 2.4 : -2.4)));
        S('polyline', { points: pts.join(' '), fill: 'none', stroke: '#747a83', 'stroke-width': 1.7, 'stroke-linejoin': 'round' }, gBase);
      });
      // CoO2 layers (edge-sharing octahedra)
      LAYERS.forEach((y) => {
        let d = '';
        for (let x = 453; x <= 568; x += 14.5) d += `M${(x - 6.5).toFixed(1)} ${y}L${x.toFixed(1)} ${y - 5}L${(x + 6.5).toFixed(1)} ${y}L${x.toFixed(1)} ${y + 5}Z`;
        S('path', { d, fill: '#3b4050', stroke: '#6f7789', 'stroke-width': 1.1 }, gBase);
      });
      // current collectors
      S('rect', { x: 52, y: CY0 + 4, width: 10, height: CY1 - CY0 - 8, rx: 3, fill: C.metal, opacity: 0.85 }, gBase);
      S('rect', { x: 578, y: CY0 + 4, width: 10, height: CY1 - CY0 - 8, rx: 3, fill: C.metal, opacity: 0.85 }, gBase);

      // outer circuit (path runs in the CHARGE electron direction: LiCoO2 -> graphite)
      const WY = 52;
      const wirePts = [[583, 206], [583, WY], [57, WY], [57, 206]];
      S('path', { d: roundD([[583, CY0 + 4], [583, WY], [57, WY], [57, CY0 + 4]], 14), fill: 'none', stroke: C.metal, 'stroke-width': 2, opacity: 0.8 }, gWire);
      const wire = polyline(roundPts(wirePts, 14));
      // direction chevrons along the wire
      const chevrons = [[150, WY, 180], [240, WY, 180], [400, WY, 180], [490, WY, 180], [57, 86, 90], [583, 86, -90]].map(([x, y, a]) => {
        const g = S('g', null, gWire);
        S('path', { d: 'M-4 -5L3 0L-4 5', fill: 'none', stroke: C.e, 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', opacity: 0.8 }, g);
        return { g, x, y, a };
      });
      function setChevrons(k) { chevrons.forEach((c) => c.g.setAttribute('transform', `translate(${c.x} ${c.y}) rotate(${(c.a + 180 * k).toFixed(1)})`)); }
      chem(api, gLab, 196, 42, 'e^−', { 'font-size': 14, fill: C.e, 'text-anchor': 'middle' });
      chem(api, gLab, 444, 42, 'e^−', { 'font-size': 14, fill: C.e, 'text-anchor': 'middle' });

      // device: charger and bulb, cross-faded
      const charger = S('g', null, gDev);
      S('rect', { x: 286, y: 32, width: 68, height: 40, rx: 9, fill: C.surface2, stroke: C.line2, 'stroke-width': 1.5 }, charger);
      S('line', { x1: 313, x2: 313, y1: 45, y2: 59, stroke: C.white, 'stroke-width': 3.2, 'stroke-linecap': 'round' }, charger);
      S('line', { x1: 327, x2: 327, y1: 39, y2: 65, stroke: C.white, 'stroke-width': 1.8, 'stroke-linecap': 'round' }, charger);
      S('line', { x1: 286, x2: 313, y1: WY, y2: WY, stroke: C.metal, 'stroke-width': 1.5 }, charger);
      S('line', { x1: 327, x2: 354, y1: WY, y2: WY, stroke: C.metal, 'stroke-width': 1.5 }, charger);
      S('text', { x: 299, y: 46, 'font-size': 15, 'text-anchor': 'middle', fill: C.white, text: '−' }, charger);
      S('text', { x: 341, y: 46, 'font-size': 15, 'text-anchor': 'middle', fill: C.white, text: '+' }, charger);
      S('text', { x: 320, y: 22, 'font-size': 13, 'text-anchor': 'middle', fill: C.dim, text: 'Charger (DC supply)' }, charger);
      const bulb = S('g', { opacity: 0 }, gDev);
      const bulbGlow = S('circle', { cx: 320, cy: WY, r: 46, fill: `url(#${glowId})`, opacity: 0 }, bulb);
      S('circle', { cx: 320, cy: WY, r: 17, fill: C.surface2, stroke: C.dim, 'stroke-width': 1.5 }, bulb);
      const filament = S('path', { d: `M303 ${WY}H307L310 ${WY - 6}L314 ${WY + 6}L318 ${WY - 6}L322 ${WY + 6}L326 ${WY - 6}L330 ${WY + 6}L333 ${WY}H337`, fill: 'none', stroke: C.dim, 'stroke-width': 1.6, 'stroke-linejoin': 'round' }, bulb);
      S('text', { x: 320, y: 22, 'font-size': 13, 'text-anchor': 'middle', fill: C.dim, text: 'Bulb (load)' }, bulb);

      // terminals
      [[28, '−'], [612, '+']].forEach(([x, s]) => {
        S('circle', { cx: x, cy: 132, r: 11, fill: C.surface2, stroke: C.line2, 'stroke-width': 1.4 }, gLab);
        S('text', { x, y: 137.5, 'font-size': 16, 'text-anchor': 'middle', fill: C.white, text: s }, gLab);
      });

      // role tags above electrodes
      function roleTag(cx) {
        const g = S('g', null, gLab);
        const r = S('rect', { x: cx - 75, y: 83, width: 150, height: 22, rx: 11, fill: C.surface2, stroke: C.line2, 'stroke-width': 1.2 }, g);
        const t = S('text', { x: cx, y: 98.5, 'font-size': 13, 'text-anchor': 'middle', fill: C.white }, g);
        const a = S('tspan', { 'font-weight': 700, 'letter-spacing': '0.06em' }, t);
        const b = S('tspan', { fill: C.dim, dx: 4 }, t);
        return { g, r, a, b, cx, set(role) { a.textContent = role === 'anode' ? 'ANODE' : 'CATHODE'; b.textContent = role === 'anode' ? '· oxidation' : '· reduction'; r.setAttribute('stroke', role === 'anode' ? C.warn : C.line2); r.setAttribute('stroke-opacity', role === 'anode' ? 0.6 : 1); } };
      }
      const tagG = roleTag(140), tagK = roleTag(500);
      const liDir = chem(api, gLab, 320, 99, '', { 'font-size': 14, fill: C.cat, 'text-anchor': 'middle', 'font-weight': 600 });

      // bottom labels
      S('text', { x: 130, y: 326, 'font-size': 15, 'text-anchor': 'middle', fill: C.white, text: 'Graphite' }, gLab);
      S('text', { x: 320, y: 326, 'font-size': 15, 'text-anchor': 'middle', fill: C.white, text: 'Electrolyte + separator' }, gLab);
      chem(api, gLab, 510, 326, 'LiCoO_2', { 'font-size': 15, 'text-anchor': 'middle', fill: C.white });
      const compG = chem(api, gLab, 130, 346, 'Li_nC_6', { 'font-size': 13.5, 'text-anchor': 'middle', fill: C.dim });
      S('text', { x: 320, y: 346, 'font-size': 13, 'text-anchor': 'middle', fill: C.dim, text: 'EC / DEC in PE / PP' }, gLab);
      const compK = chem(api, gLab, 510, 346, 'Li_{1−n}CoO_2', { 'font-size': 13.5, 'text-anchor': 'middle', fill: C.dim });
      // state of charge bar
      S('text', { x: 212, y: 381, 'font-size': 13, 'text-anchor': 'end', fill: C.dim, text: 'State of charge' }, gLab);
      S('rect', { x: 222, y: 370, width: 196, height: 13, rx: 6.5, fill: C.bg2, stroke: C.line2, 'stroke-width': 1.2 }, gLab);
      const socFill = S('rect', { x: 223.5, y: 371.5, width: 97, height: 10, rx: 5, fill: C.good }, gLab);
      [0.25, 0.5, 0.75].forEach((f) => S('line', { x1: 222 + 196 * f, x2: 222 + 196 * f, y1: 371, y2: 382, stroke: C.bg, 'stroke-width': 1.2, opacity: 0.8 }, gLab));
      S('rect', { x: 419, y: 373.5, width: 3.5, height: 6, rx: 1, fill: C.line2 }, gLab);
      const socTxt = S('text', { x: 432, y: 381.5, 'font-size': 14, 'font-family': MONO, fill: C.white, text: '50 %' }, gLab);

      // sites and ions
      const sites = { g: [], k: [] };
      GAPS.forEach((y) => {
        sites.g.push({ x: G_DEEP, y, side: 'g', deep: true, occ: false, res: false, ion: null });
        sites.g.push({ x: G_NEAR, y, side: 'g', deep: false, occ: false, res: false, ion: null });
        sites.k.push({ x: K_NEAR, y, side: 'k', deep: false, occ: false, res: false, ion: null });
        sites.k.push({ x: K_DEEP, y, side: 'k', deep: true, occ: false, res: false, ion: null });
      });
      function placeIon(ion, s) { ion.setAttribute('transform', `translate(${s.x} ${s.y})`); ion._halo.setAttribute('opacity', 0); }
      // start at 50 %: deep sites of both electrodes filled
      [].concat(sites.g, sites.k).forEach((s) => {
        if (s.deep) { s.occ = true; s.ion = cationEl(api, gIons, 7.5); placeIon(s.ion, s); }
      });

      // electrons on the wire
      const N_E = 12;
      const eDots = [];
      for (let i = 0; i < N_E; i++) eDots.push(electronEl(api, gE));
      const spacing = wire.len / N_E;

      const st = { mode: 'charge', rate: 1, v: 1, off: 0, spawnT: 0.2, soc: 0.5, socShown: 0.5 };
      const flights = [];
      const INTERVAL = 0.85, FLIGHT = 2.0;

      function countG() { return sites.g.filter((s) => s.occ).length; }
      function pick(list, wantOcc, preferDeep) {
        const cand = list.filter((s) => (wantOcc ? s.occ : (!s.occ && !s.res)));
        if (!cand.length) return null;
        const pref = cand.filter((s) => s.deep === preferDeep);
        const pool = pref.length ? pref : cand;
        return pool[Math.floor(Math.random() * pool.length)];
      }
      function makePath(a, b) {
        const e1 = a.side === 'k' ? 438 : 202, e2 = b.side === 'k' ? 438 : 202;
        const ym = api.clamp((a.y + b.y) / 2 + (Math.random() * 24 - 12), 140, 266);
        return smooth([[a.x, a.y], [e1, a.y], [320, ym], [e2, b.y], [b.x, b.y]], 12);
      }
      function spawn() {
        const charge = st.mode === 'charge';
        const from = charge ? pick(sites.k, true, false) : pick(sites.g, true, false);
        const to = charge ? pick(sites.g, false, true) : pick(sites.k, false, true);
        if (!from || !to) return false;
        const ion = from.ion;
        from.occ = false; from.ion = null;
        to.res = true;
        ion._halo.setAttribute('opacity', 0.22);
        gIons.appendChild(ion);
        flights.push({ ion, from, to, p: 0, path: makePath(from, to), ph: Math.random() * Math.PI * 2 });
        return true;
      }
      function sourceLeft() { return (st.mode === 'charge' ? sites.k : sites.g).some((s) => s.occ); }
      function sinkLeft() { return (st.mode === 'charge' ? sites.g : sites.k).some((s) => !s.occ && !s.res); }
      function flowing() { return flights.length > 0 || (sourceLeft() && sinkLeft()); }

      function ring(x, y) {
        if (api.reduced) return;
        const c = S('circle', { cx: x, cy: y, r: 8, fill: 'none', stroke: C.cat, 'stroke-width': 1.6, opacity: 0.8 }, gFx);
        api.tween(0.5, (k) => { c.setAttribute('r', (8 + 9 * k).toFixed(1)); c.setAttribute('opacity', (0.8 * (1 - k)).toFixed(2)); }, (u) => u).then(() => c.remove());
      }
      function posOnFlight(f) {
        const ue = smoothstep(api.clamp(f.p, 0, 1));
        const p = f.path.at(ue);
        const jit = 3.5 * Math.sin(ue * Math.PI * 6 + f.ph) * Math.sin(ue * Math.PI);
        return [p[0], p[1] + jit];
      }
      function stepFlights(dt) {
        for (let i = flights.length - 1; i >= 0; i--) {
          const f = flights[i];
          f.p += dt * st.rate / FLIGHT;
          if (f.p >= 1) {
            f.to.occ = true; f.to.res = false; f.to.ion = f.ion;
            placeIon(f.ion, f.to);
            ring(f.to.x, f.to.y);
            flights.splice(i, 1);
            updateSoc();
          } else {
            const p = posOnFlight(f);
            f.ion.setAttribute('transform', `translate(${p[0].toFixed(1)} ${p[1].toFixed(1)})`);
          }
        }
      }
      function drawElectrons() {
        const vis = api.reduced ? 1 : 0.3 + 0.7 * Math.min(1, Math.abs(st.v));
        for (let i = 0; i < N_E; i++) {
          let d = (i * spacing + st.off) % wire.len;
          if (d < 0) d += wire.len;
          const p = wire.atLen(d);
          eDots[i].setAttribute('transform', `translate(${p[0].toFixed(1)} ${p[1].toFixed(1)})`);
          eDots[i].setAttribute('opacity', vis.toFixed(2));
        }
      }
      function updateSoc() {
        st.soc = countG() / N_SITE;
        const n = countG();
        setChem(api, compG, n === 0 ? 'C_6' : 'Li_nC_6');
        setChem(api, compK, n === 0 ? 'LiCoO_2' : 'Li_{1−n}CoO_2');
        roSoc.set(Math.round(st.soc * 100) + ' %');
        if (api.reduced) { st.socShown = st.soc; drawSoc(); }
        if (!flowing()) statusCaption();
      }
      function drawSoc() {
        socFill.setAttribute('width', Math.max(0, 193 * st.socShown).toFixed(1));
        socTxt.textContent = Math.round(st.socShown * 100) + ' %';
        socFill.setAttribute('fill', st.socShown < 0.2 ? C.warn : C.good);
      }

      // controls
      const ctr = api.controls();
      api.segmented([{ value: 'charge', label: 'Charge' }, { value: 'discharge', label: 'Discharge' }], 'charge', (v) => setMode(v), ctr);
      api.slider({ label: 'Current', min: 0.5, max: 3, step: 0.5, value: 1, format: (v) => String(v) + '×' }, (v) => { st.rate = v; }, ctr);
      if (api.reduced) api.button('Move one Li<sup>+</sup>', () => stepOnce(), ctr);
      const ro = api.readouts();
      const roMode = api.readout('Mode', ro, '');
      const roOx = api.readout('Oxidation at', ro, '');
      const roSoc = api.readout('State of charge', ro, '50 %');
      const rx = reactionPanel(api, body);
      legend(api, body, [[C.e, 'electron e<sup>−</sup> (outer circuit)'], [C.cat, 'lithium ion Li<sup>+</sup> (electrolyte)']]);
      const cap = api.caption('');
      cap.el.setAttribute('aria-live', 'polite');

      function statusCaption() {
        const charge = st.mode === 'charge';
        if (charge && !sourceLeft() && !flights.length) { cap.set('<b>Fully charged.</b> Every mobile Li<sup>+</sup> now sits between the graphite layers, so no more current can flow. Switch to Discharge.'); return; }
        if (!charge && !sourceLeft() && !flights.length) { cap.set('<b>Flat.</b> All the Li<sup>+</sup> is back between the CoO<sub>2</sub> layers. Switch to Charge.'); return; }
        cap.set(charge
          ? '<b>Charging.</b> The charger pulls electrons out of LiCoO<sub>2</sub>: cobalt is <b>oxidised</b>, so for now LiCoO<sub>2</sub> is the <b>anode</b> even though it stays the + terminal. Li<sup>+</sup> leaves it, crosses the separator and slips between the graphite layers, where it meets the electrons pushed in through the wire.'
          : '<b>Discharging.</b> Li<sup>+</sup> leaves the graphite (<b>oxidation</b>, so graphite is the <b>anode</b>) and swims back between the CoO<sub>2</sub> layers. Its electron cannot cross the electrolyte, so it goes round through the bulb and reduces cobalt in LiCoO<sub>2</sub>.');
      }
      function setTags(m) {
        const charge = m === 'charge';
        tagG.set(charge ? 'cathode' : 'anode');
        tagK.set(charge ? 'anode' : 'cathode');
      }
      function labelsFor(m, withTags) {
        const charge = m === 'charge';
        if (withTags) setTags(m);
        setChem(api, liDir, charge ? '← Li^+ into graphite' : 'Li^+ back to LiCoO_2 →');
        roMode.set(charge ? 'Charging · electrolytic' : 'Discharging · galvanic');
        roOx.set(charge ? 'LiCoO<sub>2</sub> (+)' : 'Graphite (−)');
        rx.set(charge ? [
          { k: 'LiCoO₂ · anode (oxidation)', v: 'LiCoO_2 → Li_{1−n}CoO_2 + n Li^+ + n e^−' },
          { k: 'Graphite · cathode (reduction)', v: 'C_6 + n e^− + n Li^+ → Li_nC_6' },
          { k: 'Overall (charging)', v: 'LiCoO_2 + C_6 → Li_{1−n}CoO_2 + Li_nC_6', net: true }
        ] : [
          { k: 'Graphite · anode (oxidation)', v: 'Li_nC_6 → C_6 + n e^− + n Li^+' },
          { k: 'LiCoO₂ · cathode (reduction)', v: 'Li_{1−n}CoO_2 + n Li^+ + n e^− → LiCoO_2' },
          { k: 'Overall (discharging)', v: 'Li_{1−n}CoO_2 + Li_nC_6 → LiCoO_2 + C_6', net: true }
        ]);
      }
      function setMode(m) {
        if (m === st.mode) return;
        st.mode = m;
        // in-flight ions turn round and go back where they came from
        flights.forEach((f) => {
          const a = f.from; f.from = f.to; f.to = a;
          f.from.res = false; f.to.res = true;
          f.path = f.path.reversed(); f.p = 1 - f.p; f.ph = Math.PI - f.ph;
        });
        st.spawnT = 0.35;
        labelsFor(m, false);
        let tagsSet = false;
        statusCaption();
        const toBulb = m === 'discharge';
        const k0 = toBulb ? 0 : 1;
        api.tween(0.55, (k) => {
          const b = toBulb ? k : 1 - k;
          bulb.setAttribute('opacity', api.clamp(2 * b - 1, 0, 1).toFixed(2)); charger.setAttribute('opacity', api.clamp(1 - 2 * b, 0, 1).toFixed(2));
          setChevrons(api.lerp(k0, 1 - k0, k));
          if (k >= 0.5 && !tagsSet) { tagsSet = true; setTags(m); }
          [tagG, tagK].forEach((t) => { const s = Math.abs(Math.cos(k * Math.PI)); t.g.setAttribute('transform', `translate(0 ${94 * (1 - s)}) scale(1 ${s.toFixed(3)})`); });
        }).then(() => { [tagG, tagK].forEach((t) => t.g.removeAttribute('transform')); });
        if (api.reduced) drawElectrons();
      }
      function stepOnce() {
        if (spawn()) { const f = flights.pop(); f.to.occ = true; f.to.res = false; f.to.ion = f.ion; placeIon(f.ion, f.to); updateSoc(); }
        statusCaption();
      }

      setChevrons(0);
      labelsFor('charge', true);
      updateSoc();
      drawSoc();
      statusCaption();
      drawElectrons();

      if (!api.reduced) {
        let wasFlowing = true;
        api.loop((dt) => {
          if (sourceLeft() && sinkLeft()) {
            st.spawnT -= dt * st.rate;
            if (st.spawnT <= 0) { spawn(); st.spawnT += INTERVAL; }
          }
          stepFlights(dt);
          const fl = flowing();
          if (fl !== wasFlowing) { wasFlowing = fl; statusCaption(); }
          const target = fl ? (st.mode === 'charge' ? 1 : -1) : 0;
          st.v += (target - st.v) * Math.min(1, dt * 3.2);
          st.off += st.v * (spacing / INTERVAL) * st.rate * dt;
          drawElectrons();
          // bulb brightness follows the electron current
          const lit = st.mode === 'discharge' ? Math.min(1, Math.abs(st.v)) : 0;
          bulbGlow.setAttribute('opacity', (lit * (0.85 + 0.15 * Math.min(1, st.rate / 2))).toFixed(2));
          filament.setAttribute('stroke', lit > 0.05 ? mix(C.dim, C.photon, lit) : C.dim);
          st.socShown += (st.soc - st.socShown) * Math.min(1, dt * 5);
          drawSoc();
        });
      }
    }
  });

  // ======================================================================
  // 3. fuelcell — PEMFC vs SOFC
  // ======================================================================
  VIZ.register('fuelcell', {
    title: 'Fuel cells: PEMFC vs SOFC',
    kind: 'Animation',
    mount(body, api) {
      addCss(api);
      const C = api.C, S = api.svg;
      const svg = api.stage('0 0 640 420', body, 'Fuel cell cross-section: fuel channel, anode, electrolyte, cathode, air channel, with the external load on top');
      const defs = S('defs', null, svg);
      const loadGlowId = api.uid('lg');
      const lg = S('radialGradient', { id: loadGlowId }, defs);
      S('stop', { offset: '0%', 'stop-color': C.photon, 'stop-opacity': 0.55 }, lg);
      S('stop', { offset: '100%', 'stop-color': C.photon, 'stop-opacity': 0 }, lg);
      const heatId = api.uid('heat');
      const hg = S('linearGradient', { id: heatId, x1: 0, y1: 1, x2: 0, y2: 0 }, defs);
      S('stop', { offset: '0%', 'stop-color': C.heat, 'stop-opacity': 0.16 }, hg);
      S('stop', { offset: '100%', 'stop-color': C.heat, 'stop-opacity': 0.03 }, hg);

      const Y0 = 96, Y1 = 340;
      const XA = 105, XK = 535;       // channel centres
      const WA = 188, WK = 452, WY = 40;
      const XAI = 220, XKI = 421;     // reaction interfaces (anode | electrolyte | cathode)

      const gBase = S('g', null, svg);
      const gP = S('g', null, svg);          // PEMFC-only visuals
      const gS = S('g', { opacity: 0 }, svg); // SOFC-only visuals
      const heat = S('rect', { x: 60, y: Y0, width: 520, height: Y1 - Y0, fill: `url(#${heatId})`, opacity: 0 }, svg);
      const gWire = S('g', null, svg);
      const gPart = S('g', null, svg);
      const gTop = S('g', null, svg);

      // channels and plates
      S('rect', { x: 60, y: Y0, width: 90, height: Y1 - Y0, fill: C.bg2 }, gBase);
      S('rect', { x: 490, y: Y0, width: 90, height: Y1 - Y0, fill: C.bg2 }, gBase);
      S('line', { x1: 60, x2: 60, y1: Y0, y2: Y1, stroke: C.metal, 'stroke-width': 3, opacity: 0.7, 'stroke-linecap': 'round' }, gBase);
      S('line', { x1: 580, x2: 580, y1: Y0, y2: Y1, stroke: C.metal, 'stroke-width': 3, opacity: 0.7, 'stroke-linecap': 'round' }, gBase);
      [[60, 88], [120, 150], [490, 520], [550, 580]].forEach(([a, b]) => {
        S('line', { x1: a, x2: b, y1: Y0, y2: Y0, stroke: C.metal, 'stroke-width': 3, opacity: 0.7, 'stroke-linecap': 'round' }, gBase);
        S('line', { x1: a, x2: b, y1: Y1, y2: Y1, stroke: C.metal, 'stroke-width': 3, opacity: 0.7, 'stroke-linecap': 'round' }, gBase);
      });
      // electrode + electrolyte blocks (outline common, fill per type)
      function porous(g, x0, x1, fillBase, dots, seed) {
        S('rect', { x: x0, y: Y0, width: x1 - x0, height: Y1 - Y0, fill: fillBase }, g);
        let s = seed;
        const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
        for (let y = Y0 + 7; y < Y1 - 4; y += 11) {
          for (let x = x0 + 6 + (Math.round(y) % 2 ? 5 : 0); x < x1 - 3; x += 11) {
            const d = dots[Math.floor(rnd() * dots.length)];
            S('circle', { cx: (x + rnd() * 3).toFixed(1), cy: (y + rnd() * 3).toFixed(1), r: d[1], fill: d[0] }, g);
          }
        }
      }
      // PEMFC: GDL + Pt catalyst | Nafion | Pt catalyst + GDL
      porous(gP, 150, 212, '#26262b', [['#34343b', 3.2], ['#1c1c20', 2.4]], 11);
      porous(gP, 428, 490, '#26262b', [['#34343b', 3.2], ['#1c1c20', 2.4]], 23);
      S('rect', { x: 212, y: Y0, width: 14, height: Y1 - Y0, fill: '#18181b' }, gP);
      S('rect', { x: 414, y: Y0, width: 14, height: Y1 - Y0, fill: '#18181b' }, gP);
      for (let y = Y0 + 6; y < Y1; y += 9) { [216, 222, 418, 424].forEach((x, j) => S('circle', { cx: x, cy: y + (j % 2) * 4, r: 1.7, fill: '#cfd2d8', opacity: 0.8 }, gP)); }
      S('rect', { x: 226, y: Y0, width: 188, height: Y1 - Y0, fill: 'rgba(124,192,255,0.09)' }, gP);
      for (let y = Y0 + 16; y < Y1 - 6; y += 22) for (let x = 242; x < 410; x += 24) S('circle', { cx: x + ((y / 22) % 2 ? 12 : 0), cy: y, r: 2.2, fill: 'none', stroke: C.faint, 'stroke-width': 1 }, gP);
      // SOFC: Ni–YSZ cermet | YSZ ceramic | LSM
      porous(gS, 150, 226, '#2a2826', [['#9aa0a8', 3.4], ['#5c564e', 3.2], ['#1c1c20', 2.2]], 7);
      porous(gS, 414, 490, '#2b2630', [['#6e5f7a', 3.3], ['#4a4152', 3], ['#1c1c20', 2.2]], 31);
      S('rect', { x: 226, y: Y0, width: 188, height: Y1 - Y0, fill: 'rgba(233,196,106,0.07)' }, gS);
      for (let y = Y0 + 11; y < Y1 - 4; y += 16) for (let x = 236; x < 410; x += 16) S('rect', { x: x - 1.6, y: y - 1.6, width: 3.2, height: 3.2, fill: C.faint, opacity: 0.8 }, gS);
      // block outlines
      [[150, 226], [226, 414], [414, 490]].forEach(([a, b]) => S('rect', { x: a, y: Y0, width: b - a, height: Y1 - Y0, fill: 'none', stroke: C.line2, 'stroke-width': 1.2 }, gBase));

      // inlets / outlets
      const flowArrow = api.arrow(svg, C.dim, 9);
      [[XA, 46, 92], [XK, 46, 92], [XA, 344, 386], [XK, 344, 386]].forEach(([x, a, b]) => S('line', { x1: x, x2: x, y1: a, y2: b, stroke: C.dim, 'stroke-width': 1.8, 'marker-end': flowArrow }, gBase));
      function modeText(g, x, y, str, attrs) { return chem(api, g, x, y, str, Object.assign({ 'font-size': 13.5, 'text-anchor': 'middle', fill: C.text }, attrs || {})); }
      modeText(gP, XA, 34, 'H_2 in', { fill: C.white });
      modeText(gP, XK, 34, 'O_2 (air) in', { fill: C.white });
      modeText(gP, XA, 404, 'unused H_2');
      modeText(gP, XK, 404, 'H_2O + unused O_2');
      modeText(gS, XA, 34, 'H_2 + CO in', { fill: C.white });
      modeText(gS, XK, 34, 'Air (O_2) in', { fill: C.white });
      modeText(gS, XA, 404, 'H_2O + CO_2 out');
      modeText(gS, XK, 404, 'Excess air');

      // external circuit + load
      S('path', { d: roundD([[WA, Y0], [WA, WY], [292, WY]], 12), fill: 'none', stroke: C.metal, 'stroke-width': 2, opacity: 0.85 }, gWire);
      S('path', { d: roundD([[348, WY], [WK, WY], [WK, Y0]], 12), fill: 'none', stroke: C.metal, 'stroke-width': 2, opacity: 0.85 }, gWire);
      const loadGlow = S('ellipse', { cx: 320, cy: WY, rx: 48, ry: 26, fill: `url(#${loadGlowId})`, opacity: 0 }, gWire);
      const zig = S('path', { d: `M292 ${WY}L296 ${WY}L300 ${WY - 8}L308 ${WY + 8}L316 ${WY - 8}L324 ${WY + 8}L332 ${WY - 8}L340 ${WY + 8}L344 ${WY}L348 ${WY}`, fill: 'none', stroke: C.text, 'stroke-width': 2, 'stroke-linejoin': 'round' }, gWire);
      S('text', { x: 320, y: 20, 'font-size': 13, 'text-anchor': 'middle', fill: C.dim, text: 'External load' }, gWire);
      chem(api, gWire, 236, 32, 'e^−  →', { 'font-size': 13.5, 'text-anchor': 'middle', fill: C.e });
      chem(api, gWire, 404, 32, 'e^−  →', { 'font-size': 13.5, 'text-anchor': 'middle', fill: C.e });

      // temperature pill
      const pill = S('g', null, gTop);
      const pillR = S('rect', { x: 262, y: 62, width: 116, height: 24, rx: 12, fill: C.surface2, stroke: C.line2, 'stroke-width': 1.3 }, pill);
      const pillT = S('text', { x: 320, y: 78.5, 'font-size': 13.5, 'font-family': MONO, 'text-anchor': 'middle', fill: C.white, text: '< 80 °C' }, pill);

      // terminal / part labels
      S('text', { x: 188, y: 362, 'font-size': 14, 'text-anchor': 'middle', fill: C.white, text: 'Anode (−)' }, gTop);
      S('text', { x: 320, y: 362, 'font-size': 14, 'text-anchor': 'middle', fill: C.white, text: 'Electrolyte' }, gTop);
      S('text', { x: 452, y: 362, 'font-size': 14, 'text-anchor': 'middle', fill: C.white, text: 'Cathode (+)' }, gTop);
      modeText(gP, 188, 380, 'Pt on GDL', { fill: C.dim, 'font-size': 13 });
      modeText(gP, 320, 380, 'Nafion membrane', { fill: C.dim, 'font-size': 13 });
      modeText(gP, 452, 380, 'Pt on GDL', { fill: C.dim, 'font-size': 13 });
      modeText(gS, 188, 380, 'Ni–YSZ cermet', { fill: C.dim, 'font-size': 13 });
      modeText(gS, 320, 380, 'YSZ ceramic', { fill: C.dim, 'font-size': 13 });
      modeText(gS, 452, 380, 'LSM', { fill: C.dim, 'font-size': 13 });
      // ion direction inside the electrolyte
      const ionArrowP = api.arrow(svg, C.cat, 9);
      const ionArrowS = api.arrow(svg, C.an, 9);
      S('line', { x1: 290, x2: 352, y1: 113, y2: 113, stroke: C.cat, 'stroke-width': 2, 'marker-end': ionArrowP }, gP);
      chem(api, gP, 270, 118, 'H^+', { 'font-size': 14, 'font-weight': 700, 'text-anchor': 'middle', fill: C.cat });
      S('line', { x1: 350, x2: 288, y1: 113, y2: 113, stroke: C.an, 'stroke-width': 2, 'marker-end': ionArrowS }, gS);
      chem(api, gS, 374, 118, 'O^{2−}', { 'font-size': 14, 'font-weight': 700, 'text-anchor': 'middle', fill: C.an });

      // ---------------- particle paths
      const R = (a, b) => a + Math.random() * (b - a);
      const gasInA = (y, x) => smooth([[XA + R(-6, 6), 58], [XA + R(-8, 8), Y0 + 12], [XA + R(-10, 10), (Y0 + y) / 2 + 10], [132, y - 8], [160, y], [x, y]], 10);
      const gasInK = (y, x) => smooth([[XK + R(-6, 6), 58], [XK + R(-8, 8), Y0 + 12], [XK + R(-10, 10), (Y0 + y) / 2 + 10], [508, y - 8], [480, y], [x, y]], 10);
      const outYs = (y) => { const b = Math.min(y + 34, Y1 - 14); return [y + 6, b, Math.max(b + 2, Math.min(y + 90, Y1 - 6))]; };
      const outA = (y, x) => { const q = outYs(y); return smooth([[x, y], [160, q[0]], [XA + R(0, 14), q[1]], [XA + R(-6, 6), q[2]], [XA, Y1 + 8], [XA, 392]], 10); };
      const outK = (y, x) => { const q = outYs(y); return smooth([[x, y], [480, q[0]], [XK - R(0, 14), q[1]], [XK + R(-6, 6), q[2]], [XK, Y1 + 8], [XK, 392]], 10); };
      const passA = () => smooth([[XA + R(-6, 6), 58], [XA + R(-14, 14), 170], [XA + R(-14, 14), 260], [XA, Y1], [XA, 392]], 10);
      const passK = () => smooth([[XK + R(-6, 6), 58], [XK + R(-14, 14), 170], [XK + R(-14, 14), 260], [XK, Y1], [XK, 392]], 10);
      const across = (x0, y0, x1, y1) => polyline([[x0, y0], [x1, y1]]);
      const eWire = (ya, yk, xk) => polyline(roundPts([[XAI - 2, ya], [WA + 6, Y0 + 14], [WA, Y0], [WA, WY], [WK, WY], [WK, Y0], [WK - 6, Y0 + 14], [xk, yk]], 12));

      // ---------------- cycles (one stoichiometric turnover each)
      function lanes() {
        const y1 = R(140, 300);
        let y2 = y1 + (Math.random() < 0.5 ? -1 : 1) * R(34, 58);
        if (y2 < 136 || y2 > 318) y2 = y1 + (y1 > 220 ? -1 : 1) * R(34, 58);
        return [y1, api.clamp(y2, 136, 318)];
      }
      function T(el, t0, t1, t2, path, o) { return Object.assign({ el, t0, t1, t2, path, vis: true }, o || {}); }
      let cycleIx = 0;
      function buildPEM(g) {
        const [y1, y2] = lanes();
        const ym = (y1 + y2) / 2;
        const tr = [], fl = [];
        const spin = () => ({ spin: R(-2.2, 2.2), rot0: R(0, 6.3) });
        tr.push(T(molEl(api, g, 'H2'), 0, 1.6, 1.6, gasInA(y1, XAI - 2), Object.assign({ fadeIn: true, ease: easeOut }, spin())));
        tr.push(T(molEl(api, g, 'H2'), 0.15, 1.75, 1.75, gasInA(y2, XAI - 2), Object.assign({ fadeIn: true, ease: easeOut }, spin())));
        fl.push({ t: 1.6, x: XAI - 2, y: y1, col: C.white }, { t: 1.75, x: XAI - 2, y: y2, col: C.white });
        [[y1, 1.6, 3.75], [y2, 1.75, 3.9]].forEach(([y, t, tw]) => {
          [-6, 6].forEach((dy, j) => {
            tr.push(T(cationEl(api, g, 5.4), t + j * 0.08, t + 1.95 + j * 0.08, tw, across(XAI + 2, y + dy, XKI - 5, y + dy), { pop: true, shrink: true, ease: hopper(5), jit: 2.2, jf: 31, ph: R(0, 6) }));
            tr.push(T(electronEl(api, g), t + j * 0.13, t + 1.8 + j * 0.13, tw, eWire(y + dy, y + dy * 1.4, XKI + 8), { pop: true, shrink: true }));
          });
        });
        tr.push(T(molEl(api, g, 'O2'), 0.9, 2.9, 2.9, gasInK(ym, XKI + 5), Object.assign({ fadeIn: true, ease: easeOut }, spin())));
        fl.push({ t: 2.9, x: XKI + 4, y: ym, col: C.white });
        tr.push(T(molEl(api, g, 'O'), 2.9, 3.3, 3.75, across(XKI + 2, ym, XKI + 1, y1), { ease: smoothstep, shrink: true }));
        tr.push(T(molEl(api, g, 'O'), 2.9, 3.3, 3.9, across(XKI + 2, ym, XKI + 1, y2), { ease: smoothstep, shrink: true }));
        fl.push({ t: 3.75, x: XKI, y: y1, col: C.white }, { t: 3.9, x: XKI, y: y2, col: C.white });
        tr.push(T(molEl(api, g, 'H2O'), 3.75, 6.0, 6.0, outK(y1, XKI + 2), Object.assign({ pop: true, fadeOut: true }, spin())));
        tr.push(T(molEl(api, g, 'H2O'), 3.9, 6.15, 6.15, outK(y2, XKI + 2), Object.assign({ pop: true, fadeOut: true }, spin())));
        if (cycleIx % 2 === 0) tr.push(T(molEl(api, g, 'H2'), 0.3, 3.1, 3.1, passA(), Object.assign({ fadeIn: true, fadeOut: true }, spin())));
        else tr.push(T(molEl(api, g, 'O2'), 0.5, 3.3, 3.3, passK(), Object.assign({ fadeIn: true, fadeOut: true }, spin())));
        return { tr, fl, end: 6.3 };
      }
      function buildSOFC(g) {
        const [y1, y2] = lanes();
        const ym = (y1 + y2) / 2;
        const tr = [], fl = [];
        const spin = () => ({ spin: R(-2.2, 2.2), rot0: R(0, 6.3) });
        tr.push(T(molEl(api, g, 'O2'), 0, 1.6, 1.6, gasInK(ym, XKI + 6), Object.assign({ fadeIn: true, ease: easeOut }, spin())));
        fl.push({ t: 1.6, x: XKI + 4, y: ym, col: C.an });
        [[y1, 3.9], [y2, 4.05]].forEach(([y, tArr]) => {
          tr.push(T(anionEl(api, g), 1.6, tArr, tArr, polyline([[XKI + 3, ym], [XKI - 8, y], [XAI + 4, y]]), { pop: true, ease: hopper(6), jit: 2, jf: 37, ph: R(0, 6) }));
        });
        tr.push(T(molEl(api, g, 'H2'), 1.9, 3.9, 3.9, gasInA(y1, XAI + 1), Object.assign({ fadeIn: true, ease: easeOut }, spin())));
        tr.push(T(molEl(api, g, 'CO'), 2.05, 4.05, 4.05, gasInA(y2, XAI + 1), Object.assign({ fadeIn: true, ease: easeOut }, spin())));
        fl.push({ t: 3.9, x: XAI + 2, y: y1, col: C.white }, { t: 4.05, x: XAI + 2, y: y2, col: C.white });
        tr.push(T(molEl(api, g, 'H2O'), 3.9, 6.1, 6.1, outA(y1, XAI), Object.assign({ pop: true, fadeOut: true }, spin())));
        tr.push(T(molEl(api, g, 'CO2'), 4.05, 6.25, 6.25, outA(y2, XAI), Object.assign({ pop: true, fadeOut: true }, spin())));
        [[y1, 3.9], [y2, 4.05]].forEach(([y, t]) => {
          [0, 1].forEach((j) => {
            const yk = R(140, 316);
            tr.push(T(electronEl(api, g), t + j * 0.13, t + 1.8 + j * 0.13, t + 2.05 + j * 0.13, eWire(y + (j ? 6 : -6), yk, XKI + 10), { pop: true, shrink: true }));
          });
        });
        if (cycleIx % 2 === 0) tr.push(T(molEl(api, g, 'O2'), 0.4, 3.2, 3.2, passK(), Object.assign({ fadeIn: true, fadeOut: true }, spin())));
        return { tr, fl, end: 6.35 };
      }

      function renderTrack(tr, tau) {
        if (tau < tr.t0 || tau > tr.t2) { if (tr.vis) { tr.el.setAttribute('opacity', 0); tr.vis = false; } return; }
        const u = tr.t1 > tr.t0 ? Math.min(1, (tau - tr.t0) / (tr.t1 - tr.t0)) : 1;
        const ue = tr.ease ? tr.ease(u) : u;
        const p = tr.path.at(ue);
        let x = p[0], y = p[1];
        if (tr.jit) y += tr.jit * Math.sin(ue * tr.jf + tr.ph) * Math.sin(ue * Math.PI);
        let sc = 1, op = 1;
        const age = tau - tr.t0, left = tr.t2 - tau;
        if (tr.pop && age < 0.18) sc = 0.3 + 0.7 * age / 0.18;
        if (tr.fadeIn && age < 0.3) op = age / 0.3;
        if (tr.fadeOut && left < 0.3) op = Math.min(op, left / 0.3);
        if (tr.shrink && left < 0.18) sc *= Math.max(0.15, left / 0.18);
        const rot = tr.spin ? (tr.rot0 + tr.spin * (Math.min(tau, tr.t1) - tr.t0)) * 57.2958 : 0;
        tr.el.setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)})${rot ? ' rotate(' + rot.toFixed(1) + ')' : ''}${sc !== 1 ? ' scale(' + sc.toFixed(3) + ')' : ''}`);
        tr.el.setAttribute('opacity', op.toFixed(2));
        tr.vis = true;
      }
      function renderFlash(f, tau) {
        const a = tau - f.t;
        if (a < 0 || a > 0.5) { if (f.vis !== false) { f.el.setAttribute('opacity', 0); f.vis = false; } return; }
        f.el.setAttribute('r', (4 + 16 * a / 0.5).toFixed(1));
        f.el.setAttribute('opacity', (0.85 * (1 - a / 0.5)).toFixed(2));
        f.vis = true;
      }

      // ---------------- simulation
      const st = { mode: 'pem', rate: 1, now: 0, spawnT: 0, glow: 0.6 };
      const PERIOD = 1.1;
      let cycles = [];
      function spawnCycle(t0) {
        const g = S('g', null, gPart);
        const c = st.mode === 'pem' ? buildPEM(g) : buildSOFC(g);
        cycleIx++;
        c.fl.forEach((f) => { f.el = S('circle', { cx: f.x, cy: f.y, r: 4, fill: 'none', stroke: f.col, 'stroke-width': 1.8, opacity: 0 }, g); });
        c.g = g; c.t0 = t0;
        cycles.push(c);
        return c;
      }
      function renderAll() {
        let eMoving = 0;
        for (let i = cycles.length - 1; i >= 0; i--) {
          const c = cycles[i];
          const tau = st.now - c.t0;
          if (tau > c.end) { c.g.remove(); cycles.splice(i, 1); continue; }
          c.tr.forEach((tr) => {
            renderTrack(tr, tau);
            if (tr.shrink && tr.vis && tau < tr.t1 && tr.path.len > 300) eMoving++;
          });
          c.fl.forEach((f) => renderFlash(f, tau));
        }
        return eMoving;
      }
      function prewarm() {
        cycles.forEach((c) => c.g.remove());
        cycles = [];
        if (st.rate <= 0) return;
        const per = PERIOD / st.rate;
        const n = Math.ceil(6.4 / per);
        for (let k = n; k >= 1; k--) spawnCycle(st.now - k * per);
        st.spawnT = per * 0.5;
      }

      // ---------------- readouts & text
      const INFO = {
        pem: {
          el: 'Nafion (acidic polymer)', ion: 'H<sup>+</sup>, anode → cathode', temp: '&lt; 80 °C', fuel: 'Pure H<sub>2</sub> only',
          cat: 'Pt-based (precious metal)', eff: '≥ 40 % <small>electrical; 75–82 % conversion</small>',
          rx: [
            { k: 'Anode (oxidation, on Pt)', v: '2H_2 → 4H^+ + 4e^−' },
            { k: 'Cathode (reduction, on Pt)', v: 'O_2 + 4H^+ + 4e^− → 2H_2O' },
            { k: 'Net · E°cell = 1.23 V', v: '2H_2 + O_2 → 2H_2O', net: true }
          ],
          cap: '<b>PEMFC.</b> H<sub>2</sub> splits on the <b>Pt catalyst</b> into H<sup>+</sup> and e<sup>−</sup>. The Nafion membrane lets only <b>H<sup>+</sup></b> through, so the electrons are forced round the outer circuit through the load. At the cathode, protons, electrons and O<sub>2</sub> make water, which leaves on the <b>cathode side</b>. Runs <b>below 80 °C</b>, so it starts fast but needs <b>pure H<sub>2</sub></b>.'
        },
        sofc: {
          el: 'YSZ ceramic (Y<sub>2</sub>O<sub>3</sub>-stabilised ZrO<sub>2</sub>)', ion: 'O<sup>2−</sup>, cathode → anode', temp: '800–1000 °C', fuel: 'H<sub>2</sub> + CO <small>(tolerates a little S: coal gas)</small>',
          cat: 'Ni–YSZ cermet anode · LSM cathode', eff: '&gt; 60 % <small>fuel → electricity; more with cogeneration</small>',
          rx: [
            { k: 'Anode (oxidation, Ni–YSZ)', v: 'H_2 + CO + 2O^{2−} → H_2O + CO_2 + 4e^−' },
            { k: 'Cathode (reduction, LSM)', v: 'O_2 + 4e^− → 2O^{2−}' },
            { k: 'Net', v: 'H_2 + CO + O_2 → H_2O + CO_2', net: true }
          ],
          cap: '<b>SOFC.</b> Here the ion runs the other way. O<sub>2</sub> picks up electrons at the <b>LSM cathode</b> and becomes <b>O<sup>2−</sup></b>, which hops through the hot <b>YSZ</b> ceramic to the <b>Ni–YSZ anode</b>. There it oxidises H<sub>2</sub> and CO, so the exhaust (H<sub>2</sub>O + CO<sub>2</sub>) leaves on the <b>anode side</b>. YSZ only conducts O<sup>2−</sup> at <b>800–1000 °C</b>, hence the long start-up.'
        }
      };
      const ctr = api.controls();
      api.segmented([{ value: 'pem', label: 'PEMFC' }, { value: 'sofc', label: 'SOFC' }], 'pem', (v) => setMode(v), ctr);
      api.slider({ label: 'Fuel feed', min: 0, max: 2, step: 0.25, value: 1, format: (v) => (v === 0 ? 'off' : String(v) + '×') }, (v) => setRate(v), ctr);
      const ro = api.readouts();
      const roEl = api.readout('Electrolyte', ro), roIon = api.readout('Mobile ion', ro), roT = api.readout('Temperature', ro);
      const roFuel = api.readout('Fuel', ro), roCat = api.readout('Catalyst / electrodes', ro), roEff = api.readout('Efficiency', ro);
      const rx = reactionPanel(api, body);
      legend(api, body, [[C.e, 'e<sup>−</sup>'], [C.cat, 'H<sup>+</sup>'], [C.an, 'O<sup>2−</sup>'], [ATOM.H[0], 'H atom'], [ATOM.O[0], 'O atom'], [ATOM.C[0], 'C atom']]);
      const cap = api.caption('');
      cap.el.setAttribute('aria-live', 'polite');

      function texts() {
        const I = INFO[st.mode];
        roEl.set(I.el); roIon.set(I.ion); roT.set(I.temp); roFuel.set(I.fuel); roCat.set(I.cat); roEff.set(I.eff);
        rx.set(I.rx);
        pillT.textContent = st.mode === 'pem' ? '< 80 °C' : '800–1000 °C';
        pillR.setAttribute('stroke', st.mode === 'pem' ? C.line2 : C.heat);
        pillR.setAttribute('stroke-opacity', st.mode === 'pem' ? 1 : 0.7);
        captionNow();
      }
      function captionNow() {
        const base = INFO[st.mode].cap;
        cap.set(st.rate > 0 ? base : '<b>Fuel off.</b> The last molecules react, then the current dies. A fuel cell <b>stores no energy</b>; it makes electricity only while fuel and oxidant are fed in.');
      }
      function setRate(v) {
        const was = st.rate;
        st.rate = v;
        if (was <= 0 && v > 0) st.spawnT = 0;
        if ((was <= 0) !== (v <= 0)) captionNow();
        if (api.reduced) { prewarm(); const e = renderAll(); setGlow(e); }
      }
      let swapping = false, fading = false;
      function setMode(m) {
        if (m === st.mode) return;
        const toS = m === 'sofc';
        if (api.reduced) {
          st.mode = m; gP.setAttribute('opacity', toS ? 0 : 1); gS.setAttribute('opacity', toS ? 1 : 0); heat.setAttribute('opacity', toS ? 1 : 0);
          texts(); prewarm(); setGlow(renderAll());
          return;
        }
        swapping = true; fading = true;
        api.tween(0.3, (k) => gPart.setAttribute('opacity', (1 - k).toFixed(2))).then(() => {
          st.mode = m;
          texts();
          prewarm();
          renderAll();
          swapping = false;
          api.tween(0.45, (k) => gPart.setAttribute('opacity', k.toFixed(2)));
        });
        api.tween(0.75, (k) => {
          const s = toS ? k : 1 - k;
          gP.setAttribute('opacity', (1 - s).toFixed(2)); gS.setAttribute('opacity', s.toFixed(2)); heat.setAttribute('opacity', s.toFixed(2));
          pill.setAttribute('transform', `translate(320 74) scale(${(1 + 0.12 * Math.sin(k * Math.PI)).toFixed(3)}) translate(-320 -74)`);
        }).then(() => { fading = false; });
      }
      function setGlow(eMoving) {
        const g = Math.min(1, eMoving / 10);
        loadGlow.setAttribute('opacity', g.toFixed(2));
        zig.setAttribute('stroke', mix(C.dim, C.photon, Math.min(1, g * 1.1)));
      }

      texts();
      prewarm();
      setGlow(renderAll());

      if (!api.reduced) {
        api.loop((dt, t) => {
          st.now += dt;
          if (st.rate > 0 && !swapping) {
            st.spawnT -= dt;
            if (st.spawnT <= 0) { spawnCycle(st.now); st.spawnT += PERIOD / st.rate; }
          }
          const e = renderAll();
          st.glow += (Math.min(1, e / 10) - st.glow) * Math.min(1, dt * 4);
          const flick = 1 + 0.04 * Math.sin(t * 23) * st.glow;
          loadGlow.setAttribute('opacity', Math.min(1, st.glow * flick).toFixed(2));
          zig.setAttribute('stroke', mix(C.dim, C.photon, Math.min(1, st.glow * 1.1)));
          if (st.mode === 'sofc' && !fading) heat.setAttribute('opacity', (0.85 + 0.15 * Math.sin(t * 1.3)).toFixed(2));
        });
      }
    }
  });
})();
