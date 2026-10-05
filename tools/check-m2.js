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

console.log(bad ? bad + ' failure(s)' : 'check-m2: all numbers ok');
process.exit(bad ? 1 : 0);
