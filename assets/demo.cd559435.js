import{k as n,f as u,l as e,j as t,o as a,c as o,b as l,t as s,e as c}from"./app.23e4df7f.js";import"./type.a6bfb5ee.js";var d={setup(){const a=u(0),o=function(a,o){var l;let s;s="function"==typeof a?n(a):a;const c=u(s.value),d=e.debounce((()=>{c.value=s.value}),null!=(l=null==o?void 0:o.wait)?l:1e3,o);return t(s,d),c}(a,{wait:1e3});return{count:a,debouncedValue:o,addCount:function(){a.value++}}}};const r=c(" count: "),p=c(" debouncedValue: ");d.render=function(n,u,e,t,c,d){return a(),o("div",null,[l("p",null,[r,l("span",null,s(t.count),1)]),l("p",null,[p,l("span",null,s(t.debouncedValue),1)]),l("button",{onClick:u[1]||(u[1]=(...n)=>t.addCount&&t.addCount(...n))},"++count")])};export{d as _};
