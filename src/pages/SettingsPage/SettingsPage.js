"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.SettingsPage = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Header_1 = require("../../core/components/Header/Header");
var Title_1 = require("../../core/components/UI/Title/Title");
var Button_1 = require("../../core/components/UI/Button/Button");
var Input_1 = require("../../core/components/UI/Input/Input");
require("./SettingsPage.scss");
exports.SettingsPage = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Header_1.Header, { title: 'School CI server' }),
        react_1["default"].createElement("div", { className: 'settingsPage' },
            react_1["default"].createElement(Title_1.Title, { text: 'Settings', classes: 'title--bold' }),
            react_1["default"].createElement(Title_1.Title, { text: 'Configure repository connection and synchronization settings.', classes: 'title--light' }),
            react_1["default"].createElement("form", { action: '', className: 'form' },
                react_1["default"].createElement("div", { className: 'form__block' },
                    react_1["default"].createElement(Title_1.Title, { text: 'GitHub repository' }),
                    react_1["default"].createElement(Input_1.Input, { placeholder: 'user-name/repo-name' })),
                react_1["default"].createElement("div", { className: 'form__block' },
                    react_1["default"].createElement(Title_1.Title, { text: 'Build command' }),
                    react_1["default"].createElement(Input_1.Input, { placeholder: 'user-name/repo-name', icon: 'icon-cross' })),
                react_1["default"].createElement("div", { className: 'form__block' },
                    react_1["default"].createElement(Title_1.Title, { text: 'Build command' }),
                    react_1["default"].createElement(Input_1.Input, { placeholder: 'master', icon: 'icon-cross' })),
                react_1["default"].createElement("div", { className: 'form__info' },
                    "Synchronize every",
                    react_1["default"].createElement(Input_1.Input, { placeholder: '10', classes: 'input--block' }),
                    "minutes"),
                react_1["default"].createElement("div", { className: 'form__btns' },
                    react_1["default"].createElement(Button_1.Button, { title: 'Save', classes: 'btn--primary' }),
                    react_1["default"].createElement(Button_1.Button, { title: 'Cancel' }))),
            react_1["default"].createElement("br", null),
            "temporary to show history page",
            react_1["default"].createElement("br", null),
            react_1["default"].createElement(react_router_dom_1.Link, { to: '/history' },
                react_1["default"].createElement(Button_1.Button, { title: 'to history page', icon: 'icon-play', classes: 'btn--primary' })))));
};
