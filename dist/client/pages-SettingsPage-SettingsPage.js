(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-SettingsPage-SettingsPage"],{

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

/***/ "./src/core/atoms/Input/Input.tsx":
/*!****************************************!*\
  !*** ./src/core/atoms/Input/Input.tsx ***!
  \****************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input.scss */ "./src/core/atoms/Input/Input.scss");
/* harmony import */ var _Input_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Input_scss__WEBPACK_IMPORTED_MODULE_2__);



const Input = ({
  placeholder,
  classes,
  icon,
  inputValue,
  property,
  handleChange
}) => {
  const handleInputValue = event => {
    handleChange(event.currentTarget.value, property);
  };

  const handleDelete = () => {
    handleChange('', property);
  };

  const inputClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('input', classes);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inputWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    placeholder: placeholder,
    className: inputClass,
    value: inputValue,
    onChange: handleInputValue
  }), icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: icon,
    onClick: handleDelete
  }) : null);
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

/***/ "./src/pages/SettingsPage/SettingsPage.tsx":
/*!*************************************************!*\
  !*** ./src/pages/SettingsPage/SettingsPage.tsx ***!
  \*************************************************/
/*! exports provided: SettingsPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
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

}]);