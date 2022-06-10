import{_ as t,a as n,b as s,c as a,i as e,s as o,d as r,S as $,e as c,f as p,g as l,h as f,j as i,k as u,l as m,n as g,U as d,u as k,w as h,x,a2 as w,a9 as y,A as v,B as E,C as b,V as D,D as C,F as j,E as O,G as T,t as B,v as S,H,I,J as R}from"./client.ee1de34b.js";import{L as z,H as N,P}from"./layout.39d4e01c.js";import{B as A}from"./button.49ccbadf.js";import{C as V}from"./chip.b49ff803.js";import{B as G}from"./breadcrumbs.880e8df7.js";import{_ as W}from"./classes.c6b8d525.js";import{H as F}from"./HomeIcon.018b6f05.js";import{S as Y}from"./showcase.db63b703.js";import{H as L}from"./h2.ee0ee5a2.js";import{H as _}from"./h3.dfc62347.js";import{T as J,a as M,b as U,c as q}from"./table.9c6d9364.js";import"./label.51ed8bfb.js";import"./copyable-code.031e346f.js";function K(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=n(t);if(a){var r=n(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return s(this,e)}}function Q(t){var n,s,a,e;return{c:function(){n=c("svg"),s=c("line"),a=c("polyline"),this.h()},l:function(t){n=p(t,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var e=l(n);s=p(e,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),l(s).forEach(f),a=p(e,"polyline",{points:!0}),l(a).forEach(f),e.forEach(f),this.h()},h:function(){i(s,"x1","5"),i(s,"y1","12"),i(s,"x2","19"),i(s,"y2","12"),i(a,"points","12 5 19 12 12 19"),i(n,"xmlns","http://www.w3.org/2000/svg"),i(n,"width",t[0]),i(n,"height",t[0]),i(n,"fill","none"),i(n,"viewBox","0 0 24 24"),i(n,"stroke","currentColor"),i(n,"stroke-width",t[1]),i(n,"stroke-linecap","round"),i(n,"stroke-linejoin","round"),i(n,"class",e="feather feather-arrow-right "+t[2])},m:function(t,e){u(t,n,e),m(n,s),m(n,a)},p:function(t,s){var a=W(s,1)[0];1&a&&i(n,"width",t[0]),1&a&&i(n,"height",t[0]),2&a&&i(n,"stroke-width",t[1]),4&a&&e!==(e="feather feather-arrow-right "+t[2])&&i(n,"class",e)},i:g,o:g,d:function(t){t&&f(n)}}}function X(t,n,s){var a=n.size,e=void 0===a?"100%":a,o=n.strokeWidth,r=void 0===o?2:o,$=n.class,c=void 0===$?"":$;return"100%"!==e&&(e="x"===e.slice(-1)?e.slice(0,e.length-1)+"em":parseInt(e)+"px"),t.$$set=function(t){"size"in t&&s(0,e=t.size),"strokeWidth"in t&&s(1,r=t.strokeWidth),"class"in t&&s(2,c=t.class)},[e,r,c]}var Z=function(n){t(c,$);var s=K(c);function c(t){var n;return a(this,c),n=s.call(this),e(r(n),t,X,Q,o,{size:0,strokeWidth:1,class:2}),n}return c}();function tt(t){let n;return{c(){n=O("Breadcrumbs")},l(t){n=T(t,"Breadcrumbs")},m(t,s){u(t,n,s)},d(t){t&&f(n)}}}function nt(t){let n;return{c(){n=O("Breadcrumbs are used to indicate the current page's location in the navigation hierarchy, as well as to navigate through it.")},l(t){n=T(t,"Breadcrumbs are used to indicate the current page's location in the navigation hierarchy, as well as to navigate through it.")},m(t,s){u(t,n,s)},d(t){t&&f(n)}}}function st(t){let n,s;return n=new V({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),{c(){k(n.$$.fragment)},l(t){h(n.$$.fragment,t)},m(t,a){x(n,t,a),s=!0},p(t,s){const a={};12&s&&(a.$$scope={dirty:s,ctx:t}),n.$set(a)},i(t){s||(v(n.$$.fragment,t),s=!0)},o(t){E(n.$$.fragment,t),s=!1},d(t){b(n,t)}}}function at(t){let n,s;return n=new A({props:{href:"/",round:!0,small:!0,$$slots:{default:[ot]},$$scope:{ctx:t}}}),{c(){k(n.$$.fragment)},l(t){h(n.$$.fragment,t)},m(t,a){x(n,t,a),s=!0},p(t,s){const a={};8&s&&(a.$$scope={dirty:s,ctx:t}),n.$set(a)},i(t){s||(v(n.$$.fragment,t),s=!0)},o(t){E(n.$$.fragment,t),s=!1},d(t){b(n,t)}}}function et(t){let n,s=t[2].text+"";return{c(){n=O(s)},l(t){n=T(t,s)},m(t,s){u(t,n,s)},p(t,a){4&a&&s!==(s=t[2].text+"")&&R(n,s)},d(t){t&&f(n)}}}function ot(t){let n,s;return n=new F({props:{size:"20"}}),{c(){k(n.$$.fragment)},l(t){h(n.$$.fragment,t)},m(t,a){x(n,t,a),s=!0},p:g,i(t){s||(v(n.$$.fragment,t),s=!0)},o(t){E(n.$$.fragment,t),s=!1},d(t){b(n,t)}}}function rt(t){let n,s,a,e;const o=[at,st],r=[];function $(t,n){return"/"===t[2].href?0:1}return s=$(t),a=r[s]=o[s](t),{c(){n=B("div"),a.c(),this.h()},l(t){n=S(t,"DIV",{slot:!0});var s=l(n);a.l(s),s.forEach(f),this.h()},h(){i(n,"slot","item")},m(t,a){u(t,n,a),r[s].m(n,null),e=!0},p(t,e){let c=s;s=$(t),s===c?r[s].p(t,e):(H(),E(r[c],1,1,(()=>{r[c]=null})),I(),a=r[s],a?a.p(t,e):(a=r[s]=o[s](t),a.c()),v(a,1),a.m(n,null))},i(t){e||(v(a),e=!0)},o(t){E(a),e=!1},d(t){t&&f(n),r[s].d()}}}function $t(t){let n,s;return n=new Z({props:{slot:"separator",size:"20"}}),{c(){k(n.$$.fragment)},l(t){h(n.$$.fragment,t)},m(t,a){x(n,t,a),s=!0},p:g,i(t){s||(v(n.$$.fragment,t),s=!0)},o(t){E(n.$$.fragment,t),s=!1},d(t){b(n,t)}}}function ct(t){let n,s,a,e,o,r,$;return s=new G({props:{items:t[0]}}),e=new G({props:{items:t[0],separator:"~"}}),r=new G({props:{items:t[0],$$slots:{separator:[$t],item:[rt,({item:t})=>({2:t}),({item:t})=>t?4:0]},$$scope:{ctx:t}}}),{c(){n=B("div"),k(s.$$.fragment),a=C(),k(e.$$.fragment),o=C(),k(r.$$.fragment),this.h()},l(t){n=S(t,"DIV",{slot:!0,class:!0});var $=l(n);h(s.$$.fragment,$),a=j($),h(e.$$.fragment,$),o=j($),h(r.$$.fragment,$),$.forEach(f),this.h()},h(){i(n,"slot","showcase"),i(n,"class","padded")},m(t,c){u(t,n,c),x(s,n,null),m(n,a),x(e,n,null),m(n,o),x(r,n,null),$=!0},p(t,n){const s={};12&n&&(s.$$scope={dirty:n,ctx:t}),r.$set(s)},i(t){$||(v(s.$$.fragment,t),v(e.$$.fragment,t),v(r.$$.fragment,t),$=!0)},o(t){E(s.$$.fragment,t),E(e.$$.fragment,t),E(r.$$.fragment,t),$=!1},d(t){t&&f(n),b(s),b(e),b(r)}}}function pt(t){let n,s;return{c(){n=B("div"),s=B("pre"),this.h()},l(t){n=S(t,"DIV",{slot:!0});var a=l(n);s=S(a,"PRE",{class:!0}),l(s).forEach(f),a.forEach(f),this.h()},h(){i(s,"class","language-svelte"),i(n,"slot","source")},m(t,a){u(t,n,a),m(n,s),s.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">&#123;</span> href<span class="token operator">:</span> <span class="token string">\'/\'</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">\'Home\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#123;</span> href<span class="token operator">:</span> <span class="token string">\'/docs\'</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">\'Docs\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#123;</span> text<span class="token operator">:</span> <span class="token string">\'Components\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumbs</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>items<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumbs</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>items<span class="token punctuation">&#125;</span></span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>~<span class="token punctuation">\'</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumbs</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>items<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">let:</span>item</span><span class="token punctuation">></span></span>\n    <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> item<span class="token punctuation">.</span>href <span class="token operator">===</span> <span class="token string">\'/\'</span><span class="token punctuation">&#125;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span> <span class="token attr-name">round</span> <span class="token attr-name">small</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HomeIcon</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span><span class="token keyword">else</span><span class="token punctuation">&#125;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Chip</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span>item<span class="token punctuation">.</span>text<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Chip</span><span class="token punctuation">></span></span>\n    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ArrowRightIcon</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>separator<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Breadcrumbs</span><span class="token punctuation">></span></span></code>'},p:g,d(t){t&&f(n)}}}function lt(t){let n;return{c(){n=O("Properties")},l(t){n=T(t,"Properties")},m(t,s){u(t,n,s)},d(t){t&&f(n)}}}function ft(t){let n;return{c(){n=O("Functional Properties")},l(t){n=T(t,"Functional Properties")},m(t,s){u(t,n,s)},d(t){t&&f(n)}}}function it(t){let n;return{c(){n=O("Name")},l(t){n=T(t,"Name")},m(t,s){u(t,n,s)},d(t){t&&f(n)}}}function ut(t){let n;return{c(){n=O("Default")},l(t){n=T(t,"Default")},m(t,s){u(t,n,s)},d(t){t&&f(n)}}}function mt(t){let n;return{c(){n=O("Type")},l(t){n=T(t,"Type")},m(t,s){u(t,n,s)},d(t){t&&f(n)}}}function gt(t){let n;return{c(){n=O("Description")},l(t){n=T(t,"Description")},m(t,s){u(t,n,s)},d(t){t&&f(n)}}}function dt(t){let n,s,a,e,o,r,$,c;return n=new U({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),a=new U({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),o=new U({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),$=new U({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){k(n.$$.fragment),s=C(),k(a.$$.fragment),e=C(),k(o.$$.fragment),r=C(),k($.$$.fragment)},l(t){h(n.$$.fragment,t),s=j(t),h(a.$$.fragment,t),e=j(t),h(o.$$.fragment,t),r=j(t),h($.$$.fragment,t)},m(t,p){x(n,t,p),u(t,s,p),x(a,t,p),u(t,e,p),x(o,t,p),u(t,r,p),x($,t,p),c=!0},p(t,s){const e={};8&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e);const r={};8&s&&(r.$$scope={dirty:s,ctx:t}),a.$set(r);const c={};8&s&&(c.$$scope={dirty:s,ctx:t}),o.$set(c);const p={};8&s&&(p.$$scope={dirty:s,ctx:t}),$.$set(p)},i(t){c||(v(n.$$.fragment,t),v(a.$$.fragment,t),v(o.$$.fragment,t),v($.$$.fragment,t),c=!0)},o(t){E(n.$$.fragment,t),E(a.$$.fragment,t),E(o.$$.fragment,t),E($.$$.fragment,t),c=!1},d(t){b(n,t),t&&f(s),b(a,t),t&&f(e),b(o,t),t&&f(r),b($,t)}}}function kt(t){let n,s,a;return{c(){n=B("strong"),s=B("code"),a=O("items")},l(t){n=S(t,"STRONG",{});var e=l(n);s=S(e,"CODE",{});var o=l(s);a=T(o,"items"),o.forEach(f),e.forEach(f)},m(t,e){u(t,n,e),m(n,s),m(s,a)},d(t){t&&f(n)}}}function ht(t){let n,s;return{c(){n=B("code"),s=O("[]")},l(t){n=S(t,"CODE",{});var a=l(n);s=T(a,"[]"),a.forEach(f)},m(t,a){u(t,n,a),m(n,s)},d(t){t&&f(n)}}}function xt(t){let n,s;return{c(){n=B("code"),s=O(nn)},l(t){n=S(t,"CODE",{});var a=l(n);s=T(a,nn),a.forEach(f)},m(t,a){u(t,n,a),m(n,s)},p:g,d(t){t&&f(n)}}}function wt(t){let n;return{c(){n=O("The list of segments to be displayed.")},l(t){n=T(t,"The list of segments to be displayed.")},m(t,s){u(t,n,s)},d(t){t&&f(n)}}}function yt(t){let n,s,a,e,o,r,$,c;return n=new q({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),a=new q({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),o=new q({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),$=new q({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),{c(){k(n.$$.fragment),s=C(),k(a.$$.fragment),e=C(),k(o.$$.fragment),r=C(),k($.$$.fragment)},l(t){h(n.$$.fragment,t),s=j(t),h(a.$$.fragment,t),e=j(t),h(o.$$.fragment,t),r=j(t),h($.$$.fragment,t)},m(t,p){x(n,t,p),u(t,s,p),x(a,t,p),u(t,e,p),x(o,t,p),u(t,r,p),x($,t,p),c=!0},p(t,s){const e={};8&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e);const r={};8&s&&(r.$$scope={dirty:s,ctx:t}),a.$set(r);const c={};8&s&&(c.$$scope={dirty:s,ctx:t}),o.$set(c);const p={};8&s&&(p.$$scope={dirty:s,ctx:t}),$.$set(p)},i(t){c||(v(n.$$.fragment,t),v(a.$$.fragment,t),v(o.$$.fragment,t),v($.$$.fragment,t),c=!0)},o(t){E(n.$$.fragment,t),E(a.$$.fragment,t),E(o.$$.fragment,t),E($.$$.fragment,t),c=!1},d(t){b(n,t),t&&f(s),b(a,t),t&&f(e),b(o,t),t&&f(r),b($,t)}}}function vt(t){let n,s,a;return{c(){n=B("strong"),s=B("code"),a=O("separator")},l(t){n=S(t,"STRONG",{});var e=l(n);s=S(e,"CODE",{});var o=l(s);a=T(o,"separator"),o.forEach(f),e.forEach(f)},m(t,e){u(t,n,e),m(n,s),m(s,a)},d(t){t&&f(n)}}}function Et(t){let n,s;return{c(){n=B("code"),s=O("'/'")},l(t){n=S(t,"CODE",{});var a=l(n);s=T(a,"'/'"),a.forEach(f)},m(t,a){u(t,n,a),m(n,s)},d(t){t&&f(n)}}}function bt(t){let n,s;return{c(){n=B("code"),s=O("string")},l(t){n=S(t,"CODE",{});var a=l(n);s=T(a,"string"),a.forEach(f)},m(t,a){u(t,n,a),m(n,s)},d(t){t&&f(n)}}}function Dt(t){let n;return{c(){n=O("The separator between segments.")},l(t){n=T(t,"The separator between segments.")},m(t,s){u(t,n,s)},d(t){t&&f(n)}}}function Ct(t){let n,s,a,e,o,r,$,c;return n=new q({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),a=new q({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),o=new q({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),$=new q({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){k(n.$$.fragment),s=C(),k(a.$$.fragment),e=C(),k(o.$$.fragment),r=C(),k($.$$.fragment)},l(t){h(n.$$.fragment,t),s=j(t),h(a.$$.fragment,t),e=j(t),h(o.$$.fragment,t),r=j(t),h($.$$.fragment,t)},m(t,p){x(n,t,p),u(t,s,p),x(a,t,p),u(t,e,p),x(o,t,p),u(t,r,p),x($,t,p),c=!0},p(t,s){const e={};8&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e);const r={};8&s&&(r.$$scope={dirty:s,ctx:t}),a.$set(r);const c={};8&s&&(c.$$scope={dirty:s,ctx:t}),o.$set(c);const p={};8&s&&(p.$$scope={dirty:s,ctx:t}),$.$set(p)},i(t){c||(v(n.$$.fragment,t),v(a.$$.fragment,t),v(o.$$.fragment,t),v($.$$.fragment,t),c=!0)},o(t){E(n.$$.fragment,t),E(a.$$.fragment,t),E(o.$$.fragment,t),E($.$$.fragment,t),c=!1},d(t){b(n,t),t&&f(s),b(a,t),t&&f(e),b(o,t),t&&f(r),b($,t)}}}function jt(t){let n,s,a,e,o,r,$,c;return s=new M({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),o=new M({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),{c(){n=B("thead"),k(s.$$.fragment),a=C(),e=B("tbody"),k(o.$$.fragment),r=C(),k($.$$.fragment)},l(t){n=S(t,"THEAD",{});var c=l(n);h(s.$$.fragment,c),c.forEach(f),a=j(t),e=S(t,"TBODY",{});var p=l(e);h(o.$$.fragment,p),r=j(p),h($.$$.fragment,p),p.forEach(f)},m(t,p){u(t,n,p),x(s,n,null),u(t,a,p),u(t,e,p),x(o,e,null),m(e,r),x($,e,null),c=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const e={};8&n&&(e.$$scope={dirty:n,ctx:t}),o.$set(e);const r={};8&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r)},i(t){c||(v(s.$$.fragment,t),v(o.$$.fragment,t),v($.$$.fragment,t),c=!0)},o(t){E(s.$$.fragment,t),E(o.$$.fragment,t),E($.$$.fragment,t),c=!1},d(t){t&&f(n),b(s),t&&f(a),t&&f(e),b(o),b($)}}}function Ot(t){let n;return{c(){n=O("Slots")},l(t){n=T(t,"Slots")},m(t,s){u(t,n,s)},d(t){t&&f(n)}}}function Tt(t){let n,s,a;return{c(){n=B("code"),s=O("item"),a=O(" slot")},l(t){n=S(t,"CODE",{});var e=l(n);s=T(e,"item"),e.forEach(f),a=T(t," slot")},m(t,e){u(t,n,e),m(n,s),u(t,a,e)},d(t){t&&f(n),t&&f(a)}}}function Bt(t){let n,s,a,e,o,r,$,c,p,i;return{c(){n=O("The item displayed in the breadcrumbs. Defaults to a "),s=B("code"),a=O("<Button>"),e=O(" if "),o=B("code"),r=O("href"),$=O(" is provided, otherwise a "),c=B("code"),p=O("<span>"),i=O(".")},l(t){n=T(t,"The item displayed in the breadcrumbs. Defaults to a "),s=S(t,"CODE",{});var u=l(s);a=T(u,"<Button>"),u.forEach(f),e=T(t," if "),o=S(t,"CODE",{});var m=l(o);r=T(m,"href"),m.forEach(f),$=T(t," is provided, otherwise a "),c=S(t,"CODE",{});var g=l(c);p=T(g,"<span>"),g.forEach(f),i=T(t,".")},m(t,l){u(t,n,l),u(t,s,l),m(s,a),u(t,e,l),u(t,o,l),m(o,r),u(t,$,l),u(t,c,l),m(c,p),u(t,i,l)},d(t){t&&f(n),t&&f(s),t&&f(e),t&&f(o),t&&f($),t&&f(c),t&&f(i)}}}function St(t){let n;return{c(){n=O("Prop Name")},l(t){n=T(t,"Prop Name")},m(t,s){u(t,n,s)},d(t){t&&f(n)}}}function Ht(t){let n;return{c(){n=O("Type")},l(t){n=T(t,"Type")},m(t,s){u(t,n,s)},d(t){t&&f(n)}}}function It(t){let n;return{c(){n=O("Description")},l(t){n=T(t,"Description")},m(t,s){u(t,n,s)},d(t){t&&f(n)}}}function Rt(t){let n,s,a,e,o,r;return n=new U({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),a=new U({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),o=new U({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){k(n.$$.fragment),s=C(),k(a.$$.fragment),e=C(),k(o.$$.fragment)},l(t){h(n.$$.fragment,t),s=j(t),h(a.$$.fragment,t),e=j(t),h(o.$$.fragment,t)},m(t,$){x(n,t,$),u(t,s,$),x(a,t,$),u(t,e,$),x(o,t,$),r=!0},p(t,s){const e={};8&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e);const r={};8&s&&(r.$$scope={dirty:s,ctx:t}),a.$set(r);const $={};8&s&&($.$$scope={dirty:s,ctx:t}),o.$set($)},i(t){r||(v(n.$$.fragment,t),v(a.$$.fragment,t),v(o.$$.fragment,t),r=!0)},o(t){E(n.$$.fragment,t),E(a.$$.fragment,t),E(o.$$.fragment,t),r=!1},d(t){b(n,t),t&&f(s),b(a,t),t&&f(e),b(o,t)}}}function zt(t){let n,s,a;return{c(){n=B("strong"),s=B("code"),a=O("item")},l(t){n=S(t,"STRONG",{});var e=l(n);s=S(e,"CODE",{});var o=l(s);a=T(o,"item"),o.forEach(f),e.forEach(f)},m(t,e){u(t,n,e),m(n,s),m(s,a)},d(t){t&&f(n)}}}function Nt(t){let n,s;return{c(){n=B("code"),s=O("{ href?: string, text: string }")},l(t){n=S(t,"CODE",{});var a=l(n);s=T(a,"{ href?: string, text: string }"),a.forEach(f)},m(t,a){u(t,n,a),m(n,s)},d(t){t&&f(n)}}}function Pt(t){let n;return{c(){n=O("Information about the current segment.")},l(t){n=T(t,"Information about the current segment.")},m(t,s){u(t,n,s)},d(t){t&&f(n)}}}function At(t){let n,s,a,e,o,r;return n=new q({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),a=new q({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),o=new q({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),{c(){k(n.$$.fragment),s=C(),k(a.$$.fragment),e=C(),k(o.$$.fragment)},l(t){h(n.$$.fragment,t),s=j(t),h(a.$$.fragment,t),e=j(t),h(o.$$.fragment,t)},m(t,$){x(n,t,$),u(t,s,$),x(a,t,$),u(t,e,$),x(o,t,$),r=!0},p(t,s){const e={};8&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e);const r={};8&s&&(r.$$scope={dirty:s,ctx:t}),a.$set(r);const $={};8&s&&($.$$scope={dirty:s,ctx:t}),o.$set($)},i(t){r||(v(n.$$.fragment,t),v(a.$$.fragment,t),v(o.$$.fragment,t),r=!0)},o(t){E(n.$$.fragment,t),E(a.$$.fragment,t),E(o.$$.fragment,t),r=!1},d(t){b(n,t),t&&f(s),b(a,t),t&&f(e),b(o,t)}}}function Vt(t){let n,s,a,e,o,r;return s=new M({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),o=new M({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),{c(){n=B("thead"),k(s.$$.fragment),a=C(),e=B("tbody"),k(o.$$.fragment)},l(t){n=S(t,"THEAD",{});var r=l(n);h(s.$$.fragment,r),r.forEach(f),a=j(t),e=S(t,"TBODY",{});var $=l(e);h(o.$$.fragment,$),$.forEach(f)},m(t,$){u(t,n,$),x(s,n,null),u(t,a,$),u(t,e,$),x(o,e,null),r=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const e={};8&n&&(e.$$scope={dirty:n,ctx:t}),o.$set(e)},i(t){r||(v(s.$$.fragment,t),v(o.$$.fragment,t),r=!0)},o(t){E(s.$$.fragment,t),E(o.$$.fragment,t),r=!1},d(t){t&&f(n),b(s),t&&f(a),t&&f(e),b(o)}}}function Gt(t){let n,s,a;return{c(){n=B("code"),s=O("separator"),a=O(" slot")},l(t){n=S(t,"CODE",{});var e=l(n);s=T(e,"separator"),e.forEach(f),a=T(t," slot")},m(t,e){u(t,n,e),m(n,s),u(t,a,e)},d(t){t&&f(n),t&&f(a)}}}function Wt(t){let n;return{c(){n=O("If a string separator is not enough, use this slot to add a custom component separator (and ignore the prop).")},l(t){n=T(t,"If a string separator is not enough, use this slot to add a custom component separator (and ignore the prop).")},m(t,s){u(t,n,s)},d(t){t&&f(n)}}}function Ft(t){let n;return{c(){n=O("SCSS Variables")},l(t){n=T(t,"SCSS Variables")},m(t,s){u(t,n,s)},d(t){t&&f(n)}}}function Yt(t){let n;return{c(){n=O("Name")},l(t){n=T(t,"Name")},m(t,s){u(t,n,s)},d(t){t&&f(n)}}}function Lt(t){let n;return{c(){n=O("Description")},l(t){n=T(t,"Description")},m(t,s){u(t,n,s)},d(t){t&&f(n)}}}function _t(t){let n;return{c(){n=O("Default")},l(t){n=T(t,"Default")},m(t,s){u(t,n,s)},d(t){t&&f(n)}}}function Jt(t){let n,s,a,e,o,r;return n=new U({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),a=new U({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),o=new U({props:{$$slots:{default:[_t]},$$scope:{ctx:t}}}),{c(){k(n.$$.fragment),s=C(),k(a.$$.fragment),e=C(),k(o.$$.fragment)},l(t){h(n.$$.fragment,t),s=j(t),h(a.$$.fragment,t),e=j(t),h(o.$$.fragment,t)},m(t,$){x(n,t,$),u(t,s,$),x(a,t,$),u(t,e,$),x(o,t,$),r=!0},p(t,s){const e={};8&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e);const r={};8&s&&(r.$$scope={dirty:s,ctx:t}),a.$set(r);const $={};8&s&&($.$$scope={dirty:s,ctx:t}),o.$set($)},i(t){r||(v(n.$$.fragment,t),v(a.$$.fragment,t),v(o.$$.fragment,t),r=!0)},o(t){E(n.$$.fragment,t),E(a.$$.fragment,t),E(o.$$.fragment,t),r=!1},d(t){b(n,t),t&&f(s),b(a,t),t&&f(e),b(o,t)}}}function Mt(t){let n,s,a;return{c(){n=B("strong"),s=B("code"),a=O("$thin-font-weight")},l(t){n=S(t,"STRONG",{});var e=l(n);s=S(e,"CODE",{});var o=l(s);a=T(o,"$thin-font-weight"),o.forEach(f),e.forEach(f)},m(t,e){u(t,n,e),m(n,s),m(s,a)},d(t){t&&f(n)}}}function Ut(t){let n,s,a,e;return{c(){n=O("The font size of the separator and the segments without "),s=B("code"),a=O("href"),e=O(".")},l(t){n=T(t,"The font size of the separator and the segments without "),s=S(t,"CODE",{});var o=l(s);a=T(o,"href"),o.forEach(f),e=T(t,".")},m(t,o){u(t,n,o),u(t,s,o),m(s,a),u(t,e,o)},d(t){t&&f(n),t&&f(s),t&&f(e)}}}function qt(t){let n,s;return{c(){n=B("code"),s=O("300")},l(t){n=S(t,"CODE",{});var a=l(n);s=T(a,"300"),a.forEach(f)},m(t,a){u(t,n,a),m(n,s)},d(t){t&&f(n)}}}function Kt(t){let n,s,a,e,o,r;return n=new q({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),a=new q({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),o=new q({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){k(n.$$.fragment),s=C(),k(a.$$.fragment),e=C(),k(o.$$.fragment)},l(t){h(n.$$.fragment,t),s=j(t),h(a.$$.fragment,t),e=j(t),h(o.$$.fragment,t)},m(t,$){x(n,t,$),u(t,s,$),x(a,t,$),u(t,e,$),x(o,t,$),r=!0},p(t,s){const e={};8&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e);const r={};8&s&&(r.$$scope={dirty:s,ctx:t}),a.$set(r);const $={};8&s&&($.$$scope={dirty:s,ctx:t}),o.$set($)},i(t){r||(v(n.$$.fragment,t),v(a.$$.fragment,t),v(o.$$.fragment,t),r=!0)},o(t){E(n.$$.fragment,t),E(a.$$.fragment,t),E(o.$$.fragment,t),r=!1},d(t){b(n,t),t&&f(s),b(a,t),t&&f(e),b(o,t)}}}function Qt(t){let n,s,a,e,o,r;return s=new M({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),o=new M({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),{c(){n=B("thead"),k(s.$$.fragment),a=C(),e=B("tbody"),k(o.$$.fragment)},l(t){n=S(t,"THEAD",{});var r=l(n);h(s.$$.fragment,r),r.forEach(f),a=j(t),e=S(t,"TBODY",{});var $=l(e);h(o.$$.fragment,$),$.forEach(f)},m(t,$){u(t,n,$),x(s,n,null),u(t,a,$),u(t,e,$),x(o,e,null),r=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const e={};8&n&&(e.$$scope={dirty:n,ctx:t}),o.$set(e)},i(t){r||(v(s.$$.fragment,t),v(o.$$.fragment,t),r=!0)},o(t){E(s.$$.fragment,t),E(o.$$.fragment,t),r=!1},d(t){t&&f(n),b(s),t&&f(a),t&&f(e),b(o)}}}function Xt(t){let n,s,a,e,o,r,$,c,p,l,i,m,g,d,w,y,D,O,T,B,S,H,I,R,z,A,V,G;return n=new N({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),a=new P({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),o=new Y({props:{$$slots:{source:[pt],showcase:[ct]},$$scope:{ctx:t}}}),$=new L({props:{id:"properties",$$slots:{default:[lt]},$$scope:{ctx:t}}}),p=new _({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),i=new J({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),g=new L({props:{id:"slots",$$slots:{default:[Ot]},$$scope:{ctx:t}}}),w=new _({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),D=new P({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),T=new J({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),S=new _({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),I=new P({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),z=new L({props:{id:"scss-variables",$$slots:{default:[Ft]},$$scope:{ctx:t}}}),V=new J({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),{c(){k(n.$$.fragment),s=C(),k(a.$$.fragment),e=C(),k(o.$$.fragment),r=C(),k($.$$.fragment),c=C(),k(p.$$.fragment),l=C(),k(i.$$.fragment),m=C(),k(g.$$.fragment),d=C(),k(w.$$.fragment),y=C(),k(D.$$.fragment),O=C(),k(T.$$.fragment),B=C(),k(S.$$.fragment),H=C(),k(I.$$.fragment),R=C(),k(z.$$.fragment),A=C(),k(V.$$.fragment)},l(t){h(n.$$.fragment,t),s=j(t),h(a.$$.fragment,t),e=j(t),h(o.$$.fragment,t),r=j(t),h($.$$.fragment,t),c=j(t),h(p.$$.fragment,t),l=j(t),h(i.$$.fragment,t),m=j(t),h(g.$$.fragment,t),d=j(t),h(w.$$.fragment,t),y=j(t),h(D.$$.fragment,t),O=j(t),h(T.$$.fragment,t),B=j(t),h(S.$$.fragment,t),H=j(t),h(I.$$.fragment,t),R=j(t),h(z.$$.fragment,t),A=j(t),h(V.$$.fragment,t)},m(t,f){x(n,t,f),u(t,s,f),x(a,t,f),u(t,e,f),x(o,t,f),u(t,r,f),x($,t,f),u(t,c,f),x(p,t,f),u(t,l,f),x(i,t,f),u(t,m,f),x(g,t,f),u(t,d,f),x(w,t,f),u(t,y,f),x(D,t,f),u(t,O,f),x(T,t,f),u(t,B,f),x(S,t,f),u(t,H,f),x(I,t,f),u(t,R,f),x(z,t,f),u(t,A,f),x(V,t,f),G=!0},p(t,s){const e={};8&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e);const r={};8&s&&(r.$$scope={dirty:s,ctx:t}),a.$set(r);const c={};8&s&&(c.$$scope={dirty:s,ctx:t}),o.$set(c);const l={};8&s&&(l.$$scope={dirty:s,ctx:t}),$.$set(l);const f={};8&s&&(f.$$scope={dirty:s,ctx:t}),p.$set(f);const u={};8&s&&(u.$$scope={dirty:s,ctx:t}),i.$set(u);const m={};8&s&&(m.$$scope={dirty:s,ctx:t}),g.$set(m);const d={};8&s&&(d.$$scope={dirty:s,ctx:t}),w.$set(d);const k={};8&s&&(k.$$scope={dirty:s,ctx:t}),D.$set(k);const h={};8&s&&(h.$$scope={dirty:s,ctx:t}),T.$set(h);const x={};8&s&&(x.$$scope={dirty:s,ctx:t}),S.$set(x);const y={};8&s&&(y.$$scope={dirty:s,ctx:t}),I.$set(y);const v={};8&s&&(v.$$scope={dirty:s,ctx:t}),z.$set(v);const E={};8&s&&(E.$$scope={dirty:s,ctx:t}),V.$set(E)},i(t){G||(v(n.$$.fragment,t),v(a.$$.fragment,t),v(o.$$.fragment,t),v($.$$.fragment,t),v(p.$$.fragment,t),v(i.$$.fragment,t),v(g.$$.fragment,t),v(w.$$.fragment,t),v(D.$$.fragment,t),v(T.$$.fragment,t),v(S.$$.fragment,t),v(I.$$.fragment,t),v(z.$$.fragment,t),v(V.$$.fragment,t),G=!0)},o(t){E(n.$$.fragment,t),E(a.$$.fragment,t),E(o.$$.fragment,t),E($.$$.fragment,t),E(p.$$.fragment,t),E(i.$$.fragment,t),E(g.$$.fragment,t),E(w.$$.fragment,t),E(D.$$.fragment,t),E(T.$$.fragment,t),E(S.$$.fragment,t),E(I.$$.fragment,t),E(z.$$.fragment,t),E(V.$$.fragment,t),G=!1},d(t){b(n,t),t&&f(s),b(a,t),t&&f(e),b(o,t),t&&f(r),b($,t),t&&f(c),b(p,t),t&&f(l),b(i,t),t&&f(m),b(g,t),t&&f(d),b(w,t),t&&f(y),b(D,t),t&&f(O),b(T,t),t&&f(B),b(S,t),t&&f(H),b(I,t),t&&f(R),b(z,t),t&&f(A),b(V,t)}}}function Zt(t){let n,s;const a=[t[1],tn];let e={$$slots:{default:[Xt]},$$scope:{ctx:t}};for(let t=0;t<a.length;t+=1)e=d(e,a[t]);return n=new z({props:e}),{c(){k(n.$$.fragment)},l(t){h(n.$$.fragment,t)},m(t,a){x(n,t,a),s=!0},p(t,[s]){const e=2&s?w(a,[2&s&&y(t[1]),0&s&&y(tn)]):{};8&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e)},i(t){s||(v(n.$$.fragment,t),s=!0)},o(t){E(n.$$.fragment,t),s=!1},d(t){b(n,t)}}}const tn={name:"Breadcrumbs"},nn="Array<{ href?: string; text: string; }>";function sn(t,n,s){return t.$$set=t=>{s(1,n=d(d({},n),D(t)))},[[{href:"/",text:"Home"},{href:"/docs",text:"Docs"},{text:"Components"}],n=D(n)]}class an extends ${constructor(t){super(),e(this,t,sn,Zt,o,{})}}export{an as default,tn as metadata};
