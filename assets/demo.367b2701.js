var a=Object.assign;import{d as t,o as r,c as e,b as s,t as o,e as n}from"./app.985b1160.js";import"./type.8a639bd9.js";import{u as i}from"./index.316c238f.js";var d={setup(){const{data:r,error:e,loading:s}=function(r,e={}){return i(r,a(a({},e),{requestMethod:t.request}))}((()=>({url:"https://api.apishop.net/common/jieqi/Get24Jieqi"})),{formatResult:a=>a.data});return{data:r,error:e,loading:s}}};const u=n(" Result: ");d.render=function(a,t,n,i,d,p){return r(),e("div",null,[u,s("span",null,o(i.loading?"loading":i.data),1)])};export{d as _};