(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{193:function(n,e,t){"use strict";t.r(e),t.d(e,"query",function(){return p});var r=t(0),a=t.n(r),i=(t(199),t(197)),o=t(205),l=t(203),c=t(200);t(207);function u(){var n=m(["\n"]);return u=function(){return n},n}function s(){var n=m(["\n"]);return s=function(){return n},n}function d(){var n=m(["\n  display: grid;\n  grid-template-columns: minmax(0px, auto) minmax(0, ","px) minmax(\n      0px,\n      auto\n    );\n\n  ul {\n    grid-area: 1/2;\n    margin: 0;\n    list-style-type: none;\n    li {\n        margin: 10vh 0;\n    }\n  }\n"]);return d=function(){return n},n}function m(n,e){return e||(e=n.slice(0)),n.raw=e,n}var p="1118316129",f=i.a.div(d(),1200),h=i.a.article(s()),g=(i.a.div(u()),function(n){var e=n.illustration.mainImage;return a.a.createElement(h,null,a.a.createElement(c.a,{image:e,maxWidth:1200}))});e.default=function(n){var e=function(n){return n.edges?n.edges.map(function(n){return n.node}):[]}(n.data.illustrations);return a.a.createElement(o.a,null,a.a.createElement(l.a,{title:"illustrations"}),a.a.createElement(f,null,a.a.createElement("ul",null,e.map(function(n){return a.a.createElement("li",{className:"illustration",key:n.id},a.a.createElement(g,{illustration:n}))}))))}},198:function(n,e,t){var r;n.exports=(r=t(202))&&r.default||r},199:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=t(66),o=t.n(i);t.d(e,"a",function(){return o.a});t(198),t(9).default.enqueue,a.a.createContext({})},200:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=t(214),o=t.n(i),l=t(206),c=o()(l.api);e.a=function(n){var e=n.image,t=n.maxWidth,r=e.alt,i=e.asset.id,o=(e.caption,function(n,e){var t=c.image(n);return e?t.width(e).url():t.width(1e3).url()}(i,t));return a.a.createElement("figure",null,a.a.createElement("img",{alt:r,src:o}))}},201:function(n){n.exports={data:{site:{siteMetadata:{title:"Portfolio"}}}}},202:function(n,e,t){"use strict";t.r(e);t(23);var r=t(0),a=t.n(r),i=t(94);e.default=function(n){var e=n.location,t=n.pageResources;return t?a.a.createElement(i.a,Object.assign({location:e,pageResources:t},t.json)):null}},203:function(n,e,t){"use strict";var r=t(204),a=t(0),i=t.n(a),o=t(213),l=t.n(o);function c(n){var e=n.description,t=n.lang,a=n.meta,o=n.title,c=r.data.site,u=e||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(a)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c},204:function(n){n.exports={data:{site:{siteMetadata:{title:"Portfolio",description:"Personal portfolio",author:"Synnøve Halle"}}}}},205:function(n,e,t){"use strict";var r=t(201),a=t(0),i=t.n(a),o=t(197),l=(t(208),t(209),t(210),t(211),t(212),t(199));function c(){var n=f(["\n  display: inline-block;\n  background-color: rgba(0, 0, 0, 0.9);\n  width: 40px;\n  height: 40px;\n  margin: 10px 0px;\n  margin-left: 25px;\n  color: white;\n  font-family: monospace;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  aling-content: center;\n\n  .typewrite {\n    display: inline-block;\n    overflow: hidden;\n    white-space: nowrap;\n    border-right: 4px solid white;\n    box-sizing: border-box;\n    animation: "," 1s step-end infinite;\n  }\n"]);return c=function(){return n},n}function u(){var n=f(["\n  from, to { \n    border-color: transparent \n  }\n  50% { \n    border-color: white; \n  }\n"]);return u=function(){return n},n}function s(){var n=f([" \n  display: flex;\n  flex-direction: column;\n  margin-top: 20vh;\n  margin-right: 25px;\n  \n  li {\n    margin-left: auto;\n    margin-top: .5em;\n    font-size: calc(1.8em + 1vw);\n    a {\n      text-align: right;\n      color: inherit;\n      &:hover {\n        border-bottom: 2px solid #FFAC00;\n      }\n    }\n  }\n"]);return s=function(){return n},n}function d(){var n=f(["\n  // need both, one for transition, one for hiding it away from top\n  visibility: ",";\n  opacity: ",";\n  position: absolute;\n  top: 0; right:0;\n  background-color: rgba(255,255,255,0.9);\n  width: 100vw;\n  height: 100vh;\n  transition: opacity 0.5s, visibility 0.5s;\n"]);return d=function(){return n},n}function m(){var n=f(["\n  margin-right: 25px;\n  input {\n    display: block;\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    cursor: pointer;\n    opacity: 0; \n    z-index: 2; \n  }\n\n  span {\n    &:not(:last-child) {\n      margin-bottom: 6px;\n    }\n    display: block;\n    width: 30px;\n    height: 2px;\n    position: relative;\n    background: rgba(0,0,0,1);\n    border-radius: 3px;\n    z-index: 1;\n    transform-origin: 4px 0px;\n    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\n                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\n                opacity 0.55s ease;\n  }\n\n  span:first-child {\n    transform-origin: 0% 0%;\n  }\n\n  span:nth-last-child(2) {\n    transform-origin: 0% 100%;\n  }\n\n  input:checked ~ span {\n    transform: rotate(45deg);\n  }\n\n  input:checked ~ span:nth-last-child(2) {\n    opacity: 0;\n  }\n\n  input:checked ~ span:nth-last-child(1) {\n    transform: rotate(-45deg);\n  }\n\n  input:checked ~ a {\n    color: red;\n  }"]);return m=function(){return n},n}function p(){var n=f(["\n  position: fixed;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 10;\n  background-color: rgba(255,255,255, 0.9);\n  border-bottom: 1px solid rgba(0,0,0,0.1);\n\n\n  a {\n    text-decoration: none;\n  }\n"]);return p=function(){return n},n}function f(n,e){return e||(e=n.slice(0)),n.raw=e,n}var h=o.a.header(p()),g=o.a.div(m()),v=o.a.nav(d(),function(n){return n.show?"visible":"hidden"},function(n){return n.show?"1":"0"}),b=o.a.ul(s()),x=Object(o.b)(u()),E=o.a.div(c(),x),y=function(){var n=Object(a.useState)(!1),e=n[0],t=n[1];return i.a.createElement(h,null,i.a.createElement(l.a,{to:"/"},i.a.createElement(E,null,i.a.createElement("span",null,"$ "),i.a.createElement("div",{className:"typewrite"},"ssh"))),i.a.createElement(v,{show:e},i.a.createElement(b,null,i.a.createElement("li",null,i.a.createElement(l.a,{to:"/about"},"About Me")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/projects"},"Projects")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/illustrations"},"Illustrations")))),i.a.createElement(g,null,i.a.createElement("input",{onClick:function(){return t(!e)},type:"checkbox"}),i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)))};function w(){var n=C(["\n  grid-area: 2/2;\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n  main {\n    padding-top: 150px;\n    img {\n      max-width: 100%;\n    }\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  p > a {\n    color: inherit;\n    border-bottom: 2px solid #FFAC00;\n    &:hover {\n      opacity: 0.9;\n    }\n  }\n"]);return w=function(){return n},n}function k(){var n=C(["\n  height: 100px;\n"]);return k=function(){return n},n}function j(){var n=C(["\n  display: grid;\n  grid-template-columns: 25px 1fr 25px;\n  grid-template-rows: auto 1fr auto;\n\n  header {\n    grid-area: 1/2;\n  }\n\n  footer {\n    grid-area: 3/2;\n  }\n"]);return j=function(){return n},n}function C(n,e){return e||(e=n.slice(0)),n.raw=e,n}var M=o.a.div(j()),z=o.a.footer(k()),P=o.a.div(w());e.a=function(n){var e=n.children,t=r.data;return i.a.createElement(M,null,i.a.createElement(y,{siteTitle:t.site.siteMetadata.title}),i.a.createElement(P,null,i.a.createElement("main",null,e)),i.a.createElement(z,null))}},206:function(n){n.exports={root:!0,project:{name:"Website"},api:{projectId:"2l5ca17x",dataset:"development"},plugins:["@sanity/base","@sanity/components","@sanity/default-layout","@sanity/default-login","@sanity/desk-tool","@sanity/code-input"],parts:[{name:"part:@sanity/base/schema",path:"./schemas/schema.js"}]}},207:function(n,e,t){"use strict";t(14);var r=t(0),a=t.n(r),i=t(215),o=t.n(i),l=t(197);function c(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  max-width: ","%;\n"]);return c=function(){return n},n}var u=l.a.video(c(),function(n){return"vertical"===n.orientation?"50":"100"}),s=function(n){var e=n.node,t=e.orientation,r=e.source.asset.url;return a.a.createElement(u,{orientation:t,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:r})},d=t(200);function m(){var n=v(["\n  ","\n  width: 50px;\n  height: 50px;\n  outline: 0;\n  border: none;\n  padding: 0;\n\n   {\n    cursor: pointer;\n  }\n"]);return m=function(){return n},n}function p(){var n=v(["\n  margin-top: 1em;\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"]);return p=function(){return n},n}function f(){var n=v(["\n  max-height: 100vh;\n  width: 100%;\n  transform: translate3d(-","%, 0, 0);\n  transition: transform 300ms;\n  }\n"]);return f=function(){return n},n}function h(){var n=v(["\n  width: ","%;\n  display: flex;\n  flex-direction: row;\n  list-style: none !important;\n  margin-left: 0 !important;\n"]);return h=function(){return n},n}function g(){var n=v(["\n  position: relative;\n  max-width: 100%;\n  overflow: hidden;\n  span {\n    color: rgba(0, 0, 0, 0.3);\n  }\n"]);return g=function(){return n},n}function v(n,e){return e||(e=n.slice(0)),n.raw=e,n}var b=l.a.div(g()),x=l.a.ul(h(),function(n){return 100*n.length}),E=l.a.li(f(),function(n){return 100*n.index}),y=l.a.div(p()),w=l.a.button(m(),function(n){return n.disabled&&"visibility: hidden;"}),k=function(n){var e=n.direction,t=n.onClick,r=n.disabled;return a.a.createElement(w,{type:"button",onClick:function(){return t()},disabled:r},a.a.createElement("span",null,"left"===e?"←":"→"))},j=function(n){var e=n.slides,t=e.length,i=Object(r.useState)(0),o=i[0],l=i[1];return a.a.createElement(b,{className:"slideshow"},a.a.createElement(x,{length:t},e.map(function(n){return a.a.createElement(E,{length:t,index:o,key:n._key},a.a.createElement(d.a,{image:n}))})),a.a.createElement(y,null,a.a.createElement(k,{direction:"left",onClick:function(){l(Math.max(o-1,0))},disabled:0===o}),a.a.createElement("span",null,o+1+"/"+t),a.a.createElement(k,{direction:"right",onClick:function(){l(Math.min(o+1,t-1))},disabled:o===t-1})))},C={types:{video:function(n){var e=n.node;return a.a.createElement(s,{node:e})},richImage:function(n){var e=n.node;return a.a.createElement(d.a,{image:e})},block:function(n){return function(n){var e=n.node.style||"normal";if(/^h\d/.test(e)){var t=e.replace(/[^\d]/g,""),r=n.children[0].toLowerCase().replace(/ /,"_");switch(t){case"1":return a.a.createElement("h1",{id:r},n.children);case"2":return a.a.createElement("h2",null,n.children);case"3":return a.a.createElement("h3",null,n.children);case"4":return a.a.createElement("h4",null,n.children);case"5":return a.a.createElement("h5",null,n.children);case"6":return a.a.createElement("h6",null,n.children);default:return a.a.createElement("h1",null,n.children)}}return"blockquote"===e?a.a.createElement("blockquote",null,n.children):a.a.createElement("p",null,n.children)}(n)},slideshow:function(n){var e=n.node.slides;return a.a.createElement(j,{slides:e})}}};e.a=function(n){var e=n.blocks;return a.a.createElement(o.a,{blocks:e,serializers:C})}}}]);
//# sourceMappingURL=component---src-pages-illustrations-js-eebfa017102cc1498867.js.map