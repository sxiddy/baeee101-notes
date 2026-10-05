#!/usr/bin/env node
// Build figure images for one or more content chunks.
//   node tools/fig.js content/chunk-B.js [more chunk files...]
//   node tools/fig.js --all
// Writes app/img/<id>.webp (for the app) and tmp/preview/<id>.png (open these to check crops).
const fs = require('fs');
const path = require('path');
const sharp = require('./node_modules/sharp');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const OUT = path.join(ROOT, 'protected', 'img');
const PREV = path.join(ROOT, 'tmp', 'preview');
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(PREV, { recursive: true });

function loadChunk(file) {
  const abs = path.resolve(file);
  let data = null;
  global.CHUNK = (d) => { data = d; };
  delete require.cache[abs];
  require(abs);
  if (!data) throw new Error(`${file}: CHUNK(...) was never called`);
  return data;
}

function resolveSrc(src) {
  const m = src.match(/^(m2|m3)\/slides\/(s\d+)\.png$/) || src.match(/^(m4)\/pages\/(p\d+)\.png$/);
  if (m) {
    const hi = path.join(SRC, m[1], 'hi', m[2] + '.png');
    if (fs.existsSync(hi)) return hi;
  }
  return path.join(SRC, src);
}

async function build(fig) {
  if (!fig.id || !/^m[0-9]+-[a-z0-9-]+$/.test(fig.id)) throw new Error(`bad figure id "${fig.id}"`);
  const file = resolveSrc(fig.src || '');
  if (!fs.existsSync(file)) throw new Error(`${fig.id}: source not found: ${fig.src}`);
  if (/\.(wmf|emf)$/i.test(file)) throw new Error(`${fig.id}: ${fig.src} is a WMF/EMF equation image — crop the slide render instead or transcribe it as text`);
  let img = sharp(file, { animated: false }).flatten({ background: '#ffffff' });
  const meta = await sharp(file, { animated: false }).metadata();
  const W = meta.width, H = meta.pageHeight || meta.height;
  if (fig.crop) {
    const [x, y, w, h] = fig.crop;
    if ([x, y, w, h].some((v) => typeof v !== 'number' || v < 0 || v > 1) || x + w > 1.0001 || y + h > 1.0001) {
      throw new Error(`${fig.id}: crop ${JSON.stringify(fig.crop)} must be fractions with x+w<=1, y+h<=1`);
    }
    const left = Math.round(x * W), top = Math.round(y * H);
    const width = Math.max(8, Math.min(W - left, Math.round(w * W)));
    const height = Math.max(8, Math.min(H - top, Math.round(h * H)));
    img = sharp(await img.extract({ left, top, width, height }).png().toBuffer());
  } else {
    img = sharp(await img.png().toBuffer());
  }
  // trim uniform white margins, keep a small breathing border
  let buf = await img.png().toBuffer();
  try {
    const t = await sharp(buf).trim({ background: '#ffffff', threshold: 12 }).png().toBuffer({ resolveWithObject: true });
    if (t.info.width > 40 && t.info.height > 40) buf = t.data;
  } catch (e) { /* nothing to trim */ }
  buf = await sharp(buf).extend({ top: 14, bottom: 14, left: 14, right: 14, background: '#ffffff' }).png().toBuffer();
  const out = sharp(buf).resize({ width: 1400, withoutEnlargement: true });
  const info = await out.clone().webp({ quality: 82 }).toFile(path.join(OUT, fig.id + '.webp'));
  await sharp(buf).resize({ width: 1000, withoutEnlargement: true }).png().toFile(path.join(PREV, fig.id + '.png'));
  return { w: info.width, h: info.height, kb: Math.round(info.size / 1024) };
}

(async () => {
  let files = process.argv.slice(2);
  if (files[0] === '--all') {
    files = fs.readdirSync(path.join(ROOT, 'content')).filter((f) => /^chunk-.*\.js$/.test(f)).map((f) => path.join(ROOT, 'content', f));
  }
  if (!files.length) { console.error('usage: node tools/fig.js content/chunk-X.js | --all'); process.exit(2); }
  let failed = 0;
  for (const f of files) {
    const manifest = {};
    const data = loadChunk(f);
    for (const fig of data.figures || []) {
      try {
        const r = await build(fig);
        manifest[fig.id] = { w: r.w, h: r.h };
        console.log(`ok   ${fig.id.padEnd(40)} ${r.w}x${r.h} ${r.kb}KB  -> tmp/preview/${fig.id}.png`);
      } catch (e) {
        failed++;
        console.log(`FAIL ${e.message}`);
      }
    }
    fs.writeFileSync(path.join(OUT, `manifest-${data.chunk}.json`), JSON.stringify(manifest, null, 1));
  }
  if (failed) { console.log(`\n${failed} figure(s) failed`); process.exit(1); }
})();
