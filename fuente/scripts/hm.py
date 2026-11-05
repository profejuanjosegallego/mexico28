import json,urllib.request,urllib.parse,sys,io
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
for t in ['Satisfacción y percepción de mejoras de las y los graduados del Modelo Mexicano de Formación Dual']:
    u='https://api.openalex.org/works?'+urllib.parse.urlencode({'search':t,'per-page':3,'select':'id,title,publication_year,cited_by_count,primary_location'})
    d=json.load(urllib.request.urlopen(urllib.request.Request(u,headers={'User-Agent':'bibliometric-review-client'}),timeout=30))
    for w in d['results']: print(w['id'].split('/')[-1],w['publication_year'],w['cited_by_count'],w['title'][:90])
