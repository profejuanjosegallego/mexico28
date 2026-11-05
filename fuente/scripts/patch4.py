p='src.html'; h=open(p,encoding='utf-8').read()
def R(a,b,n=1):
    global h
    assert h.count(a)==n,(a,h.count(a))
    h=h.replace(a,b)
R("'Colegios de Estudios Científicos y Tecnológicos'","'Colegios de Estudios Científicos y Tecnológicos de los Estados'",2)
a="['RFC','Registro Federal de Contribuyentes'],['SEP','Secretaría de Educación Pública']];"
b="""['RFC','Registro Federal de Contribuyentes'],['SEP','Secretaría de Educación Pública'],
 ['AMEXCID','Agencia Mexicana de Cooperación Internacional para el Desarrollo'],['BIBB','Instituto Federal de Formación Profesional de Alemania'],['COMIE','Consejo Mexicano de Investigación Educativa'],['GIZ','Agencia Alemana de Cooperación Internacional'],['ODES','Organismos Descentralizados de los Estados'],['STEM','Ciencia, Tecnología, Ingeniería y Matemáticas'],['TIC','Tecnologías de la Información y la Comunicación'],
 ...DIR.slice(0,5)].sort((a,b)=>a[0].localeCompare(b[0],'es'));"""
R(a,b)
R('${ic(\'book-open-check\')}Ver todas las siglas de esta página</summary><dl class="sig cols">',
  '${ic(\'book-open-check\')}Ver todas las siglas</summary><p class="small muted" style="margin:8px 0 2px">En toda la página, las siglas subrayadas muestran su significado al pasar el cursor o tocarlas.</p><dl class="sig cols">')
js=open('scripts/p4_siglas.js',encoding='utf-8').read()
a="$('#artx').addEventListener('click',()=>$('#artd').close());\n"
R(a,a+js)
R("if(document.fonts&&document.fonts.ready)document.fonts.ready.then(drawLinks);","drawLinks();\nif(document.fonts&&document.fonts.ready)document.fonts.ready.then(drawLinks);")
css="""abbr.sg{text-decoration:underline dotted color-mix(in srgb,currentColor 55%,transparent);text-underline-offset:3px;cursor:help}
abbr.sg:focus-visible{outline:2px solid var(--g-esc);outline-offset:2px;border-radius:2px}
.sgx{font-weight:400;color:var(--ink2)}
#sgtip{position:fixed;z-index:1000;max-width:min(320px,calc(100vw - 16px));padding:7px 10px;border:1px solid var(--line);border-radius:8px;background:var(--surface);color:var(--ink);font:400 13px/1.4 var(--body);box-shadow:0 6px 18px rgba(0,0,0,.18);pointer-events:none}
#sgtip[hidden]{display:none}
#sgtip b{font-weight:600}
"""
R("</style>",css+"</style>")
open(p,'w',encoding='utf-8',newline='\n').write(h)
