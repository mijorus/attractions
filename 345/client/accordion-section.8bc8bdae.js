import{S as s,i as l,s as e,L as a,J as t,h as n,k as c,b as o,d as r,M as p,N as u,f as i,P as $,Q as m,R as f,T as h,t as d,p as g,H as v,K as b,j,l as x,m as q,q as w,r as E,v as I,e as L,W as k,I as N,u as O,w as P,z as S}from"./client.a9d17a70.js";import{c as T}from"./classes.2453fa25.js";import{B as y}from"./button.f879caeb.js";const z=s=>({}),A=s=>({closeOtherPanels:s[1]});function B(s){let l,e,v;const b=s[5].default,j=a(b,s,s[4],A);let x=[{class:e=T("accordion",s[0])},s[2]],q={};for(let s=0;s<x.length;s+=1)q=t(q,x[s]);return{c(){l=n("ul"),j&&j.c(),this.h()},l(s){l=c(s,"UL",{class:!0});var e=o(l);j&&j.l(e),e.forEach(r),this.h()},h(){p(l,q),u(l,"svelte-1mw2pgr",!0)},m(s,e){i(s,l,e),j&&j.m(l,null),v=!0},p(s,[a]){j&&j.p&&(!v||16&a)&&$(j,b,s,s[4],v?f(b,s[4],a,z):m(s[4]),A),p(l,q=h(x,[(!v||1&a&&e!==(e=T("accordion",s[0])))&&{class:e},4&a&&s[2]])),u(l,"svelte-1mw2pgr",!0)},i(s){v||(d(j,s),v=!0)},o(s){g(j,s),v=!1},d(s){s&&r(l),j&&j.d(s)}}}function C(s,l,e){const a=["class","multiple"];let n=v(l,a),{$$slots:c={},$$scope:o}=l,{class:r=null}=l,{multiple:p=!1}=l,u=null;return s.$$set=s=>{l=t(t({},l),b(s)),e(2,n=v(l,a)),"class"in s&&e(0,r=s.class),"multiple"in s&&e(3,p=s.multiple),"$$scope"in s&&e(4,o=s.$$scope)},[r,function({detail:s}){null==u||u===s||p||u.close(),u=s},n,p,o,c]}var H=class extends s{constructor(s){super(),l(this,s,C,B,e,{class:0,multiple:3})}};const J=s=>({}),K=s=>({toggle:s[3].toggle});function M(s){let l;return{c(){l=O(s[2])},l(e){l=P(e,s[2])},m(s,e){i(s,l,e)},p(s,e){4&e&&S(l,s[2])},d(s){s&&r(l)}}}function Q(s){let l,e,t,p,h;const v=s[4].handle,b=a(v,s,s[5],K),N=b||function(s){let l,e;return l=new y({props:{$$slots:{default:[M]},$$scope:{ctx:s}}}),l.$on("click",s[3].toggle),{c(){j(l.$$.fragment)},l(s){x(l.$$.fragment,s)},m(s,a){q(l,s,a),e=!0},p(s,e){const a={};36&e&&(a.$$scope={dirty:e,ctx:s}),l.$set(a)},i(s){e||(d(l.$$.fragment,s),e=!0)},o(s){g(l.$$.fragment,s),e=!1},d(s){w(l,s)}}}(s),O=s[4].default,P=a(O,s,s[5],null);return{c(){l=n("li"),N&&N.c(),t=E(),p=n("section"),P&&P.c(),this.h()},l(s){l=c(s,"LI",{class:!0});var e=o(l);N&&N.l(e),e.forEach(r),t=I(s),p=c(s,"SECTION",{class:!0});var a=o(p);P&&P.l(a),a.forEach(r),this.h()},h(){L(l,"class",e=k(T("panel",s[1]))+" svelte-16quehj"),u(l,"open",s[0]),L(p,"class","svelte-16quehj")},m(s,e){i(s,l,e),N&&N.m(l,null),i(s,t,e),i(s,p,e),P&&P.m(p,null),h=!0},p(s,[a]){b?b.p&&(!h||32&a)&&$(b,v,s,s[5],h?f(v,s[5],a,J):m(s[5]),K):N&&N.p&&(!h||4&a)&&N.p(s,h?a:-1),(!h||2&a&&e!==(e=k(T("panel",s[1]))+" svelte-16quehj"))&&L(l,"class",e),3&a&&u(l,"open",s[0]),P&&P.p&&(!h||32&a)&&$(P,O,s,s[5],h?f(O,s[5],a,null):m(s[5]),null)},i(s){h||(d(N,s),d(P,s),h=!0)},o(s){g(N,s),g(P,s),h=!1},d(s){s&&r(l),N&&N.d(s),s&&r(t),s&&r(p),P&&P.d(s)}}}function R(s,l,e){let{$$slots:a={},$$scope:t}=l,{class:n=null}=l,{label:c=null}=l,{open:o=!1}=l;const r={close(){e(0,o=!1)},toggle(){p(o?"panel-close":"panel-open",r),e(0,o=!o)}},p=N();return s.$$set=s=>{"class"in s&&e(1,n=s.class),"label"in s&&e(2,c=s.label),"open"in s&&e(0,o=s.open),"$$scope"in s&&e(5,t=s.$$scope)},[o,n,c,r,a,t]}var U=class extends s{constructor(s){super(),l(this,s,R,Q,e,{class:1,label:2,open:0})}};export{H as A,U as a};
