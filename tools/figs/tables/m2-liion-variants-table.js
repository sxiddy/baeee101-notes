// Li-ion chemistries by cathode (slide table: name, constituents, abbreviation, characteristics, applications).
module.exports = {
  id: 'm2-liion-variants-table',
  valX: 150,
  cols: [{ name: 'Cathode', cls: 'dtb' }, { name: 'Capacity', cls: 'dto' }, { name: 'Uses', cls: 'dtg' }],
  rows: [
    { head: 'LCO · lithium cobalt oxide', cells: ['LiCoO₂', 'high', 'cell phones, laptops, cameras'] },
    { head: 'LMO · lithium manganese oxide', cells: ['LiMn₂O₄', 'lower', 'power tools, medical, hobbyist'] },
    { head: 'LFP · lithium iron phosphate', cells: ['LiFePO₄', 'lower', 'power tools, medical, hobbyist'] },
    { head: 'NMC · Li nickel manganese cobalt', cells: ['LiNiMnCoO₂', 'lower', 'power tools, medical, hobbyist'] },
    { head: 'NCA · Li nickel cobalt aluminium', cells: ['LiNiCoAlO₂', 'not given', 'electric vehicles, grid storage'] },
  ],
};
