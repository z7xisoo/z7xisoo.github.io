(window.webpackJsonpcommon=window.webpackJsonpcommon||[]).push([[1],{19:function(e,t,i){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},22:function(e,t,i){var o=i(5),r=i(38);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);e.exports=r.locals||{}},25:function(e,t,i){"use strict";i.r(t),t.default=i.p+"img/27992e2cdc577e82c892faf646a96d81.png"},37:function(e,t,i){"use strict";var o=i(22);i.n(o).a},38:function(e,t,i){var o=i(6),r=i(19),a=i(25);t=o(!1);var n=r(a);t.push([e.i,".enter[data-v-496a6c8a]{width:100%;height:100%;position:relative;overflow:hidden}.enter .block-item[data-v-496a6c8a]{position:fixed;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;left:0;bottom:0}.enter .block-item .item[data-v-496a6c8a]{width:0.5rem;height:0.5rem;background-color:DarkCyan;margin:0.1rem;border-radius:0.04rem;cursor:pointer;border:1px solid #FFDAB9}.enter .block-item .item[data-v-496a6c8a]:first-child{background:-webkit-linear-gradient(315deg, red, orange, green, blue, DarkCyan);background:-o-linear-gradient(315deg, red, orange, green, blue, DarkCyan);background:linear-gradient(135deg, red, orange, green, blue, DarkCyan)}.enter .block-item .item[data-v-496a6c8a]:last-child{background-image:url("+n+");background-size:cover}.enter .block-npm[data-v-496a6c8a]{position:fixed;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;right:0;bottom:0}.enter .block-npm .item[data-v-496a6c8a]{width:.7rem;height:0.5rem;margin:0.1rem;border-radius:0.04rem;cursor:pointer;color:#fff;text-align:center;line-height:.5rem;font-family:fantasy, cursive, monospace;background-color:#CD0000}.enter .show[data-v-496a6c8a]{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer}.enter .show .show-name[data-v-496a6c8a]{font-size:2.4rem;font-weight:bolder;margin-bottom:0.3rem;color:#fff;font-family:fantasy, cursive, monospace;border-bottom:6px solid springgreen;cursor:pointer;padding:0 0.4rem;-webkit-transition:all 0.5s;-o-transition:all 0.5s;transition:all 0.5s}.enter .show .show-name[data-v-496a6c8a]:hover{color:#ff3030;border-bottom:6px solid #fff}.enter .show .show-more[data-v-496a6c8a]{font-size:0.24rem;cursor:pointer;padding:0 0.4rem;color:#fff;border:2px solid springgreen;border-radius:0.04rem;text-align:center;font-family:fantasy, cursive, monospace;font-weight:bolder;margin-bottom:0.2rem;background-color:orange;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.enter .show .show-more[data-v-496a6c8a]:hover{background-color:#fff;color:#ff3030}.enter .show .show-icp[data-v-496a6c8a]{font-family:fantasy, cursive, monospace;color:#fff}\n",""]),e.exports=t},40:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"enter"},[i("RainbowBubbles",{attrs:{config:e.config,bubbles:e.bubbles}}),e._v(" "),i("div",{staticClass:"show"},[i("div",{staticClass:"show-name",on:{click:e.open}},[e._v("z7xisoo")]),e._v(" "),i("div",{staticClass:"show-more",on:{click:function(t){return e.$router.push("/zlogs")}}},[e._v("More")]),e._v(" "),i("div",{staticClass:"show-icp"},[e._v("粤ICP备20041949号")])]),e._v(" "),i("div",{staticClass:"block-item"},[i("div",{staticClass:"item",on:{click:function(t){return e.handleBackground(0)}}}),e._v(" "),i("div",{staticClass:"item",on:{click:function(t){return e.handleBackground(1)}}}),e._v(" "),i("div",{staticClass:"item",on:{click:function(t){return e.handleBackground(2)}}})]),e._v(" "),i("div",{staticClass:"block-npm"},[i("div",{staticClass:"item",on:{click:function(t){return e.handleNpm(0)}}},[e._v("Waves")]),e._v(" "),i("div",{staticClass:"item",on:{click:function(t){return e.handleNpm(1)}}},[e._v("Bubbles")])])],1)};o._withStripped=!0;var r=function(){var e=this.$createElement,t=this._self._c||e;return this.createCanvas?t("canvas",{attrs:{id:this.elId}}):this._e()};r._withStripped=!0;var a={name:"rainbow-bubbles",props:{config:{type:Object},bubbles:{type:Object}},computed:{createCanvas(){return!this.config||!this.config.hasOwnProperty("new")||this.config.new},elId(){return this.config&&this.config.hasOwnProperty("el")?this.config.el:"rainbow-bubbles"}},watch:{config:{handler(){this.$nextTick(()=>{this.draw()})},deep:!0},bubbles:{handler(){this.$nextTick(()=>{this.draw()})},deep:!0}},mounted(){this.createCanvas?this.draw():setTimeout(()=>{this.draw()},10)},methods:{draw(){let e=null,t=null,i={x:0,y:0},o=[],r=[],a=0,n=0,s=null,{new:c,el:l,move:d,blow:h,clear:b,width:u,height:g,background:m}={new:!0,clear:!0,el:"rainbow-bubbles",width:window.innerWidth,height:window.innerHeight,move:!0,blow:!0,background:{type:"gradient",color:["red","orange","green","blue"],position:[0,0,window.innerWidth,window.innerHeight]},...this.config};if(e=document.getElementById(l),!e)throw new Error(`指定ID为 ${l} 的元素未找到`);if(!e)return;t=e.getContext("2d"),c?(e.width=a=u,e.height=n=g):(a=e.width,n=e.height),d&&e.addEventListener("mousemove",(function(e){i.x=e.offsetX,i.y=e.offsetY}));class f{constructor(e,t,i,o){this.x=e,this.y=t,this.radius=i,this.background=o,this.gravityY=Math.floor(8*Math.random()+2)}}f.prototype.draw=function(){switch(t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),this.background.type){case"color":t.fillStyle=this.background.color;break;case"gradient":const e=t.createLinearGradient(this.x-this.radius,this.y-this.radius,this.x+this.radius,this.y+this.radius),i=this.background.color.length;this.background.color.forEach((t,o)=>{e.addColorStop(o/i,t)}),t.fillStyle=e;break;case"image":let o=new Image;o.src=this.background.src,t.fillStyle=t.createPattern(o,this.background.repetition)}t.closePath(),t.fill()},f.prototype.update=function(){this.y-=this.gravityY,this.draw()};class p{constructor(e,t,i,o){this.x=e,this.y=t,this.radius=i,this.background=o,this.gravityX=.5*(Math.random()-.5),this.gravityY=3*(Math.random()-1),this.timeToLive=100}}p.prototype.draw=function(){switch(t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),this.background.type){case"color":t.fillStyle=this.background.color;break;case"gradient":const e=t.createLinearGradient(this.x-this.radius,this.y-this.radius,this.x+this.radius,this.y+this.radius),i=this.background.color.length;this.background.color.forEach((t,o)=>{e.addColorStop(o/i,t)}),t.fillStyle=e;break;case"image":let o=new Image;o.src=this.background.src,t.fillStyle=t.createPattern(o,this.background.repetition)}t.closePath(),t.fill()},p.prototype.update=function(){this.x+=this.gravityX,this.y+=this.gravityY,this.timeToLive-=1,this.draw()};const{max:w,min:k}={max:{},min:{},...this.bubbles},{max:{number:y,rate:v,radius:x,blowHeight:_,background:C},min:{show:z,number:M,radius:S,background:E}}={max:{number:3,rate:.1,radius:[15,20],blowHeight:.6,background:{type:"color",color:["blue","red","orange","green"]},...w},min:{show:!0,number:4,radius:[1,1],background:{type:"color",color:"#fff"},...k}};function P([e,t]){return Number((Math.random()*(t-e+1)+e).toFixed(2))}function B(e,t){let i=P(S);for(let o=0;o<M;o++)r.push(new p(e,t,i,E))}s=function(){if(b&&t.clearRect(0,0,a,n),c)switch(m.type){case"color":t.fillStyle=m.color;break;case"gradient":const[e,i,o,r]=m.position,a=t.createLinearGradient(e,i,o,r),n=m.color.length;m.color.forEach((e,t)=>{a.addColorStop(t/n,e)}),t.fillStyle=a;break;case"image":let s=new Image;s.src=m.src,t.fillStyle=t.createPattern(s,m.repetition)}else t.fillStyle="rgba(0,0,0,0)";if(t.fillRect(0,0,a,n),10*Math.random()>10-v)for(let e=0;e<y;e++){const e=P(x),t=Math.max(e,Math.random()*a-e),i=n+100;o.push(new f(t,i,e,{...C,color:"color"===C.type&&Array.isArray(C.color)?C.color[Math.ceil(Math.random()*(C.color.length-1))]:C.color}))}if(o.forEach((e,t)=>{e.radius?e.update():o.splice(t,1)}),d||h)for(let e=0;e<o.length;e++){let t=o[e].x,r=o[e].y,a=o[e].radius,s=i.x,c=i.y;d&&s>t-a&&s<t+a&&c>r-a&&c<r+a&&(o[e].radius=0,z&&B(t,r)),h&&r<n*_&&(o[e].radius=0,z&&B(t,r))}z&&r.forEach((e,t)=>{e.update(),0==e.timeToLive&&r.splice(t,1)}),requestAnimationFrame(s)},s()}}},n=i(0),s=Object(n.a)(a,r,[],!1,null,null,null);s.options.__file="node_modules/rainbow-bubbles/packages/rainbow-bubbles.vue";var c=s.exports;const l=[c];var d;"undefined"!=typeof window&&window.Vue&&(d=window.Vue,l.map(e=>{d.component(e.name,e)}));var h=c,b=i(25),u={name:"Enter",components:{RainbowBubbles:h},computed:{},watch:{},data:()=>({config:{},bubbles:{max:{number:5,rate:.5,radius:[15,20],blowHeight:0,background:{type:"color",color:["blue","red","orange","green","#EE6363","#FFA07A","LightGreen","BlueViolet","#00BFFF"]}}}}),mounted(){this.config={new:!0,background:{type:"gradient",color:["red","orange","green","blue","DarkCyan"],position:[0,0,window.innerWidth,window.innerHeight]}}},methods:{open(){window.open("https://github.com/z7xisoo","_blank")},handleNpm(e){switch(e){case 0:window.open("https://www.npmjs.com/package/rainbow-waves","_blank");break;default:window.open("https://www.npmjs.com/package/rainbow-bubbles","_blank")}},handleBackground(e){switch(e){case 0:this.config.background={type:"gradient",color:["red","orange","green","blue","DarkCyan"],position:[0,0,window.innerWidth,window.innerHeight]};break;case 1:this.config.background={type:"color",color:"DarkCyan"};break;case 2:this.config.background={type:"image",src:b.default,repetition:"repeat"}}}}},g=(i(37),Object(n.a)(u,o,[],!1,null,"496a6c8a",null));g.options.__file="src/modules/enter/index.vue";t.default=g.exports}}]);
//# sourceMappingURL=1.js.map