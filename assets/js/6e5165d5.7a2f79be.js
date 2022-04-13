"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[828],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return k}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),o=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=o(t.components);return r.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=o(a),k=n,u=c["".concat(m,".").concat(k)]||c[k]||s[k]||i;return a?r.createElement(u,l(l({ref:e},d),{},{components:a})):r.createElement(u,l({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=c;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:n,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2925:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return s}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],p={},m="Mailchimp",o={unversionedId:"integrations/sources/mailchimp",id:"integrations/sources/mailchimp",title:"Mailchimp",description:"Sync overview",source:"@site/../docs/integrations/sources/mailchimp.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/mailchimp",permalink:"/airbyte/integrations/sources/mailchimp",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/integrations/sources/mailchimp.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Magento",permalink:"/airbyte/integrations/sources/magento"},next:{title:"Marketo",permalink:"/airbyte/integrations/sources/marketo"}},d={},s=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],c={toc:s};function k(t){var e=t.components,a=(0,n.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mailchimp"},"Mailchimp"),(0,i.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,i.kt)("h3",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"The Mailchimp connector can be used to sync data for Mailchimp ",(0,i.kt)("a",{parentName:"p",href:"https://mailchimp.com/developer/api/marketing/lists/get-list-info"},"Lists")," and ",(0,i.kt)("a",{parentName:"p",href:"https://mailchimp.com/developer/api/marketing/campaigns/get-campaign-info/"},"Campaigns"),". The linked Mailchimp documentation contains detailed description on the fields in each entity."),(0,i.kt)("p",null,"Please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new/choose"},"create a Github issue")," to request support for syncing more Mailchimp entities."),(0,i.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"array")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"array")),(0,i.kt)("td",{parentName:"tr",align:"left"},"the type of elements in the array is determined based on the mappings in this table")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"date"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"time"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"datetime")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"int"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"float"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:"left"},"properties within objects are mapped based on the mappings in this table")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Coming soon"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Coming soon"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enabled by default")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,i.kt)("p",null,"At the time of this writing, ",(0,i.kt)("a",{parentName:"p",href:"https://mailchimp.com/developer/guides/marketing-api-conventions/#throttling"},"Mailchimp does not impose rate limits")," on how much data is read form its API in a single sync process. However, Mailchimp enforces a maximum of 10 simultaneous connections to its API. This means that Airbyte will not be able to run more than 10 concurrent syncs from Mailchimp using API keys generated from the same account."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"For Apikey authorithation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mailchimp account "),(0,i.kt)("li",{parentName:"ul"},"Mailchimp API key")),(0,i.kt)("p",null,"For OAuth authorization:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mailchimp registered app"),(0,i.kt)("li",{parentName:"ul"},"Mailchimp client_id"),(0,i.kt)("li",{parentName:"ul"},"Mailchimp client_secret")),(0,i.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,i.kt)("p",null,"To start syncing Mailchimp data with Airbyte, you'll need two things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Your Mailchimp username. Often this is just the email address or username you use to sign into Mailchimp. "),(0,i.kt)("li",{parentName:"ol"},"A Mailchimp API Key. Follow the ",(0,i.kt)("a",{parentName:"li",href:"https://mailchimp.com/help/about-api-keys/"},"Mailchimp documentation for generating an API key"),".")),(0,i.kt)("p",null,"OR"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Register an app in ",(0,i.kt)("a",{parentName:"li",href:"https://us2.admin.mailchimp.com/account/oauth2/"},"Mailchimp"),"."),(0,i.kt)("li",{parentName:"ol"},"Specify client_id and client_secret.")),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.13"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-04-11"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11632"},"11632")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add unit tests")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.12"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-03-17"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10975"},"10975")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix campaign's stream normalization")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.11"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-24"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7159"},"7159")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add oauth2.0 support")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.10"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-21"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9000"},"9000")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.9"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-13"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7975"},"7975")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Updated JSON schemas")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-08-17"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5481"},"5481")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Remove date-time type from some fields")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.7"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-08-03"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5137"},"5137")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Source Mailchimp: fix primary key for email activities")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-28"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5024"},"5024")),(0,i.kt)("td",{parentName:"tr",align:"left"},'Source Mailchimp: handle records with no no "activity" field in response')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-08"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4621"},"4621")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mailchimp fix url-base")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-06-09"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4285"},"4285")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Use datacenter URL parameter from apikey")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-06-08"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3973"},"3973")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add AIRBYTE","_","ENTRYPOINT for Kubernetes support")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-06-08"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3415"},"3415")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Get Members activities")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-04-03"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/2726"},"2726")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix base connector versioning")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-03-09"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/2238"},"2238")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Protocol allows future/unknown properties")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2020-11-30"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/1046"},"1046")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add connectors using an index YAML file")))))}k.isMDXComponent=!0}}]);