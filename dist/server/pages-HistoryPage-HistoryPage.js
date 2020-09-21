(exports.ids = [1]),
    (exports.modules = {
        26: function(e, t, a) {
            'use strict';
            a.r(t);
            var i = a(0),
                o = a.n(i),
                n = a(52),
                r = a(9),
                s = a(13),
                _ = a(53),
                l =
                    (a(61),
                    function() {
                        return o.a.createElement(
                            'div',
                            { className: 'modal' },
                            o.a.createElement(s.a, { classes: 'title--huge' }, 'New build'),
                            o.a.createElement(
                                s.a,
                                null,
                                'Enter the commit hash that you want to build',
                            ),
                            o.a.createElement(
                                'form',
                                { action: '', className: 'form' },
                                o.a.createElement(_.a, {
                                    placeholder: 'Commit hash',
                                    icon: 'icon-cross',
                                }),
                                o.a.createElement(
                                    'div',
                                    { className: 'form__btns' },
                                    o.a.createElement(
                                        r.a,
                                        { classes: 'btn--primary' },
                                        'Run build',
                                    ),
                                    o.a.createElement(r.a, null, 'Cancel'),
                                ),
                            ),
                        );
                    });
            a(63),
                (t.default = function() {
                    return o.a.createElement(
                        o.a.Fragment,
                        null,
                        o.a.createElement(
                            n.a,
                            { title: 'philip1967/my-awesome-repo' },
                            o.a.createElement(
                                'div',
                                { className: 'btn__block' },
                                o.a.createElement(r.a, { icon: 'icon-play' }, 'Run build'),
                                o.a.createElement(r.a, { icon: 'icon-settings' }),
                            ),
                        ),
                        o.a.createElement(
                            'div',
                            { className: 'historyPage' },
                            o.a.createElement(
                                'div',
                                { className: 'repo' },
                                o.a.createElement(
                                    'div',
                                    { className: 'repo__info' },
                                    o.a.createElement(
                                        'div',
                                        { className: 'repo__flex' },
                                        o.a.createElement(
                                            'div',
                                            { className: 'repo__id' },
                                            o.a.createElement('span', { className: 'icon-tick' }),
                                            '#1333',
                                        ),
                                        o.a.createElement(
                                            'div',
                                            { className: 'repo__title' },
                                            'add documentation for postgres scaler',
                                        ),
                                    ),
                                    o.a.createElement(
                                        'div',
                                        { className: 'repo__flex' },
                                        o.a.createElement(
                                            'div',
                                            { className: 'repo__branch' },
                                            o.a.createElement('span', {
                                                className: 'icon-code-commit',
                                            }),
                                            'master',
                                            o.a.createElement(
                                                'span',
                                                { className: 'repo__commit' },
                                                '9c9f0b9',
                                            ),
                                        ),
                                        o.a.createElement(
                                            'div',
                                            { className: 'repo__fio' },
                                            o.a.createElement('span', { className: 'icon-user' }),
                                            'Vadim Makeev',
                                        ),
                                    ),
                                ),
                                o.a.createElement(
                                    'div',
                                    { className: 'repo__data' },
                                    o.a.createElement(
                                        'div',
                                        { className: 'repo__data__date' },
                                        o.a.createElement('span', { className: 'icon-calendar' }),
                                        '21 \u044f\u043d\u0432, 03:06',
                                    ),
                                    o.a.createElement(
                                        'div',
                                        { className: 'repo__data__time' },
                                        o.a.createElement('span', { className: 'icon-timer' }),
                                        '1 \u0447 20 \u043c\u0438\u043d',
                                    ),
                                ),
                            ),
                            o.a.createElement(r.a, null, 'Show more'),
                            o.a.createElement('br', null),
                            'temporary solution to show modal',
                            o.a.createElement('br', null),
                            o.a.createElement(l, null),
                        ),
                    );
                });
        },
        48: function(e, t, a) {
            var i = a(49),
                o = a(5),
                n = 'string' == typeof i ? [[e.i, i, '']] : i;
            ((t = e.exports = i.locals || {})._getContent = function() {
                return n;
            }),
                (t._getCss = function() {
                    return '' + i;
                }),
                (t._insertCss = function(e) {
                    return o(n, e);
                });
        },
        49: function(e, t, a) {
            (t = a(4)(!1)).push([
                e.i,
                'h1{font-weight:500;font-size:24px;line-height:28px;color:#7f8285}',
                '',
            ]),
                (e.exports = t);
        },
        50: function(e, t, a) {
            var i = a(51),
                o = a(5),
                n = 'string' == typeof i ? [[e.i, i, '']] : i;
            ((t = e.exports = i.locals || {})._getContent = function() {
                return n;
            }),
                (t._getCss = function() {
                    return '' + i;
                }),
                (t._insertCss = function(e) {
                    return o(n, e);
                });
        },
        51: function(e, t, a) {
            (t = a(4)(!1)).push([
                e.i,
                '.Header__header--23Z74{position:fixed;display:flex;justify-content:space-between;align-items:center;width:100%;padding:0 100px;z-index:1}@media(min-width: 768px){.Header__header--23Z74{padding:0 16px}}@media only screen and (max-width: 768px){.Header__header--23Z74{padding:0 16px}.Header__header--23Z74 h1{font-size:18px}}',
                '',
            ]),
                (t.locals = { header: 'Header__header--23Z74' }),
                (e.exports = t);
        },
        52: function(e, t, a) {
            'use strict';
            a.d(t, 'a', function() {
                return r;
            });
            var i = a(0),
                o = a.n(i),
                n =
                    (a(48),
                    function(e) {
                        var t = e.children;
                        return o.a.createElement('h1', null, t);
                    }),
                r =
                    (a(50),
                    function(e) {
                        var t = e.title,
                            a = e.children;
                        return o.a.createElement(
                            'div',
                            { className: 'header' },
                            o.a.createElement(n, null, t),
                            a,
                        );
                    });
        },
        53: function(e, t, a) {
            'use strict';
            a.d(t, 'a', function() {
                return s;
            });
            var i = a(0),
                o = a.n(i),
                n = a(7),
                r = a.n(n),
                s =
                    (a(54),
                    function(e) {
                        var t = e.placeholder,
                            a = e.classes,
                            i = e.icon,
                            n = r()('input', a);
                        return o.a.createElement(
                            'div',
                            { className: 'inputWrapper' },
                            o.a.createElement('input', { placeholder: t, className: n }),
                            i ? o.a.createElement('span', { className: i }) : null,
                        );
                    });
        },
        54: function(e, t, a) {
            var i = a(55),
                o = a(5),
                n = 'string' == typeof i ? [[e.i, i, '']] : i;
            ((t = e.exports = i.locals || {})._getContent = function() {
                return n;
            }),
                (t._getCss = function() {
                    return '' + i;
                }),
                (t._insertCss = function(e) {
                    return o(n, e);
                });
        },
        55: function(e, t, a) {
            (t = a(4)(!1)).push([
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
        61: function(e, t, a) {
            var i = a(62),
                o = a(5),
                n = 'string' == typeof i ? [[e.i, i, '']] : i;
            ((t = e.exports = i.locals || {})._getContent = function() {
                return n;
            }),
                (t._getCss = function() {
                    return '' + i;
                }),
                (t._insertCss = function(e) {
                    return o(n, e);
                });
        },
        62: function(e, t, a) {
            (t = a(4)(!1)).push([
                e.i,
                '.Modal__modal--1nhQm{display:flex;flex-direction:column;max-width:485px;padding:20px 18px;box-shadow:0px 6px 16px rgba(67,68,69,.3),0px 0px 1px rgba(67,68,69,.3);border-radius:4px}.Modal__modal--1nhQm .Modal__title--2YZ4U{text-align:left}.Modal__modal--1nhQm .Modal__title--huge--2TYOZ{margin-bottom:12px}.Modal__modal--1nhQm .Modal__form--3xJ9A{width:100%;margin-top:12px}.Modal__modal--1nhQm .Modal__form__btns--14VDm{display:inline-flex;justify-content:space-between;margin-top:12px}.Modal__modal--1nhQm .Modal__form__btns--14VDm .Modal__btn--2eawn:nth-child(1){margin-right:10px}',
                '',
            ]),
                (t.locals = {
                    modal: 'Modal__modal--1nhQm',
                    title: 'Modal__title--2YZ4U',
                    titleHuge: 'Modal__title--huge--2TYOZ',
                    form: 'Modal__form--3xJ9A',
                    formBtns: 'Modal__form__btns--14VDm',
                    btn: 'Modal__btn--2eawn',
                }),
                (e.exports = t);
        },
        63: function(e, t, a) {
            var i = a(64),
                o = a(5),
                n = 'string' == typeof i ? [[e.i, i, '']] : i;
            ((t = e.exports = i.locals || {})._getContent = function() {
                return n;
            }),
                (t._getCss = function() {
                    return '' + i;
                }),
                (t._insertCss = function(e) {
                    return o(n, e);
                });
        },
        64: function(e, t, a) {
            (t = a(4)(!1)).push([
                e.i,
                '.HistoryPage__historyPage--iZzB9{max-width:824px;padding-top:60px;margin:0px auto;height:100vh}.HistoryPage__historyPage--iZzB9 .HistoryPage__repo--2A6HJ{display:flex;justify-content:space-between;box-shadow:0px 1px 1px rgba(67,68,69,.3),0px 0px 1px rgba(67,68,69,.3);border-radius:6px;margin-bottom:8;margin-bottom:8px;padding:12px 24px 12px 56px}.HistoryPage__historyPage--iZzB9 .HistoryPage__repo__info--C0bni{display:flex;justify-content:space-between;flex-direction:column}.HistoryPage__historyPage--iZzB9 .HistoryPage__repo__flex--3F3Lq{display:flex}.HistoryPage__historyPage--iZzB9 .HistoryPage__repo__flex--3F3Lq:nth-child(1){margin-bottom:10px}.HistoryPage__historyPage--iZzB9 .HistoryPage__repo__id--2AhYm{position:relative;font-weight:500;font-size:18px;line-height:20px;color:#00b341}.HistoryPage__historyPage--iZzB9 .HistoryPage__repo__id--2AhYm span{position:absolute;left:-25px}.HistoryPage__historyPage--iZzB9 .HistoryPage__repo__title--1wOdg{margin-left:5px;font-size:15px;line-height:20px}.HistoryPage__historyPage--iZzB9 .HistoryPage__repo__commit--2lrok{margin:0 10px 0 4px;color:#7f8285}.HistoryPage__historyPage--iZzB9 .HistoryPage__repo__data--2fZid{display:flex;flex-direction:column;justify-content:space-between;font-size:13px}.HistoryPage__btn__block--HY5Qk{display:inline-flex;justify-content:space-between}.HistoryPage__btn__block--HY5Qk .HistoryPage__btn--13oLh:nth-child(1){margin-right:8px}@media only screen and (max-width: 500px){.HistoryPage__historyPage--iZzB9{padding-top:100px}.HistoryPage__historyPage--iZzB9 .HistoryPage__repo--2A6HJ{flex-direction:column;padding:12px 12px 12px 36px}.HistoryPage__historyPage--iZzB9 .HistoryPage__repo__flex--3F3Lq{flex-direction:column}.HistoryPage__historyPage--iZzB9 .HistoryPage__repo__data--2fZid{flex-direction:row}.HistoryPage__historyPage--iZzB9 .HistoryPage__repo__branch--ef5im{margin-bottom:8px}.HistoryPage__historyPage--iZzB9 .HistoryPage__repo__data--2fZid{position:relative;margin-top:16px}.HistoryPage__historyPage--iZzB9 .HistoryPage__repo__data--2fZid:before{content:"";position:absolute;top:-8px;width:100%;height:2px;background-color:#f0f2f3}}@media only screen and (max-width: 860px){.HistoryPage__historyPage--iZzB9 .HistoryPage__repo--2A6HJ{width:90%;margin:0 auto 8px}.HistoryPage__historyPage--iZzB9 .HistoryPage__btn--13oLh{width:90%;margin:0 auto 8px;justify-content:center}}',
                '',
            ]),
                (t.locals = {
                    historyPage: 'HistoryPage__historyPage--iZzB9',
                    repo: 'HistoryPage__repo--2A6HJ',
                    repoInfo: 'HistoryPage__repo__info--C0bni',
                    repoFlex: 'HistoryPage__repo__flex--3F3Lq',
                    repoId: 'HistoryPage__repo__id--2AhYm',
                    repoTitle: 'HistoryPage__repo__title--1wOdg',
                    repoCommit: 'HistoryPage__repo__commit--2lrok',
                    repoData: 'HistoryPage__repo__data--2fZid',
                    btnBlock: 'HistoryPage__btn__block--HY5Qk',
                    btn: 'HistoryPage__btn--13oLh',
                    repoBranch: 'HistoryPage__repo__branch--ef5im',
                }),
                (e.exports = t);
        },
    });
