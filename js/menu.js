/*
 * HC Off-canvas Nav
 * ===================
 * Version: 6.1.3
 * Author: Some Web Media
 * Author URL: https://github.com/somewebmedia/
 * Plugin URL: https://github.com/somewebmedia/hc-offcanvas-nav
 * Description: JavaScript library for creating off-canvas multi-level navigations
 * License: MIT
 */
"use strict";
! function(e, t) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        if (!e.document) throw new Error("HC Off-canvas Nav requires a browser to run.");
        module.exports = t(e)
    } else "function" == typeof define && define.amd ? define("hcOffcanvasNav", [], t(e)) : t(e)
}("undefined" != typeof window ? window : this, function(ie) {
    var se = ie.document,
        oe = se.getElementsByTagName("html")[0],
        le = 0,
        ce = "nav-open",
        i = function(e, t) {
            if (t = t || {}, "string" == typeof e && (e = "#" === e.charAt(0) && -1 === e.indexOf(" ") ? se.querySelector(e) : se.querySelectorAll(e)), !e) return !1;
            var te = i.Helpers;
            void 0 !== t.maxWidth && (te.deprecated("maxWidth", "disableAt", "option"), t.disableAt = t.maxWidth);
            var ne = Object.assign({}, {
                width: 280,
                height: "auto",
                disableAt: !1,
                pushContent: null,
                swipeGestures: !0,
                expanded: !1,
                position: "left",
                levelOpen: "overlap",
                levelSpacing: 40,
                levelTitles: !0,
                closeOpenLevels: !0,
                closeActiveLevel: !1,
                navTitle: null,
                navClass: "",
                disableBody: !0,
                closeOnClick: !0,
                customToggle: null,
                activeToggleClass: null,
                bodyInsert: "prepend",
                keepClasses: !0,
                removeOriginalNav: !1,
                rtl: !1,
                insertClose: !0,
                insertBack: !0,
                levelTitleAsBack: !0,
                labelClose: "",
                labelBack: "Назад"
            }, t);
            ne.ariaLabels = Object.assign({}, {
                open: "Open Menu",
                close: "Close Menu",
                submenu: "Submenu"
            }, t.ariaLabels);
            var ae = [],
                re = function(e) {
                    if (!ae.length) return !1;
                    var t = !1;
                    "string" == typeof e && (e = [e]);
                    for (var n = e.length, a = 0; a < n; a++) - 1 !== ae.indexOf(e[a]) && (t = !0);
                    return t
                },
                n = function(e) {
                    if (e.querySelector("ul") || "UL" === e.tagName) {
                        var E = "hc-nav-" + ++le,
                            l = te.printStyle("hc-offcanvas-" + le + "-style"),
                            s = "keydown.hcOffcanvasNav",
                            c = ne.activeToggleClass || "toggle-open",
                            L = te.createElement("nav", {
                                id: E
                            }),
                            v = te.createElement("div", {
                                class: "nav-container"
                            });
                        L.addEventListener("click", te.stopPropagation), L.appendChild(v);
                        var n, u, a, d = null,
                            f = null,
                            p = null,
                            t = {},
                            h = !1,
                            m = !1,
                            g = null,
                            b = 0,
                            y = 0,
                            A = 0,
                            x = null,
                            C = {},
                            O = [],
                            k = !1,
                            N = [],
                            o = null,
                            T = null,
                            w = !1,
                            S = !1;
                        ne.customToggle ? d = te.getElements(ne.customToggle) : (d = [te.createElement("a", {
                            href: "#"
                        }, te.createElement("span"))], e.insertAdjacentElement("afterend", d[0])), d && d.length && d.forEach(function(e) {
                            e.addEventListener("click", R(e)), e.classList.add("hc-nav-trigger", E), e.setAttribute("role", "button"), e.setAttribute("aria-label", (ne.ariaLabels || {}).open), e.setAttribute("aria-controls", E), e.setAttribute("aria-expanded", !1), e.addEventListener("keydown", function(e) {
                                "Enter" !== e.key && 13 !== e.keyCode || setTimeout(function() {
                                    M(0, 0)
                                }, 0)
                            })
                        });
                        var M = function(e, t, n) {
                                if ("number" == typeof t && ("number" == typeof e || N.length)) {
                                    var a = Array.prototype.filter.call(v.querySelectorAll(".nav-wrapper"), function(e) {
                                        return e.getAttribute("data-level") == t && ("number" != typeof n || "number" == typeof n && e.getAttribute("data-index") == n)
                                    })[0];
                                    if (a = te.children(a, ".nav-content")[0], a = te.children(a, "ul"), a = te.children(a, "li"), a = te.children(a, ":not(.nav-wrapper)"), a = Array.prototype.map.call(a, function(e) {
                                            return Array.prototype.slice.call(e.querySelectorAll('[tabindex="0"], a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'))
                                        }).flat(), a = Array.prototype.filter.call(a, function(e) {
                                            return "-1" !== e.getAttribute("tabindex")
                                        })) {
                                        L.classList.add("user-is-tabbing");
                                        var r = a[0],
                                            i = a[a.length - 1];
                                        "number" == typeof e ? a[e].focus() : (N[N.length - 1].focus(), N.pop()), se.removeEventListener(s), se.addEventListener(s, function(e) {
                                            "Tab" !== e.key && 9 !== e.keyCode || (e.shiftKey ? se.activeElement === r && (e.preventDefault(), i.focus()) : se.activeElement === i && (e.preventDefault(), r.focus()))
                                        })
                                    }
                                }
                            },
                            j = function() {
                                se.removeEventListener(s), f && setTimeout(function() {
                                    f.focus()
                                }, u)
                            },
                            P = function() {
                                v.style.transition = "none", L.style.display = "block";
                                var e = te.formatSizeVal(y = v.offsetWidth),
                                    t = te.formatSizeVal(A = v.offsetHeight);
                                l.add(".hc-offcanvas-nav." + E + ".nav-position-left .nav-container", "transform: translate3d(-" + e + ", 0, 0)"), l.add(".hc-offcanvas-nav." + E + ".nav-position-right .nav-container", "transform: translate3d(" + e + ", 0, 0)"), l.add(".hc-offcanvas-nav." + E + ".nav-position-top .nav-container", "transform: translate3d(0, -" + t + ", 0)"), l.add(".hc-offcanvas-nav." + E + ".nav-position-bottom .nav-container", "transform: translate3d(0, " + t + ", 0)"), l.insert(), L.style.display = "", v.style.transition = "", n = ie.getComputedStyle(v).transitionProperty, u = te.toMs(ie.getComputedStyle(v).transitionDuration), a = ie.getComputedStyle(v).transitionTimingFunction, ne.pushContent && p && n && l.add(te.getElementCssTag(p), "transition: " + n + " " + u + "ms " + a), l.insert()
                            },
                            r = function(e) {
                                var t = !!d && ie.getComputedStyle(d[0]).display,
                                    n = !!ne.disableAt && "max-width: " + (ne.disableAt - 1) + "px",
                                    a = te.formatSizeVal(ne.width),
                                    r = te.formatSizeVal(ne.height),
                                    i = te.formatSizeVal(ne.levelSpacing);
                                (te.isNumeric(a) || -1 !== a.indexOf("px")) && (y = parseInt(a)), (te.isNumeric(r) || -1 !== r.indexOf("px")) && (A = parseInt(r)), re(["disableAt", "position"]) && l.reset(), l.add(".hc-offcanvas-nav." + E, "display: block", n), l.add(".hc-nav-original." + E, "display: none", n), t && l.add(".hc-nav-trigger." + E, "display: " + (t && "none" !== t ? t : "block"), n), -1 !== ["left", "right"].indexOf(ne.position) ? l.add(".hc-offcanvas-nav." + E + " .nav-container", "width: " + a) : l.add(".hc-offcanvas-nav." + E + " .nav-container", "height: " + r), l.add(".hc-offcanvas-nav." + E + ".nav-position-left .nav-container", "transform: translate3d(-" + a + ", 0, 0);"), l.add(".hc-offcanvas-nav." + E + ".nav-position-right .nav-container", "transform: translate3d(" + a + ", 0, 0);"), l.add(".hc-offcanvas-nav." + E + ".nav-position-top .nav-container", "transform: translate3d(0, -" + r + ", 0);"), l.add(".hc-offcanvas-nav." + E + ".nav-position-bottom .nav-container", "transform: translate3d(0, " + r + ", 0);"), l.add(".hc-offcanvas-nav." + E + ".nav-levels-overlap.nav-position-left li.level-open > .nav-wrapper", "transform: translate3d(-" + i + ", 0, 0)", n), l.add(".hc-offcanvas-nav." + E + ".nav-levels-overlap.nav-position-right li.level-open > .nav-wrapper", "transform: translate3d(" + i + ", 0, 0)", n), l.add(".hc-offcanvas-nav." + E + ".nav-levels-overlap.nav-position-top li.level-open > .nav-wrapper", "transform: translate3d(0, -" + i + ", 0)", n), l.add(".hc-offcanvas-nav." + E + ".nav-levels-overlap.nav-position-bottom li.level-open > .nav-wrapper", "transform: translate3d(0, " + i + ", 0)", n), l.insert(), (!e || e && re("pushContent")) && (p = ne.pushContent ? te.getElements(ne.pushContent)[0] : null), v.style.transition = "none";
                                var s = L.classList.contains(ce),
                                    o = ["hc-offcanvas-nav", ne.navClass || "", E, "nav-levels-" + (ne.levelOpen || "none"), "nav-position-" + ne.position, ne.disableBody ? "disable-body" : "", te.isIos ? "is-ios" : "", te.isTouchDevice ? "touch-device" : "", s ? ce : "", ne.rtl ? "rtl" : "", !0 !== ne.insertClose || ne.labelClose ? "" : "nav-close-button-empty"].join(" ").trim().replace(/  +/g, " ");
                                L.removeEventListener("click"), L.className = o, L.setAttribute("aria-hidden", !0), se.documentElement.style.setProperty("--nav-level-spacing", ne.levelSpacing + "px"), ne.disableBody && L.addEventListener("click", J), e ? P() : setTimeout(P, 0)
                            },
                            i = function() {
                                t = function c(e, t) {
                                    var n = [];
                                    Array.prototype.forEach.call(e, function(e) {
                                        if ("UL" === e.tagName || e instanceof HTMLHeadingElement) {
                                            var l = {
                                                tagName: e.tagName,
                                                id: t,
                                                htmlClass: e.getAttribute("class") || null,
                                                items: []
                                            };
                                            e instanceof HTMLHeadingElement ? l.content = te.clone(e, !1, !0) : (null !== e.getAttribute("data-nav-active") && (g = t, e.removeAttribute("data-nav-active")), Array.prototype.forEach.call(e.children, function(e) {
                                                var t = null !== e.getAttribute("data-nav-custom-content"),
                                                    n = t ? e.children : Array.prototype.filter.call(e.children, function(e) {
                                                        return "UL" !== e.tagName && !e.querySelector("ul")
                                                    }).concat(e.children.length ? [] : [e.firstChild]),
                                                    a = t ? [] : Array.prototype.slice.call(e.querySelectorAll("ul")),
                                                    r = a.length ? [].concat(Array.prototype.filter.call(a[0].parentNode.children, function(e) {
                                                        return "UL" === e.tagName || e instanceof HTMLHeadingElement
                                                    })) : [],
                                                    i = null;
                                                if (!n.length) {
                                                    for (var s = "", o = 0; o < e.childNodes.length; o++) e.childNodes[o].nodeType === Node.TEXT_NODE && (s += e.childNodes[o].textContent.trim());
                                                    n = [se.createTextNode(s)]
                                                }
                                                r.length && (te.data(e, "hc-uniqid") ? i = te.data(e, "hc-uniqid") : (i = Math.random().toString(36).substr(2), te.data(e, "hc-uniqid", i))), null !== e.getAttribute("data-nav-active") && (g = i, e.removeAttribute("data-nav-active")), l.items.push({
                                                    id: i,
                                                    htmlClass: e.getAttribute("class") || "",
                                                    content: n,
                                                    custom: t,
                                                    subnav: r.length ? c(r, i) : [],
                                                    highlight: null !== e.getAttribute("data-nav-highlight")
                                                })
                                            })), n.push(l)
                                        }
                                    });
                                    return n
                                }("UL" === e.tagName ? [e] : Array.prototype.filter.call(e.children, function(e) {
                                    return "UL" === e.tagName || e instanceof HTMLHeadingElement
                                }), null)
                            },
                            _ = function(e) {
                                if (e) {
                                    for (; v.firstChild;) v.removeChild(v.firstChild);
                                    C = {}
                                }! function h(n, e, m, g, t, a) {
                                    var b = te.createElement("div", {
                                        class: "nav-wrapper nav-wrapper-" + m,
                                        "data-level": m,
                                        "data-index": t || 0
                                    });
                                    var r = te.createElement("div", {
                                        class: "nav-content"
                                    });
                                    b.addEventListener("click", te.stopPropagation);
                                    b.appendChild(r);
                                    e.appendChild(b);
                                    if (g && (0 === m || 0 < m && "overlap" === ne.levelOpen)) {
                                        var i = "string" == typeof g ? g : te.clone(ie.jQuery && g instanceof ie.jQuery && g.length ? g[0] : g, !0, !0);
                                        r.insertBefore(te.createElement("h2", {
                                            id: 0 === m ? E + "-nav-title" : null,
                                            class: 0 === m ? "nav-title" : "level-title"
                                        }, i), r.firstChild), 0 === m && "string" == typeof g && L.setAttribute("aria-labelledby", E + "-nav-title")
                                    }
                                    var s = -1;
                                    n.forEach(function(e, t) {
                                        if ("UL" === e.tagName) {
                                            s++;
                                            var p = te.createElement("ul", {
                                                id: e.id ? 1 < n.length ? "menu-" + e.id + "-" + s : "menu-" + e.id : null,
                                                role: "menu",
                                                "aria-level": m + 1
                                            });
                                            r.appendChild(p), ne.keepClasses && e.htmlClass && p.classList.add.apply(p.classList, e.htmlClass.split(" ")), e.items.forEach(function(t, e) {
                                                var n = t.content;
                                                if (t.custom) {
                                                    var a = te.createElement("li", {
                                                        class: "nav-item nav-item-custom"
                                                    }, te.createElement("div", {
                                                        class: "nav-custom-content"
                                                    }, Array.prototype.map.call(n, function(e) {
                                                        return te.clone(e, !0, !0)
                                                    })));
                                                    return ne.keepClasses && t.htmlClass && a.classList.add.apply(a.classList, t.htmlClass.split(" ")), void p.appendChild(a)
                                                }
                                                var r, i = Array.prototype.filter.call(n, function(e) {
                                                    return "A" === e.tagName || e.nodeType !== Node.TEXT_NODE && e.querySelector("a")
                                                })[0];
                                                i ? (r = te.clone(i, !1, !0)).classList.add("nav-item-link") : r = te.createElement(t.subnav.length ? "a" : "span", {
                                                    class: "nav-item-link"
                                                }, Array.prototype.map.call(n, function(e) {
                                                    return te.clone(e, !0, !0)
                                                })), "A" === r.tagName && (r.setAttribute("tabindex", "0"), r.setAttribute("role", "menuitem"), r.getAttribute("href") || r.setAttribute("href", "#")), i && r.addEventListener("click", function(e) {
                                                    e.stopPropagation(), te.hasListener(i, "click") && i.click()
                                                }), "#" === r.getAttribute("href") && r.addEventListener("click", te.preventDefault), ne.closeOnClick && (F() ? "A" !== r.tagName || "false" === r.dataset.navClose || null !== r.getAttribute("disabled") && "false" !== r.getAttribute("disabled") || t.subnav.length && (!r.getAttribute("href") || "#" === r.getAttribute("href").charAt(0)) || r.addEventListener("click", J) : "A" !== r.tagName || "false" === r.dataset.navClose || null !== r.getAttribute("disabled") && "false" !== r.getAttribute("disabled") || r.addEventListener("click", J));
                                                var s = te.createElement("li", {
                                                    class: "nav-item"
                                                });
                                                if (s.appendChild(r), p.appendChild(s), ne.keepClasses && t.htmlClass && s.classList.add.apply(s.classList, t.htmlClass.split(" ")), t.highlight && s.classList.add("nav-highlight"), te.wrap(r, te.createElement("div", {
                                                        class: "nav-item-wrapper"
                                                    })), t.subnav.length) {
                                                    var o = m + 1,
                                                        l = t.id,
                                                        c = "";
                                                    if (C[o] || (C[o] = 0), s.classList.add("nav-parent"), F()) {
                                                        var v = C[o],
                                                            u = te.createElement("input", {
                                                                type: "checkbox",
                                                                id: E + "-" + o + "-" + v,
                                                                class: "hc-chk",
                                                                tabindex: -1,
                                                                "data-level": o,
                                                                "data-index": v,
                                                                value: l
                                                            });
                                                        u.addEventListener("click", te.stopPropagation), u.addEventListener("change", V), s.insertBefore(u, s.firstChild);
                                                        var d = function(e) {
                                                            e.addEventListener("click", function(e) {
                                                                if (e.stopPropagation(), u.setAttribute("checked", "true" !== u.getAttribute("checked")), "createEvent" in se) {
                                                                    var t = se.createEvent("HTMLEvents");
                                                                    t.initEvent("change", !1, !0), u.dispatchEvent(t)
                                                                }
                                                            }), e.addEventListener("keydown", function(e) {
                                                                "Enter" !== e.key && 13 !== e.keyCode || (k = !0, N.push(this))
                                                            }), e.setAttribute("aria-controls", 1 < t.subnav.length ? t.subnav.filter(function(e) {
                                                                return "UL" === e.tagName
                                                            }).map(function(e, t) {
                                                                return "menu-" + e.id + "-" + t
                                                            }).join(" ") : "menu-" + l), e.setAttribute("aria-haspopup", "overlap" === ne.levelOpen), e.setAttribute("aria-expanded", !1)
                                                        };
                                                        if (-1 !== O.indexOf(l) && (b.classList.add("sub-level-open"), b.addEventListener("click", function() {
                                                                return ee(o, v)
                                                            }), s.classList.add("level-open"), u.setAttribute("checked", !0)), c = !0 === ne.levelTitles ? n[0].textContent.trim() : "", r.getAttribute("href") && "#" !== r.getAttribute("href")) {
                                                            var f = te.createElement("a", {
                                                                href: "#",
                                                                class: "nav-next",
                                                                "aria-label": (ne.ariaLabels || {}).submenu + ": " + c,
                                                                role: "menuitem",
                                                                tabindex: 0
                                                            }, te.createElement("span"));
                                                            f.addEventListener("click", te.preventClick()), d(f), ne.rtl ? r.parentNode.appendChild(f) : r.parentNode.insertBefore(f, r.nextSibling)
                                                        } else r.appendChild(te.createElement("span", {
                                                            class: "nav-next"
                                                        }, te.createElement("span"))), d(r)
                                                    } else r.setAttribute("aria-expanded", !0);
                                                    C[o]++, h(t.subnav, s, o, c, C[o] - 1, "string" == typeof g ? g : "")
                                                }
                                            })
                                        } else r.appendChild(e.content)
                                    });
                                    if (m && void 0 !== t && !1 !== ne.insertBack && "overlap" === ne.levelOpen) {
                                        var o = te.children(r, "ul"),
                                            l = ne.levelTitleAsBack && a || ne.labelBack || "",
                                            c = te.createElement("a", {
                                                href: "#",
                                                class: "nav-back-button",
                                                role: "menuitem",
                                                tabindex: 0
                                            }, [l, te.createElement("span")]);
                                        if (!0 === ne.insertBack || 0 === ne.insertBack) {
                                            var v = te.createElement("div", {
                                                class: "nav-back"
                                            }, c);
                                            r.insertBefore(v, te.children(r, ":not(.level-title)")[0])
                                        } else {
                                            var u = te.createElement("li", {
                                                class: "nav-item nav-back"
                                            }, c);
                                            te.insertAt(u, !0 === ne.insertBack ? 0 : ne.insertBack, o)
                                        }
                                        var d = function() {
                                            return ee(m, t)
                                        };
                                        te.wrap(c, te.createElement("div", {
                                            class: "nav-item-wrapper"
                                        })), c.addEventListener("click", te.preventClick(d)), c.addEventListener("keydown", function(e) {
                                            "Enter" !== e.key && 13 !== e.keyCode || (k = !0)
                                        })
                                    }
                                    if (0 === m && !1 !== ne.insertClose) {
                                        var f = te.createElement("a", {
                                            href: "#",
                                            class: "nav-close-button" + (ne.labelClose ? " has-label" : ""),
                                            role: "menuitem",
                                            tabindex: 0,
                                            "aria-label": ne.labelClose ? "" : (ne.ariaLabels || {}).close
                                        }, [ne.labelClose || "", te.createElement("span")]);
                                        if (f.addEventListener("click", te.preventClick(J)), f.addEventListener("keydown", function(e) {
                                                "Enter" !== e.key && 13 !== e.keyCode || j()
                                            }), g && !0 === ne.insertClose) r.insertBefore(te.createElement("div", {
                                            class: "nav-close"
                                        }, f), r.children[1]);
                                        else if (!0 === ne.insertClose) r.insertBefore(te.createElement("div", {
                                            class: "nav-close"
                                        }, f), r.firstChild);
                                        else {
                                            var p = te.children(r, "ul"),
                                                y = te.createElement("li", {
                                                    class: "nav-item nav-close"
                                                }, f);
                                            te.wrap(f, te.createElement("div", {
                                                class: "nav-item-wrapper"
                                            })), te.insertAt(y, ne.insertClose, p)
                                        }
                                    }
                                }(t, v, 0, ne.navTitle)
                            },
                            B = function(t) {
                                return function(e) {
                                    "left" !== ne.position && "right" !== ne.position || (o = e.touches[0].clientX, T = e.touches[0].clientY, "doc" === t ? S || (se.addEventListener("touchmove", D, te.supportsPassive), se.addEventListener("touchend", U, te.supportsPassive)) : (S = !0, v.addEventListener("touchmove", z, te.supportsPassive), v.addEventListener("touchend", I, te.supportsPassive)))
                                }
                            },
                            q = function(e, t) {
                                ie.addEventListener("touchmove", te.preventDefault, te.supportsPassive), L.style.visibility = "visible", v.style[te.browserPrefix("transition")] = "none", te.setTransform(v, e, ne.position), p && (p.style[te.browserPrefix("transition")] = "none", te.setTransform(p, t, ne.position))
                            },
                            H = function(e, t, n, a) {
                                void 0 === t && (t = !0), void 0 === n && (n = !1), void 0 === a && (a = !1), ie.removeEventListener("touchmove", te.preventDefault, te.supportsPassive), v.style[te.browserPrefix("transition")] = "", te.setTransform(v, n, ne.position), p && (p.style[te.browserPrefix("transition")] = "", te.setTransform(p, a, ne.position)), "open" === e ? $() : (J(), t ? setTimeout(function() {
                                    L.style.visibility = ""
                                }, u) : L.style.visibility = "")
                            },
                            D = function(e) {
                                var t = 0 - (o - e.touches[0].clientX),
                                    n = "overlap" === ne.levelOpen ? G() * ne.levelSpacing : 0,
                                    a = y + n;
                                t = "left" === ne.position ? Math.min(Math.max(t, 0), a) : Math.abs(Math.min(Math.max(t, -a), 0)), ("left" === ne.position && o < 50 || "right" === ne.position && o > se.body.clientWidth - 50) && (w = !0, q(0 - (y - t), Math.abs(t)))
                            },
                            U = function e(t) {
                                if (se.removeEventListener("touchmove", D), se.removeEventListener("touchend", e), w) {
                                    var n = t.changedTouches[t.changedTouches.length - 1],
                                        a = 0 - (o - n.clientX),
                                        r = "overlap" === ne.levelOpen ? G() * ne.levelSpacing : 0,
                                        i = y + r;
                                    (a = "left" === ne.position ? Math.min(Math.max(a, 0), i) : Math.abs(Math.min(Math.max(a, -i), 0))) ? H(70 < a ? "open" : "close"): H("close", !1), T = o = null, w = !1
                                }
                            },
                            z = function(e) {
                                var t = 0 - (o - e.touches[0].clientX),
                                    n = 0 - (T - e.touches[0].clientY);
                                if (!(Math.abs(t) < Math.abs(n))) {
                                    var a = "overlap" === ne.levelOpen ? G() * ne.levelSpacing : 0,
                                        r = y + a;
                                    t = "left" === ne.position ? Math.min(Math.max(t, -r), 0) : Math.min(Math.max(t, 0), r), ("left" === ne.position && t < 0 || "right" === ne.position && 0 < t) && (w = !0, q(-Math.abs(t) + a, r - Math.abs(t)))
                                }
                            },
                            I = function e(t) {
                                if (v.removeEventListener("touchmove", z), v.removeEventListener("touchend", e), S = !1, w) {
                                    var n = t.changedTouches[t.changedTouches.length - 1],
                                        a = 0 - (o - n.clientX),
                                        r = "overlap" === ne.levelOpen ? G() * ne.levelSpacing : 0,
                                        i = y + r;
                                    (a = "left" === ne.position ? Math.abs(Math.min(Math.max(a, -i), 0)) : Math.abs(Math.min(Math.max(a, 0), i))) === i ? H("close", !1) : 50 < a ? H("close") : H("open", !0, r, i), T = o = null, w = !1
                                }
                            };
                        r(), i(), _(), !0 === ne.removeOriginalNav ? e.parentNode.removeChild(e) : e.classList.add("hc-nav-original", E), "prepend" === ne.bodyInsert ? se.body.insertBefore(L, se.body.firstChild) : "append" === ne.bodyInsert && se.body.appendChild(L), !0 === ne.expanded && (m = !0, $()), ne.swipeGestures && (v.addEventListener("touchstart", B("nav"), te.supportsPassive), se.addEventListener("touchstart", B("doc"), te.supportsPassive)), se.addEventListener("keydown", function(e) {
                            if (Y() && ("Escape" === e.key || 27 === e.keyCode)) {
                                var t = G();
                                0 === t ? (J(), j()) : (ee(t, K()), M(null, t - 1))
                            }
                        });
                        var X = te.debounce(P, 500);
                        ie.addEventListener("resize", X, te.supportsPassive);
                        var Q = function(e, t, n) {
                            var a = se.querySelector("#" + E + "-" + e + "-" + t);
                            if (a) {
                                var r = a.value,
                                    i = a.parentNode,
                                    s = i.closest(".nav-wrapper");
                                if (a.setAttribute("checked", !1), s.classList.remove("sub-level-open"), i.classList.remove("level-open"), i.querySelectorAll("[aria-controls]")[0].setAttribute("aria-expanded", !1), -1 !== O.indexOf(r) && O.splice(O.indexOf(r), 1), n && "overlap" === ne.levelOpen && (s.removeEventListener("click"), s.addEventListener("click", te.stopPropagation), te.setTransform(v, (e - 1) * ne.levelSpacing, ne.position), p)) {
                                    var o = "x" === te.getAxis(ne.position) ? y : A;
                                    te.setTransform(p, o + (e - 1) * ne.levelSpacing, ne.position)
                                }
                            }
                        };
                        return L.on = function(e, t) {
                            L.addEventListener(e, t)
                        }, L.off = function(e, t) {
                            L.removeEventListener(e, t)
                        }, L.getSettings = function() {
                            return Object.assign({}, ne)
                        }, L.isOpen = Y, L.open = $, L.close = J, L.toggle = R(null), L.update = function(e, t) {
                            if (ae = [], "object" == typeof e) {
                                for (var n in e) ne[n] !== e[n] && ae.push(n);
                                ne = Object.assign({}, ne, e)
                            }
                            if (!0 === e || !0 === t) {
                                if (ne.removeOriginalNav) return void console.warn("%c! HC Offcanvas Nav:%c Can't update because original navigation has been removed. Disable `removeOriginalNav` option.", "color: #fa253b", "color: default");
                                r(!0), i(), _(!0)
                            } else r(!0), _(!0)
                        }, L
                    }

                    function V() {
                        var e = Number(this.dataset.level),
                            t = Number(this.dataset.index);
                        "true" === this.getAttribute("checked") ? Z(e, t) : ee(e, t)
                    }

                    function W(e) {
                        e.classList.remove(c), e.setAttribute("aria-expanded", !1)
                    }

                    function F() {
                        return !1 !== ne.levelOpen && "none" !== ne.levelOpen
                    }

                    function Y() {
                        return h
                    }

                    function G() {
                        return O.length ? Number(Array.prototype.filter.call(v.querySelectorAll(".hc-chk"), function(e) {
                            return e.value == O[O.length - 1]
                        })[0].dataset.level) : 0
                    }

                    function K() {
                        return O.length ? Number(Array.prototype.filter.call(v.querySelectorAll(".hc-chk"), function(e) {
                            return e.value == O[O.length - 1]
                        })[0].dataset.index) : 0
                    }

                    function $(e, t) {
                        if ((!Y() || void 0 !== t) && (function() {
                                if (Y()) return;
                                h = !0, L.style.visibility = "visible", L.setAttribute("aria-hidden", !1), L.classList.add(ce), d && (d.forEach(W), f && (f.classList.add(c), f.setAttribute("aria-expanded", !0)));
                                "expand" === ne.levelOpen && x && clearTimeout(x);
                                ne.disableBody && (b = ie.pageYOffset || oe.scrollTop || se.documentElement.scrollTop || se.body.scrollTop, se.documentElement.scrollHeight > se.documentElement.clientHeight && oe.classList.add("hc-nav-yscroll"), se.body.classList.add("hc-nav-open"), b && (se.body.style.top = -b + "px"));
                                if (p) {
                                    var e = "x" === te.getAxis(ne.position) ? y : A;
                                    te.setTransform(p, e, ne.position)
                                }
                                if (m) return m = !1;
                                L._eventListeners.toggle && L._eventListeners.toggle.forEach(function(e) {
                                    e.fn(te.customEventObject("toggle", L, L, {
                                        action: "open"
                                    }), Object.assign({}, ne))
                                });
                                setTimeout(function() {
                                    L._eventListeners.open && L._eventListeners.open.forEach(function(e) {
                                        e.fn(te.customEventObject("open", L, L), Object.assign({}, ne))
                                    })
                                }, u)
                            }(), F())) {
                            var n;
                            if ("number" != typeof e && !te.isNumeric(e) || "number" != typeof t && !te.isNumeric(t)) g ? (n = Array.prototype.filter.call(v.querySelectorAll(".hc-chk"), function(e) {
                                return e.value == g
                            })[0], !ne.closeActiveLevel && ne.closeOpenLevels || (g = null)) : !1 === ne.closeOpenLevels && (n = (n = Array.prototype.filter.call(v.querySelectorAll(".hc-chk"), function(e) {
                                return "true" === e.getAttribute("checked")
                            }))[n.length - 1]);
                            else if (!(n = se.querySelector("#" + E + "-" + e + "-" + t))) return void console.warn("HC Offcanvas Nav: level " + e + " doesn't have index " + t);
                            if (n) {
                                var a = [];
                                if (e = Number(n.dataset.level), t = Number(n.dataset.index), 1 < e) {
                                    for (var r = []; n && n !== se; n = n.parentNode) n.matches(".nav-wrapper") && r.push(n);
                                    for (var i = 0; i < r.length; i++) {
                                        var s = r[i],
                                            o = Number(s.dataset.level);
                                        0 < o && a.push({
                                            level: o,
                                            index: Number(s.dataset.index)
                                        })
                                    }
                                    a = a.reverse()
                                }
                                a.push({
                                    level: e,
                                    index: t
                                });
                                for (var l = 0; l < a.length; l++) Z(a[l].level, a[l].index, !1)
                            }
                        }
                    }

                    function J() {
                        if (Y()) {
                            if (h = !1, p && te.setTransform(p, !1), L.classList.remove(ce), L.classList.remove("user-is-tabbing"), L.setAttribute("aria-hidden", !0), v.removeAttribute("style"), d && d.forEach(W), "expand" === ne.levelOpen && -1 !== ["top", "bottom"].indexOf(ne.position) ? ee(0) : F() && (x = setTimeout(function() {
                                    ee(0)
                                }, "expand" === ne.levelOpen ? u : 0)), ne.disableBody && (se.body.classList.remove("hc-nav-open"), oe.classList.remove("hc-nav-yscroll"), b)) {
                                if (se.body.style.top = "", se.body.scrollTop = b, oe.scrollTop = b, "bottom" === ne.position) {
                                    var e = b;
                                    setTimeout(function() {
                                        se.body.scrollTop = e, oe.scrollTop = e
                                    }, 0)
                                }
                                b = 0
                            }
                            L._eventListeners.toggle && L._eventListeners.toggle.forEach(function(e) {
                                e.fn(te.customEventObject("toggle", L, L, {
                                    action: "close"
                                }), Object.assign({}, ne))
                            }), setTimeout(function() {
                                L.style.visibility = "", L._eventListeners.close && L._eventListeners.close.forEach(function(e) {
                                    e.fn(te.customEventObject("close", L, L), Object.assign({}, ne))
                                }), L._eventListeners["close.once"] && L._eventListeners["close.once"].forEach(function(e) {
                                    e.fn(te.customEventObject("close.once", L, L), Object.assign({}, ne))
                                }), L.removeEventListener("close.once")
                            }, u)
                        }
                    }

                    function R(t) {
                        return function(e) {
                            e && (e.preventDefault(), e.stopPropagation()), t && (f = t), h ? J() : $()
                        }
                    }

                    function Z(t, n, e) {
                        void 0 === e && (e = !0);
                        var a = se.querySelector("#" + E + "-" + t + "-" + n),
                            r = a.value,
                            i = a.parentNode,
                            s = i.closest(".nav-wrapper"),
                            o = te.children(i, ".nav-wrapper")[0];
                        if (!1 === e && (o.style.transition = "none"), a.setAttribute("checked", !0), s.classList.add("sub-level-open"), i.classList.add("level-open"), i.querySelectorAll("[aria-controls]")[0].setAttribute("aria-expanded", !0), !1 === e && setTimeout(function() {
                                o.style.transition = ""
                            }, u), -1 === O.indexOf(r) && O.push(r), "overlap" === ne.levelOpen && (s.addEventListener("click", function() {
                                return ee(t, n)
                            }), te.setTransform(v, t * ne.levelSpacing, ne.position), p)) {
                            var l = "x" === te.getAxis(ne.position) ? y : A;
                            te.setTransform(p, l + t * ne.levelSpacing, ne.position)
                        }
                        L._eventListeners["open.level"] && L._eventListeners["open.level"].forEach(function(e) {
                            e.fn(te.customEventObject("open.level", L, o, {
                                currentLevel: t,
                                currentIndex: n
                            }), Object.assign({}, ne))
                        }), k && (M(0, t, n), k = !1)
                    }

                    function ee(t, e) {
                        for (var n = t; n <= Object.keys(C).length; n++)
                            if (n === t && void 0 !== e) Q(t, e, !0);
                            else if (0 !== t || ne.closeOpenLevels)
                            for (var a = 0; a < C[n]; a++) Q(n, a, n === t);
                        else;
                        if (0 < t && L._eventListeners["close.level"]) {
                            var r = se.querySelector("#" + E + "-" + t + "-" + e).closest(".nav-wrapper");
                            L._eventListeners["close.level"].forEach(function(e) {
                                e.fn(te.customEventObject("close.level", L, r, {
                                    currentLevel: t - 1,
                                    currentIndex: K()
                                }), Object.assign({}, ne))
                            })
                        }
                        k && (M(null, t - 1), k = !1)
                    }
                    console.error("%c! HC Offcanvas Nav:%c Navigation must contain <ul> element.", "color: #fa253b", "color: default")
                };
            if (Array.isArray(e) || e instanceof NodeList) {
                for (var a = [], r = 0; r < e.length; r++) a.push(n(e[r]));
                return 1 < a.length ? a : a[0]
            }
            return n(e)
        };
    if (void 0 !== ie.jQuery) {
        var n = ie.jQuery,
            a = "hcOffcanvasNav";
        n.fn.extend({
            hcOffcanvasNav: function(t) {
                return this.length ? this.each(function() {
                    var e = n.data(this, a);
                    e ? e.update(t) : (e = new i(this, t), n.data(this, a, e))
                }) : this
            }
        })
    }
    return ie.hcOffcanvasNav = ie.hcOffcanvasNav || i, i
}),
function(n) {
    var e = n.hcOffcanvasNav,
        o = n.document;
    "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function(e, t) {
            if (null == e) throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(e), a = 1; a < arguments.length; a++) {
                var r = arguments[a];
                if (null != r)
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i])
            }
            return n
        },
        writable: !0,
        configurable: !0
    }), Element.prototype.closest || (Element.prototype.closest = function(e) {
        var t = this;
        do {
            if (Element.prototype.matches.call(t, e)) return t;
            t = t.parentElement || t.parentNode
        } while (null !== t && 1 === t.nodeType);
        return null
    }), Array.prototype.flat || Object.defineProperty(Array.prototype, "flat", {
        configurable: !0,
        value: function n() {
            var a = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
            return a ? Array.prototype.reduce.call(this, function(e, t) {
                return Array.isArray(t) ? e.push.apply(e, n.call(t, a - 1)) : e.push(t), e
            }, []) : Array.prototype.slice.call(this)
        },
        writable: !0
    }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector);
    var t = !1;
    try {
        var a = Object.defineProperty({}, "passive", {
            get: function() {
                t = {
                    passive: !1
                }
            }
        });
        n.addEventListener("testPassive", null, a), n.removeEventListener("testPassive", null, a)
    } catch (e) {}
    var r = (/iPad|iPhone|iPod/.test(navigator.userAgent) || !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) && !n.MSStream,
        i = "ontouchstart" in n || navigator.maxTouchPoints || n.DocumentTouch && o instanceof DocumentTouch,
        s = function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        l = function(e) {
            return "auto" === e ? "100%" : s(e) && 0 !== e ? e + "px" : e
        },
        c = function(e) {
            var t = ["Webkit", "Moz", "Ms", "O"],
                n = (o.body || o.documentElement).style,
                a = e.charAt(0).toUpperCase() + e.slice(1);
            if (void 0 !== n[e]) return e;
            for (var r = 0; r < t.length; r++)
                if (void 0 !== n[t[r] + a]) return t[r] + a;
            return !1
        },
        v = function(e, t) {
            if (e instanceof Element) return t ? Array.prototype.filter.call(e.children, function(e) {
                return e.matches(t)
            }) : e.children;
            var n = [];
            return Array.prototype.forEach.call(e, function(e) {
                n = t ? n.concat(Array.prototype.filter.call(e.children, function(e) {
                    return e.matches(t)
                })) : n.concat(Array.prototype.slice.call(e.children))
            }), n
        },
        u = function(o) {
            var l = Node.prototype[o + "EventListener"];
            return function(e, t, n) {
                if (this) {
                    var a = e.split(".")[0];
                    if (this._eventListeners = this._eventListeners || {}, "add" === o) {
                        this._eventListeners[e] = this._eventListeners[e] || [];
                        var r = {
                            fn: t
                        };
                        n && (r.options = n), this._eventListeners[e].push(r), l.call(this, a, t, n)
                    } else if ("function" == typeof t)
                        for (var i in l.call(this, a, t, n), this._eventListeners) this._eventListeners[i] = this._eventListeners[i].filter(function(e) {
                            return e.fn !== t
                        }), this._eventListeners[i].length || delete this._eventListeners[i];
                    else if (this._eventListeners[e]) {
                        for (var s = this._eventListeners[e].length; s--;) l.call(this, a, this._eventListeners[e][s].fn, this._eventListeners[e][s].options), this._eventListeners[e].splice(s, 1);
                        this._eventListeners[e].length || delete this._eventListeners[e]
                    }
                }
            }
        };
    Node.prototype.addEventListener = u("add"), Node.prototype.removeEventListener = u("remove");
    var d = function(e, t, n) {
            void 0 === t && (t = {});
            var a = o.createElement(e);
            for (var r in t) "class" !== r ? (t[r] || 0 === t[r]) && a.setAttribute(r, t[r]) : a.className = t[r];
            if (n) {
                Array.isArray(n) || (n = [n]);
                for (var i = 0; i < n.length; i++)
                    if ("object" == typeof n[i] && n[i].length && !n[i].nodeType)
                        for (var s = 0; s < n[i].length; s++) a.appendChild(n[i][s]);
                    else a.appendChild("string" == typeof n[i] ? o.createTextNode(n[i]) : n[i])
            }
            return a
        },
        f = function(e) {
            return -1 !== ["left", "right"].indexOf(e) ? "x" : "y"
        },
        p = function() {
            c("transform");
            return function(e, t, n) {
                if (!1 === t || "" === t) e.style.transform = "";
                else if ("x" === f(n)) {
                    var a = "left" === n ? t : -t;
                    e.style.transform = "translate3d(" + l(a) + ",0,0)"
                } else {
                    var r = "top" === n ? t : -t;
                    e.style.transform = "translate3d(0," + l(r) + ",0)"
                }
            }
        }(),
        h = function(e, t, n) {
            console.warn("%cHC Off-canvas Nav:%c " + n + "%c '" + e + "'%c is now deprecated and will be removed in the future. Use%c '" + t + "'%c option instead. See details about plugin usage at https://github.com/somewebmedia/hc-offcanvas-nav.", "color: #fa253b", "color: default", "color: #5595c6", "color: default", "color: #5595c6", "color: default")
        };
    e.Helpers = {
        supportsPassive: t,
        isIos: r,
        isTouchDevice: i,
        isNumeric: s,
        formatSizeVal: l,
        toMs: function(e) {
            return parseFloat(e) * (/\ds$/.test(e) ? 1e3 : 1)
        },
        stopPropagation: function(e) {
            return e.stopPropagation()
        },
        preventDefault: function(e) {
            return e.preventDefault()
        },
        preventClick: function(t) {
            return function(e) {
                e.preventDefault(), e.stopPropagation(), "function" == typeof t && t()
            }
        },
        browserPrefix: c,
        children: v,
        wrap: function(e, t) {
            e.parentNode.insertBefore(t, e), t.appendChild(e)
        },
        data: function(e, t, n) {
            if (e.hcOffcanvasNav = e.hcOffcanvasNav || {}, void 0 === n) return e.hcOffcanvasNav[t];
            e.hcOffcanvasNav[t] = n
        },
        clone: function(e, t, n) {
            var a = e.cloneNode(n || !1),
                r = e instanceof Element ? [e].concat(Array.prototype.slice.call(e.getElementsByTagName("*"))) : [],
                i = a instanceof Element ? [a].concat(Array.prototype.slice.call(a.getElementsByTagName("*"))) : [];
            return t || (r.shift(), i.shift()), n && function(e, t) {
                for (var n = 0; n < e.length; n++)
                    if (e[n]._eventListeners)
                        for (var a in e[n]._eventListeners)
                            for (var r = 0; r < e[n]._eventListeners[a].length; r++) t[r].addEventListener(a, e[n]._eventListeners[a][r].fn, e[n]._eventListeners[a][r].options)
            }(r, i), a
        },
        customEventObject: function(e, n, a, r) {
            return new function(e) {
                for (var t in this.bubbles = !1, this.cancelable = !1, this.composed = !1, this.currentTarget = a, this.data = r ? {} : null, this.defaultPrevented = !1, this.eventPhase = 0, this.isTrusted = !1, this.target = n, this.timeStamp = Date.now(), this.type = e, r) this.data[t] = r[t]
            }(e)
        },
        hasListener: function(e, t) {
            return (t ? (e._eventListeners || {})[t] : e._eventListeners) || !1
        },
        debounce: function(a, r, i) {
            var s;
            return function() {
                var e = this,
                    t = arguments,
                    n = i && !s;
                clearTimeout(s), s = setTimeout(function() {
                    s = null, i || a.apply(e, t)
                }, r), n && a.apply(e, t)
            }
        },
        createElement: d,
        getElements: function(e) {
            var t = null;
            return "string" == typeof e ? t = o.querySelectorAll(e) : n.jQuery && e instanceof n.jQuery && e.length ? t = e.toArray() : e instanceof Element && (t = [e]), t
        },
        getElementCssTag: function e(t) {
            return "string" == typeof t ? t : t.getAttribute("id") ? "#" + t.getAttribute("id") : t.getAttribute("class") ? t.tagName.toLowerCase() + "." + t.getAttribute("class").replace(/\s+/g, ".") : e(t.parentNode) + " > " + t.tagName.toLowerCase()
        },
        printStyle: function(e) {
            var r = d("style", {
                    id: e
                }),
                i = {},
                s = {};
            o.head.appendChild(r);
            var a = function(e) {
                return ";" !== e.substr(-1) && (e += ";" !== e.substr(-1) ? ";" : ""), e
            };
            return {
                reset: function() {
                    i = {}, s = {}
                },
                add: function(e, t, n) {
                    e = e.trim(), t = t.trim(), n ? (n = n.trim(), s[n] = s[n] || {}, s[n][e] = a(t)) : i[e] = a(t)
                },
                remove: function(e, t) {
                    e = e.trim(), t ? (t = t.trim(), void 0 !== s[t][e] && delete s[t][e]) : void 0 !== i[e] && delete i[e]
                },
                insert: function() {
                    var e = "";
                    for (var t in s) {
                        for (var n in e += "@media screen and (" + t + ") {\n", s[t]) e += "  " + n + " { " + s[t][n] + " }\n";
                        e += "}\n"
                    }
                    for (var a in i) e += a + " { " + i[a] + " }\n";
                    r.innerHTML = e
                }
            }
        },
        insertAt: function(e, t, n) {
            var a = v(n),
                r = a.length,
                i = -1 < (t = "last" === (t = "first" === t ? 0 : t) ? r : t) ? Math.max(0, Math.min(t, r)) : Math.max(0, Math.min(r + t, r));
            0 === i ? n[0].insertBefore(e, n[0].firstChild) : a[i - 1].insertAdjacentElement("afterend", e)
        },
        getAxis: f,
        setTransform: p,
        deprecated: h
    }
}(window);