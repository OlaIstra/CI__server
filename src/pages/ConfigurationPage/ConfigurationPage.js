"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ConfigurationPage = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Header_1 = require("../../core/components/Header/Header");
var Title_1 = require("../../core/components/UI/Title/Title");
var Button_1 = require("../../core/components/UI/Button/Button");
require("./ConfigurationPage.scss");
exports.ConfigurationPage = function (props) {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Header_1.Header, { title: 'School CI server' },
            react_1["default"].createElement(react_router_dom_1.Link, { to: '/settings' },
                react_1["default"].createElement(Button_1.Button, { title: 'Settings', icon: 'icon-settings' }))),
        react_1["default"].createElement("div", { className: 'configPage' },
            react_1["default"].createElement("div", { className: 'configPage_logo' }),
            react_1["default"].createElement(Title_1.Title, { text: 'Configure repository connection and synchronization settings' }),
            react_1["default"].createElement(react_router_dom_1.Link, { to: '/settings' },
                react_1["default"].createElement(Button_1.Button, { title: 'Open settings', classes: 'btn--primary' })))));
};
