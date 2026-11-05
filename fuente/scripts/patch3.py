import re
p='src.html'; h=open(p,encoding='utf-8').read()
def between(h,a,b,new):
    i=h.index(a); j=h.index(b,i); return h[:i]+new+h[j:]
def rep(h,a,b):
    assert h.count(a)>=1,a[:60]; return h.replace(a,b)
R=lambda n:open('scripts/'+n,encoding='utf-8').read()
h=between(h,"const CHAP=[","/* ---------- 2. Actores",R('p3_resumen.js'))
h=between(h,"const SB=[","/* ---------- 5. Evidencia",R('p3_sub.js'))
i=h.index(' <div class="grid2">\n  <div class="card"><h3>${ic(\'timer\')}Calculadora de horas')
j=h.index(' $(\'.phases\').addEventListener')
h=h[:i]+R('p3_tools.js')+h[j:]
# fechas
h=rep(h,'Acuerdo 28/11/25 · noviembre 2026','Acuerdo 28/11/25 · fecha de análisis: 1 nov 2026')
h=rep(h,'Cifras del portal consultadas el 4 de noviembre de 2026.','Fecha de análisis: 1 de noviembre de 2026.')
h=rep(h,"st:'Consulta del 4 nov 2026'","st:'Fecha de análisis: 1 nov 2026'")
h=rep(h,"Registro Empresas Dual. Consultado el 4 de noviembre de 2026.","Registro Empresas Dual. Fecha de análisis: 1 de noviembre de 2026.")
# fuentes
h=rep(h," BB:{l:'CONALEP 2026'"," BE:{l:'Convocatoria de beca 2023',t:'Documento oficial, marco anterior',st:'Texto completo',i:'stamp',r:'SEP-SEMS (2023). Convocatoria 2023. Beca de Estímulo para Educación Dual. Programa de Becas Elisa Acuña.',u:'https://dgetaycm.sep.gob.mx/storage/recursos/2023/02/KpbulUJxm8-Anexo%202%20Conv.%20ED.pdf',n:'Previa al Acuerdo 28/11/25. Se cita porque exige estar activo en la Plataforma Académica.'},\n BB:{l:'CONALEP 2026'")
h=rep(h,"const ord=['A','PT','MAN','SG22',","const ord=['A','PT','MAN','BE','SG22',")
# calculadora
h=rep(h,"""<div class="note" style="margin-top:12px">${ic('circle-x')}<span><b>No alcanza el mínimo.</b> Se requiere al menos 75 % de la matriz. ${art('14 VI')}</span></div>`;return}""","""<div class="note">${ic('circle-x')}<span><b>No alcanza el mínimo.</b> Con ${mat} % esta empresa no puede participar: se requiere al menos 75 % de la matriz. ${art('14 VI')}</span></div>`;return}""")
h=rep(h,"""o.innerHTML=`<div class="week">""","""const say=r.years.map((h,i)=>`${r.years.length>1?`año ${i+1}: `:''}${h} horas, ${dayN(h)} días por semana`).join('; ');
 const hint=r.up?'Se aplica la carga máxima porque la empresa es madura y supera el 75 %.':mad?'Para la carga máxima no basta el 75 % exacto: el Acuerdo pide más de 75 %.':mat>75?'Se aplica la carga base. Las horas máximas también exigen empresa madura o institución equiparada.':'Se aplica la carga base. Las horas máximas piden más de 75 % y empresa madura o institución equiparada.';
 o.innerHTML=`<p class="res"><b>Resultado.</b> ${say[0].toUpperCase()+say.slice(1)}.</p><p class="small muted">${hint} ${art('8 III')}</p><div class="week">""")
h=rep(h,"""<span>${r.up?'Carga máxima habilitada':'Carga base'}</span></div>""","""<span>${r.up?'Carga máxima':'Carga base'}</span></div>""")
h=rep(h,"""<p class="small muted" style="margin-top:5px">Después de formación: 1 h de Plataforma Académica y 1 h de comida. ${art('8')}</p>`;""","""<p class="small muted" style="margin-top:5px">Las 6 h cuentan como horas de formación. La hora de Plataforma Académica y la de comida son adicionales. El Acuerdo no fija qué días de la semana: los de la gráfica son ilustrativos. ${art('8')}</p>`;""")
# simulador
h=rep(h,"""const rows=[['Planificación',0,36,'--g-sub'],['Colaboración',0,cc,'--g-gob'],['Aprendizaje',st,Math.min(r.end,cc),'--g-esc']];""","""const rows=[['Planificación',0,36,'--g-sub'],['Colaboración',0,cc,'--g-gob'],['Aprendizaje',st,Math.min(r.end,cc),'--g-esc']],last=cc-ca,yr=n=>n===12?'1 año':(n/12)+' años';""")
h=rep(h,"""font-size="11" text-anchor="middle" opacity=".75">${m/12} a</text>""","""font-size="11" text-anchor="middle" opacity=".75">${yr(m)}</text>""")
h=rep(h,"""$('#c-out').innerHTML=`<figure class="fig" style="margin-top:10px">""","""const say=r.ok?`El aprendizaje termina en el mes ${r.end} y la colaboración vence en el mes ${cc}. Queda cubierto.`:`El aprendizaje terminaría en el mes ${r.end}, pero la colaboración vence en el mes ${cc}. Para quedar cubierto debe iniciar a más tardar en el mes ${last}, o renovarse la colaboración.`;
 $('#c-out').innerHTML=`<p class="res"><b>Resultado.</b> ${say}</p><figure class="fig" style="margin-top:10px">""")
h=rep(h,"""<p class="small muted" style="margin-top:8px">${art('10')} ${art('22')} ${art('26')} ${art('29')} El Acuerdo no detalla la renovación. Confirmar con la SEMS.</p>`;""","""<div class="legendline" style="margin-top:8px"><span><i class="dot" style="--g:var(--g-sub)"></i>Planificación: 3 años</span><span><i class="dot" style="--g:var(--g-gob)"></i>Colaboración: ${yr(cc)}</span><span><i class="dot" style="--g:var(--g-esc)"></i>Aprendizaje: ${yr(ca)}</span></div>
 <p class="small muted" style="margin-top:8px">La planificación pide 3 años y la colaboración regular dura 2. El Acuerdo no detalla la renovación: confirmar con la SEMS. ${art('10')} ${art('22')} ${art('26')} ${art('29')}</p>`;""")
# CSS
css=r'''.rt{display:flex;gap:7px;align-items:flex-start;font:600 14px/1.25 var(--body);color:var(--ink);min-height:36px}
.rcit{margin-top:auto;padding-top:5px;display:flex;flex-wrap:wrap;gap:4px 8px}
.ob{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:7px;font-size:13.5px}
.ob li{padding-left:12px;border-left:2px solid var(--line);line-height:1.4}
.aud{display:grid;grid-template-columns:1.6fr 1fr 1fr;gap:12px;margin-top:10px}
.audc{background:var(--surface2);border-radius:8px;padding:12px 14px;display:flex;flex-direction:column;gap:6px}
.audc .lab{margin:0}
.sig{margin:0;display:flex;flex-direction:column;gap:5px}
.sig div{display:grid;grid-template-columns:82px minmax(0,1fr);gap:8px;font-size:13px;line-height:1.3}
.sig dt{font-weight:600}.sig dd{margin:0;color:var(--ink2)}
.sig.cols{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px 22px;margin-top:10px}
.more{margin-top:12px}
.more summary{cursor:pointer;font-weight:600;font-size:14px;display:flex;gap:7px;align-items:center}
.chapw{display:grid;grid-template-columns:290px minmax(0,1fr);gap:14px}
.chapw .chap{flex-direction:column;flex-wrap:nowrap}
.chapw .chap button{text-align:left;align-items:flex-start;width:100%}
.chapw .chap span{display:flex;flex-direction:column}
.chapw .chap small{font-weight:400;font-size:12.5px;opacity:.8}
.chapw .chapd{margin-top:0;gap:7px}
.chapd p{font-size:14.5px}.chapd .lab{margin-top:6px}
.chapd .ob li{border-left-color:var(--ink2)}
.pdia{display:flex;flex-direction:column;gap:10px;margin-top:10px}
.psys{display:flex;gap:12px;align-items:center;padding:12px 16px;border-radius:var(--r);background:var(--surface2);border:1px solid var(--line)}
.psys>.ic{width:28px;height:28px}
.psys div{display:flex;flex-direction:column;gap:2px}.psys b{font-family:var(--display);font-size:17px}
.ptwo{display:grid;grid-template-columns:minmax(0,1fr) 150px minmax(0,1fr);gap:10px;align-items:stretch}
.ptwo .fbox .lab{margin:0}
.ptwo .fbox .ob li{border-left-color:var(--g)}
.pbr{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:5px;padding:6px}
.pbr>.ic{width:28px;height:28px}
.who{display:flex;flex-direction:column;gap:8px}
.whor{display:grid;grid-template-columns:230px minmax(0,1fr) minmax(0,1fr);gap:14px;padding:11px 13px;border-radius:8px;background:var(--surface2);border-left:4px solid var(--g)}
.whon{display:flex;flex-direction:column;gap:3px;align-items:flex-start}
.lanes{display:flex;flex-direction:column;gap:8px}
.rlane{display:grid;grid-template-columns:170px minmax(0,1fr);gap:12px;padding:10px 12px;border-radius:8px;background:color-mix(in srgb,var(--g) 9%,var(--surface));border-left:4px solid var(--g)}
.rhead{display:flex;flex-direction:column;gap:2px}
.rsteps{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px}
.rsteps li{display:flex;flex-direction:column;gap:2px;background:var(--surface);border-radius:7px;padding:8px 10px}
.rsteps li b{font-size:13.5px;line-height:1.25}
.rsteps em{font:600 11.5px var(--mono);font-style:normal;color:var(--ink2)}
.guide{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin:10px 0 14px;padding:12px 14px;background:var(--surface2);border-radius:8px}
.guide.two{grid-template-columns:repeat(2,minmax(0,1fr))}
.guide .how{font-size:13.5px;margin:0;padding-left:18px}
.tgrid{display:grid;grid-template-columns:minmax(0,320px) minmax(0,1fr);gap:22px;align-items:start}
.ctrl.v{flex-direction:column;align-items:stretch}
.ctrl.v select{max-width:none;width:100%}.ctrl.v input[type=range]{width:100%}
.res{font-size:15px;margin-bottom:4px}
.ans{display:grid;grid-template-columns:96px minmax(0,1fr);gap:14px;align-items:center;margin-top:12px;padding:12px 14px;background:color-mix(in srgb,var(--g-sub) 11%,var(--surface));border-radius:8px}
.ansn{display:flex;flex-direction:column}.ansn b{font:700 32px/1 var(--display)}.ansn span{font-size:12.5px;color:var(--ink2)}
#sbt tr.off td:first-child{opacity:.62}
'''
h=rep(h,"@media (max-width:980px){",css+"@media (max-width:980px){\n  .aud,.tgrid,.guide,.guide.two,.chapw,.whor{grid-template-columns:1fr}\n  .chapw .chap{flex-direction:row;flex-wrap:wrap}\n  .chapw .chap button{width:auto}\n  .chapw .chap small{display:none}\n  .sig.cols{grid-template-columns:1fr}")
h=rep(h,"@media (max-width:720px){\n","@media (max-width:720px){\n  .ptwo,.rlane,.ans{grid-template-columns:1fr}\n  .pbr>.ic{transform:rotate(90deg)}\n")
open(p,'w',encoding='utf-8',newline='\n').write(h)
