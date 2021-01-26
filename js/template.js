function detectmob() {
    var e = !1;
    return function(t) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
    }(navigator.userAgent || navigator.vendor || window.opera), e
}

function mobilecheck() {
    var e = !1;
    return function(t) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
    }(navigator.userAgent || navigator.vendor || window.opera), e
}
if (function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = !!e && "length" in e && e.length,
                n = fe.type(e);
            return "function" === n || fe.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function i(e, t, n) {
            if (fe.isFunction(t)) return fe.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return fe.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (Ce.test(t)) return fe.filter(t, e, n);
                t = fe.filter(t, e)
            }
            return fe.grep(e, function(e) {
                return fe.inArray(e, t) > -1 !== n
            })
        }

        function o(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function r(e) {
            var t = {};
            return fe.each(e.match($e) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function a() {
            ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (ie.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
        }

        function s() {
            (ie.addEventListener || "load" === e.event.type || "complete" === ie.readyState) && (a(), fe.ready())
        }

        function l(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(Me, "-$1").toLowerCase();
                if (n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Oe.test(n) ? fe.parseJSON(n) : n
                    } catch (o) {}
                    fe.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function u(e) {
            var t;
            for (t in e)
                if (("data" !== t || !fe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function c(e, t, n, i) {
            if (Ie(e)) {
                var o, r, a = fe.expando,
                    s = e.nodeType,
                    l = s ? fe.cache : e,
                    u = s ? e[a] : e[a] && a;
                if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = ne.pop() || fe.guid++ : a), l[u] || (l[u] = s ? {} : {
                    toJSON: fe.noop
                }), ("object" == typeof t || "function" == typeof t) && (i ? l[u] = fe.extend(l[u], t) : l[u].data = fe.extend(l[u].data, t)), r = l[u], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[fe.camelCase(t)] = n), "string" == typeof t ? (o = r[t], null == o && (o = r[fe.camelCase(t)])) : o = r, o
            }
        }

        function d(e, t, n) {
            if (Ie(e)) {
                var i, o, r = e.nodeType,
                    a = r ? fe.cache : e,
                    s = r ? e[fe.expando] : fe.expando;
                if (a[s]) {
                    if (t && (i = n ? a[s] : a[s].data)) {
                        fe.isArray(t) ? t = t.concat(fe.map(t, fe.camelCase)) : t in i ? t = [t] : (t = fe.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length;
                        for (; o--;) delete i[t[o]];
                        if (n ? !u(i) : !fe.isEmptyObject(i)) return
                    }(n || (delete a[s].data, u(a[s]))) && (r ? fe.cleanData([e], !0) : de.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
                }
            }
        }

        function p(e, t, n, i) {
            var o, r = 1,
                a = 20,
                s = i ? function() {
                    return i.cur()
                } : function() {
                    return fe.css(e, t, "")
                },
                l = s(),
                u = n && n[3] || (fe.cssNumber[t] ? "" : "px"),
                c = (fe.cssNumber[t] || "px" !== u && +l) && Le.exec(fe.css(e, t));
            if (c && c[3] !== u) {
                u = u || c[3], n = n || [], c = +l || 1;
                do r = r || ".5", c /= r, fe.style(e, t, c + u); while (r !== (r = s() / l) && 1 !== r && --a)
            }
            return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
        }

        function f(e) {
            var t = Be.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function h(e, t) {
            var n, i, o = 0,
                r = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
            if (!r)
                for (r = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || fe.nodeName(i, t) ? r.push(i) : fe.merge(r, h(i, t));
            return void 0 === t || t && fe.nodeName(e, t) ? fe.merge([e], r) : r
        }

        function m(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) fe._data(n, "globalEval", !t || fe._data(t[i], "globalEval"))
        }

        function g(e) {
            Pe.test(e.type) && (e.defaultChecked = e.checked)
        }

        function v(e, t, n, i, o) {
            for (var r, a, s, l, u, c, d, p = e.length, v = f(t), y = [], b = 0; p > b; b++)
                if (a = e[b], a || 0 === a)
                    if ("object" === fe.type(a)) fe.merge(y, a.nodeType ? [a] : a);
                    else if (Ye.test(a)) {
                for (l = l || v.appendChild(t.createElement("div")), u = (qe.exec(a) || ["", ""])[1].toLowerCase(), d = Ue[u] || Ue._default, l.innerHTML = d[1] + fe.htmlPrefilter(a) + d[2], r = d[0]; r--;) l = l.lastChild;
                if (!de.leadingWhitespace && We.test(a) && y.push(t.createTextNode(We.exec(a)[0])), !de.tbody)
                    for (a = "table" !== u || Ze.test(a) ? "<table>" !== d[1] || Ze.test(a) ? 0 : l : l.firstChild, r = a && a.childNodes.length; r--;) fe.nodeName(c = a.childNodes[r], "tbody") && !c.childNodes.length && a.removeChild(c);
                for (fe.merge(y, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                l = v.lastChild
            } else y.push(t.createTextNode(a));
            for (l && v.removeChild(l), de.appendChecked || fe.grep(h(y, "input"), g), b = 0; a = y[b++];)
                if (i && fe.inArray(a, i) > -1) o && o.push(a);
                else if (s = fe.contains(a.ownerDocument, a), l = h(v.appendChild(a), "script"), s && m(l), n)
                for (r = 0; a = l[r++];) ze.test(a.type || "") && n.push(a);
            return l = null, v
        }

        function y() {
            return !0
        }

        function b() {
            return !1
        }

        function w() {
            try {
                return ie.activeElement
            } catch (e) {}
        }

        function x(e, t, n, i, o, r) {
            var a, s;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (s in t) x(e, s, n, i, t[s], r);
                return e
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = b;
            else if (!o) return e;
            return 1 === r && (a = o, o = function(e) {
                return fe().off(e), a.apply(this, arguments)
            }, o.guid = a.guid || (a.guid = fe.guid++)), e.each(function() {
                fe.event.add(this, t, o, i, n)
            })
        }

        function T(e, t) {
            return fe.nodeName(e, "table") && fe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function C(e) {
            return e.type = (null !== fe.find.attr(e, "type")) + "/" + e.type, e
        }

        function k(e) {
            var t = ot.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function E(e, t) {
            if (1 === t.nodeType && fe.hasData(e)) {
                var n, i, o, r = fe._data(e),
                    a = fe._data(t, r),
                    s = r.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)
                        for (i = 0, o = s[n].length; o > i; i++) fe.event.add(t, n, s[n][i])
                }
                a.data && (a.data = fe.extend({}, a.data))
            }
        }

        function D(e, t) {
            var n, i, o;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[fe.expando]) {
                    o = fe._data(t);
                    for (i in o.events) fe.removeEvent(t, i, o.handle);
                    t.removeAttribute(fe.expando)
                }
                "script" === n && t.text !== e.text ? (C(t).text = e.text, k(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !fe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Pe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function S(e, t, n, i) {
            t = re.apply([], t);
            var o, r, a, s, l, u, c = 0,
                d = e.length,
                p = d - 1,
                f = t[0],
                m = fe.isFunction(f);
            if (m || d > 1 && "string" == typeof f && !de.checkClone && it.test(f)) return e.each(function(o) {
                var r = e.eq(o);
                m && (t[0] = f.call(this, o, r.html())), S(r, t, n, i)
            });
            if (d && (u = v(t, e[0].ownerDocument, !1, e, i), o = u.firstChild, 1 === u.childNodes.length && (u = o), o || i)) {
                for (s = fe.map(h(u, "script"), C), a = s.length; d > c; c++) r = u, c !== p && (r = fe.clone(r, !0, !0), a && fe.merge(s, h(r, "script"))), n.call(e[c], r, c);
                if (a)
                    for (l = s[s.length - 1].ownerDocument, fe.map(s, k), c = 0; a > c; c++) r = s[c], ze.test(r.type || "") && !fe._data(r, "globalEval") && fe.contains(l, r) && (r.src ? fe._evalUrl && fe._evalUrl(r.src) : fe.globalEval((r.text || r.textContent || r.innerHTML || "").replace(rt, "")));
                u = o = null
            }
            return e
        }

        function _(e, t, n) {
            for (var i, o = t ? fe.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || fe.cleanData(h(i)), i.parentNode && (n && fe.contains(i.ownerDocument, i) && m(h(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function $(e, t) {
            var n = fe(t.createElement(e)).appendTo(t.body),
                i = fe.css(n[0], "display");
            return n.detach(), i
        }

        function N(e) {
            var t = ie,
                n = ut[e];
            return n || (n = $(e, t), "none" !== n && n || (lt = (lt || fe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (lt[0].contentWindow || lt[0].contentDocument).document, t.write(), t.close(), n = $(e, t), lt.detach()), ut[e] = n), n
        }

        function A(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function I(e) {
            if (e in kt) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Ct.length; n--;)
                if (e = Ct[n] + t, e in kt) return e
        }

        function O(e, t) {
            for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (r[a] = fe._data(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Re(i) && (r[a] = fe._data(i, "olddisplay", N(i.nodeName)))) : (o = Re(i), (n && "none" !== n || !o) && fe._data(i, "olddisplay", o ? n : fe.css(i, "display"))));
            for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
            return e
        }

        function M(e, t, n) {
            var i = wt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function F(e, t, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += fe.css(e, n + je[r], !0, o)), i ? ("content" === n && (a -= fe.css(e, "padding" + je[r], !0, o)), "margin" !== n && (a -= fe.css(e, "border" + je[r] + "Width", !0, o))) : (a += fe.css(e, "padding" + je[r], !0, o), "padding" !== n && (a += fe.css(e, "border" + je[r] + "Width", !0, o)));
            return a
        }

        function L(e, t, n) {
            var i = !0,
                o = "width" === t ? e.offsetWidth : e.offsetHeight,
                r = ht(e),
                a = de.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (o = mt(e, t, r), (0 > o || null == o) && (o = e.style[t]), dt.test(o)) return o;
                i = a && (de.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
            }
            return o + F(e, t, n || (a ? "border" : "content"), i, r) + "px"
        }

        function j(e, t, n, i, o) {
            return new j.prototype.init(e, t, n, i, o)
        }

        function R() {
            return e.setTimeout(function() {
                Et = void 0
            }), Et = fe.now()
        }

        function H(e, t) {
            var n, i = {
                    height: e
                },
                o = 0;
            for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = je[o], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function P(e, t, n) {
            for (var i, o = (W.tweeners[t] || []).concat(W.tweeners["*"]), r = 0, a = o.length; a > r; r++)
                if (i = o[r].call(n, t, e)) return i
        }

        function q(e, t, n) {
            var i, o, r, a, s, l, u, c, d = this,
                p = {},
                f = e.style,
                h = e.nodeType && Re(e),
                m = fe._data(e, "fxshow");
            n.queue || (s = fe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, d.always(function() {
                d.always(function() {
                    s.unqueued--, fe.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = fe.css(e, "display"), c = "none" === u ? fe._data(e, "olddisplay") || N(e.nodeName) : u, "inline" === c && "none" === fe.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== N(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", de.shrinkWrapBlocks() || d.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (o = t[i], St.exec(o)) {
                    if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i]) continue;
                        h = !0
                    }
                    p[i] = m && m[i] || fe.style(e, i)
                } else u = void 0;
            if (fe.isEmptyObject(p)) "inline" === ("none" === u ? N(e.nodeName) : u) && (f.display = u);
            else {
                m ? "hidden" in m && (h = m.hidden) : m = fe._data(e, "fxshow", {}), r && (m.hidden = !h), h ? fe(e).show() : d.done(function() {
                    fe(e).hide()
                }), d.done(function() {
                    var t;
                    fe._removeData(e, "fxshow");
                    for (t in p) fe.style(e, t, p[t])
                });
                for (i in p) a = P(h ? m[i] : 0, i, d), i in m || (m[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function z(e, t) {
            var n, i, o, r, a;
            for (n in e)
                if (i = fe.camelCase(n), o = t[i], r = e[n], fe.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), a = fe.cssHooks[i], a && "expand" in a) {
                    r = a.expand(r), delete e[i];
                    for (n in r) n in e || (e[n] = r[n], t[n] = o)
                } else t[i] = o
        }

        function W(e, t, n) {
            var i, o, r = 0,
                a = W.prefilters.length,
                s = fe.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var t = Et || R(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, r = 1 - i, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(r);
                    return s.notifyWith(e, [u, r, n]), 1 > r && l ? n : (s.resolveWith(e, [u]), !1)
                },
                u = s.promise({
                    elem: e,
                    props: fe.extend({}, t),
                    opts: fe.extend(!0, {
                        specialEasing: {},
                        easing: fe.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Et || R(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = fe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) u.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                    }
                }),
                c = u.props;
            for (z(c, u.opts.specialEasing); a > r; r++)
                if (i = W.prefilters[r].call(u, e, c, u.opts)) return fe.isFunction(i.stop) && (fe._queueHooks(u.elem, u.opts.queue).stop = fe.proxy(i.stop, i)), i;
            return fe.map(c, P, u), fe.isFunction(u.opts.start) && u.opts.start.call(e, u), fe.fx.timer(fe.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function B(e) {
            return fe.attr(e, "class") || ""
        }

        function U(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0,
                    r = t.toLowerCase().match($e) || [];
                if (fe.isFunction(n))
                    for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function Y(e, t, n, i) {
            function o(s) {
                var l;
                return r[s] = !0, fe.each(e[s] || [], function(e, s) {
                    var u = s(t, n, i);
                    return "string" != typeof u || a || r[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
                }), l
            }
            var r = {},
                a = e === Jt;
            return o(t.dataTypes[0]) || !r["*"] && o("*")
        }

        function Z(e, t) {
            var n, i, o = fe.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
            return n && fe.extend(!0, e, n), e
        }

        function X(e, t, n) {
            for (var i, o, r, a, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
            if (o)
                for (a in s)
                    if (s[a] && s[a].test(o)) {
                        l.unshift(a);
                        break
                    }
            if (l[0] in n) r = l[0];
            else {
                for (a in n) {
                    if (!l[0] || e.converters[a + " " + l[0]]) {
                        r = a;
                        break
                    }
                    i || (i = a)
                }
                r = r || i
            }
            return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
        }

        function V(e, t, n, i) {
            var o, r, a, s, l, u = {},
                c = e.dataTypes.slice();
            if (c[1])
                for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
            for (r = c.shift(); r;)
                if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (a = u[l + " " + r] || u["* " + r], !a)
                    for (o in u)
                        if (s = o.split(" "), s[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                            a === !0 ? a = u[o] : u[o] !== !0 && (r = s[0], c.unshift(s[1]));
                            break
                        }
                if (a !== !0)
                    if (a && e["throws"]) t = a(t);
                    else try {
                        t = a(t)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: a ? d : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function K(e) {
            return e.style && e.style.display || fe.css(e, "display")
        }

        function G(e) {
            if (!fe.contains(e.ownerDocument || ie, e)) return !0;
            for (; e && 1 === e.nodeType;) {
                if ("none" === K(e) || "hidden" === e.type) return !0;
                e = e.parentNode
            }
            return !1
        }

        function J(e, t, n, i) {
            var o;
            if (fe.isArray(t)) fe.each(t, function(t, o) {
                n || on.test(e) ? i(e, o) : J(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
            });
            else if (n || "object" !== fe.type(t)) i(e, t);
            else
                for (o in t) J(e + "[" + o + "]", t[o], n, i)
        }

        function Q() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function ee() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function te(e) {
            return fe.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        var ne = [],
            ie = e.document,
            oe = ne.slice,
            re = ne.concat,
            ae = ne.push,
            se = ne.indexOf,
            le = {},
            ue = le.toString,
            ce = le.hasOwnProperty,
            de = {},
            pe = "1.12.4",
            fe = function(e, t) {
                return new fe.fn.init(e, t)
            },
            he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            me = /^-ms-/,
            ge = /-([\da-z])/gi,
            ve = function(e, t) {
                return t.toUpperCase()
            };
        fe.fn = fe.prototype = {
            jquery: pe,
            constructor: fe,
            selector: "",
            length: 0,
            toArray: function() {
                return oe.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : oe.call(this)
            },
            pushStack: function(e) {
                var t = fe.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e) {
                return fe.each(this, e)
            },
            map: function(e) {
                return this.pushStack(fe.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(oe.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ae,
            sort: ne.sort,
            splice: ne.splice
        }, fe.extend = fe.fn.extend = function() {
            var e, t, n, i, o, r, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || fe.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
                if (null != (o = arguments[s]))
                    for (i in o) e = a[i], n = o[i], a !== n && (u && n && (fe.isPlainObject(n) || (t = fe.isArray(n))) ? (t ? (t = !1, r = e && fe.isArray(e) ? e : []) : r = e && fe.isPlainObject(e) ? e : {}, a[i] = fe.extend(u, r, n)) : void 0 !== n && (a[i] = n));
            return a
        }, fe.extend({
            expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === fe.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === fe.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                var t = e && e.toString();
                return !fe.isArray(e) && t - parseFloat(t) + 1 >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== fe.type(e) || e.nodeType || fe.isWindow(e)) return !1;
                try {
                    if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (!de.ownFirst)
                    for (t in e) return ce.call(e, t);
                for (t in e);
                return void 0 === t || ce.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ue.call(e)] || "object" : typeof e
            },
            globalEval: function(t) {
                t && fe.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(me, "ms-").replace(ge, ve)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var i, o = 0;
                if (n(e))
                    for (i = e.length; i > o && t.call(e[o], o, e[o]) !== !1; o++);
                else
                    for (o in e)
                        if (t.call(e[o], o, e[o]) === !1) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(he, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? fe.merge(i, "string" == typeof e ? [e] : e) : ae.call(i, e)), i
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (se) return se.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, o = e.length; n > i;) e[o++] = t[i++];
                if (n !== n)
                    for (; void 0 !== t[i];) e[o++] = t[i++];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var i, o = [], r = 0, a = e.length, s = !n; a > r; r++) i = !t(e[r], r), i !== s && o.push(e[r]);
                return o
            },
            map: function(e, t, i) {
                var o, r, a = 0,
                    s = [];
                if (n(e))
                    for (o = e.length; o > a; a++) r = t(e[a], a, i), null != r && s.push(r);
                else
                    for (a in e) r = t(e[a], a, i), null != r && s.push(r);
                return re.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, o;
                return "string" == typeof t && (o = e[t], t = e, e = o), fe.isFunction(e) ? (n = oe.call(arguments, 2), i = function() {
                    return e.apply(t || this, n.concat(oe.call(arguments)))
                }, i.guid = e.guid = e.guid || fe.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: de
        }), "function" == typeof Symbol && (fe.fn[Symbol.iterator] = ne[Symbol.iterator]), fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            le["[object " + t + "]"] = t.toLowerCase()
        });
        var ye = function(e) {
            function t(e, t, n, i) {
                var o, r, a, s, l, u, d, f, h = t && t.ownerDocument,
                    m = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
                if (!i && ((t ? t.ownerDocument || t : P) !== I && A(t), t = t || I, M)) {
                    if (11 !== m && (u = ve.exec(e)))
                        if (o = u[1]) {
                            if (9 === m) {
                                if (!(a = t.getElementById(o))) return n;
                                if (a.id === o) return n.push(a), n
                            } else if (h && (a = h.getElementById(o)) && R(t, a) && a.id === o) return n.push(a), n
                        } else {
                            if (u[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                            if ((o = u[3]) && x.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(o)), n
                        }
                    if (x.qsa && !U[e + " "] && (!F || !F.test(e))) {
                        if (1 !== m) h = t, f = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = H), d = E(e), r = d.length, l = pe.test(s) ? "#" + s : "[id='" + s + "']"; r--;) d[r] = l + " " + p(d[r]);
                            f = d.join(","), h = ye.test(e) && c(t.parentNode) || t
                        }
                        if (f) try {
                            return J.apply(n, h.querySelectorAll(f)), n
                        } catch (g) {} finally {
                            s === H && t.removeAttribute("id")
                        }
                    }
                }
                return S(e.replace(se, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[H] = !0, e
            }

            function o(e) {
                var t = I.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function r(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = t
            }

            function a(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Z) - (~e.sourceIndex || Z);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function u(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function c(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function d() {}

            function p(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
            }

            function f(e, t, n) {
                var i = t.dir,
                    o = n && "parentNode" === i,
                    r = z++;
                return t.first ? function(t, n, r) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) return e(t, n, r)
                } : function(t, n, a) {
                    var s, l, u, c = [q, r];
                    if (a) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || o) {
                                if (u = t[H] || (t[H] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (s = l[i]) && s[0] === q && s[1] === r) return c[2] = s[2];
                                if (l[i] = c, c[2] = e(t, n, a)) return !0
                            }
                }
            }

            function h(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, n, i) {
                for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
                return i
            }

            function g(e, t, n, i, o) {
                for (var r, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(r = e[s]) && (!n || n(r, i, o)) && (a.push(r), u && t.push(s));
                return a
            }

            function v(e, t, n, o, r, a) {
                return o && !o[H] && (o = v(o)), r && !r[H] && (r = v(r, a)), i(function(i, a, s, l) {
                    var u, c, d, p = [],
                        f = [],
                        h = a.length,
                        v = i || m(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !i && t ? v : g(v, p, e, s, l),
                        b = n ? r || (i ? e : h || o) ? [] : a : y;
                    if (n && n(y, b, s, l), o)
                        for (u = g(b, f), o(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[f[c]] = !(y[f[c]] = d));
                    if (i) {
                        if (r || e) {
                            if (r) {
                                for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                                r(null, b = [], u, l)
                            }
                            for (c = b.length; c--;)(d = b[c]) && (u = r ? ee(i, d) : p[c]) > -1 && (i[u] = !(a[u] = d))
                        }
                    } else b = g(b === a ? b.splice(h, b.length) : b), r ? r(null, a, b, l) : J.apply(a, b)
                })
            }

            function y(e) {
                for (var t, n, i, o = e.length, r = T.relative[e[0].type], a = r || T.relative[" "], s = r ? 1 : 0, l = f(function(e) {
                        return e === t
                    }, a, !0), u = f(function(e) {
                        return ee(t, e) > -1
                    }, a, !0), c = [function(e, n, i) {
                        var o = !r && (i || n !== _) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                        return t = null, o
                    }]; o > s; s++)
                    if (n = T.relative[e[s].type]) c = [f(h(c), n)];
                    else {
                        if (n = T.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                            for (i = ++s; o > i && !T.relative[e[i].type]; i++);
                            return v(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(se, "$1"), n, i > s && y(e.slice(s, i)), o > i && y(e = e.slice(i)), o > i && p(e))
                        }
                        c.push(n)
                    }
                return h(c)
            }

            function b(e, n) {
                var o = n.length > 0,
                    r = e.length > 0,
                    a = function(i, a, s, l, u) {
                        var c, d, p, f = 0,
                            h = "0",
                            m = i && [],
                            v = [],
                            y = _,
                            b = i || r && T.find.TAG("*", u),
                            w = q += null == y ? 1 : Math.random() || .1,
                            x = b.length;
                        for (u && (_ = a === I || a || u); h !== x && null != (c = b[h]); h++) {
                            if (r && c) {
                                for (d = 0, a || c.ownerDocument === I || (A(c), s = !M); p = e[d++];)
                                    if (p(c, a || I, s)) {
                                        l.push(c);
                                        break
                                    }
                                u && (q = w)
                            }
                            o && ((c = !p && c) && f--, i && m.push(c))
                        }
                        if (f += h, o && h !== f) {
                            for (d = 0; p = n[d++];) p(m, v, a, s);
                            if (i) {
                                if (f > 0)
                                    for (; h--;) m[h] || v[h] || (v[h] = K.call(l));
                                v = g(v)
                            }
                            J.apply(l, v), u && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                        }
                        return u && (q = w, _ = y), m
                    };
                return o ? i(a) : a
            }
            var w, x, T, C, k, E, D, S, _, $, N, A, I, O, M, F, L, j, R, H = "sizzle" + 1 * new Date,
                P = e.document,
                q = 0,
                z = 0,
                W = n(),
                B = n(),
                U = n(),
                Y = function(e, t) {
                    return e === t && (N = !0), 0
                },
                Z = 1 << 31,
                X = {}.hasOwnProperty,
                V = [],
                K = V.pop,
                G = V.push,
                J = V.push,
                Q = V.slice,
                ee = function(e, t) {
                    for (var n = 0, i = e.length; i > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
                ae = new RegExp(ne + "+", "g"),
                se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                le = new RegExp("^" + ne + "*," + ne + "*"),
                ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                de = new RegExp(re),
                pe = new RegExp("^" + ie + "$"),
                fe = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie + "|[*])"),
                    ATTR: new RegExp("^" + oe),
                    PSEUDO: new RegExp("^" + re),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                he = /^(?:input|select|textarea|button)$/i,
                me = /^h\d$/i,
                ge = /^[^{]+\{\s*\[native \w/,
                ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                be = /'|\\/g,
                we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                xe = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                Te = function() {
                    A()
                };
            try {
                J.apply(V = Q.call(P.childNodes), P.childNodes), V[P.childNodes.length].nodeType
            } catch (Ce) {
                J = {
                    apply: V.length ? function(e, t) {
                        G.apply(e, Q.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            x = t.support = {}, k = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, A = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : P;
                return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, O = I.documentElement, M = !k(I), (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), x.attributes = o(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), x.getElementsByTagName = o(function(e) {
                    return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length
                }), x.getElementsByClassName = ge.test(I.getElementsByClassName), x.getById = o(function(e) {
                    return O.appendChild(e).id = H, !I.getElementsByName || !I.getElementsByName(H).length
                }), x.getById ? (T.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && M) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, T.filter.ID = function(e) {
                    var t = e.replace(we, xe);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete T.find.ID, T.filter.ID = function(e) {
                    var t = e.replace(we, xe);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), T.find.TAG = x.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, T.find.CLASS = x.getElementsByClassName && function(e, t) {
                    return "undefined" != typeof t.getElementsByClassName && M ? t.getElementsByClassName(e) : void 0
                }, L = [], F = [], (x.qsa = ge.test(I.querySelectorAll)) && (o(function(e) {
                    O.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + H + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || F.push(".#.+[+~]")
                }), o(function(e) {
                    var t = I.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
                })), (x.matchesSelector = ge.test(j = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function(e) {
                    x.disconnectedMatch = j.call(e, "div"), j.call(e, "[s!='']:x"), L.push("!=", re)
                }), F = F.length && new RegExp(F.join("|")), L = L.length && new RegExp(L.join("|")), t = ge.test(O.compareDocumentPosition), R = t || ge.test(O.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, Y = t ? function(e, t) {
                    if (e === t) return N = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === P && R(P, e) ? -1 : t === I || t.ownerDocument === P && R(P, t) ? 1 : $ ? ee($, e) - ee($, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return N = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        l = [t];
                    if (!o || !r) return e === I ? -1 : t === I ? 1 : o ? -1 : r ? 1 : $ ? ee($, e) - ee($, t) : 0;
                    if (o === r) return a(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; s[i] === l[i];) i++;
                    return i ? a(s[i], l[i]) : s[i] === P ? -1 : l[i] === P ? 1 : 0
                }, I) : I
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== I && A(e), n = n.replace(ce, "='$1']"), x.matchesSelector && M && !U[n + " "] && (!L || !L.test(n)) && (!F || !F.test(n))) try {
                    var i = j.call(e, n);
                    if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (o) {}
                return t(n, I, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== I && A(e), R(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== I && A(e);
                var n = T.attrHandle[t.toLowerCase()],
                    i = n && X.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
                return void 0 !== i ? i : x.attributes || !M ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (N = !x.detectDuplicates, $ = !x.sortStable && e.slice(0), e.sort(Y), N) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return $ = null, e
            }, C = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += C(t);
                return n
            }, T = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: fe,
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
                    ATTR: function(e) {
                        return e[1] = e[1].replace(we, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(we, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(we, xe).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = W[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(o) {
                            var r = t.attr(o, e);
                            return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, d, p, f, h, m = r !== a ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s,
                                b = !1;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (p = t; p = p[m];)
                                            if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (p = g, d = p[H] || (p[H] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), u = c[e] || [], f = u[0] === q && u[1], b = f && u[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (b = f = 0) || h.pop();)
                                        if (1 === p.nodeType && ++b && p === t) {
                                            c[e] = [q, f, b];
                                            break
                                        }
                                } else if (y && (p = t, d = p[H] || (p[H] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), u = c[e] || [], f = u[0] === q && u[1], b = f), b === !1)
                                    for (;
                                        (p = ++f && p && p[m] || (b = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (d = p[H] || (p[H] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), c[e] = [q, b]), p !== t)););
                                return b -= o, b === i || b % i === 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var o, r = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return r[H] ? r(n) : r.length > 1 ? (o = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, o = r(e, n), a = o.length; a--;) i = ee(e, o[a]), e[i] = !(t[i] = o[a])
                        }) : function(e) {
                            return r(e, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            o = D(e.replace(se, "$1"));
                        return o[H] ? i(function(e, t, n, i) {
                            for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                        }) : function(e, i, r) {
                            return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(we, xe),
                            function(t) {
                                return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, xe).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === O
                    },
                    focus: function(e) {
                        return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !T.pseudos.empty(e)
                    },
                    header: function(e) {
                        return me.test(e.nodeName)
                    },
                    input: function(e) {
                        return he.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(e, t) {
                        return [t - 1]
                    }),
                    eq: u(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: u(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: u(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: u(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: u(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[w] = s(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[w] = l(w);
            return d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = t.tokenize = function(e, n) {
                var i, o, r, a, s, l, u, c = B[e + " "];
                if (c) return n ? 0 : c.slice(0);
                for (s = e, l = [], u = T.preFilter; s;) {
                    (!i || (o = le.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = ue.exec(s)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(se, " ")
                    }), s = s.slice(i.length));
                    for (a in T.filter) !(o = fe[a].exec(s)) || u[a] && !(o = u[a](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: a,
                        matches: o
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? t.error(e) : B(e, l).slice(0)
            }, D = t.compile = function(e, t) {
                var n, i = [],
                    o = [],
                    r = U[e + " "];
                if (!r) {
                    for (t || (t = E(e)), n = t.length; n--;) r = y(t[n]), r[H] ? i.push(r) : o.push(r);
                    r = U(e, b(o, i)), r.selector = e
                }
                return r
            }, S = t.select = function(e, t, n, i) {
                var o, r, a, s, l, u = "function" == typeof e && e,
                    d = !i && E(e = u.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && x.getById && 9 === t.nodeType && M && T.relative[r[1].type]) {
                        if (t = (T.find.ID(a.matches[0].replace(we, xe), t) || [])[0], !t) return n;
                        u && (t = t.parentNode), e = e.slice(r.shift().value.length)
                    }
                    for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !T.relative[s = a.type]);)
                        if ((l = T.find[s]) && (i = l(a.matches[0].replace(we, xe), ye.test(r[0].type) && c(t.parentNode) || t))) {
                            if (r.splice(o, 1), e = i.length && p(r), !e) return J.apply(n, i), n;
                            break
                        }
                }
                return (u || D(e, d))(i, t, !M, n, !t || ye.test(e) && c(t.parentNode) || t), n
            }, x.sortStable = H.split("").sort(Y).join("") === H, x.detectDuplicates = !!N, A(), x.sortDetached = o(function(e) {
                return 1 & e.compareDocumentPosition(I.createElement("div"))
            }), o(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), x.attributes && o(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || r("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), o(function(e) {
                return null == e.getAttribute("disabled")
            }) || r(te, function(e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        fe.find = ye, fe.expr = ye.selectors, fe.expr[":"] = fe.expr.pseudos, fe.uniqueSort = fe.unique = ye.uniqueSort, fe.text = ye.getText, fe.isXMLDoc = ye.isXML, fe.contains = ye.contains;
        var be = function(e, t, n) {
                for (var i = [], o = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && fe(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            we = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            xe = fe.expr.match.needsContext,
            Te = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            Ce = /^.[^:#\[\.,]*$/;
        fe.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? fe.find.matchesSelector(i, e) ? [i] : [] : fe.find.matches(e, fe.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, fe.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    o = i.length;
                if ("string" != typeof e) return this.pushStack(fe(e).filter(function() {
                    for (t = 0; o > t; t++)
                        if (fe.contains(i[t], this)) return !0
                }));
                for (t = 0; o > t; t++) fe.find(e, i[t], n);
                return n = this.pushStack(o > 1 ? fe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && xe.test(e) ? fe(e) : e || [], !1).length
            }
        });
        var ke, Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            De = fe.fn.init = function(e, t, n) {
                var i, o;
                if (!e) return this;
                if (n = n || ke, "string" == typeof e) {
                    if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Ee.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof fe ? t[0] : t, fe.merge(this, fe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)), Te.test(i[1]) && fe.isPlainObject(t))
                            for (i in t) fe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    if (o = ie.getElementById(i[2]), o && o.parentNode) {
                        if (o.id !== i[2]) return ke.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = ie, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : fe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(fe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), fe.makeArray(e, this))
            };
        De.prototype = fe.fn, ke = fe(ie);
        var Se = /^(?:parents|prev(?:Until|All))/,
            _e = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        fe.fn.extend({
            has: function(e) {
                var t, n = fe(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; i > t; t++)
                        if (fe.contains(this, n[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, o = this.length, r = [], a = xe.test(e) || "string" != typeof e ? fe(e, t || this.context) : 0; o > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
                return this.pushStack(r.length > 1 ? fe.uniqueSort(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? fe.inArray(this[0], fe(e)) : fe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), fe.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return be(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return be(e, "parentNode", n)
            },
            next: function(e) {
                return o(e, "nextSibling")
            },
            prev: function(e) {
                return o(e, "previousSibling")
            },
            nextAll: function(e) {
                return be(e, "nextSibling")
            },
            prevAll: function(e) {
                return be(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return be(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return be(e, "previousSibling", n)
            },
            siblings: function(e) {
                return we((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return we(e.firstChild)
            },
            contents: function(e) {
                return fe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : fe.merge([], e.childNodes)
            }
        }, function(e, t) {
            fe.fn[e] = function(n, i) {
                var o = fe.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = fe.filter(i, o)), this.length > 1 && (_e[e] || (o = fe.uniqueSort(o)), Se.test(e) && (o = o.reverse())), this.pushStack(o)
            }
        });
        var $e = /\S+/g;
        fe.Callbacks = function(e) {
            e = "string" == typeof e ? r(e) : fe.extend({}, e);
            var t, n, i, o, a = [],
                s = [],
                l = -1,
                u = function() {
                    for (o = e.once, i = t = !0; s.length; l = -1)
                        for (n = s.shift(); ++l < a.length;) a[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = a.length, n = !1);
                    e.memory || (n = !1), t = !1, o && (a = n ? [] : "")
                },
                c = {
                    add: function() {
                        return a && (n && !t && (l = a.length - 1, s.push(n)), function i(t) {
                            fe.each(t, function(t, n) {
                                fe.isFunction(n) ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== fe.type(n) && i(n)
                            })
                        }(arguments), n && !t && u()), this
                    },
                    remove: function() {
                        return fe.each(arguments, function(e, t) {
                            for (var n;
                                (n = fe.inArray(t, a, n)) > -1;) a.splice(n, 1), l >= n && l--
                        }), this
                    },
                    has: function(e) {
                        return e ? fe.inArray(e, a) > -1 : a.length > 0
                    },
                    empty: function() {
                        return a && (a = []), this
                    },
                    disable: function() {
                        return o = s = [], a = n = "", this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return o = !0, n || c.disable(), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(e, n) {
                        return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || u()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return c
        }, fe.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", fe.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", fe.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", fe.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return fe.Deferred(function(n) {
                                fe.each(t, function(t, r) {
                                    var a = fe.isFunction(e[t]) && e[t];
                                    o[r[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && fe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? fe.extend(e, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, fe.each(t, function(e, r) {
                    var a = r[2],
                        s = r[3];
                    i[r[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = a.fireWith
                }), i.promise(o), e && e.call(o, o), o
            },
            when: function(e) {
                var t, n, i, o = 0,
                    r = oe.call(arguments),
                    a = r.length,
                    s = 1 !== a || e && fe.isFunction(e.promise) ? a : 0,
                    l = 1 === s ? e : fe.Deferred(),
                    u = function(e, n, i) {
                        return function(o) {
                            n[e] = this, i[e] = arguments.length > 1 ? oe.call(arguments) : o, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) r[o] && fe.isFunction(r[o].promise) ? r[o].promise().progress(u(o, n, t)).done(u(o, i, r)).fail(l.reject) : --s;
                return s || l.resolveWith(i, r), l.promise()
            }
        });
        var Ne;
        fe.fn.ready = function(e) {
            return fe.ready.promise().done(e), this
        }, fe.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? fe.readyWait++ : fe.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --fe.readyWait : fe.isReady) || (fe.isReady = !0, e !== !0 && --fe.readyWait > 0 || (Ne.resolveWith(ie, [fe]), fe.fn.triggerHandler && (fe(ie).triggerHandler("ready"), fe(ie).off("ready"))))
            }
        }), fe.ready.promise = function(t) {
            if (!Ne)
                if (Ne = fe.Deferred(), "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll) e.setTimeout(fe.ready);
                else if (ie.addEventListener) ie.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s);
            else {
                ie.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && ie.documentElement
                } catch (i) {}
                n && n.doScroll && ! function o() {
                    if (!fe.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return e.setTimeout(o, 50)
                        }
                        a(), fe.ready()
                    }
                }()
            }
            return Ne.promise(t)
        }, fe.ready.promise();
        var Ae;
        for (Ae in fe(de)) break;
        de.ownFirst = "0" === Ae, de.inlineBlockNeedsLayout = !1, fe(function() {
                var e, t, n, i;
                n = ie.getElementsByTagName("body")[0], n && n.style && (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var e = ie.createElement("div");
                de.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    de.deleteExpando = !1
                }
                e = null
            }();
        var Ie = function(e) {
                var t = fe.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
            },
            Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Me = /([A-Z])/g;
        fe.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(e) {
                    return e = e.nodeType ? fe.cache[e[fe.expando]] : e[fe.expando], !!e && !u(e)
                },
                data: function(e, t, n) {
                    return c(e, t, n)
                },
                removeData: function(e, t) {
                    return d(e, t)
                },
                _data: function(e, t, n) {
                    return c(e, t, n, !0)
                },
                _removeData: function(e, t) {
                    return d(e, t, !0)
                }
            }), fe.fn.extend({
                data: function(e, t) {
                    var n, i, o, r = this[0],
                        a = r && r.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = fe.data(r), 1 === r.nodeType && !fe._data(r, "parsedAttrs"))) {
                            for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = fe.camelCase(i.slice(5)), l(r, i, o[i])));
                            fe._data(r, "parsedAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof e ? this.each(function() {
                        fe.data(this, e)
                    }) : arguments.length > 1 ? this.each(function() {
                        fe.data(this, e, t)
                    }) : r ? l(r, e, fe.data(r, e)) : void 0
                },
                removeData: function(e) {
                    return this.each(function() {
                        fe.removeData(this, e)
                    })
                }
            }), fe.extend({
                queue: function(e, t, n) {
                    var i;
                    return e ? (t = (t || "fx") + "queue", i = fe._data(e, t), n && (!i || fe.isArray(n) ? i = fe._data(e, t, fe.makeArray(n)) : i.push(n)), i || []) : void 0
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = fe.queue(e, t),
                        i = n.length,
                        o = n.shift(),
                        r = fe._queueHooks(e, t),
                        a = function() {
                            fe.dequeue(e, t)
                        };
                    "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return fe._data(e, n) || fe._data(e, n, {
                        empty: fe.Callbacks("once memory").add(function() {
                            fe._removeData(e, t + "queue"), fe._removeData(e, n)
                        })
                    })
                }
            }), fe.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? fe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = fe.queue(this, e, t);
                        fe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && fe.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        fe.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, i = 1,
                        o = fe.Deferred(),
                        r = this,
                        a = this.length,
                        s = function() {
                            --i || o.resolveWith(r, [r])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = fe._data(r[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                    return s(), o.promise(t)
                }
            }),
            function() {
                var e;
                de.shrinkWrapBlocks = function() {
                    if (null != e) return e;
                    e = !1;
                    var t, n, i;
                    return n = ie.getElementsByTagName("body")[0], n && n.style ? (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ie.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
                }
            }();
        var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Le = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
            je = ["Top", "Right", "Bottom", "Left"],
            Re = function(e, t) {
                return e = t || e, "none" === fe.css(e, "display") || !fe.contains(e.ownerDocument, e)
            },
            He = function(e, t, n, i, o, r, a) {
                var s = 0,
                    l = e.length,
                    u = null == n;
                if ("object" === fe.type(n)) {
                    o = !0;
                    for (s in n) He(e, t, s, n[s], !0, r, a)
                } else if (void 0 !== i && (o = !0, fe.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                        return u.call(fe(e), n)
                    })), t))
                    for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
            },
            Pe = /^(?:checkbox|radio)$/i,
            qe = /<([\w:-]+)/,
            ze = /^$|\/(?:java|ecma)script/i,
            We = /^\s+/,
            Be = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        ! function() {
            var e = ie.createElement("div"),
                t = ie.createDocumentFragment(),
                n = ie.createElement("input");
            e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", de.leadingWhitespace = 3 === e.firstChild.nodeType, de.tbody = !e.getElementsByTagName("tbody").length, de.htmlSerialize = !!e.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), de.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = ie.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!e.addEventListener, e[fe.expando] = 1, de.attributes = !e.getAttribute(fe.expando)
        }();
        var Ue = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        Ue.optgroup = Ue.option, Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead, Ue.th = Ue.td;
        var Ye = /<|&#?\w+;/,
            Ze = /<tbody/i;
        ! function() {
            var t, n, i = ie.createElement("div");
            for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + t, (de[t] = n in e) || (i.setAttribute(n, "t"), de[t] = i.attributes[n].expando === !1);
            i = null
        }();
        var Xe = /^(?:input|select|textarea)$/i,
            Ve = /^key/,
            Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ge = /^(?:focusinfocus|focusoutblur)$/,
            Je = /^([^.]*)(?:\.(.+)|)/;
        fe.event = {
            global: {},
            add: function(e, t, n, i, o) {
                var r, a, s, l, u, c, d, p, f, h, m, g = fe._data(e);
                if (g) {
                    for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = fe.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                            return "undefined" == typeof fe || e && fe.event.triggered === e.type ? void 0 : fe.event.dispatch.apply(c.elem, arguments)
                        }, c.elem = e), t = (t || "").match($e) || [""], s = t.length; s--;) r = Je.exec(t[s]) || [], f = m = r[1], h = (r[2] || "").split(".").sort(), f && (u = fe.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = fe.event.special[f] || {}, d = fe.extend({
                        type: f,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && fe.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, l), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, u.setup && u.setup.call(e, i, h, c) !== !1 || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), fe.event.global[f] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, o) {
                var r, a, s, l, u, c, d, p, f, h, m, g = fe.hasData(e) && fe._data(e);
                if (g && (c = g.events)) {
                    for (t = (t || "").match($e) || [""], u = t.length; u--;)
                        if (s = Je.exec(t[u]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                            for (d = fe.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = c[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) a = p[r], !o && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(r, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(e, a));
                            l && !p.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || fe.removeEvent(e, f, g.handle), delete c[f])
                        } else
                            for (f in c) fe.event.remove(e, f + t[u], n, i, !0);
                    fe.isEmptyObject(c) && (delete g.handle, fe._removeData(e, "events"))
                }
            },
            trigger: function(t, n, i, o) {
                var r, a, s, l, u, c, d, p = [i || ie],
                    f = ce.call(t, "type") ? t.type : t,
                    h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = c = i = i || ie, 3 !== i.nodeType && 8 !== i.nodeType && !Ge.test(f + fe.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), a = f.indexOf(":") < 0 && "on" + f, t = t[fe.expando] ? t : new fe.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : fe.makeArray(n, [t]), u = fe.event.special[f] || {}, o || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                    if (!o && !u.noBubble && !fe.isWindow(i)) {
                        for (l = u.delegateType || f, Ge.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                        c === (i.ownerDocument || ie) && p.push(c.defaultView || c.parentWindow || e)
                    }
                    for (d = 0;
                        (s = p[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || f, r = (fe._data(s, "events") || {})[t.type] && fe._data(s, "handle"), r && r.apply(s, n), r = a && s[a], r && r.apply && Ie(s) && (t.result = r.apply(s, n), t.result === !1 && t.preventDefault());
                    if (t.type = f, !o && !t.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), n) === !1) && Ie(i) && a && i[f] && !fe.isWindow(i)) {
                        c = i[a], c && (i[a] = null), fe.event.triggered = f;
                        try {
                            i[f]()
                        } catch (m) {}
                        fe.event.triggered = void 0, c && (i[a] = c)
                    }
                    return t.result
                }
            },
            dispatch: function(e) {
                e = fe.event.fix(e);
                var t, n, i, o, r, a = [],
                    s = oe.call(arguments),
                    l = (fe._data(this, "events") || {})[e.type] || [],
                    u = fe.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                    for (a = fe.event.handlers.call(this, e, l), t = 0;
                        (o = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(r.namespace)) && (e.handleObj = r, e.data = r.data, i = ((fe.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, o, r, a = [],
                    s = t.delegateCount,
                    l = e.target;
                if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                            for (i = [], n = 0; s > n; n++) r = t[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? fe(o, this).index(l) > -1 : fe.find(o, this, null, [l]).length), i[o] && i.push(r);
                            i.length && a.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            fix: function(e) {
                if (e[fe.expando]) return e;
                var t, n, i, o = e.type,
                    r = e,
                    a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = Ke.test(o) ? this.mouseHooks : Ve.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new fe.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || ie), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, o, r = t.button,
                        a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ie, o = i.documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== w() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === w() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return fe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return fe.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n) {
                var i = fe.extend(new fe.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                fe.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
            }
        }, fe.removeEvent = ie.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
        }, fe.Event = function(e, t) {
            return this instanceof fe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? y : b) : this.type = e, t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || fe.now(), void(this[fe.expando] = !0)) : new fe.Event(e, t)
        }, fe.Event.prototype = {
            constructor: fe.Event,
            isDefaultPrevented: b,
            isPropagationStopped: b,
            isImmediatePropagationStopped: b,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = y, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, fe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            fe.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        o = e.relatedTarget,
                        r = e.handleObj;
                    return (!o || o !== i && !fe.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), de.submit || (fe.event.special.submit = {
            setup: function() {
                return fe.nodeName(this, "form") ? !1 : void fe.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = fe.nodeName(t, "input") || fe.nodeName(t, "button") ? fe.prop(t, "form") : void 0;
                    n && !fe._data(n, "submit") && (fe.event.add(n, "submit._submit", function(e) {
                        e._submitBubble = !0
                    }), fe._data(n, "submit", !0))
                })
            },
            postDispatch: function(e) {
                e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && fe.event.simulate("submit", this.parentNode, e))
            },
            teardown: function() {
                return fe.nodeName(this, "form") ? !1 : void fe.event.remove(this, "._submit")
            }
        }), de.change || (fe.event.special.change = {
            setup: function() {
                return Xe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (fe.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                }), fe.event.add(this, "click._change", function(e) {
                    this._justChanged && !e.isTrigger && (this._justChanged = !1), fe.event.simulate("change", this, e)
                })), !1) : void fe.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Xe.test(t.nodeName) && !fe._data(t, "change") && (fe.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || fe.event.simulate("change", this.parentNode, e)
                    }), fe._data(t, "change", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0;
            },
            teardown: function() {
                return fe.event.remove(this, "._change"), !Xe.test(this.nodeName)
            }
        }), de.focusin || fe.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                fe.event.simulate(t, e.target, fe.event.fix(e))
            };
            fe.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = fe._data(i, t);
                    o || i.addEventListener(e, n, !0), fe._data(i, t, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = fe._data(i, t) - 1;
                    o ? fe._data(i, t, o) : (i.removeEventListener(e, n, !0), fe._removeData(i, t))
                }
            }
        }), fe.fn.extend({
            on: function(e, t, n, i) {
                return x(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return x(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, fe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = b), this.each(function() {
                    fe.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    fe.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? fe.event.trigger(e, t, n, !0) : void 0
            }
        });
        var Qe = / jQuery\d+="(?:null|\d+)"/g,
            et = new RegExp("<(?:" + Be + ")[\\s/>]", "i"),
            tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            nt = /<script|<style|<link/i,
            it = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ot = /^true\/(.*)/,
            rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            at = f(ie),
            st = at.appendChild(ie.createElement("div"));
        fe.extend({
            htmlPrefilter: function(e) {
                return e.replace(tt, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, o, r, a, s, l = fe.contains(e.ownerDocument, e);
                if (de.html5Clone || fe.isXMLDoc(e) || !et.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (st.innerHTML = e.outerHTML, st.removeChild(r = st.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))
                    for (i = h(r), s = h(e), a = 0; null != (o = s[a]); ++a) i[a] && D(o, i[a]);
                if (t)
                    if (n)
                        for (s = s || h(e), i = i || h(r), a = 0; null != (o = s[a]); a++) E(o, i[a]);
                    else E(e, r);
                return i = h(r, "script"), i.length > 0 && m(i, !l && h(e, "script")), i = s = o = null, r
            },
            cleanData: function(e, t) {
                for (var n, i, o, r, a = 0, s = fe.expando, l = fe.cache, u = de.attributes, c = fe.event.special; null != (n = e[a]); a++)
                    if ((t || Ie(n)) && (o = n[s], r = o && l[o])) {
                        if (r.events)
                            for (i in r.events) c[i] ? fe.event.remove(n, i) : fe.removeEvent(n, i, r.handle);
                        l[o] && (delete l[o], u || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), ne.push(o))
                    }
            }
        }), fe.fn.extend({
            domManip: S,
            detach: function(e) {
                return _(this, e, !0)
            },
            remove: function(e) {
                return _(this, e)
            },
            text: function(e) {
                return He(this, function(e) {
                    return void 0 === e ? fe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return S(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = T(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return S(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = T(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return S(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return S(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && fe.cleanData(h(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && fe.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return fe.clone(this, e, t)
                })
            },
            html: function(e) {
                return He(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Qe, "") : void 0;
                    if ("string" == typeof e && !nt.test(e) && (de.htmlSerialize || !et.test(e)) && (de.leadingWhitespace || !We.test(e)) && !Ue[(qe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = fe.htmlPrefilter(e);
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (fe.cleanData(h(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (o) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return S(this, arguments, function(t) {
                    var n = this.parentNode;
                    fe.inArray(this, e) < 0 && (fe.cleanData(h(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), fe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            fe.fn[e] = function(e) {
                for (var n, i = 0, o = [], r = fe(e), a = r.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), fe(r[i])[t](n), ae.apply(o, n.get());
                return this.pushStack(o)
            }
        });
        var lt, ut = {
                HTML: "block",
                BODY: "block"
            },
            ct = /^margin/,
            dt = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
            pt = function(e, t, n, i) {
                var o, r, a = {};
                for (r in t) a[r] = e.style[r], e.style[r] = t[r];
                o = n.apply(e, i || []);
                for (r in t) e.style[r] = a[r];
                return o
            },
            ft = ie.documentElement;
        ! function() {
            function t() {
                var t, c, d = ie.documentElement;
                d.appendChild(l), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = o = s = !1, i = a = !0, e.getComputedStyle && (c = e.getComputedStyle(u), n = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, o = "4px" === (c || {
                    width: "4px"
                }).width, u.style.marginRight = "50%", i = "4px" === (c || {
                    marginRight: "4px"
                }).marginRight, t = u.appendChild(ie.createElement("div")), t.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", u.style.width = "1px", a = !parseFloat((e.getComputedStyle(t) || {}).marginRight), u.removeChild(t)), u.style.display = "none", r = 0 === u.getClientRects().length, r && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", t = u.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", r = 0 === t[0].offsetHeight, r && (t[0].style.display = "", t[1].style.display = "none", r = 0 === t[0].offsetHeight)), d.removeChild(l)
            }
            var n, i, o, r, a, s, l = ie.createElement("div"),
                u = ie.createElement("div");
            u.style && (u.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === u.style.opacity, de.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === u.style.backgroundClip, l = ie.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), de.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, fe.extend(de, {
                reliableHiddenOffsets: function() {
                    return null == n && t(), r
                },
                boxSizingReliable: function() {
                    return null == n && t(), o
                },
                pixelMarginRight: function() {
                    return null == n && t(), i
                },
                pixelPosition: function() {
                    return null == n && t(), n
                },
                reliableMarginRight: function() {
                    return null == n && t(), a
                },
                reliableMarginLeft: function() {
                    return null == n && t(), s
                }
            }))
        }();
        var ht, mt, gt = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (ht = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        }, mt = function(e, t, n) {
            var i, o, r, a, s = e.style;
            return n = n || ht(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || fe.contains(e.ownerDocument, e) || (a = fe.style(e, t)), n && !de.pixelMarginRight() && dt.test(a) && ct.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r), void 0 === a ? a : a + ""
        }) : ft.currentStyle && (ht = function(e) {
            return e.currentStyle
        }, mt = function(e, t, n) {
            var i, o, r, a, s = e.style;
            return n = n || ht(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), dt.test(a) && !gt.test(t) && (i = s.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, r && (o.left = r)), void 0 === a ? a : a + "" || "auto"
        });
        var vt = /alpha\([^)]*\)/i,
            yt = /opacity\s*=\s*([^)]*)/i,
            bt = /^(none|table(?!-c[ea]).+)/,
            wt = new RegExp("^(" + Fe + ")(.*)$", "i"),
            xt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Tt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Ct = ["Webkit", "O", "Moz", "ms"],
            kt = ie.createElement("div").style;
        fe.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = mt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
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
                "float": de.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, a, s = fe.camelCase(t),
                        l = e.style;
                    if (t = fe.cssProps[s] || (fe.cssProps[s] = I(s) || s), a = fe.cssHooks[t] || fe.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t];
                    if (r = typeof n, "string" === r && (o = Le.exec(n)) && o[1] && (n = p(e, t, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (fe.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                        l[t] = n
                    } catch (u) {}
                }
            },
            css: function(e, t, n, i) {
                var o, r, a, s = fe.camelCase(t);
                return t = fe.cssProps[s] || (fe.cssProps[s] = I(s) || s), a = fe.cssHooks[t] || fe.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = mt(e, t, i)), "normal" === r && t in Tt && (r = Tt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
            }
        }), fe.each(["height", "width"], function(e, t) {
            fe.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? bt.test(fe.css(e, "display")) && 0 === e.offsetWidth ? pt(e, xt, function() {
                        return L(e, t, i)
                    }) : L(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var o = i && ht(e);
                    return M(e, n, i ? F(e, t, i, de.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, o), o) : 0)
                }
            }
        }), de.opacity || (fe.cssHooks.opacity = {
            get: function(e, t) {
                return yt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    o = fe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    r = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === fe.trim(r.replace(vt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = vt.test(r) ? r.replace(vt, o) : r + " " + o)
            }
        }), fe.cssHooks.marginRight = A(de.reliableMarginRight, function(e, t) {
            return t ? pt(e, {
                display: "inline-block"
            }, mt, [e, "marginRight"]) : void 0
        }), fe.cssHooks.marginLeft = A(de.reliableMarginLeft, function(e, t) {
            return t ? (parseFloat(mt(e, "marginLeft")) || (fe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - pt(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            }) : 0)) + "px" : void 0
        }), fe.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            fe.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + je[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, ct.test(e) || (fe.cssHooks[e + t].set = M)
        }), fe.fn.extend({
            css: function(e, t) {
                return He(this, function(e, t, n) {
                    var i, o, r = {},
                        a = 0;
                    if (fe.isArray(t)) {
                        for (i = ht(e), o = t.length; o > a; a++) r[t[a]] = fe.css(e, t[a], !1, i);
                        return r
                    }
                    return void 0 !== n ? fe.style(e, t, n) : fe.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return O(this, !0)
            },
            hide: function() {
                return O(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Re(this) ? fe(this).show() : fe(this).hide()
                })
            }
        }), fe.Tween = j, j.prototype = {
            constructor: j,
            init: function(e, t, n, i, o, r) {
                this.elem = e, this.prop = n, this.easing = o || fe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (fe.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = j.propHooks[this.prop];
                return e && e.get ? e.get(this) : j.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = j.propHooks[this.prop];
                return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
            }
        }, j.prototype.init.prototype = j.prototype, j.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, fe.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, fe.fx = j.prototype.init, fe.fx.step = {};
        var Et, Dt, St = /^(?:toggle|show|hide)$/,
            _t = /queueHooks$/;
        fe.Animation = fe.extend(W, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return p(n.elem, e, Le.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    fe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match($e);
                    for (var n, i = 0, o = e.length; o > i; i++) n = e[i], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(t)
                },
                prefilters: [q],
                prefilter: function(e, t) {
                    t ? W.prefilters.unshift(e) : W.prefilters.push(e)
                }
            }), fe.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? fe.extend({}, e) : {
                    complete: n || !n && t || fe.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !fe.isFunction(t) && t
                };
                return i.duration = fe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in fe.fx.speeds ? fe.fx.speeds[i.duration] : fe.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    fe.isFunction(i.old) && i.old.call(this), i.queue && fe.dequeue(this, i.queue)
                }, i
            }, fe.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(Re).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var o = fe.isEmptyObject(e),
                        r = fe.speed(t, n, i),
                        a = function() {
                            var t = W(this, fe.extend({}, e), r);
                            (o || fe._data(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            r = fe.timers,
                            a = fe._data(this);
                        if (o) a[o] && a[o].stop && i(a[o]);
                        else
                            for (o in a) a[o] && a[o].stop && _t.test(o) && i(a[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                        (t || !n) && fe.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = fe._data(this),
                            i = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            r = fe.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, fe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), fe.each(["toggle", "show", "hide"], function(e, t) {
                var n = fe.fn[t];
                fe.fn[t] = function(e, i, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(H(t, !0), e, i, o)
                }
            }), fe.each({
                slideDown: H("show"),
                slideUp: H("hide"),
                slideToggle: H("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                fe.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), fe.timers = [], fe.fx.tick = function() {
                var e, t = fe.timers,
                    n = 0;
                for (Et = fe.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                t.length || fe.fx.stop(), Et = void 0
            }, fe.fx.timer = function(e) {
                fe.timers.push(e), e() ? fe.fx.start() : fe.timers.pop()
            }, fe.fx.interval = 13, fe.fx.start = function() {
                Dt || (Dt = e.setInterval(fe.fx.tick, fe.fx.interval))
            }, fe.fx.stop = function() {
                e.clearInterval(Dt), Dt = null
            }, fe.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, fe.fn.delay = function(t, n) {
                return t = fe.fx ? fe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                    var o = e.setTimeout(n, t);
                    i.stop = function() {
                        e.clearTimeout(o)
                    }
                })
            },
            function() {
                var e, t = ie.createElement("input"),
                    n = ie.createElement("div"),
                    i = ie.createElement("select"),
                    o = i.appendChild(ie.createElement("option"));
                n = ie.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", de.getSetAttribute = "t" !== n.className, de.style = /top/.test(e.getAttribute("style")), de.hrefNormalized = "/a" === e.getAttribute("href"), de.checkOn = !!t.value, de.optSelected = o.selected, de.enctype = !!ie.createElement("form").enctype, i.disabled = !0, de.optDisabled = !o.disabled, t = ie.createElement("input"), t.setAttribute("value", ""), de.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), de.radioValue = "t" === t.value
            }();
        var $t = /\r/g,
            Nt = /[\x20\t\r\n\f]+/g;
        fe.fn.extend({
            val: function(e) {
                var t, n, i, o = this[0]; {
                    if (arguments.length) return i = fe.isFunction(e), this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = i ? e.call(this, n, fe(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : fe.isArray(o) && (o = fe.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })), t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    });
                    if (o) return t = fe.valHooks[o.type] || fe.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace($t, "") : null == n ? "" : n)
                }
            }
        }), fe.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = fe.find.attr(e, "value");
                        return null != t ? t : fe.trim(fe.text(e)).replace(Nt, " ")
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++)
                            if (n = i[l], (n.selected || l === o) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !fe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = fe(n).val(), r) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, o = e.options, r = fe.makeArray(t), a = o.length; a--;)
                            if (i = o[a], fe.inArray(fe.valHooks.option.get(i), r) > -1) try {
                                i.selected = n = !0
                            } catch (s) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), fe.each(["radio", "checkbox"], function() {
            fe.valHooks[this] = {
                set: function(e, t) {
                    return fe.isArray(t) ? e.checked = fe.inArray(fe(e).val(), t) > -1 : void 0
                }
            }, de.checkOn || (fe.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var At, It, Ot = fe.expr.attrHandle,
            Mt = /^(?:checked|selected)$/i,
            Ft = de.getSetAttribute,
            Lt = de.input;
        fe.fn.extend({
            attr: function(e, t) {
                return He(this, fe.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    fe.removeAttr(this, e)
                })
            }
        }), fe.extend({
            attr: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? fe.prop(e, t, n) : (1 === r && fe.isXMLDoc(e) || (t = t.toLowerCase(), o = fe.attrHooks[t] || (fe.expr.match.bool.test(t) ? It : At)), void 0 !== n ? null === n ? void fe.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = fe.find.attr(e, t), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!de.radioValue && "radio" === t && fe.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i, o = 0,
                    r = t && t.match($e);
                if (r && 1 === e.nodeType)
                    for (; n = r[o++];) i = fe.propFix[n] || n, fe.expr.match.bool.test(n) ? Lt && Ft || !Mt.test(n) ? e[i] = !1 : e[fe.camelCase("default-" + n)] = e[i] = !1 : fe.attr(e, n, ""), e.removeAttribute(Ft ? n : i)
            }
        }), It = {
            set: function(e, t, n) {
                return t === !1 ? fe.removeAttr(e, n) : Lt && Ft || !Mt.test(n) ? e.setAttribute(!Ft && fe.propFix[n] || n, n) : e[fe.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, fe.each(fe.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = Ot[t] || fe.find.attr;
            Lt && Ft || !Mt.test(t) ? Ot[t] = function(e, t, i) {
                var o, r;
                return i || (r = Ot[t], Ot[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, Ot[t] = r), o
            } : Ot[t] = function(e, t, n) {
                return n ? void 0 : e[fe.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), Lt && Ft || (fe.attrHooks.value = {
            set: function(e, t, n) {
                return fe.nodeName(e, "input") ? void(e.defaultValue = t) : At && At.set(e, t, n)
            }
        }), Ft || (At = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
            }
        }, Ot.id = Ot.name = Ot.coords = function(e, t, n) {
            var i;
            return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, fe.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : void 0
            },
            set: At.set
        }, fe.attrHooks.contenteditable = {
            set: function(e, t, n) {
                At.set(e, "" === t ? !1 : t, n)
            }
        }, fe.each(["width", "height"], function(e, t) {
            fe.attrHooks[t] = {
                set: function(e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            }
        })), de.style || (fe.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || void 0
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var jt = /^(?:input|select|textarea|button|object)$/i,
            Rt = /^(?:a|area)$/i;
        fe.fn.extend({
            prop: function(e, t) {
                return He(this, fe.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = fe.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (t) {}
                })
            }
        }), fe.extend({
            prop: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && fe.isXMLDoc(e) || (t = fe.propFix[t] || t, o = fe.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = fe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : jt.test(e.nodeName) || Rt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), de.hrefNormalized || fe.each(["href", "src"], function(e, t) {
            fe.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), de.optSelected || (fe.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            fe.propFix[this.toLowerCase()] = this
        }), de.enctype || (fe.propFix.enctype = "encoding");
        var Ht = /[\t\r\n\f]/g;
        fe.fn.extend({
            addClass: function(e) {
                var t, n, i, o, r, a, s, l = 0;
                if (fe.isFunction(e)) return this.each(function(t) {
                    fe(this).addClass(e.call(this, t, B(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match($e) || []; n = this[l++];)
                        if (o = B(n), i = 1 === n.nodeType && (" " + o + " ").replace(Ht, " ")) {
                            for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            s = fe.trim(i), o !== s && fe.attr(n, "class", s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, o, r, a, s, l = 0;
                if (fe.isFunction(e)) return this.each(function(t) {
                    fe(this).removeClass(e.call(this, t, B(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match($e) || []; n = this[l++];)
                        if (o = B(n), i = 1 === n.nodeType && (" " + o + " ").replace(Ht, " ")) {
                            for (a = 0; r = t[a++];)
                                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                            s = fe.trim(i), o !== s && fe.attr(n, "class", s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : fe.isFunction(e) ? this.each(function(n) {
                    fe(this).toggleClass(e.call(this, n, B(this), t), t)
                }) : this.each(function() {
                    var t, i, o, r;
                    if ("string" === n)
                        for (i = 0, o = fe(this), r = e.match($e) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else(void 0 === e || "boolean" === n) && (t = B(this), t && fe._data(this, "__className__", t), fe.attr(this, "class", t || e === !1 ? "" : fe._data(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + B(n) + " ").replace(Ht, " ").indexOf(t) > -1) return !0;
                return !1
            }
        }), fe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            fe.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), fe.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        var Pt = e.location,
            qt = fe.now(),
            zt = /\?/,
            Wt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        fe.parseJSON = function(t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
            var n, i = null,
                o = fe.trim(t + "");
            return o && !fe.trim(o.replace(Wt, function(e, t, o, r) {
                return n && t && (i = 0), 0 === i ? e : (n = o || t, i += !r - !o, "")
            })) ? Function("return " + o)() : fe.error("Invalid JSON: " + t)
        }, fe.parseXML = function(t) {
            var n, i;
            if (!t || "string" != typeof t) return null;
            try {
                e.DOMParser ? (i = new e.DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
            } catch (o) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + t), n
        };
        var Bt = /#.*$/,
            Ut = /([?&])_=[^&]*/,
            Yt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Zt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Xt = /^(?:GET|HEAD)$/,
            Vt = /^\/\//,
            Kt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Gt = {},
            Jt = {},
            Qt = "*/".concat("*"),
            en = Pt.href,
            tn = Kt.exec(en.toLowerCase()) || [];
        fe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: en,
                type: "GET",
                isLocal: Zt.test(tn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Qt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": fe.parseJSON,
                    "text xml": fe.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Z(Z(e, fe.ajaxSettings), t) : Z(fe.ajaxSettings, e)
            },
            ajaxPrefilter: U(Gt),
            ajaxTransport: U(Jt),
            ajax: function(t, n) {
                function i(t, n, i, o) {
                    var r, d, y, b, x, C = n;
                    2 !== w && (w = 2, l && e.clearTimeout(l), c = void 0, s = o || "", T.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, i && (b = X(p, T, i)), b = V(p, b, T, r), r ? (p.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (fe.lastModified[a] = x), x = T.getResponseHeader("etag"), x && (fe.etag[a] = x)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, d = b.data, y = b.error, r = !y)) : (y = C, (t || !C) && (C = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || C) + "", r ? m.resolveWith(f, [d, C, T]) : m.rejectWith(f, [T, C, y]), T.statusCode(v), v = void 0, u && h.trigger(r ? "ajaxSuccess" : "ajaxError", [T, p, r ? d : y]), g.fireWith(f, [T, C]), u && (h.trigger("ajaxComplete", [T, p]), --fe.active || fe.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t, t = void 0), n = n || {};
                var o, r, a, s, l, u, c, d, p = fe.ajaxSetup({}, n),
                    f = p.context || p,
                    h = p.context && (f.nodeType || f.jquery) ? fe(f) : fe.event,
                    m = fe.Deferred(),
                    g = fe.Callbacks("once memory"),
                    v = p.statusCode || {},
                    y = {},
                    b = {},
                    w = 0,
                    x = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === w) {
                                if (!d)
                                    for (d = {}; t = Yt.exec(s);) d[t[1].toLowerCase()] = t[2];
                                t = d[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === w ? s : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return w || (e = b[n] = b[n] || e, y[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return w || (p.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > w)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else T.always(e[T.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || x;
                            return c && c.abort(t), i(0, t), this
                        }
                    };
                if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, p.url = ((t || p.url || en) + "").replace(Bt, "").replace(Vt, tn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = fe.trim(p.dataType || "*").toLowerCase().match($e) || [""], null == p.crossDomain && (o = Kt.exec(p.url.toLowerCase()), p.crossDomain = !(!o || o[1] === tn[1] && o[2] === tn[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (tn[3] || ("http:" === tn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = fe.param(p.data, p.traditional)), Y(Gt, p, n, T), 2 === w) return T;
                u = fe.event && p.global, u && 0 === fe.active++ && fe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Xt.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (zt.test(a) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Ut.test(a) ? a.replace(Ut, "$1_=" + qt++) : a + (zt.test(a) ? "&" : "?") + "_=" + qt++)), p.ifModified && (fe.lastModified[a] && T.setRequestHeader("If-Modified-Since", fe.lastModified[a]), fe.etag[a] && T.setRequestHeader("If-None-Match", fe.etag[a])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Qt + "; q=0.01" : "") : p.accepts["*"]);
                for (r in p.headers) T.setRequestHeader(r, p.headers[r]);
                if (p.beforeSend && (p.beforeSend.call(f, T, p) === !1 || 2 === w)) return T.abort();
                x = "abort";
                for (r in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) T[r](p[r]);
                if (c = Y(Jt, p, n, T)) {
                    if (T.readyState = 1, u && h.trigger("ajaxSend", [T, p]), 2 === w) return T;
                    p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                        T.abort("timeout")
                    }, p.timeout));
                    try {
                        w = 1, c.send(y, i)
                    } catch (C) {
                        if (!(2 > w)) throw C;
                        i(-1, C)
                    }
                } else i(-1, "No Transport");
                return T
            },
            getJSON: function(e, t, n) {
                return fe.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return fe.get(e, void 0, t, "script")
            }
        }), fe.each(["get", "post"], function(e, t) {
            fe[t] = function(e, n, i, o) {
                return fe.isFunction(n) && (o = o || i, i = n, n = void 0), fe.ajax(fe.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                }, fe.isPlainObject(e) && e))
            }
        }), fe._evalUrl = function(e) {
            return fe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }, fe.fn.extend({
            wrapAll: function(e) {
                if (fe.isFunction(e)) return this.each(function(t) {
                    fe(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = fe(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return fe.isFunction(e) ? this.each(function(t) {
                    fe(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = fe(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = fe.isFunction(e);
                return this.each(function(n) {
                    fe(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    fe.nodeName(this, "body") || fe(this).replaceWith(this.childNodes)
                }).end()
            }
        }), fe.expr.filters.hidden = function(e) {
            return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : G(e)
        }, fe.expr.filters.visible = function(e) {
            return !fe.expr.filters.hidden(e)
        };
        var nn = /%20/g,
            on = /\[\]$/,
            rn = /\r?\n/g,
            an = /^(?:submit|button|image|reset|file)$/i,
            sn = /^(?:input|select|textarea|keygen)/i;
        fe.param = function(e, t) {
            var n, i = [],
                o = function(e, t) {
                    t = fe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = fe.ajaxSettings && fe.ajaxSettings.traditional), fe.isArray(e) || e.jquery && !fe.isPlainObject(e)) fe.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (n in e) J(n, e[n], t, o);
            return i.join("&").replace(nn, "+")
        }, fe.fn.extend({
            serialize: function() {
                return fe.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = fe.prop(this, "elements");
                    return e ? fe.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !fe(this).is(":disabled") && sn.test(this.nodeName) && !an.test(e) && (this.checked || !Pe.test(e))
                }).map(function(e, t) {
                    var n = fe(this).val();
                    return null == n ? null : fe.isArray(n) ? fe.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(rn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(rn, "\r\n")
                    }
                }).get()
            }
        }), fe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
            return this.isLocal ? ee() : ie.documentMode > 8 ? Q() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Q() || ee()
        } : Q;
        var ln = 0,
            un = {},
            cn = fe.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function() {
            for (var e in un) un[e](void 0, !0)
        }), de.cors = !!cn && "withCredentials" in cn, cn = de.ajax = !!cn, cn && fe.ajaxTransport(function(t) {
            if (!t.crossDomain || de.cors) {
                var n;
                return {
                    send: function(i, o) {
                        var r, a = t.xhr(),
                            s = ++ln;
                        if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (r in t.xhrFields) a[r] = t.xhrFields[r];
                        t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (r in i) void 0 !== i[r] && a.setRequestHeader(r, i[r] + "");
                        a.send(t.hasContent && t.data || null), n = function(e, i) {
                            var r, l, u;
                            if (n && (i || 4 === a.readyState))
                                if (delete un[s], n = void 0, a.onreadystatechange = fe.noop, i) 4 !== a.readyState && a.abort();
                                else {
                                    u = {}, r = a.status, "string" == typeof a.responseText && (u.text = a.responseText);
                                    try {
                                        l = a.statusText
                                    } catch (c) {
                                        l = ""
                                    }
                                    r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = u.text ? 200 : 404;
                                }
                            u && o(r, l, u, a.getAllResponseHeaders())
                        }, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = un[s] = n : n()
                    },
                    abort: function() {
                        n && n(void 0, !0)
                    }
                }
            }
        }), fe.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return fe.globalEval(e), e
                }
            }
        }), fe.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), fe.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = ie.head || fe("head")[0] || ie.documentElement;
                return {
                    send: function(i, o) {
                        t = ie.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var dn = [],
            pn = /(=)\?(?=&|$)|\?\?/;
        fe.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = dn.pop() || fe.expando + "_" + qt++;
                return this[e] = !0, e
            }
        }), fe.ajaxPrefilter("json jsonp", function(t, n, i) {
            var o, r, a, s = t.jsonp !== !1 && (pn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && pn.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = fe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(pn, "$1" + o) : t.jsonp !== !1 && (t.url += (zt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                return a || fe.error(o + " was not called"), a[0]
            }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
                a = arguments
            }, i.always(function() {
                void 0 === r ? fe(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, dn.push(o)), a && fe.isFunction(r) && r(a[0]), a = r = void 0
            }), "script") : void 0
        }), fe.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || ie;
            var i = Te.exec(e),
                o = !n && [];
            return i ? [t.createElement(i[1])] : (i = v([e], t, o), o && o.length && fe(o).remove(), fe.merge([], i.childNodes))
        };
        var fn = fe.fn.load;
        fe.fn.load = function(e, t, n) {
            if ("string" != typeof e && fn) return fn.apply(this, arguments);
            var i, o, r, a = this,
                s = e.indexOf(" ");
            return s > -1 && (i = fe.trim(e.slice(s, e.length)), e = e.slice(0, s)), fe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && fe.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments, a.html(i ? fe("<div>").append(fe.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, r || [e.responseText, t, e])
                })
            }), this
        }, fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            fe.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), fe.expr.filters.animated = function(e) {
            return fe.grep(fe.timers, function(t) {
                return e === t.elem
            }).length
        }, fe.offset = {
            setOffset: function(e, t, n) {
                var i, o, r, a, s, l, u, c = fe.css(e, "position"),
                    d = fe(e),
                    p = {};
                "static" === c && (e.style.position = "relative"), s = d.offset(), r = fe.css(e, "top"), l = fe.css(e, "left"), u = ("absolute" === c || "fixed" === c) && fe.inArray("auto", [r, l]) > -1, u ? (i = d.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), fe.isFunction(t) && (t = t.call(e, n, fe.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + o), "using" in t ? t.using.call(e, p) : d.css(p)
            }
        }, fe.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    fe.offset.setOffset(this, e, t)
                });
                var t, n, i = {
                        top: 0,
                        left: 0
                    },
                    o = this[0],
                    r = o && o.ownerDocument;
                if (r) return t = r.documentElement, fe.contains(t, o) ? ("undefined" != typeof o.getBoundingClientRect && (i = o.getBoundingClientRect()), n = te(r), {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === fe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), fe.nodeName(e[0], "html") || (n = e.offset()), n.top += fe.css(e[0], "borderTopWidth", !0), n.left += fe.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - fe.css(i, "marginTop", !0),
                        left: t.left - n.left - fe.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && !fe.nodeName(e, "html") && "static" === fe.css(e, "position");) e = e.offsetParent;
                    return e || ft
                })
            }
        }), fe.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            fe.fn[e] = function(i) {
                return He(this, function(e, i, o) {
                    var r = te(e);
                    return void 0 === o ? r ? t in r ? r[t] : r.document.documentElement[i] : e[i] : void(r ? r.scrollTo(n ? fe(r).scrollLeft() : o, n ? o : fe(r).scrollTop()) : e[i] = o)
                }, e, i, arguments.length, null)
            }
        }), fe.each(["top", "left"], function(e, t) {
            fe.cssHooks[t] = A(de.pixelPosition, function(e, n) {
                return n ? (n = mt(e, t), dt.test(n) ? fe(e).position()[t] + "px" : n) : void 0
            })
        }), fe.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            fe.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                fe.fn[i] = function(i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        a = n || (i === !0 || o === !0 ? "margin" : "border");
                    return He(this, function(t, n, i) {
                        var o;
                        return fe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? fe.css(t, n, a) : fe.style(t, n, i, a)
                    }, t, r ? i : void 0, r, null)
                }
            })
        }), fe.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), fe.fn.size = function() {
            return this.length
        }, fe.fn.andSelf = fe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return fe
        });
        var hn = e.jQuery,
            mn = e.$;
        return fe.noConflict = function(t) {
            return e.$ === fe && (e.$ = mn), t && e.jQuery === fe && (e.jQuery = hn), fe
        }, t || (e.jQuery = e.$ = fe), fe
    }), function(e) {
        function t() {
            for (var e = new Date(this.toString()), t = 28, n = e.getMonth(); e.getMonth() == n;) ++t, e.setDate(t);
            return t - 1
        }
        e.addDays = function(e) {
            this.setDate(this.getDate() + e)
        }, e.addMonths = function(e) {
            var n = this.getDate();
            this.setDate(1), this.setMonth(this.getMonth() + e), this.setDate(Math.min(n, t.apply(this)))
        }, e.addYears = function(e) {
            var n = this.getDate();
            this.setDate(1), this.setFullYear(this.getFullYear() + e), this.setDate(Math.min(n, t.apply(this)))
        }, e.getDayOfYear = function() {
            var e = new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0),
                t = new Date(this.getFullYear(), 0, 0, 0, 0, 0),
                n = e - t;
            return Math.floor(n / 24 * 60 * 60 * 1e3)
        }
    }(Date.prototype), function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
    }(function(e) {
        function t() {
            var t, n, o, r, a, s, l, u = e(this).data("pickmeup-options"),
                c = this.pickmeup,
                d = Math.floor(u.calendars / 2),
                p = u.date,
                f = u.current,
                h = u.min ? new Date(u.min) : null,
                m = u.max ? new Date(u.max) : null,
                g = (new Date).setHours(0, 0, 0, 0).valueOf();
            h && (h.setDate(1), h.addMonths(1), h.addDays(-1)), m && (m.setDate(1), m.addMonths(1), m.addDays(-1)), c.find(".pmu-instance > :not(nav)").remove();
            for (var v = 0; v < u.calendars; v++)
                if (t = new Date(f), r = c.find(".pmu-instance").eq(v), c.hasClass("pmu-view-years") ? (t.addYears(12 * (v - d)), n = t.getFullYear() - 6 + " - " + (t.getFullYear() + 5)) : c.hasClass("pmu-view-months") ? (t.addYears(v - d), n = t.getFullYear()) : c.hasClass("pmu-view-days") && (t.addMonths(v - d), n = i(t, "B, Y", u.locale)), !s && m && (l = new Date(t), u.select_day ? l.addMonths(u.calendars - 1) : u.select_month ? l.addYears(u.calendars - 1) : l.addYears(12 * (u.calendars - 1)), l > m)) --v, f.addMonths(-1), s = void 0;
                else if (s = new Date(t), !a && (a = new Date(t), a.setDate(1), a.addMonths(1), a.addDays(-1), h && h > a)) --v, f.addMonths(1), a = void 0;
            else {
                r.find(".pmu-month").text(n), o = "";
                var y = function(e) {
                        return "range" == u.mode && e >= new Date(p[0]).getFullYear() && e <= new Date(p[1]).getFullYear() || "multiple" == u.mode && -1 !== p.reduce(function(e, t) {
                            return e.push(new Date(t).getFullYear()), e
                        }, []).indexOf(e) || new Date(p).getFullYear() == e
                    },
                    w = function(e, t) {
                        var n = new Date(p[0]).getFullYear(),
                            i = new Date(p[1]).getFullYear(),
                            o = new Date(p[0]).getMonth(),
                            r = new Date(p[1]).getMonth();
                        return "range" == u.mode && e > n && i > e || "range" == u.mode && e == n && i > e && t >= o || "range" == u.mode && e > n && e == i && r >= t || "range" == u.mode && e == n && e == i && t >= o && r >= t || "multiple" == u.mode && -1 !== p.reduce(function(e, t) {
                            return t = new Date(t), e.push(t.getFullYear() + "-" + t.getMonth()), e
                        }, []).indexOf(e + "-" + t) || new Date(p).getFullYear() == e && new Date(p).getMonth() == t
                    };
                ! function() {
                    for (var e, n = [], i = t.getFullYear() - 6, r = new Date(u.min).getFullYear(), a = new Date(u.max).getFullYear(), s = 0; 12 > s; ++s) e = {
                        text: i + s,
                        class_name: []
                    }, u.min && e.text < r || u.max && e.text > a ? e.class_name.push("pmu-disabled") : y(e.text) && e.class_name.push("pmu-selected"), e.class_name = e.class_name.join(" "), n.push(e);
                    o += b.body(n, "pmu-years")
                }(),
                function() {
                    for (var e, n = [], i = t.getFullYear(), r = new Date(u.min).getFullYear(), a = new Date(u.min).getMonth(), s = new Date(u.max).getFullYear(), l = new Date(u.max).getMonth(), c = 0; 12 > c; ++c) e = {
                        text: u.locale.monthsShort[c],
                        class_name: []
                    }, u.min && (r > i || a > c && i == r) || u.max && (i > s || c > l && i >= s) ? e.class_name.push("pmu-disabled") : w(i, c) && e.class_name.push("pmu-selected"), e.class_name = e.class_name.join(" "), n.push(e);
                    o += b.body(n, "pmu-months")
                }(),
                function() {
                    var n, i = [],
                        r = t.getMonth();
                    ! function() {
                        t.setDate(1);
                        var e = (t.getDay() - u.first_day) % 7;
                        t.addDays(-(e + (0 > e ? 7 : 0)))
                    }();
                    for (var a = 0; 42 > a; ++a) {
                        n = {
                            text: t.getDate(),
                            class_name: []
                        }, r != t.getMonth() && n.class_name.push("pmu-not-in-month"), 0 == t.getDay() ? n.class_name.push("pmu-sunday") : 6 == t.getDay() && n.class_name.push("pmu-saturday");
                        var s = u.render(new Date(t)) || {},
                            l = t.valueOf(),
                            c = u.min && u.min > t || u.max && u.max < t;
                        s.disabled || c ? n.class_name.push("pmu-disabled") : (s.selected || u.date == l || -1 !== e.inArray(l, u.date) || "range" == u.mode && l >= u.date[0] && l <= u.date[1]) && n.class_name.push("pmu-selected"), l == g && n.class_name.push("pmu-today"), s.class_name && n.class_name.push(s.class_name), n.class_name = n.class_name.join(" "), i.push(n), t.addDays(1)
                    }
                    o += b.body(i, "pmu-days")
                }(), r.append(o)
            }
            a.setDate(1), s.setDate(1), s.addMonths(1), s.addDays(-1), c.find(".pmu-prev").css("visibility", u.min && u.min >= a ? "hidden" : "visible"), c.find(".pmu-next").css("visibility", u.max && u.max <= s ? "hidden" : "visible"), u.fill.apply(this)
        }

        function n(t, i, o, r) {
            if (t.constructor == Date) return t;
            if (!t) return new Date;
            var a = t.split(o);
            if (a.length > 1) return a.forEach(function(t, a, s) {
                s[a] = n(e.trim(t), i, o, r)
            }), a;
            for (var s, l, u, c, d, p = r.monthsShort.join(")(") + ")(" + r.months.join(")("), o = new RegExp("[^0-9a-zA-Z(" + p + ")]+"), f = t.split(o), h = i.split(o), m = new Date, g = 0; g < f.length; g++) switch (h[g]) {
                case "b":
                    l = r.monthsShort.indexOf(f[g]);
                    break;
                case "B":
                    l = r.months.indexOf(f[g]);
                    break;
                case "d":
                case "e":
                    s = parseInt(f[g], 10);
                    break;
                case "m":
                    l = parseInt(f[g], 10) - 1;
                    break;
                case "Y":
                case "y":
                    u = parseInt(f[g], 10), u += u > 100 ? 0 : 29 > u ? 2e3 : 1900;
                    break;
                case "H":
                case "I":
                case "k":
                case "l":
                    c = parseInt(f[g], 10);
                    break;
                case "P":
                case "p":
                    /pm/i.test(f[g]) && 12 > c ? c += 12 : /am/i.test(f[g]) && c >= 12 && (c -= 12);
                    break;
                case "M":
                    d = parseInt(f[g], 10)
            }
            var v = new Date(void 0 === u ? m.getFullYear() : u, void 0 === l ? m.getMonth() : l, void 0 === s ? m.getDate() : s, void 0 === c ? m.getHours() : c, void 0 === d ? m.getMinutes() : d, 0);
            return isNaN(1 * v) && (v = new Date), v
        }

        function i(e, t, n) {
            var i = e.getMonth(),
                o = e.getDate(),
                r = e.getFullYear(),
                a = e.getDay(),
                s = e.getHours(),
                l = s >= 12,
                u = l ? s - 12 : s,
                c = e.getDayOfYear();
            0 == u && (u = 12);
            for (var d, p = e.getMinutes(), f = e.getSeconds(), h = t.split(""), m = 0; m < h.length; m++) {
                switch (d = h[m]) {
                    case "a":
                        d = n.daysShort[a];
                        break;
                    case "A":
                        d = n.days[a];
                        break;
                    case "b":
                        d = n.monthsShort[i];
                        break;
                    case "B":
                        d = n.months[i];
                        break;
                    case "C":
                        d = 1 + Math.floor(r / 100);
                        break;
                    case "d":
                        d = 10 > o ? "0" + o : o;
                        break;
                    case "e":
                        d = o;
                        break;
                    case "H":
                        d = 10 > s ? "0" + s : s;
                        break;
                    case "I":
                        d = 10 > u ? "0" + u : u;
                        break;
                    case "j":
                        d = 100 > c ? 10 > c ? "00" + c : "0" + c : c;
                        break;
                    case "k":
                        d = s;
                        break;
                    case "l":
                        d = u;
                        break;
                    case "m":
                        d = 9 > i ? "0" + (1 + i) : 1 + i;
                        break;
                    case "M":
                        d = 10 > p ? "0" + p : p;
                        break;
                    case "p":
                    case "P":
                        d = l ? "PM" : "AM";
                        break;
                    case "s":
                        d = Math.floor(e.getTime() / 1e3);
                        break;
                    case "S":
                        d = 10 > f ? "0" + f : f;
                        break;
                    case "u":
                        d = a + 1;
                        break;
                    case "w":
                        d = a;
                        break;
                    case "y":
                        d = ("" + r).substr(2, 2);
                        break;
                    case "Y":
                        d = r
                }
                h[m] = d
            }
            return h.join("")
        }

        function o() {
            var t, n = e(this),
                i = n.data("pickmeup-options"),
                o = i.current;
            switch (i.mode) {
                case "multiple":
                    t = o.setHours(0, 0, 0, 0).valueOf(), -1 !== e.inArray(t, i.date) ? e.each(i.date, function(e, n) {
                        return n == t ? (i.date.splice(e, 1), !1) : !0
                    }) : i.date.push(t);
                    break;
                case "range":
                    i.lastSel || (i.date[0] = o.setHours(0, 0, 0, 0).valueOf()), t = o.setHours(0, 0, 0, 0).valueOf(), t <= i.date[0] ? (i.date[1] = i.date[0], i.date[0] = t) : i.date[1] = t, i.lastSel = !i.lastSel;
                    break;
                default:
                    i.date = o.valueOf()
            }
            var r = a(i);
            return n.is("input") && n.val("single" == i.mode ? r[0] : r[0].join(i.separator)), i.change.apply(this, r), i.flat || !i.hide_on_select || "range" == i.mode && i.lastSel ? void 0 : (i.binded.hide(), !1)
        }

        function r(t) {
            var n = e(t.target);
            if (n.hasClass("pmu-button") || (n = n.closest(".pmu-button")), n.length) {
                if (n.hasClass("pmu-disabled")) return !1;
                var i = e(this),
                    o = i.data("pickmeup-options"),
                    r = n.parents(".pmu-instance").eq(0),
                    a = r.parent(),
                    s = e(".pmu-instance", a).index(r);
                if (n.parent().is("nav")) n.hasClass("pmu-month") ? (o.current.addMonths(s - Math.floor(o.calendars / 2)), a.hasClass("pmu-view-years") ? ("single" != o.mode ? o.current = new Date(o.date[o.date.length - 1]) : o.current = new Date(o.date), o.select_day ? a.removeClass("pmu-view-years").addClass("pmu-view-days") : o.select_month && a.removeClass("pmu-view-years").addClass("pmu-view-months")) : a.hasClass("pmu-view-months") ? o.select_year ? a.removeClass("pmu-view-months").addClass("pmu-view-years") : o.select_day && a.removeClass("pmu-view-months").addClass("pmu-view-days") : a.hasClass("pmu-view-days") && (o.select_month ? a.removeClass("pmu-view-days").addClass("pmu-view-months") : o.select_year && a.removeClass("pmu-view-days").addClass("pmu-view-years"))) : n.hasClass("pmu-prev") ? o.binded.prev(!1) : o.binded.next(!1);
                else if (!n.hasClass("pmu-disabled"))
                    if (a.hasClass("pmu-view-years")) o.current.setFullYear(parseInt(n.text(), 10)), o.select_month ? a.removeClass("pmu-view-years").addClass("pmu-view-months") : o.select_day ? a.removeClass("pmu-view-years").addClass("pmu-view-days") : o.binded.update_date();
                    else if (a.hasClass("pmu-view-months")) o.current.setMonth(r.find(".pmu-months .pmu-button").index(n)), o.current.setFullYear(parseInt(r.find(".pmu-month").text(), 10)), o.select_day ? a.removeClass("pmu-view-months").addClass("pmu-view-days") : o.binded.update_date(), o.current.addMonths(Math.floor(o.calendars / 2) - s);
                else {
                    var l = parseInt(n.text(), 10);
                    o.current.addMonths(s - Math.floor(o.calendars / 2)), n.hasClass("pmu-not-in-month") && o.current.addMonths(l > 15 ? -1 : 1), o.current.setDate(l), o.binded.update_date()
                }
                o.binded.fill()
            }
            return !1
        }

        function a(t) {
            var n;
            return "single" == t.mode ? (n = new Date(t.date), [i(n, t.format, t.locale), n]) : (n = [
                [],
                []
            ], e.each(t.date, function(e, o) {
                var r = new Date(o);
                n[0].push(i(r, t.format, t.locale)), n[1].push(r)
            }), n)
        }

        function s(t) {
            var i = this.pickmeup;
            if (t || !i.is(":visible")) {
                var o = e(this),
                    r = o.data("pickmeup-options"),
                    a = o.offset(),
                    s = {
                        l: document.documentElement.scrollLeft,
                        t: document.documentElement.scrollTop,
                        w: document.documentElement.clientWidth,
                        h: document.documentElement.clientHeight
                    },
                    l = a.top,
                    u = a.left;
                if (r.binded.fill(), o.is("input") && (o.pickmeup("set_date", n(o.val() ? o.val() : r.default_date, r.format, r.separator, r.locale)).keydown(function(e) {
                        9 == e.which && o.pickmeup("hide")
                    }), r.lastSel = !1), r.before_show(), 0 == r.show()) return;
                if (!r.flat) {
                    switch (r.position) {
                        case "top":
                            l -= i.outerHeight();
                            break;
                        case "left":
                            u -= i.outerWidth();
                            break;
                        case "right":
                            u += this.offsetWidth;
                            break;
                        case "bottom":
                            l += this.offsetHeight
                    }
                    l + i.offsetHeight > s.t + s.h && (l = a.top - i.offsetHeight), l < s.t && (l = a.top + this.offsetHeight + i.offsetHeight), u + i.offsetWidth > s.l + s.w && (u = a.left - i.offsetWidth), u < s.l && (u = a.left + this.offsetWidth), i.css({
                        display: "inline-block",
                        top: l + "px",
                        left: u + "px"
                    }), e(document).on("mousedown" + r.events_namespace + " touchstart" + r.events_namespace, r.binded.hide).on("resize" + r.events_namespace, [!0], r.binded.forced_show)
                }
            }
        }

        function l() {
            s.call(this, !0)
        }

        function u(t) {
            if (!t || !t.target || t.target != this && !(16 & this.pickmeup.get(0).compareDocumentPosition(t.target))) {
                var n = this.pickmeup,
                    i = e(this).data("pickmeup-options");
                0 != i.hide() && (n.hide(), e(document).off("mousedown touchstart", i.binded.hide).off("resize", i.binded.forced_show), i.lastSel = !1)
            }
        }

        function c() {
            var t = e(this).data("pickmeup-options");
            e(document).off("mousedown", t.binded.hide).off("resize", t.binded.forced_show), t.binded.forced_show()
        }

        function d() {
            var t = e(this).data("pickmeup-options");
            "single" != t.mode && (t.date = [], t.lastSel = !1, t.binded.fill())
        }

        function p(t) {
            "undefined" == typeof t && (t = !0);
            var n = this.pickmeup,
                i = e(this).data("pickmeup-options");
            n.hasClass("pmu-view-years") ? i.current.addYears(-12) : n.hasClass("pmu-view-months") ? i.current.addYears(-1) : n.hasClass("pmu-view-days") && i.current.addMonths(-1), t && i.binded.fill()
        }

        function f(t) {
            "undefined" == typeof t && (t = !0);
            var n = this.pickmeup,
                i = e(this).data("pickmeup-options");
            n.hasClass("pmu-view-years") ? i.current.addYears(12) : n.hasClass("pmu-view-months") ? i.current.addYears(1) : n.hasClass("pmu-view-days") && i.current.addMonths(1), t && i.binded.fill()
        }

        function h(t) {
            var n = e(this).data("pickmeup-options"),
                o = a(n);
            if ("string" == typeof t) {
                var r = o[1];
                return r.constructor == Date ? i(r, t, n.locale) : r.map(function(e) {
                    return i(e, t, n.locale)
                })
            }
            return o[t ? 0 : 1]
        }

        function m(t) {
            var i = e(this),
                o = i.data("pickmeup-options");
            if (o.date = t, "string" == typeof o.date ? o.date = n(o.date, o.format, o.separator, o.locale).setHours(0, 0, 0, 0) : o.date.constructor == Date && o.date.setHours(0, 0, 0, 0), o.date || (o.date = new Date, o.date.setHours(0, 0, 0, 0)), "single" != o.mode)
                if (o.date.constructor != Array) o.date = [o.date.valueOf()], "range" == o.mode && o.date.push(new Date(o.date[0]).setHours(0, 0, 0, 0).valueOf());
                else {
                    for (var r = 0; r < o.date.length; r++) o.date[r] = n(o.date[r], o.format, o.separator, o.locale).setHours(0, 0, 0, 0).valueOf();
                    "range" == o.mode && (o.date[1] = new Date(o.date[1]).setHours(0, 0, 0, 0).valueOf())
                }
            else(i.val() || o.default_date !== !1) && (o.date = o.date.constructor == Array ? o.date[0].valueOf() : o.date.valueOf());
            if (o.current = new Date("single" != o.mode ? o.date[0] : o.date), o.binded.fill(), i.is("input")) {
                var s = a(o);
                i.val("single" == o.mode ? o.default_date === !1 ? i.val() : s[0] : s[0].join(o.separator))
            }
        }

        function g() {
            var t = e(this),
                n = t.data("pickmeup-options");
            t.removeData("pickmeup-options"), t.off(n.events_namespace), e(document).off(n.events_namespace), e(this.pickmeup).remove()
        }
        var v = 0;
        e.pickmeup = e.extend(e.pickmeup || {}, {
            date: new Date,
            default_date: new Date,
            flat: !1,
            first_day: 1,
            prev: "&#9664;",
            next: "&#9654;",
            mode: "single",
            select_year: !0,
            select_month: !0,
            select_day: !0,
            view: "days",
            calendars: 1,
            format: "d-m-Y",
            position: "bottom",
            trigger_event: "click touchstart",
            class_name: "",
            separator: " - ",
            hide_on_select: !1,
            min: null,
            max: null,
            render: function() {},
            change: function() {
                return !0
            },
            before_show: function() {
                return !0
            },
            show: function() {
                return !0
            },
            hide: function() {
                return !0
            },
            fill: function() {
                return !0
            },
            locale: {
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            }
        });
        var y = {
                years: "pmu-view-years",
                months: "pmu-view-months",
                days: "pmu-view-days"
            },
            b = {
                wrapper: '<div class="pickmeup" />',
                head: function(e) {
                    for (var t = "", n = 0; 7 > n; ++n) t += "<div>" + e.day[n] + "</div>";
                    return '<div class="pmu-instance"><nav><div class="pmu-prev pmu-button">' + e.prev + '</div><div class="pmu-month pmu-button" /><div class="pmu-next pmu-button">' + e.next + '</div></nav><nav class="pmu-day-of-week">' + t + "</nav></div>"
                },
                body: function(e, t) {
                    for (var n = "", i = 0; i < e.length; ++i) n += '<div class="' + e[i].class_name + ' pmu-button">' + e[i].text + "</div>";
                    return '<div class="' + t + '">' + n + "</div>"
                }
            };
        e.fn.pickmeup = function(i) {
            if ("string" == typeof i) {
                var a, w = Array.prototype.slice.call(arguments, 1);
                switch (i) {
                    case "hide":
                    case "show":
                    case "clear":
                    case "update":
                    case "prev":
                    case "next":
                    case "destroy":
                        this.each(function() {
                            a = e(this).data("pickmeup-options"), a && a.binded[i]()
                        });
                        break;
                    case "get_date":
                        return a = this.data("pickmeup-options"), a ? a.binded.get_date(w[0]) : null;
                    case "set_date":
                        this.each(function() {
                            a = e(this).data("pickmeup-options"), a && a.binded[i].apply(this, w)
                        })
                }
                return this
            }
            return this.each(function() {
                var a = e(this);
                if (!a.data("pickmeup-options")) {
                    var w, x, T = e.extend({}, e.pickmeup, i || {});
                    for (w in T) x = a.data("pmu-" + w), "undefined" != typeof x && (T[w] = x);
                    if ("days" != T.view || T.select_day || (T.view = "months"), "months" != T.view || T.select_month || (T.view = "years"), "years" != T.view || T.select_year || (T.view = "days"), "days" != T.view || T.select_day || (T.view = "months"), T.calendars = Math.max(1, parseInt(T.calendars, 10) || 1), T.mode = /single|multiple|range/.test(T.mode) ? T.mode : "single", "string" == typeof T.min ? T.min = n(T.min, T.format, T.separator, T.locale).setHours(0, 0, 0, 0) : T.min && T.min.constructor == Date && T.min.setHours(0, 0, 0, 0), "string" == typeof T.max ? T.max = n(T.max, T.format, T.separator, T.locale).setHours(0, 0, 0, 0) : T.max && T.max.constructor == Date && T.max.setHours(0, 0, 0, 0), T.select_day || (T.min && (T.min = new Date(T.min), T.min.setDate(1), T.min = T.min.valueOf()), T.max && (T.max = new Date(T.max), T.max.setDate(1), T.max = T.max.valueOf())), "string" == typeof T.date ? T.date = n(T.date, T.format, T.separator, T.locale).setHours(0, 0, 0, 0) : T.date.constructor == Date && T.date.setHours(0, 0, 0, 0), T.date || (T.date = new Date, T.date.setHours(0, 0, 0, 0)), "single" != T.mode) {
                        if (T.date.constructor != Array) T.date = [T.date.valueOf()], "range" == T.mode && T.date.push(new Date(T.date[0]).setHours(0, 0, 0, 0).valueOf());
                        else {
                            for (w = 0; w < T.date.length; w++) T.date[w] = n(T.date[w], T.format, T.separator, T.locale).setHours(0, 0, 0, 0).valueOf();
                            "range" == T.mode && (T.date[1] = new Date(T.date[1]).setHours(0, 0, 0, 0).valueOf())
                        }
                        if (T.current = new Date(T.date[0]), !T.select_day)
                            for (w = 0; w < T.date.length; ++w) T.date[w] = new Date(T.date[w]), T.date[w].setDate(1), T.date[w] = T.date[w].valueOf(), "range" != T.mode && T.date.indexOf(T.date[w]) !== w && (delete T.date.splice(w, 1), --w)
                    } else T.date = T.date.valueOf(), T.current = new Date(T.date), T.select_day || (T.date = new Date(T.date), T.date.setDate(1), T.date = T.date.valueOf());
                    T.current.setDate(1), T.current.setHours(0, 0, 0, 0);
                    var C, k = e(b.wrapper);
                    this.pickmeup = k, T.class_name && k.addClass(T.class_name);
                    var E = "";
                    for (w = 0; w < T.calendars; w++) C = T.first_day, E += b.head({
                        prev: T.prev,
                        next: T.next,
                        day: [T.locale.daysMin[C++ % 7], T.locale.daysMin[C++ % 7], T.locale.daysMin[C++ % 7], T.locale.daysMin[C++ % 7], T.locale.daysMin[C++ % 7], T.locale.daysMin[C++ % 7], T.locale.daysMin[C++ % 7]]
                    });
                    a.data("pickmeup-options", T);
                    for (w in T) - 1 != ["render", "change", "before_show", "show", "hide"].indexOf(w) && (T[w] = T[w].bind(this));
                    if (T.binded = {
                            fill: t.bind(this),
                            update_date: o.bind(this),
                            click: r.bind(this),
                            show: s.bind(this),
                            forced_show: l.bind(this),
                            hide: u.bind(this),
                            update: c.bind(this),
                            clear: d.bind(this),
                            prev: p.bind(this),
                            next: f.bind(this),
                            get_date: h.bind(this),
                            set_date: m.bind(this),
                            destroy: g.bind(this)
                        }, T.events_namespace = ".pickmeup-" + ++v, k.on("click touchstart", T.binded.click).addClass(y[T.view]).append(E).on(e.support.selectstart ? "selectstart" : "mousedown", function(e) {
                            e.preventDefault()
                        }), T.binded.fill(), T.flat) k.appendTo(this).css({
                        position: "relative",
                        display: "inline-block"
                    });
                    else {
                        k.appendTo(document.body);
                        var D = T.trigger_event.split(" ");
                        for (w = 0; w < D.length; ++w) D[w] += T.events_namespace;
                        D = D.join(" "), a.on(D, T.binded.show)
                    }
                }
            })
        }
    }), ! function(e) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
        else if ("function" == typeof define && define.amd) define([], e);
        else {
            var t;
            "undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.Slideout = e()
        }
    }(function() {
        return function e(t, n, i) {
            function o(a, s) {
                if (!n[a]) {
                    if (!t[a]) {
                        var l = "function" == typeof require && require;
                        if (!s && l) return l(a, !0);
                        if (r) return r(a, !0);
                        var u = new Error("Cannot find module '" + a + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var c = n[a] = {
                        exports: {}
                    };
                    t[a][0].call(c.exports, function(e) {
                        var n = t[a][1][e];
                        return o(n ? n : e)
                    }, c, c.exports, e, t, n, i)
                }
                return n[a].exports
            }
            for (var r = "function" == typeof require && require, a = 0; a < i.length; a++) o(i[a]);
            return o
        }({
            1: [function(e, t, n) {
                "use strict";

                function i(e, t) {
                    for (var n in t) t[n] && (e[n] = t[n]);
                    return e
                }

                function o(e, t) {
                    e.prototype = i(e.prototype || {}, t.prototype)
                }

                function r(e) {
                    e = e || {}, this._startOffsetX = 0, this._currentOffsetX = 0, this._opening = !1, this._moved = !1, this._opened = !1, this._preventOpen = !1, this._touch = void 0 === e.touch ? !0 : e.touch && !0, this.panel = e.panel, this.menu = e.menu, -1 === this.panel.className.search("slideout-panel") && (this.panel.className += " slideout-panel"), -1 === this.menu.className.search("slideout-menu") && (this.menu.className += " slideout-menu"), this._fx = e.fx || "ease", this._duration = parseInt(e.duration, 10) || 300, this._tolerance = parseInt(e.tolerance, 10) || 70, this._padding = this._translateTo = parseInt(e.padding, 10) || 256, this._orientation = "right" === e.side ? -1 : 1, this._translateTo *= this._orientation, this._touch && this._initTouchEvents()
                }
                var a, s = e("decouple"),
                    l = e("emitter"),
                    u = !1,
                    c = window.document,
                    d = c.documentElement,
                    p = window.navigator.msPointerEnabled,
                    f = {
                        start: p ? "MSPointerDown" : "touchstart",
                        move: p ? "MSPointerMove" : "touchmove",
                        end: p ? "MSPointerUp" : "touchend"
                    },
                    h = function() {
                        var e = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/,
                            t = c.getElementsByTagName("script")[0].style;
                        for (var n in t)
                            if (e.test(n)) return "-" + n.match(e)[0].toLowerCase() + "-";
                        return "WebkitOpacity" in t ? "-webkit-" : "KhtmlOpacity" in t ? "-khtml-" : ""
                    }();
                o(r, l), r.prototype.open = function() {
                    var e = this;
                    return this.emit("beforeopen"), -1 === d.className.search("slideout-open") && (d.className += " slideout-open"), this._setTransition(), this._translateXTo(this._translateTo), this._opened = !0, setTimeout(function() {
                        e.panel.style.transition = e.panel.style["-webkit-transition"] = "", e.emit("open")
                    }, this._duration + 50), this
                }, r.prototype.close = function() {
                    var e = this;
                    return this.isOpen() || this._opening ? (this.emit("beforeclose"), this._setTransition(), this._translateXTo(0), this._opened = !1, setTimeout(function() {
                        d.className = d.className.replace(/ slideout-open/, ""), e.panel.style.transition = e.panel.style["-webkit-transition"] = e.panel.style[h + "transform"] = e.panel.style.transform = "", e.emit("close")
                    }, this._duration + 50), this) : this
                }, r.prototype.toggle = function() {
                    return this.isOpen() ? this.close() : this.open()
                }, r.prototype.isOpen = function() {
                    return this._opened
                }, r.prototype._translateXTo = function(e) {
                    return this._currentOffsetX = e, this.panel.style[h + "transform"] = this.panel.style.transform = "translateX(" + e + "px)", this
                }, r.prototype._setTransition = function() {
                    return this.panel.style[h + "transition"] = this.panel.style.transition = h + "transform " + this._duration + "ms " + this._fx, this
                }, r.prototype._initTouchEvents = function() {
                    var e = this;
                    return this._onScrollFn = s(c, "scroll", function() {
                        e._moved || (clearTimeout(a), u = !0, a = setTimeout(function() {
                            u = !1
                        }, 250))
                    }), this._preventMove = function(t) {
                        e._moved && t.preventDefault()
                    }, c.addEventListener(f.move, this._preventMove), this._resetTouchFn = function(t) {
                        "undefined" != typeof t.touches && (e._moved = !1, e._opening = !1, e._startOffsetX = t.touches[0].pageX, e._preventOpen = !e._touch || !e.isOpen() && 0 !== e.menu.clientWidth)
                    }, this.panel.addEventListener(f.start, this._resetTouchFn), this._onTouchCancelFn = function() {
                        e._moved = !1, e._opening = !1
                    }, this.panel.addEventListener("touchcancel", this._onTouchCancelFn), this._onTouchEndFn = function() {
                        e._moved && (e._opening && Math.abs(e._currentOffsetX) > e._tolerance ? e.open() : e.close()), e._moved = !1
                    }, this.panel.addEventListener(f.end, this._onTouchEndFn), this._onTouchMoveFn = function(t) {
                        if (!u && !e._preventOpen && "undefined" != typeof t.touches) {
                            var n = t.touches[0].clientX - e._startOffsetX,
                                i = e._currentOffsetX = n;
                            if (!(Math.abs(i) > e._padding) && Math.abs(n) > 20) {
                                e._opening = !0;
                                var o = n * e._orientation;
                                if (e._opened && o > 0 || !e._opened && 0 > o) return;
                                0 >= o && (i = n + e._padding * e._orientation, e._opening = !1), e._moved || -1 !== d.className.search("slideout-open") || (d.className += " slideout-open"), e.panel.style[h + "transform"] = e.panel.style.transform = "translateX(" + i + "px)", e.emit("translate", i), e._moved = !0
                            }
                        }
                    }, this.panel.addEventListener(f.move, this._onTouchMoveFn), this
                }, r.prototype.enableTouch = function() {
                    return this._touch = !0, this
                }, r.prototype.disableTouch = function() {
                    return this._touch = !1, this
                }, r.prototype.destroy = function() {
                    return this.close(), c.removeEventListener(f.move, this._preventMove), this.panel.removeEventListener(f.start, this._resetTouchFn), this.panel.removeEventListener("touchcancel", this._onTouchCancelFn), this.panel.removeEventListener(f.end, this._onTouchEndFn), this.panel.removeEventListener(f.move, this._onTouchMoveFn), c.removeEventListener("scroll", this._onScrollFn), this.open = this.close = function() {}, this
                }, t.exports = r
            }, {
                decouple: 2,
                emitter: 3
            }],
            2: [function(e, t, n) {
                "use strict";

                function i(e, t, n) {
                    function i(e) {
                        s = e, r()
                    }

                    function r() {
                        l || (o(a), l = !0)
                    }

                    function a() {
                        n.call(e, s), l = !1
                    }
                    var s, l = !1;
                    return e.addEventListener(t, i, !1), i
                }
                var o = function() {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                        window.setTimeout(e, 1e3 / 60)
                    }
                }();
                t.exports = i
            }, {}],
            3: [function(e, t, n) {
                "use strict";
                var i = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                };
                n.__esModule = !0;
                var o = function() {
                    function e() {
                        i(this, e)
                    }
                    return e.prototype.on = function(e, t) {
                        return this._eventCollection = this._eventCollection || {}, this._eventCollection[e] = this._eventCollection[e] || [], this._eventCollection[e].push(t), this
                    }, e.prototype.once = function(e, t) {
                        function n() {
                            i.off(e, n), t.apply(this, arguments)
                        }
                        var i = this;
                        return n.listener = t, this.on(e, n), this
                    }, e.prototype.off = function(e, t) {
                        var n = void 0;
                        return this._eventCollection && (n = this._eventCollection[e]) ? (n.forEach(function(e, i) {
                            (e === t || e.listener === t) && n.splice(i, 1)
                        }), 0 === n.length && delete this._eventCollection[e], this) : this
                    }, e.prototype.emit = function(e) {
                        for (var t = this, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; n > o; o++) i[o - 1] = arguments[o];
                        var r = void 0;
                        return this._eventCollection && (r = this._eventCollection[e]) ? (r = r.slice(0), r.forEach(function(e) {
                            return e.apply(t, i)
                        }), this) : this
                    }, e
                }();
                n["default"] = o, t.exports = n["default"]
            }, {}]
        }, {}, [1])(1)
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(e) {
    "use strict";

    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t)
            if (void 0 !== e.style[n]) return {
                end: t[n]
            };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1,
            i = this;
        e(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var o = function() {
            n || e(i).trigger(e.support.transition.end)
        };
        return setTimeout(o, t), this
    }, e(function() {
        e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var n = e(this),
                o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof t && o[t].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(t) {
            e(t).on("click", n, this.close)
        };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {
        function n() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var o = e(this),
            r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var a = e("#" === r ? [] : r);
        t && t.preventDefault(), a.length || (a = o.closest(".alert")), a.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (a.removeClass("in"), e.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = e.fn.alert;
    e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() {
        return e.fn.alert = o, this
    }, e(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.button"),
                r = "object" == typeof t && t;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == t ? o.toggle() : t && o.setState(t);
        })
    }
    var n = function(t, i) {
        this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(t) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            r = i.data();
        t += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(e.proxy(function() {
            i[o](null == r[t] ? this.options[t] : r[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = e.fn.button;
    e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
        return e.fn.button = i, this
    }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = e(n.target).closest(".btn");
        t.call(i, "toggle"), e(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.carousel"),
                r = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
                a = "string" == typeof t ? t : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof t ? o.to(t) : a ? o[a]() : r.interval && o.pause().cycle()
        })
    }
    var n = function(t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            e.preventDefault()
        }
    }, n.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
    }, n.prototype.getItemForDirection = function(e, t) {
        var n = this.getItemIndex(t),
            i = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
        if (i && !this.options.wrap) return t;
        var o = "prev" == e ? -1 : 1,
            r = (n + o) % this.$items.length;
        return this.$items.eq(r)
    }, n.prototype.to = function(e) {
        var t = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
    }, n.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function(t, i) {
        var o = this.$element.find(".item.active"),
            r = i || this.getItemForDirection(t, o),
            a = this.interval,
            s = "next" == t ? "left" : "right",
            l = this;
        if (r.hasClass("active")) return this.sliding = !1;
        var u = r[0],
            c = e.Event("slide.bs.carousel", {
                relatedTarget: u,
                direction: s
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = e(this.$indicators.children()[this.getItemIndex(r)]);
                d && d.addClass("active")
            }
            var p = e.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: s
            });
            return e.support.transition && this.$element.hasClass("slide") ? (r.addClass(t), r[0].offsetWidth, o.addClass(s), r.addClass(s), o.one("bsTransitionEnd", function() {
                r.removeClass([t, s].join(" ")).addClass("active"), o.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(p)), a && this.cycle(), this
        }
    };
    var i = e.fn.carousel;
    e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
        return e.fn.carousel = i, this
    };
    var o = function(n) {
        var i, o = e(this),
            r = e(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var a = e.extend({}, r.data(), o.data()),
                s = o.attr("data-slide-to");
            s && (a.interval = !1), t.call(r, a), s && r.data("bs.carousel").to(s), n.preventDefault()
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
            var n = e(this);
            t.call(n, n.data())
        })
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(i)
    }

    function n(t) {
        return this.each(function() {
            var n = e(this),
                o = n.data("bs.collapse"),
                r = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
            !o && r.toggle && /show|hide/.test(t) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof t && o[t]()
        })
    }
    var i = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (t = o.data("bs.collapse"), t && t.transitioning))) {
                var r = e.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), t || o.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var s = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition) return s.call(this);
                    var l = e.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) {
            var o = e(i);
            this.addAriaAndCollapsedClass(t(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = e.fn.collapse;
    e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = o, this
    }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var o = e(this);
        o.attr("data-target") || i.preventDefault();
        var r = t(o),
            a = r.data("bs.collapse"),
            s = a ? "toggle" : o.data();
        n.call(r, s)
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && e(n);
        return i && i.length ? i : t.parent()
    }

    function n(n) {
        n && 3 === n.which || (e(o).remove(), e(r).each(function() {
            var i = e(this),
                o = t(i),
                r = {
                    relatedTarget: this
                };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(o[0], n.target) || (o.trigger(n = e.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(e.Event("hidden.bs.dropdown", r)))))
        }))
    }

    function i(t) {
        return this.each(function() {
            var n = e(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new a(this)), "string" == typeof t && i[t].call(n)
        })
    }
    var o = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        a = function(t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    a.VERSION = "3.3.7", a.prototype.toggle = function(i) {
        var o = e(this);
        if (!o.is(".disabled, :disabled")) {
            var r = t(o),
                a = r.hasClass("open");
            if (n(), !a) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                var s = {
                    relatedTarget: this
                };
                if (r.trigger(i = e.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(e.Event("shown.bs.dropdown", s))
            }
            return !1
        }
    }, a.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = e(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = t(i),
                    a = o.hasClass("open");
                if (!a && 27 != n.which || a && 27 == n.which) return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
                var s = " li:not(.disabled):visible a",
                    l = o.find(".dropdown-menu" + s);
                if (l.length) {
                    var u = l.index(n.target);
                    38 == n.which && u > 0 && u--, 40 == n.which && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var s = e.fn.dropdown;
    e.fn.dropdown = i, e.fn.dropdown.Constructor = a, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = s, this
    }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, a.prototype.toggle).on("keydown.bs.dropdown.data-api", r, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery), + function(e) {
    "use strict";

    function t(t, i) {
        return this.each(function() {
            var o = e(this),
                r = o.data("bs.modal"),
                a = e.extend({}, n.DEFAULTS, o.data(), "object" == typeof t && t);
            r || o.data("bs.modal", r = new n(this, a)), "string" == typeof t ? r[t](i) : a.show && r.show(i)
        })
    }
    var n = function(t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }, n.prototype.show = function(t) {
        var i = this,
            o = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(t) {
                e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = e.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var r = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            o ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function(t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(t) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = e.support.transition && o;
            if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            r ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() {
                i.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
        } else t && t()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var i = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
        return e.fn.modal = i, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = e(this),
            o = i.attr("href"),
            r = e(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            a = r.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(o) && o
            }, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), t.call(r, a, this)
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.tooltip"),
                r = "object" == typeof t && t;
            (o || !/destroy|hide/.test(t)) && (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof t && o[t]())
        })
    }
    var n = function(e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(t, n, i) {
        if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var a = o[r];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, n.prototype.getDelegateOptions = function() {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function(e, i) {
            n[e] != i && (t[e] = i)
        }), t
    }, n.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function() {
        for (var e in this.inState)
            if (this.inState[e]) return !0;
        return !1
    }, n.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !i) return;
            var o = this,
                r = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), r.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && r.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                u = l.test(s);
            u && (s = s.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                d = r[0].offsetWidth,
                p = r[0].offsetHeight;
            if (u) {
                var f = s,
                    h = this.getPosition(this.$viewport);
                s = "bottom" == s && c.bottom + p > h.bottom ? "top" : "top" == s && c.top - p < h.top ? "bottom" : "right" == s && c.right + d > h.width ? "left" : "left" == s && c.left - d < h.left ? "right" : s, r.removeClass(f).addClass(s)
            }
            var m = this.getCalculatedOffset(s, c, d, p);
            this.applyPlacement(m, s);
            var g = function() {
                var e = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == e && o.leave(o)
            };
            e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
        }
    }, n.prototype.applyPlacement = function(t, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            r = i[0].offsetHeight,
            a = parseInt(i.css("margin-top"), 10),
            s = parseInt(i.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), t.top += a, t.left += s, e.offset.setOffset(i[0], e.extend({
            using: function(e) {
                i.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            u = i[0].offsetHeight;
        "top" == n && u != r && (t.top = t.top + r - u);
        var c = this.getViewportAdjustedDelta(n, t, l, u);
        c.left ? t.left += c.left : t.top += c.top;
        var d = /top|bottom/.test(n),
            p = d ? 2 * c.left - o + l : 2 * c.top - r + u,
            f = d ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(p, i[0][f], d)
    }, n.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(t) {
        function i() {
            "in" != o.hoverState && r.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), t && t()
        }
        var o = this,
            r = e(this.$tip),
            a = e.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (r.removeClass("in"), e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = e.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var r = window.SVGElement && n instanceof window.SVGElement,
            a = i ? {
                top: 0,
                left: 0
            } : r ? null : t.offset(),
            s = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            l = i ? {
                width: e(window).width(),
                height: e(window).height()
            } : null;
        return e.extend({}, o, s, l, a)
    }, n.prototype.getCalculatedOffset = function(e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var s = t.top - r - a.scroll,
                l = t.top + r - a.scroll + i;
            s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l)
        } else {
            var u = t.left - r,
                c = t.left + r + n;
            u < a.left ? o.left = a.left - u : c > a.right && (o.left = a.left + a.width - c)
        }
        return o
    }, n.prototype.getTitle = function() {
        var e, t = this.$element,
            n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, n.prototype.getUID = function(e) {
        do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
        return e
    }, n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout), this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null
        })
    };
    var i = e.fn.tooltip;
    e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = i, this
    }
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.popover"),
                r = "object" == typeof t && t;
            (o || !/destroy|hide/.test(t)) && (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof t && o[t]())
        })
    }
    var n = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.7", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = e.fn.popover;
    e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
        return e.fn.popover = i, this
    }
}(jQuery), + function(e) {
    "use strict";

    function t(n, i) {
        this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.scrollspy"),
                r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new t(this, r)), "string" == typeof n && o[n]()
        })
    }
    t.VERSION = "3.3.7", t.DEFAULTS = {
        offset: 10
    }, t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function() {
        var t = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var t = e(this),
                o = t.data("target") || t.attr("href"),
                r = /^#./.test(o) && e(o);
            return r && r.length && r.is(":visible") && [
                [r[n]().top + i, o]
            ] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            r = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), t >= i) return a != (e = r[r.length - 1]) && this.activate(e);
        if (a && t < o[0]) return this.activeTarget = null, this.clear();
        for (e = o.length; e--;) a != r[e] && t >= o[e] && (void 0 === o[e + 1] || t < o[e + 1]) && this.activate(r[e])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, t.prototype.clear = function() {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = e.fn.scrollspy;
    e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = i, this
    }, e(window).on("load.bs.scrollspy.data-api", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof t && o[t]()
        })
    }
    var n = function(t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"),
                r = e.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                a = e.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(r), t.trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var s = e(i);
                this.activate(t.closest("li"), n), this.activate(s, s.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(t, i, o) {
        function r() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var a = i.find("> .active"),
            s = o && e.support.transition && (a.length && a.hasClass("fade") || !!i.find("> .fade").length);
        a.length && s ? a.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), a.removeClass("in");
    };
    var i = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
        return e.fn.tab = i, this
    };
    var o = function(n) {
        n.preventDefault(), t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.affix"),
                r = "object" == typeof t && t;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof t && o[t]()
        })
    }
    var n = function(t, i) {
        this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(e, t, n, i) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            a = this.$target.height();
        if (null != n && "top" == this.affixed) return n > o ? "top" : !1;
        if ("bottom" == this.affixed) return null != n ? o + this.unpin <= r.top ? !1 : "bottom" : e - i >= o + a ? !1 : "bottom";
        var s = null == this.affixed,
            l = s ? o : r.top,
            u = s ? a : t;
        return null != n && n >= o ? "top" : null != i && l + u >= e - i ? "bottom" : !1
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(),
            t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                r = i.bottom,
                a = Math.max(e(document).height(), e(document.body).height());
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var s = this.getState(a, t, o, r);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (s ? "-" + s : ""),
                    u = e.Event(l + ".bs.affix");
                if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: a - t - r
            })
        }
    };
    var i = e.fn.affix;
    e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
        return e.fn.affix = i, this
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var n = e(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
        })
    })
}(jQuery);
var Membership = function(e, t) {
    "use strict";
    return;
    var n = "https://app.thebookingfactory.com",
        i = this;
    this.frame = null, this.renderVisibleBlock = function(e) {
        var i = t ? "?hotel_id=" + t : "";
        $(e).append('<iframe name="membership" src="' + n + "/membership" + i + '"></iframe>'), this.frame = window.frames.membership
    }, this.renderInvisibleBlock = function() {
        var e = t ? "?hotel_id=" + t : "";
        $("body").append('<iframe name="membership" src="' + n + "/membership" + e + '" style="width:0;height:0;border:none;"></iframe>'), this.frame = window.frames.membership
    }, this.getCredentials = function(e) {
        this.getCredentialsCallback = e, this.frame.postMessage(JSON.stringify({
            method: "getCredentials"
        }), n)
    }, this.setCredentials = function(e) {
        this.frame.postMessage(JSON.stringify({
            method: "setCredentials",
            data: e
        }), n)
    }, this.logout = function() {
        this.frame.postMessage(JSON.stringify({
            method: "logout"
        }), n)
    }, this.initialize = function(t) {
        var n = this;
        null !== t && $("li.logout").attr("style", "display: block !important").on("click", "a", function(e) {
            e.preventDefault(), n.logout(), $("li.logout").removeAttr("style")
        }), e && e.init && "function" == typeof e.init && e.init()
    }, this.loggedin = function() {
        $("li.logout").attr("style", "display: block !important").on("click", "a", function(e) {
            e.preventDefault(), i.logout(), $("li.logout").removeAttr("style")
        })
    };
    var o = function(e) {
        var t;
        if (e.origin === n) {
            try {
                t = JSON.parse(e.data)
            } catch (o) {
                console.log(o)
            }
            t && "function" == typeof i[t.method] && i[t.method](t.data)
        }
    };
    window.addEventListener ? window.addEventListener("message", o) : window.attachEvent("onmessage", o), e && e.container ? this.renderVisibleBlock(e.container) : this.renderInvisibleBlock()
};
! function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
}(this, function() {
    "use strict";
    var e = function(e, t, n, i) {
        var o = {
            features: null,
            bind: function(e, t, n, i) {
                var o = (i ? "remove" : "add") + "EventListener";
                t = t.split(" ");
                for (var r = 0; r < t.length; r++) t[r] && e[o](t[r], n, !1)
            },
            isArray: function(e) {
                return e instanceof Array
            },
            createEl: function(e, t) {
                var n = document.createElement(t || "div");
                return e && (n.className = e), n
            },
            getScrollY: function() {
                var e = window.pageYOffset;
                return void 0 !== e ? e : document.documentElement.scrollTop
            },
            unbind: function(e, t, n) {
                o.bind(e, t, n, !0)
            },
            removeClass: function(e, t) {
                var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            },
            addClass: function(e, t) {
                o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
            },
            hasClass: function(e, t) {
                return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
            },
            getChildByClass: function(e, t) {
                for (var n = e.firstChild; n;) {
                    if (o.hasClass(n, t)) return n;
                    n = n.nextSibling
                }
            },
            arraySearch: function(e, t, n) {
                for (var i = e.length; i--;)
                    if (e[i][n] === t) return i;
                return -1
            },
            extend: function(e, t, n) {
                for (var i in t)
                    if (t.hasOwnProperty(i)) {
                        if (n && e.hasOwnProperty(i)) continue;
                        e[i] = t[i]
                    }
            },
            easing: {
                sine: {
                    out: function(e) {
                        return Math.sin(e * (Math.PI / 2))
                    },
                    inOut: function(e) {
                        return -(Math.cos(Math.PI * e) - 1) / 2
                    }
                },
                cubic: {
                    out: function(e) {
                        return --e * e * e + 1
                    }
                }
            },
            detectFeatures: function() {
                if (o.features) return o.features;
                var e = o.createEl(),
                    t = e.style,
                    n = "",
                    i = {};
                if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
                    var r = navigator.userAgent;
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        a && a.length > 0 && (a = parseInt(a[1], 10), a >= 1 && 8 > a && (i.isOldIOSPhone = !0))
                    }
                    var s = r.match(/Android\s([0-9\.]*)/),
                        l = s ? s[1] : 0;
                    l = parseFloat(l), l >= 1 && (4.4 > l && (i.isOldAndroid = !0), i.androidVersion = l), i.isMobileOpera = /opera mini|opera mobi/i.test(r)
                }
                for (var u, c, d = ["transform", "perspective", "animationName"], p = ["", "webkit", "Moz", "ms", "O"], f = 0; 4 > f; f++) {
                    n = p[f];
                    for (var h = 0; 3 > h; h++) u = d[h], c = n + (n ? u.charAt(0).toUpperCase() + u.slice(1) : u), !i[u] && c in t && (i[u] = c);
                    n && !i.raf && (n = n.toLowerCase(), i.raf = window[n + "RequestAnimationFrame"], i.raf && (i.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]))
                }
                if (!i.raf) {
                    var m = 0;
                    i.raf = function(e) {
                        var t = (new Date).getTime(),
                            n = Math.max(0, 16 - (t - m)),
                            i = window.setTimeout(function() {
                                e(t + n)
                            }, n);
                        return m = t + n, i
                    }, i.caf = function(e) {
                        clearTimeout(e)
                    }
                }
                return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = i, i
            }
        };
        o.detectFeatures(), o.features.oldIE && (o.bind = function(e, t, n, i) {
            t = t.split(" ");
            for (var o, r = (i ? "detach" : "attach") + "Event", a = function() {
                    n.handleEvent.call(n)
                }, s = 0; s < t.length; s++)
                if (o = t[s])
                    if ("object" == typeof n && n.handleEvent) {
                        if (i) {
                            if (!n["oldIE" + o]) return !1
                        } else n["oldIE" + o] = a;
                        e[r]("on" + o, n["oldIE" + o])
                    } else e[r]("on" + o, n)
        });
        var r = this,
            a = 25,
            s = 3,
            l = {
                allowPanToNext: !0,
                spacing: .12,
                bgOpacity: 1,
                mouseUsed: !1,
                loop: !0,
                pinchToClose: !0,
                closeOnScroll: !0,
                closeOnVerticalDrag: !0,
                verticalDragRange: .75,
                hideAnimationDuration: 333,
                showAnimationDuration: 333,
                showHideOpacity: !1,
                focus: !0,
                escKey: !0,
                arrowKeys: !0,
                mainScrollEndFriction: .35,
                panEndFriction: .35,
                isClickableElement: function(e) {
                    return "A" === e.tagName
                },
                getDoubleTapZoom: function(e, t) {
                    return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
                },
                maxSpreadZoom: 1.33,
                modal: !0,
                scaleMode: "fit"
            };
        o.extend(l, i);
        var u, c, d, p, f, h, m, g, v, y, b, w, x, T, C, k, E, D, S, _, $, N, A, I, O, M, F, L, j, R, H, P, q, z, W, B, U, Y, Z, X, V, K, G, J, Q, ee, te, ne, ie, oe, re, ae, se, le, ue, ce, de = function() {
                return {
                    x: 0,
                    y: 0
                }
            },
            pe = de(),
            fe = de(),
            he = de(),
            me = {},
            ge = 0,
            ve = {},
            ye = de(),
            be = 0,
            we = !0,
            xe = [],
            Te = {},
            Ce = !1,
            ke = function(e, t) {
                o.extend(r, t.publicMethods), xe.push(e)
            },
            Ee = function(e) {
                var t = Qt();
                return e > t - 1 ? e - t : 0 > e ? t + e : e
            },
            De = {},
            Se = function(e, t) {
                return De[e] || (De[e] = []), De[e].push(t)
            },
            _e = function(e) {
                var t = De[e];
                if (t) {
                    var n = Array.prototype.slice.call(arguments);
                    n.shift();
                    for (var i = 0; i < t.length; i++) t[i].apply(r, n)
                }
            },
            $e = function() {
                return (new Date).getTime()
            },
            Ne = function(e) {
                le = e, r.bg.style.opacity = e * l.bgOpacity
            },
            Ae = function(e, t, n, i, o) {
                (!Ce || o && o !== r.currItem) && (i /= o ? o.fitRatio : r.currItem.fitRatio), e[N] = w + t + "px, " + n + "px" + x + " scale(" + i + ")"
            },
            Ie = function(e) {
                ie && (e && (y > r.currItem.fitRatio ? Ce || (pn(r.currItem, !1, !0), Ce = !0) : Ce && (pn(r.currItem), Ce = !1)), Ae(ie, he.x, he.y, y))
            },
            Oe = function(e) {
                e.container && Ae(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
            },
            Me = function(e, t) {
                t[N] = w + e + "px, 0px" + x
            },
            Fe = function(e, t) {
                if (!l.loop && t) {
                    var n = p + (ye.x * ge - e) / ye.x,
                        i = Math.round(e - yt.x);
                    (0 > n && i > 0 || n >= Qt() - 1 && 0 > i) && (e = yt.x + i * l.mainScrollEndFriction)
                }
                yt.x = e, Me(e, f)
            },
            Le = function(e, t) {
                var n = bt[e] - ve[e];
                return fe[e] + pe[e] + n - n * (t / b)
            },
            je = function(e, t) {
                e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
            },
            Re = function(e) {
                e.x = Math.round(e.x), e.y = Math.round(e.y)
            },
            He = null,
            Pe = function() {
                He && (o.unbind(document, "mousemove", Pe), o.addClass(e, "pswp--has_mouse"), l.mouseUsed = !0, _e("mouseUsed")), He = setTimeout(function() {
                    He = null
                }, 100)
            },
            qe = function() {
                o.bind(document, "keydown", r), H.transform && o.bind(r.scrollWrap, "click", r), l.mouseUsed || o.bind(document, "mousemove", Pe), o.bind(window, "resize scroll", r), _e("bindEvents")
            },
            ze = function() {
                o.unbind(window, "resize", r), o.unbind(window, "scroll", v.scroll), o.unbind(document, "keydown", r), o.unbind(document, "mousemove", Pe), H.transform && o.unbind(r.scrollWrap, "click", r), Y && o.unbind(window, m, r), _e("unbindEvents")
            },
            We = function(e, t) {
                var n = ln(r.currItem, me, e);
                return t && (ne = n), n
            },
            Be = function(e) {
                return e || (e = r.currItem), e.initialZoomLevel
            },
            Ue = function(e) {
                return e || (e = r.currItem), e.w > 0 ? l.maxSpreadZoom : 1
            },
            Ye = function(e, t, n, i) {
                return i === r.currItem.initialZoomLevel ? (n[e] = r.currItem.initialPosition[e], !0) : (n[e] = Le(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] ? (n[e] = t.max[e], !0) : !1)
            },
            Ze = function() {
                if (N) {
                    var t = H.perspective && !I;
                    return w = "translate" + (t ? "3d(" : "("), void(x = H.perspective ? ", 0px)" : ")")
                }
                N = "left", o.addClass(e, "pswp--ie"), Me = function(e, t) {
                    t.left = e + "px"
                }, Oe = function(e) {
                    var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                        n = e.container.style,
                        i = t * e.w,
                        o = t * e.h;
                    n.width = i + "px", n.height = o + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px"
                }, Ie = function() {
                    if (ie) {
                        var e = ie,
                            t = r.currItem,
                            n = t.fitRatio > 1 ? 1 : t.fitRatio,
                            i = n * t.w,
                            o = n * t.h;
                        e.width = i + "px", e.height = o + "px", e.left = he.x + "px", e.top = he.y + "px"
                    }
                }
            },
            Xe = function(e) {
                var t = "";
                l.escKey && 27 === e.keyCode ? t = "close" : l.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, r[t]()))
            },
            Ve = function(e) {
                e && (V || X || oe || B) && (e.preventDefault(), e.stopPropagation())
            },
            Ke = function() {
                r.setScrollOffset(0, o.getScrollY())
            },
            Ge = {},
            Je = 0,
            Qe = function(e) {
                Ge[e] && (Ge[e].raf && M(Ge[e].raf), Je--, delete Ge[e])
            },
            et = function(e) {
                Ge[e] && Qe(e), Ge[e] || (Je++, Ge[e] = {})
            },
            tt = function() {
                for (var e in Ge) Ge.hasOwnProperty(e) && Qe(e)
            },
            nt = function(e, t, n, i, o, r, a) {
                var s, l = $e();
                et(e);
                var u = function() {
                    if (Ge[e]) {
                        if (s = $e() - l, s >= i) return Qe(e), r(n), void(a && a());
                        r((n - t) * o(s / i) + t), Ge[e].raf = O(u)
                    }
                };
                u()
            },
            it = {
                shout: _e,
                listen: Se,
                viewportSize: me,
                options: l,
                isMainScrollAnimating: function() {
                    return oe
                },
                getZoomLevel: function() {
                    return y
                },
                getCurrentIndex: function() {
                    return p
                },
                isDragging: function() {
                    return Y
                },
                isZooming: function() {
                    return Q
                },
                setScrollOffset: function(e, t) {
                    ve.x = e, R = ve.y = t, _e("updateScrollOffset", ve)
                },
                applyZoomPan: function(e, t, n, i) {
                    he.x = t, he.y = n, y = e, Ie(i)
                },
                init: function() {
                    if (!u && !c) {
                        var n;
                        r.framework = o, r.template = e, r.bg = o.getChildByClass(e, "pswp__bg"), F = e.className, u = !0, H = o.detectFeatures(), O = H.raf, M = H.caf, N = H.transform, j = H.oldIE, r.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap"), r.container = o.getChildByClass(r.scrollWrap, "pswp__container"), f = r.container.style, r.itemHolders = k = [{
                            el: r.container.children[0],
                            wrap: 0,
                            index: -1
                        }, {
                            el: r.container.children[1],
                            wrap: 0,
                            index: -1
                        }, {
                            el: r.container.children[2],
                            wrap: 0,
                            index: -1
                        }], k[0].el.style.display = k[2].el.style.display = "none", Ze(), v = {
                            resize: r.updateSize,
                            scroll: Ke,
                            keydown: Xe,
                            click: Ve
                        };
                        var i = H.isOldIOSPhone || H.isOldAndroid || H.isMobileOpera;
                        for (H.animationName && H.transform && !i || (l.showAnimationDuration = l.hideAnimationDuration = 0), n = 0; n < xe.length; n++) r["init" + xe[n]]();
                        if (t) {
                            var a = r.ui = new t(r, o);
                            a.init()
                        }
                        _e("firstUpdate"), p = p || l.index || 0, (isNaN(p) || 0 > p || p >= Qt()) && (p = 0), r.currItem = Jt(p), (H.isOldIOSPhone || H.isOldAndroid) && (we = !1), e.setAttribute("aria-hidden", "false"), l.modal && (we ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = o.getScrollY() + "px")), void 0 === R && (_e("initialLayout"), R = L = o.getScrollY());
                        var d = "pswp--open ";
                        for (l.mainClass && (d += l.mainClass + " "), l.showHideOpacity && (d += "pswp--animate_opacity "), d += I ? "pswp--touch" : "pswp--notouch", d += H.animationName ? " pswp--css_animation" : "", d += H.svg ? " pswp--svg" : "", o.addClass(e, d), r.updateSize(), h = -1, be = null, n = 0; s > n; n++) Me((n + h) * ye.x, k[n].el.style);
                        j || o.bind(r.scrollWrap, g, r), Se("initialZoomInEnd", function() {
                            r.setContent(k[0], p - 1), r.setContent(k[2], p + 1), k[0].el.style.display = k[2].el.style.display = "block", l.focus && e.focus(), qe()
                        }), r.setContent(k[1], p), r.updateCurrItem(), _e("afterInit"), we || (T = setInterval(function() {
                            Je || Y || Q || y !== r.currItem.initialZoomLevel || r.updateSize()
                        }, 1e3)), o.addClass(e, "pswp--visible")
                    }
                },
                close: function() {
                    u && (u = !1, c = !0, _e("close"), ze(), tn(r.currItem, null, !0, r.destroy))
                },
                destroy: function() {
                    _e("destroy"), Xt && clearTimeout(Xt), e.setAttribute("aria-hidden", "true"), e.className = F, T && clearInterval(T), o.unbind(r.scrollWrap, g, r), o.unbind(window, "scroll", r), kt(), tt(), De = null
                },
                panTo: function(e, t, n) {
                    n || (e > ne.min.x ? e = ne.min.x : e < ne.max.x && (e = ne.max.x), t > ne.min.y ? t = ne.min.y : t < ne.max.y && (t = ne.max.y)), he.x = e, he.y = t, Ie()
                },
                handleEvent: function(e) {
                    e = e || window.event, v[e.type] && v[e.type](e)
                },
                goTo: function(e) {
                    e = Ee(e);
                    var t = e - p;
                    be = t, p = e, r.currItem = Jt(p), ge -= t, Fe(ye.x * ge), tt(), oe = !1, r.updateCurrItem()
                },
                next: function() {
                    r.goTo(p + 1)
                },
                prev: function() {
                    r.goTo(p - 1)
                },
                updateCurrZoomItem: function(e) {
                    if (e && _e("beforeChange", 0), k[1].el.children.length) {
                        var t = k[1].el.children[0];
                        ie = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                    } else ie = null;
                    ne = r.currItem.bounds, b = y = r.currItem.initialZoomLevel, he.x = ne.center.x, he.y = ne.center.y, e && _e("afterChange")
                },
                invalidateCurrItems: function() {
                    C = !0;
                    for (var e = 0; s > e; e++) k[e].item && (k[e].item.needsUpdate = !0)
                },
                updateCurrItem: function(e) {
                    if (0 !== be) {
                        var t, n = Math.abs(be);
                        if (!(e && 2 > n)) {
                            r.currItem = Jt(p), Ce = !1, _e("beforeChange", be), n >= s && (h += be + (be > 0 ? -s : s), n = s);
                            for (var i = 0; n > i; i++) be > 0 ? (t = k.shift(), k[s - 1] = t, h++, Me((h + 2) * ye.x, t.el.style), r.setContent(t, p - n + i + 1 + 1)) : (t = k.pop(), k.unshift(t), h--, Me(h * ye.x, t.el.style), r.setContent(t, p + n - i - 1 - 1));
                            if (ie && 1 === Math.abs(be)) {
                                var o = Jt(E);
                                o.initialZoomLevel !== y && (ln(o, me), pn(o), Oe(o))
                            }
                            be = 0, r.updateCurrZoomItem(), E = p, _e("afterChange")
                        }
                    }
                },
                updateSize: function(t) {
                    if (!we && l.modal) {
                        var n = o.getScrollY();
                        if (R !== n && (e.style.top = n + "px", R = n), !t && Te.x === window.innerWidth && Te.y === window.innerHeight) return;
                        Te.x = window.innerWidth, Te.y = window.innerHeight, e.style.height = Te.y + "px"
                    }
                    if (me.x = r.scrollWrap.clientWidth, me.y = r.scrollWrap.clientHeight, Ke(), ye.x = me.x + Math.round(me.x * l.spacing), ye.y = me.y, Fe(ye.x * ge), _e("beforeResize"), void 0 !== h) {
                        for (var i, a, u, c = 0; s > c; c++) i = k[c], Me((c + h) * ye.x, i.el.style), u = p + c - 1, l.loop && Qt() > 2 && (u = Ee(u)), a = Jt(u), a && (C || a.needsUpdate || !a.bounds) ? (r.cleanSlide(a), r.setContent(i, u), 1 === c && (r.currItem = a, r.updateCurrZoomItem(!0)), a.needsUpdate = !1) : -1 === i.index && u >= 0 && r.setContent(i, u), a && a.container && (ln(a, me), pn(a), Oe(a));
                        C = !1
                    }
                    b = y = r.currItem.initialZoomLevel, ne = r.currItem.bounds, ne && (he.x = ne.center.x, he.y = ne.center.y, Ie(!0)), _e("resize")
                },
                zoomTo: function(e, t, n, i, r) {
                    t && (b = y, bt.x = Math.abs(t.x) - he.x, bt.y = Math.abs(t.y) - he.y, je(fe, he));
                    var a = We(e, !1),
                        s = {};
                    Ye("x", a, s, e), Ye("y", a, s, e);
                    var l = y,
                        u = {
                            x: he.x,
                            y: he.y
                        };
                    Re(s);
                    var c = function(t) {
                        1 === t ? (y = e, he.x = s.x, he.y = s.y) : (y = (e - l) * t + l, he.x = (s.x - u.x) * t + u.x, he.y = (s.y - u.y) * t + u.y), r && r(t), Ie(1 === t)
                    };
                    n ? nt("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, c) : c(1)
                }
            },
            ot = 30,
            rt = 10,
            at = {},
            st = {},
            lt = {},
            ut = {},
            ct = {},
            dt = [],
            pt = {},
            ft = [],
            ht = {},
            mt = 0,
            gt = de(),
            vt = 0,
            yt = de(),
            bt = de(),
            wt = de(),
            xt = function(e, t) {
                return e.x === t.x && e.y === t.y
            },
            Tt = function(e, t) {
                return Math.abs(e.x - t.x) < a && Math.abs(e.y - t.y) < a
            },
            Ct = function(e, t) {
                return ht.x = Math.abs(e.x - t.x), ht.y = Math.abs(e.y - t.y), Math.sqrt(ht.x * ht.x + ht.y * ht.y)
            },
            kt = function() {
                K && (M(K), K = null)
            },
            Et = function() {
                Y && (K = O(Et), qt())
            },
            Dt = function() {
                return !("fit" === l.scaleMode && y === r.currItem.initialZoomLevel)
            },
            St = function(e, t) {
                return e && e !== document ? e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1 ? !1 : t(e) ? e : St(e.parentNode, t) : !1
            },
            _t = {},
            $t = function(e, t) {
                return _t.prevent = !St(e.target, l.isClickableElement), _e("preventDragEvent", e, t, _t), _t.prevent
            },
            Nt = function(e, t) {
                return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
            },
            At = function(e, t, n) {
                n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
            },
            It = function(e, t, n) {
                if (e - q > 50) {
                    var i = ft.length > 2 ? ft.shift() : {};
                    i.x = t, i.y = n, ft.push(i), q = e
                }
            },
            Ot = function() {
                var e = he.y - r.currItem.initialPosition.y;
                return 1 - Math.abs(e / (me.y / 2))
            },
            Mt = {},
            Ft = {},
            Lt = [],
            jt = function(e) {
                for (; Lt.length > 0;) Lt.pop();
                return A ? (ce = 0, dt.forEach(function(e) {
                    0 === ce ? Lt[0] = e : 1 === ce && (Lt[1] = e), ce++
                })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Lt[0] = Nt(e.touches[0], Mt), e.touches.length > 1 && (Lt[1] = Nt(e.touches[1], Ft))) : (Mt.x = e.pageX, Mt.y = e.pageY, Mt.id = "", Lt[0] = Mt), Lt
            },
            Rt = function(e, t) {
                var n, i, o, a, s = 0,
                    u = he[e] + t[e],
                    c = t[e] > 0,
                    d = yt.x + t.x,
                    p = yt.x - pt.x;
                return n = u > ne.min[e] || u < ne.max[e] ? l.panEndFriction : 1, u = he[e] + t[e] * n, !l.allowPanToNext && y !== r.currItem.initialZoomLevel || (ie ? "h" !== re || "x" !== e || X || (c ? (u > ne.min[e] && (n = l.panEndFriction, s = ne.min[e] - u, i = ne.min[e] - fe[e]), (0 >= i || 0 > p) && Qt() > 1 ? (a = d, 0 > p && d > pt.x && (a = pt.x)) : ne.min.x !== ne.max.x && (o = u)) : (u < ne.max[e] && (n = l.panEndFriction, s = u - ne.max[e], i = fe[e] - ne.max[e]), (0 >= i || p > 0) && Qt() > 1 ? (a = d, p > 0 && d < pt.x && (a = pt.x)) : ne.min.x !== ne.max.x && (o = u))) : a = d, "x" !== e) ? void(oe || G || y > r.currItem.fitRatio && (he[e] += t[e] * n)) : (void 0 !== a && (Fe(a, !0), G = a === pt.x ? !1 : !0), ne.min.x !== ne.max.x && (void 0 !== o ? he.x = o : G || (he.x += t.x * n)), void 0 !== a)
            },
            Ht = function(e) {
                if (!("mousedown" === e.type && e.button > 0)) {
                    if (Gt) return void e.preventDefault();
                    if (!U || "mousedown" !== e.type) {
                        if ($t(e, !0) && e.preventDefault(), _e("pointerDown"), A) {
                            var t = o.arraySearch(dt, e.pointerId, "id");
                            0 > t && (t = dt.length), dt[t] = {
                                x: e.pageX,
                                y: e.pageY,
                                id: e.pointerId
                            }
                        }
                        var n = jt(e),
                            i = n.length;
                        J = null, tt(), Y && 1 !== i || (Y = ae = !0, o.bind(window, m, r), W = ue = se = B = G = V = Z = X = !1, re = null, _e("firstTouchStart", n), je(fe, he), pe.x = pe.y = 0, je(ut, n[0]), je(ct, ut), pt.x = ye.x * ge, ft = [{
                            x: ut.x,
                            y: ut.y
                        }], q = P = $e(), We(y, !0), kt(), Et()), !Q && i > 1 && !oe && !G && (b = y, X = !1, Q = Z = !0, pe.y = pe.x = 0, je(fe, he), je(at, n[0]), je(st, n[1]), At(at, st, wt), bt.x = Math.abs(wt.x) - he.x, bt.y = Math.abs(wt.y) - he.y, ee = te = Ct(at, st))
                    }
                }
            },
            Pt = function(e) {
                if (e.preventDefault(), A) {
                    var t = o.arraySearch(dt, e.pointerId, "id");
                    if (t > -1) {
                        var n = dt[t];
                        n.x = e.pageX, n.y = e.pageY
                    }
                }
                if (Y) {
                    var i = jt(e);
                    if (re || V || Q) J = i;
                    else if (yt.x !== ye.x * ge) re = "h";
                    else {
                        var r = Math.abs(i[0].x - ut.x) - Math.abs(i[0].y - ut.y);
                        Math.abs(r) >= rt && (re = r > 0 ? "h" : "v", J = i)
                    }
                }
            },
            qt = function() {
                if (J) {
                    var e = J.length;
                    if (0 !== e)
                        if (je(at, J[0]), lt.x = at.x - ut.x, lt.y = at.y - ut.y, Q && e > 1) {
                            if (ut.x = at.x, ut.y = at.y, !lt.x && !lt.y && xt(J[1], st)) return;
                            je(st, J[1]), X || (X = !0, _e("zoomGestureStarted"));
                            var t = Ct(at, st),
                                n = Yt(t);
                            n > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (ue = !0);
                            var i = 1,
                                o = Be(),
                                a = Ue();
                            if (o > n)
                                if (l.pinchToClose && !ue && b <= r.currItem.initialZoomLevel) {
                                    var s = o - n,
                                        u = 1 - s / (o / 1.2);
                                    Ne(u), _e("onPinchClose", u), se = !0
                                } else i = (o - n) / o, i > 1 && (i = 1), n = o - i * (o / 3);
                            else n > a && (i = (n - a) / (6 * o), i > 1 && (i = 1), n = a + i * o);
                            0 > i && (i = 0), ee = t, At(at, st, gt), pe.x += gt.x - wt.x, pe.y += gt.y - wt.y, je(wt, gt), he.x = Le("x", n), he.y = Le("y", n), W = n > y, y = n, Ie()
                        } else {
                            if (!re) return;
                            if (ae && (ae = !1, Math.abs(lt.x) >= rt && (lt.x -= J[0].x - ct.x), Math.abs(lt.y) >= rt && (lt.y -= J[0].y - ct.y)), ut.x = at.x, ut.y = at.y, 0 === lt.x && 0 === lt.y) return;
                            if ("v" === re && l.closeOnVerticalDrag && !Dt()) {
                                pe.y += lt.y, he.y += lt.y;
                                var c = Ot();
                                return B = !0, _e("onVerticalDrag", c), Ne(c), void Ie()
                            }
                            It($e(), at.x, at.y), V = !0, ne = r.currItem.bounds;
                            var d = Rt("x", lt);
                            d || (Rt("y", lt), Re(he), Ie())
                        }
                }
            },
            zt = function(e) {
                if (H.isOldAndroid) {
                    if (U && "mouseup" === e.type) return;
                    e.type.indexOf("touch") > -1 && (clearTimeout(U), U = setTimeout(function() {
                        U = 0
                    }, 600))
                }
                _e("pointerUp"), $t(e, !1) && e.preventDefault();
                var t;
                if (A) {
                    var n = o.arraySearch(dt, e.pointerId, "id");
                    if (n > -1)
                        if (t = dt.splice(n, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse";
                        else {
                            var i = {
                                4: "mouse",
                                2: "touch",
                                3: "pen"
                            };
                            t.type = i[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
                        }
                }
                var a, s = jt(e),
                    u = s.length;
                if ("mouseup" === e.type && (u = 0), 2 === u) return J = null, !0;
                1 === u && je(ct, s[0]), 0 !== u || re || oe || (t || ("mouseup" === e.type ? t = {
                    x: e.pageX,
                    y: e.pageY,
                    type: "mouse"
                } : e.changedTouches && e.changedTouches[0] && (t = {
                    x: e.changedTouches[0].pageX,
                    y: e.changedTouches[0].pageY,
                    type: "touch"
                })), _e("touchRelease", e, t));
                var c = -1;
                if (0 === u && (Y = !1, o.unbind(window, m, r), kt(), Q ? c = 0 : -1 !== vt && (c = $e() - vt)), vt = 1 === u ? $e() : -1, a = -1 !== c && 150 > c ? "zoom" : "swipe", Q && 2 > u && (Q = !1, 1 === u && (a = "zoomPointerUp"), _e("zoomGestureEnded")), J = null, V || X || oe || B)
                    if (tt(), z || (z = Wt()), z.calculateSwipeSpeed("x"), B) {
                        var d = Ot();
                        if (d < l.verticalDragRange) r.close();
                        else {
                            var p = he.y,
                                f = le;
                            nt("verticalDrag", 0, 1, 300, o.easing.cubic.out, function(e) {
                                he.y = (r.currItem.initialPosition.y - p) * e + p, Ne((1 - f) * e + f), Ie()
                            }), _e("onVerticalDrag", 1)
                        }
                    } else {
                        if ((G || oe) && 0 === u) {
                            var h = Ut(a, z);
                            if (h) return;
                            a = "zoomPointerUp"
                        }
                        if (!oe) return "swipe" !== a ? void Zt() : void(!G && y > r.currItem.fitRatio && Bt(z))
                    }
            },
            Wt = function() {
                var e, t, n = {
                    lastFlickOffset: {},
                    lastFlickDist: {},
                    lastFlickSpeed: {},
                    slowDownRatio: {},
                    slowDownRatioReverse: {},
                    speedDecelerationRatio: {},
                    speedDecelerationRatioAbs: {},
                    distanceOffset: {},
                    backAnimDestination: {},
                    backAnimStarted: {},
                    calculateSwipeSpeed: function(i) {
                        ft.length > 1 ? (e = $e() - q + 50, t = ft[ft.length - 2][i]) : (e = $e() - P, t = ct[i]), n.lastFlickOffset[i] = ut[i] - t, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]), n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e : n.lastFlickSpeed[i] = 0, Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[i] = 1
                    },
                    calculateOverBoundsAnimOffset: function(e, t) {
                        n.backAnimStarted[e] || (he[e] > ne.min[e] ? n.backAnimDestination[e] = ne.min[e] : he[e] < ne.max[e] && (n.backAnimDestination[e] = ne.max[e]), void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0, nt("bounceZoomPan" + e, he[e], n.backAnimDestination[e], t || 300, o.easing.sine.out, function(t) {
                            he[e] = t, Ie()
                        }))))
                    },
                    calculateAnimOffset: function(e) {
                        n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, he[e] += n.distanceOffset[e])
                    },
                    panAnimLoop: function() {
                        return Ge.zoomPan && (Ge.zoomPan.raf = O(n.panAnimLoop), n.now = $e(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), Ie(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05) ? (he.x = Math.round(he.x), he.y = Math.round(he.y), Ie(), void Qe("zoomPan")) : void 0
                    }
                };
                return n
            },
            Bt = function(e) {
                return e.calculateSwipeSpeed("y"), ne = r.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (et("zoomPan"), e.lastNow = $e(), void e.panAnimLoop())
            },
            Ut = function(e, t) {
                var n;
                oe || (mt = p);
                var i;
                if ("swipe" === e) {
                    var a = ut.x - ct.x,
                        s = t.lastFlickDist.x < 10;
                    a > ot && (s || t.lastFlickOffset.x > 20) ? i = -1 : -ot > a && (s || t.lastFlickOffset.x < -20) && (i = 1)
                }
                var u;
                i && (p += i, 0 > p ? (p = l.loop ? Qt() - 1 : 0, u = !0) : p >= Qt() && (p = l.loop ? 0 : Qt() - 1, u = !0), (!u || l.loop) && (be += i, ge -= i, n = !0));
                var c, d = ye.x * ge,
                    f = Math.abs(d - yt.x);
                return n || d > yt.x == t.lastFlickSpeed.x > 0 ? (c = Math.abs(t.lastFlickSpeed.x) > 0 ? f / Math.abs(t.lastFlickSpeed.x) : 333, c = Math.min(c, 400), c = Math.max(c, 250)) : c = 333, mt === p && (n = !1), oe = !0, _e("mainScrollAnimStart"), nt("mainScroll", yt.x, d, c, o.easing.cubic.out, Fe, function() {
                    tt(), oe = !1, mt = -1, (n || mt !== p) && r.updateCurrItem(), _e("mainScrollAnimComplete")
                }), n && r.updateCurrItem(!0), n
            },
            Yt = function(e) {
                return 1 / te * e * b
            },
            Zt = function() {
                var e = y,
                    t = Be(),
                    n = Ue();
                t > y ? e = t : y > n && (e = n);
                var i, a = 1,
                    s = le;
                return se && !W && !ue && t > y ? (r.close(), !0) : (se && (i = function(e) {
                    Ne((a - s) * e + s)
                }), r.zoomTo(e, 0, 200, o.easing.cubic.out, i), !0)
            };
        ke("Gestures", {
            publicMethods: {
                initGestures: function() {
                    var e = function(e, t, n, i, o) {
                        D = e + t, S = e + n, _ = e + i, $ = o ? e + o : ""
                    };
                    A = H.pointerEvent, A && H.touch && (H.touch = !1), A ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : H.touch ? (e("touch", "start", "move", "end", "cancel"), I = !0) : e("mouse", "down", "move", "up"), m = S + " " + _ + " " + $, g = D, A && !I && (I = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), r.likelyTouchDevice = I, v[D] = Ht, v[S] = Pt, v[_] = zt, $ && (v[$] = v[_]), H.touch && (g += " mousedown", m += " mousemove mouseup", v.mousedown = v[D], v.mousemove = v[S], v.mouseup = v[_]), I || (l.allowPanToNext = !1)
                }
            }
        });
        var Xt, Vt, Kt, Gt, Jt, Qt, en, tn = function(t, n, i, a) {
                Xt && clearTimeout(Xt), Gt = !0, Kt = !0;
                var s;
                t.initialLayout ? (s = t.initialLayout, t.initialLayout = null) : s = l.getThumbBoundsFn && l.getThumbBoundsFn(p);
                var u = i ? l.hideAnimationDuration : l.showAnimationDuration,
                    c = function() {
                        Qe("initialZoom"), i ? (r.template.removeAttribute("style"), r.bg.removeAttribute("style")) : (Ne(1), n && (n.style.display = "block"), o.addClass(e, "pswp--animated-in"), _e("initialZoom" + (i ? "OutEnd" : "InEnd"))), a && a(), Gt = !1
                    };
                if (!u || !s || void 0 === s.x) return _e("initialZoom" + (i ? "Out" : "In")), y = t.initialZoomLevel, je(he, t.initialPosition), Ie(), e.style.opacity = i ? 0 : 1, Ne(1), void(u ? setTimeout(function() {
                    c()
                }, u) : c());
                var f = function() {
                    var n = d,
                        a = !r.currItem.src || r.currItem.loadError || l.showHideOpacity;
                    t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (y = s.w / t.w, he.x = s.x, he.y = s.y - L, r[a ? "template" : "bg"].style.opacity = .001, Ie()), et("initialZoom"), i && !n && o.removeClass(e, "pswp--animated-in"), a && (i ? o[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function() {
                        o.addClass(e, "pswp--animate_opacity")
                    }, 30)), Xt = setTimeout(function() {
                        if (_e("initialZoom" + (i ? "Out" : "In")), i) {
                            var r = s.w / t.w,
                                l = {
                                    x: he.x,
                                    y: he.y
                                },
                                d = y,
                                p = le,
                                f = function(t) {
                                    1 === t ? (y = r, he.x = s.x, he.y = s.y - R) : (y = (r - d) * t + d, he.x = (s.x - l.x) * t + l.x, he.y = (s.y - R - l.y) * t + l.y), Ie(), a ? e.style.opacity = 1 - t : Ne(p - t * p)
                                };
                            n ? nt("initialZoom", 0, 1, u, o.easing.cubic.out, f, c) : (f(1), Xt = setTimeout(c, u + 20))
                        } else y = t.initialZoomLevel, je(he, t.initialPosition), Ie(), Ne(1), a ? e.style.opacity = 1 : Ne(1), Xt = setTimeout(c, u + 20)
                    }, i ? 25 : 90)
                };
                f()
            },
            nn = {},
            on = [],
            rn = {
                index: 0,
                errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                forceProgressiveLoading: !1,
                preload: [1, 1],
                getNumItemsFn: function() {
                    return Vt.length
                }
            },
            an = function() {
                return {
                    center: {
                        x: 0,
                        y: 0
                    },
                    max: {
                        x: 0,
                        y: 0
                    },
                    min: {
                        x: 0,
                        y: 0
                    }
                }
            },
            sn = function(e, t, n) {
                var i = e.bounds;
                i.center.x = Math.round((nn.x - t) / 2), i.center.y = Math.round((nn.y - n) / 2) + e.vGap.top, i.max.x = t > nn.x ? Math.round(nn.x - t) : i.center.x, i.max.y = n > nn.y ? Math.round(nn.y - n) + e.vGap.top : i.center.y, i.min.x = t > nn.x ? 0 : i.center.x, i.min.y = n > nn.y ? e.vGap.top : i.center.y
            },
            ln = function(e, t, n) {
                if (e.src && !e.loadError) {
                    var i = !n;
                    if (i && (e.vGap || (e.vGap = {
                            top: 0,
                            bottom: 0
                        }), _e("parseVerticalMargin", e)), nn.x = t.x, nn.y = t.y - e.vGap.top - e.vGap.bottom, i) {
                        var o = nn.x / e.w,
                            r = nn.y / e.h;
                        e.fitRatio = r > o ? o : r;
                        var a = l.scaleMode;
                        "orig" === a ? n = 1 : "fit" === a && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = an())
                    }
                    if (!n) return;
                    return sn(e, e.w * n, e.h * n), i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
                }
                return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = an(), e.initialPosition = e.bounds.center, e.bounds
            },
            un = function(e, t, n, i, o, a) {
                t.loadError || i && (t.imageAppended = !0, pn(t, i, t === r.currItem && Ce), n.appendChild(i), a && setTimeout(function() {
                    t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
                }, 500))
            },
            cn = function(e) {
                e.loading = !0, e.loaded = !1;
                var t = e.img = o.createEl("pswp__img", "img"),
                    n = function() {
                        e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
                    };
                return t.onload = n, t.onerror = function() {
                    e.loadError = !0, n()
                }, t.src = e.src, t
            },
            dn = function(e, t) {
                return e.src && e.loadError && e.container ? (t && (e.container.innerHTML = ""), e.container.innerHTML = l.errorMsg.replace("%url%", e.src), !0) : void 0
            },
            pn = function(e, t, n) {
                if (e.src) {
                    t || (t = e.container.lastChild);
                    var i = n ? e.w : Math.round(e.w * e.fitRatio),
                        o = n ? e.h : Math.round(e.h * e.fitRatio);
                    e.placeholder && !e.loaded && (e.placeholder.style.width = i + "px", e.placeholder.style.height = o + "px"), t.style.width = i + "px", t.style.height = o + "px"
                }
            },
            fn = function() {
                if (on.length) {
                    for (var e, t = 0; t < on.length; t++) e = on[t], e.holder.index === e.index && un(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
                    on = []
                }
            };
        ke("Controller", {
            publicMethods: {
                lazyLoadItem: function(e) {
                    e = Ee(e);
                    var t = Jt(e);
                    t && (!t.loaded && !t.loading || C) && (_e("gettingData", e, t), t.src && cn(t))
                },
                initController: function() {
                    o.extend(l, rn, !0), r.items = Vt = n, Jt = r.getItemAt, Qt = l.getNumItemsFn, en = l.loop, Qt() < 3 && (l.loop = !1), Se("beforeChange", function(e) {
                        var t, n = l.preload,
                            i = null === e ? !0 : e >= 0,
                            o = Math.min(n[0], Qt()),
                            a = Math.min(n[1], Qt());
                        for (t = 1;
                            (i ? a : o) >= t; t++) r.lazyLoadItem(p + t);
                        for (t = 1;
                            (i ? o : a) >= t; t++) r.lazyLoadItem(p - t)
                    }), Se("initialLayout", function() {
                        r.currItem.initialLayout = l.getThumbBoundsFn && l.getThumbBoundsFn(p)
                    }), Se("mainScrollAnimComplete", fn), Se("initialZoomInEnd", fn), Se("destroy", function() {
                        for (var e, t = 0; t < Vt.length; t++) e = Vt[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                        on = null
                    })
                },
                getItemAt: function(e) {
                    return e >= 0 && void 0 !== Vt[e] ? Vt[e] : !1
                },
                allowProgressiveImg: function() {
                    return l.forceProgressiveLoading || !I || l.mouseUsed || screen.width > 1200
                },
                setContent: function(e, t) {
                    l.loop && (t = Ee(t));
                    var n = r.getItemAt(e.index);
                    n && (n.container = null);
                    var i, a = r.getItemAt(t);
                    if (!a) return void(e.el.innerHTML = "");
                    _e("gettingData", t, a), e.index = t, e.item = a;
                    var s = a.container = o.createEl("pswp__zoom-wrap");
                    if (!a.src && a.html && (a.html.tagName ? s.appendChild(a.html) : s.innerHTML = a.html), dn(a), ln(a, me), !a.src || a.loadError || a.loaded) a.src && !a.loadError && (i = o.createEl("pswp__img", "img"), i.style.opacity = 1, i.src = a.src, pn(a, i), un(t, a, s, i, !0));
                    else {
                        if (a.loadComplete = function(n) {
                                if (u) {
                                    if (e && e.index === t) {
                                        if (dn(n, !0)) return n.loadComplete = n.img = null, ln(n, me), Oe(n), void(e.index === p && r.updateCurrZoomItem());
                                        n.imageAppended ? !Gt && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : H.transform && (oe || Gt) ? on.push({
                                            item: n,
                                            baseDiv: s,
                                            img: n.img,
                                            index: t,
                                            holder: e,
                                            clearPlaceholder: !0
                                        }) : un(t, n, s, n.img, oe || Gt, !0)
                                    }
                                    n.loadComplete = null, n.img = null, _e("imageLoadComplete", t, n)
                                }
                            }, o.features.transform) {
                            var c = "pswp__img pswp__img--placeholder";
                            c += a.msrc ? "" : " pswp__img--placeholder--blank";
                            var d = o.createEl(c, a.msrc ? "img" : "");
                            a.msrc && (d.src = a.msrc), pn(a, d), s.appendChild(d), a.placeholder = d
                        }
                        a.loading || cn(a), r.allowProgressiveImg() && (!Kt && H.transform ? on.push({
                            item: a,
                            baseDiv: s,
                            img: a.img,
                            index: t,
                            holder: e
                        }) : un(t, a, s, a.img, !0, !0))
                    }
                    Kt || t !== p ? Oe(a) : (ie = s.style, tn(a, i || a.img)), e.el.innerHTML = "", e.el.appendChild(s)
                },
                cleanSlide: function(e) {
                    e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
                }
            }
        });
        var hn, mn = {},
            gn = function(e, t, n) {
                var i = document.createEvent("CustomEvent"),
                    o = {
                        origEvent: e,
                        target: e.target,
                        releasePoint: t,
                        pointerType: n || "touch"
                    };
                i.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(i)
            };
        ke("Tap", {
            publicMethods: {
                initTap: function() {
                    Se("firstTouchStart", r.onTapStart), Se("touchRelease", r.onTapRelease),
                        Se("destroy", function() {
                            mn = {}, hn = null
                        })
                },
                onTapStart: function(e) {
                    e.length > 1 && (clearTimeout(hn), hn = null)
                },
                onTapRelease: function(e, t) {
                    if (t && !V && !Z && !Je) {
                        var n = t;
                        if (hn && (clearTimeout(hn), hn = null, Tt(n, mn))) return void _e("doubleTap", n);
                        if ("mouse" === t.type) return void gn(e, t, "mouse");
                        var i = e.target.tagName.toUpperCase();
                        if ("BUTTON" === i || o.hasClass(e.target, "pswp__single-tap")) return void gn(e, t);
                        je(mn, n), hn = setTimeout(function() {
                            gn(e, t), hn = null
                        }, 300)
                    }
                }
            }
        });
        var vn;
        ke("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function() {
                    j || (I ? Se("mouseUsed", function() {
                        r.setupDesktopZoom()
                    }) : r.setupDesktopZoom(!0))
                },
                setupDesktopZoom: function(t) {
                    vn = {};
                    var n = "wheel mousewheel DOMMouseScroll";
                    Se("bindEvents", function() {
                        o.bind(e, n, r.handleMouseWheel)
                    }), Se("unbindEvents", function() {
                        vn && o.unbind(e, n, r.handleMouseWheel)
                    }), r.mouseZoomedIn = !1;
                    var i, a = function() {
                            r.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"), r.mouseZoomedIn = !1), 1 > y ? o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"), s()
                        },
                        s = function() {
                            i && (o.removeClass(e, "pswp--dragging"), i = !1)
                        };
                    Se("resize", a), Se("afterChange", a), Se("pointerDown", function() {
                        r.mouseZoomedIn && (i = !0, o.addClass(e, "pswp--dragging"))
                    }), Se("pointerUp", s), t || a()
                },
                handleMouseWheel: function(e) {
                    if (y <= r.currItem.fitRatio) return l.modal && (!l.closeOnScroll || Je || Y ? e.preventDefault() : N && Math.abs(e.deltaY) > 2 && (d = !0, r.close())), !0;
                    if (e.stopPropagation(), vn.x = 0, "deltaX" in e) 1 === e.deltaMode ? (vn.x = 18 * e.deltaX, vn.y = 18 * e.deltaY) : (vn.x = e.deltaX, vn.y = e.deltaY);
                    else if ("wheelDelta" in e) e.wheelDeltaX && (vn.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? vn.y = -.16 * e.wheelDeltaY : vn.y = -.16 * e.wheelDelta;
                    else {
                        if (!("detail" in e)) return;
                        vn.y = e.detail
                    }
                    We(y, !0);
                    var t = he.x - vn.x,
                        n = he.y - vn.y;
                    (l.modal || t <= ne.min.x && t >= ne.max.x && n <= ne.min.y && n >= ne.max.y) && e.preventDefault(), r.panTo(t, n)
                },
                toggleDesktopZoom: function(t) {
                    t = t || {
                        x: me.x / 2 + ve.x,
                        y: me.y / 2 + ve.y
                    };
                    var n = l.getDoubleTapZoom(!0, r.currItem),
                        i = y === n;
                    r.mouseZoomedIn = !i, r.zoomTo(i ? r.currItem.initialZoomLevel : n, t, 333), o[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                }
            }
        });
        var yn, bn, wn, xn, Tn, Cn, kn, En, Dn, Sn, _n, $n, Nn = {
                history: !0,
                galleryUID: 1
            },
            An = function() {
                return _n.hash.substring(1)
            },
            In = function() {
                yn && clearTimeout(yn), wn && clearTimeout(wn)
            },
            On = function() {
                var e = An(),
                    t = {};
                if (e.length < 5) return t;
                var n, i = e.split("&");
                for (n = 0; n < i.length; n++)
                    if (i[n]) {
                        var o = i[n].split("=");
                        o.length < 2 || (t[o[0]] = o[1])
                    }
                if (l.galleryPIDs) {
                    var r = t.pid;
                    for (t.pid = 0, n = 0; n < Vt.length; n++)
                        if (Vt[n].pid === r) {
                            t.pid = n;
                            break
                        }
                } else t.pid = parseInt(t.pid, 10) - 1;
                return t.pid < 0 && (t.pid = 0), t
            },
            Mn = function() {
                if (wn && clearTimeout(wn), Je || Y) return void(wn = setTimeout(Mn, 500));
                xn ? clearTimeout(bn) : xn = !0;
                var e = p + 1,
                    t = Jt(p);
                t.hasOwnProperty("pid") && (e = t.pid);
                var n = kn + "&gid=" + l.galleryUID + "&pid=" + e;
                En || -1 === _n.hash.indexOf(n) && (Sn = !0);
                var i = _n.href.split("#")[0] + "#" + n;
                $n ? "#" + n !== window.location.hash && history[En ? "replaceState" : "pushState"]("", document.title, i) : En ? _n.replace(i) : _n.hash = n, En = !0, bn = setTimeout(function() {
                    xn = !1
                }, 60)
            };
        ke("History", {
            publicMethods: {
                initHistory: function() {
                    if (o.extend(l, Nn, !0), l.history) {
                        _n = window.location, Sn = !1, Dn = !1, En = !1, kn = An(), $n = "pushState" in history, kn.indexOf("gid=") > -1 && (kn = kn.split("&gid=")[0], kn = kn.split("?gid=")[0]), Se("afterChange", r.updateURL), Se("unbindEvents", function() {
                            o.unbind(window, "hashchange", r.onHashChange)
                        });
                        var e = function() {
                            Cn = !0, Dn || (Sn ? history.back() : kn ? _n.hash = kn : $n ? history.pushState("", document.title, _n.pathname + _n.search) : _n.hash = ""), In()
                        };
                        Se("unbindEvents", function() {
                            d && e()
                        }), Se("destroy", function() {
                            Cn || e()
                        }), Se("firstUpdate", function() {
                            p = On().pid
                        });
                        var t = kn.indexOf("pid=");
                        t > -1 && (kn = kn.substring(0, t), "&" === kn.slice(-1) && (kn = kn.slice(0, -1))), setTimeout(function() {
                            u && o.bind(window, "hashchange", r.onHashChange)
                        }, 40)
                    }
                },
                onHashChange: function() {
                    return An() === kn ? (Dn = !0, void r.close()) : void(xn || (Tn = !0, r.goTo(On().pid), Tn = !1))
                },
                updateURL: function() {
                    In(), Tn || (En ? yn = setTimeout(Mn, 800) : Mn())
                }
            }
        }), o.extend(r, it)
    };
    return e
}), ! function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
}(this, function() {
    "use strict";
    var e = function(e, t) {
        var n, i, o, r, a, s, l, u, c, d, p, f, h, m, g, v, y, b, w, x = this,
            T = !1,
            C = !0,
            k = !0,
            E = {
                barsSize: {
                    top: 44,
                    bottom: "auto"
                },
                closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                timeToIdle: 4e3,
                timeToIdleOutside: 1e3,
                loadingIndicatorDelay: 1e3,
                addCaptionHTMLFn: function(e, t) {
                    return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
                },
                closeEl: !0,
                captionEl: !0,
                fullscreenEl: !0,
                zoomEl: !0,
                shareEl: !0,
                counterEl: !0,
                arrowEl: !0,
                preloaderEl: !0,
                tapToClose: !1,
                tapToToggleControls: !0,
                clickToCloseNonZoomable: !0,
                shareButtons: [{
                    id: "facebook",
                    label: "Share on Facebook",
                    url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                }, {
                    id: "twitter",
                    label: "Tweet",
                    url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                }, {
                    id: "pinterest",
                    label: "Pin it",
                    url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                }, {
                    id: "download",
                    label: "Download image",
                    url: "{{raw_image_url}}",
                    download: !0
                }],
                getImageURLForShare: function() {
                    return e.currItem.src || ""
                },
                getPageURLForShare: function() {
                    return window.location.href
                },
                getTextForShare: function() {
                    return e.currItem.title || ""
                },
                indexIndicatorSep: " / ",
                fitControlsWidth: 1200
            },
            D = function(e) {
                if (v) return !0;
                e = e || window.event, g.timeToIdle && g.mouseUsed && !c && L();
                for (var n, i, o = e.target || e.srcElement, r = o.getAttribute("class") || "", a = 0; a < B.length; a++) n = B[a], n.onTap && r.indexOf("pswp__" + n.name) > -1 && (n.onTap(), i = !0);
                if (i) {
                    e.stopPropagation && e.stopPropagation(), v = !0;
                    var s = t.features.isOldAndroid ? 600 : 30;
                    y = setTimeout(function() {
                        v = !1
                    }, s)
                }
            },
            S = function() {
                return !e.likelyTouchDevice || g.mouseUsed || screen.width > g.fitControlsWidth
            },
            _ = function(e, n, i) {
                t[(i ? "add" : "remove") + "Class"](e, "pswp__" + n)
            },
            $ = function() {
                var e = 1 === g.getNumItemsFn();
                e !== m && (_(i, "ui--one-slide", e), m = e)
            },
            N = function() {
                _(l, "share-modal--hidden", k)
            },
            A = function() {
                return k = !k, k ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function() {
                    k && N()
                }, 300)) : (N(), setTimeout(function() {
                    k || t.addClass(l, "pswp__share-modal--fade-in")
                }, 30)), k || O(), !1
            },
            I = function(t) {
                t = t || window.event;
                var n = t.target || t.srcElement;
                return e.shout("shareLinkClick", t, n), n.href ? n.hasAttribute("download") ? !0 : (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), k || A(), !1) : !1
            },
            O = function() {
                for (var e, t, n, i, o, r = "", a = 0; a < g.shareButtons.length; a++) e = g.shareButtons[a], n = g.getImageURLForShare(e), i = g.getPageURLForShare(e), o = g.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(o)), r += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", g.parseShareButtonOut && (r = g.parseShareButtonOut(e, r));
                l.children[0].innerHTML = r, l.children[0].onclick = I
            },
            M = function(e) {
                for (var n = 0; n < g.closeElClasses.length; n++)
                    if (t.hasClass(e, "pswp__" + g.closeElClasses[n])) return !0
            },
            F = 0,
            L = function() {
                clearTimeout(w), F = 0, c && x.setIdle(!1)
            },
            j = function(e) {
                e = e ? e : window.event;
                var t = e.relatedTarget || e.toElement;
                t && "HTML" !== t.nodeName || (clearTimeout(w), w = setTimeout(function() {
                    x.setIdle(!0)
                }, g.timeToIdleOutside))
            },
            R = function() {
                g.fullscreenEl && !t.features.isOldAndroid && (n || (n = x.getFullscreenAPI()), n ? (t.bind(document, n.eventK, x.updateFullscreen), x.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs"))
            },
            H = function() {
                g.preloaderEl && (P(!0), d("beforeChange", function() {
                    clearTimeout(h), h = setTimeout(function() {
                        e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && P(!1) : P(!0)
                    }, g.loadingIndicatorDelay)
                }), d("imageLoadComplete", function(t, n) {
                    e.currItem === n && P(!0)
                }))
            },
            P = function(e) {
                f !== e && (_(p, "preloader--active", !e), f = e)
            },
            q = function(e) {
                var n = e.vGap;
                if (S()) {
                    var a = g.barsSize;
                    if (g.captionEl && "auto" === a.bottom)
                        if (r || (r = t.createEl("pswp__caption pswp__caption--fake"), r.appendChild(t.createEl("pswp__caption__center")), i.insertBefore(r, o), t.addClass(i, "pswp__ui--fit")), g.addCaptionHTMLFn(e, r, !0)) {
                            var s = r.clientHeight;
                            n.bottom = parseInt(s, 10) || 44
                        } else n.bottom = a.top;
                    else n.bottom = "auto" === a.bottom ? 0 : a.bottom;
                    n.top = a.top
                } else n.top = n.bottom = 0
            },
            z = function() {
                g.timeToIdle && d("mouseUsed", function() {
                    t.bind(document, "mousemove", L), t.bind(document, "mouseout", j), b = setInterval(function() {
                        F++, 2 === F && x.setIdle(!0)
                    }, g.timeToIdle / 2)
                })
            },
            W = function() {
                d("onVerticalDrag", function(e) {
                    C && .95 > e ? x.hideControls() : !C && e >= .95 && x.showControls()
                });
                var e;
                d("onPinchClose", function(t) {
                    C && .9 > t ? (x.hideControls(), e = !0) : e && !C && t > .9 && x.showControls()
                }), d("zoomGestureEnded", function() {
                    e = !1, e && !C && x.showControls()
                })
            },
            B = [{
                name: "caption",
                option: "captionEl",
                onInit: function(e) {
                    o = e
                }
            }, {
                name: "share-modal",
                option: "shareEl",
                onInit: function(e) {
                    l = e
                },
                onTap: function() {
                    A()
                }
            }, {
                name: "button--share",
                option: "shareEl",
                onInit: function(e) {
                    s = e
                },
                onTap: function() {
                    A()
                }
            }, {
                name: "button--zoom",
                option: "zoomEl",
                onTap: e.toggleDesktopZoom
            }, {
                name: "counter",
                option: "counterEl",
                onInit: function(e) {
                    a = e
                }
            }, {
                name: "button--close",
                option: "closeEl",
                onTap: e.close
            }, {
                name: "button--arrow--left",
                option: "arrowEl",
                onTap: e.prev
            }, {
                name: "button--arrow--right",
                option: "arrowEl",
                onTap: e.next
            }, {
                name: "button--fs",
                option: "fullscreenEl",
                onTap: function() {
                    n.isFullscreen() ? n.exit() : n.enter()
                }
            }, {
                name: "preloader",
                option: "preloaderEl",
                onInit: function(e) {
                    p = e
                }
            }],
            U = function() {
                var e, n, o, r = function(i) {
                    if (i)
                        for (var r = i.length, a = 0; r > a; a++) {
                            e = i[a], n = e.className;
                            for (var s = 0; s < B.length; s++) o = B[s], n.indexOf("pswp__" + o.name) > -1 && (g[o.option] ? (t.removeClass(e, "pswp__element--disabled"), o.onInit && o.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                        }
                };
                r(i.children);
                var a = t.getChildByClass(i, "pswp__top-bar");
                a && r(a.children)
            };
        x.init = function() {
            t.extend(e.options, E, !0), g = e.options, i = t.getChildByClass(e.scrollWrap, "pswp__ui"), d = e.listen, W(), d("beforeChange", x.update), d("doubleTap", function(t) {
                var n = e.currItem.initialZoomLevel;
                e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(g.getDoubleTapZoom(!1, e.currItem), t, 333)
            }), d("preventDragEvent", function(e, t, n) {
                var i = e.target || e.srcElement;
                i && i.getAttribute("class") && e.type.indexOf("mouse") > -1 && (i.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1)
            }), d("bindEvents", function() {
                t.bind(i, "pswpTap click", D), t.bind(e.scrollWrap, "pswpTap", x.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", x.onMouseOver)
            }), d("unbindEvents", function() {
                k || A(), b && clearInterval(b), t.unbind(document, "mouseout", j), t.unbind(document, "mousemove", L), t.unbind(i, "pswpTap click", D), t.unbind(e.scrollWrap, "pswpTap", x.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", x.onMouseOver), n && (t.unbind(document, n.eventK, x.updateFullscreen), n.isFullscreen() && (g.hideAnimationDuration = 0, n.exit()), n = null)
            }), d("destroy", function() {
                g.captionEl && (r && i.removeChild(r), t.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(i, "pswp__ui--over-close"), t.addClass(i, "pswp__ui--hidden"), x.setIdle(!1)
            }), g.showAnimationDuration || t.removeClass(i, "pswp__ui--hidden"), d("initialZoomIn", function() {
                g.showAnimationDuration && t.removeClass(i, "pswp__ui--hidden")
            }), d("initialZoomOut", function() {
                t.addClass(i, "pswp__ui--hidden")
            }), d("parseVerticalMargin", q), U(), g.shareEl && s && l && (k = !0), $(), z(), R(), H()
        }, x.setIdle = function(e) {
            c = e, _(i, "ui--idle", e)
        }, x.update = function() {
            C && e.currItem ? (x.updateIndexIndicator(), g.captionEl && (g.addCaptionHTMLFn(e.currItem, o), _(o, "caption--empty", !e.currItem.title)), T = !0) : T = !1, k || A(), $()
        }, x.updateFullscreen = function(i) {
            i && setTimeout(function() {
                e.setScrollOffset(0, t.getScrollY())
            }, 50), t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
        }, x.updateIndexIndicator = function() {
            g.counterEl && (a.innerHTML = e.getCurrentIndex() + 1 + g.indexIndicatorSep + g.getNumItemsFn())
        }, x.onGlobalTap = function(n) {
            n = n || window.event;
            var i = n.target || n.srcElement;
            if (!v)
                if (n.detail && "mouse" === n.detail.pointerType) {
                    if (M(i)) return void e.close();
                    t.hasClass(i, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? g.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
                } else if (g.tapToToggleControls && (C ? x.hideControls() : x.showControls()), g.tapToClose && (t.hasClass(i, "pswp__img") || M(i))) return void e.close()
        }, x.onMouseOver = function(e) {
            e = e || window.event;
            var t = e.target || e.srcElement;
            _(i, "ui--over-close", M(t))
        }, x.hideControls = function() {
            t.addClass(i, "pswp__ui--hidden"), C = !1
        }, x.showControls = function() {
            C = !0, T || x.update(), t.removeClass(i, "pswp__ui--hidden")
        }, x.supportsFullscreen = function() {
            var e = document;
            return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
        }, x.getFullscreenAPI = function() {
            var t, n = document.documentElement,
                i = "fullscreenchange";
            return n.requestFullscreen ? t = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: i
            } : n.mozRequestFullScreen ? t = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + i
            } : n.webkitRequestFullscreen ? t = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + i
            } : n.msRequestFullscreen && (t = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange"
            }), t && (t.enter = function() {
                return u = g.closeOnScroll, g.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
            }, t.exit = function() {
                return g.closeOnScroll = u, document[this.exitK]()
            }, t.isFullscreen = function() {
                return document[this.elementK]
            }), t
        }
    };
    return e
}), $(function() {
    var e = function(e) {
        for (var t = function(e) {
                for (var t, n, i, o, r = e.childNodes, a = r.length, s = [], l = 0; a > l; l++) t = r[l], 1 === t.nodeType && (n = t.children[0], i = n.getAttribute("data-size").split("x"), o = {
                    src: n.getAttribute("href"),
                    w: parseInt(i[0], 10),
                    h: parseInt(i[1], 10)
                }, t.children.length > 1 && (o.title = t.children[1].innerHTML), n.children.length > 0 && (o.msrc = n.children[0].getAttribute("src")), o.el = t, s.push(o));
                return s
            }, n = function c(e, t) {
                return e && (t(e) ? e : c(e.parentNode, t))
            }, i = function(e) {
                e = e || window.event, e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                var t = e.target || e.srcElement,
                    i = n(t, function(e) {
                        return e.tagName && "FIGURE" === e.tagName.toUpperCase()
                    });
                if (i) {
                    for (var o, a = i.parentNode, s = i.parentNode.childNodes, l = s.length, u = 0, c = 0; l > c; c++)
                        if (1 === s[c].nodeType) {
                            if (s[c] === i) {
                                o = u;
                                break
                            }
                            u++
                        }
                    return o >= 0 && r(o, a), !1
                }
            }, o = function() {
                var e = window.location.hash.substring(1),
                    t = {};
                if (e.length < 5) return t;
                for (var n = e.split("&"), i = 0; i < n.length; i++)
                    if (n[i]) {
                        var o = n[i].split("=");
                        o.length < 2 || (t[o[0]] = o[1])
                    }
                return t.gid && (t.gid = parseInt(t.gid, 10)), t
            }, r = function(e, n, i, o) {
                var r, a, s, l = document.querySelectorAll(".pswp")[0];
                if (s = t(n), a = {
                        galleryUID: n.getAttribute("data-pswp-uid"),
                        getThumbBoundsFn: function(e) {
                            var t = s[e].el.getElementsByTagName("img")[0],
                                n = window.pageYOffset || document.documentElement.scrollTop,
                                i = t.getBoundingClientRect();
                            return {
                                x: i.left,
                                y: i.top + n,
                                w: i.width
                            }
                        }
                    }, o)
                    if (a.galleryPIDs) {
                        for (var u = 0; u < s.length; u++)
                            if (s[u].pid == e) {
                                a.index = u;
                                break
                            }
                    } else a.index = parseInt(e, 10) - 1;
                else a.index = parseInt(e, 10);
                isNaN(a.index) || (i && (a.showAnimationDuration = 0), r = new PhotoSwipe(l, PhotoSwipeUI_Default, s, a), r.init())
            }, a = document.querySelectorAll(e), s = 0, l = a.length; l > s; s++) a[s].setAttribute("data-pswp-uid", s + 1), a[s].onclick = i;
        var u = o();
        u.pid && u.gid && r(u.pid, a[u.gid - 1], !0, !0)
    };
    e(".my-gallery")
}), $(function() {
    if (mobilecheck() && !navigator.userAgent.match(/Windows Phone/i)) {
        $("nav").removeClass("other");
        var e = new Slideout({
            panel: document.getElementById("panel"),
            menu: document.getElementById("menu"),
            padding: 256,
            tolerance: 70
        })
    } - 1 == location.href.indexOf("/book") && ($(".insiders").size() > 0 ? membership = new Membership({
        container: ".insiders .container"
    }, $("body").data("hotel")) : membership = new Membership({}, $("body").data("hotel"))), $(".open-menu").on("click", function(t) {
        t.preventDefault(), e && e.toggle()
    }), $("#menu a:not(.dropdown-toggle)").on("click", function() {
        e && e.close()
    }), detectmob() === !1 || navigator.userAgent.match(/Windows Phone/i) ? $("input.date").pickmeup({
        hide_on_select: !0,
        format: "d b Y",
        min: new Date,
        change: function(e) {
            var t = new Date(e);
            $('input[name="dateFrom"]').val(t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate())
        }
    }).prop("readonly", "true") : (today = new Date, $("input.date").replaceWith('<input type="date" class="date" min="' + today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + '">'), $("input.date").on("change", function(e) {
        var t = new Date(e.currentTarget.value);
        $('input[name="dateFrom"]').val(t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate())
    })), $(".booking-submit").on("click", function(e) {
        e.preventDefault(), $(".booking-submit").html('<i class="fa fa-spin fa-spinner"></i> Checking...').prop("disabled", !0), $.get($(".form form").attr("action").replace("/book", "/any_room?dateFrom=" + $('input[name="dateFrom"]').val() + "&nights=" + $('[name="nights"]').val())).done(function(e) {
            e.count > 0 ? $(".form form").submit() : ($(".booking-submit").html("Check available").prop("disabled", !1), $(".error").html("Sorry, we have no availability for these dates.").show(), setTimeout(function() {
                $(".error").fadeOut(2500)
            }, 2500))
        }).fail(function() {
            $(".booking-submit").html("Check available").prop("disabled", !1), $(".error").html("Sorry, we have no availability for these dates.").show(), setTimeout(function() {
                $(".error").fadeOut(2500)
            }, 2500)
        })
    }), $(".booking-close").on("click", function(e) {
        e.preventDefault(), $(".booking-form").addClass("hidden"), $("html,body").removeClass("stop-scroll")
    });
    var t = function() {
        if (0 == $(".hidden-md:visible").size()) {
            var e = $("a.navbar-brand").outerWidth(),
                n = $(".navbar .container").width() - 20,
                i = 0;
            $("#top-menu ul.nav>li>a").map(function(e, t) {
                i += $(t).outerWidth()
            }), i > n - e && (0 == $("#top-menu ul.nav li.substruct").size() && $("#top-menu ul.nav .logout").before('<li class="dropdown substruct"><a class="dropdown-toggle" data-toggle="dropdown" href="">More <span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>'), el = $("#top-menu ul.nav>li:eq(" + ($(".substruct").index() - 1) + ")").detach(), $("#top-menu ul.nav li.substruct>ul").prepend(el), t())
        }
    };
    setTimeout(t, 300), $(window).on("resize", function() {
        t(), i()
    }), $(".small-photos").on("click", "li a", function(e) {
        e.preventDefault();
        var t = $(e.currentTarget),
            n = t.closest(".room-page").find(".big-photo img");
        n.attr("src", t.attr("href")), t.closest(".room-page").find(".active").removeClass("active"), t.closest("li").addClass("active")
    }), $("#contact-form").on("submit", function(e) {
        e.preventDefault();
        if ($("#contact-form input[name=part_c]").val().length != 0) {
            $("#contact-form").replaceWith("<p>Your message was sent successfully. Thanks.</p>")
        }
        else {
            var t, n = !0;
            $("#contact-form textarea[name]:visible, #contact-form input[name]:visible").each(function(e, t) {
                "" === $(t).val() ? ($(t).addClass("error"), n = !1) : $(t).removeClass("error")
            }), n && ($("#contact-form button").prepend('<i class="fa fa-spin fa-spinner"></i> ').prop("disabled", !0), t = $("#contact-form").serializeArray(), $.ajax({
                type: "POST",
                url: $("#contact-form").attr("action"),
                data: t,
                success: function(e) {
                    $("#contact-form").replaceWith("<p>Your message was sent successfully. Thanks.</p>")
                },
                error: function(e) {
                    "Error" === e.responseJSON.status && (alert(e.responseJSON.msg), $("#contact-form button").prop("disabled", !1).find("i").remove())
                },
                dataType: "JSON"
            }))
        }
    }), $(".show-more").on("click", function(e) {
        e.preventDefault(), $(".invisible-questions:visible").size() > 0 ? ($(".invisible-questions").slideUp(500), $(".show-more").html('Show more questions <i class="fa fa-caret-down"></i>')) : ($(".invisible-questions").slideDown(500), $(".show-more").html('Show less questions <i class="fa fa-caret-up"></i>'))
    }), $("#top-menu .navbar-nav").on("mouseover", ".dropdown", function(e) {
        $(e.currentTarget).toggleClass("open")
    }).on("mouseout", ".dropdown", function(e) {
        $(e.currentTarget).toggleClass("open")
    });
    var n = !1;
    $(".404").size() > 0 && setInterval(function() {
        var e = parseInt($(".seconds").html());
        0 === e && n === !1 ? (n = !0, window.location.href = window.location.origin + $(".navbar-brand").attr("href")) : $(".seconds").html(e - 1)
    }, 1e3), $(".btn-more-rooms").on("click", function(e) {
        $(".numbers-block").toggleClass("all-rooms"), $(".numbers-block").hasClass("all-rooms") ? $(e.currentTarget).html("Hide rooms") : $(e.currentTarget).html("Show more rooms")
    }), $(".load-more").on("click", function(e) {
        e.preventDefault();
        var t = $(e.currentTarget).attr("href"),
            n = t.indexOf("?") > -1 ? "&" : "?",
            i = n + "page=" + $(".blog-record").size(),
            o = window.location.origin + window.location.pathname,
            r = window.location.search;
        "/" != o[o.length - 1] && (o += "/"), $.get(window.location.origin + $(e.currentTarget).attr("href") + i, function(e) {
            JSON.parse(e.objects).length > 0 ? ($.each(JSON.parse(e.objects), function(e, t) {
                $(".blog-records").append('<div class="blog-record"><h2><a href="' + o + t.slug + r + '">' + t.title + '</a></h2><div class="blog-image"><div class="sticker"><div class="day">' + t.day + '</div><div class="month">' + t.month + '</div></div><img alt="10" src="' + t.img + '"></div>' + t.text + '<a href="' + o + t.slug + r + '">Read more...</a></div>')
            }), JSON.parse(e.objects).length < 2 && $(".load-more").hide()) : $(".load-more").hide()
        })
    });
    var i = function() {
        if ($("#booking-frame").size() > 0) {
            var e = $(window).height() - $(".footer").outerHeight() - $(".copyright").outerHeight() - $(".main-photo").outerHeight();
            500 > e || $(window).width() < 768 ? (clearInterval(window.resizeInterval), window.resizeInterval = setInterval(function() {
                $("#booking-frame").css("height", frames["booking-frame"].document.getElementById("panel").offsetHeight + 22 + "px")
            }, 320)) : $("#booking-frame").css("height", e + "px")
        }
    };
    i()
});