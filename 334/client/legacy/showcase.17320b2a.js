import{m as n,o as t,p as c,q as o,i as r,s,r as a,S as e,W as u,t as f,u as i,D as $,v as l,g as p,w as m,F as v,h as d,j as h,k as g,x as y,l as x,z as w,$ as S,a0 as R,a1 as j,A as b,B,C,E,G as O}from"./client.d9621f89.js";import{L as k}from"./label.f6ad7562.js";import{C as q}from"./copyable-code.6544860f.js";function z(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,s=t(n);if(o){var a=t(this).constructor;r=Reflect.construct(s,arguments,a)}else r=s.apply(this,arguments);return c(this,r)}}var A=function(n){return{}},D=function(n){return{}},F=function(n){return{}},G=function(n){return{}};function I(n){var t;return{c:function(){t=E("Showcase")},l:function(n){t=O(n,"Showcase")},m:function(n,c){g(n,t,c)},d:function(n){n&&d(t)}}}function L(n){var t;return{c:function(){t=E("Source")},l:function(n){t=O(n,"Source")},m:function(n,c){g(n,t,c)},d:function(n){n&&d(t)}}}function N(n){var t,c=n[0].source,o=u(c,n,n[1],D);return{c:function(){o&&o.c()},l:function(n){o&&o.l(n)},m:function(n,c){o&&o.m(n,c),t=!0},p:function(n,r){o&&o.p&&(!t||2&r)&&S(o,c,n,n[1],t?j(c,n[1],r,A):R(n[1]),D)},i:function(n){t||(b(o,n),t=!0)},o:function(n){B(o,n),t=!1},d:function(n){o&&o.d(n)}}}function P(n){var t,c,o,r,s,a,e,E;c=new k({props:{$$slots:{default:[I]},$$scope:{ctx:n}}});var O=n[0].showcase,z=u(O,n,n[1],G);return s=new k({props:{class:"code",$$slots:{default:[L]},$$scope:{ctx:n}}}),e=new q({props:{$$slots:{default:[N]},$$scope:{ctx:n}}}),{c:function(){t=f("section"),i(c.$$.fragment),o=$(),z&&z.c(),r=$(),i(s.$$.fragment),a=$(),i(e.$$.fragment),this.h()},l:function(n){t=l(n,"SECTION",{class:!0});var u=p(t);m(c.$$.fragment,u),o=v(u),z&&z.l(u),r=v(u),m(s.$$.fragment,u),a=v(u),m(e.$$.fragment,u),u.forEach(d),this.h()},h:function(){h(t,"class","showcase svelte-10o04be")},m:function(n,u){g(n,t,u),y(c,t,null),x(t,o),z&&z.m(t,null),x(t,r),y(s,t,null),x(t,a),y(e,t,null),E=!0},p:function(n,t){var o=w(t,1)[0],r={};2&o&&(r.$$scope={dirty:o,ctx:n}),c.$set(r),z&&z.p&&(!E||2&o)&&S(z,O,n,n[1],E?j(O,n[1],o,F):R(n[1]),G);var a={};2&o&&(a.$$scope={dirty:o,ctx:n}),s.$set(a);var u={};2&o&&(u.$$scope={dirty:o,ctx:n}),e.$set(u)},i:function(n){E||(b(c.$$.fragment,n),b(z,n),b(s.$$.fragment,n),b(e.$$.fragment,n),E=!0)},o:function(n){B(c.$$.fragment,n),B(z,n),B(s.$$.fragment,n),B(e.$$.fragment,n),E=!1},d:function(n){n&&d(t),C(c),z&&z.d(n),C(s),C(e)}}}function T(n,t,c){var o=t.$$slots,r=void 0===o?{}:o,s=t.$$scope;return n.$$set=function(n){"$$scope"in n&&c(1,s=n.$$scope)},[r,s]}var W=function(t){n(u,e);var c=z(u);function u(n){var t;return o(this,u),t=c.call(this),r(a(t),n,T,P,s,{}),t}return u}();export{W as S};
