!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var i=e();for(var o in i)("object"==typeof exports?exports:t)[o]=i[o]}}(self,(function(){return function(){"use strict";var t={d:function(e,i){for(var o in i)t.o(i,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:i[o]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{default:function(){return d}});var i={version:"1.0.3",install:function(t,e={}){const{propertyId:i,widgetId:o}=e;if(!i||typeof i!==string)return void console.error("[Tawk-messenger-vue warn]: You didn't specified 'propertyId' property in the plugin.");if(!o||typeof o!==string)return void console.error("[Tawk-messenger-vue warn]: You didn't specified 'widgetId' property in the plugin.");const d=new t;new class{constructor(t,e){e.propertyId&&typeof e.propertyId===string&&e.widgetId&&typeof e.widgetId===string&&(this.root=t,this.propertyId=e.propertyId,this.widgetId=e.widgetId,this.embedId=e.embedId,this.customStyle=e.customStyle,this.basePath=e.basePath,this.load())}load(){window&&document&&(window.Tawk_API=window.Tawk_API||{},window.Tawk_LoadStart=new Date,function({propertyId:t="",widgetId:e="",embedId:i="",basePath:o="tawk.to"}){if(i.length){if(!document.getElementById(i)){const t=document.createElement("div");t.id=i,document.body.appendChild(t)}window.Tawk_API.embedded=i}const d=document.createElement("script");d.async=!0,d.src=`https://embed.${o}/${t}/${e}`,d.charset="UTF-8",d.setAttribute("crossorigin","*");const n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(d,n)}({propertyId:this.propertyId,widgetId:this.widgetId,embedId:this.embedId,basePath:this.basePath}),this.init())}init(){this.customStyle&&"object"==typeof this.customStyle&&(window.Tawk_API.customStyle=this.customStyle),this.root.maximize=()=>window.Tawk_API.maximize(),this.root.minimize=()=>window.Tawk_API.minimize(),this.root.toggle=()=>window.Tawk_API.toggle(),this.root.popup=()=>window.Tawk_API.popup(),this.root.showWidget=()=>window.Tawk_API.showWidget(),this.root.hideWidget=()=>window.Tawk_API.hideWidget(),this.root.toggleVisibility=()=>window.Tawk_API.toggleVisibility(),this.root.endChat=()=>window.Tawk_API.endChat(),this.root.getWindowType=()=>window.Tawk_API.getWindowType(),this.root.getStatus=()=>window.Tawk_API.getStatus(),this.root.isChatMaximized=()=>window.Tawk_API.isChatMaximized(),this.root.isChatMinimized=()=>window.Tawk_API.isChatMinimized(),this.root.isChatHidden=()=>window.Tawk_API.isChatHidden(),this.root.isChatOngoing=()=>window.Tawk_API.isChatOngoing(),this.root.isVisitorEngaged=()=>window.Tawk_API.isVisitorEngaged(),this.root.onLoaded=()=>window.Tawk_API.onLoaded,this.root.onBeforeLoaded=()=>window.Tawk_API.onBeforeLoaded,this.root.widgetPosition=()=>window.Tawk_API.widgetPosition(),this.root.visitor=t=>window.Tawk_API.visitor=t,this.root.setAttributes=(t,e)=>window.Tawk_API.setAttributes(t,e),this.root.addEvent=(t,e,i)=>window.Tawk_API.addEvent(t,e,i),this.root.addTags=(t,e)=>window.Tawk_API.addTags(t,e),this.root.removeTags=(t,e)=>window.Tawk_API.removeTags(t,e),this.mapListeners()}mapListeners(){window.addEventListener("tawkLoad",(()=>{this.root.$emit("load")})),window.addEventListener("tawkStatusChange",(t=>{this.root.$emit("statusChange",t.detail)})),window.addEventListener("tawkBeforeLoad",(()=>{this.root.$emit("beforeLoad")})),window.addEventListener("tawkChatMaximized",(()=>{this.root.$emit("chatMaximized")})),window.addEventListener("tawkChatMinimized",(()=>{this.root.$emit("chatMinimized")})),window.addEventListener("tawkChatHidden",(()=>{this.root.$emit("chatHidden")})),window.addEventListener("tawkChatStarted",(()=>{this.root.$emit("chatStarted")})),window.addEventListener("tawkChatEnded",(()=>{this.root.$emit("chatEnded")})),window.addEventListener("tawkPrechatSubmit",(t=>{this.root.$emit("prechatSubmit",t.detail)})),window.addEventListener("tawkOfflineSubmit",(t=>{this.root.$emit("offlineSubmit",t.detail)})),window.addEventListener("tawkChatMessageVisitor",(t=>{this.root.$emit("chatMessageVisitor",t.detail)})),window.addEventListener("tawkChatMessageAgent",(t=>{this.root.$emit("chatMessageAgent",t.detail)})),window.addEventListener("tawkChatMessageSystem",(t=>{this.root.$emit("chatMessageSystem",t.detail)})),window.addEventListener("tawkAgentJoinChat",(t=>{this.root.$emit("agentJoinChat",t.detail)})),window.addEventListener("tawkAgentLeaveChat",(t=>{this.root.$emit("agentLeaveChat",t.detail)})),window.addEventListener("tawkChatSatisfaction",(t=>{this.root.$emit("chatSatisfaction",t.detail)})),window.addEventListener("tawkVisitorNameChanged",(t=>{this.root.$emit("visitorNameChanged",t.detail)})),window.addEventListener("tawkFileUpload",(t=>{this.root.$emit("fileUpload",t.detail)})),window.addEventListener("tawkTagsUpdated",(t=>{this.root.$emit("tagsUpdated",t.detail)})),window.addEventListener("tawkUnreadCountChanged",(t=>{this.root.$emit("unreadCountChanged",t.detail)}))}}(d,e),t.prototype.$tawkMessenger=d}};const o=i.install;i.install=(t,e)=>{o.call(i,t,{...e})};var d=i;return e}()}));