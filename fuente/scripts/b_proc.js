/* ---------- 3. Procesos ---------- */
const GLOS=[
 ['factory','Espacio de formación laboral','La empresa o institución pública donde se aprende trabajando.','4 XXVII'],
 ['user-check','Puesto de aprendizaje','Lugar dentro del espacio laboral donde se practica durante un tiempo.','4 LI'],
 ['sparkles','Competencias laborales','Lo que se sabe hacer. Básicas: generales. Extendidas: propias de un oficio.','4 VII'],
 ['target','Matriz de correspondencia','Tabla que compara lo que enseña el puesto con lo que pide el plan de estudios.','4 XXXVII'],
 ['shuffle','Plan de rotación','Calendario de puestos y actividades que seguirá el estudiante.','4 XLIV'],
 ['building-2','Empresa madura','Líder en dual, con instructores certificados y apoyos completos.','4 XXIV'],
 ['network','Subsistema','En el Acuerdo: DGETI, DGETAyCM y DGBTED.','4 LVII'],
 ['award','Doble Certificación','Dos documentos: estudios de bachillerato y formación profesional.','4 XXI']];
const P=[
 {ph:0,n:'Diseñar el plan',i:'clipboard-list',w:['sub','gob'],q:'Decidir qué carreras se ofrecerán en opción dual y qué se aprenderá en ellas.',f:'Que lo aprendido en la empresa cuente para el plan de estudios y responda a una necesidad real.',c:['El Subsistema estudia si la carrera es viable y pertinente','Pide opinión al Comité Directivo','Propone el plan a la SEMS','La SEMS aprueba y se difunde en el Sistema de Información'],o:'Plan y Programa aprobado y publicado',pl:'Sin plazo fijo. Salud requiere opinión adicional de la CIFRHS',a:['7','13 I','13 II','20 III'],r:['Las carreras de salud piden un trámite extra.','A'],m:{gob:'A',sub:'E'}},
 {ph:0,n:'Registrar el espacio',i:'building-2',w:['emp','sub'],q:'Dar de alta a la empresa o institución en la plataforma oficial.',f:'Que el Subsistema la valide y las escuelas puedan encontrarla.',c:['Crea cuenta y carga datos fiscales y domicilio','Registra a sus instructores','Elige carreras, planteles y lugares tentativos','Avisa al Subsistema, que valida su registro'],o:'Empresa validada y visible para el plantel',pl:'Los módulos se activan en orden',a:['14 III','14 IV','14 VII','14 VIII','13 XIII'],r:['Si no aparece: falta validar, falta convenio o la fecha no cubre el periodo.','MAN'],m:{sub:'S',emp:'E'}},
 {ph:0,n:'Convenio de Colaboración',i:'file-pen-line',w:['sub','gob','emp'],q:'El acuerdo marco entre la autoridad educativa y la empresa, institución u organismo. Es el primer documento formal.',f:'Fijar compromisos de cada parte. Sin él no existe la opción dual en esa empresa.',c:['La empresa entrega acta constitutiva, constancia fiscal y poder del representante','La SEMS da su anuencia','Firman el Subsistema o la SEMS y la empresa','Se registra en el sistema'],o:'Convenio firmado con bases, compromisos y vigencia',pl:'Registrar en máximo 30 días hábiles. Vigencia inicial: 2 años',a:['22','23','24','13 XIV'],r:['Dura 2 años, y la planificación 3.','A'],m:{gob:'A',sub:'FR',emp:'F'}},
 {ph:1,n:'Planificar',i:'target',w:['esc','emp'],q:'Escuela y empresa definen juntas qué aprenderá el estudiante, dónde y cuándo.',f:'Convertir el plan de estudios en actividades reales dentro de la empresa.',c:['Comparan puestos contra plan de estudios: Matriz de correspondencia','Ordenan puestos y tiempos: Plan de rotación','Ajustan horas al calendario escolar autorizado'],o:'Matriz y Plan de rotación',pl:'Mínimo 75 % de matriz. Planificación a 3 años',a:['8','9','10','14 VI'],r:['En un caso estudiado en Jalisco, el criterio rondaba 85 %.','D25'],m:{sub:'S',esc:'E',emp:'E'}},
 {ph:1,n:'Seleccionar',i:'search',w:['esc','emp','est'],q:'Elegir qué estudiantes participan y a qué espacio laboral van.',f:'Empatar el interés del estudiante, lo que pide la carrera y el perfil de la empresa.',c:['La escuela difunde carreras, convocatorias y empresas','El estudiante manifiesta su preferencia','Si es menor, la familia consiente por escrito','Escuela y empresa seleccionan juntas'],o:'Estudiante asignado a un espacio laboral',pl:'Tras acreditar el primer ciclo',a:['11 I','11 II','11 VI','12 II','12 VII','14 IX'],r:['La escuela suele mirar notas y conducta. La empresa, actitud y potencial.','D25'],m:{esc:'E',emp:'E',est:'P'}},
 {ph:1,n:'Convenio de Aprendizaje',i:'file-check',w:['esc','emp','est'],q:'El acuerdo individual: uno por estudiante. Firman escuela, empresa, estudiante y, si es menor, su madre, padre o tutor legal.',f:'Dejar por escrito horario, duración, puestos, seguros y apoyos de esa persona.',c:['Se integran calendario, matriz y plan de rotación','Se precisan seguros y apoyos','Firman las partes','El Responsable de vinculación lo registra'],o:'Un convenio firmado por estudiante',pl:'Registrar en máximo 30 días hábiles. Vigencia de 1 a 2 años, hasta 3 en tecnólogos',a:['26','27','28','29'],r:['Pierde validez si no hay Convenio de Colaboración vigente.','A'],m:{sub:'S',esc:'F',emp:'F',est:'F'}},
 {ph:1,n:'Matricular',i:'database',w:['esc','sub'],q:'Inscribir formalmente al estudiante en la opción dual dentro de los sistemas de la SEMS.',f:'Darle acceso a la Plataforma Académica y dejar registro para supervisar.',c:['El Responsable de vinculación captura sus datos','Registra su Convenio de Aprendizaje','Lo inscribe en ambas plataformas','El Subsistema acompaña y supervisa'],o:'Estudiante activo en ambas plataformas',pl:'Requiere el convenio previo',a:['12 VI','13 XII'],r:['El manual de escuela pide cargar el convenio de cada alumno.','MAN'],m:{sub:'S',esc:'R'}},
 {ph:2,n:'Formar y dar seguimiento',i:'shuffle',w:['esc','emp','est','sub'],q:'La etapa central: parte de la semana se aprende en la escuela y plataforma, y parte en el espacio laboral.',f:'Desarrollar competencias en situaciones reales sin abandonar la formación académica.',c:['El Instructor guía en cada puesto','El Tutor académico da seguimiento','El Docente facilitador acompaña lo académico','Escuela informa al mes y Subsistema al trimestre'],o:'Plan de rotación cumplido e informes entregados',pl:'Calendario y horario apegados al escolar. Nunca nocturno',a:['5 II','5 III','5 V','12 V','12 IX','13 XIX'],r:['Si el alumno solo limpia o no rota, el docente debe intervenir.','D25'],m:{gob:'S',sub:'S',esc:'E',emp:'E',est:'P'}},
 {ph:2,n:'Evaluar y certificar',i:'award',w:['esc','emp','sub','gob'],q:'Comprobar lo aprendido y emitir los documentos finales.',f:'Que quien egresa acredite sus estudios y su formación laboral.',c:['Docentes evalúan lo académico','Instructor y Tutor evalúan competencias','Se cumplen requisitos de Subsistema y COSAC','Se emite la Doble Certificación. CONOCER es opcional'],o:'Doble Certificación',pl:'Según normas de control escolar de la SEP',a:['5 VIII','5 IX','5 X','13 XVII'],r:['Depende de normas que el Acuerdo ordenó emitir.','A'],m:{gob:'A',sub:'R',esc:'E',emp:'E',est:'P'}}
];
const PH=['Preparar','Vincular','Formar y certificar']; let ps=0;
const CODE={A:'Aprueba o fija',F:'Firma',E:'Ejecuta',R:'Registra',S:'Supervisa o valida',P:'Participa'};
const RLAB={A:'Atención en el Acuerdo',MAN:'Dato del manual de la plataforma',D25:'Dato de investigación, no del Acuerdo'};
function renderProcesos(){
 let n=0;
 $('#procesos').innerHTML=`
 <div class="lead"><h2>De la oferta al certificado</h2><p>Nueve pasos, explicados para quien llega sin contexto. Selecciona uno para ver qué es, para qué sirve y cómo se hace.</p></div>
 ${HOWTO}
 <div class="card"><h3>${ic('book-open-check')}Ocho palabras para empezar</h3>
  <div class="glos">${GLOS.map(g=>`<div>${ic(g[0])}<b>${g[1]}</b><span>${g[2]}</span><span>${art(g[3])}</span></div>`).join('')}</div>
 </div>
 <div class="phases">${PH.map((h,i)=>`<div class="phase"><h3>${h}</h3><div class="steps">${P.filter(p=>p.ph===i).map(p=>{n++;return `<button class="step" data-i="${P.indexOf(p)}" aria-pressed="false">${ic(p.i)}<em>${n}</em>${p.n}</button>`}).join('')}</div></div>`).join('')}</div>
 <div class="card"><div class="stepd" id="stepd"></div></div>
 <div class="card"><h3>${ic('list-checks')}Quién actúa en cada paso</h3>
  <div class="legendline" style="margin-bottom:8px">${Object.entries(CODE).map(([k,v])=>`<span><b class="mk" style="--g:var(--g-apo)">${k}</b>${v}</span>`).join('')}</div>
  <div class="scroll"><table style="min-width:640px"><thead><tr><th>Paso</th>${['gob','sub','esc','emp','est'].map(g=>`<th>${ic(G[g].i)} ${G[g].n}</th>`).join('')}</tr></thead>
  <tbody>${P.map((p,i)=>`<tr data-step="${i}"><td>${i+1}. ${p.n}</td>${['gob','sub','esc','emp','est'].map(g=>`<td>${[...(p.m[g]||'')].map(c=>`<span class="mk" style="${gv(g)}" data-tip="${CODE[c]}">${c}</span>`).join('')}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
 </div>
 <div class="grid2">
  <div class="card"><h3>${ic('timer')}Calculadora de horas</h3>
   <p class="small muted" style="margin-bottom:10px">Muestra cuántos días a la semana iría el estudiante al espacio laboral. ${art('8')}</p>
   <div class="ctrl">
    <label for="h-c">Carrera
     <select id="h-c"><option value="g1">Sociales, negocios, artes, servicios, educación</option><option value="g2" selected>Ciencias, TIC, ingeniería, agro, salud</option><option value="tec">Tecnólogo de 8 semestres</option></select></label>
    <label for="h-d" id="h-dl">Plan de rotación
     <select id="h-d"><option value="m">Menos de 2 años</option><option value="d" selected>2 años</option></select></label>
    <label for="h-m"><span>Matriz: <output id="h-mo">80</output> %</span>
     <input id="h-m" type="range" min="50" max="100" value="80"></label>
    <label class="check" for="h-x"><input id="h-x" type="checkbox">Empresa madura o institución equiparada</label>
   </div>
   <div id="h-out"></div>
  </div>
  <div class="card"><h3>${ic('calendar-clock')}Simulador de convenios</h3>
   <p class="small muted" style="margin-bottom:10px">Muestra si el Convenio de Aprendizaje queda cubierto por el de Colaboración. ${art('29')}</p>
   <div class="ctrl">
    <label for="c-t">Espacio
     <select id="c-t"><option value="24">Regular: colaboración 2 años</option><option value="36">Madura o equiparada: hasta 3</option><option value="48">Tecnólogo 8 semestres: hasta 4</option></select></label>
    <label for="c-a">Convenio de Aprendizaje
     <select id="c-a"></select></label>
    <label for="c-s"><span>Inicia en el mes <output id="c-so">6</output> del convenio</span>
     <input id="c-s" type="range" min="0" max="30" step="1" value="6"></label>
   </div>
   <div id="c-out"></div>
  </div>
 </div>`;
 $('.phases').addEventListener('click',e=>{const b=e.target.closest('.step');if(b){ps=+b.dataset.i;showStep()}});
 $('#procesos tbody').addEventListener('click',e=>{const t=e.target.closest('tr');if(t){ps=+t.dataset.step;showStep()}});
 ['h-c','h-d','h-m','h-x'].forEach(i=>$('#'+i).addEventListener('input',calcHours));
 ['c-t','c-a','c-s'].forEach(i=>$('#'+i).addEventListener('input',calcConv));
 showStep();calcHours();fillCA();calcConv();
}
function showStep(){
 const p=P[ps];
 $$('.step').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.i===ps));
 $$('#procesos tbody tr').forEach(t=>t.classList.toggle('on',+t.dataset.step===ps));
 $('#stepd').innerHTML=`
  <div class="sblock"><div class="lab">Paso ${ps+1} de 9</div><h3 class="sttl">${p.n}</h3>
   <div class="lab">Qué es</div><p>${p.q}</p>
   <div class="lab">Para qué sirve</div><p>${p.f}</p>
   <div class="chips">${p.w.map(gtag).join('')}</div></div>
  <div class="sblock"><div class="lab">Cómo se hace</div><ol class="how">${p.c.map(x=>`<li>${x}</li>`).join('')}</ol></div>
  <div class="sblock"><div class="lab">Resultado</div><p>${p.o}</p>
   <div class="lab">Plazo o condición</div><p>${p.pl}</p>
   <div class="lab">Dónde lo dice el Acuerdo</div><div class="chips">${p.a.map(art).join('')}</div>
   <div class="note">${ic('triangle-alert')}<span><b>${RLAB[p.r[1]]}.</b> ${p.r[0]}</span></div></div>`;
}
