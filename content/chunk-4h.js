CHUNK({
  chunk: '4h',
  module: 'm4',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm4-refrigeration',
      title: 'Refrigeration: VCRS and VARS',
      short: 'Refrigeration',
      blurb: 'What refrigeration is, the ton of refrigeration and COP, refrigerants, and how the vapour compression and vapour absorption cycles work.',
      source: 'Refrigeration and air conditioning lecture, pages 1–20',
      tabs: [
        {
          title: 'Basics',
          html: `<p class="lead"><b>Refrigeration</b> is the process of removing heat from a space or substance and keeping it at a temperature <b>lower than its surroundings</b>.</p>
<ul><li>Heat flows naturally only from hot to cold. To move heat from a cold space to warmer surroundings, <b>work (or heat from a high-temperature source) must be supplied</b>; this is the second law of thermodynamics at work. In a domestic refrigerator the compressor supplies that work.</li>
<li>Cooling can be produced by <b>melting a solid</b> (ice), by <b>sublimation</b> of a solid (dry ice), or by <b>evaporating a liquid</b> (the refrigerant). Practical machines use evaporation, because a liquid absorbs a large latent heat when it boils at low pressure.</li>
<li>A <b>refrigerator</b> is the machine that does this continuously, and the <b>refrigerant</b> is the working fluid that carries heat out of the cold space.</li></ul>
<div class="note example"><p>A domestic fridge keeps food at about 4 °C in a 30 °C kitchen. The refrigerant boils inside the freezer coils, absorbing heat from the food, and gives it out at the warm black coils at the back.</p></div>`
        },
        {
          title: 'TR and COP',
          html: `<p class="lead">Refrigerating capacity is stated in <b>tons of refrigeration (TR)</b>, and performance by the <b>coefficient of performance (COP)</b>.</p>
<ul><li><b>1 TR</b> is the rate of heat removal needed to freeze <b>1 ton of water at 0 °C into ice at 0 °C in 24 hours</b>. In SI units 1 TR ≈ 3.5 kW (211 kJ/min). A 1.5 TR room air conditioner removes about 5.25 kW of heat.</li>
<li><b>COP</b> = refrigerating effect ÷ work input = Q<sub>L</sub>/W. It tells how many units of heat are removed for each unit of work. Unlike efficiency, COP is usually greater than 1 (typically 2 to 4 for a domestic refrigerator).</li></ul>
<div class="eq">COP = Q<sub>L</sub> / W = Q<sub>L</sub> / (Q<sub>H</sub> − Q<sub>L</sub>)</div>
<div class="worked"><div class="given">A refrigerator removes 3.5 kW from the cold space and its compressor takes 1 kW.</div><div class="solve">COP = 3.5/1 = 3.5. Heat rejected at the condenser Q<sub>H</sub> = Q<sub>L</sub> + W = 3.5 + 1 = 4.5 kW.</div><div class="result">COP = 3.5; capacity = 3.5/3.5 = 1 TR</div></div>`
        },
        {
          title: 'Types and uses',
          html: `<p class="lead">Refrigeration systems differ in how they lift the heat to a higher temperature.</p>
<table class="tbl"><thead><tr><th>System</th><th>How it works</th></tr></thead><tbody>
<tr><td>Ice refrigeration</td><td>Melting ice absorbs latent heat from the space; used in old ice boxes</td></tr>
<tr><td>Air refrigeration</td><td>Air itself is the refrigerant and is compressed and expanded; used in aircraft cabins</td></tr>
<tr><td>Vapour compression (VCRS)</td><td>A compressor does mechanical work on the refrigerant vapour; used in fridges and air conditioners</td></tr>
<tr><td>Vapour absorption (VARS)</td><td>A heat source and an absorber–pump pair replace the compressor; used where waste heat or solar heat is cheap</td></tr>
<tr><td>Special systems</td><td>Adsorption, cascade, mixed refrigerant, vortex tube, thermoelectric and steam jet systems, for very low temperatures or special sites</td></tr>
</tbody></table>
<p><b>Applications:</b> food preservation and cold storage, ice making, air conditioning of homes, offices and vehicles, cooling of medicines and vaccines, chemical and pharmaceutical processing, and cooling in industrial processes.</p>`
        },
        {
          title: 'Refrigerants',
          html: `<p class="lead">A good refrigerant should move a lot of heat safely, cheaply and without harming the environment.</p>
<ul><li><b>Thermodynamic:</b> low boiling point and a high latent heat of vaporisation, so a small mass flow removes a lot of heat; moderate condensing pressure, so the system need not be very strong.</li>
<li><b>Chemical:</b> non-toxic, non-flammable, chemically stable and non-corrosive to the pipes and compressor oil.</li>
<li><b>Physical:</b> high thermal conductivity for good heat transfer, low viscosity for easy flow, easy leak detection.</li>
<li><b>Other:</b> low cost, easily available, zero ozone depletion and low global warming potential.</li></ul>
<div class="note example"><p>R-134a is used in car air conditioners and general refrigeration; R-410A is used in residential air conditioners. Ammonia (NH₃) is the usual refrigerant in vapour absorption plants, with water as the absorbent.</p></div>`
        },
        {
          title: 'VCRS',
          html: `<p class="lead">The <b>vapour compression refrigeration system</b> has four main parts: <b>compressor, condenser, expansion valve and evaporator</b>, joined in a closed loop.</p>
<figure data-fig="m4-vcrs-cycle"></figure>
<ol class="steps"><li><b>Compressor (1→2):</b> draws low-pressure, low-temperature refrigerant vapour from the evaporator and compresses it to high pressure and high temperature. This is where work is supplied.</li>
<li><b>Condenser (2→3):</b> the hot vapour gives up its heat Q<sub>H</sub> to the surrounding air or water and condenses into a high-pressure liquid.</li>
<li><b>Expansion valve (3→4):</b> the liquid is throttled through a narrow opening; its pressure and temperature drop sharply and some of it flashes into vapour.</li>
<li><b>Evaporator (4→1):</b> the cold low-pressure liquid boils by absorbing heat Q<sub>L</sub> from the space being cooled. The vapour returns to the compressor and the cycle repeats.</li></ol>
<p>A receiver (to store liquid refrigerant after the condenser) and a control device are often added in larger systems.</p>
<div class="note exam"><p><b>Explain VCRS with a neat sketch (5–10 marks):</b> draw the four-component loop with arrows and state numbers; label high-pressure side (2, 3) and low-pressure side (4, 1); write one line for each process; show Q<sub>H</sub> out at the condenser, Q<sub>L</sub> in at the evaporator and W at the compressor; finish with COP = Q<sub>L</sub>/W.</p></div>`
        },
        {
          title: 'VARS',
          html: `<p class="lead">The <b>vapour absorption refrigeration system</b> replaces the compressor with an <b>absorber, a pump and a generator</b>, and is driven mainly by <b>heat</b> rather than work.</p>
<figure data-fig="m4-vars-cycle"></figure>
<ol class="steps"><li><b>Evaporator:</b> liquid ammonia boils at low pressure, absorbing heat from the cold space.</li>
<li><b>Absorber:</b> the ammonia vapour is dissolved in weak ammonia solution (water), forming a strong solution and keeping the evaporator pressure low.</li>
<li><b>Pump:</b> pumps the strong liquid solution up to the high pressure. Pumping a liquid takes far less work than compressing a vapour.</li>
<li><b>Generator:</b> heat from steam, waste gas or the sun drives the ammonia vapour out of the solution; the weak solution flows back to the absorber.</li>
<li><b>Condenser</b> and <b>expansion valve:</b> as in VCRS, the vapour condenses and is then throttled back into the evaporator.</li></ol>
<div class="mnemonic">Order to remember: Evaporator → Absorber → Pump → Generator → Condenser → Expansion valve.</div>`
        },
        {
          title: 'VCRS vs VARS',
          html: `<table class="tbl"><thead><tr><th>Point</th><th>VCRS</th><th>VARS</th></tr></thead><tbody>
<tr><td>Energy input</td><td>Mechanical work to drive the compressor</td><td>Heat at the generator, plus a little pump work</td></tr>
<tr><td>Raising pressure</td><td>The compressor compresses the vapour</td><td>The absorber, pump and generator together do the job of the compressor</td></tr>
<tr><td>Moving parts and noise</td><td>Compressor is noisy and wears</td><td>Only the small pump moves, so it is quiet</td></tr>
<tr><td>COP</td><td>Higher, about 2 to 4</td><td>Lower, below about 1</td></tr>
<tr><td>Usual refrigerant</td><td>R-134a, R-410A</td><td>Ammonia with water as absorbent</td></tr>
<tr><td>Best where</td><td>Electricity is available; homes and cars</td><td>Waste heat or solar heat is cheap; large plants</td></tr>
</tbody></table>`
        }
      ],
      flashcards: [
        { front: 'Define refrigeration.', back: 'Removing heat from a space or substance to keep it below the temperature of its surroundings.' },
        { front: 'Define 1 ton of refrigeration.', back: 'The heat removal rate that freezes 1 ton of water at 0 °C into ice at 0 °C in 24 h, about 3.5 kW.' },
        { front: 'What is COP of a refrigerator?', back: 'Refrigerating effect divided by work input, Q_L/W.' },
        { front: 'Four main parts of a VCRS?', back: 'Compressor, condenser, expansion valve, evaporator.' },
        { front: 'What happens in the expansion valve?', back: 'The high-pressure liquid is throttled, so its pressure and temperature drop sharply.' },
        { front: 'Where is heat absorbed in a VCRS?', back: 'In the evaporator, from the space being cooled.' },
        { front: 'What replaces the compressor in a VARS?', back: 'The absorber, pump and generator.' },
        { front: 'Usual refrigerant–absorbent pair in a VARS?', back: 'Ammonia as refrigerant, water as absorbent.' },
        { front: 'Name two desirable properties of a refrigerant.', back: 'High latent heat and low boiling point; also non-toxic, non-flammable, low cost and environment friendly.' },
        { front: 'Which refrigerant is common in car air conditioners?', back: 'R-134a.' }
      ],
      oneLiners: [
        '1 TR ≈ 3.5 kW: freeze 1 ton of water at 0 °C in 24 h.',
        'COP = Q_L/W, and Q_H = Q_L + W.',
        'VCRS: compressor → condenser → expansion valve → evaporator.',
        'VARS: evaporator → absorber → pump → generator → condenser → expansion valve.',
        'VCRS runs on work; VARS runs on heat.'
      ],
      formulas: [
        { name: 'COP of a refrigerator', html: `COP = Q<sub>L</sub> / W`, note: 'Q_L heat removed from the cold space, W work input' },
        { name: 'Energy balance', html: `Q<sub>H</sub> = Q<sub>L</sub> + W`, note: 'heat rejected at the condenser' },
        { name: 'Ton of refrigeration', html: `1 TR ≈ 3.5 kW = 211 kJ/min`, note: '' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm4-air-conditioning',
      title: 'Air conditioning',
      short: 'Air conditioning',
      blurb: 'What an air conditioner controls, its components, the AC cycle and how a split AC is arranged.',
      source: 'Refrigeration and air conditioning lecture, pages 21–24',
      tabs: [
        {
          title: 'What AC does',
          html: `<p class="lead"><b>Air conditioning</b> is the simultaneous control of the <b>temperature, humidity, cleanliness and circulation</b> of the air in a space, for human comfort or for an industrial process.</p>
<ul><li><b>Temperature:</b> heat is taken out of room air at the indoor coil and rejected outside, using the same vapour compression cycle as a refrigerator.</li>
<li><b>Humidity:</b> as room air passes over the cold evaporator coil, water vapour condenses on the coil and drains away, so the air comes out drier.</li>
<li><b>Cleanliness:</b> a filter in front of the indoor coil removes dust and particles.</li>
<li><b>Circulation:</b> the blower fan moves the conditioned air evenly round the room.</li></ul>
<div class="note why"><p>It works on the principle of <b>heat transfer</b>: the refrigerant absorbs heat where it evaporates (inside) and gives it out where it condenses (outside).</p></div>`
        },
        {
          title: 'Components and cycle',
          html: `<table class="tbl"><thead><tr><th>Component</th><th>Where</th><th>Job</th></tr></thead><tbody>
<tr><td>Compressor</td><td>Outdoor unit</td><td>Raises the pressure and temperature of the refrigerant vapour</td></tr>
<tr><td>Condenser coil</td><td>Outdoor unit</td><td>Hot vapour gives its heat to the outside air and becomes liquid; a fan blows air across it</td></tr>
<tr><td>Expansion valve (capillary tube)</td><td>Liquid line</td><td>Drops the pressure and temperature of the liquid before it enters the indoor coil</td></tr>
<tr><td>Evaporator coil</td><td>Indoor unit</td><td>Cold refrigerant boils by absorbing heat from room air; the blower sends the cooled air back into the room</td></tr>
</tbody></table>
<ol class="steps"><li>The compressor sends hot high-pressure vapour to the condenser coil.</li><li>The condenser rejects heat outside and the refrigerant becomes liquid.</li><li>The capillary tube expands the liquid to low pressure and temperature.</li><li>The evaporator coil absorbs heat from room air, the refrigerant vaporises, and it returns to the compressor.</li></ol>`
        },
        {
          title: 'Split AC',
          html: `<p class="lead">A <b>split air conditioner</b> divides the system into an <b>indoor unit</b> (evaporator coil, blower fan, filter) and an <b>outdoor unit</b> (compressor, condenser coil, condenser fan), joined by two copper refrigerant pipes.</p>
<figure data-fig="m4-split-ac"></figure>
<ul><li>Keeping the noisy compressor outside makes the room quiet.</li><li>Only the refrigerant pipes and a drain pass through the wall, so no window opening is needed.</li><li>The indoor unit can be placed high on a wall for even air distribution.</li></ul>
<div class="note exam"><p><b>Explain the working of a split AC with a sketch:</b> draw the indoor and outdoor units, show suction and liquid lines, mark where heat is absorbed (indoor coil) and rejected (outdoor coil), and write the four steps of the cycle.</p></div>`
        }
      ],
      flashcards: [
        { front: 'Define air conditioning.', back: 'Simultaneous control of temperature, humidity, cleanliness and circulation of air in a space.' },
        { front: 'Which coil is in the indoor unit of a split AC?', back: 'The evaporator coil, with the blower fan.' },
        { front: 'Which parts are in the outdoor unit of a split AC?', back: 'Compressor, condenser coil and condenser fan.' },
        { front: 'What expansion device is used in a room AC?', back: 'A capillary tube.' },
        { front: 'How does an AC reduce humidity?', back: 'Water vapour in room air condenses on the cold evaporator coil and drains away.' },
        { front: 'Main advantage of a split AC?', back: 'The noisy compressor is outside, so the room is quiet, and no window opening is needed.' }
      ],
      oneLiners: [
        'AC controls temperature, humidity, cleanliness, circulation.',
        'Indoor: evaporator + blower. Outdoor: compressor + condenser + fan.',
        'Capillary tube is the expansion device in room ACs.',
        'Heat in at the indoor coil, heat out at the outdoor coil.'
      ],
      formulas: []
    },
    // ------------------------------------------------------------------
    {
      id: 'm4-fuel-cells',
      title: 'Fuel cells and sustainable energy technologies',
      short: 'Fuel cells',
      blurb: 'How a hydrogen fuel cell makes electricity, its types and uses, and other sustainable energy technologies.',
      source: 'Standard engineering knowledge (course material not available)',
      tabs: [
        {
          title: 'Fuel cell',
          html: `<p class="lead">A <b>fuel cell</b> is an electrochemical device that converts the chemical energy of a fuel (usually <b>hydrogen</b>) and an oxidant (oxygen from air) <b>directly into electricity</b>, with water and heat as by-products.</p>
<div class="note heads-up"><p>The course material for this topic was not available, so these notes are written from standard textbook content.</p></div>
<figure data-fig="m4-fuel-cell"></figure>
<ol class="steps"><li>Hydrogen is fed to the <b>anode</b>. A catalyst (platinum) splits each molecule into hydrogen ions (H⁺) and electrons.</li>
<li>The <b>electrolyte</b> lets only the H⁺ ions pass through to the cathode. The electrons cannot cross it, so they travel through the <b>external circuit</b>, and this flow is the useful current through the load.</li>
<li>At the <b>cathode</b>, oxygen combines with the arriving H⁺ ions and electrons to form water.</li></ol>
<div class="eq">2H₂ + O₂ → 2H₂O + electricity + heat</div>
<div class="note why"><p>Unlike a battery, a fuel cell does not run down or need recharging: it keeps producing power as long as fuel and air are supplied. Unlike an engine, there is no combustion, so efficiency is higher (40–60 %) and there is no noise.</p></div>`
        },
        {
          title: 'Types and uses',
          html: `<table class="tbl"><thead><tr><th>Type</th><th>Electrolyte</th><th>Typical use</th></tr></thead><tbody>
<tr><td>Proton exchange membrane (PEMFC)</td><td>Solid polymer membrane; works at about 80 °C</td><td>Cars, buses, portable power</td></tr>
<tr><td>Alkaline (AFC)</td><td>Potassium hydroxide solution</td><td>Spacecraft, as on the Apollo missions</td></tr>
<tr><td>Phosphoric acid (PAFC)</td><td>Liquid phosphoric acid; about 200 °C</td><td>Stationary power for buildings</td></tr>
<tr><td>Solid oxide (SOFC)</td><td>Ceramic; 600–1000 °C</td><td>Large stationary power plants</td></tr>
<tr><td>Molten carbonate (MCFC)</td><td>Molten carbonate salt; about 650 °C</td><td>Utility-scale power</td></tr>
</tbody></table>
<div class="vs"><div class="side"><h4>Advantages</h4><p>High efficiency because there is no combustion; only water is emitted at the point of use; silent with no moving parts; modular, so cells can be stacked for any power.</p></div><div class="side"><h4>Limitations</h4><p>Costly platinum catalyst; hydrogen is hard to produce cleanly, store and transport; few refuelling stations.</p></div></div>`
        },
        {
          title: 'Sustainable energy',
          html: `<p class="lead"><b>Sustainable energy technologies</b> meet present energy needs without exhausting resources or harming the environment for future generations.</p>
<ul><li><b>Solar photovoltaic and solar thermal:</b> convert sunlight directly into electricity, or into heat for water heating and power.</li>
<li><b>Wind turbines:</b> the kinetic energy of wind turns the blades and a generator.</li>
<li><b>Hydro and small hydro:</b> the potential energy of stored water drives a turbine.</li>
<li><b>Biomass and biogas:</b> organic waste is burnt or digested to give heat, gas and power, closing the carbon loop.</li>
<li><b>Geothermal and tidal:</b> heat from inside the earth, or the rise and fall of tides, drive turbines.</li>
<li><b>Hydrogen and fuel cells:</b> hydrogen made by electrolysis from renewable electricity is stored and turned back into power in a fuel cell.</li>
<li><b>Energy storage and efficiency:</b> batteries, pumped storage and efficient devices (LED lighting, heat pumps, electric vehicles) reduce waste.</li></ul>`
        }
      ],
      flashcards: [
        { front: 'What is a fuel cell?', back: 'An electrochemical device that turns the chemical energy of hydrogen and oxygen directly into electricity, giving water and heat.' },
        { front: 'Anode reaction of a hydrogen fuel cell?', back: '2H₂ → 4H⁺ + 4e⁻' },
        { front: 'Cathode reaction of a hydrogen fuel cell?', back: 'O₂ + 4H⁺ + 4e⁻ → 2H₂O' },
        { front: 'What does the electrolyte allow through?', back: 'Only the ions (H⁺ in a PEM cell); electrons go round the external circuit.' },
        { front: 'How is a fuel cell different from a battery?', back: 'It does not run down or need recharging; it works as long as fuel and air are supplied.' },
        { front: 'Name two fuel cell types.', back: 'PEMFC (vehicles) and SOFC (stationary power); also AFC, PAFC, MCFC.' },
        { front: 'Two drawbacks of fuel cells?', back: 'Costly platinum catalyst and difficulty producing, storing and transporting hydrogen.' }
      ],
      oneLiners: [
        'Fuel cell: H₂ + O₂ → water + electricity + heat, no combustion.',
        'H⁺ crosses the electrolyte; e⁻ goes through the load.',
        'PEMFC for vehicles, SOFC for power plants, AFC for spacecraft.',
        'Sustainable sources: solar, wind, hydro, biomass, geothermal, tidal, hydrogen.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm4-vcrs-cycle', src: 'vtop/refrigeration/p17.png', crop: null, caption: 'Vapour compression refrigeration: compressor, condenser, expansion valve and evaporator in a closed loop.', alt: 'Loop of condenser at top, evaporator at bottom, compressor right and expansion valve left, with heat and work arrows.' },
    { id: 'm4-vars-cycle', src: 'vtop/refrigeration/p19.png', crop: null, caption: 'Vapour absorption refrigeration: absorber, pump and generator take the place of the compressor.', alt: 'Condenser and generator at top, evaporator and absorber at bottom, pump and expansion valve between them.' },
    { id: 'm4-split-ac', src: 'vtop/refrigeration/p24.png', crop: null, caption: 'Split air conditioner: evaporator and blower indoors; compressor, condenser and fan outdoors.', alt: 'Indoor unit with evaporator coil and blower, outdoor unit with compressor, condenser coil and fan, joined by refrigerant lines.' },
    { id: 'm4-fuel-cell', src: 'own/README.txt', crop: null, caption: 'Hydrogen fuel cell: H⁺ ions cross the electrolyte while electrons flow through the load.', alt: 'Anode, electrolyte and cathode plates with hydrogen in, oxygen in, water out and an external load.' }
  ]
});
