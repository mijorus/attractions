import{m as t,o as r,p as n,q as e,i as a,s,r as o,S as c,t as u,D as i,E as f,v as l,g as v,h as d,F as h,G as p,j as y,aC as b,Y as m,k as R,l as g,z as k,J as D,n as E}from"./client.92d78858.js";function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=r(t);if(e){var o=r(this).constructor;a=Reflect.construct(s,arguments,o)}else a=s.apply(this,arguments);return n(this,a)}}function x(t){var r,n,e,a;return{c:function(){r=u("div"),n=u("div"),e=i(),a=f(t[0]),this.h()},l:function(s){r=l(s,"DIV",{class:!0});var o=v(r);n=l(o,"DIV",{class:!0,style:!0}),v(n).forEach(d),e=h(o),a=p(o,t[0]),o.forEach(d),this.h()},h:function(){y(n,"class","color svelte-oytuu9"),b(n,"background",t[0]),m(n,"bordered",t[1]),y(r,"class","preview svelte-oytuu9")},m:function(t,s){R(t,r,s),g(r,n),g(r,e),g(r,a)},p:function(t,r){var e=k(r,1)[0];1&e&&b(n,"background",t[0]),2&e&&m(n,"bordered",t[1]),1&e&&D(a,t[0])},i:E,o:E,d:function(t){t&&d(r)}}}function B(t,r,n){var e=r.value,a=r.bordered,s=void 0!==a&&a;return t.$$set=function(t){"value"in t&&n(0,e=t.value),"bordered"in t&&n(1,s=t.bordered)},[e,s]}var C=function(r){t(u,c);var n=j(u);function u(t){var r;return e(this,u),r=n.call(this),a(o(r),t,B,x,s,{value:0,bordered:1}),r}return u}();export{C};
