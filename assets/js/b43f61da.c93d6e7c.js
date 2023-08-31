"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[57959],{35070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const r={},a="Connector Specification Reference",l={unversionedId:"connector-development/connector-specification-reference",id:"connector-development/connector-specification-reference",title:"Connector Specification Reference",description:"The connector specification describes what inputs can be used to configure a connector. Like the rest of the Airbyte Protocol, it uses JsonSchema, but with some slight modifications.",source:"@site/../docs/connector-development/connector-specification-reference.md",sourceDirName:"connector-development",slug:"/connector-development/connector-specification-reference",permalink:"/connector-development/connector-specification-reference",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/connector-specification-reference.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Profile Java Connector Memory Usage",permalink:"/connector-development/tutorials/profile-java-connector-memory"},next:{title:"Schema Reference",permalink:"/connector-development/schema-reference"}},s={},p=[{value:"Demoing your specification",id:"demoing-your-specification",level:2},{value:"Secret obfuscation",id:"secret-obfuscation",level:3},{value:"Ordering fields in the UI",id:"ordering-fields-in-the-ui",level:3},{value:"Collapsing optional fields",id:"collapsing-optional-fields",level:3},{value:"Grouping fields",id:"grouping-fields",level:3},{value:"Multi-line String inputs",id:"multi-line-string-inputs",level:3},{value:"Hiding inputs in the UI",id:"hiding-inputs-in-the-ui",level:3},{value:"Pattern descriptors",id:"pattern-descriptors",level:2},{value:"Airbyte Modifications to <code>jsonschema</code>",id:"airbyte-modifications-to-jsonschema",level:2},{value:"Using <code>oneOf</code>",id:"using-oneof",level:3},{value:"oneOf display type",id:"oneof-display-type",level:4},{value:"Using <code>enum</code>",id:"using-enum",level:3},{value:"Forbidden keys",id:"forbidden-keys",level:3}],d={toc:p},c="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connector-specification-reference"},"Connector Specification Reference"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-protocol#spec"},"connector specification")," describes what inputs can be used to configure a connector. Like the rest of the Airbyte Protocol, it uses ",(0,o.kt)("a",{parentName:"p",href:"https://json-schema.org"},"JsonSchema"),", but with some slight modifications."),(0,o.kt)("h2",{id:"demoing-your-specification"},"Demoing your specification"),(0,o.kt)("p",null,"While iterating on your specification, you can preview what it will look like in the UI in realtime by following the instructions ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte-platform/blob/master/airbyte-webapp/docs/HowTo-ConnectionSpecification.md"},"here"),"."),(0,o.kt)("h3",{id:"secret-obfuscation"},"Secret obfuscation"),(0,o.kt)("p",null,"By default, any fields in a connector's specification are visible can be read in the UI. However, if you want to obfuscate fields in the UI and API ","(","for example when working with a password",")",", add the ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte_secret")," annotation to your connector's ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.json")," e.g:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'"password": {\n  "type": "string",\n  "examples": ["hunter2"],\n  "airbyte_secret": true\n},\n')),(0,o.kt)("p",null,"Here is an example of what the password field would look like: ",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6246757/128300633-7f379b05-5f4a-46e8-ad88-88155e7f4260.png",alt:"Screen Shot 2021-08-04 at 11 15 04 PM"})),(0,o.kt)("h3",{id:"ordering-fields-in-the-ui"},"Ordering fields in the UI"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"order")," property inside a definition to determine the order in which it will appear relative to other objects on the same level of nesting in the UI."),(0,o.kt)("p",null,"For example, using the following spec:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "username": {"type": "string", "order": 1},\n  "password": {"type": "string", "order": 2},\n  "cloud_provider": {\n    "order": 0,\n    "type": "object",\n    "properties" : {\n      "name": {"type": "string", "order": 0},\n      "region": {"type": "string", "order": 1}\n    }\n  }\n}\n')),(0,o.kt)("p",null,"will result in the following configuration on the UI:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6246757/142558797-135f6c73-f05d-479f-9d88-e20cae85870c.png",alt:"Screen Shot 2021-11-18 at 7 14 04 PM"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Within an object definition, if some fields have the ",(0,o.kt)("inlineCode",{parentName:"p"},"order")," property defined, and others don't, then the fields without the ",(0,o.kt)("inlineCode",{parentName:"p"},"order")," property defined should be rendered last in the UI. Among those elements (which don't have ",(0,o.kt)("inlineCode",{parentName:"p"},"order")," defined), required fields are ordered before optional fields, and both categories are further ordered alphabetically by their field name."),(0,o.kt)("p",{parentName:"admonition"},"Additionally, ",(0,o.kt)("inlineCode",{parentName:"p"},"order")," values cannot be duplicated within the same object or group. See the ",(0,o.kt)("a",{parentName:"p",href:"#grouping-fields"},"Grouping fields")," section for more info on field groups.")),(0,o.kt)("h3",{id:"collapsing-optional-fields"},"Collapsing optional fields"),(0,o.kt)("p",null,"By default, all optional fields will be collapsed into an ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional fields")," section which can be expanded or collapsed by the user. This helps streamline the UI for setting up a connector by initially focusing attention on the required fields only. For existing connectors, if their configuration contains a non-empty and non-default value for a collapsed optional field, then that section will be automatically opened when the connector is opened in the UI."),(0,o.kt)("p",null,"These ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional fields")," sections are placed at the bottom of a field group, meaning that all required fields in the same group will be placed above it. To interleave optional fields with required fields, set ",(0,o.kt)("inlineCode",{parentName:"p"},"always_show: true")," on the optional field along with an ",(0,o.kt)("inlineCode",{parentName:"p"},"order"),", which will cause the field to no longer be collapsed in an ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional fields")," section and be ordered as normal. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"always_show")," also causes fields that are normally hidden by an OAuth button to still be shwon."),(0,o.kt)("p",null,"Within a collapsed ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional fields")," section, the optional fields' ",(0,o.kt)("inlineCode",{parentName:"p"},"order")," defines their position in the section; those without an ",(0,o.kt)("inlineCode",{parentName:"p"},"order")," will be placed after fields with an ",(0,o.kt)("inlineCode",{parentName:"p"},"order"),", and will themselves be ordered alphabetically by field name."),(0,o.kt)("p",null,"For example, using the following spec:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "connectionSpecification": {\n    "type": "object",\n    "required": ["username", "account_id"],\n    "properties": {\n      "username": {\n        "type": "string",\n        "title": "Username",\n        "order": 1\n      },\n      "password": {\n        "type": "string",\n        "title": "Password",\n        "order": 2,\n        "always_show": true\n      },\n      "namespace": {\n        "type": "string",\n        "title": "Namespace",\n        "order": 3\n      },\n      "region": {\n        "type": "string",\n        "title": "Region",\n        "order": 4\n      },\n      "account_id": {\n        "type": "integer",\n        "title": "Account ID",\n        "order": 5\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"will result in the following configuration on the UI (left side shows initial collapsed state, right side shows the optional fields section expanded):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"optional fields",src:n(34859).Z,width:"5154",height:"2346"})),(0,o.kt)("h3",{id:"grouping-fields"},"Grouping fields"),(0,o.kt)("p",null,"Fields in the connector spec can be grouped into cards in the UI by utilizing the ",(0,o.kt)("inlineCode",{parentName:"p"},"group")," property on a field. All fields that share the same ",(0,o.kt)("inlineCode",{parentName:"p"},"group")," value will be grouped into the same card in the UI, and fields without a ",(0,o.kt)("inlineCode",{parentName:"p"},"group")," will be placed into their own group card."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"group")," can only be set on top-level properties in the connectionSpecification; it is not allowed on fields of objects nested inside the connectionSpecification."),(0,o.kt)("p",{parentName:"admonition"},"Additionally, within a group the ",(0,o.kt)("inlineCode",{parentName:"p"},"order")," values set on each field determine how they are ordered in the UI, and therefore an ",(0,o.kt)("inlineCode",{parentName:"p"},"order")," value cannot be duplicated within a group.")),(0,o.kt)("p",null,"Groups themselves can also be ordered and titled by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"groups")," property on the connectorSpecification. The value of this field is an array containing objects with ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," that matches the ",(0,o.kt)("inlineCode",{parentName:"p"},"group")," values that were set on fields, and optionally a ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," which causes the Airbyte UI to render that title at the top of the group's card."),(0,o.kt)("p",null,"The order of entries in this ",(0,o.kt)("inlineCode",{parentName:"p"},"groups")," array decides the order of the cards; ",(0,o.kt)("inlineCode",{parentName:"p"},"group")," IDs that are set on fields which do not appear in this ",(0,o.kt)("inlineCode",{parentName:"p"},"groups")," array will be ordered after those that do appear and will be ordered alphanumerically."),(0,o.kt)("p",null,"For example, using the following spec:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "connectionSpecification": {\n    "type": "object",\n    "required": ["username", "namespace", "account_id"],\n    "properties": {\n      "username": {\n        "type": "string",\n        "title": "Username",\n        "order": 1,\n        "group": "auth"\n      },\n      "password": {\n        "type": "string",\n        "title": "Password",\n        "always_show": true,\n        "order": 2,\n        "group": "auth"\n      },\n      "namespace": {\n        "type": "string",\n        "title": "Namespace",\n        "order": 1,\n        "group": "location"\n      },\n      "region": {\n        "type": "string",\n        "title": "Region",\n        "order": 2,\n        "group": "location"\n      },\n      "account_id": {\n        "type": "integer",\n        "title": "Account ID"\n      }\n    },\n    "groups": [\n      {\n        "id": "auth",\n        "title": "Authentication"\n      },\n      {\n        "id": "location"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"will result in the following configuration on the UI:\n",(0,o.kt)("img",{alt:"groups",src:n(12813).Z,width:"1636",height:"1010"})),(0,o.kt)("h3",{id:"multi-line-string-inputs"},"Multi-line String inputs"),(0,o.kt)("p",null,"Sometimes when a user is inputting a string field into a connector, newlines need to be preserveed. For example, if we want a connector to use an RSA key which looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"---- BEGIN PRIVATE KEY ----\n123\n456\n789\n---- END PRIVATE KEY ----\n")),(0,o.kt)("p",null,"we need to preserve the line-breaks. In other words, the string ",(0,o.kt)("inlineCode",{parentName:"p"},"---- BEGIN PRIVATE KEY ----123456789---- END PRIVATE KEY ----")," is not equivalent to the one above since it loses linebreaks."),(0,o.kt)("p",null,"By default, string inputs in the UI can lose their linebreaks. In order to accept multi-line strings in the UI, annotate your string field with ",(0,o.kt)("inlineCode",{parentName:"p"},"multiline: true")," e.g:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'"private_key": {\n  "type": "string",\n  "description": "RSA private key to use for SSH connection",\n  "airbyte_secret": true,\n  "multiline": true\n},\n')),(0,o.kt)("p",null,"this will display a multi-line textbox in the UI like the following screenshot: ",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6246757/128300404-1dc35323-bceb-4f93-9b81-b23cc4beb670.png",alt:"Screen Shot 2021-08-04 at 11 13 09 PM"})),(0,o.kt)("h3",{id:"hiding-inputs-in-the-ui"},"Hiding inputs in the UI"),(0,o.kt)("p",null,"In some rare cases, a connector may wish to expose an input that is not available in the UI, but is still potentially configurable when running the connector outside of Airbyte, or via the UI. For example, exposing a very technical configuration like the page size of an outgoing HTTP requests may only be relevant to power users, and therefore shouldn't be available via the UI but might make sense to expose via the API."),(0,o.kt)("p",null,"In this case, use the ",(0,o.kt)("inlineCode",{parentName:"p"},'"airbyte_hidden": true')," keyword to hide that field from the UI. E.g:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "first_name": {\n    "type": "string",\n    "title": "First Name"\n  },\n  "secret_name": {\n    "type": "string",\n    "title": "You can\'t see me!!!",\n    "airbyte_hidden": true\n  }\n}\n')),(0,o.kt)("p",null,"Results in the following form:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"hidden fields",src:n(63393).Z,width:"1244",height:"358"})),(0,o.kt)("h2",{id:"pattern-descriptors"},"Pattern descriptors"),(0,o.kt)("p",null,"Setting a ",(0,o.kt)("inlineCode",{parentName:"p"},"pattern")," on a field in a connector spec enforces that the value entered into that input matches the ",(0,o.kt)("inlineCode",{parentName:"p"},"pattern")," regex value. However, this causes the regex pattern to be displayed in the input's error message, which is usually not very helpful for the end-user."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"pattern_descriptor")," property allows the connector developer to set a human-readable format that should be displayed above the field, and if set in conjunction with a ",(0,o.kt)("inlineCode",{parentName:"p"},"pattern"),", this ",(0,o.kt)("inlineCode",{parentName:"p"},"pattern_descriptor")," will be used in the invalid format error message instead of the raw regex."),(0,o.kt)("p",null,"For example, having a field in the spec like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"start_date": {\n  "type": "string",\n  "title": "Start date",\n  "pattern": "^[0-9]{4}-[0-9]{2}-[0-9]{2}$",\n  "pattern_descriptor": "YYYY-MM-DD"\n},\n')),(0,o.kt)("p",null,"will result in the following look in the UI (empty state, valid state, and error state):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"pattern descriptors",src:n(94266).Z,width:"864",height:"492"})),(0,o.kt)("h2",{id:"airbyte-modifications-to-jsonschema"},"Airbyte Modifications to ",(0,o.kt)("inlineCode",{parentName:"h2"},"jsonschema")),(0,o.kt)("h3",{id:"using-oneof"},"Using ",(0,o.kt)("inlineCode",{parentName:"h3"},"oneOf")),(0,o.kt)("p",null,"In some cases, a connector needs to accept one out of many options. For example, a connector might need to know the compression codec of the file it will read, which will render in the Airbyte UI as a list of the available codecs. In JSONSchema, this can be expressed using the ",(0,o.kt)("a",{parentName:"p",href:"https://json-schema.org/understanding-json-schema/reference/combining.html#oneof"},"oneOf")," keyword."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Some connectors may follow an older format for dropdown lists, we are currently migrating away from that to this standard.")),(0,o.kt)("p",null,"In order for the Airbyte UI to correctly render a specification, however, a few extra rules must be followed:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The top-level item containing the ",(0,o.kt)("inlineCode",{parentName:"li"},"oneOf")," must have ",(0,o.kt)("inlineCode",{parentName:"li"},"type: object"),"."),(0,o.kt)("li",{parentName:"ol"},"Each item in the ",(0,o.kt)("inlineCode",{parentName:"li"},"oneOf")," array must be a property with ",(0,o.kt)("inlineCode",{parentName:"li"},"type: object"),"."),(0,o.kt)("li",{parentName:"ol"},"One ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," field with the same property name must be consistently present throughout each object inside the ",(0,o.kt)("inlineCode",{parentName:"li"},"oneOf")," array. It is required to add a ",(0,o.kt)("a",{parentName:"li",href:"https://json-schema.org/understanding-json-schema/reference/generic.html#constant-values"},(0,o.kt)("inlineCode",{parentName:"a"},"const"))," value unique to that ",(0,o.kt)("inlineCode",{parentName:"li"},"oneOf")," option.")),(0,o.kt)("p",null,"Let's look at the ",(0,o.kt)("a",{parentName:"p",href:"/integrations/sources/file"},"source-file")," implementation as an example. In this example, we have ",(0,o.kt)("inlineCode",{parentName:"p"},"provider")," as a dropdown list option, which allows the user to select what provider their file is being hosted on. We note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"oneOf")," keyword lives under the ",(0,o.kt)("inlineCode",{parentName:"p"},"provider")," object as follows:"),(0,o.kt)("p",null,"In each item in the ",(0,o.kt)("inlineCode",{parentName:"p"},"oneOf")," array, the ",(0,o.kt)("inlineCode",{parentName:"p"},"option_title")," string field exists with the aforementioned ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," value unique to that item. This helps the UI and the connector distinguish between the option that was chosen by the user. This can be displayed with adapting the file source spec to this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "connection_specification": {\n    "$schema": "http://json-schema.org/draft-07/schema#",\n    "title": "File Source Spec",\n    "type": "object",\n    "required": ["dataset_name", "format", "url", "provider"],\n    "properties": {\n      "dataset_name": {\n        ...\n      },\n      "format": {\n        ...\n      },\n      "reader_options": {\n        ...\n      },\n      "url": {\n        ...\n      },\n      "provider": {\n        "type": "object",\n        "oneOf": [\n          {\n            "required": [\n              "option_title"\n            ],\n            "properties": {\n              "option_title": {\n                "type": "string",\n                "const": "HTTPS: Public Web",\n                "order": 0\n              }\n            }\n          },\n          {\n            "required": [\n              "option_title"\n            ],\n            "properties": {\n              "option_title": {\n                "type": "string",\n                "const": "GCS: Google Cloud Storage",\n                "order": 0\n              },\n              "service_account_json": {\n                "type": "string",\n                "description": "In order to access private Buckets stored on Google Cloud, this connector would need a service account json credentials with the proper permissions as described <a href=\\"https://cloud.google.com/iam/docs/service-accounts\\" target=\\"_blank\\">here</a>. Please generate the credentials.json file and copy/paste its content to this field (expecting JSON formats). If accessing publicly available data, this field is not necessary."\n              }\n            }\n          }\n        ]\n      }\n  }\n}\n')),(0,o.kt)("h4",{id:"oneof-display-type"},"oneOf display type"),(0,o.kt)("p",null,"You can also configure the way that oneOf fields are displayed in the Airbyte UI through the ",(0,o.kt)("inlineCode",{parentName:"p"},"display_type")," property. Valid values for this property are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dropdown"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Renders a dropdown menu containing the title of each option for the user to select"),(0,o.kt)("li",{parentName:"ul"},"This is a compact look that works well in most cases"),(0,o.kt)("li",{parentName:"ul"},"The descriptions of the options can be found in the oneOf field's tooltip"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"radio"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Renders radio-button cards side-by-side containing the title and description of each option for the user to select"),(0,o.kt)("li",{parentName:"ul"},"This choice draws more attention to the field and shows the descriptions of each option at all times, which can be useful for important or complicated fields")))),(0,o.kt)("p",null,"Here is an example of setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"display_type")," of a oneOf field to ",(0,o.kt)("inlineCode",{parentName:"p"},"dropdown"),", along with how it looks in the Airbyte UI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"update_method": {\n  "type": "object",\n  "title": "Update Method",\n  "display_type": "dropdown",\n  "oneOf": [\n    {\n      "title": "Read Changes using Binary Log (CDC)",\n      "description": "<i>Recommended</i> - Incrementally reads new inserts, updates, and deletes using the MySQL <a href=\\"https://docs.airbyte.com/integrations/sources/mysql/#change-data-capture-cdc\\">binary log</a>. This must be enabled on your database.",\n      "required": ["method"],\n      "properties": {\n        "method": {\n          "type": "string",\n          "const": "CDC",\n          "order": 0\n        },\n        "initial_waiting_seconds": {\n          ...\n        },\n        "server_time_zone": {\n          ...\n        }\n      }\n    },\n    {\n      "title": "Scan Changes with User Defined Cursor",\n      "description": "Incrementally detects new inserts and updates using the <a href=\\"https://docs.airbyte.com/understanding-airbyte/connections/incremental-append/#user-defined-cursor\\">cursor column</a> chosen when configuring a connection (e.g. created_at, updated_at).",\n      "required": ["method"],\n      "properties": {\n        "method": {\n          "type": "string",\n          "const": "STANDARD",\n          "order": 0\n        }\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"dropdown oneOf",src:n(47274).Z,width:"1296",height:"484"})),(0,o.kt)("p",null,"And here is how it looks if the ",(0,o.kt)("inlineCode",{parentName:"p"},"display_type")," property is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"radio")," instead:\n",(0,o.kt)("img",{alt:"radio oneOf",src:n(73302).Z,width:"1268",height:"872"})),(0,o.kt)("h3",{id:"using-enum"},"Using ",(0,o.kt)("inlineCode",{parentName:"h3"},"enum")),(0,o.kt)("p",null,"In regular ",(0,o.kt)("inlineCode",{parentName:"p"},"jsonschema"),", some drafts enforce that ",(0,o.kt)("inlineCode",{parentName:"p"},"enum")," lists must contain distinct values, while others do not. For consistency, Airbyte enforces this restriction."),(0,o.kt)("p",null,"For example, this spec is invalid, since ",(0,o.kt)("inlineCode",{parentName:"p"},"a_format")," is listed twice under the enumerated property ",(0,o.kt)("inlineCode",{parentName:"p"},"format"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "connection_specification": {\n    "$schema": "http://json-schema.org/draft-07/schema#",\n    "title": "File Source Spec",\n    "type": "object",\n    "required": ["format"],\n    "properties": {\n      "dataset_name": {\n        ...\n      },\n      "format": {\n        type: "string",\n        enum: ["a_format", "another_format", "a_format"]\n      },\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"forbidden-keys"},"Forbidden keys"),(0,o.kt)("p",null,"In connector specs, the following JSON schema keys are forbidden, as Airbyte does not currently contain logic to interpret them"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"not")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"anyOf")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"patternProperties")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"prefixItems")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"allOf")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"if")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"then")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"else")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dependentSchemas")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dependentRequired"))))}h.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,m=c["".concat(s,".").concat(u)]||c[u]||h[u]||r;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12813:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/connector-form-groups-955e042a8172b28376cfca4196997652.png"},34859:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/connector-form-optional-fields-e16d5db021da5b1108c0de0b88f5b192.png"},94266:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/connector-form-pattern-descriptors-8fabcce703b31a9ab93fc22c950df3ed.png"},63393:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/spec_reference_hidden_field_screenshot-446308be2f4dc14ceef46defda228668.png"},47274:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/oneOf-dropdown-a6d2ff56f6e2825d4a6dd09582c5bdb4.png"},73302:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/oneOf-radio-b2406b28e32bff8449b8abd000a7c285.png"}}]);