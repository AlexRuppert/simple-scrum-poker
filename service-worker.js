if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,n,d)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const s={uri:location.origin+r.slice(1)};return Promise.all(n.map(r=>{switch(r){case"exports":return i;case"module":return s;default:return e(r)}})).then(e=>{const r=d(...e);return i.default||(i.default=r),i})}))}}define("./service-worker.js",["./workbox-d9851aed"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.55a30af7.png",revision:"578e57d2cbd282475d002d2e29f6fd5e"},{url:"android-chrome-512x512.8bd44e61.png",revision:"521ef056d15599adec05aa8829a09757"},{url:"apple-touch-icon.722e2e61.png",revision:"91a0329f22f3f680f37f2e100df872ac"},{url:"assets/manifest.webmanifest",revision:"5b037f090855fed10c493e5025cfd904"},{url:"favicon-16x16.a0ee37fd.png",revision:"9863ee3cb797be09c060940f730168db"},{url:"favicon-32x32.db9f1822.png",revision:"44a4561a0dcd4d0a70989169114e9cba"},{url:"index.d786e4fb.js",revision:"d49b2118294131d87027d304919d128d"},{url:"index.html",revision:"c56fbc9a2648e881bd5702e06ba86e8d"},{url:"safari-pinned-tab.7f5b459a.svg",revision:"9f946f45dba5db22a4917b7b68ede203"}],{})}));
//# sourceMappingURL=service-worker.js.map
