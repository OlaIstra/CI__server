"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.HistoryPage = void 0;
var react_1 = __importDefault(require("react"));
var Header_1 = require("../../core/components/Header/Header");
var Button_1 = require("../../core/components/UI/Button/Button");
var Modal_1 = require("../../core/components/Modal/Modal");
require("./HistoryPage.scss");
exports.HistoryPage = function (props) {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Header_1.Header, { title: 'philip1967/my-awesome-repo' },
            react_1["default"].createElement("div", { className: 'btn__block' },
                react_1["default"].createElement(Button_1.Button, { title: 'Run build', icon: 'icon-play' }),
                react_1["default"].createElement(Button_1.Button, { title: '', icon: 'icon-settings' }))),
        react_1["default"].createElement("div", { className: 'historyPage' },
            react_1["default"].createElement("div", { className: 'repo' },
                react_1["default"].createElement("div", { className: 'repo__info' },
                    react_1["default"].createElement("div", { className: 'repo__flex' },
                        react_1["default"].createElement("div", { className: 'repo__id' },
                            react_1["default"].createElement("span", { className: 'icon-tick' }),
                            "#1333"),
                        react_1["default"].createElement("div", { className: 'repo__title' }, "add documentation for postgres scaler")),
                    react_1["default"].createElement("div", { className: 'repo__flex' },
                        react_1["default"].createElement("div", { className: 'repo__branch' },
                            react_1["default"].createElement("span", { className: 'icon-code-commit' }),
                            "master",
                            react_1["default"].createElement("span", { className: 'repo__commit' }, "9c9f0b9")),
                        react_1["default"].createElement("div", { className: 'repo__fio' },
                            react_1["default"].createElement("span", { className: 'icon-user' }),
                            "Vadim Makeev"))),
                react_1["default"].createElement("div", { className: 'repo__data' },
                    react_1["default"].createElement("div", { className: 'repo__data__date' },
                        react_1["default"].createElement("span", { className: 'icon-calendar' }),
                        "21 \u044F\u043D\u0432, 03:06"),
                    react_1["default"].createElement("div", { className: 'repo__data__time' },
                        react_1["default"].createElement("span", { className: 'icon-timer' }),
                        "1 \u0447 20 \u043C\u0438\u043D"))),
            react_1["default"].createElement(Button_1.Button, { title: 'Show more' }),
            react_1["default"].createElement("br", null),
            "temporary solution to show modal",
            react_1["default"].createElement("br", null),
            react_1["default"].createElement(Modal_1.Modal, null))));
};
