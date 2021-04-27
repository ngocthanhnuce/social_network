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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/messages.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Chats/Chat.js":
/*!**********************************!*\
  !*** ./components/Chats/Chat.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Chats\\Chat.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Chat({
  chat,
  connectedUsers,
  deleteChat
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const isOnline = connectedUsers.length > 0 && connectedUsers.filter(user => user.userId === chat.messagesWith).length > 0;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    selection: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    active: router.query.message === chat.messagesWith,
    onClick: () => router.push(`/messages?message=${chat.messagesWith}`, undefined, {
      shallow: true
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Avatar, {
    src: chat.profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Author, {
    as: "a",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, chat.name, " ", isOnline && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "circle",
    size: "small",
    color: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 30
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Metadata, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, Object(_utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__["default"])(chat.date)), __jsx("div", {
    style: {
      position: "absolute",
      right: "10px",
      cursor: "pointer"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "trash alternate",
    color: "red",
    onClick: () => deleteChat(chat.messagesWith),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Comment"].Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, chat.lastMessage.length > 20 ? `${chat.lastMessage.substring(0, 20)} ...` : chat.lastMessage))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ }),

/***/ "./components/Chats/ChatListSearch.js":
/*!********************************************!*\
  !*** ./components/Chats/ChatListSearch.js ***!
  \********************************************/
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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Chats\\ChatListSearch.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// @ts-nocheck






let cancel;

function ChatListSearch({
  chats,
  setChats
}) {
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: results,
    1: setResults
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  const handleChange = async e => {
    const {
      value
    } = e.target;
    setText(value);
    setLoading(true);

    try {
      cancel && cancel();
      const CancelToken = axios__WEBPACK_IMPORTED_MODULE_2___default.a.CancelToken;
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("token");
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5___default.a}/api/search/${value}`, {
        headers: {
          Authorization: token
        },
        cancelToken: new CancelToken(canceler => {
          cancel = canceler;
        })
      });
      if (res.data.length === 0) return setLoading(false);
      setResults(res.data);
    } catch (error) {
      alert("Error Searching");
    }

    setLoading(false);
  };

  const addChat = result => {
    const alreadyInChat = chats.length > 0 && chats.filter(chat => chat.messsagesWith === result._id).length > 0;

    if (alreadyInChat) {
      return router.push(`/messages?message=${result._id}`);
    } //
    else {
        const newChat = {
          messagesWith: result._id,
          name: result.name,
          profilePicUrl: result.profilePicUrl,
          lastMessage: "",
          date: Date.now()
        };
        setChats(prev => [newChat, ...prev]);
        return router.push(`/messages?message=${result._id}`);
      }
  };

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Search"], {
    onBlur: () => {
      results.length > 0 && setResults([]);
      loading && setLoading(false);
      setText("");
    },
    size: "small",
    loading: loading,
    value: text,
    resultRenderer: ResultRenderer,
    results: results,
    onSearchChange: handleChange,
    minCharacters: 1,
    onResultSelect: (e, data) => addChat(data.result),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  });
}

const ResultRenderer = ({
  _id,
  profilePicUrl,
  name
}) => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    key: _id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: profilePicUrl,
    alt: "ProfilePic",
    avatar: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
    header: name,
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatListSearch);

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

/***/ "./components/Messages/Banner.js":
/*!***************************************!*\
  !*** ./components/Messages/Banner.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Messages\\Banner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// @ts-nocheck



function Banner({
  bannerData,
  connectedUsers
}) {
  const {
    name,
    profilePicUrl
  } = bannerData;
  const isOnline = connectedUsers.length > 0 && connectedUsers.filter(user => user.userId === chat.messagesWith).length > 0;
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    color: "teal",
    attached: "top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    floated: "left",
    width: 13,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    avatar: true,
    src: profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), name)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    floated: "right",
    width: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    style: {
      marginLeft: "25px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "call",
    color: "blue",
    style: {
      marginRight: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "video",
    color: "blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), " ", isOnline && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "circle",
    size: "small",
    color: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 26
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/Messages/Message.js":
/*!****************************************!*\
  !*** ./components/Messages/Message.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Messages\\Message.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Message({
  message,
  user,
  deleteMsg,
  bannerProfilePic,
  divRef
}) {
  const {
    0: deleteIcon,
    1: showDeleteIcon
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const ifYouSender = message.sender === user._id;
  return __jsx("div", {
    className: "bubbleWrapper",
    ref: divRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: ifYouSender ? "inlineContainer own" : "inlineContainer",
    onClick: () => ifYouSender && showDeleteIcon(!deleteIcon),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "inlineIcon",
    src: ifYouSender ? user.profilePicUrl : bannerProfilePic,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Popup"], {
    pinned: true,
    content: Object(_utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__["default"])(message.date),
    on: "click",
    trigger: __jsx("div", {
      className: ifYouSender ? "ownBubble own" : "otherBubble other",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, message.msg),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), deleteIcon && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Popup"], {
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "trash",
      color: "red",
      style: {
        cursor: "pointer",
        marginTop: "15px"
      },
      onClick: () => deleteMsg(message._id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 15
      }
    }),
    content: "X\xF3a tin nh\u1EAFn kh\u1ECFi h\u1ED9p th\u01B0 \u0111\u1EBFn!",
    position: "top right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Message);

/***/ }),

/***/ "./components/Messages/MessageInputField.js":
/*!**************************************************!*\
  !*** ./components/Messages/MessageInputField.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\components\\Messages\\MessageInputField.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function MessageInputField({
  sendMsg
}) {
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx("div", {
    style: {
      position: "sticky",
      bottom: "0"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    secondary: true,
    color: "teal",
    attached: "bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    reply: true,
    onSubmit: e => {
      e.preventDefault();
      sendMsg(text);
      setText("");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    size: "large",
    placeholder: "G\u1EEDi tin nh\u1EAFn m\u1EDBi",
    value: text,
    onChange: e => setText(e.target.value),
    action: {
      color: "blue",
      icon: "telegram plane",
      disabled: text === "",
      loading: loading
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (MessageInputField);

/***/ }),

/***/ "./pages/messages.js":
/*!***************************!*\
  !*** ./pages/messages.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Chats_Chat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Chats/Chat */ "./components/Chats/Chat.js");
/* harmony import */ var _components_Chats_ChatListSearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Chats/ChatListSearch */ "./components/Chats/ChatListSearch.js");
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Messages_Banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Messages/Banner */ "./components/Messages/Banner.js");
/* harmony import */ var _components_Messages_MessageInputField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Messages/MessageInputField */ "./components/Messages/MessageInputField.js");
/* harmony import */ var _components_Messages_Message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Messages/Message */ "./components/Messages/Message.js");
/* harmony import */ var _utils_getUserInfo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/getUserInfo */ "./utils/getUserInfo.js");
/* harmony import */ var _utils_newMsgSound__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/newMsgSound */ "./utils/newMsgSound.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\social\\social_network\\pages\\messages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// @ts-nocheck

















const scrollDivToBottom = divRef => divRef.current !== null && divRef.current.scrollIntoView({
  behaviour: "smooth"
});

function Messages({
  chatsData,
  user
}) {
  const {
    0: chats,
    1: setChats
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(chatsData);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const socket = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: connectedUsers,
    1: setConnectedUsers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: messages,
    1: setMessages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: bannerData,
    1: setBannerData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: "",
    profilePicUrl: ""
  });
  const divRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const openChatId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(""); //connection useEffect

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!socket.current) {
      socket.current = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default.a);
    }

    if (socket.current) {
      socket.current.emit("join", {
        userId: user._id
      });
      socket.current.on("connectedUsers", ({
        users
      }) => {
        users.length > 0 && setConnectedUsers(users);
      });

      if (chats.length > 0 && !router.query.message) {
        router.push(`/messages?message=${chats[0].messagesWith}`, undefined, {
          shallow: true
        });
      }
    }

    return () => {
      if (socket.current) {
        socket.current.emit("disconnect");
        socket.current.off();
      }
    };
  }, []); //load message useEffect

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const loadMessages = () => {
      socket.current.emit("loadMessages", {
        userId: user._id,
        messagesWith: router.query.message
      });
      socket.current.on("messagesLoaded", async ({
        chat
      }) => {
        setMessages(chat.messages);
        setBannerData({
          name: chat.messagesWith.name,
          profilePicUrl: chat.messagesWith.profilePicUrl
        });
        openChatId.current = chat.messagesWith._id;
        divRef.current && scrollDivToBottom(divRef);
      });
      socket.current.on("noChatFound", async () => {
        const {
          name,
          profilePicUrl
        } = await Object(_utils_getUserInfo__WEBPACK_IMPORTED_MODULE_13__["default"])(router.query.message);
        setBannerData({
          name,
          profilePicUrl
        });
        setMessages([]);
        openChatId.current = router.query.message;
      });
    };

    if (socket.current && router.query.message) loadMessages();
  }, [router.query.message]);

  const sendMsg = msg => {
    if (socket.current) {
      socket.current.emit("sendNewMsg", {
        userId: user._id,
        msgSendToUserId: openChatId.current,
        msg
      });
    }
  }; // Confirming msg is sent and receving the messages useEffect


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (socket.current) {
      socket.current.on("msgSent", ({
        newMsg
      }) => {
        if (newMsg.receiver === openChatId.current) {
          setMessages(prev => [...prev, newMsg]);
          setChats(prev => {
            const previousChat = prev.find(chat => chat.messagesWith === newMsg.receiver);
            previousChat.lastMessage = newMsg.msg;
            previousChat.date = newMsg.date;
            return [...prev];
          });
        }
      });
      socket.current.on("newMsgReceived", async ({
        newMsg
      }) => {
        let senderName;

        if (newMsg.sender === openChatId.current) {
          setMessages(prev => [...prev, newMsg]);
          setChats(prev => {
            const previousChat = prev.find(chat => chat.messagesWith === newMsg.sender);
            previousChat.lastMessage = newMsg.msg;
            previousChat.date = newMsg.date;
            senderName = previousChat.name;
            return [...prev];
          });
        } else {
          const ifPreviouslyMessaged = chats.filter(chat => chat.messagesWith === newMsg.sender).length > 0;

          if (ifPreviouslyMessaged) {
            setChats(prev => {
              const previousChat = prev.find(chat => chat.messagesWith === newMsg.sender);
              previousChat.lastMessage = newMsg.msg;
              previousChat.date = newMsg.date;
              senderName = previousChat.name;
              return [previousChat, ...prev.filter(chat => chat.messagesWith !== newMsg.sender)];
            });
          } else {
            const {
              name,
              profilePicUrl
            } = await Object(_utils_getUserInfo__WEBPACK_IMPORTED_MODULE_13__["default"])(newMsg.sender);
            senderName = name;
            const newChat = {
              messagesWith: newMsg.sender,
              name,
              profilePicUrl,
              lastMessage: newMsg.msg,
              date: newMsg.date
            };
            setChats(prev => [newChat, ...prev]);
          }
        }

        Object(_utils_newMsgSound__WEBPACK_IMPORTED_MODULE_14__["default"])(senderName);
      });
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    messages.length > 0 && scrollDivToBottom(divRef);
  }, [messages]);

  const deleteMsg = messageId => {
    if (socket.current) {
      socket.current.emit("deleteMsg", {
        userId: user._id,
        messagesWith: openChatId.current,
        messageId
      });
      socket.current.on("msgDeleted", () => {
        setMessages(prev => prev.filter(message => message._id !== messageId));
      });
    }
  };

  const deleteChat = async messagesWith => {
    try {
      await axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default.a}/api/chats/${messagesWith}`, {
        headers: {
          Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_15___default.a.get("token")
        }
      });
      setChats(prev => prev.filter(chat => chat.messagesWith !== messagesWith));
      router.push("/messages", undefined, {
        shallow: true
      });
    } catch (error) {
      alert("Error deleting chat");
    }
  };

  return __jsx("div", {
    style: {
      minHeight: "100vh"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Segment"], {
    padded: true,
    basic: true,
    size: "big",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 7
    }
  }, chats.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    stackable: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    width: 11,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 15
    }
  }, router.query.message && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Segment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 19
    }
  }, __jsx("div", {
    style: {
      overflow: "auto",
      overflowX: "hidden",
      maxHeight: "45rem",
      height: "45rem",
      backgroundColor: "whitesmoke"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      position: "sticky",
      top: "0"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 23
    }
  }, __jsx(_components_Messages_Banner__WEBPACK_IMPORTED_MODULE_10__["default"], {
    bannerData: bannerData,
    connectedUsers: connectedUsers,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 25
    }
  })), messages.length > 0 && messages.map((message, i) => __jsx(_components_Messages_Message__WEBPACK_IMPORTED_MODULE_12__["default"], {
    divRef: divRef,
    key: i,
    bannerProfilePic: bannerData.profilePicUrl,
    message: message,
    user: user,
    deleteMsg: deleteMsg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 27
    }
  }))), __jsx(_components_Messages_MessageInputField__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sendMsg: sendMsg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 21
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    width: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Comment"].Group, {
    size: "big",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Segment"], {
    raised: true,
    style: {
      overflow: "auto",
      maxHeight: "32rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 19
    }
  }, __jsx("div", {
    style: {
      marginBottom: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 21
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 23
    }
  }, "Chat"), __jsx(_components_Chats_ChatListSearch__WEBPACK_IMPORTED_MODULE_8__["default"], {
    chats: chats,
    setChats: setChats,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 23
    }
  })), chats.map((chat, i) => __jsx(_components_Chats_Chat__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: i,
    chat: chat,
    connectedUsers: connectedUsers,
    deleteChat: deleteChat,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 23
    }
  }))))))) : __jsx(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_9__["NoMessages"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 11
    }
  })));
}

Messages.getInitialProps = async ctx => {
  try {
    const {
      token
    } = Object(nookies__WEBPACK_IMPORTED_MODULE_4__["parseCookies"])(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default.a}/api/chats`, {
      headers: {
        Authorization: token
      }
    });
    return {
      chatsData: res.data
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Messages);

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

/***/ "./utils/getUserInfo.js":
/*!******************************!*\
  !*** ./utils/getUserInfo.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baseUrl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);




const getUserInfo = async userToFindId => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1___default.a}/api/chats/user/${userToFindId}`, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("token")
      }
    });
    return {
      name: res.data.name,
      profilePicUrl: res.data.profilePicUrl
    };
  } catch (error) {
    console.error(error);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getUserInfo);

/***/ }),

/***/ "./utils/newMsgSound.js":
/*!******************************!*\
  !*** ./utils/newMsgSound.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const newMsgSound = senderName => {
  const sound = new Audio("/light.mp3");
  sound && sound.play();

  if (senderName) {
    document.title = `New message from ${senderName}`;

    if (document.visibilityState === "visible") {
      setTimeout(() => {
        document.title = "Messages";
      }, 5000);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (newMsgSound);

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

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-moment");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0cy9DaGF0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhdHMvQ2hhdExpc3RTZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvTm9EYXRhLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVzc2FnZXMvQmFubmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVzc2FnZXMvTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lc3NhZ2VzL01lc3NhZ2VJbnB1dEZpZWxkLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL21lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Jhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY2FsY3VsYXRlVGltZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRVc2VySW5mby5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9uZXdNc2dTb3VuZC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW8tY2xpZW50XCIiXSwibmFtZXMiOlsiQ2hhdCIsImNoYXQiLCJjb25uZWN0ZWRVc2VycyIsImRlbGV0ZUNoYXQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc09ubGluZSIsImxlbmd0aCIsImZpbHRlciIsInVzZXIiLCJ1c2VySWQiLCJtZXNzYWdlc1dpdGgiLCJxdWVyeSIsIm1lc3NhZ2UiLCJwdXNoIiwidW5kZWZpbmVkIiwic2hhbGxvdyIsInByb2ZpbGVQaWNVcmwiLCJuYW1lIiwiY2FsY3VsYXRlVGltZSIsImRhdGUiLCJwb3NpdGlvbiIsInJpZ2h0IiwiY3Vyc29yIiwibGFzdE1lc3NhZ2UiLCJzdWJzdHJpbmciLCJjYW5jZWwiLCJDaGF0TGlzdFNlYXJjaCIsImNoYXRzIiwic2V0Q2hhdHMiLCJ0ZXh0Iiwic2V0VGV4dCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsIkNhbmNlbFRva2VuIiwiYXhpb3MiLCJ0b2tlbiIsImNvb2tpZSIsImdldCIsInJlcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNhbmNlbFRva2VuIiwiY2FuY2VsZXIiLCJkYXRhIiwiZXJyb3IiLCJhbGVydCIsImFkZENoYXQiLCJyZXN1bHQiLCJhbHJlYWR5SW5DaGF0IiwibWVzc3NhZ2VzV2l0aCIsIl9pZCIsIm5ld0NoYXQiLCJEYXRlIiwibm93IiwicHJldiIsIlJlc3VsdFJlbmRlcmVyIiwiTm9Qcm9maWxlUG9zdHMiLCJOb0ZvbGxvd0RhdGEiLCJmb2xsb3dlcnNDb21wb25lbnQiLCJmb2xsb3dpbmdDb21wb25lbnQiLCJOb01lc3NhZ2VzIiwiTm9Qb3N0cyIsIk5vUHJvZmlsZSIsIk5vTm90aWZpY2F0aW9ucyIsIk5vUG9zdEZvdW5kIiwiQmFubmVyIiwiYmFubmVyRGF0YSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIk1lc3NhZ2UiLCJkZWxldGVNc2ciLCJiYW5uZXJQcm9maWxlUGljIiwiZGl2UmVmIiwiZGVsZXRlSWNvbiIsInNob3dEZWxldGVJY29uIiwiaWZZb3VTZW5kZXIiLCJzZW5kZXIiLCJtc2ciLCJtYXJnaW5Ub3AiLCJNZXNzYWdlSW5wdXRGaWVsZCIsInNlbmRNc2ciLCJib3R0b20iLCJwcmV2ZW50RGVmYXVsdCIsImNvbG9yIiwiaWNvbiIsImRpc2FibGVkIiwic2Nyb2xsRGl2VG9Cb3R0b20iLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvdXIiLCJNZXNzYWdlcyIsImNoYXRzRGF0YSIsInNvY2tldCIsInVzZVJlZiIsInNldENvbm5lY3RlZFVzZXJzIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInNldEJhbm5lckRhdGEiLCJvcGVuQ2hhdElkIiwidXNlRWZmZWN0IiwiaW8iLCJlbWl0Iiwib24iLCJ1c2VycyIsIm9mZiIsImxvYWRNZXNzYWdlcyIsImdldFVzZXJJbmZvIiwibXNnU2VuZFRvVXNlcklkIiwibmV3TXNnIiwicmVjZWl2ZXIiLCJwcmV2aW91c0NoYXQiLCJmaW5kIiwic2VuZGVyTmFtZSIsImlmUHJldmlvdXNseU1lc3NhZ2VkIiwibmV3TXNnU291bmQiLCJtZXNzYWdlSWQiLCJkZWxldGUiLCJtaW5IZWlnaHQiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsIm1heEhlaWdodCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInRvcCIsIm1hcCIsImkiLCJtYXJnaW5Cb3R0b20iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJwYXJzZUNvb2tpZXMiLCJlcnJvckxvYWRpbmciLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlZEF0IiwidG9kYXkiLCJtb21lbnQiLCJwb3N0RGF0ZSIsImRpZmZJbkhvdXJzIiwiZGlmZiIsInVzZXJUb0ZpbmRJZCIsImNvbnNvbGUiLCJzb3VuZCIsIkF1ZGlvIiwicGxheSIsImRvY3VtZW50IiwidGl0bGUiLCJ2aXNpYmlsaXR5U3RhdGUiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUNGLENBVkQ7O0FBWWU4RCwwRUFBZixFOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQSxNQUFNUSxXQUFXLEdBQUdGLFVBQVUsSUFBSTtBQUNoQyxRQUFNNkIsS0FBSyxHQUFHLElBQUlDLEtBQUosQ0FBVSxZQUFWLENBQWQ7QUFFQUQsT0FBSyxJQUFJQSxLQUFLLENBQUNFLElBQU4sRUFBVDs7QUFFQSxNQUFJL0IsVUFBSixFQUFnQjtBQUNkZ0MsWUFBUSxDQUFDQyxLQUFULEdBQWtCLG9CQUFtQmpDLFVBQVcsRUFBaEQ7O0FBRUEsUUFBSWdDLFFBQVEsQ0FBQ0UsZUFBVCxLQUE2QixTQUFqQyxFQUE0QztBQUMxQ0MsZ0JBQVUsQ0FBQyxNQUFNO0FBQ2ZILGdCQUFRLENBQUNDLEtBQVQsR0FBaUIsVUFBakI7QUFDRCxPQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7QUFDRjtBQUNGLENBZEQ7O0FBZ0JlL0IsMEVBQWYsRTs7Ozs7Ozs7Ozs7QUNoQkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvbWVzc2FnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL21lc3NhZ2VzLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRGl2aWRlciwgQ29tbWVudCwgSWNvbiwgTGlzdCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZVwiO1xuXG5mdW5jdGlvbiBDaGF0KHsgY2hhdCwgY29ubmVjdGVkVXNlcnMsIGRlbGV0ZUNoYXQgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBpc09ubGluZSA9XG4gICAgY29ubmVjdGVkVXNlcnMubGVuZ3RoID4gMCAmJlxuICAgIGNvbm5lY3RlZFVzZXJzLmZpbHRlcigodXNlcikgPT4gdXNlci51c2VySWQgPT09IGNoYXQubWVzc2FnZXNXaXRoKS5sZW5ndGggPlxuICAgICAgMDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGlzdCBzZWxlY3Rpb24+XG4gICAgICAgIDxMaXN0Lkl0ZW1cbiAgICAgICAgICBhY3RpdmU9e3JvdXRlci5xdWVyeS5tZXNzYWdlID09PSBjaGF0Lm1lc3NhZ2VzV2l0aH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgcm91dGVyLnB1c2goYC9tZXNzYWdlcz9tZXNzYWdlPSR7Y2hhdC5tZXNzYWdlc1dpdGh9YCwgdW5kZWZpbmVkLCB7XG4gICAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxDb21tZW50PlxuICAgICAgICAgICAgPENvbW1lbnQuQXZhdGFyIHNyYz17Y2hhdC5wcm9maWxlUGljVXJsfSAvPlxuICAgICAgICAgICAgPENvbW1lbnQuQ29udGVudD5cbiAgICAgICAgICAgICAgPENvbW1lbnQuQXV0aG9yIGFzPVwiYVwiPlxuICAgICAgICAgICAgICAgIHtjaGF0Lm5hbWV9e1wiIFwifVxuICAgICAgICAgICAgICAgIHtpc09ubGluZSAmJiA8SWNvbiBuYW1lPVwiY2lyY2xlXCIgc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJncmVlblwiIC8+fVxuICAgICAgICAgICAgICA8L0NvbW1lbnQuQXV0aG9yPlxuXG4gICAgICAgICAgICAgIDxDb21tZW50Lk1ldGFkYXRhPlxuICAgICAgICAgICAgICAgIDxkaXY+e2NhbGN1bGF0ZVRpbWUoY2hhdC5kYXRlKX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0cmFzaCBhbHRlcm5hdGVcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUNoYXQoY2hhdC5tZXNzYWdlc1dpdGgpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Db21tZW50Lk1ldGFkYXRhPlxuXG4gICAgICAgICAgICAgIDxDb21tZW50LlRleHQ+XG4gICAgICAgICAgICAgICAge2NoYXQubGFzdE1lc3NhZ2UubGVuZ3RoID4gMjBcbiAgICAgICAgICAgICAgICAgID8gYCR7Y2hhdC5sYXN0TWVzc2FnZS5zdWJzdHJpbmcoMCwgMjApfSAuLi5gXG4gICAgICAgICAgICAgICAgICA6IGNoYXQubGFzdE1lc3NhZ2V9XG4gICAgICAgICAgICAgIDwvQ29tbWVudC5UZXh0PlxuICAgICAgICAgICAgPC9Db21tZW50LkNvbnRlbnQ+XG4gICAgICAgICAgPC9Db21tZW50PlxuICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgIDwvTGlzdD5cbiAgICAgIDxEaXZpZGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXQ7XG4iLCIvLyBAdHMtbm9jaGVja1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaXN0LCBJbWFnZSwgU2VhcmNoIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uLy4uL3V0aWxzL2Jhc2VVcmxcIjtcbmxldCBjYW5jZWw7XG5cbmZ1bmN0aW9uIENoYXRMaXN0U2VhcmNoKHsgY2hhdHMsIHNldENoYXRzIH0pIHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBhc3luYyBlID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRUZXh0KHZhbHVlKTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNhbmNlbCAmJiBjYW5jZWwoKTtcbiAgICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW47XG4gICAgICBjb25zdCB0b2tlbiA9IGNvb2tpZS5nZXQoXCJ0b2tlblwiKTtcblxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9zZWFyY2gvJHt2YWx1ZX1gLCB7XG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogdG9rZW4gfSxcbiAgICAgICAgY2FuY2VsVG9rZW46IG5ldyBDYW5jZWxUb2tlbihjYW5jZWxlciA9PiB7XG4gICAgICAgICAgY2FuY2VsID0gY2FuY2VsZXI7XG4gICAgICAgIH0pXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHNldExvYWRpbmcoZmFsc2UpO1xuXG4gICAgICBzZXRSZXN1bHRzKHJlcy5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYWxlcnQoXCJFcnJvciBTZWFyY2hpbmdcIik7XG4gICAgfVxuXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgYWRkQ2hhdCA9IHJlc3VsdCA9PiB7XG4gICAgY29uc3QgYWxyZWFkeUluQ2hhdCA9XG4gICAgICBjaGF0cy5sZW5ndGggPiAwICYmXG4gICAgICBjaGF0cy5maWx0ZXIoY2hhdCA9PiBjaGF0Lm1lc3NzYWdlc1dpdGggPT09IHJlc3VsdC5faWQpLmxlbmd0aCA+IDA7XG5cbiAgICBpZiAoYWxyZWFkeUluQ2hhdCkge1xuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKGAvbWVzc2FnZXM/bWVzc2FnZT0ke3Jlc3VsdC5faWR9YCk7XG4gICAgfVxuICAgIC8vXG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBuZXdDaGF0ID0ge1xuICAgICAgICBtZXNzYWdlc1dpdGg6IHJlc3VsdC5faWQsXG4gICAgICAgIG5hbWU6IHJlc3VsdC5uYW1lLFxuICAgICAgICBwcm9maWxlUGljVXJsOiByZXN1bHQucHJvZmlsZVBpY1VybCxcbiAgICAgICAgbGFzdE1lc3NhZ2U6IFwiXCIsXG4gICAgICAgIGRhdGU6IERhdGUubm93KClcbiAgICAgIH07XG5cbiAgICAgIHNldENoYXRzKHByZXYgPT4gW25ld0NoYXQsIC4uLnByZXZdKTtcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKGAvbWVzc2FnZXM/bWVzc2FnZT0ke3Jlc3VsdC5faWR9YCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFNlYXJjaFxuICAgICAgb25CbHVyPXsoKSA9PiB7XG4gICAgICAgIHJlc3VsdHMubGVuZ3RoID4gMCAmJiBzZXRSZXN1bHRzKFtdKTtcbiAgICAgICAgbG9hZGluZyAmJiBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0VGV4dChcIlwiKTtcbiAgICAgIH19XG4gICAgICBzaXplPVwic21hbGxcIlxuICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgcmVzdWx0UmVuZGVyZXI9e1Jlc3VsdFJlbmRlcmVyfVxuICAgICAgcmVzdWx0cz17cmVzdWx0c31cbiAgICAgIG9uU2VhcmNoQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICBtaW5DaGFyYWN0ZXJzPXsxfVxuICAgICAgb25SZXN1bHRTZWxlY3Q9eyhlLCBkYXRhKSA9PiBhZGRDaGF0KGRhdGEucmVzdWx0KX1cbiAgICAvPlxuICApO1xufVxuXG5jb25zdCBSZXN1bHRSZW5kZXJlciA9ICh7IF9pZCwgcHJvZmlsZVBpY1VybCwgbmFtZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpc3Qga2V5PXtfaWR9PlxuICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgPEltYWdlIHNyYz17cHJvZmlsZVBpY1VybH0gYWx0PVwiUHJvZmlsZVBpY1wiIGF2YXRhciAvPlxuICAgICAgICA8TGlzdC5Db250ZW50IGhlYWRlcj17bmFtZX0gYXM9XCJhXCIgLz5cbiAgICAgIDwvTGlzdC5JdGVtPlxuICAgIDwvTGlzdD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRMaXN0U2VhcmNoO1xuIiwiaW1wb3J0IHsgTWVzc2FnZSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBOb1Byb2ZpbGVQb3N0cyA9ICgpID0+IChcbiAgPD5cbiAgICA8TWVzc2FnZVxuICAgICAgaW5mb1xuICAgICAgaWNvbj1cIm1laFwiXG4gICAgICBoZWFkZXI9XCJTb3JyeVwiXG4gICAgICBjb250ZW50PVwiVXNlciBoYXMgbm90IHBvc3RlZCBhbnl0aGluZyB5ZXQhXCJcbiAgICAvPlxuICAgIDxCdXR0b25cbiAgICAgIGljb249XCJsb25nIGFycm93IGFsdGVybmF0ZSBsZWZ0XCJcbiAgICAgIGNvbnRlbnQ9XCJHbyBCYWNrXCJcbiAgICAgIGFzPVwiYVwiXG4gICAgICBocmVmPVwiL1wiXG4gICAgLz5cbiAgPC8+XG4pO1xuXG5leHBvcnQgY29uc3QgTm9Gb2xsb3dEYXRhID0gKHsgZm9sbG93ZXJzQ29tcG9uZW50LCBmb2xsb3dpbmdDb21wb25lbnQgfSkgPT4gKFxuICA8PlxuICAgIHtmb2xsb3dlcnNDb21wb25lbnQgJiYgKFxuICAgICAgPE1lc3NhZ2VcbiAgICAgICAgaWNvbj1cInVzZXIgb3V0bGluZVwiXG4gICAgICAgIGluZm9cbiAgICAgICAgY29udGVudD17YFVzZXIgZG9lcyBub3QgaGF2ZSBmb2xsb3dlcnNgfVxuICAgICAgLz5cbiAgICApfVxuXG4gICAge2ZvbGxvd2luZ0NvbXBvbmVudCAmJiAoXG4gICAgICA8TWVzc2FnZVxuICAgICAgICBpY29uPVwidXNlciBvdXRsaW5lXCJcbiAgICAgICAgaW5mb1xuICAgICAgICBjb250ZW50PXtgVXNlciBkb2VzIG5vdCBmb2xsb3cgYW55IHVzZXJzYH1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC8+XG4pO1xuXG5leHBvcnQgY29uc3QgTm9NZXNzYWdlcyA9ICgpID0+IChcbiAgPE1lc3NhZ2VcbiAgICBpbmZvXG4gICAgaWNvbj1cInRlbGVncmFtIHBsYW5lXCJcbiAgICBoZWFkZXI9XCJTb3JyeVwiXG4gICAgY29udGVudD1cIllvdSBoYXZlIG5vdCBtZXNzYWdlZCBhbnlvbmUgeWV0LlNlYXJjaCBhYm92ZSB0byBtZXNzYWdlIHNvbWVvbmUhXCJcbiAgLz5cbik7XG5cbmV4cG9ydCBjb25zdCBOb1Bvc3RzID0gKCkgPT4gKFxuICA8TWVzc2FnZVxuICAgIGluZm9cbiAgICBpY29uPVwibWVoXCJcbiAgICBoZWFkZXI9XCJIZXkhXCJcbiAgICBjb250ZW50PVwiTm8gUG9zdHMuIE1ha2Ugc3VyZSB5b3UgaGF2ZSBmb2xsb3dlZCBzb21lb25lLlwiXG4gIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgTm9Qcm9maWxlID0gKCkgPT4gKFxuICA8TWVzc2FnZSBpbmZvIGljb249XCJtZWhcIiBoZWFkZXI9XCJIZXkhXCIgY29udGVudD1cIk5vIFByb2ZpbGUgRm91bmQuXCIgLz5cbik7XG5cbmV4cG9ydCBjb25zdCBOb05vdGlmaWNhdGlvbnMgPSAoKSA9PiAoXG4gIDxNZXNzYWdlIGNvbnRlbnQ9XCJObyBOb3RpZmljYXRpb25zXCIgaWNvbj1cInNtaWxlXCIgaW5mbyAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IE5vUG9zdEZvdW5kID0gKCkgPT4gKFxuICA8TWVzc2FnZSBpbmZvIGljb249XCJtZWhcIiBoZWFkZXI9XCJIZXkhXCIgY29udGVudD1cIk5vIFBvc3QgRm91bmQuXCIgLz5cbik7XG4iLCIvLyBAdHMtbm9jaGVja1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2VnbWVudCwgR3JpZCwgSW1hZ2UsIEljb24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcblxuZnVuY3Rpb24gQmFubmVyKHsgYmFubmVyRGF0YSwgY29ubmVjdGVkVXNlcnMgfSkge1xuICBjb25zdCB7IG5hbWUsIHByb2ZpbGVQaWNVcmwgfSA9IGJhbm5lckRhdGE7XG4gIGNvbnN0IGlzT25saW5lID1cbiAgICBjb25uZWN0ZWRVc2Vycy5sZW5ndGggPiAwICYmXG4gICAgY29ubmVjdGVkVXNlcnMuZmlsdGVyKCh1c2VyKSA9PiB1c2VyLnVzZXJJZCA9PT0gY2hhdC5tZXNzYWdlc1dpdGgpLmxlbmd0aCA+XG4gICAgICAwO1xuXG4gIHJldHVybiAoXG4gICAgPFNlZ21lbnQgY29sb3I9XCJ0ZWFsXCIgYXR0YWNoZWQ9XCJ0b3BcIj5cbiAgICAgIDxHcmlkPlxuICAgICAgICA8R3JpZC5Db2x1bW4gZmxvYXRlZD1cImxlZnRcIiB3aWR0aD17MTN9PlxuICAgICAgICAgIDxoND5cbiAgICAgICAgICAgIDxJbWFnZSBhdmF0YXIgc3JjPXtwcm9maWxlUGljVXJsfSAvPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9oND5cbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9XCJyaWdodFwiIHdpZHRoPXszfT5cbiAgICAgICAgICA8R3JpZC5Sb3cgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyNXB4XCIgfX0+XG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwiY2FsbFwiIGNvbG9yPVwiYmx1ZVwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjIwcHhcIiB9fSAvPlxuICAgICAgICAgICAgPEljb24gbmFtZT1cInZpZGVvXCIgY29sb3I9XCJibHVlXCIgLz57XCIgXCJ9XG4gICAgICAgICAgICB7aXNPbmxpbmUgJiYgPEljb24gbmFtZT1cImNpcmNsZVwiIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZ3JlZW5cIiAvPn1cbiAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgPC9HcmlkPlxuICAgIDwvU2VnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJY29uLCBQb3B1cCwgSW1hZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XG5cbmZ1bmN0aW9uIE1lc3NhZ2UoeyBtZXNzYWdlLCB1c2VyLCBkZWxldGVNc2csIGJhbm5lclByb2ZpbGVQaWMsIGRpdlJlZiB9KSB7XG4gIGNvbnN0IFtkZWxldGVJY29uLCBzaG93RGVsZXRlSWNvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaWZZb3VTZW5kZXIgPSBtZXNzYWdlLnNlbmRlciA9PT0gdXNlci5faWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1YmJsZVdyYXBwZXJcIiByZWY9e2RpdlJlZn0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17aWZZb3VTZW5kZXIgPyBcImlubGluZUNvbnRhaW5lciBvd25cIiA6IFwiaW5saW5lQ29udGFpbmVyXCJ9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGlmWW91U2VuZGVyICYmIHNob3dEZWxldGVJY29uKCFkZWxldGVJY29uKX1cbiAgICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZUljb25cIlxuICAgICAgICAgIHNyYz17aWZZb3VTZW5kZXIgPyB1c2VyLnByb2ZpbGVQaWNVcmwgOiBiYW5uZXJQcm9maWxlUGljfVxuICAgICAgICAvPlxuICAgICAgICA8UG9wdXBcbiAgICAgICAgICBwaW5uZWRcbiAgICAgICAgICBjb250ZW50PXtjYWxjdWxhdGVUaW1lKG1lc3NhZ2UuZGF0ZSl9XG4gICAgICAgICAgb249XCJjbGlja1wiXG4gICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17aWZZb3VTZW5kZXIgPyBcIm93bkJ1YmJsZSBvd25cIiA6IFwib3RoZXJCdWJibGUgb3RoZXJcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge21lc3NhZ2UubXNnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICB7ZGVsZXRlSWNvbiAmJiAoXG4gICAgICAgICAgPFBvcHVwXG4gICAgICAgICAgICB0cmlnZ2VyPXtcbiAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICBuYW1lPVwidHJhc2hcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTVweFwiIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlTXNnKG1lc3NhZ2UuX2lkKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRlbnQ9XCJYw7NhIHRpbiBuaOG6r24ga2jhu49pIGjhu5lwIHRoxrAgxJHhur9uIVwiXG4gICAgICAgICAgICBwb3NpdGlvbj1cInRvcCByaWdodFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpZllvdVNlbmRlciA/IFwib3duXCIgOiBcIm90aGVyXCJ9PlxuICAgICAgICB7Y2FsY3VsYXRlVGltZShtZXNzYWdlLmRhdGUpfVxuICAgICAgPC9zcGFuPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgU2VnbWVudCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG5mdW5jdGlvbiBNZXNzYWdlSW5wdXRGaWVsZCh7IHNlbmRNc2cgfSkge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJzdGlja3lcIiwgYm90dG9tOiBcIjBcIiB9fT5cbiAgICAgIDxTZWdtZW50IHNlY29uZGFyeSBjb2xvcj1cInRlYWxcIiBhdHRhY2hlZD1cImJvdHRvbVwiPlxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIHJlcGx5XG4gICAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZW5kTXNnKHRleHQpO1xuICAgICAgICAgICAgc2V0VGV4dChcIlwiKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkfhu61pIHRpbiBuaOG6r24gbeG7m2lcIlxuICAgICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgYWN0aW9uPXt7XG4gICAgICAgICAgICAgIGNvbG9yOiBcImJsdWVcIixcbiAgICAgICAgICAgICAgaWNvbjogXCJ0ZWxlZ3JhbSBwbGFuZVwiLFxuICAgICAgICAgICAgICBkaXNhYmxlZDogdGV4dCA9PT0gXCJcIixcbiAgICAgICAgICAgICAgbG9hZGluZzogbG9hZGluZyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9TZWdtZW50PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlSW5wdXRGaWVsZDtcbiIsIi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi91dGlscy9iYXNlVXJsXCI7XG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBTZWdtZW50LCBIZWFkZXIsIERpdmlkZXIsIENvbW1lbnQsIEdyaWQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBDaGF0IGZyb20gXCIuLi9jb21wb25lbnRzL0NoYXRzL0NoYXRcIjtcbmltcG9ydCBDaGF0TGlzdFNlYXJjaCBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGF0cy9DaGF0TGlzdFNlYXJjaFwiO1xuaW1wb3J0IHsgTm9NZXNzYWdlcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGFcIjtcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWVzc2FnZXMvQmFubmVyXCI7XG5pbXBvcnQgTWVzc2FnZUlucHV0RmllbGQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWVzc2FnZXMvTWVzc2FnZUlucHV0RmllbGRcIjtcbmltcG9ydCBNZXNzYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL01lc3NhZ2VzL01lc3NhZ2VcIjtcbmltcG9ydCBnZXRVc2VySW5mbyBmcm9tIFwiLi4vdXRpbHMvZ2V0VXNlckluZm9cIjtcbmltcG9ydCBuZXdNc2dTb3VuZCBmcm9tIFwiLi4vdXRpbHMvbmV3TXNnU291bmRcIjtcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xuXG5jb25zdCBzY3JvbGxEaXZUb0JvdHRvbSA9IChkaXZSZWYpID0+XG4gIGRpdlJlZi5jdXJyZW50ICE9PSBudWxsICYmXG4gIGRpdlJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3VyOiBcInNtb290aFwiIH0pO1xuXG5mdW5jdGlvbiBNZXNzYWdlcyh7IGNoYXRzRGF0YSwgdXNlciB9KSB7XG4gIGNvbnN0IFtjaGF0cywgc2V0Q2hhdHNdID0gdXNlU3RhdGUoY2hhdHNEYXRhKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgc29ja2V0ID0gdXNlUmVmKCk7XG4gIGNvbnN0IFtjb25uZWN0ZWRVc2Vycywgc2V0Q29ubmVjdGVkVXNlcnNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYmFubmVyRGF0YSwgc2V0QmFubmVyRGF0YV0gPSB1c2VTdGF0ZSh7IG5hbWU6IFwiXCIsIHByb2ZpbGVQaWNVcmw6IFwiXCIgfSk7XG5cbiAgY29uc3QgZGl2UmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3Qgb3BlbkNoYXRJZCA9IHVzZVJlZihcIlwiKTtcblxuICAvL2Nvbm5lY3Rpb24gdXNlRWZmZWN0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzb2NrZXQuY3VycmVudCkge1xuICAgICAgc29ja2V0LmN1cnJlbnQgPSBpbyhiYXNlVXJsKTtcbiAgICB9XG5cbiAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcbiAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJqb2luXCIsIHsgdXNlcklkOiB1c2VyLl9pZCB9KTtcblxuICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJjb25uZWN0ZWRVc2Vyc1wiLCAoeyB1c2VycyB9KSA9PiB7XG4gICAgICAgIHVzZXJzLmxlbmd0aCA+IDAgJiYgc2V0Q29ubmVjdGVkVXNlcnModXNlcnMpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChjaGF0cy5sZW5ndGggPiAwICYmICFyb3V0ZXIucXVlcnkubWVzc2FnZSkge1xuICAgICAgICByb3V0ZXIucHVzaChgL21lc3NhZ2VzP21lc3NhZ2U9JHtjaGF0c1swXS5tZXNzYWdlc1dpdGh9YCwgdW5kZWZpbmVkLCB7XG4gICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChzb2NrZXQuY3VycmVudCkge1xuICAgICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwiZGlzY29ubmVjdFwiKTtcbiAgICAgICAgc29ja2V0LmN1cnJlbnQub2ZmKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIC8vbG9hZCBtZXNzYWdlIHVzZUVmZmVjdFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRNZXNzYWdlcyA9ICgpID0+IHtcbiAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJsb2FkTWVzc2FnZXNcIiwge1xuICAgICAgICB1c2VySWQ6IHVzZXIuX2lkLFxuICAgICAgICBtZXNzYWdlc1dpdGg6IHJvdXRlci5xdWVyeS5tZXNzYWdlLFxuICAgICAgfSk7XG5cbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwibWVzc2FnZXNMb2FkZWRcIiwgYXN5bmMgKHsgY2hhdCB9KSA9PiB7XG4gICAgICAgIHNldE1lc3NhZ2VzKGNoYXQubWVzc2FnZXMpO1xuICAgICAgICBzZXRCYW5uZXJEYXRhKHtcbiAgICAgICAgICBuYW1lOiBjaGF0Lm1lc3NhZ2VzV2l0aC5uYW1lLFxuICAgICAgICAgIHByb2ZpbGVQaWNVcmw6IGNoYXQubWVzc2FnZXNXaXRoLnByb2ZpbGVQaWNVcmwsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9wZW5DaGF0SWQuY3VycmVudCA9IGNoYXQubWVzc2FnZXNXaXRoLl9pZDtcbiAgICAgICAgZGl2UmVmLmN1cnJlbnQgJiYgc2Nyb2xsRGl2VG9Cb3R0b20oZGl2UmVmKTtcbiAgICAgIH0pO1xuXG4gICAgICBzb2NrZXQuY3VycmVudC5vbihcIm5vQ2hhdEZvdW5kXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCBwcm9maWxlUGljVXJsIH0gPSBhd2FpdCBnZXRVc2VySW5mbyhyb3V0ZXIucXVlcnkubWVzc2FnZSk7XG5cbiAgICAgICAgc2V0QmFubmVyRGF0YSh7IG5hbWUsIHByb2ZpbGVQaWNVcmwgfSk7XG4gICAgICAgIHNldE1lc3NhZ2VzKFtdKTtcblxuICAgICAgICBvcGVuQ2hhdElkLmN1cnJlbnQgPSByb3V0ZXIucXVlcnkubWVzc2FnZTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAoc29ja2V0LmN1cnJlbnQgJiYgcm91dGVyLnF1ZXJ5Lm1lc3NhZ2UpIGxvYWRNZXNzYWdlcygpO1xuICB9LCBbcm91dGVyLnF1ZXJ5Lm1lc3NhZ2VdKTtcblxuICBjb25zdCBzZW5kTXNnID0gKG1zZykgPT4ge1xuICAgIGlmIChzb2NrZXQuY3VycmVudCkge1xuICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcInNlbmROZXdNc2dcIiwge1xuICAgICAgICB1c2VySWQ6IHVzZXIuX2lkLFxuICAgICAgICBtc2dTZW5kVG9Vc2VySWQ6IG9wZW5DaGF0SWQuY3VycmVudCxcbiAgICAgICAgbXNnLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIENvbmZpcm1pbmcgbXNnIGlzIHNlbnQgYW5kIHJlY2V2aW5nIHRoZSBtZXNzYWdlcyB1c2VFZmZlY3RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwibXNnU2VudFwiLCAoeyBuZXdNc2cgfSkgPT4ge1xuICAgICAgICBpZiAobmV3TXNnLnJlY2VpdmVyID09PSBvcGVuQ2hhdElkLmN1cnJlbnQpIHtcbiAgICAgICAgICBzZXRNZXNzYWdlcygocHJldikgPT4gWy4uLnByZXYsIG5ld01zZ10pO1xuXG4gICAgICAgICAgc2V0Q2hhdHMoKHByZXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzQ2hhdCA9IHByZXYuZmluZChcbiAgICAgICAgICAgICAgKGNoYXQpID0+IGNoYXQubWVzc2FnZXNXaXRoID09PSBuZXdNc2cucmVjZWl2ZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwcmV2aW91c0NoYXQubGFzdE1lc3NhZ2UgPSBuZXdNc2cubXNnO1xuICAgICAgICAgICAgcHJldmlvdXNDaGF0LmRhdGUgPSBuZXdNc2cuZGF0ZTtcblxuICAgICAgICAgICAgcmV0dXJuIFsuLi5wcmV2XTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwibmV3TXNnUmVjZWl2ZWRcIiwgYXN5bmMgKHsgbmV3TXNnIH0pID0+IHtcbiAgICAgICAgbGV0IHNlbmRlck5hbWU7XG5cbiAgICAgICAgaWYgKG5ld01zZy5zZW5kZXIgPT09IG9wZW5DaGF0SWQuY3VycmVudCkge1xuICAgICAgICAgIHNldE1lc3NhZ2VzKChwcmV2KSA9PiBbLi4ucHJldiwgbmV3TXNnXSk7XG5cbiAgICAgICAgICBzZXRDaGF0cygocHJldikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNDaGF0ID0gcHJldi5maW5kKFxuICAgICAgICAgICAgICAoY2hhdCkgPT4gY2hhdC5tZXNzYWdlc1dpdGggPT09IG5ld01zZy5zZW5kZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwcmV2aW91c0NoYXQubGFzdE1lc3NhZ2UgPSBuZXdNc2cubXNnO1xuICAgICAgICAgICAgcHJldmlvdXNDaGF0LmRhdGUgPSBuZXdNc2cuZGF0ZTtcblxuICAgICAgICAgICAgc2VuZGVyTmFtZSA9IHByZXZpb3VzQ2hhdC5uYW1lO1xuXG4gICAgICAgICAgICByZXR1cm4gWy4uLnByZXZdO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGlmUHJldmlvdXNseU1lc3NhZ2VkID1cbiAgICAgICAgICAgIGNoYXRzLmZpbHRlcigoY2hhdCkgPT4gY2hhdC5tZXNzYWdlc1dpdGggPT09IG5ld01zZy5zZW5kZXIpLmxlbmd0aCA+XG4gICAgICAgICAgICAwO1xuXG4gICAgICAgICAgaWYgKGlmUHJldmlvdXNseU1lc3NhZ2VkKSB7XG4gICAgICAgICAgICBzZXRDaGF0cygocHJldikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c0NoYXQgPSBwcmV2LmZpbmQoXG4gICAgICAgICAgICAgICAgKGNoYXQpID0+IGNoYXQubWVzc2FnZXNXaXRoID09PSBuZXdNc2cuc2VuZGVyXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHByZXZpb3VzQ2hhdC5sYXN0TWVzc2FnZSA9IG5ld01zZy5tc2c7XG4gICAgICAgICAgICAgIHByZXZpb3VzQ2hhdC5kYXRlID0gbmV3TXNnLmRhdGU7XG5cbiAgICAgICAgICAgICAgc2VuZGVyTmFtZSA9IHByZXZpb3VzQ2hhdC5uYW1lO1xuXG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgcHJldmlvdXNDaGF0LFxuICAgICAgICAgICAgICAgIC4uLnByZXYuZmlsdGVyKChjaGF0KSA9PiBjaGF0Lm1lc3NhZ2VzV2l0aCAhPT0gbmV3TXNnLnNlbmRlciksXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB7IG5hbWUsIHByb2ZpbGVQaWNVcmwgfSA9IGF3YWl0IGdldFVzZXJJbmZvKG5ld01zZy5zZW5kZXIpO1xuICAgICAgICAgICAgc2VuZGVyTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0NoYXQgPSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzV2l0aDogbmV3TXNnLnNlbmRlcixcbiAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgcHJvZmlsZVBpY1VybCxcbiAgICAgICAgICAgICAgbGFzdE1lc3NhZ2U6IG5ld01zZy5tc2csXG4gICAgICAgICAgICAgIGRhdGU6IG5ld01zZy5kYXRlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNldENoYXRzKChwcmV2KSA9PiBbbmV3Q2hhdCwgLi4ucHJldl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG5ld01zZ1NvdW5kKHNlbmRlck5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBtZXNzYWdlcy5sZW5ndGggPiAwICYmIHNjcm9sbERpdlRvQm90dG9tKGRpdlJlZik7XG4gIH0sIFttZXNzYWdlc10pO1xuXG4gIGNvbnN0IGRlbGV0ZU1zZyA9IChtZXNzYWdlSWQpID0+IHtcbiAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcbiAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJkZWxldGVNc2dcIiwge1xuICAgICAgICB1c2VySWQ6IHVzZXIuX2lkLFxuICAgICAgICBtZXNzYWdlc1dpdGg6IG9wZW5DaGF0SWQuY3VycmVudCxcbiAgICAgICAgbWVzc2FnZUlkLFxuICAgICAgfSk7XG5cbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwibXNnRGVsZXRlZFwiLCAoKSA9PiB7XG4gICAgICAgIHNldE1lc3NhZ2VzKChwcmV2KSA9PlxuICAgICAgICAgIHByZXYuZmlsdGVyKChtZXNzYWdlKSA9PiBtZXNzYWdlLl9pZCAhPT0gbWVzc2FnZUlkKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUNoYXQgPSBhc3luYyAobWVzc2FnZXNXaXRoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtiYXNlVXJsfS9hcGkvY2hhdHMvJHttZXNzYWdlc1dpdGh9YCwge1xuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9LFxuICAgICAgfSk7XG5cbiAgICAgIHNldENoYXRzKChwcmV2KSA9PlxuICAgICAgICBwcmV2LmZpbHRlcigoY2hhdCkgPT4gY2hhdC5tZXNzYWdlc1dpdGggIT09IG1lc3NhZ2VzV2l0aClcbiAgICAgICk7XG4gICAgICByb3V0ZXIucHVzaChcIi9tZXNzYWdlc1wiLCB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYWxlcnQoXCJFcnJvciBkZWxldGluZyBjaGF0XCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttaW5IZWlnaHQ6IFwiMTAwdmhcIn19PlxuICAgICAgPFNlZ21lbnQgcGFkZGVkIGJhc2ljIHNpemU9XCJiaWdcIj5cbiAgICAgICAge2NoYXRzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxHcmlkIHN0YWNrYWJsZT5cblxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezExfT5cbiAgICAgICAgICAgICAgICB7cm91dGVyLnF1ZXJ5Lm1lc3NhZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgPFNlZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjQ1cmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDVyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZXNtb2tlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwic3RpY2t5XCIsIHRvcDogXCIwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyIGJhbm5lckRhdGE9e2Jhbm5lckRhdGF9IGNvbm5lY3RlZFVzZXJzPXtjb25uZWN0ZWRVc2Vyc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZSZWY9e2RpdlJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFubmVyUHJvZmlsZVBpYz17YmFubmVyRGF0YS5wcm9maWxlUGljVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVNc2c9e2RlbGV0ZU1zZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZUlucHV0RmllbGQgc2VuZE1zZz17c2VuZE1zZ30gLz5cbiAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezV9PlxuICAgICAgICAgICAgICAgIDxDb21tZW50Lkdyb3VwIHNpemU9XCJiaWdcIj5cbiAgICAgICAgICAgICAgICAgIDxTZWdtZW50XG4gICAgICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBvdmVyZmxvdzogXCJhdXRvXCIsIG1heEhlaWdodDogXCIzMnJlbVwiIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8aDM+Q2hhdDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPENoYXRMaXN0U2VhcmNoIGNoYXRzPXtjaGF0c30gc2V0Q2hhdHM9e3NldENoYXRzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2NoYXRzLm1hcCgoY2hhdCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxDaGF0XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGF0PXtjaGF0fVxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGVkVXNlcnM9e2Nvbm5lY3RlZFVzZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ2hhdD17ZGVsZXRlQ2hhdH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgICAgICA8L0NvbW1lbnQuR3JvdXA+XG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPE5vTWVzc2FnZXMgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvU2VnbWVudD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuTWVzc2FnZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdG9rZW4gfSA9IHBhcnNlQ29va2llcyhjdHgpO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9jaGF0c2AsIHtcbiAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogdG9rZW4gfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IGNoYXRzRGF0YTogcmVzLmRhdGEgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBlcnJvckxvYWRpbmc6IHRydWUgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZXM7XG4iLCJjb25zdCBiYXNlVXJsID1cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiXG4gICAgPyBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiXG4gICAgOiBcImh0dHBzOi8vZ2F0by1zb2NpYWwtbmV0d29yay5oZXJva3VhcHAuY29tXCI7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVybDtcbiIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IE1vbWVudCBmcm9tIFwicmVhY3QtbW9tZW50XCI7XG5cbmNvbnN0IGNhbGN1bGF0ZVRpbWUgPSBjcmVhdGVkQXQgPT4ge1xuICBjb25zdCB0b2RheSA9IG1vbWVudChEYXRlLm5vdygpKTtcbiAgY29uc3QgcG9zdERhdGUgPSBtb21lbnQoY3JlYXRlZEF0KTtcbiAgY29uc3QgZGlmZkluSG91cnMgPSB0b2RheS5kaWZmKHBvc3REYXRlLCBcImhvdXJzXCIpO1xuXG4gIGlmIChkaWZmSW5Ib3VycyA8IDI0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIFRvZGF5IDxNb21lbnQgZm9ybWF0PVwiaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+XG4gICAgICA8Lz5cbiAgICApO1xuICB9IGVsc2UgaWYgKGRpZmZJbkhvdXJzID4gMjQgJiYgZGlmZkluSG91cnMgPCAzNikge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICBZZXN0ZXJkYXkgPE1vbWVudCBmb3JtYXQ9XCJoaDptbSBBXCI+e2NyZWF0ZWRBdH08L01vbWVudD5cbiAgICAgIDwvPlxuICAgICk7XG4gIH0gZWxzZSBpZiAoZGlmZkluSG91cnMgPiAzNikge1xuICAgIHJldHVybiA8TW9tZW50IGZvcm1hdD1cIkREL01NL1lZWVkgaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYWxjdWxhdGVUaW1lO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4vYmFzZVVybFwiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5cbmNvbnN0IGdldFVzZXJJbmZvID0gYXN5bmMgdXNlclRvRmluZElkID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL2NoYXRzL3VzZXIvJHt1c2VyVG9GaW5kSWR9YCwge1xuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgbmFtZTogcmVzLmRhdGEubmFtZSwgcHJvZmlsZVBpY1VybDogcmVzLmRhdGEucHJvZmlsZVBpY1VybCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRVc2VySW5mbztcbiIsImNvbnN0IG5ld01zZ1NvdW5kID0gc2VuZGVyTmFtZSA9PiB7XG4gIGNvbnN0IHNvdW5kID0gbmV3IEF1ZGlvKFwiL2xpZ2h0Lm1wM1wiKTtcblxuICBzb3VuZCAmJiBzb3VuZC5wbGF5KCk7XG5cbiAgaWYgKHNlbmRlck5hbWUpIHtcbiAgICBkb2N1bWVudC50aXRsZSA9IGBOZXcgbWVzc2FnZSBmcm9tICR7c2VuZGVyTmFtZX1gO1xuXG4gICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJ2aXNpYmxlXCIpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiTWVzc2FnZXNcIjtcbiAgICAgIH0sIDUwMDApO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3TXNnU291bmQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==