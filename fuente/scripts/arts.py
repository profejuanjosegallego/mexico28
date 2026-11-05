import json, re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sp = sys.argv[1]
t = open(sp + '/acuerdo.txt', encoding='utf-8').read()
t = t[t.index('LINEAMIENTOS GENERALES PARA LA IMPARTICIÓN DEL TIPO MEDIO SUPERIOR MEDIANTE LA \nOPCIÓN DE EDUCACIÓN DUAL \nCAPÍTULO I'):]
lines = []
for l in t.split('\n'):
    s = l.strip()
    if s.startswith('=====PAGE') or 'DIARIO OFICIAL' in s or re.fullmatch(r'_+', s) or not s: continue
    if re.fullmatch(r'(CAPÍTULO [IVX]+|Sección [IVX]+|[A-ZÁÉÍÓÚÑ ,]{12,})', s): continue
    if re.match(r'^(De las? |Del? los |De los |Características$|Disposiciones)', s) and len(s) < 90 and not s.endswith('.') and not s.endswith(';'): continue
    lines.append(s)
ART = {}; cur = None; fr = None
SEQ = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI','XXII','XXIII','XXIV','XXV','XXVI','XXVII','XXVIII','XXIX','XXX','XXXI','XXXII','XXXIII','XXXIV','XXXV','XXXVI','XXXVII','XXXVIII','XXXIX','XL','XLI','XLII','XLIII','XLIV','XLV','XLVI','XLVII','XLVIII','XLIX','L','LI','LII','LIII','LIV','LV','LVI','LVII','LVIII','LIX','LX']
for s in lines:
    m = re.match(r'^Artículo (\d+)\s*\.\s*-\s*(.*)$', s)
    if m:
        cur = str(int(m.group(1))); ART[cur] = {'t': m.group(2), 'f': {}, 'o': []}; fr = None; continue
    if cur is None: continue
    m = re.match(r'^([IVXL]+)\.\s+(.*)$', s)
    if m:
        k = m.group(1); exp = SEQ[len(ART[cur]['o'])] if len(ART[cur]['o']) < len(SEQ) else None
        if k == exp:
            fr = k; ART[cur]['f'][k] = m.group(2); ART[cur]['o'].append(k); continue
    if fr: ART[cur]['f'][fr] += ' ' + s
    else: ART[cur]['t'] += ' ' + s
for a in ART.values():
    a['t'] = re.sub(r'\s+', ' ', a['t']).strip()
    a['f'] = {k: re.sub(r'\s+', ' ', v).strip() for k, v in a['f'].items()}
print(len(ART), {k: len(v['f']) for k, v in ART.items() if v['f']})
print(ART['4']['f']['LX'][:150]); print(ART['8']['t'][:120]); print(ART['31']['t'][:120])
json.dump(ART, open(sp + '/biblio/art.json', 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
