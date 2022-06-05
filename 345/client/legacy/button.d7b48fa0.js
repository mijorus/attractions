import{_ as e,a as t,b as n,c as l,i as r,s as i,d as o,S as a,Q as s,k as u,H as c,B as d,I as f,A as p,h as v,R as h,T as m,U as y,V as b,W as g,t as x,v as R,g as E,X as T,Y as L,y as w,Z as $,$ as k,a0 as A,a1 as C,a2 as B,a3 as z,a4 as I}from"./client.7f1a0dd8.js";import{_ as S,c as N}from"./classes.93c4da9c.js";function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={event:t.event||"click",transition:t.transition||150,zIndex:t.zIndex||"100",bg:t.rippleColor||null,disabled:t.disabled||!1},l=function(t){return r(t,e,n)};function r(e,t,n){var l=n.bg,r=n.zIndex,i=n.transition,o=parseInt(getComputedStyle(t).borderWidth.replace("px","")),a=t.getBoundingClientRect(),s=a.left,u=a.top,c=t.offsetWidth,d=t.offsetHeight,f=e.clientX-s,p=e.clientY-u,v=Math.max(f,c-f),h=Math.max(p,d-p),m=window.getComputedStyle(t),y=Math.sqrt(v*v+h*h),b=o>0?o:0,g=document.createElement("div"),x=document.createElement("div");x.className="ripple-container",g.className="ripple",g.style.marginTop="0px",g.style.marginLeft="0px",g.style.width="1px",g.style.height="1px",g.style.transition="all ".concat(i,"ms cubic-bezier(0.4, 0, 0.2, 1)"),g.style.borderRadius="50%",g.style.pointerEvents="none",g.style.position="relative",g.style.zIndex=r,null!==l&&(g.style.backgroundColor=l),x.style.position="absolute",x.style.left=0-b+"px",x.style.top=0-b+"px",x.style.height="0",x.style.width="0",x.style.pointerEvents="none",x.style.overflow="hidden";var R=t.style.position.length>0?t.style.position:getComputedStyle(t).position;"relative"!==R&&"absolute"!==R&&(t.style.position="relative"),x.appendChild(g),t.appendChild(x),g.style.marginLeft=f+"px",g.style.marginTop=p+"px",x.style.width=c+"px",x.style.height=d+"px",x.style.borderTopLeftRadius=m.borderTopLeftRadius,x.style.borderTopRightRadius=m.borderTopRightRadius,x.style.borderBottomLeftRadius=m.borderBottomLeftRadius,x.style.borderBottomRightRadius=m.borderBottomRightRadius,x.style.direction="ltr",setTimeout((function(){g.style.width=2*y+"px",g.style.height=2*y+"px",g.style.marginLeft=f-y+"px",g.style.marginTop=p-y+"px"}),0),setTimeout((function(){g.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){x.parentNode.removeChild(x)}),i+250),setTimeout((function(){for(var e=!0,n=0;n<t.childNodes.length;n++)"ripple-container"===t.childNodes[n].className&&(e=!1);e&&(t.style.position="static"!==R?R:"")}),i+250)}return n.disabled||e.addEventListener(n.event,l),{destroy:function(){e.removeEventListener(n.event,l)},update:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.disabled?e.removeEventListener(n.event,l):e.addEventListener(n.event,l)}}}function j(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var l=0,r=function(){};return{s:r,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){a=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(a)throw i}}}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function O(e,t){if(null!=t){var n,l=j(t);try{for(l.s();!(n=l.n()).done;){var r=n.value;e.addEventListener(r.name,r.handler)}}catch(e){l.e(e)}finally{l.f()}}return{destroy:function(){if(null!=t){var n,l=j(t);try{for(l.s();!(n=l.n()).done;){var r=n.value;e.removeEventListener(r.name,r.handler)}}catch(e){l.e(e)}finally{l.f()}}}}}function U(e){var l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=t(e);if(l){var o=t(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return n(this,r)}}function W(e){for(var t,n,l,r,i,o,a,s=e[17].default,c=g(s,e,e[16],null),f=[{type:"button"},{disabled:e[10]},{class:n=N("btn",e[0])},e[15]],h={},m=0;m<f.length;m+=1)h=y(h,f[m]);return{c:function(){t=x("button"),c&&c.c(),this.h()},l:function(e){t=R(e,"BUTTON",{type:!0,class:!0});var n=E(t);c&&c.l(n),n.forEach(v),this.h()},h:function(){T(t,h),L(t,"filled",e[1]),L(t,"outline",e[2]),L(t,"danger",e[3]),L(t,"round",e[5]),L(t,"neutral",e[4]),L(t,"rectangle",e[6]),L(t,"small",e[7]),L(t,"selected",e[8]),L(t,"svelte-2r4z0x",!0)},m:function(n,s){u(n,t,s),c&&c.m(t,null),t.autofocus&&t.focus(),i=!0,o||(a=[w(t,"click",e[19]),$(l=P.call(null,t,{disabled:e[9]||e[10]})),$(r=O.call(null,t,e[13]))],o=!0)},p:function(e,o){c&&c.p&&(!i||65536&o)&&k(c,s,e,e[16],i?C(s,e[16],o,null):A(e[16]),null),T(t,h=B(f,[{type:"button"},(!i||1024&o)&&{disabled:e[10]},(!i||1&o&&n!==(n=N("btn",e[0])))&&{class:n},32768&o&&e[15]])),l&&z(l.update)&&1536&o&&l.update.call(null,{disabled:e[9]||e[10]}),r&&z(r.update)&&8192&o&&r.update.call(null,e[13]),L(t,"filled",e[1]),L(t,"outline",e[2]),L(t,"danger",e[3]),L(t,"round",e[5]),L(t,"neutral",e[4]),L(t,"rectangle",e[6]),L(t,"small",e[7]),L(t,"selected",e[8]),L(t,"svelte-2r4z0x",!0)},i:function(e){i||(p(c,e),i=!0)},o:function(e){d(c,e),i=!1},d:function(e){e&&v(t),c&&c.d(e),o=!1,I(a)}}}function H(e){for(var t,n,l,r,i,o,a,s,c,f,h,m,b=e[17].default,S=g(b,e,e[16],null),j=[{href:n=e[10]?null:e[11]},{rel:l=e[12]?null:"prefetch"},{"sapper:prefetch":r=!e[12]||null},{"sveltekit:prefetch":i=!e[12]||null},{disabled:o=!!e[10]||null},{class:a=N("btn",e[0])},e[15]],M={},U=0;U<j.length;U+=1)M=y(M,j[U]);return{c:function(){t=x("a"),S&&S.c(),this.h()},l:function(e){t=R(e,"A",{href:!0,rel:!0,"sapper:prefetch":!0,"sveltekit:prefetch":!0,disabled:!0,class:!0});var n=E(t);S&&S.l(n),n.forEach(v),this.h()},h:function(){T(t,M),L(t,"filled",e[1]),L(t,"outline",e[2]),L(t,"danger",e[3]),L(t,"round",e[5]),L(t,"neutral",e[4]),L(t,"rectangle",e[6]),L(t,"small",e[7]),L(t,"selected",e[8]),L(t,"svelte-2r4z0x",!0)},m:function(n,l){u(n,t,l),S&&S.m(t,null),f=!0,h||(m=[w(t,"click",e[18]),$(s=O.call(null,t,e[13])),$(c=P.call(null,t,{disabled:e[9]||e[10]}))],h=!0)},p:function(e,u){S&&S.p&&(!f||65536&u)&&k(S,b,e,e[16],f?C(b,e[16],u,null):A(e[16]),null),T(t,M=B(j,[(!f||3072&u&&n!==(n=e[10]?null:e[11]))&&{href:n},(!f||4096&u&&l!==(l=e[12]?null:"prefetch"))&&{rel:l},(!f||4096&u&&r!==(r=!e[12]||null))&&{"sapper:prefetch":r},(!f||4096&u&&i!==(i=!e[12]||null))&&{"sveltekit:prefetch":i},(!f||1024&u&&o!==(o=!!e[10]||null))&&{disabled:o},(!f||1&u&&a!==(a=N("btn",e[0])))&&{class:a},32768&u&&e[15]])),s&&z(s.update)&&8192&u&&s.update.call(null,e[13]),c&&z(c.update)&&1536&u&&c.update.call(null,{disabled:e[9]||e[10]}),L(t,"filled",e[1]),L(t,"outline",e[2]),L(t,"danger",e[3]),L(t,"round",e[5]),L(t,"neutral",e[4]),L(t,"rectangle",e[6]),L(t,"small",e[7]),L(t,"selected",e[8]),L(t,"svelte-2r4z0x",!0)},i:function(e){f||(p(S,e),f=!0)},o:function(e){d(S,e),f=!1},d:function(e){e&&v(t),S&&S.d(e),h=!1,I(m)}}}function X(e){var t,n,l,r,i=[H,W],o=[];function a(e,t){return e[11]?0:1}return t=a(e),n=o[t]=i[t](e),{c:function(){n.c(),l=s()},l:function(e){n.l(e),l=s()},m:function(e,n){o[t].m(e,n),u(e,l,n),r=!0},p:function(e,r){var s=S(r,1)[0],u=t;(t=a(e))===u?o[t].p(e,s):(c(),d(o[u],1,1,(function(){o[u]=null})),f(),(n=o[t])?n.p(e,s):(n=o[t]=i[t](e)).c(),p(n,1),n.m(l.parentNode,l))},i:function(e){r||(p(n),r=!0)},o:function(e){d(n),r=!1},d:function(e){o[t].d(e),e&&v(l)}}}function Y(e,t,n){var l=["class","filled","outline","danger","neutral","round","rectangle","small","selected","noRipple","disabled","href","noPrefetch","events"],r=h(t,l),i=t,o=i.$$slots,a=void 0===o?{}:o,s=i.$$scope,u=t.class,c=void 0===u?null:u,d=t.filled,f=void 0!==d&&d,p=t.outline,v=void 0!==p&&p,g=t.danger,x=void 0!==g&&g,R=t.neutral,E=void 0!==R&&R,T=t.round,L=void 0!==T&&T,w=t.rectangle,$=void 0!==w&&w,k=t.small,A=void 0!==k&&k,C=t.selected,B=void 0!==C&&C,z=t.noRipple,I=void 0!==z&&z,S=t.disabled,N=void 0!==S&&S,P=t.href,j=void 0===P?null:P,M=t.noPrefetch,O=void 0!==M&&M,U=t.events,W=void 0===U?[]:U;f&&v&&console.error("A button may not be filled and outlined at the same time"),x&&E&&console.error("A button may not be danger and neutral at the same time"),f&&B&&console.error("A button may not be filled and selected at the same time");var H=m();return e.$$set=function(e){t=y(y({},t),b(e)),n(15,r=h(t,l)),"class"in e&&n(0,c=e.class),"filled"in e&&n(1,f=e.filled),"outline"in e&&n(2,v=e.outline),"danger"in e&&n(3,x=e.danger),"neutral"in e&&n(4,E=e.neutral),"round"in e&&n(5,L=e.round),"rectangle"in e&&n(6,$=e.rectangle),"small"in e&&n(7,A=e.small),"selected"in e&&n(8,B=e.selected),"noRipple"in e&&n(9,I=e.noRipple),"disabled"in e&&n(10,N=e.disabled),"href"in e&&n(11,j=e.href),"noPrefetch"in e&&n(12,O=e.noPrefetch),"events"in e&&n(13,W=e.events),"$$scope"in e&&n(16,s=e.$$scope)},[c,f,v,x,E,L,$,A,B,I,N,j,O,W,H,r,s,a,function(e){return H("click",{nativeEvent:e})},function(e){return H("click",{nativeEvent:e})}]}var _=function(t){e(s,a);var n=U(s);function s(e){var t;return l(this,s),t=n.call(this),r(o(t),e,Y,X,i,{class:0,filled:1,outline:2,danger:3,neutral:4,round:5,rectangle:6,small:7,selected:8,noRipple:9,disabled:10,href:11,noPrefetch:12,events:13}),t}return s}();export{_ as B,O as e,P as r};
