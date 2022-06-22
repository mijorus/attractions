import{S as t,i as e,s as $,P as n,q as s,t as a,u as r,Z as o,a4 as c,w as f,x as p,y as l,Q as m,z as g,p as i,A as d,B as u,r as h,h as x,C as v,j as E,k as w,l as y,m as b,a2 as D,a7 as T,a5 as O,o as k}from"./client.55e71079.js";import{L as C,H as A,P as S}from"./layout.16dba64b.js";import{T as N}from"./tabs.498e2c9a.js";import{S as j}from"./showcase.7b32901e.js";import{C as R}from"./color-preview.8dd9aa01.js";import{R as F}from"./related-components.ca0130f5.js";import{H as L}from"./h2.cd2c239d.js";import{H as M}from"./h3.476db314.js";import{T as G,a as P,b as H,c as z}from"./table.073b15f1.js";import"./classes.7d86155b.js";import"./tab.ce2312ec.js";import"./button.b3135bb2.js";import"./label.f803f272.js";import"./copyable-code.a33bc6e9.js";import"./asyncToGenerator.9b8c2ee1.js";import"./card.1fe6f3cd.js";function q(t){let e;return{c(){e=d("Tabs")},l(t){e=v(t,"Tabs")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function B(t){let e;return{c(){e=d("Tabs are used to organize content and navigate between it.")},l(t){e=v(t,"Tabs are used to organize content and navigate between it.")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function V(t){let e,$,n,o;function c(e){t[2](e)}let m={name:"menu",items:["Appetizers","Main dishes","Drinks"]};return void 0!==t[0]&&(m.value=t[0]),$=new N({props:m}),D.push((()=>T($,"value",c))),{c(){e=i("div"),s($.$$.fragment),this.h()},l(t){e=h(t,"DIV",{slot:!0,class:!0});var n=x(e);a($.$$.fragment,n),n.forEach(E),this.h()},h(){w(e,"slot","showcase"),w(e,"class","padded")},m(t,n){y(t,e,n),r($,e,null),o=!0},p(t,e){const s={};!n&&1&e&&(n=!0,s.value=t[0],O((()=>n=!1))),$.$set(s)},i(t){o||(f($.$$.fragment,t),o=!0)},o(t){p($.$$.fragment,t),o=!1},d(t){t&&E(e),l($)}}}function I(t){let e,$;return{c(){e=i("div"),$=i("pre"),this.h()},l(t){e=h(t,"DIV",{slot:!0});var n=x(e);$=h(n,"PRE",{class:!0}),x($).forEach(E),n.forEach(E),this.h()},h(){w($,"class","language-svelte"),w(e,"slot","source")},m(t,n){y(t,e,n),b(e,$),$.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">let</span> selectedTab <span class="token operator">=</span> <span class="token string">\'Main dishes\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tabs</span>\n  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>menu<span class="token punctuation">"</span></span>\n  <span class="token attr-name">items=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token string">\'Appetizers\'</span><span class="token punctuation">,</span> <span class="token string">\'Main dishes\'</span><span class="token punctuation">,</span> <span class="token string">\'Drinks\'</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>\n  <span class="token attr-name"><span class="token namespace">bind:</span>value=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>selectedTab<span class="token punctuation">&#125;</span></span>\n<span class="token punctuation">/></span></span></code>'},p:k,d(t){t&&E(e)}}}function U(t){let e;return{c(){e=d("Properties")},l(t){e=v(t,"Properties")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function Y(t){let e;return{c(){e=d("Functional Properties")},l(t){e=v(t,"Functional Properties")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function K(t){let e;return{c(){e=d("Name")},l(t){e=v(t,"Name")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function W(t){let e;return{c(){e=d("Default")},l(t){e=v(t,"Default")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function Q(t){let e;return{c(){e=d("Type")},l(t){e=v(t,"Type")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function Z(t){let e;return{c(){e=d("Description")},l(t){e=v(t,"Description")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function _(t){let e,$,n,o,c,m,i,d;return e=new H({props:{$$slots:{default:[K]},$$scope:{ctx:t}}}),n=new H({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),c=new H({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),i=new H({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment),m=g(),s(i.$$.fragment)},l(t){a(e.$$.fragment,t),$=u(t),a(n.$$.fragment,t),o=u(t),a(c.$$.fragment,t),m=u(t),a(i.$$.fragment,t)},m(t,s){r(e,t,s),y(t,$,s),r(n,t,s),y(t,o,s),r(c,t,s),y(t,m,s),r(i,t,s),d=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),n.$set(a);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),c.$set(r);const o={};8&$&&(o.$$scope={dirty:$,ctx:t}),i.$set(o)},i(t){d||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),f(i.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p(n.$$.fragment,t),p(c.$$.fragment,t),p(i.$$.fragment,t),d=!1},d(t){l(e,t),t&&E($),l(n,t),t&&E(o),l(c,t),t&&E(m),l(i,t)}}}function J(t){let e,$,n,s,a,r,o;return{c(){e=i("mark"),$=i("strong"),n=i("code"),s=d("name"),a=d(" "),r=i("span"),o=d("*"),this.h()},l(t){e=h(t,"MARK",{});var c=x(e);$=h(c,"STRONG",{});var f=x($);n=h(f,"CODE",{});var p=x(n);s=v(p,"name"),p.forEach(E),f.forEach(E),c.forEach(E),a=v(t," "),r=h(t,"SPAN",{class:!0});var l=x(r);o=v(l,"*"),l.forEach(E),this.h()},h(){w(r,"class","required")},m(t,c){y(t,e,c),b(e,$),b($,n),b(n,s),y(t,a,c),y(t,r,c),b(r,o)},p:k,d(t){t&&E(e),t&&E(a),t&&E(r)}}}function X(t){let e,$;return{c(){e=i("code"),$=d("string")},l(t){e=h(t,"CODE",{});var n=x(e);$=v(n,"string"),n.forEach(E)},m(t,n){y(t,e,n),b(e,$)},p:k,d(t){t&&E(e)}}}function tt(t){let e,$,n,s,a,r,o,c,f,p,l,m;return{c(){e=d("The name passed to each of the underlying "),$=i("code"),n=d("<Tab>"),s=d("s, which in turn becomes assigned to the "),a=i("code"),r=d('<input type="radio">'),o=d("s' "),c=i("a"),f=i("code"),p=d("name"),l=d(" attribute"),m=d("."),this.h()},l(t){e=v(t,"The name passed to each of the underlying "),$=h(t,"CODE",{});var g=x($);n=v(g,"<Tab>"),g.forEach(E),s=v(t,"s, which in turn becomes assigned to the "),a=h(t,"CODE",{});var i=x(a);r=v(i,'<input type="radio">'),i.forEach(E),o=v(t,"s' "),c=h(t,"A",{href:!0,rel:!0});var d=x(c);f=h(d,"CODE",{});var u=x(f);p=v(u,"name"),u.forEach(E),l=v(d," attribute"),d.forEach(E),m=v(t,"."),this.h()},h(){w(c,"href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname"),w(c,"rel","nofollow")},m(t,g){y(t,e,g),y(t,$,g),b($,n),y(t,s,g),y(t,a,g),b(a,r),y(t,o,g),y(t,c,g),b(c,f),b(f,p),b(c,l),y(t,m,g)},p:k,d(t){t&&E(e),t&&E($),t&&E(s),t&&E(a),t&&E(o),t&&E(c),t&&E(m)}}}function et(t){let e,$,n,o,c,m,i,d;return e=new z({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),n=new z({}),c=new z({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),i=new z({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment),m=g(),s(i.$$.fragment)},l(t){a(e.$$.fragment,t),$=u(t),a(n.$$.fragment,t),o=u(t),a(c.$$.fragment,t),m=u(t),a(i.$$.fragment,t)},m(t,s){r(e,t,s),y(t,$,s),r(n,t,s),y(t,o,s),r(c,t,s),y(t,m,s),r(i,t,s),d=!0},p(t,$){const n={};8&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),c.$set(s);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),i.$set(a)},i(t){d||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),f(i.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p(n.$$.fragment,t),p(c.$$.fragment,t),p(i.$$.fragment,t),d=!1},d(t){l(e,t),t&&E($),l(n,t),t&&E(o),l(c,t),t&&E(m),l(i,t)}}}function $t(t){let e,$,n,s,a,r,o;return{c(){e=i("mark"),$=i("strong"),n=i("code"),s=d("items"),a=d(" "),r=i("span"),o=d("*"),this.h()},l(t){e=h(t,"MARK",{});var c=x(e);$=h(c,"STRONG",{});var f=x($);n=h(f,"CODE",{});var p=x(n);s=v(p,"items"),p.forEach(E),f.forEach(E),c.forEach(E),a=v(t," "),r=h(t,"SPAN",{class:!0});var l=x(r);o=v(l,"*"),l.forEach(E),this.h()},h(){w(r,"class","required")},m(t,c){y(t,e,c),b(e,$),b($,n),b(n,s),y(t,a,c),y(t,r,c),b(r,o)},p:k,d(t){t&&E(e),t&&E(a),t&&E(r)}}}function nt(t){let e,$;return{c(){e=i("code"),$=d("Array")},l(t){e=h(t,"CODE",{});var n=x(e);$=v(n,"Array"),n.forEach(E)},m(t,n){y(t,e,n),b(e,$)},p:k,d(t){t&&E(e)}}}function st(t){let e;return{c(){e=d("An array of strings that act as the labels of the tabs.")},l(t){e=v(t,"An array of strings that act as the labels of the tabs.")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function at(t){let e,$,n,o,c,m,i,d;return e=new z({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),n=new z({}),c=new z({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),i=new z({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment),m=g(),s(i.$$.fragment)},l(t){a(e.$$.fragment,t),$=u(t),a(n.$$.fragment,t),o=u(t),a(c.$$.fragment,t),m=u(t),a(i.$$.fragment,t)},m(t,s){r(e,t,s),y(t,$,s),r(n,t,s),y(t,o,s),r(c,t,s),y(t,m,s),r(i,t,s),d=!0},p(t,$){const n={};8&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),c.$set(s);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),i.$set(a)},i(t){d||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),f(i.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p(n.$$.fragment,t),p(c.$$.fragment,t),p(i.$$.fragment,t),d=!1},d(t){l(e,t),t&&E($),l(n,t),t&&E(o),l(c,t),t&&E(m),l(i,t)}}}function rt(t){let e,$,n;return{c(){e=i("strong"),$=i("code"),n=d("value")},l(t){e=h(t,"STRONG",{});var s=x(e);$=h(s,"CODE",{});var a=x($);n=v(a,"value"),a.forEach(E),s.forEach(E)},m(t,s){y(t,e,s),b(e,$),b($,n)},p:k,d(t){t&&E(e)}}}function ot(t){let e,$;return{c(){e=i("code"),$=d("null")},l(t){e=h(t,"CODE",{});var n=x(e);$=v(n,"null"),n.forEach(E)},m(t,n){y(t,e,n),b(e,$)},p:k,d(t){t&&E(e)}}}function ct(t){let e,$;return{c(){e=i("code"),$=d("string")},l(t){e=h(t,"CODE",{});var n=x(e);$=v(n,"string"),n.forEach(E)},m(t,n){y(t,e,n),b(e,$)},p:k,d(t){t&&E(e)}}}function ft(t){let e;return{c(){e=d("The currently selected tab.")},l(t){e=v(t,"The currently selected tab.")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function pt(t){let e,$,n,o,c,m,i,d;return e=new z({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),n=new z({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),i=new z({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment),m=g(),s(i.$$.fragment)},l(t){a(e.$$.fragment,t),$=u(t),a(n.$$.fragment,t),o=u(t),a(c.$$.fragment,t),m=u(t),a(i.$$.fragment,t)},m(t,s){r(e,t,s),y(t,$,s),r(n,t,s),y(t,o,s),r(c,t,s),y(t,m,s),r(i,t,s),d=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),n.$set(a);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),c.$set(r);const o={};8&$&&(o.$$scope={dirty:$,ctx:t}),i.$set(o)},i(t){d||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),f(i.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p(n.$$.fragment,t),p(c.$$.fragment,t),p(i.$$.fragment,t),d=!1},d(t){l(e,t),t&&E($),l(n,t),t&&E(o),l(c,t),t&&E(m),l(i,t)}}}function lt(t){let e,$,n,o,c,m,d,v,w,D;return $=new P({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),d=new P({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),w=new P({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){e=i("thead"),s($.$$.fragment),n=g(),o=i("tbody"),s(c.$$.fragment),m=g(),s(d.$$.fragment),v=g(),s(w.$$.fragment)},l(t){e=h(t,"THEAD",{});var s=x(e);a($.$$.fragment,s),s.forEach(E),n=u(t),o=h(t,"TBODY",{});var r=x(o);a(c.$$.fragment,r),m=u(r),a(d.$$.fragment,r),v=u(r),a(w.$$.fragment,r),r.forEach(E)},m(t,s){y(t,e,s),r($,e,null),y(t,n,s),y(t,o,s),r(c,o,null),b(o,m),r(d,o,null),b(o,v),r(w,o,null),D=!0},p(t,e){const n={};8&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s);const a={};8&e&&(a.$$scope={dirty:e,ctx:t}),d.$set(a);const r={};8&e&&(r.$$scope={dirty:e,ctx:t}),w.$set(r)},i(t){D||(f($.$$.fragment,t),f(c.$$.fragment,t),f(d.$$.fragment,t),f(w.$$.fragment,t),D=!0)},o(t){p($.$$.fragment,t),p(c.$$.fragment,t),p(d.$$.fragment,t),p(w.$$.fragment,t),D=!1},d(t){t&&E(e),l($),t&&E(n),t&&E(o),l(c),l(d),l(w)}}}function mt(t){let e;return{c(){e=d("Class Properties")},l(t){e=v(t,"Class Properties")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function gt(t){let e;return{c(){e=d("Falsy values passed to classes will be disregarded.")},l(t){e=v(t,"Falsy values passed to classes will be disregarded.")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function it(t){let e;return{c(){e=d("Name")},l(t){e=v(t,"Name")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function dt(t){let e;return{c(){e=d("Default")},l(t){e=v(t,"Default")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function ut(t){let e;return{c(){e=d("Type")},l(t){e=v(t,"Type")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function ht(t){let e;return{c(){e=d("Description")},l(t){e=v(t,"Description")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function xt(t){let e,$,n,o,c,m,i,d;return e=new H({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),n=new H({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),c=new H({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),i=new H({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment),m=g(),s(i.$$.fragment)},l(t){a(e.$$.fragment,t),$=u(t),a(n.$$.fragment,t),o=u(t),a(c.$$.fragment,t),m=u(t),a(i.$$.fragment,t)},m(t,s){r(e,t,s),y(t,$,s),r(n,t,s),y(t,o,s),r(c,t,s),y(t,m,s),r(i,t,s),d=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),n.$set(a);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),c.$set(r);const o={};8&$&&(o.$$scope={dirty:$,ctx:t}),i.$set(o)},i(t){d||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),f(i.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p(n.$$.fragment,t),p(c.$$.fragment,t),p(i.$$.fragment,t),d=!1},d(t){l(e,t),t&&E($),l(n,t),t&&E(o),l(c,t),t&&E(m),l(i,t)}}}function vt(t){let e,$,n;return{c(){e=i("strong"),$=i("code"),n=d("class")},l(t){e=h(t,"STRONG",{});var s=x(e);$=h(s,"CODE",{});var a=x($);n=v(a,"class"),a.forEach(E),s.forEach(E)},m(t,s){y(t,e,s),b(e,$),b($,n)},p:k,d(t){t&&E(e)}}}function Et(t){let e,$;return{c(){e=i("code"),$=d("null")},l(t){e=h(t,"CODE",{});var n=x(e);$=v(n,"null"),n.forEach(E)},m(t,n){y(t,e,n),b(e,$)},p:k,d(t){t&&E(e)}}}function wt(t){let e,$;return{c(){e=i("code"),$=d("string")},l(t){e=h(t,"CODE",{});var n=x(e);$=v(n,"string"),n.forEach(E)},m(t,n){y(t,e,n),b(e,$)},p:k,d(t){t&&E(e)}}}function yt(t){let e,$,n,s;return{c(){e=d("A class string to assign to the root "),$=i("code"),n=d("<nav>"),s=d(" element.")},l(t){e=v(t,"A class string to assign to the root "),$=h(t,"CODE",{});var a=x($);n=v(a,"<nav>"),a.forEach(E),s=v(t," element.")},m(t,a){y(t,e,a),y(t,$,a),b($,n),y(t,s,a)},p:k,d(t){t&&E(e),t&&E($),t&&E(s)}}}function bt(t){let e,$,n,o,c,m,i,d;return e=new z({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),n=new z({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),i=new z({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment),m=g(),s(i.$$.fragment)},l(t){a(e.$$.fragment,t),$=u(t),a(n.$$.fragment,t),o=u(t),a(c.$$.fragment,t),m=u(t),a(i.$$.fragment,t)},m(t,s){r(e,t,s),y(t,$,s),r(n,t,s),y(t,o,s),r(c,t,s),y(t,m,s),r(i,t,s),d=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),n.$set(a);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),c.$set(r);const o={};8&$&&(o.$$scope={dirty:$,ctx:t}),i.$set(o)},i(t){d||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),f(i.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p(n.$$.fragment,t),p(c.$$.fragment,t),p(i.$$.fragment,t),d=!1},d(t){l(e,t),t&&E($),l(n,t),t&&E(o),l(c,t),t&&E(m),l(i,t)}}}function Dt(t){let e,$,n;return{c(){e=i("strong"),$=i("code"),n=d("tabClass")},l(t){e=h(t,"STRONG",{});var s=x(e);$=h(s,"CODE",{});var a=x($);n=v(a,"tabClass"),a.forEach(E),s.forEach(E)},m(t,s){y(t,e,s),b(e,$),b($,n)},p:k,d(t){t&&E(e)}}}function Tt(t){let e,$;return{c(){e=i("code"),$=d("null")},l(t){e=h(t,"CODE",{});var n=x(e);$=v(n,"null"),n.forEach(E)},m(t,n){y(t,e,n),b(e,$)},p:k,d(t){t&&E(e)}}}function Ot(t){let e,$;return{c(){e=i("code"),$=d("string")},l(t){e=h(t,"CODE",{});var n=x(e);$=v(n,"string"),n.forEach(E)},m(t,n){y(t,e,n),b(e,$)},p:k,d(t){t&&E(e)}}}function kt(t){let e,$,n,s;return{c(){e=d("A class string to pass to each "),$=i("code"),n=d("<Tab>"),s=d(" component.")},l(t){e=v(t,"A class string to pass to each "),$=h(t,"CODE",{});var a=x($);n=v(a,"<Tab>"),a.forEach(E),s=v(t," component.")},m(t,a){y(t,e,a),y(t,$,a),b($,n),y(t,s,a)},p:k,d(t){t&&E(e),t&&E($),t&&E(s)}}}function Ct(t){let e,$,n,o,c,m,i,d;return e=new z({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),n=new z({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),i=new z({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment),m=g(),s(i.$$.fragment)},l(t){a(e.$$.fragment,t),$=u(t),a(n.$$.fragment,t),o=u(t),a(c.$$.fragment,t),m=u(t),a(i.$$.fragment,t)},m(t,s){r(e,t,s),y(t,$,s),r(n,t,s),y(t,o,s),r(c,t,s),y(t,m,s),r(i,t,s),d=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),n.$set(a);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),c.$set(r);const o={};8&$&&(o.$$scope={dirty:$,ctx:t}),i.$set(o)},i(t){d||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),f(i.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p(n.$$.fragment,t),p(c.$$.fragment,t),p(i.$$.fragment,t),d=!1},d(t){l(e,t),t&&E($),l(n,t),t&&E(o),l(c,t),t&&E(m),l(i,t)}}}function At(t){let e,$,n,o,c,m,d,v;return $=new P({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),d=new P({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),{c(){e=i("thead"),s($.$$.fragment),n=g(),o=i("tbody"),s(c.$$.fragment),m=g(),s(d.$$.fragment)},l(t){e=h(t,"THEAD",{});var s=x(e);a($.$$.fragment,s),s.forEach(E),n=u(t),o=h(t,"TBODY",{});var r=x(o);a(c.$$.fragment,r),m=u(r),a(d.$$.fragment,r),r.forEach(E)},m(t,s){y(t,e,s),r($,e,null),y(t,n,s),y(t,o,s),r(c,o,null),b(o,m),r(d,o,null),v=!0},p(t,e){const n={};8&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s);const a={};8&e&&(a.$$scope={dirty:e,ctx:t}),d.$set(a)},i(t){v||(f($.$$.fragment,t),f(c.$$.fragment,t),f(d.$$.fragment,t),v=!0)},o(t){p($.$$.fragment,t),p(c.$$.fragment,t),p(d.$$.fragment,t),v=!1},d(t){t&&E(e),l($),t&&E(n),t&&E(o),l(c),l(d)}}}function St(t){let e;return{c(){e=d("Events")},l(t){e=v(t,"Events")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function Nt(t){let e;return{c(){e=d("Name")},l(t){e=v(t,"Name")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function jt(t){let e;return{c(){e=d("Event Detail")},l(t){e=v(t,"Event Detail")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function Rt(t){let e;return{c(){e=d("Description")},l(t){e=v(t,"Description")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function Ft(t){let e,$,n,o,c,m;return e=new H({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),n=new H({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),c=new H({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),$=u(t),a(n.$$.fragment,t),o=u(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),y(t,$,s),r(n,t,s),y(t,o,s),r(c,t,s),m=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),n.$set(a);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),c.$set(r)},i(t){m||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){p(e.$$.fragment,t),p(n.$$.fragment,t),p(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&E($),l(n,t),t&&E(o),l(c,t)}}}function Lt(t){let e,$,n;return{c(){e=i("strong"),$=i("code"),n=d("change")},l(t){e=h(t,"STRONG",{});var s=x(e);$=h(s,"CODE",{});var a=x($);n=v(a,"change"),a.forEach(E),s.forEach(E)},m(t,s){y(t,e,s),b(e,$),b($,n)},p:k,d(t){t&&E(e)}}}function Mt(t){let e,$;return{c(){e=i("code"),$=d("{ value, nativeEvent }")},l(t){e=h(t,"CODE",{});var n=x(e);$=v(n,"{ value, nativeEvent }"),n.forEach(E)},m(t,n){y(t,e,n),b(e,$)},p:k,d(t){t&&E(e)}}}function Gt(t){let e,$,n,s,a,r,o,c,f,p,l,m,g,u,D,T;return{c(){e=d("Fired when selecting a different tab. The "),$=i("code"),n=d("value"),s=d(" contains the tab's "),a=i("code"),r=d("value"),o=d(" (from the "),c=i("code"),f=d("items"),p=d(" prop) and "),l=i("code"),m=d("nativeEvent"),g=d(" has the "),u=i("a"),D=d("native change event"),T=d("."),this.h()},l(t){e=v(t,"Fired when selecting a different tab. The "),$=h(t,"CODE",{});var i=x($);n=v(i,"value"),i.forEach(E),s=v(t," contains the tab's "),a=h(t,"CODE",{});var d=x(a);r=v(d,"value"),d.forEach(E),o=v(t," (from the "),c=h(t,"CODE",{});var w=x(c);f=v(w,"items"),w.forEach(E),p=v(t," prop) and "),l=h(t,"CODE",{});var y=x(l);m=v(y,"nativeEvent"),y.forEach(E),g=v(t," has the "),u=h(t,"A",{href:!0,rel:!0});var b=x(u);D=v(b,"native change event"),b.forEach(E),T=v(t,"."),this.h()},h(){w(u,"href","https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event"),w(u,"rel","nofollow")},m(t,i){y(t,e,i),y(t,$,i),b($,n),y(t,s,i),y(t,a,i),b(a,r),y(t,o,i),y(t,c,i),b(c,f),y(t,p,i),y(t,l,i),b(l,m),y(t,g,i),y(t,u,i),b(u,D),y(t,T,i)},p:k,d(t){t&&E(e),t&&E($),t&&E(s),t&&E(a),t&&E(o),t&&E(c),t&&E(p),t&&E(l),t&&E(g),t&&E(u),t&&E(T)}}}function Pt(t){let e,$,n,o,c,m;return e=new z({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),n=new z({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),$=u(t),a(n.$$.fragment,t),o=u(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),y(t,$,s),r(n,t,s),y(t,o,s),r(c,t,s),m=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),n.$set(a);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),c.$set(r)},i(t){m||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){p(e.$$.fragment,t),p(n.$$.fragment,t),p(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&E($),l(n,t),t&&E(o),l(c,t)}}}function Ht(t){let e,$,n,o,c,m;return $=new P({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),{c(){e=i("thead"),s($.$$.fragment),n=g(),o=i("tbody"),s(c.$$.fragment)},l(t){e=h(t,"THEAD",{});var s=x(e);a($.$$.fragment,s),s.forEach(E),n=u(t),o=h(t,"TBODY",{});var r=x(o);a(c.$$.fragment,r),r.forEach(E)},m(t,s){y(t,e,s),r($,e,null),y(t,n,s),y(t,o,s),r(c,o,null),m=!0},p(t,e){const n={};8&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s)},i(t){m||(f($.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){p($.$$.fragment,t),p(c.$$.fragment,t),m=!1},d(t){t&&E(e),l($),t&&E(n),t&&E(o),l(c)}}}function zt(t){let e;return{c(){e=d("SCSS Variables")},l(t){e=v(t,"SCSS Variables")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function qt(t){let e;return{c(){e=d("Name")},l(t){e=v(t,"Name")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function Bt(t){let e;return{c(){e=d("Description")},l(t){e=v(t,"Description")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function Vt(t){let e;return{c(){e=d("Default")},l(t){e=v(t,"Default")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function It(t){let e,$,n,o,c,m;return e=new H({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),n=new H({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),c=new H({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),$=u(t),a(n.$$.fragment,t),o=u(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),y(t,$,s),r(n,t,s),y(t,o,s),r(c,t,s),m=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),n.$set(a);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),c.$set(r)},i(t){m||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){p(e.$$.fragment,t),p(n.$$.fragment,t),p(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&E($),l(n,t),t&&E(o),l(c,t)}}}function Ut(t){let e,$,n,s,a,r,o,c,f;return{c(){e=i("strong"),$=i("code"),n=d("$main"),s=g(),a=i("small"),r=d("From "),o=i("a"),c=i("code"),f=d("Tab"),this.h()},l(t){e=h(t,"STRONG",{});var p=x(e);$=h(p,"CODE",{});var l=x($);n=v(l,"$main"),l.forEach(E),p.forEach(E),s=u(t),a=h(t,"SMALL",{});var m=x(a);r=v(m,"From "),o=h(m,"A",{href:!0});var g=x(o);c=h(g,"CODE",{});var i=x(c);f=v(i,"Tab"),i.forEach(E),g.forEach(E),m.forEach(E),this.h()},h(){w(o,"href","./docs/components/tab")},m(t,p){y(t,e,p),b(e,$),b($,n),y(t,s,p),y(t,a,p),b(a,r),b(a,o),b(o,c),b(c,f)},p:k,d(t){t&&E(e),t&&E(s),t&&E(a)}}}function Yt(t){let e;return{c(){e=d("Affects the color of the ripple background, border color of the selected tab, and text color.")},l(t){e=v(t,"Affects the color of the ripple background, border color of the selected tab, and text color.")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function Kt(t){let e,$;return e=new R({props:{value:"#4300B0"}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,n){r(e,t,n),$=!0},p:k,i(t){$||(f(e.$$.fragment,t),$=!0)},o(t){p(e.$$.fragment,t),$=!1},d(t){l(e,t)}}}function Wt(t){let e,$,n,o,c,m;return e=new z({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),n=new z({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),$=u(t),a(n.$$.fragment,t),o=u(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),y(t,$,s),r(n,t,s),y(t,o,s),r(c,t,s),m=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),n.$set(a);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),c.$set(r)},i(t){m||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){p(e.$$.fragment,t),p(n.$$.fragment,t),p(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&E($),l(n,t),t&&E(o),l(c,t)}}}function Qt(t){let e,$,n,s,a,r,o,c,f;return{c(){e=i("strong"),$=i("code"),n=d("$disabled"),s=g(),a=i("small"),r=d("From "),o=i("a"),c=i("code"),f=d("Tab"),this.h()},l(t){e=h(t,"STRONG",{});var p=x(e);$=h(p,"CODE",{});var l=x($);n=v(l,"$disabled"),l.forEach(E),p.forEach(E),s=u(t),a=h(t,"SMALL",{});var m=x(a);r=v(m,"From "),o=h(m,"A",{href:!0});var g=x(o);c=h(g,"CODE",{});var i=x(c);f=v(i,"Tab"),i.forEach(E),g.forEach(E),m.forEach(E),this.h()},h(){w(o,"href","./docs/components/tab")},m(t,p){y(t,e,p),b(e,$),b($,n),y(t,s,p),y(t,a,p),b(a,r),b(a,o),b(o,c),b(c,f)},p:k,d(t){t&&E(e),t&&E(s),t&&E(a)}}}function Zt(t){let e;return{c(){e=d("The text color of disabled tabs.")},l(t){e=v(t,"The text color of disabled tabs.")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function _t(t){let e,$;return e=new R({props:{value:"#888888"}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,n){r(e,t,n),$=!0},p:k,i(t){$||(f(e.$$.fragment,t),$=!0)},o(t){p(e.$$.fragment,t),$=!1},d(t){l(e,t)}}}function Jt(t){let e,$,n,o,c,m;return e=new z({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),n=new z({props:{$$slots:{default:[Zt]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[_t]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),$=u(t),a(n.$$.fragment,t),o=u(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),y(t,$,s),r(n,t,s),y(t,o,s),r(c,t,s),m=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),n.$set(a);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),c.$set(r)},i(t){m||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){p(e.$$.fragment,t),p(n.$$.fragment,t),p(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&E($),l(n,t),t&&E(o),l(c,t)}}}function Xt(t){let e,$,n,s,a,r,o,c,f;return{c(){e=i("strong"),$=i("code"),n=d("$off-state"),s=g(),a=i("small"),r=d("From "),o=i("a"),c=i("code"),f=d("Tab"),this.h()},l(t){e=h(t,"STRONG",{});var p=x(e);$=h(p,"CODE",{});var l=x($);n=v(l,"$off-state"),l.forEach(E),p.forEach(E),s=u(t),a=h(t,"SMALL",{});var m=x(a);r=v(m,"From "),o=h(m,"A",{href:!0});var g=x(o);c=h(g,"CODE",{});var i=x(c);f=v(i,"Tab"),i.forEach(E),g.forEach(E),m.forEach(E),this.h()},h(){w(o,"href","./docs/components/tab")},m(t,p){y(t,e,p),b(e,$),b($,n),y(t,s,p),y(t,a,p),b(a,r),b(a,o),b(o,c),b(c,f)},p:k,d(t){t&&E(e),t&&E(s),t&&E(a)}}}function te(t){let e;return{c(){e=d("Affects the background color of the tab when focused or hovered on and the default border color.")},l(t){e=v(t,"Affects the background color of the tab when focused or hovered on and the default border color.")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function ee(t){let e,$;return e=new R({props:{value:"#AAAAAA"}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,n){r(e,t,n),$=!0},p:k,i(t){$||(f(e.$$.fragment,t),$=!0)},o(t){p(e.$$.fragment,t),$=!1},d(t){l(e,t)}}}function $e(t){let e,$,n,o,c,m;return e=new z({props:{$$slots:{default:[Xt]},$$scope:{ctx:t}}}),n=new z({props:{$$slots:{default:[te]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[ee]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),$=u(t),a(n.$$.fragment,t),o=u(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),y(t,$,s),r(n,t,s),y(t,o,s),r(c,t,s),m=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),n.$set(a);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),c.$set(r)},i(t){m||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){p(e.$$.fragment,t),p(n.$$.fragment,t),p(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&E($),l(n,t),t&&E(o),l(c,t)}}}function ne(t){let e,$,n,s,a,r,o,c,f;return{c(){e=i("strong"),$=i("code"),n=d("$font"),s=g(),a=i("small"),r=d("From "),o=i("a"),c=i("code"),f=d("Tab"),this.h()},l(t){e=h(t,"STRONG",{});var p=x(e);$=h(p,"CODE",{});var l=x($);n=v(l,"$font"),l.forEach(E),p.forEach(E),s=u(t),a=h(t,"SMALL",{});var m=x(a);r=v(m,"From "),o=h(m,"A",{href:!0});var g=x(o);c=h(g,"CODE",{});var i=x(c);f=v(i,"Tab"),i.forEach(E),g.forEach(E),m.forEach(E),this.h()},h(){w(o,"href","./docs/components/tab")},m(t,p){y(t,e,p),b(e,$),b($,n),y(t,s,p),y(t,a,p),b(a,r),b(a,o),b(o,c),b(c,f)},p:k,d(t){t&&E(e),t&&E(s),t&&E(a)}}}function se(t){let e;return{c(){e=d("The font family of the content text.")},l(t){e=v(t,"The font family of the content text.")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function ae(t){let e,$;return{c(){e=i("code"),$=d("'Ubuntu'")},l(t){e=h(t,"CODE",{});var n=x(e);$=v(n,"'Ubuntu'"),n.forEach(E)},m(t,n){y(t,e,n),b(e,$)},p:k,d(t){t&&E(e)}}}function re(t){let e,$,n,o,c,m;return e=new z({props:{$$slots:{default:[ne]},$$scope:{ctx:t}}}),n=new z({props:{$$slots:{default:[se]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[ae]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),$=u(t),a(n.$$.fragment,t),o=u(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),y(t,$,s),r(n,t,s),y(t,o,s),r(c,t,s),m=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),n.$set(a);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),c.$set(r)},i(t){m||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){p(e.$$.fragment,t),p(n.$$.fragment,t),p(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&E($),l(n,t),t&&E(o),l(c,t)}}}function oe(t){let e,$,n,s,a,r,o,c,f;return{c(){e=i("strong"),$=i("code"),n=d("$bold-font-weight"),s=g(),a=i("small"),r=d("From "),o=i("a"),c=i("code"),f=d("Tab"),this.h()},l(t){e=h(t,"STRONG",{});var p=x(e);$=h(p,"CODE",{});var l=x($);n=v(l,"$bold-font-weight"),l.forEach(E),p.forEach(E),s=u(t),a=h(t,"SMALL",{});var m=x(a);r=v(m,"From "),o=h(m,"A",{href:!0});var g=x(o);c=h(g,"CODE",{});var i=x(c);f=v(i,"Tab"),i.forEach(E),g.forEach(E),m.forEach(E),this.h()},h(){w(o,"href","./docs/components/tab")},m(t,p){y(t,e,p),b(e,$),b($,n),y(t,s,p),y(t,a,p),b(a,r),b(a,o),b(o,c),b(c,f)},p:k,d(t){t&&E(e),t&&E(s),t&&E(a)}}}function ce(t){let e;return{c(){e=d("The font weight of the content text.")},l(t){e=v(t,"The font weight of the content text.")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function fe(t){let e,$;return{c(){e=i("code"),$=d("500")},l(t){e=h(t,"CODE",{});var n=x(e);$=v(n,"500"),n.forEach(E)},m(t,n){y(t,e,n),b(e,$)},p:k,d(t){t&&E(e)}}}function pe(t){let e,$,n,o,c,m;return e=new z({props:{$$slots:{default:[oe]},$$scope:{ctx:t}}}),n=new z({props:{$$slots:{default:[ce]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[fe]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),$=u(t),a(n.$$.fragment,t),o=u(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),y(t,$,s),r(n,t,s),y(t,o,s),r(c,t,s),m=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),n.$set(a);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),c.$set(r)},i(t){m||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){p(e.$$.fragment,t),p(n.$$.fragment,t),p(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&E($),l(n,t),t&&E(o),l(c,t)}}}function le(t){let e,$,n,o,c,m,d,v,w,D,T,O,k,C;return $=new P({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),d=new P({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),w=new P({props:{$$slots:{default:[$e]},$$scope:{ctx:t}}}),T=new P({props:{$$slots:{default:[re]},$$scope:{ctx:t}}}),k=new P({props:{$$slots:{default:[pe]},$$scope:{ctx:t}}}),{c(){e=i("thead"),s($.$$.fragment),n=g(),o=i("tbody"),s(c.$$.fragment),m=g(),s(d.$$.fragment),v=g(),s(w.$$.fragment),D=g(),s(T.$$.fragment),O=g(),s(k.$$.fragment)},l(t){e=h(t,"THEAD",{});var s=x(e);a($.$$.fragment,s),s.forEach(E),n=u(t),o=h(t,"TBODY",{});var r=x(o);a(c.$$.fragment,r),m=u(r),a(d.$$.fragment,r),v=u(r),a(w.$$.fragment,r),D=u(r),a(T.$$.fragment,r),O=u(r),a(k.$$.fragment,r),r.forEach(E)},m(t,s){y(t,e,s),r($,e,null),y(t,n,s),y(t,o,s),r(c,o,null),b(o,m),r(d,o,null),b(o,v),r(w,o,null),b(o,D),r(T,o,null),b(o,O),r(k,o,null),C=!0},p(t,e){const n={};8&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s);const a={};8&e&&(a.$$scope={dirty:e,ctx:t}),d.$set(a);const r={};8&e&&(r.$$scope={dirty:e,ctx:t}),w.$set(r);const o={};8&e&&(o.$$scope={dirty:e,ctx:t}),T.$set(o);const f={};8&e&&(f.$$scope={dirty:e,ctx:t}),k.$set(f)},i(t){C||(f($.$$.fragment,t),f(c.$$.fragment,t),f(d.$$.fragment,t),f(w.$$.fragment,t),f(T.$$.fragment,t),f(k.$$.fragment,t),C=!0)},o(t){p($.$$.fragment,t),p(c.$$.fragment,t),p(d.$$.fragment,t),p(w.$$.fragment,t),p(T.$$.fragment,t),p(k.$$.fragment,t),C=!1},d(t){t&&E(e),l($),t&&E(n),t&&E(o),l(c),l(d),l(w),l(T),l(k)}}}function me(t){let e,$,n,o,c,m,D,T,O,k,C,N,R,P,H,z,K,W,Q,Z,_,J,X,tt,et,$t,nt,st,at,rt,ot;return e=new A({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),n=new S({props:{$$slots:{default:[B]},$$scope:{ctx:t}}}),c=new F({props:{components:ue}}),D=new j({props:{$$slots:{source:[I],showcase:[V]},$$scope:{ctx:t}}}),O=new L({props:{id:"properties",$$slots:{default:[U]},$$scope:{ctx:t}}}),C=new M({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),R=new G({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),W=new M({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),Z=new S({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),J=new G({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),tt=new L({props:{id:"events",$$slots:{default:[St]},$$scope:{ctx:t}}}),$t=new G({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),st=new L({props:{id:"scss-variables",$$slots:{default:[zt]},$$scope:{ctx:t}}}),rt=new G({props:{$$slots:{default:[le]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment),m=g(),s(D.$$.fragment),T=g(),s(O.$$.fragment),k=g(),s(C.$$.fragment),N=g(),s(R.$$.fragment),P=g(),H=i("div"),z=d("* Required"),K=g(),s(W.$$.fragment),Q=g(),s(Z.$$.fragment),_=g(),s(J.$$.fragment),X=g(),s(tt.$$.fragment),et=g(),s($t.$$.fragment),nt=g(),s(st.$$.fragment),at=g(),s(rt.$$.fragment),this.h()},l(t){a(e.$$.fragment,t),$=u(t),a(n.$$.fragment,t),o=u(t),a(c.$$.fragment,t),m=u(t),a(D.$$.fragment,t),T=u(t),a(O.$$.fragment,t),k=u(t),a(C.$$.fragment,t),N=u(t),a(R.$$.fragment,t),P=u(t),H=h(t,"DIV",{class:!0});var s=x(H);z=v(s,"* Required"),s.forEach(E),K=u(t),a(W.$$.fragment,t),Q=u(t),a(Z.$$.fragment,t),_=u(t),a(J.$$.fragment,t),X=u(t),a(tt.$$.fragment,t),et=u(t),a($t.$$.fragment,t),nt=u(t),a(st.$$.fragment,t),at=u(t),a(rt.$$.fragment,t),this.h()},h(){w(H,"class","required")},m(t,s){r(e,t,s),y(t,$,s),r(n,t,s),y(t,o,s),r(c,t,s),y(t,m,s),r(D,t,s),y(t,T,s),r(O,t,s),y(t,k,s),r(C,t,s),y(t,N,s),r(R,t,s),y(t,P,s),y(t,H,s),b(H,z),y(t,K,s),r(W,t,s),y(t,Q,s),r(Z,t,s),y(t,_,s),r(J,t,s),y(t,X,s),r(tt,t,s),y(t,et,s),r($t,t,s),y(t,nt,s),r(st,t,s),y(t,at,s),r(rt,t,s),ot=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),n.$set(a);const r={};9&$&&(r.$$scope={dirty:$,ctx:t}),D.$set(r);const o={};8&$&&(o.$$scope={dirty:$,ctx:t}),O.$set(o);const c={};8&$&&(c.$$scope={dirty:$,ctx:t}),C.$set(c);const f={};8&$&&(f.$$scope={dirty:$,ctx:t}),R.$set(f);const p={};8&$&&(p.$$scope={dirty:$,ctx:t}),W.$set(p);const l={};8&$&&(l.$$scope={dirty:$,ctx:t}),Z.$set(l);const m={};8&$&&(m.$$scope={dirty:$,ctx:t}),J.$set(m);const g={};8&$&&(g.$$scope={dirty:$,ctx:t}),tt.$set(g);const i={};8&$&&(i.$$scope={dirty:$,ctx:t}),$t.$set(i);const d={};8&$&&(d.$$scope={dirty:$,ctx:t}),st.$set(d);const u={};8&$&&(u.$$scope={dirty:$,ctx:t}),rt.$set(u)},i(t){ot||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),f(D.$$.fragment,t),f(O.$$.fragment,t),f(C.$$.fragment,t),f(R.$$.fragment,t),f(W.$$.fragment,t),f(Z.$$.fragment,t),f(J.$$.fragment,t),f(tt.$$.fragment,t),f($t.$$.fragment,t),f(st.$$.fragment,t),f(rt.$$.fragment,t),ot=!0)},o(t){p(e.$$.fragment,t),p(n.$$.fragment,t),p(c.$$.fragment,t),p(D.$$.fragment,t),p(O.$$.fragment,t),p(C.$$.fragment,t),p(R.$$.fragment,t),p(W.$$.fragment,t),p(Z.$$.fragment,t),p(J.$$.fragment,t),p(tt.$$.fragment,t),p($t.$$.fragment,t),p(st.$$.fragment,t),p(rt.$$.fragment,t),ot=!1},d(t){l(e,t),t&&E($),l(n,t),t&&E(o),l(c,t),t&&E(m),l(D,t),t&&E(T),l(O,t),t&&E(k),l(C,t),t&&E(N),l(R,t),t&&E(P),t&&E(H),t&&E(K),l(W,t),t&&E(Q),l(Z,t),t&&E(_),l(J,t),t&&E(X),l(tt,t),t&&E(et),l($t,t),t&&E(nt),l(st,t),t&&E(at),l(rt,t)}}}function ge(t){let e,$;const m=[t[1],ie];let g={$$slots:{default:[me]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)g=n(g,m[t]);return e=new C({props:g}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,n){r(e,t,n),$=!0},p(t,[$]){const n=2&$?o(m,[2&$&&c(t[1]),0&$&&c(ie)]):{};9&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n)},i(t){$||(f(e.$$.fragment,t),$=!0)},o(t){p(e.$$.fragment,t),$=!1},d(t){l(e,t)}}}const ie={name:"Tabs",relatedComponents:[{name:"Tab",link:"./docs/components/tab"}]},{name:de,relatedComponents:ue}=ie;function he(t,e,$){let s="Main dishes";return t.$$set=t=>{$(1,e=n(n({},e),m(t)))},e=m(e),[s,e,function(t){s=t,$(0,s)}]}class xe extends t{constructor(t){super(),e(this,t,he,ge,$,{})}}export{xe as default,ie as metadata};
