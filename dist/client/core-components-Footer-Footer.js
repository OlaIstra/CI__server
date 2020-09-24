(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["core-components-Footer-Footer"],{

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

/***/ "./src/core/components/Footer/Footer.tsx":
/*!***********************************************!*\
  !*** ./src/core/components/Footer/Footer.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @atoms/Button/Button */ "./src/core/atoms/Button/Button.tsx");
/* harmony import */ var _atoms_Title_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/Title/Title */ "./src/core/atoms/Title/Title.tsx");
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.scss */ "./src/core/components/Footer/Footer.scss");
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Footer_scss__WEBPACK_IMPORTED_MODULE_3__);





const Footer = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "footer"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "bottom__btns"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  classes: "btn--link"
}, "Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  classes: "btn--link"
}, "Learning")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_2__["Title"], {
  classes: "title--light"
}, "\xA9 2020 Your Name"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

}]);