import{S as t,i as n,s,j as e,l as o,m as a,t as l,p as c,q as r,J as i,X as m,a0 as p,h as f,r as $,k as u,b as h,v as d,d as g,e as b,W as v,N as x,f as y,g as L,x as O,y as j,T as Q,Z as w,_ as S,a7 as I,H as E,I as k,K as M,a1 as D,u as V,w as C,z as T,L as A,P as B,Q as P,R as q,O as z,U as H}from"./client.f115d5bd.js";import{B as J}from"./button.8b5fb871.js";import{C as K}from"./chip.52ff2509.js";import{A as N,c as R,M as U}from"./autocomplete-field.0494b904.js";import{X as W}from"./x.8bc3e87b.js";import{L as X}from"./loading.1c219e5a.js";import{c as Z}from"./classes.2453fa25.js";import{p as _}from"./plural-s.31bb9da9.js";const F=t=>({}),G=t=>({slot:"too-many-options"}),Y=t=>({}),tt=t=>({slot:"not-enough-input"}),nt=t=>({}),st=t=>({}),et=t=>({}),ot=t=>({slot:"loading-options"}),at=t=>({}),lt=t=>({}),ct=t=>({loadMoreOptions:131072&t}),rt=t=>({loadMoreOptions:t[17]});function it(t,n,s){const e=t.slice();return e[18]=n[s],e}function mt(t){let n,s;return n=new W({}),{c(){e(n.$$.fragment)},l(t){o(n.$$.fragment,t)},m(t,e){a(n,t,e),s=!0},i(t){s||(l(n.$$.fragment,t),s=!0)},o(t){c(n.$$.fragment,t),s=!1},d(t){r(n,t)}}}function pt(t){let n,s,i,m,p=t[18].name+"";return i=new J({props:{neutral:!0,round:!0,small:!0,$$slots:{default:[mt]},$$scope:{ctx:t}}}),i.$on("click",(function(){return t[10](t[18])})),{c(){n=V(p),s=$(),e(i.$$.fragment)},l(t){n=C(t,p),s=d(t),o(i.$$.fragment,t)},m(t,e){y(t,n,e),y(t,s,e),a(i,t,e),m=!0},p(s,e){t=s,(!m||1&e)&&p!==(p=t[18].name+"")&&T(n,p);const o={};32768&e&&(o.$$scope={dirty:e,ctx:t}),i.$set(o)},i(t){m||(l(i.$$.fragment,t),m=!0)},o(t){c(i.$$.fragment,t),m=!1},d(t){t&&g(n),t&&g(s),r(i,t)}}}function ft(t){let n,s;return n=new K({props:{noPadding:!0,$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){e(n.$$.fragment)},l(t){o(n.$$.fragment,t)},m(t,e){a(n,t,e),s=!0},p(t,s){const e={};32769&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e)},i(t){s||(l(n.$$.fragment,t),s=!0)},o(t){c(n.$$.fragment,t),s=!1},d(t){r(n,t)}}}function $t(t){let n;const s=t[9]["too-many-options"],e=A(s,t,t[15],G),o=e||function(t){let n,s,e,o,a,l=_(t[4])+"";return{c(){n=f("div"),s=V("Cannot select more than\n        "),e=V(t[4]),o=V("\n        option"),a=V(l),this.h()},l(c){n=u(c,"DIV",{class:!0});var r=h(n);s=C(r,"Cannot select more than\n        "),e=C(r,t[4]),o=C(r,"\n        option"),a=C(r,l),r.forEach(g),this.h()},h(){b(n,"class","notice svelte-1b94m2")},m(t,l){y(t,n,l),L(n,s),L(n,e),L(n,o),L(n,a)},p(t,n){16&n&&T(e,t[4]),16&n&&l!==(l=_(t[4])+"")&&T(a,l)},d(t){t&&g(n)}}}(t);return{c(){o&&o.c()},l(t){o&&o.l(t)},m(t,s){o&&o.m(t,s),n=!0},p(t,a){e?e.p&&(!n||32768&a)&&B(e,s,t,t[15],n?q(s,t[15],a,F):P(t[15]),G):o&&o.p&&(!n||16&a)&&o.p(t,n?a:-1)},i(t){n||(l(o,t),n=!0)},o(t){c(o,t),n=!1},d(t){o&&o.d(t)}}}function ut(t){let n;const s=t[9]["not-enough-input"],e=A(s,t,t[15],tt),o=e||function(t){let n,s,e,o,a,l,c=_(t[3])+"";return{c(){n=f("div"),s=V("Type\n        "),e=V(t[3]),o=V("\n        character"),a=V(c),l=V("\n        to search"),this.h()},l(r){n=u(r,"DIV",{class:!0});var i=h(n);s=C(i,"Type\n        "),e=C(i,t[3]),o=C(i,"\n        character"),a=C(i,c),l=C(i,"\n        to search"),i.forEach(g),this.h()},h(){b(n,"class","notice svelte-1b94m2")},m(t,c){y(t,n,c),L(n,s),L(n,e),L(n,o),L(n,a),L(n,l)},p(t,n){8&n&&T(e,t[3]),8&n&&c!==(c=_(t[3])+"")&&T(a,c)},d(t){t&&g(n)}}}(t);return{c(){o&&o.c()},l(t){o&&o.l(t)},m(t,s){o&&o.m(t,s),n=!0},p(t,a){e?e.p&&(!n||32768&a)&&B(e,s,t,t[15],n?q(s,t[15],a,Y):P(t[15]),tt):o&&o.p&&(!n||8&a)&&o.p(t,n?a:-1)},i(t){n||(l(o,t),n=!0)},o(t){c(o,t),n=!1},d(t){o&&o.d(t)}}}function ht(t){let n,s,i,m;s=new X({});const p=t[9]["loading-message"],v=A(p,t,t[15],st),x=v||function(t){let n;return{c(){n=V("Loading...")},l(t){n=C(t,"Loading...")},m(t,s){y(t,n,s)},d(t){t&&g(n)}}}();return{c(){n=f("li"),e(s.$$.fragment),i=$(),x&&x.c(),this.h()},l(t){n=u(t,"LI",{class:!0});var e=h(n);o(s.$$.fragment,e),i=d(e),x&&x.l(e),e.forEach(g),this.h()},h(){b(n,"class","loading-options svelte-1b94m2")},m(t,e){y(t,n,e),a(s,n,null),L(n,i),x&&x.m(n,null),m=!0},p(t,n){v&&v.p&&(!m||32768&n)&&B(v,p,t,t[15],m?q(p,t[15],n,nt):P(t[15]),st)},i(t){m||(l(s.$$.fragment,t),l(x,t),m=!0)},o(t){c(s.$$.fragment,t),c(x,t),m=!1},d(t){t&&g(n),r(s),x&&x.d(t)}}}function dt(t){let n;const s=t[9]["loading-options"],e=A(s,t,t[15],ot),o=e||ht(t);return{c(){o&&o.c()},l(t){o&&o.l(t)},m(t,s){o&&o.m(t,s),n=!0},p(t,a){e?e.p&&(!n||32768&a)&&B(e,s,t,t[15],n?q(s,t[15],a,et):P(t[15]),ot):o&&o.p&&(!n||32768&a)&&o.p(t,n?a:-1)},i(t){n||(l(o,t),n=!0)},o(t){c(o,t),n=!1},d(t){o&&o.d(t)}}}function gt(t){let n,s,i;n=new U({});const m=t[9]["load-more-options-message"],p=A(m,t,t[15],lt),f=p||function(t){let n;return{c(){n=V("load more options")},l(t){n=C(t,"load more options")},m(t,s){y(t,n,s)},d(t){t&&g(n)}}}();return{c(){e(n.$$.fragment),s=$(),f&&f.c()},l(t){o(n.$$.fragment,t),s=d(t),f&&f.l(t)},m(t,e){a(n,t,e),y(t,s,e),f&&f.m(t,e),i=!0},p(t,n){p&&p.p&&(!i||32768&n)&&B(p,m,t,t[15],i?q(m,t[15],n,at):P(t[15]),lt)},i(t){i||(l(n.$$.fragment,t),l(f,t),i=!0)},o(t){c(n.$$.fragment,t),c(f,t),i=!1},d(t){r(n,t),t&&g(s),f&&f.d(t)}}}function bt(t){let n,s;const i=t[9]["more-options"],m=A(i,t,t[15],rt),p=m||function(t){let n,s,i,m,p,$;return s=new J({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),s.$on("click",(function(){H(t[17])&&t[17].apply(this,arguments)})),{c(){n=f("div"),e(s.$$.fragment)},l(t){n=u(t,"DIV",{});var e=h(n);o(s.$$.fragment,e),e.forEach(g)},m(e,o){y(e,n,o),a(s,n,null),m=!0,p||($=z(i=R.call(null,n,{callback:t[17]})),p=!0)},p(n,e){t=n;const o={};32768&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o),i&&H(i.update)&&131072&e&&i.update.call(null,{callback:t[17]})},i(t){m||(l(s.$$.fragment,t),m=!0)},o(t){c(s.$$.fragment,t),m=!1},d(t){t&&g(n),r(s),p=!1,$()}}}(t);return{c(){n=f("li"),p&&p.c(),this.h()},l(t){n=u(t,"LI",{class:!0,slot:!0});var s=h(n);p&&p.l(s),s.forEach(g),this.h()},h(){b(n,"class","more-options svelte-1b94m2"),b(n,"slot","more-options")},m(t,e){y(t,n,e),p&&p.m(n,null),s=!0},p(t,n){m?m.p&&(!s||163840&n)&&B(m,i,t,t[15],s?q(i,t[15],n,ct):P(t[15]),rt):p&&p.p&&(!s||163840&n)&&p.p(t,s?n:-1)},i(t){s||(l(p,t),s=!0)},o(t){c(p,t),s=!1},d(t){t&&g(n),p&&p.d(t)}}}function vt(t){let n,s,E,k,M,D,V,C,T=t[0],A=[];for(let n=0;n<T.length;n+=1)A[n]=ft(it(t,T,n));const B=t=>c(A[t],1,1,(()=>{A[t]=null})),P=[{minSearchLength:t[3]},{maxOptions:t[4]},{disabled:t[5]},t[8]];function q(n){t[11](n)}function z(n){t[12](n)}function H(n){t[13](n)}let J={$$slots:{"more-options":[bt,({loadMoreOptions:t})=>({17:t}),({loadMoreOptions:t})=>t?131072:0],"loading-options":[dt],"not-enough-input":[ut],"too-many-options":[$t]},$$scope:{ctx:t}};for(let t=0;t<P.length;t+=1)J=i(J,P[t]);return void 0!==t[0]&&(J.selection=t[0]),void 0!==t[1]&&(J.searchQuery=t[1]),void 0!==t[6]&&(J.focus=t[6]),E=new N({props:J}),m.push((()=>p(E,"selection",q))),m.push((()=>p(E,"searchQuery",z))),m.push((()=>p(E,"focus",H))),E.$on("change",t[14]),{c(){n=f("div");for(let t=0;t<A.length;t+=1)A[t].c();s=$(),e(E.$$.fragment),this.h()},l(t){n=u(t,"DIV",{class:!0});var e=h(n);for(let t=0;t<A.length;t+=1)A[t].l(e);s=d(e),o(E.$$.fragment,e),e.forEach(g),this.h()},h(){b(n,"class",V=v(Z("autocomplete",t[2]))+" svelte-1b94m2"),x(n,"focus",t[6]),x(n,"disabled",t[5])},m(t,e){y(t,n,e);for(let t=0;t<A.length;t+=1)A[t].m(n,null);L(n,s),a(E,n,null),C=!0},p(t,[e]){if(129&e){let o;for(T=t[0],o=0;o<T.length;o+=1){const a=it(t,T,o);A[o]?(A[o].p(a,e),l(A[o],1)):(A[o]=ft(a),A[o].c(),l(A[o],1),A[o].m(n,s))}for(O(),o=T.length;o<A.length;o+=1)B(o);j()}const o=312&e?Q(P,[8&e&&{minSearchLength:t[3]},16&e&&{maxOptions:t[4]},32&e&&{disabled:t[5]},256&e&&w(t[8])]):{};163864&e&&(o.$$scope={dirty:e,ctx:t}),!k&&1&e&&(k=!0,o.selection=t[0],S((()=>k=!1))),!M&&2&e&&(M=!0,o.searchQuery=t[1],S((()=>M=!1))),!D&&64&e&&(D=!0,o.focus=t[6],S((()=>D=!1))),E.$set(o),(!C||4&e&&V!==(V=v(Z("autocomplete",t[2]))+" svelte-1b94m2"))&&b(n,"class",V),68&e&&x(n,"focus",t[6]),36&e&&x(n,"disabled",t[5])},i(t){if(!C){for(let t=0;t<T.length;t+=1)l(A[t]);l(E.$$.fragment,t),C=!0}},o(t){A=A.filter(Boolean);for(let t=0;t<A.length;t+=1)c(A[t]);c(E.$$.fragment,t),C=!1},d(t){t&&g(n),I(A,t),r(E)}}}function xt(t,n,s){const e=["class","selection","minSearchLength","maxOptions","searchQuery","disabled"];let o=E(n,e),{$$slots:a={},$$scope:l}=n,{class:c=null}=n,{selection:r=[]}=n,{minSearchLength:m=3}=n,{maxOptions:p=1/0}=n,{searchQuery:f=""}=n,{disabled:$=!1}=n,u=!1;function h(t){s(0,r=r.filter((n=>n!==t))),d("change",{value:r})}const d=k();return t.$$set=t=>{n=i(i({},n),M(t)),s(8,o=E(n,e)),"class"in t&&s(2,c=t.class),"selection"in t&&s(0,r=t.selection),"minSearchLength"in t&&s(3,m=t.minSearchLength),"maxOptions"in t&&s(4,p=t.maxOptions),"searchQuery"in t&&s(1,f=t.searchQuery),"disabled"in t&&s(5,$=t.disabled),"$$scope"in t&&s(15,l=t.$$scope)},[r,f,c,m,p,$,u,h,o,a,t=>h(t),function(t){r=t,s(0,r)},function(t){f=t,s(1,f)},function(t){u=t,s(6,u)},function(n){D.call(this,t,n)},l]}var yt=class extends t{constructor(t){super(),n(this,t,xt,vt,s,{class:2,selection:0,minSearchLength:3,maxOptions:4,searchQuery:1,disabled:5})}};export{yt as A};
