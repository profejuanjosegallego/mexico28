const CHAP=[
 ['I','Disposiciones generales','file-text','¿De qué trata y a quién obliga?','Es la puerta de entrada. Explica que la educación dual combina escuela y espacio laboral, dice quién debe cumplir los Lineamientos y fija el vocabulario de todo el texto.',[['1','Objeto','Regula la opción dual, que termina en Doble Certificación. La SEMS resuelve las dudas de interpretación.'],['2','Obligados','SEMS, cuatro direcciones generales y las Escuelas.'],['3','Adopción','La SEMS promueve que estados y organismos descentralizados o autónomos adopten la norma por convenio.'],['4','Definiciones','60 términos, de "Actores" a "Tutor académico".']]],
 ['II','De la Educación Dual','route','¿Cómo funciona?','Describe el modelo: qué se aprende en cada lugar, quién aprueba los planes y cuánto tiempo se pasa en el espacio laboral. Aquí están las reglas de horas, duración y calendario.',[['5','Características','Once rasgos, entre ellos horario nunca nocturno, evaluación compartida y perspectiva de género.'],['6 y 7','Planes de estudio','Los Subsistemas los proponen y la SEMS los aprueba. Salud pide una opinión adicional.'],['8','Tiempo en el espacio laboral','De 1 a 3 años y de 18 a 30 horas por semana, según carrera y madurez de la empresa.'],['9 y 10','Planificación','Escuela y empresa planifican a tres años, con el calendario escolar autorizado.']]],
 ['III','De los participantes','users','¿Qué debe hacer cada quien?','Es el capítulo de obligaciones. Dedica una sección a cada participante y detalla qué debe hacer para entrar y mantenerse en la opción dual.',[['11','Estudiantes','Requisitos de entrada, firma, elección de empresa, becas y aviso de riesgos.'],['12','Escuelas','Difusión, selección, matrícula, seguimiento y protección.'],['13','Subsistemas','Planes, validación de empresas, firma de convenios, capacitación e informes.'],['14','Espacios de formación laboral','Registro, instructores, 75 % de matriz, seguro ampliado y apoyos.'],['15 a 17','Otros participantes','Certificadoras, organismos empresariales y cooperación internacional.']]],
 ['IV','Del Comité Directivo','landmark','¿Quién coordina a nivel nacional?','Crea una mesa nacional de apoyo técnico a la SEP. Coordina la estrategia, opina sobre los planes y evalúa la implementación.',[['18','Objeto','Coordinar y articular estrategias y acciones.'],['19','Integrantes','Lo preside la SEMS. Tiene hasta 15 asientos con voz y voto, incluido el sector empresarial.'],['20','Funciones','Opina sobre planes, recomienda y evalúa de manera científica.'],['21','Sesiones','Al menos dos ordinarias al año. Sus integrantes no reciben pago.']]],
 ['V','De los Convenios de Colaboración','file-pen-line','¿Cómo entra una empresa?','Regula el primer documento formal. Sin este convenio, una empresa, institución u organismo no puede iniciar la opción dual.',[['22','Contenido y vigencia','Bases, compromisos y vigencia de 2 años, ampliable a 3 o 4 en casos definidos.'],['23','Requisitos','Acta constitutiva, constancia fiscal y documento que acredite al representante.'],['24','Registro','En el sistema, a más tardar 30 días hábiles después de firmar.'],['25','Terminación','La SEMS puede pedir que termine si no cumple los criterios.']]],
 ['VI','De los Convenios de Aprendizaje','file-check','¿Cómo entra un estudiante?','Regula el acuerdo individual. Se firma uno por estudiante y fija sus condiciones concretas: horario, duración, puestos, seguros y apoyos.',[['26','Contenido','Calendario, horas, vigencia, matriz, plan de rotación, seguros y apoyos.'],['27','Requisitos','La empresa o institución entrega su documentación como anexo.'],['28','Registro','Lo hace el Responsable de vinculación en máximo 30 días hábiles.'],['29','Validez','Solo vale mientras exista un Convenio de Colaboración vigente.']]],
 ['VII','Del Sistema de Información','database','¿Dónde queda el registro?','Obliga a la SEMS a poner a disposición el sistema digital. Se compone de dos plataformas y debe cumplir las normas vigentes de tecnologías de la información.',[['30','Puesta a disposición','La SEMS ofrece la Plataforma Académica y la de Espacios de Formación Laboral.'],['31','Operación','Debe seguir las disposiciones jurídicas de tecnologías de la información y comunicación.']]]];
const RULES=[
 ['timer','Dedicación temporal','18 a 30 h','por semana en el espacio laboral','18 h son 3 días y 30 h son 5 días. Sube con los años y la madurez de la empresa.','8'],
 ['calendar-clock','Duración de la formación','1 a 3 años','en el espacio laboral','Depende de la carrera. 3 años solo en tecnólogos de 8 semestres.','8'],
 ['flag','Momento de ingreso','2.º ciclo','escolar','Antes hay que acreditar el primer ciclo.','11 I|12 II'],
 ['target','Afinidad con el plan de estudios','75 %','mínimo en la Matriz de correspondencia','Mide cuánto coinciden los puestos de la empresa con lo que pide la carrera.','14 VI'],
 ['shield-check','Protección del estudiante','2 seguros','médicos obligatorios','Facultativo del Instituto Mexicano del Seguro Social, por la escuela. Ampliado, por la empresa.','26 V'],
 ['clock','Horario permitido','Sin noche','en ningún caso','Solo horario matutino o vespertino.','5 V'],
 ['award','Certificación al egresar','2 certificados','al concluir','Bachillerato Nacional y Formación Profesional.','4 XXI'],
 ['file-check','Plazo para registrar convenios','30 días hábiles','desde la firma','Aplica a los de Colaboración y a los de Aprendizaje.','24|28']];
const arts=s=>s.split('|').map(art).join(' ');
const ASK=[
 ['est','Estudiante','Persona inscrita en una escuela que cursa un plan de educación media superior. Se incorpora a la opción dual a partir del segundo ciclo.','4 XXIX',[
  ['Cumplir el requisito de entrada','Estar inscrito y acreditar el primer ciclo escolar.','11 I'],
  ['Formalizar su participación','Firma su convenio. Si es menor de edad, su madre, padre o tutor legal consiente por escrito y firma.','11 II-III'],
  ['Elegir dónde formarse','Manifiesta su preferencia por una empresa o institución.','11 VI'],
  ['Aprender en dos sedes','Sigue su currículum en escuela y Plataforma Académica, y sus competencias en el espacio laboral.','11 IV'],
  ['Cumplir y dejarse evaluar','Respeta su convenio y presenta las evaluaciones de su plan.','11 V|11 VIII'],
  ['Avisar si está en riesgo','Informa al Responsable de vinculación si vive violencia, acoso o discriminación.','11 IX']]],
 ['esc','Escuela','El plantel donde se imparte la educación media superior. El Acuerdo incluye CBTIS y CETIS, de la DGETI; CBTA, CBTF, CETAC, CETMAR y CMM, de la DGETAyCM; y BTED, de la DGBTED.','4 XXVI',[
  ['Promover y difundir','Busca empresas e informa carreras, convocatorias y empresas con convenio.','12 I-II'],
  ['Seleccionar con la empresa','Participa en elegir estudiantes y formalizar su convenio.','12 VII'],
  ['Firmar y matricular','La dirección firma cada Convenio de Aprendizaje. El Responsable de vinculación inscribe al estudiante en ambas plataformas.','12 V|12 VI'],
  ['Acompañar y evaluar','Designa tutores y docentes facilitadores, y supervisa la operación.','12 IX-X'],
  ['Proteger al estudiante','Verifica su Seguro Médico Facultativo y procura un ambiente libre de violencia.','12 XIII|12 XVI'],
  ['Informar cada mes','Entrega un informe mensual al Responsable de Educación Dual.','12 V']]],
 ['sub','Subsistema','Institución de la SEMS que agrupa a los planteles. El Acuerdo solo llama así a tres: DGETI, DGETAyCM y DGBTED. Ver la pestaña Subsistemas.','4 LVII',[
  ['Diseñar los planes','Prepara planes duales, pide opinión al Comité y los propone a la SEMS.','13 I-II|7'],
  ['Validar empresas','Recibe sus solicitudes en la plataforma y valida su registro.','13 XIII'],
  ['Firmar la colaboración','Celebra el Convenio de Colaboración, con anuencia de la SEMS.','13 XIV'],
  ['Capacitar','Ofrece cursos a los actores, con programa validado por la SEMS.','13 VI-VII'],
  ['Supervisar y registrar','Vigila escuelas y convenios, y mantiene al día las evaluaciones.','13 V|13 XVI|13 XVII'],
  ['Garantizar protección y beca','Asegura seguridad médica ampliada por convenio y acceso a la beca.','13 XVIII|13 XXI'],
  ['Informar cada trimestre','Reporta a la SEMS acciones y convenios.','13 XIX']]],
 ['emp','Espacio laboral','Empresa o institución pública donde el estudiante sigue su Plan de rotación y desarrolla competencias laborales. Una empresa debe ser persona moral legalmente constituida.','4 XXVII',[
  ['Formalizar','Su representante legal firma el Convenio de Colaboración.','14 I-II'],
  ['Registrarse y ofertar','Se da de alta en la plataforma, elige planes afines, indica puestos y registra instructores.','14 III-IV|14 VII-VIII'],
  ['Demostrar capacidad','Cuenta con infraestructura, instructores capacitados y certificados, y al menos 75 % de matriz.','14 VI'],
  ['Seleccionar con la escuela','Define el perfil y participa en la selección.','14 V|14 IX'],
  ['Contratar seguro ampliado','Cubre accidentes en la empresa y en los traslados.','14 XI'],
  ['Dar apoyos','Salud integral, traslados y alimentación, según necesidades y capacidades.','14 XII'],
  ['Cuidar el ambiente','Da igualdad de trato y evita violencia, acoso y discriminación.','14 XV-XVI']]]];
const DIR=[['SEMS','Subsecretaría de Educación Media Superior'],['DGETI','Dirección General de Educación Tecnológica Industrial y de Servicios'],['DGETAyCM','Dirección General de Educación Tecnológica Agropecuaria y Ciencias del Mar'],['DGBTED','Dirección General de Bachillerato Tecnológico de Educación y Promoción Deportiva'],['DGCFT','Dirección General de Centros de Formación para el Trabajo'],['Escuelas','Los planteles de esas instituciones']];
const SIG=[['BTED','Bachillerato Tecnológico en Educación y Promoción Deportiva'],['CBTA','Centro de Bachillerato Tecnológico Agropecuario'],['CBTF','Centro de Bachillerato Tecnológico Forestal'],['CBTIS','Centro de Bachillerato Tecnológico Industrial y de Servicios'],['CCT','Clave del Centro de Trabajo, identifica al plantel'],['CECyTE','Colegios de Estudios Científicos y Tecnológicos'],['CETAC','Centro de Estudios Tecnológicos en Aguas Continentales'],['CETI','Centro de Enseñanza Técnica Industrial'],['CETIS','Centro de Estudios Tecnológicos Industrial y de Servicios'],['CETMAR','Centro de Estudios Tecnológicos del Mar'],['CIFRHS','Comisión Interinstitucional para la Formación de Recursos Humanos para la Salud'],['CMM','Centro Multimodal de Educación Tecnológica del Mar y Aguas Continentales'],['CONALEP','Colegio Nacional de Educación Profesional Técnica'],['CONOCER','Consejo Nacional de Normalización y Certificación de Competencias Laborales'],['COSAC','Coordinación Sectorial Académica, dependiente de la SEMS'],['CURP','Clave Única de Registro de Población'],['DOF','Diario Oficial de la Federación'],['EMS','Educación Media Superior'],['IMSS','Instituto Mexicano del Seguro Social'],['RENAPO','Registro Nacional de Población'],['RFC','Registro Federal de Contribuyentes'],['SEP','Secretaría de Educación Pública']];
const WHO=[
 {i:'factory',g:'emp',n:'Empresa o institución pública',door:1,u:'/empresa',a:'Se registra, elige planes, indica puestos y registra instructores.',c:'14 III-IV|14 VII-VIII',p:'Crea su propia cuenta con RFC, nombre, correo, usuario y contraseña. Avanza por 5 módulos en orden.'},
 {i:'school',g:'esc',n:'Escuela',door:1,u:'/escuela',a:'La SEMS la da de alta. Verifica contactos y matricula estudiantes.',c:'12 III|12 IV|12 VI',p:'Entra con la clave de su plantel (CCT) y contraseña. Ve empresas aceptadas, grupos, estudiantes, docentes y seguimiento.'},
 {i:'network',g:'sub',n:'Subsistema',door:1,u:'/subsistema',a:'Dado de alta en ambas plataformas. Valida empresas y registra convenios.',c:'13 XI|13 XIII|24',p:'Entra con usuario y contraseña. Valida empresas, carga convenios y consulta listados de estudiantes, docentes y organismos.'},
 {i:'megaphone',g:'apo',n:'Organismo empresarial',door:0,a:'Debe pedir acceso a la SEMS para monitorear a sus afiliadas.',c:'16',p:'Sin entrada visible. La empresa declara si pertenece a una cámara y el Subsistema ve un listado por organismo.'},
 {i:'hard-hat',g:'emp',n:'Instructor',door:0,a:'La empresa lo registra en la plataforma.',c:'14 VIII',p:'Sin entrada propia. Aparece como dato capturado por la empresa, con su CURP y certificaciones.'},
 {i:'graduation-cap',g:'est',n:'Estudiante',door:0,a:'Estudia en la Plataforma Académica. La escuela lo matricula.',c:'4 XLVI|12 VI',p:'Sin entrada en este portal. Lo registra su escuela, junto con su Convenio de Aprendizaje.'},
 {i:'book-open-check',g:'esc',n:'Docente, facilitador y tutor',door:0,a:'El Docente facilitador evalúa mediante la Plataforma Académica.',c:'4 XX',p:'Sin entrada en este portal. La escuela los registra y los matricula en la Plataforma Académica.'}];
const ROUTE=[
 ['emp','Empresa o institución','Portal, entrada Empresa',[['Crea su cuenta','RFC, nombre, correo, usuario y contraseña. La activa desde su correo.'],['Registra sus datos','Datos generales, constancia fiscal, contacto, domicilio y actividad económica.'],['Agrega instructores','CURP, cargo y certificaciones.'],['Preselecciona carreras','Carrera, estado, municipio, plantel y lugares tentativos.'],['Comunica al subsistema','Acepta un manifiesto bajo protesta de decir verdad y envía.']]],
 ['sub','Subsistema','Portal, entrada Subsistema',[['Valida a la empresa','Revisa sus evidencias. La empresa ve su estatus en aprobado.'],['Carga el Convenio de Colaboración','Queda registrado junto a la empresa validada.']]],
 ['esc','Escuela','Portal, entrada Escuela',[['Ve la empresa aceptada','Si no aparece: falta oferta, validación o convenio, o la fecha no cubre el periodo.'],['Asigna ciclo y grupos','Prepara el periodo para matricular.'],['Registra estudiantes y docentes','Carga el Convenio de Aprendizaje de cada estudiante.']]],
 ['est','Estudiante','Plataforma Académica',[['Queda matriculado','El convenio es indispensable para registrarlo. Ahí desarrolla su parte académica.']]]];
function renderResumen(){
 let rn=0;
 $('#resumen').innerHTML=`
 <div class="lead"><h2>Resumen del Acuerdo 28/11/25</h2><p>Esta página resume un solo documento oficial y la plataforma donde se opera. La investigación académica está en Evidencia.</p></div>
 <div class="card"><h3>${ic('stamp')}Qué es este documento</h3>
  <div class="facts">
   <div><span class="lab">Nombre</span><p>Lineamientos Generales para impartir la educación media superior en la opción de educación dual</p></div>
   <div><span class="lab">Emite</span><p>Secretaría de Educación Pública (SEP)</p></div>
   <div><span class="lab">Publicación</span><p>Diario Oficial de la Federación (DOF), 18 nov 2025. Vigente desde el 19 nov 2025</p></div>
   <div><span class="lab">Sustituye a</span><p>Acuerdo 02/02/22. Quienes ya estudiaban con ese acuerdo terminan con su programa</p></div>
   <div><span class="lab">Texto oficial</span><p><a href="${S.A.u}" target="_blank" rel="noopener">Abrir en el Diario Oficial</a></p></div>
   <div><span class="lab">Fecha de análisis</span><p>1 de noviembre de 2026</p></div>
  </div>
 </div>
 <div class="card"><h3>${ic('users')}A quién va dirigido</h3>
  <div class="aud">
   <div class="audc main"><div class="lab">Obligados directamente ${art('2')}</div><p class="small muted">Deben cumplirlo sin firmar nada más.</p>
    <dl class="sig">${DIR.map(d=>`<div><dt>${d[0]}</dt><dd>${d[1]}</dd></div>`).join('')}</dl></div>
   <div class="audc"><div class="lab">Pueden adoptarlo ${art('3')}</div><p class="small">Autoridades educativas estatales, organismos descentralizados e instituciones autónomas. La SEMS promueve su adopción mediante instrumentos jurídicos.</p>
    <p class="small muted">CONALEP, CECyTE y CETI no están en la lista del artículo 2.</p></div>
   <div class="audc"><div class="lab">Participan por convenio ${art('22')}</div><p class="small">Empresas, instituciones públicas y organismos del sector empresarial. Asumen sus compromisos al firmar el Convenio de Colaboración.</p></div>
  </div>
  <details class="more"><summary>${ic('book-open-check')}Ver todas las siglas de esta página</summary><dl class="sig cols">${SIG.map(d=>`<div><dt>${d[0]}</dt><dd>${d[1]}</dd></div>`).join('')}</dl></details>
 </div>
 ${HOWTO}
 <div class="card"><h3>${ic('sparkles')}La idea central ${art('1')}</h3>
 <div class="formula" role="img" aria-label="Escuela más espacio laboral da doble certificación">
  <div class="fbox" style="${gv('esc')}">${ic('school')}<b>Escuela</b><span class="small">Currículum fundamental y ampliado, en aula y Plataforma Académica</span></div>
  <div class="fop">+</div>
  <div class="fbox" style="${gv('emp')}">${ic('factory')}<b>Espacio laboral</b><span class="small">Competencias laborales, en una empresa o institución pública</span></div>
  <div class="fop">${ic('arrow-right')}</div>
  <div class="fbox" style="${gv('est')}">${ic('award')}<b>Doble Certificación</b><span class="small">Bachillerato Nacional más Formación Profesional</span></div>
 </div></div>
 <div class="lead"><h2>Las reglas que más importan</h2></div>
 <div class="rules">${RULES.map(r=>`<div class="tile"><div class="rt">${ic(r[0])}${r[1]}</div><b>${r[2]}</b><span>${r[3]}</span><small>${r[4]}</small><span class="rcit">${arts(r[5])}</span></div>`).join('')}</div>
 <div class="lead"><h2>Qué le pide a cada quien</h2><p>Quién es cada participante y qué obligaciones le fija el Capítulo III.</p></div>
 <div class="grid2">${ASK.map(a=>`<div class="card asks" style="${gv(a[0])}"><h3>${ic(G[a[0]].i)}${a[1]}</h3>
  <div class="lab" style="margin-top:8px">Quién es</div><p class="small">${a[2]} ${art(a[3])}</p>
  <div class="lab" style="margin-top:10px">Qué se le pide</div>
  <ul class="ob">${a[4].map(x=>`<li><b>${x[0]}.</b> <span>${x[1]}</span> ${arts(x[2])}</li>`).join('')}</ul></div>`).join('')}</div>
 <div class="card"><h3>${ic('map')}Cómo está organizado</h3><p class="small muted" style="margin:4px 0 10px">Son 7 capítulos. Selecciona uno para ver qué pregunta responde y qué contiene.</p>
  <div class="chapw"><div class="chap" id="chap"></div><div class="chapd" id="chapd"></div></div></div>
 <div class="card" id="tl"><h3>${ic('calendar-clock')}Calendario de transitorios</h3><p class="small muted" style="margin:4px 0 2px">Los transitorios son los artículos finales que fijan fechas para aplicar el Acuerdo.</p>
  <div class="tl">
   <div class="tlp"><b>18 nov 2025</b><span>Publicación en el Diario Oficial</span></div>
   <div class="tlp"><b>19 nov 2025</b><span>Entra en vigor</span></div>
   <div class="tlp"><b>+15 días hábiles</b><span>Instalar el Comité Directivo</span></div>
   <div class="tlp pend"><b>+180 días hábiles</b><span>Normas de control escolar, criterios de capacitación, plataformas y estructura curricular</span></div>
   <div class="tlp"><b>Hasta egresar</b><span>Generaciones del 02/02/22 siguen con su programa</span></div>
  </div>
  <div class="note" style="margin-top:12px">${ic('info')}<span>Contando solo lunes a viernes, los 180 días terminarían desde fines de julio de 2026. Es una estimación del equipo: conviene confirmar qué ya se emitió.</span></div>
 </div>
 <div class="card"><h3>${ic('flag')}Por qué se emitió</h3>
  <div class="grid3">
   <div class="tile">${ic('target')}<b>100 %</b><span>de educación dual en media superior técnica, meta del Plan México</span></div>
   <div class="tile">${ic('users')}<b>+150 mil</b><span>profesionistas y técnicos al año, meta del Plan México</span></div>
   <div class="tile">${ic('layers')}<b>31 a 2</b><span>subsistemas de educación media superior a unificar: bachillerato general y tecnológico</span></div>
  </div>
  <p class="small muted" style="margin-top:9px">Fuente: Considerandos del Acuerdo 28/11/25.</p>
 </div>
 <div class="lead"><h2>La plataforma donde se opera</h2><p><b>Sí, son dos plataformas</b> dentro de un mismo sistema: una para registrar y vincular, otra para estudiar.</p></div>
 <div class="card"><h3>${ic('network')}Cómo se relacionan</h3>
  <div class="pdia">
   <div class="psys">${ic('database')}<div><b>Sistema de Información de la Educación Dual</b><span class="small">Lo administra la SEMS. Registra a quienes participan y facilita la planificación. ${art('4 LVI')} ${art('30')}</span></div></div>
   <div class="ptwo">
    <div class="fbox" style="${gv('emp')}">${ic('link')}<span class="lab">Para registrar y vincular</span><b>Plataforma de Espacios de Formación Laboral</b>
     <span class="small">Conecta escuelas con empresas, instituciones y organismos. ${art('4 XLVII')}</span>
     <ul class="ob"><li>La empresa se registra y oferta lugares</li><li>El Subsistema la valida</li><li>La escuela la encuentra</li><li>Se registran los convenios</li></ul>
     <span class="small"><b>En la práctica:</b> el portal Plataforma de Registro de Empresas. <a href="${S.PT.u}" target="_blank" rel="noopener">Abrir portal</a></span></div>
    <div class="pbr">${ic('arrow-right')}<b>Matrícula</b><span class="small">La escuela inscribe a cada estudiante en ambas ${art('12 VI')}</span></div>
    <div class="fbox" style="${gv('esc')}">${ic('monitor')}<span class="lab">Para estudiar</span><b>Plataforma Académica</b>
     <span class="small">Espacio digital donde el estudiante trabaja su currículum con mediación docente. ${art('4 XLVI')}</span>
     <ul class="ob"><li>1 hora de estudio por día en el espacio laboral ${art('8')}</li><li>El Docente facilitador evalúa ${art('4 XX')}</li><li>Se entra matriculado por la escuela</li></ul>
     <span class="small"><b>En la práctica:</b> no encontramos una dirección pública.</span></div>
   </div>
  </div>
  <div class="note" style="margin-top:12px">${ic('info')}<span><b>Inferencia del equipo.</b> El Acuerdo no da dirección web ni usa el nombre "Plataforma de Registro de Empresas". Las tratamos como la misma porque comparten el objetivo de vincular escuela y empresa, y las tareas. Conviene confirmarlo con la SEMS.</span></div>
 </div>
 <div class="card"><h3>${ic('lock')}Quién entra al portal</h3>
  <p class="small muted" style="margin:4px 0 10px">Contraste entre lo que dice el Acuerdo y las entradas públicas del portal. La descripción interior viene de los manuales. ${src('MAN')}</p>
  <div class="who">${WHO.map(w=>`<div class="whor" style="${gv(w.g)}"><div class="whon">${ic(w.i)}<b>${w.n}</b>${w.door?`<span class="y yes">${ic('circle-check')}Entrada propia</span><a class="small" href="${S.PT.u.replace(/\/$/,'')}${w.u}" target="_blank" rel="noopener">${w.u}</a>`:`<span class="y no">${ic('circle-minus')}Sin entrada propia</span>`}</div>
   <div><div class="lab">Según el Acuerdo</div><p class="small">${w.a} ${arts(w.c)}</p></div>
   <div><div class="lab">En el portal</div><p class="small">${w.p}</p></div></div>`).join('')}</div>
 </div>
 <div class="card"><h3>${ic('route')}Recorrido de la empresa al estudiante</h3>
  <p class="small muted" style="margin:4px 0 10px">Cada fila es quien actúa. Los módulos se activan en orden. ${src('MAN')}</p>
  <div class="lanes">${ROUTE.map(l=>`<div class="rlane" style="${gv(l[0])}"><div class="rhead">${ic(G[l[0]].i)}<b>${l[1]}</b><span class="small">${l[2]}</span></div><ol class="rsteps">${l[3].map(s=>`<li><em>${++rn}</em><b>${s[0]}</b><span class="small">${s[1]}</span></li>`).join('')}</ol></div>`).join('')}</div>
 </div>
 <div class="grid2">
  <div class="card"><h3>${ic('chart-column')}Qué cuenta el portal</h3>
   <div class="grid3" style="margin-top:8px">
    <div class="tile"><b>3,337</b><span>empresas</span></div><div class="tile"><b>1,995</b><span>escuelas</span></div><div class="tile"><b>6</b><span>subsistemas</span></div>
   </div>
   <p class="small muted" style="margin-top:9px">Contadores de la portada a la fecha de análisis, 1 nov 2026. Son registros, no matrícula activa, y el detalle pide inicio de sesión. ${src('PT')}</p>
  </div>
  <div class="card"><h3>${ic('triangle-alert')}Qué falta verificar</h3>
   <ul class="ob" style="margin-top:8px">
    <li><b>Plataforma Académica.</b> No aparece en el portal una dirección pública. Una convocatoria de beca de 2023 exigía estar activo en ella. ${src('BE')}</li>
    <li><b>Interior del portal.</b> Pide inicio de sesión. Lo descrito viene de manuales que no citan el Acuerdo 28/11/25.</li>
    <li><b>Actualización.</b> El Acuerdo ordenó ajustar ambas plataformas en 180 días hábiles. Falta confirmar si ya ocurrió.</li>
    <li><b>Soporte oficial.</b> soporte.educaciondual@sems.gob.mx</li>
   </ul>
  </div>
 </div>`;
 const c=$('#chap');
 c.innerHTML=CHAP.map((x,i)=>`<button data-i="${i}" aria-pressed="${i===0}">${ic(x[2])}<span><b>Capítulo ${x[0]}</b><small>${x[3]}</small></span></button>`).join('');
 const show=i=>{$$('button',c).forEach((b,j)=>b.setAttribute('aria-pressed',i===j));const x=CHAP[i];$('#chapd').innerHTML=`<h3>${x[3]}</h3><span class="small muted">Capítulo ${x[0]}. ${x[1]}</span><p>${x[4]}</p><div class="lab">Qué contiene</div><ul class="ob">${x[5].map(y=>`<li>${art(y[0])} <b>${y[1]}.</b> <span>${y[2]}</span></li>`).join('')}</ul>`};
 c.addEventListener('click',e=>{const b=e.target.closest('button');if(b)show(+b.dataset.i)});show(0);
}

