import Link from 'next/link';
const Why = () => {


  const Questions = [
    {
      "id": 1,
      "question": "What is the difference between metal stamping and metal fabrication?",
      "answer": "Metal stamping involves forming operations like punching, bending, pressing, folding, and stretching using punch presses with custom tooling and dies to create shapes or patterns, providing tighter tolerances and being ideal for large quantities. Metal fabrication, on the other hand, creates three-dimensional parts through cutting, bending, and assembly using equipment like CNC laser cutters, press brakes, and welding, offering greater design flexibility and economy for lower volumes. For beginners, think of stamping as high-volume precision molding; for professionals, note that stamping generates less scrap, reducing costs with expensive materials like titanium. Best practice: Use stamping for simple 2D parts in mass production and fabrication for complex 3D assemblies. Example: Stamping for automotive brackets, fabrication for custom enclosures.",
      "link": "/products"
    },
    {
      "id": 2,
      "question": "What materials can be used for stamped metal parts?",
      "answer": "Common materials include stainless steel, aluminum, nickel, titanium, and specialty alloys like Inconel and Hastelloy, selected based on tensile strength, yield strength, and elongation for deep drawing compatibility. Beginners should prioritize corrosion resistance for outdoor use; professionals consider work-hardening during forming. Best practice: Test material behavior in prototypes to ensure formability without cracking. Example: Aluminum for lightweight aerospace parts, stainless steel for durable medical devices.",
      "link": "/products"
    },
    {
      "id": 3,
      "question": "How can costs be minimized for custom metal stampings?",
      "answer": "Choose common materials and standard thicknesses over specialty alloys or non-standard sizes, and loosen tolerances where possible to reduce machining and secondary operations. For beginners, start with off-the-shelf options; professionals use design revisions for over-toleranced areas. Best practice: Revise designs to eliminate unnecessary tight tolerances (±0.005” or less) that require extra processing. Example: Switching from titanium to aluminum for non-critical strength applications saves 30-50% on material costs.",
      "link": "/products"
    },
    {
      "id": 4,
      "question": "What is a progressive die in metal stamping?",
      "answer": "A progressive die is a series of punch press tools performing multiple operations like punching, cutting, coining, and bending in sequence on a metal strip fed through stations until the part is complete. Beginners see it as an assembly line for parts; professionals value its efficiency for high volumes. Best practice: Use for complex 3D parts over 15,000 units annually to maximize speed and cost savings. Example: Progressive dies for electronic connectors producing thousands per hour.",
      "link": "/products"
    },
    {
      "id": 5,
      "question": "What is deep drawing in sheet metal fabrication?",
      "answer": "Deep drawing forms flat sheet metal into deep 3D shapes like cylinders or rectangles using a punch and die, where depth exceeds width based on depth-to-diameter ratio. For beginners, it's like drawing dough into a cup; professionals note it retains 85% of original material. Best practice: Design with proportional radii (min. 2x thickness) and draft for easy stripping. Example: Deep drawing for automotive fuel tanks or cookware.",
      "link": "/products"
    },
    {
      "id": 6,
      "question": "What are the advantages of deep-drawn parts?",
      "answer": "Deep-drawn parts offer precision with tight tolerances, increased strength via work-hardening, seamless edges for complex dimensions, cost-effectiveness in high volumes, and material efficiency. Beginners benefit from seamless designs; professionals from repeatability. Best practice: Anneal after forming to restore properties and relieve stresses. Example: Medical device housings with uniform walls for sterility.",
      "link": "/products"
    },
    {
      "id": 7,
      "question": "What technical factors should be considered when designing deep-drawn parts?",
      "answer": "Factors include 85% material retention, proportional corner/bottom radii (min. 2x thickness), required draft for stripping, wall thinning (thicker bottoms), burr height (10% of thickness), and annealing for work-hardening relief. For beginners, focus on draft angles; professionals on additional draws for smaller radii. Best practice: Use in-house heat treatment for quality control. Example: Adjusting sidewall thinning for uniform visuals in cans.",
      "link": "/products"
    },
    {
      "id": 8,
      "question": "What types of metal fabrication services are offered?",
      "answer": "Services include laser cutting, press brake forming, roll forming, machining, welding, and finish coating. Beginners start with laser cutting for precision; professionals combine for full assemblies. Best practice: Align services with project goals via Design for Manufacturability (DFM). Example: Laser cutting + welding for transformer enclosures.",
      "link": "/services"
    },
    {
      "id": 9,
      "question": "What materials does a typical fabricator work with?",
      "answer": "Common materials are aluminum, copper, stainless steel, carbon steel, mild steel, and galvanized steel. Beginners choose based on corrosion needs; professionals on mechanical properties. Best practice: Use galvanized for outdoor applications to prevent rust. Example: Stainless steel for food-grade equipment.",
      "link": "/services"
    },
    {
      "id": 10,
      "question": "What is the typical lead time for custom sheet metal projects?",
      "answer": "Lead times range from 5-6 weeks for simple laser-cut parts to 10-12 weeks for complex projects involving engineering and welding. Factors include complexity and annual usage. Beginners plan buffers; professionals provide detailed drawings (DXF, STEP) for faster quotes. Best practice: Quote with Estimated Annual Usage (EAU) for volume discounts. Example: Simple brackets in 5 weeks vs. full assemblies in 12.",
      "link": "/services"
    },
    {
      "id": 11,
      "question": "How much does sheet metal fabrication cost?",
      "answer": "Costs depend on material, volume, tolerances, design complexity, technique, finish, and quantity—no fixed prices. Beginners estimate via online calculators; professionals factor economies of scale. Best practice: Use professional firms for cost savings through experience and in-house tech. Example: High-volume aluminum parts cost less per unit than low-volume stainless with tight tolerances.",
      "link": "/pricing"
    },
    {
      "id": 12,
      "question": "Why use a professional sheet metal fabrication company?",
      "answer": "Professionals mitigate risks, ensure quality, save costs via scale, and deliver on time with complementary tech like CNC. Amateurs risk poor quality. Beginners avoid DIY pitfalls; professionals leverage audits. Best practice: Choose ISO-certified firms for compliance. Example: Aerospace parts requiring AS9100 standards.",
      "link": "/pricing"
    },
    {
      "id": 13,
      "question": "What can be made with sheet metal fabrication?",
      "answer": "Brackets, enclosures, frames with complex geometries, high precision, and thin walls via bending, forming, CNC, laser cutting. Suited for low-volume prototypes. Beginners for simple frames; professionals for welded assemblies. Best practice: Pair with finishing for cosmetics. Example: Lightweight aircraft panels.",
      "link": "/pricing"
    },
    {
      "id": 14,
      "question": "What is sheet metal fabrication?",
      "answer": "It's converting flat metal sheets into 3D objects via cutting, bending, assembling with metals like aluminum, stainless steel. Beginners: Basic shaping; professionals: Precision via CNC. Best practice: Use CAD for blueprints. Example: From flat steel to car body panels.",
      "link": "/blog"
    },
    {
      "id": 15,
      "question": "What are common sheet metal fabrication techniques?",
      "answer": "Cutting (laser, water jet, shearing), bending (press brakes), stamping (dies for shapes), welding (MIG/TIG). Beginners start with shearing; professionals combine for efficiency. Best practice: Laser for complex designs to minimize heat zones. Example: Water jet for heat-sensitive aluminum.",
      "link": "/blog"
    },
    {
      "id": 16,
      "question": "What materials are used in sheet metal fabrication?",
      "answer": "Aluminum (lightweight, corrosion-resistant), stainless steel (durable), carbon steel (strong, affordable), copper (conductive). Beginners: Aluminum for ease; professionals: Stainless for food processing. Best practice: Match to application, e.g., copper for plumbing. Example: Carbon steel for structural beams.",
      "link": "/blog"
    },
    {
      "id": 17,
      "question": "What industries use sheet metal fabrication?",
      "answer": "Electronics (enclosures), aerospace (fuselages), construction (roofing), automotive (panels). Beginners: Everyday items; professionals: High-stakes like turbines. Best practice: Customize for sector standards, e.g., lightweight for aerospace. Example: Brackets in consumer electronics.",
      "link": "/blog"
    },
    {
      "id": 18,
      "question": "What are the advantages of sheet metal fabrication?",
      "answer": "Cost-effective for mass production, precise via CNC, versatile for shapes, durable in harsh conditions. Beginners: Affordable durability; professionals: Tight tolerances. Best practice: Automate for efficiency. Example: Powder-coated enclosures for weather resistance.",
      "link": "/blog"
    },
    {
      "id": 19,
      "question": "How does the sheet metal fabrication process work?",
      "answer": "Design (CAD), material selection, cutting, forming, assembly (welding), finishing (painting). Beginners: Step-by-step; professionals: Simulate for flaws. Best practice: Iterate prototypes. Example: Laser-cut aluminum bent into a chassis.",
      "link": "/blog"
    },
    {
      "id": 20,
      "question": "What factors influence sheet metal fabrication costs?",
      "answer": "Material type, design complexity, volume (economies of scale), finishing. Beginners: Volume discounts; professionals: Optimize complexity. Best practice: Standard colors for powder coating. Example: High-volume reduces per-unit by 50%.",
      "link": "/blog"
    },
    {
      "id": 21,
      "question": "What is the recommended inside bending radius for sheet metal?",
      "answer": "For hard materials like CRCA/stainless, 0.7x thickness; for soft like aluminum, 1x thickness. Beginners: Avoid cracks; professionals: Match to ductility. Best practice: Use same radius for all bends. Example: 0.7mm for 1mm stainless.",
      "link": "https://www.smlease.com/entries/interview-questions/sheetmetal-design-interview-questions/"
    },
    {
      "id": 22,
      "question": "What is the minimum flange length in sheet metal bending?",
      "answer": "4x thickness + inside radius. Beginners: Ensures proper forming; professionals: Prevents distortion. Best practice: Verify with CAD flattening. Example: 4.3mm for 1mm thick with 0.3mm radius.",
      "link": "https://www.smlease.com/entries/interview-questions/sheetmetal-design-interview-questions/"
    },
    {
      "id": 23,
      "question": "What is the minimum hole/slot distance from the edge in sheet metal?",
      "answer": "3x thickness + inside radius. Beginners: Avoids tearing; professionals: Maintains integrity. Best practice: Increase for high-stress areas. Example: 3.3mm from edge for 1mm sheet.",
      "link": "https://www.smlease.com/entries/interview-questions/sheetmetal-design-interview-questions/"
    },
    {
      "id": 24,
      "question": "What is the general tolerance for sheet metal design?",
      "answer": "ISO 2768-m as default. Beginners: Standard for most; professionals: Tighten for precision. Best practice: Specify per feature. Example: ±0.1mm for linear dimensions.",
      "link": "https://www.smlease.com/entries/interview-questions/sheetmetal-design-interview-questions/"
    },
    {
      "id": 25,
      "question": "What is bending allowance in sheet metal?",
      "answer": "Increase in length after bending due to neutral axis shift; flat length = length + height - deduction. Beginners: Accounts for stretch; professionals: Use K-factor. Best practice: Calculate via software. Example: 0.5mm allowance for 90° bend.",
      "link": "https://www.smlease.com/entries/interview-questions/sheetmetal-design-interview-questions/"
    },
    {
      "id": 26,
      "question": "What is the K-factor in sheet metal fabrication?",
      "answer": "Ratio of neutral axis to thickness (<0.5), for flat length calculation. Depends on material, radius. Beginners: Default 0.3; professionals: Test samples. Best practice: Use bend chart. Example: 0.33 for soft aluminum air bending.",
      "link": "https://www.smlease.com/entries/interview-questions/sheetmetal-design-interview-questions/"
    },
    {
      "id": 27,
      "question": "How to find the sheet metal toolbar in SOLIDWORKS?",
      "answer": "Via CommandManager dropdown. Beginners: Quick access; professionals: For efficient modeling. Best practice: Design in sheet metal mode from start. Example: Base flange creation.",
      "link": "https://www.approvedsheetmetal.com/blog/7-faqs-solidworks-sheet-metal-design"
    },
    {
      "id": 28,
      "question": "How to create a sheet metal tab in SOLIDWORKS?",
      "answer": "Sketch on plane, use Base Flange/Tab. Edit for dimensions. Beginners: Basic shape; professionals: Standard thickness. Best practice: Flatten to check pattern. Example: Rectangular tab for bracket.",
      "link": "https://www.approvedsheetmetal.com/blog/7-faqs-solidworks-sheet-metal-design"
    },
    {
      "id": 29,
      "question": "How to flatten and unflatten sheet metal in SOLIDWORKS?",
      "answer": "Right-click Flatten or via Cut List/toolbar. Exit to refold. Beginners: View flat pattern; professionals: Manufacturing prep. Best practice: Verify for nesting. Example: Unfold for laser cutting layout.",
      "link": "https://www.approvedsheetmetal.com/blog/7-faqs-solidworks-sheet-metal-design"
    },
    {
      "id": 30,
      "question": "What is the minimum bend radius in sheet metal design?",
      "answer": "0.030” industry standard for metals up to 0.125” thick; set via gauge table. Beginners: Prevents damage; professionals: Material-specific. Best practice: 4T from features. Example: 0.03” for aluminum sheet.",
      "link": "https://www.approvedsheetmetal.com/blog/7-faqs-solidworks-sheet-metal-design"
    },
    {
      "id": 31,
      "question": "How to avoid using completed 3D models without bends in sheet metal design?",
      "answer": "Design folded with bends shown; uniform thickness. Beginners: Solid to sheet conversion; professionals: Native mode. Best practice: Include bend lines in CAD. Example: Send bent enclosure model.",
      "link": "https://www.protolabs.com/resources/design-tips/8-mistakes-to-avoid-when-designing-sheet-metal-parts/"
    },
    {
      "id": 32,
      "question": "How to avoid placing features too close to bend lines?",
      "answer": "Follow 4T rule (4x thickness away). Beginners: Deformation prevention; professionals: Tolerance hold. Best practice: Check in simulation. Example: Holes 0.12” from bend on 0.03” sheet.",
      "link": "https://www.protolabs.com/resources/design-tips/8-mistakes-to-avoid-when-designing-sheet-metal-parts/"
    },
    {
      "id": 33,
      "question": "How to design for non-perpendicular sheet metal corners?",
      "answer": "Account for tool radius (common 0.030” internal); same radius all bends. Beginners: No sharp 90°; professionals: Cost savings. Best practice: Specify radius. Example: External = thickness + internal.",
      "link": "https://www.protolabs.com/resources/design-tips/8-mistakes-to-avoid-when-designing-sheet-metal-parts/"
    },
    {
      "id": 34,
      "question": "How to include hardware specs in CAD for sheet metal?",
      "answer": "Detail in assembly info, use PEM models. Beginners: Avoid delays; professionals: Precise placement. Best practice: Chamfer holes. Example: CLS-440-2 nut specs.",
      "link": "https://www.protolabs.com/resources/design-tips/8-mistakes-to-avoid-when-designing-sheet-metal-parts/"
    },
    {
      "id": 35,
      "question": "How to choose the right finish for sheet metal parts?",
      "answer": "Match to purpose: powder for aesthetics/protection, galvannealed for corrosion. Beginners: Avoid welding galvanized; professionals: Post-weld coating. Best practice: Anodize aluminum. Example: Chromate for electrical.",
      "link": "https://www.protolabs.com/resources/design-tips/8-mistakes-to-avoid-when-designing-sheet-metal-parts/"
    },
    {
      "id": 36,
      "question": "What is the recommended wall thickness for sheet metal parts?",
      "answer": "0.9mm-20mm uniform; <3mm sheet, >3mm plate. Beginners: Uniform for strength; professionals: Per process. Best practice: Match to features. Example: 1mm for enclosures.",
      "link": "https://geomiq.com/sheet-metal-design-guide/"
    },
    {
      "id": 37,
      "question": "What is the K-factor used for in sheet metal design?",
      "answer": "Calculates flat patterns from neutral axis ratio (0.25-0.50). Beginners: Stretch accounting; professionals: Material-specific. Best practice: Average from samples. Example: 0.33 for aluminum air bend.",
      "link": "https://geomiq.com/sheet-metal-design-guide/"
    },
    {
      "id": 38,
      "question": "What are bend radius guidelines for sheet metal?",
      "answer": "≥ thickness to avoid fractures; same for all. Beginners: Standard 0.9-1.2mm; professionals: Direction same plane. Best practice: Larger for thick. Example: 1mm for 1mm steel.",
      "link": "https://geomiq.com/sheet-metal-design-guide/"
    },
    {
      "id": 39,
      "question": "What is springback in sheet metal bending?",
      "answer": "Material recovery post-bend due to stresses; over-bend to compensate. Beginners: Angle/radius change; professionals: KS factor. Best practice: Stiffer parts. Example: Aluminum > steel.",
      "link": "https://geomiq.com/sheet-metal-design-guide/"
    },
    {
      "id": 40,
      "question": "What is bend relief and when is it needed?",
      "answer": "Rectangular cut at bend-edge intersection to prevent tearing; depth > radius, width ≥ thickness. Beginners: Edge bends; professionals: Thick/small radius. Best practice: ≤ thickness + radius deep. Example: Notched flange relief.",
      "link": "https://geomiq.com/sheet-metal-design-guide/"
    },
    {
      "id": 41,
      "question": "What is the minimum bend height in sheet metal?",
      "answer": "2x thickness + radius. Beginners: Deformation avoidance; professionals: Tooling fit. Best practice: Verify height. Example: 2.03” for 1mm + 0.03” r.",
      "link": "https://geomiq.com/sheet-metal-design-guide/"
    },
    {
      "id": 42,
      "question": "How to avoid forming near holes in sheet metal design?",
      "answer": "Min distance to hole center: 2x thickness + radius (<25mm holes). Beginners: Deformation prevention; professionals: 2.5x rule. Best practice: ≥ thickness diameter. Example: 2.03mm for 1mm hole.",
      "link": "https://geomiq.com/sheet-metal-design-guide/"
    },
    {
      "id": 43,
      "question": "What is the minimum hole diameter in sheet metal?",
      "answer": "≥ thickness to avoid punch break. Beginners: Basic sizing; professionals: Alloy 2x. Best practice: Larger for strength. Example: 1mm for 1mm sheet.",
      "link": "https://geomiq.com/sheet-metal-design-guide/"
    },
    {
      "id": 44,
      "question": "What are guidelines for extruded holes in sheet metal?",
      "answer": "Edge distance ≥3x thickness; between ≥6x. Beginners: Deformation avoidance; professionals: Stretching control. Best practice: Uniform extrusion. Example: 3mm from edge for 1mm.",
      "link": "https://geomiq.com/sheet-metal-design-guide/"
    },
    {
      "id": 45,
      "question": "What is kerf in laser cutting sheet metal?",
      "answer": "0.08-0.45mm gap from beam; 1-2mm part spacing, 2-5mm edge. Beginners: Waste planning; professionals: Precision cuts. Best practice: Fiber for thin. Example: 0.2mm for steel.",
      "link": "https://geomiq.com/sheet-metal-design-guide/"
    },
    {
      "id": 46,
      "question": "What are general tolerances for sheet metal fabrication?",
      "answer": "Bending ±0.4mm, bend-hole ±0.2mm, linear ±0.1mm, inserts ±0.06mm, angularity ±2°, roughness 3.2μm. Beginners: Default; professionals: Specify. Best practice: Deburr edges. Example: ISO for medium.",
      "link": "https://geomiq.com/sheet-metal-design-guide/"
    },
    {
      "id": 47,
      "question": "What are guidelines for curls in sheet metal?",
      "answer": "Outside radius ≥2x thickness; opening ≥ thickness. Beginners: Edge strength; professionals: Safety. Best practice: Radius + thickness from hole. Example: 2mm radius for 1mm sheet.",
      "link": "https://geomiq.com/sheet-metal-design-guide/"
    },
    {
      "id": 48,
      "question": "What are countersink hole guidelines for sheet metal?",
      "answer": "Angles 82°-120°; depth ≤0.6x thickness; edge 4x, bend 3x, between 8x. Beginners: Flush screws; professionals: Contact 50%. Best practice: Major ±0.254mm. Example: M5 with 90°.",
      "link": "https://geomiq.com/sheet-metal-design-guide/"
    },
    {
      "id": 49,
      "question": "What are hem guidelines in sheet metal design?",
      "answer": "Open: diameter = thickness, return 4x; closed 6x; teardrop diameter = thickness. Beginners: Stiffening; professionals: Fracture avoidance. Best practice: 5x + radius from bend. Example: Open hem for edge fold.",
      "link": "https://geomiq.com/sheet-metal-design-guide/"
    },
    {
      "id": 50,
      "question": "What are hole/slot clearances in sheet metal?",
      "answer": "Diameter ≥ thickness; bend 2.5x + r (holes), 4x + r (slots); edge 2x; between 6x. Beginners: Shape hold; professionals: Bulging prevention. Best practice: Larger for alloys. Example: 1.025mm hole from bend.",
      "link": "https://geomiq.com/sheet-metal-design-guide/"
    },
    {
      "id": 51,
      "question": "What are notch/tab guidelines in sheet metal?",
      "answer": "Notch width ≥1.5x thickness, length ≤5x; tab width ≥2x. Beginners: Access; professionals: Joining. Best practice: Radius 0.5x thickness. Example: 1.5mm notch for 1mm sheet.",
      "link": "https://geomiq.com/sheet-metal-design-guide/"
    },
    {
      "id": 52,
      "question": "What are corner fillets and relief cuts for?",
      "answer": "Fillets round edges (0.5x thickness) for safety; relief cuts prevent tearing (width ≥ thickness). Beginners: Handling; professionals: Thick bends. Best practice: Overhang ≤0.5x. Example: 0.5mm fillet.",
      "link": "https://geomiq.com/sheet-metal-design-guide/"
    },
    {
      "id": 53,
      "question": "What causes no bend relief mistake in sheet metal bending?",
      "answer": "No notch at bend intersections causes tearing, distortion. Beginners: Material flow; professionals: Stress control. Best practice: CAD from start. Example: Relief depth > radius.",
      "link": "https://sendcutsend.com/blog/7-common-mistakes-when-designing-for-sheet-metal-bending/"
    },
    {
      "id": 54,
      "question": "How to calculate bend allowance to avoid mistakes?",
      "answer": "Use k-factor, radius via calculator; edit in CAD, flatten to verify. Beginners: Stretch account; professionals: Material-specific. Best practice: Match software values. Example: Verify 90° bend length.",
      "link": "https://sendcutsend.com/blog/7-common-mistakes-when-designing-for-sheet-metal-bending/"
    },
    {
      "id": 55,
      "question": "What flange size considerations prevent bending errors?",
      "answer": "Min length per material (e.g., 0.255” for 0.040” aluminum); max bend 44”. Beginners: Equipment fit; professionals: Specs check. Best practice: Consult charts. Example: 1.15” min for stainless.",
      "link": "https://sendcutsend.com/blog/7-common-mistakes-when-designing-for-sheet-metal-bending/"
    },
    {
      "id": 56,
      "question": "How to avoid bends too close in sheet metal design?",
      "answer": "Maintain min distance per material/thickness. Beginners: Failure prevention; professionals: Spacing. Best practice: Adjust geometry. Example: Per specs for aluminum.",
      "link": "https://sendcutsend.com/blog/7-common-mistakes-when-designing-for-sheet-metal-bending/"
    },
    {
      "id": 57,
      "question": "What causes bending collisions and how to avoid?",
      "answer": "Interference from sequence/geometry; space bends, plan order. Beginners: Preview; professionals: Tooling mind. Best practice: 3D bend review. Example: Sequence flanges first.",
      "link": "sendcutsend.com/blog/7-common-mistakes-when-designing-for-sheet-metal-bending/"
    },
    {
      "id": 58,
      "question": "How to prevent geometry distortion in bending?",
      "answer": "Features min spacing from bend; support points. Beginners: Warping avoidance; professionals: Material diff. Best practice: CAD values. Example: Holes 2.5x from line.",
      "link": "https://sendcutsend.com/blog/7-common-mistakes-when-designing-for-sheet-metal-bending/"
    },
    {
      "id": 59,
      "question": "How to ensure bend support across in sheet metal?",
      "answer": "Full support for even force; reference edge for irregular. Beginners: Accuracy; professionals: Springback control. Best practice: Parallel orientations. Example: Temporary edge for wavy flange.",
      "link": "https://sendcutsend.com/blog/7-common-mistakes-when-designing-for-sheet-metal-bending/"
    },
    {
      "id": 60,
      "question": "What are general tolerances for sheet metal features?",
      "answer": "Bending ±0.508mm, hole ±0.127mm, angularity ±1°. Beginners: Standard; professionals: Stackup consider. Best practice: Material impact. Example: Edge-hole ±0.127mm.",
      "link": "https://www.komaspec.com/about-us/blog/sheet-metal-design-guidelines-designing-components/"
    },
    {
      "id": 61,
      "question": "What factors impact tolerances in sheet metal?",
      "answer": "Material, process complexity, equipment, fabricator capability. Beginners: Thickness variance; professionals: Negative tolerance trend. Best practice: Uniform thickness. Example: Cold rolled for precision.",
      "link": "https://www.komaspec.com/about-us/blog/sheet-metal-design-guidelines-designing-components/"
    },
    {
      "id": 62,
      "question": "What are laser cutting tolerances for sheet metal?",
      "answer": "Linear ±0.20mm standard, hole ±0.25mm; min diameter ≥0.5x thickness. Beginners: Precision up to 20mm thick; professionals: Pierce point care. Best practice: ≥ thickness diameter. Example: ±0.15mm high precision.",
      "link": "https://www.komaspec.com/about-us/blog/sheet-metal-design-guidelines-designing-components/"
    },
    {
      "id": 63,
      "question": "What are sheet bending tolerances?",
      "answer": "Linear ±0.1mm, angle ±1°; radius from die. Beginners: No true 90°; professionals: High ±0.5°. Best practice: Consistent radius. Example: Bend length ±0.20mm.",
      "link": "https://www.komaspec.com/about-us/blog/sheet-metal-design-guidelines-designing-components/"
    },
    {
      "id": 64,
      "question": "What are stamping tolerances for 1-3mm sheet metal?",
      "answer": "Linear ±0.1mm, hole ±0.05mm, angle ±1°. Beginners: Die complexity; professionals: Tight ±0.025mm. Best practice: Material match. Example: Form ±0.1mm.",
      "link": "/technical"
    },
    {
      "id": 65,
      "question": "What are punching tolerances in sheet metal?",
      "answer": "Linear ±0.1mm, hole ±0.1mm, angle ±1°. Beginners: Tool wear; professionals: Calibration. Best practice: Tight ±0.05mm. Example: For holes in steel.",
      "link": "/technical"
    },
    {
      "id": 66,
      "question": "What are rolling tolerances for sheet metal?",
      "answer": "Thickness ±0.1mm, width ±0.5mm. Beginners: Uniformity; professionals: Roller condition. Best practice: Temperature control. Example: For cylindrical forms.",
      "link": "/technical"
    },
    {
      "id": 67,
      "question": "What are bend and relief radius guidelines?",
      "answer": "Standard 0.80mm die; same plane/direction. Beginners: Springback mitigation; professionals: Consistent. Best practice: Larger for thick. Example: 0.03” internal.",
      "link": "/technical"
    },
    {
      "id": 68,
      "question": "What are offset bend guidelines?",
      "answer": "Radius ≥ thickness, flange ≥3x, planes ≥2x apart. Beginners: Z-shapes; professionals: Brackets. Best practice: Low carbon 0.5x or 0.03”. Example: Tiered shelf.",
      "link": "/technical"
    },
    {
      "id": 69,
      "question": "What are clearances around bends in sheet metal?",
      "answer": "Hole 2.5x + r, slot 4x + r, edge 2x, etc. Beginners: Feature placement; professionals: Deformation. Best practice: Per feature type. Example: Extruded 3x + r.",
      "link": "/technical"
    },
    {
      "id": 70,
      "question": "What are hole/slot design guidelines?",
      "answer": "Diameter ≥ thickness or 1mm; spacing 2-3x between. Beginners: Burring prevention; professionals: Alloy 2x. Best practice: Edge 2x. Example: 1mm min for 0.5mm sheet.",
      "link": "/technical"
    },
    {
      "id": 71,
      "question": "What are curl guidelines for sheet metal edges?",
      "answer": "Radius ≥2x thickness, opening ≥ thickness. Beginners: Strength/safety; professionals: Hole radius + thickness. Best practice: Internal bend 6x radius + t. Example: Rounded edge on panel.",
      "link": "/technical"
    },
    {
      "id": 72,
      "question": "What are hem design guidelines?",
      "answer": "Open diameter = t, return 4x; teardrop opening 0.25t. Beginners: Stiffening; professionals: Open/teardrop for no fracture. Best practice: External bend 8x t. Example: Folded edge for safety.",
      "link": "/technical"
    },
    {
      "id": 73,
      "question": "What are notch and tab guidelines?",
      "answer": "Notch width ≥1.5t or 1mm, length ≤5x; tab width ≥2t or 3.2mm. Beginners: Access/joining; professionals: Radius 0.5t. Best practice: Between notches 2t. Example: Tab for riveting.",
      "link": "/technical"
    },
    {
      "id": 74,
      "question": "What are corner fillet and relief cut guidelines?",
      "answer": "Fillet =0.5t for safety; relief width ≥t, length >r. Beginners: Rounding; professionals: Tearing prevention. Best practice: Overhang 0.5t. Example: 0.5mm fillet on bracket.",
      "link": "/technical"
    },
    {
      "id": 75,
      "question": "What are dimple guidelines in sheet metal?",
      "answer": "Diameter ≤6t, depth ≤0.5 diameter. Beginners: Strength reduction; professionals: Edge 4t + r. Best practice: Between 4t + r. Example: Ventilation dimples.",
      "link": "/technical"
    },
    {
      "id": 76,
      "question": "What is welding?",
      "answer": "Joining metals by melting and fusing with heat. Beginners: Basic fusion; professionals: SSAB steels focus. Best practice: Preheat for high-strength. Example: Arc for sheet.",
      "link": "/services"
    },
    {
      "id": 77,
      "question": "What are common welding methods for sheet metal?",
      "answer": "MIG, TIG, stick; combine for hybrid. Beginners: MIG for speed; professionals: TIG for precision thin. Best practice: Shielding gas match. Example: MIG for aluminum sheets.",
      "link": "/services"
    },
    {
      "id": 78,
      "question": "Can all steels be welded?",
      "answer": "Yes, but parameters vary by type. Beginners: Standard; professionals: High-strength care. Best practice: Consumables match. Example: Low-carbon easy, high needs preheat.",
      "link": "/services"
    },
    {
      "id": 79,
      "question": "What are welding consumables?",
      "answer": "Filler metals, fluxes, gases. Beginners: Electrode choice; professionals: Hydrogen low. Best practice: Dry storage. Example: ER70S-6 for carbon steel.",
      "link": "/services"
    },
    {
      "id": 80,
      "question": "How to preheat steel before welding?",
      "answer": "To reduce hardness, hydrogen; temp per grade. Beginners: Torch; professionals: Measure. Best practice: 100-200°C for thick. Example: Preheat AHSS to 150°C.",
      "link": "/services"
    },
    {
      "id": 81,
      "question": "How much hydrogen is allowed in welded joints?",
      "answer": "<5ml/100g for low risk. Beginners: Crack prevention; professionals: Test. Best practice: Dry electrodes. Example: <4ml for critical.",
      "link": "/services"
    },
    {
      "id": 82,
      "question": "What shielding gas for welding sheet metal?",
      "answer": "Argon/CO2 mix for MIG; pure argon TIG. Beginners: Coverage; professionals: Spatter control. Best practice: Flow 15-20l/min. Example: 82% Ar/18% CO2 for steel.",
      "link": "/services"
    },
    {
      "id": 83,
      "question": "Can welding be done on primed surfaces?",
      "answer": "Yes, but remove primer near joint. Beginners: Thin plates; professionals: Deformation. Best practice: Clean 25mm wide. Example: Primer on sheet edges.",
      "link": "/services"
    },
    {
      "id": 84,
      "question": "What is the heat-affected zone (HAZ) in welding?",
      "answer": "Altered microstructure near weld from heat. Beginners: Softening; professionals: Hardness loss. Best practice: Low input. Example: 5-10mm wide in sheet.",
      "link": "/services"
    },
    {
      "id": 85,
      "question": "What throat thickness for fillet welds?",
      "answer": "Per load; min 3mm for sheet. Beginners: Strength; professionals: Deformation. Best practice: Stitch for thin. Example: 4mm for 6mm plate.",
      "link": "/services"
    },
    {
      "id": 86,
      "question": "Why does plate deform after welding?",
      "answer": "Residual stresses; thin more prone. Beginners: Heat expansion; professionals: Control input. Best practice: Clamps, sequencing. Example: Sheet warp from uneven heat.",
      "link": "/services"
    },
    {
      "id": 87,
      "question": "What welding heat input to use?",
      "answer": "Low for thin/high-strength to minimize HAZ. Beginners: Balance; professionals: <1.5kJ/mm. Best practice: Speed up. Example: 0.8kJ/mm for AHSS sheet.",
      "link": "/services"
    },
    {
      "id": 88,
      "question": "What are hydrogen cracks in welding?",
      "answer": "Cold cracks from hydrogen embrittlement. Beginners: Delayed; professionals: Preheat. Best practice: Low H consumables. Example: In high-strength steels.",
      "link": "/services"
    },
    {
      "id": 89,
      "question": "What causes welded joint failure?",
      "answer": "Poor prep, wrong params, defects. Beginners: Clean; professionals: Inspect. Best practice: NDT. Example: Undercut from high voltage.",
      "link": "/services"
    },
    {
      "id": 90,
      "question": "What are common welding defects?",
      "answer": "Porosity, undercut, cracks, spatter. Beginners: Gas issues; professionals: Param adjust. Best practice: Clean, slow travel. Example: Porosity from moisture.",
      "link": "/services"
    },
    {
      "id": 91,
      "question": "What are common imperfections in raw sheet metal?",
      "answer": "Markings, oxidation, burrs, dross, smudges. Beginners: From process; professionals: Deburr. Best practice: Linear for flat. Example: Laser dross removal.",
      "link": "https://sendcutsend.com/blog/sheet-metal-surface-finish-options/"
    },
    {
      "id": 92,
      "question": "What is linear deburring for sheet metal?",
      "answer": "Abrasive belts remove burrs on flat parts. Beginners: Smooth finish; professionals: No lead time add. Best practice: For large flats. Example: Aluminum uniformity.",
      "link": "https://sendcutsend.com/blog/sheet-metal-surface-finish-options/"
    },
    {
      "id": 93,
      "question": "How does tumbling finish sheet metal?",
      "answer": "Vibrating media abrades edges/surfaces. Beginners: Rolled edges; professionals: Small parts. Best practice: Select for handling. Example: Brass softening.",
      "link": "https://sendcutsend.com/blog/sheet-metal-surface-finish-options/"
    },
    {
      "id": 94,
      "question": "What secondary finishes for cosmetic sheet metal?",
      "answer": "Blasting, sanding, graining, polishing. Beginners: Textured prep; professionals: Adhesion aid. Best practice: Bead before anodize. Example: Matte from glass bead.",
      "link": "https://sendcutsend.com/blog/sheet-metal-surface-finish-options/"
    },
    {
      "id": 95,
      "question": "What surface finish scales for sheet metal?",
      "answer": "Ra average, grit scratches, stainless finishes (2B, #4, 8). Beginners: Grit for comms; professionals: Source match. Best practice: 2B for clean. Example: #4 brushed 150 grit.",
      "link": "/services"
    },
    {
      "id": 96,
      "question": "How to achieve beautiful sheet metal finishes?",
      "answer": "Source pre-finished material, use abrasive belts. Beginners: Cleanup; professionals: Mirror via compounds. Best practice: Timesaver for deburr. Example: Stainless 8 mirror.",
      "link": "/services"
    },
    {
      "id": 97,
      "question": "What factors before specifying sheet metal finish?",
      "answer": "Aesthetic vs. function, cost/time, texture for coating. Beginners: Not always smoother better; professionals: Ra low loses grain. Best practice: Textured for paint. Example: Grit blast for adhesion.",
      "link": "/services"
    },
    {
      "id": 98,
      "question": "What finishes for medical sheet metal parts?",
      "answer": "2B/mirror for sterility, ISO 13485. Beginners: Clean; professionals: FDA. Best practice: Non-porous. Example: Surgical enclosures.",
      "link": "/services"
    },
    {
      "id": 99,
      "question": "What finishes for food industry sheet metal?",
      "answer": "Smooth 2B/BA, NSF/USDA. Beginners: Bacteria prevention; professionals: Easy clean. Best practice: Non-porous. Example: Tanks with BA.",
      "link": "/services"
    },
    {
      "id": 100,
      "question": "What finishes for aerospace sheet metal?",
      "answer": "Corrosion-resistant, AS9100, low Ra. Beginners: Durable; professionals: Lightweight. Best practice: Anodize aluminum. Example: Panels with chromate.",
      "link": "/services"
    },
    {
      "id": 101,
      "question": "What is powder coating for sheet metal?",
      "answer": "Electrostatic dry powder, heat cured; durable, uniform. Beginners: No drips; professionals: Custom colors. Best practice: Pretreat for adhesion. Example: Appliances in 50+ colors.",
      "link": "/services"
    },
    {
      "id": 102,
      "question": "What is bead blasting for sheet metal finishing?",
      "answer": "Abrasive beads for textured smooth; removes burrs. Beginners: Prep; professionals: Adhesion aid. Best practice: Glass for matte. Example: Aircraft parts pre-coat.",
      "link": "/services"
    },
    {
      "id": 103,
      "question": "What is e-coating for sheet metal?",
      "answer": "Electrophoretic epoxy paint, even thin coat. Beginners: Corrosion; professionals: Primer. Best practice: + powder for UV. Example: Automotive underbody.",
      "link": "/services"
    },
    {
      "id": 104,
      "question": "What is anodizing for sheet metal?",
      "answer": "Electrolytic oxide on aluminum; hard, colored. Beginners: Wear resistance; professionals: Marine. Best practice: Specific grades. Example: Laptop housings.",
      "link": "/services"
    },
    {
      "id": 105,
      "question": "What is zinc coating for sheet metal?",
      "answer": "Electrolysis barrier/sacrificial; uniform. Beginners: Corrosion; professionals: Formable. Best practice: Pre-weld. Example: Bolts in auto.",
      "link": "/services"
    },
    {
      "id": 106,
      "question": "How does material selection affect sheet metal costs?",
      "answer": "Exotic alloys higher; common like carbon steel lower. Beginners: Purpose match; professionals: Substitute 80% properties. Best practice: Pre-plated for corrosion. Example: Aluminum vs. titanium savings.",
      "link": "/pricing"
    },
    {
      "id": 107,
      "question": "How do welding methods impact costs?",
      "answer": "Fillet > stitch; thin sheets risk distortion. Beginners: Rivet alternative; professionals: Sequence. Best practice: Stitch prototypes. Example: Tack for temp joins.",
      "link": "/pricing"
    },
    {
      "id": 108,
      "question": "What fastener choices affect sheet metal costs?",
      "answer": "Special PEM higher; self-clinching saves assembly. Beginners: Purpose; professionals: Geometry. Best practice: Chamfer for install. Example: Rivets vs. welds.",
      "link": "/pricing"
    },
    {
      "id": 109,
      "question": "How do finishing options influence costs?",
      "answer": "Plating, powder custom colors add; standard lower. Beginners: Function; professionals: Lead time. Best practice: Passivate stainless. Example: Black oxide cheap corrosion.",
      "link": "/pricing"
    },
    {
      "id": 110,
      "question": "What questions for material cost estimation?",
      "answer": "Purpose, exotic need, treatment impact. Beginners: Common alloys; professionals: 80% substitute. Best practice: Galvanized alternative. Example: Plating add 20%.",
      "link": "/pricing"
    },
    {
      "id": 111,
      "question": "What questions for welding cost estimation?",
      "answer": "Type, alternative riveting, heat effect. Beginners: Stitch save; professionals: Thin avoid. Best practice: Accessible outside. Example: Corner fuse extra.",
      "link": "/pricing"
    },
    {
      "id": 112,
      "question": "What questions for fastener cost estimation?",
      "answer": "Purpose, services add, self-clinch simplify. Beginners: Load vs. aesthetic; professionals: Space save. Best practice: PEM models. Example: Studs per part up 10%.",
      "link": "/pricing"
    },
    {
      "id": 113,
      "question": "What questions for finishing cost estimation?",
      "answer": "Option purpose, custom vs. standard, corrosion need. Beginners: Powder durable; professionals: Screen complex. Best practice: Align function. Example: Custom color + lead.",
      "link": "/pricing"
    },
    {
      "id": 114,
      "question": "How to estimate production cost quickly for sheet metal?",
      "answer": "Factor material, labor, overhead; use software for BOM. Beginners: Rough volume; professionals: 100s units/year. Best practice: Slit coil for camber. Example: 60 parts BOM.",
      "link": "/pricing"
    },
    {
      "id": 115,
      "question": "What is metal estimation in construction?",
      "answer": "Accurate quantity for steel/metal to avoid overrun. Beginners: Weight calc; professionals: Software. Best practice: Tolerance charts. Example: Sheet weight via density.",
      "link": "/pricing"
    },
    {
      "id": 116,
      "question": "What causes burred edges in sheet metal cutting?",
      "answer": "Blunt blades, large clearance. Beginners: Tear vs. shear; professionals: Clamp pressure. Best practice: Manual clearance set. Example: Reduce to 10% thickness.",
      "link": "/technical"
    },
    {
      "id": 117,
      "question": "What causes twisting in sheet metal shearing?",
      "answer": "Narrow strips, wrong rake. Beginners: Axis twist; professionals: Angle adjust. Best practice: Per geometry. Example: Increase rake for thin.",
      "link": "/technical"
    },
    {
      "id": 118,
      "question": "What causes cambering in sheet metal?",
      "answer": "Varying thickness along width. Beginners: Concave bow; professionals: Grain shift. Best practice: Rake change. Example: Horizontal move warp.",
      "link": "/technical"
    },
    {
      "id": 119,
      "question": "What causes bowing in shearing?",
      "answer": "Inappropriate for long thin. Beginners: Edge rise; professionals: Rake min. Best practice: Back support. Example: Decrease rake 1°.",
      "link": "/technical"
    },
    {
      "id": 120,
      "question": "What causes splits in stamping?",
      "answer": "Exceed tensile, thin to tear. Beginners: Necking; professionals: Simulation. Best practice: Larger radius. Example: Depth reduce 10%.",
      "link": "/technical"
    },
    {
      "id": 121,
      "question": "What causes wrinkles in stamping?",
      "answer": "Compressive strain crush. Beginners: Flange wrinkle; professionals: Draw beads. Best practice: Stretch instead. Example: Binder for control.",
      "link": "/technical"
    },
    {
      "id": 122,
      "question": "What causes springback in stamping?",
      "answer": "Yield exceed, relax. Beginners: Radius small; professionals: Overbend. Best practice: Stretching. Example: Aluminum 5° back.",
      "link": "/technical"
    },
    {
      "id": 123,
      "question": "What causes cracks in bending angle?",
      "answer": "Poor pliability, small radius. Beginners: Compression; professionals: Heat soften. Best practice: Softer metal. Example: Anneal pre-bend.",
      "link": "/technical"
    },
    {
      "id": 124,
      "question": "What causes unstable bending angle?",
      "answer": "Insufficient pressure, irregular. Beginners: Buckling; professionals: Jack force up. Best practice: Die fillet balance. Example: Clearance even.",
      "link": "/technical"
    },
    {
      "id": 125,
      "question": "What causes hole deformation in bending?",
      "answer": "Friction with die. Beginners: Slide; professionals: Ejector pressure. Best practice: Hard spot add. Example: Raise plate force 20%.",
      "link": "/technical"
    },

    {
      "id": 126,
      "question": "What is Aero Enterprises?",
      "answer": "Aero Enterprises is a leading sheet metal supplier based in Vasai, Maharashtra, specializing in high-quality industrial-grade materials like Cold Rolled (CRC), Hot Rolled (HR), Galvanized Iron (GI), Stainless Steel (SS), and Pickled & Oiled (P&O) sheets. Trusted by manufacturers in automotive, construction, fabrication, and industrial sectors, they offer reliable sourcing from reputed mills. For beginners, think of them as a one-stop shop for durable metal bases; professionals appreciate their compliance with standards like IS and ASTM for consistent quality. Best practice: Verify MTC for critical applications. Example: Supplying CRC for precision auto panels.",
      "link": "/contact"
    },
    {
      "id": 127,
      "question": "What types of sheet metals do you supply?",
      "answer": "We supply Cold Rolled Close Annealed (CRC) for smooth, precision finishes; Hot Rolled (HR) for structural strength; Galvanized Iron (GI) for corrosion protection; Stainless Steel (SS 304/316) for durability in harsh environments; and Pickled & Oiled (P&O) for clean welding surfaces. Beginners: Match to use—CRC for aesthetics, HR for cost; professionals: Consider formability and tensile strength. Best practice: Use GI for outdoor exposure to extend lifespan 2-3x. Example: SS 316 for marine HVAC ducts.",
      "link": "/contact"
    },
    {
      "id": 128,
      "question": "What is the difference between Hot Rolled (HR) and Cold Rolled (CRC) sheets?",
      "answer": "HR sheets are processed above 1700°F for easy shaping, yielding rougher surfaces, rounded edges, and lower cost—ideal for structural/welding where tolerances aren't tight. CRC is further cold-worked at room temp for smoother, harder finishes with precise dimensions and higher strength, suited for aesthetics and tight fits. Beginners: HR for budget builds; professionals: CRC for work-hardened parts. Best practice: Use CRC for visible auto components to avoid post-processing. Example: HR for I-beams, CRC for appliance housings.",
      "link": "/contact"
    },
    {
      "id": 129,
      "question": "Why choose Galvanized Iron (GI) sheets?",
      "answer": "GI sheets feature a zinc coating for superior corrosion resistance in moist/outdoor settings, offering durability, low maintenance, and cost savings over time. Beginners: Great for weather-exposed roofs; professionals: Provides sacrificial protection, extending life 20-50 years. Best practice: Avoid welding without prep to prevent zinc fumes; pair with powder coating for aesthetics. Example: GI in fencing and automotive panels to resist salt spray.",
      "link": "/contact"
    },
    {
      "id": 130,
      "question": "What industries do you serve?",
      "answer": "We serve automotive (panels, chassis), construction (roofing, structures), industrial fabrication (enclosures, guards), furniture (frames, cabinets), HVAC (ducts), electrical (panels), agriculture (equipment), and custom shops. Beginners: Versatile for everyday builds; professionals: Tailored to sector needs like lightweight for EVs. Best practice: Consult for compliance—e.g., SS for food-grade. Example: HR sheets for commercial vehicle frames.",
      "link": "/contact"
    },
    {
      "id": 131,
      "question": "Do you offer custom sizes and thicknesses?",
      "answer": "Yes, we provide custom cuts, dimensions, and thicknesses for bulk or unique needs, with expert guidance on specs. Beginners: Start with sketches; professionals: Supply CAD for accuracy. Best practice: Optimize nesting to minimize waste <5%. Example: Custom 1.5mm GI for HVAC prototypes.",
      "link": "/contact"
    },
    {
      "id": 132,
      "question": "What are the standard sheet sizes you stock?",
      "answer": "Standard stocks include 8x4 ft (2500x1250mm) and 10x4 ft (3000x1250mm), with thicknesses 0.5-6mm (26-3 gauge). Coils and cuts available for quick delivery. Beginners: Matches common Indian mills; professionals: Reduces scrap via standard nesting. Best practice: Order in multiples for efficiency. Example: 8x4 CRC for furniture panels.",
      "link": "/contact"
    },
    {
      "id": 133,
      "question": "What is Stainless Steel (SS) and when should I use it?",
      "answer": "SS has chromium for a passive oxide layer against corrosion; SS 304 for versatile, weldable food/industrial use; SS 316 with molybdenum for chloride/chemical resistance in marine settings. Beginners: 304 for kitchens; professionals: 316 for coastal durability (2x life). Best practice: Anneal post-weld for strength. Example: 304 sheets for equipment, 316 for pharma tanks.",
      "link": "/contact"
    },
    {
      "id": 134,
      "question": "Can you provide Material Test Certificates (MTC)?",
      "answer": "Yes, MTCs detail grade, composition, properties, and standards (ASTM, IS, JIS) for traceability. Beginners: Ensures authenticity; professionals: Critical for audits/ISO. Best practice: Request with every lot for compliance. Example: MTC for SS 304 verifying 18% Cr content.",
      "link": "/contact"
    },
    {
      "id": 135,
      "question": "What are Pickled & Oiled (P&O) sheets used for?",
      "answer": "P&O sheets are acid-cleaned to remove scale and oiled for rust prevention, providing clean surfaces for welding, forming, painting, and laser cutting. Beginners: Ideal for contamination-free starts; professionals: Improves ductility for deep draws. Best practice: Use in visible areas for better paint adhesion. Example: P&O HR for auto frames and machinery parts.",
      "link": "/contact"
    },
    {
      "id": 136,
      "question": "How do I calculate the weight of a sheet metal piece?",
      "answer": "Formula: Weight (kg) = L(m) × W(m) × T(mm) × Density(kg/m³) × 0.001. Mild steel density=7850; e.g., 2.5×1.25×2mm=49kg. Add 5-7% for GI. Beginners: Use online tools; professionals: Factor alloys. Best practice: Verify for transport—over 50kg needs forklift. Example: SS 304 (8000 density) weighs ~50.6kg same size.",
      "link": "/contact"
    },
    {
      "id": 137,
      "question": "Do you offer delivery services in Vasai and nearby areas?",
      "answer": "Yes, we deliver safely to Vasai, Virar, Nalasopara, Palghar, and Mumbai with packaging and logistics partners; pickup available. Beginners: Track via app; professionals: Bulk coordination. Best practice: Schedule for just-in-time to cut storage. Example: Same-day for local small orders.",
      "link": "/contact"
    },
    {
      "id": 138,
      "question": "What is your minimum order quantity (MOQ)?",
      "answer": "MOQ is one sheet, flexible for customs/small runs; bulk gets discounts. Beginners: Start small; professionals: Negotiate for regulars. Best practice: Forecast annual use for tiers. Example: 10 sheets SS for prototypes.",
      "link": "/contact"
    },
    {
      "id": 139,
      "question": "How quickly can you fulfill an order?",
      "answer": "Stock items: 24-48hrs; customs: 3-5 days; expedited available. Beginners: Plan buffers; professionals: Align with production. Best practice: Provide specs early for quotes. Example: HR coils next-day for urgent builds.",
      "link": "/contact"
    },
    {
      "id": 140,
      "question": "Why should I choose Aero Enterprises over other suppliers?",
      "answer": "We offer certified quality, competitive prices, expert advice, reliable stock, timely delivery, local Vasai access, and flexibility. Beginners: Hassle-free; professionals: Builds partnerships. Best practice: Trial small order. Example: Faster turnaround than imports.",
      "link": "/contact"
    },
    {
      "id": 141,
      "question": "What payment methods do you accept?",
      "answer": "Bank transfers (NEFT/RTGS/IMPS), UPI, cash for pickups, credit for regulars. Beginners: UPI for speed; professionals: Terms for volume. Best practice: Invoice matching for audits. Example: 30-day credit for loyal clients.",
      "link": "/contact"
    },
    {
      "id": 142,
      "question": "Can you help with material selection for my project?",
      "answer": "Yes, free consultation on strength, exposure, budget—recommend optimal type/thickness. Beginners: Share basics; professionals: Detail specs. Best practice: Prototype test. Example: Suggest GI over HR for coastal roofing.",
      "link": "/contact"
    },
    {
      "id": 143,
      "question": "Do you supply materials for automotive applications?",
      "answer": "Yes, automotive-grade CRC/GI/SS for panels, chassis, brackets—meeting formability/weld standards. Beginners: Lightweight options; professionals: High-strength for EVs. Best practice: Use aluminum alloys for 20% weight cut. Example: CRC for door panels, GI for underbody.",
      "link": "/contact"
    },
    {
      "id": 144,
      "question": "What quality standards do your products meet?",
      "answer": "ASTM, IS, JIS, EN—sourced from mills with verified composition/properties. Beginners: Global trust; professionals: Audit-ready. Best practice: Cross-check MTC. Example: IS 1079 for CRC compliance.",
      "link": "/contact"
    },
    {
      "id": 145,
      "question": "How do I place an order or request a quotation?",
      "answer": "Contact via phone/email/WhatsApp with type, size, qty, location—get quote/timeline fast. Beginners: Use forms; professionals: Account setup. Best practice: Include drawings. Example: Quote in 2hrs for 50 CRC sheets.",
      "link": "/contact"
    }


  ];


  return (
    <>

      <section className='bg-white'>
        <div className='blue-metal w-full h-[30vh] flex justify-center items-center'>
          <div className='ml-4'>
            <h1 className="text-3xl text-white pb-4">
              Why Aero Enterprises ?
            </h1>
            <p className=' text-white'>
              Because Aero Enterprises is Vasais Most Trusted Sheet Metal Supplier
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-20 pb-10">

          {/* Visible FAQ microdata wrapper for crawlers that read HTML */}
          <div itemScope itemType="https://schema.org/FAQPage">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Questions.map((items) => (
                <div
                  key={items.id}
                  itemScope
                  itemType="https://schema.org/Question"
                  className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col min-h-[220px] transition-all duration-300 hover:shadow-xl"
                  data-aos="zoom-in-up">

                  {/* Header */}
                  <div className="p-6 dark-metal-card">
                    <h2 itemProp="name" className='text-lg font-semibold text-white leading-tight'>{items.question}</h2>
                  </div>

                  {/* Content */}
                  <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer" className='p-6 grow flex flex-col justify-between'>
                    <div itemProp="text" className='text-sm text-gray-600 leading-relaxed mb-4 whitespace-pre-line'>{items.answer}</div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </section>
    </>
  )
}

export default Why
