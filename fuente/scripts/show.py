import json,sys,io
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
r=json.load(open(sys.argv[1],encoding='utf-8'))['rows']
r.sort(key=lambda x:(x['y'] or 0,x['t']))
for i,w in enumerate(r):
    print(f"{w['id']}|{w['y']}|{w['ty']}|{w['c']}|{(w['v'] or '-')[:38]}|{w['t'][:105]}|{w['ab'][:150].replace(chr(10),' ')}")
