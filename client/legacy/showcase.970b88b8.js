import{m as n,o as t,p as c,q as o,i as r,s,r as e,S as a,W as u,t as f,u as i,D as $,v as l,g as p,w as m,F as v,h as d,j as h,k as g,x as y,l as x,z as w,$ as S,a0 as R,a1 as b,A as j,B,C,E,G as O}from"./client.4037e0bd.js";import{L as k}from"./label.def5c956.js";import{C as q}from"./copyable-code.d3313fc1.js";function z(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,s=t(n);if(o){var e=t(this).constructor;r=Reflect.construct(s,arguments,e)}else r=s.apply(this,arguments);return c(this,r)}}var A=function(n){return{}},D=function(n){return{}},F=function(n){return{}},G=function(n){return{}};function I(n){var t;return{c:function(){t=E("Showcase")},l:function(n){t=O(n,"Showcase")},m:function(n,c){g(n,t,c)},d:function(n){n&&d(t)}}}function L(n){var t;return{c:function(){t=E("Source")},l:function(n){t=O(n,"Source")},m:function(n,c){g(n,t,c)},d:function(n){n&&d(t)}}}function N(n){var t,c=n[0].source,o=u(c,n,n[1],D);return{c:function(){o&&o.c()},l:function(n){o&&o.l(n)},m:function(n,c){o&&o.m(n,c),t=!0},p:function(n,r){o&&o.p&&(!t||2&r)&&S(o,c,n,n[1],t?b(c,n[1],r,A):R(n[1]),D)},i:function(n){t||(j(o,n),t=!0)},o:function(n){B(o,n),t=!1},d:function(n){o&&o.d(n)}}}function P(n){var t,c,o,r,s,e,a,E;c=new k({props:{$$slots:{default:[I]},$$scope:{ctx:n}}});var O=n[0].showcase,z=u(O,n,n[1],G);return s=new k({props:{class:"code",$$slots:{default:[L]},$$scope:{ctx:n}}}),a=new q({props:{$$slots:{default:[N]},$$scope:{ctx:n}}}),{c:function(){t=f("section"),i(c.$$.fragment),o=$(),z&&z.c(),r=$(),i(s.$$.fragment),e=$(),i(a.$$.fragment),this.h()},l:function(n){t=l(n,"SECTION",{class:!0});var u=p(t);m(c.$$.fragment,u),o=v(u),z&&z.l(u),r=v(u),m(s.$$.fragment,u),e=v(u),m(a.$$.fragment,u),u.forEach(d),this.h()},h:function(){h(t,"class","showcase svelte-10o04be")},m:function(n,u){g(n,t,u),y(c,t,null),x(t,o),z&&z.m(t,null),x(t,r),y(s,t,null),x(t,e),y(a,t,null),E=!0},p:function(n,t){var o=w(t,1)[0],r={};2&o&&(r.$$scope={dirty:o,ctx:n}),c.$set(r),z&&z.p&&(!E||2&o)&&S(z,O,n,n[1],E?b(O,n[1],o,F):R(n[1]),G);var e={};2&o&&(e.$$scope={dirty:o,ctx:n}),s.$set(e);var u={};2&o&&(u.$$scope={dirty:o,ctx:n}),a.$set(u)},i:function(n){E||(j(c.$$.fragment,n),j(z,n),j(s.$$.fragment,n),j(a.$$.fragment,n),E=!0)},o:function(n){B(c.$$.fragment,n),B(z,n),B(s.$$.fragment,n),B(a.$$.fragment,n),E=!1},d:function(n){n&&d(t),C(c),z&&z.d(n),C(s),C(a)}}}function T(n,t,c){var o=t.$$slots,r=void 0===o?{}:o,s=t.$$scope;return n.$$set=function(n){"$$scope"in n&&c(1,s=n.$$scope)},[r,s]}var W=function(t){n(u,a);var c=z(u);function u(n){var t;return o(this,u),t=c.call(this),r(e(t),n,T,P,s,{}),t}return u}();export{W as S};
