const SITE_DATA = {
  projects: [
    {
      id: "project-one",
      title: "Impact Testing: Fixation Devices",
      meta: "Drop-Test Study",
      image: "Project 1/Setup2.jpg",
      topAction: {
        label: "View 2026 World Congress of Biomechanics Poster",
        url: "Project 1/WCB_Poster.pdf"
      },
      blocks: [
        {
          type: "text",
          text: "The objective of this project was to compare the biomechanical performance of a short-arm 3D-printed fixation device versus a traditional plaster cast during a forward fall. A surrogate forearm was inserted into each cast and dropped onto an angled surface, while a 6-axis load cell and high-speed camera captured the impact. This project would not have been possible without the help of my team members and the Orthopaedic and Injury Biomechanics Group located at the ICORD, Blusson Spinal Cord Centre."
        },
        {
          type: "image-pair",
          images: ["Project 1/Setup1.jpg", "Project 1/Setup2.jpg"],
          caption: "Figure 1: The vertical drop tower used to release the surrogate forearm and cast onto the impact surface."
        },
        {
          type: "image-pair",
          images: ["Project 1/3D Cast Pre Impact.png", "Project 1/Plaster Cast Pre Impact.png"],
          contain: true,
          caption: "Figure 2: The two test subjects before impact. (Left) 3D-printed short-arm wrist cast and the plaster cast (right). These are still images taken from a Phantom V1212 camera and were used to measure certain geometric features before deformation."
        },
        {
          type: "video",
          src: "Project 1/Drop Text Video.mp4",
          caption: "Video recording of the drop procedure."
        },
        {
          type: "text",
          text: "Preliminary drop-test results revealed that the 3D-printed device produced a lower peak impact force (706 N vs. 1049 N for plaster cast), and showed no visible damage afterward, while the plaster cast cracked at the impact site."
        }
      ],
      links: []
    },
    {
      id: "project-two",
      title: "Linear FEA Solver",
      meta: "MATLAB & Abaqus",
      image: "Project 2/ABAQUSPIC.png",
      blocks: [
        {
          type: "text",
          text: "This project analyses the stress concentrations of an axially loaded, three-dimensional, and linearly elastic cube specimen with a spherical cavity located at its centre. The objective was to write a MATLAB FE script capable of solving for the stress and displacement components in this problem, and to validate the results against Abaqus and classical solid mechanics formulations from literature."
        },
        {
          type: "image-row",
          images: ["Project 2/3D.png", "Project 2/2D.png"],
          maxWidth: "max-w-[16%]",
          gap: 2
        },
        {
          type: "text",
          text: "Given the symmetrical attributes of this 3D problem, the FE analysis could be simplified into a 2D analysis by interpreting the cube as a solid of revolution that is deformed symmetrically with respect to its axis of symmetry (see above). The reduced 2D geometry that is meshed and simulated in both MATLAB and Abaqus is shown below in Figure 1."
        },
        {
          type: "image-row",
          images: ["Project 2/Mesh-crop.jpg?v=2", "Project 2/AbaqusMesh.png"],
          insets: [
            { image: "Project 2/closeupMAT.png", position: "center", width: "w-[30%]", label: "Magnification of constrained cavity" },
            { image: "Project 2/closeupAbaq.png", position: "center", width: "w-[30%]", label: "Magnification of constrained cavity" }
          ],
          caption: "Figure 1: (Left) MATLAB quadrilateral structured mesh with power-law spacing. (Right) Abaqus quad-dominated structured mesh with single edge biasing. Both FE meshes are solved via reduced integration."
        },
        {
          type: "list",
          title: "Important FE Assumptions and Simplifications",
          items: [
            "A uniform far-field stress σ<sub>∞</sub> of 100 MPa is established by making the cube's edge length 20x larger than the cavity radius (2 m vs. 0.1 m).",
            "Linear elastic material behaviour is assumed, since the ratio between σ<sub>∞</sub> and the elastic modulus E (90 GPa) is kept below 0.1.",
            "An axisymmetric FE solving approach is employed due to symmetry, meaning the field variables of strain, axial displacement, and stress components are independent of the angle θ and do not vary with circumferential position."
          ]
        },
        {
          type: "image-row",
          images: ["Project 2/AbaqusMeshConvergenceStudy.png?v=3", "Project 2/MatlabMeshConvergenceStudy.png"],
          caption: "Figure 2: Mesh convergence study. (Left) Peak axial stress monitored against the bias ratio parameter for Abaqus. (Right) Peak axial stress monitored against the power-law spacing coefficient for MATLAB."
        },
        {
          type: "image-row",
          images: ["Project 2/AxialStress-crop.jpg", "Project 2/RadialHoop-crop.jpg"],
          caption: "Figure 3: Simulated axial stress (top) and radial/hoop stress (bottom) vs. radial position for the MATLAB, Abaqus, and numerical FE methods.",
          cols: 1
        },
        {
          type: "table",
          title: "Percent error of MATLAB and Abaqus vs. the numerical solution (Bower, Applied Mechanics of Solids)",
          headers: ["Parameter", "MATLAB", "Abaqus"],
          rows: [
            ["σ<sub>rr, max</sub>", "1.67%", "2.12%"],
            ["σ<sub>θθ, max</sub>", "10.19%", "17.53%"],
            ["σ<sub>zz, max</sub>", "0.83%", "6.60%"],
            ["Max vertical displacement", "0%", "3.03%"]
          ]
        },
        {
          type: "table",
          title: "Percent difference: MATLAB vs. Abaqus",
          headers: ["Parameter", "% Difference"],
          rows: [
            ["σ<sub>rr, max</sub>", "0.18%"],
            ["σ<sub>θθ, max</sub>", "28.78%"],
            ["σ<sub>zz, max</sub>", "7.65%"],
            ["Max vertical displacement", "3.08%"]
          ]
        },
        {
          type: "text",
          text: "The increased percent error and percent difference for Abaqus, when compared to both the numerical and Matlab methods respectively, are due to the differences in mesh styles. Despite having the same bilinear quadrilateral structured geometry, the single edge biasing feature could not replicate the power law spacing behaviour. Although the two digital FE techniques had similar maximum element size differences of 47x and 52x, the power law model had a much more aggressive sizing function, with a greater proportion of smaller elements found near the cavity edge. Additionally, as shown in Figure 1 (right), larger quadrilateral aspect ratios are found near the constrained cavity edge in the Abaqus mesh due to how the software automatically reshapes elements along curved boundaries. Element skewness and acute interior angles within the elements seem to dominate the region around the cavity, which have been studied to impact solution quality."
        }
      ],
      links: []
    },
    {
      id: "project-three",
      title: "Metal Cutting Mechanics & Dynamics",
      meta: "Milling Simulations, Modal Analysis & Chatter Stability",
      image: "Project 3/DMGPIC.png",
      blocks: [
        {
          type: "text",
          text: "Below are a collection of MATLAB simulation projects, covering a range of machining topics including: cutting force simulations, workpiece surface error prediction, modal analysis, tool vibration, and chatter stability. The cutting mechanics theory and equations are drawn from Dr. Yusuf Altintas (currently my M.Eng project supervisor) and his textbook titled <a href=\"https://asmedigitalcollection.asme.org/appliedmechanicsreviews/article/54/5/B84/445205/Manufacturing-Automation-Metal-Cutting-Mechanics\" target=\"_blank\" rel=\"noopener\" class=\"inline-link\">Manufacturing Automation: Metal Cutting Mechanics</a>. The inspiration for these projects comes from the graduate course <u>MECH 544: Machine Cutting & Machine Tool Structures</u> at UBC."
        },
        {
          type: "heading",
          text: "1. Milling Cutting Mechanics Simulations"
        },
        {
          type: "text",
          text: "The objective of this project was to develop a generalised MATLAB script capable of simulating the forces acting on milling cutting tools for a variety of cutter geometries, cutting conditions, and materials. Predicting cutting forces is a challenge due to the complex helical nature of the cutter and its behaviour. In end milling, the tool is spinning and the chip thickness (removed material) varies with immersion angles. Immersion can be interpreted as tool engagement and refers to the angular extent over which the active cutting edge is in contact with the material during one full revolution. Below are simulation results for two different milling tools."
        },
        {
          type: "image-row",
          images: ["Project 3/Mill1-crop.jpg", "Project 3/Mill2-crop.jpg"],
          caption: "Figure 1: Predicted cutting forces for a 20 mm diameter, 4-flute carbide end-mill (0.1 mm/tooth/rev, 6,000 RPM spindle speed, 5 mm depth of cut). (Left) Straight-fluted tool (0° helix), up-milling with 90° radial immersion. (Right) Helical tool (33° helix), up-milling with 30° radial immersion."
        },
        {
          type: "text",
          text: "To approximate the amount of deflection leading to surface error marks on the finished workpiece, the tool shaft can be approximated as a cantilever beam, attached to a collet via linear springs in both the x and y directions. The fixed end is fully supported, while the tool tip is free. This is a surface error prediction method that does not involve dynamics."
        },
        {
          type: "image-row",
          images: ["Project 3/upmillingsurfaceerror.jpg", "Project 3/downmillingsurfaceerror.jpg"],
          caption: "Figure 2: Predicted surface error for a 19.05 mm diameter, 4-flute solid end-mill (55° helix angle, 100 mm tool stickout, 40 mm depth of cut, 0.1 mm/tooth/rev). (Left) Up-milling, 0°–30° immersion. (Right) Down-milling, 120°–180° immersion."
        },
        {
          type: "heading",
          text: "2. Experimental Modal Analysis for Multi-Degree-of-Freedom (MDOF) Vibration Systems",
          divider: true
        },
        {
          type: "text",
          text: "Being able to understand the dynamic behaviour of a CNC end-mill tool assembly is essential in minimising controllable vibrations. The objective of this project was to perform an industry level modal analysis procedure on a simplified MDOF system comprised of a tool, tool holder, and spindle mechanism. Experimental data for the modal analysis was acquired through impact hammer testing on six different positions along the axial length of the assembly to generate location specific frequency response functions (FRFs) for the structure (Figure 3)."
        },
        {
          type: "image",
          image: "Project 3/ModalPic.png",
          maxWidth: "max-w-2xl",
          caption: "Figure 3: Modal testing of a tool, tool holder, and spindle assembly for a Haas machine."
        },
        {
          type: "text",
          text: " Using the six location specific FRFs and their respective damping ratios and modal frequencies, mass normalised mode shapes were estimated and plotted (Figure 4 & 5). Being able to solve and visually present the mode shapes allows one to quickly locate regions of elevated flexibility. This technique is useful in planning and positioning roller supports for long-part turning operations to reduce vibration and surface errors."
        },
        
        {
          type: "image-row",
          images: ["Project 3/Mode 1.png", "Project 3/Mode 2.png"],
          cols: 2,
          captions: [
            "Figure 4: Visualization of the mass normalised mode shapes for mode 1 (435.55Hz)",
            "Figure 5: Visualization of the mass normalised mode shapes for mode 2 (775.70Hz)"
          ]
        },
        {
          type: "text",
          text: "It is also possible to derive the direct FRF at an alternative location that did not originally have the accelerometer. For example, the direct FRF at location two was experimentally determined and compared against actual tap-testing data (Figure 6 & 7)."
        },
        {
          type: "image-row",
          images: ["Project 3/MagPhaseH22.png", "Project 3/ImagRealH22.png"],
          cols: 2,
          captions: [
            "Figure 6: Magnitude (top) and phase (bottom) plots of the direct FRF measurement at point 2",
            "Figure 7: Real (top) and Imaginary (bottom) plots of the direct FRF measurement at point 2"
          ]
        },
        {
          type: "text",
          text: "A discrete time tool vibration simulation using the dynamics at location two (direct FRF at location 2) of a helical endmill cutting operation was plotted over time for two complete spindle revolutions (Figure 8)."
        },
        {
          type: "image",
          image: "Project 3/H22Vibra.png",
          maxWidth: "max-w-2xl",
          caption: "Figure 8: Predicted discrete time tool vibrations due to the influence of F<sub>x</sub> and F<sub>y</sub> forces."
        },
        {
          type: "heading",
          text: "3. Stability Lobe Generation for Milling Operations",
          divider: true
        },
        {
          type: "text",
          text: "Chatter in machining can be described as a self-excited vibrational phenomenon, capable of causing excessive wear on cutting tools, spindles, and other CNC components while reducing the surface finish quality on the workpiece. Being able to predict and avoid chatter is critical in high-precision machining applications. The objective of this project was to investigate two different methods for generating end-milling stability lobe diagrams and compare them against the commercial software CutPro from MAL Inc. Understanding chatter stability theory is important in industry as it can be used to predict optimal cutting conditions for different end-milling operations."
        },
        {
          type: "text",
          text: "The first method explored is the one-dimensional Tlusty stability lobe approximation (1967), and the second is a two-dimensional dynamic milling stability approach known as zero-order stability. This theory, proposed by Altintas and Budak (1995), produces stability lobes that account for coupled vibrational dynamics along two axes (x and y) rather than lumping them into a single averaged direction."
        },
        {
          type: "image-row",
          images: ["Project 3/StabilityDiagram_Tlu_ZO-crop.jpg"],
          cols: 1,
          caption: "Figure 9: The Tlusty (blue) and zero-order (red) stability lobe diagrams for the same tool and cutting conditions."
        },
        {
          type: "text",
          text: "These stability lobes allow you to pick the ideal spindle speed and depth of cut to avoid chatter while optimising material removal rate (MRR) and cycle times. Although generated in MATLAB, the zero-order stability plot (red) closely matched the output of the commercial software CutPro, validating the approach."
        }
      ],
      links: []
    },
    {
      id: "project-four",
      title: "Virtual Indexable Tool Builder Optimisation",
      meta: "M.Eng Project (in progress)",
      image: "Project 4/Too1.png",
      comingSoon: true
    }
  ],

  research: [
    {
      id: "research-one",
      title: "Biocompatible Implants",
      meta: "Biointerface Laboratory - McGill University",
      image: "Research 1/Collagen1.jpg",
      topAction: {
        label: "View Poster Presentation",
        url: "Research 1/Research 1 Poster.pdf"
      },
      blocks: [
        {
          type: "text",
          text: "To date, no percutaneous dental implant (titanium or polyetheretherketone (PEEK)) has been able to establish a permanent seal between itself and surrounding soft tissue, leading to infection and implant failure. Investigating the surface morphology of mineralised tooth tissues can help in the development of biomimetic implant coatings to recreate the naturally occurring dental-epithelial interface to reduce post-operative infection. The objective of this research was to mimic the mineralised tissue of teeth by mineralising 3D collagen gels on the surface of PEEK implant materials. I was fortunate enough to join this work through the Biointerface Laboratory, gaining hands on experience in materials engineering, experimental design, conducting quality checks, and getting familiar with scanning electron imaging techniques."
        },
        {
          type: "image-row",
          images: ["Research 1/PEEK CHUCK.png", "Research 1/SBF.png"],
          cols: 2,
          ratio: "1/1",
          flush: true,
          gap: 3,
          caption: "Figure 1: (Left) Before functionalising the surface of the bioinert PEEK discs, they are wet-sanded to introduce surface roughness (see Figure 2). This helps the activation and collagen layers adhere to the PEEK surface. (Right) The preparation of Simulated Body Fluid (SBF), an acellular, protein-free solution designed to mimic the ion concentration of blood plasma. It is used in materials engineering for studying how an implant material behaves in the body without using cells or performing in-vivo work. Its high calcium and phosphate content makes it an ideal agent for mineralising."
        },
        {
          type: "image",
          image: "Research 1/RAW PEEK SURFACE-conv.jpg",
          flush: true,
          maxWidth: "max-w-md",
          caption: "Figure 2: PEEK surface after 800 and 1200 grit rotary wet-sanding."
        },
        {
          type: "image-row",
          images: ["Research 1/PEEK Collagen Layer Not Dense-conv.jpg", "Research 1/PEEK Collagen Layer Dense-conv.jpg"],
          cols: 2,
          flush: true,
          gap: 3,
          caption: "Figure 3: A collagen matrix coating on the activated PEEK surface. (Left) A loosely woven collagen matrix. (Right) A dense network of collagen fibrils. Fine-tuning the matrix void factor and ensuring collagen network homogeneity across the implant surface were complex engineering challenges."
        },
        {
          type: "image-row",
          images: ["Research 1/ExtraFibrillar Mineralisation1-conv.jpg", "Research 1/ExtrafibrillarMineralisatoin2-conv.jpg"],
          cols: 2,
          flush: true,
          gap: 3,
          caption: "Figure 4: Examples of extrafibrillar mineralisation on the surface of collagen fibrils (Left & Right)."
        },
        {
          type: "text",
          text: "We test the elemental composition of the implant coatings to verify collagen deposition (presence of C and N) and mineralisation (presence of Ca and P, and the Ca/P ratio). The elevated carbon signal originates from the underlying PEEK material, while elevated chlorine and sodium levels are residues from the mineralising agent."
        },
        {
          type: "image-row",
          images: ["Research 1/EDS1_SEM_PIC-crop.png", "Research 1/EDS_MINERAL_ID-crop.png"],
          cols: 2,
          flush: true,
          gap: 3,
          caption: "Figure 5: SEM image of the mineralised region analysed (Left) and its corresponding EDS elemental map (Right)."
        },
        {
          type: "image",
          image: "Research 1/MAPSPECTRUM.png",
          maxWidth: "max-w-3xl",
          caption: "Figure 6: EDS map sum spectrum identifying the presence of Ca, P, Cl, Na, C, and N."
        },
        {
          type: "table",
          title: "EDS elemental composition of the mineralised coating",
          headers: ["Element", "Weight %", "Atomic %"],
          rows: [
            ["C", "37.72%", "48.60%"],
            ["N", "10.44%", "11.53%"],
            ["P", "3.83%", "1.92%"],
            ["Na", "2.75%", "1.85%"],
            ["Cl", "5.04%", "2.20%"],
            ["Ca", "7.85%", "3.03%"],
            ["Ca/P ratio (atomic)", "N/A", "1.58 (stoichiometric HA ≈ 1.67)"]
          ]
        },
        {
          type: "image-row",
          images: ["Research 1/Thick Mineral Layer-conv.jpg", "Research 1/Thick Mineral Layer 2-conv.jpg"],
          cols: 2,
          flush: true,
          gap: 3,
          caption: "Figure 7: On occasion, the implant coatings end up over-mineralised (Left & Right), forming a thick and brittle mineral layer that overpowers the underlying collagen network. This is where fine-tuning the mineral contents in the SBF becomes important, as the goal is to generate a biomimetic implant coating that still retains visible and functional organic structures."
        }
      ],
      links: []
    },
    {
      id: "research-two",
      title: "Spine",
      meta: "The Shriners Hospitals for Children – Canada",
      image: "Research 2/SpinePic1.png",
      coverImage: "Research 2/LabPhoto.png",
      coverCaption: "In 2024, I started working for the spine group at the Shriners Hospitals for Children, where I met a team of incredible researchers, professors, and physicians (photographed above). Our team studies Adolescent Idiopathic Scoliosis (AIS), a complex 3D spinal deformity that has many unknowns regarding its cause, progression, and treatments. At the Shriners, I performed digital thoracolumbar spinal reconstructions from patient radiographs to better understand curve severity and progression.",
      scholarUrl: "https://scholar.google.com/citations?user=v1_3AE0AAAAJ&hl=en",
      articles: [
        {
          title: "The TLR-M-CSF axis is implicated in increased bone turnover and curve progression in adolescent idiopathic scoliosis",
          authors: "Kai Sheng, Daniel G Bisson, Neil Saran, Jake Bourdages, <strong class=\"text-ink font-semibold\">Christopher Coluni</strong>, Kirby Upshaw, Kerstin Tiedemann, Svetlana V Komarova, Jean A Ouellet, Lisbet Haglund",
          journal: "Arthritis Research & Therapy",
          year: "2025",
          abstract: "Facet joint osteoarthritis (OA) is prevalent in patients with adolescent idiopathic scoliosis (AIS). The most pronounced OA presents above and below the curve's apex where the intervertebral rotation is the greatest. This indicates that facet joint OA is implicated and potentially contributes to AIS progression. OA impacts both cartilage and bone and we have previously demonstrated an association between lower bone quality and more severe OA in AIS facet joints. This study aimed to further investigate the molecular mechanisms underlying cartilage–bone crosstalk in the facet joints of patients with AIS.",
          url: "https://link.springer.com/article/10.1186/s13075-025-03535-6"
        },
        {
          title: "Technical insights and implications of thoracolumbar spine and neural tissue harvesting in recently deceased organ donors: a direct anterior approach integrated into multi-organ procurement protocols",
          authors: "Paolo Brigato, Federico Cardahi, Kai Sheng, Hosni Cherif, Li Li, <strong class=\"text-ink font-semibold\">Christopher Coluni</strong>, Kirby Upshaw, Jean Albert Ouellet, Lisbet Haglund",
          journal: "European Spine Journal",
          year: "2025",
          abstract: "To present a novel anterior surgical technique for harvesting thoracolumbar spinal tissue from cadaveric organ donors. The approach aims to ensure biological viability of harvested spinal tissue, while maintaining full compatibility with routine multi-organ procurement protocols. By addressing the limited availability of anterior harvesting methods, this technique aims to expand opportunities for high-quality experimental and translational spine research.",
          url: "https://link.springer.com/article/10.1007/s00586-025-09675-2"
        },
        {
          title: "Preoperative pain experience and distribution in relation to mental health in Lenke type 1 and 2 adolescent idiopathic scoliosis: a prospective cross-sectional study",
          authors: "Paolo Brigato, Ekin Celtikcioglu, <strong class=\"text-ink font-semibold\">Christopher Coluni</strong>, Kai Sheng, Ojasvi Sharma, David Tejera, Neil Saran, Lisbet Haglund, Jean Albert Ouellet",
          journal: "Spine Deformity",
          year: "2026",
          abstract: "Pain is common in adolescents with idiopathic scoliosis (AIS), yet its distribution is heterogeneous and mechanisms remain incompletely understood. Beyond structural factors, emerging evidence suggests a psychosocial component with links to mental health. This study examined the relationship between preoperative pain and its distribution with mental health in Lenke type 1–2 AIS patients undergoing posterior spinal fusion.",
          url: "https://link.springer.com/article/10.1007/s43390-026-01328-8"
        },
        {
          title: "Reduced mineralization potential of osteoblasts in adolescent idiopathic scoliosis: intrinsic dysfunction and crosstalk with TLR-activated chondrocytes",
          authors: "Kai Sheng, Daniel G Bisson, <strong class=\"text-ink font-semibold\">Christopher A Coluni</strong>, Paolo Brigato, Kirby Upshaw, Neil Saran, Jean Ouellet, Lisbet Haglund",
          journal: "Research Square (preprint)",
          year: "2025",
          abstract: "Patients with Adolescent Idiopathic Scoliosis (AIS) present with facet joint osteoarthritis, which may contribute to curve progression. While inflammatory mediators from degenerative cartilage are known to influence osteoclast activity, their effects on osteoblast function in AIS remain unclear.",
          url: "https://www.researchsquare.com/article/rs-7602845/latest"
        }
      ],
      links: []
    }
  ],

  hobbies: [
    {
      id: "bikes",
      title: "Bikes",
      meta: "Hobby",
      image: "Bike Pictures/Bike 3.png",
      blocks: [
        {
          type: "image-row",
          images: ["Bike Pictures/Bike 1_B_Before.png", "Bike Pictures/Bike 1_B_Middle.png", "Bike Pictures/Bike 1_B_After.png"],
          cols: 3,
          ratio: "4/3",
          flush: true,
          wide: true,
          caption: "The Cannondale Synapse: my first road bike, and the one that started it all. A comfortable, light alloy frame with endurance-focused geometry that's gone through several iterations, including a short-lived Profile Design TT cockpit conversion. It is now semi-finished, with 50mm deep-section rims and an upgraded 10-speed Shimano Ultegra/microSHIFT groupset."
        },
        {
          type: "image-row",
          images: ["Bike Pictures/Bike1_Before.png", "Bike Pictures/Bike 1_After.png"],
          cols: 2,
          ratio: "4/3",
          flush: true,
          caption: "The Argon 18 E112: the definition of form over function. This was my experiment to build an aero road bike using a frameset with track/TT geometry. The Argon was quick, but far from lightweight. Its horizontal dropouts made wheel alignment tricky under serious power efforts and handling was sluggish too. Even with these flaws, the E112 is my favourite frameset of all time. Before I can ride it again, it needs some much needed carbon repair."
        },
        {
          type: "image-row",
          images: ["Bike Pictures/Bike 2_Before.png", "Bike Pictures/Bike 2_After.png"],
          cols: 2,
          ratio: "4/3",
          flush: true,
          caption: "The Cannondale CAAD 5: my first neo-retro build. To avoid dealing with cracked carbon frames, I went back to my aluminum roots. The CAAD 5 is a stiff frame that handles like a true crit bike. The only downside is how often I need to polish it. Take a closer look at those welds, they don't make them like this anymore!"
        },
        {
          type: "image",
          image: "Bike Pictures/Bike 3.png",
          ratio: "4/3",
          flush: true,
          maxWidth: "max-w-md",
          caption: "The Cannondale CAAD 9: my current daily. After finding another CAAD frame on Marketplace with a friend, we decided to swap the raw metal frame for some colour. I've taken this bike on many climbs around Vancouver and it's a dream to ride. My local bike shop couldn't believe it weighed in at ~7.5kg, made possible by a 3T Ergonova Team carbon handlebar, carbon/titanium quick-release skewers, a Dura-Ace 11-speed cassette, and ZIPP 404s."
        },
        {
          type: "heading",
          text: "Photo Collection",
          divider: true
        },
        {
          type: "text",
          small: true,
          text: "Some additional photos of personal bikes and builds."
        },
        {
          type: "collage",
          ratio: "4/3",
          cols: 3,
          wide: true,
          images: [
            "Bike Pictures/Collection1.png",
            "Bike Pictures/Collection 2.png",
            "Bike Pictures/Collection 3.png",
            "Bike Pictures/Collection 4.png",
            "Bike Pictures/Collection 5.png",
            "Bike Pictures/Collection 6.png",
            "Bike Pictures/Collection 7.png",
            "Bike Pictures/Collection 8.png",
            "Bike Pictures/Collection 9.png"
          ]
        }
      ],
      links: []
    },
    {
      id: "drawing",
      title: "Drawing",
      meta: "Hobby",
      image: "Drawing/IMG_2031.jpg",
      blocks: [
        {
          type: "text",
          text: "Sometimes all you need is a good pen and some scrap paper. My inspiration for these sketches comes from different motorsport disciplines including DTM, Group C racers, the 1980s F1 turbo era, and FIA European truck racing."
        },
        {
          type: "collage",
          cols: 3,
          gap: 3,
          wide: true,
          images: [
            "Drawing/IMG_2031.jpg",
            "Drawing/IMG_2036.jpg",
            "Drawing/IMG_2033.jpg",
            "Drawing/IMG_2034.jpg",
            "Drawing/IMG_2032.jpg",
            "Drawing/IMG_2040.jpg"
          ]
        }
      ],
      links: []
    }
  ]
};
