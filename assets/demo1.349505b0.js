import{h as t,f as e,o as n,c as i,b as o,t as r,e as s}from"./app.985b1160.js";import{s as c,g as u}from"./lifeCircle.9aacea35.js";import{u as a}from"./index.47154da4.js";import"./type.8a639bd9.js";function d(e){const{state:n}=a(!1);return c((()=>{const i=u(e);if(!i)return;const o=function(t){if(!t)return!1;const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,n=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,i=t.getBoundingClientRect();if(i){const{top:t,bottom:o,left:r,right:s}=i;return o>0&&t<=n&&r<=e&&s>0}return!1}(i);n.value=o;const r=new IntersectionObserver((t=>{const e=t.every((t=>t.isIntersecting));n.value=e}));r.observe(i),t((()=>{r.disconnect()}))})),n}var l={setup(){const t=e(null);return{divRef:t,isInViewport:d(t)}}};const m={ref:"divRef",style:{width:"100px",height:"100px",background:"rgba(0, 0, 0, 0.1)","margin-bottom":"300px"}},p=s(" isInViewport: "),f={style:{color:"blue"}};l.render=function(t,e,s,c,u,a){return n(),i("div",null,[o("div",m,null,512),p,o("span",f,r(c.isInViewport),1)])};export{l as _};
