import{_ as n,a as t,b as o,c,i as r,s as e,d as f,e as a,S as s,p as i,q as u,z as l,r as $,h as m,t as p,B as v,j as h,k as d,a1 as g,l as y,u as x,m as j,w as R,x as b,y as B,D as w,E as C,ae as k,M as D,n as E,A as q,C as z,F as A}from"./client.55e71079.js";import{B as F}from"./button.b3135bb2.js";import{C as I}from"./card.1fe6f3cd.js";import{L}from"./label.f803f272.js";import{c as M}from"./classes.7d86155b.js";function N(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,e=t(n);if(c){var f=t(this).constructor;r=Reflect.construct(e,arguments,f)}else r=e.apply(this,arguments);return o(this,r)}}function O(n,t,o){var c=n.slice();return c[2]=t[o],c}function P(n){var t,o,c,r,e;o=new L({props:{$$slots:{default:[S]},$$scope:{ctx:n}}});for(var f=n[1],a=[],s=0;s<f.length;s+=1)a[s]=G(O(n,f,s));var D=function(n){return b(a[n],1,1,(function(){a[n]=null}))};return{c:function(){t=i("div"),u(o.$$.fragment),c=l();for(var n=0;n<a.length;n+=1)a[n].c();this.h()},l:function(n){t=$(n,"DIV",{class:!0});var r=m(t);p(o.$$.fragment,r),c=v(r);for(var e=0;e<a.length;e+=1)a[e].l(r);r.forEach(h),this.h()},h:function(){d(t,"class",r=g(M("related-components",n[0]))+" svelte-j9fifh")},m:function(n,r){y(n,t,r),x(o,t,null),j(t,c);for(var f=0;f<a.length;f+=1)a[f].m(t,null);e=!0},p:function(n,c){var s={};if(32&c&&(s.$$scope={dirty:c,ctx:n}),o.$set(s),2&c){var i;for(f=n[1],i=0;i<f.length;i+=1){var u=O(n,f,i);a[i]?(a[i].p(u,c),R(a[i],1)):(a[i]=G(u),a[i].c(),R(a[i],1),a[i].m(t,null))}for(w(),i=f.length;i<a.length;i+=1)D(i);C()}(!e||1&c&&r!==(r=g(M("related-components",n[0]))+" svelte-j9fifh"))&&d(t,"class",r)},i:function(n){if(!e){R(o.$$.fragment,n);for(var t=0;t<f.length;t+=1)R(a[t]);e=!0}},o:function(n){b(o.$$.fragment,n),a=a.filter(Boolean);for(var t=0;t<a.length;t+=1)b(a[t]);e=!1},d:function(n){n&&h(t),B(o),k(a,n)}}}function S(n){var t;return{c:function(){t=q("Related Components")},l:function(n){t=z(n,"Related Components")},m:function(n,o){y(n,t,o)},d:function(n){n&&h(t)}}}function V(n){var t,o=n[2].name+"";return{c:function(){t=q(o)},l:function(n){t=z(n,o)},m:function(n,o){y(n,t,o)},p:function(n,c){2&c&&o!==(o=n[2].name+"")&&A(t,o)},d:function(n){n&&h(t)}}}function _(n){var t,o,c;return t=new F({props:{href:n[2].link,$$slots:{default:[V]},$$scope:{ctx:n}}}),{c:function(){u(t.$$.fragment),o=l()},l:function(n){p(t.$$.fragment,n),o=v(n)},m:function(n,r){x(t,n,r),y(n,o,r),c=!0},p:function(n,o){var c={};2&o&&(c.href=n[2].link),34&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){c||(R(t.$$.fragment,n),c=!0)},o:function(n){b(t.$$.fragment,n),c=!1},d:function(n){B(t,n),n&&h(o)}}}function G(n){var t,o;return t=new I({props:{$$slots:{default:[_]},$$scope:{ctx:n}}}),{c:function(){u(t.$$.fragment)},l:function(n){p(t.$$.fragment,n)},m:function(n,c){x(t,n,c),o=!0},p:function(n,o){var c={};34&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(R(t.$$.fragment,n),o=!0)},o:function(n){b(t.$$.fragment,n),o=!1},d:function(n){B(t,n)}}}function H(n){var t,o,c=0!==n[1].length&&P(n);return{c:function(){c&&c.c(),t=D()},l:function(n){c&&c.l(n),t=D()},m:function(n,r){c&&c.m(n,r),y(n,t,r),o=!0},p:function(n,o){var r=E(o,1)[0];0!==n[1].length?c?(c.p(n,r),2&r&&R(c,1)):((c=P(n)).c(),R(c,1),c.m(t.parentNode,t)):c&&(w(),b(c,1,1,(function(){c=null})),C())},i:function(n){o||(R(c),o=!0)},o:function(n){b(c),o=!1},d:function(n){c&&c.d(n),n&&h(t)}}}function J(n,t,o){var c=t.class,r=void 0===c?null:c,e=t.components;return n.$$set=function(n){"class"in n&&o(0,r=n.class),"components"in n&&o(1,e=n.components)},[r,e]}var K=function(t){n(i,s);var o=N(i);function i(n){var t;return c(this,i),t=o.call(this),r(f(t),n,J,H,e,{class:0,components:1}),t}return a(i)}();export{K as R};
