/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Airco/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ "0a48":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0a4f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XLabel_vue_vue_type_style_index_0_id_f327c934_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ded8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XLabel_vue_vue_type_style_index_0_id_f327c934_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XLabel_vue_vue_type_style_index_0_id_f327c934_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0c31":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie1_vue_vue_type_style_index_0_id_3100e91a_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7d60");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie1_vue_vue_type_style_index_0_id_3100e91a_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie1_vue_vue_type_style_index_0_id_3100e91a_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "183d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2182":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoNlAdviesAirco_vue_vue_type_style_index_0_id_611db6e4_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0cfb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoNlAdviesAirco_vue_vue_type_style_index_0_id_611db6e4_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoNlAdviesAirco_vue_vue_type_style_index_0_id_611db6e4_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2522":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame6_vue_vue_type_style_index_0_id_0437f774_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("601a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame6_vue_vue_type_style_index_0_id_0437f774_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame6_vue_vue_type_style_index_0_id_0437f774_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "260e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2f05":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XButton2_vue_vue_type_style_index_0_id_d3548d44_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("260e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XButton2_vue_vue_type_style_index_0_id_d3548d44_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XButton2_vue_vue_type_style_index_0_id_d3548d44_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "34fe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vraag2_vue_vue_type_style_index_0_id_4fcac34d_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dfea");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vraag2_vue_vue_type_style_index_0_id_4fcac34d_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vraag2_vue_vue_type_style_index_0_id_4fcac34d_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "37a1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3f2d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vraag1_vue_vue_type_style_index_0_id_c1ee3734_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("91f5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vraag1_vue_vue_type_style_index_0_id_c1ee3734_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vraag1_vue_vue_type_style_index_0_id_c1ee3734_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "43e3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "48bf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/vraag1-afbeelding.4f37bb22.png";

/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=317579e4
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('router-view');
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=317579e4

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js
/* harmony default export */ var Appvue_type_script_lang_js = ({
  name: "App"
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 /* harmony default export */ var src_Appvue_type_script_lang_js = (Appvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CampagneStart.vue?vue&type=template&id=420354b8
var CampagneStartvue_type_template_id_420354b8_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-center-horizontal"
  }, [_c('div', {
    staticClass: "campagne-start screen"
  }, [_c('div', {
    staticClass: "navbar"
  }, [_c('div', {
    staticClass: "container-links"
  }, [_c('div', {
    staticClass: "container-advies-logo"
  }, [_c('logo-nl-advies-airco', {
    attrs: {
      "nederlandsadviesNl": _vm.logoNLAdviesAircoProps.nederlandsadviesNl,
      "airconditioning": _vm.logoNLAdviesAircoProps.airconditioning
    }
  })], 1)]), _c('div', {
    staticClass: "container-rechts"
  }, [_c('div', {
    staticClass: "container-tekst-rechts"
  }, [_c('span', {
    staticClass: "tekst-zwart-navbar"
  }, [_vm._v(_vm._s(_vm.spanText1))]), _c('span', {
    staticClass: "tekst-geel-navbar"
  }, [_vm._v(_vm._s(_vm.spanText2))])])])]), _c('div', {
    staticClass: "container-sectie1"
  }, [_c('div', {
    staticClass: "overlap-group6",
    style: {
      'background-image': 'url(' + _vm.overlapGroup6 + ')'
    }
  }, [_c('img', {
    staticClass: "layer_1",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/layer-1.svg",
      "alt": "Layer_1"
    }
  }), _c('div', {
    staticClass: "frame-13"
  }, [_vm._m(0), _vm._m(1), _c('div', {
    staticClass: "frame-14"
  }, [_c('div', {
    staticClass: "frame-20"
  }, [_c('label', {
    staticClass: "postcode-label",
    attrs: {
      "for": "postcode-input"
    }
  }), _c('input', {
    staticClass: "postcode-input",
    attrs: {
      "id": "postcode-input",
      "type": "text",
      "placeholder": "Postcode"
    }
  }), _c('x-button', {
    attrs: {
      "controleer": _vm.xButtonProps.controleer
    }
  })], 1), _c('div', {
    staticClass: "klaar-binnen-1-minuut valign-text-bottom label-text"
  }, [_vm._v("Klaar binnen 1 minuut")])])]), _c('div', {
    staticClass: "overlap-group"
  }, [_c('p', {
    staticClass: "bespaar-tot-40-op-de-aanschafprijs valign-text-bottom catamaran-bold-supernova-22px",
    domProps: {
      "innerHTML": _vm._s(_vm.bespaarTot40OpDeAanschafprijs)
    }
  })])])]), _c('div', {
    staticClass: "frame-26"
  }, [_c('div', {
    staticClass: "nederlandsadviesnl valign-text-bottom label-text"
  }, [_vm._v(_vm._s(_vm.nederlandsadviesNl))]), _c('div', {
    staticClass: "hoe-werkt-het valign-text-bottom"
  }, [_vm._v(_vm._s(_vm.hoeWerktHet))])]), _c('div', {
    staticClass: "overlap-group-container"
  }, [_c('div', {
    staticClass: "overlap-group7"
  }, [_c('div', {
    staticClass: "rectangle"
  }), _c('frame6', {
    attrs: {
      "stap1": _vm.frame61Props.stap1,
      "controleerOfWijAc": _vm.frame61Props.controleerOfWijAc
    }
  }), _vm._m(2)], 1), _c('div', {
    staticClass: "overlap-group3"
  }, [_c('div', {
    staticClass: "rectangle"
  }), _c('group4'), _c('frame6', {
    attrs: {
      "stap1": _vm.frame62Props.stap1,
      "controleerOfWijAc": _vm.frame62Props.controleerOfWijAc,
      "className": _vm.frame62Props.className
    }
  })], 1), _c('div', {
    staticClass: "overlap-group5"
  }, [_c('div', {
    staticClass: "rectangle"
  }), _c('group4', {
    attrs: {
      "className": _vm.group4Props.className
    }
  }), _c('div', {
    staticClass: "frame-28"
  }, [_c('div', {
    staticClass: "stap-3 valign-text-bottom large-title"
  }, [_vm._v(_vm._s(_vm.stap3))]), _c('p', {
    staticClass: "onze-vakmensen-geven valign-text-bottom body-text"
  }, [_vm._v(_vm._s(_vm.onzeVakmensenGeven))])])], 1)]), _c('div', {
    staticClass: "overlap-group4"
  }, [_c('div', {
    staticClass: "frame-22"
  }, [_c('div', {
    staticClass: "frame"
  }, [_c('div', {
    staticClass: "waarom-airconditioning valign-text-bottom"
  }, [_vm._v(_vm._s(_vm.waaromAirconditioning))])]), _c('div', {
    staticClass: "frame-22-item valign-text-bottom catamaran-bold-white-22px"
  }, [_vm._v(_vm._s(_vm.airconditioningHee))]), _c('div', {
    staticClass: "frame-29"
  }, [_c('div', {
    staticClass: "frame-1"
  }, [_c('img', {
    staticClass: "small-icons",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/small-icons-3.svg",
      "alt": "Small icons"
    }
  }), _c('div', {
    staticClass: "verbeterde-luchtkwaliteit valign-text-middle catamaran-bold-white-22px"
  }, [_vm._v(" " + _vm._s(_vm.verbeterdeLuchtkwaliteit) + " ")])]), _c('div', {
    staticClass: "frame-1"
  }, [_c('img', {
    staticClass: "small-icons",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/small-icons-3.svg",
      "alt": "Small icons"
    }
  }), _c('div', {
    staticClass: "betere-slaapkwaliteit valign-text-middle catamaran-bold-white-22px"
  }, [_vm._v(" " + _vm._s(_vm.betereSlaapkwaliteit) + " ")])]), _c('div', {
    staticClass: "frame-1"
  }, [_c('img', {
    staticClass: "small-icons",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/small-icons-3.svg",
      "alt": "Small icons"
    }
  }), _c('p', {
    staticClass: "geluidsstil-de-spli valign-text-middle catamaran-bold-white-22px"
  }, [_vm._v(_vm._s(_vm.geluidsstilDeSpli))])])]), _c('p', {
    staticClass: "frame-22-item valign-text-bottom catamaran-bold-white-22px"
  }, [_vm._v(_vm._s(_vm.bovendienIsEenAir))])]), _c('div', {
    staticClass: "overlap-group9"
  }, [_c('img', {
    staticClass: "rectangle-5",
    attrs: {
      "src": _vm.rectangle5,
      "alt": "Rectangle 5"
    }
  }), _c('img', {
    staticClass: "rectangle-6",
    attrs: {
      "src": _vm.rectangle6,
      "alt": "Rectangle 6"
    }
  }), _c('x-label', {
    attrs: {
      "text1": _vm.xLabelProps.text1,
      "mensenGingenJeVoor": _vm.xLabelProps.mensenGingenJeVoor
    }
  })], 1)]), _c('div', {
    staticClass: "frame-24"
  }, [_c('div', {
    staticClass: "frame-15"
  }, [_c('img', {
    staticClass: "arrows",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/arrows.svg",
      "alt": "Arrows"
    }
  }), _c('p', {
    staticClass: "controleer-of-wij-ac valign-text-bottom"
  }, [_vm._v(_vm._s(_vm.controleerOfWijAc))])]), _c('div', {
    staticClass: "frame-19"
  }, [_vm._m(3), _c('x-button2', {
    attrs: {
      "controleer": _vm.xButton2Props.controleer
    }
  })], 1)]), _c('p', {
    staticClass: "nederlandsadviesn valign-text-bottom"
  }, [_vm._v(_vm._s(_vm.nederlandsadviesN))])])]);
};
var CampagneStartvue_type_template_id_420354b8_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('h1', {
    staticClass: "hou-je-huis-koel-met-airconditioning valign-text-bottom large-title-capitals"
  }, [_c('span', [_c('span', {
    staticClass: "span0-1 large-title-capitals"
  }, [_vm._v("Hou je huis koel met"), _c('br')]), _c('span', {
    staticClass: "span1-1 large-title-capitals"
  }, [_vm._v("airconditioning")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "frame-11 catamaran-bold-white-22px"
  }, [_c('p', {
    staticClass: "doe-de-woningscan-en-check valign-text-bottom"
  }, [_vm._v("Doe de woningscan en check:")]), _c('div', {
    staticClass: "frame"
  }, [_c('div', {
    staticClass: "frame-1"
  }, [_c('img', {
    staticClass: "small-icons",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/small-icons.svg",
      "alt": "Small icons"
    }
  }), _c('p', {
    staticClass: "hoeveel-jij-kan-besp valign-text-middle catamaran-bold-white-22px"
  }, [_vm._v(" Hoeveel jij kan besparen op airconditioning;")])]), _c('div', {
    staticClass: "frame-1"
  }, [_c('img', {
    staticClass: "small-icons",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/small-icons.svg",
      "alt": "Small icons"
    }
  }), _c('p', {
    staticClass: "de-best-beschikbare valign-text-middle catamaran-bold-white-22px"
  }, [_vm._v("De best beschikbare offertes voor jouw woning;")])]), _c('div', {
    staticClass: "frame-1"
  }, [_c('img', {
    staticClass: "small-icons",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/small-icons.svg",
      "alt": "Small icons"
    }
  }), _c('p', {
    staticClass: "de-juiste-specialist valign-text-middle catamaran-bold-white-22px"
  }, [_vm._v("De juiste specialisten voor gratis & vrijblijvend advies;")])])]), _c('p', {
    staticClass: "controleer-nu-of-wij valign-text-bottom"
  }, [_vm._v("Controleer nu of wij actief zijn in jouw regio:")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "group-3"
  }, [_c('img', {
    staticClass: "file-edit",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/file--edit.svg",
      "alt": "File, edit"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "frame-18"
  }, [_c('label', {
    staticClass: "postcode-label",
    attrs: {
      "for": "postcode-input"
    }
  }), _c('input', {
    staticClass: "postcode-input",
    attrs: {
      "id": "postcode-input",
      "type": "text",
      "placeholder": "Postcode"
    }
  })]);
}];

// CONCATENATED MODULE: ./src/components/CampagneStart.vue?vue&type=template&id=420354b8

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LogoNlAdviesAirco.vue?vue&type=template&id=611db6e4
var LogoNlAdviesAircovue_type_template_id_611db6e4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "logo-nl-advies-airco"
  }, [_c('img', {
    staticClass: "logo-icon",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/logo-icon.svg",
      "alt": "Logo icon"
    }
  }), _c('div', {
    staticClass: "overlap-group1"
  }, [_c('div', {
    staticClass: "nederlandsadviesnl-1 valign-text-middle large-title"
  }, [_vm._v(_vm._s(_vm.nederlandsadviesNl))]), _c('div', {
    staticClass: "airconditioning valign-text-bottom"
  }, [_vm._v(_vm._s(_vm.airconditioning))])])]);
};
var LogoNlAdviesAircovue_type_template_id_611db6e4_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/LogoNlAdviesAirco.vue?vue&type=template&id=611db6e4

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LogoNlAdviesAirco.vue?vue&type=script&lang=js
/* harmony default export */ var LogoNlAdviesAircovue_type_script_lang_js = ({
  name: "LogoNlAdviesAirco",
  props: ["nederlandsadviesNl", "airconditioning"]
});
// CONCATENATED MODULE: ./src/components/LogoNlAdviesAirco.vue?vue&type=script&lang=js
 /* harmony default export */ var components_LogoNlAdviesAircovue_type_script_lang_js = (LogoNlAdviesAircovue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/LogoNlAdviesAirco.vue?vue&type=style&index=0&id=611db6e4&prod&lang=sass
var LogoNlAdviesAircovue_type_style_index_0_id_611db6e4_prod_lang_sass = __webpack_require__("2182");

// CONCATENATED MODULE: ./src/components/LogoNlAdviesAirco.vue






/* normalize component */

var LogoNlAdviesAirco_component = Object(componentNormalizer["a" /* default */])(
  components_LogoNlAdviesAircovue_type_script_lang_js,
  LogoNlAdviesAircovue_type_template_id_611db6e4_render,
  LogoNlAdviesAircovue_type_template_id_611db6e4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LogoNlAdviesAirco = (LogoNlAdviesAirco_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/XButton.vue?vue&type=template&id=bb0dea38
var XButtonvue_type_template_id_bb0dea38_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('router-link', {
    attrs: {
      "to": "/vraag1"
    }
  }, [_c('div', {
    staticClass: "button"
  }, [_c('div', {
    staticClass: "controleer valign-text-bottom"
  }, [_vm._v(_vm._s(_vm.controleer))])])]);
};
var XButtonvue_type_template_id_bb0dea38_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/XButton.vue?vue&type=template&id=bb0dea38

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/XButton.vue?vue&type=script&lang=js
/* harmony default export */ var XButtonvue_type_script_lang_js = ({
  name: "XButton",
  props: ["controleer"]
});
// CONCATENATED MODULE: ./src/components/XButton.vue?vue&type=script&lang=js
 /* harmony default export */ var components_XButtonvue_type_script_lang_js = (XButtonvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/XButton.vue?vue&type=style&index=0&id=bb0dea38&prod&lang=sass
var XButtonvue_type_style_index_0_id_bb0dea38_prod_lang_sass = __webpack_require__("8f83");

// CONCATENATED MODULE: ./src/components/XButton.vue






/* normalize component */

var XButton_component = Object(componentNormalizer["a" /* default */])(
  components_XButtonvue_type_script_lang_js,
  XButtonvue_type_template_id_bb0dea38_render,
  XButtonvue_type_template_id_bb0dea38_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var XButton = (XButton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Frame6.vue?vue&type=template&id=0437f774
var Frame6vue_type_template_id_0437f774_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: [`frame-6`, _vm.className || ``]
  }, [_c('div', {
    staticClass: "stap valign-text-bottom large-title"
  }, [_vm._v(_vm._s(_vm.stap1))]), _c('p', {
    staticClass: "controleer-of-wij-ac-1 valign-text-bottom body-text"
  }, [_vm._v(_vm._s(_vm.controleerOfWijAc))])]);
};
var Frame6vue_type_template_id_0437f774_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Frame6.vue?vue&type=template&id=0437f774

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Frame6.vue?vue&type=script&lang=js
/* harmony default export */ var Frame6vue_type_script_lang_js = ({
  name: "Frame6",
  props: ["stap1", "controleerOfWijAc", "className"]
});
// CONCATENATED MODULE: ./src/components/Frame6.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Frame6vue_type_script_lang_js = (Frame6vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Frame6.vue?vue&type=style&index=0&id=0437f774&prod&lang=sass
var Frame6vue_type_style_index_0_id_0437f774_prod_lang_sass = __webpack_require__("2522");

// CONCATENATED MODULE: ./src/components/Frame6.vue






/* normalize component */

var Frame6_component = Object(componentNormalizer["a" /* default */])(
  components_Frame6vue_type_script_lang_js,
  Frame6vue_type_template_id_0437f774_render,
  Frame6vue_type_template_id_0437f774_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Frame6 = (Frame6_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Group4.vue?vue&type=template&id=7cdfe998
var Group4vue_type_template_id_7cdfe998_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: [`group-4`, _vm.className || ``]
  }, [_c('img', {
    staticClass: "file",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/file--text--check.svg",
      "alt": "File, text, check"
    }
  })]);
};
var Group4vue_type_template_id_7cdfe998_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Group4.vue?vue&type=template&id=7cdfe998

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Group4.vue?vue&type=script&lang=js
/* harmony default export */ var Group4vue_type_script_lang_js = ({
  name: "Group4",
  props: ["className"]
});
// CONCATENATED MODULE: ./src/components/Group4.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Group4vue_type_script_lang_js = (Group4vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Group4.vue?vue&type=style&index=0&id=7cdfe998&prod&lang=sass
var Group4vue_type_style_index_0_id_7cdfe998_prod_lang_sass = __webpack_require__("d6e4");

// CONCATENATED MODULE: ./src/components/Group4.vue






/* normalize component */

var Group4_component = Object(componentNormalizer["a" /* default */])(
  components_Group4vue_type_script_lang_js,
  Group4vue_type_template_id_7cdfe998_render,
  Group4vue_type_template_id_7cdfe998_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Group4 = (Group4_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/XLabel.vue?vue&type=template&id=f327c934
var XLabelvue_type_template_id_f327c934_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "label"
  }, [_c('div', {
    staticClass: "overlap-group2"
  }, [_vm._m(0), _c('div', {
    staticClass: "text-1 valign-text-bottom"
  }, [_vm._v(_vm._s(_vm.text1))]), _c('div', {
    staticClass: "mensen-gingen-je-voor valign-text-bottom"
  }, [_vm._v(_vm._s(_vm.mensenGingenJeVoor))])])]);
};
var XLabelvue_type_template_id_f327c934_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "overlap-group-1"
  }, [_c('div', {
    staticClass: "rectangle-4"
  }), _c('img', {
    staticClass: "polygon-1",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/polygon-1.svg",
      "alt": "Polygon 1"
    }
  })]);
}];

// CONCATENATED MODULE: ./src/components/XLabel.vue?vue&type=template&id=f327c934

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/XLabel.vue?vue&type=script&lang=js
/* harmony default export */ var XLabelvue_type_script_lang_js = ({
  name: "XLabel",
  props: ["text1", "mensenGingenJeVoor"]
});
// CONCATENATED MODULE: ./src/components/XLabel.vue?vue&type=script&lang=js
 /* harmony default export */ var components_XLabelvue_type_script_lang_js = (XLabelvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/XLabel.vue?vue&type=style&index=0&id=f327c934&prod&lang=sass
var XLabelvue_type_style_index_0_id_f327c934_prod_lang_sass = __webpack_require__("0a4f");

// CONCATENATED MODULE: ./src/components/XLabel.vue






/* normalize component */

var XLabel_component = Object(componentNormalizer["a" /* default */])(
  components_XLabelvue_type_script_lang_js,
  XLabelvue_type_template_id_f327c934_render,
  XLabelvue_type_template_id_f327c934_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var XLabel = (XLabel_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/XButton2.vue?vue&type=template&id=d3548d44
var XButton2vue_type_template_id_d3548d44_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('router-link', {
    attrs: {
      "to": "/vraag1"
    }
  }, [_c('div', {
    staticClass: "button"
  }, [_c('div', {
    staticClass: "controleer valign-text-bottom"
  }, [_vm._v(_vm._s(_vm.controleer))])])]);
};
var XButton2vue_type_template_id_d3548d44_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/XButton2.vue?vue&type=template&id=d3548d44

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/XButton2.vue?vue&type=script&lang=js
/* harmony default export */ var XButton2vue_type_script_lang_js = ({
  name: "XButton2",
  props: ["controleer"]
});
// CONCATENATED MODULE: ./src/components/XButton2.vue?vue&type=script&lang=js
 /* harmony default export */ var components_XButton2vue_type_script_lang_js = (XButton2vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/XButton2.vue?vue&type=style&index=0&id=d3548d44&prod&lang=sass
var XButton2vue_type_style_index_0_id_d3548d44_prod_lang_sass = __webpack_require__("2f05");

// CONCATENATED MODULE: ./src/components/XButton2.vue






/* normalize component */

var XButton2_component = Object(componentNormalizer["a" /* default */])(
  components_XButton2vue_type_script_lang_js,
  XButton2vue_type_template_id_d3548d44_render,
  XButton2vue_type_template_id_d3548d44_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var XButton2 = (XButton2_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/navbar.vue?vue&type=template&id=2b5ef282
var navbarvue_type_template_id_2b5ef282_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "navbar"
  }, [_c('div', {
    staticClass: "container-links"
  }, [_c('div', {
    staticClass: "container-advies-logo"
  }, [_c('logo-nl-advies-airco', {
    attrs: {
      "nederlandsadviesNl": _vm.logoNLAdviesAircoProps.nederlandsadviesNl,
      "airconditioning": _vm.logoNLAdviesAircoProps.airconditioning
    }
  })], 1)]), _vm._m(0)]);
};
var navbarvue_type_template_id_2b5ef282_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-rechts"
  }, [_c('div', {
    staticClass: "container-tekst-rechts"
  }, [_c('span', {
    staticClass: "tekst-zwart-navbar"
  }, [_vm._v("Besparen op Airconditioning was")]), _c('span', {
    staticClass: "tekst-geel-navbar"
  }, [_vm._v("nog nooit zo makkelijk!")])])]);
}];

// CONCATENATED MODULE: ./src/components/navbar.vue?vue&type=template&id=2b5ef282

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/navbar.vue?vue&type=script&lang=js

/* harmony default export */ var navbarvue_type_script_lang_js = ({
  name: "Navbar",
  components: {
    LogoNlAdviesAirco: LogoNlAdviesAirco
  },
  props: ["spanText1", "spanText2", "logoNLAdviesAircoProps"]
});
// CONCATENATED MODULE: ./src/components/navbar.vue?vue&type=script&lang=js
 /* harmony default export */ var components_navbarvue_type_script_lang_js = (navbarvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/navbar.vue?vue&type=style&index=0&id=2b5ef282&prod&lang=sass
var navbarvue_type_style_index_0_id_2b5ef282_prod_lang_sass = __webpack_require__("856c");

// CONCATENATED MODULE: ./src/components/navbar.vue






/* normalize component */

var navbar_component = Object(componentNormalizer["a" /* default */])(
  components_navbarvue_type_script_lang_js,
  navbarvue_type_template_id_2b5ef282_render,
  navbarvue_type_template_id_2b5ef282_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var navbar = (navbar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sectie1.vue?vue&type=template&id=3100e91a
var sectie1vue_type_template_id_3100e91a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-sectie1"
  }, [_c('div', {
    staticClass: "overlap-group6",
    style: {
      'background-image': 'url(' + _vm.overlapGroup6 + ')'
    }
  }, [_c('img', {
    staticClass: "layer_1",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/layer-1.svg",
      "alt": "Layer_1"
    }
  }), _c('div', {
    staticClass: "frame-13"
  }, [_vm._m(0), _vm._m(1), _c('div', {
    staticClass: "frame-14"
  }, [_c('div', {
    staticClass: "frame-20"
  }, [_c('label', {
    staticClass: "postcode-label",
    attrs: {
      "for": "postcode-input1"
    }
  }), _c('input', {
    staticClass: "postcode-input",
    attrs: {
      "id": "postcode-input postcode-input1",
      "type": "text",
      "placeholder": "Postcode"
    }
  }), _c('x-button', {
    staticClass: "postcode-button",
    attrs: {
      "controleer": _vm.xButtonProps.controleer
    }
  })], 1), _c('div', {
    staticClass: "klaar-binnen-1-minuut valign-text-bottom label-text"
  }, [_vm._v("Klaar binnen 1 minuut")])])]), _c('div', {
    staticClass: "overlap-group"
  }, [_c('p', {
    staticClass: "bespaar-tot-40-op-de-aanschafprijs valign-text-bottom catamaran-bold-supernova-22px",
    domProps: {
      "innerHTML": _vm._s(_vm.bespaarTot40OpDeAanschafprijs)
    }
  })])])]);
};
var sectie1vue_type_template_id_3100e91a_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('h1', {
    staticClass: "hou-je-huis-koel-met-airconditioning valign-text-bottom large-title-capitals"
  }, [_c('span', [_c('span', {
    staticClass: "span0-1 large-title-capitals"
  }, [_vm._v("Hou je huis koel met"), _c('br')]), _c('span', {
    staticClass: "span1-1 large-title-capitals"
  }, [_vm._v("airconditioning")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "frame-11 catamaran-bold-white-22px"
  }, [_c('p', {
    staticClass: "doe-de-woningscan-en-check valign-text-bottom"
  }, [_vm._v("Doe de woningscan en check:")]), _c('div', {
    staticClass: "frame"
  }, [_c('div', {
    staticClass: "frame-1"
  }, [_c('img', {
    staticClass: "small-icons",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/small-icons.svg",
      "alt": "Small icons"
    }
  }), _c('p', {
    staticClass: "hoeveel-jij-kan-besp valign-text-middle catamaran-bold-white-22px"
  }, [_vm._v(" Hoeveel jij kan besparen op airconditioning;")])]), _c('div', {
    staticClass: "frame-1"
  }, [_c('img', {
    staticClass: "small-icons",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/small-icons.svg",
      "alt": "Small icons"
    }
  }), _c('p', {
    staticClass: "de-best-beschikbare valign-text-middle catamaran-bold-white-22px"
  }, [_vm._v("De best beschikbare offertes voor jouw woning;")])]), _c('div', {
    staticClass: "frame-1"
  }, [_c('img', {
    staticClass: "small-icons",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/small-icons.svg",
      "alt": "Small icons"
    }
  }), _c('p', {
    staticClass: "de-juiste-specialist valign-text-middle catamaran-bold-white-22px"
  }, [_vm._v("De juiste specialisten voor gratis & vrijblijvend advies;")])])]), _c('p', {
    staticClass: "controleer-nu-of-wij valign-text-bottom"
  }, [_vm._v("Controleer nu of wij actief zijn in jouw regio:")])]);
}];

// CONCATENATED MODULE: ./src/components/sectie1.vue?vue&type=template&id=3100e91a

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sectie1.vue?vue&type=script&lang=js

/* harmony default export */ var sectie1vue_type_script_lang_js = ({
  name: "Navbar",
  components: {
    LogoNlAdviesAirco: LogoNlAdviesAirco
  },
  props: ["spanText1", "spanText2", "logoNLAdviesAircoProps"]
});
// CONCATENATED MODULE: ./src/components/sectie1.vue?vue&type=script&lang=js
 /* harmony default export */ var components_sectie1vue_type_script_lang_js = (sectie1vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/sectie1.vue?vue&type=style&index=0&id=3100e91a&prod&lang=sass
var sectie1vue_type_style_index_0_id_3100e91a_prod_lang_sass = __webpack_require__("0c31");

// CONCATENATED MODULE: ./src/components/sectie1.vue






/* normalize component */

var sectie1_component = Object(componentNormalizer["a" /* default */])(
  components_sectie1vue_type_script_lang_js,
  sectie1vue_type_template_id_3100e91a_render,
  sectie1vue_type_template_id_3100e91a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var sectie1 = (sectie1_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sectie2.vue?vue&type=template&id=4e7c7ee4
var sectie2vue_type_template_id_4e7c7ee4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "frame-26"
  }, [_c('div', {
    staticClass: "nederlandsadviesnl valign-text-bottom label-text"
  }, [_vm._v(_vm._s(_vm.nederlandsadviesNl))]), _c('div', {
    staticClass: "hoe-werkt-het valign-text-bottom"
  }, [_vm._v(_vm._s(_vm.hoeWerktHet))])]), _c('div', {
    staticClass: "overlap-group7"
  }, [_c('div', {
    staticClass: "rectangle"
  }), _c('frame6', {
    attrs: {
      "stap1": _vm.frame61Props.stap1,
      "controleerOfWijAc": _vm.frame61Props.controleerOfWijAc
    }
  }), _vm._m(0)], 1), _c('div', {
    staticClass: "overlap-group3"
  }, [_c('div', {
    staticClass: "rectangle"
  }), _c('group4'), _c('frame6', {
    attrs: {
      "stap1": _vm.frame62Props.stap1,
      "controleerOfWijAc": _vm.frame62Props.controleerOfWijAc,
      "className": _vm.frame62Props.className
    }
  })], 1), _c('div', {
    staticClass: "overlap-group5"
  }, [_c('div', {
    staticClass: "rectangle"
  }), _c('group4', {
    attrs: {
      "className": _vm.group4Props.className
    }
  }), _c('div', {
    staticClass: "frame-28"
  }, [_c('div', {
    staticClass: "stap-3 valign-text-bottom large-title"
  }, [_vm._v(_vm._s(_vm.stap3))]), _c('p', {
    staticClass: "onze-vakmensen-geven valign-text-bottom body-text"
  }, [_vm._v(_vm._s(_vm.onzeVakmensenGeven))])])], 1)]);
};
var sectie2vue_type_template_id_4e7c7ee4_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "group-3"
  }, [_c('img', {
    staticClass: "file-edit",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/file--edit.svg",
      "alt": "File, edit"
    }
  })]);
}];

// CONCATENATED MODULE: ./src/components/sectie2.vue?vue&type=template&id=4e7c7ee4

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sectie2.vue?vue&type=script&lang=js

/* harmony default export */ var sectie2vue_type_script_lang_js = ({
  name: "Sectie2",
  components: {
    LogoNlAdviesAirco: LogoNlAdviesAirco
  },
  props: ["spanText1", "spanText2", "logoNLAdviesAircoProps"]
});
// CONCATENATED MODULE: ./src/components/sectie2.vue?vue&type=script&lang=js
 /* harmony default export */ var components_sectie2vue_type_script_lang_js = (sectie2vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/sectie2.vue?vue&type=style&index=0&id=4e7c7ee4&prod&lang=sass
var sectie2vue_type_style_index_0_id_4e7c7ee4_prod_lang_sass = __webpack_require__("c0cf");

// CONCATENATED MODULE: ./src/components/sectie2.vue






/* normalize component */

var sectie2_component = Object(componentNormalizer["a" /* default */])(
  components_sectie2vue_type_script_lang_js,
  sectie2vue_type_template_id_4e7c7ee4_render,
  sectie2vue_type_template_id_4e7c7ee4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var sectie2 = (sectie2_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sectie3.vue?vue&type=template&id=cef34ef8
var sectie3vue_type_template_id_cef34ef8_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-sectie3"
  }, [_c('div', {
    staticClass: "overlap-group4"
  }, [_c('div', {
    staticClass: "frame-22"
  }, [_c('div', {
    staticClass: "frame"
  }, [_c('div', {
    staticClass: "waarom-airconditioning valign-text-bottom"
  }, [_vm._v(_vm._s(_vm.waaromAirconditioning))])]), _c('div', {
    staticClass: "frame-22-item valign-text-bottom catamaran-bold-white-22px"
  }, [_vm._v(_vm._s(_vm.airconditioningHee))]), _c('div', {
    staticClass: "frame-29"
  }, [_c('div', {
    staticClass: "frame-1"
  }, [_c('img', {
    staticClass: "small-icons",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/small-icons-3.svg",
      "alt": "Small icons"
    }
  }), _c('div', {
    staticClass: "verbeterde-luchtkwaliteit valign-text-middle catamaran-bold-white-22px"
  }, [_vm._v(" " + _vm._s(_vm.verbeterdeLuchtkwaliteit) + " ")])]), _c('div', {
    staticClass: "frame-1"
  }, [_c('img', {
    staticClass: "small-icons",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/small-icons-3.svg",
      "alt": "Small icons"
    }
  }), _c('div', {
    staticClass: "betere-slaapkwaliteit valign-text-middle catamaran-bold-white-22px"
  }, [_vm._v(_vm._s(_vm.betereSlaapkwaliteit))])]), _c('div', {
    staticClass: "frame-1"
  }, [_c('img', {
    staticClass: "small-icons",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/small-icons-3.svg",
      "alt": "Small icons"
    }
  }), _c('p', {
    staticClass: "geluidsstil-de-spli valign-text-middle catamaran-bold-white-22px"
  }, [_vm._v(_vm._s(_vm.geluidsstilDeSpli))])])]), _c('p', {
    staticClass: "frame-22-item valign-text-bottom catamaran-bold-white-22px"
  }, [_vm._v(_vm._s(_vm.bovendienIsEenAir))])]), _c('div', {
    staticClass: "overlap-group9"
  }, [_c('img', {
    staticClass: "rectangle-5",
    attrs: {
      "src": _vm.rectangle5,
      "alt": "Rectangle 5"
    }
  }), _c('img', {
    staticClass: "rectangle-6",
    attrs: {
      "src": _vm.rectangle6,
      "alt": "Rectangle 6"
    }
  }), _c('x-label', {
    attrs: {
      "text1": _vm.xLabelProps.text1,
      "mensenGingenJeVoor": _vm.xLabelProps.mensenGingenJeVoor
    }
  })], 1)])]);
};
var sectie3vue_type_template_id_cef34ef8_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/sectie3.vue?vue&type=template&id=cef34ef8

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sectie3.vue?vue&type=script&lang=js

/* harmony default export */ var sectie3vue_type_script_lang_js = ({
  name: "Sectie3",
  components: {
    LogoNlAdviesAirco: LogoNlAdviesAirco
  },
  props: ["spanText1", "spanText2", "logoNLAdviesAircoProps"]
});
// CONCATENATED MODULE: ./src/components/sectie3.vue?vue&type=script&lang=js
 /* harmony default export */ var components_sectie3vue_type_script_lang_js = (sectie3vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/sectie3.vue?vue&type=style&index=0&id=cef34ef8&prod&lang=sass
var sectie3vue_type_style_index_0_id_cef34ef8_prod_lang_sass = __webpack_require__("c1d8");

// CONCATENATED MODULE: ./src/components/sectie3.vue






/* normalize component */

var sectie3_component = Object(componentNormalizer["a" /* default */])(
  components_sectie3vue_type_script_lang_js,
  sectie3vue_type_template_id_cef34ef8_render,
  sectie3vue_type_template_id_cef34ef8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var sectie3 = (sectie3_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sectie4.vue?vue&type=template&id=502dafb6
var sectie4vue_type_template_id_502dafb6_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-sectie4"
  }, [_c('div', {
    staticClass: "frame-24"
  }, [_vm._m(0), _c('div', {
    staticClass: "frame-19"
  }, [_vm._m(1), _c('x-button2', {
    attrs: {
      "controleer": _vm.xButton2Props.controleer
    }
  })], 1)])]);
};
var sectie4vue_type_template_id_502dafb6_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "frame-15"
  }, [_c('img', {
    staticClass: "arrows",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/arrows.svg",
      "alt": "Arrows"
    }
  }), _c('p', {
    staticClass: "controleer-of-wij-ac valign-text-bottom"
  }, [_vm._v("Controleer of wij actief zijn in jouw regio!")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "frame-18"
  }, [_c('label', {
    staticClass: "postcode-label",
    attrs: {
      "for": "postcode-input"
    }
  }), _c('input', {
    staticClass: "postcode-input",
    attrs: {
      "id": "postcode-input",
      "type": "text",
      "placeholder": "Postcode"
    }
  })]);
}];

// CONCATENATED MODULE: ./src/components/sectie4.vue?vue&type=template&id=502dafb6

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sectie4.vue?vue&type=script&lang=js

/* harmony default export */ var sectie4vue_type_script_lang_js = ({
  name: "Sectie4",
  components: {
    LogoNlAdviesAirco: LogoNlAdviesAirco
  },
  props: ["spanText1", "spanText2", "logoNLAdviesAircoProps"]
});
// CONCATENATED MODULE: ./src/components/sectie4.vue?vue&type=script&lang=js
 /* harmony default export */ var components_sectie4vue_type_script_lang_js = (sectie4vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/sectie4.vue?vue&type=style&index=0&id=502dafb6&prod&lang=sass
var sectie4vue_type_style_index_0_id_502dafb6_prod_lang_sass = __webpack_require__("e492");

// CONCATENATED MODULE: ./src/components/sectie4.vue






/* normalize component */

var sectie4_component = Object(componentNormalizer["a" /* default */])(
  components_sectie4vue_type_script_lang_js,
  sectie4vue_type_template_id_502dafb6_render,
  sectie4vue_type_template_id_502dafb6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var sectie4 = (sectie4_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CampagneStart.vue?vue&type=script&lang=js











/* harmony default export */ var CampagneStartvue_type_script_lang_js = ({
  name: "CampagneStart",
  components: {
    LogoNlAdviesAirco: LogoNlAdviesAirco,
    XButton: XButton,
    Frame6: Frame6,
    Group4: Group4,
    XLabel: XLabel,
    XButton2: XButton2,
    Navbar: navbar,
    Sectie1: sectie1
  },
  data() {
    return {
      // dit is voor afbeelding van buitenaf inladen.
    };
  },
  props: ["spanText1", "spanText2", "overlapGroup6", "spanText3", "spanText4", "doeDeWoningscanEnCheck", "hoeveelJijKanBesp", "deBestBeschikbare", "deJuisteSpecialist", "controleerNuOfWij", "klaarBinnen1Minuut", "bespaarTot40OpDeAanschafprijs", "nederlandsadviesNl", "hoeWerktHet", "stap3", "onzeVakmensenGeven", "waaromAirconditioning", "airconditioningHee", "verbeterdeLuchtkwaliteit", "betereSlaapkwaliteit", "geluidsstilDeSpli", "bovendienIsEenAir", "rectangle5", "rectangle6", "controleerOfWijAc", "postcode2", "nederlandsadviesN", "logoNLAdviesAircoProps", "xButtonProps", "frame61Props", "frame62Props", "group4Props", "xLabelProps", "xButton2Props"]
});
// CONCATENATED MODULE: ./src/components/CampagneStart.vue?vue&type=script&lang=js
 /* harmony default export */ var components_CampagneStartvue_type_script_lang_js = (CampagneStartvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/CampagneStart.vue?vue&type=style&index=0&id=420354b8&prod&lang=sass
var CampagneStartvue_type_style_index_0_id_420354b8_prod_lang_sass = __webpack_require__("723f");

// CONCATENATED MODULE: ./src/components/CampagneStart.vue






/* normalize component */

var CampagneStart_component = Object(componentNormalizer["a" /* default */])(
  components_CampagneStartvue_type_script_lang_js,
  CampagneStartvue_type_template_id_420354b8_render,
  CampagneStartvue_type_template_id_420354b8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CampagneStart = (CampagneStart_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vraag1.vue?vue&type=template&id=c1ee3734
var vraag1vue_type_template_id_c1ee3734_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "navbar"
  }, [_c('div', {
    staticClass: "container-links"
  }, [_c('div', {
    staticClass: "container-advies-logo"
  }, [_c('logo-nl-advies-airco', {
    attrs: {
      "nederlandsadviesNl": _vm.logoNLAdviesAircoProps.nederlandsadviesNl,
      "airconditioning": _vm.logoNLAdviesAircoProps.airconditioning
    }
  })], 1)]), _c('div', {
    staticClass: "container-rechts"
  }, [_c('div', {
    staticClass: "container-tekst-rechts"
  }, [_c('span', {
    staticClass: "tekst-zwart-navbar"
  }, [_vm._v(_vm._s(_vm.spanText1))]), _c('span', {
    staticClass: "tekst-geel-navbar"
  }, [_vm._v(_vm._s(_vm.spanText2))])])])]), _c('div', {
    staticClass: "achtergrond"
  }, [_c('div', {
    staticClass: "overkoepelende-container"
  }, [_vm._m(0), _c('div', {
    staticClass: "vraag1-container"
  }, [_c('div', {
    staticClass: "container-voor-gegevens"
  }, [_c('div', {
    staticClass: "afbeelding-van-pijl"
  }, [_c('svg', {
    attrs: {
      "width": "32",
      "height": "25",
      "viewBox": "0 0 32 25",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('g', {
    attrs: {
      "id": "Arrows"
    }
  }, [_c('path', {
    attrs: {
      "id": "Vector",
      "d": "M0.570872 11.1186L11.0923 0.571695L13.8454 0.571695L13.8454 3.33452L6.65089 10.5469L30.0508 10.5469L32 12.4999L30.0508 14.4531L6.65089 14.4531L13.8454 21.6654L13.8454 24.4284L12.47 25L11.0923 24.4284L0.570872 13.8816L0.570872 11.1186Z",
      "fill": "#FFCD02"
    }
  })])])]), _vm._m(1), _c('p', {
    staticClass: "vraag"
  }, [_vm._v("Wat is jouw adres?")]), _vm._m(2), _c('div', {
    staticClass: "volgende"
  }, [_c('button', {
    staticClass: "volgende-button",
    on: {
      "click": _vm.navigateToNextPage
    }
  }, [_vm._v("Volgende")])])]), _vm._m(3)])])]), _c('p', {
    staticClass: "footer"
  }, [_vm._v("© Nederlandsadvies.nl | Algemene voorwaarden | Privacy policy")])]);
};
var vraag1vue_type_template_id_c1ee3734_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "laadbalk"
  }, [_c('div', {
    staticClass: "geladen-gedeelte"
  }, [_c('div', {
    staticClass: "procent"
  }, [_vm._v("34%")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vraag-hoeveel"
  }, [_c('p', [_vm._v("Vraag 1 van 3")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-inputs"
  }, [_c('div', {
    staticClass: "overkoepelende-input-container"
  }, [_c('div', {
    staticClass: "input-container"
  }, [_c('label', {
    staticClass: "postcode-label",
    attrs: {
      "for": "postcode-input"
    }
  }), _c('input', {
    staticClass: "huisnr-input",
    attrs: {
      "id": "postcode-input",
      "type": "text",
      "placeholder": "Postcode"
    }
  })]), _c('div', {
    staticClass: "input-container"
  }, [_c('label', {
    staticClass: "huisnr-label",
    attrs: {
      "for": "huisnr-input"
    }
  }), _c('input', {
    staticClass: "huisnr-input",
    attrs: {
      "id": "huisnr-input",
      "type": "text",
      "placeholder": "Huisnr."
    }
  })]), _c('div', {
    staticClass: "input-container full-width"
  }, [_c('label', {
    staticClass: "option-label",
    attrs: {
      "for": "option-select"
    }
  }), _c('select', {
    staticClass: "option-select",
    attrs: {
      "id": "option-select"
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Straatnaam")]), _c('option', {
    attrs: {
      "value": "option1"
    }
  }, [_vm._v("Optie 1")]), _c('option', {
    attrs: {
      "value": "option2"
    }
  }, [_vm._v("Optie 2")]), _c('option', {
    attrs: {
      "value": "option3"
    }
  }, [_vm._v("Optie 3")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-afbeelding"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("48bf"),
      "alt": ""
    }
  })]);
}];

// CONCATENATED MODULE: ./src/components/vraag1.vue?vue&type=template&id=c1ee3734

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vraag1.vue?vue&type=script&lang=js


/* harmony default export */ var vraag1vue_type_script_lang_js = ({
  name: "vraag1",
  components: {
    LogoNlAdviesAirco: LogoNlAdviesAirco
  },
  props: ["spanText1", "spanText2", "logoNLAdviesAircoProps"],
  methods: {
    navigateToNextPage() {
      this.$router.push('./vraag2');
    }
  }
});
// CONCATENATED MODULE: ./src/components/vraag1.vue?vue&type=script&lang=js
 /* harmony default export */ var components_vraag1vue_type_script_lang_js = (vraag1vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/vraag1.vue?vue&type=style&index=0&id=c1ee3734&prod&lang=sass
var vraag1vue_type_style_index_0_id_c1ee3734_prod_lang_sass = __webpack_require__("3f2d");

// CONCATENATED MODULE: ./src/components/vraag1.vue






/* normalize component */

var vraag1_component = Object(componentNormalizer["a" /* default */])(
  components_vraag1vue_type_script_lang_js,
  vraag1vue_type_template_id_c1ee3734_render,
  vraag1vue_type_template_id_c1ee3734_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vraag1 = (vraag1_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vraag2.vue?vue&type=template&id=4fcac34d
var vraag2vue_type_template_id_4fcac34d_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {}, [_c('div', {
    staticClass: "flex-row"
  }, [_c('div', {
    staticClass: "overlap-group8"
  }, [_c('logo-nl-advies-airco', {
    attrs: {
      "nederlandsadviesNl": _vm.logoNLAdviesAircoProps.nederlandsadviesNl,
      "airconditioning": _vm.logoNLAdviesAircoProps.airconditioning
    }
  })], 1), _c('p', {
    staticClass: "besparen-op-aircondi valign-text-bottom"
  }, [_c('span', [_c('span', {
    staticClass: "span0"
  }, [_vm._v(_vm._s(_vm.spanText1))]), _c('br'), _c('span', {
    staticClass: "catamaran-bold-supernova-22px"
  }, [_vm._v(_vm._s(_vm.spanText2))])])])]), _c('div', {
    staticClass: "achtergrond"
  }, [_c('div', {
    staticClass: "overkoepelende-container"
  }, [_vm._m(0), _c('div', {
    staticClass: "vraag1-container"
  }, [_c('div', {
    staticClass: "container-voor-gegevens"
  }, [_c('div', {
    staticClass: "afbeelding-van-pijl"
  }, [_c('svg', {
    attrs: {
      "width": "32",
      "height": "25",
      "viewBox": "0 0 32 25",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('g', {
    attrs: {
      "id": "Arrows"
    }
  }, [_c('path', {
    attrs: {
      "id": "Vector",
      "d": "M0.570872 11.1186L11.0923 0.571695L13.8454 0.571695L13.8454 3.33452L6.65089 10.5469L30.0508 10.5469L32 12.4999L30.0508 14.4531L6.65089 14.4531L13.8454 21.6654L13.8454 24.4284L12.47 25L11.0923 24.4284L0.570872 13.8816L0.570872 11.1186Z",
      "fill": "#FFCD02"
    }
  })])])]), _vm._m(1), _c('p', {
    staticClass: "vraag"
  }, [_vm._v("Wat is jouw adres?")]), _vm._m(2), _c('div', {
    staticClass: "volgende"
  }, [_c('button', {
    staticClass: "volgende-button",
    on: {
      "click": _vm.navigateToNextPage
    }
  }, [_vm._v("Volgende")])])]), _vm._m(3)])])]), _c('p', {
    staticClass: "footer"
  }, [_vm._v("© Nederlandsadvies.nl | Algemene voorwaarden | Privacy policy")])]);
};
var vraag2vue_type_template_id_4fcac34d_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "laadbalk"
  }, [_c('div', {
    staticClass: "geladen-gedeelte"
  }, [_c('div', {
    staticClass: "procent"
  }, [_vm._v("34%")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vraag-hoeveel"
  }, [_c('p', [_vm._v("Vraag 2 van 3")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-inputs"
  }, [_c('div', {
    staticClass: "overkoepelende-input-container"
  }, [_c('div', {
    staticClass: "input-container"
  }, [_c('label', {
    staticClass: "postcode-label",
    attrs: {
      "for": "postcode-input"
    }
  }), _c('input', {
    staticClass: "huisnr-input",
    attrs: {
      "id": "postcode-input",
      "type": "text",
      "placeholder": "Postcode"
    }
  })]), _c('div', {
    staticClass: "input-container"
  }, [_c('label', {
    staticClass: "huisnr-label",
    attrs: {
      "for": "huisnr-input"
    }
  }), _c('input', {
    staticClass: "huisnr-input",
    attrs: {
      "id": "huisnr-input",
      "type": "text",
      "placeholder": "Huisnr."
    }
  })]), _c('div', {
    staticClass: "input-container full-width"
  }, [_c('label', {
    staticClass: "option-label",
    attrs: {
      "for": "option-select"
    }
  }), _c('select', {
    staticClass: "option-select",
    attrs: {
      "id": "option-select"
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Straatnaam")]), _c('option', {
    attrs: {
      "value": "option1"
    }
  }, [_vm._v("Optie 1")]), _c('option', {
    attrs: {
      "value": "option2"
    }
  }, [_vm._v("Optie 2")]), _c('option', {
    attrs: {
      "value": "option3"
    }
  }, [_vm._v("Optie 3")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-afbeelding"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("48bf"),
      "alt": ""
    }
  })]);
}];

// CONCATENATED MODULE: ./src/components/vraag2.vue?vue&type=template&id=4fcac34d

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vraag2.vue?vue&type=script&lang=js


/* harmony default export */ var vraag2vue_type_script_lang_js = ({
  name: "CampagneStart",
  components: {
    LogoNlAdviesAirco: LogoNlAdviesAirco
  },
  props: ["spanText1", "spanText2", "logoNLAdviesAircoProps"],
  methods: {
    navigateToNextPage() {
      this.$router.push('./vraag2');
    }
  }
});
// CONCATENATED MODULE: ./src/components/vraag2.vue?vue&type=script&lang=js
 /* harmony default export */ var components_vraag2vue_type_script_lang_js = (vraag2vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/vraag2.vue?vue&type=style&index=0&id=4fcac34d&prod&lang=sass
var vraag2vue_type_style_index_0_id_4fcac34d_prod_lang_sass = __webpack_require__("34fe");

// CONCATENATED MODULE: ./src/components/vraag2.vue






/* normalize component */

var vraag2_component = Object(componentNormalizer["a" /* default */])(
  components_vraag2vue_type_script_lang_js,
  vraag2vue_type_template_id_4fcac34d_render,
  vraag2vue_type_template_id_4fcac34d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vraag2 = (vraag2_component.exports);
// CONCATENATED MODULE: ./src/data.js
const logoNlAdviesAircoData = {
  nederlandsadviesNl: "Nederlandsadvies.nl",
  airconditioning: "Airconditioning"
};
const xButtonData = {
  controleer: "CONTROLEER"
};
const frame61Data = {
  stap1: "Stap 1",
  controleerOfWijAc: "Controleer of wij actief zijn in jouw regio"
};
const frame62Data = {
  stap1: "Stap 2",
  controleerOfWijAc: "Rond de woningscan af",
  className: "frame-27"
};
const group42Data = {
  className: "group-5"
};
const xLabelData = {
  text1: "1.210.679",
  mensenGingenJeVoor: "mensen gingen je voor"
};
const xButton2Data = {
  controleer: "CONTROLEER"
};
const campagneStartData = {
  spanText1: "Besparen op Airconditioning was",
  spanText2: "nog nooit zo makkelijk!",
  overlapGroup6: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/airco1-1.png",
  spanText3: "Hou je huis koel met ",
  spanText4: "airconditioning",
  doeDeWoningscanEnCheck: "Doe de woningscan en check:",
  hoeveelJijKanBesp: "Hoeveel jij kan besparen op airconditioning;",
  deBestBeschikbare: "De best beschikbare offertes voor jouw woning;",
  deJuisteSpecialist: "De juiste specialisten voor gratis & vrijblijvend advies;",
  controleerNuOfWij: "Controleer nu of wij actief zijn in jouw regio:",
  klaarBinnen1Minuut: "Klaar binnen 1 minuut",
  bespaarTot40OpDeAanschafprijs: "Bespaar tot<br />40% op de aanschafprijs",
  nederlandsadviesNl: "Nederlandsadvies.nl",
  hoeWerktHet: "Hoe werkt het?",
  stap3: "Stap 3",
  onzeVakmensenGeven: "Onze vakmensen geven gratis  en vrijblijvend, persoonlijk advies",
  waaromAirconditioning: "Waarom airconditioning?",
  airconditioningHee: " Airconditioning heeft verschillende voordelen:",
  verbeterdeLuchtkwaliteit: "Verbeterde luchtkwaliteit;",
  betereSlaapkwaliteit: "Betere slaapkwaliteit;",
  geluidsstilDeSpli: "Geluidsstil: de split airco maakt nauwelijks geluid;",
  bovendienIsEenAir: "Bovendien is een airconditioning multifunctioneel: hij verwarmt je huis ook gemakkelijk op koude winterdagen. Zo bespaar jij enorm op je gasrekening.",
  rectangle5: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/rectangle-5.png",
  rectangle6: "https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/668fac9fb8183b225861ce8d/img/rectangle-6.png",
  controleerOfWijAc: "Controleer of wij actief zijn in jouw regio!",
  postcode2: "Postcode",
  nederlandsadviesN: "© Nederlandsadvies.nl | Algemene voorwaarden | Privacy policy",
  logoNLAdviesAircoProps: logoNlAdviesAircoData,
  xButtonProps: xButtonData,
  frame61Props: frame61Data,
  frame62Props: frame62Data,
  group4Props: group42Data,
  xLabelProps: xLabelData,
  xButton2Props: xButton2Data
};
// CONCATENATED MODULE: ./src/router.js







vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);
/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  mode: 'history',
  base: '/Airco/',
  routes: [{
    path: '/',
    component: CampagneStart,
    props: {
      ...campagneStartData
    }
  }, {
    path: '/vraag1',
    component: vraag1,
    props: {
      ...campagneStartData
    }
  }, {
    path: '/vraag2',
    component: vraag2,
    props: {
      ...campagneStartData
    }
  }, {
    path: '/navbar',
    component: navbar,
    props: {
      ...campagneStartData
    }
  }, {
    path: '*',
    redirect: '/'
  }]
}));
// EXTERNAL MODULE: ./styleguide.sass
var styleguide = __webpack_require__("7259");

// EXTERNAL MODULE: ./globals.sass
var globals = __webpack_require__("6d84");

// CONCATENATED MODULE: ./src/main.js





vue_runtime_esm["a" /* default */].config.productionTip = false;
new vue_runtime_esm["a" /* default */]({
  render: h => h(App),
  router: router
}).$mount("#app");

/***/ }),

/***/ "5bfc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "601a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6d84":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "723f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampagneStart_vue_vue_type_style_index_0_id_420354b8_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f624");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampagneStart_vue_vue_type_style_index_0_id_420354b8_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampagneStart_vue_vue_type_style_index_0_id_420354b8_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7259":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7d60":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "856c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_style_index_0_id_2b5ef282_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5bfc");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_style_index_0_id_2b5ef282_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_style_index_0_id_2b5ef282_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8f83":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XButton_vue_vue_type_style_index_0_id_bb0dea38_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("183d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XButton_vue_vue_type_style_index_0_id_bb0dea38_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XButton_vue_vue_type_style_index_0_id_bb0dea38_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "91f5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c0cf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie2_vue_vue_type_style_index_0_id_4e7c7ee4_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("37a1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie2_vue_vue_type_style_index_0_id_4e7c7ee4_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie2_vue_vue_type_style_index_0_id_4e7c7ee4_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c1d8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie3_vue_vue_type_style_index_0_id_cef34ef8_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e1f7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie3_vue_vue_type_style_index_0_id_cef34ef8_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie3_vue_vue_type_style_index_0_id_cef34ef8_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d6e4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group4_vue_vue_type_style_index_0_id_7cdfe998_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("43e3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group4_vue_vue_type_style_index_0_id_7cdfe998_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group4_vue_vue_type_style_index_0_id_7cdfe998_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ded8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dfea":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e1f7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e492":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie4_vue_vue_type_style_index_0_id_502dafb6_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0a48");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie4_vue_vue_type_style_index_0_id_502dafb6_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie4_vue_vue_type_style_index_0_id_502dafb6_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f624":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.b2863528.js.map