webpackJsonp([1],{"/Aas":function(t,s){},Gb4p:function(t,s,a){t.exports=a.p+"static/img/toilet.2ae112b.jpg"},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("header",[a("nav",{staticClass:"navbar is-info",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("div",{staticClass:"hero-body"},[a("h1",{staticClass:"title"},[t._v(t._s(t.title))])])])]),t._v(" "),a("nav",{staticClass:"panel"},[a("p",{staticClass:"panel-tabs"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),a("router-link",{attrs:{to:"howto"}},[t._v("How to")]),t._v(" "),a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])]),t._v(" "),a("router-view"),t._v(" "),a("footer",{staticClass:"footer"},[a("div",{staticClass:"content has-text-centered"},[a("p",[a("strong",[t._v(t._s(t.title))]),t._v(" by "),a("a",{attrs:{href:"https://kaisportfolio.work/"}},[t._v("Kai Adachi")])])])])],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App",data:function(){return{title:"スクレイプくん"}}},i,!1,function(t){a("ukSJ")},null,null).exports,o=a("/ocq"),r=a("mtWM"),c=a.n(r),l={delimiters:["[[","]]"],data:function(){return{results:[],cssSelector:"",formData:{url:"",cssSelectors:[]}}},methods:{submit:function(){var t=this;c.a.post("/api",this.formData).then(function(s){t.results=s.data,console.log(t.results)}).catch(function(t){console.log(t)})},downloadCSV:function(){var t="\ufeff";this.results.forEach(function(s){s.forEach(function(s){t+=s+","}),t+="\n"});var s=new Blob([t],{type:"text/csv"}),a=document.createElement("a");a.href=window.URL.createObjectURL(s),a.download="Result.csv",a.click()},addCss:function(){var t=this.cssSelector;this.formData.cssSelectors.push(t),this.cssSelector=""}}},u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("form",{staticClass:"box",on:{submit:function(s){return s.preventDefault(),t.submit(s)}}},[a("span",{staticClass:"tag"},[t._v("\n\t\t\t入力情報\n\t\t")]),t._v(" "),a("div",{staticClass:"box"},[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.url,expression:"formData.url"}],staticClass:"input is-primary",attrs:{type:"text",placeholder:"URL"},domProps:{value:t.formData.url},on:{input:function(s){s.target.composing||t.$set(t.formData,"url",s.target.value)}}})])]),t._v(" "),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.cssSelector,expression:"cssSelector"}],staticClass:"input is-primary",attrs:{type:"text",placeholder:"CSSセレクタ"},domProps:{value:t.cssSelector},on:{input:function(s){s.target.composing||(t.cssSelector=s.target.value)}}})])]),t._v(" "),a("p",[t._v(t._s(t.cssSelector))]),t._v("\n\n\t\t\t"),a("button",{staticClass:"button is-primary is-outlined is-small",on:{click:function(s){s.preventDefault(),t.addCss()}}},[t._v("追加")])]),t._v(" "),a("span",{staticClass:"tag"},[t._v("\n\t\t\t出力情報\n\t\t")]),t._v(" "),a("div",{staticClass:"box"},[a("p",[t._v("URL: "),a("strong",[t._v(t._s(t.formData.url))])]),t._v(" "),a("p",[t._v("CSSセレクタ: "),a("strong",[t._v(t._s(t.formData.cssSelectors))])])]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"box"},[a("h2",[t._v("Results")]),t._v(" "),a("ul",t._l(t.results,function(s){return a("li",[t._v(t._s(s))])}))]),t._v(" "),a("button",{staticClass:"button is-primary is-outlined",on:{click:function(s){return s.preventDefault(),t.downloadCSV(s)}}},[t._m(1),t._v("\n\t\t\tcsvダウンロード\n\t\t")])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"has-text-centered go-crawl"},[s("input",{staticClass:"button is-success is-rounded is-medium",attrs:{type:"submit",value:"Go Crawl！"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-download"})])}]};var v=a("VU/8")(l,u,!1,function(t){a("X3vb")},"data-v-5a917e3c",null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"box"},[e("span",{staticClass:"tag"},[t._v("\n\t\t詳細情報\n\t")]),t._v(" "),e("div",{staticClass:"box"},[e("article",{staticClass:"media"},[e("figure",{staticClass:"media-left"},[e("p",{staticClass:"image is-128x128"},[e("img",{staticClass:"is-rounded",attrs:{src:a("a9a6"),alt:"image"}})])]),t._v(" "),e("div",{staticClass:"media-content"},[e("div",{staticClass:"content"},[e("p",[t._v("作者: 足立海")]),t._v(" "),e("p",[t._v("Backend: Flask")]),t._v(" "),e("p",[t._v("Frontend: Vue.js")]),t._v(" "),e("p",[t._v("CSSフレームワーク: "),e("a",{attrs:{href:"https://bulma.io/"}},[t._v("Bulma")])]),t._v(" "),e("p",[t._v("ソースコード: "),e("a",{attrs:{href:"https://github.com/kaiadachi/flask_vue"}},[t._v("Github")])]),t._v(" "),e("p",[t._v("自己紹介: "),e("a",{attrs:{href:"https://kaisportfolio.work"}},[t._v("Kaisportfolio")])])])]),t._v(" "),e("div",{staticClass:"dami"},[e("img",{attrs:{src:a("Gb4p"),alt:"image"}})])])])])}]};var _=a("VU/8")(null,p,!1,function(t){a("lJ32")},"data-v-78cb84e2",null).exports,d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"box"},[a("div",{staticClass:"notification is-primary"},[a("p",[t._v("\n\t\t\t1. 入力情報にスクレイピング先のURLと、CSSセレクタを書き込む。\n\t\t\tパスの指定は、CSSセレクタのみの対応である。CSSセレクタは複数指定することができ、追加ボタンより追加が可能。\n\t\t")])]),t._v(" "),a("div",{staticClass:"notification is-link"},[t._v("\n\t\t2. 出力情報を確認し、Go Crawlボタンを押す。\n\t")]),t._v(" "),a("div",{staticClass:"notification is-info"},[a("p",[t._v("3. Resultsに結果が吐き出されるので、良さそうであればCSVダウンロードボタンよりダウンロードを行う。")])]),t._v(" "),a("div",{staticClass:"notification is-warning"},[a("p",[t._v("※注意点")]),t._v(" "),a("p",[t._v("CSSセレクタを検証ツールなどでコピペしてくるとき、nth-childなどchild要素を持ったものは、nth-of-typeに変更すること。")]),t._v(" "),a("p",[t._v("例: nth-child(3) → nth-of-type(3)")])])])}]},f=a("VU/8")(null,d,!1,null,null,null).exports;e.a.use(o.a);var m=new o.a({mode:"history",routes:[{path:"/",name:"Home",component:v},{path:"/about",name:"About",component:_},{path:"/howto",name:"Howto",component:f}]});a("cwFx"),a("/Aas");e.a.config.productionTip=!1,new e.a({el:"#app",router:m,components:{App:n},template:"<App/>"})},X3vb:function(t,s){},a9a6:function(t,s,a){t.exports=a.p+"static/img/me.e4916b3.jpg"},cwFx:function(t,s){},lJ32:function(t,s){},ukSJ:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.ec3cc7786aac7c245969.js.map