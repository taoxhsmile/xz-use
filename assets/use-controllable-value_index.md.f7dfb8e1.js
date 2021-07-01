import{f as a,k as t,g as s,o as n,c as e,m as p,v as o,b as l,r as u,w as c,a as C}from"./app.985b1160.js";import"./type.8a639bd9.js";const E={setup:n=>({state:function(n={},e={}){const{defaultValue:p,defaultValuePropName:o="defaultValue",valuePropName:l="modelValue",trigger:u="update:modelValue"}=e,{proxy:c}=s(),C=a();return C.value=o in n?n[o]:p,t({get:()=>l in n?n[l]:C.value,set(a){l in n||(C.value=a),null==c||c.$emit(u,a)}})}(n,{defaultValue:""})})};E.render=function(a,t,s,u,c,C){return n(),e("div",null,[p(l("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>u.state=a),style:{width:300}},null,512),[[o,u.state]]),l("button",{type:"button",onClick:t[2]||(t[2]=a=>u.state=""),style:{margin:"0 4px"}}," Clear ")])};const r={components:{demo3:E}},d='{"title":"useControllableValue","description":"","frontmatter":{"map":{"path":"/use-controllable-value","realPath":"src/useControllableValue/index.zh-CN.md"}},"headers":[{"level":2,"title":"代码演示","slug":"代码演示"},{"level":3,"title":"基础用法","slug":"基础用法"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Result","slug":"result"},{"level":3,"title":"Params","slug":"params"},{"level":3,"title":"Options","slug":"options"}],"relativePath":"use-controllable-value/index.md","lastUpdated":1625134068775}',i=C('<h1 id="usecontrollablevalue"><a class="header-anchor" href="#usecontrollablevalue" aria-hidden="true">#</a> useControllableValue</h1><p>在某些组件开发时，我们需要组件的状态即可以自己管理，也可以被外部控制，<code>useControllableValue</code> 就是帮你管理这种状态的 Hook。</p><div class="tip custom-block"><p>Api 与<a href="https://ahooks.js.org/zh-CN/hooks/state/use-controllable-value" target="_blank" rel="noopener noreferrer">ahooks</a>一致。</p></div><h2 id="代码演示"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h2><h3 id="基础用法"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>',5),D=C('<h2 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><div class="language-javascript"><pre><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">useControllableValue</span><span class="token punctuation">(</span>props<span class="token operator">:</span> object<span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> Options<span class="token punctuation">)</span>\n</code></pre></div><h3 id="result"><a class="header-anchor" href="#result" aria-hidden="true">#</a> Result</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>state</td><td>状态值</td><td>-</td></tr></tbody></table><h3 id="params"><a class="header-anchor" href="#params" aria-hidden="true">#</a> Params</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>props</td><td>组件的 props</td><td><code>object</code></td><td>-</td></tr><tr><td>options</td><td>可选配置项，见 Options</td><td>-</td><td>-</td></tr></tbody></table><h3 id="options"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>defaultValue</td><td>默认值，会被 props.defaultValue 和 props.modelValue 覆盖</td><td>-</td><td>-</td></tr><tr><td>defaultValuePropName</td><td>默认值的属性名</td><td><code>string</code></td><td><code>defaultValue</code></td></tr><tr><td>valuePropName</td><td>值的属性名</td><td><code>string</code></td><td><code>modelValue</code></td></tr><tr><td>trigger</td><td>修改值时，触发的函数</td><td><code>string</code></td><td><code>update:modelValue</code></td></tr></tbody></table>',8);r.render=function(a,t,s,p,o,C){const E=u("demo3"),r=u("demo");return n(),e("div",null,[i,l("p",null,[l(r,{src:"./demo/demo1.vue",language:"vue",title:"非受控组件",desc:"如果 props 中没有 value，则组件内部自理 state",componentName:"demo3",htmlStr:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Einput%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Estate%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Astyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20width%3A%20300%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ebutton%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Estate%20%3D%20%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Astyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20margin%3A%20%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E0%204px%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20Clear%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20useControllableValue%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'xz-use'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20function%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Eprops%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20state%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EuseControllableValue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Eprops%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20defaultValue%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E''%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20state%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",codeStr:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cinput%20v-model%3D%22state%22%20%3Astyle%3D%22%7B%20width%3A%20300%20%7D%22%20%2F%3E%0A%20%20%20%20%3Cbutton%20type%3D%22button%22%20%40click%3D%22state%20%3D%20''%22%20%3Astyle%3D%22%7B%20margin%3A%20'0%204px'%20%7D%22%3E%0A%20%20%20%20%20%20Clear%0A%20%20%20%20%3C%2Fbutton%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%3E%0Aimport%20%7B%20useControllableValue%20%7D%20from%20'xz-use'%3B%0Aexport%20default%20%7B%0A%20%20setup(props)%20%7B%0A%20%20%20%20const%20state%20%3D%20useControllableValue(props%2C%20%7B%0A%20%20%20%20%20%20defaultValue%3A%20''%2C%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20state%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C%2Fscript%3E%0A"},{default:c((()=>[l(E)])),_:1})]),D])};export default r;export{d as __pageData};
