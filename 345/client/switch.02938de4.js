import{S as s,i as a,s as l,P as t,Q as e,R as c,t as n,p as u,J as i,h as o,r,k as p,b as d,v as h,d as m,M as f,N as v,e as b,W as C,f as k,g as $,o as L,x as g,y as x,T as E,V as y,H as I,I as T,K as V,L as j}from"./client.c733438f.js";import{c as w}from"./classes.2453fa25.js";function D(s){let a;const l=s[10].default,i=j(l,s,s[9],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,l){i&&i.m(s,l),a=!0},p(s,n){i&&i.p&&(!a||512&n)&&t(i,l,s,s[9],a?c(l,s[9],n,null):e(s[9]),null)},i(s){a||(n(i,s),a=!0)},o(s){u(i,s),a=!1},d(s){i&&i.d(s)}}}function N(s){let a;const l=s[10].default,i=j(l,s,s[9],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,l){i&&i.m(s,l),a=!0},p(s,n){i&&i.p&&(!a||512&n)&&t(i,l,s,s[9],a?c(l,s[9],n,null):e(s[9]),null)},i(s){a||(n(i,s),a=!0)},o(s){u(i,s),a=!1},d(s){i&&i.d(s)}}}function P(s){let a,l,t,e,c,I,T,V,j,P,S,A,B,H,J=s[6]&&D(s),K=[{type:"checkbox"},{class:e=w(s[2])},{disabled:s[5]},s[8]],M={};for(let s=0;s<K.length;s+=1)M=i(M,K[s]);let Q=!s[6]&&N(s);return{c(){a=o("label"),J&&J.c(),l=r(),t=o("input"),c=r(),I=o("div"),T=o("div"),P=r(),Q&&Q.c(),this.h()},l(s){a=p(s,"LABEL",{class:!0});var e=d(a);J&&J.l(e),l=h(e),t=p(e,"INPUT",{type:!0,class:!0}),c=h(e),I=p(e,"DIV",{class:!0});var n=d(I);T=p(n,"DIV",{class:!0}),d(T).forEach(m),n.forEach(m),P=h(e),Q&&Q.l(e),e.forEach(m),this.h()},h(){f(t,M),v(t,"svelte-aapm94",!0),b(T,"class",V=C(w("thumb",s[4]))+" svelte-aapm94"),b(I,"class",j=C(w("track",s[3]))+" svelte-aapm94"),b(a,"class",S=C(w("switch",s[1]))+" svelte-aapm94")},m(e,n){k(e,a,n),J&&J.m(a,null),$(a,l),$(a,t),t.autofocus&&t.focus(),t.checked=s[0],$(a,c),$(a,I),$(I,T),$(a,P),Q&&Q.m(a,null),A=!0,B||(H=[L(t,"change",s[11]),L(t,"change",s[12])],B=!0)},p(s,[c]){s[6]?J?(J.p(s,c),64&c&&n(J,1)):(J=D(s),J.c(),n(J,1),J.m(a,l)):J&&(g(),u(J,1,1,(()=>{J=null})),x()),f(t,M=E(K,[{type:"checkbox"},(!A||4&c&&e!==(e=w(s[2])))&&{class:e},(!A||32&c)&&{disabled:s[5]},256&c&&s[8]])),1&c&&(t.checked=s[0]),v(t,"svelte-aapm94",!0),(!A||16&c&&V!==(V=C(w("thumb",s[4]))+" svelte-aapm94"))&&b(T,"class",V),(!A||8&c&&j!==(j=C(w("track",s[3]))+" svelte-aapm94"))&&b(I,"class",j),s[6]?Q&&(g(),u(Q,1,1,(()=>{Q=null})),x()):Q?(Q.p(s,c),64&c&&n(Q,1)):(Q=N(s),Q.c(),n(Q,1),Q.m(a,null)),(!A||2&c&&S!==(S=C(w("switch",s[1]))+" svelte-aapm94"))&&b(a,"class",S)},i(s){A||(n(J),n(Q),A=!0)},o(s){u(J),u(Q),A=!1},d(s){s&&m(a),J&&J.d(),Q&&Q.d(),B=!1,y(H)}}}function S(s,a,l){const t=["class","inputClass","trackClass","thumbClass","value","disabled","slotLeft"];let e=I(a,t),{$$slots:c={},$$scope:n}=a,{class:u=null}=a,{inputClass:o=null}=a,{trackClass:r=null}=a,{thumbClass:p=null}=a,{value:d=!1}=a,{disabled:h=!1}=a,{slotLeft:m=!1}=a;const f=T();return s.$$set=s=>{a=i(i({},a),V(s)),l(8,e=I(a,t)),"class"in s&&l(1,u=s.class),"inputClass"in s&&l(2,o=s.inputClass),"trackClass"in s&&l(3,r=s.trackClass),"thumbClass"in s&&l(4,p=s.thumbClass),"value"in s&&l(0,d=s.value),"disabled"in s&&l(5,h=s.disabled),"slotLeft"in s&&l(6,m=s.slotLeft),"$$scope"in s&&l(9,n=s.$$scope)},[d,u,o,r,p,h,m,f,e,n,c,function(){d=this.checked,l(0,d)},s=>f("change",{value:s.currentTarget.checked,nativeEvent:s})]}var A=class extends s{constructor(s){super(),a(this,s,S,P,l,{class:1,inputClass:2,trackClass:3,thumbClass:4,value:0,disabled:5,slotLeft:6})}};export{A as S};
