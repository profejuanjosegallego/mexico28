/* ---------- 5. Evidencia ---------- */
const T=[
 {g:['esc','emp'],i:'clipboard-check',t:'Evaluación compartida',p:'a',n:['Instructor y tutor evalúan juntos.','5 VIII'],x:'El docente confía en la nota, pero vigila reportes semanales. Empresas usan evaluaciones internas.',s:['D25','C18']},
 {g:['emp'],i:'shuffle',t:'Rotación real',p:'a',n:['Plan de rotación ligado a resultados de aprendizaje.','4 XLIV'],x:'En talleres manda el trabajo que llega. En Sinaloa se cambia de empresa para completar puestos.',s:['D25','AP24']},
 {g:['emp'],i:'factory',t:'Capacidad empresarial',p:'a',n:['Matriz de 75 % e instructores capacitados y certificados.','14 VI'],x:'Pymes sin personal para instruir, padrón limitado y escasa participación empresarial.',s:['C18','AP24','CA25']},
 {g:['esc'],i:'users',t:'Carga docente',p:'a',n:['Cinco figuras escolares e informe mensual.','12 V'],x:'Pocos docentes gestionan el modelo, a menudo con tiempo extra. La carga de actividades condiciona el funcionamiento.',s:['D25','ES25']},
 {g:['est','esc'],i:'book-open-check',t:'Formación fundamental',p:'a',n:['1 h diaria en Plataforma Académica.','8'],x:'En Estado de México, 26 % dice que matemáticas mejoró mucho y 18 % inglés.',s:['HM24','AP24']},
 {g:['est','emp'],i:'wallet',t:'Apoyo económico',p:'a',n:['Alimentación y traslados según capacidad.','14 XII'],x:'$600 a $1,200 por semana, sin mínimo. Es el rubro de empresa peor valorado.',s:['D25','HM24']},
 {g:['sub'],i:'landmark',t:'Actores ausentes',p:'m',n:['El Comité reúne a educación y sector empresarial.','19'],x:'En la adopción del modelo faltaron Trabajo, Economía y sindicatos.',s:['AR24']},
 {g:['est'],i:'compass',t:'Expectativas',p:'m',n:['Formar para una vida productiva.','6'],x:'Aprendices valoran el programa, pero priorizan llegar a educación superior.',s:['HC25','D25']},
 {g:['est','emp'],i:'briefcase',t:'Primer empleo',p:'m',n:['Facilitar la inserción laboral.','14 XIV'],x:'La formación adicional pertinente eleva la probabilidad de empleo formal.',s:['HM26','ZT20']},
 {g:['esc','emp'],i:'search',t:'Selección',p:'m',n:['Escuela y empresa seleccionan.','12 VII'],x:'La escuela reparte para dar equidad. La selección condiciona el funcionamiento.',s:['D25','ES25']},
 {g:['est'],i:'house',t:'Consentimiento familiar',p:'m',n:['Consentimiento expreso, firmado y por escrito.','11 II'],x:'Las familias suelen enterarse por sus hijos. Una madre reporta confusión sobre una firma.',s:['D25','D26']},
 {g:['est','emp'],i:'bus',t:'Traslados',p:'m',n:['Facilitar desplazamientos.','14 XII'],x:'De 40 minutos a 2 horas para quienes cruzan municipios.',s:['D25']},
 {g:['sub','esc'],i:'hard-hat',t:'Equipamiento escolar',p:'m',n:['El Subsistema aporta infraestructura.','13 III'],x:'Escuelas dependen de donaciones básicas. Baja inversión en infraestructura escolar.',s:['D25','JE26']},
 {g:['sub'],i:'network',t:'Coordinación',p:'m',n:['Una regulación y un Comité Directivo.','18'],x:'Una organización habla de "26 modelos". El relevo de funcionarios obliga a rehacer relaciones.',s:['DR']},
 {g:['esc','emp'],i:'users-round',t:'Género',p:'m',n:['Priorizar a mujeres en áreas STEM.','5 XI'],x:'Estereotipos excluyen a mujeres en taller y empresa. 12 de 413 en Mantenimiento automotriz.',s:['ES26','HR26','D25']}
];
const IMP=[['Hacer tu trabajo',67.1,83.3],['Perspectivas de carrera',63.8,80.8],['Interactuar',63.8,78.2],['Comunicar ideas',59.0,71.8],['Emprender',51.5,53.8],['Español',45.9,59.0],['Computación',44.1,48.7],['Matemáticas',25.8,47.4],['Inglés',17.5,30.8]];
const SAT=[['Trato recibido',3.6,3.6],['Materiales y equipo',3.6,3.6],['Apoyo para buscar empleo',3.1,3.4],['Apoyo financiero',2.8,3.2]];
const LV={E:'Media superior',S:'Superior',M:'Sistema o mixto',C:'Empresa y transferencia'};
const THN={imp:'Implementación',gob:'Gobernanza y vinculación',tra:'Transferencia internacional',act:'Empresas e instructores',com:'Competencias y aprendizaje',ins:'Inserción laboral',est:'Estudiantes y familias',eva:'Evaluación',gen:'Género'};
let tf='all', cf='E';
function dumb(data,min,max,ticks,fmt,lbl,aria){
 const W=640,L=178,R=30,H=34+data.length*30,x=v=>L+(W-L-R)*(v-min)/(max-min);let g='';
 ticks.forEach(t=>{g+=`<line x1="${x(t)}" x2="${x(t)}" y1="20" y2="${H-8}" stroke="var(--line)"/><text x="${x(t)}" y="13" font-size="11" text-anchor="middle" opacity=".75">${fmt(t)}</text>`});
 data.forEach((d,i)=>{const y=38+i*30,a=x(d[1]),b=x(d[2]),show=lbl.includes(d[0]),same=a===b;
  g+=`<g data-tip="${d[0]}: Estado de México ${fmt(d[1])}, Coahuila ${fmt(d[2])}"><rect x="0" y="${y-14}" width="${W}" height="30" fill="transparent"/><text x="0" y="${y+4}" font-size="12.5">${d[0]}</text>
  <line x1="${a}" x2="${b}" y1="${y}" y2="${y}" stroke="var(--s-a)" stroke-width="2"/>
  <circle cx="${b}" cy="${y}" r="7" fill="var(--s-b)" stroke="var(--surface)" stroke-width="2"/>
  <circle cx="${a}" cy="${y}" r="${same?3.5:6}" fill="var(--surface)" stroke="var(--s-a)" stroke-width="2.5"/>
  ${show?`<text x="${a-11}" y="${y+4}" font-size="11.5" text-anchor="end">${fmt(d[1])}</text><text x="${b+11}" y="${y+4}" font-size="11.5">${fmt(d[2])}</text>`:''}</g>`});
 return `<svg class="chart" viewBox="0 0 ${W} ${H}" style="min-width:520px" role="img" aria-label="${aria}">${g}</svg>`;
}
const legend2=`<div class="legendline" style="margin-bottom:6px"><span><svg width="14" height="14" aria-hidden="true"><circle cx="7" cy="7" r="5" fill="none" stroke="var(--s-a)" stroke-width="2.5"/></svg>Estado de México</span><span><svg width="14" height="14" aria-hidden="true"><circle cx="7" cy="7" r="6" fill="var(--s-b)"/></svg>Coahuila</span></div>`;
const tbl=(h,rows)=>`<details><summary>Ver tabla</summary><div class="scroll"><table><thead><tr>${h.map(x=>`<th>${x}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div></details>`;
function stack(name,m,h){const t=m+h,p=m/t*100;return `<div style="margin-top:12px" data-tip="${name}: ${m} mujeres y ${h} hombres"><div class="small" style="display:flex;justify-content:space-between;gap:8px"><b>${name}</b><span>${m} mujeres de ${t} (${p.toFixed(1)} %)</span></div><div style="display:flex;gap:2px;height:16px;margin-top:4px"><div style="flex:0 0 ${Math.max(p,1)}%;background:var(--s-b);border-radius:4px 0 0 4px"></div><div style="flex:1;background:var(--s-a);border-radius:0 4px 4px 0"></div></div></div>`}
function yearChart(){
 const Y=BIB.years,W=640,H=214,L=26,B=24,T0=14,mx=15,x=i=>L+(W-L-6)*i/Y.length,bw=(W-L-6)/Y.length-5,y=v=>H-B-(H-B-T0)*v/mx;let g='';
 [0,5,10,15].forEach(t=>{g+=`<line x1="${L}" x2="${W}" y1="${y(t)}" y2="${y(t)}" stroke="var(--line)"/><text x="${L-6}" y="${y(t)+4}" font-size="11" text-anchor="end" opacity=".75">${t}</text>`});
 Y.forEach((d,i)=>{const e=d.E,o=d.S+d.M+d.C,X=x(i)+2;
  g+=`<g data-tip="${d.y}: ${e} de media superior y ${o} de otros niveles"><rect x="${X-2}" y="${T0}" width="${bw+4}" height="${H-B-T0}" fill="transparent"/>`;
  if(e)g+=`<rect x="${X}" y="${y(e)}" width="${bw}" height="${y(0)-y(e)}" fill="var(--s-b)"/>`;
  if(o)g+=`<rect x="${X}" y="${y(e+o)}" width="${bw}" height="${y(e)-y(e+o)-(e?2:0)}" rx="3" fill="var(--s-a)"/>`;
  g+=`<text x="${X+bw/2}" y="${H-7}" font-size="11" text-anchor="middle" opacity=".8">${String(d.y).slice(2)}</text></g>`});
 return `<svg class="chart" viewBox="0 0 ${W} ${H}" style="min-width:480px" role="img" aria-label="Publicaciones por año. La media superior crece desde 2024">${g}</svg>`;
}
function hbars(rows,max,cls=''){return `<div class="bars">${rows.map(r=>`<div class="bar ${r[1]?'':'z'} ${cls}"><span>${r[0]}</span><i style="width:${r[1]/max*100}%"></i><b>${r[1]}</b></div>`).join('')}</div>`}
function renderEv(){
 const B=BIB,instRows=[['CONALEP',B.instE.CONALEP||0],['DGETI',B.instE.DGETI||0],['DGETAyCM',B.instE.DGETAyCM||0],['CECyTE',B.instE.CECyTE||0],['DGBTED',0],['CETI',0]];
 const lvRows=['S','E','M','C'].map(k=>[LV[k],B.lv[k]]);
 const thRows=Object.keys(THN).map(k=>[THN[k],B.thE[k]||0]).sort((a,b)=>b[1]-a[1]);
 $('#evidencia').innerHTML=`
 <div class="lead"><h2>Estudio bibliométrico: norma contra hallazgos</h2><p>Medimos qué se ha publicado sobre formación dual en México y lo comparamos con el Acuerdo 28/11/25. Los hallazgos sirven como base para la caracterización. No evalúan el Acuerdo.</p></div>
 <div class="card"><h3>${ic('route')}Cómo se hizo</h3>
  <div class="prisma">
   <div><b>${B.ident}</b><span>resultados en OpenAlex, con 10 búsquedas</span></div>${ic('arrow-right')}
   <div><b>${B.uniq}</b><span>registros únicos, 2013 a nov 2026</span></div>${ic('arrow-right')}
   <div><b>${B.oa}</b><span>incluidos. ${B.ex} excluidos por no tratar de dual en México</span></div>${ic('arrow-right')}
   <div class="hi"><b>${B.n}</b><span>en el corpus, con ${B.bn} añadidos desde referencias</span></div>
  </div>
  <p class="small muted" style="margin-top:10px">Cada documento se clasificó por nivel, institución y tema con su título y resumen. El cruce con el Acuerdo busca términos en ese mismo texto.</p>
 </div>
 <div class="tiles">
  <div class="tile">${ic('library')}<b>${B.n}</b><span>documentos analizados</span></div>
  <div class="tile">${ic('graduation-cap')}<b>${B.lv.E}</b><span>son de media superior, el nivel que regula el Acuerdo</span></div>
  <div class="tile">${ic('timer')}<b>19 de 20</b><span>de media superior salieron desde 2022</span></div>
  <div class="tile">${ic('stamp')}<b>0</b><span>citan el Acuerdo 28/11/25 en título o resumen</span></div>
 </div>
 <div class="grid2">
  <div class="card"><h3>${ic('chart-column')}Publicaciones por año</h3>
   <div class="legendline" style="margin-bottom:6px"><span><i class="dot" style="--g:var(--s-b)"></i>Media superior</span><span><i class="dot" style="--g:var(--s-a)"></i>Otros niveles</span></div>
   <figure class="fig"><div class="scroll">${yearChart()}</div><figcaption>El tema en media superior es muy reciente. 2026 llega a noviembre.</figcaption></figure>
   ${tbl(['Año','Media superior','Superior','Mixto','Empresa'],B.years.filter(y=>y.E+y.S+y.M+y.C).map(y=>[y.y,y.E,y.S,y.M,y.C]))}
  </div>
  <div class="card"><h3>${ic('layers')}Nivel del corpus</h3>${hbars(lvRows,Math.max(...lvRows.map(r=>r[1])),'wide')}
   <div class="lab" style="margin-top:16px">Instituciones nombradas en media superior</div>${hbars(instRows,Math.max(...instRows.map(r=>r[1])),'wide')}
   <p class="small muted" style="margin-top:8px">Otros ${B.eNoInst} documentos no nombran institución en título o resumen.</p>
  </div>
 </div>
 <div class="card"><h3>${ic('scale')}La comparación: temas del Acuerdo contra la literatura</h3>
  <p class="small muted" style="margin-bottom:8px">Documentos que mencionan cada tema en título o resumen.</p>
  <div class="scroll"><table class="xt" style="min-width:600px"><thead><tr><th>Tema del Acuerdo</th><th>Dónde</th><th>Todo el corpus</th><th>Media superior</th><th>Lectura</th></tr></thead>
  <tbody>${[...B.cross].sort((a,b)=>b.all-a.all).map(c=>`<tr><td>${c.n}</td><td>${art(c.art)}</td><td><span class="xb"><i style="width:${c.all/10*100}%"></i><b>${c.all}</b></span></td><td><span class="xb e"><i style="width:${c.ems/10*100}%"></i><b>${c.ems}</b></span></td><td>${c.all===0?`<span class="status bad">${ic('circle-x')}Vacío</span>`:c.ems===0?`<span class="status warn">${ic('triangle-alert')}Sin media superior</span>`:`<span class="status ok">${ic('circle-check')}Con base</span>`}</td></tr>`).join('')}</tbody></table></div>
  <div class="note" style="margin-top:12px">${ic('flag')}<span><b>Lectura:</b> la literatura habla de personas: instructores, tutores y familias. Casi no habla de los instrumentos del Acuerdo: convenios, matriz, seguros, plataformas y Comité.</span></div>
 </div>
 <div class="grid2">
  <div class="card"><h3>${ic('search')}Temas en media superior</h3>${hbars(thRows,Math.max(...thRows.map(r=>r[1])),'wide2')}
   <p class="small muted" style="margin-top:8px">Un documento puede tener varios temas.</p></div>
  <div class="card"><h3>${ic('award')}Más citados</h3><ol class="tops">${B.top.map(t=>`<li><b>${t.c}</b><span>${t.a} ${t.y}. ${t.t}</span></li>`).join('')}</ol>
   <p class="small muted" style="margin-top:8px">${B.doc.filter(d=>d.c===0).length} documentos aún no tienen citas en OpenAlex. Fuente con más textos: ${B.ven[0][0]}, ${B.ven[0][1]}, casi todos de nivel superior.</p></div>
 </div>
 <div class="card"><h3>${ic('list-checks')}Corpus completo</h3>
  <div class="filter" id="cf">${['E','S','M','C','all'].map(k=>`<button data-k="${k}" aria-pressed="${k===cf}">${k==='all'?'Todos':LV[k]}</button>`).join('')}</div>
  <div class="scroll" style="margin-top:10px;max-height:380px;overflow:auto"><table id="cft" style="min-width:680px"></table></div>
 </div>
 <div class="note">${ic('info')}<span><b>Límites del estudio.</b> OpenAlex no cubre toda la literatura en español y puede subcontar citas. La clasificación se apoyó en título y resumen, y 10 documentos no tienen resumen. Conviene que el equipo revise la clasificación antes de publicar cifras.</span></div>
 <div class="lead"><h2>Hallazgos que pueden servir de base</h2><p>Lo que pide el Acuerdo junto a lo que ha observado la investigación. La prioridad es criterio del equipo. Casi todo es anterior al Acuerdo.</p></div>
 <div class="filter" id="tf"><button data-k="all" aria-pressed="true">Todos</button>${['esc','emp','est','sub'].map(g=>`<button data-k="${g}" aria-pressed="false">${ic(G[g].i)}${G[g].n}</button>`).join('')}</div>
 <div class="tens" id="tens"></div>
 <div class="lead"><h2>Datos de fuentes leídas a fondo</h2></div>
 <div class="grid2">
  <div class="card"><h3>${ic('sparkles')}Dicen que "mejoró mucho"</h3>${legend2}
   <figure class="fig"><div class="scroll">${dumb(IMP,0,100,[0,25,50,75,100],v=>v+' %',['Hacer tu trabajo','Matemáticas','Inglés'],'Coahuila supera al Estado de México en todos los rubros. Matemáticas e inglés son los más bajos')}</div>
   <figcaption>El trabajo mejora mucho más que matemáticas e inglés. ${src('HM24')}</figcaption></figure>
   ${tbl(['Rubro','Estado de México','Coahuila'],IMP.map(r=>[r[0],r[1]+' %',r[2]+' %']))}
  </div>
  <div class="card"><h3>${ic('heart-pulse')}Satisfacción de graduados</h3>${legend2}
   <figure class="fig"><div class="scroll">${dumb(SAT,1,4,[1,2,3,4],v=>String(v),['Trato recibido','Apoyo financiero'],'Apoyo financiero es el rubro más bajo en ambas entidades')}</div>
   <figcaption>Escala de 1 a 4. El dinero y la búsqueda de empleo quedan al final. ${src('HM24')}</figcaption></figure>
   ${tbl(['Rubro','Estado de México','Coahuila'],SAT.map(r=>[r[0],r[1],r[2]]))}
   <div style="margin-top:14px"><div class="lab">Mujeres en dos carreras, Conalep Jalisco 2020-2021</div>
   ${stack('Mantenimiento automotriz',12,401)}${stack('Química industrial',40,77)}
   <div class="legendline" style="margin-top:8px"><span><i class="dot" style="--g:var(--s-b)"></i>Mujeres</span><span><i class="dot" style="--g:var(--s-a)"></i>Hombres</span>${src('D25')}</div></div>
  </div>
 </div>
 <div class="grid2">
  <div class="card"><h3>${ic('chart-column')}Escala declarada</h3>
   <div class="tiles" style="grid-template-columns:repeat(auto-fit,minmax(112px,1fr))">
    <div class="tile"><b>915</b><span>aprendices 2013-14</span></div>
    <div class="tile"><b>5,068</b><span>aprendices 2017-18</span></div>
    <div class="tile"><b>10,319</b><span>aprendices 2022, cerca de 2 % de la EMS</span></div>
    <div class="tile"><b>17 mil</b><span>declarado, feb 2025</span></div>
   </div>
   <p class="small muted" style="margin-top:9px">Fuentes distintas, no comparables de forma estricta. ${src('C18')} ${src('HM24')} ${src('RZ')}</p></div>
  <div class="card"><h3>${ic('stamp')}Encuesta SEMS-GIZ 2021-2022</h3>
   <div class="tiles" style="grid-template-columns:repeat(auto-fit,minmax(112px,1fr))">
    <div class="tile"><b>92 %</b><span>de egresados: ayudó a entender su carrera</span></div>
    <div class="tile"><b>81 %</b><span>de empresas: mejor preparación que en escolarizada</span></div>
    <div class="tile"><b>69 %</b><span>de empresas forma hasta 5 educandos</span></div>
   </div>
   <p class="small muted" style="margin-top:9px">Autorreporte de 492 empresas, 304 escuelas, 1,374 egresados y 2,695 educandos. ${src('SG22')}</p></div>
 </div>`;
 $('#tf').addEventListener('click',e=>{const b=e.target.closest('button');if(b){tf=b.dataset.k;tens()}});
 $('#cf').addEventListener('click',e=>{const b=e.target.closest('button');if(b){cf=b.dataset.k;corp()}});
 tens();corp();
}
function tens(){
 $$('#tf button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.k===tf));
 $('#tens').innerHTML=T.filter(t=>tf==='all'||t.g.includes(tf)).map(t=>`<article class="ten"><header><h3>${ic(t.i)}${t.t}</h3><span class="prio ${t.p}">${ic(t.p==='a'?'triangle-alert':'info')}${t.p==='a'?'Alta':'Media'}</span></header>
 <div class="nvp"><div><span class="lab">Norma</span><span>${t.n[0]}</span><span>${art(t.n[1])}</span></div><div><span class="lab">Hallazgo</span><span>${t.x}</span><span class="chips">${t.s.map(src).join('')}</span></div></div>
 <div class="chips">${t.g.map(gtag).join('')}</div></article>`).join('');
}
function corp(){
 $$('#cf button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.k===cf));
 const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
 const d=BIB.doc.filter(x=>cf==='all'||x.l===cf).slice().sort((a,b)=>b.y-a.y);
 $('#cft').innerHTML=`<thead><tr><th>Año</th><th>Documento</th><th>Institución</th><th>Temas</th><th>Citas</th></tr></thead><tbody>${d.map(x=>`<tr><td>${x.y}</td><td>${x.u?`<a href="${x.u}" target="_blank" rel="noopener">${esc(x.a)}. ${esc(x.t)}</a>`:`${esc(x.a)}. ${esc(x.t)}`}</td><td class="small">${x.i.join(', ')||'·'}</td><td class="small">${x.h.map(h=>THN[h]).join(', ')}</td><td>${x.c===null?'n/d':x.c}</td></tr>`).join('')}</tbody>`;
}

