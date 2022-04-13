"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5508],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),y=i(n),d=o,h=y["".concat(l,".").concat(d)]||y[d]||u[d]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},71761:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],c={},l="Python Concepts",i={unversionedId:"connector-development/cdk-python/python-concepts",id:"connector-development/cdk-python/python-concepts",title:"Python Concepts",description:"The Airbyte CDK makes use of various not-so-obvious Python concepts. You might want to revisit these concepts as you implement your connector:",source:"@site/../docs/connector-development/cdk-python/python-concepts.md",sourceDirName:"connector-development/cdk-python",slug:"/connector-development/cdk-python/python-concepts",permalink:"/airbyte/connector-development/cdk-python/python-concepts",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/connector-development/cdk-python/python-concepts.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"HTTP-API-based Connectors",permalink:"/airbyte/connector-development/cdk-python/http-streams"},next:{title:"Stream Slices",permalink:"/airbyte/connector-development/cdk-python/stream-slices"}},p={},u=[{value:"Abstract Classes ABCs (AbstractBaseClasses) and abstractmethods",id:"abstract-classes-abcs-abstractbaseclasses-and-abstractmethods",level:2},{value:"Keyword Arguments.",id:"keyword-arguments",level:2},{value:"Properties",id:"properties",level:2},{value:"Statically",id:"statically",level:3},{value:"Dynamically",id:"dynamically",level:3},{value:"Generators",id:"generators",level:2}],y={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"python-concepts"},"Python Concepts"),(0,a.kt)("p",null,"The Airbyte CDK makes use of various not-so-obvious Python concepts. You might want to revisit these concepts as you implement your connector:"),(0,a.kt)("h2",{id:"abstract-classes-abcs-abstractbaseclasses-and-abstractmethods"},"Abstract Classes ",(0,a.kt)("a",{parentName:"h2",href:"https://docs.python.org/3/library/abc.html"},"ABCs ","(","AbstractBaseClasses",")")," and ",(0,a.kt)("a",{parentName:"h2",href:"https://docs.python.org/3/library/abc.html#abc.abstractmethod"},"abstractmethods")),(0,a.kt)("p",null,"You'll want a strong understanding of these as the central API concepts require extending and using them."),(0,a.kt)("h2",{id:"keyword-arguments"},(0,a.kt)("a",{parentName:"h2",href:"https://realpython.com/python-kwargs-and-args/"},"Keyword Arguments"),"."),(0,a.kt)("p",null,"You'll often see this referred to as ",(0,a.kt)("inlineCode",{parentName:"p"},"**kwargs")," in the code."),(0,a.kt)("h2",{id:"properties"},(0,a.kt)("a",{parentName:"h2",href:"https://www.freecodecamp.org/news/python-property-decorator/"},"Properties")),(0,a.kt)("p",null,"Note that there are two ways of defining properties: statically and dynamically."),(0,a.kt)("h3",{id:"statically"},"Statically"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'class Employee(ABC):\n    @property\n    @abstractmethod\n    def job_title():\n        """ returns this employee\'s job title"""\n\nclass Pilot(Employee):\n    job_title = "pilot"\n')),(0,a.kt)("p",null,"Notice how statically defining properties in this manner looks the same as defining variables. You can then reference this property as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pilot = Pilot()\nprint(pilot.job_title) # pilot\n")),(0,a.kt)("h3",{id:"dynamically"},"Dynamically"),(0,a.kt)("p",null,"You can also run arbitrary code to get the value of a property. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'class Employee(ABC):\n    @property\n    @abstractmethod\n    def job_title():\n        """ returns this employee\'s job title"""\n\nclass Pilot(Employee):\n    def job_title():\n        # You can run any arbitrary code and return its result\n        return "pilot"\n')),(0,a.kt)("h2",{id:"generators"},(0,a.kt)("a",{parentName:"h2",href:"https://wiki.python.org/moin/Generators"},"Generators")),(0,a.kt)("p",null,"Generators are basically iterators over arbitrary source data. They are handy because their syntax is extremely concise and feel just like any other list or collection when working with them in code."),(0,a.kt)("p",null,"If you see ",(0,a.kt)("inlineCode",{parentName:"p"},"yield")," anywhere in the code -- that's a generator at work."))}d.isMDXComponent=!0}}]);