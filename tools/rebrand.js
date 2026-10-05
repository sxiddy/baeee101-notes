// One-off: turn the BACHY105 (Applied Chemistry) engine into BAEEE101 (Basic Engineering).
// Plain split/join replacements (no regex replacement strings, so "$" stays "$"). Fails loudly if a target is missing.
const fs = require('fs'), path = require('path');
const R = path.join(__dirname, '..');
let missing = 0;
function patch(file, pairs, { global = [] } = {}) {
  const f = path.join(R, file);
  let s = fs.readFileSync(f, 'utf8');
  for (const [a, b] of pairs) {
    if (!s.includes(a)) { console.log('MISSING in', file, '::', a.slice(0, 90)); missing++; continue; }
    s = s.split(a).join(b);
  }
  for (const [a, b] of global) s = s.split(a).join(b);
  fs.writeFileSync(f, s);
}
const G = [['BACHY105', 'BAEEE101'], ['bachy105', 'baeee101'], ['APPLIED CHEMISTRY', 'BASIC ENGINEERING'], ['Applied Chemistry', 'Basic Engineering']];

patch('app/js/app.js', [
  ["const words = ['Applied', 'Chemistry'];", "const words = ['Basic', 'Engineering'];"],
  ["return 'BACHY105 course ' + (/\\/p\\d+/.test(src) || /m4\\//.test(src) ? 'material, VIT · Page ' : 'material, VIT · No. ') + parseInt(m[1], 10);",
   "return 'Adapted from VIT course slides';"],
  ["['Lithium-ion battery chemistry', [['m2-li-ion', 'Lithium-ion batteries']]],", ''],
], { global: G });
patch('app/js/gate.js', [], { global: G });
patch('api/_lib.js', [
  ["const PRICE = parseInt(process.env.PRICE_PAISE || '5000', 10); // ₹50 default;", "const PRICE = parseInt(process.env.PRICE_PAISE || '1500', 10); // ₹15 default;"],
  // match on our product tag only, never on the amount (the other sites use the same Razorpay account)
  ["  && ((p.notes || {}).product === 'bachy105-notes' || (!(p.notes || {}).product && p.amount === PRICE));", "  && (p.notes || {}).product === 'baeee101-notes';"],
], { global: G });
patch('tools/build.js', [
  ['<meta name="description" content="Applied Chemistry (BACHY105) modules 2–4 as tabbed study notes with diagrams, interactive models and scenario questions.">',
   '<meta name="description" content="Basic Engineering (BAEEE101) as tabbed study notes with diagrams, worked numericals, interactive models and scenario questions.">'],
], { global: G });
for (const f of ['api/create-order.js', 'api/verify.js', 'app/css/app.css', 'app/contact.html', 'app/privacy.html', 'app/refund.html', 'app/review.html', 'app/stats.html', 'app/terms.html', 'README.md']) patch(f, [], { global: G });
console.log(missing ? `${missing} target(s) missing` : 'all patched');
