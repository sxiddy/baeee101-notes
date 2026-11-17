QUESTIONS({
  chunk: '4b',
  questions: [
    {
      id: 'm4-4b-01', module: 'm4', topic: 'm4-welding-basics', type: 'troubleshoot', level: 2,
      q: `<p>A welded plate fails in tension, not in the weld metal but in a narrow band just beside it. Which zone is this, and why is it weak?</p>`,
      options: ['Base metal: it was never heated', 'The blue oxidation band: it marks the HAZ width', 'Fusion zone: filler metal is always weaker', 'Heat affected zone: its microstructure was altered and softened'],
      correct: 3,
      answer: `<p><b>The heat affected zone (HAZ).</b></p>`,
      explain: `<p>The HAZ is weaker than both the base metal and the fusion zone because heating alters its microstructure and softens it. The blue oxidation colour on a pipe weld does not show the HAZ width.</p>`,
      points: ['HAZ microstructure altered', 'Weaker than BM and FZ due to softening', 'Fusion zone properties depend on the filler']
    },
    {
      id: 'm4-4b-02', module: 'm4', topic: 'm4-arc-welding', type: 'decide', level: 2,
      q: `<p>A welder must join thin aluminium sheet that forms a tough oxide film, and wants a shallow weld with a clean surface. Which polarity suits, and why?</p>`,
      options: null, correct: null,
      answer: `<p><b>DCEP (reverse polarity)</b>, or AC if some penetration is also wanted.</p>`,
      explain: `<p>In DCEP the heating effect of electrons is at the tungsten electrode, so the weld is shallow, suiting thin sheets. Positive ions of the shielding gas bombard the workpiece and knock off oxide films, leaving a clean surface. DCEN would give a narrow, deep weld with about two-thirds of the power at the work. AC combines penetration with oxide cleaning.</p>`,
      points: ['DCEP: shallow weld', 'Ion bombardment removes oxide', 'DCEN: narrow and deep', 'AC: penetration plus cleaning']
    },
    {
      id: 'm4-4b-03', module: 'm4', topic: 'm4-arc-welding', type: 'predict', level: 2,
      q: `<p>A welder doubles the travel speed and keeps the current the same. What happens to the penetration, heat input and distortion?</p>`,
      options: ['Penetration rises; heat input rises', 'Penetration falls; heat input and distortion fall', 'Nothing changes', 'Penetration falls; distortion rises'],
      correct: 1,
      answer: `<p><b>Penetration falls, heat input and distortion fall.</b></p>`,
      explain: `<p>Faster welding means less depth of penetration, but higher productivity, less heat input and less distortion and residual stress. More current would raise penetration.</p>`,
      points: ['Speed up: penetration down', 'Less heat input, less distortion', 'Higher productivity']
    },
    {
      id: 'm4-4b-04', module: 'm4', topic: 'm4-weld-joints', type: 'decide', level: 1,
      q: `<p>Two 20 mm plates are to be butt welded and the shop wants to minimise weld metal and distortion. Which groove should they use?</p>`,
      options: ['Square butt joint', 'Single V', 'Double V or double U', 'No groove, just a lap'],
      correct: 2,
      answer: `<p><b>Double V or double U.</b></p>`,
      explain: `<p>Above 12.5 mm thickness a double V or U is used. A double groove on thick plate reduces the amount of weld metal and controls distortion. A square butt joint is for under 5 mm and a single V or U for 5 to 12.5 mm. Over-welding adds cost and distortion, not strength.</p>`,
      points: ['Double V/U above 12.5 mm', 'Less weld metal', 'Controls distortion']
    },
    {
      id: 'm4-4b-05', module: 'm4', topic: 'm4-gtaw-gmaw', type: 'decide', level: 2,
      q: `<p>A shop welds a stainless steel pressure line. The root pass must be clean and strong, and the thick fill must be fast. How should they split the work between TIG and MIG?</p>`,
      options: null, correct: null,
      answer: `<p><b>TIG for the root pass, MIG for the fill passes.</b></p>`,
      explain: `<p>TIG's narrow, focused arc penetrates well and leaves few defects, but deposits slowly and costs more. MIG has a higher deposition rate and is easier, so it fills quickly. The course states the rule: root passes with TIG, fill passes with MIG.</p>`,
      points: ['TIG: strongest, cleanest, slow', 'MIG: high deposition, fast', 'Root with TIG, fill with MIG']
    },
    {
      id: 'm4-4b-06', module: 'm4', topic: 'm4-gtaw-gmaw', type: 'troubleshoot', level: 1,
      q: `<p>A trainee uses pure argon on a MIG set and has trouble keeping the arc stable. What does the usual MIG mix add, and why do TIG sets still use pure argon?</p>`,
      options: ['CO2 in a 75/25 argon mix stabilises the arc and aids penetration; the tungsten electrode is sensitive to reactive gases', 'Oxygen is added to cool the weld; TIG needs hot gas', 'Hydrogen is added; TIG is not sensitive to gas', 'Nothing: MIG always uses pure argon'],
      correct: 0,
      answer: `<p><b>CO<sub>2</sub> in about 75% argon / 25% CO<sub>2</sub>.</b></p>`,
      explain: `<p>The small CO<sub>2</sub> addition stabilises the arc and aids penetration in MIG. TIG welds use pure argon because the tungsten electrode is more sensitive to reactive gases such as oxygen or CO<sub>2</sub>.</p>`,
      points: ['MIG: argon + CO2, typically 75/25', 'TIG: pure argon', 'Tungsten sensitive to reactive gases']
    },
    {
      id: 'm4-4b-07', module: 'm4', topic: 'm4-welding-classes', type: 'interpret', level: 2,
      q: `<p>A catalogue lists three heat sources: about 10 W/cm² at 3300 °C, about 50 W/cm² at 6000 °C, and about 10000 W/cm² at 20000–30000 °C. Identify each, and say how penetration, speed and equipment cost change as you move to the last.</p>`,
      options: null, correct: null,
      answer: `<p><b>Gas (oxyacetylene), arc welding, and beam welding (laser or electron beam).</b> Penetration, speed and quality rise; so does cost.</p>`,
      explain: `<p>Higher energy density reduces heat losses and gives greater arc efficiency. The trend from gas to arc to beam welding is more penetration, welding speed and weld quality, with higher equipment cost; the lower-density sources put more heat into the workpiece for the same job.</p>`,
      points: ['10 W/cm²: oxyacetylene gas welding', '50 W/cm²: arc processes', '10000 W/cm²: LBW, EBW', 'Penetration, speed, quality, cost all rise']
    },
    {
      id: 'm4-4b-08', module: 'm4', topic: 'm4-weld-joints', type: 'decide', level: 1,
      q: `<p>A fabricator builds a sheet metal tank with material thinner than 3 mm. Which weld joint is typically used for the seams, and which joint forms an L-shaped box corner?</p>`,
      options: ['Butt joint for both', 'T-joint for the seams; edge joint for the L-shape', 'Lap joint for both', 'Edge joint for the seams; corner joint for the L-shape'],
      correct: 3,
      answer: `<p><b>Edge joint; corner joint.</b></p>`,
      explain: `<p>Edge joints suit sheet metal under 3 mm (tanks, boxes, enclosures). Corner joints connect two pieces at a right angle, forming an L-shape, in box construction and frames.</p>`,
      points: ['Edge joint: sheet under 3 mm', 'Corner joint: L-shape at a right angle']
    },
    {
      id: 'm4-4b-09', module: 'm4', topic: 'm4-machining-basics', type: 'interpret', level: 2,
      q: `<p>A tool is getting hot and wearing quickly during a cut. Where does most of the cutting heat go, and what fraction reaches the tool and the workpiece?</p>`,
      options: null, correct: null,
      answer: `<p><b>Mostly into the chips; about 10–20% to the tool and 3–5% to the workpiece.</b></p>`,
      explain: `<p>The shear zone, where the material is deformed and cut, is the primary heat zone and the chip carries most of it away. The share reaching the tool still heats it, causing wear and reduced tool life.</p>`,
      points: ['Shear zone is the main source', 'Tool 10–20%', 'Workpiece 3–5%', 'Tool heating shortens life']
    },
    {
      id: 'm4-4b-10', module: 'm4', topic: 'm4-turning-milling', type: 'numerical', level: 2,
      q: `<p>A lathe turns a shaft at 400 rev/min with a feed of 0.25 mm/rev. How far does the tool travel along the shaft in 3 minutes?</p>`,
      options: null, correct: null,
      answer: `<p><b>300 mm.</b></p>`,
      explain: `<div class="worked"><div class="given"><p>N = 400 rev/min, feed = 0.25 mm/rev, t = 3 min</p></div><div class="solve"><p>Feed is the distance per revolution:</p><div class="eq">Revolutions = 400 × 3 = 1200</div><div class="eq">Travel = 1200 × 0.25 = 300 mm</div></div><div class="result"><p>300 mm</p></div></div>`,
      points: ['Feed = distance per revolution', 'Revolutions × feed']
    },
    {
      id: 'm4-4b-11', module: 'm4', topic: 'm4-turning-milling', type: 'decide', level: 1,
      q: `<p>A workshop must flatten a very large, oversized casting. Should they use a shaper or a planer?</p>`,
      options: ['Shaper: the tool reciprocates and suits large work', 'Planer: the workpiece reciprocates on its table and suits large, oversized jobs', 'Shaper: it is for oversized jobs', 'Neither can make flat surfaces'],
      correct: 1,
      answer: `<p><b>A planer.</b></p>`,
      explain: `<p>Shaping uses a stationary workpiece and a reciprocating tool, for smaller jobs. Planing uses a stationary tool and a reciprocating workpiece, which suits larger, oversized pieces.</p>`,
      points: ['Shaping: tool moves, small jobs', 'Planing: work moves, large jobs']
    },
    {
      id: 'm4-4b-12', module: 'm4', topic: 'm4-cnc', type: 'decide', level: 2,
      q: `<p>A CNC machine must drill ten holes in a plate as fast as possible, and another must cut a curved pocket profile. Which control system suits each?</p>`,
      options: null, correct: null,
      answer: `<p><b>Point-to-point for drilling; contouring for the profile.</b></p>`,
      explain: `<p>Point-to-point moves at maximum velocity to cut non-productive time and decelerates near the position, so it suits drilling, punching and straight milling. Contouring performs positioning and operation along controlled paths while the tool stays in contact with the material, as in milling, turning, engraving and profile cutting.</p>`,
      points: ['Point-to-point: drilling, punching', 'Contouring: milling, profiling', 'Interpolation guides the path']
    },
    {
      id: 'm4-4b-13', module: 'm4', topic: 'm4-am-categories', type: 'decide', level: 2,
      q: `<p>A hospital wants a titanium implant that is complex and lightweight, using a laser to fuse powder. Another team wants a cheap prototype in ABS. Which AM categories fit?</p>`,
      options: ['Powder bed fusion for the implant; material extrusion (FDM) for the prototype', 'Vat photopolymerisation for both', 'Sheet lamination for the implant; binder jetting for ABS', 'FDM for the implant; powder bed fusion for ABS'],
      correct: 0,
      answer: `<p><b>Powder bed fusion; material extrusion.</b></p>`,
      explain: `<p>Powder bed fusion uses a laser or electron beam to fuse powder (Ti, Al, stainless steel, Inconel), used for aerospace and medical implants. FDM is inexpensive, uses ABS or PLA filament and suits prototyping.</p>`,
      points: ['PBF: laser or e-beam, metals, implants', 'FDM: thermoplastic filament, low cost']
    },
    {
      id: 'm4-4b-14', module: 'm4', topic: 'm4-fdm', type: 'explain', level: 2,
      q: `<p>An FDM-printed bracket snaps along the layer lines under a load applied along the build direction, though it was strong sideways. Explain, and name one more limitation.</p>`,
      options: null, correct: null,
      answer: `<p><b>FDM parts are anisotropic.</b></p>`,
      explain: `<p>Strength in the z-direction is measurably less than in the x-y plane, so loads across the layers break the part at the layer boundaries. Another limit: sharp external corners are impossible because every corner gets a radius equal to the nozzle.</p>`,
      points: ['Anisotropic', 'z-direction weaker than x-y', 'Corner radius equals nozzle']
    }
  ]
});
