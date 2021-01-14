(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{117:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var o=a(3),r=a(7),n=(a(0),a(128)),i={id:"choose-data-model",title:"Choose a data model"},c={unversionedId:"choose-data-model",id:"choose-data-model",isDocsHomePage:!1,title:"Choose a data model",description:"You will need to define the class and relations for the properties in your data. The easiest way is to find classes and properties in existing model (aka. ontologies). Some properties are standard like rdflabel, but for more specific concepts the best is to find an existing data model matching your model.",source:"@site/docs/choose-data-model.md",slug:"/choose-data-model",permalink:"/docs/choose-data-model",editUrl:"https://github.com/MaastrichtU-IDS/d2s-docs/edit/master/website/docs/choose-data-model.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1610636440,sidebar:"docs",previous:{title:"Create a repository",permalink:"/docs/create-repository"},next:{title:"Convert with RML",permalink:"/docs/convert-rml"}},l=[{value:"Search for ontologies",id:"search-for-ontologies",children:[]},{value:"Common ontologies",id:"common-ontologies",children:[]},{value:"Ontology design with Prot\xe9g\xe9",id:"ontology-design-with-prot\xe9g\xe9",children:[]},{value:"Resolve prefixes",id:"resolve-prefixes",children:[]}],b={toc:l};function s(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"You will need to define the class and relations for the properties in your data. The easiest way is to find classes and properties in existing model (aka. ontologies). Some properties are standard like ",Object(n.b)("inlineCode",{parentName:"p"},"rdf:type")," and  ",Object(n.b)("inlineCode",{parentName:"p"},"rdfs:label"),", but for more specific concepts the best is to find an existing data model matching your model."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Feel free to ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://gitter.im/um-dsri/data2services"}),"contact us")," to ask for help with choosing a data model.")),Object(n.b)("h2",{id:"search-for-ontologies"},"Search for ontologies"),Object(n.b)("p",null,"Search for relevant existing models in ontology repositories:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://bioportal.bioontology.org/recommender"}),"BioPortal")," for biomedical concepts by the NCBI."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.ebi.ac.uk/ols/ontologies"}),"OntologyLookupService")," by the EBI"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"http://agroportal.lirmm.fr/recommender"}),"AgroPortal")," for agronomy by INRIA."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"http://ecoportal.lifewatchitaly.eu/"}),"EcoPortal")," for ecology by Life Watch Italy.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"The ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://bioportal.bioontology.org/recommender"}),"BioPortal Recommender")," and ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://bioportal.bioontology.org/search"}),"Search")," services are efficient to look for concepts in most existing biomedical ontologies.")),Object(n.b)("h2",{id:"common-ontologies"},"Common ontologies"),Object(n.b)("p",null,"The ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://lov.linkeddata.es/dataset/lov/"}),"Linked Open Vocabulary (LOV)")," provide an overview of existing ontologies and the links between them."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/MaastrichtU-IDS/semanticscience"}),Object(n.b)("strong",{parentName:"a"},"Semanticscience Integrated Ontology")," (SIO)"),", a simple, integrated ontology of types and relations for rich description of objects, processes and their attributes."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://biolink.github.io/biolink-model/"}),Object(n.b)("strong",{parentName:"a"},"BioLink Model")),", A high level datamodel of biological entities (",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://biolink.github.io/biolink-model/docs/Gene"}),"genes"),", ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://biolink.github.io/biolink-model/docs/Disease"}),"diseases"),", ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://biolink.github.io/biolink-model/docs/Phenotype"}),"phenotypes"),", ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://biolink.github.io/biolink-model/docs/Pathway"}),"pathways"),", ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://biolink.github.io/biolink-model/docs/IndividualOrganism"}),"individuals"),", ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://biolink.github.io/biolink-model/docs/ChemicalSubstance"}),"substances"),", etc) and their ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://biolink.github.io/biolink-model/docs/Association"}),"associations"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://schema.org/docs/schemas.html"}),Object(n.b)("strong",{parentName:"a"},"Schema.org")),", a collaborative project to define schemes for structured data on the Internet, on web pages, in email messages, and beyond.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Various classes described such as ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://schema.org/Person"}),"schema:Person"),", ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://schema.org/MedicalGuideline"}),"schema:MedicalGuideline"),", ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://schema.org/Review"}),"schema:Review"),", ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://schema.org/ScholarlyArticle"}),"schema:ScholarlyArticle"),", ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://schema.org/MedicalScholarlyArticle"}),"schema:MedicalScholarlyArticle"),", ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://schema.org/Dataset"}),"schema:Dataset"),", ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://schema.org/docs/full.html"}),"etc"),"."),Object(n.b)("li",{parentName:"ul"},"Extensions available, such as ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://bioschemas.org/profiles/Dataset/0.3-RELEASE-2019_06_14/"}),"BioSchemas")," for biological data"),Object(n.b)("li",{parentName:"ul"},"Alternatively you can look into ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developers.google.com/search/docs/data-types/article"}),"Google Data Types"),", which are mainly built from schema.org and allow to describe and index your website using RDF (JSON-LD)"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://dublincore.org/specifications/dublin-core/dcmi-terms"}),Object(n.b)("strong",{parentName:"a"},"DublinCore")," (dc, dct, dctypes)"),", one of the most generic vocabulary (includes properties such as ",Object(n.b)("inlineCode",{parentName:"li"},"dc:identifier"),", ",Object(n.b)("inlineCode",{parentName:"li"},"dct:description"),", ",Object(n.b)("inlineCode",{parentName:"li"},"dct:creator"),", ",Object(n.b)("inlineCode",{parentName:"li"},"dct:license"),", ",Object(n.b)("inlineCode",{parentName:"li"},"dct:rights"),"...)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://pav-ontology.github.io/pav/"}),Object(n.b)("strong",{parentName:"a"},"PAV"),": Provenance, Authoring and Versioning ontology")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.w3.org/TR/prov-o/"}),Object(n.b)("strong",{parentName:"a"},"PROV"),": The Provenance Ontology"),", another ontology to describe provenance more in detail"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.w3.org/TR/vocab-dcat-2/"}),Object(n.b)("strong",{parentName:"a"},"DCAT"),": Data Catalog Vocabulary"),", to describe datasets"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://bioportal.bioontology.org/ontologies/NCIT"}),Object(n.b)("strong",{parentName:"a"},"NCIT"),": National Cancer Institute Thesaurus"),", a vocabulary for clinical care, translational and basic research, and public information and administrative activities.")),Object(n.b)("h2",{id:"ontology-design-with-prot\xe9g\xe9"},"Ontology design with Prot\xe9g\xe9"),Object(n.b)("p",null,Object(n.b)("img",{alt:"protege",src:a(213).default})),Object(n.b)("p",null,"You can use the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://protege.stanford.edu/"}),"Prot\xe9g\xe9 ontology editor")," to build your ontology."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"http://protegeproject.github.io/protege/installation/"}),"Install Prot\xe9g\xe9")," on your computer for better performance than the web hosted service."),Object(n.b)("li",{parentName:"ul"},"Or use Web Prot\xe9g\xe9 for its collaborative features.")),Object(n.b)("h2",{id:"resolve-prefixes"},"Resolve prefixes"),Object(n.b)("p",null,Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"http://prefix.cc"}),"http://prefix.cc")," is a handy service to resolve prefixes."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"E.g. ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"http://prefix.cc/bl"}),"http://prefix.cc/bl"))))}s.isMDXComponent=!0},128:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var o=a(0),r=a.n(o);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=o,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||n;return a?r.a.createElement(h,c(c({ref:t},b),{},{components:a})):r.a.createElement(h,c({ref:t},b))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var b=2;b<n;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},213:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/protege-logo-0757c0919747e4884a2ae56f76667ab3.png"}}]);