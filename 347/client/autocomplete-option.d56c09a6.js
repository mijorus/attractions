import{S as t,i as e,s as n,J as s,j as $,l as a,m as o,T as r,Z as c,t as p,p as l,q as f,K as m,r as i,h as g,u,v as d,k as h,b as x,w as y,d as k,e as w,f as E,g as v,n as b,x as D,y as O,a7 as T}from"./client.1cea0a1d.js";import{L as A,H as j,P as C}from"./layout.a164762b.js";import{A as N}from"./autocomplete-option.bd7bbd68.js";import{S}from"./showcase.7a100560.js";import{C as R}from"./color-preview.0b554b03.js";import{R as q}from"./related-components.9a97584e.js";import{H as F}from"./h2.bef90a11.js";import{H as G}from"./h3.8cbe22ef.js";import{T as H,a as P,b as B,c as I}from"./table.7a58483a.js";import"./label.c0868420.js";import"./classes.2453fa25.js";import"./copyable-code.92bd9e6c.js";import"./button.1cd9d08c.js";import"./card.b77791ba.js";function V(t,e,n){const s=t.slice();return s[2]=e[n],s}function K(t){let e;return{c(){e=u("AutocompleteOption")},l(t){e=y(t,"AutocompleteOption")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function M(t){let e;return{c(){e=u("A list item representing an autocomplete suggestion.")},l(t){e=y(t,"A list item representing an autocomplete suggestion.")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function Y(t){let e,n,s,$,a,o;return{c(){e=u("It's unlikely that this component will be used by itself, but it is a part of the larger "),n=g("a"),s=g("mark"),$=g("code"),a=u("Autocomplete"),o=u(" component."),this.h()},l(t){e=y(t,"It's unlikely that this component will be used by itself, but it is a part of the larger "),n=h(t,"A",{href:!0});var r=x(n);s=h(r,"MARK",{});var c=x(s);$=h(c,"CODE",{});var p=x($);a=y(p,"Autocomplete"),p.forEach(k),c.forEach(k),r.forEach(k),o=y(t," component."),this.h()},h(){w(n,"href","./docs/components/autocomplete")},m(t,r){E(t,e,r),E(t,n,r),v(n,s),v(s,$),v($,a),E(t,o,r)},p:b,d(t){t&&k(e),t&&k(n),t&&k(o)}}}function z(t){let e,n;return e=new N({props:{option:t[2],query:"tio"}}),{c(){$(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,s){o(e,t,s),n=!0},p:b,i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){l(e.$$.fragment,t),n=!1},d(t){f(e,t)}}}function L(t){let e,n,s=t[0],$=[];for(let e=0;e<s.length;e+=1)$[e]=z(V(t,s,e));const a=t=>l($[t],1,1,(()=>{$[t]=null}));return{c(){e=g("div");for(let t=0;t<$.length;t+=1)$[t].c();this.h()},l(t){e=h(t,"DIV",{slot:!0,class:!0});var n=x(e);for(let t=0;t<$.length;t+=1)$[t].l(n);n.forEach(k),this.h()},h(){w(e,"slot","showcase"),w(e,"class","padded")},m(t,s){E(t,e,s);for(let t=0;t<$.length;t+=1)$[t].m(e,null);n=!0},p(t,n){if(1&n){let o;for(s=t[0],o=0;o<s.length;o+=1){const a=V(t,s,o);$[o]?($[o].p(a,n),p($[o],1)):($[o]=z(a),$[o].c(),p($[o],1),$[o].m(e,null))}for(D(),o=s.length;o<$.length;o+=1)a(o);O()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)p($[t]);n=!0}},o(t){$=$.filter(Boolean);for(let t=0;t<$.length;t+=1)l($[t]);n=!1},d(t){t&&k(e),T($,t)}}}function U(t){let e,n;return{c(){e=g("div"),n=g("pre"),this.h()},l(t){e=h(t,"DIV",{slot:!0});var s=x(e);n=h(s,"PRE",{class:!0}),x(n).forEach(k),s.forEach(k),this.h()},h(){w(n,"class","language-svelte"),w(e,"slot","source")},m(t,s){E(t,e,s),v(e,n),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">&#123;</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">\'Test Option\'</span><span class="token punctuation">,</span> <span class="token literal-property property">details</span><span class="token operator">:</span> <span class="token string">\'Description\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#123;</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">\'Another One\'</span><span class="token punctuation">,</span> <span class="token literal-property property">details</span><span class="token operator">:</span> <span class="token string">\'Different\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#123;</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">\'No Description\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript">options </span><span class="token keyword">as</span> <span class="token language-javascript">option<span class="token punctuation">&#125;</span></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AutocompleteOption</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>option<span class="token punctuation">&#125;</span></span> <span class="token attr-name">query</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tio<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span></code>'},p:b,d(t){t&&k(e)}}}function J(t){let e;return{c(){e=u("Properties")},l(t){e=y(t,"Properties")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function Z(t){let e;return{c(){e=u("Functional Properties")},l(t){e=y(t,"Functional Properties")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function Q(t){let e;return{c(){e=u("Name")},l(t){e=y(t,"Name")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function W(t){let e;return{c(){e=u("Default")},l(t){e=y(t,"Default")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function X(t){let e;return{c(){e=u("Type")},l(t){e=y(t,"Type")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function _(t){let e;return{c(){e=u("Description")},l(t){e=y(t,"Description")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function tt(t){let e,n,s,r,c,m,g,u;return e=new B({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),s=new B({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),c=new B({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),g=new B({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment),m=i(),$(g.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a(s.$$.fragment,t),r=d(t),a(c.$$.fragment,t),m=d(t),a(g.$$.fragment,t)},m(t,$){o(e,t,$),E(t,n,$),o(s,t,$),E(t,r,$),o(c,t,$),E(t,m,$),o(g,t,$),u=!0},p(t,n){const $={};32&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o);const r={};32&n&&(r.$$scope={dirty:n,ctx:t}),g.$set(r)},i(t){u||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(g.$$.fragment,t),u=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(g.$$.fragment,t),u=!1},d(t){f(e,t),t&&k(n),f(s,t),t&&k(r),f(c,t),t&&k(m),f(g,t)}}}function et(t){let e,n,s,$,a,o,r;return{c(){e=g("mark"),n=g("strong"),s=g("code"),$=u("option"),a=u(" "),o=g("span"),r=u("*"),this.h()},l(t){e=h(t,"MARK",{});var c=x(e);n=h(c,"STRONG",{});var p=x(n);s=h(p,"CODE",{});var l=x(s);$=y(l,"option"),l.forEach(k),p.forEach(k),c.forEach(k),a=y(t," "),o=h(t,"SPAN",{class:!0});var f=x(o);r=y(f,"*"),f.forEach(k),this.h()},h(){w(o,"class","required")},m(t,c){E(t,e,c),v(e,n),v(n,s),v(s,$),E(t,a,c),E(t,o,c),v(o,r)},p:b,d(t){t&&k(e),t&&k(a),t&&k(o)}}}function nt(t){let e,n;return{c(){e=g("code"),n=u("Object")},l(t){e=h(t,"CODE",{});var s=x(e);n=y(s,"Object"),s.forEach(k)},m(t,s){E(t,e,s),v(e,n)},p:b,d(t){t&&k(e)}}}function st(t){let e,n,s,$,a,o,r;return{c(){e=u("The option object, containing a "),n=g("code"),s=u("name"),$=u(" field and, optionally, a "),a=g("code"),o=u("details"),r=u(" field, both strings.")},l(t){e=y(t,"The option object, containing a "),n=h(t,"CODE",{});var c=x(n);s=y(c,"name"),c.forEach(k),$=y(t," field and, optionally, a "),a=h(t,"CODE",{});var p=x(a);o=y(p,"details"),p.forEach(k),r=y(t," field, both strings.")},m(t,c){E(t,e,c),E(t,n,c),v(n,s),E(t,$,c),E(t,a,c),v(a,o),E(t,r,c)},p:b,d(t){t&&k(e),t&&k(n),t&&k($),t&&k(a),t&&k(r)}}}function $t(t){let e,n,s,r,c,m,g,u;return e=new I({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),s=new I({}),c=new I({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),g=new I({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment),m=i(),$(g.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a(s.$$.fragment,t),r=d(t),a(c.$$.fragment,t),m=d(t),a(g.$$.fragment,t)},m(t,$){o(e,t,$),E(t,n,$),o(s,t,$),E(t,r,$),o(c,t,$),E(t,m,$),o(g,t,$),u=!0},p(t,n){const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const $={};32&n&&($.$$scope={dirty:n,ctx:t}),c.$set($);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),g.$set(a)},i(t){u||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(g.$$.fragment,t),u=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(g.$$.fragment,t),u=!1},d(t){f(e,t),t&&k(n),f(s,t),t&&k(r),f(c,t),t&&k(m),f(g,t)}}}function at(t){let e,n,s;return{c(){e=g("strong"),n=g("code"),s=u("query")},l(t){e=h(t,"STRONG",{});var $=x(e);n=h($,"CODE",{});var a=x(n);s=y(a,"query"),a.forEach(k),$.forEach(k)},m(t,$){E(t,e,$),v(e,n),v(n,s)},p:b,d(t){t&&k(e)}}}function ot(t){let e,n;return{c(){e=g("code"),n=u("null")},l(t){e=h(t,"CODE",{});var s=x(e);n=y(s,"null"),s.forEach(k)},m(t,s){E(t,e,s),v(e,n)},p:b,d(t){t&&k(e)}}}function rt(t){let e,n;return{c(){e=g("code"),n=u("string")},l(t){e=h(t,"CODE",{});var s=x(e);n=y(s,"string"),s.forEach(k)},m(t,s){E(t,e,s),v(e,n)},p:b,d(t){t&&k(e)}}}function ct(t){let e;return{c(){e=u("The substring to seek out and highlight among the name and the details.")},l(t){e=y(t,"The substring to seek out and highlight among the name and the details.")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function pt(t){let e,n,s,r,c,m,g,u;return e=new I({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),s=new I({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),c=new I({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),g=new I({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment),m=i(),$(g.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a(s.$$.fragment,t),r=d(t),a(c.$$.fragment,t),m=d(t),a(g.$$.fragment,t)},m(t,$){o(e,t,$),E(t,n,$),o(s,t,$),E(t,r,$),o(c,t,$),E(t,m,$),o(g,t,$),u=!0},p(t,n){const $={};32&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o);const r={};32&n&&(r.$$scope={dirty:n,ctx:t}),g.$set(r)},i(t){u||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(g.$$.fragment,t),u=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(g.$$.fragment,t),u=!1},d(t){f(e,t),t&&k(n),f(s,t),t&&k(r),f(c,t),t&&k(m),f(g,t)}}}function lt(t){let e,n,s,r,c,m,u,y;return n=new P({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),u=new P({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){e=g("thead"),$(n.$$.fragment),s=i(),r=g("tbody"),$(c.$$.fragment),m=i(),$(u.$$.fragment)},l(t){e=h(t,"THEAD",{});var $=x(e);a(n.$$.fragment,$),$.forEach(k),s=d(t),r=h(t,"TBODY",{});var o=x(r);a(c.$$.fragment,o),m=d(o),a(u.$$.fragment,o),o.forEach(k)},m(t,$){E(t,e,$),o(n,e,null),E(t,s,$),E(t,r,$),o(c,r,null),v(r,m),o(u,r,null),y=!0},p(t,e){const s={};32&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),c.$set($);const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),u.$set(a)},i(t){y||(p(n.$$.fragment,t),p(c.$$.fragment,t),p(u.$$.fragment,t),y=!0)},o(t){l(n.$$.fragment,t),l(c.$$.fragment,t),l(u.$$.fragment,t),y=!1},d(t){t&&k(e),f(n),t&&k(s),t&&k(r),f(c),f(u)}}}function ft(t){let e;return{c(){e=u("Events")},l(t){e=y(t,"Events")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function mt(t){let e;return{c(){e=u("Name")},l(t){e=y(t,"Name")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function it(t){let e;return{c(){e=u("Event Detail")},l(t){e=y(t,"Event Detail")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function gt(t){let e;return{c(){e=u("Description")},l(t){e=y(t,"Description")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function ut(t){let e,n,s,r,c,m;return e=new B({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),s=new B({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),c=new B({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a(s.$$.fragment,t),r=d(t),a(c.$$.fragment,t)},m(t,$){o(e,t,$),E(t,n,$),o(s,t,$),E(t,r,$),o(c,t,$),m=!0},p(t,n){const $={};32&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(e,t),t&&k(n),f(s,t),t&&k(r),f(c,t)}}}function dt(t){let e,n,s;return{c(){e=g("strong"),n=g("code"),s=u("click")},l(t){e=h(t,"STRONG",{});var $=x(e);n=h($,"CODE",{});var a=x(n);s=y(a,"click"),a.forEach(k),$.forEach(k)},m(t,$){E(t,e,$),v(e,n),v(n,s)},p:b,d(t){t&&k(e)}}}function ht(t){let e,n;return{c(){e=g("code"),n=u("{ nativeEvent }")},l(t){e=h(t,"CODE",{});var s=x(e);n=y(s,"{ nativeEvent }"),s.forEach(k)},m(t,s){E(t,e,s),v(e,n)},p:b,d(t){t&&k(e)}}}function xt(t){let e,n,s,$,a,o,r;return{c(){e=u("Fired when the element is clicked. A necessary part of conforming to the "),n=g("a"),s=g("mark"),$=g("code"),a=u("AutocompleteField"),o=u("'s"),r=u(" interface."),this.h()},l(t){e=y(t,"Fired when the element is clicked. A necessary part of conforming to the "),n=h(t,"A",{href:!0});var c=x(n);s=h(c,"MARK",{});var p=x(s);$=h(p,"CODE",{});var l=x($);a=y(l,"AutocompleteField"),l.forEach(k),p.forEach(k),o=y(c,"'s"),c.forEach(k),r=y(t," interface."),this.h()},h(){w(n,"href","./docs/components/autocomplete-field")},m(t,c){E(t,e,c),E(t,n,c),v(n,s),v(s,$),v($,a),v(n,o),E(t,r,c)},p:b,d(t){t&&k(e),t&&k(n),t&&k(r)}}}function yt(t){let e,n,s,r,c,m;return e=new I({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),s=new I({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),c=new I({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a(s.$$.fragment,t),r=d(t),a(c.$$.fragment,t)},m(t,$){o(e,t,$),E(t,n,$),o(s,t,$),E(t,r,$),o(c,t,$),m=!0},p(t,n){const $={};32&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(e,t),t&&k(n),f(s,t),t&&k(r),f(c,t)}}}function kt(t){let e,n,s,r,c,m;return n=new P({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),{c(){e=g("thead"),$(n.$$.fragment),s=i(),r=g("tbody"),$(c.$$.fragment)},l(t){e=h(t,"THEAD",{});var $=x(e);a(n.$$.fragment,$),$.forEach(k),s=d(t),r=h(t,"TBODY",{});var o=x(r);a(c.$$.fragment,o),o.forEach(k)},m(t,$){E(t,e,$),o(n,e,null),E(t,s,$),E(t,r,$),o(c,r,null),m=!0},p(t,e){const s={};32&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),c.$set($)},i(t){m||(p(n.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){t&&k(e),f(n),t&&k(s),t&&k(r),f(c)}}}function wt(t){let e;return{c(){e=u("SCSS Variables")},l(t){e=y(t,"SCSS Variables")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function Et(t){let e;return{c(){e=u("Name")},l(t){e=y(t,"Name")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function vt(t){let e;return{c(){e=u("Description")},l(t){e=y(t,"Description")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function bt(t){let e;return{c(){e=u("Default")},l(t){e=y(t,"Default")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function Dt(t){let e,n,s,r,c,m;return e=new B({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),s=new B({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),c=new B({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a(s.$$.fragment,t),r=d(t),a(c.$$.fragment,t)},m(t,$){o(e,t,$),E(t,n,$),o(s,t,$),E(t,r,$),o(c,t,$),m=!0},p(t,n){const $={};32&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(e,t),t&&k(n),f(s,t),t&&k(r),f(c,t)}}}function Ot(t){let e,n,s;return{c(){e=g("strong"),n=g("code"),s=u("$main")},l(t){e=h(t,"STRONG",{});var $=x(e);n=h($,"CODE",{});var a=x(n);s=y(a,"$main"),a.forEach(k),$.forEach(k)},m(t,$){E(t,e,$),v(e,n),v(n,s)},p:b,d(t){t&&k(e)}}}function Tt(t){let e;return{c(){e=u("The background color on hover and the color of the highlight.")},l(t){e=y(t,"The background color on hover and the color of the highlight.")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function At(t){let e,n;return e=new R({props:{value:"#4300B0"}}),{c(){$(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,s){o(e,t,s),n=!0},p:b,i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){l(e.$$.fragment,t),n=!1},d(t){f(e,t)}}}function jt(t){let e,n,s,r,c,m;return e=new I({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),s=new I({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),c=new I({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a(s.$$.fragment,t),r=d(t),a(c.$$.fragment,t)},m(t,$){o(e,t,$),E(t,n,$),o(s,t,$),E(t,r,$),o(c,t,$),m=!0},p(t,n){const $={};32&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(e,t),t&&k(n),f(s,t),t&&k(r),f(c,t)}}}function Ct(t){let e,n,s;return{c(){e=g("strong"),n=g("code"),s=u("$font")},l(t){e=h(t,"STRONG",{});var $=x(e);n=h($,"CODE",{});var a=x(n);s=y(a,"$font"),a.forEach(k),$.forEach(k)},m(t,$){E(t,e,$),v(e,n),v(n,s)},p:b,d(t){t&&k(e)}}}function Nt(t){let e;return{c(){e=u("The font of the component.")},l(t){e=y(t,"The font of the component.")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function St(t){let e,n;return{c(){e=g("code"),n=u("'Ubuntu'")},l(t){e=h(t,"CODE",{});var s=x(e);n=y(s,"'Ubuntu'"),s.forEach(k)},m(t,s){E(t,e,s),v(e,n)},p:b,d(t){t&&k(e)}}}function Rt(t){let e,n,s,r,c,m;return e=new I({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),s=new I({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),c=new I({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a(s.$$.fragment,t),r=d(t),a(c.$$.fragment,t)},m(t,$){o(e,t,$),E(t,n,$),o(s,t,$),E(t,r,$),o(c,t,$),m=!0},p(t,n){const $={};32&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(e,t),t&&k(n),f(s,t),t&&k(r),f(c,t)}}}function qt(t){let e,n,s;return{c(){e=g("strong"),n=g("code"),s=u("$thin-font-weight")},l(t){e=h(t,"STRONG",{});var $=x(e);n=h($,"CODE",{});var a=x(n);s=y(a,"$thin-font-weight"),a.forEach(k),$.forEach(k)},m(t,$){E(t,e,$),v(e,n),v(n,s)},p:b,d(t){t&&k(e)}}}function Ft(t){let e;return{c(){e=u("The thin font weight to differentiate the details from the name.")},l(t){e=y(t,"The thin font weight to differentiate the details from the name.")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function Gt(t){let e,n;return{c(){e=g("code"),n=u("300")},l(t){e=h(t,"CODE",{});var s=x(e);n=y(s,"300"),s.forEach(k)},m(t,s){E(t,e,s),v(e,n)},p:b,d(t){t&&k(e)}}}function Ht(t){let e,n,s,r,c,m;return e=new I({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),s=new I({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),c=new I({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a(s.$$.fragment,t),r=d(t),a(c.$$.fragment,t)},m(t,$){o(e,t,$),E(t,n,$),o(s,t,$),E(t,r,$),o(c,t,$),m=!0},p(t,n){const $={};32&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(e,t),t&&k(n),f(s,t),t&&k(r),f(c,t)}}}function Pt(t){let e,n,s;return{c(){e=g("strong"),n=g("code"),s=u("$bold-font-weight")},l(t){e=h(t,"STRONG",{});var $=x(e);n=h($,"CODE",{});var a=x(n);s=y(a,"$bold-font-weight"),a.forEach(k),$.forEach(k)},m(t,$){E(t,e,$),v(e,n),v(n,s)},p:b,d(t){t&&k(e)}}}function Bt(t){let e;return{c(){e=u("The bold font weight to emphasize the highight.")},l(t){e=y(t,"The bold font weight to emphasize the highight.")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function It(t){let e,n;return{c(){e=g("code"),n=u("500")},l(t){e=h(t,"CODE",{});var s=x(e);n=y(s,"500"),s.forEach(k)},m(t,s){E(t,e,s),v(e,n)},p:b,d(t){t&&k(e)}}}function Vt(t){let e,n,s,r,c,m;return e=new I({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),s=new I({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),c=new I({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a(s.$$.fragment,t),r=d(t),a(c.$$.fragment,t)},m(t,$){o(e,t,$),E(t,n,$),o(s,t,$),E(t,r,$),o(c,t,$),m=!0},p(t,n){const $={};32&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(e,t),t&&k(n),f(s,t),t&&k(r),f(c,t)}}}function Kt(t){let e,n,s,r,c,m,u,y,w,b,D,O;return n=new P({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),u=new P({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),w=new P({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),D=new P({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),{c(){e=g("thead"),$(n.$$.fragment),s=i(),r=g("tbody"),$(c.$$.fragment),m=i(),$(u.$$.fragment),y=i(),$(w.$$.fragment),b=i(),$(D.$$.fragment)},l(t){e=h(t,"THEAD",{});var $=x(e);a(n.$$.fragment,$),$.forEach(k),s=d(t),r=h(t,"TBODY",{});var o=x(r);a(c.$$.fragment,o),m=d(o),a(u.$$.fragment,o),y=d(o),a(w.$$.fragment,o),b=d(o),a(D.$$.fragment,o),o.forEach(k)},m(t,$){E(t,e,$),o(n,e,null),E(t,s,$),E(t,r,$),o(c,r,null),v(r,m),o(u,r,null),v(r,y),o(w,r,null),v(r,b),o(D,r,null),O=!0},p(t,e){const s={};32&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),c.$set($);const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),u.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),w.$set(o);const r={};32&e&&(r.$$scope={dirty:e,ctx:t}),D.$set(r)},i(t){O||(p(n.$$.fragment,t),p(c.$$.fragment,t),p(u.$$.fragment,t),p(w.$$.fragment,t),p(D.$$.fragment,t),O=!0)},o(t){l(n.$$.fragment,t),l(c.$$.fragment,t),l(u.$$.fragment,t),l(w.$$.fragment,t),l(D.$$.fragment,t),O=!1},d(t){t&&k(e),f(n),t&&k(s),t&&k(r),f(c),f(u),f(w),f(D)}}}function Mt(t){let e,n,s,r,c,m,b,D,O,T,A,N,R,P,B,I,V,z,Q,W,X,_,tt,et,nt,st,$t;return e=new j({props:{$$slots:{default:[K]},$$scope:{ctx:t}}}),s=new C({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),c=new C({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),b=new q({props:{components:Ut}}),O=new S({props:{$$slots:{source:[U],showcase:[L]},$$scope:{ctx:t}}}),A=new F({props:{id:"properties",$$slots:{default:[J]},$$scope:{ctx:t}}}),R=new G({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),B=new H({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),W=new F({props:{id:"events",$$slots:{default:[ft]},$$scope:{ctx:t}}}),_=new H({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),et=new F({props:{id:"scss-variables",$$slots:{default:[wt]},$$scope:{ctx:t}}}),st=new H({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment),m=i(),$(b.$$.fragment),D=i(),$(O.$$.fragment),T=i(),$(A.$$.fragment),N=i(),$(R.$$.fragment),P=i(),$(B.$$.fragment),I=i(),V=g("div"),z=u("* Required"),Q=i(),$(W.$$.fragment),X=i(),$(_.$$.fragment),tt=i(),$(et.$$.fragment),nt=i(),$(st.$$.fragment),this.h()},l(t){a(e.$$.fragment,t),n=d(t),a(s.$$.fragment,t),r=d(t),a(c.$$.fragment,t),m=d(t),a(b.$$.fragment,t),D=d(t),a(O.$$.fragment,t),T=d(t),a(A.$$.fragment,t),N=d(t),a(R.$$.fragment,t),P=d(t),a(B.$$.fragment,t),I=d(t),V=h(t,"DIV",{class:!0});var $=x(V);z=y($,"* Required"),$.forEach(k),Q=d(t),a(W.$$.fragment,t),X=d(t),a(_.$$.fragment,t),tt=d(t),a(et.$$.fragment,t),nt=d(t),a(st.$$.fragment,t),this.h()},h(){w(V,"class","required")},m(t,$){o(e,t,$),E(t,n,$),o(s,t,$),E(t,r,$),o(c,t,$),E(t,m,$),o(b,t,$),E(t,D,$),o(O,t,$),E(t,T,$),o(A,t,$),E(t,N,$),o(R,t,$),E(t,P,$),o(B,t,$),E(t,I,$),E(t,V,$),v(V,z),E(t,Q,$),o(W,t,$),E(t,X,$),o(_,t,$),E(t,tt,$),o(et,t,$),E(t,nt,$),o(st,t,$),$t=!0},p(t,n){const $={};32&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o);const r={};32&n&&(r.$$scope={dirty:n,ctx:t}),O.$set(r);const p={};32&n&&(p.$$scope={dirty:n,ctx:t}),A.$set(p);const l={};32&n&&(l.$$scope={dirty:n,ctx:t}),R.$set(l);const f={};32&n&&(f.$$scope={dirty:n,ctx:t}),B.$set(f);const m={};32&n&&(m.$$scope={dirty:n,ctx:t}),W.$set(m);const i={};32&n&&(i.$$scope={dirty:n,ctx:t}),_.$set(i);const g={};32&n&&(g.$$scope={dirty:n,ctx:t}),et.$set(g);const u={};32&n&&(u.$$scope={dirty:n,ctx:t}),st.$set(u)},i(t){$t||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(b.$$.fragment,t),p(O.$$.fragment,t),p(A.$$.fragment,t),p(R.$$.fragment,t),p(B.$$.fragment,t),p(W.$$.fragment,t),p(_.$$.fragment,t),p(et.$$.fragment,t),p(st.$$.fragment,t),$t=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(b.$$.fragment,t),l(O.$$.fragment,t),l(A.$$.fragment,t),l(R.$$.fragment,t),l(B.$$.fragment,t),l(W.$$.fragment,t),l(_.$$.fragment,t),l(et.$$.fragment,t),l(st.$$.fragment,t),$t=!1},d(t){f(e,t),t&&k(n),f(s,t),t&&k(r),f(c,t),t&&k(m),f(b,t),t&&k(D),f(O,t),t&&k(T),f(A,t),t&&k(N),f(R,t),t&&k(P),f(B,t),t&&k(I),t&&k(V),t&&k(Q),f(W,t),t&&k(X),f(_,t),t&&k(tt),f(et,t),t&&k(nt),f(st,t)}}}function Yt(t){let e,n;const m=[t[1],zt];let i={$$slots:{default:[Mt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)i=s(i,m[t]);return e=new A({props:i}),{c(){$(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,s){o(e,t,s),n=!0},p(t,[n]){const s=2&n?r(m,[2&n&&c(t[1]),0&n&&c(zt)]):{};32&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){l(e.$$.fragment,t),n=!1},d(t){f(e,t)}}}const zt={name:"AutocompleteOption",relatedComponents:[{name:"Autocomplete",link:"./docs/components/autocomplete"},{name:"AutocompleteField",link:"./docs/components/autocomplete-field"}]},{name:Lt,relatedComponents:Ut}=zt;function Jt(t,e,n){return t.$$set=t=>{n(1,e=s(s({},e),m(t)))},[[{name:"Test Option",details:"Description"},{name:"Another One",details:"Different"},{name:"No Description"}],e=m(e)]}class Zt extends t{constructor(t){super(),e(this,t,Jt,Yt,n,{})}}export{Zt as default,zt as metadata};
