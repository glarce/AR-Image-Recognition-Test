(function(e){function t(t){for(var a,i,s=t[0],c=t[1],l=t[2],f=0,u=[];f<s.length;f++)i=s[f],o[i]&&u.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/AR-Image-Recognition-Test/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0157":function(e,t,n){var a=n("4fea");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("499e").default;o("37770db9",a,!0,{sourceMap:!1,shadowMode:!1})},"12df":function(e,t,n){"use strict";var a=n("574e"),o=n.n(a);o.a},"1f89":function(e,t,n){"use strict";var a=n("0157"),o=n.n(a);o.a},2070:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".container[data-v-f0888f9c]{width:100vw;height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.container video[data-v-f0888f9c]{max-width:100vw;max-height:100vh}",""])},"345e":function(e,t,n){var a=n("2070");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("499e").default;o("1162117a",a,!0,{sourceMap:!1,shadowMode:!1})},"4fea":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".loading[data-v-06e04f97]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.container[data-v-06e04f97]{width:100vw;height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.container video[data-v-06e04f97]{max-width:100vw;max-height:100vh}",""])},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.isSplash?n("splash",{on:{scan:function(t){e.isSplash=!1,e.isScanning=!0}}}):e._e(),e.isScanning?n("scanner",{on:{sendCode:e.reciveCode}}):e._e(),e.isPlayingMedia?n("media",{attrs:{code:e.code,codes:e.codes},on:{splash:function(t){e.isPlayingMedia=!1,e.isSplash=!0}}}):e._e()],1)},r=[],i=(n("28a5"),n("386d"),n("d4b8"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"outer-container"},[n("div",{staticClass:"container"},[n("h1",[e._v("QR to Video")]),n("md-button",{staticClass:"md-raised md-primary",on:{click:function(t){e.$emit("scan")}}},[e._v("scan")])],1)])}),s=[],c={name:"splash"},l=c,d=(n("12df"),n("2877")),f=Object(d["a"])(l,i,s,!1,null,"3c44cdb8",null),u=f.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"scanner"},[e._m(0),n("md-dialog-alert",{attrs:{"md-active":e.hasError,"md-title":"Error","md-content":e.errorText},on:{"update:mdActive":function(t){e.hasError=t}}})],1)},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("video",{staticClass:"video-back",attrs:{id:"preview",playsinline:""}})])}],m={name:"scanner",data:function(){return{codes:[],scanner:null,isLoading:!0,hasError:!1,errorText:""}},methods:{startScanner:function(e){e.length>0?this.scanner.start(e[0]):(this.errorText="No camera detected",this.hasError=!0)},scan:function(e){this.$emit("sendCode",e)},error:function(e){this.errorText="An error has occurred. Please use safari on Apple products and Chrome on Android and enable camera. ".concat(e),this.hasError=!0}},mounted:function(){this.scanner=new Instascan.Scanner({video:document.getElementById("preview"),mirror:!1,backgroundScan:!1,scanPeriod:5}),this.scanner.addListener("scan",this.scan),Instascan.Camera.getCameras().then(this.startScanner).catch(this.error)}},v=m,g=(n("1f89"),Object(d["a"])(v,p,h,!1,null,"06e04f97",null)),b=g.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"media"},[n("div",{staticClass:"container"},[n("video",{attrs:{autoplay:"",id:"video"}},[n("source",{attrs:{src:e.vidSrc,type:e.vidType}})])])])},w=[],x={name:"media",props:["code","codes"],data:function(){return{vidSrc:"",vidType:""}},methods:{getURLParamFromString:function(e,t){for(var n=e.search.substring(1),a=n.split("&"),o=0;o<a.length;o++){var r=a[o].split("=");if(r[0]==t)return decodeURIComponent(r[1])}},done:function(){this.$emit("splash")}},mounted:function(){for(var e=0;e<this.codes.codes.length;e++){var t=this.codes.codes[e];t.code==this.code?(this.vidSrc=t.src,this.vidType=t.type):this.getURLParam(this.code,this.codes.urlParam)==this.code&&(this.vidSrc=t.src,this.vidType=t.type)}""===this.vidSrc&&(alert("This qr code dosen't have a video embeded"),this.$emit("splash")),document.getElementById("video").addEventListener("ended",this.done,!1)}},k=x,S=(n("d4ae"),Object(d["a"])(k,y,w,!1,null,"f0888f9c",null)),M=S.exports,_={name:"app",components:{Splash:u,Scanner:b,Media:M},data:function(){return{isSplash:!0,isScanning:!1,isPlayingMedia:!1,codes:{},code:""}},methods:{getURLParam:function(e){for(var t=window.location.search.substring(1),n=t.split("&"),a=0;a<n.length;a++){var o=n[a].split("=");if(o[0]==e)return decodeURIComponent(o[1])}},parseCodes:function(e){this.codes=e.data,void 0!=this.getURLParam(this.codes.urlParam)&&this.reciveCode(this.getURLParam(this.codes.urlParam))},reciveCode:function(e){this.code=e,this.isScanning=!1,this.isSplash=!1,this.isPlayingMedia=!0}},mounted:function(){this.axios.get("codes.json").then(this.parseCodes)}},C=_,P=(n("5c0b"),Object(d["a"])(C,o,r,!1,null,null,null)),j=P.exports,E=n("9483");Object(E["a"])("".concat("/AR-Image-Recognition-Test/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var O=n("9c30"),T=(n("51de"),n("0759"),n("bc3a")),R=n.n(T),I=n("a7fe"),$=n.n(I);a["default"].use(O["MdButton"]),a["default"].use(O["MdProgress"]),a["default"].use(O["MdDialog"]),a["default"].use($.a,R.a),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(j)}}).$mount("#app")},"574e":function(e,t,n){var a=n("aaf5");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("499e").default;o("0295c2f2",a,!0,{sourceMap:!1,shadowMode:!1})},"5c0b":function(e,t,n){"use strict";var a=n("e959"),o=n.n(a);o.a},a33e:function(e,t,n){var a=n("b041");t=e.exports=n("2350")(!1),t.push([e.i,"@font-face{font-family:Material Icons;font-style:normal;font-weight:400;src:url("+a(n("05f4"))+');src:local("Material Icons"),local("MaterialIcons-Regular"),url('+a(n("71ea"))+') format("woff2"),url('+a(n("9ddb"))+') format("woff"),url('+a(n("786c"))+') format("truetype")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:"liga";font-feature-settings:"liga"}body{margin:0;overflow:hidden}#app{font-family:roboto,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;margin:0}',""])},aaf5:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".outer-container[data-v-3c44cdb8]{width:100vw;height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.outer-container .container[data-v-3c44cdb8]{text-align:center}",""])},d4ae:function(e,t,n){"use strict";var a=n("345e"),o=n.n(a);o.a},e959:function(e,t,n){var a=n("a33e");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("499e").default;o("6f19147e",a,!0,{sourceMap:!1,shadowMode:!1})}});