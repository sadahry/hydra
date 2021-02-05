(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{268:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(c,".").concat(u)]||b[u]||s[u]||i;return n?r.a.createElement(m,o(o({ref:t},d),{},{components:n})):r.a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var d=2;d<i;d++)c[d]=n[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(268)),c={id:"adding_a_package_directive",title:"Adding an @package directive",hide_title:!0},o={unversionedId:"upgrades/0.11_to_1.0/adding_a_package_directive",id:"upgrades/0.11_to_1.0/adding_a_package_directive",isDocsHomePage:!1,title:"Adding an @package directive",description:"Adding an @package directive",source:"@site/docs/upgrades/0.11_to_1.0/adding_a_package_directive.md",slug:"/upgrades/0.11_to_1.0/adding_a_package_directive",permalink:"/docs/next/upgrades/0.11_to_1.0/adding_a_package_directive",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/upgrades/0.11_to_1.0/adding_a_package_directive.md",version:"current",lastUpdatedBy:"Shagun Sodhani",lastUpdatedAt:1612488887,sidebar:"docs",previous:{title:"Config path changes",permalink:"/docs/next/upgrades/0.11_to_1.0/config_path_changes"},next:{title:"strict flag mode deprecation",permalink:"/docs/next/upgrades/0.11_to_1.0/strict_mode_flag_deprecated"}},l=[{value:"Adding an @package directive",id:"adding-an-package-directive",children:[]},{value:"Upgrade instructions:",id:"upgrade-instructions",children:[{value:"Recommended (~10 seconds per config file):",id:"recommended-10-seconds-per-config-file",children:[]},{value:"Alternative (not recommended):",id:"alternative-not-recommended",children:[]},{value:"Example for <code>case 1</code>:",id:"example-for-case-1",children:[]},{value:"Example for <code>case 2</code>:",id:"example-for-case-2",children:[]}]}],d={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"adding-an-package-directive"},"Adding an @package directive"),Object(i.b)("p",null,"Hydra 1.0 introduces the concept of a config ",Object(i.b)("inlineCode",{parentName:"p"},"package"),". A ",Object(i.b)("inlineCode",{parentName:"p"},"package")," is the common parent\npath of all nodes in the config file."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In Hydra 0.11, there was an implicit default of ",Object(i.b)("inlineCode",{parentName:"li"},"_global_"),' ("")'),Object(i.b)("li",{parentName:"ul"},"In Hydra 1.1 the default will be ",Object(i.b)("inlineCode",{parentName:"li"},"_group_")," (the name of the config group)."),Object(i.b)("li",{parentName:"ul"},"Hydra 1.0 maintains the implicit default of ",Object(i.b)("inlineCode",{parentName:"li"},"_global_")," and issues a warning for\nany config group file without a ",Object(i.b)("inlineCode",{parentName:"li"},"@package")," directive.")),Object(i.b)("p",null,"By adding an explicit ",Object(i.b)("inlineCode",{parentName:"p"},"@package")," to these configs now, you guarantee that your configs\nwill not break when you upgrade to Hydra 1.1."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@package")," directive is described in details ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/advanced/overriding_packages"}),"here"),".  "),Object(i.b)("h2",{id:"upgrade-instructions"},"Upgrade instructions:"),Object(i.b)("h3",{id:"recommended-10-seconds-per-config-file"},"Recommended (~10 seconds per config file):"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Case 1"),": For config files where the common parent path matches the config group name:  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"# @package _group_")," to the top of every config group file"),Object(i.b)("li",{parentName:"ul"},"Remove the common parent path config file like in the example below.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Case 2"),": For files without a common parent path:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"# @package _global_"),".")),Object(i.b)("h3",{id:"alternative-not-recommended"},"Alternative (not recommended):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you do not want to restructure the config at this time use ",Object(i.b)("inlineCode",{parentName:"li"},"Case 2")," for all your config files.")),Object(i.b)("h3",{id:"example-for-case-1"},"Example for ",Object(i.b)("inlineCode",{parentName:"h3"},"case 1"),":"),Object(i.b)("h4",{id:"before"},"Before"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'}),"db:\n  driver: mysql\n  host: localhost\n  port: 3306\n")),Object(i.b)("h4",{id:"after"},"After"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'}),"# @package _group_\ndriver: mysql\nhost: localhost\nport: 3306\n")),Object(i.b)("p",null,"The interpretations of the before and after files are identical."),Object(i.b)("h3",{id:"example-for-case-2"},"Example for ",Object(i.b)("inlineCode",{parentName:"h3"},"case 2"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="env/prod.yaml"',title:'"env/prod.yaml"'}),"# @package _global_\ndb:\n  driver: mysql\n  host: 10.0.0.11\n  port: 3306\n\nwebserver:\n  host: 10.0.0.11\n  port: 443\n")))}p.isMDXComponent=!0}}]);