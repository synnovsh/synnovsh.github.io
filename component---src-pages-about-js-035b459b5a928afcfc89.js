(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return s});var a=n(0),i=n.n(a),r=n(197),o=n(205),l=n(203),c=n(207),s="3323621856",d=r.a.div.withConfig({displayName:"about__Content",componentId:"sc-1ez3lsp-0"})(["display:grid;grid-template-columns:minmax(0px,auto) 500px minmax(0px,auto);@media screen and (min-width:800px){grid-template-columns:minmax(0px,200px) 500px;}"]),u=r.a.article.withConfig({displayName:"about__Body",componentId:"sc-1ez3lsp-1"})(["grid-area:1/2;h1{margin-bottom:.5em;}p{margin-bottom:1.5em;}b,strong{font-weight:bold;}"]);t.default=function(e){var t=e.data.page;if(!t)return"oops";var n=t.title,a=t._rawBody;return i.a.createElement(o.a,null,i.a.createElement(l.a,{title:n}),i.a.createElement(d,null,i.a.createElement(u,null,i.a.createElement("h1",null,n),a&&i.a.createElement(c.a,{blocks:a}))))}},198:function(e,t,n){var a;e.exports=(a=n(202))&&a.default||a},199:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(66),o=n.n(r);n.d(t,"a",function(){return o.a});n(198),n(9).default.enqueue,i.a.createContext({})},200:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(214),o=n.n(r),l=n(206),c=o()(l.api);t.a=function(e){var t=e.image,n=e.maxWidth,a=t.alt,r=t.asset.id,o=(t.caption,function(e,t){var n=c.image(e);return t?n.width(t).url():n.width(1e3).url()}(r,n));return i.a.createElement("figure",null,i.a.createElement("img",{alt:a,src:o}))}},201:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio"}}}}},202:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),i=n.n(a),r=n(94);t.default=function(e){var t=e.location,n=e.pageResources;return n?i.a.createElement(r.a,Object.assign({location:t,pageResources:n},n.json)):null}},203:function(e,t,n){"use strict";var a=n(204),i=n(0),r=n.n(i),o=n(213),l=n.n(o);function c(e){var t=e.description,n=e.lang,i=e.meta,o=e.title,c=a.data.site,s=t||c.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},204:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio",description:"Personal portfolio",author:"Synnøve Halle"}}}}},205:function(e,t,n){"use strict";var a=n(201),i=n(0),r=n.n(i),o=n(197),l=(n(208),n(209),n(210),n(211),n(212),n(199)),c=o.a.header.withConfig({displayName:"header__Head",componentId:"e4bpa-0"})(["position:fixed;width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center;z-index:10;background-color:rgba(255,255,255,0.9);border-bottom:1px solid rgba(0,0,0,0.1);a{text-decoration:none;}"]),s=o.a.div.withConfig({displayName:"header__Hamburger",componentId:"e4bpa-1"})(["margin-right:25px;input{display:block;width:30px;height:30px;position:absolute;cursor:pointer;opacity:0;z-index:2;}span{&:not(:last-child){margin-bottom:6px;}display:block;width:30px;height:2px;position:relative;background:rgba(0,0,0,1);border-radius:3px;z-index:1;transform-origin:4px 0px;transition:transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),opacity 0.55s ease;}span:first-child{transform-origin:0% 0%;}span:nth-last-child(2){transform-origin:0% 100%;}input:checked ~ span{transform:rotate(45deg);}input:checked ~ span:nth-last-child(2){opacity:0;}input:checked ~ span:nth-last-child(1){transform:rotate(-45deg);}input:checked ~ a{color:red;}"]),d=o.a.nav.withConfig({displayName:"header__Nav",componentId:"e4bpa-2"})(["visibility:",";opacity:",";position:absolute;top:0;right:0;background-color:rgba(255,255,255,0.9);width:100vw;height:100vh;transition:opacity 0.5s,visibility 0.5s;"],function(e){return e.show?"visible":"hidden"},function(e){return e.show?"1":"0"}),u=o.a.ul.withConfig({displayName:"header__NavItems",componentId:"e4bpa-3"})(["  display:flex;flex-direction:column;margin-top:20vh;margin-right:25px;li{margin-left:auto;margin-top:.5em;font-size:calc(1.8em + 1vw);a{text-align:right;color:inherit;&:hover{border-bottom:2px solid #FFAC00;}}}"]),p=Object(o.b)(["from,to{border-color:transparent}50%{border-color:white;}"]),m=o.a.div.withConfig({displayName:"header__Logo",componentId:"e4bpa-4"})(["display:inline-block;background-color:rgba(0,0,0,0.9);width:40px;height:40px;margin:10px 0px;margin-left:25px;color:white;font-family:monospace;padding:10px;display:flex;align-items:center;aling-content:center;.typewrite{display:inline-block;overflow:hidden;white-space:nowrap;border-right:4px solid white;box-sizing:border-box;animation:"," 1s step-end infinite;}"],p),h=function(){var e=Object(i.useState)(!1),t=e[0],n=e[1];return r.a.createElement(c,null,r.a.createElement(l.a,{to:"/"},r.a.createElement(m,null,r.a.createElement("span",null,"$ "),r.a.createElement("div",{className:"typewrite"},"ssh"))),r.a.createElement(d,{show:t},r.a.createElement(u,null,r.a.createElement("li",null,r.a.createElement(l.a,{to:"/about"},"About Me")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/projects"},"Projects")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/illustrations"},"Illustrations")))),r.a.createElement(s,null,r.a.createElement("input",{onClick:function(){return n(!t)},type:"checkbox"}),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)))},f=o.a.div.withConfig({displayName:"layout__StyledLayout",componentId:"ksijt7-0"})(["display:grid;grid-template-columns:25px 1fr 25px;grid-template-rows:auto 1fr auto;header{grid-area:1/2;}footer{grid-area:3/2;}"]),g=o.a.footer.withConfig({displayName:"layout__Footer",componentId:"ksijt7-1"})(["height:100px;"]),b=o.a.div.withConfig({displayName:"layout__Content",componentId:"ksijt7-2"})(["grid-area:2/2;display:flex;min-height:100vh;flex-direction:column;main{padding-top:150px;img{max-width:100%;}}a{text-decoration:none;}p > a{color:inherit;border-bottom:2px solid #FFAC00;&:hover{opacity:0.9;}}"]);t.a=function(e){var t=e.children,n=a.data;return r.a.createElement(f,null,r.a.createElement(h,{siteTitle:n.site.siteMetadata.title}),r.a.createElement(b,null,r.a.createElement("main",null,t)),r.a.createElement(g,null))}},206:function(e){e.exports={root:!0,project:{name:"Website"},api:{projectId:"2l5ca17x",dataset:"development"},plugins:["@sanity/base","@sanity/components","@sanity/default-layout","@sanity/default-login","@sanity/desk-tool","@sanity/code-input"],parts:[{name:"part:@sanity/base/schema",path:"./schemas/schema.js"}]}},207:function(e,t,n){"use strict";n(14);var a=n(0),i=n.n(a),r=n(215),o=n.n(r),l=n(197),c=l.a.video.withConfig({displayName:"video__StyledVideo",componentId:"odo5jh-0"})(["max-width:","%;"],function(e){return"vertical"===e.orientation?"50":"100"}),s=function(e){var t=e.node,n=t.orientation,a=t.source.asset.url;return i.a.createElement(c,{orientation:n,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a})},d=n(200),u=l.a.div.withConfig({displayName:"slideshow__Slideshower",componentId:"sc-1egfplu-0"})(["position:relative;max-width:100%;overflow:hidden;span{color:rgba(0,0,0,0.3);}"]),p=l.a.ul.withConfig({displayName:"slideshow__Slidelist",componentId:"sc-1egfplu-1"})(["width:","%;display:flex;flex-direction:row;list-style:none !important;margin-left:0 !important;"],function(e){return 100*e.length}),m=l.a.li.withConfig({displayName:"slideshow__Slide",componentId:"sc-1egfplu-2"})(["max-height:100vh;width:100%;transform:translate3d(-","%,0,0);transition:transform 300ms;}"],function(e){return 100*e.index}),h=l.a.div.withConfig({displayName:"slideshow__Controls",componentId:"sc-1egfplu-3"})(["margin-top:1em;width:100%;display:flex;justify-content:flex-start;align-items:center;"]),f=l.a.button.withConfig({displayName:"slideshow__Button",componentId:"sc-1egfplu-4"})([""," width:50px;height:50px;outline:0;border:none;padding:0;{cursor:pointer;}"],function(e){return e.disabled&&"visibility: hidden;"}),g=function(e){var t=e.direction,n=e.onClick,a=e.disabled;return i.a.createElement(f,{type:"button",onClick:function(){return n()},disabled:a},i.a.createElement("span",null,"left"===t?"←":"→"))},b=function(e){var t=e.slides,n=t.length,r=Object(a.useState)(0),o=r[0],l=r[1];return i.a.createElement(u,{className:"slideshow"},i.a.createElement(p,{length:n},t.map(function(e){return i.a.createElement(m,{length:n,index:o,key:e._key},i.a.createElement(d.a,{image:e}))})),i.a.createElement(h,null,i.a.createElement(g,{direction:"left",onClick:function(){l(Math.max(o-1,0))},disabled:0===o}),i.a.createElement("span",null,o+1+"/"+n),i.a.createElement(g,{direction:"right",onClick:function(){l(Math.min(o+1,n-1))},disabled:o===n-1})))},y={types:{video:function(e){var t=e.node;return i.a.createElement(s,{node:t})},richImage:function(e){var t=e.node;return i.a.createElement(d.a,{image:t})},block:function(e){return function(e){var t=e.node.style||"normal";if(/^h\d/.test(t)){var n=t.replace(/[^\d]/g,""),a=e.children[0].toLowerCase().replace(/ /,"_");switch(n){case"1":return i.a.createElement("h1",{id:a},e.children);case"2":return i.a.createElement("h2",null,e.children);case"3":return i.a.createElement("h3",null,e.children);case"4":return i.a.createElement("h4",null,e.children);case"5":return i.a.createElement("h5",null,e.children);case"6":return i.a.createElement("h6",null,e.children);default:return i.a.createElement("h1",null,e.children)}}return"blockquote"===t?i.a.createElement("blockquote",null,e.children):i.a.createElement("p",null,e.children)}(e)},slideshow:function(e){var t=e.node.slides;return i.a.createElement(b,{slides:t})}}};t.a=function(e){var t=e.blocks;return i.a.createElement(o.a,{blocks:t,serializers:y})}}}]);
//# sourceMappingURL=component---src-pages-about-js-035b459b5a928afcfc89.js.map