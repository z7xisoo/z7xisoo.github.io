(window.webpackJsonpcommon=window.webpackJsonpcommon||[]).push([[1],{29:function(t,n,i){var e=i(5),a=i(69);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1};e(a,o);t.exports=a.locals||{}},30:function(t,n,i){var e=i(5),a=i(71);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1};e(a,o);t.exports=a.locals||{}},31:function(t,n,i){var e=i(5),a=i(73);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1};e(a,o);t.exports=a.locals||{}},32:function(t,n,i){var e=i(5),a=i(75);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1};e(a,o);t.exports=a.locals||{}},68:function(t,n,i){"use strict";var e=i(29);i.n(e).a},69:function(t,n,i){(n=i(6)(!1)).push([t.i,".flash-wrap[data-v-20e67bcf]{width:1.2rem;height:1.2rem;display:block;position:absolute;top:.1rem;cursor:pointer;z-index:10;margin-left:90vw}.flash[data-v-20e67bcf]{width:1.2rem;height:1.2rem;border-radius:50%;text-align:center;overflow:hidden;position:absolute;z-index:2;background:#f3be1d;border:1px solid #f3be1d;-webkit-box-shadow:0 1px 2px #f3be1d;box-shadow:0 1px 2px #f3be1d}@-webkit-keyframes breathe-data-v-20e67bcf{0%{opacity:0.4;-webkit-box-shadow:0 1px 2px rgba(243,190,29,0.9),0 1px 1px rgba(243,190,29,0.8) inset;box-shadow:0 1px 2px rgba(243,190,29,0.9),0 1px 1px rgba(243,190,29,0.8) inset}100%{opacity:1;border:1px solid rgba(243,190,29,0.8);-webkit-box-shadow:0 1px 4px rgba(243,190,29,0.9),0 1px 5px rgba(243,190,29,0.8) inset;box-shadow:0 1px 4px rgba(243,190,29,0.9),0 1px 5px rgba(243,190,29,0.8) inset}}@keyframes breathe-data-v-20e67bcf{0%{opacity:0.4;-webkit-box-shadow:0 1px 2px rgba(243,190,29,0.9),0 1px 1px rgba(243,190,29,0.8) inset;box-shadow:0 1px 2px rgba(243,190,29,0.9),0 1px 1px rgba(243,190,29,0.8) inset}100%{opacity:1;border:1px solid rgba(243,190,29,0.8);-webkit-box-shadow:0 1px 4px rgba(243,190,29,0.9),0 1px 5px rgba(243,190,29,0.8) inset;box-shadow:0 1px 4px rgba(243,190,29,0.9),0 1px 5px rgba(243,190,29,0.8) inset}}\n",""]),t.exports=n},70:function(t,n,i){"use strict";var e=i(30);i.n(e).a},71:function(t,n,i){(n=i(6)(!1)).push([t.i,".navbox[data-v-44802f12]{position:absolute;top:0;left:0;width:100%;height:2rem}ul.nav[data-v-44802f12]{list-style:none;display:block;width:200px;position:relative;top:100px;left:100px;padding:60px 0 60px 0;-webkit-background-size:50% 100%}li[data-v-44802f12]{margin:5px 0 0 0}ul.nav li a[data-v-44802f12]{-webkit-transition:all 0.3s ease-out;color:#174867;padding:7px 15px 7px 15px;-webkit-border-top-right-radius:10px;-webkit-border-bottom-right-radius:10px;width:100px;display:block;text-decoration:none;-webkit-box-shadow:2px 2px 4px #888}ul.nav li a[data-v-44802f12]:hover{color:#67a5cd;padding:7px 15px 7px 30px}\n",""]),t.exports=n},72:function(t,n,i){"use strict";var e=i(31);i.n(e).a},73:function(t,n,i){(n=i(6)(!1)).push([t.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/** 白云 */\n#clouds {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 2rem;\n}\n.cloud {\n    width: 2rem;\n    height: .6rem;\n    background: #7fd5ec;\n    border-radius: 200px;\n    position: relative;\n}\n.cloud:before,\n  .cloud:after {\n    content: "";\n    background: #7fd5ec;\n    width: 1rem;\n    height: .8rem;\n    position: absolute;\n    top: -.15rem;\n    left: .1rem;\n    border-radius: 1rem;\n    transform: rotate(30deg);\n}\n.cloud:after {\n    width: 1.2rem;\n    height: 1.2rem;\n  \n    top: -.55rem;\n    right: .15rem;\n    left: auto;\n}\n.x1 {\n      left: -1.5rem;\n      top: 1rem;\n      animation: moveclouds 15s linear infinite;\n}\n.x2 {\n    left: 2rem;\n    transform: scale(0.6);\n    animation: moveclouds 25s linear infinite;\n}\n.x3 {\n    left: -2.5rem;\n    top: -.3rem;\n    transform: scale(0.8);\n    animation: moveclouds 20s linear infinite;\n}\n.x4 {\n    left: 2rem;\n    top: -.5rem;\n    transform: scale(0.75);\n    animation: moveclouds 18s linear infinite;\n}\n.x5 {\n    left: 3.5rem;\n    top: -.8rem;\n    transform: scale(0.8);\n    animation: moveclouds 20s linear infinite;\n}\n@keyframes moveclouds {\n0% {\n      margin-left: 110vw;\n}\n100% {\n      margin-left: -100vw;\n}\n}\n',""]),t.exports=n},74:function(t,n,i){"use strict";var e=i(32);i.n(e).a},75:function(t,n,i){(n=i(6)(!1)).push([t.i,".enter[data-v-496a6c8a]{width:100%;height:100%;position:relative;overflow:hidden}\n",""]),t.exports=n},79:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"enter"},[n("Sun",{attrs:{type:"home"}}),this._v(" "),n("SkySea"),this._v(" "),n("Menus")],1)};e._withStripped=!0;var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"flash-wrap",attrs:{onselectstart:"return false","οncοntextmenu":"return false"},on:{click:function(n){return t.$emit("click")}}},[i("div",{class:["flash",t.type]})])};a._withStripped=!0;var o={name:"Wave",props:{type:{type:String,default:"home"}}},s=(i(68),i(0)),r=Object(s.a)(o,a,[],!1,null,"20e67bcf",null);r.options.__file="src/components/Sun/index.vue";var l=r.exports,h=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"navbox"},[i("ul",{staticClass:"nav"},[i("li",[i("a",{on:{click:function(n){return t.$router.push("/share")}}},[t._v("分享")])]),t._v(" "),i("li",[i("a",{on:{click:function(n){return t.$router.push("/interesting")}}},[t._v("有趣的收藏")])]),t._v(" "),i("li",[i("a",{on:{click:function(n){return t.$router.push("/notes")}}},[t._v("笔记")])]),t._v(" "),i("li",[i("a",{on:{click:function(n){return t.$router.push("/about")}}},[t._v("关于我")])])])])};h._withStripped=!0;var c={name:"Menu",computed:{},watch:{},data:()=>({}),mounted(){},beforeDestroy(){},methods:{}},d=(i(70),Object(s.a)(c,h,[],!1,null,"44802f12",null));d.options.__file="src/components/Menus/index.vue";var u=d.exports,p=function(){var t=this.$createElement;this._self._c;return this._m(0)};p._withStripped=!0;class f{constructor(t,n,i){this.x=t,this.y=n,this.radius=i,this.color={bg:"rgba(255, 255, 255, 0.45)"},this.velocity={x:.5*(Math.random()-.5),y:2*Math.random()},this.opacity=1}}class x{constructor(t,n,i){this.x=t,this.y=n,this.radius=i,this.color={bg:"rgba(255, 255, 255, 1)"},this.velocity={x:.6*(Math.random()-.5),y:.5*(Math.random()-1)},this.gravity=-.03,this.timeToLive=500}}let v=null,m=null,b={x:0,y:0},g=99,w=0,y=[],_=[],k=null;function M(){v=document.querySelector("canvas"),m=v.getContext("2d"),v.height=.5*innerHeight,v.width=innerWidth,k=m.createLinearGradient(0,0,0,v.height),k.addColorStop(0,"#89D1E4"),k.addColorStop(1,"#0A6092"),f.prototype.draw=function(){m.beginPath(),m.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),m.fillStyle=this.color.bg,m.fill(),m.closePath()},f.prototype.update=function(){this.y-=this.velocity.y,this.draw()},x.prototype.draw=function(){m.save(),m.beginPath(),m.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),m.fillStyle=this.color.bg,m.fill(),m.closePath(),m.restore()},x.prototype.update=function(){this.y-this.radius<0?this.velocity.y=this.velocity.y:this.velocity.y+=this.gravity,this.x+=this.velocity.x,this.y+=this.velocity.y,this.timeToLive-=1,this.draw()},v.addEventListener("mousemove",C),this.animate=function(){P()},this.init=(_=[],void(y=[]))}function S(t,n){return Math.floor(Math.random()*(n-t+1)+t)}function C(t){b.x=t.offsetX,b.y=t.offsetY}function P(){if(requestAnimationFrame(P),m.fillStyle=k,_.forEach((t,n)=>{t.update(),0==t.radius&&_.splice(n,1)}),y.forEach((t,n)=>{t.update(),0==t.timeToLive&&y.splice(n,1)}),w++,w%g==0){const t=S(15,30),n=2*Math.random()+1,i=Math.max(t,Math.random()*v.width-t),e=innerHeight+100;_.push(new f(i,e,t,"white")),y.push(new x(i,e,n)),g=S(70,200)}for(var t=0;t<_.length;t++){if(b.x>_[t].x-_[t].radius&&b.x<_[t].x+_[t].radius&&b.y>_[t].y-_[t].radius&&b.y<_[t].y+_[t].radius){let n=_[t].x,i=_[t].y,e=2*Math.random()+1;_[t].radius-=_[t].radius;for(let t=0;t<4*Math.random()+4;t++)y.push(new x(n,i,e))}if(_[t].y<.6*innerHeight){let n=_[t].x,i=_[t].y,e=2*Math.random()+1;_[t].radius-=_[t].radius;for(let t=0;t<4*Math.random()+4;t++)y.push(new x(n,i,e))}}}function E(){this.canvas=document.querySelector("canvas"),this.ctx=this.canvas.getContext("2d"),this.setSize=function(t,n){this.canvas&&(this.canvas.width=this.width=t,this.canvas.height=this.height=n,window.width=this.width,window.height=this.height)},this.fillPageWithCanvas=function(){this.setSize(window.innerWidth,window.innerHeight)},this.background=function(t){this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.width,this.height)},this.beginPath=function(){this.ctx.beginPath()},this.closePath=function(){this.ctx.closePath()},this.lineTo=function(t,n){this.ctx.lineTo(t,n)},this.fill=function(){this.ctx.fill()},this.fillStyle=function(t){this.ctx.fillStyle=t},window.addEventListener("resize",()=>{this.setSize(window.innerWidth,window.innerHeight)})}function $(){this.start=function(){let t=new E,n=0;t.fillPageWithCanvas(),function i(){t.background("#fff");let e=[function(t){return 60*Math.sin(6*t+.01*n)*Math.sin(.03*n)},function(t){return(100*Math.sin(6*t+.01*n)+20)*Math.sin(.03*n)},function(t){return(50*Math.sin(6*t+.01*n)+20)*Math.sin(.03*n)}],a=["#007bff","#0da0bd","#009cff"];for(let n=0;n<3;n++){let i=a[n],o=e[n];t.beginPath();for(let n=0;n<=1.01;n+=.01)t.lineTo(n*t.width,.45*t.height+o(n));t.lineTo(t.width,t.height),t.lineTo(0,t.height),t.closePath(),t.fillStyle(i),t.fill()}n++,requestAnimationFrame(i)}()}}var T={data:()=>({}),created(){this.$nextTick(()=>{let t=new M;(new $).start(),t.animate()})},beforeDestroy(){},methods:{}},z=(i(72),Object(s.a)(T,p,[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"boom-wrap"},[n("canvas"),this._v(" "),n("div",{attrs:{id:"clouds"}},[n("div",{staticClass:"cloud x1"}),this._v(" "),n("div",{staticClass:"cloud x2"}),this._v(" "),n("div",{staticClass:"cloud x3"}),this._v(" "),n("div",{staticClass:"cloud x4"}),this._v(" "),n("div",{staticClass:"cloud x5"})])])}],!1,null,null,null));z.options.__file="src/components/Sky-Sea/index.vue";var L={name:"Enter",components:{Sun:l,SkySea:z.exports,Menus:u},computed:{},watch:{},data:()=>({}),mounted(){},methods:{}},W=(i(74),Object(s.a)(L,e,[],!1,null,"496a6c8a",null));W.options.__file="src/modules/enter/index.vue";n.default=W.exports}}]);
//# sourceMappingURL=1.js.map