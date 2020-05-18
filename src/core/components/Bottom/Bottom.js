"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Bottom = void 0;
var react_1 = __importDefault(require("react"));
var Title_1 = require("../UI/Title/Title");
require("./Bottom.scss");
exports.Bottom = function (props) {
    return (react_1["default"].createElement("div", { className: 'bottom' },
        react_1["default"].createElement(Title_1.Title, { text: '\u00A9 2020 Your Name' })));
};
