(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tab_wd/dfjn"],{"05fd":function(t,e,n){"use strict";var o=n("5218"),s=n.n(o);s.a},"1fff":function(t,e,n){"use strict";n.r(e);var o=n("8c69"),s=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=s.a},5218:function(t,e,n){},"66fdc":function(t,e,n){"use strict";(function(t){n("25b1"),n("921b");o(n("66fd"));var e=o(n("9f873"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"8c69":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{option_slkt:0,info:[],totalPages:0,is_more:!0,obj:{},current_page:1}},onShow:function(){var e=t.isLogin();e?(this.user_id=e.user_id,this.user_token=e.user_token,this.user_type=e.user_type):n.showModal({title:"提示",content:"请先登录吧！",showCancel:!0,success:function(t){t.confirm?n.navigateTo({url:"../login/login"}):t.cancel&&n.switchTab({url:"../home_page/home_page"})}})},onReady:function(){var t=this;this.req.request("/myAppDuesWater/myAppDuesWaterList",{page:1,token:this.user_token,duesType:0},"POST",function(e){(0==e.data.length||e.data.length<10)&&(t.is_more=!1),t.info=e.data,t.totalPages=e.totalPages})},onNavigationBarButtonTap:function(){n.navigateTo({url:"jfjl"})},onPullDownRefresh:function(t){var e=this;0==this.option_slkt?this.req.request("/myAppDuesWater/myAppDuesWaterList",{page:1,token:this.user_token,duesType:0},"POST",function(t){(0==t.data.length||t.data.length<10)&&(e.is_more=!1),e.info=t.data,e.totalPages=t.totalPages}):this.req.request("/myAppDues/myAppDues",{token:this.user_token},"POST",function(t){e.obj=t.obj}),setTimeout(function(){n.stopPullDownRefresh()},1e3)},onReachBottom:function(){var t=this;0==this.option_slkt&&(this.current_page<this.totalPages?setTimeout(function(){t.get_more()},500):this.is_more=!0)},methods:{option_click:function(t){if(this.option_slkt!=t){var e=this;this.option_slkt=t,this.is_more=!0,this.current_page=1,0==this.option_slkt?this.req.request("/myAppDuesWater/myAppDuesWaterList",{page:1,token:this.user_token,duesType:0},"POST",function(t){(0==t.data.length||t.data.length<10)&&(e.is_more=!1),e.info=t.data,e.totalPages=t.totalPages}):this.req.request("/myAppDues/myAppDues",{token:this.user_token},"POST",function(t){e.obj=t.obj})}},get_more:function(t){var e=this;this.current_page++,this.req.request("/myAppDuesWater/myAppDuesWaterList",{page:this.current_page,token:this.user_token,duesType:0},"POST",function(t){(0==t.data.length||t.data.length<10)&&(e.is_more=!1),e.info=e.info.concat(t.data)})}}};e.default=o}).call(this,n("c8ba"),n("6e42")["default"])},"9f873":function(t,e,n){"use strict";n.r(e);var o=n("d635"),s=n("1fff");for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);n("05fd");var a=n("2877"),u=Object(a["a"])(s["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},d635:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s})}},[["66fdc","common/runtime","common/vendor"]]]);