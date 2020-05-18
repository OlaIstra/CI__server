"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Header = void 0;
var react_1 = __importDefault(require("react"));
var H1_1 = require("../UI/H1/H1");
require("./Header.scss");
exports.Header = function (props) {
    return (react_1["default"].createElement("div", { className: 'header' },
        react_1["default"].createElement(H1_1.H1, { title: 'School CI server' })));
};
