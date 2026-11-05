import sys
p = sys.argv[1]
h = open(p, encoding='utf-8').read()
R = [
 ("'ab':'plan de rotación puestos de aprendizaje formador-empresario instructores selección'",
  "'ab':'La Universidad Tecnológica de Puerto Peñasco realizó la primera implementación del Plan de Rotación de Puestos de Aprendizaje del Modelo de Formación Dual durante el período de alternancia escuela-empresa en el año 2019. Con el objetivo de evaluar esta implementación desde la perspectiva del formador-empresario, se analiza la vinculación entre empresa y universidad, el desempeño de los aprendices y de los beneficios adquiridos y otorgados por la empresa, para la determinación de la calidad de su participación en la etapa dual. Los formadores-empresarios consideran que la participación en la primera implementación fue satisfactoria, los aprendices reforzaron los conocimientos adquiridos en la universidad, y la empresa contribuyó al desarrollo de las competencias laborales de los estudiantes.'"),
 ("'ab':'satisfacción graduados Conalep empresa escuela apoyo financiero mejora competencias'",
  "'ab':'El Modelo Mexicano de Formación Dual (MMFD) combina educación en escuelas con formación en empresas. Este artículo explora la satisfacción con respecto a la empresa, escuela y el MMFD, así como la percepción de mejora en habilidades, competencias y conocimientos por parte de graduadas(os) del Colegio Nacional de Educación Profesional Tecnológica-MMFD en los estados de México y Coahuila. La información se recolectó mediante una encuesta donde participantes muestran niveles altos de satisfacción (en promedio 3.5 puntos en escala de 1 a 4). Sin embargo, los niveles de satisfacción son consistentemente más altos en la empresa que en la escuela (en promedio .09 puntos); y más altos en Coahuila que en el Estado de México (en promedio 0.7 puntos). Asimismo, el 60% de las y los participantes percibe que sus habilidades para el trabajo, interpersonales y de toma de decisiones mejoraron mucho, mientras que solo 26% considera que su conocimiento matemático mejoró.'"),
 ("'ab':'competencias prácticas organizacionales empresas alumnos Conalep Cecyte Coparmex instructores evaluación'",
  "'ab':'La presente investigación realiza un estudio sobre los efectos de la implementación del modelo educativo de origen alemán, la formación dual, en las competencias de los alumnos y las prácticas organizacionales de las empresas participantes en las ciudades fronterizas de Tijuana y Mexicali, en el estado de Baja California. Se parte de la idea de que, al establecer un nuevo tipo de articulación educación-empleo, el modelo de formación dual crea nuevas dinámicas entre escuelas y empresas cuyos efectos son observados sobre las competencias que desarrollan los alumnos y las nuevas prácticas que adoptan las empresas participantes para la gestión de su personal.'"),
]
for a, b in R:
    assert a in h, a[:50]
    h = h.replace(a, b)
open(p, 'w', encoding='utf-8', newline='\n').write(h)
