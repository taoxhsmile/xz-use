import{f as n,o as t,c as o,b as u,t as a,e as l}from"./app.1d88cb5e.js";import"./type.768f5ea0.js";import{u as e}from"./index.f250e214.js";var r={setup(){const t=n(0),o=e(t,{wait:2e3});return{count:t,throlledCount:o,addCount:function(){t.value++}}}};const s=l(" count: "),d=l(" throlledCount: ");r.render=function(n,l,e,r,p,c){return t(),o("div",null,[u("p",null,[s,u("span",null,a(r.count),1)]),u("p",null,[d,u("span",null,a(r.throlledCount),1)]),u("button",{onClick:l[1]||(l[1]=(...n)=>r.addCount&&r.addCount(...n))},"++count")])};export{r as _};