import{_ as n,a as t,b as a,c,i as o,s,d as r,S as i,Q as e,k as u,H as f,B as l,I as v,A as p,h as d,T as h,W as m,t as y,v as $,g as k,j as C,a6 as R,Y as j,$ as w,a0 as b,a1 as B,y as I,aj as g}from"./client.8231d190.js";import{_ as x,c as D}from"./classes.fff54e86.js";function E(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var o,s=t(n);if(c){var r=t(this).constructor;o=Reflect.construct(s,arguments,r)}else o=s.apply(this,arguments);return a(this,o)}}var V=function(n){return{}},_=function(n){return{closeCallback:n[3]}},A=function(n){return{}},H=function(n){return{closeCallback:n[3]}};function M(n){var t,a,c,o=n[5].default,s=m(o,n,n[4],_);return{c:function(){t=y("div"),s&&s.c(),this.h()},l:function(n){t=$(n,"DIV",{class:!0});var a=k(t);s&&s.l(a),a.forEach(d),this.h()},h:function(){C(t,"class",a=R(D("modal-overlay",n[1]))+" svelte-rafkre"),j(t,"open",n[0])},m:function(n,a){u(n,t,a),s&&s.m(t,null),c=!0},p:function(n,r){s&&s.p&&(!c||16&r)&&w(s,o,n,n[4],c?B(o,n[4],r,V):b(n[4]),_),(!c||2&r&&a!==(a=R(D("modal-overlay",n[1]))+" svelte-rafkre"))&&C(t,"class",a),3&r&&j(t,"open",n[0])},i:function(n){c||(p(s,n),c=!0)},o:function(n){l(s,n),c=!1},d:function(n){n&&d(t),s&&s.d(n)}}}function N(n){var t,a,c,o,s,r=n[5].default,i=m(r,n,n[4],H);return{c:function(){t=y("div"),i&&i.c(),this.h()},l:function(n){t=$(n,"DIV",{class:!0});var a=k(t);i&&i.l(a),a.forEach(d),this.h()},h:function(){C(t,"class",a=R(D("modal-overlay",n[1]))+" svelte-rafkre"),j(t,"open",n[0])},m:function(a,r){u(a,t,r),i&&i.m(t,null),c=!0,o||(s=I(t,"click",g(n[3])),o=!0)},p:function(n,o){i&&i.p&&(!c||16&o)&&w(i,r,n,n[4],c?B(r,n[4],o,A):b(n[4]),H),(!c||2&o&&a!==(a=R(D("modal-overlay",n[1]))+" svelte-rafkre"))&&C(t,"class",a),3&o&&j(t,"open",n[0])},i:function(n){c||(p(i,n),c=!0)},o:function(n){l(i,n),c=!1},d:function(n){n&&d(t),i&&i.d(n),o=!1,s()}}}function O(n){var t,a,c,o,s=[N,M],r=[];function i(n,t){return n[2]?1:0}return t=i(n),a=r[t]=s[t](n),{c:function(){a.c(),c=e()},l:function(n){a.l(n),c=e()},m:function(n,a){r[t].m(n,a),u(n,c,a),o=!0},p:function(n,o){var e=x(o,1)[0],u=t;(t=i(n))===u?r[t].p(n,e):(f(),l(r[u],1,1,(function(){r[u]=null})),v(),(a=r[t])?a.p(n,e):(a=r[t]=s[t](n)).c(),p(a,1),a.m(c.parentNode,c))},i:function(n){o||(p(a),o=!0)},o:function(n){l(a),o=!1},d:function(n){r[t].d(n),n&&d(c)}}}function P(n,t,a){var c=t.$$slots,o=void 0===c?{}:c,s=t.$$scope,r=t.class,i=void 0===r?null:r,e=t.open,u=void 0!==e&&e,f=t.noClickaway,l=void 0!==f&&f;var v=h();return n.$$set=function(n){"class"in n&&a(1,i=n.class),"open"in n&&a(0,u=n.open),"noClickaway"in n&&a(2,l=n.noClickaway),"$$scope"in n&&a(4,s=n.$$scope)},n.$$.update=function(){1&n.$$.dirty&&v("change",{value:u})},[u,i,l,function(){a(0,u=!1)},s,o]}var Q=function(t){n(e,i);var a=E(e);function e(n){var t;return c(this,e),t=a.call(this),o(r(t),n,P,O,s,{class:1,open:0,noClickaway:2}),t}return e}();export{Q as M};
