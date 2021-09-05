exports.ids = [4,1];
exports.modules = {

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f33c0fba", content, true, context)
};

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_style_index_0_id_cda94ba4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_style_index_0_id_cda94ba4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_style_index_0_id_cda94ba4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_style_index_0_id_cda94ba4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_style_index_0_id_cda94ba4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".over-loader[data-v-cda94ba4]{background:#180c2e;position:absolute;height:100vh;width:100%;top:0}button[data-v-cda94ba4]{border:2px solid purple;border-radius:5px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("55eb1b1e", content, true, context)
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Chart.vue?vue&type=template&id=cda94ba4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex justify-content-center"},[_vm._ssrNode("<div class=\"d-flex flex-column  shadow col-10 align-items-center\" style=\"overflow-y:0;\" data-v-cda94ba4>","</div>",[_vm._ssrNode("<div id=\"chart-container\" data-v-cda94ba4>","</div>",[_c('fusioncharts',{staticStyle:{"height":"30vh"},attrs:{"type":_vm.type,"width":_vm.width,"height":_vm.height,"dataformat":_vm.dataFormat,"dataSource":_vm.dataSource}})],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Chart.vue?vue&type=template&id=cda94ba4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Chart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const chartData = [{
  label: "Venezuela",
  value: "290"
}, {
  label: "Saudi",
  value: "260"
}, {
  label: "Canada",
  value: "180"
}, {
  label: "Iran",
  value: "140"
}, {
  label: "Russia",
  value: "115"
}, {
  label: "UAE",
  value: "100"
}, {
  label: "US",
  value: "30"
}, {
  label: "China",
  value: "30"
}]; // STEP 3: Configure your chart

const dataSource = {
  chart: {
    caption: "Countries With Most Oil Reserves [2017-18]",
    subcaption: "In MMbbl = One Million barrels",
    xaxisname: "Years",
    yaxisname: "Amount",
    numbersuffix: "K",
    theme: "fusion"
  },
  data: chartData
};
/* harmony default export */ var Chartvue_type_script_lang_js_ = ({
  mounted() {// setTimeout(() => {
    //    this.loading=false
    // }, 3000);
  },

  methods: {
    toggleState() {
      this.increase = false;
      this.decrease = true;
    },

    toggleIncrease() {
      this.increase = true;
      this.decrease = false;
    }

  },

  data() {
    return {
      // Preparing the chart data
      "type": "line",
      "renderAt": "chart-container",
      "width": "550",
      "height": "250",
      "dataFormat": "json",
      dataSource,
      loading: true,
      increase: true,
      decrease: false,
      showGraph: false
    };
  }

});
// CONCATENATED MODULE: ./components/Chart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Chartvue_type_script_lang_js_ = (Chartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Chart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(26)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Chartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cda94ba4",
  "cb482806"
  
)

/* harmony default export */ var Chart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Simulate_vue_vue_type_style_index_0_id_8d806376_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Simulate_vue_vue_type_style_index_0_id_8d806376_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Simulate_vue_vue_type_style_index_0_id_8d806376_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Simulate_vue_vue_type_style_index_0_id_8d806376_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Simulate_vue_vue_type_style_index_0_id_8d806376_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".btn--stroke[data-v-8d806376],button.btn--stroke[data-v-8d806376]{background:transparent!important;border:.2rem solid #fff;color:#fff}.btn--stroke[data-v-8d806376]:hover,button.btn--stroke[data-v-8d806376]:hover{background:#000!important;border:.2rem solid #000;color:#fff}*[data-v-8d806376]{margin:0;padding:0;box-sizing:border-box}.all[data-v-8d806376]{background:#0a0912;height:100vh}.display-card[data-v-8d806376]{background:#191931;height:25vh;border-radius:8px;color:#fff}.page-head[data-v-8d806376]{color:#fff}.chart[data-v-8d806376]{margin-top:10vh}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Simulate.vue?vue&type=template&id=8d806376&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"d-flex col-12  justify-content-around mt-4\" data-v-8d806376><div class=\"display-card col-3 shadow d-flex justify-content-center align-items-center flex-column\" style=\"color:#fff;\" data-v-8d806376><h6 data-v-8d806376>Revenue</h6> <p data-v-8d806376><span data-v-8d806376>$</span> <span style=\"font-size:3rem;\" data-v-8d806376>3000</span></p></div> <div class=\"display-card col-3 d-flex justify-content-center align-items-center flex-column\" data-v-8d806376><h6 data-v-8d806376>Estimated Output</h6> <p data-v-8d806376><span style=\"font-size:3rem;\" data-v-8d806376>3000</span><span data-v-8d806376>mscf</span></p></div> <div class=\"display-card col-3 d-flex justify-content-center align-items-center flex-column\" data-v-8d806376><h6 data-v-8d806376>Feasibility Score</h6> <p data-v-8d806376><span style=\"font-size:3rem;\" data-v-8d806376>9</span></p></div></div> "),_vm._ssrNode("<div class=\"chart shadow\" data-v-8d806376>","</div>",[_c('Chart')],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Simulate.vue?vue&type=template&id=8d806376&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Simulate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Simulatevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Simulate.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Simulatevue_type_script_lang_js_ = (Simulatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Simulate.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(46)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Simulatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8d806376",
  "75bae0d5"
  
)

/* harmony default export */ var Simulate = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Chart: __webpack_require__(33).default})


/***/ })

};;
//# sourceMappingURL=simulate.js.map