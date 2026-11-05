const SB=[
 {n:'DGETI',f:'Dirección General de Educación Tecnológica Industrial y de Servicios',pl:'CBTIS y CETIS',v:'Directa',s:1,o:1,c:1,p:1,fi:1},
 {n:'DGETAyCM',f:'Dirección General de Educación Tecnológica Agropecuaria y Ciencias del Mar',pl:'CBTA, CBTF, CETAC, CETMAR y CMM',v:'Directa',s:1,o:1,c:1,p:1,fi:1},
 {n:'DGBTED',f:'Dirección General de Bachillerato Tecnológico de Educación y Promoción Deportiva',pl:'BTED',v:'Directa',s:1,o:1,c:1,p:1,fi:1},
 {n:'DGCFT',f:'Dirección General de Centros de Formación para el Trabajo',pl:'Sin plantel definido en el Acuerdo',v:'Directa',s:0,o:1,c:1,p:0,fi:0},
 {n:'CECyTE',f:'Colegios de Estudios Científicos y Tecnológicos',pl:'Colegios',v:'Por adopción',s:0,o:0,c:.5,p:1,fi:0},
 {n:'CONALEP',f:'Colegio Nacional de Educación Profesional Técnica',pl:'Planteles CONALEP',v:'Por adopción',s:0,o:0,c:1,p:1,fi:0},
 {n:'CETI',f:'Centro de Enseñanza Técnica Industrial',pl:'Planteles CETI',v:'Por adopción',s:0,o:0,c:1,p:1,fi:0}
];
const COL=[
 ['s','¿Quién es Subsistema según el Acuerdo?','Subsistema por definición','art. 4 LVII','Solo estas tres son "Subsistema" en el Acuerdo. Cuando un artículo dice "los Subsistemas deben", se refiere a ellas.',art('4 LVII')],
 ['o','¿A quién obliga directamente?','Obligado directo','art. 2','Deben cumplir los Lineamientos sin firmar nada más. La DGCFT queda obligada aunque no se define como Subsistema. La lista también incluye a la SEMS y a las Escuelas.',art('2')],
 ['fi','¿Quién puede firmar Convenios de Colaboración?','Firma colaboración','Acuerdo, art. segundo','Sus titulares reciben la facultad de firmar, con anuencia de la SEMS y opinión favorable de la Unidad de Asuntos Jurídicos y Regulación.','Acuerdo, artículo segundo.'],
 ['c','¿Quién se sienta en el Comité Directivo?','Comité Directivo','art. 19','Tienen asiento con voz y voto. CECyTE participa de forma indirecta, por medio de su Coordinación de ODES, adscrita a la DGETI.',art('19')],
 ['p','¿Quién aparece en el portal?','Portal y manual','6 subsistemas','El portal y sus manuales los tratan como subsistemas. Suman a CECyTE, CONALEP y CETI, y dejan fuera a la DGCFT.',src('PT')]];
let lens='s';
const mark=v=>v===1?`<span class="y yes">${ic('circle-check')}Sí</span>`:v===.5?`<span class="y part">${ic('circle-dashed')}Indirecto</span>`:`<span class="y no">${ic('circle-minus')}No</span>`;
function renderSub(){
 $('#subsistemas').innerHTML=`
 <div class="lead"><h2>¿Cuántos subsistemas hay?</h2><p>Un subsistema es la institución que agrupa a un conjunto de planteles. La respuesta cambia según la fuente: <b>el Acuerdo define 3, el portal cuenta 6</b> y, al sumar ambos, aparecen 7 organismos.</p></div>
 ${HOWTO}
 <div class="tiles">
  <div class="tile">${ic('stamp')}<b>3</b><span>según el Acuerdo: DGETI, DGETAyCM y DGBTED</span></div>
  <div class="tile">${ic('monitor')}<b>6</b><span>según el portal: agrega CECyTE, CONALEP y CETI</span></div>
  <div class="tile">${ic('layers')}<b>7</b><span>organismos en juego, al sumar la DGCFT, obligada por el Acuerdo</span></div>
 </div>
 <div class="note">${ic('info')}<span><b>Por qué importa.</b> Según a quién se incluya cambia quién firma los convenios, quién está obligado y a quién aplica cualquier análisis.</span></div>
 <div class="card"><h3>${ic('filter')}Compara los 7 organismos</h3>
  <div class="guide two">
   <div><div class="lab">Para qué sirve</div><p class="small">Muestra qué organismos cuentan según la pregunta que se haga. Un organismo puede estar dentro para una pregunta y fuera para otra.</p></div>
   <div><div class="lab">Cómo se usa</div><p class="small">Pulsa una pregunta. Abajo aparece la respuesta y la tabla resalta la columna que le corresponde.</p></div>
  </div>
  <div class="lens" id="lens">${COL.map(c=>`<button data-k="${c[0]}" aria-pressed="${c[0]===lens}">${c[1]}</button>`).join('')}</div>
  <div class="ans" id="lansw" aria-live="polite"></div>
  <div class="scroll" style="margin-top:12px"><table id="sbt" style="min-width:820px"></table></div>
 </div>
 <div class="card"><h3>${ic('arrow-left-right')}Cómo entra cada organismo a la norma</h3>
  <p class="small muted" style="margin:4px 0 10px">Hay dos caminos. El primero obliga por sí solo. El segundo requiere firmar un instrumento jurídico.</p>
  <div class="ways">
   <div class="way"><b>${ic('stamp')} Directa ${art('2')}</b><div class="pills">${['DGETI','DGETAyCM','DGBTED'].map(x=>`<span class="pill">${x}</span>`).join('')}<span class="pill">DGCFT<small>Obligada, no Subsistema</small></span></div><span class="small muted">Dependen de la SEMS. Aplican los Lineamientos sin instrumento adicional.</span></div>
   <div class="way"><b>${ic('file-pen-line')} Por adopción ${art('3')}</b><div class="pills">${['CONALEP','CECyTE','CETI'].map(x=>`<span class="pill">${x}</span>`).join('')}<span class="pill">Autoridades estatales<small>Y organismos descentralizados</small></span></div><span class="small muted">La SEMS promueve la adopción con instrumentos jurídicos. Hay que confirmar cada instrumento. CONALEP ya presenta el Acuerdo como marco. ${src('BB')}</span></div>
  </div>
 </div>
 <div class="card"><h3>${ic('chart-column')}Dónde se concentra la participación reportada</h3>
  <p class="small muted" style="margin:4px 0 10px">Muestra qué parte de la participación dual correspondió a cada organismo en una encuesta.</p>
  <div style="display:flex;gap:2px;height:38px" role="img" aria-label="CECyTE 48 por ciento, CONALEP 40 por ciento, otros 12 por ciento">
   <div style="flex:48;background:var(--s-b);color:#fff;border-radius:4px 0 0 4px;display:grid;place-items:center;font-weight:600">CECyTE 48 %</div>
   <div style="flex:40;background:color-mix(in srgb,var(--s-b) 62%,var(--surface));display:grid;place-items:center;font-weight:600">CONALEP 40 %</div>
   <div style="flex:12;background:var(--s-a);color:#fff;border-radius:0 4px 4px 0;display:grid;place-items:center;font-weight:600;font-size:13px">Otros 12 %</div>
  </div>
  <p class="small" style="margin-top:9px"><b>88 % está fuera de los 3 Subsistemas del Acuerdo.</b> <span class="muted">Encuesta SEMS-GIZ 2020-2021. Otros es el resto calculado. Puede reflejar quién respondió, no toda la matrícula.</span> ${src('HM24')}</p>
 </div>
 <div class="note">${ic('triangle-alert')}<span><b>Dato por conciliar.</b> CONALEP expuso un máximo de "24 o 32" horas semanales. El Acuerdo dice 24 o 30. ${art('8')} ${src('BB')}</span></div>
 <div class="note">${ic('info')}<span>El portal también cuenta 1,995 escuelas y 3,337 empresas. Son registros, no matrícula activa, y el detalle pide inicio de sesión. ${src('PT')}</span></div>`;
 $('#lens').addEventListener('click',e=>{const b=e.target.closest('button');if(b){lens=b.dataset.k;tableSub()}});
 tableSub();
}
function tableSub(){
 const C=COL.find(c=>c[0]===lens),yes=SB.filter(s=>s[lens]===1),half=SB.filter(s=>s[lens]===.5);
 $$('#lens button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.k===lens));
 $('#lansw').innerHTML=`<div class="ansn"><b>${yes.length}</b><span>de 7${half.length?` y ${half.length} indirecto`:''}</span></div><div><div class="pills">${yes.map(s=>`<span class="pill">${s.n}</span>`).join('')}${half.map(s=>`<span class="pill">${s.n}<small>Indirecto</small></span>`).join('')}</div><p class="small" style="margin-top:7px">${C[4]} ${C[5]}</p></div>`;
 $('#sbt').innerHTML=`<thead><tr><th>Organismo</th>${COL.map(c=>`<th class="${c[0]===lens?'hl':''}">${c[2]}<br><span style="font-weight:400">${c[3]}</span></th>`).join('')}<th>Planteles</th><th>Entrada a la norma</th></tr></thead>
 <tbody>${SB.map(s=>`<tr class="${s[lens]?'':'off'}"><td><b>${s.n}</b><br><span class="small muted">${s.f}</span></td>${COL.map(c=>`<td class="${c[0]===lens?'hl':''}">${mark(s[c[0]])}</td>`).join('')}<td class="small">${s.pl}</td><td class="small">${s.v}</td></tr>`).join('')}</tbody>`;
}

