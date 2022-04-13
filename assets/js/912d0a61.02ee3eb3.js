"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2504],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26985:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={},s="Getting Started",c={unversionedId:"quickstart/getting-started",id:"quickstart/getting-started",title:"Getting Started",description:"Goal",source:"@site/../docs/quickstart/getting-started.md",sourceDirName:"quickstart",slug:"/quickstart/getting-started",permalink:"/airbyte/quickstart/getting-started",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/quickstart/getting-started.md",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"Goal",id:"goal",level:2},{value:"Start Airbyte",id:"start-airbyte",level:2},{value:"Set up your preferences",id:"set-up-your-preferences",level:2},{value:"Set up your first connection",id:"set-up-your-first-connection",level:2},{value:"Create a source",id:"create-a-source",level:3},{value:"Create a destination",id:"create-a-destination",level:3},{value:"Create connection",id:"create-connection",level:3},{value:"Check the logs of your first sync",id:"check-the-logs-of-your-first-sync",level:2},{value:"Check the data of your first sync",id:"check-the-data-of-your-first-sync",level:2},{value:"That&#39;s it!",id:"thats-it",level:2}],d={toc:p};function h(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h2",{id:"goal"},"Goal"),(0,a.kt)("p",null,"During this getting started tutorial, we are going to replicate currencies closing price into a JSON file."),(0,a.kt)("h2",{id:"start-airbyte"},"Start Airbyte"),(0,a.kt)("p",null,"First of all, make sure you have Docker and Docker Compose installed. Then run the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"git clone https://github.com/airbytehq/airbyte.git\ncd airbyte\ndocker-compose up\n")),(0,a.kt)("p",null,"Once you see an Airbyte banner, the UI is ready to go at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8000/"},"http://localhost:8000/"),"."),(0,a.kt)("h2",{id:"set-up-your-preferences"},"Set up your preferences"),(0,a.kt)("p",null,"You should see an onboarding page. Enter your email if you want updates about Airbyte and continue."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6610).Z,width:"1704",height:"1780"})),(0,a.kt)("h2",{id:"set-up-your-first-connection"},"Set up your first connection"),(0,a.kt)("h3",{id:"create-a-source"},"Create a source"),(0,a.kt)("p",null,"The source we are creating will pull data from an external API. It will replicate the closing price of currencies compared to USD since the specified start date."),(0,a.kt)("p",null,"To set it up, just follow the instructions on the screenshot below."),(0,a.kt)("p",null,'{% hint style="info" %}\nYou might have to wait ~30 seconds before the fields show up because it is the first time you\'re using Airbyte.\n{% endhint %}'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(39673).Z,width:"902",height:"838"})),(0,a.kt)("h3",{id:"create-a-destination"},"Create a destination"),(0,a.kt)("p",null,"The destination we are creating is a simple JSON line file, meaning that it will contain one JSON object per line. Each objects will represent data extracted from the source."),(0,a.kt)("p",null,"The resulting files will be located in ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp/airbyte_local/json_data")),(0,a.kt)("p",null,"To set it up, just follow the instructions on the screenshot below."),(0,a.kt)("p",null,'{% hint style="info" %}\nYou might have to wait ~30 seconds before the fields show up because it is the first time you\'re using Airbyte.\n{% endhint %}'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(77435).Z,width:"926",height:"869"})),(0,a.kt)("h3",{id:"create-connection"},"Create connection"),(0,a.kt)("p",null,"When we create the connection, we can select which data stream we want to replicate. We can also select if we want an incremental replication. The replication will run at the specified sync frequency."),(0,a.kt)("p",null,"To set it up, just follow the instructions on the screenshot below."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(97108).Z,width:"889",height:"824"})),(0,a.kt)("h2",{id:"check-the-logs-of-your-first-sync"},"Check the logs of your first sync"),(0,a.kt)("p",null,"After you've completed the onboarding, you will be redirected to the source list and will see the source you just added. Click on it to find more information about it. You will now see all the destinations connected to that source. Click on it and you will see the sync history."),(0,a.kt)("p",null,"From there, you can look at the logs, download them, force a sync and adjust the configuration of your connection."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(80125).Z,width:"1122",height:"830"})),(0,a.kt)("h2",{id:"check-the-data-of-your-first-sync"},"Check the data of your first sync"),(0,a.kt)("p",null,"Now let's verify that this worked:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat /tmp/airbyte_local/json_data/_airbyte_raw_exchange_rate.jsonl\n")),(0,a.kt)("p",null,"You should see one line for each day that was replicated."),(0,a.kt)("p",null,"If you have ",(0,a.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},(0,a.kt)("inlineCode",{parentName:"a"},"jq"))," installed, let's look at the evolution of ",(0,a.kt)("inlineCode",{parentName:"p"},"EUR"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat /tmp/airbyte_local/test_json/_airbyte_raw_exchange_rate.jsonl | \njq -c '.data | {date: .date, EUR: .EUR }'\n")),(0,a.kt)("p",null,"And there you have it. You've pulled data from an API directly into a file and all of the actual configuration for this replication only took place in the UI."),(0,a.kt)("h2",{id:"thats-it"},"That's it!"),(0,a.kt)("p",null,"This is just the beginning of using Airbyte. We support a large collection of sources and destinations. You can even contribute your own."),(0,a.kt)("p",null,"If you have any questions at all, please reach out to us on ",(0,a.kt)("a",{parentName:"p",href:"https://slack.airbyte.io/"},"Slack"),". We\u2019re still in alpha, so if you see any rough edges or want to request a connector you need, please create an issue on our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte"},"Github")," or leave a thumbs up on an existing issue."),(0,a.kt)("p",null,"Thank you and we hope you enjoy using Airbyte."))}h.isMDXComponent=!0},6610:function(e,t,n){t.Z=n.p+"assets/images/airbyte_get-started-65cd1be85b5b9e0816a8557536ea976d.png"},97108:function(e,t,n){t.Z=n.p+"assets/images/demo_connection-3b7f21d8b148e17c6ea4dc43f047bb2d.png"},77435:function(e,t,n){t.Z=n.p+"assets/images/demo_destination-870ddcdd25c38f87fc0f4a7b21b4a04b.png"},80125:function(e,t,n){t.Z=n.p+"assets/images/demo_history-e6ddc655d4b6a48908514193e8968113.png"},39673:function(e,t,n){t.Z=n.p+"assets/images/demo_source-6336f13023dbf5e778081cdc0cb84777.png"}}]);