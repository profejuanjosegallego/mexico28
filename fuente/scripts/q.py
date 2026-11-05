import json,sys,io
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
b=json.load(open(sys.argv[1]+'/biblio/bib.json',encoding='utf-8'))
print([ (y['y'],y['E'],y['S'],y['M'],y['C']) for y in b['years']])
print(b['instE'],b['eNoInst'],b['thE'],b['th'])
print(sum(1 for d in b['doc'] if d['c']==0), max(y['E']+y['S']+y['M']+y['C'] for y in b['years']))
r={x['id']:x for x in json.load(open(sys.argv[1]+'/biblio/raw.json',encoding='utf-8'))['rows']}
print(r['W2802112566']['a'],r['W4404760385']['y'])
