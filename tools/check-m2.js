// Script-checks every number used in the M2 notes and questions.
let bad = 0;
const eq = (name, got, want, tol = 1e-9) => {
  if (Math.abs(got - want) > tol * Math.max(1, Math.abs(want))) { bad++; console.log('FAIL', name, got, 'expected', want); }
};

// chunk 2a notes
eq('ex1 IC', 100 * 50e-6, 5e-3);
eq('ex1 IE', 101 * 50e-6, 5.05e-3);
eq('ex1 alpha', 100 / 101, 0.990, 1e-3);
eq('ex2 beta', 0.98 / 0.02, 49);
eq('ex2 IC', 0.98 * 10, 9.8);
eq('ex2 IB', 0.02 * 10, 0.2);

// q-2a
eq('2a-10 I', (12 - 8) / 100, 0.04);
eq('2a-12 IE', 4.9 / 0.98, 5.0);
eq('2a-12 IB', 4.9 / 0.98 - 4.9, 0.1);
eq('2a-15 IC', 10 - 0.2, 9.8);
eq('2a-15 beta', 9.8 / 0.2, 49);
eq('2a-15 alpha', 9.8 / 10, 0.98);
eq('2a-18 alpha', 99 / 100, 0.99);
eq('2a-18 IC', 0.99 * 50, 49.5);
eq('2a-21 IE', 50e-3 / 0.01, 5);
eq('2a-21 IC', 0.99 * 5, 4.95);
eq('2a-26 beta', 0.995 / (1 - 0.995), 199, 1e-9);
eq('2a-29 IB', (1 - 0.98) * 200, 4);
eq('2a-29 IC', 0.98 * 200, 196);

// q-2b
eq('2b-06 boundary', 5 - 2, 3);
eq('2b-18 gain', -20 / 5, -4); eq('2b-18 out', -4 * 2, -8);
eq('2b-19 gain', 1 + 30 / 10, 4); eq('2b-19 out', 4 * 1.5, 6);
eq('2b-20 gain', -10 / 1, -10); eq('2b-20 Rf', 10 * 2, 20);
eq('2b-21 R1', (5 - 1) * 5, 20);
eq('2b-23 gain', -50 / 25, -2); eq('2b-23 out', -2 * -3, 6);
eq('2b-25 gain', 8 / 2, 4); eq('2b-25 R2', 60 / (4 - 1), 20);
eq('ex inv', -100 / 10 * 0.5, -5); eq('ex non', 1 + 90 / 10, 10);

// q-2c: band membership
const inb = (f, lo, hi) => f >= lo && f <= hi;
const ok = (name, c) => { if (!c) { bad++; console.log('FAIL', name); } };
ok('2c-02 100 MHz FM+VHF', inb(100e6, 88e6, 108e6) && inb(100e6, 30e6, 300e6));
ok('2c-09 600 nm visible', inb(600, 400, 800));
ok('2c-13 20 kHz VLF', inb(20e3, 3e3, 30e3));
ok('2c-17 60 GHz EHF', inb(60e9, 30e9, 300e9));
ok('2c-08 2.45 GHz microwave', 2.45e9 >= 1e9);
ok('2c-30 50 Hz ELF', inb(50, 30, 300)); ok('2c-30 250 kHz LF', inb(250e3, 30e3, 300e3));
ok('2c-24 500 GHz above EHF', 500e9 > 300e9);

// q-2d
eq('2d-03 spacing a', 869 - 824, 45); eq('2d-03 spacing b', 894 - 849, 45); eq('2d-03 dl', 836 + 45, 881);
eq('2d-07 per cell', Math.floor(832 / 7), 118); ok('2d-07 fits', 7 * 118 <= 832);
const R = t => 3e8 * t / 2;
eq('2d-21 R', R(200e-6), 30000); eq('2d-24 t', 2 * 45000 / 3e8, 300e-6, 1e-9);
eq('2d-25 R', R(2e-6), 300); eq('2d-30 R', R(0.5e-6), 75); eq('radar ex', R(100e-6), 15000);

console.log(bad ? bad + ' failure(s)' : 'check-m2: all numbers ok');
process.exit(bad ? 1 : 0);
