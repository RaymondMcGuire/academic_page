import{o as f,c as _,a as h,r as v,b as y,d as g,e as E}from"./vendor-EXjHUEsh.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const b=(s,n)=>{const o=s.__vccOpts||s;for(const[c,e]of n)o[c]=e;return o},P={},L={id:"app",class:"app"};function O(s,n){const o=v("router-view");return f(),_("div",L,[h(o)])}const w=b(P,[["render",O]]),R="modulepreload",x=function(s){return"https://raymondmcguire.github.io/xpbd/"+s},p={},d=function(n,o,c){let e=Promise.resolve();if(o&&o.length>0){const t=document.getElementsByTagName("link");e=Promise.all(o.map(r=>{if(r=x(r),r in p)return;p[r]=!0;const a=r.endsWith(".css"),m=a?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const u=t[l];if(u.href===r&&(!a||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${m}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":R,a||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),a)return new Promise((l,u)=>{i.addEventListener("load",l),i.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>n()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},B=[{path:"/",name:"Home",component:()=>d(()=>import("./Home-DzFM4RSq.js"),__vite__mapDeps([0,1]))},{path:"/examples/ball2d",name:"Ball2D",component:()=>d(()=>import("./Ball2D-FyVvCXi3.js"),__vite__mapDeps([2,1,3]))},{path:"/examples/ball3d",name:"Ball3D",component:()=>d(()=>import("./Ball3D-bDENy6wC.js"),__vite__mapDeps([4,1,5]))}],A=y({history:g("https://raymondmcguire.github.io/xpbd/"),routes:B});E(w).use(A).mount("#app");export{b as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Home-DzFM4RSq.js","assets/vendor-EXjHUEsh.js","assets/Ball2D-FyVvCXi3.js","assets/Ball2D-KFYFtolY.css","assets/Ball3D-bDENy6wC.js","assets/Ball3D-jUcPKu6y.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
