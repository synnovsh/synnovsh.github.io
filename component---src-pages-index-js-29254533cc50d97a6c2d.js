(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{193:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(196),o=n(203),l=n(201);e.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Home"}),r.a.createElement(i.a,{to:"/projects/"},"Projects"))}},195:function(t,e,n){var a;t.exports=(a=n(199))&&a.default||a},196:function(t,e,n){"use strict";var a=n(0),r=n.n(a),i=n(66),o=n.n(i);n.d(e,"a",function(){return o.a});n(195),n(9).default.enqueue,r.a.createContext({})},198:function(t){t.exports={data:{site:{siteMetadata:{title:"Portfolio"}}}}},199:function(t,e,n){"use strict";n.r(e);n(23);var a=n(0),r=n.n(a),i=n(95);e.default=function(t){var e=t.location,n=t.pageResources;return n?r.a.createElement(i.a,Object.assign({location:e,pageResources:n},n.json)):null}},201:function(t,e,n){"use strict";var a=n(202),r=n(0),i=n.n(r),o=n(209),l=n.n(o);function c(t){var e=t.description,n=t.lang,r=t.meta,o=t.title,c=a.data.site,u=e||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c},202:function(t){t.exports={data:{site:{siteMetadata:{title:"Portfolio",description:"Personal portfolio",author:"Synnøve Halle"}}}}},203:function(t,e,n){"use strict";var a=n(198),r=n(0),i=n.n(r),o=n(197),l=(n(204),n(205),n(206),n(207),n(208),n(196)),c=function(t){var e=t.siteTitle;return i.a.createElement("header",null,i.a.createElement("div",null,i.a.createElement("h1",null,i.a.createElement(l.a,{to:"/"},e))))};c.defaultProps={siteTitle:""};var u=c;function s(){var t=function(t,e){e||(e=t.slice(0));return t.raw=e,t}(["\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1200px) auto;\n  justify-items: center;\n  main {\n    grid-area: 1/2;\n    width: 100%;\n  }\n  img {\n    max-width: 100vw;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: underline;\n  }\n"]);return s=function(){return t},t}var d=o.a.div(s());e.a=function(t){var e=t.children,n=a.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:n.site.siteMetadata.title}),i.a.createElement(d,null,i.a.createElement("main",null,e)),i.a.createElement("footer",null,"© "+(new Date).getFullYear()))}}}]);
//# sourceMappingURL=component---src-pages-index-js-29254533cc50d97a6c2d.js.map