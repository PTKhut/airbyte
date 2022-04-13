"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3337],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5123:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={},s="Plaid",p={unversionedId:"integrations/sources/plaid",id:"integrations/sources/plaid",title:"Plaid",description:"Overview",source:"@site/../docs/integrations/sources/plaid.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/plaid",permalink:"/airbyte/integrations/sources/plaid",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/integrations/sources/plaid.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"PersistIq",permalink:"/airbyte/integrations/sources/persistiq"},next:{title:"Pinterest",permalink:"/airbyte/integrations/sources/pinterest"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide for Sandbox",id:"setup-guide-for-sandbox",level:3}],d={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"plaid"},"Plaid"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Plaid source supports Full Refresh syncs. It currently only supports pulling from the balances endpoint. It will soon support other data streams ","(","e.g. transactions",")","."),(0,i.kt)("h3",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"Output streams:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://plaid.com/docs/api/products/#balance"},"Balance"))),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Coming soon")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Coming soon")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,i.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,i.kt)("p",null,"The Plaid connector should not run into Stripe API limitations under normal usage. Please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plaid Account ","(","with client","_","id and API key",")"),(0,i.kt)("li",{parentName:"ul"},"Access Token")),(0,i.kt)("h3",{id:"setup-guide-for-sandbox"},"Setup guide for Sandbox"),(0,i.kt)("p",null,"This guide will walk through how to create the credentials you need to run this source in the sandbox of a new plaid account. For production use, consider using the Link functionality that Plaid provides ",(0,i.kt)("a",{parentName:"p",href:"https://plaid.com/docs/api/tokens/#linktokencreate"},"here")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Create a Plaid account")," Go to the ",(0,i.kt)("a",{parentName:"p",href:"https://plaid.com/"},"plaid website"),' and click "Get API Keys". Follow the instructions to create an account.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Get Client id and API key")," Go to the ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.plaid.com/team/keys"},"keys page")," where you will find the client id and your Sandbox API Key ","(",'in the UI this key is just called "Sandbox"',")",".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Create an Access Token")," First you have to create a public token key and then you can create an access token."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Create public key")," Make this API call described in ",(0,i.kt)("a",{parentName:"p",href:"https://plaid.com/docs/api/sandbox/#sandboxpublic_tokencreate"},"plaid docs")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'  curl --location --request POST \'https://sandbox.plaid.com/sandbox/public_token/create\' \\\n      --header \'Content-Type: application/json;charset=UTF-16\' \\\n      --data-raw \'{\n          "client_id": "<your-client-id>",\n          "secret": "<your-sandbox-api-key>",\n          "institution_id": "ins_43",\n          "initial_products": ["auth", "transactions"]\n      }\'\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Exchange public key for access token")," Make this API call described in ",(0,i.kt)("a",{parentName:"p",href:"https://plaid.com/docs/api/tokens/#itempublic_tokenexchange"},"plaid docs"),". The public token used in this request, is the token returned in the response of the previous request. This request will return an ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token"),", which is the last field we need to generate for the config for this source!"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'https://sandbox.plaid.com/item/public_token/exchange\' \\\n  --header \'Content-Type: application/json;charset=UTF-16\' \\\n  --data-raw \'{\n      "client_id": "<your-client-id>",\n      "secret": "<your-sandbox-api-key>",\n      "public_token": "<public-token-returned-by-previous-request>"\n  }\'\n'))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We should now have everything we need to configure this source in the UI."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-03-31"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11104"},"11104")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix 100 record limit and added start_date")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-01-05"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7977"},"7977")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Migrate to Python CDK + add transaction stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-xx-xx"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11104"},"7977")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix 100 record limit and added start_date")))))}m.isMDXComponent=!0}}]);