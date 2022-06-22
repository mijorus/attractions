import{S as t,i as $,s as e,U as s,u as n,w as r,x as a,a2 as o,a9 as c,A as f,B as l,C as m,V as p,D as i,F as g,k as d,h as u,E as h,G as x,t as w,v as y,g as E,j as v,l as b,n as D}from"./client.c283f75b.js";import{L as j,H as A,P as C}from"./layout.8dd1ceaf.js";import{L as S}from"./loading.301e17be.js";import{S as T}from"./showcase.61e256d6.js";import{C as O}from"./color-preview.d5af9513.js";import{H as L}from"./h2.7758cf46.js";import{H as k}from"./h3.286fa5d9.js";import{T as H,a as N,b as P,c as V}from"./table.dfe22dd3.js";import"./classes.cdc0a1b3.js";import"./label.198804fd.js";import"./copyable-code.c92ca633.js";import"./button.6354aa35.js";function B(t){let $;return{c(){$=h("Loading")},l(t){$=x(t,"Loading")},m(t,e){d(t,$,e)},d(t){t&&u($)}}}function F(t){let $;return{c(){$=h("An indeterminate loading spinner.")},l(t){$=x(t,"An indeterminate loading spinner.")},m(t,e){d(t,$,e)},d(t){t&&u($)}}}function G(t){let $,e,s,n,r,a;return{c(){$=h("Adapted from SpinKit by "),e=w("a"),s=h("@tobiasahlin"),n=h(": "),r=w("a"),a=h("https://tobiasahlin.com/spinkit/"),this.h()},l(t){$=x(t,"Adapted from SpinKit by "),e=y(t,"A",{href:!0,rel:!0});var o=E(e);s=x(o,"@tobiasahlin"),o.forEach(u),n=x(t,": "),r=y(t,"A",{href:!0,rel:!0});var c=E(r);a=x(c,"https://tobiasahlin.com/spinkit/"),c.forEach(u),this.h()},h(){v(e,"href","https://github.com/tobiasahlin"),v(e,"rel","nofollow"),v(r,"href","https://tobiasahlin.com/spinkit/"),v(r,"rel","nofollow")},m(t,o){d(t,$,o),d(t,e,o),b(e,s),d(t,n,o),d(t,r,o),b(r,a)},d(t){t&&u($),t&&u(e),t&&u(n),t&&u(r)}}}function R(t){let $,e,s;return e=new S({}),{c(){$=w("div"),n(e.$$.fragment),this.h()},l(t){$=y(t,"DIV",{slot:!0,class:!0});var s=E($);r(e.$$.fragment,s),s.forEach(u),this.h()},h(){v($,"slot","showcase"),v($,"class","padded")},m(t,n){d(t,$,n),a(e,$,null),s=!0},i(t){s||(f(e.$$.fragment,t),s=!0)},o(t){l(e.$$.fragment,t),s=!1},d(t){t&&u($),m(e)}}}function I(t){let $,e;return{c(){$=w("div"),e=w("pre"),this.h()},l(t){$=y(t,"DIV",{slot:!0});var s=E($);e=y(s,"PRE",{class:!0}),E(e).forEach(u),s.forEach(u),this.h()},h(){v(e,"class","language-svelte"),v($,"slot","source")},m(t,s){d(t,$,s),b($,e),e.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loading</span> <span class="token punctuation">/></span></span></code>'},p:D,d(t){t&&u($)}}}function K(t){let $;return{c(){$=h("Properties")},l(t){$=x(t,"Properties")},m(t,e){d(t,$,e)},d(t){t&&u($)}}}function Y(t){let $;return{c(){$=h("Class Properties")},l(t){$=x(t,"Class Properties")},m(t,e){d(t,$,e)},d(t){t&&u($)}}}function M(t){let $,e,s,n,r,a,o;return{c(){$=h("All "),e=w("code"),s=h("<Loading>"),n=h(" components use the "),r=w("code"),a=h(".spinner"),o=h(" class.")},l(t){$=x(t,"All "),e=y(t,"CODE",{});var c=E(e);s=x(c,"<Loading>"),c.forEach(u),n=x(t," components use the "),r=y(t,"CODE",{});var f=E(r);a=x(f,".spinner"),f.forEach(u),o=x(t," class.")},m(t,c){d(t,$,c),d(t,e,c),b(e,s),d(t,n,c),d(t,r,c),b(r,a),d(t,o,c)},d(t){t&&u($),t&&u(e),t&&u(n),t&&u(r),t&&u(o)}}}function U(t){let $;return{c(){$=h("Falsy values passed to classes will be disregarded.")},l(t){$=x(t,"Falsy values passed to classes will be disregarded.")},m(t,e){d(t,$,e)},d(t){t&&u($)}}}function q(t){let $;return{c(){$=h("Name")},l(t){$=x(t,"Name")},m(t,e){d(t,$,e)},d(t){t&&u($)}}}function z(t){let $;return{c(){$=h("Default")},l(t){$=x(t,"Default")},m(t,e){d(t,$,e)},d(t){t&&u($)}}}function J(t){let $;return{c(){$=h("Type")},l(t){$=x(t,"Type")},m(t,e){d(t,$,e)},d(t){t&&u($)}}}function Q(t){let $;return{c(){$=h("Description")},l(t){$=x(t,"Description")},m(t,e){d(t,$,e)},d(t){t&&u($)}}}function W(t){let $,e,s,o,c,p,h,x;return $=new P({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),s=new P({props:{$$slots:{default:[z]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),h=new P({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),{c(){n($.$$.fragment),e=i(),n(s.$$.fragment),o=i(),n(c.$$.fragment),p=i(),n(h.$$.fragment)},l(t){r($.$$.fragment,t),e=g(t),r(s.$$.fragment,t),o=g(t),r(c.$$.fragment,t),p=g(t),r(h.$$.fragment,t)},m(t,n){a($,t,n),d(t,e,n),a(s,t,n),d(t,o,n),a(c,t,n),d(t,p,n),a(h,t,n),x=!0},p(t,e){const n={};2&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),s.$set(r);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),c.$set(a);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),h.$set(o)},i(t){x||(f($.$$.fragment,t),f(s.$$.fragment,t),f(c.$$.fragment,t),f(h.$$.fragment,t),x=!0)},o(t){l($.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){m($,t),t&&u(e),m(s,t),t&&u(o),m(c,t),t&&u(p),m(h,t)}}}function X(t){let $,e,s;return{c(){$=w("strong"),e=w("code"),s=h("class")},l(t){$=y(t,"STRONG",{});var n=E($);e=y(n,"CODE",{});var r=E(e);s=x(r,"class"),r.forEach(u),n.forEach(u)},m(t,n){d(t,$,n),b($,e),b(e,s)},d(t){t&&u($)}}}function Z(t){let $,e;return{c(){$=w("code"),e=h("null")},l(t){$=y(t,"CODE",{});var s=E($);e=x(s,"null"),s.forEach(u)},m(t,s){d(t,$,s),b($,e)},d(t){t&&u($)}}}function _(t){let $,e;return{c(){$=w("code"),e=h("string")},l(t){$=y(t,"CODE",{});var s=E($);e=x(s,"string"),s.forEach(u)},m(t,s){d(t,$,s),b($,e)},d(t){t&&u($)}}}function tt(t){let $;return{c(){$=h("A class string to add to the component.")},l(t){$=x(t,"A class string to add to the component.")},m(t,e){d(t,$,e)},d(t){t&&u($)}}}function $t(t){let $,e,s,o,c,p,h,x;return $=new V({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),s=new V({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),c=new V({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),h=new V({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),{c(){n($.$$.fragment),e=i(),n(s.$$.fragment),o=i(),n(c.$$.fragment),p=i(),n(h.$$.fragment)},l(t){r($.$$.fragment,t),e=g(t),r(s.$$.fragment,t),o=g(t),r(c.$$.fragment,t),p=g(t),r(h.$$.fragment,t)},m(t,n){a($,t,n),d(t,e,n),a(s,t,n),d(t,o,n),a(c,t,n),d(t,p,n),a(h,t,n),x=!0},p(t,e){const n={};2&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),s.$set(r);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),c.$set(a);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),h.$set(o)},i(t){x||(f($.$$.fragment,t),f(s.$$.fragment,t),f(c.$$.fragment,t),f(h.$$.fragment,t),x=!0)},o(t){l($.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){m($,t),t&&u(e),m(s,t),t&&u(o),m(c,t),t&&u(p),m(h,t)}}}function et(t){let $,e,s,o,c,p;return e=new N({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),c=new N({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),{c(){$=w("thead"),n(e.$$.fragment),s=i(),o=w("tbody"),n(c.$$.fragment)},l(t){$=y(t,"THEAD",{});var n=E($);r(e.$$.fragment,n),n.forEach(u),s=g(t),o=y(t,"TBODY",{});var a=E(o);r(c.$$.fragment,a),a.forEach(u)},m(t,n){d(t,$,n),a(e,$,null),d(t,s,n),d(t,o,n),a(c,o,null),p=!0},p(t,$){const s={};2&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const n={};2&$&&(n.$$scope={dirty:$,ctx:t}),c.$set(n)},i(t){p||(f(e.$$.fragment,t),f(c.$$.fragment,t),p=!0)},o(t){l(e.$$.fragment,t),l(c.$$.fragment,t),p=!1},d(t){t&&u($),m(e),t&&u(s),t&&u(o),m(c)}}}function st(t){let $;return{c(){$=h("SCSS Variables")},l(t){$=x(t,"SCSS Variables")},m(t,e){d(t,$,e)},d(t){t&&u($)}}}function nt(t){let $;return{c(){$=h("Name")},l(t){$=x(t,"Name")},m(t,e){d(t,$,e)},d(t){t&&u($)}}}function rt(t){let $;return{c(){$=h("Description")},l(t){$=x(t,"Description")},m(t,e){d(t,$,e)},d(t){t&&u($)}}}function at(t){let $;return{c(){$=h("Default")},l(t){$=x(t,"Default")},m(t,e){d(t,$,e)},d(t){t&&u($)}}}function ot(t){let $,e,s,o,c,p;return $=new P({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),s=new P({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),{c(){n($.$$.fragment),e=i(),n(s.$$.fragment),o=i(),n(c.$$.fragment)},l(t){r($.$$.fragment,t),e=g(t),r(s.$$.fragment,t),o=g(t),r(c.$$.fragment,t)},m(t,n){a($,t,n),d(t,e,n),a(s,t,n),d(t,o,n),a(c,t,n),p=!0},p(t,e){const n={};2&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),s.$set(r);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),c.$set(a)},i(t){p||(f($.$$.fragment,t),f(s.$$.fragment,t),f(c.$$.fragment,t),p=!0)},o(t){l($.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),p=!1},d(t){m($,t),t&&u(e),m(s,t),t&&u(o),m(c,t)}}}function ct(t){let $,e,s;return{c(){$=w("strong"),e=w("code"),s=h("$main")},l(t){$=y(t,"STRONG",{});var n=E($);e=y(n,"CODE",{});var r=E(e);s=x(r,"$main"),r.forEach(u),n.forEach(u)},m(t,n){d(t,$,n),b($,e),b(e,s)},d(t){t&&u($)}}}function ft(t){let $;return{c(){$=h("The color of spinner dots.")},l(t){$=x(t,"The color of spinner dots.")},m(t,e){d(t,$,e)},d(t){t&&u($)}}}function lt(t){let $,e;return $=new O({props:{value:"#4300B0"}}),{c(){n($.$$.fragment)},l(t){r($.$$.fragment,t)},m(t,s){a($,t,s),e=!0},p:D,i(t){e||(f($.$$.fragment,t),e=!0)},o(t){l($.$$.fragment,t),e=!1},d(t){m($,t)}}}function mt(t){let $,e,s,o,c,p;return $=new V({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),s=new V({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),c=new V({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c(){n($.$$.fragment),e=i(),n(s.$$.fragment),o=i(),n(c.$$.fragment)},l(t){r($.$$.fragment,t),e=g(t),r(s.$$.fragment,t),o=g(t),r(c.$$.fragment,t)},m(t,n){a($,t,n),d(t,e,n),a(s,t,n),d(t,o,n),a(c,t,n),p=!0},p(t,e){const n={};2&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),s.$set(r);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),c.$set(a)},i(t){p||(f($.$$.fragment,t),f(s.$$.fragment,t),f(c.$$.fragment,t),p=!0)},o(t){l($.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),p=!1},d(t){m($,t),t&&u(e),m(s,t),t&&u(o),m(c,t)}}}function pt(t){let $,e,s,o,c,p;return e=new N({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),c=new N({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),{c(){$=w("thead"),n(e.$$.fragment),s=i(),o=w("tbody"),n(c.$$.fragment)},l(t){$=y(t,"THEAD",{});var n=E($);r(e.$$.fragment,n),n.forEach(u),s=g(t),o=y(t,"TBODY",{});var a=E(o);r(c.$$.fragment,a),a.forEach(u)},m(t,n){d(t,$,n),a(e,$,null),d(t,s,n),d(t,o,n),a(c,o,null),p=!0},p(t,$){const s={};2&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const n={};2&$&&(n.$$scope={dirty:$,ctx:t}),c.$set(n)},i(t){p||(f(e.$$.fragment,t),f(c.$$.fragment,t),p=!0)},o(t){l(e.$$.fragment,t),l(c.$$.fragment,t),p=!1},d(t){t&&u($),m(e),t&&u(s),t&&u(o),m(c)}}}function it(t){let $,e,s,o,c,p,h,x,w,y,E,v,b,D,j,S,O,N,P,V,q,z;return $=new A({props:{$$slots:{default:[B]},$$scope:{ctx:t}}}),s=new C({props:{$$slots:{default:[F]},$$scope:{ctx:t}}}),c=new C({props:{$$slots:{default:[G]},$$scope:{ctx:t}}}),h=new T({props:{$$slots:{source:[I],showcase:[R]},$$scope:{ctx:t}}}),w=new L({props:{id:"properties",$$slots:{default:[K]},$$scope:{ctx:t}}}),E=new k({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),b=new C({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),j=new C({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),O=new H({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),P=new L({props:{id:"scss-variables",$$slots:{default:[st]},$$scope:{ctx:t}}}),q=new H({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){n($.$$.fragment),e=i(),n(s.$$.fragment),o=i(),n(c.$$.fragment),p=i(),n(h.$$.fragment),x=i(),n(w.$$.fragment),y=i(),n(E.$$.fragment),v=i(),n(b.$$.fragment),D=i(),n(j.$$.fragment),S=i(),n(O.$$.fragment),N=i(),n(P.$$.fragment),V=i(),n(q.$$.fragment)},l(t){r($.$$.fragment,t),e=g(t),r(s.$$.fragment,t),o=g(t),r(c.$$.fragment,t),p=g(t),r(h.$$.fragment,t),x=g(t),r(w.$$.fragment,t),y=g(t),r(E.$$.fragment,t),v=g(t),r(b.$$.fragment,t),D=g(t),r(j.$$.fragment,t),S=g(t),r(O.$$.fragment,t),N=g(t),r(P.$$.fragment,t),V=g(t),r(q.$$.fragment,t)},m(t,n){a($,t,n),d(t,e,n),a(s,t,n),d(t,o,n),a(c,t,n),d(t,p,n),a(h,t,n),d(t,x,n),a(w,t,n),d(t,y,n),a(E,t,n),d(t,v,n),a(b,t,n),d(t,D,n),a(j,t,n),d(t,S,n),a(O,t,n),d(t,N,n),a(P,t,n),d(t,V,n),a(q,t,n),z=!0},p(t,e){const n={};2&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),s.$set(r);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),c.$set(a);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),h.$set(o);const f={};2&e&&(f.$$scope={dirty:e,ctx:t}),w.$set(f);const l={};2&e&&(l.$$scope={dirty:e,ctx:t}),E.$set(l);const m={};2&e&&(m.$$scope={dirty:e,ctx:t}),b.$set(m);const p={};2&e&&(p.$$scope={dirty:e,ctx:t}),j.$set(p);const i={};2&e&&(i.$$scope={dirty:e,ctx:t}),O.$set(i);const g={};2&e&&(g.$$scope={dirty:e,ctx:t}),P.$set(g);const d={};2&e&&(d.$$scope={dirty:e,ctx:t}),q.$set(d)},i(t){z||(f($.$$.fragment,t),f(s.$$.fragment,t),f(c.$$.fragment,t),f(h.$$.fragment,t),f(w.$$.fragment,t),f(E.$$.fragment,t),f(b.$$.fragment,t),f(j.$$.fragment,t),f(O.$$.fragment,t),f(P.$$.fragment,t),f(q.$$.fragment,t),z=!0)},o(t){l($.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),l(w.$$.fragment,t),l(E.$$.fragment,t),l(b.$$.fragment,t),l(j.$$.fragment,t),l(O.$$.fragment,t),l(P.$$.fragment,t),l(q.$$.fragment,t),z=!1},d(t){m($,t),t&&u(e),m(s,t),t&&u(o),m(c,t),t&&u(p),m(h,t),t&&u(x),m(w,t),t&&u(y),m(E,t),t&&u(v),m(b,t),t&&u(D),m(j,t),t&&u(S),m(O,t),t&&u(N),m(P,t),t&&u(V),m(q,t)}}}function gt(t){let $,e;const p=[t[0],dt];let i={$$slots:{default:[it]},$$scope:{ctx:t}};for(let t=0;t<p.length;t+=1)i=s(i,p[t]);return $=new j({props:i}),{c(){n($.$$.fragment)},l(t){r($.$$.fragment,t)},m(t,s){a($,t,s),e=!0},p(t,[e]){const s=1&e?o(p,[1&e&&c(t[0]),0&e&&c(dt)]):{};2&e&&(s.$$scope={dirty:e,ctx:t}),$.$set(s)},i(t){e||(f($.$$.fragment,t),e=!0)},o(t){l($.$$.fragment,t),e=!1},d(t){m($,t)}}}const dt={name:"Loading"};function ut(t,$,e){return t.$$set=t=>{e(0,$=s(s({},$),p(t)))},[$=p($)]}class ht extends t{constructor(t){super(),$(this,t,ut,gt,e,{})}}export{ht as default,dt as metadata};
