import{r as se,u as oe,v as D1,w as ie,x as ue,s as $1,a as L,f as m,c as B,g as p,h as k,y as o1,d as f,j as s,i as q,z as h,A as J,B as he,C as O1,e as R1,p as S1,l as ee,m as te,D as y1,H as de,E as fe,F as N1,G as ve,I as le,J as V1,K as x1,L as me,M as pe,N as _e,O as ge,P as be}from"../chunks/scheduler.fcf20df4.js";import{g as E1,t as j,c as C1,a as A,S as L1,i as B1,b as l1,d as a1,m as n1,e as r1,f as ae,h as ne,j as re}from"../chunks/index.224ddcec.js";import{e as k1}from"../chunks/each.e59479a4.js";import{I as v1}from"../chunks/Icon.ee1947e1.js";import{g as ke}from"../chunks/globals.7f7f1b26.js";import{p as xe}from"../chunks/stores.88c71063.js";function $e(t,e){const l=e.token={};function a(n,r,i,o){if(e.token!==l)return;e.resolved=o;let c=e.ctx;i!==void 0&&(c=c.slice(),c[i]=o);const d=n&&(e.current=n)(c);let _=!1;e.block&&(e.blocks?e.blocks.forEach((g,C)=>{C!==r&&g&&(E1(),j(g,1,1,()=>{e.blocks[C]===g&&(e.blocks[C]=null)}),C1())}):e.block.d(1),d.c(),A(d,1),d.m(e.mount(),e.anchor),_=!0),e.block=d,e.blocks&&(e.blocks[r]=d),_&&ie()}if(se(t)){const n=oe();if(t.then(r=>{D1(n),a(e.then,1,e.value,r),D1(null)},r=>{if(D1(n),a(e.catch,2,e.error,r),D1(null),!e.hasCatch)throw r}),e.current!==e.pending)return a(e.pending,0),!0}else{if(e.current!==e.then)return a(e.then,1,e.value,t),!0;e.resolved=t}}function we(t,e,l){const a=e.slice(),{resolved:n}=t;t.current===t.then&&(a[t.value]=n),t.current===t.catch&&(a[t.error]=n),t.block.p(a,l)}const ye=!0;function Ee({url:t}){return{url:t.pathname}}const Ge=Object.freeze(Object.defineProperty({__proto__:null,load:Ee,prerender:ye},Symbol.toStringTag,{value:"Module"}));function I1(t,{delay:e=0,duration:l=400,easing:a=ue}={}){const n=+getComputedStyle(t).opacity;return{delay:e,duration:l,easing:a,css:r=>`opacity: ${r*n}`}}const{document:Ce}=ke;function q1(t){let e,l={ctx:t,current:null,token:null,hasCatch:!0,pending:De,then:Me,catch:Te,value:13,error:14};return $e(t[4](),l),{c(){e=R1(),l.block.c()},l(a){e=R1(),l.block.l(a)},m(a,n){q(a,e,n),l.block.m(a,l.anchor=n),l.mount=()=>e.parentNode,l.anchor=e},p(a,n){t=a,we(l,t,n)},d(a){a&&f(e),l.block.d(a),l.token=null,l=null}}}function Te(t){let e=t[14]+"",l;return{c(){l=ee(e)},l(a){l=te(a,e)},m(a,n){q(a,l,n)},p:y1,d(a){a&&f(l)}}}function Me(t){let e,l=t[3],a,n,r=G1(t);return{c(){e=m("div"),r.c(),this.h()},l(i){e=p(i,"DIV",{class:!0,role:!0,"aria-roledescription":!0});var o=k(e);r.l(o),o.forEach(f),this.h()},h(){s(e,"class","w-full"),s(e,"role","list"),s(e,"aria-roledescription","Список донатеров")},m(i,o){q(i,e,o),r.m(e,null),a||(n=[J(e,"mouseover",t[8]),J(e,"focus",t[9]),J(e,"mouseout",t[5]),J(e,"blur",t[5])],a=!0)},p(i,o){o&8&&$1(l,l=i[3])?(E1(),j(r,1,1,y1),C1(),r=G1(i),r.c(),A(r,1),r.m(e,null)):r.p(i,o)},d(i){i&&f(e),r.d(i),a=!1,O1(n)}}}function G1(t){let e,l,a=t[13][t[3]].replace("❤️","")+"",n,r,i;return{c(){e=m("p"),l=new de(!1),this.h()},l(o){e=p(o,"P",{class:!0});var c=k(e);l=fe(c,!1),c.forEach(f),this.h()},h(){l.a=null,s(e,"class","text-base")},m(o,c){q(o,e,c),l.m(a,e),i=!0},p(o,c){(!i||c&8)&&a!==(a=o[13][o[3]].replace("❤️","")+"")&&l.p(a)},i(o){i||(o&&N1(()=>{i&&(r&&r.end(1),n=ae(e,I1,{duration:200,delay:250}),n.start())}),i=!0)},o(o){n&&n.invalidate(),o&&(r=ne(e,I1,{duration:200})),i=!1},d(o){o&&f(e),o&&r&&r.end()}}}function De(t){let e,l='<span class="loading loading-spinner loading-md"></span>';return{c(){e=m("div"),e.innerHTML=l,this.h()},l(a){e=p(a,"DIV",{class:!0,"data-svelte-h":!0}),o1(e)!=="svelte-1orxz7f"&&(e.innerHTML=l),this.h()},h(){s(e,"class","flex flex-1 items-center justify-center")},m(a,n){q(a,e,n)},p:y1,d(a){a&&f(e)}}}function Ie(t){let e,l,a,n,r="Реквизиты",i,o,c,d='<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="1em" height="1em" viewBox="0 0 2729 3283" class="iconify"><path d="m2 2560 1-199c5-1 5-5 5-8v-35c6-8 3-17 4-25v-9c6-7 3-15 4-22 0-3-1-7 1-9 4-4 3-8 3-13 0-4-1-9 1-11 4-5 3-10 3-14 1-4-1-9 1-11 4-5 3-9 3-14l1-7c5-4 3-10 4-15v-6c4-3 2-9 4-13 3-7 4-15 4-23l1-2c4-3 3-7 3-11l1-6c4-3 3-6 3-10l1-6c4-3 3-8 4-13l1-4c3-3 2-7 3-10v-6c7-11 7-24 12-36l5-21c2-10 8-18 8-29l1-3 7-19 3-12c3-7 4-14 5-22l2-6c3-6 6-12 6-18 0-8 6-14 5-22 5-3 3-7 4-11l4-13c1-4 4-7 4-11 0-10 4-18 8-26l5-17c1-7 2-15 5-21l3-12 4-13c2-4 5-8 4-12-1-8 6-14 5-22 7-6 1-16 8-22 3-3 4-9 4-14-1-8 3-14 5-21 2-9 8-18 8-28v-3c4-8 8-16 8-25v-3c8-11 7-24 12-36 2-6 7-13 5-21l1-3c2-6 6-12 7-18l5-21c1-10 8-18 8-29l1-3 7-19 3-12c3-7 3-15 5-22l2-6c2-6 6-12 6-18 1-9 5-17 8-25l5-17c1-4 0-8 3-12 3-5 4-11 5-17 2-7 2-15 5-21 5-8 2-17 8-24 2-3 3-8 4-13 0-5 0-9 3-14 3-4 5-10 5-15-1-8 4-14 6-22 1-8 7-17 7-26v-3c5-9 8-17 8-27l1-3c4-8 7-16 7-25l1-3c4-9 8-18 8-28v-1c3-6 7-11 7-17 1-6 5-11 5-16-1-8 6-14 5-21 6-7 4-16 7-24 3-6 5-14 6-21 1-10 8-19 7-29l2-3 7-19c2-8 2-15 5-22 3-8 7-16 7-26l1-2c4-9 8-17 8-27v-3c7-11 7-24 11-35 3-7 7-14 5-22l2-2c2-6 6-12 6-17 0-13 9-23 9-36 7-6 4-16 8-24l5-21c2-10 8-19 8-29l2-4 6-18 3-12 5-15 4-15c2-12 10-23 9-35l2-4 6-19 3-12c3-5 4-12 5-18 1-4 1-7 3-10 3-5 5-12 6-18 0-9 4-16 7-24l5-18 3-12c3-6 4-14 6-21l2-7c2-6 6-12 6-18-1-8 3-15 5-21 4-8 2-17 7-24 3-3 5-8 4-12-1-9 6-14 5-22 8-11 7-24 12-36 2-6 7-13 5-21-1-1 1-2 1-4l7-19 3-12c3-6 3-14 5-21l2-6 6-18c2-8 2-16 6-22 6-11 6-24 11-35l5-22c2-9 8-18 8-28l1-4 7-19 5-21c4-9 7-18 8-27l873 1c2 3 2 6 1 9l-3 4-1 7c-5 8-7 16-9 24l-2 10v1c-1 8-8 16-6 25l-1 1c-5 9-8 19-8 30h-1l-3 12v1c-2 1-4 3-3 5 0 9-5 17-8 27l-2 13-2 5-1 7-3 5-1 11-2 3-1 1-3 12h-1l-2 8c-4 4-4 9-4 15v2c-4 9-8 17-8 27l-1 3c-4 8-8 17-8 26v3c-5 4-3 9-4 14h-1c-5 5-2 11-3 16v1l-3 4-1 7-3 4-1 11-3 5-1 7c-3 4-5 8-5 12l-2 9-6 18c-2 7-2 15-5 21-4 10-8 20-8 31h-1l-3 12v1c-2 1-4 3-3 5 0 9-5 17-8 27v10l-4 8-1 7-3 5-1 11-3 3v1l-3 12h-1l-2 13c-6 10-8 20-9 31h-1l-3 8v1l-4 10c-4 8-8 17-8 26v3c-5 4-4 9-4 14h-1l-2 5-1 12-3 4-1 7-3 4-1 11-2 5h-1l-2 8c-5 10-8 21-9 32h-1c-1 8-7 15-6 24l-1 3c-5 10-8 20-8 31h-1c-4 4-2 8-3 12v1l-4 8-3 11v7l-4 5-1 13-3 6-2 7c-4 2-3 6-4 9l-2 10v1l-3 12h-1l-2 13c-5 10-9 20-9 31h-1l-3 12v1a28 28 0 0 0-3 8l-1 6c-5 10-7 21-11 32l-1 11-3 5-1 7-3 4-1 11-2 5h-1l-2 8c-4 4-4 9-4 15v2c-5 8-8 18-8 28l-1 2c-4 8-7 16-7 25l-1 4c-5 4-3 9-4 14h-1c-5 5-2 11-3 16v1l-4 5-3 10v11l-4 5-1 7-3 8-1 10-4 8-3 8-1 1-1 8c-4 4-4 8-4 13v4c-6 9-8 20-9 31h-1l-3 12-1 1c-5 4-2 10-2 15l-1 1-3 2-8 32-2 7-2 5-1 12-3 4-1 7-2 4h-1l-2 13c-4 8-8 16-8 25v3c-4 9-8 18-8 28l-1 3c-5 9-8 19-8 30h-1l-3 12h-1c-5 4-2 8-3 12v1l-3 4-1 11-3 4-1 7-3 5-1 13-3 3-6 21v5c-4 9-8 17-8 27l-1 3c-5 9-8 19-8 30h-1l-3 12v1c-2 1-4 3-3 5 0 9-5 17-8 27l-2 13-2 5-1 7-3 5-1 11-2 3-1 1-3 12h-1c0 9-4 17-7 25-2 9-7 17-7 27l-1 3c-4 8-8 17-8 26v3c-5 4-3 9-4 14h-1c-5 5-2 11-3 16v1l-3 4-1 7-3 4-1 11-3 5-1 7c-3 4-5 8-5 12v6c-4 9-8 17-8 27l-1 3c-4 8-7 16-7 25l-1 4c-5 4-3 9-4 14h-1c-5 5-2 11-3 16v1l-3 1c0 8-6 15-5 24l-3 6v7l-4 8-1 7-3 5-1 11-3 3v1l-3 12h-1l-3 14c-2 8-7 15-7 23v4c-8 11-7 24-12 36-4 9-5 19-8 31h429l-3 11c-3 7-7 13-7 21h-1l-3 8h-1l-3 12v1c-2 2-3 5-3 7l-1 1-3 3c-1 4-1 8-4 12v5h-1l-3 4-1 7-3 4-1 3-3 8-2 7-3 4-9 23-4 6c-2 13-9 24-13 36-1 4-4 7-4 11h-1c-5 4-2 8-3 12l-3 5-1 4-3 4-1 7-3 4-1 3-2 5h-1l-3 12h-1l-10 25c-3 5-4 10-5 15h-1l-3 8v1c-5 3-3 7-3 11l-1 1-3 3-8 20v3l-4 5-1 9-4 5-9 22c-1 3-3 5-3 8-2 11-9 20-12 30l-10 28h-1c-4 4-2 8-3 12l-3 5-1 4-3 4-1 7-3 4-1 3-2 5h-1l-3 12h-1l-10 24c-3 5-5 10-5 16h-1l-3 8v1c-2 3-3 7-3 11l-1 1-3 3-8 20v3l-4 5-1 9c-5 6-7 12-9 19-3 11-9 22-14 33l-2 4c-3 9-5 19-10 27l-3 14h-1l-3 8-3 5-1 8-3 4-1 3-3 4-1 7-2 5h-1l-3 8h-1l-5 14-10 26h-1l-3 12v1c-2 2-3 5-3 7l-1 1c-2 0-3 1-3 2 0 8-5 14-8 21v7l-4 5-1 3-3 8-1 6-4 5-7 19v1c-3 3-5 6-6 10-2 12-9 23-13 35-2 5-4 10-4 15h-1l-3 8-3 5-1 8-3 4-1 3-3 4-1 7-2 5h-1l-5 13c-4 8-6 16-9 25-6 6-6 7 0 11l5-11h1l2-3c1-6 5-8 8-12l3-9h1l13-18h1l7-12h1l4-4 1-3 2-5h1l3-4h1c4-10 14-16 19-26 2-3 4-6 4-10h1l3-4h1l3-8 4-4 3-5 1-3 4-4 4-4 6-10 5-5 1-1c1-2 2-5 4-6 4-4 5-9 7-14l3-3 3-3 1-1c3-3 5-7 6-11h1l4-4 1-3 2-5h1l4-4 1-3 2-5h1l3-4h1l5-8c6-7 12-14 16-21l8-12 1-6 2-1 3-4h1l3-4h1l7-12h1c5-2 3-7 5-10l4-4h1l3-8 4-4v-1l4-7v-1l4-3v-1l4-3v-1l7-10v-1l4-4 1-3 2-5h1c2-1 3-2 3-4h1c2-3 3-5 3-8h1l3-4h1c2-2 2-5 3-8h1c7-7 13-14 18-22 4-6 6-13 11-18 10-10 17-22 24-34h1l3-8 4-4h1l3-8v-1l4-3v-1l4-3v-1l3-4 1-3 7-8 1-3 3-4v-1l4-3v-1c2-2 3-5 3-8h1c2-1 3-2 3-4h1c7-8 13-16 17-26h1l7-12h1l4-4 1-3 2-5h1l3-4h1l5-5c4-8 9-15 14-21 3-4 4-7 4-10h1l3-4h1l3-4h1l3-8 4-4 3-5 1-3 4-4v-1l7-10 4-4v-1l4-7 4-4v-1c8-8 13-16 17-26h1l4-4 1-3 2-5h1l3-4h1l3-4h1l3-8h1l9-12 13-17 1-7h1l3-4h1l3-4h1l2-5 2-3 3-4h1l7-12h1c5-2 3-7 5-10l4-4h1l3-8v-1l4-3v-1l4-3v-1l4-7v-1l3-3 1-1 3-4 1-3 2-4h1l4-4 1-3 2-5h1c2-1 3-2 3-4h1c2-1 3-2 3-4h1c2-2 3-5 3-8h1l3-4h1l13-20 20-28 20-30 4-4h1l3-8 4-4v-1l4-7v-1l4-3v-1l3-4 1-3 3-3v-1l4-4 1-3a29 29 0 0 0 3-4v-1l4-3v-1l3-3 1-1c2-2 3-5 3-8h1c7-8 13-16 17-26h1l3-4h1l4-4v-3l3-5h1l4-4 1-3 26-37h1l3-8 4-4 3-5 1-3 4-4 3-5 1-4a64 64 0 0 0 7-7l4-7 4-4v-1c6-2 6-7 7-12h1c4-3 8-5 6-10l1-1 2-1 1-2 7-12h1l3-4h1l4-4 1-3 2-5h1l3-4h1l3-8h1l12-15c3-7 8-12 13-18 2-1 1-5 2-7h1l3-4h1l2-5 1-3 4-4h1l7-12 6-6h1l3-8 4-4v-1l4-7v-1l4-3v-1c2-2 3-5 3-7l1-1 2-1 1-2 7-12h1c2-1 3-2 3-4h1l4-5 1-3 2-4h1l3-4h1l3-8h1c2-1 5-3 5-5 4-10 13-15 17-24l13-18c5-9 10-18 17-25 4-3 4-6 5-10 0 0 0-1 0 0l4-4h1l7-14h-440l1-7 1-7 3-4 1-3 3-5 1-7 2-5h1l3-8h1l5-14 10-26h1l3-12v-1c2-2 3-5 3-7l1-1 3-2c0-8 5-14 8-21l1-7 7-16 1-6c2-2 4-3 4-5l7-19v-1l4-7v-1c2-3 1-6 3-8 6-9 7-20 12-29 3-5 4-10 4-15h1l3-8 3-5 1-7 3-5 1-3 3-4 1-7 2-5h1l3-8h1l5-14 10-26h1l3-12v-1c2-2 3-5 3-7l1-1 3-2c0-8 5-14 8-21v-7l4-5 1-3 3-8 1-6c2-2 4-3 4-5l7-19v-1c3-3 5-6 6-10 2-12 9-23 13-35 2-5 4-10 4-15l3-5 1-3 3-5 1-7 3-5 1-3 3-4 1-7 2-5h1l3-8h1l5-14 10-26h1l3-12v-1l4-7v-1l3-2c0-8 5-14 8-21l1-7 3-5 1-3 3-8 1-6c2-2 4-3 4-5l7-19v-1l4-7v-1c3-11 10-21 13-32 2-6 8-11 5-19l2-1 2-5 1-3 3-5 1-8 3-4 1-3 3-4 1-7 2-5h1l3-8h1l5-14 10-26h1l3-12v-1l4-7v-1c2 0 3-1 3-2 0-8 5-14 8-21l1-7 3-5 1-3 3-8 1-6c2-2 4-3 4-5l7-19 1-1 15-35c4 0 9-1 13 1 4 3 8 3 13 3 6 0 13-2 17 1 8 4 16 3 23 3l10 2 9 2 16 1h1l10 4 14 3h15l7 4 11 1 5 3 11 1 3 2 1 1h3l9 1 4 3 13 1c2 2 3 4 5 4l36 10v1c8 4 16 8 25 9 8 2 15 8 23 6l5 3 3 1 5 3 7 1 5 3 3 1 4 3 7 1 5 2v1l8 3v1l15 8c8 3 16 10 25 11v1l8 3 8 4h1l4 3 4 1 4 3 3 1 4 3 3 1 5 2v1c1 2 2 3 4 3v1l8 3v1l8 3v1l3 4c13 6 24 14 36 22h2c2 0 2 1 3 2l4 3 4 4v1l5 2 3 1 4 4 4 4v1c2 5 7 3 10 5l4 4 4 4 8 4h1l3 4h1l3 4h1l7 8h1l3 4h1l4 3 3 1 3 3h1l3 4 4 4 4 4 4 4h1l10 10 1 1 3 3 1 1 3 3 1 1a145 145 0 0 0 14 15h1l3 4h1l3 4 4 4 4 4v3l3 4h1l3 4h1l3 4h1l3 4h1l3 4h1c0 4-1 7 3 8h1l3 4h1l3 4 1 1c1 4 0 8 5 9l4 4 4 4 1 4 3 4 4 4 4 4 1 2c-1 4 0 6 3 6v1l3 4 15 27c1 2 4 3 6 4v1l4 7v1l2 4 1 3 4 6v3l4 5v3c4 4 8 7 8 13l3 2s1 0 0 0c1 4 0 7 4 8l1 1c1 4-3 9 3 11v1l5 12a861 861 0 0 0 11 23v1l4 7v1l2 4 1 7 3 5 1 3 4 5v7l3 4 1 8 3 4v1c-1 6 3 10 4 15 1 8 7 14 5 22 4 4 3 9 5 14l2 2 1 1c0 5-1 10 1 13 4 6 3 11 3 17l1 5c4 4 3 9 3 14l2 7 1 1 1 13c0 5 2 8 5 12l1 23 3 5 1 27 3 11c1 3 2 3 4 1l-1 16c-4 4-3 9-1 13l2-1-1 23 1 3-1 82-2 10v44l-1 8c-4 4-3 8-4 13v22c0 2 1 5-1 7-4 4-2 9-3 14 0 5 2 11-1 14-3 5-3 10-3 15v9c-5 6-4 12-4 18l-1 5c-4 3-3 8-3 12 0 3 1 6-1 8-4 5-3 10-3 16l-2 6-2 9c-1 3 0 6-2 7-3 4-2 8-3 12v8c-4 9-8 18-8 28l-1 2c-4 3-3 7-3 11v3l-7 17-6 18-4 21c-4 11-10 22-13 33-3 12-9 22-12 33l-12 27-7 18-14 29c-2 5-3 11-6 16-11 19-18 39-31 57-8 11-13 25-20 37l-21 37c-2 2-2 5-3 7l-18 25-9 16-14 20c-6 7-11 16-16 24l-12 16-20 25-1 1c-2 10-12 15-16 24-4 7-11 12-15 19-5 8-13 14-18 22-6 9-16 14-20 25-16 14-29 31-43 47l-38 38c-15 15-30 31-46 45-15 15-29 32-47 44-13 9-22 24-37 33-9 5-13 16-24 20-9 10-21 18-31 27l-24 19-1 1c-10 3-16 12-25 17s-16 13-24 20h-1c-14 5-23 18-36 24-6 4-11 10-17 13-6 2-10 6-15 10l-18 10c-6 4-11 10-18 14-11 7-23 12-33 20-8 6-18 10-26 15-3 1-7 2-10 5-10 11-25 14-37 23-16 11-36 17-53 29-13 9-29 14-44 21l-23 10c-18 7-35 19-54 25-10 3-19 8-29 12l-34 16-9 4c-9 1-18 5-26 8l-7 4c-9 2-18 5-26 9l-8 4c-10 3-21 5-31 9a99 99 0 0 1-12 4c-6 1-11 5-17 7l-16 5c-10 1-18 4-26 7-5 3-11 4-17 5-8 2-16 2-24 5-10 3-18 8-29 8l-2 1c-3 4-7 3-10 3l-6 1c-5 5-10 3-15 3l-6 1c-4 4-9 2-13 4-8 3-15 4-24 4l-1 1c-3 4-8 3-11 3h-8c-6 5-12 4-18 4l-5 1c-4 4-8 3-13 3-4 0-9-1-11 1-5 4-10 3-15 3l-10 1c-5 4-10 3-14 3-5 1-10-1-13 1-10 6-20 3-30 4-2 0-5-1-6 1-4 4-9 2-14 3-11 1-22-3-33 4h-45c-3 0-6 1-5 5l-149-1c-3-5-7-4-10-4h-53l-8-1c-4-3-7-3-11-3h-32c-10-7-20-3-30-4l-6-1c-4-5-9-3-14-4h-11c-5-5-10-3-16-4-3 0-7 1-9-1-4-3-8-3-12-3-3 0-7 1-8-1-5-4-11-3-16-3l-7-2-9-2-6-1c-4-4-8-3-12-3l-6-2-8-2-7-1c-9-4-17-8-27-8h-3l-30-12c-9-2-18-5-26-9l-8-4c-10 0-18-8-28-10-7-1-13-7-19-10-27-13-54-25-79-41l-8-5-18-12c-9-5-18-11-26-18l-3-3c-7-1-10-8-15-12l-16-11-11-11c-8-9-19-14-27-23l-30-34c-12-12-21-27-34-39l-2-3-14-20c-4-7-12-13-15-20-4-11-11-18-16-28-2-5-3-11-7-16-9-10-13-23-19-34l-9-21c-2-6-7-10-8-16-1-10-9-18-10-29-1-6-5-11-7-18-2-6-2-13-5-18-6-11-6-24-11-36-3-7-7-15-5-24 1-1 0-3-1-4l-3-9c0-2 1-5-1-6-4-4-3-9-3-14v-6c-6-6-4-13-4-19v-6c-6-7-4-15-4-22a83 83 0 0 0-2-10l-2-9v-27c0-4-2-6-6-6z" fill="currentColor"></path></svg>',_,g,C,V,w,T,M,D,I,N,K,Q;C=new v1({props:{icon:"simple-icons:paypal"}});let O=t[0]&&q1(t);return I=new v1({props:{class:"text-4xl ",icon:"mdi:close-box"}}),{c(){e=L(),l=m("dialog"),a=m("form"),n=m("h3"),n.textContent=r,i=L(),o=m("div"),c=m("a"),c.innerHTML=d,_=L(),g=m("a"),l1(C.$$.fragment),V=L(),w=m("div"),O&&O.c(),T=L(),M=m("div"),D=m("button"),l1(I.$$.fragment),this.h()},l(y){e=B(y),l=p(y,"DIALOG",{id:!0,class:!0});var S=k(l);a=p(S,"FORM",{method:!0,class:!0});var X=k(a);n=p(X,"H3",{class:!0,"data-svelte-h":!0}),o1(n)!=="svelte-pv8f31"&&(n.textContent=r),i=B(X),o=p(X,"DIV",{class:!0});var W=k(o);c=p(W,"A",{href:!0,target:!0,"aria-label":!0,class:!0,"data-svelte-h":!0}),o1(c)!=="svelte-192bqe0"&&(c.innerHTML=d),_=B(W),g=p(W,"A",{href:!0,target:!0,"aria-label":!0,class:!0});var z=k(g);a1(C.$$.fragment,z),z.forEach(f),W.forEach(f),V=B(X),w=p(X,"DIV",{class:!0});var t1=k(w);O&&O.l(t1),t1.forEach(f),T=B(X),M=p(X,"DIV",{class:!0});var i1=k(M);D=p(i1,"BUTTON",{"aria-label":!0,class:!0});var P=k(D);a1(I.$$.fragment,P),P.forEach(f),i1.forEach(f),X.forEach(f),S.forEach(f),this.h()},h(){s(n,"class","mb-4 text-xl uppercase lg:text-2xl"),s(c,"href","https://boosty.to/root_"),s(c,"target","_blank"),s(c,"aria-label","Boosty"),s(c,"class","rounded-md bg-neutral p-3 transition-colors hover:bg-accent"),s(g,"href","https://paypal.me/AlanBerezov?country.x=KZ&locale.x=en_US"),s(g,"target","_blank"),s(g,"aria-label","PayPal"),s(g,"class","rounded-md bg-neutral p-3 transition-colors hover:bg-accent"),s(o,"class","mb-4 flex items-center justify-center gap-4 text-xl lg:text-2xl"),s(w,"class","flex h-6 justify-center"),s(D,"aria-label","Закрыть всплывающее окно"),s(D,"class","text-secondary transition-colors hover:text-accent"),s(M,"class","modal-action absolute -top-3 right-3"),s(a,"method","dialog"),s(a,"class","modal-box relative flex max-w-xs flex-col pt-8 text-center sm:max-w-xs"),s(l,"id","donate_modal"),s(l,"class","modal")},m(y,S){q(y,e,S),q(y,l,S),h(l,a),h(a,n),h(a,i),h(a,o),h(o,c),h(o,_),h(o,g),n1(C,g,null),h(a,V),h(a,w),O&&O.m(w,null),h(a,T),h(a,M),h(M,D),n1(I,D,null),t[11](l),N=!0,K||(Q=[J(Ce,"visibilitychange",function(){he(document.visibilityState==="hidden"?t[6]:t[7])&&(document.visibilityState==="hidden"?t[6]:t[7]).apply(this,arguments)}),J(l,"close",t[10])],K=!0)},p(y,[S]){t=y,t[0]?O?O.p(t,S):(O=q1(t),O.c(),O.m(w,null)):O&&(O.d(1),O=null)},i(y){N||(A(C.$$.fragment,y),A(I.$$.fragment,y),N=!0)},o(y){j(C.$$.fragment,y),j(I.$$.fragment,y),N=!1},d(y){y&&(f(e),f(l)),r1(C),O&&O.d(),r1(I),t[11](null),K=!1,O1(Q)}}}function Oe(t,e,l){let a,n,{donateModalOpenState:r}=e,i,o=0;async function c(){return a=await(await fetch("https://api.allorigins.win/raw?url=https://pastebin.com/raw/eEQ4RB2s")).text(),a=a.split(`\r
`),a}function d(){clearInterval(i),l(2,i=setInterval(()=>{a&&o<a.length-1?l(3,o+=1):l(3,o=0)},1e3))}const _=()=>clearInterval(i),g=()=>d(),C=()=>clearInterval(i),V=()=>clearInterval(i),w=()=>l(0,r=!1);function T(M){S1[M?"unshift":"push"](()=>{n=M,l(1,n)})}return t.$$set=M=>{"donateModalOpenState"in M&&l(0,r=M.donateModalOpenState)},t.$$.update=()=>{t.$$.dirty&7&&(r?(n.showModal(),d()):(clearInterval(i),l(3,o=0)))},[r,n,i,o,c,d,_,g,C,V,w,T]}class ce extends L1{constructor(e){super(),B1(this,e,Oe,Ie,$1,{donateModalOpenState:0})}}function X1(t,e,l){const a=t.slice();return a[10]=e[l],a}function K1(t){let e,l,a,n;return l=new v1({props:{icon:t[10].icon}}),{c(){e=m("a"),l1(l.$$.fragment),a=L(),this.h()},l(r){e=p(r,"A",{class:!0,href:!0,target:!0,"aria-label":!0});var i=k(e);a1(l.$$.fragment,i),a=B(i),i.forEach(f),this.h()},h(){s(e,"class","transition-colors hover:text-accent"),s(e,"href",t[10].link),s(e,"target","_blank"),s(e,"aria-label",t[10].label)},m(r,i){q(r,e,i),n1(l,e,null),h(e,a),n=!0},p:y1,i(r){n||(A(l.$$.fragment,r),n=!0)},o(r){j(l.$$.fragment,r),n=!1},d(r){r&&f(e),r1(l)}}}function Se(t){let e,l,a,n,r="EXTENDED EDITION",i,o,c="Website & Design by Alan Berezov",d,_,g,C,V,w,T,M,D,I,N,K,Q="КОНТАКТЫ",O,y,S,X="Gmail в браузере",W,z,t1="Приложение почты",i1,P,c1,Y,m1,u1,h1="alan2008358@gmail.com",U,Z,x,d1,p1,s1,u,$,H,b;C=new v1({props:{icon:"ph:wallet-fill"}}),T=new v1({props:{icon:"mdi:gmail"}});let F=k1(t[2]),E=[];for(let v=0;v<F.length;v+=1)E[v]=K1(X1(t,F,v));const _1=v=>j(E[v],1,1,()=>{E[v]=null});Y=new v1({props:{class:"flex flex-shrink-0 text-xl",icon:"ic:outline-content-copy"}}),d1=new v1({props:{class:"text-4xl ",icon:"mdi:close-box"}});function T1(v){t[8](v)}let w1={};return t[1]!==void 0&&(w1.donateModalOpenState=t[1]),s1=new ce({props:w1}),S1.push(()=>re(s1,"donateModalOpenState",T1)),{c(){e=m("footer"),l=m("div"),a=m("div"),n=m("button"),n.textContent=r,i=L(),o=m("div"),o.textContent=c,d=L(),_=m("div"),g=m("button"),l1(C.$$.fragment),V=L(),w=m("button"),l1(T.$$.fragment),M=L();for(let v=0;v<E.length;v+=1)E[v].c();D=L(),I=m("dialog"),N=m("form"),K=m("h3"),K.textContent=Q,O=L(),y=m("div"),S=m("a"),S.textContent=X,W=L(),z=m("a"),z.textContent=t1,i1=L(),P=m("div"),c1=m("button"),l1(Y.$$.fragment),m1=L(),u1=m("p"),u1.textContent=h1,U=L(),Z=m("div"),x=m("button"),l1(d1.$$.fragment),p1=L(),l1(s1.$$.fragment),this.h()},l(v){e=p(v,"FOOTER",{class:!0});var R=k(e);l=p(R,"DIV",{class:!0});var e1=k(l);a=p(e1,"DIV",{class:!0});var G=k(a);n=p(G,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),o1(n)!=="svelte-1alwyc4"&&(n.textContent=r),G.forEach(f),i=B(e1),o=p(e1,"DIV",{class:!0,"data-svelte-h":!0}),o1(o)!=="svelte-1brbbww"&&(o.textContent=c),d=B(e1),_=p(e1,"DIV",{class:!0});var f1=k(_);g=p(f1,"BUTTON",{"aria-label":!0,class:!0});var j1=k(g);a1(C.$$.fragment,j1),j1.forEach(f),V=B(f1),w=p(f1,"BUTTON",{"aria-label":!0,class:!0});var P1=k(w);a1(T.$$.fragment,P1),P1.forEach(f),M=B(f1);for(let A1=0;A1<E.length;A1+=1)E[A1].l(f1);f1.forEach(f),e1.forEach(f),D=B(R),I=p(R,"DIALOG",{id:!0,class:!0});var U1=k(I);N=p(U1,"FORM",{method:!0,class:!0});var g1=k(N);K=p(g1,"H3",{class:!0,"data-svelte-h":!0}),o1(K)!=="svelte-t7yyuc"&&(K.textContent=Q),O=B(g1),y=p(g1,"DIV",{class:!0});var b1=k(y);S=p(b1,"A",{class:!0,href:!0,target:!0,"data-svelte-h":!0}),o1(S)!=="svelte-1i9qk2k"&&(S.textContent=X),W=B(b1),z=p(b1,"A",{class:!0,href:!0,"data-svelte-h":!0}),o1(z)!=="svelte-1iykpvt"&&(z.textContent=t1),i1=B(b1),P=p(b1,"DIV",{class:!0});var M1=k(P);c1=p(M1,"BUTTON",{"aria-label":!0,class:!0});var H1=k(c1);a1(Y.$$.fragment,H1),H1.forEach(f),m1=B(M1),u1=p(M1,"P",{class:!0,"data-svelte-h":!0}),o1(u1)!=="svelte-1wwbrx7"&&(u1.textContent=h1),M1.forEach(f),b1.forEach(f),U=B(g1),Z=p(g1,"DIV",{class:!0});var z1=k(Z);x=p(z1,"BUTTON",{"aria-label":!0,class:!0});var F1=k(x);a1(d1.$$.fragment,F1),F1.forEach(f),z1.forEach(f),g1.forEach(f),U1.forEach(f),R.forEach(f),p1=B(v),a1(s1.$$.fragment,v),this.h()},h(){s(n,"aria-label","Пролистать наверх"),s(n,"class","text-base font-bold transition-colors hover:text-accent sm:text-2xl"),s(a,"class","flex-1 basis-1/3"),s(o,"class","hidden flex-1 basis-1/3 text-center text-sm sm:block sm:text-base"),s(g,"aria-label","Реквизиты автора"),s(g,"class","transition-colors hover:text-accent"),s(w,"aria-label","Контакты автора"),s(w,"class","transition-colors hover:text-accent"),s(_,"class","flex flex-1 basis-1/3 justify-end gap-2 text-3xl sm:gap-4"),s(l,"class","container flex items-center"),s(K,"class","mb-4 text-xl uppercase lg:text-2xl"),s(S,"class","rounded-md bg-neutral p-3 text-base uppercase transition-colors hover:bg-accent lg:text-lg"),s(S,"href","https://mail.google.com/mail/?view=cm&fs=1&to=alan2008358@gmail.com&su=&cc=&bcc=&body="),s(S,"target","_blank"),s(z,"class","rounded-md bg-neutral p-3 text-base uppercase transition-colors hover:bg-accent lg:text-lg"),s(z,"href","mailto:alan2008358@gmail.com"),s(c1,"aria-label","Скопировать Email"),s(c1,"class","backface-hidden h-[52px] flex-shrink-0 items-center justify-center overflow-hidden rounded-l-md bg-secondary p-3 px-2 text-center text-primary transition-colors hover:bg-accent hover:text-secondary"),s(u1,"class","flex-1 p-3"),s(P,"class","flex items-center rounded-md bg-neutral text-center text-base uppercase lg:text-lg"),s(y,"class","flex flex-col gap-2"),s(x,"aria-label","Закрыть всплывающее окно"),s(x,"class","text-secondary transition-colors hover:text-accent"),s(Z,"class","modal-action absolute -top-3 right-3"),s(N,"method","dialog"),s(N,"class","modal-box relative max-w-sm pt-8 text-center"),s(I,"id","email_modal"),s(I,"class","modal"),s(e,"class","navbar px-0")},m(v,R){q(v,e,R),h(e,l),h(l,a),h(a,n),h(l,i),h(l,o),h(l,d),h(l,_),h(_,g),n1(C,g,null),h(_,V),h(_,w),n1(T,w,null),h(_,M);for(let e1=0;e1<E.length;e1+=1)E[e1]&&E[e1].m(_,null);h(e,D),h(e,I),h(I,N),h(N,K),h(N,O),h(N,y),h(y,S),h(y,W),h(y,z),h(y,i1),h(y,P),h(P,c1),n1(Y,c1,null),h(P,m1),h(P,u1),h(N,U),h(N,Z),h(Z,x),n1(d1,x,null),t[7](I),q(v,p1,R),n1(s1,v,R),$=!0,H||(b=[J(n,"click",t[4]),J(g,"click",t[5]),J(w,"click",t[6]),J(c1,"click",ve(t[3]))],H=!0)},p(v,[R]){if(R&4){F=k1(v[2]);let G;for(G=0;G<F.length;G+=1){const f1=X1(v,F,G);E[G]?(E[G].p(f1,R),A(E[G],1)):(E[G]=K1(f1),E[G].c(),A(E[G],1),E[G].m(_,null))}for(E1(),G=F.length;G<E.length;G+=1)_1(G);C1()}const e1={};!u&&R&2&&(u=!0,e1.donateModalOpenState=v[1],le(()=>u=!1)),s1.$set(e1)},i(v){if(!$){A(C.$$.fragment,v),A(T.$$.fragment,v);for(let R=0;R<F.length;R+=1)A(E[R]);A(Y.$$.fragment,v),A(d1.$$.fragment,v),A(s1.$$.fragment,v),$=!0}},o(v){j(C.$$.fragment,v),j(T.$$.fragment,v),E=E.filter(Boolean);for(let R=0;R<E.length;R+=1)j(E[R]);j(Y.$$.fragment,v),j(d1.$$.fragment,v),j(s1.$$.fragment,v),$=!1},d(v){v&&(f(e),f(p1)),r1(C),r1(T),V1(E,v),r1(Y),r1(d1),t[7](null),r1(s1,v),H=!1,O1(b)}}}function Le(t,e,l){let a,n,r;const i=[{link:"https://discord.com/invite/cRqSMb34eU",label:"Discord сервер сборки",icon:"mingcute:discord-fill"},{link:"https://steamcommunity.com/sharedfiles/filedetails/?id=2283791696",label:"Руководство сборки в Steam",icon:"mdi:steam"}];function o(V){const w=V.currentTarget;w.style.backgroundColor="green",w.classList.add("text-secondary"),clearTimeout(a),a=setTimeout(()=>{w.style.backgroundColor="",w.classList.remove("text-secondary")},500),navigator.clipboard.writeText("alan2008358@gmail.com")}const c=()=>window.scrollTo(0,0),d=()=>{l(1,r=!0)},_=()=>n.showModal();function g(V){S1[V?"unshift":"push"](()=>{n=V,l(0,n)})}function C(V){r=V,l(1,r)}return[n,r,i,o,c,d,_,g,C]}class Be extends L1{constructor(e){super(),B1(this,e,Le,Se,$1,{})}}function Y1(t,e,l){const a=t.slice();return a[14]=e[l],a}function J1(t,e,l){const a=t.slice();return a[14]=e[l],a}function Q1(t){let e,l=t[14].name+"",a;return{c(){e=m("a"),a=ee(l),this.h()},l(n){e=p(n,"A",{class:!0,href:!0});var r=k(e);a=te(r,l),r.forEach(f),this.h()},h(){s(e,"class","uppercase transition-colors hover:text-accent"),s(e,"href",t[14].href),x1(e,"text-accent",t[2].url.pathname===t[14].href)},m(n,r){q(n,e,r),h(e,a)},p(n,r){r&36&&x1(e,"text-accent",n[2].url.pathname===n[14].href)},d(n){n&&f(e)}}}function W1(t){let e,l,a,n;return a=new v1({props:{icon:t[14].icon}}),{c(){e=m("li"),l=m("a"),l1(a.$$.fragment),this.h()},l(r){e=p(r,"LI",{});var i=k(e);l=p(i,"A",{"aria-label":!0,class:!0,href:!0});var o=k(l);a1(a.$$.fragment,o),o.forEach(f),i.forEach(f),this.h()},h(){s(l,"aria-label",t[14].label),s(l,"class","p-0 uppercase transition-colors hover:text-accent"),s(l,"href",t[14].href),x1(l,"text-accent",t[2].url.pathname===t[14].href)},m(r,i){q(r,e,i),h(e,l),n1(a,l,null),n=!0},p(r,i){(!n||i&68)&&x1(l,"text-accent",r[2].url.pathname===r[14].href)},i(r){n||(A(a.$$.fragment,r),n=!0)},o(r){j(a.$$.fragment,r),n=!1},d(r){r&&f(e),r1(a)}}}function Ae(t){let e=!1,l=()=>{e=!1},a,n,r,i,o="EXTENDED EDITION",c,d,_,g,C="Донат",V,w,T,M,D,I,N='<label for="drawerMobile" class="btn btn-circle btn-ghost fixed right-2 top-2 h-10 min-h-0 w-10 opacity-75 transition-opacity"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>',K,Q,O,y,S,X,W,z,t1,i1,P,c1,Y,m1,u1;N1(t[8]);let h1=k1(t[5]),U=[];for(let u=0;u<h1.length;u+=1)U[u]=Q1(J1(t,h1,u));let Z=k1(t[6]),x=[];for(let u=0;u<Z.length;u+=1)x[u]=W1(Y1(t,Z,u));const d1=u=>j(x[u],1,1,()=>{x[u]=null});t1=new v1({props:{icon:"ph:wallet-fill"}});function p1(u){t[12](u)}let s1={};return t[4]!==void 0&&(s1.donateModalOpenState=t[4]),P=new ce({props:s1}),S1.push(()=>re(P,"donateModalOpenState",p1)),{c(){n=m("nav"),r=m("div"),i=m("a"),i.textContent=o,c=L(),d=m("div");for(let u=0;u<U.length;u+=1)U[u].c();_=L(),g=m("button"),g.textContent=C,w=L(),T=m("div"),M=m("input"),D=L(),I=m("div"),I.innerHTML=N,K=L(),Q=m("div"),O=m("label"),y=L(),S=m("ul");for(let u=0;u<x.length;u+=1)x[u].c();X=L(),W=m("li"),z=m("button"),l1(t1.$$.fragment),i1=L(),l1(P.$$.fragment),this.h()},l(u){n=p(u,"NAV",{style:!0,class:!0});var $=k(n);r=p($,"DIV",{class:!0});var H=k(r);i=p(H,"A",{class:!0,href:!0,"data-svelte-h":!0}),o1(i)!=="svelte-1d6krel"&&(i.textContent=o),c=B(H),d=p(H,"DIV",{class:!0});var b=k(d);for(let v=0;v<U.length;v+=1)U[v].l(b);_=B(b),g=p(b,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),o1(g)!=="svelte-fpdeo0"&&(g.textContent=C),b.forEach(f),H.forEach(f),$.forEach(f),w=B(u),T=p(u,"DIV",{class:!0});var F=k(T);M=p(F,"INPUT",{id:!0,type:!0,class:!0}),D=B(F),I=p(F,"DIV",{class:!0,"data-svelte-h":!0}),o1(I)!=="svelte-nppk6z"&&(I.innerHTML=N),K=B(F),Q=p(F,"DIV",{class:!0});var E=k(Q);O=p(E,"LABEL",{for:!0,class:!0}),k(O).forEach(f),y=B(E),S=p(E,"UL",{class:!0});var _1=k(S);for(let v=0;v<x.length;v+=1)x[v].l(_1);X=B(_1),W=p(_1,"LI",{});var T1=k(W);z=p(T1,"BUTTON",{"aria-label":!0,class:!0});var w1=k(z);a1(t1.$$.fragment,w1),w1.forEach(f),T1.forEach(f),_1.forEach(f),E.forEach(f),F.forEach(f),i1=B(u),a1(P.$$.fragment,u),this.h()},h(){s(i,"class","navbar-start w-fit text-2xl font-bold transition-all hover:text-accent hover:opacity-90"),s(i,"href","/"),x1(i,"text-accent",t[2].url.pathname==="/"),s(g,"class","font-bold uppercase transition-colors hover:text-accent"),s(g,"aria-label","Реквизиты автора"),s(d,"class","navbar-end flex gap-5 font-bold"),s(r,"class","container flex justify-between"),s(n,"style",t[3]),s(n,"class",V="hidden lg:navbar "+(t[2].url.pathname==="/"?"":"bg-neutral")+" "+t[0]+" left-0 top-0 z-10 flex justify-center px-0"),s(M,"id","drawerMobile"),s(M,"type","checkbox"),s(M,"class","drawer-toggle"),s(I,"class","drawer-content"),s(O,"for","drawerMobile"),s(O,"class","drawer-overlay"),s(z,"aria-label","Реквизиты автора"),s(z,"class","transition-colors hover:text-accent"),s(S,"class","flex min-h-full w-fit list-none items-center justify-center gap-8 bg-primary bg-opacity-80 p-4 text-5xl text-base-content backdrop-blur-sm"),s(Q,"class","drawer-side"),s(T,"class","drawer drawer-end z-10 lg:hidden")},m(u,$){q(u,n,$),h(n,r),h(r,i),h(r,c),h(r,d);for(let H=0;H<U.length;H+=1)U[H]&&U[H].m(d,null);h(d,_),h(d,g),q(u,w,$),q(u,T,$),h(T,M),h(T,D),h(T,I),h(T,K),h(T,Q),h(Q,O),h(Q,y),h(Q,S);for(let H=0;H<x.length;H+=1)x[H]&&x[H].m(S,null);h(S,X),h(S,W),h(W,z),n1(t1,z,null),q(u,i1,$),n1(P,u,$),Y=!0,m1||(u1=[J(window,"scroll",()=>{e=!0,clearTimeout(a),a=setTimeout(l,100),t[8]()}),J(g,"click",t[9]),J(M,"change",t[10]),J(z,"click",t[11])],m1=!0)},p(u,[$]){if($&2&&!e&&(e=!0,clearTimeout(a),scrollTo(window.pageXOffset,u[1]),a=setTimeout(l,100)),(!Y||$&4)&&x1(i,"text-accent",u[2].url.pathname==="/"),$&36){h1=k1(u[5]);let b;for(b=0;b<h1.length;b+=1){const F=J1(u,h1,b);U[b]?U[b].p(F,$):(U[b]=Q1(F),U[b].c(),U[b].m(d,_))}for(;b<U.length;b+=1)U[b].d(1);U.length=h1.length}if((!Y||$&8)&&s(n,"style",u[3]),(!Y||$&5&&V!==(V="hidden lg:navbar "+(u[2].url.pathname==="/"?"":"bg-neutral")+" "+u[0]+" left-0 top-0 z-10 flex justify-center px-0"))&&s(n,"class",V),$&68){Z=k1(u[6]);let b;for(b=0;b<Z.length;b+=1){const F=Y1(u,Z,b);x[b]?(x[b].p(F,$),A(x[b],1)):(x[b]=W1(F),x[b].c(),A(x[b],1),x[b].m(S,X))}for(E1(),b=Z.length;b<x.length;b+=1)d1(b);C1()}const H={};!c1&&$&16&&(c1=!0,H.donateModalOpenState=u[4],le(()=>c1=!1)),P.$set(H)},i(u){if(!Y){for(let $=0;$<Z.length;$+=1)A(x[$]);A(t1.$$.fragment,u),A(P.$$.fragment,u),Y=!0}},o(u){x=x.filter(Boolean);for(let $=0;$<x.length;$+=1)j(x[$]);j(t1.$$.fragment,u),j(P.$$.fragment,u),Y=!1},d(u){u&&(f(n),f(w),f(T),f(i1)),V1(U,u),V1(x,u),r1(t1),r1(P,u),m1=!1,O1(u1)}}}function Ve(t,e,l){let a;me(t,xe,D=>l(2,a=D));let{navPos:n=a.url.pathname==="/"?"fixed":"sticky"}=e,r,i,o,c;const d=[{name:"Установка",href:"/install"},{name:"Помощь",href:"/help"},{name:"Чейнджлог",href:"/changelog"}],_=[{label:"Главная страница",icon:"heroicons:home-solid",href:"/"},{label:"Установка",icon:"ic:round-download-for-offline",href:"/install"},{label:"Помощь",icon:"material-symbols:help-rounded",href:"/help"},{label:"Чейнджлог",icon:"ion:list-circle-sharp",href:"/changelog"}];function g(D){var I;(I=D.labels)==null||I.forEach(N=>{N.classList.contains("btn-ghost")&&(o=N)}),D.checked?(document.body.classList.add("overflow-hidden"),o&&(o.classList.remove("opacity-75"),o.classList.add("opacity-0"))):(document.body.classList.remove("overflow-hidden"),o&&(o.classList.add("opacity-75"),o.classList.remove("opacity-0")))}function C(){l(1,r=window.pageYOffset)}const V=()=>{l(4,c=!0)},w=D=>g(D.target),T=()=>{l(4,c=!0)};function M(D){c=D,l(4,c)}return t.$$set=D=>{"navPos"in D&&l(0,n=D.navPos)},t.$$.update=()=>{t.$$.dirty&6&&l(3,i=a.url.pathname==="/"?`background: rgba(0,0,0, ${r/500>.75?.75:r/500}`:"")},[n,r,a,i,c,d,_,g,C,V,w,T,M]}class Ne extends L1{constructor(e){super(),B1(this,e,Ve,Ae,$1,{navPos:0})}}function Z1(t){let e,l,a,n,r,i;const o=t[3].default,c=pe(o,t,t[2],null);return{c(){e=m("div"),c&&c.c(),this.h()},l(d){e=p(d,"DIV",{class:!0});var _=k(e);c&&c.l(_),_.forEach(f),this.h()},h(){s(e,"class","flex-1")},m(d,_){q(d,e,_),c&&c.m(e,null),n=!0,r||(i=J(e,"outroend",t[4]),r=!0)},p(d,_){c&&c.p&&(!n||_&4)&&_e(c,o,d,d[2],n?be(o,d[2],_,null):ge(d[2]),null)},i(d){n||(A(c,d),d&&N1(()=>{n&&(a&&a.end(1),l=ae(e,I1,{duration:200,delay:250}),l.start())}),n=!0)},o(d){j(c,d),l&&l.invalidate(),d&&(a=ne(e,I1,{duration:200})),n=!1},d(d){d&&f(e),c&&c.d(d),d&&a&&a.end(),r=!1,i()}}}function je(t){let e,l,a=t[0].url,n,r,i;e=new Ne({props:{navPos:t[1]}});let o=Z1(t);return r=new Be({}),{c(){l1(e.$$.fragment),l=L(),o.c(),n=L(),l1(r.$$.fragment)},l(c){a1(e.$$.fragment,c),l=B(c),o.l(c),n=B(c),a1(r.$$.fragment,c)},m(c,d){n1(e,c,d),q(c,l,d),o.m(c,d),q(c,n,d),n1(r,c,d),i=!0},p(c,[d]){const _={};d&2&&(_.navPos=c[1]),e.$set(_),d&1&&$1(a,a=c[0].url)?(E1(),j(o,1,1,y1),C1(),o=Z1(c),o.c(),A(o,1),o.m(n.parentNode,n)):o.p(c,d)},i(c){i||(A(e.$$.fragment,c),A(o),A(r.$$.fragment,c),i=!0)},o(c){j(e.$$.fragment,c),j(o),j(r.$$.fragment,c),i=!1},d(c){c&&(f(l),f(n)),r1(e,c),o.d(c),r1(r,c)}}}function Pe(t,e,l){let{$$slots:a={},$$scope:n}=e,r,{data:i}=e;const o=()=>l(1,r=i.url==="/"?"fixed":"sticky");return t.$$set=c=>{"data"in c&&l(0,i=c.data),"$$scope"in c&&l(2,n=c.$$scope)},[i,r,n,a,o]}class Xe extends L1{constructor(e){super(),B1(this,e,Pe,je,$1,{data:0})}}export{Xe as component,Ge as universal};