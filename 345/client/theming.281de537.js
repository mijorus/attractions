import{S as n,i as s,s as a,J as t,j as e,l as o,m as p,T as c,Z as r,t as l,p as u,q as i,K as $,r as f,v as m,f as k,d as h,u as d,w as g,h as y,k as v,b as w,g as x,e as b,n as E}from"./client.c733438f.js";import{L as S,H as j,P as _}from"./layout.d64cd868.js";import{C}from"./copyable-code.c0cd59d2.js";import{H as T}from"./h2.eaf4280f.js";import"./button.397073ff.js";import"./classes.2453fa25.js";function I(n){let s;return{c(){s=d("Theming with Sass")},l(n){s=g(n,"Theming with Sass")},m(n,a){k(n,s,a)},d(n){n&&h(s)}}}function P(n){let s,a,t,e;return{c(){s=d("If you'd like to access/customize the Sass variables of the library or your "),a=y("code"),t=d("node_modules"),e=d(" folder is not in the root of your project, then you'll need a Sass importer. No stress though! We already built one for you.")},l(n){s=g(n,"If you'd like to access/customize the Sass variables of the library or your "),a=v(n,"CODE",{});var o=w(a);t=g(o,"node_modules"),o.forEach(h),e=g(n," folder is not in the root of your project, then you'll need a Sass importer. No stress though! We already built one for you.")},m(n,o){k(n,s,o),k(n,a,o),x(a,t),k(n,e,o)},d(n){n&&h(s),n&&h(a),n&&h(e)}}}function O(n){let s,a,t,e,o,p,c,r,l,u;return{c(){s=d("In your "),a=y("code"),t=d("svelte.config.js"),e=d(" (or wherever you configured "),o=y("code"),p=d("svelte-preprocess"),c=d("), import the "),r=y("code"),l=d("makeAttractionsImporter"),u=d(" function:")},l(n){s=g(n,"In your "),a=v(n,"CODE",{});var i=w(a);t=g(i,"svelte.config.js"),i.forEach(h),e=g(n," (or wherever you configured "),o=v(n,"CODE",{});var $=w(o);p=g($,"svelte-preprocess"),$.forEach(h),c=g(n,"), import the "),r=v(n,"CODE",{});var f=w(r);l=g(f,"makeAttractionsImporter"),f.forEach(h),u=g(n," function:")},m(n,i){k(n,s,i),k(n,a,i),x(a,t),k(n,e,i),k(n,o,i),x(o,p),k(n,c,i),k(n,r,i),x(r,l),k(n,u,i)},d(n){n&&h(s),n&&h(a),n&&h(e),n&&h(o),n&&h(c),n&&h(r),n&&h(u)}}}function A(n){let s;return{c(){s=y("pre"),this.h()},l(n){s=v(n,"PRE",{class:!0}),w(s).forEach(h),this.h()},h(){b(s,"class","language-js")},m(n,a){k(n,s,a),s.innerHTML='<code class="language-js"><span class="token keyword">const</span> sveltePreprocess <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'svelte-preprocess\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> makeAttractionsImporter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'attractions/importer.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>'},p:E,d(n){n&&h(s)}}}function D(n){let s,a,t,e;return{c(){s=d("This function can be called with no arguments to create an importer that allows importing Sass stuff from Attractions or with an option object to override the default theme and/or the "),a=y("code"),t=d("node_modules"),e=d(" path.")},l(n){s=g(n,"This function can be called with no arguments to create an importer that allows importing Sass stuff from Attractions or with an option object to override the default theme and/or the "),a=v(n,"CODE",{});var o=w(a);t=g(o,"node_modules"),o.forEach(h),e=g(n," path.")},m(n,o){k(n,s,o),k(n,a,o),x(a,t),k(n,e,o)},d(n){n&&h(s),n&&h(a),n&&h(e)}}}function M(n){let s;return{c(){s=d("Importing Sass stuff")},l(n){s=g(n,"Importing Sass stuff")},m(n,a){k(n,s,a)},d(n){n&&h(s)}}}function H(n){let s;return{c(){s=d("What is there to import in Sass? Variables, mostly, however, if you ever have a need to mimic some component from Attractions with different functionality, you also have access to the mixins that are used internally. Feel free to explore the source code for more information.")},l(n){s=g(n,"What is there to import in Sass? Variables, mostly, however, if you ever have a need to mimic some component from Attractions with different functionality, you also have access to the mixins that are used internally. Feel free to explore the source code for more information.")},m(n,a){k(n,s,a)},d(n){n&&h(s)}}}function L(n){let s,a,t,e;return{c(){s=d("Create a default importer in your "),a=y("code"),t=d("svelte.config.js"),e=d(":")},l(n){s=g(n,"Create a default importer in your "),a=v(n,"CODE",{});var o=w(a);t=g(o,"svelte.config.js"),o.forEach(h),e=g(n,":")},m(n,o){k(n,s,o),k(n,a,o),x(a,t),k(n,e,o)},d(n){n&&h(s),n&&h(a),n&&h(e)}}}function R(n){let s;return{c(){s=y("pre"),this.h()},l(n){s=v(n,"PRE",{class:!0}),w(s).forEach(h),this.h()},h(){b(s,"class","language-js")},m(n,a){k(n,s,a),s.innerHTML='<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>\n  preprocess<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">sveltePreprocess</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n      scss<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n        importer<span class="token operator">:</span> <span class="token function">makeAttractionsImporter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>'},p:E,d(n){n&&h(s)}}}function F(n){let s,a,t,e;return{c(){s=d("Then in SCSS files you'll have "),a=y("code"),t=d("~attractions/*"),e=d(" imports:")},l(n){s=g(n,"Then in SCSS files you'll have "),a=v(n,"CODE",{});var o=w(a);t=g(o,"~attractions/*"),o.forEach(h),e=g(n," imports:")},m(n,o){k(n,s,o),k(n,a,o),x(a,t),k(n,e,o)},d(n){n&&h(s),n&&h(a),n&&h(e)}}}function W(n){let s;return{c(){s=y("pre"),this.h()},l(n){s=v(n,"PRE",{class:!0}),w(s).forEach(h),this.h()},h(){b(s,"class","language-scss")},m(n,a){k(n,s,a),s.innerHTML='<code class="language-scss"><span class="token keyword">@use</span> <span class="token string">\'~attractions/_variables\'</span><span class="token punctuation">;</span>\n<span class="token keyword">@use</span> <span class="token string">\'~attractions/_mixins\'</span><span class="token punctuation">;</span>\n<span class="token keyword">@use</span> <span class="token string">\'~attractions/_appearances\'</span><span class="token punctuation">;</span>\n\n<span class="token selector">.something </span><span class="token punctuation">&#123;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> variables.<span class="token variable">$main</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// See the source code to discover these internal mixins:</span>\n  <span class="token keyword">@include</span> appearances.button<span class="token punctuation">;</span>\n  <span class="token keyword">@include</span> mixins.<span class="token module-modifier keyword">show</span>-on-focus<span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></code>'},p:E,d(n){n&&h(s)}}}function q(n){let s;return{c(){s=d("For a list of variables to customize, refer to the documentation of each component, there's a table with all the variables that this component uses.")},l(n){s=g(n,"For a list of variables to customize, refer to the documentation of each component, there's a table with all the variables that this component uses.")},m(n,a){k(n,s,a)},d(n){n&&h(s)}}}function z(n){let s;return{c(){s=d("Overriding Sass variables")},l(n){s=g(n,"Overriding Sass variables")},m(n,a){k(n,s,a)},d(n){n&&h(s)}}}function N(n){let s,a,t,e;return{c(){s=d("If you want to tweak the appearance of components to your liking, you can override any SCSS variable in Attractions by configuring the "),a=y("code"),t=d("_variables"),e=d(" module. We suggest you create a separate SCSS file for that.")},l(n){s=g(n,"If you want to tweak the appearance of components to your liking, you can override any SCSS variable in Attractions by configuring the "),a=v(n,"CODE",{});var o=w(a);t=g(o,"_variables"),o.forEach(h),e=g(n," module. We suggest you create a separate SCSS file for that.")},m(n,o){k(n,s,o),k(n,a,o),x(a,t),k(n,e,o)},d(n){n&&h(s),n&&h(a),n&&h(e)}}}function V(n){let s;return{c(){s=y("pre"),this.h()},l(n){s=v(n,"PRE",{class:!0}),w(s).forEach(h),this.h()},h(){b(s,"class","language-scss")},m(n,a){k(n,s,a),s.innerHTML='<code class="language-scss"><span class="token keyword">@forward</span> <span class="token string">\'~attractions/_variables\'</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>\n  <span class="token property"><span class="token variable">$main</span></span><span class="token punctuation">:</span> green<span class="token punctuation">,</span>\n  <span class="token property"><span class="token variable">$font</span></span><span class="token punctuation">:</span> <span class="token string">"\'Open Sans\', sans-serif"</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$something-else</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></code>'},p:E,d(n){n&&h(s)}}}function J(n){let s;return{c(){s=y("pre"),this.h()},l(n){s=v(n,"PRE",{class:!0}),w(s).forEach(h),this.h()},h(){b(s,"class","language-js")},m(n,a){k(n,s,a),s.innerHTML='<code class="language-js"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>\n  preprocess<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">sveltePreprocess</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n      scss<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n        importer<span class="token operator">:</span> <span class="token function">makeAttractionsImporter</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n          <span class="token comment">// specify the path to your theme file, relative to this file</span>\n          themeFile<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'static/css/theme.scss\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token comment">// not mandatory but nice to have for concise imports</span>\n        includePaths<span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'./static/css\'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>'},p:E,d(n){n&&h(s)}}}function K(n){let s;return{c(){s=y("pre"),this.h()},l(n){s=v(n,"PRE",{class:!0}),w(s).forEach(h),this.h()},h(){b(s,"class","language-svelte")},m(n,a){k(n,s,a),s.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n  <span class="token comment">/* because the directory of &#96;theme.scss&#96; is in &#96;includePaths&#96; */</span>\n  <span class="token atrule"><span class="token rule">@use</span> <span class="token string">\'theme.scss\'</span><span class="token punctuation">;</span></span>\n\n  <span class="token selector">div</span> <span class="token punctuation">&#123;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> theme.$main<span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>'},p:E,d(n){n&&h(s)}}}function Z(n){let s,a,t,e;return{c(){s=d("Changing the "),a=y("code"),t=d("node_modules"),e=d(" location")},l(n){s=g(n,"Changing the "),a=v(n,"CODE",{});var o=w(a);t=g(o,"node_modules"),o.forEach(h),e=g(n," location")},m(n,o){k(n,s,o),k(n,a,o),x(a,t),k(n,e,o)},d(n){n&&h(s),n&&h(a),n&&h(e)}}}function B(n){let s,a,t,e;return{c(){s=d("There might be cases where you would have your "),a=y("code"),t=d("node_modules"),e=d(" be in some other place than the project root (such as when you're using workspaces).")},l(n){s=g(n,"There might be cases where you would have your "),a=v(n,"CODE",{});var o=w(a);t=g(o,"node_modules"),o.forEach(h),e=g(n," be in some other place than the project root (such as when you're using workspaces).")},m(n,o){k(n,s,o),k(n,a,o),x(a,t),k(n,e,o)},d(n){n&&h(s),n&&h(a),n&&h(e)}}}function G(n){let s,a,t,e;return{c(){s=d("In that case, you should inform the importer of the correct location with the "),a=y("code"),t=d("nodeModulesPath"),e=d(" option:")},l(n){s=g(n,"In that case, you should inform the importer of the correct location with the "),a=v(n,"CODE",{});var o=w(a);t=g(o,"nodeModulesPath"),o.forEach(h),e=g(n," option:")},m(n,o){k(n,s,o),k(n,a,o),x(a,t),k(n,e,o)},d(n){n&&h(s),n&&h(a),n&&h(e)}}}function Q(n){let s;return{c(){s=y("pre"),this.h()},l(n){s=v(n,"PRE",{class:!0}),w(s).forEach(h),this.h()},h(){b(s,"class","language-js")},m(n,a){k(n,s,a),s.innerHTML='<code class="language-js"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>\n  preprocess<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">sveltePreprocess</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n      scss<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n        importer<span class="token operator">:</span> <span class="token function">makeAttractionsImporter</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n          themeFile<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'static/css/theme.scss\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          nodeModulesPath<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'../node_modules\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>'},p:E,d(n){n&&h(s)}}}function U(n){let s,a,t,c,r,$,d,g,y,v,w,x,b,E,S,U,X,Y,nn,sn,an,tn,en,on,pn,cn,rn,ln,un,$n,fn,mn,kn,hn,dn,gn,yn,vn,wn,xn,bn,En;return s=new j({props:{$$slots:{default:[I]},$$scope:{ctx:n}}}),t=new _({props:{$$slots:{default:[P]},$$scope:{ctx:n}}}),r=new _({props:{$$slots:{default:[O]},$$scope:{ctx:n}}}),d=new C({props:{filename:"svelte.config.js",$$slots:{default:[A]},$$scope:{ctx:n}}}),y=new _({props:{$$slots:{default:[D]},$$scope:{ctx:n}}}),w=new T({props:{$$slots:{default:[M]},$$scope:{ctx:n}}}),b=new _({props:{$$slots:{default:[H]},$$scope:{ctx:n}}}),S=new _({props:{$$slots:{default:[L]},$$scope:{ctx:n}}}),X=new C({props:{filename:"svelte.config.js",$$slots:{default:[R]},$$scope:{ctx:n}}}),nn=new _({props:{$$slots:{default:[F]},$$scope:{ctx:n}}}),an=new C({props:{$$slots:{default:[W]},$$scope:{ctx:n}}}),en=new _({props:{$$slots:{default:[q]},$$scope:{ctx:n}}}),pn=new T({props:{$$slots:{default:[z]},$$scope:{ctx:n}}}),rn=new _({props:{$$slots:{default:[N]},$$scope:{ctx:n}}}),un=new C({props:{filename:"static/css/theme.scss",$$slots:{default:[V]},$$scope:{ctx:n}}}),fn=new C({props:{filename:"svelte.config.js",$$slots:{default:[J]},$$scope:{ctx:n}}}),kn=new C({props:{filename:"some-component.svelte",$$slots:{default:[K]},$$scope:{ctx:n}}}),dn=new T({props:{$$slots:{default:[Z]},$$scope:{ctx:n}}}),yn=new _({props:{$$slots:{default:[B]},$$scope:{ctx:n}}}),wn=new _({props:{$$slots:{default:[G]},$$scope:{ctx:n}}}),bn=new C({props:{filename:"svelte.config.js",$$slots:{default:[Q]},$$scope:{ctx:n}}}),{c(){e(s.$$.fragment),a=f(),e(t.$$.fragment),c=f(),e(r.$$.fragment),$=f(),e(d.$$.fragment),g=f(),e(y.$$.fragment),v=f(),e(w.$$.fragment),x=f(),e(b.$$.fragment),E=f(),e(S.$$.fragment),U=f(),e(X.$$.fragment),Y=f(),e(nn.$$.fragment),sn=f(),e(an.$$.fragment),tn=f(),e(en.$$.fragment),on=f(),e(pn.$$.fragment),cn=f(),e(rn.$$.fragment),ln=f(),e(un.$$.fragment),$n=f(),e(fn.$$.fragment),mn=f(),e(kn.$$.fragment),hn=f(),e(dn.$$.fragment),gn=f(),e(yn.$$.fragment),vn=f(),e(wn.$$.fragment),xn=f(),e(bn.$$.fragment)},l(n){o(s.$$.fragment,n),a=m(n),o(t.$$.fragment,n),c=m(n),o(r.$$.fragment,n),$=m(n),o(d.$$.fragment,n),g=m(n),o(y.$$.fragment,n),v=m(n),o(w.$$.fragment,n),x=m(n),o(b.$$.fragment,n),E=m(n),o(S.$$.fragment,n),U=m(n),o(X.$$.fragment,n),Y=m(n),o(nn.$$.fragment,n),sn=m(n),o(an.$$.fragment,n),tn=m(n),o(en.$$.fragment,n),on=m(n),o(pn.$$.fragment,n),cn=m(n),o(rn.$$.fragment,n),ln=m(n),o(un.$$.fragment,n),$n=m(n),o(fn.$$.fragment,n),mn=m(n),o(kn.$$.fragment,n),hn=m(n),o(dn.$$.fragment,n),gn=m(n),o(yn.$$.fragment,n),vn=m(n),o(wn.$$.fragment,n),xn=m(n),o(bn.$$.fragment,n)},m(n,e){p(s,n,e),k(n,a,e),p(t,n,e),k(n,c,e),p(r,n,e),k(n,$,e),p(d,n,e),k(n,g,e),p(y,n,e),k(n,v,e),p(w,n,e),k(n,x,e),p(b,n,e),k(n,E,e),p(S,n,e),k(n,U,e),p(X,n,e),k(n,Y,e),p(nn,n,e),k(n,sn,e),p(an,n,e),k(n,tn,e),p(en,n,e),k(n,on,e),p(pn,n,e),k(n,cn,e),p(rn,n,e),k(n,ln,e),p(un,n,e),k(n,$n,e),p(fn,n,e),k(n,mn,e),p(kn,n,e),k(n,hn,e),p(dn,n,e),k(n,gn,e),p(yn,n,e),k(n,vn,e),p(wn,n,e),k(n,xn,e),p(bn,n,e),En=!0},p(n,a){const e={};2&a&&(e.$$scope={dirty:a,ctx:n}),s.$set(e);const o={};2&a&&(o.$$scope={dirty:a,ctx:n}),t.$set(o);const p={};2&a&&(p.$$scope={dirty:a,ctx:n}),r.$set(p);const c={};2&a&&(c.$$scope={dirty:a,ctx:n}),d.$set(c);const l={};2&a&&(l.$$scope={dirty:a,ctx:n}),y.$set(l);const u={};2&a&&(u.$$scope={dirty:a,ctx:n}),w.$set(u);const i={};2&a&&(i.$$scope={dirty:a,ctx:n}),b.$set(i);const $={};2&a&&($.$$scope={dirty:a,ctx:n}),S.$set($);const f={};2&a&&(f.$$scope={dirty:a,ctx:n}),X.$set(f);const m={};2&a&&(m.$$scope={dirty:a,ctx:n}),nn.$set(m);const k={};2&a&&(k.$$scope={dirty:a,ctx:n}),an.$set(k);const h={};2&a&&(h.$$scope={dirty:a,ctx:n}),en.$set(h);const g={};2&a&&(g.$$scope={dirty:a,ctx:n}),pn.$set(g);const v={};2&a&&(v.$$scope={dirty:a,ctx:n}),rn.$set(v);const x={};2&a&&(x.$$scope={dirty:a,ctx:n}),un.$set(x);const E={};2&a&&(E.$$scope={dirty:a,ctx:n}),fn.$set(E);const j={};2&a&&(j.$$scope={dirty:a,ctx:n}),kn.$set(j);const _={};2&a&&(_.$$scope={dirty:a,ctx:n}),dn.$set(_);const C={};2&a&&(C.$$scope={dirty:a,ctx:n}),yn.$set(C);const T={};2&a&&(T.$$scope={dirty:a,ctx:n}),wn.$set(T);const I={};2&a&&(I.$$scope={dirty:a,ctx:n}),bn.$set(I)},i(n){En||(l(s.$$.fragment,n),l(t.$$.fragment,n),l(r.$$.fragment,n),l(d.$$.fragment,n),l(y.$$.fragment,n),l(w.$$.fragment,n),l(b.$$.fragment,n),l(S.$$.fragment,n),l(X.$$.fragment,n),l(nn.$$.fragment,n),l(an.$$.fragment,n),l(en.$$.fragment,n),l(pn.$$.fragment,n),l(rn.$$.fragment,n),l(un.$$.fragment,n),l(fn.$$.fragment,n),l(kn.$$.fragment,n),l(dn.$$.fragment,n),l(yn.$$.fragment,n),l(wn.$$.fragment,n),l(bn.$$.fragment,n),En=!0)},o(n){u(s.$$.fragment,n),u(t.$$.fragment,n),u(r.$$.fragment,n),u(d.$$.fragment,n),u(y.$$.fragment,n),u(w.$$.fragment,n),u(b.$$.fragment,n),u(S.$$.fragment,n),u(X.$$.fragment,n),u(nn.$$.fragment,n),u(an.$$.fragment,n),u(en.$$.fragment,n),u(pn.$$.fragment,n),u(rn.$$.fragment,n),u(un.$$.fragment,n),u(fn.$$.fragment,n),u(kn.$$.fragment,n),u(dn.$$.fragment,n),u(yn.$$.fragment,n),u(wn.$$.fragment,n),u(bn.$$.fragment,n),En=!1},d(n){i(s,n),n&&h(a),i(t,n),n&&h(c),i(r,n),n&&h($),i(d,n),n&&h(g),i(y,n),n&&h(v),i(w,n),n&&h(x),i(b,n),n&&h(E),i(S,n),n&&h(U),i(X,n),n&&h(Y),i(nn,n),n&&h(sn),i(an,n),n&&h(tn),i(en,n),n&&h(on),i(pn,n),n&&h(cn),i(rn,n),n&&h(ln),i(un,n),n&&h($n),i(fn,n),n&&h(mn),i(kn,n),n&&h(hn),i(dn,n),n&&h(gn),i(yn,n),n&&h(vn),i(wn,n),n&&h(xn),i(bn,n)}}}function X(n){let s,a;const $=[n[0],Y];let f={$$slots:{default:[U]},$$scope:{ctx:n}};for(let n=0;n<$.length;n+=1)f=t(f,$[n]);return s=new S({props:f}),{c(){e(s.$$.fragment)},l(n){o(s.$$.fragment,n)},m(n,t){p(s,n,t),a=!0},p(n,[a]){const t=1&a?c($,[1&a&&r(n[0]),0&a&&r(Y)]):{};2&a&&(t.$$scope={dirty:a,ctx:n}),s.$set(t)},i(n){a||(l(s.$$.fragment,n),a=!0)},o(n){u(s.$$.fragment,n),a=!1},d(n){i(s,n)}}}const Y={name:"Theming with Sass"};function nn(n,s,a){return n.$$set=n=>{a(0,s=t(t({},s),$(n)))},[s=$(s)]}class sn extends n{constructor(n){super(),s(this,n,nn,X,a,{})}}export{sn as default,Y as metadata};
