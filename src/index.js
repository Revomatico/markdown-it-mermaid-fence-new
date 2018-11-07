module.exports = function (e) {
  var r = {};

  function t(n) {
    if (r[n]) return r[n].exports;
    var u = r[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(u.exports, u, u.exports, t), u.l = !0, u.exports
  }
  return t.m = e, t.c = r, t.d = function (e, r, n) {
    t.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: n
    })
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, t.t = function (e, r) {
    if (1 & r && (e = t(e)), 8 & r) return e;
    if (4 & r && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (t.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & r && "string" != typeof e)
      for (var u in e) t.d(n, u, function (r) {
        return e[r]
      }.bind(null, u));
    return n
  }, t.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return t.d(r, "a", r), r
  }, t.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r)
  }, t.p = "", t(t.s = 2)
}([function (e, r) {
  e.exports = require("mermaid")
}, function (e, r) {
  e.exports = require("markdown-it-fence")
}, function (e, r, t) {
  "use strict";
  var n = o(t(1)),
    u = o(t(0));

  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var i = function (e, r, t, n) {
      var o = e[r],
        i = (o.info.trim(), o.content.trim());
      try {
        return u.default.parse(i), '<div class="mermaid">' + i + "</div>"
      } catch (e) {
        var a = e.str;
        e.hash;
        return "<pre>" + a + "</pre>"
      }
    },
    a = function (e) {
      return "mermaid" === e.trim().split(" ", 2)[0]
    };
  e.exports = function (e, r) {
    var t = (r = r || {}).theme || "default",
      o = (r.render || e.renderer.rules.fence, r.marker || "`"),
      f = r.ganttAxisFormat || "%Y-%m-%d";
    return u.default.loadPreferences = function (e) {
      return u.default.initialize({
        theme: t,
        gantt: {
          axisFormatter: [
            [f, function (e) {
              return 1 === e.getDay()
            }]
          ]
        }
      }), {
        "mermaid-theme": t,
        "gantt-axis-format": f
      }
    }, (0, n.default)(e, "mermaid", {
      marker: o,
      render: i,
      validate: a
    })
  }
}]);
//# sourceMappingURL=main.js.map