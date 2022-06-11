import{S as e,i as t,s as l,G as n,f as s,x as a,p as i,y as r,t as o,d,H as c,I as u,J as p,K as f,L as h,h as m,k as b,b as g,M as y,N as v,o as x,O as R,P as E,Q as L,R as T,T as k,U as $,V as C}from"./client.a9d17a70.js";import{c as z}from"./classes.2453fa25.js";function N(e,t={}){const l={event:t.event||"click",transition:t.transition||150,zIndex:t.zIndex||"100",bg:t.rippleColor||null,disabled:t.disabled||!1},n=t=>function(e,t,{bg:l,zIndex:n,transition:s}){const a=parseInt(getComputedStyle(t).borderWidth.replace("px","")),i=t.getBoundingClientRect(),r=i.left,o=i.top,d=t.offsetWidth,c=t.offsetHeight,u=e.clientX-r,p=e.clientY-o,f=Math.max(u,d-u),h=Math.max(p,c-p),m=window.getComputedStyle(t),b=Math.sqrt(f*f+h*h),g=a>0?a:0,y=document.createElement("div"),v=document.createElement("div");v.className="ripple-container",y.className="ripple",y.style.marginTop="0px",y.style.marginLeft="0px",y.style.width="1px",y.style.height="1px",y.style.transition=`all ${s}ms cubic-bezier(0.4, 0, 0.2, 1)`,y.style.borderRadius="50%",y.style.pointerEvents="none",y.style.position="relative",y.style.zIndex=n,null!==l&&(y.style.backgroundColor=l);v.style.position="absolute",v.style.left=0-g+"px",v.style.top=0-g+"px",v.style.height="0",v.style.width="0",v.style.pointerEvents="none",v.style.overflow="hidden";const x=t.style.position.length>0?t.style.position:getComputedStyle(t).position;"relative"!==x&&"absolute"!==x&&(t.style.position="relative");function R(){setTimeout((()=>{y.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((()=>{v.parentNode.removeChild(v)}),s+250),setTimeout((()=>{let e=!0;for(let l=0;l<t.childNodes.length;l++)"ripple-container"===t.childNodes[l].className&&(e=!1);e&&(t.style.position="static"!==x?x:"")}),s+250)}v.appendChild(y),t.appendChild(v),y.style.marginLeft=u+"px",y.style.marginTop=p+"px",v.style.width=d+"px",v.style.height=c+"px",v.style.borderTopLeftRadius=m.borderTopLeftRadius,v.style.borderTopRightRadius=m.borderTopRightRadius,v.style.borderBottomLeftRadius=m.borderBottomLeftRadius,v.style.borderBottomRightRadius=m.borderBottomRightRadius,v.style.direction="ltr",setTimeout((()=>{y.style.width=2*b+"px",y.style.height=2*b+"px",y.style.marginLeft=u-b+"px",y.style.marginTop=p-b+"px"}),0),R()}(t,e,l);return l.disabled||e.addEventListener(l.event,n),{destroy(){e.removeEventListener(l.event,n)},update(t={}){t.disabled?e.removeEventListener(l.event,n):e.addEventListener(l.event,n)}}}function w(e,t){if(null!=t)for(const l of t)e.addEventListener(l.name,l.handler);return{destroy(){if(null!=t)for(const l of t)e.removeEventListener(l.name,l.handler)}}}function B(e){let t,l,n,a,r,c,u;const f=e[17].default,B=h(f,e,e[16],null);let I=[{type:"button"},{disabled:e[10]},{class:l=z("btn",e[0])},e[15]],P={};for(let e=0;e<I.length;e+=1)P=p(P,I[e]);return{c(){t=m("button"),B&&B.c(),this.h()},l(e){t=b(e,"BUTTON",{type:!0,class:!0});var l=g(t);B&&B.l(l),l.forEach(d),this.h()},h(){y(t,P),v(t,"filled",e[1]),v(t,"outline",e[2]),v(t,"danger",e[3]),v(t,"round",e[5]),v(t,"neutral",e[4]),v(t,"rectangle",e[6]),v(t,"small",e[7]),v(t,"selected",e[8]),v(t,"svelte-2r4z0x",!0)},m(l,i){s(l,t,i),B&&B.m(t,null),t.autofocus&&t.focus(),r=!0,c||(u=[x(t,"click",e[19]),R(n=N.call(null,t,{disabled:e[9]||e[10]})),R(a=w.call(null,t,e[13]))],c=!0)},p(e,s){B&&B.p&&(!r||65536&s)&&E(B,f,e,e[16],r?T(f,e[16],s,null):L(e[16]),null),y(t,P=k(I,[{type:"button"},(!r||1024&s)&&{disabled:e[10]},(!r||1&s&&l!==(l=z("btn",e[0])))&&{class:l},32768&s&&e[15]])),n&&$(n.update)&&1536&s&&n.update.call(null,{disabled:e[9]||e[10]}),a&&$(a.update)&&8192&s&&a.update.call(null,e[13]),v(t,"filled",e[1]),v(t,"outline",e[2]),v(t,"danger",e[3]),v(t,"round",e[5]),v(t,"neutral",e[4]),v(t,"rectangle",e[6]),v(t,"small",e[7]),v(t,"selected",e[8]),v(t,"svelte-2r4z0x",!0)},i(e){r||(o(B,e),r=!0)},o(e){i(B,e),r=!1},d(e){e&&d(t),B&&B.d(e),c=!1,C(u)}}}function I(e){let t,l,n,a,r,c,u,f,B,I,P,A;const M=e[17].default,S=h(M,e,e[16],null);let j=[{href:l=e[10]?null:e[11]},{rel:n=e[12]?null:"prefetch"},{"sapper:prefetch":a=!e[12]||null},{"sveltekit:prefetch":r=!e[12]||null},{disabled:c=!!e[10]||null},{class:u=z("btn",e[0])},e[15]],H={};for(let e=0;e<j.length;e+=1)H=p(H,j[e]);return{c(){t=m("a"),S&&S.c(),this.h()},l(e){t=b(e,"A",{href:!0,rel:!0,"sapper:prefetch":!0,"sveltekit:prefetch":!0,disabled:!0,class:!0});var l=g(t);S&&S.l(l),l.forEach(d),this.h()},h(){y(t,H),v(t,"filled",e[1]),v(t,"outline",e[2]),v(t,"danger",e[3]),v(t,"round",e[5]),v(t,"neutral",e[4]),v(t,"rectangle",e[6]),v(t,"small",e[7]),v(t,"selected",e[8]),v(t,"svelte-2r4z0x",!0)},m(l,n){s(l,t,n),S&&S.m(t,null),I=!0,P||(A=[x(t,"click",e[18]),R(f=w.call(null,t,e[13])),R(B=N.call(null,t,{disabled:e[9]||e[10]}))],P=!0)},p(e,s){S&&S.p&&(!I||65536&s)&&E(S,M,e,e[16],I?T(M,e[16],s,null):L(e[16]),null),y(t,H=k(j,[(!I||3072&s&&l!==(l=e[10]?null:e[11]))&&{href:l},(!I||4096&s&&n!==(n=e[12]?null:"prefetch"))&&{rel:n},(!I||4096&s&&a!==(a=!e[12]||null))&&{"sapper:prefetch":a},(!I||4096&s&&r!==(r=!e[12]||null))&&{"sveltekit:prefetch":r},(!I||1024&s&&c!==(c=!!e[10]||null))&&{disabled:c},(!I||1&s&&u!==(u=z("btn",e[0])))&&{class:u},32768&s&&e[15]])),f&&$(f.update)&&8192&s&&f.update.call(null,e[13]),B&&$(B.update)&&1536&s&&B.update.call(null,{disabled:e[9]||e[10]}),v(t,"filled",e[1]),v(t,"outline",e[2]),v(t,"danger",e[3]),v(t,"round",e[5]),v(t,"neutral",e[4]),v(t,"rectangle",e[6]),v(t,"small",e[7]),v(t,"selected",e[8]),v(t,"svelte-2r4z0x",!0)},i(e){I||(o(S,e),I=!0)},o(e){i(S,e),I=!1},d(e){e&&d(t),S&&S.d(e),P=!1,C(A)}}}function P(e){let t,l,c,u;const p=[I,B],f=[];function h(e,t){return e[11]?0:1}return t=h(e),l=f[t]=p[t](e),{c(){l.c(),c=n()},l(e){l.l(e),c=n()},m(e,l){f[t].m(e,l),s(e,c,l),u=!0},p(e,[n]){let s=t;t=h(e),t===s?f[t].p(e,n):(a(),i(f[s],1,1,(()=>{f[s]=null})),r(),l=f[t],l?l.p(e,n):(l=f[t]=p[t](e),l.c()),o(l,1),l.m(c.parentNode,c))},i(e){u||(o(l),u=!0)},o(e){i(l),u=!1},d(e){f[t].d(e),e&&d(c)}}}function A(e,t,l){const n=["class","filled","outline","danger","neutral","round","rectangle","small","selected","noRipple","disabled","href","noPrefetch","events"];let s=c(t,n),{$$slots:a={},$$scope:i}=t,{class:r=null}=t,{filled:o=!1}=t,{outline:d=!1}=t,{danger:h=!1}=t,{neutral:m=!1}=t,{round:b=!1}=t,{rectangle:g=!1}=t,{small:y=!1}=t,{selected:v=!1}=t,{noRipple:x=!1}=t,{disabled:R=!1}=t,{href:E=null}=t,{noPrefetch:L=!1}=t,{events:T=[]}=t;o&&d&&console.error("A button may not be filled and outlined at the same time"),h&&m&&console.error("A button may not be danger and neutral at the same time"),o&&v&&console.error("A button may not be filled and selected at the same time");const k=u();return e.$$set=e=>{t=p(p({},t),f(e)),l(15,s=c(t,n)),"class"in e&&l(0,r=e.class),"filled"in e&&l(1,o=e.filled),"outline"in e&&l(2,d=e.outline),"danger"in e&&l(3,h=e.danger),"neutral"in e&&l(4,m=e.neutral),"round"in e&&l(5,b=e.round),"rectangle"in e&&l(6,g=e.rectangle),"small"in e&&l(7,y=e.small),"selected"in e&&l(8,v=e.selected),"noRipple"in e&&l(9,x=e.noRipple),"disabled"in e&&l(10,R=e.disabled),"href"in e&&l(11,E=e.href),"noPrefetch"in e&&l(12,L=e.noPrefetch),"events"in e&&l(13,T=e.events),"$$scope"in e&&l(16,i=e.$$scope)},[r,o,d,h,m,b,g,y,v,x,R,E,L,T,k,s,i,a,e=>k("click",{nativeEvent:e}),e=>k("click",{nativeEvent:e})]}var M=class extends e{constructor(e){super(),t(this,e,A,P,l,{class:0,filled:1,outline:2,danger:3,neutral:4,round:5,rectangle:6,small:7,selected:8,noRipple:9,disabled:10,href:11,noPrefetch:12,events:13})}};export{M as B,w as e,N as r};
