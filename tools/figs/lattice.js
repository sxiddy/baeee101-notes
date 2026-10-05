// node tools/figs/lattice.js figs-svg -> generates the silicon-lattice figures (intrinsic, n-type, p-type): 600 wide, phone-size text (figs-svg/README.md).
const fs = require('fs'), path = require('path');
const OUT = process.argv[2];
const S = 100; // atom spacing
const atom = (x, y, label, cls) => `<circle cx="${x}" cy="${y}" r="30" class="${cls || 'df2 dsp'}" stroke-width="3.5"/><text x="${x}" y="${y + 8}" text-anchor="middle" font-size="22" font-weight="700" class="dt">${label}</text>`;
const dot = (x, y) => `<circle cx="${x}" cy="${y}" r="6.5" class="dfb"/>`;
const hole = (x, y) => `<circle cx="${x}" cy="${y}" r="9" class="df ds" stroke-width="3"/>`;
const free = (x, y) => `<circle cx="${x}" cy="${y}" r="10" class="dfy"/><circle cx="${x}" cy="${y}" r="10" fill="none" class="ds" stroke-width="2.5"/>`;
const arrow = (x1, y1, x2, y2, c) => `<path d="M${x1} ${y1}L${x2} ${y2}" class="ds${c}" stroke-width="4" marker-end="url(#m${c})"/>`;
const mk = (id, cls) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto"><path d="M0 0 10 5 0 10z" class="${cls}"/></marker>`;
const defs = `<defs>${mk('mb', 'dfb')}${mk('mo', 'dfo')}${mk('mw', 'dfw')}</defs>`;
const svg = (h, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 ${h}">\n${defs}\n${body}\n</svg>\n`;
const txt = (x, y, t, o) => `<text x="${x}" y="${y}" font-size="${(o && o.size) || 22}"${o && o.bold ? ' font-weight="700"' : ''} class="${(o && o.cls) || 'dt2'}"${o && o.anchor ? ` text-anchor="${o.anchor}"` : ''}>${t}</text>`;
const lines = (x, y, arr, o) => arr.map((t, i) => txt(x, y + i * 30, t, o)).join('');

function lattice(ox, oy, opts) {
  opts = opts || {};
  const skip = new Set(opts.skip || []), sp = opts.special || {};
  let s = '';
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
    const x = ox + c * S, y = oy + r * S;
    for (let k = 0; k < 2; k++) {
      if (c < 2 && !skip.has(`h:${r}:${c}:${k}`)) s += dot(x + S / 2 - 11 + k * 22, y);
      if (r < 2 && !skip.has(`v:${r}:${c}:${k}`)) s += dot(x, y + S / 2 - 11 + k * 22);
    }
    if (c === 0) s += dot(x - 44, y); if (c === 2) s += dot(x + 44, y);
    if (r === 0) s += dot(x, y - 44); if (r === 2) s += dot(x, y + 44);
  }
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) { const o = sp[r + ':' + c] || {}; s += atom(ox + c * S, oy + r * S, o.label || 'Si', o.cls); }
  return s;
}
const bond = (ox, oy, dir, r, c, k) => (dir === 'h' ? [ox + c * S + S / 2 - 11 + k * 22, oy + r * S] : [ox + c * S, oy + r * S + S / 2 - 11 + k * 22]);
const cell = (ox, oy, r, c) => [ox + c * S + S / 2, oy + r * S + S / 2];

// ---- intrinsic silicon: no field (top), field applied (bottom)
{
  let b = '';
  const A = [66, 64], B = [66, 424];
  b += lattice(A[0], A[1], { skip: ['h:0:1:1', 'v:1:0:1'] });
  let h1 = bond(A[0], A[1], 'h', 0, 1, 1), f1 = cell(A[0], A[1], 0, 1), h2 = bond(A[0], A[1], 'v', 1, 0, 1), f2 = cell(A[0], A[1], 1, 0);
  b += hole(...h1) + arrow(h1[0] - 3, h1[1] + 12, f1[0] + 6, f1[1] - 12, 'b') + free(...f1);
  b += hole(...h2) + arrow(h2[0] + 12, h2[1] + 5, f2[0] - 14, f2[1] + 2, 'b') + free(...f2);
  b += txt(360, 110, 'No field', { bold: 1, cls: 'dt', size: 26 }) + lines(360, 150, ['Heat breaks a', 'bond: it frees an', 'electron and', 'leaves a hole.'], { cls: 'dt2' });
  b += `<path d="M10 358H590" class="ds3" stroke-width="2" stroke-dasharray="6 6"/>`;
  b += lattice(B[0], B[1], { skip: ['h:0:1:1', 'v:1:0:1'] });
  h1 = bond(B[0], B[1], 'h', 0, 1, 1); h2 = bond(B[0], B[1], 'v', 1, 0, 1); f1 = cell(B[0], B[1], 0, 1); f2 = cell(B[0], B[1], 1, 0);
  b += hole(...h1) + arrow(h1[0] - 12, h1[1], h1[0] - 40, h1[1], 'o');
  b += hole(...h2) + arrow(h2[0] - 12, h2[1], h2[0] - 44, h2[1], 'o');
  b += free(...f1) + arrow(f1[0] + 13, f1[1], f1[0] + 46, f1[1], 'b');
  b += free(...f2) + arrow(f2[0] + 13, f2[1], f2[0] + 46, f2[1], 'b');
  b += txt(360, 470, 'Field applied', { bold: 1, cls: 'dt', size: 26 });
  b += `<path d="M560 506H372" class="ds" stroke-width="4" marker-end="url(#mw)"/>` + txt(560, 540, 'field E', { cls: 'dt', anchor: 'end' });
  b += lines(360, 580, ['Electrons drift', 'against the field,', 'holes with it.'], { cls: 'dt2' });
  // legend
  b += `<g transform="translate(20 740)">${dot(10, 0)}${txt(28, 8, 'bond electron')}${free(236, 0)}${txt(256, 8, 'free electron')}${hole(452, 0)}${txt(470, 8, 'hole')}</g>`;
  b += `<g transform="translate(20 782)"><path d="M0 0h40" class="dsb" stroke-width="4" marker-end="url(#mb)"/>${txt(52, 8, 'electron moves')}<path d="M236 0h40" class="dso" stroke-width="4" marker-end="url(#mo)"/>${txt(288, 8, 'hole moves')}</g>`;
  fs.writeFileSync(path.join(OUT, 'm2-intrinsic-lattice.svg'), svg(804, b));
}

// ---- doping: Si and the dopant with their valence electrons (top), the doped lattice (bottom)
function doping(id, dop, n, words, cls, extra, title, legend) {
  let b = '';
  const valence = (x, y, label, k, c) => {
    let s = `<circle cx="${x}" cy="${y}" r="32" class="${c}" stroke-width="3.5"/><text x="${x}" y="${y + 8}" text-anchor="middle" font-size="24" font-weight="700" class="dt">${label}</text>`;
    const pos = [[0, -50], [50, 0], [0, 50], [-50, 0]];
    for (let i = 0; i < 4; i++) s += i < k ? dot(x + pos[i][0], y + pos[i][1]) : hole(x + pos[i][0], y + pos[i][1]);
    if (k === 5) s += free(x + 40, y - 40);
    return s;
  };
  b += valence(90, 90, 'Si', 4, 'df2 dsp') + txt(90, 186, '4 valence e⁻', { anchor: 'middle' });
  b += valence(260, 90, dop, n, cls) + txt(260, 186, `${n} valence e⁻`, { anchor: 'middle' });
  b += lines(370, 60, words, { cls: 'dt2' });
  b += `<path d="M300 214v36" class="ds2" stroke-width="4" marker-end="url(#mw)"/>`;
  b += `<path d="M10 204H590" class="ds3" stroke-width="2" stroke-dasharray="6 6"/>`;
  const ox = 200, oy = 330;
  b += lattice(ox, oy, { special: { '1:1': { label: dop, cls } }, skip: extra.skip || [] });
  b += extra.mark(ox, oy);
  b += txt(300, 614, title, { bold: 1, cls: 'dt', anchor: 'middle', size: 26 });
  b += legend;
  fs.writeFileSync(path.join(OUT, id + '.svg'), svg(680, b));
}
doping('m2-n-type-doping', 'P', 5, ['Add a little P', 'to pure Si: its', '5th electron', 'is set free.'], 'df2 dsg',
  { mark: (ox, oy) => { const f = cell(ox, oy, 0, 1); return free(...f) + arrow(f[0] - 22, f[1] + 36, f[0] - 8, f[1] + 14, 'b'); } }, 'n-type silicon',
  `<g transform="translate(160 652)">${free(0, 0)}${txt(20, 8, 'free electron (from P)')}</g>`);
doping('m2-p-type-doping', 'B', 3, ['Add a little B', 'to pure Si: one', 'bond is an', 'electron short.'], 'df2 dso',
  { skip: ['h:1:1:0'], mark: (ox, oy) => hole(...bond(ox, oy, 'h', 1, 1, 0)) }, 'p-type silicon',
  `<g transform="translate(150 652)">${hole(0, 0)}${txt(20, 8, 'hole (missing electron)')}</g>`);
console.log('ok');
