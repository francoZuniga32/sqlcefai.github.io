
//años carreras
var añoTecnicatura = ["-","1","2","3"];
var añoLicenciatura = ["-","1","2","3","4","5"];
var añoProfesorado = ["-","1","2","3","4"];
//$materias tecnicatura universitaria en administracion y software libre (TUASySL)

var materiasTUASySL1 = new Array(
    new Array("-","0"),
    new Array("Introducción a la Computación - 1","1"),
    new Array("Matemática General - 1","2"),
    new Array("Inglés Técnico - 1","3"),
    new Array("Introducción a la Programación - 2","4"),
    new Array("Introducción a la Administración de Sistemas - 2","5"),
    new Array("Redes de Datos - 2","6")
);

var materiasTUASySL2 = new Array(
    new Array("-","0"),
    new Array("Software Libre - 1","7"),
    new Array("Taller de Hardware y Software - 1","8"),
    new Array("Administración de Sistemas - 1","9"),
    new Array("Administración de Servicios - 2","10"),
    new Array("Sistemas de Información - 2","11"),
    new Array("Automatización y Scrpting - 2","12")
);

var materiasTUASySL3 = new Array(
    new Array("-","0"),
    new Array("Administración de Sistemas Avanzada - 1","13"),
    new Array("Aplicaciones Libres - 1","14"),new Array("Electiva - 1","15")
);

//$materias tecicatura en desarrollo web (TUDW)
var materiasTUDW1 = new Array(
    new Array("-","0"),
    new Array("Matemática General - 1","89"),
    new Array("Introducción a la Programación - 1","90"),
    new Array("Inglés Técnico - 1","91"),
    new Array("Progrmación Estática y Laboratorio Web - 2","92"),
    new Array("Introducción a la Programación Orientada a Objetos - 2","93"),
    new Array("Conceptos de Bases de Datos - 2","94")
);

var materiasTUDW2 = new Array(
    new Array("-","0"),
    new Array("Programación Web Dinámica - 1","95"),
    new Array("Arquitectura y Seguridad de Computadoras - 1","96"),
    new Array("Diseno Gráfico - 1","97"),
    new Array("Programación Web Avanzada - 2","98"),
    new Array("Análisis, Diseño y Documentación de Sistemas - 2","99")
);

var materiasTUDW3 = new Array(
    new Array("-","0"),
    new Array("Framework e Interoperabilidad - 1","100"),
    new Array("Trabajo Final Tecnicatura en Desarrollo Web - 1","101")
);

//$materias analista programador
var materiasAnalista1 = new Array(
    new Array("-","0"),
    new Array("Elementos de Álgebra - 1","16"),
    new Array("Resolución de Problemas y Algoritmos - 1","17"),
    new Array("Modelos y Sistemas de Información - 1","18"),
    new Array("Introducción a la Computación - 1","19"),
    new Array("Desarrollo de Algoritmos - 2","20"),
    new Array("Elementos de Álgebra Lineal - 2","21"),
    new Array("Elementos de Teoría de la Computación - 2","22"),
    new Array("Modelado de Datos - 2","23")
);
var materiasAnalista2 = new Array(
    new Array("-","0"),
    new Array("Cálculo Diferencial e Integral - 1","24"),
    new Array("Programación Orientada a Objetos - 1","25"),
    new Array("Estructuras de Datos - 1","26"),
    new Array("Teoría de la Computación I - 1","27"),
    new Array("Inglés Técnico I - 1","28"),
    new Array("Métodos Computacionales para el Cálculo - 2","29"),
    new Array("Programación Concurrente - 2","30"),
    new Array("Teoría de la Computación II - 2","31"),
    new Array("Arquitecturas y Organización de Computadoras I - 2","32"),
    new Array("Ingeniería de Requerimientos - 2","33"),
    new Array("Inglés Técnico II - 2","34")
);

var materiasAnalista3 = new Array(
    new Array("-","0"),
    new Array("Probabilidad y Estadística - 1","35"),
    new Array("Principios de Lenguajes de Programación - 1","36"),
    new Array("Sistemas Operativos I - 1","37"),
    new Array("Diseño de Bases de Datos - 1","38"),
    new Array("Arquitecturas de Software - 1","39"),
    new Array("Análisis de Algoritmos - 2","40"),
    new Array("Laboratorio de Programación - 2","41"),
    new Array("Lógica para Ciencias de la Computación - 2","42"),
    new Array("Redes de Computadoras I - 2","43"),
    new Array("Gestión de Proyectos de Desarrollo Software - 2","44"),
    new Array("Gestión de Bases de Datos - 2","45")
);

//$materias licenciatura en ciancias (LicCinComp)

var materiasLicCien4 = new Array(
    new Array("-","0"),
    new Array("Sistemas Paralelos - 1","51"),
    new Array("Inteligencia Artificial - 2","52"),
    new Array("Lenguajes Declarativos - 1","55"),
    new Array("Complejidad Computacional - 1","56"),
    new Array("Especificación de Software - 1","57"),
    new Array("Diseño de Algoritmos - 2","58"),
    new Array("Conceptos Avanzados de Lenguajes de Programación - 2","59"),
    new Array("Especificación con Métodos Formales - 2","60"),
    new Array("Aspectos Profesionales y Sociales - 2","61")
);

var materiasLicCien5 = new Array(
    new Array("-","0"),
    new Array("Sistemas Inteligentes - 1","53"),
    new Array("Laboratorio de Programación Distribuida - 1","54"),
    new Array("Agentes Inteligentes para la Web - 1","62"),
    new Array("Diseño de Compiladores e Interpretes - 1","63"),
    new Array("Electiva I - 1","64"),
    new Array("Trabajo de Tesis - 1","65"),
    new Array("Laboratorio de Compiladores e Interpretes - 2","66"),
    new Array("Laboratorio de Inteligencia Artificial - 2","67"),
    new Array("Técnicas para Minería de Datos - 2","68"),
    new Array("Electiva II Según Electiva - 2","69"),
    new Array("Trabajo de Tesis - 2","70")
);

//$materias licenciatura en sistemas (licSisInf)
var materiasLicSis4 = new Array(
    new Array("-","0"),
    new Array("Sistemas Paralelos - 1","51"),
    new Array("Inteligencia Artificial - 2","52"),
    new Array("Planificación y Control de Proyectos - 1","71"),
    new Array("Sistemas de Información I - 1","72"),
    new Array("Modelado de Procesos de Negocios - 1","73"),
    new Array("Especificacion de Requerimientos - 1","74"),
    new Array("Especificación de Diseño de Software - 2","75"),
    new Array("Depósito y Minería de Datos - 2","76"),
    new Array("Sistema de Información II - 2","77"),
    new Array("Laboratorio de Bases de Datos - 2","78")
);

var materiasLicSis5 = new Array(
    new Array("-","0"),
    new Array("Sistemas Inteligentes - 1","53"),
    new Array("Laboratorio de Programación Distribuida - 1","54"),
    new Array("Auditoría de Sistemas de Información - 1","79"),
    new Array("Verificación y Validación de Software - 1","80"),
    new Array("Electiva I - 1","81"),
    new Array("Trabajo Tesis I - 1","82"),
    new Array("Sistemas de Información para la Web - 2","83"),
    new Array("Aspectos Profesionales y Sociales - 2","84"),
    new Array("Reingeniería de Software y Procesos - 2","85"),
    new Array("Construcción y Validación de Software - 2","86"),
    new Array("Electiva II - 2","87"),
    new Array("Trabajo Tesis II - 2","88")
);

//$materias profesorado informatica (ProfInfor)
//$materias profesorado informatica (ProfInfor)

var materiasProf1 = new Array(
    new Array("-","0"),
    new Array("Pedagogía - 1","102"),
    new Array("Elementos de Álgebra - 1","16"),
    new Array("Resolución de Problemas y Algoritmos - 1","17"),
    new Array("Modelos y Sistemas de Información - 1","18"),
    new Array("Introducción a la Computación - 1","19"),
    new Array("Psicología I - 2","103"),
    new Array("Desarrollo de Algoritmos - 2","20"),
    new Array("Elementos de Teoria de la Computación - 2","22"),
    new Array("Modelado de Datos - 2","23")
);

var materiasProf2 = new Array(
    new Array("-","0"),
    new Array("Cálculo Diferencial e Integral - 1","24"),
    new Array("Programación Orientada a Objetos - 1","25"),
    new Array("Estructuras de Datos - 1","26"),
    new Array("Teoría de la Computación I - 1","27"),
    new Array("Inglés Técnico I - 1","28"),
    new Array("Didáctica General - 2","104"),
    new Array("Programación Concurrente - 2","30"),
    new Array("Teoría de la Computación II - 2","31"),
    new Array("Arquitecturas y Organización de Computadoras I - 2","32"),
    new Array("Ingeniería de Requerimientos - 2","33"),
    new Array("Inglés Técnico II - 2","34")
);

var materiasProf3 = new Array(
    new Array("-","0"),
    new Array("Tecnologías de la Información y Comunicación en la Educación - 1","106"),
    new Array("Psicología II - 1","107"),
    new Array("Sistemas Operativos I - 1","37"),
    new Array("Arquitecturas de Software - 1","39"),
    new Array("Métodos Computacionales para el Cálculo - 2","105"),
    new Array("Diseño de Sistemas Informáticos para Educación - 2","115"),
    new Array("Laboratorio de Tecnologías de la Información y Comunicación en la Educación - 2","108"),
    new Array("Redes de Computadoras I - 2","43"),
);

var materiasProf4 = new Array(
    new Array("-","0"),
    new Array("Probabilidad y Estadística - 1","109"),
    new Array("Laboratorio de Sistemas Informáticos para Educación - 1","110"),
    new Array("Didáctica Específica - 1","111"),
    new Array("Política Educacional Argentina - 1","112"),
    new Array("Tópicos Avanzados en Ciencias de la Computación - 2","113"),
    new Array("Residencia - 2","114"),
    new Array("Aspectos Profesionales y Sociales - 2","61"),
);