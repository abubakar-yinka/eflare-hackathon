(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{319:function(t,e,n){var content=n(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("f33c0fba",content,!0,{sourceMap:!1})},320:function(t,e,n){"use strict";n(319)},321:function(t,e,n){var r=n(56)(!1);r.push([t.i,".over-loader[data-v-cda94ba4]{background:#180c2e;position:absolute;height:100vh;width:100%;top:0}button[data-v-cda94ba4]{border:2px solid purple;border-radius:5px}",""]),t.exports=r},325:function(t,e,n){var content=n(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("55eb1b1e",content,!0,{sourceMap:!1})},326:function(t,e,n){"use strict";n.r(e);var r={chart:{caption:"Countries With Most Oil Reserves [2017-18]",subcaption:"In MMbbl = One Million barrels",xaxisname:"Years",yaxisname:"Amount",numbersuffix:"K",theme:"fusion"},data:[{label:"Venezuela",value:"290"},{label:"Saudi",value:"260"},{label:"Canada",value:"180"},{label:"Iran",value:"140"},{label:"Russia",value:"115"},{label:"UAE",value:"100"},{label:"US",value:"30"},{label:"China",value:"30"}]},o={mounted:function(){},methods:{toggleState:function(){this.increase=!1,this.decrease=!0},toggleIncrease:function(){this.increase=!0,this.decrease=!1}},data:function(){return{type:"line",renderAt:"chart-container",width:"550",height:"250",dataFormat:"json",dataSource:r,loading:!0,increase:!0,decrease:!1,showGraph:!1}}},l=(n(320),n(27)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content-center"},[n("div",{staticClass:"d-flex flex-column  shadow col-10 align-items-center",staticStyle:{"overflow-y":"0"}},[n("div",{attrs:{id:"chart-container"}},[n("fusioncharts",{staticStyle:{height:"30vh"},attrs:{type:t.type,width:t.width,height:t.height,dataformat:t.dataFormat,dataSource:t.dataSource}})],1)])])}),[],!1,null,"cda94ba4",null);e.default=component.exports},337:function(t,e,n){"use strict";n(325)},338:function(t,e,n){var r=n(56)(!1);r.push([t.i,".btn--stroke[data-v-8d806376],button.btn--stroke[data-v-8d806376]{background:transparent!important;border:.2rem solid #fff;color:#fff}.btn--stroke[data-v-8d806376]:hover,button.btn--stroke[data-v-8d806376]:hover{background:#000!important;border:.2rem solid #000;color:#fff}*[data-v-8d806376]{margin:0;padding:0;box-sizing:border-box}.all[data-v-8d806376]{background:#0a0912;height:100vh}.display-card[data-v-8d806376]{background:#191931;height:25vh;border-radius:8px;color:#fff}.page-head[data-v-8d806376]{color:#fff}.chart[data-v-8d806376]{margin-top:10vh}",""]),t.exports=r},342:function(t,e,n){"use strict";n.r(e);var r={},o=(n(337),n(27)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"chart shadow"},[n("Chart")],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex col-12  justify-content-around mt-4"},[n("div",{staticClass:"display-card col-3 shadow d-flex justify-content-center align-items-center flex-column",staticStyle:{color:"#fff"}},[n("h6",[t._v("Revenue")]),t._v(" "),n("p",[n("span",[t._v("$")]),t._v(" "),n("span",{staticStyle:{"font-size":"3rem"}},[t._v("3000")])])]),t._v(" "),n("div",{staticClass:"display-card col-3 d-flex justify-content-center align-items-center flex-column"},[n("h6",[t._v("Estimated Output")]),t._v(" "),n("p",[n("span",{staticStyle:{"font-size":"3rem"}},[t._v("3000")]),n("span",[t._v("mscf")])])]),t._v(" "),n("div",{staticClass:"display-card col-3 d-flex justify-content-center align-items-center flex-column"},[n("h6",[t._v("Feasibility Score")]),t._v(" "),n("p",[n("span",{staticStyle:{"font-size":"3rem"}},[t._v("9")])])])])}],!1,null,"8d806376",null);e.default=component.exports;installComponents(component,{Chart:n(326).default})}}]);