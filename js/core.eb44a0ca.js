 function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

    // Lorsque je soumets le formulaire
    $('#contact-form').on('submit', function(e) {
        e.preventDefault(); // J'empêche le comportement par défaut du navigateur, c-à-d de soumettre le formulaire

        var $this = $(this); // L'objet jQuery du formulaire

        // Je récupère les valeurs
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        // Je vérifie une première fois pour ne pas lancer la requête HTTP
        // si je sais que mon PHP renverra une erreur

        if (!name || !email || !IsEmail(email)){
            alert('Veuillez entrer un nom et/ou une addresse mail valide');
        }
        else
        {
            var mailContent = "Nouvelle demande de newsletter "+name+"\n Adresse mail : "+email;
            if(message)
                mailContent += " \n Message : "+message;

            // Envoi de la requête HTTP en mode asynchrone
            $.ajax({
                url: $this.attr('action'), // Le nom du fichier indiqué dans le formulaire
                method:"POST",
                dataType: "json", // La méthode indiquée dans le formulaire (get ou post)
                data: {message: message}, // Je sérialise les données (j'envoie toutes les valeurs présentes dans le formulaire)
                success: function(data, textStatus, xhr) {
                    if(xhr.status==200)
                    alert('Love, \n Wefoot');
                }
            });
        }
    });



! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = a.length,
            c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function d(a, b, c) {
        if (_.isFunction(b)) return _.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return _.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (hb.test(b)) return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c
        })
    }

    function e(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function f(a) {
        var b = ob[a] = {};
        return _.each(a.match(nb) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
    }

    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = _.expando + Math.random()
    }

    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(ub, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : tb.test(c) ? _.parseJSON(c) : c
                } catch (e) {}
                sb.set(a, b, c)
            } else c = void 0;
        return c
    }

    function j() {
        return !0
    }

    function k() {
        return !1
    }

    function l() {
        try {
            return Z.activeElement
        } catch (a) {}
    }

    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function o(a) {
        var b = Kb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++) rb.set(a[c], "globalEval", !b || rb.get(b[c], "globalEval"))
    }

    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (rb.hasData(a) && (f = rb.access(a), g = rb.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
            }
            sb.hasData(a) && (h = sb.access(a), i = _.extend({}, h), sb.set(b, i))
        }
    }

    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
    }

    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && yb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f
    }

    function u(a) {
        var b = Z,
            c = Ob[a];
        return c || (c = t(a, b), "none" !== c && c || (Nb = (Nb || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Nb[0].contentDocument, b.write(), b.close(), c = t(a, b), Nb.detach()), Ob[a] = c), c
    }

    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Rb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qb.test(g) && Pb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function w(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function x(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xb.length; e--;)
            if (b = Xb[e] + c, b in a) return b;
        return d
    }

    function y(a, b, c) {
        var d = Tb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wb[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wb[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wb[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wb[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wb[f] + "Width", !0, e)));
        return g
    }

    function A(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Rb(a),
            g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qb.test(e)) return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = rb.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xb(d) && (f[g] = rb.access(d, "olddisplay", u(d.nodeName)))) : (e = xb(d), "none" === c && e || rb.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }

    function D() {
        return setTimeout(function() {
            Yb = void 0
        }), Yb = _.now()
    }

    function E(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wb[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function F(a, b, c) {
        for (var d, e = (cc[b] || []).concat(cc["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {}, n = a.style,
            o = a.nodeType && xb(a),
            p = rb.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? rb.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], $b.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d]) continue;
                    o = !0
                }
                m[d] = p && p[d] || _.style(a, d)
            } else j = void 0;
        if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = rb.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
                _(a).hide()
            }), l.done(function() {
                var b;
                rb.remove(a, "fxshow");
                for (b in m) _.style(a, b, m[b])
            });
            for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function H(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function I(a, b, c) {
        var d, e, f = 0,
            g = bc.length,
            h = _.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Yb || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            }, j = h.promise({
                elem: a,
                props: _.extend({}, b),
                opts: _.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Yb || D(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++)
            if (d = bc[f].call(j, a, k, j.opts)) return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(nb) || [];
            if (_.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {}, g = a === vc;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a
    }

    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function N(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function O(a, b, c, d) {
        var e;
        if (_.isArray(b)) _.each(b, function(b, e) {
            c || zc.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== _.type(b)) d(a, b);
        else
            for (e in b) O(a + "[" + e + "]", b[e], c, d)
    }

    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Q = [],
        R = Q.slice,
        S = Q.concat,
        T = Q.push,
        U = Q.indexOf,
        V = {}, W = V.toString,
        X = V.hasOwnProperty,
        Y = {}, Z = a.document,
        $ = "2.1.1",
        _ = function(a, b) {
            return new _.fn.init(a, b)
        }, ab = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        bb = /^-ms-/,
        cb = /-([\da-z])/gi,
        db = function(a, b) {
            return b.toUpperCase()
        };
    _.fn = _.prototype = {
        jquery: $,
        constructor: _,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        },
        pushStack: function(a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return _.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(_.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    }, _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === _.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !_.isArray(a) && a - parseFloat(a) >= 0
        },
        isPlainObject: function(a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(bb, "ms-").replace(cb, db)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1) break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(ab, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h)
                for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
            else
                for (f in a) e = b(a[f], f, d), null != e && i.push(e);
            return S.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)))
            }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
        },
        now: Date.now,
        support: Y
    }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var eb = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (I && !d) {
                if (e = sb.exec(a))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode) return c;
                            if (f.id === g) return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                    } else {
                        if (e[2]) return _.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && v.getElementsByClassName && b.getElementsByClassName) return _.apply(c, b.getElementsByClassName(g)), c
                    }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ub, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                        o = tb.test(a) && k(b.parentNode) || b, p = j.join(",")
                    }
                    if (p) try {
                        return _.apply(c, o.querySelectorAll(p)), c
                    } catch (q) {} finally {
                        l || b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ib, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[N] = !0, a
        }

        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || W) - (~a.sourceIndex || W);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && typeof a.getElementsByTagName !== V && a
        }

        function l() {}

        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : q(r, m, a, h, i),
                    t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? bb.call(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : _.apply(g, t)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                    return a === b
                }, g, !0), j = n(function(a) {
                    return bb.call(b, a) > -1
                }, g, !0), k = [
                    function(a, c, d) {
                        return !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                    }
                ]; e > h; h++)
                if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ib, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }

        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function(d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || f && w.find.TAG("*", j),
                        u = P += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0; m = a[l++];)
                                if (m(k, g, h)) {
                                    i.push(k);
                                    break
                                }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--;) p[o] || r[o] || (r[o] = Z.call(i));
                            r = q(r)
                        }
                        _.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function(a, b) {
                return a === b && (E = !0), 0
            }, V = "undefined",
            W = 1 << 31,
            X = {}.hasOwnProperty,
            Y = [],
            Z = Y.pop,
            $ = Y.push,
            _ = Y.push,
            ab = Y.slice,
            bb = Y.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            }, cb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            db = "[\\x20\\t\\r\\n\\f]",
            eb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            fb = eb.replace("w", "w#"),
            gb = "\\[" + db + "*(" + eb + ")(?:" + db + "*([*^$|!~]?=)" + db + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + fb + "))|)" + db + "*\\]",
            hb = ":(" + eb + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + gb + ")*)|.*)\\)|)",
            ib = new RegExp("^" + db + "+|((?:^|[^\\\\])(?:\\\\.)*)" + db + "+$", "g"),
            jb = new RegExp("^" + db + "*," + db + "*"),
            kb = new RegExp("^" + db + "*([>+~]|" + db + ")" + db + "*"),
            lb = new RegExp("=" + db + "*([^\\]'\"]*?)" + db + "*\\]", "g"),
            mb = new RegExp(hb),
            nb = new RegExp("^" + fb + "$"),
            ob = {
                ID: new RegExp("^#(" + eb + ")"),
                CLASS: new RegExp("^\\.(" + eb + ")"),
                TAG: new RegExp("^(" + eb.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + gb),
                PSEUDO: new RegExp("^" + hb),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + db + "*(even|odd|(([+-]|)(\\d*)n|)" + db + "*(?:([+-]|)" + db + "*(\\d+)|))" + db + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + cb + ")$", "i"),
                needsContext: new RegExp("^" + db + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + db + "*((?:-\\d)?\\d*)" + db + "*\\)|)(?=[^-]|$)", "i")
            }, pb = /^(?:input|select|textarea|button)$/i,
            qb = /^h\d$/i,
            rb = /^[^{]+\{\s*\[native \w/,
            sb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            tb = /[+~]/,
            ub = /'|\\/g,
            vb = new RegExp("\\\\([\\da-f]{1,6}" + db + "?|(" + db + ")|.)", "ig"),
            wb = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            _.apply(Y = ab.call(O.childNodes), O.childNodes), Y[O.childNodes.length].nodeType
        } catch (xb) {
            _ = {
                apply: Y.length ? function(a, b) {
                    $.apply(a, ab.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, F = b.setDocument = function(a) {
            var b, c = a ? a.ownerDocument || a : O,
                d = c.defaultView;
            return c !== G && 9 === c.nodeType && c.documentElement ? (G = c, H = c.documentElement, I = !y(c), d && d !== d.top && (d.addEventListener ? d.addEventListener("unload", function() {
                F()
            }, !1) : d.attachEvent && d.attachEvent("onunload", function() {
                F()
            })), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = rb.test(c.getElementsByClassName) && e(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !c.getElementsByName || !c.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function(a, b) {
                if (typeof b.getElementById !== V && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== V && I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (v.qsa = rb.test(c.querySelectorAll)) && (e(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && J.push("[*^$]=" + db + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + db + "*(?:value|" + cb + ")"), a.querySelectorAll(":checked").length || J.push(":checked")
            }), e(function(a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + db + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = rb.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", hb)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = rb.test(H.compareDocumentPosition), M = b || rb.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !v.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === O && M(O, a) ? -1 : b === c || b.ownerDocument === O && M(O, b) ? 1 : D ? bb.call(D, a) - bb.call(D, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var d, e = 0,
                    f = a.parentNode,
                    h = b.parentNode,
                    i = [a],
                    j = [b];
                if (!f || !h) return a === c ? -1 : b === c ? 1 : f ? -1 : h ? 1 : D ? bb.call(D, a) - bb.call(D, b) : 0;
                if (f === h) return g(a, b);
                for (d = a; d = d.parentNode;) i.unshift(d);
                for (d = b; d = d.parentNode;) j.unshift(d);
                for (; i[e] === j[e];) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, c) : G
        }, b.matches = function(a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(lb, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return b(c, G, null, [a]).length > 0
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
                d = c && X.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += x(b);
            return c
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: ob,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(vb, wb), a[3] = (a[3] || a[4] || a[5] || "").replace(vb, wb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return ob.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && mb.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(vb, wb).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + db + ")" + a + "(" + db + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                            else
                                for (;
                                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = bb.call(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = A(a.replace(ib, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                    }
                }),
                lang: d(function(a) {
                    return nb.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(vb, wb).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !! (a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !! a.checked || "option" === b && !! a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !w.pseudos.empty(a)
                },
                header: function(a) {
                    return qb.test(a.nodeName)
                },
                input: function(a) {
                    return pb.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[u] = h(u);
        for (u in {
            submit: !0,
            reset: !0
        }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) {
                (!d || (e = jb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = kb.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ib, " ")
                }), h = h.slice(d.length));
                for (g in w.filter)!(e = ob[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a,
                l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(vb, wb), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = ob.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(vb, wb), tb.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a) return _.apply(c, d), c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, tb.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !! E, F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(cb, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    _.find = eb, _.expr = eb.selectors, _.expr[":"] = _.expr.pseudos, _.unique = eb.uniqueSort, _.text = eb.getText, _.isXMLDoc = eb.isXML, _.contains = eb.contains;
    var fb = _.expr.match.needsContext,
        gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        hb = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, _.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (_.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && fb.test(a) ? _(a) : a || [], !1).length
        }
    });
    var ib, jb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        kb = _.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : jb.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ib).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), gb.test(c[1]) && _.isPlainObject(b))
                        for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ib.ready ? ib.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
        };
    kb.prototype = _.fn, ib = _(Z);
    var lb = /^(?:parents|prev(?:Until|All))/,
        mb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    _.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && _(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), _.fn.extend({
        has: function(a) {
            var b = _(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (_.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fb.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? _.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), _.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return _.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return _.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return _.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return _.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes)
        }
    }, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (mb[a] || _.unique(e), lb.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var nb = /\S+/g,
        ob = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? ob[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [],
            j = !a.once && [],
            k = function(f) {
                for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                    if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
            }, l = {
                add: function() {
                    if (i) {
                        var c = i.length;
                        ! function f(b) {
                            _.each(b, function(b, c) {
                                var d = _.type(c);
                                "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), d ? g = i.length : b && (e = c, k(b))
                    }
                    return this
                },
                remove: function() {
                    return i && _.each(arguments, function(a, b) {
                        for (var c;
                            (c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                    }), this
                },
                has: function(a) {
                    return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
                },
                empty: function() {
                    return i = [], g = 0, this
                },
                disable: function() {
                    return i = j = b = void 0, this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return j = void 0, b || l.disable(), this
                },
                locked: function() {
                    return !j
                },
                fireWith: function(a, b) {
                    return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return l
    }, _.extend({
        Deferred: function(a) {
            var b = [
                ["resolve", "done", _.Callbacks("once memory"), "resolved"],
                ["reject", "fail", _.Callbacks("once memory"), "rejected"],
                ["notify", "progress", _.Callbacks("memory")]
            ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return _.Deferred(function(c) {
                            _.each(b, function(b, f) {
                                var g = _.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? _.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, _.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = R.call(arguments),
                g = f.length,
                h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : _.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var pb;
    _.fn.ready = function(a) {
        return _.ready.promise().done(a), this
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? _.readyWait++ : _.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pb.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
        }
    }), _.ready.promise = function(b) {
        return pb || (pb = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pb.promise(b)
    }, _.ready.promise();
    var qb = _.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c) _.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(_(a), c)
        })), b))
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
        key: function(a) {
            if (!h.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, _.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(nb) || [])), c = d.length;
                for (; c--;) delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var rb = new h,
        sb = new h,
        tb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ub = /([A-Z])/g;
    _.extend({
        hasData: function(a) {
            return sb.hasData(a) || rb.hasData(a)
        },
        data: function(a, b, c) {
            return sb.access(a, b, c)
        },
        removeData: function(a, b) {
            sb.remove(a, b)
        },
        _data: function(a, b, c) {
            return rb.access(a, b, c)
        },
        _removeData: function(a, b) {
            rb.remove(a, b)
        }
    }), _.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sb.get(f), 1 === f.nodeType && !rb.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                    rb.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                sb.set(this, a)
            }) : qb(this, function(b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sb.get(f, a), void 0 !== c) return c;
                    if (c = sb.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c
                } else this.each(function() {
                    var c = sb.get(this, d);
                    sb.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sb.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                sb.remove(this, a)
            })
        }
    }), _.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = rb.get(a, b), c && (!d || _.isArray(c) ? d = rb.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = _.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = _._queueHooks(a, b),
                g = function() {
                    _.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return rb.get(a, c) || rb.access(a, c, {
                empty: _.Callbacks("once memory").add(function() {
                    rb.remove(a, [b + "queue", c])
                })
            })
        }
    }), _.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                _.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = _.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = rb.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var vb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        wb = ["Top", "Right", "Bottom", "Left"],
        xb = function(a, b) {
            return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
        }, yb = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = Z.createDocumentFragment(),
            b = a.appendChild(Z.createElement("div")),
            c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !! b.cloneNode(!0).lastChild.defaultValue
    }();
    var zb = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Ab = /^key/,
        Bb = /^(?:mouse|pointer|contextmenu)|click/,
        Cb = /^(?:focusinfocus|focusoutblur)$/,
        Db = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = rb.get(a);
            if (q)
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                    return typeof _ !== zb && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(nb) || [""], j = b.length; j--;) h = Db.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && _.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = rb.hasData(a) && rb.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(nb) || [""], j = b.length; j--;)
                    if (h = Db.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, rb.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || Z],
                n = X.call(b, "type") ? b.type : b,
                o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Cb.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, Cb.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0;
                    (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (rb.get(g, "events") || {})[b.type] && rb.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [],
                h = R.call(arguments),
                i = (rb.get(this, "events") || {})[a.type] || [],
                j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0;
                    (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[_.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Bb.test(e) ? this.mouseHooks : Ab.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return _.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = _.extend(new _.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
    }, _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), Y.focusinBubbles || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0)
        };
        _.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = rb.access(d, b);
                e || d.addEventListener(a, c, !0), rb.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = rb.access(d, b) - 1;
                e ? rb.access(d, b, e) : (d.removeEventListener(a, c, !0), rb.remove(d, b))
            }
        }
    }), _.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
            else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return _().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                _.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
                _.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                _.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Eb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Fb = /<([\w:]+)/,
        Gb = /<|&#?\w+;/,
        Hb = /<(?:script|style|link)/i,
        Ib = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Jb = /^$|\/(?:java|ecma)script/i,
        Kb = /^true\/(.*)/,
        Lb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Mb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Mb.optgroup = Mb.option, Mb.tbody = Mb.tfoot = Mb.colgroup = Mb.caption = Mb.thead, Mb.th = Mb.td, _.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
                for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
                else q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
                    else if (Gb.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (Fb.exec(e) || ["", ""])[1].toLowerCase(), h = Mb[g] || Mb._default, f.innerHTML = h[1] + e.replace(Eb, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++];)
                if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                    for (j = 0; e = f[j++];) Jb.test(e.type || "") && c.push(e);
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[rb.expando], e && (b = rb.cache[e]))) {
                    if (b.events)
                        for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    rb.cache[e] && delete rb.cache[e]
                }
                delete sb.cache[c[sb.expando]]
            }
        }
    }), _.fn.extend({
        text: function(a) {
            return qb(this, function(a) {
                return void 0 === a ? _.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return _.clone(this, a, b)
            })
        },
        html: function(a) {
            return qb(this, function(a) {
                var b = this[0] || {}, c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Hb.test(a) && !Mb[(Fb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Eb, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0,
                j = this.length,
                k = this,
                l = j - 1,
                m = a[0],
                p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ib.test(m)) return this.each(function(c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
            });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f)
                    for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Jb.test(g.type || "") && !rb.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(Lb, "")))
            }
            return this
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Nb, Ob = {}, Pb = /^margin/,
        Qb = new RegExp("^(" + vb + ")(?!px)[a-z%]+$", "i"),
        Rb = function(a) {
            return a.ownerDocument.defaultView.getComputedStyle(a, null)
        };
    ! function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
        }
        var c, d, e = Z.documentElement,
            f = Z.createElement("div"),
            g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return null == d && b(), d
            },
            reliableMarginRight: function() {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), b
            }
        }))
    }(), _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Sb = /^(none|table(?!-c[ea]).+)/,
        Tb = new RegExp("^(" + vb + ")(.*)$", "i"),
        Ub = new RegExp("^([+-])=(" + vb + ")", "i"),
        Vb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Wb = {
            letterSpacing: "0",
            fontWeight: "400"
        }, Xb = ["Webkit", "O", "Moz", "ms"];
    _.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b),
                    i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ub.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wb && (e = Wb[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
        }
    }), _.each(["height", "width"], function(a, b) {
        _.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Sb.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Vb, function() {
                    return A(a, b, d)
                }) : A(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Rb(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b ? _.swap(a, {
            display: "inline-block"
        }, v, [a, "marginRight"]) : void 0
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        _.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wb[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Pb.test(a) || (_.cssHooks[a + b].set = y)
    }), _.fn.extend({
        css: function(a, b) {
            return qb(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (_.isArray(b)) {
                    for (d = Rb(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return B(this, !0)
        },
        hide: function() {
            return B(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                xb(this) ? _(this).show() : _(this).hide()
            })
        }
    }), _.Tween = C, C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.pos = b = this.options.duration ? _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, _.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, _.fx = C.prototype.init, _.fx.step = {};
    var Yb, Zb, $b = /^(?:toggle|show|hide)$/,
        _b = new RegExp("^(?:([+-])=|)(" + vb + ")([a-z%]*)$", "i"),
        ac = /queueHooks$/,
        bc = [G],
        cc = {
            "*": [
                function(a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = _b.exec(b),
                        f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
                        g = (_.cssNumber[a] || "px" !== f && +d) && _b.exec(_.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }
            ]
        };
    _.Animation = _.extend(I, {
        tweener: function(a, b) {
            _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cc[c] = cc[c] || [], cc[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? bc.unshift(a) : bc.push(a)
        }
    }), _.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? _.extend({}, a) : {
            complete: c || !c && b || _.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !_.isFunction(b) && b
        };
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
        }, d
    }, _.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(xb).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = _.isEmptyObject(a),
                f = _.speed(b, c, d),
                g = function() {
                    var b = I(this, _.extend({}, a), f);
                    (e || rb.get(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = _.timers,
                    g = rb.get(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g) g[e] && g[e].stop && ac.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && _.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = rb.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = _.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), _.each(["toggle", "show", "hide"], function(a, b) {
        var c = _.fn[b];
        _.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
        }
    }), _.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        _.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), _.timers = [], _.fx.tick = function() {
        var a, b = 0,
            c = _.timers;
        for (Yb = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(), Yb = void 0
    }, _.fx.timer = function(a) {
        _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
    }, _.fx.interval = 13, _.fx.start = function() {
        Zb || (Zb = setInterval(_.fx.tick, _.fx.interval))
    }, _.fx.stop = function() {
        clearInterval(Zb), Zb = null
    }, _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, _.fn.delay = function(a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    },
    function() {
        var a = Z.createElement("input"),
            b = Z.createElement("select"),
            c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
    }();
    var dc, ec, fc = _.expr.attrHandle;
    _.fn.extend({
        attr: function(a, b) {
            return qb(this, _.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                _.removeAttr(this, a)
            })
        }
    }), _.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === zb ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? ec : dc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(nb);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), ec = {
        set: function(a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fc[b] || _.find.attr;
        fc[b] = function(a, b, d) {
            var e, f;
            return d || (f = fc[b], fc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fc[b] = f), e
        }
    });
    var gc = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function(a, b) {
            return qb(this, _.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[_.propFix[a] || a]
            })
        }
    }), _.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || gc.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || (_.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    });
    var hc = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).addClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(nb) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = _.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).removeClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(nb) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var b, d = 0, e = _(this), f = a.match(nb) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === zb || "boolean" === c) && (this.className && rb.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : rb.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hc, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var ic = /\r/g;
    _.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = _.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ic, "") : null == c ? "" : c)
            }
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                            if (b = _(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
            }
        }, Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), _.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var jc = _.now(),
        kc = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
    };
    var lc, mc, nc = /#.*$/,
        oc = /([?&])_=[^&]*/,
        pc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rc = /^(?:GET|HEAD)$/,
        sc = /^\/\//,
        tc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        uc = {}, vc = {}, wc = "*/".concat("*");
    try {
        mc = location.href
    } catch (xc) {
        mc = Z.createElement("a"), mc.href = "", mc = mc.href
    }
    lc = tc.exec(mc.toLowerCase()) || [], _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mc,
            type: "GET",
            isLocal: qc.test(lc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": wc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": _.parseJSON,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
        },
        ajaxPrefilter: J(uc),
        ajaxTransport: J(vc),
        ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
                m = l.context || l,
                n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                o = _.Deferred(),
                p = _.Callbacks("once memory"),
                q = l.statusCode || {}, r = {}, s = {}, t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!g)
                                for (g = {}; b = pc.exec(f);) g[b[1].toLowerCase()] = b[2];
                            b = g[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return d && d.abort(b), c(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || mc) + "").replace(nc, "").replace(sc, lc[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(nb) || [""], null == l.crossDomain && (i = tc.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === lc[1] && i[2] === lc[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (lc[3] || ("http:" === lc[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(uc, l, b, v), 2 === t) return v;
            j = l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !rc.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kc.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = oc.test(e) ? e.replace(oc, "$1_=" + jc++) : e + (kc.test(e) ? "&" : "?") + "_=" + jc++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + wc + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (k in {
                success: 1,
                error: 1,
                complete: 1
            }) v[k](l[k]);
            if (d = K(vc, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, d.send(r, c)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    c(-1, w)
                }
            } else c(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return _.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return _.get(a, void 0, b, "script")
        }
    }), _.each(["get", "post"], function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), _._evalUrl = function(a) {
        return _.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, _.fn.extend({
        wrapAll: function(a) {
            var b;
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(_.isFunction(a) ? function(b) {
                _(this).wrapInner(a.call(this, b))
            } : function() {
                var b = _(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = _.isFunction(a);
            return this.each(function(c) {
                _(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
            }).end()
        }
    }), _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a)
    };
    var yc = /%20/g,
        zc = /\[\]$/,
        Ac = /\r?\n/g,
        Bc = /^(?:submit|button|image|reset|file)$/i,
        Cc = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) O(c, a[c], b, e);
        return d.join("&").replace(yc, "+")
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Cc.test(this.nodeName) && !Bc.test(a) && (this.checked || !yb.test(a))
            }).map(function(a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Ac, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Ac, "\r\n")
                }
            }).get()
        }
    }), _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Dc = 0,
        Ec = {}, Fc = {
            0: 200,
            1223: 204
        }, Gc = _.ajaxSettings.xhr();
    a.ActiveXObject && _(a).on("unload", function() {
        for (var a in Ec) Ec[a]()
    }), Y.cors = !! Gc && "withCredentials" in Gc, Y.ajax = Gc = !! Gc, _.ajaxTransport(function(a) {
        var b;
        return Y.cors || Gc && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                    g = ++Dc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Ec[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Fc[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Ec[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return _.globalEval(a), a
            }
        }
    }), _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = _("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), Z.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Hc = [],
        Ic = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Hc.pop() || _.expando + "_" + jc++;
            return this[a] = !0, a
        }
    }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Ic.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ic.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ic, "$1" + e) : b.jsonp !== !1 && (b.url += (kc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || _.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Hc.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = gb.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
    };
    var Jc = _.fn.load;
    _.fn.load = function(a, b, c) {
        if ("string" != typeof a && Jc) return Jc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Kc = a.document.documentElement;
    _.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"),
                l = _(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, _.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                _.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                }, f = d && d.ownerDocument;
            if (f) return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== zb && (e = d.getBoundingClientRect()), c = P(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Kc; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
                return a || Kc
            })
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return qb(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), _.each(["top", "left"], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            return c ? (c = v(a, b), Qb.test(c) ? _(a).position()[b] + "px" : c) : void 0
        })
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        _.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qb(this, function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), _.fn.size = function() {
        return this.length
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var Lc = a.jQuery,
        Mc = a.$;
    return _.noConflict = function(b) {
        return a.$ === _ && (a.$ = Mc), b && a.jQuery === _ && (a.jQuery = Lc), _
    }, typeof b === zb && (a.jQuery = a.$ = _), _
}),
function() {
    function m() {
        return function() {}
    }

    function p(a) {
        return function() {
            return this[a]
        }
    }

    function r(a) {
        return function() {
            return a
        }
    }

    function u(a, b, c) {
        if ("string" == typeof a) {
            if (0 === a.indexOf("#") && (a = a.slice(1)), u.va[a]) return u.va[a];
            a = u.r(a)
        }
        if (!a || !a.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
        return a.player || new u.C(a, b, c)
    }

    function D(a, c, d, e) {
        return d !== b ? (a.b.style[c] = -1 !== ("" + d).indexOf("%") || -1 !== ("" + d).indexOf("px") ? d : "auto" === d ? "" : d + "px", e || a.k("resize"), a) : a.b ? (d = a.b.style[c], e = d.indexOf("px"), -1 !== e ? parseInt(d.slice(0, e), 10) : parseInt(a.b["offset" + u.Z(c)], 10)) : 0
    }

    function E(a, b) {
        var c, d, e, f;
        return c = a.b, d = u.Qc(c), f = e = c.offsetWidth, c = a.handle, a.f.pd ? (f = d.top, d = b.changedTouches ? b.changedTouches[0].pageY : b.pageY, c && (c = c.r().offsetHeight, f += c / 2, e -= c), Math.max(0, Math.min(1, (f - d + e) / e))) : (e = d.left, d = b.changedTouches ? b.changedTouches[0].pageX : b.pageX, c && (c = c.r().offsetWidth, e += c / 2, f -= c), Math.max(0, Math.min(1, (d - e) / f)))
    }

    function ca(a, b) {
        a.Y(b), b.d("click", u.bind(a, function() {
            this.Ua()
        }))
    }

    function G(a) {
        a.na = f, a.ua.pc(), a.b.setAttribute("aria-pressed", f), a.J && 0 < a.J.length && a.J[0].r().focus()
    }

    function F(a) {
        a.na = l, a.ua.Ua(), a.b.setAttribute("aria-pressed", l)
    }

    function da(a) {
        var b = {
            sources: [],
            tracks: []
        };
        if (u.i.B(b, u.xb(a)), a.hasChildNodes()) {
            var c, d, e, f;
            for (a = a.childNodes, e = 0, f = a.length; f > e; e++) c = a[e], d = c.nodeName.toLowerCase(), "source" === d ? b.sources.push(u.xb(c)) : "track" === d && b.tracks.push(u.xb(c))
        }
        return b
    }

    function H(a, b, c) {
        a.h ? (a.aa = l, a.h.D(), a.Eb && (a.Eb = l, clearInterval(a.Qa)), a.Fb && I(a), a.h = l) : "Html5" !== b && a.F && (a.b.removeChild(a.F), a.F.player = h, a.F = h), a.ya = b, a.aa = l;
        var d = u.i.B({
            source: c,
            parentEl: a.b
        }, a.f[b.toLowerCase()]);
        c && (c.src == a.s.src && 0 < a.s.currentTime && (d.startTime = a.s.currentTime), a.s.src = c.src), a.h = new window.videojs[b](a, d), a.h.P(function() {
            if (this.a.Ta(), !this.j.Mb) {
                var a = this.a;
                a.Eb = f, a.Qa = setInterval(u.bind(a, function() {
                    this.s.mb < this.buffered().end(0) ? this.k("progress") : 1 == this.Ha() && (clearInterval(this.Qa), this.k("progress"))
                }), 500), a.h.R("progress", function() {
                    this.j.Mb = f;
                    var a = this.a;
                    a.Eb = l, clearInterval(a.Qa)
                })
            }
            this.j.Pb || (a = this.a, a.Fb = f, a.d("play", a.xc), a.d("pause", a.xa), a.h.R("timeupdate", function() {
                this.j.Pb = f, I(this.a)
            }))
        })
    }

    function I(a) {
        a.Fb = l, a.xa(), a.t("play", a.xc), a.t("pause", a.xa)
    }

    function K(a, b, c) {
        if (a.h && !a.h.aa) a.h.P(function() {
            this[b](c)
        });
        else try {
            a.h[b](c)
        } catch (d) {
            throw u.log(d), d
        }
    }

    function J(a, c) {
        if (a.h.aa) try {
            return a.h[c]()
        } catch (d) {
            throw a.h[c] === b ? u.log("Video.js: " + c + " method not defined for " + a.ya + " playback technology.", d) : "TypeError" == d.name ? (u.log("Video.js: " + c + " unavailable on " + a.ya + " playback technology element.", d), a.h.aa = l) : u.log(d), d
        }
    }

    function L(a) {
        a.Sc = l, u.t(document, "keydown", a.ic), document.documentElement.style.overflow = a.Nc, u.w(document.body, "vjs-full-window"), a.k("exitFullWindow")
    }

    function ea() {
        var a = u.media.Va[i];
        return function() {
            throw Error('The "' + a + "\" method is not available on the playback technology's API")
        }
    }

    function fa() {
        var a = Q[S],
            b = a.charAt(0).toUpperCase() + a.slice(1);
        P["set" + b] = function(b) {
            return this.b.vjs_setProperty(a, b)
        }
    }

    function T(a) {
        P[a] = function() {
            return this.b.vjs_getProperty(a)
        }
    }

    function U(a) {
        return a.za = a.za || [], a.za
    }

    function V(a, b, c) {
        for (var d, e, f = a.za, g = 0, h = f.length; h > g; g++) d = f[g], d.id() === b ? (d.show(), e = d) : c && d.K() == c && 0 < d.mode() && d.disable();
        (b = e ? e.K() : c ? c : l) && a.k(b + "trackchange")
    }

    function W(a) {
        0 === a.ja && a.load(), 0 === a.ia && (a.a.d("timeupdate", u.bind(a, a.update, a.O)), a.a.d("ended", u.bind(a, a.reset, a.O)), ("captions" === a.A || "subtitles" === a.A) && a.a.S.textTrackDisplay.Y(a))
    }

    function X(a) {
        var b = a.split(":");
        a = 0;
        var c, d, e;
        return 3 == b.length ? (c = b[0], d = b[1], b = b[2]) : (c = 0, d = b[0], b = b[1]), b = b.split(/\s+/), b = b.splice(0, 1)[0], b = b.split(/\.|,/), e = parseFloat(b[1]), b = b[0], a += 3600 * parseFloat(c), a += 60 * parseFloat(d), a += parseFloat(b), e && (a += e / 1e3), a
    }

    function $(a, c) {
        var d = a.split("."),
            e = Z;
        !(d[0] in e) && e.execScript && e.execScript("var " + d[0]);
        for (var f; d.length && (f = d.shift());) d.length || c === b ? e = e[f] ? e[f] : e[f] = {} : e[f] = c
    }
    var b = void 0,
        f = !0,
        h = null,
        l = !1,
        t;
    document.createElement("video"), document.createElement("audio"), document.createElement("track");
    var v = u;
    window.Bd = window.Cd = u, u.Qb = "4.1", u.yc = "https:" == document.location.protocol ? "https://" : "http://", u.options = {
        techOrder: ["html5", "flash"],
        html5: {},
        flash: {},
        width: 300,
        height: 150,
        defaultVolume: 0,
        children: {
            mediaLoader: {},
            posterImage: {},
            textTrackDisplay: {},
            loadingSpinner: {},
            bigPlayButton: {},
            controlBar: {}
        }
    }, "GENERATED_CDN_VSN" !== u.Qb && (v.options.flash.swf = u.yc + "vjs.zencdn.net/" + u.Qb + "/video-js.swf"), u.va = {}, u.ka = u.CoreObject = m(), u.ka.extend = function(a) {
        var b, c;
        a = a || {}, b = a.init || a.g || this.prototype.init || this.prototype.g || m(), c = function() {
            b.apply(this, arguments)
        }, c.prototype = u.i.create(this.prototype), c.prototype.constructor = c, c.extend = u.ka.extend, c.create = u.ka.create;
        for (var d in a) a.hasOwnProperty(d) && (c.prototype[d] = a[d]);
        return c
    }, u.ka.create = function() {
        var a = u.i.create(this.prototype);
        return this.apply(a, arguments), a
    }, u.d = function(a, b, c) {
        var d = u.getData(a);
        d.z || (d.z = {}), d.z[b] || (d.z[b] = []), c.u || (c.u = u.u++), d.z[b].push(c), d.T || (d.disabled = l, d.T = function(b) {
            if (!d.disabled) {
                b = u.hc(b);
                var c = d.z[b.type];
                if (c)
                    for (var c = c.slice(0), e = 0, f = c.length; f > e && !b.nc(); e++) c[e].call(a, b)
            }
        }), 1 == d.z[b].length && (document.addEventListener ? a.addEventListener(b, d.T, l) : document.attachEvent && a.attachEvent("on" + b, d.T))
    }, u.t = function(a, b, c) {
        if (u.mc(a)) {
            var d = u.getData(a);
            if (d.z)
                if (b) {
                    var e = d.z[b];
                    if (e) {
                        if (c) {
                            if (c.u)
                                for (d = 0; d < e.length; d++) e[d].u === c.u && e.splice(d--, 1)
                        } else d.z[b] = [];
                        u.ec(a, b)
                    }
                } else
                    for (e in d.z) b = e, d.z[b] = [], u.ec(a, b)
        }
    }, u.ec = function(a, b) {
        var c = u.getData(a);
        0 === c.z[b].length && (delete c.z[b], document.removeEventListener ? a.removeEventListener(b, c.T, l) : document.detachEvent && a.detachEvent("on" + b, c.T)), u.Bb(c.z) && (delete c.z, delete c.T, delete c.disabled), u.Bb(c) && u.sc(a)
    }, u.hc = function(a) {
        function b() {
            return f
        }

        function c() {
            return l
        }
        if (!a || !a.Cb) {
            var d = a || window.event;
            a = {};
            for (var e in d) "layerX" !== e && "layerY" !== e && (a[e] = d[e]);
            if (a.target || (a.target = a.srcElement || document), a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement, a.preventDefault = function() {
                d.preventDefault && d.preventDefault(), a.returnValue = l, a.Ab = b
            }, a.Ab = c, a.stopPropagation = function() {
                d.stopPropagation && d.stopPropagation(), a.cancelBubble = f, a.Cb = b
            }, a.Cb = c, a.stopImmediatePropagation = function() {
                d.stopImmediatePropagation && d.stopImmediatePropagation(), a.nc = b, a.stopPropagation()
            }, a.nc = c, a.clientX != h) {
                e = document.documentElement;
                var g = document.body;
                a.pageX = a.clientX + (e && e.scrollLeft || g && g.scrollLeft || 0) - (e && e.clientLeft || g && g.clientLeft || 0), a.pageY = a.clientY + (e && e.scrollTop || g && g.scrollTop || 0) - (e && e.clientTop || g && g.clientTop || 0)
            }
            a.which = a.charCode || a.keyCode, a.button != h && (a.button = 1 & a.button ? 0 : 4 & a.button ? 1 : 2 & a.button ? 2 : 0)
        }
        return a
    }, u.k = function(a, b) {
        var c = u.mc(a) ? u.getData(a) : {}, d = a.parentNode || a.ownerDocument;
        return "string" == typeof b && (b = {
            type: b,
            target: a
        }), b = u.hc(b), c.T && c.T.call(a, b), d && !b.Cb() ? u.k(d, b) : d || b.Ab() || (c = u.getData(b.target), !b.target[b.type]) || (c.disabled = f, "function" == typeof b.target[b.type] && b.target[b.type](), c.disabled = l), !b.Ab()
    }, u.R = function(a, b, c) {
        u.d(a, b, function() {
            u.t(a, b, arguments.callee), c.apply(this, arguments)
        })
    };
    var w = Object.prototype.hasOwnProperty;
    u.e = function(a, b) {
        var c, d = document.createElement(a || "div");
        for (c in b) w.call(b, c) && (-1 !== c.indexOf("aria-") || "role" == c ? d.setAttribute(c, b[c]) : d[c] = b[c]);
        return d
    }, u.Z = function(a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    }, u.i = {}, u.i.create = Object.create || function(a) {
        function b() {}
        return b.prototype = a, new b
    }, u.i.ra = function(a, b, c) {
        for (var d in a) w.call(a, d) && b.call(c || this, d, a[d])
    }, u.i.B = function(a, b) {
        if (!b) return a;
        for (var c in b) w.call(b, c) && (a[c] = b[c]);
        return a
    }, u.i.gc = function(a, b) {
        var c, d, e;
        a = u.i.copy(a);
        for (c in b) w.call(b, c) && (d = a[c], e = b[c], a[c] = u.i.oc(d) && u.i.oc(e) ? u.i.gc(d, e) : b[c]);
        return a
    }, u.i.copy = function(a) {
        return u.i.B({}, a)
    }, u.i.oc = function(a) {
        return !!a && "object" == typeof a && "[object Object]" === a.toString() && a.constructor === Object
    }, u.bind = function(a, b, c) {
        function d() {
            return b.apply(a, arguments)
        }
        return b.u || (b.u = u.u++), d.u = c ? c + "_" + b.u : b.u, d
    }, u.pa = {}, u.u = 1, u.expando = "vdata" + (new Date).getTime(), u.getData = function(a) {
        var b = a[u.expando];
        return b || (b = a[u.expando] = u.u++, u.pa[b] = {}), u.pa[b]
    }, u.mc = function(a) {
        return a = a[u.expando], !(!a || u.Bb(u.pa[a]))
    }, u.sc = function(a) {
        var b = a[u.expando];
        if (b) {
            delete u.pa[b];
            try {
                delete a[u.expando]
            } catch (c) {
                a.removeAttribute ? a.removeAttribute(u.expando) : a[u.expando] = h
            }
        }
    }, u.Bb = function(a) {
        for (var b in a)
            if (a[b] !== h) return l;
        return f
    }, u.p = function(a, b) {
        -1 == (" " + a.className + " ").indexOf(" " + b + " ") && (a.className = "" === a.className ? b : a.className + " " + b)
    }, u.w = function(a, b) {
        if (-1 != a.className.indexOf(b)) {
            for (var c = a.className.split(" "), d = c.length - 1; d >= 0; d--) c[d] === b && c.splice(d, 1);
            a.className = c.join(" ")
        }
    }, u.ma = u.e("video"), u.G = navigator.userAgent, u.Cc = /iPhone/i.test(u.G), u.Bc = /iPad/i.test(u.G), u.Dc = /iPod/i.test(u.G), u.Ub = u.Cc || u.Bc || u.Dc;
    var aa = u,
        x, y = u.G.match(/OS (\d+)_/i);
    x = y && y[1] ? y[1] : b, aa.td = x, u.ab = /Android/i.test(u.G);
    var ba = u,
        z, A = u.G.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
        B, C;
    A ? (B = A[1] && parseFloat(A[1]), C = A[2] && parseFloat(A[2]), z = B && C ? parseFloat(A[1] + "." + A[2]) : B ? B : h) : z = h, ba.zc = z, u.Ec = u.ab && /webkit/i.test(u.G) && 2.3 > u.zc, u.Ac = /Firefox/i.test(u.G), u.ud = /Chrome/i.test(u.G), u.xb = function(a) {
        var b = {};
        if (a && a.attributes && 0 < a.attributes.length)
            for (var c, d, e = a.attributes, g = e.length - 1; g >= 0; g--) c = e[g].name, d = e[g].value, ("boolean" == typeof a[c] || -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + c + ",")) && (d = d !== h ? f : l), b[c] = d;
        return b
    }, u.xd = function(a, b) {
        var c = "";
        return document.defaultView && document.defaultView.getComputedStyle ? c = document.defaultView.getComputedStyle(a, "").getPropertyValue(b) : a.currentStyle && (c = a["client" + b.substr(0, 1).toUpperCase() + b.substr(1)] + "px"), c
    }, u.zb = function(a, b) {
        b.firstChild ? b.insertBefore(a, b.firstChild) : b.appendChild(a)
    }, u.Ob = {}, u.r = function(a) {
        return 0 === a.indexOf("#") && (a = a.slice(1)), document.getElementById(a)
    }, u.Ka = function(a, b) {
        b = b || a;
        var c = Math.floor(a % 60),
            d = Math.floor(a / 60 % 60),
            e = Math.floor(a / 3600),
            f = Math.floor(b / 60 % 60),
            g = Math.floor(b / 3600),
            e = e > 0 || g > 0 ? e + ":" : "";
        return e + (((e || f >= 10) && 10 > d ? "0" + d : d) + ":") + (10 > c ? "0" + c : c)
    }, u.Ic = function() {
        document.body.focus(), document.onselectstart = r(l)
    }, u.od = function() {
        document.onselectstart = r(f)
    }, u.trim = function(a) {
        return a.toString().replace(/^\s+/, "").replace(/\s+$/, "")
    }, u.round = function(a, b) {
        return b || (b = 0), Math.round(a * Math.pow(10, b)) / Math.pow(10, b)
    }, u.tb = function(a, b) {
        return {
            length: 1,
            start: function() {
                return a
            },
            end: function() {
                return b
            }
        }
    }, u.get = function(a, b, c) {
        var d = 0 === a.indexOf("file:") || 0 === window.location.href.indexOf("file:") && -1 === a.indexOf("http");
        "undefined" == typeof XMLHttpRequest && (window.XMLHttpRequest = function() {
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (a) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (b) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP")
            } catch (c) {}
            throw Error("This browser does not support XMLHttpRequest.")
        });
        var e = new XMLHttpRequest;
        try {
            e.open("GET", a)
        } catch (f) {
            c(f)
        }
        e.onreadystatechange = function() {
            4 === e.readyState && (200 === e.status || d && 0 === e.status ? b(e.responseText) : c && c())
        };
        try {
            e.send()
        } catch (g) {
            c && c(g)
        }
    }, u.gd = function(a) {
        try {
            var b = window.localStorage || l;
            b && (b.volume = a)
        } catch (c) {
            22 == c.code || 1014 == c.code ? u.log("LocalStorage Full (VideoJS)", c) : 18 == c.code ? u.log("LocalStorage not allowed (VideoJS)", c) : u.log("LocalStorage Error (VideoJS)", c)
        }
    }, u.kc = function(a) {
        return a.match(/^https?:\/\//) || (a = u.e("div", {
            innerHTML: '<a href="' + a + '">x</a>'
        }).firstChild.href), a
    }, u.log = function() {
        u.log.history = u.log.history || [], u.log.history.push(arguments), window.console && window.console.log(Array.prototype.slice.call(arguments))
    }, u.Qc = function(a) {
        var b, c;
        return a.getBoundingClientRect && a.parentNode && (b = a.getBoundingClientRect()), b ? (a = document.documentElement, c = document.body, {
            left: b.left + (window.pageXOffset || c.scrollLeft) - (a.clientLeft || c.clientLeft || 0),
            top: b.top + (window.pageYOffset || c.scrollTop) - (a.clientTop || c.clientTop || 0)
        }) : {
            left: 0,
            top: 0
        }
    }, u.c = u.ka.extend({
        g: function(a, b, c) {
            if (this.a = a, this.f = u.i.copy(this.f), b = this.options(b), this.O = b.id || (b.el && b.el.id ? b.el.id : a.id() + "_component_" + u.u++), this.Vc = b.name || h, this.b = b.el || this.e(), this.H = [], this.rb = {}, this.S = {}, (a = this.f) && a.children) {
                var d = this;
                u.i.ra(a.children, function(a, b) {
                    b !== l && !b.loadEvent && (d[a] = d.Y(a, b))
                })
            }
            this.P(c)
        }
    }), t = u.c.prototype, t.D = function() {
        if (this.H)
            for (var a = this.H.length - 1; a >= 0; a--) this.H[a].D && this.H[a].D();
        this.S = this.rb = this.H = h, this.t(), this.b.parentNode && this.b.parentNode.removeChild(this.b), u.sc(this.b), this.b = h
    }, t.bd = p("a"), t.options = function(a) {
        return a === b ? this.f : this.f = u.i.gc(this.f, a)
    }, t.e = function(a, b) {
        return u.e(a, b)
    }, t.r = p("b"), t.id = p("O"), t.name = p("Vc"), t.children = p("H"), t.Y = function(a, b) {
        var c, d;
        return "string" == typeof a ? (d = a, b = b || {}, c = b.componentClass || u.Z(d), b.name = d, c = new window.videojs[c](this.a || this, b)) : c = a, this.H.push(c), "function" == typeof c.id && (this.rb[c.id()] = c), (d = d || c.name && c.name()) && (this.S[d] = c), "function" == typeof c.el && c.el() && (this.qa || this.b).appendChild(c.el()), c
    }, t.removeChild = function(a) {
        if ("string" == typeof a && (a = this.S[a]), a && this.H) {
            for (var b = l, c = this.H.length - 1; c >= 0; c--)
                if (this.H[c] === a) {
                    b = f, this.H.splice(c, 1);
                    break
                }
            b && (this.rb[a.id] = h, this.S[a.name] = h, (b = a.r()) && b.parentNode === (this.qa || this.b) && (this.qa || this.b).removeChild(a.r()))
        }
    }, t.Q = r(""), t.d = function(a, b) {
        return u.d(this.b, a, u.bind(this, b)), this
    }, t.t = function(a, b) {
        return u.t(this.b, a, b), this
    }, t.R = function(a, b) {
        return u.R(this.b, a, u.bind(this, b)), this
    }, t.k = function(a, b) {
        return u.k(this.b, a, b), this
    }, t.P = function(a) {
        return a && (this.aa ? a.call(this) : (this.Ra === b && (this.Ra = []), this.Ra.push(a))), this
    }, t.Ta = function() {
        this.aa = f;
        var a = this.Ra;
        if (a && 0 < a.length) {
            for (var b = 0, c = a.length; c > b; b++) a[b].call(this);
            this.Ra = [], this.k("ready")
        }
    }, t.p = function(a) {
        return u.p(this.b, a), this
    }, t.w = function(a) {
        return u.w(this.b, a), this
    }, t.show = function() {
        return this.b.style.display = "block", this
    }, t.v = function() {
        return this.b.style.display = "none", this
    }, t.$ = function() {
        return this.w("vjs-fade-out"), this.p("vjs-fade-in"), this
    }, t.ta = function() {
        return this.w("vjs-fade-in"), this.p("vjs-fade-out"), this
    }, t.pc = function() {
        return this.p("vjs-lock-showing"), this
    }, t.Ua = function() {
        return this.w("vjs-lock-showing"), this
    }, t.disable = function() {
        this.v(), this.show = m(), this.$ = m()
    }, t.width = function(a, b) {
        return D(this, "width", a, b)
    }, t.height = function(a, b) {
        return D(this, "height", a, b)
    }, t.Mc = function(a, b) {
        return this.width(a, f).height(b)
    }, u.o = u.c.extend({
        g: function(a, b) {
            u.c.call(this, a, b);
            var c = l;
            this.d("touchstart", function() {
                c = f
            }), this.d("touchmove", function() {
                c = l
            });
            var d = this;
            this.d("touchend", function(a) {
                c && d.n(a), a.preventDefault(), a.stopPropagation()
            }), this.d("click", this.n), this.d("focus", this.Na), this.d("blur", this.Ma)
        }
    }), t = u.o.prototype, t.e = function(a, b) {
        return b = u.i.B({
            className: this.Q(),
            innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + (this.oa || "Need Text") + "</span></div>",
            dd: "button",
            "aria-live": "polite",
            tabIndex: 0
        }, b), u.c.prototype.e.call(this, a, b)
    }, t.Q = function() {
        return "vjs-control " + u.c.prototype.Q.call(this)
    }, t.n = m(), t.Na = function() {
        u.d(document, "keyup", u.bind(this, this.ba))
    }, t.ba = function(a) {
        (32 == a.which || 13 == a.which) && (a.preventDefault(), this.n())
    }, t.Ma = function() {
        u.t(document, "keyup", u.bind(this, this.ba))
    }, u.M = u.c.extend({
        g: function(a, b) {
            u.c.call(this, a, b), this.Hc = this.S[this.f.barName], this.handle = this.S[this.f.handleName], a.d(this.qc, u.bind(this, this.update)), this.d("mousedown", this.Oa), this.d("touchstart", this.Oa), this.d("focus", this.Na), this.d("blur", this.Ma), this.d("click", this.n), this.a.d("controlsvisible", u.bind(this, this.update)), a.P(u.bind(this, this.update)), this.N = {}
        }
    }), t = u.M.prototype, t.e = function(a, b) {
        return b = b || {}, b.className += " vjs-slider", b = u.i.B({
            dd: "slider",
            "aria-valuenow": 0,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            tabIndex: 0
        }, b), u.c.prototype.e.call(this, a, b)
    }, t.Oa = function(a) {
        a.preventDefault(), u.Ic(), this.N.move = u.bind(this, this.Hb), this.N.end = u.bind(this, this.Ib), u.d(document, "mousemove", this.N.move), u.d(document, "mouseup", this.N.end), u.d(document, "touchmove", this.N.move), u.d(document, "touchend", this.N.end), this.Hb(a)
    }, t.Ib = function() {
        u.od(), u.t(document, "mousemove", this.N.move, l), u.t(document, "mouseup", this.N.end, l), u.t(document, "touchmove", this.N.move, l), u.t(document, "touchend", this.N.end, l), this.update()
    }, t.update = function() {
        if (this.b) {
            var a, b = this.yb(),
                c = this.handle,
                d = this.Hc;
            if (isNaN(b) && (b = 0), a = b, c) {
                a = this.b.offsetWidth;
                var e = c.r().offsetWidth;
                a = e ? e / a : 0, b *= 1 - a, a = b + a / 2, c.r().style.left = u.round(100 * b, 2) + "%"
            }
            d.r().style.width = u.round(100 * a, 2) + "%"
        }
    }, t.Na = function() {
        u.d(document, "keyup", u.bind(this, this.ba))
    }, t.ba = function(a) {
        37 == a.which ? (a.preventDefault(), this.vc()) : 39 == a.which && (a.preventDefault(), this.wc())
    }, t.Ma = function() {
        u.t(document, "keyup", u.bind(this, this.ba))
    }, t.n = function(a) {
        a.stopImmediatePropagation(), a.preventDefault()
    }, u.ga = u.c.extend(), u.ga.prototype.defaultValue = 0, u.ga.prototype.e = function(a, b) {
        return b = b || {}, b.className += " vjs-slider-handle", b = u.i.B({
            innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
        }, b), u.c.prototype.e.call(this, "div", b)
    }, u.la = u.c.extend(), u.la.prototype.e = function() {
        var a = this.options().Kc || "ul";
        return this.qa = u.e(a, {
            className: "vjs-menu-content"
        }), a = u.c.prototype.e.call(this, "div", {
            append: this.qa,
            className: "vjs-menu"
        }), a.appendChild(this.qa), u.d(a, "click", function(a) {
            a.preventDefault(), a.stopImmediatePropagation()
        }), a
    }, u.L = u.o.extend({
        g: function(a, b) {
            u.o.call(this, a, b), this.selected(b.selected)
        }
    }), u.L.prototype.e = function(a, b) {
        return u.o.prototype.e.call(this, "li", u.i.B({
            className: "vjs-menu-item",
            innerHTML: this.f.label
        }, b))
    }, u.L.prototype.n = function() {
        this.selected(f)
    }, u.L.prototype.selected = function(a) {
        a ? (this.p("vjs-selected"), this.b.setAttribute("aria-selected", f)) : (this.w("vjs-selected"), this.b.setAttribute("aria-selected", l))
    }, u.ea = u.o.extend({
        g: function(a, b) {
            u.o.call(this, a, b), this.ua = this.Ja(), this.Y(this.ua), this.J && 0 === this.J.length && this.v(), this.d("keyup", this.ba), this.b.setAttribute("aria-haspopup", f), this.b.setAttribute("role", "button")
        }
    }), t = u.ea.prototype, t.na = l, t.Ja = function() {
        var a = new u.la(this.a);
        if (this.options().title && a.r().appendChild(u.e("li", {
            className: "vjs-menu-title",
            innerHTML: u.Z(this.A),
            md: -1
        })), this.J = this.sb())
            for (var b = 0; b < this.J.length; b++) ca(a, this.J[b]);
        return a
    }, t.sb = m(), t.Q = function() {
        return this.className + " vjs-menu-button " + u.o.prototype.Q.call(this)
    }, t.Na = m(), t.Ma = m(), t.n = function() {
        this.R("mouseout", u.bind(this, function() {
            this.ua.Ua(), this.b.blur()
        })), this.na ? F(this) : G(this)
    }, t.ba = function(a) {
        a.preventDefault(), 32 == a.which || 13 == a.which ? this.na ? F(this) : G(this) : 27 == a.which && this.na && F(this)
    }, u.C = u.c.extend({
        g: function(a, b, c) {
            this.F = a, b = u.i.B(da(a), b), this.s = {}, this.rc = b.poster, this.Ia = b.controls, b.customControlsOnMobile !== f && (u.Ub || u.ab) ? (a.controls = b.controls, this.Ia = l) : a.controls = l, u.c.call(this, this, b, c), this.R("play", function(a) {
                u.k(this.b, {
                    type: "firstplay",
                    target: this.b
                }) || (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation())
            }), this.d("ended", this.Xc), this.d("play", this.Kb), this.d("firstplay", this.Yc), this.d("pause", this.Jb), this.d("progress", this.$c), this.d("durationchange", this.Wc), this.d("error", this.Gb), this.d("fullscreenchange", this.Zc), u.va[this.O] = this, b.plugins && u.i.ra(b.plugins, function(a, b) {
                this[a](b)
            }, this)
        }
    }), t = u.C.prototype, t.f = u.options, t.D = function() {
        u.va[this.O] = h, this.F && this.F.player && (this.F.player = h), this.b && this.b.player && (this.b.player = h), clearInterval(this.Qa), this.xa(), this.h && this.h.D(), u.c.prototype.D.call(this)
    }, t.e = function() {
        var a = this.b = u.c.prototype.e.call(this, "div"),
            b = this.F;
        if (b.removeAttribute("width"), b.removeAttribute("height"), b.hasChildNodes()) {
            var c, d, e, g, h;
            for (c = b.childNodes, d = c.length, h = []; d--;) e = c[d], g = e.nodeName.toLowerCase(), ("source" === g || "track" === g) && h.push(e);
            for (c = 0; c < h.length; c++) b.removeChild(h[c])
        }
        return b.id = b.id || "vjs_video_" + u.u++, a.id = b.id, a.className = b.className, b.id += "_html5_api", b.className = "vjs-tech", b.player = a.player = this, this.p("vjs-paused"), this.width(this.f.width, f), this.height(this.f.height, f), b.parentNode && b.parentNode.insertBefore(a, b), u.zb(b, a), a
    }, t.xc = function() {
        this.fc && this.xa(), this.fc = setInterval(u.bind(this, function() {
            this.k("timeupdate")
        }), 250)
    }, t.xa = function() {
        clearInterval(this.fc)
    }, t.Xc = function() {
        this.f.loop && (this.currentTime(0), this.play())
    }, t.Kb = function() {
        u.w(this.b, "vjs-paused"), u.p(this.b, "vjs-playing")
    }, t.Yc = function() {
        this.f.starttime && this.currentTime(this.f.starttime)
    }, t.Jb = function() {
        u.w(this.b, "vjs-playing"), u.p(this.b, "vjs-paused")
    }, t.$c = function() {
        1 == this.Ha() && this.k("loadedalldata")
    }, t.Wc = function() {
        this.duration(J(this, "duration"))
    }, t.Gb = function(a) {
        u.log("Video Error", a)
    }, t.Zc = function() {
        this.I ? this.p("vjs-fullscreen") : this.w("vjs-fullscreen")
    }, t.play = function() {
        return K(this, "play"), this
    }, t.pause = function() {
        return K(this, "pause"), this
    }, t.paused = function() {
        return J(this, "paused") === l ? l : f
    }, t.currentTime = function(a) {
        return a !== b ? (this.s.zd = a, K(this, "setCurrentTime", a), this.Fb && this.k("timeupdate"), this) : this.s.currentTime = J(this, "currentTime") || 0
    }, t.duration = function(a) {
        return a !== b ? (this.s.duration = parseFloat(a), this) : this.s.duration
    }, t.buffered = function() {
        var a = J(this, "buffered"),
            b = this.s.mb = this.s.mb || 0;
        return a && 0 < a.length && a.end(0) !== b && (b = a.end(0), this.s.mb = b), u.tb(0, b)
    }, t.Ha = function() {
        return this.duration() ? this.buffered().end(0) / this.duration() : 0
    }, t.volume = function(a) {
        return a !== b ? (a = Math.max(0, Math.min(1, parseFloat(a))), this.s.volume = a, K(this, "setVolume", a), u.gd(a), this) : (a = parseFloat(J(this, "volume")), isNaN(a) ? 1 : a)
    }, t.muted = function(a) {
        return a !== b ? (K(this, "setMuted", a), this) : J(this, "muted") || l
    }, t.Sa = function() {
        return J(this, "supportsFullScreen") || l
    }, t.wa = function() {
        var a = u.Ob.wa;
        return this.I = f, a ? (u.d(document, a.vb, u.bind(this, function() {
            this.I = document[a.I], this.I === l && u.t(document, a.vb, arguments.callee), this.k("fullscreenchange")
        })), this.b[a.tc]()) : this.h.Sa() ? K(this, "enterFullScreen") : (this.Sc = f, this.Nc = document.documentElement.style.overflow, u.d(document, "keydown", u.bind(this, this.ic)), document.documentElement.style.overflow = "hidden", u.p(document.body, "vjs-full-window"), this.k("enterFullWindow"), this.k("fullscreenchange")), this
    }, t.pb = function() {
        var a = u.Ob.wa;
        return this.I = l, a ? document[a.ob]() : this.h.Sa() ? K(this, "exitFullScreen") : (L(this), this.k("fullscreenchange")), this
    }, t.ic = function(a) {
        27 === a.keyCode && (this.I === f ? this.pb() : L(this))
    }, t.src = function(a) {
        if (a instanceof Array) {
            var b;
            a: {
                b = a;
                for (var c = 0, d = this.f.techOrder; c < d.length; c++) {
                    var e = u.Z(d[c]),
                        f = window.videojs[e];
                    if (f.isSupported())
                        for (var g = 0, h = b; g < h.length; g++) {
                            var i = h[g];
                            if (f.canPlaySource(i)) {
                                b = {
                                    source: i,
                                    h: e
                                };
                                break a
                            }
                        }
                }
                b = l
            }
            b ? (a = b.source, b = b.h, b == this.ya ? this.src(a) : H(this, b, a)) : this.b.appendChild(u.e("p", {
                innerHTML: 'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'
            }))
        } else a instanceof Object ? this.src(window.videojs[this.ya].canPlaySource(a) ? a.src : [a]) : (this.s.src = a, this.aa ? (K(this, "src", a), "auto" == this.f.preload && this.load(), this.f.autoplay && this.play()) : this.P(function() {
            this.src(a)
        }));
        return this
    }, t.load = function() {
        return K(this, "load"), this
    }, t.currentSrc = function() {
        return J(this, "currentSrc") || this.s.src || ""
    }, t.Pa = function(a) {
        return a !== b ? (K(this, "setPreload", a), this.f.preload = a, this) : J(this, "preload")
    }, t.autoplay = function(a) {
        return a !== b ? (K(this, "setAutoplay", a), this.f.autoplay = a, this) : J(this, "autoplay")
    }, t.loop = function(a) {
        return a !== b ? (K(this, "setLoop", a), this.f.loop = a, this) : J(this, "loop")
    }, t.poster = function(a) {
        return a !== b && (this.rc = a), this.rc
    }, t.controls = function(a) {
        return a !== b && this.Ia !== a && (this.Ia = !! a, this.k("controlschange")), this.Ia
    }, t.error = function() {
        return J(this, "error")
    };
    var M, N, O;
    O = document.createElement("div"), N = {}, O.vd !== b ? (N.tc = "requestFullscreen", N.ob = "exitFullscreen", N.vb = "fullscreenchange", N.I = "fullScreen") : (document.mozCancelFullScreen ? (M = "moz", N.I = M + "FullScreen") : (M = "webkit", N.I = M + "IsFullScreen"), O[M + "RequestFullScreen"] && (N.tc = M + "RequestFullScreen", N.ob = M + "CancelFullScreen"), N.vb = M + "fullscreenchange"), document[N.ob] && (u.Ob.wa = N), u.da = u.c.extend({
        g: function(a, b) {
            u.c.call(this, a, b), a.controls() || this.disable(), a.R("play", u.bind(this, function() {
                var a, b = u.bind(this, this.$),
                    c = u.bind(this, this.ta);
                this.$(), "ontouchstart" in window || (this.a.d("mouseover", b), this.a.d("mouseout", c), this.a.d("pause", u.bind(this, this.pc)), this.a.d("play", u.bind(this, this.Ua))), a = l, this.a.d("touchstart", function() {
                    a = f
                }), this.a.d("touchmove", function() {
                    a = l
                }), this.a.d("touchend", u.bind(this, function(b) {
                    var c;
                    a && (c = this.r().className.search("fade-in"), -1 !== c ? this.ta() : this.$()), a = l, this.a.paused() || b.preventDefault()
                }))
            }))
        }
    }), u.da.prototype.f = {
        Ad: "play",
        children: {
            playToggle: {},
            currentTimeDisplay: {},
            timeDivider: {},
            durationDisplay: {},
            remainingTimeDisplay: {},
            progressControl: {},
            fullscreenToggle: {},
            volumeControl: {},
            muteToggle: {}
        }
    }, u.da.prototype.e = function() {
        return u.e("div", {
            className: "vjs-control-bar"
        })
    }, u.da.prototype.$ = function() {
        u.c.prototype.$.call(this), this.a.k("controlsvisible")
    }, u.da.prototype.ta = function() {
        u.c.prototype.ta.call(this), this.a.k("controlshidden")
    }, u.Xb = u.o.extend({
        g: function(a, b) {
            u.o.call(this, a, b), a.d("play", u.bind(this, this.Kb)), a.d("pause", u.bind(this, this.Jb))
        }
    }), t = u.Xb.prototype, t.oa = "Play", t.Q = function() {
        return "vjs-play-control " + u.o.prototype.Q.call(this)
    }, t.n = function() {
        this.a.paused() ? this.a.play() : this.a.pause()
    }, t.Kb = function() {
        u.w(this.b, "vjs-paused"), u.p(this.b, "vjs-playing"), this.b.children[0].children[0].innerHTML = "Pause"
    }, t.Jb = function() {
        u.w(this.b, "vjs-playing"), u.p(this.b, "vjs-paused"), this.b.children[0].children[0].innerHTML = "Play"
    }, u.Ya = u.c.extend({
        g: function(a, b) {
            u.c.call(this, a, b), a.d("timeupdate", u.bind(this, this.Ba))
        }
    }), u.Ya.prototype.e = function() {
        var a = u.c.prototype.e.call(this, "div", {
            className: "vjs-current-time vjs-time-controls vjs-control"
        });
        return this.content = u.e("div", {
            className: "vjs-current-time-display",
            innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
            "aria-live": "off"
        }), a.appendChild(u.e("div").appendChild(this.content)), a
    }, u.Ya.prototype.Ba = function() {
        var a = this.a.Nb ? this.a.s.currentTime : this.a.currentTime();
        this.content.innerHTML = '<span class="vjs-control-text">Current Time </span>' + u.Ka(a, this.a.duration())
    }, u.Za = u.c.extend({
        g: function(a, b) {
            u.c.call(this, a, b), a.d("timeupdate", u.bind(this, this.Ba))
        }
    }), u.Za.prototype.e = function() {
        var a = u.c.prototype.e.call(this, "div", {
            className: "vjs-duration vjs-time-controls vjs-control"
        });
        return this.content = u.e("div", {
            className: "vjs-duration-display",
            innerHTML: '<span class="vjs-control-text">Duration Time </span>0:00',
            "aria-live": "off"
        }), a.appendChild(u.e("div").appendChild(this.content)), a
    }, u.Za.prototype.Ba = function() {
        this.a.duration() && (this.content.innerHTML = '<span class="vjs-control-text">Duration Time </span>' + u.Ka(this.a.duration()))
    }, u.ac = u.c.extend({
        g: function(a, b) {
            u.c.call(this, a, b)
        }
    }), u.ac.prototype.e = function() {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-time-divider",
            innerHTML: "<div><span>/</span></div>"
        })
    }, u.gb = u.c.extend({
        g: function(a, b) {
            u.c.call(this, a, b), a.d("timeupdate", u.bind(this, this.Ba))
        }
    }), u.gb.prototype.e = function() {
        var a = u.c.prototype.e.call(this, "div", {
            className: "vjs-remaining-time vjs-time-controls vjs-control"
        });
        return this.content = u.e("div", {
            className: "vjs-remaining-time-display",
            innerHTML: '<span class="vjs-control-text">Remaining Time </span>-0:00',
            "aria-live": "off"
        }), a.appendChild(u.e("div").appendChild(this.content)), a
    }, u.gb.prototype.Ba = function() {
        this.a.duration() && this.a.duration() && (this.content.innerHTML = '<span class="vjs-control-text">Remaining Time </span>-' + u.Ka(this.a.duration() - this.a.currentTime()))
    }, u.Da = u.o.extend({
        g: function(a, b) {
            u.o.call(this, a, b)
        }
    }), u.Da.prototype.oa = "Fullscreen", u.Da.prototype.Q = function() {
        return "vjs-fullscreen-control " + u.o.prototype.Q.call(this)
    }, u.Da.prototype.n = function() {
        this.a.I ? (this.a.pb(), this.b.children[0].children[0].innerHTML = "Fullscreen") : (this.a.wa(), this.b.children[0].children[0].innerHTML = "Non-Fullscreen")
    }, u.fb = u.c.extend({
        g: function(a, b) {
            u.c.call(this, a, b)
        }
    }), u.fb.prototype.f = {
        children: {
            seekBar: {}
        }
    }, u.fb.prototype.e = function() {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-progress-control vjs-control"
        })
    }, u.Yb = u.M.extend({
        g: function(a, b) {
            u.M.call(this, a, b), a.d("timeupdate", u.bind(this, this.Aa)), a.P(u.bind(this, this.Aa))
        }
    }), t = u.Yb.prototype, t.f = {
        children: {
            loadProgressBar: {},
            playProgressBar: {},
            seekHandle: {}
        },
        barName: "playProgressBar",
        handleName: "seekHandle"
    }, t.qc = "timeupdate", t.e = function() {
        return u.M.prototype.e.call(this, "div", {
            className: "vjs-progress-holder",
            "aria-label": "video progress bar"
        })
    }, t.Aa = function() {
        var a = this.a.Nb ? this.a.s.currentTime : this.a.currentTime();
        this.b.setAttribute("aria-valuenow", u.round(100 * this.yb(), 2)), this.b.setAttribute("aria-valuetext", u.Ka(a, this.a.duration()))
    }, t.yb = function() {
        return this.a.currentTime() / this.a.duration()
    }, t.Oa = function(a) {
        u.M.prototype.Oa.call(this, a), this.a.Nb = f, this.qd = !this.a.paused(), this.a.pause()
    }, t.Hb = function(a) {
        a = E(this, a) * this.a.duration(), a == this.a.duration() && (a -= .1), this.a.currentTime(a)
    }, t.Ib = function(a) {
        u.M.prototype.Ib.call(this, a), this.a.Nb = l, this.qd && this.a.play()
    }, t.wc = function() {
        this.a.currentTime(this.a.currentTime() + 5)
    }, t.vc = function() {
        this.a.currentTime(this.a.currentTime() - 5)
    }, u.bb = u.c.extend({
        g: function(a, b) {
            u.c.call(this, a, b), a.d("progress", u.bind(this, this.update))
        }
    }), u.bb.prototype.e = function() {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-load-progress",
            innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'
        })
    }, u.bb.prototype.update = function() {
        this.b.style && (this.b.style.width = u.round(100 * this.a.Ha(), 2) + "%")
    }, u.Wb = u.c.extend({
        g: function(a, b) {
            u.c.call(this, a, b)
        }
    }), u.Wb.prototype.e = function() {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-play-progress",
            innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'
        })
    }, u.hb = u.ga.extend(), u.hb.prototype.defaultValue = "00:00", u.hb.prototype.e = function() {
        return u.ga.prototype.e.call(this, "div", {
            className: "vjs-seek-handle"
        })
    }, u.jb = u.c.extend({
        g: function(a, b) {
            u.c.call(this, a, b), a.h && a.h.j && a.h.j.U === l && this.p("vjs-hidden"), a.d("loadstart", u.bind(this, function() {
                a.h.j && a.h.j.U === l ? this.p("vjs-hidden") : this.w("vjs-hidden")
            }))
        }
    }), u.jb.prototype.f = {
        children: {
            volumeBar: {}
        }
    }, u.jb.prototype.e = function() {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-volume-control vjs-control"
        })
    }, u.ib = u.M.extend({
        g: function(a, b) {
            u.M.call(this, a, b), a.d("volumechange", u.bind(this, this.Aa)), a.P(u.bind(this, this.Aa)), setTimeout(u.bind(this, this.update), 0)
        }
    }), t = u.ib.prototype, t.Aa = function() {
        this.b.setAttribute("aria-valuenow", u.round(100 * this.a.volume(), 2)), this.b.setAttribute("aria-valuetext", u.round(100 * this.a.volume(), 2) + "%")
    }, t.f = {
        children: {
            volumeLevel: {},
            volumeHandle: {}
        },
        barName: "volumeLevel",
        handleName: "volumeHandle"
    }, t.qc = "volumechange", t.e = function() {
        return u.M.prototype.e.call(this, "div", {
            className: "vjs-volume-bar",
            "aria-label": "volume level"
        })
    }, t.Hb = function(a) {
        this.a.volume(E(this, a))
    }, t.yb = function() {
        return this.a.muted() ? 0 : this.a.volume()
    }, t.wc = function() {
        this.a.volume(this.a.volume() + .1)
    }, t.vc = function() {
        this.a.volume(this.a.volume() - .1)
    }, u.bc = u.c.extend({
        g: function(a, b) {
            u.c.call(this, a, b)
        }
    }), u.bc.prototype.e = function() {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-volume-level",
            innerHTML: '<span class="vjs-control-text"></span>'
        })
    }, u.kb = u.ga.extend(), u.kb.prototype.defaultValue = "00:00", u.kb.prototype.e = function() {
        return u.ga.prototype.e.call(this, "div", {
            className: "vjs-volume-handle"
        })
    }, u.fa = u.o.extend({
        g: function(a, b) {
            u.o.call(this, a, b), a.d("volumechange", u.bind(this, this.update)), a.h && a.h.j && a.h.j.U === l && this.p("vjs-hidden"), a.d("loadstart", u.bind(this, function() {
                a.h.j && a.h.j.U === l ? this.p("vjs-hidden") : this.w("vjs-hidden")
            }))
        }
    }), u.fa.prototype.e = function() {
        return u.o.prototype.e.call(this, "div", {
            className: "vjs-mute-control vjs-control",
            innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
        })
    }, u.fa.prototype.n = function() {
        this.a.muted(this.a.muted() ? l : f)
    }, u.fa.prototype.update = function() {
        var a = this.a.volume(),
            b = 3;
        for (0 === a || this.a.muted() ? b = 0 : .33 > a ? b = 1 : .67 > a && (b = 2), this.a.muted() ? "Unmute" != this.b.children[0].children[0].innerHTML && (this.b.children[0].children[0].innerHTML = "Unmute") : "Mute" != this.b.children[0].children[0].innerHTML && (this.b.children[0].children[0].innerHTML = "Mute"), a = 0; 4 > a; a++) u.w(this.b, "vjs-vol-" + a);
        u.p(this.b, "vjs-vol-" + b)
    }, u.Fa = u.ea.extend({
        g: function(a, b) {
            u.ea.call(this, a, b), a.d("volumechange", u.bind(this, this.update)), a.h && a.h.j && a.h.j.U === l && this.p("vjs-hidden"), a.d("loadstart", u.bind(this, function() {
                a.h.j && a.h.j.U === l ? this.p("vjs-hidden") : this.w("vjs-hidden")
            })), this.p("vjs-menu-button")
        }
    }), u.Fa.prototype.Ja = function() {
        var a = new u.la(this.a, {
            Kc: "div"
        }),
            b = new u.ib(this.a, u.i.B({
                pd: f
            }, this.f.Dd));
        return a.Y(b), a
    }, u.Fa.prototype.n = function() {
        u.fa.prototype.n.call(this), u.ea.prototype.n.call(this)
    }, u.Fa.prototype.e = function() {
        return u.o.prototype.e.call(this, "div", {
            className: "vjs-volume-menu-button vjs-menu-button vjs-control",
            innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
        })
    }, u.Fa.prototype.update = u.fa.prototype.update, u.eb = u.o.extend({
        g: function(a, b) {
            u.o.call(this, a, b), (!a.poster() || !a.controls()) && this.v(), a.d("play", u.bind(this, this.v))
        }
    }), u.eb.prototype.e = function() {
        var a = u.e("div", {
            className: "vjs-poster",
            tabIndex: -1
        }),
            b = this.a.poster();
        return b && ("backgroundSize" in a.style ? a.style.backgroundImage = 'url("' + b + '")' : a.appendChild(u.e("img", {
            src: b
        }))), a
    }, u.eb.prototype.n = function() {
        this.a.play()
    }, u.Vb = u.c.extend({
        g: function(a, b) {
            u.c.call(this, a, b), a.d("canplay", u.bind(this, this.v)), a.d("canplaythrough", u.bind(this, this.v)), a.d("playing", u.bind(this, this.v)), a.d("seeked", u.bind(this, this.v)), a.d("seeking", u.bind(this, this.show)), a.d("seeked", u.bind(this, this.v)), a.d("error", u.bind(this, this.show)), a.d("waiting", u.bind(this, this.show))
        }
    }), u.Vb.prototype.e = function() {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-loading-spinner"
        })
    }, u.Wa = u.o.extend({
        g: function(a, b) {
            u.o.call(this, a, b), a.controls() || this.v(), a.d("play", u.bind(this, this.v))
        }
    }), u.Wa.prototype.e = function() {
        return u.o.prototype.e.call(this, "div", {
            className: "vjs-big-play-button",
            innerHTML: "<span></span>",
            "aria-label": "play video"
        })
    }, u.Wa.prototype.n = function() {
        this.a.play()
    }, u.q = u.c.extend({
        g: function(a, b, c) {
            u.c.call(this, a, b, c)
        }
    }), u.q.prototype.n = u.ab ? m() : function() {
        this.a.controls() && (this.a.paused() ? this.a.play() : this.a.pause())
    }, u.q.prototype.j = {
        U: f,
        jc: l,
        Mb: l,
        Pb: l
    }, u.media = {}, u.media.Va = "play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(" ");
    for (var i = u.media.Va.length - 1; i >= 0; i--) u.q.prototype[u.media.Va[i]] = ea();
    u.m = u.q.extend({
        g: function(a, b, c) {
            for (this.j.U = u.m.Jc(), this.j.Uc = !u.Ub, this.j.jc = f, u.q.call(this, a, b, c), (b = b.source) && this.b.currentSrc == b.src ? a.k("loadstart") : b && (this.b.src = b.src), a.P(function() {
                this.F && this.f.autoplay && this.paused() && (delete this.F.poster, this.play())
            }), this.d("click", this.n), a = u.m.$a.length - 1; a >= 0; a--) u.d(this.b, u.m.$a[a], u.bind(this.a, this.Pc));
            this.Ta()
        }
    }), t = u.m.prototype, t.D = function() {
        u.q.prototype.D.call(this)
    }, t.e = function() {
        var a = this.a,
            b = a.F;
        b && this.j.Uc !== l || (b ? (b.player = h, a.F = h, a.r().removeChild(b), b = b.cloneNode(l)) : b = u.e("video", {
            id: a.id() + "_html5_api",
            className: "vjs-tech"
        }), b.player = a, u.zb(b, a.r()));
        for (var c = ["autoplay", "preload", "loop", "muted"], d = c.length - 1; d >= 0; d--) {
            var e = c[d];
            a.f[e] !== h && (b[e] = a.f[e])
        }
        return b
    }, t.Pc = function(a) {
        this.k(a), a.stopPropagation()
    }, t.play = function() {
        this.b.play()
    }, t.pause = function() {
        this.b.pause()
    }, t.paused = function() {
        return this.b.paused
    }, t.currentTime = function() {
        return this.b.currentTime
    }, t.fd = function(a) {
        try {
            this.b.currentTime = a
        } catch (b) {
            u.log(b, "Video is not ready. (Video.js)")
        }
    }, t.duration = function() {
        return this.b.duration || 0
    }, t.buffered = function() {
        return this.b.buffered
    }, t.volume = function() {
        return this.b.volume
    }, t.ld = function(a) {
        this.b.volume = a
    }, t.muted = function() {
        return this.b.muted
    }, t.jd = function(a) {
        this.b.muted = a
    }, t.width = function() {
        return this.b.offsetWidth
    }, t.height = function() {
        return this.b.offsetHeight
    }, t.Sa = function() {
        return "function" != typeof this.b.webkitEnterFullScreen || !/Android/.test(u.G) && /Chrome|Mac OS X 10.5/.test(u.G) ? l : f
    }, t.src = function(a) {
        this.b.src = a
    }, t.load = function() {
        this.b.load()
    }, t.currentSrc = function() {
        return this.b.currentSrc
    }, t.Pa = function() {
        return this.b.Pa
    }, t.kd = function(a) {
        this.b.Pa = a
    }, t.autoplay = function() {
        return this.b.autoplay
    }, t.ed = function(a) {
        this.b.autoplay = a
    }, t.loop = function() {
        return this.b.loop
    }, t.hd = function(a) {
        this.b.loop = a
    }, t.error = function() {
        return this.b.error
    }, u.m.isSupported = function() {
        return !!u.ma.canPlayType
    }, u.m.nb = function(a) {
        try {
            return !!u.ma.canPlayType(a.type)
        } catch (b) {
            return ""
        }
    }, u.m.Jc = function() {
        var a = u.ma.volume;
        return u.ma.volume = a / 2 + .1, a !== u.ma.volume
    }, u.m.$a = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" "), u.Ec && (document.createElement("video").constructor.prototype.canPlayType = function(a) {
        return a && -1 != a.toLowerCase().indexOf("video/mp4") ? "maybe" : ""
    }), u.l = u.q.extend({
        g: function(a, b, c) {
            u.q.call(this, a, b, c), c = b.source;
            var d = b.parentEl,
                e = this.b = u.e("div", {
                    id: a.id() + "_temp_flash"
                }),
                g = a.id() + "_flash_api";
            a = a.f;
            var h = u.i.B({
                readyFunction: "videojs.Flash.onReady",
                eventProxyFunction: "videojs.Flash.onEvent",
                errorEventProxyFunction: "videojs.Flash.onError",
                autoplay: a.autoplay,
                preload: a.Pa,
                loop: a.loop,
                muted: a.muted
            }, b.flashVars),
                i = u.i.B({
                    wmode: "opaque",
                    bgcolor: "#000000"
                }, b.params),
                j = u.i.B({
                    id: g,
                    name: g,
                    "class": "vjs-tech"
                }, b.attributes);
            if (c && (h.src = encodeURIComponent(u.kc(c.src))), u.zb(e, d), b.startTime && this.P(function() {
                this.load(), this.play(), this.currentTime(b.startTime)
            }), b.iFrameMode !== f || u.Ac) u.l.Oc(b.swf, e, h, i, j);
            else {
                var k = u.e("iframe", {
                    id: g + "_iframe",
                    name: g + "_iframe",
                    className: "vjs-tech",
                    scrolling: "no",
                    marginWidth: 0,
                    marginHeight: 0,
                    frameBorder: 0
                });
                h.readyFunction = "ready", h.eventProxyFunction = "events", h.errorEventProxyFunction = "errors", u.d(k, "load", u.bind(this, function() {
                    var a, c = k.contentWindow;
                    a = k.contentDocument ? k.contentDocument : k.contentWindow.document, a.write(u.l.lc(b.swf, h, i, j)), c.player = this.a, c.ready = u.bind(this.a, function(b) {
                        b = a.getElementById(b);
                        var c = this.h;
                        c.b = b, u.d(b, "click", c.bind(c.n)), u.l.qb(c)
                    }), c.events = u.bind(this.a, function(a, b) {
                        this && "flash" === this.ya && this.k(b)
                    }), c.errors = u.bind(this.a, function(a, b) {
                        u.log("Flash Error", b)
                    })
                })), e.parentNode.replaceChild(k, e)
            }
        }
    }), t = u.l.prototype, t.D = function() {
        u.q.prototype.D.call(this)
    }, t.play = function() {
        this.b.vjs_play()
    }, t.pause = function() {
        this.b.vjs_pause()
    }, t.src = function(a) {
        if (a = u.kc(a), this.b.vjs_src(a), this.a.autoplay()) {
            var b = this;
            setTimeout(function() {
                b.play()
            }, 0)
        }
    }, t.load = function() {
        this.b.vjs_load()
    }, t.poster = function() {
        this.b.vjs_getProperty("poster")
    }, t.buffered = function() {
        return u.tb(0, this.b.vjs_getProperty("buffered"))
    }, t.Sa = r(l);
    var P = u.l.prototype,
        Q = "preload currentTime defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),
        R = "error currentSrc networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" "),
        S;
    for (S = 0; S < Q.length; S++) T(Q[S]), fa();
    for (S = 0; S < R.length; S++) T(R[S]);
    if (u.l.isSupported = function() {
        return 10 <= u.l.version()[0]
    }, u.l.nb = function(a) {
        return a.type in u.l.Rc ? "maybe" : void 0
    }, u.l.Rc = {
        "video/flv": "FLV",
        "video/x-flv": "FLV",
        "video/mp4": "MP4",
        "video/m4v": "MP4"
    }, u.l.onReady = function(a) {
        a = u.r(a);
        var b = a.player || a.parentNode.player,
            c = b.h;
        a.player = b, c.b = a, c.d("click", c.n), u.l.qb(c)
    }, u.l.qb = function(a) {
        a.r().vjs_getProperty ? a.Ta() : setTimeout(function() {
            u.l.qb(a)
        }, 50)
    }, u.l.onEvent = function(a, b) {
        u.r(a).player.k(b)
    }, u.l.onError = function(a, b) {
        u.r(a).player.k("error"), u.log("Flash Error", b, a)
    }, u.l.version = function() {
        var a = "0,0,0";
        try {
            a = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
        } catch (b) {
            try {
                navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (a = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
            } catch (c) {}
        }
        return a.split(",")
    }, u.l.Oc = function(a, b, c, d, e) {
        a = u.l.lc(a, c, d, e), a = u.e("div", {
            innerHTML: a
        }).childNodes[0], c = b.parentNode, b.parentNode.replaceChild(a, b);
        var f = c.childNodes[0];
        setTimeout(function() {
            f.style.display = "block"
        }, 1e3)
    }, u.l.lc = function(a, b, c, d) {
        var e = "",
            f = "",
            g = "";
        return b && u.i.ra(b, function(a, b) {
            e += a + "=" + b + "&amp;"
        }), c = u.i.B({
            movie: a,
            flashvars: e,
            allowScriptAccess: "always",
            allowNetworking: "all"
        }, c), u.i.ra(c, function(a, b) {
            f += '<param name="' + a + '" value="' + b + '" />'
        }), d = u.i.B({
            data: a,
            width: "100%",
            height: "100%"
        }, d), u.i.ra(d, function(a, b) {
            g += a + '="' + b + '" '
        }), '<object type="application/x-shockwave-flash"' + g + ">" + f + "</object>"
    }, u.Fc = u.c.extend({
        g: function(a, b, c) {
            if (u.c.call(this, a, b, c), a.f.sources && 0 !== a.f.sources.length) a.src(a.f.sources);
            else
                for (b = 0, c = a.f.techOrder; b < c.length; b++) {
                    var d = u.Z(c[b]),
                        e = window.videojs[d];
                    if (e && e.isSupported()) {
                        H(a, d);
                        break
                    }
                }
        }
    }), u.V = u.c.extend({
        g: function(a, b) {
            u.c.call(this, a, b), this.O = b.id || "vjs_" + b.kind + "_" + b.language + "_" + u.u++, this.uc = b.src, this.Lc = b["default"] || b.dflt, this.nd = b.title, this.yd = b.srclang, this.Tc = b.label, this.ha = [], this.cc = [], this.ia = this.ja = 0, this.a.d("fullscreenchange", u.bind(this, this.Gc))
        }
    }), t = u.V.prototype, t.K = p("A"), t.src = p("uc"), t.ub = p("Lc"), t.title = p("nd"), t.label = p("Tc"), t.readyState = p("ja"), t.mode = p("ia"), t.Gc = function() {
        this.b.style.fontSize = this.a.I ? 140 * (screen.width / this.a.width()) + "%" : ""
    }, t.e = function() {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-" + this.A + " vjs-text-track"
        })
    }, t.show = function() {
        W(this), this.ia = 2, u.c.prototype.show.call(this)
    }, t.v = function() {
        W(this), this.ia = 1, u.c.prototype.v.call(this)
    }, t.disable = function() {
        2 == this.ia && this.v(), this.a.t("timeupdate", u.bind(this, this.update, this.O)), this.a.t("ended", u.bind(this, this.reset, this.O)), this.reset(), this.a.S.textTrackDisplay.removeChild(this), this.ia = 0
    }, t.load = function() {
        0 === this.ja && (this.ja = 1, u.get(this.uc, u.bind(this, this.ad), u.bind(this, this.Gb)))
    }, t.Gb = function(a) {
        this.error = a, this.ja = 3, this.k("error")
    }, t.ad = function(a) {
        var b, c;
        a = a.split("\n");
        for (var d = "", e = 1, f = a.length; f > e; e++)
            if (d = u.trim(a[e])) {
                for (-1 == d.indexOf("-->") ? (b = d, d = u.trim(a[++e])) : b = this.ha.length, b = {
                    id: b,
                    index: this.ha.length
                }, c = d.split(" --> "), b.startTime = X(c[0]), b.sa = X(c[1]), c = []; a[++e] && (d = u.trim(a[e]));) c.push(d);
                b.text = c.join("<br/>"), this.ha.push(b)
            }
        this.ja = 2, this.k("loaded")
    }, t.update = function() {
        if (0 < this.ha.length) {
            var a = this.a.currentTime();
            if (this.Lb === b || a < this.Lb || this.La <= a) {
                var c, d, e, g, h = this.ha,
                    i = this.a.duration(),
                    j = 0,
                    k = l,
                    m = [];
                for (a >= this.La || this.La === b ? g = this.wb !== b ? this.wb : 0 : (k = f, g = this.Db !== b ? this.Db : h.length - 1);;) {
                    if (e = h[g], e.sa <= a) j = Math.max(j, e.sa), e.Ga && (e.Ga = l);
                    else if (a < e.startTime) {
                        if (i = Math.min(i, e.startTime), e.Ga && (e.Ga = l), !k) break
                    } else k ? (m.splice(0, 0, e), d === b && (d = g), c = g) : (m.push(e), c === b && (c = g), d = g), i = Math.min(i, e.sa), j = Math.max(j, e.startTime), e.Ga = f; if (k) {
                        if (0 === g) break;
                        g--
                    } else {
                        if (g === h.length - 1) break;
                        g++
                    }
                }
                for (this.cc = m, this.La = i, this.Lb = j, this.wb = c, this.Db = d, a = this.cc, h = "", i = 0, j = a.length; j > i; i++) h += '<span class="vjs-tt-cue">' + a[i].text + "</span>";
                this.b.innerHTML = h, this.k("cuechange")
            }
        }
    }, t.reset = function() {
        this.La = 0, this.Lb = this.a.duration(), this.Db = this.wb = 0
    }, u.Rb = u.V.extend(), u.Rb.prototype.A = "captions", u.Zb = u.V.extend(), u.Zb.prototype.A = "subtitles", u.Tb = u.V.extend(), u.Tb.prototype.A = "chapters", u.$b = u.c.extend({
        g: function(a, b, c) {
            if (u.c.call(this, a, b, c), a.f.tracks && 0 < a.f.tracks.length) {
                b = this.a, a = a.f.tracks;
                var d;
                for (c = 0; c < a.length; c++) {
                    d = a[c];
                    var e = b,
                        f = d.kind,
                        g = d.label,
                        h = d.language,
                        i = d;
                    d = e.za = e.za || [], i = i || {}, i.kind = f, i.label = g, i.language = h, f = u.Z(f || "subtitles"), e = new window.videojs[f + "Track"](e, i), d.push(e)
                }
            }
        }
    }), u.$b.prototype.e = function() {
        return u.c.prototype.e.call(this, "div", {
            className: "vjs-text-track-display"
        })
    }, u.X = u.L.extend({
        g: function(a, b) {
            var c = this.ca = b.track;
            b.label = c.label(), b.selected = c.ub(), u.L.call(this, a, b), this.a.d(c.K() + "trackchange", u.bind(this, this.update))
        }
    }), u.X.prototype.n = function() {
        u.L.prototype.n.call(this), V(this.a, this.ca.O, this.ca.K())
    }, u.X.prototype.update = function() {
        this.selected(2 == this.ca.mode())
    }, u.cb = u.X.extend({
        g: function(a, b) {
            b.track = {
                K: function() {
                    return b.kind
                },
                bd: a,
                label: function() {
                    return b.kind + " off"
                },
                ub: r(l),
                mode: r(l)
            }, u.X.call(this, a, b), this.selected(f)
        }
    }), u.cb.prototype.n = function() {
        u.X.prototype.n.call(this), V(this.a, this.ca.O, this.ca.K())
    }, u.cb.prototype.update = function() {
        for (var a, b = U(this.a), c = 0, d = b.length, e = f; d > c; c++) a = b[c], a.K() == this.ca.K() && 2 == a.mode() && (e = l);
        this.selected(e)
    }, u.W = u.ea.extend({
        g: function(a, b) {
            u.ea.call(this, a, b), 1 >= this.J.length && this.v()
        }
    }), u.W.prototype.sb = function() {
        var a, b = [];
        b.push(new u.cb(this.a, {
            kind: this.A
        }));
        for (var c = 0; c < U(this.a).length; c++) a = U(this.a)[c], a.K() === this.A && b.push(new u.X(this.a, {
            track: a
        }));
        return b
    }, u.Ca = u.W.extend({
        g: function(a, b, c) {
            u.W.call(this, a, b, c), this.b.setAttribute("aria-label", "Captions Menu")
        }
    }), u.Ca.prototype.A = "captions", u.Ca.prototype.oa = "Captions", u.Ca.prototype.className = "vjs-captions-button", u.Ea = u.W.extend({
        g: function(a, b, c) {
            u.W.call(this, a, b, c), this.b.setAttribute("aria-label", "Subtitles Menu")
        }
    }), u.Ea.prototype.A = "subtitles", u.Ea.prototype.oa = "Subtitles", u.Ea.prototype.className = "vjs-subtitles-button", u.Sb = u.W.extend({
        g: function(a, b, c) {
            u.W.call(this, a, b, c), this.b.setAttribute("aria-label", "Chapters Menu")
        }
    }), t = u.Sb.prototype, t.A = "chapters", t.oa = "Chapters", t.className = "vjs-chapters-button", t.sb = function() {
        for (var a, b = [], c = 0; c < U(this.a).length; c++) a = U(this.a)[c], a.K() === this.A && b.push(new u.X(this.a, {
            track: a
        }));
        return b
    }, t.Ja = function() {
        for (var a, b, c = U(this.a), d = 0, e = c.length, f = this.J = []; e > d; d++)
            if (a = c[d], a.K() == this.A && a.ub()) {
                if (2 > a.readyState()) return this.wd = a, void a.d("loaded", u.bind(this, this.Ja));
                b = a;
                break
            }
        if (c = this.ua = new u.la(this.a), c.b.appendChild(u.e("li", {
            className: "vjs-menu-title",
            innerHTML: u.Z(this.A),
            md: -1
        })), b) {
            a = b.ha;
            for (var g, d = 0, e = a.length; e > d; d++) g = a[d], g = new u.Xa(this.a, {
                track: b,
                cue: g
            }), f.push(g), c.Y(g)
        }
        return 0 < this.J.length && this.show(), c
    }, u.Xa = u.L.extend({
        g: function(a, b) {
            var c = this.ca = b.track,
                d = this.cue = b.cue,
                e = a.currentTime();
            b.label = d.text, b.selected = d.startTime <= e && e < d.sa, u.L.call(this, a, b), c.d("cuechange", u.bind(this, this.update))
        }
    }), u.Xa.prototype.n = function() {
        u.L.prototype.n.call(this), this.a.currentTime(this.cue.startTime), this.update(this.cue.startTime)
    }, u.Xa.prototype.update = function() {
        var a = this.cue,
            b = this.a.currentTime();
        this.selected(a.startTime <= b && b < a.sa)
    }, u.i.B(u.da.prototype.f.children, {
        subtitlesButton: {},
        captionsButton: {},
        chaptersButton: {}
    }), "undefined" != typeof window.JSON && "function" === window.JSON.parse) u.JSON = window.JSON;
    else {
        u.JSON = {};
        var Y = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        u.JSON.parse = function(a, c) {
            function d(a, e) {
                var f, g, h = a[e];
                if (h && "object" == typeof h)
                    for (f in h) Object.prototype.hasOwnProperty.call(h, f) && (g = d(h, f), g !== b ? h[f] = g : delete h[f]);
                return c.call(a, e, h)
            }
            var e;
            if (a = String(a), Y.lastIndex = 0, Y.test(a) && (a = a.replace(Y, function(a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            })), /^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" == typeof c ? d({
                "": e
            }, "") : e;
            throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
        }
    }
    u.dc = function() {
        var a, c, d = document.getElementsByTagName("video");
        if (d && 0 < d.length)
            for (var e = 0, f = d.length; f > e; e++) {
                if (!(c = d[e]) || !c.getAttribute) {
                    u.lb();
                    break
                }
                c.player === b && (a = c.getAttribute("data-setup"), a !== h && (a = u.JSON.parse(a || "{}"), v(c, a)))
            } else u.rd || u.lb()
    }, u.lb = function() {
        setTimeout(u.dc, 1)
    }, u.R(window, "load", function() {
        u.rd = f
    }), u.lb(), u.cd = function(a, b) {
        u.C.prototype[a] = b
    };
    var Z = this;
    Z.sd = f, $("videojs", u), $("_V_", u), $("videojs.options", u.options), $("videojs.players", u.va), $("videojs.cache", u.pa), $("videojs.Component", u.c), u.c.prototype.dispose = u.c.prototype.D, u.c.prototype.createEl = u.c.prototype.e, u.c.prototype.el = u.c.prototype.r, u.c.prototype.addChild = u.c.prototype.Y, u.c.prototype.children = u.c.prototype.children, u.c.prototype.on = u.c.prototype.d, u.c.prototype.off = u.c.prototype.t, u.c.prototype.one = u.c.prototype.R, u.c.prototype.trigger = u.c.prototype.k, u.c.prototype.triggerReady = u.c.prototype.Ta, u.c.prototype.show = u.c.prototype.show, u.c.prototype.hide = u.c.prototype.v, u.c.prototype.width = u.c.prototype.width, u.c.prototype.height = u.c.prototype.height, u.c.prototype.dimensions = u.c.prototype.Mc, u.c.prototype.ready = u.c.prototype.P, u.c.prototype.fadeIn = u.c.prototype.$, u.c.prototype.fadeOut = u.c.prototype.ta, $("videojs.Player", u.C), u.C.prototype.dispose = u.C.prototype.D, u.C.prototype.requestFullScreen = u.C.prototype.wa, u.C.prototype.cancelFullScreen = u.C.prototype.pb, u.C.prototype.bufferedPercent = u.C.prototype.Ha, $("videojs.MediaLoader", u.Fc), $("videojs.TextTrackDisplay", u.$b), $("videojs.ControlBar", u.da), $("videojs.Button", u.o), $("videojs.PlayToggle", u.Xb), $("videojs.FullscreenToggle", u.Da), $("videojs.BigPlayButton", u.Wa), $("videojs.LoadingSpinner", u.Vb), $("videojs.CurrentTimeDisplay", u.Ya), $("videojs.DurationDisplay", u.Za), $("videojs.TimeDivider", u.ac), $("videojs.RemainingTimeDisplay", u.gb), $("videojs.Slider", u.M), $("videojs.ProgressControl", u.fb), $("videojs.SeekBar", u.Yb), $("videojs.LoadProgressBar", u.bb), $("videojs.PlayProgressBar", u.Wb), $("videojs.SeekHandle", u.hb), $("videojs.VolumeControl", u.jb), $("videojs.VolumeBar", u.ib), $("videojs.VolumeLevel", u.bc), $("videojs.VolumeHandle", u.kb), $("videojs.MuteToggle", u.fa), $("videojs.PosterImage", u.eb), $("videojs.Menu", u.la), $("videojs.MenuItem", u.L), $("videojs.SubtitlesButton", u.Ea), $("videojs.CaptionsButton", u.Ca), $("videojs.ChaptersButton", u.Sb), $("videojs.MediaTechController", u.q), u.q.prototype.features = u.q.prototype.j, u.q.prototype.j.volumeControl = u.q.prototype.j.U, u.q.prototype.j.fullscreenResize = u.q.prototype.j.jc, u.q.prototype.j.progressEvents = u.q.prototype.j.Mb, u.q.prototype.j.timeupdateEvents = u.q.prototype.j.Pb, $("videojs.Html5", u.m), u.m.Events = u.m.$a, u.m.isSupported = u.m.isSupported, u.m.canPlaySource = u.m.nb, u.m.prototype.setCurrentTime = u.m.prototype.fd, u.m.prototype.setVolume = u.m.prototype.ld, u.m.prototype.setMuted = u.m.prototype.jd, u.m.prototype.setPreload = u.m.prototype.kd, u.m.prototype.setAutoplay = u.m.prototype.ed, u.m.prototype.setLoop = u.m.prototype.hd, $("videojs.Flash", u.l), u.l.isSupported = u.l.isSupported, u.l.canPlaySource = u.l.nb, u.l.onReady = u.l.onReady, $("videojs.TextTrack", u.V), u.V.prototype.label = u.V.prototype.label, $("videojs.CaptionsTrack", u.Rb), $("videojs.SubtitlesTrack", u.Zb), $("videojs.ChaptersTrack", u.Tb), $("videojs.autoSetup", u.dc), $("videojs.plugin", u.cd), $("videojs.createTimeRange", u.tb)
}(), ! function(a, b, c, d, e) {
    e = b.location, a.src = "//www.google-analytics.com/__utm.gif?utmwv=5.4.2&utmac=UA-16505296-2&utmn=1&utmhn=" + d(e.hostname) + "&utmsr=" + b.screen.availWidth + "x" + b.screen.availHeight + "&utmul=" + (c.language || c.userLanguage || "").toLowerCase() + "&utmr=" + d(e.href) + "&utmp=" + d(e.hostname + e.pathname) + "&utmcc=__utma%3D1." + Math.floor(1e10 * Math.random()) + ".1.1.1.1%3B&utme=8(vjsv)9(v4.1.0)"
}(new Image, window, navigator, encodeURIComponent),
function(a, b, c) {
    "use strict";

    function d(c) {
        if (e = b.documentElement, f = b.body, S(), gb = this, c = c || {}, lb = c.constants || {}, c.easing)
            for (var d in c.easing) V[d] = c.easing[d];
        sb = c.edgeStrategy || "set", jb = {
            beforerender: c.beforerender,
            render: c.render
        }, kb = c.forceHeight !== !1, kb && (Hb = c.scale || 1), mb = c.mobileDeceleration || y, ob = c.smoothScrolling !== !1, pb = c.smoothScrollingDuration || z, qb = {
            targetTop: gb.getScrollTop()
        }, Pb = (c.mobileCheck || function() {
            return /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || a.opera)
        })(), Pb ? (ib = b.getElementById("skrollr-body"), ib && fb(), W(), Bb(e, [s, v], [t])) : Bb(e, [s, u], [t]), gb.refresh(), vb(a, "resize orientationchange", function() {
            var a = e.clientWidth,
                b = e.clientHeight;
            (b !== Mb || a !== Lb) && (Mb = b, Lb = a, Nb = !0)
        });
        var g = T();
        return function h() {
            Z(), ub = g(h)
        }(), gb
    }
    var e, f, g = a.skrollr = {
            get: function() {
                return gb
            },
            init: function(a) {
                return gb || new d(a)
            },
            VERSION: "0.6.17"
        }, h = Object.prototype.hasOwnProperty,
        i = a.Math,
        j = a.getComputedStyle,
        k = "touchstart",
        l = "touchmove",
        m = "touchcancel",
        n = "touchend",
        o = "skrollable",
        p = o + "-before",
        q = o + "-between",
        r = o + "-after",
        s = "skrollr",
        t = "no-" + s,
        u = s + "-desktop",
        v = s + "-mobile",
        w = "linear",
        x = 1e3,
        y = .004,
        z = 200,
        A = "start",
        B = "end",
        C = "center",
        D = "bottom",
        E = "___skrollable_id",
        F = /^(?:input|textarea|button|select)$/i,
        G = /^\s+|\s+$/g,
        H = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
        I = /\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
        J = /^([a-z\-]+)\[(\w+)\]$/,
        K = /-([a-z])/g,
        L = function(a, b) {
            return b.toUpperCase()
        }, M = /[\-+]?[\d]*\.?[\d]+/g,
        N = /\{\?\}/g,
        O = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
        P = /[a-z\-]+-gradient/g,
        Q = "",
        R = "",
        S = function() {
            var a = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
            if (j) {
                var b = j(f, null);
                for (var c in b)
                    if (Q = c.match(a) || +c == c && b[c].match(a)) break;
                if (!Q) return void(Q = R = "");
                Q = Q[0], "-" === Q.slice(0, 1) ? (R = Q, Q = {
                    "-webkit-": "webkit",
                    "-moz-": "Moz",
                    "-ms-": "ms",
                    "-o-": "O"
                }[Q]) : R = "-" + Q.toLowerCase() + "-"
            }
        }, T = function() {
            var b = a.requestAnimationFrame || a[Q.toLowerCase() + "RequestAnimationFrame"],
                c = Eb();
            return (Pb || !b) && (b = function(b) {
                var d = Eb() - c,
                    e = i.max(0, 1e3 / 60 - d);
                return a.setTimeout(function() {
                    c = Eb(), b()
                }, e)
            }), b
        }, U = function() {
            var b = a.cancelAnimationFrame || a[Q.toLowerCase() + "CancelAnimationFrame"];
            return (Pb || !b) && (b = function(b) {
                return a.clearTimeout(b)
            }), b
        }, V = {
            begin: function() {
                return 0
            },
            end: function() {
                return 1
            },
            linear: function(a) {
                return a
            },
            quadratic: function(a) {
                return a * a
            },
            cubic: function(a) {
                return a * a * a
            },
            swing: function(a) {
                return -i.cos(a * i.PI) / 2 + .5
            },
            sqrt: function(a) {
                return i.sqrt(a)
            },
            outCubic: function(a) {
                return i.pow(a - 1, 3) + 1
            },
            bounce: function(a) {
                var b;
                if (.5083 >= a) b = 3;
                else if (.8489 >= a) b = 9;
                else if (.96208 >= a) b = 27;
                else {
                    if (!(.99981 >= a)) return 1;
                    b = 91
                }
                return 1 - i.abs(3 * i.cos(a * b * 1.028) / b)
            }
        };
    d.prototype.refresh = function(a) {
        var d, e, f = !1;
        for (a === c ? (f = !0, hb = [], Ob = 0, a = b.getElementsByTagName("*")) : a = [].concat(a), d = 0, e = a.length; e > d; d++) {
            var g = a[d],
                h = g,
                i = [],
                j = ob,
                k = sb;
            if (g.attributes) {
                for (var l = 0, m = g.attributes.length; m > l; l++) {
                    var n = g.attributes[l];
                    if ("data-anchor-target" !== n.name)
                        if ("data-smooth-scrolling" !== n.name)
                            if ("data-edge-strategy" !== n.name) {
                                var p = n.name.match(H);
                                if (null !== p) {
                                    var q = {
                                        props: n.value,
                                        element: g
                                    };
                                    i.push(q);
                                    var r = p[1];
                                    r = r && lb[r.substr(1)] || 0;
                                    var s = p[2];
                                    /p$/.test(s) ? (q.isPercentage = !0, q.offset = ((0 | s.slice(0, -1)) + r) / 100) : q.offset = (0 | s) + r;
                                    var t = p[3],
                                        u = p[4] || t;
                                    t && t !== A && t !== B ? (q.mode = "relative", q.anchors = [t, u]) : (q.mode = "absolute", t === B ? q.isEnd = !0 : q.isPercentage || (q.frame = q.offset * Hb, delete q.offset))
                                }
                            } else k = n.value;
                            else j = "off" !== n.value;
                            else if (h = b.querySelector(n.value), null === h) throw 'Unable to find anchor target "' + n.value + '"'
                }
                if (i.length) {
                    var v, w, x;
                    !f && E in g ? (x = g[E], v = hb[x].styleAttr, w = hb[x].classAttr) : (x = g[E] = Ob++, v = g.style.cssText, w = Ab(g)), hb[x] = {
                        element: g,
                        styleAttr: v,
                        classAttr: w,
                        anchorTarget: h,
                        keyFrames: i,
                        smoothScrolling: j,
                        edgeStrategy: k
                    }, Bb(g, [o], [])
                }
            }
        }
        for (yb(), d = 0, e = a.length; e > d; d++) {
            var y = hb[a[d][E]];
            y !== c && ($(y), ab(y))
        }
        return gb
    }, d.prototype.relativeToAbsolute = function(a, b, c) {
        var d = e.clientHeight,
            f = a.getBoundingClientRect(),
            g = f.top,
            h = f.bottom - f.top;
        return b === D ? g -= d : b === C && (g -= d / 2), c === D ? g += h : c === C && (g += h / 2), g += gb.getScrollTop(), g + .5 | 0
    }, d.prototype.animateTo = function(a, b) {
        b = b || {};
        var d = Eb(),
            e = gb.getScrollTop();
        return nb = {
            startTop: e,
            topDiff: a - e,
            targetTop: a,
            duration: b.duration || x,
            startTime: d,
            endTime: d + (b.duration || x),
            easing: V[b.easing || w],
            done: b.done
        }, nb.topDiff || (nb.done && nb.done.call(gb, !1), nb = c), gb
    }, d.prototype.stopAnimateTo = function() {
        nb && nb.done && nb.done.call(gb, !0), nb = c
    }, d.prototype.isAnimatingTo = function() {
        return !!nb
    }, d.prototype.setScrollTop = function(b, c) {
        return rb = c === !0, Pb ? Qb = i.min(i.max(b, 0), Gb) : a.scrollTo(0, b), gb
    }, d.prototype.getScrollTop = function() {
        return Pb ? Qb : a.pageYOffset || e.scrollTop || f.scrollTop || 0
    }, d.prototype.getMaxScrollTop = function() {
        return Gb
    }, d.prototype.on = function(a, b) {
        return jb[a] = b, gb
    }, d.prototype.off = function(a) {
        return delete jb[a], gb
    }, d.prototype.destroy = function() {
        var a = U();
        a(ub), xb(), Bb(e, [t], [s, u, v]);
        for (var b = 0, d = hb.length; d > b; b++) eb(hb[b].element);
        e.style.overflow = f.style.overflow = "auto", e.style.height = f.style.height = "auto", ib && g.setStyle(ib, "transform", "none"), gb = c, ib = c, jb = c, kb = c, Gb = 0, Hb = 1, lb = c, mb = c, Ib = "down", Jb = -1, Lb = 0, Mb = 0, Nb = !1, nb = c, ob = c, pb = c, qb = c, rb = c, Ob = 0, sb = c, Pb = !1, Qb = 0, tb = c
    };
    var W = function() {
        var d, g, h, j, o, p, q, r, s, t, u, v;
        vb(e, [k, l, m, n].join(" "), function(a) {
            var e = a.changedTouches[0];
            for (j = a.target; 3 === j.nodeType;) j = j.parentNode;
            switch (o = e.clientY, p = e.clientX, t = a.timeStamp, F.test(j.tagName) || a.preventDefault(), a.type) {
                case k:
                    d && d.blur(), gb.stopAnimateTo(), d = j, g = q = o, h = p, s = t;
                    break;
                case l:
                    r = o - q, v = t - u, gb.setScrollTop(Qb - r, !0), q = o, u = t;
                    break;
                default:
                case m:
                case n:
                    var f = g - o,
                        w = h - p,
                        x = w * w + f * f;
                    if (49 > x) {
                        if (!F.test(d.tagName)) {
                            d.focus();
                            var y = b.createEvent("MouseEvents");
                            y.initMouseEvent("click", !0, !0, a.view, 1, e.screenX, e.screenY, e.clientX, e.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null), d.dispatchEvent(y)
                        }
                        return
                    }
                    d = c;
                    var z = r / v;
                    z = i.max(i.min(z, 3), -3);
                    var A = i.abs(z / mb),
                        B = z * A + .5 * mb * A * A,
                        C = gb.getScrollTop() - B,
                        D = 0;
                    C > Gb ? (D = (Gb - C) / B, C = Gb) : 0 > C && (D = -C / B, C = 0), A *= 1 - D, gb.animateTo(C + .5 | 0, {
                        easing: "outCubic",
                        duration: A
                    })
            }
        }), a.scrollTo(0, 0), e.style.overflow = f.style.overflow = "hidden"
    }, X = function() {
            var a, b, c, d, f, g, h, j, k;
            for (j = 0, k = hb.length; k > j; j++)
                for (a = hb[j], b = a.element, c = a.anchorTarget, d = a.keyFrames, f = 0, g = d.length; g > f; f++) {
                    h = d[f];
                    var l = h.offset;
                    h.isPercentage && (l *= e.clientHeight, h.frame = l), "relative" === h.mode && (eb(b), h.frame = gb.relativeToAbsolute(c, h.anchors[0], h.anchors[1]) - l, eb(b, !0)), kb && !h.isEnd && h.frame > Gb && (Gb = h.frame)
                }
            for (Gb = i.max(Gb, zb()), j = 0, k = hb.length; k > j; j++) {
                for (a = hb[j], d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], h.isEnd && (h.frame = Gb - h.offset);
                a.keyFrames.sort(Fb)
            }
        }, Y = function(a, b) {
            for (var c = 0, d = hb.length; d > c; c++) {
                var e, f, i = hb[c],
                    j = i.element,
                    k = i.smoothScrolling ? a : b,
                    l = i.keyFrames,
                    m = l[0].frame,
                    n = l[l.length - 1].frame,
                    s = m > k,
                    t = k > n,
                    u = l[s ? 0 : l.length - 1];
                if (s || t) {
                    if (s && -1 === i.edge || t && 1 === i.edge) continue;
                    switch (Bb(j, [s ? p : r], [p, q, r]), i.edge = s ? -1 : 1, i.edgeStrategy) {
                        case "reset":
                            eb(j);
                            continue;
                        case "ease":
                            k = u.frame;
                            break;
                        default:
                        case "set":
                            var v = u.props;
                            for (e in v) h.call(v, e) && (f = db(v[e].value), g.setStyle(j, e, f));
                            continue
                    }
                } else 0 !== i.edge && (Bb(j, [o, q], [p, r]), i.edge = 0);
                for (var w = 0, x = l.length - 1; x > w; w++)
                    if (k >= l[w].frame && k <= l[w + 1].frame) {
                        var y = l[w],
                            z = l[w + 1];
                        for (e in y.props)
                            if (h.call(y.props, e)) {
                                var A = (k - y.frame) / (z.frame - y.frame);
                                A = y.props[e].easing(A), f = cb(y.props[e].value, z.props[e].value, A), f = db(f), g.setStyle(j, e, f)
                            }
                        break
                    }
            }
        }, Z = function() {
            Nb && (Nb = !1, yb());
            var a, b, d = gb.getScrollTop(),
                e = Eb();
            if (nb) e >= nb.endTime ? (d = nb.targetTop, a = nb.done, nb = c) : (b = nb.easing((e - nb.startTime) / nb.duration), d = nb.startTop + b * nb.topDiff | 0), gb.setScrollTop(d, !0);
            else if (!rb) {
                var f = qb.targetTop - d;
                f && (qb = {
                    startTop: Jb,
                    topDiff: d - Jb,
                    targetTop: d,
                    startTime: Kb,
                    endTime: Kb + pb
                }), e <= qb.endTime && (b = V.sqrt((e - qb.startTime) / pb), d = qb.startTop + b * qb.topDiff | 0)
            }
            if (Pb && ib && g.setStyle(ib, "transform", "translate(0, " + -Qb + "px) " + tb), rb || Jb !== d) {
                Ib = d > Jb ? "down" : Jb > d ? "up" : Ib, rb = !1;
                var h = {
                    curTop: d,
                    lastTop: Jb,
                    maxTop: Gb,
                    direction: Ib
                }, i = jb.beforerender && jb.beforerender.call(gb, h);
                i !== !1 && (Y(d, gb.getScrollTop()), Jb = d, jb.render && jb.render.call(gb, h)), a && a.call(gb, !1)
            }
            Kb = e
        }, $ = function(a) {
            for (var b = 0, c = a.keyFrames.length; c > b; b++) {
                for (var d, e, f, g, h = a.keyFrames[b], i = {}; null !== (g = I.exec(h.props));) f = g[1], e = g[2], d = f.match(J), null !== d ? (f = d[1], d = d[2]) : d = w, e = e.indexOf("!") ? _(e) : [e.slice(1)], i[f] = {
                    value: e,
                    easing: V[d]
                };
                h.props = i
            }
        }, _ = function(a) {
            var b = [];
            return O.lastIndex = 0, a = a.replace(O, function(a) {
                return a.replace(M, function(a) {
                    return a / 255 * 100 + "%"
                })
            }), R && (P.lastIndex = 0, a = a.replace(P, function(a) {
                return R + a
            })), a = a.replace(M, function(a) {
                return b.push(+a), "{?}"
            }), b.unshift(a), b
        }, ab = function(a) {
            var b, c, d = {};
            for (b = 0, c = a.keyFrames.length; c > b; b++) bb(a.keyFrames[b], d);
            for (d = {}, b = a.keyFrames.length - 1; b >= 0; b--) bb(a.keyFrames[b], d)
        }, bb = function(a, b) {
            var c;
            for (c in b) h.call(a.props, c) || (a.props[c] = b[c]);
            for (c in a.props) b[c] = a.props[c]
        }, cb = function(a, b, c) {
            var d, e = a.length;
            if (e !== b.length) throw "Can't interpolate between \"" + a[0] + '" and "' + b[0] + '"';
            var f = [a[0]];
            for (d = 1; e > d; d++) f[d] = a[d] + (b[d] - a[d]) * c;
            return f
        }, db = function(a) {
            var b = 1;
            return N.lastIndex = 0, a[0].replace(N, function() {
                return a[b++]
            })
        }, eb = function(a, b) {
            a = [].concat(a);
            for (var c, d, e = 0, f = a.length; f > e; e++) d = a[e], c = hb[d[E]], c && (b ? (d.style.cssText = c.dirtyStyleAttr, Bb(d, c.dirtyClassAttr)) : (c.dirtyStyleAttr = d.style.cssText, c.dirtyClassAttr = Ab(d), d.style.cssText = c.styleAttr, Bb(d, c.classAttr)))
        }, fb = function() {
            tb = "translateZ(0)", g.setStyle(ib, "transform", tb);
            var a = j(ib),
                b = a.getPropertyValue("transform"),
                c = a.getPropertyValue(R + "transform"),
                d = b && "none" !== b || c && "none" !== c;
            d || (tb = "")
        };
    g.setStyle = function(a, b, c) {
        var d = a.style;
        if (b = b.replace(K, L).replace("-", ""), "zIndex" === b) d[b] = isNaN(c) ? c : "" + (0 | c);
        else if ("float" === b) d.styleFloat = d.cssFloat = c;
        else try {
            Q && (d[Q + b.slice(0, 1).toUpperCase() + b.slice(1)] = c), d[b] = c
        } catch (e) {}
    };
    var gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb = g.addEvent = function(b, c, d) {
            var e = function(b) {
                return b = b || a.event, b.target || (b.target = b.srcElement), b.preventDefault || (b.preventDefault = function() {
                    b.returnValue = !1
                }), d.call(this, b)
            };
            c = c.split(" ");
            for (var f, g = 0, h = c.length; h > g; g++) f = c[g], b.addEventListener ? b.addEventListener(f, d, !1) : b.attachEvent("on" + f, e), Rb.push({
                element: b,
                name: f,
                listener: d
            })
        }, wb = g.removeEvent = function(a, b, c) {
            b = b.split(" ");
            for (var d = 0, e = b.length; e > d; d++) a.removeEventListener ? a.removeEventListener(b[d], c, !1) : a.detachEvent("on" + b[d], c)
        }, xb = function() {
            for (var a, b = 0, c = Rb.length; c > b; b++) a = Rb[b], wb(a.element, a.name, a.listener);
            Rb = []
        }, yb = function() {
            var a = gb.getScrollTop();
            Gb = 0, kb && !Pb && (f.style.height = "auto"), X(), kb && !Pb && (f.style.height = Gb + e.clientHeight + "px"), Pb ? gb.setScrollTop(i.min(gb.getScrollTop(), Gb)) : gb.setScrollTop(a, !0), rb = !0
        }, zb = function() {
            var a = ib && ib.offsetHeight || 0,
                b = i.max(a, f.scrollHeight, f.offsetHeight, e.scrollHeight, e.offsetHeight, e.clientHeight);
            return b - e.clientHeight
        }, Ab = function(b) {
            var c = "className";
            return a.SVGElement && b instanceof a.SVGElement && (b = b[c], c = "baseVal"), b[c]
        }, Bb = function(b, d, e) {
            var f = "className";
            if (a.SVGElement && b instanceof a.SVGElement && (b = b[f], f = "baseVal"), e === c) return void(b[f] = d);
            for (var g = b[f], h = 0, i = e.length; i > h; h++) g = Db(g).replace(Db(e[h]), " ");
            g = Cb(g);
            for (var j = 0, k = d.length; k > j; j++) - 1 === Db(g).indexOf(Db(d[j])) && (g += " " + d[j]);
            b[f] = Cb(g)
        }, Cb = function(a) {
            return a.replace(G, "")
        }, Db = function(a) {
            return " " + a + " "
        }, Eb = Date.now || function() {
            return +new Date
        }, Fb = function(a, b) {
            return a.frame - b.frame
        }, Gb = 0,
        Hb = 1,
        Ib = "down",
        Jb = -1,
        Kb = Eb(),
        Lb = 0,
        Mb = 0,
        Nb = !1,
        Ob = 0,
        Pb = !1,
        Qb = 0,
        Rb = []
}(window, document);

