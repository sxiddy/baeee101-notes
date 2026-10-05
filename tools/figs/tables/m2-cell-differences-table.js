// Slide 42: primary vs secondary vs fuel cells.
// Correction: the slide says a fuel cell's reaction "is reversible"; a fuel cell is not recharged, its
// reaction runs one way while fresh fuel is fed in.
module.exports = {
  id: 'm2-cell-differences-table',
  valX: 150,
  cols: [{ name: 'Primary', cls: 'dtb' }, { name: 'Secondary', cls: 'dto' }, { name: 'Fuel cell', cls: 'dtg' }],
  rows: [
    { head: '1  What it does', cells: ['galvanic only: makes electricity', ['galvanic when discharging,', 'electrolytic when charging'], 'galvanic: makes electricity'] },
    { head: '2  Cell reaction', cells: ['not reversible', 'reversible', 'runs one way, fuel is fed in'] },
    { head: '3  Recharging', cells: ["can't be recharged", 'can be recharged', 'gives energy continuously'] },
    { head: '4  Life', cells: [['works while the active', 'materials last'], ['used again and again', 'by recharging'], ['needs reactants fed in all', 'the time; stores no energy']] },
    { head: '5  Examples', cells: [['Leclanché (dry) cell,', 'lithium cell'], ['lead storage, Ni–Cd,', 'lithium-ion'], ['H₂–O₂ fuel cell,', 'CH₃OH–O₂ fuel cell']] },
    { head: '6  Uses', cells: [['pacemakers, watches,', 'transistors, radios'], ['electronics, vehicles,', 'cameras, laptops, torches'], ['spacecraft: light, and its', 'product water is drunk']] },
  ],
};
