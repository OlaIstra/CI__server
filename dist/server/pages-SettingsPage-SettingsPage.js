(exports.ids = [2]),
    (exports.modules = {
        25: function(e, t, n) {
            'use strict';
            n.r(t),
                n.d(t, 'SettingsPage', function() {
                    return p;
                });
            var a = n(0),
                i = n.n(a),
                r = n(2),
                s = n(52),
                o = n(13),
                l = n(53),
                c = n(9),
                p =
                    (n(59),
                    function() {
                        return i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement(s.a, { title: 'School CI server' }),
                            i.a.createElement(
                                'div',
                                { className: 'settingsPage' },
                                i.a.createElement(o.a, { classes: 'title--bold' }, 'Settings'),
                                i.a.createElement(
                                    o.a,
                                    { classes: 'title--light' },
                                    'Configure repository connection and synchronization settings.',
                                ),
                                i.a.createElement(
                                    'form',
                                    { action: '', className: 'form' },
                                    i.a.createElement(
                                        'div',
                                        { className: 'form__block' },
                                        i.a.createElement(o.a, null, 'GitHub repository'),
                                        i.a.createElement(l.a, {
                                            placeholder: 'user-name/repo-name',
                                        }),
                                    ),
                                    i.a.createElement(
                                        'div',
                                        { className: 'form__block' },
                                        i.a.createElement(o.a, null, 'Build command'),
                                        i.a.createElement(l.a, {
                                            placeholder: 'user-name/repo-name',
                                            icon: 'icon-cross',
                                        }),
                                    ),
                                    i.a.createElement(
                                        'div',
                                        { className: 'form__block' },
                                        i.a.createElement(o.a, null, 'Build command'),
                                        i.a.createElement(l.a, {
                                            placeholder: 'master',
                                            icon: 'icon-cross',
                                        }),
                                    ),
                                    i.a.createElement(
                                        'div',
                                        { className: 'form__info' },
                                        'Synchronize every',
                                        i.a.createElement(l.a, {
                                            placeholder: '10',
                                            classes: 'input--block',
                                        }),
                                        'minutes',
                                    ),
                                    i.a.createElement(
                                        'div',
                                        { className: 'form__btns' },
                                        i.a.createElement(c.a, { classes: 'btn--primary' }, 'Save'),
                                        i.a.createElement(c.a, null, 'Cancel'),
                                    ),
                                ),
                                i.a.createElement('br', null),
                                'temporary to show history page',
                                i.a.createElement('br', null),
                                i.a.createElement(
                                    r.Link,
                                    { to: '/history' },
                                    i.a.createElement(
                                        c.a,
                                        { icon: 'icon-play', classes: 'btn--primary' },
                                        'to history page',
                                    ),
                                ),
                            ),
                        );
                    });
            t.default = p;
        },
        48: function(e, t, n) {
            var a = n(49),
                i = n(5),
                r = 'string' == typeof a ? [[e.i, a, '']] : a;
            ((t = e.exports = a.locals || {})._getContent = function() {
                return r;
            }),
                (t._getCss = function() {
                    return '' + a;
                }),
                (t._insertCss = function(e) {
                    return i(r, e);
                });
        },
        49: function(e, t, n) {
            (t = n(4)(!1)).push([
                e.i,
                'h1{font-weight:500;font-size:24px;line-height:28px;color:#7f8285}',
                '',
            ]),
                (e.exports = t);
        },
        50: function(e, t, n) {
            var a = n(51),
                i = n(5),
                r = 'string' == typeof a ? [[e.i, a, '']] : a;
            ((t = e.exports = a.locals || {})._getContent = function() {
                return r;
            }),
                (t._getCss = function() {
                    return '' + a;
                }),
                (t._insertCss = function(e) {
                    return i(r, e);
                });
        },
        51: function(e, t, n) {
            (t = n(4)(!1)).push([
                e.i,
                '.Header__header--23Z74{position:fixed;display:flex;justify-content:space-between;align-items:center;width:100%;padding:0 100px;z-index:1}@media(min-width: 768px){.Header__header--23Z74{padding:0 16px}}@media only screen and (max-width: 768px){.Header__header--23Z74{padding:0 16px}.Header__header--23Z74 h1{font-size:18px}}',
                '',
            ]),
                (t.locals = { header: 'Header__header--23Z74' }),
                (e.exports = t);
        },
        52: function(e, t, n) {
            'use strict';
            n.d(t, 'a', function() {
                return s;
            });
            var a = n(0),
                i = n.n(a),
                r =
                    (n(48),
                    function(e) {
                        var t = e.children;
                        return i.a.createElement('h1', null, t);
                    }),
                s =
                    (n(50),
                    function(e) {
                        var t = e.title,
                            n = e.children;
                        return i.a.createElement(
                            'div',
                            { className: 'header' },
                            i.a.createElement(r, null, t),
                            n,
                        );
                    });
        },
        53: function(e, t, n) {
            'use strict';
            n.d(t, 'a', function() {
                return o;
            });
            var a = n(0),
                i = n.n(a),
                r = n(7),
                s = n.n(r),
                o =
                    (n(54),
                    function(e) {
                        var t = e.placeholder,
                            n = e.classes,
                            a = e.icon,
                            r = s()('input', n);
                        return i.a.createElement(
                            'div',
                            { className: 'inputWrapper' },
                            i.a.createElement('input', { placeholder: t, className: r }),
                            a ? i.a.createElement('span', { className: a }) : null,
                        );
                    });
        },
        54: function(e, t, n) {
            var a = n(55),
                i = n(5),
                r = 'string' == typeof a ? [[e.i, a, '']] : a;
            ((t = e.exports = a.locals || {})._getContent = function() {
                return r;
            }),
                (t._getCss = function() {
                    return '' + a;
                }),
                (t._insertCss = function(e) {
                    return i(r, e);
                });
        },
        55: function(e, t, n) {
            (t = n(4)(!1)).push([
                e.i,
                '.Input__inputWrapper--3jP_4{position:relative}.Input__inputWrapper--3jP_4 .Input__input--3oi6G{width:100%;height:36px;padding-left:13px;padding-right:30px;border:2px solid #b3b3b3;box-sizing:border-box;border-radius:4px}.Input__inputWrapper--3jP_4 .Input__input--block--2n2W3{width:55px;padding:0 10px;margin:0 8px}.Input__inputWrapper--3jP_4 span{position:absolute;top:10px;right:10px;cursor:pointer}',
                '',
            ]),
                (t.locals = {
                    inputWrapper: 'Input__inputWrapper--3jP_4',
                    input: 'Input__input--3oi6G',
                    inputBlock: 'Input__input--block--2n2W3',
                }),
                (e.exports = t);
        },
        59: function(e, t, n) {
            var a = n(60),
                i = n(5),
                r = 'string' == typeof a ? [[e.i, a, '']] : a;
            ((t = e.exports = a.locals || {})._getContent = function() {
                return r;
            }),
                (t._getCss = function() {
                    return '' + a;
                }),
                (t._insertCss = function(e) {
                    return i(r, e);
                });
        },
        60: function(e, t, n) {
            (t = n(4)(!1)).push([
                e.i,
                '.SettingsPage__settingsPage--3sidW{display:flex;flex-direction:column;max-width:824px;padding-top:60px;margin:0px auto;height:100vh}.SettingsPage__settingsPage--3sidW .SettingsPage__title--30N_X{text-align:left}.SettingsPage__settingsPage--3sidW .SettingsPage__form--o1hSN{width:474px;margin-top:22px}.SettingsPage__settingsPage--3sidW .SettingsPage__form__info--XTQ-z{display:flex;align-items:center}.SettingsPage__settingsPage--3sidW .SettingsPage__form__btns--32tho{display:inline-flex;justify-content:space-between;margin-top:24px}.SettingsPage__settingsPage--3sidW .SettingsPage__form__btns--32tho .SettingsPage__btn--3UPsb:nth-child(1){margin-right:8px}.SettingsPage__form__block--kwleh{margin-bottom:18px}.SettingsPage__form__block--kwleh .SettingsPage__title--30N_X{margin-bottom:6px;font-size:13px;line-height:18px;letter-spacing:.06px}@media only screen and (max-width: 768px){.SettingsPage__settingsPage--3sidW{max-width:288px}.SettingsPage__settingsPage--3sidW .SettingsPage__form--o1hSN{width:288px}}',
                '',
            ]),
                (t.locals = {
                    settingsPage: 'SettingsPage__settingsPage--3sidW',
                    title: 'SettingsPage__title--30N_X',
                    form: 'SettingsPage__form--o1hSN',
                    formInfo: 'SettingsPage__form__info--XTQ-z',
                    formBtns: 'SettingsPage__form__btns--32tho',
                    btn: 'SettingsPage__btn--3UPsb',
                    formBlock: 'SettingsPage__form__block--kwleh',
                }),
                (e.exports = t);
        },
    });
