!function(modules) {
    function webpackJsonpCallback(data) {
        for (var moduleId, chunkId, chunkIds = data[0], moreModules = data[1], executeModules = data[2], i = 0, resolves = []; i < chunkIds.length; i++) chunkId = chunkIds[i], 
        Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId] && resolves.push(installedChunks[chunkId][0]), 
        installedChunks[chunkId] = 0;
        for (moduleId in moreModules) Object.prototype.hasOwnProperty.call(moreModules, moduleId) && (modules[moduleId] = moreModules[moduleId]);
        for (parentJsonpFunction && parentJsonpFunction(data); resolves.length; ) resolves.shift()();
        return deferredModules.push.apply(deferredModules, executeModules || []), checkDeferredModules();
    }
    function checkDeferredModules() {
        for (var result, i = 0; i < deferredModules.length; i++) {
            for (var deferredModule = deferredModules[i], fulfilled = !0, j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                0 !== installedChunks[depId] && (fulfilled = !1);
            }
            fulfilled && (deferredModules.splice(i--, 1), result = __webpack_require__(__webpack_require__.s = deferredModule[0]));
        }
        return result;
    }
    var parentHotUpdateCallback = window.webpackHotUpdate;
    window.webpackHotUpdate = function(chunkId, moreModules) {
        !function(chunkId, moreModules) {
            if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId]) return;
            for (var moduleId in hotRequestedFilesMap[chunkId] = !1, moreModules) Object.prototype.hasOwnProperty.call(moreModules, moduleId) && (hotUpdate[moduleId] = moreModules[moduleId]);
            0 == --hotWaitingFiles && 0 === hotChunksLoading && hotUpdateDownloaded();
        }(chunkId, moreModules), parentHotUpdateCallback && parentHotUpdateCallback(chunkId, moreModules);
    };
    var hotCurrentChildModule, hotApplyOnUpdate = !0, hotCurrentHash = "643cce1c790c17299cc3", hotCurrentModuleData = {}, hotCurrentParents = [], hotCurrentParentsTemp = [];
    function hotCreateModule(moduleId) {
        var hot = {
            _acceptedDependencies: {},
            _declinedDependencies: {},
            _selfAccepted: !1,
            _selfDeclined: !1,
            _selfInvalidated: !1,
            _disposeHandlers: [],
            _main: hotCurrentChildModule !== moduleId,
            active: !0,
            accept: function(dep, callback) {
                if (void 0 === dep) hot._selfAccepted = !0; else if ("function" == typeof dep) hot._selfAccepted = dep; else if ("object" == typeof dep) for (var i = 0; i < dep.length; i++) hot._acceptedDependencies[dep[i]] = callback || function() {}; else hot._acceptedDependencies[dep] = callback || function() {};
            },
            decline: function(dep) {
                if (void 0 === dep) hot._selfDeclined = !0; else if ("object" == typeof dep) for (var i = 0; i < dep.length; i++) hot._declinedDependencies[dep[i]] = !0; else hot._declinedDependencies[dep] = !0;
            },
            dispose: function(callback) {
                hot._disposeHandlers.push(callback);
            },
            addDisposeHandler: function(callback) {
                hot._disposeHandlers.push(callback);
            },
            removeDisposeHandler: function(callback) {
                var idx = hot._disposeHandlers.indexOf(callback);
                idx >= 0 && hot._disposeHandlers.splice(idx, 1);
            },
            invalidate: function() {
                switch (this._selfInvalidated = !0, hotStatus) {
                  case "idle":
                    (hotUpdate = {})[moduleId] = modules[moduleId], hotSetStatus("ready");
                    break;

                  case "ready":
                    hotApplyInvalidatedModule(moduleId);
                    break;

                  case "prepare":
                  case "check":
                  case "dispose":
                  case "apply":
                    (hotQueuedInvalidatedModules = hotQueuedInvalidatedModules || []).push(moduleId);
                }
            },
            check: hotCheck,
            apply: hotApply,
            status: function(l) {
                if (!l) return hotStatus;
                hotStatusHandlers.push(l);
            },
            addStatusHandler: function(l) {
                hotStatusHandlers.push(l);
            },
            removeStatusHandler: function(l) {
                var idx = hotStatusHandlers.indexOf(l);
                idx >= 0 && hotStatusHandlers.splice(idx, 1);
            },
            data: hotCurrentModuleData[moduleId]
        };
        return hotCurrentChildModule = void 0, hot;
    }
    var hotStatusHandlers = [], hotStatus = "idle";
    function hotSetStatus(newStatus) {
        hotStatus = newStatus;
        for (var i = 0; i < hotStatusHandlers.length; i++) hotStatusHandlers[i].call(null, newStatus);
    }
    var hotDeferred, hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules, hotWaitingFiles = 0, hotChunksLoading = 0, hotWaitingFilesMap = {}, hotRequestedFilesMap = {}, hotAvailableFilesMap = {};
    function toModuleId(id) {
        return +id + "" === id ? +id : id;
    }
    function hotCheck(apply) {
        if ("idle" !== hotStatus) throw new Error("check() is only allowed in idle status");
        return hotApplyOnUpdate = apply, hotSetStatus("check"), (requestTimeout = 1e4, requestTimeout = requestTimeout || 1e4, 
        new Promise((function(resolve, reject) {
            if ("undefined" == typeof XMLHttpRequest) return reject(new Error("No browser support"));
            try {
                var request = new XMLHttpRequest, requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
                request.open("GET", requestPath, !0), request.timeout = requestTimeout, request.send(null);
            } catch (err) {
                return reject(err);
            }
            request.onreadystatechange = function() {
                if (4 === request.readyState) if (0 === request.status) reject(new Error("Manifest request to " + requestPath + " timed out.")); else if (404 === request.status) resolve(); else if (200 !== request.status && 304 !== request.status) reject(new Error("Manifest request to " + requestPath + " failed.")); else {
                    try {
                        var update = JSON.parse(request.responseText);
                    } catch (e) {
                        return void reject(e);
                    }
                    resolve(update);
                }
            };
        }))).then((function(update) {
            if (!update) return hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle"), 
            null;
            hotRequestedFilesMap = {}, hotWaitingFilesMap = {}, hotAvailableFilesMap = update.c, 
            hotUpdateNewHash = update.h, hotSetStatus("prepare");
            var promise = new Promise((function(resolve, reject) {
                hotDeferred = {
                    resolve: resolve,
                    reject: reject
                };
            }));
            for (var chunkId in hotUpdate = {}, installedChunks) hotEnsureUpdateChunk(chunkId);
            return "prepare" === hotStatus && 0 === hotChunksLoading && 0 === hotWaitingFiles && hotUpdateDownloaded(), 
            promise;
        }));
        var requestTimeout;
    }
    function hotEnsureUpdateChunk(chunkId) {
        hotAvailableFilesMap[chunkId] ? (hotRequestedFilesMap[chunkId] = !0, hotWaitingFiles++, 
        function(chunkId) {
            var script = document.createElement("script");
            script.charset = "utf-8", script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js", 
            document.head.appendChild(script);
        }(chunkId)) : hotWaitingFilesMap[chunkId] = !0;
    }
    function hotUpdateDownloaded() {
        hotSetStatus("ready");
        var deferred = hotDeferred;
        if (hotDeferred = null, deferred) if (hotApplyOnUpdate) Promise.resolve().then((function() {
            return hotApply(hotApplyOnUpdate);
        })).then((function(result) {
            deferred.resolve(result);
        }), (function(err) {
            deferred.reject(err);
        })); else {
            var outdatedModules = [];
            for (var id in hotUpdate) Object.prototype.hasOwnProperty.call(hotUpdate, id) && outdatedModules.push(toModuleId(id));
            deferred.resolve(outdatedModules);
        }
    }
    function hotApply(options) {
        if ("ready" !== hotStatus) throw new Error("apply() is only allowed in ready status");
        return function hotApplyInternal(options) {
            var cb, i, j, module, moduleId;
            function getAffectedStuff(updateModuleId) {
                for (var outdatedModules = [ updateModuleId ], outdatedDependencies = {}, queue = outdatedModules.map((function(id) {
                    return {
                        chain: [ id ],
                        id: id
                    };
                })); queue.length > 0; ) {
                    var queueItem = queue.pop(), moduleId = queueItem.id, chain = queueItem.chain;
                    if ((module = installedModules[moduleId]) && (!module.hot._selfAccepted || module.hot._selfInvalidated)) {
                        if (module.hot._selfDeclined) return {
                            type: "self-declined",
                            chain: chain,
                            moduleId: moduleId
                        };
                        if (module.hot._main) return {
                            type: "unaccepted",
                            chain: chain,
                            moduleId: moduleId
                        };
                        for (var i = 0; i < module.parents.length; i++) {
                            var parentId = module.parents[i], parent = installedModules[parentId];
                            if (parent) {
                                if (parent.hot._declinedDependencies[moduleId]) return {
                                    type: "declined",
                                    chain: chain.concat([ parentId ]),
                                    moduleId: moduleId,
                                    parentId: parentId
                                };
                                -1 === outdatedModules.indexOf(parentId) && (parent.hot._acceptedDependencies[moduleId] ? (outdatedDependencies[parentId] || (outdatedDependencies[parentId] = []), 
                                addAllToSet(outdatedDependencies[parentId], [ moduleId ])) : (delete outdatedDependencies[parentId], 
                                outdatedModules.push(parentId), queue.push({
                                    chain: chain.concat([ parentId ]),
                                    id: parentId
                                })));
                            }
                        }
                    }
                }
                return {
                    type: "accepted",
                    moduleId: updateModuleId,
                    outdatedModules: outdatedModules,
                    outdatedDependencies: outdatedDependencies
                };
            }
            function addAllToSet(a, b) {
                for (var i = 0; i < b.length; i++) {
                    var item = b[i];
                    -1 === a.indexOf(item) && a.push(item);
                }
            }
            hotApplyInvalidatedModules();
            var outdatedDependencies = {}, outdatedModules = [], appliedUpdate = {}, warnUnexpectedRequire = function() {
                console.warn("[HMR] unexpected require(" + result.moduleId + ") to disposed module");
            };
            for (var id in hotUpdate) if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
                var result;
                moduleId = toModuleId(id), result = hotUpdate[id] ? getAffectedStuff(moduleId) : {
                    type: "disposed",
                    moduleId: id
                };
                var abortError = !1, doApply = !1, doDispose = !1, chainInfo = "";
                switch (result.chain && (chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ")), 
                result.type) {
                  case "self-declined":
                    options.onDeclined && options.onDeclined(result), options.ignoreDeclined || (abortError = new Error("Aborted because of self decline: " + result.moduleId + chainInfo));
                    break;

                  case "declined":
                    options.onDeclined && options.onDeclined(result), options.ignoreDeclined || (abortError = new Error("Aborted because of declined dependency: " + result.moduleId + " in " + result.parentId + chainInfo));
                    break;

                  case "unaccepted":
                    options.onUnaccepted && options.onUnaccepted(result), options.ignoreUnaccepted || (abortError = new Error("Aborted because " + moduleId + " is not accepted" + chainInfo));
                    break;

                  case "accepted":
                    options.onAccepted && options.onAccepted(result), doApply = !0;
                    break;

                  case "disposed":
                    options.onDisposed && options.onDisposed(result), doDispose = !0;
                    break;

                  default:
                    throw new Error("Unexception type " + result.type);
                }
                if (abortError) return hotSetStatus("abort"), Promise.reject(abortError);
                if (doApply) for (moduleId in appliedUpdate[moduleId] = hotUpdate[moduleId], addAllToSet(outdatedModules, result.outdatedModules), 
                result.outdatedDependencies) Object.prototype.hasOwnProperty.call(result.outdatedDependencies, moduleId) && (outdatedDependencies[moduleId] || (outdatedDependencies[moduleId] = []), 
                addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]));
                doDispose && (addAllToSet(outdatedModules, [ result.moduleId ]), appliedUpdate[moduleId] = warnUnexpectedRequire);
            }
            var idx, outdatedSelfAcceptedModules = [];
            for (i = 0; i < outdatedModules.length; i++) moduleId = outdatedModules[i], installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted && appliedUpdate[moduleId] !== warnUnexpectedRequire && !installedModules[moduleId].hot._selfInvalidated && outdatedSelfAcceptedModules.push({
                module: moduleId,
                parents: installedModules[moduleId].parents.slice(),
                errorHandler: installedModules[moduleId].hot._selfAccepted
            });
            hotSetStatus("dispose"), Object.keys(hotAvailableFilesMap).forEach((function(chunkId) {
                !1 === hotAvailableFilesMap[chunkId] && function(chunkId) {
                    delete installedChunks[chunkId];
                }(chunkId);
            }));
            var dependency, moduleOutdatedDependencies, queue = outdatedModules.slice();
            for (;queue.length > 0; ) if (moduleId = queue.pop(), module = installedModules[moduleId]) {
                var data = {}, disposeHandlers = module.hot._disposeHandlers;
                for (j = 0; j < disposeHandlers.length; j++) (cb = disposeHandlers[j])(data);
                for (hotCurrentModuleData[moduleId] = data, module.hot.active = !1, delete installedModules[moduleId], 
                delete outdatedDependencies[moduleId], j = 0; j < module.children.length; j++) {
                    var child = installedModules[module.children[j]];
                    child && ((idx = child.parents.indexOf(moduleId)) >= 0 && child.parents.splice(idx, 1));
                }
            }
            for (moduleId in outdatedDependencies) if (Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId) && (module = installedModules[moduleId])) for (moduleOutdatedDependencies = outdatedDependencies[moduleId], 
            j = 0; j < moduleOutdatedDependencies.length; j++) dependency = moduleOutdatedDependencies[j], 
            (idx = module.children.indexOf(dependency)) >= 0 && module.children.splice(idx, 1);
            hotSetStatus("apply"), void 0 !== hotUpdateNewHash && (hotCurrentHash = hotUpdateNewHash, 
            hotUpdateNewHash = void 0);
            for (moduleId in hotUpdate = void 0, appliedUpdate) Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId) && (modules[moduleId] = appliedUpdate[moduleId]);
            var error = null;
            for (moduleId in outdatedDependencies) if (Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId) && (module = installedModules[moduleId])) {
                moduleOutdatedDependencies = outdatedDependencies[moduleId];
                var callbacks = [];
                for (i = 0; i < moduleOutdatedDependencies.length; i++) if (dependency = moduleOutdatedDependencies[i], 
                cb = module.hot._acceptedDependencies[dependency]) {
                    if (-1 !== callbacks.indexOf(cb)) continue;
                    callbacks.push(cb);
                }
                for (i = 0; i < callbacks.length; i++) {
                    cb = callbacks[i];
                    try {
                        cb(moduleOutdatedDependencies);
                    } catch (err) {
                        options.onErrored && options.onErrored({
                            type: "accept-errored",
                            moduleId: moduleId,
                            dependencyId: moduleOutdatedDependencies[i],
                            error: err
                        }), options.ignoreErrored || error || (error = err);
                    }
                }
            }
            for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
                var item = outdatedSelfAcceptedModules[i];
                moduleId = item.module, hotCurrentParents = item.parents, hotCurrentChildModule = moduleId;
                try {
                    __webpack_require__(moduleId);
                } catch (err) {
                    if ("function" == typeof item.errorHandler) try {
                        item.errorHandler(err);
                    } catch (err2) {
                        options.onErrored && options.onErrored({
                            type: "self-accept-error-handler-errored",
                            moduleId: moduleId,
                            error: err2,
                            originalError: err
                        }), options.ignoreErrored || error || (error = err2), error || (error = err);
                    } else options.onErrored && options.onErrored({
                        type: "self-accept-errored",
                        moduleId: moduleId,
                        error: err
                    }), options.ignoreErrored || error || (error = err);
                }
            }
            if (error) return hotSetStatus("fail"), Promise.reject(error);
            if (hotQueuedInvalidatedModules) return hotApplyInternal(options).then((function(list) {
                return outdatedModules.forEach((function(moduleId) {
                    list.indexOf(moduleId) < 0 && list.push(moduleId);
                })), list;
            }));
            return hotSetStatus("idle"), new Promise((function(resolve) {
                resolve(outdatedModules);
            }));
        }(options = options || {});
    }
    function hotApplyInvalidatedModules() {
        if (hotQueuedInvalidatedModules) return hotUpdate || (hotUpdate = {}), hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule), 
        hotQueuedInvalidatedModules = void 0, !0;
    }
    function hotApplyInvalidatedModule(moduleId) {
        Object.prototype.hasOwnProperty.call(hotUpdate, moduleId) || (hotUpdate[moduleId] = modules[moduleId]);
    }
    var installedModules = {}, installedChunks = {
        2: 0
    }, deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {},
            hot: hotCreateModule(moduleId),
            parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
            children: []
        };
        return modules[moduleId].call(module.exports, module, module.exports, function(moduleId) {
            var me = installedModules[moduleId];
            if (!me) return __webpack_require__;
            var fn = function(request) {
                return me.hot.active ? (installedModules[request] ? -1 === installedModules[request].parents.indexOf(moduleId) && installedModules[request].parents.push(moduleId) : (hotCurrentParents = [ moduleId ], 
                hotCurrentChildModule = request), -1 === me.children.indexOf(request) && me.children.push(request)) : (console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId), 
                hotCurrentParents = []), __webpack_require__(request);
            }, ObjectFactory = function(name) {
                return {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return __webpack_require__[name];
                    },
                    set: function(value) {
                        __webpack_require__[name] = value;
                    }
                };
            };
            for (var name in __webpack_require__) Object.prototype.hasOwnProperty.call(__webpack_require__, name) && "e" !== name && "t" !== name && Object.defineProperty(fn, name, ObjectFactory(name));
            return fn.e = function(chunkId) {
                return "ready" === hotStatus && hotSetStatus("prepare"), hotChunksLoading++, __webpack_require__.e(chunkId).then(finishChunkLoading, (function(err) {
                    throw finishChunkLoading(), err;
                }));
                function finishChunkLoading() {
                    hotChunksLoading--, "prepare" === hotStatus && (hotWaitingFilesMap[chunkId] || hotEnsureUpdateChunk(chunkId), 
                    0 === hotChunksLoading && 0 === hotWaitingFiles && hotUpdateDownloaded());
                }
            }, fn.t = function(value, mode) {
                return 1 & mode && (value = fn(value)), __webpack_require__.t(value, -2 & mode);
            }, fn;
        }(moduleId)), module.l = !0, module.exports;
    }
    __webpack_require__.e = function(chunkId) {
        var promises = [], installedChunkData = installedChunks[chunkId];
        if (0 !== installedChunkData) if (installedChunkData) promises.push(installedChunkData[2]); else {
            var promise = new Promise((function(resolve, reject) {
                installedChunkData = installedChunks[chunkId] = [ resolve, reject ];
            }));
            promises.push(installedChunkData[2] = promise);
            var onScriptComplete, script = document.createElement("script");
            script.charset = "utf-8", script.timeout = 120, __webpack_require__.nc && script.setAttribute("nonce", __webpack_require__.nc), 
            script.src = function(chunkId) {
                return __webpack_require__.p + "" + ({
                    3: "core-components-Footer-Footer",
                    4: "pages-ConfigurationPage-ConfigurationPage",
                    5: "pages-HistoryPage-HistoryPage",
                    6: "pages-SettingsPage-SettingsPage"
                }[chunkId] || chunkId) + ".js";
            }(chunkId);
            var error = new Error;
            onScriptComplete = function(event) {
                script.onerror = script.onload = null, clearTimeout(timeout);
                var chunk = installedChunks[chunkId];
                if (0 !== chunk) {
                    if (chunk) {
                        var errorType = event && ("load" === event.type ? "missing" : event.type), realSrc = event && event.target && event.target.src;
                        error.message = "Loading chunk " + chunkId + " failed.\n(" + errorType + ": " + realSrc + ")", 
                        error.name = "ChunkLoadError", error.type = errorType, error.request = realSrc, 
                        chunk[1](error);
                    }
                    installedChunks[chunkId] = void 0;
                }
            };
            var timeout = setTimeout((function() {
                onScriptComplete({
                    type: "timeout",
                    target: script
                });
            }), 12e4);
            script.onerror = script.onload = onScriptComplete, document.head.appendChild(script);
        }
        return Promise.all(promises);
    }, __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.r = function(exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, __webpack_require__.t = function(value, mode) {
        if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__.oe = function(err) {
        throw console.error(err), err;
    }, __webpack_require__.h = function() {
        return hotCurrentHash;
    };
    var jsonpArray = window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || [], oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback, jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ 18, 1, 0 ]), checkDeferredModules();
}({
    12: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0), react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__), _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1), _loadable_component__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_1__), _Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13), _core_styles_variables_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58), _core_styles_variables_scss__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(_core_styles_variables_scss__WEBPACK_IMPORTED_MODULE_3__), _App_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59), _App_scss__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_4__), Footer = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({
            resolved: {},
            chunkName: function() {
                return "core-components-Footer-Footer";
            },
            isReady: function(props) {
                var key = this.resolve(props);
                return !0 === this.resolved[key] && !!__webpack_require__.m[key];
            },
            importAsync: function() {
                return Promise.all([ __webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(3) ]).then(__webpack_require__.bind(null, 14));
            },
            requireAsync: function(props) {
                var _this = this, key = this.resolve(props);
                return this.resolved[key] = !1, this.importAsync(props).then((function(resolved) {
                    return _this.resolved[key] = !0, resolved;
                }));
            },
            requireSync: function requireSync(props) {
                var id = this.resolve(props);
                return __webpack_require__(id);
            },
            resolve: function resolve() {
                return 14;
            }
        }), App = function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Routes__WEBPACK_IMPORTED_MODULE_2__.a, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, null));
        };
        __webpack_exports__.a = App;
    },
    13: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return Routes;
        }));
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0), react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__), react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2), react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__), _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1), _loadable_component__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_2__), ConfigurationPage = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({
            resolved: {},
            chunkName: function() {
                return "pages-ConfigurationPage-ConfigurationPage";
            },
            isReady: function(props) {
                var key = this.resolve(props);
                return !0 === this.resolved[key] && !!__webpack_require__.m[key];
            },
            importAsync: function() {
                return Promise.all([ __webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(4) ]).then(__webpack_require__.bind(null, 15));
            },
            requireAsync: function(props) {
                var _this = this, key = this.resolve(props);
                return this.resolved[key] = !1, this.importAsync(props).then((function(resolved) {
                    return _this.resolved[key] = !0, resolved;
                }));
            },
            requireSync: function requireSync(props) {
                var id = this.resolve(props);
                return __webpack_require__(id);
            },
            resolve: function resolve() {
                return 15;
            }
        }), SettingsPage = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({
            resolved: {},
            chunkName: function() {
                return "pages-SettingsPage-SettingsPage";
            },
            isReady: function(props) {
                var key = this.resolve(props);
                return !0 === this.resolved[key] && !!__webpack_require__.m[key];
            },
            importAsync: function() {
                return Promise.all([ __webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(6) ]).then(__webpack_require__.bind(null, 16));
            },
            requireAsync: function(props) {
                var _this = this, key = this.resolve(props);
                return this.resolved[key] = !1, this.importAsync(props).then((function(resolved) {
                    return _this.resolved[key] = !0, resolved;
                }));
            },
            requireSync: function requireSync(props) {
                var id = this.resolve(props);
                return __webpack_require__(id);
            },
            resolve: function resolve() {
                return 16;
            }
        }), HistoryPage = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({
            resolved: {},
            chunkName: function() {
                return "pages-HistoryPage-HistoryPage";
            },
            isReady: function(props) {
                var key = this.resolve(props);
                return !0 === this.resolved[key] && !!__webpack_require__.m[key];
            },
            importAsync: function() {
                return Promise.all([ __webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(5) ]).then(__webpack_require__.bind(null, 17));
            },
            requireAsync: function(props) {
                var _this = this, key = this.resolve(props);
                return this.resolved[key] = !1, this.importAsync(props).then((function(resolved) {
                    return _this.resolved[key] = !0, resolved;
                }));
            },
            requireSync: function requireSync(props) {
                var id = this.resolve(props);
                return __webpack_require__(id);
            },
            resolve: function resolve() {
                return 17;
            }
        }), Routes = function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
                path: "/",
                exact: !0,
                component: ConfigurationPage
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
                path: "/settings",
                component: SettingsPage
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
                path: "/history",
                component: HistoryPage
            }));
        };
    },
    18: function(module, exports, __webpack_require__) {
        __webpack_require__(19), __webpack_require__(22), module.exports = __webpack_require__(36);
    },
    36: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0), react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__), react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11), react_dom__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__), react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2), _loadable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1), _pages_App_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12), app = (__webpack_require__(60), 
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_App_App__WEBPACK_IMPORTED_MODULE_4__.a, null)));
        Object(_loadable_component__WEBPACK_IMPORTED_MODULE_3__.loadableReady)((function() {
            react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate(app, document.getElementById("root"));
        }));
    }
});