(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tab_wd/tzgg"],{"1cc5":function(e,t,n){"use strict";(function(e){n("25b1"),n("921b");o(n("66fd"));var t=o(n("552b"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"27e2":function(e,t,n){"use strict";n.r(t);var o=n("4c12"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=i.a},"4c12":function(e,t,n){"use strict";(function(e,n,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{info:[],current_page:1,is_more:!0,totalPages:"",user_type:"",messageType:"",title:""}},onLoad:function(t){console.log(e(t," at pages\\tab_wd\\tzgg.vue:42")),this.messageType=t.id,this.title=t.title,n.setNavigationBarTitle({title:t.title})},onShow:function(){var e=o.isLogin();e?(this.user_id=e.user_id,this.user_token=e.user_token,this.user_type=e.user_type,this.get_info()):n.showModal({title:"提示",content:"请先登录吧！",showCancel:!0,success:function(e){e.confirm?n.navigateTo({url:"../login/login"}):e.cancel&&n.switchTab({url:"../home_page/home_page"})}})},onReachBottom:function(){if(this.current_page<this.totalPages){var e=this;setTimeout(function(){e.get_more()},500)}else this.is_more=!1},methods:{get_info:function(){var e=this;e.req.request("/notice/lists",{token:e.user_token,page:1},"POST",function(t){(0==t.res.length||t.res.length<15)&&(e.is_more=!1),e.info=t.res,e.totalPages=t.totalPages})},get_more:function(e){var t=this;t.current_page++,t.req.request("/notice/lists",{page:t.current_page,token:t.user_token},"POST",function(e){e.res.length||(t.is_more=!1),t.info=t.info.concat(e.res)})}}};t.default=i}).call(this,n("0de9")["default"],n("6e42")["default"],n("c8ba"))},"552b":function(e,t,n){"use strict";n.r(t);var o=n("bb6a"),i=n("27e2");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("8966");var s=n("2877"),r=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports},8966:function(e,t,n){"use strict";var o=n("9ee5"),i=n.n(o);i.a},"9ee5":function(e,t,n){},bb6a:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})}},[["1cc5","common/runtime","common/vendor"]]]);