import{S as t,i as n,s as e,h as s,k as a,b as r,d as o,M as c,N as l,f as u,x as i,Y as $,y as p,T as f,t as m,p as g,G as d,H as h,I as v,J as x,K as w,$ as y,j as P,l as k,m as N,q as b,u as j,r as L,w as M,v as q,z as E,X as S,a0 as I,_ as T}from"./client.1cea0a1d.js";import{B as z}from"./button.1cd9d08c.js";import{T as A}from"./text-field.badc37f3.js";import{c as B}from"./classes.2453fa25.js";function G(t,n,e){const s=t.slice();return s[21]=n[e],s}function H(t){let n,e,d,h=[],v=new Map,w=t[7];const P=t=>t[21];for(let n=0;n<w.length;n+=1){let e=G(t,w,n),s=P(e);v.set(s,h[n]=Q(s,e))}let k=[{class:e=B("pagination",t[1])},t[15]],N={};for(let t=0;t<k.length;t+=1)N=x(N,k[t]);return{c(){n=s("nav");for(let t=0;t<h.length;t+=1)h[t].c();this.h()},l(t){n=a(t,"NAV",{class:!0});var e=r(n);for(let t=0;t<h.length;t+=1)h[t].l(e);e.forEach(o),this.h()},h(){c(n,N),l(n,"svelte-opq3my",!0)},m(t,e){u(t,n,e);for(let t=0;t<h.length;t+=1)h[t].m(n,null);d=!0},p(t,s){32757&s&&(w=t[7],i(),h=$(h,s,P,1,t,w,v,n,y,Q,null,G),p()),c(n,N=f(k,[(!d||2&s&&e!==(e=B("pagination",t[1])))&&{class:e},32768&s&&t[15]])),l(n,"svelte-opq3my",!0)},i(t){if(!d){for(let t=0;t<w.length;t+=1)m(h[t]);d=!0}},o(t){for(let t=0;t<h.length;t+=1)g(h[t]);d=!1},d(t){t&&o(n);for(let t=0;t<h.length;t+=1)h[t].d()}}}function J(t){let n,e;return n=new z({props:{neutral:t[21]!==t[0],class:B("page",t[21]===t[0]&&"current"),$$slots:{default:[X]},$$scope:{ctx:t}}}),n.$on("click",(function(){return t[18](t[21])})),{c(){P(n.$$.fragment)},l(t){k(n.$$.fragment,t)},m(t,s){N(n,t,s),e=!0},p(e,s){t=e;const a={};129&s&&(a.neutral=t[21]!==t[0]),129&s&&(a.class=B("page",t[21]===t[0]&&"current")),16777344&s&&(a.$$scope={dirty:s,ctx:t}),n.$set(a)},i(t){e||(m(n.$$.fragment,t),e=!0)},o(t){g(n.$$.fragment,t),e=!1},d(t){b(n,t)}}}function K(t){let n,e,s,a;const r=[_,Y],c=[];function l(t,n){return t[6]?0:1}return n=l(t),e=c[n]=r[n](t),{c(){e.c(),s=d()},l(t){e.l(t),s=d()},m(t,e){c[n].m(t,e),u(t,s,e),a=!0},p(t,a){let o=n;n=l(t),n===o?c[n].p(t,a):(i(),g(c[o],1,1,(()=>{c[o]=null})),p(),e=c[n],e?e.p(t,a):(e=c[n]=r[n](t),e.c()),m(e,1),e.m(s.parentNode,s))},i(t){a||(m(e),a=!0)},o(t){g(e),a=!1},d(t){c[n].d(t),t&&o(s)}}}function V(t){let n,e,s,a;const r=[F,D],c=[];function l(t,n){return t[5]?0:1}return n=l(t),e=c[n]=r[n](t),{c(){e.c(),s=d()},l(t){e.l(t),s=d()},m(t,e){c[n].m(t,e),u(t,s,e),a=!0},p(t,a){let o=n;n=l(t),n===o?c[n].p(t,a):(i(),g(c[o],1,1,(()=>{c[o]=null})),p(),e=c[n],e?e.p(t,a):(e=c[n]=r[n](t),e.c()),m(e,1),e.m(s.parentNode,s))},i(t){a||(m(e),a=!0)},o(t){g(e),a=!1},d(t){c[n].d(t),t&&o(s)}}}function X(t){let n,e,s=t[21]+"";return{c(){n=j(s),e=L()},l(t){n=M(t,s),e=q(t)},m(t,s){u(t,n,s),u(t,e,s)},p(t,e){128&e&&s!==(s=t[21]+"")&&E(n,s)},d(t){t&&o(n),t&&o(e)}}}function Y(t){let n,e;return n=new z({props:{class:"page",neutral:!0,$$slots:{default:[C]},$$scope:{ctx:t}}}),n.$on("click",t[14]),{c(){P(n.$$.fragment)},l(t){k(n.$$.fragment,t)},m(t,s){N(n,t,s),e=!0},p(t,e){const s={};16777216&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(m(n.$$.fragment,t),e=!0)},o(t){g(n.$$.fragment,t),e=!1},d(t){b(n,t)}}}function _(t){let n,e,s;function a(n){t[17](n)}let r={type:"number",min:1,max:t[2],noSpinner:!0,autofocus:!0};return void 0!==t[4]&&(r.value=t[4]),n=new A({props:r}),S.push((()=>I(n,"value",a))),n.$on("blur",t[11]),n.$on("keydown",t[12]),{c(){P(n.$$.fragment)},l(t){k(n.$$.fragment,t)},m(t,e){N(n,t,e),s=!0},p(t,s){const a={};4&s&&(a.max=t[2]),!e&&16&s&&(e=!0,a.value=t[4],T((()=>e=!1))),n.$set(a)},i(t){s||(m(n.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),s=!1},d(t){b(n,t)}}}function C(t){let n;return{c(){n=j("...\n          ")},l(t){n=M(t,"...\n          ")},m(t,e){u(t,n,e)},d(t){t&&o(n)}}}function D(t){let n,e;return n=new z({props:{class:"page",neutral:!0,$$slots:{default:[O]},$$scope:{ctx:t}}}),n.$on("click",t[13]),{c(){P(n.$$.fragment)},l(t){k(n.$$.fragment,t)},m(t,s){N(n,t,s),e=!0},p(t,e){const s={};16777216&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(m(n.$$.fragment,t),e=!0)},o(t){g(n.$$.fragment,t),e=!1},d(t){b(n,t)}}}function F(t){let n,e,s;function a(n){t[16](n)}let r={type:"number",min:1,max:t[2],noSpinner:!0,autofocus:!0};return void 0!==t[4]&&(r.value=t[4]),n=new A({props:r}),S.push((()=>I(n,"value",a))),n.$on("blur",t[11]),n.$on("keydown",t[12]),{c(){P(n.$$.fragment)},l(t){k(n.$$.fragment,t)},m(t,e){N(n,t,e),s=!0},p(t,s){const a={};4&s&&(a.max=t[2]),!e&&16&s&&(e=!0,a.value=t[4],T((()=>e=!1))),n.$set(a)},i(t){s||(m(n.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),s=!1},d(t){b(n,t)}}}function O(t){let n;return{c(){n=j("...")},l(t){n=M(t,"...")},m(t,e){u(t,n,e)},d(t){t&&o(n)}}}function Q(t,n){let e,s,a,r,c;const l=[V,K,J],$=[];function f(t,n){return t[21]===t[8]?0:t[21]===t[9]?1:2}return s=f(n),a=$[s]=l[s](n),{key:t,first:null,c(){e=d(),a.c(),r=d(),this.h()},l(t){e=d(),a.l(t),r=d(),this.h()},h(){this.first=e},m(t,n){u(t,e,n),$[s].m(t,n),u(t,r,n),c=!0},p(t,e){let o=s;s=f(n=t),s===o?$[s].p(n,e):(i(),g($[o],1,1,(()=>{$[o]=null})),p(),a=$[s],a?a.p(n,e):(a=$[s]=l[s](n),a.c()),m(a,1),a.m(r.parentNode,r))},i(t){c||(m(a),c=!0)},o(t){g(a),c=!1},d(t){t&&o(e),$[s].d(t),t&&o(r)}}}function R(t){let n,e,s=(t[2]>1||1==t[2]&&t[3])&&H(t);return{c(){s&&s.c(),n=d()},l(t){s&&s.l(t),n=d()},m(t,a){s&&s.m(t,a),u(t,n,a),e=!0},p(t,[e]){t[2]>1||1==t[2]&&t[3]?s?(s.p(t,e),12&e&&m(s,1)):(s=H(t),s.c(),m(s,1),s.m(n.parentNode,n)):s&&(i(),g(s,1,1,(()=>{s=null})),p())},i(t){e||(m(s),e=!0)},o(t){g(s),e=!1},d(t){s&&s.d(t),t&&o(n)}}}function U(t,n,e){let s;const a=["class","pages","currentPage","showLonePage"];let r=h(n,a),{class:o=null}=n,{pages:c}=n,{currentPage:l=1}=n,{showLonePage:u=!0}=n,i=null,$=!1,p=!1;const f={},m={};function g(t){t>=1&&t<=c&&(e(5,$=!1),e(6,p=!1),e(0,l=t),y("change",{value:t}))}function d(t){const n=parseInt(i);isNaN(n)||g(n)}const y=v();return t.$$set=t=>{n=x(x({},n),w(t)),e(15,r=h(n,a)),"class"in t&&e(1,o=t.class),"pages"in t&&e(2,c=t.pages),"currentPage"in t&&e(0,l=t.currentPage),"showLonePage"in t&&e(3,u=t.showLonePage)},t.$$.update=()=>{5&t.$$.dirty&&e(0,l=Math.min(Math.max(l,1),c)),5&t.$$.dirty&&e(7,s=function(t,n=1){const e=[];return 1!==n&&e.push(1),n-1==3?e.push(n-2):n-1>3&&e.push(f),n>2&&e.push(n-1),e.push(n),n<t-1&&e.push(n+1),t-n==3?e.push(n+2):t-n>3&&e.push(m),n!==t&&e.push(t),e}(c,l))},[l,o,c,u,i,$,p,s,f,m,g,d,function({detail:t}){"Enter"===t.nativeEvent.key&&(d(),e(4,i=""))},function(){e(5,$=!0),e(6,p=!1)},function(){e(5,$=!1),e(6,p=!0)},r,function(t){i=t,e(4,i)},function(t){i=t,e(4,i)},t=>g(t)]}var W=class extends t{constructor(t){super(),n(this,t,U,R,e,{class:1,pages:2,currentPage:0,showLonePage:3})}};export{W as P};
