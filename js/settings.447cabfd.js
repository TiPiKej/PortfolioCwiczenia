(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings"],{"120b":function(t){t.exports=[{key:"ctrl+f11",command:"workbench.action.toggleZenMode"},{key:"ctrl+k z",command:"-workbench.action.toggleZenMode"},{key:"ctrl+n",command:"explorer.newFile"},{key:"ctrl+n",command:"-workbench.action.files.newUntitledFile"},{key:"ctrl+numpad5",command:"workbench.action.terminal.focusNext"},{key:"ctrl+numpad4",command:"workbench.action.terminal.focusPrevious"},{key:"ctrl+numpad_decimal",command:"workbench.action.terminal.kill"},{key:"ctrl+numpad2",command:"workbench.action.terminal.new"},{key:"ctrl+shift+oem_3",command:"-workbench.action.terminal.new"},{key:"ctrl+numpad1",command:"workbench.action.terminal.toggleTerminal"},{key:"ctrl+oem_3",command:"-workbench.action.terminal.toggleTerminal"}]},"26d3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"settings"},[a("div",{staticClass:"wrapper"},[a("Paragraph",{attrs:{value:"Sublime text"}}),a("Textarea",{attrs:{readonly:"",buttonCopy:"",value:t.SublimeTextSettings}})],1),a("div",{staticClass:"wrapper"},[a("Paragraph",{attrs:{value:"Emmet"}}),a("Textarea",{attrs:{readonly:"",buttonCopy:"",value:t.EmmetSettings}})],1),a("div",{staticClass:"wrapper"},[a("Paragraph",{attrs:{value:"Visual Studio"}}),a("Textarea",{attrs:{readonly:"",buttonCopy:"",value:t.VisualStudioSettings}})],1),a("div",{staticClass:"wrapper"},[a("Paragraph",{attrs:{value:"Visual Studio Keybinds"}}),a("Textarea",{attrs:{readonly:"",buttonCopy:"",value:t.VisualStudioKeys}})],1)])},i=[],o=(a("cadf"),a("551c"),a("097d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"c-Textarea"},[t.readonly?a("textarea",{staticClass:"c-Textarea__content",style:{height:t.height},attrs:{readonly:""}},[t._v(t._s(t.value))]):a("textarea",{staticClass:"c-Textarea__content"},[t._v(t._s(t.value))]),t.buttonCopy?a("CopyClipboardButton",{staticClass:"c-Textarea__buttonCopy",attrs:{copyValue:JSON.stringify(t.value)}}):t._e()],1)}),r=[],l=(a("28a5"),a("d470")),s={name:"Textarea",components:{CopyClipboardButton:l["a"]},props:{value:Object,readonly:Boolean,buttonCopy:Boolean},data:function(){return{height:"200px"}},mounted:function(){var t=JSON.stringify(this.value).split(",").length+JSON.stringify(this.value).split("},").length+1,e=21+1/3;this.height="".concat(t*e,"px")}},c=s,u=(a("5f1f"),a("2877")),d=Object(u["a"])(c,o,r,!1,null,"3741fab9",null);d.options.__file="index.vue";var p=d.exports,m=a("8e48"),f=a("f292"),h=a("2f4e"),v=a("4da9"),b=a("120b"),g={name:"Settings",components:{Textarea:p,Paragraph:m["a"]},data:function(){return{EmmetSettings:f,SublimeTextSettings:h,VisualStudioSettings:v,VisualStudioKeys:b}}},y=g,_=(a("2dd6"),Object(u["a"])(y,n,i,!1,null,"31c898a9",null));_.options.__file="Settings.vue";e["default"]=_.exports},"2dd6":function(t,e,a){"use strict";var n=a("2f1c"),i=a.n(n);i.a},"2f1c":function(t,e,a){},"2f4e":function(t){t.exports={color_scheme:"Packages/Color Scheme - Default/Monokai.sublime-color-scheme",font_face:"Fira Code",font_size:12,ignored_packages:["Vintage"],line_padding_bottom:3,overlay_scroll_bars:"enabled",save_on_focus_lost:!0,tab_size:2,theme:"Adaptive.sublime-theme",update_check:!1,folder_exclude_patterns:[".svn",".git",".hg","CVS","node_modules"]}},"4da9":function(t){t.exports={"workbench.startupEditor":"newUntitledFile","window.menuBarVisibility":"toggle","files.autoSave":"on","editor.fontSize":13,"files.exclude":{"**/.git":!0,"**/.svn":!0,"**/.hg":!0,"**/CVS":!0,"**/.DS_Store":!0,"node_modules/**":!0},"editor.fontFamily":"Fira Code, Arial, Consolas, 'Courier New', monospace","editor.fontLigatures":!0,"editor.tabSize":2,"editor.wordWrap":"on","editor.letterSpacing":.6,"editor.lineHeight":19,"editor.mouseWheelScrollSensitivity":1,"window.zoomLevel":.5,"zenMode.hideStatusBar":!1,"terminal.integrated.shell.windows":"C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe"}},"51ee":function(t,e,a){},"5f1f":function(t,e,a){"use strict";var n=a("51ee"),i=a.n(n);i.a},d470:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{on:{click:t.copy}},[t._v("\n\t"+t._s(t.buttonValue?t.buttonValue:"Kopiuj")+"\n\t"),t.textareaVisible?a("textarea",{staticStyle:{width:"0",height:"0",opacity:"0","pointer-events":"none",display:"block",border:"none"}},[t._v(t._s(t.copyValue))]):t._e()])},i=[],o=a("e3fd"),r={name:"CopyClipboardButton",components:{AndroidButton:o["a"]},props:{buttonValue:String,copyValue:String},data:function(){return{textareaVisible:!0}},methods:{textAreaChangeStatement:function(){this.textareaVisible=!this.textareaVisible},copy:function(t){var e=t.target;this.textAreaChangeStatement();var a=e.children[0];a.select(),document.execCommand("copy"),this.textAreaChangeStatement()}}},l=r,s=a("2877"),c=Object(s["a"])(l,n,i,!1,null,null,null);c.options.__file="index.vue";e["a"]=c.exports},e3fd:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"c-AndroidButton",on:{click:t.click}},[t._v("\n\t"+t._s(t.value?t.value:"Kliknij")+"\n\t"),t.effectOn?a("span",{staticClass:"effect",style:{top:t.top,left:t.left}}):t._e()])},i=[],o={name:"AndroidButton",props:{value:String},data:function(){return{effectOn:!1,top:0,left:0}},methods:{click:function(t){var e=this;this.effectOn||(this.top="".concat(t.layerY,"px"),this.left="".concat(t.layerX,"px"),this.effectOn=!0,setTimeout(function(){return e.effectOn=!1},500))}}},r=o,l=(a("fe94"),a("2877")),s=Object(l["a"])(r,n,i,!1,null,"3f7e645a",null);s.options.__file="index.vue";e["a"]=s.exports},ea1a:function(t,e,a){},f292:function(t){t.exports={snippets:{variables:{lang:"pl",locale:"pl-PL",charset:"UTF-8",indentation:"\t",newline:"\n"},html:{abbreviations:{"m-width":'<meta name="viewport" content="width=device-width, initial-scale=1.0"/>',"m-explorer":'<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />',"l-style":'<link rel="stylesheet" type="text/css" href="${1}"/>',script:'<script type="text/javascript"><\/script>',"l-script":'<script type="text/javascript" src="${1}"><\/script>',miniaturka:'<link rel="Shortcut icon" href="${1}" />',"html:5":"!!!+html[lang=${locale}]>(head>meta[charset=${charset}]+m-width+m-explorer+title{${1:Dokument}})+body"}},css:{abbreviations:{import:"@import url('${1:root.css}');","*":"*{\nmargin: 0;\npadding: 0;\nbox-sizing: border-box;\n}"}}}}},fe94:function(t,e,a){"use strict";var n=a("ea1a"),i=a.n(n);i.a}}]);
//# sourceMappingURL=settings.447cabfd.js.map