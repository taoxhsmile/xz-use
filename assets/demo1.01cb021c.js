import{h as e,o as n,c as t,b as s,t as r,e as i,f as o}from"./app.1d88cb5e.js";import"./type.768f5ea0.js";import{s as a,g as u}from"./lifeCircle.cc3fd537.js";import{u as l}from"./index.80e1c428.js";function v(n,t){const{state:s,setFalse:r,setTrue:i}=l(!1),{onEnter:o,onLeave:v}=null!=t?t:{};function d(){i(),o&&o()}function c(){r&&r(),v&&v()}return a((()=>{const e=u(n);e&&(e.addEventListener("mouseenter",d),e.addEventListener("mouseleave",c))})),e((()=>{const e=u(n);e&&(e.removeEventListener("mouseenter",d),e.removeEventListener("mouseleave",c))})),s}var d={setup:()=>({isHovering:v((()=>document.getElementById("divRef")))})};const c=s("div",{id:"divRef",style:{width:"200px",height:"200px",background:"rgba(0, 0, 0, 0.2)"}},null,-1),f=i(" isHovering: "),p={style:{color:"blue"}};d.render=function(e,i,o,a,u,l){return n(),t("div",null,[c,f,s("span",p,r(a.isHovering),1)])};var m={setup(){const e=o(null);return{isHovering:v(e),divRef:e}}};const g={ref:"divRef",style:{width:"200px",height:"200px",background:"rgba(0, 0, 0, 0.2)"}},b=i(" isHovering: "),h={style:{color:"blue"}};m.render=function(e,i,o,a,u,l){return n(),t("div",null,[s("div",g,null,512),b,s("span",h,r(a.isHovering),1)])};export{m as _,d as a};