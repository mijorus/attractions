import{S as s,i as a,s as l,G as e,f as c,x as o,p as n,y as t,t as r,d as i,I as p,L as u,h as d,k as f,b as h,e as m,W as v,N as $,P as k,Q as y,R as C,o as w,a6 as b}from"./client.9a6ca202.js";import{c as x}from"./classes.2453fa25.js";const I=s=>({}),j=s=>({closeCallback:s[3]}),D=s=>({}),E=s=>({closeCallback:s[3]});function N(s){let a,l,e;const o=s[5].default,t=u(o,s,s[4],j);return{c(){a=d("div"),t&&t.c(),this.h()},l(s){a=f(s,"DIV",{class:!0});var l=h(a);t&&t.l(l),l.forEach(i),this.h()},h(){m(a,"class",l=v(x("modal-overlay",s[1]))+" svelte-rafkre"),$(a,"open",s[0])},m(s,l){c(s,a,l),t&&t.m(a,null),e=!0},p(s,c){t&&t.p&&(!e||16&c)&&k(t,o,s,s[4],e?C(o,s[4],c,I):y(s[4]),j),(!e||2&c&&l!==(l=v(x("modal-overlay",s[1]))+" svelte-rafkre"))&&m(a,"class",l),3&c&&$(a,"open",s[0])},i(s){e||(r(t,s),e=!0)},o(s){n(t,s),e=!1},d(s){s&&i(a),t&&t.d(s)}}}function V(s){let a,l,e,o,t;const p=s[5].default,I=u(p,s,s[4],E);return{c(){a=d("div"),I&&I.c(),this.h()},l(s){a=f(s,"DIV",{class:!0});var l=h(a);I&&I.l(l),l.forEach(i),this.h()},h(){m(a,"class",l=v(x("modal-overlay",s[1]))+" svelte-rafkre"),$(a,"open",s[0])},m(l,n){c(l,a,n),I&&I.m(a,null),e=!0,o||(t=w(a,"click",b(s[3])),o=!0)},p(s,c){I&&I.p&&(!e||16&c)&&k(I,p,s,s[4],e?C(p,s[4],c,D):y(s[4]),E),(!e||2&c&&l!==(l=v(x("modal-overlay",s[1]))+" svelte-rafkre"))&&m(a,"class",l),3&c&&$(a,"open",s[0])},i(s){e||(r(I,s),e=!0)},o(s){n(I,s),e=!1},d(s){s&&i(a),I&&I.d(s),o=!1,t()}}}function g(s){let a,l,p,u;const d=[V,N],f=[];function h(s,a){return s[2]?1:0}return a=h(s),l=f[a]=d[a](s),{c(){l.c(),p=e()},l(s){l.l(s),p=e()},m(s,l){f[a].m(s,l),c(s,p,l),u=!0},p(s,[e]){let c=a;a=h(s),a===c?f[a].p(s,e):(o(),n(f[c],1,1,(()=>{f[c]=null})),t(),l=f[a],l?l.p(s,e):(l=f[a]=d[a](s),l.c()),r(l,1),l.m(p.parentNode,p))},i(s){u||(r(l),u=!0)},o(s){n(l),u=!1},d(s){f[a].d(s),s&&i(p)}}}function G(s,a,l){let{$$slots:e={},$$scope:c}=a,{class:o=null}=a,{open:n=!1}=a,{noClickaway:t=!1}=a;const r=p();return s.$$set=s=>{"class"in s&&l(1,o=s.class),"open"in s&&l(0,n=s.open),"noClickaway"in s&&l(2,t=s.noClickaway),"$$scope"in s&&l(4,c=s.$$scope)},s.$$.update=()=>{1&s.$$.dirty&&r("change",{value:n})},[n,o,t,function(){l(0,n=!1)},c,e]}var L=class extends s{constructor(s){super(),a(this,s,G,g,l,{class:1,open:0,noClickaway:2})}};export{L as M};
