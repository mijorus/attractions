import{S as s,i as a,s as n,J as t,h as e,k as c,b as o,d as l,M as i,N as r,f as d,T as f,n as u,H as m,K as h}from"./client.9a6ca202.js";import{c as g}from"./classes.2453fa25.js";function p(s){let a,n,m=[{class:n=g("dot",s[0])},s[6]],h={};for(let s=0;s<m.length;s+=1)h=t(h,m[s]);return{c(){a=e("div"),this.h()},l(s){a=c(s,"DIV",{class:!0}),o(a).forEach(l),this.h()},h(){i(a,h),r(a,"info",s[1]),r(a,"attention",s[2]),r(a,"success",s[4]),r(a,"danger",s[3]),r(a,"small",s[5]),r(a,"svelte-1rux4jd",!0)},m(s,n){d(s,a,n)},p(s,[t]){i(a,h=f(m,[1&t&&n!==(n=g("dot",s[0]))&&{class:n},64&t&&s[6]])),r(a,"info",s[1]),r(a,"attention",s[2]),r(a,"success",s[4]),r(a,"danger",s[3]),r(a,"small",s[5]),r(a,"svelte-1rux4jd",!0)},i:u,o:u,d(s){s&&l(a)}}}function v(s,a,n){const e=["class","info","attention","danger","success","small"];let c=m(a,e),{class:o=null}=a,{info:l=!1}=a,{attention:i=!1}=a,{danger:r=!1}=a,{success:d=!1}=a,{small:f=!1}=a;return+l+ +i+ +r+ +d>1&&console.warn("A dot can either be info, attention, danger or success, not several of them"),s.$$set=s=>{a=t(t({},a),h(s)),n(6,c=m(a,e)),"class"in s&&n(0,o=s.class),"info"in s&&n(1,l=s.info),"attention"in s&&n(2,i=s.attention),"danger"in s&&n(3,r=s.danger),"success"in s&&n(4,d=s.success),"small"in s&&n(5,f=s.small)},[o,l,i,r,d,f,c]}var j=class extends s{constructor(s){super(),a(this,s,v,p,n,{class:0,info:1,attention:2,danger:3,success:4,small:5})}};export{j as D};
