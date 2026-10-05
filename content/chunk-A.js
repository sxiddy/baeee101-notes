CHUNK({
  chunk: 'A',
  module: 'm2',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm2-electrochemical-cells',
      title: 'Electrochemical cells',
      short: 'Electrochemical cells',
      blurb: 'What a cell is made of, galvanic vs electrolytic, how to write a cell, the Daniell cell and its salt bridge, EMF and the Nernst equation with a worked Cd/Cu problem.',
      source: 'Slides 2–7',
      tabs: [
        { title: 'What a cell is', html: `
          <p class="lead">An electrochemical cell either makes electricity from a <b>spontaneous</b> redox reaction or uses electricity to drive a <b>non-spontaneous</b> one. Same basic hardware, opposite direction of energy flow.</p>
          <h3>What's inside</h3>
          <ul>
            <li><b>Two electronic conductors</b> (electrodes): the anode and the cathode.</li>
            <li>An ionic conductor, the <b>electrolyte</b>.</li>
            <li>An outer path linking the electrodes, usually a <b>metal wire</b> such as copper wiring.</li>
          </ul>
          <div class="note why"><p>The electrolyte carries ions, not electrons. So the electrons released at one electrode have only one way to reach the other: out through the wire. That trip through the wire is the current you use, while ions move inside to keep both sides neutral.</p></div>
          <h3>Two kinds of cell</h3>
          <div class="vs">
            <div class="side"><h4>Galvanic (voltaic) cell</h4><p>Converts the energy released by a <b>spontaneous</b> chemical reaction into electrical energy.</p><p><b>ΔG &lt; 0</b>, chemical → electrical.</p><p>Example: the Daniell cell.</p></div>
            <div class="side"><h4>Electrolytic cell</h4><p>Consumes electrical energy from an <b>external source</b> to drive a <b>non-spontaneous</b> reaction.</p><p><b>ΔG &gt; 0</b>, electrical → chemical.</p><p>Example: electrolysis, electroplating.</p></div>
          </div>
          <p>The galvanic cell is also called a <b>voltaic cell</b>, after its inventor, the Italian physicist <b>Alessandro Volta</b>.</p>
          <details class="more"><summary>Where this sits in Module 2</summary>
            <p>The module runs: electrochemical and electrolytic cells → electrode materials with examples (semiconductors) → classification of batteries and the chemistry of Li-ion secondary batteries → fuel cells (H<sub>2</sub>–O<sub>2</sub> and solid oxide fuel cell, SOFC) → solar cells (silicon photovoltaic cell, photoelectrochemical cells and dye-sensitized cells).</p>
          </details>
        ` },
        { title: 'Cell notation', html: `
          <p class="lead">A cell is written on one line in a fixed order: <b>anode on the left</b>, <b>cathode on the right</b>. Learn the order once and you can read any cell you're given.</p>
          <ul>
            <li>Left-hand electrode = anode, where <b>oxidation</b> occurs.</li>
            <li>Right-hand electrode = cathode, where <b>reduction</b> occurs.</li>
          </ul>
          <table class="tbl">
            <thead><tr><th></th><th>Electrode on the left</th><th>Electrode on the right</th></tr></thead>
            <tbody>
              <tr><td>Written as</td><td>Metal (or solid phase) | Electrolyte (whole formula or ion)</td><td>Electrolyte (whole formula or ion) | Metal (or solid phase)</td></tr>
              <tr><td>Example</td><td>Zn | Zn(NO<sub>3</sub>)<sub>2</sub> (1 M)</td><td>Cu(NO<sub>3</sub>)<sub>2</sub> (1 M) | Cu</td></tr>
              <tr><td>Half-reaction</td><td>Oxidation: M<sub>1</sub> → M<sub>1</sub><sup>n+</sup> + n e<sup>−</sup></td><td>Reduction: M<sub>2</sub><sup>n+</sup> + n e<sup>−</sup> → M<sub>2</sub></td></tr>
            </tbody>
          </table>
          <p>Join the two halves with a double line and you have the overall representation of a galvanic cell:</p>
          <div class="eq" data-label="Galvanic cell">M<sub>1</sub> | M<sub>1</sub><sup>n+</sup> (C<sub>1</sub>) ‖ M<sub>2</sub><sup>n+</sup> (C<sub>2</sub>) | M<sub>2</sub></div>
          <div class="kv">
            <div><span>Single line |</span><b>phase boundary</b></div>
            <div><span>Double line ‖</span><b>salt bridge</b></div>
            <div><span>C<sub>1</sub>, C<sub>2</sub></span><b>ion concentrations</b></div>
          </div>
          <p>Notice the metal sits on the outside at both ends: metal first on the left, metal last on the right.</p>
          <div class="mnemonic"><b>An Ox, Red Cat</b>: the ANode does OXidation, REDuction happens at the CAThode. Alphabetical order helps too: anode comes before cathode, so it goes on the left.</div>
          <div class="note exam"><p>Given a cell such as Cd | Cd<sup>2+</sup> ‖ Cu<sup>2+</sup> | Cu, treat the left metal as the anode: write its oxidation, write the right-hand reduction, then add them for the net reaction.</p></div>
        ` },
        { title: 'Daniell cell', html: `
          <p class="lead">The textbook galvanic cell: zinc gives up electrons, copper ions take them, and a salt bridge keeps the two beakers connected. It was invented by the British chemist <b>John Frederic Daniell</b>.</p>
          <figure data-fig="m2-daniell-cell"></figure>
          <div class="kv">
            <div><span>Anode (−)</span><b>Zn rod in ZnSO<sub>4</sub></b></div>
            <div><span>Cathode (+)</span><b>Cu rod in CuSO<sub>4</sub></b></div>
            <div><span>Salt bridge</span><b>KCl or NH<sub>4</sub>Cl in gelatine</b></div>
            <div><span>Cell emf</span><b>1.1 V</b></div>
          </div>
          <div class="eq" data-label="Anode, oxidation">Zn → Zn<sup>2+</sup> + 2e<sup>−</sup></div>
          <div class="eq" data-label="Cathode, reduction">Cu<sup>2+</sup> + 2e<sup>−</sup> → Cu</div>
          <div class="eq" data-label="Net">Zn + Cu<sup>2+</sup> → Zn<sup>2+</sup> + Cu</div>
          <div class="note heads-up"><p>The figure writes the zinc half-reaction as Zn(s) + 2e<sup>−</sup> → Zn<sup>2+</sup>, with the electrons on the wrong side. Zinc is oxidised, so it loses electrons: Zn → Zn<sup>2+</sup> + 2e<sup>−</sup>. The slide title's "Daniel" is a misspelling of Daniell.</p></div>
          <div class="eq" data-label="Notation">Zn(s) | ZnSO<sub>4</sub>(aq) ‖ CuSO<sub>4</sub>(aq) | Cu(s)</div>
          <p>Each electrode in its solution is a <b>half cell</b>. The two half cells are connected through a <b>salt bridge</b>, which:</p>
          <ul>
            <li>maintains the <b>charge balance</b> in the two half cells</li>
            <li>minimises or eliminates the <b>liquid junction potential</b></li>
          </ul>
          <div class="note why"><p>Without the bridge, the zinc beaker fills up with new Zn<sup>2+</sup> and turns positive, while the copper beaker is left with spare SO<sub>4</sub><sup>2−</sup> and turns negative. That charge build-up stops the reaction almost at once. The bridge sends Cl<sup>−</sup> into the zinc side and K<sup>+</sup> into the copper side, so current keeps flowing. KCl is a good choice because K<sup>+</sup> and Cl<sup>−</sup> move at nearly the same speed, so they add almost no extra potential where the two solutions meet.</p></div>
          <p>Try it: follow the electrons and the bridge ions, then switch to Electrolytic and watch the electrode signs flip while oxidation stays at the anode.</p>
          <div data-viz="cell-galvanic"></div>
          <div class="note trap"><p>The anode is <b>negative</b> in a galvanic cell but <b>positive</b> in an electrolytic cell. What never changes is <b>oxidation at the anode</b>, reduction at the cathode.</p></div>
        ` },
        { title: 'EMF & Nernst', html: `
          <p class="lead">EMF is the <b>maximum potential difference between the two electrodes</b> of a galvanic cell. The Nernst equation tells you how it shifts when the solutions aren't at standard concentration.</p>
          <ul>
            <li>It reflects the tendency of an element, compound or ion to <b>gain or lose electrons</b>.</li>
            <li>A cell reaction is <b>feasible when E<sub>cell</sub> is positive</b>.</li>
          </ul>
          <div class="note why"><p>Voltage and free energy measure the same drive: ΔG = −nFE. A positive E<sub>cell</sub> means ΔG &lt; 0, which is exactly the spontaneous case a galvanic cell runs on.</p></div>
          <h3>Nernst equation</h3>
          <div class="eq" data-label="Nernst equation (298 K)">E<sub>cell</sub> = E°<sub>cell</sub> − <span class="frac"><span>0.0591</span><span>n</span></span> log Q</div>
          <div class="kv">
            <div><span>E°<sub>cell</sub></span><b>E°<sub>cathode</sub> − E°<sub>anode</sub> (both standard reduction potentials)</b></div>
            <div><span>n</span><b>electrons transferred in the balanced reaction</b></div>
            <div><span>Q</span><b>[products] / [reactants], each raised to its coefficient; solids count as 1</b></div>
            <div><span>0.0591</span><b>2.303RT/F at 298 K</b></div>
          </div>
          <p>For a metal cell M<sub>1</sub> | M<sub>1</sub><sup>n+</sup> ‖ M<sub>2</sub><sup>n+</sup> | M<sub>2</sub> (anode left, cathode right) the reaction is M<sub>1</sub> + M<sub>2</sub><sup>n+</sup> → M<sub>1</sub><sup>n+</sup> + M<sub>2</sub>. The anode ion is a product and the cathode ion a reactant, so:</p>
          <div class="eq" data-label="Metal | ion cells">E<sub>cell</sub> = E°<sub>cell</sub> − <span class="frac"><span>0.0591</span><span>n</span></span> log <span class="frac"><span>[anode ion]</span><span>[cathode ion]</span></span></div>
          <div class="note trap"><p>When the two ions have different charges, balance the reaction first. Ni + 2Ag<sup>+</sup> → Ni<sup>2+</sup> + 2Ag has n = 2 and Q = [Ni<sup>2+</sup>] / [Ag<sup>+</sup>]<sup>2</sup>.</p></div>
          <div class="note heads-up"><p>You may also see it written E°<sub>cathode</sub> − E°<sub>anode</sub> + (0.059/n) log([cathode ion]/[anode ion]). That is the same equation: flipping the fraction flips the sign of the log. Either one gets full marks; stick to the one above.</p></div>
          <h3>Equimolar solutions</h3>
          <p>If both ions have the same charge and the same concentration, Q = 1, log 1 = 0, and the log term disappears:</p>
          <div class="eq" data-label="Equimolar">E<sub>cell</sub> = E°<sub>cell</sub> = E°<sub>cathode</sub> − E°<sub>anode</sub></div>
          <div class="note why"><p>Reading the log term: more cathode ions, or fewer anode ions, makes Q smaller than 1, so log Q is negative and E<sub>cell</sub> rises above E°<sub>cell</sub>. Dilute the cathode side and it drops.</p></div>
        ` },
        { title: 'Worked example', html: `
          <p class="lead">Write the half-cell reactions, the net reaction and the EMF of Cd | Cd<sup>2+</sup> (0.01 M) ‖ Cu<sup>2+</sup> (0.5 M) | Cu. Standard reduction potentials are −0.40 V and 0.34 V respectively.</p>
          <div class="worked">
            <div class="given"><p>Cd | Cd<sup>2+</sup> (0.01 M) ‖ Cu<sup>2+</sup> (0.5 M) | Cu</p><p>E°(Cd<sup>2+</sup>/Cd) = −0.40 V, E°(Cu<sup>2+</sup>/Cu) = 0.34 V, n = 2</p></div>
            <div class="solve">
              <div class="eq" data-label="At anode">Cd → Cd<sup>2+</sup> + 2e<sup>−</sup> (E° = −0.40 V)</div>
              <div class="eq" data-label="At cathode">Cu<sup>2+</sup> + 2e<sup>−</sup> → Cu (E° = 0.34 V)</div>
              <div class="eq" data-label="Net reaction">Cd + Cu<sup>2+</sup> → Cu + Cd<sup>2+</sup></div>
              <div class="eq" data-label="Standard EMF">E°<sub>cell</sub> = 0.34 − (−0.40) = 0.74 V</div>
              <div class="eq" data-label="Cell EMF">E<sub>cell</sub> = 0.74 − <span class="frac"><span>0.0591</span><span>2</span></span> log <span class="frac"><span>[Cd<sup>2+</sup>]</span><span>[Cu<sup>2+</sup>]</span></span> = 0.74 − <span class="frac"><span>0.0591</span><span>2</span></span> log <span class="frac"><span>0.01</span><span>0.5</span></span></div>
              <div class="eq">= 0.74 − 0.02955 × log 0.02 = 0.74 − 0.02955 × (−1.699)</div>
              <div class="eq">= 0.74 + 0.05</div>
            </div>
            <div class="result"><p>E<sub>cell</sub> = <b>0.79 V</b>. Positive, so the reaction is feasible.</p></div>
          </div>
          <div class="note why"><p>E°<sub>cell</sub> on its own is <b>0.74 V</b>. The answer comes out higher because the cathode solution is concentrated (0.5 M Cu<sup>2+</sup>) and the anode solution is dilute (0.01 M Cd<sup>2+</sup>). Both favour the forward reaction.</p></div>
          <div class="note exam"><p>The electrode with the <b>lower (more negative) reduction potential</b> is the one oxidised. Cd (−0.40 V) has the lower reduction potential, so Cd is the one oxidised. That is why it sits on the left as the anode. Keep log 0.02 = −1.699 (log 50 = +1.699) handy.</p></div>
          <p>Try it: load the Cd/Cu preset to get 0.79 V, then lower [Cu<sup>2+</sup>] to 0.01 M and watch E<sub>cell</sub> fall back to E°<sub>cell</sub> = 0.74 V.</p>
          <div data-viz="nernst"></div>
        ` }
      ],
      flashcards: [
        { front: 'Sign of ΔG in a galvanic cell vs an electrolytic cell?', back: 'Galvanic: <b>ΔG &lt; 0</b>, spontaneous, makes electricity. Electrolytic: <b>ΔG &gt; 0</b>, needs an external source.' },
        { front: 'The three parts of an electrochemical cell?', back: '<b>Two electrodes</b> (anode and cathode), an <b>electrolyte</b> (ionic conductor), and an outer electron path such as a <b>copper wire</b>.' },
        { front: 'In cell notation, which electrode is written on the left and what happens there?', back: 'The <b>anode</b>. <b>Oxidation</b> happens there. The cathode (reduction) goes on the right.' },
        { front: 'Daniell cell: anode, cathode and EMF?', back: 'Zn in ZnSO<sub>4</sub> is the anode (−), Cu in CuSO<sub>4</sub> is the cathode (+). EMF = <b>1.1 V</b>.' },
        { front: 'What is the salt bridge made of, and what are its two jobs?', back: '<b>KCl or NH<sub>4</sub>Cl in gelatine</b>. It keeps the <b>charge balance</b> in both half cells and minimises the <b>liquid junction potential</b>.' },
        { front: 'Define EMF of a cell.', back: 'The <b>maximum potential difference</b> between the two electrodes of a galvanic (voltaic) cell.' },
        { front: 'When is a cell reaction feasible?', back: 'When <b>E<sub>cell</sub> is positive</b> (which means ΔG &lt; 0).' },
        { front: 'Nernst equation when both solutions are equimolar?', back: '<b>E<sub>cell</sub> = E°<sub>cell</sub> = E°<sub>cathode</sub> − E°<sub>anode</sub></b>. The log term vanishes because log 1 = 0, so the cell potential equals the standard cell potential.' },
        { front: 'EMF of Cd | Cd<sup>2+</sup> (0.01 M) ‖ Cu<sup>2+</sup> (0.5 M) | Cu?', back: '<b>0.79 V</b>: E°<sub>cell</sub> = 0.74 V, then − (0.0591/2) log(0.01/0.5) = + 0.05 V.' },
        { front: 'Who gave their names to the voltaic cell and the Daniell cell?', back: '<b>Alessandro Volta</b>, Italian physicist; <b>John Frederic Daniell</b>, British chemist.' }
      ],
      oneLiners: [
        'Galvanic cell: chemical → electrical, ΔG &lt; 0. Electrolytic cell: electrical → chemical, ΔG &gt; 0.',
        'Anode on the left (oxidation), cathode on the right (reduction): M<sub>1</sub> | M<sub>1</sub><sup>n+</sup> (C<sub>1</sub>) ‖ M<sub>2</sub><sup>n+</sup> (C<sub>2</sub>) | M<sub>2</sub>.',
        'Daniell cell Zn | ZnSO<sub>4</sub> ‖ CuSO<sub>4</sub> | Cu gives 1.1 V; salt bridge is KCl or NH<sub>4</sub>Cl in gelatine.',
        'A salt bridge maintains charge balance and minimises the liquid junction potential.',
        'EMF is the maximum potential difference between the electrodes; the reaction is feasible when E<sub>cell</sub> &gt; 0.',
        'Nernst: E<sub>cell</sub> = E°<sub>cell</sub> − (0.0591/n) log Q, with Q = [anode ion]/[cathode ion] for metal cells; Q = 1 drops the log term.',
        'Cd/Cu example: 0.74 V + 0.05 V = 0.79 V.'
      ],
      formulas: [
        { name: 'Nernst equation', html: `E<sub>cell</sub> = E°<sub>cell</sub> − <span class="frac"><span>0.0591</span><span>n</span></span> log Q`, note: 'E°<sub>cell</sub> = E°<sub>cathode</sub> − E°<sub>anode</sub>; Q = [products]/[reactants] with coefficients as powers; 298 K.' },
        { name: 'Nernst for metal | ion cells', html: `E<sub>cell</sub> = E°<sub>cell</sub> − <span class="frac"><span>0.0591</span><span>n</span></span> log <span class="frac"><span>[anode ion]</span><span>[cathode ion]</span></span>`, note: 'The anode ion is a product, the cathode ion a reactant.' },
        { name: 'Equimolar solutions', html: `E<sub>cell</sub> = E°<sub>cell</sub> = E°<sub>cathode</sub> − E°<sub>anode</sub>`, note: 'log 1 = 0, so the concentration term drops out.' },
        { name: 'Free energy and EMF', html: `ΔG = −nFE<sub>cell</sub>`, note: 'Standard link behind the rule: E > 0 means ΔG < 0 (spontaneous).' },
        { name: 'Daniell cell', html: `Zn + Cu<sup>2+</sup> → Zn<sup>2+</sup> + Cu`, note: 'Anode Zn → Zn²⁺ + 2e⁻; cathode Cu²⁺ + 2e⁻ → Cu; EMF 1.1 V.' },
        { name: 'Cell representation', html: `M<sub>1</sub> | M<sub>1</sub><sup>n+</sup> (C<sub>1</sub>) ‖ M<sub>2</sub><sup>n+</sup> (C<sub>2</sub>) | M<sub>2</sub>`, note: 'Anode left, cathode right; ‖ is the salt bridge.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-semiconductors',
      title: 'Semiconductors as electrode materials',
      short: 'Semiconductors',
      blurb: 'Band gaps, why heat makes semiconductors conduct better, intrinsic vs extrinsic, how phosphorus and boron create n-type and p-type silicon, and the common elemental and compound semiconductors.',
      source: 'Slides 8–14',
      tabs: [
        { title: 'What it is', html: `
          <p class="lead">A semiconductor is a substance, usually a solid element or compound, that <b>conducts electricity under some conditions but not others</b>. That switchability makes it a good medium for controlling electrical current.</p>
          <h3>The band picture</h3>
          <ul>
            <li><b>Almost filled valence band</b></li>
            <li><b>Empty conduction band</b></li>
            <li><b>Very narrow energy gap</b>, of the order of <b>1 eV</b></li>
          </ul>
          <div class="kv">
            <div><span>Energy gap, Si</span><b>1.0 eV</b></div>
            <div><span>Energy gap, Ge</span><b>0.7 eV</b></div>
          </div>
          <p>Both gaps sit around 1 eV, which is why Si and Ge are semiconductors. They appear under electrode materials because semiconductor electrodes do the light-absorbing work in the solar and photoelectrochemical cells later in this module.</p>
          <figure data-fig="m2-band-diagrams"></figure>
          <table class="tbl">
            <thead><tr><th></th><th>Insulator</th><th>Semiconductor</th><th>Conductor</th></tr></thead>
            <tbody>
              <tr><td>Forbidden band (gap)</td><td>Wide</td><td>Narrow, ≈ 1 eV</td><td>None, bands overlap</td></tr>
              <tr><td>Electrons in conduction band</td><td>Practically none</td><td>A few, more when warm</td><td>Plenty</td></tr>
              <tr><td>Conducts</td><td>No</td><td>Under some conditions</td><td>Yes</td></tr>
            </tbody>
          </table>
          <div class="note why"><p>The gap is the energy an electron needs to leave its bond and move freely. Around 1 eV is small enough that heat or light can lift some electrons across, but large enough that only a few make it at room temperature. So the number of carriers stays low and easy to control, by temperature, light or doping. That control is what makes them useful.</p></div>
          <div class="note heads-up"><p>This slide gives Si = 1.0 eV and Ge = 0.7 eV. Slide 47 later quotes Si as 1.23 eV at 300 K, and the table on slide 53 uses 1.12 eV, the standard value for Si. The standard value for Ge is about 0.66 eV. Write 1.0 eV when a question is based on this slide.</p></div>
        ` },
        { title: 'Temperature', html: `
          <p class="lead">At <b>0 K</b> electrons are frozen in the valence band, so all semiconductors are <b>insulators</b>. Warm one up and it conducts better and better.</p>
          <ul>
            <li>Electrical conductivity <b>increases with temperature</b>, as resistivity decreases.</li>
            <li>Higher temperature makes the <b>valence → conduction band transition</b> easier, giving higher conductivity and lower resistivity.</li>
          </ul>
          <figure data-fig="m2-resistivity-temp"></figure>
          <figure data-fig="m2-bands-temperature"></figure>
          <div class="note why"><p>Each electron that jumps the gap counts twice. It can move in the conduction band, and the empty spot it leaves in the valence band (a <b>hole</b>) lets neighbouring electrons shuffle along too. More heat, more jumps, more carriers.</p></div>
          <p>Try it: drag the temperature up from 0 K and watch the semiconductor's conductivity climb as electrons hop the gap, while the metal's dips slightly.</p>
          <div data-viz="bands"></div>
          <div class="note trap"><p>Metals go the other way: their resistance <b>rises</b> with temperature, because hotter atoms vibrate more and scatter electrons. Resistance falling on heating is the signature of a semiconductor.</p></div>
        ` },
        { title: 'Types', html: `
          <p class="lead">Two families: <b>intrinsic</b> (the pure element) and <b>extrinsic</b> (deliberately doped). Extrinsic splits again into <b>n-type</b> and <b>p-type</b>.</p>
          <figure data-fig="m2-semiconductor-types"></figure>
          <table class="tbl">
            <thead><tr><th></th><th>Intrinsic</th><th>n-type</th><th>p-type</th></tr></thead>
            <tbody>
              <tr><td>Composition</td><td>Pure Ge, Si</td><td>Si/Ge + pentavalent impurity</td><td>Si/Ge + trivalent impurity</td></tr>
              <tr><td>Dopants</td><td>None</td><td>P, As, Sb</td><td>B, Al, Ga, In</td></tr>
              <tr><td>Impurity</td><td>None</td><td>Donor, N<sub>D</sub></td><td>Acceptor, N<sub>A</sub></td></tr>
              <tr><td>Carriers</td><td>n<sub>e</sub> = n<sub>h</sub> = n<sub>i</sub></td><td>n<sub>e</sub> ≫ n<sub>h</sub></td><td>n<sub>h</sub> ≫ n<sub>e</sub></td></tr>
              <tr><td>Called</td><td>–</td><td>Negative charge conductor</td><td>Positive charge conductor</td></tr>
            </tbody>
          </table>
          <p>Here n<sub>e</sub> is the electron concentration, n<sub>h</sub> the hole concentration and n<sub>i</sub> the intrinsic carrier concentration.</p>
          <div class="note heads-up"><p>The chart labels the p-type side "Donar impurity – N<sub>D</sub>", copied from the n-type side. Trivalent atoms take electrons, so the right label is <b>acceptor impurity, N<sub>A</sub></b>. "Donar" is also a misspelling of donor.</p></div>
          <h3>Elements or compounds</h3>
          <p>Semiconductors come as either elements or compounds. <b>Silicon and germanium</b> are the most common elemental ones. Compound semiconductors include:</p>
          <div class="chips"><span class="chip">InSb</span><span class="chip">InAs</span><span class="chip">GaP</span><span class="chip">GaSb</span><span class="chip">GaAs</span><span class="chip">SiC</span><span class="chip">GaN</span></div>
          <div class="note why"><p>Most of these pair a group 13 element (In, Ga) with a group 15 one (Sb, As, P, N), and SiC pairs two group 14 atoms. Either way the average is four valence electrons per atom, the same as Si, so they bond in the same tetrahedral way and behave as semiconductors. Their gaps differ a lot, though: InSb's is tiny, while SiC and GaN have wide gaps of about 3 eV or more.</p></div>
        ` },
        { title: 'Intrinsic', html: `
          <p class="lead">An intrinsic semiconductor is <b>chemically very pure</b> and has <b>poor conductivity</b>. Its only carriers come from heat breaking a few bonds.</p>
          <ul>
            <li>Each broken Si–Si bond frees one electron and leaves one hole, so it has <b>equal numbers</b> of electrons (negative carriers) and holes (positive carriers).</li>
            <li>Examples: pure Si and pure Ge.</li>
          </ul>
          <figure data-fig="m2-intrinsic-lattice"></figure>
          <div class="vs">
            <div class="side"><h4>No electric field</h4><p>Electron–hole pairs form and wander at random. <b>No net current</b>.</p></div>
            <div class="side"><h4>Electric field applied</h4><p>Electrons and holes drift in <b>opposite directions</b>, and both add to the current.</p></div>
          </div>
          <div class="note why"><p>A hole moves because a neighbouring bond electron hops into it, leaving a fresh gap one step back. The electron goes one way, the gap goes the other, so the hole behaves like a positive charge.</p></div>
          <div class="note heads-up"><p>This figure's legend is swapped. The small blue dots are the bonding electrons, and the yellow ring at a broken bond marks the hole. Check the right panel: the yellow "hole movement" arrows start at the rings, the green "electron movement" arrows at the blue dots.</p></div>
        ` },
        { title: 'Doping', html: `
          <p class="lead">An extrinsic semiconductor is an <b>improved intrinsic semiconductor</b> with a small amount of impurity added by a process called <b>doping</b>. Doping alters the electrical properties and <b>improves conductivity</b>.</p>
          <p>Introducing impurities lets you <b>control the conductivity</b>. Doping produces two groups:</p>
          <div class="vs">
            <div class="side"><h4>n-type</h4><p>The <b>negative charge conductor</b>. Pentavalent dopant, extra electrons.</p></div>
            <div class="side"><h4>p-type</h4><p>The <b>positive charge conductor</b>. Trivalent dopant, extra holes.</p></div>
          </div>
          <div class="note why"><p>In pure Si, carriers appear only when heat breaks bonds, and at room temperature very few do. A dopant atom brings its own carrier (a spare electron, or one missing) at almost no energy cost, so a tiny amount of impurity raises conductivity by a huge factor.</p></div>
          <p>Try it: switch between Intrinsic, n-type and p-type and see which carrier there is more of in each.</p>
          <div data-viz="doping"></div>
          <div class="note trap"><p>"n" and "p" name the <b>majority carrier</b>, not the charge of the crystal. Both types are electrically <b>neutral</b> overall: each free electron in n-type Si is balanced by a fixed P<sup>+</sup> ion left in the lattice.</p></div>
        ` },
        { title: 'n-type', html: `
          <p class="lead">n-type = an intrinsic semiconductor doped with a <b>pentavalent impurity</b> such as <b>P, As or Sb</b>.</p>
          <figure data-fig="m2-n-type-doping"></figure>
          <ul>
            <li>Silicon has <b>four</b> valence electrons; phosphorus has <b>five</b>.</li>
            <li>Add a small amount of P to a pure Si crystal: four of its electrons bond with the four Si neighbours.</li>
            <li>The fifth has no bond to join. It becomes a <b>free electron</b>, a surplus electron that can move around the crystal.</li>
          </ul>
          <div class="kv">
            <div><span>Dopant role</span><b>donor (N<sub>D</sub>)</b></div>
            <div><span>Majority carrier</span><b>electrons</b></div>
            <div><span>Minority carrier</span><b>holes</b></div>
            <div><span>Carrier balance</span><b>n<sub>e</sub> ≫ n<sub>h</sub></b></div>
          </div>
          <p>It's called a donor because every P atom donates one electron to the conduction band.</p>
          <div class="note heads-up"><p>The figure labels the phosphorus atom "Phosphorus: (B)". It should read (P). B is boron, the p-type dopant on the next slide.</p></div>
        ` },
        { title: 'p-type', html: `
          <p class="lead">p-type = an intrinsic semiconductor doped with a <b>trivalent impurity</b> such as <b>B, Al or In</b> (the types chart adds Ga).</p>
          <figure data-fig="m2-p-type-doping"></figure>
          <ul>
            <li>Boron has only <b>three</b> valence electrons for four Si neighbours.</li>
            <li>Dope a single crystal of Si with a little boron and, at one position, there aren't enough valence electrons to bond Si and B.</li>
            <li>That missing electron is a <b>hole</b>. A neighbouring electron can hop in, so the hole travels like a positive charge.</li>
          </ul>
          <div class="kv">
            <div><span>Dopant role</span><b>acceptor (N<sub>A</sub>)</b></div>
            <div><span>Majority carrier</span><b>holes</b></div>
            <div><span>Minority carrier</span><b>electrons</b></div>
            <div><span>Carrier balance</span><b>n<sub>h</sub> ≫ n<sub>e</sub></b></div>
          </div>
          <div class="note exam"><p>If asked what happens when Si is doped with a given element, check its group. Group 15 (P, As, Sb) gives n-type with electrons as majority carriers. Group 13 (B, Al, Ga, In) gives p-type with holes as majority carriers. Draw the lattice with the spare electron or the missing bond.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Band gaps of Si and Ge as given in the slides?', back: '<b>Si 1.0 eV</b>, <b>Ge 0.7 eV</b>. (Standard values: 1.12 eV and about 0.66 eV.)' },
        { front: 'Describe the bands of a semiconductor.', back: '<b>Almost filled valence band</b>, <b>empty conduction band</b>, and a very narrow gap of the order of <b>1 eV</b>.' },
        { front: 'Why is every semiconductor an insulator at 0 K?', back: 'Electrons are <b>frozen in the valence band</b>; there is no thermal energy to lift any across the gap.' },
        { front: 'What happens to a semiconductor\'s resistivity as temperature rises?', back: 'It <b>decreases</b>, so conductivity increases. Metals do the opposite.' },
        { front: 'Carrier relation in an intrinsic semiconductor?', back: '<b>n<sub>e</sub> = n<sub>h</sub> = n<sub>i</sub></b>: electrons and holes are made in pairs.' },
        { front: 'n-type: dopant type, examples, majority carrier?', back: '<b>Pentavalent</b> donor (P, As, Sb); majority carriers are <b>electrons</b>; n<sub>e</sub> ≫ n<sub>h</sub>.' },
        { front: 'p-type: dopant type, examples, majority carrier?', back: '<b>Trivalent</b> acceptor (B, Al, Ga, In); majority carriers are <b>holes</b>; n<sub>h</sub> ≫ n<sub>e</sub>.' },
        { front: 'What is an extrinsic semiconductor?', back: 'An intrinsic semiconductor with a <b>small amount of impurity</b> added (<b>doping</b>), which alters its electrical properties and improves conductivity.' },
        { front: 'Compound semiconductors listed in the slides?', back: '<b>InSb, InAs, GaP, GaSb, GaAs, SiC, GaN</b>. Most common elemental ones: Si and Ge.' },
        { front: 'Is n-type silicon negatively charged?', back: 'No. It is <b>electrically neutral</b>; "n" names the majority carrier. Each free electron is balanced by a fixed P<sup>+</sup> ion.' }
      ],
      oneLiners: [
        'Semiconductor: almost filled valence band, empty conduction band, gap ≈ 1 eV (Si 1.0 eV, Ge 0.7 eV per slides).',
        'At 0 K all semiconductors are insulators.',
        'A semiconductor\'s conductivity rises with temperature because resistivity falls.',
        'Intrinsic: chemically very pure, poor conductivity, equal electrons and holes (n<sub>e</sub> = n<sub>h</sub> = n<sub>i</sub>).',
        'Doping = adding a small amount of impurity to control and improve conductivity.',
        'n-type: pentavalent donors P, As, Sb; n<sub>e</sub> ≫ n<sub>h</sub>. p-type: trivalent acceptors B, Al, Ga, In; n<sub>h</sub> ≫ n<sub>e</sub>.',
        'Compound semiconductors: InSb, InAs, GaP, GaSb, GaAs, SiC, GaN.'
      ],
      formulas: [
        { name: 'Intrinsic carriers', html: `n<sub>e</sub> = n<sub>h</sub> = n<sub>i</sub>`, note: 'Electrons and holes are created in pairs.' },
        { name: 'n-type carriers', html: `n<sub>e</sub> ≫ n<sub>h</sub>`, note: 'Pentavalent donor impurity, N<sub>D</sub>.' },
        { name: 'p-type carriers', html: `n<sub>h</sub> ≫ n<sub>e</sub>`, note: 'Trivalent acceptor impurity, N<sub>A</sub>.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm2-semiconductor-purification',
      title: 'Making ultra-pure Si & Ge',
      short: 'Purifying Si & Ge',
      blurb: 'How Si and Ge reach 99.9999% purity: distillation of GeCl₄ and SiHCl₃, zone refining, and growing a single crystal by Czochralski pulling.',
      source: 'Slides 15–18',
      tabs: [
        { title: 'Distillation', html: `
          <p class="lead">Semiconductor Si and Ge must be about <b>99.9999% pure</b>. The first clean-up is distillation: turn the element into a volatile chloride and separate by the <b>difference in boiling points</b>.</p>
          <div class="note why"><p>Six nines means roughly one foreign atom per million. Stray atoms act as unplanned dopants, and the previous topic showed how few it takes to change conductivity. You have to remove them before you can add the dopants you actually want.</p></div>
          <div class="kv">
            <div><span>Distilled for Ge</span><b>GeCl<sub>4</sub></b></div>
            <div><span>Distilled for Si</span><b>SiHCl<sub>3</sub>, trichlorosilane</b></div>
            <div><span>b.p. of GeCl<sub>4</sub></span><b>83.1 °C</b></div>
          </div>
          <h3>Germanium route</h3>
          <ol class="steps">
            <li><b>Remove arsenic</b> from GeCl<sub>4</sub> with the help of HCl.</li>
            <li><b>Fractional distillation</b> in the presence of chlorine gives pure GeCl<sub>4</sub>.</li>
            <li><b>Hydrolysis</b>: after cooling, pure GeCl<sub>4</sub> is treated with extra-pure water to give germanium oxide.</li>
            <li><b>Reduction</b> of GeO<sub>2</sub> with pure hydrogen gives highly pure elemental Ge.</li>
          </ol>
          <div class="eq" data-label="Hydrolysis">GeCl<sub>4</sub> + 2H<sub>2</sub>O → GeO<sub>2</sub> + 4HCl</div>
          <div class="eq" data-label="Reduction">GeO<sub>2</sub> + 2H<sub>2</sub> → Ge + 2H<sub>2</sub>O</div>
          <p>The water is extra pure and the hydrogen is pure for the same reason as everything else here: whatever the reagents carry ends up in the germanium.</p>
          <h3>Silicon route</h3>
          <p>Similarly, distilled <b>trichlorosilane (SiHCl<sub>3</sub>)</b> is used to get silicon of high purity.</p>
          <details class="more"><summary>How SiHCl<sub>3</sub> becomes silicon (beyond the slides)</summary>
            <p>In industry the distilled SiHCl<sub>3</sub> is reduced by hydrogen on hot silicon rods at about 1100 °C (the Siemens process):</p>
            <div class="eq">SiHCl<sub>3</sub> + H<sub>2</sub> → Si + 3HCl</div>
          </details>
          <div class="note heads-up"><p>The slide gives the boiling point of GeCl<sub>4</sub> as 83.1 °C. Most data tables list about 86.5 °C. Use the slide's value in this course.</p></div>
        ` },
        { title: 'Zone refining', html: `
          <p class="lead">Zone refining uses the fact that impurities are <b>more soluble in the molten phase than in the solid</b>. A narrow molten band is swept along the ingot and carries the impurities to the <b>end section</b>.</p>
          <p>The principle: when an impure metal in the molten state is allowed to cool, <b>only the metal crystallises</b>, while the impurities stay in the melt.</p>
          <figure data-fig="m2-zone-refining-fig"></figure>
          <ol class="steps">
            <li><b>Melt a band</b>: a circular heater (H) melts a narrow zone (Y) of the impure Ge rod.</li>
            <li><b>Move the heater</b> slowly along the rod toward Z. The rod melts just ahead of it and refreezes just behind it.</li>
            <li><b>Pure metal freezes out</b> behind the zone as recrystallised pure germanium (X); the impurities stay in the moving melt.</li>
            <li><b>Impurities collect at the far end</b> of the ingot, which is cut away. More passes give higher purity.</li>
          </ol>
          <p>Used for the purification of:</p>
          <div class="chips"><span class="chip">Germanium</span><span class="chip">Silicon</span><span class="chip">Gallium</span></div>
          <p>Try it: run several passes and watch the impurity dots ride the molten zone to the far end as the purity bar climbs.</p>
          <div data-viz="zone-refining"></div>
          <div class="note exam"><p>Draw the rod with the ring heater; label the recrystallised pure end, the molten zone with impurities and the impure end; show the direction of travel. Always state the principle in one line: impurities are more soluble in the melt than in the solid.</p></div>
        ` },
        { title: 'Czochralski', html: `
          <p class="lead">Zone-refined Ge or Si is <b>polycrystalline</b>: no regularity in the crystal structure, and crystals of different sizes. The <b>Czochralski crystal pulling technique</b> turns it into one single crystal.</p>
          <p>The key is a <b>single-crystal seed</b>. Atoms from the melt freeze onto it and reproduce its <b>identical atomic arrangement</b>, so the whole ingot grows as one continuous crystal.</p>
          <figure data-fig="m2-czochralski-steps"></figure>
          <ol class="steps">
            <li><b>Melting</b> the charge in the crucible.</li>
            <li><b>Introducing the seed</b> to the melt surface, rotating.</li>
            <li><b>Beginning of crystal growth</b> as melt freezes onto the seed.</li>
            <li><b>Crystal pulling</b>: the seed is raised slowly while rotating and the crystal grows longer and wider.</li>
            <li><b>Boule cooling</b>: the finished single-crystal ingot (boule) is lifted clear and cooled.</li>
          </ol>
          <div class="note why"><p>Polycrystalline material is full of grain boundaries where the small crystals meet. These scatter and trap charge carriers, so the properties vary from spot to spot. A single crystal behaves the same everywhere, which is what device makers need.</p></div>
          <p>Try it: dip the seed into the melt and start pulling; watch the single crystal grow at the melt surface as the rod rises and turns.</p>
          <div data-viz="czochralski"></div>
          <div class="note heads-up"><p>The step figure is a general Czochralski diagram, so its first label reads "melting of oxide material" (the same method grows oxide crystals). For Si and Ge the crucible holds the purified polycrystalline element.</p></div>
        ` },
        { title: 'Puller & boule', html: `
          <p class="lead">A real silicon puller wraps controls around the same idea: <b>pull slowly, rotate, and hold the temperature steady</b>.</p>
          <figure data-fig="m2-czochralski-puller"></figure>
          <table class="tbl">
            <thead><tr><th>Part or setting</th><th>What it does</th></tr></thead>
            <tbody>
              <tr><td>Seed holder, seed, crystal neck</td><td>Holds the seed; a thin neck is grown first, then the crystal widens.</td></tr>
              <tr><td>Pulling speed v, crystal rotation rate ν<sub>1</sub></td><td>How fast the crystal rises and turns; with the temperature they set the diameter.</td></tr>
              <tr><td>SiO<sub>2</sub> crucible in a crucible susceptor</td><td>Holds the Si melt; the susceptor supports it and passes on the heat.</td></tr>
              <tr><td>Heater, thermal shield</td><td>Keep the melt just at T<sub>melt</sub> at the growth front and shape the temperature gradient.</td></tr>
              <tr><td>Crucible shaft: lift rate, rotation rate ν<sub>2</sub></td><td>Raises the crucible as melt is used up and turns it to keep the melt uniform.</td></tr>
              <tr><td>Magnetic field</td><td>Calms convection currents in the melt.</td></tr>
              <tr><td>Ar flow</td><td>Sweeps SiO away from the melt surface; the exhaust leaves as Ar + SiO + CO.</td></tr>
            </tbody>
          </table>
          <figure data-fig="m2-si-boule-photo"></figure>
          <div class="kv">
            <div><span>Diameter</span><b>300 mm</b></div>
            <div><span>Weight</span><b>more than 250 kg</b></div>
          </div>
          <div class="note why"><p>The boule is sliced into wafers, and a 300 mm wafer carries far more chips than a small one. That is why pullers are pushed to such sizes.</p></div>
        ` },
        { title: 'Side by side', html: `
          <p class="lead">The three methods are stages of one route: <b>distillation → zone refining → Czochralski</b>. Each fixes something the previous one can't.</p>
          <table class="tbl">
            <thead><tr><th></th><th>Distillation</th><th>Zone refining</th><th>Czochralski</th></tr></thead>
            <tbody>
              <tr><td>Principle</td><td>Difference in boiling points</td><td>Impurities more soluble in melt than solid</td><td>Growth on a single-crystal seed</td></tr>
              <tr><td>Works on</td><td>GeCl<sub>4</sub>, SiHCl<sub>3</sub></td><td>Ge, Si, Ga ingots</td><td>Zone-refined Ge or Si</td></tr>
              <tr><td>Gives</td><td>High-purity element (via GeO<sub>2</sub> + H<sub>2</sub> for Ge)</td><td>Ultra-pure but polycrystalline ingot</td><td>Single-crystal boule</td></tr>
              <tr><td>Key hardware</td><td>Fractionating column</td><td>Moving circular heater</td><td>Crucible, rotating seed, puller</td></tr>
            </tbody>
          </table>
          <div class="note exam"><p>If a question asks why zone refining isn't the last step, the answer is that it leaves the metal <b>polycrystalline</b>. Devices need a <b>single crystal</b>, so the pure material is regrown by Czochralski pulling.</p></div>
          <div class="note trap"><p>Zone refining purifies; Czochralski orders. Czochralski isn't mainly a purification method. It gives the atoms one regular arrangement copied from the seed.</p></div>
        ` }
      ],
      flashcards: [
        { front: 'Purity needed for semiconductor Si and Ge?', back: '<b>99.9999%</b> (six nines).' },
        { front: 'Which compounds are distilled to purify Ge and Si?', back: '<b>GeCl<sub>4</sub></b> for Ge (b.p. 83.1 °C per slide) and <b>SiHCl<sub>3</sub></b> (trichlorosilane) for Si.' },
        { front: 'What property does distillation exploit?', back: 'The <b>difference in boiling points</b> of the materials.' },
        { front: 'How is arsenic removed from GeCl<sub>4</sub>, and how is pure GeCl<sub>4</sub> then obtained?', back: 'As is removed with the help of <b>HCl</b>; pure GeCl<sub>4</sub> comes from <b>fractional distillation in the presence of chlorine</b>.' },
        { front: 'Two reactions that turn pure GeCl<sub>4</sub> into Ge?', back: '<b>GeCl<sub>4</sub> + 2H<sub>2</sub>O → GeO<sub>2</sub> + 4HCl</b>, then <b>GeO<sub>2</sub> + 2H<sub>2</sub> → Ge + 2H<sub>2</sub>O</b>.' },
        { front: 'Principle of zone refining?', back: 'Impurities are <b>more soluble in the melt than in the solid</b>. On cooling only the metal crystallises, so the moving molten zone carries impurities to the end of the ingot.' },
        { front: 'Zone refining is used to purify which elements?', back: '<b>Germanium, silicon, gallium</b>, etc.' },
        { front: 'Why is Czochralski pulling needed after zone refining?', back: 'Zone-refined Ge/Si is <b>polycrystalline</b>. Czochralski grows a <b>single crystal</b> on a seed, copying its atomic arrangement.' },
        { front: 'Five stages of Czochralski growth (slide figure)?', back: '<b>Melting</b>, <b>introducing the seed</b>, <b>beginning of growth</b>, <b>crystal pulling</b>, <b>boule cooling</b>.' },
        { front: 'Size of the Si crystal shown on the slide?', back: '<b>300 mm</b> diameter, weight over <b>250 kg</b>.' }
      ],
      oneLiners: [
        'Target purity for semiconductor Si and Ge: 99.9999%.',
        'Distillation separates by boiling point: GeCl<sub>4</sub> (b.p. 83.1 °C) for Ge, SiHCl<sub>3</sub> for Si.',
        'GeCl<sub>4</sub> + 2H<sub>2</sub>O → GeO<sub>2</sub> + 4HCl; GeO<sub>2</sub> + 2H<sub>2</sub> → Ge + 2H<sub>2</sub>O.',
        'Zone refining: impurities stay in the melt, so a moving molten zone sweeps them to the end of the ingot (Ge, Si, Ga).',
        'Zone-refined Ge/Si is polycrystalline; Czochralski pulling grows a single crystal on a seed.',
        'A Cz silicon crystal can be 300 mm across and weigh more than 250 kg.'
      ],
      formulas: [
        { name: 'Hydrolysis of GeCl₄', html: `GeCl<sub>4</sub> + 2H<sub>2</sub>O → GeO<sub>2</sub> + 4HCl`, note: 'Pure GeCl₄ treated with extra-pure water after cooling.' },
        { name: 'Reduction of GeO₂', html: `GeO<sub>2</sub> + 2H<sub>2</sub> → Ge + 2H<sub>2</sub>O`, note: 'Pure hydrogen gives highly pure elemental Ge.' }
      ]
    }
  ],
  figures: [
    { id: 'm2-daniell-cell', src: 'm2/images/s05_714faec4.png', crop: null,
      caption: 'Electrons leave the Zn anode (−), pass the voltmeter and reach the Cu cathode (+). The KCl salt bridge joins the ZnSO₄ and CuSO₄ half cells. Its zinc equation has the electrons on the wrong side; see the note.',
      alt: 'Two beakers: a zinc rod in ZnSO4 labelled anode (oxidation, negative) and a copper rod in CuSO4 labelled cathode (reduction, positive), joined by a KCl salt bridge and a wire through a voltmeter, with arrows showing electrons flowing from Zn to Cu. Half reactions and the cell notation Zn(s) | ZnSO4(aq) || CuSO4(aq) | Cu(s) are written below.' },
    { id: 'm2-band-diagrams', src: 'm2/images/s08_51c5293b.png', crop: [0, 0.1, 1, 0.9],
      caption: 'Insulator: wide forbidden band. Semiconductor: a narrow gap with a small tail of electrons reaching the conduction band. Conductor: the bands overlap.',
      alt: 'Three energy-band diagrams side by side for an insulator, a semiconductor and a conductor, each with a hatched valence band, a hatched conduction band and an electron distribution curve on the energy axis.' },
    { id: 'm2-resistivity-temp', src: 'm2/images/s09_5721e27e.jpg', crop: null,
      caption: 'A semiconductor\'s resistivity drops steeply as it warms from near 0 K toward 300 K.',
      alt: 'Graph of resistivity (rho) against temperature in kelvin for a semiconductor: a curve falling from high values at low temperature and levelling off near 300 K.' },
    { id: 'm2-bands-temperature', src: 'm2/slides/s09.png', crop: [0.378, 0.436, 0.59, 0.424],
      caption: 'Temperature rises from left to right. On heating, some electrons cross the gap Eg into the conduction band (bottom edge E₀) and leave holes (white) behind in the valence band.',
      alt: 'Two band diagrams. Left: all electrons (pink dots) sit in the blue valence band below the gap Eg. Right, at higher temperature: a few electrons are in the yellow conduction band and white holes remain at the top of the valence band.' },
    { id: 'm2-semiconductor-types', src: 'm2/slides/s10.png', crop: [0.06, 0.12, 0.88, 0.81],
      caption: 'Intrinsic is the pure element; extrinsic splits into n-type (pentavalent, electrons dominate) and p-type (trivalent, holes dominate). The p-type "donor" label is a slip for acceptor.',
      alt: 'Tree chart: Semiconductor branches into intrinsic semiconductor (pure form of Ge, Si, ne = nh = ni) and extrinsic semiconductor, which branches into N-type (pentavalent impurity P, As, Sb, donor impurity ND, ne much greater than nh) and P-type (trivalent impurity Ga, B, In, Al, ne much less than nh).' },
    { id: 'm2-intrinsic-lattice', src: 'm2/slides/s11.png', crop: [0.157, 0.252, 0.684, 0.694],
      caption: 'Left: heat breaks a Si–Si bond, freeing an electron and leaving a hole. Right: with a field applied, electrons and holes drift in opposite directions.',
      alt: 'Two square grids of silicon atoms sharing electron pairs. Left panel, no electric field: a broken covalent bond and a free electron with its hole. Right panel, electric field present: green arrows for electron movement and yellow arrows for hole movement pointing in opposite directions.' },
    { id: 'm2-n-type-doping', src: 'm2/slides/s13.png', crop: [0.085, 0.41, 0.8275, 0.567],
      caption: 'Phosphorus brings five valence electrons; four bond with silicon and the fifth becomes a free electron.',
      alt: 'Left: a Si atom with four valence electrons and a P atom with five. An arrow reads adding phosphorus to pure silicon crystal results in a surplus electron that becomes a free electron. Right: a silicon lattice with one P atom and a free electron marked.' },
    { id: 'm2-p-type-doping', src: 'm2/slides/s14.png', crop: [0.098, 0.415, 0.805, 0.565],
      caption: 'Boron brings only three valence electrons, so one bond to silicon is left an electron short: a hole.',
      alt: 'Left: a Si atom with four valence electrons and a B atom with three plus an empty circle. An arrow reads adding boron to pure silicon crystal results in lack of an electron, which becomes a hole. Right: a silicon lattice with one B atom and a hole marked.' },
    { id: 'm2-zone-refining-fig', src: 'm2/slides/s16.png', crop: [0.18, 0.48, 0.64, 0.45],
      caption: 'The circular heater H moves toward Z. Behind it (X) the germanium recrystallises pure; the molten zone Y carries the impurities forward.',
      alt: 'A horizontal germanium rod with a ring-shaped circular heater around it. The part inside the heater is the molten zone containing impurities (Y). Left of it is recrystallised pure germanium (X), right of it the impure germanium rod (Z). An arrow shows the direction of travel of heater, molten zone and impurities.' },
    { id: 'm2-czochralski-steps', src: 'm2/images/s17_df8980b2.png', crop: null,
      caption: 'Left to right: melting, dipping the rotating seed, the start of growth, pulling, and the finished boule lifted to cool.',
      alt: 'Five crucibles in sequence: solid charge melting, a rotating seed rod touching the melt, a small crystal starting on the seed, a cone-shaped crystal being pulled up, and a large crystal boule lifted clear of the melt to cool.' },
    { id: 'm2-czochralski-puller', src: 'm2/slides/s18.png', crop: [0.03, 0.005, 0.515, 0.99],
      caption: 'Inside a silicon puller: seed and neck at the top, the growing single crystal, the Si melt in an SiO₂ crucible, and the rates (pull, rotation, lift) that control growth.',
      alt: 'Cross-section of a Czochralski puller. Labels: crystal rotation rate v1, pulling speed v, seed holder, seed, crystal neck, Si single crystal, temperature gradient, diameter, Ar flow, SiO, thermal shield, heater, crucible susceptor, SiO2 crucible, Si melt, T melt, magnetic field, Ar + SiO + CO exhaust, crucible shaft, crucible lift rate, crucible rotation rate v2.' },
    { id: 'm2-si-boule-photo', src: 'm2/images/s18_0823e2f7.jpg', crop: [0, 0.082, 1, 0.918],
      caption: 'A Czochralski silicon crystal 300 mm across and over 250 kg, taller than the technician beside it.',
      alt: 'Photo of a very large dark grey cylindrical silicon single crystal hanging in a clean room next to a technician in a white suit and mask.' }
  ]
});
