(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/message/message"],{4837:function(t,e,a){"use strict";var i=a("6b09"),n=a.n(i);n.a},"578a":function(t,e,a){"use strict";a.r(e);var i=a("e586"),n=a("f3b0");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("4837");var l=a("2877"),c=Object(l["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},"6b09":function(t,e,a){},b52a:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("0d79"),a("08ad");var i={data:function(){return{iconList:[{icon:"cardboardfill",color:"red",badge:120,name:"VR"},{icon:"recordfill",color:"orange",badge:1,name:"录像"},{icon:"picfill",color:"yellow",badge:0,name:"图像"},{icon:"noticefill",color:"olive",badge:22,name:"通知"},{icon:"upstagefill",color:"cyan",badge:0,name:"排行榜"},{icon:"clothesfill",color:"blue",badge:0,name:"皮肤"},{icon:"discoverfill",color:"purple",badge:0,name:"发现"},{icon:"questionfill",color:"mauve",badge:0,name:"帮助"},{icon:"commandfill",color:"purple",badge:0,name:"问答"},{icon:"brandfill",color:"mauve",badge:0,name:"版权"}],modalName:null,gridCol:3,gridBorder:!1,menuBorder:!1,menuArrow:!1,menuCard:!1,skin:!1,listTouchStart:0,listTouchDirection:null}},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},Gridchange:function(t){this.gridCol=t.detail.value},Gridswitch:function(t){this.gridBorder=t.detail.value},MenuBorder:function(t){this.menuBorder=t.detail.value},MenuArrow:function(t){this.menuArrow=t.detail.value},MenuCard:function(t){this.menuCard=t.detail.value},SwitchSex:function(t){this.skin=t.detail.value},ListTouchStart:function(t){this.listTouchStart=t.touches[0].pageX},ListTouchMove:function(t){this.listTouchDirection=t.touches[0].pageX-this.listTouchStart>-150?"right":"left"},ListTouchEnd:function(t){"left"==this.listTouchDirection?this.modalName=t.currentTarget.dataset.target:this.modalName=null,this.listTouchDirection=null},InterChat:function(e){t.navigateTo({url:"../onechat/onechat"})}},onNavigationBarButtonTap:function(e){t.navigateTo({url:"../plugin/indexes"})}};e.default=i}).call(this,a("649d")["default"])},e586:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("scroll-view",{staticClass:"page",class:null!=t.modalName?"show":"",attrs:{"scroll-y":null==t.modalName}},[a("view",{staticClass:"cu-list menu-avatar"},t._l(4,function(e,i){return a("view",{key:i,staticClass:"cu-item",class:t.modalName=="move-box-"+i?"move-cur":"",attrs:{"data-target":"move-box-"+i,eventid:"568bf48f-0-"+i},on:{touchstart:t.ListTouchStart,touchmove:t.ListTouchMove,touchend:t.ListTouchEnd,click:t.InterChat}},[a("view",{staticClass:"cu-avatar round lg",style:[{backgroundImage:"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100"+(i+2)+".jpg)"}]},[a("view",{staticClass:"cu-tag badge"},[t._v("99+")])]),a("view",{staticClass:"content"},[a("view",{staticClass:"text-pink"},[a("text",{staticClass:"text-cut"},[t._v("莫甘娜")])]),a("view",{staticClass:"text-gray text-sm flex"},[a("text",{staticClass:"text-cut"},[t._v("凯尔，你被自己的光芒变的盲目！")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cu-tag round bg-grey sm"},[t._v(t._s(i+1))])]),a("view",{staticClass:"move"},[a("view",{staticClass:"bg-grey"},[t._v("置顶")]),a("view",{staticClass:"bg-red"},[t._v("删除")])])])}))])],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},f3b0:function(t,e,a){"use strict";a.r(e);var i=a("b52a"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},f6d3:function(t,e,a){"use strict";a("5035");var i=o(a("b0ce")),n=o(a("578a"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(n.default))}},[["f6d3","common/runtime","common/vendor"]]]);