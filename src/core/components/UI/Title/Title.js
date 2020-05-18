"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Title = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
require("./Title.scss");
exports.Title = function (_a) {
    var text = _a.text, classes = _a.classes;
    var titleClass = classnames_1["default"]("title", classes);
    return react_1["default"].createElement("div", { className: titleClass }, text);
};
