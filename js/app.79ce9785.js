(function(e){function n(n){for(var r,i,a=n[0],s=n[1],u=n[2],f=0,d=[];f<a.length;f++)i=a[f],o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(n);while(d.length)d.shift()();return c.push.apply(c,u||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var s=t[a];0!==o[s]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},c=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/AR-Image-Recognition-Test/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=n,a=a.slice();for(var u=0;u<a.length;u++)n(a[u]);var l=s;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"525c":function(e,n,t){"use strict";var r=t("7234"),o=t.n(r);o.a},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("scanner",{on:{code:e.checkCode}})],1)},c=[],i=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"scanner"},[t("div",{staticClass:"container"},[t("video",{staticClass:"video-back",attrs:{id:"preview",playsinline:""}})])])}],s={name:"scanner",data:function(){return{codes:[],scanner:null}},methods:{startScanner:function(e){e.length>0?this.scanner.start(e[0]):alert("No cameras found.")},scan:function(e){this.$emit("code",e)},error:function(e){alert(e)}},mounted:function(){this.scanner=new Instascan.Scanner({video:document.getElementById("preview")}),this.scanner.addListener("scan",this.scan),Instascan.Camera.getCameras().then(this.startScanner).catch(this.error)}},u=s,l=(t("525c"),t("2877")),f=Object(l["a"])(u,i,a,!1,null,"369f8f5b",null),d=f.exports,p={name:"app",components:{Scanner:d},methods:{checkCode:function(e){alert(e)}}},h=p,v=(t("5c0b"),Object(l["a"])(h,o,c,!1,null,null,null)),g=v.exports,b=t("9483");Object(b["a"])("".concat("/AR-Image-Recognition-Test/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(g)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("5e27"),o=t.n(r);o.a},"5e27":function(e,n,t){},7234:function(e,n,t){}});
//# sourceMappingURL=app.79ce9785.js.map