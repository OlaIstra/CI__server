"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ConfigurationPage = void 0;
var react_1 = __importDefault(require("react"));
var Title_1 = require("../../core/components/UI/Title/Title");
var Button_1 = require("../../core/components/UI/Button/Button");
require("./ConfigurationPage.scss");
exports.ConfigurationPage = function (props) {
    return (react_1["default"].createElement("div", { className: 'configPage' },
        react_1["default"].createElement("div", { className: 'configPage_logo' }),
        react_1["default"].createElement(Title_1.Title, { text: 'Configure repository connection and synchronization settings' }),
        react_1["default"].createElement(Button_1.Button, { title: 'Open settings' })));
};
