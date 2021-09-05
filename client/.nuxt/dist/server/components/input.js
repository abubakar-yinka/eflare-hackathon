exports.ids = [2];
exports.modules = {

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2ff2ea74", content, true, context)
};

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_3472e70c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_3472e70c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_3472e70c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_3472e70c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_3472e70c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Gothic+A1:300,300i,400,400i,500,500i,600,600i,700,700i|Martel:300,300i,400,400i,700,700i,900,900i|Work+Sans:600,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "label[data-v-3472e70c]{color:#fff;font-size:1.2rem;font-weight:700}*[data-v-3472e70c],label[data-v-3472e70c]{font-family:\"Gothic A1\",sans-serif}input[data-v-3472e70c]{background:#0a0912;border:1.3px solid #191931}.submit button[data-v-3472e70c]{background:#191931;color:#fff;border:none}.submit button[data-v-3472e70c]:hover{border:1px solid #fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Input.vue?vue&type=template&id=3472e70c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"col-12 \" data-v-3472e70c><div class=\"col-12 d-flex justify-content-center mt-4\" data-v-3472e70c><div class=\"form-\ngroup col-4\" data-v-3472e70c><label for data-v-3472e70c>Temperature</label> <input type class=\"form-control\" data-v-3472e70c></div> <div class=\"form-\ngroup col-4\" data-v-3472e70c><label for data-v-3472e70c>Moisture Level</label> <input type class=\"form-control\" data-v-3472e70c></div></div> <div class=\"col-12 d-flex justify-content-center mt-4\" data-v-3472e70c><div class=\"form-\ngroup col-4\" data-v-3472e70c><label for data-v-3472e70c>Water Injection</label> <input type class=\"form-control\" data-v-3472e70c></div> <div class=\"form-\ngroup col-4\" data-v-3472e70c><label for data-v-3472e70c>Pressure Levels</label> <input type class=\"form-control\" data-v-3472e70c></div></div> <div class=\"col-12 d-flex justify-content-center mt-4\" data-v-3472e70c><div class=\"form-\ngroup col-4\" data-v-3472e70c><label for data-v-3472e70c>Gas Flow Rate</label> <input type class=\"form-control\" data-v-3472e70c></div> <div class=\"form-\ngroup col-4\" data-v-3472e70c><label for data-v-3472e70c>Gas Injection</label> <input type class=\"form-control\" data-v-3472e70c></div></div> <div class=\"col-12 d-flex justify-content-center mt-4\" data-v-3472e70c><div class=\"form-\ngroup col-4\" data-v-3472e70c><label for data-v-3472e70c>Number of wells</label> <input type class=\"form-control\" data-v-3472e70c></div> <div class=\"form-\ngroup col-4\" data-v-3472e70c><label for data-v-3472e70c>Water Rate</label> <input type class=\"form-control\" data-v-3472e70c></div></div></div> <div class=\"submit col-lg-12 d-flex justify-content-center mt-4\" data-v-3472e70c><button type=\"submit\" class=\"col-6 mt-2 py-2 font-weight-bold\" data-v-3472e70c>Simulate</button></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Input.vue?vue&type=template&id=3472e70c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Input.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Inputvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Input.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Inputvue_type_script_lang_js_ = (Inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Input.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3472e70c",
  "bc4cd42e"
  
)

/* harmony default export */ var Input = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Input: __webpack_require__(48).default})


/***/ })

};;
//# sourceMappingURL=input.js.map