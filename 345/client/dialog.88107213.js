import{S as s,i as l,s as t,j as a,l as n,m as e,t as c,p as i,q as o,h as r,r as u,u as d,k as $,b as m,v as f,w as p,d as h,e as g,W as k,f as v,g as C,P as b,Q as x,R as j,z as w,L as W,N as y,x as D,y as E,U as I}from"./client.0d203b8f.js";import{B as V}from"./button.6d3e0478.js";import{X as q}from"./x.fd20133f.js";import{c as z}from"./classes.2453fa25.js";const B=s=>({}),L=s=>({}),N=s=>({}),P=s=>({});function Q(s){let l,t;return l=new V({props:{neutral:!0,round:!0,class:"close",$$slots:{default:[R]},$$scope:{ctx:s}}}),l.$on("click",(function(){I(s[3])&&s[3].apply(this,arguments)})),{c(){a(l.$$.fragment)},l(s){n(l.$$.fragment,s)},m(s,a){e(l,s,a),t=!0},p(t,a){s=t;const n={};128&a&&(n.$$scope={dirty:a,ctx:s}),l.$set(n)},i(s){t||(c(l.$$.fragment,s),t=!0)},o(s){i(l.$$.fragment,s),t=!1},d(s){o(l,s)}}}function R(s){let l;const t=s[6]["close-icon"],r=W(t,s,s[7],P),u=r||function(s){let l,t;return l=new q({}),{c(){a(l.$$.fragment)},l(s){n(l.$$.fragment,s)},m(s,a){e(l,s,a),t=!0},i(s){t||(c(l.$$.fragment,s),t=!0)},o(s){i(l.$$.fragment,s),t=!1},d(s){o(l,s)}}}();return{c(){u&&u.c()},l(s){u&&u.l(s)},m(s,t){u&&u.m(s,t),l=!0},p(s,a){r&&r.p&&(!l||128&a)&&b(r,t,s,s[7],l?j(t,s[7],a,N):x(s[7]),P)},i(s){l||(c(u,s),l=!0)},o(s){i(u,s),l=!1},d(s){u&&u.d(s)}}}function S(s){let l,t,a,n,e;const o=s[6]["title-icon"],y=W(o,s,s[7],L);return{c(){l=r("div"),y&&y.c(),t=u(),a=d(s[4]),this.h()},l(n){l=$(n,"DIV",{class:!0});var e=m(l);y&&y.l(e),t=f(e),a=p(e,s[4]),e.forEach(h),this.h()},h(){g(l,"class",n=k(z("title",null!=s[3]&&"close-padded",s[1]))+" svelte-11akk9u")},m(s,n){v(s,l,n),y&&y.m(l,null),C(l,t),C(l,a),e=!0},p(s,t){y&&y.p&&(!e||128&t)&&b(y,o,s,s[7],e?j(o,s[7],t,B):x(s[7]),L),(!e||16&t)&&w(a,s[4]),(!e||10&t&&n!==(n=k(z("title",null!=s[3]&&"close-padded",s[1]))+" svelte-11akk9u"))&&g(l,"class",n)},i(s){e||(c(y,s),e=!0)},o(s){i(y,s),e=!1},d(s){s&&h(l),y&&y.d(s)}}}function U(s){let l,t,a,n,e,o=null!=s[3]&&Q(s),d=null!=s[4]&&S(s);const p=s[6].default,w=W(p,s,s[7],null);return{c(){l=r("div"),o&&o.c(),t=u(),d&&d.c(),a=u(),w&&w.c(),this.h()},l(s){l=$(s,"DIV",{class:!0});var n=m(l);o&&o.l(n),t=f(n),d&&d.l(n),a=f(n),w&&w.l(n),n.forEach(h),this.h()},h(){g(l,"class",n=k(z("dialog",s[0]))+" svelte-11akk9u"),y(l,"danger",s[2]),y(l,"constrain-width",s[5])},m(s,n){v(s,l,n),o&&o.m(l,null),C(l,t),d&&d.m(l,null),C(l,a),w&&w.m(l,null),e=!0},p(s,[r]){null!=s[3]?o?(o.p(s,r),8&r&&c(o,1)):(o=Q(s),o.c(),c(o,1),o.m(l,t)):o&&(D(),i(o,1,1,(()=>{o=null})),E()),null!=s[4]?d?(d.p(s,r),16&r&&c(d,1)):(d=S(s),d.c(),c(d,1),d.m(l,a)):d&&(D(),i(d,1,1,(()=>{d=null})),E()),w&&w.p&&(!e||128&r)&&b(w,p,s,s[7],e?j(p,s[7],r,null):x(s[7]),null),(!e||1&r&&n!==(n=k(z("dialog",s[0]))+" svelte-11akk9u"))&&g(l,"class",n),5&r&&y(l,"danger",s[2]),33&r&&y(l,"constrain-width",s[5])},i(s){e||(c(o),c(d),c(w,s),e=!0)},o(s){i(o),i(d),i(w,s),e=!1},d(s){s&&h(l),o&&o.d(),d&&d.d(),w&&w.d(s)}}}function A(s,l,t){let{$$slots:a={},$$scope:n}=l,{class:e=null}=l,{titleClass:c=null}=l,{danger:i=!1}=l,{closeCallback:o=null}=l,{title:r=null}=l,{constrainWidth:u=!1}=l;return s.$$set=s=>{"class"in s&&t(0,e=s.class),"titleClass"in s&&t(1,c=s.titleClass),"danger"in s&&t(2,i=s.danger),"closeCallback"in s&&t(3,o=s.closeCallback),"title"in s&&t(4,r=s.title),"constrainWidth"in s&&t(5,u=s.constrainWidth),"$$scope"in s&&t(7,n=s.$$scope)},[e,c,i,o,r,u,a,n]}var F=class extends s{constructor(s){super(),l(this,s,A,U,t,{class:0,titleClass:1,danger:2,closeCallback:3,title:4,constrainWidth:5})}};export{F as D};
