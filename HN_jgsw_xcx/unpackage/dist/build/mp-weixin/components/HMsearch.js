(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/HMsearch"],{2661:function(t,o,e){"use strict";e.r(o);var i=e("93c1"),n=e("4f09");for(var s in n)"default"!==s&&function(t){e.d(o,t,function(){return n[t]})}(s);e("9565");var r=e("2877"),d=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,null,null);o["default"]=d.exports},"4f09":function(t,o,e){"use strict";e.r(o);var i=e("6861"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(o,t,function(){return i[t]})}(s);o["default"]=n.a},6861:function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=function(){return e.e("components/uni-icons/uni-icons").then(e.bind(null,"539e"))},n={data:function(){return{defaultKeyword:"",keyword:"",oldKeywordList:[],hotKeywordList:[],keywordList:[],forbid:"",isShowKeywordList:!1,isShow:!1}},onLoad:function(){this.init()},components:{uniIcons:i},methods:{init:function(){this.loadDefaultKeyword(),this.loadOldKeyword(),this.loadHotKeyword()},blur:function(){t.hideKeyboard()},loadDefaultKeyword:function(){this.defaultKeyword="默认关键字"},loadOldKeyword:function(){var o=this;t.getStorage({key:"OldKeys",success:function(t){var e=JSON.parse(t.data);o.oldKeywordList=e}})},loadHotKeyword:function(){this.hotKeywordList=["键盘","鼠标","显示器","电脑主机","蓝牙音箱","笔记本电脑","鼠标垫","USB","USB3.0"]},inputChange:function(o){var e=this;this.isShow=!0;var i=o.detail?o.detail.value:o;if(!i)return this.keywordList=[],void(this.isShowKeywordList=!1);t.request({url:this.img_url+"/system/phone/redian",success:function(t){console.log(t),e.hotKeywordList=t.data}})},setkeyword:function(t){this.keyword=t.keyword},oldDelete:function(){var o=this;t.showModal({content:"确定清除历史搜索记录？",success:function(e){e.confirm?(console.log("用户点击确定"),o.oldKeywordList=[],t.removeStorage({key:"OldKeys"})):e.cancel&&console.log("用户点击取消")}})},hotToggle:function(){this.forbid=this.forbid?"":"_forbid"},closeSearch:function(){this.isShow=!1,this.keyword=""},doSearch:function(o){o=o||(this.keyword?this.keyword:this.defaultKeyword),this.keyword=o,this.saveKeyword(o),this.isShow=!0;var e="/pages/searchResult/searchResult?id="+this.keyword;t.navigateTo({url:e})},showHot:function(){this.isShow=!0},saveKeyword:function(o){var e=this;t.getStorage({key:"OldKeys",success:function(i){console.log(i.data);var n=JSON.parse(i.data),s=n.indexOf(o);-1==s?n.unshift(o):(n.splice(s,1),n.unshift(o)),n.length>10&&n.pop(),t.setStorage({key:"OldKeys",data:JSON.stringify(n)}),e.oldKeywordList=n},fail:function(i){var n=[o];t.setStorage({key:"OldKeys",data:JSON.stringify(n)}),e.oldKeywordList=n}})}}};o.default=n}).call(this,e("543d")["default"])},"93c1":function(t,o,e){"use strict";var i=function(){var t=this,o=t.$createElement;t._self._c},n=[];e.d(o,"a",function(){return i}),e.d(o,"b",function(){return n})},9565:function(t,o,e){"use strict";var i=e("b26a"),n=e.n(i);n.a},b26a:function(t,o,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/HMsearch-create-component',
    {
        'components/HMsearch-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2661"))
        })
    },
    [['components/HMsearch-create-component']]
]);                
