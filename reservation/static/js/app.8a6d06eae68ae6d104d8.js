webpackJsonp([3],{CMvz:function(t,e){},Gzl0:function(t,e){},WU8p:function(t,e){},aCEB:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("mtWM"),i=n.n(r),a="";function o(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce(function(t,e){return t+"/"+e},a)}e.default={upFile:function(t){return console.log(t),i.a.post(o("trains","uploadFile"),t)},reservation:function(t){return i.a.paramPost(o("trains","datasubmit"),t)}}},jSQi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("j1ja");var r=n("C4MV"),i=n.n(r);function a(t,e,n){i()(t,e,{value:n})}a(Object.prototype,"each",function(t){var e=void 0;for(e in this)t.call(this,this[e],e,this)}),a(Object.prototype,"toParams",function(){var t="";return this.each(function(e,n){t+=n+"="+e+"&"}),t.slice(0,-1)}),a(Object.prototype,"toFormData",function(t){if(!t)return this;var e={};return this.each(function(n,r){e[t+"["+r+"]"]=n}),e}),a(Date.prototype,"format",function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t});var o=n("7+uW"),u=n("mtWM");n.n(u).a.paramPost=function(t,e){return this({url:t,data:e,method:"post",headers:{"content-type":"application/x-www-form-urlencoded"},transformRequest:function(t){return t.toParams()}})};var s=n("aCEB").default;o.a.prototype.$api=s;n("CMvz");var c=n("Fd2+");o.a.use(c.default);var f=n("fZjL"),l=n.n(f),d=n("sUu7"),h=d.mixin.beforeCreate;d.mixin.beforeCreate=function(){h.call(this),this.$options.computed&&(this.$options.computed.veeInvalid=function(){var t=this;return l()(this.fields).some(function(e){var n=t.fields[e];return!n.valid&&(!!n.required&&n.pristine)})||0!==this.errors.items.length},this.$options.methods)};var p,v,g,m=d.mixin.beforeDestroy;d.mixin.beforeDestroy=function(){this.$validator&&m.call(this)},d.Validator.extend("phone",{getMessage:function(t){return"请输入正确的手机号码"},validate:(p=/^((13|14|15|17|18)[0-9]{1}\d{8})$/,function(t){return 11===t.length&&p.test(t)})}),d.Validator.extend("name",{getMessage:function(t){return"请输入正确的姓名"},validate:function(){var t=/^[\u4e00-\u9fa5]+$/;return function(e){return e.length>1&&e.length<6&&t.test(e)}}()}),d.Validator.extend("cn",{getMessage:function(t){return"请输入汉字"},validate:function(){var t=/[\u4e00-\u9fa5]/;return function(e){return t.test(e)}}()}),d.Validator.extend("idcard",{getMessage:function(t){return"请输入正确的身份证号码"},validate:(v=/^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$/,g=/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,function(t){return 15===t.length?v.test(t):g.test(t)})}),o.a.use(d.default,{events:"input",inject:!1});n("uMhA"),n("WU8p");var x=n("/ocq");o.a.use(x.a);var M=new x.a({base:"/reservation/",routes:[{path:"*",redirect:"/index"},{path:"/index",component:function(){return n.e(0).then(n.bind(null,"Qt9A"))}},{path:"/reservation/:category",component:function(){return n.e(1).then(n.bind(null,"RBit"))}}]}),b={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var $=n("VU/8")({},b,!1,function(t){n("Gzl0")},"data-v-2fec8354",null).exports;o.a.config.productionTip=!1,new o.a({el:"#app",router:M,render:function(t){return t($)}})},uMhA:function(t,e){}},["jSQi"]);