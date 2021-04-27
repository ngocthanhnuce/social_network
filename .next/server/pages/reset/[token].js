module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/reset/[token].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/reset/[token].js":
/*!********************************!*\
  !*** ./pages/reset/[token].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\pages\\reset\\[token].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function TokenPage() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    0: newPassword,
    1: setNewPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    field1: "",
    field2: ""
  });
  const {
    field1,
    field2
  } = newPassword;
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: success,
    1: setSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setNewPassword(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    errorMsg !== null && setTimeout(() => setErrorMsg(null), 5000);
  }, [errorMsg]);

  const resetPassword = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      if (field1 !== field2) {
        return setErrorMsg("Mất khẩu không hợp lệ");
      }

      await axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default.a}/api/reset/token`, {
        password: field1,
        token: router.query.token
      });
      setSuccess(true);
    } catch (error) {
      setErrorMsg(Object(_utils_catchErrors__WEBPACK_IMPORTED_MODULE_4__["default"])(error));
    }

    setLoading(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, success ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
    attached: true,
    success: true,
    size: "large",
    header: "\u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u th\xE0nh c\xF4ng",
    icon: "check",
    content: "\u0110\u0103ng nh\u1EADp l\u1EA1i",
    style: {
      cursor: "pointer"
    },
    onClick: () => router.push("/login"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
    attached: true,
    icon: "settings",
    header: "\u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u",
    color: "teal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }), !success && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    loading: loading,
    onSubmit: resetPassword,
    error: errorMsg !== null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
    error: true,
    header: "Error!",
    content: errorMsg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
    fluid: true,
    icon: "eye",
    type: "password",
    iconPosition: "left",
    label: "M\u1EADt kh\u1EA9u m\u1EDBi",
    placeholder: "Nh\u1EADp m\u1EADt kh\u1EA9u m\u1EDBi",
    name: "field1",
    onChange: handleChange,
    value: field1,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
    fluid: true,
    icon: "eye",
    type: "password",
    iconPosition: "left",
    label: "X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u",
    placeholder: "X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u m\u1EDBi",
    name: "field2",
    onChange: handleChange,
    value: field2,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    disabled: field1 === "" || field2 === "" || loading,
    icon: "configure",
    type: "submit",
    color: "orange",
    content: "\u0110\u1EB7t l\u1EA1i",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (TokenPage);

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVzZXQvW3Rva2VuXS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NhdGNoRXJyb3JzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiVG9rZW5QYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwibmV3UGFzc3dvcmQiLCJzZXROZXdQYXNzd29yZCIsInVzZVN0YXRlIiwiZmllbGQxIiwiZmllbGQyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldiIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJyZXNldFBhc3N3b3JkIiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInBvc3QiLCJiYXNlVXJsIiwicGFzc3dvcmQiLCJ0b2tlbiIsInF1ZXJ5IiwiZXJyb3IiLCJjYXRjaEVycm9ycyIsImN1cnNvciIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsInJlcXVlc3QiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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QVIsQ0FBY3BCLFFBQWQ7QUFDRCxHQUpNLE1BSUE7QUFDTEEsWUFBUSxHQUFHb0IsS0FBSyxDQUFDVSxPQUFqQjtBQUVBRixXQUFPLENBQUNSLEtBQVIsQ0FBY3BCLFFBQWQ7QUFDRDs7QUFDRCxTQUFPQSxRQUFQO0FBQ0QsQ0FsQkQ7O0FBb0JlcUIsMEVBQWYsRTs7Ozs7Ozs7Ozs7QUNwQkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvcmVzZXQvW3Rva2VuXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcmVzZXQvW3Rva2VuXS5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgTWVzc2FnZSwgU2VnbWVudCwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uLy4uL3V0aWxzL2Jhc2VVcmxcIjtcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi4vLi4vdXRpbHMvY2F0Y2hFcnJvcnNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZnVuY3Rpb24gVG9rZW5QYWdlKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBbbmV3UGFzc3dvcmQsIHNldE5ld1Bhc3N3b3JkXSA9IHVzZVN0YXRlKHsgZmllbGQxOiBcIlwiLCBmaWVsZDI6IFwiXCIgfSk7XG5cbiAgY29uc3QgeyBmaWVsZDEsIGZpZWxkMiB9ID0gbmV3UGFzc3dvcmQ7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG5cbiAgICBzZXROZXdQYXNzd29yZChwcmV2ID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZXJyb3JNc2cgIT09IG51bGwgJiYgc2V0VGltZW91dCgoKSA9PiBzZXRFcnJvck1zZyhudWxsKSwgNTAwMCk7XG4gIH0sIFtlcnJvck1zZ10pO1xuXG4gIGNvbnN0IHJlc2V0UGFzc3dvcmQgPSBhc3luYyBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBpZiAoZmllbGQxICE9PSBmaWVsZDIpIHtcbiAgICAgICAgcmV0dXJuIHNldEVycm9yTXNnKFwiTeG6pXQga2jhuql1IGtow7RuZyBo4bujcCBs4buHXCIpO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke2Jhc2VVcmx9L2FwaS9yZXNldC90b2tlbmAsIHtcbiAgICAgICAgcGFzc3dvcmQ6IGZpZWxkMSxcbiAgICAgICAgdG9rZW46IHJvdXRlci5xdWVyeS50b2tlblxuICAgICAgfSk7XG5cbiAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yTXNnKGNhdGNoRXJyb3JzKGVycm9yKSk7XG4gICAgfVxuXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3N1Y2Nlc3MgPyAoXG4gICAgICAgIDxNZXNzYWdlXG4gICAgICAgICAgYXR0YWNoZWRcbiAgICAgICAgICBzdWNjZXNzXG4gICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICBoZWFkZXI9XCLEkOG6t3QgbOG6oWkgbeG6rXQga2jhuql1IHRow6BuaCBjw7RuZ1wiXG4gICAgICAgICAgaWNvbj1cImNoZWNrXCJcbiAgICAgICAgICBjb250ZW50PVwixJDEg25nIG5o4bqtcCBs4bqhaVwiXG4gICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpfVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPE1lc3NhZ2UgYXR0YWNoZWQgaWNvbj1cInNldHRpbmdzXCIgaGVhZGVyPVwixJDhurd0IGzhuqFpIG3huq10IGto4bqpdVwiIGNvbG9yPVwidGVhbFwiIC8+XG4gICAgICApfVxuXG4gICAgICB7IXN1Y2Nlc3MgJiYgKFxuICAgICAgICA8Rm9ybSBsb2FkaW5nPXtsb2FkaW5nfSBvblN1Ym1pdD17cmVzZXRQYXNzd29yZH0gZXJyb3I9e2Vycm9yTXNnICE9PSBudWxsfT5cbiAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJFcnJvciFcIiBjb250ZW50PXtlcnJvck1zZ30gLz5cblxuICAgICAgICAgIDxTZWdtZW50PlxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgaWNvbj1cImV5ZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgICBsYWJlbD1cIk3huq10IGto4bqpdSBt4bubaVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmjhuq1wIG3huq10IGto4bqpdSBt4bubaVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJmaWVsZDFcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICB2YWx1ZT17ZmllbGQxfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgIGljb249XCJleWVcIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJYw6FjIG5o4bqtbiBt4bqtdCBraOG6qXVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIljDoWMgbmjhuq1uIG3huq10IGto4bqpdSBt4bubaVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJmaWVsZDJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICB2YWx1ZT17ZmllbGQyfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XG5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZpZWxkMSA9PT0gXCJcIiB8fCBmaWVsZDIgPT09IFwiXCIgfHwgbG9hZGluZ31cbiAgICAgICAgICAgICAgaWNvbj1cImNvbmZpZ3VyZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjb2xvcj1cIm9yYW5nZVwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCLEkOG6t3QgbOG6oWlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRva2VuUGFnZTtcbiIsImNvbnN0IGJhc2VVcmwgPVxuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCJcbiAgICA/IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCJcbiAgICA6IFwiaHR0cHM6Ly9nYXRvLXNvY2lhbC1uZXR3b3JrLmhlcm9rdWFwcC5jb21cIjtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVXJsO1xuIiwiY29uc3QgY2F0Y2hFcnJvcnMgPSBlcnJvciA9PiB7XG4gIGxldCBlcnJvck1zZztcblxuICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcblxuICAgIGVycm9yTXNnID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcblxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xuICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlcXVlc3Q7XG5cbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcbiAgfSBlbHNlIHtcbiAgICBlcnJvck1zZyA9IGVycm9yLm1lc3NhZ2U7XG5cbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcbiAgfVxuICByZXR1cm4gZXJyb3JNc2c7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYXRjaEVycm9ycztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=