/* ---------- 1. Resumen ---------- */
const CHAP=[
 ['I','Disposiciones generales','file-text','¿De qué trata y a quién obliga?','Define la educación dual, nombra a los obligados y fija 60 definiciones.','1 a 4'],
 ['II','De la Educación Dual','route','¿Cómo funciona?','Fija características, planes, planificación y horas en el espacio laboral.','5 a 10'],
 ['III','De los participantes','users','¿Qué debe hacer cada quien?','Enumera deberes de estudiantes, escuelas, subsistemas y espacios laborales.','11 a 17'],
 ['IV','Del Comité Directivo','landmark','¿Quién coordina a nivel nacional?','Crea un órgano colegiado que opina, recomienda y evalúa.','18 a 21'],
 ['V','De los Convenios de Colaboración','file-pen-line','¿Cómo entra una empresa?','Exige un convenio por empresa, institución u organismo.','22 a 25'],
 ['VI','De los Convenios de Aprendizaje','file-check','¿Cómo entra un estudiante?','Exige un convenio por estudiante, ligado a la colaboración vigente.','26 a 29'],
 ['VII','Del Sistema de Información','database','¿Dónde queda el registro?','Une la Plataforma Académica y la de Espacios de Formación Laboral.','30 y 31']];
const RULES=[
 ['timer','18 a 30 h','por semana en el espacio laboral','18 h son 3 días. 30 h son 5 días.','8'],
 ['calendar-clock','1 a 3 años','de formación en el espacio laboral','Depende de la carrera. 3 años solo en tecnólogos.','8'],
 ['flag','2.º ciclo','es el momento de entrada','Antes hay que acreditar el primer ciclo.','11 I'],
 ['target','75 %','de coincidencia mínima','Entre puestos de la empresa y plan de estudios.','14 VI'],
 ['shield-check','2 seguros','protegen al estudiante','Facultativo del IMSS y ampliado de la empresa.','26 V'],
 ['clock','Sin noche','en ningún caso','Solo horario matutino o vespertino.','5 V'],
 ['award','2 certificados','al concluir','Bachillerato Nacional y Formación Profesional.','4 XXI'],
 ['file-check','30 días hábiles','para registrar cada convenio','Aplica a colaboración y aprendizaje.','24']];
const ASK=[
 ['est','Estudiante',[['Acreditar el primer ciclo','11 I'],['Elegir espacio laboral','11 VI'],['Cumplir el convenio','11 V']]],
 ['esc','Escuela',[['Firmar y registrar cada convenio','12 V'],['Matricular en plataformas','12 VI'],['Informar cada mes','12 V']]],
 ['sub','Subsistema',[['Validar empresas','13 XIII'],['Firmar colaboración','13 XIV'],['Informar cada trimestre','13 XIX']]],
 ['emp','Espacio laboral',[['Contar con instructores certificados','14 VI'],['Contratar seguro ampliado','14 XI'],['Apoyar traslado y comida','14 XII']]]];
function renderResumen(){
 $('#resumen').innerHTML=`
 <div class="lead"><h2>Resumen del Acuerdo 28/11/25</h2><p>Esta página resume un solo documento oficial y la plataforma donde se opera. La investigación académica está en Evidencia.</p></div>
 <div class="card"><h3>${ic('stamp')}Qué es este documento</h3>
  <div class="facts">
   <div><span class="lab">Nombre</span><p>Lineamientos Generales para impartir media superior en opción de educación dual</p></div>
   <div><span class="lab">Emite</span><p>Secretaría de Educación Pública</p></div>
   <div><span class="lab">Publicación</span><p>DOF, 18 nov 2025. Vigente desde el 19 nov 2025</p></div>
   <div><span class="lab">Sustituye a</span><p>Acuerdo 02/02/22. Sus generaciones terminan con ese plan</p></div>
   <div><span class="lab">Obliga a</span><p>SEMS, DGETI, DGETAyCM, DGBTED, DGCFT y escuelas ${art('2')}</p></div>
   <div><span class="lab">Texto oficial</span><p><a href="${S.A.u}" target="_blank" rel="noopener">Abrir en el Diario Oficial</a></p></div>
  </div>
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
 <div class="rules">${RULES.map(r=>`<div class="tile">${ic(r[0])}<b>${r[1]}</b><span>${r[2]}</span><small>${r[3]}</small><span>${art(r[4])}</span></div>`).join('')}</div>
 <div class="lead"><h2>Qué le pide a cada quien</h2></div>
 <div class="grid4">${ASK.map(a=>`<div class="card asks" style="${gv(a[0])}"><h3>${ic(G[a[0]].i)}${a[1]}</h3><ul class="do">${a[2].map(x=>`<li><span>${x[0]}</span> ${art(x[1])}</li>`).join('')}</ul></div>`).join('')}</div>
 <div class="card"><h3>${ic('map')}Cómo está organizado</h3><div class="chap" id="chap"></div><div class="chapd" id="chapd"></div></div>
 <div class="card" id="tl"><h3>${ic('calendar-clock')}Calendario de transitorios</h3>
  <div class="tl">
   <div class="tlp"><b>18 nov 2025</b><span>Publicación en el DOF</span></div>
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
   <div class="tile">${ic('layers')}<b>31 a 2</b><span>subsistemas EMS a unificar: bachillerato general y tecnológico</span></div>
  </div>
  <p class="small muted" style="margin-top:9px">Fuente: Considerandos del Acuerdo 28/11/25.</p>
 </div>
 <div class="card"><h3>${ic('monitor')}La plataforma donde se opera</h3>
  <div class="plat">
   <div class="platd">
    <div class="pills"><span class="pill">Sistema de Información<small>Lo administra la SEMS</small></span><span class="fop small-op">=</span><span class="pill">Plataforma Académica<small>Clases y seguimiento</small></span><span class="fop small-op">+</span><span class="pill">Espacios de Formación Laboral<small>Empresas, escuelas y convenios</small></span></div>
    <p class="small muted">${art('4 LVI')} ${art('4 XLVI')} ${art('4 XLVII')}</p>
    <div class="lab" style="margin-top:6px">Ruta de una empresa en el portal</div>
    <div class="flow">${['Crear cuenta','Registrar datos','Agregar instructores','Elegir carreras','Avisar al subsistema','Ver estatus'].map((s,i)=>`<span><em>${i+1}</em>${s}</span>`).join('')}</div>
   </div>
   <div class="platn">
    <div class="tile"><b>3,337</b><span>empresas en el contador</span></div>
    <div class="tile"><b>1,995</b><span>escuelas en el contador</span></div>
    <div class="tile"><b>6</b><span>subsistemas en el contador</span></div>
   </div>
  </div>
  <p class="small muted" style="margin-top:10px">Portal consultado el 4 nov 2026. Son registros, no matrícula activa. <a href="${S.PT.u}" target="_blank" rel="noopener">Abrir la plataforma</a></p>
 </div>
 <div class="lead"><h2>Puntos de atención al leerlo</h2></div>
 <div class="finds">
  <div class="find"><b>Subsistema significa dos cosas</b><small>El Acuerdo define 3. El portal cuenta 6.</small><span>${art('4 LVII')}</span><a class="go" href="#subsistemas">${ic('layers')}Ver comparación</a></div>
  <div class="find"><b>Un convenio depende del otro</b><small>Colaboración dura 2 años y la planificación 3. Sin colaboración vigente, el de aprendizaje no vale.</small><span>${art('22')} ${art('29')}</span><a class="go" href="#procesos">${ic('calendar-clock')}Probar simulador</a></div>
  <div class="find warn"><b>75 % no alcanza para el máximo</b><small>Las horas máximas piden madurez y superar el 75 %.</small><span>${art('14 VI')} ${art('8 III')}</span><a class="go" href="#procesos">${ic('timer')}Calcular horas</a></div>
 </div>`;
 const c=$('#chap');
 c.innerHTML=CHAP.map((x,i)=>`<button data-i="${i}" aria-pressed="${i===0}">${ic(x[2])}Capítulo ${x[0]}</button>`).join('');
 const show=i=>{$$('button',c).forEach((b,j)=>b.setAttribute('aria-pressed',i===j));const x=CHAP[i];$('#chapd').innerHTML=`<b>${x[3]}</b><span>${x[1]}. ${x[4]}</span><span>${art(x[5])}</span>`};
 c.addEventListener('click',e=>{const b=e.target.closest('button');if(b)show(+b.dataset.i)});show(0);
}

