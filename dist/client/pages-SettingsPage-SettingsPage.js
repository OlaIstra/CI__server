(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([ [ 6 ], {
    16: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, "SettingsPage", (function() {
            return SettingsPage;
        }));
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0), react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__), react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2), _core_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74), _atoms_Title_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73), _atoms_Input_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75), _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72), SettingsPage = (__webpack_require__(69), 
        function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__.a, {
                title: "School CI server"
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                className: "settingsPage"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_3__.a, {
                classes: "title--bold"
            }, "Settings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_3__.a, {
                classes: "title--light"
            }, "Configure repository connection and synchronization settings."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
                action: "",
                className: "form"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                className: "form__block"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_3__.a, null, "GitHub repository"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Input_Input__WEBPACK_IMPORTED_MODULE_4__.a, {
                placeholder: "user-name/repo-name"
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                className: "form__block"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_3__.a, null, "Build command"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Input_Input__WEBPACK_IMPORTED_MODULE_4__.a, {
                placeholder: "user-name/repo-name",
                icon: "icon-cross"
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                className: "form__block"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_3__.a, null, "Build command"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Input_Input__WEBPACK_IMPORTED_MODULE_4__.a, {
                placeholder: "master",
                icon: "icon-cross"
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                className: "form__info"
            }, "Synchronize every", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Input_Input__WEBPACK_IMPORTED_MODULE_4__.a, {
                placeholder: "10",
                classes: "input--block"
            }), "minutes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                className: "form__btns"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_5__.a, {
                classes: "btn--primary"
            }, "Save"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_5__.a, null, "Cancel"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "temporary to show history page", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
                to: "/history"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_5__.a, {
                icon: "icon-play",
                classes: "btn--primary"
            }, "to history page"))));
        });
        __webpack_exports__.default = SettingsPage;
    },
    72: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return Button;
        }));
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0), react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__), classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61), classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__), Button = (__webpack_require__(62), 
        function(_ref) {
            var classes = _ref.classes, icon = _ref.icon, children = _ref.children, btnClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()("btn", classes);
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                className: btnClass
            }, icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                className: icon
            }), children);
        });
    },
    73: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return Title;
        }));
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0), react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__), classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61), classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__), Title = (__webpack_require__(63), 
        function(_ref) {
            var children = _ref.children, classes = _ref.classes, titleClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()("title", classes);
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                className: titleClass
            }, children);
        });
    },
    74: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return Header_Header_Header;
        }));
        var react = __webpack_require__(0), react_default = __webpack_require__.n(react), H1_H1_H1 = (__webpack_require__(64), 
        function(_ref) {
            var children = _ref.children;
            return react_default.a.createElement("h1", null, children);
        }), Header_Header_Header = (__webpack_require__(65), function(_ref) {
            var title = _ref.title, children = _ref.children;
            return react_default.a.createElement("div", {
                className: "header"
            }, react_default.a.createElement(H1_H1_H1, null, title), children);
        });
    },
    75: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return Input;
        }));
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0), react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__), classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61), classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__), Input = (__webpack_require__(66), 
        function(_ref) {
            var placeholder = _ref.placeholder, classes = _ref.classes, icon = _ref.icon, inputClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()("input", classes);
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                className: "inputWrapper"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                placeholder: placeholder,
                className: inputClass
            }), icon ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                className: icon
            }) : null);
        });
    }
} ]);