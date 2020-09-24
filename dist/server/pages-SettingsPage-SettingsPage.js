exports.ids = ["pages-SettingsPage-SettingsPage"];
exports.modules = {

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/pages/SettingsPage/SettingsPage.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js!./src/pages/SettingsPage/SettingsPage.scss ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".SettingsPage__settingsPage--3sidW {\n  display: flex;\n  flex-direction: column;\n  max-width: 824px;\n  padding-top: 60px;\n  margin: 0px auto;\n  height: 100vh;\n}\n.SettingsPage__settingsPage--3sidW .SettingsPage__title--30N_X {\n  text-align: left;\n}\n.SettingsPage__settingsPage--3sidW .SettingsPage__form--o1hSN {\n  width: 474px;\n  margin-top: 22px;\n}\n.SettingsPage__settingsPage--3sidW .SettingsPage__form__info--XTQ-z {\n  display: flex;\n  align-items: center;\n}\n.SettingsPage__settingsPage--3sidW .SettingsPage__form__btns--32tho {\n  display: inline-flex;\n  justify-content: space-between;\n  margin-top: 24px;\n}\n.SettingsPage__settingsPage--3sidW .SettingsPage__form__btns--32tho .SettingsPage__btn--3UPsb:nth-child(1) {\n  margin-right: 8px;\n}\n\n.SettingsPage__form__block--kwleh {\n  margin-bottom: 18px;\n}\n.SettingsPage__form__block--kwleh .SettingsPage__title--30N_X {\n  margin-bottom: 6px;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.06px;\n}\n\n@media only screen and (max-width: 768px) {\n  .SettingsPage__settingsPage--3sidW {\n    max-width: 288px;\n  }\n  .SettingsPage__settingsPage--3sidW .SettingsPage__form--o1hSN {\n    width: 288px;\n  }\n}", ""]);
// Exports
exports.locals = {
	"settingsPage": "SettingsPage__settingsPage--3sidW",
	"title": "SettingsPage__title--30N_X",
	"form": "SettingsPage__form--o1hSN",
	"formInfo": "SettingsPage__form__info--XTQ-z",
	"formBtns": "SettingsPage__form__btns--32tho",
	"btn": "SettingsPage__btn--3UPsb",
	"formBlock": "SettingsPage__form__block--kwleh"
};
module.exports = exports;


/***/ }),

/***/ "./src/pages/SettingsPage/SettingsPage.scss":
/*!**************************************************!*\
  !*** ./src/pages/SettingsPage/SettingsPage.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/sass-loader/dist/cjs.js!./SettingsPage.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/pages/SettingsPage/SettingsPage.scss");
    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
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

/***/ "./src/pages/SettingsPage/SettingsPage.tsx":
/*!*************************************************!*\
  !*** ./src/pages/SettingsPage/SettingsPage.tsx ***!
  \*************************************************/
/*! exports provided: SettingsPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/Header/Header */ "./src/core/components/Header/Header.tsx");
/* harmony import */ var _atoms_Title_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/Title/Title */ "./src/core/atoms/Title/Title.tsx");
/* harmony import */ var _atoms_Input_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @atoms/Input/Input */ "./src/core/atoms/Input/Input.tsx");
/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @atoms/Button/Button */ "./src/core/atoms/Button/Button.tsx");
/* harmony import */ var _SettingsPage_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SettingsPage.scss */ "./src/pages/SettingsPage/SettingsPage.scss");
/* harmony import */ var _SettingsPage_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SettingsPage_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_stores_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/stores/store */ "./src/core/stores/store.ts");








const SettingsPage = () => {
  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_core_stores_store__WEBPACK_IMPORTED_MODULE_7__["default"]);
  const [settings, setSettings] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    id: '123',
    userName: '',
    repoName: '',
    buildCommand: '',
    mainBranch: '',
    timePeriod: 0
  });
  const [isDisabled, setIsDisabled] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const saveSettings = event => {
    event.preventDefault();
    console.log('settings', settings);
    store.saveSettings(settings);
  };

  const handleChange = (value, property) => {
    console.log(property, value);
    console.log(typeof value);
    setSettings(prev => ({ ...prev,
      [property]: value
    }));
    console.log(settings);
    console.log('Object.values(settings).includes', Object.values(settings).includes(''));
    Object.values(settings).includes('') ? setIsDisabled(true) : setIsDisabled(false);
  };

  const clearAll = event => {
    event.preventDefault();
    setSettings({
      id: '123',
      userName: '',
      repoName: '',
      buildCommand: '',
      mainBranch: '',
      timePeriod: 0
    });
    setIsDisabled(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    title: "School CI server"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "settingsPage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    classes: "title--bold"
  }, "Settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    classes: "title--light"
  }, "Configure repository connection and synchronization settings."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "",
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form__block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_3__["Title"], null, "User name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Input_Input__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "user-name",
    icon: "icon-cross",
    inputValue: settings.userName,
    handleChange: handleChange,
    property: "userName"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form__block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_3__["Title"], null, "GitHub repository"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Input_Input__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "repo-name",
    icon: "icon-cross",
    inputValue: settings.repoName,
    handleChange: handleChange,
    property: "repoName"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form__block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_3__["Title"], null, "Main branch name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Input_Input__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "branch name",
    icon: "icon-cross",
    inputValue: settings.mainBranch,
    handleChange: handleChange,
    property: "mainBranch"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form__block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_3__["Title"], null, "Build command"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Input_Input__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "npm run start",
    icon: "icon-cross",
    inputValue: settings.buildCommand,
    handleChange: handleChange,
    property: "buildCommand"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form__info"
  }, "Synchronize every", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Input_Input__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "10",
    classes: "input--block",
    inputValue: settings.timePeriod,
    handleChange: handleChange,
    property: "timePeriod"
  }), "minutes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form__btns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    classes: `btn--primary ${isDisabled ? 'disabled' : ''}`,
    handleClick: saveSettings
  }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    handleClick: clearAll
  }, "Cancel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "temporary to show history page", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/history"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    icon: "icon-play",
    classes: "btn--primary"
  }, "to history page"))));
};
/* harmony default export */ __webpack_exports__["default"] = (SettingsPage);

/***/ })

};;
//# sourceMappingURL=pages-SettingsPage-SettingsPage.js.map