import{S as e,i as t,s as l,h as n,r as s,k as a,b as r,v as o,d as c,e as i,N as h,f,g,P as u,Q as d,R as m,t as p,p as $,x as v,Y as w,$ as E,y as T,J as R,M as x,T as q,a7 as z,H as y,K as b,L as j,j as k,l as B,m as D,q as H,u as L,w as M,z as A}from"./client.9965e4e5.js";import{L as Y}from"./label.267df40e.js";function J(e,t,l){const n=e.slice();return n[6]=t[l],n}function K(e,t,l){const n=e.slice();return n[9]=t[l],n}const N=e=>({header:1&e,item:2&e}),O=e=>({header:e[9],item:e[6]});function P(e,t,l){const n=e.slice();return n[9]=t[l],n}const Q=e=>({header:1&e}),S=e=>({header:e[9]});function C(e){let t,l=e[9].text+"";return{c(){t=L(l)},l(e){t=M(e,l)},m(e,l){f(e,t,l)},p(e,n){1&n&&l!==(l=e[9].text+"")&&A(t,l)},d(e){e&&c(t)}}}function F(e,t){let l,v,w;const E=t[4]["header-item"],T=j(E,t,t[5],S),R=T||function(e){let t,l;return t=new Y({props:{$$slots:{default:[C]},$$scope:{ctx:e}}}),{c(){k(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,n){D(t,e,n),l=!0},p(e,l){const n={};33&l&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){l||(p(t.$$.fragment,e),l=!0)},o(e){$(t.$$.fragment,e),l=!1},d(e){H(t,e)}}}(t);return{key:e,first:null,c(){l=n("th"),R&&R.c(),v=s(),this.h()},l(e){l=a(e,"TH",{class:!0});var t=r(l);R&&R.l(t),v=o(t),t.forEach(c),this.h()},h(){i(l,"class","svelte-81z2q2"),h(l,"center","center"===t[9].align),h(l,"end","end"===t[9].align),this.first=l},m(e,t){f(e,l,t),R&&R.m(l,null),g(l,v),w=!0},p(e,n){t=e,T?T.p&&(!w||33&n)&&u(T,E,t,t[5],w?m(E,t[5],n,Q):d(t[5]),S):R&&R.p&&(!w||1&n)&&R.p(t,w?n:-1),1&n&&h(l,"center","center"===t[9].align),1&n&&h(l,"end","end"===t[9].align)},i(e){w||(p(R,e),w=!0)},o(e){$(R,e),w=!1},d(e){e&&c(l),R&&R.d(e)}}}function G(e,t){let l,s;const o=t[4].item,g=j(o,t,t[5],O),v=g||function(e){let t,l=e[6][e[9].value]+"";return{c(){t=L(l)},l(e){t=M(e,l)},m(e,l){f(e,t,l)},p(e,n){3&n&&l!==(l=e[6][e[9].value]+"")&&A(t,l)},d(e){e&&c(t)}}}(t);return{key:e,first:null,c(){l=n("td"),v&&v.c(),this.h()},l(e){l=a(e,"TD",{class:!0});var t=r(l);v&&v.l(t),t.forEach(c),this.h()},h(){i(l,"class","svelte-81z2q2"),h(l,"center","center"===t[9].align),h(l,"end","end"===t[9].align),this.first=l},m(e,t){f(e,l,t),v&&v.m(l,null),s=!0},p(e,n){t=e,g?g.p&&(!s||35&n)&&u(g,o,t,t[5],s?m(o,t[5],n,N):d(t[5]),O):v&&v.p&&(!s||3&n)&&v.p(t,s?n:-1),1&n&&h(l,"center","center"===t[9].align),1&n&&h(l,"end","end"===t[9].align)},i(e){s||(p(v,e),s=!0)},o(e){$(v,e),s=!1},d(e){e&&c(l),v&&v.d(e)}}}function I(e){let t,l,u,d=[],m=new Map,R=e[0];const x=e=>e[9].value;for(let t=0;t<R.length;t+=1){let l=K(e,R,t),n=x(l);m.set(n,d[t]=G(n,l))}return{c(){t=n("tr");for(let e=0;e<d.length;e+=1)d[e].c();l=s(),this.h()},l(e){t=a(e,"TR",{class:!0});var n=r(t);for(let e=0;e<d.length;e+=1)d[e].l(n);l=o(n),n.forEach(c),this.h()},h(){i(t,"class","svelte-81z2q2"),h(t,"alternating",e[2])},m(e,n){f(e,t,n);for(let e=0;e<d.length;e+=1)d[e].m(t,null);g(t,l),u=!0},p(e,n){35&n&&(R=e[0],v(),d=w(d,n,x,1,e,R,m,t,E,G,l,K),T()),4&n&&h(t,"alternating",e[2])},i(e){if(!u){for(let e=0;e<R.length;e+=1)p(d[e]);u=!0}},o(e){for(let e=0;e<d.length;e+=1)$(d[e]);u=!1},d(e){e&&c(t);for(let e=0;e<d.length;e+=1)d[e].d()}}}function U(e){let t,l,i,u,d,m,y=[],b=new Map,j=e[0];const k=e=>e[9].value;for(let t=0;t<j.length;t+=1){let l=P(e,j,t),n=k(l);b.set(n,y[t]=F(n,l))}let B=e[1],D=[];for(let t=0;t<B.length;t+=1)D[t]=I(J(e,B,t));const H=e=>$(D[e],1,1,(()=>{D[e]=null}));let L=[e[3]],M={};for(let e=0;e<L.length;e+=1)M=R(M,L[e]);return{c(){t=n("table"),l=n("thead"),i=n("tr");for(let e=0;e<y.length;e+=1)y[e].c();u=s(),d=n("tbody");for(let e=0;e<D.length;e+=1)D[e].c();this.h()},l(e){t=a(e,"TABLE",{});var n=r(t);l=a(n,"THEAD",{});var s=r(l);i=a(s,"TR",{});var h=r(i);for(let e=0;e<y.length;e+=1)y[e].l(h);h.forEach(c),s.forEach(c),u=o(n),d=a(n,"TBODY",{});var f=r(d);for(let e=0;e<D.length;e+=1)D[e].l(f);f.forEach(c),n.forEach(c),this.h()},h(){x(t,M),h(t,"svelte-81z2q2",!0)},m(e,n){f(e,t,n),g(t,l),g(l,i);for(let e=0;e<y.length;e+=1)y[e].m(i,null);g(t,u),g(t,d);for(let e=0;e<D.length;e+=1)D[e].m(d,null);m=!0},p(e,[l]){if(33&l&&(j=e[0],v(),y=w(y,l,k,1,e,j,b,i,E,F,null,P),T()),39&l){let t;for(B=e[1],t=0;t<B.length;t+=1){const n=J(e,B,t);D[t]?(D[t].p(n,l),p(D[t],1)):(D[t]=I(n),D[t].c(),p(D[t],1),D[t].m(d,null))}for(v(),t=B.length;t<D.length;t+=1)H(t);T()}x(t,M=q(L,[8&l&&e[3]])),h(t,"svelte-81z2q2",!0)},i(e){if(!m){for(let e=0;e<j.length;e+=1)p(y[e]);for(let e=0;e<B.length;e+=1)p(D[e]);m=!0}},o(e){for(let e=0;e<y.length;e+=1)$(y[e]);D=D.filter(Boolean);for(let e=0;e<D.length;e+=1)$(D[e]);m=!1},d(e){e&&c(t);for(let e=0;e<y.length;e+=1)y[e].d();z(D,e)}}}function V(e,t,l){const n=["headers","items","alternatingRows"];let s=y(t,n),{$$slots:a={},$$scope:r}=t,{headers:o=[]}=t,{items:c=[]}=t,{alternatingRows:i=!0}=t;return e.$$set=e=>{t=R(R({},t),b(e)),l(3,s=y(t,n)),"headers"in e&&l(0,o=e.headers),"items"in e&&l(1,c=e.items),"alternatingRows"in e&&l(2,i=e.alternatingRows),"$$scope"in e&&l(5,r=e.$$scope)},[o,c,i,s,a,r]}var W=class extends e{constructor(e){super(),t(this,e,V,U,l,{headers:0,items:1,alternatingRows:2})}};export{W as T};
