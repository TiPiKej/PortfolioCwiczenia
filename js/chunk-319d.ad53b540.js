(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-319d"],{"20b5":function(t,e,n){},"5b2f":function(t,e,n){"use strict";var o=n("20b5"),a=n.n(o);a.a},"93e6":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CopyClipboardButton",{attrs:{buttonValue:"Kliknij żeby skopiować: sth",copyValue:t.copyValue}})},a=[],c=(n("cadf"),n("551c"),n("097d"),n("d470")),i={name:"BClipboard",components:{CopyClipboardButton:c["a"]},data:function(){return{copyValue:"sth"}}},u=i,r=(n("5b2f"),n("2877")),l=Object(r["a"])(u,o,a,!1,null,"086bc6bc",null);l.options.__file="Clipboard.vue";e["default"]=l.exports},d470:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"copyButton",on:{click:t.copy}},[t._v("\n\t\t"+t._s(t.buttonValue?t.buttonValue:"Kopiuj")+"\n\t\t"),this.textareaVisible?n("textarea",{staticStyle:{width:"1px",height:"1px",opacity:"1","pointer-events":"none",display:"unset","border-color":"transparent",outline:"none",resize:"none","background-color":"transparent"}},[t._v(t._s(t.copyValue))]):t._e()])},a=[],c=n("e3fd"),i={name:"CopyClipboardButton",components:{AndroidButton:c["a"]},props:{buttonValue:String,copyValue:String},data:function(){return{textareaVisible:!0}},methods:{copy:function(t){var e=t.target,n=e.children[0];n.select(),document.execCommand("copy")}}},u=i,r=n("2877"),l=Object(r["a"])(u,o,a,!1,null,null,null);l.options.__file="index.vue";e["a"]=l.exports},e3fd:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"c-AndroidButton",on:{click:t.click}},[t._v("\n\t"+t._s(t.value?t.value:"Kliknij")+"\n\t"),t.effectOn?n("span",{staticClass:"effect",style:{top:t.top,left:t.left}}):t._e()])},a=[],c={name:"AndroidButton",props:{value:String},data:function(){return{effectOn:!1,top:0,left:0}},methods:{click:function(t){var e=this;this.effectOn||(this.top="".concat(t.layerY,"px"),this.left="".concat(t.layerX,"px"),this.effectOn=!0,setTimeout(function(){return e.effectOn=!1},500))}}},i=c,u=(n("fe94"),n("2877")),r=Object(u["a"])(i,o,a,!1,null,"3f7e645a",null);r.options.__file="index.vue";e["a"]=r.exports},fdf0:function(t,e,n){},fe94:function(t,e,n){"use strict";var o=n("fdf0"),a=n.n(o);a.a}}]);
//# sourceMappingURL=chunk-319d.ad53b540.js.map