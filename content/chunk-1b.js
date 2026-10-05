CHUNK({
  chunk: '1b',
  module: 'm1',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'm1-ac-basics',
      title: 'AC fundamentals: waveform terms',
      short: 'AC waveform terms',
      blurb: 'The words you need to describe a sine wave: cycle, time period, frequency, amplitude, phase and phase difference (lead and lag).',
      source: 'Pages 27–29',
      tabs: [
        {
          title: 'Waveform & cycle',
          html: `<p class="lead">An alternating quantity keeps changing its size and direction. The mains supply does it smoothly, as a <b>sine wave</b>: A(t) = A<sub>m</sub> sin(ωt).</p>
<figure data-fig="m1-ac-sine-wave"></figure>
<h3>Cycle</h3>
<p>One complete set of positive and negative values of an alternating quantity is called a <b>cycle</b>. In angular measure one cycle spreads over <b>360° or 2π radian</b>, so half a cycle is 180° (π rad).</p>
<h3>What the graph shows</h3>
<ul>
<li><b>Instantaneous value</b> (e): the value at one particular instant or angle θ.</li>
<li><b>+A<sub>max</sub> and −A<sub>max</sub></b>: the positive and negative peaks, reached at π/2 and 3π/2.</li>
<li><b>Peak-to-peak value</b> A<sub>pk-pk</sub>: from the positive peak to the negative peak, so 2A<sub>max</sub>.</li>
<li><b>Periodic time (T)</b>: the time for one full cycle, 0 to 2π.</li>
<li>With A<sub>max</sub> = 1: A<sub>rms</sub> = A<sub>max</sub> × <b>0.707</b> and A<sub>avg</sub> = A<sub>max</sub> × <b>0.636</b>. Both are worked out in the next topic.</li>
</ul>
<div class="note why"><p>Why a sine wave: a coil turning at steady speed in a magnetic field cuts flux at a rate that goes as sin θ, so generators naturally produce this shape. Every value in this topic comes from that one equation.</p></div>
<div class="note heads-up"><p>The graph rounds the average factor to 0.636. The derivation on the next topic gives 2/π = 0.6366, which the course writes as <b>0.637</b>. Use 0.637 in calculations.</p></div>`
        },
        {
          title: 'Period, frequency, amplitude',
          html: `<p class="lead">Time period says how long one cycle takes, frequency says how many cycles fit in a second, and amplitude says how big the wave gets.</p>
<div class="kv">
<div><span>Time period (T)</span><b>time for one set of + and − values</b></div>
<div><span>Frequency (f)</span><b>f = 1/T</b> cycles per second or Hz</div>
<div><span>Amplitude (A)</span><b>instantaneous peak value</b>, + or −</div>
<div><span>Peak amplitude (A<sub>m</sub>)</span><b>maximum peak value</b>, + or −</div>
</div>
<ul>
<li><b>Time period (T):</b> time taken to complete one set of positive and negative values of the alternating quantity.</li>
<li><b>Frequency (f):</b> the inverse of time period, f = 1/T. It is the <b>number of cycles per second</b>, measured in hertz (Hz).</li>
<li><b>Amplitude (A):</b> the instantaneous peak value, positive or negative, of an alternating quantity.</li>
<li><b>Peak amplitude (A<sub>m</sub>):</b> the maximum peak value, positive or negative, of an alternating quantity.</li>
</ul>
<p>Angular frequency ties the two together: <b>ω = 2πf</b> rad/s. That is why 50 Hz mains gives sin 314t (2π × 50 = 314.16).</p>
<div class="note example"><p>At 50 Hz, T = 1/50 = <b>20 ms</b>. A quarter cycle (0 to the peak) takes 5 ms.</p></div>
<div class="note trap"><p>In most textbooks "amplitude" simply means the peak value V<sub>m</sub>. The course splits it into amplitude and peak amplitude; if asked, write both definitions as given above.</p></div>`
        },
        {
          title: 'Phase',
          html: `<p class="lead">Phase tells you where in its cycle a wave is at a given instant. The easiest way to see it is a rotating arrow, the phasor.</p>
<figure data-fig="m1-ac-phase"></figure>
<ul>
<li>A line of length <b>I<sub>m</sub></b> rotates anticlockwise at angular speed <b>ω</b>.</li>
<li>When it has turned through angle θ, its vertical projection is <b>i = I<sub>m</sub> sin θ</b>. Plot that projection against θ and you get the sine wave.</li>
<li>At θ = 90° the phasor is vertical, so i = I<sub>m</sub> (the peak). At π it is back to zero, at 3π/2 it is −I<sub>m</sub>, at 2π one <b>cycle</b> is complete.</li>
<li>The angle θ the phasor has turned from the reference line is the <b>phase</b> of the quantity at that instant.</li>
</ul>
<div class="note why"><p>This is why AC circuits are solved with phasors. Adding two rotating arrows is much easier than adding two sine waves point by point, and the result is the same.</p></div>`
        },
        {
          title: 'Phase difference',
          html: `<p class="lead">Two waves of the same frequency can be out of step. The angle between them, <b>φ</b>, is the phase difference, and it stays fixed because both phasors rotate at the same ω.</p>
<figure data-fig="m1-ac-phase-diff"></figure>
<ul>
<li>Phasor I<sub>m1</sub> sits <b>φ ahead</b> of I<sub>m2</sub>, so i<sub>1</sub> reaches its zero, its peak and everything else φ earlier than i<sub>2</sub>.</li>
<li>You can measure φ between the two peaks or between the two zero crossings; it is the same angle.</li>
<li>The horizontal axis can be time t or angle θ (θ = ωt).</li>
</ul>
<figure data-fig="m1-ac-lead-lag"></figure>
<div class="vs">
<div class="side"><h4>Phase lead</h4><p>Phase-2 reaches its peak <b>φ degrees before</b> Phase-1: Phase-2 leads by φ.</p></div>
<div class="side"><h4>Phase lag</h4><p>Phase-2 reaches its peak <b>φ degrees after</b> Phase-1: Phase-2 lags by φ.</p></div>
</div>
<div data-viz="ac-wave"></div>
<div class="note heads-up"><p>In the course sketch the phasor diagram shows I<sub>m1</sub> leading, but the waveform drawn as i<sub>1</sub> starts after i<sub>2</sub>. The redrawn figure keeps the phasors and fixes the waves so i<sub>1</sub> leads, matching i<sub>1</sub> = I<sub>m1</sub> sin(ωt + φ).</p></div>
<div class="note exam"><p>Draw both waves on one axis, mark φ between matching zero crossings, and write which one leads. In a series RL circuit current lags voltage; in an RC circuit it leads.</p></div>`
        }
      ],
      flashcards: [
        { front: 'What is one cycle of an alternating quantity?', back: 'One complete set of positive and negative values. In angular measure it spreads over <b>360° or 2π rad</b>.' },
        { front: 'How are frequency and time period related?', back: '<b>f = 1/T</b>, in cycles per second (Hz). Frequency is the number of cycles per second. At 50 Hz, T = 20 ms.' },
        { front: 'What is phase difference?', back: 'The fixed angle <b>φ</b> between two alternating quantities of the same frequency. The one that reaches its peak (or zero) first <b>leads</b>; the other <b>lags</b>.' },
        { front: 'Define time period T.', back: 'Time taken to complete one set of positive and negative values of the alternating quantity.' },
        { front: 'Amplitude vs peak amplitude (as defined in the course)?', back: 'Amplitude: the <b>instantaneous peak value</b>, + or −. Peak amplitude A<sub>m</sub>: the <b>maximum peak value</b>, + or −.' },
        { front: 'How does a rotating phasor give a sine wave?', back: 'A line of length I<sub>m</sub> rotates at ω; its vertical projection at angle θ is <b>i = I<sub>m</sub> sin θ</b>.' },
        { front: 'What is the peak-to-peak value of a sine wave?', back: 'From +A<sub>max</sub> to −A<sub>max</sub>: <b>2A<sub>max</sub></b>.' },
        { front: 'Write ω in terms of f. What is it for 50 Hz?', back: '<b>ω = 2πf</b>; 2π × 50 = <b>314</b> rad/s.' },
        { front: 'Equation of a wave that leads A<sub>m</sub> sin ωt by φ?', back: '<b>A<sub>m</sub> sin(ωt + φ)</b>. A lagging wave is A<sub>m</sub> sin(ωt − φ).' }
      ],
      oneLiners: [
        'One cycle = <b>360° = 2π rad</b>.',
        'Frequency <b>f = 1/T</b> Hz; ω = 2πf rad/s.',
        'Sine wave: <b>A(t) = A<sub>m</sub> sin(ωt)</b>.',
        'Peak at <b>π/2</b>, zero at π, negative peak at 3π/2.',
        'Peak-to-peak = <b>2 × peak</b>.',
        'Phase difference is the <b>fixed angle φ</b> between two same-frequency waves.',
        'The wave that peaks first <b>leads</b>; the other lags.'
      ],
      formulas: [
        { name: 'Sinusoid', html: `A(t) = A<sub>m</sub> sin(ωt)`, note: 'Instantaneous value at angle θ = ωt.' },
        { name: 'Frequency and period', html: `f = 1/T`, note: 'Hz (cycles per second).' },
        { name: 'Angular frequency', html: `ω = 2πf`, note: 'rad/s; 314 rad/s at 50 Hz.' },
        { name: 'Leading / lagging wave', html: `i = I<sub>m</sub> sin(ωt ± φ)`, note: '+φ leads, −φ lags.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm1-ac-values',
      title: 'Average and RMS values',
      short: 'Average & RMS values',
      blurb: 'What RMS really means (the heating test), the mid-ordinate and analytical methods, form factor and peak factor, and the worked example and exercises on instantaneous values.',
      source: 'Pages 30–34',
      tabs: [
        {
          title: 'RMS: the heating idea',
          html: `<p class="lead">The RMS value of an AC current is the <b>steady DC current that heats a resistor exactly as much</b> as the AC does in the same time.</p>
<p>Course definition: the RMS value of an alternating current is that steady DC current (I) which, flowing through <b>one ohm resistance</b> for a given time of t seconds, produces the <b>same amount of heat</b> as the alternating current (i) for the same time t seconds.</p>
<figure data-fig="m1-ac-rms-test"></figure>
<ol class="steps">
<li><b>DC test</b> A variable DC source V drives current I through a 1 Ω heater, with a wattmeter W and ammeter A in the circuit.</li>
<li><b>AC test</b> The same heater is fed from an AC source E.</li>
<li><b>Match the heat</b> Adjust until both give the same heat in time t. The DC current then equals the RMS value of the AC current.</li>
</ol>
<div class="note why"><p>Heat depends on i<sup>2</sup>R, so the sign of the current does not matter. That is why we square the values, take their mean, then the square root: <b>root of the mean of the squares</b>. A plain average of a full sine wave would be zero and tells you nothing about heating.</p></div>
<div class="note example"><p>"230 V mains" is an RMS value. Its peak is 230 × 1.414 ≈ 325 V.</p></div>`
        },
        {
          title: 'Mid-ordinate method',
          html: `<p class="lead">Two ways to calculate the values: (i) the <b>mid-ordinate method</b> and (ii) the <b>analytical method</b>. The first one just samples the wave.</p>
<figure data-fig="m1-ac-mid-ordinate"></figure>
<p>Divide the half cycle (0 to π) into n equal parts and read the height at the middle of each part: V<sub>1</sub>, V<sub>2</sub>, … V<sub>n</sub>, the <b>equally spaced mid-ordinates</b>.</p>
<div class="eq" data-label="Average">V<sub>av</sub> = <span class="frac"><span>V<sub>1</sub> + V<sub>2</sub> + V<sub>3</sub> + V<sub>4</sub> + … + V<sub>n</sub></span><span>n</span></span></div>
<div class="eq" data-label="RMS">V<sub>rms</sub> = √<span class="frac"><span>V<sub>1</sub><sup>2</sup> + V<sub>2</sub><sup>2</sup> + V<sub>3</sub><sup>2</sup> + … + V<sub>n</sub><sup>2</sup></span><span>n</span></span></div>
<div class="note why"><p>The method works for any wave shape, even one you only have as a graph. More ordinates means a better answer; with infinitely many it becomes the integral of the analytical method.</p></div>
<div class="note trap"><p>Average is taken over a <b>half cycle</b>. Over a full cycle the positive and negative halves cancel and the average of a sine wave is zero.</p></div>`
        },
        {
          title: 'Analytical method',
          html: `<p class="lead">Integrate the wave instead of sampling it. Average uses v over a half cycle; RMS uses v<sup>2</sup> over a full cycle.</p>
<h3>Average value (1)</h3>
<div class="eq">V<sub>av</sub> = (1/π) ∫<sub>0</sub><sup>π</sup> V<sub>m</sub> sin θ dθ</div>
<div class="eq">= (V<sub>m</sub>/π) [−cos θ]<sub>0</sub><sup>π</sup> = (V<sub>m</sub>/π) {−cos π + cos 0}</div>
<div class="eq">= (V<sub>m</sub>/π) {1 + 1} = 2V<sub>m</sub>/π = <b>0.637 V<sub>m</sub></b></div>
<h3>RMS value (2)</h3>
<div class="eq">V<sub>rms</sub><sup>2</sup> = (1/2π) ∫<sub>0</sub><sup>2π</sup> V<sub>m</sub><sup>2</sup> sin<sup>2</sup>θ dθ</div>
<div class="eq">use sin<sup>2</sup>θ = (1 − cos 2θ)/2</div>
<div class="eq">= (V<sub>m</sub><sup>2</sup>/4π) [θ − (sin 2θ)/2]<sub>0</sub><sup>2π</sup> = (V<sub>m</sub><sup>2</sup>/4π)(2π) = V<sub>m</sub><sup>2</sup>/2</div>
<div class="eq">V<sub>rms</sub> = V<sub>m</sub>/√2 = <b>0.707 V<sub>m</sub></b></div>
<div class="note heads-up"><p>In the course material the "RMS value" block (2) is a copy of the average working: it writes V<sub>av</sub> = (1/2π)∫V<sub>m</sub><sup>2</sup> sin θ dθ and ends at 2V<sub>m</sub>/π = 0.637 V<sub>m</sub>. That is the average, not the RMS. The correct working is above and gives <b>0.707 V<sub>m</sub></b>, which is also the value the course itself uses in the waveform graph and in the form factor.</p></div>
<div class="note why"><p>The sin 2θ term vanishes over a full cycle, so only the constant half survives. That "half" is where the √2 comes from.</p></div>`
        },
        {
          title: 'Form & peak factor',
          html: `<p class="lead">Two ratios describe the shape of a wave. For a sine wave they are fixed numbers: <b>1.11</b> and <b>1.414</b>.</p>
<div class="eq" data-label="Form factor">K<sub>f</sub> = <span class="frac"><span>rms value</span><span>average value</span></span> = <span class="frac"><span>0.707 I<sub>m</sub></span><span>0.637 I<sub>m</sub></span></span> = <b>1.11</b></div>
<div class="eq" data-label="Crest / peak / amplitude factor">K<sub>a</sub> = <span class="frac"><span>maximum value</span><span>rms value</span></span> = <span class="frac"><span>I<sub>m</sub></span><span>I<sub>m</sub>/√2</span></span> = <b>1.414</b></div>
<div class="kv">
<div><span>Average (half cycle)</span><b>0.637 × peak</b></div>
<div><span>RMS</span><b>0.707 × peak</b></div>
<div><span>Form factor K<sub>f</sub></span><b>1.11</b></div>
<div><span>Crest factor K<sub>a</sub></span><b>1.414</b></div>
</div>
<p>The crest factor goes by three names: <b>crest, peak or amplitude factor</b>.</p>
<div class="note why"><p>A peakier wave has a larger crest factor, so insulation has to stand a higher peak for the same RMS. A flatter wave (a square wave) has both factors equal to 1.</p></div>
<div class="note exam"><p>These factors hold only for a pure sine wave. In a numerical, get V<sub>m</sub> from RMS with V<sub>m</sub> = √2 V<sub>rms</sub> before doing anything else.</p></div>`
        },
        {
          title: 'Worked example',
          html: `<p class="lead">A sinusoidal current, 50 Hz, RMS value 20 A. Write the equation and find the current at set times after the positive maximum.</p>
<figure data-fig="m1-ac-example-wave"></figure>
<div class="worked">
<div class="given"><p>f = 50 Hz, I<sub>rms</sub> = 20 A. Find i at (i) 0.0025 s and (ii) 0.0125 s after passing through the positive maximum, and (iii) the time from the positive maximum at which i = 14.14 A.</p></div>
<div class="solve">
<div class="eq">I<sub>m</sub> = √2 × 20 = 28.28 A, ω = 2π × 50 = 314.16 rad/s</div>
<div class="eq">i = 28.28 sin 314t A</div>
<p>Counting time from the positive peak, the wave is a cosine: i = 28.28 cos ωt′.</p>
<p>(i) ωt′ = 314.16 × 0.0025 = 0.785 rad = 45°: i = 28.28 cos 45° = <b>20 A</b> (point B).</p>
<p>(ii) ωt′ = 314.16 × 0.0125 = 3.93 rad = 225°: i = 28.28 cos 225° = <b>−20 A</b> (point C).</p>
<p>(iii) 14.14 = 28.28 cos θ → cos θ = 0.5 → θ = 60° = π/3 rad, t′ = (π/3)/314.16 = <b>3.33 ms</b> (point D).</p>
</div>
<div class="result"><p>i = 28.28 sin 314t A; (i) 20 A; (ii) −20 A; (iii) 3.33 ms</p></div>
</div>
<div class="note heads-up"><p>The printed solution is garbled: its line "at t = 0.0025 s" actually computes the 0.0125 s case (28.2 cos(2π × 50) × 0.0125 = −20 A), and it writes "I<sub>m</sub> = 14.4 A" where it means i = 14.14 A (the graph also says 14.4 A). The final answers 20 A, −20 A and 3.333 ms are right.</p></div>
<div class="note why"><p>If part (i) is read as 0.0025 s from t = 0 instead, you get 28.28 sin 45° = 20 A anyway, because 45° is symmetric about the peak.</p></div>`
        },
        {
          title: 'Exercises',
          html: `<p class="lead">The practice set, solved. Exercise 3 repeats the worked example.</p>
<div class="worked">
<div class="given"><p>1. v = 282.8 sin 314t V. Find (a) the RMS voltage, (b) the frequency, (c) v at t = 4 ms.</p></div>
<div class="solve">
<p>(a) V<sub>rms</sub> = 282.8/√2 = <b>200 V</b></p>
<p>(b) f = ω/2π = 314/2π = <b>50 Hz</b></p>
<p>(c) ωt = 314 × 0.004 = 1.256 rad (72°): v = 282.8 sin(1.256 rad) = <b>268.9 V</b></p>
</div>
<div class="result"><p>200 V, 50 Hz, 268.9 V</p></div>
</div>
<div class="note trap"><p>314t is in radians. Set your calculator to radians, or convert 1.256 rad to 72° first.</p></div>
<div class="worked">
<div class="given"><p>2. 50 Hz, I<sub>m</sub> = 100 A. (a) Current 1/600 s after the instant it is zero and decreasing. (b) Time after the zero (increasing) at which it reaches 86.6 A.</p></div>
<div class="solve">
<p>(a) Zero and going negative: i = −100 sin ωt. ωt = 2π × 50/600 = π/6 = 30°: i = −100 × 0.5 = <b>−50 A</b></p>
<p>(b) 86.6 = 100 sin ωt → ωt = 60° = π/3 → t = (π/3)/(100π) = 1/300 s = <b>3.33 ms</b></p>
</div>
<div class="result"><p>(a) −50 A (b) 3.33 ms</p></div>
</div>
<div class="note heads-up"><p>Exercise 1 prints "v = 282.8 sin 314 volts" with the t missing; it is 282.8 sin 314t.</p></div>`
        }
      ],
      flashcards: [
        { front: 'Define the RMS value of an alternating current.', back: 'The steady DC current which, through <b>1 Ω for t seconds</b>, produces the <b>same heat</b> as the AC current does in the same time.' },
        { front: 'RMS and average values of a sine wave in terms of peak?', back: 'V<sub>rms</sub> = V<sub>m</sub>/√2 = <b>0.707 V<sub>m</sub></b>; V<sub>av</sub> = 2V<sub>m</sub>/π = <b>0.637 V<sub>m</sub></b> (half cycle).' },
        { front: 'Form factor and crest factor of a sine wave?', back: 'Form factor = rms/average = <b>1.11</b>. Crest (peak, amplitude) factor = max/rms = <b>1.414</b>.' },
        { front: 'Two methods of finding RMS and average values?', back: '(i) <b>Mid-ordinate method</b> (ii) <b>analytical method</b>.' },
        { front: 'Mid-ordinate formula for RMS?', back: 'V<sub>rms</sub> = √[(V<sub>1</sub><sup>2</sup> + V<sub>2</sub><sup>2</sup> + … + V<sub>n</sub><sup>2</sup>)/n] using equally spaced mid-ordinates.' },
        { front: 'Why is the average of a sine wave taken over half a cycle?', back: 'Over a full cycle the positive and negative halves cancel, so the average is <b>zero</b>.' },
        { front: 'What slip is in the course RMS derivation?', back: 'It repeats the average working and ends at 0.637 V<sub>m</sub>. Correct: V<sub>rms</sub><sup>2</sup> = (1/2π)∫V<sub>m</sub><sup>2</sup>sin<sup>2</sup>θ dθ = V<sub>m</sub><sup>2</sup>/2, so <b>0.707 V<sub>m</sub></b>.' },
        { front: '50 Hz, 20 A rms: instantaneous equation?', back: 'I<sub>m</sub> = 28.28 A, ω = 314: <b>i = 28.28 sin 314t</b> A.' },
        { front: 'v = 282.8 sin 314t: RMS, f and v at 4 ms?', back: '<b>200 V</b>, <b>50 Hz</b>, <b>268.9 V</b> (angle 1.256 rad).' },
        { front: 'Why square the values for RMS?', back: 'Heating goes as <b>i<sup>2</sup>R</b>, which does not care about direction; squaring makes both halves count.' }
      ],
      oneLiners: [
        'RMS = DC equivalent for <b>heating</b> (1 Ω, same time).',
        'V<sub>rms</sub> = <b>0.707 V<sub>m</sub></b>; V<sub>av</sub> = <b>0.637 V<sub>m</sub></b>.',
        'Form factor = rms/avg = <b>1.11</b>.',
        'Crest/peak/amplitude factor = max/rms = <b>1.414</b>.',
        'Average of a sine wave is taken over a <b>half cycle</b>.',
        'V<sub>m</sub> = <b>√2 × V<sub>rms</sub></b>; 230 V rms ≈ 325 V peak.',
        'From the positive peak, i = I<sub>m</sub> cos ωt.'
      ],
      formulas: [
        { name: 'Average value (half cycle)', html: `V<sub>av</sub> = 2V<sub>m</sub>/π = 0.637 V<sub>m</sub>`, note: 'Sine wave.' },
        { name: 'RMS value', html: `V<sub>rms</sub> = V<sub>m</sub>/√2 = 0.707 V<sub>m</sub>`, note: 'Sine wave.' },
        { name: 'Mid-ordinate average', html: `V<sub>av</sub> = (V<sub>1</sub> + V<sub>2</sub> + … + V<sub>n</sub>)/n`, note: 'Equally spaced mid-ordinates over a half cycle.' },
        { name: 'Mid-ordinate RMS', html: `V<sub>rms</sub> = √[(V<sub>1</sub><sup>2</sup> + … + V<sub>n</sub><sup>2</sup>)/n]`, note: '' },
        { name: 'Form factor', html: `K<sub>f</sub> = rms/average = 1.11`, note: 'Sine wave.' },
        { name: 'Crest (peak) factor', html: `K<sub>a</sub> = max/rms = 1.414`, note: 'Sine wave.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm1-rl-series',
      title: 'R-L series circuit',
      short: 'R-L series circuit',
      blurb: 'Inductive reactance, impedance, power factor, active, reactive and apparent power, the Q factor of a coil, and the seven worked R-L examples.',
      source: 'Pages 35–37',
      tabs: [
        {
          title: 'Pure R, L and C',
          html: `<p class="lead">Every series circuit in this topic is built from three parts. Knowing how each behaves on its own makes the combinations easy.</p>
<p><b>Extra:</b> the course starts straight at the R-L circuit; this comparison is the standard background it builds on.</p>
<table class="tbl">
<thead><tr><th></th><th>Pure R</th><th>Pure L</th><th>Pure C</th></tr></thead>
<tbody>
<tr><td>Opposition</td><td>R</td><td>X<sub>L</sub> = 2πfL</td><td>X<sub>C</sub> = 1/(2πfC)</td></tr>
<tr><td>Current vs voltage</td><td>in phase</td><td>lags by 90°</td><td>leads by 90°</td></tr>
<tr><td>Power factor</td><td>1</td><td>0 (lagging)</td><td>0 (leading)</td></tr>
<tr><td>Average power</td><td>VI</td><td>zero</td><td>zero</td></tr>
<tr><td>Effect of higher f</td><td>none</td><td>X<sub>L</sub> rises</td><td>X<sub>C</sub> falls</td></tr>
</tbody>
</table>
<div class="note why"><p>A coil fights any change of current, so its current builds up a quarter cycle after the voltage. A capacitor must be charged before its voltage rises, so its current comes a quarter cycle first. A pure L or C stores energy in one quarter cycle and hands it back in the next, so it takes no net power.</p></div>
<p>Real circuits sit between these limits, which is why the course writes <b>0 &lt; pf &lt; 1</b> for R-L, R-C and R-L-C circuits.</p>`
        },
        {
          title: 'R-L circuit',
          html: `<p class="lead">A resistor R in series with a coil of reactance X<sub>L</sub>. The same current flows through both, and it <b>lags the supply voltage by φ</b>.</p>
<figure data-fig="m1-ac-rl-circuit"></figure>
<div class="eq">X<sub>L</sub> = ωL = 2πfL Ω</div>
<div class="eq">Z = √(R<sup>2</sup> + X<sub>L</sub><sup>2</sup>) Ω</div>
<div class="eq">pf = cos φ = R/Z, 0 &lt; pf &lt; 1</div>
<ul>
<li>V<sub>R</sub> = IR is <b>in phase</b> with I; V<sub>X</sub> = IX<sub>L</sub> <b>leads</b> I by 90°. They add as phasors: V = √(V<sub>R</sub><sup>2</sup> + V<sub>X</sub><sup>2</sup>).</li>
<li>Phasor diagram with V as reference: i drawn <b>φ below V</b>. Its part along V is <b>i cos φ</b> (the working part), the part at 90° is <b>i sin φ</b>.</li>
<li>As R or X<sub>L</sub> changes, the tip of i moves along the dashed <b>current locus</b>.</li>
<li>tan φ = X<sub>L</sub>/R, so the bigger the reactance compared with R, the bigger the lag.</li>
</ul>
<div class="note why"><p>Z is not R + X<sub>L</sub> because the two voltages are 90° apart. They add like the sides of a right triangle, hence the square root.</p></div>
<div class="note trap"><p>Power factor in an R-L circuit is <b>lagging</b>. Always write "lag" or "lead" after the number.</p></div>`
        },
        {
          title: 'Power & Q factor',
          html: `<p class="lead">With current and voltage out of step, power flows back and forth. Only part of VI does real work.</p>
<figure data-fig="m1-ac-rl-wave"></figure>
<p>v = V<sub>m</sub> sin ωt and i = (V<sub>m</sub>/Z) sin(ωt − φ). Their product p = v × i is mostly positive (<b>+P</b>, power taken from the supply) but goes negative for a short time each half cycle (<b>−P</b>, energy returned by the coil).</p>
<div class="kv">
<div><span>Active power</span><b>P = V × I × cos φ</b> (W)</div>
<div><span>Reactive power</span><b>Q = V × I × sin φ</b> (VAR)</div>
<div><span>Apparent power</span><b>S = V × I = √(P<sup>2</sup> + Q<sup>2</sup>)</b> (VA)</div>
</div>
<p>P, Q and S form the <b>power triangle</b>, with φ between P and S. Only the resistor uses active power, so P = I<sup>2</sup>R too.</p>
<h3>Quality factor of a coil</h3>
<div class="eq">Q factor = <span class="frac"><span>1</span><span>power factor</span></span> = <span class="frac"><span>Z</span><span>R</span></span></div>
<div class="note heads-up"><p>This is the course's definition. The usual textbook definition is <b>Q = X<sub>L</sub>/R = ωL/R</b> (= tan φ). The two are close when X<sub>L</sub> is much larger than R, which is true for a good coil. Write Z/R if asked as per the course, and mention ωL/R as the standard form.</p></div>
<div class="note why"><p>A "good" coil has little resistance and a lot of reactance, so its pf is low and its Q is high.</p></div>`
        },
        {
          title: 'Examples 1–2',
          html: `<p class="lead">Example 1 uses every R-L formula once. Example 2 is a misprint, explained below.</p>
<div class="worked">
<div class="given"><p>Ex 1. R = 3.5 Ω, L = 0.1 H, v = 220∠30° V, 50 Hz. Find (a) X<sub>L</sub> (b) pf angle (c) pf (d) Z (e) P (f) Q (g) S.</p></div>
<div class="solve">
<p>(a) X<sub>L</sub> = 2π × 50 × 0.1 = <b>31.42 Ω</b></p>
<p>(b) φ = tan<sup>−1</sup>(31.42/3.5) = <b>83.65°</b></p>
<p>(c) pf = cos 83.65° = <b>0.11 lag</b></p>
<p>(d) |Z| = √(3.5<sup>2</sup> + 31.42<sup>2</sup>) = 31.6 Ω, Z = <b>31.6∠83.65° Ω</b></p>
<p>I = 220∠30°/31.6∠83.65° = <b>6.96∠−53.65° A</b></p>
<p>(e) P = 220 × 6.96 × 0.1107 = <b>169.5 W</b> (check: I<sup>2</sup>R = 6.96<sup>2</sup> × 3.5 = 169.5 W)</p>
<p>(f) Q = 220 × 6.96 × sin 83.65° = <b>1521.7 VAR</b></p>
<p>(g) S = 220 × 6.96 = <b>1531.1 VA</b></p>
</div>
<div class="result"><p>X<sub>L</sub> 31.42 Ω, φ 83.65°, pf 0.11 lag, Z 31.6∠83.65° Ω, P 169.5 W, Q 1521.7 VAR, S 1531.1 VA</p></div>
</div>
<div class="note heads-up"><p>The course prints answers only up to I and pf; P, Q and S above are worked from those values.</p></div>
<div class="worked">
<div class="given"><p>Ex 2. In an R-L series circuit the applied voltage "0 − j10" drives a current "8 + j0.6". Find R and X. Printed answer: R = 6 Ω, X<sub>L</sub> = 8 Ω.</p></div>
<div class="solve">
<p>Z = V/I. With the printed numbers, Z = (0 − j10)/(8 + j0.6) = −0.093 − j1.243 Ω: a negative resistance and a capacitive sign, impossible for an R-L circuit.</p>
<p>The printed answer would fit, for example, V = 100 + j0 V and I = 6 − j8 A: Z = 100/(6 − j8) = 100(6 + j8)/100 = <b>6 + j8 Ω</b>.</p>
</div>
<div class="result"><p>Method: Z = V/I, then R = real part, X = imaginary part. R = 6 Ω, X<sub>L</sub> = 8 Ω</p></div>
</div>
<div class="note heads-up"><p>The data in Ex 2 is misprinted. Learn the method (divide complex V by complex I); one set of numbers that gives the printed answer is V = 100 V, I = 6 − j8 A. That is our reconstruction; the course does not state the intended data.</p></div>`
        },
        {
          title: 'Examples 3–4',
          html: `<p class="lead">Both examples find a coil's R and X from a test, then reuse them under new conditions.</p>
<div class="worked">
<div class="given"><p>Ex 3. A choke coil takes 2 A lagging 60° behind 200 V at 50 Hz. Find L, R and Z. Also find the power when it is connected across 100 V, 25 Hz.</p></div>
<div class="solve">
<p>Z = 200/2 = <b>100 Ω</b>; R = Z cos 60° = <b>50 Ω</b>; X<sub>L</sub> = Z sin 60° = 86.6 Ω</p>
<p>L = 86.6/(2π × 50) = <b>0.2757 H</b> (≈ 0.275 H)</p>
<p>At 25 Hz: X<sub>L</sub> = 2π × 25 × 0.2757 = 43.3 Ω (half, since X<sub>L</sub> ∝ f)</p>
<p>Z = √(50<sup>2</sup> + 43.3<sup>2</sup>) = 66.14 Ω, I = 100/66.14 = 1.512 A</p>
<p>P = I<sup>2</sup>R = 1.512<sup>2</sup> × 50 = <b>114.3 W</b></p>
</div>
<div class="result"><p>R = 50 Ω, L = 0.275 H, Z = 100 Ω, P = 114.3 W</p></div>
</div>
<div class="note heads-up"><p>The course answer gives P = 112.5 W. Working it through gives <b>114.3 W</b>; R, L and Z match.</p></div>
<div class="worked">
<div class="given"><p>Ex 4. On 100 V, 50 Hz: coil A takes 8 A and 120 W; coil B takes 10 A and 500 W. Find the current and power when 100 V is applied to A and B in series.</p></div>
<div class="solve">
<p>Coil A: Z<sub>A</sub> = 100/8 = 12.5 Ω; R<sub>A</sub> = 120/8<sup>2</sup> = 1.875 Ω; X<sub>A</sub> = √(12.5<sup>2</sup> − 1.875<sup>2</sup>) = 12.36 Ω</p>
<p>Coil B: Z<sub>B</sub> = 100/10 = 10 Ω; R<sub>B</sub> = 500/10<sup>2</sup> = 5 Ω; X<sub>B</sub> = √(10<sup>2</sup> − 5<sup>2</sup>) = 8.66 Ω</p>
<p>Series: R = 6.875 Ω, X = 12.36 + 8.66 = 21.02 Ω, Z = √(6.875<sup>2</sup> + 21.02<sup>2</sup>) = 22.1 Ω</p>
<p>I = 100/22.1 = <b>4.52 A</b>; P = I<sup>2</sup>R = 4.52<sup>2</sup> × 6.875 = <b>140.6 W</b></p>
</div>
<div class="result"><p>I = 4.52 A, P ≈ 140 W</p></div>
</div>
<div class="note heads-up"><p>The printed answer line mislabels two values: "Z<sub>2</sub> = 8.66 Ω" is coil B's <b>reactance</b> (Z<sub>2</sub> = 10 Ω), and "R = 21.02 Ω" is the total <b>reactance</b> X (total R = 6.875 Ω). It also leaves out the current, 4.52 A.</p></div>
<div class="note why"><p>Resistances and reactances add separately in series. Never add the two impedances 12.5 + 10, because they are at different angles.</p></div>`
        },
        {
          title: 'Examples 5–7',
          html: `<p class="lead">Ex 5 works back from power readings, Ex 6 writes a current equation, Ex 7 uses voltmeter readings.</p>
<div class="worked">
<div class="given"><p>Ex 5. Coils A and B in series on 240 V, 50 Hz. R<sub>A</sub> = 5 Ω, L<sub>B</sub> = 0.015 H. Input 3 kW and 2 kVAR. Find L<sub>A</sub>, R<sub>B</sub> and the voltage across each coil.</p></div>
<div class="solve">
<p>S = √(3000<sup>2</sup> + 2000<sup>2</sup>) = 3605.6 VA; I = 3605.6/240 = 15.02 A</p>
<p>R = P/I<sup>2</sup> = 13.29 Ω → R<sub>B</sub> = 13.29 − 5 = <b>8.3 Ω</b></p>
<p>X = Q/I<sup>2</sup> = 8.86 Ω; X<sub>B</sub> = 2π × 50 × 0.015 = 4.71 Ω → X<sub>A</sub> = 4.15 Ω, L<sub>A</sub> = 4.15/314.16 = <b>0.0132 H</b></p>
<p>V<sub>A</sub> = 15.02 × √(5<sup>2</sup> + 4.15<sup>2</sup>) = <b>97.6 V</b>; V<sub>B</sub> = 15.02 × √(8.29<sup>2</sup> + 4.71<sup>2</sup>) = <b>143.3 V</b></p>
</div>
<div class="result"><p>R<sub>B</sub> = 8.3 Ω, L<sub>A</sub> = 0.0132 H, V<sub>A</sub> ≈ 97.5 V, V<sub>B</sub> ≈ 143.5 V (printed; rounding)</p></div>
</div>
<div class="worked">
<div class="given"><p>Ex 6. e<sub>0</sub> = 141.4 sin(377t + 30°) is applied to a coil with R = 4 Ω and X<sub>L</sub> = 1.25 Ω measured at 25 Hz. Write the current equation and sketch i, e<sub>R</sub>, e<sub>L</sub>, e<sub>0</sub>.</p></div>
<div class="solve">
<p>ω = 377 → f = 60 Hz, so X<sub>L</sub> = 1.25 × 60/25 = 3 Ω</p>
<p>Z = √(4<sup>2</sup> + 3<sup>2</sup>) = 5 Ω, φ = tan<sup>−1</sup>(3/4) = 36.87°, I<sub>m</sub> = 141.4/5 = 28.28 A</p>
<p>i = 28.28 sin(377t + 30° − 36.87°) = <b>28.28 sin(377t − 6.87°) A</b></p>
<p>Sketch: e<sub>R</sub> = 113.1 sin(377t − 6.87°) in phase with i; e<sub>L</sub> = 84.85 sin(377t + 83.13°) leading i by 90°; e<sub>0</sub> leads i by 36.87°.</p>
</div>
<div class="result"><p>i = 28.28 sin(377t − 6.87°) A</p></div>
</div>
<div class="note trap"><p>The reactance was measured at 25 Hz but the supply is 60 Hz. Rescale X<sub>L</sub> first; using 1.25 Ω directly is the classic mistake. (The course leaves this answer blank.)</p></div>
<div class="worked">
<div class="given"><p>Ex 7. 5 A flows through a non-inductive resistance in series with a choking coil on 220 V, 50 Hz. V across the resistance = 125 V, across the coil = 200 V. Find (a) impedance, resistance, reactance (of the coil) (b) power absorbed by the coil (c) total power. Draw the vector diagram.</p></div>
<div class="solve">
<p>Resistor R = 125/5 = 25 Ω; coil Z = 200/5 = <b>40 Ω</b></p>
<p>Total Z = V/5 and (25 + r)<sup>2</sup> + x<sup>2</sup> = Z<sup>2</sup>, r<sup>2</sup> + x<sup>2</sup> = 40<sup>2</sup>. With V = 250 V: 625 + 50r = 2500 − 1600 → r = <b>5.5 Ω</b>, x = √(40<sup>2</sup> − 5.5<sup>2</sup>) = <b>39.6 Ω</b></p>
<p>(b) Coil power = 5<sup>2</sup> × 5.5 = <b>137.5 W</b>; (c) total = 5<sup>2</sup> × (25 + 5.5) = <b>762.5 W</b></p>
<p>Vector diagram: I as reference; 125 V along I; coil voltage 200 V at tan<sup>−1</sup>(39.6/5.5) = 82° ahead of I; their phasor sum is the supply voltage.</p>
</div>
<div class="result"><p>Coil: Z 40 Ω, r 5.5 Ω, X 39.6 Ω; P<sub>coil</sub> 137.5 W; total 762.5 W</p></div>
</div>
<div class="note heads-up"><p>With 220 V the data is impossible: 220<sup>2</sup> is less than 125<sup>2</sup> + 200<sup>2</sup>, which would need a coil with negative resistance. The printed answers (r = 5.5 Ω, 137.5 W, 762.5 W) match a <b>250 V</b> supply, so the working uses 250 V. The printed reactance 39.2 Ω should be <b>39.6 Ω</b>, and "power loss = 762.5 W" is the total power taken.</p></div>`
        }
      ],
      flashcards: [
        { front: 'R-L series: write X<sub>L</sub>, Z and power factor.', back: 'X<sub>L</sub> = ωL = <b>2πfL</b>; Z = <b>√(R<sup>2</sup> + X<sub>L</sub><sup>2</sup>)</b>; pf = cos φ = <b>R/Z</b> (lagging), 0 &lt; pf &lt; 1.' },
        { front: 'Active, reactive and apparent power?', back: 'P = <b>VI cos φ</b> (W); Q = <b>VI sin φ</b> (VAR); S = <b>VI = √(P<sup>2</sup> + Q<sup>2</sup>)</b> (VA).' },
        { front: 'Q factor of a coil (course definition)? Standard one?', back: 'Course: <b>Q = 1/pf = Z/R</b>. Standard: <b>Q = X<sub>L</sub>/R = ωL/R</b>; nearly equal when X<sub>L</sub> ≫ R.' },
        { front: 'In an R-L circuit, how is the current placed relative to V?', back: 'It <b>lags</b> V by φ, where tan φ = X<sub>L</sub>/R.' },
        { front: 'Why is Z not simply R + X<sub>L</sub>?', back: 'V<sub>R</sub> and V<sub>X</sub> are <b>90° apart</b>, so they add as the sides of a right triangle.' },
        { front: 'What do +P and −P areas on the R-L power curve mean?', back: '+P: energy taken from the supply. −P: energy the coil <b>returns</b> to the supply. Net (average) power = VI cos φ.' },
        { front: 'Ex 3 choke (2 A lagging 60° at 200 V, 50 Hz): R, L, Z?', back: 'Z = <b>100 Ω</b>, R = <b>50 Ω</b>, L = <b>0.275 H</b>; on 100 V, 25 Hz it takes <b>114.3 W</b> (course prints 112.5 W).' },
        { front: 'How do you get a coil\'s R and X from a test at V, I, P?', back: 'Z = V/I, <b>R = P/I<sup>2</sup></b>, X = √(Z<sup>2</sup> − R<sup>2</sup>).' },
        { front: 'Ex 6: X<sub>L</sub> = 1.25 Ω at 25 Hz, supply ω = 377. What X<sub>L</sub> do you use?', back: 'f = 60 Hz, so X<sub>L</sub> = 1.25 × 60/25 = <b>3 Ω</b>; i = 28.28 sin(377t − 6.87°) A.' },
        { front: 'What is wrong with Ex 7 as printed?', back: '220<sup>2</sup> is less than 125<sup>2</sup> + 200<sup>2</sup>, so the coil would need negative resistance. The answers fit a <b>250 V</b> supply (coil r 5.5 Ω, X 39.6 Ω).' }
      ],
      oneLiners: [
        'X<sub>L</sub> = <b>2πfL</b>; it doubles when f doubles.',
        'Z = <b>√(R<sup>2</sup> + X<sub>L</sub><sup>2</sup>)</b>; pf = R/Z, lagging.',
        'Active power P = <b>VI cos φ = I<sup>2</sup>R</b>.',
        'Reactive power Q = <b>VI sin φ</b> in VAR.',
        'Apparent power S = <b>VI</b> in VA; S<sup>2</sup> = P<sup>2</sup> + Q<sup>2</sup>.',
        'Course Q factor = <b>1/pf = Z/R</b>.',
        'Resistances and reactances add <b>separately</b> in series.',
        'A pure coil or capacitor takes <b>zero average power</b> (Extra).'
      ],
      formulas: [
        { name: 'Inductive reactance', html: `X<sub>L</sub> = ωL = 2πfL`, note: 'Ω' },
        { name: 'R-L impedance', html: `Z = √(R<sup>2</sup> + X<sub>L</sub><sup>2</sup>)`, note: 'Ω' },
        { name: 'Power factor', html: `pf = cos φ = R/Z`, note: '0 < pf < 1; lagging for R-L.' },
        { name: 'Phase angle', html: `tan φ = X<sub>L</sub>/R`, note: '' },
        { name: 'Active power', html: `P = VI cos φ = I<sup>2</sup>R`, note: 'W' },
        { name: 'Reactive power', html: `Q = VI sin φ`, note: 'VAR' },
        { name: 'Apparent power', html: `S = VI = √(P<sup>2</sup> + Q<sup>2</sup>)`, note: 'VA' },
        { name: 'Q factor of a coil', html: `Q = 1/pf = Z/R`, note: 'Course definition; standard Q = ωL/R.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm1-rc-rlc',
      title: 'R-C and R-L-C series circuits',
      short: 'R-C & R-L-C series',
      blurb: 'Capacitive reactance, the R-C circuit with leading current, the full R-L-C circuit where X<sub>L</sub> and X<sub>C</sub> cancel, its three worked examples, and resonance as Extra.',
      source: 'Pages 38–40',
      tabs: [
        {
          title: 'R-C circuit',
          html: `<p class="lead">Swap the coil for a capacitor and the current <b>leads</b> the voltage instead of lagging. The formulas keep the same shape.</p>
<figure data-fig="m1-ac-rc-circuit"></figure>
<div class="eq">X<sub>C</sub> = 1/(ωC) = 1/(2πfC) Ω</div>
<div class="eq">Z = √(R<sup>2</sup> + X<sub>C</sub><sup>2</sup>) Ω</div>
<div class="eq">pf = cos φ = R/Z, 0 &lt; pf &lt; 1 (leading)</div>
<ul>
<li>The capacitor is written <b>−jX<sub>C</sub></b>: its voltage V<sub>C</sub> lags the current by 90°.</li>
<li>Phasor diagram: V as reference, current i drawn <b>φ above V</b>, with i cos φ along V and the leading part i sin φ (the capacitive current i<sub>C</sub>) at 90°.</li>
<li>Power: P = V × I × cos φ, Q = V × I × sin φ, S = V × I = √(P<sup>2</sup> + Q<sup>2</sup>), same as R-L.</li>
</ul>
<figure data-fig="m1-ac-rc-wave"></figure>
<div class="note why"><p>X<sub>C</sub> falls as f rises: at higher frequency the capacitor charges and discharges more often, so more current flows for the same voltage. At DC (f = 0) X<sub>C</sub> is infinite and no steady current flows.</p></div>`
        },
        {
          title: 'R-L-C circuit',
          html: `<p class="lead">With both L and C in series their reactances <b>pull in opposite directions</b>, so only the difference X<sub>L</sub> ~ X<sub>C</sub> counts.</p>
<figure data-fig="m1-ac-rlc-circuit"></figure>
<div class="eq">X<sub>L</sub> = ωL = 2πfL, X<sub>C</sub> = 1/(ωC) = 1/(2πfC)</div>
<div class="eq">Z = √(R<sup>2</sup> + (X<sub>L</sub> ~ X<sub>C</sub>)<sup>2</sup>) Ω</div>
<div class="eq">pf = cos φ = R/Z, 0 &lt; pf &lt; 1</div>
<p>P = V × I × cos φ, Q = V × I × sin φ, S = V × I = √(P<sup>2</sup> + Q<sup>2</sup>), as before. (X<sub>L</sub> ~ X<sub>C</sub> means the difference, larger minus smaller.)</p>
<table class="tbl">
<thead><tr><th>Case</th><th>Circuit acts like</th><th>Current</th></tr></thead>
<tbody>
<tr><td>X<sub>L</sub> &gt; X<sub>C</sub></td><td>R-L</td><td>lags V, pf lagging</td></tr>
<tr><td>X<sub>L</sub> &lt; X<sub>C</sub></td><td>R-C</td><td>leads V, pf leading</td></tr>
<tr><td>X<sub>L</sub> = X<sub>C</sub></td><td>pure R</td><td>in phase, pf = 1 (resonance)</td></tr>
</tbody>
</table>
<p>In the phasor diagram the X<sub>C</sub> side is up and the X<sub>L</sub> side is down. i<sub>C</sub> and i<sub>L</sub> show where the current would sit with only C or only L (angle φ<sub>1</sub>); with both, the current i lands in between, here lagging V by a smaller angle φ.</p>
<figure data-fig="m1-ac-rlc-wave"></figure>
<div data-viz="rlc-phasor"></div>
<div class="note trap"><p>V<sub>L</sub> and V<sub>C</sub> are 180° apart, so each can be <b>bigger than the supply voltage</b>. Do not expect V<sub>R</sub> + V<sub>L</sub> + V<sub>C</sub> to equal V.</p></div>`
        },
        {
          title: 'Example 1',
          html: `<p class="lead">"Equal p.d. across coil and capacitor" means equal impedances, since the same current flows through both.</p>
<div class="worked">
<div class="given"><p>A coil of power factor 0.6 is in series with a 100 µF capacitor on a 50 Hz supply. The p.d. across the coil equals the p.d. across the capacitor. Find R and L of the coil.</p></div>
<div class="solve">
<div class="eq">X<sub>C</sub> = 1/(2π × 50 × 100 × 10<sup>−6</sup>) = 31.83 Ω</div>
<p>Same current, same voltage → Z<sub>coil</sub> = X<sub>C</sub> = 31.83 Ω</p>
<p>R = Z<sub>coil</sub> × pf = 31.83 × 0.6 = <b>19.1 Ω</b></p>
<p>X<sub>L</sub> = Z<sub>coil</sub> × sin φ = 31.83 × 0.8 = 25.46 Ω (sin φ = √(1 − 0.6<sup>2</sup>) = 0.8)</p>
<p>L = 25.46/(2π × 50) = <b>81.1 mH</b></p>
</div>
<div class="result"><p>R = 19.1 Ω, L = 81.1 mH</p></div>
</div>
<div class="note heads-up"><p>The course answer gives L = 79.8 mH. Working it through gives <b>81.1 mH</b>; R = 19.1 Ω matches.</p></div>
<div class="note why"><p>A power factor of 0.6 fixes the coil's triangle as 3-4-5 (R : X : Z = 0.6 : 0.8 : 1), so once Z is known, R and X follow straight away.</p></div>`
        },
        {
          title: 'Examples 2–3',
          html: `<p class="lead">Example 2 is a standard "find everything" question; Example 3 asks for a capacitor that leaves the current unchanged.</p>
<div class="worked">
<div class="given"><p>Ex 2. Series R-L-C: R = 50 Ω, C = 25 µF, L = 0.15 H on 230 V, 50 Hz. Find impedance, current, pf, apparent power, reactive power and power consumed.</p></div>
<div class="solve">
<p>X<sub>L</sub> = 2π × 50 × 0.15 = 47.12 Ω; X<sub>C</sub> = 1/(2π × 50 × 25 × 10<sup>−6</sup>) = 127.32 Ω</p>
<p>(i) Z = √(50<sup>2</sup> + (127.32 − 47.12)<sup>2</sup>) = √(50<sup>2</sup> + 80.2<sup>2</sup>) = <b>94.51 Ω</b></p>
<p>(ii) I = 230/94.51 = <b>2.434 A</b></p>
<p>(iii) pf = 50/94.51 = <b>0.529 leading</b> (X<sub>C</sub> &gt; X<sub>L</sub>)</p>
<p>(iv) S = 230 × 2.434 = <b>559.7 VA</b></p>
<p>(v) Q = VI sin φ = 559.7 × 0.849 = <b>475.0 VAR</b></p>
<p>(vi) P = VI cos φ = 559.7 × 0.529 = <b>296.1 W</b> (= I<sup>2</sup>R)</p>
</div>
<div class="result"><p>Z 94.51 Ω, I 2.434 A, pf 0.529 lead, S 559.7 VA, Q 475.0 VAR, P 296.1 W</p></div>
</div>
<div class="worked">
<div class="given"><p>Ex 3. A coil of R = 8 Ω and L = 0.03 H on 240 V, 50 Hz. (a) Find the current, pf and power. (b) Find the capacitance which, connected in series, causes no change in the current and power.</p></div>
<div class="solve">
<p>(a) X<sub>L</sub> = 2π × 50 × 0.03 = 9.425 Ω; Z = √(8<sup>2</sup> + 9.425<sup>2</sup>) = 12.36 Ω</p>
<p>I = 240/12.36 = <b>19.41 A</b>; pf = 8/12.36 = <b>0.647 lag</b>; P = 19.41<sup>2</sup> × 8 = <b>3015 W</b></p>
<p>(b) Same current needs the same |Z|, so |X<sub>L</sub> − X<sub>C</sub>| = X<sub>L</sub> → X<sub>C</sub> = 2X<sub>L</sub> = 18.85 Ω</p>
<p>C = 1/(2π × 50 × 18.85) = <b>168.9 µF</b></p>
</div>
<div class="result"><p>(a) 19.41 A, 0.647 lag, 3015 W (b) C = 168.9 µF</p></div>
</div>
<div class="note why"><p>With X<sub>C</sub> = 2X<sub>L</sub> the net reactance is −X<sub>L</sub>: same size, opposite sign. The current keeps its size, so the power I<sup>2</sup>R is unchanged, but the pf flips from 0.647 lagging to 0.647 leading. (The course gives no printed answers for Ex 2 and Ex 3.)</p></div>`
        },
        {
          title: 'Resonance (Extra)',
          html: `<p class="lead"><b>Extra:</b> resonance is not in the course pages, but it follows directly from Z = √(R<sup>2</sup> + (X<sub>L</sub> ~ X<sub>C</sub>)<sup>2</sup>) and is often asked alongside it.</p>
<p>X<sub>L</sub> rises with frequency and X<sub>C</sub> falls. At one frequency they are equal and cancel.</p>
<div class="eq" data-label="Resonant frequency">f<sub>r</sub> = <span class="frac"><span>1</span><span>2π√(LC)</span></span></div>
<ul>
<li>Z = <b>R</b>, its minimum value, so the current is <b>maximum</b>: I = V/R.</li>
<li>Current is in phase with V: <b>pf = 1</b>.</li>
<li>V<sub>L</sub> and V<sub>C</sub> are equal and opposite, and can be many times the supply voltage.</li>
<li>Standard quality factor at resonance: <b>Q = X<sub>L</sub>/R = (1/R)√(L/C)</b> = voltage magnification V<sub>L</sub>/V.</li>
</ul>
<div class="worked">
<div class="given"><p>Using Example 2's values: R = 50 Ω, L = 0.15 H, C = 25 µF, 230 V.</p></div>
<div class="solve">
<p>f<sub>r</sub> = 1/(2π√(0.15 × 25 × 10<sup>−6</sup>)) = <b>82.2 Hz</b></p>
<p>I = 230/50 = 4.6 A; X<sub>L</sub> = X<sub>C</sub> = 77.46 Ω; V<sub>L</sub> = V<sub>C</sub> = 4.6 × 77.46 = 356 V</p>
<p>Q = 77.46/50 = 1.55</p>
</div>
<div class="result"><p>f<sub>r</sub> = 82.2 Hz, I = 4.6 A, Q = 1.55</p></div>
</div>
<div class="note exam"><p>At 50 Hz that circuit is below resonance (X<sub>C</sub> &gt; X<sub>L</sub>), which is why Example 2 came out leading.</p></div>`
        }
      ],
      flashcards: [
        { front: 'R-L-C series: impedance formula?', back: '<b>Z = √(R<sup>2</sup> + (X<sub>L</sub> ~ X<sub>C</sub>)<sup>2</sup>)</b>; the reactances subtract because they act in opposite directions.' },
        { front: 'Capacitive reactance formula, and what happens to it as f rises?', back: '<b>X<sub>C</sub> = 1/(2πfC)</b>; it <b>falls</b> as f rises (infinite at DC).' },
        { front: 'When does an R-L-C circuit have lagging, leading or unity pf?', back: 'X<sub>L</sub> &gt; X<sub>C</sub>: <b>lagging</b>; X<sub>L</sub> &lt; X<sub>C</sub>: <b>leading</b>; X<sub>L</sub> = X<sub>C</sub>: <b>unity</b> (resonance).' },
        { front: 'In an R-C circuit, how does current sit relative to V?', back: 'It <b>leads</b> V by φ, tan φ = X<sub>C</sub>/R; pf = R/Z leading.' },
        { front: 'Coil pf 0.6 + 100 µF, equal p.d. across both, 50 Hz: R and L?', back: 'X<sub>C</sub> = 31.83 Ω = Z<sub>coil</sub>; R = <b>19.1 Ω</b>, L = <b>81.1 mH</b> (course prints 79.8 mH).' },
        { front: 'R 50 Ω, L 0.15 H, C 25 µF on 230 V 50 Hz: Z, I, pf?', back: 'Z = <b>94.51 Ω</b>, I = <b>2.434 A</b>, pf = <b>0.529 leading</b>; P = 296.1 W.' },
        { front: 'Series capacitor that leaves a coil\'s current unchanged?', back: 'Needs <b>X<sub>C</sub> = 2X<sub>L</sub></b>; for 8 Ω, 0.03 H at 50 Hz, C = <b>168.9 µF</b>.' },
        { front: 'Resonant frequency of a series R-L-C circuit (Extra)?', back: '<b>f<sub>r</sub> = 1/(2π√LC)</b>; Z = R (minimum), current maximum, pf = 1.' },
        { front: 'Why can V<sub>C</sub> exceed the supply voltage in R-L-C?', back: 'V<sub>L</sub> and V<sub>C</sub> are <b>180° apart</b> and largely cancel, so each can be large while their sum is small.' }
      ],
      oneLiners: [
        'X<sub>C</sub> = <b>1/(2πfC)</b>; capacitor written −jX<sub>C</sub>.',
        'R-C current <b>leads</b> V; pf leading.',
        'R-L-C: Z = <b>√(R<sup>2</sup> + (X<sub>L</sub> ~ X<sub>C</sub>)<sup>2</sup>)</b>.',
        'X<sub>L</sub> &gt; X<sub>C</sub> → lagging; X<sub>C</sub> &gt; X<sub>L</sub> → leading.',
        'P, Q, S formulas are the <b>same</b> for R-L, R-C and R-L-C.',
        'Equal p.d. across two series parts → <b>equal impedances</b>.',
        'Resonance (Extra): <b>f<sub>r</sub> = 1/(2π√LC)</b>, Z = R, pf = 1.'
      ],
      formulas: [
        { name: 'Capacitive reactance', html: `X<sub>C</sub> = 1/(ωC) = 1/(2πfC)`, note: 'Ω' },
        { name: 'R-C impedance', html: `Z = √(R<sup>2</sup> + X<sub>C</sub><sup>2</sup>)`, note: 'pf = R/Z, leading.' },
        { name: 'R-L-C impedance', html: `Z = √(R<sup>2</sup> + (X<sub>L</sub> ~ X<sub>C</sub>)<sup>2</sup>)`, note: 'X<sub>L</sub> ~ X<sub>C</sub> = difference of the reactances.' },
        { name: 'Resonant frequency (Extra)', html: `f<sub>r</sub> = 1/(2π√(LC))`, note: 'X<sub>L</sub> = X<sub>C</sub>; Z = R; pf = 1.' },
        { name: 'Q at resonance (Extra)', html: `Q = X<sub>L</sub>/R = (1/R)√(L/C)`, note: 'Voltage magnification.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm1-fuse',
      title: 'Electrical safety: fuses',
      short: 'Fuses',
      blurb: 'What a fuse is and why it goes in series, the DC/AC classification tree, symbols, rewireable and automobile fuses, HRC, drop-out, liquid and expulsion fuses, and where fuses are used.',
      source: 'Pages 41–49',
      tabs: [
        {
          title: 'What a fuse does',
          html: `<p class="lead">A fuse is a deliberately weak link: a short piece of wire that <b>melts and opens the circuit</b> before too much current can damage anything else.</p>
<p>Course definition: a fuse is nothing more than a short length of wire designed to <b>melt and separate</b> in the event of excessive current. Fuses are always connected <b>in series</b> with the component(s) to be protected from overcurrent, so that when the fuse <b>blows (opens)</b> it opens the entire circuit and stops current through the component(s).</p>
<ol class="steps">
<li><b>Normal current</b> The fuse wire warms a little but stays well below its melting point.</li>
<li><b>Overcurrent</b> Heat in the wire goes as I<sup>2</sup>R, so double the current gives four times the heat.</li>
<li><b>Melting</b> The wire reaches its melting point and separates.</li>
<li><b>Arc quenched</b> A short arc forms across the gap and dies out; the circuit is open.</li>
</ol>
<div class="note why"><p>It must be in series: only then does every bit of the protected current pass through it, and breaking it breaks the whole path. A fuse in parallel would simply be bypassed.</p></div>
<details class="more"><summary>Extra: fuse ratings</summary>
<ul>
<li><b>Current rating</b>: the current the fuse carries continuously without blowing.</li>
<li><b>Voltage rating</b>: the highest voltage across which it can safely break the circuit.</li>
<li><b>Breaking (rupturing) capacity</b>: the largest fault current it can interrupt safely.</li>
<li><b>Fusing factor</b> = minimum fusing current / current rating, always more than 1 (about 2 for a rewireable fuse, close to 1.1 for an HRC fuse).</li>
</ul>
</details>`
        },
        {
          title: 'Types of fuse',
          html: `<p class="lead">Fuses are first split by the supply they protect, <b>DC or AC</b>; AC fuses are then split into <b>low voltage</b> and <b>high voltage</b>.</p>
<figure data-fig="m1-safety-fuse-tree"></figure>
<div class="vs">
<div class="side"><h4>DC fuses</h4><ul><li>Cartridge</li><li>Automotive</li><li>Resettable</li><li>Semiconductor</li><li>Over-voltage suppression</li></ul></div>
<div class="side"><h4>AC low voltage</h4><ul><li>Cartridge</li><li>Drop-out</li><li>Rewireable</li><li>Striker</li><li>Switch</li></ul></div>
<div class="side"><h4>AC high voltage</h4><ul><li>Expulsion</li><li>HRC</li></ul></div>
</div>
<div class="note why"><p>DC is harder to break than AC. An AC current passes through zero 100 times a second at 50 Hz, which helps the arc die out; a DC arc has no natural zero, so DC fuses are built specially for it.</p></div>
<div class="mnemonic"><p>LV AC: "<b>C</b>an <b>D</b>ad <b>R</b>eally <b>S</b>trike a <b>S</b>witch": Cartridge, Drop-out, Rewireable, Striker, Switch.</p></div>`
        },
        {
          title: 'Symbols & low-voltage fuses',
          html: `<p class="lead">Four symbols are in use, and the two fuses you will actually see most are the house rewireable fuse and car fuses.</p>
<figure data-fig="m1-safety-fuse-symbols"></figure>
<ul>
<li><b>IEEE/ANSI standard</b>: a rectangle with the line running through it.</li>
<li><b>IEC standard</b>: a rectangle with bars near both ends.</li>
<li><b>IEEE/ANSI standard</b> (older drawing): an S-shaped curve between two terminals.</li>
<li><b>Old symbol</b>: two small circles joined by crossed lines.</li>
</ul>
<p>The <b>rewireable (kit-kat) fuse</b> has a porcelain base fixed in the board and a porcelain carrier that plugs into it. The fuse wire runs between the carrier's two terminals, so a blown fuse is fixed by pulling the carrier out and fitting new wire.</p>
<h3>Widely used automobile fuses</h3>
<figure data-fig="m1-safety-auto-fuses"></figure>
<div class="chips"><span class="chip">glass cartridge</span><span class="chip">blade fuse</span><span class="chip">cartridge with tabs</span><span class="chip">bolt-down</span><span class="chip">ceramic (torpedo)</span><span class="chip">terminal fuse 40 A, 58 V</span></div>
<div class="note trap"><p>A rewireable fuse is cheap and easy to reset, but someone can fit a thicker wire than intended. Then the fuse no longer protects anything.</p></div>`
        },
        {
          title: 'HRC & high-voltage fuses',
          html: `<p class="lead">For big fault currents a bare wire is not enough; the arc has to be smothered. HRC (high rupturing capacity) fuses do that with powder, liquid or gas.</p>
<h3>HRC cartridge fuse</h3>
<figure data-fig="m1-safety-hrc-fuse"></figure>
<p>Parts: <b>fuse element</b>, <b>outer element</b> (the body), <b>fuse link contacts</b>, <b>brass end plates</b> and the <b>filling powder</b> packed around the element.</p>
<div class="note why"><p>When the element melts, the filling powder absorbs the heat of the arc and turns into a poor-conducting mass, so the arc dies quickly inside the sealed body. (Extra: the powder is usually quartz sand, the element usually silver.)</p></div>
<h3>Drop-out fuse</h3>
<figure data-fig="m1-safety-dropout-fuse"></figure>
<p>A drop-out fuse is an <b>expulsion type</b> fuse used to <b>protect transformers</b>. When the fuse element melts, the tube <b>falls due to gravity</b>, giving additional isolation (a visible open gap).</p>
<h3>Liquid type HV HRC fuse</h3>
<figure data-fig="m1-safety-liquid-fuse"></figure>
<p>Used for high currents. A <b>glass tube filled with carbon tetrachloride</b>, sealed with <b>brass caps</b> at both ends. The fuse wire is sealed at one end and held at the other end by a strong <b>phosphor bronze spiral spring</b>. The liquid acts as the <b>arc extinguishing medium</b>. Labelled parts: vent cap, fuse link, cork, liquid director, flexible connections, spring, glass tube.</p>
<h3>Expulsion type HV HRC fuse</h3>
<p>An expulsion (escapable) fuse in which the <b>expulsion effect of the gases</b> produced by internal arcing interrupts the current. The fuse link chamber contains <b>boric acid</b>. This internal arcing action helps in the protection of <b>feeders and transformers</b>. It looks like the drop-out fuse above: a tube hung on a porcelain insulator.</p>
<div class="note why"><p>Boric acid gives off gas when heated by the arc; the gas pressure blasts the arc out of the tube. The spring in the liquid fuse pulls the broken ends apart through the liquid for the same reason: stretch the arc and cool it until it cannot survive.</p></div>`
        },
        {
          title: 'Applications',
          html: `<p class="lead">Fuses turn up wherever a fault current could do damage, from power transformers to phones.</p>
<ul>
<li>Protect <b>transformers, motors and power systems</b> from over-current conditions.</li>
<li>In <b>feeders, power transformers and solar circuits</b>.</li>
<li><b>Electrical appliances and house distribution boards</b> (domestic use).</li>
<li><b>Automotive cars, electric vehicles, racing cars, rails</b>.</li>
<li><b>Laptops, hard disk drives, printers/scanners</b> and other electronic devices.</li>
<li><b>Gaming systems and smartphones</b>.</li>
</ul>
<div class="chips"><span class="chip">transformers</span><span class="chip">motors</span><span class="chip">feeders</span><span class="chip">solar circuits</span><span class="chip">distribution boards</span><span class="chip">EVs</span><span class="chip">rails</span><span class="chip">laptops</span><span class="chip">smartphones</span></div>
<div class="note exam"><p>A 5–6 mark answer on fuses: definition and series connection, classification tree, one labelled diagram (HRC is the easiest), working in 3–4 lines, and a short list of applications.</p></div>`
        }
      ],
      flashcards: [
        { front: 'What is a fuse and how is it connected?', back: 'A short length of wire designed to <b>melt and separate</b> on excessive current. Always connected <b>in series</b> with what it protects, so blowing opens the whole circuit.' },
        { front: 'Name the two high-voltage AC fuse types.', back: '<b>Expulsion</b> fuse and <b>HRC</b> fuse.' },
        { front: 'How does a drop-out fuse work and what does it protect?', back: 'An <b>expulsion type</b> fuse protecting <b>transformers</b>; when the element melts the tube <b>falls by gravity</b>, giving extra isolation.' },
        { front: 'Five types of DC fuse?', back: 'Cartridge, automotive, resettable, semiconductor, over-voltage suppression.' },
        { front: 'Five types of low-voltage AC fuse?', back: 'Cartridge, drop-out, rewireable, striker, switch.' },
        { front: 'Liquid HV HRC fuse: what liquid, and what does it do?', back: '<b>Carbon tetrachloride</b> in a glass tube with brass caps; it acts as the <b>arc extinguishing medium</b>. A phosphor bronze spring holds the wire.' },
        { front: 'What is in the chamber of an expulsion HV fuse?', back: '<b>Boric acid</b>; gases from internal arcing are expelled and interrupt the current. Used for feeders and transformers.' },
        { front: 'Parts of an HRC cartridge fuse?', back: 'Fuse element, outer element (body), fuse link contacts, brass end plates, <b>filling powder</b>.' },
        { front: 'Fusing factor (Extra)?', back: '<b>Minimum fusing current / current rating</b>; always greater than 1.' },
        { front: 'Why does a fuse heat up so fast on overcurrent?', back: 'Heat goes as <b>I<sup>2</sup>R</b>: doubling the current gives four times the heat.' }
      ],
      oneLiners: [
        'Fuse = short wire that <b>melts</b> on excessive current; always in <b>series</b>.',
        'Fuses split into <b>DC</b> and <b>AC</b>; AC into low and high voltage.',
        'HV AC fuses: <b>expulsion</b> and <b>HRC</b>.',
        'Drop-out fuse protects <b>transformers</b>; falls by gravity when it blows.',
        'Liquid HRC fuse uses <b>carbon tetrachloride</b> to quench the arc.',
        'Expulsion fuse chamber contains <b>boric acid</b>.',
        'Rewireable fuse is also called the <b>kit-kat</b> fuse.',
        'HRC fuse body is packed with <b>filling powder</b> around the element.'
      ],
      formulas: [
        { name: 'Fusing factor (Extra)', html: `fusing factor = minimum fusing current / current rating`, note: 'Always greater than 1.' }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: 'm1-earthing',
      title: 'Electrical safety: earthing',
      short: 'Earthing',
      blurb: 'What an earthing system does, and the construction of plate earthing and pipe earthing with every dimension from the drawings.',
      source: 'Pages 41, 50–51',
      tabs: [
        {
          title: 'What earthing is',
          html: `<p class="lead">Earthing ties parts of an installation to the ground itself, so a fault sends current <b>into the earth instead of through a person</b>.</p>
<p>Course definition: in an electrical installation, an earthing system or grounding system connects specific parts of that installation with the <b>Earth's conductive surface</b> for <b>safety and functional purposes</b>. The point of reference is the Earth's conductive surface.</p>
<ol class="steps">
<li><b>Fault</b> A live wire touches the metal body of an appliance.</li>
<li><b>Low-resistance path</b> The earth wire connects that body to the earth electrode, so a large fault current flows to earth.</li>
<li><b>Fuse blows</b> The large current blows the fuse (or trips the breaker) and disconnects the supply.</li>
<li><b>Body stays safe</b> Until then the body sits near earth potential, so touching it gives little or no shock.</li>
</ol>
<details class="more"><summary>Extra: purposes of earthing</summary>
<ul>
<li>Protect people from electric shock.</li>
<li>Give fault current an easy path so protective devices operate.</li>
<li>Protect equipment and buildings, including from lightning.</li>
<li>Hold the system at a steady reference voltage (the functional purpose).</li>
</ul>
</details>
<div class="note heads-up"><p>The course headings spell it "Earthling". The word is <b>earthing</b>.</p></div>`
        },
        {
          title: 'Plate earthing',
          html: `<p class="lead">A metal plate is buried deep in charcoal and connected to the surface through a GI pipe that also lets you pour water in.</p>
<figure data-fig="m1-safety-plate-earthing"></figure>
<div class="kv">
<div><span>Plate</span><b>60 × 60 cm × 6.3 mm GI</b> or <b>60 × 60 cm × 3.15 mm copper</b></div>
<div><span>Depth</span><b>150 cm (min)</b> from ground level to the plate pit</div>
<div><span>Plate pit</span>90 cm deep, plate 60 cm, <b>15 cm charcoal</b> all round</div>
<div><span>Pipe to plate</span><b>Ø19 mm GI pipe</b></div>
<div><span>Earth lead pipe</span><b>Ø12.7 mm GI pipe</b></div>
<div><span>Inspection pit</span>30 × 30 cm, 60 cm deep chamber, 70 cm base, 15 cm slab</div>
<div><span>Chamber</span><b>cement concrete 1:4:8</b></div>
<div><span>Top</span>GI cover hinged to GI frame, 6.30 mm MS rod</div>
</div>
<ol class="steps">
<li><b>Dig</b> a pit so the plate sits at least 150 cm below ground level.</li>
<li><b>Bed</b> the plate vertically in a 15 cm layer of charcoal on all sides.</li>
<li><b>Connect</b> the plate to the 19 mm GI pipe, which runs up to the inspection chamber; the earth lead comes in through the 12.7 mm GI pipe.</li>
<li><b>Finish</b> with a funnel and wire mesh at the top of the pipe, a concrete (1:4:8) chamber, and a hinged GI cover.</li>
</ol>
<div class="note why"><p>Charcoal holds moisture and lowers the resistance between plate and soil. The funnel lets you pour water down in dry weather to keep it that way; the wire mesh stops dirt from blocking the pipe.</p></div>`
        },
        {
          title: 'Pipe earthing',
          html: `<p class="lead">A perforated GI pipe is driven deep and surrounded by alternate layers of salt and charcoal, which keep the soil around it moist and conductive.</p>
<figure data-fig="m1-safety-pipe-earthing"></figure>
<div class="kv">
<div><span>Earth pipe</span><b>38 mm φ</b>, length <b>2.5 m (min)</b></div>
<div><span>Holes</span><b>12 mm φ</b> holes, <b>7.5 cm</b> apart</div>
<div><span>Around the pipe</span>alternate <b>salt</b> and <b>charcoal</b> layers, <b>15 cm</b> each</div>
<div><span>Depth to pipe top</span><b>1.25 m (min)</b></div>
<div><span>Connecting pipe</span><b>19.05 mm φ GI pipe</b></div>
<div><span>Earth lead pipe</span><b>12.7 mm φ GI pipe</b>, at 60 cm (min) depth</div>
<div><span>Top</span>funnel, wire mesh, GI check nut; CI cover hinged to CI frame; 6.3 mm φ MS rod</div>
</div>
<p>The inspection pit is 30 cm wide; the drawing also marks 12.5, 20, 25 and 30 cm sizes for the chamber and its concrete base.</p>
<div class="note why"><p>Salt dissolves in the water poured in through the funnel and makes the soil around the pipe a better conductor; charcoal holds that water. The holes let the water reach the soil all along the pipe.</p></div>
<div class="note heads-up"><p>The drawing prints the pipe length as "2.5 mm (Min)" and the connecting pipe as "19.05 mm 0 GI pipe". They mean <b>2.5 m</b> and <b>19.05 mm φ</b>.</p></div>
<table class="tbl">
<thead><tr><th></th><th>Plate earthing</th><th>Pipe earthing</th></tr></thead>
<tbody>
<tr><td>Electrode</td><td>60 × 60 cm GI or copper plate</td><td>38 mm φ GI pipe, 2.5 m long</td></tr>
<tr><td>Depth</td><td>150 cm (min)</td><td>top at 1.25 m (min)</td></tr>
<tr><td>Fill</td><td>charcoal, 15 cm all round</td><td>alternate salt and charcoal, 15 cm layers</td></tr>
<tr><td>Watering</td><td>funnel into 19 mm pipe</td><td>funnel into 19.05 mm pipe, holes spread it</td></tr>
</tbody>
</table>`
        },
        {
          title: 'Other methods (Extra)',
          html: `<p class="lead"><b>Extra:</b> the course covers plate and pipe earthing. These points round out a longer exam answer.</p>
<ul>
<li><b>Rod earthing</b>: a copper or GI rod driven straight into the ground; used where the soil is soft and space is small.</li>
<li><b>Strip earthing</b>: a copper or GI strip laid in a shallow trench; used in rocky ground where deep digging is hard.</li>
<li><b>Earth resistance</b> is measured with an earth tester and should be as low as possible; watering the pit in dry seasons brings it back down.</li>
<li>The earth wire is connected to the <b>metal bodies</b> of appliances through the third (earth) pin of the plug.</li>
</ul>
<div class="note exam"><p>For "explain earthing with a neat sketch", draw either plate or pipe earthing with its key sizes (plate 60 × 60 cm at 150 cm depth, or 38 mm pipe 2.5 m long), and write two lines each on why charcoal/salt and the funnel are there.</p></div>`
        }
      ],
      flashcards: [
        { front: 'What does an earthing system do?', back: 'Connects specific parts of an installation to the <b>Earth\'s conductive surface</b> for <b>safety and functional purposes</b>; the Earth is the reference point.' },
        { front: 'Plate earthing: plate size and depth?', back: '<b>60 × 60 cm × 6.3 mm GI</b> or 60 × 60 cm × 3.15 mm copper, at least <b>150 cm</b> below ground, in 15 cm of charcoal.' },
        { front: 'Pipe earthing: pipe size, length and fill?', back: '<b>38 mm φ</b> GI pipe, <b>2.5 m (min)</b>, 12 mm holes 7.5 cm apart, alternate <b>salt and charcoal</b> layers of 15 cm.' },
        { front: 'How does earthing protect a person touching a faulty appliance?', back: 'Fault current flows through the <b>low-resistance earth path</b>, blowing the fuse; the body stays near earth potential.' },
        { front: 'Why charcoal and salt around the earth electrode?', back: 'Charcoal <b>holds moisture</b>; salt makes the wet soil <b>more conductive</b>. Both lower earth resistance.' },
        { front: 'What is the funnel in an earth pit for?', back: 'To <b>pour water</b> down to the electrode in dry weather; wire mesh keeps dirt out.' },
        { front: 'Plate earthing pipes?', back: '<b>Ø19 mm GI pipe</b> to the plate; <b>Ø12.7 mm GI pipe</b> for the earth lead.' },
        { front: 'Depth to the top of the pipe in pipe earthing?', back: '<b>1.25 m (min)</b>; connecting pipe 19.05 mm φ GI.' },
        { front: 'Concrete mix of the plate-earthing chamber?', back: '<b>Cement concrete 1:4:8</b>, with a GI cover hinged to a GI frame.' }
      ],
      oneLiners: [
        'Earthing connects parts of an installation to the <b>Earth\'s conductive surface</b>.',
        'Plate: <b>60 × 60 cm</b> GI (6.3 mm) or copper (3.15 mm), <b>150 cm</b> deep.',
        'Plate sits in a <b>15 cm charcoal</b> layer.',
        'Pipe: <b>38 mm φ</b>, <b>2.5 m</b> long, 12 mm holes every 7.5 cm.',
        'Pipe earthing uses alternate <b>salt and charcoal</b> layers, 15 cm each.',
        'Pipe top at least <b>1.25 m</b> below ground.',
        'Water poured through the <b>funnel</b> keeps earth resistance low.'
      ],
      formulas: []
    }
  ],
  figures: [
    { id: 'm1-ac-sine-wave', src: 'm1/pages/p27.png', crop: null, caption: 'One cycle of a sine wave: peak, RMS and average levels, instantaneous value e at angle θ, peak-to-peak value and the periodic time T.', alt: 'Sine wave from 0 to 2π with dashed lines at max 1, rms 0.707 and average 0.636, arrows for +Amax, −Amax, peak-to-peak and periodic time.' },
    { id: 'm1-ac-phase', src: 'm1/pages/p28.png', crop: null, caption: 'A phasor of length Im rotating at ω; its vertical projection at angle θ traces the sine wave, one full turn being one cycle.', alt: 'Rotating phasor Im at angle θ on the left, its projection i carried across to a sine wave with peaks Im at 90° and 270°.' },
    { id: 'm1-ac-phase-diff', src: 'm1/pages/p29.png', crop: null, caption: 'Two phasors φ apart give two waves φ apart: i1 reaches its peak and its zero φ before i2, so i1 leads.', alt: 'Phasor Im1 at angle φ above phasor Im2, and the two current waves i1 and i2 shifted by φ at their peaks and zero crossings.' },
    { id: 'm1-ac-lead-lag', src: 'm1/pages/p29.png', crop: null, caption: 'Phase lead and phase lag: the same Phase-1 wave with Phase-2 shifted φ earlier (leading) or φ later (lagging).', alt: 'Two panels each with two sine waves; in the top one Phase-2 is shifted left by φ, in the bottom one shifted right by φ.' },
    { id: 'm1-ac-rms-test', src: 'm1/pages/p30.png', crop: null, caption: 'The RMS idea as a test: a 1 Ω heater fed from DC and from AC. When both give the same heat in the same time, the DC current equals the RMS value.', alt: 'Two circuits, each with a source, wattmeter W, ammeter A and a 1 ohm heater; the first source is a variable DC supply V, the second an AC source E.' },
    { id: 'm1-ac-mid-ordinate', src: 'm1/pages/p31.png', crop: null, caption: 'Mid-ordinate method: equally spaced ordinates V1 to Vn over a half cycle give the average and the RMS value.', alt: 'Half sine wave from 0 to π with ten vertical arrows labelled V1 to Vn, and the formulas for Vav and Vrms below.' },
    { id: 'm1-ac-example-wave', src: 'm1/pages/p33.png', crop: null, caption: 'Worked example: from the positive peak A (28.28 A), 45° later the current is 20 A (B), 60° later 14.14 A (D) and 225° later −20 A (C). The graph label 14.4 A is corrected to 14.14 A.', alt: 'Current sine wave with peak 28.28 A; points A at π/2, B at 45° after it with 20 A, D at 60° with 14.14 A, C at 225° with −20 A.' },
    { id: 'm1-ac-rl-circuit', src: 'm1/pages/p35.png', crop: null, caption: 'R-L series circuit and its phasor diagram: the current lags V by φ; i cos φ lies along V, i sin φ at right angles.', alt: 'Coil jXL and resistor R in series with an AC source, voltage arrows VX and VR, and a phasor diagram with V horizontal and i drawn φ below it.' },
    { id: 'm1-ac-rl-wave', src: 'm1/pages/p35.png', crop: null, caption: 'R-L waveforms: current lags voltage by φ, so the power curve v × i dips negative (−P) for a short part of each half cycle.', alt: 'Voltage and lagging current sine waves with the shaded power curve, mostly positive (+P) with small negative lobes (−P).' },
    { id: 'm1-ac-rc-circuit', src: 'm1/pages/p38.png', crop: null, caption: 'R-C series circuit and its phasor diagram: the current leads V by φ.', alt: 'Capacitor −jXC and resistor R in series with an AC source, voltage arrows VC and VR, and a phasor diagram with i drawn φ above V.' },
    { id: 'm1-ac-rc-wave', src: 'm1/pages/p38.png', crop: null, caption: 'R-C waveforms: current leads voltage, and the power curve again has large +P and small −P parts.', alt: 'Voltage and leading current sine waves with the shaded power curve.' },
    { id: 'm1-ac-rlc-circuit', src: 'm1/pages/p39.png', crop: null, caption: 'R-L-C series circuit. In the phasor diagram the capacitive side is up and the inductive side down; i sits between iC and iL, here lagging V by φ.', alt: 'Capacitor, coil and resistor in series with an AC source, voltage arrows VC, VX, VR; phasor diagram with V horizontal, iC above, iL below at φ1 and the actual current i at φ below V.' },
    { id: 'm1-ac-rlc-wave', src: 'm1/pages/p39.png', crop: null, caption: 'R-L-C waveforms with XL larger than XC: a small lag, so the negative power parts are small.', alt: 'Voltage and slightly lagging current sine waves with the shaded power curve.' },
    { id: 'm1-safety-fuse-tree', src: 'm1/pages/p42.png', crop: null, caption: 'Classification of fuses: DC fuses, and AC fuses split into low-voltage and high-voltage types.', alt: 'Tree: FUSE branches to DC fuse (cartridge, automotive, resettable, semiconductor, over-voltage suppression) and AC fuse, which branches to low voltage (cartridge, drop-out, rewireable, striker, switch) and high voltage (expulsion, HRC).' },
    { id: 'm1-safety-fuse-symbols', src: 'm1/pages/p43.png', crop: null, caption: 'Fuse symbols (IEEE/ANSI, IEC, old) and the rewireable kit-kat fuse: a plug-in carrier holding the fuse wire and a fixed base.', alt: 'Four fuse symbols with their standards, and a sketch of a rewireable fuse carrier with fuse wire and its base with two contacts.' },
    { id: 'm1-safety-auto-fuses', src: 'm1/pages/p44.png', crop: null, caption: 'Widely used automobile fuses, drawn from the photos: glass cartridge, blade, cartridge with tabs, bolt-down, ceramic and a 40 A, 58 V terminal fuse.', alt: 'Six simple outlines of automobile fuses with labels.' },
    { id: 'm1-safety-hrc-fuse', src: 'm1/pages/p45.png', crop: null, caption: 'HRC cartridge fuse in section: the element runs through filling powder inside the body, closed by brass end plates with link contacts.', alt: 'Cross-section of an HRC fuse showing fuse element, outer body, filling powder, brass end plates and fuse link contacts.' },
    { id: 'm1-safety-dropout-fuse', src: 'm1/pages/p46.png', crop: null, caption: 'Drop-out fuse on a porcelain insulator: when the element melts, the tube swings down on its hinge and hangs open. The expulsion fuse on page 48 has the same build.', alt: 'Porcelain insulator with top contact and bottom hinge holding a fuse tube; a dashed tube shows the dropped position.' },
    { id: 'm1-safety-liquid-fuse', src: 'm1/pages/p47.png', crop: null, caption: 'Liquid type HV HRC fuse: a glass tube of carbon tetrachloride with brass end caps; a spring holds the fuse wire and pulls it apart when it melts.', alt: 'Horizontal glass tube with vent cap, fuse link, cork, liquid director, flexible connections and spring.' },
    { id: 'm1-safety-plate-earthing', src: 'm1/pages/p50.png', crop: null, caption: 'Plate earthing (sizes in cm): plate in charcoal at least 150 cm down, joined by a 19 mm GI pipe to a concrete inspection chamber with funnel and hinged cover.', alt: 'Section through the ground showing the inspection chamber with cover, funnel and wire mesh, a 12.7 mm GI pipe for the earth lead, a 19 mm GI pipe down to a plate set in charcoal at 150 cm depth.' },
    { id: 'm1-safety-pipe-earthing', src: 'm1/pages/p51.png', crop: null, caption: 'Pipe earthing: a 38 mm perforated pipe, 2.5 m long, in alternate salt and charcoal layers with its top at least 1.25 m down. The printed "2.5 mm" is 2.5 m.', alt: 'Section showing the chamber with cover, funnel, wire mesh and check nut, a 12.7 mm earth-lead pipe, a 19.05 mm pipe down to a 38 mm pipe with 12 mm holes surrounded by salt and charcoal layers.' }
  ]
});
