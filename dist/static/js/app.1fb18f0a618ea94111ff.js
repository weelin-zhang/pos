webpackJsonp([1],{"3IoP":function(t,a,s){"use strict";function e(t){s("P69d")}var o=s("5zj3"),n=s.n(o),i=s("mOpv"),c=s("0HdQ"),l=e,d=c(n.a,i.a,!1,l,"data-v-10a367fc",null);a.a=d.exports},"4bvI":function(t,a,s){"use strict";function e(t){s("OdIy")}var o=s("eFsB"),n=s("Ju3U"),i=s("0HdQ"),c=e,l=i(o.a,n.a,!1,c,"data-v-073a1ab8",null);a.a=l.exports},"5zj3":function(t,a){},"8DB9":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("LeftNav"),t._v(" "),s("div",{staticClass:"main"},[s("router-view")],1)],1)},o=[],n={render:e,staticRenderFns:o};a.a=n},Czyj:function(t,a,s){"use strict";var e=s("3IoP");a.a={name:"app",components:{LeftNav:e.a}}},Ju3U:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"pos"},[s("el-row",[s("el-col",{staticClass:"pos-order",attrs:{span:7,id:"order-list"}},[s("el-tabs",{attrs:{type:"card"}},[s("el-tab-pane",{attrs:{label:"点餐"}},[s("el-table",{attrs:{width:"100%",data:t.tableData,border:""}},[s("el-table-column",{attrs:{prop:"goodsName",label:"商品名称",width:"120"}}),t._v(" "),s("el-table-column",{attrs:{prop:"count",label:"数量",width:"70"}}),t._v(" "),s("el-table-column",{attrs:{prop:"price",label:"金额",width:"90"}}),t._v(" "),s("el-table-column",{attrs:{label:"操作",width:"120",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(a){return[s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){t.handleDelete(a.$index,a.row)}}},[s("i",{staticClass:"el-icon-delete"})]),t._v(" "),s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){t.handleReduce(a.$index,a.row)}}},[s("i",{staticClass:"el-icon-minus"})]),t._v(" "),s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){t.handleAdd(a.$index,a.row)}}},[s("i",{staticClass:"el-icon-plus"})])]}}])})],1),t._v(" "),s("div",{staticClass:"total-div"},[s("span",[t._v("订单详情")]),t._v("数量: "+t._s(t.totalCount)+"   金额: ￥"+t._s(t.Sum)+"\n          ")]),t._v(" "),s("div",{staticClass:"div-btn"},[s("el-button",{attrs:{type:"warning"}},[t._v("挂单")]),t._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:t.clearAll}},[t._v("删除")]),t._v(" "),s("el-button",{attrs:{type:"success"},on:{click:t.checkOut}},[t._v("结账")])],1)],1),t._v(" "),s("el-tab-pane",{attrs:{label:"挂单"}},[t._v("挂单")]),t._v(" "),s("el-tab-pane",{attrs:{label:"外卖"}},[t._v("外卖")])],1)],1),t._v(" "),s("el-col",{attrs:{span:17,id:"goods-list"}},[s("div",{staticClass:"often-goods",attrs:{id:"abc"}},[s("div",{staticClass:"title"},[t._v("\n          常用商品\n        ")]),t._v(" "),s("div",{staticClass:"often-goods-lists"},[s("ul",t._l(t.oftenGoods,function(a,e){return s("li",{on:{click:function(s){t.addOrderList(a)}}},[s("span",[t._v(t._s(a.goodsName))]),t._v(" "),s("span",{staticClass:"price"},[t._v("￥"+t._s(a.price))])])}))])]),t._v(" "),s("div",{staticClass:"goods-type"},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"汉堡"}},[s("div",[s("ul",{staticClass:"cooklist"},t._l(t.type0Goods,function(a,e){return s("li",{on:{click:function(s){t.addOrderList(a)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:a.goodsImg}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(a.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(a.price))])])}))])]),t._v(" "),s("el-tab-pane",{attrs:{label:"小吃"}},[s("div",[s("ul",{staticClass:"cooklist"},t._l(t.type1Goods,function(a,e){return s("li",{on:{click:function(s){t.addOrderList(a)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:a.goodsImg}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(a.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(a.price))])])}))])]),t._v(" "),s("el-tab-pane",{attrs:{label:"饮料"}},[s("div",[s("ul",{staticClass:"cooklist"},t._l(t.type2Goods,function(a,e){return s("li",{on:{click:function(s){t.addOrderList(a)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:a.goodsImg}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(a.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(a.price))])])}))])]),t._v(" "),s("el-tab-pane",{attrs:{label:"套餐"}},[s("div",[s("ul",{staticClass:"cooklist"},t._l(t.type3Goods,function(a,e){return s("li",{on:{click:function(s){t.addOrderList(a)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:a.goodsImg}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(a.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(a.price))])])}))])])],1)],1)])],1)],1)},o=[],n={render:e,staticRenderFns:o};a.a=n},M93x:function(t,a,s){"use strict";function e(t){s("pnxu")}var o=s("Czyj"),n=s("8DB9"),i=s("0HdQ"),c=e,l=i(o.a,n.a,!1,c,null,null);a.a=l.exports},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("5vqR"),o=s("M93x"),n=s("YaEn"),i=s("0SyO"),c=s.n(i),l=s("dHzK");s.n(l);e.default.use(c.a),e.default.config.productionTip=!0,new e.default({el:"#app",router:n.a,template:"<App/>",components:{App:o.a}})},OdIy:function(t,a){},P69d:function(t,a){},YaEn:function(t,a,s){"use strict";var e=s("5vqR"),o=s("zO6J"),n=s("4bvI");e.default.use(o.a),a.a=new o.a({routes:[{path:"/",name:"pos",component:n.a}]})},dHzK:function(t,a){},eFsB:function(t,a,s){"use strict";var e=s("yEoQ"),o=s.n(e);a.a={name:"pos",created:function(){var t=this;o.a.get("http://jspang.com/DemoApi/oftenGoods.php").then(function(a){t.oftenGoods=a.data}).catch(function(t){console.log(t)}),o.a.get("http://jspang.com/DemoApi/typeGoods.php").then(function(a){t.type0Goods=a.data[0],t.type1Goods=a.data[1],t.type2Goods=a.data[2],t.type3Goods=a.data[3]}).catch(function(t){console.log(t)})},mounted:function(){var t=document.body.clientHeight;document.getElementById("order-list").style.height=t+"px",console.log(t)},data:function(){return{tableData:[],oftenGoods:[{goodId:1,goodsName:"鸡腿",price:10}],type0Goods:[],type1Goods:[],type2Goods:[],type3Goods:[]}},computed:{totalCount:function(){for(var t=0,a=0;a<this.tableData.length;a++)t+=this.tableData[a].count;return t},Sum:function(){for(var t=0,a=0;a<this.tableData.length;a++)t+=this.tableData[a].count*this.tableData[a].price;return t}},methods:{addOrderList:function(t){for(var a=!1,s=0;s<this.tableData.length;s++)this.tableData[s].goodsId==t.goodsId&&(a=!0);if(a){this.tableData.filter(function(a){return a.goodsId==t.goodsId})[0].count++}else{var e={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(e)}},handleDelete:function(t,a){this.tableData=this.tableData.filter(function(t){return t.goodsId!==a.goodsId})},handleReduce:function(t,a){a.count>0&&0==--a.count&&this.handleDelete(t,a)},handleAdd:function(t,a){a.count++},clearAll:function(){this.tableData=[]},checkOut:function(){0!=this.totalCount?(console.log("结账"),this.tableData=[],this.$message({message:"结账成功,thx",type:"success"})):this.$message.error("当前没商品")}}}},mOpv:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"left-nav"},[s("ul",[s("li",[s("i",{staticClass:"icon iconfont icon-goumai"}),t._v(" "),s("div",[t._v("\n        收银\n      ")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-31dianpu"}),t._v(" "),s("div",[t._v("\n        店铺\n      ")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-shipin"}),t._v(" "),s("div",[t._v("\n        商品\n      ")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-31wode"}),t._v(" "),s("div",[t._v("\n        会员\n      ")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-paixing"}),t._v(" "),s("div",[t._v("\n        统计\n      ")])])])])}],n={render:e,staticRenderFns:o};a.a=n},pnxu:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.1fb18f0a618ea94111ff.js.map