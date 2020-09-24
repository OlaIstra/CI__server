(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-ConfigurationPage-ConfigurationPage"],{

/***/ "./src/core/assets/img/main.png":
/*!**************************************!*\
  !*** ./src/core/assets/img/main.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8BAMAAABZMMmNAAAAFVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAASAQCkAAAAB3RSTlMAGRMDDBAJfkyoJgAAA7FJREFUWMOd2DFzm0AQBWAiELX2hFULyUqNGDu1NHFSC9uTGseZ/P+fkMJ3eTe8290Zbynu8a04YGVXscahMuvbj4NIOP0sL6v7zgq3k8QKL6Xjo8hRTz9KVpcSLhLU9n9LXndFXKTz0uAZF639URa1La5Q2m9kWR3hdICPoYLa3tFoHaUB3H4rbhwAt3+14sCpfb5u4RQXBsaV9t9ws7z/d3aEK+3XaCpz9kUcK/nYS+7MeRw4tz/lZxwFvaPO+l3V4gMFx8Wl9uENhFP31D56Pyo4DG4fJw4ajt3h9hHfEm7emBB7BIBTrURpvzcue9PLaUj3HdclxfeMp0xHW8/xmXA8DDdsvRIPRbylHSrF03X/QjhuKJyd4umrrxjP39m1Ek/gWsFlg60vxwdcnI7w9MpfafGQre8Ilx22sRjvsi93t8RxxrMSj6fHKxJ4fsZGiW/znQVOA6cvxzf5kz8knONjIf622JmZ5w6eeo63MZ7ES4YjzluPpZv8yt6/Aw+4HLT16WFqU/xLCr0m5TilOG09tuQtxlf8OuoX4+5c4uPGrflliDi2nvi/8RjhFQ3bnvlULeE1DNp6OlQT3hrjmHkaA2v+jXbV+X6Bx73Y5PHm6aMm5qcFHvdpXxVqzfxDvxhBEwAq8Kj6qc/wGm9an8cZEr7Gtts8neGIWxSnN3kuzG6f52rwE+0z/Blz4xN83RtXzudHDAmXV3D9qw8qz+OZq9nZfIMJVaqrzMRT6+idT27wSIdBwcXgEd9qeIH/83x4jdqIQVLGiW8+xF8532k486m+gjdw8Dz1E79TcAxu5vHjPAwmvteGU+SPHm7yXeXhJj94uM27uM27OAYf8z7Oo5l5H0+jkHkfxzuVeR/Hi4l5H8enzPs49t3kGedhxryNc5x5H5/RPPE+vrohTryP9zccIN7HZY/bhnkXlw3izLu4bOmeJ97ApaMHlngDF6GNJ17F0wA/q7yHyw1HFd7CZYuRpvJ1EcdoHm1+peIig89fVVy6yuVrBccQNvnGxF1+ZeIqn1JnC/f4bbxyRwV3+C6+TmYFd/gQrUHBPZ7+lCWceI7f2TjzHGfc5wPiUIB7/C42C4Rwi9/jPzqM+/wcb5s94SaPZWesJ9zjLykuF8KZZxwP7FxVD0K4yV/yOXA4COEqj2XFr+TwWIY5wDjzvKwxcOZ52aTgNt/hM8Z9/sKfMc48L3v0cfOJvNLYNXjusZ6oJ4vnd9HzR/reSuKbco8PBwmn70YM+T5A+QezgVA3EbMZvQAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/core/atoms/Button/Button.tsx":
/*!******************************************!*\
  !*** ./src/core/atoms/Button/Button.tsx ***!
  \******************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.scss */ "./src/core/atoms/Button/Button.scss");
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_scss__WEBPACK_IMPORTED_MODULE_2__);



const Button = ({
  classes,
  icon,
  children,
  handleClick
}) => {
  const btnClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('btn', classes);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: btnClass,
    onClick: handleClick
  }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: icon
  }), children);
};

/***/ }),

/***/ "./src/core/atoms/H1/H1.tsx":
/*!**********************************!*\
  !*** ./src/core/atoms/H1/H1.tsx ***!
  \**********************************/
/*! exports provided: H1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return H1; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _H1_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./H1.scss */ "./src/core/atoms/H1/H1.scss");
/* harmony import */ var _H1_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_H1_scss__WEBPACK_IMPORTED_MODULE_1__);


const H1 = ({
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, children);

/***/ }),

/***/ "./src/core/atoms/Title/Title.tsx":
/*!****************************************!*\
  !*** ./src/core/atoms/Title/Title.tsx ***!
  \****************************************/
/*! exports provided: Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Title_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title.scss */ "./src/core/atoms/Title/Title.scss");
/* harmony import */ var _Title_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Title_scss__WEBPACK_IMPORTED_MODULE_2__);



const Title = ({
  children,
  classes
}) => {
  const titleClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('title', classes);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: titleClass
  }, children);
};

/***/ }),

/***/ "./src/core/components/Header/Header.tsx":
/*!***********************************************!*\
  !*** ./src/core/components/Header/Header.tsx ***!
  \***********************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_H1_H1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @atoms/H1/H1 */ "./src/core/atoms/H1/H1.tsx");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.scss */ "./src/core/components/Header/Header.scss");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_2__);



const Header = ({
  title,
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "header"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_H1_H1__WEBPACK_IMPORTED_MODULE_1__["H1"], null, title), children);

/***/ }),

/***/ "./src/pages/ConfigurationPage/ConfigurationPage.tsx":
/*!***********************************************************!*\
  !*** ./src/pages/ConfigurationPage/ConfigurationPage.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/Header/Header */ "./src/core/components/Header/Header.tsx");
/* harmony import */ var _atoms_Title_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/Title/Title */ "./src/core/atoms/Title/Title.tsx");
/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @atoms/Button/Button */ "./src/core/atoms/Button/Button.tsx");
/* harmony import */ var _ConfigurationPage_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ConfigurationPage.scss */ "./src/pages/ConfigurationPage/ConfigurationPage.scss");
/* harmony import */ var _ConfigurationPage_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ConfigurationPage_scss__WEBPACK_IMPORTED_MODULE_5__);







const ConfigurationPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["Header"], {
  title: "School CI server"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: "/settings"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
  icon: "icon-settings"
}, "Settings"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "configPage"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "configPage_logo"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_3__["Title"], null, "Configure repository connection and synchronization settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: "/settings"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
  classes: "btn--primary"
}, "Open settings"))));

/* harmony default export */ __webpack_exports__["default"] = (ConfigurationPage);

/***/ })

}]);