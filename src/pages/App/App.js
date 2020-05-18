"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.App = void 0;
var react_1 = __importDefault(require("react"));
var ConfigurationPage_1 = require("../ConfigurationPage/ConfigurationPage");
var Header_1 = require("../../core/components/Header/Header");
var Bottom_1 = require("../../core/components/Bottom/Bottom");
require("./App.scss");
exports.App = function (props) {
    return (react_1["default"].createElement("div", { className: 'app' },
        react_1["default"].createElement(Header_1.Header, null),
        react_1["default"].createElement("div", { className: 'main' },
            react_1["default"].createElement(ConfigurationPage_1.ConfigurationPage, null)),
        react_1["default"].createElement(Bottom_1.Bottom, null)));
};
