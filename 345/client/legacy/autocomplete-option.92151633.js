import{_ as n,a as t,b as c,c as o,i as r,s as u,d as e,S as i,Q as a,k as f,h as s,t as l,v as h,g as v,j as d,ak as p,D as m,F as g,l as y,y as k,ao as b,n as q,T as E,E as R,G as $,J as x}from"./client.7f1a0dd8.js";import{_ as j}from"./classes.93c4da9c.js";function A(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function B(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,u=t(n);if(o){var e=t(this).constructor;r=Reflect.construct(u,arguments,e)}else r=u.apply(this,arguments);return c(this,r)}}function N(n,t,c){var o=n.slice();return o[6]=t[c],o}function T(n,t,c){var o=n.slice();return o[6]=t[c],o}function D(n){var t,c=n[6].content+"";return{c:function(){t=R(c)},l:function(n){t=$(n,c)},m:function(n,c){f(n,t,c)},p:function(n,o){1&o&&c!==(c=n[6].content+"")&&x(t,c)},d:function(n){n&&s(t)}}}function I(n){var t,c,o=n[6].content+"";return{c:function(){t=l("mark"),c=R(o),this.h()},l:function(n){t=h(n,"MARK",{class:!0});var r=v(t);c=$(r,o),r.forEach(s),this.h()},h:function(){d(t,"class","svelte-sb12q7")},m:function(n,o){f(n,t,o),y(t,c)},p:function(n,t){1&t&&o!==(o=n[6].content+"")&&x(c,o)},d:function(n){n&&s(t)}}}function K(n){var t;function c(n,t){return n[6].marked?I:D}var o=c(n),r=o(n);return{c:function(){r.c(),t=a()},l:function(n){r.l(n),t=a()},m:function(n,c){r.m(n,c),f(n,t,c)},p:function(n,u){o===(o=c(n))&&r?r.p(n,u):(r.d(1),(r=o(n))&&(r.c(),r.m(t.parentNode,t)))},d:function(n){r.d(n),n&&s(t)}}}function M(n){for(var t,c=n[1](n[0].details),o=[],r=0;r<c.length;r+=1)o[r]=w(N(n,c,r));return{c:function(){t=l("div");for(var n=0;n<o.length;n+=1)o[n].c();this.h()},l:function(n){t=h(n,"DIV",{class:!0});for(var c=v(t),r=0;r<o.length;r+=1)o[r].l(c);c.forEach(s),this.h()},h:function(){d(t,"class","subtext svelte-sb12q7")},m:function(n,c){f(n,t,c);for(var r=0;r<o.length;r+=1)o[r].m(t,null)},p:function(n,r){if(3&r){var u;for(c=n[1](n[0].details),u=0;u<c.length;u+=1){var e=N(n,c,u);o[u]?o[u].p(e,r):(o[u]=w(e),o[u].c(),o[u].m(t,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=c.length}},d:function(n){n&&s(t),p(o,n)}}}function O(n){var t,c=n[6].content+"";return{c:function(){t=R(c)},l:function(n){t=$(n,c)},m:function(n,c){f(n,t,c)},p:function(n,o){1&o&&c!==(c=n[6].content+"")&&x(t,c)},d:function(n){n&&s(t)}}}function _(n){var t,c,o=n[6].content+"";return{c:function(){t=l("mark"),c=R(o),this.h()},l:function(n){t=h(n,"MARK",{class:!0});var r=v(t);c=$(r,o),r.forEach(s),this.h()},h:function(){d(t,"class","svelte-sb12q7")},m:function(n,o){f(n,t,o),y(t,c)},p:function(n,t){1&t&&o!==(o=n[6].content+"")&&x(c,o)},d:function(n){n&&s(t)}}}function w(n){var t;function c(n,t){return n[6].marked?_:O}var o=c(n),r=o(n);return{c:function(){r.c(),t=a()},l:function(n){r.l(n),t=a()},m:function(n,c){r.m(n,c),f(n,t,c)},p:function(n,u){o===(o=c(n))&&r?r.p(n,u):(r.d(1),(r=o(n))&&(r.c(),r.m(t.parentNode,t)))},d:function(n){r.d(n),n&&s(t)}}}function F(n){for(var t,c,o,r,u,e=n[1](n[0].name),i=[],a=0;a<e.length;a+=1)i[a]=K(T(n,e,a));var E=n[0].details&&M(n);return{c:function(){t=l("li"),c=l("button");for(var n=0;n<i.length;n+=1)i[n].c();o=m(),E&&E.c(),this.h()},l:function(n){t=h(n,"LI",{class:!0});var r=v(t);c=h(r,"BUTTON",{type:!0,class:!0});for(var u=v(c),e=0;e<i.length;e+=1)i[e].l(u);o=g(u),E&&E.l(u),u.forEach(s),r.forEach(s),this.h()},h:function(){d(c,"type","button"),d(c,"class","svelte-sb12q7"),d(t,"class","svelte-sb12q7")},m:function(e,a){f(e,t,a),y(t,c);for(var s=0;s<i.length;s+=1)i[s].m(c,null);y(c,o),E&&E.m(c,null),r||(u=k(t,"click",b(n[4])),r=!0)},p:function(n,t){var r=j(t,1)[0];if(3&r){var u;for(e=n[1](n[0].name),u=0;u<e.length;u+=1){var a=T(n,e,u);i[u]?i[u].p(a,r):(i[u]=K(a),i[u].c(),i[u].m(c,o))}for(;u<i.length;u+=1)i[u].d(1);i.length=e.length}n[0].details?E?E.p(n,r):((E=M(n)).c(),E.m(c,null)):E&&(E.d(1),E=null)},i:q,o:q,d:function(n){n&&s(t),p(i,n),E&&E.d(),r=!1,u()}}}function G(n,t,c){var o,r=t.option,u=t.query,e=void 0===u?null:u;var i=E();return n.$$set=function(n){"option"in n&&c(0,r=n.option),"query"in n&&c(3,e=n.query)},n.$$.update=function(){8&n.$$.dirty&&(o=e?new RegExp("(".concat(A(e),")"),"ig"):null)},[r,function(n){return null==o?[{content:n,marked:!1}]:n.split(o).map((function(n,t){return{content:n,marked:t%2!=0}}))},i,e,function(n){return i("click",{nativeEvent:n})}]}var J=function(t){n(a,i);var c=B(a);function a(n){var t;return o(this,a),t=c.call(this),r(e(t),n,G,F,u,{option:0,query:3}),t}return a}();export{J as A,A as e};
