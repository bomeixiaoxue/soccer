(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/usercenter/usercenter"],{"4af5":function(t,a,e){"use strict";var s=e("806f"),i=e.n(s);i.a},"66a5":function(t,a,e){"use strict";e("5035");var s=r(e("b0ce")),i=r(e("cf76"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},"806f":function(t,a,e){},"942a":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"center"},[e("view",{staticClass:"logo",staticStyle:{"background-color":"rgb(0, 122, 255)",color:"rgb(255, 255, 255)"},attrs:{"hover-class":t.login?"":"logo-hover",eventid:"39fe27ff-1"},on:{click:t.goLogin}},[e("image",{staticClass:"logo-img",attrs:{src:t.login?t.uerInfo.headPortrait:t.avatarUrl}}),e("view",{staticClass:"logo-title",attrs:{eventid:"39fe27ff-0"},on:{click:function(a){t.goLogin()}}},[e("text",{staticClass:"uer-name"},[t._v(t._s(t.login?t.uerInfo.nickName:"Hi，您未登录"))]),t.login?t._e():e("text",{staticClass:"go-login navigat-arrow"},[t._v("")])])]),e("view",{staticClass:"center-list"},[e("navigator",{attrs:{url:"/pages/usercenter/account/account","hover-class":"navigator-hover"}},[e("view",{staticClass:"center-list-item border-bottom"},[e("text",{staticClass:"list-icon"},[t._v("")]),e("text",{staticClass:"list-text"},[t._v("账号管理")]),e("text",{staticClass:"navigat-arrow"},[t._v("")])])]),e("navigator",{attrs:{url:"/pages/usercenter/userinfo/userinfo","hover-class":"navigator-hover"}},[e("view",{staticClass:"center-list-item"},[e("text",{staticClass:"list-icon"},[t._v("")]),e("text",{staticClass:"list-text"},[t._v("个人资料")]),e("text",{staticClass:"navigat-arrow"},[t._v("")])])])],1),e("view",{staticClass:"center-list"},[e("navigator",{attrs:{url:"/pages/usercenter/help/help","hover-class":"navigator-hover"}},[e("view",{staticClass:"center-list-item border-bottom"},[e("text",{staticClass:"list-icon"},[t._v("")]),e("text",{staticClass:"list-text"},[t._v("帮助与反馈")]),e("text",{staticClass:"navigat-arrow"},[t._v("")])])]),e("navigator",{attrs:{url:"/pages/usercenter/service/service","hover-class":"navigator-hover"}},[e("view",{staticClass:"center-list-item"},[e("text",{staticClass:"list-icon"},[t._v("")]),e("text",{staticClass:"list-text"},[t._v("服务条款及隐私")]),e("text",{staticClass:"navigat-arrow"},[t._v("")])])])],1),e("view",{staticClass:"center-list"},[e("navigator",{attrs:{url:"/pages/usercenter/about/about","hover-class":"navigator-hover"}},[e("view",{staticClass:"center-list-item"},[e("text",{staticClass:"list-icon"},[t._v("")]),e("text",{staticClass:"list-text"},[t._v("关于应用")]),e("text",{staticClass:"navigat-arrow"},[t._v("")])])])],1)])},i=[];e.d(a,"a",function(){return s}),e.d(a,"b",function(){return i})},af10:function(t,a,e){"use strict";e.r(a);var s=e("d463"),i=e.n(s);for(var r in s)"default"!==r&&function(t){e.d(a,t,function(){return s[t]})}(r);a["default"]=i.a},cf76:function(t,a,e){"use strict";e.r(a);var s=e("942a"),i=e("af10");for(var r in i)"default"!==r&&function(t){e.d(a,t,function(){return i[t]})}(r);e("4af5");var n=e("2877"),o=Object(n["a"])(i["default"],s["a"],s["b"],!1,null,null,null);a["default"]=o.exports},d463:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{login:!1,avatarUrl:"/static/logo.png",uerInfo:{}}},onLoad:function(){var a=!1;if(t.getStorage({key:"loginbz",success:function(t){console.log("登录标志："+JSON.stringify(t.data)),a=t.data}}),this.login=a,a){var e={};t.getStorage({key:"user",success:function(t){console.log("用户信息："+JSON.stringify(t.data)),e=t.data}}),console.log("已经登录成功："+JSON.stringify(e)),this.uerInfo=e}else console.log("用户未登录")},methods:{goLogin:function(){this.login||t.navigateTo({url:"/pages/user/login/login"})}}};a.default=e}).call(this,e("649d")["default"])}},[["66a5","common/runtime","common/vendor"]]]);