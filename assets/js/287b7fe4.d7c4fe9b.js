"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[4717],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7658:(e,t,n)=>{n.d(t,{ZP:()=>u});var r=n(6600),i=n(9496),a=n(9613),o=n(2484),l=n(4643);const s=e=>{let{ticket:t}=e;const n=`https://github.com/feature-sliced/documentation/issues/${t}`;return i.createElement("div",null,i.createElement("p",null,(0,l.I)({id:"shared.wip.title"})),i.createElement("p",null,(0,l.I)({id:"shared.wip.subtitle"})),i.createElement("ul",null,i.createElement("li",null,(0,l.I)({id:"shared.wip.var.feedback.base"}),i.createElement(o.Z,{to:n},(0,l.I)({id:"shared.wip.var.feedback.link"}))),i.createElement("li",null,(0,l.I)({id:"shared.wip.var.material.base"}),i.createElement(o.Z,{to:"https://t.me/feature_sliced"},(0,l.I)({id:"shared.wip.var.material.link"}))),i.createElement("li",null,(0,l.I)({id:"shared.wip.var.contribute.base"}),i.createElement(o.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,l.I)({id:"shared.wip.var.contribute.link"})))),i.createElement("br",null),i.createElement("p",null,i.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},c={toc:[]};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"WIP",type:"caution"},(0,a.kt)(s,{ticket:n.ticket,mdxType:"WIP"})))}u.isMDXComponent=!0},2632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(6600),i=(n(9496),n(9613)),a=n(7658);const o={sidebar_position:3,sidebar_class_name:"sidebar-item--wip"},l="Migration from legacy",s={unversionedId:"guides/migration/from-legacy",id:"guides/migration/from-legacy",title:"Migration from legacy",description:"The article aggregates the experience of several companies and projects on moving to Feature-Sliced Design with different initial conditions",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/migration/from-legacy.mdx",sourceDirName:"guides/migration",slug:"/guides/migration/from-legacy",permalink:"/docs/guides/migration/from-legacy",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/migration/from-legacy.mdx",tags:[],version:"current",lastUpdatedAt:1691318371,formattedLastUpdatedAt:"Aug 6, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_class_name:"sidebar-item--wip"},sidebar:"guidesSidebar",previous:{title:"SSR",permalink:"/docs/guides/examples/ssr"},next:{title:"Migration from v1",permalink:"/docs/guides/migration/from-v1"}},c={},u=[{value:"Why?",id:"why",level:2},{value:"What&#39;s the plan?",id:"whats-the-plan",level:2},{value:"1. Unification of the code base",id:"1-unification-of-the-code-base",level:3},{value:"2. Putting together the destructive decoupled",id:"2-putting-together-the-destructive-decoupled",level:3},{value:"3. Allocate scopes of responsibility",id:"3-allocate-scopes-of-responsibility",level:3},{value:"4. Final ?",id:"4-final-",level:3},{value:"See also",id:"see-also",level:2}],d={toc:u};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migration-from-legacy"},"Migration from legacy"),(0,i.kt)(a.ZP,{ticket:"166",mdxType:"WIP"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The article aggregates the experience of several companies and projects on moving to Feature-Sliced Design with different initial conditions")),(0,i.kt)("h2",{id:"why"},"Why?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'How much does the move need? "Death by a thousand cuts" and those debt. What is missing? How can the methodology help?')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"See the talk of ",(0,i.kt)("a",{parentName:"p",href:"http://youtu.be/aOiJ3k2UvO4"},"Ilya Klimov about the need and procedure for refactoring"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"approaches-themed-bordered",src:n(2449).Z,width:"1572",height:"857"})),(0,i.kt)("h2",{id:"whats-the-plan"},"What's the plan?"),(0,i.kt)("h3",{id:"1-unification-of-the-code-base"},"1. Unification of the code base"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"- \u251c\u2500\u2500 products/\n- |   \u251c\u2500\u2500 components/\n- |   \u251c\u2500\u2500 containers/\n- |   \u251c\u2500\u2500 store/\n- |   \u251c\u2500\u2500 styles/\n- \u251c\u2500\u2500 checkout/\n- |   \u251c\u2500\u2500 components/\n- |   \u251c\u2500\u2500 containers/\n- |   \u251c\u2500\u2500 helpers/\n- |   \u251c\u2500\u2500 styles/\n+ \u2514\u2500\u2500 src/\n      \u251c\u2500\u2500 actions/\n      \u251c\u2500\u2500 api/\n+     \u251c\u2500\u2500 components/\n+     \u251c\u2500\u2500 containers/\n      \u251c\u2500\u2500 constants/\n      \u251c\u2500\u2500 epics/\n+     \u251c\u2500\u2500 i18n/\n      \u251c\u2500\u2500 modules/\n+     \u251c\u2500\u2500 helpers/\n+     \u251c\u2500\u2500 pages/\n-     \u251c\u2500\u2500 routes/\n-     \u251c\u2500\u2500 utils/\n      \u251c\u2500\u2500 reducers/\n-     \u251c\u2500\u2500 redux/\n      \u251c\u2500\u2500 selectors/\n+     \u251c\u2500\u2500 store\n+     \u251c\u2500\u2500 styles/\n      \u251c\u2500\u2500 App.jsx\n      \u2514\u2500\u2500 index.jsx\n")),(0,i.kt)("h3",{id:"2-putting-together-the-destructive-decoupled"},"2. Putting together the destructive decoupled"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"  \u2514\u2500\u2500 src/\n-     \u251c\u2500\u2500 actions/\n      \u251c\u2500\u2500 api/\n-     \u251c\u2500\u2500 components/\n-     \u251c\u2500\u2500 containers/\n-     \u251c\u2500\u2500 constants/\n-     \u251c\u2500\u2500 epics/\n+     \u251c\u2500\u2500 entities/{...}\n+     |     \u251c\u2500\u2500 ui\n+     |     \u251c\u2500\u2500 model/{actions, selectors, ...}\n+     |     \u251c\u2500\u2500 lib\n      \u251c\u2500\u2500 i18n/\n      |   # We can temporarily put the remaining segments here\n+     \u251c\u2500\u2500 modules/{helpers, constants}\n-     \u251c\u2500\u2500 helpers/\n      \u251c\u2500\u2500 pages/\n-     \u251c\u2500\u2500 reducers/\n-     \u251c\u2500\u2500 selectors/\n-     \u251c\u2500\u2500 store/\n      \u251c\u2500\u2500 styles/\n      \u251c\u2500\u2500 App.jsx\n      \u2514\u2500\u2500 index.jsx\n")),(0,i.kt)("h3",{id:"3-allocate-scopes-of-responsibility"},"3. Allocate scopes of responsibility"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"}," \u2514\u2500\u2500 src/\n-    \u251c\u2500\u2500 api/\n+    \u251c\u2500\u2500 app/\n+    |   \u251c\u2500\u2500 index.jsx\n+    |   \u251c\u2500\u2500 style.css\n     \u251c\u2500\u2500 pages/\n+    \u251c\u2500\u2500 features/\n+    |   \u251c\u2500\u2500 add-to-cart/{ui, model, lib}\n+    |   \u251c\u2500\u2500 choose-delivery/{ui, model, lib}\n+    \u251c\u2500\u2500 entities/{...}\n+    |   \u251c\u2500\u2500 delivery/{ui, model, lib}\n+    |   \u251c\u2500\u2500 cart/{ui, model, lib}\n+    |   \u251c\u2500\u2500 product/{ui, model, lib}\n+    \u251c\u2500\u2500 shared/\n+    |   \u251c\u2500\u2500 api/\n+    |   \u251c\u2500\u2500 lib/    # helpers\n+    |   |    \u251c\u2500\u2500 i18n/\n+    |   \u251c\u2500\u2500 config/ # constants\n-    \u251c\u2500\u2500 i18n/\n-    \u251c\u2500\u2500 modules/{helpers, constants}\n     \u2514\u2500\u2500 index.jsx\n")),(0,i.kt)("h3",{id:"4-final-"},"4. Final ?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"About the remaining problems and how much it is worth eliminating them")),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/aOiJ3k2UvO4"},"(Talk) Ilya Klimov-The Rat Race of endless refactoring: how not to let technical debt kill motivation and product")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/SnzPAr_FJ7w"},"(Talk) Ilya Azin - Architecture of Frontend projects"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"There is also discussed approaches for architecture and costs of refactoring")))))}p.isMDXComponent=!0},2449:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/approaches-a6bdea3f5ff95cb01c5d2e1dcaa69375.png"}}]);