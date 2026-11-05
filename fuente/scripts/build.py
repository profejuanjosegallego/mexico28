import re,glob,os,sys,io
sp=sys.argv[1]; out=sys.argv[2]
sym=[]
for f in sorted(glob.glob(os.path.join(sp,'icons','*.svg'))):
    n=os.path.basename(f)[:-4]; t=open(f,encoding='utf-8').read()
    inner=re.search(r'<svg[^>]*>(.*)</svg>',t,re.S).group(1)
    inner=re.sub(r'\s*\n\s*','',inner)
    assert '<script' not in inner
    sym.append(f'<symbol id="ic-{n}" viewBox="0 0 24 24">{inner}</symbol>')
sprite='<svg width="0" height="0" style="position:absolute" aria-hidden="true"><!-- Iconos: Lucide, licencia ISC -->'+''.join(sym)+'</svg>'
h=open(os.path.join(sp,'src.html'),encoding='utf-8').read().replace('<!--SPRITE-->',sprite)
used=set(re.findall(r"ic\('([a-z0-9-]+)'",h))|set(re.findall(r"i:'([a-z0-9-]+)'",h))
have={os.path.basename(f)[:-4] for f in glob.glob(os.path.join(sp,'icons','*.svg'))}
import json
def js(n):
    return open(os.path.join(sp,'biblio',n),encoding='utf-8').read().replace('</','<\/')
h=h.replace('/*ARTJSON*/null',js('art.json')).replace('/*BIBJSON*/null',js('bib.json'))
print('missing icons:',sorted(u for u in used-have))
open(out,'w',encoding='utf-8',newline='\n').write(h); print(len(h))
