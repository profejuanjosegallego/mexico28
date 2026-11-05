/* Siglas: la primera mencion de cada tarjeta muestra el significado; todas se aclaran al pasar el cursor o tocar. */
const GL=Object.fromEntries(SIG);GL.Conalep=GL.CONALEP;
const SGR=new RegExp('(?<![A-Za-zÀ-ÿ])('+Object.keys(GL).sort((a,b)=>b.length-a.length).join('|')+')(?![A-Za-zÀ-ÿ])','g');
const SG_SKIP='script,style,svg,abbr,textarea,select,option,code,dt,.sgx,#sgtip';
const SG_NOEXP='button,a,th,td,.pill,summary,h1,h2,h3,h4,dl,label,.lab,.tile>b,.rt,header,footer,dialog,#fuentes';
const SG_SCOPE='details,.card,.tile,.ten,.lead,.note,article,section';
function sgText(n){
 const t=n.nodeValue,p=n.parentElement;
 if(!p||!t||p.closest(SG_SKIP))return;
 SGR.lastIndex=0;if(!SGR.test(t))return;SGR.lastIndex=0;
 const noexp=p.closest(SG_NOEXP),inter=p.closest('button,a,summary,label'),f=document.createDocumentFragment();
 let i=0,m,pend=[];
 const scope=(p.closest(SG_SCOPE)||p).cloneNode(true);scope.querySelectorAll('dl.sig,table').forEach(e=>e.remove());
 while((m=SGR.exec(t))){
  f.append(t.slice(i,m.index));i=m.index+m[0].length;
  const s=m[1],d=GL[s],a=document.createElement('abbr');
  a.className='sg';a.textContent=s;a.dataset.d=d;a.setAttribute('aria-label',s+': '+d);
  if(!inter)a.tabIndex=0;
  f.append(a);
  const key=d.split(',')[0];
  if(!noexp&&t[m.index-1]!=='('&&!scope.textContent.includes(key)&&!pend.includes(key)){
   const x=document.createElement('span');x.className='sgx';x.textContent=' ('+key+')';f.append(x);pend.push(key);
  }
 }
 f.append(t.slice(i));n.replaceWith(f);
}
function siglas(r){
 const w=document.createTreeWalker(r,NodeFilter.SHOW_TEXT),L=[];
 while(w.nextNode())L.push(w.currentNode);
 L.forEach(sgText);
 r.querySelectorAll('svg text').forEach(e=>{const m=e.textContent.match(SGR);if(m&&!e.querySelector('title')){const k=document.createElementNS('http://www.w3.org/2000/svg','title');k.textContent=m.map(s=>s+': '+GL[s]).join('. ');e.append(k)}});
}
const sgo=new MutationObserver(ms=>{sgo.disconnect();
 ms.forEach(m=>m.addedNodes.forEach(n=>{if(!n.isConnected)return;if(n.nodeType===1)siglas(n);else if(n.nodeType===3)sgText(n)}));
 sgStart()});
const sgStart=()=>sgo.observe(document.body,{childList:true,subtree:true});
const sgtip=document.createElement('div');sgtip.id='sgtip';sgtip.setAttribute('role','tooltip');sgtip.hidden=true;
const sgHide=()=>{sgtip.hidden=true};
function sgShow(a){
 sgtip.innerHTML='';const b=document.createElement('b');b.textContent=a.textContent;sgtip.append(b,' '+a.dataset.d);
 const host=a.closest('dialog')||document.body;if(sgtip.parentNode!==host)host.append(sgtip);
 sgtip.hidden=false;
 const r=a.getBoundingClientRect(),W=document.documentElement.clientWidth,H=innerHeight,w=sgtip.offsetWidth,h=sgtip.offsetHeight;
 sgtip.style.left=Math.max(8,Math.min(r.left,W-w-8))+'px';
 sgtip.style.top=(r.bottom+h+10>H?Math.max(8,r.top-h-6):r.bottom+6)+'px';
}
document.addEventListener('mouseover',e=>{const a=e.target.closest&&e.target.closest('abbr.sg');if(a)sgShow(a)});
document.addEventListener('mouseout',e=>{if(e.target.closest&&e.target.closest('abbr.sg')&&document.activeElement!==e.target)sgHide()});
document.addEventListener('focusin',e=>{if(e.target.matches('abbr.sg'))sgShow(e.target)});
document.addEventListener('focusout',e=>{if(e.target.matches('abbr.sg'))sgHide()});
document.addEventListener('click',e=>{const a=e.target.closest('abbr.sg');a?sgShow(a):sgHide()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')sgHide()});
addEventListener('scroll',sgHide,{passive:true,capture:true});
siglas(document.body);document.body.append(sgtip);sgStart();
