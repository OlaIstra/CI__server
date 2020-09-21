(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([ [ 5 ], {
    17: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var react = __webpack_require__(0), react_default = __webpack_require__.n(react), Header = __webpack_require__(74), Button = __webpack_require__(72), Title = __webpack_require__(73), Input = __webpack_require__(75), Modal_Modal_Modal = (__webpack_require__(70), 
        function() {
            return react_default.a.createElement("div", {
                className: "modal"
            }, react_default.a.createElement(Title.a, {
                classes: "title--huge"
            }, "New build"), react_default.a.createElement(Title.a, null, "Enter the commit hash that you want to build"), react_default.a.createElement("form", {
                action: "",
                className: "form"
            }, react_default.a.createElement(Input.a, {
                placeholder: "Commit hash",
                icon: "icon-cross"
            }), react_default.a.createElement("div", {
                className: "form__btns"
            }, react_default.a.createElement(Button.a, {
                classes: "btn--primary"
            }, "Run build"), react_default.a.createElement(Button.a, null, "Cancel"))));
        });
        __webpack_require__(71), __webpack_exports__.default = function() {
            return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Header.a, {
                title: "philip1967/my-awesome-repo"
            }, react_default.a.createElement("div", {
                className: "btn__block"
            }, react_default.a.createElement(Button.a, {
                icon: "icon-play"
            }, "Run build"), react_default.a.createElement(Button.a, {
                icon: "icon-settings"
            }))), react_default.a.createElement("div", {
                className: "historyPage"
            }, react_default.a.createElement("div", {
                className: "repo"
            }, react_default.a.createElement("div", {
                className: "repo__info"
            }, react_default.a.createElement("div", {
                className: "repo__flex"
            }, react_default.a.createElement("div", {
                className: "repo__id"
            }, react_default.a.createElement("span", {
                className: "icon-tick"
            }), "#1333"), react_default.a.createElement("div", {
                className: "repo__title"
            }, "add documentation for postgres scaler")), react_default.a.createElement("div", {
                className: "repo__flex"
            }, react_default.a.createElement("div", {
                className: "repo__branch"
            }, react_default.a.createElement("span", {
                className: "icon-code-commit"
            }), "master", react_default.a.createElement("span", {
                className: "repo__commit"
            }, "9c9f0b9")), react_default.a.createElement("div", {
                className: "repo__fio"
            }, react_default.a.createElement("span", {
                className: "icon-user"
            }), "Vadim Makeev"))), react_default.a.createElement("div", {
                className: "repo__data"
            }, react_default.a.createElement("div", {
                className: "repo__data__date"
            }, react_default.a.createElement("span", {
                className: "icon-calendar"
            }), "21 янв, 03:06"), react_default.a.createElement("div", {
                className: "repo__data__time"
            }, react_default.a.createElement("span", {
                className: "icon-timer"
            }), "1 ч 20 мин"))), react_default.a.createElement(Button.a, null, "Show more"), react_default.a.createElement("br", null), "temporary solution to show modal", react_default.a.createElement("br", null), react_default.a.createElement(Modal_Modal_Modal, null)));
        };
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