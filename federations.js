// 42 federaciones de FIDE América (código FIDE: [nombre ES, nombre EN, zona])
// Zonas: SUD = Sudamérica, CAC = Centroamérica y el Caribe, NOR = Norteamérica
window.FEDS = {
  ARG:["Argentina","Argentina","SUD"], BOL:["Bolivia","Bolivia","SUD"], BRA:["Brasil","Brazil","SUD"], CHI:["Chile","Chile","SUD"],
  COL:["Colombia","Colombia","SUD"], ECU:["Ecuador","Ecuador","SUD"], PAR:["Paraguay","Paraguay","SUD"], PER:["Perú","Peru","SUD"],
  URU:["Uruguay","Uruguay","SUD"], VEN:["Venezuela","Venezuela","SUD"],
  CAN:["Canadá","Canada","NOR"], USA:["Estados Unidos","United States","NOR"], MEX:["México","Mexico","NOR"],
  ANT:["Antigua y Barbuda","Antigua and Barbuda","CAC"], ARU:["Aruba","Aruba","CAC"], BAH:["Bahamas","Bahamas","CAC"],
  BAR:["Barbados","Barbados","CAC"], BIZ:["Belice","Belize","CAC"], BER:["Bermudas","Bermuda","CAC"],
  IVB:["Islas Vírgenes Británicas","British Virgin Islands","CAC"], CAY:["Islas Caimán","Cayman Islands","CAC"],
  CRC:["Costa Rica","Costa Rica","CAC"], CUB:["Cuba","Cuba","CAC"], CUR:["Curazao","Curaçao","CAC"],
  DMA:["Dominica","Dominica","CAC"], DOM:["República Dominicana","Dominican Republic","CAC"], ESA:["El Salvador","El Salvador","CAC"],
  GRN:["Granada","Grenada","CAC"], GUA:["Guatemala","Guatemala","CAC"], GUY:["Guyana","Guyana","CAC"], HAI:["Haití","Haiti","CAC"],
  HON:["Honduras","Honduras","CAC"], JAM:["Jamaica","Jamaica","CAC"], NCA:["Nicaragua","Nicaragua","CAC"], PAN:["Panamá","Panama","CAC"],
  PUR:["Puerto Rico","Puerto Rico","CAC"], SKN:["San Cristóbal y Nieves","Saint Kitts and Nevis","CAC"], LCA:["Santa Lucía","Saint Lucia","CAC"],
  VIN:["San Vicente y las Granadinas","Saint Vincent and the Grenadines","CAC"], SUR:["Surinam","Suriname","CAC"],
  TTO:["Trinidad y Tobago","Trinidad and Tobago","CAC"], ISV:["Islas Vírgenes de EE. UU.","US Virgin Islands","CAC"]
};
window.REGIONS = {
  SUD:{es:"Sudamérica",en:"South America"}, CAC:{es:"Centroamérica y el Caribe",en:"Central America & Caribbean"},
  NOR:{es:"Norteamérica",en:"North America"}, AME:{es:"Todo el continente",en:"Whole continent"},
  WORLD:{es:"Mundial (todas las federaciones FIDE)",en:"World (all FIDE federations)"}, ALL:{es:"Abierto a todos",en:"Open to everyone"}
};
// Títulos FIDE de árbitro, entrenador y organizador (columna OTit de la lista)
window.OTITLES = {
  IA:{es:"Árbitro Internacional",en:"International Arbiter"}, FA:{es:"Árbitro FIDE",en:"FIDE Arbiter"}, NA:{es:"Árbitro Nacional",en:"National Arbiter"},
  FST:{es:"Entrenador Senior FIDE",en:"FIDE Senior Trainer"}, FT:{es:"Entrenador FIDE",en:"FIDE Trainer"}, FI:{es:"Instructor FIDE",en:"FIDE Instructor"},
  NI:{es:"Instructor Nacional",en:"National Instructor"}, DI:{es:"Instructor de Desarrollo",en:"Developmental Instructor"},
  IO:{es:"Organizador Internacional",en:"International Organizer"},
  SI:{es:"Instructor Escolar FIDE",en:"FIDE School Instructor"}, LSI:{es:"Instructor Escolar Líder",en:"Lead School Instructor"},
  SLI:{es:"Instructor Escolar Líder Senior",en:"Senior Lead School Instructor"}
};
