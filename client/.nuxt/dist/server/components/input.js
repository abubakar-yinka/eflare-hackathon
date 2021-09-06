exports.ids = [2];
exports.modules = {

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ff265334", content, true, context)
};

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_6b21e95e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_6b21e95e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_6b21e95e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_6b21e95e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_6b21e95e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Gothic+A1:300,300i,400,400i,500,500i,600,600i,700,700i|Martel:300,300i,400,400i,700,700i,900,900i|Work+Sans:600,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "label[data-v-6b21e95e]{color:#fff;font-size:1.2rem;font-weight:700}*[data-v-6b21e95e],label[data-v-6b21e95e]{font-family:\"Gothic A1\",sans-serif}input[data-v-6b21e95e]{background:#0a0912;border:1.3px solid #191931}.submit button[data-v-6b21e95e]{background:#191931;color:#fff;border:none}.submit button[data-v-6b21e95e]:hover{border:1px solid #fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Input.vue?vue&type=template&id=6b21e95e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"col-12 \" data-v-6b21e95e><div class=\"col-12 d-flex justify-content-center mt-4\" data-v-6b21e95e><div class=\"form-\ngroup col-4\" data-v-6b21e95e><label for data-v-6b21e95e>Dynamic Level</label> <input type readonly=\"readonly\""+(_vm._ssrAttr("value",(_vm.temp)))+" class=\"form-control\" data-v-6b21e95e></div> <div class=\"form-\ngroup col-4\" data-v-6b21e95e><label for data-v-6b21e95e>Liquid Volume</label> <input type readonly=\"readonly\""+(_vm._ssrAttr("value",(_vm.moisture)))+" class=\"form-control\" data-v-6b21e95e></div></div> <div class=\"col-12 d-flex justify-content-center mt-4\" data-v-6b21e95e><div class=\"form-\ngroup col-4\" data-v-6b21e95e><label for data-v-6b21e95e>Water Injection</label> <input type readonly=\"readonly\""+(_vm._ssrAttr("value",(_vm.water)))+" class=\"form-control\" data-v-6b21e95e></div> <div class=\"form-\ngroup col-4\" data-v-6b21e95e><label for data-v-6b21e95e>Pressure Levels</label> <input type readonly=\"readonly\""+(_vm._ssrAttr("value",(_vm.pressure)))+" class=\"form-control\" data-v-6b21e95e></div></div> <div class=\"col-12 d-flex justify-content-center mt-4\" data-v-6b21e95e><div class=\"form-\ngroup col-4\" data-v-6b21e95e><label for data-v-6b21e95e>Oil Level</label> <input type readonly=\"readonly\""+(_vm._ssrAttr("value",(_vm.oil)))+" class=\"form-control\" data-v-6b21e95e></div></div> <div class=\"col-12 d-flex justify-content-center mt-4\" data-v-6b21e95e><div class=\"form-\ngroup col-4\" data-v-6b21e95e><label for data-v-6b21e95e>Working Hours</label> <input type readonly=\"readonly\""+(_vm._ssrAttr("value",(_vm.working)))+" class=\"form-control\" data-v-6b21e95e></div> <div class=\"form-\ngroup col-4\" data-v-6b21e95e><label for data-v-6b21e95e>Water Rate</label> <input type readonly=\"readonly\""+(_vm._ssrAttr("value",(_vm.water_volume)))+" class=\"form-control\" data-v-6b21e95e></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Input.vue?vue&type=template&id=6b21e95e&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(27);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

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

/* harmony default export */ var Inputvue_type_script_lang_js_ = ({
  async mounted() {
    await this.fetchData();
  },

  data() {
    return {
      temp: 280,
      moisture: 70,
      injection: 500,
      pressure: 1130,
      gas: 300,
      water: 605,
      water_volume: 450,
      working: 22,
      oil: 100,
      data: []
    };
  },

  methods: {
    async fetchData() {
      external_axios_default.a.get('https://eflare-hackathon.vercel.app/autofill').then(response => {
        if (response.status == 200) {
          console.log(response.data[0]);
          this.data = response.data[0];
          this.temp = this.data.dynamic_level;
          this.moisture = this.data.vol_of_liquid;
          this.pressure = this.data.reservoir_pressure;
          this.gas = this.data.gas_volume;
          this.water = this.data.water_cut;
          this.water_volume = this.data.water_volume;
          this.working = this.data.working_hours;
          this.oil = this.data.oil_volume;
        }
      });
    },

    openSimulate() {
      this.$router.push({
        path: '/solution#calculator'
      });
    }

  }
});
// CONCATENATED MODULE: ./components/Input.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Inputvue_type_script_lang_js_ = (Inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Input.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6b21e95e",
  "6c3a7802"
  
)

/* harmony default export */ var Input = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Input: __webpack_require__(51).default})


/***/ })

};;
//# sourceMappingURL=input.js.map