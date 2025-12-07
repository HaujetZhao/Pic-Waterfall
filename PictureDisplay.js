webpackJsonp([3], {
    180: function(t, e, n) {
        function i(t) {
            n(587)
        }
        var o = n(10)(n(302), n(754), i, "data-v-4cab32b0", null);
        t.exports = o.exports
    },
    181: function(t, e, n) {
        function i(t) {
            n(594)
        }
        var o = n(10)(n(303), n(761), i, "data-v-b33f6f94", null);
        t.exports = o.exports
    },
    182: function(t, e, n) {
        function i(t) {
            n(596)
        }
        var o = n(10)(n(304), n(763), i, "data-v-e15e2044", null);
        t.exports = o.exports
    },
    190: function(t, e, n) {
        "use strict";
        var i = n(184)
          , o = n(736)
          , a = n.n(o);
        (i.default || window.Vue).component("icon", a.a)
    },
    279: function(t, e, n) {
        function i(t) {
            n(595)
        }
        var o = n(10)(n(308), n(762), i, null, null);
        t.exports = o.exports
    },
    281: function(t, e, n) {
        function i(t) {
            n(585)
        }
        var o = n(10)(n(312), n(752), i, null, null);
        t.exports = o.exports
    },
    301: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(192)
          , o = n.n(i)
          , a = n(77)
          , s = n.n(a)
          , r = n(125)
          , l = n.n(r)
          , c = n(42)
          , d = n.n(c)
          , m = n(126)
          , h = n.n(m)
          , p = n(323)
          , u = n(88)
          , f = n(330);
        n(725),
        e.default = {
            name: "DistributeStore",
            data: function() {
                return {
                    itemFocused: "",
                    itemLoaded: [],
                    itemLoadFailed: [],
                    itemLoading: [],
                    itemRendering: [],
                    itemRendered: [],
                    loadingList: {},
                    theLeastItemAdded: "",
                    customStyle: ["minWidth", "maxWidth", "minHeight", "maxHeight"],
                    maximiseItem: "",
                    inStandaloneWindow: !1,
                    standaloneItemId: "",
                    childWindow: {},
                    componentExit: {},
                    storeId: ""
                }
            },
            computed: {},
            watch: {
                wrapComponent: {
                    handler: function(t, e) {
                        if (t)
                            if (["object", "function"].includes(void 0 === t ? "undefined" : h()(t))) {
                                var i = t;
                                i instanceof Function && !this.__hasAlreadyWarn && (this.__hasAlreadyWarn = !0,
                                console.warn("wrapComponent use promise for async, need $emit('toUpdateItemComponent')"));
                                var o = i.name || "wrap";
                                this.$options.components[o] = i
                            } else
                                "string" == typeof t && this.$options.components[t] || (this.$options.components.wrap = n(182),
                                console.error("[props]wrapComponent is not correct"));
                        else
                            this.$options.components.wrap = n(182)
                    },
                    immediate: !0
                },
                presetComponents: {
                    handler: function(t, e) {
                        if (t && "object" === (void 0 === t ? "undefined" : h()(t)))
                            for (var n in t) {
                                var i = t(n);
                                if (["object", "function"].includes(void 0 === i ? "undefined" : h()(i))) {
                                    var o = i
                                      , a = n || o.name;
                                    this.$options.components[a] = o
                                }
                            }
                    },
                    immediate: !0
                },
                failureComponent: {
                    handler: function(t, e) {
                        if (t)
                            if (["object", "function"].includes(void 0 === t ? "undefined" : h()(t)))
                                this.$options.components.failureComponent = t;
                            else {
                                if ("string" == typeof t && this.$options.components[t])
                                    return this.$options.components.failureComponent = this.$options.components[t];
                                this.$options.components.failureComponent = n(180),
                                console.error("failureComponent is not correct")
                            }
                        else
                            this.$options.components.failureComponent = n(180)
                    },
                    immediate: !0
                },
                loadingComponent: {
                    handler: function(t, e) {
                        if (t)
                            if (["object", "function"].includes(void 0 === t ? "undefined" : h()(t)))
                                this.$options.components.loadingComponent = t;
                            else {
                                if ("string" == typeof t && this.$options.components[t])
                                    return this.$options.components.loadingComponent = this.$options.components[t];
                                this.$options.components.loadingComponent = n(181),
                                console.error("loadingComponent is not correct")
                            }
                        else
                            this.$options.components.loadingComponent = n(181)
                    },
                    immediate: !0
                },
                componentData: function(t, e) {
                    this._appendComponent()
                }
            },
            activated: function() {},
            deactivated: function() {},
            created: function() {},
            mounted: function() {
                if (this.wrapComponent instanceof Function || this._appendComponent(),
                window.addEventListener("resize", this.notifyAllResize),
                window.Layout = window.Layout || [],
                window.Layout[this._uid] = this,
                this.storeId = n.i(f.a)("storeId"),
                n.i(f.a)("onlyContent") && n.i(f.a)("itemId")) {
                    var t = n.i(f.a)("itemId")
                      , e = n.i(f.a)("componentId");
                    t = decodeURI(t),
                    this._initChildLayout(t, e)
                }
            },
            beforeDestroy: function() {},
            methods: {
                _showLoadingComponent: function(t, e, n) {
                    return this._hasInLoadingList(t, e, n)
                },
                _hasInLoadingList: function(t, e, n) {
                    return this.loadingList[t + "_" + e + "_" + n]
                },
                _addInLoadingList: function(t, e, n) {
                    t && e && this.$set(this.loadingList, t + "_" + e + "_" + n, Date.now())
                },
                _removeInLoadingList: function(t, e, n) {
                    var i = this
                      , o = Date.now() - this.loadingList[t + "_" + e + "_" + n];
                    o < this.minLoadingTime ? setTimeout(function() {
                        i.$delete(i.loadingList, t + "_" + e + "_" + n)
                    }, this.minLoadingTime - o) : this.$delete(this.loadingList, t + "_" + e + "_" + n)
                },
                customSizeInfo: function(t) {
                    var e = d()({}, t);
                    if (e)
                        for (var n in e)
                            this.customStyle.includes(n) && "" !== e[n] && (e[n] += "px");
                    return e
                },
                setFocusItem: function(t) {
                    this.itemFocused = t,
                    this._notifyFocusItem(t)
                },
                checkWrap: function(t) {
                    if (!this.$options.components[t] && "string" == typeof t && this.wrapList[t] && (t = this.wrapList[t].name ? this.wrapList[t] : this.wrapList[t].url),
                    t) {
                        if (["object", "function"].includes(void 0 === t ? "undefined" : h()(t))) {
                            var e = t;
                            e instanceof Function && !this.__hasAlreadyWarn && (this.__hasAlreadyWarn = !0,
                            console.warn("wrapComponent use promise for async, need $emit('toUpdateItemComponent')"));
                            var n = e.name || "wrap";
                            return this.$options.components[n] = e,
                            n
                        }
                        return "string" == typeof t && this.$options.components[t] ? t : (console.error("[props]wrapComponent of componentData is not correct"),
                        !1)
                    }
                    return !1
                },
                toNotifyUpdate: function() {
                    this.$emit("toUpdate"),
                    this._appendComponent()
                },
                toMaximise: function(t) {
                    var e = this
                      , n = this._getWrapItem(t);
                    n.__oldHeight = n.$el.clientHeight,
                    n.__oldWidth = n.$el.clientWidth,
                    this.maximiseItem = t,
                    this.$emit("onMaximise", t),
                    this.$nextTick(function() {
                        e.resize([t])
                    })
                },
                toMinimise: function(t) {
                    var e = this;
                    this.$emit("onMinimise", t),
                    this.$nextTick(function() {
                        e.maximiseItem = "";
                        var n = e._getWrapItem(t);
                        n && (n.$el.style.height = n.__oldHeight + "px",
                        n.$el.style.width = n.__oldWidth + "px"),
                        e.$nextTick(function() {
                            e.resize([t]),
                            n && (delete n.__oldHeight,
                            delete n.__oldWidth),
                            n && setTimeout(function() {
                                n.$el.style.height = "100%",
                                n.$el.style.width = "100%"
                            }, 100)
                        })
                    })
                },
                toUpdateItem: function() {
                    this.$emit("toUpdateItemData"),
                    this.$emit("toUpdate")
                },
                toUpdateItemComponent: function() {
                    var t = this;
                    this.__time ? (this.__time += 200,
                    setTimeout(function() {
                        t.__time -= 200,
                        0 === t.__time && t._appendComponent()
                    }, 200)) : (this._appendComponent(),
                    this.__time = 200,
                    setTimeout(function() {
                        t.__time -= 200
                    }, 200))
                },
                toAddItem: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    this.$emit.apply(this, ["toAddItem"].concat(l()(e)))
                },
                toRemoveItem: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    this.$emit.apply(this, ["toRemoveItem"].concat(l()(e)))
                },
                toMoveItemToInsert: function(t, e, n, i, o) {
                    var a = this
                      , s = t.idFrom
                      , r = "tabBar" === e ? this.componentData[n].componentList.length : -1;
                    this.componentData[n].componentList.forEach(function(t, n) {
                        e === t.id && (r = n)
                    });
                    var c = d()({}, this.componentData[s]);
                    c.componentList.forEach(function(t, e) {
                        var n = t.id;
                        a._prepareExeComponentMove(s, n)
                    }),
                    this.__dragMoveItem = s;
                    var m = [].concat(l()(this.componentData[s].componentList))
                      , h = this.componentData[n].componentList;
                    m.forEach(function(t) {
                        var e = -1;
                        h.filter(function(n, i) {
                            n.id === t.id && (e = i)
                        }),
                        -1 !== e && h.splice(e, 1)
                    }),
                    h.splice.apply(h, [Math.max(0, r), 0].concat(l()(m))),
                    c.componentList.forEach(function(t, e) {
                        var i = t.id;
                        a._exeComponentMove(s, n, i)
                    }),
                    this.toSwitchActiveComponent(n, this.componentData[s].activeComponent),
                    this.$delete(this.componentData, s),
                    this.toNotifyUpdate(),
                    this.setFocusItem(n),
                    this.toRemoveItem(s)
                },
                toMoveComponentToInsert: function(t, e, n) {
                    var i = t.idFrom
                      , o = t.componentId
                      , a = "tabBar" === e ? this.componentData[n].componentList.length : -1;
                    this.componentData[n].componentList.forEach(function(t, n) {
                        e === t.id && (a = n)
                    }),
                    n !== i && this._prepareExeComponentMove(i, o);
                    var s = d()({}, this._getComponentInfoById(i, o))
                      , r = this.componentData[n].componentList;
                    if (n === i)
                        r.splice(r.indexOf(this._getComponentInfoById(i, o)), 1);
                    else {
                        var l = -1;
                        r.filter(function(t, e) {
                            t.id === o && (l = e)
                        }),
                        -1 !== l && r.splice(l, 1)
                    }
                    r.splice(Math.max(0, a), 0, s),
                    n !== i && (this._exeComponentMove(i, n, o),
                    this.removeComponent(i, o)),
                    this.toSwitchActiveComponent(n, o),
                    this.toNotifyUpdate(),
                    this.setFocusItem(n)
                },
                toMoveComponentToCreate: function(t, e, n, i) {
                    var o = this
                      , a = t.idFrom
                      , s = t.componentId;
                    d()({}, this.componentData[a]);
                    this._prepareExeComponentMove(a, s),
                    this.$emit("toAddItem", e, n, i, a, s),
                    this.$nextTick(function() {
                        var t = o.theLeastItemAdded
                          , e = d()({}, o._getComponentInfoById(a, s));
                        o.$set(o.componentData, t, {
                            componentList: [e]
                        }),
                        o._exeComponentMove(a, t, s),
                        o.toSwitchActiveComponent(t, s),
                        o.removeComponent(a, s),
                        o.toNotifyUpdate(),
                        o.setFocusItem(t)
                    })
                },
                toCreateComponentToCreate: function(t, e, n, i) {
                    var o = this
                      , a = t.componentId
                      , s = t.componentInfo;
                    this.$emit("toAddItem", e, n, i),
                    this.$nextTick(function() {
                        var t = o.theLeastItemAdded;
                        o.$set(o.componentData, t, {
                            activeComponent: "",
                            componentList: [s]
                        }),
                        o.toSwitchActiveComponent(t, a),
                        o.toNotifyUpdate(),
                        o.setFocusItem(t)
                    })
                },
                toCreateComponentToInsert: function(t, e, n, i, o) {
                    var a = t.componentId
                      , s = t.componentInfo
                      , r = "tabBar" === e ? this.componentData[n].componentList.length : -1;
                    this.componentData[n].componentList.forEach(function(t, n) {
                        e === t.id && (r = n)
                    });
                    var l = this.componentData[n].componentList
                      , c = -1;
                    l.filter(function(t, e) {
                        t.id === a && (c = e,
                        s = t)
                    }),
                    -1 !== c && l.splice(c, 1),
                    l.splice(Math.max(0, r), 0, s),
                    this.toSwitchActiveComponent(n, a),
                    this.toNotifyUpdate(),
                    this.setFocusItem(n)
                },
                toMoveItem: function(t, e, n, i) {
                    var o = this
                      , a = t.idFrom
                      , s = d()({}, this.componentData[a]);
                    s.componentList.forEach(function(t, e) {
                        var n = t.id;
                        o._prepareExeComponentMove(a, n)
                    }),
                    this.__dragMoveItem = a,
                    this.$nextTick(function() {
                        o.$emit("toAddItem", e, n, i, a),
                        o.$nextTick(function() {
                            var t = o.theLeastItemAdded;
                            o.$set(o.componentData, t, s),
                            s.componentList.forEach(function(e, n) {
                                var i = e.id;
                                o._exeComponentMove(a, t, i)
                            }),
                            o.toSwitchActiveComponent(t, s.activeComponent),
                            o.$delete(o.componentData, a),
                            o.toNotifyUpdate(),
                            o.setFocusItem(t),
                            o.toRemoveItem(a)
                        })
                    })
                },
                toApplyItem: function(t, e) {
                    var n = "string" == typeof t ? t : t.idFrom;
                    this._exchangeItem("apply", n, e)
                },
                toAlterItem: function(t, e) {
                    var n = "string" == typeof t ? t : t.idFrom;
                    this._exchangeItem("alter", n, e)
                },
                _exchangeItem: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "alter"
                      , e = this
                      , n = arguments[1]
                      , i = arguments[2]
                      , o = d()({}, this.componentData[n])
                      , a = (o.component,
                    i)
                      , s = d()({}, this.componentData[a]);
                    "alter" === t && s.componentList.forEach(function(t, n) {
                        var i = t.id;
                        e._prepareExeComponentMove(a, i)
                    }),
                    o.componentList.forEach(function(t, i) {
                        var o = t.id;
                        e._prepareExeComponentMove(n, o)
                    }),
                    "alter" !== t && this.removeItemComponents(a, !0),
                    this.$set(this.componentData, n, {
                        componentList: []
                    }),
                    this.$set(this.componentData, a, {
                        componentList: []
                    }),
                    this.$nextTick(function() {
                        "alter" === t && e.$set(e.componentData, n, s),
                        e.$set(e.componentData, a, o),
                        o.componentList.forEach(function(t, i) {
                            var o = t.id;
                            e._exeComponentMove(n, a, o)
                        }),
                        "alter" !== t && e.removeItemComponents(n, !1),
                        e.toSwitchActiveComponent(a, o.activeComponent),
                        "alter" === t && s.componentList.forEach(function(t, i) {
                            var o = t.id;
                            e._exeComponentMove(a, n, o)
                        }),
                        "alter" === t && e.toSwitchActiveComponent(n, s.activeComponent),
                        e.toNotifyUpdate(),
                        e.setFocusItem(a)
                    })
                },
                _prepareExeComponentMove: function(t, e) {
                    for (var n in this.itemRendered)
                        -1 !== n.indexOf("_" + t + "_" + e) && (this.itemRendered["_temp_" + n] = this.itemRendered[n],
                        this.$delete(this.itemRendered, n))
                },
                _exeComponentMove: function(t, e, n) {
                    var i = d()({}, this._getComponentInfoById(e, n));
                    for (var o in this.itemRendered)
                        if (-1 !== o.indexOf("_temp__" + t + "_" + n)) {
                            var a = this._getComponentInfoById(e, n).component;
                            this._hasInLoadingList(t, n, a) && (this.componentReady(t, n, a),
                            this.componentWaitForReady(e, n, a));
                            var s = "_" + e + "_" + n + "_" + a;
                            this.itemRendered[s] = this.itemRendered[o],
                            this._bindOnEvent(this.itemRendered[s], e, {
                                id: i.id,
                                component: a
                            }),
                            this.$delete(this.itemRendered, o)
                        }
                },
                replaceRef_Exit: function(t, e, n, i) {
                    var o = this
                      , a = "_" + t + "_" + e + "_" + n
                      , s = setInterval(function() {
                        -1 !== o.itemLoaded.indexOf(n) && (clearInterval(s),
                        o.itemRendered[a].$el.remove(),
                        o.$delete(o.itemRendered, a),
                        o.itemRendered[a] = i,
                        o._bindOnEvent(o.itemRendered[a], t, {
                            id: e,
                            component: n
                        }),
                        o.$refs[a][0].appendChild(o.itemRendered[a].$el))
                    }, 0)
                },
                obtainRef_Exit: function(t, e, n) {
                    var i = "_" + t + "_" + e + "_" + n;
                    this.itemRendered[i];
                    this.$delete(this.itemRendered, i)
                },
                itemAdded: function(t) {
                    this.theLeastItemAdded = t,
                    this.$set(this.componentData, t, this.componentData[t] || {
                        componentList: []
                    }),
                    this.setFocusItem(t)
                },
                itemRemoved: function(t) {
                    var e = this;
                    if (!this.__dragMoveItem || this.__dragMoveItem !== t) {
                        var n = s()(this.componentData);
                        n.forEach(function(i, o) {
                            if (i === t) {
                                var a = n[o - 1] || n[o + 1];
                                e.setFocusItem(a)
                            }
                        }),
                        this.removeItemComponents(t)
                    }
                    this.__dragMoveItem = null
                },
                removeItemComponents: function(t, e) {
                    var n = this;
                    if (this.componentData[t]) {
                        var i = [].concat(l()(this.componentData[t].componentList));
                        i.forEach(function(i) {
                            i.id && n.removeComponent(t, i.id, e)
                        }),
                        e || 0 !== i.length ? this.$set(this.componentData, t, {
                            componentList: []
                        }) : (this.$delete(this.componentData, t),
                        this.toRemoveItem(t)),
                        this.toNotifyUpdate()
                    }
                },
                _getWrapItem: function(t) {
                    if (t)
                        return this.$refs["wrap_" + t] && this.$refs["wrap_" + t][0]
                },
                componentReady: function(t, e, n) {
                    var i = this;
                    this.$nextTick(function() {
                        var o = i._getWrapItem(t);
                        o && o.onComponentReady && o.onComponentReady(e, n),
                        clearInterval(i.itemLoading[t + "_" + e + "_" + n]),
                        i.$set(i.itemLoading, t + "_" + e + "_" + n, void 0),
                        i._removeInLoadingList(t, e, n),
                        i.$emit("componentReady", t, e, n)
                    })
                },
                componentWaitForReady: function(t, e, n, i) {
                    var o = this
                      , a = this._getWrapItem(t);
                    if (n = n || this._getComponentNameById(t),
                    i && (clearInterval(this.itemLoading[t + "_" + e + "_" + n]),
                    this.$set(this.itemLoading, t + "_" + e + "_" + n, void 0)),
                    void 0 === this.itemLoading[t + "_" + e + "_" + n] && n)
                        if (a && a.onWaitForComponentReady && a.onWaitForComponentReady(e, n),
                        this.itemLoading = this.itemLoading || {},
                        !this.componentList[n] || this.componentList[n].manualReady || i)
                            this._addInLoadingList(t, e, n),
                            this.$set(this.itemLoading, t + "_" + e + "_" + n, !0);
                        else {
                            var s = setInterval(function() {
                                !function(t, e, n, i) {
                                    if (o._getComponentRef(t, e)) {
                                        var a = o._getWrapItem(t);
                                        a && a.onComponentReady && a.onComponentReady(e, n),
                                        clearInterval(i),
                                        o.$set(o.itemLoading, t + "_" + e + "_" + n, void 0),
                                        o._removeInLoadingList(t, e, n),
                                        o.$emit("componentReady", t, e, n)
                                    }
                                }(t, e, n, s)
                            }, 20);
                            this.$set(this.itemLoading, t + "_" + e + "_" + n, s),
                            this._addInLoadingList(t, e, n),
                            this.$emit("componentWaitForReady", t, e, n)
                        }
                },
                reloadComponentFromExternal: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = e.componentId
                      , i = e.componentInfo;
                    this.reloadComponent(t, n, i)
                },
                reloadComponent: function(t, e, n) {
                    var i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    if (e = e || this.componentData[t].activeComponent,
                    n = n || this.componentData[t].componentList.filter(function(t) {
                        return t.id === e
                    })[0]) {
                        n.id = n.id || e;
                        this.componentData[t];
                        this.updateComponentInfo(t, e, n, i),
                        this.componentWaitForReady(t, e, this._getComponentNameById(t, e)),
                        this.renderComponent(t, e, !0),
                        this.$emit("componentReloaded", t, e)
                    }
                },
                updateComponentInfo: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , i = arguments[3]
                      , o = this.componentData[t]
                      , a = n.props;
                    if (i) {
                        var s = o.componentList.findIndex(function(t) {
                            return t.id === e
                        });
                        o.componentList.splice(s, 1, n)
                    } else
                        o.componentList.forEach(function(t) {
                            if (t.id === e && (t.component = void 0 !== n.component ? n.component : t.component,
                            t.props = i ? {} : t.props || {},
                            a))
                                for (var o in a)
                                    t.props[o] = a[o]
                        });
                    this.$set(this.componentData[t], "componentList", o.componentList),
                    this.toNotifyUpdate()
                },
                updateComponentTabInfo: function(t, e) {
                    this.$set(this.componentData, t, item)
                },
                addComponentFromExternal: function(t, e) {
                    var n = e.componentName
                      , i = e.componentInfo;
                    this.addComponent(t, n, i)
                },
                addComponent: function(t) {
                    var e = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.defaultCreateComponentName
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.defaultCreateComponentProps;
                    if (this.componentList[n] || !n) {
                        var o = [].concat(l()(this.componentData[t].componentList))
                          , a = i && i.id || Math.random().toString(36).substr(2)
                          , s = d()({}, this.componentList[n] && this.componentList[n].props || {});
                        if (i)
                            for (var r in i)
                                s[r] = i && i.props && void 0 !== i.props[r] ? i.props[r] : i[r];
                        var c = d()({}, this.componentList[n]);
                        delete c.url,
                        delete c.id;
                        var m = d()(c, {
                            component: n,
                            id: a,
                            props: s
                        });
                        o.push(m),
                        this.$set(this.componentData[t], "componentList", o),
                        this.$nextTick(function() {
                            e.toSwitchActiveComponent(t, a)
                        }),
                        this.toNotifyUpdate(),
                        this.$emit("componentAdded", t, a)
                    } else
                        n && console.error("default create component name must be defined in componentList")
                },
                changeComponentFromExternal: function(t, e) {
                    var n = e.componentId
                      , i = e.componentInfo;
                    this.changeComponent(t, n, i)
                },
                changeComponent: function(t, e, n) {
                    e = e || this.componentData[t].activeComponent;
                    var i = n.component;
                    n.id = n.id || e,
                    this._notifyDeactivated(t, e);
                    var o = this._getComponentRefId(t, e);
                    if (this.changeComponentRerender)
                        this.itemRendered[o] && this.itemRendered[o].$destroy(),
                        this.$delete(this.itemRendered, o);
                    else {
                        var a = this.itemRendered[o];
                        a && document.createDocumentFragment().appendChild(a.$el)
                    }
                    this.updateComponentInfo(t, e, n, !0),
                    this.renderComponent(t, e, this.changeComponentRerender),
                    this._appendComponent(),
                    this._checkLoading(t, e, i, this.loadingWhileChangeComponent),
                    this.$emit("componentChanged", t, e)
                },
                getComponentById: function(t, e) {
                    var n = this._getComponentRefId(t, e);
                    return this.itemRendered[n],
                    this.itemRendered[n]
                },
                _checkLoading: function(t, e, n, i) {
                    n && !this.itemLoadFailed.includes("_" + t + "_" + e + "_" + n) && (this.loadingWhileSwitchComponent || i ? this.componentWaitForReady(t, e, n) : -1 === this.itemLoaded.indexOf(n) && this.componentWaitForReady(t, e, n))
                },
                _getComponentInfoById: function(t, e) {
                    if (this.componentData[t] && this.componentData[t].componentList) {
                        return this.componentData[t].componentList.filter(function(t) {
                            return t.id === e
                        })[0]
                    }
                    return !1
                },
                _getComponentNameById: function(t, e) {
                    var n = this._getComponentInfoById(t, e);
                    if (n) {
                        return n.component
                    }
                    return !1
                },
                toSwitchActiveComponent: function(t, e) {
                    var n = this.componentData[t].activeComponent;
                    if (n !== e) {
                        this._notifyDeactivated(t, n),
                        this.$set(this.componentData[t], "activeComponent", e),
                        this.renderComponent(t, e),
                        this._notifyActivated(t, e),
                        this._appendComponent();
                        var i = this._getComponentNameById(t, e);
                        this._checkLoading(t, e, i),
                        this.toNotifyUpdate(),
                        this.$emit("activeComponentChanged", t, e)
                    }
                },
                _notifyFocusItem: function(t) {
                    if (this.__lastFocusedItemId && this.__lastFocusedItemId !== t) {
                        var e = this.componentData[this.__lastFocusedItemId] && this.componentData[this.__lastFocusedItemId].activeComponent
                          , n = this._getComponentRef(this.__lastFocusedItemId, e);
                        n && n.onBlur && n.onBlur()
                    }
                    this.__lastFocusedItemId = t;
                    var i = this.componentData[t] && this.componentData[t].activeComponent
                      , o = this._getComponentRef(t, i);
                    o && o.onFocus && o.onFocus(),
                    this.$emit("switchFocusItem", t, i)
                },
                _notifyDeactivated: function(t, e) {
                    var n = this;
                    this.debounce(function() {
                        var i = n._getComponentRef(t, e);
                        i && i.$options && i.$options.deactivated && i.$options.deactivated[0].apply(i)
                    }, "notifyDeactivated" + e, 50, !1)
                },
                _notifyActivated: function(t, e) {
                    var n = this;
                    if (t === this.itemFocused) {
                        var i = this._getComponentRef(t, e);
                        i && i.focus && i.focus()
                    }
                    this.debounce(function() {
                        var i = n._getComponentRef(t, e);
                        i && i.$options && i.$options.activated && i.$options.activated[0].apply(i)
                    }, "notifyActivated" + e, 50, !0)
                },
                removeComponentFromExternal: function(t, e, n) {
                    this.removeComponent(t, e, n)
                },
                removeComponent: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !this.autoRemoveItemWhenEmpty;
                    e = e || this.componentData[t].activeComponent,
                    this._notifyDeactivated(t, e);
                    var i = this._getComponentRefId(t, e);
                    this.itemRendered[i] && this.itemRendered[i].$destroy(),
                    this.$delete(this.itemRendered, i);
                    var o = -1;
                    this.componentData[t].componentList.forEach(function(t, n) {
                        t.id === e && (o = n)
                    });
                    var a = this.__tempList || [].concat(l()(this.componentData[t].componentList));
                    if (this.__tempList = a,
                    a.splice(o, 1),
                    this.componentData[t]) {
                        if (a.length && (this.renderComponent(t, this.componentData[t].activeComponent),
                        this.$set(this.componentData[t], "componentList", a)),
                        this.componentData[t].activeComponent === e && a.length > 0) {
                            var s = a[o] ? o : a[o - 1] ? o - 1 : 0;
                            this.toSwitchActiveComponent(t, a[s].id)
                        } else
                            0 === a.length && (this.toSwitchActiveComponent(t, ""),
                            n || this.toRemoveItem(t));
                        this.$emit("componentRemoved", t, e),
                        this.toNotifyUpdate()
                    }
                    this.__tempList = null
                },
                notifyAllResize: function() {
                    var t = this.itemDataIdList || s()(this.componentData);
                    this.resize(t)
                },
                resize: function(t, e) {
                    var n = this;
                    t.forEach(function(t) {
                        var i = n._getComponentRef(t)
                          , o = n._getWrapItem(t);
                        o && o.onResize && o.onResize(e),
                        i && i.onResize && i.onResize(e)
                    })
                },
                update: function(t) {
                    this._appendComponent(t)
                },
                updateComplete: function(t) {
                    this._appendComponent(t, !0)
                },
                getComponentRef: function(t, e) {
                    return this._getComponentRef(t, e)
                },
                _getComponentRef: function(t, e) {
                    if (t) {
                        e = e || this._getActiveComponentId(t);
                        var n = this._getComponentRefId(t, e);
                        return this.itemRendered[n] && this.itemRendered[n]
                    }
                },
                _getComponentDivRef: function(t) {
                    if (t && this.$refs[t])
                        return this.$refs[t][0]
                },
                _getActiveComponentId: function(t) {
                    return this.componentData[t] && this.componentData[t].activeComponent
                },
                _getActiveComponentRefId: function(t) {
                    var e = this._getActiveComponentId(t);
                    return this._getComponentRefId(t, e)
                },
                _getComponentRefId: function(t, e) {
                    return "_" + t + "_" + e + "_" + this._getComponentNameById(t, e)
                },
                renderComponent: function(t, e, i) {
                    var o = this
                      , a = this._getComponentNameById(t, e)
                      , s = this._getComponentRefId(t, e);
                    i && this.itemRendered[s] && this.itemRendered[s].$el.remove();
                    var r = !1;
                    if (i && this.itemLoadFailed.includes("_" + t + "_" + e + "_" + a) && (r = !0,
                    this.$delete(this.itemLoadFailed, "_" + t + "_" + e + "_" + a)),
                    e && a && (!this.itemRendered[s] || i)) {
                        this.itemRendering.push(t + "_" + e);
                        var l = this.componentList[a] && this.componentList[a].url;
                        if (l instanceof Function)
                            l(function(n) {
                                n = n.render ? n : n.default,
                                o._beforeRenderCheckDivRef(t, e) ? (o._renderComponent(n, t, a, e),
                                -1 === o.itemLoaded.indexOf(a) && o.itemLoaded.push(a)) : o.itemRendering.splice(o.itemRendering.indexOf(t + "_" + e), 1)
                            });
                        else if (Array.isArray(l) || "string" == typeof l) {
                            var c = Array.isArray(l) ? l : l.split(",");
                            c.forEach(function(i) {
                                i.endsWith(".js") ? n.i(u.b)(i, a, function(n) {
                                    if (n && "error" === n.type || !o._beforeRenderCheckDivRef(t, e))
                                        "error" === n.type && (o.itemLoadFailed.push("_" + t + "_" + e + "_" + a),
                                        o.componentReady(t, e, a)),
                                        o.itemRendering.splice(o.itemRendering.indexOf(t + "_" + e), 1);
                                    else {
                                        var s = i.split("/")
                                          , r = s[s.length - 2];
                                        l = window[a] || window[r],
                                        l && (l = l.render ? l : l.default,
                                        o._renderComponent(l, t, a, e),
                                        -1 === o.itemLoaded.indexOf(a) && o.itemLoaded.push(a))
                                    }
                                }, r) : i.endsWith(".css") && n.i(u.c)(i, a, function(t) {}, r)
                            })
                        } else
                            "object" === (void 0 === l ? "undefined" : h()(l)) ? (l = l.render ? l : l.default,
                            this._beforeRenderCheckDivRef(t, e) ? (this._renderComponent(l, t, a, e),
                            -1 === this.itemLoaded.indexOf(a) && this.itemLoaded.push(a)) : this.itemRendering.splice(this.itemRendering.indexOf(t + "_" + e), 1)) : (this.itemLoadFailed.push("_" + t + "_" + e + "_" + a),
                            this.componentReady(t, e, a),
                            this.itemRendering.splice(this.itemRendering.indexOf(t + "_" + e), 1))
                    } else
                        this.itemRendered[s] && this.$nextTick(function() {
                            o.$refs[s][0] && !o.$refs[s][0].contains(o.itemRendered[s].$el) && (o.$refs[s][0].appendChild(o.itemRendered[s].$el),
                            o._notifyActivated(t, e)),
                            o.itemRendering.splice(o.itemRendering.indexOf(t + "_" + e), 1)
                        })
                },
                _reInitDefineFun: function() {
                    window.__DistributeStore_moduleList = window.__DistributeStore_moduleList || {},
                    s()(window).includes("define") || (window._define = window.define),
                    window.define = function(t, e, n) {
                        window.__DistributeStore_moduleList[t] = n && n()
                    }
                    ,
                    window.define.amd = {}
                },
                _restoreDefineFun: function() {
                    window.define = window._define
                },
                _beforeRenderCheckDivRef: function(t, e) {
                    return this._getComponentRefId(t, e) && this._getWrapItem(t)
                },
                _renderComponent: function(t, e, n, i) {
                    var a = this;
                    this.$nextTick(function() {
                        var r = a._getComponentInfoById(e, i)
                          , l = a._getComponentRefId(e, i)
                          , c = Vue.extend(t);
                        if (r) {
                            if (c = new c({
                                _isComponent: !1,
                                store: window.opener && window.opener.Layout[a.storeId] && window.opener.Layout[a.storeId].componentExit[i] ? window.opener.Layout[a.storeId].componentExit[i].$store : a.$store,
                                parent: a._getWrapItem(e)
                            }),
                            c._props,
                            !0) {
                                var m = a.componentList[n] && a.componentList[n].props || {};
                                r.props && s()(r.props).length > 0 ? r.props = d()(r.props, o()({}, m, r.props)) : r.props = d()(r.props || {}, m),
                                c._props = d()(r.props, o()({}, c._props, r.props));
                                var h = d()({}, a.componentList[n]);
                                for (var p in h) {
                                    -1 === ["url", "id", "props"].concat(a.noCopyAttributeFromComponentList).indexOf(p) && -1 === s()(r).indexOf(p) && a.$set(r, p, h[p])
                                }
                            }
                            a._bindOnEvent(c, e, r);
                            var u = a._getComponentDivRef(l);
                            u = u.children && u.children[0] || u.appendChild(document.createElement("div")),
                            c.$mount(u);
                            var f = a._getWrapItem(e);
                            f._componentRef = c,
                            f.$options.componentMounted && f.$options.componentMounted.bind(f, c)(),
                            c._watchers.forEach(function(t) {
                                t.cb.call(t.vm, t.get())
                            }),
                            a.itemRendered[l] = c,
                            a._notifyActivated(e, i),
                            a.itemRendering.splice(a.itemRendering.indexOf(e + "_" + i), 1)
                        }
                    })
                },
                _bindOnEvent: function(t, e, n) {
                    var i = this
                      , o = n.id
                      , a = n.component;
                    if (t) {
                        if (t.$off("componentReady"),
                        t.$off("componentWaitForReady"),
                        t.$off("addComponent"),
                        t.$off("reloadComponent"),
                        t.$off("changeComponent"),
                        t.$off("removeComponent"),
                        t.__itemId = e,
                        t.__componentId = o,
                        t.__componentName = a,
                        this.componentList[a].listeners) {
                            var s = this.componentList[a].listeners;
                            for (var r in s)
                                t.$off(r),
                                t.$on(r, s[r])
                        }
                        if (n.listeners)
                            for (var l in n.listeners)
                                t.$off(l),
                                t.$on(l, n.listeners[l]);
                        t.$on("componentReady", function() {
                            for (var t = arguments.length, n = Array(t), s = 0; s < t; s++)
                                n[s] = arguments[s];
                            i.componentReady.apply(i, [e, o, a].concat(n))
                        }),
                        t.$on("componentWaitForReady", function() {
                            for (var t = arguments.length, n = Array(t), s = 0; s < t; s++)
                                n[s] = arguments[s];
                            i.componentWaitForReady.apply(i, [e, o, a].concat(n))
                        }),
                        t.$on("addComponent", function() {
                            for (var t = arguments.length, n = Array(t), o = 0; o < t; o++)
                                n[o] = arguments[o];
                            i.addComponent.apply(i, [e].concat(n))
                        }),
                        t.$on("reloadComponent", function() {
                            for (var t = arguments.length, n = Array(t), a = 0; a < t; a++)
                                n[a] = arguments[a];
                            if (i.inStandaloneWindow && i.migrateCompleteStatusInStandaloneWindow)
                                return void alert("Could not reload component in standalone window with complete status mode!");
                            i.reloadComponent.apply(i, [e, o].concat(n))
                        }),
                        t.$on("changeComponent", function() {
                            for (var t = arguments.length, n = Array(t), a = 0; a < t; a++)
                                n[a] = arguments[a];
                            if (i.inStandaloneWindow && i.migrateCompleteStatusInStandaloneWindow)
                                return void alert("Could not change component in standalone window with complete status mode!");
                            i.changeComponent.apply(i, [e, o].concat(n))
                        }),
                        t.$on("removeComponent", function() {
                            for (var t = arguments.length, n = Array(t), a = 0; a < t; a++)
                                n[a] = arguments[a];
                            if (i.inStandaloneWindow && i.migrateCompleteStatusInStandaloneWindow)
                                return void alert("Could not remove component in standalone window with complete status mode!");
                            i.removeComponent.apply(i, [e, o].concat(n))
                        })
                    }
                },
                _appendComponent: function(t, e) {
                    var n = this
                      , i = Date.now();
                    this.$nextTick(function() {
                        var o = [];
                        for (var a in n.componentData)
                            !function(t) {
                                var i = n.searchItemInGlobal ? document : n.$parent.$el
                                  , a = i.querySelector('[content-id="' + t + '"]');
                                if ((!n.inStandaloneWindow || n.standaloneItemId === t) && (n.renderWithoutCheckTarget || a && document.body.contains(a))) {
                                    var s = n.componentData[t];
                                    if (s.componentList && s.componentList.length > 0 && !s.activeComponent && n.autoSelectActiveComponent) {
                                        var r = s.componentList.slice(-1)[0];
                                        r && n.$set(n.componentData[t], "activeComponent", r.id)
                                    }
                                    var l = s.activeComponent
                                      , c = n._getWrapItem(t)
                                      , d = n._getComponentRef(t, l);
                                    if (d && c && c._componentRef !== d && (c._componentRef = d,
                                    c.$options.componentMounted && c.$options.componentMounted.bind(c, d)()),
                                    e)
                                        n.$set(n, "itemLoadFailed", []),
                                        n.renderComponent(t, l, !0);
                                    else if (s.componentList && s.componentList.length > 0 && -1 === n.itemRendering.indexOf(t + "_" + l)) {
                                        var m = n._getComponentRefId(t, l)
                                          , h = n._getComponentNameById(t, l);
                                        !h || n.itemRendered[m] || n.itemLoadFailed.includes("_" + t + "_" + l + "_" + h) || n.componentWaitForReady(t, l, h),
                                        n.renderComponent(t, l)
                                    }
                                    var p = n.$refs[t] && n.$refs[t][0];
                                    a && p && !a.contains(p) && (a.hasChildNodes() && a.childNodes.forEach(function(t) {
                                        return a.removeChild(t)
                                    }),
                                    a.appendChild(p))
                                }
                                a || n.itemDataIdList && n.itemDataIdList.includes(t) || o.push(t)
                            }(a);
                        n.__pcs = Date.now() - i,
                        t && o.forEach(function(t) {
                            n.$delete(n.componentData, t)
                        })
                    })
                },
                _initChildLayout: function(t, e) {
                    var n = this;
                    this.standaloneItemId_origin = t;
                    var i = d()({}, window.opener.Layout[this.storeId].componentExit[e].componentInfo);
                    if (this.inStandaloneWindow = !0,
                    this.$emit("inStandaloneWindow", !0),
                    !this.componentData[t]) {
                        var o = this.itemDataIdList || s()(this.componentData)
                          , a = o.shift();
                        a && (t = a,
                        this.$set(this.componentData, t, {
                            componentList: [i]
                        }))
                    }
                    this.standaloneItemId = t,
                    this.$set(this.componentData, t, this.componentData[t] || {
                        componentList: [i]
                    });
                    var r = this.componentData[t].componentList.filter(function(t) {
                        return t.id == e
                    })[0];
                    r || (this.componentData[t].componentList.push(i),
                    r = i),
                    e = r.id,
                    this.toSwitchActiveComponent(t, e),
                    this.$nextTick(function() {
                        if (n.toMaximise(t),
                        i = n.componentData[t].componentList.filter(function(t) {
                            return t.id === e
                        })[0],
                        !i.disableStandaloneWithStatus && n.migrateCompleteStatusInStandaloneWindow) {
                            var o = window.opener.Layout[n.storeId].componentExit[e].componentRef;
                            o.afterMigrate && o.afterMigrate("exit", window, document),
                            o && n.replaceRef_Exit(t, e, i.component, o)
                        }
                    }),
                    window.opener.Layout[this.storeId].childWindowReady(t, e, window, this),
                    window.opener.addEventListener("unload", function() {
                        window.close()
                    }),
                    window.opener.addEventListener("close", function() {
                        window.close()
                    })
                },
                checkReadyForExit: function(t, e, n) {
                    var i = this.getComponentById(t, e);
                    i && i.readyForExit ? i.readyForExit(n) : n && n.component && n.component
                },
                openInNewWindow: function(t, e) {
                    if (!["http:", "https:", "app:"].includes(window.location.protocol))
                        return void console.error("Should be served over an HTTP/HTTPS server. \nThis function over file:// won't work.");
                    var n = this.componentData[t].activeComponent;
                    if (n) {
                        this.childWindow[t + "_" + n] && this.childWindow[t + "_" + n].close();
                        var i = this.getComponentById(t, n)
                          , o = i && i.$el
                          , a = o ? Math.min(o.scrollWidth, document.body.clientWidth) + 2 : 0
                          , s = o ? Math.min(o.scrollHeight, document.body.clientHeight) + 2 : 0;
                        this.childWindow[t + "_" + n] = window.open(location.href + "?onlyContent=true&itemId=" + encodeURI(t) + "&componentId=" + encodeURI(n) + "&storeId=" + encodeURI(this._uid) + "&layoutType=" + e, "_blank", "width=" + a + ",height=" + s + ",menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=yes"),
                        this.componentExit[n] = this.componentExit[n] || {},
                        this.componentExit[n].itemId = t,
                        this.componentExit[n].$store = this.$store;
                        var r = this.componentData[t].componentList.filter(function(t) {
                            return t.id === n
                        })[0];
                        this.$emit("openInNewWindow", t, n, r, i),
                        r = d()({}, r);
                        var l = !r.disableStandaloneWithStatus && this.migrateCompleteStatusInStandaloneWindow;
                        !l && this.checkReadyForExit(t, n, r),
                        this.componentExit[n].componentInfo = r,
                        l && (this.componentExit[n].componentRef = i,
                        this.obtainRef_Exit(t, n, r.component)),
                        this.removeComponent(t, n, !1)
                    }
                },
                childWindowReady: function(t, e, n, i) {
                    var o = this;
                    n.addEventListener("beforeunload", function(a) {
                        var s = o.standaloneRefreshKeepStatus
                          , r = i.componentData[t].componentList.filter(function(t) {
                            return t.id === e
                        })[0]
                          , l = !r.disableStandaloneWithStatus && o.migrateCompleteStatusInStandaloneWindow;
                        l ? (o.componentExit[e].tempDocument = document.createDocumentFragment(),
                        o.componentExit[e].tempDocument.appendChild(i.getComponentById(t, e).$el)) : (r = i.componentData[t].componentList.filter(function(t) {
                            return t.id === e
                        })[0],
                        r = d()({}, r),
                        i.checkReadyForExit(t, e, r),
                        o.componentExit[e].tempComponentInfo = r),
                        setTimeout(function() {
                            i._beginBack || n.closed || l || r.disableStandaloneWithStatus || (s = s || confirm("Do you want to save and keep status (if support) after refresh?"),
                            s ? (o.componentExit[e].componentInfo = o.componentExit[e].tempComponentInfo,
                            delete o.componentExit[e].tempComponentInfo) : (delete o.componentExit[e].tempDocument,
                            delete o.componentExit[e].tempComponentInfo))
                        }, 100)
                    })
                },
                backToWindow: function(t) {
                    this._beginBack = !0;
                    var e = this.componentData[t].activeComponent
                      , n = this.componentData[t].componentList.filter(function(t) {
                        return t.id === e
                    })[0];
                    n = d()({}, n),
                    !(!n.disableStandaloneWithStatus && this.migrateCompleteStatusInStandaloneWindow) && this.checkReadyForExit(t, e, n),
                    window.opener.Layout[this._uid].componentBack(this.standaloneItemId_origin, e, n)
                },
                componentBack: function(t, e, n) {
                    var i = this;
                    this.childWindow[t + "_" + e] && this.childWindow[t + "_" + e].close(),
                    this.childWindow[t + "_" + e] && this.childWindow[t + "_" + e].close();
                    var o = !n.disableStandaloneWithStatus && this.migrateCompleteStatusInStandaloneWindow
                      , a = this.componentExit[e].componentRef;
                    this.$emit("componentBack", t, e, n, a);
                    var s = function(t) {
                        o && i.$nextTick(function() {
                            a.afterMigrate && a.afterMigrate("back", window, document),
                            i.replaceRef_Exit(t, e, n.component, a);
                            var o = i._getWrapItem(t);
                            o._componentRef = a,
                            o.$options.componentMounted && o.$options.componentMounted.bind(o, a)()
                        })
                    }
                      , r = function(t) {
                        i.componentData[t] || (i.componentData[t] = {
                            componentList: []
                        }),
                        i.componentData[t].componentList.push(n),
                        i.$nextTick(function() {
                            i.toSwitchActiveComponent(t, e)
                        })
                    };
                    this.componentData[t] ? (s(t),
                    r(t)) : (this.$emit("toAddItem", null, "column", !0),
                    this.$nextTick(function() {
                        var t = i.theLeastItemAdded;
                        s(t),
                        r(t)
                    }))
                },
                debounce: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default"
                      , n = this
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100
                      , o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    this[e + "__time"] ? (this[e + "__time"] += i,
                    setTimeout(function() {
                        n[e + "__time"] -= i,
                        0 === n[e + "__time"] && o && t()
                    }, i)) : (this[e + "__time"] = i,
                    !o && t(),
                    setTimeout(function() {
                        n[e + "__time"] -= i,
                        0 === n[e + "__time"] && o && t()
                    }, i))
                }
            },
            props: {
                wrapList: {
                    default: function() {}
                },
                wrapComponent: {
                    default: function() {
                        return n(182)
                    }
                },
                wrapProps: {},
                wrapListeners: {},
                failureComponent: {
                    default: function() {
                        return n(180)
                    }
                },
                failureProps: {},
                failureListeners: {},
                loadingComponent: {
                    default: function() {
                        return n(181)
                    }
                },
                loadingProps: {},
                loadingListeners: {},
                transitionDuration: {
                    default: 200
                },
                minLoadingTime: {},
                loadingWhileSwitchComponent: {
                    default: !1
                },
                loadingWhileChangeComponent: {
                    default: !1
                },
                autoRemoveItemWhenEmpty: {
                    default: !0
                },
                defaultCreateComponentName: {
                    default: ""
                },
                defaultCreateComponentProps: {
                    default: function() {}
                },
                changeComponentRerender: {
                    default: !1
                },
                autoSelectActiveComponent: {
                    default: !0
                },
                migrateCompleteStatusInStandaloneWindow: {},
                noCopyAttributeFromComponentList: {
                    default: function() {
                        return []
                    }
                },
                presetComponents: {},
                itemDataIdList: {},
                componentList: {},
                componentData: {},
                searchItemInGlobal: {
                    default: !1
                },
                renderWithoutCheckTarget: {
                    default: !1
                }
            },
            components: {
                fadeTransiton: p.a
            }
        }
    },
    302: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = {
            name: "failureComponent",
            data: function() {
                return {}
            },
            computed: {},
            watch: {},
            mounted: function() {},
            methods: {
                toUpdateItemComponent: function() {
                    this.$emit("toUpdateItemComponent")
                },
                toUpdateItem: function() {
                    this.$emit("toUpdateItem")
                },
                toSwitchActiveComponent: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.componentId;
                    this.$emit("toSwitchActiveComponent", t)
                },
                reloadComponent: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.componentId
                      , e = arguments[1];
                    this.$emit("reloadComponent", {
                        componentId: t,
                        componentInfo: e
                    })
                },
                removeComponent: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.componentId;
                    this.$emit("removeComponent", t, disableRemoveEmptyItem)
                },
                changeComponent: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.componentId
                      , e = arguments[1];
                    this.$emit("changeComponent", {
                        componentId: t,
                        componentInfo: e
                    })
                }
            },
            props: {
                itemId: {},
                componentId: {},
                componentList: {},
                componentData: {},
                itemFocused: {},
                inStandaloneWindow: {}
            },
            components: {}
        }
    },
    303: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = {
            name: "loadingComponent",
            data: function() {
                return {}
            },
            computed: {},
            watch: {},
            mounted: function() {},
            methods: {
                toUpdateItemComponent: function() {
                    this.$emit("toUpdateItemComponent")
                },
                toUpdateItem: function() {
                    this.$emit("toUpdateItem")
                },
                toSwitchActiveComponent: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.componentId;
                    this.$emit("toSwitchActiveComponent", t)
                },
                reloadComponent: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.componentId
                      , e = arguments[1];
                    this.$emit("reloadComponent", {
                        componentId: t,
                        componentInfo: e
                    })
                },
                removeComponent: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.componentId;
                    this.$emit("removeComponent", t, disableRemoveEmptyItem)
                },
                changeComponent: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.componentId
                      , e = arguments[1];
                    this.$emit("changeComponent", {
                        componentId: t,
                        componentInfo: e
                    })
                }
            },
            props: {
                itemId: {},
                componentId: {},
                componentList: {},
                componentData: {},
                itemFocused: {},
                inStandaloneWindow: {}
            },
            components: {}
        }
    },
    304: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = {
            name: "wrapEmpty",
            data: function() {
                return {}
            },
            computed: {},
            watch: {},
            activated: function() {},
            deactivated: function() {},
            mounted: function() {
                this.$emit("toUpdateItemComponent")
            },
            beforeDestroy: function() {},
            methods: {},
            props: {},
            components: {}
        }
    },
    305: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = {
            name: "vue-icon",
            props: {
                iconClass: {
                    type: String,
                    required: !0
                }
            },
            computed: {
                iconName: function() {
                    return -1 === this.iconClass.indexOf(":") ? "#icon-common:" + this.iconClass : 0 !== this.iconClass.indexOf("icon-") ? "#icon-" + this.iconClass : "#" + this.iconClass
                }
            }
        }
    },
    306: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(192)
          , o = n.n(i)
          , a = n(327)
          , s = n(329)
          , r = n(328)
          , l = n(76)
          , c = n(318)
          , d = n(321);
        Vue.use(a.a),
        e.default = {
            name: "Popover",
            data: function() {
                return {
                    isToggled: !1,
                    couldAlive: !0,
                    outOfViewport: !1,
                    left_: "",
                    right_: "",
                    top_: "",
                    bottom_: "",
                    direction_: "",
                    lastTargetOrEvent_: null,
                    rootElement_: "",
                    arrowStyle: {
                        top: "",
                        left: ""
                    },
                    directionClass: "",
                    contentHeight: "",
                    contentWidth: "",
                    window_rect: {
                        top: 0,
                        left: 0,
                        right: n.i(l.a)().width,
                        bottom: n.i(l.a)().height,
                        width: n.i(l.a)().width,
                        height: n.i(l.a)().height
                    }
                }
            },
            computed: {},
            watch: {
                defaultDirection: {
                    handler: function(t, e) {
                        this.direction_ = t
                    },
                    immediate: !0
                },
                rootElement: {
                    handler: function(t, e) {
                        t && !n.i(s.a)(t) ? this.rootElement_ = document.querySelector(t) || {
                            getBoundingClientRect: function() {
                                return {
                                    top: 0,
                                    left: 0,
                                    right: n.i(l.a)().width,
                                    bottom: n.i(l.a)().height,
                                    width: n.i(l.a)().width,
                                    height: n.i(l.a)().height
                                }
                            }
                        } : this.rootElement_ = {
                            getBoundingClientRect: function() {
                                return {
                                    top: 0,
                                    left: 0,
                                    right: n.i(l.a)().width,
                                    bottom: n.i(l.a)().height,
                                    width: n.i(l.a)().width,
                                    height: n.i(l.a)().height
                                }
                            }
                        }
                    },
                    immediate: !0
                },
                isToggled: {
                    handler: function(t, e) {
                        var i = this;
                        t ? (this.couldAlive = !0,
                        this.inWindowViewScope && this._updateWindowSizeInfo(),
                        this.updatePositionWhileResize ? window.addEventListener("resize", this._event_autoUpdatePosition) : window.removeEventListener("resize", this._event_autoUpdatePosition),
                        this.updatePositionWhileScroll ? (window.addEventListener("scroll", this._event_autoUpdatePosition),
                        this._scrollElement = this._scrollElement || n.i(l.b)(this.$el, 20, null, !0),
                        this._scrollElement && this._scrollElement.forEach(function(t) {
                            t && t.addEventListener("scroll", i._event_autoUpdatePosition)
                        })) : (this._scrollElement = this._scrollElement || n.i(l.b)(this.$el, 20, null, !0),
                        window.removeEventListener("scroll", this._event_autoUpdatePosition),
                        this._scrollElement && this._scrollElement.forEach(function(t) {
                            t && t.removeEventListener("scroll", i._event_autoUpdatePosition)
                        })),
                        this.closeByScroll ? this._scrollElement && this._scrollElement.forEach(function(t) {
                            t && t.addEventListener("scroll", i._event_closeByScroll)
                        }) : this._scrollElement && this._scrollElement.forEach(function(t) {
                            t && t.removeEventListener("scroll", i._event_closeByScroll)
                        })) : this.keepInnerAlive || setTimeout(function() {
                            i.isToggled || (i.couldAlive = !1)
                        }, this.transitionDuration)
                    },
                    immediate: !0
                },
                outOfViewport: function(t, e) {
                    this.updatePosition()
                }
            },
            created: function() {
                var t = this;
                this._event_autoUpdatePosition = this._event_autoUpdatePosition || n.i(r.a)(function(e) {
                    t._updateWindowSizeInfo(),
                    t.isToggled && (t.updatePosition(),
                    setTimeout(t.updatePosition, 1e3))
                }, 200),
                this._event_closeByScroll = this._event_closeByScroll || function(e) {
                    t.closeByScroll && t.close()
                }
            },
            beforeDestroy: function() {
                var t = this;
                window.removeEventListener("resize", this._event_autoUpdatePosition),
                window.removeEventListener("scroll", this._event_autoUpdatePosition),
                this._scrollElement && this._scrollElement.forEach(function(e) {
                    e && e.removeEventListener("scroll", t._event_autoUpdatePosition),
                    e && e.removeEventListener("scroll", t._event_closeByScroll)
                })
            },
            methods: {
                toggleByEvent: function(t, e) {
                    var n = this;
                    setTimeout(function() {
                        n._toggle(t, null, e)
                    })
                },
                toggleByTarget: function(t, e) {
                    var n = this;
                    setTimeout(function() {
                        t = t || n.$refs.trigger && (n.$refs.trigger || n.$refs.trigger.firstElementChild),
                        n._toggle(null, t, e)
                    })
                },
                close: function(t) {
                    var e = this;
                    setTimeout(function() {
                        e.__lastClose && (e.contentHeight = e.contentWidth = "",
                        e.__lastClose = !1),
                        e.$emit("onClose", t)
                    }, this.transitionDuration),
                    this.$emit("onCloseBegin", t),
                    this.isToggled = !1,
                    this.__lastClose = !0
                },
                updatePosition: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lastTargetOrEvent_;
                    this.contentHeight = this.contentWidth = "",
                    this.top_ = 0,
                    this.bottom_ = "",
                    this.left_ = 0,
                    this.right_ = "",
                    e && n.i(s.a)(e) && this.$nextTick(function() {
                        t.isToggled && t._update_position(null, e)
                    }),
                    e && !n.i(s.a)(e) && this.$nextTick(function() {
                        t.isToggled && t._update_position(e, null)
                    })
                },
                updateResize: function() {
                    var t = this;
                    this.contentHeight = this.contentWidth = "",
                    this.$nextTick(function() {
                        t._updateResize(t.direction_, !0)
                    })
                },
                _updateWindowSizeInfo: function() {
                    this.window_rect = {
                        top: 0,
                        left: 0,
                        right: n.i(l.a)().width,
                        bottom: n.i(l.a)().height,
                        width: n.i(l.a)().width,
                        height: n.i(l.a)().height
                    }
                },
                _trigger_click: function(t) {
                    this.triggerByClick && this.toggleByTarget()
                },
                _trigger_contextmenu: function(t) {
                    this.triggerByContextmenu && (this.toggleByTarget(),
                    t.stopPropagation(),
                    t.preventDefault())
                },
                _trigger_mouseleave: function(t) {
                    var e = this;
                    this.__readyLeave = !0,
                    setTimeout(function() {
                        e.__readyLeave && (e.triggerByHover && e.__hover && e.close(),
                        e.__hover = !1,
                        e.__readyLeave = !1)
                    }, this.hoverLeaveDelay)
                },
                _trigger_mousemove: function(t) {
                    this.__readyLeave = !1
                },
                _trigger_mouseenter: function(t) {
                    var e = this;
                    this.$nextTick(function() {
                        e.__hover = !0,
                        e.isToggled || e.triggerByHover && e.toggleByTarget()
                    })
                },
                _trigger_active: function(t) {
                    var e = this;
                    if (this.triggerByActive) {
                        this.toggleByTarget();
                        var n = function t(n) {
                            document.removeEventListener("mouseup", t),
                            e.close()
                        };
                        document.addEventListener("mouseup", n)
                    }
                },
                _clickOutside: function(t) {
                    var e = this.lastTargetOrEvent_
                      , i = e && ("contextmenu" !== e.type || ("mousedown" === t.type || "touchstart" === t.type));
                    if (this.isToggled && i) {
                        var o = !1;
                        n.i(s.a)(e) && this.closeByClickAgain && (o = e.contains(t.srcElement || t.target) || e === (t.srcElement || t.target)),
                        this.closeByClickOutside && !o && this.close(t)
                    }
                },
                _toggle: function(t, e, n) {
                    var i = this;
                    (this.__toggleTransition || this.__lastClose) && this.autoResize && (this.contentHeight || this.contentWidth) || (setTimeout(function() {
                        i.__lastClose && (i.contentHeight = i.contentWidth = "",
                        i.__lastClose = !1),
                        i.__toggleTransition = !1
                    }, this.transitionDuration),
                    this.isToggled && (this.__lastClose = !0),
                    this.__toggleTransition = !0,
                    this.isToggled = !this.closeByClickAgain || !this.isToggled,
                    this.$emit("onToggle", t, e, n),
                    this.isToggled ? (this.direction_ = n && n.direction || this.direction_,
                    this.$nextTick(function() {
                        i._update_position(t, e),
                        setTimeout(function() {
                            i.$emit("onOpen", t)
                        }, i.transitionDuration),
                        i.$emit("onOpenBegin", t)
                    })) : (setTimeout(function() {
                        i.$emit("onClose", t)
                    }, this.transitionDuration),
                    this.$emit("onCloseBegin", t)))
                },
                _update_position: function(t, e) {
                    if (this.rootElement && !n.i(s.a)(this.rootElement) ? this.rootElement_ = document.querySelector(this.rootElement) || document.body : this.rootElement && (this.rootElement_ = this.rootElement),
                    t && e)
                        return console.error("should not input both event and target"),
                        !1;
                    this.lastTargetOrEvent_ = t || e;
                    var i = u(t, e, this.positionMode)
                      , o = i.offsetParent_rect
                      , a = f(t, e, this.positionMode)
                      , r = a.target_rect;
                    if (this.closeWhileTargetNotInViewport || this.hideWhileTargetNotInViewport) {
                        var l = this.rootElement_.getBoundingClientRect()
                          , c = r.top_original || r.top
                          , d = r.left_original || r.left
                          , m = r.bottom
                          , h = r.right;
                        c > l.bottom || m < l.top || d > l.right || h < l.left || !this.inWindowViewScope || c > this.window_rect.bottom || m < this.window_rect.top || d > this.window_rect.right || h < this.window_rect.left ? (this.closeWhileTargetNotInViewport && this.close(),
                        this.hideWhileTargetNotInViewport && (this.outOfViewport = !0)) : this.outOfViewport = !1
                    }
                    var p = this.$refs && this.$refs.popover;
                    if (p && p.getBoundingClientRect) {
                        var g = p.getBoundingClientRect()
                          , v = this._update_direction(r, g, o);
                        this.top_ = v.top + "px",
                        this.left_ = v.left + "px",
                        this.$emit("onUpdatePosition", v)
                    }
                },
                _update_direction: function(t, e, n) {
                    var i = this
                      , a = this.alignCenter ? this.directionList.filter(function(t) {
                        return -1 !== ["top", "right", "bottom", "left"].indexOf(t)
                    }) : this.directionList.filter(function(t) {
                        return -1 !== ["top", "top_left", "top_right", "right", "right_top", "right_bottom", "bottom", "bottom_left", "bottom_right", "left", "left_top", "left_bottom"].indexOf(t)
                    })
                      , s = this.direction_
                      , r = h(s, t, e, this.alignCenter, this.marginToTarget, this.arrowMaxMargin)
                      , l = r.left
                      , c = r.top
                      , d = a.length
                      , p = this.rootElement_.getBoundingClientRect();
                    if (!this.centerInRootElement) {
                        for (; d > 0 && this.autoAdjust && (!m(s, l, c, this.positionMode, e, p, n) || this.inWindowViewScope && !m(s, l, c, this.positionMode, e, this.window_rect, n)); ) {
                            this.contentHeight = "",
                            this.contentWidth = "";
                            s = a[(a.indexOf(s) + 1) % a.length],
                            r = h(s, t, e, this.alignCenter, this.marginToTarget, this.arrowMaxMargin),
                            l = r.left,
                            c = r.top,
                            d--
                        }
                        this.smartUpdatePosition && (!function(t, e, n, o) {
                            var a = void 0
                              , s = void 0
                              , r = void 0
                              , l = void 0
                              , c = void 0;
                            t.forEach(function(t) {
                                var d = 0
                                  , m = 0
                                  , u = h(t, e, n, i.alignCenter, i.marginToTarget, i.arrowMaxMargin)
                                  , f = u.left
                                  , g = u.top;
                                if (i.rootElement ? (g += o.top - p.top,
                                f += o.left - p.left) : (g += o.top,
                                f += o.left),
                                "absolute" === i.positionMode) {
                                    var v = i.lastTargetOrEvent_
                                      , _ = "absolute" === i.positionMode && v && v.offsetParent && v.offsetParent.scrollTop || 0
                                      , w = "absolute" === i.positionMode && v && v.offsetParent && v.offsetParent.scrollLeft || 0;
                                    g -= _,
                                    f -= w
                                }
                                d = f - i.autoResizeMargin < 0 ? f - i.autoResizeMargin : f + i.autoResizeMargin + n.width > p.width ? p.width - f - n.width - i.autoResizeMargin : p.width - n.width - i.autoResizeMargin,
                                m = g - i.autoResizeMargin < 0 ? g - i.autoResizeMargin : g + i.autoResizeMargin + n.height > p.height ? p.height - g - n.height - i.autoResizeMargin : p.height - n.height - i.autoResizeMargin,
                                a = void 0 === a ? d : a,
                                s = void 0 === s ? m : s,
                                r = r || t,
                                d + m >= a + s && (d > 0 && m > 0 && (l = t,
                                t === i.defaultDirection && (c = !0)),
                                r = t,
                                a = d,
                                s = m)
                            }),
                            i.__smartDirection = c ? i.defaultDirection : l || r,
                            i.__smartDirection
                        }(a, t, e, n),
                        this.__smartDirection && (s = this.__smartDirection,
                        r = h(s, t, e, this.alignCenter, this.marginToTarget, this.arrowMaxMargin)))
                    }
                    return r = this._updateResize(s),
                    this.lastTargetOrEvent_.offsetParent && (this.direction_ = s),
                    o()({}, r, {
                        direction: s
                    })
                },
                _updateResize: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.direction_
                      , e = arguments[1]
                      , n = 0
                      , i = 0
                      , a = this.lastTargetOrEvent_
                      , s = u(a, a, this.positionMode)
                      , r = s.offsetParent_rect
                      , l = f(a, a, this.positionMode)
                      , c = l.target_rect
                      , d = this.$refs && this.$refs.popover && this.$refs.popover.getBoundingClientRect()
                      , m = this.rootElement_.getBoundingClientRect()
                      , g = {};
                    this.inWindowViewScope && (g.top = Math.max(this.window_rect.top, m.top),
                    g.bottom = Math.min(this.window_rect.bottom, m.bottom),
                    g.left = Math.max(this.window_rect.left, m.left),
                    g.right = Math.min(this.window_rect.right, m.right),
                    g.height = g.bottom - g.top,
                    g.width = g.right - g.left);
                    var v = void 0;
                    if (this.centerInRootElement) {
                        if (v = p(t, r, d, g),
                        this.autoResize) {
                            var _ = g.height - d.height - 2 * this.autoResizeMargin - 2 * this.wrapperPadding
                              , w = g.width - d.width - 2 * this.autoResizeMargin - 2 * this.wrapperPadding;
                            if (_ < 0) {
                                v.top -= _ / 2 + this.wrapperPadding;
                                var C = d.height + _;
                                this.contentHeight = C + "px"
                            }
                            if (w < 0) {
                                v.left -= w / 2 + this.wrapperPadding;
                                var y = d.width + w;
                                this.contentWidth = y + "px"
                            }
                        }
                        this.$emit("onUpdateResize", o()({
                            direction: t
                        }, v))
                    } else {
                        if (v = h(t, c, d, this.alignCenter, this.marginToTarget, this.arrowMaxMargin),
                        this.autoResize || this.smartUpdatePosition) {
                            var L = "absolute" === this.positionMode && a && a.offsetParent && a.offsetParent.scrollTop || 0
                              , b = "absolute" === this.positionMode && a && a.offsetParent && a.offsetParent.scrollLeft || 0;
                            if (this.rootElement) {
                                var x = g.top
                                  , I = g.left;
                                "fixed" === this.positionMode ? (L = x,
                                b = I) : this.lastTargetOrEvent_.offsetParent && (L = x - r.top,
                                b = I - r.left)
                            } else
                                L -= r.top,
                                b -= r.left;
                            var R = v.top - L
                              , S = v.left - b
                              , M = void 0
                              , D = R
                              , $ = S
                              , T = "fixed" === this.positionMode ? c.top - g.top + g.bottom - c.bottom : 0 - L + c.top + (g.bottom - c.bottom);
                            if ("right" === t.split("_")[0] || "left" === t.split("_")[0] ? T = g.height : ("fixed" === this.positionMode ? T = "bottom" === t.split("_")[0] ? g.bottom - c.bottom : c.top - g.top : "bottom" === t.split("_")[0] ? T -= c.top : T -= g.bottom - c.bottom,
                            T -= 4,
                            D = this.autoResizeMargin),
                            T && (R - 1 * this.autoResizeMargin < 0 && (n = 0 - R + 1 * this.autoResizeMargin,
                            v.top = L + this.autoResizeMargin,
                            d.height + 2 * this.autoResizeMargin > T && (M = T - 2 * this.autoResizeMargin - 2 * this.wrapperPadding)),
                            R + 1 * this.autoResizeMargin + d.height > T && (M = R <= 0 ? T - 2 * this.autoResizeMargin - 2 * this.wrapperPadding : T - D - 1 * this.autoResizeMargin - 2 * this.wrapperPadding)),
                            void 0 !== M && this.autoResize) {
                                var E = Math.max(0, Math.min(d.height, M));
                                d.height !== E && E ? this.contentHeight = E + "px" : this.contentHeight = ""
                            }
                            var k = void 0
                              , W = "fixed" === this.positionMode ? c.left - g.left + g.right - c.right : 0 - b + c.left + (g.right - c.right);
                            if ("top" === t.split("_")[0] || "bottom" === t.split("_")[0] ? W = g.width : ("fixed" === this.positionMode ? W = "right" === t.split("_")[0] ? g.right - c.right : c.left - g.left : "right" === t.split("_")[0] ? W -= c.left : W -= g.right - c.right,
                            W -= 4,
                            $ = this.autoResizeMargin),
                            W && (S - 1 * this.autoResizeMargin < 0 && (i = 0 - S + 1 * this.autoResizeMargin,
                            v.left = b + this.autoResizeMargin,
                            d.width + 2 * this.autoResizeMargin > W && (k = W - 2 * this.autoResizeMargin - 2 * this.wrapperPadding)),
                            S + 1 * this.autoResizeMargin + d.width > W && (k = S <= 0 ? W - 2 * this.autoResizeMargin - 2 * this.wrapperPadding : W - $ - 1 * this.autoResizeMargin - 2 * this.wrapperPadding)),
                            void 0 !== k && this.autoResize) {
                                var B = Math.max(0, Math.min(d.width, k));
                                d.width !== B && B ? this.contentWidth = B + "px" : this.contentWidth = ""
                            }
                        }
                        this.directionClass = t.split("_")[0];
                        var N = this.contentWidth ? parseInt(this.contentWidth) - 7 : d.width - 7
                          , A = this.contentHeight ? parseInt(this.contentHeight) - 7 : d.height - 7;
                        2 === t.split("_").length ? (this.arrowStyle = {},
                        v.arrowTop && (this.arrowStyle.top = Math.min(A, Math.max(7, v.arrowTop - n)) + "px"),
                        v.arrowLeft && (this.arrowStyle.left = Math.min(N, Math.max(7, v.arrowLeft - i)) + "px")) : (this.arrowStyle = {
                            resizeLeftMargin: i
                        },
                        v.arrowTop && (this.arrowStyle.top = Math.min(A, Math.max(7, d.height / 2 - 2.825 - n)) + "px"),
                        v.arrowLeft && (this.arrowStyle.left = Math.min(N, Math.max(7, d.width / 2 - 0 - i)) + "px")),
                        e && (this.top_ = v.top + "px",
                        this.left_ = v.left + "px"),
                        this.$emit("onUpdateResize", o()({
                            direction: t
                        }, v))
                    }
                    return v
                }
            },
            props: {
                rootElement: {
                    default: ""
                },
                centerInRootElement: {
                    default: !1
                },
                transitionDuration: {
                    type: Number,
                    default: 300
                },
                updatePositionTransitionDuration: {
                    type: Number,
                    default: 100
                },
                transitionType: {
                    type: String,
                    default: "fade"
                },
                alignCenter: {
                    type: Boolean,
                    default: !1
                },
                keepInnerAlive: {
                    type: Boolean,
                    default: !0
                },
                triggerByClick: {
                    type: Boolean,
                    default: !0
                },
                triggerByContextmenu: {
                    type: Boolean,
                    default: !1
                },
                triggerByHover: {
                    type: Boolean,
                    default: !1
                },
                triggerByActive: {
                    type: Boolean,
                    default: !1
                },
                hoverLeaveDelay: {
                    type: Number,
                    default: 200
                },
                closeByClickOutside: {
                    type: Boolean,
                    default: !0
                },
                closeByClickAgain: {
                    type: Boolean,
                    default: !0
                },
                marginToTarget: {
                    type: Number,
                    default: 10
                },
                wrapperPadding: {
                    type: Number,
                    default: 6
                },
                backgroundColor: {
                    type: String,
                    default: "#fff"
                },
                showArrow: {
                    type: Boolean,
                    default: !0
                },
                arrowMaxMargin: {
                    type: Number,
                    default: 300
                },
                shownIndex: {
                    type: Number,
                    default: 99
                },
                defaultDirection: {
                    type: String,
                    default: "bottom"
                },
                directionList: {
                    type: Array,
                    default: function() {
                        return ["top", "top_left", "top_right", "right", "right_top", "right_bottom", "bottom", "bottom_left", "bottom_right", "left", "left_top", "left_bottom"]
                    }
                },
                positionMode: {
                    type: String,
                    default: "absolute"
                },
                autoAdjust: {
                    type: Boolean,
                    default: !0
                },
                smartUpdatePosition: {
                    type: Boolean,
                    default: !1
                },
                autoResize: {
                    type: Boolean,
                    default: !1
                },
                autoResizeMargin: {
                    type: Number,
                    default: 6
                },
                updatePositionWhileResize: {
                    type: Boolean,
                    default: !0
                },
                updatePositionWhileScroll: {
                    type: Boolean,
                    default: !0
                },
                closeWhileTargetNotInViewport: {
                    type: Boolean,
                    default: !1
                },
                hideWhileTargetNotInViewport: {
                    type: Boolean,
                    default: !1
                },
                inWindowViewScope: {
                    type: Boolean,
                    default: !0
                },
                closeByScroll: {
                    type: Boolean,
                    default: !1
                }
            },
            components: {
                fade: d.a,
                collapse: c.a
            }
        };
        var m = function(t, e, n, i, o, a, s) {
            s = s || a;
            var r = void 0
              , l = void 0
              , c = void 0
              , d = void 0;
            return "absolute" === i ? (r = a.left - s.left,
            l = a.right - s.right + s.width,
            c = a.top - s.top,
            d = a.bottom - s.bottom + s.height) : (r = a.left,
            l = a.right,
            c = a.top,
            d = a.bottom),
            !(e < r || e + o.width > l + .005 || n < c || n + o.height > d + .005)
        }
          , h = function(t, e, n, i) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4
              , a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 30
              , s = e.top
              , r = e.left
              , l = (e.height - n.height) / 2
              , c = (e.width - n.width) / 2
              , d = void 0
              , m = void 0;
            if (i) {
                switch (t.split("_")[0]) {
                case "top":
                    l = 0 - n.height - o,
                    m = Math.max(8, Math.min(e.width / 2 - 4, a));
                    break;
                case "right":
                    c = e.width + o,
                    d = Math.max(8, Math.min(e.height / 2 - 4, a));
                    break;
                case "bottom":
                    l = e.height + o,
                    m = Math.max(8, Math.min(e.width / 2 - 4, a));
                    break;
                case "left":
                    c = 0 - n.width - o,
                    d = Math.max(8, Math.min(e.height / 2 - 4, a))
                }
                return {
                    top: s + l,
                    left: r + c,
                    arrowTop: d,
                    arrowLeft: m
                }
            }
            switch (t) {
            case "top":
                l = 0 - n.height - o,
                m = Math.max(8, Math.min(e.width / 2 - 4, a));
                break;
            case "top_left":
                l = 0 - n.height - o,
                c = 0,
                m = Math.max(12, Math.min(e.width / 2, a));
                break;
            case "top_right":
                l = 0 - n.height - o,
                c = e.width - n.width,
                m = n.width - Math.max(12, Math.min(e.width / 2, a));
                break;
            case "right":
                c = e.width + o,
                d = Math.max(8, Math.min(e.height / 2 - 4, a));
                break;
            case "right_top":
                c = e.width + o,
                l = 0,
                d = Math.max(8, Math.min(e.height / 2 - 4, a));
                break;
            case "right_bottom":
                c = e.width + o,
                l = e.height - n.height,
                d = n.height - Math.max(12, Math.min(e.height / 2 + 4, a));
                break;
            case "bottom":
                l = e.height + o,
                m = Math.max(8, Math.min(e.width / 2 - 4, a));
                break;
            case "bottom_left":
                l = e.height + o,
                c = 0,
                m = Math.max(12, Math.min(e.width / 2, a));
                break;
            case "bottom_right":
                l = e.height + o,
                c = e.width - n.width,
                m = n.width - Math.max(12, Math.min(e.width / 2, a));
                break;
            case "left":
                c = 0 - n.width - o,
                d = Math.max(8, Math.min(e.height / 2 - 4, a));
                break;
            case "left_top":
                c = 0 - n.width - o,
                l = 0,
                d = Math.max(8, Math.min(e.height / 2 - 4, a));
                break;
            case "left_bottom":
                c = 0 - n.width - o,
                l = e.height - n.height,
                d = n.height - Math.max(12, Math.min(e.height / 2 + 4, a))
            }
            return {
                top: s + l,
                left: r + c,
                arrowTop: d,
                arrowLeft: m
            }
        }
          , p = function(t, e, n, i) {
            var o = i.width - n.width;
            return {
                top: (i.height - n.height) / 2 - (e.top - i.top),
                left: o / 2 - (e.left - i.left),
                arrowTop: 0,
                arrowLeft: 0
            }
        }
          , u = function(t, e, n) {
            var i = void 0;
            if (t && (t.srcElement || t.target)) {
                var o = t.srcElement || t.target;
                i = o && o.getBoundingClientRect()
            } else if (e) {
                var a = "absolute" === n ? e.offsetParent : document.body;
                i = a.getBoundingClientRect()
            }
            return {
                offsetParent: void 0,
                offsetParent_rect: i
            }
        }
          , f = function(t, e, n) {
            var i = void 0;
            if (t && (t.srcElement || t.target)) {
                var o = t.layerX || t.offsetX
                  , a = t.layerY || t.offsetY;
                i = {
                    top: "absolute" === n ? a + 1 : t.clientY + 1,
                    left: "absolute" === n ? o + 1 : t.clientX + 1,
                    width: 0,
                    height: 0
                }
            } else if (e && (i = e.getBoundingClientRect(),
            "absolute" === n)) {
                var s = {};
                for (var r in i)
                    s[r] = i[r];
                e.offsetParent.scrollLeft,
                e.offsetParent.scrollTop;
                s.left_original = s.left,
                s.top_original = s.top,
                s.left = e.offsetLeft,
                s.top = e.offsetTop,
                i = s
            }
            return {
                target: e,
                target_rect: i
            }
        }
    },
    307: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(124)
          , o = n.n(i)
          , a = n(42)
          , s = n.n(a)
          , r = n(77)
          , l = n.n(r)
          , c = n(336)
          , d = n.n(c)
          , m = n(191)
          , h = n.n(m)
          , p = n(333)
          , u = n.n(p)
          , f = n(326)
          , g = n(740)
          , v = n.n(g)
          , _ = n(741)
          , w = n.n(_)
          , C = n(765)
          , y = n.n(C)
          , L = (n(190),
        n(734))
          , b = n.n(L)
          , x = n(733)
          , I = n.n(x)
          , R = n(283);
        n.n(R);
        n(727),
        n(731);
        var S = function() {
            var t = u()(d.a.mark(function t(e) {
                var i = this;
                return d.a.wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", new h.a(function() {
                                var t = u()(d.a.mark(function t(o, a) {
                                    var s;
                                    return d.a.wrap(function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                            case 0:
                                                s = void 0,
                                                t.next = 8;
                                                break;
                                            case 4:
                                                s = t.sent,
                                                s = s.data,
                                                t.next = 11;
                                                break;
                                            case 8:
                                                return t.next = 10,
                                                n(766)("./" + e);
                                            case 10:
                                                s = t.sent;
                                            case 11:
                                                o(s);
                                            case 12:
                                            case "end":
                                                return t.stop()
                                            }
                                    }, t, i)
                                }));
                                return function(e, n) {
                                    return t.apply(this, arguments)
                                }
                            }()));
                        case 1:
                        case "end":
                            return t.stop()
                        }
                }, t, this)
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }();
        e.default = {
            name: "Waterfall_demo",
            data: function() {
                return {
                    logoUrl: b.a,
                    logoSimple: I.a,
                    componentData: {},
                    componentList: {
                        picturePanel: {
                            url: n(739),
                            manualReady: !0
                        }
                    },
                    wrapComponent: n(742),
                    columnWidth: 350,
                    fixColumnSize: !1,
                    fixColumnNumber: 0,
                    marginRight: 20,
                    marginBottom: 20,
                    paddingLeftRight: 20,
                    paddingTopBottom: 20,
                    viewWidth: 0,
                    scaleRatio: 2,
                    quality: .8,
                    itemMinHeight: 50,
                    autoAdjustTimes: 10,
                    dynamicHideAndShow: !1,
                    scrollToBottomMargin: 150,
                    exportShadow: 0,
                    exportRound: 0,
                    picList: [],
                    pathMap: {},
                    currentDir: "",
                    prevDir: null,
                    fileFilterPath: "",
                    showAll: !1,
                    supportExtend: [],
                    settingMap: {},
                    picSize: "",
                    contentFilter: "only",
                    appStyle: "dark",
                    language: "ch",
                    history: JSON.parse(localStorage.getItem("pictureDisplay_history") || "[]")
                }
            },
            provide: function() {
                var t = this;
                return {
                    getNLS: function() {
                        return t.NLS
                    }
                }
            },
            computed: {
                NLS: function() {
                    return y.a[this.language] || {}
                },
                rootDir: function() {
                    return l()(this.pathMap)[0]
                },
                fileFilterPathList: function() {
                    return this.fileFilterPath.split("/")
                },
                subDirList: function() {
                    return l()(this.currentDir ? this.prevDir : this.pathMap)
                },
                picList_computed: function() {
                    var t = this
                      , e = [];
                    return e = this.showAll ? this.picList : this.picList.filter(function(e) {
                        return e.path === t.fileFilterPath
                    }),
                    "only" === this.contentFilter && (e = e.filter(function(e) {
                        var n = -1 !== e.type.indexOf("image");
                        if (!n) {
                            var i = e.name.split(".").pop();
                            n = t.supportExtend.includes(i.trim().toLocaleLowerCase())
                        }
                        return n
                    })),
                    e
                }
            },
            watch: {},
            mounted: function() {
                function t() {
                    return e.apply(this, arguments)
                }
                var e = u()(d.a.mark(function t() {
                    var e;
                    return d.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                S("static/extendList.json");
                            case 2:
                                e = t.sent,
                                this.supportExtend = e,
                                this.initSetting();
                            case 5:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                }));
                return t
            }(),
            methods: {
                initSetting: function() {
                    var t = localStorage.getItem("picDisplay_setting");
                    this.settingMap = t && -1 != t.indexOf("exportShadow") ? JSON.parse(t) : {
                        picSize: "m",
                        fixColumnNumber: this.fixColumnNumber,
                        marginRight: this.marginRight,
                        marginBottom: this.marginBottom,
                        paddingLeftRight: this.paddingLeftRight,
                        paddingTopBottom: this.paddingTopBottom,
                        viewWidth: this.viewWidth,
                        scaleRatio: this.scaleRatio,
                        quality: this.quality,
                        exportShadow: this.exportShadow,
                        exportRound: this.exportRound,
                        contentFilter: this.contentFilter,
                        appStyle: this.appStyle,
                        language: this.language
                    },
                    this.onSettingChange(this.settingMap, !0)
                },
                onScrollToBottom: function(t) {
                    l()(this.componentData).length < this.picList_computed.length && this.generateItem(20)
                },
                uploadDic: function(t) {
                    var e = this;
                    if (this.supportExtend.length > 0 && t.target.value) {
                        var n = t.target.files;
                        this.fileFilterPath = "",
                        this.lastDirPath = "",
                        this.picList = [],
                        this.pathMap = {},
                        this.prevDir = null,
                        this.currentDir = "",
                        this.$set(this, "componentData", {}),
                        this.$refs.waterfall.clearComponentRendered();
                        for (var i in n) {
                            var o = n[i];
                            if (!isNaN(i))
                                if (i < 1e4) {
                                    var a = window.URL.createObjectURL(o)
                                      , r = o.webkitRelativePath.lastIndexOf("/");
                                    r = o.webkitRelativePath.slice(0, r),
                                    this.picList.push(s()({
                                        name: o.name,
                                        size: o.size,
                                        type: o.type,
                                        path: r
                                    }, {
                                        url: a,
                                        id: Math.random().toString(36).substr(2)
                                    })),
                                    this.generateDirPath(o)
                                } else
                                    console.warn("For performance: only support 10000 pictures in this version.")
                        }
                        this.selectDir(this.rootDir),
                        this.saveHistory(),
                        this.$nextTick(function() {
                            e.generateItem(20)
                        })
                    }
                },
                saveHistory: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.rootDir
                      , e = JSON.parse(localStorage.getItem("pictureDisplay_history") || "[]");
                    e = e.filter(function(e) {
                        return e !== t
                    }),
                    e.unshift(t),
                    e.length = e.length > 5 ? 5 : e.length,
                    localStorage.setItem("pictureDisplay_history", o()(e))
                },
                toShowAll: function() {
                    this.showAll = !this.showAll,
                    this.showAll ? this.jumpDir(this.rootDir) : this.lastDirPath && (this.fileFilterPath = this.lastDirPath,
                    this.jumpDir(this.lastDirPath.split("/").pop())),
                    this.displayData()
                },
                toShuffleImage: function() {
                    this.shuffle(this.picList_computed),
                    this.displayData()
                },
                toSetting: function() {
                    this.$refs.settingModal.launch()
                },
                onSettingChange: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.settingMap
                      , e = arguments[1];
                    localStorage.setItem("picDisplay_setting", o()(t));
                    var n = !1;
                    for (var i in t)
                        if (e || t[i] !== this.settingMap[i])
                            switch (this.$set(this.settingMap, i, t[i]),
                            i) {
                            case "picSize":
                                var a = "s" === t[i] ? 200 : "m" === t[i] ? 300 : 400;
                                this.columnWidth = a,
                                n = !0;
                                break;
                            case "fixColumnNumber":
                                this.fixColumnNumber = parseInt(t[i]),
                                n = !0;
                                break;
                            case "marginRight":
                                this.marginRight = parseFloat(t[i]),
                                n = !0;
                                break;
                            case "marginBottom":
                                this.marginBottom = parseFloat(t[i]),
                                n = !0;
                                break;
                            case "paddingLeftRight":
                                this.paddingLeftRight = parseFloat(t[i]),
                                n = !0;
                                break;
                            case "paddingTopBottom":
                                this.paddingTopBottom = parseFloat(t[i]),
                                n = !0;
                                break;
                            case "viewWidth":
                                this.viewWidth = parseFloat(t[i]);
                                break;
                            case "scaleRatio":
                                this.scaleRatio = parseFloat(t[i]);
                                break;
                            case "quality":
                                this.quality = parseFloat(t[i]);
                                break;
                            case "exportShadow":
                                this.exportShadow = parseInt(t[i]);
                                break;
                            case "exportRound":
                                this.exportRound = parseFloat(t[i]);
                                break;
                            case "contentFilter":
                                this.$set(this, "contentFilter", t[i]),
                                n = !0;
                                break;
                            case "appStyle":
                                this.$set(this, "appStyle", t[i]);
                                break;
                            case "language":
                                this.$set(this, "language", t[i])
                            }
                    n && this.displayData()
                },
                setLanguage: function(t) {
                    var e = s()({}, this.settingMap);
                    e.language = t,
                    this.$set(this, "settingMap", e),
                    this.onSettingChange(this.settingMap, !0)
                },
                toReload: function() {
                    "electron" === Vue.$platform || this.$refs.upload.click()
                },
                toDownload: function() {
                    var t = this
                      , e = document.createElement("canvas")
                      , n = e.getContext("2d")
                      , i = this.scaleRatio
                      , o = document.body.querySelector(".Waterfall").clientWidth
                      , a = document.body.querySelector(".Waterfall").offsetTop
                      , s = document.body.querySelector(".Waterfall_layout").scrollTop
                      , r = document.body.querySelectorAll(".waterfall_column")
                      , l = 0;
                    r.forEach(function(t) {
                        l = Math.max(l, t.clientHeight)
                    }),
                    n.clearRect(0, 0, o, l),
                    e.width = o * i,
                    e.height = l * i,
                    n.fillStyle = "dark" === this.appStyle ? "#252526" : "#efefef",
                    n.fillRect(0, 0, e.width, e.height);
                    var c = function(e, o, a) {
                        var s = e.width
                          , r = e.height;
                        try {
                            n.save(),
                            t.exportShadow && (n.shadowOffsetX = 1,
                            n.shadowOffsetY = 1,
                            n.shadowBlur = 10,
                            n.shadowColor = "dark" === t.appStyle ? "rgba(0, 0, 0, 0.5)" : "rgba(196, 196, 196, 0.5)",
                            n.fillStyle = "dark" === t.appStyle ? "#252526" : "#efefef"),
                            t.exportRound ? (n.roundRect(o * i, a * i, s * i, r * i, 1 * t.exportRound || 0),
                            n.fill(),
                            n.clip()) : t.exportShadow && n.fillRect(o * i, a * i, s * i, r * i),
                            n.drawImage(e, o * i, a * i, s * i, r * i),
                            n.restore()
                        } catch (t) {
                            n.restore()
                        }
                    };
                    document.body.querySelectorAll("img.pic").forEach(function(t) {
                        var e = t.getBoundingClientRect()
                          , n = document.querySelector(".Waterfall_layout").getBoundingClientRect()
                          , i = e.left - n.left;
                        c(t, i, e.top + s - a)
                    });
                    var d = e.toDataURL("image/jpeg", this.quality)
                      , m = document.createElement("a");
                    m.href = d,
                    m.download = "screenshots.jpeg";
                    var h = document.createEvent("MouseEvents");
                    if (h.initEvent("click", !0, !1),
                    m.dispatchEvent(h),
                    document.body.appendChild(m),
                    m.remove)
                        m.remove(),
                        URL.revokeObjectURL(d);
                    else {
                        var p = '<img src="' + d + '" style="height: 100%;"/>';
                        window.open("", "_blank").document.body.innerHTML = p
                    }
                },
                jumpDir: function(t) {
                    if (t !== this.currentDir) {
                        var e = this.pathMap
                          , n = ""
                          , i = this.fileFilterPath.split("/")
                          , o = !1
                          , a = [];
                        i.forEach(function(i) {
                            o || (i !== t ? (e = e[i],
                            n = i,
                            a.push(i)) : (a.push(i),
                            e = e[i],
                            n = i,
                            o = !0))
                        }),
                        this.fileFilterPath = a.join("/"),
                        this.currentDir = n,
                        this.prevDir = e,
                        this.displayData(),
                        this.lastDirPath = t !== this.rootDir ? this.fileFilterPath : this.lastDirPath
                    }
                },
                backToPrev: function() {
                    this.jumpDir(this.fileFilterPath.split("/").slice(-2, -1)[0])
                },
                selectDir: function(t) {
                    this.prevDir && this.prevDir !== this.pathMap ? this.$set(this, "fileFilterPath", this.fileFilterPath + "/" + t) : (this.prevDir = this.pathMap,
                    this.$set(this, "fileFilterPath", this.fileFilterPath + t)),
                    this.currentDir = t,
                    this.prevDir = this.prevDir[t],
                    this.displayData(),
                    this.lastDirPath = t !== this.rootDir ? this.fileFilterPath : this.lastDirPath
                },
                refreshData: function() {
                    this.$refs.waterfall.toRefresh()
                },
                displayData: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 20;
                    this.$set(this, "componentData", {}),
                    this.$refs.waterfall.clearComponentRendered(),
                    this.$refs.waterfall.toScrollToTop(),
                    this.$nextTick(function() {
                        t.generateItem(e)
                    })
                },
                generateDirPath: function(t) {
                    var e = t.webkitRelativePath.split("/");
                    e.pop();
                    var n = this.pathMap;
                    e.forEach(function(t, e) {
                        n[t] = n[t] || {},
                        n = n[t]
                    })
                },
                generateItem: function(t) {
                    for (var e = this, n = l()(this.componentData).length, i = 0; i < t; i++) {
                        var o = n + i
                          , a = this.picList_computed[o];
                        a && this.$set(this.componentData, a.id, {
                            activeComponent: "picturePanel",
                            componentList: [{
                                component: "picturePanel",
                                id: "picturePanel",
                                props: {
                                    item: a,
                                    index: o,
                                    isLastOne: o === n + t - 1
                                },
                                listeners: {
                                    onClick: function(t) {
                                        e.$refs.picModal.launch(t)
                                    }
                                }
                            }],
                            wrapProps: {
                                background: "linear-gradient(69.8deg, rgb(" + Math.floor(256 * Math.random()) + ", " + Math.floor(256 * Math.random()) + ", " + Math.floor(256 * Math.random()) + ") 2.8%, \n            rgb(" + Math.floor(256 * Math.random()) + ", " + Math.floor(256 * Math.random()) + ", " + Math.floor(256 * Math.random()) + ") 97.8%)",
                                enterIndex: n + i,
                                component: "picturePanel"
                            }
                        })
                    }
                },
                shuffle: function(t) {
                    for (var e = t.length, n = void 0, i = void 0; 0 !== e; )
                        i = Math.floor(Math.random() * e),
                        e -= 1,
                        n = t[e],
                        t[e] = t[i],
                        t[i] = n;
                    return t
                }
            },
            props: {},
            components: {
                Waterfall: f.a,
                picModal: v.a,
                settingModal: w.a
            }
        },
        CanvasRenderingContext2D.prototype.roundRect = function(t, e, n, i, o) {
            var a = Math.min(n, i);
            return o > a / 2 && (o = a / 2),
            this.beginPath(),
            this.moveTo(t + o, e),
            this.arcTo(t + n, e, t + n, e + i, o),
            this.arcTo(t + n, e + i, t, e + i, o),
            this.arcTo(t, e + i, t, e, o),
            this.arcTo(t, e, t + n, e, o),
            this.closePath(),
            this
        }
    },
    308: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(324);
        e.default = {
            name: "modal",
            data: function() {
                return {
                    isOpen: !1,
                    containerWidth: "",
                    firstTimeForAbout: !1,
                    customRoot: this.$el && this.$el.querySelector(".modalBackground")
                }
            },
            computed: {},
            watch: {},
            mounted: function() {
                Vue.prototype.$modal = this
            },
            methods: {
                launch: function(t) {
                    var e = this;
                    t && (this.__parentElement = this.$el.parentElement,
                    t.append(this.$el));
                    var n = this.getRootElement().querySelector(".modalTarget");
                    this.$refs.popover.toggleByTarget(n),
                    setTimeout(function() {
                        e.containerWidth = e.$refs.slot.clientWidth + "px",
                        e.$refs.popover.updatePosition()
                    }, 0)
                },
                updatePosition: function() {
                    this.containerWidth = "",
                    this.$refs.popover.updatePosition()
                },
                close: function() {
                    this.$refs.popover.close()
                },
                onCloseBegin: function() {
                    this.isOpen = !1
                },
                onClose: function() {
                    this.containerWidth = "",
                    this.__parentElement && this.__parentElement !== this.$el.parentElement && this.__parentElement.append(this.$el),
                    this.firstTimeForAbout = !1,
                    this.$onClose && this.$onClose(),
                    this.$emit("onClose")
                },
                onOpenBegin: function() {
                    this.isOpen = !0
                },
                onOpen: function() {
                    this.$emit("onOpen")
                },
                getRootElement: function() {
                    return this.customRoot || this.$el && this.$el.querySelector(".modalBackground")
                }
            },
            props: {
                closeByClickOutside: {
                    default: !1
                }
            },
            components: {
                Popover: i.a
            }
        }
    },
    309: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = {
            name: "picturePanel",
            inject: ["getNLS"],
            data: function() {
                return {}
            },
            computed: {
                NLS: function() {
                    return this.getNLS()
                },
                itemSize: function() {
                    var t = this.item.size / 1024;
                    return t > 1024 ? (t / 1024).toFixed(1) + "MB" : t.toFixed(1) + "KB"
                }
            },
            watch: {},
            mounted: function() {
                var t = this;
                setTimeout(function() {
                    t.$emit("componentReady")
                }, 400 * Math.random() + 100)
            },
            methods: {
                onClick: function() {
                    this.$emit("onClick", this.item)
                }
            },
            props: {
                item: {},
                index: {},
                isLastOne: {}
            },
            components: {}
        }
    },
    310: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = (n(190),
        n(279))
          , o = n.n(i);
        n(728),
        n(729),
        n(726),
        n(730),
        e.default = {
            name: "picture_modal",
            inject: ["getNLS"],
            data: function() {
                return {
                    picURL: "",
                    currentItem: {},
                    isHor: !1,
                    isMaximise: !1
                }
            },
            computed: {
                NLS: function() {
                    return this.getNLS()
                },
                itemSize: function() {
                    var t = this.currentItem.size / 1024;
                    return t > 1024 ? (t / 1024).toFixed(1) + "MB" : t.toFixed(1) + "KB"
                },
                isFirst: function() {
                    return 0 === this.allItems.indexOf(this.currentItem)
                },
                isLast: function() {
                    return this.allItems.indexOf(this.currentItem) === this.allItems.length - 1
                }
            },
            watch: {},
            mounted: function() {
                var t = this;
                document.addEventListener("keydown", function(e) {
                    t.currentItem && (37 === e.which ? t.toPrev() : 39 === e.which && t.toNext())
                })
            },
            methods: {
                modalClose: function() {
                    this.isMaximise = !1,
                    this.picURL = ""
                },
                toPrev: function() {
                    var t = this.allItems.indexOf(this.currentItem)
                      , e = this.allItems[t - 1];
                    e && this.changeItem(e)
                },
                toNext: function() {
                    var t = this.allItems.indexOf(this.currentItem)
                      , e = this.allItems[t + 1];
                    e && this.changeItem(e)
                },
                changeItem: function(t) {
                    var e = this;
                    this.currentItem = t,
                    this.picURL = t.url,
                    this.$refs.img.onload = function() {
                        e.$refs.modal.updatePosition()
                    }
                    ,
                    -1 === t.type.indexOf("image") && setTimeout(function() {
                        e.$refs.modal.updatePosition()
                    }, 50)
                },
                launch: function(t) {
                    var e = this;
                    this.currentItem = t,
                    this.picURL = t.url,
                    this.$refs.img.onload = function() {
                        e.$refs.modal.launch(document.body.querySelector("#pictureDisplay"))
                    }
                },
                maximise: function() {
                    this.isHor = this.$refs.img.clientHeight > this.$refs.img.clientWidth,
                    this.isMaximise = !this.isMaximise,
                    this.$refs.modal.updatePosition()
                },
                openNewTab: function() {
                    window.open(this.picURL, "_blank")
                }
            },
            props: {
                allItems: {}
            },
            components: {
                Modal: o.a
            }
        }
    },
    311: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(124)
          , o = n.n(i)
          , a = n(279)
          , s = n.n(a);
        e.default = {
            name: "setting_modal",
            inject: ["getNLS"],
            data: function() {
                return {
                    setting_: {},
                    columnNumber: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    paddingLeftRight: 0,
                    paddingTopBottom: 0,
                    viewWidth: 0,
                    scaleRatio: 1,
                    quality: .5,
                    exportShadow: 1,
                    exportRound: 5
                }
            },
            computed: {
                NLS: function() {
                    return this.getNLS()
                }
            },
            watch: {
                setting: {
                    handler: function(t) {
                        this.$set(this, "setting_", JSON.parse(o()(t))),
                        this.$set(this, "columnNumber", t.fixColumnNumber),
                        this.$set(this, "marginRight", t.marginRight),
                        this.$set(this, "marginBottom", t.marginBottom),
                        this.$set(this, "paddingLeftRight", t.paddingLeftRight),
                        this.$set(this, "paddingTopBottom", t.paddingTopBottom),
                        this.$set(this, "viewWidth", t.viewWidth),
                        this.$set(this, "scaleRatio", t.scaleRatio),
                        this.$set(this, "quality", t.quality),
                        this.$set(this, "exportShadow", t.exportShadow),
                        this.$set(this, "exportRound", t.exportRound)
                    },
                    immediate: !0
                }
            },
            mounted: function() {},
            methods: {
                modalClose: function() {},
                launch: function() {
                    this.$refs.modal.launch(document.body.querySelector("#pictureDisplay"))
                },
                updateSetting: function() {
                    this.setting_.fixColumnNumber = this.columnNumber,
                    this.setting_.marginRight = this.marginRight,
                    this.setting_.marginBottom = this.marginBottom,
                    this.setting_.paddingLeftRight = this.paddingLeftRight,
                    this.setting_.paddingTopBottom = this.paddingTopBottom,
                    this.setting_.viewWidth = this.viewWidth,
                    this.setting_.scaleRatio = this.scaleRatio,
                    this.setting_.exportShadow = this.exportShadow,
                    this.setting_.exportRound = this.exportRound,
                    this.quality = Math.max(.3, Math.min(1, this.quality)),
                    this.setting_.quality = this.quality,
                    JSON.parse(o()(this.setting_)) !== JSON.parse(o()(this.setting)) && this.$emit("onSettingChange", this.setting_)
                }
            },
            props: {
                setting: {}
            },
            components: {
                Modal: s.a
            }
        }
    },
    312: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(746)
          , o = n.n(i)
          , a = n(738)
          , s = n.n(a);
        e.default = {
            name: "mainx",
            data: function() {
                return {}
            },
            methods: {},
            components: {
                basicTemplate: o.a,
                Waterfall: s.a
            }
        }
    },
    313: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = {
            name: "waterfall_picture_wrap",
            inheritAttrs: !1,
            data: function() {
                return {
                    ready: !1,
                    show: !1
                }
            },
            computed: {},
            mounted: function() {
                this.show = !0
            },
            methods: {
                onComponentReady: function() {
                    this.ready = !0
                }
            },
            props: {
                itemId: {},
                background: {},
                enterIndex: {},
                component: {}
            }
        }
    },
    314: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(125)
          , o = n.n(i)
          , a = n(77)
          , s = n.n(a)
          , r = n(320)
          , l = n(744)
          , c = n.n(l);
        e.default = {
            name: "Waterfall",
            data: function() {
                return {
                    inStandaloneWindow: !1
                }
            },
            computed: {
                storeRef: function() {
                    return this.$refs.distribute_store
                },
                componentList_computed: function() {
                    return this.componentData
                }
            },
            watch: {},
            beforeCreate: function() {},
            activated: function() {
                this.toAutoAdjust()
            },
            mounted: function() {},
            methods: {
                onAutoAdjust: function() {
                    this.toUpdateComponentData(),
                    this.$emit("onUpdate")
                },
                onScrollToBottom: function(t) {
                    this.$emit("onScrollToBottom", t)
                },
                onScrollToRight: function(t) {
                    this.$emit("onScrollToRight", t)
                },
                toAutoAdjust: function() {
                    this.$refs.layout.autoAdjust()
                },
                toUpdateComponentData: function(t) {
                    this.$refs.distribute_store && this.$refs.distribute_store.update(t)
                },
                toRefresh: function() {
                    this.$refs.layout.refresh()
                },
                restore: function() {
                    this.$refs.layout.scrollToTop()
                },
                toScrollToTop: function() {
                    this.$refs.layout.scrollToTop()
                },
                clearComponentRendered: function() {
                    var t = this;
                    s()(this.componentData).forEach(function(e) {
                        t.$refs.distribute_store && t.$refs.distribute_store.removeComponent(e)
                    })
                },
                _toUpdateItemData: function() {
                    this.__timestamp = Date.now(),
                    this.$set(this.itemData, "toUpdate", this.__timestamp),
                    this.$emit("itemDataUpdated")
                },
                _toUpdateComponentData: function() {
                    this.__timestamp = Date.now(),
                    this.toUpdateComponentData(),
                    this.$emit("componentDataUpdated")
                },
                _emitEvent: function(t) {
                    for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                        n[i - 1] = arguments[i];
                    this.$emit.apply(this, [t].concat(o()(n)))
                },
                notifyResize: function(t) {
                    t = Array.isArray(t) ? t : s()(this.componentData),
                    this.$refs.distribute_store && this.$refs.distribute_store.resize(t)
                },
                addItem: function(t, e) {
                    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                      , i = arguments[3]
                      , o = this.$refs.layout.addItem(t, e, n, i);
                    this.storeRef.itemAdded(o)
                },
                removeItem: function(t) {
                    this.$delete(this.componentData, t)
                },
                updateItem: function(t) {
                    var e = (t.id,
                    this.itemData[t.id]);
                    if (e)
                        for (var n in t)
                            this.$set(e, n, t[n]);
                    else
                        this.$set(this.itemData, t.id, t);
                    this.update()
                },
                addComponent: function(t, e, n) {
                    this.componentData[t] || this.$set(this.componentData, t, {
                        componentList: []
                    }),
                    n && this.componentData[t].componentList.push(n),
                    e && this.switchActiveComponent(t, e)
                },
                removeComponent: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !this.autoRemoveItemWhenEmpty;
                    this.storeRef.removeComponent(t, e, n)
                },
                reloadComponent: function(t, e, n) {
                    this.storeRef.reloadComponent(t, e, n)
                },
                changeComponent: function(t, e, n) {
                    this.storeRef.changeComponent(t, e, n)
                },
                switchActiveComponent: function(t, e) {
                    this.storeRef.toSwitchActiveComponent && this.storeRef.toSwitchActiveComponent(t, e)
                },
                update: function(t) {
                    this.toAutoAdjust(),
                    this.toUpdateComponentData(t)
                },
                updateComplete: function(t) {
                    this.toAutoAdjust(),
                    this.storeRef.updateComplete(t)
                },
                openInNewWindow: function(t) {},
                backToWindow: function(t) {}
            },
            props: {
                componentData: {
                    default: function() {
                        return {}
                    }
                },
                componentList: {
                    default: function() {
                        return {}
                    }
                },
                itemData: {
                    default: function() {
                        return {}
                    }
                },
                noCopyAttributeFromComponentList: {},
                autoSelectActiveComponent: {},
                autoRemoveItemWhenEmpty: {},
                wrapList: {},
                wrapComponent: {},
                wrapProps: {},
                wrapListeners: {},
                failureComponent: {},
                failureProps: {},
                failureListeners: {},
                loadingComponent: {},
                loadingProps: {},
                loadingListeners: {},
                loadingfortabs: {},
                loadingWhileChangeComponent: {},
                presetComponents: {},
                isHorizontal: {},
                columnHeight: {},
                columnWidth: {},
                itemMinWidth: {},
                itemMaxWidth: {},
                itemMinHeight: {},
                itemMaxHeight: {},
                mainBackground: {},
                itemBackground: {},
                itemFontColor: {},
                fixColumnSize: {},
                fixColumnNumber: {},
                lastItemNoMargin: {},
                dynamicNumberColumn: {},
                paddingLeftRight: {},
                paddingTopBottom: {},
                marginRight: {},
                marginBottom: {},
                alignLeft: {},
                alignTop: {},
                autoAdjustTimes: {},
                dynamicHideAndShow: {},
                scrollToRightMargin: {},
                scrollToBottomMargin: {}
            },
            components: {
                waterfallLayout: c.a,
                distribute_store: r.a
            }
        }
    },
    315: function(t, e, n) {
        "use strict";
        function i(t) {
            var e = t.getBoundingClientRect()
              , n = window.innerHeight || document.documentElement.clientHeight
              , i = window.innerWidth || document.documentElement.clientWidth
              , o = e.top <= n && e.top + e.height >= 0
              , a = e.left <= i && e.left + e.width >= 0;
            return o && a
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(123)
          , a = n.n(o)
          , s = n(124)
          , r = n.n(s)
          , l = n(42)
          , c = n.n(l)
          , d = n(77)
          , m = n.n(d)
          , h = (n(76),
        n(745))
          , p = n.n(h);
        e.default = {
            name: "Waterfall_layout",
            data: function() {
                return {
                    nbColumn: 3,
                    itemDataMap: [],
                    scrollUpDown: !0,
                    scrollLeftRight: !0,
                    customStyle: ["minWidth", "maxWidth", "minHeight", "maxHeight"]
                }
            },
            watch: {
                componentData: {
                    handler: function(t, e) {
                        t && this.generateItemData(t)
                    },
                    immediate: !0
                },
                isHorizontal: function() {
                    this.$emit("toNotifyResize")
                },
                columnWidth: function(t) {
                    this.autoAdjust(),
                    this.$emit("toNotifyResize")
                },
                columnHeight: function() {
                    this.$emit("toNotifyResize")
                },
                itemMinWidth: function() {
                    this.$emit("toNotifyResize")
                },
                itemMaxWidth: function() {
                    this.$emit("toNotifyResize")
                },
                itemMinHeight: function() {
                    this.$emit("toNotifyResize")
                },
                itemMaxHeight: function() {
                    this.$emit("toNotifyResize")
                }
            },
            mounted: function() {
                var t = this;
                this.init(),
                window.addEventListener("resize", function(e) {
                    t.debounce(function() {
                        document.body.contains(t.$el) && t.autoAdjust()
                    }, "resize")
                })
            },
            props: {
                componentData: {
                    default: function() {
                        return {}
                    }
                },
                itemData: {
                    default: function() {
                        return {}
                    }
                },
                notRenderItemList: {
                    default: function() {
                        return []
                    }
                },
                isHorizontal: {
                    default: !1
                },
                columnWidth: {
                    default: 300
                },
                columnHeight: {
                    default: 300
                },
                itemMinWidth: {
                    default: 100
                },
                itemMaxWidth: {
                    default: 0
                },
                itemMinHeight: {
                    default: 100
                },
                itemMaxHeight: {
                    default: 0
                },
                itemBackground: {
                    default: "transparent"
                },
                itemFontColor: {
                    default: "black"
                },
                fixColumnSize: {
                    default: !0
                },
                fixColumnNumber: {
                    default: 0
                },
                lastItemNoMargin: {
                    default: !0
                },
                dynamicNumberColumn: {
                    default: !1
                },
                paddingLeftRight: {
                    default: 10
                },
                paddingTopBottom: {
                    default: 10
                },
                marginRight: {
                    default: 10
                },
                marginBottom: {
                    default: 10
                },
                alignLeft: {
                    default: !1
                },
                alignTop: {
                    default: !1
                },
                autoAdjustTimes: {
                    default: 8
                },
                dynamicHideAndShow: {
                    default: !1
                },
                scrollToRightMargin: {
                    default: 100
                },
                scrollToBottomMargin: {
                    default: 100
                }
            },
            methods: {
                init: function() {
                    this.calculNumberOfRow(),
                    this.autoAdjust()
                },
                refresh: function() {
                    var t = this;
                    this.itemDataMap = [],
                    this.$nextTick(function() {
                        t.generateItemData(t.componentData)
                    })
                },
                addItem: function(t, e, n, i) {
                    var o = Date.now();
                    if (n = n ? 1 : 0,
                    t) {
                        var a = this.itemDataMap.findIndex(function(e) {
                            return e === t
                        });
                        this.itemDataMap.splice(a + n, 0, o + "")
                    }
                    return o
                },
                generateItemData: function(t) {
                    var e = this
                      , n = m()(t).filter(function(t) {
                        return !e.notRenderItemList.includes(t)
                    })
                      , i = [].concat(this.itemDataMap.filter(function(t) {
                        return n.includes(t)
                    }));
                    if (n.length > 0) {
                        var o, a = !1;
                        (!n.includes(this.itemDataMap[this.itemDataMap.length - 1]) || n.length < this.itemDataMap.filter(Boolean).length) && (this.$set(this, "itemDataMap", []),
                        a = !0);
                        var s = [];
                        n.forEach(function(t, n) {
                            var o = i.findIndex(function(e) {
                                return e === t
                            });
                            -1 === o ? s.push(t) : a && (e.itemDataMap[o] = t)
                        }),
                        (o = this.itemDataMap).push.apply(o, s)
                    } else
                        this.$set(this, "itemDataMap", []);
                    this._updateItemData(),
                    this.autoAdjust()
                },
                scrollToTop: function() {
                    this.$el && (this.$el.scrollTop = 0)
                },
                getCustomStyle: function(t) {
                    var e = c()({}, this.itemData[t]);
                    if (e)
                        for (var n in e)
                            this.customStyle.includes(n) && (e[n] || 0 === e[n]) ? e[n] += "px" : delete e[n];
                    return this._prevItemCustomStyle = this._prevItemCustomStyle || {},
                    r()(this._prevItemCustomStyle[t]) !== r()(this.itemData[t]) && this.$emit("toNotifyResize", [t]),
                    this._prevItemCustomStyle[t] = c()({}, this.itemData[t]),
                    e
                },
                _updateItemData: function() {
                    var t = this;
                    for (var e in this.itemData)
                        this.itemDataMap.includes(e) || this.$delete(this.itemData, e);
                    this.itemDataMap.forEach(function(e) {
                        t.$set(t.itemData, e, t.itemData[e] ? c()(t.itemData[e], {
                            id: e
                        }) : {
                            id: e
                        })
                    })
                },
                calculNumberOfRow: function() {
                    this.$el && this.fixColumnNumber <= 0 ? this.isHorizontal ? (this.nbColumn = Math.max(Math.floor((this.$el.parentElement.clientHeight - 2 * this.paddingLeftRight) / (this.columnHeight + this.marginBottom)), 1),
                    this.dynamicNumberColumn && (this.nbColumn = this.itemDataMap.length > this.nbColumn ? this.nbColumn : this.itemDataMap.length)) : (this.nbColumn = Math.max(Math.floor((this.$el.parentElement.clientWidth - 2 * this.paddingLeftRight) / (this.columnWidth + this.marginRight)), 1),
                    this.dynamicNumberColumn && (this.nbColumn = this.itemDataMap.length > this.nbColumn ? this.nbColumn : this.itemDataMap.length)) : this.fixColumnNumber > 0 && (this.nbColumn = this.fixColumnNumber)
                },
                handleScroll: function(t) {
                    var e = this.$el.scrollHeight - this.$el.scrollTop - this.$el.clientHeight
                      , n = this.$el.scrollWidth - this.$el.scrollLeft - this.$el.clientWidth;
                    this.isHorizontal ? (n <= this.scrollToRightMargin && (this.scrollLeftRight || this.itemDataMap.length !== this.previewLength) ? (this.scrollLeftRight = !1,
                    this.previewLength = this.itemDataMap.length,
                    this.$emit("onScrollToRight", this.$el.scrollWidth - this.$el.scrollLeft)) : n > this.scrollToRightMargin && (this.scrollLeftRight = !0),
                    this.$el.clientWidth === this.$el.scrollWidth && (this.previewLength = this.itemDataMap.length,
                    this.$emit("onScrollToRight", this.$el.scrollWidth - this.$el.scrollLeft))) : (e <= this.scrollToBottomMargin && (this.scrollUpDown || this.itemDataMap.length !== this.previewLength) ? (this.scrollUpDown = !1,
                    this.previewLength = this.itemDataMap.length,
                    this.$emit("onScrollToBottom", this.$el.scrollHeight - this.$el.scrollTop)) : e > this.scrollToBottomMargin && (this.scrollUpDown = !0),
                    this.$el.clientHeight === this.$el.scrollHeight && (this.previewLength = this.itemDataMap.length,
                    this.$emit("onScrollToBottom", this.$el.scrollHeight - this.$el.scrollTop))),
                    this._dynamicHideAndShow(t && t.bubbles)
                },
                autoAdjust: function() {
                    var t = this;
                    this.calculNumberOfRow(),
                    this.debounce(function() {
                        t.calculNumberOfRow();
                        var e = t.autoAdjustTimes
                          , n = {};
                        t.itemDataMap.length > 0 && e ? function i(o) {
                            setTimeout(function() {
                                var s = {}
                                  , r = {};
                                a()(t.$refs.column).forEach(function(e, n) {
                                    var i = e.getBoundingClientRect()
                                      , o = t.isHorizontal ? i.width : i.height;
                                    (!s.height || s.height > o) && (s.index = n % t.nbColumn,
                                    s.height = o),
                                    (!r.height || r.height < o) && (r.index = n % t.nbColumn,
                                    r.height = o)
                                });
                                var l = t.$refs.column[r.index].lastElementChild.getBoundingClientRect()
                                  , c = t.isHorizontal ? l.width : l.height
                                  , d = t.isHorizontal ? t.marginRight : t.marginBottom
                                  , m = 0 === s.height || r.height - c - d > s.height;
                                if (m = t.alignLeft ? m || s.index < r.index : m,
                                r.index !== s.index && m) {
                                    var h = t.itemDataMap.filter(function(e, n) {
                                        return e && n % t.nbColumn === r.index
                                    });
                                    if (h.length > 1) {
                                        var p = h.pop()
                                          , u = t.itemDataMap.findIndex(function(t) {
                                            return t === p
                                        });
                                        t.$set(t.itemDataMap, u, null);
                                        var f = t.itemDataMap.length - 1 + s.index - (t.itemDataMap.length - 1) % t.nbColumn;
                                        f = s.index > t.itemDataMap.length - 1 % t.nbColumn ? f : f + t.nbColumn,
                                        t.$set(t.itemDataMap, f, p),
                                        e--;
                                        var g = n && n.height > r.height;
                                        n = r,
                                        e > 0 && !o ? (t.emitAutoAdjust(!0),
                                        i(g)) : t.emitAutoAdjust(!1)
                                    } else {
                                        if (0 === s.height && t.itemDataMap.length > t.nbColumn) {
                                            var v = t.itemDataMap[t.itemDataMap.length - 1];
                                            t.$set(t.itemDataMap, t.itemDataMap.length - 1, null),
                                            t.$set(t.itemDataMap, s.index, v)
                                        }
                                        t.emitAutoAdjust(!0)
                                    }
                                    n = r
                                } else
                                    t.emitAutoAdjust(!0)
                            }, 0)
                        }() : t.emitAutoAdjust(!1)
                    }, "autoAdjust")
                },
                emitAutoAdjust: function(t) {
                    var e = this;
                    this.$emit("onAutoAdjust", t),
                    setTimeout(function() {
                        e._dynamicHideAndShow(),
                        0 !== e.$el.clientHeight && e.$el.clientHeight === e.$el.scrollHeight && e.handleScroll()
                    })
                },
                _dynamicHideAndShow: function(t) {
                    var e = this;
                    this.dynamicHideAndShow && (!t && setTimeout(function() {
                        e.debounce(function() {
                            e._detectAndHideOrShow()
                        }, "dynamicHideAndShow", 100)
                    }),
                    t && this._detectAndHideOrShow())
                },
                _detectAndHideOrShow: function() {
                    this.$refs.row.forEach(function(t) {
                        i(t) ? (t.firstElementChild.style.display = "",
                        t.style.height = "px") : (t.style.height = t.clientHeight + "px",
                        t.firstElementChild.style.display = "none")
                    })
                },
                debounce: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default"
                      , n = this
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100
                      , o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    this[e + "__time"] ? (this[e + "__time"] += i,
                    setTimeout(function() {
                        n[e + "__time"] -= i,
                        0 === n[e + "__time"] && o && t()
                    }, i)) : (this[e + "__time"] = i,
                    !o && t(),
                    setTimeout(function() {
                        n[e + "__time"] -= i,
                        0 === n[e + "__time"] && o && t()
                    }, i))
                }
            },
            components: {
                wrap: p.a
            }
        }
    },
    316: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = {
            name: "waterfall_wrap",
            inheritAttrs: !1,
            data: function() {
                return {
                    show: !1
                }
            },
            computed: {},
            componentMounted: function(t) {},
            mounted: function() {
                this.show = !0
            },
            methods: {},
            props: {
                itemId: {}
            }
        }
    },
    317: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = {
            name: "app",
            data: function() {
                return {}
            },
            methods: {},
            props: {
                rootID: {
                    default: "app"
                }
            },
            components: {}
        }
    },
    318: function(t, e, n) {
        "use strict";
        var i = n(319);
        e.a = i.a
    },
    319: function(t, e, n) {
        "use strict";
        var i = n(42)
          , o = n.n(i)
          , a = n(76)
          , s = n(88);
        n.i(s.a)(".collapse-transition {\n  -webkit-transition: .3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out;\n  transition: .3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out, .3s transform ease-in-out, .3s opacity ease-in-out;\n}\n\n.horizontal-collapse-transition {\n  -webkit-transition: .3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out;\n  transition: .3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out, .3s transform ease-in-out, .3s opacity ease-in-out;\n}\n", "__collapseTransition", !1);
        var r = {
            direction: "vertical",
            duration: "300",
            activeTransition: !1,
            transitionDelte: "50px"
        }
          , l = function(t) {
            var e = o()({}, r);
            return t = o()(e, t),
            {
                beforeEnter: function(e) {
                    e.dataset.oldTransitionDuration = e.style.transitionDuration,
                    e.dataset.oldTransitionProperty = e.style.transitionProperty,
                    Vue.nextTick(function() {
                        e.dataset || (e.dataset = {}),
                        "horizontal" === t.direction ? (n.i(a.c)(e, "horizontal-collapse-transition"),
                        e.dataset.oldPaddingLeft = e.style.paddingLeft,
                        e.dataset.oldPaddingRight = e.style.paddingRight,
                        e.style.width = "0",
                        e.style.paddingLeft = 0,
                        e.style.paddingRight = 0) : (n.i(a.c)(e, "collapse-transition"),
                        e.dataset.oldPaddingTop = e.style.paddingTop,
                        e.dataset.oldPaddingBottom = e.style.paddingBottom,
                        e.style.height = "0",
                        e.style.paddingTop = 0,
                        e.style.paddingBottom = 0),
                        e.style.pointerEvents = "none",
                        e.style.transitionDuration = t.duration + "ms",
                        e.style.transitionProperty = "height, width, padding, opacity, transform",
                        t.activeTransition && (e.style.opacity = 0,
                        "horizontal" === t.direction ? e.style.transform = "translate3d(-" + t.transitionDelte + ", 0, 0)" : e.style.transform = "translate3d(0, -" + t.transitionDelte + ", 0)")
                    })
                },
                enter: function(e) {
                    Vue.nextTick(function() {
                        e.dataset.oldOverflow = e.style.overflow,
                        "horizontal" === t.direction ? 0 !== e.scrollWidth ? (e.style.width = e.scrollWidth + "px",
                        e.style.paddingLeft = e.dataset.oldPaddingLeft,
                        e.style.paddingRight = e.dataset.oldPaddingRight) : (e.style.width = "",
                        e.style.paddingLeft = e.dataset.oldPaddingLeft,
                        e.style.paddingRight = e.dataset.oldPaddingRight) : 0 !== e.scrollHeight ? (e.style.height = e.scrollHeight + "px",
                        e.style.paddingTop = e.dataset.oldPaddingTop,
                        e.style.paddingBottom = e.dataset.oldPaddingBottom) : (e.style.height = "",
                        e.style.paddingTop = e.dataset.oldPaddingTop,
                        e.style.paddingBottom = e.dataset.oldPaddingBottom),
                        e.style.overflow = "hidden",
                        t.activeTransition && (e.style.opacity = .5,
                        e.style.transform = "translate3d(0, 0, 0)")
                    })
                },
                afterEnter: function(e) {
                    Vue.nextTick(function() {
                        "horizontal" === t.direction ? (n.i(a.d)(e, "horizontal-collapse-transition"),
                        e.style.width = "") : (n.i(a.d)(e, "collapse-transition"),
                        e.style.height = ""),
                        e.style.height = "",
                        e.style.overflow = e.dataset.oldOverflow,
                        e.style.transitionDuration = e.dataset.oldTransitionDuration,
                        e.style.pointerEvents = "auto",
                        t.activeTransition && (e.style.opacity = 1),
                        e.style.transform = ""
                    })
                },
                beforeLeave: function(e) {
                    e.dataset || (e.dataset = {}),
                    e.dataset.oldOverflow = e.style.overflow,
                    "horizontal" === t.direction ? (e.style.paddingLeft = e.dataset.oldPaddingLeft,
                    e.style.paddingRight = e.dataset.oldPaddingRight,
                    e.style.width = e.scrollWidth + "px") : (e.dataset.oldPaddingTop = e.style.paddingTop,
                    e.dataset.oldPaddingBottom = e.style.paddingBottom,
                    e.style.height = e.scrollHeight + "px"),
                    e.style.overflow = "hidden",
                    e.style.transitionDuration = t.duration + "ms",
                    e.style.transitionProperty = "height, width, padding, opacity, transform",
                    e.style.pointerEvents = "none",
                    t.activeTransition && (e.style.opacity = 0,
                    e.style.transform = "translate3d(0, 0, 0)")
                },
                leave: function(e) {
                    "horizontal" === t.direction ? 0 !== e.scrollHeight && (n.i(a.c)(e, "horizontal-collapse-transition"),
                    e.style.width = 0,
                    e.style.paddingLeft = 0,
                    e.style.paddingRight = 0) : 0 !== e.scrollHeight && (n.i(a.c)(e, "collapse-transition"),
                    e.style.height = 0,
                    e.style.paddingTop = 0,
                    e.style.paddingBottom = 0),
                    t.activeTransition && (e.style.opacity = 0,
                    "horizontal" === t.direction ? e.style.transform = "translate3d(-" + t.transitionDelte + ", 0, 0)" : e.style.transform = "translate3d(0, -" + t.transitionDelte + ", 0)")
                },
                afterLeave: function(e) {
                    e.style.overflow = e.dataset.oldOverflow,
                    "horizontal" === t.direction ? (n.i(a.d)(e, "horizontal-collapse-transition"),
                    e.style.width = "",
                    e.style.paddingLeft = e.dataset.oldPaddingLeft,
                    e.style.paddingRight = e.dataset.oldPaddingRight) : (n.i(a.d)(e, "collapse-transition"),
                    e.style.height = "",
                    e.style.paddingTop = e.dataset.oldPaddingTop,
                    e.style.paddingBottom = e.dataset.oldPaddingBottom),
                    e.style.pointerEvents = "auto",
                    e.style.transitionDuration = e.dataset.oldTransitionDuration,
                    e.style.transitionProperty = e.dataset.oldTransitionProperty,
                    e.style.transform = ""
                }
            }
        };
        e.a = {
            name: "collapseTransition",
            functional: !0,
            render: function(t, e) {
                var n = e.children
                  , i = e.props;
                return t("transition", {
                    on: l(i)
                }, n)
            }
        }
    },
    320: function(t, e, n) {
        "use strict";
        var i = n(735)
          , o = n.n(i);
        e.a = o.a
    },
    321: function(t, e, n) {
        "use strict";
        var i = n(322);
        e.a = i.a
    },
    322: function(t, e, n) {
        "use strict";
        var i = n(42)
          , o = n.n(i)
          , a = (n(76),
        n(88));
        n.i(a.a)("\n.__fade-transition {\n  -webkit-transition: .3s opacity ease-in-out;\n  transition: .3s opacity ease-in-out;\n  opacity: 0;\n}\n\n.__fade-enter-active,\n.__fade-leave-active {\n  -webkit-transition: opacity 0.3s ease;\n  transition: opacity 0.3s ease;\n}\n.__fade-enter,\n.__fade-leave-to {\n  opacity: 0;\n}\n", "__fadeTransition", !1);
        var s = {
            duration: "300",
            onlyEnter: !1,
            onlyLeave: !1
        }
          , r = function(t) {
            var e = o()({}, s);
            return t = o()(e, t),
            {
                beforeEnter: function(e) {
                    e.dataset.oldTransitionDuration = "" + e.style.transitionDuration,
                    e.style.transitionDuration = t.onlyLeave ? "0ms" : t.duration + "ms"
                },
                enter: function(t) {},
                afterEnter: function(t) {
                    t.style.pointerEvents = "auto",
                    t.style.transitionDuration = t.dataset.oldTransitionDuration
                },
                beforeLeave: function(e) {
                    e.dataset.oldTransitionDuration = e.style.transitionDuration,
                    e.style.transitionDuration = t.onlyEnter ? "0ms" : t.duration + "ms"
                },
                leave: function(t) {},
                afterLeave: function(t) {
                    t.style.transitionDuration = t.dataset.oldTransitionDuration,
                    t.style.pointerEvents = "auto"
                }
            }
        };
        e.a = {
            name: "fadeTransition",
            functional: !0,
            render: function(t, e) {
                var n = e.children
                  , i = e.props;
                return t("transition", {
                    props: {
                        name: "__fade",
                        mode: "out-in"
                    },
                    on: r(i)
                }, n)
            }
        }
    },
    323: function(t, e, n) {
        "use strict";
        var i = n(42)
          , o = n.n(i)
          , a = (n(76),
        n(88));
        n.i(a.a)("\n.__fade-transition {\n  -webkit-transition: .3s opacity ease-in-out;\n  transition: .3s opacity ease-in-out;\n  opacity: 0;\n}\n\n.__fade-enter-active,\n.__fade-leave-active {\n  -webkit-transition: opacity 0.3s ease;\n  transition: opacity 0.3s ease;\n}\n.__fade-enter,\n.__fade-leave-to {\n  opacity: 0;\n}\n", "__fadeTransition", !1);
        var s = {
            duration: "300",
            onlyEnter: !1,
            onlyLeave: !1
        }
          , r = function(t) {
            var e = o()({}, s);
            return t = o()(e, t),
            {
                beforeEnter: function(e) {
                    e.dataset.oldTransitionDuration = "" + e.style.transitionDuration,
                    e.style.transitionDuration = t.onlyLeave ? "0ms" : t.duration + "ms"
                },
                enter: function(t) {},
                afterEnter: function(t) {
                    t.style.pointerEvents = "auto",
                    t.style.transitionDuration = t.dataset.oldTransitionDuration
                },
                beforeLeave: function(e) {
                    e.dataset.oldTransitionDuration = e.style.transitionDuration,
                    e.style.transitionDuration = t.onlyEnter ? "0ms" : t.duration + "ms"
                },
                leave: function(t) {},
                afterLeave: function(t) {
                    t.style.transitionDuration = t.dataset.oldTransitionDuration,
                    t.style.pointerEvents = "auto"
                }
            }
        };
        e.a = {
            name: "fadeTransition",
            functional: !0,
            render: function(t, e) {
                var n = e.children
                  , i = e.props;
                return t("transition", {
                    props: {
                        name: "__fade",
                        mode: "out-in"
                    },
                    on: r(i)
                }, n)
            }
        }
    },
    324: function(t, e, n) {
        "use strict";
        var i = n(737)
          , o = n.n(i);
        e.a = o.a
    },
    325: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(280);
        n.n(i);
        window.Vue = n(184).default;
        var o = n(281);
        new Vue({
            el: "#app",
            render: function(t) {
                return t(o)
            }
        }),
        Vue.$platform = -1 !== navigator.userAgent.indexOf("Electron") ? "electron" : -1 !== navigator.userAgent.indexOf("; wv") ? "cordova" : "web",
        Vue.$userAgent = navigator.userAgent,
        document.title = "Pic Waterfall"
    },
    326: function(t, e, n) {
        "use strict";
        var i = n(743)
          , o = n.n(i);
        e.a = o.a
    },
    327: function(t, e, n) {
        "use strict";
        e.a = {}.install = function(t) {
            t.directive("clickOutside", i)
        }
        ;
        var i = {
            bind: function(t, e, n) {
                function i() {
                    (e.modifiers.checkOnMousedown || !e.modifiers.checkOnMouseup && !e.modifiers.checkOnClick) && (document.addEventListener("mousedown", t.__checkEvent),
                    document.addEventListener("touchstart", t.__checkEvent)),
                    e.modifiers.checkOnMouseup && (document.addEventListener("mouseup", t.__checkEvent),
                    document.addEventListener("touchend", t.__checkEvent)),
                    e.modifiers.checkOnClick && document.addEventListener("click", t.__checkEvent)
                }
                if ("function" != typeof e.value) {
                    var o = n.context.name
                      , a = "[Vue-click-outside:] provided expression '" + e.expression + "' is not a function, but has to be";
                    o && (a += "Found in component '" + o + "'"),
                    console.warn(a)
                }
                var s = e.modifiers.bubble;
                t.__checkEvent = function(n) {
                    (s || !t.contains(n.target) && t !== n.target) && (e.value(n),
                    (!e.modifiers.immediate || e.modifiers.immediate && e.modifiers.once) && (document.removeEventListener("mousedown", t.__checkEvent),
                    document.removeEventListener("touchstart", t.__checkEvent),
                    document.removeEventListener("mouseup", t.__checkEvent),
                    document.removeEventListener("touchend", t.__checkEvent),
                    document.removeEventListener("click", t.__checkEvent)))
                }
                ,
                t.__initEvent = function(t) {
                    i()
                }
                ,
                (e.modifiers.initOnMousedown || !e.modifiers.initOnMouseup && !e.modifiers.initOnClick) && (t.addEventListener("mousedown", t.__initEvent),
                t.addEventListener("touchstart", t.__initEvent)),
                e.modifiers.initOnMouseup && (t.addEventListener("mouseup", t.__initEvent),
                t.addEventListener("touchend", t.__initEvent)),
                e.modifiers.initOnClick && t.addEventListener("click", t.__initEvent),
                e.modifiers.immediate && i()
            },
            unbind: function(t, e) {
                t.removeEventListener("mousedown", t.__initEvent),
                t.removeEventListener("touchstart", t.__initEvent),
                t.removeEventListener("mouseup", t.__initEvent),
                t.removeEventListener("touchend", t.__initEvent),
                t.removeEventListener("click", t.__initEvent),
                document.removeEventListener("mousedown", t.__checkEvent),
                document.removeEventListener("touchstart", t.__checkEvent),
                document.removeEventListener("mouseup", t.__checkEvent),
                document.removeEventListener("touchend", t.__checkEvent),
                document.removeEventListener("click", t.__checkEvent),
                t.__vueClickOutside__ = null
            }
        }
    },
    328: function(t, e, n) {
        "use strict";
        function i(t, e, n) {
            var i = 0;
            return n && n.firstCall ? function() {
                0 === i && t.apply(void 0, arguments),
                i++,
                setTimeout(function() {
                    i--
                }, e)
            }
            : function() {
                for (var n = arguments.length, o = Array(n), a = 0; a < n; a++)
                    o[a] = arguments[a];
                i++,
                setTimeout(function() {
                    0 === --i && t.apply(void 0, o)
                }, e)
            }
        }
        e.a = i
    },
    329: function(t, e, n) {
        "use strict";
        function i(t) {
            return !(!t || "function" != typeof HTMLElement && "object" !== ("undefined" == typeof HTMLElement ? "undefined" : a()(HTMLElement)) || !(t instanceof HTMLElement)) || !(!t || !t.nodeType || 1 !== t.nodeType)
        }
        e.a = i;
        var o = n(126)
          , a = n.n(o)
    },
    330: function(t, e, n) {
        "use strict";
        function i(t) {
            var e = window.location.search.substring(1);
            if ((e = e || window.location.href.slice(window.location.href.indexOf("?") + 1, window.location.href.length)) !== window.location.href)
                for (var n = e.split("&"), i = 0; i < n.length; i++) {
                    var o = n[i].split("=");
                    if (o[0] == t)
                        return o[1]
                }
            return !1
        }
        e.a = i
    },
    580: function(t, e) {},
    581: function(t, e) {},
    582: function(t, e) {},
    583: function(t, e) {},
    584: function(t, e) {},
    585: function(t, e) {},
    586: function(t, e) {},
    587: function(t, e) {},
    588: function(t, e) {},
    589: function(t, e) {},
    590: function(t, e) {},
    591: function(t, e) {},
    592: function(t, e) {},
    593: function(t, e) {},
    594: function(t, e) {},
    595: function(t, e) {},
    596: function(t, e) {},
    725: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(60)
          , o = n.n(i)
          , a = n(61)
          , s = n.n(a)
          , r = new o.a({
            id: "icon-common:close",
            use: "icon-common:close-usage",
            viewBox: "0 0 24 24",
            content: '<symbol preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" id="icon-common:close"><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" /></symbol>'
        });
        s.a.add(r);
        e.default = r
    },
    726: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(60)
          , o = n.n(i)
          , a = n(61)
          , s = n.n(a)
          , r = new o.a({
            id: "icon-common:down",
            use: "icon-common:down-usage",
            viewBox: "0 0 1024 1024",
            content: '<symbol viewBox="0 0 1024 1024" id="icon-common:down"><path d="M515.152295 668.072615l378.355187-378.354164c12.611226-12.611226 31.528064-12.611226 44.140313 0 12.613272 12.611226 12.611226 31.528064 0 44.140313l-397.272026 397.272025c-6.305613 6.306636-18.916838 12.612249-25.222451 12.611226-6.305613-0.001023-18.916838 0-25.222451-6.306636l-403.577638-403.577639c-12.611226-12.611226-12.611226-31.528064 0-44.141336 12.611226-12.613272 31.528064-12.611226 44.141336 0l384.65773 378.356211z" /></symbol>'
        });
        s.a.add(r);
        e.default = r
    },
    727: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(60)
          , o = n.n(i)
          , a = n(61)
          , s = n.n(a)
          , r = new o.a({
            id: "icon-common:leftArrow",
            use: "icon-common:leftArrow-usage",
            viewBox: "0 0 1843 1024",
            content: '<symbol viewBox="0 0 1843 1024" id="icon-common:leftArrow"><path d="M912.521216 535.547904v-47.210496L1336.496128 165.732352v60.32384L956.81536 509.321216v3.934208l379.680768 284.575744v60.32384L912.521216 535.547904zM546.971648 535.547904v-47.210496l423.97696-322.605056v60.32384L591.26784 509.321216v3.934208l379.680768 284.575744v60.32384l-423.97696-322.607104z" /></symbol>'
        });
        s.a.add(r);
        e.default = r
    },
    728: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(60)
          , o = n.n(i)
          , a = n(61)
          , s = n.n(a)
          , r = new o.a({
            id: "icon-common:maximise",
            use: "icon-common:maximise-usage",
            viewBox: "0 0 24 24",
            content: '<symbol preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" id="icon-common:maximise"><path d="M15 4a1 1 0 1 0 0 2h1.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414L18 7.414V9a1 1 0 1 0 2 0V4h-5zm-5.707 9.293L6 16.586V15a1 1 0 1 0-2 0v4.999h.996L9 20a1 1 0 0 0 0-2H7.414l3.293-3.292c.391-.391.391-1.023 0-1.414s-1.023-.392-1.414-.001zM7 12a1 1 0 0 0 1-1V8h3a1 1 0 1 0 0-2H6.001L6 11a1 1 0 0 0 1 1zm10 0a1 1 0 0 0-1 1v3h-3a1 1 0 1 0 0 2h5v-5a1 1 0 0 0-1-1z" /></symbol>'
        });
        s.a.add(r);
        e.default = r
    },
    729: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(60)
          , o = n.n(i)
          , a = n(61)
          , s = n.n(a)
          , r = new o.a({
            id: "icon-common:minimise",
            use: "icon-common:minimise-usage",
            viewBox: "0 0 24 24",
            content: '<symbol preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" id="icon-common:minimise"><path d="M6.121 13a1 1 0 1 0 0 2h1.465l-3.293 3.293a.999.999 0 1 0 1.414 1.414l3.414-3.414V18c0 .552.447 1 1 1s.879-.448.879-1v-5H6.121zM7 11a1 1 0 0 0 1-1V8h2a1 1 0 1 0 0-2H6.001L6 10a1 1 0 0 0 1 1zm10 2a1 1 0 0 0-1 1v2h-2a1 1 0 1 0 0 2h4v-4a1 1 0 0 0-1-1zm1.293-8.707L15 7.586V6a1 1 0 1 0-2 0v5h5a1 1 0 0 0 0-2h-1.586l3.293-3.292c.391-.391.391-1.023 0-1.414s-1.023-.392-1.414-.001z" fill="currentColor" /></symbol>'
        });
        s.a.add(r);
        e.default = r
    },
    730: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(60)
          , o = n.n(i)
          , a = n(61)
          , s = n.n(a)
          , r = new o.a({
            id: "icon-common:openInNewWindow",
            use: "icon-common:openInNewWindow-usage",
            viewBox: "0 0 1025 1024",
            content: '<symbol preserveAspectRatio="xMidYMid meet" viewBox="0 0 1025 1024" id="icon-common:openInNewWindow"><path d="M1006.428 555l-163 200q-11 12-29.5 12.5t-32-7.5t-13.5-19V640h-128q-26 0-45-18.5t-19-45.5V448q0-27 19-45.5t45-18.5h128V284q0-12 13.5-20t32-7.5t29.5 12.5l163 199q18 18 18 43.5t-18 43.5zm-365.5-299q-26.5 0-45.5-19t-19-45.5t-18.5-45t-45.5-18.5h-320q-26 0-45 18.5t-19 45.5v640q0 26 19 45t45 19h320q27 0 45.5-19t18.5-45.5t19-45t45.5-18.5t45 18.5t18.5 45.5v64q0 53-37.5 90.5t-90.5 37.5h-448q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h448q53 0 90.5 37.5t37.5 90.5v64q0 26-18.5 45t-45 19z" /></symbol>'
        });
        s.a.add(r);
        e.default = r
    },
    731: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(60)
          , o = n.n(i)
          , a = n(61)
          , s = n.n(a)
          , r = new o.a({
            id: "icon-common:setting",
            use: "icon-common:setting-usage",
            viewBox: "0 0 24 24",
            content: '<symbol viewBox="0 0 24 24" id="icon-common:setting">\r\n    <path d="M 9.6679688 2 L 9.1757812 4.5234375 C 8.3550224 4.8338012 7.5961042 5.2674041 6.9296875 5.8144531 L 4.5058594 4.9785156 L 2.1738281 9.0214844 L 4.1132812 10.707031 C 4.0445153 11.128986 4 11.558619 4 12 C 4 12.441381 4.0445153 12.871014 4.1132812 13.292969 L 2.1738281 14.978516 L 4.5058594 19.021484 L 6.9296875 18.185547 C 7.5961042 18.732596 8.3550224 19.166199 9.1757812 19.476562 L 9.6679688 22 L 14.332031 22 L 14.824219 19.476562 C 15.644978 19.166199 16.403896 18.732596 17.070312 18.185547 L 19.494141 19.021484 L 21.826172 14.978516 L 19.886719 13.292969 C 19.955485 12.871014 20 12.441381 20 12 C 20 11.558619 19.955485 11.128986 19.886719 10.707031 L 21.826172 9.0214844 L 19.494141 4.9785156 L 17.070312 5.8144531 C 16.403896 5.2674041 15.644978 4.8338012 14.824219 4.5234375 L 14.332031 2 L 9.6679688 2 z M 12 8 C 14.209 8 16 9.791 16 12 C 16 14.209 14.209 16 12 16 C 9.791 16 8 14.209 8 12 C 8 9.791 9.791 8 12 8 z" />\r\n</symbol>'
        });
        s.a.add(r);
        e.default = r
    },
    733: function(t, e, n) {
        t.exports = n.p + "logo.svg"
    },
    734: function(t, e, n) {
        t.exports = n.p + "logo.svg"
    },
    735: function(t, e, n) {
        function i(t) {
            n(582)
        }
        var o = n(10)(n(301), n(749), i, null, null);
        t.exports = o.exports
    },
    736: function(t, e, n) {
        function i(t) {
            n(592)
        }
        var o = n(10)(n(305), n(759), i, null, null);
        t.exports = o.exports
    },
    737: function(t, e, n) {
        function i(t) {
            n(593)
        }
        var o = n(10)(n(306), n(760), i, "data-v-8aeeedb6", null);
        t.exports = o.exports
    },
    738: function(t, e, n) {
        function i(t) {
            n(583)
        }
        var o = n(10)(n(307), n(750), i, null, null);
        t.exports = o.exports
    },
    739: function(t, e, n) {
        function i(t) {
            n(591)
        }
        var o = n(10)(n(309), n(758), i, "data-v-7078ff98", null);
        t.exports = o.exports
    },
    740: function(t, e, n) {
        function i(t) {
            n(580)
        }
        var o = n(10)(n(310), n(747), i, null, null);
        t.exports = o.exports
    },
    741: function(t, e, n) {
        function i(t) {
            n(586)
        }
        var o = n(10)(n(311), n(753), i, null, null);
        t.exports = o.exports
    },
    742: function(t, e, n) {
        function i(t) {
            n(581)
        }
        var o = n(10)(n(313), n(748), i, "data-v-0eb0a788", null);
        t.exports = o.exports
    },
    743: function(t, e, n) {
        function i(t) {
            n(588)
        }
        var o = n(10)(n(314), n(755), i, null, null);
        t.exports = o.exports
    },
    744: function(t, e, n) {
        function i(t) {
            n(584)
        }
        var o = n(10)(n(315), n(751), i, null, null);
        t.exports = o.exports
    },
    745: function(t, e, n) {
        function i(t) {
            n(589)
        }
        var o = n(10)(n(316), n(756), i, "data-v-5e72d93a", null);
        t.exports = o.exports
    },
    746: function(t, e, n) {
        function i(t) {
            n(590)
        }
        var o = n(10)(n(317), n(757), i, null, null);
        t.exports = o.exports
    },
    747: function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("div", {
                    staticClass: "picture_modal"
                }, [n("Modal", {
                    ref: "modal",
                    attrs: {
                        closeByClickOutside: !0
                    },
                    on: {
                        onClose: t.modalClose
                    }
                }, [n("div", {
                    ref: "pictureContainer",
                    staticClass: "pictureContainer",
                    class: {
                        maximise: t.isMaximise,
                        h: t.isHor,
                        w: !t.isHor
                    }
                }, [n("img", {
                    ref: "img",
                    staticClass: "pic",
                    attrs: {
                        src: t.picURL,
                        draggable: "false"
                    }
                }), n("div", {
                    staticClass: "infoPanel"
                }, [n("div", {
                    staticClass: "picInfo"
                }, [n("span", {
                    attrs: {
                        title: t.currentItem.name
                    }
                }, [t._v(t._s(t.NLS.fileName) + ": " + t._s(t.currentItem.name))]), n("span", {
                    staticClass: "size",
                    attrs: {
                        title: t.itemSize
                    }
                }, [t._v(t._s(t.NLS.fileSize) + ": " + t._s(t.itemSize))]), n("span", {
                    staticClass: "type",
                    attrs: {
                        title: t.currentItem.type
                    }
                }, [t._v(t._s(t.NLS.fileType) + ": " + t._s(t.currentItem.type))])])]), n("div", {
                    staticClass: "pathPanel"
                }, [n("span", {
                    staticClass: "path",
                    attrs: {
                        title: t.currentItem.path
                    }
                }, [t._v(t._s(t.NLS.filePath) + ": " + t._s(t.currentItem.path))])]), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.isFirst,
                        expression: "!isFirst"
                    }],
                    staticClass: "prevPanel"
                }, [n("span", {
                    staticClass: "switchBtn",
                    attrs: {
                        title: t.NLS.toPrevious
                    },
                    on: {
                        click: t.toPrev
                    }
                }, [n("icon", {
                    attrs: {
                        "icon-class": "down"
                    }
                })], 1)]), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.isLast,
                        expression: "!isLast"
                    }],
                    staticClass: "nextPanel"
                }, [n("span", {
                    staticClass: "switchBtn",
                    attrs: {
                        title: t.NLS.toNext
                    },
                    on: {
                        click: t.toNext
                    }
                }, [n("icon", {
                    attrs: {
                        "icon-class": "down"
                    }
                })], 1)]), n("div", {
                    staticClass: "absoluteBtn expandBtn",
                    attrs: {
                        title: t.isMaximise ? t.NLS.minimise : t.NLS.maximise
                    },
                    on: {
                        click: t.maximise
                    }
                }, [n("icon", {
                    attrs: {
                        "icon-class": t.isMaximise ? "minimise" : "maximise"
                    }
                })], 1), n("div", {
                    staticClass: "absoluteBtn openBtn",
                    attrs: {
                        title: t.NLS.openInNew
                    },
                    on: {
                        click: t.openNewTab
                    }
                }, [n("icon", {
                    attrs: {
                        "icon-class": "openInNewWindow"
                    }
                })], 1)])])], 1)
            },
            staticRenderFns: []
        }
    },
    748: function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("transition", {
                    attrs: {
                        name: "list"
                    }
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    }],
                    staticClass: "wrap"
                }, [n("div", {
                    staticClass: "wrapContainer",
                    style: {
                        backgrounds: t.background,
                        opacity: t.ready ? 1 : .3
                    }
                }, [t._t("default")], 2)])])
            },
            staticRenderFns: []
        }
    },
    749: function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("div", {
                    staticClass: "DistributeStore"
                }, t._l(t.componentData, function(e, i) {
                    return n("div", {
                        key: i,
                        ref: i,
                        refInFor: !0,
                        staticClass: "storeContainer VflexStart",
                        class: {
                            isMaximised: t.maximiseItem && t.maximiseItem === i
                        }
                    }, [n(t.checkWrap(e.wrapComponent) || t.wrapComponent && ["object", "function"].includes(typeof t.wrapComponent) && t.wrapComponent.name || "wrap", t._g(t._b({
                        ref: "wrap_" + i,
                        refInFor: !0,
                        tag: "component",
                        attrs: {
                            itemId: i,
                            componentList: t.componentList,
                            componentData: t.componentData,
                            loadingList: t.loadingList,
                            itemLoadFailed: t.itemLoadFailed,
                            itemFocused: t.itemFocused,
                            minLoadingTime: t.minLoadingTime,
                            inStandaloneWindow: t.inStandaloneWindow
                        },
                        on: {
                            setFocusItem: function(e) {
                                t.setFocusItem(i)
                            },
                            toUpdateItemComponent: t.toUpdateItemComponent,
                            toUpdateItem: t.toUpdateItem,
                            toMaximise: function(e) {
                                t.toMaximise(i)
                            },
                            toMinimise: function(e) {
                                t.toMinimise(i)
                            },
                            openInNewWindow: t.openInNewWindow,
                            backToWindow: t.backToWindow,
                            toMoveComponentToInsert: t.toMoveComponentToInsert,
                            toMoveComponentToCreate: t.toMoveComponentToCreate,
                            toMoveItemToInsert: t.toMoveItemToInsert,
                            toCreateComponentToCreate: t.toCreateComponentToCreate,
                            toCreateComponentToInsert: t.toCreateComponentToInsert,
                            toMoveItem: t.toMoveItem,
                            toApplyItem: t.toApplyItem,
                            toAlterItem: t.toAlterItem,
                            toAddItem: t.toAddItem,
                            toRemoveItem: t.toRemoveItem,
                            toSwitchActiveComponent: function(e) {
                                !t.inStandaloneWindow && t.toSwitchActiveComponent(i, e)
                            },
                            reloadComponent: function(e) {
                                !t.inStandaloneWindow && t.reloadComponentFromExternal(i, e)
                            },
                            removeComponent: function(e) {
                                !t.inStandaloneWindow && t.removeComponentFromExternal(i, e)
                            },
                            addComponent: function(e) {
                                !t.inStandaloneWindow && t.addComponentFromExternal(i, e)
                            },
                            changeComponent: function(e) {
                                !t.inStandaloneWindow && t.changeComponentFromExternal(i, e)
                            }
                        }
                    }, "component", e.wrapProps || t.wrapProps, !1), e.wrapListeners || t.wrapListeners), t._l(e.componentList, function(o, a) {
                        return n("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: o.id === e.activeComponent,
                                expression: "componentInfo.id === one.activeComponent"
                            }],
                            key: "_" + i + "_" + o.id,
                            staticClass: "wrapContainer",
                            style: {
                                order: o.id === e.activeComponent ? 0 : 1,
                                width: "100%",
                                height: "100%"
                            }
                        }, [0 !== t.transitionDuration ? n("fadeTransiton", {
                            attrs: {
                                onlyEnter: !0,
                                duration: -1 === t.itemLoaded.indexOf(o.component) ? 0 : t.transitionDuration
                            }
                        }, [n("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: o.id === e.activeComponent,
                                expression: "componentInfo.id === one.activeComponent"
                            }],
                            ref: "_" + i + "_" + o.id + "_" + t._getComponentNameById(i, o.id),
                            refInFor: !0,
                            staticClass: "componentContainer",
                            style: [t.customSizeInfo(o.sizeInfo)]
                        }, [t.itemLoadFailed.includes("_" + i + "_" + o.id + "_" + o.component) ? n("failureComponent", t._g(t._b({
                            attrs: {
                                itemId: i,
                                componentId: o.id,
                                componentList: t.componentList,
                                componentData: t.componentData,
                                itemFocused: t.itemFocused,
                                inStandaloneWindow: t.inStandaloneWindow
                            },
                            on: {
                                toUpdateItemComponent: t.toUpdateItemComponent,
                                toUpdateItem: t.toUpdateItem,
                                toSwitchActiveComponent: function(e) {
                                    !t.inStandaloneWindow && t.toSwitchActiveComponent(i, e)
                                },
                                reloadComponent: function(e) {
                                    !t.inStandaloneWindow && t.reloadComponentFromExternal(i, e)
                                },
                                removeComponent: function(e) {
                                    !t.inStandaloneWindow && t.removeComponentFromExternal(i, e)
                                },
                                changeComponent: function(e) {
                                    !t.inStandaloneWindow && t.changeComponentFromExternal(i, e)
                                }
                            }
                        }, "failureComponent", t.failureProps, !1), t.failureListeners)) : t._e()], 1)]) : t._e(), 0 === t.transitionDuration ? n("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: o.id === e.activeComponent,
                                expression: "componentInfo.id === one.activeComponent"
                            }],
                            key: "_" + i + "_" + o.id,
                            ref: "_" + i + "_" + o.id + "_" + t._getComponentNameById(i, o.id),
                            refInFor: !0,
                            staticClass: "componentContainer",
                            style: {
                                order: o.id === e.activeComponent ? 0 : 1
                            }
                        }, [t.itemLoadFailed.includes("_" + i + "_" + o.id + "_" + o.component) ? n("failureComponent", t._g(t._b({
                            attrs: {
                                itemId: i,
                                componentId: o.id,
                                componentList: t.componentList,
                                componentData: t.componentData,
                                itemFocused: t.itemFocused,
                                inStandaloneWindow: t.inStandaloneWindow
                            },
                            on: {
                                toUpdateItemComponent: t.toUpdateItemComponent,
                                toUpdateItem: t.toUpdateItem,
                                toSwitchActiveComponent: function(e) {
                                    !t.inStandaloneWindow && t.toSwitchActiveComponent(i, e)
                                },
                                reloadComponent: function(e) {
                                    !t.inStandaloneWindow && t.reloadComponentFromExternal(i, e)
                                },
                                removeComponent: function(e) {
                                    !t.inStandaloneWindow && t.removeComponentFromExternal(i, e)
                                },
                                changeComponent: function(e) {
                                    !t.inStandaloneWindow && t.changeComponentFromExternal(i, e)
                                }
                            }
                        }, "failureComponent", t.failureProps, !1), t.failureListeners)) : t._e()], 1) : t._e(), t._showLoadingComponent(i, o.id, o.component) ? n("loadingComponent", t._g(t._b({
                            attrs: {
                                itemId: i,
                                componentId: o.id,
                                componentList: t.componentList,
                                componentData: t.componentData,
                                itemFocused: t.itemFocused,
                                inStandaloneWindow: t.inStandaloneWindow
                            },
                            on: {
                                toUpdateItemComponent: t.toUpdateItemComponent,
                                toUpdateItem: t.toUpdateItem,
                                toSwitchActiveComponent: function(e) {
                                    !t.inStandaloneWindow && t.toSwitchActiveComponent(i, e)
                                },
                                reloadComponent: function(e) {
                                    !t.inStandaloneWindow && t.reloadComponentFromExternal(i, e)
                                },
                                removeComponent: function(e) {
                                    !t.inStandaloneWindow && t.removeComponentFromExternal(i, e)
                                },
                                changeComponent: function(e) {
                                    !t.inStandaloneWindow && t.changeComponentFromExternal(i, e)
                                }
                            }
                        }, "loadingComponent", t.loadingProps, !1), t.loadingListeners)) : t._e()], 1)
                    }))], 1)
                }))
            },
            staticRenderFns: []
        }
    },
    750: function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("div", {
                    staticClass: "Waterfall_demo",
                    class: [{
                        firstScreen: 0 === t.picList.length
                    }, t.appStyle],
                    attrs: {
                        id: "pictureDisplay"
                    }
                }, [n("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 0 === t.picList.length,
                        expression: "picList.length === 0"
                    }],
                    staticClass: "logo",
                    attrs: {
                        src: t.logoUrl,
                        draggable: "false"
                    }
                }), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 0 === t.picList.length,
                        expression: "picList.length === 0"
                    }],
                    staticClass: "inputPanel"
                }, [n("span", {
                    staticClass: "dirSelect",
                    on: {
                        click: t.toReload
                    }
                }, [t._v(t._s(t.NLS.selectDirLabel))]), n("input", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !1,
                        expression: "false"
                    }],
                    ref: "upload",
                    attrs: {
                        type: "file",
                        webkitdirectory: "webkitdirectory",
                        directory: "directory",
                        multiple: "multiple"
                    },
                    on: {
                        change: t.uploadDic
                    }
                }), n("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 0 === t.picList.length,
                        expression: "picList.length === 0"
                    }],
                    staticClass: "warn"
                }, [t._v(t._s(t.NLS.dataNotUpload))]), n("span", {
                    staticClass: "language"
                }, [n("b", [t._v(t._s(t.NLS.language) + ": ")]), n("span", {
                    staticClass: "langItem",
                    class: {
                        active: "ch" === t.settingMap.language
                    },
                    on: {
                        click: function(e) {
                            t.setLanguage("ch")
                        }
                    }
                }, [t._v("中文")]), n("span", {
                    staticClass: "langItem",
                    class: {
                        active: "fr" === t.settingMap.language
                    },
                    on: {
                        click: function(e) {
                            t.setLanguage("fr")
                        }
                    }
                }, [t._v("Français")]), n("span", {
                    staticClass: "langItem",
                    class: {
                        active: "en" === t.settingMap.language
                    },
                    on: {
                        click: function(e) {
                            t.setLanguage("en")
                        }
                    }
                }, [t._v("English")])]), t.history && t.history.length > 0 ? n("span", {
                    staticClass: "history"
                }, [n("b", [t._v(t._s(t.NLS.history) + ": ")]), t._l(t.history, function(e) {
                    return n("span", {
                        staticClass: "historyItem"
                    }, [t._v(t._s(e))])
                })], 2) : t._e()]), t.pathMap && Object.keys(t.pathMap).length > 0 ? n("div", {
                    staticClass: "directoryList",
                    style: {
                        backgroundImage: "url(" + t.logoSimple + ")"
                    }
                }, [n("div", {
                    staticClass: "pathAndBtn"
                }, [n("div", {
                    staticClass: "fullpath"
                }, [t._l(t.fileFilterPathList, function(e, i) {
                    return n("div", {
                        staticClass: "pathItem"
                    }, [i ? n("span", {
                        staticClass: "elm"
                    }, [t._v("/")]) : t._e(), n("span", {
                        staticClass: "path",
                        on: {
                            click: function(n) {
                                t.jumpDir(e)
                            }
                        }
                    }, [t._v(t._s(e))]), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: i === t.fileFilterPathList.length - 1,
                            expression: "(index === fileFilterPathList.length - 1)"
                        }],
                        staticClass: "elm"
                    }, [t._v("(" + t._s(Object.keys(t.picList_computed).length) + ")")]), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: i === t.fileFilterPathList.length - 1 && !t.showAll && 0 !== t.subDirList.length,
                            expression: "(index === fileFilterPathList.length - 1) && !showAll && subDirList.length !== 0"
                        }],
                        staticClass: "elm"
                    }, [t._v("/")])])
                }), t._l(t.subDirList, function(e) {
                    return t.showAll ? t._e() : n("span", {
                        staticClass: "dir",
                        on: {
                            click: function(n) {
                                t.selectDir(e)
                            }
                        }
                    }, [t._v(t._s(e))])
                })], 2), n("div", {
                    staticClass: "btnGroup"
                }, [n("span", {
                    staticClass: "total"
                }, [t._v("(" + t._s(t.NLS.total) + ": " + t._s(t.picList.length) + ")")]), n("span", {
                    staticClass: "btnItem",
                    class: {
                        active: t.showAll
                    },
                    attrs: {
                        title: t.NLS.showAllTitle
                    },
                    on: {
                        click: t.toShowAll
                    }
                }, [t._v(t._s(t.NLS.showAll))]), n("span", {
                    staticClass: "btnItem shuffle",
                    attrs: {
                        title: t.NLS.shuffleTitle
                    },
                    on: {
                        click: t.toShuffleImage
                    }
                }, [t._v(t._s(t.NLS.shuffle))]), n("span", {
                    staticClass: "btnItem reLoad",
                    attrs: {
                        title: t.NLS.reloadTitle
                    },
                    on: {
                        click: t.toReload
                    }
                }, [t._v(t._s(t.NLS.reload))]), n("span", {
                    staticClass: "btnItem download",
                    attrs: {
                        title: t.NLS.downloadTitle
                    },
                    on: {
                        click: t.toDownload
                    }
                }, [t._v(t._s(t.NLS.download))]), n("span", {
                    staticClass: "btnItem setting",
                    attrs: {
                        title: t.NLS.settingLabel
                    },
                    on: {
                        click: t.toSetting
                    }
                }, [n("icon", {
                    attrs: {
                        "icon-class": "setting"
                    }
                })], 1)])])]) : t._e(), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.pathMap && Object.keys(t.pathMap).length > 0,
                        expression: "pathMap && Object.keys(pathMap).length > 0"
                    }],
                    staticClass: "WaterfallApp"
                }, [n("Waterfall", {
                    ref: "waterfall",
                    style: {
                        width: t.viewWidth ? t.viewWidth + "px" : "100%"
                    },
                    attrs: {
                        componentData: t.componentData,
                        componentList: t.componentList,
                        wrapComponent: t.wrapComponent,
                        columnWidth: t.columnWidth,
                        fixColumnSize: t.fixColumnSize,
                        fixColumnNumber: t.fixColumnNumber,
                        marginRight: t.marginRight,
                        marginBottom: t.marginBottom,
                        paddingLeftRight: t.paddingLeftRight,
                        paddingTopBottom: t.paddingTopBottom,
                        itemMinHeight: t.itemMinHeight,
                        autoAdjustTimes: t.autoAdjustTimes,
                        dynamicHideAndShow: t.dynamicHideAndShow,
                        scrollToBottomMargin: t.scrollToBottomMargin
                    },
                    on: {
                        onScrollToBottom: t.onScrollToBottom
                    }
                })], 1), n("picModal", {
                    ref: "picModal",
                    attrs: {
                        allItems: t.picList_computed
                    }
                }), n("settingModal", {
                    ref: "settingModal",
                    attrs: {
                        setting: t.settingMap
                    },
                    on: {
                        onSettingChange: t.onSettingChange
                    }
                })], 1)
            },
            staticRenderFns: []
        }
    },
    751: function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("div", {
                    staticClass: "Waterfall_layout",
                    class: {
                        horizontal: t.isHorizontal,
                        lastItemNoMargin: t.lastItemNoMargin
                    },
                    style: {
                        flexWrap: t.fixColumnSize ? "wrap" : "nowrap",
                        paddingLeft: t.isHorizontal ? "" : t.paddingLeftRight + "px",
                        paddingRight: t.isHorizontal ? "" : t.paddingLeftRight + "px",
                        paddingTop: t.isHorizontal ? t.paddingTopBottom + "px" : "",
                        paddingBottom: t.isHorizontal ? t.paddingTopBottom + "px" : ""
                    },
                    on: {
                        scroll: t.handleScroll,
                        mousewheel: t.handleScroll
                    }
                }, t._l(t.nbColumn, function(e, i) {
                    return n("div", {
                        ref: "column",
                        refInFor: !0,
                        staticClass: "waterfall_column",
                        style: {
                            marginBottom: t.isHorizontal ? t.marginBottom + "px" : "",
                            marginRight: t.isHorizontal ? "" : t.marginRight + "px",
                            width: t.isHorizontal ? "" : t.fixColumnSize ? t.columnWidth + "px" : "100%",
                            height: t.isHorizontal ? t.fixColumnSize ? t.columnHeight + "px" : "100%" : "",
                            paddingLeft: t.isHorizontal ? t.paddingLeftRight + "px" : "",
                            paddingRight: t.isHorizontal ? t.paddingLeftRight + "px" : "",
                            paddingTop: t.isHorizontal ? "" : t.paddingTopBottom + "px",
                            paddingBottom: t.isHorizontal ? "" : t.paddingTopBottom + "px"
                        }
                    }, t._l(t.itemDataMap.filter(function(e, n) {
                        return e && n % t.nbColumn === i
                    }), function(e, o) {
                        return n("div", {
                            key: e,
                            ref: "row",
                            refInFor: !0,
                            staticClass: "waterfall_column_row",
                            style: Object.assign.apply(Object, [{
                                marginBottom: (!t.isHorizontal && t.marginBottom) + "px",
                                marginRight: (t.isHorizontal && t.marginRight) + "px",
                                minHeight: t.isHorizontal ? "" : t.itemMinHeight + "px",
                                maxHeight: !t.isHorizontal && t.itemMaxHeight ? t.itemMaxHeight + "px" : "",
                                minWidth: t.isHorizontal ? t.itemMinWidth + "px" : "",
                                maxWidth: t.isHorizontal && t.itemMaxWidth ? t.itemMaxWidth + "px" : ""
                            }].concat(t.getCustomStyle(e)))
                        }, [n("div", {
                            staticClass: "contentDiv",
                            style: {
                                background: e.background || t.itemBackground,
                                color: e.fontColor || t.itemFontColor
                            },
                            attrs: {
                                "content-id": e,
                                "content-column": i,
                                "content-row": o
                            }
                        })])
                    }))
                }))
            },
            staticRenderFns: []
        }
    },
    752: function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("basicTemplate", {
                    staticClass: "root"
                }, [n("Waterfall")], 1)
            },
            staticRenderFns: []
        }
    },
    753: function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("div", {
                    staticClass: "setting_modal"
                }, [n("Modal", {
                    ref: "modal",
                    attrs: {
                        closeByClickOutside: !0
                    },
                    on: {
                        onClose: t.modalClose
                    }
                }, [t.setting ? n("div", {
                    ref: "settingContainer",
                    staticClass: "settingContainer",
                    class: [t.setting.appStyle],
                    on: {
                        click: t.updateSetting
                    }
                }, [n("div", {
                    staticClass: "modalTitle"
                }, [t._v(t._s(t.NLS.settingLabel))]), n("div", {
                    staticClass: "settingItem"
                }, [n("div", {
                    staticClass: "itemTitle"
                }, [t._v(t._s(t.NLS.picSizeLabel))]), n("div", {
                    staticClass: "itemOption"
                }, [n("span", {
                    class: {
                        active: "s" === t.setting_.picSize && t.columnNumber <= 0
                    },
                    on: {
                        click: function(e) {
                            t.setting_.picSize = "s",
                            t.columnNumber = 0
                        }
                    }
                }, [t._v(t._s(t.NLS.picSizeSmall))]), n("span", {
                    class: {
                        active: "m" === t.setting_.picSize && t.columnNumber <= 0
                    },
                    on: {
                        click: function(e) {
                            t.setting_.picSize = "m",
                            t.columnNumber = 0
                        }
                    }
                }, [t._v(t._s(t.NLS.picSizeMedium) + " ")]), n("span", {
                    class: {
                        active: "b" === t.setting_.picSize && t.columnNumber <= 0
                    },
                    on: {
                        click: function(e) {
                            t.setting_.picSize = "b",
                            t.columnNumber = 0
                        }
                    }
                }, [t._v(t._s(t.NLS.picSizeBig))])])]), n("div", {
                    staticClass: "settingItem"
                }, [n("div", {
                    staticClass: "itemTitle"
                }, [t._v(t._s(t.NLS.columnNumberLabel))]), n("div", {
                    staticClass: "itemOption"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model:value",
                        value: t.columnNumber,
                        expression: "columnNumber",
                        arg: "value"
                    }],
                    attrs: {
                        type: "number"
                    },
                    domProps: {
                        value: t.columnNumber
                    },
                    on: {
                        change: t.updateSetting,
                        input: function(e) {
                            e.target.composing || (t.columnNumber = e.target.value)
                        }
                    }
                })])]), n("div", {
                    staticClass: "settingItem"
                }, [n("div", {
                    staticClass: "itemTitle"
                }, [t._v(t._s(t.NLS.marginRightLabel))]), n("div", {
                    staticClass: "itemOption"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model:value",
                        value: t.marginRight,
                        expression: "marginRight",
                        arg: "value"
                    }],
                    attrs: {
                        type: "number"
                    },
                    domProps: {
                        value: t.marginRight
                    },
                    on: {
                        change: t.updateSetting,
                        input: function(e) {
                            e.target.composing || (t.marginRight = e.target.value)
                        }
                    }
                })])]), n("div", {
                    staticClass: "settingItem"
                }, [n("div", {
                    staticClass: "itemTitle"
                }, [t._v(t._s(t.NLS.marginBottomLabel))]), n("div", {
                    staticClass: "itemOption"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model:value",
                        value: t.marginBottom,
                        expression: "marginBottom",
                        arg: "value"
                    }],
                    attrs: {
                        type: "number"
                    },
                    domProps: {
                        value: t.marginBottom
                    },
                    on: {
                        change: t.updateSetting,
                        input: function(e) {
                            e.target.composing || (t.marginBottom = e.target.value)
                        }
                    }
                })])]), n("div", {
                    staticClass: "settingItem"
                }, [n("div", {
                    staticClass: "itemTitle"
                }, [t._v(t._s(t.NLS.paddingLeftRightLabel))]), n("div", {
                    staticClass: "itemOption"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model:value",
                        value: t.paddingLeftRight,
                        expression: "paddingLeftRight",
                        arg: "value"
                    }],
                    attrs: {
                        type: "number"
                    },
                    domProps: {
                        value: t.paddingLeftRight
                    },
                    on: {
                        change: t.updateSetting,
                        input: function(e) {
                            e.target.composing || (t.paddingLeftRight = e.target.value)
                        }
                    }
                })])]), n("div", {
                    staticClass: "settingItem"
                }, [n("div", {
                    staticClass: "itemTitle"
                }, [t._v(t._s(t.NLS.paddingTopBottomLabel))]), n("div", {
                    staticClass: "itemOption"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model:value",
                        value: t.paddingTopBottom,
                        expression: "paddingTopBottom",
                        arg: "value"
                    }],
                    attrs: {
                        type: "number"
                    },
                    domProps: {
                        value: t.paddingTopBottom
                    },
                    on: {
                        change: t.updateSetting,
                        input: function(e) {
                            e.target.composing || (t.paddingTopBottom = e.target.value)
                        }
                    }
                })])]), n("div", {
                    staticClass: "settingItem"
                }, [n("div", {
                    staticClass: "itemTitle"
                }, [t._v(t._s(t.NLS.viewWidthLabel))]), n("div", {
                    staticClass: "itemOption"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model:value",
                        value: t.viewWidth,
                        expression: "viewWidth",
                        arg: "value"
                    }],
                    attrs: {
                        type: "number"
                    },
                    domProps: {
                        value: t.viewWidth
                    },
                    on: {
                        change: t.updateSetting,
                        input: function(e) {
                            e.target.composing || (t.viewWidth = e.target.value)
                        }
                    }
                })])]), n("div", {
                    staticClass: "settingItem"
                }, [n("div", {
                    staticClass: "itemTitle"
                }, [t._v(t._s(t.NLS.scaleRatioLabel))]), n("div", {
                    staticClass: "itemOption"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model:value",
                        value: t.scaleRatio,
                        expression: "scaleRatio",
                        arg: "value"
                    }],
                    attrs: {
                        type: "number"
                    },
                    domProps: {
                        value: t.scaleRatio
                    },
                    on: {
                        change: t.updateSetting,
                        input: function(e) {
                            e.target.composing || (t.scaleRatio = e.target.value)
                        }
                    }
                })])]), n("div", {
                    staticClass: "settingItem"
                }, [n("div", {
                    staticClass: "itemTitle"
                }, [t._v(t._s(t.NLS.qualityLabel))]), n("div", {
                    staticClass: "itemOption"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model:value",
                        value: t.quality,
                        expression: "quality",
                        arg: "value"
                    }],
                    attrs: {
                        type: "number",
                        step: "0.1"
                    },
                    domProps: {
                        value: t.quality
                    },
                    on: {
                        change: t.updateSetting,
                        input: function(e) {
                            e.target.composing || (t.quality = e.target.value)
                        }
                    }
                })])]), n("div", {
                    staticClass: "settingItem"
                }, [n("div", {
                    staticClass: "itemTitle"
                }, [t._v(t._s(t.NLS.exportShadowLabel))]), n("div", {
                    staticClass: "itemOption"
                }, [n("span", {
                    class: {
                        active: 1 === t.exportShadow
                    },
                    on: {
                        click: function(e) {
                            t.exportShadow = 1
                        }
                    }
                }, [t._v(t._s(t.NLS.enableLabel))]), n("span", {
                    class: {
                        active: 0 === t.exportShadow
                    },
                    on: {
                        click: function(e) {
                            t.exportShadow = 0
                        }
                    }
                }, [t._v(t._s(t.NLS.disableLabel))])])]), n("div", {
                    staticClass: "settingItem"
                }, [n("div", {
                    staticClass: "itemTitle"
                }, [t._v(t._s(t.NLS.exportRoundLabel))]), n("div", {
                    staticClass: "itemOption"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model:value",
                        value: t.exportRound,
                        expression: "exportRound",
                        arg: "value"
                    }],
                    attrs: {
                        type: "number",
                        step: "1"
                    },
                    domProps: {
                        value: t.exportRound
                    },
                    on: {
                        change: t.updateSetting,
                        input: function(e) {
                            e.target.composing || (t.exportRound = e.target.value)
                        }
                    }
                })])]), n("div", {
                    staticClass: "settingItem"
                }, [n("div", {
                    staticClass: "itemTitle"
                }, [t._v(t._s(t.NLS.contentFilterLabel))]), n("div", {
                    staticClass: "itemOption"
                }, [n("span", {
                    class: {
                        active: "only" === t.setting_.contentFilter
                    },
                    on: {
                        click: function(e) {
                            t.setting_.contentFilter = "only"
                        }
                    }
                }, [t._v(t._s(t.NLS.contentFilterOnly))]), n("span", {
                    class: {
                        active: "all" === t.setting_.contentFilter
                    },
                    on: {
                        click: function(e) {
                            t.setting_.contentFilter = "all"
                        }
                    }
                }, [t._v(t._s(t.NLS.contentFilterAll))])])]), n("div", {
                    staticClass: "settingItem"
                }, [n("div", {
                    staticClass: "itemTitle"
                }, [t._v(t._s(t.NLS.appStyle))]), n("div", {
                    staticClass: "itemOption"
                }, [n("span", {
                    class: {
                        active: "light" === t.setting_.appStyle
                    },
                    on: {
                        click: function(e) {
                            t.setting_.appStyle = "light"
                        }
                    }
                }, [t._v(t._s(t.NLS.appStyleLight))]), n("span", {
                    class: {
                        active: "dark" === t.setting_.appStyle
                    },
                    on: {
                        click: function(e) {
                            t.setting_.appStyle = "dark"
                        }
                    }
                }, [t._v(t._s(t.NLS.appStyleDark))])])]), n("div", {
                    staticClass: "settingItem"
                }, [n("div", {
                    staticClass: "itemTitle"
                }, [t._v(t._s(t.NLS.language))]), n("div", {
                    staticClass: "itemOption"
                }, [n("span", {
                    class: {
                        active: "ch" === t.setting_.language
                    },
                    on: {
                        click: function(e) {
                            t.setting_.language = "ch"
                        }
                    }
                }, [t._v("中文")]), n("span", {
                    class: {
                        active: "fr" === t.setting_.language
                    },
                    on: {
                        click: function(e) {
                            t.setting_.language = "fr"
                        }
                    }
                }, [t._v("Français")]), n("span", {
                    class: {
                        active: "en" === t.setting_.language
                    },
                    on: {
                        click: function(e) {
                            t.setting_.language = "en"
                        }
                    }
                }, [t._v("English")])])]), n("a", {
                    staticClass: "about",
                    attrs: {
                        href: "https://portal.lutianyu.com",
                        target: "_blank"
                    }
                }, [t._v(t._s(t.NLS.aboutAuthor))])]) : t._e()])], 1)
            },
            staticRenderFns: []
        }
    },
    754: function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("div", {
                    staticClass: "failureComponent"
                }, [n("span", {
                    staticClass: "message"
                }, [t._v("Load failed, please check network and "), n("span", {
                    staticClass: "canBeClick",
                    on: {
                        click: function(e) {
                            t.reloadComponent()
                        }
                    }
                }, [t._v("refresh.")])])])
            },
            staticRenderFns: []
        }
    },
    755: function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("div", {
                    staticClass: "Waterfall",
                    style: {
                        background: t.mainBackground
                    }
                }, [n("waterfallLayout", {
                    ref: "layout",
                    attrs: {
                        componentData: t.componentList_computed,
                        itemData: t.itemData,
                        notRenderItemList: [],
                        isHorizontal: t.isHorizontal,
                        columnHeight: t.columnHeight,
                        columnWidth: t.columnWidth,
                        itemMinWidth: t.itemMinWidth,
                        itemMaxWidth: t.itemMaxWidth,
                        itemMinHeight: t.itemMinHeight,
                        itemMaxHeight: t.itemMaxHeight,
                        itemBackground: t.itemBackground,
                        itemFontColor: t.itemFontColor,
                        fixColumnSize: t.fixColumnSize,
                        fixColumnNumber: t.fixColumnNumber,
                        lastItemNoMargin: t.lastItemNoMargin,
                        dynamicNumberColumn: t.dynamicNumberColumn,
                        paddingLeftRight: t.paddingLeftRight,
                        paddingTopBottom: t.paddingTopBottom,
                        marginRight: t.marginRight,
                        marginBottom: t.marginBottom,
                        alignLeft: t.alignLeft,
                        alignTop: t.alignTop,
                        autoAdjustTimes: t.autoAdjustTimes,
                        dynamicHideAndShow: t.dynamicHideAndShow,
                        scrollToRightMargin: t.scrollToRightMargin,
                        scrollToBottomMargin: t.scrollToBottomMargin
                    },
                    on: {
                        onScrollToRight: t.onScrollToRight,
                        onScrollToBottom: t.onScrollToBottom,
                        toNotifyResize: t.notifyResize,
                        onAutoAdjust: t.onAutoAdjust
                    }
                }), n("distribute_store", t._g(t._b({
                    ref: "distribute_store",
                    attrs: {
                        wrapList: t.wrapList,
                        wrapComponent: t.wrapComponent,
                        wrapProps: Object.assign({
                            itemMap: t.itemData,
                            layoutType: "waterfall"
                        }, t.wrapProps),
                        wrapListeners: Object.assign({
                            updateItem: t.updateItem
                        }, t.wrapListeners),
                        failureComponent: t.failureComponent,
                        failureProps: Object.assign({
                            itemMap: t.itemData,
                            layoutType: "waterfall"
                        }, t.failureProps),
                        failureListeners: t.failureListeners,
                        loadingComponent: t.loadingComponent,
                        loadingProps: Object.assign({
                            itemMap: t.itemData,
                            layoutType: "waterfall"
                        }, t.loadingProps),
                        loadingListeners: t.loadingListeners,
                        presetComponents: t.presetComponents,
                        loadingfortabs: t.loadingfortabs,
                        loadingWhileChangeComponent: t.loadingWhileChangeComponent,
                        noCopyAttributeFromComponentList: t.noCopyAttributeFromComponentList,
                        autoSelectActiveComponent: t.autoSelectActiveComponent,
                        componentList: t.componentList,
                        componentData: t.componentData
                    },
                    on: {
                        toAddItem: t.addItem,
                        toRemoveItem: t.removeItem,
                        toUpdate: t._toUpdateComponentData,
                        toUpdateItemData: t._toUpdateItemData,
                        inStandaloneWindow: function(e) {
                            return t.inStandaloneWindow = e
                        },
                        switchFocusItem: function() {
                            for (var e = [], n = arguments.length; n--; )
                                e[n] = arguments[n];
                            return t._emitEvent.apply(void 0, ["switchFocusItem"].concat(e))
                        },
                        activeComponentChanged: function() {
                            for (var e = [], n = arguments.length; n--; )
                                e[n] = arguments[n];
                            return t._emitEvent.apply(void 0, ["activeComponentChanged"].concat(e))
                        },
                        componentAdded: function() {
                            for (var e = [], n = arguments.length; n--; )
                                e[n] = arguments[n];
                            return t._emitEvent.apply(void 0, ["componentAdded"].concat(e))
                        },
                        componentRemoved: function() {
                            for (var e = [], n = arguments.length; n--; )
                                e[n] = arguments[n];
                            return t._emitEvent.apply(void 0, ["componentRemoved"].concat(e))
                        },
                        componentChanged: function() {
                            for (var e = [], n = arguments.length; n--; )
                                e[n] = arguments[n];
                            return t._emitEvent.apply(void 0, ["componentChanged"].concat(e))
                        },
                        componentReloaded: function() {
                            for (var e = [], n = arguments.length; n--; )
                                e[n] = arguments[n];
                            return t._emitEvent.apply(void 0, ["componentReloaded"].concat(e))
                        }
                    }
                }, "distribute_store", t.$attrs, !1), t.$listeners))], 1)
            },
            staticRenderFns: []
        }
    },
    756: function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("transition", {
                    attrs: {
                        name: "list"
                    }
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    }],
                    staticClass: "wrap"
                }, [n("div", {
                    staticClass: "wrapContainer"
                }, [t._t("default")], 2)])])
            },
            staticRenderFns: []
        }
    },
    757: function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                  , e = t.$createElement;
                return (t._self._c || e)("div", {
                    staticClass: "docRoot",
                    attrs: {
                        id: t.rootID
                    }
                }, [t._t("default")], 2)
            },
            staticRenderFns: []
        }
    },
    758: function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("div", {
                    staticClass: "picturePanel"
                }, [n("img", {
                    ref: "img",
                    staticClass: "pic",
                    attrs: {
                        src: t.item.url,
                        draggable: "false"
                    },
                    on: {
                        click: t.onClick
                    }
                }), n("div", {
                    staticClass: "background"
                }, [n("div", {
                    staticClass: "infoPanel"
                }, [n("span", {
                    attrs: {
                        title: t.item.name
                    }
                }, [t._v(t._s(t.NLS.fileName) + ": " + t._s(t.item.name))]), n("span", {
                    staticClass: "size",
                    attrs: {
                        title: t.itemSize
                    }
                }, [t._v(t._s(t.NLS.fileSize) + ": " + t._s(t.itemSize))])]), n("div", {
                    staticClass: "pathPanel"
                }, [n("span", {
                    staticClass: "path",
                    attrs: {
                        title: t.item.path
                    }
                }, [t._v(t._s(t.NLS.filePath) + ": " + t._s(t.item.path))])])])])
            },
            staticRenderFns: []
        }
    },
    759: function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("svg", {
                    staticClass: "svg-icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [n("use", {
                    attrs: {
                        "xlink:href": t.iconName
                    }
                })])
            },
            staticRenderFns: []
        }
    },
    76: function(t, e, n) {
        "use strict";
        function i(t, e, n) {
            if (arguments.length < 2)
                return !1;
            var i = t.style[r(e)];
            if (!i)
                if (document.defaultView && document.defaultView.getComputedStyle) {
                    var o = document.defaultView.getComputedStyle(t, n);
                    i = o ? o.getPropertyValue(e) : n
                } else
                    t.currentStyle && (i = t.currentStyle[r(e)]);
            return i
        }
        function o(t, e) {
            return t.classList ? t.classList.contains(e) : !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"))
        }
        function a(t, e) {
            t.classList ? t.classList.add(e) : o(t, e) || (t.className += " " + e)
        }
        function s(t, e) {
            if (t.classList)
                t.classList.remove(e);
            else if (o(t, e)) {
                var n = new RegExp("(\\s|^)" + e + "(\\s|$)");
                t.className = t.className.replace(n, " ")
            }
        }
        function r(t) {
            return t.replace(/-(\w)/g, function(t, e) {
                return e.toUpperCase()
            })
        }
        function l() {
            return window.innerWidth ? {
                width: window.innerWidth,
                height: window.innerHeight
            } : document.documentElement && document.documentElement.clientHeight ? {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            } : void 0
        }
        function c(t) {
            for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "y", o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], a = [], s = t, r = e; r > 0 && "HTML" !== s.nodeName; ) {
                var l = "y" !== n ? i(s, "overflow-x") : ""
                  , c = "x" !== n ? i(s, "overflow-y") : "";
                ("y" === n || "auto" !== l && "scroll" !== l) && ("x" === n || "auto" !== c && "scroll" !== c) || (a.push(s),
                o || (r = 0)),
                s = s.parentElement,
                r--
            }
            return a.push(document),
            o ? a : a[0]
        }
        e.c = a,
        e.d = s,
        e.a = l,
        e.b = c
    },
    760: function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "clickOutside",
                        rawName: "v-clickOutside.immediate.checkOnMousedown",
                        value: t._clickOutside,
                        expression: "_clickOutside",
                        modifiers: {
                            immediate: !0,
                            checkOnMousedown: !0
                        }
                    }],
                    staticClass: "Popover",
                    style: {
                        zIndex: t.isToggled ? t.shownIndex : ""
                    },
                    on: {
                        mousemove: function(e) {
                            t._trigger_mousemove(e)
                        },
                        mouseleave: function(e) {
                            t._trigger_mouseleave(e)
                        }
                    }
                }, [t.$slots.trigger ? n("div", {
                    ref: "trigger",
                    staticClass: "Popover-trigger",
                    on: {
                        click: function(e) {
                            t._trigger_click(e)
                        },
                        contextmenu: function(e) {
                            t._trigger_contextmenu(e)
                        },
                        mouseenter: function(e) {
                            t._trigger_mouseenter(e)
                        },
                        mousedown: function(e) {
                            t._trigger_active(e)
                        }
                    }
                }, [t._t("trigger")], 2) : t._e(), n(t.transitionType, {
                    tag: "component",
                    attrs: {
                        duration: t.transitionDuration,
                        direction: 0 === t.direction_.indexOf("top") || 0 === t.direction_.indexOf("bottom") ? "vertical" : "horizontal"
                    }
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isToggled && !t.outOfViewport,
                        expression: "isToggled && !outOfViewport"
                    }],
                    ref: "popover",
                    staticClass: "Popover-container",
                    style: {
                        position: t.positionMode,
                        top: t.top_,
                        right: t.right_,
                        bottom: t.bottom_,
                        left: t.left_,
                        zIndex: t.isToggled && t.shownIndex,
                        transitionDuration: t.isToggled ? t.updatePositionTransitionDuration + "ms" : ""
                    }
                }, [t.showArrow && !t.centerInRootElement ? n("div", {
                    staticClass: "Popover-arrow",
                    class: [t.directionClass, {
                        center: t.alignCenter
                    }],
                    style: [t.arrowStyle, {
                        backgroundColor: this.backgroundColor
                    }]
                }) : t._e(), n("div", {
                    staticClass: "Popover-wrapper",
                    style: {
                        padding: t.wrapperPadding + "px",
                        backgroundColor: t.backgroundColor
                    }
                }, [n("div", {
                    staticClass: "Popover-content",
                    style: {
                        height: t.contentHeight,
                        width: t.contentWidth
                    }
                }, [t.couldAlive ? t._t("default") : t._e()], 2)])])])], 1)
            },
            staticRenderFns: []
        }
    },
    761: function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                  , e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            staticRenderFns: [function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("div", {
                    staticClass: "loadingComponent"
                }, [n("span", [t._v("Loading...")])])
            }
            ]
        }
    },
    762: function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("div", {
                    staticClass: "modal VflexSB"
                }, [n("div", {
                    staticClass: "modalBackground",
                    class: {
                        active: t.isOpen
                    }
                }, [n("div", {
                    staticClass: "modalTarget"
                })]), n("Popover", {
                    ref: "popover",
                    attrs: {
                        rootElement: t.getRootElement(),
                        centerInRootElement: !0,
                        positionMode: "fixed",
                        backgroundColor: "transparent",
                        autoResize: !0,
                        closeByClickOutside: t.closeByClickOutside,
                        wrapperPadding: 0,
                        hideWhileTargetNotInViewport: !1,
                        updatePositionTransitionDuration: 0,
                        transitionDuration: 200,
                        autoResizeMargin: 30
                    },
                    on: {
                        onOpenBegin: t.onOpenBegin,
                        onOpen: t.onOpen,
                        onClose: t.onClose,
                        onCloseBegin: t.onCloseBegin
                    }
                }, [n("div", {
                    ref: "slot",
                    staticClass: "modalContainer",
                    style: {
                        maxWidth: t.containerWidth
                    }
                }, [t._t("default")], 2)])], 1)
            },
            staticRenderFns: []
        }
    },
    763: function(t, e) {
        t.exports = {
            render: function() {
                var t = this
                  , e = t.$createElement;
                return (t._self._c || e)("div", {
                    staticClass: "wrapEmpty"
                }, [t._t("default")], 2)
            },
            staticRenderFns: []
        }
    },
    765: function(t, e) {
        t.exports = {
            ch: {
                selectDirLabel: "请选择包含图片的文件夹",
                selectDir: "选择文件夹...",
                dataNotUpload: "*图片数据不会上传至服务器*",
                history: "历史记录",
                total: "总数",
                showAll: "显示所有",
                showAllTitle: "显示文件夹中包含的所有文件",
                shuffle: "随机排列",
                shuffleTitle: "随机排列图片",
                reload: "重新选择",
                downloadTitle: "生成截图并下载",
                download: "截图",
                reloadTitle: "重新选择文件夹",
                settingLabel: "设置",
                picSizeLabel: "图片尺寸",
                picSizeSmall: "小",
                picSizeMedium: "中",
                picSizeBig: "大",
                columnNumberLabel: "固定列数",
                marginRightLabel: "图片右间距",
                marginBottomLabel: "图片底间距",
                paddingLeftRightLabel: "左右间距",
                paddingTopBottomLabel: "上下间距",
                viewWidthLabel: "视窗宽度",
                scaleRatioLabel: "截图缩放",
                qualityLabel: "截图质量",
                exportRoundLabel: "截图时圆角尺寸",
                exportShadowLabel: "截图时保持阴影",
                enableLabel: "启用",
                disableLabel: "禁止",
                contentFilterLabel: "文件筛选",
                contentFilterOnly: "仅图片",
                contentFilterAll: "全部",
                appStyle: "应用风格",
                appStyleLight: "亮色",
                appStyleDark: "暗色",
                language: "语言",
                fileName: "名称",
                fileSize: "尺寸",
                fileType: "类型",
                filePath: "路径",
                toPrevious: "前一个",
                toNext: "后一个",
                maximise: "最大化",
                minimise: "还原",
                openInNew: "新窗口打开图片(不要运行AdBlock插件)",
                aboutAuthor: "关于作者"
            },
            fr: {
                selectDirLabel: "Sélectionnez un répertoire contenant des images",
                selectDir: "Sélectionner un répertoire...",
                dataNotUpload: "*les données ne seront téléchargées sur aucun serveur*",
                history: "L'histoire",
                total: "Totale",
                showAll: "Afficher toutes",
                showAllTitle: "Afficher toutes les images dans le répertoire racine",
                shuffle: "Mélanger",
                shuffleTitle: "Mélanger les images",
                reload: "Recharger",
                downloadTitle: "Générez des captures d'écran et téléchargez",
                download: "Capture d'écran",
                reloadTitle: "Recharger le répertoire",
                settingLabel: "Réglage",
                picSizeLabel: "Taille de l'image",
                picSizeSmall: "Petite",
                picSizeMedium: "Moyenne",
                picSizeBig: "Grosse",
                columnNumberLabel: "Numéro de colonne fixe",
                marginRightLabel: "Marge droite",
                marginBottomLabel: "Fond de marge",
                paddingLeftRightLabel: "Rembourrage gauche et droite",
                paddingTopBottomLabel: "Rembourrage haut et bas",
                viewWidthLabel: "Largeur de vue",
                scaleRatioLabel: "Échelle de capture",
                qualityLabel: "Qualité de capture",
                exportRoundLabel: "Taille du congé quand capture",
                exportShadowLabel: "Gardez l'ombre quand capture",
                enableLabel: "Activer",
                disableLabel: "Désactiver",
                contentFilterLabel: "Filtre de contenu",
                contentFilterOnly: "Seulement le type d'image",
                contentFilterAll: "Toute",
                appStyle: "Style",
                appStyleLight: "Clair",
                appStyleDark: "Noir",
                language: "Language",
                fileName: "Nom",
                fileSize: "Taille",
                fileType: "Type",
                filePath: "Chemin",
                toPrevious: "Au précédent",
                toNext: "Au suivant",
                maximise: "Maximiser",
                minimise: "Revenir",
                openInNew: "Ouvrir dans un nouvel onglet (ne pas exécuter AdBlock)",
                aboutAuthor: "À propos de l'auteur"
            },
            en: {
                selectDirLabel: "Select a folder containing images",
                selectDir: "Select directory...",
                dataNotUpload: "*data will not be uploaded to any server*",
                history: "History",
                total: "Total",
                showAll: "Show all",
                showAllTitle: "Show all image in root directory",
                shuffle: "Shuffle",
                shuffleTitle: "Shuffle images",
                reload: "Reload",
                downloadTitle: "Generate screenshots and download",
                download: "Screenshot",
                reloadTitle: "Reload directory",
                settingLabel: "Setting",
                picSizeLabel: "Picture size",
                picSizeSmall: "Small",
                picSizeMedium: "Medium",
                picSizeBig: "Big",
                columnNumberLabel: "Fix column number",
                marginRightLabel: "Margin right",
                marginBottomLabel: "Margin bottom",
                paddingLeftRightLabel: "Padding left and right",
                paddingTopBottomLabel: "Padding top and bottom",
                viewWidthLabel: "View width",
                scaleRatioLabel: "Capture scale",
                qualityLabel: "Capture quality",
                exportRoundLabel: "Fillet size when screenshots",
                exportShadowLabel: "Keep shade when screenshots",
                enableLabel: "Enable",
                disableLabel: "Disable",
                contentFilterLabel: "Content filter",
                contentFilterOnly: "Only image type",
                contentFilterAll: "All",
                appStyle: "Style",
                appStyleLight: "Light",
                appStyleDark: "Dark",
                language: "Language",
                fileName: "Name",
                fileSize: "Size",
                fileType: "Type",
                filePath: "Path",
                toPrevious: "To previous",
                toNext: "To next",
                maximise: "Maximise",
                minimise: "Revert",
                openInNew: "Open in new tab (don't run AdBlock)",
                aboutAuthor: "About author"
            }
        }
    },
    766: function(t, e, n) {
        function i(t) {
            var e = o[t];
            return e ? n.e(e[1]).then(function() {
                return n(e[0])
            }) : Promise.reject(new Error("Cannot find module '" + t + "'."))
        }
        var o = {
            "./index.html": [767, 1],
            "./static/extendList": [282, 0],
            "./static/extendList.json": [282, 0]
        };
        i.keys = function() {
            return Object.keys(o)
        }
        ,
        t.exports = i,
        i.id = 766
    },
    88: function(t, e, n) {
        "use strict";
        function i(t, e, n, i) {
            if (g[e] = g[e] || [],
            g[e].push(n),
            !r(e).length || i) {
                o(e);
                var a = document.createElement("script");
                a.type = "text/javascript",
                a.src = t,
                a.setAttribute("refId", e),
                a.onload = function() {
                    for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                        n[i] = arguments[i];
                    v = n;
                    var o = [].concat(g[e]);
                    g[e] = [],
                    o && o.forEach(function(t) {
                        t && t.apply(void 0, n)
                    })
                }
                ,
                a.onerror = function() {
                    for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                        n[i] = arguments[i];
                    v = n;
                    var o = [].concat(g[e]);
                    g[e] = [],
                    o && o.forEach(function(t) {
                        t && t.apply(void 0, n)
                    })
                }
                ,
                document.body.appendChild(a)
            } else
                1 === g[e].length && (n && n.apply(void 0, p()(v)),
                g[e] = [])
        }
        function o(t, e) {
            var n = r(t);
            n.length > 0 && document.body.contains(n[0]) && document.body.removeChild(n[0])
        }
        function a(t, e) {
            var n = l(t);
            n.length > 0 && document.head.contains(n[0]) && document.head.removeChild(n[0])
        }
        function s(t) {
            return document.querySelectorAll("[refId=" + t + "]")
        }
        function r(t) {
            return document.querySelectorAll("script[refId=" + t + "]")
        }
        function l(t) {
            return document.querySelectorAll("link[refId=" + t + "]")
        }
        function c(t, e, n, i) {
            if (_[e] = _[e] || [],
            _[e].push(n),
            !l(e).length || i) {
                a(e);
                var o = document.createElement("link");
                o.rel = "stylesheet",
                o.setAttribute("refId", e),
                o.href = t,
                o.onload = function() {
                    for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                        n[i] = arguments[i];
                    w = n;
                    var o = [].concat(_[e]);
                    _[e] = [],
                    o && o.forEach(function(t) {
                        t && t.apply(void 0, n)
                    })
                }
                ,
                o.onerror = function() {
                    for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                        n[i] = arguments[i];
                    w = n;
                    var o = [].concat(_[e]);
                    _[e] = [],
                    o && o.forEach(function(t) {
                        t && t.apply(void 0, n)
                    })
                }
                ,
                document.head.appendChild(o)
            } else
                1 === _[e].length && (n && n.apply(void 0, p()(w)),
                _[e] = [])
        }
        function d(t, e, n, i) {
            if (e) {
                var o = s(e);
                if (0 !== o.length && !n)
                    return;
                var a = document.createElement("style");
                0 === o.length || i || (a = o[0]),
                a.innerHTML = t,
                a.setAttribute("refId", e),
                a.setAttribute("type", "text/css"),
                document.getElementsByTagName("head")[0].appendChild(a)
            } else
                console.warn("can't not generate this style file, because the ref-id has not given.")
        }
        e.b = i,
        e.c = c,
        e.a = d;
        var m = n(123)
          , h = (n.n(m),
        n(125))
          , p = n.n(h)
          , u = n(77)
          , f = (n.n(u),
        n(126))
          , g = (n.n(f),
        {})
          , v = null
          , _ = {}
          , w = null
    }
}, [325]);
