"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var ConfigurationPage_1 = require("../ConfigurationPage/ConfigurationPage");
var SettingsPage_1 = require("../SettingsPage/SettingsPage");
var HistoryPage_1 = require("../HistoryPage/HistoryPage");
var Bottom_1 = require("../../core/components/Bottom/Bottom");
require("./App.scss");
var App = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_router_dom_1.Switch, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: '/', exact: true, component: ConfigurationPage_1.ConfigurationPage }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: '/settings', component: SettingsPage_1.SettingsPage }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: '/history', component: HistoryPage_1.HistoryPage })),
        react_1["default"].createElement(Bottom_1.Bottom, null)));
};
exports["default"] = App;
