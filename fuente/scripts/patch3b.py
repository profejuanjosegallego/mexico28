p='src.html'; h=open(p,encoding='utf-8').read()
a="  .aud,.tgrid,.guide,.guide.two,.chapw,.whor{grid-template-columns:1fr}"
assert a in h
h=h.replace(a,"  .aud,.tgrid,.guide,.guide.two,.chapw,.whor{grid-template-columns:minmax(0,1fr)}")
a="  .ptwo,.rlane,.ans{grid-template-columns:1fr}\n"
assert a in h
h=h.replace(a,"  .ptwo,.rlane,.ans,.tens,.grid2{grid-template-columns:minmax(0,1fr)}\n  .fig,details{max-width:100%;overflow-x:auto}\n  .card{min-width:0}\n")
a=".ctrl.v select{max-width:none;width:100%}"
assert a in h
h=h.replace(a,".ctrl.v label{min-width:0}\n.ctrl.v select{max-width:100%;min-width:0;width:100%}")
a="  .tens{grid-template-columns:1fr}\n"
assert a in h
h=h.replace(a,"")
a="  .grid2,.grid3,.grid4,.stepd,.ways,.nvp,.mid,.facts{grid-template-columns:1fr}"
assert a in h
h=h.replace(a,"  .grid3,.grid4,.stepd,.ways,.nvp,.mid,.facts{grid-template-columns:minmax(0,1fr)}")
open(p,'w',encoding='utf-8',newline='\n').write(h)
