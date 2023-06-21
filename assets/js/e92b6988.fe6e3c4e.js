"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[86283],{72947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(87462),i=(n(67294),n(3905));const a={},r="Configuring Sync Notifications",c={unversionedId:"operator-guides/configuring-sync-notifications",id:"operator-guides/configuring-sync-notifications",title:"Configuring Sync Notifications",description:"Overview",source:"@site/../docs/operator-guides/configuring-sync-notifications.md",sourceDirName:"operator-guides",slug:"/operator-guides/configuring-sync-notifications",permalink:"/operator-guides/configuring-sync-notifications",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/operator-guides/configuring-sync-notifications.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Scaling Airbyte",permalink:"/operator-guides/scaling-airbyte"},next:{title:"Troubleshooting & FAQ",permalink:"/troubleshooting"}},s={},l=[{value:"Overview",id:"overview",level:2},{value:"Set up Slack Notifications on Sync Status",id:"set-up-slack-notifications-on-sync-status",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuring-sync-notifications"},"Configuring Sync Notifications"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"You can set up Airbyte to notify you when syncs have ",(0,i.kt)("strong",{parentName:"p"},"failed")," or ",(0,i.kt)("strong",{parentName:"p"},"succeeded"),". This is achieved through a webhook, a URL that you can input into other applications to get real time data from Airbyte."),(0,i.kt)("h2",{id:"set-up-slack-notifications-on-sync-status"},"Set up Slack Notifications on Sync Status"),(0,i.kt)("p",null,"If you're more of a visual learner, just head over to ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=NjYm8F-KiFc&ab_channel=Airbyte"},"this video")," to learn how to do this. Otherwise, keep reading!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Set up the bot.")),(0,i.kt)("p",null,"Navigate to ",(0,i.kt)("a",{parentName:"p",href:"https://api.slack.com/apps/"},"https://api.slack.com/apps/"),". Hit ",(0,i.kt)("inlineCode",{parentName:"p"},"Create an App"),". "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(96780).Z,width:"1438",height:"702"}),"   "),(0,i.kt)("p",null,"Then click ",(0,i.kt)("inlineCode",{parentName:"p"},"From scratch"),". Enter your App Name (e.g. Airbyte Sync Notifications) and pick your desired Slack workspace. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Set up the webhook URL.")),(0,i.kt)("p",null,"Now on the left sidebar, click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Incoming Webhooks"),". "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(16025).Z,width:"478",height:"730"})),(0,i.kt)("p",null,"Click the slider button in the top right to turn the feature on. Then click ",(0,i.kt)("inlineCode",{parentName:"p"},"Add New Webhook to Workspace"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(43568).Z,width:"1484",height:"1856"})),(0,i.kt)("p",null,"Pick the channel that you want to receive Airbyte notifications in (ideally a dedicated one), and click ",(0,i.kt)("inlineCode",{parentName:"p"},"Allow")," to give it permissions to access the channel. You should see the bot show up in the selected channel now."),(0,i.kt)("p",null,"Now you should see an active webhook right above the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add New Webhook to Workspace")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(46837).Z,width:"1328",height:"368"})," "),(0,i.kt)("p",null,"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Copy.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Add the webhook to Airbyte.")),(0,i.kt)("p",null,"Assuming you have a ",(0,i.kt)("a",{parentName:"p",href:"/deploying-airbyte/"},"running instance of Airbyte"),", we can navigate to the UI. Click on Settings and then click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Notifications"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(38017).Z,width:"594",height:"774"})),(0,i.kt)("p",null,"Simply paste the copied webhook URL in ",(0,i.kt)("inlineCode",{parentName:"p"},"Connection status Webhook URL")," and you're ready to go! On this page, you can click one or both of the sliders to decide whether you want notifications on sync successes, failures, or both. Make sure to click ",(0,i.kt)("inlineCode",{parentName:"p"},"Save changes")," before you leave."),(0,i.kt)("p",null,"Your Webhook URL should look something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1925).Z,width:"2416",height:"652"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Test it out.")),(0,i.kt)("p",null,"From the settings page, you can click ",(0,i.kt)("inlineCode",{parentName:"p"},"Test")," to send a test message to the channel. Or, just run a sync now and try it out! If all goes well, you should receive a notification in your selected channel that looks like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(17386).Z,width:"1580",height:"266"})),(0,i.kt)("p",null,"You're done!"))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(g,r(r({ref:t},p),{},{components:n})):o.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,r[1]=c;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},43568:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/notifications_add_new_webhook-4a0d0c63c1d2ec823ada8902890ead75.png"},1925:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/notifications_airbyte_notification_settings-c1816ac46d4d7eaa4b5d991d76bcc94c.png"},38017:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/notifications_airbyte_settings-c5f30cb9be6d757a68b47bed862d349b.png"},96780:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/notifications_create_slack_app-8d6a4a6f6d30fb2cbc43daf86aca6730.png"},16025:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/notifications_incoming_webhooks-21c2915d8c24076117d765a7c815c987.png"},17386:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/notifications_slack_message-f44857b936c9f383b2e986557c0a4b58.png"},46837:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/notifications_webhook_url-60a87ce0abf230aa63e4095a577c1bce.png"}}]);