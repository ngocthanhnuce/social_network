module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/reset/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/reset/index.js":
/*!******************************!*\
  !*** ./pages/reset/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\pages\\reset\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function ResetPage() {
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: errorMsg,
    1: setErrorMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: emailChecked,
    1: setEmailChecked
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const resetPassword = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_2___default.a}/api/reset`, {
        email
      });
      setEmailChecked(true);
    } catch (error) {
      setErrorMsg(Object(_utils_catchErrors__WEBPACK_IMPORTED_MODULE_3__["default"])(error));
    }

    setLoading(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    errorMsg !== null && setTimeout(() => setErrorMsg(null), 5000);
  }, [errorMsg]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, emailChecked ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    attached: true,
    icon: "mail",
    header: "Ki\u1EC3m tra email c\u1EE7a b\u1EA1n",
    content: "Vui l\xF2ng ki\u1EC3m tra h\u1ED9p th\u01B0 \u0111\u1EBFn c\u1EE7a b\u1EA1n \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u01B0\u1EDBng d\u1EABn th\xEAm",
    success: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    attached: true,
    icon: "settings",
    header: "\u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u",
    color: "teal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    loading: loading,
    onSubmit: resetPassword,
    error: errorMsg !== null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    error: true,
    header: "Error!",
    content: errorMsg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    icon: "mail outline",
    type: "email",
    iconPosition: "left",
    label: "Email",
    placeholder: "Nh\u1EADp \u0111\u1ECBa ch\u1EC9 email",
    name: "email",
    onChange: e => setEmail(e.target.value),
    value: email,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    disabled: loading || email.length === 0,
    icon: "configure",
    type: "submit",
    color: "orange",
    content: "G\u1EEDi",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (ResetPage);

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const baseUrl = true ? "http://localhost:3000" : undefined;
module.exports = baseUrl;

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catchErrors = error => {
  let errorMsg;

  if (error.response) {
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVzZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvYmFzZVVybC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jYXRjaEVycm9ycy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJSZXNldFBhZ2UiLCJlbWFpbCIsInNldEVtYWlsIiwidXNlU3RhdGUiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiZW1haWxDaGVja2VkIiwic2V0RW1haWxDaGVja2VkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZXNldFBhc3N3b3JkIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJwb3N0IiwiYmFzZVVybCIsImVycm9yIiwiY2F0Y2hFcnJvcnMiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsInJlcXVlc3QiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVB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RUFBZixFOzs7Ozs7Ozs7OztBQ3BCQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9yZXNldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcmVzZXQvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBNZXNzYWdlLCBTZWdtZW50IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vLi4vdXRpbHMvYmFzZVVybFwiO1xuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gXCIuLi8uLi91dGlscy9jYXRjaEVycm9yc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5mdW5jdGlvbiBSZXNldFBhZ2UoKSB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgW2VtYWlsQ2hlY2tlZCwgc2V0RW1haWxDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgcmVzZXRQYXNzd29yZCA9IGFzeW5jIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvcmVzZXRgLCB7IGVtYWlsIH0pO1xuXG4gICAgICBzZXRFbWFpbENoZWNrZWQodHJ1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yTXNnKGNhdGNoRXJyb3JzKGVycm9yKSk7XG4gICAgfVxuXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBlcnJvck1zZyAhPT0gbnVsbCAmJiBzZXRUaW1lb3V0KCgpID0+IHNldEVycm9yTXNnKG51bGwpLCA1MDAwKTtcbiAgfSwgW2Vycm9yTXNnXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2VtYWlsQ2hlY2tlZCA/IChcbiAgICAgICAgPE1lc3NhZ2VcbiAgICAgICAgICBhdHRhY2hlZFxuICAgICAgICAgIGljb249XCJtYWlsXCJcbiAgICAgICAgICBoZWFkZXI9XCJLaeG7g20gdHJhIGVtYWlsIGPhu6dhIGLhuqFuXCJcbiAgICAgICAgICBjb250ZW50PVwiVnVpIGzDsm5nIGtp4buDbSB0cmEgaOG7mXAgdGjGsCDEkeG6v24gY+G7p2EgYuG6oW4gxJHhu4MgxJHGsOG7o2MgaMaw4bubbmcgZOG6q24gdGjDqm1cIlxuICAgICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxNZXNzYWdlIGF0dGFjaGVkIGljb249XCJzZXR0aW5nc1wiIGhlYWRlcj1cIsSQ4bq3dCBs4bqhaSBt4bqtdCBraOG6qXVcIiBjb2xvcj1cInRlYWxcIiAvPlxuICAgICAgKX1cblxuICAgICAgPEZvcm0gbG9hZGluZz17bG9hZGluZ30gb25TdWJtaXQ9e3Jlc2V0UGFzc3dvcmR9IGVycm9yPXtlcnJvck1zZyAhPT0gbnVsbH0+XG4gICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIkVycm9yIVwiIGNvbnRlbnQ9e2Vycm9yTXNnfSAvPlxuXG4gICAgICAgIDxTZWdtZW50PlxuICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgaWNvbj1cIm1haWwgb3V0bGluZVwiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmjhuq1wIMSR4buLYSBjaOG7iSBlbWFpbFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmcgfHwgZW1haWwubGVuZ3RoID09PSAwfVxuICAgICAgICAgICAgaWNvbj1cImNvbmZpZ3VyZVwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNvbG9yPVwib3JhbmdlXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJH4butaVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZWdtZW50PlxuICAgICAgPC9Gb3JtPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNldFBhZ2U7XG4iLCJjb25zdCBiYXNlVXJsID1cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiXG4gICAgPyBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiXG4gICAgOiBcImh0dHBzOi8vZ2F0by1zb2NpYWwtbmV0d29yay5oZXJva3VhcHAuY29tXCI7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVybDtcbiIsImNvbnN0IGNhdGNoRXJyb3JzID0gZXJyb3IgPT4ge1xuICBsZXQgZXJyb3JNc2c7XG5cbiAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG5cbiAgICBlcnJvck1zZyA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG5cbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcbiAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXF1ZXN0O1xuXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XG4gIH0gZWxzZSB7XG4gICAgZXJyb3JNc2cgPSBlcnJvci5tZXNzYWdlO1xuXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XG4gIH1cbiAgcmV0dXJuIGVycm9yTXNnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2F0Y2hFcnJvcnM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9