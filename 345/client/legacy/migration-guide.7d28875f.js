import{S as s,i as n,s as t,U as a,u as e,w as o,x as r,a2 as c,a9 as p,A as i,B as l,C as u,V as $,D as m,t as f,F as d,v as g,g as k,h,j as y,k as v,E as x,G as w,l as S}from"./client.7f1a0dd8.js";import{H as E,P as b,L as A}from"./layout.5974e338.js";import{L as O}from"./layout-no-head.90d687a0.js";import{H as j}from"./h2.63101e7f.js";function P(s){let n;return{c(){n=x("Migration Guide")},l(s){n=w(s,"Migration Guide")},m(s,t){v(s,n,t)},d(s){s&&h(n)}}}function D(s){let n;return{c(){n=x("Here you may find guidance on upgrading Attractions from one major version to another.")},l(s){n=w(s,"Here you may find guidance on upgrading Attractions from one major version to another.")},m(s,t){v(s,n,t)},d(s){s&&h(n)}}}function H(s){let n;return{c(){n=x("From v2.x to v3.x")},l(s){n=w(s,"From v2.x to v3.x")},m(s,t){v(s,n,t)},d(s){s&&h(n)}}}function C(s){let n;return{c(){n=x("The main change in version 3 is the migration to Sass modules.")},l(s){n=w(s,"The main change in version 3 is the migration to Sass modules.")},m(s,t){v(s,n,t)},d(s){s&&h(n)}}}function M(s){let n,t,a,e,o,r,c;return{c(){n=x("If you have existing code that used Sass for styling and was using the old "),t=f("code"),a=x("@import"),e=x(" statements, consider using the automatic "),o=f("a"),r=x("Sass Migrator"),c=x(" tool first."),this.h()},l(s){n=w(s,"If you have existing code that used Sass for styling and was using the old "),t=g(s,"CODE",{});var p=k(t);a=w(p,"@import"),p.forEach(h),e=w(s," statements, consider using the automatic "),o=g(s,"A",{href:!0,rel:!0});var i=k(o);r=w(i,"Sass Migrator"),i.forEach(h),c=w(s," tool first."),this.h()},h(){y(o,"href","https://sass-lang.com/documentation/cli/migrator"),y(o,"rel","nofollow")},m(s,p){v(s,n,p),v(s,t,p),S(t,a),v(s,e,p),v(s,o,p),S(o,r),v(s,c,p)},d(s){s&&h(n),s&&h(t),s&&h(e),s&&h(o),s&&h(c)}}}function T(s){let n,t,a,e,o,r,c,p,i,l,u,$;return{c(){n=f("strong"),t=x("Heads up"),a=x(": if your styles used imports that relied on "),e=f("code"),o=x("includePaths"),r=x(", you can still make Sass Migrator understand them by setting the "),c=f("code"),p=x("SASS_PATH"),i=x(" environment variable to the path that you previously had in your "),l=f("code"),u=x("includePaths"),$=x(" Sass compiler option.")},l(s){n=g(s,"STRONG",{});var m=k(n);t=w(m,"Heads up"),m.forEach(h),a=w(s,": if your styles used imports that relied on "),e=g(s,"CODE",{});var f=k(e);o=w(f,"includePaths"),f.forEach(h),r=w(s,", you can still make Sass Migrator understand them by setting the "),c=g(s,"CODE",{});var d=k(c);p=w(d,"SASS_PATH"),d.forEach(h),i=w(s," environment variable to the path that you previously had in your "),l=g(s,"CODE",{});var y=k(l);u=w(y,"includePaths"),y.forEach(h),$=w(s," Sass compiler option.")},m(s,m){v(s,n,m),S(n,t),v(s,a,m),v(s,e,m),S(e,o),v(s,r,m),v(s,c,m),S(c,p),v(s,i,m),v(s,l,m),S(l,u),v(s,$,m)},d(s){s&&h(n),s&&h(a),s&&h(e),s&&h(r),s&&h(c),s&&h(i),s&&h(l),s&&h($)}}}function L(s){let n,t,a,e,o,r,c;return{c(){n=x("Once your code is ready for Sass modules, replace Node Sass ("),t=f("code"),a=x("node-sass"),e=x(") with Dart Sass ("),o=f("code"),r=x("sass"),c=x(").")},l(s){n=w(s,"Once your code is ready for Sass modules, replace Node Sass ("),t=g(s,"CODE",{});var p=k(t);a=w(p,"node-sass"),p.forEach(h),e=w(s,") with Dart Sass ("),o=g(s,"CODE",{});var i=k(o);r=w(i,"sass"),i.forEach(h),c=w(s,").")},m(s,p){v(s,n,p),v(s,t,p),S(t,a),v(s,e,p),v(s,o,p),S(o,r),v(s,c,p)},d(s){s&&h(n),s&&h(t),s&&h(e),s&&h(o),s&&h(c)}}}function _(s){let n,t,a,e;return{c(){n=x("Update your "),t=f("code"),a=x("rollup.config.js"),e=x(" to use the new Attractions importers:")},l(s){n=w(s,"Update your "),t=g(s,"CODE",{});var o=k(t);a=w(o,"rollup.config.js"),o.forEach(h),e=w(s," to use the new Attractions importers:")},m(s,o){v(s,n,o),v(s,t,o),S(t,a),v(s,e,o)},d(s){s&&h(n),s&&h(t),s&&h(e)}}}function I(s){let n,t,a,e;return{c(){n=x("Lastly, if your "),t=f("code"),a=x("_attractions-theme.scss"),e=x(" had any variable overrides, move them to the module configuration.")},l(s){n=w(s,"Lastly, if your "),t=g(s,"CODE",{});var o=k(t);a=w(o,"_attractions-theme.scss"),o.forEach(h),e=w(s," had any variable overrides, move them to the module configuration.")},m(s,o){v(s,n,o),v(s,t,o),S(t,a),v(s,e,o)},d(s){s&&h(n),s&&h(t),s&&h(e)}}}function G(s){let n;return{c(){n=x("Before:")},l(s){n=w(s,"Before:")},m(s,t){v(s,n,t)},d(s){s&&h(n)}}}function F(s){let n;return{c(){n=x("After:")},l(s){n=w(s,"After:")},m(s,t){v(s,n,t)},d(s){s&&h(n)}}}function R(s){let n,t,a,c,p,$,x,w,S,A,O,R,B,N,U,V,q,z,J,K,Q,W,X,Y,Z,ss,ns,ts;return n=new E({props:{$$slots:{default:[P]},$$scope:{ctx:s}}}),a=new b({props:{$$slots:{default:[D]},$$scope:{ctx:s}}}),p=new j({props:{$$slots:{default:[H]},$$scope:{ctx:s}}}),x=new b({props:{$$slots:{default:[C]},$$scope:{ctx:s}}}),S=new b({props:{$$slots:{default:[M]},$$scope:{ctx:s}}}),O=new b({props:{$$slots:{default:[T]},$$scope:{ctx:s}}}),B=new b({props:{$$slots:{default:[L]},$$scope:{ctx:s}}}),U=new b({props:{$$slots:{default:[_]},$$scope:{ctx:s}}}),J=new b({props:{$$slots:{default:[I]},$$scope:{ctx:s}}}),Q=new b({props:{$$slots:{default:[G]},$$scope:{ctx:s}}}),Z=new b({props:{$$slots:{default:[F]},$$scope:{ctx:s}}}),{c(){e(n.$$.fragment),t=m(),e(a.$$.fragment),c=m(),e(p.$$.fragment),$=m(),e(x.$$.fragment),w=m(),e(S.$$.fragment),A=m(),e(O.$$.fragment),R=m(),e(B.$$.fragment),N=m(),e(U.$$.fragment),V=m(),q=f("pre"),z=m(),e(J.$$.fragment),K=m(),e(Q.$$.fragment),W=m(),X=f("pre"),Y=m(),e(Z.$$.fragment),ss=m(),ns=f("pre"),this.h()},l(s){o(n.$$.fragment,s),t=d(s),o(a.$$.fragment,s),c=d(s),o(p.$$.fragment,s),$=d(s),o(x.$$.fragment,s),w=d(s),o(S.$$.fragment,s),A=d(s),o(O.$$.fragment,s),R=d(s),o(B.$$.fragment,s),N=d(s),o(U.$$.fragment,s),V=d(s),q=g(s,"PRE",{class:!0}),k(q).forEach(h),z=d(s),o(J.$$.fragment,s),K=d(s),o(Q.$$.fragment,s),W=d(s),X=g(s,"PRE",{class:!0}),k(X).forEach(h),Y=d(s),o(Z.$$.fragment,s),ss=d(s),ns=g(s,"PRE",{class:!0}),k(ns).forEach(h),this.h()},h(){y(q,"class","language-js"),y(X,"class","language-scss"),y(ns,"class","language-scss")},m(s,e){r(n,s,e),v(s,t,e),r(a,s,e),v(s,c,e),r(p,s,e),v(s,$,e),r(x,s,e),v(s,w,e),r(S,s,e),v(s,A,e),r(O,s,e),v(s,R,e),r(B,s,e),v(s,N,e),r(U,s,e),v(s,V,e),v(s,q,e),q.innerHTML='<code class="language-js"><span class="token keyword">import</span> autoPreprocess <span class="token keyword">from</span> <span class="token string">\'svelte-preprocess\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> makeAttractionsImporter <span class="token keyword">from</span> <span class="token string">\'attractions/importer.js\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> preprocessChain <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token function">autoPreprocess</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n    scss<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n      importer<span class="token operator">:</span> <span class="token function">makeAttractionsImporter</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n        <span class="token comment">// If you previously had a file that was overriding Attractions variables,</span>\n        <span class="token comment">//   provide the path to it here.</span>\n        <span class="token comment">// If it was empty, you may delete it, omit this parameter</span>\n        <span class="token comment">//   and call the function with no arguments.</span>\n        themeFile<span class="token operator">:</span> <span class="token string">\'./static/css/_attractions-theme.scss\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n      includePaths<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'./static/css\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span></code>',v(s,z,e),r(J,s,e),v(s,K,e),r(Q,s,e),v(s,W,e),v(s,X,e),X.innerHTML='<code class="language-scss"><span class="token keyword">@import</span> <span class="token string">\'_attractions-theme.scss\'</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$font</span></span><span class="token punctuation">:</span> <span class="token string">\'Open Sans\'</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$main</span></span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$my-custom-variable</span></span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span></code>',v(s,Y,e),r(Z,s,e),v(s,ss,e),v(s,ns,e),ns.innerHTML='<code class="language-scss"><span class="token keyword">@forward</span> <span class="token string">"~attractions/_variables"</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>\n  <span class="token property"><span class="token variable">$font</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">\'Open Sans\'</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token property"><span class="token variable">$main</span></span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$my-custom-variable</span></span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span></code>',ts=!0},p(s,t){const e={};2&t&&(e.$$scope={dirty:t,ctx:s}),n.$set(e);const o={};2&t&&(o.$$scope={dirty:t,ctx:s}),a.$set(o);const r={};2&t&&(r.$$scope={dirty:t,ctx:s}),p.$set(r);const c={};2&t&&(c.$$scope={dirty:t,ctx:s}),x.$set(c);const i={};2&t&&(i.$$scope={dirty:t,ctx:s}),S.$set(i);const l={};2&t&&(l.$$scope={dirty:t,ctx:s}),O.$set(l);const u={};2&t&&(u.$$scope={dirty:t,ctx:s}),B.$set(u);const $={};2&t&&($.$$scope={dirty:t,ctx:s}),U.$set($);const m={};2&t&&(m.$$scope={dirty:t,ctx:s}),J.$set(m);const f={};2&t&&(f.$$scope={dirty:t,ctx:s}),Q.$set(f);const d={};2&t&&(d.$$scope={dirty:t,ctx:s}),Z.$set(d)},i(s){ts||(i(n.$$.fragment,s),i(a.$$.fragment,s),i(p.$$.fragment,s),i(x.$$.fragment,s),i(S.$$.fragment,s),i(O.$$.fragment,s),i(B.$$.fragment,s),i(U.$$.fragment,s),i(J.$$.fragment,s),i(Q.$$.fragment,s),i(Z.$$.fragment,s),ts=!0)},o(s){l(n.$$.fragment,s),l(a.$$.fragment,s),l(p.$$.fragment,s),l(x.$$.fragment,s),l(S.$$.fragment,s),l(O.$$.fragment,s),l(B.$$.fragment,s),l(U.$$.fragment,s),l(J.$$.fragment,s),l(Q.$$.fragment,s),l(Z.$$.fragment,s),ts=!1},d(s){u(n,s),s&&h(t),u(a,s),s&&h(c),u(p,s),s&&h($),u(x,s),s&&h(w),u(S,s),s&&h(A),u(O,s),s&&h(R),u(B,s),s&&h(N),u(U,s),s&&h(V),s&&h(q),s&&h(z),u(J,s),s&&h(K),u(Q,s),s&&h(W),s&&h(X),s&&h(Y),u(Z,s),s&&h(ss),s&&h(ns)}}}function B(s){let n,t;const $=[s[0]];let m={$$slots:{default:[R]},$$scope:{ctx:s}};for(let s=0;s<$.length;s+=1)m=a(m,$[s]);return n=new O({props:m}),{c(){e(n.$$.fragment)},l(s){o(n.$$.fragment,s)},m(s,a){r(n,s,a),t=!0},p(s,[t]){const a=1&t?c($,[p(s[0])]):{};2&t&&(a.$$scope={dirty:t,ctx:s}),n.$set(a)},i(s){t||(i(n.$$.fragment,s),t=!0)},o(s){l(n.$$.fragment,s),t=!1},d(s){u(n,s)}}}function N(s,n,t){return s.$$set=s=>{t(0,n=a(a({},n),$(s)))},[n=$(n)]}class U extends s{constructor(s){super(),n(this,s,N,B,t,{})}}function V(s){let n,t;return n=new U({}),{c(){e(n.$$.fragment)},l(s){o(n.$$.fragment,s)},m(s,a){r(n,s,a),t=!0},i(s){t||(i(n.$$.fragment,s),t=!0)},o(s){l(n.$$.fragment,s),t=!1},d(s){u(n,s)}}}function q(s){let n,t;const $=[s[0],z];let m={$$slots:{default:[V]},$$scope:{ctx:s}};for(let s=0;s<$.length;s+=1)m=a(m,$[s]);return n=new A({props:m}),{c(){e(n.$$.fragment)},l(s){o(n.$$.fragment,s)},m(s,a){r(n,s,a),t=!0},p(s,[t]){const a=1&t?c($,[1&t&&p(s[0]),0&t&&p(z)]):{};2&t&&(a.$$scope={dirty:t,ctx:s}),n.$set(a)},i(s){t||(i(n.$$.fragment,s),t=!0)},o(s){l(n.$$.fragment,s),t=!1},d(s){u(n,s)}}}const z={name:"Migration Guide"};function J(s,n,t){return s.$$set=s=>{t(0,n=a(a({},n),$(s)))},[n=$(n)]}class K extends s{constructor(s){super(),n(this,s,J,q,t,{})}}export{K as default,z as metadata};
