"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5862],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),d=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=d(r),m=n,g=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return r?a.createElement(g,i(i({ref:e},c),{},{components:r})):a.createElement(g,i({ref:e},c))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},97669:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={},p="Google Directory",d={unversionedId:"integrations/sources/google-directory",id:"integrations/sources/google-directory",title:"Google Directory",description:"Overview",source:"@site/../docs/integrations/sources/google-directory.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/google-directory",permalink:"/airbyte/integrations/sources/google-directory",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/integrations/sources/google-directory.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Google Analytics",permalink:"/airbyte/integrations/sources/google-analytics-v4"},next:{title:"Google Search Console",permalink:"/airbyte/integrations/sources/google-search-console"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting Started (Airbyte Cloud)",id:"getting-started-airbyte-cloud",level:2},{value:"Getting Started (Airbyte Open-Source)",id:"getting-started-airbyte-open-source",level:2},{value:"Service account requirements",id:"service-account-requirements",level:3},{value:"Create a Service Account with delegated domain wide authority",id:"create-a-service-account-with-delegated-domain-wide-authority",level:3},{value:"Changelog",id:"changelog",level:2}],u={toc:s};function m(t){var e=t.components,r=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"google-directory"},"Google Directory"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Directory source supports Full Refresh syncs. It uses ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/admin-sdk/directory/v1/get-start/getting-started"},"Google Directory API"),"."),(0,o.kt)("h3",{id:"output-schema"},"Output schema"),(0,o.kt)("p",null,"This Source is capable of syncing the following Streams:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/admin-sdk/directory/v1/guides/manage-users#get_all_users"},"users")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/admin-sdk/directory/v1/guides/manage-groups#get_all_domain_groups"},"groups")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/admin-sdk/directory/v1/guides/manage-group-members#get_all_members"},"group members"))),(0,o.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"array")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"array")),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"features"},"Features"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Coming soon"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,o.kt)("p",null,"This connector attempts to back off gracefully when it hits Directory API's rate limits. To find more information about limits, see ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/admin-sdk/directory/v1/limits"},"Google Directory's Limits and Quotas")," documentation."),(0,o.kt)("h2",{id:"getting-started-airbyte-cloud"},"Getting Started ","(","Airbyte Cloud",")"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"OAuth2.0 authorization")," then ",(0,o.kt)("inlineCode",{parentName:"li"},"Authenticate your Google Directory account"),"."),(0,o.kt)("li",{parentName:"ol"},"You're done.")),(0,o.kt)("h2",{id:"getting-started-airbyte-open-source"},"Getting Started ","(","Airbyte Open-Source",")"),(0,o.kt)("p",null,"Google APIs use the OAuth 2.0 protocol for authentication and authorization. This connector supports ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2#webserver"},"Web server application")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2#serviceaccount"},"Service accounts")," scenarios. Therefore, there are 2 options of setting up authorization for this source:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Use your Google account and authorize over Google\'s OAuth on connection setup. Select "Default OAuth2.0 authorization" from dropdown list.'),(0,o.kt)("li",{parentName:"ul"},"Create service account specifically for Airbyte.")),(0,o.kt)("h3",{id:"service-account-requirements"},"Service account requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Credentials to a Google Service Account with delegated Domain Wide Authority"),(0,o.kt)("li",{parentName:"ul"},"Email address of the workspace admin which created the Service Account")),(0,o.kt)("h3",{id:"create-a-service-account-with-delegated-domain-wide-authority"},"Create a Service Account with delegated domain wide authority"),(0,o.kt)("p",null,"Follow the Google Documentation for performing ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/admin-sdk/directory/v1/guides/delegation"},"Domain Wide Delegation of Authority")," to create a Service account with delegated domain wide authority. This account must be created by an administrator of the Google Workspace. Please make sure to grant the following OAuth scopes to the service user:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"https://www.googleapis.com/auth/admin.directory.user.readonly")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"https://www.googleapis.com/auth/admin.directory.group.readonly"))),(0,o.kt)("p",null,"At the end of this process, you should have JSON credentials to this Google Service Account."),(0,o.kt)("p",null,"You should now be ready to use the Google Directory connector in Airbyte."),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-12-06"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8524"},"8524")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-11-02"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7409"},"7409")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Support oauth (update publish)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-11-02"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7409"},"7409")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Support oauth")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-11-02"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7464"},"7464")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Migrate to the CDK")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-10-20"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6930"},"6930")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Fix crash when a group don't have members")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-10-19"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7167"},"7167")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Add organizations and phones to ",(0,o.kt)("inlineCode",{parentName:"td"},"users")," schema")))))}m.isMDXComponent=!0}}]);