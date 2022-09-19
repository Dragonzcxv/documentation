"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[926],{7278:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M916 210H376c-17.7 0-32 14.3-32 32v236H108c-17.7 0-32 14.3-32 32v272c0 17.7 14.3 32 32 32h540c17.7 0 32-14.3 32-32V546h236c17.7 0 32-14.3 32-32V242c0-17.7-14.3-32-32-32zm-504 68h200v200H412V278zm-68 468H144V546h200v200zm268 0H412V546h200v200zm268-268H680V278h200v200z"}}]},name:"build",theme:"outlined"},o=n(755),i=function(e,t){return r.createElement(o.Z,Object.assign({},e,{ref:t,icon:a}))};i.displayName="BuildOutlined";var c=r.forwardRef(i)},4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,p=f["".concat(s,".").concat(m)]||f[m]||d[m]||o;return n?r.createElement(p,i(i({ref:t},u),{},{components:n})):r.createElement(p,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7798:function(e,t,n){n.d(t,{ZP:function(){return l}});var r=n(3117),a=n(102),o=(n(7294),n(4137)),i=n(6735),c=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,(0,r.Z)({},n,{mdxType:"NavCard"})))}l.isMDXComponent=!0},4367:function(e,t,n){n.d(t,{ga:function(){return r}});var r={};n.r(r),n.d(r,{CATEGORIES:function(){return o},sendEvent:function(){return a}});var a=function(e){var t=e.category,n=e.action,r=e.label,a=e.value;if(void 0!==typeof window&&window.ga)return window.ga("send",{hitType:"event",eventCategory:t,eventAction:n,eventLabel:r,eventValue:a})},o={full:"Feedback 1.2 (full)",mixed:"Feedback 1.2 (mixed)",short:"Feedback 1.2 (short)"}},6735:function(e,t,n){n.d(t,{J:function(){return s},Z:function(){return u}});var r=n(7294),a=n(6010),o=n(2511),i=n(4367),c={root:"root_34MW",rootDisabled:"rootDisabled_1kkF",details:"details_1Iw7",detailsTags:"detailsTags_1iNH",icon:"icon_35Rj",title:"title_2kc6",description:"description_1i0Z",miniTheme:"miniTheme_249N",primaryTheme:"primaryTheme_35m3",defaultTheme:"defaultTheme_1cfl"},s=function(e){var t=e.title,n=e.description,s=e.to,u=e.Icon,d=e.tags,f=e.className,m=e.disabled,p=e.theme,v=void 0===p?"default":p,g=(0,r.useCallback)((function(){i.ga.sendEvent({category:i.ga.CATEGORIES.full,action:"NavRow:Click",label:s})}),[s]);return r.createElement(o.Z,{className:(0,a.Z)(c.root,f,m&&c.rootDisabled,c[v+"Theme"]),to:s,onClick:g},r.createElement(l,{Icon:u}),r.createElement("div",{className:c.details},r.createElement("div",{className:c.detailsMain},r.createElement("span",{className:c.title},t),r.createElement("p",{className:c.description},n)),d&&r.createElement("div",{className:c.detailsTags},d.join(" \u2022 "))))},l=function(e){var t=e.Icon;return t?"string"==typeof t?r.createElement("span",{className:c.icon},t):r.createElement(t,{className:c.icon}):null},u=s},203:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return y},default:function(){return w},frontMatter:function(){return b},metadata:function(){return h},toc:function(){return O}});var r=n(3117),a=n(102),o=n(7294),i=n(4137),c=n(7798),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 00-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0043.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0043.1-30.5 97.52 97.52 0 0021.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0162.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 01-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1096 0 48 48 0 10-96 0z"}}]},name:"rocket",theme:"outlined"},l=n(755),u=function(e,t){return o.createElement(l.Z,Object.assign({},e,{ref:t,icon:s}))};u.displayName="RocketOutlined";var d=o.forwardRef(u),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M442.3 677.6l199.4-156.7a11.3 11.3 0 000-17.7L442.3 346.4c-7.4-5.8-18.3-.6-18.3 8.8v313.5c0 9.4 10.9 14.7 18.3 8.9z"}},{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"play-square",theme:"outlined"},m=function(e,t){return o.createElement(l.Z,Object.assign({},e,{ref:t,icon:f}))};m.displayName="PlaySquareOutlined";var p=o.forwardRef(m),v=n(7278),g=["components"],b={sidebar_position:0,sidebar_class_name:"sidebar-item--root",slug:"/get-started",hide_table_of_contents:!0,pagination_prev:"intro"},y="\ud83d\ude80 \u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0441\u0442\u0430\u0440\u0442",h={unversionedId:"get-started/index",id:"get-started/index",isDocsHomePage:!1,title:"\ud83d\ude80 \u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0441\u0442\u0430\u0440\u0442",description:"LEARNING-ORIENTED",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/get-started/index.mdx",sourceDirName:"get-started",slug:"/get-started",permalink:"/ru/docs/get-started",editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/get-started/index.mdx",tags:[],version:"current",lastUpdatedAt:1663593408,formattedLastUpdatedAt:"19.09.2022",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_class_name:"sidebar-item--root",slug:"/get-started",hide_table_of_contents:!0,pagination_prev:"intro"},sidebar:"getstartedSidebar",previous:{title:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",permalink:"/ru/docs/"},next:{title:"\u041e\u0431\u0437\u043e\u0440",permalink:"/ru/docs/get-started/overview"}},O=[{value:"\u0413\u043b\u0430\u0432\u043d\u043e\u0435",id:"main",children:[],level:2}],E={toc:O};function w(e){var t=e.components,n=(0,a.Z)(e,g);return(0,i.kt)("wrapper",(0,r.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-\u0431\u044b\u0441\u0442\u0440\u044b\u0439-\u0441\u0442\u0430\u0440\u0442"},"\ud83d\ude80 \u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0441\u0442\u0430\u0440\u0442"),(0,i.kt)("span",{class:"badge badge--success margin-bottom--md"},"LEARNING-ORIENTED"),(0,i.kt)("p",{class:"summary"},"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c! \u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0431\u0435\u0433\u043b\u043e \u043f\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435\u043c Feature-Sliced Design \u0438 \u043e\u0441\u043d\u043e\u0432\u0430\u043c\u0438 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438. \u0422\u0430\u043a\u0436\u0435 \u0432\u044b \u043f\u043e\u0439\u043c\u0435\u0442\u0435 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u0438 \u043f\u0440\u0438\u0447\u0438\u043d\u044b \u0435\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f."),(0,i.kt)("h2",{id:"main"},"\u0413\u043b\u0430\u0432\u043d\u043e\u0435"),(0,i.kt)(c.ZP,{title:"\u041e\u0431\u0437\u043e\u0440",description:"\u041a\u0440\u0430\u0442\u043a\u0438\u0439 \u043e\u0431\u0437\u043e\u0440 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438, \u0435\u0435 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0439 \u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f",to:"/docs/get-started/overview",Icon:d,mdxType:"NavCard"}),(0,i.kt)(c.ZP,{title:"\u0422\u0443\u0442\u043e\u0440\u0438\u0430\u043b",description:"\u0412\u0432\u043e\u0434\u043d\u044b\u0439 \u0442\u0443\u0442\u043e\u0440\u0438\u0430\u043b \u043f\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438",to:"/docs/get-started/tutorial",Icon:p,mdxType:"NavCard"}),(0,i.kt)(c.ZP,{title:"\u041f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438",description:"\u041f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u043b\u043e\u0433\u0438\u043a\u0438 \u0441 \u043f\u0440\u0438\u043c\u0435\u0440\u0430\u043c\u0438 \u0438 \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f\u043c\u0438",to:"/docs/get-started/cheatsheet",Icon:v.Z,mdxType:"NavCard"}))}w.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);