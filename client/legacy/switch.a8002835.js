import{_ as s,a,b as t,c as n,i as c,s as l,d as e,S as u,$ as i,a0 as o,a1 as r,A as f,B as v,U as d,t as h,D as p,v as m,g as b,F as C,h as k,X as $,Y as y,j as L,a6 as g,k as R,l as E,y as x,H as B,I,a2 as j,a4 as D,R as V,T as w,V as A,W as P}from"./client.4037e0bd.js";import{c as S,_ as T}from"./classes.2a1298a6.js";function U(s){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(s){return!1}}();return function(){var c,l=a(s);if(n){var e=a(this).constructor;c=Reflect.construct(l,arguments,e)}else c=l.apply(this,arguments);return t(this,c)}}function _(s){var a,t=s[10].default,n=P(t,s,s[9],null);return{c:function(){n&&n.c()},l:function(s){n&&n.l(s)},m:function(s,t){n&&n.m(s,t),a=!0},p:function(s,c){n&&n.p&&(!a||512&c)&&i(n,t,s,s[9],a?r(t,s[9],c,null):o(s[9]),null)},i:function(s){a||(f(n,s),a=!0)},o:function(s){v(n,s),a=!1},d:function(s){n&&n.d(s)}}}function F(s){var a,t=s[10].default,n=P(t,s,s[9],null);return{c:function(){n&&n.c()},l:function(s){n&&n.l(s)},m:function(s,t){n&&n.m(s,t),a=!0},p:function(s,c){n&&n.p&&(!a||512&c)&&i(n,t,s,s[9],a?r(t,s[9],c,null):o(s[9]),null)},i:function(s){a||(f(n,s),a=!0)},o:function(s){v(n,s),a=!1},d:function(s){n&&n.d(s)}}}function H(s){for(var a,t,n,c,l,e,u,i,o,r,V,w,A,P,U=s[6]&&_(s),H=[{type:"checkbox"},{class:c=S(s[2])},{disabled:s[5]},s[8]],N={},O=0;O<H.length;O+=1)N=d(N,H[O]);var W=!s[6]&&F(s);return{c:function(){a=h("label"),U&&U.c(),t=p(),n=h("input"),l=p(),e=h("div"),u=h("div"),r=p(),W&&W.c(),this.h()},l:function(s){a=m(s,"LABEL",{class:!0});var c=b(a);U&&U.l(c),t=C(c),n=m(c,"INPUT",{type:!0,class:!0}),l=C(c),e=m(c,"DIV",{class:!0});var i=b(e);u=m(i,"DIV",{class:!0}),b(u).forEach(k),i.forEach(k),r=C(c),W&&W.l(c),c.forEach(k),this.h()},h:function(){$(n,N),y(n,"svelte-aapm94",!0),L(u,"class",i=g(S("thumb",s[4]))+" svelte-aapm94"),L(e,"class",o=g(S("track",s[3]))+" svelte-aapm94"),L(a,"class",V=g(S("switch",s[1]))+" svelte-aapm94")},m:function(c,i){R(c,a,i),U&&U.m(a,null),E(a,t),E(a,n),n.autofocus&&n.focus(),n.checked=s[0],E(a,l),E(a,e),E(e,u),E(a,r),W&&W.m(a,null),w=!0,A||(P=[x(n,"change",s[11]),x(n,"change",s[12])],A=!0)},p:function(s,l){var r=T(l,1)[0];s[6]?U?(U.p(s,r),64&r&&f(U,1)):((U=_(s)).c(),f(U,1),U.m(a,t)):U&&(B(),v(U,1,1,(function(){U=null})),I()),$(n,N=j(H,[{type:"checkbox"},(!w||4&r&&c!==(c=S(s[2])))&&{class:c},(!w||32&r)&&{disabled:s[5]},256&r&&s[8]])),1&r&&(n.checked=s[0]),y(n,"svelte-aapm94",!0),(!w||16&r&&i!==(i=g(S("thumb",s[4]))+" svelte-aapm94"))&&L(u,"class",i),(!w||8&r&&o!==(o=g(S("track",s[3]))+" svelte-aapm94"))&&L(e,"class",o),s[6]?W&&(B(),v(W,1,1,(function(){W=null})),I()):W?(W.p(s,r),64&r&&f(W,1)):((W=F(s)).c(),f(W,1),W.m(a,null)),(!w||2&r&&V!==(V=g(S("switch",s[1]))+" svelte-aapm94"))&&L(a,"class",V)},i:function(s){w||(f(U),f(W),w=!0)},o:function(s){v(U),v(W),w=!1},d:function(s){s&&k(a),U&&U.d(),W&&W.d(),A=!1,D(P)}}}function N(s,a,t){var n=["class","inputClass","trackClass","thumbClass","value","disabled","slotLeft"],c=V(a,n),l=a,e=l.$$slots,u=void 0===e?{}:e,i=l.$$scope,o=a.class,r=void 0===o?null:o,f=a.inputClass,v=void 0===f?null:f,h=a.trackClass,p=void 0===h?null:h,m=a.thumbClass,b=void 0===m?null:m,C=a.value,k=void 0!==C&&C,$=a.disabled,y=void 0!==$&&$,L=a.slotLeft,g=void 0!==L&&L,R=w();return s.$$set=function(s){a=d(d({},a),A(s)),t(8,c=V(a,n)),"class"in s&&t(1,r=s.class),"inputClass"in s&&t(2,v=s.inputClass),"trackClass"in s&&t(3,p=s.trackClass),"thumbClass"in s&&t(4,b=s.thumbClass),"value"in s&&t(0,k=s.value),"disabled"in s&&t(5,y=s.disabled),"slotLeft"in s&&t(6,g=s.slotLeft),"$$scope"in s&&t(9,i=s.$$scope)},[k,r,v,p,b,y,g,R,c,i,u,function(){k=this.checked,t(0,k)},function(s){return R("change",{value:s.target.checked,nativeEvent:s})}]}var O=function(a){s(i,u);var t=U(i);function i(s){var a;return n(this,i),a=t.call(this),c(e(a),s,N,H,l,{class:1,inputClass:2,trackClass:3,thumbClass:4,value:0,disabled:5,slotLeft:6}),a}return i}();export{O as S};
