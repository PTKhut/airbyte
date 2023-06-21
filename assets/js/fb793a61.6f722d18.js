"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[34719],{30362:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={},o="July 2022",p={unversionedId:"release_notes/july_2022",id:"release_notes/july_2022",title:"July 2022",description:"Airbyte v0.39.27-alpha to v0.39.41-alpha",source:"@site/../docs/release_notes/july_2022.md",sourceDirName:"release_notes",slug:"/release_notes/july_2022",permalink:"/release_notes/july_2022",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/release_notes/july_2022.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"August 2022",permalink:"/release_notes/august_2022"}},l={},s=[{value:"Airbyte v0.39.27-alpha to v0.39.41-alpha",id:"airbyte-v03927-alpha-to-v03941-alpha",level:2},{value:"New features",id:"new-features",level:3},{value:"Improvements",id:"improvements",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"july-2022"},"July 2022"),(0,n.kt)("h2",{id:"airbyte-v03927-alpha-to-v03941-alpha"},"Airbyte ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/airbytehq/airbyte/releases/tag/v0.39.27-alpha"},"v0.39.27-alpha")," to ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/airbytehq/airbyte/releases/tag/v0.39.41-alpha"},"v0.39.41-alpha")),(0,n.kt)("p",null,"This page includes new features and improvements to the Airbyte Cloud and Airbyte Open Source platforms. "),(0,n.kt)("h3",{id:"new-features"},"New features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Added per-stream state to the Airbyte Cloud and OSS platforms. Per-stream state currently includes per-stream resets and connection states, and it lays the groundwork for auto-detecting schema changes, parallel syncs, and more.  "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/managing-airbyte-cloud/edit-stream-configuration"},"new flow")," gives you the option to refresh streams when saving changes to a connection. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/14634"},"#14634"),"  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Per-stream reset functionality is now available for connections with a Postgres source. Per-stream resets allow you to reset only the affected streams when saving an edited connection, instead of resetting all streams in a connection. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/14634"},"#14634"),"  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For connections with a Postgres source, the state of the connection to the source is displayed in the Connection State. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/15020"},"#15020"),"  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For Airbyte Open Source users:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you are using the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/integrations/sources/postgres"},"Postgres")," source connector, upgrade your Airbyte platform to version v0.40.0-alpha or newer and ",(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/operator-guides/upgrading-airbyte/"},"upgrade")," your AzureBlobStorage connector to version 0.1.6 or newer. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/15008"},"#15008"),"  "))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Added ",(0,n.kt)("inlineCode",{parentName:"p"},"airbyte_type")," to normalization. This displays whether ",(0,n.kt)("inlineCode",{parentName:"p"},"timestamp")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"time")," have an associated time zone. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/13591"},"#13591"),"  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Airbyte is currently developing a low-code connector builder, which allows you to easily create new source and destination connectors in your workspace. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/14402"},"#14402")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/14317"},"#14317")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/14288"},"#14288")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/14004"},"#14004"),"  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Added ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/managing-airbyte-cloud/manage-airbyte-cloud-workspace#single-workspace-vs-multiple-workspaces"},"documentation")," about the benefits and considerations of having a single workspace vs. multiple workspaces in Airbyte Cloud. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/14608"},"#14608")))),(0,n.kt)("h3",{id:"improvements"},"Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Improved platform security by using Docker images from the latest version of OpenJDK (openjdk:19-slim-bullseye). ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/14971"},"#14971"),"  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Improved Airbyte Open Source self-hosting by refactoring and publishing Helm charts according to best practices as we prepare to formally support Helm deployments. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/14794"},"#14794"),"  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Improved Airbyte Open Source by supporting the OpenTelemetry (OTEL) Collector. Airbyte Open Source now sends telemetry data to the OTEL collector, and we included a set of ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/operator-guides/scaling-airbyte/#metrics"},"recommended metrics")," to export to OTEL when running Airbyte Open Source at scale. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/12908"},"#12908"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Improved the ",(0,n.kt)("a",{parentName:"p",href:"https://airbyte.com/connector-development-kit"},"Airbyte Connector Development Kit (CDK)")," by enabling detailed bug logs from the command line. In addition to the preset CDK debug logs, you can also create custom debug statements and display custom debug logs in the command line. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/14521"},"#14521"),"  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Improved CDK by supporting a schema generator tool. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/13518"},"#13518"),"  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Improved ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/contributing-to-airbyte/developing-locally#connector"},"documentation")," about contributing locally by adding information on formatting connectors. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/14661"},"#14661"),"  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Improved ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/master/octavia-cli#-octavia-cli"},"Octavia CLI")," so you can now:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Switch between Airbyte instances and deploy the same configurations on multiple instances. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/13070"},"#13070")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/13748"},"#13748"),"  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Enable normalization or custom DBT transformation from YAML configurations. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/10973"},"#10973"),"  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Set custom HTTP headers on requests made to the Airbyte server. You can use CLI If you have instances secured with basic access authentication or identity-aware proxy (IAP). This lays the groundwork for making the CLI compatible with Airbyte Cloud once we release the public API. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/13770"},"#13770"),"  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Import existing remote resources to a local Octavia project with ",(0,n.kt)("inlineCode",{parentName:"p"},"octavia import"),". ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/14291"},"#14291"),"  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," command to get existing configurations for sources, destinations, and connections. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/13254"},"#13254"),"  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Retrieve the JSON configuration using ",(0,n.kt)("inlineCode",{parentName:"p"},"octavia get"),", which is useful for some scripting and orchestration use cases. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/13254"},"#13254")))))))}m.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),h=n,y=u["".concat(l,".").concat(h)]||u[h]||m[h]||i;return a?r.createElement(y,o(o({ref:t},c),{},{components:a})):r.createElement(y,o({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);