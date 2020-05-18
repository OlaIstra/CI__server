"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Modal = void 0;
var react_1 = __importDefault(require("react"));
var Title_1 = require("../UI/Title/Title");
var Input_1 = require("../UI/Input/Input");
var Button_1 = require("../UI/Button/Button");
require("./Modal.scss");
exports.Modal = function (_a) {
    var title = _a.title, children = _a.children;
    return (react_1["default"].createElement("div", { className: 'modal' },
        react_1["default"].createElement(Title_1.Title, { text: 'New build', classes: 'title--huge' }),
        react_1["default"].createElement(Title_1.Title, { text: 'Enter the commit hash that you want to build' }),
        react_1["default"].createElement("form", { action: '', className: 'form' },
            react_1["default"].createElement(Input_1.Input, { placeholder: 'Commit hash', icon: 'icon-cross' }),
            react_1["default"].createElement("div", { className: 'form__btns' },
                react_1["default"].createElement(Button_1.Button, { title: 'Run build', classes: 'btn--primary' }),
                react_1["default"].createElement(Button_1.Button, { title: 'Cancel' })))));
};
