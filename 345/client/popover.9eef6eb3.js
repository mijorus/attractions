import{S as s,i as a,s as o,L as t,h as l,r as e,k as c,b as p,v as n,d as r,e as i,W as v,f as u,g as d,P as f,Q as h,R as $,t as m,p as T}from"./client.11ba3cac.js";import{c as O}from"./classes.2453fa25.js";var b=Object.freeze({TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"});const C=s=>({}),P=s=>({});function j(s){let a,o,b,j,E,I;const g=s[4].default,x=t(g,s,s[3],null),D=s[4]["popover-content"],L=t(D,s,s[3],P);return{c(){a=l("div"),x&&x.c(),o=e(),b=l("div"),L&&L.c(),this.h()},l(s){a=c(s,"DIV",{class:!0});var t=p(a);x&&x.l(t),o=n(t),b=c(t,"DIV",{class:!0});var l=p(b);L&&L.l(l),l.forEach(r),t.forEach(r),this.h()},h(){i(b,"class",j=v(O("popover",s[2],s[1]))+" svelte-d7tcpu"),i(a,"class",E=v(O("popover-container",s[0]))+" svelte-d7tcpu")},m(s,t){u(s,a,t),x&&x.m(a,null),d(a,o),d(a,b),L&&L.m(b,null),I=!0},p(s,[o]){x&&x.p&&(!I||8&o)&&f(x,g,s,s[3],I?$(g,s[3],o,null):h(s[3]),null),L&&L.p&&(!I||8&o)&&f(L,D,s,s[3],I?$(D,s[3],o,C):h(s[3]),P),(!I||6&o&&j!==(j=v(O("popover",s[2],s[1]))+" svelte-d7tcpu"))&&i(b,"class",j),(!I||1&o&&E!==(E=v(O("popover-container",s[0]))+" svelte-d7tcpu"))&&i(a,"class",E)},i(s){I||(m(x,s),m(L,s),I=!0)},o(s){T(x,s),T(L,s),I=!1},d(s){s&&r(a),x&&x.d(s),L&&L.d(s)}}}function E(s,a,o){let{$$slots:t={},$$scope:l}=a,{class:e=null}=a,{popoverClass:c=null}=a,{position:p=b.TOP}=a;return s.$$set=s=>{"class"in s&&o(0,e=s.class),"popoverClass"in s&&o(1,c=s.popoverClass),"position"in s&&o(2,p=s.position),"$$scope"in s&&o(3,l=s.$$scope)},[e,c,p,l,t]}var I=class extends s{constructor(s){super(),a(this,s,E,j,o,{class:0,popoverClass:1,position:2})}};export{I as P,b as a};
