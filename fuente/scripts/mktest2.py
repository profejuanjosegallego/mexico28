import sys
h = open(sys.argv[1], encoding='utf-8').read()
t = r"""<script>
window.addEventListener('load',()=>{const L=[];const ok=(n,c)=>L.push((c?'ok ':'FAIL ')+n);
try{
 ok('sin pestana auto',!$$('#tabs a').some(a=>a.dataset.t==='autodiagnostico'));
 ok('seccion auto vacia',$('#autodiagnostico').innerHTML==='');
 ok('resumen sin literatura',!/Díaz|Hernández|Espinal|Zamora|Covarrubias|bibliom/.test($('#resumen').textContent));
 ok('resumen sin 31 articulos',!$('#resumen').textContent.includes('31 artículos'));
 ok('fuentes sin no revisado',!$('#fuentes').textContent.includes('No pudimos'));
 ok('bibliometrico',$('#evidencia').textContent.includes('Estudio bibliométrico'));
 const chip=$('#actores .art[data-art="4 LX"]');
 $('.node[data-id="tut"]').click();ok('panel tutor',$('#apanel').textContent.includes('Docente que sigue'));
 $('#apanel .art[data-art="4 LX"]').click();ok('dialogo abre',$('#artd').open);ok('texto LX',$('#artb').textContent.includes('Docente responsable del registro'));ok('romano 60',$('#artb').textContent.includes('equivale a 60'));$('#artx').click();ok('cierra',!$('#artd').open);
 const refs=['1 a 4','30 y 31','22 a 29','14 VI','5 VIII-X','4 XXXVI, LX','11 VII, 14 XII','18 a 21','8 III'];
 refs.forEach(r=>{openArt(r);ok('cita '+r,$('#artb').textContent.length>40&&!$('#artb').textContent.includes('undefined'));$('#artd').close()});
 const all=$$('.art[data-art]').map(b=>b.dataset.art);let bad=[];[...new Set(all)].forEach(r=>{openArt(r);const t=$('#artb').textContent;if(t.length<30||t.includes('undefined'))bad.push(r);$('#artd').close()});ok('todas las citas ('+new Set(all).size+') '+bad.join(';'),bad.length===0);
 $('.step[data-i="5"]').click();ok('paso explicado',$('#stepd').textContent.includes('Qué es')&&$('#stepd').textContent.includes('Cómo se hace'));
 const m=$('#h-m');m.value=70;m.dispatchEvent(new Event('input'));ok('bloqueo 75',$('#h-out').textContent.includes('No alcanza'));
 $('#lens button[data-k="c"]').click();ok('lente',$('#sbt th.hl').textContent.includes('Comité'));
 $('#tf button[data-k="sub"]').click();ok('filtro hallazgos',$$('#tens .ten').length===4);
 $('#cf button[data-k="all"]').click();ok('corpus 79',$$('#cft tbody tr').length===79);
 $('#cf button[data-k="E"]').click();ok('corpus EMS 20',$$('#cft tbody tr').length===20);
}catch(e){L.push('ERR '+e.message+' '+e.stack)}
document.documentElement.setAttribute('data-r',L.join('|'));});
window.addEventListener('error',e=>document.documentElement.setAttribute('data-e',e.message));
</script></body>"""
open(sys.argv[2], 'w', encoding='utf-8').write(h.replace('</body>', t))
