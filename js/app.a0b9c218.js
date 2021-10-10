(function(t){function e(e){for(var n,s,c=e[0],o=e[1],l=e[2],u=0,p=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,c=1;c<a.length;c++){var o=a[c];0!==i[o]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-shopping-cart/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",{staticClass:"header"},[a("div",{staticClass:"container"},[a("div",{staticClass:"nav"},[t._m(0),a("div",{staticClass:"cart"},[a("button",{staticClass:"btn cart-btn main-cart-btn",on:{click:function(e){t.showCartContent=!t.showCartContent}}},[a("span",[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:"30",height:"30"}},[a("path",{attrs:{d:"M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z"}}),a("circle",{attrs:{cx:"7",cy:"22",r:"2"}}),a("circle",{attrs:{cx:"17",cy:"22",r:"2"}})])]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.cartContent.length,expression:"cartContent.length"}],staticClass:"products-number"},[t._v(t._s(t.totalProductsNumber))])]),t.showCartContent?a("div",{staticClass:"cart-content"},[a("div",{staticClass:"cart-content-wrapper"},[t.cartContent.length?a("div",{staticClass:"cart-price-amount"},[a("span",[t._v("total amount: ")]),a("span",{staticClass:"total-amount"},[t._v(t._s(t.priceAmount))]),t._v("$ ")]):t._e(),t.cartContent.length?a("ul",{staticClass:"cart-content-list"},t._l(t.cartContent,(function(e){return a("li",{key:e.id,staticClass:"cart-item"},[a("div",{staticClass:"item-title"},[t._v(" "+t._s(e.name)+" "),a("span",{staticClass:"item-range"},[t._v(t._s(e.itemRange))])]),a("div",{staticClass:"info"},[a("div",{staticClass:"gender-price-info"},[a("span",{staticClass:"gender"},[t._v(t._s(e.gender))]),a("span",{staticClass:"price"},[t._v(t._s(e.price)+"$")])]),a("div",{staticClass:"delete-wrapper"},[a("button",{staticClass:"btn delete-btn",on:{click:function(a){return t.deleteFromCart(e)}}},[a("span",[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20"}},[a("g",{attrs:{id:"_01_align_center","data-name":"01 align center"}},[a("path",{attrs:{d:"M22,4H17V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V4H2V6H4V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2ZM9,2h6V4H9Zm9,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V6H18Z"}}),a("rect",{attrs:{x:"9",y:"10",width:"2",height:"8"}}),a("rect",{attrs:{x:"13",y:"10",width:"2",height:"8"}})])])])])])])])})),0):a("div",{staticClass:"blank-cart-message"},[t._v(" Nothing here yet ")])])]):t._e()])])])]),a("main",{staticClass:"main"},[a("div",{staticClass:"container"},[a("div",{staticClass:"products",attrs:{id:"productList"}},t._l(t.products,(function(e){return a("div",{key:e.id,staticClass:"product-item"},[a("div",{staticClass:"title"},[t._v(t._s(e.name))]),a("div",{staticClass:"description"},[t._v(t._s(e.description))]),a("div",{staticClass:"info"},[a("div",{staticClass:"gender-price-info"},[a("span",{staticClass:"gender"},[t._v(t._s(e.gender))]),a("span",{staticClass:"price"},[t._v(t._s(e.price)+"$")])]),a("div",{staticClass:"product-actions"},[a("div",{staticClass:"product-range"},[a("span",{staticClass:"total-range"},[t._v(t._s(0!=e.itemRange?e.itemRange:""))]),a("button",{staticClass:"btn enlarge-range",on:{click:function(a){return t.enlargeRange(e)}}},[t._v(" + ")]),a("button",{staticClass:"btn shrink-range",on:{click:function(a){return t.shrinkRange(e)}}},[t._v(" - ")])]),a("div",{staticClass:"add-to-cart-wrapper",attrs:{id:"addBtnWrapper"}},[a("button",{staticClass:"btn add-to-cart-btn",on:{click:function(a){return t.addingToCart(e)}}},[a("span",[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:"20",height:"20"}},[a("circle",{attrs:{cx:"7",cy:"22",r:"2"}}),a("circle",{attrs:{cx:"17",cy:"22",r:"2"}}),a("path",{attrs:{d:"M23,3H21V1a1,1,0,0,0-2,0V3H17a1,1,0,0,0,0,2h2V7a1,1,0,0,0,2,0V5h2a1,1,0,0,0,0-2Z"}}),a("path",{attrs:{d:"M21.771,9.726a.994.994,0,0,0-1.162.806A3,3,0,0,1,17.657,13H5.418l-.94-8H13a1,1,0,0,0,0-2H4.242L4.2,2.648A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.829-2H17.657a5,5,0,0,0,4.921-4.112A1,1,0,0,0,21.771,9.726Z"}})])])])])])])])})),0)])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"nav-list"},[a("li",{staticClass:"list-item"},[a("span",{staticClass:"nav-item-link"},[t._v("Home")])]),a("li",{staticClass:"list-item"},[a("span",{staticClass:"nav-item-link current-page-link"},[t._v("Products")])])])}],s=(a("a434"),a("caad"),a("2532"),[{id:0,name:"coat",description:"Fall lightweight coat with a warm lining, belt and insulated collar.",gender:"male",price:99,itemRange:0},{id:1,name:"raincoat",description:"Lightweight waterproof raincoat with hood. Protects against medium rain and winds.",gender:"unisex",price:39,itemRange:0},{id:2,name:"gloves",description:"Light warm gloves.",gender:"female",price:80,itemRange:0},{id:3,name:"hat",description:"Big brown hat.",gender:"female",price:90,itemRange:0},{id:4,name:"boots",description:"Hiking shoes. Suitable for long hikes and protects your feet from getting wet.",gender:"male",price:59,itemRange:0},{id:5,name:"jacket",description:"Insulated casual jacket.",gender:"female",price:75,itemRange:0},{id:6,name:"jeans",description:"Lightweight navy blue jeans for summer.",gender:"male",price:39,itemRange:0}]),c={data:function(){return{cartContent:[],showCartContent:!1,products:s,totalProductsNumber:0,priceAmount:0}},methods:{addingToCart:function(t){var e=event.target.closest(".add-to-cart-wrapper");return e.classList.add("_btn-hover"),this.totalProductsNumber++,this.priceAmount+=t.price,t.itemRange++,this.cartContent.push(t)},deleteFromCart:function(t){var e=document.querySelector("#productList").childNodes,a=e[t.id],n=a.querySelector("#addBtnWrapper");n.classList.remove("_btn-hover");var i=this.cartContent.indexOf(t);return this.totalProductsNumber-=t.itemRange,this.priceAmount-=t.price*t.itemRange,t.itemRange=0,this.cartContent.splice(i,1)},enlargeRange:function(t){if(!this.cartContent.includes(t)){var e=event.target.closest(".product-actions"),a=e.querySelector(".add-to-cart-wrapper");a.classList.add("_btn-hover"),this.cartContent.push(t)}return this.totalProductsNumber++,this.priceAmount+=t.price,t.itemRange++},shrinkRange:function(t){if(t.itemRange-1!==0&&0!==t.itemRange&&this.cartContent.includes(t))return this.totalProductsNumber--,this.priceAmount-=t.price,t.itemRange--}}},o=c,l=(a("5c0b"),a("2877")),d=Object(l["a"])(o,i,r,!1,null,null,null),u=d.exports;a("7b4f");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"7b4f":function(t,e,a){},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.a0b9c218.js.map