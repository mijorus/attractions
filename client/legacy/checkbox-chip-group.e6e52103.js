import{_ as n,a,b as t,c,i as e,s,d as o,S as l,t as i,v as u,g as r,h as f,j as h,a6 as d,k as v,H as m,a8 as p,I as b,A as $,B as k,Q as x,R as g,U as C,V as y,u as R,w as j,x as T,a2 as w,a9 as B,aa as E,C as N,ab as _,a7 as A,ac as D,ad as I,D as M,F as P,E as S,G as V,J as q,l as F}from"./client.4037e0bd.js";import{c as G,_ as H}from"./classes.2a1298a6.js";import{p as J}from"./plural-s.31bb9da9.js";import{C as O}from"./checkbox-chip.13a74fc3.js";function Q(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,s=a(n);if(c){var o=a(this).constructor;e=Reflect.construct(s,arguments,o)}else e=s.apply(this,arguments);return t(this,e)}}function U(n,a,t){var c=n.slice();return c[12]=a[t],c[13]=a,c[14]=t,c}function z(n){for(var a,t,c,e=[],s=new Map,o=n[0],l=function(n){return n[12].value},x=0;x<o.length;x+=1){var g=U(n,o,x),C=l(g);s.set(C,e[x]=X(C,g))}return{c:function(){a=i("div");for(var n=0;n<e.length;n+=1)e[n].c();this.h()},l:function(n){a=u(n,"DIV",{class:!0,role:!0});for(var t=r(a),c=0;c<e.length;c+=1)e[c].l(t);t.forEach(f),this.h()},h:function(){h(a,"class",t=d(G(n[1]))+" svelte-15v276f"),h(a,"role","group")},m:function(n,t){v(n,a,t);for(var s=0;s<e.length;s+=1)e[s].m(a,null);c=!0},p:function(n,i){509&i&&(o=n[0],m(),e=p(e,i,l,1,n,o,s,a,_,X,null,U),b()),(!c||2&i&&t!==(t=d(G(n[1]))+" svelte-15v276f"))&&h(a,"class",t)},i:function(n){if(!c){for(var a=0;a<o.length;a+=1)$(e[a]);c=!0}},o:function(n){for(var a=0;a<e.length;a+=1)k(e[a]);c=!1},d:function(n){n&&f(a);for(var t=0;t<e.length;t+=1)e[t].d()}}}function K(n){var a,t=(n[12].label||n[12].value)+"";return{c:function(){a=S(t)},l:function(n){a=V(n,t)},m:function(n,t){v(n,a,t)},p:function(n,c){1&c&&t!==(t=(n[12].label||n[12].value)+"")&&q(a,t)},d:function(n){n&&f(a)}}}function L(n){var a,t,c,e=(n[12].label||n[12].value)+"";return{c:function(){a=i("span"),t=S(e),this.h()},l:function(n){a=u(n,"SPAN",{class:!0});var c=r(a);t=V(c,e),c.forEach(f),this.h()},h:function(){h(a,"class",c=G(n[3]))},m:function(n,c){v(n,a,c),F(a,t)},p:function(n,s){1&s&&e!==(e=(n[12].label||n[12].value)+"")&&q(t,e),8&s&&c!==(c=G(n[3]))&&h(a,"class",c)},d:function(n){n&&f(a)}}}function W(n){var a;function t(n,a){return null!=n[3]?L:K}var c=t(n),e=c(n);return{c:function(){e.c(),a=M()},l:function(n){e.l(n),a=P(n)},m:function(n,t){e.m(n,t),v(n,a,t)},p:function(n,s){c===(c=t(n))&&e?e.p(n,s):(e.d(1),(e=c(n))&&(e.c(),e.m(a.parentNode,a)))},d:function(n){e.d(n),n&&f(a)}}}function X(n,a){var t,c,e,s,o=[{name:a[4]},{value:a[12].value},{disabled:a[12].disabled||!a[12].checked&&a[6]>=a[5]},{class:G(a[2])},{title:!a[12].disabled&&!a[12].checked&&a[6]>=a[5]?a[7]:null},a[8]];function l(n){a[10](n,a[12])}for(var i={$$slots:{default:[W]},$$scope:{ctx:a}},u=0;u<o.length;u+=1)i=C(i,o[u]);return void 0!==a[12].checked&&(i.checked=a[12].checked),c=new O({props:i}),A.push((function(){return D(c,"checked",l)})),c.$on("change",a[11]),{key:n,first:null,c:function(){t=x(),R(c.$$.fragment),this.h()},l:function(n){t=x(),j(c.$$.fragment,n),this.h()},h:function(){this.first=t},m:function(n,a){v(n,t,a),T(c,n,a),s=!0},p:function(n,t){a=n;var s=501&t?w(o,[16&t&&{name:a[4]},1&t&&{value:a[12].value},97&t&&{disabled:a[12].disabled||!a[12].checked&&a[6]>=a[5]},4&t&&{class:G(a[2])},225&t&&{title:!a[12].disabled&&!a[12].checked&&a[6]>=a[5]?a[7]:null},256&t&&B(a[8])]):{};32777&t&&(s.$$scope={dirty:t,ctx:a}),!e&&1&t&&(e=!0,s.checked=a[12].checked,E((function(){return e=!1}))),c.$set(s)},i:function(n){s||($(c.$$.fragment,n),s=!0)},o:function(n){k(c.$$.fragment,n),s=!1},d:function(n){n&&f(t),N(c,n)}}}function Y(n){var a,t,c=null!=n[0]&&0!==n[0].length&&z(n);return{c:function(){c&&c.c(),a=x()},l:function(n){c&&c.l(n),a=x()},m:function(n,e){c&&c.m(n,e),v(n,a,e),t=!0},p:function(n,t){var e=H(t,1)[0];null!=n[0]&&0!==n[0].length?c?(c.p(n,e),1&e&&$(c,1)):((c=z(n)).c(),$(c,1),c.m(a.parentNode,a)):c&&(m(),k(c,1,1,(function(){c=null})),b())},i:function(n){t||($(c),t=!0)},o:function(n){k(c),t=!1},d:function(n){c&&c.d(n),n&&f(a)}}}function Z(n,a,t){var c,e,s=["class","checkboxClass","labelClass","items","name","max","maxReachedTooltip"],o=g(a,s),l=a.class,i=void 0===l?null:l,u=a.checkboxClass,r=void 0===u?null:u,f=a.labelClass,h=void 0===f?null:f,d=a.items,v=a.name,m=a.max,p=void 0===m?1/0:m,b=a.maxReachedTooltip,$=void 0===b?null:b;return d&&0!==d.length||console.error("Must have at least one item in the checkbox chip group"),n.$$set=function(n){a=C(C({},a),y(n)),t(8,o=g(a,s)),"class"in n&&t(1,i=n.class),"checkboxClass"in n&&t(2,r=n.checkboxClass),"labelClass"in n&&t(3,h=n.labelClass),"items"in n&&t(0,d=n.items),"name"in n&&t(4,v=n.name),"max"in n&&t(5,p=n.max),"maxReachedTooltip"in n&&t(9,$=n.maxReachedTooltip)},n.$$.update=function(){544&n.$$.dirty&&t(7,c=$||"Can only select ".concat(p," value").concat(J(p),".")),1&n.$$.dirty&&t(6,e=d.reduce((function(n,a){return n+a.checked}),0))},[d,i,r,h,v,p,e,c,o,$,function(a,c){n.$$.not_equal(c.checked,a)&&(c.checked=a,t(0,d))},function(a){I.call(this,n,a)}]}var nn=function(a){n(i,l);var t=Q(i);function i(n){var a;return c(this,i),a=t.call(this),e(o(a),n,Z,Y,s,{class:1,checkboxClass:2,labelClass:3,items:0,name:4,max:5,maxReachedTooltip:9}),a}return i}();export{nn as C};
