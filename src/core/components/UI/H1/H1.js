"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.H1 = void 0;
var react_1 = __importDefault(require("react"));
require("./H1.scss");
exports.H1 = function (_a) {
    var title = _a.title;
    return react_1["default"].createElement("h1", null, title);
};
