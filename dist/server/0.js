exports.ids = [0];
exports.modules = {
    /***/ './server/HttpStatus.ts':
        /*!******************************!*\
  !*** ./server/HttpStatus.ts ***!
  \******************************/
        /*! exports provided: HttpStatus */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'HttpStatus',
                function() {
                    return HttpStatus;
                },
            );
            let HttpStatus;

            (function(HttpStatus) {
                HttpStatus[(HttpStatus['CONTINUE'] = 100)] = 'CONTINUE';
                HttpStatus[(HttpStatus['SWITCHING_PROTOCOLS'] = 101)] = 'SWITCHING_PROTOCOLS';
                HttpStatus[(HttpStatus['PROCESSING'] = 102)] = 'PROCESSING';
                HttpStatus[(HttpStatus['OK'] = 200)] = 'OK';
                HttpStatus[(HttpStatus['CREATED'] = 201)] = 'CREATED';
                HttpStatus[(HttpStatus['ACCEPTED'] = 202)] = 'ACCEPTED';
                HttpStatus[(HttpStatus['NON_AUTHORITATIVE_INFORMATION'] = 203)] =
                    'NON_AUTHORITATIVE_INFORMATION';
                HttpStatus[(HttpStatus['NO_CONTENT'] = 204)] = 'NO_CONTENT';
                HttpStatus[(HttpStatus['RESET_CONTENT'] = 205)] = 'RESET_CONTENT';
                HttpStatus[(HttpStatus['PARTIAL_CONTENT'] = 206)] = 'PARTIAL_CONTENT';
                HttpStatus[(HttpStatus['AMBIGUOUS'] = 300)] = 'AMBIGUOUS';
                HttpStatus[(HttpStatus['MOVED_PERMANENTLY'] = 301)] = 'MOVED_PERMANENTLY';
                HttpStatus[(HttpStatus['FOUND'] = 302)] = 'FOUND';
                HttpStatus[(HttpStatus['SEE_OTHER'] = 303)] = 'SEE_OTHER';
                HttpStatus[(HttpStatus['NOT_MODIFIED'] = 304)] = 'NOT_MODIFIED';
                HttpStatus[(HttpStatus['TEMPORARY_REDIRECT'] = 307)] = 'TEMPORARY_REDIRECT';
                HttpStatus[(HttpStatus['PERMANENT_REDIRECT'] = 308)] = 'PERMANENT_REDIRECT';
                HttpStatus[(HttpStatus['BAD_REQUEST'] = 400)] = 'BAD_REQUEST';
                HttpStatus[(HttpStatus['UNAUTHORIZED'] = 401)] = 'UNAUTHORIZED';
                HttpStatus[(HttpStatus['PAYMENT_REQUIRED'] = 402)] = 'PAYMENT_REQUIRED';
                HttpStatus[(HttpStatus['FORBIDDEN'] = 403)] = 'FORBIDDEN';
                HttpStatus[(HttpStatus['NOT_FOUND'] = 404)] = 'NOT_FOUND';
                HttpStatus[(HttpStatus['METHOD_NOT_ALLOWED'] = 405)] = 'METHOD_NOT_ALLOWED';
                HttpStatus[(HttpStatus['NOT_ACCEPTABLE'] = 406)] = 'NOT_ACCEPTABLE';
                HttpStatus[(HttpStatus['PROXY_AUTHENTICATION_REQUIRED'] = 407)] =
                    'PROXY_AUTHENTICATION_REQUIRED';
                HttpStatus[(HttpStatus['REQUEST_TIMEOUT'] = 408)] = 'REQUEST_TIMEOUT';
                HttpStatus[(HttpStatus['CONFLICT'] = 409)] = 'CONFLICT';
                HttpStatus[(HttpStatus['GONE'] = 410)] = 'GONE';
                HttpStatus[(HttpStatus['LENGTH_REQUIRED'] = 411)] = 'LENGTH_REQUIRED';
                HttpStatus[(HttpStatus['PRECONDITION_FAILED'] = 412)] = 'PRECONDITION_FAILED';
                HttpStatus[(HttpStatus['PAYLOAD_TOO_LARGE'] = 413)] = 'PAYLOAD_TOO_LARGE';
                HttpStatus[(HttpStatus['URI_TOO_LONG'] = 414)] = 'URI_TOO_LONG';
                HttpStatus[(HttpStatus['UNSUPPORTED_MEDIA_TYPE'] = 415)] = 'UNSUPPORTED_MEDIA_TYPE';
                HttpStatus[(HttpStatus['REQUESTED_RANGE_NOT_SATISFIABLE'] = 416)] =
                    'REQUESTED_RANGE_NOT_SATISFIABLE';
                HttpStatus[(HttpStatus['EXPECTATION_FAILED'] = 417)] = 'EXPECTATION_FAILED';
                HttpStatus[(HttpStatus['I_AM_A_TEAPOT'] = 418)] = 'I_AM_A_TEAPOT';
                HttpStatus[(HttpStatus['UNPROCESSABLE_ENTITY'] = 422)] = 'UNPROCESSABLE_ENTITY';
                HttpStatus[(HttpStatus['FAILED_DEPENDENCY'] = 424)] = 'FAILED_DEPENDENCY';
                HttpStatus[(HttpStatus['TOO_MANY_REQUESTS'] = 429)] = 'TOO_MANY_REQUESTS';
                HttpStatus[(HttpStatus['INTERNAL_SERVER_ERROR'] = 500)] = 'INTERNAL_SERVER_ERROR';
                HttpStatus[(HttpStatus['NOT_IMPLEMENTED'] = 501)] = 'NOT_IMPLEMENTED';
                HttpStatus[(HttpStatus['BAD_GATEWAY'] = 502)] = 'BAD_GATEWAY';
                HttpStatus[(HttpStatus['SERVICE_UNAVAILABLE'] = 503)] = 'SERVICE_UNAVAILABLE';
                HttpStatus[(HttpStatus['GATEWAY_TIMEOUT'] = 504)] = 'GATEWAY_TIMEOUT';
                HttpStatus[(HttpStatus['HTTP_VERSION_NOT_SUPPORTED'] = 505)] =
                    'HTTP_VERSION_NOT_SUPPORTED';
            })(HttpStatus || (HttpStatus = {}));

            /***/
        },

    /***/ './server/components/builds/buildControllers.ts':
        /*!******************************************************!*\
  !*** ./server/components/builds/buildControllers.ts ***!
  \******************************************************/
        /*! exports provided: getBuilds, saveBuild, getBuildDetails, getBuildLogs, deleteBuilds */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'getBuilds',
                function() {
                    return getBuilds;
                },
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'saveBuild',
                function() {
                    return saveBuild;
                },
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'getBuildDetails',
                function() {
                    return getBuildDetails;
                },
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'getBuildLogs',
                function() {
                    return getBuildLogs;
                },
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'deleteBuilds',
                function() {
                    return deleteBuilds;
                },
            );
            /* harmony import */ var _server_components_error_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! @server/components/error/error */ './server/components/error/error.ts',
            );
            /* harmony import */ var _server_components_gitCommands_gitCommandsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @server/components/gitCommands/gitCommandsService */ './server/components/gitCommands/gitCommandsService.ts',
            );
            /* harmony import */ var _server_components_settings_settingsServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! @server/components/settings/settingsServices */ './server/components/settings/settingsServices.ts',
            );
            /* harmony import */ var _buildServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! ./buildServices */ './server/components/builds/buildServices.ts',
            );

            const getBuilds = async (_, res) => {
                try {
                    const builds = await _buildServices__WEBPACK_IMPORTED_MODULE_3__[
                        'buildService'
                    ].getBuilds();
                    res.send(builds);
                } catch (err) {
                    throw new _server_components_error_error__WEBPACK_IMPORTED_MODULE_0__[
                        'AppError'
                    ](err.name, err.httpCode, err.description);
                }
            };
            const saveBuild = async (req, res) => {
                const { commitHash } = req.body;
                const settings = await _server_components_settings_settingsServices__WEBPACK_IMPORTED_MODULE_2__[
                    'settingsService'
                ].getSettings();
                const branchName =
                    settings === null || settings === void 0 ? void 0 : settings.mainBranch;
                const buildInfo = await _server_components_gitCommands_gitCommandsService__WEBPACK_IMPORTED_MODULE_1__[
                    'gitCommandsService'
                ].getCommitByHash(commitHash, branchName);

                try {
                    const result = await _buildServices__WEBPACK_IMPORTED_MODULE_3__[
                        'buildService'
                    ].saveBuild(buildInfo);
                    res.send(result);
                } catch (err) {
                    throw new _server_components_error_error__WEBPACK_IMPORTED_MODULE_0__[
                        'AppError'
                    ](err.name, err.httpCode, err.description);
                }
            };
            const getBuildDetails = async (req, res) => {
                try {
                    const response = await _buildServices__WEBPACK_IMPORTED_MODULE_3__[
                        'buildService'
                    ].getBuildDetails(req.params.id);
                    res.send(response);
                } catch (err) {
                    throw new _server_components_error_error__WEBPACK_IMPORTED_MODULE_0__[
                        'AppError'
                    ](err.name, err.httpCode, err.description);
                }
            };
            const getBuildLogs = async (req, res) => {
                try {
                    const result = await _buildServices__WEBPACK_IMPORTED_MODULE_3__[
                        'buildService'
                    ].getBuildDetails(req.params.id);
                    res.send(result === null || result === void 0 ? void 0 : result.buildLogs);
                } catch (err) {
                    throw new _server_components_error_error__WEBPACK_IMPORTED_MODULE_0__[
                        'AppError'
                    ](err.name, err.httpCode, err.description);
                }
            };
            const deleteBuilds = async (_, res) => {
                try {
                    await _buildServices__WEBPACK_IMPORTED_MODULE_3__[
                        'buildService'
                    ].deleteBuilds();
                    res.send('success');
                } catch (err) {
                    throw new _server_components_error_error__WEBPACK_IMPORTED_MODULE_0__[
                        'AppError'
                    ](err.name, err.httpCode, err.description);
                }
            };

            /***/
        },

    /***/ './server/components/builds/buildRouter.ts':
        /*!*************************************************!*\
  !*** ./server/components/builds/buildRouter.ts ***!
  \*************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! express */ 'express',
            );
            /* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                express__WEBPACK_IMPORTED_MODULE_0__,
            );
            /* harmony import */ var _buildControllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./buildControllers */ './server/components/builds/buildControllers.ts',
            );

            const router = Object(express__WEBPACK_IMPORTED_MODULE_0__['Router'])();
            router.get('/', _buildControllers__WEBPACK_IMPORTED_MODULE_1__['getBuilds']);
            router.post('/', _buildControllers__WEBPACK_IMPORTED_MODULE_1__['saveBuild']);
            router.get('/:id', _buildControllers__WEBPACK_IMPORTED_MODULE_1__['getBuildDetails']);
            router.get('/:id/logs', _buildControllers__WEBPACK_IMPORTED_MODULE_1__['getBuildLogs']);
            router.delete('/', _buildControllers__WEBPACK_IMPORTED_MODULE_1__['deleteBuilds']);
            /* harmony default export */ __webpack_exports__['default'] = router;

            /***/
        },

    /***/ './server/components/builds/buildServices.ts':
        /*!***************************************************!*\
  !*** ./server/components/builds/buildServices.ts ***!
  \***************************************************/
        /*! exports provided: buildService */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'buildService',
                function() {
                    return buildService;
                },
            );
            /* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! deep-equal */ 'deep-equal',
            );
            /* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                deep_equal__WEBPACK_IMPORTED_MODULE_0__,
            );
            /* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! typeorm */ 'typeorm',
            );
            /* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                typeorm__WEBPACK_IMPORTED_MODULE_1__,
            );
            /* harmony import */ var _server_components_error_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! @server/components/error/error */ './server/components/error/error.ts',
            );
            /* harmony import */ var _server_HttpStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! @server/HttpStatus */ './server/HttpStatus.ts',
            );
            /* harmony import */ var _buildsEntity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! ./buildsEntity */ './server/components/builds/buildsEntity.ts',
            );

            const buildService = {
                getBuilds: async () => {
                    try {
                        const repository = Object(
                            typeorm__WEBPACK_IMPORTED_MODULE_1__['getRepository'],
                        )(_buildsEntity__WEBPACK_IMPORTED_MODULE_4__['Build']);
                        return repository.find();
                    } catch (err) {
                        throw new _server_components_error_error__WEBPACK_IMPORTED_MODULE_2__[
                            'AppError'
                        ](err.name, err.httpCode, err.description);
                    }
                },
                getBuild: async buildId => {
                    try {
                        const repository = Object(
                            typeorm__WEBPACK_IMPORTED_MODULE_1__['getRepository'],
                        )(_buildsEntity__WEBPACK_IMPORTED_MODULE_4__['Build']);
                        return repository.findOne(buildId);
                    } catch (err) {
                        throw new _server_components_error_error__WEBPACK_IMPORTED_MODULE_2__[
                            'AppError'
                        ](err.name, err.httpCode, err.description);
                    }
                },
                saveBuild: async build => {
                    try {
                        const repository = Object(
                            typeorm__WEBPACK_IMPORTED_MODULE_1__['getRepository'],
                        )(_buildsEntity__WEBPACK_IMPORTED_MODULE_4__['Build']);
                        return repository.save(build);
                    } catch (err) {
                        throw new _server_components_error_error__WEBPACK_IMPORTED_MODULE_2__[
                            'AppError'
                        ](err.name, err.httpCode, err.description);
                    }
                },
                updateBuild: async (buildId, buildData) => {
                    try {
                        const repository = Object(
                            typeorm__WEBPACK_IMPORTED_MODULE_1__['getRepository'],
                        )(_buildsEntity__WEBPACK_IMPORTED_MODULE_4__['Build']);
                        const prevBuild = await repository.findOne({
                            id: buildId,
                        });
                        const isEqual = deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(
                            prevBuild,
                            buildData,
                        );

                        if (!isEqual) {
                            repository.save(buildData);
                            return _server_HttpStatus__WEBPACK_IMPORTED_MODULE_3__['HttpStatus'].OK;
                        } else {
                            return _server_HttpStatus__WEBPACK_IMPORTED_MODULE_3__['HttpStatus']
                                .NOT_MODIFIED;
                        }
                    } catch (err) {
                        throw new _server_components_error_error__WEBPACK_IMPORTED_MODULE_2__[
                            'AppError'
                        ](err.name, err.httpCode, err.description);
                    }
                },
                deleteBuilds: async () => {
                    try {
                        const repository = Object(
                            typeorm__WEBPACK_IMPORTED_MODULE_1__['getRepository'],
                        )(_buildsEntity__WEBPACK_IMPORTED_MODULE_4__['Build']);
                        await repository.clear();
                    } catch (err) {
                        throw new _server_components_error_error__WEBPACK_IMPORTED_MODULE_2__[
                            'AppError'
                        ](err.name, err.httpCode, err.description);
                    }
                },
                getBuildDetails: async buildId => {
                    try {
                        const repository = Object(
                            typeorm__WEBPACK_IMPORTED_MODULE_1__['getRepository'],
                        )(_buildsEntity__WEBPACK_IMPORTED_MODULE_4__['Build']);
                        return repository.findOne({
                            id: buildId,
                        });
                    } catch (err) {
                        throw new _server_components_error_error__WEBPACK_IMPORTED_MODULE_2__[
                            'AppError'
                        ](err.name, err.httpCode, err.description);
                    }
                },
            };

            /***/
        },

    /***/ './server/components/error/error.ts':
        /*!******************************************!*\
  !*** ./server/components/error/error.ts ***!
  \******************************************/
        /*! exports provided: AppError */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'AppError',
                function() {
                    return AppError;
                },
            );
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

            class AppError extends Error {
                constructor(name, httpCode, description, isOperational = true) {
                    super(description);

                    _defineProperty(this, 'name', void 0);

                    _defineProperty(this, 'httpCode', void 0);

                    _defineProperty(this, 'isOperational', void 0);

                    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain

                    this.name = name;
                    this.httpCode = httpCode;
                    this.isOperational = isOperational;
                    Error.captureStackTrace(this);
                }
            }

            /***/
        },

    /***/ './server/components/gitCommands/gitCommandsService.ts':
        /*!*************************************************************!*\
  !*** ./server/components/gitCommands/gitCommandsService.ts ***!
  \*************************************************************/
        /*! exports provided: gitCommandsService */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'gitCommandsService',
                function() {
                    return gitCommandsService;
                },
            );
            /* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! path */ 'path',
            );
            /* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                path__WEBPACK_IMPORTED_MODULE_0__,
            );
            /* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! util */ 'util',
            );
            /* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                util__WEBPACK_IMPORTED_MODULE_1__,
            );
            /* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! child_process */ 'child_process',
            );
            /* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                child_process__WEBPACK_IMPORTED_MODULE_2__,
            );
            /* harmony import */ var os__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! os */ 'os',
            );
            /* harmony import */ var os__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
                os__WEBPACK_IMPORTED_MODULE_3__,
            );
            /* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! fs */ 'fs',
            );
            /* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
                fs__WEBPACK_IMPORTED_MODULE_4__,
            );
            /* harmony import */ var _server_components_error_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! @server/components/error/error */ './server/components/error/error.ts',
            );

            __webpack_require__(/*! dotenv */ 'dotenv').config();

            const localRepo = process.env.LOCAL_REPO || '';
            const execAsync = Object(util__WEBPACK_IMPORTED_MODULE_1__['promisify'])(
                child_process__WEBPACK_IMPORTED_MODULE_2__['exec'],
            );
            const homeDir = os__WEBPACK_IMPORTED_MODULE_3___default.a.homedir();
            const localRepoPath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(
                homeDir,
                localRepo,
            );
            const gitCommandsService = {
                executeCommand: async (command, options) => {
                    return execAsync(command, options);
                },
                cloneRepo: (username, repoName) => {
                    try {
                        const isLocalRepo = gitCommandsService.findLocalRepo();

                        if (isLocalRepo) {
                            gitCommandsService.deleteLocalRepo();
                        }

                        const command = `git clone https://github.com/${username}/${repoName} ${localRepoPath}`;
                        gitCommandsService.executeCommand(command);
                    } catch (err) {
                        throw new _server_components_error_error__WEBPACK_IMPORTED_MODULE_5__[
                            'AppError'
                        ](err.name, err.httpCode, err.description);
                    }
                },
                findLocalRepo: () => {
                    try {
                        const file = fs__WEBPACK_IMPORTED_MODULE_4___default.a.statSync(
                            path__WEBPACK_IMPORTED_MODULE_0___default.a.join(homeDir, localRepo),
                        );
                        return file.isDirectory();
                    } catch (err) {
                        throw new _server_components_error_error__WEBPACK_IMPORTED_MODULE_5__[
                            'AppError'
                        ](err.name, err.httpCode, err.description);
                    }
                },
                deleteLocalRepo: () => {
                    try {
                        const command = `rm -rf ${localRepoPath}`;
                        gitCommandsService.executeCommand(command);
                    } catch (err) {
                        throw new _server_components_error_error__WEBPACK_IMPORTED_MODULE_5__[
                            'AppError'
                        ](err.name, err.httpCode, err.description);
                    }
                },
                checkout: branchName => {
                    try {
                        const command = `cd ${localRepoPath} && git checkout ${branchName}`;
                        gitCommandsService.executeCommand(command);
                    } catch (err) {
                        throw new _server_components_error_error__WEBPACK_IMPORTED_MODULE_5__[
                            'AppError'
                        ](err.name, err.httpCode, err.description);
                    }
                },
                getCommitByHash: async (commitHash = '', branchName = 'master') => {
                    await gitCommandsService.checkout(branchName);
                    const { stdout } = await gitCommandsService.executeCommand(
                        `git log -1 --format="%an|%B" ${commitHash}`,
                        {
                            cwd: localRepoPath,
                        },
                    );
                    const [authorName, commitMessage] = String(stdout)
                        .replace(/\n/g, '')
                        .split('|');
                    return {
                        authorName,
                        commitMessage,
                        commitHash,
                        branchName,
                    };
                },
            };

            /***/
        },

    /***/ './server/components/routes.ts':
        /*!*************************************!*\
  !*** ./server/components/routes.ts ***!
  \*************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! express */ 'express',
            );
            /* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                express__WEBPACK_IMPORTED_MODULE_0__,
            );
            /* harmony import */ var _builds_buildRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./builds/buildRouter */ './server/components/builds/buildRouter.ts',
            );
            /* harmony import */ var _settings_settingsRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! ./settings/settingsRouter */ './server/components/settings/settingsRouter.ts',
            );

            const router = Object(express__WEBPACK_IMPORTED_MODULE_0__['Router'])();
            /* harmony default export */ __webpack_exports__['default'] = function() {
                router.use(
                    '/settings',
                    _settings_settingsRouter__WEBPACK_IMPORTED_MODULE_2__['default'],
                );
                router.use('/builds', _builds_buildRouter__WEBPACK_IMPORTED_MODULE_1__['default']);
                return router;
            };

            /***/
        },

    /***/ './server/components/settings/settingsControllers.ts':
        /*!***********************************************************!*\
  !*** ./server/components/settings/settingsControllers.ts ***!
  \***********************************************************/
        /*! exports provided: getSettings, saveSettings */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'getSettings',
                function() {
                    return getSettings;
                },
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'saveSettings',
                function() {
                    return saveSettings;
                },
            );
            /* harmony import */ var _server_components_error_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! @server/components/error/error */ './server/components/error/error.ts',
            );
            /* harmony import */ var _server_components_gitCommands_gitCommandsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @server/components/gitCommands/gitCommandsService */ './server/components/gitCommands/gitCommandsService.ts',
            );
            /* harmony import */ var _settingsServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! ./settingsServices */ './server/components/settings/settingsServices.ts',
            );

            const getSettings = async (_, res) => {
                try {
                    const result = await _settingsServices__WEBPACK_IMPORTED_MODULE_2__[
                        'settingsService'
                    ].getSettings();
                    res.send(result);
                } catch (err) {
                    throw new _server_components_error_error__WEBPACK_IMPORTED_MODULE_0__[
                        'AppError'
                    ](err.name, err.httpCode, err.description);
                }
            };
            const saveSettings = async (req, res) => {
                try {
                    const result = await _settingsServices__WEBPACK_IMPORTED_MODULE_2__[
                        'settingsService'
                    ].saveSettings(req.body);
                    await _server_components_gitCommands_gitCommandsService__WEBPACK_IMPORTED_MODULE_1__[
                        'gitCommandsService'
                    ].cloneRepo('OlaIstra', req.body.repoName);
                    res.send(result);
                } catch (err) {
                    throw new _server_components_error_error__WEBPACK_IMPORTED_MODULE_0__[
                        'AppError'
                    ](err.name, err.httpCode, err.description);
                }
            };

            /***/
        },

    /***/ './server/components/settings/settingsRouter.ts':
        /*!******************************************************!*\
  !*** ./server/components/settings/settingsRouter.ts ***!
  \******************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! express */ 'express',
            );
            /* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                express__WEBPACK_IMPORTED_MODULE_0__,
            );
            /* harmony import */ var _settingsControllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./settingsControllers */ './server/components/settings/settingsControllers.ts',
            );

            const router = Object(express__WEBPACK_IMPORTED_MODULE_0__['Router'])();
            router.get('/', _settingsControllers__WEBPACK_IMPORTED_MODULE_1__['getSettings']);
            router.post('/', _settingsControllers__WEBPACK_IMPORTED_MODULE_1__['saveSettings']);
            /* harmony default export */ __webpack_exports__['default'] = router;

            /***/
        },

    /***/ './server/components/settings/settingsServices.ts':
        /*!********************************************************!*\
  !*** ./server/components/settings/settingsServices.ts ***!
  \********************************************************/
        /*! exports provided: settingsService */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'settingsService',
                function() {
                    return settingsService;
                },
            );
            /* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! deep-equal */ 'deep-equal',
            );
            /* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                deep_equal__WEBPACK_IMPORTED_MODULE_0__,
            );
            /* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! typeorm */ 'typeorm',
            );
            /* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                typeorm__WEBPACK_IMPORTED_MODULE_1__,
            );
            /* harmony import */ var _server_components_error_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! @server/components/error/error */ './server/components/error/error.ts',
            );
            /* harmony import */ var _server_HttpStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! @server/HttpStatus */ './server/HttpStatus.ts',
            );
            /* harmony import */ var _settingsEntity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! ./settingsEntity */ './server/components/settings/settingsEntity.ts',
            );

            const settingsService = {
                getSettings: async () => {
                    try {
                        const repository = Object(
                            typeorm__WEBPACK_IMPORTED_MODULE_1__['getRepository'],
                        )(_settingsEntity__WEBPACK_IMPORTED_MODULE_4__['Settings']);
                        return repository.findOne();
                    } catch (err) {
                        throw new _server_components_error_error__WEBPACK_IMPORTED_MODULE_2__[
                            'AppError'
                        ](err.name, err.httpCode, err.description);
                    }
                },
                saveSettings: async settingsData => {
                    try {
                        const repository = Object(
                            typeorm__WEBPACK_IMPORTED_MODULE_1__['getRepository'],
                        )(_settingsEntity__WEBPACK_IMPORTED_MODULE_4__['Settings']);
                        const prevSettings = await repository.findOne();

                        if (!prevSettings) {
                            await repository.save(settingsData);
                            return _server_HttpStatus__WEBPACK_IMPORTED_MODULE_3__['HttpStatus'].OK;
                        }

                        const newSettings = repository.create({
                            ...settingsData,
                            id: prevSettings.id,
                        });
                        const isEqual = deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(
                            prevSettings,
                            newSettings,
                        );

                        if (!isEqual) {
                            await repository.update(prevSettings.id, newSettings);
                            return _server_HttpStatus__WEBPACK_IMPORTED_MODULE_3__['HttpStatus'].OK;
                        } else {
                            return _server_HttpStatus__WEBPACK_IMPORTED_MODULE_3__['HttpStatus']
                                .NOT_MODIFIED;
                        }
                    } catch (err) {
                        throw new _server_components_error_error__WEBPACK_IMPORTED_MODULE_2__[
                            'AppError'
                        ](err.name, err.httpCode, err.description);
                    }
                },
            };

            /***/
        },
};
//# sourceMappingURL=0.js.map
