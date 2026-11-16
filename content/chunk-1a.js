CHUNK({
  chunk: '1a',
  module: 'm1',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm1-laws',
      title: 'Ohm’s law and Kirchhoff’s laws',
      short: 'Ohm & Kirchhoff',
      blurb: 'The three rules every circuit problem rests on: V = IR at a resistor, currents balancing at a node, and voltages balancing around a loop.',
      source: 'Pages 1–3',
      tabs: [
        {
          title: 'Ohm’s law',
          html: `<p class="lead">Three laws run electrical circuits: <b>Ohm’s law</b>, <b>Kirchhoff’s laws</b> and <b>Faraday’s laws</b>. The first two are all you need for DC circuits; Faraday comes back with machines and transformers.</p>
<p><b>Ohm’s law:</b> if the <b>temperature stays constant</b>, the current I in a circuit is <b>directly proportional</b> to the applied voltage V and <b>inversely proportional</b> to the resistance R.</p>
<div class="eq">I = <span class="frac"><span>V</span><span>R</span></span> &nbsp; or &nbsp; V = IR &nbsp; or &nbsp; R = <span class="frac"><span>V</span><span>I</span></span></div>
<div class="kv"><div><span>V</span><b>volt (V)</b></div><div><span>I</span><b>ampere (A)</b></div><div><span>R</span><b>ohm (Ω)</b></div></div>
<div class="note why"><p>Why the temperature condition: the resistance of a conductor changes as it heats up. Hold the temperature and R is a fixed number, so V and I rise and fall together in a straight line.</p></div>
<div class="note exam"><p>Write the statement with the condition first ("at constant temperature…"), then all three forms of the equation. Examiners look for both the proportionality words and the formula.</p></div>`
        },
        {
          title: 'KCL',
          html: `<p class="lead"><b>Kirchhoff’s current law (KCL):</b> at a node, the <b>algebraic sum of the currents</b> meeting at the junction is <b>zero</b>. Put another way, the sum of currents <b>entering</b> the node equals the sum <b>leaving</b> it.</p>
<figure data-fig="m1-kcl-node"></figure>
<p>Take currents entering as positive and currents leaving as negative. At node <em>a</em> in the figure, I<sub>1</sub> comes in through R<sub>1</sub>, and three currents go out: I<sub>2</sub> up towards R<sub>5</sub>, I<sub>3</sub> down through R<sub>2</sub> and I<sub>4</sub> on through R<sub>4</sub>.</p>
<div class="eq" data-label="At node a">I<sub>1</sub> = I<sub>2</sub> + I<sub>3</sub> + I<sub>4</sub> &nbsp; or &nbsp; I<sub>1</sub> − I<sub>2</sub> − I<sub>3</sub> − I<sub>4</sub> = 0</div>
<div class="note heads-up"><p>The course material writes the node-a result as I<sub>1</sub> = I<sub>2</sub> + I<sub>3</sub> or I<sub>1</sub> + I<sub>2</sub> + I<sub>3</sub> = 0. Two small slips there. The second form needs minus signs, because I<sub>2</sub> and I<sub>3</sub> leave the node (I<sub>1</sub> − I<sub>2</sub> − I<sub>3</sub> = 0 says the same thing as the first form). And the figure also shows I<sub>4</sub> leaving node a, so the full balance includes I<sub>4</sub>. If the question only names I<sub>1</sub>, I<sub>2</sub>, I<sub>3</sub>, write I<sub>1</sub> = I<sub>2</sub> + I<sub>3</sub>; otherwise include every current drawn at the node.</p></div>
<div class="note why"><p>Charge cannot pile up at a junction or vanish there, so whatever flows in each second must flow out each second. KCL is just conservation of charge.</p></div>`
        },
        {
          title: 'KVL',
          html: `<p class="lead"><b>Kirchhoff’s voltage law (KVL):</b> around any <b>closed loop</b>, the algebraic sum of the voltage drops across the elements and the source is <b>zero</b>. Put another way, the sum of the <b>voltage rises</b> equals the sum of the <b>voltage drops</b>.</p>
<figure data-fig="m1-kvl-loop"></figure>
<p>The loop here is <b>abcda</b>: from node a down through R<sub>2</sub> to b, along the bottom wire to c, up through the battery to d, then through R<sub>1</sub> back to a. Signs: going through a resistor along its current is a drop (−IR); going through the battery from − to + is a rise (+V).</p>
<p>R<sub>1</sub> carries I<sub>1</sub> and R<sub>2</sub> carries I<sub>3</sub> (the branch currents from the KCL figure), so walking the loop:</p>
<div class="eq" data-label="Loop abcda">−I<sub>3</sub>R<sub>2</sub> + V − I<sub>1</sub>R<sub>1</sub> = 0 &nbsp; or &nbsp; V = I<sub>1</sub>R<sub>1</sub> + I<sub>3</sub>R<sub>2</sub></div>
<div class="note heads-up"><p>The course material prints this as −I<sub>1</sub>R<sub>12</sub> + V − I<sub>1</sub>R<sub>1</sub> = 0, i.e. V = I<sub>1</sub>R<sub>12</sub> + I<sub>1</sub>R<sub>1</sub>. There is no R<sub>12</sub> in the circuit: the resistor in loop abcda is R<sub>2</sub>. And with the branch currents drawn, the current through R<sub>2</sub> is I<sub>3</sub>, not I<sub>1</sub>. The idea (source voltage = sum of the two drops) is right; just use the right resistor and its own current.</p></div>
<div class="note why"><p>Voltage is potential energy per coulomb. Walk around a loop and you come back to the same point, at the same potential, so every rise must have been paid back by drops. KVL is conservation of energy.</p></div>`
        },
        {
          title: 'Using them',
          html: `<p class="lead">Ohm’s law links V and I at one element; KCL ties currents together at nodes; KVL ties voltages together around loops. Every method in this module (series–parallel, mesh, nodal, Thevenin, superposition) is these three applied in an organised way.</p>
<table class="tbl"><thead><tr><th></th><th>KCL</th><th>KVL</th></tr></thead><tbody>
<tr><td>Applied at</td><td>a node (junction)</td><td>a closed loop</td></tr>
<tr><td>Adds up</td><td>currents</td><td>voltages</td></tr>
<tr><td>Sum equals</td><td>zero (in = out)</td><td>zero (rises = drops)</td></tr>
<tr><td>Comes from</td><td>conservation of charge</td><td>conservation of energy</td></tr>
<tr><td>Used most in</td><td>nodal analysis</td><td>mesh (loop) analysis</td></tr>
</tbody></table>
<div class="note trap"><p>Signs are where marks get lost. Fix a convention before you write anything (entering +, leaving − for KCL; drop −IR along the current for KVL) and stick to it for the whole equation. A guessed current direction is fine: if it was wrong, the answer simply comes out negative.</p></div>
<div class="note exam"><p>A typical short answer: state the law in words, draw a small node or loop with labelled currents, and write the equation for it. A neat labelled sketch earns marks on its own.</p></div>`
        }
      ],
      flashcards: [
        { front: 'State Ohm’s law, with its condition.', back: 'At <b>constant temperature</b>, the current through a conductor is directly proportional to the voltage across it and inversely proportional to its resistance: I = V/R, V = IR, R = V/I.' },
        { front: 'State Kirchhoff’s current law (KCL).', back: 'At a node, the <b>algebraic sum of currents is zero</b>: total current entering = total current leaving. It is conservation of charge.' },
        { front: 'State Kirchhoff’s voltage law (KVL).', back: 'Around a closed loop, the <b>algebraic sum of voltage drops and sources is zero</b>: sum of rises = sum of drops. It is conservation of energy.' },
        { front: 'Node a has I<sub>1</sub> entering and I<sub>2</sub>, I<sub>3</sub>, I<sub>4</sub> leaving. Write KCL.', back: 'I<sub>1</sub> = I<sub>2</sub> + I<sub>3</sub> + I<sub>4</sub>, or I<sub>1</sub> − I<sub>2</sub> − I<sub>3</sub> − I<sub>4</sub> = 0.' },
        { front: 'Loop abcda: battery V, R<sub>1</sub> carrying I<sub>1</sub>, R<sub>2</sub> carrying I<sub>3</sub>. Write KVL.', back: '−I<sub>3</sub>R<sub>2</sub> + V − I<sub>1</sub>R<sub>1</sub> = 0, so <b>V = I<sub>1</sub>R<sub>1</sub> + I<sub>3</sub>R<sub>2</sub></b>.' },
        { front: 'Which three laws does the course list for electrical circuits?', back: '<b>Ohm’s law</b>, <b>Kirchhoff’s laws</b> (KCL and KVL) and <b>Faraday’s laws</b>.' },
        { front: 'Why does Ohm’s law need constant temperature?', back: 'Resistance changes with temperature. Only with R fixed is V proportional to I.' },
        { front: 'You guessed a current direction and the answer came out negative. What does that mean?', back: 'The real current flows the <b>other way</b>, with the same size. The working is still correct.' }
      ],
      oneLiners: [
        'Ohm’s law holds only at <b>constant temperature</b>.',
        'KCL: current in = current out at every node (<b>charge conservation</b>).',
        'KVL: rises = drops around every closed loop (<b>energy conservation</b>).',
        'KCL is the basis of <b>nodal analysis</b>; KVL is the basis of <b>mesh analysis</b>.',
        'Going along the current through a resistor is a <b>drop of IR</b>.',
        'A negative answer for a current means the <b>real direction is reversed</b>.'
      ],
      formulas: [
        { name: 'Ohm’s law', html: `I = V/R, &nbsp; V = IR, &nbsp; R = V/I`, note: 'At constant temperature.' },
        { name: 'KCL', html: `ΣI = 0 at a node (Σ I<sub>in</sub> = Σ I<sub>out</sub>)`, note: 'Entering +, leaving −.' },
        { name: 'KVL', html: `ΣV = 0 around a loop (Σ rises = Σ drops)`, note: 'Drop of IR when moving along the current.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm1-series-parallel',
      title: 'Series, parallel, source conversion and current division',
      short: 'Series & parallel',
      blurb: 'How resistors combine in series, in parallel and in mixed circuits, how to swap a voltage source for a current source, and how current splits between two branches.',
      source: 'Pages 4–9',
      tabs: [
        {
          title: 'Connections',
          html: `<p class="lead">Resistors can be joined in three ways: <b>series</b>, <b>parallel</b>, or a <b>series–parallel combination</b>.</p>
<p>A resistor has <b>no polarity</b> of its own. The course still marks + and − ends on each resistor, purely to make the joining rule easy to see:</p>
<ul>
<li><b>Series:</b> tie together <b>alternate polarities</b> (− of one to + of the next). Both (a) and (b) below are series, however the wire is bent.</li>
<li><b>Parallel:</b> tie together the <b>same polarities</b> (all + ends to one point, all − ends to another).</li>
</ul>
<figure data-fig="m1-series-tie"></figure>
<figure data-fig="m1-parallel-tie"></figure>
<div class="note why"><p>Series means one path: the current has no choice but to go through each resistor in turn. Parallel means the resistors share the same two end points, so they all see the same voltage and the current gets a choice of paths.</p></div>`
        },
        {
          title: 'Series',
          html: `<p class="lead">In series the <b>same current</b> flows through every resistor, and the resistances simply <b>add</b>.</p>
<ul>
<li><b>Same current</b> through all the resistances.</li>
<li>The <b>voltage drop</b> across each resistor depends on its own resistance (V = IR).</li>
<li>Effective (total) resistance = <b>sum</b> of all the resistances.</li>
<li>Applied voltage = <b>sum of the voltage drops</b> across all resistors.</li>
<li>Total power = <b>sum of the individual powers</b>.</li>
</ul>
<figure data-fig="m1-series-circuit"></figure>
<ol class="steps">
<li><b>KVL</b> V = V<sub>1</sub> + V<sub>2</sub> + V<sub>3</sub></li>
<li><b>Ohm on each</b> V = I<sub>1</sub>R<sub>1</sub> + I<sub>2</sub>R<sub>2</sub> + I<sub>3</sub>R<sub>3</sub></li>
<li><b>Same current</b> I<sub>1</sub> = I<sub>2</sub> = I<sub>3</sub> = I, so V = I(R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub>)</li>
<li><b>Result</b> V/I = R<sub>eff</sub> = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub></li>
</ol>
<p>The graph shows the potential falling step by step as you move along the chain: from A it drops by V<sub>1</sub> across R<sub>1</sub>, stays level along the wire to B, drops by V<sub>2</sub> across R<sub>2</sub>, stays level to C, and drops by V<sub>3</sub> across R<sub>3</sub> to reach D.</p>
<figure data-fig="m1-series-staircase"></figure>
<div class="note why"><p>The flat parts are the connecting wires: almost zero resistance, so almost zero drop. A bigger resistor gives a bigger step, because V = IR with the same I.</p></div>`
        },
        {
          title: 'Parallel',
          html: `<p class="lead">In parallel every resistor has the <b>same voltage</b> across it, and the <b>reciprocals</b> of the resistances add.</p>
<ul>
<li><b>Voltage drop</b> across each resistor is <b>equal</b>.</li>
<li>Reciprocal of the effective resistance = <b>sum of the reciprocals</b>.</li>
<li>Total current = <b>sum of the branch currents</b>.</li>
<li>Total power = <b>sum of the individual powers</b>.</li>
</ul>
<figure data-fig="m1-parallel-circuit"></figure>
<ol class="steps">
<li><b>KCL</b> I = I<sub>1</sub> + I<sub>2</sub> + I<sub>3</sub></li>
<li><b>Ohm on each</b> V/R<sub>eff</sub> = V<sub>1</sub>/R<sub>1</sub> + V<sub>2</sub>/R<sub>2</sub> + V<sub>3</sub>/R<sub>3</sub></li>
<li><b>Same voltage</b> V = V<sub>1</sub> = V<sub>2</sub> = V<sub>3</sub>, so V/R<sub>eff</sub> = V(1/R<sub>1</sub> + 1/R<sub>2</sub> + 1/R<sub>3</sub>)</li>
<li><b>Result</b> 1/R<sub>eff</sub> = 1/R<sub>1</sub> + 1/R<sub>2</sub> + 1/R<sub>3</sub></li>
</ol>
<div class="note why"><p>Each extra branch is one more path for current, so the total current goes up for the same voltage. That is why R<sub>eff</sub> in parallel is always <b>smaller than the smallest</b> branch resistance.</p></div>
<p><b>Extra:</b> for just two resistors, 1/R<sub>eff</sub> = 1/R<sub>1</sub> + 1/R<sub>2</sub> rearranges to R<sub>eff</sub> = R<sub>1</sub>R<sub>2</sub>/(R<sub>1</sub> + R<sub>2</sub>), "product over sum". It saves time in every numerical.</p>`
        },
        {
          title: 'Series vs parallel',
          html: `<p class="lead">Same five headings, opposite answers. This table is the whole comparison question.</p>
<table class="tbl"><thead><tr><th></th><th>Series</th><th>Parallel</th></tr></thead><tbody>
<tr><td>How joined</td><td>alternate polarities tied</td><td>same polarities tied</td></tr>
<tr><td>Current</td><td>same through all</td><td>splits; I = I<sub>1</sub> + I<sub>2</sub> + I<sub>3</sub></td></tr>
<tr><td>Voltage</td><td>splits; V = V<sub>1</sub> + V<sub>2</sub> + V<sub>3</sub></td><td>same across all</td></tr>
<tr><td>Effective R</td><td>R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub></td><td>1/R<sub>eff</sub> = Σ 1/R</td></tr>
<tr><td>Total power</td><td>sum of individual powers</td><td>sum of individual powers</td></tr>
</tbody></table>
<div data-viz="series-parallel"></div>
<div class="note trap"><p>Power adds in both cases. Students sometimes write "power divides in parallel"; the total is still the plain sum of each resistor’s power.</p></div>`
        },
        {
          title: 'Series–parallel',
          html: `<p class="lead">Real circuits mix both. Spot the groups, collapse them one at a time, and the whole circuit becomes one resistor.</p>
<figure data-fig="m1-series-parallel-circuit"></figure>
<p>Reading this circuit from the inside out:</p>
<ul>
<li><b>R<sub>3</sub>, R<sub>4</sub>, R<sub>5</sub></b> share both end nodes, so they are in <b>parallel</b> (currents I<sub>3</sub>, I<sub>4</sub>, I<sub>5</sub>).</li>
<li>That group is in <b>series with R<sub>1</sub></b>: the same I<sub>1</sub> flows through R<sub>1</sub> and then splits, so I<sub>1</sub> = I<sub>3</sub> + I<sub>4</sub> + I<sub>5</sub>.</li>
<li>The R<sub>1</sub> branch is in <b>parallel with R<sub>2</sub></b> (current I<sub>2</sub>); at the left node I = I<sub>1</sub> + I<sub>2</sub>.</li>
<li>All of that is in <b>series with R<sub>6</sub></b> and the supply V, which carry the full current I.</li>
</ul>
<p><b>Extra:</b> written as one line, R<sub>eq</sub> = R<sub>6</sub> + R<sub>2</sub> ∥ [R<sub>1</sub> + (R<sub>3</sub> ∥ R<sub>4</sub> ∥ R<sub>5</sub>)], and I = V/R<sub>eq</sub>.</p>
<div class="note exam"><p>Redraw after each step. Most mistakes come from calling two resistors "in series" when a branch leaves the node between them.</p></div>`
        },
        {
          title: 'Bridge networks',
          html: `<p class="lead">A <b>bridge network</b> has a fifth resistor across the middle, so it is neither series nor parallel. Its equivalent resistance is found in one of two ways.</p>
<figure data-fig="m1-bridge-network"></figure>
<ul><li><b>Balanced bridge:</b> if the ratios of the arms are equal (R<sub>AC</sub>/R<sub>CB</sub> = R<sub>AD</sub>/R<sub>DB</sub>), points C and D are at the same potential, no current flows in the middle resistor, and it can be removed.</li>
<li><b>Unbalanced bridge:</b> convert one delta (three resistors forming a triangle) into an equivalent star, then the network becomes series–parallel.</li></ul>
<div class="eq">Delta → star: R<sub>A</sub> = R<sub>AC</sub>R<sub>AD</sub> / (R<sub>AC</sub> + R<sub>AD</sub> + R<sub>CD</sub>), and the same pattern for R<sub>C</sub>, R<sub>D</sub></div>
<div class="worked"><div class="given">Balanced case: arms 10 Ω and 20 Ω on top, 5 Ω and 10 Ω below, any resistor in the middle.</div><div class="solve">10/20 = 5/10, so the bridge is balanced and the middle resistor carries no current. R<sub>eq</sub> = (10 + 20) ∥ (5 + 10) = 30 ∥ 15.</div><div class="result">R<sub>eq</sub> = 30 × 15/45 = 10 Ω</div></div>
<div class="worked"><div class="given">Unbalanced case (figure): R<sub>AC</sub> = 10, R<sub>CB</sub> = 20, R<sub>AD</sub> = 20, R<sub>DB</sub> = 10, R<sub>CD</sub> = 10 Ω.</div><div class="solve">Convert delta A–C–D (sum = 10 + 20 + 10 = 40 Ω) to a star with centre N: R<sub>A</sub> = 10 × 20/40 = 5 Ω, R<sub>C</sub> = 10 × 10/40 = 2.5 Ω, R<sub>D</sub> = 20 × 10/40 = 5 Ω. Now N to B has two paths: 2.5 + 20 = 22.5 Ω and 5 + 10 = 15 Ω, in parallel = 22.5 × 15/37.5 = 9 Ω.</div><div class="result">R<sub>eq</sub> = 5 + 9 = 14 Ω (checked by nodal analysis)</div></div>`
        },
        {
          title: 'Source conversion & current division',
          html: `<p class="lead">A voltage source E<sub>s</sub> with series resistance R<sub>s</sub> can be swapped for a <b>current source I<sub>s</sub> = E<sub>s</sub>/R<sub>s</sub></b> with the <b>same R<sub>s</sub> in parallel</b>. The load R<sub>L</sub> cannot tell the difference.</p>
<figure data-fig="m1-source-conversion"></figure>
<ul>
<li>Voltage form → current form: I<sub>s</sub> = E<sub>s</sub>/R<sub>s</sub>, R<sub>s</sub> moves from series to parallel.</li>
<li>Current form → voltage form: E<sub>s</sub> = I<sub>s</sub>R<sub>s</sub>, R<sub>s</sub> moves from parallel to series.</li>
<li>The load voltage V<sub>L</sub> and load current are the same in both forms.</li>
</ul>
<div class="note why"><p>Short the output of each form. The voltage form pushes E<sub>s</sub>/R<sub>s</sub> through the short; the current form sends all of I<sub>s</sub> through it. Open the output: the voltage form shows E<sub>s</sub>; the current form shows I<sub>s</sub>R<sub>s</sub> = E<sub>s</sub>. Same behaviour at both extremes, and the same in between.</p></div>
<div data-viz="source-convert"></div>
<h3>Current division rule</h3>
<p>Current I arrives at a node where it splits between two parallel branches, R<sub>2</sub> (current I<sub>2</sub>) and R<sub>3</sub> (current I<sub>1</sub>). R<sub>1</sub> is in series before the split and only sets the size of I.</p>
<figure data-fig="m1-current-division"></figure>
<div class="eq" data-label="Through R3">I<sub>1</sub> = I × <span class="frac"><span>R<sub>2</sub></span><span>R<sub>2</sub> + R<sub>3</sub></span></span></div>
<div class="eq" data-label="Through R2">I<sub>2</sub> = I × <span class="frac"><span>R<sub>3</sub></span><span>R<sub>2</sub> + R<sub>3</sub></span></span></div>
<div class="note heads-up"><p>The course material writes I<sub>1</sub> = I·R<sub>2</sub>/(R<sub>2</sub> + R<sub>1</sub>) and I<sub>2</sub> = I·R<sub>1</sub>/(R<sub>2</sub> + R<sub>1</sub>). The current splits between the two branches at the node, which are R<sub>2</sub> and R<sub>3</sub>, so R<sub>3</sub> belongs where R<sub>1</sub> is printed. R<sub>1</sub> sits before the split and plays no part in the division.</p></div>
<div class="mnemonic"><p>Each branch’s share uses the <b>other</b> branch’s resistance on top. Smaller resistance, bigger share.</p></div>`
        }
      ],
      flashcards: [
        { front: 'Give the five characteristics of a series connection.', back: 'Same current through all; each drop depends on its own R; R<sub>eff</sub> = sum of R; applied V = sum of drops; total power = sum of powers.' },
        { front: 'Give the four characteristics of a parallel connection.', back: 'Same voltage across each; 1/R<sub>eff</sub> = sum of 1/R; total current = sum of branch currents; total power = sum of powers.' },
        { front: 'Current I splits between R<sub>2</sub> and R<sub>3</sub> in parallel. Current through R<sub>3</sub>?', back: 'I<sub>R3</sub> = I × <b>R<sub>2</sub>/(R<sub>2</sub> + R<sub>3</sub>)</b>, the other branch on top.' },
        { front: 'Convert E<sub>s</sub> in series with R<sub>s</sub> into a current source.', back: 'Current source <b>I<sub>s</sub> = E<sub>s</sub>/R<sub>s</sub></b> with the same R<sub>s</sub> in <b>parallel</b>.' },
        { front: 'Derive R<sub>eff</sub> for three resistors in series.', back: 'V = V<sub>1</sub> + V<sub>2</sub> + V<sub>3</sub> = I(R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub>) since the current is the same, so V/I = R<sub>eff</sub> = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub>.' },
        { front: 'Derive R<sub>eff</sub> for three resistors in parallel.', back: 'I = I<sub>1</sub> + I<sub>2</sub> + I<sub>3</sub> → V/R<sub>eff</sub> = V/R<sub>1</sub> + V/R<sub>2</sub> + V/R<sub>3</sub> (same V) → 1/R<sub>eff</sub> = 1/R<sub>1</sub> + 1/R<sub>2</sub> + 1/R<sub>3</sub>.' },
        { front: 'How do you tie resistors in series and in parallel, using marked polarities?', back: 'Series: tie <b>alternate</b> polarities (− to +). Parallel: tie the <b>same</b> polarities (+ to +, − to −). Resistors have no real polarity; the marks only help.' },
        { front: 'What does the V–R staircase graph of a series circuit show?', back: 'Potential falls by V<sub>1</sub>, V<sub>2</sub>, V<sub>3</sub> across R<sub>1</sub>, R<sub>2</sub>, R<sub>3</sub> and stays flat along the wires, from A down to D.' },
        { front: 'Why is parallel R<sub>eff</sub> smaller than the smallest branch?', back: 'Each branch adds another path for current, so more current flows for the same voltage.' },
        { front: 'Circuit: R<sub>3</sub>∥R<sub>4</sub>∥R<sub>5</sub> in series with R<sub>1</sub>, that in parallel with R<sub>2</sub>, all in series with R<sub>6</sub>. R<sub>eq</sub>?', back: 'R<sub>eq</sub> = R<sub>6</sub> + R<sub>2</sub> ∥ [R<sub>1</sub> + (R<sub>3</sub>∥R<sub>4</sub>∥R<sub>5</sub>)].' }
      ],
      oneLiners: [
        'Series: <b>same current</b>, voltages add.',
        'Parallel: <b>same voltage</b>, currents add.',
        'Series R<sub>eff</sub> = <b>R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub></b>; parallel 1/R<sub>eff</sub> = <b>1/R<sub>1</sub> + 1/R<sub>2</sub> + 1/R<sub>3</sub></b>.',
        'Total power is the <b>sum of individual powers</b> in both series and parallel.',
        'Source conversion: <b>I<sub>s</sub> = E<sub>s</sub>/R<sub>s</sub></b>, R<sub>s</sub> goes from series to parallel.',
        'Current division: a branch’s share = I × (<b>other</b> R)/(sum of the two).',
        'Resistors have <b>no polarity</b>; marks are only to explain the connection.',
        'Two in parallel: R<sub>eff</sub> = <b>product over sum</b> (Extra shortcut).'
      ],
      formulas: [
        { name: 'Series resistance', html: `R<sub>eff</sub> = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub>`, note: 'Same current; V = V1 + V2 + V3.' },
        { name: 'Parallel resistance', html: `1/R<sub>eff</sub> = 1/R<sub>1</sub> + 1/R<sub>2</sub> + 1/R<sub>3</sub>`, note: 'Same voltage; I = I1 + I2 + I3.' },
        { name: 'Two in parallel (Extra)', html: `R<sub>eff</sub> = R<sub>1</sub>R<sub>2</sub>/(R<sub>1</sub> + R<sub>2</sub>)`, note: 'Product over sum.' },
        { name: 'Source conversion', html: `I<sub>s</sub> = E<sub>s</sub>/R<sub>s</sub> &nbsp; (E<sub>s</sub> = I<sub>s</sub>R<sub>s</sub>)`, note: 'Same R<sub>s</sub>: series with E<sub>s</sub>, parallel with I<sub>s</sub>.' },
        { name: 'Current division', html: `I<sub>R3</sub> = I·R<sub>2</sub>/(R<sub>2</sub> + R<sub>3</sub>), &nbsp; I<sub>R2</sub> = I·R<sub>3</sub>/(R<sub>2</sub> + R<sub>3</sub>)`, note: 'Two parallel branches R2 and R3 sharing I.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm1-mesh',
      title: 'Mesh (loop current) analysis',
      short: 'Mesh analysis',
      blurb: 'Give each loop its own current, write KVL around each loop, and solve the simultaneous equations with determinants (Cramer’s rule).',
      source: 'Pages 10–14',
      tabs: [
        {
          title: 'Loops and nodes',
          html: `<p class="lead">DC circuits are analysed in two systematic ways: <b>loop current (mesh) analysis</b> and <b>nodal voltage analysis</b>. Both start from three words.</p>
<div class="kv">
<div><span>Loop</span><b>a closed path for current to flow</b></div>
<div><span>Node</span><b>a point where elements are connected</b></div>
<div><span>Reference node</span><b>a node at low potential, taken as zero, common to all nodes</b></div>
</div>
<figure data-fig="m1-loop-node-terms"></figure>
<div class="note why"><p>Mesh analysis picks loops and finds currents with KVL. Nodal analysis picks nodes and finds voltages with KCL. Choose whichever gives fewer unknowns.</p></div>`
        },
        {
          title: 'The method',
          html: `<p class="lead">Mark the nodes, give every loop a clockwise current, write KVL around each loop, then solve the equations.</p>
<p>The course keeps the method simple: <b>controlled (dependent) voltage and current sources are not included</b>, and <b>supermeshes are not included</b>.</p>
<figure data-fig="m1-mesh-circuit"></figure>
<ol class="steps">
<li><b>Step 1</b> Mark the nodes and give them names (a, b, c, d, e, f, g, h here).</li>
<li><b>Step 2</b> Mark a loop current in each loop: I<sub>1</sub> in abhga, I<sub>2</sub> in bcdhb, I<sub>3</sub> in defhd, all clockwise.</li>
<li><b>Step 3</b> Write the loop equation of each loop using KVL.</li>
<li><b>Step 4</b> Solve the three simultaneous equations.</li>
<li><b>Step 5</b> The solution gives the loop currents.</li>
</ol>
<div class="note why"><p>A resistor shared by two loops carries both loop currents at once, in opposite directions. So its current is the difference, like (I<sub>1</sub> − I<sub>2</sub>) in the 3 Ω between loops 1 and 2. That one idea writes every equation.</p></div>`
        },
        {
          title: 'Loop equations',
          html: `<p class="lead">Walk each loop in the direction of its own current, write the drop in every resistor, and put the source on the other side.</p>
<div class="worked">
<div class="given"><p>5 V source; 1 Ω (a–b), 3 Ω (b–h), 2 Ω (h–f), 2 Ω (c–d), 1 Ω (h–d), 4 Ω (d–e). Loop currents I<sub>1</sub>, I<sub>2</sub>, I<sub>3</sub>, all clockwise.</p></div>
<div class="solve">
<p><b>Loop abhga</b> (1 Ω on its own, 3 Ω shared with loop 2, 2 Ω shared with loop 3):</p>
<div class="eq">I<sub>1</sub>(1) + (I<sub>1</sub> − I<sub>2</sub>)3 + (I<sub>1</sub> − I<sub>3</sub>)2 − 5 = 0</div>
<div class="eq">I<sub>1</sub> + 3I<sub>1</sub> − 3I<sub>2</sub> + 2I<sub>1</sub> − 2I<sub>3</sub> − 5 = 0 &nbsp; ⟶ &nbsp; 6I<sub>1</sub> − 3I<sub>2</sub> − 2I<sub>3</sub> = 5 &nbsp; (1)</div>
<p><b>Loop bcdhb</b> (2 Ω own, 1 Ω shared with loop 3, 3 Ω shared with loop 1):</p>
<div class="eq">I<sub>2</sub>(2) + (I<sub>2</sub> − I<sub>3</sub>)1 + (I<sub>2</sub> − I<sub>1</sub>)3 = 0</div>
<div class="eq">2I<sub>2</sub> + I<sub>2</sub> − I<sub>3</sub> + 3I<sub>2</sub> − 3I<sub>1</sub> = 0 &nbsp; ⟶ &nbsp; −3I<sub>1</sub> + 6I<sub>2</sub> − I<sub>3</sub> = 0 &nbsp; (2)</div>
<p><b>Loop defhd</b> (4 Ω own, 2 Ω shared with loop 1, 1 Ω shared with loop 2):</p>
<div class="eq">I<sub>3</sub>(4) + (I<sub>3</sub> − I<sub>1</sub>)2 + (I<sub>3</sub> − I<sub>2</sub>)1 = 0</div>
<div class="eq">4I<sub>3</sub> + 2I<sub>3</sub> − 2I<sub>1</sub> + I<sub>3</sub> − I<sub>2</sub> = 0 &nbsp; ⟶ &nbsp; −2I<sub>1</sub> − I<sub>2</sub> + 7I<sub>3</sub> = 0 &nbsp; (3)</div>
</div>
<div class="result"><p>Three equations, three unknowns. Next: matrices.</p></div>
</div>
<div class="note heads-up"><p>The course material names the first loop "abhha". The loop actually runs a → b → h → g → a (through the 3 Ω, the 2 Ω, the bottom wire and the 5 V source), so read it as abhga. The equation itself is correct.</p></div>
<div class="mnemonic"><p>Diagonal = total resistance of the loop (6, 6, 7). Off-diagonal = minus the shared resistance (−3, −2, −1). Check your equations against this pattern before solving.</p></div>`
        },
        {
          title: 'Cramer’s rule',
          html: `<p class="lead">Write the equations as <b>[R][I] = [V]</b>, then each current is a ratio of two determinants: I<sub>k</sub> = ΔI<sub>k</sub>/Δ.</p>
<div class="eq">[R<sub>11</sub> R<sub>12</sub> R<sub>13</sub>; R<sub>21</sub> R<sub>22</sub> R<sub>23</sub>; R<sub>31</sub> R<sub>32</sub> R<sub>33</sub>] [I<sub>1</sub>; I<sub>2</sub>; I<sub>3</sub>] = [V<sub>1</sub>; V<sub>2</sub>; V<sub>3</sub>]</div>
<div class="eq">[6 −3 −2; −3 6 −1; −2 −1 7] [I<sub>1</sub>; I<sub>2</sub>; I<sub>3</sub>] = [5; 0; 0]</div>
<p>Δ is the determinant of [R]. ΔI<sub>1</sub>, ΔI<sub>2</sub>, ΔI<sub>3</sub> are the same determinant with column 1, 2 or 3 replaced by [5; 0; 0].</p>
<div class="worked">
<div class="given"><p>The three loop equations from the previous tab.</p></div>
<div class="solve">
<div class="eq">Δ = 6(6·7 − 1) + 3(−3·7 − 2) − 2(3 + 12) = 246 − 69 − 30 = 147</div>
<div class="eq">ΔI<sub>1</sub> = |5 −3 −2; 0 6 −1; 0 −1 7| = 5(42 − 1) = 205</div>
<div class="eq">ΔI<sub>2</sub> = |6 5 −2; −3 0 −1; −2 0 7| = −5(−21 − 2) = 115</div>
<div class="eq">ΔI<sub>3</sub> = |6 −3 5; −3 6 0; −2 −1 0| = 5(3 + 12) = 75</div>
<div class="eq">I<sub>1</sub> = 205/147, &nbsp; I<sub>2</sub> = 115/147, &nbsp; I<sub>3</sub> = 75/147</div>
</div>
<div class="result"><p><b>I<sub>1</sub> = 1.395 A</b>, <b>I<sub>2</sub> = 0.782 A</b>, <b>I<sub>3</sub> = 0.510 A</b> (all clockwise, as assumed).</p></div>
</div>
<p>The course stops at "the solution gives the loop currents"; the numbers above are the worked finish. Branch currents follow from them:</p>
<ul>
<li>1 Ω (a–b) and the 5 V source: I<sub>1</sub> = 1.395 A</li>
<li>3 Ω (b → h): I<sub>1</sub> − I<sub>2</sub> = 0.612 A</li>
<li>2 Ω (h → f): I<sub>1</sub> − I<sub>3</sub> = 0.884 A</li>
<li>1 Ω between h and d: I<sub>2</sub> − I<sub>3</sub> = 0.272 A, flowing from d to h</li>
</ul>
<div class="note exam"><p>Check with loop 1: 1(1.395) + 3(0.612) + 2(0.884) = 5.00 V. If a loop doesn’t balance, a sign is wrong somewhere.</p></div>
<div data-viz="mesh-solver"></div>`
        },
        {
          title: 'Class assignment',
          html: `<p class="lead">Three circuits to practise loop current analysis on. Mark the loops clockwise, write one KVL equation per loop, and solve with Cramer’s rule.</p>
<p><b>Ex. 1</b> A 10 V source in series with 4 Ω, a 4 Ω across the top, 2 Ω to a middle node, a 2 V source between the middle node and the right node (+ on the middle side), 6 Ω and 1 Ω down to the bottom.</p>
<figure data-fig="m1-mesh-ex1"></figure>
<p><b>Ex. 2</b> A bridge on a 54 V source: 3 Ω and 14 Ω on top, 11 Ω and 3 Ω below, 4 Ω across the middle.</p>
<figure data-fig="m1-mesh-ex2"></figure>
<p><b>Ex. 3</b> A 24 V source feeding two columns (10 Ω over 12 Ω, and 24 Ω over 4 Ω) joined at their midpoints by 4 Ω.</p>
<figure data-fig="m1-mesh-ex3"></figure>
<details class="more"><summary>Extra: answers to check your working</summary>
<p>The course gives no answers; these come from solving the circuits.</p>
<ul>
<li><b>Ex. 1</b> Clockwise loop currents: left-bottom loop (10 V, 4 Ω, 2 Ω, 6 Ω) = 1.446 A; top loop (4 Ω, 2 V, 2 Ω) = 0.815 A; right-bottom loop (6 Ω, 2 V, 1 Ω) = 0.954 A.</li>
<li><b>Ex. 2</b> The 54 V source supplies 9.30 A; the 4 Ω bridge carries 3.73 A from the left node to the right node.</li>
<li><b>Ex. 3</b> The source supplies 2.25 A; the middle 4 Ω carries 0.75 A from left to right (the midpoints sit at 9 V and 6 V).</li>
</ul>
</details>`
        }
      ],
      flashcards: [
        { front: 'List the five steps of mesh (loop current) analysis.', back: '1 Mark and name the nodes. 2 Mark a loop current in each loop (clockwise). 3 Write KVL for each loop. 4 Solve the simultaneous equations. 5 The solution gives the loop currents.' },
        { front: 'A 3 Ω is shared by loops carrying I<sub>1</sub> and I<sub>2</sub> (both clockwise). Its drop in loop 1’s equation?', back: '<b>(I<sub>1</sub> − I<sub>2</sub>) × 3</b>. The loop’s own current minus the neighbour’s.' },
        { front: 'How does Cramer’s rule give I<sub>2</sub> from [R][I] = [V]?', back: 'I<sub>2</sub> = <b>ΔI<sub>2</sub>/Δ</b>, where ΔI<sub>2</sub> is Δ with column 2 replaced by the [V] column.' },
        { front: 'Define loop, node and reference node.', back: 'Loop: a closed path for current. Node: a point where elements connect. Reference node: a node at low (zero) potential, common to all nodes.' },
        { front: 'Course mesh example: give the matrix equation.', back: '[6 −3 −2; −3 6 −1; −2 −1 7][I<sub>1</sub>; I<sub>2</sub>; I<sub>3</sub>] = [5; 0; 0].' },
        { front: 'Course mesh example: Δ, ΔI<sub>1</sub>, ΔI<sub>2</sub>, ΔI<sub>3</sub>?', back: 'Δ = <b>147</b>, ΔI<sub>1</sub> = 205, ΔI<sub>2</sub> = 115, ΔI<sub>3</sub> = 75.' },
        { front: 'Course mesh example: the three loop currents?', back: 'I<sub>1</sub> = <b>1.395 A</b>, I<sub>2</sub> = <b>0.782 A</b>, I<sub>3</sub> = <b>0.510 A</b>.' },
        { front: 'Which two things does the course’s mesh method leave out?', back: '<b>Controlled (dependent) sources</b> and <b>supermeshes</b>.' },
        { front: 'Quick check of a mesh coefficient matrix?', back: 'Diagonal = total resistance in that loop; off-diagonal = minus the resistance shared by the two loops; the matrix is symmetric.' }
      ],
      oneLiners: [
        'Mesh analysis uses <b>KVL</b> and solves for <b>loop currents</b>.',
        'A shared resistor carries the <b>difference</b> of the two loop currents.',
        'Cramer’s rule: <b>I<sub>k</sub> = ΔI<sub>k</sub>/Δ</b>.',
        'Course example: Δ = <b>147</b>; I<sub>1</sub> = 1.395 A, I<sub>2</sub> = 0.782 A, I<sub>3</sub> = 0.510 A.',
        'Reference node: lowest potential, taken as <b>zero</b>.',
        'Number of mesh equations = number of <b>independent loops</b>.'
      ],
      formulas: [
        { name: 'Mesh equations (matrix form)', html: `[R][I] = [V]`, note: 'R<sub>kk</sub> = total R of loop k; R<sub>jk</sub> = − shared R.' },
        { name: 'Cramer’s rule', html: `I<sub>1</sub> = ΔI<sub>1</sub>/Δ, &nbsp; I<sub>2</sub> = ΔI<sub>2</sub>/Δ, &nbsp; I<sub>3</sub> = ΔI<sub>3</sub>/Δ`, note: 'ΔI<sub>k</sub>: column k of [R] replaced by [V].' },
        { name: 'Shared-branch current', html: `I<sub>branch</sub> = I<sub>1</sub> − I<sub>2</sub>`, note: 'Both loop currents taken clockwise.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm1-nodal',
      title: 'Nodal voltage analysis',
      short: 'Nodal analysis',
      blurb: 'Pick a reference node, call the other node voltages V<sub>a</sub>, V<sub>b</sub>…, write KCL at each node with Ohm’s law for every current, and solve.',
      source: 'Pages 15–19',
      tabs: [
        {
          title: 'Steps 1–5',
          html: `<p class="lead">Nodal analysis finds the <b>voltage at each node</b> relative to a zero-volt reference. Once the node voltages are known, every current is just Ohm’s law.</p>
<figure data-fig="m1-nodal-circuit"></figure>
<ol class="steps">
<li><b>Step 1</b> Mark the <b>prime (principal) nodes</b>, the nodes that describe the steady-state behaviour of the circuit, and name them a, b, c…</li>
<li><b>Step 2</b> Mark the <b>reference node</b>: one of the principal nodes, at zero potential, common to the remaining principal nodes. Here it is c (grounded).</li>
<li><b>Step 3</b> Keeping in mind that the sources deliver current to the nodes, mark the current directions (arbitrary): I<sub>1</sub> to I<sub>5</sub>.</li>
<li><b>Step 4</b> Identify the current paths, called the <b>graph</b>. Assume the nodes are at higher potential and current flows from higher potential to the zero-potential reference node.</li>
<li><b>Step 5</b> Call the potential at node a <b>V<sub>a</sub></b> and at node b <b>V<sub>b</sub></b>.</li>
</ol>
<figure data-fig="m1-nodal-graph"></figure>
<div class="note why"><p>The graph strips the circuit down to its skeleton: three nodes and the five resistances that join them. It shows at a glance that only V<sub>a</sub> and V<sub>b</sub> are unknown, so two equations will do. Mesh analysis on the same circuit would need three loop currents.</p></div>`
        },
        {
          title: 'KCL at the nodes',
          html: `<p class="lead">Step 6: apply KCL at a and b, and write each current with Ohm’s law as (higher voltage − lower voltage)/R.</p>
<div class="worked">
<div class="given"><p>10 V source, 5 Ω to node a; 15 Ω from a to ground; 10 Ω from a to b; 8 Ω from b to ground; 12 Ω from b to the 6 V source. Reference c = 0 V.</p></div>
<div class="solve">
<p><b>At node a</b>: I<sub>1</sub> = I<sub>2</sub> + I<sub>3</sub>, or I<sub>1</sub> − I<sub>2</sub> − I<sub>3</sub> = 0 &nbsp; (1)</p>
<div class="eq">(V<sub>a</sub> − 10)/5 − (V<sub>a</sub> − V<sub>b</sub>)/10 − V<sub>a</sub>/15 = 0 &nbsp; (2) as printed</div>
<p>The note in the course: although a and b were assumed to be at higher potential, the source drives the current, and the actual current flows from a to b. So (2) is rearranged as:</p>
<div class="eq">(10 − V<sub>a</sub>)/5 − (V<sub>a</sub> − V<sub>b</sub>)/10 − V<sub>a</sub>/15 = 0 &nbsp; (3)</div>
<p><b>At node b</b>: I<sub>5</sub> = I<sub>2</sub> + I<sub>4</sub>, or I<sub>5</sub> − I<sub>2</sub> − I<sub>4</sub> = 0 &nbsp; (4)</p>
<div class="eq">V<sub>b</sub>/8 − (V<sub>b</sub> − V<sub>a</sub>)/10 − (V<sub>b</sub> − 6)/12 = 0 &nbsp; (5) as printed</div>
<div class="eq">V<sub>b</sub>/8 − (V<sub>a</sub> − V<sub>b</sub>)/10 − (6 − V<sub>b</sub>)/12 = 0 &nbsp; (6)</div>
</div>
<div class="result"><p>Use <b>(3)</b> and <b>(6)</b>. They follow the current arrows exactly as drawn.</p></div>
</div>
<div class="note heads-up"><p>Equations (2) and (5) don’t match the arrows. I<sub>1</sub> flows from the 10 V source into a, so I<sub>1</sub> = (10 − V<sub>a</sub>)/5, not (V<sub>a</sub> − 10)/5. At b, I<sub>2</sub> = (V<sub>a</sub> − V<sub>b</sub>)/10 and I<sub>4</sub> = (6 − V<sub>b</sub>)/12, the opposite signs to (5). The course corrects both itself in (3) and (6). Its later note says "solve (3) and (4)"; (4) is the current form of (6), so solve (3) and (6).</p></div>
<div class="note why"><p>Every term in a KCL equation is "voltage at the tail of the arrow minus voltage at the head, over R". Write it that way every time and the signs look after themselves.</p></div>`
        },
        {
          title: 'Solving',
          html: `<p class="lead">Clear the fractions, solve two linear equations for V<sub>a</sub> and V<sub>b</sub>, then use Ohm’s law for every current.</p>
<div class="worked">
<div class="given"><p>(3) and (6) from the previous tab.</p></div>
<div class="solve">
<p>(3) × 30: 6(10 − V<sub>a</sub>) − 3(V<sub>a</sub> − V<sub>b</sub>) − 2V<sub>a</sub> = 0</p>
<div class="eq">11V<sub>a</sub> − 3V<sub>b</sub> = 60</div>
<p>(6) × 120: 15V<sub>b</sub> − 12(V<sub>a</sub> − V<sub>b</sub>) − 10(6 − V<sub>b</sub>) = 0</p>
<div class="eq">−12V<sub>a</sub> + 37V<sub>b</sub> = 60</div>
<p>Cramer: Δ = 11 × 37 − (−3)(−12) = 407 − 36 = 371</p>
<div class="eq">V<sub>a</sub> = (60 × 37 + 3 × 60)/371 = 2400/371</div>
<div class="eq">V<sub>b</sub> = (11 × 60 + 12 × 60)/371 = 1380/371</div>
</div>
<div class="result"><p><b>V<sub>a</sub> = 6.469 V</b>, <b>V<sub>b</sub> = 3.720 V</b></p></div>
</div>
<p>Then Ohm’s law gives each current:</p>
<div class="kv">
<div><span>I<sub>1</sub> = (10 − V<sub>a</sub>)/5</span><b>0.706 A</b></div>
<div><span>I<sub>2</sub> = (V<sub>a</sub> − V<sub>b</sub>)/10</span><b>0.275 A</b></div>
<div><span>I<sub>3</sub> = V<sub>a</sub>/15</span><b>0.431 A</b></div>
<div><span>I<sub>4</sub> = (6 − V<sub>b</sub>)/12</span><b>0.190 A</b></div>
<div><span>I<sub>5</sub> = V<sub>b</sub>/8</span><b>0.465 A</b></div>
</div>
<p>KCL checks: I<sub>2</sub> + I<sub>3</sub> = 0.706 A = I<sub>1</sub>, and I<sub>2</sub> + I<sub>4</sub> = 0.465 A = I<sub>5</sub>. All currents come out positive, so every arrow was drawn the right way.</p>
<p>The course’s last note: use Ohm’s law for the individual currents and the voltage across each resistor, and find power from <b>V = IR</b>, <b>I = V/R</b> and <b>P = VI</b>, <b>I<sup>2</sup>R</b> or <b>V<sup>2</sup>/R</b>. For example, the 15 Ω takes P = I<sub>3</sub><sup>2</sup> × 15 = 0.431<sup>2</sup> × 15 = 2.79 W.</p>
<div class="note heads-up"><p>The power line in the course reads "P = VI (or) I<sup>2</sup>R (or) VI", with VI twice. The third form is meant to be V<sup>2</sup>/R.</p></div>`
        },
        {
          title: 'Class assignment',
          html: `<p class="lead">Five circuits for nodal practice. Pick the reference node, name the other nodes, write KCL at each one.</p>
<p><b>Ex. 1</b> 15 V and 5 V sources (the 5 V has − at the top), 3.3 kΩ across the top, 1.2 kΩ and 2.2 kΩ to a middle node, 470 Ω and 330 Ω down from it, 100 kΩ along the bottom.</p>
<figure data-fig="m1-nodal-ex1"></figure>
<p><b>Ex. 2</b> Current sources of 1.5 A into a and 1 A into c; 5 Ω, 20 Ω, 10 Ω to ground from a, b, c; 4 Ω between a and b, 2 Ω between b and c.</p>
<figure data-fig="m1-nodal-ex2"></figure>
<p><b>Ex. 3</b> A 3 A source between the left and middle nodes, 7 Ω and 4 Ω to the bottom, 8 Ω from the middle to the right node, 3 Ω across the top, 2 A drawn down out of the right node.</p>
<figure data-fig="m1-nodal-ex3"></figure>
<p><b>Ex. 4</b> 4 A into V<sub>1</sub>; 5 Ω from V<sub>1</sub> to V<sub>2</sub>; 2 Ω from each node to ground; 2 Ω from V<sub>2</sub> to a 28 V source. Ground V = 0.</p>
<figure data-fig="m1-nodal-ex4"></figure>
<p><b>Ex. 5</b> 15 V and 20 V sources, each with 1 Ω, feeding the two top nodes; 0.5 Ω between those nodes; 1 Ω and 2 Ω down to the bottom node.</p>
<figure data-fig="m1-nodal-ex5"></figure>
<details class="more"><summary>Extra: answers to check your working</summary>
<p>The course gives no answers; these come from solving the circuits (bottom node = 0 V in each).</p>
<ul>
<li><b>Ex. 1</b> Middle node 6.68 V; top-right node 9.81 V; the 15 V source supplies 8.50 mA.</li>
<li><b>Ex. 2</b> V<sub>a</sub> = 7.12 V, V<sub>b</sub> = 6.82 V, V<sub>c</sub> = 7.35 V.</li>
<li><b>Ex. 3</b> Left node −18.14 V, middle node 2.36 V, right node −16.91 V.</li>
<li><b>Ex. 4</b> V<sub>1</sub> = 9.5 V, V<sub>2</sub> = 13.25 V; I<sub>1</sub> = 4.75 A, I<sub>3</sub> = 6.625 A; I<sub>2</sub> = −0.75 A and I<sub>4</sub> = −7.375 A, so both really flow the other way (the 28 V source pushes 7.375 A into V<sub>2</sub>).</li>
<li><b>Ex. 5</b> Top-left node 9.25 V, top-right node 11 V; I<sub>1</sub> = 5.75 A, I<sub>2</sub> = 3.5 A, I<sub>3</sub> = 9 A, I<sub>4</sub> = 9.25 A, I<sub>5</sub> = 5.5 A.</li>
</ul>
</details>`
        }
      ],
      flashcards: [
        { front: 'List the steps of nodal voltage analysis.', back: '1 Mark the principal nodes. 2 Pick the reference (zero) node. 3 Mark current directions. 4 Identify the graph (current paths). 5 Name V<sub>a</sub>, V<sub>b</sub>. 6 Write KCL at each node and solve.' },
        { front: 'Current from a 10 V source through 5 Ω into node a. Write it with node voltages.', back: 'I<sub>1</sub> = <b>(10 − V<sub>a</sub>)/5</b>: tail voltage minus head voltage, over R.' },
        { front: 'Course nodal example: V<sub>a</sub> and V<sub>b</sub>?', back: '<b>V<sub>a</sub> = 6.469 V</b>, <b>V<sub>b</sub> = 3.720 V</b>.' },
        { front: 'What is a reference node?', back: 'One of the principal nodes, taken at <b>zero potential</b> and common to the remaining principal nodes.' },
        { front: 'Course nodal example: the two equations in clean form?', back: '11V<sub>a</sub> − 3V<sub>b</sub> = 60 and −12V<sub>a</sub> + 37V<sub>b</sub> = 60.' },
        { front: 'Course nodal example: I<sub>1</sub> to I<sub>5</sub>?', back: 'I<sub>1</sub> = 0.706, I<sub>2</sub> = 0.275, I<sub>3</sub> = 0.431, I<sub>4</sub> = 0.190, I<sub>5</sub> = 0.465 A.' },
        { front: 'What is the "graph" in step 4?', back: 'The circuit reduced to its nodes and the paths (resistances) joining them, showing where current can flow to the reference node.' },
        { front: 'Three ways to find power in a resistor?', back: '<b>P = VI</b>, <b>P = I<sup>2</sup>R</b>, <b>P = V<sup>2</sup>/R</b>.' },
        { front: 'Mesh or nodal for the course example circuit, and why?', back: 'Nodal: only <b>two</b> unknown node voltages, versus three loop currents.' }
      ],
      oneLiners: [
        'Nodal analysis uses <b>KCL</b> and solves for <b>node voltages</b>.',
        'Every current = (tail voltage − head voltage)/<b>R</b>.',
        'The reference node is at <b>0 V</b>.',
        'Course example: <b>V<sub>a</sub> = 6.469 V</b>, <b>V<sub>b</sub> = 3.720 V</b>.',
        'Number of nodal equations = principal nodes − <b>1</b>.',
        'After the node voltages, use <b>Ohm’s law</b> for currents and P = VI, I<sup>2</sup>R or V<sup>2</sup>/R for power.'
      ],
      formulas: [
        { name: 'Branch current from node voltages', html: `I = (V<sub>tail</sub> − V<sub>head</sub>)/R`, note: 'Tail = where the arrow starts.' },
        { name: 'Power', html: `P = VI = I<sup>2</sup>R = V<sup>2</sup>/R`, note: 'Any form, whichever two quantities you know.' },
        { name: 'Two-node Cramer', html: `V<sub>a</sub> = (b<sub>1</sub>a<sub>22</sub> − a<sub>12</sub>b<sub>2</sub>)/Δ, &nbsp; Δ = a<sub>11</sub>a<sub>22</sub> − a<sub>12</sub>a<sub>21</sub>`, note: 'For a<sub>11</sub>V<sub>a</sub> + a<sub>12</sub>V<sub>b</sub> = b<sub>1</sub>, a<sub>21</sub>V<sub>a</sub> + a<sub>22</sub>V<sub>b</sub> = b<sub>2</sub>.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm1-thevenin',
      title: 'Thevenin’s theorem',
      short: 'Thevenin’s theorem',
      blurb: 'Any linear network seen from two terminals behaves like one voltage source V<sub>th</sub> in series with one resistance R<sub>th</sub>, so the load current is V<sub>th</sub>/(R<sub>th</sub> + R<sub>L</sub>).',
      source: 'Pages 20–24',
      tabs: [
        {
          title: 'The theorem',
          html: `<p class="lead">In a <b>linear, bilateral network</b>, the current through a load R<sub>L</sub> connected across any two terminals A and B is</p>
<div class="eq">I<sub>L</sub> = <span class="frac"><span>V<sub>oc</sub></span><span>R<sub>in</sub> + R<sub>L</sub></span></span></div>
<ul>
<li><b>V<sub>oc</sub></b> is the <b>open-circuit voltage</b>: the voltage across A and B when R<sub>L</sub> is removed. This is the Thevenin voltage V<sub>th</sub>.</li>
<li><b>R<sub>in</sub></b> is the <b>internal resistance</b> of the network, viewed back into the open-circuited network from A and B, with all <b>voltage sources replaced by their internal resistance</b> (if any) and all <b>current sources by infinite resistance</b>. This is the Thevenin resistance R<sub>th</sub>.</li>
</ul>
<p>The theorem is named after <b>M. L. Thevenin</b>.</p>
<figure data-fig="m1-thevenin-idea"></figure>
<p>In other words, R<sub>th</sub> is the resistance seen at A–B with all voltage sources <b>replaced by short circuits</b> and all current sources <b>replaced by open circuits</b>.</p>
<div class="note why"><p>Linear means the resistances don’t change with current; bilateral means they behave the same in either direction. Under those conditions, the voltage at A–B falls in a straight line as you draw more current, and a straight line needs only two numbers: where it starts (V<sub>th</sub>, at zero current) and its slope (R<sub>th</sub>). One source plus one resistor has exactly those two numbers.</p></div>
<div class="note why"><p>Why short a voltage source and open a current source: an ideal voltage source keeps its voltage whatever the current, so it behaves like zero resistance; an ideal current source keeps its current whatever the voltage, so it behaves like infinite resistance.</p></div>`
        },
        {
          title: 'Eight steps',
          html: `<p class="lead">To find the current I through R<sub>L</sub>: take R<sub>L</sub> out, find V<sub>th</sub> and R<sub>th</sub> of what is left, then put R<sub>L</sub> back on the simple equivalent.</p>
<figure data-fig="m1-thevenin-steps1"></figure>
<ol class="steps">
<li><b>Step 1</b> Mark and name the nodes if they are not given (C, D, A, B).</li>
<li><b>Step 2</b> Remove the load resistance R<sub>L</sub>, where the current is to be found, and redraw the circuit.</li>
<li><b>Step 3</b> Calculate the voltage across AB (hint: use loop current analysis). This open-circuit voltage is the Thevenin voltage <b>V<sub>TH</sub></b>.</li>
<li><b>Step 4</b> To find R<sub>TH</sub>, redraw the open circuit with the source short-circuited by its internal resistance r, and current sources open-circuited.</li>
<li><b>Step 5</b> Calculate the effective resistance looking back into the circuit from AB. This is <b>R<sub>TH</sub></b>.</li>
<li><b>Step 6</b> Draw the Thevenin equivalent circuit with R<sub>TH</sub> and V<sub>TH</sub>.</li>
<li><b>Step 7</b> Connect the removed R<sub>L</sub> in series with R<sub>TH</sub>.</li>
<li><b>Step 8</b> Calculate the load current I = V<sub>TH</sub>/(R<sub>TH</sub> + R<sub>L</sub>) A.</li>
</ol>
<figure data-fig="m1-thevenin-steps2"></figure>
<p>Looking back from AB, r and R<sub>1</sub> are in series, and that pair is in parallel with R<sub>2</sub>:</p>
<div class="eq">R<sub>TH</sub> = <span class="frac"><span>(R<sub>1</sub> + r) × R<sub>2</sub></span><span>(R<sub>1</sub> + r) + R<sub>2</sub></span></span> Ω</div>
<figure data-fig="m1-thevenin-steps3"></figure>
<div class="eq">I = <span class="frac"><span>V<sub>TH</sub></span><span>R<sub>TH</sub> + R<sub>L</sub></span></span> A</div>
<p>For this network, step 3 is quick: with A–B open, R<sub>1</sub>, r and R<sub>2</sub> form one loop, so V<sub>TH</sub> is the drop across R<sub>2</sub>: V<sub>TH</sub> = V<sub>1</sub> × R<sub>2</sub>/(R<sub>1</sub> + r + R<sub>2</sub>).</p>
<div class="note exam"><p>The big win: if the question asks for the load current for several values of R<sub>L</sub>, you find V<sub>TH</sub> and R<sub>TH</sub> once, and each R<sub>L</sub> is then a one-line division.</p></div>`
        },
        {
          title: 'Worked exercise',
          html: `<p class="lead">Find the current in a load connected between a and b using Thevenin’s theorem, for R<sub>L</sub> = 1 Ω and 2 Ω.</p>
<figure data-fig="m1-thevenin-ex"></figure>
<div class="worked">
<div class="given"><p>10 V source, 2 Ω to the first node; 4 Ω from that node to the bottom; 2 Ω on to node a; from a, 4 Ω in series with a 4 V source (+ at the top) to the bottom; R<sub>L</sub> between a and b. The course leaves the answer to you; here is the full working.</p></div>
<div class="solve">
<p><b>Remove R<sub>L</sub>.</b> Two loops remain. Loop 1 (10 V, 2 Ω, 4 Ω) carries I<sub>1</sub>, loop 2 (4 Ω, 2 Ω, 4 Ω, 4 V) carries I<sub>2</sub>, both clockwise:</p>
<div class="eq">6I<sub>1</sub> − 4I<sub>2</sub> = 10</div>
<div class="eq">−4I<sub>1</sub> + 10I<sub>2</sub> = −4</div>
<p>Δ = 60 − 16 = 44, so I<sub>2</sub> = (6 × (−4) + 4 × 10)/44 = 16/44 = 0.364 A and I<sub>1</sub> = (10 × 10 − 4 × 4)/44 = 84/44 = 1.909 A.</p>
<p><b>V<sub>th</sub></b> = voltage of a above b = drop in the 4 Ω plus the 4 V source on that branch:</p>
<div class="eq">V<sub>th</sub> = 4 × 0.364 + 4 = 5.455 V &nbsp; (60/11 V)</div>
<p><b>R<sub>th</sub></b>: short both sources. 2 Ω ∥ 4 Ω = 1.333 Ω; plus 2 Ω = 3.333 Ω; that in parallel with the 4 Ω at a:</p>
<div class="eq">R<sub>th</sub> = (3.333 × 4)/(3.333 + 4) = 1.818 Ω &nbsp; (20/11 Ω)</div>
<p><b>Load current</b>:</p>
<div class="eq">R<sub>L</sub> = 1 Ω: I = 5.455/(1.818 + 1) = 1.935 A</div>
<div class="eq">R<sub>L</sub> = 2 Ω: I = 5.455/(1.818 + 2) = 1.429 A</div>
</div>
<div class="result"><p><b>V<sub>th</sub> = 5.455 V</b>, <b>R<sub>th</sub> = 1.818 Ω</b>; I = <b>1.935 A</b> for 1 Ω and <b>1.429 A</b> for 2 Ω.</p></div>
</div>
<div data-viz="thevenin"></div>
<details class="more"><summary>Extra: maximum power to the load</summary>
<p>Power in the load is I<sup>2</sup>R<sub>L</sub> = V<sub>th</sub><sup>2</sup>R<sub>L</sub>/(R<sub>th</sub> + R<sub>L</sub>)<sup>2</sup>. It is largest when <b>R<sub>L</sub> = R<sub>th</sub></b> (the maximum power transfer theorem), and that maximum is V<sub>th</sub><sup>2</sup>/(4R<sub>th</sub>). For this circuit, R<sub>L</sub> = 1.818 Ω would draw the most power, 4.09 W.</p>
</details>`
        }
      ],
      flashcards: [
        { front: 'State Thevenin’s theorem.', back: 'In a linear, bilateral network, the current through a load R<sub>L</sub> across terminals A and B is I<sub>L</sub> = <b>V<sub>oc</sub>/(R<sub>in</sub> + R<sub>L</sub>)</b>, where V<sub>oc</sub> is the open-circuit voltage at A–B and R<sub>in</sub> the resistance seen back from A–B with sources replaced by their internal resistances.' },
        { front: 'When finding R<sub>th</sub>, what happens to voltage sources and current sources?', back: 'Voltage sources → <b>short circuit</b> (or their internal resistance). Current sources → <b>open circuit</b> (infinite resistance).' },
        { front: 'Course exercise (10 V, 2 Ω, 4 Ω, 2 Ω, 4 Ω + 4 V): V<sub>th</sub>, R<sub>th</sub>, and I for 1 Ω and 2 Ω?', back: 'V<sub>th</sub> = <b>5.455 V</b>, R<sub>th</sub> = <b>1.818 Ω</b>; I = <b>1.935 A</b> (1 Ω), <b>1.429 A</b> (2 Ω).' },
        { front: 'List the eight steps of applying Thevenin’s theorem.', back: '1 Name nodes. 2 Remove R<sub>L</sub>. 3 Find V<sub>TH</sub> across AB. 4 Short voltage sources (keep r), open current sources. 5 Find R<sub>TH</sub> looking back. 6 Draw V<sub>TH</sub> with R<sub>TH</sub>. 7 Reconnect R<sub>L</sub> in series. 8 I = V<sub>TH</sub>/(R<sub>TH</sub> + R<sub>L</sub>).' },
        { front: 'V<sub>1</sub> with internal r, series R<sub>1</sub>, R<sub>2</sub> across A–B. R<sub>TH</sub>?', back: 'R<sub>TH</sub> = (R<sub>1</sub> + r)R<sub>2</sub>/[(R<sub>1</sub> + r) + R<sub>2</sub>].' },
        { front: 'What is V<sub>oc</sub> (V<sub>th</sub>)?', back: 'The voltage across A and B with the load removed: the <b>open-circuit voltage</b>.' },
        { front: 'What do "linear" and "bilateral" mean here?', back: 'Linear: resistances don’t change with current or voltage. Bilateral: they behave the same in both directions.' },
        { front: 'Why does Thevenin save time for several load values?', back: 'V<sub>th</sub> and R<sub>th</sub> are found <b>once</b>; each new R<sub>L</sub> needs only I = V<sub>th</sub>/(R<sub>th</sub> + R<sub>L</sub>).' },
        { front: 'Extra: for what load is the power maximum?', back: '<b>R<sub>L</sub> = R<sub>th</sub></b>; P<sub>max</sub> = V<sub>th</sub><sup>2</sup>/(4R<sub>th</sub>).' }
      ],
      oneLiners: [
        'Thevenin equivalent = <b>V<sub>th</sub></b> in series with <b>R<sub>th</sub></b>.',
        'V<sub>th</sub> = <b>open-circuit voltage</b> at the load terminals.',
        'For R<sub>th</sub>: voltage sources <b>shorted</b>, current sources <b>opened</b>.',
        'Load current I<sub>L</sub> = <b>V<sub>th</sub>/(R<sub>th</sub> + R<sub>L</sub>)</b>.',
        'Applies to <b>linear, bilateral</b> networks.',
        'Course exercise: V<sub>th</sub> = <b>5.455 V</b>, R<sub>th</sub> = <b>1.818 Ω</b>.',
        'Extra: maximum power when <b>R<sub>L</sub> = R<sub>th</sub></b>.'
      ],
      formulas: [
        { name: 'Thevenin load current', html: `I<sub>L</sub> = V<sub>th</sub>/(R<sub>th</sub> + R<sub>L</sub>)`, note: 'V<sub>th</sub> = V<sub>oc</sub>, R<sub>th</sub> = R<sub>in</sub>.' },
        { name: 'R<sub>TH</sub> of the course network', html: `R<sub>TH</sub> = (R<sub>1</sub> + r)R<sub>2</sub>/[(R<sub>1</sub> + r) + R<sub>2</sub>]`, note: 'Source replaced by its internal resistance r.' },
        { name: 'Maximum power (Extra)', html: `R<sub>L</sub> = R<sub>th</sub>, &nbsp; P<sub>max</sub> = V<sub>th</sub><sup>2</sup>/(4R<sub>th</sub>)`, note: 'Maximum power transfer theorem.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm1-superposition',
      title: 'Superposition theorem',
      short: 'Superposition',
      blurb: 'With several sources, find the current each source makes on its own (others replaced by their internal resistances) and add them up.',
      source: 'Pages 25–26',
      tabs: [
        {
          title: 'The theorem',
          html: `<p class="lead">In a network of <b>linear resistances</b> containing <b>more than one generator</b> (source of emf), the current at any point is the <b>sum of the currents</b> that would flow there if each generator were considered <b>separately</b>, with all the other generators replaced for the time being by resistances <b>equal to their internal resistances</b>.</p>
<figure data-fig="m1-superposition-circuit"></figure>
<ol class="steps">
<li><b>Keep one source</b> Leave one generator in; replace every other generator by its internal resistance.</li>
<li><b>Solve</b> Find the current in the branch you want (series–parallel and current division are usually enough).</li>
<li><b>Repeat</b> Do the same for each generator in turn.</li>
<li><b>Add</b> Add the currents, minding direction: same direction add, opposite directions subtract.</li>
</ol>
<div class="note why"><p>It works because the network is linear: double a source and every current it causes doubles. In a linear system the effects of separate causes simply add. A non-linear element (a diode, a lamp whose resistance changes as it heats) breaks this.</p></div>
<div class="note trap"><p>Superposition adds <b>currents and voltages</b>, never powers. Power goes as I<sup>2</sup>, and (I′ + I″)<sup>2</sup> is not I′<sup>2</sup> + I″<sup>2</sup>. Find the total current first, then the power.</p></div>`
        },
        {
          title: 'Two-source example',
          html: `<p class="lead">The course figure (6 V with 0.5 Ω, 12 V with 1 Ω, 2.5 Ω and 2 Ω to node A, 6 Ω from A to B) is not solved in the course material. Working it through shows the method clearly.</p>
<details class="more"><summary>Extra: current I in the 6 Ω by superposition</summary>
<div class="worked">
<div class="given"><p>Both sources have + at the top, as drawn. Left branch: 0.5 + 2.5 = 3 Ω. Right branch: 1 + 2 = 3 Ω. Middle: 6 Ω.</p></div>
<div class="solve">
<p><b>6 V alone</b> (12 V replaced by its 1 Ω): the right branch 3 Ω is in parallel with 6 Ω, giving 2 Ω.</p>
<div class="eq">I = 6/(3 + 2) = 1.2 A; &nbsp; I′<sub>6Ω</sub> = 1.2 × 3/(3 + 6) = 0.4 A</div>
<p><b>12 V alone</b> (6 V replaced by its 0.5 Ω): the same shape from the other side.</p>
<div class="eq">I = 12/(3 + 2) = 2.4 A; &nbsp; I″<sub>6Ω</sub> = 2.4 × 3/(3 + 6) = 0.8 A</div>
<p>Both push current down through the 6 Ω from A to B, so they add.</p>
</div>
<div class="result"><p><b>I = 0.4 + 0.8 = 1.2 A</b> from A to B. Then V<sub>AB</sub> = 7.2 V, I<sub>2</sub> = 1.6 A, and I<sub>1</sub> = −0.4 A: the 12 V source is actually charging the 6 V one.</p></div>
</div>
</details>
<div class="note exam"><p>Always draw a fresh small circuit for each source with the others replaced. Marks are given for those sub-circuits as much as for the final number.</p></div>`
        },
        {
          title: 'Exercise',
          html: `<p class="lead">Find the current through R by superposition, where R<sub>1</sub> = 0.005 Ω, R<sub>2</sub> = 0.004 Ω, R = 1 Ω, V<sub>1</sub> = 2.05 V and V<sub>2</sub> = 2.15 V. Answer given in the course: <b>2.06 A</b>.</p>
<figure data-fig="m1-superposition-ex"></figure>
<div class="worked">
<div class="given"><p>Two cells in parallel between A and B (both + towards B): 2.05 V with 0.005 Ω, and 2.15 V with 0.04 Ω (the value in the figure). Load R = 1 Ω across A–B.</p></div>
<div class="solve">
<p><b>2.05 V cell alone</b>: 0.04 Ω ∥ 1 Ω = 0.0385 Ω; total 0.005 + 0.0385 = 0.0435 Ω.</p>
<div class="eq">I = 2.05/0.0435 = 47.17 A; &nbsp; I′<sub>R</sub> = 47.17 × 0.04/1.04 = 1.814 A</div>
<p><b>2.15 V cell alone</b>: 0.005 Ω ∥ 1 Ω = 0.00498 Ω; total 0.04 + 0.00498 = 0.04498 Ω.</p>
<div class="eq">I = 2.15/0.04498 = 47.80 A; &nbsp; I″<sub>R</sub> = 47.80 × 0.005/1.005 = 0.238 A</div>
<p>Both cells send their share through R in the same direction (B to A), so the shares add.</p>
</div>
<div class="result"><p><b>I<sub>R</sub> = 1.814 + 0.238 = 2.05 A</b> (≈ 2.06 A as printed).</p></div>
</div>
<div class="note heads-up"><p>The question text says R<sub>2</sub> = 0.004 Ω, but the figure shows 0.04 Ω. The printed answer matches the figure: with 0.04 Ω the current works out to 2.052 A, i.e. 2.05 A; the printed 2.06 A is a small slip. With 0.004 Ω it would be 2.10 A. The answer is also labelled I<sub>1</sub>; it is the current through R.</p></div>
<div class="note why"><p>Each cell’s own big current mostly flows round through the other cell (tiny resistances), and only a small share goes through the 1 Ω. That is why the shares are 1.8 A and 0.24 A out of about 47 A. In the full circuit the 2.15 V cell supplies 2.45 A and the 2.05 V cell takes in 0.40 A, i.e. it is being charged.</p></div>`
        }
      ],
      flashcards: [
        { front: 'State the superposition theorem.', back: 'In a network of linear resistances with more than one generator, the current at any point is the <b>sum of the currents</b> due to each generator acting <b>separately</b>, the others replaced by their <b>internal resistances</b>.' },
        { front: 'Superposition exercise (2.05 V/0.005 Ω, 2.15 V/0.04 Ω, R = 1 Ω): current in R?', back: '1.814 A + 0.238 A = <b>2.05 A</b> (printed 2.06 A).' },
        { front: 'Can you find power by superposition?', back: '<b>No.</b> Power goes as I<sup>2</sup>. Add the currents first, then find power.' },
        { front: 'What replaces the other sources while one acts alone?', back: 'Resistances <b>equal to their internal resistances</b> (an ideal voltage source becomes a short circuit).' },
        { front: 'Why does superposition need a linear network?', back: 'Only then is each current proportional to its cause, so the effects of separate sources simply add.' },
        { front: 'Two contributions flow in opposite directions in a branch. Net current?', back: 'The <b>difference</b>, in the direction of the larger one.' },
        { front: 'Course figure (6 V/0.5 Ω, 2.5 Ω; 12 V/1 Ω, 2 Ω; 6 Ω middle): current in 6 Ω (Extra working)?', back: '0.4 A (6 V) + 0.8 A (12 V) = <b>1.2 A</b>.' }
      ],
      oneLiners: [
        'Superposition: total current = <b>sum of currents</b> from each source alone.',
        'Other sources are replaced by their <b>internal resistances</b>.',
        'Needs <b>linear</b> resistances.',
        'Add currents and voltages, <b>never powers</b>.',
        'Course exercise: I<sub>R</sub> = <b>2.05 A</b> (printed 2.06 A) with R<sub>2</sub> = 0.04 Ω.'
      ],
      formulas: [
        { name: 'Superposition', html: `I = I′ + I″ + …`, note: 'Each term from one source alone, with signs for direction.' },
        { name: 'Share through R (two cells in parallel)', html: `I′<sub>R</sub> = <span class="frac"><span>E<sub>1</sub></span><span>R<sub>1</sub> + (R<sub>2</sub>∥R)</span></span> × <span class="frac"><span>R<sub>2</sub></span><span>R<sub>2</sub> + R</span></span>`, note: 'Series–parallel, then current division.' }
      ]
    }
  ],
  figures: [
    { id: 'm1-bridge-network', src: 'own/README.txt', crop: null, caption: 'An unbalanced bridge between A and B: 10 Ω and 20 Ω arms with 10 Ω across C–D.', alt: 'Diamond of four resistors from A through C and D to B, with a fifth resistor from C to D.' },
    { id: 'm1-kcl-node', src: 'm1/pages/p02.png', crop: null, caption: 'Node a: I₁ enters, while I₂, I₃ and I₄ all leave. KCL says the in-flow equals the total out-flow.', alt: 'Battery V feeding R1 into node a; from a, I2 goes up to R5, I3 down through R2 and I4 right through R4, with R6, R3 and R7 further right.' },
    { id: 'm1-kvl-loop', src: 'm1/pages/p03.png', crop: null, caption: 'Loop abcda (red) runs through R₂, the bottom wire, the battery and R₁. KVL: the battery voltage equals the two drops.', alt: 'The same network with nodes d, a, b, c marked and a clockwise loop current I1 drawn inside the loop formed by the battery, R1 and R2.' },
    { id: 'm1-series-tie', src: 'm1/pages/p04.png', crop: null, caption: 'Series: the − end of R₁ is tied to the + end of R₂ (alternate polarities). Panels (a) and (b) are both series.', alt: 'Two drawings of R1 and R2 with plus and minus ends; a red wire joins opposite polarities in each.' },
    { id: 'm1-parallel-tie', src: 'm1/pages/p06.png', crop: null, caption: 'Parallel: both + ends go to one terminal and both − ends to the other (same polarities tied).', alt: 'R1 and R2 with their plus ends joined by a red wire to a plus terminal and their minus ends joined by a blue wire to a minus terminal.' },
    { id: 'm1-series-circuit', src: 'm1/pages/p05.png', crop: null, caption: 'One current I through R₁, R₂, R₃ in turn; the supply V splits into V₁ + V₂ + V₃.', alt: 'Battery V driving current I through R1, R2 and R3 in series, with voltage drops V1, V2, V3 marked under each resistor.' },
    { id: 'm1-series-staircase', src: 'm1/pages/p05.png', crop: null, caption: 'Potential along the series chain: a drop across each resistor, flat along each wire, from A down to D.', alt: 'Graph of V against R falling from A to D in three sloping steps V1, V2, V3 separated by flat parts at B and C.' },
    { id: 'm1-parallel-circuit', src: 'm1/pages/p07.png', crop: null, caption: 'The same V across R₁, R₂, R₃; the supply current I splits into I₁, I₂, I₃.', alt: 'Battery V with three branches R1, R2, R3 between the same two nodes, branch currents I1, I2, I3 and total current I.' },
    { id: 'm1-series-parallel-circuit', src: 'm1/pages/p08.png', crop: null, caption: 'R₃∥R₄∥R₅ in series with R₁, that branch in parallel with R₂, and the whole lot in series with R₆.', alt: 'Circuit with R2 across the top, R1 feeding three parallel resistors R3, R4, R5, R6 in the return path and battery V; currents I, I1 to I5 marked.' },
    { id: 'm1-source-conversion', src: 'm1/pages/p09.png', crop: null, caption: 'E<sub>s</sub> with R<sub>s</sub> in series is equivalent to I<sub>s</sub> = E<sub>s</sub>/R<sub>s</sub> with R<sub>s</sub> in parallel; R<sub>L</sub> sees the same V<sub>L</sub>.', alt: 'Top: voltage source Es, series resistor Rs and load RL with voltage VL. Bottom: current source Is with Rs and RL in parallel. A double arrow joins them.' },
    { id: 'm1-current-division', src: 'm1/pages/p09.png', crop: null, caption: 'I splits at the node between R₂ (I₂) and R₃ (I₁). R₁ is before the split.', alt: 'Battery V, series R1 carrying I to a node, then R2 down carrying I2 and R3 to the right carrying I1.' },
    { id: 'm1-loop-node-terms', src: 'm1/pages/p10.png', crop: null, caption: 'Orange dots are nodes; blue arrows are loops (closed current paths).', alt: 'Resistor network between terminals A and B (1, 10, 2, 5, 3, 5 and 1.5 kilo-ohm) with nodes marked by dots and three loops by circular arrows.' },
    { id: 'm1-mesh-circuit', src: 'm1/pages/p12.png', crop: null, caption: 'Nodes a to h and three clockwise loop currents. Shared resistors (3 Ω, 2 Ω, 1 Ω in the middle) carry two loop currents.', alt: '5 V source with 1 ohm top left, 3 ohm and 2 ohm in the middle column, 2 ohm and 4 ohm on the right and 1 ohm between h and d; loop currents I1, I2, I3.' },
    { id: 'm1-mesh-ex1', src: 'm1/pages/p14.png', crop: null, caption: 'Class assignment Ex. 1: two sources (10 V and 2 V), three loops.', alt: '10 V source with 4 ohm on the left, 4 ohm across the top, 2 ohm to a middle node, 2 V source to the right node, 6 ohm and 1 ohm to the bottom.' },
    { id: 'm1-mesh-ex2', src: 'm1/pages/p14.png', crop: null, caption: 'Class assignment Ex. 2: a bridge on 54 V; the 4 Ω is the bridge arm.', alt: '54 V source across a diamond of 3, 14, 11 and 3 ohm resistors with a 4 ohm across the middle.' },
    { id: 'm1-mesh-ex3', src: 'm1/pages/p14.png', crop: null, caption: 'Class assignment Ex. 3: two columns on 24 V joined by a 4 Ω.', alt: '24 V source feeding 10 ohm over 12 ohm and 24 ohm over 4 ohm, with 4 ohm between the midpoints.' },
    { id: 'm1-nodal-circuit', src: 'm1/pages/p16.png', crop: null, caption: 'Nodes a and b, reference node c (grounded), and the five assumed currents I₁ to I₅.', alt: '10 V source, 5 ohm to node a, 15 ohm from a to ground, 10 ohm from a to b, 8 ohm from b to ground, 12 ohm from b to a 6 V source; current arrows I1 to I5.' },
    { id: 'm1-nodal-graph', src: 'm1/pages/p16.png', crop: null, caption: 'The graph: only nodes a, b, c and the resistances joining them.', alt: 'Three nodes a, b, c joined by 5 and 15 ohm (a to c), 10 ohm (a to b), 8 and 12 ohm (b to c).' },
    { id: 'm1-nodal-ex1', src: 'm1/pages/p19.png', crop: null, caption: 'Nodal Ex. 1: two voltage sources; note the 5 V source has − at the top.', alt: '15 V and 5 V sources with 3.3 kilo-ohm on top, 1.2 and 2.2 kilo-ohm to a middle node, 470 and 330 ohm down, and 100 kilo-ohm along the bottom.' },
    { id: 'm1-nodal-ex2', src: 'm1/pages/p19.png', crop: null, caption: 'Nodal Ex. 2: two current sources, three nodes a, b, c.', alt: '1.5 A source into node a and 1 A into node c; 5, 20, 10 ohm to ground; 4 ohm between a and b and 2 ohm between b and c.' },
    { id: 'm1-nodal-ex3', src: 'm1/pages/p19.png', crop: null, caption: 'Nodal Ex. 3: a 3 A source between two nodes and 2 A drawn out of the right node.', alt: '3 A source from the left node to the middle node, 7 and 4 ohm to the bottom, 8 ohm to the right node, 3 ohm across the top and a 2 A source pointing down at the right.' },
    { id: 'm1-nodal-ex4', src: 'm1/pages/p19.png', crop: null, caption: 'Nodal Ex. 4: node voltages V₁ and V₂ with ground at V = 0.', alt: '4 A source into V1, 5 ohm from V1 to V2, 2 ohm from each node to ground, 2 ohm from V2 to a 28 V source; currents I1 to I4.' },
    { id: 'm1-nodal-ex5', src: 'm1/pages/p19.png', crop: null, caption: 'Nodal Ex. 5: two sources, each with 1 Ω, feeding a triangle of resistors.', alt: '15 V and 20 V sources with 1 ohm each to two top nodes, 0.5 ohm between them, 1 ohm and 2 ohm from the top nodes to the bottom node; currents I1 to I5.' },
    { id: 'm1-thevenin-idea', src: 'm1/pages/p20.png', crop: null, caption: 'Any linear network seen from A–B (top) behaves like V<sub>th</sub> in series with R<sub>th</sub> (bottom).', alt: 'Top: V1, R1, R3 and R2 leading to open terminals A and B with VAB marked. Bottom: a source Vth in series with Rth to terminals A and B.' },
    { id: 'm1-thevenin-steps1', src: 'm1/pages/p21.png', crop: null, caption: 'The original circuit with R<sub>L</sub> and current I, and the same circuit with R<sub>L</sub> removed (step 2).', alt: 'Source V1 with internal resistance r, R1 to node C, R2 from C to D, and RL across A and B; below, the same circuit with A and B left open.' },
    { id: 'm1-thevenin-steps2', src: 'm1/pages/p22.png', crop: null, caption: 'Steps 4–5: the source replaced by its internal resistance r; look back in from A–B to find R<sub>TH</sub>.', alt: 'Resistor r in place of the source, R1 to node C, R2 from C to D, open terminals A and B and an arrow looking into the circuit.' },
    { id: 'm1-thevenin-steps3', src: 'm1/pages/p23.png', crop: null, caption: 'Steps 6–8: V<sub>Th</sub> in series with R<sub>TH</sub>, with R<sub>L</sub> reconnected; I = V<sub>TH</sub>/(R<sub>TH</sub> + R<sub>L</sub>).', alt: 'Source Vth in series with Rth and load RL between A and B, current I flowing down through RL.' },
    { id: 'm1-thevenin-ex', src: 'm1/pages/p24.png', crop: null, caption: 'Thevenin exercise: find the current in R<sub>L</sub> (1 Ω and 2 Ω) between a and b.', alt: '10 V source, 2 ohm, node with 4 ohm to ground, 2 ohm to node a, 4 ohm with a 4 V source from a to ground, and RL from a to b.' },
    { id: 'm1-superposition-circuit', src: 'm1/pages/p25.png', crop: null, caption: 'Two sources with internal resistances feeding the 6 Ω between A and B; I₁, I₂ and I as drawn.', alt: '6 V source with 0.5 ohm on the left, 12 V with 1 ohm on the right, 2.5 ohm and 2 ohm to node A, and 6 ohm from A to B.' },
    { id: 'm1-superposition-ex', src: 'm1/pages/p26.png', crop: null, caption: 'Superposition exercise: two cells in parallel across A–B feeding R = 1 Ω. The figure gives 0.04 Ω for the second cell.', alt: 'Top branch 0.005 ohm and a 2.05 V cell, middle branch 0.04 ohm and a 2.15 V cell, both between A and B with plus towards B; R of 1 ohm across A and B.' }
  ]
});
