import{S as t,i as n,s as e,L as s,h as o,k as a,b as l,d as i,e as c,W as r,N as u,f as d,o as h,P as p,Q as $,R as f,t as g,p as T,I as m,a2 as O,a3 as A,X as v,a4 as w,a5 as E}from"./client.9965e4e5.js";import{c as y}from"./classes.2453fa25.js";const D={},U={},_=t=>({}),R=t=>({toggle:t[2]});function b(t){let n,e,m,O,A;const v=t[6].default,w=s(v,t,t[5],R);return{c(){n=o("div"),w&&w.c(),this.h()},l(t){n=a(t,"DIV",{class:!0});var e=l(n);w&&w.l(e),e.forEach(i),this.h()},h(){c(n,"class",e=r(y("dropdown-shell",t[1]))+" svelte-1j957tq"),u(n,"open",t[0])},m(e,s){d(e,n,s),w&&w.m(n,null),t[7](n),m=!0,O||(A=h(window,"click",t[4]),O=!0)},p(t,[s]){w&&w.p&&(!m||32&s)&&p(w,v,t,t[5],m?f(v,t[5],s,_):$(t[5]),R),(!m||2&s&&e!==(e=r(y("dropdown-shell",t[1]))+" svelte-1j957tq"))&&c(n,"class",e),3&s&&u(n,"open",t[0])},i(t){m||(g(w,t),m=!0)},o(t){T(w,t),m=!1},d(e){e&&i(n),w&&w.d(e),t[7](null),O=!1,A()}}}function j(t,n,e){let{$$slots:s={},$$scope:o}=n,{class:a=null}=n,{open:l=!1}=n;function i(){e(0,l=!l)}let c=null;function r(t){"Escape"===t.key&&l&&(t.preventDefault(),i())}const u=m(),d=A(l);return O(D,(()=>c&&c.getBoundingClientRect())),O(U,d),t.$$set=t=>{"class"in t&&e(1,a=t.class),"open"in t&&e(0,l=t.open),"$$scope"in t&&e(5,o=t.$$scope)},t.$$.update=()=>{1&t.$$.dirty&&u("change",{value:l}),1&t.$$.dirty&&"undefined"!=typeof document&&(l?document.addEventListener("keydown",r):document.removeEventListener("keydown",r)),1&t.$$.dirty&&d.set(l)},[l,a,i,c,function(t){if(!c)return;!c.contains(t.target)&&l&&i()},o,s,function(t){v[t?"unshift":"push"]((()=>{c=t,e(3,c)}))}]}var q=class extends t{constructor(t){super(),n(this,t,j,b,e,{class:1,open:0,toggle:2})}get toggle(){return this.$$.ctx[2]}};const z={AUTO_START:"auto-start",AUTO_END:"auto-end",START:"start",END:"end"},B={AUTO_BOTTOM:"auto-bottom",AUTO_TOP:"auto-top",BOTTOM:"bottom",TOP:"top"};function k(t){let n,e,h;const m=t[11].default,O=s(m,t,t[10],null);return{c(){n=o("div"),O&&O.c(),this.h()},l(t){n=a(t,"DIV",{class:!0});var e=l(n);O&&O.l(e),e.forEach(i),this.h()},h(){c(n,"class",e=r(y("dropdown",t[0]))+" svelte-1fhqrqw"),u(n,"right",t[3]),u(n,"top",t[2])},m(e,s){d(e,n,s),O&&O.m(n,null),t[12](n),h=!0},p(t,[s]){O&&O.p&&(!h||1024&s)&&p(O,m,t,t[10],h?f(m,t[10],s,null):$(t[10]),null),(!h||1&s&&e!==(e=r(y("dropdown",t[0]))+" svelte-1fhqrqw"))&&c(n,"class",e),9&s&&u(n,"right",t[3]),5&s&&u(n,"top",t[2])},i(t){h||(g(O,t),h=!0)},o(t){T(O,t),h=!1},d(e){e&&i(n),O&&O.d(e),t[12](null)}}}function N(t,n,e){let s,{$$slots:o={},$$scope:a}=n,{class:l=null}=n,{right:i=!1}=n,{top:c=!1}=n,{horizontalAlignment:r=z.AUTO_START}=n,{verticalAlignment:u=B.AUTO_BOTTOM}=n;const d=w(U);E(t,d,(t=>e(9,s=t)));const h=w(D);let p,$,f;return t.$$set=t=>{"class"in t&&e(0,l=t.class),"right"in t&&e(5,i=t.right),"top"in t&&e(6,c=t.top),"horizontalAlignment"in t&&e(7,r=t.horizontalAlignment),"verticalAlignment"in t&&e(8,u=t.verticalAlignment),"$$scope"in t&&e(10,a=t.$$scope)},t.$$.update=()=>{if(610&t.$$.dirty&&s){const t=p.getBoundingClientRect(),n=h();e(2,$=c||function(t,n){const{height:e}=t,{top:s,bottom:o}=n;switch(u){case B.TOP:return!0;case B.BOTTOM:return!1;case B.AUTO_TOP:return e<=s;default:return e>window.innerHeight-o}}(t,n)),e(3,f=i||function(t,n){const{width:e}=t,{left:s,right:o}=n;switch(r){case z.END:return!0;case z.START:return!1;case z.AUTO_END:return e<=o;default:return e>window.innerWidth-s}}(t,n))}},[l,p,$,f,d,i,c,r,u,s,a,o,function(t){v[t?"unshift":"push"]((()=>{p=t,e(1,p)}))}]}Object.freeze(z),Object.freeze(B);var P=class extends t{constructor(t){super(),n(this,t,N,k,e,{class:0,right:5,top:6,horizontalAlignment:7,verticalAlignment:8})}};export{q as D,P as a};
