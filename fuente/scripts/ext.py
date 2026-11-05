import sys,glob,os
from pypdf import PdfReader
out=sys.argv[2]
for f in sorted(glob.glob(os.path.join(sys.argv[1],'*.pdf'))):
    try:
        r=PdfReader(f)
        t='\n'.join(f'=====P{i+1}=====\n'+(p.extract_text() or '') for i,p in enumerate(r.pages))
        b=os.path.basename(f)[:-4]
        open(os.path.join(out,b+'.txt'),'w',encoding='utf-8').write(t)
        head=' '.join(t[:400].split())
        print(b,len(r.pages),len(t),'|',head[:220].encode('ascii','replace').decode())
    except Exception as e: print(f,'ERR',e)
