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

/***/ "0010":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_postcode_vue_vue_type_style_index_0_id_597a79b4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4ca7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_postcode_vue_vue_type_style_index_0_id_597a79b4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_postcode_vue_vue_type_style_index_0_id_597a79b4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0a4f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XLabel_vue_vue_type_style_index_0_id_f327c934_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ded8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XLabel_vue_vue_type_style_index_0_id_f327c934_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XLabel_vue_vue_type_style_index_0_id_f327c934_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0cfb6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1f58":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie1_vue_vue_type_style_index_0_id_0726691e_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("23d8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie1_vue_vue_type_style_index_0_id_0726691e_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie1_vue_vue_type_style_index_0_id_0726691e_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "20b2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_progressiebalk_vue_vue_type_style_index_0_id_c65def4a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f7ff");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_progressiebalk_vue_vue_type_style_index_0_id_c65def4a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_progressiebalk_vue_vue_type_style_index_0_id_c65def4a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2182":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoNlAdviesAirco_vue_vue_type_style_index_0_id_611db6e4_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0cfb6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoNlAdviesAirco_vue_vue_type_style_index_0_id_611db6e4_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoNlAdviesAirco_vue_vue_type_style_index_0_id_611db6e4_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "23d8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2522":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame6_vue_vue_type_style_index_0_id_0437f774_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("601a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame6_vue_vue_type_style_index_0_id_0437f774_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame6_vue_vue_type_style_index_0_id_0437f774_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2878":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2ec3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampagneStart_vue_vue_type_style_index_0_id_128929f9_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aaca");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampagneStart_vue_vue_type_style_index_0_id_128929f9_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampagneStart_vue_vue_type_style_index_0_id_128929f9_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3350":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "33d2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_analyse_vue_vue_type_style_index_0_id_6f082a94_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2878");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_analyse_vue_vue_type_style_index_0_id_6f082a94_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_analyse_vue_vue_type_style_index_0_id_6f082a94_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
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

/***/ "4ca7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4fec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vraag1_vue_vue_type_style_index_0_id_b1c0b542_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5a16");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vraag1_vue_vue_type_style_index_0_id_b1c0b542_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vraag1_vue_vue_type_style_index_0_id_b1c0b542_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "51b7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CampagneStart.vue?vue&type=template&id=128929f9
var CampagneStartvue_type_template_id_128929f9_render = function render() {
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
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.postcode,
      expression: "postcode"
    }],
    staticClass: "postcode-input",
    attrs: {
      "id": "postcode-input",
      "type": "text",
      "placeholder": "Postcode"
    },
    domProps: {
      "value": _vm.postcode
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.postcode = $event.target.value;
      }
    }
  }), _c('x-button', {
    attrs: {
      "controleer": _vm.controleer
    },
    on: {
      "button-click": _vm.handlePostcode
    }
  })], 1), _vm.errorMessage ? _c('div', {
    staticClass: "error-message"
  }, [_vm._v(" " + _vm._s(_vm.errorMessage) + " ")]) : _vm._e(), _c('div', {
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
  }, [_c('div', {
    staticClass: "frame-18"
  }, [_c('label', {
    staticClass: "postcode-label",
    attrs: {
      "for": "postcode-input-2"
    }
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.zip,
      expression: "zip"
    }],
    staticClass: "postcode-input-2",
    attrs: {
      "id": "postcode-input-2",
      "type": "text",
      "placeholder": "Postcode"
    },
    domProps: {
      "value": _vm.zip
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.zip = $event.target.value;
      }
    }
  })]), _c('div', [_c('x-button', {
    attrs: {
      "controleer": _vm.controleer
    },
    on: {
      "button-click": _vm.navigateToNextPage
    }
  })], 1), _vm.errorMessage ? _c('div', {
    staticClass: "error-message"
  }, [_vm._v(" " + _vm._s(_vm.errorMessage) + " ")]) : _vm._e()])]), _c('p', {
    staticClass: "nederlandsadviesn valign-text-bottom"
  }, [_vm._v(_vm._s(_vm.nederlandsadviesN))])])]);
};
var CampagneStartvue_type_template_id_128929f9_staticRenderFns = [function () {
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
  }, [_vm._v("De juiste specialisten voor gratis & vrijblijvend"), _c('br', {
    staticClass: "desktop"
  }), _vm._v(" advies;")])])]), _c('br'), _c('br'), _c('p', {
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
}];

// CONCATENATED MODULE: ./src/components/CampagneStart.vue?vue&type=template&id=128929f9

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.cause.js
var es_error_cause = __webpack_require__("d9e2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/XButton.vue?vue&type=template&id=f7c2205e
var XButtonvue_type_template_id_f7c2205e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('button', {
    staticClass: "button",
    on: {
      "click": _vm.handleClick
    }
  }, [_c('div', {
    staticClass: "controleer valign-text-bottom"
  }, [_vm._v("Controleer")])])]);
};
var XButtonvue_type_template_id_f7c2205e_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/XButton.vue?vue&type=template&id=f7c2205e

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/XButton.vue?vue&type=script&lang=js
/* harmony default export */ var XButtonvue_type_script_lang_js = ({
  name: "XButton",
  props: ["controleer"],
  methods: {
    handleClick() {
      this.$emit('button-click');
    }
  }
});
// CONCATENATED MODULE: ./src/components/XButton.vue?vue&type=script&lang=js
 /* harmony default export */ var components_XButtonvue_type_script_lang_js = (XButtonvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/XButton.vue?vue&type=style&index=0&id=f7c2205e&prod&lang=sass
var XButtonvue_type_style_index_0_id_f7c2205e_prod_lang_sass = __webpack_require__("65d4");

// CONCATENATED MODULE: ./src/components/XButton.vue






/* normalize component */

var XButton_component = Object(componentNormalizer["a" /* default */])(
  components_XButtonvue_type_script_lang_js,
  XButtonvue_type_template_id_f7c2205e_render,
  XButtonvue_type_template_id_f7c2205e_staticRenderFns,
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/XButton2.vue?vue&type=template&id=78db891c
var XButton2vue_type_template_id_78db891c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('router-link', {
    attrs: {
      "to": "/vraag1"
    }
  }, [_c('div', {
    staticClass: "button-onder"
  }, [_c('div', {
    staticClass: "controleer valign-text-bottom"
  }, [_vm._v(_vm._s(_vm.controleer))])])]);
};
var XButton2vue_type_template_id_78db891c_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/XButton2.vue?vue&type=template&id=78db891c

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/XButton2.vue?vue&type=script&lang=js
/* harmony default export */ var XButton2vue_type_script_lang_js = ({
  name: "XButton2",
  props: ["controleer"]
});
// CONCATENATED MODULE: ./src/components/XButton2.vue?vue&type=script&lang=js
 /* harmony default export */ var components_XButton2vue_type_script_lang_js = (XButton2vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/XButton2.vue?vue&type=style&index=0&id=78db891c&prod&lang=sass
var XButton2vue_type_style_index_0_id_78db891c_prod_lang_sass = __webpack_require__("b4a5");

// CONCATENATED MODULE: ./src/components/XButton2.vue






/* normalize component */

var XButton2_component = Object(componentNormalizer["a" /* default */])(
  components_XButton2vue_type_script_lang_js,
  XButton2vue_type_template_id_78db891c_render,
  XButton2vue_type_template_id_78db891c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var XButton2 = (XButton2_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/navbar.vue?vue&type=template&id=131af716
var navbarvue_type_template_id_131af716_render = function render() {
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
var navbarvue_type_template_id_131af716_staticRenderFns = [function () {
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

// CONCATENATED MODULE: ./src/components/navbar.vue?vue&type=template&id=131af716

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
// EXTERNAL MODULE: ./src/components/navbar.vue?vue&type=style&index=0&id=131af716&prod&lang=sass
var navbarvue_type_style_index_0_id_131af716_prod_lang_sass = __webpack_require__("c9eb");

// CONCATENATED MODULE: ./src/components/navbar.vue






/* normalize component */

var navbar_component = Object(componentNormalizer["a" /* default */])(
  components_navbarvue_type_script_lang_js,
  navbarvue_type_template_id_131af716_render,
  navbarvue_type_template_id_131af716_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var navbar = (navbar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sectie1.vue?vue&type=template&id=0726691e
var sectie1vue_type_template_id_0726691e_render = function render() {
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
var sectie1vue_type_template_id_0726691e_staticRenderFns = [function () {
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
  }, [_vm._v("De juiste specialisten voor gratis & vrijblijvend"), _c('br', {
    staticClass: "dekstop"
  }), _vm._v(" advies;")])])]), _c('br'), _c('br'), _c('p', {
    staticClass: "controleer-nu-of-wij valign-text-bottom"
  }, [_vm._v("Controleer nu of wij actief zijn in jouw regio:")])]);
}];

// CONCATENATED MODULE: ./src/components/sectie1.vue?vue&type=template&id=0726691e

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
// EXTERNAL MODULE: ./src/components/sectie1.vue?vue&type=style&index=0&id=0726691e&prod&lang=sass
var sectie1vue_type_style_index_0_id_0726691e_prod_lang_sass = __webpack_require__("1f58");

// CONCATENATED MODULE: ./src/components/sectie1.vue






/* normalize component */

var sectie1_component = Object(componentNormalizer["a" /* default */])(
  components_sectie1vue_type_script_lang_js,
  sectie1vue_type_template_id_0726691e_render,
  sectie1vue_type_template_id_0726691e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var sectie1 = (sectie1_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sectie2.vue?vue&type=template&id=60889158
var sectie2vue_type_template_id_60889158_render = function render() {
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
var sectie2vue_type_template_id_60889158_staticRenderFns = [function () {
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

// CONCATENATED MODULE: ./src/components/sectie2.vue?vue&type=template&id=60889158

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
// EXTERNAL MODULE: ./src/components/sectie2.vue?vue&type=style&index=0&id=60889158&prod&lang=sass
var sectie2vue_type_style_index_0_id_60889158_prod_lang_sass = __webpack_require__("906c");

// CONCATENATED MODULE: ./src/components/sectie2.vue






/* normalize component */

var sectie2_component = Object(componentNormalizer["a" /* default */])(
  components_sectie2vue_type_script_lang_js,
  sectie2vue_type_template_id_60889158_render,
  sectie2vue_type_template_id_60889158_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var sectie2 = (sectie2_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sectie3.vue?vue&type=template&id=f510573e
var sectie3vue_type_template_id_f510573e_render = function render() {
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
var sectie3vue_type_template_id_f510573e_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/sectie3.vue?vue&type=template&id=f510573e

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
// EXTERNAL MODULE: ./src/components/sectie3.vue?vue&type=style&index=0&id=f510573e&prod&lang=sass
var sectie3vue_type_style_index_0_id_f510573e_prod_lang_sass = __webpack_require__("aef0");

// CONCATENATED MODULE: ./src/components/sectie3.vue






/* normalize component */

var sectie3_component = Object(componentNormalizer["a" /* default */])(
  components_sectie3vue_type_script_lang_js,
  sectie3vue_type_template_id_f510573e_render,
  sectie3vue_type_template_id_f510573e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var sectie3 = (sectie3_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sectie4.vue?vue&type=template&id=2a034a0c
var sectie4vue_type_template_id_2a034a0c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-sectie4"
  }, [_c('div', {
    staticClass: "frame-24"
  }, [_vm._m(0), _c('div', {
    staticClass: "frame-19"
  }, [_vm._m(1), _c('router-link', {
    attrs: {
      "to": "/vraag1"
    }
  }, [_c('div', {
    staticClass: "button-onder"
  }, [_c('div', {
    staticClass: "controleer-beneden valign-text-bottom"
  }, [_c('span', {
    staticClass: "centreer"
  }, [_vm._v("Controleer")])])])])], 1)])]);
};
var sectie4vue_type_template_id_2a034a0c_staticRenderFns = [function () {
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
    staticClass: "postcode-input-2",
    attrs: {
      "id": "postcode-input",
      "type": "text",
      "placeholder": "Postcode"
    }
  })]);
}];

// CONCATENATED MODULE: ./src/components/sectie4.vue?vue&type=template&id=2a034a0c

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
// EXTERNAL MODULE: ./src/components/sectie4.vue?vue&type=style&index=0&id=2a034a0c&prod&lang=sass
var sectie4vue_type_style_index_0_id_2a034a0c_prod_lang_sass = __webpack_require__("78da");

// CONCATENATED MODULE: ./src/components/sectie4.vue






/* normalize component */

var sectie4_component = Object(componentNormalizer["a" /* default */])(
  components_sectie4vue_type_script_lang_js,
  sectie4vue_type_template_id_2a034a0c_render,
  sectie4vue_type_template_id_2a034a0c_staticRenderFns,
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
    Sectie1: sectie1,
    sectie2: sectie2,
    sectie3: sectie3,
    sectie4: sectie4
  },
  data() {
    return {
      postcode: '',
      errorMessage: ''
    };
  },
  props: ["spanText1", "spanText2", "overlapGroup6", "spanText3", "spanText4", "doeDeWoningscanEnCheck", "hoeveelJijKanBesp", "deBestBeschikbare", "deJuisteSpecialist", "controleerNuOfWij", "klaarBinnen1Minuut", "bespaarTot40OpDeAanschafprijs", "nederlandsadviesNl", "hoeWerktHet", "stap3", "onzeVakmensenGeven", "waaromAirconditioning", "airconditioningHee", "verbeterdeLuchtkwaliteit", "betereSlaapkwaliteit", "geluidsstilDeSpli", "bovendienIsEenAir", "rectangle5", "rectangle6", "controleerOfWijAc", "postcode2", "nederlandsadviesN", "logoNLAdviesAircoProps", "xButtonProps", "frame61Props", "frame62Props", "group4Props", "xLabelProps", "xButton2Props"],
  methods: {
    checkPostcode() {
      const pattern = /^[1-9][0-9]{3}\s?[-]?[a-zA-Z]{2}$/;
      if (!pattern.test(this.postcode)) {
        this.errorMessage = 'Ongeldige postcode.';
        return false;
      }
      this.errorMessage = '';
      return true;
    },
    async fetchStreetByPostcode(postcode) {
      const authKey = 'P6JTU52clKYjZca8'; // Vervang door je werkelijke API-sleutel
      const baseUrl = 'https://api.pro6pp.nl';
      const url = `${baseUrl}/v2/suggest/nl/street?postalCode=${postcode}&authKey=${authKey}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Authentication failed or no results found');
        }
        const data = await response.json();
        if (data.length > 0) {
          const streetNames = data.map(item => item.street);
          const city = data[0].settlement; // Assuming the first result has the correct city
          localStorage.setItem('city', city); // Store city in localStorage
          return streetNames;
        } else {
          this.errorMessage = 'No results found';
          return [];
        }
      } catch (error) {
        this.errorMessage = error.message;
        return [];
      }
    },
    async handlePostcode() {
      const isValid = this.checkPostcode();
      if (isValid) {
        const streets = await this.fetchStreetByPostcode(this.postcode);
        if (streets.length > 0) {
          localStorage.setItem('postcode', this.postcode);
          localStorage.setItem('straatnaam', JSON.stringify(streets));
          this.$router.push('/vraag1');
        }
      } else {
        console.error('Postcode niet geldig:', this.errorMessage);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/CampagneStart.vue?vue&type=script&lang=js
 /* harmony default export */ var components_CampagneStartvue_type_script_lang_js = (CampagneStartvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/CampagneStart.vue?vue&type=style&index=0&id=128929f9&prod&lang=sass
var CampagneStartvue_type_style_index_0_id_128929f9_prod_lang_sass = __webpack_require__("2ec3");

// CONCATENATED MODULE: ./src/components/CampagneStart.vue






/* normalize component */

var CampagneStart_component = Object(componentNormalizer["a" /* default */])(
  components_CampagneStartvue_type_script_lang_js,
  CampagneStartvue_type_template_id_128929f9_render,
  CampagneStartvue_type_template_id_128929f9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CampagneStart = (CampagneStart_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vraag1.vue?vue&type=template&id=b1c0b542
var vraag1vue_type_template_id_b1c0b542_render = function render() {
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
    staticClass: "achtergrond-vraag1"
  }, [_c('div', {
    staticClass: "overkoepelende-container"
  }, [_c('progressiebalk', {
    attrs: {
      "currentPage": _vm.currentPage
    }
  }), _c('div', {
    staticClass: "vraag1-container"
  }, [_c('div', {
    staticClass: "container-voor-gegevens"
  }, [_c('div', {
    staticClass: "afbeelding-van-pijl"
  }, [_c('router-link', {
    attrs: {
      "to": "./CampagneStart.vue"
    }
  }, [_c('svg', {
    staticClass: "pijl-vraag1",
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
  })])])])], 1), _vm._m(0), _c('p', {
    staticClass: "vraag"
  }, [_vm._v("Wat is jouw adres?")]), _c('div', {
    staticClass: "container-inputs"
  }, [_c('div', {
    staticClass: "overkoepelende-input-container"
  }, [_c('div', {
    staticClass: "input-container full-width-mobiel"
  }, [_c('label', {
    staticClass: "postcode-label",
    attrs: {
      "for": "postcode-input"
    }
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.zip,
      expression: "formData.zip"
    }],
    staticClass: "huisnr-input full-width-mobiel-vraag1",
    attrs: {
      "id": "postcode-input",
      "type": "text",
      "placeholder": "Postcode",
      "readonly": ""
    },
    domProps: {
      "value": _vm.formData.zip
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "zip", $event.target.value);
      }
    }
  })]), _c('div', {
    staticClass: "input-container full-width-mobiel"
  }, [_c('label', {
    staticClass: "huisnr-label",
    attrs: {
      "for": "huisnr-input"
    }
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.house_number,
      expression: "formData.house_number"
    }],
    staticClass: "huisnr-input full-width-mobiel-vraag1",
    attrs: {
      "id": "huisnr-input",
      "type": "text",
      "placeholder": "Huisnr."
    },
    domProps: {
      "value": _vm.formData.house_number
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "house_number", $event.target.value);
      }
    }
  })]), _c('div', {
    staticClass: "input-container full-width"
  }, [_c('label', {
    staticClass: "option-label",
    attrs: {
      "for": "option-select"
    }
  }), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.street,
      expression: "formData.street"
    }],
    staticClass: "option-select",
    attrs: {
      "id": "option-select"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "street", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Straatnaam")]), _vm._l(_vm.streets, function (street) {
    return _c('option', {
      key: street,
      domProps: {
        "value": street
      }
    }, [_vm._v(" " + _vm._s(street) + " ")]);
  })], 2)])])]), _c('div', {
    staticClass: "volgende"
  }, [_c('button', {
    staticClass: "volgende-button",
    on: {
      "click": _vm.navigateToNextPage
    }
  }, [_vm._v("Volgende")])])]), _vm._m(1), _vm._m(2)])], 1)]), _c('p', {
    staticClass: "footer"
  }, [_vm._v("© Nederlandsadvies.nl | Algemene voorwaarden | Privacy policy")])]);
};
var vraag1vue_type_template_id_b1c0b542_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vraag-hoeveel"
  }, [_c('p', [_vm._v("Vraag 1 van 3")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-afbeelding-desktop"
  }, [_c('img', {
    staticClass: "afbeelding-border-desktop",
    attrs: {
      "id": "afbeelding-border-desktop",
      "src": __webpack_require__("48bf"),
      "alt": ""
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-afbeelding-mobiel"
  }, [_c('img', {
    staticClass: "afbeelding-mobiel",
    attrs: {
      "id": "afbeelding-mobiel",
      "src": __webpack_require__("e372"),
      "alt": "afbeelding mobiel"
    }
  })]);
}];

// CONCATENATED MODULE: ./src/components/vraag1.vue?vue&type=template&id=b1c0b542

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/progressiebalk.vue?vue&type=template&id=c65def4a&scoped=true
var progressiebalkvue_type_template_id_c65def4a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "progress-bar"
  }, [_c('div', {
    staticClass: "progress-background"
  }, [_c('div', {
    ref: "progressBar",
    staticClass: "progress",
    class: _vm.progressClass
  })]), _c('div', {
    staticClass: "percentage",
    class: _vm.percentageClass
  }, [_vm._v(_vm._s(_vm.progressPercentage) + "%")])]);
};
var progressiebalkvue_type_template_id_c65def4a_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/progressiebalk.vue?vue&type=template&id=c65def4a&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/progressiebalk.vue?vue&type=script&lang=js
/* harmony default export */ var progressiebalkvue_type_script_lang_js = ({
  props: {
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    progressPercentage() {
      // Berekent de doelvoortgang op basis van de huidige pagina
      if (this.currentPage === 1) return 33;
      if (this.currentPage === 2) return 66;
      if (this.currentPage === 3) return 100;
      return 0; // Fallback
    },
    progressClass() {
      // Retourneert de CSS-klasse gebaseerd op de huidige pagina
      if (this.currentPage === 1) return 'progress-page-1';
      if (this.currentPage === 2) return 'progress-page-2';
      if (this.currentPage === 3) return 'progress-page-3';
      if (this.currentPage === 4) return 'progress-page-4';
      return '';
    },
    percentageClass() {
      // Retourneert de CSS-klasse voor percentage-tekst gebaseerd op de huidige pagina
      if (this.currentPage === 1) return 'percentage-page-1';
      if (this.currentPage === 2) return 'percentage-page-2';
      if (this.currentPage === 3) return 'percentage-page-3';
      if (this.currentPage === 4) return 'percentage-page-4';
      return '';
    }
  },
  watch: {
    currentPage(newPage, oldPage) {
      // Start animatie bij wijziging van de pagina
      this.animateProgressBar();
    }
  },
  methods: {
    animateProgressBar() {
      const element = this.$refs.progressBar;
      const targetWidth = this.progressPercentage;

      // Start animatie door de juiste CSS-klasse te gebruiken
      element.style.width = `${targetWidth}%`;
    }
  },
  mounted() {
    // Initialisatie bij het laden van de component
    this.animateProgressBar();
  }
});
// CONCATENATED MODULE: ./src/components/progressiebalk.vue?vue&type=script&lang=js
 /* harmony default export */ var components_progressiebalkvue_type_script_lang_js = (progressiebalkvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/progressiebalk.vue?vue&type=style&index=0&id=c65def4a&prod&scoped=true&lang=css
var progressiebalkvue_type_style_index_0_id_c65def4a_prod_scoped_true_lang_css = __webpack_require__("20b2");

// CONCATENATED MODULE: ./src/components/progressiebalk.vue






/* normalize component */

var progressiebalk_component = Object(componentNormalizer["a" /* default */])(
  components_progressiebalkvue_type_script_lang_js,
  progressiebalkvue_type_template_id_c65def4a_scoped_true_render,
  progressiebalkvue_type_template_id_c65def4a_scoped_true_staticRenderFns,
  false,
  null,
  "c65def4a",
  null
  
)

/* harmony default export */ var progressiebalk = (progressiebalk_component.exports);
// CONCATENATED MODULE: ./src/antwoorden.js
let antwoorden = {};
function addAntwoord(vraag, antwoord) {
  antwoorden[vraag] = antwoord;
  localStorage.setItem('antwoorden', JSON.stringify(antwoorden));
}
function getAntwoorden() {
  return JSON.parse(localStorage.getItem('antwoorden')) || {};
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vraag1.vue?vue&type=script&lang=js




/* harmony default export */ var vraag1vue_type_script_lang_js = ({
  name: "vraag1",
  components: {
    LogoNlAdviesAirco: LogoNlAdviesAirco,
    progressiebalk: progressiebalk
  },
  props: {
    spanText1: String,
    spanText2: String,
    logoNLAdviesAircoProps: Object
  },
  data() {
    return {
      formData: {
        zip: localStorage.getItem('postcode') || '',
        house_number: '',
        street: ''
      },
      streets: JSON.parse(localStorage.getItem('straatnaam')) || [],
      currentPage: 1,
      error: ''
    };
  },
  methods: {
    navigateToNextPage() {
      // Validatie van house_number en street
      if (!this.formData.house_number || isNaN(this.formData.house_number)) {
        alert('Voer een geldig huisnummer in.');
        return;
      }
      if (!this.formData.street) {
        alert('Selecteer een straatnaam.');
        return;
      }

      // Voeg de antwoorden toe aan de antwoorden object
      addAntwoord({
        zip: this.formData.zip,
        house_number: this.formData.house_number,
        street: this.formData.street
      });

      // Sla postcode, straatnaam en huisnummer op in localStorage
      localStorage.setItem('postcode', this.formData.zip);
      localStorage.setItem('straatnaam', JSON.stringify(this.streets));
      localStorage.setItem('huisnummer', this.formData.house_number);
      localStorage.setItem('selectedStreet', this.formData.street);

      // Voor debuggen, log de antwoorden naar de console
      console.log('Antwoorden na toevoegen:', getAntwoorden());

      // Navigeer naar de volgende vraag
      this.$router.push('/vraag2');
    }
  },
  mounted() {
    // Haal de straatnaam op bij het laden van de pagina als er een postcode is opgeslagen
    if (this.formData.zip) {
      this.fetchStreets();
    }
  }
});
// CONCATENATED MODULE: ./src/components/vraag1.vue?vue&type=script&lang=js
 /* harmony default export */ var components_vraag1vue_type_script_lang_js = (vraag1vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/vraag1.vue?vue&type=style&index=0&id=b1c0b542&prod&lang=sass
var vraag1vue_type_style_index_0_id_b1c0b542_prod_lang_sass = __webpack_require__("4fec");

// CONCATENATED MODULE: ./src/components/vraag1.vue






/* normalize component */

var vraag1_component = Object(componentNormalizer["a" /* default */])(
  components_vraag1vue_type_script_lang_js,
  vraag1vue_type_template_id_b1c0b542_render,
  vraag1vue_type_template_id_b1c0b542_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vraag1 = (vraag1_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vraag2.vue?vue&type=template&id=4595c572
var vraag2vue_type_template_id_4595c572_render = function render() {
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
    staticClass: "achtergrond-vraag1"
  }, [_c('div', {
    staticClass: "overkoepelende-container"
  }, [_c('progressiebalk', {
    attrs: {
      "currentPage": _vm.currentPage
    }
  }), _c('div', {
    staticClass: "vraag1-container"
  }, [_c('div', {
    staticClass: "container-voor-gegevens"
  }, [_c('div', {
    staticClass: "afbeelding-van-pijl"
  }, [_c('router-link', {
    attrs: {
      "to": "./vraag1"
    }
  }, [_c('svg', {
    staticClass: "pijl-vraag1",
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
  })])])])], 1), _vm._m(0), _c('p', {
    staticClass: "vraag2"
  }, [_vm._v("Welk type airco ben je geïnteresseerd in?")]), _c('div', {
    staticClass: "container-inputs"
  }, [_c('div', {
    staticClass: "overkoepelende-input-container"
  }, [_c('form', [_c('label', {
    staticClass: "radio-input",
    on: {
      "click": function ($event) {
        _vm.selectOption('Vaste airco met buitenunit (split airco)');
      }
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "options",
      "value": "Vaste airco met buitenunit (split airco)"
    }
  }), _c('svg', {
    staticClass: "gele-rondje",
    attrs: {
      "width": "18",
      "height": "19",
      "viewBox": "0 0 18 19",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('circle', {
    attrs: {
      "id": "Ellipse 5",
      "cx": "9",
      "cy": "9.5",
      "r": "9",
      "fill": "#FFCD02"
    }
  })]), _c('span', {
    staticClass: "text-input"
  }, [_vm._v("Vaste airco met buitenunit (split airco)")])]), _c('label', {
    staticClass: "radio-input",
    on: {
      "click": function ($event) {
        _vm.selectOption('Vaste airco zonder buitenunit (monoblock)');
      }
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "options",
      "value": "Vaste airco zonder buitenunit (monoblock)"
    }
  }), _c('svg', {
    staticClass: "gele-rondje",
    attrs: {
      "width": "18",
      "height": "19",
      "viewBox": "0 0 18 19",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('circle', {
    attrs: {
      "id": "Ellipse 5",
      "cx": "9",
      "cy": "9.5",
      "r": "9",
      "fill": "#FFCD02"
    }
  })]), _c('span', {
    staticClass: "text-input"
  }, [_vm._v("Vaste airco zonder buitenunit (monoblock)")])]), _c('label', {
    staticClass: "radio-input",
    on: {
      "click": function ($event) {
        return _vm.selectOption('Ik wil graag advies');
      }
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "options",
      "value": "Ik wil graag advies"
    }
  }), _c('svg', {
    staticClass: "gele-rondje",
    attrs: {
      "width": "18",
      "height": "19",
      "viewBox": "0 0 18 19",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('circle', {
    attrs: {
      "id": "Ellipse 5",
      "cx": "9",
      "cy": "9.5",
      "r": "9",
      "fill": "#FFCD02"
    }
  })]), _c('span', {
    staticClass: "text-input"
  }, [_vm._v("Ik wil graag advies")])])])])])]), _vm._m(1), _vm._m(2)])], 1)]), _c('p', {
    staticClass: "footer"
  }, [_vm._v("© Nederlandsadvies.nl | Algemene voorwaarden | Privacy policy")])]);
};
var vraag2vue_type_template_id_4595c572_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vraag-hoeveel"
  }, [_c('p', [_vm._v("Vraag 2 van 3")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-afbeelding-desktop"
  }, [_c('img', {
    staticClass: "afbeelding-border-desktop",
    attrs: {
      "id": "afbeelding-border-desktop",
      "src": __webpack_require__("48bf"),
      "alt": ""
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-afbeelding-mobiel"
  }, [_c('img', {
    staticClass: "afbeelding-mobiel",
    attrs: {
      "id": "afbeelding-mobiel",
      "src": __webpack_require__("e372"),
      "alt": "afbeelding mobiel"
    }
  })]);
}];

// CONCATENATED MODULE: ./src/components/vraag2.vue?vue&type=template&id=4595c572

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vraag2.vue?vue&type=script&lang=js




/* harmony default export */ var vraag2vue_type_script_lang_js = ({
  name: "vraag2",
  components: {
    LogoNlAdviesAirco: LogoNlAdviesAirco,
    progressiebalk: progressiebalk
  },
  props: ["spanText1", "spanText2", "logoNLAdviesAircoProps"],
  data() {
    return {
      currentPage: 2,
      antwoordOpties: {
        'Vaste airco met buitenunit (split airco)': 5112,
        'Vaste airco zonder buitenunit (monoblock)': 5115,
        'Ik wil graag advies': 5118
      },
      geselecteerdAntwoordId: null
    };
  },
  methods: {
    selectOption(optionText) {
      const answerId = this.antwoordOpties[optionText];
      if (answerId) {
        this.geselecteerdAntwoordId = answerId;
        addAntwoord('vraag2', {
          id: answerId
        }); // Correct the answer format
        console.log(`Antwoord voor vraag2 toegevoegd: ${answerId}`);
        this.$router.push('/vraag3');
      } else {
        console.error('Onbekende optie geselecteerd:', optionText);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vraag2.vue?vue&type=script&lang=js
 /* harmony default export */ var components_vraag2vue_type_script_lang_js = (vraag2vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/vraag2.vue?vue&type=style&index=0&id=4595c572&prod&lang=sass
var vraag2vue_type_style_index_0_id_4595c572_prod_lang_sass = __webpack_require__("a4d5");

// CONCATENATED MODULE: ./src/components/vraag2.vue






/* normalize component */

var vraag2_component = Object(componentNormalizer["a" /* default */])(
  components_vraag2vue_type_script_lang_js,
  vraag2vue_type_template_id_4595c572_render,
  vraag2vue_type_template_id_4595c572_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vraag2 = (vraag2_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vraag3.vue?vue&type=template&id=de20be00
var vraag3vue_type_template_id_de20be00_render = function render() {
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
    staticClass: "achtergrond-vraag1"
  }, [_c('div', {
    staticClass: "overkoepelende-container"
  }, [_c('progressiebalk', {
    attrs: {
      "currentPage": _vm.currentPage,
      "totalPages": _vm.totalPages
    }
  }), _c('div', {
    staticClass: "vraag1-container"
  }, [_c('div', {
    staticClass: "container-voor-gegevens"
  }, [_c('div', {
    staticClass: "afbeelding-van-pijl"
  }, [_c('router-link', {
    attrs: {
      "to": "./vraag2"
    }
  }, [_c('svg', {
    staticClass: "pijl-vraag1",
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
  })])])])], 1), _vm._m(0), _vm._m(1), _c('div', {
    staticClass: "container-inputs"
  }, [_c('div', {
    staticClass: "overkoepelende-input-container"
  }, [_c('form', [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedOption,
      expression: "selectedOption"
    }],
    staticClass: "select-vraag3",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedOption = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": ""
    }
  }, [_vm._v("Selecteer een optie")]), _vm._l(_vm.opties, function (optie) {
    return _c('option', {
      key: optie.id,
      domProps: {
        "value": optie.id
      }
    }, [_vm._v(" " + _vm._s(optie.label) + " ")]);
  })], 2)])])]), _c('div', {
    staticClass: "volgende"
  }, [_c('button', {
    staticClass: "volgende-button",
    on: {
      "click": _vm.navigateToNextPage
    }
  }, [_vm._v("Volgende")])])]), _vm._m(2), _vm._m(3)])], 1)]), _c('p', {
    staticClass: "footer"
  }, [_vm._v("© Nederlandsadvies.nl | Algemene voorwaarden | Privacy policy")])]);
};
var vraag3vue_type_template_id_de20be00_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vraag-hoeveel"
  }, [_c('p', [_vm._v("Vraag 3 van 3")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('p', {
    staticClass: "vraag3"
  }, [_vm._v(" In hoeveel ruimtes wil je "), _c('br', {
    staticClass: "mobiel"
  }), _vm._v(" de airconditioning "), _c('br', {
    staticClass: "mobiel"
  }), _vm._v(" installeren? ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-afbeelding-desktop"
  }, [_c('img', {
    staticClass: "afbeelding-border-desktop",
    attrs: {
      "id": "afbeelding-border-desktop",
      "src": __webpack_require__("48bf"),
      "alt": ""
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-afbeelding-mobiel"
  }, [_c('img', {
    staticClass: "afbeelding-mobiel",
    attrs: {
      "id": "afbeelding-mobiel",
      "src": __webpack_require__("e372"),
      "alt": "afbeelding mobiel"
    }
  })]);
}];

// CONCATENATED MODULE: ./src/components/vraag3.vue?vue&type=template&id=de20be00

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vraag3.vue?vue&type=script&lang=js




/* harmony default export */ var vraag3vue_type_script_lang_js = ({
  name: "vraag3",
  components: {
    LogoNlAdviesAirco: LogoNlAdviesAirco,
    progressiebalk: progressiebalk
  },
  props: ["spanText1", "spanText2", "logoNLAdviesAircoProps"],
  data() {
    return {
      currentPage: 3,
      totalPages: 3,
      selectedOption: '',
      opties: [{
        id: 5121,
        label: '1'
      }, {
        id: 5124,
        label: '2'
      }, {
        id: 5127,
        label: '3+'
      }, {
        id: 5130,
        label: 'Weet ik niet'
      }]
    };
  },
  methods: {
    navigateToNextPage() {
      if (this.selectedOption) {
        addAntwoord('vraag3', {
          id: this.selectedOption
        });
        console.log(`Selected option for vraag3: ${this.selectedOption}`);
        this.$router.push('./formulier');
      } else {
        alert("Selecteer een optie voordat je doorgaat.");
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vraag3.vue?vue&type=script&lang=js
 /* harmony default export */ var components_vraag3vue_type_script_lang_js = (vraag3vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/vraag3.vue?vue&type=style&index=0&id=de20be00&prod&lang=sass
var vraag3vue_type_style_index_0_id_de20be00_prod_lang_sass = __webpack_require__("6f37");

// CONCATENATED MODULE: ./src/components/vraag3.vue






/* normalize component */

var vraag3_component = Object(componentNormalizer["a" /* default */])(
  components_vraag3vue_type_script_lang_js,
  vraag3vue_type_template_id_de20be00_render,
  vraag3vue_type_template_id_de20be00_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vraag3 = (vraag3_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/analyse.vue?vue&type=template&id=6f082a94
var analysevue_type_template_id_6f082a94_render = function render() {
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
  }, [_vm._v(_vm._s(_vm.spanText2))])])])]), _vm._m(0), _c('p', {
    staticClass: "footer"
  }, [_vm._v("© Nederlandsadvies.nl | Algemene voorwaarden | Privacy policy")])]);
};
var analysevue_type_template_id_6f082a94_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "achtergrond-vraag1"
  }, [_c('div', {
    staticClass: "overkoepelende-container"
  }, [_c('div', {
    staticClass: "witte-container"
  }, [_c('p', {
    staticClass: "domeinnaam"
  }, [_vm._v("Nederlandsadvies.nl")]), _c('p', {
    staticClass: "analyseert-gegevens"
  }, [_vm._v("analyseert nu je gegevens...")]), _c('div', {
    staticClass: "laadbalk-analyse"
  }, [_c('div', {
    staticClass: "geladen-gedeelte-vraag-analyse"
  }, [_c('div', {
    staticClass: "procent"
  }, [_vm._v("43%")])])]), _c('ul', {
    staticClass: "lijst-analyse"
  }, [_c('li', {
    staticClass: "lijst-items-analyse"
  }, [_vm._v("Jouw woning komt in aanmerking voor airconditioning")]), _c('li', {
    staticClass: "lijst-items-analyse"
  }, [_vm._v("Jij kunt besparen op je gasrekening met airconditioning")]), _c('li', {
    staticClass: "lijst-items-analyse"
  }, [_vm._v("Wij hebben de juiste vakmannen beschikbaar voor jou")]), _c('li', {
    staticClass: "lijst-items-analyse"
  }, [_vm._v("Bespaar tot 40% op de aanschaf")])]), _c('p', {
    staticClass: "woningscan"
  }, [_vm._v("We sturen je nu door om de woningscan af te ronden...")])])])]);
}];

// CONCATENATED MODULE: ./src/components/analyse.vue?vue&type=template&id=6f082a94

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/analyse.vue?vue&type=script&lang=js


/* harmony default export */ var analysevue_type_script_lang_js = ({
  name: "analyse",
  components: {
    LogoNlAdviesAirco: LogoNlAdviesAirco
  },
  props: ["spanText1", "spanText2", "logoNLAdviesAircoProps"],
  methods: {
    navigateToNextPage() {
      this.$router.push('./analyse');
    }
  }
});
// CONCATENATED MODULE: ./src/components/analyse.vue?vue&type=script&lang=js
 /* harmony default export */ var components_analysevue_type_script_lang_js = (analysevue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/analyse.vue?vue&type=style&index=0&id=6f082a94&prod&lang=sass
var analysevue_type_style_index_0_id_6f082a94_prod_lang_sass = __webpack_require__("33d2");

// CONCATENATED MODULE: ./src/components/analyse.vue






/* normalize component */

var analyse_component = Object(componentNormalizer["a" /* default */])(
  components_analysevue_type_script_lang_js,
  analysevue_type_template_id_6f082a94_render,
  analysevue_type_template_id_6f082a94_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var analyse = (analyse_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/formulier.vue?vue&type=template&id=4fb92225
var formuliervue_type_template_id_4fb92225_render = function render() {
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
    staticClass: "formulier-achtergrond-vraag1"
  }, [_c('div', {
    staticClass: "formulier-overkoepelende-container"
  }, [_c('div', {
    staticClass: "formulier-formulier-container"
  }, [_c('p', {
    staticClass: "titel-formulier"
  }, [_vm._v("Bedankt, start nu ook met besparen!")]), _vm._m(0), _c('p', {
    staticClass: "mensen-gingen-voor"
  }, [_vm._v("Al meer dan 1,2 miljoen mensen ging je voor.")]), _c('div', {
    staticClass: "formulier-form-container"
  }, [_c('form', {
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.afronden.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "formulier-input-group"
  }, [_c('div', {
    staticClass: "formulier-input-item"
  }, [_c('label', {
    attrs: {
      "for": "input-voornaam"
    }
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.firstname,
      expression: "formData.firstname"
    }],
    staticClass: "input-voornaam",
    attrs: {
      "type": "text",
      "id": "input-voornaam",
      "placeholder": "Voornaam"
    },
    domProps: {
      "value": _vm.formData.firstname
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "firstname", $event.target.value);
      }
    }
  }), _vm.errors.firstname ? _c('span', {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.firstname))]) : _vm._e()]), _c('div', {
    staticClass: "formulier-input-item"
  }, [_c('label', {
    attrs: {
      "for": "input-achternaam"
    }
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.lastname,
      expression: "formData.lastname"
    }],
    staticClass: "input-achternaam",
    attrs: {
      "type": "text",
      "id": "input-achternaam",
      "placeholder": "Achternaam"
    },
    domProps: {
      "value": _vm.formData.lastname
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "lastname", $event.target.value);
      }
    }
  }), _vm.errors.lastname ? _c('span', {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.lastname))]) : _vm._e()])]), _c('div', {
    staticClass: "formulier-input-group"
  }, [_c('div', {
    staticClass: "formulier-input-item"
  }, [_c('label', {
    attrs: {
      "for": "input-telefoon"
    }
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.phone_number,
      expression: "formData.phone_number"
    }],
    staticClass: "input-telefoon",
    attrs: {
      "type": "text",
      "id": "input-telefoon",
      "placeholder": "Telefoonnummer"
    },
    domProps: {
      "value": _vm.formData.phone_number
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "phone_number", $event.target.value);
      }
    }
  }), _vm.errors.phone_number ? _c('span', {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.phone_number))]) : _vm._e()]), _c('div', {
    staticClass: "formulier-input-item"
  }, [_c('label', {
    attrs: {
      "for": "input-email"
    }
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.email,
      expression: "formData.email"
    }],
    staticClass: "input-email",
    attrs: {
      "type": "text",
      "id": "input-email",
      "placeholder": "E-mailadres"
    },
    domProps: {
      "value": _vm.formData.email
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "email", $event.target.value);
      }
    }
  }), _vm.errors.email ? _c('span', {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.email))]) : _vm._e()])]), _vm._m(1)])]), _vm._m(2)])])]), _c('p', {
    staticClass: "formulier-footer"
  }, [_vm._v("© Nederlandsadvies.nl | Algemene voorwaarden | Privacy policy")])]);
};
var formuliervue_type_template_id_4fb92225_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('p', {
    staticClass: "subtitel-formulier"
  }, [_vm._v(" Ontvang gratis en vrijblijvend 3"), _c('br'), _vm._v(" airconditioning offertes met persoonlijk"), _c('br'), _vm._v(" advies van de beste partners/bedrijven uit jouw regio ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "formulier-volgende-formulier"
  }, [_c('button', {
    staticClass: "formulier-volgende-button-formulier",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Aanvraag afronden")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('p', {
    staticClass: "formulier-footer-formulier"
  }, [_vm._v("Je gegevens worden uitsluitend gebruikt om jou te voorzien van gratis,"), _c('br'), _vm._v("persoonlijk advies en offertes van onze partners."), _c('br'), _vm._v("Dit is volledig vrijblijvend, je zit dus nergens aan vast.")]);
}];

// CONCATENATED MODULE: ./src/components/formulier.vue?vue&type=template&id=4fb92225

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-exception.stack.js
var web_dom_exception_stack = __webpack_require__("b7ef");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/formulier.vue?vue&type=script&lang=js




/* harmony default export */ var formuliervue_type_script_lang_js = ({
  name: "formulier",
  components: {
    LogoNlAdviesAirco: LogoNlAdviesAirco
  },
  data() {
    return {
      formData: {
        firstname: '',
        lastname: '',
        email: '',
        phone_number: '',
        street: localStorage.getItem('selectedStreet') || '',
        house_number: localStorage.getItem('huisnummer') || '',
        city: localStorage.getItem('city') || '',
        zip: localStorage.getItem('postcode') || ''
      },
      errors: {
        firstname: '',
        lastname: '',
        email: '',
        phone_number: ''
      }
    };
  },
  props: ["spanText1", "spanText2", "logoNLAdviesAircoProps", "antwoorden"],
  mounted() {
    const antwoordenData = getAntwoorden();
    console.log('Ophalen antwoorden bij mount:', antwoordenData);
    if (antwoordenData && antwoordenData.vraag1) {
      this.formData.street = antwoordenData.vraag1.street || this.formData.street;
      this.formData.house_number = antwoordenData.vraag1.house_number || this.formData.house_number;
      this.formData.zip = antwoordenData.vraag1.zip || this.formData.zip;
    }
  },
  methods: {
    validateFirstname() {
      console.log("Validating voornaam:", this.formData.firstname);
      const regex = /^[a-zA-Z\s.,'-]{1,}$/;
      if (!this.formData.firstname.match(regex)) {
        this.errors.firstname = 'Ongeldige voornaam. Gebruik alleen letters, spaties en leestekens.';
        return false;
      }
      this.errors.firstname = '';
      return true;
    },
    validateLastname() {
      console.log("Validating achternaam:", this.formData.lastname);
      const regex = /^[a-zA-Z\s.,'-]{1,}$/;
      if (!this.formData.lastname.match(regex)) {
        this.errors.lastname = 'Ongeldige achternaam. Gebruik alleen letters, spaties en leestekens.';
        return false;
      }
      this.errors.lastname = '';
      return true;
    },
    validateEmail() {
      console.log("Validating email:", this.formData.email);
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const containsApostrophe = /'/;
      if (!this.formData.email.match(regex) || this.formData.email.match(containsApostrophe)) {
        this.errors.email = 'Ongeldig e-mailadres.';
        return false;
      }
      this.errors.email = '';
      return true;
    },
    validateAndFormatPhoneNumber(phoneNumber) {
      phoneNumber = phoneNumber.replace(/[^0-9+]/g, '');
      const dutchRegex = /^(06[0-9]{8}|[+]{0,1}31[0]?[0-9]{9,10}|0031[0]?[0-9]{9,10})$/;
      if (!phoneNumber.match(dutchRegex)) {
        console.error('Ongeldig telefoonnummer');
        return null;
      }
      phoneNumber = phoneNumber.replace(/^0+/, '');
      if (phoneNumber.startsWith('0') && (phoneNumber.length === 10 || phoneNumber.length === 11)) {
        phoneNumber = '+31' + phoneNumber.substring(1);
      } else if (phoneNumber.startsWith('6') && phoneNumber.length === 9) {
        phoneNumber = '+31' + phoneNumber;
      } else if (phoneNumber.startsWith('31') && phoneNumber.length === 11) {
        phoneNumber = '+' + phoneNumber;
      } else if (phoneNumber.startsWith('+31')) {} else if (phoneNumber.startsWith('0031')) {
        phoneNumber = '+' + phoneNumber.substring(2);
      } else {
        console.error('Ongeldig telefoonnummer');
        return null;
      }
      if (phoneNumber.length !== 12) {
        console.error('Telefoonnummer moet in het formaat +31XXXXXXXXX zijn.');
        return null;
      }
      return phoneNumber;
    },
    validatePhoneNumber() {
      console.log("Validating telefoonnummer:", this.formData.phone_number);
      const phoneNumber = this.validateAndFormatPhoneNumber(this.formData.phone_number);
      if (!phoneNumber) {
        console.error('Ongeldig telefoonnummer.');
        this.errors.phone_number = 'Ongeldig telefoonnummer.';
        return false;
      }
      this.errors.phone_number = '';
      this.formData.phone_number = phoneNumber; // Update the phone number to the formatted version
      return true;
    },
    validateForm() {
      const isFirstnameValid = this.validateFirstname();
      const isLastnameValid = this.validateLastname();
      const isEmailValid = this.validateEmail();
      const isPhoneNumberValid = this.validatePhoneNumber();
      return isFirstnameValid && isLastnameValid && isEmailValid && isPhoneNumberValid;
    },
    afronden() {
      if (!this.validateForm()) {
        console.error('Formulier bevat ongeldige waarden.');
        return;
      }
      const username = '185';
      const password = 'ab8221d4a3170d89542880459abf79817ae367c2';
      const authHeader = 'Basic ' + btoa(username + ':' + password);
      const apiUrl = 'https://leadgen.republish.nl/api/sponsors/2394/leads';
      const antwoordenData = getAntwoorden();
      console.log('Antwoorden voor afronden:', antwoordenData);
      const answers = [5109, antwoordenData.vraag2 ? antwoordenData.vraag2.id : null, antwoordenData.vraag3 ? antwoordenData.vraag3.id : null].filter(id => id !== null);
      const now = new Date();
      now.setHours(now.getHours() + 2); // Voeg 2 uur toe
      const optinTimestamp = now.toISOString().slice(0, 19).replace('T', ' ');
      const leadData = {
        language: 'nl_NL',
        publisher_id: 'Morris de publisher :)',
        site_subid: 'id=5',
        site_custom_url: 'http://nederlansadvies.nl',
        site_custom_name: 'airco',
        ip: 'userIPAddress',
        optin_timestamp: optinTimestamp,
        firstname: this.formData.firstname,
        lastname: this.formData.lastname,
        email: this.formData.email,
        gender: 'male',
        house_number: this.formData.house_number,
        street: this.formData.street,
        city: this.formData.city,
        zip: this.formData.zip,
        phone_number: this.formData.phone_number,
        answers: answers
      };
      console.log('Preparing to send the following data to the API:');
      console.log('API URL:', apiUrl);
      console.log('Authorization Header:', authHeader);
      console.log('Lead Data:', leadData);
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(leadData)
      }).then(response => {
        console.log('Response Status:', response.status);
        return response.json();
      }).then(responseData => {
        console.log('API Response Data:', responseData);
        if (responseData.status === 201) {
          console.log('Lead successfully created.');
          this.$router.push('./einde');
        } else if (responseData.status === 400) {
          console.log('Bad request. Please check the parameters.');
        } else if (responseData.status === 401) {
          console.log('Unauthorized. Please check your credentials.');
        } else {
          console.log('Unexpected error:', responseData.status);
        }
      }).catch(error => {
        console.error('Error:', error);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/formulier.vue?vue&type=script&lang=js
 /* harmony default export */ var components_formuliervue_type_script_lang_js = (formuliervue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/formulier.vue?vue&type=style&index=0&id=4fb92225&prod&lang=sass
var formuliervue_type_style_index_0_id_4fb92225_prod_lang_sass = __webpack_require__("8127");

// CONCATENATED MODULE: ./src/components/formulier.vue






/* normalize component */

var formulier_component = Object(componentNormalizer["a" /* default */])(
  components_formuliervue_type_script_lang_js,
  formuliervue_type_template_id_4fb92225_render,
  formuliervue_type_template_id_4fb92225_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var formulier = (formulier_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12ccd5c8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/postcode.vue?vue&type=template&id=597a79b4&scoped=true
var postcodevue_type_template_id_597a79b4_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "postcode-container"
  }, [_c('h1', [_vm._v("Postcode naar Straatnaam")]), _c('div', {
    staticClass: "input-group"
  }, [_c('label', {
    attrs: {
      "for": "postcode-input"
    }
  }, [_vm._v("Postcode:")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.postcode,
      expression: "postcode"
    }],
    attrs: {
      "id": "postcode-input",
      "type": "text",
      "placeholder": "Voer postcode in"
    },
    domProps: {
      "value": _vm.postcode
    },
    on: {
      "change": _vm.fetchStreetNames,
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.postcode = $event.target.value;
      }
    }
  })]), _vm.streets.length > 0 ? _c('div', {
    staticClass: "input-group"
  }, [_c('label', {
    attrs: {
      "for": "street-select"
    }
  }, [_vm._v("Straat:")]), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedStreet,
      expression: "selectedStreet"
    }],
    attrs: {
      "id": "street-select"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedStreet = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": ""
    }
  }, [_vm._v("Selecteer een straatnaam")]), _vm._l(_vm.streets, function (street) {
    return _c('option', {
      key: street,
      domProps: {
        "value": street
      }
    }, [_vm._v(_vm._s(street))]);
  })], 2)]) : _vm._e(), _c('button', {
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("Submit")]), _vm.errorMessage ? _c('div', {
    staticClass: "error-message"
  }, [_vm._v(" " + _vm._s(_vm.errorMessage) + " ")]) : _vm._e()]);
};
var postcodevue_type_template_id_597a79b4_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/postcode.vue?vue&type=template&id=597a79b4&scoped=true

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 43 modules
var axios = __webpack_require__("cee4");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/postcode.vue?vue&type=script&lang=js

/* harmony default export */ var postcodevue_type_script_lang_js = ({
  name: "Postcode",
  data() {
    return {
      postcode: '',
      streets: [],
      selectedStreet: '',
      errorMessage: ''
    };
  },
  methods: {
    async fetchStreetNames() {
      const pattern = /^[1-9][0-9]{3}\s?[-]?[a-zA-Z]{2}$/;
      if (!pattern.test(this.postcode)) {
        this.errorMessage = 'Ongeldige postcode.';
        this.streets = [];
        return;
      }
      this.errorMessage = '';
      try {
        console.log(`Fetching street names for postcode: ${this.postcode}`);
        const response = await axios["a" /* default */].get(`https://api.postcodeapi.nu/v3/lookup/${this.postcode}`, {
          headers: {
            'X-Api-Key': '0kwzCamtlw4aqtUAK60UTaKjc02VOBXH3MASy2TO' // Vervang 'YOUR_API_KEY' met je echte API sleutel
          }
        });
        console.log('API response:', response.data);
        this.streets = response.data.street ? [response.data.street] : [];
        this.selectedStreet = ''; // Reset the selected street when a new postcode is entered
        console.log('Streets:', this.streets);
      } catch (error) {
        console.error('Error fetching street names:', error);
        this.errorMessage = 'Kon de straatnaam niet ophalen. Controleer de postcode en probeer het opnieuw.';
        this.streets = [];
      }
    },
    submit() {
      if (!this.selectedStreet) {
        this.errorMessage = 'Selecteer een straatnaam.';
        return;
      }
      this.errorMessage = '';
      alert(`Postcode: ${this.postcode}, Straatnaam: ${this.selectedStreet}`);
      // Hier kun je verdere verwerking toevoegen, zoals het verzenden van gegevens naar een server
    }
  }
});
// CONCATENATED MODULE: ./src/components/postcode.vue?vue&type=script&lang=js
 /* harmony default export */ var components_postcodevue_type_script_lang_js = (postcodevue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/postcode.vue?vue&type=style&index=0&id=597a79b4&prod&scoped=true&lang=css
var postcodevue_type_style_index_0_id_597a79b4_prod_scoped_true_lang_css = __webpack_require__("0010");

// CONCATENATED MODULE: ./src/components/postcode.vue






/* normalize component */

var postcode_component = Object(componentNormalizer["a" /* default */])(
  components_postcodevue_type_script_lang_js,
  postcodevue_type_template_id_597a79b4_scoped_true_render,
  postcodevue_type_template_id_597a79b4_scoped_true_staticRenderFns,
  false,
  null,
  "597a79b4",
  null
  
)

/* harmony default export */ var postcode = (postcode_component.exports);
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
    path: '/vraag3',
    component: vraag3,
    props: {
      ...campagneStartData
    }
  }, {
    path: '/analyse',
    component: analyse,
    props: {
      ...campagneStartData
    }
  }, {
    path: '/formulier',
    component: formulier,
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
    path: '/postcode',
    component: postcode,
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

/***/ "5a16":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "601a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "65d4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XButton_vue_vue_type_style_index_0_id_f7c2205e_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d37b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XButton_vue_vue_type_style_index_0_id_f7c2205e_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XButton_vue_vue_type_style_index_0_id_f7c2205e_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6d84":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6f37":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vraag3_vue_vue_type_style_index_0_id_de20be00_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9844");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vraag3_vue_vue_type_style_index_0_id_de20be00_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vraag3_vue_vue_type_style_index_0_id_de20be00_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7259":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "78da":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie4_vue_vue_type_style_index_0_id_2a034a0c_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7a60");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie4_vue_vue_type_style_index_0_id_2a034a0c_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie4_vue_vue_type_style_index_0_id_2a034a0c_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7927":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7a60":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8127":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formulier_vue_vue_type_style_index_0_id_4fb92225_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3350");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formulier_vue_vue_type_style_index_0_id_4fb92225_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formulier_vue_vue_type_style_index_0_id_4fb92225_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "906c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie2_vue_vue_type_style_index_0_id_60889158_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("51b7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie2_vue_vue_type_style_index_0_id_60889158_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie2_vue_vue_type_style_index_0_id_60889158_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9844":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a4d5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vraag2_vue_vue_type_style_index_0_id_4595c572_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ad60");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vraag2_vue_vue_type_style_index_0_id_4595c572_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vraag2_vue_vue_type_style_index_0_id_4595c572_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "aaca":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ad60":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "aef0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie3_vue_vue_type_style_index_0_id_f510573e_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7927");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie3_vue_vue_type_style_index_0_id_f510573e_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sectie3_vue_vue_type_style_index_0_id_f510573e_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b4a5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XButton2_vue_vue_type_style_index_0_id_78db891c_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f3aa");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XButton2_vue_vue_type_style_index_0_id_78db891c_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XButton2_vue_vue_type_style_index_0_id_78db891c_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c9eb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_style_index_0_id_131af716_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("da31");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_style_index_0_id_131af716_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_style_index_0_id_131af716_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d37b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d6e4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group4_vue_vue_type_style_index_0_id_7cdfe998_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("43e3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group4_vue_vue_type_style_index_0_id_7cdfe998_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group4_vue_vue_type_style_index_0_id_7cdfe998_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "da31":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ded8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e372":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/firstQuestion.b563951f.png";

/***/ }),

/***/ "f3aa":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f7ff":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.1405af40.js.map