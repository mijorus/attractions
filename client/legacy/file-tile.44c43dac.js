import{S as t,i as e,s as n,U as $,u as s,w as a,x as r,a2 as o,a9 as c,A as l,B as p,C as f,N as m,V as i,D as u,t as g,E as d,F as h,v as x,g as w,G as y,h as k,j as v,k as E,l as D,H as T,I as b,n as O}from"./client.4037e0bd.js";import{L as j,H as C,P as F}from"./layout.b3a0c124.js";import{F as S}from"./file-tile.c9009fad.js";import{S as A}from"./showcase.970b88b8.js";import{C as N}from"./color-preview.6abe1071.js";import{S as R}from"./shadow-preview.9ee42cb6.js";import{R as B}from"./related-components.96bb5152.js";import{H as G}from"./h2.33deea64.js";import{H as P}from"./h3.57762f71.js";import{T as z,a as H,b as I,c as L}from"./table.ce809e26.js";import"./classes.2a1298a6.js";import"./button.08c354bd.js";import"./format-file-size.0c5da3e0.js";import"./label.def5c956.js";import"./copyable-code.d3313fc1.js";import"./popover.54402856.js";import"./card.dcaea0ed.js";function M(t){let e;return{c(){e=d("FileTile")},l(t){e=y(t,"FileTile")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function V(t){let e;return{c(){e=d("A small tile displaying the name of a file, its size and format in human-readable ways.")},l(t){e=y(t,"A small tile displaying the name of a file, its size and format in human-readable ways.")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function q(t){let e,n;return e=new S({props:{file:t[0]}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p(t,n){const $={};1&n&&($.file=t[0]),e.$set($)},i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){f(e,t)}}}function Y(t){let e,n,$=null!=t[0]&&q(t);return{c(){e=g("div"),$&&$.c(),this.h()},l(t){e=x(t,"DIV",{slot:!0,class:!0});var n=w(e);$&&$.l(n),n.forEach(k),this.h()},h(){v(e,"slot","showcase"),v(e,"class","padded svelte-1h883k1")},m(t,s){E(t,e,s),$&&$.m(e,null),n=!0},p(t,n){null!=t[0]?$?($.p(t,n),1&n&&l($,1)):($=q(t),$.c(),l($,1),$.m(e,null)):$&&(T(),p($,1,1,(()=>{$=null})),b())},i(t){n||(l($),n=!0)},o(t){p($),n=!1},d(t){t&&k(e),$&&$.d()}}}function U(t){let e,n;return{c(){e=g("div"),n=g("pre"),this.h()},l(t){e=x(t,"DIV",{slot:!0});var $=w(e);n=x($,"PRE",{class:!0}),w(n).forEach(k),$.forEach(k),this.h()},h(){v(n,"class","language-svelte"),v(e,"slot","source")},m(t,$){E(t,e,$),D(e,n),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'svelte\'</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> file <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n    file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">""</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"filename.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> file <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">&#125;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FileTile</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>file<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>\n<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span></code>'},p:O,d(t){t&&k(e)}}}function K(t){let e;return{c(){e=d("Properties")},l(t){e=y(t,"Properties")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function W(t){let e;return{c(){e=d("Functional Properties")},l(t){e=y(t,"Functional Properties")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function J(t){let e;return{c(){e=d("Name")},l(t){e=y(t,"Name")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function Q(t){let e;return{c(){e=d("Default")},l(t){e=y(t,"Default")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function X(t){let e;return{c(){e=d("Type")},l(t){e=y(t,"Type")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function Z(t){let e;return{c(){e=d("Description")},l(t){e=y(t,"Description")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function _(t){let e,n,$,o,c,m,i,g;return e=new I({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),$=new I({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),c=new I({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),i=new I({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment),m=u(),s(i.$$.fragment)},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t),m=h(t),a(i.$$.fragment,t)},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),E(t,m,s),r(i,t,s),g=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),i.$set(o)},i(t){g||(l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),l(i.$$.fragment,t),g=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(i.$$.fragment,t),g=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(o),f(c,t),t&&k(m),f(i,t)}}}function tt(t){let e,n,$,s,a,r,o;return{c(){e=g("mark"),n=g("strong"),$=g("code"),s=d("file"),a=d(" "),r=g("span"),o=d("*"),this.h()},l(t){e=x(t,"MARK",{});var c=w(e);n=x(c,"STRONG",{});var l=w(n);$=x(l,"CODE",{});var p=w($);s=y(p,"file"),p.forEach(k),l.forEach(k),c.forEach(k),a=y(t," "),r=x(t,"SPAN",{class:!0});var f=w(r);o=y(f,"*"),f.forEach(k),this.h()},h(){v(r,"class","required")},m(t,c){E(t,e,c),D(e,n),D(n,$),D($,s),E(t,a,c),E(t,r,c),D(r,o)},d(t){t&&k(e),t&&k(a),t&&k(r)}}}function et(t){let e,n,$;return{c(){e=g("a"),n=g("code"),$=d("File"),this.h()},l(t){e=x(t,"A",{href:!0,rel:!0});var s=w(e);n=x(s,"CODE",{});var a=w(n);$=y(a,"File"),a.forEach(k),s.forEach(k),this.h()},h(){v(e,"href","https://developer.mozilla.org/en-US/docs/Web/API/File"),v(e,"rel","nofollow")},m(t,s){E(t,e,s),D(e,n),D(n,$)},d(t){t&&k(e)}}}function nt(t){let e;return{c(){e=d("The File object to display.")},l(t){e=y(t,"The File object to display.")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function $t(t){let e,n,$,o,c,m,i,g;return e=new L({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),$=new L({}),c=new L({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),i=new L({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment),m=u(),s(i.$$.fragment)},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t),m=h(t),a(i.$$.fragment,t)},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),E(t,m,s),r(i,t,s),g=!0},p(t,n){const $={};4&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),c.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),i.$set(a)},i(t){g||(l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),l(i.$$.fragment,t),g=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(i.$$.fragment,t),g=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(o),f(c,t),t&&k(m),f(i,t)}}}function st(t){let e,n,$,o,c,m;return n=new H({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),c=new H({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),{c(){e=g("thead"),s(n.$$.fragment),$=u(),o=g("tbody"),s(c.$$.fragment)},l(t){e=x(t,"THEAD",{});var s=w(e);a(n.$$.fragment,s),s.forEach(k),$=h(t),o=x(t,"TBODY",{});var r=w(o);a(c.$$.fragment,r),r.forEach(k)},m(t,s){E(t,e,s),r(n,e,null),E(t,$,s),E(t,o,s),r(c,o,null),m=!0},p(t,e){const $={};4&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s)},i(t){m||(l(n.$$.fragment,t),l(c.$$.fragment,t),m=!0)},o(t){p(n.$$.fragment,t),p(c.$$.fragment,t),m=!1},d(t){t&&k(e),f(n),t&&k($),t&&k(o),f(c)}}}function at(t){let e;return{c(){e=d("Class Properties")},l(t){e=y(t,"Class Properties")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function rt(t){let e,n,$,s,a,r,o;return{c(){e=d("All "),n=g("code"),$=d("<FileTile>"),s=d(" components use the "),a=g("code"),r=d(".file-tile"),o=d(" class.")},l(t){e=y(t,"All "),n=x(t,"CODE",{});var c=w(n);$=y(c,"<FileTile>"),c.forEach(k),s=y(t," components use the "),a=x(t,"CODE",{});var l=w(a);r=y(l,".file-tile"),l.forEach(k),o=y(t," class.")},m(t,c){E(t,e,c),E(t,n,c),D(n,$),E(t,s,c),E(t,a,c),D(a,r),E(t,o,c)},d(t){t&&k(e),t&&k(n),t&&k(s),t&&k(a),t&&k(o)}}}function ot(t){let e;return{c(){e=d("Events")},l(t){e=y(t,"Events")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function ct(t){let e;return{c(){e=d("Name")},l(t){e=y(t,"Name")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function lt(t){let e;return{c(){e=d("Event Detail")},l(t){e=y(t,"Event Detail")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function pt(t){let e;return{c(){e=d("Description")},l(t){e=y(t,"Description")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function ft(t){let e,n,$,o,c,m;return e=new I({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),$=new I({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),c=new I({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),m=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(o),f(c,t)}}}function mt(t){let e,n,$;return{c(){e=g("strong"),n=g("code"),$=d("delete")},l(t){e=x(t,"STRONG",{});var s=w(e);n=x(s,"CODE",{});var a=w(n);$=y(a,"delete"),a.forEach(k),s.forEach(k)},m(t,s){E(t,e,s),D(e,n),D(n,$)},d(t){t&&k(e)}}}function it(t){let e,n;return{c(){e=g("code"),n=d("file")},l(t){e=x(t,"CODE",{});var $=w(e);n=y($,"file"),$.forEach(k)},m(t,$){E(t,e,$),D(e,n)},d(t){t&&k(e)}}}function ut(t){let e,n,$,s;return{c(){e=d("Fired when the delete button is pressed. The detail is the same "),n=g("code"),$=d("file"),s=d(" object that was passed in the property.")},l(t){e=y(t,"Fired when the delete button is pressed. The detail is the same "),n=x(t,"CODE",{});var a=w(n);$=y(a,"file"),a.forEach(k),s=y(t," object that was passed in the property.")},m(t,a){E(t,e,a),E(t,n,a),D(n,$),E(t,s,a)},d(t){t&&k(e),t&&k(n),t&&k(s)}}}function gt(t){let e,n,$,o,c,m;return e=new L({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),c=new L({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),m=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(o),f(c,t)}}}function dt(t){let e,n,$,o,c,m;return n=new H({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),c=new H({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){e=g("thead"),s(n.$$.fragment),$=u(),o=g("tbody"),s(c.$$.fragment)},l(t){e=x(t,"THEAD",{});var s=w(e);a(n.$$.fragment,s),s.forEach(k),$=h(t),o=x(t,"TBODY",{});var r=w(o);a(c.$$.fragment,r),r.forEach(k)},m(t,s){E(t,e,s),r(n,e,null),E(t,$,s),E(t,o,s),r(c,o,null),m=!0},p(t,e){const $={};4&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s)},i(t){m||(l(n.$$.fragment,t),l(c.$$.fragment,t),m=!0)},o(t){p(n.$$.fragment,t),p(c.$$.fragment,t),m=!1},d(t){t&&k(e),f(n),t&&k($),t&&k(o),f(c)}}}function ht(t){let e;return{c(){e=d("SCSS Variables")},l(t){e=y(t,"SCSS Variables")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function xt(t){let e;return{c(){e=d("Name")},l(t){e=y(t,"Name")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function wt(t){let e;return{c(){e=d("Description")},l(t){e=y(t,"Description")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function yt(t){let e;return{c(){e=d("Default")},l(t){e=y(t,"Default")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function kt(t){let e,n,$,o,c,m;return e=new I({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),$=new I({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),c=new I({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),m=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(o),f(c,t)}}}function vt(t){let e,n,$;return{c(){e=g("strong"),n=g("code"),$=d("$dark")},l(t){e=x(t,"STRONG",{});var s=w(e);n=x(s,"CODE",{});var a=w(n);$=y(a,"$dark"),a.forEach(k),s.forEach(k)},m(t,s){E(t,e,s),D(e,n),D(n,$)},d(t){t&&k(e)}}}function Et(t){let e;return{c(){e=d("The text color of the tile.")},l(t){e=y(t,"The text color of the tile.")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function Dt(t){let e,n;return e=new N({props:{value:"#333333"}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p:O,i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){f(e,t)}}}function Tt(t){let e,n,$,o,c,m;return e=new L({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),c=new L({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),m=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(o),f(c,t)}}}function bt(t){let e,n,$;return{c(){e=g("strong"),n=g("code"),$=d("$file-tile-radius")},l(t){e=x(t,"STRONG",{});var s=w(e);n=x(s,"CODE",{});var a=w(n);$=y(a,"$file-tile-radius"),a.forEach(k),s.forEach(k)},m(t,s){E(t,e,s),D(e,n),D(n,$)},d(t){t&&k(e)}}}function Ot(t){let e;return{c(){e=d("The curvature radius of the tile.")},l(t){e=y(t,"The curvature radius of the tile.")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function jt(t){let e,n;return{c(){e=g("code"),n=d(".625em")},l(t){e=x(t,"CODE",{});var $=w(e);n=y($,".625em"),$.forEach(k)},m(t,$){E(t,e,$),D(e,n)},d(t){t&&k(e)}}}function Ct(t){let e,n,$,o,c,m;return e=new L({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),c=new L({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),m=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(o),f(c,t)}}}function Ft(t){let e,n,$;return{c(){e=g("strong"),n=g("code"),$=d("$shadow-1")},l(t){e=x(t,"STRONG",{});var s=w(e);n=x(s,"CODE",{});var a=w(n);$=y(a,"$shadow-1"),a.forEach(k),s.forEach(k)},m(t,s){E(t,e,s),D(e,n),D(n,$)},d(t){t&&k(e)}}}function St(t){let e;return{c(){e=d("The shadow of the tile.")},l(t){e=y(t,"The shadow of the tile.")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function At(t){let e,n;return e=new R({props:{value:Zt}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p:O,i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){f(e,t)}}}function Nt(t){let e,n,$,o,c,m;return e=new L({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),c=new L({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),m=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(o),f(c,t)}}}function Rt(t){let e,n,$;return{c(){e=g("strong"),n=g("code"),$=d("$thin-font-weight")},l(t){e=x(t,"STRONG",{});var s=w(e);n=x(s,"CODE",{});var a=w(n);$=y(a,"$thin-font-weight"),a.forEach(k),s.forEach(k)},m(t,s){E(t,e,s),D(e,n),D(n,$)},d(t){t&&k(e)}}}function Bt(t){let e;return{c(){e=d("The thinner font weight for the file details: size and type.")},l(t){e=y(t,"The thinner font weight for the file details: size and type.")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function Gt(t){let e,n;return{c(){e=g("code"),n=d("300")},l(t){e=x(t,"CODE",{});var $=w(e);n=y($,"300"),$.forEach(k)},m(t,$){E(t,e,$),D(e,n)},d(t){t&&k(e)}}}function Pt(t){let e,n,$,o,c,m;return e=new L({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),c=new L({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),m=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(o),f(c,t)}}}function zt(t){let e,n,$,s,a,r,o,c,l;return{c(){e=g("strong"),n=g("code"),$=d("$button-radius"),s=u(),a=g("small"),r=d("From "),o=g("a"),c=g("code"),l=d("Button"),this.h()},l(t){e=x(t,"STRONG",{});var p=w(e);n=x(p,"CODE",{});var f=w(n);$=y(f,"$button-radius"),f.forEach(k),p.forEach(k),s=h(t),a=x(t,"SMALL",{});var m=w(a);r=y(m,"From "),o=x(m,"A",{href:!0});var i=w(o);c=x(i,"CODE",{});var u=w(c);l=y(u,"Button"),u.forEach(k),i.forEach(k),m.forEach(k),this.h()},h(){v(o,"href","./docs/components/button")},m(t,p){E(t,e,p),D(e,n),D(n,$),E(t,s,p),E(t,a,p),D(a,r),D(a,o),D(o,c),D(c,l)},d(t){t&&k(e),t&&k(s),t&&k(a)}}}function Ht(t){let e;return{c(){e=d('The curvature radius of the "delete" button.')},l(t){e=y(t,'The curvature radius of the "delete" button.')},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function It(t){let e,n;return{c(){e=g("code"),n=d("1.5625em")},l(t){e=x(t,"CODE",{});var $=w(e);n=y($,"1.5625em"),$.forEach(k)},m(t,$){E(t,e,$),D(e,n)},d(t){t&&k(e)}}}function Lt(t){let e,n,$,o,c,m;return e=new L({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),c=new L({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),m=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(o),f(c,t)}}}function Mt(t){let e,n,$,s,a,r,o,c,l;return{c(){e=g("strong"),n=g("code"),$=d("$danger"),s=u(),a=g("small"),r=d("From "),o=g("a"),c=g("code"),l=d("Button"),this.h()},l(t){e=x(t,"STRONG",{});var p=w(e);n=x(p,"CODE",{});var f=w(n);$=y(f,"$danger"),f.forEach(k),p.forEach(k),s=h(t),a=x(t,"SMALL",{});var m=w(a);r=y(m,"From "),o=x(m,"A",{href:!0});var i=w(o);c=x(i,"CODE",{});var u=w(c);l=y(u,"Button"),u.forEach(k),i.forEach(k),m.forEach(k),this.h()},h(){v(o,"href","./docs/components/button")},m(t,p){E(t,e,p),D(e,n),D(n,$),E(t,s,p),E(t,a,p),D(a,r),D(a,o),D(o,c),D(c,l)},d(t){t&&k(e),t&&k(s),t&&k(a)}}}function Vt(t){let e;return{c(){e=d('The color of the "delete" button.')},l(t){e=y(t,'The color of the "delete" button.')},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function qt(t){let e,n;return e=new N({props:{value:"#B80000"}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p:O,i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){f(e,t)}}}function Yt(t){let e,n,$,o,c,m;return e=new L({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),c=new L({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),m=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(o),f(c,t)}}}function Ut(t){let e,n,$,o,c,m,i,d,y,v,T,b,O,j,C,F;return n=new H({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),c=new H({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),i=new H({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),y=new H({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),T=new H({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),O=new H({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),C=new H({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),{c(){e=g("thead"),s(n.$$.fragment),$=u(),o=g("tbody"),s(c.$$.fragment),m=u(),s(i.$$.fragment),d=u(),s(y.$$.fragment),v=u(),s(T.$$.fragment),b=u(),s(O.$$.fragment),j=u(),s(C.$$.fragment)},l(t){e=x(t,"THEAD",{});var s=w(e);a(n.$$.fragment,s),s.forEach(k),$=h(t),o=x(t,"TBODY",{});var r=w(o);a(c.$$.fragment,r),m=h(r),a(i.$$.fragment,r),d=h(r),a(y.$$.fragment,r),v=h(r),a(T.$$.fragment,r),b=h(r),a(O.$$.fragment,r),j=h(r),a(C.$$.fragment,r),r.forEach(k)},m(t,s){E(t,e,s),r(n,e,null),E(t,$,s),E(t,o,s),r(c,o,null),D(o,m),r(i,o,null),D(o,d),r(y,o,null),D(o,v),r(T,o,null),D(o,b),r(O,o,null),D(o,j),r(C,o,null),F=!0},p(t,e){const $={};4&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s);const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),i.$set(a);const r={};4&e&&(r.$$scope={dirty:e,ctx:t}),y.$set(r);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),T.$set(o);const l={};4&e&&(l.$$scope={dirty:e,ctx:t}),O.$set(l);const p={};4&e&&(p.$$scope={dirty:e,ctx:t}),C.$set(p)},i(t){F||(l(n.$$.fragment,t),l(c.$$.fragment,t),l(i.$$.fragment,t),l(y.$$.fragment,t),l(T.$$.fragment,t),l(O.$$.fragment,t),l(C.$$.fragment,t),F=!0)},o(t){p(n.$$.fragment,t),p(c.$$.fragment,t),p(i.$$.fragment,t),p(y.$$.fragment,t),p(T.$$.fragment,t),p(O.$$.fragment,t),p(C.$$.fragment,t),F=!1},d(t){t&&k(e),f(n),t&&k($),t&&k(o),f(c),f(i),f(y),f(T),f(O),f(C)}}}function Kt(t){let e,n,$,o,c,m,i,T,b,O,j,S,N,R,H,I,L,q,J,Q,X,Z,_,tt,et,nt,$t,ct,lt;return e=new C({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[V]},$$scope:{ctx:t}}}),c=new B({props:{components:Xt}}),i=new A({props:{$$slots:{source:[U],showcase:[Y]},$$scope:{ctx:t}}}),b=new G({props:{id:"properties",$$slots:{default:[K]},$$scope:{ctx:t}}}),j=new P({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),N=new z({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),q=new P({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),Q=new F({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),Z=new G({props:{id:"events",$$slots:{default:[ot]},$$scope:{ctx:t}}}),tt=new z({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),nt=new G({props:{id:"scss-variables",$$slots:{default:[ht]},$$scope:{ctx:t}}}),ct=new z({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment),m=u(),s(i.$$.fragment),T=u(),s(b.$$.fragment),O=u(),s(j.$$.fragment),S=u(),s(N.$$.fragment),R=u(),H=g("div"),I=d("* Required"),L=u(),s(q.$$.fragment),J=u(),s(Q.$$.fragment),X=u(),s(Z.$$.fragment),_=u(),s(tt.$$.fragment),et=u(),s(nt.$$.fragment),$t=u(),s(ct.$$.fragment),this.h()},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t),m=h(t),a(i.$$.fragment,t),T=h(t),a(b.$$.fragment,t),O=h(t),a(j.$$.fragment,t),S=h(t),a(N.$$.fragment,t),R=h(t),H=x(t,"DIV",{class:!0});var s=w(H);I=y(s,"* Required"),s.forEach(k),L=h(t),a(q.$$.fragment,t),J=h(t),a(Q.$$.fragment,t),X=h(t),a(Z.$$.fragment,t),_=h(t),a(tt.$$.fragment,t),et=h(t),a(nt.$$.fragment,t),$t=h(t),a(ct.$$.fragment,t),this.h()},h(){v(H,"class","required")},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),E(t,m,s),r(i,t,s),E(t,T,s),r(b,t,s),E(t,O,s),r(j,t,s),E(t,S,s),r(N,t,s),E(t,R,s),E(t,H,s),D(H,I),E(t,L,s),r(q,t,s),E(t,J,s),r(Q,t,s),E(t,X,s),r(Z,t,s),E(t,_,s),r(tt,t,s),E(t,et,s),r(nt,t,s),E(t,$t,s),r(ct,t,s),lt=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};5&n&&(r.$$scope={dirty:n,ctx:t}),i.$set(r);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),b.$set(o);const c={};4&n&&(c.$$scope={dirty:n,ctx:t}),j.$set(c);const l={};4&n&&(l.$$scope={dirty:n,ctx:t}),N.$set(l);const p={};4&n&&(p.$$scope={dirty:n,ctx:t}),q.$set(p);const f={};4&n&&(f.$$scope={dirty:n,ctx:t}),Q.$set(f);const m={};4&n&&(m.$$scope={dirty:n,ctx:t}),Z.$set(m);const u={};4&n&&(u.$$scope={dirty:n,ctx:t}),tt.$set(u);const g={};4&n&&(g.$$scope={dirty:n,ctx:t}),nt.$set(g);const d={};4&n&&(d.$$scope={dirty:n,ctx:t}),ct.$set(d)},i(t){lt||(l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),l(i.$$.fragment,t),l(b.$$.fragment,t),l(j.$$.fragment,t),l(N.$$.fragment,t),l(q.$$.fragment,t),l(Q.$$.fragment,t),l(Z.$$.fragment,t),l(tt.$$.fragment,t),l(nt.$$.fragment,t),l(ct.$$.fragment,t),lt=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(i.$$.fragment,t),p(b.$$.fragment,t),p(j.$$.fragment,t),p(N.$$.fragment,t),p(q.$$.fragment,t),p(Q.$$.fragment,t),p(Z.$$.fragment,t),p(tt.$$.fragment,t),p(nt.$$.fragment,t),p(ct.$$.fragment,t),lt=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(o),f(c,t),t&&k(m),f(i,t),t&&k(T),f(b,t),t&&k(O),f(j,t),t&&k(S),f(N,t),t&&k(R),t&&k(H),t&&k(L),f(q,t),t&&k(J),f(Q,t),t&&k(X),f(Z,t),t&&k(_),f(tt,t),t&&k(et),f(nt,t),t&&k($t),f(ct,t)}}}function Wt(t){let e,n;const m=[t[1],Jt];let i={$$slots:{default:[Kt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)i=$(i,m[t]);return e=new j({props:i}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p(t,[n]){const $=2&n?o(m,[2&n&&c(t[1]),0&n&&c(Jt)]):{};5&n&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){f(e,t)}}}const Jt={name:"FileTile",relatedComponents:[{name:"FileInput",link:"./docs/components/file-input"},{name:"FileDropzone",link:"./docs/components/file-dropzone"}],shadow1:"0 2px 5px rgba(0, 0, 0, .14), 0 1px 5px rgba(0, 0, 0, .12);"},{name:Qt,relatedComponents:Xt,shadow1:Zt}=Jt;function _t(t,e,n){let s=null;return m((()=>{n(0,s=new File([""],"filename.txt"))})),t.$$set=t=>{n(1,e=$($({},e),i(t)))},e=i(e),[s,e]}class te extends t{constructor(t){super(),e(this,t,_t,Wt,n,{})}}export{te as default,Jt as metadata};
