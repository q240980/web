(function(t){function e(e){for(var a,s,r=e[0],c=e[1],l=e[2],d=0,f=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="https://cdn.jsdelivr.net/gh/q240980/web/kgf.nr159.com/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0133":function(t,e,n){"use strict";n("07d8")},"034f":function(t,e,n){"use strict";n("9085")},"07d8":function(t,e,n){},"3b4a":function(t,e,n){},"440f":function(t,e,n){},5279:function(t,e,n){"use strict";n("3b4a")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("el-backtop",{attrs:{bottom:t.miniMode?88:40,right:t.miniMode?20:40}},[t._v("↑")]),n("Nav"),n("div",{staticClass:"body"},[t._l(t.clf,(function(e,a){return n("div",{key:a},[t._v(t._s(a)+":"+t._s(e))])})),n("router-view")],2),n("Footer"),n("Tabbar")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",[t._m(0),n("div",[t._v(" Copyright © 2019-"+t._s(t.nowYear)+" ")]),t._m(1),t._m(2)])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:"https://nr159.com/",target:"_blank"}},[t._v("合肥鸟人网络科技有限公司")]),t._v(" 版权所有 ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:"http://www.beian.miit.gov.cn/",target:"_blank"}},[t._v("皖ICP备20004170号-1")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=34010202601334",target:"_blank"}},[t._v("皖公网安备:34010202601334号")])])}],c={name:"Footer",props:{msg:String},computed:{nowYear:function(){var t=new Date;return t.getFullYear()}}},l=c,u=(n("c2dd"),n("2877")),d=Object(u["a"])(l,s,r,!1,null,"6d96ddb0",null),f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"88px"}},[n("div",{staticClass:"nav"},[n("div",{staticClass:"nav-mini-button",class:t.miniMode?"":"hidden",on:{click:t.handleOpen}},[n("p",[n("i",{class:0==t.menuIsOpen?"el-icon-menu":"el-icon-circle-close"})])]),n("div",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[n("h1",{staticClass:"img",staticStyle:{color:"#ffffff"}},[t._v("鸟人网络科技")])])],1),n("div",{class:t.miniMode&&!t.menuIsOpen?"hidden":""},[n("div",{class:t.miniMode?"nav-menu-down":"nav-menu"},[t._l(t.$router.options.routes,(function(e,a){return[e.hide?t._e():n("router-link",{key:a,attrs:{to:{path:e.path}}},[t._v(" "+t._s(e.meta.title)+" ")])]}))],2)])])])},m=[],h={name:"Nav",computed:{miniMode:function(){return this.$store.getters["miniMode"]},menuIsOpen:function(){return this.$store.getters["menuIsOpen"]}},methods:{handleOpen:function(){this.$store.commit("clickMenuButton")}}},v=h,w=(n("5279"),Object(u["a"])(v,p,m,!1,null,"c94a22d6",null)),b=w.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.miniMode?n("div",{staticClass:"tabbar-box",staticStyle:{height:"58px"}},[n("el-row",{staticClass:"tabbar"},[n("a",{ref:"selectFiles",staticClass:"hidden",attrs:{href:"tel:15856353958"}},[t._v("call")]),n("el-col",{staticClass:"item",attrs:{span:6},nativeOn:{click:function(e){return t.$refs.selectFiles.click()}}},[n("span",{staticClass:"iconfont icon-dianhua"}),n("div",{staticClass:"text"},[t._v(" 电话 ")])]),n("el-col",{staticClass:"item",attrs:{span:6},nativeOn:{click:function(e){t.showWechat=!0}}},[n("span",{staticClass:"iconfont icon-wechat"}),n("div",{staticClass:"text"},[t._v(" 微信 ")])]),n("el-col",{staticClass:"item",attrs:{span:6},nativeOn:{click:function(e){t.showQQ=!0}}},[n("span",{staticClass:"iconfont icon-qq"}),n("div",{staticClass:"text"},[t._v(" QQ ")])]),n("el-col",{staticClass:"item",attrs:{span:6},nativeOn:{click:function(e){t.isWechat()?t.showWechatMask=!0:t.showMap=!0}}},[n("span",{staticClass:"iconfont icon-dingwei"}),n("div",{staticClass:"text"},[t._v(" 导航 ")])])],1),n("el-dialog",{attrs:{title:"微信",visible:t.showWechat,width:"80%",center:""},on:{"update:visible":function(e){t.showWechat=e}}},[n("el-image",{attrs:{src:t.cdnBaseUrl+"/image/wechat-qrcode.png"}}),n("div",{staticClass:"dialog-wechat-text"},[n("span",[t._v("微信号:")]),n("span",[t._v("15856353958")])]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.showWechat=!1}}},[t._v("关 闭")])],1)],1),n("el-dialog",{attrs:{title:"QQ",visible:t.showQQ,width:"80%",center:""},on:{"update:visible":function(e){t.showQQ=e}}},[n("div",{staticClass:"dialog-wechat-text"},[n("div",[n("a",{attrs:{target:"_blank",href:"http://wpa.qq.com/msgrd?v=3&uin=635868694&site=qq&menu=yes"}},[n("img",{attrs:{border:"0",src:"http://wpa.qq.com/pa?p=2:635868694:51",alt:"点击这里给我发消息",title:"点击这里给我发消息"}})])]),n("span",[t._v("QQ号:")]),n("span",[t._v("1838886757")])]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.showQQ=!1}}},[t._v("关 闭")])],1)]),n("el-dialog",{attrs:{title:"请选择已安装的导航",visible:t.showMap,width:"80%",center:""},on:{"update:visible":function(e){t.showMap=e}}},[n("el-row",{staticClass:"map-list text-center"},[n("el-col",{attrs:{span:8}},[n("a",{attrs:{href:"baidumap://map/direction?destination=name:郎溪立能通风设备有限公司|latlng:30.99368,119.145534&coord_type=bd09ll&mode=driving&region=xx"}},[n("div",{staticStyle:{width:"80%"}},[n("el-image",{attrs:{fit:"contain",src:t.cdnBaseUrl+"/image/map/baidu.webp"}}),n("div",{staticClass:"map-name"},[t._v("百度地图")])],1)])]),n("el-col",{attrs:{span:8}},[n("a",{attrs:{href:"qqmap://map/routeplan?type=drive&to=郎溪立能通风设备有限公司&tocoord=30.987606,119.138999&referer=ZQABZ-X23CU-MPKV7-4M2CV-6RI3E-5VB2F"}},[n("div",{staticStyle:{width:"80%"}},[n("el-image",{attrs:{src:t.cdnBaseUrl+"/image/map/tengxun.webp"}}),n("div",{staticClass:"map-name"},[t._v("腾讯地图")])],1)])]),n("el-col",{attrs:{span:8}},[n("a",{attrs:{href:"amapuri://route/plan/?dname=郎溪立能通风设备有限公司&dlat=30.987604&dlon=119.138998&dev=0"}},[n("div",{staticStyle:{width:"80%"}},[n("el-image",{attrs:{src:t.cdnBaseUrl+"/image/map/gaode.webp"}}),n("div",{staticClass:"map-name"},[t._v("高德地图")])],1)])])],1),n("div",{staticClass:"dialog-map-text"},[n("span",[t._v("地图搜索:郎溪立能通风设备")])]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.showMap=!1}}},[t._v("关 闭")])],1)],1),t.showWechatMask?n("div",{staticClass:"wechat-mask",on:{click:function(e){t.showWechatMask=!1}}},[n("el-image",{ref:"open_in_browser",attrs:{src:t.cdnBaseUrl+"/image/open-in-browser.jpeg"}})],1):t._e()],1):t._e()},g=[],C={name:"Tabbar",data:function(){return{showWechatMask:!1,showWechat:!1,showQQ:!1,showMap:!1}},computed:{miniMode:function(){return this.$store.getters["miniMode"]}},methods:{handleCall:function(){window.location.href="tel:15856353958"},handleOpen:function(){this.$store.commit("clickMenuButton")}}},y=C,O=(n("dcbf"),Object(u["a"])(y,_,g,!1,null,"3e33e17f",null)),M=O.exports,k={name:"Home",watch:{"$route.path":function(){this.$store.commit("closeMenu");var t=this.$store.getters["siteTitle"];document.title=this.$route.meta.title+" - "+t}},computed:{miniMode:function(){return this.$store.getters["miniMode"]}},components:{Nav:b,Footer:f,Tabbar:M},mounted:function(){var t=this;t.$store.commit("setWindow",window),window.onresize=function(){return function(){t.$store.commit("setWindow",window)}()}}},x=k,$=(n("034f"),Object(u["a"])(x,i,o,!1,null,null,null)),j=$.exports,Q=n("8c4f"),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("el-button",[t._v("首页")])],1)},S=[],W={name:"Index",components:{}},q=W,E=Object(u["a"])(q,I,S,!1,null,null,null),B=E.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("el-button",[t._v("关于")])],1)},P=[],F={name:"About",components:{}},U=F,A=(n("0133"),Object(u["a"])(U,T,P,!1,null,"13b4459a",null)),H=A.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("el-button",[t._v("定制")])],1)},V=[],Y={name:"Custom",components:{}},J=Y,Z=Object(u["a"])(J,N,V,!1,null,null,null),z=Z.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("el-button",[t._v("联系")])],1)},K=[],R={name:"Contact",components:{}},X=R,G=Object(u["a"])(X,D,K,!1,null,null,null),L=G.exports;a["default"].use(Q["a"]);var tt=[{path:"/",name:"Index",component:B,meta:{title:"首页"}},{path:"/About.html",name:"About",component:H,meta:{title:"公司简介"}},{path:"/Custom.html",name:"Custom",component:z,meta:{title:"定制开发"}},{path:"/Contact.html",name:"Contact",component:L,meta:{title:"联系我们"}},{path:"*",hide:!0,redirect:"/"}],et=new Q["a"]({mode:"history",base:"/",routes:tt}),nt=et,at=n("2f62");a["default"].use(at["a"]);var it={site:{title:"合肥鸟人网络科技有限公司"},menuIsOpen:!1,window:{width:0,height:0}},ot={siteTitle:function(){return it.site.title},miniMode:function(){return it.window.width<768},menuIsOpen:function(){return it.menuIsOpen},windowWith:function(){return it.window.width},windowHeight:function(){return it.window.height},welcomeHeight:function(){return it.window.height-88}},st={setSiteTitle:function(t,e){t.site.title=e},clickMenuButton:function(t){t.menuIsOpen=!t.menuIsOpen},openMenu:function(t){t.menuIsOpen=!0},closeMenu:function(t){t.menuIsOpen=!1},setWindow:function(t,e){t.window.width=e.innerWidth,t.window.height=e.innerHeight}},rt={},ct=new at["a"].Store({state:it,getters:ot,mutations:st,actions:rt,modules:{}}),lt=n("6b72"),ut=n.n(lt),dt=(n("be4f"),n("450d"),n("896a")),ft=n.n(dt),pt=(n("a7cc"),n("df33")),mt=n.n(pt),ht=(n("279e"),n("7d94")),vt=n.n(ht),wt=(n("acb6"),n("c673")),bt=n.n(wt),_t=(n("b8e0"),n("a4c4")),gt=n.n(_t),Ct=(n("f4f9"),n("c2cc")),yt=n.n(Ct),Ot=(n("7a0f"),n("0f6c")),Mt=n.n(Ot),kt=(n("1951"),n("eedf")),xt=n.n(kt);a["default"].use(xt.a),a["default"].use(Mt.a),a["default"].use(yt.a),a["default"].use(gt.a),a["default"].use(bt.a),a["default"].use(vt.a),a["default"].use(mt.a),a["default"].use(ft.a.directive),a["default"].prototype.clf=ut.a,a["default"].config.productionTip=!1,nt.beforeEach((function(t,e,n){n(),window.scrollTo(0,0)})),a["default"].prototype.cdnBaseUrl="https://cdn.jsdelivr.net/gh/q240980/web@nr159.com",new a["default"]({router:nt,store:ct,render:function(t){return t(j)}}).$mount("#app")},5776:function(t,e,n){},9085:function(t,e,n){},c2dd:function(t,e,n){"use strict";n("440f")},dcbf:function(t,e,n){"use strict";n("5776")}});