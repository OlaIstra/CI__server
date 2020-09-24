(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-HistoryPage-HistoryPage"],{

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

/***/ "./src/core/components/Modal/Modal.tsx":
/*!*********************************************!*\
  !*** ./src/core/components/Modal/Modal.tsx ***!
  \*********************************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_Title_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @atoms/Title/Title */ "./src/core/atoms/Title/Title.tsx");
/* harmony import */ var _atoms_Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/Input/Input */ "./src/core/atoms/Input/Input.tsx");
/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/Button/Button */ "./src/core/atoms/Button/Button.tsx");
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal.scss */ "./src/core/components/Modal/Modal.scss");
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Modal_scss__WEBPACK_IMPORTED_MODULE_4__);





const Modal = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    classes: "title--huge"
  }, "New build"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_1__["Title"], null, "Enter the commit hash that you want to build"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "",
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Input_Input__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Commit hash",
    icon: "icon-cross"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form__btns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    classes: "btn--primary"
  }, "Run build"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], null, "Cancel"))));
};

/***/ }),

/***/ "./src/pages/HistoryPage/HistoryPage.tsx":
/*!***********************************************!*\
  !*** ./src/pages/HistoryPage/HistoryPage.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/Header/Header */ "./src/core/components/Header/Header.tsx");
/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/Button/Button */ "./src/core/atoms/Button/Button.tsx");
/* harmony import */ var _core_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/Modal/Modal */ "./src/core/components/Modal/Modal.tsx");
/* harmony import */ var _HistoryPage_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HistoryPage.scss */ "./src/pages/HistoryPage/HistoryPage.scss");
/* harmony import */ var _HistoryPage_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_HistoryPage_scss__WEBPACK_IMPORTED_MODULE_4__);






const HistoryPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["Header"], {
  title: "philip1967/my-awesome-repo"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "btn__block"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
  icon: "icon-play"
}, "Run build"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
  icon: "icon-settings"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "historyPage"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "repo"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "repo__info"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "repo__flex"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "repo__id"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "icon-tick"
}), "#1333"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "repo__title"
}, "add documentation for postgres scaler")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "repo__flex"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "repo__branch"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "icon-code-commit"
}), "master", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "repo__commit"
}, "9c9f0b9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "repo__fio"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "icon-user"
}), "Vadim Makeev"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "repo__data"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "repo__data__date"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "icon-calendar"
}), "21 \u044F\u043D\u0432, 03:06"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "repo__data__time"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "icon-timer"
}), "1 \u0447 20 \u043C\u0438\u043D"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "Show more"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "temporary solution to show modal", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__["Modal"], null)));

/* harmony default export */ __webpack_exports__["default"] = (HistoryPage);

/***/ })

}]);