export const dummyDotString: string = `digraph G {
  label="Curriculum - Computer Science - v2021"
  labelloc="t"
  fontsize=80
  rankdir=LR
    
    {
      node [shape=plaintext, fontsize=40, fontname="Times-Bold"];
      sem1[id="sem1" label="Semester 1"];
      sem2[id="sem2" label="Semester 2"];
      sem3[id="sem3" label="Semester 3"];
      sem4[id="sem4" label="Semester 4"];
      sem5[id="sem5" label="Semester 5"];
      sem6[id="sem6" label="Semester 6"];
      sem7[id="sem7" label="Semester 7"];
      sem8[id="sem8" label="Semester 8"];
      summer[id="summer" label="Summer"];
      elective[id="elective" label="Elective"];
      sem1 -> sem2 -> sem3 -> sem4 -> sem5 -> sem6 -> summer -> sem7 -> sem8 -> elective[style="invis"];
    }
    
    node[shape=rectangle, width=4, fontsize=30, margin=0.2, style=filled,fillcolor="#FFFFFF",color="#000000"]
    CH011[id="course-CH101" label="CH011 (3,0)\nChemistry for Engineer"]
    CH012[id="course-CH102" label="CH012 (0,1)\nChemistry Laboratory"]
    EN007[id="course-EN007" label="EN007 (2,0)\nWriting AE1"]
    EN008[id="course-EN008" label="EN008 (2,0)\nListening AE1"]
    MA001[id="course-MA001" label="MA001 (4,0)\nCalculus 1"]
    PH013[id="course-PH013" label="PH013 (2,0)\nPhysics 1\n(general mechanics"]
    PH014[id="course-PH014" label="PH014 (2,0)\nPhysics 2\n(Fluid Mechanics and\nThermal Physics)"]
    PT001[id="course-PT001" label="PT001 (3,0)\nPhysical Training 1"]
    EN011[id="course-EN011" label="EN011 (2,0)\nWriting AE2"]
    EN012[id="course-EN012" label="EN012 (2,0)\nSpeaking AE2"]
    MA003[id="course-MA003" label="MA003 (4,0)\nCalculus 2"]
    PE008[id="course-PE008" label="PE008 (3,0)\nCritical Thinking"]
    PH015[id="course-PH015" label="PH015 (3,0)\nPhysics 3\n(Electricity & Magnetism)"]
    PH016[id="course-PH016" label="PH016 (0,1)\nPhysics 3 Laboratory"]
    PT002[id="course-PT002" label="PT002 (0,3)\nPhysical Training 2"]
    MA[id="course-MA" label="MA (4,0)\nCalculus 3 or Linear Algebra"]
    PE015[id="course-PE015" label="PE015 (3,0)\n Philosophy Marx - Lenin"]
    PH012[id="course-PH012" label="PH012 (2,0)\nPhysics 4\n(Wave & Modern Physics)"]
    PE016[id="course-PE016" label="PE016 (2,0)\nMarxist ??? Leninist\nPolitical Economy"]
    MA026[id="course-MA026" label="MA026 (3,0)\nProbability, Statistic &\nRandom Process"]
    PE017[id="course-PE017" label="PE017 (2,0)\nScientific Socialism"]
    PE018[id="course-PE018" label="PE018 (2,0)\nHistory of Vietnamese\nCommunist Party"]
    PE019[id="course-PE019" label="PE019 (2,0)\nHo Chi Minh's Thoughts"]
  
  
  
    node [shape=rectangle width=4, fontsize=30, margin=0.2, style=filled,fillcolor="#DAE8FC",color="#6C8EBF"];
    IT064[id="course-IT064" label="IT064 (3,0)\nIntroduction to Computing"]
    IT116[id="course-IT116" label="IT116 (3,1)\nC/C++ Programming"]
    IT067[id="course-IT067" label="IT067 (3,0)\nDigital Logic Design"]
    IT069[id="course-IT069" label="IT069 (3,1)\nObject-Oriented\nProgramming"]
    IT099[id="course-IT099" label="IT099 (0,1)\nDigital Logic Design Lab"]
    IT131[id="course-IT131" label="IT131 (3,1)\nTheoretical Models\nin Computing"]
    IT153[id="course-IT153" label="IT153 (3,0)\nDiscrete Mathematics"]
    IT013[id="course-IT013" label="IT013 (3,1)\nAlgorithms and \nData Structure"]
    IT079[id="course-IT079" label="IT079 (3,1)\nPrinciples of \nDatabase Management"]
    IT089[id="course-IT089" label="IT089 (3,1)\nComputer Architecture"]
    IT090[id="course-IT090" label="IT090 (3,1)\nObject-oriented \nanalysis & design"]
    IT017[id="course-IT017" label="IT017 (3,1)\nOperating Systems"]
    IT076[id="course-IT076" label="IT076 (3,1)\nSoftware Engineering"]
    IT091[id="course-IT091" label="IT091 (3,1)\nComputer Networks"]
    IT092[id="course-IT092" label="IT092 (3,1)\nPrinciples of \nProgramming Languages"]
    IT093[id="course-IT093" label="IT093 (3,1)\nWeb Application \nDevelopment"]
    IT097[id="course-IT097" label="IT097 (3,1)\nArtificial Intelligence"]
    ITCS1[id="course-ITCS1" label="ITCS1 (3,1)\nElective CS1"]
    IT082[id="course-IT082" label="IT082 (0,3)\nInternship"]
    IT083[id="course-IT083" label="IT083 (0,3)\nSpecial Study of \nthe Field"]
    IT120[id="course-IT120" label="IT120 (3,0)\nEntrepreneurship"]
    ITCS2[id="course-ITCS2" label="ITCS2 (3,1)\nElective CS2"]
    ITCS3[id="course-ITCS3" label="ITCS3 (3,1)\nFree elective"]
    IT058[id="course-IT058" label="IT058 (0,10)\nThesis"]
  
    IT024[id="course-IT024" label="IT024IU (3,1)\nComputer Graphics"]
    IT056[id="course-IT056" label="IT056IU (3,1)\nIT Project Management"]
    IT094[id="course-IT094" label="IT094IU (3,1)\nInformation System\nManagement"]
    IT096[id="course-IT096" label="IT096IU (3,1)\nNet-centric Programming"]
    IT114[id="course-IT114" label="IT114IU (3,1)\nSoftware Architecture"]
    IT130[id="course-IT130" label="IT130IU (3,1)\nDigital Image Processing"]
    IT132[id="course-IT132" label="IT132IU (3,1)\nData mining"]
    IT133[id="course-IT133" label="IT133IU (3,1)\nMobile Applicaton\nDevelopment"]
    IT134[id="course-IT134" label="IT134IU (3,1)\nInternet of Things"]
    IT_DL_[id="course-IT_DL_" label="IT__IU (3,1)\nDeep Learning"]
  
  
  
    EN007->EN011[id="edge-EN007->EN011" label="prerequisites"];
    IT069->IT013[id="edge-IT069->IT013" label="previous", style="dashed"];
    IT013->IT017[id="edge-IT013->IT017" label="prerequisites"];
    IT089->IT017[id="edge-IT089->IT017" label="prerequisites"];
    IT083->IT058[id="edge-IT083->IT058" label="prerequisites"];
    IT099->IT067[id="edge-IT099--IT067" label="co-requisites", constraint=false, arrowhead=none];
    IT069->IT076[id="edge-IT069->IT076" label="previous", style="dashed"];
    IT067->IT089[id="edge-IT067->IT089" label="prerequisites"];
    IT069->IT090[id="edge-IT069->IT090" label="prerequisites"];
    IT116->IT091[id="edge-IT116->IT091" label="previous", style="dashed"];
    IT069->IT093[id="edge-IT069->IT093" label="prerequisites"];
    IT079->IT093[id="edge-IT079->IT093" label="prerequisites"];
    IT069->IT097[id="edge-IT069->IT097" label="previous", style="dashed"];
    IT116->IT153[id="edge-IT116->IT153" label="prerequisites"];
    MA003->MA[id="edge-MA003->MA" label="prerequisites"];
    MA->IT153[id="edge-MA--IT153" label="co-requisites", constraint=false, arrowhead=none];
    IT153->IT097[id="edge-IT153->IT097" label="previous", style="dashed"];
    IT116->IT079[id="edge-IT116->IT079" label="previous", style="dashed"];
    IT116->IT069[id="edge-IT116->IT069" label="prerequisites"];
    MA001->MA003[id="edge-MA001->MA003" label="prerequisites"];
    MA003->MA026[id="edge-MA003->MA026" label="prerequisites"];
    PH013->PH012[id="edge-PH013->PH012" label="prerequisites"];
    PH013->PH015[id="edge-PH013->PH015" label="prerequisites"];
    PH016->PH015[id="edge-PH016--PH015" label="co-requisites", constraint=false, arrowhead=none];	
  
    PE015->PE016[id="edge-PE015--PE016" label="co-requisites", constraint=false, arrowhead=none];
    PE016->PE017[id="edge-PE016->PE017" label="previous", style=dashed];
    PE017->PE018[id="edge-PE017->PE018" label="previous", style=dashed];
    PE017->PE019[id="edge-PE017->PE019" label="previous", style=dashed];
  
    IT091->IT096[id="edge-IT091->IT096" label="prerequisites"]
    IT090->IT133[id="edge-IT090->IT133" label="prerequisites"]
    IT091->IT134[id="edge-IT091->IT134" label="prerequisites"]
    IT069->IT024[id="edge-IT069->IT024" label="previous", style="dashed"]
    IT069->IT056[id="edge-IT069->IT056" label="previous", style="dashed"]
    IT079->IT094[id="edge-IT079->IT094" label="previous", style="dashed"]
    IT069->IT132[id="edge-IT069->IT132" label="previous", style="dashed"]
  
    { rank=same; sem1 ,CH012,EN007,EN008,PH014,PH013,IT064,MA001,PT001;}
    { rank=same; sem2,EN011,EN012,PT002,PE008,MA003,PH015,PH016; }
    { rank=same; sem3,IT153,PE015,IT067,IT069,IT131,IT099,MA,PH012; }
    { rank=same; sem4,PE016,IT079,IT089,IT090,IT013; }
    { rank=same; sem5,IT091,MA026,IT076,PE017,IT017; }
    { rank=same; sem6,IT092,IT097,PE018,IT093,ITCS1; }
    { rank=same; summer, IT082}
    { rank=same; sem7,ITCS3,IT083,IT120,IT116,ITCS2,PE019; }
    { rank=same; sem8,IT058, CH011 }
    { rank=same; elective, IT024,IT056,IT094,IT096,IT114,IT130,IT132,IT133,IT134,IT_DL_;}
    
  subgraph legend{
      labeljust="l";
      rankdir=TB;
      color=black;
      fontsize=30
      node [shape=plaintext, fontsize=40, fontname="Times-Bold",fillcolor=white];
      sem1b[id="sem1b" label="Semester 1"];
      sem2b[id="sem2b" label="Semester 2"];
      sem3b[id="sem3b" label="Semester 3"];
      sem4b[id="sem4b" label="Semester 4"];
      sem5b[id="sem5b" label="Semester 5"];
      sem6b[id="sem6b" label="Semester 6"];
      sem7b[id="sem7b" label="Semester 7"];
      sem8b[id="sem8b" label="Semester 8"];
      summerb[id="summerb" label="Summer"];
      electiveb[id="electiveb" label="Elective"];
      sem1b -> sem2b -> sem3b -> sem4b -> sem5b -> sem6b -> summerb -> sem7b -> sem8b -> electiveb[style="invis"];
    }
    
  }
  `;
