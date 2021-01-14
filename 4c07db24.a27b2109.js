(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{137:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(r),u=a,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return r?n.a.createElement(m,p(p({ref:t},s),{},{components:r})):n.a.createElement(m,p({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),o=(r(0),r(137)),i={id:"d2s-dipper",title:"Use Monarch Dipper"},p={unversionedId:"d2s-dipper",id:"d2s-dipper",isDocsHomePage:!1,title:"Use Monarch Dipper",description:"Dipper is a Python package to generate RDF triples from common scientific resources. It has been used to build and expose RDF from multiple sources for the Monarch Initiative.",source:"@site/docs/d2s-dipper.md",slug:"/d2s-dipper",permalink:"/docs/d2s-dipper",editUrl:"https://github.com/MaastrichtU-IDS/d2s-docs/edit/master/website/docs/d2s-dipper.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1610650952,sidebar:"docs",previous:{title:"Run CWL workflows",permalink:"/docs/d2s-run"},next:{title:"Use BioThings Studio",permalink:"/docs/d2s-biothings"}},c=[{value:"Dipper Notebooks",id:"dipper-notebooks",children:[]},{value:"Download Monarch Dipper data",id:"download-monarch-dipper-data",children:[]}],s={toc:c};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://dipper.readthedocs.io/en/latest/"}),"Dipper")," is a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pypi.org/project/dipper/"}),"Python package")," to generate RDF triples from common scientific resources. It has been used to build and expose RDF from multiple sources for the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://monarchinitiative.org"}),"Monarch Initiative"),"."),Object(o.b)("p",null,"Dipper includes subpackages and modules to create graphical models of this data, including:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Models package for generating common sets of triples, including  common OWL axioms, complex genotypes, associations, evidence and  provenance models."),Object(o.b)("li",{parentName:"ul"},"Graph package for building graphs with RDFLib or streaming n-triples"),Object(o.b)("li",{parentName:"ul"},"Source package containing fetchers and parsers that interface with remote databases and web services")),Object(o.b)("h2",{id:"dipper-notebooks"},"Dipper Notebooks"),Object(o.b)("p",null,"2 Jupyter Notebooks proposed by the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://dipper.readthedocs.io/en/latest/notebooks.html"}),"Dipper documentation")," can be easily deploy in Jupyterlab:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://nbviewer.jupyter.org/github/monarch-initiative/dipper/blob/master/docs/notebooks/model-api-tutorial.ipynb"}),"Work with the Dipper Model API"),": see the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://dipper.readthedocs.io/en/latest/models.html"}),"documentation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://nbviewer.jupyter.org/github/monarch-initiative/dipper/blob/master/docs/notebooks/query_impc_evidence.ipynb"}),"Query associations from IMPC"),", including evidence and provenance modeled with SEPIO")),Object(o.b)("p",null,"Clone in ",Object(o.b)("inlineCode",{parentName:"p"},"workspace/notebooks"),", install requirements and start the Notebooks:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"d2s start notebook -d dipper\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Access at http://localhost:8888")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"See the documentation to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://dipper.readthedocs.io/en/latest/graphs.html"}),"work with graphs"))),Object(o.b)("p",null,"Or run Jupyterlab it directly using Docker:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'docker run --rm -it -p 8888:8888 -v $(pwd)/notebooks:/notebooks -e GIT_URL="https://github.com/MaastrichtU-IDS/covid-kg-notebooks" -e PASSWORD="<your_secret>" umids/jupyterlab:latest\n')),Object(o.b)("h2",{id:"download-monarch-dipper-data"},"Download Monarch Dipper data"),Object(o.b)("p",null,"Monarch Initiative data generated from Dipper can be accessed through multiple interfaces. The dipper output is quality checked and released on a regular basis. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"As RDF: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://archive.monarchinitiative.org/latest/rdf/"}),"https://archive.monarchinitiative.org/latest/rdf/"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The data model: OBO"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"E.g. ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://purl.obolibrary.org/obo/RO_0001000"}),"RO_0001000"),", ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://purl.obolibrary.org/obo/CL_0000236"}),"CL_0000236"),", rdfs:label, foaf:Person, dc:description, owl:sameAs, ",Object(o.b)("inlineCode",{parentName:"li"},"OBO:RO_0002162 OBO:NCBITaxon_9606")),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://biolink.github.io/biolink-model/docs/"}),"BioLink model")," is planned to be adopted in the future."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Neo4j dump: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://archive.monarchinitiative.org/latest/scigraph.tgz"}),"https://archive.monarchinitiative.org/latest/scigraph.tgz"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Python scripts to transform the sources: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/monarch-initiative/dipper/tree/master/dipper/sources"}),"https://github.com/monarch-initiative/dipper/tree/master/dipper/sources")))),Object(o.b)("p",null,"New sources ingestion can be wrote following ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://dipper.readthedocs.io/en/latest/writing_ingests.html"}),"this documentation"),"."))}l.isMDXComponent=!0}}]);