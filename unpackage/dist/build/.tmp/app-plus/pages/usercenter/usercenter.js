(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/usercenter/usercenter"],{"4af5":function(t,e,s){"use strict";var a=s("806f"),i=s.n(a);i.a},"66a5":function(t,e,s){"use strict";s("5035");var a=n(s("b0ce")),i=n(s("cf76"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},"806f":function(t,e,s){},af10:function(t,e,s){"use strict";s.r(e);var a=s("d463"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);e["default"]=i.a},b2fc:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"center"},[s("view",{staticClass:"logo",attrs:{"hover-class":t.login?"":"logo-hover",eventid:"39fe27ff-1"},on:{click:t.goLogin}},[s("image",{staticClass:"logo-img",attrs:{src:t.login?t.uerInfo.avatarUrl:t.avatarUrl}}),s("view",{staticClass:"logo-title",attrs:{eventid:"39fe27ff-0"},on:{click:function(e){t.goLogin()}}},[s("text",{staticClass:"uer-name"},[t._v("Hi，"+t._s(t.login?t.uerInfo.name:"您未登录"))]),t.login?t._e():s("text",{staticClass:"go-login navigat-arrow"},[t._v("")])])]),t._m(0),t._m(1),t._m(2)])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"center-list"},[s("view",{staticClass:"center-list-item border-bottom"},[s("text",{staticClass:"list-icon"},[t._v("")]),s("text",{staticClass:"list-text"},[t._v("账号管理")]),s("text",{staticClass:"navigat-arrow"},[t._v("")])]),s("view",{staticClass:"center-list-item"},[s("text",{staticClass:"list-icon"},[t._v("")]),s("text",{staticClass:"list-text"},[t._v("新消息通知")]),s("text",{staticClass:"navigat-arrow"},[t._v("")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"center-list"},[s("view",{staticClass:"center-list-item border-bottom"},[s("text",{staticClass:"list-icon"},[t._v("")]),s("text",{staticClass:"list-text"},[t._v("帮助与反馈")]),s("text",{staticClass:"navigat-arrow"},[t._v("")])]),s("view",{staticClass:"center-list-item"},[s("text",{staticClass:"list-icon"},[t._v("")]),s("text",{staticClass:"list-text"},[t._v("服务条款及隐私")]),s("text",{staticClass:"navigat-arrow"},[t._v("")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"center-list"},[s("view",{staticClass:"center-list-item"},[s("text",{staticClass:"list-icon"},[t._v("")]),s("text",{staticClass:"list-text"},[t._v("关于应用")]),s("text",{staticClass:"navigat-arrow"},[t._v("")])])])}];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return i})},cf76:function(t,e,s){"use strict";s.r(e);var a=s("b2fc"),i=s("af10");for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);s("4af5");var l=s("2877"),c=Object(l["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},d463:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{login:!1,avatarUrl:"/static/logo.png",uerInfo:{}}},methods:{goLogin:function(){this.login||t.navigateTo({url:"/pages/user/login/login"})}}};e.default=s}).call(this,s("649d")["default"])}},[["66a5","common/runtime","common/vendor"]]]);