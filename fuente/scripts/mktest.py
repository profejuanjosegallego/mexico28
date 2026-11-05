import sys
h = open(sys.argv[1], encoding='utf-8').read()
t = r"""<script>
window.addEventListener('load',()=>{const L=[];const ok=(n,c)=>L.push((c?'ok ':'FAIL ')+n);
try{
 $('.node[data-id="tut"]').click();ok('actor panel',$('#apanel h3').textContent.includes('Tutor'));ok('num en nodo',$('.node[data-id="ins"] .relnum')!==null);
 $('.step[data-i="5"]').click();ok('paso',$('#stepd h3').textContent.includes('Aprendizaje'));
 const m=$('#h-m');m.value=70;m.dispatchEvent(new Event('input'));ok('bloqueo 75',$('#h-out').textContent.includes('No alcanza'));
 m.value=90;m.dispatchEvent(new Event('input'));$('#h-x').checked=true;$('#h-x').dispatchEvent(new Event('input'));ok('30h',$('#h-out').textContent.includes('30 h'));
 const t=$('#c-t');t.value='48';t.dispatchEvent(new Event('input'));ok('opcion 3 anos',[...$('#c-a').options].some(o=>o.value==='36'));ok('cubierto',$('#c-out').textContent.includes('cubierto'));
 $('#lens button[data-k="c"]').click();ok('lente',$('#sbt th.hl').textContent.includes('Comité'));
 $('#tf button[data-k="sub"]').click();ok('filtro 2',$$('#tens .ten').length===2);
 $('#prof button[data-k="emp"]').click();ok('perfil',$('#qs').textContent.includes('Seguro médico ampliado'));
 $('#q-emp-0-n').click();ok('borra ejemplo',$('#res').textContent.includes('1 de 19'));ok('critico',$('#res').textContent.includes('Atender primero'));
 $('#ex').click();ok('ejemplo',$('#res').textContent.includes('Resultado de ejemplo'));$('#clr').click();ok('limpiar',$('#res').textContent.includes('0 de 19'));
}catch(e){L.push('ERR '+e.message)}
document.documentElement.setAttribute('data-r',L.join('|'));});
window.addEventListener('error',e=>document.documentElement.setAttribute('data-e',e.message));
</script></body>"""
open(sys.argv[2], 'w', encoding='utf-8').write(h.replace('</body>', t))
