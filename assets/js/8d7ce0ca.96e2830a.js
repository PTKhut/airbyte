"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[109],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),h=i,b=f["".concat(s,".").concat(h)]||f[h]||u[h]||o;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},76391:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],c={description:"Start triggering Airbyte jobs with Prefect in minutes"},s="Using the Prefect Airbyte Task",l={unversionedId:"operator-guides/using-prefect-task",id:"operator-guides/using-prefect-task",title:"Using the Prefect Airbyte Task",description:"Start triggering Airbyte jobs with Prefect in minutes",source:"@site/../docs/operator-guides/using-prefect-task.md",sourceDirName:"operator-guides",slug:"/operator-guides/using-prefect-task",permalink:"/airbyte/operator-guides/using-prefect-task",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/operator-guides/using-prefect-task.md",tags:[],version:"current",frontMatter:{description:"Start triggering Airbyte jobs with Prefect in minutes"},sidebar:"mySidebar",previous:{title:"Using the Airflow Airbyte Operator",permalink:"/airbyte/operator-guides/using-the-airflow-airbyte-operator"},next:{title:"Using the Dagster Integration",permalink:"/airbyte/operator-guides/using-dagster-integration"}},p={},u=[{value:"1. Set up the tools",id:"1-set-up-the-tools",level:2},{value:"<strong>Start Airbyte</strong>",id:"start-airbyte",level:3},{value:"<strong>Start Prefect</strong>",id:"start-prefect",level:3},{value:"2. Create a Flow in Prefect to trigger your Airbyte job",id:"2-create-a-flow-in-prefect-to-trigger-your-airbyte-job",level:2},{value:"Create a new Prefect Project",id:"create-a-new-prefect-project",level:3},{value:"Retrieving the Airbyte Connection ID",id:"retrieving-the-airbyte-connection-id",level:3},{value:"Creating a simple Prefect DAG to run an Airbyte Sync Job",id:"creating-a-simple-prefect-dag-to-run-an-airbyte-sync-job",level:3},{value:"That&#39;s it!",id:"thats-it",level:2}],f={toc:u};function h(e){var t=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-the-prefect-airbyte-task"},"Using the Prefect Airbyte Task"),(0,o.kt)("p",null,"Airbyte is an official integration Task in the Prefect project. The Airbyte Task allows you to trigger synchronization jobs in Prefect, and this tutorial will walk through configuring your Prefect Flow to do so."),(0,o.kt)("p",null,"The Airbyte Task documentation on Prefect project can be found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.prefect.io/api/latest/tasks/airbyte.html#airbyteconnectiontask"},"here"),"."),(0,o.kt)("h2",{id:"1-set-up-the-tools"},"1. Set up the tools"),(0,o.kt)("p",null,"First, make sure you have Docker installed. We'll be using the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose")," command, so your install should contain ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose"),"."),(0,o.kt)("h3",{id:"start-airbyte"},(0,o.kt)("strong",{parentName:"h3"},"Start Airbyte")),(0,o.kt)("p",null,"If this is your first time using Airbyte, we suggest going through our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/e378d40236b6a34e1c1cb481c8952735ec687d88/docs/quickstart/getting-started.md"},"Basic Tutorial"),". This tutorial will use the Connection set up in the basic tutorial."),(0,o.kt)("p",null,"For the purposes of this tutorial, set your Connection's ",(0,o.kt)("strong",{parentName:"p"},"sync frequency")," to ",(0,o.kt)("strong",{parentName:"p"},"manual"),". Prefect will be responsible for manually triggering the Airbyte job."),(0,o.kt)("h3",{id:"start-prefect"},(0,o.kt)("strong",{parentName:"h3"},"Start Prefect")),(0,o.kt)("p",null,"If you don't have a Prefect instance, we recommend following this ",(0,o.kt)("a",{parentName:"p",href:"https://docs.prefect.io/core/getting_started/install.html"},"guide")," to set one up."),(0,o.kt)("h2",{id:"2-create-a-flow-in-prefect-to-trigger-your-airbyte-job"},"2. Create a Flow in Prefect to trigger your Airbyte job"),(0,o.kt)("h3",{id:"create-a-new-prefect-project"},"Create a new Prefect Project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'prefect create project "airbyte"\n')),(0,o.kt)("h3",{id:"retrieving-the-airbyte-connection-id"},"Retrieving the Airbyte Connection ID"),(0,o.kt)("p",null,"We'll need the Airbyte Connection ID so our Prefect Flow knows which Airbyte Connection to trigger."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(9296).Z,width:"3560",height:"1058"})),(0,o.kt)("p",null,"This ID can be seen in the URL on the connection page in the Airbyte UI. The Airbyte UI can be accessed at ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8000"),"."),(0,o.kt)("h3",{id:"creating-a-simple-prefect-dag-to-run-an-airbyte-sync-job"},"Creating a simple Prefect DAG to run an Airbyte Sync Job"),(0,o.kt)("p",null,"Create a new folder called ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte_prefect")," and create a file ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte_prefect_flow.py"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from prefect import Flow\nfrom prefect.tasks.airbyte.airbyte import AirbyteConnectionTask\n\nairbyte_conn = AirbyteConnectionTask(\n        airbyte_server_host="localhost",\n        airbyte_server_port=8000,\n        airbyte_api_version="v1",\n        connection_id="04e128af-1092-4a83-bf33-1b8c85395d74"\n)\n\nwith Flow("first-airbyte-task") as flow:\n    flow.add_task(airbyte_conn) \n\n# Register the flow under the "airbyte" project\nflow.register(project_name="airbyte")\n')),(0,o.kt)("p",null,"The Airbyte Prefect Task accepts the following parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"airbyte_server_host"),": The host URL to your Airbyte instance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"airbyte_server_post"),": The port value you have selected for your Airbyte instance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"airbyte_api_version"),": default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"v1"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"connection_id"),": The ID of the Airbyte Connection to be triggered by Prefect.")),(0,o.kt)("p",null,"After running the file, ",(0,o.kt)("inlineCode",{parentName:"p"},"python3 airbyte_prefect_flow.py")," this will register the Flow in Prefect Server."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(57224).Z,width:"1150",height:"138"})),(0,o.kt)("p",null,"Access the link from the output from the previous command to see the Flow in Prefect Server, or you can navigate in Prefect UI to find the new Flow -> Access the link from the output from the previous command to see the Flow in the Prefect Server. Alternatively, you can go to the Prefect UI to find the new Flow."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(7214).Z,width:"3548",height:"604"})),(0,o.kt)("p",null,"Click on the button ",(0,o.kt)("inlineCode",{parentName:"p"},"Run")," and configure your first run.\n",(0,o.kt)("img",{src:r(86132).Z,width:"3568",height:"1782"})),(0,o.kt)("p",null,"After a few moments you should see the finished run."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(71555).Z,width:"3560",height:"1510"})),(0,o.kt)("p",null,"After that you have the option to configure a more complex Schedule to your Flow. See the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.prefect.io/core/concepts/schedules.html"},"Prefect Schedule docs.")),(0,o.kt)("h2",{id:"thats-it"},"That's it!"),(0,o.kt)("p",null,"Don't be fooled by our simple example of only one Prefect Flow. Airbyte is a powerful data integration platform supporting many sources and destinations. The Airbyte Prefect Task means Airbyte can now be easily used with the Prefect ecosystem - give it a shot!"),(0,o.kt)("p",null,"We love to hear any questions or feedback on our ",(0,o.kt)("a",{parentName:"p",href:"https://slack.airbyte.io/"},"Slack"),". We're still in alpha, so if you see any rough edges or want to request a connector, feel free to create an issue on our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte"},"Github")," or thumbs up an existing issue."))}h.isMDXComponent=!0},9296:function(e,t,r){t.Z=r.p+"assets/images/airbyte_prefect_connection-0e5d809565419192682b90b063eb1945.png"},7214:function(e,t,r){t.Z=r.p+"assets/images/airbyte_prefect_flow-c2e8362bf255ac7beb195b0df80b01cd.png"},86132:function(e,t,r){t.Z=r.p+"assets/images/airbyte_prefect_flow_configure_run-24fcb969ef927b541114fe55cfd2ef60.png"},71555:function(e,t,r){t.Z=r.p+"assets/images/airbyte_prefect_flow_run-a75f3ed8b6eddce1911cfb1524b20ad4.png"},57224:function(e,t,r){t.Z=r.p+"assets/images/airbyte_prefect_register_flow-cb696fb2153fba7c512c1cb615de14f7.png"}}]);