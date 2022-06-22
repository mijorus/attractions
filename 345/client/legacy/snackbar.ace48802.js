import{_ as n,a as t,b as a,c as s,i as o,s as i,d as c,S as r,u as l,w as u,x as e,A as f,B as d,C as v,t as p,E as m,D as x,v as $,g as b,G as h,h as y,F as C,j as k,a6 as g,k as O,l as w,J as A,H as j,I as R,am as q,an as B}from"./client.c283f75b.js";import{c as S,_ as E}from"./classes.cdc0a1b3.js";import{B as D}from"./button.6354aa35.js";import{c as I}from"./index.503abd32.js";function P(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.delay,s=void 0===a?0:a,o=t.duration,i=void 0===o?400:o,c=t.easing,r=void 0===c?I:c,l=t.x,u=void 0===l?0:l,e=t.y,f=void 0===e?0:e,d=t.opacity,v=void 0===d?0:d,p=getComputedStyle(n),m=+p.opacity,x="none"===p.transform?"":p.transform,$=m*(1-v);return{delay:s,duration:i,easing:r,css:function(n,t){return"\n\t\t\ttransform: ".concat(x," translate(").concat((1-n)*u,"px, ").concat((1-n)*f,"px);\n\t\t\topacity: ").concat(m-$*t)}}}function _(n,t){var a=t.transition,s=void 0===a?null:a,o=t.options;return null===s?{delay:0,duration:0,css:function(){return""}}:s(n,void 0===o?null:o)}function F(n){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var o,i=t(n);if(s){var c=t(this).constructor;o=Reflect.construct(i,arguments,c)}else o=i.apply(this,arguments);return a(this,o)}}function G(n){var t,a;return(t=new D({props:{class:S(n[2]),$$slots:{default:[H]},$$scope:{ctx:n}}})).$on("click",n[9]),{c:function(){l(t.$$.fragment)},l:function(n){u(t.$$.fragment,n)},m:function(n,s){e(t,n,s),a=!0},p:function(n,a){var s={};4&a&&(s.class=S(n[2])),1040&a&&(s.$$scope={dirty:a,ctx:n}),t.$set(s)},i:function(n){a||(f(t.$$.fragment,n),a=!0)},o:function(n){d(t.$$.fragment,n),a=!1},d:function(n){v(t,n)}}}function H(n){var t,a=n[4].text+"";return{c:function(){t=m(a)},l:function(n){t=h(n,a)},m:function(n,a){O(n,t,a)},p:function(n,s){16&s&&a!==(a=n[4].text+"")&&A(t,a)},d:function(n){n&&y(t)}}}function J(n){var t,a,s,o,i,c,r,l,u=null!=n[4]&&G(n);return{c:function(){t=p("div"),a=p("span"),s=m(n[3]),i=x(),u&&u.c(),this.h()},l:function(o){t=$(o,"DIV",{class:!0});var c=b(t);a=$(c,"SPAN",{class:!0});var r=b(a);s=h(r,n[3]),r.forEach(y),i=C(c),u&&u.l(c),c.forEach(y),this.h()},h:function(){k(a,"class",o=g(S("text",n[1]))+" svelte-1nruwq9"),k(t,"class",c=g(S("snackbar",n[0]))+" svelte-1nruwq9")},m:function(n,o){O(n,t,o),w(t,a),w(a,s),w(t,i),u&&u.m(t,null),l=!0},p:function(i,r){var e=E(r,1)[0];n=i,(!l||8&e)&&A(s,n[3]),(!l||2&e&&o!==(o=g(S("text",n[1]))+" svelte-1nruwq9"))&&k(a,"class",o),null!=n[4]?u?(u.p(n,e),16&e&&f(u,1)):((u=G(n)).c(),f(u,1),u.m(t,null)):u&&(j(),d(u,1,1,(function(){u=null})),R()),(!l||1&e&&c!==(c=g(S("snackbar",n[0]))+" svelte-1nruwq9"))&&k(t,"class",c)},i:function(a){l||(f(u),q((function(){r||(r=B(t,_,{transition:n[7],options:n[8]},!0)),r.run(1)})),l=!0)},o:function(a){d(u),r||(r=B(t,_,{transition:n[7],options:n[8]},!1)),r.run(0),l=!1},d:function(n){n&&y(t),u&&u.d(),n&&r&&r.end()}}}function N(n,t,a){var s=t.class,o=void 0===s?null:s,i=t.textClass,c=void 0===i?null:i,r=t.buttonClass,l=void 0===r?null:r,u=t.text,e=t.action,f=void 0===e?null:e,d=t.closeOnAction,v=void 0===d||d,p=t.closeCallback,m=t.transition,x=void 0===m?P:m,$=t.transitionOptions,b=void 0===$?{x:-20,duration:150}:$;return n.$$set=function(n){"class"in n&&a(0,o=n.class),"textClass"in n&&a(1,c=n.textClass),"buttonClass"in n&&a(2,l=n.buttonClass),"text"in n&&a(3,u=n.text),"action"in n&&a(4,f=n.action),"closeOnAction"in n&&a(5,v=n.closeOnAction),"closeCallback"in n&&a(6,p=n.closeCallback),"transition"in n&&a(7,x=n.transition),"transitionOptions"in n&&a(8,b=n.transitionOptions)},[o,c,l,u,f,v,p,x,b,function(){null!=f&&"function"==typeof f.callback&&f.callback(),v&&p()}]}var V=function(t){n(l,r);var a=F(l);function l(n){var t;return s(this,l),t=a.call(this),o(c(t),n,N,J,i,{class:0,textClass:1,buttonClass:2,text:3,action:4,closeOnAction:5,closeCallback:6,transition:7,transitionOptions:8}),t}return l}();export{V as S,_ as d};
