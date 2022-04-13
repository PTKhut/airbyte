"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1174],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),y=u(r),m=o,d=y["".concat(c,".").concat(m)]||y[m]||p[m]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8778:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={},c="Securing Airbyte access",u={unversionedId:"operator-guides/securing-airbyte",id:"operator-guides/securing-airbyte",title:"Securing Airbyte access",description:"Airbyte, in its open-source version, does not support RBAC to manage access to the UI.",source:"@site/../docs/operator-guides/securing-airbyte.md",sourceDirName:"operator-guides",slug:"/operator-guides/securing-airbyte",permalink:"/airbyte/operator-guides/securing-airbyte",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/operator-guides/securing-airbyte.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Scaling Airbyte",permalink:"/airbyte/operator-guides/scaling-airbyte"},next:{title:"Connector Catalog",permalink:"/airbyte/integrations/"}},l={},p=[],y={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"securing-airbyte-access"},"Securing Airbyte access"),(0,a.kt)("p",null,"Airbyte, in its open-source version, does not support RBAC to manage access to the UI."),(0,a.kt)("p",null,"However, multiple options exist for the operators to implement access control themselves."),(0,a.kt)("p",null,"To secure access to Airbyte you have three options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Networking restrictions: deploy Airbyte in a private network or use a firewall to filter which IP is allowed to access your host."),(0,a.kt)("li",{parentName:"ul"},"Put Airbyte behind a reverse proxy and handle the access control on the reverse proxy side. "),(0,a.kt)("li",{parentName:"ul"},"If you deployed Airbyte on a cloud provider: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"GCP: use the ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/iap"},"Identidy-Aware proxy")," service"),(0,a.kt)("li",{parentName:"ul"},"AWS: use the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html"},"AWS Systems Manager Session Manager")," service")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Non exhaustive")," online resources list to set up auth on your reverse proxy:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://shadabshaukat.medium.com/deploy-and-secure-airbyte-with-nginx-reverse-proxy-basic-authentication-lets-encrypt-ssl-72bee223a4d9"},"Configure HTTP Basic Auth on NGINX for Airbyte")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/examples/auth/basic/"},"Kubernetes: Basic auth on a Nginx ingress controller")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.okta.com/blog/2018/08/28/nginx-auth-request"},"How to set up Okta SSO on an NGINX reverse proxy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://caddyserver.com/docs/caddyfile/directives/basicauth"},"How to enable HTTP Basic Auth on Caddy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/thomseddon/traefik-forward-auth"},"SSO for Traefik"))))}m.isMDXComponent=!0}}]);