import sys
p = sys.argv[1]
h = open(p, encoding='utf-8').read()
R = [
 (".net svg.links{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:2;overflow:visible}",
  ".net svg.links{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;overflow:visible}"),
 (".node{position:relative;z-index:1;display:flex;", ".node{position:relative;z-index:3;max-width:100%;display:flex;"),
 (".node.dim{opacity:.42}", ".node.dim{opacity:.5}\n.node .relnum{margin-left:auto}"),
 ("""  const cx=mx-dy/L*o,cy=my+dx/L*o,tx=(p.x+2*cx+q.x)/4,ty=(p.y+2*cy+q.y)/4;
  out+=`<path d="M${p.x} ${p.y}Q${cx} ${cy} ${q.x} ${q.y}" fill="none" stroke="var(--ink)" stroke-width="2"/><circle cx="${tx}" cy="${ty}" r="10" fill="var(--ink)"/><text x="${tx}" y="${ty+4}" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--surface)">${i+1}</text>`;
""", """  const cx=mx-dy/L*o,cy=my+dx/L*o;
  out+=`<path d="M${p.x} ${p.y}Q${cx} ${cy} ${q.x} ${q.y}" fill="none" stroke="var(--ink)" stroke-width="2"/>`;
"""),
 (""" $$('.node').forEach(n=>{const id=n.dataset.id;n.setAttribute('aria-pressed',id===sel);n.classList.toggle('rel',rel.includes(id));n.classList.toggle('dim',id!==sel&&!rel.includes(id))});""",
  """ $$('.node').forEach(n=>{const id=n.dataset.id,ix=rel.indexOf(id),old=$('.relnum',n);if(old)old.remove();n.setAttribute('aria-pressed',id===sel);n.classList.toggle('rel',ix>=0);n.classList.toggle('dim',id!==sel&&ix<0);if(ix>=0)n.insertAdjacentHTML('beforeend',`<span class="relnum">${ix+1}</span>`)});"""),
 ("Selecciona una figura. Las líneas numeradas muestran con quién se relaciona.", "Selecciona una figura. Las líneas y los números muestran con quién se relaciona."),
 ("""<label for="h-m">Matriz: <output id="h-mo">80</output> %""", """<label for="h-m"><span>Matriz: <output id="h-mo">80</output> %</span>"""),
 ("""<label for="c-s">Inicia en el mes <output id="c-so">6</output> del convenio""", """<label for="c-s"><span>Inicia en el mes <output id="c-so">6</output> del convenio</span>"""),
 ("""const qs=Q[prof].q,r=scoreOf(qs,ans[prof]),l=level(r.pct),stat=r.blk.length&&r.pct!==null?['bad',`${r.blk.length} críticos pendientes`,'lock']:l;""",
  """const qs=Q[prof].q,r=scoreOf(qs,ans[prof]);let l=level(r.pct);if(r.blk.length&&l[0]==='ok')l=level(79);"""),
 ("""${r.blk.length?`<span class="status bad">${ic('lock')}${r.blk.length} críticos</span>`:''}""",
  """${r.blk.length?`<span class="status bad">${ic('lock')}${r.blk.length} ${r.blk.length===1?'crítico':'críticos'}</span>`:''}"""),
 ("Menos de 50 %: crítico. Regla del equipo.", "Menos de 50 %: crítico. Un punto crítico pendiente impide la etiqueta de sólido. Regla del equipo."),
 ("<small>3 en el Acuerdo, 6 en el portal. CONALEP, CECyTE y CETI no son Subsistema según la definición legal.</small>",
  "<small>3 en el Acuerdo, 6 en el portal. CECyTE y CONALEP suman 88 % de la participación reportada y no son Subsistema legal.</small>"),
 ("""  <div class="tile">${ic('factory')}<b>3,337</b><span>empresas en el contador del portal</span></div>
 </div>
 <div class="card"><h3>${ic('filter')}Elige una lente</h3>""",
  """  <div class="tile">${ic('factory')}<b>3,337</b><span>empresas en el contador del portal</span></div>
 </div>
 <div class="card"><h3>${ic('chart-column')}Dónde está la participación dual</h3>
  <div style="display:flex;gap:2px;height:38px" role="img" aria-label="CECyTE 48 por ciento, CONALEP 40 por ciento, otros 12 por ciento">
   <div style="flex:48;background:var(--s-b);color:#fff;border-radius:4px 0 0 4px;display:grid;place-items:center;font-weight:600">CECyTE 48 %</div>
   <div style="flex:40;background:color-mix(in srgb,var(--s-b) 62%,var(--surface));display:grid;place-items:center;font-weight:600">CONALEP 40 %</div>
   <div style="flex:12;background:var(--s-a);color:#fff;border-radius:0 4px 4px 0;display:grid;place-items:center;font-weight:600;font-size:13px">Otros 12 %</div>
  </div>
  <p class="small" style="margin-top:9px"><b>88 % está fuera de los 3 Subsistemas legales.</b> <span class="muted">Encuesta SEMS-GIZ 2020-2021. Otros es el resto calculado. Puede reflejar quién respondió, no toda la matrícula.</span> ${src('HM24')}</p>
 </div>
 <div class="card"><h3>${ic('filter')}Elige una lente</h3>"""),
 ("""   <div class="grid3">
    <div class="tile">${ic('graduation-cap')}<b>915</b><span>aprendices 2013-14</span></div>
    <div class="tile">${ic('graduation-cap')}<b>5,068</b><span>aprendices 2017-18</span></div>
    <div class="tile">${ic('graduation-cap')}<b>17 mil</b><span>declarado, feb 2025</span></div>
   </div>
   <p class="small muted" style="margin-top:9px">Fuentes distintas, no comparables de forma estricta. ${src('C18')} ${src('RZ')}</p></div>""",
  """   <div class="tiles" style="grid-template-columns:repeat(auto-fit,minmax(112px,1fr))">
    <div class="tile"><b>915</b><span>aprendices 2013-14</span></div>
    <div class="tile"><b>5,068</b><span>aprendices 2017-18</span></div>
    <div class="tile"><b>10,319</b><span>aprendices 2022, cerca de 2 % de la EMS</span></div>
    <div class="tile"><b>17 mil</b><span>declarado, feb 2025</span></div>
   </div>
   <p class="small muted" style="margin-top:9px">Fuentes distintas, no comparables de forma estricta. ${src('C18')} ${src('HM24')} ${src('RZ')}</p></div>"""),
]
for a, b in R:
    assert a in h, a[:70]
    h = h.replace(a, b)
open(p, 'w', encoding='utf-8', newline='\n').write(h)
print('patched', len(R))
