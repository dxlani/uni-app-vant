(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tab_wd/dygl"],{"66be":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"8e74":function(t,e,n){"use strict";var o=n("d808"),i=n.n(o);i.a},"8fe3":function(t,e,n){"use strict";n.r(e);var o=n("66be"),i=n("ed05");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("8e74");var r=n("2877"),u=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},"97b9":function(t,e,n){"use strict";(function(t){n("25b1"),n("921b");o(n("66fd"));var e=o(n("8fe3"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},a51b:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{option_num:-1,info:[],img_url:"".concat(this.img_url),current_page:1,is_more:!0,totalPages:"",top_info:[]}},onLoad:function(){var e=t.isLogin();e?(this.user_token=e.user_token,this.user_id=e.user_id,this.user_type=e.user_type):n.showModal({title:"提示",content:"请先登录吧！",showCancel:!0,success:function(t){t.confirm?n.navigateTo({url:"../login/login"}):t.cancel&&n.switchTab({url:"../home_page/home_page"})}})},onShow:function(){this.get_info()},onPullDownRefresh:function(t){this.get_info(),setTimeout(function(){n.stopPullDownRefresh()},1e3)},onNavigationBarButtonTap:function(){n.navigateTo({url:"dygl_ss?is_flow=".concat(this.option_slkt)})},onReachBottom:function(){if(this.current_page<this.totalPages){var t=this;setTimeout(function(){t.get_more()},500)}else this.is_more=!1},methods:{get_info:function(){var t=this;this.req.request("/comm/dataList",{strType:"star_type"},"POST",function(e){t.top_info=e.data}),this.req.request("/org/memberList",{token:this.user_token,type:this.user_type,page:1,user_type:this.option_num},"POST",function(e){e.res.length<10&&(t.is_more=!1),t.info=e.res,t.totalPages=e.totalPages})},option_click:function(t){var e=this;this.option_num!=t&&(this.option_num=t,this.current_page=1,this.is_more=!0,this.req.request("/org/memberList",{token:this.user_token,type:this.user_type,page:1,user_type:this.option_num},"POST",function(t){t.res.length<10&&(e.is_more=!1),e.info=t.res,e.totalPages=t.totalPages}))},get_more:function(t){var e=this;this.current_page++,this.req.request("/org/memberList",{token:this.user_token,type:this.user_type,page:this.current_page,user_type:this.option_num},"POST",function(t){e.info=e.info.concat(t.res)})}}};e.default=o}).call(this,n("c8ba"),n("6e42")["default"])},d808:function(t,e,n){},ed05:function(t,e,n){"use strict";n.r(e);var o=n("a51b"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=i.a}},[["97b9","common/runtime","common/vendor"]]]);