import{S as t,i as n,s,a,c as e,b as o,d as $,e as r,f as c,g as p,n as l,J as f,j as i,l as u,m,T as g,Z as d,t as k,p as h,q as x,K as w,r as y,v,u as E,w as b,h as D,k as T,x as j,y as C,z as O}from"./client.9a6ca202.js";import{L as B,H as S,P as H}from"./layout.76e59ed5.js";import{B as z}from"./button.8df09b4e.js";import{C as I}from"./chip.213bf032.js";import{B as N}from"./breadcrumbs.362724bc.js";import{H as P}from"./HomeIcon.d324d332.js";import{S as R}from"./showcase.d6a187e1.js";import{H as A}from"./h2.7d3433ce.js";import{H as V}from"./h3.437151e5.js";import{T as G,a as W,b as Y,c as F}from"./table.02cb81e4.js";import"./classes.2453fa25.js";import"./label.6a8c4a84.js";import"./copyable-code.b5e4b2d8.js";function L(t){let n,s,f,i;return{c(){n=a("svg"),s=a("line"),f=a("polyline"),this.h()},l(t){n=e(t,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var a=o(n);s=e(a,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),o(s).forEach($),f=e(a,"polyline",{points:!0}),o(f).forEach($),a.forEach($),this.h()},h(){r(s,"x1","5"),r(s,"y1","12"),r(s,"x2","19"),r(s,"y2","12"),r(f,"points","12 5 19 12 12 19"),r(n,"xmlns","http://www.w3.org/2000/svg"),r(n,"width",t[0]),r(n,"height",t[0]),r(n,"fill","none"),r(n,"viewBox","0 0 24 24"),r(n,"stroke","currentColor"),r(n,"stroke-width",t[1]),r(n,"stroke-linecap","round"),r(n,"stroke-linejoin","round"),r(n,"class",i="feather feather-arrow-right "+t[2])},m(t,a){c(t,n,a),p(n,s),p(n,f)},p(t,[s]){1&s&&r(n,"width",t[0]),1&s&&r(n,"height",t[0]),2&s&&r(n,"stroke-width",t[1]),4&s&&i!==(i="feather feather-arrow-right "+t[2])&&r(n,"class",i)},i:l,o:l,d(t){t&&$(n)}}}function q(t,n,s){let{size:a="100%"}=n,{strokeWidth:e=2}=n,{class:o=""}=n;return"100%"!==a&&(a="x"===a.slice(-1)?a.slice(0,a.length-1)+"em":parseInt(a)+"px"),t.$$set=t=>{"size"in t&&s(0,a=t.size),"strokeWidth"in t&&s(1,e=t.strokeWidth),"class"in t&&s(2,o=t.class)},[a,e,o]}class J extends t{constructor(t){super(),n(this,t,q,L,s,{size:0,strokeWidth:1,class:2})}}function K(t){let n;return{c(){n=E("Breadcrumbs")},l(t){n=b(t,"Breadcrumbs")},m(t,s){c(t,n,s)},d(t){t&&$(n)}}}function M(t){let n;return{c(){n=E("Breadcrumbs are used to indicate the current page's location in the navigation hierarchy, as well as to navigate through it.")},l(t){n=b(t,"Breadcrumbs are used to indicate the current page's location in the navigation hierarchy, as well as to navigate through it.")},m(t,s){c(t,n,s)},d(t){t&&$(n)}}}function Z(t){let n,s;return n=new I({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),{c(){i(n.$$.fragment)},l(t){u(n.$$.fragment,t)},m(t,a){m(n,t,a),s=!0},p(t,s){const a={};12&s&&(a.$$scope={dirty:s,ctx:t}),n.$set(a)},i(t){s||(k(n.$$.fragment,t),s=!0)},o(t){h(n.$$.fragment,t),s=!1},d(t){x(n,t)}}}function Q(t){let n,s;return n=new z({props:{href:"/",round:!0,small:!0,$$slots:{default:[X]},$$scope:{ctx:t}}}),{c(){i(n.$$.fragment)},l(t){u(n.$$.fragment,t)},m(t,a){m(n,t,a),s=!0},p(t,s){const a={};8&s&&(a.$$scope={dirty:s,ctx:t}),n.$set(a)},i(t){s||(k(n.$$.fragment,t),s=!0)},o(t){h(n.$$.fragment,t),s=!1},d(t){x(n,t)}}}function U(t){let n,s=t[2].text+"";return{c(){n=E(s)},l(t){n=b(t,s)},m(t,s){c(t,n,s)},p(t,a){4&a&&s!==(s=t[2].text+"")&&O(n,s)},d(t){t&&$(n)}}}function X(t){let n,s;return n=new P({props:{size:"20"}}),{c(){i(n.$$.fragment)},l(t){u(n.$$.fragment,t)},m(t,a){m(n,t,a),s=!0},p:l,i(t){s||(k(n.$$.fragment,t),s=!0)},o(t){h(n.$$.fragment,t),s=!1},d(t){x(n,t)}}}function _(t){let n,s,a,e;const p=[Q,Z],l=[];function f(t,n){return"/"===t[2].href?0:1}return s=f(t),a=l[s]=p[s](t),{c(){n=D("div"),a.c(),this.h()},l(t){n=T(t,"DIV",{slot:!0});var s=o(n);a.l(s),s.forEach($),this.h()},h(){r(n,"slot","item")},m(t,a){c(t,n,a),l[s].m(n,null),e=!0},p(t,e){let o=s;s=f(t),s===o?l[s].p(t,e):(j(),h(l[o],1,1,(()=>{l[o]=null})),C(),a=l[s],a?a.p(t,e):(a=l[s]=p[s](t),a.c()),k(a,1),a.m(n,null))},i(t){e||(k(a),e=!0)},o(t){h(a),e=!1},d(t){t&&$(n),l[s].d()}}}function tt(t){let n,s;return n=new J({props:{slot:"separator",size:"20"}}),{c(){i(n.$$.fragment)},l(t){u(n.$$.fragment,t)},m(t,a){m(n,t,a),s=!0},p:l,i(t){s||(k(n.$$.fragment,t),s=!0)},o(t){h(n.$$.fragment,t),s=!1},d(t){x(n,t)}}}function nt(t){let n,s,a,e,l,f,g;return s=new N({props:{items:t[0]}}),e=new N({props:{items:t[0],separator:"~"}}),f=new N({props:{items:t[0],$$slots:{separator:[tt],item:[_,({item:t})=>({2:t}),({item:t})=>t?4:0]},$$scope:{ctx:t}}}),{c(){n=D("div"),i(s.$$.fragment),a=y(),i(e.$$.fragment),l=y(),i(f.$$.fragment),this.h()},l(t){n=T(t,"DIV",{slot:!0,class:!0});var r=o(n);u(s.$$.fragment,r),a=v(r),u(e.$$.fragment,r),l=v(r),u(f.$$.fragment,r),r.forEach($),this.h()},h(){r(n,"slot","showcase"),r(n,"class","padded")},m(t,o){c(t,n,o),m(s,n,null),p(n,a),m(e,n,null),p(n,l),m(f,n,null),g=!0},p(t,n){const s={};12&n&&(s.$$scope={dirty:n,ctx:t}),f.$set(s)},i(t){g||(k(s.$$.fragment,t),k(e.$$.fragment,t),k(f.$$.fragment,t),g=!0)},o(t){h(s.$$.fragment,t),h(e.$$.fragment,t),h(f.$$.fragment,t),g=!1},d(t){t&&$(n),x(s),x(e),x(f)}}}function st(t){let n,s;return{c(){n=D("div"),s=D("pre"),this.h()},l(t){n=T(t,"DIV",{slot:!0});var a=o(n);s=T(a,"PRE",{class:!0}),o(s).forEach($),a.forEach($),this.h()},h(){r(s,"class","language-svelte"),r(n,"slot","source")},m(t,a){c(t,n,a),p(n,s),s.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">&#123;</span> href<span class="token operator">:</span> <span class="token string">\'/\'</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">\'Home\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#123;</span> href<span class="token operator">:</span> <span class="token string">\'/docs\'</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">\'Docs\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#123;</span> text<span class="token operator">:</span> <span class="token string">\'Components\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumbs</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>items<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumbs</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>items<span class="token punctuation">&#125;</span></span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>~<span class="token punctuation">\'</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumbs</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>items<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">let:</span>item</span><span class="token punctuation">></span></span>\n    <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> item<span class="token punctuation">.</span>href <span class="token operator">===</span> <span class="token string">\'/\'</span><span class="token punctuation">&#125;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span> <span class="token attr-name">round</span> <span class="token attr-name">small</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HomeIcon</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span><span class="token keyword">else</span><span class="token punctuation">&#125;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Chip</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span>item<span class="token punctuation">.</span>text<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Chip</span><span class="token punctuation">></span></span>\n    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ArrowRightIcon</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>separator<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Breadcrumbs</span><span class="token punctuation">></span></span></code>'},p:l,d(t){t&&$(n)}}}function at(t){let n;return{c(){n=E("Properties")},l(t){n=b(t,"Properties")},m(t,s){c(t,n,s)},d(t){t&&$(n)}}}function et(t){let n;return{c(){n=E("Functional Properties")},l(t){n=b(t,"Functional Properties")},m(t,s){c(t,n,s)},d(t){t&&$(n)}}}function ot(t){let n;return{c(){n=E("Name")},l(t){n=b(t,"Name")},m(t,s){c(t,n,s)},d(t){t&&$(n)}}}function $t(t){let n;return{c(){n=E("Default")},l(t){n=b(t,"Default")},m(t,s){c(t,n,s)},d(t){t&&$(n)}}}function rt(t){let n;return{c(){n=E("Type")},l(t){n=b(t,"Type")},m(t,s){c(t,n,s)},d(t){t&&$(n)}}}function ct(t){let n;return{c(){n=E("Description")},l(t){n=b(t,"Description")},m(t,s){c(t,n,s)},d(t){t&&$(n)}}}function pt(t){let n,s,a,e,o,r,p,l;return n=new Y({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),a=new Y({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),o=new Y({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),p=new Y({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),{c(){i(n.$$.fragment),s=y(),i(a.$$.fragment),e=y(),i(o.$$.fragment),r=y(),i(p.$$.fragment)},l(t){u(n.$$.fragment,t),s=v(t),u(a.$$.fragment,t),e=v(t),u(o.$$.fragment,t),r=v(t),u(p.$$.fragment,t)},m(t,$){m(n,t,$),c(t,s,$),m(a,t,$),c(t,e,$),m(o,t,$),c(t,r,$),m(p,t,$),l=!0},p(t,s){const e={};8&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e);const $={};8&s&&($.$$scope={dirty:s,ctx:t}),a.$set($);const r={};8&s&&(r.$$scope={dirty:s,ctx:t}),o.$set(r);const c={};8&s&&(c.$$scope={dirty:s,ctx:t}),p.$set(c)},i(t){l||(k(n.$$.fragment,t),k(a.$$.fragment,t),k(o.$$.fragment,t),k(p.$$.fragment,t),l=!0)},o(t){h(n.$$.fragment,t),h(a.$$.fragment,t),h(o.$$.fragment,t),h(p.$$.fragment,t),l=!1},d(t){x(n,t),t&&$(s),x(a,t),t&&$(e),x(o,t),t&&$(r),x(p,t)}}}function lt(t){let n,s,a;return{c(){n=D("strong"),s=D("code"),a=E("items")},l(t){n=T(t,"STRONG",{});var e=o(n);s=T(e,"CODE",{});var r=o(s);a=b(r,"items"),r.forEach($),e.forEach($)},m(t,e){c(t,n,e),p(n,s),p(s,a)},d(t){t&&$(n)}}}function ft(t){let n,s;return{c(){n=D("code"),s=E("[]")},l(t){n=T(t,"CODE",{});var a=o(n);s=b(a,"[]"),a.forEach($)},m(t,a){c(t,n,a),p(n,s)},d(t){t&&$(n)}}}function it(t){let n,s;return{c(){n=D("code"),s=E(Mt)},l(t){n=T(t,"CODE",{});var a=o(n);s=b(a,Mt),a.forEach($)},m(t,a){c(t,n,a),p(n,s)},p:l,d(t){t&&$(n)}}}function ut(t){let n;return{c(){n=E("The list of segments to be displayed.")},l(t){n=b(t,"The list of segments to be displayed.")},m(t,s){c(t,n,s)},d(t){t&&$(n)}}}function mt(t){let n,s,a,e,o,r,p,l;return n=new F({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),a=new F({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),o=new F({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),p=new F({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){i(n.$$.fragment),s=y(),i(a.$$.fragment),e=y(),i(o.$$.fragment),r=y(),i(p.$$.fragment)},l(t){u(n.$$.fragment,t),s=v(t),u(a.$$.fragment,t),e=v(t),u(o.$$.fragment,t),r=v(t),u(p.$$.fragment,t)},m(t,$){m(n,t,$),c(t,s,$),m(a,t,$),c(t,e,$),m(o,t,$),c(t,r,$),m(p,t,$),l=!0},p(t,s){const e={};8&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e);const $={};8&s&&($.$$scope={dirty:s,ctx:t}),a.$set($);const r={};8&s&&(r.$$scope={dirty:s,ctx:t}),o.$set(r);const c={};8&s&&(c.$$scope={dirty:s,ctx:t}),p.$set(c)},i(t){l||(k(n.$$.fragment,t),k(a.$$.fragment,t),k(o.$$.fragment,t),k(p.$$.fragment,t),l=!0)},o(t){h(n.$$.fragment,t),h(a.$$.fragment,t),h(o.$$.fragment,t),h(p.$$.fragment,t),l=!1},d(t){x(n,t),t&&$(s),x(a,t),t&&$(e),x(o,t),t&&$(r),x(p,t)}}}function gt(t){let n,s,a;return{c(){n=D("strong"),s=D("code"),a=E("separator")},l(t){n=T(t,"STRONG",{});var e=o(n);s=T(e,"CODE",{});var r=o(s);a=b(r,"separator"),r.forEach($),e.forEach($)},m(t,e){c(t,n,e),p(n,s),p(s,a)},d(t){t&&$(n)}}}function dt(t){let n,s;return{c(){n=D("code"),s=E("'/'")},l(t){n=T(t,"CODE",{});var a=o(n);s=b(a,"'/'"),a.forEach($)},m(t,a){c(t,n,a),p(n,s)},d(t){t&&$(n)}}}function kt(t){let n,s;return{c(){n=D("code"),s=E("string")},l(t){n=T(t,"CODE",{});var a=o(n);s=b(a,"string"),a.forEach($)},m(t,a){c(t,n,a),p(n,s)},d(t){t&&$(n)}}}function ht(t){let n;return{c(){n=E("The separator between segments.")},l(t){n=b(t,"The separator between segments.")},m(t,s){c(t,n,s)},d(t){t&&$(n)}}}function xt(t){let n,s,a,e,o,r,p,l;return n=new F({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),a=new F({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),o=new F({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),p=new F({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){i(n.$$.fragment),s=y(),i(a.$$.fragment),e=y(),i(o.$$.fragment),r=y(),i(p.$$.fragment)},l(t){u(n.$$.fragment,t),s=v(t),u(a.$$.fragment,t),e=v(t),u(o.$$.fragment,t),r=v(t),u(p.$$.fragment,t)},m(t,$){m(n,t,$),c(t,s,$),m(a,t,$),c(t,e,$),m(o,t,$),c(t,r,$),m(p,t,$),l=!0},p(t,s){const e={};8&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e);const $={};8&s&&($.$$scope={dirty:s,ctx:t}),a.$set($);const r={};8&s&&(r.$$scope={dirty:s,ctx:t}),o.$set(r);const c={};8&s&&(c.$$scope={dirty:s,ctx:t}),p.$set(c)},i(t){l||(k(n.$$.fragment,t),k(a.$$.fragment,t),k(o.$$.fragment,t),k(p.$$.fragment,t),l=!0)},o(t){h(n.$$.fragment,t),h(a.$$.fragment,t),h(o.$$.fragment,t),h(p.$$.fragment,t),l=!1},d(t){x(n,t),t&&$(s),x(a,t),t&&$(e),x(o,t),t&&$(r),x(p,t)}}}function wt(t){let n,s,a,e,r,l,f,g;return s=new W({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),r=new W({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),f=new W({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),{c(){n=D("thead"),i(s.$$.fragment),a=y(),e=D("tbody"),i(r.$$.fragment),l=y(),i(f.$$.fragment)},l(t){n=T(t,"THEAD",{});var c=o(n);u(s.$$.fragment,c),c.forEach($),a=v(t),e=T(t,"TBODY",{});var p=o(e);u(r.$$.fragment,p),l=v(p),u(f.$$.fragment,p),p.forEach($)},m(t,o){c(t,n,o),m(s,n,null),c(t,a,o),c(t,e,o),m(r,e,null),p(e,l),m(f,e,null),g=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const e={};8&n&&(e.$$scope={dirty:n,ctx:t}),r.$set(e);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),f.$set(o)},i(t){g||(k(s.$$.fragment,t),k(r.$$.fragment,t),k(f.$$.fragment,t),g=!0)},o(t){h(s.$$.fragment,t),h(r.$$.fragment,t),h(f.$$.fragment,t),g=!1},d(t){t&&$(n),x(s),t&&$(a),t&&$(e),x(r),x(f)}}}function yt(t){let n;return{c(){n=E("Slots")},l(t){n=b(t,"Slots")},m(t,s){c(t,n,s)},d(t){t&&$(n)}}}function vt(t){let n,s,a;return{c(){n=D("code"),s=E("item"),a=E(" slot")},l(t){n=T(t,"CODE",{});var e=o(n);s=b(e,"item"),e.forEach($),a=b(t," slot")},m(t,e){c(t,n,e),p(n,s),c(t,a,e)},d(t){t&&$(n),t&&$(a)}}}function Et(t){let n,s,a,e,r,l,f,i,u,m;return{c(){n=E("The item displayed in the breadcrumbs. Defaults to a "),s=D("code"),a=E("<Button>"),e=E(" if "),r=D("code"),l=E("href"),f=E(" is provided, otherwise a "),i=D("code"),u=E("<span>"),m=E(".")},l(t){n=b(t,"The item displayed in the breadcrumbs. Defaults to a "),s=T(t,"CODE",{});var c=o(s);a=b(c,"<Button>"),c.forEach($),e=b(t," if "),r=T(t,"CODE",{});var p=o(r);l=b(p,"href"),p.forEach($),f=b(t," is provided, otherwise a "),i=T(t,"CODE",{});var g=o(i);u=b(g,"<span>"),g.forEach($),m=b(t,".")},m(t,o){c(t,n,o),c(t,s,o),p(s,a),c(t,e,o),c(t,r,o),p(r,l),c(t,f,o),c(t,i,o),p(i,u),c(t,m,o)},d(t){t&&$(n),t&&$(s),t&&$(e),t&&$(r),t&&$(f),t&&$(i),t&&$(m)}}}function bt(t){let n;return{c(){n=E("Prop Name")},l(t){n=b(t,"Prop Name")},m(t,s){c(t,n,s)},d(t){t&&$(n)}}}function Dt(t){let n;return{c(){n=E("Type")},l(t){n=b(t,"Type")},m(t,s){c(t,n,s)},d(t){t&&$(n)}}}function Tt(t){let n;return{c(){n=E("Description")},l(t){n=b(t,"Description")},m(t,s){c(t,n,s)},d(t){t&&$(n)}}}function jt(t){let n,s,a,e,o,r;return n=new Y({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),a=new Y({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),o=new Y({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),{c(){i(n.$$.fragment),s=y(),i(a.$$.fragment),e=y(),i(o.$$.fragment)},l(t){u(n.$$.fragment,t),s=v(t),u(a.$$.fragment,t),e=v(t),u(o.$$.fragment,t)},m(t,$){m(n,t,$),c(t,s,$),m(a,t,$),c(t,e,$),m(o,t,$),r=!0},p(t,s){const e={};8&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e);const $={};8&s&&($.$$scope={dirty:s,ctx:t}),a.$set($);const r={};8&s&&(r.$$scope={dirty:s,ctx:t}),o.$set(r)},i(t){r||(k(n.$$.fragment,t),k(a.$$.fragment,t),k(o.$$.fragment,t),r=!0)},o(t){h(n.$$.fragment,t),h(a.$$.fragment,t),h(o.$$.fragment,t),r=!1},d(t){x(n,t),t&&$(s),x(a,t),t&&$(e),x(o,t)}}}function Ct(t){let n,s,a;return{c(){n=D("strong"),s=D("code"),a=E("item")},l(t){n=T(t,"STRONG",{});var e=o(n);s=T(e,"CODE",{});var r=o(s);a=b(r,"item"),r.forEach($),e.forEach($)},m(t,e){c(t,n,e),p(n,s),p(s,a)},d(t){t&&$(n)}}}function Ot(t){let n,s;return{c(){n=D("code"),s=E("{ href?: string, text: string }")},l(t){n=T(t,"CODE",{});var a=o(n);s=b(a,"{ href?: string, text: string }"),a.forEach($)},m(t,a){c(t,n,a),p(n,s)},d(t){t&&$(n)}}}function Bt(t){let n;return{c(){n=E("Information about the current segment.")},l(t){n=b(t,"Information about the current segment.")},m(t,s){c(t,n,s)},d(t){t&&$(n)}}}function St(t){let n,s,a,e,o,r;return n=new F({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),a=new F({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),o=new F({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),{c(){i(n.$$.fragment),s=y(),i(a.$$.fragment),e=y(),i(o.$$.fragment)},l(t){u(n.$$.fragment,t),s=v(t),u(a.$$.fragment,t),e=v(t),u(o.$$.fragment,t)},m(t,$){m(n,t,$),c(t,s,$),m(a,t,$),c(t,e,$),m(o,t,$),r=!0},p(t,s){const e={};8&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e);const $={};8&s&&($.$$scope={dirty:s,ctx:t}),a.$set($);const r={};8&s&&(r.$$scope={dirty:s,ctx:t}),o.$set(r)},i(t){r||(k(n.$$.fragment,t),k(a.$$.fragment,t),k(o.$$.fragment,t),r=!0)},o(t){h(n.$$.fragment,t),h(a.$$.fragment,t),h(o.$$.fragment,t),r=!1},d(t){x(n,t),t&&$(s),x(a,t),t&&$(e),x(o,t)}}}function Ht(t){let n,s,a,e,r,p;return s=new W({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),r=new W({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),{c(){n=D("thead"),i(s.$$.fragment),a=y(),e=D("tbody"),i(r.$$.fragment)},l(t){n=T(t,"THEAD",{});var c=o(n);u(s.$$.fragment,c),c.forEach($),a=v(t),e=T(t,"TBODY",{});var p=o(e);u(r.$$.fragment,p),p.forEach($)},m(t,o){c(t,n,o),m(s,n,null),c(t,a,o),c(t,e,o),m(r,e,null),p=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const e={};8&n&&(e.$$scope={dirty:n,ctx:t}),r.$set(e)},i(t){p||(k(s.$$.fragment,t),k(r.$$.fragment,t),p=!0)},o(t){h(s.$$.fragment,t),h(r.$$.fragment,t),p=!1},d(t){t&&$(n),x(s),t&&$(a),t&&$(e),x(r)}}}function zt(t){let n,s,a;return{c(){n=D("code"),s=E("separator"),a=E(" slot")},l(t){n=T(t,"CODE",{});var e=o(n);s=b(e,"separator"),e.forEach($),a=b(t," slot")},m(t,e){c(t,n,e),p(n,s),c(t,a,e)},d(t){t&&$(n),t&&$(a)}}}function It(t){let n;return{c(){n=E("If a string separator is not enough, use this slot to add a custom component separator (and ignore the prop).")},l(t){n=b(t,"If a string separator is not enough, use this slot to add a custom component separator (and ignore the prop).")},m(t,s){c(t,n,s)},d(t){t&&$(n)}}}function Nt(t){let n;return{c(){n=E("SCSS Variables")},l(t){n=b(t,"SCSS Variables")},m(t,s){c(t,n,s)},d(t){t&&$(n)}}}function Pt(t){let n;return{c(){n=E("Name")},l(t){n=b(t,"Name")},m(t,s){c(t,n,s)},d(t){t&&$(n)}}}function Rt(t){let n;return{c(){n=E("Description")},l(t){n=b(t,"Description")},m(t,s){c(t,n,s)},d(t){t&&$(n)}}}function At(t){let n;return{c(){n=E("Default")},l(t){n=b(t,"Default")},m(t,s){c(t,n,s)},d(t){t&&$(n)}}}function Vt(t){let n,s,a,e,o,r;return n=new Y({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),a=new Y({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),o=new Y({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),{c(){i(n.$$.fragment),s=y(),i(a.$$.fragment),e=y(),i(o.$$.fragment)},l(t){u(n.$$.fragment,t),s=v(t),u(a.$$.fragment,t),e=v(t),u(o.$$.fragment,t)},m(t,$){m(n,t,$),c(t,s,$),m(a,t,$),c(t,e,$),m(o,t,$),r=!0},p(t,s){const e={};8&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e);const $={};8&s&&($.$$scope={dirty:s,ctx:t}),a.$set($);const r={};8&s&&(r.$$scope={dirty:s,ctx:t}),o.$set(r)},i(t){r||(k(n.$$.fragment,t),k(a.$$.fragment,t),k(o.$$.fragment,t),r=!0)},o(t){h(n.$$.fragment,t),h(a.$$.fragment,t),h(o.$$.fragment,t),r=!1},d(t){x(n,t),t&&$(s),x(a,t),t&&$(e),x(o,t)}}}function Gt(t){let n,s,a;return{c(){n=D("strong"),s=D("code"),a=E("$thin-font-weight")},l(t){n=T(t,"STRONG",{});var e=o(n);s=T(e,"CODE",{});var r=o(s);a=b(r,"$thin-font-weight"),r.forEach($),e.forEach($)},m(t,e){c(t,n,e),p(n,s),p(s,a)},d(t){t&&$(n)}}}function Wt(t){let n,s,a,e;return{c(){n=E("The font size of the separator and the segments without "),s=D("code"),a=E("href"),e=E(".")},l(t){n=b(t,"The font size of the separator and the segments without "),s=T(t,"CODE",{});var r=o(s);a=b(r,"href"),r.forEach($),e=b(t,".")},m(t,o){c(t,n,o),c(t,s,o),p(s,a),c(t,e,o)},d(t){t&&$(n),t&&$(s),t&&$(e)}}}function Yt(t){let n,s;return{c(){n=D("code"),s=E("300")},l(t){n=T(t,"CODE",{});var a=o(n);s=b(a,"300"),a.forEach($)},m(t,a){c(t,n,a),p(n,s)},d(t){t&&$(n)}}}function Ft(t){let n,s,a,e,o,r;return n=new F({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),a=new F({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),o=new F({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),{c(){i(n.$$.fragment),s=y(),i(a.$$.fragment),e=y(),i(o.$$.fragment)},l(t){u(n.$$.fragment,t),s=v(t),u(a.$$.fragment,t),e=v(t),u(o.$$.fragment,t)},m(t,$){m(n,t,$),c(t,s,$),m(a,t,$),c(t,e,$),m(o,t,$),r=!0},p(t,s){const e={};8&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e);const $={};8&s&&($.$$scope={dirty:s,ctx:t}),a.$set($);const r={};8&s&&(r.$$scope={dirty:s,ctx:t}),o.$set(r)},i(t){r||(k(n.$$.fragment,t),k(a.$$.fragment,t),k(o.$$.fragment,t),r=!0)},o(t){h(n.$$.fragment,t),h(a.$$.fragment,t),h(o.$$.fragment,t),r=!1},d(t){x(n,t),t&&$(s),x(a,t),t&&$(e),x(o,t)}}}function Lt(t){let n,s,a,e,r,p;return s=new W({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),r=new W({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),{c(){n=D("thead"),i(s.$$.fragment),a=y(),e=D("tbody"),i(r.$$.fragment)},l(t){n=T(t,"THEAD",{});var c=o(n);u(s.$$.fragment,c),c.forEach($),a=v(t),e=T(t,"TBODY",{});var p=o(e);u(r.$$.fragment,p),p.forEach($)},m(t,o){c(t,n,o),m(s,n,null),c(t,a,o),c(t,e,o),m(r,e,null),p=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const e={};8&n&&(e.$$scope={dirty:n,ctx:t}),r.$set(e)},i(t){p||(k(s.$$.fragment,t),k(r.$$.fragment,t),p=!0)},o(t){h(s.$$.fragment,t),h(r.$$.fragment,t),p=!1},d(t){t&&$(n),x(s),t&&$(a),t&&$(e),x(r)}}}function qt(t){let n,s,a,e,o,r,p,l,f,g,d,w,E,b,D,T,j,C,O,B,z,I,N,P,W,Y,F,L;return n=new S({props:{$$slots:{default:[K]},$$scope:{ctx:t}}}),a=new H({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),o=new R({props:{$$slots:{source:[st],showcase:[nt]},$$scope:{ctx:t}}}),p=new A({props:{id:"properties",$$slots:{default:[at]},$$scope:{ctx:t}}}),f=new V({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),d=new G({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),E=new A({props:{id:"slots",$$slots:{default:[yt]},$$scope:{ctx:t}}}),D=new V({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),j=new H({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),O=new G({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),z=new V({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),N=new H({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),W=new A({props:{id:"scss-variables",$$slots:{default:[Nt]},$$scope:{ctx:t}}}),F=new G({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){i(n.$$.fragment),s=y(),i(a.$$.fragment),e=y(),i(o.$$.fragment),r=y(),i(p.$$.fragment),l=y(),i(f.$$.fragment),g=y(),i(d.$$.fragment),w=y(),i(E.$$.fragment),b=y(),i(D.$$.fragment),T=y(),i(j.$$.fragment),C=y(),i(O.$$.fragment),B=y(),i(z.$$.fragment),I=y(),i(N.$$.fragment),P=y(),i(W.$$.fragment),Y=y(),i(F.$$.fragment)},l(t){u(n.$$.fragment,t),s=v(t),u(a.$$.fragment,t),e=v(t),u(o.$$.fragment,t),r=v(t),u(p.$$.fragment,t),l=v(t),u(f.$$.fragment,t),g=v(t),u(d.$$.fragment,t),w=v(t),u(E.$$.fragment,t),b=v(t),u(D.$$.fragment,t),T=v(t),u(j.$$.fragment,t),C=v(t),u(O.$$.fragment,t),B=v(t),u(z.$$.fragment,t),I=v(t),u(N.$$.fragment,t),P=v(t),u(W.$$.fragment,t),Y=v(t),u(F.$$.fragment,t)},m(t,$){m(n,t,$),c(t,s,$),m(a,t,$),c(t,e,$),m(o,t,$),c(t,r,$),m(p,t,$),c(t,l,$),m(f,t,$),c(t,g,$),m(d,t,$),c(t,w,$),m(E,t,$),c(t,b,$),m(D,t,$),c(t,T,$),m(j,t,$),c(t,C,$),m(O,t,$),c(t,B,$),m(z,t,$),c(t,I,$),m(N,t,$),c(t,P,$),m(W,t,$),c(t,Y,$),m(F,t,$),L=!0},p(t,s){const e={};8&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e);const $={};8&s&&($.$$scope={dirty:s,ctx:t}),a.$set($);const r={};8&s&&(r.$$scope={dirty:s,ctx:t}),o.$set(r);const c={};8&s&&(c.$$scope={dirty:s,ctx:t}),p.$set(c);const l={};8&s&&(l.$$scope={dirty:s,ctx:t}),f.$set(l);const i={};8&s&&(i.$$scope={dirty:s,ctx:t}),d.$set(i);const u={};8&s&&(u.$$scope={dirty:s,ctx:t}),E.$set(u);const m={};8&s&&(m.$$scope={dirty:s,ctx:t}),D.$set(m);const g={};8&s&&(g.$$scope={dirty:s,ctx:t}),j.$set(g);const k={};8&s&&(k.$$scope={dirty:s,ctx:t}),O.$set(k);const h={};8&s&&(h.$$scope={dirty:s,ctx:t}),z.$set(h);const x={};8&s&&(x.$$scope={dirty:s,ctx:t}),N.$set(x);const w={};8&s&&(w.$$scope={dirty:s,ctx:t}),W.$set(w);const y={};8&s&&(y.$$scope={dirty:s,ctx:t}),F.$set(y)},i(t){L||(k(n.$$.fragment,t),k(a.$$.fragment,t),k(o.$$.fragment,t),k(p.$$.fragment,t),k(f.$$.fragment,t),k(d.$$.fragment,t),k(E.$$.fragment,t),k(D.$$.fragment,t),k(j.$$.fragment,t),k(O.$$.fragment,t),k(z.$$.fragment,t),k(N.$$.fragment,t),k(W.$$.fragment,t),k(F.$$.fragment,t),L=!0)},o(t){h(n.$$.fragment,t),h(a.$$.fragment,t),h(o.$$.fragment,t),h(p.$$.fragment,t),h(f.$$.fragment,t),h(d.$$.fragment,t),h(E.$$.fragment,t),h(D.$$.fragment,t),h(j.$$.fragment,t),h(O.$$.fragment,t),h(z.$$.fragment,t),h(N.$$.fragment,t),h(W.$$.fragment,t),h(F.$$.fragment,t),L=!1},d(t){x(n,t),t&&$(s),x(a,t),t&&$(e),x(o,t),t&&$(r),x(p,t),t&&$(l),x(f,t),t&&$(g),x(d,t),t&&$(w),x(E,t),t&&$(b),x(D,t),t&&$(T),x(j,t),t&&$(C),x(O,t),t&&$(B),x(z,t),t&&$(I),x(N,t),t&&$(P),x(W,t),t&&$(Y),x(F,t)}}}function Jt(t){let n,s;const a=[t[1],Kt];let e={$$slots:{default:[qt]},$$scope:{ctx:t}};for(let t=0;t<a.length;t+=1)e=f(e,a[t]);return n=new B({props:e}),{c(){i(n.$$.fragment)},l(t){u(n.$$.fragment,t)},m(t,a){m(n,t,a),s=!0},p(t,[s]){const e=2&s?g(a,[2&s&&d(t[1]),0&s&&d(Kt)]):{};8&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e)},i(t){s||(k(n.$$.fragment,t),s=!0)},o(t){h(n.$$.fragment,t),s=!1},d(t){x(n,t)}}}const Kt={name:"Breadcrumbs"},Mt="Array<{ href?: string; text: string; }>";function Zt(t,n,s){return t.$$set=t=>{s(1,n=f(f({},n),w(t)))},[[{href:"/",text:"Home"},{href:"/docs",text:"Docs"},{text:"Components"}],n=w(n)]}class Qt extends t{constructor(t){super(),n(this,t,Zt,Jt,s,{})}}export{Qt as default,Kt as metadata};
