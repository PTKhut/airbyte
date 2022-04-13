"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1073],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(r),d=o,m=b["".concat(s,".").concat(d)]||b[d]||p[d]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},20958:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={},s="SonarQube workflow",u={unversionedId:"contributing-to-airbyte/sonar-qube-workflow",id:"contributing-to-airbyte/sonar-qube-workflow",title:"SonarQube workflow",description:"Goals",source:"@site/../docs/contributing-to-airbyte/sonar-qube-workflow.md",sourceDirName:"contributing-to-airbyte",slug:"/contributing-to-airbyte/sonar-qube-workflow",permalink:"/airbyte/contributing-to-airbyte/sonar-qube-workflow",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/contributing-to-airbyte/sonar-qube-workflow.md",tags:[],version:"current",frontMatter:{}},c={},p=[{value:"Goals",id:"goals",level:2},{value:"UML diagram",id:"uml-diagram",level:2},{value:"Used tools",id:"used-tools",level:2},{value:"Python",id:"python",level:3},{value:"Common tools",id:"common-tools",level:3},{value:"Access to SonarQube",id:"access-to-sonarqube",level:2},{value:"SonarQube settings",id:"sonarqube-settings",level:2}],b={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sonarqube-workflow"},"SonarQube workflow"),(0,a.kt)("h2",{id:"goals"},"Goals"),(0,a.kt)("p",null,"\xa0","The Airbyte monorepo receives contributions from a lot of developers, and there is no way around human errors while merging PRs.\nLikely every language has different tools for testing and validation of source files. And while it's best practice to lint and validate code before pushing to git branches, it doesn't always happen.\nBut it is optional, and as rule as we detect possible problems after launch test/publish commands only. Therefore, using of automated CI code validation can  provided the following benefits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Problem/vulnerability reports available when the PR was created. And developers would fix bugs and remove smells before code reviews."),(0,a.kt)("li",{parentName:"ul"},"Reviewers would be sure all standard checks were made and code changes satisfy the requirements."),(0,a.kt)("li",{parentName:"ul"},"Set of tools and their options can be changed anytime globally."),(0,a.kt)("li",{parentName:"ul"},"Progress of code changes are saved in SonarQube and this information helps to analyse quality of the product  integrally and also its separate parts.")),(0,a.kt)("h2",{id:"uml-diagram"},"UML diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11213273/149561440-0aceaa30-8f82-4e5b-9ee5-77bdcfd87695.png",alt:"image"})),(0,a.kt)("h2",{id:"used-tools"},"Used tools"),(0,a.kt)("h3",{id:"python"},"Python"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://flake8.pycqa.org/en/stable/"},"flake8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://mypy.readthedocs.io/en/stable/"},"mypy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pycqa.github.io/isort/"},"isort")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://black.readthedocs.io/en/stable/"},"black")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://coverage.readthedocs.io/en/6.2/"},"coverage"))),(0,a.kt)("p",null,"All Python tools use the common ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/pyproject.toml"},"pyproject.toml")," file."),(0,a.kt)("h3",{id:"common-tools"},"Common tools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/"},"SonarQube Scanner"))),(0,a.kt)("h2",{id:"access-to-sonarqube"},"Access to SonarQube"),(0,a.kt)("p",null,"The Airbyte project uses a custom SonarQube instance. Access to it is explained ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte-cloud/wiki/IAP-tunnel-to-the-SonarQube-instance"},"here"),"."),(0,a.kt)("h2",{id:"sonarqube-settings"},"SonarQube settings"),(0,a.kt)("p",null,"The SonarQube server uses default settings. All customisations are implemented into the Github WorkFlows. More details are ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/master/.github/actions/ci-tests-runner/action.yml"},"here")))}d.isMDXComponent=!0}}]);