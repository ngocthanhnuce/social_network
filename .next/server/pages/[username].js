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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[username].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./components/Common/CommonInputUpdate.js":
/*!************************************************!*\
  !*** ./components/Common/CommonInputUpdate.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Common\\CommonInputUpdate.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CommonInputUpdate = props => {
  const {
    user: {
      bio,
      work,
      relationship,
      address,
      education,
      birthday,
      facebook,
      instagram,
      youtube,
      twitter
    },
    handleChange,
    showSocialLinks,
    setShowSocialLinks
  } = props;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    required: true,
    label: "Bio",
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["TextArea"],
    name: "bio",
    value: bio,
    onChange: handleChange,
    placeholder: "bio",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    name: "work",
    label: "Work",
    value: work,
    onChange: handleChange,
    placeholder: "work",
    icon: "briefcase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    name: "address",
    label: "Address",
    value: address,
    onChange: handleChange,
    placeholder: "address",
    icon: "heart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    name: "relationship",
    label: "Relationship",
    value: relationship,
    onChange: handleChange,
    placeholder: "relationship",
    icon: "point",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    name: "education",
    label: "Education",
    value: education,
    onChange: handleChange,
    placeholder: "education",
    icon: "student",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    name: "birthday",
    label: "Birthday",
    value: birthday,
    onChange: handleChange,
    placeholder: "birthday",
    icon: "birthday cake",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 8
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    content: "Add Social Links",
    color: "red",
    icon: "rss",
    type: "button",
    onClick: () => setShowSocialLinks(!showSocialLinks),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }), showSocialLinks && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    icon: "facebook f",
    iconPosition: "left",
    name: "facebook",
    value: facebook,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    icon: "twitter",
    iconPosition: "left",
    name: "twitter",
    value: twitter,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    icon: "instagram",
    iconPosition: "left",
    name: "instagram",
    value: instagram,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    icon: "youtube",
    iconPosition: "left",
    name: "youtube",
    value: youtube,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    icon: "attention",
    info: true,
    size: "small",
    header: "Gato social media link option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CommonInputUpdate);

/***/ }),

/***/ "./components/Common/ImageDropDiv.js":
/*!*******************************************!*\
  !*** ./components/Common/ImageDropDiv.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Common\\ImageDropDiv.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// @ts-nocheck



function ImageDropDiv(props) {
  const {
    highlighted,
    setHighlighted,
    inputRef,
    handleChange,
    mediaPreview,
    setMediaPreview,
    setMedia
  } = props;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    placeholder: true,
    basic: true,
    secondary: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("input", {
    style: {
      display: "none"
    },
    type: "file",
    accept: "image/*",
    onChange: handleChange,
    name: "media",
    ref: inputRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }), __jsx("div", {
    onDragOver: e => {
      e.preventDefault();
      setHighlighted(true);
    },
    onDragLeave: e => {
      e.preventDefault();
      setHighlighted(false);
    },
    onDrop: e => {
      e.preventDefault();
      setHighlighted(true);
      const droppedFile = Array.from(e.dataTransfer.file);
      setMedia(droppedFile[0]);
      setMediaPreview(URL.createObjectURL(droppedFile[0]));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, mediaPreview === null ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    color: highlighted ? "green" : " ",
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    icon: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "file image outline",
    style: {
      cursor: "pointer"
    },
    onClick: () => inputRef.current.click(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }), "Drag Drop or Click To Upload Image"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    color: "green",
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: mediaPreview,
    size: "medium",
    centered: true,
    style: {
      cursor: "pointer"
    },
    onClick: () => inputRef.current.click(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ImageDropDiv);

/***/ }),

/***/ "./components/Layout/NoData.js":
/*!*************************************!*\
  !*** ./components/Layout/NoData.js ***!
  \*************************************/
/*! exports provided: NoProfilePosts, NoFollowData, NoMessages, NoPosts, NoProfile, NoNotifications, NoPostFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoProfilePosts", function() { return NoProfilePosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoFollowData", function() { return NoFollowData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoMessages", function() { return NoMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPosts", function() { return NoPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoProfile", function() { return NoProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoNotifications", function() { return NoNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPostFound", function() { return NoPostFound; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Layout\\NoData.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const NoProfilePosts = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  info: true,
  icon: "meh",
  header: "Sorry",
  content: "User has not posted anything yet!",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  icon: "long arrow alternate left",
  content: "Go Back",
  as: "a",
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}));
const NoFollowData = ({
  followersComponent,
  followingComponent
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, followersComponent && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  icon: "user outline",
  info: true,
  content: `User does not have followers`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 7
  }
}), followingComponent && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  icon: "user outline",
  info: true,
  content: `User does not follow any users`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 7
  }
}));
const NoMessages = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  info: true,
  icon: "telegram plane",
  header: "Sorry",
  content: "You have not messaged anyone yet.Search above to message someone!",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 3
  }
});
const NoPosts = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Posts. Make sure you have followed someone.",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 3
  }
});
const NoProfile = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Profile Found.",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 3
  }
});
const NoNotifications = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  content: "No Notifications",
  icon: "smile",
  info: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 3
  }
});
const NoPostFound = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Post Found.",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 3
  }
});

/***/ }),

/***/ "./components/Layout/PlaceHolderGroup.js":
/*!***********************************************!*\
  !*** ./components/Layout/PlaceHolderGroup.js ***!
  \***********************************************/
/*! exports provided: PlaceHolderPosts, PlaceHolderSuggestions, PlaceHolderNotifications, EndMessage, LikesPlaceHolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceHolderPosts", function() { return PlaceHolderPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceHolderSuggestions", function() { return PlaceHolderSuggestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceHolderNotifications", function() { return PlaceHolderNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndMessage", function() { return EndMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikesPlaceHolder", function() { return LikesPlaceHolder; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Layout\\PlaceHolderGroup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PlaceHolderPosts = () => Object(lodash__WEBPACK_IMPORTED_MODULE_2__["range"])(1, 3).map(item => __jsx("div", {
  key: item,
  style: {
    marginTop: "20px"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Placeholder"], {
  fluid: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Placeholder"].Header, {
  image: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Placeholder"].Line, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 11
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Placeholder"].Line, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 11
  }
})), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Placeholder"].Paragraph, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Placeholder"].Line, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 11
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Placeholder"].Line, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 11
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Placeholder"].Line, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 11
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Placeholder"].Line, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 11
  }
}))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
  hidden: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }
})));
const PlaceHolderSuggestions = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
  color: "red",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 7
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Placeholder"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Placeholder"].Image, {
  square: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 11
  }
})), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Placeholder"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 11
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Placeholder"].Header, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 13
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Placeholder"].Line, {
  length: "medium",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 15
  }
})))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
  extra: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  disabled: true,
  circular: true,
  size: "small",
  icon: "add user",
  content: "Follow",
  color: "twitter",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 11
  }
})))));
const PlaceHolderNotifications = () => Object(lodash__WEBPACK_IMPORTED_MODULE_2__["range"])(1, 10).map(item => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Placeholder"], {
  key: item,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 7
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Placeholder"].Header, {
  image: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 9
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Placeholder"].Line, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 11
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Placeholder"].Line, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 11
  }
}))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
  hidden: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 7
  }
})));
const EndMessage = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  textAlign: "center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 3
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
  name: "refresh",
  size: "large",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
  hidden: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }
}));
const LikesPlaceHolder = () => Object(lodash__WEBPACK_IMPORTED_MODULE_2__["range"])(1, 6).map(item => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Placeholder"], {
  key: item,
  style: {
    minWidth: "200px"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Placeholder"].Header, {
  image: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 7
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Placeholder"].Line, {
  length: "full",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 9
  }
}))));

/***/ }),

/***/ "./components/Layout/Spinner.js":
/*!**************************************!*\
  !*** ./components/Layout/Spinner.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Layout\\Spinner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Spinner = () => __jsx("div", {
  className: "mySpinner",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 23
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./components/Layout/Toastr.js":
/*!*************************************!*\
  !*** ./components/Layout/Toastr.js ***!
  \*************************************/
/*! exports provided: PostDeleteToastr, ErrorToastr, MsgSentToastr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDeleteToastr", function() { return PostDeleteToastr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorToastr", function() { return ErrorToastr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgSentToastr", function() { return MsgSentToastr; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Layout\\Toastr.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const PostDeleteToastr = () => {
  return __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_1__["ToastContainer"], {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].info("Deleted Successfully", {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
  }));
};
const ErrorToastr = ({
  error
}) => {
  return __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_1__["ToastContainer"], {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error(error, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
  }));
};
const MsgSentToastr = () => __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_1__["ToastContainer"], {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: false,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 3
  }
}, react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].success("Sent successfully", {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined
}));

/***/ }),

/***/ "./components/Post/CardPost.js":
/*!*************************************!*\
  !*** ./components/Post/CardPost.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostComments */ "./components/Post/PostComments.js");
/* harmony import */ var _CommentInputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentInputField */ "./components/Post/CommentInputField.js");
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* harmony import */ var _LikesList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LikesList */ "./components/Post/LikesList.js");
/* harmony import */ var _ImageModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ImageModal */ "./components/Post/ImageModal.js");
/* harmony import */ var _NoImageModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NoImageModal */ "./components/Post/NoImageModal.js");
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-share */ "react-share");
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Post\\CardPost.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













function CardPost({
  post,
  user,
  setPosts,
  setShowToastr,
  socket
}) {
  const {
    0: likes,
    1: setLikes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(post.likes);
  const isLiked = likes.length > 0 && likes.filter(like => like.user === user._id).length > 0;
  const {
    0: comments,
    1: setComments
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(post.comments);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: showModal,
    1: setShowModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const addPropsToModal = () => ({
    post,
    user,
    setLikes,
    likes,
    isLiked,
    comments,
    setComments
  });

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, showModal && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    open: showModal,
    closeIcon: true,
    closeOnDimmerClick: true,
    onClose: () => setShowModal(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, post.picUrl ? __jsx(_ImageModal__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, addPropsToModal(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  })) : __jsx(_NoImageModal__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, addPropsToModal(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  })))), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    color: "teal",
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    floated: "left",
    src: post.user.profilePicUrl,
    avatar: true,
    circular: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }), (user.role === "root" || post.user._id === user._id) && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    floated: "right",
    width: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Popup"], {
    on: "click",
    position: "top right",
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "ellipsis horizontal",
      size: "small",
      style: {
        cursor: "pointer"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h4",
    content: "B\u1EA1n c\xF3 mu\u1ED1n x\xF3a b\xE0i vi\u1EBFt ?",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 19
    }
  }), __jsx("div", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "red",
    icon: "trash",
    content: "Delete",
    onClick: () => Object(_utils_postActions__WEBPACK_IMPORTED_MODULE_6__["deletePost"])(post._id, setPosts, setShowToastr),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: `/${post.user.username}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, post.user.name))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, Object(_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__["default"])(post.createdAt)), post.location && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    content: post.location,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 31
    }
  })), post.picUrl && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: post.picUrl,
    style: {
      cursor: "pointer"
    },
    floated: "left",
    wrapped: true,
    ui: false,
    alt: "PostImage",
    onClick: () => setShowModal(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
    style: {
      fontSize: "17px",
      letterSpacing: "0.1px",
      wordSpacing: "0.35px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, __jsx("span", {
    style: {
      color: "black",
      paddingRight: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: `/${post.user.username}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  }, post.user.name))), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, post.text)))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
    extra: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: isLiked ? "heart" : "heart outline",
    size: "large",
    color: "red",
    style: {
      cursor: "pointer"
    },
    onClick: () => {
      if (socket.current) {
        socket.current.emit("likePost", {
          postId: post._id,
          userId: user._id,
          like: isLiked ? false : true
        });
        socket.current.on("postLiked", () => {
          if (isLiked) {
            setLikes(prev => prev.filter(like => like.user !== user._id));
          } //
          else {
              setLikes(prev => [...prev, {
                user: user._id
              }]);
            }
        });
      } else {
        Object(_utils_postActions__WEBPACK_IMPORTED_MODULE_6__["likePost"])(post._id, user._id, setLikes, isLiked ? false : true);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }), __jsx(_LikesList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    postId: post._id,
    trigger: likes.length > 0 && __jsx("span", {
      className: "spanLikesList",
      style: {
        color: "black"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 19
      }
    }, `${likes.length} ${likes.length === 1 ? "like" : "likes"}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "comment outline",
    size: "large",
    style: {
      marginLeft: "7px"
    },
    color: "blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }
  }), __jsx(react_share__WEBPACK_IMPORTED_MODULE_10__["FacebookShareButton"], {
    url: "https://social-network-98.herokuapp.com/",
    quote: post === null || post === void 0 ? void 0 : post.text // hashtag="#social_network"
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "send",
    size: "large",
    style: {
      marginLeft: "7px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 15
    }
  })), comments.length > 0 && comments.map((comment, i) => i < 3 && __jsx(_PostComments__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: comment._id,
    comment: comment,
    postId: post._id,
    user: user,
    setComments: setComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 21
    }
  })), comments.length > 3 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    content: "View More",
    color: "teal",
    basic: true,
    circular: true,
    onClick: () => setShowModal(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 13
    }
  }), __jsx(_CommentInputField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    user: user,
    postId: post._id,
    setComments: setComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 13
    }
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CardPost);

/***/ }),

/***/ "./components/Post/CommentInputField.js":
/*!**********************************************!*\
  !*** ./components/Post/CommentInputField.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Post\\CommentInputField.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function CommentInputField({
  postId,
  user,
  setComments
}) {
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    reply: true,
    onSubmit: async e => {
      e.preventDefault();
      setLoading(true);
      await Object(_utils_postActions__WEBPACK_IMPORTED_MODULE_2__["postComment"])(postId, user, text, setComments, setText);
      setLoading(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    value: text,
    onChange: e => setText(e.target.value),
    placeholder: "Th\xEAm b\xECnh lu\u1EADn",
    action: {
      color: "blue",
      icon: "edit",
      loading: loading,
      disabled: text === "" || loading
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CommentInputField);

/***/ }),

/***/ "./components/Post/ImageModal.js":
/*!***************************************!*\
  !*** ./components/Post/ImageModal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostComments */ "./components/Post/PostComments.js");
/* harmony import */ var _CommentInputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentInputField */ "./components/Post/CommentInputField.js");
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* harmony import */ var _LikesList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LikesList */ "./components/Post/LikesList.js");
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Post\\ImageModal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// @ts-nocheck









function ImageModal({
  post,
  user,
  setLikes,
  likes,
  isLiked,
  comments,
  setComments
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    columns: 2,
    stackable: true,
    relaxed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, {
    image: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    wrapped: true,
    size: "large",
    src: post.picUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    floated: "left",
    avatar: true,
    src: post.user.profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: `/${post.user.username}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 19
    }
  }, post.user.name))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, Object(_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__["default"])(post.createdAt)), post.location && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    content: post.location,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 33
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
    style: {
      fontSize: "17px",
      letterSpacing: "0.1px",
      wordSpacing: "0.35px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, post.text)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
    extra: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: isLiked ? "heart" : "heart outline",
    color: "red",
    style: {
      cursor: "pointer"
    },
    onClick: () => Object(_utils_postActions__WEBPACK_IMPORTED_MODULE_6__["likePost"])(post._id, user._id, setLikes, isLiked ? false : true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }), __jsx(_LikesList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    postId: post._id,
    trigger: likes.length > 0 && __jsx("span", {
      className: "spanLikesList",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }
    }, `${likes.length} ${likes.length === 1 ? "like" : "likes"}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }), __jsx("div", {
    style: {
      overflow: "auto",
      height: comments.length > 2 ? "200px" : "60px",
      marginBottom: "8px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, comments.length > 0 && comments.map(comment => __jsx(_PostComments__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: comment._id,
    comment: comment,
    postId: post._id,
    user: user,
    setComments: setComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }))), __jsx(_CommentInputField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    postId: post._id,
    user: user,
    setComments: setComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ImageModal);

/***/ }),

/***/ "./components/Post/LikesList.js":
/*!**************************************!*\
  !*** ./components/Post/LikesList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Layout/PlaceHolderGroup */ "./components/Layout/PlaceHolderGroup.js");
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Post\\LikesList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// @ts-nocheck









function LikesList({
  postId,
  trigger
}) {
  const {
    0: likesList,
    1: setLikesList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const getLikesList = async () => {
    setLoading(true);

    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default.a}/api/posts/like/${postId}`, {
        headers: {
          Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("token")
        }
      });
      setLikesList(res.data);
    } catch (error) {
      alert(Object(_utils_catchErrors__WEBPACK_IMPORTED_MODULE_4__["default"])(error));
    }

    setLoading(false);
  };

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Popup"], {
    on: "click",
    onClose: () => setLikesList([]),
    onOpen: getLikesList,
    popperDependencies: [likesList],
    trigger: trigger,
    wide: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, loading ? __jsx(_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_7__["LikesPlaceHolder"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, likesList.length > 0 && __jsx("div", {
    style: {
      overflow: "auto",
      maxHeight: "15rem",
      height: "15rem",
      minWidth: "210px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    selection: true,
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, likesList.map(like => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    key: like._id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    avatar: true,
    src: like.user.profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(`/${like.user.username}`),
    as: "a",
    content: like.user.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 23
    }
  }))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (LikesList);

/***/ }),

/***/ "./components/Post/NoImageModal.js":
/*!*****************************************!*\
  !*** ./components/Post/NoImageModal.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostComments */ "./components/Post/PostComments.js");
/* harmony import */ var _CommentInputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentInputField */ "./components/Post/CommentInputField.js");
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* harmony import */ var _LikesList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LikesList */ "./components/Post/LikesList.js");
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Post\\NoImageModal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// @ts-nocheck









function NoImageModal({
  post,
  user,
  setLikes,
  likes,
  isLiked,
  comments,
  setComments
}) {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    floated: "left",
    avatar: true,
    src: post.user.profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: `/${post.user.username}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, post.user.name))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, Object(_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__["default"])(post.createdAt)), post.location && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    content: post.location,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 27
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
    style: {
      fontSize: "17px",
      letterSpacing: "0.1px",
      wordSpacing: "0.35px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, post.text)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
    extra: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: isLiked ? "heart" : "heart outline",
    color: "red",
    style: {
      cursor: "pointer"
    },
    onClick: () => Object(_utils_postActions__WEBPACK_IMPORTED_MODULE_6__["likePost"])(post._id, user._id, setLikes, isLiked ? false : true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx(_LikesList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    postId: post._id,
    trigger: likes.length > 0 && __jsx("span", {
      className: "spanLikesList",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    }, `${likes.length} ${likes.length === 1 ? "like" : "likes"}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      overflow: "auto",
      height: comments.length > 2 ? "200px" : "60px",
      marginBottom: "8px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, comments.length > 0 && comments.map(comment => __jsx(_PostComments__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: comment._id,
    comment: comment,
    postId: post._id,
    user: user,
    setComments: setComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }))), __jsx(_CommentInputField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    postId: post._id,
    user: user,
    setComments: setComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (NoImageModal);

/***/ }),

/***/ "./components/Post/PostComments.js":
/*!*****************************************!*\
  !*** ./components/Post/PostComments.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Post\\PostComments.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function PostComments({
  comment,
  user,
  setComments,
  postId
}) {
  const {
    0: disabled,
    1: setDisabled
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Avatar, {
    src: comment.user.profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Author, {
    as: "a",
    href: `/${comment.user.username}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, comment.user.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Metadata, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, Object(_utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__["default"])(comment.date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 13,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 19
    }
  }, comment.text)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Actions, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Action, {
    style: {
      marginTop: "6px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, (user.role === "root" || comment.user._id === user._id) && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    disabled: disabled,
    color: "red",
    name: "trash",
    onClick: async () => {
      setDisabled(true);
      await Object(_utils_postActions__WEBPACK_IMPORTED_MODULE_3__["deleteComment"])(postId, comment._id, setComments);
      setDisabled(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  })))))), __jsx("div", {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (PostComments);

/***/ }),

/***/ "./components/Profile/Followers.js":
/*!*****************************************!*\
  !*** ./components/Profile/Followers.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout/Spinner */ "./components/Layout/Spinner.js");
/* harmony import */ var _Layout_NoData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Profile\\Followers.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// @ts-nocheck









const Followers = ({
  user,
  loggedUserFollowStats,
  setUserFollowStats,
  profileUserId
}) => {
  const {
    0: followers,
    1: setFollowers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: followLoading,
    1: setFollowLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getFollowers = async () => {
      setLoading(true);

      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6___default.a}/api/profile/followers/${profileUserId}`, {
          headers: {
            Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get("token")
          }
        });
        setFollowers(res.data);
      } catch (error) {
        alert("Error Loading Followers");
      }

      setLoading(false);
    };

    getFollowers();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loading ? __jsx(_Layout_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }) : followers.length > 0 ? followers.map(profileFollower => {
    const isFollowing = loggedUserFollowStats.following.length > 0 && loggedUserFollowStats.following.filter(following => following.user === profileFollower.user._id).length > 0;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
      key: profileFollower.user._id,
      divided: true,
      verticalAlign: "middle",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
      floated: "right",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, profileFollower.user._id !== user._id && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      color: isFollowing ? "instagram" : "twitter",
      icon: isFollowing ? "check" : "add user",
      content: isFollowing ? "Following" : "Follow",
      disabled: followLoading,
      onClick: () => {
        setFollowLoading(true);
        isFollowing ? Object(_utils_profileActions__WEBPACK_IMPORTED_MODULE_4__["unfollowUser"])(profileFollower.user._id, setUserFollowStats) : Object(_utils_profileActions__WEBPACK_IMPORTED_MODULE_4__["followUser"])(profileFollower.user._id, setUserFollowStats);
        setFollowLoading(false);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      avatar: true,
      src: profileFollower.user.profilePicUrl,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
      as: "a",
      href: `/${profileFollower.user.username}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, profileFollower.user.name)));
  }) : __jsx(_Layout_NoData__WEBPACK_IMPORTED_MODULE_3__["NoFollowData"], {
    followersComponent: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Followers);

/***/ }),

/***/ "./components/Profile/Following.js":
/*!*****************************************!*\
  !*** ./components/Profile/Following.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout/Spinner */ "./components/Layout/Spinner.js");
/* harmony import */ var _Layout_NoData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Profile\\Following.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// @ts-nocheck









const Following = ({
  user,
  loggedUserFollowStats,
  setUserFollowStats,
  profileUserId
}) => {
  const {
    0: following,
    1: setFollowing
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: followLoading,
    1: setFollowLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getFollowing = async () => {
      setLoading(true);

      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6___default.a}/api/profile/following/${profileUserId}`, {
          headers: {
            Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get("token")
          }
        });
        setFollowing(res.data);
      } catch (error) {
        alert("Error Loading Followers");
      }

      setLoading(false);
    };

    getFollowing();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loading ? __jsx(_Layout_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }) : following.length > 0 ? following === null || following === void 0 ? void 0 : following.map(profileFollowing => {
    const isFollowing = loggedUserFollowStats.following.length > 0 && loggedUserFollowStats.following.filter(following => following.user === profileFollowing.user._id).length > 0;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
      key: profileFollowing.user._id,
      divided: true,
      verticalAlign: "middle",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
      floated: "right",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }, profileFollowing.user._id !== user._id && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      color: isFollowing ? "instagram" : "twitter",
      icon: isFollowing ? "check" : "add user",
      content: isFollowing ? "Following" : "Follow",
      disabled: followLoading,
      onClick: () => {
        setFollowLoading(true);
        isFollowing ? Object(_utils_profileActions__WEBPACK_IMPORTED_MODULE_4__["unfollowUser"])(profileFollowing.user._id, setUserFollowStats) : Object(_utils_profileActions__WEBPACK_IMPORTED_MODULE_4__["followUser"])(profileFollowing.user._id, setUserFollowStats);
        setFollowLoading(false);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      avatar: true,
      src: profileFollowing.user.profilePicUrl,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
      as: "a",
      href: `/${profileFollowing.user.username}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    }, profileFollowing.user.name)));
  }) : __jsx(_Layout_NoData__WEBPACK_IMPORTED_MODULE_3__["NoFollowData"], {
    followingComponent: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Following);

/***/ }),

/***/ "./components/Profile/ProfileHeader.js":
/*!*********************************************!*\
  !*** ./components/Profile/ProfileHeader.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Profile\\ProfileHeader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ProfileHeader({
  profile,
  ownAccount,
  loggedUserFollowStats,
  setUserFollowStats
}) {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const isFollowing = loggedUserFollowStats.following.length > 0 && loggedUserFollowStats.following.filter(following => following.user === profile.user._id).length > 0;
  return __jsx("div", {
    style: {
      backgroundColor: "#E6E6E6"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    stackable: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 11,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h2",
    content: profile.user.name,
    style: {
      marginBottom: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    stretched: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, profile.bio, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, "Gi\u1EDBi thi\u1EC7u"), profile.work && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
    name: "briefcase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
    style: {
      paddingLeft: "5px"
    },
    content: profile.work,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 19
    }
  })), profile.address && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
    name: "point",
    color: "blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
    style: {
      paddingLeft: "5px"
    },
    content: profile.address,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  })), profile.relationship && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
    name: "heart",
    color: "red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
    style: {
      paddingLeft: "5px"
    },
    content: profile.relationship,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  })), profile.education && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
    name: "student",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 19
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
    style: {
      paddingLeft: "5px"
    },
    content: profile.education,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  })), profile.birthday && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
    name: "birthday cake",
    color: "red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 19
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
    style: {
      paddingLeft: "5px"
    },
    content: profile.birthday,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  })), profile.social ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
    name: "mail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
    content: profile.user.email,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  })), profile.social.facebook && __jsx("div", {
    onClick: () => window.open(`${profile.social.facebook}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    style: {
      cursor: "pointer",
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 23
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
    name: "facebook",
    color: "blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 25
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
    style: {
      color: "blue",
      paddingLeft: "5px"
    },
    content: profile.social.facebook,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }))), profile.social.instagram && __jsx("div", {
    onClick: () => window.open(`${profile.social.instagram}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    style: {
      cursor: "pointer",
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 23
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
    name: "instagram",
    color: "red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
    style: {
      color: "blue",
      paddingLeft: "5px"
    },
    content: profile.social.instagram,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  }))), profile.social.youtube && __jsx("div", {
    onClick: () => window.open(`${profile.social.youtube}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    style: {
      cursor: "pointer",
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 23
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
    name: "youtube",
    color: "red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
    style: {
      color: "blue",
      paddingLeft: "5px"
    },
    content: profile.social.youtube,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 25
    }
  }))), profile.social.twitter && __jsx("div", {
    onClick: () => window.open(`${profile.social.twitter}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    style: {
      cursor: "pointer"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 23
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
    name: "twitter",
    color: "blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 25
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
    style: {
      color: "blue",
      paddingLeft: "5px"
    },
    content: profile.social.twitter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 25
    }
  })))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "No Social Media Links "))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 5,
    stretched: true,
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    size: "small",
    avatar: true,
    src: profile.user.profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 15
    }
  })), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }), !ownAccount && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    compact: true,
    loading: loading,
    disabled: loading,
    content: isFollowing ? "Following" : "Follow",
    icon: isFollowing ? "check circle" : "add user",
    color: isFollowing ? "instagram" : "twitter",
    onClick: async () => {
      setLoading(true);
      isFollowing ? await Object(_utils_profileActions__WEBPACK_IMPORTED_MODULE_2__["unfollowUser"])(profile.user._id, setUserFollowStats) : await Object(_utils_profileActions__WEBPACK_IMPORTED_MODULE_2__["followUser"])(profile.user._id, setUserFollowStats);
      setLoading(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 15
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (ProfileHeader);

/***/ }),

/***/ "./components/Profile/ProfileMenuTabs.js":
/*!***********************************************!*\
  !*** ./components/Profile/ProfileMenuTabs.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Profile\\ProfileMenuTabs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ProfileMenuTabs({
  activeItem,
  handleItemClick,
  followersLength,
  followingLength,
  ownAccount,
  loggedUserFollowStats
}) {
  return __jsx("div", {
    style: {
      paddingTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    compact: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    name: "profile",
    active: activeItem === "profile",
    onClick: () => handleItemClick("profile"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }), "Trang c\xE1 nh\xE2n"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    active: activeItem === "followers",
    onClick: () => handleItemClick("followers"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "users",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), followersLength, " Ng\u01B0\u1EDDi theo d\xF5i"), ownAccount ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    active: activeItem === "following",
    onClick: () => handleItemClick("following"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "user plus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }), loggedUserFollowStats.following.length > 0 ? loggedUserFollowStats.following.length : 0, " ", "\u0110ang theo d\xF5i"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    name: "updateProfile",
    active: activeItem === "updateProfile",
    onClick: () => handleItemClick("updateProfile"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "edit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }), "Ch\u1EC9nh s\u1EEDa chi ti\u1EBFt"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    name: "settings",
    active: activeItem === "settings",
    onClick: () => handleItemClick("settings"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "setting",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }), "C\xE0i \u0111\u1EB7t")) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    name: `${followingLength} following`,
    active: activeItem === "following",
    onClick: () => handleItemClick("following"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "user plus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }), followingLength, " \u0110ang theo d\xF5i")));
}

/* harmony default export */ __webpack_exports__["default"] = (ProfileMenuTabs);

/***/ }),

/***/ "./components/Profile/Settings.js":
/*!****************************************!*\
  !*** ./components/Profile/Settings.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Profile\\Settings.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function Settings({
  newMessagePopup
}) {
  const {
    0: passwordFields,
    1: showPasswordFields
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: newMessageSettings,
    1: showNewMessageSettings
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const isFirstRun = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const {
    0: popupSetting,
    1: setPopupSetting
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(newMessagePopup);
  const {
    0: success,
    1: setSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    success && setTimeout(() => setSuccess(false), 3000);
  }, [success]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
  }, [popupSetting]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, success && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    success: true,
    icon: "check circle",
    header: "Updated Successfully",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    size: "large",
    animated: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
    name: "user secret",
    size: "large",
    verticalAlign: "middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, {
    onClick: () => showPasswordFields(!passwordFields),
    as: "a",
    content: "\u0110\u1ED5i m\u1EADt kh\u1EA9u",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  })), passwordFields && __jsx(UpdatePassword, {
    setSuccess: setSuccess,
    showPasswordFields: showPasswordFields,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
    name: "paper plane outline",
    size: "large",
    verticalAlign: "middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, {
    onClick: () => showNewMessageSettings(!newMessageSettings),
    as: "a",
    content: "C\xE0i \u0111\u1EB7t th\xF4ng b\xE1o tin nh\u1EAFn m\u1EDBi?",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  })), __jsx("div", {
    style: {
      marginTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, "C\xE0i \u0111\u1EB7t c\u01B0a s\u1ED5 c\xF3 b\u1EADt l\xEAn khi c\xF3 tin nh\u1EAFn m\u1EDBi hay kh\xF4ng.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    checked: popupSetting,
    toggle: true,
    onChange: () => Object(_utils_profileActions__WEBPACK_IMPORTED_MODULE_2__["toggleMessagePopup"])(popupSetting, setPopupSetting, setSuccess),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  })));
}

const UpdatePassword = ({
  setSuccess,
  showPasswordFields
}) => {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: errorMsg,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: userPasswords,
    1: setUserPasswords
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    currentPassword: "",
    newPassword: ""
  });
  const {
    0: confirmPass,
    1: setConfirmPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    confirmPassword: ""
  });
  const {
    0: typed,
    1: showTyped
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    field1: false,
    field2: false
  });
  const {
    field1,
    field2
  } = typed;
  const {
    currentPassword,
    newPassword
  } = userPasswords;
  const {
    confirmPassword
  } = confirmPass;

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setUserPasswords(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const handleChangeConfirm = e => {
    const {
      name,
      value
    } = e.target;
    setConfirmPassword(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    errorMsg && setTimeout(() => setError(null), 5000);
  }, [errorMsg]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    error: errorMsg !== null,
    loading: loading,
    onSubmit: async e => {
      e.preventDefault();
      setLoading(true);
      await Object(_utils_profileActions__WEBPACK_IMPORTED_MODULE_2__["passwordUpdate"])(setSuccess, userPasswords);
      setLoading(false);
      showPasswordFields(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].List, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    icon: {
      name: "eye",
      circular: true,
      link: true,
      onClick: () => showTyped(prev => _objectSpread(_objectSpread({}, prev), {}, {
        field1: !field1
      }))
    },
    type: field1 ? "text" : "password",
    iconPosition: "left",
    label: "M\u1EADt kh\u1EA9u hi\u1EC7n t\u1EA1i",
    placeholder: "Current password",
    name: "currentPassword",
    onChange: handleChange,
    value: currentPassword,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    icon: {
      name: "eye",
      circular: true,
      link: true,
      onClick: () => showTyped(prev => _objectSpread(_objectSpread({}, prev), {}, {
        field2: !field2
      }))
    },
    type: field2 ? "text" : "password",
    iconPosition: "left",
    label: "M\u1EADt kh\u1EA9u m\u1EDBi",
    placeholder: "New password",
    name: "newPassword",
    onChange: handleChange,
    value: newPassword,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    icon: {
      name: "eye",
      circular: true,
      link: true,
      onClick: () => showTyped(prev => _objectSpread(_objectSpread({}, prev), {}, {
        field2: !field2
      }))
    },
    type: field2 ? "text" : "password",
    iconPosition: "left",
    label: "Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u",
    placeholder: "Confirm password",
    name: "confirmPassword",
    onChange: handleChangeConfirm,
    value: confirmPassword,
    error: confirmPassword === newPassword ? false : {
      content: "Mật khẩu không trùng nhau"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    disabled: loading || currentPassword === "" || newPassword === "",
    compact: true,
    icon: "configure",
    type: "submit",
    color: "teal",
    content: "L\u01B0u thay \u0111\u1ED5i",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    disabled: loading,
    compact: true,
    icon: "cancel",
    type: "button",
    content: "H\u1EE7y",
    onClick: () => showPasswordFields(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    icon: "meh",
    error: true,
    header: "Oops!",
    content: errorMsg,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    hidden: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./components/Profile/UpdateProfile.js":
/*!*********************************************!*\
  !*** ./components/Profile/UpdateProfile.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/ImageDropDiv */ "./components/Common/ImageDropDiv.js");
/* harmony import */ var _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/uploadPicToCloudinary */ "./utils/uploadPicToCloudinary.js");
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");
/* harmony import */ var _Common_CommonInputUpdate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Common/CommonInputUpdate */ "./components/Common/CommonInputUpdate.js");
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Profile\\UpdateProfile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function UpdateProfile({
  Profile
}) {
  const {
    0: profile,
    1: setProfile
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    profilePicUrl: Profile.user.profilePicUrl,
    bio: Profile.bio || "",
    work: Profile.work || "",
    relationship: Profile.relationship || "",
    address: Profile.address || "",
    education: Profile.education || "",
    birthday: Profile.birthday || "",
    facebook: Profile.social && Profile.social.facebook || "",
    youtube: Profile.social && Profile.social.youtube || "",
    instagram: Profile.social && Profile.social.instagram || "",
    twitter: Profile.social && Profile.social.twitter || ""
  });
  const {
    0: errorMsg,
    1: setErrorMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showSocialLinks,
    1: setShowSocialLinks
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: highlighted,
    1: setHighlighted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: media,
    1: setMedia
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const handleChange = e => {
    const {
      name,
      value,
      files
    } = e.target;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setProfile(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  return __jsx("div", {
    style: {
      paddingBottom: "25px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    error: errorMsg !== null,
    loading: loading,
    onSubmit: async e => {
      e.preventDefault();
      setLoading(true);
      let profilePicUrl;

      if (media !== null) {
        profilePicUrl = await Object(_utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_3__["default"])(media);
      }

      if (media !== null && !profilePicUrl) {
        setLoading(false);
        return setErrorMsg("Error Uploading Image");
      }

      await Object(_utils_profileActions__WEBPACK_IMPORTED_MODULE_4__["profileUpdate"])(profile, setLoading, setErrorMsg, profilePicUrl);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    onDismiss: () => setErrorMsg(false),
    error: true,
    content: errorMsg,
    attached: true,
    header: "Oops!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), __jsx(_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_2__["default"], {
    inputRef: inputRef,
    highlighted: highlighted,
    setHighlighted: setHighlighted,
    handleChange: handleChange,
    mediaPreview: mediaPreview,
    setMediaPreview: setMediaPreview,
    setMedia: setMedia,
    profilePicUrl: profile.profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }), __jsx(_Common_CommonInputUpdate__WEBPACK_IMPORTED_MODULE_5__["default"], {
    user: profile,
    handleChange: handleChange,
    showSocialLinks: showSocialLinks,
    setShowSocialLinks: setShowSocialLinks,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "blue",
    icon: "pencil alternate",
    disabled: profile.bio === "" || loading,
    content: "Submit",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (UpdateProfile);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/[username].js":
/*!*****************************!*\
  !*** ./pages/[username].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Post_CardPost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Post/CardPost */ "./components/Post/CardPost.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout/PlaceHolderGroup */ "./components/Layout/PlaceHolderGroup.js");
/* harmony import */ var _components_Profile_ProfileMenuTabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Profile/ProfileMenuTabs */ "./components/Profile/ProfileMenuTabs.js");
/* harmony import */ var _components_Profile_ProfileHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Profile/ProfileHeader */ "./components/Profile/ProfileHeader.js");
/* harmony import */ var _components_Profile_Followers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Profile/Followers */ "./components/Profile/Followers.js");
/* harmony import */ var _components_Profile_Following__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Profile/Following */ "./components/Profile/Following.js");
/* harmony import */ var _components_Profile_UpdateProfile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Profile/UpdateProfile */ "./components/Profile/UpdateProfile.js");
/* harmony import */ var _components_Profile_Settings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Profile/Settings */ "./components/Profile/Settings.js");
/* harmony import */ var _components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Layout/Toastr */ "./components/Layout/Toastr.js");
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\pages\\[username].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// @ts-nocheck



















function ProfilePage({
  errorLoading,
  profile,
  followersLength,
  followingLength,
  user,
  userFollowStats
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: posts,
    1: setPosts
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showToastr,
    1: setShowToastr
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: activeItem,
    1: setActiveItem
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("profile");

  const handleItemClick = clickedTab => setActiveItem(clickedTab);

  const {
    0: loggedUserFollowStats,
    1: setUserFollowStats
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(userFollowStats);
  const ownAccount = profile.user._id === user._id;
  if (errorLoading) return __jsx(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_7__["NoProfile"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 28
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getPosts = async () => {
      setLoading(true);

      try {
        const {
          username
        } = router.query;
        const res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default.a}/api/profile/posts/${username}`, {
          headers: {
            Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get("token")
          }
        });
        setPosts(res.data);
      } catch (error) {
        alert("Error Loading Posts");
      }

      setLoading(false);
    };

    getPosts();
  }, [router.query.username]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    showToastr && setTimeout(() => setShowToastr(false), 4000);
  }, [showToastr]);
  const socket = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!socket.current) {
      socket.current = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default.a);
    }

    if (socket.current) {
      socket.current.emit("join", {
        userId: user._id
      });
    }

    return () => {
      if (socket.current) {
        socket.current.emit("disconnect");
        socket.current.off();
      }
    };
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, showToastr && __jsx(_components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_17__["PostDeleteToastr"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 22
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    stackable: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx(_components_Profile_ProfileMenuTabs__WEBPACK_IMPORTED_MODULE_11__["default"], {
    activeItem: activeItem,
    handleItemClick: handleItemClick,
    followersLength: followersLength,
    followingLength: followingLength,
    ownAccount: ownAccount,
    loggedUserFollowStats: loggedUserFollowStats,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, activeItem === "profile" && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Profile_ProfileHeader__WEBPACK_IMPORTED_MODULE_12__["default"], {
    profile: profile,
    ownAccount: ownAccount,
    loggedUserFollowStats: loggedUserFollowStats,
    setUserFollowStats: setUserFollowStats,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }), loading ? __jsx(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_10__["PlaceHolderPosts"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 19
    }
  }) : posts.length > 0 ? posts.map(post => __jsx(_components_Post_CardPost__WEBPACK_IMPORTED_MODULE_8__["default"], {
    socket: socket,
    key: post._id,
    post: post,
    user: user,
    setPosts: setPosts,
    setShowToastr: setShowToastr,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  })) : __jsx(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_7__["NoProfilePosts"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 19
    }
  })), activeItem === "followers" && __jsx(_components_Profile_Followers__WEBPACK_IMPORTED_MODULE_13__["default"], {
    user: user,
    loggedUserFollowStats: loggedUserFollowStats,
    setUserFollowStats: setUserFollowStats,
    profileUserId: profile.user._id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }), activeItem === "following" && __jsx(_components_Profile_Following__WEBPACK_IMPORTED_MODULE_14__["default"], {
    user: user,
    loggedUserFollowStats: loggedUserFollowStats,
    setUserFollowStats: setUserFollowStats,
    profileUserId: profile.user._id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }), activeItem === "updateProfile" && __jsx(_components_Profile_UpdateProfile__WEBPACK_IMPORTED_MODULE_15__["default"], {
    Profile: profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 48
    }
  }), activeItem === "settings" && __jsx(_components_Profile_Settings__WEBPACK_IMPORTED_MODULE_16__["default"], {
    newMessagePopup: user.newMessagePopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  })))));
}

ProfilePage.getInitialProps = async ctx => {
  try {
    const {
      username
    } = ctx.query;
    const {
      token
    } = Object(nookies__WEBPACK_IMPORTED_MODULE_5__["parseCookies"])(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default.a}/api/profile/${username}`, {
      headers: {
        Authorization: token
      }
    });
    const {
      profile,
      followersLength,
      followingLength
    } = res.data;
    return {
      profile,
      followersLength,
      followingLength
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ProfilePage);

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

/***/ "./utils/calculateTime.js":
/*!********************************!*\
  !*** ./utils/calculateTime.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ "react-moment");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\utils\\calculateTime.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const calculateTime = createdAt => {
  const today = moment__WEBPACK_IMPORTED_MODULE_1___default()(Date.now());
  const postDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(createdAt);
  const diffInHours = today.diff(postDate, "hours");

  if (diffInHours < 24) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Today ", __jsx(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {
      format: "hh:mm A",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }
    }, createdAt));
  } else if (diffInHours > 24 && diffInHours < 36) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Yesterday ", __jsx(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {
      format: "hh:mm A",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 19
      }
    }, createdAt));
  } else if (diffInHours > 36) {
    return __jsx(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {
      format: "DD/MM/YYYY hh:mm A",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 12
      }
    }, createdAt);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (calculateTime);

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

/***/ "./utils/postActions.js":
/*!******************************!*\
  !*** ./utils/postActions.js ***!
  \******************************/
/*! exports provided: submitNewPost, deletePost, likePost, postComment, deleteComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitNewPost", function() { return submitNewPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePost", function() { return deletePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likePost", function() { return likePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postComment", function() { return postComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteComment", function() { return deleteComment; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baseUrl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);




const Axios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: `${_baseUrl__WEBPACK_IMPORTED_MODULE_1___default.a}/api/posts`,
  headers: {
    Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("token")
  }
});
const submitNewPost = async (text, location, picUrl, setPosts, setNewPost, setError) => {
  try {
    const res = await Axios.post("/", {
      text,
      location,
      picUrl
    });
    setPosts(prev => [res.data, ...prev]);
    setNewPost({
      text: "",
      location: ""
    });
  } catch (error) {
    const errorMsg = Object(_catchErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(error);
    setError(errorMsg);
  }
};
const deletePost = async (postId, setPosts, setShowToastr) => {
  try {
    await Axios.delete(`/${postId}`);
    setPosts(prev => prev.filter(post => post._id !== postId));
    setShowToastr(true);
  } catch (error) {
    alert(Object(_catchErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(error));
  }
};
const likePost = async (postId, userId, setLikes, like = true) => {
  try {
    if (like) {
      await Axios.post(`/like/${postId}`);
      setLikes(prev => [...prev, {
        user: userId
      }]);
    } //
    else if (!like) {
        await Axios.put(`/unlike/${postId}`);
        setLikes(prev => prev.filter(like => like.user !== userId));
      }
  } catch (error) {
    alert(Object(_catchErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(error));
  }
};
const postComment = async (postId, user, text, setComments, setText) => {
  try {
    const res = await Axios.post(`/comment/${postId}`, {
      text
    });
    const newComment = {
      _id: res.data,
      user,
      text,
      date: Date.now()
    };
    setComments(prev => [newComment, ...prev]);
    setText("");
  } catch (error) {
    alert(Object(_catchErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(error));
  }
};
const deleteComment = async (postId, commentId, setComments) => {
  try {
    await Axios.delete(`/${postId}/${commentId}`);
    setComments(prev => prev.filter(comment => comment._id !== commentId));
  } catch (error) {
    alert(Object(_catchErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(error));
  }
};

/***/ }),

/***/ "./utils/profileActions.js":
/*!*********************************!*\
  !*** ./utils/profileActions.js ***!
  \*********************************/
/*! exports provided: followUser, unfollowUser, profileUpdate, updateAvatar, passwordUpdate, toggleMessagePopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followUser", function() { return followUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unfollowUser", function() { return unfollowUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileUpdate", function() { return profileUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAvatar", function() { return updateAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordUpdate", function() { return passwordUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMessagePopup", function() { return toggleMessagePopup; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baseUrl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Axios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: `${_baseUrl__WEBPACK_IMPORTED_MODULE_1___default.a}/api/profile`,
  headers: {
    Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("token")
  }
});
const followUser = async (userToFollowId, setUserFollowStats) => {
  try {
    await Axios.post(`/follow/${userToFollowId}`);
    setUserFollowStats(prev => _objectSpread(_objectSpread({}, prev), {}, {
      following: [...prev.following, {
        user: userToFollowId
      }]
    }));
  } catch (error) {
    alert(Object(_catchErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(error));
  }
};
const unfollowUser = async (userToUnfollowId, setUserFollowStats) => {
  try {
    await Axios.put(`/unfollow/${userToUnfollowId}`);
    setUserFollowStats(prev => _objectSpread(_objectSpread({}, prev), {}, {
      following: prev.following.filter(following => following.user !== userToUnfollowId)
    }));
  } catch (error) {
    alert(Object(_catchErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(error));
  }
};
const profileUpdate = async (profile, setLoading, setError, profilePicUrl) => {
  try {
    const {
      bio,
      work,
      relationship,
      address,
      education,
      birthday,
      facebook,
      youtube,
      twitter,
      instagram
    } = profile;
    await Axios.post(`/update`, {
      bio,
      work,
      relationship,
      address,
      education,
      birthday,
      facebook,
      youtube,
      twitter,
      instagram,
      profilePicUrl
    });
    setLoading(false);
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.reload();
  } catch (error) {
    setError(Object(_catchErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(error));
    setLoading(false);
  }
};
const updateAvatar = async (setLoading, setError, profilePicUrl) => {
  try {
    await Axios.put(`/updatepic`, {
      profilePicUrl
    });
    setLoading(false);
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.reload();
  } catch (error) {
    setError(Object(_catchErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(error));
    setLoading(false);
  }
};
const passwordUpdate = async (setSuccess, userPasswords) => {
  const {
    currentPassword,
    newPassword
  } = userPasswords;

  try {
    await Axios.post(`/settings/password`, {
      currentPassword,
      newPassword
    });
    setSuccess(true);
  } catch (error) {
    alert(Object(_catchErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(error));
  }
};
const toggleMessagePopup = async (popupSetting, setPopupSetting, setSuccess) => {
  try {
    await Axios.post(`/settings/messagePopup`);
    setPopupSetting(!popupSetting);
    setSuccess(true);
  } catch (error) {
    alert(Object(_catchErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(error));
  }
};

/***/ }),

/***/ "./utils/uploadPicToCloudinary.js":
/*!****************************************!*\
  !*** ./utils/uploadPicToCloudinary.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const uploadPic = async media => {
  try {
    const form = new FormData();
    form.append("file", media);
    form.append("upload_preset", "gato_social");
    form.append("cloud_name", "dvizwdhso");
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("https://api.cloudinary.com/v1_1/dvizwdhso/image/upload", form);
    return res.data.url;
  } catch (error) {
    return;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (uploadPic);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-moment");

/***/ }),

/***/ "react-share":
/*!******************************!*\
  !*** external "react-share" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-share");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1vbi9Db21tb25JbnB1dFVwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1vbi9JbWFnZURyb3BEaXYuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvTm9EYXRhLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L1BsYWNlSG9sZGVyR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvU3Bpbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9Ub2FzdHIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0L0NhcmRQb3N0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdC9Db21tZW50SW5wdXRGaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvSW1hZ2VNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvTGlrZXNMaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdC9Ob0ltYWdlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0L1Bvc3RDb21tZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGUvRm9sbG93ZXJzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZmlsZS9Gb2xsb3dpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGVIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGVNZW51VGFicy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGUvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlL1VwZGF0ZVByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLW5vb3AudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL1t1c2VybmFtZV0uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvYmFzZVVybC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jYWxjdWxhdGVUaW1lLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NhdGNoRXJyb3JzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3Bvc3RBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3Byb2ZpbGVBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3VwbG9hZFBpY1RvQ2xvdWRpbmFyeS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zaGFyZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW8tY2xpZW50XCIiXSwibmFtZXMiOlsiQ29tbW9uSW5wdXRVcGRhdGUiLCJwcm9wcyIsInVzZXIiLCJiaW8iLCJ3b3JrIiwicmVsYXRpb25zaGlwIiwiYWRkcmVzcyIsImVkdWNhdGlvbiIsImJpcnRoZGF5IiwiZmFjZWJvb2siLCJpbnN0YWdyYW0iLCJ5b3V0dWJlIiwidHdpdHRlciIsImhhbmRsZUNoYW5nZSIsInNob3dTb2NpYWxMaW5rcyIsInNldFNob3dTb2NpYWxMaW5rcyIsIlRleHRBcmVhIiwiSW1hZ2VEcm9wRGl2IiwiaGlnaGxpZ2h0ZWQiLCJzZXRIaWdobGlnaHRlZCIsImlucHV0UmVmIiwibWVkaWFQcmV2aWV3Iiwic2V0TWVkaWFQcmV2aWV3Iiwic2V0TWVkaWEiLCJkaXNwbGF5IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZHJvcHBlZEZpbGUiLCJBcnJheSIsImZyb20iLCJkYXRhVHJhbnNmZXIiLCJmaWxlIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY3Vyc29yIiwiY3VycmVudCIsImNsaWNrIiwiTm9Qcm9maWxlUG9zdHMiLCJOb0ZvbGxvd0RhdGEiLCJmb2xsb3dlcnNDb21wb25lbnQiLCJmb2xsb3dpbmdDb21wb25lbnQiLCJOb01lc3NhZ2VzIiwiTm9Qb3N0cyIsIk5vUHJvZmlsZSIsIk5vTm90aWZpY2F0aW9ucyIsIk5vUG9zdEZvdW5kIiwiUGxhY2VIb2xkZXJQb3N0cyIsInJhbmdlIiwibWFwIiwiaXRlbSIsIm1hcmdpblRvcCIsIlBsYWNlSG9sZGVyU3VnZ2VzdGlvbnMiLCJQbGFjZUhvbGRlck5vdGlmaWNhdGlvbnMiLCJFbmRNZXNzYWdlIiwiTGlrZXNQbGFjZUhvbGRlciIsIm1pbldpZHRoIiwiU3Bpbm5lciIsIlBvc3REZWxldGVUb2FzdHIiLCJ0b2FzdCIsImluZm8iLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiRXJyb3JUb2FzdHIiLCJlcnJvciIsIk1zZ1NlbnRUb2FzdHIiLCJzdWNjZXNzIiwiQ2FyZFBvc3QiLCJwb3N0Iiwic2V0UG9zdHMiLCJzZXRTaG93VG9hc3RyIiwic29ja2V0IiwibGlrZXMiLCJzZXRMaWtlcyIsInVzZVN0YXRlIiwiaXNMaWtlZCIsImxlbmd0aCIsImZpbHRlciIsImxpa2UiLCJfaWQiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwic2V0RXJyb3IiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJhZGRQcm9wc1RvTW9kYWwiLCJwaWNVcmwiLCJwcm9maWxlUGljVXJsIiwicm9sZSIsInRleHRBbGlnbiIsImRlbGV0ZVBvc3QiLCJ1c2VybmFtZSIsIm5hbWUiLCJjYWxjdWxhdGVUaW1lIiwiY3JlYXRlZEF0IiwibG9jYXRpb24iLCJmb250U2l6ZSIsImxldHRlclNwYWNpbmciLCJ3b3JkU3BhY2luZyIsImNvbG9yIiwicGFkZGluZ1JpZ2h0IiwidGV4dCIsImVtaXQiLCJwb3N0SWQiLCJ1c2VySWQiLCJvbiIsInByZXYiLCJsaWtlUG9zdCIsIm1hcmdpbkxlZnQiLCJjb21tZW50IiwiaSIsIkNvbW1lbnRJbnB1dEZpZWxkIiwic2V0VGV4dCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicG9zdENvbW1lbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImljb24iLCJkaXNhYmxlZCIsIkltYWdlTW9kYWwiLCJvdmVyZmxvdyIsImhlaWdodCIsIm1hcmdpbkJvdHRvbSIsIkxpa2VzTGlzdCIsInRyaWdnZXIiLCJsaWtlc0xpc3QiLCJzZXRMaWtlc0xpc3QiLCJnZXRMaWtlc0xpc3QiLCJyZXMiLCJheGlvcyIsImdldCIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvb2tpZSIsImRhdGEiLCJhbGVydCIsImNhdGNoRXJyb3JzIiwibWF4SGVpZ2h0IiwiUm91dGVyIiwicHVzaCIsIk5vSW1hZ2VNb2RhbCIsIlBvc3RDb21tZW50cyIsInNldERpc2FibGVkIiwiZGF0ZSIsImRlbGV0ZUNvbW1lbnQiLCJGb2xsb3dlcnMiLCJsb2dnZWRVc2VyRm9sbG93U3RhdHMiLCJzZXRVc2VyRm9sbG93U3RhdHMiLCJwcm9maWxlVXNlcklkIiwiZm9sbG93ZXJzIiwic2V0Rm9sbG93ZXJzIiwiZm9sbG93TG9hZGluZyIsInNldEZvbGxvd0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJnZXRGb2xsb3dlcnMiLCJwcm9maWxlRm9sbG93ZXIiLCJpc0ZvbGxvd2luZyIsImZvbGxvd2luZyIsInVuZm9sbG93VXNlciIsImZvbGxvd1VzZXIiLCJGb2xsb3dpbmciLCJzZXRGb2xsb3dpbmciLCJnZXRGb2xsb3dpbmciLCJwcm9maWxlRm9sbG93aW5nIiwiUHJvZmlsZUhlYWRlciIsInByb2ZpbGUiLCJvd25BY2NvdW50IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZ0xlZnQiLCJzb2NpYWwiLCJlbWFpbCIsIndpbmRvdyIsIm9wZW4iLCJQcm9maWxlTWVudVRhYnMiLCJhY3RpdmVJdGVtIiwiaGFuZGxlSXRlbUNsaWNrIiwiZm9sbG93ZXJzTGVuZ3RoIiwiZm9sbG93aW5nTGVuZ3RoIiwicGFkZGluZ1RvcCIsIlNldHRpbmdzIiwibmV3TWVzc2FnZVBvcHVwIiwicGFzc3dvcmRGaWVsZHMiLCJzaG93UGFzc3dvcmRGaWVsZHMiLCJuZXdNZXNzYWdlU2V0dGluZ3MiLCJzaG93TmV3TWVzc2FnZVNldHRpbmdzIiwiaXNGaXJzdFJ1biIsInVzZVJlZiIsInBvcHVwU2V0dGluZyIsInNldFBvcHVwU2V0dGluZyIsInNldFN1Y2Nlc3MiLCJzZXRUaW1lb3V0IiwidG9nZ2xlTWVzc2FnZVBvcHVwIiwiVXBkYXRlUGFzc3dvcmQiLCJlcnJvck1zZyIsInVzZXJQYXNzd29yZHMiLCJzZXRVc2VyUGFzc3dvcmRzIiwiY3VycmVudFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJjb25maXJtUGFzcyIsInNldENvbmZpcm1QYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsInR5cGVkIiwic2hvd1R5cGVkIiwiZmllbGQxIiwiZmllbGQyIiwiaGFuZGxlQ2hhbmdlQ29uZmlybSIsInBhc3N3b3JkVXBkYXRlIiwiY2lyY3VsYXIiLCJsaW5rIiwib25DbGljayIsImNvbnRlbnQiLCJVcGRhdGVQcm9maWxlIiwiUHJvZmlsZSIsInNldFByb2ZpbGUiLCJzZXRFcnJvck1zZyIsIm1lZGlhIiwiZmlsZXMiLCJwYWRkaW5nQm90dG9tIiwidXBsb2FkUGljIiwicHJvZmlsZVVwZGF0ZSIsInByZWZldGNoZWQiLCJyb3V0ZXIiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50Iiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsImNvbnNvbGUiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwiZG9jdW1lbnQiLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwic3JjIiwiY2FuY2VsbGVkIiwiciIsIm9uQnVpbGRNYW5pZmVzdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJmbiIsImV4cG9ydHMiLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpZCIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwiYWxsIiwib2ZmIiwiaGFuZGxlciIsImJhc2VQYXRoIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsImNsZWFuUGF0aG5hbWUiLCJwYWdlcyIsInBhZ2UiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5Iiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4Iiwic3RhdGUiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImRlbEJhc2VQYXRoIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiUHJvZmlsZVBhZ2UiLCJlcnJvckxvYWRpbmciLCJ1c2VyRm9sbG93U3RhdHMiLCJ1c2VSb3V0ZXIiLCJwb3N0cyIsInNob3dUb2FzdHIiLCJzZXRBY3RpdmVJdGVtIiwiY2xpY2tlZFRhYiIsImdldFBvc3RzIiwiaW8iLCJ0b2tlbiIsInBhcnNlQ29va2llcyIsIm1vZHVsZSIsInRvZGF5IiwibW9tZW50Iiwibm93IiwicG9zdERhdGUiLCJkaWZmSW5Ib3VycyIsImRpZmYiLCJyZXNwb25zZSIsInJlcXVlc3QiLCJBeGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJzdWJtaXROZXdQb3N0Iiwic2V0TmV3UG9zdCIsImRlbGV0ZSIsInB1dCIsIm5ld0NvbW1lbnQiLCJjb21tZW50SWQiLCJ1c2VyVG9Gb2xsb3dJZCIsInVzZXJUb1VuZm9sbG93SWQiLCJ1cGRhdGVBdmF0YXIiLCJmb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiXSwibWFw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Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL1t1c2VybmFtZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL1t1c2VybmFtZV0uanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIE1lc3NhZ2UsIFRleHRBcmVhLCBEaXZpZGVyLCBDaGVja2JveCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuY29uc3QgQ29tbW9uSW5wdXRVcGRhdGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB1c2VyOiB7XHJcbiAgICAgIGJpbyxcclxuICAgICAgd29yayxcclxuICAgICAgcmVsYXRpb25zaGlwLFxyXG4gICAgICBhZGRyZXNzLFxyXG4gICAgICBlZHVjYXRpb24sXHJcbiAgICAgIGJpcnRoZGF5LFxyXG4gICAgICBmYWNlYm9vayxcclxuICAgICAgaW5zdGFncmFtLFxyXG4gICAgICB5b3V0dWJlLFxyXG4gICAgICB0d2l0dGVyLFxyXG4gICAgfSxcclxuICAgIGhhbmRsZUNoYW5nZSxcclxuICAgIHNob3dTb2NpYWxMaW5rcyxcclxuICAgIHNldFNob3dTb2NpYWxMaW5rcyxcclxuICB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtLkZpZWxkXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICBsYWJlbD1cIkJpb1wiXHJcbiAgICAgICAgY29udHJvbD17VGV4dEFyZWF9XHJcbiAgICAgICAgbmFtZT1cImJpb1wiXHJcbiAgICAgICAgdmFsdWU9e2Jpb31cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiYmlvXCJcclxuICAgICAgLz5cclxuICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICBuYW1lPVwid29ya1wiXHJcbiAgICAgICAgbGFiZWw9XCJXb3JrXCJcclxuICAgICAgICB2YWx1ZT17d29ya31cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwid29ya1wiXHJcbiAgICAgICAgaWNvbj1cImJyaWVmY2FzZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgbmFtZT1cImFkZHJlc3NcIlxyXG4gICAgICAgIGxhYmVsPVwiQWRkcmVzc1wiXHJcbiAgICAgICAgdmFsdWU9e2FkZHJlc3N9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cImFkZHJlc3NcIlxyXG4gICAgICAgIGljb249XCJoZWFydFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgbmFtZT1cInJlbGF0aW9uc2hpcFwiXHJcbiAgICAgICAgbGFiZWw9XCJSZWxhdGlvbnNoaXBcIlxyXG4gICAgICAgIHZhbHVlPXtyZWxhdGlvbnNoaXB9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cInJlbGF0aW9uc2hpcFwiXHJcbiAgICAgICAgaWNvbj1cInBvaW50XCJcclxuICAgICAgLz5cclxuICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICBuYW1lPVwiZWR1Y2F0aW9uXCJcclxuICAgICAgICBsYWJlbD1cIkVkdWNhdGlvblwiXHJcbiAgICAgICAgdmFsdWU9e2VkdWNhdGlvbn1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiZWR1Y2F0aW9uXCJcclxuICAgICAgICBpY29uPVwic3R1ZGVudFwiXHJcbiAgICAgIC8+XHJcbiAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgIG5hbWU9XCJiaXJ0aGRheVwiXHJcbiAgICAgICAgbGFiZWw9XCJCaXJ0aGRheVwiXHJcbiAgICAgICAgdmFsdWU9e2JpcnRoZGF5fVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJiaXJ0aGRheVwiXHJcbiAgICAgICAgaWNvbj1cImJpcnRoZGF5IGNha2VcIlxyXG4gICAgICAvPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY29udGVudD1cIkFkZCBTb2NpYWwgTGlua3NcIlxyXG4gICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICBpY29uPVwicnNzXCJcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93U29jaWFsTGlua3MoIXNob3dTb2NpYWxMaW5rcyl9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtzaG93U29jaWFsTGlua3MgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgaWNvbj1cImZhY2Vib29rIGZcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgbmFtZT1cImZhY2Vib29rXCJcclxuICAgICAgICAgICAgdmFsdWU9e2ZhY2Vib29rfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGljb249XCJ0d2l0dGVyXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0d2l0dGVyXCJcclxuICAgICAgICAgICAgdmFsdWU9e3R3aXR0ZXJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgaWNvbj1cImluc3RhZ3JhbVwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiaW5zdGFncmFtXCJcclxuICAgICAgICAgICAgdmFsdWU9e2luc3RhZ3JhbX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBpY29uPVwieW91dHViZVwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBuYW1lPVwieW91dHViZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt5b3V0dWJlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICAgIGljb249XCJhdHRlbnRpb25cIlxyXG4gICAgICAgICAgICBpbmZvXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIGhlYWRlcj1cIkdhdG8gc29jaWFsIG1lZGlhIGxpbmsgb3B0aW9uXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbW9uSW5wdXRVcGRhdGU7XHJcbiIsIi8vIEB0cy1ub2NoZWNrXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIFNlZ21lbnQsIEltYWdlLCBJY29uLCBIZWFkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcblxuZnVuY3Rpb24gSW1hZ2VEcm9wRGl2KHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBoaWdobGlnaHRlZCxcbiAgICBzZXRIaWdobGlnaHRlZCxcbiAgICBpbnB1dFJlZixcbiAgICBoYW5kbGVDaGFuZ2UsXG4gICAgbWVkaWFQcmV2aWV3LFxuICAgIHNldE1lZGlhUHJldmlldyxcbiAgICBzZXRNZWRpYSxcbiAgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgPFNlZ21lbnQgcGxhY2Vob2xkZXIgYmFzaWMgc2Vjb25kYXJ5PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIG5hbWU9XCJtZWRpYVwiXG4gICAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgb25EcmFnT3Zlcj17KGUpID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkRyYWdMZWF2ZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZChmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Ecm9wPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKHRydWUpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGRyb3BwZWRGaWxlID0gQXJyYXkuZnJvbShlLmRhdGFUcmFuc2Zlci5maWxlKTtcbiAgICAgICAgICAgICAgc2V0TWVkaWEoZHJvcHBlZEZpbGVbMF0pO1xuICAgICAgICAgICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChkcm9wcGVkRmlsZVswXSkpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bWVkaWFQcmV2aWV3ID09PSBudWxsID8gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPXtoaWdobGlnaHRlZCA/IFwiZ3JlZW5cIiA6IFwiIFwifSBwbGFjZWhvbGRlciBiYXNpYz5cbiAgICAgICAgICAgICAgICAgIDxIZWFkZXIgaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZSBpbWFnZSBvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaW5wdXRSZWYuY3VycmVudC5jbGljaygpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICBEcmFnIERyb3Agb3IgQ2xpY2sgVG8gVXBsb2FkIEltYWdlXG4gICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8U2VnbWVudCBjb2xvcj1cImdyZWVuXCIgcGxhY2Vob2xkZXIgYmFzaWM+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXttZWRpYVByZXZpZXd9XG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJlZFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU2VnbWVudD5cbiAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICA8Lz5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEltYWdlRHJvcERpdjtcbiIsImltcG9ydCB7IE1lc3NhZ2UsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgTm9Qcm9maWxlUG9zdHMgPSAoKSA9PiAoXG4gIDw+XG4gICAgPE1lc3NhZ2VcbiAgICAgIGluZm9cbiAgICAgIGljb249XCJtZWhcIlxuICAgICAgaGVhZGVyPVwiU29ycnlcIlxuICAgICAgY29udGVudD1cIlVzZXIgaGFzIG5vdCBwb3N0ZWQgYW55dGhpbmcgeWV0IVwiXG4gICAgLz5cbiAgICA8QnV0dG9uXG4gICAgICBpY29uPVwibG9uZyBhcnJvdyBhbHRlcm5hdGUgbGVmdFwiXG4gICAgICBjb250ZW50PVwiR28gQmFja1wiXG4gICAgICBhcz1cImFcIlxuICAgICAgaHJlZj1cIi9cIlxuICAgIC8+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGNvbnN0IE5vRm9sbG93RGF0YSA9ICh7IGZvbGxvd2Vyc0NvbXBvbmVudCwgZm9sbG93aW5nQ29tcG9uZW50IH0pID0+IChcbiAgPD5cbiAgICB7Zm9sbG93ZXJzQ29tcG9uZW50ICYmIChcbiAgICAgIDxNZXNzYWdlXG4gICAgICAgIGljb249XCJ1c2VyIG91dGxpbmVcIlxuICAgICAgICBpbmZvXG4gICAgICAgIGNvbnRlbnQ9e2BVc2VyIGRvZXMgbm90IGhhdmUgZm9sbG93ZXJzYH1cbiAgICAgIC8+XG4gICAgKX1cblxuICAgIHtmb2xsb3dpbmdDb21wb25lbnQgJiYgKFxuICAgICAgPE1lc3NhZ2VcbiAgICAgICAgaWNvbj1cInVzZXIgb3V0bGluZVwiXG4gICAgICAgIGluZm9cbiAgICAgICAgY29udGVudD17YFVzZXIgZG9lcyBub3QgZm9sbG93IGFueSB1c2Vyc2B9XG4gICAgICAvPlxuICAgICl9XG4gIDwvPlxuKTtcblxuZXhwb3J0IGNvbnN0IE5vTWVzc2FnZXMgPSAoKSA9PiAoXG4gIDxNZXNzYWdlXG4gICAgaW5mb1xuICAgIGljb249XCJ0ZWxlZ3JhbSBwbGFuZVwiXG4gICAgaGVhZGVyPVwiU29ycnlcIlxuICAgIGNvbnRlbnQ9XCJZb3UgaGF2ZSBub3QgbWVzc2FnZWQgYW55b25lIHlldC5TZWFyY2ggYWJvdmUgdG8gbWVzc2FnZSBzb21lb25lIVwiXG4gIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgTm9Qb3N0cyA9ICgpID0+IChcbiAgPE1lc3NhZ2VcbiAgICBpbmZvXG4gICAgaWNvbj1cIm1laFwiXG4gICAgaGVhZGVyPVwiSGV5IVwiXG4gICAgY29udGVudD1cIk5vIFBvc3RzLiBNYWtlIHN1cmUgeW91IGhhdmUgZm9sbG93ZWQgc29tZW9uZS5cIlxuICAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IE5vUHJvZmlsZSA9ICgpID0+IChcbiAgPE1lc3NhZ2UgaW5mbyBpY29uPVwibWVoXCIgaGVhZGVyPVwiSGV5IVwiIGNvbnRlbnQ9XCJObyBQcm9maWxlIEZvdW5kLlwiIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgTm9Ob3RpZmljYXRpb25zID0gKCkgPT4gKFxuICA8TWVzc2FnZSBjb250ZW50PVwiTm8gTm90aWZpY2F0aW9uc1wiIGljb249XCJzbWlsZVwiIGluZm8gLz5cbik7XG5cbmV4cG9ydCBjb25zdCBOb1Bvc3RGb3VuZCA9ICgpID0+IChcbiAgPE1lc3NhZ2UgaW5mbyBpY29uPVwibWVoXCIgaGVhZGVyPVwiSGV5IVwiIGNvbnRlbnQ9XCJObyBQb3N0IEZvdW5kLlwiIC8+XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgUGxhY2Vob2xkZXIsXG4gIERpdmlkZXIsXG4gIExpc3QsXG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ29udGFpbmVyLFxuICBJY29uLFxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IHJhbmdlIH0gZnJvbSBcImxvZGFzaFwiO1xuXG5leHBvcnQgY29uc3QgUGxhY2VIb2xkZXJQb3N0cyA9ICgpID0+XG4gIHJhbmdlKDEsIDMpLm1hcCgoaXRlbSkgPT4gKFxuICAgIDxkaXYga2V5PXtpdGVtfSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxuICAgICAgPFBsYWNlaG9sZGVyIGZsdWlkPlxuICAgICAgICA8UGxhY2Vob2xkZXIuSGVhZGVyIGltYWdlPlxuICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIC8+XG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cbiAgICAgICAgPC9QbGFjZWhvbGRlci5IZWFkZXI+XG4gICAgICAgIDxQbGFjZWhvbGRlci5QYXJhZ3JhcGg+XG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cbiAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSAvPlxuICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIC8+XG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cbiAgICAgICAgPC9QbGFjZWhvbGRlci5QYXJhZ3JhcGg+XG4gICAgICA8L1BsYWNlaG9sZGVyPlxuICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XG4gICAgPC9kaXY+XG4gICkpO1xuXG5leHBvcnQgY29uc3QgUGxhY2VIb2xkZXJTdWdnZXN0aW9ucyA9ICgpID0+IChcbiAgPD5cbiAgICA8TGlzdC5JdGVtPlxuICAgICAgPENhcmQgY29sb3I9XCJyZWRcIj5cbiAgICAgICAgPFBsYWNlaG9sZGVyPlxuICAgICAgICAgIDxQbGFjZWhvbGRlci5JbWFnZSBzcXVhcmUgLz5cbiAgICAgICAgPC9QbGFjZWhvbGRlcj5cbiAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICA8UGxhY2Vob2xkZXI+XG4gICAgICAgICAgICA8UGxhY2Vob2xkZXIuSGVhZGVyPlxuICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSBsZW5ndGg9XCJtZWRpdW1cIiAvPlxuICAgICAgICAgICAgPC9QbGFjZWhvbGRlci5IZWFkZXI+XG4gICAgICAgICAgPC9QbGFjZWhvbGRlcj5cbiAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG5cbiAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgY2lyY3VsYXJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBpY29uPVwiYWRkIHVzZXJcIlxuICAgICAgICAgICAgY29udGVudD1cIkZvbGxvd1wiXG4gICAgICAgICAgICBjb2xvcj1cInR3aXR0ZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgPC9DYXJkPlxuICAgIDwvTGlzdC5JdGVtPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBjb25zdCBQbGFjZUhvbGRlck5vdGlmaWNhdGlvbnMgPSAoKSA9PlxuICByYW5nZSgxLCAxMCkubWFwKChpdGVtKSA9PiAoXG4gICAgPD5cbiAgICAgIDxQbGFjZWhvbGRlciBrZXk9e2l0ZW19PlxuICAgICAgICA8UGxhY2Vob2xkZXIuSGVhZGVyIGltYWdlPlxuICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIC8+XG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cbiAgICAgICAgPC9QbGFjZWhvbGRlci5IZWFkZXI+XG4gICAgICA8L1BsYWNlaG9sZGVyPlxuICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XG4gICAgPC8+XG4gICkpO1xuXG5leHBvcnQgY29uc3QgRW5kTWVzc2FnZSA9ICgpID0+IChcbiAgPENvbnRhaW5lciB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICA8SWNvbiBuYW1lPVwicmVmcmVzaFwiIHNpemU9XCJsYXJnZVwiIC8+XG4gICAgPERpdmlkZXIgaGlkZGVuIC8+XG4gIDwvQ29udGFpbmVyPlxuKTtcblxuZXhwb3J0IGNvbnN0IExpa2VzUGxhY2VIb2xkZXIgPSAoKSA9PlxuICByYW5nZSgxLCA2KS5tYXAoKGl0ZW0pID0+IChcbiAgICA8UGxhY2Vob2xkZXIga2V5PXtpdGVtfSBzdHlsZT17eyBtaW5XaWR0aDogXCIyMDBweFwiIH19PlxuICAgICAgPFBsYWNlaG9sZGVyLkhlYWRlciBpbWFnZT5cbiAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPVwiZnVsbFwiIC8+XG4gICAgICA8L1BsYWNlaG9sZGVyLkhlYWRlcj5cbiAgICA8L1BsYWNlaG9sZGVyPlxuICApKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFNwaW5uZXIgPSAoKSA9PiA8ZGl2IGNsYXNzTmFtZT1cIm15U3Bpbm5lclwiIC8+O1xuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lcjtcbiIsImltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuXG5leHBvcnQgY29uc3QgUG9zdERlbGV0ZVRvYXN0ciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VG9hc3RDb250YWluZXJcbiAgICAgIHBvc2l0aW9uPVwiYm90dG9tLWNlbnRlclwiXG4gICAgICBhdXRvQ2xvc2U9ezMwMDB9XG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxuICAgICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxuICAgICAgY2xvc2VPbkNsaWNrXG4gICAgICBydGw9e2ZhbHNlfVxuICAgICAgcGF1c2VPbkZvY3VzTG9zc1xuICAgICAgZHJhZ2dhYmxlXG4gICAgICBwYXVzZU9uSG92ZXI9e2ZhbHNlfT5cbiAgICAgIHt0b2FzdC5pbmZvKFwiRGVsZXRlZCBTdWNjZXNzZnVsbHlcIiwge1xuICAgICAgICBwb3NpdGlvbjogXCJib3R0b20tY2VudGVyXCIsXG4gICAgICAgIGF1dG9DbG9zZTogMzAwMCxcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWRcbiAgICAgIH0pfVxuICAgIDwvVG9hc3RDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgRXJyb3JUb2FzdHIgPSAoeyBlcnJvciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRvYXN0Q29udGFpbmVyXG4gICAgICBwb3NpdGlvbj1cImJvdHRvbS1jZW50ZXJcIlxuICAgICAgYXV0b0Nsb3NlPXszMDAwfVxuICAgICAgaGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cbiAgICAgIG5ld2VzdE9uVG9wPXtmYWxzZX1cbiAgICAgIGNsb3NlT25DbGlja1xuICAgICAgcnRsPXtmYWxzZX1cbiAgICAgIHBhdXNlT25Gb2N1c0xvc3NcbiAgICAgIGRyYWdnYWJsZVxuICAgICAgcGF1c2VPbkhvdmVyPXtmYWxzZX0+XG4gICAgICB7dG9hc3QuZXJyb3IoZXJyb3IsIHtcbiAgICAgICAgcG9zaXRpb246IFwiYm90dG9tLWNlbnRlclwiLFxuICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkXG4gICAgICB9KX1cbiAgICA8L1RvYXN0Q29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IE1zZ1NlbnRUb2FzdHIgPSAoKSA9PiAoXG4gIDxUb2FzdENvbnRhaW5lclxuICAgIHBvc2l0aW9uPVwiYm90dG9tLWNlbnRlclwiXG4gICAgYXV0b0Nsb3NlPXszMDAwfVxuICAgIGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XG4gICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxuICAgIGNsb3NlT25DbGlja1xuICAgIHJ0bD17ZmFsc2V9XG4gICAgcGF1c2VPbkZvY3VzTG9zc1xuICAgIGRyYWdnYWJsZVxuICAgIHBhdXNlT25Ib3Zlcj17ZmFsc2V9PlxuICAgIHt0b2FzdC5zdWNjZXNzKFwiU2VudCBzdWNjZXNzZnVsbHlcIiwge1xuICAgICAgcG9zaXRpb246IFwiYm90dG9tLWNlbnRlclwiLFxuICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICBwcm9ncmVzczogdW5kZWZpbmVkXG4gICAgfSl9XG4gIDwvVG9hc3RDb250YWluZXI+XG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBDYXJkLFxuICBJY29uLFxuICBJbWFnZSxcbiAgRGl2aWRlcixcbiAgU2VnbWVudCxcbiAgQnV0dG9uLFxuICBQb3B1cCxcbiAgSGVhZGVyLFxuICBNb2RhbCxcbiAgR3JpZCxcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgUG9zdENvbW1lbnRzIGZyb20gXCIuL1Bvc3RDb21tZW50c1wiO1xuaW1wb3J0IENvbW1lbnRJbnB1dEZpZWxkIGZyb20gXCIuL0NvbW1lbnRJbnB1dEZpZWxkXCI7XG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgZGVsZXRlUG9zdCwgbGlrZVBvc3QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zdEFjdGlvbnNcIjtcbmltcG9ydCBMaWtlc0xpc3QgZnJvbSBcIi4vTGlrZXNMaXN0XCI7XG5pbXBvcnQgSW1hZ2VNb2RhbCBmcm9tIFwiLi9JbWFnZU1vZGFsXCI7XG5pbXBvcnQgTm9JbWFnZU1vZGFsIGZyb20gXCIuL05vSW1hZ2VNb2RhbFwiO1xuaW1wb3J0IHsgRmFjZWJvb2tTaGFyZUJ1dHRvbiB9IGZyb20gXCJyZWFjdC1zaGFyZVwiO1xuXG5mdW5jdGlvbiBDYXJkUG9zdCh7IHBvc3QsIHVzZXIsIHNldFBvc3RzLCBzZXRTaG93VG9hc3RyLCBzb2NrZXQgfSkge1xuICBjb25zdCBbbGlrZXMsIHNldExpa2VzXSA9IHVzZVN0YXRlKHBvc3QubGlrZXMpO1xuXG4gIGNvbnN0IGlzTGlrZWQgPVxuICAgIGxpa2VzLmxlbmd0aCA+IDAgJiZcbiAgICBsaWtlcy5maWx0ZXIoKGxpa2UpID0+IGxpa2UudXNlciA9PT0gdXNlci5faWQpLmxlbmd0aCA+IDA7XG5cbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShwb3N0LmNvbW1lbnRzKTtcblxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgYWRkUHJvcHNUb01vZGFsID0gKCkgPT4gKHtcbiAgICBwb3N0LFxuICAgIHVzZXIsXG4gICAgc2V0TGlrZXMsXG4gICAgbGlrZXMsXG4gICAgaXNMaWtlZCxcbiAgICBjb21tZW50cyxcbiAgICBzZXRDb21tZW50cyxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Nob3dNb2RhbCAmJiAoXG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIG9wZW49e3Nob3dNb2RhbH1cbiAgICAgICAgICBjbG9zZUljb25cbiAgICAgICAgICBjbG9zZU9uRGltbWVyQ2xpY2tcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAgPE1vZGFsLkNvbnRlbnQ+XG4gICAgICAgICAgICB7cG9zdC5waWNVcmwgPyAoXG4gICAgICAgICAgICAgIDxJbWFnZU1vZGFsIHsuLi5hZGRQcm9wc1RvTW9kYWwoKX0gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxOb0ltYWdlTW9kYWwgey4uLmFkZFByb3BzVG9Nb2RhbCgpfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICApfVxuXG4gICAgICA8PlxuICAgICAgICA8Q2FyZCBjb2xvcj1cInRlYWxcIiBmbHVpZD5cbiAgICAgICAgICA8Q2FyZC5Db250ZW50PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGZsb2F0ZWQ9XCJsZWZ0XCJcbiAgICAgICAgICAgICAgc3JjPXtwb3N0LnVzZXIucHJvZmlsZVBpY1VybH1cbiAgICAgICAgICAgICAgYXZhdGFyXG4gICAgICAgICAgICAgIGNpcmN1bGFyXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB7KHVzZXIucm9sZSA9PT0gXCJyb290XCIgfHwgcG9zdC51c2VyLl9pZCA9PT0gdXNlci5faWQpICYmIChcbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9XCJyaWdodFwiIHdpZHRoPVwiMlwiPlxuICAgICAgICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgICAgICAgb249XCJjbGlja1wiXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInRvcCByaWdodFwiXG4gICAgICAgICAgICAgICAgICB0cmlnZ2VyPXtcbiAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZWxsaXBzaXMgaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEhlYWRlciBhcz1cImg0XCIgY29udGVudD1cIkLhuqFuIGPDsyBtdeG7kW4geMOzYSBiw6BpIHZp4bq/dCA/XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaFwiXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIkRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVBvc3QocG9zdC5faWQsIHNldFBvc3RzLCBzZXRTaG93VG9hc3RyKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvUG9wdXA+XG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0LnVzZXIudXNlcm5hbWV9YH0+XG4gICAgICAgICAgICAgICAgPGE+e3Bvc3QudXNlci5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cblxuICAgICAgICAgICAgPENhcmQuTWV0YT57Y2FsY3VsYXRlVGltZShwb3N0LmNyZWF0ZWRBdCl9PC9DYXJkLk1ldGE+XG5cbiAgICAgICAgICAgIHtwb3N0LmxvY2F0aW9uICYmIDxDYXJkLk1ldGEgY29udGVudD17cG9zdC5sb2NhdGlvbn0gLz59XG4gICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAge3Bvc3QucGljVXJsICYmIChcbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e3Bvc3QucGljVXJsfVxuICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgICAgIGZsb2F0ZWQ9XCJsZWZ0XCJcbiAgICAgICAgICAgICAgd3JhcHBlZFxuICAgICAgICAgICAgICB1aT17ZmFsc2V9XG4gICAgICAgICAgICAgIGFsdD1cIlBvc3RJbWFnZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCh0cnVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8Q2FyZC5Db250ZW50PlxuICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxN3B4XCIsXG4gICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwLjFweFwiLFxuICAgICAgICAgICAgICAgIHdvcmRTcGFjaW5nOiBcIjAuMzVweFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiLCBwYWRkaW5nUmlnaHQ6IFwiNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7cG9zdC51c2VyLnVzZXJuYW1lfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YT57cG9zdC51c2VyLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC50ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuXG4gICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIG5hbWU9e2lzTGlrZWQgPyBcImhlYXJ0XCIgOiBcImhlYXJ0IG91dGxpbmVcIn1cbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJsaWtlUG9zdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RJZDogcG9zdC5faWQsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlci5faWQsXG4gICAgICAgICAgICAgICAgICAgIGxpa2U6IGlzTGlrZWQgPyBmYWxzZSA6IHRydWUsXG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJwb3N0TGlrZWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNMaWtlZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHNldExpa2VzKChwcmV2KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldi5maWx0ZXIoKGxpa2UpID0+IGxpa2UudXNlciAhPT0gdXNlci5faWQpXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRMaWtlcygocHJldikgPT4gWy4uLnByZXYsIHsgdXNlcjogdXNlci5faWQgfV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbGlrZVBvc3QoXG4gICAgICAgICAgICAgICAgICAgIHBvc3QuX2lkLFxuICAgICAgICAgICAgICAgICAgICB1c2VyLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgc2V0TGlrZXMsXG4gICAgICAgICAgICAgICAgICAgIGlzTGlrZWQgPyBmYWxzZSA6IHRydWVcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPExpa2VzTGlzdFxuICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXtcbiAgICAgICAgICAgICAgICBsaWtlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5MaWtlc0xpc3RcIiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxuICAgICAgICAgICAgICAgICAgICB7YCR7bGlrZXMubGVuZ3RofSAke2xpa2VzLmxlbmd0aCA9PT0gMSA/IFwibGlrZVwiIDogXCJsaWtlc1wifWB9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBuYW1lPVwiY29tbWVudCBvdXRsaW5lXCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI3cHhcIiB9fVxuICAgICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGYWNlYm9va1NoYXJlQnV0dG9uXG4gICAgICAgICAgICAgIHVybD17XCJodHRwczovL3NvY2lhbC1uZXR3b3JrLTk4Lmhlcm9rdWFwcC5jb20vXCJ9XG4gICAgICAgICAgICAgIHF1b3RlPXtwb3N0Py50ZXh0fVxuICAgICAgICAgICAgICAvLyBoYXNodGFnPVwiI3NvY2lhbF9uZXR3b3JrXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cInNlbmRcIiBzaXplPVwibGFyZ2VcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjdweFwiIH19IC8+XG4gICAgICAgICAgICA8L0ZhY2Vib29rU2hhcmVCdXR0b24+XG4gICAgICAgICAgICB7Y29tbWVudHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICBjb21tZW50cy5tYXAoXG4gICAgICAgICAgICAgICAgKGNvbW1lbnQsIGkpID0+XG4gICAgICAgICAgICAgICAgICBpIDwgMyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0Q29tbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbW1lbnQuX2lkfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cbiAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxuICAgICAgICAgICAgICAgICAgICAgIHNldENvbW1lbnRzPXtzZXRDb21tZW50c31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge2NvbW1lbnRzLmxlbmd0aCA+IDMgJiYgKFxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY29udGVudD1cIlZpZXcgTW9yZVwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZWFsXCJcbiAgICAgICAgICAgICAgICBiYXNpY1xuICAgICAgICAgICAgICAgIGNpcmN1bGFyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKHRydWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XG5cbiAgICAgICAgICAgIDxDb21tZW50SW5wdXRGaWVsZFxuICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxuICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxuICAgICAgICAgICAgICBzZXRDb21tZW50cz17c2V0Q29tbWVudHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8Lz5cbiAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkUG9zdDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgcG9zdENvbW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zdEFjdGlvbnNcIjtcblxuZnVuY3Rpb24gQ29tbWVudElucHV0RmllbGQoeyBwb3N0SWQsIHVzZXIsIHNldENvbW1lbnRzIH0pIHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtXG4gICAgICByZXBseVxuICAgICAgb25TdWJtaXQ9e2FzeW5jIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGF3YWl0IHBvc3RDb21tZW50KHBvc3RJZCwgdXNlciwgdGV4dCwgc2V0Q29tbWVudHMsIHNldFRleHQpO1xuXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfX0+XG4gICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VGV4dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVGjDqm0gYsOsbmggbHXhuq1uXCJcbiAgICAgICAgYWN0aW9uPXt7XG4gICAgICAgICAgY29sb3I6IFwiYmx1ZVwiLFxuICAgICAgICAgIGljb246IFwiZWRpdFwiLFxuICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmcsXG4gICAgICAgICAgZGlzYWJsZWQ6IHRleHQgPT09IFwiXCIgfHwgbG9hZGluZ1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRJbnB1dEZpZWxkO1xuIiwiLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vZGFsLCBHcmlkLCBJbWFnZSwgQ2FyZCwgSWNvbiwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IFBvc3RDb21tZW50cyBmcm9tIFwiLi9Qb3N0Q29tbWVudHNcIjtcbmltcG9ydCBDb21tZW50SW5wdXRGaWVsZCBmcm9tIFwiLi9Db21tZW50SW5wdXRGaWVsZFwiO1xuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGxpa2VQb3N0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XG5pbXBvcnQgTGlrZXNMaXN0IGZyb20gXCIuL0xpa2VzTGlzdFwiO1xuXG5mdW5jdGlvbiBJbWFnZU1vZGFsKHtcbiAgcG9zdCxcbiAgdXNlcixcbiAgc2V0TGlrZXMsXG4gIGxpa2VzLFxuICBpc0xpa2VkLFxuICBjb21tZW50cyxcbiAgc2V0Q29tbWVudHMsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHcmlkIGNvbHVtbnM9ezJ9IHN0YWNrYWJsZSByZWxheGVkPlxuICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgPE1vZGFsLkNvbnRlbnQgaW1hZ2U+XG4gICAgICAgICAgICA8SW1hZ2Ugd3JhcHBlZCBzaXplPVwibGFyZ2VcIiBzcmM9e3Bvc3QucGljVXJsfSAvPlxuICAgICAgICAgIDwvTW9kYWwuQ29udGVudD5cbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cblxuICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgPENhcmQgZmx1aWQ+XG4gICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICA8SW1hZ2UgZmxvYXRlZD1cImxlZnRcIiBhdmF0YXIgc3JjPXtwb3N0LnVzZXIucHJvZmlsZVBpY1VybH0gLz5cblxuICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3QudXNlci51c2VybmFtZX1gfT5cbiAgICAgICAgICAgICAgICAgIDxhPntwb3N0LnVzZXIubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuXG4gICAgICAgICAgICAgIDxDYXJkLk1ldGE+e2NhbGN1bGF0ZVRpbWUocG9zdC5jcmVhdGVkQXQpfTwvQ2FyZC5NZXRhPlxuXG4gICAgICAgICAgICAgIHtwb3N0LmxvY2F0aW9uICYmIDxDYXJkLk1ldGEgY29udGVudD17cG9zdC5sb2NhdGlvbn0gLz59XG5cbiAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxuICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwLjFweFwiLFxuICAgICAgICAgICAgICAgICAgd29yZFNwYWNpbmc6IFwiMC4zNXB4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwb3N0LnRleHR9XG4gICAgICAgICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuXG4gICAgICAgICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPlxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIG5hbWU9e2lzTGlrZWQgPyBcImhlYXJ0XCIgOiBcImhlYXJ0IG91dGxpbmVcIn1cbiAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICBsaWtlUG9zdChwb3N0Ll9pZCwgdXNlci5faWQsIHNldExpa2VzLCBpc0xpa2VkID8gZmFsc2UgOiB0cnVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8TGlrZXNMaXN0XG4gICAgICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cbiAgICAgICAgICAgICAgICB0cmlnZ2VyPXtcbiAgICAgICAgICAgICAgICAgIGxpa2VzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuTGlrZXNMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2Ake2xpa2VzLmxlbmd0aH0gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VzLmxlbmd0aCA9PT0gMSA/IFwibGlrZVwiIDogXCJsaWtlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XG5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNvbW1lbnRzLmxlbmd0aCA+IDIgPyBcIjIwMHB4XCIgOiBcIjYwcHhcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvbW1lbnRzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8UG9zdENvbW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtjb21tZW50Ll9pZH1cbiAgICAgICAgICAgICAgICAgICAgICBjb21tZW50PXtjb21tZW50fVxuICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XG4gICAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cbiAgICAgICAgICAgICAgICAgICAgICBzZXRDb21tZW50cz17c2V0Q29tbWVudHN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPENvbW1lbnRJbnB1dEZpZWxkXG4gICAgICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cbiAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxuICAgICAgICAgICAgICAgIHNldENvbW1lbnRzPXtzZXRDb21tZW50c31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgIDwvR3JpZD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VNb2RhbDtcbiIsIi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpc3QsIFBvcHVwLCBJbWFnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uLy4uL3V0aWxzL2Jhc2VVcmxcIjtcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi4vLi4vdXRpbHMvY2F0Y2hFcnJvcnNcIjtcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IExpa2VzUGxhY2VIb2xkZXIgfSBmcm9tIFwiLi4vTGF5b3V0L1BsYWNlSG9sZGVyR3JvdXBcIjtcblxuZnVuY3Rpb24gTGlrZXNMaXN0KHsgcG9zdElkLCB0cmlnZ2VyIH0pIHtcbiAgY29uc3QgW2xpa2VzTGlzdCwgc2V0TGlrZXNMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGdldExpa2VzTGlzdCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Bvc3RzL2xpa2UvJHtwb3N0SWR9YCwge1xuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9LFxuICAgICAgfSk7XG4gICAgICBzZXRMaWtlc0xpc3QocmVzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQb3B1cFxuICAgICAgb249XCJjbGlja1wiXG4gICAgICBvbkNsb3NlPXsoKSA9PiBzZXRMaWtlc0xpc3QoW10pfVxuICAgICAgb25PcGVuPXtnZXRMaWtlc0xpc3R9XG4gICAgICBwb3BwZXJEZXBlbmRlbmNpZXM9e1tsaWtlc0xpc3RdfVxuICAgICAgdHJpZ2dlcj17dHJpZ2dlcn1cbiAgICAgIHdpZGVcbiAgICA+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPExpa2VzUGxhY2VIb2xkZXIgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2xpa2VzTGlzdC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjE1cmVtXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1cmVtXCIsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMjEwcHhcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpc3Qgc2VsZWN0aW9uIHNpemU9XCJsYXJnZVwiPlxuICAgICAgICAgICAgICAgIHtsaWtlc0xpc3QubWFwKChsaWtlKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17bGlrZS5faWR9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgYXZhdGFyIHNyYz17bGlrZS51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5IZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKGAvJHtsaWtlLnVzZXIudXNlcm5hbWV9YCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcz1cImFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17bGlrZS51c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvUG9wdXA+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpa2VzTGlzdDtcbiIsIi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb2RhbCwgSW1hZ2UsIENhcmQsIEljb24sIERpdmlkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBQb3N0Q29tbWVudHMgZnJvbSBcIi4vUG9zdENvbW1lbnRzXCI7XG5pbXBvcnQgQ29tbWVudElucHV0RmllbGQgZnJvbSBcIi4vQ29tbWVudElucHV0RmllbGRcIjtcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBsaWtlUG9zdCB9IGZyb20gXCIuLi8uLi91dGlscy9wb3N0QWN0aW9uc1wiO1xuaW1wb3J0IExpa2VzTGlzdCBmcm9tIFwiLi9MaWtlc0xpc3RcIjtcblxuZnVuY3Rpb24gTm9JbWFnZU1vZGFsKHtcbiAgcG9zdCxcbiAgdXNlcixcbiAgc2V0TGlrZXMsXG4gIGxpa2VzLFxuICBpc0xpa2VkLFxuICBjb21tZW50cyxcbiAgc2V0Q29tbWVudHMsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPENhcmQgZmx1aWQ+XG4gICAgICA8Q2FyZC5Db250ZW50PlxuICAgICAgICA8SW1hZ2UgZmxvYXRlZD1cImxlZnRcIiBhdmF0YXIgc3JjPXtwb3N0LnVzZXIucHJvZmlsZVBpY1VybH0gLz5cblxuICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3QudXNlci51c2VybmFtZX1gfT5cbiAgICAgICAgICAgIDxhPntwb3N0LnVzZXIubmFtZX08L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0NhcmQuSGVhZGVyPlxuXG4gICAgICAgIDxDYXJkLk1ldGE+e2NhbGN1bGF0ZVRpbWUocG9zdC5jcmVhdGVkQXQpfTwvQ2FyZC5NZXRhPlxuXG4gICAgICAgIHtwb3N0LmxvY2F0aW9uICYmIDxDYXJkLk1ldGEgY29udGVudD17cG9zdC5sb2NhdGlvbn0gLz59XG5cbiAgICAgICAgPENhcmQuRGVzY3JpcHRpb25cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxuICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwLjFweFwiLFxuICAgICAgICAgICAgd29yZFNwYWNpbmc6IFwiMC4zNXB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtwb3N0LnRleHR9XG4gICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgIDwvQ2FyZC5Db250ZW50PlxuXG4gICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPlxuICAgICAgICA8SWNvblxuICAgICAgICAgIG5hbWU9e2lzTGlrZWQgPyBcImhlYXJ0XCIgOiBcImhlYXJ0IG91dGxpbmVcIn1cbiAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICBsaWtlUG9zdChwb3N0Ll9pZCwgdXNlci5faWQsIHNldExpa2VzLCBpc0xpa2VkID8gZmFsc2UgOiB0cnVlKVxuICAgICAgICAgIH1cbiAgICAgICAgLz5cblxuICAgICAgICA8TGlrZXNMaXN0XG4gICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cbiAgICAgICAgICB0cmlnZ2VyPXtcbiAgICAgICAgICAgIGxpa2VzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuTGlrZXNMaXN0XCI+XG4gICAgICAgICAgICAgICAge2Ake2xpa2VzLmxlbmd0aH0gJHtsaWtlcy5sZW5ndGggPT09IDEgPyBcImxpa2VcIiA6IFwibGlrZXNcIn1gfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxuICAgICAgICAgICAgaGVpZ2h0OiBjb21tZW50cy5sZW5ndGggPiAyID8gXCIyMDBweFwiIDogXCI2MHB4XCIsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiOHB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBjb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IChcbiAgICAgICAgICAgICAgPFBvc3RDb21tZW50c1xuICAgICAgICAgICAgICAgIGtleT17Y29tbWVudC5faWR9XG4gICAgICAgICAgICAgICAgY29tbWVudD17Y29tbWVudH1cbiAgICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxuICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxDb21tZW50SW5wdXRGaWVsZFxuICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XG4gICAgICAgICAgdXNlcj17dXNlcn1cbiAgICAgICAgICBzZXRDb21tZW50cz17c2V0Q29tbWVudHN9XG4gICAgICAgIC8+XG4gICAgICA8L0NhcmQuQ29udGVudD5cbiAgICA8L0NhcmQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vSW1hZ2VNb2RhbDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29tbWVudCwgSWNvbiwgR3JpZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcbmltcG9ydCB7IGRlbGV0ZUNvbW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zdEFjdGlvbnNcIjtcblxuZnVuY3Rpb24gUG9zdENvbW1lbnRzKHsgY29tbWVudCwgdXNlciwgc2V0Q29tbWVudHMsIHBvc3RJZCB9KSB7XG4gIGNvbnN0IFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb21tZW50Lkdyb3VwPlxuICAgICAgICA8Q29tbWVudD5cbiAgICAgICAgICA8Q29tbWVudC5BdmF0YXIgc3JjPXtjb21tZW50LnVzZXIucHJvZmlsZVBpY1VybH0gLz5cbiAgICAgICAgICA8Q29tbWVudC5Db250ZW50PlxuICAgICAgICAgICAgPENvbW1lbnQuQXV0aG9yIGFzPVwiYVwiIGhyZWY9e2AvJHtjb21tZW50LnVzZXIudXNlcm5hbWV9YH0+XG4gICAgICAgICAgICAgIHtjb21tZW50LnVzZXIubmFtZX1cbiAgICAgICAgICAgIDwvQ29tbWVudC5BdXRob3I+XG4gICAgICAgICAgICA8Q29tbWVudC5NZXRhZGF0YT57Y2FsY3VsYXRlVGltZShjb21tZW50LmRhdGUpfTwvQ29tbWVudC5NZXRhZGF0YT5cbiAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxM30+XG4gICAgICAgICAgICAgICAgICA8Q29tbWVudC5UZXh0Pntjb21tZW50LnRleHR9PC9Db21tZW50LlRleHQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICA8Q29tbWVudC5BY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudC5BY3Rpb24gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjZweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIHsodXNlci5yb2xlID09PSBcInJvb3RcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudC51c2VyLl9pZCA9PT0gdXNlci5faWQpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHJhc2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGlzYWJsZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgZGVsZXRlQ29tbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQuX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29tbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERpc2FibGVkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9Db21tZW50LkFjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvQ29tbWVudC5BY3Rpb25zPlxuICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PjwvZGl2PlxuICAgICAgICAgIDwvQ29tbWVudC5Db250ZW50PlxuICAgICAgICA8L0NvbW1lbnQ+XG4gICAgICA8L0NvbW1lbnQuR3JvdXA+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RDb21tZW50cztcbiIsIi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBJbWFnZSwgTGlzdCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL0xheW91dC9TcGlubmVyXCI7XG5pbXBvcnQgeyBOb0ZvbGxvd0RhdGEgfSBmcm9tIFwiLi4vTGF5b3V0L05vRGF0YVwiO1xuaW1wb3J0IHsgZm9sbG93VXNlciwgdW5mb2xsb3dVc2VyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Byb2ZpbGVBY3Rpb25zXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vLi4vdXRpbHMvYmFzZVVybFwiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5cbmNvbnN0IEZvbGxvd2VycyA9ICh7XG4gIHVzZXIsXG4gIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cyxcbiAgc2V0VXNlckZvbGxvd1N0YXRzLFxuICBwcm9maWxlVXNlcklkLFxufSkgPT4ge1xuICBjb25zdCBbZm9sbG93ZXJzLCBzZXRGb2xsb3dlcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmb2xsb3dMb2FkaW5nLCBzZXRGb2xsb3dMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldEZvbGxvd2VycyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICAgYCR7YmFzZVVybH0vYXBpL3Byb2ZpbGUvZm9sbG93ZXJzLyR7cHJvZmlsZVVzZXJJZH1gLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH0sXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBzZXRGb2xsb3dlcnMocmVzLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoXCJFcnJvciBMb2FkaW5nIEZvbGxvd2Vyc1wiKTtcbiAgICAgIH1cbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH07XG4gICAgZ2V0Rm9sbG93ZXJzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICkgOiBmb2xsb3dlcnMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgZm9sbG93ZXJzLm1hcCgocHJvZmlsZUZvbGxvd2VyKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNGb2xsb3dpbmcgPVxuICAgICAgICAgICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHMuZm9sbG93aW5nLmZpbHRlcihcbiAgICAgICAgICAgICAgKGZvbGxvd2luZykgPT4gZm9sbG93aW5nLnVzZXIgPT09IHByb2ZpbGVGb2xsb3dlci51c2VyLl9pZFxuICAgICAgICAgICAgKS5sZW5ndGggPiAwO1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaXN0IGtleT17cHJvZmlsZUZvbGxvd2VyLnVzZXIuX2lkfSBkaXZpZGVkIHZlcnRpY2FsQWxpZ249XCJtaWRkbGVcIj5cbiAgICAgICAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGZsb2F0ZWQ9XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgICAge3Byb2ZpbGVGb2xsb3dlci51c2VyLl9pZCAhPT0gdXNlci5faWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2lzRm9sbG93aW5nID8gXCJpbnN0YWdyYW1cIiA6IFwidHdpdHRlclwifVxuICAgICAgICAgICAgICAgICAgICAgIGljb249e2lzRm9sbG93aW5nID8gXCJjaGVja1wiIDogXCJhZGQgdXNlclwifVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2lzRm9sbG93aW5nID8gXCJGb2xsb3dpbmdcIiA6IFwiRm9sbG93XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZvbGxvd0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9sbG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9sbG93aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gdW5mb2xsb3dVc2VyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUZvbGxvd2VyLnVzZXIuX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlckZvbGxvd1N0YXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZvbGxvd1VzZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlRm9sbG93ZXIudXNlci5faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyRm9sbG93U3RhdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGb2xsb3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgYXZhdGFyIHNyYz17cHJvZmlsZUZvbGxvd2VyLnVzZXIucHJvZmlsZVBpY1VybH0gLz5cbiAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGFzPVwiYVwiIGhyZWY9e2AvJHtwcm9maWxlRm9sbG93ZXIudXNlci51c2VybmFtZX1gfT5cbiAgICAgICAgICAgICAgICAgIHtwcm9maWxlRm9sbG93ZXIudXNlci5uYW1lfVxuICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxuICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKSA6IChcbiAgICAgICAgPE5vRm9sbG93RGF0YSBmb2xsb3dlcnNDb21wb25lbnQ9e3RydWV9IC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9sbG93ZXJzO1xuIiwiLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEltYWdlLCBMaXN0IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vTGF5b3V0L1NwaW5uZXJcIjtcbmltcG9ydCB7IE5vRm9sbG93RGF0YSB9IGZyb20gXCIuLi9MYXlvdXQvTm9EYXRhXCI7XG5pbXBvcnQgeyBmb2xsb3dVc2VyLCB1bmZvbGxvd1VzZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcHJvZmlsZUFjdGlvbnNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi8uLi91dGlscy9iYXNlVXJsXCI7XG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcblxuY29uc3QgRm9sbG93aW5nID0gKHtcbiAgdXNlcixcbiAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLFxuICBzZXRVc2VyRm9sbG93U3RhdHMsXG4gIHByb2ZpbGVVc2VySWQsXG59KSA9PiB7XG4gIGNvbnN0IFtmb2xsb3dpbmcsIHNldEZvbGxvd2luZ10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZvbGxvd0xvYWRpbmcsIHNldEZvbGxvd0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0Rm9sbG93aW5nID0gYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgICBgJHtiYXNlVXJsfS9hcGkvcHJvZmlsZS9mb2xsb3dpbmcvJHtwcm9maWxlVXNlcklkfWAsXG4gICAgICAgICAge1xuICAgICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfSxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgc2V0Rm9sbG93aW5nKHJlcy5kYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGFsZXJ0KFwiRXJyb3IgTG9hZGluZyBGb2xsb3dlcnNcIik7XG4gICAgICB9XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgZ2V0Rm9sbG93aW5nKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICkgOiBmb2xsb3dpbmcubGVuZ3RoID4gMCA/IChcbiAgICAgICAgZm9sbG93aW5nPy5tYXAoKHByb2ZpbGVGb2xsb3dpbmcpID0+IHtcbiAgICAgICAgICBjb25zdCBpc0ZvbGxvd2luZyA9XG4gICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHMuZm9sbG93aW5nLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcuZmlsdGVyKFxuICAgICAgICAgICAgICAoZm9sbG93aW5nKSA9PiBmb2xsb3dpbmcudXNlciA9PT0gcHJvZmlsZUZvbGxvd2luZy51c2VyLl9pZFxuICAgICAgICAgICAgKS5sZW5ndGggPiAwO1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICAgIGtleT17cHJvZmlsZUZvbGxvd2luZy51c2VyLl9pZH1cbiAgICAgICAgICAgICAgZGl2aWRlZFxuICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGZsb2F0ZWQ9XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgICAge3Byb2ZpbGVGb2xsb3dpbmcudXNlci5faWQgIT09IHVzZXIuX2lkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtpc0ZvbGxvd2luZyA/IFwiaW5zdGFncmFtXCIgOiBcInR3aXR0ZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgICBpY29uPXtpc0ZvbGxvd2luZyA/IFwiY2hlY2tcIiA6IFwiYWRkIHVzZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpc0ZvbGxvd2luZyA/IFwiRm9sbG93aW5nXCIgOiBcIkZvbGxvd1wifVxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmb2xsb3dMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZvbGxvd0xvYWRpbmcodHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9sbG93aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gdW5mb2xsb3dVc2VyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUZvbGxvd2luZy51c2VyLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFVzZXJGb2xsb3dTdGF0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmb2xsb3dVc2VyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUZvbGxvd2luZy51c2VyLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFVzZXJGb2xsb3dTdGF0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZvbGxvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBhdmF0YXIgc3JjPXtwcm9maWxlRm9sbG93aW5nLnVzZXIucHJvZmlsZVBpY1VybH0gLz5cbiAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50XG4gICAgICAgICAgICAgICAgICBhcz1cImFcIlxuICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke3Byb2ZpbGVGb2xsb3dpbmcudXNlci51c2VybmFtZX1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwcm9maWxlRm9sbG93aW5nLnVzZXIubmFtZX1cbiAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICkgOiAoXG4gICAgICAgIDxOb0ZvbGxvd0RhdGEgZm9sbG93aW5nQ29tcG9uZW50PXt0cnVlfSAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvbGxvd2luZztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgU2VnbWVudCxcbiAgSW1hZ2UsXG4gIEdyaWQsXG4gIERpdmlkZXIsXG4gIEhlYWRlcixcbiAgQnV0dG9uLFxuICBMaXN0LFxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IGZvbGxvd1VzZXIsIHVuZm9sbG93VXNlciB9IGZyb20gXCIuLi8uLi91dGlscy9wcm9maWxlQWN0aW9uc1wiO1xuXG5mdW5jdGlvbiBQcm9maWxlSGVhZGVyKHtcbiAgcHJvZmlsZSxcbiAgb3duQWNjb3VudCxcbiAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLFxuICBzZXRVc2VyRm9sbG93U3RhdHMsXG59KSB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaXNGb2xsb3dpbmcgPVxuICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcubGVuZ3RoID4gMCAmJlxuICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcuZmlsdGVyKFxuICAgICAgKGZvbGxvd2luZykgPT4gZm9sbG93aW5nLnVzZXIgPT09IHByb2ZpbGUudXNlci5faWRcbiAgICApLmxlbmd0aCA+IDA7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjRTZFNkU2XCIgfX0+XG4gICAgICA8U2VnbWVudD5cbiAgICAgICAgPEdyaWQgc3RhY2thYmxlPlxuICAgICAgICAgIHsvKiA8R3JpZC5Sb3c+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezE2fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgIDxJbWFnZSBzaXplPVwic21hbGxcIiBhdmF0YXIgc3JjPXtwcm9maWxlLnVzZXIucHJvZmlsZVBpY1VybH0gLz5cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPC9HcmlkLlJvdz4gKi99XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMX0+XG4gICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgICAgICBhcz1cImgyXCJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtwcm9maWxlLnVzZXIubmFtZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiNXB4XCIgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG5cbiAgICAgICAgICAgIDxHcmlkLlJvdyBzdHJldGNoZWQ+XG4gICAgICAgICAgICAgIHtwcm9maWxlLmJpb31cbiAgICAgICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XG4gICAgICAgICAgICA8L0dyaWQuUm93PlxuXG4gICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgIDxoMz5HaeG7m2kgdGhp4buHdTwvaDM+XG4gICAgICAgICAgICAgIHtwcm9maWxlLndvcmsgJiYgKFxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgICAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9XCJicmllZmNhc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCI1cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtwcm9maWxlLndvcmt9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7cHJvZmlsZS5hZGRyZXNzICYmIChcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICAgICAgICAgICAgPExpc3QuSWNvbiBuYW1lPVwicG9pbnRcIiBjb2xvcj1cImJsdWVcIiAvPlxuICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCI1cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtwcm9maWxlLmFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7cHJvZmlsZS5yZWxhdGlvbnNoaXAgJiYgKFxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgICAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9XCJoZWFydFwiIGNvbG9yPVwicmVkXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiNXB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17cHJvZmlsZS5yZWxhdGlvbnNoaXB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7cHJvZmlsZS5lZHVjYXRpb24gJiYgKFxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgICAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9XCJzdHVkZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiNXB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17cHJvZmlsZS5lZHVjYXRpb259XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7cHJvZmlsZS5iaXJ0aGRheSAmJiAoXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT1cImJpcnRoZGF5IGNha2VcIiBjb2xvcj1cInJlZFwiIC8+XG4gICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjVweFwiIH19XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Byb2ZpbGUuYmlydGhkYXl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7cHJvZmlsZS5zb2NpYWwgPyAoXG4gICAgICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9XCJtYWlsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudCBjb250ZW50PXtwcm9maWxlLnVzZXIuZW1haWx9IC8+XG4gICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cblxuICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuc29jaWFsLmZhY2Vib29rICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKGAke3Byb2ZpbGUuc29jaWFsLmZhY2Vib29rfWApfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiLCBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT1cImZhY2Vib29rXCIgY29sb3I9XCJibHVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmx1ZVwiLCBwYWRkaW5nTGVmdDogXCI1cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtwcm9maWxlLnNvY2lhbC5mYWNlYm9va31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuc29jaWFsLmluc3RhZ3JhbSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbihgJHtwcm9maWxlLnNvY2lhbC5pbnN0YWdyYW19YCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSWNvbiBuYW1lPVwiaW5zdGFncmFtXCIgY29sb3I9XCJyZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibHVlXCIsIHBhZGRpbmdMZWZ0OiBcIjVweFwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Byb2ZpbGUuc29jaWFsLmluc3RhZ3JhbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuc29jaWFsLnlvdXR1YmUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oYCR7cHJvZmlsZS5zb2NpYWwueW91dHViZX1gKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiwgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9XCJ5b3V0dWJlXCIgY29sb3I9XCJyZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibHVlXCIsIHBhZGRpbmdMZWZ0OiBcIjVweFwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Byb2ZpbGUuc29jaWFsLnlvdXR1YmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgIHtwcm9maWxlLnNvY2lhbC50d2l0dGVyICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKGAke3Byb2ZpbGUuc29jaWFsLnR3aXR0ZXJ9YCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9XCJ0d2l0dGVyXCIgY29sb3I9XCJibHVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmx1ZVwiLCBwYWRkaW5nTGVmdDogXCI1cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtwcm9maWxlLnNvY2lhbC50d2l0dGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8Pk5vIFNvY2lhbCBNZWRpYSBMaW5rcyA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cblxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NX0gc3RyZXRjaGVkIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgPEltYWdlIHNpemU9XCJzbWFsbFwiIGF2YXRhciBzcmM9e3Byb2ZpbGUudXNlci5wcm9maWxlUGljVXJsfSAvPlxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICB7IW93bkFjY291bnQgJiYgKFxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY29tcGFjdFxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgY29udGVudD17aXNGb2xsb3dpbmcgPyBcIkZvbGxvd2luZ1wiIDogXCJGb2xsb3dcIn1cbiAgICAgICAgICAgICAgICBpY29uPXtpc0ZvbGxvd2luZyA/IFwiY2hlY2sgY2lyY2xlXCIgOiBcImFkZCB1c2VyXCJ9XG4gICAgICAgICAgICAgICAgY29sb3I9e2lzRm9sbG93aW5nID8gXCJpbnN0YWdyYW1cIiA6IFwidHdpdHRlclwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICBpc0ZvbGxvd2luZ1xuICAgICAgICAgICAgICAgICAgICA/IGF3YWl0IHVuZm9sbG93VXNlcihwcm9maWxlLnVzZXIuX2lkLCBzZXRVc2VyRm9sbG93U3RhdHMpXG4gICAgICAgICAgICAgICAgICAgIDogYXdhaXQgZm9sbG93VXNlcihwcm9maWxlLnVzZXIuX2lkLCBzZXRVc2VyRm9sbG93U3RhdHMpO1xuICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9TZWdtZW50PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlSGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSWNvbiwgTWVudSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG5mdW5jdGlvbiBQcm9maWxlTWVudVRhYnMoe1xuICBhY3RpdmVJdGVtLFxuICBoYW5kbGVJdGVtQ2xpY2ssXG4gIGZvbGxvd2Vyc0xlbmd0aCxcbiAgZm9sbG93aW5nTGVuZ3RoLFxuICBvd25BY2NvdW50LFxuICBsb2dnZWRVc2VyRm9sbG93U3RhdHMsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjEwcHhcIiB9fT5cbiAgICAgIDxNZW51IGNvbXBhY3Q+XG4gICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICBuYW1lPVwicHJvZmlsZVwiXG4gICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSBcInByb2ZpbGVcIn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soXCJwcm9maWxlXCIpfVxuICAgICAgICA+XG4gICAgICAgICAgPEljb24gbmFtZT1cImhvbWVcIiAvPlxuICAgICAgICAgIFRyYW5nIGPDoSBuaMOiblxuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gXCJmb2xsb3dlcnNcIn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soXCJmb2xsb3dlcnNcIil9XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwidXNlcnNcIiAvPlxuICAgICAgICAgIHtmb2xsb3dlcnNMZW5ndGh9IE5nxrDhu51pIHRoZW8gZMO1aVxuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAge293bkFjY291bnQgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSBcImZvbGxvd2luZ1wifVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soXCJmb2xsb3dpbmdcIil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ1c2VyIHBsdXNcIiAvPlxuICAgICAgICAgICAgICB7bG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyBsb2dnZWRVc2VyRm9sbG93U3RhdHMuZm9sbG93aW5nLmxlbmd0aFxuICAgICAgICAgICAgICAgIDogMH17XCIgXCJ9XG4gICAgICAgICAgICAgIMSQYW5nIHRoZW8gZMO1aVxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9XCJ1cGRhdGVQcm9maWxlXCJcbiAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSBcInVwZGF0ZVByb2ZpbGVcIn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKFwidXBkYXRlUHJvZmlsZVwiKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cImVkaXRcIiAvPlxuICAgICAgICAgICAgICBDaOG7iW5oIHPhu61hIGNoaSB0aeG6v3RcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICBuYW1lPVwic2V0dGluZ3NcIlxuICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09IFwic2V0dGluZ3NcIn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKFwic2V0dGluZ3NcIil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJzZXR0aW5nXCIgLz5cbiAgICAgICAgICAgICAgQ8OgaSDEkeG6t3RcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgIG5hbWU9e2Ake2ZvbGxvd2luZ0xlbmd0aH0gZm9sbG93aW5nYH1cbiAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gXCJmb2xsb3dpbmdcIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhcImZvbGxvd2luZ1wiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwidXNlciBwbHVzXCIgLz5cbiAgICAgICAgICAgIHtmb2xsb3dpbmdMZW5ndGh9IMSQYW5nIHRoZW8gZMO1aVxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICApfVxuICAgICAgPC9NZW51PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlTWVudVRhYnM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBMaXN0LFxuICBEaXZpZGVyLFxuICBNZXNzYWdlLFxuICBDaGVja2JveCxcbiAgRm9ybSxcbiAgQnV0dG9uLFxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IHBhc3N3b3JkVXBkYXRlLCB0b2dnbGVNZXNzYWdlUG9wdXAgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcHJvZmlsZUFjdGlvbnNcIjtcblxuZnVuY3Rpb24gU2V0dGluZ3MoeyBuZXdNZXNzYWdlUG9wdXAgfSkge1xuICBjb25zdCBbcGFzc3dvcmRGaWVsZHMsIHNob3dQYXNzd29yZEZpZWxkc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW25ld01lc3NhZ2VTZXR0aW5ncywgc2hvd05ld01lc3NhZ2VTZXR0aW5nc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaXNGaXJzdFJ1biA9IHVzZVJlZih0cnVlKTtcbiAgY29uc3QgW3BvcHVwU2V0dGluZywgc2V0UG9wdXBTZXR0aW5nXSA9IHVzZVN0YXRlKG5ld01lc3NhZ2VQb3B1cCk7XG5cbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3VjY2VzcyAmJiBzZXRUaW1lb3V0KCgpID0+IHNldFN1Y2Nlc3MoZmFsc2UpLCAzMDAwKTtcbiAgfSwgW3N1Y2Nlc3NdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0ZpcnN0UnVuLmN1cnJlbnQpIHtcbiAgICAgIGlzRmlyc3RSdW4uY3VycmVudCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSwgW3BvcHVwU2V0dGluZ10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzdWNjZXNzICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TWVzc2FnZSBzdWNjZXNzIGljb249XCJjaGVjayBjaXJjbGVcIiBoZWFkZXI9XCJVcGRhdGVkIFN1Y2Nlc3NmdWxseVwiIC8+XG4gICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cblxuICAgICAgPExpc3Qgc2l6ZT1cImxhcmdlXCIgYW5pbWF0ZWQ+XG4gICAgICAgIDxMaXN0Lkl0ZW0+XG4gICAgICAgICAgPExpc3QuSWNvbiBuYW1lPVwidXNlciBzZWNyZXRcIiBzaXplPVwibGFyZ2VcIiB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCIgLz5cbiAgICAgICAgICA8TGlzdC5Db250ZW50PlxuICAgICAgICAgICAgPExpc3QuSGVhZGVyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNob3dQYXNzd29yZEZpZWxkcyghcGFzc3dvcmRGaWVsZHMpfVxuICAgICAgICAgICAgICBhcz1cImFcIlxuICAgICAgICAgICAgICBjb250ZW50PVwixJDhu5VpIG3huq10IGto4bqpdVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxuXG4gICAgICAgICAge3Bhc3N3b3JkRmllbGRzICYmIChcbiAgICAgICAgICAgIDxVcGRhdGVQYXNzd29yZFxuICAgICAgICAgICAgICBzZXRTdWNjZXNzPXtzZXRTdWNjZXNzfVxuICAgICAgICAgICAgICBzaG93UGFzc3dvcmRGaWVsZHM9e3Nob3dQYXNzd29yZEZpZWxkc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICA8TGlzdC5JY29uXG4gICAgICAgICAgICBuYW1lPVwicGFwZXIgcGxhbmUgb3V0bGluZVwiXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgdmVydGljYWxBbGlnbj1cIm1pZGRsZVwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICA8TGlzdC5IZWFkZXJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd05ld01lc3NhZ2VTZXR0aW5ncyghbmV3TWVzc2FnZVNldHRpbmdzKX1cbiAgICAgICAgICAgICAgYXM9XCJhXCJcbiAgICAgICAgICAgICAgY29udGVudD1cIkPDoGkgxJHhurd0IHRow7RuZyBiw6FvIHRpbiBuaOG6r24gbeG7m2k/XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XG4gICAgICAgICAgICBDw6BpIMSR4bq3dCBjxrBhIHPhu5UgY8OzIGLhuq10IGzDqm4ga2hpIGPDsyB0aW4gbmjhuq9uIG3hu5tpIGhheSBraMO0bmcuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3BvcHVwU2V0dGluZ31cbiAgICAgICAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxuICAgICAgICAgICAgICAgIHRvZ2dsZU1lc3NhZ2VQb3B1cChwb3B1cFNldHRpbmcsIHNldFBvcHVwU2V0dGluZywgc2V0U3VjY2VzcylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaXN0Lkl0ZW0+XG5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgIDwvTGlzdD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuY29uc3QgVXBkYXRlUGFzc3dvcmQgPSAoeyBzZXRTdWNjZXNzLCBzaG93UGFzc3dvcmRGaWVsZHMgfSkgPT4ge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgW3VzZXJQYXNzd29yZHMsIHNldFVzZXJQYXNzd29yZHNdID0gdXNlU3RhdGUoe1xuICAgIGN1cnJlbnRQYXNzd29yZDogXCJcIixcbiAgICBuZXdQYXNzd29yZDogXCJcIixcbiAgfSk7XG4gIGNvbnN0IFtjb25maXJtUGFzcywgc2V0Q29uZmlybVBhc3N3b3JkXSA9IHVzZVN0YXRlKHsgY29uZmlybVBhc3N3b3JkOiBcIlwiIH0pO1xuICBjb25zdCBbdHlwZWQsIHNob3dUeXBlZF0gPSB1c2VTdGF0ZSh7XG4gICAgZmllbGQxOiBmYWxzZSxcbiAgICBmaWVsZDI6IGZhbHNlLFxuICB9KTtcblxuICBjb25zdCB7IGZpZWxkMSwgZmllbGQyIH0gPSB0eXBlZDtcblxuICBjb25zdCB7IGN1cnJlbnRQYXNzd29yZCwgbmV3UGFzc3dvcmQgfSA9IHVzZXJQYXNzd29yZHM7XG4gIGNvbnN0IHsgY29uZmlybVBhc3N3b3JkIH0gPSBjb25maXJtUGFzcztcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIHNldFVzZXJQYXNzd29yZHMoKHByZXYpID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xuICB9O1xuICBjb25zdCBoYW5kbGVDaGFuZ2VDb25maXJtID0gKGUpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRDb25maXJtUGFzc3dvcmQoKHByZXYpID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZXJyb3JNc2cgJiYgc2V0VGltZW91dCgoKSA9PiBzZXRFcnJvcihudWxsKSwgNTAwMCk7XG4gIH0sIFtlcnJvck1zZ10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGb3JtXG4gICAgICAgIGVycm9yPXtlcnJvck1zZyAhPT0gbnVsbH1cbiAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICAgICAgICBhd2FpdCBwYXNzd29yZFVwZGF0ZShzZXRTdWNjZXNzLCB1c2VyUGFzc3dvcmRzKTtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcblxuICAgICAgICAgIHNob3dQYXNzd29yZEZpZWxkcyhmYWxzZSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxMaXN0Lkxpc3Q+XG4gICAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgIGljb249e3tcbiAgICAgICAgICAgICAgICBuYW1lOiBcImV5ZVwiLFxuICAgICAgICAgICAgICAgIGNpcmN1bGFyOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxpbms6IHRydWUsXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT5cbiAgICAgICAgICAgICAgICAgIHNob3dUeXBlZCgocHJldikgPT4gKHsgLi4ucHJldiwgZmllbGQxOiAhZmllbGQxIH0pKSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdHlwZT17ZmllbGQxID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XG4gICAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgICBsYWJlbD1cIk3huq10IGto4bqpdSBoaeG7h24gdOG6oWlcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkN1cnJlbnQgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICBuYW1lPVwiY3VycmVudFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRQYXNzd29yZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICBpY29uPXt7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJleWVcIixcbiAgICAgICAgICAgICAgICBjaXJjdWxhcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsaW5rOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XG4gICAgICAgICAgICAgICAgICBzaG93VHlwZWQoKHByZXYpID0+ICh7IC4uLnByZXYsIGZpZWxkMjogIWZpZWxkMiB9KSksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHR5cGU9e2ZpZWxkMiA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxuICAgICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJN4bqtdCBraOG6qXUgbeG7m2lcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5ldyBwYXNzd29yZFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJuZXdQYXNzd29yZFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdQYXNzd29yZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICBpY29uPXt7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJleWVcIixcbiAgICAgICAgICAgICAgICBjaXJjdWxhcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsaW5rOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XG4gICAgICAgICAgICAgICAgICBzaG93VHlwZWQoKHByZXYpID0+ICh7IC4uLnByZXYsIGZpZWxkMjogIWZpZWxkMiB9KSksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHR5cGU9e2ZpZWxkMiA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxuICAgICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOaOG6rXAgbOG6oWkgbeG6rXQga2jhuql1XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VDb25maXJtfVxuICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlybVBhc3N3b3JkfVxuICAgICAgICAgICAgICBlcnJvcj17Y29uZmlybVBhc3N3b3JkID09PSBuZXdQYXNzd29yZCA/IGZhbHNlIDogeyBjb250ZW50OiBcIk3huq10IGto4bqpdSBraMO0bmcgdHLDuW5nIG5oYXVcIiB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmcgfHwgY3VycmVudFBhc3N3b3JkID09PSBcIlwiIHx8IG5ld1Bhc3N3b3JkID09PSBcIlwifVxuICAgICAgICAgICAgICBjb21wYWN0XG4gICAgICAgICAgICAgIGljb249XCJjb25maWd1cmVcIlxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZWFsXCJcbiAgICAgICAgICAgICAgY29udGVudD1cIkzGsHUgdGhheSDEkeG7lWlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgIGNvbXBhY3RcbiAgICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjb250ZW50PVwiSOG7p3lcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaG93UGFzc3dvcmRGaWVsZHMoZmFsc2UpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxNZXNzYWdlIGljb249XCJtZWhcIiBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e2Vycm9yTXNnfSAvPlxuICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICA8L0xpc3QuTGlzdD5cbiAgICAgIDwvRm9ybT5cbiAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3M7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBNZXNzYWdlLCBEaXZpZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgSW1hZ2VEcm9wRGl2IGZyb20gXCIuLi9Db21tb24vSW1hZ2VEcm9wRGl2XCI7XG5pbXBvcnQgdXBsb2FkUGljIGZyb20gXCIuLi8uLi91dGlscy91cGxvYWRQaWNUb0Nsb3VkaW5hcnlcIjtcbmltcG9ydCB7IHByb2ZpbGVVcGRhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcHJvZmlsZUFjdGlvbnNcIjtcbmltcG9ydCBDb21tb25JbnB1dFVwZGF0ZSBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vbklucHV0VXBkYXRlXCI7XG5cbmZ1bmN0aW9uIFVwZGF0ZVByb2ZpbGUoeyBQcm9maWxlIH0pIHtcbiAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUoe1xuICAgIHByb2ZpbGVQaWNVcmw6IFByb2ZpbGUudXNlci5wcm9maWxlUGljVXJsLFxuICAgIGJpbzogUHJvZmlsZS5iaW8gfHwgXCJcIixcbiAgICB3b3JrOiBQcm9maWxlLndvcmsgfHwgXCJcIixcbiAgICByZWxhdGlvbnNoaXA6IFByb2ZpbGUucmVsYXRpb25zaGlwIHx8IFwiXCIsXG4gICAgYWRkcmVzczogUHJvZmlsZS5hZGRyZXNzIHx8IFwiXCIsXG4gICAgZWR1Y2F0aW9uOiBQcm9maWxlLmVkdWNhdGlvbiB8fCBcIlwiLFxuICAgIGJpcnRoZGF5OiBQcm9maWxlLmJpcnRoZGF5IHx8IFwiXCIsXG4gICAgZmFjZWJvb2s6IChQcm9maWxlLnNvY2lhbCAmJiBQcm9maWxlLnNvY2lhbC5mYWNlYm9vaykgfHwgXCJcIixcbiAgICB5b3V0dWJlOiAoUHJvZmlsZS5zb2NpYWwgJiYgUHJvZmlsZS5zb2NpYWwueW91dHViZSkgfHwgXCJcIixcbiAgICBpbnN0YWdyYW06IChQcm9maWxlLnNvY2lhbCAmJiBQcm9maWxlLnNvY2lhbC5pbnN0YWdyYW0pIHx8IFwiXCIsXG4gICAgdHdpdHRlcjogKFByb2ZpbGUuc29jaWFsICYmIFByb2ZpbGUuc29jaWFsLnR3aXR0ZXIpIHx8IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd1NvY2lhbExpbmtzLCBzZXRTaG93U29jaWFsTGlua3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtoaWdobGlnaHRlZCwgc2V0SGlnaGxpZ2h0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBbbWVkaWEsIHNldE1lZGlhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbWVkaWFQcmV2aWV3LCBzZXRNZWRpYVByZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCBmaWxlcyB9ID0gZS50YXJnZXQ7XG5cbiAgICBpZiAobmFtZSA9PT0gXCJtZWRpYVwiKSB7XG4gICAgICBzZXRNZWRpYShmaWxlc1swXSk7XG4gICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSkpO1xuICAgIH1cbiAgICBzZXRQcm9maWxlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbbmFtZV06IHZhbHVlIH0pKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOiBcIjI1cHhcIn19PlxuICAgICAgPEZvcm1cbiAgICAgICAgZXJyb3I9e2Vycm9yTXNnICE9PSBudWxsfVxuICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgICAgICAgIGxldCBwcm9maWxlUGljVXJsO1xuXG4gICAgICAgICAgaWYgKG1lZGlhICE9PSBudWxsKSB7XG4gICAgICAgICAgICBwcm9maWxlUGljVXJsID0gYXdhaXQgdXBsb2FkUGljKG1lZGlhKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWVkaWEgIT09IG51bGwgJiYgIXByb2ZpbGVQaWNVcmwpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHNldEVycm9yTXNnKFwiRXJyb3IgVXBsb2FkaW5nIEltYWdlXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGF3YWl0IHByb2ZpbGVVcGRhdGUocHJvZmlsZSwgc2V0TG9hZGluZywgc2V0RXJyb3JNc2csIHByb2ZpbGVQaWNVcmwpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TWVzc2FnZVxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0RXJyb3JNc2coZmFsc2UpfVxuICAgICAgICAgIGVycm9yXG4gICAgICAgICAgY29udGVudD17ZXJyb3JNc2d9XG4gICAgICAgICAgYXR0YWNoZWRcbiAgICAgICAgICBoZWFkZXI9XCJPb3BzIVwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPEltYWdlRHJvcERpdlxuICAgICAgICAgIGlucHV0UmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICBoaWdobGlnaHRlZD17aGlnaGxpZ2h0ZWR9XG4gICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQ9e3NldEhpZ2hsaWdodGVkfVxuICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG1lZGlhUHJldmlldz17bWVkaWFQcmV2aWV3fVxuICAgICAgICAgIHNldE1lZGlhUHJldmlldz17c2V0TWVkaWFQcmV2aWV3fVxuICAgICAgICAgIHNldE1lZGlhPXtzZXRNZWRpYX1cbiAgICAgICAgICBwcm9maWxlUGljVXJsPXtwcm9maWxlLnByb2ZpbGVQaWNVcmx9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPENvbW1vbklucHV0VXBkYXRlXG4gICAgICAgICAgdXNlcj17cHJvZmlsZX1cbiAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICBzaG93U29jaWFsTGlua3M9e3Nob3dTb2NpYWxMaW5rc31cbiAgICAgICAgICBzZXRTaG93U29jaWFsTGlua3M9e3NldFNob3dTb2NpYWxMaW5rc31cbiAgICAgICAgLz5cblxuICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cblxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICBpY29uPVwicGVuY2lsIGFsdGVybmF0ZVwiXG4gICAgICAgICAgZGlzYWJsZWQ9e3Byb2ZpbGUuYmlvID09PSBcIlwiIHx8IGxvYWRpbmd9XG4gICAgICAgICAgY29udGVudD1cIlN1Ym1pdFwiXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZVByb2ZpbGU7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNjcmlwdHMsIGNzcyB9ID0gYXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgY29uc3QgWywgc3R5bGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICBdIGFzIGNvbnN0KVxuXG4gICAgICAgICAgY29uc3QgZW50cnlwb2ludDogUm91dGVFbnRyeXBvaW50ID0gYXdhaXQgcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICAgIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLFxuICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICBtYXJrQXNzZXRFcnJvcihcbiAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG5cbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTogc3RyaW5nLCBwYWdlczogc3RyaW5nW10pIHtcbiAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUhKSlcblxuICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgIHJldHVybiBwYXRobmFtZVxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICAgIHwgJ2lzUHJldmlldydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgc2RyOiB7IFthc1BhdGg6IHN0cmluZ106IFByb21pc2U8b2JqZWN0PiB9ID0ge31cblxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgIGlzUHJldmlldyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShkZWxCYXNlUGF0aChhcyksIHRoaXMubG9jYWxlKSksXG4gICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgcGFnZXNcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVdcblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgICAgcGF0aG5hbWUgPT09ICcvX2Vycm9yJyAmJlxuICAgICAgICBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHM/LnBhZ2VQcm9wcz8uc3RhdHVzQ29kZSA9PT0gNTAwICYmXG4gICAgICAgIHByb3BzPy5wYWdlUHJvcHNcbiAgICAgICkge1xuICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBOb1Byb2ZpbGVQb3N0cywgTm9Qcm9maWxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L05vRGF0YVwiO1xuaW1wb3J0IENhcmRQb3N0IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3QvQ2FyZFBvc3RcIjtcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IHsgUGxhY2VIb2xkZXJQb3N0cyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9QbGFjZUhvbGRlckdyb3VwXCI7XG5pbXBvcnQgUHJvZmlsZU1lbnVUYWJzIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZU1lbnVUYWJzXCI7XG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGVIZWFkZXJcIjtcbmltcG9ydCBGb2xsb3dlcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZmlsZS9Gb2xsb3dlcnNcIjtcbmltcG9ydCBGb2xsb3dpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZmlsZS9Gb2xsb3dpbmdcIjtcbmltcG9ydCBVcGRhdGVQcm9maWxlIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGUvVXBkYXRlUHJvZmlsZVwiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGUvU2V0dGluZ3NcIjtcbmltcG9ydCB7IFBvc3REZWxldGVUb2FzdHIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvVG9hc3RyXCI7XG5cbmZ1bmN0aW9uIFByb2ZpbGVQYWdlKHtcbiAgZXJyb3JMb2FkaW5nLFxuICBwcm9maWxlLFxuICBmb2xsb3dlcnNMZW5ndGgsXG4gIGZvbGxvd2luZ0xlbmd0aCxcbiAgdXNlcixcbiAgdXNlckZvbGxvd1N0YXRzXG59KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93VG9hc3RyLCBzZXRTaG93VG9hc3RyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VTdGF0ZShcInByb2ZpbGVcIik7XG4gIGNvbnN0IGhhbmRsZUl0ZW1DbGljayA9IGNsaWNrZWRUYWIgPT4gc2V0QWN0aXZlSXRlbShjbGlja2VkVGFiKTtcblxuICBjb25zdCBbbG9nZ2VkVXNlckZvbGxvd1N0YXRzLCBzZXRVc2VyRm9sbG93U3RhdHNdID0gdXNlU3RhdGUodXNlckZvbGxvd1N0YXRzKTtcblxuICBjb25zdCBvd25BY2NvdW50ID0gcHJvZmlsZS51c2VyLl9pZCA9PT0gdXNlci5faWQ7XG5cbiAgaWYgKGVycm9yTG9hZGluZykgcmV0dXJuIDxOb1Byb2ZpbGUgLz47XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRQb3N0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHJvdXRlci5xdWVyeTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wcm9maWxlL3Bvc3RzLyR7dXNlcm5hbWV9YCwge1xuICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0UG9zdHMocmVzLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoXCJFcnJvciBMb2FkaW5nIFBvc3RzXCIpO1xuICAgICAgfVxuXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuICAgIGdldFBvc3RzKCk7XG4gIH0sIFtyb3V0ZXIucXVlcnkudXNlcm5hbWVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNob3dUb2FzdHIgJiYgc2V0VGltZW91dCgoKSA9PiBzZXRTaG93VG9hc3RyKGZhbHNlKSwgNDAwMCk7XG4gIH0sIFtzaG93VG9hc3RyXSk7XG5cbiAgY29uc3Qgc29ja2V0ID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXNvY2tldC5jdXJyZW50KSB7XG4gICAgICBzb2NrZXQuY3VycmVudCA9IGlvKGJhc2VVcmwpO1xuICAgIH1cblxuICAgIGlmIChzb2NrZXQuY3VycmVudCkge1xuICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcImpvaW5cIiwgeyB1c2VySWQ6IHVzZXIuX2lkIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcbiAgICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcImRpc2Nvbm5lY3RcIik7XG4gICAgICAgIHNvY2tldC5jdXJyZW50Lm9mZigpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2hvd1RvYXN0ciAmJiA8UG9zdERlbGV0ZVRvYXN0ciAvPn1cblxuICAgICAgPEdyaWQgc3RhY2thYmxlPlxuICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPFByb2ZpbGVNZW51VGFic1xuICAgICAgICAgICAgICBhY3RpdmVJdGVtPXthY3RpdmVJdGVtfVxuICAgICAgICAgICAgICBoYW5kbGVJdGVtQ2xpY2s9e2hhbmRsZUl0ZW1DbGlja31cbiAgICAgICAgICAgICAgZm9sbG93ZXJzTGVuZ3RoPXtmb2xsb3dlcnNMZW5ndGh9XG4gICAgICAgICAgICAgIGZvbGxvd2luZ0xlbmd0aD17Zm9sbG93aW5nTGVuZ3RofVxuICAgICAgICAgICAgICBvd25BY2NvdW50PXtvd25BY2NvdW50fVxuICAgICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHM9e2xvZ2dlZFVzZXJGb2xsb3dTdGF0c31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkLlJvdz5cblxuICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAge2FjdGl2ZUl0ZW0gPT09IFwicHJvZmlsZVwiICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlclxuICAgICAgICAgICAgICAgICAgcHJvZmlsZT17cHJvZmlsZX1cbiAgICAgICAgICAgICAgICAgIG93bkFjY291bnQ9e293bkFjY291bnR9XG4gICAgICAgICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHM9e2xvZ2dlZFVzZXJGb2xsb3dTdGF0c31cbiAgICAgICAgICAgICAgICAgIHNldFVzZXJGb2xsb3dTdGF0cz17c2V0VXNlckZvbGxvd1N0YXRzfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgIDxQbGFjZUhvbGRlclBvc3RzIC8+XG4gICAgICAgICAgICAgICAgKSA6IHBvc3RzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgICAgICBwb3N0cy5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkUG9zdFxuICAgICAgICAgICAgICAgICAgICAgIHNvY2tldD17c29ja2V0fVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17cG9zdC5faWR9XG4gICAgICAgICAgICAgICAgICAgICAgcG9zdD17cG9zdH1cbiAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxuICAgICAgICAgICAgICAgICAgICAgIHNldFBvc3RzPXtzZXRQb3N0c31cbiAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93VG9hc3RyPXtzZXRTaG93VG9hc3RyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPE5vUHJvZmlsZVBvc3RzIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7YWN0aXZlSXRlbSA9PT0gXCJmb2xsb3dlcnNcIiAmJiAoXG4gICAgICAgICAgICAgIDxGb2xsb3dlcnNcbiAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxuICAgICAgICAgICAgICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cz17bG9nZ2VkVXNlckZvbGxvd1N0YXRzfVxuICAgICAgICAgICAgICAgIHNldFVzZXJGb2xsb3dTdGF0cz17c2V0VXNlckZvbGxvd1N0YXRzfVxuICAgICAgICAgICAgICAgIHByb2ZpbGVVc2VySWQ9e3Byb2ZpbGUudXNlci5faWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7YWN0aXZlSXRlbSA9PT0gXCJmb2xsb3dpbmdcIiAmJiAoXG4gICAgICAgICAgICAgIDxGb2xsb3dpbmdcbiAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxuICAgICAgICAgICAgICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cz17bG9nZ2VkVXNlckZvbGxvd1N0YXRzfVxuICAgICAgICAgICAgICAgIHNldFVzZXJGb2xsb3dTdGF0cz17c2V0VXNlckZvbGxvd1N0YXRzfVxuICAgICAgICAgICAgICAgIHByb2ZpbGVVc2VySWQ9e3Byb2ZpbGUudXNlci5faWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7YWN0aXZlSXRlbSA9PT0gXCJ1cGRhdGVQcm9maWxlXCIgJiYgPFVwZGF0ZVByb2ZpbGUgUHJvZmlsZT17cHJvZmlsZX0gLz59XG5cbiAgICAgICAgICAgIHthY3RpdmVJdGVtID09PSBcInNldHRpbmdzXCIgJiYgKFxuICAgICAgICAgICAgICA8U2V0dGluZ3MgbmV3TWVzc2FnZVBvcHVwPXt1c2VyLm5ld01lc3NhZ2VQb3B1cH0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgIDwvR3JpZD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuUHJvZmlsZVBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHVzZXJuYW1lIH0gPSBjdHgucXVlcnk7XG4gICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Byb2ZpbGUvJHt1c2VybmFtZX1gLCB7XG4gICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHsgcHJvZmlsZSwgZm9sbG93ZXJzTGVuZ3RoLCBmb2xsb3dpbmdMZW5ndGggfSA9IHJlcy5kYXRhO1xuXG4gICAgcmV0dXJuIHsgcHJvZmlsZSwgZm9sbG93ZXJzTGVuZ3RoLCBmb2xsb3dpbmdMZW5ndGggfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBlcnJvckxvYWRpbmc6IHRydWUgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBhZ2U7XG4iLCJjb25zdCBiYXNlVXJsID1cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiXG4gICAgPyBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiXG4gICAgOiBcImh0dHBzOi8vZ2F0by1zb2NpYWwtbmV0d29yay5oZXJva3VhcHAuY29tXCI7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVybDtcbiIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IE1vbWVudCBmcm9tIFwicmVhY3QtbW9tZW50XCI7XG5cbmNvbnN0IGNhbGN1bGF0ZVRpbWUgPSBjcmVhdGVkQXQgPT4ge1xuICBjb25zdCB0b2RheSA9IG1vbWVudChEYXRlLm5vdygpKTtcbiAgY29uc3QgcG9zdERhdGUgPSBtb21lbnQoY3JlYXRlZEF0KTtcbiAgY29uc3QgZGlmZkluSG91cnMgPSB0b2RheS5kaWZmKHBvc3REYXRlLCBcImhvdXJzXCIpO1xuXG4gIGlmIChkaWZmSW5Ib3VycyA8IDI0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIFRvZGF5IDxNb21lbnQgZm9ybWF0PVwiaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+XG4gICAgICA8Lz5cbiAgICApO1xuICB9IGVsc2UgaWYgKGRpZmZJbkhvdXJzID4gMjQgJiYgZGlmZkluSG91cnMgPCAzNikge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICBZZXN0ZXJkYXkgPE1vbWVudCBmb3JtYXQ9XCJoaDptbSBBXCI+e2NyZWF0ZWRBdH08L01vbWVudD5cbiAgICAgIDwvPlxuICAgICk7XG4gIH0gZWxzZSBpZiAoZGlmZkluSG91cnMgPiAzNikge1xuICAgIHJldHVybiA8TW9tZW50IGZvcm1hdD1cIkREL01NL1lZWVkgaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYWxjdWxhdGVUaW1lO1xuIiwiY29uc3QgY2F0Y2hFcnJvcnMgPSBlcnJvciA9PiB7XG4gIGxldCBlcnJvck1zZztcblxuICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcblxuICAgIGVycm9yTXNnID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcblxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xuICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlcXVlc3Q7XG5cbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcbiAgfSBlbHNlIHtcbiAgICBlcnJvck1zZyA9IGVycm9yLm1lc3NhZ2U7XG5cbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcbiAgfVxuICByZXR1cm4gZXJyb3JNc2c7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYXRjaEVycm9ycztcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuL2Jhc2VVcmxcIjtcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi9jYXRjaEVycm9yc1wiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5cbmNvbnN0IEF4aW9zID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogYCR7YmFzZVVybH0vYXBpL3Bvc3RzYCxcbiAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBzdWJtaXROZXdQb3N0ID0gYXN5bmMgKFxuICB0ZXh0LFxuICBsb2NhdGlvbixcbiAgcGljVXJsLFxuICBzZXRQb3N0cyxcbiAgc2V0TmV3UG9zdCxcbiAgc2V0RXJyb3JcbikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IEF4aW9zLnBvc3QoXCIvXCIsIHsgdGV4dCwgbG9jYXRpb24sIHBpY1VybCB9KTtcblxuICAgIHNldFBvc3RzKHByZXYgPT4gW3Jlcy5kYXRhLCAuLi5wcmV2XSk7XG4gICAgc2V0TmV3UG9zdCh7IHRleHQ6IFwiXCIsIGxvY2F0aW9uOiBcIlwiIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IGVycm9yTXNnID0gY2F0Y2hFcnJvcnMoZXJyb3IpO1xuICAgIHNldEVycm9yKGVycm9yTXNnKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVBvc3QgPSBhc3luYyAocG9zdElkLCBzZXRQb3N0cywgc2V0U2hvd1RvYXN0cikgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IEF4aW9zLmRlbGV0ZShgLyR7cG9zdElkfWApO1xuICAgIHNldFBvc3RzKHByZXYgPT4gcHJldi5maWx0ZXIocG9zdCA9PiBwb3N0Ll9pZCAhPT0gcG9zdElkKSk7XG4gICAgc2V0U2hvd1RvYXN0cih0cnVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbGlrZVBvc3QgPSBhc3luYyAocG9zdElkLCB1c2VySWQsIHNldExpa2VzLCBsaWtlID0gdHJ1ZSkgPT4ge1xuICB0cnkge1xuICAgIGlmIChsaWtlKSB7XG4gICAgICBhd2FpdCBBeGlvcy5wb3N0KGAvbGlrZS8ke3Bvc3RJZH1gKTtcbiAgICAgIHNldExpa2VzKHByZXYgPT4gWy4uLnByZXYsIHsgdXNlcjogdXNlcklkIH1dKTtcbiAgICB9XG4gICAgLy9cbiAgICBlbHNlIGlmICghbGlrZSkge1xuICAgICAgYXdhaXQgQXhpb3MucHV0KGAvdW5saWtlLyR7cG9zdElkfWApO1xuICAgICAgc2V0TGlrZXMocHJldiA9PiBwcmV2LmZpbHRlcihsaWtlID0+IGxpa2UudXNlciAhPT0gdXNlcklkKSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChwb3N0SWQsIHVzZXIsIHRleHQsIHNldENvbW1lbnRzLCBzZXRUZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgQXhpb3MucG9zdChgL2NvbW1lbnQvJHtwb3N0SWR9YCwgeyB0ZXh0IH0pO1xuXG4gICAgY29uc3QgbmV3Q29tbWVudCA9IHtcbiAgICAgIF9pZDogcmVzLmRhdGEsXG4gICAgICB1c2VyLFxuICAgICAgdGV4dCxcbiAgICAgIGRhdGU6IERhdGUubm93KClcbiAgICB9O1xuXG4gICAgc2V0Q29tbWVudHMocHJldiA9PiBbbmV3Q29tbWVudCwgLi4ucHJldl0pO1xuICAgIHNldFRleHQoXCJcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbW1lbnQgPSBhc3luYyAocG9zdElkLCBjb21tZW50SWQsIHNldENvbW1lbnRzKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgQXhpb3MuZGVsZXRlKGAvJHtwb3N0SWR9LyR7Y29tbWVudElkfWApO1xuICAgIHNldENvbW1lbnRzKHByZXYgPT4gcHJldi5maWx0ZXIoY29tbWVudCA9PiBjb21tZW50Ll9pZCAhPT0gY29tbWVudElkKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcbiAgfVxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuL2Jhc2VVcmxcIjtcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi9jYXRjaEVycm9yc1wiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBBeGlvcyA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IGAke2Jhc2VVcmx9L2FwaS9wcm9maWxlYCxcbiAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZm9sbG93VXNlciA9IGFzeW5jICh1c2VyVG9Gb2xsb3dJZCwgc2V0VXNlckZvbGxvd1N0YXRzKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgQXhpb3MucG9zdChgL2ZvbGxvdy8ke3VzZXJUb0ZvbGxvd0lkfWApO1xuXG4gICAgc2V0VXNlckZvbGxvd1N0YXRzKChwcmV2KSA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIGZvbGxvd2luZzogWy4uLnByZXYuZm9sbG93aW5nLCB7IHVzZXI6IHVzZXJUb0ZvbGxvd0lkIH1dLFxuICAgIH0pKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdW5mb2xsb3dVc2VyID0gYXN5bmMgKHVzZXJUb1VuZm9sbG93SWQsIHNldFVzZXJGb2xsb3dTdGF0cykgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IEF4aW9zLnB1dChgL3VuZm9sbG93LyR7dXNlclRvVW5mb2xsb3dJZH1gKTtcblxuICAgIHNldFVzZXJGb2xsb3dTdGF0cygocHJldikgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBmb2xsb3dpbmc6IHByZXYuZm9sbG93aW5nLmZpbHRlcihcbiAgICAgICAgKGZvbGxvd2luZykgPT4gZm9sbG93aW5nLnVzZXIgIT09IHVzZXJUb1VuZm9sbG93SWRcbiAgICAgICksXG4gICAgfSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBwcm9maWxlVXBkYXRlID0gYXN5bmMgKFxuICBwcm9maWxlLFxuICBzZXRMb2FkaW5nLFxuICBzZXRFcnJvcixcbiAgcHJvZmlsZVBpY1VybFxuKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3Qge1xuICAgICAgYmlvLFxuICAgICAgd29yayxcbiAgICAgIHJlbGF0aW9uc2hpcCxcbiAgICAgIGFkZHJlc3MsXG4gICAgICBlZHVjYXRpb24sXG4gICAgICBiaXJ0aGRheSxcbiAgICAgIGZhY2Vib29rLFxuICAgICAgeW91dHViZSxcbiAgICAgIHR3aXR0ZXIsXG4gICAgICBpbnN0YWdyYW0sXG4gICAgfSA9IHByb2ZpbGU7XG5cbiAgICBhd2FpdCBBeGlvcy5wb3N0KGAvdXBkYXRlYCwge1xuICAgICAgYmlvLFxuICAgICAgd29yayxcbiAgICAgIHJlbGF0aW9uc2hpcCxcbiAgICAgIGFkZHJlc3MsXG4gICAgICBlZHVjYXRpb24sXG4gICAgICBiaXJ0aGRheSxcbiAgICAgIGZhY2Vib29rLFxuICAgICAgeW91dHViZSxcbiAgICAgIHR3aXR0ZXIsXG4gICAgICBpbnN0YWdyYW0sXG4gICAgICBwcm9maWxlUGljVXJsLFxuICAgIH0pO1xuXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgUm91dGVyLnJlbG9hZCgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHNldEVycm9yKGNhdGNoRXJyb3JzKGVycm9yKSk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVBdmF0YXIgPSBhc3luYyAoc2V0TG9hZGluZywgc2V0RXJyb3IsIHByb2ZpbGVQaWNVcmwpID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBBeGlvcy5wdXQoYC91cGRhdGVwaWNgLCB7XG4gICAgICBwcm9maWxlUGljVXJsLFxuICAgIH0pO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIFJvdXRlci5yZWxvYWQoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBzZXRFcnJvcihjYXRjaEVycm9ycyhlcnJvcikpO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcGFzc3dvcmRVcGRhdGUgPSBhc3luYyAoc2V0U3VjY2VzcywgdXNlclBhc3N3b3JkcykgPT4ge1xuICBjb25zdCB7IGN1cnJlbnRQYXNzd29yZCwgbmV3UGFzc3dvcmQgfSA9IHVzZXJQYXNzd29yZHM7XG4gIHRyeSB7XG4gICAgYXdhaXQgQXhpb3MucG9zdChgL3NldHRpbmdzL3Bhc3N3b3JkYCwgeyBjdXJyZW50UGFzc3dvcmQsIG5ld1Bhc3N3b3JkIH0pO1xuXG4gICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlTWVzc2FnZVBvcHVwID0gYXN5bmMgKFxuICBwb3B1cFNldHRpbmcsXG4gIHNldFBvcHVwU2V0dGluZyxcbiAgc2V0U3VjY2Vzc1xuKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgQXhpb3MucG9zdChgL3NldHRpbmdzL21lc3NhZ2VQb3B1cGApO1xuXG4gICAgc2V0UG9wdXBTZXR0aW5nKCFwb3B1cFNldHRpbmcpO1xuICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcbiAgfVxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgdXBsb2FkUGljID0gYXN5bmMgKG1lZGlhKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm0uYXBwZW5kKFwiZmlsZVwiLCBtZWRpYSk7XG4gICAgZm9ybS5hcHBlbmQoXCJ1cGxvYWRfcHJlc2V0XCIsIFwiZ2F0b19zb2NpYWxcIik7XG4gICAgZm9ybS5hcHBlbmQoXCJjbG91ZF9uYW1lXCIsIFwiZHZpendkaHNvXCIpO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChwcm9jZXNzLmVudi5DTE9VRElOQVJZX1VSTCwgZm9ybSk7XG4gICAgcmV0dXJuIHJlcy5kYXRhLnVybDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm47XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwbG9hZFBpYztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNoYXJlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==