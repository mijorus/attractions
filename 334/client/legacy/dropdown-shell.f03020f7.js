import{S as t,i as e,s as n,U as s,u as $,w as a,x as o,a2 as r,a9 as c,A as p,B as l,C as f,V as m,D as d,t as g,E as i,F as u,v as h,g as x,G as w,h as y,k,l as v,j as E,n as D,a3 as b}from"./client.cbe1e507.js";import{L as T,H as C,P as O}from"./layout.4fc6a377.js";import{B as S}from"./button.db250295.js";import{D as j,a as A}from"./dropdown.df22208d.js";import{C as N}from"./ChevronDownIcon.2243d6e7.js";import{S as B}from"./showcase.e1559201.js";import{R as F}from"./related-components.8fffa1a9.js";import{H}from"./h2.fb1bfa14.js";import{H as P}from"./h3.029ec9d0.js";import{T as R,a as I,b as G,c as Y}from"./table.ac51d83a.js";import"./classes.81235560.js";import"./label.e2073300.js";import"./copyable-code.7d0af737.js";import"./card.9160d126.js";function U(t){let e;return{c(){e=i("DropdownShell")},l(t){e=w(t,"DropdownShell")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function V(t){let e,n,s,$,a;return{c(){e=i("The container for the "),n=g("a"),s=g("code"),$=i("Dropdown"),a=i(" and its activating handle."),this.h()},l(t){e=w(t,"The container for the "),n=h(t,"A",{href:!0});var o=x(n);s=h(o,"CODE",{});var r=x(s);$=w(r,"Dropdown"),r.forEach(y),o.forEach(y),a=w(t," and its activating handle."),this.h()},h(){E(n,"href","./docs/components/dropdown")},m(t,o){k(t,e,o),k(t,n,o),v(n,s),v(s,$),k(t,a,o)},d(t){t&&y(e),t&&y(n),t&&y(a)}}}function z(t){let e,n,s;return n=new N({props:{size:"24",class:"ml dropdown-chevron"}}),{c(){e=i("this is the handle\n        "),$(n.$$.fragment)},l(t){e=w(t,"this is the handle\n        "),a(n.$$.fragment,t)},m(t,$){k(t,e,$),o(n,t,$),s=!0},p:D,i(t){s||(p(n.$$.fragment,t),s=!0)},o(t){l(n.$$.fragment,t),s=!1},d(t){t&&y(e),f(n,t)}}}function L(t){let e,n;return{c(){e=g("div"),n=i("and this is the dropdown"),this.h()},l(t){e=h(t,"DIV",{class:!0});var s=x(e);n=w(s,"and this is the dropdown"),s.forEach(y),this.h()},h(){E(e,"class","padded svelte-1etefcc")},m(t,s){k(t,e,s),v(e,n)},d(t){t&&y(e)}}}function M(t){let e,n,s,r;return e=new S({props:{$$slots:{default:[z]},$$scope:{ctx:t}}}),e.$on("click",(function(){b(t[1])&&t[1].apply(this,arguments)})),s=new A({props:{right:!0,$$slots:{default:[L]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=d(),$(s.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a(s.$$.fragment,t)},m(t,$){o(e,t,$),k(t,n,$),o(s,t,$),r=!0},p(n,$){t=n;const a={};4&$&&(a.$$scope={dirty:$,ctx:t}),e.$set(a);const o={};4&$&&(o.$$scope={dirty:$,ctx:t}),s.$set(o)},i(t){r||(p(e.$$.fragment,t),p(s.$$.fragment,t),r=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),r=!1},d(t){f(e,t),t&&y(n),f(s,t)}}}function K(t){let e,n,s;return{c(){e=i("Useless without a "),n=g("code"),s=i("<Dropdown />")},l(t){e=w(t,"Useless without a "),n=h(t,"CODE",{});var $=x(n);s=w($,"<Dropdown />"),$.forEach(y)},m(t,$){k(t,e,$),k(t,n,$),v(n,s)},d(t){t&&y(e),t&&y(n)}}}function q(t){let e,n,s,r,c;return n=new j({props:{$$slots:{default:[M,({toggle:t})=>({1:t}),({toggle:t})=>t?2:0]},$$scope:{ctx:t}}}),r=new j({props:{$$slots:{default:[K]},$$scope:{ctx:t}}}),{c(){e=g("div"),$(n.$$.fragment),s=d(),$(r.$$.fragment),this.h()},l(t){e=h(t,"DIV",{slot:!0,class:!0});var $=x(e);a(n.$$.fragment,$),s=u($),a(r.$$.fragment,$),$.forEach(y),this.h()},h(){E(e,"slot","showcase"),E(e,"class","padded svelte-1etefcc")},m(t,$){k(t,e,$),o(n,e,null),v(e,s),o(r,e,null),c=!0},p(t,e){const s={};6&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),r.$set($)},i(t){c||(p(n.$$.fragment,t),p(r.$$.fragment,t),c=!0)},o(t){l(n.$$.fragment,t),l(r.$$.fragment,t),c=!1},d(t){t&&y(e),f(n),f(r)}}}function J(t){let e,n;return{c(){e=g("div"),n=g("pre"),this.h()},l(t){e=h(t,"DIV",{slot:!0});var s=x(e);n=h(s,"PRE",{class:!0}),x(n).forEach(y),s.forEach(y),this.h()},h(){E(n,"class","language-svelte"),E(e,"slot","source")},m(t,s){k(t,e,s),v(e,n),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownShell</span> <span class="token attr-name"><span class="token namespace">let:</span>toggle</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>toggle<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n    this is the handle\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChevronDownIcon</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>24<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ml dropdown-chevron<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dropdown</span> <span class="token attr-name">right</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>padded<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      and this is the dropdown\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dropdown</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownShell</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownShell</span><span class="token punctuation">></span></span>\n  Useless without a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">></span></span><span class="token entity named-entity" title="&lt;">&amp;lt;</span>Dropdown /<span class="token entity named-entity" title="&gt;">&amp;gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownShell</span><span class="token punctuation">></span></span></code>'},p:D,d(t){t&&y(e)}}}function Q(t){let e;return{c(){e=i("Properties")},l(t){e=w(t,"Properties")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function W(t){let e;return{c(){e=i("Functional Properties")},l(t){e=w(t,"Functional Properties")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function X(t){let e;return{c(){e=i("Name")},l(t){e=w(t,"Name")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function Z(t){let e;return{c(){e=i("Default")},l(t){e=w(t,"Default")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function _(t){let e;return{c(){e=i("Type")},l(t){e=w(t,"Type")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function tt(t){let e;return{c(){e=i("Description")},l(t){e=w(t,"Description")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function et(t){let e,n,s,r,c,m,g,i;return e=new G({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),s=new G({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),g=new G({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=d(),$(s.$$.fragment),r=d(),$(c.$$.fragment),m=d(),$(g.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t),m=u(t),a(g.$$.fragment,t)},m(t,$){o(e,t,$),k(t,n,$),o(s,t,$),k(t,r,$),o(c,t,$),k(t,m,$),o(g,t,$),i=!0},p(t,n){const $={};4&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),g.$set(r)},i(t){i||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(g.$$.fragment,t),i=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(g.$$.fragment,t),i=!1},d(t){f(e,t),t&&y(n),f(s,t),t&&y(r),f(c,t),t&&y(m),f(g,t)}}}function nt(t){let e,n,s;return{c(){e=g("strong"),n=g("code"),s=i("open")},l(t){e=h(t,"STRONG",{});var $=x(e);n=h($,"CODE",{});var a=x(n);s=w(a,"open"),a.forEach(y),$.forEach(y)},m(t,$){k(t,e,$),v(e,n),v(n,s)},d(t){t&&y(e)}}}function st(t){let e,n;return{c(){e=g("code"),n=i("false")},l(t){e=h(t,"CODE",{});var s=x(e);n=w(s,"false"),s.forEach(y)},m(t,s){k(t,e,s),v(e,n)},d(t){t&&y(e)}}}function $t(t){let e,n;return{c(){e=g("code"),n=i("boolean")},l(t){e=h(t,"CODE",{});var s=x(e);n=w(s,"boolean"),s.forEach(y)},m(t,s){k(t,e,s),v(e,n)},d(t){t&&y(e)}}}function at(t){let e;return{c(){e=i("Controls whether the dropdown content is shown or hidden.")},l(t){e=w(t,"Controls whether the dropdown content is shown or hidden.")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function ot(t){let e,n,s,r,c,m,g,i;return e=new Y({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),s=new Y({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),c=new Y({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),g=new Y({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=d(),$(s.$$.fragment),r=d(),$(c.$$.fragment),m=d(),$(g.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t),m=u(t),a(g.$$.fragment,t)},m(t,$){o(e,t,$),k(t,n,$),o(s,t,$),k(t,r,$),o(c,t,$),k(t,m,$),o(g,t,$),i=!0},p(t,n){const $={};4&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),g.$set(r)},i(t){i||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(g.$$.fragment,t),i=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(g.$$.fragment,t),i=!1},d(t){f(e,t),t&&y(n),f(s,t),t&&y(r),f(c,t),t&&y(m),f(g,t)}}}function rt(t){let e,n,s,r,c,m;return n=new I({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),c=new I({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),{c(){e=g("thead"),$(n.$$.fragment),s=d(),r=g("tbody"),$(c.$$.fragment)},l(t){e=h(t,"THEAD",{});var $=x(e);a(n.$$.fragment,$),$.forEach(y),s=u(t),r=h(t,"TBODY",{});var o=x(r);a(c.$$.fragment,o),o.forEach(y)},m(t,$){k(t,e,$),o(n,e,null),k(t,s,$),k(t,r,$),o(c,r,null),m=!0},p(t,e){const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),c.$set($)},i(t){m||(p(n.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){t&&y(e),f(n),t&&y(s),t&&y(r),f(c)}}}function ct(t){let e;return{c(){e=i("Class Properties")},l(t){e=w(t,"Class Properties")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function pt(t){let e,n,s,$,a,o,r;return{c(){e=i("All "),n=g("code"),s=i("<DropdownShell>"),$=i(" components use the "),a=g("code"),o=i(".dropdown-shell"),r=i(" class.")},l(t){e=w(t,"All "),n=h(t,"CODE",{});var c=x(n);s=w(c,"<DropdownShell>"),c.forEach(y),$=w(t," components use the "),a=h(t,"CODE",{});var p=x(a);o=w(p,".dropdown-shell"),p.forEach(y),r=w(t," class.")},m(t,c){k(t,e,c),k(t,n,c),v(n,s),k(t,$,c),k(t,a,c),v(a,o),k(t,r,c)},d(t){t&&y(e),t&&y(n),t&&y($),t&&y(a),t&&y(r)}}}function lt(t){let e;return{c(){e=i("Falsy values passed to classes will be disregarded.")},l(t){e=w(t,"Falsy values passed to classes will be disregarded.")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function ft(t){let e;return{c(){e=i("Name")},l(t){e=w(t,"Name")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function mt(t){let e;return{c(){e=i("Default")},l(t){e=w(t,"Default")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function dt(t){let e;return{c(){e=i("Type")},l(t){e=w(t,"Type")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function gt(t){let e;return{c(){e=i("Description")},l(t){e=w(t,"Description")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function it(t){let e,n,s,r,c,m,g,i;return e=new G({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),s=new G({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),g=new G({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=d(),$(s.$$.fragment),r=d(),$(c.$$.fragment),m=d(),$(g.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t),m=u(t),a(g.$$.fragment,t)},m(t,$){o(e,t,$),k(t,n,$),o(s,t,$),k(t,r,$),o(c,t,$),k(t,m,$),o(g,t,$),i=!0},p(t,n){const $={};4&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),g.$set(r)},i(t){i||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(g.$$.fragment,t),i=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(g.$$.fragment,t),i=!1},d(t){f(e,t),t&&y(n),f(s,t),t&&y(r),f(c,t),t&&y(m),f(g,t)}}}function ut(t){let e,n,s;return{c(){e=g("strong"),n=g("code"),s=i("class")},l(t){e=h(t,"STRONG",{});var $=x(e);n=h($,"CODE",{});var a=x(n);s=w(a,"class"),a.forEach(y),$.forEach(y)},m(t,$){k(t,e,$),v(e,n),v(n,s)},d(t){t&&y(e)}}}function ht(t){let e,n;return{c(){e=g("code"),n=i("null")},l(t){e=h(t,"CODE",{});var s=x(e);n=w(s,"null"),s.forEach(y)},m(t,s){k(t,e,s),v(e,n)},d(t){t&&y(e)}}}function xt(t){let e,n;return{c(){e=g("code"),n=i("string")},l(t){e=h(t,"CODE",{});var s=x(e);n=w(s,"string"),s.forEach(y)},m(t,s){k(t,e,s),v(e,n)},d(t){t&&y(e)}}}function wt(t){let e,n,s,$;return{c(){e=i("A class string to add to the underlying "),n=g("code"),s=i("<div>"),$=i(" element.")},l(t){e=w(t,"A class string to add to the underlying "),n=h(t,"CODE",{});var a=x(n);s=w(a,"<div>"),a.forEach(y),$=w(t," element.")},m(t,a){k(t,e,a),k(t,n,a),v(n,s),k(t,$,a)},d(t){t&&y(e),t&&y(n),t&&y($)}}}function yt(t){let e,n,s,r,c,m,g,i;return e=new Y({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),s=new Y({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),c=new Y({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),g=new Y({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=d(),$(s.$$.fragment),r=d(),$(c.$$.fragment),m=d(),$(g.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t),m=u(t),a(g.$$.fragment,t)},m(t,$){o(e,t,$),k(t,n,$),o(s,t,$),k(t,r,$),o(c,t,$),k(t,m,$),o(g,t,$),i=!0},p(t,n){const $={};4&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),g.$set(r)},i(t){i||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(g.$$.fragment,t),i=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(g.$$.fragment,t),i=!1},d(t){f(e,t),t&&y(n),f(s,t),t&&y(r),f(c,t),t&&y(m),f(g,t)}}}function kt(t){let e,n,s,r,c,m;return n=new I({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),c=new I({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),{c(){e=g("thead"),$(n.$$.fragment),s=d(),r=g("tbody"),$(c.$$.fragment)},l(t){e=h(t,"THEAD",{});var $=x(e);a(n.$$.fragment,$),$.forEach(y),s=u(t),r=h(t,"TBODY",{});var o=x(r);a(c.$$.fragment,o),o.forEach(y)},m(t,$){k(t,e,$),o(n,e,null),k(t,s,$),k(t,r,$),o(c,r,null),m=!0},p(t,e){const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),c.$set($)},i(t){m||(p(n.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){t&&y(e),f(n),t&&y(s),t&&y(r),f(c)}}}function vt(t){let e;return{c(){e=i("Events")},l(t){e=w(t,"Events")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function Et(t){let e;return{c(){e=i("Name")},l(t){e=w(t,"Name")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function Dt(t){let e;return{c(){e=i("Event Detail")},l(t){e=w(t,"Event Detail")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function bt(t){let e;return{c(){e=i("Description")},l(t){e=w(t,"Description")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function Tt(t){let e,n,s,r,c,m;return e=new G({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),s=new G({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=d(),$(s.$$.fragment),r=d(),$(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t)},m(t,$){o(e,t,$),k(t,n,$),o(s,t,$),k(t,r,$),o(c,t,$),m=!0},p(t,n){const $={};4&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(e,t),t&&y(n),f(s,t),t&&y(r),f(c,t)}}}function Ct(t){let e,n,s;return{c(){e=g("strong"),n=g("code"),s=i("change")},l(t){e=h(t,"STRONG",{});var $=x(e);n=h($,"CODE",{});var a=x(n);s=w(a,"change"),a.forEach(y),$.forEach(y)},m(t,$){k(t,e,$),v(e,n),v(n,s)},d(t){t&&y(e)}}}function Ot(t){let e,n;return{c(){e=g("code"),n=i("{ value }")},l(t){e=h(t,"CODE",{});var s=x(e);n=w(s,"{ value }"),s.forEach(y)},m(t,s){k(t,e,s),v(e,n)},d(t){t&&y(e)}}}function St(t){let e,n,s,$,a,o,r,c,p,l;return{c(){e=i("Fired when toggling the dropdown (with "),n=g("code"),s=i("value"),$=i(" being "),a=g("code"),o=i("true"),r=i(' for "open" and '),c=g("code"),p=i("false"),l=i(' for "closed").')},l(t){e=w(t,"Fired when toggling the dropdown (with "),n=h(t,"CODE",{});var f=x(n);s=w(f,"value"),f.forEach(y),$=w(t," being "),a=h(t,"CODE",{});var m=x(a);o=w(m,"true"),m.forEach(y),r=w(t,' for "open" and '),c=h(t,"CODE",{});var d=x(c);p=w(d,"false"),d.forEach(y),l=w(t,' for "closed").')},m(t,f){k(t,e,f),k(t,n,f),v(n,s),k(t,$,f),k(t,a,f),v(a,o),k(t,r,f),k(t,c,f),v(c,p),k(t,l,f)},d(t){t&&y(e),t&&y(n),t&&y($),t&&y(a),t&&y(r),t&&y(c),t&&y(l)}}}function jt(t){let e,n,s,r,c,m;return e=new Y({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),s=new Y({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),c=new Y({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=d(),$(s.$$.fragment),r=d(),$(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t)},m(t,$){o(e,t,$),k(t,n,$),o(s,t,$),k(t,r,$),o(c,t,$),m=!0},p(t,n){const $={};4&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(e,t),t&&y(n),f(s,t),t&&y(r),f(c,t)}}}function At(t){let e,n,s,r,c,m;return n=new I({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),c=new I({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),{c(){e=g("thead"),$(n.$$.fragment),s=d(),r=g("tbody"),$(c.$$.fragment)},l(t){e=h(t,"THEAD",{});var $=x(e);a(n.$$.fragment,$),$.forEach(y),s=u(t),r=h(t,"TBODY",{});var o=x(r);a(c.$$.fragment,o),o.forEach(y)},m(t,$){k(t,e,$),o(n,e,null),k(t,s,$),k(t,r,$),o(c,r,null),m=!0},p(t,e){const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),c.$set($)},i(t){m||(p(n.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){t&&y(e),f(n),t&&y(s),t&&y(r),f(c)}}}function Nt(t){let e;return{c(){e=i("Slots")},l(t){e=w(t,"Slots")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function Bt(t){let e;return{c(){e=i("Default slot")},l(t){e=w(t,"Default slot")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function Ft(t){let e;return{c(){e=i("The shell of the dropdown. The dropdown itself must be inside it.")},l(t){e=w(t,"The shell of the dropdown. The dropdown itself must be inside it.")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function Ht(t){let e;return{c(){e=i("Prop Name")},l(t){e=w(t,"Prop Name")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function Pt(t){let e;return{c(){e=i("Type")},l(t){e=w(t,"Type")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function Rt(t){let e;return{c(){e=i("Description")},l(t){e=w(t,"Description")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function It(t){let e,n,s,r,c,m;return e=new G({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),s=new G({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=d(),$(s.$$.fragment),r=d(),$(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t)},m(t,$){o(e,t,$),k(t,n,$),o(s,t,$),k(t,r,$),o(c,t,$),m=!0},p(t,n){const $={};4&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(e,t),t&&y(n),f(s,t),t&&y(r),f(c,t)}}}function Gt(t){let e,n,s;return{c(){e=g("strong"),n=g("code"),s=i("toggle")},l(t){e=h(t,"STRONG",{});var $=x(e);n=h($,"CODE",{});var a=x(n);s=w(a,"toggle"),a.forEach(y),$.forEach(y)},m(t,$){k(t,e,$),v(e,n),v(n,s)},d(t){t&&y(e)}}}function Yt(t){let e,n;return{c(){e=g("code"),n=i("Function")},l(t){e=h(t,"CODE",{});var s=x(e);n=w(s,"Function"),s.forEach(y)},m(t,s){k(t,e,s),v(e,n)},d(t){t&&y(e)}}}function Ut(t){let e;return{c(){e=i("A callback to toggle the open state of the dropdown.")},l(t){e=w(t,"A callback to toggle the open state of the dropdown.")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function Vt(t){let e,n,s,r,c,m;return e=new Y({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),s=new Y({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),c=new Y({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=d(),$(s.$$.fragment),r=d(),$(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t)},m(t,$){o(e,t,$),k(t,n,$),o(s,t,$),k(t,r,$),o(c,t,$),m=!0},p(t,n){const $={};4&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(e,t),t&&y(n),f(s,t),t&&y(r),f(c,t)}}}function zt(t){let e,n,s,r,c,m;return n=new I({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),c=new I({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),{c(){e=g("thead"),$(n.$$.fragment),s=d(),r=g("tbody"),$(c.$$.fragment)},l(t){e=h(t,"THEAD",{});var $=x(e);a(n.$$.fragment,$),$.forEach(y),s=u(t),r=h(t,"TBODY",{});var o=x(r);a(c.$$.fragment,o),o.forEach(y)},m(t,$){k(t,e,$),o(n,e,null),k(t,s,$),k(t,r,$),o(c,r,null),m=!0},p(t,e){const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),c.$set($)},i(t){m||(p(n.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){t&&y(e),f(n),t&&y(s),t&&y(r),f(c)}}}function Lt(t){let e;return{c(){e=i("Exported Attributes")},l(t){e=w(t,"Exported Attributes")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function Mt(t){let e,n,s,$;return{c(){e=i("These attributes can be accessed from variables holding component instances bound using "),n=g("code"),s=i("bind:this"),$=i(" on the instance.")},l(t){e=w(t,"These attributes can be accessed from variables holding component instances bound using "),n=h(t,"CODE",{});var a=x(n);s=w(a,"bind:this"),a.forEach(y),$=w(t," on the instance.")},m(t,a){k(t,e,a),k(t,n,a),v(n,s),k(t,$,a)},d(t){t&&y(e),t&&y(n),t&&y($)}}}function Kt(t){let e;return{c(){e=i("Name")},l(t){e=w(t,"Name")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function qt(t){let e;return{c(){e=i("Type")},l(t){e=w(t,"Type")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function Jt(t){let e;return{c(){e=i("Description")},l(t){e=w(t,"Description")},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function Qt(t){let e,n,s,r,c,m;return e=new G({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),s=new G({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=d(),$(s.$$.fragment),r=d(),$(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t)},m(t,$){o(e,t,$),k(t,n,$),o(s,t,$),k(t,r,$),o(c,t,$),m=!0},p(t,n){const $={};4&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(e,t),t&&y(n),f(s,t),t&&y(r),f(c,t)}}}function Wt(t){let e,n,s;return{c(){e=g("strong"),n=g("code"),s=i("toggle")},l(t){e=h(t,"STRONG",{});var $=x(e);n=h($,"CODE",{});var a=x(n);s=w(a,"toggle"),a.forEach(y),$.forEach(y)},m(t,$){k(t,e,$),v(e,n),v(n,s)},d(t){t&&y(e)}}}function Xt(t){let e,n;return{c(){e=g("code"),n=i("Function")},l(t){e=h(t,"CODE",{});var s=x(e);n=w(s,"Function"),s.forEach(y)},m(t,s){k(t,e,s),v(e,n)},d(t){t&&y(e)}}}function Zt(t){let e;return{c(){e=i('Toggles the dropdown\'s "open" state. In addition to being exposed as a slot prop, this function is exported to allow toggling the dropdown from same component where the shell is created.')},l(t){e=w(t,'Toggles the dropdown\'s "open" state. In addition to being exposed as a slot prop, this function is exported to allow toggling the dropdown from same component where the shell is created.')},m(t,n){k(t,e,n)},d(t){t&&y(e)}}}function _t(t){let e,n,s,r,c,m;return e=new Y({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),s=new Y({props:{$$slots:{default:[Xt]},$$scope:{ctx:t}}}),c=new Y({props:{$$slots:{default:[Zt]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=d(),$(s.$$.fragment),r=d(),$(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t)},m(t,$){o(e,t,$),k(t,n,$),o(s,t,$),k(t,r,$),o(c,t,$),m=!0},p(t,n){const $={};4&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(e,t),t&&y(n),f(s,t),t&&y(r),f(c,t)}}}function te(t){let e,n,s,r,c,m;return n=new I({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),c=new I({props:{$$slots:{default:[_t]},$$scope:{ctx:t}}}),{c(){e=g("thead"),$(n.$$.fragment),s=d(),r=g("tbody"),$(c.$$.fragment)},l(t){e=h(t,"THEAD",{});var $=x(e);a(n.$$.fragment,$),$.forEach(y),s=u(t),r=h(t,"TBODY",{});var o=x(r);a(c.$$.fragment,o),o.forEach(y)},m(t,$){k(t,e,$),o(n,e,null),k(t,s,$),k(t,r,$),o(c,r,null),m=!0},p(t,e){const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),c.$set($)},i(t){m||(p(n.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){t&&y(e),f(n),t&&y(s),t&&y(r),f(c)}}}function ee(t){let e,n,s,r,c,m,E,D,b,T,S,j,A,N,I,G,Y,z,L,M,K,X,Z,_,tt,et,nt,st,$t,at,ot,ft,mt,dt,gt,it,ut,ht,xt,wt,yt,Et,Dt;return e=new C({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),s=new O({props:{$$slots:{default:[V]},$$scope:{ctx:t}}}),c=new F({props:{components:ae}}),E=new B({props:{$$slots:{source:[J],showcase:[q]},$$scope:{ctx:t}}}),b=new H({props:{id:"properties",$$slots:{default:[Q]},$$scope:{ctx:t}}}),S=new P({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),A=new R({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),I=new P({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),Y=new O({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),L=new O({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),K=new R({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),et=new H({props:{id:"events",$$slots:{default:[vt]},$$scope:{ctx:t}}}),st=new R({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),at=new H({props:{id:"slots",$$slots:{default:[Nt]},$$scope:{ctx:t}}}),ft=new P({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),dt=new O({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),it=new R({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),ht=new H({props:{id:"exported",$$slots:{default:[Lt]},$$scope:{ctx:t}}}),wt=new O({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),Et=new R({props:{$$slots:{default:[te]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=d(),$(s.$$.fragment),r=d(),$(c.$$.fragment),m=d(),$(E.$$.fragment),D=d(),$(b.$$.fragment),T=d(),$(S.$$.fragment),j=d(),$(A.$$.fragment),N=d(),$(I.$$.fragment),G=d(),$(Y.$$.fragment),z=d(),$(L.$$.fragment),M=d(),$(K.$$.fragment),X=d(),Z=g("mark"),_=i("Bonus"),tt=i(": use the `.dropdown-chevron` class for the chevrons on the dropdown handle to get a nice rotation animation (see showcase).\n"),$(et.$$.fragment),nt=d(),$(st.$$.fragment),$t=d(),$(at.$$.fragment),ot=d(),$(ft.$$.fragment),mt=d(),$(dt.$$.fragment),gt=d(),$(it.$$.fragment),ut=d(),$(ht.$$.fragment),xt=d(),$(wt.$$.fragment),yt=d(),$(Et.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t),m=u(t),a(E.$$.fragment,t),D=u(t),a(b.$$.fragment,t),T=u(t),a(S.$$.fragment,t),j=u(t),a(A.$$.fragment,t),N=u(t),a(I.$$.fragment,t),G=u(t),a(Y.$$.fragment,t),z=u(t),a(L.$$.fragment,t),M=u(t),a(K.$$.fragment,t),X=u(t),Z=h(t,"MARK",{});var $=x(Z);_=w($,"Bonus"),$.forEach(y),tt=w(t,": use the `.dropdown-chevron` class for the chevrons on the dropdown handle to get a nice rotation animation (see showcase).\n"),a(et.$$.fragment,t),nt=u(t),a(st.$$.fragment,t),$t=u(t),a(at.$$.fragment,t),ot=u(t),a(ft.$$.fragment,t),mt=u(t),a(dt.$$.fragment,t),gt=u(t),a(it.$$.fragment,t),ut=u(t),a(ht.$$.fragment,t),xt=u(t),a(wt.$$.fragment,t),yt=u(t),a(Et.$$.fragment,t)},m(t,$){o(e,t,$),k(t,n,$),o(s,t,$),k(t,r,$),o(c,t,$),k(t,m,$),o(E,t,$),k(t,D,$),o(b,t,$),k(t,T,$),o(S,t,$),k(t,j,$),o(A,t,$),k(t,N,$),o(I,t,$),k(t,G,$),o(Y,t,$),k(t,z,$),o(L,t,$),k(t,M,$),o(K,t,$),k(t,X,$),k(t,Z,$),v(Z,_),k(t,tt,$),o(et,t,$),k(t,nt,$),o(st,t,$),k(t,$t,$),o(at,t,$),k(t,ot,$),o(ft,t,$),k(t,mt,$),o(dt,t,$),k(t,gt,$),o(it,t,$),k(t,ut,$),o(ht,t,$),k(t,xt,$),o(wt,t,$),k(t,yt,$),o(Et,t,$),Dt=!0},p(t,n){const $={};4&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),E.$set(o);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),b.$set(r);const c={};4&n&&(c.$$scope={dirty:n,ctx:t}),S.$set(c);const p={};4&n&&(p.$$scope={dirty:n,ctx:t}),A.$set(p);const l={};4&n&&(l.$$scope={dirty:n,ctx:t}),I.$set(l);const f={};4&n&&(f.$$scope={dirty:n,ctx:t}),Y.$set(f);const m={};4&n&&(m.$$scope={dirty:n,ctx:t}),L.$set(m);const d={};4&n&&(d.$$scope={dirty:n,ctx:t}),K.$set(d);const g={};4&n&&(g.$$scope={dirty:n,ctx:t}),et.$set(g);const i={};4&n&&(i.$$scope={dirty:n,ctx:t}),st.$set(i);const u={};4&n&&(u.$$scope={dirty:n,ctx:t}),at.$set(u);const h={};4&n&&(h.$$scope={dirty:n,ctx:t}),ft.$set(h);const x={};4&n&&(x.$$scope={dirty:n,ctx:t}),dt.$set(x);const w={};4&n&&(w.$$scope={dirty:n,ctx:t}),it.$set(w);const y={};4&n&&(y.$$scope={dirty:n,ctx:t}),ht.$set(y);const k={};4&n&&(k.$$scope={dirty:n,ctx:t}),wt.$set(k);const v={};4&n&&(v.$$scope={dirty:n,ctx:t}),Et.$set(v)},i(t){Dt||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(E.$$.fragment,t),p(b.$$.fragment,t),p(S.$$.fragment,t),p(A.$$.fragment,t),p(I.$$.fragment,t),p(Y.$$.fragment,t),p(L.$$.fragment,t),p(K.$$.fragment,t),p(et.$$.fragment,t),p(st.$$.fragment,t),p(at.$$.fragment,t),p(ft.$$.fragment,t),p(dt.$$.fragment,t),p(it.$$.fragment,t),p(ht.$$.fragment,t),p(wt.$$.fragment,t),p(Et.$$.fragment,t),Dt=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(E.$$.fragment,t),l(b.$$.fragment,t),l(S.$$.fragment,t),l(A.$$.fragment,t),l(I.$$.fragment,t),l(Y.$$.fragment,t),l(L.$$.fragment,t),l(K.$$.fragment,t),l(et.$$.fragment,t),l(st.$$.fragment,t),l(at.$$.fragment,t),l(ft.$$.fragment,t),l(dt.$$.fragment,t),l(it.$$.fragment,t),l(ht.$$.fragment,t),l(wt.$$.fragment,t),l(Et.$$.fragment,t),Dt=!1},d(t){f(e,t),t&&y(n),f(s,t),t&&y(r),f(c,t),t&&y(m),f(E,t),t&&y(D),f(b,t),t&&y(T),f(S,t),t&&y(j),f(A,t),t&&y(N),f(I,t),t&&y(G),f(Y,t),t&&y(z),f(L,t),t&&y(M),f(K,t),t&&y(X),t&&y(Z),t&&y(tt),f(et,t),t&&y(nt),f(st,t),t&&y($t),f(at,t),t&&y(ot),f(ft,t),t&&y(mt),f(dt,t),t&&y(gt),f(it,t),t&&y(ut),f(ht,t),t&&y(xt),f(wt,t),t&&y(yt),f(Et,t)}}}function ne(t){let e,n;const m=[t[0],se];let d={$$slots:{default:[ee]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)d=s(d,m[t]);return e=new T({props:d}),{c(){$(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,s){o(e,t,s),n=!0},p(t,[n]){const s=1&n?r(m,[1&n&&c(t[0]),0&n&&c(se)]):{};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){l(e.$$.fragment,t),n=!1},d(t){f(e,t)}}}const se={name:"DropdownShell",relatedComponents:[{name:"Dropdown",link:"./docs/components/dropdown"}]},{name:$e,relatedComponents:ae}=se;function oe(t,e,n){return t.$$set=t=>{n(0,e=s(s({},e),m(t)))},[e=m(e)]}class re extends t{constructor(t){super(),e(this,t,oe,ne,n,{})}}export{re as default,se as metadata};
