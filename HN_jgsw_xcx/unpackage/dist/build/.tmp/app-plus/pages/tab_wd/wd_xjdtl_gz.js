(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tab_wd/wd_xjdtl_gz"],{"0b90":function(t,e,n){"use strict";(function(t,n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{id:"",info:[],current_page:1,totalPages:"",is_more:!0}},onLoad:function(t){this.id=t.id},onShow:function(){var e=t.isLogin();this.user_token=e.user_token,this.get_info()},onPullDownRefresh:function(){this.get_info(),setTimeout(function(){n.stopPullDownRefresh()},1e3)},onReachBottom:function(){var t=this;this.current_page<this.totalPages?setTimeout(function(){t.get_more()},500):this.is_more=!1},methods:{get_info:function(){var t=this;t.req.request("/starIntegraltDetail",{token:t.user_token,integralId:t.id,page:1},"POST",function(e){e.data.length<10&&(t.is_more=!1),t.info=e.data,t.totalPages=e.totalPages})},get_more:function(t){this.current_page++;var e=this;e.req.request("/starIntegraltDetail",{token:e.user_token,integralId:e.id,page:1},"POST",function(t){t.data.length<10&&(e.is_more=!1),e.info=e.info.concat(t.data),e.totalPages=t.totalPages},function(t){console.log(o(t," at pages\\tab_wd\\wd_xjdtl_gz.vue:74"))})}}};e.default=a}).call(this,n("c8ba"),n("6e42")["default"],n("0de9")["default"])},6952:function(t,e,n){"use strict";n.r(e);var o=n("b419"),a=n("d104");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);var u=n("2877"),r=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports},"822d":function(t,e,n){"use strict";(function(t){n("25b1"),n("921b");o(n("66fd"));var e=o(n("6952"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},b419:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},d104:function(t,e,n){"use strict";n.r(e);var o=n("0b90"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a}},[["822d","common/runtime","common/vendor"]]]);