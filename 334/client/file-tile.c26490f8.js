import{S as e,i as s,s as t,a,c as n,b as r,d as i,e as o,f as l,g as c,n as f,h,u as m,r as p,j as $,k as d,w as u,v as g,l as v,m as x,z as w,t as y,p as k,q as E,I as z}from"./client.9965e4e5.js";import{B as j}from"./button.33c28596.js";import{f as V}from"./format-file-size.22bb7c0a.js";function b(e){let s,t,h,m,p;return{c(){s=a("svg"),t=a("polyline"),h=a("path"),m=a("line"),p=a("line"),this.h()},l(e){s=n(e,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0});var a=r(s);t=n(a,"polyline",{points:!0}),r(t).forEach(i),h=n(a,"path",{d:!0}),r(h).forEach(i),m=n(a,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),r(m).forEach(i),p=n(a,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),r(p).forEach(i),a.forEach(i),this.h()},h(){o(t,"points","3 6 5 6 21 6"),o(h,"d","M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"),o(m,"x1","10"),o(m,"y1","11"),o(m,"x2","10"),o(m,"y2","17"),o(p,"x1","14"),o(p,"y1","11"),o(p,"x2","14"),o(p,"y2","17"),o(s,"xmlns","http://www.w3.org/2000/svg"),o(s,"width","24"),o(s,"height","24"),o(s,"viewBox","0 0 24 24"),o(s,"fill","none"),o(s,"stroke","currentColor"),o(s,"stroke-width","2"),o(s,"stroke-linecap","round"),o(s,"stroke-linejoin","round")},m(e,a){l(e,s,a),c(s,t),c(s,h),c(s,m),c(s,p)},p:f,i:f,o:f,d(e){e&&i(s)}}}var I=class extends e{constructor(e){super(),s(this,e,null,b,t,{})}};function B(e){const s=e.split(".");return s[s.length-1].toUpperCase()}function D(e){let s,t;return s=new I({}),{c(){$(s.$$.fragment)},l(e){v(s.$$.fragment,e)},m(e,a){x(s,e,a),t=!0},i(e){t||(y(s.$$.fragment,e),t=!0)},o(e){k(s.$$.fragment,e),t=!1},d(e){E(s,e)}}}function C(e){let s,t,a,n,f,z,b,I,C,q,F,H,M=e[0].name+"",S=V(e[0].size)+"",U=B(e[0].name)+"";return F=new j({props:{danger:!0,round:!0,$$slots:{default:[D]},$$scope:{ctx:e}}}),F.$on("click",e[2]),{c(){s=h("div"),t=h("div"),a=m(M),f=p(),z=h("div"),b=m(S),I=m("\n    •\n    "),C=m(U),q=p(),$(F.$$.fragment),this.h()},l(e){s=d(e,"DIV",{class:!0});var n=r(s);t=d(n,"DIV",{class:!0,title:!0});var o=r(t);a=u(o,M),o.forEach(i),f=g(n),z=d(n,"DIV",{class:!0});var l=r(z);b=u(l,S),I=u(l,"\n    •\n    "),C=u(l,U),l.forEach(i),q=g(n),v(F.$$.fragment,n),n.forEach(i),this.h()},h(){o(t,"class","filename svelte-1mngzcd"),o(t,"title",n=e[0].name),o(z,"class","properties svelte-1mngzcd"),o(s,"class","file-tile svelte-1mngzcd")},m(e,n){l(e,s,n),c(s,t),c(t,a),c(s,f),c(s,z),c(z,b),c(z,I),c(z,C),c(s,q),x(F,s,null),H=!0},p(e,[s]){(!H||1&s)&&M!==(M=e[0].name+"")&&w(a,M),(!H||1&s&&n!==(n=e[0].name))&&o(t,"title",n),(!H||1&s)&&S!==(S=V(e[0].size)+"")&&w(b,S),(!H||1&s)&&U!==(U=B(e[0].name)+"")&&w(C,U);const r={};8&s&&(r.$$scope={dirty:s,ctx:e}),F.$set(r)},i(e){H||(y(F.$$.fragment,e),H=!0)},o(e){k(F.$$.fragment,e),H=!1},d(e){e&&i(s),E(F)}}}function q(e,s,t){let{file:a}=s;const n=z();return e.$$set=e=>{"file"in e&&t(0,a=e.file)},[a,n,()=>n("delete",a)]}var F=class extends e{constructor(e){super(),s(this,e,q,C,t,{file:0})}};export{F,B as f};
