(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{137:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var r=a(0),o=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),i=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},s=function(e){var t=i(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=i(a),h=r,u=s["".concat(c,".").concat(h)]||s[h]||d[h]||n;return a?o.a.createElement(u,b(b({ref:t},p),{},{components:a})):o.a.createElement(u,b({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=h;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var p=2;p<n;p++)c[p]=a[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return i}));var r=a(3),o=a(7),n=(a(0),a(137)),c={id:"store-rdf",title:"Store RDF data"},b={unversionedId:"store-rdf",id:"store-rdf",isDocsHomePage:!1,title:"Store RDF data",description:"Store RDF data in a triplestore accessible by querying a SPARQL endpoint.",source:"@site/docs/store-rdf.md",slug:"/store-rdf",permalink:"/docs/store-rdf",editUrl:"https://github.com/MaastrichtU-IDS/d2s-docs/edit/master/website/docs/store-rdf.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1610650952,sidebar:"docs",previous:{title:"Deploy workflows",permalink:"/docs/workflow-github"},next:{title:"Publish FAIR data",permalink:"/docs/publish-fair-data"}},l=[{value:"Publish to our public GraphDB triplestore",id:"publish-to-our-public-graphdb-triplestore",children:[{value:"Create the GraphDB repository",id:"create-the-graphdb-repository",children:[]},{value:"Edit your repository access",id:"edit-your-repository-access",children:[]},{value:"Optional: enable GraphDB search index",id:"optional-enable-graphdb-search-index",children:[]}]},{value:"List of RDF triplestores",id:"list-of-rdf-triplestores",children:[{value:"Ontotext GraphDB",id:"ontotext-graphdb",children:[]},{value:"Virtuoso",id:"virtuoso",children:[]},{value:"Blazegraph",id:"blazegraph",children:[]},{value:"Jena Fuseki",id:"jena-fuseki",children:[]},{value:"AllegroGraph",id:"allegrograph",children:[]},{value:"AnzoGraph",id:"anzograph",children:[]},{value:"Linked Data Fragments Server",id:"linked-data-fragments-server",children:[]}]},{value:"Property graphs",id:"property-graphs",children:[{value:"Neo4j",id:"neo4j",children:[]}]},{value:"Additional triplestores",id:"additional-triplestores",children:[{value:"Stardog",id:"stardog",children:[]},{value:"MarkLogic",id:"marklogic",children:[]},{value:"RDFox",id:"rdfox",children:[]}]}],p={toc:l};function i(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Store RDF data in a triplestore accessible by querying a SPARQL endpoint."),Object(n.b)("h2",{id:"publish-to-our-public-graphdb-triplestore"},"Publish to our public GraphDB triplestore"),Object(n.b)("p",null,"Create a new repository on our GraphDB triplestore at ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphdb.dumontierlab.com/"}),"https://graphdb.dumontierlab.com/")),Object(n.b)("div",{className:"admonition admonition-info alert alert--info"},Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Ask for permissions")),Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"Ask us to get the permissions to create new repositories after creating an account."))),Object(n.b)("h3",{id:"create-the-graphdb-repository"},"Create the GraphDB repository"),Object(n.b)("p",null,"\ud83d\udc69\u200d\ud83d\udcbb Go to ",Object(n.b)("strong",{parentName:"p"},"Setup")," > ",Object(n.b)("strong",{parentName:"p"},"Repositories")," > ",Object(n.b)("strong",{parentName:"p"},"Create Repository")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Or click here: ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://graphdb.dumontierlab.com/repository/create"}),"https://graphdb.dumontierlab.com/repository/create"))),Object(n.b)("p",null,"\ud83d\udc68\u200d\ud83d\udcbb Choose the settings of your repository (leave the default if not mentioned here):"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"Ruleset"),": use ",Object(n.b)("strong",{parentName:"li"},"RDFS-Plus (Optimized)")," by default, or a OWL ruleset if you are performing reasoning using OWL ontologies"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"Supports SHACL validation"),": enable if you plan on using SHACL shapes to validate the RDF loaded in the repository. ",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Visit ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://maastrichtu-ids.github.io/shapes-of-you"}),"https://maastrichtu-ids.github.io/shapes-of-you")," to find SHACL Shapes"),Object(n.b)("li",{parentName:"ul"},"Add new shapes to IDS Shapes repository: ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/MaastrichtU-IDS/shacl-shapes"}),"https://github.com/MaastrichtU-IDS/shacl-shapes")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"Use context index"),": ",Object(n.b)("strong",{parentName:"li"},"enable")," this to index the contexts (aka. graphs)"),Object(n.b)("li",{parentName:"ul"},"For large dataset:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"Entity index size"),": increase this to ",Object(n.b)("strong",{parentName:"li"},"999999999")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"Entity ID bit-size"),": increase this to ",Object(n.b)("strong",{parentName:"li"},"40"))))),Object(n.b)("p",null,"To access your repository:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"SPARQL endpoint at ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://graphdb.dumontierlab.com/repositories/my-repository"}),"https://graphdb.dumontierlab.com/repositories/my-repository")),Object(n.b)("li",{parentName:"ul"},"SPARQL endpoint to run update queries (e.g. ",Object(n.b)("inlineCode",{parentName:"li"},"INSERT"),"): ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://graphdb.dumontierlab.com/repositories/my-repository/statements"}),"https://graphdb.dumontierlab.com/repositories/my-repository/statements")),Object(n.b)("li",{parentName:"ul"},"GraphDB admin web UI: ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://graphdb.dumontierlab.com"}),"https://graphdb.dumontierlab.com")," and change the repository using the button at the top right of the screen.")),Object(n.b)("h3",{id:"edit-your-repository-access"},"Edit your repository access"),Object(n.b)("p",null,"By default your repository will not be available publicly."),Object(n.b)("p",null,"\ud83d\udc69\u200d\ud83d\udcbb Go to ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",Object(r.a)({parentName:"strong"},{href:"https://graphdb.dumontierlab.com/users"}),"Users and Access"))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Change the ",Object(n.b)("strong",{parentName:"li"},"Free Access Settings")," (top right of the page) to enable public access to read the SPARQL endpoint of your repository",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Find your repository and enable ",Object(n.b)("strong",{parentName:"li"},"Read")," access (checkbox on the left)"))),Object(n.b)("li",{parentName:"ul"},"You can also give ",Object(n.b)("strong",{parentName:"li"},"Write")," access to other users",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"We usually give ",Object(n.b)("strong",{parentName:"li"},"Write")," access to the ",Object(n.b)("inlineCode",{parentName:"li"},"import_user")," to be used in automated workflow (to automatically upload new data to the repository)")))),Object(n.b)("h3",{id:"optional-enable-graphdb-search-index"},"Optional: enable GraphDB search index"),Object(n.b)("p",null,"You can easily enable GraphDB ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://lucene.apache.org/"}),"Lucene search index")," to quickly search string in your triplestore"),Object(n.b)("p",null,"Here is an example to create a search index for the ",Object(n.b)("inlineCode",{parentName:"p"},"rdfs:label")," and ",Object(n.b)("inlineCode",{parentName:"p"},"dct:description")," properties."),Object(n.b)("p",null,"\ud83d\udc68\u200d\ud83d\udcbb Running this in your GraphDB repository SPARQL editor will insert the triples and the search index will be created (just wait a bit)"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-SPARQL"}),'PREFIX luc: <http://www.ontotext.com/owlim/lucene#>\nINSERT DATA { \n    # luc:moleculeSize luc:setParam "1" .\n    luc:includePredicates luc:setParam "http://www.w3.org/2000/01/rdf-schema#label http://purl.org/dc/terms/description" .\n    luc:useRDFRank luc:setParam "yes" .\n    luc:searchIndex luc:createIndex "true" .\n}\n')),Object(n.b)("p",null,"Query the GraphDB search index:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-SPARQL"}),"PREFIX luc: <http://www.ontotext.com/owlim/lucene#>\nSELECT ?foundUri ?foundLabel {\n    ?foundLabel luc:searchIndex 'TEXT_TO_SEARCH*' ;\n    luc:score ?score .\n    ?foundUri ?p ?foundLabel .\n} ORDER BY ?score LIMIT 200\n")),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Wildcard")),Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"We are using a ",Object(n.b)("inlineCode",{parentName:"p"},"*")," wildcard at the end to match all strings starting with the string ",Object(n.b)("inlineCode",{parentName:"p"},"TEXT_TO_SEARCH")))),Object(n.b)("h2",{id:"list-of-rdf-triplestores"},"List of RDF triplestores"),Object(n.b)("h3",{id:"ontotext-graphdb"},"Ontotext GraphDB"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/r/ontotext/graphdb/"}),Object(n.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/docker/pulls/ontotext/graphdb",alt:"Docker Image Version (latest by date)"})))),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ontotext.com/"}),"Ontotext GraphDB\u2122")," triplestore includes a web UI, various ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"http://graphdb.ontotext.com/documentation/free/exploring-data.html"}),"data visualizations"),", ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"http://graphdb.ontotext.com/documentation/free/loading-data-using-ontorefine.html"}),"OntoRefine"),", ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"http://graphdb.ontotext.com/documentation/free/shacl-validation.html"}),"SHACL validation"),", RDFS/OWL ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"http://graphdb.ontotext.com/documentation/standard/reasoning.html"}),"reasoning")," to infer new triples and the possibility to deploy multiple repositories. It uses mainly the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://rdf4j.org/"}),"rdf4j")," framework."),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ontotext.com/products/graphdb/graphdb-free/"}),"Download the zip file")," of the latest GraphDB standalone free version, and place it in the same folder as the ",Object(n.b)("inlineCode",{parentName:"p"},"Dockerfile")," before building the image."),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"docker build -t graphdb --build-arg version=9.3.0 .\ndocker run -d --rm --name graphdb -p 7200:7200 \\\n    -v $(pwd)/workspace/graphdb:/opt/graphdb/home \\\n    -v $(pwd)/workspace/import:/root/graphdb-import \\\n    graphdb\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Access at ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:7200/"}),"http://localhost:7200/"))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"See the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"http://graphdb.ontotext.com/documentation/"}),"official Ontotext GraphDB\u2122 documentation")," and the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Ontotext-AD/graphdb-docker"}),"source code for Docker images")," for more details.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ontotext.com/products/graphdb/graphdb-enterprise/"}),"Obtain a license")," for more features such as performance improvement, easy deployment using the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/r/ontotext/graphdb/"}),"official DockerHub image")," or distributed deployment on multiple nodes with Kubernetes.")),Object(n.b)("p",null,"GraphDB allow to perform ",Object(n.b)("strong",{parentName:"p"},"bulk load on large files")," using a second container:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Change the repository to be created and loaded in ",Object(n.b)("inlineCode",{parentName:"li"},"workspace/graphdb/preload-config.ttl")," (default: ",Object(n.b)("inlineCode",{parentName:"li"},"demo"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Put the files to be loaded")," in ",Object(n.b)("inlineCode",{parentName:"li"},"workspace/import/preload")," \ud83d\udce9"),Object(n.b)("li",{parentName:"ul"},"Start ",Object(n.b)("inlineCode",{parentName:"li"},"graphdb-preload")," docker container")),Object(n.b)("p",null,"When the preload has completed, the ",Object(n.b)("inlineCode",{parentName:"p"},"graphdb-preload")," container will stop, you can then copy the loaded repository from ",Object(n.b)("inlineCode",{parentName:"p"},"workspace/graphdb/preload-data/repositories")," to the running GraphDB folder:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cp -r workspace/graphdb/preload-data/repositories/* workspace/graphdb/data/repositories/\n")),Object(n.b)("p",null,"And access the newly loaded repository in the running GraphDB instance without downtime."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"See additional ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/guide-graphdb"}),"d2s documentation about setting up GraphDB"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"virtuoso"},"Virtuoso"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tenforce/docker-virtuoso"}),Object(n.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/tenforce/docker-virtuoso?label=GitHub&style=social",alt:"GitHub"})))),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/r/tenforce/virtuoso"}),Object(n.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/docker/pulls/tenforce/virtuoso",alt:"Docker Image Version (latest by date)"})))),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://virtuoso.openlinksw.com/"}),"OpenLink Virtuoso")," triplestore. Available on ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/r/tenforce/virtuoso/"}),"DockerHub"),"."),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"docker run --name virtuoso \\\n    -p 8890:8890 -p 1111:1111 \\\n    -e DBA_PASSWORD=dba \\\n    -e SPARQL_UPDATE=true \\\n    -e DEFAULT_GRAPH=https://w3id.org/d2s/graph \\\n    -v $(pwd)/workspace/virtuoso:/data \\\n    -d tenforce/virtuoso\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Access at http://localhost:8890/ and SPARQL endpoint at http://localhost:8890/sparql.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Admin username: ",Object(n.b)("inlineCode",{parentName:"p"},"dba")," ")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"CORS can be enabled following ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"http://vos.openlinksw.com/owiki/wiki/VOS/VirtTipsAndTricksCORsEnableSPARQLURLs"}),"those instructions"),". See our complete ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/guide-virtuoso"}),"Virtuoso documentation")," for more details.")),Object(n.b)("p",null,"Clear the Virtuoso triplestore using this command:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'docker exec -it d2s-virtuoso isql-v -U dba -P dba exec="RDF_GLOBAL_RESET ();"\n')),Object(n.b)("hr",null),Object(n.b)("h3",{id:"blazegraph"},"Blazegraph"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/blazegraph/database"}),Object(n.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/blazegraph/database?label=GitHub&style=social",alt:"GitHub"})))),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/r/lyrasis/blazegraph"}),Object(n.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/docker/pulls/lyrasis/blazegraph",alt:"Docker Image Version (latest by date)"})))),Object(n.b)("p",null,"A high-performance ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://blazegraph.com/"}),"RDF graph database"),". See its ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/lyrasis/docker-blazegraph"}),"documentation for Docker"),". "),Object(n.b)("p",null,"It uses mainly the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://rdf4j.org/"}),"rdf4j")," framework."),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"# Start triplestore with specific UID and GID for the bulk load (UI)\n# Tested on Ubuntu with $UID=1000 and nothing in $GROUPS (by default)\ndocker run --name blazegraph \\\n  -e BLAZEGRAPH_UID=$UID \\\n  -e BLAZEGRAPH_GID=$GROUPS \\\n  -p 8082:8080 \\\n  -v $(pwd)/workspace/import:/data \\\n  lyrasis/blazegraph:2.1.5\n\n# To bulk load: create the dataloader.txt file\nnamespace=kb\npropertyFile=/RWStore.properties\nfileOrDirs=/data\nformat=n-triples\ndefaultGraph=http://defaultGraph\nquiet=false\nverbose=0\nclosure=false\ndurableQueues=true\n\n# And submit it using a HTTP POST query to load all nt files in /data/d2s-workspace\ncurl -X POST \\\n  --data-binary @dataloader.txt \\\n  --header 'Content-Type:text/plain' \\\nhttp://localhost:8889/bigdata/dataloader\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"UID and Group ID needs to be set in order to have the right permission to bulk load a file (example given for Ubuntu). And ",Object(n.b)("inlineCode",{parentName:"p"},"RWStore.properties")," can be rewritten, see ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/lyrasis/docker-blazegraph/blob/master/data/RWStore.properties"}),"example"),". ")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Access UI at http://localhost:8082/bigdata")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"SPARQL endpoint at http://localhost:8080/bigdata/sparql (original port)")),Object(n.b)("p",null,"To clear the graph go to the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:8082/bigdata/#update"}),"update tab")," and enter ",Object(n.b)("inlineCode",{parentName:"p"},"clear all")),Object(n.b)("p",null,"Follow ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://sourceforge.net/p/bigdata/discussion/676946/thread/bf76fb62/"}),"those instructions")," to enable CORS on Blazegraph SPARQL endpoint."),Object(n.b)("hr",null),Object(n.b)("h3",{id:"jena-fuseki"},"Jena Fuseki"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/r/stain/jena-fuseki"}),Object(n.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/docker/pulls/stain/jena-fuseki",alt:"Docker Image Version (latest by date)"})))),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"http://jena.apache.org/documentation/fuseki2/index.html"}),"Fuseki")," is a SPARQL server on top of ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://jena.apache.org/documentation/tdb/"}),"Apache TDB")," RDF store, for single machines. It uses mainly the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://jena.apache.org/"}),"Jena")," framework."),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"docker run -d --name fuseki -p 3030:3030 -v $(pwd)/workspace/fuseki:/fuseki -v $(pwd)/workspace/import:/staging stain/jena-fuseki\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Access at http://localhost:3030")),Object(n.b)("p",null,"Bulk load files in ",Object(n.b)("inlineCode",{parentName:"p"},"demo")," dataset from ",Object(n.b)("inlineCode",{parentName:"p"},"workspace/import")," (container needs to be stopped):"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"docker-compose -f d2s-core/docker-compose.yml \\\n  run -v $(pwd)/workspace/import:/staging \\\n  stain/jena-fuseki ./load.sh demo test1.ttl test2.nt\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"If you don't specify any filenames to ",Object(n.b)("inlineCode",{parentName:"p"},"load.sh"),", all filenames directly under ",Object(n.b)("inlineCode",{parentName:"p"},"/staging")," that match these GLOB patterns will be loaded:"),Object(n.b)("pre",{parentName:"blockquote"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"*.rdf *.rdf.gz *.ttl *.ttl.gz *.owl *.owl.gz *.nt *.nt.gz *.nquads *.nquads.gz\n"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"allegrograph"},"AllegroGraph"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/franzinc/docker-agraph"}),Object(n.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/franzinc/docker-agraph?label=GitHub&style=social",alt:"GitHub"})))),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/r/franzinc/agraph"}),Object(n.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/docker/pulls/franzinc/agraph",alt:"Docker Image Version (latest by date)"})))),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://franz.com/agraph/"}),"AllegroGraph\xae")," is a modern, high-performance, persistent graph database. It supports SPARQL, RDFS++, and Prolog reasoning from numerous client applications. "),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"docker run -d -m 1g -v $(pwd)/workspace/allegrograph:/data -p 10000-10035:10000-10035 --shm-size 1g --name allegrograph franzinc/agraph:v6.6.0\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Access at http://localhost:10035")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Default login: ",Object(n.b)("inlineCode",{parentName:"p"},"test")," / ",Object(n.b)("inlineCode",{parentName:"p"},"xyzzy"))),Object(n.b)("p",null,"See ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://franz.com/agraph/support/documentation/current/agload.html"}),"official documentation")," for bulk load."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"TODO:")," fix shared volumes")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"anzograph"},"AnzoGraph"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/r/cambridgesemantics/anzograph"}),Object(n.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/docker/pulls/cambridgesemantics/anzograph",alt:"Docker Image Version (latest by date)"})))),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.cambridgesemantics.com/anzograph/"}),"AnzoGraph\xae DB")," by ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.cambridgesemantics.com/"}),"Cambridge Semantics"),". See its ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.cambridgesemantics.com/anzograph/userdoc/deploy-docker.htm"}),"official documentation")," to deploy with Docker."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Unregistered Free edition limited to 8G RAM, single user and single node deployment. ")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.cambridgesemantics.com/anzograph/userdoc/register-license.htm"}),"Register")," to access the 16G single node deployment for free.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Deploy AnzoGraph on multi-server cluster for horizontal scaling with the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://customercenter.cambridgesemantics.com/products/anzograph/comparisonMatrix.html"}),"Enterprise Edition \ud83d\udcb6")))),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"docker run -d -p 8086:8080 -p 8443:8443 --name anzograph -v $(pwd)/workspace/anzograph:/opt/anzograph cambridgesemantics/anzograph:2.0.2\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Access at http://localhost:8086")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Default login: ",Object(n.b)("inlineCode",{parentName:"p"},"admin")," / ",Object(n.b)("inlineCode",{parentName:"p"},"Passw0rd1"),".")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.cambridgesemantics.com/anzograph/userdoc/deploy-k8s-helm.htm"}),"Kubernetes deployment")," available using Helm.")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"linked-data-fragments-server"},"Linked Data Fragments Server"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/LinkedDataFragments/Server.js"}),Object(n.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/LinkedDataFragments/Server.js?label=GitHub&style=social",alt:"GitHub"})))),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/r/linkeddatafragments/server.js"}),Object(n.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/docker/pulls/linkeddatafragments/server.js",alt:"Docker Image Version (latest by date)"})))),Object(n.b)("p",null,"Technically not a triplestore, server supporting the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://mementoweb.org/guide/rfc/"}),"Memento")," protocol to timestamped SPARQL querying over multiple linked data sources, e.g. ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.rdfhdt.org/"}),"HDT")," or ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.w3.org/TR/sparql11-query/"}),"SPARQL"),"."),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'docker run -p 8085:3000 -t -i --rm \\\n    -v $(pwd)/workspace/hdt-archives:/data \\\n    -v $(pwd)/workspace/ldfserver-config.json:/tmp/config.json \\\n    umids/ldf-server:latest /tmp/config.json\n\n# Query example\ncurl -IL -H "Accept-Datetime: Wed, 15 Apr 2013 00:00:00 GMT" http://localhost:3000/timegate/dbpedia?subject=http%3A%2F%2Fdata2services%2Fmodel%2Fgo-category%2Fprocess\n')),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"HDT archives goes in ",Object(n.b)("inlineCode",{parentName:"p"},"workspace/hdt-archives")," and the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/LinkedDataFragments/Server.js/blob/develop/config/config-example-memento.json"}),"config file")," is in ",Object(n.b)("inlineCode",{parentName:"p"},"workspace/ldfserver-config.json"))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Access at http://localhost:8085")),Object(n.b)("hr",null),Object(n.b)("h2",{id:"property-graphs"},"Property graphs"),Object(n.b)("h3",{id:"neo4j"},"Neo4j"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/neo4j/neo4j"}),Object(n.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/neo4j/neo4j?label=GitHub&style=social",alt:"GitHub"})))),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/r/_/neo4j"}),Object(n.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/docker/pulls/_/neo4j",alt:"Docker Image Version (latest by date)"})))),Object(n.b)("p",null,"Not supporting RDF, ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://neo4j.com/"}),"Neo4j")," is a property graph database. It uses ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://neo4j.com/docs/cypher-manual/current/"}),"Cypher")," as query language."),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"docker run -p 7474:7474 -p 7687:7687 -v $(pwd)/workspace/neo4j:/data neo4j\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Access at http://localhost:7474, volume shared at ",Object(n.b)("inlineCode",{parentName:"p"},"workspace/neo4j"))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Login with ",Object(n.b)("inlineCode",{parentName:"p"},"neoj4")," / ",Object(n.b)("inlineCode",{parentName:"p"},"neo4j")," and change the password.virtu")),Object(n.b)("hr",null),Object(n.b)("h2",{id:"additional-triplestores"},"Additional triplestores"),Object(n.b)("h3",{id:"stardog"},"Stardog"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/r/stardog/stardog"}),Object(n.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/docker/pulls/stardog/stardog",alt:"Docker Image Version (latest by date)"})))),Object(n.b)("p",null,"Licensed RDF triplestore \ud83d\udcdc"),Object(n.b)("p",null,"See the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.stardog.com/docs/#_docker"}),"official Stardog documentation")," for Docker. A ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/stardog-union/stardog.js"}),"JavaScript wrapper is available")," to communicate with Stardog API and SPARQL endpoint."),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'docker run -v $(pwd)/workspace/stardog-license:/var/opt/stardog -e STARDOG_SERVER_JAVA_ARGS="-Xmx8g -Xms8g -XX:MaxDirectMemorySize=2g" stardog/stardog:latest\n')),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"\u2714\ufe0f If you have a Stardog license, then put ",Object(n.b)("inlineCode",{parentName:"p"},"stardog-license-key.bin")," in the ",Object(n.b)("inlineCode",{parentName:"p"},"workspace/stardog-license")," folder.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"\u274c If you don't have a license key, you will be able to retrieve a trial license-key via the command line once you start Stardog.")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"marklogic"},"MarkLogic"),Object(n.b)("p",null,"Licensed RDF triplestore \ud83d\udcdc"),Object(n.b)("p",null,"Follow the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/alan-johnson/docker-marklogic"}),"GitHub Docker instructions")," to deploy it."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"You will need to download the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.marklogic.com/products/marklogic-server/10.0"}),"MarkLogic Server \ud83d\udce5"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"rdfox"},"RDFox"),Object(n.b)("p",null,"Licensed RDF triplestore \ud83d\udcdc"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.oxfordsemantic.tech/"}),"RDFox")," is a in-memory triplestore only supporting triples. RDFox is a main-memory, scalable, centralized data store that allows users to efficiently manage graph-structured data represented according to the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.w3.org/RDF/"}),"RDF data model"),", run reasoning engines, and query that data using the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.w3.org/TR/sparql11-query/"}),"SPARQL 1.1 query language"),". "),Object(n.b)("p",null,"See the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.oxfordsemantic.tech/docker.html"}),"documentation")," to deploy it using docker."))}i.isMDXComponent=!0}}]);