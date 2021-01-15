(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{137:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,b=u["".concat(i,".").concat(f)]||u[f]||l[f]||o;return r?n.a.createElement(b,c(c({ref:t},p),{},{components:r})):n.a.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),o=(r(0),r(137)),i={id:"generate-metadata",title:"generate-metadata"},c={unversionedId:"generate-metadata",id:"generate-metadata",isDocsHomePage:!1,title:"generate-metadata",description:"After the RDF Knowledge Graph has been generated and loaded in a triplestore, HCLS dataset descriptive statistics can be easily generated and published for the published dataset.",source:"@site/docs/generate-metadata.md",slug:"/generate-metadata",permalink:"/docs/generate-metadata",editUrl:"https://github.com/MaastrichtU-IDS/d2s-docs/edit/master/website/docs/generate-metadata.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1610743136},d=[],p={toc:d};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"After the RDF Knowledge Graph has been generated and loaded in a triplestore, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/TR/hcls-dataset/"}),"HCLS dataset descriptive statistics")," can be easily generated and published for the published dataset. "),Object(o.b)("p",null,"Checkout the ",Object(o.b)("inlineCode",{parentName:"p"},"fair-metadata")," Python library to generate HCLS metadata for a SPARQL endpoint: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/fair-metadata"}),"https://github.com/MaastrichtU-IDS/fair-metadata")),Object(o.b)("p",null,"Automate it by adding a GitHub Action to your workflow."))}s.isMDXComponent=!0}}]);