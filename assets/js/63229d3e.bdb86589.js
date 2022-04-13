"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5769],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60466:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={},s="Local JSON",c={unversionedId:"integrations/destinations/local-json",id:"integrations/destinations/local-json",title:"Local JSON",description:'{% hint style="danger" %}',source:"@site/../docs/integrations/destinations/local-json.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/local-json",permalink:"/airbyte/integrations/destinations/local-json",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/integrations/destinations/local-json.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Local CSV",permalink:"/airbyte/integrations/destinations/local-csv"},next:{title:"Mariadb Columnstore",permalink:"/airbyte/integrations/destinations/mariadb-columnstore"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Sync Overview",id:"sync-overview",level:3},{value:"Output schema",id:"output-schema",level:4},{value:"Features",id:"features",level:4},{value:"Performance considerations",id:"performance-considerations",level:4},{value:"Getting Started",id:"getting-started",level:2},{value:"Example:",id:"example",level:3},{value:"Access Replicated Data Files",id:"access-replicated-data-files",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"local-json"},"Local JSON"),(0,r.kt)("p",null,'{% hint style="danger" %}\nThis destination is meant to be used on a local workstation and won\'t work on Kubernetes\n{% endhint %}'),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This destination writes data to a directory on the ",(0,r.kt)("em",{parentName:"p"},"local")," filesystem on the host running Airbyte. By default, data is written to ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/airbyte_local"),". To change this location, modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"LOCAL_ROOT")," environment variable for Airbyte."),(0,r.kt)("h3",{id:"sync-overview"},"Sync Overview"),(0,r.kt)("h4",{id:"output-schema"},"Output schema"),(0,r.kt)("p",null,"Each stream will be output into its own file. Each file will a collections of ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," objects containing 3 fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_ab_id"),": a uuid assigned by Airbyte to each event that is processed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_emitted_at"),": a timestamp representing when the event was pulled from the data source."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_data"),": a json blob representing with the extracted data.")),(0,r.kt)("h4",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported"),(0,r.kt)("th",{parentName:"tr",align:"left"}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"As this connector does not support dbt, we don't support this sync mode on this destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h4",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("p",null,"This integration will be constrained by the speed at which your filesystem accepts writes."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"destination_path")," will always start with ",(0,r.kt)("inlineCode",{parentName:"p"},"/local")," whether it is specified by the user or not. Any directory nesting within local will be mapped onto the local mount."),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"LOCAL_ROOT")," env variable in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file is set ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/airbyte_local"),"."),(0,r.kt)("p",null,"The local mount is mounted by Docker onto ",(0,r.kt)("inlineCode",{parentName:"p"},"LOCAL_ROOT"),". This means the ",(0,r.kt)("inlineCode",{parentName:"p"},"/local")," is substituted by ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/airbyte_local")," by default."),(0,r.kt)("h3",{id:"example"},"Example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"destination_path")," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"/local/cars/models")),(0,r.kt)("li",{parentName:"ul"},"the local mount is using the ",(0,r.kt)("inlineCode",{parentName:"li"},"/tmp/airbyte_local")," default"),(0,r.kt)("li",{parentName:"ul"},"then all data will be written to ",(0,r.kt)("inlineCode",{parentName:"li"},"/tmp/airbyte_local/cars/models")," directory.")),(0,r.kt)("h2",{id:"access-replicated-data-files"},"Access Replicated Data Files"),(0,r.kt)("p",null,"If your Airbyte instance is running on the same computer that you are navigating with, you can open your browser and enter ",(0,r.kt)("a",{parentName:"p",href:"file:///tmp/airbyte_local"},"file:///tmp/airbyte","_","local")," to look at the replicated data locally. If the first approach fails or if your Airbyte instance is running on a remote server, follow the following steps to access the replicated files:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Access the scheduler container using ",(0,r.kt)("inlineCode",{parentName:"li"},"docker exec -it airbyte-scheduler bash")),(0,r.kt)("li",{parentName:"ol"},"Navigate to the default local mount using ",(0,r.kt)("inlineCode",{parentName:"li"},"cd /tmp/airbyte_local")),(0,r.kt)("li",{parentName:"ol"},"Navigate to the replicated file directory you specified when you created the destination, using ",(0,r.kt)("inlineCode",{parentName:"li"},"cd /{destination_path}")),(0,r.kt)("li",{parentName:"ol"},"List files containing the replicated data using ",(0,r.kt)("inlineCode",{parentName:"li"},"ls")),(0,r.kt)("li",{parentName:"ol"},"Execute ",(0,r.kt)("inlineCode",{parentName:"li"},"cat {filename}")," to display the data in a particular file")),(0,r.kt)("p",null,"You can also copy the output file to your host machine, the following command will copy the file to the current working directory you are using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"docker cp airbyte-scheduler:/tmp/airbyte_local/{destination_path}/{filename}.jsonl .\n")),(0,r.kt)("p",null,"Note: If you are running Airbyte on Windows with Docker backed by WSL2, you have to use similar step as above or refer to this ",(0,r.kt)("a",{parentName:"p",href:"/airbyte/operator-guides/locating-files-local-destination"},"link")," for an alternative approach."))}m.isMDXComponent=!0}}]);