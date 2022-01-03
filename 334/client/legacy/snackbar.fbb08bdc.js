import{_ as n,a as t,b as s,c as o,i as a,s as i,d as c,S as r,u as l,w as e,x as u,A as f,B as d,C as v,t as p,E as m,D as x,v as $,g as b,G as h,h as y,F as C,j as k,a6 as g,k as O,l as w,J as A,H as j,I as R,am as q,an as B}from"./client.cbe1e507.js";import{c as S,_ as E}from"./classes.81235560.js";import{B as D}from"./button.db250295.js";import{c as I}from"./index.ae42ffd6.js";function P(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=t.delay,o=void 0===s?0:s,a=t.duration,i=void 0===a?400:a,c=t.easing,r=void 0===c?I:c,l=t.x,e=void 0===l?0:l,u=t.y,f=void 0===u?0:u,d=t.opacity,v=void 0===d?0:d,p=getComputedStyle(n),m=+p.opacity,x="none"===p.transform?"":p.transform,$=m*(1-v);return{delay:o,duration:i,easing:r,css:function(n,t){return"\n\t\t\ttransform: ".concat(x," translate(").concat((1-n)*e,"px, ").concat((1-n)*f,"px);\n\t\t\topacity: ").concat(m-$*t)}}}function _(n,t){var s=t.transition,o=void 0===s?null:s,a=t.options;return null===o?{delay:0,duration:0,css:function(){return""}}:o(n,void 0===a?null:a)}function F(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var a,i=t(n);if(o){var c=t(this).constructor;a=Reflect.construct(i,arguments,c)}else a=i.apply(this,arguments);return s(this,a)}}function G(n){var t,s;return(t=new D({props:{class:S(n[2]),$$slots:{default:[H]},$$scope:{ctx:n}}})).$on("click",n[9]),{c:function(){l(t.$$.fragment)},l:function(n){e(t.$$.fragment,n)},m:function(n,o){u(t,n,o),s=!0},p:function(n,s){var o={};4&s&&(o.class=S(n[2])),1040&s&&(o.$$scope={dirty:s,ctx:n}),t.$set(o)},i:function(n){s||(f(t.$$.fragment,n),s=!0)},o:function(n){d(t.$$.fragment,n),s=!1},d:function(n){v(t,n)}}}function H(n){var t,s=n[4].text+"";return{c:function(){t=m(s)},l:function(n){t=h(n,s)},m:function(n,s){O(n,t,s)},p:function(n,o){16&o&&s!==(s=n[4].text+"")&&A(t,s)},d:function(n){n&&y(t)}}}function J(n){var t,s,o,a,i,c,r,l,e=null!=n[4]&&G(n);return{c:function(){t=p("div"),s=p("span"),o=m(n[3]),i=x(),e&&e.c(),this.h()},l:function(a){t=$(a,"DIV",{class:!0});var c=b(t);s=$(c,"SPAN",{class:!0});var r=b(s);o=h(r,n[3]),r.forEach(y),i=C(c),e&&e.l(c),c.forEach(y),this.h()},h:function(){k(s,"class",a=g(S("text",n[1]))+" svelte-1nruwq9"),k(t,"class",c=g(S("snackbar",n[0]))+" svelte-1nruwq9")},m:function(n,a){O(n,t,a),w(t,s),w(s,o),w(t,i),e&&e.m(t,null),l=!0},p:function(i,r){var u=E(r,1)[0];n=i,(!l||8&u)&&A(o,n[3]),(!l||2&u&&a!==(a=g(S("text",n[1]))+" svelte-1nruwq9"))&&k(s,"class",a),null!=n[4]?e?(e.p(n,u),16&u&&f(e,1)):((e=G(n)).c(),f(e,1),e.m(t,null)):e&&(j(),d(e,1,1,(function(){e=null})),R()),(!l||1&u&&c!==(c=g(S("snackbar",n[0]))+" svelte-1nruwq9"))&&k(t,"class",c)},i:function(s){l||(f(e),q((function(){r||(r=B(t,_,{transition:n[7],options:n[8]},!0)),r.run(1)})),l=!0)},o:function(s){d(e),r||(r=B(t,_,{transition:n[7],options:n[8]},!1)),r.run(0),l=!1},d:function(n){n&&y(t),e&&e.d(),n&&r&&r.end()}}}function N(n,t,s){var o=t.class,a=void 0===o?null:o,i=t.textClass,c=void 0===i?null:i,r=t.buttonClass,l=void 0===r?null:r,e=t.text,u=t.action,f=void 0===u?null:u,d=t.closeOnAction,v=void 0===d||d,p=t.closeCallback,m=t.transition,x=void 0===m?P:m,$=t.transitionOptions,b=void 0===$?{x:-20,duration:150}:$;return n.$$set=function(n){"class"in n&&s(0,a=n.class),"textClass"in n&&s(1,c=n.textClass),"buttonClass"in n&&s(2,l=n.buttonClass),"text"in n&&s(3,e=n.text),"action"in n&&s(4,f=n.action),"closeOnAction"in n&&s(5,v=n.closeOnAction),"closeCallback"in n&&s(6,p=n.closeCallback),"transition"in n&&s(7,x=n.transition),"transitionOptions"in n&&s(8,b=n.transitionOptions)},[a,c,l,e,f,v,p,x,b,function(){null!=f&&"function"==typeof f.callback&&f.callback(),v&&p()}]}var V=function(t){n(l,r);var s=F(l);function l(n){var t;return o(this,l),t=s.call(this),a(c(t),n,N,J,i,{class:0,textClass:1,buttonClass:2,text:3,action:4,closeOnAction:5,closeCallback:6,transition:7,transitionOptions:8}),t}return l}();export{V as S,_ as d};
