(window.webpackJsonpcommon=window.webpackJsonpcommon||[]).push([[4],{20:function(e,i,t){var o=t(5),a=t(29);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var n={insert:"head",singleton:!1};o(a,n);e.exports=a.locals||{}},24:function(e,i,t){"use strict";var o=function(){var e=this.$createElement,i=this._self._c||e;return this.createCanvas?i("canvas",{attrs:{id:this.elId}}):this._e()};o._withStripped=!0;var a={name:"rainbow-waves",props:{config:{type:Object},waves:{type:Array}},computed:{createCanvas(){return!this.config||!this.config.hasOwnProperty("new")||this.config.new},elId(){return this.config&&this.config.hasOwnProperty("el")?this.config.el:"rainbow-waves"}},watch:{config:{handler(){this.$nextTick(()=>{this.draw()})},deep:!0},waves:{handler(){this.$nextTick(()=>{this.draw()})},deep:!0}},mounted(){this.createCanvas?this.draw():setTimeout(()=>{this.draw()},10)},methods:{draw(){let e=0,i=null,t=null,o=0,a=0;const n=this.waves?[...this.waves]:[],{new:s,el:r,width:l,height:c,clear:b,background:d,direction:m}={el:"rainbow-waves",clear:!0,new:!0,width:window.innerWidth,height:window.innerHeight,background:{type:"color",color:"#fff"},direction:"bottom",...this.config};if(i=document.getElementById(r),!i)throw new Error(`指定ID为 ${r} 的元素未找到`);function f(e){if(!t)throw new Error("未找到‘canvas’, getContext 错误");if(t)switch(e.type){case"color":t.fillStyle=e.color;break;case"gradient":const[i,o,a,n]=e.position,s=t.createLinearGradient(i,o,a,n),r=e.color.length;e.color.forEach((e,i)=>{s.addColorStop(i/r,e)}),t.fillStyle=s;break;case"image":let l=new Image;l.src=e.src,t.fillStyle=t.createPattern(l,e.repetition)}}i&&(t=i.getContext("2d"),s?(i.width=o=l,i.height=a=c):(o=i.width,a=i.height),function i(){b&&t.clearRect(0,0,o,a);f(s?d:{type:"color",color:"rgba(0,0,0,0)"});if(t.fillRect(0,0,o,a),n&&n.length){for(let i=0;i<n.length;i++){let{jitter:s,restore:r,waveGap:l,waterGap:c,waveUps:b}=n[i];t.beginPath();for(let d=0;d<=1.01;d+=.01)"left"===m||"right"===m?t.lineTo(o*("left"===m?n[i].bit:Math.floor(10*(1-n[i].bit))/10)+(Math.sin(d*b+e*s)*l+c)*Math.sin(e*r),d*a):t.lineTo(d*o,a*("top"===m?n[i].bit:Math.floor(10*(1-n[i].bit))/10)+(Math.sin(d*b+e*s)*l+c)*Math.sin(e*r));switch(m){case"left":t.lineTo(0,a),t.lineTo(0,0);break;case"right":t.lineTo(o,a),t.lineTo(o,0);break;case"top":t.lineTo(o,0),t.lineTo(0,0);break;default:t.lineTo(o,a),t.lineTo(0,a)}t.closePath(),f(n[i].background),t.fill()}e++}requestAnimationFrame(i)}())}}},n=t(0),s=Object(n.a)(a,o,[],!1,null,null,null);s.options.__file="node_modules/rainbow-waves/packages/rainbow-waves.vue";var r=s.exports;const l=[r];var c;"undefined"!=typeof window&&window.Vue&&(c=window.Vue,l.map(e=>{c.component(e.name,e)}));i.a=r},28:function(e,i,t){"use strict";var o=t(20);t.n(o).a},29:function(e,i,t){var o=t(6),a=t(8),n=t(30);i=o(!1);var s=a(n);i.push([e.i,"#rainbow-waves[data-v-3565fa53]{position:absolute;top:0;left:0}.zi-style[data-v-3565fa53]{width:100%;height:100%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0 0.8rem;padding-bottom:0.2rem;box-sizing:border-box}.top-wrap[data-v-3565fa53]{width:100%;height:0.6rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0 0.2rem;padding-left:0.8rem;border-bottom:6px solid #00cd66;color:#000;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:0.2rem;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;z-index:999}.top-wrap .label[data-v-3565fa53]{cursor:pointer;font-size:0.36rem;font-family:z7xisoo-crude}.top-wrap .links[data-v-3565fa53]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.top-wrap .links .item[data-v-3565fa53]{cursor:pointer;font-size:0.24rem;font-family:z7xisoo-crude;margin:0 0.2rem}.content-wrap[data-v-3565fa53]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;position:relative}@-webkit-keyframes view_action-data-v-3565fa53{form{left:0%;-webkit-transform:rotate(0);transform:rotate(0)}to{left:100%;-webkit-transform:rotate(4800deg);transform:rotate(4800deg)}}@keyframes view_action-data-v-3565fa53{form{left:0%;-webkit-transform:rotate(0);transform:rotate(0)}to{left:100%;-webkit-transform:rotate(4800deg);transform:rotate(4800deg)}}@-webkit-keyframes jump_action-data-v-3565fa53{10%{bottom:0}20%{bottom:80%}60%{bottom:0}64%{bottom:20%}70%{bottom:0}72%{bottom:10%}76%{bottom:0}90%{bottom:0}100%{bottom:0}}@keyframes jump_action-data-v-3565fa53{10%{bottom:0}20%{bottom:80%}60%{bottom:0}64%{bottom:20%}70%{bottom:0}72%{bottom:10%}76%{bottom:0}90%{bottom:0}100%{bottom:0}}.view-toper[data-v-3565fa53]{width:100%;height:40%;position:fixed;top:0;left:0;font-family:z7xisoo-crude;font-size:1.2rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;padding:0 1rem;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;color:#fff}.view-toper span[data-v-3565fa53]{width:2rem;height:2rem;display:block;position:absolute;left:-50%;bottom:0;border-radius:50%;-webkit-animation:5s ease-in 2s infinite view_action-data-v-3565fa53;animation:5s ease-in 2s infinite view_action-data-v-3565fa53}.view-toper span[data-v-3565fa53]:nth-child(1){-webkit-animation:6s ease-in 0s infinite view_action-data-v-3565fa53,6s ease-in 0s infinite jump_action-data-v-3565fa53;animation:6s ease-in 0s infinite view_action-data-v-3565fa53,6s ease-in 0s infinite jump_action-data-v-3565fa53;background:-webkit-linear-gradient(315deg, red, orange, green, blue, DarkCyan);background:-o-linear-gradient(315deg, red, orange, green, blue, DarkCyan);background:linear-gradient(135deg, red, orange, green, blue, DarkCyan)}.view-toper span[data-v-3565fa53]:nth-child(2){-webkit-animation:6s ease-in 2s infinite view_action-data-v-3565fa53,6s ease-in 2s infinite jump_action-data-v-3565fa53;animation:6s ease-in 2s infinite view_action-data-v-3565fa53,6s ease-in 2s infinite jump_action-data-v-3565fa53;background:-webkit-radial-gradient(#00cd66, #00cd66 50%, #fff);background:-o-radial-gradient(#00cd66, #00cd66 50%, #fff);background:radial-gradient(#00cd66, #00cd66 50%, #fff)}.view-toper span[data-v-3565fa53]:nth-child(3){-webkit-animation:6s ease-in 4s infinite view_action-data-v-3565fa53,6s ease-in 4s infinite jump_action-data-v-3565fa53;animation:6s ease-in 4s infinite view_action-data-v-3565fa53,6s ease-in 4s infinite jump_action-data-v-3565fa53;background:-webkit-radial-gradient(red, red 80%, #000 90%);background:-o-radial-gradient(red, red 80%, #000 90%);background:radial-gradient(red, red 80%, #000 90%)}.mouth[data-v-3565fa53]{width:100%;height:40%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;bottom:0;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.mouth .item[data-v-3565fa53]{background-color:#696969;padding:0.1rem 0.5rem;border-radius:5%;border:0.2rem #E0FFFF;border-style:dashed;border-left-width:0;border-right-width:0;width:100%;height:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.mouth.bite .item[data-v-3565fa53]{height:20%}.nose[data-v-3565fa53]{width:100%;height:20%;position:fixed;bottom:40%;left:0;padding:0 1rem;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;background-color:#008B45;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-size:0.36rem}.nose .topic[data-v-3565fa53]{width:2rem;font-family:z7xisoo-crude;color:#000;font-size:0.48rem}.nose .click-me[data-v-3565fa53]{color:#fff;width:2rem;font-size:0.48rem;background-color:#EEAD0E;font-family:z7xisoo-crude;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;height:60%;border-radius:5%;-webkit-box-shadow:0 0 0.05rem 0.1rem #EEAD0E;box-shadow:0 0 0.05rem 0.1rem #EEAD0E;-webkit-animation:1s ease-in 0s infinite click_action-data-v-3565fa53;animation:1s ease-in 0s infinite click_action-data-v-3565fa53;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}@-webkit-keyframes click_action-data-v-3565fa53{form{-webkit-box-shadow:0 0 0.05rem 0.1rem #EEAD0E;box-shadow:0 0 0.05rem 0.1rem #EEAD0E}to{-webkit-box-shadow:0 0 0.25rem 0.05rem #EEAD0E;box-shadow:0 0 0.25rem 0.05rem #EEAD0E}}@keyframes click_action-data-v-3565fa53{form{-webkit-box-shadow:0 0 0.05rem 0.1rem #EEAD0E;box-shadow:0 0 0.05rem 0.1rem #EEAD0E}to{-webkit-box-shadow:0 0 0.25rem 0.05rem #EEAD0E;box-shadow:0 0 0.25rem 0.05rem #EEAD0E}}.works[data-v-3565fa53]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.works .works-item[data-v-3565fa53]{width:30%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;border-radius:5%;overflow:hidden}.works .works-item .label[data-v-3565fa53]{height:0.48rem;width:100%;font-size:0.24rem;text-align:center;font-family:z7xisoo-crude;background-color:#EEAD0E;color:#000;line-height:0.48rem}.works .works-item .content[data-v-3565fa53]{font-size:0.18rem;font-family:z7xisoo-fine}.skill[data-v-3565fa53]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.skill .skill-item[data-v-3565fa53]{margin:0 0.05rem;width:1.6rem;height:1.6rem;font-size:0.24rem;border-radius:50%;font-family:z7xisoo-crude;background-color:#FFA500;color:#000;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.information[data-v-3565fa53]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.information .in-item[data-v-3565fa53]{width:16%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-moz-box-orient:vertical;-moz-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;border-radius:6%;overflow:hidden;background-color:#fff;color:#EEAD0E}.information .in-item:nth-child(3) .image svg[data-v-3565fa53]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;height:70%;width:70%}.information .in-item:nth-child(4) .image img[data-v-3565fa53]{width:80%;height:80%}.information .in-item[data-v-3565fa53]:nth-child(5){-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.information .in-item:nth-child(5) .image[data-v-3565fa53]{width:100%;height:100%;background-image:url("+s+');background-size:cover}.information .in-item[data-v-3565fa53]:last-child{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.information .in-item:last-child .image[data-v-3565fa53]{width:100%;height:100%;background-image:url("https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/ea/f4/dd/eaf4dd50-9cbf-c4fe-d9ea-8cca720904d7/AppIcon-1-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.png");background-size:cover}.information .in-item .label[data-v-3565fa53]{font-family:z7xisoo-crude;height:0.48rem;font-size:0.24rem;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:#000;color:#fff;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.information .in-item .image[data-v-3565fa53]{font-size:0.72rem;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;font-family:z7xisoo-crude;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}\n',""]),e.exports=i},30:function(e,i,t){"use strict";t.r(i),i.default=t.p+"img/b0d47e1ef981110ed668c06f76d04dae.jpeg"},42:function(e,i,t){"use strict";t.r(i);var o=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"zi-style"},[t("RainbowWaves",{attrs:{config:e.config,waves:e.waves}}),e._v(" "),t("div",{staticClass:"top-wrap"},[t("div",{staticClass:"label",on:{click:function(i){return e.$router.push("/")}}},[e._v("z7xisoo")]),e._v(" "),t("div",{staticClass:"links"},[t("a",{staticClass:"item",attrs:{target:"_blank",href:"https://github.com/z7xisoo"}},[e._v("Github")]),e._v(" "),t("div",{staticClass:"item",on:{click:function(i){return e.$router.push("/zlogs")}}},[e._v("Blogs")])])]),e._v(" "),t("div",{staticClass:"content-wrap"},[t("div",{staticClass:"view-toper"},e._l("123",(function(e,i){return t("span",{key:i})})),0),e._v(" "),t("div",{staticClass:"nose",on:{click:e.handleTopic}},[t("div",{staticClass:"topic"},[e._v(e._s(e.topicObj[e.topic]))]),e._v(" "),t("div",{staticClass:"click-me"},[e._v("More")])]),e._v(" "),t("div",{class:["mouth",e.bite&&"bite"]},[t("div",{staticClass:"item"},[e.bite||"works"!==e.topic?e._e():[e._m(0)],e._v(" "),e.bite||"skill"!==e.topic?e._e():[t("div",{staticClass:"skill"},e._l(["Vue","Html","Css","Nodejs","React","微信小程序","JQuery"],(function(i){return t("div",{key:i,staticClass:"skill-item"},[e._v(e._s(i))])})),0)],e._v(" "),e.bite||"information"!==e.topic?e._e():[t("div",{staticClass:"information"},[e._m(1),e._v(" "),e._m(2),e._v(" "),t("a",{staticClass:"in-item",attrs:{target:"_blank",href:"https://github.com/z7xisoo"}},[t("div",{staticClass:"label"},[e._v("Github")]),e._v(" "),t("div",{staticClass:"image"},[t("svg",{staticClass:"octicon octicon-mark-github text-white",attrs:{height:"32",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}})])])]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5)])]],2)])])],1)};o._withStripped=!0;var a={name:"Zi",components:{RainbowWaves:t(24).a},computed:{},watch:{},data:()=>({config:{background:{type:"color",color:"#FFEC8B"},direction:"top"},waves:[{background:{type:"color",color:"#C6E2FF",position:[0,0,0,1080]},jitter:.04,restore:.03,waveGap:80,waterGap:20,waveUps:6,bit:.32}],topic:"skill",bite:!1,biteTimer:null,topicObj:{works:"工作经历",skill:"职业技能",information:"个人信息"}}),watch:{bite:{handler(e){e&&(this.biteTimer&&clearTimeout(this.biteTimer),this.biteTimer=setTimeout(()=>{this.bite=!1},500))}}},mounted(){},beforeDestroy(){},methods:{open(){window.open("https://github.com/z7xisoo","_blank")},handleTopic(){switch(this.topic){case"skill":this.topic="works";break;case"works":this.topic="information";break;case"information":default:this.topic="skill"}this.bite=!0}}},n=(t(28),t(0)),s=Object(n.a)(a,o,[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"works"},[t("div",{staticClass:"works-item"},[t("div",{staticClass:"label"},[e._v("华夏智城")]),e._v(" "),t("div",{staticClass:"content"},[e._v("长春市“一门式、一张网”政务服务平台")])]),e._v(" "),t("div",{staticClass:"works-item"},[t("div",{staticClass:"label"},[e._v("跨越速运")]),e._v(" "),t("div",{staticClass:"content"},[e._v("Erp系统重构")])]),e._v(" "),t("div",{staticClass:"works-item"},[t("div",{staticClass:"label"},[e._v("商汤科技")]),e._v(" "),t("div",{staticClass:"content"},[e._v("\n                SenseFace 3.0+\n                "),t("br"),e._v("SenseCity 4.0 重构\n                "),t("br"),e._v("SenseSkyline 智慧城市\n                "),t("br"),e._v("SenseGuard 疫情系统\n              ")])])])},function(){var e=this.$createElement,i=this._self._c||e;return i("div",{staticClass:"in-item"},[i("div",{staticClass:"label"},[this._v("address")]),this._v(" "),i("div",{staticClass:"image"},[this._v("深圳")])])},function(){var e=this.$createElement,i=this._self._c||e;return i("div",{staticClass:"in-item"},[i("div",{staticClass:"label"},[this._v("Age")]),this._v(" "),i("div",{staticClass:"image"},[this._v("95")])])},function(){var e=this.$createElement,i=this._self._c||e;return i("a",{staticClass:"in-item",attrs:{target:"_blank",href:"mailto:z7xisoo@163.com"}},[i("div",{staticClass:"label"},[this._v("Email")]),this._v(" "),i("div",{staticClass:"image"},[i("img",{attrs:{src:"//mimg.127.net/hxm/dashi-home/p/20151107/style/img/newHome/section2/02_163mail-f07ddd860b.png",alt:""}})])])},function(){var e=this.$createElement,i=this._self._c||e;return i("div",{staticClass:"in-item"},[i("div",{staticClass:"label"},[this._v("WeChat")]),this._v(" "),i("div",{staticClass:"image"})])},function(){var e=this.$createElement,i=this._self._c||e;return i("a",{staticClass:"in-item",attrs:{target:"_blank",href:"http://wpa.qq.com/msgrd?v=3&uin=466663210&site=qq&menu=yes"}},[i("div",{staticClass:"label"},[this._v("QQ")]),this._v(" "),i("div",{staticClass:"image"})])}],!1,null,"3565fa53",null);s.options.__file="src/modules/zi/index.vue";i.default=s.exports}}]);
//# sourceMappingURL=4.js.map