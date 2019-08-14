(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{191:function(e,n,t){"use strict";t.r(n),t.d(n,"query",function(){return p});var a=t(0),r=t.n(a),i=t(197),l=t(203),c=t(200),o=t(212),u=t(201);function s(){var e=f(["\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n\n  li {\n    display: inline;\n    margin-left: 1em;\n  }\n\n  img {\n    max-height: 600px;\n    margin: auto;\n  }\n"]);return s=function(){return e},e}function m(){var e=f(["\n  p {\n    max-width: 400px;\n    margin: 1em 0;\n  }\n\n  h1 {\n    margin: 1em 0;\n  }\n  li {\n    padding: 0 2px;\n    display: inline;\n  }\n\n  figure {\n    max-width: ","px;\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    figcaption {\n      max-width: ","px;\n      font-size: 0.9em;\n    }\n  }\n\n  video,\n  img {\n    display: inline;\n    max-height: 80vh;\n    max-width: 80%;\n    padding-top: 2em;\n  }\n\n  video {\n    max-height: 500px;\n  }\n"]);return m=function(){return e},e}function d(){var e=f(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return d=function(){return e},e}function f(e,n){return n||(n=e.slice(0)),e.raw=n,e}var p="369900743",h=i.a.article(d()),g=i.a.div(m(),800,200),v=i.a.section(s());n.default=function(e){var n=e.data.project,t=n.title,a=n._rawBody,i=n.mainImage,s=n.category,m=n.stack,d=n.live,f=n.code;return r.a.createElement(l.a,null,r.a.createElement(u.a,{title:t}),r.a.createElement(h,null,r.a.createElement(v,null,r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement(c.a,{image:i})),r.a.createElement("div",null,s&&s,m&&r.a.createElement("ul",null,m.map(function(e){return r.a.createElement("li",{key:e},e)})),f&&f,d&&d)),r.a.createElement(g,null,r.a.createElement(o.a,{blocks:a}))))}},195:function(e,n,t){var a;e.exports=(a=t(199))&&a.default||a},196:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(66),l=t.n(i);t.d(n,"a",function(){return l.a});t(195),t(9).default.enqueue,r.a.createContext({})},198:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio"}}}}},199:function(e,n,t){"use strict";t.r(n);t(23);var a=t(0),r=t.n(a),i=t(95);n.default=function(e){var n=e.location,t=e.pageResources;return t?r.a.createElement(i.a,Object.assign({location:n,pageResources:t},t.json)):null}},200:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(210),l=t.n(i),c=t(211),o=l()(c.api);n.a=function(e){var n,t=e.image,a=t.alt,i=t.asset.id,l=t.caption,c=(n=i,o.image(n));return r.a.createElement("figure",null,r.a.createElement("img",{alt:a,src:c}),l&&r.a.createElement("figcaption",null,l))}},201:function(e,n,t){"use strict";var a=t(202),r=t(0),i=t.n(r),l=t(209),c=t.n(l);function o(e){var n=e.description,t=e.lang,r=e.meta,l=e.title,o=a.data.site,u=n||o.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:t},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(r)})}o.defaultProps={lang:"en",meta:[],description:""},n.a=o},202:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio",description:"Personal portfolio",author:"Synnøve Halle"}}}}},203:function(e,n,t){"use strict";var a=t(198),r=t(0),i=t.n(r),l=t(197),c=(t(204),t(205),t(206),t(207),t(208),t(196)),o=function(e){var n=e.siteTitle;return i.a.createElement("header",null,i.a.createElement("div",null,i.a.createElement("h1",null,i.a.createElement(c.a,{to:"/"},n))))};o.defaultProps={siteTitle:""};var u=o;function s(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1200px) auto;\n  justify-items: center;\n  main {\n    grid-area: 1/2;\n    width: 100%;\n  }\n  img {\n    max-width: 100vw;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: underline;\n  }\n"]);return s=function(){return e},e}var m=l.a.div(s());n.a=function(e){var n=e.children,t=a.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:t.site.siteMetadata.title}),i.a.createElement(m,null,i.a.createElement("main",null,n)),i.a.createElement("footer",null,"© "+(new Date).getFullYear()))}},211:function(e){e.exports={root:!0,project:{name:"Website"},api:{projectId:"2l5ca17x",dataset:"development"},plugins:["@sanity/base","@sanity/components","@sanity/default-layout","@sanity/default-login","@sanity/desk-tool","@sanity/code-input"],parts:[{name:"part:@sanity/base/schema",path:"./schemas/schema.js"}]}},212:function(e,n,t){"use strict";t(14);var a=t(0),r=t.n(a),i=t(214),l=t.n(i),c=function(e){var n=e.node.source.asset.url;return r.a.createElement(r.a.Fragment,null,r.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:n}))},o=t(200),u=t(197);function s(){var e=d(["\n  transform: translate3d(","%, 0, 0);\n  transition: transform 250ms;\n  float: left;\n\n  figure {\n    flex-flow: column nowrap !important;\n    align-items: flex-start !important;\n    justify-content: flex-start !important;\n  }\n"]);return s=function(){return e},e}function m(){var e=d(["\n  overflow: hidden;\n  width: 100%;\n\n  div {\n    width: ","%;\n  }\n"]);return m=function(){return e},e}function d(e,n){return n||(n=e.slice(0)),e.raw=n,e}var f=u.a.ul(m(),function(e){return 100*e.length}),p=u.a.li(s(),function(e){return-100*e.index}),h=function(e){var n=e.slides,t=n.length,i=Object(a.useState)(0),l=i[0],c=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"slideshow-nav"},r.a.createElement("button",{type:"button",onClick:function(){c(Math.max(l-1,0))},disabled:0===l},"Prev"),r.a.createElement("span",null,l+1," of ",t),r.a.createElement("button",{type:"button",onClick:function(){c(Math.min(l+1,t-1))},disabled:l===t-1},"Next")),r.a.createElement(f,{length:t},r.a.createElement("div",null,n.map(function(e){return r.a.createElement(p,{index:l,key:e._key},r.a.createElement(o.a,{image:e}))}))))},g={types:{video:function(e){var n=e.node;return r.a.createElement(c,{node:n})},richImage:function(e){var n=e.node;return r.a.createElement(o.a,{image:n})},block:function(e){return function(e){var n=e.node.style||"normal";if(/^h\d/.test(n))switch(n.replace(/[^\d]/g,"")){case"1":return r.a.createElement("h1",{id:e.children[0]},e.children);case"2":return r.a.createElement("h2",null,e.children);case"3":return r.a.createElement("h3",null,e.children);case"4":return r.a.createElement("h4",null,e.children);case"5":return r.a.createElement("h5",null,e.children);case"6":return r.a.createElement("h6",null,e.children);default:return r.a.createElement("h1",null,e.children)}return"blockquote"===n?r.a.createElement("blockquote",{className:"my-block-quote"},e.children):r.a.createElement("p",{className:"my-paragraph"},e.children)}(e)},slideshow:function(e){var n=e.node.slides;return r.a.createElement(h,{slides:n})}}};n.a=function(e){var n=e.blocks;return r.a.createElement(l.a,{blocks:n,serializers:g})}}}]);
//# sourceMappingURL=component---src-templates-project-js-1ed5a6cd526367250cb4.js.map