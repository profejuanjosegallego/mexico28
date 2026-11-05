import json, sys, time, urllib.parse, urllib.request
out = sys.argv[1]
Q = [
 '"formación dual" México', '"educación dual" México', '"modelo mexicano de formación dual"',
 '"modelo dual" México', '"sistema dual" México educación', '"dual training" Mexico',
 '"dual education" Mexico', '"dual vocational" Mexico', '"dual apprenticeship" Mexico',
 '"vocational education" Mexico dual',
]
seen = {}; log = []
for q in Q:
    cursor = '*'; n = 0; total = None
    while cursor and n < 600:
        f = 'title_and_abstract.search:' + q + ',from_publication_date:2013-01-01,to_publication_date:2026-11-04'
        url = 'https://api.openalex.org/works?' + urllib.parse.urlencode({'filter': f, 'per-page': 100, 'cursor': cursor,
            'select': 'id,doi,title,publication_year,type,language,cited_by_count,primary_location,authorships,abstract_inverted_index'})
        req = urllib.request.Request(url, headers={'User-Agent': 'bibliometric-review-client'})
        try:
            d = json.load(urllib.request.urlopen(req, timeout=60))
        except Exception as e:
            log.append((q, 'ERR', str(e)[:120])); break
        total = d['meta']['count']
        for w in d['results']:
            r = seen.setdefault(w['id'], w); r.setdefault('_q', [])
            if q not in r['_q']: r['_q'].append(q)
            n += 1
        cursor = d['meta'].get('next_cursor') if d['results'] else None
        time.sleep(.25)
    log.append((q, total, n))
def abst(w):
    a = w.get('abstract_inverted_index')
    if not a: return ''
    pos = {}
    for k, v in a.items():
        for p in v: pos[p] = k
    return ' '.join(pos[i] for i in sorted(pos))
rows = []
for w in seen.values():
    loc = w.get('primary_location') or {}; src = loc.get('source') or {}
    rows.append({'id': w['id'].split('/')[-1], 'doi': w.get('doi'), 't': w.get('title') or '', 'y': w.get('publication_year'), 'ty': w.get('type'),
                 'l': w.get('language'), 'c': w.get('cited_by_count'), 'v': src.get('display_name'), 'a': [x['author'].get('display_name') for x in (w.get('authorships') or [])][:6],
                 'ab': abst(w)[:1600], 'q': w['_q']})
json.dump({'log': log, 'rows': rows}, open(out, 'w', encoding='utf-8'), ensure_ascii=False)
print(json.dumps(log, ensure_ascii=False, indent=0)); print('unique', len(rows))
