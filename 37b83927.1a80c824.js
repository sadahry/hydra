(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(7),o=(n(0),n(251)),r={id:"specializing_config",title:"Specializing configuration",sidebar_label:"Specializing configuration"},l={unversionedId:"patterns/specializing_config",id:"version-0.11/patterns/specializing_config",isDocsHomePage:!1,title:"Specializing configuration",description:"In some cases the desired configuration should depend on other configuration choices.",source:"@site/versioned_docs/version-0.11/patterns/specializing_config.md",slug:"/patterns/specializing_config",permalink:"/docs/0.11/patterns/specializing_config",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/patterns/specializing_config.md",version:"0.11",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1609781002,sidebar_label:"Specializing configuration",sidebar:"version-0.11/docs",previous:{title:"Creating objects",permalink:"/docs/0.11/patterns/objects"},next:{title:"Overview",permalink:"/docs/0.11/configure_hydra/intro"}},c=[{value:"initial config.yaml",id:"initial-configyaml",children:[]},{value:"modified config.yaml",id:"modified-configyaml",children:[]},{value:"dataset_model/cifar10_alexnet.yaml",id:"dataset_modelcifar10_alexnetyaml",children:[]}],s={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In some cases the desired configuration should depend on other configuration choices.\nFor example, You may want to use only 5 layers in your Alexnet model if the dataset of choice is cifar10, and the default 7 otherwise."),Object(o.b)("p",null,"We can start with a config that looks like this:"),Object(o.b)("h3",{id:"initial-configyaml"},"initial config.yaml"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - dataset: imagenet\n  - model: alexnet\n")),Object(o.b)("p",null,"We want to specialize the config based on the choice of the selected dataset and model:\nFurthermore, we only want to do it for cifar10 and alexnet and not for 3 other combinations."),Object(o.b)("p",null,"OmegaConf supports value interpolation, we can construct a value that would - at runtime - be a function of other values.\nThe idea is that we can add another element to the defaults list that would load a file name that depends on those two values:"),Object(o.b)("h3",{id:"modified-configyaml"},"modified config.yaml"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - dataset: imagenet\n  - model: alexnet\n  - dataset_model: ${defaults.0.dataset}_${defaults.1.model}\n    optional: true\n")),Object(o.b)("p",null,"Let's break this down:"),Object(o.b)("h4",{id:"dataset_model"},"dataset_model"),Object(o.b)("p",null,"The key ",Object(o.b)("inlineCode",{parentName:"p"},"dataset_model")," is an arbitrary directory, it can be anything unique that makes sense, including nested directory like ",Object(o.b)("inlineCode",{parentName:"p"},"dataset/model"),"."),Object(o.b)("h4",{id:"defaults0dataset_defaults1model"},"${defaults.0.dataset}_${defaults.1.model}"),Object(o.b)("p",null,"the value ",Object(o.b)("inlineCode",{parentName:"p"},"${defaults.0.dataset}_${defaults.1.model}")," is using OmegaConf's ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://omegaconf.readthedocs.io/en/latest/usage.html#variable-interpolation"}),"variable interpolation"),".\nAt runtime, that value would resolve to ",Object(o.b)("em",{parentName:"p"},"imagenet_alexnet"),", or ",Object(o.b)("em",{parentName:"p"},"cifar_resnet")," - depending on the values of defaults.dataset and defaults.model.\nThis a bit clunky because defaults contains a list (I hope to improve this in the future)"),Object(o.b)("h4",{id:"optional-true"},"optional: true"),Object(o.b)("p",null,"By default, Hydra would fail with an error if a config specified in the defaults does not exist.\nin this case we only want to specialize cifar10 + alexnet, not all 4 combinations.\nindication optional: true here tells Hydra to just continue if it can't find this file."),Object(o.b)("p",null,"When specializing config, you usually want to only specify what's different, and not the whole thing.\nWe want the model for alexnet, when trained on cifar - to have 5 layers."),Object(o.b)("h3",{id:"dataset_modelcifar10_alexnetyaml"},"dataset_model/cifar10_alexnet.yaml"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"model:\n  num_layers: 5\n")),Object(o.b)("p",null,"Let's check. Running with the default uses imagenet, so we don't get the specialized version of:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"$ python example.py \ndataset:\n  name: imagenet\n  path: /datasets/imagenet\nmodel:\n  num_layers: 7\n  type: alexnet\n")),Object(o.b)("p",null,"Running with cifar10 dataset, we do get 5 for num_layers:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"$ python example.py dataset=cifar10\ndataset:\n  name: cifar10\n  path: /datasets/cifar10\nmodel:\n  num_layers: 5\n  type: alexnet\n")))}d.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,m=u["".concat(r,".").concat(f)]||u[f]||p[f]||o;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);