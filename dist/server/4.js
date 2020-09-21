(exports.ids = [4]),
    (exports.modules = {
        65: function(t, e, r) {
            'use strict';
            r.r(e);
            var n = r(3);
            function o(t) {
                return (o =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function(t) {
                              return typeof t;
                          }
                        : function(t) {
                              return t &&
                                  'function' == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof t;
                          })(t);
            }
            function a(t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            }
            function c(t, e) {
                return !e || ('object' !== o(e) && 'function' != typeof e) ? u(t) : e;
            }
            function u(t) {
                if (void 0 === t)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                    );
                return t;
            }
            function i(t) {
                var e = 'function' == typeof Map ? new Map() : void 0;
                return (i = function(t) {
                    if (
                        null === t ||
                        ((r = t), -1 === Function.toString.call(r).indexOf('[native code]'))
                    )
                        return t;
                    var r;
                    if ('function' != typeof t)
                        throw new TypeError('Super expression must either be null or a function');
                    if (void 0 !== e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, n);
                    }
                    function n() {
                        return s(t, arguments, l(this).constructor);
                    }
                    return (
                        (n.prototype = Object.create(t.prototype, {
                            constructor: {
                                value: n,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0,
                            },
                        })),
                        f(n, t)
                    );
                })(t);
            }
            function s(t, e, r) {
                return (s = p()
                    ? Reflect.construct
                    : function(t, e, r) {
                          var n = [null];
                          n.push.apply(n, e);
                          var o = new (Function.bind.apply(t, n))();
                          return r && f(o, r.prototype), o;
                      }).apply(null, arguments);
            }
            function p() {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                    return (
                        Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    );
                } catch (t) {
                    return !1;
                }
            }
            function f(t, e) {
                return (f =
                    Object.setPrototypeOf ||
                    function(t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function l(t) {
                return (l = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function(t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            function E(t, e, r) {
                return (
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = r),
                    t
                );
            }
            var O = (function(t) {
                    !(function(t, e) {
                        if ('function' != typeof e && null !== e)
                            throw new TypeError(
                                'Super expression must either be null or a function',
                            );
                        (t.prototype = Object.create(e && e.prototype, {
                            constructor: { value: t, writable: !0, configurable: !0 },
                        })),
                            e && f(t, e);
                    })(o, t);
                    var e,
                        r,
                        n =
                            ((e = o),
                            (r = p()),
                            function() {
                                var t,
                                    n = l(e);
                                if (r) {
                                    var o = l(this).constructor;
                                    t = Reflect.construct(n, arguments, o);
                                } else t = n.apply(this, arguments);
                                return c(this, t);
                            });
                    function o(t, e, r) {
                        var c,
                            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                        return (
                            a(this, o),
                            E(u((c = n.call(this, r))), 'name', void 0),
                            E(u(c), 'httpCode', void 0),
                            E(u(c), 'isOperational', void 0),
                            Object.setPrototypeOf(
                                u(c),
                                (this instanceof o ? this.constructor : void 0).prototype,
                            ),
                            (c.name = t),
                            (c.httpCode = e),
                            (c.isOperational = i),
                            Error.captureStackTrace(u(c)),
                            c
                        );
                    }
                    return o;
                })(i(Error)),
                d = r(6),
                h = r.n(d),
                v = r(45),
                R = r(46),
                m = r(47),
                T = r.n(m),
                y = r(14),
                N = r.n(y);
            function w(t, e) {
                return (
                    (function(t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function(t, e) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                        var r = [],
                            n = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (
                                var c, u = t[Symbol.iterator]();
                                !(n = (c = u.next()).done) &&
                                (r.push(c.value), !e || r.length !== e);
                                n = !0
                            );
                        } catch (t) {
                            (o = !0), (a = t);
                        } finally {
                            try {
                                n || null == u.return || u.return();
                            } finally {
                                if (o) throw a;
                            }
                        }
                        return r;
                    })(t, e) ||
                    (function(t, e) {
                        if (!t) return;
                        if ('string' == typeof t) return _(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        'Object' === r && t.constructor && (r = t.constructor.name);
                        if ('Map' === r || 'Set' === r) return Array.from(t);
                        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                            return _(t, e);
                    })(t, e) ||
                    (function() {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function _(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n;
            }
            function b(t, e, r, n, o, a, c) {
                try {
                    var u = t[a](c),
                        i = u.value;
                } catch (t) {
                    return void r(t);
                }
                u.done ? e(i) : Promise.resolve(i).then(n, o);
            }
            function g(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise(function(n, o) {
                        var a = t.apply(e, r);
                        function c(t) {
                            b(a, n, o, c, u, 'next', t);
                        }
                        function u(t) {
                            b(a, n, o, c, u, 'throw', t);
                        }
                        c(void 0);
                    });
                };
            }
            r(10).config();
            var A,
                I,
                D,
                C = process.env.LOCAL_REPO || '',
                P = Object(v.promisify)(R.exec),
                S = T.a.homedir(),
                x = h.a.join(S, C),
                U = {
                    executeCommand:
                        ((I = g(
                            regeneratorRuntime.mark(function t(e, r) {
                                return regeneratorRuntime.wrap(function(t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return t.abrupt('return', P(e, r));
                                            case 1:
                                            case 'end':
                                                return t.stop();
                                        }
                                }, t);
                            }),
                        )),
                        function(t, e) {
                            return I.apply(this, arguments);
                        }),
                    cloneRepo: function(t, e) {
                        try {
                            U.findLocalRepo() && U.deleteLocalRepo();
                            var r = 'git clone https://github.com/'
                                .concat(t, '/')
                                .concat(e, ' ')
                                .concat(x);
                            U.executeCommand(r);
                        } catch (t) {
                            throw new O(t.name, t.httpCode, t.description);
                        }
                    },
                    findLocalRepo: function() {
                        try {
                            return N.a.statSync(h.a.join(S, C)).isDirectory();
                        } catch (t) {
                            throw new O(t.name, t.httpCode, t.description);
                        }
                    },
                    deleteLocalRepo: function() {
                        try {
                            var t = 'rm -rf '.concat(x);
                            U.executeCommand(t);
                        } catch (t) {
                            throw new O(t.name, t.httpCode, t.description);
                        }
                    },
                    checkout: function(t) {
                        try {
                            var e = 'cd '.concat(x, ' && git checkout ').concat(t);
                            U.executeCommand(e);
                        } catch (t) {
                            throw new O(t.name, t.httpCode, t.description);
                        }
                    },
                    getCommitByHash:
                        ((A = g(
                            regeneratorRuntime.mark(function t() {
                                var e,
                                    r,
                                    n,
                                    o,
                                    a,
                                    c,
                                    u,
                                    i,
                                    s = arguments;
                                return regeneratorRuntime.wrap(function(t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return (
                                                    (e =
                                                        s.length > 0 && void 0 !== s[0]
                                                            ? s[0]
                                                            : ''),
                                                    (r =
                                                        s.length > 1 && void 0 !== s[1]
                                                            ? s[1]
                                                            : 'master'),
                                                    (t.next = 4),
                                                    U.checkout(r)
                                                );
                                            case 4:
                                                return (
                                                    (t.next = 6),
                                                    U.executeCommand(
                                                        'git log -1 --format="%an|%B" '.concat(e),
                                                        { cwd: x },
                                                    )
                                                );
                                            case 6:
                                                return (
                                                    (n = t.sent),
                                                    (o = n.stdout),
                                                    (a = String(o)
                                                        .replace(/\n/g, '')
                                                        .split('|')),
                                                    (c = w(a, 2)),
                                                    (u = c[0]),
                                                    (i = c[1]),
                                                    t.abrupt('return', {
                                                        authorName: u,
                                                        commitMessage: i,
                                                        commitHash: e,
                                                        branchName: r,
                                                    })
                                                );
                                            case 10:
                                            case 'end':
                                                return t.stop();
                                        }
                                }, t);
                            }),
                        )),
                        function() {
                            return A.apply(this, arguments);
                        }),
                },
                L = r(44),
                j = r.n(L),
                M = r(1);
            !(function(t) {
                (t[(t.CONTINUE = 100)] = 'CONTINUE'),
                    (t[(t.SWITCHING_PROTOCOLS = 101)] = 'SWITCHING_PROTOCOLS'),
                    (t[(t.PROCESSING = 102)] = 'PROCESSING'),
                    (t[(t.OK = 200)] = 'OK'),
                    (t[(t.CREATED = 201)] = 'CREATED'),
                    (t[(t.ACCEPTED = 202)] = 'ACCEPTED'),
                    (t[(t.NON_AUTHORITATIVE_INFORMATION = 203)] = 'NON_AUTHORITATIVE_INFORMATION'),
                    (t[(t.NO_CONTENT = 204)] = 'NO_CONTENT'),
                    (t[(t.RESET_CONTENT = 205)] = 'RESET_CONTENT'),
                    (t[(t.PARTIAL_CONTENT = 206)] = 'PARTIAL_CONTENT'),
                    (t[(t.AMBIGUOUS = 300)] = 'AMBIGUOUS'),
                    (t[(t.MOVED_PERMANENTLY = 301)] = 'MOVED_PERMANENTLY'),
                    (t[(t.FOUND = 302)] = 'FOUND'),
                    (t[(t.SEE_OTHER = 303)] = 'SEE_OTHER'),
                    (t[(t.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                    (t[(t.TEMPORARY_REDIRECT = 307)] = 'TEMPORARY_REDIRECT'),
                    (t[(t.PERMANENT_REDIRECT = 308)] = 'PERMANENT_REDIRECT'),
                    (t[(t.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                    (t[(t.UNAUTHORIZED = 401)] = 'UNAUTHORIZED'),
                    (t[(t.PAYMENT_REQUIRED = 402)] = 'PAYMENT_REQUIRED'),
                    (t[(t.FORBIDDEN = 403)] = 'FORBIDDEN'),
                    (t[(t.NOT_FOUND = 404)] = 'NOT_FOUND'),
                    (t[(t.METHOD_NOT_ALLOWED = 405)] = 'METHOD_NOT_ALLOWED'),
                    (t[(t.NOT_ACCEPTABLE = 406)] = 'NOT_ACCEPTABLE'),
                    (t[(t.PROXY_AUTHENTICATION_REQUIRED = 407)] = 'PROXY_AUTHENTICATION_REQUIRED'),
                    (t[(t.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                    (t[(t.CONFLICT = 409)] = 'CONFLICT'),
                    (t[(t.GONE = 410)] = 'GONE'),
                    (t[(t.LENGTH_REQUIRED = 411)] = 'LENGTH_REQUIRED'),
                    (t[(t.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                    (t[(t.PAYLOAD_TOO_LARGE = 413)] = 'PAYLOAD_TOO_LARGE'),
                    (t[(t.URI_TOO_LONG = 414)] = 'URI_TOO_LONG'),
                    (t[(t.UNSUPPORTED_MEDIA_TYPE = 415)] = 'UNSUPPORTED_MEDIA_TYPE'),
                    (t[(t.REQUESTED_RANGE_NOT_SATISFIABLE = 416)] =
                        'REQUESTED_RANGE_NOT_SATISFIABLE'),
                    (t[(t.EXPECTATION_FAILED = 417)] = 'EXPECTATION_FAILED'),
                    (t[(t.I_AM_A_TEAPOT = 418)] = 'I_AM_A_TEAPOT'),
                    (t[(t.UNPROCESSABLE_ENTITY = 422)] = 'UNPROCESSABLE_ENTITY'),
                    (t[(t.FAILED_DEPENDENCY = 424)] = 'FAILED_DEPENDENCY'),
                    (t[(t.TOO_MANY_REQUESTS = 429)] = 'TOO_MANY_REQUESTS'),
                    (t[(t.INTERNAL_SERVER_ERROR = 500)] = 'INTERNAL_SERVER_ERROR'),
                    (t[(t.NOT_IMPLEMENTED = 501)] = 'NOT_IMPLEMENTED'),
                    (t[(t.BAD_GATEWAY = 502)] = 'BAD_GATEWAY'),
                    (t[(t.SERVICE_UNAVAILABLE = 503)] = 'SERVICE_UNAVAILABLE'),
                    (t[(t.GATEWAY_TIMEOUT = 504)] = 'GATEWAY_TIMEOUT'),
                    (t[(t.HTTP_VERSION_NOT_SUPPORTED = 505)] = 'HTTP_VERSION_NOT_SUPPORTED');
            })(D || (D = {}));
            var k = r(15);
            function B(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                        (n = n.filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function F(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? B(Object(r), !0).forEach(function(e) {
                              Y(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : B(Object(r)).forEach(function(e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          });
                }
                return t;
            }
            function Y(t, e, r) {
                return (
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = r),
                    t
                );
            }
            function G(t, e, r, n, o, a, c) {
                try {
                    var u = t[a](c),
                        i = u.value;
                } catch (t) {
                    return void r(t);
                }
                u.done ? e(i) : Promise.resolve(i).then(n, o);
            }
            function H(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise(function(n, o) {
                        var a = t.apply(e, r);
                        function c(t) {
                            G(a, n, o, c, u, 'next', t);
                        }
                        function u(t) {
                            G(a, n, o, c, u, 'throw', t);
                        }
                        c(void 0);
                    });
                };
            }
            var Q,
                V,
                W = {
                    getSettings:
                        ((V = H(
                            regeneratorRuntime.mark(function t() {
                                var e;
                                return regeneratorRuntime.wrap(
                                    function(t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        (t.prev = 0),
                                                        (e = Object(M.getRepository)(k.a)),
                                                        t.abrupt('return', e.findOne())
                                                    );
                                                case 5:
                                                    throw ((t.prev = 5),
                                                    (t.t0 = t.catch(0)),
                                                    new O(
                                                        t.t0.name,
                                                        t.t0.httpCode,
                                                        t.t0.description,
                                                    ));
                                                case 8:
                                                case 'end':
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    null,
                                    [[0, 5]],
                                );
                            }),
                        )),
                        function() {
                            return V.apply(this, arguments);
                        }),
                    saveSettings:
                        ((Q = H(
                            regeneratorRuntime.mark(function t(e) {
                                var r, n, o;
                                return regeneratorRuntime.wrap(
                                    function(t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        (t.prev = 0),
                                                        (r = Object(M.getRepository)(k.a)),
                                                        (t.next = 4),
                                                        r.findOne()
                                                    );
                                                case 4:
                                                    if ((n = t.sent)) {
                                                        t.next = 9;
                                                        break;
                                                    }
                                                    return (t.next = 8), r.save(e);
                                                case 8:
                                                    return t.abrupt('return', D.OK);
                                                case 9:
                                                    if (
                                                        ((o = r.create(
                                                            F(F({}, e), {}, { id: n.id }),
                                                        )),
                                                        j()(n, o))
                                                    ) {
                                                        t.next = 17;
                                                        break;
                                                    }
                                                    return (t.next = 14), r.update(n.id, o);
                                                case 14:
                                                    return t.abrupt('return', D.OK);
                                                case 17:
                                                    return t.abrupt('return', D.NOT_MODIFIED);
                                                case 18:
                                                    t.next = 23;
                                                    break;
                                                case 20:
                                                    throw ((t.prev = 20),
                                                    (t.t0 = t.catch(0)),
                                                    new O(
                                                        t.t0.name,
                                                        t.t0.httpCode,
                                                        t.t0.description,
                                                    ));
                                                case 23:
                                                case 'end':
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    null,
                                    [[0, 20]],
                                );
                            }),
                        )),
                        function(t) {
                            return Q.apply(this, arguments);
                        }),
                },
                K = r(16);
            function X(t, e, r, n, o, a, c) {
                try {
                    var u = t[a](c),
                        i = u.value;
                } catch (t) {
                    return void r(t);
                }
                u.done ? e(i) : Promise.resolve(i).then(n, o);
            }
            function Z(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise(function(n, o) {
                        var a = t.apply(e, r);
                        function c(t) {
                            X(a, n, o, c, u, 'next', t);
                        }
                        function u(t) {
                            X(a, n, o, c, u, 'throw', t);
                        }
                        c(void 0);
                    });
                };
            }
            var $,
                q,
                z,
                J,
                tt,
                et,
                rt = {
                    getBuilds:
                        ((et = Z(
                            regeneratorRuntime.mark(function t() {
                                var e;
                                return regeneratorRuntime.wrap(
                                    function(t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        (t.prev = 0),
                                                        (e = Object(M.getRepository)(K.a)),
                                                        t.abrupt('return', e.find())
                                                    );
                                                case 5:
                                                    throw ((t.prev = 5),
                                                    (t.t0 = t.catch(0)),
                                                    new O(
                                                        t.t0.name,
                                                        t.t0.httpCode,
                                                        t.t0.description,
                                                    ));
                                                case 8:
                                                case 'end':
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    null,
                                    [[0, 5]],
                                );
                            }),
                        )),
                        function() {
                            return et.apply(this, arguments);
                        }),
                    getBuild:
                        ((tt = Z(
                            regeneratorRuntime.mark(function t(e) {
                                var r;
                                return regeneratorRuntime.wrap(
                                    function(t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        (t.prev = 0),
                                                        (r = Object(M.getRepository)(K.a)),
                                                        t.abrupt('return', r.findOne(e))
                                                    );
                                                case 5:
                                                    throw ((t.prev = 5),
                                                    (t.t0 = t.catch(0)),
                                                    new O(
                                                        t.t0.name,
                                                        t.t0.httpCode,
                                                        t.t0.description,
                                                    ));
                                                case 8:
                                                case 'end':
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    null,
                                    [[0, 5]],
                                );
                            }),
                        )),
                        function(t) {
                            return tt.apply(this, arguments);
                        }),
                    saveBuild:
                        ((J = Z(
                            regeneratorRuntime.mark(function t(e) {
                                var r;
                                return regeneratorRuntime.wrap(
                                    function(t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        (t.prev = 0),
                                                        (r = Object(M.getRepository)(K.a)),
                                                        t.abrupt('return', r.save(e))
                                                    );
                                                case 5:
                                                    throw ((t.prev = 5),
                                                    (t.t0 = t.catch(0)),
                                                    new O(
                                                        t.t0.name,
                                                        t.t0.httpCode,
                                                        t.t0.description,
                                                    ));
                                                case 8:
                                                case 'end':
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    null,
                                    [[0, 5]],
                                );
                            }),
                        )),
                        function(t) {
                            return J.apply(this, arguments);
                        }),
                    updateBuild:
                        ((z = Z(
                            regeneratorRuntime.mark(function t(e, r) {
                                var n, o;
                                return regeneratorRuntime.wrap(
                                    function(t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        (t.prev = 0),
                                                        (n = Object(M.getRepository)(K.a)),
                                                        (t.next = 4),
                                                        n.findOne({ id: e })
                                                    );
                                                case 4:
                                                    if (((o = t.sent), j()(o, r))) {
                                                        t.next = 11;
                                                        break;
                                                    }
                                                    return n.save(r), t.abrupt('return', D.OK);
                                                case 11:
                                                    return t.abrupt('return', D.NOT_MODIFIED);
                                                case 12:
                                                    t.next = 17;
                                                    break;
                                                case 14:
                                                    throw ((t.prev = 14),
                                                    (t.t0 = t.catch(0)),
                                                    new O(
                                                        t.t0.name,
                                                        t.t0.httpCode,
                                                        t.t0.description,
                                                    ));
                                                case 17:
                                                case 'end':
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    null,
                                    [[0, 14]],
                                );
                            }),
                        )),
                        function(t, e) {
                            return z.apply(this, arguments);
                        }),
                    deleteBuilds:
                        ((q = Z(
                            regeneratorRuntime.mark(function t() {
                                var e;
                                return regeneratorRuntime.wrap(
                                    function(t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        (t.prev = 0),
                                                        (e = Object(M.getRepository)(K.a)),
                                                        (t.next = 4),
                                                        e.clear()
                                                    );
                                                case 4:
                                                    t.next = 9;
                                                    break;
                                                case 6:
                                                    throw ((t.prev = 6),
                                                    (t.t0 = t.catch(0)),
                                                    new O(
                                                        t.t0.name,
                                                        t.t0.httpCode,
                                                        t.t0.description,
                                                    ));
                                                case 9:
                                                case 'end':
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    null,
                                    [[0, 6]],
                                );
                            }),
                        )),
                        function() {
                            return q.apply(this, arguments);
                        }),
                    getBuildDetails:
                        (($ = Z(
                            regeneratorRuntime.mark(function t(e) {
                                var r;
                                return regeneratorRuntime.wrap(
                                    function(t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        (t.prev = 0),
                                                        (r = Object(M.getRepository)(K.a)),
                                                        t.abrupt('return', r.findOne({ id: e }))
                                                    );
                                                case 5:
                                                    throw ((t.prev = 5),
                                                    (t.t0 = t.catch(0)),
                                                    new O(
                                                        t.t0.name,
                                                        t.t0.httpCode,
                                                        t.t0.description,
                                                    ));
                                                case 8:
                                                case 'end':
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    null,
                                    [[0, 5]],
                                );
                            }),
                        )),
                        function(t) {
                            return $.apply(this, arguments);
                        }),
                };
            function nt(t, e, r, n, o, a, c) {
                try {
                    var u = t[a](c),
                        i = u.value;
                } catch (t) {
                    return void r(t);
                }
                u.done ? e(i) : Promise.resolve(i).then(n, o);
            }
            function ot(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise(function(n, o) {
                        var a = t.apply(e, r);
                        function c(t) {
                            nt(a, n, o, c, u, 'next', t);
                        }
                        function u(t) {
                            nt(a, n, o, c, u, 'throw', t);
                        }
                        c(void 0);
                    });
                };
            }
            var at = (function() {
                    var t = ot(
                        regeneratorRuntime.mark(function t(e, r) {
                            var n;
                            return regeneratorRuntime.wrap(
                                function(t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return (t.prev = 0), (t.next = 3), rt.getBuilds();
                                            case 3:
                                                (n = t.sent), r.send(n), (t.next = 10);
                                                break;
                                            case 7:
                                                throw ((t.prev = 7),
                                                (t.t0 = t.catch(0)),
                                                new O(t.t0.name, t.t0.httpCode, t.t0.description));
                                            case 10:
                                            case 'end':
                                                return t.stop();
                                        }
                                },
                                t,
                                null,
                                [[0, 7]],
                            );
                        }),
                    );
                    return function(e, r) {
                        return t.apply(this, arguments);
                    };
                })(),
                ct = (function() {
                    var t = ot(
                        regeneratorRuntime.mark(function t(e, r) {
                            var n, o, a, c, u;
                            return regeneratorRuntime.wrap(
                                function(t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return (
                                                    (n = e.body.commitHash),
                                                    (t.next = 3),
                                                    W.getSettings()
                                                );
                                            case 3:
                                                return (
                                                    (o = t.sent),
                                                    (a = null == o ? void 0 : o.mainBranch),
                                                    (t.next = 7),
                                                    U.getCommitByHash(n, a)
                                                );
                                            case 7:
                                                return (
                                                    (c = t.sent),
                                                    (t.prev = 8),
                                                    (t.next = 11),
                                                    rt.saveBuild(c)
                                                );
                                            case 11:
                                                (u = t.sent), r.send(u), (t.next = 18);
                                                break;
                                            case 15:
                                                throw ((t.prev = 15),
                                                (t.t0 = t.catch(8)),
                                                new O(t.t0.name, t.t0.httpCode, t.t0.description));
                                            case 18:
                                            case 'end':
                                                return t.stop();
                                        }
                                },
                                t,
                                null,
                                [[8, 15]],
                            );
                        }),
                    );
                    return function(e, r) {
                        return t.apply(this, arguments);
                    };
                })(),
                ut = (function() {
                    var t = ot(
                        regeneratorRuntime.mark(function t(e, r) {
                            var n;
                            return regeneratorRuntime.wrap(
                                function(t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return (
                                                    (t.prev = 0),
                                                    (t.next = 3),
                                                    rt.getBuildDetails(e.params.id)
                                                );
                                            case 3:
                                                (n = t.sent), r.send(n), (t.next = 10);
                                                break;
                                            case 7:
                                                throw ((t.prev = 7),
                                                (t.t0 = t.catch(0)),
                                                new O(t.t0.name, t.t0.httpCode, t.t0.description));
                                            case 10:
                                            case 'end':
                                                return t.stop();
                                        }
                                },
                                t,
                                null,
                                [[0, 7]],
                            );
                        }),
                    );
                    return function(e, r) {
                        return t.apply(this, arguments);
                    };
                })(),
                it = (function() {
                    var t = ot(
                        regeneratorRuntime.mark(function t(e, r) {
                            var n;
                            return regeneratorRuntime.wrap(
                                function(t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return (
                                                    (t.prev = 0),
                                                    (t.next = 3),
                                                    rt.getBuildDetails(e.params.id)
                                                );
                                            case 3:
                                                (n = t.sent),
                                                    r.send(null == n ? void 0 : n.buildLogs),
                                                    (t.next = 10);
                                                break;
                                            case 7:
                                                throw ((t.prev = 7),
                                                (t.t0 = t.catch(0)),
                                                new O(t.t0.name, t.t0.httpCode, t.t0.description));
                                            case 10:
                                            case 'end':
                                                return t.stop();
                                        }
                                },
                                t,
                                null,
                                [[0, 7]],
                            );
                        }),
                    );
                    return function(e, r) {
                        return t.apply(this, arguments);
                    };
                })(),
                st = (function() {
                    var t = ot(
                        regeneratorRuntime.mark(function t(e, r) {
                            return regeneratorRuntime.wrap(
                                function(t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return (
                                                    (t.prev = 0), (t.next = 3), rt.deleteBuilds()
                                                );
                                            case 3:
                                                r.send('success'), (t.next = 9);
                                                break;
                                            case 6:
                                                throw ((t.prev = 6),
                                                (t.t0 = t.catch(0)),
                                                new O(t.t0.name, t.t0.httpCode, t.t0.description));
                                            case 9:
                                            case 'end':
                                                return t.stop();
                                        }
                                },
                                t,
                                null,
                                [[0, 6]],
                            );
                        }),
                    );
                    return function(e, r) {
                        return t.apply(this, arguments);
                    };
                })(),
                pt = Object(n.Router)();
            pt.get('/', at),
                pt.post('/', ct),
                pt.get('/:id', ut),
                pt.get('/:id/logs', it),
                pt.delete('/', st);
            var ft = pt;
            function lt(t, e, r, n, o, a, c) {
                try {
                    var u = t[a](c),
                        i = u.value;
                } catch (t) {
                    return void r(t);
                }
                u.done ? e(i) : Promise.resolve(i).then(n, o);
            }
            function Et(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise(function(n, o) {
                        var a = t.apply(e, r);
                        function c(t) {
                            lt(a, n, o, c, u, 'next', t);
                        }
                        function u(t) {
                            lt(a, n, o, c, u, 'throw', t);
                        }
                        c(void 0);
                    });
                };
            }
            var Ot = (function() {
                    var t = Et(
                        regeneratorRuntime.mark(function t(e, r) {
                            var n;
                            return regeneratorRuntime.wrap(
                                function(t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return (t.prev = 0), (t.next = 3), W.getSettings();
                                            case 3:
                                                (n = t.sent), r.send(n), (t.next = 10);
                                                break;
                                            case 7:
                                                throw ((t.prev = 7),
                                                (t.t0 = t.catch(0)),
                                                new O(t.t0.name, t.t0.httpCode, t.t0.description));
                                            case 10:
                                            case 'end':
                                                return t.stop();
                                        }
                                },
                                t,
                                null,
                                [[0, 7]],
                            );
                        }),
                    );
                    return function(e, r) {
                        return t.apply(this, arguments);
                    };
                })(),
                dt = (function() {
                    var t = Et(
                        regeneratorRuntime.mark(function t(e, r) {
                            var n;
                            return regeneratorRuntime.wrap(
                                function(t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return (
                                                    (t.prev = 0),
                                                    (t.next = 3),
                                                    W.saveSettings(e.body)
                                                );
                                            case 3:
                                                return (
                                                    (n = t.sent),
                                                    (t.next = 6),
                                                    U.cloneRepo('OlaIstra', e.body.repoName)
                                                );
                                            case 6:
                                                r.send(n), (t.next = 12);
                                                break;
                                            case 9:
                                                throw ((t.prev = 9),
                                                (t.t0 = t.catch(0)),
                                                new O(t.t0.name, t.t0.httpCode, t.t0.description));
                                            case 12:
                                            case 'end':
                                                return t.stop();
                                        }
                                },
                                t,
                                null,
                                [[0, 9]],
                            );
                        }),
                    );
                    return function(e, r) {
                        return t.apply(this, arguments);
                    };
                })(),
                ht = Object(n.Router)();
            ht.get('/', Ot), ht.post('/', dt);
            var vt = ht,
                Rt = Object(n.Router)();
            e.default = function() {
                return Rt.use('/settings', vt), Rt.use('/builds', ft), Rt;
            };
        },
    });
