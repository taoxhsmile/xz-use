import{h as e,o as n,c as t,b as s,t as r,e as i,f as o}from"./app.23e4df7f.js";import"./type.a6bfb5ee.js";import{s as a,g as u}from"./lifeCircle.e65cc8d9.js";import{u as l}from"./index.d85043e6.js";function d(n,t){const{state:s,setFalse:r,setTrue:i}=l(!1),{onEnter:o,onLeave:d}=null!=t?t:{};function v(){i(),o&&o()}function c(){r&&r(),d&&d()}return a((()=>{const e=u(n);e&&(e.addEventListener("mouseenter",v),e.addEventListener("mouseleave",c))})),e((()=>{const e=u(n);e&&(e.removeEventListener("mouseenter",v),e.removeEventListener("mouseleave",c))})),s}var v={setup:()=>({isHovering:d((()=>document.getElementById("divRef")))})};const c=s("div",{id:"divRef",style:{width:"200px",height:"200px",background:"rgba(0, 0, 0, 0.2)"}},null,-1),f=i(" isHovering: "),p={style:{color:"blue"}};v.render=function(e,i,o,a,u,l){return n(),t("div",null,[c,f,s("span",p,r(a.isHovering),1)])};var m={setup(){const e=o(null);return{isHovering:d(e),divRef:e}}};const g={ref:"divRef",style:{width:"200px",height:"200px",background:"rgba(0, 0, 0, 0.2)"}},b=i(" isHovering: "),h={style:{color:"blue"}};m.render=function(e,i,o,a,u,l){return n(),t("div",null,[s("div",g,null,512),b,s("span",h,r(a.isHovering),1)])};export{m as _,v as a};