function hoursPlan(c,d,mat,mad){
 if(mat<75)return{block:true,years:[]};
 const up=mad&&mat>75;
 const low=up?24:18, high=up?30:24;
 if(c==='tec')return{years:[low,high,high],up};
 if(c==='g1'||d==='m')return{years:[low],partial:c==='g1',up};
 return{years:[low,high],up};
}
function convCheck(cc,ca,start){const end=start+ca,gap=Math.max(0,end-cc);return{end,gap,ok:gap===0}}
function scoreOf(qs,ans){
 const dims={};let sum=0,cnt=0,resp=0;const blk=[];
 qs.forEach((q,i)=>{const a=ans[i];dims[q[0]]=dims[q[0]]||{s:0,c:0};
  if(a)resp++;
  if(a==='c'||a==='p'||a==='n'){const v=a==='c'?1:a==='p'?.5:0;sum+=v;cnt++;dims[q[0]].s+=v;dims[q[0]].c++}
  if(q[3]&&a!=='c'&&a!=='x')blk.push(i)});
 return{pct:cnt?Math.round(sum/cnt*100):null,dims,blk,resp,total:qs.length};
}

const eq=(a,b,m)=>console.log(JSON.stringify(a)===JSON.stringify(b)?'ok ':'FAIL',m,JSON.stringify(a));
eq(hoursPlan('g2','d',80,false).years,[18,24],'2 años base');
eq(hoursPlan('g2','d',80,true).years,[24,30],'2 años madura');
eq(hoursPlan('g2','d',75,true).years,[18,24],'75 exacto no habilita max');
eq(hoursPlan('g1','m',90,true).years,[24],'<2 madura');
eq(hoursPlan('tec','d',90,true).years,[24,30,30],'tecnologo max');
eq(hoursPlan('tec','d',75,false).years,[18,24,24],'tecnologo base');
eq(hoursPlan('g1','m',70,true).block,true,'bloqueo <75');
eq(convCheck(24,24,0).ok,true,'CA cabe'); eq(convCheck(24,24,6).gap,6,'gap 6'); eq(convCheck(48,36,12).ok,true,'tec');
const q=[['a','x','1',1],['a','y','2'],['b','z','3',1],['b','w','4']];
let r=scoreOf(q,{0:'c',1:'p',2:'n',3:'x'}); eq([r.pct,r.blk,r.resp],[50,[2],4],'score');
r=scoreOf(q,{}); eq([r.pct,r.blk.length],[null,2],'vacio');
