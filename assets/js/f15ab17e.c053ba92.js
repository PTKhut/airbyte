"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[8461],{3905:(A,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>p});var n=t(67294);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function o(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function l(A,e){if(null==A)return{};var t,n,a=function(A,e){if(null==A)return{};var t,n,a={},r=Object.keys(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(a[t]=A[t]);return a}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(a[t]=A[t])}return a}var i=n.createContext({}),s=function(A){var e=n.useContext(i),t=e;return A&&(t="function"==typeof A?A(e):o(o({},e),A)),t},d=function(A){var e=s(A.components);return n.createElement(i.Provider,{value:e},A.children)},u={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(A,e){var t=A.components,a=A.mdxType,r=A.originalType,i=A.parentName,d=l(A,["components","mdxType","originalType","parentName"]),c=s(t),p=a,m=c["".concat(i,".").concat(p)]||c[p]||u[p]||r;return t?n.createElement(m,o(o({ref:e},d),{},{components:t})):n.createElement(m,o({ref:e},d))}));function p(A,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var r=t.length,o=new Array(r);o[0]=c;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=A,l.mdxType="string"==typeof A?A:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},52118:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const r={},o="On Azure (VM)",l={unversionedId:"deploying-airbyte/on-azure-vm-cloud-shell",id:"deploying-airbyte/on-azure-vm-cloud-shell",title:"On Azure (VM)",description:"The instructions have been tested on Azure VM Linux (ubuntu 18.04)",source:"@site/../docs/deploying-airbyte/on-azure-vm-cloud-shell.md",sourceDirName:"deploying-airbyte",slug:"/deploying-airbyte/on-azure-vm-cloud-shell",permalink:"/deploying-airbyte/on-azure-vm-cloud-shell",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/deploying-airbyte/on-azure-vm-cloud-shell.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"On AWS (EC2)",permalink:"/deploying-airbyte/on-aws-ec2"},next:{title:"On GCP (Compute Engine)",permalink:"/deploying-airbyte/on-gcp-compute-engine"}},i={},s=[{value:"Launch Azure Cloud Shell",id:"launch-azure-cloud-shell",level:2},{value:"Create a new virtual machine",id:"create-a-new-virtual-machine",level:2},{value:"Create resource group",id:"create-resource-group",level:3},{value:"Create virtual machine",id:"create-virtual-machine",level:3},{value:"Download SSH key",id:"download-ssh-key",level:3},{value:"Connect to virtual machine",id:"connect-to-virtual-machine",level:3},{value:"Install environment",id:"install-environment",level:2},{value:"Install and Start Airbyte",id:"install-and-start-airbyte",level:2},{value:"Connect to Airbyte",id:"connect-to-airbyte",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:s};function u(A){let{components:e,...r}=A;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"on-azure-vm"},"On Azure (VM)"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The instructions have been tested on ",(0,a.kt)("inlineCode",{parentName:"p"},"Azure VM Linux (ubuntu 18.04)")))),(0,a.kt)("h2",{id:"launch-azure-cloud-shell"},"Launch Azure Cloud Shell"),(0,a.kt)("p",null,"Launch cloud shell by going to ",(0,a.kt)("a",{parentName:"p",href:"https://shell.azure.com/bash"},"https://shell.azure.com/bash")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(44652).Z,width:"1131",height:"244"})),(0,a.kt)("h2",{id:"create-a-new-virtual-machine"},"Create a new virtual machine"),(0,a.kt)("h3",{id:"create-resource-group"},"Create resource group"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Inside Azure cloud shell\nrgName=airbyte-demo\nrgLocation=eastus\naz group create --name $rgName --location $rgLocation\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(7056).Z,width:"1081",height:"447"})),(0,a.kt)("h3",{id:"create-virtual-machine"},"Create virtual machine"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Inside Azure cloud shell\nuserName=byteuser\nvmName=airbyte\ndnsName=$(head -3 /dev/urandom | tr -dc a-z | cut -c -16)\npublicIp=$(az vm create --resource-group $rgName \\\n  --name $vmName --image UbuntuLTS \\\n  --admin-username $userName \\\n  --public-ip-address-dns-name $dnsName \\\n  --generate-ssh-keys --query 'publicIpAddress' -o json)\necho $publicIp\n")),(0,a.kt)("p",null,"This step will create a virtual machine and add a user account named ",(0,a.kt)("inlineCode",{parentName:"p"},"byteuser"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"--generate-ssh-keys")," option will generate a new ssh key and put it to the default key location ","(","~/.ssh",")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: Copy the ",(0,a.kt)("inlineCode",{parentName:"strong"},"publicIpAddress")," output, you will need this address later to connect from your workstation.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(64525).Z,width:"1409",height:"402"})),(0,a.kt)("h3",{id:"download-ssh-key"},"Download SSH key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Inside Azure cloud shell\ndownload ~/.ssh/id_rsa\n")),(0,a.kt)("p",null,"Make sure to update the permissions on the private key, or you'll get an error telling you that permissions for this file are too open."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 600 ./$YOUR_PATH_TO_DOWNLOADS/id_rsa\n")),(0,a.kt)("p",null,"Above command will generate download link and give you pop-up on right bottom side, click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Click here to download your file.")," to download private key. Note: Save this file, you will need it to connect to your VM in ",(0,a.kt)("a",{parentName:"p",href:"/deploying-airbyte/on-azure-vm-cloud-shell#connect-to-airbyte"},"Connect to Airbyte")," step."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(23278).Z,width:"1892",height:"490"})),(0,a.kt)("h3",{id:"connect-to-virtual-machine"},"Connect to virtual machine"),(0,a.kt)("p",null,"If you get this error: ",(0,a.kt)("inlineCode",{parentName:"p"},'Could not resolve hostname "XX.XXX.X.XXX": Name or service not known'),", just manually enter the publicIp host name when running the ssh command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Inside Azure cloud shell\nssh $userName@$publicIp\n")),(0,a.kt)("h2",{id:"install-environment"},"Install environment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("inlineCode",{parentName:"li"},"docker"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Inside Azure cloud shell\nsudo apt-get update -y\nsudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release -y\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\necho "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\nsudo apt-get update\nsudo apt-get install docker-ce docker-ce-cli -y\nsudo usermod -a -G docker $USER\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Inside Azure cloud shell\nsudo wget https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m) -O /usr/local/bin/docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\ndocker-compose --version\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Close the ssh connection to ensure the group modification is taken into account")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Inside Azure cloud shell\nlogout\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reconnect to virtual machine ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Inside Azure cloud shell\nssh $userName@$publicIp\n")),(0,a.kt)("h2",{id:"install-and-start-airbyte"},"Install and Start Airbyte"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Inside Azure cloud shell\nmkdir airbyte && cd airbyte\nwget https://raw.githubusercontent.com/airbytehq/airbyte/master/{.env,docker-compose.yaml}\nsudo docker-compose up -d\n")),(0,a.kt)("h2",{id:"connect-to-airbyte"},"Connect to Airbyte"),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For security reasons, we strongly recommend to not expose Airbyte on Internet available ports. Future versions will add support for SSL & Authentication."))),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This part assumes that you have access to a terminal on your workstation"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create ssh tunnel for port 8000"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Inside your workstation terminal\n# 1. Replace $SSH_KEY with private key path downloaded from earlier steps\n# 2. Replace $INSTANCE_IP with publicIpAddress noted from earlier steps\nssh -N -L 8000:localhost:8000 -i $SSH_KEY byteuser@$INSTANCE_IP\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Just visit ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8000"},"http://localhost:8000")," in your browser and start moving some data!"))),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you encounter any issues, just connect to our ",(0,a.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"Slack"),". Our community will help! We also have a ",(0,a.kt)("a",{parentName:"p",href:"/troubleshooting/on-deploying"},"FAQ")," section in our docs for common problems."))}u.isMDXComponent=!0},7056:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/azure_shell_create_rg-ee2be027e12c5c4cf6c0396f8d39d226.png"},64525:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/azure_shell_create_vm-6f37a2726891f32b878b944381195daf.png"},23278:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/azure_shell_download_ssh_key-160479a5c3e532eb37d444238ae62476.png"},44652:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"}}]);