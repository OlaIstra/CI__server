"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Input = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
require("./Input.scss");
exports.Input = function (_a) {
    var placeholder = _a.placeholder, classes = _a.classes, icon = _a.icon;
    var inputClass = classnames_1["default"]("input", classes);
    return (react_1["default"].createElement("div", { className: 'inputWrapper' },
        react_1["default"].createElement("input", { placeholder: placeholder, className: inputClass }),
        icon ? react_1["default"].createElement("span", { className: icon }) : null));
};
