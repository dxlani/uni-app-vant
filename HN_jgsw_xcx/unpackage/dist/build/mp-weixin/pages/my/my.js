(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"16b2":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})},"2f77":function(n,t,e){"use strict";e.r(t);var u=e("16b2"),o=e("9393");for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);e("9940");var i=e("2877"),s=Object(i["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=s.exports},"8ac7":function(n,t,e){},9393:function(n,t,e){"use strict";e.r(t);var u=e("a7b2"),o=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=o.a},9940:function(n,t,e){"use strict";var u=e("8ac7"),o=e.n(u);o.a},a7b2:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n.getStorageSync("openid"),u={components:{},data:function(){return{list:[],user:[],type:"",zixun_num:0,jianyi_num:0,tousu_num:0}},methods:{gotoDetail:function(t){var e="/pages/question/question?id="+t;n.navigateTo({url:e})}},onLoad:function(){var t=this;this.req.request("/list/"+e,{spare4:"-1"},"POST",function(e){e.success?(console.log(e),t.list=e.message,t.list.map(function(n){t.type=n.wentiType,"1"==t.type?t.zixun_num++:"2"==t.type?t.jianyi_num++:"3"==t.type&&t.tousu_num++}),t.user=e.nameAndAvator):n.showModal({title:"提示",content:"请先登录吧！",showCancel:!1,success:function(){n.navigateTo({url:""})}})},function(t){n.showToast({title:t.errMsg,mask:!0,duration:1200,icon:"none"})})}};t.default=u}).call(this,e("543d")["default"])}},[["7744","common/runtime","common/vendor"]]]);