import json, re, sys, io, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sp = sys.argv[1]
raw = json.load(open(sp + '/biblio/raw.json', encoding='utf-8'))
R = {x['id']: x for x in raw['rows']}
# id: nivel, institucion nombrada en titulo o resumen, temas
# Nivel: E media superior, S superior, M sistema o mixto, C empresa y transferencia
C = {
'W750582641':('M','', 'tra gob'),'W2514726659':('S','TecNM','imp'),'W2480850347':('S','TecNM','imp ins'),'W2624137004':('M','','gob'),
'W2559230148':('S','TecNM','imp'),'W2789709987':('S','TecNM','imp'),'W4248985809':('C','','tra act'),'W7224068698':('S','TecNM','imp'),
'W2942435950':('S','TecNM','com eva'),'W2802112566':('C','','tra gob'),'W3004356329':('S','Universidad','imp'),'W2994917173':('S','TecNM','imp'),
'W2915825817':('M','','tra'),'W3034174907':('S','UT y UP','imp act'),'W2967836316':('S','','ins'),'W7216892080':('S','TecNM','gob'),
'W2916091140':('S','TecNM','imp'),'W2978965718':('S','UT y UP','imp'),'W2999906344':('S','Universidad','imp'),'W3008335123':('S','TecNM','imp gob'),
'W2972875669':('C','','tra act'),'W3013912306':('S','TecNM','imp'),'W3046871387':('C','','tra act'),'W7217605280':('S','TecNM','com gob'),
'W3033462146':('M','','ins'),'W3028007103':('C','','act tra'),'W3000217129':('C','','tra act'),'W3167855381':('S','TecNM','gob'),
'W3114353700':('S','Universidad','imp'),'W3106759021':('C','','tra act'),'W3016025482':('C','','tra act'),'W4210682438':('C','','act gob'),
'W3208714746':('M','','gob act'),'W4206485902':('S','Universidad','com'),'W4200328961':('S','Universidad','imp'),'W3158950516':('M','','tra'),
'W4286716069':('M','','gob tra'),'W4319287762':('C','','tra'),'W4310295212':('E','','est ins'),'W4309700915':('M','','act'),
'W4285141054':('C','','tra'),'W4404478727':('S','TecNM','imp'),'W4313561203':('E','DGETI','ins com act'),'W4391408826':('S','TecNM','com eva'),
'W7215637212':('S','','imp'),'W4366607556':('S','','imp'),'W7135268878':('M','','ins act'),'W4404677098':('E','','com ins'),
'W4393969932':('S','','imp'),'W4412748577':('S','TecNM','imp'),'W4403480274':('E','CONALEP','com ins'),'W4399377725':('M','','gob tra'),
'W4404754392':('S','TecNM','com act'),'W4406115462':('S','TecNM','imp'),'W4404760385':('E','','gob tra'),'W4391955870':('S','Universidad','imp'),
'W7112561589':('M','','tra'),'W7117122919':('S','TecNM','imp'),'W4414107044':('E','CONALEP','com est gob eva'),'W4411846074':('E','','tra gob'),
'W4411516042':('M','','gob act'),'W4413924231':('E','DGETI','imp gob'),'W4415733969':('E','','gob est act com'),'W7117887172':('S','UT y UP','ins'),
'W7128059847':('E','DGETI DGETAyCM','imp ins'),'W7215436039':('S','UT y UP','imp'),'W4412189381':('E','','est'),'W4416006533':('E','','gob tra'),
'W7117512356':('E','CONALEP','est'),'W7122796381':('E','','ins'),'W7215258010':('E','','gob com'),'W7125681945':('E','','gen com'),
'W7204865849':('E','DGETAyCM','gob'),'W7171941280':('S','','imp'),'W7128774301':('E','','gen est'),
}
# Complemento por bola de nieve: recuperados por DOI o sin registro en OpenAlex
extra = [
 {'id':'W3168733977','t':'The region matters—for whom? The regional actor network for vocational education and training in tourism of Cancún (Mexico)','y':2021,'c':13,'ty':'article','v':'International Journal of Training and Development','a':['Natascha Röhrer','Beke Vogelsang','Martina Fuchs'],'doi':'https://doi.org/10.1111/ijtd.12217','ab':'','code':('M','','gob')},
 {'id':'W4200249167','t':'Evaluación de la primera implementación del plan de rotación de puestos de aprendizaje en la Universidad Tecnológica de Puerto Peñasco desde la perspectiva del formador-empresario','y':2021,'c':1,'ty':'article','v':'Ciencia Latina Revista Científica Multidisciplinar','a':['Ramsés Everardo Moreno-Murrieta'],'doi':'https://doi.org/10.37811/cl_rcm.v5i6.1228','ab':'La Universidad Tecnológica de Puerto Peñasco realizó la primera implementación del Plan de Rotación de Puestos de Aprendizaje del Modelo de Formación Dual durante el período de alternancia escuela-empresa en el año 2019. Con el objetivo de evaluar esta implementación desde la perspectiva del formador-empresario, se analiza la vinculación entre empresa y universidad, el desempeño de los aprendices y de los beneficios adquiridos y otorgados por la empresa, para la determinación de la calidad de su participación en la etapa dual. Los formadores-empresarios consideran que la participación en la primera implementación fue satisfactoria, los aprendices reforzaron los conocimientos adquiridos en la universidad, y la empresa contribuyó al desarrollo de las competencias laborales de los estudiantes.','code':('S','UT y UP','imp act')},
 {'id':'HM24','t':'Satisfacción y percepción de mejoras de las y los graduados del Modelo Mexicano de Formación Dual','y':2024,'c':None,'ty':'article','v':'Revista Mexicana de Investigación Educativa','a':['Jimena Hernández Fernández','Erick Marsán'],'doi':None,'ab':'El Modelo Mexicano de Formación Dual (MMFD) combina educación en escuelas con formación en empresas. Este artículo explora la satisfacción con respecto a la empresa, escuela y el MMFD, así como la percepción de mejora en habilidades, competencias y conocimientos por parte de graduadas(os) del Colegio Nacional de Educación Profesional Tecnológica-MMFD en los estados de México y Coahuila. La información se recolectó mediante una encuesta donde participantes muestran niveles altos de satisfacción (en promedio 3.5 puntos en escala de 1 a 4). Sin embargo, los niveles de satisfacción son consistentemente más altos en la empresa que en la escuela (en promedio .09 puntos); y más altos en Coahuila que en el Estado de México (en promedio 0.7 puntos). Asimismo, el 60% de las y los participantes percibe que sus habilidades para el trabajo, interpersonales y de toma de decisiones mejoraron mucho, mientras que solo 26% considera que su conocimiento matemático mejoró.','code':('E','CONALEP','est com')},
 {'id':'C18','t':'El modelo de formación dual de Baja California: ¿una nueva forma de articulación entre educación y empleo?','y':2018,'c':None,'ty':'dissertation','v':'El Colegio de la Frontera Norte','a':['Lilia Guadalupe Covarrubias Astorga'],'doi':None,'ab':'La presente investigación realiza un estudio sobre los efectos de la implementación del modelo educativo de origen alemán, la formación dual, en las competencias de los alumnos y las prácticas organizacionales de las empresas participantes en las ciudades fronterizas de Tijuana y Mexicali, en el estado de Baja California. Se parte de la idea de que, al establecer un nuevo tipo de articulación educación-empleo, el modelo de formación dual crea nuevas dinámicas entre escuelas y empresas cuyos efectos son observados sobre las competencias que desarrollan los alumnos y las nuevas prácticas que adoptan las empresas participantes para la gestión de su personal.','code':('E','CONALEP CECyTE','com act')},
]
rows = []
for k, (lv, inst, th) in C.items():
    x = dict(R[k]); x['lv'] = lv; x['in'] = inst.split(' ') if inst and inst not in ('UT y UP',) else ([inst] if inst else []); x['th'] = th.split(); x['via'] = 'OA'
    rows.append(x)
for e in extra:
    x = dict(e); lv, inst, th = x.pop('code'); x['lv'] = lv; x['in'] = inst.split(' ') if inst and inst != 'UT y UP' else ([inst] if inst else []); x['th'] = th.split(); x['via'] = 'BN'
    rows.append(x)
rows.sort(key=lambda r: (r['y'], r['t']))
n = len(rows)
cnt = collections.Counter
by_year = cnt(r['y'] for r in rows); lv = cnt(r['lv'] for r in rows)
by_year_lv = {}
for r in rows:
    by_year_lv.setdefault(r['y'], collections.Counter())[r['lv']] += 1
inst_all = cnt(i for r in rows for i in r['in']); inst_E = cnt(i for r in rows if r['lv'] == 'E' for i in r['in'])
ty = cnt(r['ty'] for r in rows)
th_all = cnt(t for r in rows for t in r['th']); th_E = cnt(t for r in rows if r['lv'] == 'E' for t in r['th'])
ven = cnt((r.get('v') or 'Sin fuente') for r in rows)
top = sorted([r for r in rows if r.get('c')], key=lambda r: -r['c'])[:6]
nE = lv['E']; e_no_inst = sum(1 for r in rows if r['lv'] == 'E' and not r['in'])
print('n', n, 'niveles', dict(lv)); print('tipos', dict(ty)); print('inst EMS', dict(inst_E), 'sin nombrar', e_no_inst)
print('temas', dict(th_all)); print('temas EMS', dict(th_E)); print('fuentes', ven.most_common(6))
print('sin citas', sum(1 for r in rows if r.get('c') == 0), 'con c None', sum(1 for r in rows if r.get('c') is None))
print('EMS desde 2022', sum(1 for r in rows if r['lv']=='E' and r['y']>=2022), 'desde dic 2025 2026', sum(1 for r in rows if r['y']==2026))
print('2026 post acuerdo mencionan 28/11/25:', [r['t'][:60] for r in rows if re.search(r'28/11/25|2025.*lineamientos', (r.get('ab') or ''))])
# Cruce norma contra literatura: terminos en titulo + resumen
N = [
 ('Convenios', '22 a 29', r'convenio|agreement'),
 ('Matriz de correspondencia', '4 XXXVII', r'matriz de correspondencia|correspondence matrix'),
 ('Plan de rotación', '4 XLIV', r'plan(es)? de rotaci|rotaci[oó]n de puestos|rotation plan'),
 ('Instructores y tutores', '4 XXXVI, LX', r'instructor|tutor|formador|mentor|trainer'),
 ('Evaluación y certificación', '5 VIII-X', r'certificaci|certification|evaluaci[oó]n de (las )?competencias|conocer\b'),
 ('Becas y apoyo económico', '11 VII, 14 XII', r'\bbecas?\b|apoyo financiero|apoyo econ|stipend|scholarship'),
 ('Familias', '11 II', r'famili|padres|parents'),
 ('Igualdad y género', '5 XI, 12 XV', r'g[eé]nero|gender|mujeres|women|female'),
 ('Seguros y protección', '14 XI', r'\bseguros?\b|insurance|seguridad m[eé]dica|acoso|violencia|harassment'),
 ('Instituciones públicas como espacio', '4 XXXIV', r'instituci[oó]n(es)? p[uú]blica|public institution|sector p[uú]blico'),
 ('Plataformas digitales', '30', r'plataforma|platform|mediaci[oó]n digital'),
 ('Comité Directivo', '18 a 21', r'comit[eé] directivo|steering committee'),
]
cross = []
hay = [(r, (r['t'] + ' ' + (r.get('ab') or '')).lower()) for r in rows]
for name, art, rx in N:
    a = [r for r, t in hay if re.search(rx, t)]
    cross.append({'n': name, 'art': art, 'all': len(a), 'ems': sum(1 for r in a if r['lv'] == 'E')})
    print(name, len(a), sum(1 for r in a if r['lv'] == 'E'))
print('con resumen', sum(1 for r, _ in hay if (r.get('ab') or '').strip()), 'de', n)
ini = lambda a: (a[0] + (' et al.' if len(a) > 1 else '')) if a else 'Sin autor'
doc = [{'a': ini(r.get('a') or []), 'y': r['y'], 't': r['t'], 'v': r.get('v') or '', 'c': r.get('c'), 'l': r['lv'], 'i': r['in'], 'h': r['th'], 'u': r.get('doi') or ('https://openalex.org/' + r['id'] if r['id'].startswith('W') else '')} for r in rows]
years = list(range(2013, 2027))
out = {'n': n, 'ident': sum(l[1] for l in raw['log']), 'uniq': len(raw['rows']), 'oa': len(C), 'bn': len(extra), 'ex': len(raw['rows']) - len(C),
       'lv': dict(lv), 'years': [{'y': y, 'E': by_year_lv.get(y, {}).get('E', 0), 'S': by_year_lv.get(y, {}).get('S', 0), 'M': by_year_lv.get(y, {}).get('M', 0), 'C': by_year_lv.get(y, {}).get('C', 0)} for y in years],
       'instE': dict(inst_E), 'eNoInst': e_no_inst, 'th': dict(th_all), 'thE': dict(th_E), 'ty': dict(ty), 'ven': ven.most_common(5), 'cross': cross, 'doc': doc,
       'top': [{'a': ini(r.get('a') or []), 'y': r['y'], 't': r['t'], 'c': r['c'], 'l': r['lv']} for r in top]}
json.dump(out, open(sp + '/biblio/bib.json', 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
print('ident', out['ident'], 'uniq', out['uniq'], 'oa', out['oa'], 'ex', out['ex'])
print([ (r['a'],r['y'],r['c']) for r in out['top']])
