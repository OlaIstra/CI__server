"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
require("./Button.scss");
exports.Button = function (_a) {
    var title = _a.title, classes = _a.classes, icon = _a.icon;
    var btnClass = classnames_1["default"]("btn", classes);
    return (react_1["default"].createElement("button", { className: btnClass },
        icon ? react_1["default"].createElement("span", { className: icon }) : null,
        title));
};
