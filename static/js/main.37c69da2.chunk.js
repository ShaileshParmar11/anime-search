(this.webpackJsonpanimesearch=this.webpackJsonpanimesearch||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(6),s=n.n(a),i=(n(11),n(3)),u=n(2),o=n.n(u),j=n(5),h=(n(13),n(0)),l=function(e){var t=e.apiData;if(404===t.status)return Object(h.jsx)("h1",{children:t.message});var n=t.results;return Object(h.jsx)("div",{className:"anime_container",children:n.map((function(e,t){var n=e.title,r=e.image_url,c=e.score,a=e.url;return Object(h.jsxs)("div",{className:"anime_card",children:[Object(h.jsx)("img",{src:r,alt:n}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:n}),Object(h.jsxs)("p",{children:["score: ",c]}),Object(h.jsx)("p",{className:"know_more",children:Object(h.jsx)("a",{href:a,rel:"noreferrer",target:"_blank",children:"Know More"})})]})]},t)}))})},b=function(){var e=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.jikan.moe/v3/search/anime?q=".concat(t),e.next=3,fetch(n).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var f=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)({}),s=Object(i.a)(a,2),u=s[0],f=s[1],p=Object(r.useState)(!1),d=Object(i.a)(p,2),m=d[0],O=d[1],x=function(){var e=Object(j.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,b(n).then((function(e){return e}));case 3:r=e.sent,f(r),O(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)("h1",{children:"Anime Search"}),Object(h.jsxs)("form",{onSubmit:x,className:"search",children:[Object(h.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"search for anime, e.g Pokemon",required:!0}),Object(h.jsx)("button",{children:"Go"})]}),m?Object(h.jsx)(l,{apiData:u}):Object(h.jsx)("h2",{children:"Search for Anime to see results"})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.37c69da2.chunk.js.map