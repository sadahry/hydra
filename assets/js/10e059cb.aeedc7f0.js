(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{270:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(o,".").concat(p)]||d[p]||b[p]||r;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},271:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))},272:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(11),o=n(271),c=n(7),l=Object(a.createContext)({collectLink:function(){}}),s=n(273),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};t.a=function(e){var t,n,d,b=e.isNavLink,p=e.to,m=e.href,h=e.activeClassName,g=e.isActive,v=e["data-noBrokenLinkCheck"],O=e.autoAddBaseUrl,f=void 0===O||O,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(s.b)().withBaseUrl,N=Object(a.useContext)(l),w=p||m,C=Object(o.a)(w),x=null==w?void 0:w.replace("pathname://",""),A=void 0!==x?(n=x,f&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,D=Object(a.useRef)(!1),k=b?r.e:r.c,E=c.default.canUseIntersectionObserver;Object(a.useEffect)((function(){return!E&&C&&window.docusaurus.prefetch(A),function(){E&&d&&d.disconnect()}}),[A,E,C]);var L=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,P=!A||!C||L;return A&&C&&!L&&!v&&N.collectLink(A),P?i.a.createElement("a",Object.assign({href:A},w&&!C&&{target:"_blank",rel:"noopener noreferrer"},j)):i.a.createElement(k,Object.assign({},j,{onMouseEnter:function(){D.current||(window.docusaurus.preload(A),D.current=!0)},innerRef:function(e){var t,n;E&&e&&C&&(t=e,n=function(){window.docusaurus.prefetch(A)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:A||""},b&&{isActive:g,activeClassName:h}))}},273:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(10),i=n(271);function r(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,c=void 0!==o&&o,l=r.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},274:function(e,t,n){try{e.exports=n(275)}catch(i){var a={};e.exports={useAllDocsData:function(){return a},useActivePluginAndVersion:function(){}}}},275:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var a=n(23),i=n(38),r=n(276);t.useAllDocsData=function(){return i.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return i.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),i=a.useLocation().pathname;return r.getActivePlugin(n,i,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),i=a.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:r.getActiveVersion(n.pluginData,i)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return r.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),i=a.useLocation().pathname;return r.getActiveVersion(n,i)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),i=a.useLocation().pathname;return r.getActiveDocContext(n,i)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),i=a.useLocation().pathname;return r.getDocVersionSuggestions(n,i)}},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var a=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var i=Object.entries(e).find((function(e){e[0];var n=e[1];return!!a.matchPath(t,{path:n.path,exact:!1,strict:!1})})),r=i?{pluginId:i[0],pluginData:i[1]}:void 0;if(!r&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return r},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var i=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==i})),[i]).find((function(e){return!!a.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var i,r,o=t.getActiveVersion(e,n),c=null==o?void 0:o.docs.find((function(e){return!!a.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:c,alternateDocVersions:c?(i=c.id,r={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===i&&(r[e.name]=t)}))})),r):{}}},t.getDocVersionSuggestions=function(e,n){var a=t.getLatestVersion(e),i=t.getActiveDocContext(e,n),r=i.activeVersion!==a;return{latestDocSuggestion:r?null==i?void 0:i.alternateDocVersions[a.name]:void 0,latestVersionSuggestion:r?a:void 0}}},277:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u}));var a=n(3),i=n(0),r=n.n(i),o=n(272),c=n(10),l=n(274);function s(e){return r.a.createElement(o.a,Object(a.a)({},e,{to:(t=e.to,i=Object(l.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==i?void 0:i.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,i}function u(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return r.a.createElement(s,e,r.a.createElement("span",null,"\xa0"),r.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(8),r=(n(0),n(270)),o=n(277),c={id:"basic",hide_title:!0,sidebar_label:"Basic Override syntax"},l={unversionedId:"advanced/override_grammar/basic",id:"advanced/override_grammar/basic",isDocsHomePage:!1,title:"basic",description:"Basic Override syntax",source:"@site/docs/advanced/override_grammar/basic.md",slug:"/advanced/override_grammar/basic",permalink:"/docs/next/advanced/override_grammar/basic",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/override_grammar/basic.md",version:"current",lastUpdatedBy:"Jasha10",lastUpdatedAt:1622831009,formattedLastUpdatedAt:"6/4/2021",sidebar_label:"Basic Override syntax",sidebar:"docs",previous:{title:"Hydra's command line flags",permalink:"/docs/next/advanced/hydra-command-line-flags"},next:{title:"extended",permalink:"/docs/next/advanced/override_grammar/extended"}},s=[{value:"Basic Override syntax",id:"basic-override-syntax",children:[]},{value:"Basic examples",id:"basic-examples",children:[{value:"Modifying the Config Object",id:"modifying-the-config-object",children:[]},{value:"Modifying the Defaults List",id:"modifying-the-defaults-list",children:[]}]},{value:"Grammar",id:"grammar",children:[]},{value:"Elements",id:"elements",children:[{value:"Key",id:"key",children:[]},{value:"Quoted values",id:"quoted-values",children:[]},{value:"Whitespaces in unquoted values",id:"whitespaces-in-unquoted-values",children:[]},{value:"Escaped characters in unquoted values",id:"escaped-characters-in-unquoted-values",children:[]},{value:"Primitives",id:"primitives",children:[]}]},{value:"Dictionaries and Lists",id:"dictionaries-and-lists",children:[{value:"Lists",id:"lists",children:[]},{value:"Dictionaries",id:"dictionaries",children:[]},{value:"Sweeper syntax",id:"sweeper-syntax",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Working with your shell",id:"working-with-your-shell",children:[{value:"Bash",id:"bash",children:[]},{value:"Other shells",id:"other-shells",children:[]}]}],u={toc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"basic-override-syntax"},"Basic Override syntax"),Object(r.b)("p",null,"You can manipulate your configuration with overrides (via the command line or the Compose API). This includes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Modifying the the ",Object(r.b)("inlineCode",{parentName:"li"},"Defaults List")),Object(r.b)("li",{parentName:"ul"},"Modifying the config object")),Object(r.b)("p",null,"Overrides matching a config group are modifying the ",Object(r.b)("inlineCode",{parentName:"p"},"Defaults List"),";\nThe rest are manipulating the config object."),Object(r.b)("h2",{id:"basic-examples"},"Basic examples"),Object(r.b)("h3",{id:"modifying-the-config-object"},"Modifying the Config Object"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Overriding a config value : ",Object(r.b)("inlineCode",{parentName:"li"},"foo.bar=value")),Object(r.b)("li",{parentName:"ul"},"Appending a config value : ",Object(r.b)("inlineCode",{parentName:"li"},"+foo.bar=value")),Object(r.b)("li",{parentName:"ul"},"Appending or overriding a config value : ",Object(r.b)("inlineCode",{parentName:"li"},"++foo.bar=value")),Object(r.b)("li",{parentName:"ul"},"Removing a config value : ",Object(r.b)("inlineCode",{parentName:"li"},"~foo.bar"),", ",Object(r.b)("inlineCode",{parentName:"li"},"~foo.bar=value"))),Object(r.b)("h3",{id:"modifying-the-defaults-list"},"Modifying the Defaults List"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Overriding selected Option: ",Object(r.b)("inlineCode",{parentName:"li"},"db=mysql")),Object(r.b)("li",{parentName:"ul"},"Appending to Defaults List: ",Object(r.b)("inlineCode",{parentName:"li"},"+db=mysql")),Object(r.b)("li",{parentName:"ul"},"Deleting from Defaults List: ",Object(r.b)("inlineCode",{parentName:"li"},"~db"),", ",Object(r.b)("inlineCode",{parentName:"li"},"~db=mysql"))),Object(r.b)("h2",{id:"grammar"},"Grammar"),Object(r.b)("p",null,"Hydra supports a rich ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain-specific_language"},"DSL")," in the command line.\nBelow are the parser rules from grammar. You can see the full ",Object(r.b)(o.b,{to:"hydra/grammar/OverrideLexer.g4",mdxType:"GithubLink"},"Lexer")," and ",Object(r.b)(o.b,{to:"hydra/grammar/OverrideParser.g4",mdxType:"GithubLink"},"Parser")," definitions on GitHub."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-antlr4",metastring:'title="OverrideParser.g4"',title:'"OverrideParser.g4"'},"// High-level command-line override.\n\noverride: (\n      key EQUAL value?                           // key=value, key= (for empty value)\n    | TILDE key (EQUAL value?)?                  // ~key | ~key=value\n    | PLUS PLUS? key EQUAL value?                // +key= | +key=value | ++key=value\n) EOF;\n\n// Keys.\n\nkey : packageOrGroup (AT package)?;              // key | group@pkg\n\npackageOrGroup: package | ID (SLASH ID)+;        // db, hydra/launcher\npackage: ( | ID | KEY_SPECIAL | DOT_PATH);       // db, $db, hydra.launcher, or the empty\n\n// Elements (that may be swept over).\n\nvalue: element | simpleChoiceSweep;\n\nelement:\n      primitive\n    | listContainer\n    | dictContainer\n    | function\n;\n\nsimpleChoiceSweep:\n      element (COMMA element)+                   // value1,value2,value3\n;\n\n// Functions.\n\nargName: ID EQUAL;\nfunction: ID POPEN (argName? element (COMMA argName? element )* )? PCLOSE;\n\n// Data structures.\n\nlistContainer: BRACKET_OPEN                      // [], [1,2,3], [a,b,[1,2]]\n    (element(COMMA element)*)?\nBRACKET_CLOSE;\n\ndictContainer: BRACE_OPEN (dictKeyValuePair (COMMA dictKeyValuePair)*)? BRACE_CLOSE;  // {}, {a:10,b:20}\ndictKeyValuePair: dictKey COLON element;\n\n// Primitive types.\n\nprimitive:\n      QUOTED_VALUE                               // 'hello world', \"hello world\"\n    | (   ID                                     // foo_10\n        | NULL                                   // null, NULL\n        | INT                                    // 0, 10, -20, 1_000_000\n        | FLOAT                                  // 3.14, -20.0, 1e-1, -10e3\n        | BOOL                                   // true, TrUe, false, False\n        | INTERPOLATION                          // ${foo.bar}, ${oc.env:USER,me}\n        | UNQUOTED_CHAR                          // /, -, \\, +, ., $, %, *, @, ?\n        | COLON                                  // :\n        | ESC                                    // \\\\, \\(, \\), \\[, \\], \\{, \\}, \\:, \\=, \\ , \\\\t, \\,\n        | WS                                     // whitespaces\n    )+;\n\n// Same as `primitive` except that `COLON` and `INTERPOLATION` are not allowed.\ndictKey:\n      QUOTED_VALUE                               // 'hello world', \"hello world\"\n    | (   ID                                     // foo_10\n        | NULL                                   // null, NULL\n        | INT                                    // 0, 10, -20, 1_000_000\n        | FLOAT                                  // 3.14, -20.0, 1e-1, -10e3\n        | BOOL                                   // true, TrUe, false, False\n        | UNQUOTED_CHAR                          // /, -, \\, +, ., $, %, *, @, ?\n        | ESC                                    // \\\\, \\(, \\), \\[, \\], \\{, \\}, \\:, \\=, \\ , \\\\t, \\,\n        | WS                                     // whitespaces\n    )+;\n")),Object(r.b)("h2",{id:"elements"},"Elements"),Object(r.b)("h3",{id:"key"},"Key"),Object(r.b)("p",null,"Key is the component before the =. A few examples:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"foo.bar           # A config key\nhydra/launcher    # A config group\ngroup@pkg         # A config group assigned to the package pkg\ngroup@pkg1:pkg2   # A config group changing the package from pkg1 to pkg2\n")),Object(r.b)("h3",{id:"quoted-values"},"Quoted values"),Object(r.b)("p",null,"Hydra supports both double quotes and single quoted values.\nQuoted strings can accept any value between the quotes, but some characters need escaping:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"to include a single quote in a single quoted string, use ",Object(r.b)("inlineCode",{parentName:"li"},"\\'")," (for double quotes in a double quoted string, use ",Object(r.b)("inlineCode",{parentName:"li"},'\\"'),")"),Object(r.b)("li",{parentName:"ul"},"any sequence of ",Object(r.b)("inlineCode",{parentName:"li"},"\\")," characters preceding a quote (either an escaped quote as described in the previous point, or the closing quote)\nmust be escaped by doubling the number of ",Object(r.b)("inlineCode",{parentName:"li"},"\\"))),Object(r.b)("div",{className:"row"},Object(r.b)("div",{className:"col col--6"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Double quotes"',title:'"Double','quotes"':!0},'"hello there"\n"escaped \\"double quote\\""\n"the path is C:\\\\\\"some folder\\"\\\\"\n"1,2,3"\n"{a:10} ${xyz}"\n"\'single quoted string\'"\n'))),Object(r.b)("div",{className:"col  col--6"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Single quotes"',title:'"Single','quotes"':!0},"'hello there'\n'escaped \\'single quote\\''\n'the path is C:\\\\\\'some folder\\'\\\\'\n'1,2,3'\n'{a:10} ${xyz}'\n'\"double quoted string\"'\n")))),Object(r.b)("h3",{id:"whitespaces-in-unquoted-values"},"Whitespaces in unquoted values"),Object(r.b)("p",null,"Unquoted Override values can contain non leading or trailing whitespaces.\nFor example, ",Object(r.b)("inlineCode",{parentName:"p"},"msg=hello world")," is a legal override (key is ",Object(r.b)("inlineCode",{parentName:"p"},"msg")," and value is the string ",Object(r.b)("inlineCode",{parentName:"p"},"hello world"),").\nNormally, your shell will interpret values with whitespaces as being multiple parameters (",Object(r.b)("inlineCode",{parentName:"p"},"key=a b")," would be interpreted as ",Object(r.b)("inlineCode",{parentName:"p"},"key=a")," and ",Object(r.b)("inlineCode",{parentName:"p"},"b"),").\nTo prevent this you can quote them with a single quote. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ python my_app.py 'msg=hello world'\n")),Object(r.b)("p",null,"Note that trailing and leading whitespace are ignored, the above is equivalent to:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ python my_app.py 'msg=    hello world    '\n")),Object(r.b)("h3",{id:"escaped-characters-in-unquoted-values"},"Escaped characters in unquoted values"),Object(r.b)("p",null,"Some otherwise special characters may be included in unquoted values by escaping them with a ",Object(r.b)("inlineCode",{parentName:"p"},"\\"),".\nThese characters are: ",Object(r.b)("inlineCode",{parentName:"p"},"\\()[]{}:=, \\t")," (the last two ones being the whitespace and tab characters)."),Object(r.b)("p",null,"As an example, in the following ",Object(r.b)("inlineCode",{parentName:"p"},"dir")," is set to the string ",Object(r.b)("inlineCode",{parentName:"p"},"job{a=1,b=2,c=3}"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ python my_app.py 'dir=job\\{a\\=1\\,b\\=2\\,c\\=3\\}'\n")),Object(r.b)("h3",{id:"primitives"},"Primitives"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"id")," : oompa10, loompa_12"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"null"),": null"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"int"),": 10, -20, 0, 1_000_000."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"float"),": 3.14, -10e6, inf, -inf, nan."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"bool"),": true, false"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dot_path"),": foo.bar"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"interpolation"),": ${foo.bar}, ${oc.env:USER,me}")),Object(r.b)("p",null,"Constants (null, true, false, inf, nan) are case-insensitive."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Always single-quote interpolations in the shell, to prevent replacement with shell variables:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ python my_app.py 'dir=/root/${name}'\n")),Object(r.b)("p",{parentName:"div"},"In addition, more complex interpolations containing special characters may require being passed within a quoted value\n(note the extra double quotes surrounding the interpolation):"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ python my_app.py 'dir=\"${get_dir: {root: /root, name: ${name}}}\"'\n")))),Object(r.b)("h2",{id:"dictionaries-and-lists"},"Dictionaries and Lists"),Object(r.b)("h3",{id:"lists"},"Lists"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"foo=[1,2,3]\nnested=[a,[b,[c]]]\n")),Object(r.b)("h3",{id:"dictionaries"},"Dictionaries"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"foo={a:10,b:20}\nnested={a:10,b:{c:30,d:40}}\n")),Object(r.b)("p",null,"Dictionaries are merged, not assigned. The following example illustrates the point:"),Object(r.b)("div",{className:"row"},Object(r.b)("div",{className:"col col--6"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Input config"',title:'"Input','config"':!0},"db:\n  driver: mysql\n  user: ???\n  pass: ???\n"))),Object(r.b)("div",{className:"col  col--6"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db={user:root,pass:1234}"',title:'"db'},"db:\n  driver: mysql\n  user: root\n  pass: 1234\n")))),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Always single-quote overrides that contains dicts and lists in the shell."))),Object(r.b)("h3",{id:"sweeper-syntax"},"Sweeper syntax"),Object(r.b)("p",null,"A choice sweep is comma separated list with two or more elements:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'key=a,b                       # Simple sweep: ChoiceSweep(a, b)\nkey="a,b","c,d"               # Elements can be quoted strings, ChoiceSweep("a,b", "c,d")\nkey=[a,b],[c,d]               # Elements can be real lists, ChoiceSweep([a,b], [c,d])\nkey={a:10, b:20},{c:30,d:40}  # And dictionaries: ChoiceSweep({a:10, b:20}, {c:30,d:40})\n')),Object(r.b)("p",null,"More sweeping options are described in the ",Object(r.b)("a",{parentName:"p",href:"/docs/next/advanced/override_grammar/extended"},"Extended Grammar page"),"."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You may need to quote your choice sweep in the shell."))),Object(r.b)("h3",{id:"functions"},"Functions"),Object(r.b)("p",null,"Hydra supports several functions in the command line.\nSee the ",Object(r.b)("a",{parentName:"p",href:"/docs/next/advanced/override_grammar/extended"},"Extended Grammar page")," for more information."),Object(r.b)("h2",{id:"working-with-your-shell"},"Working with your shell"),Object(r.b)("p",null,"All shells interprets command line inputs and may change what is passed to the process.\nA good way to determine what the shell is doing to your command is to ",Object(r.b)("inlineCode",{parentName:"p"},"echo")," it."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# bash output\n$ echo foo_{a:10,b:20} ${HOME} [b,c]*\nfoo_a:10 foo_b:20 /home/omry build_helpers\n$ echo 'foo_{a:10,b:20}' '${HOME}' '[b,c]*'\nfoo_{a:10,b:20} ${HOME} [b,c]*\n")),Object(r.b)("p",null,"If in doubt, quote a command line element with a ",Object(r.b)("strong",{parentName:"p"},"single quote")," (",Object(r.b)("inlineCode",{parentName:"p"},"'"),")."),Object(r.b)("p",null,"If you want to pass quotes to Hydra in a shell quoted string, it's best to pass double quotes."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ echo \'"hello world"\'\n"hello world"\n')),Object(r.b)("p",null,"You can use some shell specific commands to change their behavior, but the cost will be that their behavior will change."),Object(r.b)("h3",{id:"bash"},"Bash"),Object(r.b)("p",null,"You can disable braces expansion, filename generation (globing) and hist expansion. Please note that this will change\nyour shell behavior for the current session."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ set +o braceexpand -o noglob +o histexpand\n$ echo key1={a:10,b:20} key2=${HOME} key=[b]*\nkey1={a:10,b:20} key2=/home/omry key=[b]*\n# does not help with () though:\n$ echo key=choice(a,b,c)\nbash: syntax error near unexpected token '('\n$ echo 'key=choice(a,b,c)'\nkey=choice(a,b,c)\n")),Object(r.b)("h3",{id:"other-shells"},"Other shells"),Object(r.b)("p",null,"Send a PR to add information about your favorite shell here."))}d.isMDXComponent=!0}}]);