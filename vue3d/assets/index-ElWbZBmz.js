import{d as g,r as _,o as p,c as f,a as n,b as c,w as u,u as l,F as v,e as y,R as L,O as w,x as b,v as x,C,f as O,n as S,g as k,p as M,h as V,i as B}from"./vendor-UyvMHyjV.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const A=""+new URL("../vite.svg",import.meta.url).href,F="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e",I={class:"eshop-product-viewer"},N={class:"renderer"},R={class:"options"},H=["title","onClick"],P=g({__name:"HelloWorld",setup(s){const o=_(null),r=[{name:"Red sofa",color:"red"},{name:"Yellow sofa",color:"#e6e600"},{name:"Green sofa",color:"green"}],a=_(r[0]),e=i=>{a.value=r[i],t()},t=()=>{if(o.value===null)return;o.value.three.children[0].children.find(h=>h.name==="SheenChair_fabric").material.color.set(a.value.color)};return(i,h)=>(p(),f("div",I,[n("div",N,[c(l(O),{antialias:!0},{default:u(()=>[c(l(L),{position:[0,2,2]},{default:u(()=>[c(l(w),{target:[0,.5,0],"enable-pan":!1,"min-distance":1,"max-distance":5})]),_:1}),c(l(b),{background:"#f9f9f9"},{default:u(()=>[c(l(x),{position:[0,0,10],intensity:1}),c(l(C),{ref_key:"model",ref:o,url:"https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/SheenChair/glTF-Binary/SheenChair.glb",scale:[2,2,2],onLoad:t},null,512)]),_:1})]),_:1})]),n("div",R,[(p(),f(v,null,y(r,(d,m)=>n("div",{key:m,class:S([{active:d.name===a.value.name},"option"]),style:k(`background: ${d.color};`),title:d.name,onClick:G=>e(m)},null,14,H)),64))])]))}}),$=s=>(M("data-v-56963bd5"),s=s(),V(),s),E=$(()=>n("div",null,[n("a",{href:"https://vitejs.dev",target:"_blank"},[n("img",{src:A,class:"logo",alt:"Vite logo"})]),n("a",{href:"https://vuejs.org/",target:"_blank"},[n("img",{src:F,class:"logo vue",alt:"Vue logo"})])],-1)),Z=g({__name:"App",setup(s){return(o,r)=>(p(),f(v,null,[E,c(P,{msg:"Vite + Vue"})],64))}}),j=(s,o)=>{const r=s.__vccOpts||s;for(const[a,e]of o)r[a]=e;return r},z=j(Z,[["__scopeId","data-v-56963bd5"]]);B(z).mount("#app");
