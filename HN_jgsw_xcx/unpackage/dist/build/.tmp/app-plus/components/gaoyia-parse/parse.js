(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/gaoyia-parse/parse"],{"13fe":function(t,e,n){"use strict";n.r(e);var i=n("860a"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},2977:function(t,e,n){"use strict";n.r(e);var i=n("b6f4"),a=n("13fe");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var s=n("2877"),o=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},"860a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("d54d"));function a(t){return t&&t.__esModule?t:{default:t}}var r=function(){return n.e("components/gaoyia-parse/components/wxParseTemplate0").then(n.bind(null,"0f3c"))},s={name:"wxParse",props:{userSelect:{type:String,default:"text"},imgOptions:{type:Object,default:function(){return{loop:!1,indicator:"number",longPressActions:!1}}},loading:{type:Boolean,default:!1},className:{type:String,default:""},content:{type:String,default:""},noData:{type:String,default:'<div style="color: red;"></div>'},startHandler:{type:Function,default:function(){return function(t){t.attr.class=null,t.attr.style=null}}},endHandler:{type:Function,default:null},charsHandler:{type:Function,default:null},imageProp:{type:Object,default:function(){return{mode:"aspectFit",padding:0,lazyLoad:!1,domain:""}}}},components:{wxParseTemplate:r},data:function(){return{nodes:{},imageUrls:[],wxParseWidth:{value:0}}},computed:{},mounted:function(){var t=this;this.getWidth().then(function(e){t.wxParseWidth.value=e}),this.setHtml()},methods:{setHtml:function(){var t=this.content,e=this.noData,n=this.imageProp,a=this.startHandler,r=this.endHandler,s=this.charsHandler,o=t||e,l={start:a,end:r,chars:s},u=(0,i.default)(o,l,n,this);this.imageUrls=u.imageUrls,this.nodes=u.nodes},getWidth:function(){var e=this;return new Promise(function(n,i){t.createSelectorQuery().in(e).select(".wxParse").fields({size:!0,scrollOffset:!0},function(t){n(t.width)}).exec()})},navigate:function(t,e){this.$emit("navigate",t,e)},preview:function(e,n){this.imageUrls.length&&(t.previewImage({current:e,urls:this.imageUrls,loop:this.imgOptions.loop,indicator:this.imgOptions.indicator,longPressActions:this.imgOptions.longPressActions}),this.$emit("preview",e,n))},removeImageUrl:function(t){var e=this.imageUrls;e.splice(e.indexOf(t),1)}},provide:function(){return{parseWidth:this.wxParseWidth}},watch:{content:function(){this.setHtml()}}};e.default=s}).call(this,n("6e42")["default"])},b6f4:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/gaoyia-parse/parse-create-component',
    {
        'components/gaoyia-parse/parse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("2977"))
        })
    },
    [['components/gaoyia-parse/parse-create-component']]
]);                
