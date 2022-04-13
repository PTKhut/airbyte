"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3009],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return a?r.createElement(k,l(l({ref:t},m),{},{components:a})):r.createElement(k,l({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},74082:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],o={},p="Mixpanel",s={unversionedId:"integrations/sources/mixpanel",id:"integrations/sources/mixpanel",title:"Mixpanel",description:"Overview",source:"@site/../docs/integrations/sources/mixpanel.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/mixpanel",permalink:"/airbyte/integrations/sources/mixpanel",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/integrations/sources/mixpanel.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Microsoft Teams",permalink:"/airbyte/integrations/sources/microsoft-teams"},next:{title:"Monday",permalink:"/airbyte/integrations/sources/monday"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"CHANGELOG",id:"changelog",level:2}],u={toc:d};function c(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mixpanel"},"Mixpanel"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Mixpanel source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,i.kt)("p",null,"This Source Connector is based on a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/connector-development/cdk-python"},"Airbyte CDK"),"."),(0,i.kt)("h3",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"Several output streams are available from this source:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/docs/exporting-raw-data#section-export-api-reference"},"Export")," ","(","Incremental",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/docs/data-export-api#section-engage"},"Engage")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/docs/data-export-api#section-funnels"},"Funnels")," ","(","Incremental",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/docs/data-export-api#section-hr-span-style-font-family-courier-revenue-span"},"Revenue")," ","(","Incremental",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/docs/data-export-api#section-annotations"},"Annotations")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/docs/cohorts#section-list-cohorts"},"Cohorts")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mixpanel.com/docs/data-export-api#section-engage"},"Cohort Members")," ","(","Full table",")")),(0,i.kt)("p",null,"If there are more endpoints you'd like Airbyte to support, please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new/choose"},"create an issue.")),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Coming soon")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,i.kt)("p",null,"Please note, that incremental sync could return duplicated ","(","old records",")"," for the state date due to API filter limitation, which is granular to the whole day only."),(0,i.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,i.kt)("p",null,"The Mixpanel connector should not run into Mixpanel API limitations under normal usage. Please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Export stream - 60 reqs per hour"),(0,i.kt)("li",{parentName:"ul"},"All streams - 400 reqs per hour")),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mixpanel API Secret"),(0,i.kt)("li",{parentName:"ul"},"Project region ",(0,i.kt)("inlineCode",{parentName:"li"},"US")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"EU"))),(0,i.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,i.kt)("p",null,"Please read ",(0,i.kt)("a",{parentName:"p",href:"https://help.mixpanel.com/hc/en-us/articles/115004502806-Find-Project-Token-"},"Find API Secret"),"."),(0,i.kt)("p",null,"Select the correct region ","(","EU or US",")"," for your Mixpanel project. See detail ",(0,i.kt)("a",{parentName:"p",href:"https://help.mixpanel.com/hc/en-us/articles/360039135652-Data-Residency-in-EU"},"here")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note:")," If ",(0,i.kt)("inlineCode",{parentName:"p"},"start_date")," is not set, the connector will replicate data from up to one year ago by default."),(0,i.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.1.11")),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-04-04"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11318"},"11318")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Change Response Reading")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.1.10")),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-03-31"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11227"},"11227")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix cohort id always null in the cohort_members stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.1.9")),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-07"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8578"},"8429")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Updated titles and descriptions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.1.7")),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-01"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8381"},"8381")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Increased performance for ",(0,i.kt)("inlineCode",{parentName:"td"},"discovery")," stage during connector setup")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.1.6")),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-11-25"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/8256"},"8256")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Deleted ",(0,i.kt)("inlineCode",{parentName:"td"},"date_window_size")," and fix schemas date type issue")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.1.5")),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-11-10"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/7451"},"7451")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Support ",(0,i.kt)("inlineCode",{parentName:"td"},"start_date")," older than 1 year")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.1.4")),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7499"},"7499")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Remove base-python dependencies")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.1.3")),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-10-30"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/7505"},"7505")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Guarantee that standard and custom mixpanel properties in the ",(0,i.kt)("inlineCode",{parentName:"td"},"Engage")," stream are written as strings")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.1.2")),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-11-02"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/7439"},"7439")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added delay for all streams to match API limitation of requests rate")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.1.1")),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-16"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/6075"},"6075")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added option to select project region")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.1.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-06"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/3698"},"3698")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Created CDK native mixpanel connector")))))}c.isMDXComponent=!0}}]);