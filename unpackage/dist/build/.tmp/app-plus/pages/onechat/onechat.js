(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/onechat/onechat"],{"10e3":function(t,a,e){"use strict";var n=e("deda"),i=e.n(n);i.a},"349d":function(t,a,e){"use strict";e("5035");var n=s(e("b0ce")),i=s(e("6b08"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},"6b08":function(t,a,e){"use strict";e.r(a);var n=e("ebb9"),i=e("cc51");for(var s in i)"default"!==s&&function(t){e.d(a,t,function(){return i[t]})}(s);e("10e3");var c=e("2877"),o=Object(c["a"])(i["default"],n["a"],n["b"],!1,null,null,null);a["default"]=o.exports},bc6d:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("0d79"),e("08ad");var n={data:function(){return{InputBottom:0,inputData:"",mesData:[],chatData:[{p:1,content:"在吗？"},{p:0,content:"在，怎么了？"},{p:1,content:"吃饭没"},{p:0,content:"没吃"}]}},onLoad:function(){t.setNavigationBarTitle({title:"娜娜"})},methods:{InputFocus:function(t){this.InputBottom=t.detail.height},InputBlur:function(t){this.InputBottom=0},sendMessage:function(t){if(""!=this.inputData){var a={p:1};a["content"]=this.inputData,this.chatData[this.chatData.length]={p:1,content:this.inputData},this.inputData="",console.log("发送消息:"+this.inputData)}else console.log("不能发送空消息")}}};a.default=n}).call(this,e("649d")["default"])},cc51:function(t,a,e){"use strict";e.r(a);var n=e("bc6d"),i=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(a,t,function(){return n[t]})}(s);a["default"]=i.a},deda:function(t,a,e){},ebb9:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",[e("view",{staticClass:"cu-chat",staticStyle:{"margin-bottom":"170rpx"}},t._l(t.chatData,function(a,n){return e("view",{style:[{bottom:t.InputBottom+100+"px"}]},[1==a.p?e("view",{},[e("view",{staticClass:"cu-item self"},[e("view",{staticClass:"main"},[t._m(0,!0),e("view",{staticClass:"content shadow"},[t._v(t._s(a.content))])]),e("view",{staticClass:"cu-avatar radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg)"}}),e("view",{staticClass:"date"},[t._v("13:23")])])]):t._e(),0==a.p?e("view",{},[e("view",{staticClass:"cu-item"},[e("view",{staticClass:"cu-avatar radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg)"}}),e("view",{staticClass:"main"},[e("view",{staticClass:"content shadow"},[t._v(t._s(a.content))])]),e("view",{staticClass:"date"},[t._v("13:23")])])]):t._e()])})),e("view",{staticClass:"cu-bar foot input",style:[{bottom:t.InputBottom+"px"}]},[t._m(1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputData,expression:"inputData"}],staticClass:"solid-bottom",attrs:{"adjust-position":!1,focus:!1,maxlength:"300","cursor-spacing":"10",eventid:"149eea06-0"},domProps:{value:t.inputData},on:{focus:t.InputFocus,blur:t.InputBlur,input:function(a){a.target.composing||(t.inputData=a.target.value)}}}),t._m(2),e("button",{staticClass:"cu-btn bg-green shadow",attrs:{eventid:"149eea06-1"},on:{click:t.sendMessage}},[t._v("发送")])],1)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"action"},[e("text",{staticClass:"icon-locationfill text-orange text-xxl"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"action"},[e("text",{staticClass:"icon-sound text-grey"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"action"},[e("text",{staticClass:"icon-emojifill text-grey"})])}];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return i})}},[["349d","common/runtime","common/vendor"]]]);