import{S as t,i as n,s as e,a as o,c as l,b as s,d as c,e as r,f as a,g as i,n as u,j as p,l as h,m as f,t as m,p as d,q as $,H as g,I as v,J as k,K as y,h as b,r as x,k as w,v as O,M as E,N as L,ad as C,o as j,T as I,V as N,X as Q,G as S,x as M,y as P,L as B,P as D,Q as T,R as V,u as q,w as A,B as R,C as U,Y as z,$ as G,z as H,O as J}from"./client.11ba3cac.js";import{D as K,a as X}from"./dropdown.c5e263ee.js";import{B as Y}from"./button.b0dfee79.js";import{L as F}from"./loading.96607233.js";import{A as W}from"./autocomplete-option.e77263b5.js";import{p as Z}from"./plural-s.31bb9da9.js";import{c as _}from"./classes.2453fa25.js";function tt(t){let n,e,p,h;return{c(){n=o("svg"),e=o("circle"),p=o("circle"),h=o("circle"),this.h()},l(t){n=l(t,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0});var o=s(n);e=l(o,"circle",{cx:!0,cy:!0,r:!0}),s(e).forEach(c),p=l(o,"circle",{cx:!0,cy:!0,r:!0}),s(p).forEach(c),h=l(o,"circle",{cx:!0,cy:!0,r:!0}),s(h).forEach(c),o.forEach(c),this.h()},h(){r(e,"cx","12"),r(e,"cy","12"),r(e,"r","1"),r(p,"cx","19"),r(p,"cy","12"),r(p,"r","1"),r(h,"cx","5"),r(h,"cy","12"),r(h,"r","1"),r(n,"xmlns","http://www.w3.org/2000/svg"),r(n,"width","24"),r(n,"height","24"),r(n,"viewBox","0 0 24 24"),r(n,"fill","none"),r(n,"stroke","currentColor"),r(n,"stroke-width","2"),r(n,"stroke-linecap","round"),r(n,"stroke-linejoin","round")},m(t,o){a(t,n,o),i(n,e),i(n,p),i(n,h)},p:u,i:u,o:u,d(t){t&&c(n)}}}var nt=class extends t{constructor(t){super(),n(this,t,null,tt,e,{})}};function et(t,{callback:n,args:e=[]}){let o=null;return"undefined"!=typeof IntersectionObserver&&(o=new IntersectionObserver((function(t,o){t.forEach((t=>{t.isIntersecting&&n(...e)}))}),{root:null,threshold:.5}),o.observe(t)),{destroy(){null!=o&&o.disconnect()}}}const ot=t=>({}),lt=t=>({}),st=t=>({}),ct=t=>({loadMoreOptions:t[13]});function rt(t,n,e){const o=t.slice();return o[28]=n[e],o}function at(t,n,e){const o=t.slice();return o[32]=n[e],o}const it=t=>({}),ut=t=>({}),pt=t=>({}),ht=t=>({}),ft=t=>({}),mt=t=>({}),dt=t=>({}),$t=t=>({}),gt=t=>({}),vt=t=>({});function kt(t){let n;const e=t[18]["close-message"],o=B(e,t,t[24],vt),l=o||function(t){let n;return{c(){n=q("close the options")},l(t){n=A(t,"close the options")},m(t,e){a(t,n,e)},d(t){t&&c(n)}}}();return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,e){l&&l.m(t,e),n=!0},p(t,l){o&&o.p&&(!n||16777216&l[0])&&D(o,e,t,t[24],n?V(e,t[24],l,gt):T(t[24]),vt)},i(t){n||(m(l,t),n=!0)},o(t){d(l,t),n=!1},d(t){l&&l.d(t)}}}function yt(t){let n,e,o,l=[],u=new Map,p=t[9];const h=t=>t[28];for(let n=0;n<p.length;n+=1){let e=rt(t,p,n),o=h(e);u.set(o,l[n]=Ct(o,e))}let f=t[8]&&null!=t[10]&&jt(t);return{c(){n=b("ul");for(let t=0;t<l.length;t+=1)l[t].c();e=x(),f&&f.c(),this.h()},l(t){n=w(t,"UL",{class:!0});var o=s(n);for(let t=0;t<l.length;t+=1)l[t].l(o);e=O(o),f&&f.l(o),o.forEach(c),this.h()},h(){r(n,"class","options-list svelte-1lud1my")},m(t,s){a(t,n,s);for(let t=0;t<l.length;t+=1)l[t].m(n,null);i(n,e),f&&f.m(n,null),o=!0},p(t,o){16798273&o[0]&&(p=t[9],M(),l=z(l,o,h,1,t,p,u,n,G,Ct,e,rt),P()),t[8]&&null!=t[10]?f?(f.p(t,o),1280&o[0]&&m(f,1)):(f=jt(t),f.c(),m(f,1),f.m(n,null)):f&&(M(),d(f,1,1,(()=>{f=null})),P())},i(t){if(!o){for(let t=0;t<p.length;t+=1)m(l[t]);m(f),o=!0}},o(t){for(let t=0;t<l.length;t+=1)d(l[t]);d(f),o=!1},d(t){t&&c(n);for(let t=0;t<l.length;t+=1)l[t].d();f&&f.d()}}}function bt(t){let n;const e=t[18]["not-enough-input"],o=B(e,t,t[24],mt),l=o||function(t){let n,e,o,l,u,p,h=Z(t[4])+"";return{c(){n=b("div"),e=q("Type\n          "),o=q(t[4]),l=q("\n          character"),u=q(h),p=q("\n          to search"),this.h()},l(r){n=w(r,"DIV",{class:!0});var a=s(n);e=A(a,"Type\n          "),o=A(a,t[4]),l=A(a,"\n          character"),u=A(a,h),p=A(a,"\n          to search"),a.forEach(c),this.h()},h(){r(n,"class","notice svelte-1lud1my")},m(t,s){a(t,n,s),i(n,e),i(n,o),i(n,l),i(n,u),i(n,p)},p(t,n){16&n[0]&&H(o,t[4]),16&n[0]&&h!==(h=Z(t[4])+"")&&H(u,h)},d(t){t&&c(n)}}}(t);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,e){l&&l.m(t,e),n=!0},p(t,s){o?o.p&&(!n||16777216&s[0])&&D(o,e,t,t[24],n?V(e,t[24],s,ft):T(t[24]),mt):l&&l.p&&(!n||16&s[0])&&l.p(t,n?s:[-1,-1])},i(t){n||(m(l,t),n=!0)},o(t){d(l,t),n=!1},d(t){l&&l.d(t)}}}function xt(t){let n;const e=t[18]["too-many-options"],o=B(e,t,t[24],$t),l=o||function(t){let n,e,o,l,u,p=Z(t[5])+"";return{c(){n=b("div"),e=q("Cannot select more than\n          "),o=q(t[5]),l=q("\n          option"),u=q(p),this.h()},l(r){n=w(r,"DIV",{class:!0});var a=s(n);e=A(a,"Cannot select more than\n          "),o=A(a,t[5]),l=A(a,"\n          option"),u=A(a,p),a.forEach(c),this.h()},h(){r(n,"class","notice svelte-1lud1my")},m(t,s){a(t,n,s),i(n,e),i(n,o),i(n,l),i(n,u)},p(t,n){32&n[0]&&H(o,t[5]),32&n[0]&&p!==(p=Z(t[5])+"")&&H(u,p)},d(t){t&&c(n)}}}(t);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,e){l&&l.m(t,e),n=!0},p(t,s){o?o.p&&(!n||16777216&s[0])&&D(o,e,t,t[24],n?V(e,t[24],s,dt):T(t[24]),$t):l&&l.p&&(!n||32&s[0])&&l.p(t,n?s:[-1,-1])},i(t){n||(m(l,t),n=!0)},o(t){d(l,t),n=!1},d(t){l&&l.d(t)}}}function wt(t){return{c:u,l:u,m:u,p:u,i:u,o:u,d:u}}function Ot(t){let n,e,o=[],l=new Map,s=t[12](t[31]);const r=t=>t[32];for(let n=0;n<s.length;n+=1){let e=at(t,s,n),c=r(e);l.set(c,o[n]=Et(c,e))}return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=S()},l(t){for(let n=0;n<o.length;n+=1)o[n].l(t);n=S()},m(t,l){for(let n=0;n<o.length;n+=1)o[n].m(t,l);a(t,n,l),e=!0},p(t,e){21057&e[0]&&(s=t[12](t[31]),M(),o=z(o,e,r,1,t,s,l,n.parentNode,G,Et,n,at),P())},i(t){if(!e){for(let t=0;t<s.length;t+=1)m(o[t]);e=!0}},o(t){for(let t=0;t<o.length;t+=1)d(o[t]);e=!1},d(t){for(let n=0;n<o.length;n+=1)o[n].d(t);t&&c(n)}}}function Et(t,n){let e,o,l,s;function r(){return n[22](n[32])}var i=n[6];function u(t){return{props:{option:t[32],query:t[0]}}}return i&&(o=new i(u(n)),o.$on("click",r)),{key:t,first:null,c(){e=S(),o&&p(o.$$.fragment),l=S(),this.h()},l(t){e=S(),o&&h(o.$$.fragment,t),l=S(),this.h()},h(){this.first=e},m(t,n){a(t,e,n),o&&f(o,t,n),a(t,l,n),s=!0},p(t,e){n=t;const s={};if(512&e[0]&&(s.option=n[32]),1&e[0]&&(s.query=n[0]),i!==(i=n[6])){if(o){M();const t=o;d(t.$$.fragment,1,0,(()=>{$(t,1)})),P()}i?(o=new i(u(n)),o.$on("click",r),p(o.$$.fragment),m(o.$$.fragment,1),f(o,l.parentNode,l)):o=null}else i&&o.$set(s)},i(t){s||(o&&m(o.$$.fragment,t),s=!0)},o(t){o&&d(o.$$.fragment,t),s=!1},d(t){t&&c(e),t&&c(l),o&&$(o,t)}}}function Lt(t){let n;const e=t[18]["loading-options"],o=B(e,t,t[24],ht),l=o||function(t){let n,e,o,l;e=new F({});const u=t[18]["loading-message"],g=B(u,t,t[24],ut),v=g||function(t){let n;return{c(){n=q("Loading...")},l(t){n=A(t,"Loading...")},m(t,e){a(t,n,e)},d(t){t&&c(n)}}}();return{c(){n=b("li"),p(e.$$.fragment),o=x(),v&&v.c(),this.h()},l(t){n=w(t,"LI",{class:!0});var l=s(n);h(e.$$.fragment,l),o=O(l),v&&v.l(l),l.forEach(c),this.h()},h(){r(n,"class","loading-options svelte-1lud1my")},m(t,s){a(t,n,s),f(e,n,null),i(n,o),v&&v.m(n,null),l=!0},p(t,n){g&&g.p&&(!l||16777216&n[0])&&D(g,u,t,t[24],l?V(u,t[24],n,it):T(t[24]),ut)},i(t){l||(m(e.$$.fragment,t),m(v,t),l=!0)},o(t){d(e.$$.fragment,t),d(v,t),l=!1},d(t){t&&c(n),$(e),v&&v.d(t)}}}(t);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,e){l&&l.m(t,e),n=!0},p(t,s){o?o.p&&(!n||16777216&s[0])&&D(o,e,t,t[24],n?V(e,t[24],s,pt):T(t[24]),ht):l&&l.p&&(!n||16777216&s[0])&&l.p(t,n?s:[-1,-1])},i(t){n||(m(l,t),n=!0)},o(t){d(l,t),n=!1},d(t){l&&l.d(t)}}}function Ct(t,n){let e,o,l,s,r={ctx:n,current:null,token:null,hasCatch:!1,pending:Lt,then:Ot,catch:wt,value:31,blocks:[,,,]};return R(l=n[28],r),{key:t,first:null,c(){e=S(),o=S(),r.block.c(),this.h()},l(t){e=S(),o=S(),r.block.l(t),this.h()},h(){this.first=e},m(t,n){a(t,e,n),a(t,o,n),r.block.m(t,r.anchor=n),r.mount=()=>o.parentNode,r.anchor=o,s=!0},p(t,e){n=t,r.ctx=n,512&e[0]&&l!==(l=n[28])&&R(l,r)||U(r,n,e)},i(t){s||(m(r.block),s=!0)},o(t){for(let t=0;t<3;t+=1){const n=r.blocks[t];d(n)}s=!1},d(t){t&&c(e),t&&c(o),r.block.d(t),r.token=null,r=null}}}function jt(t){let n,e,o,l={ctx:t,current:null,token:null,hasCatch:!1,pending:St,then:Nt,catch:It,value:27,blocks:[,,,]};return R(e=Promise.all(t[9]),l),{c(){n=S(),l.block.c()},l(t){n=S(),l.block.l(t)},m(t,e){a(t,n,e),l.block.m(t,l.anchor=e),l.mount=()=>n.parentNode,l.anchor=n,o=!0},p(n,o){t=n,l.ctx=t,512&o[0]&&e!==(e=Promise.all(t[9]))&&R(e,l)||U(l,t,o)},i(t){o||(m(l.block),o=!0)},o(t){for(let t=0;t<3;t+=1){const n=l.blocks[t];d(n)}o=!1},d(t){t&&c(n),l.block.d(t),l.token=null,l=null}}}function It(t){return{c:u,l:u,m:u,p:u,i:u,o:u,d:u}}function Nt(t){let n;const e=t[18]["more-options"],o=B(e,t,t[24],ct),l=o||function(t){let n,e,o,l,i;return e=new Y({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),e.$on("click",t[13]),{c(){n=b("li"),p(e.$$.fragment),this.h()},l(t){n=w(t,"LI",{class:!0});var o=s(n);h(e.$$.fragment,o),o.forEach(c),this.h()},h(){r(n,"class","more-options svelte-1lud1my")},m(s,c){a(s,n,c),f(e,n,null),o=!0,l||(i=J(et.call(null,n,{callback:t[13]})),l=!0)},p(t,n){const o={};16777216&n[0]&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(m(e.$$.fragment,t),o=!0)},o(t){d(e.$$.fragment,t),o=!1},d(t){t&&c(n),$(e),l=!1,i()}}}(t);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,e){l&&l.m(t,e),n=!0},p(t,s){o?o.p&&(!n||16777216&s[0])&&D(o,e,t,t[24],n?V(e,t[24],s,st):T(t[24]),ct):l&&l.p&&(!n||16777216&s[0])&&l.p(t,n?s:[-1,-1])},i(t){n||(m(l,t),n=!0)},o(t){d(l,t),n=!1},d(t){l&&l.d(t)}}}function Qt(t){let n,e,o;n=new nt({});const l=t[18]["load-more-options-message"],s=B(l,t,t[24],lt),r=s||function(t){let n;return{c(){n=q("load more options")},l(t){n=A(t,"load more options")},m(t,e){a(t,n,e)},d(t){t&&c(n)}}}();return{c(){p(n.$$.fragment),e=x(),r&&r.c()},l(t){h(n.$$.fragment,t),e=O(t),r&&r.l(t)},m(t,l){f(n,t,l),a(t,e,l),r&&r.m(t,l),o=!0},p(t,n){s&&s.p&&(!o||16777216&n[0])&&D(s,l,t,t[24],o?V(l,t[24],n,ot):T(t[24]),lt)},i(t){o||(m(n.$$.fragment,t),m(r,t),o=!0)},o(t){d(n.$$.fragment,t),d(r,t),o=!1},d(t){$(n,t),t&&c(e),r&&r.d(t)}}}function St(t){return{c:u,l:u,m:u,p:u,i:u,o:u,d:u}}function Mt(t){let n,e,o,l,i,u,g;e=new Y({props:{noRipple:!0,$$slots:{default:[kt]},$$scope:{ctx:t}}}),e.$on("click",t[21]);const v=[xt,bt,yt],k=[];function y(t,n){return t[1].length>=t[5]?0:t[4]>0&&(null==t[0]||t[0].length<t[4])?1:2}return l=y(t),i=k[l]=v[l](t),{c(){n=b("div"),p(e.$$.fragment),o=x(),i.c(),u=S(),this.h()},l(t){n=w(t,"DIV",{class:!0});var l=s(n);h(e.$$.fragment,l),l.forEach(c),o=O(t),i.l(t),u=S(),this.h()},h(){r(n,"class","shown-on-focus svelte-1lud1my")},m(t,s){a(t,n,s),f(e,n,null),a(t,o,s),k[l].m(t,s),a(t,u,s),g=!0},p(t,n){const o={};16777216&n[0]&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);let s=l;l=y(t),l===s?k[l].p(t,n):(M(),d(k[s],1,1,(()=>{k[s]=null})),P(),i=k[l],i?i.p(t,n):(i=k[l]=v[l](t),i.c()),m(i,1),i.m(u.parentNode,u))},i(t){g||(m(e.$$.fragment,t),m(i),g=!0)},o(t){d(e.$$.fragment,t),d(i),g=!1},d(t){t&&c(n),$(e),t&&c(o),k[l].d(t),t&&c(u)}}}function Pt(t){let n,e,o,l,s,r,i=[{disabled:t[7]},t[16]],u={};for(let t=0;t<i.length;t+=1)u=k(u,i[t]);return o=new X({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),{c(){n=b("input"),e=x(),p(o.$$.fragment),this.h()},l(t){n=w(t,"INPUT",{}),e=O(t),h(o.$$.fragment,t),this.h()},h(){E(n,u),L(n,"svelte-1lud1my",!0)},m(c,i){a(c,n,i),n.autofocus&&n.focus(),t[19](n),C(n,t[0]),a(c,e,i),f(o,c,i),l=!0,s||(r=[j(n,"input",t[20]),j(n,"focus",t[15])],s=!0)},p(t,e){E(n,u=I(i,[(!l||128&e[0])&&{disabled:t[7]},65536&e[0]&&t[16]])),1&e[0]&&n.value!==t[0]&&C(n,t[0]),L(n,"svelte-1lud1my",!0);const s={};16779127&e[0]&&(s.$$scope={dirty:e,ctx:t}),o.$set(s)},i(t){l||(m(o.$$.fragment,t),l=!0)},o(t){d(o.$$.fragment,t),l=!1},d(l){l&&c(n),t[19](null),l&&c(e),$(o,l),s=!1,N(r)}}}function Bt(t){let n,e;return n=new K({props:{class:_("autocomplete-field",t[3]),open:t[2],$$slots:{default:[Pt]},$$scope:{ctx:t}}}),n.$on("change",t[23]),{c(){p(n.$$.fragment)},l(t){h(n.$$.fragment,t)},m(t,o){f(n,t,o),e=!0},p(t,e){const o={};8&e[0]&&(o.class=_("autocomplete-field",t[3])),4&e[0]&&(o.open=t[2]),16846839&e[0]&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(m(n.$$.fragment,t),e=!0)},o(t){d(n.$$.fragment,t),e=!1},d(t){$(n,t)}}}function Dt(t,n,e){const o=["class","getOptions","selection","minSearchLength","maxOptions","searchQuery","optionComponent","disabled","focus"];let l=g(n,o),{$$slots:s={},$$scope:c}=n,{class:r=null}=n,{getOptions:a}=n,{selection:i=[]}=n,{minSearchLength:u=3}=n,{maxOptions:p=1/0}=n,{searchQuery:h=""}=n,{optionComponent:f=W}=n,{disabled:m=!1}=n,{focus:d=!1}=n,$=!1,b=[],x=null,w=null;function O(t){i.push(t),e(1,i),e(0,h=""),E("change",{value:i}),i.length<p?w.focus():e(2,d=!1)}const E=v();return t.$$set=t=>{n=k(k({},n),y(t)),e(16,l=g(n,o)),"class"in t&&e(3,r=t.class),"getOptions"in t&&e(17,a=t.getOptions),"selection"in t&&e(1,i=t.selection),"minSearchLength"in t&&e(4,u=t.minSearchLength),"maxOptions"in t&&e(5,p=t.maxOptions),"searchQuery"in t&&e(0,h=t.searchQuery),"optionComponent"in t&&e(6,f=t.optionComponent),"disabled"in t&&e(7,m=t.disabled),"focus"in t&&e(2,d=t.focus),"$$scope"in t&&e(24,c=t.$$scope)},t.$$.update=()=>{var n;1&t.$$.dirty[0]&&((n=h).length>=u?e(10,x=a(n)):e(10,x=null),e(9,b=[]),null!=x&&b.push(x.next()))},[h,i,d,r,u,p,f,m,$,b,x,w,function(t){return e(8,$=!t.done),null==t.value?[]:t.value.filter((t=>null==i.find((n=>n===t))))},function(t){b.push(x.next()),e(9,b),null!=t&&t.detail.nativeEvent.stopPropagation()},O,function(){e(9,b),e(2,d=!0)},l,a,s,function(t){Q[t?"unshift":"push"]((()=>{w=t,e(11,w)}))},function(){h=this.value,e(0,h)},()=>e(2,d=!1),t=>O(t),({detail:t})=>e(2,d=t.value),c]}var Tt=class extends t{constructor(t){super(),n(this,t,Dt,Bt,e,{class:3,getOptions:17,selection:1,minSearchLength:4,maxOptions:5,searchQuery:0,optionComponent:6,disabled:7,focus:2},null,[-1,-1])}};export{Tt as A,nt as M,et as c};
