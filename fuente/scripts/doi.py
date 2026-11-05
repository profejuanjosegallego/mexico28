import json,urllib.request,urllib.parse,sys,io
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
D=['10.22201/iisue.20072872e.2020.31.705','10.48102/rlee.2023.53.1.537','10.1111/ijtd.12279','10.1111/ijtd.12217','10.3112/erdkunde.2021.04.03','10.1007/978-3-658-43742-8_7','10.30972/riie.16248911','10.37811/cl_rcm.v8i5.13586','10.37811/cl_rcm.v5i6.1228']
raw=json.load(open(sys.argv[1],encoding='utf-8'))['rows']; have={(r['doi'] or '').lower().replace('https://doi.org/',''):r['id'] for r in raw}
for d in D:
    print(d,'EN CONSULTA' if d.lower() in have else 'no recuperado')
    if d.lower() in have: continue
    try:
        u='https://api.openalex.org/works/doi:'+urllib.parse.quote(d)+'?select=id,title,publication_year,type,cited_by_count,primary_location'
        w=json.load(urllib.request.urlopen(urllib.request.Request(u,headers={'User-Agent':'bibliometric-review-client'}),timeout=30))
        print('   ',w['id'].split('/')[-1],w['publication_year'],w['type'],w['cited_by_count'],(w.get('primary_location') or {}).get('source',{}) and (w['primary_location']['source'] or {}).get('display_name'),'|',w['title'][:90])
    except Exception as e: print('    sin registro',str(e)[:60])
