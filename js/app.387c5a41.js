(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="https://cdn.jsdelivr.net/gh/q240980/web@lntfsb.com/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01e5":function(t,e,n){"use strict";n("826a")},"034f":function(t,e,n){"use strict";n("85ec")},"1b3f":function(t,e,n){"use strict";n("8a2a")},"4d98":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("ac1f"),n("466d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("el-backtop",{attrs:{bottom:t.miniMode?88:40,right:t.miniMode?20:40}},[t._v("↑")]),n("Nav"),n("div",{staticClass:"body"},[n("router-view")],1),n("Footer"),n("Tabbar")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",[t._m(0),t._m(1),n("div",[t._v(" Copyright © 2019-"+t._s(t.nowYear)+" ")])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:"https://lntfsb.com/"}},[t._v("郎溪立能通风设备有限公司")]),t._v(" 版权所有 ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:"https://nr159.com/",target:"_blank"}},[t._v("合肥鸟人网络科技有限公司")]),t._v(" 技术支持 ")])}],c={name:"Footer",props:{msg:String},computed:{nowYear:function(){var t=new Date;return t.getFullYear()}}},l=c,u=(n("c2b6"),n("2877")),d=Object(u["a"])(l,o,r,!1,null,"a383919c",null),m=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"88px"}},[n("div",{staticClass:"nav"},[n("div",{staticClass:"nav-mini-button",class:t.miniMode?"":"hidden",on:{click:t.handleOpen}},[n("p",[n("i",{class:0==t.menuIsOpen?"el-icon-menu":"el-icon-circle-close"})])]),n("div",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:t.cdnBaseUrl+"/image/logo.png"}})])],1),n("div",{class:t.miniMode&&!t.menuIsOpen?"hidden":""},[n("div",{class:t.miniMode?"nav-menu-down":"nav-menu"},[t._l(t.$router.options.routes,(function(e,i){return[e.hide?t._e():n("router-link",{key:i,attrs:{to:{path:e.path}}},[t._v(" "+t._s(e.meta.title)+" ")])]}))],2)])])])},f=[],h={name:"Nav",computed:{miniMode:function(){return this.$store.getters["miniMode"]},menuIsOpen:function(){return this.$store.getters["menuIsOpen"]}},methods:{handleOpen:function(){this.$store.commit("clickMenuButton")}}},v=h,g=(n("5ca0"),Object(u["a"])(v,p,f,!1,null,"23557f81",null)),w=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.miniMode?n("div",{staticClass:"tabbar-box",staticStyle:{height:"58px"}},[n("el-row",{staticClass:"tabbar"},[n("a",{ref:"selectFiles",staticClass:"hidden",attrs:{href:"tel:15856353958"}},[t._v("call")]),n("el-col",{staticClass:"item",attrs:{span:6},nativeOn:{click:function(e){return t.$refs.selectFiles.click()}}},[n("span",{staticClass:"iconfont icon-dianhua"}),n("div",{staticClass:"text"},[t._v(" 电话 ")])]),n("el-col",{staticClass:"item",attrs:{span:6},nativeOn:{click:function(e){t.showWechat=!0}}},[n("span",{staticClass:"iconfont icon-wechat"}),n("div",{staticClass:"text"},[t._v(" 微信 ")])]),n("el-col",{staticClass:"item",attrs:{span:6},nativeOn:{click:function(e){t.showQQ=!0}}},[n("span",{staticClass:"iconfont icon-qq"}),n("div",{staticClass:"text"},[t._v(" QQ ")])]),n("el-col",{staticClass:"item",attrs:{span:6},nativeOn:{click:function(e){t.isWechat()?t.showWechatMask=!0:t.showMap=!0}}},[n("span",{staticClass:"iconfont icon-dingwei"}),n("div",{staticClass:"text"},[t._v(" 导航 ")])])],1),n("el-dialog",{attrs:{title:"微信",visible:t.showWechat,width:"80%",center:""},on:{"update:visible":function(e){t.showWechat=e}}},[n("el-image",{attrs:{src:t.cdnBaseUrl+"/image/wechat-qrcode.png"}}),n("div",{staticClass:"dialog-wechat-text"},[n("span",[t._v("微信号:")]),n("span",[t._v("15856353958")])]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.showWechat=!1}}},[t._v("关 闭")])],1)],1),n("el-dialog",{attrs:{title:"QQ",visible:t.showQQ,width:"80%",center:""},on:{"update:visible":function(e){t.showQQ=e}}},[n("div",{staticClass:"dialog-wechat-text"},[n("div",[n("a",{attrs:{target:"_blank",href:"http://wpa.qq.com/msgrd?v=3&uin=635868694&site=qq&menu=yes"}},[n("img",{attrs:{border:"0",src:"http://wpa.qq.com/pa?p=2:635868694:51",alt:"点击这里给我发消息",title:"点击这里给我发消息"}})])]),n("span",[t._v("QQ号:")]),n("span",[t._v("1838886757")])]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.showQQ=!1}}},[t._v("关 闭")])],1)]),n("el-dialog",{attrs:{title:"请选择已安装的导航",visible:t.showMap,width:"80%",center:""},on:{"update:visible":function(e){t.showMap=e}}},[n("el-row",{staticClass:"map-list text-center"},[n("el-col",{attrs:{span:8}},[n("a",{attrs:{href:"baidumap://map/direction?destination=name:郎溪立能通风设备有限公司|latlng:30.99368,119.145534&coord_type=bd09ll&mode=driving&region=xx"}},[n("div",{staticStyle:{width:"80%"}},[n("el-image",{attrs:{fit:"contain",src:t.cdnBaseUrl+"/image/map/baidu.webp"}}),n("div",{staticClass:"map-name"},[t._v("百度地图")])],1)])]),n("el-col",{attrs:{span:8}},[n("a",{attrs:{href:"qqmap://map/routeplan?type=drive&to=郎溪立能通风设备有限公司&tocoord=30.987606,119.138999&referer=ZQABZ-X23CU-MPKV7-4M2CV-6RI3E-5VB2F"}},[n("div",{staticStyle:{width:"80%"}},[n("el-image",{attrs:{src:t.cdnBaseUrl+"/image/map/tengxun.webp"}}),n("div",{staticClass:"map-name"},[t._v("腾讯地图")])],1)])]),n("el-col",{attrs:{span:8}},[n("a",{attrs:{href:"amapuri://route/plan/?dname=郎溪立能通风设备有限公司&dlat=30.987604&dlon=119.138998&dev=0"}},[n("div",{staticStyle:{width:"80%"}},[n("el-image",{attrs:{src:t.cdnBaseUrl+"/image/map/gaode.webp"}}),n("div",{staticClass:"map-name"},[t._v("高德地图")])],1)])])],1),n("div",{staticClass:"dialog-map-text"},[n("span",[t._v("地图搜索:郎溪立能通风设备")])]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.showMap=!1}}},[t._v("关 闭")])],1)],1),t.showWechatMask?n("div",{staticClass:"wechat-mask",on:{click:function(e){t.showWechatMask=!1}}},[n("el-image",{ref:"open_in_browser",attrs:{src:t.cdnBaseUrl+"/image/open-in-browser.jpeg"}})],1):t._e()],1):t._e()},_=[],C={name:"Tabbar",data:function(){return{showWechatMask:!1,showWechat:!1,showQQ:!1,showMap:!1}},computed:{miniMode:function(){return this.$store.getters["miniMode"]}},methods:{handleCall:function(){window.location.href="tel:15856353958"},handleOpen:function(){this.$store.commit("clickMenuButton")}}},y=C,x=(n("dcbf"),Object(u["a"])(y,b,_,!1,null,"3e33e17f",null)),M=x.exports,O={name:"Home",watch:{"$route.path":function(){this.$store.commit("closeMenu");var t=this.$store.getters["siteTitle"];document.title=this.$route.meta.title+" - "+t}},computed:{miniMode:function(){return this.$store.getters["miniMode"]}},components:{Nav:w,Footer:m,Tabbar:M},mounted:function(){var t=this;t.$store.commit("setWindow",window),window.onresize=function(){return function(){t.$store.commit("setWindow",window)}()}}},k=O,j=(n("034f"),Object(u["a"])(k,a,s,!1,null,null,null)),$=j.exports,q=n("8c4f"),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Welcome"),n("Service"),n("Item"),n("Contact")],1)},Q=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"welcome",style:{height:t.welcomeHeight+"px"}},[n("div",{staticClass:"welcome-masker"},[n("div",{staticClass:"welcome-area"},[n("div",{staticClass:"welcome-area-logo"},[n("img",{attrs:{src:t.cdnBaseUrl+"/image/logo.png"}})]),n("div",{staticClass:"welcome-area-description"},[n("img",{attrs:{src:t.cdnBaseUrl+"/image/logo-description.png"}})])])])])},W=[],B={name:"Welcome",data:function(){return{welcomeHeight:2e3}},mounted:function(){this.$nextTick((function(){this.welcomeHeight=this.$store.getters["welcomeHeight"]}))}},U=B,E=(n("9cd5"),Object(u["a"])(U,S,W,!1,null,"54b79ac0",null)),T=E.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"service"},[n("el-col",{staticClass:"service-title"},[n("h2",[t._v("立能服务")]),n("p",[t._v("立能以优良的产品、合理的价格、及时的交货时间为经营原则，本着“诚信为本、科技为本、人文为本”的企业精神，忠诚服务好国内外的每一位用户！欢迎广大客户朋友垂询与合作！ ")])]),n("el-col",{staticClass:"service-list",attrs:{span:20,offset:2}},t._l(t.services,(function(e,i){return n("el-col",{key:i,attrs:{span:t.miniMode?24:8}},[n("el-card",{staticClass:"service-list-item card-size",attrs:{shadow:"hover"},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"card-header"},[n("span",[t._v(t._s(e.title))])])]},proxy:!0}],null,!0)},[n("el-image",{attrs:{src:t.cdnBaseUrl+e.img,lazy:""}},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:!0,expression:"true"}],staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[n("el-image",{staticClass:"el-image__inner",attrs:{src:t.cdnBaseUrl+"/image/loading.png",fit:"fill"}})],1)])],1)],1)})),1)],1)},H=[],F={name:"Service",data:function(){return{services:[{title:"设计",img:"/image/service/1.jpg"},{title:"安装",img:"/image/service/2.jpg"},{title:"维护",img:"/image/service/3.jpg"}]}},computed:{miniMode:function(){return this.$store.getters["miniMode"]}}},z=F,N=(n("01e5"),Object(u["a"])(z,P,H,!1,null,"1bbb45c0",null)),A=N.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"item"},[n("el-col",{staticClass:"item-title"},[n("h2",[t._v("产品展示")])]),n("el-col",{staticClass:"item-list",attrs:{span:20,offset:2}},t._l(t.items,(function(e,i){return n("el-col",{key:i,staticClass:"text-center",attrs:{span:t.miniMode?24:6}},[n("el-card",{staticClass:"item-list-item card-size",attrs:{shadow:"hover"},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"card-header"},[n("span",[t._v(t._s(e.title))])])]},proxy:!0}],null,!0)},[n("el-image",{attrs:{src:t.cdnBaseUrl+e.img,lazy:""}},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:!0,expression:"true"}],staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[n("img",{staticClass:"el-image__inner",attrs:{src:t.cdnBaseUrl+"/image/loading.png"}})])])],1)],1)})),1)],1)},Y=[],J={name:"Item",data:function(){return{items:[{title:"镀锌管道",img:"/image/item/1.jpg"},{title:"玻璃钢风机",img:"/image/item/2.jpg"},{title:"玻镁风管",img:"/image/item/3.jpg"},{title:"风幕机",img:"/image/item/4.jpg"},{title:"自然通风器",img:"/image/item/5.jpg"},{title:"更多...",img:"/image/item/more.jpg"}]}},computed:{miniMode:function(){return this.$store.getters["miniMode"]}}},Z=J,D=(n("80d9"),Object(u["a"])(Z,V,Y,!1,null,"6067f947",null)),K=D.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",[n("el-col",{attrs:{md:6,sm:12,xs:24}},[n("div",{staticClass:"grid-content bg-purple"},[n("span",{staticClass:"iconfont icon-dingwei"}),n("h2",[t._v("地址")]),n("p",[n("a",{attrs:{href:"baidumap://map/marker?location=30.99368,119.145534&title=郎溪立能通风设备有限公司&content=郎溪立能通风设备有限公司&src=ios.baidu.openAPIdemo"}},[t._v("安徽省宣城市郎溪县十字镇红旗村8号")])])])]),n("el-col",{attrs:{md:6,sm:12,xs:24}},[n("div",{staticClass:"grid-content bg-purple"},[n("span",{staticClass:"iconfont icon-dianhua"}),n("h2",[t._v("电话")]),n("p",[n("a",{attrs:{href:"tel:15856353958"}},[t._v("15856353958")])])])]),n("el-col",{attrs:{md:6,sm:12,xs:24}},[n("div",{staticClass:"grid-content bg-purple"},[n("span",{staticClass:"iconfont icon-wechat"}),n("h2",[t._v("微信")]),n("p",[t._v("15856353958")])])]),n("el-col",{attrs:{md:6,sm:12,xs:24}},[n("div",{staticClass:"grid-content bg-purple"},[n("span",{staticClass:"iconfont icon-qq"}),n("h2",[t._v("QQ")]),n("p",[n("a",{attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin=635868694&site=qq&menu=yes",target:"_blank"}},[t._v("1838886757")])])])])],1)],1)},R=[],X={name:"Contact"},G=X,tt=(n("1b3f"),Object(u["a"])(G,L,R,!1,null,"5256ee02",null)),et=tt.exports,nt={name:"Index",components:{Welcome:T,Service:A,Item:K,Contact:et}},it=nt,at=Object(u["a"])(it,I,Q,!1,null,null,null),st=at.exports;i["default"].use(q["a"]);var ot=[{path:"/",name:"Index",component:st,meta:{title:"首页"}},{path:"/service",name:"Service",component:A,meta:{title:"立能服务"}},{path:"/item",name:"Item",component:K,meta:{title:"立能产品"}},{path:"/contact",name:"Contact",component:et,meta:{title:"联系立能"}},{path:"*",hide:!0,redirect:"/"}],rt=new q["a"]({mode:"history",base:"/",routes:ot}),ct=rt,lt=n("2f62");i["default"].use(lt["a"]);var ut={site:{title:"郎溪立能通风设备有限公司"},menuIsOpen:!1,window:{width:0,height:0}},dt={siteTitle:function(){return ut.site.title},miniMode:function(){return ut.window.width<768},menuIsOpen:function(){return ut.menuIsOpen},windowWith:function(){return ut.window.width},windowHeight:function(){return ut.window.height},welcomeHeight:function(){return ut.window.height-88}},mt={setSiteTitle:function(t,e){t.site.title=e},clickMenuButton:function(t){t.menuIsOpen=!t.menuIsOpen},openMenu:function(t){t.menuIsOpen=!0},closeMenu:function(t){t.menuIsOpen=!1},setWindow:function(t,e){t.window.width=e.innerWidth,t.window.height=e.innerHeight}},pt={},ft=new lt["a"].Store({state:ut,getters:dt,mutations:mt,actions:pt,modules:{}}),ht=(n("be4f"),n("450d"),n("896a")),vt=n.n(ht),gt=(n("a7cc"),n("df33")),wt=n.n(gt),bt=(n("279e"),n("7d94")),_t=n.n(bt),Ct=(n("acb6"),n("c673")),yt=n.n(Ct),xt=(n("b8e0"),n("a4c4")),Mt=n.n(xt),Ot=(n("f4f9"),n("c2cc")),kt=n.n(Ot),jt=(n("7a0f"),n("0f6c")),$t=n.n(jt),qt=(n("1951"),n("eedf")),It=n.n(qt);i["default"].use(It.a),i["default"].use($t.a),i["default"].use(kt.a),i["default"].use(Mt.a),i["default"].use(yt.a),i["default"].use(_t.a),i["default"].use(wt.a),i["default"].use(vt.a.directive),i["default"].config.productionTip=!1,ct.beforeEach((function(t,e,n){n(),window.scrollTo(0,0)})),i["default"].prototype.cdnBaseUrl="https://cdn.jsdelivr.net/gh/q240980/web@lntfsb.com",i["default"].prototype.isWechat=function(){var t=window.navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)},new i["default"]({router:ct,store:ft,render:function(t){return t($)}}).$mount("#app")},"5ca0":function(t,e,n){"use strict";n("fdeb")},"6d91":function(t,e,n){},"80d9":function(t,e,n){"use strict";n("4d98")},"826a":function(t,e,n){},"85ec":function(t,e,n){},"8a2a":function(t,e,n){},"9cd5":function(t,e,n){"use strict";n("6d91")},a6b9:function(t,e,n){},b588:function(t,e,n){},c2b6:function(t,e,n){"use strict";n("a6b9")},dcbf:function(t,e,n){"use strict";n("b588")},fdeb:function(t,e,n){}});