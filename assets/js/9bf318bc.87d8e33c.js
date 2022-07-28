"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1169],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return c},MDXProvider:function(){return s},mdx:function(){return f},useMDXComponents:function(){return p},withMDXComponents:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),d=function(e){return function(n){var t=p(n.components);return r.createElement(e,i({},n,{components:t}))}},p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(t),s=o,m=d["".concat(a,".").concat(s)]||d[s]||g[s]||i;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},39537:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={id:"debugging",title:"Debugging",sidebar_label:"Debugging"},u=void 0,c={unversionedId:"tutorial/debugging",id:"version-0.11/tutorial/debugging",title:"Debugging",description:"Hydra provides a few options to improve debuggability.",source:"@site/versioned_docs/version-0.11/tutorial/10_debugging.md",sourceDirName:"tutorial",slug:"/tutorial/debugging",permalink:"/docs/0.11/tutorial/debugging",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/tutorial/10_debugging.md",tags:[],version:"0.11",lastUpdatedBy:"SADIK KUZU",lastUpdatedAt:1659016420,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:10,frontMatter:{id:"debugging",title:"Debugging",sidebar_label:"Debugging"},sidebar:"version-0.11/docs",previous:{title:"Logging",permalink:"/docs/0.11/tutorial/logging"},next:{title:"Creating objects",permalink:"/docs/0.11/patterns/objects"}},d=[{value:"Printing the configuration",id:"printing-the-configuration",children:[],level:3},{value:"Hydra verbose debugging",id:"hydra-verbose-debugging",children:[],level:3}],p={toc:d};function s(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.mdx)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Hydra provides a few options to improve debuggability."),(0,i.mdx)("h3",{id:"printing-the-configuration"},"Printing the configuration"),(0,i.mdx)("p",null,"Print the config that would be used for a job without actually running it by adding '-c job' or '--cfg job' to your command line:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"# A normal run:\n$ python tutorial/objects_example/my_app.py\nMySQL connecting to localhost with user=root and password=1234\n\n# just show the config without running your function:\n$ python tutorial/objects_example/my_app.py -c job\n[2019-09-29 11:09:14,134] -\ndb:\n  class: tutorial.objects_example.my_app.MySQLConnection\n  params:\n    host: localhost\n    password: 1234\n    user: root\n")),(0,i.mdx)("p",null,"The printed config would be the actual config the job received with the rest of the command line arguments:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python tutorial/objects_example/my_app.py db=postgresql db.params.database=tutorial2 --cfg job\n[2019-09-29 11:14:55,977] -\ndb:\n  class: tutorial.objects_example.my_app.PostgreSQLConnection\n  params:\n    database: tutorial2\n    host: localhost\n    password: 1234\n    user: root\n")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"--cfg")," option takes one argument indicating which part of the config to print:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"job")," : Your config "),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"hydra")," : Hydra's config"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"all")," : The full config, which is a union of ",(0,i.mdx)("inlineCode",{parentName:"li"},"job")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"hydra"),".")),(0,i.mdx)("h3",{id:"hydra-verbose-debugging"},"Hydra verbose debugging"),(0,i.mdx)("p",null,"Hydra prints some very useful information in ",(0,i.mdx)("inlineCode",{parentName:"p"},"DEBUG")," log level.\nThis includes:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Installed plugins : What Hydra plugins are installed in the environment "),(0,i.mdx)("li",{parentName:"ul"},"Config search path : The configuration search path"),(0,i.mdx)("li",{parentName:"ul"},"Composition trace : Which config files were used to compose your configuration, at what order and where did they came from.")),(0,i.mdx)("p",null,"This is often used with ",(0,i.mdx)("inlineCode",{parentName:"p"},"-c")," to just see the config without running the application.\nExample output:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py hydra.verbose=hydra --cfg job\n[2019-09-29 13:35:46,780] - Installed Hydra Plugins\n[2019-09-29 13:35:46,780] - ***********************\n[2019-09-29 13:35:46,780] -     SearchPathPlugin:\n[2019-09-29 13:35:46,780] -     -----------------\n[2019-09-29 13:35:46,781] -     Sweeper:\n[2019-09-29 13:35:46,781] -     --------\n[2019-09-29 13:35:46,782] -             BasicSweeper\n[2019-09-29 13:35:46,782] -     Launcher:\n[2019-09-29 13:35:46,782] -     ---------\n[2019-09-29 13:35:46,783] -             BasicLauncher\n[2019-09-29 13:35:46,783] -\n[2019-09-29 13:35:46,783] - Hydra config search path\n[2019-09-29 13:35:46,783] - ************************\n[2019-09-29 13:35:46,783] - | Provider | Search path                           |\n[2019-09-29 13:35:46,783] - ----------------------------------------------------\n[2019-09-29 13:35:46,783] - | hydra  | pkg://hydra.conf                        |\n[2019-09-29 13:35:46,783] - | main   | /Users/omry/dev/hydra/tutorial/logging  |\n[2019-09-29 13:35:46,783] -\n[2019-09-29 13:35:46,783] - Composition trace\n[2019-09-29 13:35:46,783] - *****************\n[2019-09-29 13:35:46,783] - | Provider | Search path     | File      |\n...\n")))}s.isMDXComponent=!0}}]);