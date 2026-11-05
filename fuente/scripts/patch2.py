import re, sys, json
sp = sys.argv[1]; p = sp + '/src.html'
h = open(p, encoding='utf-8').read()
rd = lambda n: open(sp + '/scripts/' + n, encoding='utf-8').read()
def block(a, b, new):
    global h
    i = h.index(a); j = h.index(b, i)
    h = h[:i] + new + h[j:]
def sub(a, b, n=1):
    global h
    assert h.count(a) >= 1, a[:70]
    h = h.replace(a, b)

block('/* ---------- 1. Resumen ---------- */', '/* ---------- 2. Actores ---------- */', rd('b_resumen.js'))
block('/* ---------- 3. Procesos ---------- */', '/* Art. 8: horas por año', rd('b_proc.js'))
block('/* ---------- 5. Evidencia ---------- */', '/* ---------- 6. Autodiagnóstico ---------- */', rd('b_ev.js'))

# Citas clicables y datos embebidos
sub("""const art=t=>`<span class="art">art. ${t}</span>`;""",
"""const ART=/*ARTJSON*/null, BIB=/*BIBJSON*/null;
const artLabel=t=>t.replace(/^(\\d+) ([IVXL])/,'$1, fracc. $2');
const art=t=>`<button type="button" class="art" data-art="${t}" data-tip="Clic para leer el texto oficial">Art. ${artLabel(t)}</button>`;
const RN={I:1,V:5,X:10,L:50};
const romanN=s=>[...s].reduce((n,c,i,a)=>n+(RN[c]<(RN[a[i+1]]||0)?-RN[c]:RN[c]),0);
function artRefs(t){const out=[];let cur=null;t.split(/,\\s*/).forEach(tok=>{let m=tok.match(/^(\\d+) (a|y) (\\d+)$/);
 if(m){for(let i=+m[1];i<=+m[3];i++)out.push({a:String(i)});return}
 m=tok.match(/^(\\d+)?\\s*([IVXL]+)?(?:-([IVXL]+))?$/);if(!m)return;if(m[1])cur=m[1];
 if(m[2]&&m[3]){const o=ART[cur].o;o.slice(o.indexOf(m[2]),o.indexOf(m[3])+1).forEach(f=>out.push({a:cur,f}))}else out.push({a:cur,f:m[2]})});return out}
function openArt(t){const d=document.getElementById('artd'),r=artRefs(t);
 d.querySelector('#artb').innerHTML=r.map(x=>{const A=ART[x.a];if(!A)return '';
  const body=x.f?`<blockquote>${A.f[x.f]||''}</blockquote>`:`<blockquote>${A.t}</blockquote>${A.o.map(k=>`<blockquote><b>${k}.</b> ${A.f[k]}</blockquote>`).join('')}`;
  return `<h3>Artículo ${x.a}${x.f?`, fracción ${x.f}`:''}</h3>${x.f?`<p class="small muted">La fracción es un inciso del artículo, numerado en romanos. ${x.f} equivale a ${romanN(x.f)}.</p>`:''}${body}`}).join('');
 d.showModal();}""")
sub("""const src=k=>`<a class="src" href="#fuentes" data-tip="${S[k].t}. ${S[k].st}.">${S[k].l}</a>`;""",
"""const src=k=>`<a class="src" href="#fuentes" data-tip="${S[k].t}. ${S[k].st}.">${S[k].l}</a>`;
const HOWTO=`<div class="howto">${ic('info')}<div><b>Cómo leer las citas.</b> <span class="demo">Art. 4, fracc. LX</span> significa artículo 4, fracción 60 de los Lineamientos, que son el Anexo del Acuerdo 28/11/25. Haz clic en cualquier cita para leer el texto oficial.</div></div>`;""")
sub('<div id="tip" role="tooltip"></div>', '<dialog id="artd" aria-label="Texto del Acuerdo"><div class="dh"><div><b>Texto oficial</b><span class="small muted">Anexo del Acuerdo 28/11/25, DOF 18 nov 2025</span></div><button type="button" class="btn" id="artx">Cerrar</button></div><div id="artb"></div></dialog>\n<div id="tip" role="tooltip"></div>')

# Autodiagnostico oculto
sub("""['evidencia','Evidencia','search'],['autodiagnostico','Autodiagnóstico','gauge'],['fuentes','Fuentes','library']];""",
    """['evidencia','Evidencia','search'],['fuentes','Fuentes','library']];""")
sub("""const TABS=[['resumen','Resumen','file-text'],""", """/* Autodiagnóstico oculto: para reactivarlo, agregar su pestaña aquí y descomentar renderAuto() al final. */
const TABS=[['resumen','Resumen del Acuerdo','file-text'],""")
sub("renderResumen();renderActores();renderProcesos();renderSub();renderEv();renderAuto();renderFuentes();route();",
    "renderResumen();renderActores();renderProcesos();renderSub();renderEv();/* renderAuto(); */renderFuentes();route();\n$('main').addEventListener('click',e=>{const b=e.target.closest('.art[data-art]');if(b)openArt(b.dataset.art)});\n$('#artx').addEventListener('click',()=>$('#artd').close());")
sub('<section class="view" id="autodiagnostico" hidden></section>', '<section class="view" id="autodiagnostico" hidden aria-hidden="true"></section>')
sub("Acuerdo 28/11/25 · equipo consultor · noviembre 2026", "Acuerdo 28/11/25 · noviembre 2026")

# Actores
sub("""<div class="lead"><h2>¿Quién hace qué?</h2><p>Selecciona una figura. Las líneas y los números muestran con quién se relaciona.</p></div>""",
    """<div class="lead"><h2>¿Quién hace qué?</h2><p>Selecciona una figura. Las líneas y los números muestran con quién se relaciona.</p></div>
 <div class="origin"><span>${ic('stamp')}<b>Acuerdo 28/11/25:</b> definiciones, funciones y citas.</span><span>${ic('network')}<b>Síntesis del equipo:</b> relaciones del mapa, a partir del Acuerdo.</span><span>${ic('search')}<b>Investigación:</b> recuadro marcado aparte. No es del Acuerdo.</span></div>
 ${HOWTO}""")
sub("""<b>8</b><span>figuras son "Actores" en el art. 4 I: 6 escolares y 2 laborales</span>""", """<b>8</b><span>figuras son "Actores" para el Acuerdo: 6 escolares y 2 laborales</span>${art('4 I')}""")
sub("""<b>2</b><span>partes firmantes fuera de esa lista: estudiante y familia</span>""", """<b>2</b><span>firman el convenio sin estar en esa lista: estudiante y familia</span>${art('4 XI')}""")
sub("""<b>15</b><span>asientos máximos con voto en el Comité: 11 más hasta 4 empresariales</span>""", """<b>15</b><span>asientos máximos con voto en el Comité Directivo</span>${art('19')}""")
sub("""let sel='vin';""", """const AS={sems:'La autoridad federal: aprueba, interpreta y administra el sistema.',cosac:'Coordina lo académico de la educación dual dentro de la SEMS.',comite:'Mesa nacional de autoridades y sector productivo que orienta el modelo.',tsub:'Dirige la institución que agrupa a los planteles.',red:'Coordina la opción dual en todo el Subsistema.',form:'El Subsistema cuando capacita a quienes operan el modelo.',dir:'Dirige el plantel y responde por la operación dual.',vin:'El puente entre la escuela y las empresas.',doc:'Profesor o profesora de la escuela.',fac:'Docente que acompaña lo académico, en escuela y plataforma.',tut:'Docente que sigue al estudiante mientras está en el espacio laboral.',est:'Quien cursa la opción dual. Es estudiante, inscrito en su escuela.',fam:'Autoriza y firma cuando el estudiante es menor de edad.',rep:'Quien firma a nombre de la empresa o institución.',ges:'Persona de la empresa que coordina la dual por dentro.',ins:'Persona de la empresa que enseña en el puesto de trabajo.',ose:'Cámaras y asociaciones que acercan a sus empresas.',con:'Organismo nacional que certifica competencias laborales.',iec:'Entidades acreditadas que evalúan y certifican personas.',int:'Gobiernos y organismos de otros países que colaboran con la SEMS.'};
let sel='vin';""")
sub("""<div><div class="lab">Qué le toca</div>""", """<p class="plain">${AS[a.id]}</p>
  <div><div class="lab">${ic('stamp')} Qué le toca, según el Acuerdo</div>""")
sub("""<div><div class="lab">Relaciones</div>""", """<div><div class="lab">${ic('network')} Relaciones, síntesis del equipo</div>""")
sub("""${a.e?`<div class="note">${ic('search')}<span>${a.e[0]} ${src(a.e[1])}</span></div>`:''}""", """${a.e?`<div class="note ev">${ic('search')}<span><b>Investigación, no es del Acuerdo.</b> ${a.e[0]} ${src(a.e[1])}</span></div>`:''}""")
sub("k:'Actor, art. 4 I'", "k:'Actor según el Acuerdo'")
sub("['ges','Designa operación']", "['ges','La empresa lo selecciona']")
sub("""${art('1')}""", """${art('1')}""")

# Subsistemas: quitar nota sobre PDF
sub(" Oferta educativa en PDF no disponible para nuestra lectura.", "")
sub("""<p class="small" style="margin-top:9px"><b>88 % está fuera""", """<p class="small" style="margin-top:9px"><b>88 % está fuera""")

# Fuentes
block("""<div class="card"><h3>${ic('triangle-alert')}No pudimos revisar</h3>""", """`;
}

/* ---------- Tooltip""", "")
sub("""const ord=['A','SG22','MAN','PT','BB','D25','D26','HM24','ZT20','ES24','MM21','AP24','C18','DR','D23','RZ'];""",
    """const ord=['A','PT','MAN','SG22','BB','D25','D26','HM24','HM26','HR26','HC25','HF22','AR24','ES24','ES25','ES26','GG23','CA25','RC26','JE26','PV25','ZT20','MM21','AP24','C18','DR','D23','OA','RZ'];""")
sub("""<p>Cada dato de esta página sale de aquí. Indicamos qué se leyó y qué cautela aplica.</p>""", """<p>Documentos usados en esta página y grado de lectura. El corpus bibliométrico completo está en Evidencia.</p>""")
sub(""" MM21:{l:""", """ HM26:{l:'Hernández y Marsán 2026',t:'Artículo revisado por pares',st:'Solo resumen',i:'book-open-check',r:'Hernández-Fernández, J. y Marsán, E. (2026). Dual Apprenticeships in Mexico: Insights Into the First Employment. International Journal for Research in Vocational Education and Training, 13(1).',u:'https://doi.org/10.13152/ijrvet.13.1.1',n:'307 graduados. Modelo probit.'},
 HR26:{l:'Hernández et al. 2026',t:'Artículo revisado por pares',st:'Solo resumen',i:'book-open-check',r:'Hernández-Fernández, J., Razo, A. y Zúñiga-Herrera, M. (2026). Navigating Gender in Dual Education. International Journal of Training and Development.',u:'https://doi.org/10.1111/ijtd.70027',n:'60 aprendices.'},
 HC25:{l:'Hernández et al. 2025',t:'Capítulo de libro',st:'Solo resumen',i:'book-open-check',r:'Hernández-Fernández, J., Cervantes-Gómez, J. A., Marsán, E. y Aramburu Cano, V. (2025). Reasons to join the dual apprenticeship programme in Mexico. Routledge.',u:'https://doi.org/10.4324/9781003589303-8'},
 HF22:{l:'Hernández et al. 2022',t:'Artículo revisado por pares',st:'Solo resumen',i:'book-open-check',r:'Hernández-Fernández, J., Fontdevila, C. y Marsán, E. (2022). Post-dual training transitions in Mexico: apprentices’ strategies during the Covid-19 lockdown. Profesorado.',u:'https://doi.org/10.30827/profesorado.v26i3.23542',n:'52 aprendices.'},
 AR24:{l:'Aramburu et al. 2024',t:'Artículo revisado por pares',st:'Solo resumen',i:'book-open-check',r:'Aramburu Cano, V., Fuentes Castro, H. J. y Cervantes-Gómez, J. A. (2024). Third time is the charm? Adoption and recontextualisation of the German dual model in Mexico. Cogent Education.',u:'https://doi.org/10.1080/2331186x.2024.2432104',n:'40 entrevistas.'},
 ES25:{l:'Espinal 2025',t:'Artículo revisado por pares',st:'Solo resumen',i:'book-open-check',r:'Espinal Betanzo, J. A. (2025). Formación dual en México: factores críticos en su funcionamiento. Papeles.',u:'https://doi.org/10.54104/papeles.v17n34.2195'},
 ES26:{l:'Espinal 2026',t:'Artículo revisado por pares',st:'Solo resumen',i:'book-open-check',r:'Espinal Betanzo, J. A. (2026). Estereotipos de género en la formación dual. Revista Interdisciplinaria de Estudios de Género de El Colegio de México.',u:'https://doi.org/10.24201/reg.v12i1.1333'},
 GG23:{l:'García y Gutiérrez 2023',t:'Artículo revisado por pares',st:'Solo resumen',i:'book-open-check',r:'García Fuentes, P. y Gutiérrez Huerter O, G. (2023). El Modelo Mexicano de Formación Dual y la Educación Media Superior en el Estado de Hidalgo, México. Revista Latinoamericana de Estudios Educativos, 53(1), 339-368.',u:'https://doi.org/10.48102/rlee.2023.53.1.537',n:'CBTIS, DGETI.'},
 CA25:{l:'Calderón et al. 2025',t:'Artículo',st:'Solo resumen',i:'book-open-check',r:'Calderón-Juárez, Y. V., Cruz-Cruz, Y. y Terán-Treviño, S. A. (2025). Del aula a la industria: la educación dual, un nuevo reto educativo en el bachillerato tecnológico de México. Revista Mexicana de Investigación e Intervención Educativa.',u:'https://doi.org/10.62697/rmiie.v4i3.232',n:'CETIS 71, DGETI.'},
 RC26:{l:'Rodríguez-Cuellar et al. 2026',t:'Artículo',st:'Solo resumen',i:'book-open-check',r:'Rodríguez-Cuellar, J. A., Reyes-Matamoros, J., Ibarra-Cantún, D. y Marín-Castro, M. A. (2026). La Educación Dual y las Brigadas de Educación para el desarrollo rural como estrategias de innovación educativa en Puebla. Dilemas Contemporáneos.',u:'https://doi.org/10.46377/dilemas.v14i1.5002',n:'CBTA 305, DGETAyCM.'},
 JE26:{l:'Juárez-Edgar 2026',t:'Artículo',st:'Solo resumen',i:'book-open-check',r:'Juárez-Edgar, F. (2026). Educación dual en el nivel medio superior: contradicciones y retos ante la globalización. Revista Eduscientia.',u:'https://openalex.org/W7215258010'},
 PV25:{l:'Pilz y Vogelsang 2025',t:'Artículo revisado por pares',st:'Solo resumen',i:'book-open-check',r:'Pilz, M. y Vogelsang, B. (2025). Co-Operation Between Actors in Dual Training Programmes: Conditions for Success in the Mexican Tourism Sector. International Journal for Research in Vocational Education and Training, 12(3).',u:'https://doi.org/10.13152/ijrvet.12.3.4',n:'70 entrevistas.'},
 OA:{l:'OpenAlex',t:'Base bibliográfica abierta',st:'Consulta del 4 nov 2026',i:'database',r:'OpenAlex. Consulta por título y resumen con 10 búsquedas sobre formación dual, educación dual, modelo dual y dual training en México, 2013 a 2026.',u:'https://openalex.org/'},
 MM21:{l:""")

# CSS
sub("/* Actores */", """.art{border:0;cursor:pointer;text-decoration:underline dotted;text-underline-offset:2px}
.art:hover{background:var(--ink);color:var(--surface)}
.demo{font:500 11.5px var(--mono);background:var(--surface2);padding:1px 6px;border-radius:4px;white-space:nowrap}
.howto{display:flex;gap:9px;align-items:flex-start;padding:10px 13px;border-radius:8px;border:1px dashed var(--ink2);font-size:13.5px}
.facts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px 22px}
.rules{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
.rules .tile b{font-size:24px}
.rules .tile small{font-size:12.5px;color:var(--ink2)}
.rules .tile{gap:4px}
.rules .tile>span:last-child{margin-top:auto;padding-top:4px}
.asks{border-top:4px solid var(--g);padding:14px}
.plat{display:grid;grid-template-columns:minmax(0,1fr) 200px;gap:18px}
.platd{display:flex;flex-direction:column;gap:8px}
.platn{display:flex;flex-direction:column;gap:8px}
.platn .tile{padding:9px 12px}
.platn .tile b{font-size:22px}
.platd .pills{align-items:center}
.small-op{font-size:18px}
.flow{display:flex;flex-wrap:wrap;gap:6px}
.flow span{display:flex;align-items:center;gap:6px;font-size:13px;padding:5px 9px;background:var(--surface2);border-radius:7px}
.flow em{font:600 11px var(--mono);font-style:normal;color:var(--ink2)}
a.go{font-size:12.5px;font-weight:600;display:flex;align-items:center;gap:5px;margin-top:auto;text-decoration:none}
a.go:hover{text-decoration:underline}
.origin{display:flex;flex-wrap:wrap;gap:8px 18px;font-size:13px}
.origin span{display:flex;gap:6px;align-items:center}
.plain{font-size:15px;font-weight:500}
.lab .ic{width:1.1em;height:1.1em;vertical-align:-.2em}
.note.ev{background:color-mix(in srgb,var(--s-b) 12%,var(--surface))}
.glos{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
.glos>div{display:flex;flex-direction:column;gap:3px;font-size:13.3px}
.glos b{font-size:14px}
.glos .ic{color:var(--ink2)}
.sblock{display:flex;flex-direction:column;gap:5px}
.sblock .lab{margin:7px 0 0}
.sblock .lab:first-child{margin-top:0}
.sttl{font-size:21px;margin:0}
.sblock .chips{margin-top:7px}
.sblock .note{margin-top:9px}
.how{margin:0;padding-left:20px;display:flex;flex-direction:column;gap:7px;font-size:14.5px}
.prisma{display:flex;align-items:stretch;gap:8px;flex-wrap:wrap}
.prisma>.ic{align-self:center;color:var(--ink2)}
.prisma>div{flex:1 1 150px;background:var(--surface2);border-radius:8px;padding:10px 12px;display:flex;flex-direction:column;gap:2px}
.prisma b{font:700 25px var(--display)}
.prisma span{font-size:12.8px;color:var(--ink2)}
.prisma .hi{background:color-mix(in srgb,var(--s-b) 16%,var(--surface))}
.bar.wide{grid-template-columns:150px 1fr 26px}
.bar.wide2{grid-template-columns:185px 1fr 26px}
.xb{display:grid;grid-template-columns:90px 22px;gap:6px;align-items:center}
.xb i{display:block;height:11px;background:var(--s-a);border-radius:0 3px 3px 0;min-width:1px;max-width:90px}
.xb.e i{background:var(--s-b)}
.xt .status{font-size:12px;padding:1px 8px;white-space:nowrap}
.tops{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:8px;font-size:13.3px}
.tops li{display:grid;grid-template-columns:32px 1fr;gap:6px}
.tops b{font:700 17px var(--display)}
dialog#artd{border:1px solid var(--line);border-radius:12px;background:var(--surface);color:var(--ink);padding:18px;width:min(640px,calc(100vw - 32px));max-height:80vh}
dialog#artd::backdrop{background:rgba(10,15,22,.55)}
.dh{display:flex;justify-content:space-between;gap:12px;align-items:flex-start;margin-bottom:12px}
.dh>div{display:flex;flex-direction:column}
#artb{display:flex;flex-direction:column;gap:7px}
#artb blockquote{margin:0;padding:9px 12px;background:var(--surface2);border-radius:7px;font-size:14px}

/* Actores */""")
sub("""  .stepd,.grid3,.grid4{grid-template-columns:repeat(2,minmax(0,1fr))}""", """  .stepd,.grid3,.grid4,.rules,.glos,.facts{grid-template-columns:repeat(2,minmax(0,1fr))}
  .plat{grid-template-columns:1fr}""")
sub("""  .grid2,.grid3,.grid4,.stepd,.ways,.nvp,.mid{grid-template-columns:1fr}""", """  .grid2,.grid3,.grid4,.stepd,.ways,.nvp,.mid,.facts{grid-template-columns:1fr}""")
sub(".stepd{display:grid;grid-template-columns:1.3fr 1fr 1fr;gap:16px}", ".stepd{display:grid;grid-template-columns:1.15fr 1fr 1fr;gap:22px}")
open(p, 'w', encoding='utf-8', newline='\n').write(h)
print('ok', len(h))
