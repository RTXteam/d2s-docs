(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{125:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=p(a),m=n,h=l["".concat(o,".").concat(m)]||l[m]||d[m]||r;return a?i.a.createElement(h,c(c({ref:t},b),{},{components:a})):i.a.createElement(h,c({ref:t},b))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<r;b++)o[b]=a[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(125)),o={id:"deploy-services",title:"Recommended services"},c={unversionedId:"deploy-services",id:"deploy-services",isDocsHomePage:!1,title:"Recommended services",description:"Recommended services easy to set to improve accessibility of your triplestore.",source:"@site/docs/deploy-services.md",slug:"/deploy-services",permalink:"/docs/deploy-services",editUrl:"https://github.com/MaastrichtU-IDS/d2s-docs/edit/master/website/docs/deploy-services.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1610644345,sidebar:"docs",previous:{title:"RDF data validation",permalink:"/docs/data-validation"},next:{title:"Additional services",permalink:"/docs/deploy-additional-services"}},s=[{value:"Grlc SPARQL API",id:"grlc-sparql-api",children:[]},{value:"Into-the-graph web UI",id:"into-the-graph-web-ui",children:[]}],b={toc:s};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Recommended services easy to set to improve accessibility of your triplestore."),Object(r.b)("h2",{id:"grlc-sparql-api"},"Grlc SPARQL API"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/CLARIAH/grlc"}),Object(r.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/CLARIAH/grlc?label=GitHub&style=social",alt:"grlc API"})))),Object(r.b)("p",null,"Deploying a serverless API to access and explore your SPARQL endpoint is really easy to do with ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"strong"},{href:"http://grlc.io/"}),"grlc.io")),". You just need to define a few SPARQL queries in a GitHub repository, and grlc.io will handle everything else to expose a Swagger API (aka. Open API) to access your knowledge graph. "),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Enable easy data exploration")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\ud83e\udded This API will be the entrypoint for people who want to discover your data: they can quickly explore and understand the structure of your knowledge graph through the query you exposed."))),Object(r.b)("p",null,"To make this example easier to reproduce, we will use the existing ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://grlc.io/"}),"grlc.io")," API deployment defined for the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/food-claims-kg"}),"food-claims-kg")," as example"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"\ud83d\udc69\u200d\ud83d\udcbb Provide the URL of SPARQL endpoint to query in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/food-claims-kg/blob/master/endpoint.txt"}),Object(r.b)("inlineCode",{parentName:"a"},"endpoint.txt")," file"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"\ud83d\udc68\u200d\ud83d\udcbb Define the SPARQL queries in ",Object(r.b)("inlineCode",{parentName:"p"},".rq")," files at the base of the git repo."),Object(r.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Example")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/food-claims-kg/blob/master/get-claims-for-food.rq"}),"this example of a ",Object(r.b)("inlineCode",{parentName:"a"},".rq")," file")," to define a SPARQL query with a parameter (used to filter using ",Object(r.b)("inlineCode",{parentName:"p"},"regex()"),").")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"That's it \ud83e\udd2f you can go to your API Swagger UI automatically generated and hosted by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://grlc.io/"}),"grlc.io")," based on the GitHub repository URL: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://grlc.io/api-git/MaastrichtU-IDS/food-claims-kg"}),"http://grlc.io/api-git/MaastrichtU-IDS/food-claims-kg")))),Object(r.b)("p",null,"Bonus: combine ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/food-claims-kg"}),"grlc.io")," with the GraphDB search index query, and you have a Search API for your knowledge graph! \ud83d\udd0e"),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"An active project")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The project is still active and reactive, feel free to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/CLARIAH/grlc/issues"}),"post an issue")," if you face any problem."))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"into-the-graph-web-ui"},"Into-the-graph web UI"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/into-the-graph"}),Object(r.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/MaastrichtU-IDS/into-the-graph?label=GitHub&style=social",alt:"into-the-graph"})))),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/into-the-graph/tree/typescript-rewrite"}),Object(r.b)("strong",{parentName:"a"},"Into the Graph"))," is a lightweight and fast ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.w3.org/RDF/"}),"RDF")," browser that just need a SPARQL endpoint URL to give a comfortable experience when exploring differents graphs."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Work in progress")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Into the Graph")," is still in development. It is mainly tested for biomedical SPARQL endpoints, such as ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://bio2rdf.org"}),"Bio2RDF")))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Access into-the-graph")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Access into-the-graph at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://maastrichtu-ids.github.io/into-the-graph"}),"https://maastrichtu-ids.github.io/into-the-graph")))),Object(r.b)("p",null,"This RDF linked data browser features:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A web-based UI to browse SPARQL endpoints content easily. Stateful  URL to resolve a specific URI in a specific SPARQL endpoint can be  defined using the ",Object(r.b)("inlineCode",{parentName:"li"},"uri")," and ",Object(r.b)("inlineCode",{parentName:"li"},"endpoint")," parameters. Tested with RDF4J (Ontotext GraphDB) and Virtuoso SPARQL endpoints."),Object(r.b)("li",{parentName:"ul"},"Visualize the data as a datatable, or a nodes-edges network"),Object(r.b)("li",{parentName:"ul"},"Easily search for concepts in the triplestore. Possibility to change the SPARQL query to define the custom query to use the Search index of  different triplestores in ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://trek.semanticscience.org/settings"}),"settings")," (Ontotext GraphDB and Virtuoso triplestores documented)."),Object(r.b)("li",{parentName:"ul"},"Insights about the content of the triplestore and its different graphs, using precomputed ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.w3.org/TR/hcls-dataset/"}),"HCLS descriptives metadata"),".")))}p.isMDXComponent=!0}}]);