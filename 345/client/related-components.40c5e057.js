import{S as t,i as e,s,h as n,j as l,r as o,k as a,b as r,l as c,v as f,d as $,e as m,W as i,f as p,m as u,g as d,t as g,p as h,q as x,x as j,y as b,a7 as v,G as w,u as y,w as k,z as C}from"./client.0d203b8f.js";import{B as R}from"./button.6d3e0478.js";import{C as B}from"./card.5071755b.js";import{L as q}from"./label.d38d7edd.js";import{c as z}from"./classes.2453fa25.js";function D(t,e,s){const n=t.slice();return n[2]=e[s],n}function E(t){let e,s,w,y,k;s=new q({props:{$$slots:{default:[G]},$$scope:{ctx:t}}});let C=t[1],R=[];for(let e=0;e<C.length;e+=1)R[e]=N(D(t,C,e));const B=t=>h(R[t],1,1,(()=>{R[t]=null}));return{c(){e=n("div"),l(s.$$.fragment),w=o();for(let t=0;t<R.length;t+=1)R[t].c();this.h()},l(t){e=a(t,"DIV",{class:!0});var n=r(e);c(s.$$.fragment,n),w=f(n);for(let t=0;t<R.length;t+=1)R[t].l(n);n.forEach($),this.h()},h(){m(e,"class",y=i(z("related-components",t[0]))+" svelte-j9fifh")},m(t,n){p(t,e,n),u(s,e,null),d(e,w);for(let t=0;t<R.length;t+=1)R[t].m(e,null);k=!0},p(t,n){const l={};if(32&n&&(l.$$scope={dirty:n,ctx:t}),s.$set(l),2&n){let s;for(C=t[1],s=0;s<C.length;s+=1){const l=D(t,C,s);R[s]?(R[s].p(l,n),g(R[s],1)):(R[s]=N(l),R[s].c(),g(R[s],1),R[s].m(e,null))}for(j(),s=C.length;s<R.length;s+=1)B(s);b()}(!k||1&n&&y!==(y=i(z("related-components",t[0]))+" svelte-j9fifh"))&&m(e,"class",y)},i(t){if(!k){g(s.$$.fragment,t);for(let t=0;t<C.length;t+=1)g(R[t]);k=!0}},o(t){h(s.$$.fragment,t),R=R.filter(Boolean);for(let t=0;t<R.length;t+=1)h(R[t]);k=!1},d(t){t&&$(e),x(s),v(R,t)}}}function G(t){let e;return{c(){e=y("Related Components")},l(t){e=k(t,"Related Components")},m(t,s){p(t,e,s)},d(t){t&&$(e)}}}function I(t){let e,s=t[2].name+"";return{c(){e=y(s)},l(t){e=k(t,s)},m(t,s){p(t,e,s)},p(t,n){2&n&&s!==(s=t[2].name+"")&&C(e,s)},d(t){t&&$(e)}}}function L(t){let e,s,n;return e=new R({props:{href:t[2].link,$$slots:{default:[I]},$$scope:{ctx:t}}}),{c(){l(e.$$.fragment),s=o()},l(t){c(e.$$.fragment,t),s=f(t)},m(t,l){u(e,t,l),p(t,s,l),n=!0},p(t,s){const n={};2&s&&(n.href=t[2].link),34&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){x(e,t),t&&$(s)}}}function N(t){let e,s;return e=new B({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),{c(){l(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,n){u(e,t,n),s=!0},p(t,s){const n={};34&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function S(t){let e,s,n=0!==t[1].length&&E(t);return{c(){n&&n.c(),e=w()},l(t){n&&n.l(t),e=w()},m(t,l){n&&n.m(t,l),p(t,e,l),s=!0},p(t,[s]){0!==t[1].length?n?(n.p(t,s),2&s&&g(n,1)):(n=E(t),n.c(),g(n,1),n.m(e.parentNode,e)):n&&(j(),h(n,1,1,(()=>{n=null})),b())},i(t){s||(g(n),s=!0)},o(t){h(n),s=!1},d(t){n&&n.d(t),t&&$(e)}}}function V(t,e,s){let{class:n=null}=e,{components:l}=e;return t.$$set=t=>{"class"in t&&s(0,n=t.class),"components"in t&&s(1,l=t.components)},[n,l]}class W extends t{constructor(t){super(),e(this,t,V,S,s,{class:0,components:1})}}export{W as R};
