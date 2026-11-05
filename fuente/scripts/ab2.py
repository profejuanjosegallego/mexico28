import json,sys,io
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
r={x['id']:x for x in json.load(open(sys.argv[1],encoding='utf-8'))['rows']}
for i in "W2999192480 W2915825817 W3013349588 W4411846074 W4416006533 W7126152719 W4413924231 W4415733969 W7215258010 W4310295212 W4412189381 W7122796381 W7128774301 W4313561203 W7171443465 W7204865849 W4404760385 W7125681945 W7128059847 W4411516042 W4309700915 W4404677098".split():
    x=r[i]; print(i,x['a'][:4],x['v'],x['doi']); print('  ',x['ab'][:1500]); print()
