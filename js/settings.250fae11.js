(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings"],{"0331":function(t,e,a){},"26d3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"settings"},[a("div",{staticClass:"wrapper"},[a("Paragraph",{attrs:{value:"Sublime text"}}),a("Textarea",{attrs:{readonly:"",buttonCopy:"",value:t.SublimeTextSettings}})],1),a("div",{staticClass:"wrapper"},[a("Paragraph",{attrs:{value:"Emmet"}}),a("Textarea",{attrs:{readonly:"",buttonCopy:"",value:t.EmmetSettings}})],1)])},r=[],o=(a("cadf"),a("551c"),a("097d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"c-Textarea"},[t.readonly?a("textarea",{staticClass:"c-Textarea__content",attrs:{readonly:""}},[t._v(t._s(t.value))]):a("textarea",{staticClass:"c-Textarea__content"},[t._v(t._s(t.value))]),a("CopyClipboardButton",{staticClass:"c-Textarea__buttonCopy",attrs:{copyValue:JSON.stringify(t.value)}})],1)}),i=[],s=a("d9ea"),l={name:"Textarea",components:{CopyClipboardButton:s["a"]},props:{value:Object,readonly:Boolean,buttonCopy:Boolean}},c=l,u=(a("4341"),a("2877")),p=Object(u["a"])(c,o,i,!1,null,"4e8a07d3",null);p.options.__file="Textarea.vue";var d=p.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"c-Paragraph"},[t._v(t._s(t.value))])},_=[],v={name:"Paragraph",props:{value:String}},b=v,h=(a("bc07"),Object(u["a"])(b,m,_,!1,null,"61d1a48d",null));h.options.__file="Paragraph.vue";var f=h.exports,x=a("f292"),g=a("2f4e"),y={name:"Settings",components:{Textarea:d,Paragraph:f},data:function(){return{EmmetSettings:x,SublimeTextSettings:g}}},C=y,S=(a("c4f3"),Object(u["a"])(C,n,r,!1,null,"a0fc841e",null));S.options.__file="Settings.vue";e["default"]=S.exports},"2f4e":function(t){t.exports={color_scheme:"Packages/Color Scheme - Default/Monokai.sublime-color-scheme",font_face:"Fira Code",font_size:12,ignored_packages:["Vintage"],line_padding_bottom:3,overlay_scroll_bars:"enabled",save_on_focus_lost:!0,tab_size:2,theme:"Adaptive.sublime-theme",update_check:!1,folder_exclude_patterns:[".svn",".git",".hg","CVS","node_modules"]}},4341:function(t,e,a){"use strict";var n=a("bcb9"),r=a.n(n);r.a},"63ee":function(t,e,a){},bc07:function(t,e,a){"use strict";var n=a("0331"),r=a.n(n);r.a},bcb9:function(t,e,a){},c4f3:function(t,e,a){"use strict";var n=a("63ee"),r=a.n(n);r.a},d9ea:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{on:{click:t.copy}},[t._v("\n\t"+t._s(t.buttonValue?t.buttonValue:"Kopiuj")+"\n\t"),t.textareaVisible?a("textarea",{staticStyle:{width:"0",height:"0",opacity:"0","pointer-events":"none",display:"block",border:"none"}},[t._v(t._s(t.copyValue))]):t._e()])},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",[t._v("sth")])},i=[],s={name:"AndroidButton"},l=s,c=a("2877"),u=Object(c["a"])(l,o,i,!1,null,null,null);u.options.__file="AndroidButton.vue";var p=u.exports,d={name:"CopyClipboardButton",components:{AndroidButton:p},props:{buttonValue:String,copyValue:String},data:function(){return{textareaVisible:!0}},methods:{textAreaChangeStatement:function(){this.textareaVisible=!this.textareaVisible},copy:function(t){var e=t.target;this.textAreaChangeStatement();var a=e.children[0];a.select(),document.execCommand("copy"),this.textAreaChangeStatement()}}},m=d,_=Object(c["a"])(m,n,r,!1,null,null,null);_.options.__file="CopyClipboardButton.vue";e["a"]=_.exports},f292:function(t){t.exports={snippets:{variables:{lang:"pl",locale:"pl-PL",charset:"UTF-8",indentation:"\t",newline:"\n"},html:{abbreviations:{"m-width":'<meta name="viewport" content="width=device-width, initial-scale=1.0"/>',"m-explorer":'<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />',"l-style":'<link rel="stylesheet" type="text/css" href="${1}"/>',script:'<script type="text/javascript"><\/script>',"l-script":'<script type="text/javascript" src="${1}"><\/script>',miniaturka:'<link rel="Shortcut icon" href="${1}" />',"html:5":"!!!+html[lang=${locale}]>(head>meta[charset=${charset}]+m-width+m-explorer+title{${1:Dokument}})+body"}},css:{abbreviations:{import:"@import url('${1:root.css}');","*":"*{\nmargin: 0;\npadding: 0;\nbox-sizing: border-box;\n}"}}}}}}]);
//# sourceMappingURL=settings.250fae11.js.map