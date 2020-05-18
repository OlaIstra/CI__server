"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Title = void 0;
var react_1 = __importDefault(require("react"));
exports.Title = function (props) {
    return react_1["default"].createElement("div", { className: 'title' }, props.text);
};
