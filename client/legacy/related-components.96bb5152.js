import{m as n,o as t,p as o,q as c,i as r,s as e,r as a,S as f,t as s,u as i,D as u,v as l,g as $,w as m,F as p,h as v,j as h,a6 as d,k as g,x,l as y,A as j,B as R,C as B,H as b,I as k,ak as w,Q as C,z as D,E,G as I,J as q}from"./client.4037e0bd.js";import{B as z}from"./button.08c354bd.js";import{C as A}from"./card.dcaea0ed.js";import{L as F}from"./label.def5c956.js";import{c as G}from"./classes.2a1298a6.js";function H(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,e=t(n);if(c){var a=t(this).constructor;r=Reflect.construct(e,arguments,a)}else r=e.apply(this,arguments);return o(this,r)}}function J(n,t,o){var c=n.slice();return c[2]=t[o],c}function L(n){var t,o,c,r,e;o=new F({props:{$$slots:{default:[N]},$$scope:{ctx:n}}});for(var a=n[1],f=[],C=0;C<a.length;C+=1)f[C]=Q(J(n,a,C));var D=function(n){return R(f[n],1,1,(function(){f[n]=null}))};return{c:function(){t=s("div"),i(o.$$.fragment),c=u();for(var n=0;n<f.length;n+=1)f[n].c();this.h()},l:function(n){t=l(n,"DIV",{class:!0});var r=$(t);m(o.$$.fragment,r),c=p(r);for(var e=0;e<f.length;e+=1)f[e].l(r);r.forEach(v),this.h()},h:function(){h(t,"class",r=d(G("related-components",n[0]))+" svelte-j9fifh")},m:function(n,r){g(n,t,r),x(o,t,null),y(t,c);for(var a=0;a<f.length;a+=1)f[a].m(t,null);e=!0},p:function(n,c){var s={};if(32&c&&(s.$$scope={dirty:c,ctx:n}),o.$set(s),2&c){var i;for(a=n[1],i=0;i<a.length;i+=1){var u=J(n,a,i);f[i]?(f[i].p(u,c),j(f[i],1)):(f[i]=Q(u),f[i].c(),j(f[i],1),f[i].m(t,null))}for(b(),i=a.length;i<f.length;i+=1)D(i);k()}(!e||1&c&&r!==(r=d(G("related-components",n[0]))+" svelte-j9fifh"))&&h(t,"class",r)},i:function(n){if(!e){j(o.$$.fragment,n);for(var t=0;t<a.length;t+=1)j(f[t]);e=!0}},o:function(n){R(o.$$.fragment,n),f=f.filter(Boolean);for(var t=0;t<f.length;t+=1)R(f[t]);e=!1},d:function(n){n&&v(t),B(o),w(f,n)}}}function N(n){var t;return{c:function(){t=E("Related Components")},l:function(n){t=I(n,"Related Components")},m:function(n,o){g(n,t,o)},d:function(n){n&&v(t)}}}function O(n){var t,o=n[2].name+"";return{c:function(){t=E(o)},l:function(n){t=I(n,o)},m:function(n,o){g(n,t,o)},p:function(n,c){2&c&&o!==(o=n[2].name+"")&&q(t,o)},d:function(n){n&&v(t)}}}function P(n){var t,o,c;return t=new z({props:{href:n[2].link,$$slots:{default:[O]},$$scope:{ctx:n}}}),{c:function(){i(t.$$.fragment),o=u()},l:function(n){m(t.$$.fragment,n),o=p(n)},m:function(n,r){x(t,n,r),g(n,o,r),c=!0},p:function(n,o){var c={};2&o&&(c.href=n[2].link),34&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){c||(j(t.$$.fragment,n),c=!0)},o:function(n){R(t.$$.fragment,n),c=!1},d:function(n){B(t,n),n&&v(o)}}}function Q(n){var t,o;return t=new A({props:{$$slots:{default:[P]},$$scope:{ctx:n}}}),{c:function(){i(t.$$.fragment)},l:function(n){m(t.$$.fragment,n)},m:function(n,c){x(t,n,c),o=!0},p:function(n,o){var c={};34&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(j(t.$$.fragment,n),o=!0)},o:function(n){R(t.$$.fragment,n),o=!1},d:function(n){B(t,n)}}}function S(n){var t,o,c=0!==n[1].length&&L(n);return{c:function(){c&&c.c(),t=C()},l:function(n){c&&c.l(n),t=C()},m:function(n,r){c&&c.m(n,r),g(n,t,r),o=!0},p:function(n,o){var r=D(o,1)[0];0!==n[1].length?c?(c.p(n,r),2&r&&j(c,1)):((c=L(n)).c(),j(c,1),c.m(t.parentNode,t)):c&&(b(),R(c,1,1,(function(){c=null})),k())},i:function(n){o||(j(c),o=!0)},o:function(n){R(c),o=!1},d:function(n){c&&c.d(n),n&&v(t)}}}function V(n,t,o){var c=t.class,r=void 0===c?null:c,e=t.components;return n.$$set=function(n){"class"in n&&o(0,r=n.class),"components"in n&&o(1,e=n.components)},[r,e]}var K=function(t){n(s,f);var o=H(s);function s(n){var t;return c(this,s),t=o.call(this),r(a(t),n,V,S,e,{class:0,components:1}),t}return s}();export{K as R};
