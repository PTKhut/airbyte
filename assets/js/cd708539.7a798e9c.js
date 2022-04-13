"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[639],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return a?r.createElement(h,l(l({ref:t},m),{},{components:a})):r.createElement(h,l({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},81730:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],o={},p="Chargebee",s={unversionedId:"integrations/sources/chargebee",id:"integrations/sources/chargebee",title:"Chargebee",description:"Overview",source:"@site/../docs/integrations/sources/chargebee.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/chargebee",permalink:"/airbyte/integrations/sources/chargebee",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/integrations/sources/chargebee.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Cart.com",permalink:"/airbyte/integrations/sources/cart"},next:{title:"Chartmogul",permalink:"/airbyte/integrations/sources/chartmogul"}},m={},c=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Notes",id:"notes",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],d={toc:c};function u(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chargebee"},"Chargebee"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Chargebee source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,i.kt)("p",null,"This Chargebee source uses the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chargebee/chargebee-python/"},"Chargebee Python Client Library"),"."),(0,i.kt)("h3",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"This connector outputs the following streams:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apidocs.chargebee.com/docs/api/subscriptions?prod_cat_ver=2#list_subscriptions"},"Subscriptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apidocs.chargebee.com/docs/api/customers?prod_cat_ver=2#list_customers"},"Customers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apidocs.chargebee.com/docs/api/invoices?prod_cat_ver=2#list_invoices"},"Invoices")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apidocs.chargebee.com/docs/api/orders?prod_cat_ver=2#list_orders"},"Orders")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apidocs.chargebee.com/docs/api/plans?prod_cat_ver=1&lang=curl#list_plans"},"Plans")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apidocs.chargebee.com/docs/api/addons?prod_cat_ver=1&lang=curl#list_addons"},"Addons")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apidocs.chargebee.com/docs/api/items?prod_cat_ver=2#list_items"},"Items")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apidocs.chargebee.com/docs/api/item_prices?prod_cat_ver=2#list_item_prices"},"Item Prices")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apidocs.chargebee.com/docs/api/attached_items?prod_cat_ver=2#list_attached_items"},"Attached Items"))),(0,i.kt)("h3",{id:"notes"},"Notes"),(0,i.kt)("p",null,"Some streams may depend on Product Catalog version and be accessible only on sites with specific Product Catalog version. This means that we have following streams:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"presented in both ",(0,i.kt)("inlineCode",{parentName:"li"},"Product Catalog 1.0")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Product Catalog 2.0"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Customers"),(0,i.kt)("li",{parentName:"ul"},"Events"),(0,i.kt)("li",{parentName:"ul"},"Invoices"),(0,i.kt)("li",{parentName:"ul"},"Credit Notes"),(0,i.kt)("li",{parentName:"ul"},"Orders"),(0,i.kt)("li",{parentName:"ul"},"Coupons"),(0,i.kt)("li",{parentName:"ul"},"Subscriptions"),(0,i.kt)("li",{parentName:"ul"},"Transactions"))),(0,i.kt)("li",{parentName:"ol"},"presented only in ",(0,i.kt)("inlineCode",{parentName:"li"},"Product Catalog 1.0"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Plans"),(0,i.kt)("li",{parentName:"ul"},"Addons"))),(0,i.kt)("li",{parentName:"ol"},"presented only in ",(0,i.kt)("inlineCode",{parentName:"li"},"Product Catalog 2.0"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Items"),(0,i.kt)("li",{parentName:"ul"},"Item Prices"),(0,i.kt)("li",{parentName:"ul"},"Attached Items")))),(0,i.kt)("p",null,"Also, 12 streams from the above 13 incremental streams are pure incremental meaning that they:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"read only new records;"),(0,i.kt)("li",{parentName:"ul"},"output only new records.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Attached Items")," incremental stream is also incremental but with one difference, it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"read all records;"),(0,i.kt)("li",{parentName:"ul"},"output only new records.")),(0,i.kt)("p",null,"This means that syncing the ",(0,i.kt)("inlineCode",{parentName:"p"},"Attached Items")," stream, even in incremental mode, is expensive in terms of your Chargebee API quota. Generally speaking, it incurs a number of API calls equal to the total number of attached items in your chargebee instance divided by 100, regardless of how many AttachedItems were actually changed or synced in a particular sync job."),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,i.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,i.kt)("p",null,"The Chargebee connector should not run into ",(0,i.kt)("a",{parentName:"p",href:"https://apidocs.chargebee.com/docs/api?prod_cat_ver=2#api_rate_limits"},"Chargebee API")," limitations under normal usage. Please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chargebee Account;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"site_api_key")," - Chargebee API Key wih the necessary permissions ","(","described below",")",";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"site")," - Chargebee site prefix for your instance;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start_date")," - start date for incremental streams;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"product_catalog")," - Product Catalog version of your Chargebee site ","(","described below",")",".")),(0,i.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,i.kt)("p",null,"Log into Chargebee and then generate an ",(0,i.kt)("a",{parentName:"p",href:"https://apidocs.chargebee.com/docs/api?prod_cat_ver=2#api_authentication"},"API Key"),". Then follow ",(0,i.kt)("a",{parentName:"p",href:"https://apidocs.chargebee.com/docs/api?prod_cat_ver=2"},"these")," instructions, under ",(0,i.kt)("inlineCode",{parentName:"p"},"API Version")," section, on how to find your Product Catalog version."),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-03-03"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10827"},"10827")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix Credit Note stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-03-02"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10795"},"10795")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add support for Credit Note stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-0224"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10312"},"10312")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add support for Transaction Stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-22"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10366"},"10366")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix broken ",(0,i.kt)("inlineCode",{parentName:"td"},"coupon")," stream + add unit tests")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10269"},"10269")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add support for Coupon stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-10"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10143"},"10143")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add support for Event stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-23"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8434"},"8434")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Update fields in source-connectors specifications")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-27"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6454"},"6454")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix examples in spec file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-08-17"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5421"},"5421")),(0,i.kt)("td",{parentName:"tr",align:"left"},'Add support for "Product Catalog 2.0" specific streams: ',(0,i.kt)("inlineCode",{parentName:"td"},"Items"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Item prices")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"Attached Items"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-30"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5067"},"5067")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Prepare connector for publishing")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-07"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4539"},"4539")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add entrypoint and bump version for connector")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-06-30"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3410"},"3410")),(0,i.kt)("td",{parentName:"tr",align:"left"},"New Source: Chargebee")))))}u.isMDXComponent=!0}}]);