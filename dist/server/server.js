/******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // object to store loaded chunks // "0" means "already loaded"
    /******/
    /******/ /******/ /******/ var installedChunks = {
        /******/ server: 0,
        /******/
    }; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
            /******/ return installedModules[moduleId].exports;
            /******/
        } // Create a new module (and put it into the cache)
        /******/ /******/ var module = (installedModules[moduleId] = {
            /******/ i: moduleId,
            /******/ l: false,
            /******/ exports: {},
            /******/
        }); // Execute the module function
        /******/
        /******/ /******/ modules[moduleId].call(
            module.exports,
            module,
            module.exports,
            __webpack_require__,
        ); // Flag the module as loaded
        /******/
        /******/ /******/ module.l = true; // Return the exports of the module
        /******/
        /******/ /******/ return module.exports;
        /******/
    } // This file contains only the entry chunk. // The chunk loading function for additional chunks
    /******/
    /******/ /******/ /******/ __webpack_require__.e = function requireEnsure(chunkId) {
        /******/ var promises = []; // require() chunk loading for javascript // "0" is the signal for "already loaded"
        /******/
        /******/
        /******/ /******/
        /******/ /******/ if (installedChunks[chunkId] !== 0) {
            /******/ var chunk = require('./' +
                ({
                    'core-components-Footer-Footer': 'core-components-Footer-Footer',
                    'pages-ConfigurationPage-ConfigurationPage':
                        'pages-ConfigurationPage-ConfigurationPage',
                    'pages-HistoryPage-HistoryPage': 'pages-HistoryPage-HistoryPage',
                    'pages-SettingsPage-SettingsPage': 'pages-SettingsPage-SettingsPage',
                }[chunkId] || chunkId) +
                '.js');
            /******/ var moreModules = chunk.modules,
                chunkIds = chunk.ids;
            /******/ for (var moduleId in moreModules) {
                /******/ modules[moduleId] = moreModules[moduleId];
                /******/
            }
            /******/ for (var i = 0; i < chunkIds.length; i++)
                /******/ installedChunks[chunkIds[i]] = 0;
            /******/
        }
        /******/ return Promise.all(promises);
        /******/
    }; // expose the modules object (__webpack_modules__)
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) {
            /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/
        }
        /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
        }
        /******/ Object.defineProperty(exports, '__esModule', { value: true });
        /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
        value,
        mode,
    ) {
        /******/ if (mode & 1) value = __webpack_require__(value);
        /******/ if (mode & 8) return value;
        /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule)
            return value;
        /******/ var ns = Object.create(null);
        /******/ __webpack_require__.r(ns);
        /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/ if (mode & 2 && typeof value != 'string')
            for (var key in value)
                __webpack_require__.d(
                    ns,
                    key,
                    function(key) {
                        return value[key];
                    }.bind(null, key),
                );
        /******/ return ns;
        /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
        /******/ var getter =
            module && module.__esModule
                ? /******/ function getDefault() {
                      return module['default'];
                  }
                : /******/ function getModuleExports() {
                      return module;
                  };
        /******/ __webpack_require__.d(getter, 'a', getter);
        /******/ return getter;
        /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // uncaught error handler for webpack runtime
    /******/
    /******/ /******/ __webpack_require__.oe = function(err) {
        /******/ process.nextTick(function() {
            /******/ throw err; // catch this error by using import().catch()
            /******/
        });
        /******/
    }; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = './server/index.ts'));
    /******/
})(
    /************************************************************************/
    /******/ {
        /***/ './node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/core/styles/variables.scss':
            /*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js!./src/core/styles/variables.scss ***!
  \*******************************************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                // Imports
                var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
                    /*! ../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
                );
                exports = ___CSS_LOADER_API_IMPORT___(false);
                // Module
                exports.push([module.i, '', '']);
                // Exports
                module.exports = exports;

                /***/
            },

        /***/ './node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/pages/App/App.scss':
            /*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js!./src/pages/App/App.scss ***!
  \***********************************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                // Imports
                var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
                    /*! ../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
                );
                var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(
                    /*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ './node_modules/css-loader/dist/runtime/getUrl.js',
                );
                var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(
                    /*! ../../core/assets/fonts/icomoon.eot?23nkz4 */ './src/core/assets/fonts/icomoon.eot?23nkz4',
                );
                var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(
                    /*! ../../core/assets/fonts/icomoon.ttf?23nkz4 */ './src/core/assets/fonts/icomoon.ttf?23nkz4',
                );
                var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(
                    /*! ../../core/assets/fonts/icomoon.woff?23nkz4 */ './src/core/assets/fonts/icomoon.woff?23nkz4',
                );
                var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(
                    /*! ../../core/assets/fonts/icomoon.svg?23nkz4 */ './src/core/assets/fonts/icomoon.svg?23nkz4',
                );
                exports = ___CSS_LOADER_API_IMPORT___(false);
                var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(
                    ___CSS_LOADER_URL_IMPORT_0___,
                );
                var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(
                    ___CSS_LOADER_URL_IMPORT_0___,
                    { hash: '#iefix' },
                );
                var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(
                    ___CSS_LOADER_URL_IMPORT_1___,
                );
                var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(
                    ___CSS_LOADER_URL_IMPORT_2___,
                );
                var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(
                    ___CSS_LOADER_URL_IMPORT_3___,
                    { hash: '#icomoon' },
                );
                // Module
                exports.push([
                    module.i,
                    '@charset "UTF-8";\n@font-face {\n  font-family: "icomoon";\n  src: url(' +
                        ___CSS_LOADER_URL_REPLACEMENT_0___ +
                        ');\n  src: url(' +
                        ___CSS_LOADER_URL_REPLACEMENT_1___ +
                        ') format("embedded-opentype"), url(' +
                        ___CSS_LOADER_URL_REPLACEMENT_2___ +
                        ') format("truetype"), url(' +
                        ___CSS_LOADER_URL_REPLACEMENT_3___ +
                        ') format("woff"), url(' +
                        ___CSS_LOADER_URL_REPLACEMENT_4___ +
                        ') format("svg");\n  font-weight: normal;\n  font-style: normal;\n  font-display: block;\n}\n[class^=icon-],\n[class*=" icon-"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: "icomoon" !important;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.App__icon-calendar--3bCbF:before {\n  content: "";\n}\n\n.App__icon-clock--3PGPL:before {\n  content: "";\n  color: #ff9a00;\n}\n\n.App__icon-code-commit--1Fd-A:before {\n  content: "";\n}\n\n.App__icon-cross--2dNTi:before {\n  content: "";\n  color: red;\n  font-size: 16px;\n}\n\n.App__icon-play--kmx_z:before {\n  content: "";\n}\n\n.App__icon-rebuild--2YKph:before {\n  content: "";\n}\n\n.App__icon-settings--2_dYo:before {\n  content: "";\n}\n\n.App__icon-tick--1SDvM:before {\n  content: "";\n  color: #00b341;\n}\n\n.App__icon-timer--33FrK:before {\n  content: "";\n}\n\n.App__icon-user--3BysR:before {\n  content: "";\n}',
                    '',
                ]);
                // Exports
                exports.locals = {
                    iconCalendar: 'App__icon-calendar--3bCbF',
                    iconClock: 'App__icon-clock--3PGPL',
                    iconCodeCommit: 'App__icon-code-commit--1Fd-A',
                    iconCross: 'App__icon-cross--2dNTi',
                    iconPlay: 'App__icon-play--kmx_z',
                    iconRebuild: 'App__icon-rebuild--2YKph',
                    iconSettings: 'App__icon-settings--2_dYo',
                    iconTick: 'App__icon-tick--1SDvM',
                    iconTimer: 'App__icon-timer--33FrK',
                    iconUser: 'App__icon-user--3BysR',
                };
                module.exports = exports;

                /***/
            },

        /***/ './node_modules/css-loader/dist/runtime/api.js':
            /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                'use strict';

                /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
                // css base code, injected by the css-loader
                // eslint-disable-next-line func-names
                module.exports = function(useSourceMap) {
                    var list = []; // return the list of modules as css string

                    list.toString = function toString() {
                        return this.map(function(item) {
                            var content = cssWithMappingToString(item, useSourceMap);

                            if (item[2]) {
                                return '@media '.concat(item[2], ' {').concat(content, '}');
                            }

                            return content;
                        }).join('');
                    }; // import a list of modules into the list
                    // eslint-disable-next-line func-names

                    list.i = function(modules, mediaQuery, dedupe) {
                        if (typeof modules === 'string') {
                            // eslint-disable-next-line no-param-reassign
                            modules = [[null, modules, '']];
                        }

                        var alreadyImportedModules = {};

                        if (dedupe) {
                            for (var i = 0; i < this.length; i++) {
                                // eslint-disable-next-line prefer-destructuring
                                var id = this[i][0];

                                if (id != null) {
                                    alreadyImportedModules[id] = true;
                                }
                            }
                        }

                        for (var _i = 0; _i < modules.length; _i++) {
                            var item = [].concat(modules[_i]);

                            if (dedupe && alreadyImportedModules[item[0]]) {
                                // eslint-disable-next-line no-continue
                                continue;
                            }

                            if (mediaQuery) {
                                if (!item[2]) {
                                    item[2] = mediaQuery;
                                } else {
                                    item[2] = ''.concat(mediaQuery, ' and ').concat(item[2]);
                                }
                            }

                            list.push(item);
                        }
                    };

                    return list;
                };

                function cssWithMappingToString(item, useSourceMap) {
                    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

                    var cssMapping = item[3];

                    if (!cssMapping) {
                        return content;
                    }

                    if (useSourceMap && typeof btoa === 'function') {
                        var sourceMapping = toComment(cssMapping);
                        var sourceURLs = cssMapping.sources.map(function(source) {
                            return '/*# sourceURL='
                                .concat(cssMapping.sourceRoot || '')
                                .concat(source, ' */');
                        });
                        return [content]
                            .concat(sourceURLs)
                            .concat([sourceMapping])
                            .join('\n');
                    }

                    return [content].join('\n');
                } // Adapted from convert-source-map (MIT)

                function toComment(sourceMap) {
                    // eslint-disable-next-line no-undef
                    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
                    var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                        base64,
                    );
                    return '/*# '.concat(data, ' */');
                }

                /***/
            },

        /***/ './node_modules/css-loader/dist/runtime/getUrl.js':
            /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                'use strict';

                module.exports = function(url, options) {
                    if (!options) {
                        // eslint-disable-next-line no-param-reassign
                        options = {};
                    } // eslint-disable-next-line no-underscore-dangle, no-param-reassign

                    url = url && url.__esModule ? url.default : url;

                    if (typeof url !== 'string') {
                        return url;
                    } // If url is already wrapped in quotes, remove them

                    if (/^['"].*['"]$/.test(url)) {
                        // eslint-disable-next-line no-param-reassign
                        url = url.slice(1, -1);
                    }

                    if (options.hash) {
                        // eslint-disable-next-line no-param-reassign
                        url += options.hash;
                    } // Should url be wrapped?
                    // See https://drafts.csswg.org/css-values-3/#urls

                    if (/["'() \t\n]/.test(url) || options.needQuotes) {
                        return '"'.concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"');
                    }

                    return url;
                };

                /***/
            },

        /***/ './node_modules/isomorphic-style-loader/insertCss.js':
            /*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                'use strict';
                /*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */

                var inserted = {};

                function b64EncodeUnicode(str) {
                    return btoa(
                        encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
                            return String.fromCharCode('0x' + p1);
                        }),
                    );
                }

                function removeCss(ids) {
                    ids.forEach(function(id) {
                        if (--inserted[id] <= 0) {
                            var elem = document.getElementById(id);

                            if (elem) {
                                elem.parentNode.removeChild(elem);
                            }
                        }
                    });
                }

                function insertCss(styles, _temp) {
                    var _ref = _temp === void 0 ? {} : _temp,
                        _ref$replace = _ref.replace,
                        replace = _ref$replace === void 0 ? false : _ref$replace,
                        _ref$prepend = _ref.prepend,
                        prepend = _ref$prepend === void 0 ? false : _ref$prepend,
                        _ref$prefix = _ref.prefix,
                        prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;

                    var ids = [];

                    for (var i = 0; i < styles.length; i++) {
                        var _styles$i = styles[i],
                            moduleId = _styles$i[0],
                            css = _styles$i[1],
                            media = _styles$i[2],
                            sourceMap = _styles$i[3];
                        var id = '' + prefix + moduleId + '-' + i;
                        ids.push(id);

                        if (inserted[id]) {
                            if (!replace) {
                                inserted[id]++;
                                continue;
                            }
                        }

                        inserted[id] = 1;
                        var elem = document.getElementById(id);
                        var create = false;

                        if (!elem) {
                            create = true;
                            elem = document.createElement('style');
                            elem.setAttribute('type', 'text/css');
                            elem.id = id;

                            if (media) {
                                elem.setAttribute('media', media);
                            }
                        }

                        var cssText = css;

                        if (sourceMap && typeof btoa === 'function') {
                            cssText +=
                                '\n/*# sourceMappingURL=data:application/json;base64,' +
                                b64EncodeUnicode(JSON.stringify(sourceMap)) +
                                '*/';
                            cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
                        }

                        if ('textContent' in elem) {
                            elem.textContent = cssText;
                        } else {
                            elem.styleSheet.cssText = cssText;
                        }

                        if (create) {
                            if (prepend) {
                                document.head.insertBefore(elem, document.head.childNodes[0]);
                            } else {
                                document.head.appendChild(elem);
                            }
                        }
                    }

                    return removeCss.bind(null, ids);
                }

                module.exports = insertCss;
                //# sourceMappingURL=insertCss.js.map

                /***/
            },

        /***/ './server/app.ts':
            /*!***********************!*\
  !*** ./server/app.ts ***!
  \***********************/
            /*! exports provided: bootstrap */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'bootstrap',
                    function() {
                        return bootstrap;
                    },
                );
                /* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! express */ 'express',
                );
                /* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    express__WEBPACK_IMPORTED_MODULE_0__,
                );
                /* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! morgan */ 'morgan',
                );
                /* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    morgan__WEBPACK_IMPORTED_MODULE_1__,
                );
                /* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! swagger-ui-express */ 'swagger-ui-express',
                );
                /* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    swagger_ui_express__WEBPACK_IMPORTED_MODULE_2__,
                );
                /* harmony import */ var _src_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! @src/server */ './src/server.tsx',
                );
                /* harmony import */ var _swagger_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./swagger.json */ './server/swagger.json',
                );
                var _swagger_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/ __webpack_require__.t(
                    /*! ./swagger.json */ './server/swagger.json',
                    1,
                );
                /* harmony import */ var _typeorm_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! ./typeorm.config */ './server/typeorm.config.ts',
                );
                /* harmony import */ var _connectDb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! ./connectDb */ './server/connectDb.ts',
                );

                __webpack_require__(/*! dotenv */ 'dotenv').config();

                const port = process.env.PORT;
                async function bootstrap(config) {
                    var _config$router;

                    const app = await express__WEBPACK_IMPORTED_MODULE_0___default()();
                    const dbConfig = {
                        ..._typeorm_config__WEBPACK_IMPORTED_MODULE_5__['typeOrmConfig'],
                    };
                    await Object(_connectDb__WEBPACK_IMPORTED_MODULE_6__['connectDb'])(dbConfig);
                    app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());
                    app.use(
                        express__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({
                            extended: true,
                        }),
                    );
                    app.use(morgan__WEBPACK_IMPORTED_MODULE_1___default()('combined'));
                    app.use(
                        '/swagger',
                        swagger_ui_express__WEBPACK_IMPORTED_MODULE_2___default.a.serve,
                        swagger_ui_express__WEBPACK_IMPORTED_MODULE_2___default.a.setup(
                            _swagger_json__WEBPACK_IMPORTED_MODULE_4__,
                        ),
                    );
                    const router = await ((_config$router = config.router) === null ||
                    _config$router === void 0
                        ? void 0
                        : _config$router.getRouter());

                    if (router) {
                        app.use('/api', router());
                    }

                    if (config.enableSSR) {
                        Object(_src_server__WEBPACK_IMPORTED_MODULE_3__['ssrFunction'])(app);
                    }

                    await app.listen(port, function() {
                        console.log(`Server is on the port ${port}`);
                    });
                }

                /***/
            },

        /***/ './server/components/builds/buildsEntity.ts':
            /*!**************************************************!*\
  !*** ./server/components/builds/buildsEntity.ts ***!
  \**************************************************/
            /*! exports provided: BuildStatus, Build */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'BuildStatus',
                    function() {
                        return BuildStatus;
                    },
                );
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'Build',
                    function() {
                        return Build;
                    },
                );
                /* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! typeorm */ 'typeorm',
                );
                /* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    typeorm__WEBPACK_IMPORTED_MODULE_0__,
                );
                var _dec,
                    _dec2,
                    _dec3,
                    _dec4,
                    _dec5,
                    _dec6,
                    _dec7,
                    _dec8,
                    _dec9,
                    _dec10,
                    _dec11,
                    _class,
                    _class2,
                    _descriptor,
                    _descriptor2,
                    _descriptor3,
                    _descriptor4,
                    _descriptor5,
                    _descriptor6,
                    _descriptor7,
                    _descriptor8,
                    _descriptor9,
                    _descriptor10,
                    _temp;

                function _initializerDefineProperty(target, property, descriptor, context) {
                    if (!descriptor) return;
                    Object.defineProperty(target, property, {
                        enumerable: descriptor.enumerable,
                        configurable: descriptor.configurable,
                        writable: descriptor.writable,
                        value: descriptor.initializer
                            ? descriptor.initializer.call(context)
                            : void 0,
                    });
                }

                function _defineProperty(obj, key, value) {
                    if (key in obj) {
                        Object.defineProperty(obj, key, {
                            value: value,
                            enumerable: true,
                            configurable: true,
                            writable: true,
                        });
                    } else {
                        obj[key] = value;
                    }
                    return obj;
                }

                function _applyDecoratedDescriptor(
                    target,
                    property,
                    decorators,
                    descriptor,
                    context,
                ) {
                    var desc = {};
                    Object.keys(descriptor).forEach(function(key) {
                        desc[key] = descriptor[key];
                    });
                    desc.enumerable = !!desc.enumerable;
                    desc.configurable = !!desc.configurable;
                    if ('value' in desc || desc.initializer) {
                        desc.writable = true;
                    }
                    desc = decorators
                        .slice()
                        .reverse()
                        .reduce(function(desc, decorator) {
                            return decorator(target, property, desc) || desc;
                        }, desc);
                    if (context && desc.initializer !== void 0) {
                        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
                        desc.initializer = undefined;
                    }
                    if (desc.initializer === void 0) {
                        Object.defineProperty(target, property, desc);
                        desc = null;
                    }
                    return desc;
                }

                function _initializerWarningHelper(descriptor, context) {
                    throw new Error(
                        'Decorating class property failed. Please ensure that ' +
                            'proposal-class-properties is enabled and runs after the decorators transform.',
                    );
                }

                let BuildStatus;

                (function(BuildStatus) {
                    BuildStatus['Waiting'] = 'Waiting';
                    BuildStatus['InProgress'] = 'InProgress';
                    BuildStatus['Success'] = 'Success';
                    BuildStatus['Fail'] = 'Fail';
                    BuildStatus['Cancelled'] = 'Cancelled';
                })(BuildStatus || (BuildStatus = {}));

                let Build =
                    ((_dec = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__['Entity'])('build')),
                    (_dec2 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__['PrimaryGeneratedColumn'])(
                        'uuid',
                    )),
                    (_dec3 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__['Column'])('text')),
                    (_dec4 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__['Column'])('text')),
                    (_dec5 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__['Column'])('text')),
                    (_dec6 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__['Column'])('text')),
                    (_dec7 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__['Column'])({
                        type: 'enum',
                        enum: BuildStatus,
                        default: BuildStatus.Waiting,
                    })),
                    (_dec8 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__['Column'])('text', {
                        nullable: true,
                    })),
                    (_dec9 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__['Column'])('text', {
                        nullable: true,
                    })),
                    (_dec10 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__['Column'])('text', {
                        nullable: true,
                    })),
                    (_dec11 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__['Column'])('int', {
                        nullable: true,
                    })),
                    _dec(
                        (_class =
                            ((_class2 =
                                ((_temp = class Build {
                                    constructor() {
                                        _initializerDefineProperty(this, 'id', _descriptor, this);

                                        _initializerDefineProperty(
                                            this,
                                            'commitMessage',
                                            _descriptor2,
                                            this,
                                        );

                                        _initializerDefineProperty(
                                            this,
                                            'commitHash',
                                            _descriptor3,
                                            this,
                                        );

                                        _initializerDefineProperty(
                                            this,
                                            'branchName',
                                            _descriptor4,
                                            this,
                                        );

                                        _initializerDefineProperty(
                                            this,
                                            'authorName',
                                            _descriptor5,
                                            this,
                                        );

                                        _initializerDefineProperty(
                                            this,
                                            'status',
                                            _descriptor6,
                                            this,
                                        );

                                        _initializerDefineProperty(
                                            this,
                                            'buildLogs',
                                            _descriptor7,
                                            this,
                                        );

                                        _initializerDefineProperty(
                                            this,
                                            'start',
                                            _descriptor8,
                                            this,
                                        );

                                        _initializerDefineProperty(
                                            this,
                                            'finish',
                                            _descriptor9,
                                            this,
                                        );

                                        _initializerDefineProperty(
                                            this,
                                            'duration',
                                            _descriptor10,
                                            this,
                                        );
                                    }
                                }),
                                _temp)),
                            ((_descriptor = _applyDecoratedDescriptor(
                                _class2.prototype,
                                'id',
                                [_dec2],
                                {
                                    configurable: true,
                                    enumerable: true,
                                    writable: true,
                                    initializer: null,
                                },
                            )),
                            (_descriptor2 = _applyDecoratedDescriptor(
                                _class2.prototype,
                                'commitMessage',
                                [_dec3],
                                {
                                    configurable: true,
                                    enumerable: true,
                                    writable: true,
                                    initializer: null,
                                },
                            )),
                            (_descriptor3 = _applyDecoratedDescriptor(
                                _class2.prototype,
                                'commitHash',
                                [_dec4],
                                {
                                    configurable: true,
                                    enumerable: true,
                                    writable: true,
                                    initializer: null,
                                },
                            )),
                            (_descriptor4 = _applyDecoratedDescriptor(
                                _class2.prototype,
                                'branchName',
                                [_dec5],
                                {
                                    configurable: true,
                                    enumerable: true,
                                    writable: true,
                                    initializer: null,
                                },
                            )),
                            (_descriptor5 = _applyDecoratedDescriptor(
                                _class2.prototype,
                                'authorName',
                                [_dec6],
                                {
                                    configurable: true,
                                    enumerable: true,
                                    writable: true,
                                    initializer: null,
                                },
                            )),
                            (_descriptor6 = _applyDecoratedDescriptor(
                                _class2.prototype,
                                'status',
                                [_dec7],
                                {
                                    configurable: true,
                                    enumerable: true,
                                    writable: true,
                                    initializer: null,
                                },
                            )),
                            (_descriptor7 = _applyDecoratedDescriptor(
                                _class2.prototype,
                                'buildLogs',
                                [_dec8],
                                {
                                    configurable: true,
                                    enumerable: true,
                                    writable: true,
                                    initializer: null,
                                },
                            )),
                            (_descriptor8 = _applyDecoratedDescriptor(
                                _class2.prototype,
                                'start',
                                [_dec9],
                                {
                                    configurable: true,
                                    enumerable: true,
                                    writable: true,
                                    initializer: null,
                                },
                            )),
                            (_descriptor9 = _applyDecoratedDescriptor(
                                _class2.prototype,
                                'finish',
                                [_dec10],
                                {
                                    configurable: true,
                                    enumerable: true,
                                    writable: true,
                                    initializer: null,
                                },
                            )),
                            (_descriptor10 = _applyDecoratedDescriptor(
                                _class2.prototype,
                                'duration',
                                [_dec11],
                                {
                                    configurable: true,
                                    enumerable: true,
                                    writable: true,
                                    initializer: null,
                                },
                            ))),
                            _class2)),
                    ) || _class);

                /***/
            },

        /***/ './server/components/settings/settingsEntity.ts':
            /*!******************************************************!*\
  !*** ./server/components/settings/settingsEntity.ts ***!
  \******************************************************/
            /*! exports provided: Settings */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'Settings',
                    function() {
                        return Settings;
                    },
                );
                /* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! typeorm */ 'typeorm',
                );
                /* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    typeorm__WEBPACK_IMPORTED_MODULE_0__,
                );
                var _dec,
                    _dec2,
                    _dec3,
                    _dec4,
                    _dec5,
                    _dec6,
                    _dec7,
                    _class,
                    _class2,
                    _descriptor,
                    _descriptor2,
                    _descriptor3,
                    _descriptor4,
                    _descriptor5,
                    _descriptor6,
                    _temp;

                function _initializerDefineProperty(target, property, descriptor, context) {
                    if (!descriptor) return;
                    Object.defineProperty(target, property, {
                        enumerable: descriptor.enumerable,
                        configurable: descriptor.configurable,
                        writable: descriptor.writable,
                        value: descriptor.initializer
                            ? descriptor.initializer.call(context)
                            : void 0,
                    });
                }

                function _defineProperty(obj, key, value) {
                    if (key in obj) {
                        Object.defineProperty(obj, key, {
                            value: value,
                            enumerable: true,
                            configurable: true,
                            writable: true,
                        });
                    } else {
                        obj[key] = value;
                    }
                    return obj;
                }

                function _applyDecoratedDescriptor(
                    target,
                    property,
                    decorators,
                    descriptor,
                    context,
                ) {
                    var desc = {};
                    Object.keys(descriptor).forEach(function(key) {
                        desc[key] = descriptor[key];
                    });
                    desc.enumerable = !!desc.enumerable;
                    desc.configurable = !!desc.configurable;
                    if ('value' in desc || desc.initializer) {
                        desc.writable = true;
                    }
                    desc = decorators
                        .slice()
                        .reverse()
                        .reduce(function(desc, decorator) {
                            return decorator(target, property, desc) || desc;
                        }, desc);
                    if (context && desc.initializer !== void 0) {
                        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
                        desc.initializer = undefined;
                    }
                    if (desc.initializer === void 0) {
                        Object.defineProperty(target, property, desc);
                        desc = null;
                    }
                    return desc;
                }

                function _initializerWarningHelper(descriptor, context) {
                    throw new Error(
                        'Decorating class property failed. Please ensure that ' +
                            'proposal-class-properties is enabled and runs after the decorators transform.',
                    );
                }

                let Settings =
                    ((_dec = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__['Entity'])('Settings')),
                    (_dec2 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__['PrimaryGeneratedColumn'])(
                        'uuid',
                    )),
                    (_dec3 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__['Column'])('text')),
                    (_dec4 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__['Column'])('text')),
                    (_dec5 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__['Column'])('text')),
                    (_dec6 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__['Column'])('text')),
                    (_dec7 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__['Column'])('int')),
                    _dec(
                        (_class =
                            ((_class2 =
                                ((_temp = class Settings {
                                    constructor() {
                                        _initializerDefineProperty(this, 'id', _descriptor, this);

                                        _initializerDefineProperty(
                                            this,
                                            'userName',
                                            _descriptor2,
                                            this,
                                        );

                                        _initializerDefineProperty(
                                            this,
                                            'repoName',
                                            _descriptor3,
                                            this,
                                        );

                                        _initializerDefineProperty(
                                            this,
                                            'buildCommand',
                                            _descriptor4,
                                            this,
                                        );

                                        _initializerDefineProperty(
                                            this,
                                            'mainBranch',
                                            _descriptor5,
                                            this,
                                        );

                                        _initializerDefineProperty(
                                            this,
                                            'timePeriod',
                                            _descriptor6,
                                            this,
                                        );
                                    }
                                }),
                                _temp)),
                            ((_descriptor = _applyDecoratedDescriptor(
                                _class2.prototype,
                                'id',
                                [_dec2],
                                {
                                    configurable: true,
                                    enumerable: true,
                                    writable: true,
                                    initializer: null,
                                },
                            )),
                            (_descriptor2 = _applyDecoratedDescriptor(
                                _class2.prototype,
                                'userName',
                                [_dec3],
                                {
                                    configurable: true,
                                    enumerable: true,
                                    writable: true,
                                    initializer: null,
                                },
                            )),
                            (_descriptor3 = _applyDecoratedDescriptor(
                                _class2.prototype,
                                'repoName',
                                [_dec4],
                                {
                                    configurable: true,
                                    enumerable: true,
                                    writable: true,
                                    initializer: null,
                                },
                            )),
                            (_descriptor4 = _applyDecoratedDescriptor(
                                _class2.prototype,
                                'buildCommand',
                                [_dec5],
                                {
                                    configurable: true,
                                    enumerable: true,
                                    writable: true,
                                    initializer: null,
                                },
                            )),
                            (_descriptor5 = _applyDecoratedDescriptor(
                                _class2.prototype,
                                'mainBranch',
                                [_dec6],
                                {
                                    configurable: true,
                                    enumerable: true,
                                    writable: true,
                                    initializer: null,
                                },
                            )),
                            (_descriptor6 = _applyDecoratedDescriptor(
                                _class2.prototype,
                                'timePeriod',
                                [_dec7],
                                {
                                    configurable: true,
                                    enumerable: true,
                                    writable: true,
                                    initializer: null,
                                },
                            ))),
                            _class2)),
                    ) || _class);

                /***/
            },

        /***/ './server/connectDb.ts':
            /*!*****************************!*\
  !*** ./server/connectDb.ts ***!
  \*****************************/
            /*! exports provided: connectDb */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'connectDb',
                    function() {
                        return connectDb;
                    },
                );
                /* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! typeorm */ 'typeorm',
                );
                /* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    typeorm__WEBPACK_IMPORTED_MODULE_0__,
                );
                /* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! pino */ 'pino',
                );
                /* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    pino__WEBPACK_IMPORTED_MODULE_1__,
                );

                const logger = pino__WEBPACK_IMPORTED_MODULE_1___default()({
                    level: 'info',
                    prettyPrint: true,
                });
                const connectDb = async (typeOrmConfig, retries = 2) => {
                    while (retries) {
                        try {
                            await Object(typeorm__WEBPACK_IMPORTED_MODULE_0__['createConnection'])(
                                typeOrmConfig,
                            )
                                .then(() => {
                                    // here you can start to work with your entities
                                })
                                .catch(error => {
                                    throw new Error(error.name);
                                });
                        } catch (err) {
                            if (err.name === 'AlreadyHasActiveConnectionError') {
                                return Object(
                                    typeorm__WEBPACK_IMPORTED_MODULE_0__['getConnection'],
                                )('default');
                            }

                            retries--;
                            logger.info(`Attempts left: ${retries}`);
                            await new Promise(res => setTimeout(res, 2000));
                        }
                    }
                };

                /***/
            },

        /***/ './server/index.ts':
            /*!*************************!*\
  !*** ./server/index.ts ***!
  \*************************/
            /*! no exports provided */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./app */ './server/app.ts',
                );

                Object(_app__WEBPACK_IMPORTED_MODULE_0__['bootstrap'])({
                    port: 8080,
                    enableSSR: true,
                    router: {
                        prefix: '/api',
                        getRouter: async () => {
                            const getRouter = await __webpack_require__
                                .e(/*! import() */ 0)
                                .then(
                                    __webpack_require__.bind(
                                        null,
                                        /*! ./components/routes */ './server/components/routes.ts',
                                    ),
                                );
                            return getRouter.default;
                        },
                    },
                });

                /***/
            },

        /***/ './server/swagger.json':
            /*!*****************************!*\
  !*** ./server/swagger.json ***!
  \*****************************/
            /*! exports provided: swagger, info, basePath, paths, definitions, externalDocs, default */
            /***/ function(module) {
                module.exports = JSON.parse(
                    '{"swagger":"2.0","info":{"description":"This is a CI server.","version":"1.0.0","title":"CI server","contact":{"email":"elhazne@gmail.com"}},"basePath":"/v2","paths":{"/api/settings":{"get":{"tags":["settings"],"summary":"Get current settings","description":"Get current settings","operationId":"getSettings","consumes":["application/json","application/xml"],"produces":["application/xml","application/json"],"responses":{"200":{"description":"successful operation","schema":{"type":"object","items":{"$ref":"#/definitions/Settings"}}},"400":{"description":"Cannot get current settings"}}},"post":{"tags":["settings"],"summary":"Set new settings","description":"Set new settings","operationId":"postSettings","consumes":["application/json","application/xml"],"produces":["application/xml","application/json"],"parameters":[{"name":"repoName","in":"formData","description":"Name of repo","required":true,"type":"string"},{"name":"buildCommand","in":"formData","description":"Command npm run ---","required":true,"type":"string"},{"name":"mainBranch","in":"formData","description":"Name of the main branch","required":true,"type":"string"},{"name":"period","in":"formData","description":"Period","required":true,"type":"number"}],"responses":{"200":{"description":"successful operation","schema":{"type":"object","items":{"$ref":"#/definitions/Settings"}}},"400":{"description":"Add description"},"404":{"description":"Add description"},"405":{"description":"Add description"}}}},"/api/builds":{"get":{"tags":["builds"],"summary":"Get list of builds","description":"Get list of builds","operationId":"getBuilds","produces":["application/xml","application/json"],"responses":{"200":{"description":"successful operation","schema":{"type":"array","items":{"$ref":"#/definitions/Build"}}},"400":{"description":"Invalid status value"}}}},"/pet/findByTags":{"get":{"tags":["pet"],"summary":"Finds Pets by tags","description":"Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.","operationId":"findPetsByTags","produces":["application/xml","application/json"],"parameters":[{"name":"tags","in":"query","description":"Tags to filter by","required":true,"type":"array","items":{"type":"string"},"collectionFormat":"multi"}],"responses":{"200":{"description":"successful operation","schema":{"type":"array","items":{"$ref":"#/definitions/Pet"}}},"400":{"description":"Invalid tag value"}},"security":[{"petstore_auth":["write:pets","read:pets"]}],"deprecated":true}},"/pet/{petId}":{"get":{"tags":["pet"],"summary":"Find pet by ID","description":"Returns a single pet","operationId":"getPetById","produces":["application/xml","application/json"],"parameters":[{"name":"petId","in":"path","description":"ID of pet to return","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"successful operation","schema":{"$ref":"#/definitions/Pet"}},"400":{"description":"Invalid ID supplied"},"404":{"description":"Pet not found"}},"security":[{"api_key":[]}]},"post":{"tags":["pet"],"summary":"Updates a pet in the store with form data","description":"","operationId":"updatePetWithForm","consumes":["application/x-www-form-urlencoded"],"produces":["application/xml","application/json"],"parameters":[{"name":"petId","in":"path","description":"ID of pet that needs to be updated","required":true,"type":"integer","format":"int64"},{"name":"name","in":"formData","description":"Updated name of the pet","required":false,"type":"string"},{"name":"status","in":"formData","description":"Updated status of the pet","required":false,"type":"string"}],"responses":{"405":{"description":"Invalid input"}},"security":[{"petstore_auth":["write:pets","read:pets"]}]},"delete":{"tags":["pet"],"summary":"Deletes a pet","description":"","operationId":"deletePet","produces":["application/xml","application/json"],"parameters":[{"name":"api_key","in":"header","required":false,"type":"string"},{"name":"petId","in":"path","description":"Pet id to delete","required":true,"type":"integer","format":"int64"}],"responses":{"400":{"description":"Invalid ID supplied"},"404":{"description":"Pet not found"}},"security":[{"petstore_auth":["write:pets","read:pets"]}]}},"/pet/{petId}/uploadImage":{"post":{"tags":["pet"],"summary":"uploads an image","description":"","operationId":"uploadFile","consumes":["multipart/form-data"],"produces":["application/json"],"parameters":[{"name":"petId","in":"path","description":"ID of pet to update","required":true,"type":"integer","format":"int64"},{"name":"additionalMetadata","in":"formData","description":"Additional data to pass to server","required":false,"type":"string"},{"name":"file","in":"formData","description":"file to upload","required":false,"type":"file"}],"responses":{"200":{"description":"successful operation","schema":{"$ref":"#/definitions/ApiResponse"}}},"security":[{"petstore_auth":["write:pets","read:pets"]}]}}},"definitions":{"Build":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"Build"}},"Settings":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"username":{"type":"string"},"firstName":{"type":"string"},"lastName":{"type":"string"},"email":{"type":"string"},"password":{"type":"string"},"phone":{"type":"string"},"userStatus":{"type":"integer","format":"int32","description":"User Status"}},"xml":{"name":"Settings"}},"Pet":{"type":"object","required":["name","photoUrls"],"properties":{"id":{"type":"integer","format":"int64"},"category":{"$ref":"#/definitions/Settings"},"name":{"type":"string","example":"doggie"},"photoUrls":{"type":"array","xml":{"name":"photoUrl","wrapped":true},"items":{"type":"string"}},"tags":{"type":"array","xml":{"name":"tag","wrapped":true},"items":{"$ref":"#/definitions/Build"}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"xml":{"name":"Pet"}}},"externalDocs":{"description":"Find out more about Swagger","url":"http://swagger.io"}}',
                );

                /***/
            },

        /***/ './server/typeorm.config.ts':
            /*!**********************************!*\
  !*** ./server/typeorm.config.ts ***!
  \**********************************/
            /*! exports provided: typeOrmConfig */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'typeOrmConfig',
                    function() {
                        return typeOrmConfig;
                    },
                );
                /* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! dotenv */ 'dotenv',
                );
                /* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    dotenv__WEBPACK_IMPORTED_MODULE_0__,
                );
                /* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! path */ 'path',
                );
                /* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    path__WEBPACK_IMPORTED_MODULE_1__,
                );
                /* harmony import */ var _components_settings_settingsEntity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./components/settings/settingsEntity */ './server/components/settings/settingsEntity.ts',
                );
                /* harmony import */ var _components_builds_buildsEntity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./components/builds/buildsEntity */ './server/components/builds/buildsEntity.ts',
                );

                const root = process.cwd();
                Object(dotenv__WEBPACK_IMPORTED_MODULE_0__['config'])({
                    path: path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(root, '.env'),
                });
                const typeOrmConfig = {
                    type: 'postgres',
                    username: process.env.POSTGRES_USER,
                    host: process.env.DATABASE_HOST,
                    database: process.env.POSTGRES_DB,
                    password: process.env.POSTGRES_PASSWORD,
                    port: Number(process.env.POSTGRES_PORT) || 5432,
                    synchronize: true,
                    entities: [
                        _components_settings_settingsEntity__WEBPACK_IMPORTED_MODULE_2__[
                            'Settings'
                        ],
                        _components_builds_buildsEntity__WEBPACK_IMPORTED_MODULE_3__['Build'],
                    ],
                };

                /***/
            },

        /***/ './src/core/api/agent.ts':
            /*!*******************************!*\
  !*** ./src/core/api/agent.ts ***!
  \*******************************/
            /*! exports provided: Activities */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'Activities',
                    function() {
                        return Activities;
                    },
                );
                /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! axios */ 'axios',
                );
                /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    axios__WEBPACK_IMPORTED_MODULE_0__,
                );

                axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL =
                    'http://localhost:8080/api';

                const responseBody = response => response.data;

                const requests = {
                    get: url =>
                        axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(responseBody),
                    post: (url, body) =>
                        axios__WEBPACK_IMPORTED_MODULE_0___default.a
                            .post(url, body)
                            .then(responseBody),
                    put: (url, body) =>
                        axios__WEBPACK_IMPORTED_MODULE_0___default.a
                            .put(url, body)
                            .then(responseBody),
                    delete: url =>
                        axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(url).then(responseBody),
                };
                const Activities = {
                    getSettings: () => requests.get('/settings'),
                    saveSettings: settings => requests.post('/settings', settings),
                    getBuilds: () => requests.get('/builds'),
                    saveBuild: commitHash => requests.post('/builds', commitHash),
                    getBuildDetails: id => requests.get(`/builds/${id}`),
                    getBuildLogs: id => requests.get(`/builds/${id}/logs`),
                    deleteBuilds: () => requests.delete('/builds'),
                };

                /***/
            },

        /***/ './src/core/assets/fonts/icomoon.eot?23nkz4':
            /*!**************************************************!*\
  !*** ./src/core/assets/fonts/icomoon.eot?23nkz4 ***!
  \**************************************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    'data:application/vnd.ms-fontobject;base64,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';

                /***/
            },

        /***/ './src/core/assets/fonts/icomoon.svg?23nkz4':
            /*!**************************************************!*\
  !*** ./src/core/assets/fonts/icomoon.svg?23nkz4 ***!
  \**************************************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+R2VuZXJhdGVkIGJ5IEljb01vb248L21ldGFkYXRhPgo8ZGVmcz4KPGZvbnQgaWQ9Imljb21vb24iIGhvcml6LWFkdi14PSIxMDI0Ij4KPGZvbnQtZmFjZSB1bml0cy1wZXItZW09IjEwMjQiIGFzY2VudD0iOTYwIiBkZXNjZW50PSItNjQiIC8+CjxtaXNzaW5nLWdseXBoIGhvcml6LWFkdi14PSIxMDI0IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4MjA7IiBob3Jpei1hZHYteD0iNTEyIiBkPSIiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTAwOyIgZ2x5cGgtbmFtZT0iY2FsZW5kYXIiIGQ9Ik0zNTguOTE2IDM4NGgtNzkuNzA3Yy0xMy4xNTIgMC0yMy45MTIgMTAuOC0yMy45MTIgMjR2ODBjMCAxMy4yIDEwLjc2IDI0IDIzLjkxMiAyNGg3OS43MDdjMTMuMTUxIDAgMjMuOTEyLTEwLjggMjMuOTEyLTI0di04MGMwLTEzLjItMTAuNzYxLTI0LTIzLjkxMi0yNHpNNTc0LjEyNSA0MDh2ODBjMCAxMy4yLTEwLjc2MSAyNC0yMy45MTIgMjRoLTc5LjcwN2MtMTMuMTUyIDAtMjMuOTEyLTEwLjgtMjMuOTEyLTI0di04MGMwLTEzLjIgMTAuNzYtMjQgMjMuOTEyLTI0aDc5LjcwN2MxMy4xNTEgMCAyMy45MTIgMTAuOCAyMy45MTIgMjR6TTc2NS40MjEgNDA4djgwYzAgMTMuMi0xMC43NTggMjQtMjMuOTEgMjRoLTc5LjcwOGMtMTMuMTUxIDAtMjMuOTEyLTEwLjgtMjMuOTEyLTI0di04MGMwLTEzLjIgMTAuNzYxLTI0IDIzLjkxMi0yNGg3OS43MDhjMTMuMTUyIDAgMjMuOTEgMTAuOCAyMy45MSAyNHpNNTc0LjEyNSAyMTZ2ODBjMCAxMy4yMDMtMTAuNzYxIDI0LTIzLjkxMiAyNGgtNzkuNzA3Yy0xMy4xNTIgMC0yMy45MTItMTAuNzk3LTIzLjkxMi0yNHYtODBjMC0xMy4yMDMgMTAuNzYtMjQgMjMuOTEyLTI0aDc5LjcwN2MxMy4xNTEgMCAyMy45MTIgMTAuNzk3IDIzLjkxMiAyNHpNMzgyLjgyOCAyMTZ2ODBjMCAxMy4yMDMtMTAuNzYxIDI0LTIzLjkxMiAyNGgtNzkuNzA3Yy0xMy4xNTIgMC0yMy45MTItMTAuNzk3LTIzLjkxMi0yNHYtODBjMC0xMy4yMDMgMTAuNzYtMjQgMjMuOTEyLTI0aDc5LjcwN2MxMy4xNTEgMCAyMy45MTIgMTAuNzk3IDIzLjkxMiAyNHpNNzY1LjQyMSAyMTZ2ODBjMCAxMy4yMDMtMTAuNzU4IDI0LTIzLjkxIDI0aC03OS43MDhjLTEzLjE1MSAwLTIzLjkxMi0xMC43OTctMjMuOTEyLTI0di04MGMwLTEzLjIwMyAxMC43NjEtMjQgMjMuOTEyLTI0aDc5LjcwOGMxMy4xNTIgMCAyMy45MSAxMC43OTcgMjMuOTEgMjR6TTk1Ni43MTcgNzM2di03MDRjMC01Mi45OTgtNDIuODQyLTk2LTk1LjY0OC05NmgtNzAxLjQyYy01Mi44MDYgMC05NS42NDkgNDMuMDAyLTk1LjY0OSA5NnY3MDRjMCA1MyA0Mi44NDIgOTYgOTUuNjQ5IDk2aDk1LjY0OHYxMDRjMCAxMy4yIDEwLjc2IDI0IDIzLjkxMiAyNGg3OS43MDdjMTMuMTUxIDAgMjMuOTEyLTEwLjggMjMuOTEyLTI0di0xMDRoMjU1LjA2MnYxMDRjMCAxMy4yIDEwLjc2MSAyNCAyMy45MTIgMjRoNzkuNzA4YzEzLjE1MiAwIDIzLjkxLTEwLjggMjMuOTEtMjR2LTEwNGg5NS42NDhjNTIuODA2IDAgOTUuNjQ4LTQzIDk1LjY0OC05NnpNODYxLjA2OSA0NHY1OTZoLTcwMS40MnYtNTk2YzAtNi41OTggNS4zOC0xMiAxMS45NTYtMTJoNjc3LjUwOWM2LjU3MyAwIDExLjk1NSA1LjQwMiAxMS45NTUgMTJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMTsiIGdseXBoLW5hbWU9ImNsb2NrIiBkPSJNNTEyIDk2MGMtMjgyLjgzOSAwLTUxMi0yMjkuMTYxLTUxMi01MTJzMjI5LjE2MS01MTIgNTEyLTUxMmMyODIuODM4IDAgNTEyIDIyOS4xNjIgNTEyIDUxMnMtMjI5LjE2MiA1MTItNTEyIDUxMnpNNzAyLjk0OCAzMTMuODA1bC00MS4yOS01MS42MWMtMi43MDktMy4zODktNi4wNjAtNi4yMDktOS44NjMtOC4zMDQtMy43OTgtMi4wOTUtNy45NzMtMy40MTYtMTIuMjgzLTMuODk2LTQuMzE1LTAuNDc5LTguNjc2LTAuMTAyLTEyLjg0MiAxLjEwM3MtOC4wNTcgMy4yMjYtMTEuNDQ2IDUuOTM1bC0xMzguMzE5IDEwMi42NDdjLTkuNjY3IDcuNzM2LTE3LjQ2OCAxNy41NTItMjIuODI4IDI4LjcwOS01LjM2IDExLjE2Mi04LjE0MyAyMy4zODQtOC4xNDEgMzUuNzY2djMyMS4xMzZjMCA4Ljc2IDMuNDggMTcuMTYyIDkuNjc1IDIzLjM1N3MxNC41OTcgOS42NzUgMjMuMzU3IDkuNjc1aDY2LjA2N2M4Ljc2IDAgMTcuMTYxLTMuNDggMjMuMzU3LTkuNjc1czkuNjc3LTE0LjU5NyA5LjY3Ny0yMy4zNTd2LTI5Ny4yOWwxMTkuNzM4LTg3Ljc0M2MzLjM4OS0yLjcwOSA2LjIxNC02LjA2NSA4LjMwNC05Ljg2OCAyLjA5NS0zLjc5OCAzLjQxNi03Ljk3OCAzLjg5Ni0xMi4yOTMgMC40NzUtNC4zMTUgMC4wOTgtOC42ODEtMS4xMTItMTIuODQ3LTEuMjEtNC4xNy0zLjIzLTguMDU3LTUuOTQ0LTExLjQ0NnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTAyOyIgZ2x5cGgtbmFtZT0iY29kZS1jb21taXQiIGQ9Ik0yMDQuOCA0NDhjMC0xNy4yOCAxLjQ0LTM0LjQgNC4xNi01MS4yaC0xODkuNzZjLTEwLjU2IDAtMTkuMiA4LjY0LTE5LjIgMTkuMnY2NGMwIDEwLjU2IDguNjQgMTkuMiAxOS4yIDE5LjJoMTg5Ljc2Yy0yLjcyLTE2LjgtNC4xNi0zMy45Mi00LjE2LTUxLjJ6TTEwMDQuOCA0OTkuMmgtMTg5Ljc2YzIuODgtMTYuOCA0LjE2LTMzLjkyIDQuMTYtNTEuMnMtMS40NC0zNC40LTQuMTYtNTEuMmgxODkuNzZjMTAuNTYgMCAxOS4yIDguNjQgMTkuMiAxOS4ydjY0YzAgMTAuNTYtOC42NCAxOS4yLTE5LjIgMTkuMnpNNTEyIDYyNy4yYy00Ny44NCAwLTkyLjgtMTguNzItMTI2LjcyLTUyLjQ4LTMzLjkyLTMzLjkyLTUyLjQ4LTc4Ljg4LTUyLjQ4LTEyNi43MnMxOC41Ni05Mi44IDUyLjQ4LTEyNi43MmMzMy45Mi0zMy43NiA3OC44OC01Mi40OCAxMjYuNzItNTIuNDhzOTIuOCAxOC43MiAxMjYuNzIgNTIuNDhjMzMuOTIgMzMuOTIgNTIuNDggNzguODggNTIuNDggMTI2Ljcycy0xOC41NiA5Mi44LTUyLjQ4IDEyNi43MmMtMzMuOTIgMzMuNzYtNzguODggNTIuNDgtMTI2LjcyIDUyLjQ4ek01MTIgNzA0YzE0MS40NCAwIDI1Ni0xMTQuNTYgMjU2LTI1NnMtMTE0LjU2LTI1Ni0yNTYtMjU2Yy0xNDEuNDQgMC0yNTYgMTE0LjU2LTI1NiAyNTZzMTE0LjU2IDI1NiAyNTYgMjU2eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDM7IiBnbHlwaC1uYW1lPSJjcm9zcyIgZD0iTTUxMi02NGMtMjgxLjYgMC01MTIgMjMwLjQtNTEyIDUxMnMyMzAuNCA1MTIgNTEyIDUxMmMyODEuNiAwIDUxMi0yMzAuNCA1MTItNTEycy0yMzAuNC01MTItNTEyLTUxMnpNNzY4IDYzMi4zMmwtNzEuNjggNzEuNjgtMTg0LjMyLTE4NC4zMi0xODQuMzIgMTg0LjMyLTcxLjY4LTcxLjY4IDE4NC4zMi0xODQuMzItMTg0LjMyLTE4NC4zMiA3MS42OC03MS42OCAxODQuMzIgMTg0LjMyIDE4NC4zMi0xODQuMzIgNzEuNjggNzEuNjgtMTg0LjMyIDE4NC4zMiAxODQuMzIgMTg0LjMyeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDQ7IiBnbHlwaC1uYW1lPSJwbGF5IiBkPSJNODk5Ljk2NiA1MzAuNjgybC03MDMuOTcxIDQxNi4xODNjLTU3LjE5OCAzMy43OTktMTQ0Ljc5NSAxLTE0NC43OTUtODIuNTk3di04MzIuMTY3YzAtNzQuOTk3IDgxLjM5Ny0xMjAuMTk2IDE0NC43OTUtODIuNTk2bDcwMy45NzEgNDE1Ljk4M2M2Mi43OTcgMzYuOTk4IDYyLjk5OCAxMjguMTk1IDAgMTY1LjE5NHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTA1OyIgZ2x5cGgtbmFtZT0icmVidWlsZCIgZD0iTTc0OC44NDEgNzAxLjM1N2MtNjQuNTQgNjAuNDMzLTE0OC4yOTggOTMuNTYtMjM3LjE1NSA5My40ODItMTU5LjkxMy0wLjE0MS0yOTcuOTY3LTEwOS43ODctMzM2LjA4NC0yNjEuODg1LTIuNzc1LTExLjA3Mi0xMi42MzktMTguODktMjQuMDU0LTE4Ljg5aC0xMTguMzAzYy0xNS40OCAwLTI3LjIzOSAxNC4wNTQtMjQuMzc2IDI5LjI2NyA0NC42NyAyMzcuMjEzIDI1Mi45MzkgNDE2LjY2OSA1MDMuMTMxIDQxNi42NjkgMTM3LjE4MyAwIDI2MS43NjItNTMuOTU4IDM1My42ODEtMTQxLjgwMWw3My43MzcgNzMuNzM0YzMxLjIxNSAzMS4yMTMgODQuNTgyIDkuMTA3IDg0LjU4Mi0zNS4wMzd2LTI3Ni43NjdjMC0yNy4zNjYtMjIuMTg3LTQ5LjU0OS00OS41NDUtNDkuNTQ5aC0yNzYuNzcxYy00NC4xNDMgMC02Ni4yNSA1My4zNy0zNS4wMzcgODQuNTg2bDg2LjE5MyA4Ni4xOTF6TTQ5LjU0OCAzNjUuNDJoMjc2Ljc2N2M0NC4xNDMgMCA2Ni4yNS01My4zNyAzNS4wMzctODQuNTg2bC04Ni4xOTMtODYuMTkzYzY0LjU0LTYwLjQzNCAxNDguMzA0LTkzLjU2MyAyMzcuMTYzLTkzLjQ3OCAxNTkuODMxIDAuMTQ1IDI5Ny45NDEgMTA5LjcxMyAzMzYuMDc3IDI2MS44NzkgMi43NzQgMTEuMDcyIDEyLjY0IDE4Ljg5IDI0LjA0OSAxOC44OWgxMTguMzA2YzE1LjQ3OSAwIDI3LjIzOC0xNC4wNTQgMjQuMzgtMjkuMjY3LTQ0LjY3Mi0yMzcuMjA5LTI1Mi45NDItNDE2LjY2NS01MDMuMTM0LTQxNi42NjUtMTM3LjE4MyAwLTI2MS43NjIgNTMuOTU2LTM1My42ODMgMTQxLjc5OGwtNzMuNzM0LTczLjcyOGMtMzEuMjEzLTMxLjIxNS04NC41ODMtOS4xMTQtODQuNTgzIDM1LjAzOHYyNzYuNzYyYzAgMjcuMzY2IDIyLjE4MyA0OS41NDkgNDkuNTQ4IDQ5LjU0OXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTA2OyIgZ2x5cGgtbmFtZT0ic2V0dGluZ3MiIGQ9Ik05NzguNDE1IDMyNC45NTVsLTg3Ljk0NSA1MC43ODdjOC44NzUgNDcuODk3IDguODc1IDk3LjAzMiAwIDE0NC45MjhsODcuOTQ1IDUwLjc4N2MxMC4xMjEgNS43OCAxNC42NiAxNy43NTQgMTEuMzU4IDI4LjkwMy0yMi45MjEgNzMuNDk2LTYxLjkzNSAxMzkuOTczLTExMi45MyAxOTUuMzAyLTcuODQyIDguNDY0LTIwLjY0MiAxMC41MjgtMzAuNTU0IDQuNzQ4bC04Ny45NDgtNTAuNzg3Yy0zNi45NTUgMzEuNzkzLTc5LjQ4NCA1Ni4zNjItMTI1LjUyMiA3Mi40NjR2MTAxLjM2OGMwIDExLjU2MS04LjA1MiAyMS42NzctMTkuNDA3IDI0LjE1NS03NS43NjcgMTYuOTI5LTE1My4zOTMgMTYuMTAzLTIyNS40NDUgMC0xMS4zNTQtMi40NzctMTkuNDA3LTEyLjU5My0xOS40MDctMjQuMTU1di0xMDEuNTczYy00NS44MzItMTYuMzEtODguMzYxLTQwLjg3OC0xMjUuNTIyLTcyLjQ2NWwtODcuNzQxIDUwLjc4N2MtMTAuMTE2IDUuNzgxLTIyLjcxIDMuOTIzLTMwLjU1NC00Ljc0OC01MC45OTQtNTUuMTIzLTkwLjAxMy0xMjEuNi0xMTIuOTI5LTE5NS4zMDItMy41MS0xMS4xNDkgMS4yMzktMjMuMTIzIDExLjM1NS0yOC45MDNsODcuOTQ4LTUwLjc4N2MtOC44NzctNDcuODk3LTguODc3LTk3LjAzMiAwLTE0NC45MjhsLTg3Ljk0OC01MC43ODdjLTEwLjExNi01Ljc4LTE0LjY1OC0xNy43NTQtMTEuMzU1LTI4LjkwMyAyMi45MTYtNzMuNDk2IDYxLjkzNS0xMzkuOTczIDExMi45MjktMTk1LjMwNiA3Ljg0NS04LjQ2NSAyMC42NDUtMTAuNTIyIDMwLjU1NC00Ljc0NWw4Ny45NDggNTAuNzg3YzM2Ljk1NC0zMS43OTMgNzkuNDg0LTU2LjM1OSAxMjUuNTIyLTcyLjQ2MnYtMTAxLjU4MWMwLTExLjU1NCA4LjA1Mi0yMS42NzUgMTkuNDA3LTI0LjE0OSA3NS43NjctMTYuOTMgMTUzLjM5My0xNi4xMDIgMjI1LjQ0NSAwIDExLjM1NCAyLjQ3NSAxOS40MDcgMTIuNTk1IDE5LjQwNyAyNC4xNDl2MTAxLjU4MWM0NS44MzIgMTYuMzA3IDg4LjM2IDQwLjg3NSAxMjUuNTIyIDcyLjQ2Mmw4Ny45NDgtNTAuNzg3YzEwLjExNS01Ljc3NyAyMi43MS0zLjkyNSAzMC41NTIgNC43NDUgNTAuOTk1IDU1LjEyNiA5MC4wMTggMTIxLjYwMyAxMTIuOTMgMTk1LjMwNiAzLjA5OCAxMS4zNTUtMS40NDIgMjMuMzI5LTExLjU2MyAyOS4xMXpNNTAwLjY5MSAyODMuMDQ2Yy05MS4wNDYgMC0xNjUuMTYxIDc0LjExNi0xNjUuMTYxIDE2NS4xNjFzNzQuMTE1IDE2NS4xNjEgMTY1LjE2MSAxNjUuMTYxYzkxLjA0NSAwIDE2NS4xNi03NC4xMTYgMTY1LjE2LTE2NS4xNjFzLTc0LjExNS0xNjUuMTYxLTE2NS4xNi0xNjUuMTYxeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDc7IiBnbHlwaC1uYW1lPSJ0aWNrIiBkPSJNMTAwNy45OTggNDQ4YzAtMjczLjkzNC0yMjIuMDY0LTQ5NS45OTgtNDk1Ljk5OC00OTUuOTk4cy00OTYgMjIyLjA2NC00OTYgNDk1Ljk5OGMwIDI3My45MzQgMjIyLjA2NiA0OTYgNDk2IDQ5NnM0OTUuOTk4LTIyMi4wNjYgNDk1Ljk5OC00OTZ6TTQ1NC42MjggMTg1LjM3MmwzNjcuOTk4IDM2OGMxMi40OTcgMTIuNDk2IDEyLjQ5NyAzMi43NTggMCA0NS4yNTRsLTQ1LjI1MSA0NS4yNTRjLTEyLjQ5NyAxMi40OTgtMzIuNzU5IDEyLjQ5OC00NS4yNTYgMGwtMzAwLjExOC0zMDAuMTE0LTE0MC4xMTggMTQwLjExNmMtMTIuNDk2IDEyLjQ5Ni0zMi43NTggMTIuNDk2LTQ1LjI1NiAwbC00NS4yNTQtNDUuMjU2Yy0xMi40OTYtMTIuNDkzLTEyLjQ5Ni0zMi43NTQgMC00NS4yNTFsMjA4LTIwOC4wMDJjMTIuNDk4LTEyLjQ5NyAzMi43NTgtMTIuNDk3IDQ1LjI1NiAweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDg7IiBnbHlwaC1uYW1lPSJ0aW1lciIgZD0iTTg0OS44NDMgNTkybDQ1LjA4OCA0NS4yYzkuMzgyIDkuNCA5LjM4MiAyNC42IDAgMzRsLTMzLjkxNCAzNGMtOS4zNzYgOS40LTI0LjUzOCA5LjQtMzMuOTE0IDBsLTQxLjI5OS00MS40Yy02Mi4wNDggNTUtMTQwLjQ1MSA5MS44LTIyNy4wMzYgMTAxLjZ2OTguNmg1NS44NjFjMTMuMTY3IDAgMjMuOTQgMTAuOCAyMy45NCAyNHY0OGMwIDEzLjItMTAuNzczIDI0LTIzLjk0IDI0aC0yMDcuNDg1Yy0xMy4xNjcgMC0yMy45NC0xMC44LTIzLjk0LTI0di00OGMwLTEzLjIgMTAuNzczLTI0IDIzLjk0LTI0aDU1Ljg2MXYtOTguOGMtMjA2LjY4Ny0yMy44LTM2Ny4wODgtMTk5LjYtMzY3LjA4OC00MTMuMiAwLTIyOS43OTggMTg1LjczOS00MTYgNDE0Ljk3LTQxNiAyMjkuMjI4IDAgNDE0Ljk2OCAxODYuMjAyIDQxNC45NjggNDE2IDAgODkuNC0yOC4xMjggMTcyLjItNzYuMDEzIDI0MHpNNTEwLjg4OCAzMmMtMTc2LjM2MiAwLTMxOS4yMDggMTQzLjItMzE5LjIwOCAzMjBzMTQyLjg0NSAzMjAgMzE5LjIwOCAzMjBjMTc2LjM2MiAwIDMxOS4yMDUtMTQzLjIgMzE5LjIwNS0zMjBzLTE0Mi44NDQtMzIwLTMxOS4yMDUtMzIwek01MzQuODI4IDI1NmgtNDcuODgxYy0xMy4xNjcgMC0yMy45NDEgMTAuNzk3LTIzLjk0MSAyNHYyNzJjMCAxMy4yIDEwLjc3NCAyNCAyMy45NDEgMjRoNDcuODgxYzEzLjE2NyAwIDIzLjk0LTEwLjggMjMuOTQtMjR2LTI3MmMwLTEzLjIwMy0xMC43NzMtMjQtMjMuOTQtMjR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwOTsiIGdseXBoLW5hbWU9InVzZXIiIGQ9Ik00ODQuNTcxIDQ0OGMxNDEuNCAwIDI1NiAxMTQuNiAyNTYgMjU2cy0xMTQuNiAyNTYtMjU2IDI1NmMtMTQxLjQgMC0yNTYtMTE0LjYtMjU2LTI1NnMxMTQuNi0yNTYgMjU2LTI1NnpNNjYzLjc3MSAzODRoLTMzLjRjLTQ0LjQtMjAuNC05My44LTMyLTE0NS44LTMycy0xMDEuMiAxMS42LTE0NS44IDMyaC0zMy40Yy0xNDguNCAwLTI2OC44LTEyMC40LTI2OC44LTI2OC44di04My4yYzAtNTIuOTk5IDQzLTk2IDk2LTk2aDcwNGM1Mi45OTkgMCA5NiA0My4wMDEgOTYgOTZ2ODMuMmMwIDE0OC40LTEyMC40IDI2OC44LTI2OC44IDI2OC44eiIgLz4KPC9mb250PjwvZGVmcz48L3N2Zz4=';

                /***/
            },

        /***/ './src/core/assets/fonts/icomoon.ttf?23nkz4':
            /*!**************************************************!*\
  !*** ./src/core/assets/fonts/icomoon.ttf?23nkz4 ***!
  \**************************************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    'data:font/ttf;base64,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';

                /***/
            },

        /***/ './src/core/assets/fonts/icomoon.woff?23nkz4':
            /*!***************************************************!*\
  !*** ./src/core/assets/fonts/icomoon.woff?23nkz4 ***!
  \***************************************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony default export */ __webpack_exports__['default'] =
                    'data:font/woff;base64,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';

                /***/
            },

        /***/ './src/core/stores/store.ts':
            /*!**********************************!*\
  !*** ./src/core/stores/store.ts ***!
  \**********************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! mobx */ 'mobx',
                );
                /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    mobx__WEBPACK_IMPORTED_MODULE_0__,
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ 'react',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_1__,
                );
                /* harmony import */ var _api_agent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./../api/agent */ './src/core/api/agent.ts',
                );
                var _class, _descriptor, _descriptor2, _descriptor3, _temp;

                function _initializerDefineProperty(target, property, descriptor, context) {
                    if (!descriptor) return;
                    Object.defineProperty(target, property, {
                        enumerable: descriptor.enumerable,
                        configurable: descriptor.configurable,
                        writable: descriptor.writable,
                        value: descriptor.initializer
                            ? descriptor.initializer.call(context)
                            : void 0,
                    });
                }

                function _defineProperty(obj, key, value) {
                    if (key in obj) {
                        Object.defineProperty(obj, key, {
                            value: value,
                            enumerable: true,
                            configurable: true,
                            writable: true,
                        });
                    } else {
                        obj[key] = value;
                    }
                    return obj;
                }

                function _applyDecoratedDescriptor(
                    target,
                    property,
                    decorators,
                    descriptor,
                    context,
                ) {
                    var desc = {};
                    Object.keys(descriptor).forEach(function(key) {
                        desc[key] = descriptor[key];
                    });
                    desc.enumerable = !!desc.enumerable;
                    desc.configurable = !!desc.configurable;
                    if ('value' in desc || desc.initializer) {
                        desc.writable = true;
                    }
                    desc = decorators
                        .slice()
                        .reverse()
                        .reduce(function(desc, decorator) {
                            return decorator(target, property, desc) || desc;
                        }, desc);
                    if (context && desc.initializer !== void 0) {
                        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
                        desc.initializer = undefined;
                    }
                    if (desc.initializer === void 0) {
                        Object.defineProperty(target, property, desc);
                        desc = null;
                    }
                    return desc;
                }

                function _initializerWarningHelper(descriptor, context) {
                    throw new Error(
                        'Decorating class property failed. Please ensure that ' +
                            'proposal-class-properties is enabled and runs after the decorators transform.',
                    );
                }

                let Store =
                    ((_class =
                        ((_temp = class Store {
                            constructor() {
                                _initializerDefineProperty(this, 'settings', _descriptor, this);

                                _initializerDefineProperty(this, 'getSettings', _descriptor2, this);

                                _initializerDefineProperty(
                                    this,
                                    'saveSettings',
                                    _descriptor3,
                                    this,
                                );
                            }
                        }),
                        _temp)),
                    ((_descriptor = _applyDecoratedDescriptor(
                        _class.prototype,
                        'settings',
                        [mobx__WEBPACK_IMPORTED_MODULE_0__['observable']],
                        {
                            configurable: true,
                            enumerable: true,
                            writable: true,
                            initializer: null,
                        },
                    )),
                    (_descriptor2 = _applyDecoratedDescriptor(
                        _class.prototype,
                        'getSettings',
                        [mobx__WEBPACK_IMPORTED_MODULE_0__['action']],
                        {
                            configurable: true,
                            enumerable: true,
                            writable: true,
                            initializer: function() {
                                return () => {
                                    _api_agent__WEBPACK_IMPORTED_MODULE_2__['Activities']
                                        .getSettings()
                                        .then(response => {
                                            console.log('response', response);
                                            this.settings = response;
                                        });
                                };
                            },
                        },
                    )),
                    (_descriptor3 = _applyDecoratedDescriptor(
                        _class.prototype,
                        'saveSettings',
                        [mobx__WEBPACK_IMPORTED_MODULE_0__['action']],
                        {
                            configurable: true,
                            enumerable: true,
                            writable: true,
                            initializer: function() {
                                return settings => {
                                    _api_agent__WEBPACK_IMPORTED_MODULE_2__['Activities']
                                        .saveSettings(settings)
                                        .then(response => {
                                            console.log('this.response', response);
                                        });
                                };
                            },
                        },
                    ))),
                    _class);
                /* harmony default export */ __webpack_exports__['default'] = /*#__PURE__*/ Object(
                    react__WEBPACK_IMPORTED_MODULE_1__['createContext'],
                )(new Store());

                /***/
            },

        /***/ './src/core/styles/variables.scss':
            /*!****************************************!*\
  !*** ./src/core/styles/variables.scss ***!
  \****************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                var refs = 0;
                var css = __webpack_require__(
                    /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/sass-loader/dist/cjs.js!./variables.scss */ './node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/core/styles/variables.scss',
                );
                var insertCss = __webpack_require__(
                    /*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ './node_modules/isomorphic-style-loader/insertCss.js',
                );
                var content = typeof css === 'string' ? [[module.i, css, '']] : css;

                exports = module.exports = css.locals || {};
                exports._getContent = function() {
                    return content;
                };
                exports._getCss = function() {
                    return '' + css;
                };
                exports._insertCss = function(options) {
                    return insertCss(content, options);
                };

                // Hot Module Replacement
                // https://webpack.github.io/docs/hot-module-replacement
                // Only activated in browser context
                if (false) {
                    var removeCss;
                }

                /***/
            },

        /***/ './src/pages/App/App.scss':
            /*!********************************!*\
  !*** ./src/pages/App/App.scss ***!
  \********************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                var refs = 0;
                var css = __webpack_require__(
                    /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/sass-loader/dist/cjs.js!./App.scss */ './node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/pages/App/App.scss',
                );
                var insertCss = __webpack_require__(
                    /*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ './node_modules/isomorphic-style-loader/insertCss.js',
                );
                var content = typeof css === 'string' ? [[module.i, css, '']] : css;

                exports = module.exports = css.locals || {};
                exports._getContent = function() {
                    return content;
                };
                exports._getCss = function() {
                    return '' + css;
                };
                exports._insertCss = function(options) {
                    return insertCss(content, options);
                };

                // Hot Module Replacement
                // https://webpack.github.io/docs/hot-module-replacement
                // Only activated in browser context
                if (false) {
                    var removeCss;
                }

                /***/
            },

        /***/ './src/pages/App/App.tsx':
            /*!*******************************!*\
  !*** ./src/pages/App/App.tsx ***!
  \*******************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ 'react',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_0__,
                );
                /* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! @loadable/component */ '@loadable/component',
                );
                /* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    _loadable_component__WEBPACK_IMPORTED_MODULE_1__,
                );
                /* harmony import */ var _core_stores_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! @core/stores/store */ './src/core/stores/store.ts',
                );
                /* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./Routes */ './src/pages/App/Routes.tsx',
                );
                /* harmony import */ var _core_styles_variables_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! @core/styles/variables.scss */ './src/core/styles/variables.scss',
                );
                /* harmony import */ var _core_styles_variables_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
                    _core_styles_variables_scss__WEBPACK_IMPORTED_MODULE_4__,
                );
                /* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! ./App.scss */ './src/pages/App/App.scss',
                );
                /* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
                    _App_scss__WEBPACK_IMPORTED_MODULE_5__,
                );

                const Footer = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({
                    resolved: {},

                    chunkName() {
                        return 'core-components-Footer-Footer';
                    },

                    isReady(props) {
                        const key = this.resolve(props);

                        if (this.resolved[key] !== true) {
                            return false;
                        }

                        if (true) {
                            return !!__webpack_require__.m[key];
                        }

                        return false;
                    },

                    importAsync: () =>
                        __webpack_require__
                            .e(
                                /*! import() | core-components-Footer-Footer */ 'core-components-Footer-Footer',
                            )
                            .then(
                                __webpack_require__.bind(
                                    null,
                                    /*! @core/components/Footer/Footer */ './src/core/components/Footer/Footer.tsx',
                                ),
                            ),

                    requireAsync(props) {
                        const key = this.resolve(props);
                        this.resolved[key] = false;
                        return this.importAsync(props).then(resolved => {
                            this.resolved[key] = true;
                            return resolved;
                        });
                    },

                    requireSync(props) {
                        const id = this.resolve(props);

                        if (true) {
                            return __webpack_require__(id);
                        }

                        return eval('module.require')(id);
                    },

                    resolve() {
                        if (true) {
                            return /*require.resolve*/ /*! @core/components/Footer/Footer */ './src/core/components/Footer/Footer.tsx';
                        }

                        return eval('require.resolve')('@core/components/Footer/Footer');
                    },
                });

                const App = () => {
                    const store = Object(react__WEBPACK_IMPORTED_MODULE_0__['useContext'])(
                        _core_stores_store__WEBPACK_IMPORTED_MODULE_2__['default'],
                    );
                    Object(react__WEBPACK_IMPORTED_MODULE_0__['useEffect'])(() => {
                        store.getSettings();
                    }, []);
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                        null,
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Routes__WEBPACK_IMPORTED_MODULE_3__['Routes'],
                            null,
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            Footer,
                            null,
                        ),
                    );
                };

                /* harmony default export */ __webpack_exports__['default'] = App;

                /***/
            },

        /***/ './src/pages/App/Routes.tsx':
            /*!**********************************!*\
  !*** ./src/pages/App/Routes.tsx ***!
  \**********************************/
            /*! exports provided: Routes */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'Routes',
                    function() {
                        return Routes;
                    },
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ 'react',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_0__,
                );
                /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react-router-dom */ 'react-router-dom',
                );
                /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__,
                );
                /* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! @loadable/component */ '@loadable/component',
                );
                /* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    _loadable_component__WEBPACK_IMPORTED_MODULE_2__,
                );

                const ConfigurationPage = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()(
                    {
                        resolved: {},

                        chunkName() {
                            return 'pages-ConfigurationPage-ConfigurationPage';
                        },

                        isReady(props) {
                            const key = this.resolve(props);

                            if (this.resolved[key] !== true) {
                                return false;
                            }

                            if (true) {
                                return !!__webpack_require__.m[key];
                            }

                            return false;
                        },

                        importAsync: () =>
                            __webpack_require__
                                .e(
                                    /*! import() | pages-ConfigurationPage-ConfigurationPage */ 'pages-ConfigurationPage-ConfigurationPage',
                                )
                                .then(
                                    __webpack_require__.bind(
                                        null,
                                        /*! @pages/ConfigurationPage/ConfigurationPage */ './src/pages/ConfigurationPage/ConfigurationPage.tsx',
                                    ),
                                ),

                        requireAsync(props) {
                            const key = this.resolve(props);
                            this.resolved[key] = false;
                            return this.importAsync(props).then(resolved => {
                                this.resolved[key] = true;
                                return resolved;
                            });
                        },

                        requireSync(props) {
                            const id = this.resolve(props);

                            if (true) {
                                return __webpack_require__(id);
                            }

                            return eval('module.require')(id);
                        },

                        resolve() {
                            if (true) {
                                return /*require.resolve*/ /*! @pages/ConfigurationPage/ConfigurationPage */ './src/pages/ConfigurationPage/ConfigurationPage.tsx';
                            }

                            return eval('require.resolve')(
                                '@pages/ConfigurationPage/ConfigurationPage',
                            );
                        },
                    },
                );
                const SettingsPage = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({
                    resolved: {},

                    chunkName() {
                        return 'pages-SettingsPage-SettingsPage';
                    },

                    isReady(props) {
                        const key = this.resolve(props);

                        if (this.resolved[key] !== true) {
                            return false;
                        }

                        if (true) {
                            return !!__webpack_require__.m[key];
                        }

                        return false;
                    },

                    importAsync: () =>
                        __webpack_require__
                            .e(
                                /*! import() | pages-SettingsPage-SettingsPage */ 'pages-SettingsPage-SettingsPage',
                            )
                            .then(
                                __webpack_require__.bind(
                                    null,
                                    /*! @pages/SettingsPage/SettingsPage */ './src/pages/SettingsPage/SettingsPage.tsx',
                                ),
                            ),

                    requireAsync(props) {
                        const key = this.resolve(props);
                        this.resolved[key] = false;
                        return this.importAsync(props).then(resolved => {
                            this.resolved[key] = true;
                            return resolved;
                        });
                    },

                    requireSync(props) {
                        const id = this.resolve(props);

                        if (true) {
                            return __webpack_require__(id);
                        }

                        return eval('module.require')(id);
                    },

                    resolve() {
                        if (true) {
                            return /*require.resolve*/ /*! @pages/SettingsPage/SettingsPage */ './src/pages/SettingsPage/SettingsPage.tsx';
                        }

                        return eval('require.resolve')('@pages/SettingsPage/SettingsPage');
                    },
                });
                const HistoryPage = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({
                    resolved: {},

                    chunkName() {
                        return 'pages-HistoryPage-HistoryPage';
                    },

                    isReady(props) {
                        const key = this.resolve(props);

                        if (this.resolved[key] !== true) {
                            return false;
                        }

                        if (true) {
                            return !!__webpack_require__.m[key];
                        }

                        return false;
                    },

                    importAsync: () =>
                        __webpack_require__
                            .e(
                                /*! import() | pages-HistoryPage-HistoryPage */ 'pages-HistoryPage-HistoryPage',
                            )
                            .then(
                                __webpack_require__.bind(
                                    null,
                                    /*! @pages/HistoryPage/HistoryPage */ './src/pages/HistoryPage/HistoryPage.tsx',
                                ),
                            ),

                    requireAsync(props) {
                        const key = this.resolve(props);
                        this.resolved[key] = false;
                        return this.importAsync(props).then(resolved => {
                            this.resolved[key] = true;
                            return resolved;
                        });
                    },

                    requireSync(props) {
                        const id = this.resolve(props);

                        if (true) {
                            return __webpack_require__(id);
                        }

                        return eval('module.require')(id);
                    },

                    resolve() {
                        if (true) {
                            return /*require.resolve*/ /*! @pages/HistoryPage/HistoryPage */ './src/pages/HistoryPage/HistoryPage.tsx';
                        }

                        return eval('require.resolve')('@pages/HistoryPage/HistoryPage');
                    },
                });
                const Routes = () =>
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__['Switch'],
                        null,
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_1__['Route'],
                            {
                                path: '/',
                                exact: true,
                                component: ConfigurationPage,
                            },
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_1__['Route'],
                            {
                                path: '/settings',
                                component: SettingsPage,
                            },
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_1__['Route'],
                            {
                                path: '/history',
                                component: HistoryPage,
                            },
                        ),
                    );

                /***/
            },

        /***/ './src/server.tsx':
            /*!************************!*\
  !*** ./src/server.tsx ***!
  \************************/
            /*! exports provided: ssrFunction */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'ssrFunction',
                    function() {
                        return ssrFunction;
                    },
                );
                /* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! core-js/stable */ 'core-js/stable',
                );
                /* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    core_js_stable__WEBPACK_IMPORTED_MODULE_0__,
                );
                /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! regenerator-runtime/runtime */ 'regenerator-runtime/runtime',
                );
                /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__,
                );
                /* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! path */ 'path',
                );
                /* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    path__WEBPACK_IMPORTED_MODULE_2__,
                );
                /* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! fs */ 'fs',
                );
                /* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
                    fs__WEBPACK_IMPORTED_MODULE_3__,
                );
                /* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! express */ 'express',
                );
                /* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
                    express__WEBPACK_IMPORTED_MODULE_4__,
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! react */ 'react',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_5__,
                );
                /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! react-router-dom */ 'react-router-dom',
                );
                /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_6__,
                );
                /* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    /*! react-dom/server */ 'react-dom/server',
                );
                /* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
                    react_dom_server__WEBPACK_IMPORTED_MODULE_7__,
                );
                /* harmony import */ var url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                    /*! url */ 'url',
                );
                /* harmony import */ var url__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
                    url__WEBPACK_IMPORTED_MODULE_8__,
                );
                /* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
                    /*! @loadable/server */ '@loadable/server',
                );
                /* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
                    _loadable_server__WEBPACK_IMPORTED_MODULE_9__,
                );
                /* harmony import */ var _pages_App_App__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
                    /*! ./pages/App/App */ './src/pages/App/App.tsx',
                );
                /* eslint-disable @typescript-eslint/no-unused-vars */

                const root = process.cwd();
                const ssrFunction = app => {
                    app.use(express__WEBPACK_IMPORTED_MODULE_4___default.a.static('./dist/client'));
                    app.get('/*', (req, res) => {
                        try {
                            const url = req.originalUrl || req.url;
                            const indexFile = path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(
                                root,
                                'public/index.html',
                            );
                            const statsFile = path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(
                                root,
                                'dist/client/loadable-stats.json',
                            );
                            const context = {};
                            const location = Object(url__WEBPACK_IMPORTED_MODULE_8__['parse'])(url);
                            const webExtractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_9__[
                                'ChunkExtractor'
                            ]({
                                statsFile,
                                entrypoints: ['client'],
                            });
                            const scriptTags = webExtractor.getScriptTags();
                            const styleTags = webExtractor.getStyleTags();
                            const jsx = webExtractor.collectChunks(
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                                    _loadable_server__WEBPACK_IMPORTED_MODULE_9__[
                                        'ChunkExtractorManager'
                                    ],
                                    {
                                        extractor: webExtractor,
                                    },
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                                        react_router_dom__WEBPACK_IMPORTED_MODULE_6__[
                                            'StaticRouter'
                                        ],
                                        {
                                            location: location,
                                            context: context,
                                        },
                                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                                            _pages_App_App__WEBPACK_IMPORTED_MODULE_10__['default'],
                                            null,
                                        ),
                                    ),
                                ),
                            );
                            const html = Object(
                                react_dom_server__WEBPACK_IMPORTED_MODULE_7__['renderToString'],
                            )(jsx);
                            const css = new Set();
                            fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFile(
                                indexFile,
                                'utf8',
                                (err, data) => {
                                    if (err) {
                                        return res.status(500).send('Oops, better luck next time!');
                                    }

                                    data = data.replace('__STYLES__', styleTags);
                                    data = data.replace('__SCRIPTS__', scriptTags);
                                    data = data.replace(
                                        '<div id="root"></div>',
                                        `<div id="root">${html}</div>`,
                                    );
                                    return res.send(data);
                                },
                            );
                        } catch (error) {
                            console.log(error);
                        }
                    });
                };

                /***/
            },

        /***/ '@loadable/component':
            /*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('@loadable/component');

                /***/
            },

        /***/ '@loadable/server':
            /*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('@loadable/server');

                /***/
            },

        /***/ axios:
            /*!************************!*\
  !*** external "axios" ***!
  \************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('axios');

                /***/
            },

        /***/ child_process:
            /*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('child_process');

                /***/
            },

        /***/ classnames:
            /*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('classnames');

                /***/
            },

        /***/ 'core-js/stable':
            /*!*********************************!*\
  !*** external "core-js/stable" ***!
  \*********************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('core-js/stable');

                /***/
            },

        /***/ 'deep-equal':
            /*!*****************************!*\
  !*** external "deep-equal" ***!
  \*****************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('deep-equal');

                /***/
            },

        /***/ dotenv:
            /*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('dotenv');

                /***/
            },

        /***/ express:
            /*!**************************!*\
  !*** external "express" ***!
  \**************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('express');

                /***/
            },

        /***/ fs:
            /*!*********************!*\
  !*** external "fs" ***!
  \*********************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('fs');

                /***/
            },

        /***/ mobx:
            /*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('mobx');

                /***/
            },

        /***/ morgan:
            /*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('morgan');

                /***/
            },

        /***/ os:
            /*!*********************!*\
  !*** external "os" ***!
  \*********************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('os');

                /***/
            },

        /***/ path:
            /*!***********************!*\
  !*** external "path" ***!
  \***********************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('path');

                /***/
            },

        /***/ pino:
            /*!***********************!*\
  !*** external "pino" ***!
  \***********************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('pino');

                /***/
            },

        /***/ react:
            /*!************************!*\
  !*** external "react" ***!
  \************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('react');

                /***/
            },

        /***/ 'react-dom/server':
            /*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('react-dom/server');

                /***/
            },

        /***/ 'react-router-dom':
            /*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('react-router-dom');

                /***/
            },

        /***/ 'regenerator-runtime/runtime':
            /*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('regenerator-runtime/runtime');

                /***/
            },

        /***/ 'swagger-ui-express':
            /*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('swagger-ui-express');

                /***/
            },

        /***/ typeorm:
            /*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('typeorm');

                /***/
            },

        /***/ url:
            /*!**********************!*\
  !*** external "url" ***!
  \**********************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('url');

                /***/
            },

        /***/ util:
            /*!***********************!*\
  !*** external "util" ***!
  \***********************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('util');

                /***/
            },

        /******/
    },
);
//# sourceMappingURL=server.js.map
