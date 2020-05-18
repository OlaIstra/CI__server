"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
require("./index.scss");
var App_1 = require("./pages/App/App");
var app = react_1["default"].createElement(App_1.App, null);
react_dom_1["default"].render(app, document.getElementById("root"));
