/*!
 * TinyMCE module for Spiral and sf.js v0.1.0
 * https://github.com/sfjs/sf-module-tinymce
 * Copyright (c) 2016, Yauheni Yasinau, spiralscout.com
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("sf"), require("Tinymce/tinymce.js"));
	else if(typeof define === 'function' && define.amd)
		define(["sf", "Tinymce/tinymce.js"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("sf"), require("Tinymce/tinymce.js")) : factory(root["sf"], root["Tinymce/tinymce.js"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _sf = __webpack_require__(1);
	
	var _sf2 = _interopRequireDefault(_sf);
	
	var _sfTinymce = __webpack_require__(2);
	
	var _sfTinymce2 = _interopRequireDefault(_sfTinymce);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_sf2.default.instancesController.registerInstanceType(_sfTinymce2.default, "js-sf-tinymce"); //resolved by webpack's "externals"
	
	module.exports = _sfTinymce2.default; // ES6 default export will not expose us as global

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _create = __webpack_require__(3);
	
	var _create2 = _interopRequireDefault(_create);
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _sf = __webpack_require__(1);
	
	var _sf2 = _interopRequireDefault(_sf);
	
	var _tinymce = __webpack_require__(6);
	
	var _tinymce2 = _interopRequireDefault(_tinymce);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SfTinymce = function SfTinymce(sf, node, options) {
	    this._construct(sf, node, options);
	};
	
	/**
	 * @lends sf.Form.prototype
	 */
	//resolved by webpack's "externals"
	SfTinymce.prototype = (0, _create2.default)(_sf2.default.core.BaseDOMConstructor.prototype);
	
	/**
	 * Name to register
	 * @type {string}
	 */
	SfTinymce.prototype.name = "tinymce";
	
	SfTinymce.prototype._construct = function (sf, node, options) {
	    var that = this;
	
	    this.init(sf, node, options); //call parent
	
	    this.uid = 'sf-uid-' + Math.random().toString(36).substr(2);
	    node.classList.add(this.uid);
	
	    if (this.options.baseURL) {
	        tinymce.baseURL = this.options.baseURL;
	    } else {
	        console.warn('You haven\'t specified baseURL path to tinyMCE resources');
	    }
	
	    tinymce.init(sf.tools.extend({ selector: '.' + this.uid }, this.options.config));
	};
	
	/**
	 * @override
	 * @inheritDoc
	 * @enum {string}
	 */
	SfTinymce.prototype.optionsToGrab = {
	    baseURL: {
	        domAttr: "data-base-url"
	    },
	    config: {
	        value: {},
	        domAttr: "data-config"
	    }
	};
	
	SfTinymce.prototype.die = function () {
	    delete this;
	};
	
	exports.default = SfTinymce;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(5);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=sf.tinymce.js.map