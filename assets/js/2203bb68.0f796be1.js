"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[72830],{69951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={},a="Submit a New Connector",l={unversionedId:"contributing-to-airbyte/submit-new-connector",id:"contributing-to-airbyte/submit-new-connector",title:"Submit a New Connector",description:"Due to project priorities, we may not be able to accept all contributions at this time.",source:"@site/../docs/contributing-to-airbyte/submit-new-connector.md",sourceDirName:"contributing-to-airbyte",slug:"/contributing-to-airbyte/submit-new-connector",permalink:"/contributing-to-airbyte/submit-new-connector",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/contributing-to-airbyte/submit-new-connector.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Changes to CDK or Low-Code Connector",permalink:"/contributing-to-airbyte/change-cdk-connector"},next:{title:"Updating Documentation",permalink:"/contributing-to-airbyte/writing-docs"}},s={},c=[{value:"Find an Issue or Create it!",id:"find-an-issue-or-create-it",level:4},{value:"Code your contribution",id:"code-your-contribution",level:4},{value:"Open a pull request",id:"open-a-pull-request",level:4},{value:"4. Review process",id:"4-review-process",level:4}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"submit-a-new-connector"},"Submit a New Connector"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Due to project priorities, we may not be able to accept all contributions at this time. ")),(0,o.kt)("h4",{id:"find-an-issue-or-create-it"},"Find an Issue or Create it!"),(0,o.kt)("p",null,"Before jumping into the code please first:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Verify if there is an existing ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/issues?q=is%3Aopen+is%3Aissue+label%3Aarea%2Fconnectors+-label%3Aneeds-triage+label%3Acommunity"},"Issue")," "),(0,o.kt)("li",{parentName:"ol"},"If you don't find an existing issue, ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/issues/new?assignees=&labels=area%2Fconnectors%2Cnew-connector&projects=&template=5-feature-new-connector.yaml"},"Request a New Connector"))),(0,o.kt)("p",null,"This will enable our team to make sure your contribution does not overlap with existing works and will comply with the design orientation we are currently heading the product toward. If you do not receive an update on the issue from our team, please ping us on ",(0,o.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"Slack"),"!"),(0,o.kt)("h4",{id:"code-your-contribution"},"Code your contribution"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To contribute to a connector, fork the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte"},"Connector repository"),". "),(0,o.kt)("li",{parentName:"ol"},"Open a branch for your work"),(0,o.kt)("li",{parentName:"ol"},"Code the change"),(0,o.kt)("li",{parentName:"ol"},"Ensure all tests pass. For connectors, this includes acceptance tests as well."),(0,o.kt)("li",{parentName:"ol"},"Update documentation in ",(0,o.kt)("inlineCode",{parentName:"li"},"docs/integrations/<connector-name>.md")," ")),(0,o.kt)("h4",{id:"open-a-pull-request"},"Open a pull request"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Rebase master with your branch before submitting a pull request."),(0,o.kt)("li",{parentName:"ol"},"Open the pull request."),(0,o.kt)("li",{parentName:"ol"},"Follow the ",(0,o.kt)("a",{parentName:"li",href:"/contributing-to-airbyte/resources/pull-requests-handbook#pull-request-title-convention"},"title convention")," for Pull Requests"),(0,o.kt)("li",{parentName:"ol"},"Link to an existing Issue"),(0,o.kt)("li",{parentName:"ol"},"Update the ",(0,o.kt)("a",{parentName:"li",href:"/contributing-to-airbyte/resources/pull-requests-handbook#descriptions"},"description")),(0,o.kt)("li",{parentName:"ol"},"Wait for a review from a community maintainer or our team.")),(0,o.kt)("h4",{id:"4-review-process"},"4. Review process"),(0,o.kt)("p",null,"When we review, we look at:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u200cDoes the PR add all existing streams, pagination and incremental syncs?"),(0,o.kt)("li",{parentName:"ul"},"Is the proposed solution reasonable?"),(0,o.kt)("li",{parentName:"ul"},"Is it tested? ","(","unit tests or integation tests",")","\n\u200cOnce your PR passes, we will merge it \ud83c\udf89.")))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),b=o,d=p["".concat(s,".").concat(b)]||p[b]||m[b]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);