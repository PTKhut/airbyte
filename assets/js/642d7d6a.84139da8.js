"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[50267],{54218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={},i="Connector Development",l={unversionedId:"connector-development/README",id:"connector-development/README",title:"Connector Development",description:"Airbyte supports two types of connectors: Sources and Destinations. A connector takes the form of a Docker image which follows the Airbyte specification.",source:"@site/../docs/connector-development/README.md",sourceDirName:"connector-development",slug:"/connector-development/",permalink:"/connector-development/",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/README.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Custom or New Connector",permalink:"/integrations/custom-connectors"},next:{title:"Connector Builder Intro",permalink:"/connector-development/connector-builder-ui/overview"}},c={},s=[{value:"Connector builder UI",id:"connector-builder-ui",level:3},{value:"Low-code Connector-Development Framework",id:"low-code-connector-development-framework",level:3},{value:"Python Connector-Development Kit (CDK)",id:"python-connector-development-kit-cdk",level:3},{value:"Community maintained CDKs",id:"community-maintained-cdks",level:3},{value:"The Airbyte specification",id:"the-airbyte-specification",level:2},{value:"Adding a new connector",id:"adding-a-new-connector",level:2},{value:"Requirements",id:"requirements",level:3},{value:"1. Implement &amp; package the connector",id:"1-implement--package-the-connector",level:3},{value:"Sources",id:"sources",level:4},{value:"Destinations",id:"destinations",level:4},{value:"Creating a connector from a template",id:"creating-a-connector-from-a-template",level:4},{value:"2. Integration tests",id:"2-integration-tests",level:3},{value:"3. Document building &amp; testing your connector",id:"3-document-building--testing-your-connector",level:3},{value:"4. Publish the connector",id:"4-publish-the-connector",level:3},{value:"Updating an existing connector",id:"updating-an-existing-connector",level:2},{value:"Adding normalization to a connector",id:"adding-normalization-to-a-connector",level:2},{value:"Publishing a connector",id:"publishing-a-connector",level:2},{value:"Updating Connector Metadata",id:"updating-connector-metadata",level:3},{value:"The /publish command",id:"the-publish-command",level:3},{value:"Using credentials in CI",id:"using-credentials-in-ci",level:2},{value:"Access CI secrets on GSM",id:"access-ci-secrets-on-gsm",level:4}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connector-development"},"Connector Development"),(0,a.kt)("p",null,"Airbyte supports two types of connectors: Sources and Destinations. A connector takes the form of a Docker image which follows the ",(0,a.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-protocol"},"Airbyte specification"),"."),(0,a.kt)("p",null,"To build a new connector in Java or Python, we provide templates so you don't need to start everything from scratch."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: you are not required to maintain the connectors you create.")," The goal is that the Airbyte core team and the community help maintain the connector."),(0,a.kt)("p",null,"Airbyte provides some Connector Development Kits (CDKs) to help you build connectors."),(0,a.kt)("h3",{id:"connector-builder-ui"},"Connector builder UI"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/connector-development/connector-builder-ui/overview"},"connector builder UI")," is based on the low-code development framework below and allows to develop and use connectors without leaving the Airbyte UI (no local development environment required)."),(0,a.kt)("h3",{id:"low-code-connector-development-framework"},"Low-code Connector-Development Framework"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"/connector-development/config-based/low-code-cdk-overview"},"low-code framework")," to build source connectors for REST APIs by modifying boilerplate YAML files."),(0,a.kt)("h3",{id:"python-connector-development-kit-cdk"},"Python Connector-Development Kit ","(","CDK",")"),(0,a.kt)("p",null,"You can build a connector very quickly in Python with the ",(0,a.kt)("a",{parentName:"p",href:"cdk-python/"},"Airbyte CDK"),", which generates 75% of the code required for you."),(0,a.kt)("h3",{id:"community-maintained-cdks"},"Community maintained CDKs"),(0,a.kt)("p",null,"The Airbyte community also maintains some CDKs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/faros-ai/airbyte-connectors"},"Typescript CDK")," is actively maintained by Faros.ai for use in their product."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"cdk-dotnet/"},"Airbyte Dotnet CDK")," comes with C# templates which can be used to generate 75% of the code required for you")),(0,a.kt)("h2",{id:"the-airbyte-specification"},"The Airbyte specification"),(0,a.kt)("p",null,"Before building a new connector, review ",(0,a.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-protocol"},"Airbyte's data protocol specification"),"."),(0,a.kt)("h2",{id:"adding-a-new-connector"},"Adding a new connector"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"To add a new connector you need to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Implement & Package your connector in an Airbyte Protocol compliant Docker image"),(0,a.kt)("li",{parentName:"ol"},"Add integration tests for your connector. At a minimum, all connectors must pass ",(0,a.kt)("a",{parentName:"li",href:"testing-connectors/"},"Airbyte's standard test suite"),", but you can also add your own tests."),(0,a.kt)("li",{parentName:"ol"},"Document how to build & test your connector"),(0,a.kt)("li",{parentName:"ol"},"Publish the Docker image containing the connector")),(0,a.kt)("p",null,"Each requirement has a subsection below."),(0,a.kt)("h3",{id:"1-implement--package-the-connector"},"1. Implement & package the connector"),(0,a.kt)("p",null,"If you are building a connector in any of the following languages/frameworks, then you're in luck! We provide autogenerated templates to get you started quickly:"),(0,a.kt)("h4",{id:"sources"},"Sources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Python Source Connector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://singer.io"},(0,a.kt)("strong",{parentName:"a"},"Singer")),(0,a.kt)("strong",{parentName:"li"},"-based Python Source Connector"),". ",(0,a.kt)("a",{parentName:"li",href:"https://singer.io/"},"Singer.io")," is an open source framework with a large community and many available connectors ","(","known as taps & targets",")",". To build an Airbyte connector from a Singer tap, wrap the tap in a thin Python package to make it Airbyte Protocol-compatible. See the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/tree/master/airbyte-integrations/connectors/source-github-singer"},"Github Connector")," for an example of an Airbyte Connector implemented on top of a Singer tap."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Generic Connector"),": This template provides a basic starting point for any language.")),(0,a.kt)("h4",{id:"destinations"},"Destinations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Java Destination Connector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Python Destination Connector"))),(0,a.kt)("h4",{id:"creating-a-connector-from-a-template"},"Creating a connector from a template"),(0,a.kt)("p",null,"Run the interactive generator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"cd airbyte-integrations/connector-templates/generator\n./generate.sh\n")),(0,a.kt)("p",null,"and choose the relevant template by using the arrow keys. This will generate a new connector in the ",(0,a.kt)("inlineCode",{parentName:"p"},"airbyte-integrations/connectors/<your-connector>")," directory."),(0,a.kt)("p",null,'Search the generated directory for "TODO"s and follow them to implement your connector. For more detailed walkthroughs and instructions, follow the relevant tutorial:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/connector-development/tutorials/cdk-speedrun"},"Speedrun: Building a HTTP source with the CDK")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/connector-development/tutorials/cdk-tutorial-python-http/getting-started"},"Building a HTTP source with the CDK")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/connector-development/tutorials/building-a-python-source"},"Building a Python source")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/connector-development/tutorials/building-a-python-destination"},"Building a Python destination")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/connector-development/tutorials/building-a-java-destination"},"Building a Java destination"))),(0,a.kt)("p",null,"As you implement your connector, make sure to review the ",(0,a.kt)("a",{parentName:"p",href:"/connector-development/best-practices"},"Best Practices for Connector Development")," guide. Following best practices is not a requirement for merging your contribution to Airbyte, but it certainly doesn't hurt ;",")"),(0,a.kt)("h3",{id:"2-integration-tests"},"2. Integration tests"),(0,a.kt)("p",null,"At a minimum, your connector must implement the acceptance tests described in ",(0,a.kt)("a",{parentName:"p",href:"testing-connectors/"},"Testing Connectors")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: Acceptance tests are not yet available for Python destination connectors. Coming")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/4698"},(0,a.kt)("strong",{parentName:"a"},"soon")),(0,a.kt)("strong",{parentName:"p"},"!")),(0,a.kt)("h3",{id:"3-document-building--testing-your-connector"},"3. Document building & testing your connector"),(0,a.kt)("p",null,"If you're writing in Python or Java, skip this section -- it is provided automatically."),(0,a.kt)("p",null,"If you're writing in another language, please document the commands needed to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Build your connector docker image ","(","usually this is just ",(0,a.kt)("inlineCode",{parentName:"li"},"docker build .")," but let us know if there are necessary flags, gotchas, etc..",")"),(0,a.kt)("li",{parentName:"ol"},"Run any unit or integration tests ",(0,a.kt)("em",{parentName:"li"},"in a Docker image"),".")),(0,a.kt)("p",null,"Your integration and unit tests must be runnable entirely within a Docker image. This is important to guarantee consistent build environments."),(0,a.kt)("p",null,"When you submit a PR to Airbyte with your connector, the reviewer will use the commands you provide to integrate your connector into Airbyte's build system as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},":airbyte-integrations:connectors:source-<name>:build")," should run unit tests and build the integration's Docker image"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},":airbyte-integrations:connectors:source-<name>:integrationTest")," should run integration tests including Airbyte's Standard test suite.")),(0,a.kt)("h3",{id:"4-publish-the-connector"},"4. Publish the connector"),(0,a.kt)("p",null,"Typically this will be handled as part of code review by an Airbyter. There is a section below on what steps are needed for publishing a connector and will mostly be used by Airbyte employees publishing the connector."),(0,a.kt)("h2",{id:"updating-an-existing-connector"},"Updating an existing connector"),(0,a.kt)("p",null,"The steps for updating an existing connector are the same as for building a new connector minus the need to use the autogenerator to create a new connector. Therefore the steps are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Iterate on the connector to make the needed changes"),(0,a.kt)("li",{parentName:"ol"},"Run tests"),(0,a.kt)("li",{parentName:"ol"},"Add any needed docs updates"),(0,a.kt)("li",{parentName:"ol"},"Create a PR to get the connector published")),(0,a.kt)("h2",{id:"adding-normalization-to-a-connector"},"Adding normalization to a connector"),(0,a.kt)("p",null,"In order to enable normalization for a destination connector, you'll need to set some fields on the destination definitions entry for the connector. This is done in the ",(0,a.kt)("a",{parentName:"p",href:"/connector-development/connector-metadata-file"},"metadata.yaml")," file found at the root of each connector."),(0,a.kt)("p",null,"Here's an example of normalization fields being set to enable normalization for the Postgres destination:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"data:\n    # ... other fields\n    normalizationConfig:\n        normalizationRepository: airbyte/normalization\n        normalizationTag: 0.2.25\n        normalizationIntegrationType: postgres\n")),(0,a.kt)("p",null,"For more information about what these fields mean, see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-config-oss/config-models-oss/src/main/resources/types/NormalizationDestinationDefinitionConfig.yaml"},"NormalizationDestinationDefinitionConfig")," schema."),(0,a.kt)("p",null,"The presence of these fields will enable normalization for the connector, and determine which docker image will run."),(0,a.kt)("h2",{id:"publishing-a-connector"},"Publishing a connector"),(0,a.kt)("p",null,"Once you've finished iterating on the changes to a connector as specified in its ",(0,a.kt)("inlineCode",{parentName:"p"},"README.md"),", follow these instructions to ship the new version of the connector with Airbyte out of the box."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Bump the version in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," of the connector ","(",(0,a.kt)("inlineCode",{parentName:"p"},"LABEL io.airbyte.version=X.X.X"),")",".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update the docker image version in the  ",(0,a.kt)("a",{parentName:"p",href:"/connector-development/connector-metadata-file"},"metadata.yaml")," of the connector.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Submit a PR containing the changes you made.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"One of Airbyte maintainers will review the change and publish the new version of the connector to Docker hub. Triggering tests and publishing connectors can be done by leaving a comment on the PR with the following format ","(","the PR must be from the Airbyte repo, not a fork",")",":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"# to run integration tests for the connector\n# Example: /test connector=connectors/source-hubspot\n/test connector=(connectors|bases)/<connector_name>\n\n# to run integration tests, publish the connector, and use the updated connector version in our config/metadata files\n# Example: /publish connector=connectors/source-hubspot\n/publish connector=(connectors|bases)/<connector_name>\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The new version of the connector is now available for everyone who uses it. Thank you!"))),(0,a.kt)("h3",{id:"updating-connector-metadata"},"Updating Connector Metadata"),(0,a.kt)("p",null,"When a new (or updated version) of a connector is ready to be published, our automations will check your branch for a few things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Does the connector have an icon?"),(0,a.kt)("li",{parentName:"ul"},"Does the connector have documentation and is it in the proper format?"),(0,a.kt)("li",{parentName:"ul"},"Does the connector have a changelog entry for this version?")),(0,a.kt)("p",null,"If any of the above are failing, you won't be able to merge your PR or publish your connector."),(0,a.kt)("p",null,"Connector icons should be square SVGs and be located in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/master/airbyte-config-oss/init-oss/src/main/resources/icons"},"this directory"),"."),(0,a.kt)("p",null,"Connector documentation and changelogs are markdown files which live either ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/master/docs/integrations/sources"},"here for sources"),", or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/master/docs/integrations/destinations"},"here for destinations"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/connector-development/connector-metadata-file"},"metadata.yaml")," file is valid."),(0,a.kt)("h3",{id:"the-publish-command"},"The /publish command"),(0,a.kt)("p",null,"Publishing a connector can be done using the ",(0,a.kt)("inlineCode",{parentName:"p"},"/publish")," command as outlined in the above section. The command runs a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/actions/workflows/publish-command.yml"},"github workflow"),", and has the following configurable parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"connector")," - Required. This tells the workflow which connector to publish. e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"connector=connectors/source-amazon-ads"),". This can also be a comma-separated list of many connectors, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"connector=connectors/source-s3,connectors/destination-postgres,connectors/source-facebook-marketing"),". See the parallel flag below if publishing multiple connectors."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"repo")," - Defaults to the main airbyte repo. Set this when building connectors from forked repos. e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"repo=userfork/airbyte")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"gitref")," - Defaults to the branch of the PR where the /publish command is run as a comment. If running manually, set this to your branch where you made changes e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"gitref=george/s3-update")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"comment-id")," - This is automatically filled if you run /publish from a comment and enables the workflow to write back success/fail logs to the git comment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"auto-bump-version")," - Defaults to true, automates the post-publish process of bumping the connector's version in the yaml seed definitions and generating spec."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"parallel")," - Defaults to false. If set to true, a pool of runner agents will be spun up to allow publishing multiple connectors in parallel. Only switch this to true if publishing multiple connectors at once to avoid wasting $$$.")),(0,a.kt)("h2",{id:"using-credentials-in-ci"},"Using credentials in CI"),(0,a.kt)("p",null,"In order to run integration tests in CI, you'll often need to inject credentials into CI. There are a few steps for doing this:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Place the credentials into Google Secret Manager(GSM)"),": Airbyte uses a project 'Google Secret Manager' service as the source of truth for all CI secrets. Place the credentials ",(0,a.kt)("strong",{parentName:"li"},"exactly as they should be used by the connector")," into a GSM secret ",(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/security/secret-manager?referrer=search&orgonly=true&project=dataline-integration-testing&supportedpurview=organizationId"},"here")," i.e.: it should basically be a copy paste of the ",(0,a.kt)("inlineCode",{parentName:"li"},"config.json")," passed into a connector via the ",(0,a.kt)("inlineCode",{parentName:"li"},"--config")," flag. We use the following naming pattern: ",(0,a.kt)("inlineCode",{parentName:"li"},"SECRET_<capital source OR destination name>_CREDS")," e.g: ",(0,a.kt)("inlineCode",{parentName:"li"},"SECRET_SOURCE-S3_CREDS")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"SECRET_DESTINATION-SNOWFLAKE_CREDS"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Add the GSM secret's labels"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"connector")," (required) -- unique connector's name or set of connectors' names with '_' as delimiter i.e.: ",(0,a.kt)("inlineCode",{parentName:"li"},"connector=source-s3"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"connector=destination-snowflake")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"filename")," (optional) -- custom target secret file. Unfortunately Google doesn't use '.' into labels' values and so Airbyte CI scripts will add '.json' to the end automatically. By default secrets will be saved to ",(0,a.kt)("inlineCode",{parentName:"li"},"./secrets/config.json")," i.e: ",(0,a.kt)("inlineCode",{parentName:"li"},"filename=config_auth")," => ",(0,a.kt)("inlineCode",{parentName:"li"},"secrets/config_auth.json")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Save a necessary JSON value")," ",(0,a.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/11213273/146040653-4a76c371-a00e-41fe-8300-cbd411f10b2e.png"},"Example"),"."),(0,a.kt)("li",{parentName:"ol"},"That should be it.")),(0,a.kt)("h4",{id:"access-ci-secrets-on-gsm"},"Access CI secrets on GSM"),(0,a.kt)("p",null,"Access to GSM storage is limited to Airbyte employees. To give an employee permissions to the project:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the permissions' ",(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/iam-admin/iam?project=dataline-integration-testing"},"page")),(0,a.kt)("li",{parentName:"ol"},"Add a new principal to ",(0,a.kt)("inlineCode",{parentName:"li"},"dataline-integration-testing"),":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"input their login email"),(0,a.kt)("li",{parentName:"ul"},"select the role ",(0,a.kt)("inlineCode",{parentName:"li"},"Development_CI_Secrets"))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Save")))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);