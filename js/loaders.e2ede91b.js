(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["loaders"],{"2a8b":function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("Loader",{attrs:{settings:"",height:"150",barsTypes:{nrOfBars:5,colors:["#f1c40f","#e67e22","#d35400","#f39c12","#c0392b"],durations:[1,-1,1,-1,1]},background:{color:"#000000",opacity:.8}}})],1)},s=[],n=(r("cadf"),r("551c"),r("097d"),function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[t.dataHeight>0?r("div",{staticClass:"c-Loader",style:{height:t.dataHeight+"px",width:t.dataHeight+"px",backgroundColor:"rgba("+t.backgroundColorRGB.join(", ")+", "+t.background.opacity+")"}},[0!==Number(t.barsCount)?r("div",{staticClass:"c-Loader__rolling-wrapper"},t._l(t.barsActive,function(t,a){return r("div",{key:a,staticClass:"c-Loader__rooling-bar",class:{back:t.durations<0},style:{borderTop:t.color+" solid 2px",animationDuration:Math.abs(t.durations)+"s",width:"calc(100% - "+8*(a+1)+"px)",height:"calc(100% - "+8*(a+1)+"px)",top:4*(a+1)+"px",left:4*(a+1)+"px"}})})):t._e()]):t._e(),t.settings?r("div",[r("div",[r("p",{staticClass:"title"},[t._v("Loading:")]),r("p",[t._v("Wysokość:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.dataHeight,expression:"dataHeight"}],attrs:{type:"range",max:"300"},domProps:{value:t.dataHeight},on:{__r:function(a){t.dataHeight=a.target.value}}})]),r("div",[r("p",{staticClass:"title"},[t._v("Obręcze:")]),r("p",[t._v("Liczba:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.barsCount,expression:"barsCount"}],attrs:{type:"range",max:"5"},domProps:{value:t.barsCount},on:{__r:function(a){t.barsCount=a.target.value}}}),t.barsActive.length>0?r("div",[r("p",[t._v("Kolor:")]),r("ol",t._l(t.barsActive,function(a){return r("li",{key:a.id},[r("input",{directives:[{name:"model",rawName:"v-model",value:a.color,expression:"bar.color"}],attrs:{type:"color"},domProps:{value:a.color},on:{input:function(r){r.target.composing||t.$set(a,"color",r.target.value)}}})])})),r("p",[t._v("Czas trwania obrotu:")]),r("ol",t._l(t.barsActive,function(a){return r("li",{key:a.id},[r("input",{directives:[{name:"model",rawName:"v-model",value:a.durations,expression:"bar.durations"}],attrs:{type:"range",step:"0.1",min:"-5",max:"5"},domProps:{value:a.durations},on:{__r:function(r){t.$set(a,"durations",r.target.value)}}}),t._v("\n              "+t._s(a.durations)+"sec\n          ")])}))]):t._e()])]):t._e()])}),o=[],i={name:"Loader",props:{settings:Boolean,height:String,barsTypes:Object,background:Object},data:function(){return{dataHeight:this.height?this.height:150,barsContent:null,barsCount:this.barsTypes.nrOfBars?this.barsTypes.nrOfBars:3}},computed:{barsActive:function(){var t=this;return this.bars.filter(function(a,r){return r<t.barsCount})},bars:function(){if(this.barsContent)return this.barsContent;for(var t=[],a=1;a<=this.barsCount;a++){var r=void 0,e=void 0;r=this.barsTypes.colors&&this.barsTypes.colors[a-1]?this.barsTypes.colors[a-1]:"#000000",e=this.barsTypes.durations?this.barsTypes.durations[a-1]?this.barsTypes.durations[a-1]:0===this.barsTypes.durations[a-1]?this.barsTypes.durations[a-1]:a:a,t.push({color:r,durations:e})}return this.barsContent=t,t},backgroundColorRGB:function(){var t,a,r,e=this.background.color;return 7===e.length?(t=String(e[1])+String(e[2]),a=String(e[3])+String(e[4]),r=String(e[5])+String(e[6])):4===e.length&&(t=e[1],a=e[2],r=e[3]),t=parseInt(t,16),a=parseInt(a,16),r=parseInt(r,16),[].concat(t).concat(a).concat(r)}},watch:{barsCount:function(){this.barsContent=null}}},u=i,c=(r("fdff"),r("2877")),l=Object(c["a"])(u,n,o,!1,null,"2aea533a",null);l.options.__file="index.vue";var d=l.exports,p={name:"loaderView",components:{Loader:d}},b=p,v=Object(c["a"])(b,e,s,!1,null,null,null);v.options.__file="Loaders.vue";a["default"]=v.exports},"81d9":function(t,a,r){},fdff:function(t,a,r){"use strict";var e=r("81d9"),s=r.n(e);s.a}}]);
//# sourceMappingURL=loaders.e2ede91b.js.map