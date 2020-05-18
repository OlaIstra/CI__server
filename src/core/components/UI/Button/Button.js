"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
require("./Button.scss");
exports.Button = function (props) {
    return react_1["default"].createElement("button", { className: 'btn btn--primary' }, props.title);
};
