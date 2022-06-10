import{_ as t,a as n,b as o,c as e,i as r,s as a,d as s,ae as i,S as c,W as f,al as u,Q as l,k as p,a2 as v,a9 as h,H as m,B as d,C as $,I as g,u as T,A as b,x as k,h as O,D as y,t as D,F as E,v as w,g as I,j as _,$ as M,a0 as x,a1 as L,a8 as P,af as R,U as B,w as S,ab as j}from"./client.f5b2c25b.js";import{_ as F}from"./classes.0a6efdc6.js";import{S as C}from"./snackbar.bd324fb7.js";var H={},G=Object.freeze({TOP_LEFT:"top left",TOP_MIDDLE:"top h-middle",TOP_RIGHT:"top right",MIDDLE_RIGHT:"v-middle right",BOTTOM_RIGHT:"bottom right",BOTTOM_MIDDLE:"bottom h-middle",BOTTOM_LEFT:"bottom left",MIDDLE_LEFT:"v-middle left"});function z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=n(t);if(e){var s=n(this).constructor;r=Reflect.construct(a,arguments,s)}else r=a.apply(this,arguments);return o(this,r)}}function A(t,n,o){var e=t.slice();return e[6]=n[o],e}var N=function(t){return{}},Q=function(t){return{showSnackbar:t[1]}};function U(t,n){var o,e,r,a,s=[n[6].props],i=n[6].component;function c(t){for(var n={},o=0;o<s.length;o+=1)n=B(n,s[o]);return{props:n}}return i&&(e=new i(c())),{key:t,first:null,c:function(){o=l(),e&&T(e.$$.fragment),r=l(),this.h()},l:function(t){o=l(),e&&S(e.$$.fragment,t),r=l(),this.h()},h:function(){this.first=o},m:function(t,n){p(t,o,n),e&&k(e,t,n),p(t,r,n),a=!0},p:function(t,o){n=t;var a=4&o?v(s,[h(n[6].props)]):{};if(i!==(i=n[6].component)){if(e){m();var f=e;d(f.$$.fragment,1,0,(function(){$(f,1)})),g()}i?(e=new i(c()),T(e.$$.fragment),b(e.$$.fragment,1),k(e,r.parentNode,r)):e=null}else i&&e.$set(a)},i:function(t){a||(e&&b(e.$$.fragment,t),a=!0)},o:function(t){e&&d(e.$$.fragment,t),a=!1},d:function(t){t&&O(o),t&&O(r),e&&$(e,t)}}}function V(t){for(var n,o,e,r,a=[],s=new Map,i=t[4].default,c=f(i,t,t[3],Q),l=u(t[2].values()),v=function(t){return t[6]},h=0;h<l.length;h+=1){var $=A(t,l,h),T=v($);s.set(T,a[h]=U(T,$))}return{c:function(){c&&c.c(),n=y(),o=D("div");for(var t=0;t<a.length;t+=1)a[t].c();this.h()},l:function(t){c&&c.l(t),n=E(t),o=w(t,"DIV",{class:!0});for(var e=I(o),r=0;r<a.length;r+=1)a[r].l(e);e.forEach(O),this.h()},h:function(){_(o,"class",e="snackbar-stack "+t[0]+" svelte-yh5wp3")},m:function(t,e){c&&c.m(t,e),p(t,n,e),p(t,o,e);for(var s=0;s<a.length;s+=1)a[s].m(o,null);r=!0},p:function(t,n){var f=F(n,1)[0];c&&c.p&&(!r||8&f)&&M(c,i,t,t[3],r?L(i,t[3],f,N):x(t[3]),Q),4&f&&(l=u(t[2].values()),m(),a=P(a,f,v,1,t,l,s,o,j,U,null,A),g()),(!r||1&f&&e!==(e="snackbar-stack "+t[0]+" svelte-yh5wp3"))&&_(o,"class",e)},i:function(t){if(!r){b(c,t);for(var n=0;n<l.length;n+=1)b(a[n]);r=!0}},o:function(t){d(c,t);for(var n=0;n<a.length;n+=1)d(a[n]);r=!1},d:function(t){c&&c.d(t),t&&O(n),t&&O(o);for(var e=0;e<a.length;e+=1)a[e].d()}}}function W(t,n,o){var e=n.$$slots,r=void 0===e?{}:e,a=n.$$scope,s=n.position,i=void 0===s?G.BOTTOM_LEFT:s,c=new Set;function f(t,n){c.delete(t),"function"==typeof t.resolveExpiredPromise&&t.resolveExpiredPromise(!n),o(2,c)}function u(t){var n=t.component,e=void 0===n?C:n,r=t.props,a=void 0===r?{}:r,s=t.duration,i=void 0===s?4e3:s,u={component:e,props:a},l=a.closeCallback;return u.props.closeCallback=function(){clearTimeout(u.timeoutID),f(u,!0),"function"==typeof l&&l()},u.timeoutID=setTimeout(f,i,u,!1),c.add(u),o(2,c),{close:u.props.closeCallback,expired:new Promise((function(t){return u.resolveExpiredPromise=t}))}}return R(H,u),t.$$set=function(t){"position"in t&&o(0,i=t.position),"$$scope"in t&&o(3,a=t.$$scope)},[i,u,c,a,r]}var q=function(n){t(f,c);var o=z(f);function f(t){var n;return e(this,f),n=o.call(this),r(s(n),t,W,V,a,{position:0,showSnackbar:1}),n}return i(f,[{key:"showSnackbar",get:function(){return this.$$.ctx[1]}}]),f}();export{q as S};
