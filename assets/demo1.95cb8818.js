import{f as e,j as n,o as t,c as o,m as r,v as a,b as i,x as l}from"./app.1d88cb5e.js";import"./type.768f5ea0.js";function u(t,o){const r=e(function(){const e=localStorage.getItem(t);if(e)try{return JSON.parse(e)}catch(n){}if("function"==typeof o)return o();return o}());return n(r,(()=>{localStorage.setItem(t,JSON.stringify(r.value))}),{deep:!0,immediate:!1}),r}var s={setup:()=>({form:u("user-form",{name:"dendi",age:18})})};s.render=function(e,n,l,u,s,d){return t(),o("div",null,[r(i("input",{"onUpdate:modelValue":n[1]||(n[1]=e=>u.form.name=e),style:{"margin-right":"16px"}},null,512),[[a,u.form.name]]),r(i("input",{"onUpdate:modelValue":n[2]||(n[2]=e=>u.form.age=e)},null,512),[[a,u.form.age]])])};var d={setup:()=>({conditions:l({field1:u("field1","hello world!")})})};d.render=function(e,n,l,u,s,d){return t(),o("div",null,[r(i("input",{"onUpdate:modelValue":n[1]||(n[1]=e=>u.conditions.field1=e)},null,512),[[a,u.conditions.field1]])])};export{d as _,s as a};
