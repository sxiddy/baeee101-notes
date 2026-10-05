CHUNK({
  chunk: 'B',
  module: 'm2',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm2-batteries',
      title: 'Batteries: parts & classification',
      short: 'Battery basics',
      blurb: 'What a battery is, what the anode, cathode and electrolyte each do, and how primary, secondary and fuel cells differ.',
      source: 'Slides 19, 42',
      tabs: [
        { title: 'What a battery is', html: `
          <p class="lead">A <b>battery</b> is one or more <b>electrochemical cells</b> connected in <b>series, parallel or both</b>. It converts <b>chemical energy into electrical energy</b>.</p>
          <p>However fancy the cell, it is built from the same three parts.</p>
          <table class="tbl">
            <thead><tr><th>Part</th><th>Also called</th><th>Job</th></tr></thead>
            <tbody>
              <tr><td>Anode</td><td><b>Reducing electrode</b></td><td>Gives up electrons to the external circuit</td></tr>
              <tr><td>Cathode</td><td><b>Oxidizing electrode</b></td><td>Accepts electrons from the external circuit</td></tr>
              <tr><td>Electrolyte</td><td><b>Ionic conductor</b></td><td>Carries ions between the electrodes, inside the cell</td></tr>
            </tbody>
          </table>
          <div class="note trap"><p>"Reducing electrode" does not mean reduction happens there. The anode reduces something else by handing it electrons, so the anode itself gets <b>oxidised</b>. Oxidation at the anode, reduction at the cathode, every time.</p></div>
          <div class="note why"><p>The electrolyte passes ions but not electrons. So electrons released at the anode have one route to the cathode: the outside wire. That forced detour is the current you use.</p></div>
          <p>Cells in <b>series</b> add up their voltages; cells in <b>parallel</b> keep the same voltage and share the load, so the pack lasts longer.</p>
        ` },
        { title: 'Three families', html: `
          <p class="lead">Cells are sorted by two tests: can the reaction be <b>run backwards</b>, and are the chemicals <b>sealed in</b> or <b>fed through</b>.</p>
          <div class="vs">
            <div class="side"><h4>Primary</h4>
              <p>Cell reaction is <b>not reversible</b>. When all reactants have turned into products, no more electricity comes out and the battery is <b>dead</b>.</p>
              <div class="chips"><span class="chip">Leclanché cell (dry cell)</span><span class="chip">Alkaline cell</span><span class="chip">Lithium batteries</span></div>
            </div>
            <div class="side"><h4>Secondary</h4>
              <p>Cell reaction <b>can be reversed</b> by passing current in the <b>opposite direction</b>. That is recharging.</p>
              <div class="chips"><span class="chip">Lead–acid</span><span class="chip">Ni–Cd</span><span class="chip">Ni–metal hydride</span><span class="chip">Lithium-ion</span></div>
            </div>
            <div class="side"><h4>Flow battery & fuel cell</h4>
              <p>The materials (<b>reactants, products, electrolytes</b>) <b>pass through</b> the battery instead of staying inside it.</p>
              <div class="chips"><span class="chip">Hydrogen–oxygen fuel cell (HOFC)</span><span class="chip">Solid oxide fuel cell (SOFC)</span></div>
            </div>
          </div>
          <p>Sort them yourself below. Before each example flies into its bucket, call it: reversible or not, and are the reactants stored inside or fed in continuously.</p>
          <div data-viz="cell-types"></div>
          <div class="note trap"><p>"Lithium batteries" (primary) and "lithium-ion batteries" (secondary) land in different families. The word <b>ion</b> is the giveaway.</p></div>
        ` },
        { title: 'Primary vs secondary vs fuel', html: `
          <p class="lead">Here are the three families side by side: what the cell acts as, reversibility, recharging, how long it lasts, examples and uses.</p>
          <table class="tbl">
            <thead><tr><th></th><th>Primary</th><th>Secondary</th><th>Fuel cell</th></tr></thead>
            <tbody>
              <tr><td>Acts as</td><td>Only a <b>galvanic</b> (voltaic) cell: produces electricity</td><td>Galvanic while <b>discharging</b>; <b>electrolytic</b> while charging (consumes electricity)</td><td>A simple galvanic cell: produces electricity</td></tr>
              <tr><td>Cell reaction</td><td>Not reversible</td><td>Reversible</td><td>Reversible</td></tr>
              <tr><td>Recharging</td><td><b>Can't</b> be recharged</td><td><b>Can</b> be recharged</td><td>Energy withdrawn <b>continuously</b></td></tr>
              <tr><td>Life</td><td>As long as the <b>active materials</b> are present</td><td>Again and again, by recharging</td><td>Reactants must be <b>replenished continuously</b>; it does <b>not store energy</b></td></tr>
              <tr><td>Examples</td><td>Leclanché (dry) cell, lithium cell</td><td>Lead storage battery, Ni–Cd battery, Li-ion cell</td><td>H<sub>2</sub>–O<sub>2</sub> fuel cell, CH<sub>3</sub>OH–O<sub>2</sub> fuel cell</td></tr>
              <tr><td>Uses</td><td>Pacemakers, watches, transistors, radios</td><td>Electronic equipment, automobiles, digital cameras, laptops, flashlights</td><td>Space vehicles, thanks to <b>light weight</b>; the product is fresh water for astronauts</td></tr>
            </tbody>
          </table>
          <details class="more"><summary>Original slide table</summary><figure data-fig="m2-cell-differences-table"></figure></details>
          <div class="note heads-up"><p>The slide marks the fuel-cell reaction "reversible". Write that in the table, but know the practical picture: an ordinary fuel cell is not recharged. It works only while fresh fuel and oxygen are fed in, and the water product simply leaves.</p></div>
          <div class="note exam"><p>For a differences answer, cover all six rows for all three cells, with one example and one use each.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'The slides call the anode the "____ electrode". What actually happens to it?', back: '<b>Reducing electrode</b>: it gives electrons to the external circuit, so the anode itself is <b>oxidised</b>.' },
        { front: 'The electrolyte\'s job in two words?', back: '<b>Ionic conductor</b>. It carries ions but not electrons, so electrons must use the outer circuit.' },
        { front: 'Why is a primary cell "dead" at the end?', back: 'Its reaction is <b>not reversible</b>: once every reactant is product, no more electricity.' },
        { front: 'Three primary cells from the slides?', back: '<b>Leclanché (dry) cell</b>, <b>alkaline cell</b>, <b>lithium batteries</b>.' },
        { front: 'Four secondary batteries?', back: '<b>Lead–acid</b>, <b>Ni–Cd</b>, <b>Ni–metal hydride</b>, <b>lithium-ion</b>.' },
        { front: 'What makes flow batteries and fuel cells a separate family?', back: 'Reactants, products and electrolytes <b>pass through</b> the cell. Examples: <b>HOFC</b>, <b>SOFC</b>.' },
        { front: 'What kind of cell is a secondary battery while charging?', back: '<b>Electrolytic</b> (it consumes electricity). While discharging it is galvanic.' },
        { front: 'Why does a fuel cell not "store" energy?', back: 'It delivers only while <b>reactants are replenished continuously</b>; stop the feed and the output stops.' },
        { front: 'Typical uses of primary cells?', back: '<b>Pacemakers</b>, watches, transistors, radios.' },
        { front: 'The two fuel cells named in the comparison table?', back: '<b>H<sub>2</sub>–O<sub>2</sub></b> fuel cell and <b>CH<sub>3</sub>OH–O<sub>2</sub></b> fuel cell.' }
      ],
      oneLiners: [
        'Battery = one or more electrochemical cells in series, parallel or both; chemical energy → electrical energy.',
        'Anode = reducing electrode (gives e<sup>−</sup> to the circuit, is oxidised); cathode = oxidizing electrode (accepts e<sup>−</sup>); electrolyte = ionic conductor.',
        'Primary: not reversible (dry cell, alkaline, lithium). Secondary: reversed by opposite current (lead–acid, Ni–Cd, NiMH, Li-ion). Flow/fuel: materials pass through (HOFC, SOFC).',
        'Secondary cell = galvanic on discharge, electrolytic on charge.',
        'Fuel cell: energy withdrawn continuously while reactants are replenished; it does not store energy.',
        'Uses: primary → pacemakers, watches; secondary → laptops, cameras, cars; fuel cell → space vehicles (water for astronauts).'
      ],
      formulas: []
    },

    // ------------------------------------------------------------------
    {
      id: 'm2-li-ion',
      title: 'Lithium-ion batteries',
      short: 'Li-ion batteries',
      blurb: 'Why lithium, how the cell is built, what happens on charge and discharge, the variants, where they are used, and why they sometimes catch fire.',
      source: 'Slides 20–28',
      tabs: [
        { title: 'What it is', html: `
          <p class="lead">A Li-ion battery is a <b>secondary</b> (rechargeable) battery. As the name says, the <b>movement of lithium ions</b> does both the charging and the discharging.</p>
          <ul>
            <li>It does <b>not contain metallic lithium</b> as the anode. The lithium lives inside the electrodes as Li<sup>+</sup>.</li>
            <li>Li<sup>+</sup> is the only thing that crosses the electrolyte: one way on charging, back on discharging.</li>
          </ul>
          <h3>History</h3>
          <div class="kv">
            <div><span>First proposed</span><b>1970s</b></div>
            <div><span>By</span><b>M. Stanley Whittingham</b></div>
            <div><span>His cathode</span><b>Titanium sulphide</b></div>
            <div><span>His anode</span><b>Lithium metal</b></div>
          </div>
          <p>The <b>2019 Nobel Prize in Chemistry</b> went to <b>John B. Goodenough</b> (USA), <b>M. Stanley Whittingham</b> (UK) and <b>Akira Yoshino</b> (Japan) for developing the lithium-ion battery.</p>
          <figure data-fig="m2-nobel-2019"></figure>
          <div class="note why"><p>Whittingham's first cell used lithium metal, which is very reactive and can grow needle-like deposits (dendrites) that short the cell. Keeping lithium as ions in a host material is what made the design safe enough to sell.</p></div>
        ` },
        { title: 'Why lithium', html: `
          <p class="lead">Phones and laptops run on Li-ion for two reasons: lithium is <b>light</b>, and it gives a <b>high voltage</b>. Light means more energy per kilogram; high voltage means more energy per litre.</p>
          <figure data-fig="m2-liion-devices"></figure>
          <ul>
            <li>Lithium is a <b>very light element</b>.</li>
            <li>So Li-ion reaches a high <b>specific energy density</b>.</li>
            <li>Li<sup>+</sup> has a <b>very large negative standard reduction potential</b>, so each cell gives a higher voltage than other batteries.</li>
            <li>Maximum <b>3.7 V per cell</b>, nearly three times the 1.3 V of nickel–cadmium and nickel–metal hydride cells.</li>
            <li>So a Li-ion battery delivers more power than others of comparable size: a higher <b>volumetric energy density</b>.</li>
          </ul>
          <div class="vs">
            <div class="side"><h4>Specific energy density</h4><p>Energy per <b>unit mass</b>. Lithium wins because the element is so light.</p></div>
            <div class="side"><h4>Volumetric energy density</h4><p>Energy per <b>unit volume</b>. Lithium wins because each cell gives a high voltage, so fewer cells fill the same space.</p></div>
          </div>
          <div class="note why"><p>E°(Li<sup>+</sup>/Li) is about −3.04 V, the most negative of all the elements. Cell voltage is the gap between the two electrode potentials, and lithium puts one end of that gap as low as it goes.</p></div>
        ` },
        { title: 'Construction', html: `
          <p class="lead">Four parts: a <b>lithium-metal-oxide cathode</b>, a <b>graphite anode</b>, an <b>organic-carbonate electrolyte</b> and a <b>porous plastic separator</b>, wound together into a jelly roll.</p>
          <table class="tbl">
            <thead><tr><th>Part</th><th>Made of</th><th>Role</th></tr></thead>
            <tbody>
              <tr><td>Cathode (+)</td><td>Layers of <b>lithium-metal oxide</b>: LiCoO<sub>2</sub>, LiNiO<sub>2</sub>, LiMn<sub>2</sub>O<sub>4</sub>, LiNiMnCoO<sub>2</sub>. Also <b>lithium metal polyanionic</b> materials: LiFePO<sub>4</sub>, LiMnPO<sub>4</sub>, LiFeSO<sub>4</sub>F, etc.</td><td>Positive electrode; holds Li<sup>+</sup> between its layers</td></tr>
              <tr><td>Anode (−)</td><td><b>Graphite</b>, usually of composition <b>Li<sub>0.5</sub>C<sub>6</sub></b></td><td>Negative electrode; stores Li<sup>+</sup> between carbon sheets</td></tr>
              <tr><td>Electrolyte</td><td>Mixture of <b>organic carbonates</b>: ethylene carbonate (EC), diethyl carbonate (DEC)</td><td>Carries Li<sup>+</sup> between the electrodes</td></tr>
              <tr><td>Separator</td><td><b>Polyethylene (PE)</b>, <b>polypropylene (PP)</b> or PE/PP, with pores</td><td>Soaks up electrolyte and lets ions pass, but stops the electrodes touching</td></tr>
            </tbody>
          </table>
          <figure data-fig="m2-liion-cutaway"></figure>
          <div class="note why"><p>Water can't be the electrolyte here. It splits above about 1.23 V, far below 3.7 V, and it reacts with lithiated graphite. Organic carbonates survive the voltage. The catch is that they burn, which comes back in the explosion story.</p></div>
          <div class="note why"><p>The separator works like a sieve made of an electrical insulator: pores wide enough for ions, but no path for electrons, so the electrodes can't touch and short in normal use. If the cell is badly built, they can (see the explosion causes).</p></div>
          <div class="note heads-up"><p>The slide gives the anode as Li<sub>0.5</sub>C<sub>6</sub>, a typical working composition. The upper limit for graphite is one Li per six carbons, LiC<sub>6</sub>, which is what the charging figure writes. Quote Li<sub>0.5</sub>C<sub>6</sub> when asked for the slide's composition.</p></div>
        ` },
        { title: 'Charge & discharge', html: `
          <p class="lead">Charging drives Li<sup>+</sup> <b>out of LiCoO<sub>2</sub> into graphite</b>. Discharging lets it flow <b>back</b>. Each time the electrons go the same way as the Li<sup>+</sup>, only through the outer circuit.</p>
          <figure data-fig="m2-liion-charge-discharge"></figure>
          <h3>Charging</h3>
          <ol class="steps">
            <li><b>Cobalt oxidised</b> Cobalt ions in LiCoO<sub>2</sub> are oxidised and release electrons.</li>
            <li><b>Li<sup>+</sup> moves out</b> At the same time Li<sup>+</sup> migrates out of LiCoO<sub>2</sub>, across the electrolyte, into the graphite.</li>
            <li><b>Electrons pushed round</b> Electrons flow from the positive electrode to the negative electrode through the charger.</li>
            <li><b>They meet in graphite</b> Electrons and Li<sup>+</sup> combine at the negative electrode.</li>
          </ol>
          <h3>Discharging</h3>
          <ol class="steps">
            <li><b>Li<sup>+</sup> leaves graphite</b> Li<sup>+</sup> moves out of the anode and migrates through the electrolyte.</li>
            <li><b>Back between the layers</b> It enters the spaces between the cobalt oxide layers.</li>
            <li><b>Current flows</b> Meanwhile electrons flow through the external circuit and light the bulb.</li>
            <li><b>Cobalt reduced</b> Electrons reduce cobalt ions at the positive electrode, regenerating LiCoO<sub>2</sub>.</li>
          </ol>
          <p>Flip between Charge and Discharge below and follow one Li<sup>+</sup> and one electron. They always head for the same electrode, one through the electrolyte, one through the wire.</p>
          <div data-viz="liion"></div>
          <div class="note why"><p>The ion can't take the wire and the electron can't cross the electrolyte. Sending both to the same side keeps each electrode electrically neutral, which is why the two flows can never be separated.</p></div>
          <div class="note heads-up"><p>On the charging panel of the figure, the + and − beside the electrodes are swapped. Graphite is always the negative terminal (the charger's − goes to it) and LiCoO<sub>2</sub> always the positive. Only the names anode and cathode swap on charging (next tab).</p></div>
          <details class="more"><summary>What is the "SEI" in the figure</summary><p>SEI is the solid electrolyte interphase: a thin film that forms mainly on the graphite electrode (the figure draws one on each side) when a little electrolyte breaks down in the first cycles. Li<sup>+</sup> passes through it, and it shields the electrode from further attack.</p></details>
        ` },
        { title: 'Cell reactions', html: `
          <p class="lead">Same two electrodes, opposite reactions. On the slides, "anode" means <b>wherever oxidation happens</b>, so the names swap between charging and discharging.</p>
          <h3>Charging</h3>
          <div class="eq" data-label="Anode: LiCoO₂ oxidised">LiCoO<sub>2</sub> → Li<sub>1−n</sub>CoO<sub>2</sub> + n Li<sup>+</sup> + n e<sup>−</sup></div>
          <div class="eq" data-label="Cathode: graphite reduced">C<sub>6</sub> + n e<sup>−</sup> + n Li<sup>+</sup> → Li<sub>n</sub>C<sub>6</sub></div>
          <div class="eq" data-label="Overall">LiCoO<sub>2</sub> + C<sub>6</sub> → Li<sub>1−n</sub>CoO<sub>2</sub> + Li<sub>n</sub>C<sub>6</sub></div>
          <h3>Discharging</h3>
          <div class="eq" data-label="Anode: graphite oxidised">Li<sub>n</sub>C<sub>6</sub> → C<sub>6</sub> + n e<sup>−</sup> + n Li<sup>+</sup></div>
          <div class="eq" data-label="Cathode: LiCoO₂ regenerated">Li<sub>1−n</sub>CoO<sub>2</sub> + n Li<sup>+</sup> + n e<sup>−</sup> → LiCoO<sub>2</sub></div>
          <div class="eq" data-label="Overall">Li<sub>1−n</sub>CoO<sub>2</sub> + C<sub>6</sub>Li<sub>n</sub> → LiCoO<sub>2</sub> + C<sub>6</sub></div>
          <table class="tbl">
            <thead><tr><th>Electrode</th><th>Polarity (never changes)</th><th>While charging</th><th>While discharging</th></tr></thead>
            <tbody>
              <tr><td>LiCoO<sub>2</sub></td><td><b>Positive</b></td><td>Anode (oxidation)</td><td>Cathode (reduction)</td></tr>
              <tr><td>Graphite</td><td><b>Negative</b></td><td>Cathode (reduction)</td><td>Anode (oxidation)</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>n is how much lithium has moved, a fraction between 0 and 1. Cobalt is +3 in LiCoO<sub>2</sub> and heads toward +4 as Li<sup>+</sup> leaves. That rise is the line "cobalt ions are oxidised".</p></div>
          <div class="note trap"><p>"The anode is graphite" is true only on discharge. During charging the slides call <b>LiCoO<sub>2</sub> the anode</b>, because cobalt is oxidised there. Polarity stays put; the names follow the reaction.</p></div>
          <div class="note exam"><p>Write all three lines for each process with the electrode named, then add one sentence saying LiCoO<sub>2</sub> is oxidised on charging, since the electrode names swap.</p></div>
        ` },
        { title: 'Variants & uses', html: `
          <p class="lead">Change the cathode material and you get a different Li-ion chemistry. Only <b>LiCoO<sub>2</sub> (LCO)</b> is rated high capacity. LMO, LFP and NMC are listed as lower capacity, and <b>NCA</b> is the one named for electric vehicles and grid storage.</p>
          <table class="tbl">
            <thead><tr><th>Name</th><th>Constituent</th><th>Short</th><th>Main trait</th><th>Used in</th></tr></thead>
            <tbody>
              <tr><td>Lithium cobalt oxide</td><td><b>LiCoO<sub>2</sub></b></td><td>LCO</td><td><b>High capacity</b></td><td>Cell phones, laptops, cameras</td></tr>
              <tr><td>Lithium manganese oxide</td><td>LiMn<sub>2</sub>O<sub>4</sub></td><td>LMO</td><td>Lower capacity</td><td>Power tools, medical, hobbyist</td></tr>
              <tr><td>Lithium iron phosphate</td><td>LiFePO<sub>4</sub></td><td>LFP</td><td>Lower capacity</td><td>Power tools, medical, hobbyist</td></tr>
              <tr><td>Lithium nickel manganese cobalt oxide</td><td>LiNiMnCoO<sub>2</sub></td><td>NMC</td><td>Lower capacity</td><td>Power tools, medical, hobbyist</td></tr>
              <tr><td>Lithium nickel cobalt aluminium oxide</td><td>LiNiCoAlO<sub>2</sub></td><td>NCA</td><td>Not given</td><td><b>Electric vehicles</b> and grid storage</td></tr>
            </tbody>
          </table>
          <details class="more"><summary>Original slide table</summary><figure data-fig="m2-liion-variants-table"></figure></details>
          <p><b>Lithium polymer</b> (poly-carbon monofluoride) batteries give an output of <b>2.8 V</b> with moderately high energy density.</p>
          <div class="note heads-up"><p>The slide merges two names. Poly-carbon monofluoride, (CF)<sub>n</sub>, is the cathode of the lithium–carbon monofluoride cell, a primary cell rated about 2.8 V. The rechargeable "Li-po" pack in phones and drones is a Li-ion cell with a polymer or gel electrolyte, at about 3.7 V. Write the slide's line as given.</p></div>
          <h3>Where Li-ion is used</h3>
          <ul>
            <li><b>Portable power packs</b>: lighter and more compact than other battery types, so they fit inside cell phones, laptops and other personal electronics.</li>
            <li><b>Uninterruptible power supplies (UPS)</b>: emergency back-up during power loss or fluctuations, for a consistent supply.</li>
            <li><b>Electric vehicles</b>: store lots of energy and recharge many times (good charging capacity, long life span), so they suit electric, hybrid and plug-in hybrid vehicles.</li>
            <li><b>Marine vehicles</b>: an alternative to gasoline and lead–acid in work and tug boats, and leisure craft such as speed boats and yachts.</li>
            <li><b>Personal mobility</b>: wheelchairs, bikes, scooters and other mobility aids for people with disability or mobility restrictions.</li>
            <li><b>Renewable energy storage</b>: store energy from solar panels and wind turbines because they charge quickly; lighter, more compact and higher capacity than lead–acid.</li>
          </ul>
        ` },
        { title: 'Pros, cons & fires', html: `
          <p class="lead">Li-ion wins on energy, voltage and convenience. It loses on cost, ageing and the need for protection, and its <b>flammable organic electrolyte</b> sits behind every explosion story.</p>
          <div class="vs">
            <div class="side"><h4>Advantages</h4>
              <ul>
                <li><b>High energy density</b>: the biggest plus; the higher power density suits gadgets and electric vehicles.</li>
                <li><b>Low self-discharge</b>: much lower than Ni–Cd and NiMH.</li>
                <li><b>Low maintenance</b>: no active maintenance needed.</li>
                <li><b>High cell voltage</b>: about <b>3.6 V</b> per cell, so fewer cells per battery.</li>
                <li><b>Variety of types</b>: the right chemistry can be picked for each job.</li>
                <li><b>No priming</b>: supplied operational and ready to go.</li>
                <li><b>Load characteristics</b>: a fairly constant 3.6 V per cell, falling off only as the last charge is used.</li>
              </ul>
            </div>
            <div class="side"><h4>Disadvantages</h4>
              <ul>
                <li><b>Protection required</b>: less rugged than some other rechargeables; must be guarded against overcharging and discharging too far.</li>
                <li><b>Ageing</b>: often only <b>500–1000</b> charge–discharge cycles before capacity falls.</li>
                <li><b>High cost</b>: around <b>40% more</b> to manufacture than nickel–cadmium cells.</li>
                <li><b>Chance of explosion</b>: three causes below.</li>
              </ul>
            </div>
          </div>
          <h3>Why they can explode</h3>
          <table class="tbl">
            <thead><tr><th>Cause</th><th>What goes wrong</th></tr></thead>
            <tbody>
              <tr><td><b>Bad design or manufacturing defect</b></td><td>Too little space for the electrodes and separator. The cell swells slightly as it charges, the electrodes bend and cause a <b>short circuit</b>.</td></tr>
              <tr><td><b>Overcharging</b></td><td>Lithium cobalt oxide releases <b>oxygen</b>, which reacts with the flammable electrolyte and overheats the cell.</td></tr>
              <tr><td><b>Electrolyte breakdown</b></td><td>On overheating, <b>dimethyl carbonate</b> decomposes to <b>CO<sub>2</sub></b>; pressure builds up until the battery explodes.</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>All three routes end at the same place: heat meeting a flammable organic electrolyte. That is why chargers cut off at full charge and packs carry protection circuits.</p></div>
          <div class="note trap"><p>Two voltages appear: <b>3.7 V</b> is the maximum per cell (slide 21) and <b>3.6 V</b> is the typical working voltage (slide 27). Use 3.7 V for "maximum" and 3.6 V for "per cell in use".</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Is Li-ion primary or secondary, and is there lithium metal inside?', back: '<b>Secondary</b>, and it has <b>no metallic lithium</b> anode: lithium moves as Li<sup>+</sup>.' },
        { front: 'Who first proposed the Li-ion idea, when, and with which electrodes?', back: '<b>M. Whittingham</b>, <b>1970s</b>: <b>titanium sulphide</b> cathode, <b>lithium metal</b> anode.' },
        { front: 'The 2019 Chemistry Nobel for Li-ion went to?', back: '<b>John B. Goodenough</b>, <b>M. Stanley Whittingham</b>, <b>Akira Yoshino</b>.' },
        { front: 'Li-ion maximum cell voltage vs Ni–Cd / NiMH?', back: '<b>3.7 V</b> vs <b>1.3 V</b>, nearly three times higher.' },
        { front: 'Specific energy density vs volumetric energy density?', back: 'Energy per <b>unit mass</b> vs energy per <b>unit volume</b>.' },
        { front: 'Why does lithium give a high cell voltage?', back: 'Li<sup>+</sup> has a <b>very large negative standard reduction potential</b>.' },
        { front: 'Anode material and its usual composition?', back: '<b>Graphite</b>, usually <b>Li<sub>0.5</sub>C<sub>6</sub></b>.' },
        { front: 'Electrolyte and separator materials?', back: 'Electrolyte: <b>organic carbonates</b> (ethylene carbonate, diethyl carbonate). Separator: <b>PE, PP or PE/PP</b>.' },
        { front: 'During charging, which electrode is oxidised, and what do the slides call it?', back: '<b>LiCoO<sub>2</sub></b> (cobalt ions oxidised), so it is called the <b>anode</b> during charging.' },
        { front: 'Which variant is "high capacity", and which is listed for electric vehicles?', back: '<b>LCO (LiCoO<sub>2</sub>)</b> is high capacity (phones, laptops, cameras); <b>NCA (LiNiCoAlO<sub>2</sub>)</b> is for EVs and grid storage.' },
        { front: 'Li-ion cycle life and cost penalty?', back: '<b>500–1000 cycles</b>; about <b>40% costlier</b> than Ni–Cd.' },
        { front: 'Three causes of Li-ion explosions?', back: '<b>Bad design/defects</b> (short circuit), <b>overcharging</b> (O<sub>2</sub> from LiCoO<sub>2</sub> + flammable electrolyte), <b>electrolyte breakdown</b> (dimethyl carbonate → CO<sub>2</sub> pressure).' }
      ],
      oneLiners: [
        'Li-ion: secondary, no metallic Li anode; Li<sup>+</sup> shuttles between graphite and LiCoO<sub>2</sub>.',
        '1970s, Whittingham: titanium sulphide cathode + Li metal anode. Nobel 2019: Goodenough, Whittingham, Yoshino.',
        'Light Li → high specific energy density; very negative E° of Li<sup>+</sup> → 3.7 V max per cell (≈ 3× the 1.3 V of Ni–Cd/NiMH) → high volumetric energy density.',
        'Cathode: LiCoO<sub>2</sub>, LiNiO<sub>2</sub>, LiMn<sub>2</sub>O<sub>4</sub>, LiNiMnCoO<sub>2</sub> + polyanionic LiFePO<sub>4</sub>, LiMnPO<sub>4</sub>, LiFeSO<sub>4</sub>F; anode graphite (Li<sub>0.5</sub>C<sub>6</sub>); electrolyte EC + DEC; separator PE/PP.',
        'Charging: LiCoO<sub>2</sub> oxidised (called anode), graphite reduced (called cathode). Discharging: the reverse.',
        'Variants: LCO high capacity (phones); LMO, LFP, NMC lower capacity (power tools, medical, hobbyist); NCA for EVs and grid; Li polymer 2.8 V.',
        'Cons: needs protection, 500–1000 cycles, ~40% costlier than Ni–Cd, explosion risk.',
        'Explosion: bad design (short), overcharge (O<sub>2</sub> + flammable electrolyte), electrolyte breakdown (dimethyl carbonate → CO<sub>2</sub>).'
      ],
      formulas: [
        { name: 'Li-ion charging, anode (LiCoO₂)', html: `LiCoO<sub>2</sub> → Li<sub>1−n</sub>CoO<sub>2</sub> + n Li<sup>+</sup> + n e<sup>−</sup>`, note: 'On charging the LiCoO₂ electrode is where oxidation happens, so the slides call it the anode.' },
        { name: 'Li-ion charging, cathode (graphite)', html: `C<sub>6</sub> + n e<sup>−</sup> + n Li<sup>+</sup> → Li<sub>n</sub>C<sub>6</sub>`, note: 'Li⁺ and electrons meet in the graphite.' },
        { name: 'Li-ion charging, overall', html: `LiCoO<sub>2</sub> + C<sub>6</sub> → Li<sub>1−n</sub>CoO<sub>2</sub> + Li<sub>n</sub>C<sub>6</sub>`, note: 'Driven by the charger (electrolytic).' },
        { name: 'Li-ion discharging, anode (graphite)', html: `Li<sub>n</sub>C<sub>6</sub> → C<sub>6</sub> + n e<sup>−</sup> + n Li<sup>+</sup>`, note: 'Graphite is oxidised on discharge.' },
        { name: 'Li-ion discharging, cathode (LiCoO₂)', html: `Li<sub>1−n</sub>CoO<sub>2</sub> + n Li<sup>+</sup> + n e<sup>−</sup> → LiCoO<sub>2</sub>`, note: 'Cobalt is reduced and LiCoO₂ regenerated.' },
        { name: 'Li-ion discharging, overall', html: `Li<sub>1−n</sub>CoO<sub>2</sub> + C<sub>6</sub>Li<sub>n</sub> → LiCoO<sub>2</sub> + C<sub>6</sub>`, note: 'Reverse of the charging reaction.' }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: 'm2-fuel-cells',
      title: 'Fuel cells: principle & types',
      short: 'Fuel cell basics',
      blurb: 'What a fuel cell does, how hydrogen and oxygen give a current, the eight types, the hydrogen–oxygen cell, and the general pros, cons and uses.',
      source: 'Slides 29–32, 36',
      tabs: [
        { title: 'What it is', html: `
          <p class="lead">A fuel cell converts <b>chemical potential energy</b> (the energy stored in molecular bonds) into <b>electrical energy</b>, <b>without combustion</b>.</p>
          <p>Because nothing burns, it gives a <b>higher electrical efficiency (≥ 40%)</b> than conventional power generation systems.</p>
          <div class="note why"><p>A power station burns fuel, makes steam, spins a turbine, then a generator. Every step loses energy, and the heat-to-work step has a hard thermodynamic ceiling. A fuel cell skips the whole chain: electrons come straight off the fuel molecule.</p></div>
          <figure data-fig="m2-fuel-cell-stack"></figure>
          <p>In a hydrogen fuel cell vehicle, <b>hydrogen tanks</b> feed the <b>fuel cell stack</b>; its current reaches the <b>electric traction motor</b> through a DC/DC converter and power electronic controller, with a battery pack alongside and a thermal system for cooling.</p>
          <figure data-fig="m2-fcv-layout"></figure>
          <div class="note trap"><p>A fuel cell does not store energy the way a battery does. It behaves more like an engine: it keeps running only as long as you feed it fuel.</p></div>
        ` },
        { title: 'Principle', html: `
          <p class="lead">Feed <b>hydrogen</b> (or a hydrogen-rich fuel) to the <b>anode</b> and <b>oxygen</b> (air) to the <b>cathode</b>. The electrolyte lets protons through but not electrons, so the electrons are made to do work on their way round.</p>
          <ol class="steps">
            <li><b>Supply</b> Hydrogen goes to the anode, oxygen (air) to the cathode.</li>
            <li><b>Split</b> At the anode, hydrogen molecules split into protons and electrons.</li>
            <li><b>Protons cross</b> Protons migrate through the electrolyte to the cathode.</li>
            <li><b>Electrons detour</b> Electrons cannot pass through the electrolyte, so they travel round it through the external circuit to the cathode. That flow is the current.</li>
            <li><b>Water forms</b> At the cathode, protons react with oxygen (taking up the electrons) to form water.</li>
          </ol>
          <div class="note why"><p>The electrolyte is the whole point. If electrons could cross it, H<sub>2</sub> and O<sub>2</sub> would react right there and all you'd get is heat.</p></div>
          <div class="note exam"><p>A full "principle" answer names four things: which gas goes to which electrode, what splits at the anode, what crosses the electrolyte, and why the electrons take the outer circuit.</p></div>
        ` },
        { title: 'Eight types', html: `
          <p class="lead">There are <b>eight main types</b> of fuel cell, named <b>mainly by the electrolyte</b>. The three "direct" types are named after the fuel they take instead.</p>
          <table class="tbl">
            <thead><tr><th>Short</th><th>Full name</th><th>Fed with</th></tr></thead>
            <tbody>
              <tr><td><b>PEMFC</b></td><td>Proton exchange membrane, or polymer electrolyte membrane, fuel cell</td><td>Hydrogen</td></tr>
              <tr><td><b>AFC</b></td><td>Alkaline fuel cell</td><td>Hydrogen</td></tr>
              <tr><td><b>PAFC</b></td><td>Phosphoric acid fuel cell</td><td>Hydrogen</td></tr>
              <tr><td><b>MCFC</b></td><td>Molten carbonate fuel cell</td><td>Hydrogen</td></tr>
              <tr><td><b>SOFC</b></td><td>Solid oxide fuel cell</td><td>Hydrogen (also CO)</td></tr>
              <tr><td><b>DMFC</b></td><td>Direct methanol fuel cell</td><td>Methanol</td></tr>
              <tr><td><b>DAFC</b></td><td>Direct ammonia fuel cell</td><td>Ammonia</td></tr>
              <tr><td><b>DCFC</b></td><td>Direct carbon fuel cell</td><td>Carbon</td></tr>
            </tbody>
          </table>
          <p>Apart from <b>DAFC, DMFC and DCFC</b>, every type is fed with <b>hydrogen</b>.</p>
          <div class="mnemonic"><p>D for Direct: the fuel goes in as it is (methanol, ammonia, carbon), with no hydrogen step.</p></div>
          <div class="note exam"><p>The slides highlight PEMFC and SOFC, and those are the two covered in detail. Know the other six by abbreviation and full name.</p></div>
        ` },
        { title: 'H₂–O₂ fuel cell', html: `
          <p class="lead">The <b>hydrogen–oxygen fuel cell (HOFC)</b> is the common type. Like a galvanic cell it has <b>two half cells</b>, and its only product is <b>water</b>.</p>
          <div class="kv">
            <div><span>Electrodes (both)</span><b>Porous graphite</b></div>
            <div><span>Catalyst</span><b>Pt, Ag or a metal oxide</b></div>
            <div><span>Alkaline electrolyte (AFC)</span><b>Aqueous NaOH or KOH</b></div>
            <div><span>Acidic electrolyte</span><b>Aqueous H<sub>2</sub>SO<sub>4</sub></b></div>
            <div><span>Feed</span><b>H<sub>2</sub> at anode, O<sub>2</sub> at cathode</b></div>
            <div><span>Gas pressure</span><b>About 50 atm</b></div>
          </div>
          <p>The gases diffuse into their electrodes, and hydrogen is oxidised by oxygen to give nothing but water.</p>
          <div class="eq" data-label="Overall">2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</div>
          <div class="note why"><p>The electrodes are porous because the reaction needs gas, electrolyte and catalyst to meet at the same spot. Pores create a huge number of those three-way contact points.</p></div>
          <details class="more"><summary>Half-reactions in the alkaline (KOH) version</summary>
            <div class="eq" data-label="Anode">2H<sub>2</sub> + 4OH<sup>−</sup> → 4H<sub>2</sub>O + 4e<sup>−</sup></div>
            <div class="eq" data-label="Cathode">O<sub>2</sub> + 2H<sub>2</sub>O + 4e<sup>−</sup> → 4OH<sup>−</sup></div>
            <p>Add them and the OH<sup>−</sup> cancels, leaving 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O. In the acidic version H<sup>+</sup> carries the charge, exactly as in the PEMFC.</p>
          </details>
        ` },
        { title: 'Pros, cons & uses', html: `
          <p class="lead">Fuel cells are efficient, clean and quiet. What holds them back is <b>cost</b>, <b>durability</b> and <b>hydrogen</b> itself.</p>
          <div class="vs">
            <div class="side"><h4>Advantages</h4>
              <ul>
                <li>Very high <b>energy conversion</b>: <b>75–82%</b>.</li>
                <li>Cuts expensive <b>transmission lines</b> and transmission losses.</li>
                <li><b>High reliability</b> in generation; by-products are environmentally acceptable.</li>
                <li><b>Low maintenance cost</b>, and it saves fossil fuels.</li>
                <li>Very low <b>noise and thermal pollution</b>.</li>
              </ul>
            </div>
            <div class="side"><h4>Disadvantages</h4>
              <ul>
                <li><b>High cost</b>, with problems of durability.</li>
                <li>Hard to store <b>large amounts of hydrogen</b>.</li>
                <li>Accurate <b>lifetime not known</b>, and it <b>cannot store electricity</b>.</li>
                <li>Electrodes are <b>expensive and short-lived</b>.</li>
                <li>Storing and handling H<sub>2</sub> is dangerous: it is <b>inflammable</b> (which means flammable).</li>
              </ul>
            </div>
          </div>
          <h3>Applications</h3>
          <div class="chips"><span class="chip">Space vehicles</span><span class="chip">Submarines</span><span class="chip">Military vehicles</span><span class="chip">Automotive (future)</span></div>
          <ul>
            <li>The most important use: <b>space vehicles, submarines and military vehicles</b>.</li>
            <li>The product water is a valuable source of <b>fresh water for astronauts</b>.</li>
            <li>Fuel cell batteries for <b>automotive</b> use are expected to be a great boon in future.</li>
          </ul>
          <div class="note heads-up"><p>Three efficiency figures show up: ≥ 40% electrical (slide 29), 75–82% energy conversion (slide 36) and over 60% for SOFC (slide 37). Quote each where its slide does. For context, the theoretical ceiling for H<sub>2</sub>–O<sub>2</sub> at 25 °C is about 83% (ΔG/ΔH), so 75–82% is close to ideal; working stacks usually deliver roughly 40–60% as electricity.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'A fuel cell in one line?', back: 'Converts <b>chemical potential energy</b> (bond energy) into <b>electrical energy</b> <b>without combustion</b>.' },
        { front: 'Electrical efficiency of fuel cells vs conventional power plants?', back: '<b>≥ 40%</b>, higher than conventional generation.' },
        { front: 'Which gas goes to which electrode?', back: '<b>Hydrogen → anode</b>, <b>oxygen (air) → cathode</b>.' },
        { front: 'Why must the electrons take the external circuit?', back: 'They <b>cannot pass through the electrolyte</b>; only the protons can.' },
        { front: 'The eight main fuel cell types?', back: '<b>PEMFC, AFC, PAFC, MCFC, SOFC, DMFC, DAFC, DCFC</b>, classified mainly by electrolyte.' },
        { front: 'Which three types are not fed with hydrogen?', back: '<b>DAFC</b> (ammonia), <b>DMFC</b> (methanol), <b>DCFC</b> (carbon).' },
        { front: 'HOFC electrodes and catalyst?', back: '<b>Porous graphite</b> electrodes with <b>Pt, Ag or a metal oxide</b> catalyst.' },
        { front: 'HOFC electrolytes?', back: '<b>Aqueous NaOH or KOH</b> (alkaline, AFC) or <b>H<sub>2</sub>SO<sub>4</sub></b> (acidic).' },
        { front: 'Gas pressure in the HOFC?', back: 'About <b>50 atm</b>.' },
        { front: 'Energy conversion figure on the fuel cell advantages slide?', back: '<b>75–82%</b>.' },
        { front: 'Why are fuel cells prized in spacecraft?', back: '<b>Light weight</b>, and the product water is <b>fresh water for astronauts</b>.' },
        { front: 'Main disadvantages of fuel cells?', back: '<b>High cost</b>, durability, <b>H<sub>2</sub> storage</b>, unknown lifetime, can\'t store electricity, <b>expensive short-lived electrodes</b>, flammable H<sub>2</sub>.' }
      ],
      oneLiners: [
        'Fuel cell: chemical (bond) energy → electricity without combustion; ≥ 40% electrical efficiency.',
        'H<sub>2</sub> at anode splits into H<sup>+</sup> + e<sup>−</sup>; H<sup>+</sup> crosses the electrolyte; e<sup>−</sup> go round the external circuit; water forms at the cathode.',
        '8 types, mainly by electrolyte: PEMFC, AFC, PAFC, MCFC, SOFC, DMFC, DAFC, DCFC; all but DAFC, DMFC, DCFC run on H<sub>2</sub>.',
        'HOFC: porous graphite + Pt/Ag/metal-oxide catalyst; NaOH/KOH (AFC) or H<sub>2</sub>SO<sub>4</sub>; gases at ~50 atm; 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O.',
        'Pros: 75–82% conversion, fewer transmission losses, reliable, low maintenance, low noise and thermal pollution.',
        'Cons: high cost, durability, H<sub>2</sub> storage, unknown lifetime, cannot store electricity, expensive short-lived electrodes, flammable H<sub>2</sub>.',
        'Uses: space vehicles, submarines, military vehicles; water for astronauts; automotive in future.'
      ],
      formulas: [
        { name: 'H₂–O₂ fuel cell, overall', html: `2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O`, note: 'Only product is water; gases at about 50 atm.' }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: 'm2-pemfc',
      title: 'PEM fuel cell',
      short: 'PEM fuel cell',
      blurb: 'The low-temperature fuel cell with a Nafion membrane: why it needs pure hydrogen, what happens at each electrode, and the layers inside the cell.',
      source: 'Slides 33–35',
      tabs: [
        { title: 'Membrane & limits', html: `
          <p class="lead">PEMFC stands for <b>proton exchange membrane</b> or <b>polymer electrolyte membrane</b> fuel cell. Its electrolyte is a <b>water-based, acidic polymer membrane</b>, such as <b>Nafion</b>, that conducts <b>protons</b>.</p>
          <div class="kv">
            <div><span>Electrolyte</span><b>Nafion (acidic polymer)</b></div>
            <div><span>Ion carried</span><b>H<sup>+</sup></b></div>
            <div><span>Temperature</span><b>&lt; 80 °C</b></div>
            <div><span>Electrodes</span><b>Precious metal (Pt-based)</b></div>
            <div><span>Fuel</span><b>Pure hydrogen</b></div>
            <div><span>E°<sub>cell</sub></span><b>1.23 V</b></div>
          </div>
          <p>The cells run at <b>relatively low temperature</b>. That, plus the <b>precious-metal electrodes</b>, means they <b>must be operated on pure hydrogen</b>.</p>
          <figure data-fig="m2-nafion-structure"></figure>
          <p>Nafion is a Teflon-like chain of –CF<sub>2</sub>–CF<sub>2</sub>– units with side chains ending in <b>–SO<sub>3</sub>H</b> (sulfonic acid) groups, and it holds water (x H<sub>2</sub>O).</p>
          <div class="note why"><p>The –SO<sub>3</sub>H groups give up H<sup>+</sup>, and the absorbed water lets protons hop from one group to the next. The membrane has to stay wet, which is why the cell stays below about 80 °C.</p></div>
          <div class="note why"><p>Pure hydrogen, because at these low temperatures impurities such as CO stick to the platinum surface and block it (catalyst poisoning). Cool and precious-metal based means no tolerance for dirty fuel.</p></div>
        ` },
        { title: 'Process & reactions', html: `
          <p class="lead">Hydrogen is split on platinum at the anode, <b>protons cross the membrane</b>, <b>electrons go through the external circuit</b>, and all three meet oxygen at the cathode to make <b>water</b>.</p>
          <ol class="steps">
            <li><b>Anode</b> Hydrogen fuel is processed here: electrons are separated from protons on the surface of a platinum-based catalyst.</li>
            <li><b>Membrane</b> The protons pass through the membrane to the cathode side.</li>
            <li><b>External circuit</b> The electrons travel round the outside, and that is the electrical output of the cell.</li>
            <li><b>Cathode</b> Another Pt electrode combines the protons and electrons with oxygen to produce water.</li>
          </ol>
          <div class="eq" data-label="At anode">2H<sub>2</sub>(g) → 4H<sup>+</sup> + 4e<sup>−</sup></div>
          <div class="eq" data-label="At cathode">O<sub>2</sub>(g) + 4H<sup>+</sup> + 4e<sup>−</sup> → 2H<sub>2</sub>O</div>
          <div class="eq" data-label="Net reaction">O<sub>2</sub>(g) + 2H<sub>2</sub>(g) → 2H<sub>2</sub>O(l)</div>
          <div class="eq" data-label="Standard cell potential">E°<sub>cell</sub> = 1.23 V</div>
          <div class="worked">
            <div class="given"><p>Where 1.23 V comes from: E°(O<sub>2</sub>/H<sub>2</sub>O) = +1.23 V at the cathode, E°(H<sup>+</sup>/H<sub>2</sub>) = 0.00 V at the anode.</p></div>
            <div class="solve"><div class="eq">E°<sub>cell</sub> = E°<sub>cathode</sub> − E°<sub>anode</sub> = 1.23 − 0.00</div></div>
            <div class="result"><p>E°<sub>cell</sub> = <b>1.23 V</b></p></div>
          </div>
          <div class="note trap"><p>Water forms at the <b>cathode</b> in a PEMFC, because the moving ion (H<sup>+</sup>) travels to the oxygen side. In an SOFC it is the other way round.</p></div>
          <div class="note exam"><p>Balance with 4 electrons (2H<sub>2</sub>, not H<sub>2</sub>) so the two half-reactions add straight to the net equation. That is how the slide writes it.</p></div>
        ` },
        { title: 'Inside the cell', html: `
          <p class="lead">The slide-35 diagram is a sandwich: plate, gas diffusion layer, catalyst layer, <b>proton exchange membrane</b>, catalyst layer, gas diffusion layer, plate.</p>
          <figure data-fig="m2-pemfc-diagram"></figure>
          <table class="tbl">
            <thead><tr><th>Layer (anode → cathode)</th><th>What it does</th></tr></thead>
            <tbody>
              <tr><td>Anode plate</td><td>Brings H<sub>2</sub> in; unused H<sub>2</sub> leaves</td></tr>
              <tr><td>Anodic gas diffusion layer</td><td>Spreads H<sub>2</sub> evenly over the catalyst and carries electrons out</td></tr>
              <tr><td>Anodic catalyst layer</td><td><b>Pt</b> splits H<sub>2</sub> into H<sup>+</sup> and e<sup>−</sup></td></tr>
              <tr><td><b>Proton exchange membrane</b></td><td>Lets <b>only H<sup>+</sup></b> through</td></tr>
              <tr><td>Cathodic catalyst layer</td><td><b>Pt</b> joins H<sup>+</sup>, e<sup>−</sup> and O<sub>2</sub> into water</td></tr>
              <tr><td>Cathodic gas diffusion layer</td><td>Spreads O<sub>2</sub> and brings electrons back from the load</td></tr>
              <tr><td>Cathode plate</td><td>Brings O<sub>2</sub> in; unused O<sub>2</sub> and H<sub>2</sub>O leave</td></tr>
            </tbody>
          </table>
          <p>Follow the colours: green H atoms arrive as H<sub>2</sub>, drop their yellow electrons at the anodic catalyst, cross the blue membrane as H<sup>+</sup>, and leave on the right joined to pink O as H<sub>2</sub>O. The electrons go up and over through the <b>load</b>.</p>
        ` }
      ],
      flashcards: [
        { front: 'The two expansions of PEMFC?', back: '<b>Proton exchange membrane</b> fuel cell, or <b>polymer electrolyte membrane</b> fuel cell.' },
        { front: 'Example of the membrane, and what kind of material it is?', back: '<b>Nafion</b>: a water-based, <b>acidic polymer</b> that conducts protons.' },
        { front: 'PEMFC operating temperature?', back: 'Relatively low: <b>below 80 °C</b>.' },
        { front: 'Why must a PEMFC run on pure hydrogen?', back: 'Its <b>low temperature</b> and <b>precious-metal (Pt) electrodes</b> leave it no tolerance for impurities.' },
        { front: 'PEMFC anode reaction?', back: '<b>2H<sub>2</sub> → 4H<sup>+</sup> + 4e<sup>−</sup></b>, on a Pt-based catalyst.' },
        { front: 'PEMFC cathode reaction?', back: '<b>O<sub>2</sub> + 4H<sup>+</sup> + 4e<sup>−</sup> → 2H<sub>2</sub>O</b>' },
        { front: 'E°<sub>cell</sub> of the PEMFC?', back: '<b>1.23 V</b>' },
        { front: 'Which ion crosses the PEMFC membrane, and where does water form?', back: '<b>H<sup>+</sup></b> crosses anode → cathode; water forms at the <b>cathode</b>.' },
        { front: 'Which group in Nafion hands over the protons?', back: 'The <b>–SO<sub>3</sub>H</b> (sulfonic acid) groups on its side chains.' }
      ],
      oneLiners: [
        'PEMFC = proton exchange / polymer electrolyte membrane FC; Nafion (water-based, acidic polymer) conducts H<sup>+</sup>.',
        'Operates below 80 °C; low temperature + precious-metal electrodes ⇒ must run on pure H<sub>2</sub>.',
        'Anode 2H<sub>2</sub> → 4H<sup>+</sup> + 4e<sup>−</sup> on Pt; cathode O<sub>2</sub> + 4H<sup>+</sup> + 4e<sup>−</sup> → 2H<sub>2</sub>O; E°<sub>cell</sub> = 1.23 V.',
        'H<sup>+</sup> moves anode → cathode, so water leaves on the cathode side.',
        'Layers: plate | gas diffusion layer | catalyst layer | membrane | catalyst layer | gas diffusion layer | plate.'
      ],
      formulas: [
        { name: 'PEMFC anode', html: `2H<sub>2</sub>(g) → 4H<sup>+</sup> + 4e<sup>−</sup>`, note: 'On a platinum-based catalyst.' },
        { name: 'PEMFC cathode', html: `O<sub>2</sub>(g) + 4H<sup>+</sup> + 4e<sup>−</sup> → 2H<sub>2</sub>O`, note: 'Water forms on the cathode side.' },
        { name: 'PEMFC net', html: `O<sub>2</sub>(g) + 2H<sub>2</sub>(g) → 2H<sub>2</sub>O(l)`, note: 'E°cell = 1.23 V.' },
        { name: 'PEMFC standard cell potential', html: `E°<sub>cell</sub> = E°<sub>cathode</sub> − E°<sub>anode</sub> = 1.23 − 0.00 = 1.23 V`, note: 'O₂/H₂O vs H⁺/H₂.' }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: 'm2-sofc',
      title: 'Solid oxide fuel cell',
      short: 'Solid oxide fuel cell',
      blurb: 'The hot ceramic fuel cell: YSZ electrolyte, H₂ and CO as fuel, 800–1000 °C, what each layer is made of, the reactions, and how it compares with the PEMFC.',
      source: 'Slides 37–41',
      tabs: [
        { title: 'What it is', html: `
          <p class="lead">An SOFC is a <b>high-temperature</b> fuel cell whose electrolyte is a <b>solid ceramic inorganic oxide</b>, not a liquid or a membrane. That is why it is also called a <b>ceramic fuel cell</b>.</p>
          <div class="kv">
            <div><span>Electrolyte</span><b>Yttria-stabilized zirconia (YSZ)</b></div>
            <div><span>YSZ is</span><b>ZrO<sub>2</sub> stabilized with Y<sub>2</sub>O<sub>3</sub></b></div>
            <div><span>Fuels</span><b>H<sub>2</sub> and CO</b></div>
            <div><span>Temperature</span><b>800–1000 °C</b></div>
            <div><span>Efficiency, fuel → electricity</span><b>Over 60%</b></div>
            <div><span>Sulphur in fuel</span><b>Relatively tolerant</b></div>
          </div>
          <ul>
            <li>It runs at the <b>highest temperature</b> of all fuel cell types.</li>
            <li>It resists <b>small quantities of sulphur</b> better than other fuel cells, so it can be used with <b>coal gas</b>.</li>
          </ul>
          <div class="note why"><p>The heat is needed by the electrolyte. Putting Y<sup>3+</sup> in place of some Zr<sup>4+</sup> leaves gaps (oxygen vacancies) in the lattice, and O<sup>2−</sup> moves by hopping into those gaps. The hops are fast enough only when the ceramic is very hot.</p></div>
          <div class="note why"><p>CO works as a fuel because at 800–1000 °C oxide ions oxidise it straight to CO<sub>2</sub>, and there is no platinum catalyst for it to poison. The same heat makes the cell more forgiving of sulphur.</p></div>
        ` },
        { title: 'Structure', html: `
          <p class="lead">Three solid layers: a <b>porous Ni–YSZ cermet anode</b> on the fuel side, an <b>oxide-ion conducting ceramic electrolyte</b> in the middle, and a <b>porous ceramic cathode</b> such as LSM on the air side.</p>
          <table class="tbl">
            <thead><tr><th>Layer</th><th>Material</th><th>Built this way because</th></tr></thead>
            <tbody>
              <tr><td>Anode, or fuel electrode</td><td><b>Nickel mixed with YSZ</b> = <b>Ni–YSZ cermet</b> (a cermet is a mixture of ceramic and metal)</td><td>It is a <b>porous</b> ceramic layer, so fuel can flow through to the electrolyte</td></tr>
              <tr><td>Cathode, or air electrode</td><td>A <b>mixed ion-conducting and electronically conducting</b> ceramic, e.g. <b>strontium-doped lanthanum manganite (LSM)</b></td><td>A thin <b>porous</b> ceramic layer where <b>oxygen reduction</b> takes place</td></tr>
              <tr><td>Electrolyte</td><td><b>Oxide-ion (O<sup>2−</sup>) conducting ceramic</b>. Most popular: a <b>bilayer</b> of YSZ + <b>gadolinium-doped CeO<sub>2</sub> (GDC)</b>, or a mixture of ZrO and CaO</td><td>Solid and dense: passes O<sup>2−</sup> but blocks electrons and gas</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>A cermet does two jobs at once. Nickel conducts electrons and speeds up fuel oxidation; the YSZ in the mix conducts O<sup>2−</sup> and expands with heat much like the electrolyte beside it, so the layers don't crack apart at 1000 °C.</p></div>
          <div class="note why"><p>The cathode has to pass electrons (arriving from the circuit) and O<sup>2−</sup> (leaving into the electrolyte). A mixed conductor handles both in one material.</p></div>
          <div class="note heads-up"><p>"ZrO" on the slide should read <b>ZrO<sub>2</sub></b> (zirconia); ZrO<sub>2</sub> with CaO is calcia-stabilized zirconia. The slide also says the cathode is coated "over the solid electrode"; it is coated on the solid electrolyte.</p></div>
        ` },
        { title: 'Reactions', html: `
          <p class="lead">Here the moving ion is <b>O<sup>2−</sup></b>. Oxygen picks up electrons at the cathode, crosses the ceramic as O<sup>2−</sup>, and oxidises the fuel at the anode.</p>
          <figure data-fig="m2-sofc-diagram"></figure>
          <div class="eq" data-label="At cathode (reduction)">O<sub>2</sub>(g) + 4e<sup>−</sup> → 2O<sup>2−</sup></div>
          <div class="eq" data-label="At anode (oxidation)">H<sub>2</sub>(g) + CO(g) + 2O<sup>2−</sup> → H<sub>2</sub>O(g) + CO<sub>2</sub>(g) + 4e<sup>−</sup></div>
          <div class="eq" data-label="Net reaction">H<sub>2</sub>(g) + CO(g) + O<sub>2</sub>(g) → H<sub>2</sub>O(g) + CO<sub>2</sub>(g)</div>
          <p>The figure writes the same chemistry one fuel at a time, per 2 electrons:</p>
          <div class="eq" data-label="Anode, CO">CO + O<sup>2−</sup> → CO<sub>2</sub> + 2e<sup>−</sup></div>
          <div class="eq" data-label="Anode, H₂">H<sub>2</sub> + O<sup>2−</sup> → H<sub>2</sub>O + 2e<sup>−</sup></div>
          <div class="eq" data-label="Cathode">½O<sub>2</sub> + 2e<sup>−</sup> → O<sup>2−</sup></div>
          <p>Add the two anode lines and double the cathode line, and you get the slide's 4-electron equations.</p>
          <div class="note trap"><p>O<sup>2−</sup> travels <b>cathode → anode</b>, so the products (CO<sub>2</sub>, H<sub>2</sub>O) leave on the <b>fuel side</b>; only excess air leaves the cathode. In a PEMFC, H<sup>+</sup> goes the other way and water forms at the cathode.</p></div>
          <div class="note trap"><p>The figure labels the anode <b>Ni–ZrO<sub>2</sub> cermet</b> and the cathode <b>LaMnO<sub>3</sub></b>. Same materials as the text: YSZ is zirconia-based, and LSM is LaMnO<sub>3</sub> doped with strontium.</p></div>
        ` },
        { title: 'Pros, cons & uses', html: `
          <p class="lead">Being <b>all-solid</b> and <b>hot</b> is both the SOFC's strength and its problem.</p>
          <div class="vs">
            <div class="side"><h4>Advantages</h4>
              <ul>
                <li>All components solid: <b>no electrolyte-loss maintenance</b>, and <b>electrode corrosion is eliminated</b>.</li>
                <li>High temperature: <b>better tolerance of impurities</b>, so a longer life.</li>
                <li><b>High efficiency</b> for electricity, from high-quality waste heat for <b>cogeneration</b> and <b>low activation losses</b>.</li>
                <li><b>Low emissions</b>: negligible pollution, the <b>cleanest</b> of all fuel cells.</li>
              </ul>
            </div>
            <div class="side"><h4>Disadvantages</h4>
              <ul>
                <li><b>High operating temperature (500–1000 °C)</b>: <b>longer start-up times</b> and mechanical/chemical <b>compatibility issues</b>.</li>
                <li><b>Cost</b> and <b>complex fabrication</b> are still problems to solve.</li>
              </ul>
            </div>
          </div>
          <h3>Applications</h3>
          <ul>
            <li><b>Power systems</b> for trains, ships and vehicles.</li>
            <li>Electrical power for <b>residential or industrial</b> utility.</li>
            <li><b>Stationary power generation</b>.</li>
            <li><b>Cogeneration of heat and power</b>: by-product gases go to turbines to make more electricity, raising overall efficiency.</li>
            <li><b>Auxiliary power units</b> in vehicles.</li>
          </ul>
          <div class="note why"><p>Low activation losses: at 800–1000 °C the electrode reactions run fast without a precious-metal catalyst, so less voltage is wasted just getting them going. Compatibility issues: hot layers expand by different amounts and can react with each other at their boundaries.</p></div>
          <div class="note heads-up"><p>Two temperature ranges appear: <b>800–1000 °C</b> (slide 37) and <b>500–1000 °C</b> (slide 41). Give 800–1000 °C as the operating range; 500 °C is the low end that newer intermediate-temperature SOFCs aim for.</p></div>
        ` },
        { title: 'SOFC vs PEMFC', html: `
          <p class="lead">The two fuel cells covered in detail sit at opposite ends: one <b>cool and fussy</b>, one <b>hot and flexible</b>. Almost every difference traces back to which ion crosses the electrolyte.</p>
          <p>Toggle PEMFC and SOFC below and watch which ion crosses and in which direction. Then check the readout card: that one change decides where the water comes out.</p>
          <div data-viz="fuelcell"></div>
          <table class="tbl">
            <thead><tr><th></th><th>PEMFC</th><th>SOFC</th></tr></thead>
            <tbody>
              <tr><td>Electrolyte</td><td>Acidic polymer membrane (<b>Nafion</b>)</td><td>Solid ceramic oxide (<b>YSZ</b>)</td></tr>
              <tr><td>Ion that moves</td><td><b>H<sup>+</sup></b>, anode → cathode</td><td><b>O<sup>2−</sup></b>, cathode → anode</td></tr>
              <tr><td>Temperature</td><td><b>Below 80 °C</b></td><td><b>800–1000 °C</b></td></tr>
              <tr><td>Fuel</td><td><b>Pure H<sub>2</sub></b></td><td><b>H<sub>2</sub> and CO</b>; coal gas works</td></tr>
              <tr><td>Electrodes</td><td>Pt-based catalyst on both sides</td><td>Ni–YSZ cermet anode, LSM cathode</td></tr>
              <tr><td>Water forms at</td><td>Cathode (air side)</td><td>Anode (fuel side), with CO<sub>2</sub></td></tr>
              <tr><td>Sulphur, impurities</td><td>Not tolerated</td><td>Relatively tolerant</td></tr>
              <tr><td>Start-up</td><td>Quick, since it runs cool</td><td>Long, it must heat up</td></tr>
              <tr><td>Waste heat</td><td>Low-grade</td><td>High-quality, used for cogeneration</td></tr>
              <tr><td>Figures on the slides</td><td>E°<sub>cell</sub> = 1.23 V</td><td>Over 60% efficiency</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>Scenario questions usually turn on three facts. What fuel is available (pure H<sub>2</sub>, or a gas with CO and sulphur)? Does quick start-up matter (cars, portable use)? Can the waste heat be used (factories, power plants)? Cool and quick points to PEMFC; dirty fuel, steady load and useful heat point to SOFC.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'SOFC electrolyte?', back: '<b>YSZ</b>, yttria-stabilized zirconia: ZrO<sub>2</sub> stabilized with Y<sub>2</sub>O<sub>3</sub>, a <b>solid ceramic oxide</b>.' },
        { front: 'Other name for the SOFC?', back: '<b>Ceramic fuel cell</b>.' },
        { front: 'SOFC fuels?', back: 'Both <b>hydrogen</b> and <b>carbon monoxide</b>.' },
        { front: 'SOFC operating temperature?', back: '<b>800–1000 °C</b>, the highest of all fuel cell types.' },
        { front: 'SOFC efficiency (fuel → electricity)?', back: '<b>Over 60%</b>.' },
        { front: 'Why can an SOFC run on coal gas?', back: 'It is <b>relatively resistant to small quantities of sulphur</b>.' },
        { front: 'SOFC anode material?', back: '<b>Ni–YSZ cermet</b> (nickel + YSZ; ceramic + metal), a <b>porous</b> layer.' },
        { front: 'SOFC cathode material?', back: 'A <b>mixed ionic–electronic conducting</b> ceramic, e.g. <b>strontium-doped lanthanum manganite (LSM)</b>.' },
        { front: 'Most popular SOFC electrolyte?', back: '<b>Bilayer YSZ + gadolinium-doped CeO<sub>2</sub> (GDC)</b>; or a ZrO<sub>2</sub>–CaO mixture.' },
        { front: 'SOFC anode reaction?', back: '<b>H<sub>2</sub> + CO + 2O<sup>2−</sup> → H<sub>2</sub>O + CO<sub>2</sub> + 4e<sup>−</sup></b>' },
        { front: 'Which ion moves in an SOFC, and which way?', back: '<b>O<sup>2−</sup></b>, from <b>cathode to anode</b>.' },
        { front: 'Two SOFC disadvantages?', back: '<b>High temperature</b> (long start-up, compatibility issues) and <b>cost / complex fabrication</b>.' }
      ],
      oneLiners: [
        'SOFC = ceramic fuel cell: YSZ (Y<sub>2</sub>O<sub>3</sub>-stabilized ZrO<sub>2</sub>) electrolyte conducts O<sup>2−</sup>; 800–1000 °C, highest of all types.',
        'Fuels H<sub>2</sub> + CO; over 60% efficient; tolerates small amounts of sulphur ⇒ usable with coal gas.',
        'Anode Ni–YSZ cermet (porous); cathode LSM (mixed conductor, porous); electrolyte YSZ + GDC bilayer or ZrO<sub>2</sub>–CaO.',
        'Cathode O<sub>2</sub> + 4e<sup>−</sup> → 2O<sup>2−</sup>; anode H<sub>2</sub> + CO + 2O<sup>2−</sup> → H<sub>2</sub>O + CO<sub>2</sub> + 4e<sup>−</sup>.',
        'Pros: no electrolyte loss or electrode corrosion, impurity tolerance, cogeneration, low activation losses, cleanest FC.',
        'Cons: 500–1000 °C → long start-up and compatibility issues; cost and complex fabrication.',
        'Uses: power for trains, ships, vehicles; residential/industrial supply; stationary generation; cogeneration via turbines; vehicle APUs.'
      ],
      formulas: [
        { name: 'SOFC cathode', html: `O<sub>2</sub>(g) + 4e<sup>−</sup> → 2O<sup>2−</sup>`, note: 'Reduction on the LSM air electrode.' },
        { name: 'SOFC anode', html: `H<sub>2</sub>(g) + CO(g) + 2O<sup>2−</sup> → H<sub>2</sub>O(g) + CO<sub>2</sub>(g) + 4e<sup>−</sup>`, note: 'Oxidation on the Ni–YSZ cermet; products leave on the fuel side.' },
        { name: 'SOFC net', html: `H<sub>2</sub>(g) + CO(g) + O<sub>2</sub>(g) → H<sub>2</sub>O(g) + CO<sub>2</sub>(g)`, note: 'Runs at 800–1000 °C.' }
      ]
    }
  ],

  figures: [
    { id: 'm2-cell-differences-table', src: 'm2/images/s42_9ffdd11e.png', crop: null,
      caption: 'The slide-42 comparison of primary, secondary and fuel cells, row by row: role, reversibility, recharging, life, examples and uses.',
      alt: 'Three-column table headed Primary, Secondary and Fuel cells with numbered rows of differences, examples and uses.' },
    { id: 'm2-nobel-2019', src: 'm2/images/s20_80dbda85.png', crop: null,
      caption: 'The 2019 Chemistry Nobel: John B. Goodenough (USA), M. Stanley Whittingham (UK) and Akira Yoshino (Japan), for developing lithium-ion batteries.',
      alt: 'Portraits of Goodenough, Whittingham and Yoshino beside a gold Nobel medal on a blue background.' },
    { id: 'm2-liion-devices', src: 'm2/images/s20_13ed0b82.jpg', crop: null,
      caption: 'Batteries all around you: phones, an 18 V power-tool pack, camera packs, 9 V, AA, D and coin cells. The blue lithium-ion pack is labelled 3.7 V, the Li-ion cell voltage from the next tab.',
      alt: 'Photo of mobile phones, a black 18 V drill battery, rectangular camera batteries, cylindrical cells and small coin cells.' },
    { id: 'm2-liion-cutaway', src: 'm2/images/s22_905060dc.png', crop: null,
      caption: 'Inside a cylindrical cell: cathode and anode sheets with separators between them are wound into a jelly roll, with tabs to the positive and negative terminals and a central vent tube.',
      alt: 'Cutaway of a cylindrical Li-ion cell labelled positive terminal, cathode tab, cathode, anode, separators, electrode windings (jelly roll), vent tube, anode tab and negative terminal.' },
    { id: 'm2-liion-charge-discharge', src: 'm2/images/s23_be0fb458.png', crop: null,
      caption: 'Left, charging: Li⁺ leaves LiCoO₂ for graphite while the charger moves electrons the same way outside. Right, discharging: Li⁺ returns to CoO₂ and the electrons light the bulb. The +/− signs on the left panel are swapped; graphite is always the negative terminal.',
      alt: 'Two Li-ion cells side by side, each with graphite, electrolyte and cobalt oxide layers, SEI films, Li⁺ arrows and half-reactions labelled oxidation and reduction.' },
    { id: 'm2-liion-variants-table', src: 'm2/images/s25_e84ec3e7.png', crop: null,
      caption: 'Li-ion chemistries by cathode: only LiCoO₂ (LCO) is marked high capacity, and NCA is the one listed for electric vehicles and grid storage.',
      alt: 'Table with columns name, constituents, abbreviation, major characteristics and applications for LCO, LMO, LFP, NMC and NCA.' },
    { id: 'm2-fuel-cell-stack', src: 'm2/images/s29_7853d472.png', crop: null,
      caption: 'A packaged commercial fuel cell stack: the part of the system that actually makes the electricity.',
      alt: 'Grey metal box-shaped fuel cell stack module with red, black and blue connectors on its ends.' },
    { id: 'm2-fcv-layout', src: 'm2/images/s29_28778a01.jpg', crop: null,
      caption: 'Hydrogen fuel cell vehicle: hydrogen tanks at the back feed the fuel cell stack, whose current drives the electric traction motor through the DC/DC converter and power electronic controller.',
      alt: 'See-through car labelled electric traction motor, fuel cell stack, DC/DC converter, thermal system, battery pack, fuel filler, hydrogen fuel tank, transmission, power electronic controller and auxiliary battery.' },
    { id: 'm2-nafion-structure', src: 'm2/images/s33_412173ff.png', crop: null,
      caption: 'Nafion: a Teflon-like –CF₂–CF₂– backbone with side chains ending in –SO₃H groups, plus bound water. The acid groups are what pass protons along.',
      alt: 'Skeletal structure of Nafion with CF2 backbone repeat units, an ether-linked fluorinated side chain with CF3 branch, and a terminal SO3H group, times x H2O.' },
    { id: 'm2-pemfc-diagram', src: 'm2/images/s35_a9017777.png', crop: null,
      caption: 'PEMFC layers: H₂ splits at the anodic catalyst, H⁺ crosses the proton exchange membrane, electrons (yellow) run through the load, and water leaves on the cathode side with unused O₂.',
      alt: 'PEMFC cross-section with anode plate, anodic gas diffusion layer, anodic catalyst layer, proton exchange membrane, cathodic catalyst layer, cathodic gas diffusion layer and cathode plate; H2 in on the left, O2 in on the right, a load across the top.' },
    { id: 'm2-sofc-diagram', src: 'm2/images/s39_ffb1ac10.png', crop: null,
      caption: 'SOFC at 1000 °C: air is reduced to O²⁻ at the LaMnO₃ cathode, O²⁻ crosses the YSZ electrolyte, and CO and H₂ are oxidised at the Ni–ZrO₂ cermet anode, so CO₂ and H₂O leave on the fuel side.',
      alt: 'SOFC schematic: fuel CO and H2 above a Ni-ZrO2 cermet anode, a YSZ electrolyte with an upward O2- arrow, a LaMnO3 cathode with air below, and an external circuit through a useful power load.' }
  ]
});
