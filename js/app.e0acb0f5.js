(function(t){function e(e){for(var i,o,c=e[0],r=e[1],l=e[2],d=0,m=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(m.length)m.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,c=1;c<n.length;c++){var r=n[c];0!==s[r]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0358":function(t,e,n){"use strict";n("0d64")},"0b39":function(t,e,n){"use strict";n("a5f5")},"0d64":function(t,e,n){},"0e7a":function(t,e,n){"use strict";n("c5ef")},1362:function(t,e,n){},"1b3f":function(t,e,n){"use strict";n("8a2a")},"47ff":function(t,e,n){"use strict";n("1362")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("el-backtop",{attrs:{bottom:t.miniMode?88:40,right:t.miniMode?20:40}},[t._v("↑")]),n("Nav"),n("div",{staticClass:"body"},[n("router-view")],1),n("Footer"),n("Tabbar")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",[t._m(0),t._m(1),n("div",[t._v(" Copyright © 2019-"+t._s(t.nowYear)+" ")])])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:"https://lntfsb.com/"}},[t._v("郎溪立能通风设备有限公司")]),t._v(" 版权所有 ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:"https://nr159.com/",target:"_blank"}},[t._v("合肥鸟人网络科技有限公司")]),t._v(" 技术支持 ")])}],r={name:"Footer",props:{msg:String},computed:{nowYear:function(){var t=new Date;return t.getFullYear()}}},l=r,u=(n("c2b6"),n("2877")),d=Object(u["a"])(l,o,c,!1,null,"a383919c",null),m=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"88px"}},[n("div",{staticClass:"nav"},[n("div",{staticClass:"nav-mini-button",class:t.miniMode?"":"hidden",on:{click:t.handleOpen}},[n("p",[n("i",{class:0==t.menuIsOpen?"el-icon-menu":"el-icon-circle-close"})])]),n("div",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/q240980/web/lntfsb.com/image/logo.png"}})])],1),n("div",{class:t.miniMode&&!t.menuIsOpen?"hidden":""},[n("div",{class:t.miniMode?"nav-menu-down":"nav-menu"},[t._l(t.$router.options.routes,(function(e,i){return[e.hide?t._e():n("router-link",{key:i,attrs:{to:{path:e.path}}},[t._v(" "+t._s(e.meta.title)+" ")])]}))],2)])])])},p=[],h={name:"Nav",computed:{miniMode:function(){return this.$store.getters["miniMode"]},menuIsOpen:function(){return this.$store.getters["menuIsOpen"]}},methods:{handleOpen:function(){this.$store.commit("clickMenuButton")}}},v=h,g=(n("0b39"),Object(u["a"])(v,f,p,!1,null,"3efc0e1e",null)),b=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.miniMode?n("div",{staticClass:"tabbar-box",staticStyle:{height:"58px"}},[n("el-row",{staticClass:"tabbar"},[n("a",{ref:"selectFiles",staticClass:"hidden",attrs:{href:"tel:15856353958"}},[t._v("call")]),n("el-col",{staticClass:"item",attrs:{span:6},nativeOn:{click:function(e){return t.$refs.selectFiles.click()}}},[n("span",{staticClass:"iconfont icon-dianhua"}),n("div",{staticClass:"text"},[t._v(" 电话 ")])]),n("el-col",{staticClass:"item",attrs:{span:6},nativeOn:{click:function(e){t.showWechat=!0}}},[n("span",{staticClass:"iconfont icon-wechat"}),n("div",{staticClass:"text"},[t._v(" 微信 ")])]),n("el-col",{staticClass:"item",attrs:{span:6}},[n("span",{staticClass:"iconfont icon-qq"}),n("div",{staticClass:"text"},[t._v(" QQ ")])]),n("el-col",{staticClass:"item",attrs:{span:6},nativeOn:{click:function(e){t.showMap=!0}}},[n("span",{staticClass:"iconfont icon-dingwei"}),n("div",{staticClass:"text"},[t._v(" 导航 ")])])],1),n("el-dialog",{attrs:{title:"微信",visible:t.showWechat,width:"80%",center:""},on:{"update:visible":function(e){t.showWechat=e}}},[n("el-image",{attrs:{src:"https://cdn.jsdelivr.net/gh/q240980/web/lntfsb.com/image/wechat-qrcode.png"}}),n("div",{staticClass:"dialog-wechat-text"},[n("span",[t._v("微信号:")]),n("span",[t._v("15856353958")])]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.showWechat=!1}}},[t._v("关 闭")])],1)],1),n("el-dialog",{attrs:{title:"请选择已安装的导航",visible:t.showMap,width:"80%",center:""},on:{"update:visible":function(e){t.showMap=e}}},[n("el-row",{staticClass:"map-list text-center"},[n("el-col",{attrs:{span:8}},[n("a",{attrs:{href:"baidumap://map/direction?destination=name:郎溪立能通风设备有限公司|latlng:30.99368,119.145534&coord_type=bd09ll&mode=driving&region=xx"}},[n("div",{staticStyle:{width:"80%"}},[n("el-image",{attrs:{fit:"contain",src:"https://cdn.jsdelivr.net/gh/q240980/web/lntfsb.com/image/map/baidu.webp"}}),n("div",{staticClass:"map-name"},[t._v("百度地图")])],1)])]),n("el-col",{attrs:{span:8}},[n("a",{attrs:{href:"qqmap://map/routeplan?type=drive&to=郎溪立能通风设备有限公司&tocoord=30.987606,119.138999&referer=ZQABZ-X23CU-MPKV7-4M2CV-6RI3E-5VB2F"}},[n("div",{staticStyle:{width:"80%"}},[n("el-image",{attrs:{src:"https://cdn.jsdelivr.net/gh/q240980/web/lntfsb.com/image/map/tengxun.webp"}}),n("div",{staticClass:"map-name"},[t._v("腾讯地图")])],1)])]),n("el-col",{attrs:{span:8}},[n("a",{attrs:{href:"amapuri://route/plan/?dname=郎溪立能通风设备有限公司&dlat=30.987604&dlon=119.138998&dev=0"}},[n("div",{staticStyle:{width:"80%"}},[n("el-image",{attrs:{src:"https://cdn.jsdelivr.net/gh/q240980/web/lntfsb.com/image/map/gaode.webp"}}),n("div",{staticClass:"map-name"},[t._v("高德地图")])],1)])])],1),n("div",{staticClass:"dialog-map-text"},[n("span",[t._v("地图搜索:郎溪立能通风设备")])]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.showMap=!1}}},[t._v("关 闭")])],1)],1)],1):t._e()},_=[],C={name:"Tabbar",data:function(){return{showWechat:!1,showMap:!1}},computed:{miniMode:function(){return this.$store.getters["miniMode"]}},methods:{handleCall:function(){window.location.href="tel:15856353958"},handleOpen:function(){this.$store.commit("clickMenuButton")}}},j=C,y=(n("47ff"),Object(u["a"])(j,w,_,!1,null,"716a5f04",null)),x=y.exports,O={name:"Home",watch:{"$route.path":function(){this.$store.commit("closeMenu");var t=this.$store.getters["siteTitle"];document.title=this.$route.meta.title+" - "+t}},computed:{miniMode:function(){return this.$store.getters["miniMode"]}},components:{Nav:b,Footer:m,Tabbar:x},mounted:function(){var t=this;t.$store.commit("setWindow",window),window.onresize=function(){return function(){t.$store.commit("setWindow",window)}()}}},M=O,$=(n("034f"),Object(u["a"])(M,s,a,!1,null,null,null)),q=$.exports,k=n("8c4f"),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Welcome"),n("Service"),n("Item"),n("Contact"),n("About")],1)},S=[],E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"welcome",style:{height:t.welcomeHeight+"px"}},[t._m(0)])},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"welcome-masker"},[n("div",{staticClass:"welcome-area"},[n("div",{staticClass:"welcome-area-logo"},[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/q240980/web/lntfsb.com/image/logo.png"}})]),n("div",{staticClass:"welcome-area-description"},[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/q240980/web/lntfsb.com/image/logo-description.png"}})])])])}],T={name:"Welcome",data:function(){return{welcomeHeight:2e3}},mounted:function(){this.$nextTick((function(){this.welcomeHeight=this.$store.getters["welcomeHeight"]}))}},P=T,H=(n("0358"),Object(u["a"])(P,E,W,!1,null,"e0da999a",null)),F=H.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"service"},[n("el-col",{staticClass:"service-title"},[n("h2",[t._v("立能服务")]),n("p",[t._v("立能以优良的产品、合理的价格、及时的交货时间为经营原则，本着“诚信为本、科技为本、人文为本”的企业精神，忠诚服务好国内外的每一位用户！欢迎广大客户朋友垂询与合作！ ")])]),n("el-col",{staticClass:"service-list",attrs:{span:20,offset:2}},t._l(t.services,(function(e,i){return n("el-col",{key:i,attrs:{span:t.miniMode?24:8}},[n("el-card",{staticClass:"service-list-item card-size",attrs:{shadow:"hover"},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"card-header"},[n("span",[t._v(t._s(e.title))])])]},proxy:!0}],null,!0)},[n("el-image",{attrs:{src:e.img,lazy:""}})],1)],1)})),1)],1)},z=[],B={name:"Service",data:function(){return{services:[{title:"设计",img:"https://cdn.jsdelivr.net/gh/q240980/web/lntfsb.com/image/service/1.jpg"},{title:"安装",img:"https://cdn.jsdelivr.net/gh/q240980/web/lntfsb.com/image/service/2.jpg"},{title:"维护",img:"https://cdn.jsdelivr.net/gh/q240980/web/lntfsb.com/image/service/3.jpg"}]}},computed:{miniMode:function(){return this.$store.getters["miniMode"]}}},Q=B,N=(n("0e7a"),Object(u["a"])(Q,A,z,!1,null,"4cbe988c",null)),V=N.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"item"},[n("el-col",{staticClass:"item-title"},[n("h2",[t._v("产品展示")])]),n("el-col",{staticClass:"item-list",attrs:{span:20,offset:2}},t._l(t.items,(function(e,i){return n("el-col",{key:i,staticClass:"text-center",attrs:{span:t.miniMode?24:6}},[n("el-card",{staticClass:"item-list-item card-size",attrs:{shadow:"hover"},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"card-header"},[n("span",[t._v(t._s(e.title))])])]},proxy:!0}],null,!0)},[n("el-image",{attrs:{src:e.img,lazy:""}})],1)],1)})),1)],1)},J=[],Z={name:"Item",data:function(){return{items:[{title:"镀锌管道",img:"https://cdn.jsdelivr.net/gh/q240980/web/lntfsb.com/image/item/1.jpg"},{title:"玻璃钢风机",img:"https://cdn.jsdelivr.net/gh/q240980/web/lntfsb.com/image/item/2.jpg"},{title:"玻镁风管",img:"https://cdn.jsdelivr.net/gh/q240980/web/lntfsb.com/image/item/3.jpg"},{title:"风幕机",img:"https://cdn.jsdelivr.net/gh/q240980/web/lntfsb.com/image/item/4.jpg"},{title:"自然通风器",img:"https://cdn.jsdelivr.net/gh/q240980/web/lntfsb.com/image/item/5.jpg"},{title:"更多...",img:"https://cdn.jsdelivr.net/gh/q240980/web/lntfsb.com/image/item/5.jpg"}]}},computed:{miniMode:function(){return this.$store.getters["miniMode"]}}},D=Z,K=(n("8c84"),Object(u["a"])(D,Y,J,!1,null,"61df1e25",null)),R=K.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",[n("el-col",{attrs:{md:6,sm:12,xs:24}},[n("div",{staticClass:"grid-content bg-purple"},[n("span",{staticClass:"iconfont icon-dingwei"}),n("h2",[t._v("地址")]),n("p",[n("a",{attrs:{href:"baidumap://map/marker?location=30.99368,119.145534&title=郎溪立能通风设备有限公司&content=郎溪立能通风设备有限公司&src=ios.baidu.openAPIdemo"}},[t._v("安徽省宣城市郎溪县十字镇红旗村8号")])])])]),n("el-col",{attrs:{md:6,sm:12,xs:24}},[n("div",{staticClass:"grid-content bg-purple"},[n("span",{staticClass:"iconfont icon-dianhua"}),n("h2",[t._v("电话")]),n("p",[n("a",{attrs:{href:"tel:15856353958"}},[t._v("15856353958")])])])]),n("el-col",{attrs:{md:6,sm:12,xs:24}},[n("div",{staticClass:"grid-content bg-purple"},[n("span",{staticClass:"iconfont icon-wechat"}),n("h2",[t._v("微信")]),n("p",[t._v("15856353958")])])]),n("el-col",{attrs:{md:6,sm:12,xs:24}},[n("div",{staticClass:"grid-content bg-purple"},[n("span",{staticClass:"iconfont icon-qq"}),n("h2",[t._v("QQ")]),n("p",[n("a",{attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin=635868694&site=qq&menu=yes",target:"_blank"}},[t._v("1838886757")])])])])],1)],1)},X=[],G={name:"Contact"},L=G,tt=(n("1b3f"),Object(u["a"])(L,U,X,!1,null,"5256ee02",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" views.about2 ")])},it=[],st={name:"About"},at=st,ot=Object(u["a"])(at,nt,it,!1,null,null,null),ct=ot.exports,rt={name:"Index",components:{Welcome:F,Service:V,Item:R,Contact:et,About:ct}},lt=rt,ut=Object(u["a"])(lt,I,S,!1,null,null,null),dt=ut.exports;i["default"].use(k["a"]);var mt=[{path:"/",name:"Index",component:dt,meta:{title:"首页"}},{path:"/service",name:"Service",component:V,meta:{title:"立能服务"}},{path:"/item",name:"Item",component:R,meta:{title:"立能产品"}},{path:"/contact",name:"Contact",component:et,meta:{title:"联系立能"}},{path:"/about",name:"About",component:ct,meta:{title:"关于立能"}},{path:"*",hide:!0,redirect:"/"}],ft=new k["a"]({mode:"history",base:"/",routes:mt}),pt=ft,ht=n("2f62");i["default"].use(ht["a"]);var vt={site:{title:"郎溪立能通风设备有限公司"},menuIsOpen:!1,window:{width:0,height:0}},gt={siteTitle:function(){return vt.site.title},miniMode:function(){return vt.window.width<768},menuIsOpen:function(){return vt.menuIsOpen},windowWith:function(){return vt.window.width},windowHeight:function(){return vt.window.height},welcomeHeight:function(){return vt.window.height-88}},bt={setSiteTitle:function(t,e){t.site.title=e},clickMenuButton:function(t){t.menuIsOpen=!t.menuIsOpen},openMenu:function(t){t.menuIsOpen=!0},closeMenu:function(t){t.menuIsOpen=!1},setWindow:function(t,e){t.window.width=e.innerWidth,t.window.height=e.innerHeight}},wt={},_t=new ht["a"].Store({state:vt,getters:gt,mutations:bt,actions:wt,modules:{}}),Ct=(n("a7cc"),n("450d"),n("df33")),jt=n.n(Ct),yt=(n("279e"),n("7d94")),xt=n.n(yt),Ot=(n("acb6"),n("c673")),Mt=n.n(Ot),$t=(n("b8e0"),n("a4c4")),qt=n.n($t),kt=(n("f4f9"),n("c2cc")),It=n.n(kt),St=(n("7a0f"),n("0f6c")),Et=n.n(St),Wt=(n("1951"),n("eedf")),Tt=n.n(Wt);i["default"].use(Tt.a),i["default"].use(Et.a),i["default"].use(It.a),i["default"].use(qt.a),i["default"].use(Mt.a),i["default"].use(xt.a),i["default"].use(jt.a),i["default"].config.productionTip=!1,pt.beforeEach((function(t,e,n){n(),window.scrollTo(0,0)})),new i["default"]({router:pt,store:_t,render:function(t){return t(q)}}).$mount("#app")},"85ec":function(t,e,n){},"8a2a":function(t,e,n){},"8c84":function(t,e,n){"use strict";n("d608")},a5f5:function(t,e,n){},a6b9:function(t,e,n){},c2b6:function(t,e,n){"use strict";n("a6b9")},c5ef:function(t,e,n){},d608:function(t,e,n){}});
//# sourceMappingURL=app.e0acb0f5.js.map