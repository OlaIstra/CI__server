exports.ids = ["core-components-Footer-Footer"];
exports.modules = {

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/core/atoms/Button/Button.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js!./src/core/atoms/Button/Button.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Button__btn--Y4pxg {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  padding: 8px 13px;\n  font-size: 13px;\n  color: #000000;\n  border: none;\n  border-radius: 4px;\n  outline: none;\n}\n.Button__btn--Y4pxg:hover {\n  background: #dbdbdb;\n  cursor: pointer;\n}\n.Button__btn--Y4pxg:focus {\n  border: 2px solid #b3b3b3;\n}\n.Button__btn--primary--NT6aO {\n  padding: 11px 20px;\n  background-color: #ffcc00;\n}\n.Button__btn--primary--NT6aO:hover {\n  background: #f2c200;\n}\n.Button__btn--primary--NT6aO:focus {\n  border: 2px solid #b38f00;\n}\n.Button__btn--link--EmAJZ {\n  color: #7f8285;\n  background-color: transparent;\n}\n.Button__btn--link--EmAJZ:hover, .Button__btn--link--EmAJZ:focus {\n  background-color: transparent;\n  border: none;\n  color: #e00000;\n}\n.Button__btn--Y4pxg.Button__disabled--yyhk1 {\n  background: #f2f2f2;\n  color: #7f7f7f;\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.Button__btn--Y4pxg span {\n  margin-right: 5px;\n}", ""]);
// Exports
exports.locals = {
	"btn": "Button__btn--Y4pxg",
	"btnPrimary": "Button__btn--primary--NT6aO",
	"btnLink": "Button__btn--link--EmAJZ",
	"disabled": "Button__disabled--yyhk1"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/core/atoms/Title/Title.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js!./src/core/atoms/Title/Title.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Title__title--3Cxtw {\n  text-align: center;\n}\n.Title__title--light--2Lbr4 {\n  color: #7f8285;\n}\n.Title__title--bold--3bhDO {\n  margin-bottom: 8px;\n  font-weight: bold;\n  font-size: 15px;\n}\n.Title__title--huge--NiDxQ {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n}", ""]);
// Exports
exports.locals = {
	"title": "Title__title--3Cxtw",
	"titleLight": "Title__title--light--2Lbr4",
	"titleBold": "Title__title--bold--3bhDO",
	"titleHuge": "Title__title--huge--NiDxQ"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/core/components/Footer/Footer.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js!./src/core/components/Footer/Footer.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Footer__footer--3zNeO {\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  bottom: 0;\n  width: 100%;\n  padding: 0 100px;\n  background: #f0f2f3;\n}\n.Footer__footer__btns--35YVn {\n  display: inline-flex;\n  justify-content: space-between;\n}\n\n@media only screen and (max-width: 768px) {\n  .Footer__footer--3zNeO {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 0 16px 10px;\n  }\n}", ""]);
// Exports
exports.locals = {
	"footer": "Footer__footer--3zNeO",
	"footerBtns": "Footer__footer__btns--35YVn"
};
module.exports = exports;


/***/ }),

/***/ "./src/core/atoms/Button/Button.scss":
/*!*******************************************!*\
  !*** ./src/core/atoms/Button/Button.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/sass-loader/dist/cjs.js!./Button.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/core/atoms/Button/Button.scss");
    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
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

/***/ "./src/core/atoms/Title/Title.scss":
/*!*****************************************!*\
  !*** ./src/core/atoms/Title/Title.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/sass-loader/dist/cjs.js!./Title.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/core/atoms/Title/Title.scss");
    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
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

/***/ "./src/core/components/Footer/Footer.scss":
/*!************************************************!*\
  !*** ./src/core/components/Footer/Footer.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/sass-loader/dist/cjs.js!./Footer.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/core/components/Footer/Footer.scss");
    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/core/components/Footer/Footer.tsx":
/*!***********************************************!*\
  !*** ./src/core/components/Footer/Footer.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

};;
//# sourceMappingURL=core-components-Footer-Footer.js.map