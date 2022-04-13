"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3773],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),y=u(n),f=o,d=y["".concat(l,".").concat(f)]||y[f]||p[f]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},53627:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={},l="On AWS ECS (Coming Soon)",u={unversionedId:"deploying-airbyte/on-aws-ecs",id:"deploying-airbyte/on-aws-ecs",title:"On AWS ECS \\(Coming Soon\\)",description:'{% hint style="info" %}',source:"@site/../docs/deploying-airbyte/on-aws-ecs.md",sourceDirName:"deploying-airbyte",slug:"/deploying-airbyte/on-aws-ecs",permalink:"/airbyte/deploying-airbyte/on-aws-ecs",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/deploying-airbyte/on-aws-ecs.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"On AWS \\(EC2\\)",permalink:"/airbyte/deploying-airbyte/on-aws-ec2"},next:{title:"On Azure\\(VM\\)",permalink:"/airbyte/deploying-airbyte/on-azure-vm-cloud-shell"}},s={},p=[],y={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"on-aws-ecs-coming-soon"},"On AWS ECS ","(","Coming Soon",")"),(0,i.kt)("p",null,'{% hint style="info" %}\nWe do not currently support deployment on ECS.\n{% endhint %}'),(0,i.kt)("p",null,"The current iteration is not compatible with ECS. Airbyte currently relies on docker containers being able to create other docker containers. ECS does not permit containers to do this. We will be revising this strategy soon, so that we can be compatible with ECS and other container services."))}f.isMDXComponent=!0}}]);