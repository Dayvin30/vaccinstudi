! function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 249)
}([function(e, t, r) {
    "use strict";
    e.exports = r(83)
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ReactCSS = t.loop = t.handleActive = t.handleHover = t.hover = void 0;
    var n = c(r(85)),
        o = c(r(157)),
        a = c(r(177)),
        i = c(r(178)),
        l = c(r(179)),
        u = c(r(180));

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.hover = i.default, t.handleHover = i.default, t.handleActive = l.default, t.loop = u.default;
    var s = t.ReactCSS = function(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
        var l = (0, n.default)(r),
            u = (0, o.default)(e, l);
        return (0, a.default)(u)
    };
    t.default = s
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(181);
    Object.defineProperty(t, "Alpha", {
        enumerable: !0,
        get: function() {
            return f(n).default
        }
    });
    var o = r(46);
    Object.defineProperty(t, "Checkboard", {
        enumerable: !0,
        get: function() {
            return f(o).default
        }
    });
    var a = r(184);
    Object.defineProperty(t, "EditableInput", {
        enumerable: !0,
        get: function() {
            return f(a).default
        }
    });
    var i = r(185);
    Object.defineProperty(t, "Hue", {
        enumerable: !0,
        get: function() {
            return f(i).default
        }
    });
    var l = r(187);
    Object.defineProperty(t, "Raised", {
        enumerable: !0,
        get: function() {
            return f(l).default
        }
    });
    var u = r(203);
    Object.defineProperty(t, "Saturation", {
        enumerable: !0,
        get: function() {
            return f(u).default
        }
    });
    var c = r(79);
    Object.defineProperty(t, "ColorWrap", {
        enumerable: !0,
        get: function() {
            return f(c).default
        }
    });
    var s = r(211);

    function f(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "Swatch", {
        enumerable: !0,
        get: function() {
            return f(s).default
        }
    })
}, function(e, t) {
    var r = Array.isArray;
    e.exports = r
}, function(e, t, r) {
    e.exports = r(188)()
}, function(e, t, r) {
    var n = r(190),
        o = r(194)((function(e, t, r) {
            n(e, t, r)
        }));
    e.exports = o
}, function(e, t) {
    e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
}, function(e, t, r) {
    var n = r(47),
        o = "object" == typeof self && self && self.Object === Object && self,
        a = n || o || Function("return this")();
    e.exports = a
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.red = t.getContrastingColor = t.isValidHex = t.toState = t.simpleCheckForValidColor = void 0;
    var n = a(r(208)),
        o = a(r(210));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.simpleCheckForValidColor = function(e) {
        var t = 0,
            r = 0;
        return (0, n.default)(["r", "g", "b", "a", "h", "s", "l", "v"], (function(n) {
            if (e[n] && (t += 1, isNaN(e[n]) || (r += 1), "s" === n || "l" === n)) {
                /^\d+%$/.test(e[n]) && (r += 1)
            }
        })), t === r && e
    };
    var i = t.toState = function(e, t) {
        var r = e.hex ? (0, o.default)(e.hex) : (0, o.default)(e),
            n = r.toHsl(),
            a = r.toHsv(),
            i = r.toRgb(),
            l = r.toHex();
        return 0 === n.s && (n.h = t || 0, a.h = t || 0), {
            hsl: n,
            hex: "000000" === l && 0 === i.a ? "transparent" : "#" + l,
            rgb: i,
            hsv: a,
            oldHue: e.h || t || n.h,
            source: e.source
        }
    };
    t.isValidHex = function(e) {
        var t = "#" === String(e).charAt(0) ? 1 : 0;
        return e.length !== 4 + t && e.length < 7 + t && (0, o.default)(e).isValid()
    }, t.getContrastingColor = function(e) {
        if (!e) return "#fff";
        var t = i(e);
        return "transparent" === t.hex ? "rgba(0,0,0,0.4)" : (299 * t.rgb.r + 587 * t.rgb.g + 114 * t.rgb.b) / 1e3 >= 128 ? "#000" : "#fff"
    }, t.red = {
        hsl: {
            a: 1,
            h: 0,
            l: .5,
            s: 1
        },
        hex: "#ff0000",
        rgb: {
            r: 255,
            g: 0,
            b: 0,
            a: 1
        },
        hsv: {
            h: 0,
            s: 1,
            v: 1,
            a: 1
        }
    };
    t.default = t
}, function(e, t) {
    e.exports = function(e) {
        return null != e && "object" == typeof e
    }
}, function(e, t, r) {
    var n = r(54),
        o = r(97),
        a = r(155),
        i = r(3);
    e.exports = function(e, t) {
        return (i(e) ? n : a)(e, o(t, 3))
    }
}, function(e, t, r) {
    var n = r(14),
        o = r(88),
        a = r(89),
        i = "[object Null]",
        l = "[object Undefined]",
        u = n ? n.toStringTag : void 0;
    e.exports = function(e) {
        return null == e ? void 0 === e ? l : i : u && u in Object(e) ? o(e) : a(e)
    }
}, function(e, t, r) {
    var n = r(110),
        o = r(113);
    e.exports = function(e, t) {
        var r = o(e, t);
        return n(r) ? r : void 0
    }
}, function(e, t, r) {
    var n = r(38),
        o = r(34);
    e.exports = function(e) {
        return null != e && o(e.length) && !n(e)
    }
}, function(e, t, r) {
    var n = r(7).Symbol;
    e.exports = n
}, function(e, t, r) {
    var n = r(50),
        o = r(95),
        a = r(13);
    e.exports = function(e) {
        return a(e) ? n(e) : o(e)
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return e === t || e != e && t != t
    }
}, function(e, t, r) {
    var n = r(69),
        o = r(44);
    e.exports = function(e, t, r, a) {
        var i = !r;
        r || (r = {});
        for (var l = -1, u = t.length; ++l < u;) {
            var c = t[l],
                s = a ? a(r[c], e[c], c, r, e) : void 0;
            void 0 === s && (s = e[c]), i ? o(r, c, s) : n(r, c, s)
        }
        return r
    }
}, function(e, t, r) {
    (function(e) {
        var n = r(7),
            o = r(93),
            a = t && !t.nodeType && t,
            i = a && "object" == typeof e && e && !e.nodeType && e,
            l = i && i.exports === a ? n.Buffer : void 0,
            u = (l ? l.isBuffer : void 0) || o;
        e.exports = u
    }).call(this, r(31)(e))
}, function(e, t) {
    e.exports = function(e) {
        return e
    }
}, function(e, t, r) {
    var n = r(21),
        o = r(105),
        a = r(106),
        i = r(107),
        l = r(108),
        u = r(109);

    function c(e) {
        var t = this.__data__ = new n(e);
        this.size = t.size
    }
    c.prototype.clear = o, c.prototype.delete = a, c.prototype.get = i, c.prototype.has = l, c.prototype.set = u, e.exports = c
}, function(e, t, r) {
    var n = r(100),
        o = r(101),
        a = r(102),
        i = r(103),
        l = r(104);

    function u(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    u.prototype.clear = n, u.prototype.delete = o, u.prototype.get = a, u.prototype.has = i, u.prototype.set = l, e.exports = u
}, function(e, t, r) {
    var n = r(16);
    e.exports = function(e, t) {
        for (var r = e.length; r--;)
            if (n(e[r][0], t)) return r;
        return -1
    }
}, function(e, t, r) {
    var n = r(12)(Object, "create");
    e.exports = n
}, function(e, t, r) {
    var n = r(122);
    e.exports = function(e, t) {
        var r = e.__data__;
        return n(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
    }
}, function(e, t, r) {
    var n = r(137),
        o = r(40),
        a = r(138),
        i = r(139),
        l = r(140),
        u = r(11),
        c = r(55),
        s = c(n),
        f = c(o),
        d = c(a),
        p = c(i),
        h = c(l),
        b = u;
    (n && "[object DataView]" != b(new n(new ArrayBuffer(1))) || o && "[object Map]" != b(new o) || a && "[object Promise]" != b(a.resolve()) || i && "[object Set]" != b(new i) || l && "[object WeakMap]" != b(new l)) && (b = function(e) {
        var t = u(e),
            r = "[object Object]" == t ? e.constructor : void 0,
            n = r ? c(r) : "";
        if (n) switch (n) {
            case s:
                return "[object DataView]";
            case f:
                return "[object Map]";
            case d:
                return "[object Promise]";
            case p:
                return "[object Set]";
            case h:
                return "[object WeakMap]"
        }
        return t
    }), e.exports = b
}, function(e, t, r) {
    var n = r(11),
        o = r(9),
        a = "[object Symbol]";
    e.exports = function(e) {
        return "symbol" == typeof e || o(e) && n(e) == a
    }
}, function(e, t, r) {
    var n = r(26),
        o = 1 / 0;
    e.exports = function(e) {
        if ("string" == typeof e || n(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -o ? "-0" : t
    }
}, function(e, t, r) {
    var n = r(50),
        o = r(162),
        a = r(13);
    e.exports = function(e) {
        return a(e) ? n(e, !0) : o(e)
    }
}, function(e, t, r) {
    var n = r(48),
        o = r(52);
    e.exports = function(e, t) {
        return e && n(e, o(t))
    }
}, function(e, t, r) {
    var n = r(92),
        o = r(9),
        a = Object.prototype,
        i = a.hasOwnProperty,
        l = a.propertyIsEnumerable,
        u = n(function() {
            return arguments
        }()) ? n : function(e) {
            return o(e) && i.call(e, "callee") && !l.call(e, "callee")
        };
    e.exports = u
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t) {
    var r = 9007199254740991,
        n = /^(?:0|[1-9]\d*)$/;
    e.exports = function(e, t) {
        var o = typeof e;
        return !!(t = null == t ? r : t) && ("number" == o || "symbol" != o && n.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
}, function(e, t, r) {
    var n = r(94),
        o = r(35),
        a = r(36),
        i = a && a.isTypedArray,
        l = i ? o(i) : n;
    e.exports = l
}, function(e, t) {
    var r = 9007199254740991;
    e.exports = function(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r
    }
}, function(e, t) {
    e.exports = function(e) {
        return function(t) {
            return e(t)
        }
    }
}, function(e, t, r) {
    (function(e) {
        var n = r(47),
            o = t && !t.nodeType && t,
            a = o && "object" == typeof e && e && !e.nodeType && e,
            i = a && a.exports === o && n.process,
            l = function() {
                try {
                    var e = a && a.require && a.require("util").types;
                    return e || i && i.binding && i.binding("util")
                } catch (e) {}
            }();
        e.exports = l
    }).call(this, r(31)(e))
}, function(e, t) {
    var r = Object.prototype;
    e.exports = function(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || r)
    }
}, function(e, t, r) {
    var n = r(11),
        o = r(6),
        a = "[object AsyncFunction]",
        i = "[object Function]",
        l = "[object GeneratorFunction]",
        u = "[object Proxy]";
    e.exports = function(e) {
        if (!o(e)) return !1;
        var t = n(e);
        return t == i || t == l || t == a || t == u
    }
}, function(e, t, r) {
    var n = r(51)(Object.getPrototypeOf, Object);
    e.exports = n
}, function(e, t, r) {
    var n = r(12)(r(7), "Map");
    e.exports = n
}, function(e, t, r) {
    var n = r(114),
        o = r(121),
        a = r(123),
        i = r(124),
        l = r(125);

    function u(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    u.prototype.clear = n, u.prototype.delete = o, u.prototype.get = a, u.prototype.has = i, u.prototype.set = l, e.exports = u
}, function(e, t, r) {
    var n = r(136),
        o = r(62),
        a = Object.prototype.propertyIsEnumerable,
        i = Object.getOwnPropertySymbols,
        l = i ? function(e) {
            return null == e ? [] : (e = Object(e), n(i(e), (function(t) {
                return a.call(e, t)
            })))
        } : o;
    e.exports = l
}, function(e, t, r) {
    var n = r(3),
        o = r(26),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        i = /^\w*$/;
    e.exports = function(e, t) {
        if (n(e)) return !1;
        var r = typeof e;
        return !("number" != r && "symbol" != r && "boolean" != r && null != e && !o(e)) || (i.test(e) || !a.test(e) || null != t && e in Object(t))
    }
}, function(e, t, r) {
    var n = r(70);
    e.exports = function(e, t, r) {
        "__proto__" == t && n ? n(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : e[t] = r
    }
}, function(e, t, r) {
    var n = r(58);
    e.exports = function(e) {
        var t = new e.constructor(e.byteLength);
        return new n(t).set(new n(e)), t
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Checkboard = void 0;
    var n = i(r(0)),
        o = i(r(1)),
        a = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }(r(183));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = t.Checkboard = function(e) {
        var t = e.white,
            r = e.grey,
            i = e.size,
            l = e.renderers,
            u = e.borderRadius,
            c = e.boxShadow,
            s = (0, o.default)({
                default: {
                    grid: {
                        borderRadius: u,
                        boxShadow: c,
                        absolute: "0px 0px 0px 0px",
                        background: "url(" + a.get(t, r, i, l.canvas) + ") center left"
                    }
                }
            });
        return n.default.createElement("div", {
            style: s.grid
        })
    };
    l.defaultProps = {
        size: 8,
        white: "transparent",
        grey: "rgba(0,0,0,.08)",
        renderers: {}
    }, t.default = l
}, function(e, t, r) {
    (function(t) {
        var r = "object" == typeof t && t && t.Object === Object && t;
        e.exports = r
    }).call(this, r(87))
}, function(e, t, r) {
    var n = r(49),
        o = r(15);
    e.exports = function(e, t) {
        return e && n(e, t, o)
    }
}, function(e, t, r) {
    var n = r(90)();
    e.exports = n
}, function(e, t, r) {
    var n = r(91),
        o = r(30),
        a = r(3),
        i = r(18),
        l = r(32),
        u = r(33),
        c = Object.prototype.hasOwnProperty;
    e.exports = function(e, t) {
        var r = a(e),
            s = !r && o(e),
            f = !r && !s && i(e),
            d = !r && !s && !f && u(e),
            p = r || s || f || d,
            h = p ? n(e.length, String) : [],
            b = h.length;
        for (var v in e) !t && !c.call(e, v) || p && ("length" == v || f && ("offset" == v || "parent" == v) || d && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || l(v, b)) || h.push(v);
        return h
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
}, function(e, t, r) {
    var n = r(19);
    e.exports = function(e) {
        return "function" == typeof e ? e : n
    }
}, function(e, t, r) {
    var n = r(11),
        o = r(39),
        a = r(9),
        i = "[object Object]",
        l = Function.prototype,
        u = Object.prototype,
        c = l.toString,
        s = u.hasOwnProperty,
        f = c.call(Object);
    e.exports = function(e) {
        if (!a(e) || n(e) != i) return !1;
        var t = o(e);
        if (null === t) return !0;
        var r = s.call(t, "constructor") && t.constructor;
        return "function" == typeof r && r instanceof r && c.call(r) == f
    }
}, function(e, t) {
    e.exports = function(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n;) o[r] = t(e[r], r, e);
        return o
    }
}, function(e, t) {
    var r = Function.prototype.toString;
    e.exports = function(e) {
        if (null != e) {
            try {
                return r.call(e)
            } catch (e) {}
            try {
                return e + ""
            } catch (e) {}
        }
        return ""
    }
}, function(e, t, r) {
    var n = r(126),
        o = r(9);
    e.exports = function e(t, r, a, i, l) {
        return t === r || (null == t || null == r || !o(t) && !o(r) ? t != t && r != r : n(t, r, a, i, e, l))
    }
}, function(e, t, r) {
    var n = r(127),
        o = r(130),
        a = r(131),
        i = 1,
        l = 2;
    e.exports = function(e, t, r, u, c, s) {
        var f = r & i,
            d = e.length,
            p = t.length;
        if (d != p && !(f && p > d)) return !1;
        var h = s.get(e);
        if (h && s.get(t)) return h == t;
        var b = -1,
            v = !0,
            g = r & l ? new n : void 0;
        for (s.set(e, t), s.set(t, e); ++b < d;) {
            var y = e[b],
                x = t[b];
            if (u) var m = f ? u(x, y, b, t, e, s) : u(y, x, b, e, t, s);
            if (void 0 !== m) {
                if (m) continue;
                v = !1;
                break
            }
            if (g) {
                if (!o(t, (function(e, t) {
                        if (!a(g, t) && (y === e || c(y, e, r, u, s))) return g.push(t)
                    }))) {
                    v = !1;
                    break
                }
            } else if (y !== x && !c(y, x, r, u, s)) {
                v = !1;
                break
            }
        }
        return s.delete(e), s.delete(t), v
    }
}, function(e, t, r) {
    var n = r(7).Uint8Array;
    e.exports = n
}, function(e, t, r) {
    var n = r(60),
        o = r(42),
        a = r(15);
    e.exports = function(e) {
        return n(e, a, o)
    }
}, function(e, t, r) {
    var n = r(61),
        o = r(3);
    e.exports = function(e, t, r) {
        var a = t(e);
        return o(e) ? a : n(a, r(e))
    }
}, function(e, t) {
    e.exports = function(e, t) {
        for (var r = -1, n = t.length, o = e.length; ++r < n;) e[o + r] = t[r];
        return e
    }
}, function(e, t) {
    e.exports = function() {
        return []
    }
}, function(e, t, r) {
    var n = r(6);
    e.exports = function(e) {
        return e == e && !n(e)
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return function(r) {
            return null != r && (r[e] === t && (void 0 !== t || e in Object(r)))
        }
    }
}, function(e, t, r) {
    var n = r(66),
        o = r(27);
    e.exports = function(e, t) {
        for (var r = 0, a = (t = n(t, e)).length; null != e && r < a;) e = e[o(t[r++])];
        return r && r == a ? e : void 0
    }
}, function(e, t, r) {
    var n = r(3),
        o = r(43),
        a = r(144),
        i = r(147);
    e.exports = function(e, t) {
        return n(e) ? e : o(e, t) ? [e] : a(i(e))
    }
}, function(e, t, r) {
    var n = r(48),
        o = r(156)(n);
    e.exports = o
}, function(e, t) {
    e.exports = function(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e););
        return e
    }
}, function(e, t, r) {
    var n = r(44),
        o = r(16),
        a = Object.prototype.hasOwnProperty;
    e.exports = function(e, t, r) {
        var i = e[t];
        a.call(e, t) && o(i, r) && (void 0 !== r || t in e) || n(e, t, r)
    }
}, function(e, t, r) {
    var n = r(12),
        o = function() {
            try {
                var e = n(Object, "defineProperty");
                return e({}, "", {}), e
            } catch (e) {}
        }();
    e.exports = o
}, function(e, t, r) {
    (function(e) {
        var n = r(7),
            o = t && !t.nodeType && t,
            a = o && "object" == typeof e && e && !e.nodeType && e,
            i = a && a.exports === o ? n.Buffer : void 0,
            l = i ? i.allocUnsafe : void 0;
        e.exports = function(e, t) {
            if (t) return e.slice();
            var r = e.length,
                n = l ? l(r) : new e.constructor(r);
            return e.copy(n), n
        }
    }).call(this, r(31)(e))
}, function(e, t) {
    e.exports = function(e, t) {
        var r = -1,
            n = e.length;
        for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
        return t
    }
}, function(e, t, r) {
    var n = r(61),
        o = r(39),
        a = r(42),
        i = r(62),
        l = Object.getOwnPropertySymbols ? function(e) {
            for (var t = []; e;) n(t, a(e)), e = o(e);
            return t
        } : i;
    e.exports = l
}, function(e, t, r) {
    var n = r(45);
    e.exports = function(e, t) {
        var r = t ? n(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length)
    }
}, function(e, t, r) {
    var n = r(172),
        o = r(39),
        a = r(37);
    e.exports = function(e) {
        return "function" != typeof e.constructor || a(e) ? {} : n(o(e))
    }
}, function(e, t, r) {
    var n = r(44),
        o = r(16);
    e.exports = function(e, t, r) {
        (void 0 === r || o(e[t], r)) && (void 0 !== r || t in e) || n(e, t, r)
    }
}, function(e, t) {
    e.exports = function(e, t) {
        if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
    }
}, function(e, t, r) {
    var n = r(6),
        o = r(205),
        a = r(206),
        i = "Expected a function",
        l = Math.max,
        u = Math.min;
    e.exports = function(e, t, r) {
        var c, s, f, d, p, h, b = 0,
            v = !1,
            g = !1,
            y = !0;
        if ("function" != typeof e) throw new TypeError(i);

        function x(t) {
            var r = c,
                n = s;
            return c = s = void 0, b = t, d = e.apply(n, r)
        }

        function m(e) {
            var r = e - h;
            return void 0 === h || r >= t || r < 0 || g && e - b >= f
        }

        function w() {
            var e = o();
            if (m(e)) return _(e);
            p = setTimeout(w, function(e) {
                var r = t - (e - h);
                return g ? u(r, f - (e - b)) : r
            }(e))
        }

        function _(e) {
            return p = void 0, y && c ? x(e) : (c = s = void 0, d)
        }

        function E() {
            var e = o(),
                r = m(e);
            if (c = arguments, s = this, h = e, r) {
                if (void 0 === p) return function(e) {
                    return b = e, p = setTimeout(w, t), v ? x(e) : d
                }(h);
                if (g) return clearTimeout(p), p = setTimeout(w, t), x(h)
            }
            return void 0 === p && (p = setTimeout(w, t)), d
        }
        return t = a(t) || 0, n(r) && (v = !!r.leading, f = (g = "maxWait" in r) ? l(a(r.maxWait) || 0, t) : f, y = "trailing" in r ? !!r.trailing : y), E.cancel = function() {
            void 0 !== p && clearTimeout(p), b = 0, c = h = s = p = void 0
        }, E.flush = function() {
            return void 0 === p ? d : _(o())
        }, E
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ColorWrap = void 0;
    var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        o = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }(),
        a = r(0),
        i = c(a),
        l = c(r(78)),
        u = c(r(8));

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var s = t.ColorWrap = function(e) {
        var t = function(t) {
            function r(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, r);
                var t = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
                return t.handleChange = function(e, r) {
                    if (u.default.simpleCheckForValidColor(e)) {
                        var n = u.default.toState(e, e.h || t.state.oldHue);
                        t.setState(n), t.props.onChangeComplete && t.debounce(t.props.onChangeComplete, n, r), t.props.onChange && t.props.onChange(n, r)
                    }
                }, t.handleSwatchHover = function(e, r) {
                    if (u.default.simpleCheckForValidColor(e)) {
                        var n = u.default.toState(e, e.h || t.state.oldHue);
                        t.props.onSwatchHover && t.props.onSwatchHover(n, r)
                    }
                }, t.state = n({}, u.default.toState(e.color, 0)), t.debounce = (0, l.default)((function(e, t, r) {
                    e(t, r)
                }), 100), t
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(r, t), o(r, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.setState(n({}, u.default.toState(e.color, this.state.oldHue)))
                }
            }, {
                key: "render",
                value: function() {
                    var t = {};
                    return this.props.onSwatchHover && (t.onSwatchHover = this.handleSwatchHover), i.default.createElement(e, n({}, this.props, this.state, {
                        onChange: this.handleChange
                    }, t))
                }
            }]), r
        }(a.PureComponent || a.Component);
        return t.propTypes = n({}, e.propTypes), t.defaultProps = n({}, e.defaultProps, {
            color: {
                h: 250,
                s: .5,
                l: .2,
                a: 1
            }
        }), t
    };
    t.default = s
}, function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, "red", (function() {
        return n
    })), r.d(t, "pink", (function() {
        return o
    })), r.d(t, "purple", (function() {
        return a
    })), r.d(t, "deepPurple", (function() {
        return i
    })), r.d(t, "indigo", (function() {
        return l
    })), r.d(t, "blue", (function() {
        return u
    })), r.d(t, "lightBlue", (function() {
        return c
    })), r.d(t, "cyan", (function() {
        return s
    })), r.d(t, "teal", (function() {
        return f
    })), r.d(t, "green", (function() {
        return d
    })), r.d(t, "lightGreen", (function() {
        return p
    })), r.d(t, "lime", (function() {
        return h
    })), r.d(t, "yellow", (function() {
        return b
    })), r.d(t, "amber", (function() {
        return v
    })), r.d(t, "orange", (function() {
        return g
    })), r.d(t, "deepOrange", (function() {
        return y
    })), r.d(t, "brown", (function() {
        return x
    })), r.d(t, "grey", (function() {
        return m
    })), r.d(t, "blueGrey", (function() {
        return w
    })), r.d(t, "darkText", (function() {
        return _
    })), r.d(t, "lightText", (function() {
        return E
    })), r.d(t, "darkIcons", (function() {
        return C
    })), r.d(t, "lightIcons", (function() {
        return O
    })), r.d(t, "white", (function() {
        return S
    })), r.d(t, "black", (function() {
        return j
    }));
    var n = {
            50: "#ffebee",
            100: "#ffcdd2",
            200: "#ef9a9a",
            300: "#e57373",
            400: "#ef5350",
            500: "#f44336",
            600: "#e53935",
            700: "#d32f2f",
            800: "#c62828",
            900: "#b71c1c",
            a100: "#ff8a80",
            a200: "#ff5252",
            a400: "#ff1744",
            a700: "#d50000"
        },
        o = {
            50: "#fce4ec",
            100: "#f8bbd0",
            200: "#f48fb1",
            300: "#f06292",
            400: "#ec407a",
            500: "#e91e63",
            600: "#d81b60",
            700: "#c2185b",
            800: "#ad1457",
            900: "#880e4f",
            a100: "#ff80ab",
            a200: "#ff4081",
            a400: "#f50057",
            a700: "#c51162"
        },
        a = {
            50: "#f3e5f5",
            100: "#e1bee7",
            200: "#ce93d8",
            300: "#ba68c8",
            400: "#ab47bc",
            500: "#9c27b0",
            600: "#8e24aa",
            700: "#7b1fa2",
            800: "#6a1b9a",
            900: "#4a148c",
            a100: "#ea80fc",
            a200: "#e040fb",
            a400: "#d500f9",
            a700: "#aa00ff"
        },
        i = {
            50: "#ede7f6",
            100: "#d1c4e9",
            200: "#b39ddb",
            300: "#9575cd",
            400: "#7e57c2",
            500: "#673ab7",
            600: "#5e35b1",
            700: "#512da8",
            800: "#4527a0",
            900: "#311b92",
            a100: "#b388ff",
            a200: "#7c4dff",
            a400: "#651fff",
            a700: "#6200ea"
        },
        l = {
            50: "#e8eaf6",
            100: "#c5cae9",
            200: "#9fa8da",
            300: "#7986cb",
            400: "#5c6bc0",
            500: "#3f51b5",
            600: "#3949ab",
            700: "#303f9f",
            800: "#283593",
            900: "#1a237e",
            a100: "#8c9eff",
            a200: "#536dfe",
            a400: "#3d5afe",
            a700: "#304ffe"
        },
        u = {
            50: "#e3f2fd",
            100: "#bbdefb",
            200: "#90caf9",
            300: "#64b5f6",
            400: "#42a5f5",
            500: "#2196f3",
            600: "#1e88e5",
            700: "#1976d2",
            800: "#1565c0",
            900: "#0d47a1",
            a100: "#82b1ff",
            a200: "#448aff",
            a400: "#2979ff",
            a700: "#2962ff"
        },
        c = {
            50: "#e1f5fe",
            100: "#b3e5fc",
            200: "#81d4fa",
            300: "#4fc3f7",
            400: "#29b6f6",
            500: "#03a9f4",
            600: "#039be5",
            700: "#0288d1",
            800: "#0277bd",
            900: "#01579b",
            a100: "#80d8ff",
            a200: "#40c4ff",
            a400: "#00b0ff",
            a700: "#0091ea"
        },
        s = {
            50: "#e0f7fa",
            100: "#b2ebf2",
            200: "#80deea",
            300: "#4dd0e1",
            400: "#26c6da",
            500: "#00bcd4",
            600: "#00acc1",
            700: "#0097a7",
            800: "#00838f",
            900: "#006064",
            a100: "#84ffff",
            a200: "#18ffff",
            a400: "#00e5ff",
            a700: "#00b8d4"
        },
        f = {
            50: "#e0f2f1",
            100: "#b2dfdb",
            200: "#80cbc4",
            300: "#4db6ac",
            400: "#26a69a",
            500: "#009688",
            600: "#00897b",
            700: "#00796b",
            800: "#00695c",
            900: "#004d40",
            a100: "#a7ffeb",
            a200: "#64ffda",
            a400: "#1de9b6",
            a700: "#00bfa5"
        },
        d = {
            50: "#e8f5e9",
            100: "#c8e6c9",
            200: "#a5d6a7",
            300: "#81c784",
            400: "#66bb6a",
            500: "#4caf50",
            600: "#43a047",
            700: "#388e3c",
            800: "#2e7d32",
            900: "#1b5e20",
            a100: "#b9f6ca",
            a200: "#69f0ae",
            a400: "#00e676",
            a700: "#00c853"
        },
        p = {
            50: "#f1f8e9",
            100: "#dcedc8",
            200: "#c5e1a5",
            300: "#aed581",
            400: "#9ccc65",
            500: "#8bc34a",
            600: "#7cb342",
            700: "#689f38",
            800: "#558b2f",
            900: "#33691e",
            a100: "#ccff90",
            a200: "#b2ff59",
            a400: "#76ff03",
            a700: "#64dd17"
        },
        h = {
            50: "#f9fbe7",
            100: "#f0f4c3",
            200: "#e6ee9c",
            300: "#dce775",
            400: "#d4e157",
            500: "#cddc39",
            600: "#c0ca33",
            700: "#afb42b",
            800: "#9e9d24",
            900: "#827717",
            a100: "#f4ff81",
            a200: "#eeff41",
            a400: "#c6ff00",
            a700: "#aeea00"
        },
        b = {
            50: "#fffde7",
            100: "#fff9c4",
            200: "#fff59d",
            300: "#fff176",
            400: "#ffee58",
            500: "#ffeb3b",
            600: "#fdd835",
            700: "#fbc02d",
            800: "#f9a825",
            900: "#f57f17",
            a100: "#ffff8d",
            a200: "#ffff00",
            a400: "#ffea00",
            a700: "#ffd600"
        },
        v = {
            50: "#fff8e1",
            100: "#ffecb3",
            200: "#ffe082",
            300: "#ffd54f",
            400: "#ffca28",
            500: "#ffc107",
            600: "#ffb300",
            700: "#ffa000",
            800: "#ff8f00",
            900: "#ff6f00",
            a100: "#ffe57f",
            a200: "#ffd740",
            a400: "#ffc400",
            a700: "#ffab00"
        },
        g = {
            50: "#fff3e0",
            100: "#ffe0b2",
            200: "#ffcc80",
            300: "#ffb74d",
            400: "#ffa726",
            500: "#ff9800",
            600: "#fb8c00",
            700: "#f57c00",
            800: "#ef6c00",
            900: "#e65100",
            a100: "#ffd180",
            a200: "#ffab40",
            a400: "#ff9100",
            a700: "#ff6d00"
        },
        y = {
            50: "#fbe9e7",
            100: "#ffccbc",
            200: "#ffab91",
            300: "#ff8a65",
            400: "#ff7043",
            500: "#ff5722",
            600: "#f4511e",
            700: "#e64a19",
            800: "#d84315",
            900: "#bf360c",
            a100: "#ff9e80",
            a200: "#ff6e40",
            a400: "#ff3d00",
            a700: "#dd2c00"
        },
        x = {
            50: "#efebe9",
            100: "#d7ccc8",
            200: "#bcaaa4",
            300: "#a1887f",
            400: "#8d6e63",
            500: "#795548",
            600: "#6d4c41",
            700: "#5d4037",
            800: "#4e342e",
            900: "#3e2723"
        },
        m = {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#eeeeee",
            300: "#e0e0e0",
            400: "#bdbdbd",
            500: "#9e9e9e",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121"
        },
        w = {
            50: "#eceff1",
            100: "#cfd8dc",
            200: "#b0bec5",
            300: "#90a4ae",
            400: "#78909c",
            500: "#607d8b",
            600: "#546e7a",
            700: "#455a64",
            800: "#37474f",
            900: "#263238"
        },
        _ = {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            dividers: "rgba(0, 0, 0, 0.12)"
        },
        E = {
            primary: "rgba(255, 255, 255, 1)",
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)",
            dividers: "rgba(255, 255, 255, 0.12)"
        },
        C = {
            active: "rgba(0, 0, 0, 0.54)",
            inactive: "rgba(0, 0, 0, 0.38)"
        },
        O = {
            active: "rgba(255, 255, 255, 1)",
            inactive: "rgba(255, 255, 255, 0.5)"
        },
        S = "#ffffff",
        j = "#000000";
    t.default = {
        red: n,
        pink: o,
        purple: a,
        deepPurple: i,
        indigo: l,
        blue: u,
        lightBlue: c,
        cyan: s,
        teal: f,
        green: d,
        lightGreen: p,
        lime: h,
        yellow: b,
        amber: v,
        orange: g,
        deepOrange: y,
        brown: x,
        grey: m,
        blueGrey: w,
        darkText: _,
        lightText: E,
        darkIcons: C,
        lightIcons: O,
        white: S,
        black: j
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CustomPicker = t.TwitterPicker = t.SwatchesPicker = t.SliderPicker = t.SketchPicker = t.PhotoshopPicker = t.MaterialPicker = t.HuePicker = t.GithubPicker = t.CompactPicker = t.ChromePicker = t.default = t.CirclePicker = t.BlockPicker = t.AlphaPicker = void 0;
    var n = r(82);
    Object.defineProperty(t, "AlphaPicker", {
        enumerable: !0,
        get: function() {
            return y(n).default
        }
    });
    var o = r(214);
    Object.defineProperty(t, "BlockPicker", {
        enumerable: !0,
        get: function() {
            return y(o).default
        }
    });
    var a = r(216);
    Object.defineProperty(t, "CirclePicker", {
        enumerable: !0,
        get: function() {
            return y(a).default
        }
    });
    var i = r(218);
    Object.defineProperty(t, "ChromePicker", {
        enumerable: !0,
        get: function() {
            return y(i).default
        }
    });
    var l = r(223);
    Object.defineProperty(t, "CompactPicker", {
        enumerable: !0,
        get: function() {
            return y(l).default
        }
    });
    var u = r(226);
    Object.defineProperty(t, "GithubPicker", {
        enumerable: !0,
        get: function() {
            return y(u).default
        }
    });
    var c = r(228);
    Object.defineProperty(t, "HuePicker", {
        enumerable: !0,
        get: function() {
            return y(c).default
        }
    });
    var s = r(230);
    Object.defineProperty(t, "MaterialPicker", {
        enumerable: !0,
        get: function() {
            return y(s).default
        }
    });
    var f = r(231);
    Object.defineProperty(t, "PhotoshopPicker", {
        enumerable: !0,
        get: function() {
            return y(f).default
        }
    });
    var d = r(237);
    Object.defineProperty(t, "SketchPicker", {
        enumerable: !0,
        get: function() {
            return y(d).default
        }
    });
    var p = r(240);
    Object.defineProperty(t, "SliderPicker", {
        enumerable: !0,
        get: function() {
            return y(p).default
        }
    });
    var h = r(244);
    Object.defineProperty(t, "SwatchesPicker", {
        enumerable: !0,
        get: function() {
            return y(h).default
        }
    });
    var b = r(248);
    Object.defineProperty(t, "TwitterPicker", {
        enumerable: !0,
        get: function() {
            return y(b).default
        }
    });
    var v = r(79);
    Object.defineProperty(t, "CustomPicker", {
        enumerable: !0,
        get: function() {
            return y(v).default
        }
    });
    var g = y(i);

    function y(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = g.default
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AlphaPicker = void 0;
    var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        o = u(r(0)),
        a = u(r(1)),
        i = r(2),
        l = u(r(213));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = t.AlphaPicker = function(e) {
        var t = e.rgb,
            r = e.hsl,
            l = e.width,
            u = e.height,
            c = e.onChange,
            s = e.direction,
            f = e.style,
            d = e.renderers,
            p = e.pointer,
            h = e.className,
            b = void 0 === h ? "" : h,
            v = (0, a.default)({
                default: {
                    picker: {
                        position: "relative",
                        width: l,
                        height: u
                    },
                    alpha: {
                        radius: "2px",
                        style: f
                    }
                }
            });
        return o.default.createElement("div", {
            style: v.picker,
            className: "alpha-picker " + b
        }, o.default.createElement(i.Alpha, n({}, v.alpha, {
            rgb: t,
            hsl: r,
            pointer: p,
            renderers: d,
            onChange: c,
            direction: s
        })))
    };
    c.defaultProps = {
        width: "316px",
        height: "16px",
        direction: "horizontal",
        pointer: l.default
    }, t.default = (0, i.ColorWrap)(c)
}, function(e, t, r) {
    "use strict";
    /** @license React v16.12.0
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var n = r(84),
        o = "function" == typeof Symbol && Symbol.for,
        a = o ? Symbol.for("react.element") : 60103,
        i = o ? Symbol.for("react.portal") : 60106,
        l = o ? Symbol.for("react.fragment") : 60107,
        u = o ? Symbol.for("react.strict_mode") : 60108,
        c = o ? Symbol.for("react.profiler") : 60114,
        s = o ? Symbol.for("react.provider") : 60109,
        f = o ? Symbol.for("react.context") : 60110,
        d = o ? Symbol.for("react.forward_ref") : 60112,
        p = o ? Symbol.for("react.suspense") : 60113;
    o && Symbol.for("react.suspense_list");
    var h = o ? Symbol.for("react.memo") : 60115,
        b = o ? Symbol.for("react.lazy") : 60116;
    o && Symbol.for("react.fundamental"), o && Symbol.for("react.responder"), o && Symbol.for("react.scope");
    var v = "function" == typeof Symbol && Symbol.iterator;

    function g(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var y = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        x = {};

    function m(e, t, r) {
        this.props = e, this.context = t, this.refs = x, this.updater = r || y
    }

    function w() {}

    function _(e, t, r) {
        this.props = e, this.context = t, this.refs = x, this.updater = r || y
    }
    m.prototype.isReactComponent = {}, m.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error(g(85));
        this.updater.enqueueSetState(this, e, t, "setState")
    }, m.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, w.prototype = m.prototype;
    var E = _.prototype = new w;
    E.constructor = _, n(E, m.prototype), E.isPureReactComponent = !0;
    var C = {
            current: null
        },
        O = {
            current: null
        },
        S = Object.prototype.hasOwnProperty,
        j = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function k(e, t, r) {
        var n, o = {},
            i = null,
            l = null;
        if (null != t)
            for (n in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t) S.call(t, n) && !j.hasOwnProperty(n) && (o[n] = t[n]);
        var u = arguments.length - 2;
        if (1 === u) o.children = r;
        else if (1 < u) {
            for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
            o.children = c
        }
        if (e && e.defaultProps)
            for (n in u = e.defaultProps) void 0 === o[n] && (o[n] = u[n]);
        return {
            $$typeof: a,
            type: e,
            key: i,
            ref: l,
            props: o,
            _owner: O.current
        }
    }

    function P(e) {
        return "object" == typeof e && null !== e && e.$$typeof === a
    }
    var M = /\/+/g,
        R = [];

    function A(e, t, r, n) {
        if (R.length) {
            var o = R.pop();
            return o.result = e, o.keyPrefix = t, o.func = r, o.context = n, o.count = 0, o
        }
        return {
            result: e,
            keyPrefix: t,
            func: r,
            context: n,
            count: 0
        }
    }

    function F(e) {
        e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > R.length && R.push(e)
    }

    function B(e, t, r) {
        return null == e ? 0 : function e(t, r, n, o) {
            var l = typeof t;
            "undefined" !== l && "boolean" !== l || (t = null);
            var u = !1;
            if (null === t) u = !0;
            else switch (l) {
                case "string":
                case "number":
                    u = !0;
                    break;
                case "object":
                    switch (t.$$typeof) {
                        case a:
                        case i:
                            u = !0
                    }
            }
            if (u) return n(o, t, "" === r ? "." + H(t, 0) : r), 1;
            if (u = 0, r = "" === r ? "." : r + ":", Array.isArray(t))
                for (var c = 0; c < t.length; c++) {
                    var s = r + H(l = t[c], c);
                    u += e(l, s, n, o)
                } else if (null === t || "object" != typeof t ? s = null : s = "function" == typeof(s = v && t[v] || t["@@iterator"]) ? s : null, "function" == typeof s)
                    for (t = s.call(t), c = 0; !(l = t.next()).done;) u += e(l = l.value, s = r + H(l, c++), n, o);
                else if ("object" === l) throw n = "" + t, Error(g(31, "[object Object]" === n ? "object with keys {" + Object.keys(t).join(", ") + "}" : n, ""));
            return u
        }(e, "", t, r)
    }

    function H(e, t) {
        return "object" == typeof e && null !== e && null != e.key ? function(e) {
            var t = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + ("" + e).replace(/[=:]/g, (function(e) {
                return t[e]
            }))
        }(e.key) : t.toString(36)
    }

    function T(e, t) {
        e.func.call(e.context, t, e.count++)
    }

    function z(e, t, r) {
        var n = e.result,
            o = e.keyPrefix;
        e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? D(e, n, r, (function(e) {
            return e
        })) : null != e && (P(e) && (e = function(e, t) {
            return {
                $$typeof: a,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner
            }
        }(e, o + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(M, "$&/") + "/") + r)), n.push(e))
    }

    function D(e, t, r, n, o) {
        var a = "";
        null != r && (a = ("" + r).replace(M, "$&/") + "/"), B(e, z, t = A(t, a, n, o)), F(t)
    }

    function L() {
        var e = C.current;
        if (null === e) throw Error(g(321));
        return e
    }
    var I = {
            Children: {
                map: function(e, t, r) {
                    if (null == e) return e;
                    var n = [];
                    return D(e, n, null, t, r), n
                },
                forEach: function(e, t, r) {
                    if (null == e) return e;
                    B(e, T, t = A(null, null, t, r)), F(t)
                },
                count: function(e) {
                    return B(e, (function() {
                        return null
                    }), null)
                },
                toArray: function(e) {
                    var t = [];
                    return D(e, t, null, (function(e) {
                        return e
                    })), t
                },
                only: function(e) {
                    if (!P(e)) throw Error(g(143));
                    return e
                }
            },
            createRef: function() {
                return {
                    current: null
                }
            },
            Component: m,
            PureComponent: _,
            createContext: function(e, t) {
                return void 0 === t && (t = null), (e = {
                    $$typeof: f,
                    _calculateChangedBits: t,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {
                    $$typeof: s,
                    _context: e
                }, e.Consumer = e
            },
            forwardRef: function(e) {
                return {
                    $$typeof: d,
                    render: e
                }
            },
            lazy: function(e) {
                return {
                    $$typeof: b,
                    _ctor: e,
                    _status: -1,
                    _result: null
                }
            },
            memo: function(e, t) {
                return {
                    $$typeof: h,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            },
            useCallback: function(e, t) {
                return L().useCallback(e, t)
            },
            useContext: function(e, t) {
                return L().useContext(e, t)
            },
            useEffect: function(e, t) {
                return L().useEffect(e, t)
            },
            useImperativeHandle: function(e, t, r) {
                return L().useImperativeHandle(e, t, r)
            },
            useDebugValue: function() {},
            useLayoutEffect: function(e, t) {
                return L().useLayoutEffect(e, t)
            },
            useMemo: function(e, t) {
                return L().useMemo(e, t)
            },
            useReducer: function(e, t, r) {
                return L().useReducer(e, t, r)
            },
            useRef: function(e) {
                return L().useRef(e)
            },
            useState: function(e) {
                return L().useState(e)
            },
            Fragment: l,
            Profiler: c,
            StrictMode: u,
            Suspense: p,
            createElement: k,
            cloneElement: function(e, t, r) {
                if (null == e) throw Error(g(267, e));
                var o = n({}, e.props),
                    i = e.key,
                    l = e.ref,
                    u = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (l = t.ref, u = O.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
                    for (s in t) S.call(t, s) && !j.hasOwnProperty(s) && (o[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s])
                }
                var s = arguments.length - 2;
                if (1 === s) o.children = r;
                else if (1 < s) {
                    c = Array(s);
                    for (var f = 0; f < s; f++) c[f] = arguments[f + 2];
                    o.children = c
                }
                return {
                    $$typeof: a,
                    type: e.type,
                    key: i,
                    ref: l,
                    props: o,
                    _owner: u
                }
            },
            createFactory: function(e) {
                var t = k.bind(null, e);
                return t.type = e, t
            },
            isValidElement: P,
            version: "16.12.0",
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                ReactCurrentDispatcher: C,
                ReactCurrentBatchConfig: {
                    suspense: null
                },
                ReactCurrentOwner: O,
                IsSomeRendererActing: {
                    current: !1
                },
                assign: n
            }
        },
        N = {
            default: I
        },
        G = N && I || N;
    e.exports = G.default || G
}, function(e, t, r) {
    "use strict";
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var n = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable;

    function i(e) {
        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }
    e.exports = function() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                    return t[e]
                })).join("")) return !1;
            var n = {};
            return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                n[e] = e
            })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function(e, t) {
        for (var r, l, u = i(e), c = 1; c < arguments.length; c++) {
            for (var s in r = Object(arguments[c])) o.call(r, s) && (u[s] = r[s]);
            if (n) {
                l = n(r);
                for (var f = 0; f < l.length; f++) a.call(r, l[f]) && (u[l[f]] = r[l[f]])
            }
        }
        return u
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.flattenNames = void 0;
    var n = l(r(86)),
        o = l(r(29)),
        a = l(r(53)),
        i = l(r(10));

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = t.flattenNames = function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            r = [];
        return (0, i.default)(t, (function(t) {
            Array.isArray(t) ? e(t).map((function(e) {
                return r.push(e)
            })) : (0, a.default)(t) ? (0, o.default)(t, (function(e, t) {
                !0 === e && r.push(t), r.push(t + "-" + e)
            })) : (0, n.default)(t) && r.push(t)
        })), r
    };
    t.default = u
}, function(e, t, r) {
    var n = r(11),
        o = r(3),
        a = r(9),
        i = "[object String]";
    e.exports = function(e) {
        return "string" == typeof e || !o(e) && a(e) && n(e) == i
    }
}, function(e, t) {
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (r = window)
    }
    e.exports = r
}, function(e, t, r) {
    var n = r(14),
        o = Object.prototype,
        a = o.hasOwnProperty,
        i = o.toString,
        l = n ? n.toStringTag : void 0;
    e.exports = function(e) {
        var t = a.call(e, l),
            r = e[l];
        try {
            e[l] = void 0;
            var n = !0
        } catch (e) {}
        var o = i.call(e);
        return n && (t ? e[l] = r : delete e[l]), o
    }
}, function(e, t) {
    var r = Object.prototype.toString;
    e.exports = function(e) {
        return r.call(e)
    }
}, function(e, t) {
    e.exports = function(e) {
        return function(t, r, n) {
            for (var o = -1, a = Object(t), i = n(t), l = i.length; l--;) {
                var u = i[e ? l : ++o];
                if (!1 === r(a[u], u, a)) break
            }
            return t
        }
    }
}, function(e, t) {
    e.exports = function(e, t) {
        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
        return n
    }
}, function(e, t, r) {
    var n = r(11),
        o = r(9),
        a = "[object Arguments]";
    e.exports = function(e) {
        return o(e) && n(e) == a
    }
}, function(e, t) {
    e.exports = function() {
        return !1
    }
}, function(e, t, r) {
    var n = r(11),
        o = r(34),
        a = r(9),
        i = {};
    i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1, e.exports = function(e) {
        return a(e) && o(e.length) && !!i[n(e)]
    }
}, function(e, t, r) {
    var n = r(37),
        o = r(96),
        a = Object.prototype.hasOwnProperty;
    e.exports = function(e) {
        if (!n(e)) return o(e);
        var t = [];
        for (var r in Object(e)) a.call(e, r) && "constructor" != r && t.push(r);
        return t
    }
}, function(e, t, r) {
    var n = r(51)(Object.keys, Object);
    e.exports = n
}, function(e, t, r) {
    var n = r(98),
        o = r(142),
        a = r(19),
        i = r(3),
        l = r(152);
    e.exports = function(e) {
        return "function" == typeof e ? e : null == e ? a : "object" == typeof e ? i(e) ? o(e[0], e[1]) : n(e) : l(e)
    }
}, function(e, t, r) {
    var n = r(99),
        o = r(141),
        a = r(64);
    e.exports = function(e) {
        var t = o(e);
        return 1 == t.length && t[0][2] ? a(t[0][0], t[0][1]) : function(r) {
            return r === e || n(r, e, t)
        }
    }
}, function(e, t, r) {
    var n = r(20),
        o = r(56),
        a = 1,
        i = 2;
    e.exports = function(e, t, r, l) {
        var u = r.length,
            c = u,
            s = !l;
        if (null == e) return !c;
        for (e = Object(e); u--;) {
            var f = r[u];
            if (s && f[2] ? f[1] !== e[f[0]] : !(f[0] in e)) return !1
        }
        for (; ++u < c;) {
            var d = (f = r[u])[0],
                p = e[d],
                h = f[1];
            if (s && f[2]) {
                if (void 0 === p && !(d in e)) return !1
            } else {
                var b = new n;
                if (l) var v = l(p, h, d, e, t, b);
                if (!(void 0 === v ? o(h, p, a | i, l, b) : v)) return !1
            }
        }
        return !0
    }
}, function(e, t) {
    e.exports = function() {
        this.__data__ = [], this.size = 0
    }
}, function(e, t, r) {
    var n = r(22),
        o = Array.prototype.splice;
    e.exports = function(e) {
        var t = this.__data__,
            r = n(t, e);
        return !(r < 0) && (r == t.length - 1 ? t.pop() : o.call(t, r, 1), --this.size, !0)
    }
}, function(e, t, r) {
    var n = r(22);
    e.exports = function(e) {
        var t = this.__data__,
            r = n(t, e);
        return r < 0 ? void 0 : t[r][1]
    }
}, function(e, t, r) {
    var n = r(22);
    e.exports = function(e) {
        return n(this.__data__, e) > -1
    }
}, function(e, t, r) {
    var n = r(22);
    e.exports = function(e, t) {
        var r = this.__data__,
            o = n(r, e);
        return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this
    }
}, function(e, t, r) {
    var n = r(21);
    e.exports = function() {
        this.__data__ = new n, this.size = 0
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = this.__data__,
            r = t.delete(e);
        return this.size = t.size, r
    }
}, function(e, t) {
    e.exports = function(e) {
        return this.__data__.get(e)
    }
}, function(e, t) {
    e.exports = function(e) {
        return this.__data__.has(e)
    }
}, function(e, t, r) {
    var n = r(21),
        o = r(40),
        a = r(41),
        i = 200;
    e.exports = function(e, t) {
        var r = this.__data__;
        if (r instanceof n) {
            var l = r.__data__;
            if (!o || l.length < i - 1) return l.push([e, t]), this.size = ++r.size, this;
            r = this.__data__ = new a(l)
        }
        return r.set(e, t), this.size = r.size, this
    }
}, function(e, t, r) {
    var n = r(38),
        o = r(111),
        a = r(6),
        i = r(55),
        l = /^\[object .+?Constructor\]$/,
        u = Function.prototype,
        c = Object.prototype,
        s = u.toString,
        f = c.hasOwnProperty,
        d = RegExp("^" + s.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    e.exports = function(e) {
        return !(!a(e) || o(e)) && (n(e) ? d : l).test(i(e))
    }
}, function(e, t, r) {
    var n, o = r(112),
        a = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
    e.exports = function(e) {
        return !!a && a in e
    }
}, function(e, t, r) {
    var n = r(7)["__core-js_shared__"];
    e.exports = n
}, function(e, t) {
    e.exports = function(e, t) {
        return null == e ? void 0 : e[t]
    }
}, function(e, t, r) {
    var n = r(115),
        o = r(21),
        a = r(40);
    e.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new n,
            map: new(a || o),
            string: new n
        }
    }
}, function(e, t, r) {
    var n = r(116),
        o = r(117),
        a = r(118),
        i = r(119),
        l = r(120);

    function u(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    u.prototype.clear = n, u.prototype.delete = o, u.prototype.get = a, u.prototype.has = i, u.prototype.set = l, e.exports = u
}, function(e, t, r) {
    var n = r(23);
    e.exports = function() {
        this.__data__ = n ? n(null) : {}, this.size = 0
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
}, function(e, t, r) {
    var n = r(23),
        o = "__lodash_hash_undefined__",
        a = Object.prototype.hasOwnProperty;
    e.exports = function(e) {
        var t = this.__data__;
        if (n) {
            var r = t[e];
            return r === o ? void 0 : r
        }
        return a.call(t, e) ? t[e] : void 0
    }
}, function(e, t, r) {
    var n = r(23),
        o = Object.prototype.hasOwnProperty;
    e.exports = function(e) {
        var t = this.__data__;
        return n ? void 0 !== t[e] : o.call(t, e)
    }
}, function(e, t, r) {
    var n = r(23),
        o = "__lodash_hash_undefined__";
    e.exports = function(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = n && void 0 === t ? o : t, this
    }
}, function(e, t, r) {
    var n = r(24);
    e.exports = function(e) {
        var t = n(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }
}, function(e, t, r) {
    var n = r(24);
    e.exports = function(e) {
        return n(this, e).get(e)
    }
}, function(e, t, r) {
    var n = r(24);
    e.exports = function(e) {
        return n(this, e).has(e)
    }
}, function(e, t, r) {
    var n = r(24);
    e.exports = function(e, t) {
        var r = n(this, e),
            o = r.size;
        return r.set(e, t), this.size += r.size == o ? 0 : 1, this
    }
}, function(e, t, r) {
    var n = r(20),
        o = r(57),
        a = r(132),
        i = r(135),
        l = r(25),
        u = r(3),
        c = r(18),
        s = r(33),
        f = 1,
        d = "[object Arguments]",
        p = "[object Array]",
        h = "[object Object]",
        b = Object.prototype.hasOwnProperty;
    e.exports = function(e, t, r, v, g, y) {
        var x = u(e),
            m = u(t),
            w = x ? p : l(e),
            _ = m ? p : l(t),
            E = (w = w == d ? h : w) == h,
            C = (_ = _ == d ? h : _) == h,
            O = w == _;
        if (O && c(e)) {
            if (!c(t)) return !1;
            x = !0, E = !1
        }
        if (O && !E) return y || (y = new n), x || s(e) ? o(e, t, r, v, g, y) : a(e, t, w, r, v, g, y);
        if (!(r & f)) {
            var S = E && b.call(e, "__wrapped__"),
                j = C && b.call(t, "__wrapped__");
            if (S || j) {
                var k = S ? e.value() : e,
                    P = j ? t.value() : t;
                return y || (y = new n), g(k, P, r, v, y)
            }
        }
        return !!O && (y || (y = new n), i(e, t, r, v, g, y))
    }
}, function(e, t, r) {
    var n = r(41),
        o = r(128),
        a = r(129);

    function i(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.__data__ = new n; ++t < r;) this.add(e[t])
    }
    i.prototype.add = i.prototype.push = o, i.prototype.has = a, e.exports = i
}, function(e, t) {
    var r = "__lodash_hash_undefined__";
    e.exports = function(e) {
        return this.__data__.set(e, r), this
    }
}, function(e, t) {
    e.exports = function(e) {
        return this.__data__.has(e)
    }
}, function(e, t) {
    e.exports = function(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
            if (t(e[r], r, e)) return !0;
        return !1
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return e.has(t)
    }
}, function(e, t, r) {
    var n = r(14),
        o = r(58),
        a = r(16),
        i = r(57),
        l = r(133),
        u = r(134),
        c = 1,
        s = 2,
        f = "[object Boolean]",
        d = "[object Date]",
        p = "[object Error]",
        h = "[object Map]",
        b = "[object Number]",
        v = "[object RegExp]",
        g = "[object Set]",
        y = "[object String]",
        x = "[object Symbol]",
        m = "[object ArrayBuffer]",
        w = "[object DataView]",
        _ = n ? n.prototype : void 0,
        E = _ ? _.valueOf : void 0;
    e.exports = function(e, t, r, n, _, C, O) {
        switch (r) {
            case w:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                e = e.buffer, t = t.buffer;
            case m:
                return !(e.byteLength != t.byteLength || !C(new o(e), new o(t)));
            case f:
            case d:
            case b:
                return a(+e, +t);
            case p:
                return e.name == t.name && e.message == t.message;
            case v:
            case y:
                return e == t + "";
            case h:
                var S = l;
            case g:
                var j = n & c;
                if (S || (S = u), e.size != t.size && !j) return !1;
                var k = O.get(e);
                if (k) return k == t;
                n |= s, O.set(e, t);
                var P = i(S(e), S(t), n, _, C, O);
                return O.delete(e), P;
            case x:
                if (E) return E.call(e) == E.call(t)
        }
        return !1
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = -1,
            r = Array(e.size);
        return e.forEach((function(e, n) {
            r[++t] = [n, e]
        })), r
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = -1,
            r = Array(e.size);
        return e.forEach((function(e) {
            r[++t] = e
        })), r
    }
}, function(e, t, r) {
    var n = r(59),
        o = 1,
        a = Object.prototype.hasOwnProperty;
    e.exports = function(e, t, r, i, l, u) {
        var c = r & o,
            s = n(e),
            f = s.length;
        if (f != n(t).length && !c) return !1;
        for (var d = f; d--;) {
            var p = s[d];
            if (!(c ? p in t : a.call(t, p))) return !1
        }
        var h = u.get(e);
        if (h && u.get(t)) return h == t;
        var b = !0;
        u.set(e, t), u.set(t, e);
        for (var v = c; ++d < f;) {
            var g = e[p = s[d]],
                y = t[p];
            if (i) var x = c ? i(y, g, p, t, e, u) : i(g, y, p, e, t, u);
            if (!(void 0 === x ? g === y || l(g, y, r, i, u) : x)) {
                b = !1;
                break
            }
            v || (v = "constructor" == p)
        }
        if (b && !v) {
            var m = e.constructor,
                w = t.constructor;
            m != w && "constructor" in e && "constructor" in t && !("function" == typeof m && m instanceof m && "function" == typeof w && w instanceof w) && (b = !1)
        }
        return u.delete(e), u.delete(t), b
    }
}, function(e, t) {
    e.exports = function(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, o = 0, a = []; ++r < n;) {
            var i = e[r];
            t(i, r, e) && (a[o++] = i)
        }
        return a
    }
}, function(e, t, r) {
    var n = r(12)(r(7), "DataView");
    e.exports = n
}, function(e, t, r) {
    var n = r(12)(r(7), "Promise");
    e.exports = n
}, function(e, t, r) {
    var n = r(12)(r(7), "Set");
    e.exports = n
}, function(e, t, r) {
    var n = r(12)(r(7), "WeakMap");
    e.exports = n
}, function(e, t, r) {
    var n = r(63),
        o = r(15);
    e.exports = function(e) {
        for (var t = o(e), r = t.length; r--;) {
            var a = t[r],
                i = e[a];
            t[r] = [a, i, n(i)]
        }
        return t
    }
}, function(e, t, r) {
    var n = r(56),
        o = r(143),
        a = r(149),
        i = r(43),
        l = r(63),
        u = r(64),
        c = r(27),
        s = 1,
        f = 2;
    e.exports = function(e, t) {
        return i(e) && l(t) ? u(c(e), t) : function(r) {
            var i = o(r, e);
            return void 0 === i && i === t ? a(r, e) : n(t, i, s | f)
        }
    }
}, function(e, t, r) {
    var n = r(65);
    e.exports = function(e, t, r) {
        var o = null == e ? void 0 : n(e, t);
        return void 0 === o ? r : o
    }
}, function(e, t, r) {
    var n = r(145),
        o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g,
        i = n((function(e) {
            var t = [];
            return 46 === e.charCodeAt(0) && t.push(""), e.replace(o, (function(e, r, n, o) {
                t.push(n ? o.replace(a, "$1") : r || e)
            })), t
        }));
    e.exports = i
}, function(e, t, r) {
    var n = r(146),
        o = 500;
    e.exports = function(e) {
        var t = n(e, (function(e) {
                return r.size === o && r.clear(), e
            })),
            r = t.cache;
        return t
    }
}, function(e, t, r) {
    var n = r(41),
        o = "Expected a function";

    function a(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(o);
        var r = function() {
            var n = arguments,
                o = t ? t.apply(this, n) : n[0],
                a = r.cache;
            if (a.has(o)) return a.get(o);
            var i = e.apply(this, n);
            return r.cache = a.set(o, i) || a, i
        };
        return r.cache = new(a.Cache || n), r
    }
    a.Cache = n, e.exports = a
}, function(e, t, r) {
    var n = r(148);
    e.exports = function(e) {
        return null == e ? "" : n(e)
    }
}, function(e, t, r) {
    var n = r(14),
        o = r(54),
        a = r(3),
        i = r(26),
        l = 1 / 0,
        u = n ? n.prototype : void 0,
        c = u ? u.toString : void 0;
    e.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (a(t)) return o(t, e) + "";
        if (i(t)) return c ? c.call(t) : "";
        var r = t + "";
        return "0" == r && 1 / t == -l ? "-0" : r
    }
}, function(e, t, r) {
    var n = r(150),
        o = r(151);
    e.exports = function(e, t) {
        return null != e && o(e, t, n)
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return null != e && t in Object(e)
    }
}, function(e, t, r) {
    var n = r(66),
        o = r(30),
        a = r(3),
        i = r(32),
        l = r(34),
        u = r(27);
    e.exports = function(e, t, r) {
        for (var c = -1, s = (t = n(t, e)).length, f = !1; ++c < s;) {
            var d = u(t[c]);
            if (!(f = null != e && r(e, d))) break;
            e = e[d]
        }
        return f || ++c != s ? f : !!(s = null == e ? 0 : e.length) && l(s) && i(d, s) && (a(e) || o(e))
    }
}, function(e, t, r) {
    var n = r(153),
        o = r(154),
        a = r(43),
        i = r(27);
    e.exports = function(e) {
        return a(e) ? n(i(e)) : o(e)
    }
}, function(e, t) {
    e.exports = function(e) {
        return function(t) {
            return null == t ? void 0 : t[e]
        }
    }
}, function(e, t, r) {
    var n = r(65);
    e.exports = function(e) {
        return function(t) {
            return n(t, e)
        }
    }
}, function(e, t, r) {
    var n = r(67),
        o = r(13);
    e.exports = function(e, t) {
        var r = -1,
            a = o(e) ? Array(e.length) : [];
        return n(e, (function(e, n, o) {
            a[++r] = t(e, n, o)
        })), a
    }
}, function(e, t, r) {
    var n = r(13);
    e.exports = function(e, t) {
        return function(r, o) {
            if (null == r) return r;
            if (!n(r)) return e(r, o);
            for (var a = r.length, i = t ? a : -1, l = Object(r);
                (t ? i-- : ++i < a) && !1 !== o(l[i], i, l););
            return r
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.mergeClasses = void 0;
    var n = i(r(29)),
        o = i(r(158)),
        a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = t.mergeClasses = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            r = e.default && (0, o.default)(e.default) || {};
        return t.map((function(t) {
            var o = e[t];
            return o && (0, n.default)(o, (function(e, t) {
                r[t] || (r[t] = {}), r[t] = a({}, r[t], o[t])
            })), t
        })), r
    };
    t.default = l
}, function(e, t, r) {
    var n = r(159),
        o = 1,
        a = 4;
    e.exports = function(e) {
        return n(e, o | a)
    }
}, function(e, t, r) {
    var n = r(20),
        o = r(68),
        a = r(69),
        i = r(160),
        l = r(161),
        u = r(71),
        c = r(72),
        s = r(164),
        f = r(165),
        d = r(59),
        p = r(166),
        h = r(25),
        b = r(167),
        v = r(168),
        g = r(75),
        y = r(3),
        x = r(18),
        m = r(173),
        w = r(6),
        _ = r(175),
        E = r(15),
        C = 1,
        O = 2,
        S = 4,
        j = "[object Arguments]",
        k = "[object Function]",
        P = "[object GeneratorFunction]",
        M = "[object Object]",
        R = {};
    R[j] = R["[object Array]"] = R["[object ArrayBuffer]"] = R["[object DataView]"] = R["[object Boolean]"] = R["[object Date]"] = R["[object Float32Array]"] = R["[object Float64Array]"] = R["[object Int8Array]"] = R["[object Int16Array]"] = R["[object Int32Array]"] = R["[object Map]"] = R["[object Number]"] = R[M] = R["[object RegExp]"] = R["[object Set]"] = R["[object String]"] = R["[object Symbol]"] = R["[object Uint8Array]"] = R["[object Uint8ClampedArray]"] = R["[object Uint16Array]"] = R["[object Uint32Array]"] = !0, R["[object Error]"] = R[k] = R["[object WeakMap]"] = !1, e.exports = function e(t, r, A, F, B, H) {
        var T, z = r & C,
            D = r & O,
            L = r & S;
        if (A && (T = B ? A(t, F, B, H) : A(t)), void 0 !== T) return T;
        if (!w(t)) return t;
        var I = y(t);
        if (I) {
            if (T = b(t), !z) return c(t, T)
        } else {
            var N = h(t),
                G = N == k || N == P;
            if (x(t)) return u(t, z);
            if (N == M || N == j || G && !B) {
                if (T = D || G ? {} : g(t), !z) return D ? f(t, l(T, t)) : s(t, i(T, t))
            } else {
                if (!R[N]) return B ? t : {};
                T = v(t, N, z)
            }
        }
        H || (H = new n);
        var W = H.get(t);
        if (W) return W;
        H.set(t, T), _(t) ? t.forEach((function(n) {
            T.add(e(n, r, A, n, t, H))
        })) : m(t) && t.forEach((function(n, o) {
            T.set(o, e(n, r, A, o, t, H))
        }));
        var U = L ? D ? p : d : D ? keysIn : E,
            V = I ? void 0 : U(t);
        return o(V || t, (function(n, o) {
            V && (n = t[o = n]), a(T, o, e(n, r, A, o, t, H))
        })), T
    }
}, function(e, t, r) {
    var n = r(17),
        o = r(15);
    e.exports = function(e, t) {
        return e && n(t, o(t), e)
    }
}, function(e, t, r) {
    var n = r(17),
        o = r(28);
    e.exports = function(e, t) {
        return e && n(t, o(t), e)
    }
}, function(e, t, r) {
    var n = r(6),
        o = r(37),
        a = r(163),
        i = Object.prototype.hasOwnProperty;
    e.exports = function(e) {
        if (!n(e)) return a(e);
        var t = o(e),
            r = [];
        for (var l in e)("constructor" != l || !t && i.call(e, l)) && r.push(l);
        return r
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = [];
        if (null != e)
            for (var r in Object(e)) t.push(r);
        return t
    }
}, function(e, t, r) {
    var n = r(17),
        o = r(42);
    e.exports = function(e, t) {
        return n(e, o(e), t)
    }
}, function(e, t, r) {
    var n = r(17),
        o = r(73);
    e.exports = function(e, t) {
        return n(e, o(e), t)
    }
}, function(e, t, r) {
    var n = r(60),
        o = r(73),
        a = r(28);
    e.exports = function(e) {
        return n(e, a, o)
    }
}, function(e, t) {
    var r = Object.prototype.hasOwnProperty;
    e.exports = function(e) {
        var t = e.length,
            n = new e.constructor(t);
        return t && "string" == typeof e[0] && r.call(e, "index") && (n.index = e.index, n.input = e.input), n
    }
}, function(e, t, r) {
    var n = r(45),
        o = r(169),
        a = r(170),
        i = r(171),
        l = r(74),
        u = "[object Boolean]",
        c = "[object Date]",
        s = "[object Map]",
        f = "[object Number]",
        d = "[object RegExp]",
        p = "[object Set]",
        h = "[object String]",
        b = "[object Symbol]",
        v = "[object ArrayBuffer]",
        g = "[object DataView]",
        y = "[object Float32Array]",
        x = "[object Float64Array]",
        m = "[object Int8Array]",
        w = "[object Int16Array]",
        _ = "[object Int32Array]",
        E = "[object Uint8Array]",
        C = "[object Uint8ClampedArray]",
        O = "[object Uint16Array]",
        S = "[object Uint32Array]";
    e.exports = function(e, t, r) {
        var j = e.constructor;
        switch (t) {
            case v:
                return n(e);
            case u:
            case c:
                return new j(+e);
            case g:
                return o(e, r);
            case y:
            case x:
            case m:
            case w:
            case _:
            case E:
            case C:
            case O:
            case S:
                return l(e, r);
            case s:
                return new j;
            case f:
            case h:
                return new j(e);
            case d:
                return a(e);
            case p:
                return new j;
            case b:
                return i(e)
        }
    }
}, function(e, t, r) {
    var n = r(45);
    e.exports = function(e, t) {
        var r = t ? n(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength)
    }
}, function(e, t) {
    var r = /\w*$/;
    e.exports = function(e) {
        var t = new e.constructor(e.source, r.exec(e));
        return t.lastIndex = e.lastIndex, t
    }
}, function(e, t, r) {
    var n = r(14),
        o = n ? n.prototype : void 0,
        a = o ? o.valueOf : void 0;
    e.exports = function(e) {
        return a ? Object(a.call(e)) : {}
    }
}, function(e, t, r) {
    var n = r(6),
        o = Object.create,
        a = function() {
            function e() {}
            return function(t) {
                if (!n(t)) return {};
                if (o) return o(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0, r
            }
        }();
    e.exports = a
}, function(e, t, r) {
    var n = r(174),
        o = r(35),
        a = r(36),
        i = a && a.isMap,
        l = i ? o(i) : n;
    e.exports = l
}, function(e, t, r) {
    var n = r(25),
        o = r(9),
        a = "[object Map]";
    e.exports = function(e) {
        return o(e) && n(e) == a
    }
}, function(e, t, r) {
    var n = r(176),
        o = r(35),
        a = r(36),
        i = a && a.isSet,
        l = i ? o(i) : n;
    e.exports = l
}, function(e, t, r) {
    var n = r(25),
        o = r(9),
        a = "[object Set]";
    e.exports = function(e) {
        return o(e) && n(e) == a
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.autoprefix = void 0;
    var n, o = r(29),
        a = (n = o) && n.__esModule ? n : {
            default: n
        },
        i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
    var l = {
            borderRadius: function(e) {
                return {
                    msBorderRadius: e,
                    MozBorderRadius: e,
                    OBorderRadius: e,
                    WebkitBorderRadius: e,
                    borderRadius: e
                }
            },
            boxShadow: function(e) {
                return {
                    msBoxShadow: e,
                    MozBoxShadow: e,
                    OBoxShadow: e,
                    WebkitBoxShadow: e,
                    boxShadow: e
                }
            },
            userSelect: function(e) {
                return {
                    WebkitTouchCallout: e,
                    KhtmlUserSelect: e,
                    MozUserSelect: e,
                    msUserSelect: e,
                    WebkitUserSelect: e,
                    userSelect: e
                }
            },
            flex: function(e) {
                return {
                    WebkitBoxFlex: e,
                    MozBoxFlex: e,
                    WebkitFlex: e,
                    msFlex: e,
                    flex: e
                }
            },
            flexBasis: function(e) {
                return {
                    WebkitFlexBasis: e,
                    flexBasis: e
                }
            },
            justifyContent: function(e) {
                return {
                    WebkitJustifyContent: e,
                    justifyContent: e
                }
            },
            transition: function(e) {
                return {
                    msTransition: e,
                    MozTransition: e,
                    OTransition: e,
                    WebkitTransition: e,
                    transition: e
                }
            },
            transform: function(e) {
                return {
                    msTransform: e,
                    MozTransform: e,
                    OTransform: e,
                    WebkitTransform: e,
                    transform: e
                }
            },
            absolute: function(e) {
                var t = e && e.split(" ");
                return {
                    position: "absolute",
                    top: t && t[0],
                    right: t && t[1],
                    bottom: t && t[2],
                    left: t && t[3]
                }
            },
            extend: function(e, t) {
                var r = t[e];
                return r || {
                    extend: e
                }
            }
        },
        u = t.autoprefix = function(e) {
            var t = {};
            return (0, a.default)(e, (function(e, r) {
                var n = {};
                (0, a.default)(e, (function(e, t) {
                    var r = l[t];
                    r ? n = i({}, n, r(e)) : n[t] = e
                })), t[r] = n
            })), t
        };
    t.default = u
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.hover = void 0;
    var n, o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        a = r(0),
        i = (n = a) && n.__esModule ? n : {
            default: n
        };

    function l(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function c(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var s = t.hover = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
        return function(r) {
            function n() {
                var r, a, c;
                l(this, n);
                for (var s = arguments.length, f = Array(s), d = 0; d < s; d++) f[d] = arguments[d];
                return a = c = u(this, (r = n.__proto__ || Object.getPrototypeOf(n)).call.apply(r, [this].concat(f))), c.state = {
                    hover: !1
                }, c.handleMouseOver = function() {
                    return c.setState({
                        hover: !0
                    })
                }, c.handleMouseOut = function() {
                    return c.setState({
                        hover: !1
                    })
                }, c.render = function() {
                    return i.default.createElement(t, {
                        onMouseOver: c.handleMouseOver,
                        onMouseOut: c.handleMouseOut
                    }, i.default.createElement(e, o({}, c.props, c.state)))
                }, u(c, a)
            }
            return c(n, r), n
        }(i.default.Component)
    };
    t.default = s
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.active = void 0;
    var n, o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        a = r(0),
        i = (n = a) && n.__esModule ? n : {
            default: n
        };

    function l(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function c(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var s = t.active = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
        return function(r) {
            function n() {
                var r, a, c;
                l(this, n);
                for (var s = arguments.length, f = Array(s), d = 0; d < s; d++) f[d] = arguments[d];
                return a = c = u(this, (r = n.__proto__ || Object.getPrototypeOf(n)).call.apply(r, [this].concat(f))), c.state = {
                    active: !1
                }, c.handleMouseDown = function() {
                    return c.setState({
                        active: !0
                    })
                }, c.handleMouseUp = function() {
                    return c.setState({
                        active: !1
                    })
                }, c.render = function() {
                    return i.default.createElement(t, {
                        onMouseDown: c.handleMouseDown,
                        onMouseUp: c.handleMouseUp
                    }, i.default.createElement(e, o({}, c.props, c.state)))
                }, u(c, a)
            }
            return c(n, r), n
        }(i.default.Component)
    };
    t.default = s
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = function(e, t) {
        var r = {},
            n = function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                r[e] = t
            };
        return 0 === e && n("first-child"), e === t - 1 && n("last-child"), (0 === e || e % 2 == 0) && n("even"), 1 === Math.abs(e % 2) && n("odd"), n("nth-child", e), r
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Alpha = void 0;
    var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        o = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }(),
        a = r(0),
        i = s(a),
        l = s(r(1)),
        u = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }(r(182)),
        c = s(r(46));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function f(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var d = t.Alpha = function(e) {
        function t() {
            var e, r, n;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
            return r = n = f(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), n.handleChange = function(e) {
                var t = u.calculateChange(e, n.props.hsl, n.props.direction, n.props.a, n.container);
                t && "function" == typeof n.props.onChange && n.props.onChange(t, e)
            }, n.handleMouseDown = function(e) {
                n.handleChange(e), window.addEventListener("mousemove", n.handleChange), window.addEventListener("mouseup", n.handleMouseUp)
            }, n.handleMouseUp = function() {
                n.unbindEventListeners()
            }, n.unbindEventListeners = function() {
                window.removeEventListener("mousemove", n.handleChange), window.removeEventListener("mouseup", n.handleMouseUp)
            }, f(n, r)
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), o(t, [{
            key: "componentWillUnmount",
            value: function() {
                this.unbindEventListeners()
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = this.props.rgb,
                    r = (0, l.default)({
                        default: {
                            alpha: {
                                absolute: "0px 0px 0px 0px",
                                borderRadius: this.props.radius
                            },
                            checkboard: {
                                absolute: "0px 0px 0px 0px",
                                overflow: "hidden",
                                borderRadius: this.props.radius
                            },
                            gradient: {
                                absolute: "0px 0px 0px 0px",
                                background: "linear-gradient(to right, rgba(" + t.r + "," + t.g + "," + t.b + ", 0) 0%,\n           rgba(" + t.r + "," + t.g + "," + t.b + ", 1) 100%)",
                                boxShadow: this.props.shadow,
                                borderRadius: this.props.radius
                            },
                            container: {
                                position: "relative",
                                height: "100%",
                                margin: "0 3px"
                            },
                            pointer: {
                                position: "absolute",
                                left: 100 * t.a + "%"
                            },
                            slider: {
                                width: "4px",
                                borderRadius: "1px",
                                height: "8px",
                                boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                                background: "#fff",
                                marginTop: "1px",
                                transform: "translateX(-2px)"
                            }
                        },
                        vertical: {
                            gradient: {
                                background: "linear-gradient(to bottom, rgba(" + t.r + "," + t.g + "," + t.b + ", 0) 0%,\n           rgba(" + t.r + "," + t.g + "," + t.b + ", 1) 100%)"
                            },
                            pointer: {
                                left: 0,
                                top: 100 * t.a + "%"
                            }
                        },
                        overwrite: n({}, this.props.style)
                    }, {
                        vertical: "vertical" === this.props.direction,
                        overwrite: !0
                    });
                return i.default.createElement("div", {
                    style: r.alpha
                }, i.default.createElement("div", {
                    style: r.checkboard
                }, i.default.createElement(c.default, {
                    renderers: this.props.renderers
                })), i.default.createElement("div", {
                    style: r.gradient
                }), i.default.createElement("div", {
                    style: r.container,
                    ref: function(t) {
                        return e.container = t
                    },
                    onMouseDown: this.handleMouseDown,
                    onTouchMove: this.handleChange,
                    onTouchStart: this.handleChange
                }, i.default.createElement("div", {
                    style: r.pointer
                }, this.props.pointer ? i.default.createElement(this.props.pointer, this.props) : i.default.createElement("div", {
                    style: r.slider
                }))))
            }
        }]), t
    }(a.PureComponent || a.Component);
    t.default = d
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.calculateChange = function(e, t, r, n, o) {
        var a = o.clientWidth,
            i = o.clientHeight,
            l = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            u = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            c = l - (o.getBoundingClientRect().left + window.pageXOffset),
            s = u - (o.getBoundingClientRect().top + window.pageYOffset);
        if ("vertical" === r) {
            var f = void 0;
            if (f = s < 0 ? 0 : s > i ? 1 : Math.round(100 * s / i) / 100, t.a !== f) return {
                h: t.h,
                s: t.s,
                l: t.l,
                a: f,
                source: "rgb"
            }
        } else {
            var d = void 0;
            if (n !== (d = c < 0 ? 0 : c > a ? 1 : Math.round(100 * c / a) / 100)) return {
                h: t.h,
                s: t.s,
                l: t.l,
                a: d,
                source: "rgb"
            }
        }
        return null
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {},
        o = t.render = function(e, t, r, n) {
            if ("undefined" == typeof document && !n) return null;
            var o = n ? new n : document.createElement("canvas");
            o.width = 2 * r, o.height = 2 * r;
            var a = o.getContext("2d");
            return a ? (a.fillStyle = e, a.fillRect(0, 0, o.width, o.height), a.fillStyle = t, a.fillRect(0, 0, r, r), a.translate(r, r), a.fillRect(0, 0, r, r), o.toDataURL()) : null
        };
    t.get = function(e, t, r, a) {
        var i = e + "-" + t + "-" + r + (a ? "-server" : "");
        if (n[i]) return n[i];
        var l = o(e, t, r, a);
        return n[i] = l, l
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.EditableInput = void 0;
    var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }(),
        o = r(0),
        a = l(o),
        i = l(r(1));

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = 38,
        c = [u, 40],
        s = function(e) {
            return c.indexOf(e) > -1
        },
        f = function(e) {
            return Number(String(e).replace(/%/g, ""))
        },
        d = t.EditableInput = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return r.handleBlur = function() {
                    r.state.blurValue && r.setState({
                        value: r.state.blurValue,
                        blurValue: null
                    })
                }, r.handleChange = function(e) {
                    r.setUpdatedValue(e.target.value, e)
                }, r.handleKeyDown = function(e) {
                    var t = f(e.target.value);
                    if (!isNaN(t) && s(e.keyCode)) {
                        var n = r.getArrowOffset(),
                            o = e.keyCode === u ? t + n : t - n;
                        r.setUpdatedValue(o, e)
                    }
                }, r.handleDrag = function(e) {
                    if (r.props.dragLabel) {
                        var t = Math.round(r.props.value + e.movementX);
                        t >= 0 && t <= r.props.dragMax && r.props.onChange && r.props.onChange(r.getValueObjectWithLabel(t), e)
                    }
                }, r.handleMouseDown = function(e) {
                    r.props.dragLabel && (e.preventDefault(), r.handleDrag(e), window.addEventListener("mousemove", r.handleDrag), window.addEventListener("mouseup", r.handleMouseUp))
                }, r.handleMouseUp = function() {
                    r.unbindEventListeners()
                }, r.unbindEventListeners = function() {
                    window.removeEventListener("mousemove", r.handleDrag), window.removeEventListener("mouseup", r.handleMouseUp)
                }, r.state = {
                    value: String(e.value).toUpperCase(),
                    blurValue: String(e.value).toUpperCase()
                }, r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), n(t, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = this.input;
                    e.value !== this.state.value && (t === document.activeElement ? this.setState({
                        blurValue: String(e.value).toUpperCase()
                    }) : this.setState({
                        value: String(e.value).toUpperCase(),
                        blurValue: !this.state.blurValue && String(e.value).toUpperCase()
                    }))
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.unbindEventListeners()
                }
            }, {
                key: "getValueObjectWithLabel",
                value: function(e) {
                    return function(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }({}, this.props.label, e)
                }
            }, {
                key: "getArrowOffset",
                value: function() {
                    return this.props.arrowOffset || 1
                }
            }, {
                key: "setUpdatedValue",
                value: function(e, t) {
                    var r = null !== this.props.label ? this.getValueObjectWithLabel(e) : e;
                    this.props.onChange && this.props.onChange(r, t);
                    var n, o = function(e) {
                        return String(e).indexOf("%") > -1
                    }(t.target.value);
                    this.setState({
                        value: o ? (n = e, n + "%") : e
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = (0, i.default)({
                            default: {
                                wrap: {
                                    position: "relative"
                                }
                            },
                            "user-override": {
                                wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
                                input: this.props.style && this.props.style.input ? this.props.style.input : {},
                                label: this.props.style && this.props.style.label ? this.props.style.label : {}
                            },
                            "dragLabel-true": {
                                label: {
                                    cursor: "ew-resize"
                                }
                            }
                        }, {
                            "user-override": !0
                        }, this.props);
                    return a.default.createElement("div", {
                        style: t.wrap
                    }, a.default.createElement("input", {
                        style: t.input,
                        ref: function(t) {
                            return e.input = t
                        },
                        value: this.state.value,
                        onKeyDown: this.handleKeyDown,
                        onChange: this.handleChange,
                        onBlur: this.handleBlur,
                        placeholder: this.props.placeholder,
                        spellCheck: "false"
                    }), this.props.label && !this.props.hideLabel ? a.default.createElement("span", {
                        style: t.label,
                        onMouseDown: this.handleMouseDown
                    }, this.props.label) : null)
                }
            }]), t
        }(o.PureComponent || o.Component);
    t.default = d
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Hue = void 0;
    var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }(),
        o = r(0),
        a = u(o),
        i = u(r(1)),
        l = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }(r(186));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function c(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var s = t.Hue = function(e) {
        function t() {
            var e, r, n;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
            return r = n = c(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), n.handleChange = function(e) {
                var t = l.calculateChange(e, n.props.direction, n.props.hsl, n.container);
                t && "function" == typeof n.props.onChange && n.props.onChange(t, e)
            }, n.handleMouseDown = function(e) {
                n.handleChange(e), window.addEventListener("mousemove", n.handleChange), window.addEventListener("mouseup", n.handleMouseUp)
            }, n.handleMouseUp = function() {
                n.unbindEventListeners()
            }, c(n, r)
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), n(t, [{
            key: "componentWillUnmount",
            value: function() {
                this.unbindEventListeners()
            }
        }, {
            key: "unbindEventListeners",
            value: function() {
                window.removeEventListener("mousemove", this.handleChange), window.removeEventListener("mouseup", this.handleMouseUp)
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = this.props.direction,
                    r = void 0 === t ? "horizontal" : t,
                    n = (0, i.default)({
                        default: {
                            hue: {
                                absolute: "0px 0px 0px 0px",
                                borderRadius: this.props.radius,
                                boxShadow: this.props.shadow
                            },
                            container: {
                                padding: "0 2px",
                                position: "relative",
                                height: "100%",
                                borderRadius: this.props.radius
                            },
                            pointer: {
                                position: "absolute",
                                left: 100 * this.props.hsl.h / 360 + "%"
                            },
                            slider: {
                                marginTop: "1px",
                                width: "4px",
                                borderRadius: "1px",
                                height: "8px",
                                boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                                background: "#fff",
                                transform: "translateX(-2px)"
                            }
                        },
                        vertical: {
                            pointer: {
                                left: "0px",
                                top: -100 * this.props.hsl.h / 360 + 100 + "%"
                            }
                        }
                    }, {
                        vertical: "vertical" === r
                    });
                return a.default.createElement("div", {
                    style: n.hue
                }, a.default.createElement("div", {
                    className: "hue-" + r,
                    style: n.container,
                    ref: function(t) {
                        return e.container = t
                    },
                    onMouseDown: this.handleMouseDown,
                    onTouchMove: this.handleChange,
                    onTouchStart: this.handleChange
                }, a.default.createElement("style", null, "\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          "), a.default.createElement("div", {
                    style: n.pointer
                }, this.props.pointer ? a.default.createElement(this.props.pointer, this.props) : a.default.createElement("div", {
                    style: n.slider
                }))))
            }
        }]), t
    }(o.PureComponent || o.Component);
    t.default = s
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.calculateChange = function(e, t, r, n) {
        var o = n.clientWidth,
            a = n.clientHeight,
            i = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            l = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            u = i - (n.getBoundingClientRect().left + window.pageXOffset),
            c = l - (n.getBoundingClientRect().top + window.pageYOffset);
        if ("vertical" === t) {
            var s = void 0;
            if (c < 0) s = 359;
            else if (c > a) s = 0;
            else {
                s = 360 * (-100 * c / a + 100) / 100
            }
            if (r.h !== s) return {
                h: s,
                s: r.s,
                l: r.l,
                a: r.a,
                source: "rgb"
            }
        } else {
            var f = void 0;
            if (u < 0) f = 0;
            else if (u > o) f = 359;
            else {
                f = 360 * (100 * u / o) / 100
            }
            if (r.h !== f) return {
                h: f,
                s: r.s,
                l: r.l,
                a: r.a,
                source: "rgb"
            }
        }
        return null
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Raised = void 0;
    var n = l(r(0)),
        o = l(r(4)),
        a = l(r(1)),
        i = l(r(5));

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = t.Raised = function(e) {
        var t = e.zDepth,
            r = e.radius,
            o = e.background,
            l = e.children,
            u = e.styles,
            c = void 0 === u ? {} : u,
            s = (0, a.default)((0, i.default)({
                default: {
                    wrap: {
                        position: "relative",
                        display: "inline-block"
                    },
                    content: {
                        position: "relative"
                    },
                    bg: {
                        absolute: "0px 0px 0px 0px",
                        boxShadow: "0 " + t + "px " + 4 * t + "px rgba(0,0,0,.24)",
                        borderRadius: r,
                        background: o
                    }
                },
                "zDepth-0": {
                    bg: {
                        boxShadow: "none"
                    }
                },
                "zDepth-1": {
                    bg: {
                        boxShadow: "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)"
                    }
                },
                "zDepth-2": {
                    bg: {
                        boxShadow: "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)"
                    }
                },
                "zDepth-3": {
                    bg: {
                        boxShadow: "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)"
                    }
                },
                "zDepth-4": {
                    bg: {
                        boxShadow: "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)"
                    }
                },
                "zDepth-5": {
                    bg: {
                        boxShadow: "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)"
                    }
                },
                square: {
                    bg: {
                        borderRadius: "0"
                    }
                },
                circle: {
                    bg: {
                        borderRadius: "50%"
                    }
                }
            }, c), {
                "zDepth-1": 1 === t
            });
        return n.default.createElement("div", {
            style: s.wrap
        }, n.default.createElement("div", {
            style: s.bg
        }), n.default.createElement("div", {
            style: s.content
        }, l))
    };
    u.propTypes = {
        background: o.default.string,
        zDepth: o.default.oneOf([0, 1, 2, 3, 4, 5]),
        radius: o.default.number,
        styles: o.default.object
    }, u.defaultProps = {
        background: "#fff",
        zDepth: 1,
        radius: 2,
        styles: {}
    }, t.default = u
}, function(e, t, r) {
    "use strict";
    var n = r(189);

    function o() {}

    function a() {}
    a.resetWarningCache = o, e.exports = function() {
        function e(e, t, r, o, a, i) {
            if (i !== n) {
                var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw l.name = "Invariant Violation", l
            }
        }

        function t() {
            return e
        }
        e.isRequired = e;
        var r = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: o
        };
        return r.PropTypes = r, r
    }
}, function(e, t, r) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(e, t, r) {
    var n = r(20),
        o = r(76),
        a = r(49),
        i = r(191),
        l = r(6),
        u = r(28),
        c = r(77);
    e.exports = function e(t, r, s, f, d) {
        t !== r && a(r, (function(a, u) {
            if (d || (d = new n), l(a)) i(t, r, u, s, e, f, d);
            else {
                var p = f ? f(c(t, u), a, u + "", t, r, d) : void 0;
                void 0 === p && (p = a), o(t, u, p)
            }
        }), u)
    }
}, function(e, t, r) {
    var n = r(76),
        o = r(71),
        a = r(74),
        i = r(72),
        l = r(75),
        u = r(30),
        c = r(3),
        s = r(192),
        f = r(18),
        d = r(38),
        p = r(6),
        h = r(53),
        b = r(33),
        v = r(77),
        g = r(193);
    e.exports = function(e, t, r, y, x, m, w) {
        var _ = v(e, r),
            E = v(t, r),
            C = w.get(E);
        if (C) n(e, r, C);
        else {
            var O = m ? m(_, E, r + "", e, t, w) : void 0,
                S = void 0 === O;
            if (S) {
                var j = c(E),
                    k = !j && f(E),
                    P = !j && !k && b(E);
                O = E, j || k || P ? c(_) ? O = _ : s(_) ? O = i(_) : k ? (S = !1, O = o(E, !0)) : P ? (S = !1, O = a(E, !0)) : O = [] : h(E) || u(E) ? (O = _, u(_) ? O = g(_) : p(_) && !d(_) || (O = l(E))) : S = !1
            }
            S && (w.set(E, O), x(O, E, y, m, w), w.delete(E)), n(e, r, O)
        }
    }
}, function(e, t, r) {
    var n = r(13),
        o = r(9);
    e.exports = function(e) {
        return o(e) && n(e)
    }
}, function(e, t, r) {
    var n = r(17),
        o = r(28);
    e.exports = function(e) {
        return n(e, o(e))
    }
}, function(e, t, r) {
    var n = r(195),
        o = r(202);
    e.exports = function(e) {
        return n((function(t, r) {
            var n = -1,
                a = r.length,
                i = a > 1 ? r[a - 1] : void 0,
                l = a > 2 ? r[2] : void 0;
            for (i = e.length > 3 && "function" == typeof i ? (a--, i) : void 0, l && o(r[0], r[1], l) && (i = a < 3 ? void 0 : i, a = 1), t = Object(t); ++n < a;) {
                var u = r[n];
                u && e(t, u, n, i)
            }
            return t
        }))
    }
}, function(e, t, r) {
    var n = r(19),
        o = r(196),
        a = r(198);
    e.exports = function(e, t) {
        return a(o(e, t, n), e + "")
    }
}, function(e, t, r) {
    var n = r(197),
        o = Math.max;
    e.exports = function(e, t, r) {
        return t = o(void 0 === t ? e.length - 1 : t, 0),
            function() {
                for (var a = arguments, i = -1, l = o(a.length - t, 0), u = Array(l); ++i < l;) u[i] = a[t + i];
                i = -1;
                for (var c = Array(t + 1); ++i < t;) c[i] = a[i];
                return c[t] = r(u), n(e, this, c)
            }
    }
}, function(e, t) {
    e.exports = function(e, t, r) {
        switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
        }
        return e.apply(t, r)
    }
}, function(e, t, r) {
    var n = r(199),
        o = r(201)(n);
    e.exports = o
}, function(e, t, r) {
    var n = r(200),
        o = r(70),
        a = r(19),
        i = o ? function(e, t) {
            return o(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: n(t),
                writable: !0
            })
        } : a;
    e.exports = i
}, function(e, t) {
    e.exports = function(e) {
        return function() {
            return e
        }
    }
}, function(e, t) {
    var r = 800,
        n = 16,
        o = Date.now;
    e.exports = function(e) {
        var t = 0,
            a = 0;
        return function() {
            var i = o(),
                l = n - (i - a);
            if (a = i, l > 0) {
                if (++t >= r) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
}, function(e, t, r) {
    var n = r(16),
        o = r(13),
        a = r(32),
        i = r(6);
    e.exports = function(e, t, r) {
        if (!i(r)) return !1;
        var l = typeof t;
        return !!("number" == l ? o(r) && a(t, r.length) : "string" == l && t in r) && n(r[t], e)
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Saturation = void 0;
    var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }(),
        o = r(0),
        a = c(o),
        i = c(r(1)),
        l = c(r(204)),
        u = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }(r(207));

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var s = t.Saturation = function(e) {
        function t(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var r = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return r.handleChange = function(e) {
                "function" == typeof r.props.onChange && r.throttle(r.props.onChange, u.calculateChange(e, r.props.hsl, r.container), e)
            }, r.handleMouseDown = function(e) {
                r.handleChange(e), window.addEventListener("mousemove", r.handleChange), window.addEventListener("mouseup", r.handleMouseUp)
            }, r.handleMouseUp = function() {
                r.unbindEventListeners()
            }, r.throttle = (0, l.default)((function(e, t, r) {
                e(t, r)
            }), 50), r
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), n(t, [{
            key: "componentWillUnmount",
            value: function() {
                this.throttle.cancel(), this.unbindEventListeners()
            }
        }, {
            key: "unbindEventListeners",
            value: function() {
                window.removeEventListener("mousemove", this.handleChange), window.removeEventListener("mouseup", this.handleMouseUp)
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = this.props.style || {},
                    r = t.color,
                    n = t.white,
                    o = t.black,
                    l = t.pointer,
                    u = t.circle,
                    c = (0, i.default)({
                        default: {
                            color: {
                                absolute: "0px 0px 0px 0px",
                                background: "hsl(" + this.props.hsl.h + ",100%, 50%)",
                                borderRadius: this.props.radius
                            },
                            white: {
                                absolute: "0px 0px 0px 0px",
                                borderRadius: this.props.radius
                            },
                            black: {
                                absolute: "0px 0px 0px 0px",
                                boxShadow: this.props.shadow,
                                borderRadius: this.props.radius
                            },
                            pointer: {
                                position: "absolute",
                                top: -100 * this.props.hsv.v + 100 + "%",
                                left: 100 * this.props.hsv.s + "%",
                                cursor: "default"
                            },
                            circle: {
                                width: "4px",
                                height: "4px",
                                boxShadow: "0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)",
                                borderRadius: "50%",
                                cursor: "hand",
                                transform: "translate(-2px, -2px)"
                            }
                        },
                        custom: {
                            color: r,
                            white: n,
                            black: o,
                            pointer: l,
                            circle: u
                        }
                    }, {
                        custom: !!this.props.style
                    });
                return a.default.createElement("div", {
                    style: c.color,
                    ref: function(t) {
                        return e.container = t
                    },
                    onMouseDown: this.handleMouseDown,
                    onTouchMove: this.handleChange,
                    onTouchStart: this.handleChange
                }, a.default.createElement("style", null, "\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        "), a.default.createElement("div", {
                    style: c.white,
                    className: "saturation-white"
                }, a.default.createElement("div", {
                    style: c.black,
                    className: "saturation-black"
                }), a.default.createElement("div", {
                    style: c.pointer
                }, this.props.pointer ? a.default.createElement(this.props.pointer, this.props) : a.default.createElement("div", {
                    style: c.circle
                }))))
            }
        }]), t
    }(o.PureComponent || o.Component);
    t.default = s
}, function(e, t, r) {
    var n = r(78),
        o = r(6),
        a = "Expected a function";
    e.exports = function(e, t, r) {
        var i = !0,
            l = !0;
        if ("function" != typeof e) throw new TypeError(a);
        return o(r) && (i = "leading" in r ? !!r.leading : i, l = "trailing" in r ? !!r.trailing : l), n(e, t, {
            leading: i,
            maxWait: t,
            trailing: l
        })
    }
}, function(e, t, r) {
    var n = r(7);
    e.exports = function() {
        return n.Date.now()
    }
}, function(e, t, r) {
    var n = r(6),
        o = r(26),
        a = NaN,
        i = /^\s+|\s+$/g,
        l = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        s = parseInt;
    e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (o(e)) return a;
        if (n(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = n(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(i, "");
        var r = u.test(e);
        return r || c.test(e) ? s(e.slice(2), r ? 2 : 8) : l.test(e) ? a : +e
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.calculateChange = function(e, t, r) {
        var n = r.getBoundingClientRect(),
            o = n.width,
            a = n.height,
            i = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            l = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            u = i - (r.getBoundingClientRect().left + window.pageXOffset),
            c = l - (r.getBoundingClientRect().top + window.pageYOffset);
        u < 0 ? u = 0 : u > o ? u = o : c < 0 ? c = 0 : c > a && (c = a);
        var s = 100 * u / o,
            f = -100 * c / a + 100;
        return {
            h: t.h,
            s: s,
            v: f,
            a: t.a,
            source: "rgb"
        }
    }
}, function(e, t, r) {
    e.exports = r(209)
}, function(e, t, r) {
    var n = r(68),
        o = r(67),
        a = r(52),
        i = r(3);
    e.exports = function(e, t) {
        return (i(e) ? n : o)(e, a(t))
    }
}, function(e, t, r) {
    var n;
    ! function(o) {
        var a = /^\s+/,
            i = /\s+$/,
            l = 0,
            u = o.round,
            c = o.min,
            s = o.max,
            f = o.random;

        function d(e, t) {
            if (t = t || {}, (e = e || "") instanceof d) return e;
            if (!(this instanceof d)) return new d(e, t);
            var r = function(e) {
                var t = {
                        r: 0,
                        g: 0,
                        b: 0
                    },
                    r = 1,
                    n = null,
                    l = null,
                    u = null,
                    f = !1,
                    d = !1;
                "string" == typeof e && (e = function(e) {
                    e = e.replace(a, "").replace(i, "").toLowerCase();
                    var t, r = !1;
                    if (M[e]) e = M[e], r = !0;
                    else if ("transparent" == e) return {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0,
                        format: "name"
                    };
                    if (t = W.rgb.exec(e)) return {
                        r: t[1],
                        g: t[2],
                        b: t[3]
                    };
                    if (t = W.rgba.exec(e)) return {
                        r: t[1],
                        g: t[2],
                        b: t[3],
                        a: t[4]
                    };
                    if (t = W.hsl.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        l: t[3]
                    };
                    if (t = W.hsla.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        l: t[3],
                        a: t[4]
                    };
                    if (t = W.hsv.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        v: t[3]
                    };
                    if (t = W.hsva.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        v: t[3],
                        a: t[4]
                    };
                    if (t = W.hex8.exec(e)) return {
                        r: H(t[1]),
                        g: H(t[2]),
                        b: H(t[3]),
                        a: L(t[4]),
                        format: r ? "name" : "hex8"
                    };
                    if (t = W.hex6.exec(e)) return {
                        r: H(t[1]),
                        g: H(t[2]),
                        b: H(t[3]),
                        format: r ? "name" : "hex"
                    };
                    if (t = W.hex4.exec(e)) return {
                        r: H(t[1] + "" + t[1]),
                        g: H(t[2] + "" + t[2]),
                        b: H(t[3] + "" + t[3]),
                        a: L(t[4] + "" + t[4]),
                        format: r ? "name" : "hex8"
                    };
                    if (t = W.hex3.exec(e)) return {
                        r: H(t[1] + "" + t[1]),
                        g: H(t[2] + "" + t[2]),
                        b: H(t[3] + "" + t[3]),
                        format: r ? "name" : "hex"
                    };
                    return !1
                }(e));
                "object" == typeof e && (U(e.r) && U(e.g) && U(e.b) ? (p = e.r, h = e.g, b = e.b, t = {
                    r: 255 * F(p, 255),
                    g: 255 * F(h, 255),
                    b: 255 * F(b, 255)
                }, f = !0, d = "%" === String(e.r).substr(-1) ? "prgb" : "rgb") : U(e.h) && U(e.s) && U(e.v) ? (n = z(e.s), l = z(e.v), t = function(e, t, r) {
                    e = 6 * F(e, 360), t = F(t, 100), r = F(r, 100);
                    var n = o.floor(e),
                        a = e - n,
                        i = r * (1 - t),
                        l = r * (1 - a * t),
                        u = r * (1 - (1 - a) * t),
                        c = n % 6;
                    return {
                        r: 255 * [r, l, i, i, u, r][c],
                        g: 255 * [u, r, r, l, i, i][c],
                        b: 255 * [i, i, u, r, r, l][c]
                    }
                }(e.h, n, l), f = !0, d = "hsv") : U(e.h) && U(e.s) && U(e.l) && (n = z(e.s), u = z(e.l), t = function(e, t, r) {
                    var n, o, a;

                    function i(e, t, r) {
                        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
                    }
                    if (e = F(e, 360), t = F(t, 100), r = F(r, 100), 0 === t) n = o = a = r;
                    else {
                        var l = r < .5 ? r * (1 + t) : r + t - r * t,
                            u = 2 * r - l;
                        n = i(u, l, e + 1 / 3), o = i(u, l, e), a = i(u, l, e - 1 / 3)
                    }
                    return {
                        r: 255 * n,
                        g: 255 * o,
                        b: 255 * a
                    }
                }(e.h, n, u), f = !0, d = "hsl"), e.hasOwnProperty("a") && (r = e.a));
                var p, h, b;
                return r = A(r), {
                    ok: f,
                    format: e.format || d,
                    r: c(255, s(t.r, 0)),
                    g: c(255, s(t.g, 0)),
                    b: c(255, s(t.b, 0)),
                    a: r
                }
            }(e);
            this._originalInput = e, this._r = r.r, this._g = r.g, this._b = r.b, this._a = r.a, this._roundA = u(100 * this._a) / 100, this._format = t.format || r.format, this._gradientType = t.gradientType, this._r < 1 && (this._r = u(this._r)), this._g < 1 && (this._g = u(this._g)), this._b < 1 && (this._b = u(this._b)), this._ok = r.ok, this._tc_id = l++
        }

        function p(e, t, r) {
            e = F(e, 255), t = F(t, 255), r = F(r, 255);
            var n, o, a = s(e, t, r),
                i = c(e, t, r),
                l = (a + i) / 2;
            if (a == i) n = o = 0;
            else {
                var u = a - i;
                switch (o = l > .5 ? u / (2 - a - i) : u / (a + i), a) {
                    case e:
                        n = (t - r) / u + (t < r ? 6 : 0);
                        break;
                    case t:
                        n = (r - e) / u + 2;
                        break;
                    case r:
                        n = (e - t) / u + 4
                }
                n /= 6
            }
            return {
                h: n,
                s: o,
                l: l
            }
        }

        function h(e, t, r) {
            e = F(e, 255), t = F(t, 255), r = F(r, 255);
            var n, o, a = s(e, t, r),
                i = c(e, t, r),
                l = a,
                u = a - i;
            if (o = 0 === a ? 0 : u / a, a == i) n = 0;
            else {
                switch (a) {
                    case e:
                        n = (t - r) / u + (t < r ? 6 : 0);
                        break;
                    case t:
                        n = (r - e) / u + 2;
                        break;
                    case r:
                        n = (e - t) / u + 4
                }
                n /= 6
            }
            return {
                h: n,
                s: o,
                v: l
            }
        }

        function b(e, t, r, n) {
            var o = [T(u(e).toString(16)), T(u(t).toString(16)), T(u(r).toString(16))];
            return n && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("")
        }

        function v(e, t, r, n) {
            return [T(D(n)), T(u(e).toString(16)), T(u(t).toString(16)), T(u(r).toString(16))].join("")
        }

        function g(e, t) {
            t = 0 === t ? 0 : t || 10;
            var r = d(e).toHsl();
            return r.s -= t / 100, r.s = B(r.s), d(r)
        }

        function y(e, t) {
            t = 0 === t ? 0 : t || 10;
            var r = d(e).toHsl();
            return r.s += t / 100, r.s = B(r.s), d(r)
        }

        function x(e) {
            return d(e).desaturate(100)
        }

        function m(e, t) {
            t = 0 === t ? 0 : t || 10;
            var r = d(e).toHsl();
            return r.l += t / 100, r.l = B(r.l), d(r)
        }

        function w(e, t) {
            t = 0 === t ? 0 : t || 10;
            var r = d(e).toRgb();
            return r.r = s(0, c(255, r.r - u(-t / 100 * 255))), r.g = s(0, c(255, r.g - u(-t / 100 * 255))), r.b = s(0, c(255, r.b - u(-t / 100 * 255))), d(r)
        }

        function _(e, t) {
            t = 0 === t ? 0 : t || 10;
            var r = d(e).toHsl();
            return r.l -= t / 100, r.l = B(r.l), d(r)
        }

        function E(e, t) {
            var r = d(e).toHsl(),
                n = (r.h + t) % 360;
            return r.h = n < 0 ? 360 + n : n, d(r)
        }

        function C(e) {
            var t = d(e).toHsl();
            return t.h = (t.h + 180) % 360, d(t)
        }

        function O(e) {
            var t = d(e).toHsl(),
                r = t.h;
            return [d(e), d({
                h: (r + 120) % 360,
                s: t.s,
                l: t.l
            }), d({
                h: (r + 240) % 360,
                s: t.s,
                l: t.l
            })]
        }

        function S(e) {
            var t = d(e).toHsl(),
                r = t.h;
            return [d(e), d({
                h: (r + 90) % 360,
                s: t.s,
                l: t.l
            }), d({
                h: (r + 180) % 360,
                s: t.s,
                l: t.l
            }), d({
                h: (r + 270) % 360,
                s: t.s,
                l: t.l
            })]
        }

        function j(e) {
            var t = d(e).toHsl(),
                r = t.h;
            return [d(e), d({
                h: (r + 72) % 360,
                s: t.s,
                l: t.l
            }), d({
                h: (r + 216) % 360,
                s: t.s,
                l: t.l
            })]
        }

        function k(e, t, r) {
            t = t || 6, r = r || 30;
            var n = d(e).toHsl(),
                o = 360 / r,
                a = [d(e)];
            for (n.h = (n.h - (o * t >> 1) + 720) % 360; --t;) n.h = (n.h + o) % 360, a.push(d(n));
            return a
        }

        function P(e, t) {
            t = t || 6;
            for (var r = d(e).toHsv(), n = r.h, o = r.s, a = r.v, i = [], l = 1 / t; t--;) i.push(d({
                h: n,
                s: o,
                v: a
            })), a = (a + l) % 1;
            return i
        }
        d.prototype = {
            isDark: function() {
                return this.getBrightness() < 128
            },
            isLight: function() {
                return !this.isDark()
            },
            isValid: function() {
                return this._ok
            },
            getOriginalInput: function() {
                return this._originalInput
            },
            getFormat: function() {
                return this._format
            },
            getAlpha: function() {
                return this._a
            },
            getBrightness: function() {
                var e = this.toRgb();
                return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
            },
            getLuminance: function() {
                var e, t, r, n = this.toRgb();
                return e = n.r / 255, t = n.g / 255, r = n.b / 255, .2126 * (e <= .03928 ? e / 12.92 : o.pow((e + .055) / 1.055, 2.4)) + .7152 * (t <= .03928 ? t / 12.92 : o.pow((t + .055) / 1.055, 2.4)) + .0722 * (r <= .03928 ? r / 12.92 : o.pow((r + .055) / 1.055, 2.4))
            },
            setAlpha: function(e) {
                return this._a = A(e), this._roundA = u(100 * this._a) / 100, this
            },
            toHsv: function() {
                var e = h(this._r, this._g, this._b);
                return {
                    h: 360 * e.h,
                    s: e.s,
                    v: e.v,
                    a: this._a
                }
            },
            toHsvString: function() {
                var e = h(this._r, this._g, this._b),
                    t = u(360 * e.h),
                    r = u(100 * e.s),
                    n = u(100 * e.v);
                return 1 == this._a ? "hsv(" + t + ", " + r + "%, " + n + "%)" : "hsva(" + t + ", " + r + "%, " + n + "%, " + this._roundA + ")"
            },
            toHsl: function() {
                var e = p(this._r, this._g, this._b);
                return {
                    h: 360 * e.h,
                    s: e.s,
                    l: e.l,
                    a: this._a
                }
            },
            toHslString: function() {
                var e = p(this._r, this._g, this._b),
                    t = u(360 * e.h),
                    r = u(100 * e.s),
                    n = u(100 * e.l);
                return 1 == this._a ? "hsl(" + t + ", " + r + "%, " + n + "%)" : "hsla(" + t + ", " + r + "%, " + n + "%, " + this._roundA + ")"
            },
            toHex: function(e) {
                return b(this._r, this._g, this._b, e)
            },
            toHexString: function(e) {
                return "#" + this.toHex(e)
            },
            toHex8: function(e) {
                return function(e, t, r, n, o) {
                    var a = [T(u(e).toString(16)), T(u(t).toString(16)), T(u(r).toString(16)), T(D(n))];
                    if (o && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) && a[3].charAt(0) == a[3].charAt(1)) return a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0);
                    return a.join("")
                }(this._r, this._g, this._b, this._a, e)
            },
            toHex8String: function(e) {
                return "#" + this.toHex8(e)
            },
            toRgb: function() {
                return {
                    r: u(this._r),
                    g: u(this._g),
                    b: u(this._b),
                    a: this._a
                }
            },
            toRgbString: function() {
                return 1 == this._a ? "rgb(" + u(this._r) + ", " + u(this._g) + ", " + u(this._b) + ")" : "rgba(" + u(this._r) + ", " + u(this._g) + ", " + u(this._b) + ", " + this._roundA + ")"
            },
            toPercentageRgb: function() {
                return {
                    r: u(100 * F(this._r, 255)) + "%",
                    g: u(100 * F(this._g, 255)) + "%",
                    b: u(100 * F(this._b, 255)) + "%",
                    a: this._a
                }
            },
            toPercentageRgbString: function() {
                return 1 == this._a ? "rgb(" + u(100 * F(this._r, 255)) + "%, " + u(100 * F(this._g, 255)) + "%, " + u(100 * F(this._b, 255)) + "%)" : "rgba(" + u(100 * F(this._r, 255)) + "%, " + u(100 * F(this._g, 255)) + "%, " + u(100 * F(this._b, 255)) + "%, " + this._roundA + ")"
            },
            toName: function() {
                return 0 === this._a ? "transparent" : !(this._a < 1) && (R[b(this._r, this._g, this._b, !0)] || !1)
            },
            toFilter: function(e) {
                var t = "#" + v(this._r, this._g, this._b, this._a),
                    r = t,
                    n = this._gradientType ? "GradientType = 1, " : "";
                if (e) {
                    var o = d(e);
                    r = "#" + v(o._r, o._g, o._b, o._a)
                }
                return "progid:DXImageTransform.Microsoft.gradient(" + n + "startColorstr=" + t + ",endColorstr=" + r + ")"
            },
            toString: function(e) {
                var t = !!e;
                e = e || this._format;
                var r = !1,
                    n = this._a < 1 && this._a >= 0;
                return t || !n || "hex" !== e && "hex6" !== e && "hex3" !== e && "hex4" !== e && "hex8" !== e && "name" !== e ? ("rgb" === e && (r = this.toRgbString()), "prgb" === e && (r = this.toPercentageRgbString()), "hex" !== e && "hex6" !== e || (r = this.toHexString()), "hex3" === e && (r = this.toHexString(!0)), "hex4" === e && (r = this.toHex8String(!0)), "hex8" === e && (r = this.toHex8String()), "name" === e && (r = this.toName()), "hsl" === e && (r = this.toHslString()), "hsv" === e && (r = this.toHsvString()), r || this.toHexString()) : "name" === e && 0 === this._a ? this.toName() : this.toRgbString()
            },
            clone: function() {
                return d(this.toString())
            },
            _applyModification: function(e, t) {
                var r = e.apply(null, [this].concat([].slice.call(t)));
                return this._r = r._r, this._g = r._g, this._b = r._b, this.setAlpha(r._a), this
            },
            lighten: function() {
                return this._applyModification(m, arguments)
            },
            brighten: function() {
                return this._applyModification(w, arguments)
            },
            darken: function() {
                return this._applyModification(_, arguments)
            },
            desaturate: function() {
                return this._applyModification(g, arguments)
            },
            saturate: function() {
                return this._applyModification(y, arguments)
            },
            greyscale: function() {
                return this._applyModification(x, arguments)
            },
            spin: function() {
                return this._applyModification(E, arguments)
            },
            _applyCombination: function(e, t) {
                return e.apply(null, [this].concat([].slice.call(t)))
            },
            analogous: function() {
                return this._applyCombination(k, arguments)
            },
            complement: function() {
                return this._applyCombination(C, arguments)
            },
            monochromatic: function() {
                return this._applyCombination(P, arguments)
            },
            splitcomplement: function() {
                return this._applyCombination(j, arguments)
            },
            triad: function() {
                return this._applyCombination(O, arguments)
            },
            tetrad: function() {
                return this._applyCombination(S, arguments)
            }
        }, d.fromRatio = function(e, t) {
            if ("object" == typeof e) {
                var r = {};
                for (var n in e) e.hasOwnProperty(n) && (r[n] = "a" === n ? e[n] : z(e[n]));
                e = r
            }
            return d(e, t)
        }, d.equals = function(e, t) {
            return !(!e || !t) && d(e).toRgbString() == d(t).toRgbString()
        }, d.random = function() {
            return d.fromRatio({
                r: f(),
                g: f(),
                b: f()
            })
        }, d.mix = function(e, t, r) {
            r = 0 === r ? 0 : r || 50;
            var n = d(e).toRgb(),
                o = d(t).toRgb(),
                a = r / 100;
            return d({
                r: (o.r - n.r) * a + n.r,
                g: (o.g - n.g) * a + n.g,
                b: (o.b - n.b) * a + n.b,
                a: (o.a - n.a) * a + n.a
            })
        }, d.readability = function(e, t) {
            var r = d(e),
                n = d(t);
            return (o.max(r.getLuminance(), n.getLuminance()) + .05) / (o.min(r.getLuminance(), n.getLuminance()) + .05)
        }, d.isReadable = function(e, t, r) {
            var n, o, a = d.readability(e, t);
            switch (o = !1, (n = function(e) {
                var t, r;
                t = ((e = e || {
                    level: "AA",
                    size: "small"
                }).level || "AA").toUpperCase(), r = (e.size || "small").toLowerCase(), "AA" !== t && "AAA" !== t && (t = "AA");
                "small" !== r && "large" !== r && (r = "small");
                return {
                    level: t,
                    size: r
                }
            }(r)).level + n.size) {
                case "AAsmall":
                case "AAAlarge":
                    o = a >= 4.5;
                    break;
                case "AAlarge":
                    o = a >= 3;
                    break;
                case "AAAsmall":
                    o = a >= 7
            }
            return o
        }, d.mostReadable = function(e, t, r) {
            var n, o, a, i, l = null,
                u = 0;
            o = (r = r || {}).includeFallbackColors, a = r.level, i = r.size;
            for (var c = 0; c < t.length; c++)(n = d.readability(e, t[c])) > u && (u = n, l = d(t[c]));
            return d.isReadable(e, l, {
                level: a,
                size: i
            }) || !o ? l : (r.includeFallbackColors = !1, d.mostReadable(e, ["#fff", "#000"], r))
        };
        var M = d.names = {
                aliceblue: "f0f8ff",
                antiquewhite: "faebd7",
                aqua: "0ff",
                aquamarine: "7fffd4",
                azure: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "000",
                blanchedalmond: "ffebcd",
                blue: "00f",
                blueviolet: "8a2be2",
                brown: "a52a2a",
                burlywood: "deb887",
                burntsienna: "ea7e5d",
                cadetblue: "5f9ea0",
                chartreuse: "7fff00",
                chocolate: "d2691e",
                coral: "ff7f50",
                cornflowerblue: "6495ed",
                cornsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "0ff",
                darkblue: "00008b",
                darkcyan: "008b8b",
                darkgoldenrod: "b8860b",
                darkgray: "a9a9a9",
                darkgreen: "006400",
                darkgrey: "a9a9a9",
                darkkhaki: "bdb76b",
                darkmagenta: "8b008b",
                darkolivegreen: "556b2f",
                darkorange: "ff8c00",
                darkorchid: "9932cc",
                darkred: "8b0000",
                darksalmon: "e9967a",
                darkseagreen: "8fbc8f",
                darkslateblue: "483d8b",
                darkslategray: "2f4f4f",
                darkslategrey: "2f4f4f",
                darkturquoise: "00ced1",
                darkviolet: "9400d3",
                deeppink: "ff1493",
                deepskyblue: "00bfff",
                dimgray: "696969",
                dimgrey: "696969",
                dodgerblue: "1e90ff",
                firebrick: "b22222",
                floralwhite: "fffaf0",
                forestgreen: "228b22",
                fuchsia: "f0f",
                gainsboro: "dcdcdc",
                ghostwhite: "f8f8ff",
                gold: "ffd700",
                goldenrod: "daa520",
                gray: "808080",
                green: "008000",
                greenyellow: "adff2f",
                grey: "808080",
                honeydew: "f0fff0",
                hotpink: "ff69b4",
                indianred: "cd5c5c",
                indigo: "4b0082",
                ivory: "fffff0",
                khaki: "f0e68c",
                lavender: "e6e6fa",
                lavenderblush: "fff0f5",
                lawngreen: "7cfc00",
                lemonchiffon: "fffacd",
                lightblue: "add8e6",
                lightcoral: "f08080",
                lightcyan: "e0ffff",
                lightgoldenrodyellow: "fafad2",
                lightgray: "d3d3d3",
                lightgreen: "90ee90",
                lightgrey: "d3d3d3",
                lightpink: "ffb6c1",
                lightsalmon: "ffa07a",
                lightseagreen: "20b2aa",
                lightskyblue: "87cefa",
                lightslategray: "789",
                lightslategrey: "789",
                lightsteelblue: "b0c4de",
                lightyellow: "ffffe0",
                lime: "0f0",
                limegreen: "32cd32",
                linen: "faf0e6",
                magenta: "f0f",
                maroon: "800000",
                mediumaquamarine: "66cdaa",
                mediumblue: "0000cd",
                mediumorchid: "ba55d3",
                mediumpurple: "9370db",
                mediumseagreen: "3cb371",
                mediumslateblue: "7b68ee",
                mediumspringgreen: "00fa9a",
                mediumturquoise: "48d1cc",
                mediumvioletred: "c71585",
                midnightblue: "191970",
                mintcream: "f5fffa",
                mistyrose: "ffe4e1",
                moccasin: "ffe4b5",
                navajowhite: "ffdead",
                navy: "000080",
                oldlace: "fdf5e6",
                olive: "808000",
                olivedrab: "6b8e23",
                orange: "ffa500",
                orangered: "ff4500",
                orchid: "da70d6",
                palegoldenrod: "eee8aa",
                palegreen: "98fb98",
                paleturquoise: "afeeee",
                palevioletred: "db7093",
                papayawhip: "ffefd5",
                peachpuff: "ffdab9",
                peru: "cd853f",
                pink: "ffc0cb",
                plum: "dda0dd",
                powderblue: "b0e0e6",
                purple: "800080",
                rebeccapurple: "663399",
                red: "f00",
                rosybrown: "bc8f8f",
                royalblue: "4169e1",
                saddlebrown: "8b4513",
                salmon: "fa8072",
                sandybrown: "f4a460",
                seagreen: "2e8b57",
                seashell: "fff5ee",
                sienna: "a0522d",
                silver: "c0c0c0",
                skyblue: "87ceeb",
                slateblue: "6a5acd",
                slategray: "708090",
                slategrey: "708090",
                snow: "fffafa",
                springgreen: "00ff7f",
                steelblue: "4682b4",
                tan: "d2b48c",
                teal: "008080",
                thistle: "d8bfd8",
                tomato: "ff6347",
                turquoise: "40e0d0",
                violet: "ee82ee",
                wheat: "f5deb3",
                white: "fff",
                whitesmoke: "f5f5f5",
                yellow: "ff0",
                yellowgreen: "9acd32"
            },
            R = d.hexNames = function(e) {
                var t = {};
                for (var r in e) e.hasOwnProperty(r) && (t[e[r]] = r);
                return t
            }(M);

        function A(e) {
            return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
        }

        function F(e, t) {
            (function(e) {
                return "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e)
            })(e) && (e = "100%");
            var r = function(e) {
                return "string" == typeof e && -1 != e.indexOf("%")
            }(e);
            return e = c(t, s(0, parseFloat(e))), r && (e = parseInt(e * t, 10) / 100), o.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t)
        }

        function B(e) {
            return c(1, s(0, e))
        }

        function H(e) {
            return parseInt(e, 16)
        }

        function T(e) {
            return 1 == e.length ? "0" + e : "" + e
        }

        function z(e) {
            return e <= 1 && (e = 100 * e + "%"), e
        }

        function D(e) {
            return o.round(255 * parseFloat(e)).toString(16)
        }

        function L(e) {
            return H(e) / 255
        }
        var I, N, G, W = (N = "[\\s|\\(]+(" + (I = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + I + ")[,|\\s]+(" + I + ")\\s*\\)?", G = "[\\s|\\(]+(" + I + ")[,|\\s]+(" + I + ")[,|\\s]+(" + I + ")[,|\\s]+(" + I + ")\\s*\\)?", {
            CSS_UNIT: new RegExp(I),
            rgb: new RegExp("rgb" + N),
            rgba: new RegExp("rgba" + G),
            hsl: new RegExp("hsl" + N),
            hsla: new RegExp("hsla" + G),
            hsv: new RegExp("hsv" + N),
            hsva: new RegExp("hsva" + G),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        });

        function U(e) {
            return !!W.CSS_UNIT.exec(e)
        }
        e.exports ? e.exports = d : void 0 === (n = function() {
            return d
        }.call(t, r, t, e)) || (e.exports = n)
    }(Math)
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Swatch = void 0;
    var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        o = u(r(0)),
        a = u(r(1)),
        i = r(212),
        l = u(r(46));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = t.Swatch = function(e) {
        var t = e.color,
            r = e.style,
            i = e.onClick,
            u = void 0 === i ? function() {} : i,
            c = e.onHover,
            s = e.title,
            f = void 0 === s ? t : s,
            d = e.children,
            p = e.focus,
            h = e.focusStyle,
            b = void 0 === h ? {} : h,
            v = "transparent" === t,
            g = (0, a.default)({
                default: {
                    swatch: n({
                        background: t,
                        height: "100%",
                        width: "100%",
                        cursor: "pointer",
                        position: "relative",
                        outline: "none"
                    }, r, p ? b : {})
                }
            }),
            y = {};
        return c && (y.onMouseOver = function(e) {
            return c(t, e)
        }), o.default.createElement("div", n({
            style: g.swatch,
            onClick: function(e) {
                return u(t, e)
            },
            title: f,
            tabIndex: 0,
            onKeyDown: function(e) {
                return 13 === e.keyCode && u(t, e)
            }
        }, y), d, v && o.default.createElement(l.default, {
            borderRadius: g.swatch.borderRadius,
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
        }))
    };
    t.default = (0, i.handleFocus)(c)
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.handleFocus = void 0;
    var n, o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        a = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }(),
        i = r(0),
        l = (n = i) && n.__esModule ? n : {
            default: n
        };

    function u(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function c(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    t.handleFocus = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
        return function(r) {
            function n() {
                var e, t, r;
                u(this, n);
                for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
                return t = r = c(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [this].concat(a))), r.state = {
                    focus: !1
                }, r.handleFocus = function() {
                    return r.setState({
                        focus: !0
                    })
                }, r.handleBlur = function() {
                    return r.setState({
                        focus: !1
                    })
                }, c(r, t)
            }
            return s(n, r), a(n, [{
                key: "render",
                value: function() {
                    return l.default.createElement(t, {
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur
                    }, l.default.createElement(e, o({}, this.props, this.state)))
                }
            }]), n
        }(l.default.Component)
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AlphaPointer = void 0;
    var n = a(r(0)),
        o = a(r(1));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = t.AlphaPointer = function(e) {
        var t = e.direction,
            r = (0, o.default)({
                default: {
                    picker: {
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        transform: "translate(-9px, -1px)",
                        backgroundColor: "rgb(248, 248, 248)",
                        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
                    }
                },
                vertical: {
                    picker: {
                        transform: "translate(-3px, -9px)"
                    }
                }
            }, {
                vertical: "vertical" === t
            });
        return n.default.createElement("div", {
            style: r.picker
        })
    };
    t.default = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Block = void 0;
    var n = s(r(0)),
        o = s(r(4)),
        a = s(r(1)),
        i = s(r(5)),
        l = s(r(8)),
        u = r(2),
        c = s(r(215));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = t.Block = function(e) {
        var t = e.onChange,
            r = e.onSwatchHover,
            o = e.hex,
            s = e.colors,
            f = e.width,
            d = e.triangle,
            p = e.styles,
            h = void 0 === p ? {} : p,
            b = e.className,
            v = void 0 === b ? "" : b,
            g = "transparent" === o,
            y = function(e, r) {
                l.default.isValidHex(e) && t({
                    hex: e,
                    source: "hex"
                }, r)
            },
            x = (0, a.default)((0, i.default)({
                default: {
                    card: {
                        width: f,
                        background: "#fff",
                        boxShadow: "0 1px rgba(0,0,0,.1)",
                        borderRadius: "6px",
                        position: "relative"
                    },
                    head: {
                        height: "110px",
                        background: o,
                        borderRadius: "6px 6px 0 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative"
                    },
                    body: {
                        padding: "10px"
                    },
                    label: {
                        fontSize: "18px",
                        color: l.default.getContrastingColor(o),
                        position: "relative"
                    },
                    triangle: {
                        width: "0px",
                        height: "0px",
                        borderStyle: "solid",
                        borderWidth: "0 10px 10px 10px",
                        borderColor: "transparent transparent " + o + " transparent",
                        position: "absolute",
                        top: "-10px",
                        left: "50%",
                        marginLeft: "-10px"
                    },
                    input: {
                        width: "100%",
                        fontSize: "12px",
                        color: "#666",
                        border: "0px",
                        outline: "none",
                        height: "22px",
                        boxShadow: "inset 0 0 0 1px #ddd",
                        borderRadius: "4px",
                        padding: "0 7px",
                        boxSizing: "border-box"
                    }
                },
                "hide-triangle": {
                    triangle: {
                        display: "none"
                    }
                }
            }, h), {
                "hide-triangle": "hide" === d
            });
        return n.default.createElement("div", {
            style: x.card,
            className: "block-picker " + v
        }, n.default.createElement("div", {
            style: x.triangle
        }), n.default.createElement("div", {
            style: x.head
        }, g && n.default.createElement(u.Checkboard, {
            borderRadius: "6px 6px 0 0"
        }), n.default.createElement("div", {
            style: x.label
        }, o)), n.default.createElement("div", {
            style: x.body
        }, n.default.createElement(c.default, {
            colors: s,
            onClick: y,
            onSwatchHover: r
        }), n.default.createElement(u.EditableInput, {
            style: {
                input: x.input
            },
            value: o,
            onChange: y
        })))
    };
    f.propTypes = {
        width: o.default.oneOfType([o.default.string, o.default.number]),
        colors: o.default.arrayOf(o.default.string),
        triangle: o.default.oneOf(["top", "hide"]),
        styles: o.default.object
    }, f.defaultProps = {
        width: 170,
        colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"],
        triangle: "top",
        styles: {}
    }, t.default = (0, u.ColorWrap)(f)
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.BlockSwatches = void 0;
    var n = l(r(0)),
        o = l(r(1)),
        a = l(r(10)),
        i = r(2);

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = t.BlockSwatches = function(e) {
        var t = e.colors,
            r = e.onClick,
            l = e.onSwatchHover,
            u = (0, o.default)({
                default: {
                    swatches: {
                        marginRight: "-10px"
                    },
                    swatch: {
                        width: "22px",
                        height: "22px",
                        float: "left",
                        marginRight: "10px",
                        marginBottom: "10px",
                        borderRadius: "4px"
                    },
                    clear: {
                        clear: "both"
                    }
                }
            });
        return n.default.createElement("div", {
            style: u.swatches
        }, (0, a.default)(t, (function(e) {
            return n.default.createElement(i.Swatch, {
                key: e,
                color: e,
                style: u.swatch,
                onClick: r,
                onHover: l,
                focusStyle: {
                    boxShadow: "0 0 4px " + e
                }
            })
        })), n.default.createElement("div", {
            style: u.clear
        }))
    };
    t.default = u
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Circle = void 0;
    var n = f(r(0)),
        o = f(r(4)),
        a = f(r(1)),
        i = f(r(10)),
        l = f(r(5)),
        u = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }(r(80)),
        c = r(2),
        s = f(r(217));

    function f(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var d = t.Circle = function(e) {
        var t = e.width,
            r = e.onChange,
            o = e.onSwatchHover,
            u = e.colors,
            c = e.hex,
            f = e.circleSize,
            d = e.styles,
            p = void 0 === d ? {} : d,
            h = e.circleSpacing,
            b = e.className,
            v = void 0 === b ? "" : b,
            g = (0, a.default)((0, l.default)({
                default: {
                    card: {
                        width: t,
                        display: "flex",
                        flexWrap: "wrap",
                        marginRight: -h,
                        marginBottom: -h
                    }
                }
            }, p)),
            y = function(e, t) {
                return r({
                    hex: e,
                    source: "hex"
                }, t)
            };
        return n.default.createElement("div", {
            style: g.card,
            className: "circle-picker " + v
        }, (0, i.default)(u, (function(e) {
            return n.default.createElement(s.default, {
                key: e,
                color: e,
                onClick: y,
                onSwatchHover: o,
                active: c === e.toLowerCase(),
                circleSize: f,
                circleSpacing: h
            })
        })))
    };
    d.propTypes = {
        width: o.default.oneOfType([o.default.string, o.default.number]),
        circleSize: o.default.number,
        circleSpacing: o.default.number,
        styles: o.default.object
    }, d.defaultProps = {
        width: 252,
        circleSize: 28,
        circleSpacing: 14,
        colors: [u.red[500], u.pink[500], u.purple[500], u.deepPurple[500], u.indigo[500], u.blue[500], u.lightBlue[500], u.cyan[500], u.teal[500], u.green[500], u.lightGreen[500], u.lime[500], u.yellow[500], u.amber[500], u.orange[500], u.deepOrange[500], u.brown[500], u.blueGrey[500]],
        styles: {}
    }, t.default = (0, c.ColorWrap)(d)
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CircleSwatch = void 0;
    var n = l(r(0)),
        o = r(1),
        a = l(o),
        i = r(2);

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = t.CircleSwatch = function(e) {
        var t = e.color,
            r = e.onClick,
            o = e.onSwatchHover,
            l = e.hover,
            u = e.active,
            c = e.circleSize,
            s = e.circleSpacing,
            f = (0, a.default)({
                default: {
                    swatch: {
                        width: c,
                        height: c,
                        marginRight: s,
                        marginBottom: s,
                        transform: "scale(1)",
                        transition: "100ms transform ease"
                    },
                    Swatch: {
                        borderRadius: "50%",
                        background: "transparent",
                        boxShadow: "inset 0 0 0 " + c / 2 + "px " + t,
                        transition: "100ms box-shadow ease"
                    }
                },
                hover: {
                    swatch: {
                        transform: "scale(1.2)"
                    }
                },
                active: {
                    Swatch: {
                        boxShadow: "inset 0 0 0 3px " + t
                    }
                }
            }, {
                hover: l,
                active: u
            });
        return n.default.createElement("div", {
            style: f.swatch
        }, n.default.createElement(i.Swatch, {
            style: f.Swatch,
            color: t,
            onClick: r,
            onHover: o,
            focusStyle: {
                boxShadow: f.Swatch.boxShadow + ", 0 0 5px " + t
            }
        }))
    };
    u.defaultProps = {
        circleSize: 28,
        circleSpacing: 14
    }, t.default = (0, o.handleHover)(u)
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Chrome = void 0;
    var n = f(r(0)),
        o = f(r(4)),
        a = f(r(1)),
        i = f(r(5)),
        l = r(2),
        u = f(r(219)),
        c = f(r(221)),
        s = f(r(222));

    function f(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var d = t.Chrome = function(e) {
        var t = e.width,
            r = e.onChange,
            o = e.disableAlpha,
            f = e.rgb,
            d = e.hsl,
            p = e.hsv,
            h = e.hex,
            b = e.renderers,
            v = e.styles,
            g = void 0 === v ? {} : v,
            y = e.className,
            x = void 0 === y ? "" : y,
            m = (0, a.default)((0, i.default)({
                default: {
                    picker: {
                        width: t,
                        background: "#fff",
                        borderRadius: "2px",
                        boxShadow: "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
                        boxSizing: "initial",
                        fontFamily: "Menlo"
                    },
                    saturation: {
                        width: "100%",
                        paddingBottom: "55%",
                        position: "relative",
                        borderRadius: "2px 2px 0 0",
                        overflow: "hidden"
                    },
                    Saturation: {
                        radius: "2px 2px 0 0"
                    },
                    body: {
                        padding: "16px 16px 12px"
                    },
                    controls: {
                        display: "flex"
                    },
                    color: {
                        width: "32px"
                    },
                    swatch: {
                        marginTop: "6px",
                        width: "16px",
                        height: "16px",
                        borderRadius: "8px",
                        position: "relative",
                        overflow: "hidden"
                    },
                    active: {
                        absolute: "0px 0px 0px 0px",
                        borderRadius: "8px",
                        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
                        background: "rgba(" + f.r + ", " + f.g + ", " + f.b + ", " + f.a + ")",
                        zIndex: "2"
                    },
                    toggles: {
                        flex: "1"
                    },
                    hue: {
                        height: "10px",
                        position: "relative",
                        marginBottom: "8px"
                    },
                    Hue: {
                        radius: "2px"
                    },
                    alpha: {
                        height: "10px",
                        position: "relative"
                    },
                    Alpha: {
                        radius: "2px"
                    }
                },
                disableAlpha: {
                    color: {
                        width: "22px"
                    },
                    alpha: {
                        display: "none"
                    },
                    hue: {
                        marginBottom: "0px"
                    },
                    swatch: {
                        width: "10px",
                        height: "10px",
                        marginTop: "0px"
                    }
                }
            }, g), {
                disableAlpha: o
            });
        return n.default.createElement("div", {
            style: m.picker,
            className: "chrome-picker " + x
        }, n.default.createElement("div", {
            style: m.saturation
        }, n.default.createElement(l.Saturation, {
            style: m.Saturation,
            hsl: d,
            hsv: p,
            pointer: s.default,
            onChange: r
        })), n.default.createElement("div", {
            style: m.body
        }, n.default.createElement("div", {
            style: m.controls,
            className: "flexbox-fix"
        }, n.default.createElement("div", {
            style: m.color
        }, n.default.createElement("div", {
            style: m.swatch
        }, n.default.createElement("div", {
            style: m.active
        }), n.default.createElement(l.Checkboard, {
            renderers: b
        }))), n.default.createElement("div", {
            style: m.toggles
        }, n.default.createElement("div", {
            style: m.hue
        }, n.default.createElement(l.Hue, {
            style: m.Hue,
            hsl: d,
            pointer: c.default,
            onChange: r
        })), n.default.createElement("div", {
            style: m.alpha
        }, n.default.createElement(l.Alpha, {
            style: m.Alpha,
            rgb: f,
            hsl: d,
            pointer: c.default,
            renderers: b,
            onChange: r
        })))), n.default.createElement(u.default, {
            rgb: f,
            hsl: d,
            hex: h,
            onChange: r,
            disableAlpha: o
        })))
    };
    d.propTypes = {
        width: o.default.oneOfType([o.default.string, o.default.number]),
        disableAlpha: o.default.bool,
        styles: o.default.object
    }, d.defaultProps = {
        width: 225,
        disableAlpha: !1,
        styles: {}
    }, t.default = (0, l.ColorWrap)(d)
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ChromeFields = void 0;
    var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }(),
        o = c(r(0)),
        a = c(r(1)),
        i = c(r(8)),
        l = r(2),
        u = c(r(220));

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function s(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var f = t.ChromeFields = function(e) {
        function t() {
            var e, r, n;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            for (var o = arguments.length, a = Array(o), l = 0; l < o; l++) a[l] = arguments[l];
            return r = n = s(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), n.state = {
                view: ""
            }, n.toggleViews = function() {
                "hex" === n.state.view ? n.setState({
                    view: "rgb"
                }) : "rgb" === n.state.view ? n.setState({
                    view: "hsl"
                }) : "hsl" === n.state.view && (1 === n.props.hsl.a ? n.setState({
                    view: "hex"
                }) : n.setState({
                    view: "rgb"
                }))
            }, n.handleChange = function(e, t) {
                e.hex ? i.default.isValidHex(e.hex) && n.props.onChange({
                    hex: e.hex,
                    source: "hex"
                }, t) : e.r || e.g || e.b ? n.props.onChange({
                    r: e.r || n.props.rgb.r,
                    g: e.g || n.props.rgb.g,
                    b: e.b || n.props.rgb.b,
                    source: "rgb"
                }, t) : e.a ? (e.a < 0 ? e.a = 0 : e.a > 1 && (e.a = 1), n.props.onChange({
                    h: n.props.hsl.h,
                    s: n.props.hsl.s,
                    l: n.props.hsl.l,
                    a: Math.round(100 * e.a) / 100,
                    source: "rgb"
                }, t)) : (e.h || e.s || e.l) && ("string" == typeof e.s && e.s.includes("%") && (e.s = e.s.replace("%", "")), "string" == typeof e.l && e.l.includes("%") && (e.l = e.l.replace("%", "")), n.props.onChange({
                    h: e.h || n.props.hsl.h,
                    s: Number(e.s && e.s || n.props.hsl.s),
                    l: Number(e.l && e.l || n.props.hsl.l),
                    source: "hsl"
                }, t))
            }, n.showHighlight = function(e) {
                e.currentTarget.style.background = "#eee"
            }, n.hideHighlight = function(e) {
                e.currentTarget.style.background = "transparent"
            }, s(n, r)
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), n(t, [{
            key: "componentDidMount",
            value: function() {
                1 === this.props.hsl.a && "hex" !== this.state.view ? this.setState({
                    view: "hex"
                }) : "rgb" !== this.state.view && "hsl" !== this.state.view && this.setState({
                    view: "rgb"
                })
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(e) {
                1 !== e.hsl.a && "hex" === this.state.view && this.setState({
                    view: "rgb"
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = (0, a.default)({
                        default: {
                            wrap: {
                                paddingTop: "16px",
                                display: "flex"
                            },
                            fields: {
                                flex: "1",
                                display: "flex",
                                marginLeft: "-6px"
                            },
                            field: {
                                paddingLeft: "6px",
                                width: "100%"
                            },
                            alpha: {
                                paddingLeft: "6px",
                                width: "100%"
                            },
                            toggle: {
                                width: "32px",
                                textAlign: "right",
                                position: "relative"
                            },
                            icon: {
                                marginRight: "-4px",
                                marginTop: "12px",
                                cursor: "pointer",
                                position: "relative"
                            },
                            iconHighlight: {
                                position: "absolute",
                                width: "24px",
                                height: "28px",
                                background: "#eee",
                                borderRadius: "4px",
                                top: "10px",
                                left: "12px",
                                display: "none"
                            },
                            input: {
                                fontSize: "11px",
                                color: "#333",
                                width: "100%",
                                borderRadius: "2px",
                                border: "none",
                                boxShadow: "inset 0 0 0 1px #dadada",
                                height: "21px",
                                textAlign: "center"
                            },
                            label: {
                                textTransform: "uppercase",
                                fontSize: "11px",
                                lineHeight: "11px",
                                color: "#969696",
                                textAlign: "center",
                                display: "block",
                                marginTop: "12px"
                            },
                            svg: {
                                fill: "#333",
                                width: "24px",
                                height: "24px",
                                border: "1px transparent solid",
                                borderRadius: "5px"
                            }
                        },
                        disableAlpha: {
                            alpha: {
                                display: "none"
                            }
                        }
                    }, this.props, this.state),
                    r = void 0;
                return "hex" === this.state.view ? r = o.default.createElement("div", {
                    style: t.fields,
                    className: "flexbox-fix"
                }, o.default.createElement("div", {
                    style: t.field
                }, o.default.createElement(l.EditableInput, {
                    style: {
                        input: t.input,
                        label: t.label
                    },
                    label: "hex",
                    value: this.props.hex,
                    onChange: this.handleChange
                }))) : "rgb" === this.state.view ? r = o.default.createElement("div", {
                    style: t.fields,
                    className: "flexbox-fix"
                }, o.default.createElement("div", {
                    style: t.field
                }, o.default.createElement(l.EditableInput, {
                    style: {
                        input: t.input,
                        label: t.label
                    },
                    label: "r",
                    value: this.props.rgb.r,
                    onChange: this.handleChange
                })), o.default.createElement("div", {
                    style: t.field
                }, o.default.createElement(l.EditableInput, {
                    style: {
                        input: t.input,
                        label: t.label
                    },
                    label: "g",
                    value: this.props.rgb.g,
                    onChange: this.handleChange
                })), o.default.createElement("div", {
                    style: t.field
                }, o.default.createElement(l.EditableInput, {
                    style: {
                        input: t.input,
                        label: t.label
                    },
                    label: "b",
                    value: this.props.rgb.b,
                    onChange: this.handleChange
                })), o.default.createElement("div", {
                    style: t.alpha
                }, o.default.createElement(l.EditableInput, {
                    style: {
                        input: t.input,
                        label: t.label
                    },
                    label: "a",
                    value: this.props.rgb.a,
                    arrowOffset: .01,
                    onChange: this.handleChange
                }))) : "hsl" === this.state.view && (r = o.default.createElement("div", {
                    style: t.fields,
                    className: "flexbox-fix"
                }, o.default.createElement("div", {
                    style: t.field
                }, o.default.createElement(l.EditableInput, {
                    style: {
                        input: t.input,
                        label: t.label
                    },
                    label: "h",
                    value: Math.round(this.props.hsl.h),
                    onChange: this.handleChange
                })), o.default.createElement("div", {
                    style: t.field
                }, o.default.createElement(l.EditableInput, {
                    style: {
                        input: t.input,
                        label: t.label
                    },
                    label: "s",
                    value: Math.round(100 * this.props.hsl.s) + "%",
                    onChange: this.handleChange
                })), o.default.createElement("div", {
                    style: t.field
                }, o.default.createElement(l.EditableInput, {
                    style: {
                        input: t.input,
                        label: t.label
                    },
                    label: "l",
                    value: Math.round(100 * this.props.hsl.l) + "%",
                    onChange: this.handleChange
                })), o.default.createElement("div", {
                    style: t.alpha
                }, o.default.createElement(l.EditableInput, {
                    style: {
                        input: t.input,
                        label: t.label
                    },
                    label: "a",
                    value: this.props.hsl.a,
                    arrowOffset: .01,
                    onChange: this.handleChange
                })))), o.default.createElement("div", {
                    style: t.wrap,
                    className: "flexbox-fix"
                }, r, o.default.createElement("div", {
                    style: t.toggle
                }, o.default.createElement("div", {
                    style: t.icon,
                    onClick: this.toggleViews,
                    ref: function(t) {
                        return e.icon = t
                    }
                }, o.default.createElement(u.default, {
                    style: t.svg,
                    onMouseOver: this.showHighlight,
                    onMouseEnter: this.showHighlight,
                    onMouseOut: this.hideHighlight
                }))))
            }
        }]), t
    }(o.default.Component);
    t.default = f
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n, o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        a = r(0),
        i = (n = a) && n.__esModule ? n : {
            default: n
        };
    t.default = function(e) {
        var t = e.fill,
            r = void 0 === t ? "currentColor" : t,
            n = e.width,
            a = void 0 === n ? 24 : n,
            l = e.height,
            u = void 0 === l ? 24 : l,
            c = e.style,
            s = void 0 === c ? {} : c,
            f = function(e, t) {
                var r = {};
                for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                return r
            }(e, ["fill", "width", "height", "style"]);
        return i.default.createElement("svg", o({
            viewBox: "0 0 24 24",
            style: o({
                fill: r,
                width: a,
                height: u
            }, s)
        }, f), i.default.createElement("path", {
            d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
        }))
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ChromePointer = void 0;
    var n = a(r(0)),
        o = a(r(1));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = t.ChromePointer = function() {
        var e = (0, o.default)({
            default: {
                picker: {
                    width: "12px",
                    height: "12px",
                    borderRadius: "6px",
                    transform: "translate(-6px, -1px)",
                    backgroundColor: "rgb(248, 248, 248)",
                    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
                }
            }
        });
        return n.default.createElement("div", {
            style: e.picker
        })
    };
    t.default = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ChromePointerCircle = void 0;
    var n = a(r(0)),
        o = a(r(1));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = t.ChromePointerCircle = function() {
        var e = (0, o.default)({
            default: {
                picker: {
                    width: "12px",
                    height: "12px",
                    borderRadius: "6px",
                    boxShadow: "inset 0 0 0 1px #fff",
                    transform: "translate(-6px, -6px)"
                }
            }
        });
        return n.default.createElement("div", {
            style: e.picker
        })
    };
    t.default = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Compact = void 0;
    var n = d(r(0)),
        o = d(r(4)),
        a = d(r(1)),
        i = d(r(10)),
        l = d(r(5)),
        u = d(r(8)),
        c = r(2),
        s = d(r(224)),
        f = d(r(225));

    function d(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var p = t.Compact = function(e) {
        var t = e.onChange,
            r = e.onSwatchHover,
            o = e.colors,
            d = e.hex,
            p = e.rgb,
            h = e.styles,
            b = void 0 === h ? {} : h,
            v = e.className,
            g = void 0 === v ? "" : v,
            y = (0, a.default)((0, l.default)({
                default: {
                    Compact: {
                        background: "#f6f6f6",
                        radius: "4px"
                    },
                    compact: {
                        paddingTop: "5px",
                        paddingLeft: "5px",
                        boxSizing: "initial",
                        width: "240px"
                    },
                    clear: {
                        clear: "both"
                    }
                }
            }, b)),
            x = function(e, r) {
                e.hex ? u.default.isValidHex(e.hex) && t({
                    hex: e.hex,
                    source: "hex"
                }, r) : t(e, r)
            };
        return n.default.createElement(c.Raised, {
            style: y.Compact,
            styles: b
        }, n.default.createElement("div", {
            style: y.compact,
            className: "compact-picker " + g
        }, n.default.createElement("div", null, (0, i.default)(o, (function(e) {
            return n.default.createElement(s.default, {
                key: e,
                color: e,
                active: e.toLowerCase() === d,
                onClick: x,
                onSwatchHover: r
            })
        })), n.default.createElement("div", {
            style: y.clear
        })), n.default.createElement(f.default, {
            hex: d,
            rgb: p,
            onChange: x
        })))
    };
    p.propTypes = {
        colors: o.default.arrayOf(o.default.string),
        styles: o.default.object
    }, p.defaultProps = {
        colors: ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#cccccc", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"],
        styles: {}
    }, t.default = (0, c.ColorWrap)(p)
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CompactColor = void 0;
    var n = l(r(0)),
        o = l(r(1)),
        a = l(r(8)),
        i = r(2);

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = t.CompactColor = function(e) {
        var t = e.color,
            r = e.onClick,
            l = void 0 === r ? function() {} : r,
            u = e.onSwatchHover,
            c = e.active,
            s = (0, o.default)({
                default: {
                    color: {
                        background: t,
                        width: "15px",
                        height: "15px",
                        float: "left",
                        marginRight: "5px",
                        marginBottom: "5px",
                        position: "relative",
                        cursor: "pointer"
                    },
                    dot: {
                        absolute: "5px 5px 5px 5px",
                        background: a.default.getContrastingColor(t),
                        borderRadius: "50%",
                        opacity: "0"
                    }
                },
                active: {
                    dot: {
                        opacity: "1"
                    }
                },
                "color-#FFFFFF": {
                    color: {
                        boxShadow: "inset 0 0 0 1px #ddd"
                    },
                    dot: {
                        background: "#000"
                    }
                },
                transparent: {
                    dot: {
                        background: "#000"
                    }
                }
            }, {
                active: c,
                "color-#FFFFFF": "#FFFFFF" === t,
                transparent: "transparent" === t
            });
        return n.default.createElement(i.Swatch, {
            style: s.color,
            color: t,
            onClick: l,
            onHover: u,
            focusStyle: {
                boxShadow: "0 0 4px " + t
            }
        }, n.default.createElement("div", {
            style: s.dot
        }))
    };
    t.default = u
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CompactFields = void 0;
    var n = i(r(0)),
        o = i(r(1)),
        a = r(2);

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = t.CompactFields = function(e) {
        var t = e.hex,
            r = e.rgb,
            i = e.onChange,
            l = (0, o.default)({
                default: {
                    fields: {
                        display: "flex",
                        paddingBottom: "6px",
                        paddingRight: "5px",
                        position: "relative"
                    },
                    active: {
                        position: "absolute",
                        top: "6px",
                        left: "5px",
                        height: "9px",
                        width: "9px",
                        background: t
                    },
                    HEXwrap: {
                        flex: "6",
                        position: "relative"
                    },
                    HEXinput: {
                        width: "80%",
                        padding: "0px",
                        paddingLeft: "20%",
                        border: "none",
                        outline: "none",
                        background: "none",
                        fontSize: "12px",
                        color: "#333",
                        height: "16px"
                    },
                    HEXlabel: {
                        display: "none"
                    },
                    RGBwrap: {
                        flex: "3",
                        position: "relative"
                    },
                    RGBinput: {
                        width: "70%",
                        padding: "0px",
                        paddingLeft: "30%",
                        border: "none",
                        outline: "none",
                        background: "none",
                        fontSize: "12px",
                        color: "#333",
                        height: "16px"
                    },
                    RGBlabel: {
                        position: "absolute",
                        top: "3px",
                        left: "0px",
                        lineHeight: "16px",
                        textTransform: "uppercase",
                        fontSize: "12px",
                        color: "#999"
                    }
                }
            }),
            u = function(e, t) {
                e.r || e.g || e.b ? i({
                    r: e.r || r.r,
                    g: e.g || r.g,
                    b: e.b || r.b,
                    source: "rgb"
                }, t) : i({
                    hex: e.hex,
                    source: "hex"
                }, t)
            };
        return n.default.createElement("div", {
            style: l.fields,
            className: "flexbox-fix"
        }, n.default.createElement("div", {
            style: l.active
        }), n.default.createElement(a.EditableInput, {
            style: {
                wrap: l.HEXwrap,
                input: l.HEXinput,
                label: l.HEXlabel
            },
            label: "hex",
            value: t,
            onChange: u
        }), n.default.createElement(a.EditableInput, {
            style: {
                wrap: l.RGBwrap,
                input: l.RGBinput,
                label: l.RGBlabel
            },
            label: "r",
            value: r.r,
            onChange: u
        }), n.default.createElement(a.EditableInput, {
            style: {
                wrap: l.RGBwrap,
                input: l.RGBinput,
                label: l.RGBlabel
            },
            label: "g",
            value: r.g,
            onChange: u
        }), n.default.createElement(a.EditableInput, {
            style: {
                wrap: l.RGBwrap,
                input: l.RGBinput,
                label: l.RGBlabel
            },
            label: "b",
            value: r.b,
            onChange: u
        }))
    };
    t.default = l
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Github = void 0;
    var n = s(r(0)),
        o = s(r(4)),
        a = s(r(1)),
        i = s(r(10)),
        l = s(r(5)),
        u = r(2),
        c = s(r(227));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = t.Github = function(e) {
        var t = e.width,
            r = e.colors,
            o = e.onChange,
            u = e.onSwatchHover,
            s = e.triangle,
            f = e.styles,
            d = void 0 === f ? {} : f,
            p = e.className,
            h = void 0 === p ? "" : p,
            b = (0, a.default)((0, l.default)({
                default: {
                    card: {
                        width: t,
                        background: "#fff",
                        border: "1px solid rgba(0,0,0,0.2)",
                        boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
                        borderRadius: "4px",
                        position: "relative",
                        padding: "5px",
                        display: "flex",
                        flexWrap: "wrap"
                    },
                    triangle: {
                        position: "absolute",
                        border: "7px solid transparent",
                        borderBottomColor: "#fff"
                    },
                    triangleShadow: {
                        position: "absolute",
                        border: "8px solid transparent",
                        borderBottomColor: "rgba(0,0,0,0.15)"
                    }
                },
                "hide-triangle": {
                    triangle: {
                        display: "none"
                    },
                    triangleShadow: {
                        display: "none"
                    }
                },
                "top-left-triangle": {
                    triangle: {
                        top: "-14px",
                        left: "10px"
                    },
                    triangleShadow: {
                        top: "-16px",
                        left: "9px"
                    }
                },
                "top-right-triangle": {
                    triangle: {
                        top: "-14px",
                        right: "10px"
                    },
                    triangleShadow: {
                        top: "-16px",
                        right: "9px"
                    }
                },
                "bottom-left-triangle": {
                    triangle: {
                        top: "35px",
                        left: "10px",
                        transform: "rotate(180deg)"
                    },
                    triangleShadow: {
                        top: "37px",
                        left: "9px",
                        transform: "rotate(180deg)"
                    }
                },
                "bottom-right-triangle": {
                    triangle: {
                        top: "35px",
                        right: "10px",
                        transform: "rotate(180deg)"
                    },
                    triangleShadow: {
                        top: "37px",
                        right: "9px",
                        transform: "rotate(180deg)"
                    }
                }
            }, d), {
                "hide-triangle": "hide" === s,
                "top-left-triangle": "top-left" === s,
                "top-right-triangle": "top-right" === s,
                "bottom-left-triangle": "bottom-left" === s,
                "bottom-right-triangle": "bottom-right" === s
            }),
            v = function(e, t) {
                return o({
                    hex: e,
                    source: "hex"
                }, t)
            };
        return n.default.createElement("div", {
            style: b.card,
            className: "github-picker " + h
        }, n.default.createElement("div", {
            style: b.triangleShadow
        }), n.default.createElement("div", {
            style: b.triangle
        }), (0, i.default)(r, (function(e) {
            return n.default.createElement(c.default, {
                color: e,
                key: e,
                onClick: v,
                onSwatchHover: u
            })
        })))
    };
    f.propTypes = {
        width: o.default.oneOfType([o.default.string, o.default.number]),
        colors: o.default.arrayOf(o.default.string),
        triangle: o.default.oneOf(["hide", "top-left", "top-right", "bottom-left", "bottom-right"]),
        styles: o.default.object
    }, f.defaultProps = {
        width: 200,
        colors: ["#B80000", "#DB3E00", "#FCCB00", "#008B02", "#006B76", "#1273DE", "#004DCF", "#5300EB", "#EB9694", "#FAD0C3", "#FEF3BD", "#C1E1C5", "#BEDADC", "#C4DEF6", "#BED3F3", "#D4C4FB"],
        triangle: "top-left",
        styles: {}
    }, t.default = (0, u.ColorWrap)(f)
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.GithubSwatch = void 0;
    var n = l(r(0)),
        o = r(1),
        a = l(o),
        i = r(2);

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = t.GithubSwatch = function(e) {
        var t = e.hover,
            r = e.color,
            o = e.onClick,
            l = e.onSwatchHover,
            u = {
                position: "relative",
                zIndex: "2",
                outline: "2px solid #fff",
                boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)"
            },
            c = (0, a.default)({
                default: {
                    swatch: {
                        width: "25px",
                        height: "25px",
                        fontSize: "0"
                    }
                },
                hover: {
                    swatch: u
                }
            }, {
                hover: t
            });
        return n.default.createElement("div", {
            style: c.swatch
        }, n.default.createElement(i.Swatch, {
            color: r,
            onClick: o,
            onHover: l,
            focusStyle: u
        }))
    };
    t.default = (0, o.handleHover)(u)
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HuePicker = void 0;
    var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        o = s(r(0)),
        a = s(r(4)),
        i = s(r(1)),
        l = s(r(5)),
        u = r(2),
        c = s(r(229));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = t.HuePicker = function(e) {
        var t = e.width,
            r = e.height,
            a = e.onChange,
            c = e.hsl,
            s = e.direction,
            f = e.pointer,
            d = e.styles,
            p = void 0 === d ? {} : d,
            h = e.className,
            b = void 0 === h ? "" : h,
            v = (0, i.default)((0, l.default)({
                default: {
                    picker: {
                        position: "relative",
                        width: t,
                        height: r
                    },
                    hue: {
                        radius: "2px"
                    }
                }
            }, p));
        return o.default.createElement("div", {
            style: v.picker,
            className: "hue-picker " + b
        }, o.default.createElement(u.Hue, n({}, v.hue, {
            hsl: c,
            pointer: f,
            onChange: function(e) {
                return a({
                    a: 1,
                    h: e.h,
                    l: .5,
                    s: 1
                })
            },
            direction: s
        })))
    };
    f.propTypes = {
        styles: a.default.object
    }, f.defaultProps = {
        width: "316px",
        height: "16px",
        direction: "horizontal",
        pointer: c.default,
        styles: {}
    }, t.default = (0, u.ColorWrap)(f)
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SliderPointer = void 0;
    var n = a(r(0)),
        o = a(r(1));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = t.SliderPointer = function(e) {
        var t = e.direction,
            r = (0, o.default)({
                default: {
                    picker: {
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        transform: "translate(-9px, -1px)",
                        backgroundColor: "rgb(248, 248, 248)",
                        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
                    }
                },
                vertical: {
                    picker: {
                        transform: "translate(-3px, -9px)"
                    }
                }
            }, {
                vertical: "vertical" === t
            });
        return n.default.createElement("div", {
            style: r.picker
        })
    };
    t.default = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Material = void 0;
    var n = u(r(0)),
        o = u(r(1)),
        a = u(r(5)),
        i = u(r(8)),
        l = r(2);

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = t.Material = function(e) {
        var t = e.onChange,
            r = e.hex,
            u = e.rgb,
            c = e.styles,
            s = void 0 === c ? {} : c,
            f = e.className,
            d = void 0 === f ? "" : f,
            p = (0, o.default)((0, a.default)({
                default: {
                    material: {
                        width: "98px",
                        height: "98px",
                        padding: "16px",
                        fontFamily: "Roboto"
                    },
                    HEXwrap: {
                        position: "relative"
                    },
                    HEXinput: {
                        width: "100%",
                        marginTop: "12px",
                        fontSize: "15px",
                        color: "#333",
                        padding: "0px",
                        border: "0px",
                        borderBottom: "2px solid " + r,
                        outline: "none",
                        height: "30px"
                    },
                    HEXlabel: {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        fontSize: "11px",
                        color: "#999999",
                        textTransform: "capitalize"
                    },
                    Hex: {
                        style: {}
                    },
                    RGBwrap: {
                        position: "relative"
                    },
                    RGBinput: {
                        width: "100%",
                        marginTop: "12px",
                        fontSize: "15px",
                        color: "#333",
                        padding: "0px",
                        border: "0px",
                        borderBottom: "1px solid #eee",
                        outline: "none",
                        height: "30px"
                    },
                    RGBlabel: {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        fontSize: "11px",
                        color: "#999999",
                        textTransform: "capitalize"
                    },
                    split: {
                        display: "flex",
                        marginRight: "-10px",
                        paddingTop: "11px"
                    },
                    third: {
                        flex: "1",
                        paddingRight: "10px"
                    }
                }
            }, s)),
            h = function(e, r) {
                e.hex ? i.default.isValidHex(e.hex) && t({
                    hex: e.hex,
                    source: "hex"
                }, r) : (e.r || e.g || e.b) && t({
                    r: e.r || u.r,
                    g: e.g || u.g,
                    b: e.b || u.b,
                    source: "rgb"
                }, r)
            };
        return n.default.createElement(l.Raised, {
            styles: s
        }, n.default.createElement("div", {
            style: p.material,
            className: "material-picker " + d
        }, n.default.createElement(l.EditableInput, {
            style: {
                wrap: p.HEXwrap,
                input: p.HEXinput,
                label: p.HEXlabel
            },
            label: "hex",
            value: r,
            onChange: h
        }), n.default.createElement("div", {
            style: p.split,
            className: "flexbox-fix"
        }, n.default.createElement("div", {
            style: p.third
        }, n.default.createElement(l.EditableInput, {
            style: {
                wrap: p.RGBwrap,
                input: p.RGBinput,
                label: p.RGBlabel
            },
            label: "r",
            value: u.r,
            onChange: h
        })), n.default.createElement("div", {
            style: p.third
        }, n.default.createElement(l.EditableInput, {
            style: {
                wrap: p.RGBwrap,
                input: p.RGBinput,
                label: p.RGBlabel
            },
            label: "g",
            value: u.g,
            onChange: h
        })), n.default.createElement("div", {
            style: p.third
        }, n.default.createElement(l.EditableInput, {
            style: {
                wrap: p.RGBwrap,
                input: p.RGBinput,
                label: p.RGBlabel
            },
            label: "b",
            value: u.b,
            onChange: h
        })))))
    };
    t.default = (0, l.ColorWrap)(c)
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Photoshop = void 0;
    var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }(),
        o = h(r(0)),
        a = h(r(4)),
        i = h(r(1)),
        l = h(r(5)),
        u = r(2),
        c = h(r(232)),
        s = h(r(233)),
        f = h(r(234)),
        d = h(r(235)),
        p = h(r(236));

    function h(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var b = t.Photoshop = function(e) {
        function t(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var r = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return r.state = {
                currentColor: e.hex
            }, r
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), n(t, [{
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.styles,
                    r = void 0 === t ? {} : t,
                    n = e.className,
                    a = void 0 === n ? "" : n,
                    h = (0, i.default)((0, l.default)({
                        default: {
                            picker: {
                                background: "#DCDCDC",
                                borderRadius: "4px",
                                boxShadow: "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
                                boxSizing: "initial",
                                width: "513px"
                            },
                            head: {
                                backgroundImage: "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
                                borderBottom: "1px solid #B1B1B1",
                                boxShadow: "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
                                height: "23px",
                                lineHeight: "24px",
                                borderRadius: "4px 4px 0 0",
                                fontSize: "13px",
                                color: "#4D4D4D",
                                textAlign: "center"
                            },
                            body: {
                                padding: "15px 15px 0",
                                display: "flex"
                            },
                            saturation: {
                                width: "256px",
                                height: "256px",
                                position: "relative",
                                border: "2px solid #B3B3B3",
                                borderBottom: "2px solid #F0F0F0",
                                overflow: "hidden"
                            },
                            hue: {
                                position: "relative",
                                height: "256px",
                                width: "19px",
                                marginLeft: "10px",
                                border: "2px solid #B3B3B3",
                                borderBottom: "2px solid #F0F0F0"
                            },
                            controls: {
                                width: "180px",
                                marginLeft: "10px"
                            },
                            top: {
                                display: "flex"
                            },
                            previews: {
                                width: "60px"
                            },
                            actions: {
                                flex: "1",
                                marginLeft: "20px"
                            }
                        }
                    }, r));
                return o.default.createElement("div", {
                    style: h.picker,
                    className: "photoshop-picker " + a
                }, o.default.createElement("div", {
                    style: h.head
                }, this.props.header), o.default.createElement("div", {
                    style: h.body,
                    className: "flexbox-fix"
                }, o.default.createElement("div", {
                    style: h.saturation
                }, o.default.createElement(u.Saturation, {
                    hsl: this.props.hsl,
                    hsv: this.props.hsv,
                    pointer: s.default,
                    onChange: this.props.onChange
                })), o.default.createElement("div", {
                    style: h.hue
                }, o.default.createElement(u.Hue, {
                    direction: "vertical",
                    hsl: this.props.hsl,
                    pointer: f.default,
                    onChange: this.props.onChange
                })), o.default.createElement("div", {
                    style: h.controls
                }, o.default.createElement("div", {
                    style: h.top,
                    className: "flexbox-fix"
                }, o.default.createElement("div", {
                    style: h.previews
                }, o.default.createElement(p.default, {
                    rgb: this.props.rgb,
                    currentColor: this.state.currentColor
                })), o.default.createElement("div", {
                    style: h.actions
                }, o.default.createElement(d.default, {
                    label: "OK",
                    onClick: this.props.onAccept,
                    active: !0
                }), o.default.createElement(d.default, {
                    label: "Cancel",
                    onClick: this.props.onCancel
                }), o.default.createElement(c.default, {
                    onChange: this.props.onChange,
                    rgb: this.props.rgb,
                    hsv: this.props.hsv,
                    hex: this.props.hex
                }))))))
            }
        }]), t
    }(o.default.Component);
    b.propTypes = {
        header: a.default.string,
        styles: a.default.object
    }, b.defaultProps = {
        header: "Color Picker",
        styles: {}
    }, t.default = (0, u.ColorWrap)(b)
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PhotoshopPicker = void 0;
    var n = l(r(0)),
        o = l(r(1)),
        a = l(r(8)),
        i = r(2);

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = t.PhotoshopPicker = function(e) {
        var t = e.onChange,
            r = e.rgb,
            l = e.hsv,
            u = e.hex,
            c = (0, o.default)({
                default: {
                    fields: {
                        paddingTop: "5px",
                        paddingBottom: "9px",
                        width: "80px",
                        position: "relative"
                    },
                    divider: {
                        height: "5px"
                    },
                    RGBwrap: {
                        position: "relative"
                    },
                    RGBinput: {
                        marginLeft: "40%",
                        width: "40%",
                        height: "18px",
                        border: "1px solid #888888",
                        boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
                        marginBottom: "5px",
                        fontSize: "13px",
                        paddingLeft: "3px",
                        marginRight: "10px"
                    },
                    RGBlabel: {
                        left: "0px",
                        width: "34px",
                        textTransform: "uppercase",
                        fontSize: "13px",
                        height: "18px",
                        lineHeight: "22px",
                        position: "absolute"
                    },
                    HEXwrap: {
                        position: "relative"
                    },
                    HEXinput: {
                        marginLeft: "20%",
                        width: "80%",
                        height: "18px",
                        border: "1px solid #888888",
                        boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
                        marginBottom: "6px",
                        fontSize: "13px",
                        paddingLeft: "3px"
                    },
                    HEXlabel: {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "14px",
                        textTransform: "uppercase",
                        fontSize: "13px",
                        height: "18px",
                        lineHeight: "22px"
                    },
                    fieldSymbols: {
                        position: "absolute",
                        top: "5px",
                        right: "-7px",
                        fontSize: "13px"
                    },
                    symbol: {
                        height: "20px",
                        lineHeight: "22px",
                        paddingBottom: "7px"
                    }
                }
            }),
            s = function(e, n) {
                e["#"] ? a.default.isValidHex(e["#"]) && t({
                    hex: e["#"],
                    source: "hex"
                }, n) : e.r || e.g || e.b ? t({
                    r: e.r || r.r,
                    g: e.g || r.g,
                    b: e.b || r.b,
                    source: "rgb"
                }, n) : (e.h || e.s || e.v) && t({
                    h: e.h || l.h,
                    s: e.s || l.s,
                    v: e.v || l.v,
                    source: "hsv"
                }, n)
            };
        return n.default.createElement("div", {
            style: c.fields
        }, n.default.createElement(i.EditableInput, {
            style: {
                wrap: c.RGBwrap,
                input: c.RGBinput,
                label: c.RGBlabel
            },
            label: "h",
            value: Math.round(l.h),
            onChange: s
        }), n.default.createElement(i.EditableInput, {
            style: {
                wrap: c.RGBwrap,
                input: c.RGBinput,
                label: c.RGBlabel
            },
            label: "s",
            value: Math.round(100 * l.s),
            onChange: s
        }), n.default.createElement(i.EditableInput, {
            style: {
                wrap: c.RGBwrap,
                input: c.RGBinput,
                label: c.RGBlabel
            },
            label: "v",
            value: Math.round(100 * l.v),
            onChange: s
        }), n.default.createElement("div", {
            style: c.divider
        }), n.default.createElement(i.EditableInput, {
            style: {
                wrap: c.RGBwrap,
                input: c.RGBinput,
                label: c.RGBlabel
            },
            label: "r",
            value: r.r,
            onChange: s
        }), n.default.createElement(i.EditableInput, {
            style: {
                wrap: c.RGBwrap,
                input: c.RGBinput,
                label: c.RGBlabel
            },
            label: "g",
            value: r.g,
            onChange: s
        }), n.default.createElement(i.EditableInput, {
            style: {
                wrap: c.RGBwrap,
                input: c.RGBinput,
                label: c.RGBlabel
            },
            label: "b",
            value: r.b,
            onChange: s
        }), n.default.createElement("div", {
            style: c.divider
        }), n.default.createElement(i.EditableInput, {
            style: {
                wrap: c.HEXwrap,
                input: c.HEXinput,
                label: c.HEXlabel
            },
            label: "#",
            value: u.replace("#", ""),
            onChange: s
        }), n.default.createElement("div", {
            style: c.fieldSymbols
        }, n.default.createElement("div", {
            style: c.symbol
        }, "°"), n.default.createElement("div", {
            style: c.symbol
        }, "%"), n.default.createElement("div", {
            style: c.symbol
        }, "%")))
    };
    t.default = u
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PhotoshopPointerCircle = void 0;
    var n = a(r(0)),
        o = a(r(1));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = t.PhotoshopPointerCircle = function(e) {
        var t = e.hsl,
            r = (0, o.default)({
                default: {
                    picker: {
                        width: "12px",
                        height: "12px",
                        borderRadius: "6px",
                        boxShadow: "inset 0 0 0 1px #fff",
                        transform: "translate(-6px, -6px)"
                    }
                },
                "black-outline": {
                    picker: {
                        boxShadow: "inset 0 0 0 1px #000"
                    }
                }
            }, {
                "black-outline": t.l > .5
            });
        return n.default.createElement("div", {
            style: r.picker
        })
    };
    t.default = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PhotoshopPointerCircle = void 0;
    var n = a(r(0)),
        o = a(r(1));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = t.PhotoshopPointerCircle = function() {
        var e = (0, o.default)({
            default: {
                triangle: {
                    width: 0,
                    height: 0,
                    borderStyle: "solid",
                    borderWidth: "4px 0 4px 6px",
                    borderColor: "transparent transparent transparent #fff",
                    position: "absolute",
                    top: "1px",
                    left: "1px"
                },
                triangleBorder: {
                    width: 0,
                    height: 0,
                    borderStyle: "solid",
                    borderWidth: "5px 0 5px 8px",
                    borderColor: "transparent transparent transparent #555"
                },
                left: {
                    Extend: "triangleBorder",
                    transform: "translate(-13px, -4px)"
                },
                leftInside: {
                    Extend: "triangle",
                    transform: "translate(-8px, -5px)"
                },
                right: {
                    Extend: "triangleBorder",
                    transform: "translate(20px, -14px) rotate(180deg)"
                },
                rightInside: {
                    Extend: "triangle",
                    transform: "translate(-8px, -5px)"
                }
            }
        });
        return n.default.createElement("div", {
            style: e.pointer
        }, n.default.createElement("div", {
            style: e.left
        }, n.default.createElement("div", {
            style: e.leftInside
        })), n.default.createElement("div", {
            style: e.right
        }, n.default.createElement("div", {
            style: e.rightInside
        })))
    };
    t.default = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PhotoshopButton = void 0;
    var n = a(r(0)),
        o = a(r(1));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = t.PhotoshopButton = function(e) {
        var t = e.onClick,
            r = e.label,
            a = e.children,
            i = e.active,
            l = (0, o.default)({
                default: {
                    button: {
                        backgroundImage: "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
                        border: "1px solid #878787",
                        borderRadius: "2px",
                        height: "20px",
                        boxShadow: "0 1px 0 0 #EAEAEA",
                        fontSize: "14px",
                        color: "#000",
                        lineHeight: "20px",
                        textAlign: "center",
                        marginBottom: "10px",
                        cursor: "pointer"
                    }
                },
                active: {
                    button: {
                        boxShadow: "0 0 0 1px #878787"
                    }
                }
            }, {
                active: i
            });
        return n.default.createElement("div", {
            style: l.button,
            onClick: t
        }, r || a)
    };
    t.default = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PhotoshopPreviews = void 0;
    var n = a(r(0)),
        o = a(r(1));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = t.PhotoshopPreviews = function(e) {
        var t = e.rgb,
            r = e.currentColor,
            a = (0, o.default)({
                default: {
                    swatches: {
                        border: "1px solid #B3B3B3",
                        borderBottom: "1px solid #F0F0F0",
                        marginBottom: "2px",
                        marginTop: "1px"
                    },
                    new: {
                        height: "34px",
                        background: "rgb(" + t.r + "," + t.g + ", " + t.b + ")",
                        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000"
                    },
                    current: {
                        height: "34px",
                        background: r,
                        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000"
                    },
                    label: {
                        fontSize: "14px",
                        color: "#000",
                        textAlign: "center"
                    }
                }
            });
        return n.default.createElement("div", null, n.default.createElement("div", {
            style: a.label
        }, "new"), n.default.createElement("div", {
            style: a.swatches
        }, n.default.createElement("div", {
            style: a.new
        }), n.default.createElement("div", {
            style: a.current
        })), n.default.createElement("div", {
            style: a.label
        }, "current"))
    };
    t.default = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Sketch = void 0;
    var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        o = f(r(0)),
        a = f(r(4)),
        i = f(r(1)),
        l = f(r(5)),
        u = r(2),
        c = f(r(238)),
        s = f(r(239));

    function f(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var d = t.Sketch = function(e) {
        var t = e.width,
            r = e.rgb,
            a = e.hex,
            f = e.hsv,
            d = e.hsl,
            p = e.onChange,
            h = e.onSwatchHover,
            b = e.disableAlpha,
            v = e.presetColors,
            g = e.renderers,
            y = e.styles,
            x = void 0 === y ? {} : y,
            m = e.className,
            w = void 0 === m ? "" : m,
            _ = (0, i.default)((0, l.default)({
                default: n({
                    picker: {
                        width: t,
                        padding: "10px 10px 0",
                        boxSizing: "initial",
                        background: "#fff",
                        borderRadius: "4px",
                        boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)"
                    },
                    saturation: {
                        width: "100%",
                        paddingBottom: "75%",
                        position: "relative",
                        overflow: "hidden"
                    },
                    Saturation: {
                        radius: "3px",
                        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
                    },
                    controls: {
                        display: "flex"
                    },
                    sliders: {
                        padding: "4px 0",
                        flex: "1"
                    },
                    color: {
                        width: "24px",
                        height: "24px",
                        position: "relative",
                        marginTop: "4px",
                        marginLeft: "4px",
                        borderRadius: "3px"
                    },
                    activeColor: {
                        absolute: "0px 0px 0px 0px",
                        borderRadius: "2px",
                        background: "rgba(" + r.r + "," + r.g + "," + r.b + "," + r.a + ")",
                        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
                    },
                    hue: {
                        position: "relative",
                        height: "10px",
                        overflow: "hidden"
                    },
                    Hue: {
                        radius: "2px",
                        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
                    },
                    alpha: {
                        position: "relative",
                        height: "10px",
                        marginTop: "4px",
                        overflow: "hidden"
                    },
                    Alpha: {
                        radius: "2px",
                        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
                    }
                }, x),
                disableAlpha: {
                    color: {
                        height: "10px"
                    },
                    hue: {
                        height: "10px"
                    },
                    alpha: {
                        display: "none"
                    }
                }
            }, x), {
                disableAlpha: b
            });
        return o.default.createElement("div", {
            style: _.picker,
            className: "sketch-picker " + w
        }, o.default.createElement("div", {
            style: _.saturation
        }, o.default.createElement(u.Saturation, {
            style: _.Saturation,
            hsl: d,
            hsv: f,
            onChange: p
        })), o.default.createElement("div", {
            style: _.controls,
            className: "flexbox-fix"
        }, o.default.createElement("div", {
            style: _.sliders
        }, o.default.createElement("div", {
            style: _.hue
        }, o.default.createElement(u.Hue, {
            style: _.Hue,
            hsl: d,
            onChange: p
        })), o.default.createElement("div", {
            style: _.alpha
        }, o.default.createElement(u.Alpha, {
            style: _.Alpha,
            rgb: r,
            hsl: d,
            renderers: g,
            onChange: p
        }))), o.default.createElement("div", {
            style: _.color
        }, o.default.createElement(u.Checkboard, null), o.default.createElement("div", {
            style: _.activeColor
        }))), o.default.createElement(c.default, {
            rgb: r,
            hsl: d,
            hex: a,
            onChange: p,
            disableAlpha: b
        }), o.default.createElement(s.default, {
            colors: v,
            onClick: p,
            onSwatchHover: h
        }))
    };
    d.propTypes = {
        disableAlpha: a.default.bool,
        width: a.default.oneOfType([a.default.string, a.default.number]),
        styles: a.default.object
    }, d.defaultProps = {
        disableAlpha: !1,
        width: 200,
        styles: {},
        presetColors: ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF"]
    }, t.default = (0, u.ColorWrap)(d)
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SketchFields = void 0;
    var n = l(r(0)),
        o = l(r(1)),
        a = l(r(8)),
        i = r(2);

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = t.SketchFields = function(e) {
        var t = e.onChange,
            r = e.rgb,
            l = e.hsl,
            u = e.hex,
            c = e.disableAlpha,
            s = (0, o.default)({
                default: {
                    fields: {
                        display: "flex",
                        paddingTop: "4px"
                    },
                    single: {
                        flex: "1",
                        paddingLeft: "6px"
                    },
                    alpha: {
                        flex: "1",
                        paddingLeft: "6px"
                    },
                    double: {
                        flex: "2"
                    },
                    input: {
                        width: "80%",
                        padding: "4px 10% 3px",
                        border: "none",
                        boxShadow: "inset 0 0 0 1px #ccc",
                        fontSize: "11px"
                    },
                    label: {
                        display: "block",
                        textAlign: "center",
                        fontSize: "11px",
                        color: "#222",
                        paddingTop: "3px",
                        paddingBottom: "4px",
                        textTransform: "capitalize"
                    }
                },
                disableAlpha: {
                    alpha: {
                        display: "none"
                    }
                }
            }, {
                disableAlpha: c
            }),
            f = function(e, n) {
                e.hex ? a.default.isValidHex(e.hex) && t({
                    hex: e.hex,
                    source: "hex"
                }, n) : e.r || e.g || e.b ? t({
                    r: e.r || r.r,
                    g: e.g || r.g,
                    b: e.b || r.b,
                    a: r.a,
                    source: "rgb"
                }, n) : e.a && (e.a < 0 ? e.a = 0 : e.a > 100 && (e.a = 100), e.a /= 100, t({
                    h: l.h,
                    s: l.s,
                    l: l.l,
                    a: e.a,
                    source: "rgb"
                }, n))
            };
        return n.default.createElement("div", {
            style: s.fields,
            className: "flexbox-fix"
        }, n.default.createElement("div", {
            style: s.double
        }, n.default.createElement(i.EditableInput, {
            style: {
                input: s.input,
                label: s.label
            },
            label: "hex",
            value: u.replace("#", ""),
            onChange: f
        })), n.default.createElement("div", {
            style: s.single
        }, n.default.createElement(i.EditableInput, {
            style: {
                input: s.input,
                label: s.label
            },
            label: "r",
            value: r.r,
            onChange: f,
            dragLabel: "true",
            dragMax: "255"
        })), n.default.createElement("div", {
            style: s.single
        }, n.default.createElement(i.EditableInput, {
            style: {
                input: s.input,
                label: s.label
            },
            label: "g",
            value: r.g,
            onChange: f,
            dragLabel: "true",
            dragMax: "255"
        })), n.default.createElement("div", {
            style: s.single
        }, n.default.createElement(i.EditableInput, {
            style: {
                input: s.input,
                label: s.label
            },
            label: "b",
            value: r.b,
            onChange: f,
            dragLabel: "true",
            dragMax: "255"
        })), n.default.createElement("div", {
            style: s.alpha
        }, n.default.createElement(i.EditableInput, {
            style: {
                input: s.input,
                label: s.label
            },
            label: "a",
            value: Math.round(100 * r.a),
            onChange: f,
            dragLabel: "true",
            dragMax: "100"
        })))
    };
    t.default = u
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SketchPresetColors = void 0;
    var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        o = u(r(0)),
        a = u(r(4)),
        i = u(r(1)),
        l = r(2);

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = t.SketchPresetColors = function(e) {
        var t = e.colors,
            r = e.onClick,
            a = void 0 === r ? function() {} : r,
            u = e.onSwatchHover,
            c = (0, i.default)({
                default: {
                    colors: {
                        margin: "0 -10px",
                        padding: "10px 0 0 10px",
                        borderTop: "1px solid #eee",
                        display: "flex",
                        flexWrap: "wrap",
                        position: "relative"
                    },
                    swatchWrap: {
                        width: "16px",
                        height: "16px",
                        margin: "0 10px 10px 0"
                    },
                    swatch: {
                        borderRadius: "3px",
                        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)"
                    }
                },
                "no-presets": {
                    colors: {
                        display: "none"
                    }
                }
            }, {
                "no-presets": !t || !t.length
            }),
            s = function(e, t) {
                a({
                    hex: e,
                    source: "hex"
                }, t)
            };
        return o.default.createElement("div", {
            style: c.colors,
            className: "flexbox-fix"
        }, t.map((function(e) {
            var t = "string" == typeof e ? {
                    color: e
                } : e,
                r = "" + t.color + (t.title || "");
            return o.default.createElement("div", {
                key: r,
                style: c.swatchWrap
            }, o.default.createElement(l.Swatch, n({}, t, {
                style: c.swatch,
                onClick: s,
                onHover: u,
                focusStyle: {
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + t.color
                }
            })))
        })))
    };
    c.propTypes = {
        colors: a.default.arrayOf(a.default.oneOfType([a.default.string, a.default.shape({
            color: a.default.string,
            title: a.default.string
        })])).isRequired
    }, t.default = c
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Slider = void 0;
    var n = s(r(0)),
        o = s(r(4)),
        a = s(r(1)),
        i = s(r(5)),
        l = r(2),
        u = s(r(241)),
        c = s(r(243));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = t.Slider = function(e) {
        var t = e.hsl,
            r = e.onChange,
            o = e.pointer,
            c = e.styles,
            s = void 0 === c ? {} : c,
            f = e.className,
            d = void 0 === f ? "" : f,
            p = (0, a.default)((0, i.default)({
                default: {
                    hue: {
                        height: "12px",
                        position: "relative"
                    },
                    Hue: {
                        radius: "2px"
                    }
                }
            }, s));
        return n.default.createElement("div", {
            style: p.wrap || {},
            className: "slider-picker " + d
        }, n.default.createElement("div", {
            style: p.hue
        }, n.default.createElement(l.Hue, {
            style: p.Hue,
            hsl: t,
            pointer: o,
            onChange: r
        })), n.default.createElement("div", {
            style: p.swatches
        }, n.default.createElement(u.default, {
            hsl: t,
            onClick: r
        })))
    };
    f.propTypes = {
        styles: o.default.object
    }, f.defaultProps = {
        pointer: c.default,
        styles: {}
    }, t.default = (0, l.ColorWrap)(f)
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SliderSwatches = void 0;
    var n = i(r(0)),
        o = i(r(1)),
        a = i(r(242));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = t.SliderSwatches = function(e) {
        var t = e.onClick,
            r = e.hsl,
            i = (0, o.default)({
                default: {
                    swatches: {
                        marginTop: "20px"
                    },
                    swatch: {
                        boxSizing: "border-box",
                        width: "20%",
                        paddingRight: "1px",
                        float: "left"
                    },
                    clear: {
                        clear: "both"
                    }
                }
            });
        return n.default.createElement("div", {
            style: i.swatches
        }, n.default.createElement("div", {
            style: i.swatch
        }, n.default.createElement(a.default, {
            hsl: r,
            offset: ".80",
            active: Math.abs(r.l - .8) < .1 && Math.abs(r.s - .5) < .1,
            onClick: t,
            first: !0
        })), n.default.createElement("div", {
            style: i.swatch
        }, n.default.createElement(a.default, {
            hsl: r,
            offset: ".65",
            active: Math.abs(r.l - .65) < .1 && Math.abs(r.s - .5) < .1,
            onClick: t
        })), n.default.createElement("div", {
            style: i.swatch
        }, n.default.createElement(a.default, {
            hsl: r,
            offset: ".50",
            active: Math.abs(r.l - .5) < .1 && Math.abs(r.s - .5) < .1,
            onClick: t
        })), n.default.createElement("div", {
            style: i.swatch
        }, n.default.createElement(a.default, {
            hsl: r,
            offset: ".35",
            active: Math.abs(r.l - .35) < .1 && Math.abs(r.s - .5) < .1,
            onClick: t
        })), n.default.createElement("div", {
            style: i.swatch
        }, n.default.createElement(a.default, {
            hsl: r,
            offset: ".20",
            active: Math.abs(r.l - .2) < .1 && Math.abs(r.s - .5) < .1,
            onClick: t,
            last: !0
        })), n.default.createElement("div", {
            style: i.clear
        }))
    };
    t.default = l
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SliderSwatch = void 0;
    var n = a(r(0)),
        o = a(r(1));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = t.SliderSwatch = function(e) {
        var t = e.hsl,
            r = e.offset,
            a = e.onClick,
            i = void 0 === a ? function() {} : a,
            l = e.active,
            u = e.first,
            c = e.last,
            s = (0, o.default)({
                default: {
                    swatch: {
                        height: "12px",
                        background: "hsl(" + t.h + ", 50%, " + 100 * r + "%)",
                        cursor: "pointer"
                    }
                },
                first: {
                    swatch: {
                        borderRadius: "2px 0 0 2px"
                    }
                },
                last: {
                    swatch: {
                        borderRadius: "0 2px 2px 0"
                    }
                },
                active: {
                    swatch: {
                        transform: "scaleY(1.8)",
                        borderRadius: "3.6px/2px"
                    }
                }
            }, {
                active: l,
                first: u,
                last: c
            });
        return n.default.createElement("div", {
            style: s.swatch,
            onClick: function(e) {
                return i({
                    h: t.h,
                    s: .5,
                    l: r,
                    source: "hsl"
                }, e)
            }
        })
    };
    t.default = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SliderPointer = void 0;
    var n = a(r(0)),
        o = a(r(1));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = t.SliderPointer = function() {
        var e = (0, o.default)({
            default: {
                picker: {
                    width: "14px",
                    height: "14px",
                    borderRadius: "6px",
                    transform: "translate(-7px, -1px)",
                    backgroundColor: "rgb(248, 248, 248)",
                    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
                }
            }
        });
        return n.default.createElement("div", {
            style: e.picker
        })
    };
    t.default = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Swatches = void 0;
    var n = d(r(0)),
        o = d(r(4)),
        a = d(r(1)),
        i = d(r(10)),
        l = d(r(5)),
        u = d(r(8)),
        c = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }(r(80)),
        s = r(2),
        f = d(r(245));

    function d(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var p = t.Swatches = function(e) {
        var t = e.width,
            r = e.height,
            o = e.onChange,
            c = e.onSwatchHover,
            d = e.colors,
            p = e.hex,
            h = e.styles,
            b = void 0 === h ? {} : h,
            v = e.className,
            g = void 0 === v ? "" : v,
            y = (0, a.default)((0, l.default)({
                default: {
                    picker: {
                        width: t,
                        height: r
                    },
                    overflow: {
                        height: r,
                        overflowY: "scroll"
                    },
                    body: {
                        padding: "16px 0 6px 16px"
                    },
                    clear: {
                        clear: "both"
                    }
                }
            }, b)),
            x = function(e, t) {
                u.default.isValidHex(e) && o({
                    hex: e,
                    source: "hex"
                }, t)
            };
        return n.default.createElement("div", {
            style: y.picker,
            className: "swatches-picker " + g
        }, n.default.createElement(s.Raised, null, n.default.createElement("div", {
            style: y.overflow
        }, n.default.createElement("div", {
            style: y.body
        }, (0, i.default)(d, (function(e) {
            return n.default.createElement(f.default, {
                key: e.toString(),
                group: e,
                active: p,
                onClick: x,
                onSwatchHover: c
            })
        })), n.default.createElement("div", {
            style: y.clear
        })))))
    };
    p.propTypes = {
        width: o.default.oneOfType([o.default.string, o.default.number]),
        height: o.default.oneOfType([o.default.string, o.default.number]),
        colors: o.default.arrayOf(o.default.arrayOf(o.default.string)),
        styles: o.default.object
    }, p.defaultProps = {
        width: 320,
        height: 240,
        colors: [
            [c.red[900], c.red[700], c.red[500], c.red[300], c.red[100]],
            [c.pink[900], c.pink[700], c.pink[500], c.pink[300], c.pink[100]],
            [c.purple[900], c.purple[700], c.purple[500], c.purple[300], c.purple[100]],
            [c.deepPurple[900], c.deepPurple[700], c.deepPurple[500], c.deepPurple[300], c.deepPurple[100]],
            [c.indigo[900], c.indigo[700], c.indigo[500], c.indigo[300], c.indigo[100]],
            [c.blue[900], c.blue[700], c.blue[500], c.blue[300], c.blue[100]],
            [c.lightBlue[900], c.lightBlue[700], c.lightBlue[500], c.lightBlue[300], c.lightBlue[100]],
            [c.cyan[900], c.cyan[700], c.cyan[500], c.cyan[300], c.cyan[100]],
            [c.teal[900], c.teal[700], c.teal[500], c.teal[300], c.teal[100]],
            ["#194D33", c.green[700], c.green[500], c.green[300], c.green[100]],
            [c.lightGreen[900], c.lightGreen[700], c.lightGreen[500], c.lightGreen[300], c.lightGreen[100]],
            [c.lime[900], c.lime[700], c.lime[500], c.lime[300], c.lime[100]],
            [c.yellow[900], c.yellow[700], c.yellow[500], c.yellow[300], c.yellow[100]],
            [c.amber[900], c.amber[700], c.amber[500], c.amber[300], c.amber[100]],
            [c.orange[900], c.orange[700], c.orange[500], c.orange[300], c.orange[100]],
            [c.deepOrange[900], c.deepOrange[700], c.deepOrange[500], c.deepOrange[300], c.deepOrange[100]],
            [c.brown[900], c.brown[700], c.brown[500], c.brown[300], c.brown[100]],
            [c.blueGrey[900], c.blueGrey[700], c.blueGrey[500], c.blueGrey[300], c.blueGrey[100]],
            ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"]
        ],
        styles: {}
    }, t.default = (0, s.ColorWrap)(p)
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SwatchesGroup = void 0;
    var n = l(r(0)),
        o = l(r(1)),
        a = l(r(10)),
        i = l(r(246));

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = t.SwatchesGroup = function(e) {
        var t = e.onClick,
            r = e.onSwatchHover,
            l = e.group,
            u = e.active,
            c = (0, o.default)({
                default: {
                    group: {
                        paddingBottom: "10px",
                        width: "40px",
                        float: "left",
                        marginRight: "10px"
                    }
                }
            });
        return n.default.createElement("div", {
            style: c.group
        }, (0, a.default)(l, (function(e, o) {
            return n.default.createElement(i.default, {
                key: e,
                color: e,
                active: e.toLowerCase() === u,
                first: 0 === o,
                last: o === l.length - 1,
                onClick: t,
                onSwatchHover: r
            })
        })))
    };
    t.default = u
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SwatchesColor = void 0;
    var n = u(r(0)),
        o = u(r(1)),
        a = u(r(8)),
        i = r(2),
        l = u(r(247));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = t.SwatchesColor = function(e) {
        var t = e.color,
            r = e.onClick,
            u = void 0 === r ? function() {} : r,
            c = e.onSwatchHover,
            s = e.first,
            f = e.last,
            d = e.active,
            p = (0, o.default)({
                default: {
                    color: {
                        width: "40px",
                        height: "24px",
                        cursor: "pointer",
                        background: t,
                        marginBottom: "1px"
                    },
                    check: {
                        color: a.default.getContrastingColor(t),
                        marginLeft: "8px",
                        display: "none"
                    }
                },
                first: {
                    color: {
                        overflow: "hidden",
                        borderRadius: "2px 2px 0 0"
                    }
                },
                last: {
                    color: {
                        overflow: "hidden",
                        borderRadius: "0 0 2px 2px"
                    }
                },
                active: {
                    check: {
                        display: "block"
                    }
                },
                "color-#FFFFFF": {
                    color: {
                        boxShadow: "inset 0 0 0 1px #ddd"
                    },
                    check: {
                        color: "#333"
                    }
                },
                transparent: {
                    check: {
                        color: "#333"
                    }
                }
            }, {
                first: s,
                last: f,
                active: d,
                "color-#FFFFFF": "#FFFFFF" === t,
                transparent: "transparent" === t
            });
        return n.default.createElement(i.Swatch, {
            color: t,
            style: p.color,
            onClick: u,
            onHover: c,
            focusStyle: {
                boxShadow: "0 0 4px " + t
            }
        }, n.default.createElement("div", {
            style: p.check
        }, n.default.createElement(l.default, null)))
    };
    t.default = c
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n, o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        a = r(0),
        i = (n = a) && n.__esModule ? n : {
            default: n
        };
    t.default = function(e) {
        var t = e.fill,
            r = void 0 === t ? "currentColor" : t,
            n = e.width,
            a = void 0 === n ? 24 : n,
            l = e.height,
            u = void 0 === l ? 24 : l,
            c = e.style,
            s = void 0 === c ? {} : c,
            f = function(e, t) {
                var r = {};
                for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                return r
            }(e, ["fill", "width", "height", "style"]);
        return i.default.createElement("svg", o({
            viewBox: "0 0 24 24",
            style: o({
                fill: r,
                width: a,
                height: u
            }, s)
        }, f), i.default.createElement("path", {
            d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
        }))
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Twitter = void 0;
    var n = s(r(0)),
        o = s(r(4)),
        a = s(r(1)),
        i = s(r(10)),
        l = s(r(5)),
        u = s(r(8)),
        c = r(2);

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = t.Twitter = function(e) {
        var t = e.onChange,
            r = e.onSwatchHover,
            o = e.hex,
            s = e.colors,
            f = e.width,
            d = e.triangle,
            p = e.styles,
            h = void 0 === p ? {} : p,
            b = e.className,
            v = void 0 === b ? "" : b,
            g = (0, a.default)((0, l.default)({
                default: {
                    card: {
                        width: f,
                        background: "#fff",
                        border: "0 solid rgba(0,0,0,0.25)",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                        borderRadius: "4px",
                        position: "relative"
                    },
                    body: {
                        padding: "15px 9px 9px 15px"
                    },
                    label: {
                        fontSize: "18px",
                        color: "#fff"
                    },
                    triangle: {
                        width: "0px",
                        height: "0px",
                        borderStyle: "solid",
                        borderWidth: "0 9px 10px 9px",
                        borderColor: "transparent transparent #fff transparent",
                        position: "absolute"
                    },
                    triangleShadow: {
                        width: "0px",
                        height: "0px",
                        borderStyle: "solid",
                        borderWidth: "0 9px 10px 9px",
                        borderColor: "transparent transparent rgba(0,0,0,.1) transparent",
                        position: "absolute"
                    },
                    hash: {
                        background: "#F0F0F0",
                        height: "30px",
                        width: "30px",
                        borderRadius: "4px 0 0 4px",
                        float: "left",
                        color: "#98A1A4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    input: {
                        width: "100px",
                        fontSize: "14px",
                        color: "#666",
                        border: "0px",
                        outline: "none",
                        height: "28px",
                        boxShadow: "inset 0 0 0 1px #F0F0F0",
                        boxSizing: "content-box",
                        borderRadius: "0 4px 4px 0",
                        float: "left",
                        paddingLeft: "8px"
                    },
                    swatch: {
                        width: "30px",
                        height: "30px",
                        float: "left",
                        borderRadius: "4px",
                        margin: "0 6px 6px 0"
                    },
                    clear: {
                        clear: "both"
                    }
                },
                "hide-triangle": {
                    triangle: {
                        display: "none"
                    },
                    triangleShadow: {
                        display: "none"
                    }
                },
                "top-left-triangle": {
                    triangle: {
                        top: "-10px",
                        left: "12px"
                    },
                    triangleShadow: {
                        top: "-11px",
                        left: "12px"
                    }
                },
                "top-right-triangle": {
                    triangle: {
                        top: "-10px",
                        right: "12px"
                    },
                    triangleShadow: {
                        top: "-11px",
                        right: "12px"
                    }
                }
            }, h), {
                "hide-triangle": "hide" === d,
                "top-left-triangle": "top-left" === d,
                "top-right-triangle": "top-right" === d
            }),
            y = function(e, r) {
                u.default.isValidHex(e) && t({
                    hex: e,
                    source: "hex"
                }, r)
            };
        return n.default.createElement("div", {
            style: g.card,
            className: "twitter-picker " + v
        }, n.default.createElement("div", {
            style: g.triangleShadow
        }), n.default.createElement("div", {
            style: g.triangle
        }), n.default.createElement("div", {
            style: g.body
        }, (0, i.default)(s, (function(e, t) {
            return n.default.createElement(c.Swatch, {
                key: t,
                color: e,
                hex: e,
                style: g.swatch,
                onClick: y,
                onHover: r,
                focusStyle: {
                    boxShadow: "0 0 4px " + e
                }
            })
        })), n.default.createElement("div", {
            style: g.hash
        }, "#"), n.default.createElement(c.EditableInput, {
            label: null,
            style: {
                input: g.input
            },
            value: o.replace("#", ""),
            onChange: y
        }), n.default.createElement("div", {
            style: g.clear
        })))
    };
    f.propTypes = {
        width: o.default.oneOfType([o.default.string, o.default.number]),
        triangle: o.default.oneOf(["hide", "top-left", "top-right"]),
        colors: o.default.arrayOf(o.default.string),
        styles: o.default.object
    }, f.defaultProps = {
        width: 276,
        colors: ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"],
        triangle: "top-left",
        styles: {}
    }, t.default = (0, c.ColorWrap)(f)
}, function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r(81),
        o = r.n(n),
        a = r(1),
        i = r.n(a);

    function l() {
        return (l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }).apply(this, arguments)
    }
    var u = function(e) {
        var t = function(t) {
                var r, n, o, a;
                return "array" === e.choices.save_as ? (r = Color(t), n = Color("#ffffff"), o = Color("#000000"), (a = {
                    r: r.r(),
                    g: r.g(),
                    b: r.b(),
                    h: r.h(),
                    s: r.s(),
                    l: r.l(),
                    a: r.a(),
                    v: r.toHsl().v
                }).hex = 1 === a.a ? r.toCSS() : r.clone().a(1).toCSS(), a.css = 1 === a.a ? a.hex : "rgba(" + a.r + "," + a.g + "," + a.b + "," + a.a + ")", a.a11y = {
                    luminance: r.toLuminosity(),
                    distanceFromWhite: r.getDistanceLuminosityFrom(n),
                    distanceFromBlack: r.getDistanceLuminosityFrom(o),
                    maxContrastColor: r.clone().a(1).getMaxContrastColor().toCSS(),
                    readableContrastingColorFromWhite: [r.clone().a(1).getReadableContrastingColor(n, 7).toCSS(), r.clone().a(1).getReadableContrastingColor(n, 4.5).toCSS()],
                    readableContrastingColorFromBlack: [r.clone().a(1).getReadableContrastingColor(o, 7).toCSS(), r.clone().a(1).getReadableContrastingColor(o, 4.5).toCSS()]
                }, a.a11y.isDark = a.a11y.distanceFromWhite > a.a11y.distanceFromBlack, a) : t
            },
            r = i()({
                default: {
                    textInput: {
                        fontFamily: "Menlo, Consolas, monaco, monospace",
                        borderRadius: "0 4px 4px 0",
                        width: "100%"
                    },
                    colorIndicator: {
                        background: e.value.css ? e.value.css : e.value,
                        display: "block",
                        width: "40px",
                        borderRadius: "4px 0 0 4px"
                    },
                    inputWrapper: {
                        display: "flex",
                        marginBottom: "12px"
                    },
                    resetButton: {}
                }
            });
        return React.createElement("div", null, React.createElement("label", {
            className: "customize-control-title",
            for: e.control.id + "-input"
        }, e.label), React.createElement("span", {
            className: "description customize-control-description",
            dangerouslySetInnerHTML: {
                __html: e.description
            }
        }), React.createElement("div", {
            className: "customize-control-notifications-container",
            ref: e.setNotificationContainer
        }), React.createElement("div", {
            style: r.inputWrapper
        }, React.createElement("span", {
            style: r.colorIndicator
        }), React.createElement("input", {
            type: "text",
            style: r.textInput,
            value: "array" === e.choices.save_as ? e.value.css : e.value,
            onChange: function(r) {
                wp.customize.control(e.customizerSetting.id).setting.set(t(r.target.value))
            },
            id: e.control.id + "-input"
        }), React.createElement("button", {
            className: "button",
            onClick: function(r) {
                r.preventDefault();
                var n = e.defaultValue ? e.defaultValue : "";
                "string" == typeof n && (n = t(n)), wp.customize.control(e.customizerSetting.id).setting.set(n)
            },
            style: r.resetButton
        }, window.wpColorPickerL10n.defaultString)), React.createElement(o.a, l({
            width: "300"
        }, e.choices, {
            color: "array" === e.choices.save_as ? e.value.css : e.value,
            onChangeComplete: function(r) {
                wp.customize.control(e.customizerSetting.id).setting.set(t(function(e) {
                    return "string" == typeof e ? e : e.css ? e.css : e.rgb && e.rgb.a && 1 > e.rgb.a ? "rgba(" + e.rgb.r + "," + e.rgb.g + "," + e.rgb.b + "," + e.rgb.a + ")" : e.hex ? e.hex : e
                }(r)))
            }
        })))
    };

    function c() {
        return (c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }).apply(this, arguments)
    }
    var s = wp.customize.Control.extend({
        ready: function() {
            var e = this;
            e.setting.bind((function() {
                e.renderContent()
            })), e.rgbaControlNotifications()
        },
        embed: function() {
            var e = this,
                t = e.section();
            t && wp.customize.section(t, (function(t) {
                t.expanded.bind((function(t) {
                    t && e.actuallyEmbed()
                }))
            }))
        },
        actuallyEmbed: function() {
            "resolved" !== this.deferred.embedded.state() && (this.renderContent(), this.deferred.embedded.resolve())
        },
        initialize: function(e, t) {
            var r = this;
            r.setNotificationContainer = r.setNotificationContainer.bind(r), wp.customize.Control.prototype.initialize.call(r, e, t), wp.customize.control.bind("removed", (function e(t) {
                r === t && (r.destroy(), r.container.remove(), wp.customize.control.unbind("removed", e))
            }))
        },
        setNotificationContainer: function(e) {
            this.notifications.container = jQuery(e), this.notifications.render()
        },
        renderContent: function() {
            var e = this.setting.get(),
                t = React.createElement(u, c({}, this.params, {
                    value: e,
                    setNotificationContainer: this.setNotificationContainer,
                    customizerSetting: this.setting,
                    control: this,
                    choices: this.params.choices,
                    default: this.params.defaultValue
                }));
            ReactDOM.render(t, this.container[0]), !1 !== this.params.choices.allowCollapse && this.container.addClass("allowCollapse colorPickerIsCollapsed")
        },
        destroy: function() {
            ReactDOM.unmountComponentAtNode(this.container[0]), wp.customize.Control.prototype.destroy && wp.customize.Control.prototype.destroy.call(this)
        },
        rgbaControlNotifications: function() {
            var e = "long_title",
                t = RegExp(/^(\#[\da-f]{3}|\#[\da-f]{6}|\#[\da-f]{8}|rgba\(((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*,\s*){2}((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*)(,\s*(0\.\d+|1))\)|hsla\(\s*((\d{1,2}|[1-2]\d{2}|3([0-5]\d|60)))\s*,\s*((\d{1,2}|100)\s*%)\s*,\s*((\d{1,2}|100)\s*%)(,\s*(0\.\d+|1))\)|rgb\(((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*,\s*){2}((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*)|hsl\(\s*((\d{1,2}|[1-2]\d{2}|3([0-5]\d|60)))\s*,\s*((\d{1,2}|100)\s*%)\s*,\s*((\d{1,2}|100)\s*%)\))$/);
            window._wpCustomizeControlsL10n.cheatin && wp.customize(this.id, (function(r) {
                r.bind((function(n) {
                    !1 === t.test(n) ? r.notifications.add(e, new wp.customize.Notification(e, {
                        type: "warning",
                        message: window._wpCustomizeControlsL10n.cheatin
                    })) : r.notifications.remove(e)
                }))
            }))
        }
    });
    wp.customize.controlConstructor["color-alpha"] = s
}]);