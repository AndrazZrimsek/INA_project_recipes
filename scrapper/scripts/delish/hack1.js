"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2841, 7059, 6158, 7353],
  {
    15366: function (e, t, r) {
      r.d(t, {
        Cl: function () {
          return u;
        },
        QM: function () {
          return f;
        },
        dS: function () {
          return d;
        },
        u1: function () {
          return p;
        },
      });
      var n = r(76145),
        i = r(2929),
        o = r(81463),
        a = r(17117),
        l = r(11129);
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let u = (0, i.Z)("div", {
          target: "e6yd7uy3",
        })(
          (0, o.ZP)(
            "vertical-ad-container",
            s(
              s(
                s(
                  s(
                    s(s(s(s(s(s({}, l.Cg), l.jf), l.GQ), l.fz), l.eC), l.bK),
                    l.e6
                  ),
                  l.FK
                ),
                l.cp
              ),
              l.WD
            ),
            {
              position: "sticky",
              top: "5rem",
              display: {
                _: "block",
                "<smd": "none",
              },
            }
          ),
          ""
        ),
        p = (0, i.Z)("div", {
          target: "e6yd7uy2",
        })(
          (0, o.ZP)(
            "vertical-ad-wrapper",
            s(
              s(
                s(
                  s(
                    s(
                      s(s(s(s(s(s({}, l.Oq), l.Cg), l.jf), l.GQ), l.fz), l.eC),
                      l.bK
                    ),
                    l.e6
                  ),
                  l.FK
                ),
                l.cp
              ),
              l.WD
            ),
            {
              top: {
                "sm>": "7rem",
              },
              variant: "ad-wrapper",
              display: {
                "<smd": "flex",
              },
              flexDirection: {
                "<smd": "column",
              },
              justifyContent: (e) =>
                e.mobileStickyAds
                  ? {
                      "<xs": "start",
                      _: "space-between",
                    }
                  : "space-between",
              "&:after": {
                content: {
                  "<smd": '""',
                },
                display: {
                  "<smd": "flex",
                },
                borderBottom: {
                  "<smd": "border-thin-greyLight",
                },
                position: (e) =>
                  e.mobileStickyAds
                    ? {
                        "<xs": "absolute",
                        _: "static",
                      }
                    : "static",
                bottom: {
                  "<xs": 0,
                },
                width: {
                  "<xs": "-webkit-fill-available",
                },
              },
            }
          ),
          ""
        ),
        d = (0, i.Z)("div", {
          target: "e6yd7uy1",
        })(
          (0, o.ZP)(
            null,
            s(s(s(s(s(s(s({}, l.jf), l.FK), l.bK), l.fz), l.e6), l.Dh), l.WD),
            {
              float: "right",
              marginRight: `calc(-1 * calc(330px + ${a.GO}))`,
              width: "330px",
              position: "absolute",
              right: "1rem",
              paddingLeft: "30px",
              display: {
                "<smd": "none",
                smd: "",
              },
            }
          ),
          ""
        ),
        f = (0, i.Z)("div", {
          target: "e6yd7uy0",
        })(
          (0, o.ZP)(null, s(s({}, l.jf), l.WD), {
            display: {
              "<smd": "",
              smd: "none",
            },
          }),
          ""
        );
    },
    2783: function (e, t, r) {
      var n = r(4575),
        i = r(27954),
        o = r(13266),
        a = r(29846),
        l = r(67739),
        c = r(68124),
        s = r(2106),
        u = r(50581),
        p = r(96435),
        d = r(10043),
        f = r(23615);
      let b = [
        "profile",
        "expertType",
        "bioMaxHeight",
        "lineClamp",
        "isInFlyout",
      ];
      function m(e) {
        let {
            profile: t = null,
            expertType: r,
            bioMaxHeight: f,
            lineClamp: m,
            isInFlyout: g,
          } = e,
          y = (0, i.Z)(e, b),
          O = (0, u.useRef)(),
          { 0: h, 1: P } = (0, u.useState)(!1),
          Z = (0, p.$G)("content.readFullBio"),
          {
            display_name: j,
            bio: w,
            job_title: D,
            legacy_id: v,
            slug: _,
            photo: E,
          } = t ?? {},
          S = (0, s.pz)(v, _);
        (0, u.useEffect)(() => {
          let { clientHeight: e, scrollHeight: t } = O?.current ?? {};
          P((t > (f ?? e) || g) && !(0, l.x)(S));
        }, []);
        let { byline: C } = r ?? {},
          T = (0, p.$G)(`content.enhancedBylines.${(0, s.aC)(C)}`);
        if (!j || !(0, a.o)(w)) return null;
        let R = (0, d.tZ)(
          o.YR,
          null,
          E
            ? (0, d.tZ)(o.mn, {
                image: {
                  hips_url: E,
                },
                alt: `Headshot of ${j}`,
                title: `Headshot of ${j}`,
                width: "100%",
                height: "100%",
                default: {
                  resize: "120:*",
                  crop: "1x1",
                },
              })
            : (0, d.tZ)(o._Z, null)
        );
        return (0, d.tZ)(
          o.W2,
          (0, n.Z)(
            {
              isInFlyout: g,
            },
            y
          ),
          R,
          (0, d.tZ)(
            o.ic,
            null,
            !!T && (0, d.tZ)(o.O3, null, T),
            (0, d.tZ)(
              o.aQ,
              null,
              (0, d.tZ)(
                c.Ld,
                {
                  __themeKey: "author-bio-name",
                  href: S ?? "#",
                },
                (0, d.tZ)("span", null, j)
              )
            ),
            !!D && (0, d.tZ)(o.Xq, null, D)
          ),
          (0, d.tZ)(
            o.sO,
            null,
            (0, d.tZ)(o.wp, {
              ref: O,
              dangerouslySetInnerHTML: {
                __html: w,
              },
              lineClamp: m,
            }),
            h &&
              (0, d.tZ)(
                c.Ld,
                {
                  __themeKey: "author-bio-read-more",
                  href: S,
                },
                Z
              )
          )
        );
      }
      (m.displayName = "AuthorBio"),
        f.shape({
          display_name: f.string,
          job_title: f.string,
          bio: f.string,
          legacy_id: f.number,
          photo: f.string,
          slug: f.string,
          title: f.string,
        }),
        f.shape({
          byline: f.string,
        }),
        f.number,
        f.shape({}),
        f.bool,
        (m.defaultProps = {
          profile: null,
          expertType: null,
          bioMaxHeight: null,
          lineClamp: null,
          isInFlyout: !1,
        }),
        (t.Z = m);
    },
    80851: function (e, t, r) {
      r.d(t, {
        P: function () {
          return o;
        },
        y: function () {
          return i;
        },
      });
      var n = r(97144);
      function i() {
        return (
          "autos" ===
          (0, n.Vi)("layoutContextProps.siteData.metadata.scope", "")
        );
      }
      function o(e) {
        return "autos" === e.metadata.scope || "autos" === e.scopeOverride;
      }
    },
    36686: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return f;
        },
      });
      var n = r(4575),
        i = r(17117),
        o = r(65218),
        a = r.n(o),
        l = r(77533),
        c = r(97144),
        s = r(6372),
        u = r(10043),
        p = r(50581);
      let d = a()(() => r.e(528).then(r.bind(r, 10528)), {
        loadableGenerated: {
          webpack: () => [10528],
        },
      });
      function f({ noPrint: e, styles: t }) {
        let r = (0, c.Vi)("data.content.0.media"),
          o = (0, c.Vi)("data.content.0.metadata.header.title_layout"),
          a = l.kA[o] || l.Xv.TITLE_LAYOUT_TEXT_ONLY,
          f = [l.jT.CONTENT_LEAD];
        e && f.push(l.F3);
        let b =
            Array.isArray(r) &&
            a !== l.Xv.TITLE_LAYOUT_UNDER &&
            a !== l.Xv.TITLE_LAYOUT_TEXT_OVER,
          m = a === l.Xv.TITLE_LAYOUT_UNDER;
        return (0, u.tZ)(
          p.Fragment,
          null,
          b
            ? (0, u.tZ)(
                i.pX,
                (0, n.Z)(
                  {
                    className: f.join(" "),
                  },
                  t
                ),
                (0, u.tZ)(d, {
                  media: r,
                  contentHeaderType: a,
                })
              )
            : null,
          m
            ? null
            : (0, u.tZ)(s.g7, {
                name: "content-layout.lead-media-legal-language",
              })
        );
      }
      f.defaultProps = {
        styles: null,
        noPrint: !1,
      };
    },
    14828: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return N;
        },
      });
      var n = r(4575),
        i = r(27954),
        o = r(17353),
        a = r(45645),
        l = r(17117),
        c = r(68642),
        s = r(842),
        u = r(28705),
        p = r(58671),
        d = r(77533),
        f = r(53612),
        b = r(97144),
        m = r(50581),
        g = r(58495),
        y = r(65218),
        O = r.n(y),
        h = r(96975),
        P = r(8501),
        Z = r(5182),
        j = r(6372),
        w = r(24701),
        D = r(22135),
        v = r(10043);
      let _ = (0, h.V)(
        O()(() => r.e(2626).then(r.bind(r, 92626)), {
          loadableGenerated: {
            webpack: () => [92626],
          },
        }),
        {
          strategy: h.j.LOAD,
        }
      );
      function E() {
        let e = (0, D.r)(w.VZ),
          t = (0, D.r)(w.hH),
          r = (0, D.r)(w.P1);
        return e || t || r ? (0, v.tZ)(_, null) : null;
      }
      var S = r(21215),
        C = r(90632);
      let T = [
          "dom",
          "displayShare",
          "noPrint",
          "withSeoEnabled",
          "withSocialReview",
        ],
        R = O()(() => r.e(1177).then(r.bind(r, 91177)), {
          loadableGenerated: {
            webpack: () => [91177],
          },
        }),
        A = (0, h.V)(
          O()(() => r.e(9403).then(r.bind(r, 89403)), {
            loadableGenerated: {
              webpack: () => [89403],
            },
          }),
          {
            strategy: h.j.STATIC,
          }
        ),
        x = O()(() => r.e(5862).then(r.bind(r, 5862)), {
          loadableGenerated: {
            webpack: () => [5862],
          },
        });
      function N(e) {
        let {
            dom: t,
            displayShare: r,
            noPrint: y,
            withSeoEnabled: O,
            withSocialReview: h,
          } = e,
          w = (0, i.Z)(e, T),
          D = (0, g.b9)(Z.PQ),
          _ = (0, b.Vi)("data.content.0.display_type.title"),
          N = (0, b.Vi)("data.content.0.metadata.custom_canonical"),
          I = (0, b.Vi)("data.content.0.publish_source.title"),
          k = (0, b.Vi)("layoutContextProps.siteData.brand.name"),
          L = (0, b.Vi)("layoutContextProps.siteData.locale"),
          G = (0, b.Vi)("layoutContextProps.canonicalUrl"),
          U = (0, b.Vi)("ssr.spotImSeoComments", null),
          F = (0, u.$)(_),
          $ = (0, m.useRef)(),
          V = L?.country || "",
          B = k?.concat?.(" ", V),
          K = (0, a.g)(c.F),
          M = (0, a.p)(_) || "body-text";
        return (
          (0, m.useEffect)(() => {
            if (window.ResizeObserver) {
              let e = new ResizeObserver((e) => {
                e.forEach((e) => {
                  window.dispatchEvent(
                    new CustomEvent("article-body.resize", {
                      detail: {
                        entry: e,
                      },
                    })
                  );
                });
              });
              $.current &&
                (D({
                  articleBodyRef: $,
                  offsetTop: $.current.offsetTop,
                }),
                e.observe($.current));
            }
          }, [$?.current]),
          y && (F += ` ${d.F3}`),
          (0, v.tZ)(
            l.Ml,
            (0, n.Z)(
              {
                className: F,
                ref: $,
              },
              w,
              {
                __themeKey: M,
              }
            ),
            t
              ? (0, v.tZ)(f.Z, {
                  dom: t,
                  styles: K,
                  views: o.Z,
                  renderNodeId: !0,
                  siblingComponent: x,
                })
              : null,
            (0, v.tZ)(E, null),
            r ? (0, v.tZ)(R, null) : null,
            N &&
              I !== B &&
              (0, v.tZ)(A, {
                link: N,
                sourceTitle: I,
              }),
            (0, v.tZ)(P.Z, null),
            (0, v.tZ)(p.Z, null),
            (0, v.tZ)(j.g7, {
              name: "layout.before-comments",
            }),
            (0, v.tZ)(s.Z, {
              canonicalUrl: G,
              withSeoEnabled: O,
              withSocialReview: h,
            }),
            U &&
              (0, v.tZ)(S.h, {
                props: {
                  extraExtendedSchema: U,
                  toJSON: C.rQ,
                },
              })
          )
        );
      }
      (N.displayName = "Body"),
        (N.defaultProps = {
          displayShare: !1,
          withSeoEnabled: !1,
          withSocialReview: !1,
          noPrint: !1,
        });
    },
    45645: function (e, t, r) {
      r.d(t, {
        g: function () {
          return c;
        },
        p: function () {
          return l;
        },
      });
      var n = r(1462),
        i = r(80851),
        o = r(21857),
        a = r.n(o);
      let l = (e) =>
          (0, i.y)() && e === n.cq.LONGFORM_ARTICLE
            ? "longform-article-body"
            : null,
        c = (e) =>
          (0, i.y)()
            ? a()(e, {
                p: {
                  themeKey: "body-text-paragraph",
                },
              })
            : e;
    },
    842: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return C;
        },
      });
      var n = r(4575),
        i = r(27954),
        o = r(95e3),
        a = r(50581),
        l = r(73292),
        c = r(29742),
        s = r(97144),
        u = r(65218),
        p = r.n(u),
        d = r(22717),
        f = r(38817);
      r(14812);
      let {
        SERVER_OPENWEB_SEO_RATING_URL: b,
        SERVER_OPENWEB_SEO_BASE_URL: m,
        RUNTIME_OPEN_WEB_ENABLED: g = !0,
      } = o.ZP;
      new f.Z("SpotIm");
      let { RUNTIME_OPEN_WEB_ENABLED: y = !0 } = o.ZP;
      var O = r(64540),
        h = r(50001),
        P = r(58495),
        Z = r(64217),
        j = r(10043);
      let w = ["spotimConfig", "canonicalUrl"],
        D = ["canonicalUrl"],
        { RUNTIME_OPEN_WEB_ENABLED: v = !0 } = o.ZP,
        _ = p()(() => Promise.resolve().then(r.bind(r, 50230)), {
          loadableGenerated: {
            webpack: () => [50230],
          },
        });
      function E(e) {
        let { spotimConfig: t, canonicalUrl: r } = e,
          o = (0, i.Z)(e, w),
          l = (0, P.b9)(Z.VW),
          u = (0, a.useId)(),
          p = (function () {
            let e = (0, s.Vi)("displayType"),
              t = (0, s.Vi)("layoutContextProps.siteData.brand.slug"),
              r = (0, s.Vi)("layoutContextProps.dataSlug"),
              n = (0, c.getTemplateName)(e),
              i = (0, s.Vi)("data.content.0.display_id"),
              o = (0, s.Vi)("data.content.0.legacy_id"),
              a = (0, c.getDisplayId)({
                display_id: i,
                legacy_id: o,
              }),
              l = r || t;
            return l && n ? `${l}.${n}.${a}` : "";
          })();
        return (
          (0, a.useEffect)(() => {
            l(u);
          }, []),
          (0, j.tZ)(
            h.l9,
            null,
            (0, j.tZ)(O.h, {
              anchorId: u,
            }),
            (0, j.tZ)(
              _,
              (0, n.Z)(
                {
                  spotimConfig: t,
                  postId: p,
                  postUrl: r,
                },
                o
              )
            )
          )
        );
      }
      function S(e) {
        let { canonicalUrl: t } = e,
          r = (0, i.Z)(e, D),
          a = (0, s.Vi)("layoutContextProps.siteData.metadata.spotim"),
          u = (function (e) {
            if (!e) return null;
            let t = {};
            if (e.id)
              switch (o.w6) {
                case o.Ty.PRODUCTION:
                  (t.spotId = e.id.prod), (t.ssotoken = e.ssotoken.prod);
                  break;
                case o.Ty.STAGE:
                case o.Ty.FEATURE:
                  (t.spotId = e.id.stage), (t.ssotoken = e.ssotoken.stage);
                  break;
                case o.Ty.DEVELOPMENT:
                  (t.spotId = e.id.dev), (t.ssotoken = e.ssotoken.dev);
              }
            return !t.spotId && e.spotId && (t.spotId = e.spotId), t;
          })(a),
          p = (0, s.Vi)("data.content.0.metadata.enable_commenting"),
          d = (0, s.Vi)("data.content.0.metadata.sponsor"),
          f = (0, s.Vi)("data.content.0.display_id"),
          b = d && (0, c.isSponsored)(d),
          m = (0, l.x)(),
          g = !m && p && u?.spotId && f && t && !b;
        return g
          ? (0, j.tZ)(
              E,
              (0, n.Z)(
                {
                  spotimConfig: u,
                  canonicalUrl: t,
                },
                r
              )
            )
          : null;
      }
      function C(e) {
        return (0, d.f)(v) ? (0, j.tZ)(S, e) : a.Fragment;
      }
      E.displayName = "Comments";
    },
    60523: function (e, t, r) {
      r.d(t, {
        Tt: function () {
          return s;
        },
        V8: function () {
          return p;
        },
        ax: function () {
          return d;
        },
        vl: function () {
          return u;
        },
      });
      var n = r(76145),
        i = r(2929),
        o = r(81463),
        a = r(11129);
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let s = (0, i.Z)("div", {
          target: "e18i9nfs2",
        })((0, o.ZP)("composite-wrapper", c(c({}, a.jf), a.bK)), ""),
        u = (0, i.Z)("div", {
          target: "e18i9nfs1",
        })(
          (0, o.ZP)("composite-media-item", c(c(c({}, a.jf), a.bK), a.GQ), {
            img: {
              height: "auto",
            },
          }),
          ""
        ),
        p = {
          width: {
            xlg: "109%",
            xxlg: "112%",
            xxxlg: "130%",
          },
          ml: {
            xlg: "-4.5%",
            xxlg: "-6%",
            xxxlg: "-15%",
          },
        },
        d = (0, i.Z)("div", {
          target: "e18i9nfs0",
        })(
          (0, o.ZP)("composite-media", c(c(c(c({}, a.jf), a.bK), a.GQ), a.Dh), {
            display: "flex",
            flexDirection: {
              _: "column",
              smd: "row",
            },
            [u]: {
              flexBasis: {
                smd: "50%",
              },
              mt: 1,
              "&:nth-of-type(2)": {
                ml: {
                  smd: 1,
                },
                mt: {
                  "xxs:smd": 1,
                },
              },
            },
          }),
          ""
        );
    },
    28705: function (e, t, r) {
      r.d(t, {
        $: function () {
          return a;
        },
      });
      var n = r(1462);
      let i = ["article-body-content", "article-body"],
        o = {
          [n.cq.STANDARD_ARTICLE]: i.concat(["standard-body-content"]),
          [n.cq.LONGFORM_ARTICLE]: i.concat(["longform-body"]),
          [n.cq.RECIPE]: i.concat(["recipe-body-content"]),
          [n.cq.REVIEW_ARTICLE]: ["review-body-content"],
          [n.cq.VEHICLE_SPECS]: ["specs-body-content"],
          [n.cq.VEHICLE_MAKE]: ["make-body-content"],
          [n.cq.VEHICLE_CATEGORY_RANKINGS]: [
            "vehicle-category-rankings-body-content",
          ],
          [n.cq.VEHICLE_CATEGORY]: ["vehicle-category-body-content"],
        },
        a = (e) => (o[e] ? o[e].join(" ") : "");
    },
    58671: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return f;
        },
        h: function () {
          return d;
        },
      });
      var n = r(4575),
        i = r(76145),
        o = r(2929),
        a = r(11129),
        l = r(81463),
        c = r(96263),
        s = r(10043);
      function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                (0, i.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let d = (0, o.Z)("div", {
        target: "e1cslvxz0",
      })(
        (0, l.ZP)("journey-inline", p(p({}, a.FK), a.Dh), {
          clear: "both",
          mt: "1.25rem",
        }),
        ""
      );
      function f(e) {
        let [t, r] = (0, c.P)([
          "fre.enable-jam-journey",
          "fre.jam-journey.enable-email-captures",
        ]);
        return t && r
          ? (0, s.tZ)(
              d,
              (0, n.Z)(
                {
                  "data-ad-exclude": !0,
                  id: "journey-inline",
                },
                e
              )
            )
          : null;
      }
      (f.displayName = "JamNewsLetter"),
        (f.defaultProps = {
          props: null,
        });
    },
    75885: function (e, t, r) {
      var n = r(50581);
      t.Z = n.Fragment;
    },
    15239: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = r(76145),
        i = r(20283),
        o = r(96435),
        a = r(5263),
        l = r(21778),
        c = r(96109),
        s = r(10043);
      function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function d({
        buttonText: e,
        fetcher: t,
        getKey: r,
        onDataLoad: n = i.Z,
        options: u,
        sxProps: d,
        themeKey: f,
      }) {
        let {
            data: b,
            error: m,
            size: g,
            setSize: y,
          } = (0, a.ZP)(
            r,
            t,
            p(
              p(
                {
                  revalidateFirstPage: !1,
                },
                c.YM
              ),
              u
            )
          ),
          O = (0, o.$G)("content.showMore"),
          h = !m && g > 0 && b && void 0 === b[g - 1],
          P = () => {
            h || y(g + 1);
          };
        if (!h) {
          let [e] = b && b.length ? b.slice(-1) : [],
            t = e?.[0]?.id || null,
            r = b && b.length ? [].concat(...b) : [];
          n({
            data: r,
            error: m,
            size: g,
            lastPageFirstItemId: t,
          });
        }
        return (0, s.tZ)(
          l.Z,
          {
            onClick: P,
            sxProps: d,
            themeKey: f,
            isLoading: h,
          },
          !h && (e || O)
        );
      }
      (d.displayName = "LoadMore"),
        (d.defaultProps = {
          buttonText: "",
          options: {
            revalidateOnFocus: !1,
          },
          sxProps: {},
          themeKey: "load-more-button-overlay",
        });
    },
    13349: function (e, t, r) {
      r.d(t, {
        Gm: function () {
          return p;
        },
        Jd: function () {
          return u;
        },
        LO: function () {
          return b;
        },
        Ux: function () {
          return f;
        },
        V3: function () {
          return m;
        },
        Wv: function () {
          return g;
        },
        c8: function () {
          return d;
        },
        zQ: function () {
          return y;
        },
      });
      var n = r(76145),
        i = r(2929),
        o = r(81463),
        a = r(11129),
        l = r(68124);
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let u = (0, i.Z)("section", {
          target: "eno1xhi7",
        })(
          (0, o.ZP)(
            "recipe-ingredients-wrapper",
            s(s(s(s({}, a.jf), a.Dh), a.bK), a.FK),
            {
              marginLeft: 0,
              width: {
                "<smd": "100%",
                "xxxlg>": "60%",
              },
              minWidth: {
                "md:xxlg": "300px",
              },
              paddingRight: "1rem",
            }
          ),
          ""
        ),
        p = (0, i.Z)("h2", {
          target: "eno1xhi6",
        })(
          (0, o.ZP)(
            "recipe-ingredients-heading",
            s(s(s(s(s(s({}, a.cp), a.$_), a.Cg), a.Oq), a.jf), a.Dh),
            {
              margin: 0,
            }
          ),
          ""
        ),
        d = (0, i.Z)("h3", {
          target: "eno1xhi5",
        })(
          (0, o.ZP)(
            "recipe-ingredients-subheading",
            s(s(s(s(s(s({}, a.cp), a.$_), a.Cg), a.Oq), a.jf), a.Dh)
          ),
          ""
        ),
        f = (0, i.Z)("div", {
          target: "eno1xhi4",
        })((0, o.ZP)("recipe-ingredients-body", s(s({}, a.Dh), a.bK)), ""),
        b = (0, i.Z)("div", {
          target: "eno1xhi3",
        })(
          (0, o.ZP)(
            "recipe-ingredients-section",
            s(s(s(s(s(s(s({}, a.Dh), a.bK), a.cp), a.Oq), a.$_), a.Cg), a.cp),
            {}
          ),
          ""
        ),
        m = (0, i.Z)("ul", {
          target: "eno1xhi2",
        })(
          (0, o.ZP)("recipe-ingredients-list", s(s({}, a.Dh), a.cp), {
            "&": {
              m: "0 0 1.5rem",
              p: 0,
            },
          }),
          ""
        ),
        g = (0, i.Z)("li", {
          target: "eno1xhi1",
        })(
          (0, o.ZP)(
            "recipe-ingredients-list-item",
            s(
              s(s(s(s(s(s(s({}, a.oQ), a.Cg), a.$_), a.jf), a.bK), a.o3), a.cp),
              a.Oq
            ),
            {
              listStyle: "none",
              paddingY: "xs",
              "& p": {
                display: "inline",
              },
              a: l.Ly,
              "@media print": {
                paddingY: "xxs",
                fontFamily: "inherit",
                fontSize: "0.875rem",
              },
            }
          ),
          ""
        ),
        y = (0, i.Z)("li", {
          target: "eno1xhi0",
        })(
          (0, o.ZP)("recipe-load-more-ingredients-wrapper", s({}, a.bK), {
            listStyle: "none",
          }),
          ""
        );
    },
    54616: function (e, t, r) {
      r.d(t, {
        AS: function () {
          return p;
        },
        DR: function () {
          return d;
        },
        PQ: function () {
          return f;
        },
        wJ: function () {
          return b;
        },
      });
      var n = r(76145),
        i = r(2929),
        o = r(81463),
        a = r(11129),
        l = r(17117),
        c = r(13349);
      function s(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let p = (0, i.Z)("div", {
          target: "e7k5zd3",
        })(
          (0, o.ZP)(
            "recipe-ingredients-instructions",
            u(u(u(u(u(u({}, a.jf), a.GQ), a.eC), a.bK), a.FK), a.Dh),
            {
              display: {
                _: "block",
                xlg: "flex",
              },
              justifyContent: {
                "xxxlg>": "flex-end",
              },
              marginLeft: {
                _: "auto",
                xlg: `calc(-1 * (4 * ${l.GO}))`,
                xxxlg: `calc(-1 * (${l.pU} + ${l.GO}))`,
              },
              marginRight: {
                md: "auto",
              },
              marginTop: {
                "md:lg": "2rem",
              },
              width: {
                _: "auto",
                xlg: `calc(100% + (4 * ${l.GO}))`,
                xxxlg: `calc(100% + (${l.pU} + ${l.GO}))`,
              },
              "@media print": {
                display: "grid !important",
                gridTemplateColumns: "1fr 2fr",
                maxWidth: "100%",
                alignItems: "start",
                "& > *": {
                  gridTemplateColumns: "none",
                },
                marginLeft: "0 !important",
                [c.Jd]: {
                  position: "static",
                },
              },
            }
          ),
          ""
        ),
        d = (0, i.Z)("div", {
          target: "e7k5zd2",
        })(
          (0, o.ZP)(
            "recipe-ingredients-instructions-heading-wrapper",
            u(u(u({}, a.GQ), a.jf), a.Dh),
            {
              display: "flex",
              justifyContent: "space-between",
              flexDirection: {
                _: "column-reverse",
                xs: "row",
              },
              alignItems: {
                _: "flex-start",
                xs: "center",
              },
              marginBottom: "0.625rem",
              "& button": {
                marginBottom: {
                  _: "1.5625rem",
                  xs: 0,
                },
              },
            }
          ),
          ""
        ),
        f = (0, i.Z)("div", {
          target: "e7k5zd1",
        })(
          (0, o.ZP)(
            "recipe-body-wrapper",
            u(u(u(u(u({}, a.GQ), a.bK), a.Dh), a.jf), a.eC),
            {
              paddingX: {
                _: "mobile-gutter",
                lg: 0,
              },
              bps: [
                {
                  options: {
                    size: "md:smd",
                  },
                  value: {
                    maxWidth: "45.25rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                  },
                },
              ],
            }
          ),
          ""
        ),
        b = (0, i.Z)("div", {
          target: "e7k5zd0",
        })(
          (0, o.ZP)(
            "recipe-gate-wrapper",
            u(u(u(u(u({}, a.GQ), a.bK), a.Dh), a.jf), a.eC),
            {
              display: {
                xxs: "block",
                md: "grid",
              },
              gridColumn: {
                _: "1",
                lg: "1/4",
              },
              "@media print": {
                display: "none",
              },
            }
          ),
          ""
        );
    },
    17353: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return G;
        },
      });
      var n = r(76145),
        i = r(65218),
        o = r.n(i),
        a = r(1759),
        l = r(96975),
        c = r(36420),
        s = r(1462),
        u = r(60523),
        p = r(2929),
        d = r(81463),
        f = r(11129),
        b = r(17117);
      function m(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : m(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let y = "700px",
        O = (0, p.Z)("div", {
          target: "e3642qt0",
        })(
          (0, d.ZP)("crossword", g(g(g({}, f.bK), f.Dh), f.FK), {
            marginLeft: {
              md: `calc((${b.ad} - ${y} - (2 * ${b.CY})) / 2)`,
              smd: `calc((${b.ad} - ${y}) / 2)`,
            },
            width: {
              _: "100%",
              md: `${y}`,
            },
          }),
          ""
        );
      var h = r(98820),
        P = r(10043);
      function Z(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Z(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Z(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let w = (0, l.V)(
          o()(() => r.e(3179).then(r.bind(r, 43179)), {
            loadableGenerated: {
              webpack: () => [43179],
            },
          }),
          {
            strategy: l.j.STATIC,
            wrapperProps: {
              className: "embed",
            },
            wrapperDynamicProps: ["data-node-id"],
          }
        ),
        D = (0, l.V)(
          o()(() => r.e(7513).then(r.bind(r, 37513)), {
            loadableGenerated: {
              webpack: () => [37513],
            },
          }),
          {
            strategy: l.j.STATIC,
            wrapperProps: {
              className: "embed",
              "data-embed": s.D5.PULLQUOTE,
            },
            wrapperDynamicProps: ["data-node-id"],
          }
        ),
        v = (0, l.V)(
          o()(() => r.e(7369).then(r.bind(r, 17369)), {
            loadableGenerated: {
              webpack: () => [17369],
            },
          }),
          {
            strategy: l.j.STATIC,
            wrapperProps: {
              className: "embed",
              "data-embed": s.D5.EDITORIAL_LINK,
            },
            wrapperDynamicProps: ["data-node-id"],
          }
        ),
        _ = (0, l.V)(
          o()(
            () =>
              r
                .e(5528)
                .then(r.bind(r, 95528))
                .then((e) => e.StarItems),
            {
              loadableGenerated: {
                webpack: () => [95528],
              },
            }
          ),
          {
            strategy: l.j.STATIC,
            wrapperProps: {
              className: "embed",
              "data-embed": "rating",
            },
            wrapperDynamicProps: ["data-node-id"],
          }
        ),
        E = (0, l.V)(
          o()(() => Promise.all([r.e(632), r.e(5833)]).then(r.bind(r, 75346)), {
            loadableGenerated: {
              webpack: () => [75346],
            },
          }),
          {
            strategy: l.j.STATIC,
          }
        );
      function S({ align: e, "data-node-id": t, maxscore: r, score: n }) {
        return (0, P.tZ)(_, {
          "data-node-id": t,
          ratingValue: n,
          align: e,
          maxRating: r ? parseInt(r, 10) : null,
        });
      }
      (S.displayName = "Rating"),
        (S.defaultProps = {
          align: null,
        });
      let C = (e, t = l.j.INVIEW) => ({
          wrapperProps: {
            className: "embed",
            "data-embed": e,
          },
          wrapperDynamicProps: ["data-node-id"],
          strategy: t,
        }),
        T = (0, l.V)(
          o()(() => Promise.all([r.e(9319), r.e(2054)]).then(r.bind(r, 2054)), {
            loadableGenerated: {
              webpack: () => [2054],
            },
          }),
          C("accordion")
        ),
        R = (0, l.V)(
          o()(() => r.e(5614).then(r.bind(r, 5614)), {
            loadableGenerated: {
              webpack: () => [5614],
            },
          }),
          {
            wrapperProps: {
              className: "embed",
              "data-embed": "journey-calculator",
            },
            wrapperDynamicProps: [
              {
                prop: "data-node-id",
                name: "name",
              },
            ],
          }
        ),
        A = (0, l.V)(
          o()(() => r.e(1863).then(r.bind(r, 31863)), {
            loadableGenerated: {
              webpack: () => [31863],
            },
          }),
          C("celtra", l.j.LOAD)
        ),
        x = (0, l.V)(
          o()(
            () => Promise.all([r.e(2975), r.e(2430)]).then(r.bind(r, 71654)),
            {
              loadableGenerated: {
                webpack: () => [71654],
              },
            }
          ),
          {
            wrapper: u.Tt,
            forwardedRef: !1,
            wrapperProps: {
              className: "embed",
              "data-embed": s.D5.COMPOSITE,
            },
            wrapperDynamicProps: ["data-node-id"],
          }
        ),
        N = (0, l.V)(
          o()(
            () =>
              Promise.all([
                r.e(9774),
                r.e(1239),
                r.e(498),
                r.e(632),
                r.e(7726),
                r.e(3658),
                r.e(7234),
                r.e(2318),
              ]).then(r.bind(r, 93203)),
            {
              loadableGenerated: {
                webpack: () => [93203],
              },
            }
          ),
          C(s.D5.BODY_IMAGE)
        ),
        I = (0, l.V)(
          o()(() => Promise.all([r.e(3664), r.e(6039)]).then(r.bind(r, 2543)), {
            loadableGenerated: {
              webpack: () => [2543],
            },
          }),
          C("loop")
        ),
        k = (0, l.V)(
          o()(() => r.e(7826).then(r.bind(r, 7826)), {
            loadableGenerated: {
              webpack: () => [7826],
            },
          }),
          {
            wrapper: O,
            forwardedRef: !1,
            wrapperProps: {
              className: "embed",
              "data-embed": s.D5.IFRAME,
            },
            wrapperDynamicProps: ["data-node-id"],
          }
        ),
        L = j(
          j({}, h.Z),
          {},
          {
            accordion: T,
            adsfree: a.Z,
            calculator: R,
            celtra: A,
            center: w,
            composite: x,
            crossword: k,
            editoriallinks: v,
            "embed-error": a.Z,
            facebook: (0, l.V)(
              o()(() => r.e(5864).then(r.bind(r, 25864)), {
                loadableGenerated: {
                  webpack: () => [25864],
                },
              }),
              C("facebook")
            ),
            gallery: (0, l.V)(
              o()(
                () =>
                  Promise.all([r.e(2975), r.e(7382), r.e(136)]).then(
                    r.bind(r, 50136)
                  ),
                {
                  loadableGenerated: {
                    webpack: () => [50136],
                  },
                }
              ),
              {
                wrapper: c.Xu,
                forwardedRef: !1,
                wrapperProps: {
                  className: "embed",
                  "data-embed": s.D5.EMBED_GALLERY,
                },
                wrapperDynamicProps: ["data-node-id"],
              }
            ),
            giphy: (0, l.V)(
              o()(() => r.e(1537).then(r.bind(r, 41537)), {
                loadableGenerated: {
                  webpack: () => [41537],
                },
              }),
              C("giphy")
            ),
            "anchor-heading": (0, l.V)(
              o()(
                () =>
                  Promise.all([r.e(9965), r.e(9981)]).then(r.bind(r, 29981)),
                {
                  loadableGenerated: {
                    webpack: () => [29981],
                  },
                }
              ),
              {
                strategy: l.j.STATIC,
                wrapperDynamicProps: ["data-node-id"],
              }
            ),
            iframe: (0, l.V)(
              o()(() => r.e(6722).then(r.bind(r, 96722)), {
                loadableGenerated: {
                  webpack: () => [96722],
                },
              })
            ),
            image: N,
            instagram: (0, l.V)(
              o()(() => r.e(6092).then(r.bind(r, 86092)), {
                loadableGenerated: {
                  webpack: () => [86092],
                },
              }),
              C("instagram")
            ),
            loop: I,
            mediaosvideo: o()(() => r.e(3610).then(r.bind(r, 83610)), {
              loadableGenerated: {
                webpack: () => [83610],
              },
            }),
            outgrow: (0, l.V)(
              o()(() => r.e(7239).then(r.bind(r, 77239)), {
                loadableGenerated: {
                  webpack: () => [77239],
                },
              }),
              C("outgrow-element")
            ),
            "piano-content-gate": (0, l.V)(
              o()(() => r.e(1842).then(r.bind(r, 51842)), {
                loadableGenerated: {
                  webpack: () => [51842],
                },
              })
            ),
            pinterest: (0, l.V)(
              o()(() => r.e(1915).then(r.bind(r, 31915)), {
                loadableGenerated: {
                  webpack: () => [31915],
                },
              }),
              C("pinterest")
            ),
            poll: (0, l.V)(
              o()(
                () =>
                  Promise.all([r.e(3232), r.e(7198)]).then(r.bind(r, 57198)),
                {
                  loadableGenerated: {
                    webpack: () => [57198],
                  },
                }
              ),
              C("poll")
            ),
            product: o()(
              () =>
                Promise.all([
                  r.e(2975),
                  r.e(7382),
                  r.e(4754),
                  r.e(6158),
                  r.e(3219),
                  r.e(5600),
                  r.e(5337),
                ]).then(r.bind(r, 55600)),
              {
                loadableGenerated: {
                  webpack: () => [55600],
                },
              }
            ),
            "product-summary-view": (0, l.V)(
              o()(() => r.e(7108).then(r.bind(r, 7108)), {
                loadableGenerated: {
                  webpack: () => [7108],
                },
              })
            ),
            pullquote: D,
            rating: () => S,
            spotify: (0, l.V)(
              o()(() => r.e(1997).then(r.bind(r, 91997)), {
                loadableGenerated: {
                  webpack: () => [91997],
                },
              }),
              C("spotify")
            ),
            reddit: (0, l.V)(
              o()(() => r.e(5349).then(r.bind(r, 7109)), {
                loadableGenerated: {
                  webpack: () => [7109],
                },
              }),
              C("reddit")
            ),
            "table-of-contents": (0, l.V)(
              o()(() => r.e(6697).then(r.bind(r, 76697)), {
                loadableGenerated: {
                  webpack: () => [76697],
                },
              })
            ),
            "table-wrapper": (0, l.V)(
              o()(() => r.e(6995).then(r.bind(r, 6995)), {
                loadableGenerated: {
                  webpack: () => [6995],
                },
              }),
              {
                strategy: l.j.STATIC,
              }
            ),
            talkShopLive: o()(() => r.e(3129).then(r.bind(r, 93129)), {
              loadableGenerated: {
                webpack: () => [93129],
              },
            }),
            tiktok: (0, l.V)(
              o()(() => r.e(2959).then(r.bind(r, 58149)), {
                loadableGenerated: {
                  webpack: () => [58149],
                },
              }),
              C("tiktok")
            ),
            twitter: (0, l.V)(
              o()(() => r.e(3544).then(r.bind(r, 76848)), {
                loadableGenerated: {
                  webpack: () => [76848],
                },
              }),
              C("x")
            ),
            tumblr: (0, l.V)(
              o()(() => r.e(3104).then(r.bind(r, 51587)), {
                loadableGenerated: {
                  webpack: () => [51587],
                },
              }),
              C("tumblr")
            ),
            playbuzz: (0, l.V)(
              o()(() => r.e(6438).then(r.bind(r, 56438)), {
                loadableGenerated: {
                  webpack: () => [56438],
                },
              }),
              C("playbuzz")
            ),
            vimeo: (0, l.V)(
              o()(() => r.e(3692).then(r.bind(r, 93692)), {
                loadableGenerated: {
                  webpack: () => [93692],
                },
              }),
              C("vimeo")
            ),
            "watch-next": (0, l.V)(
              o()(
                () => Promise.all([r.e(726), r.e(1418)]).then(r.bind(r, 976)),
                {
                  loadableGenerated: {
                    webpack: () => [976],
                  },
                }
              ),
              C("watch-next")
            ),
            youtube: (0, l.V)(
              o()(() => r.e(3348).then(r.bind(r, 78287)), {
                loadableGenerated: {
                  webpack: () => [78287],
                },
              }),
              C(s.D5.YOUTUBE)
            ),
            "live-blog-post": E,
          }
        );
      var G = L;
    },
    87102: function (e, t, r) {
      var n = r(50581);
      t.Z = n.Fragment;
    },
    36158: function (e, t, r) {
      r.d(t, {
        $P: function () {
          return g;
        },
        IY: function () {
          return h;
        },
        dR: function () {
          return O;
        },
        lx: function () {
          return b;
        },
        rH: function () {
          return j;
        },
        yX: function () {
          return P;
        },
        yi: function () {
          return w;
        },
        zr: function () {
          return y;
        },
      });
      var n = r(76145),
        i = r(27954),
        o = r(26036),
        a = r(95983),
        l = r(22717),
        c = r(29846),
        s = r(93128),
        u = r(30586);
      let p = ["retailer"];
      function d(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let b = (e, t, r, n, l) => {
          let s = u.L8[u.eM.DISCONTINUED];
          e?.retailer?.availability === u.eM.AVAILABLE &&
            (s = u.L8[u.eM.AVAILABLE]);
          let d =
              s === u.L8[u.eM.DISCONTINUED] &&
              0 === parseFloat(e?.retailer?.price),
            b = (function (e, t, r, n) {
              let a = (e) => e?.replace?.(".com", "") ?? "",
                l = e?.m101_offer?.offer_data?.alternatives,
                c = e?.custom_currency || e?.retailer?.price_currency || r,
                s = [];
              return (
                c &&
                  s.push({
                    "@type": "Offer",
                    url: (0, o.kG)(e, !1),
                    priceCurrency: c,
                    price: e?.retailer?.price,
                    availability: n,
                    offeredBy: {
                      "@type": "Organization",
                      name: e?.retailer?.display_name
                        ? e?.retailer?.display_name
                        : a(e?.custom_retailer),
                    },
                  }),
                (t =
                  t &&
                  Array.isArray(e?.m101_offer?.offer_data?.alternatives)) &&
                  l.forEach((t) => {
                    let { retailer: n } = t,
                      o = (0, i.Z)(t, p);
                    (e?.m101_offer?.offer_data?.currency || r) &&
                      s.push({
                        "@type": "Offer",
                        url: o?.url,
                        priceCurrency: e?.m101_offer?.offer_data?.currency || r,
                        price: o?.price,
                        offeredBy: {
                          "@type": "Organization",
                          name: n?.display_name || a(n?.name),
                        },
                      });
                  }),
                s
              );
            })(e, l, n, s);
          return b.length > 0
            ? {
                "@type": "ListItem",
                position: t,
                item: f(
                  f(
                    f(
                      {
                        "@context": "https://schema.org/",
                        "@type": d ? "Thing" : "Product",
                        name: e?.custom_name || e?.product?.name,
                      },
                      e?.custom_description && {
                        description: (0, c.o)(e?.custom_description),
                      }
                    ),
                    {},
                    {
                      image: e?.image?.aws_url,
                    },
                    d && {
                      url: `${r}`,
                    }
                  ),
                  !d && {
                    sku: (0, a.O)((0, o.kG)(e, !1))
                      ? e?.retailer?.parent_sku
                      : e?.retailer?.sku,
                    brand: {
                      "@type": "Brand",
                      name: e?.custom_brand || e?.product?.brand,
                    },
                    offers: b,
                  }
                ),
              }
            : null;
        },
        m = (e) => (0, o.dU)(e?.retailer?.retailer_name, e?.retailer?.sem3_id),
        g = (e) => m(e) || e?.retailer?.affiliate_url,
        y = (e) => e.some(g),
        O = (e) => `product-${e}`,
        h = (e, t = !1, r = !1) => {
          if (!Array.isArray(e.retailers)) return [];
          let n = e.retailers.some((e) => !!e?.metadata?.is_marketplace),
            i = e.retailers
              .filter((i) => {
                let o = !!i?.metadata?.is_marketplace;
                return (
                  i.retailer_name !== e.retailer.retailer_name &&
                  (i.availability === u.eM.AVAILABLE || (!!t && !!o)) &&
                  (!0 !== i.is_custom || (!!t && !!o)) &&
                  (!t || ("marketplace-only" !== r && !!r) || !n || o)
                );
              })
              .reduce(
                (e, t) => (
                  e.find((e) => e.retailer_name === t.retailer_name) ||
                    e.push(t),
                  e
                ),
                []
              )
              .slice(0, 2)
              .map((e) => ({
                affiliate: e.affiliate,
                affiliate_url: e.affiliate_url,
                price: e.price,
                retailer: {
                  display_name: e.display_name,
                  id: e.id,
                  name: e.retailer_name,
                },
                availability: e.availability,
                url: e.url,
                is_custom: e.is_custom,
                is_active: e.is_active,
                is_internal: !0,
              }));
          return i || [];
        };
      function P(e) {
        return f(
          f(
            {},
            e.customDescriptionDom
              ? {
                  customDescriptionDom: e.customDescriptionDom,
                }
              : {}
          ),
          {},
          {
            badge: e.badge,
            call_to_action: e.call_to_action,
            custom_brand: e.custom_brand,
            custom_currency: e.custom_currency,
            custom_description: e.custom_description,
            custom_name: e.name,
            custom_price: e.custom_price,
            custom_retailer: e.retailer_name,
            coupon: e.coupon,
            id: e.content_product_id,
            image: e.image,
            label: e.metadata?.custom_tag,
            hide_brand: e.metadata?.hide_brand || !1,
            m101_offer: e.m101_offer,
            retailers: e.product?.retailers
              ? e.product?.retailers
              : e.retailers,
            product_metadata: e.product_metadata,
            product: {
              brand: e.brand,
              category: e.category,
              description: e.description,
              features: e.features,
              id: e.product_id,
              images: e.images,
              name: e.name,
            },
            resource_type: e.resource_type,
            retailer: e.retailer,
            retailer_name: e.retailer_name,
            role: e.role,
            selected_crop: e.selected_crop,
            show_price: e.show_price,
            statements: e.statements,
            swapped_retailer: e.swapped_retailer,
          }
        );
      }
      let Z = (e) =>
          e?.replace ? e.replace(/<\/?([^ibu]|[^/>][^>]{1,}?|)>/g, "") : "",
        j = (e, t) => {
          let r =
            !(0, l.f)(t) &&
            !(0, l.f)(e.product_metadata?.hide_brand) &&
            !(0, l.f)(e.hide_brand) &&
            e.custom_brand &&
            e.custom_name;
          return r ? `${e.custom_brand} ${Z(e.custom_name)}` : Z(e.custom_name);
        },
        w = (e, t) => {
          if (!e) return null;
          let {
              custom_currency: r,
              custom_price: n,
              retailer: i,
              show_price: o,
            } = e,
            { price_currency: a, price: l } = i ?? {},
            c = -Math.round(-(n ?? l));
          return o && c
            ? (0, s.x)(
                c,
                (r ?? a) || "USD",
                {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                },
                t
              )
            : null;
        };
    },
    8501: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return g;
        },
      }),
        r(50581);
      var n = r(2783),
        i = r(97144),
        o = r(22717),
        a = r(77533),
        l = r(76145),
        c = r(2929),
        s = r(81463),
        u = r(11129);
      function p(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let f = (0, c.Z)("div", {
        target: "e13rjwo40",
      })(
        (0, s.ZP)(
          "authors-bio-wrapper",
          d(d(d(d(d(d({}, u.Oq), u.Cg), u.e6), u.o3), u.Dh), u.$_),
          {
            marginTop: "s",
          }
        ),
        ""
      );
      var b = r(10043);
      function m() {
        let e = (0, i.Vi)("data.content.0.section.metadata.show_editor_bios"),
          t = (0, i.Vi)("data.content.0.authors"),
          r = (0, i.Vi)("data.content.0.experts") ?? null,
          l = t && Array.isArray(t) && (0, o.f)(e),
          c = r && Array.isArray(r);
        return l || c
          ? (0, b.tZ)(
              f,
              a.Er.PARTIAL_BLUR,
              l &&
                t.map(({ profile: e }) =>
                  (0, b.tZ)(n.Z, {
                    key: e?.slug,
                    profile: e,
                  })
                ),
              c &&
                r.map(({ profile: e, expert_type: t }) =>
                  (0, b.tZ)(n.Z, {
                    key: e?.slug,
                    profile: e,
                    expertType: t,
                  })
                )
            )
          : null;
      }
      m.displayName = "FooterByLine";
      var g = m;
    },
    32584: function (e, t, r) {
      var n = r(96611),
        i = r(53820),
        o = r(97817),
        a = r(53612),
        l = r(58495),
        c = r(28614),
        s = r(10043);
      function u({ titleMarkup: e, isNavTitle: t }) {
        let r = (0, s.tZ)(
            o.Z,
            {
              sxProps: i.v,
            },
            (0, s.tZ)(a.Z, {
              dom: e,
            })
          ),
          u = (0, l.Dv)(c.H);
        return (
          e &&
          (t
            ? (0, s.tZ)(n.y2, null, r)
            : (0, s.tZ)(
                n.K7,
                {
                  __themeKey: u,
                },
                r
              ))
        );
      }
      (u.defaultProps = {
        titleMarkup: null,
        isNavTitle: !1,
      }),
        (t.Z = u);
    },
    53820: function (e, t, r) {
      r.d(t, {
        c: function () {
          return u;
        },
        v: function () {
          return s;
        },
      });
      var n = r(76145),
        i = r(2929),
        o = r(81463),
        a = r(11129);
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let s = {
          TitleDesignElementBefore: {
            variant: "title-design-element-content-header-text-before",
          },
          TitleDesignElementAfter: {
            variant: "title-design-element-content-header-text-after",
          },
        },
        u = (0, i.Z)("div", {
          target: "e12wtocy0",
        })(
          (0, o.ZP)(
            "content-header-text-only-container",
            c(c(c(c({}, a.eC), a.bK), a.cp), a.e6),
            {
              gridColumn: "1 / -1",
              textAlign: "center",
            }
          ),
          ""
        );
    },
    1759: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return p;
        },
      });
      var n = r(4575),
        i = r(27954),
        o = r(65218),
        a = r.n(o),
        l = r(96975),
        c = r(10043);
      let s = ["data-node-id"],
        u = (0, l.V)(
          a()(() => r.e(4188).then(r.bind(r, 6539)), {
            loadableGenerated: {
              webpack: () => [6539],
            },
          }),
          {
            strategy: l.j.STATIC,
            wrapperProps: {
              className: "embed",
            },
            wrapperDynamicProps: ["data-node-id"],
          }
        );
      function p(e) {
        let t = e ?? {},
          { "data-node-id": r } = t,
          o = (0, i.Z)(t, s);
        return (0, c.tZ)(
          u,
          (0, n.Z)(
            {
              "data-node-id": r,
            },
            o
          )
        );
      }
      p.displayName = "OutBoundLinksNoHydration";
    },
    77059: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return I;
          },
          scrollingPositionAtom: function () {
            return N;
          },
          sponsorBarHeightAtom: function () {
            return x;
          },
        });
      var n = r(76145),
        i = r(89846),
        o = r(32584);
      r(41832);
      var a = r(78042),
        l = r(37268),
        c = r(55769),
        s = r(95171),
        u = r(10043),
        p = r(50581),
        d = r(23615);
      let f = p.forwardRef(
        ({ sponsor: e, metadata: t, sxProps: r, onLoadLogo: n }, i) =>
          (0, u.tZ)(
            l.r,
            {
              sx: r,
              ref: i,
              "data-tracking-id": "topNavSponsor",
            },
            (0, u.tZ)(s.Z, {
              sponsor: e,
              sponsorMetadata: t,
              onlyText: !1,
              onLoadLogo: n,
            })
          )
      );
      (f.propTypes = {
        sponsor: c.H.isRequired,
        metadata: c.T.isRequired,
        onLoadLogo: d.func,
        sxProps: d.shape({}),
      }),
        (f.defaultProps = {
          onLoadLogo: () => {},
          sxProps: null,
        });
      var b = r(72053),
        m = r(47048);
      r(76787);
      var g = r(1462),
        y = r(50581),
        O = r(92169),
        h = r(26780),
        P = r(50626),
        Z = r(90665),
        j = r(58495),
        w = r(8731),
        D = r(51483),
        v = r(44949),
        _ = r(39859),
        E = r(54607),
        S = r(50581);
      function C(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      let { NAV_BAR_CONTAINER: T } = g.Bj,
        R = {
          bg: "transparent",
          color: "inherit",
          mb: 0,
        },
        A = {
          position: "sticky",
          top: 0,
          elevation: "nav",
        },
        x = (0, Z.cn)(),
        N = (0, Z.cn)(!1);
      function I({
        ciam: e,
        subscribeItem: t,
        sponsor: r,
        sponsorMeta: l,
        titleMarkup: c,
      }) {
        let s = (0, y.useRef)(),
          p = (0, b.Z)("<md"),
          { inView: d, observer: g } = (0, m.Z)({
            rootMargin: "10px 0px",
            inView: !0,
          }),
          { 0: Z, 1: I } = (0, y.useState)(!1),
          { 0: k, 1: L } = (0, y.useState)(null),
          { 0: G, 1: U } = (0, y.useState)(null),
          { 0: F, 1: $ } = (0, y.useState)(!1),
          V = (0, i.u)(),
          B = (0, O.U)(V, "variants.nav-with-sponsor", {}),
          K = (0, j.b9)(x),
          M = (0, j.b9)(N);
        (0, y.useEffect)(() => {
          g.current.observe(s.current);
        }, [s]),
          (0, y.useEffect)(() => {
            let e = new ResizeObserver(() => {
              K(s?.current?.offsetHeight);
            });
            return e.observe(s?.current), () => e.disconnect();
          }, []),
          (0, y.useEffect)(() => {
            p ? I(!1) : I(!d);
          }, [d, p]),
          (0, y.useEffect)(() => {
            p
              ? F
                ? (U(A), L(null), M(!0))
                : (L(A), U(null), M(!1))
              : (U(null), L(null));
          }, [p, F]);
        let q = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? C(Object(r), !0).forEach(function (t) {
                  (0, n.Z)(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : C(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        })(
          {
            variant: Z && B ? ["default", "navWithSponsor"] : "default",
            variants: {
              navWithSponsor: B,
            },
          },
          G
        );
        return (0, u.tZ)(
          S.Fragment,
          null,
          (0, u.tZ)(
            _.Z,
            {
              sxProps: q,
            },
            (0, u.tZ)(
              S.Fragment,
              null,
              (0, u.tZ)(
                a.l2,
                {
                  className: T,
                  __themeKey: "nav-bar",
                },
                (0, u.tZ)(v.Z, {
                  withSponsor: Z,
                }),
                (0, u.tZ)(P.O, {
                  withSponsor: Z,
                }),
                Z
                  ? (0, u.tZ)(
                      S.Fragment,
                      null,
                      (0, u.tZ)(o.Z, {
                        titleMarkup: c,
                        isNavTitle: !0,
                      }),
                      (0, u.tZ)(
                        a.MI,
                        null,
                        (0, u.tZ)(f, {
                          sponsor: r,
                          sxProps: R,
                          metadata: l,
                        })
                      )
                    )
                  : (0, u.tZ)(
                      S.Fragment,
                      null,
                      (0, u.tZ)(h.D, null),
                      (0, u.tZ)(D.Z, {
                        subscribeItem: t,
                        ciam: e,
                      })
                    )
              ),
              (0, u.tZ)(w.Z, {
                isInNavbar: !Z,
              })
            )
          ),
          (0, u.tZ)(f, {
            sxProps: k,
            sponsor: r,
            ref: s,
            metadata: l,
          }),
          p
            ? (0, u.tZ)(E.VF, {
                state: [F, $],
              })
            : null
        );
      }
      I.defaultProps = {
        titleMarkup: null,
      };
    },
    26036: function (e, t, r) {
      r.d(t, {
        Ge: function () {
          return m;
        },
        Py: function () {
          return g;
        },
        dU: function () {
          return p;
        },
        fL: function () {
          return c;
        },
        fp: function () {
          return y;
        },
        gG: function () {
          return b;
        },
        kG: function () {
          return d;
        },
        oF: function () {
          return s;
        },
      });
      var n = r(66504),
        i = r(38817);
      let o = new i.Z("product utils"),
        a = "linkCode",
        l = {
          DISCOUNT_LOWER: 0.2,
          DISCOUNT_UPPER: 0.9,
        };
      function c(e, t) {
        return (
          (t = parseFloat(t) || 0),
          0 === (e = parseFloat(e) || 0) ? 0 : 100 - Math.round((t / e) * 100)
        );
      }
      function s(e, t, r, n) {
        let i = n || e || 0,
          o = r || t || 0;
        return i * l.DISCOUNT_LOWER <= o && i * l.DISCOUNT_UPPER >= o && i > 0;
      }
      let u = (e) => /amazon.(com|co.jp)/i.test(e ?? ""),
        p = (e, t) => u(e) && !t,
        d = (e, t) => {
          let r = t ? [e?.url, e?.retailer?.url] : [e?.retailer?.url];
          return r.find((e) => !!e) ?? "";
        },
        f = (e) => {
          try {
            let t = new URL(e);
            t.searchParams.get(a) ||
              (t.searchParams.append(a, "ogi"), (e = t.href));
          } catch (t) {
            o.error(`Error while parsing url "${e}": ${t.message}`, t);
          }
          return e;
        },
        b = (e, t, r) => {
          let n = r["fre.commerce.use-affiliate_url"]
            ? e?.retailer?.affiliate_url
            : "";
          if (n && !t) return n;
          let i = d(e, t);
          return (
            i &&
              p(e.retailer?.retailer_name, e.retailer?.sem3_id) &&
              (i = f(i)),
            i
          );
        },
        m = (e) => (e ? ["noskim", "noamzn"] : []),
        g = (e, t) =>
          t?.currency
            ? t.currency
            : e?.m101_offer?.offer_data?.currency ??
              e?.retailer?.price_currency,
        y = ({
          product: e,
          productText: t,
          isMgu: r,
          hidePrice: i = !1,
          legacyPricePlacement: a,
          priceText: l,
        }) => {
          let { call_to_action: c, custom_retailer: s, retailer: u } = e,
            { retailer_name: p, display_name: d, url: f } = u || {};
          if (c && !r) return c;
          let b = (!i && l) || t.hidePriceCtaMultiRetailer,
            m = f
              ? n
                  .u(
                    f,
                    (e) =>
                      o.error(`Invalid ${f} in getProductCta ${e.message}`, e),
                    void 0,
                    o
                  )
                  .hostname?.replace("www.", "")
              : "",
            g = d || s || p || m,
            y = g && !a ? t.ctaMultiRetailer : e?.action ?? t.cta;
          return y
            ?.replace("{price}", r ? t.hidePriceCta : b)
            ?.replace("{retailer}", g);
        };
    },
    95983: function (e, t, r) {
      r.d(t, {
        O: function () {
          return i;
        },
      });
      let n = [
        "store.runnersworld.com",
        "shop.countryliving.com",
        "store.delish.com",
        "shop.prevention.com",
        "shop.bicycling.com",
        "shop.menshealth.com",
        "shop.womenshealthmag.com",
        "shop.esquire.com",
        "shop.goodhousekeeping.com",
        "shop.elle.com",
        "shop.cosmopolitan.com",
        "shop.womansday.com",
        "shop.thehgtvmag.com",
        "store.caranddriver.com",
        "shop.townandcountrymag.com",
        "shop.housebeautiful.com",
        "store.harpersbazaar.com",
        "shop.popularmechanics.com",
        "shop.veranda.com",
        "shop.elledecor.com",
        "shop.thefoodnetworkmag.com",
        "shop.thepioneerwoman.com",
        "shop.oprahdaily.com",
        "shop.delish.com",
      ];
      function i(e) {
        let t = RegExp(`^https?://(${n.join("|")})`);
        return t.test(e);
      }
    },
    91177: function (e, t, r) {
      r.r(t);
      var n = r(65218),
        i = r.n(n),
        o = r(48801),
        a = r(10043);
      let l = i()(
        () =>
          Promise.all([
            r.e(9774),
            r.e(1239),
            r.e(498),
            r.e(632),
            r.e(7726),
            r.e(5998),
          ]).then(r.bind(r, 2209)),
        {
          loadableGenerated: {
            webpack: () => [2209],
          },
        }
      );
      t.default = function () {
        return o.$3.length ? (0, a.tZ)(l, null) : null;
      };
    },
    95171: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return N;
        },
      });
      var n = r(50581),
        i = r(31914),
        o = r(68124),
        a = r(61845),
        l = r(72053),
        c = r(96435),
        s = r(76145),
        u = r(2929),
        p = r(81463),
        d = r(11129);
      function f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                (0, s.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let m = (0, u.Z)("span", {
          target: "eyz4c6z1",
        })(
          (0, p.ZP)(
            "sponsor-custom-long-label",
            b(b(b(b(b({}, d.$_), d.jf), d.bK), d.Dh), d.cp),
            {
              display: {
                _: "none",
                smd: "block",
              },
            }
          ),
          ""
        ),
        g = (0, u.Z)("span", {
          target: "eyz4c6z0",
        })(
          (0, p.ZP)(
            "sponsor-custom-short-label",
            b(b(b(b(b({}, d.$_), d.jf), d.bK), d.Dh), d.cp),
            {
              display: {
                _: "block",
                smd: "none",
              },
            }
          ),
          ""
        );
      var y = r(10043),
        O = r(50581);
      let {
          SPONSORED: h,
          BRANDLOGO: P,
          PROVIDED: Z,
          CREATEDFOR: j,
          CUSTOMLABEL: w,
        } = a.MD,
        D = {
          [h]: {
            default: "sponsor-type-sponsored",
          },
          [P]: {
            default: "sponsor-type-brand-logo",
          },
          [Z]: {
            default: "sponsor-type-provided",
          },
          [j]: {
            default: "sponsor-type-created-for",
            lg: "sponsor-type-created-for_long",
          },
        };
      function v({ labelName: e, brandName: t, onlyText: r, sponsorBrand: n }) {
        let i = n,
          o = (0, c.$G)({
            key: `app.${e}`,
            macros: {
              brandName: t,
            },
          });
        return (
          r || (i = ""),
          i && o && (o += ` ${i}`),
          o ? (0, y.tZ)("span", null, o) : null
        );
      }
      function _({
        brandName: e,
        sponsor: { brand: t = "" } = {},
        metadata: r,
        onlyText: n,
        sponsorType: i,
        showSponsorBrand: o,
      }) {
        let { custom_label_short: a = "", custom_label_long: c = "" } = r ?? {},
          s = (0, l.Z)("smd"),
          u = i.toString(),
          p = (function ({
            customLabelLong: e = "",
            customLabelShort: t = "",
            isLargeDevice: r,
            type: n,
            onlyText: i = !0,
          }) {
            return ((D[w] = {
              default: t,
              lg: e,
            }),
            (n !== P || i) && D[n])
              ? r && D[n].lg
                ? D[n].lg
                : D[n].default
              : "";
          })({
            customLabelLong: c,
            customLabelShort: a,
            isLargeDevice: s,
            type: u,
            onlyText: n,
          }),
          d = (e = "") => `${o ? `${e} ${t}` : e}`;
        return i === w
          ? (0, y.tZ)(
              O.Fragment,
              null,
              (0, y.tZ)(m, null, d(c)),
              (0, y.tZ)(g, null, d(a))
            )
          : (0, y.tZ)(v, {
              sponsorBrand: t || "",
              labelName: p || "",
              onlyText: n,
              brandName: e || "",
            });
      }
      _.defaultProps = {
        showSponsorBrand: !1,
      };
      var E = r(37268);
      r(55769);
      var S = r(29742),
        C = r(50064),
        T = r(50581);
      function R({ brandName: e, metadata: { type: t } }) {
        let r = (0, c.$G)({
          key: "content.sponsorBrandName",
          macros: {
            sponsorBrandName: e,
          },
        });
        return (
          t.toString() === a.MD.BRANDLOGO &&
          (0, y.tZ)(
            T.Fragment,
            null,
            (0, y.tZ)(
              E.x_,
              {
                href: (0, S.getFrontendLink)(),
                role: "button",
                "aria-label": r,
              },
              (0, y.tZ)(C.Z, {
                alt: r,
                sx: {
                  primary: "sponsor-bar-brand-logo-secondary",
                },
              })
            ),
            (0, y.tZ)(E.Ab, null, "+")
          )
        );
      }
      R.defaultProps = {
        brandName: "",
        metadata: {},
      };
      var A = r(50581);
      function x({
        sponsor: e,
        sponsorMetadata: t,
        onlyText: r,
        onLoadLogo: a,
        showSponsorBrand: l,
      }) {
        let s = (0, S.useBrandName)(),
          { type: u } = t || {},
          { brand: p, logo: d, url: f } = e,
          { hips_url: b } = d || {},
          m = (0, c.$G)({
            key: "content.sponsorBrandName",
            macros: {
              sponsorBrandName: p,
            },
          }),
          g = (0, n.useMemo)(
            () =>
              (0, y.tZ)(i.ZP, {
                src: b,
                title: p,
                role: "img",
                width: "auto",
                height: "100%",
                alt: m,
                "aria-label": m,
                onLoad: a,
              }),
            [b, p, m, m]
          );
        return r || b
          ? (0, y.tZ)(
              A.Fragment,
              null,
              (0, y.tZ)(_, {
                showSponsorBrand: l,
                brandName: s,
                sponsor: e,
                metadata: t,
                onlyText: r,
                sponsorType: u,
              }),
              r
                ? null
                : (0, y.tZ)(
                    A.Fragment,
                    null,
                    (0, y.tZ)(R, {
                      brandName: s,
                      metadata: t,
                    }),
                    (0, y.tZ)(
                      o.ZP,
                      {
                        href: f,
                      },
                      (0, y.tZ)(E.HD, null, g)
                    )
                  )
            )
          : null;
      }
      x.defaultProps = {
        sponsor: {},
        onLoadLogo: () => {},
        onlyText: !0,
        sponsorMetadata: {},
        brand: {},
        showSponsorBrand: !1,
      };
      var N = x;
    },
    55769: function (e, t, r) {
      r.d(t, {
        H: function () {
          return o;
        },
        T: function () {
          return i;
        },
      });
      var n = r(23615);
      let i = n.shape({
          type: n.string,
        }),
        o = n.shape({
          title: n.string,
          brand: n.string,
        });
    },
    37268: function (e, t, r) {
      r.d(t, {
        Ab: function () {
          return f;
        },
        HD: function () {
          return b;
        },
        r: function () {
          return d;
        },
        x_: function () {
          return m;
        },
      });
      var n = r(76145),
        i = r(2929),
        o = r(81463),
        a = r(11129),
        l = r(73423),
        c = r(68124),
        s = r(50064);
      function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let d = (0, i.Z)("div", {
          target: "e5m18qw2",
        })(
          (0, o.ZP)(
            "sponsor-bar",
            p(
              p(
                p(
                  p(
                    p(p(p(p(p(p({}, a.Cg), a.$_), a.jf), a.GQ), a.bK), a.FK),
                    a.Dh
                  ),
                  a.cp
                ),
                a.eC
              ),
              a.oQ
            ),
            {
              bg: "sponsor-bar-bg",
              width: "100%",
              textAlign: "center",
              elevation: "nav",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "xs",
              "& img": {
                maxWidth: {
                  _: 6.25,
                  sm: 7.25,
                  md: 8.375,
                },
                height: {
                  _: 1.125,
                  sm: 1.3,
                  md: 1.5,
                },
              },
              img: {
                maxWidth: {
                  _: 9.375,
                  sm: 10,
                  md: 10.9375,
                },
                maxHeight: 2.5,
              },
              [`img:not(${s.Z})`]: {
                width: "auto",
                height: "auto",
              },
              "@media print": {
                position: "relative",
              },
            }
          ),
          ""
        ),
        f = (0, i.Z)("div", {
          target: "e5m18qw1",
        })(
          (0, o.ZP)("sponsor-logo-separator", p(p(p({}, a.$_), a.Dh), a.cp)),
          ""
        ),
        b = (0, i.Z)("div", {
          target: "e5m18qw0",
        })(
          (0, o.ZP)("sponsor-image-wrapper", p(p(p({}, a.jf), a.Cg), a.Dh), {
            display: "inline-block",
            paddingLeft: "xxs",
          }),
          ""
        ),
        m = (0, l.Z)(c.ZP, {
          __themeKey: "sponsor-brand-logo-link",
          __themeConfig: p(p(p(p(p({}, a.$_), a.jf), a.bK), a.cp), a.Dh),
          sx: {
            svg: {
              display: "block",
            },
          },
        });
    },
    97348: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return f;
        },
      });
      var n = r(76145),
        i = r(2929),
        o = r(81463),
        a = r(11129);
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let s = (0, i.Z)("div", {
        target: "e1tikjwn0",
      })(
        (0, o.ZP)("sponsor-label", c(c(c(c({}, a.$_), a.bK), a.Dh), a.cp)),
        ""
      );
      r(55769);
      var u = r(95171),
        p = r(10043);
      function d({
        sponsor: e,
        sponsorMetadata: t,
        primitiveLabel: r,
        showSponsorBrand: n,
      }) {
        return (0, p.tZ)(
          s,
          {
            suppressHydrationWarning: !0,
          },
          r ||
            (0, p.tZ)(u.Z, {
              sponsor: e,
              sponsorMetadata: t,
              showSponsorBrand: n,
            })
        );
      }
      (d.displayName = "SponsorText"),
        (d.defaultProps = {
          showSponsorBrand: !1,
          primitiveLabel: "",
          sponsor: null,
          sponsorMetadata: null,
        });
      var f = d;
    },
    53173: function (e, t, r) {
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return tQ;
          },
          default: function () {
            return tX;
          },
        });
      var n = r(76145),
        i = r(17117),
        o = r(32980),
        a = r(65218),
        l = r.n(a),
        c = r(6372),
        s = r(97401),
        u = r(4575),
        p = r(88038),
        d = r.n(p),
        f = r(36686),
        b = r(14828),
        m = r(75885),
        g = r(15366),
        y = r(77533),
        O = r(50581),
        h = r(2929),
        P = r(81463),
        Z = r(11129);
      function j(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? j(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : j(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let D = (0, h.Z)("dl", {
          target: "e1909yi86",
        })(
          (0, P.ZP)(
            "recipe-info-container",
            w(
              w(w(w(w(w(w(w({}, Z.Cg), Z.Dh), Z.jf), Z.bK), Z.GQ), Z.$_), Z.AF),
              Z.e6
            ),
            {
              padding: "s",
              marginLeft: {
                _: "auto",
                xlg: `calc(-1 * (4 * ${i.GO}))`,
                xxxlg: `calc(-1 * (${i.pU} + ${i.GO}))`,
              },
              maxWidth: "maxContentWidth",
              width: {
                _: "auto",
                xlg: `calc(100% + (4 * ${i.GO}))`,
                xxxlg: `calc(100% + (${i.pU} + ${i.GO}))`,
              },
              columnCount: {
                "md:xlg": 2,
              },
              display: {
                _: "block",
                xlg: "flex",
              },
              bg: "greyXlight",
              borderBottom: "border-thin-grey",
              borderTop: "border-thin-grey",
              justifyContent: "center",
              "@media print": {
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "0 !important",
                mb: "0 !important",
                width: "auto !important",
                maxWidth: "100%",
              },
            }
          ),
          ""
        ),
        v = (0, h.Z)("div", {
          target: "e1909yi85",
        })(
          (0, P.ZP)(
            "recipe-info-item",
            w(
              w(w(w(w(w(w(w({}, Z.oQ), Z.Cg), Z.$_), Z.jf), Z.GQ), Z.FK), Z.Dh),
              Z.cp
            ),
            {
              marginBottom: {
                _: "xs",
                xlg: 0,
              },
              paddingRight: {
                _: 0,
                xlg: "{m}",
              },
              marginRight: {
                _: 0,
                xlg: "{m}",
              },
              position: "relative",
              "&:last-child span:after": {
                display: "none",
              },
              "&:last-child": {
                paddingRight: 0,
                marginRight: 0,
                marginBottom: 0,
              },
              "@media print": {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
            }
          ),
          ""
        ),
        _ = (0, h.Z)("dt", {
          target: "e1909yi84",
        })(
          (0, P.ZP)(
            "recipe-info-label",
            w(w(w(w(w({}, Z.jf), Z.cp), Z.$_), Z.Cg), Z.e6),
            {
              display: {
                _: "inline",
                xlg: "block",
                "smd:xlg": "inline",
              },
              marginBottom: "xxs",
              textAlign: {
                xxs: "left",
                xlg: "center",
              },
              "@media print": {
                display: "inline !important",
                textAlign: "left !important",
              },
            }
          ),
          ""
        ),
        E = (0, h.Z)("dd", {
          target: "e1909yi83",
        })(
          (0, P.ZP)(
            "recipe-info-value",
            w(w(w(w(w({}, Z.jf), Z.cp), Z.$_), Z.Cg), Z.e6),
            {
              display: {
                _: "inline",
                xlg: "block",
              },
              m: 0,
              textAlign: {
                _: "left",
                xlg: "center",
              },
              "@media print": {
                display: "inline !important",
                textAlign: "left !important",
              },
            }
          ),
          ""
        ),
        S = (0, h.Z)("span", {
          target: "e1909yi82",
        })(
          (0, P.ZP)(
            "recipe-info-value-item",
            w(w(w(w(w({}, Z.jf), Z.cp), Z.$_), Z.Cg), Z.e6),
            {
              m: 0,
            }
          ),
          ""
        ),
        C = (0, h.Z)("span", {
          target: "e1909yi81",
        })(
          (0, P.ZP)(
            "recipe-info-value-unit",
            w(w(w(w(w({}, Z.jf), Z.cp), Z.$_), Z.Cg), Z.e6),
            {
              m: 0,
            }
          ),
          ""
        ),
        T = (0, h.Z)("span", {
          target: "e1909yi80",
        })(
          (0, P.ZP)(
            "recipe-info-vertical-line",
            w(
              w(w(w(w(w(w(w({}, Z.oQ), Z.Cg), Z.Oq), Z.$_), Z.jf), Z.bK), Z.FK),
              Z.cp
            ),
            {
              display: {
                _: "none",
                xlg: "block",
              },
              height: "100%",
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translate(50%, -50%)",
              "&:after": {
                content: "''",
                display: "block",
                background: "grey",
                width: "0.01rem",
                height: "100%",
              },
              "@media print": {
                display: "none !important",
              },
            }
          ),
          ""
        );
      var R = r(96435),
        A = r(52975);
      let x = {
          ARIA_CONTROLS_RECIPE_INTRODUCTION: "recipe-introduction",
        },
        N = {
          INGREDIENTS_CLASS: "ingredient-lists",
          INSTRUCTIONS_CLASS: "directions",
        },
        I = {
          0.125: "1/8",
          0.25: "1/4",
          0.333: "1/3",
          0.5: "1/2",
          0.667: "2/3",
          0.75: "3/4",
        },
        k = {
          NUTRITION: 1,
          OCCASION: 2,
          CUISINE: 3,
          CATEGORY: 4,
        },
        L = {
          TIME: "time",
          YIELDS: "yields",
        },
        G = {
          ENERC_KCAL: "Calories",
          FAT: "Fat",
          FASAT: "Saturated fat",
          FATRN: "Trans fat",
          CHOLE: "Cholesterol",
          NA: "Sodium",
          "CHOCDF.net": "Carbohydrates",
          FIBTG: "Fiber",
          SUGAR: "Sugar",
          PROCNT: "Protein",
          VITD: "Vitamin D",
          CA: "Calcium",
          FE: "Iron",
          K: "Potassium",
        },
        U = {
          g: "g",
          mg: "mg",
          µg: "mcg",
        },
        F = {
          SERVINGS: "serving(s)",
          CUPS: "c.",
          DOZEN: "dz.",
          QUARTS: "qt.",
          TABLESPOON: "tbsp.",
          KILOGRAM: "kg.",
          LITRE: "L.",
          MILLILITRE: "mL.",
        },
        $ = {
          "serving(s)": 1,
          "dz.": 12,
        },
        V = (e) => `See ${e ? "" : "All"} Nutritional Information`,
        B = {
          "serving(s)": "Per Serving",
          "c.": "Per Cup",
          "qt.": "Per Quart",
          "dz.": "Per Serving",
        },
        K = (e, t) => `${B[t]} ${$[t] ? `(Serves ${e})` : ""}`;
      var M = r(34738);
      let q = new M.H(
          "IngredientGroupPagableFragment",
          A.Ps`
		fragment IngredientGroupPagableFragment on IngredientGroup {
			id
			subhead
			ingredients(first: $first, start: $start) {
				id
				food
				amount
				unit
				description
				main_ingredient
				position
			}
		}
	`
        ),
        H = A.Ps`
	query IngredientGroups($id: UUID!, $start: Int = 1, $first: Int = ${30}) {
		ingredientgroups(ID: $id) {
			...${q.name}
		}
	}
 	${q.fragment}
`;
      var W = r(96109),
        Y = r(67739);
      let Q = (e, t, r) => {
          if (!r) return "";
          let n = e ? +(e % 1).toFixed(3) : "",
            i = [
              Math.floor(e) ? `<strong>${Math.floor(e)}</strong>` : "",
              I[n] ? `<strong>${I[n]}</strong>` : "",
              t ? `<strong>${t}</strong>` : "",
              r,
            ],
            o = (e, t) => e.concat(t ? `${t} ` : "");
          return i.reduce(o, "").trim();
        },
        X = ({ totalNutrients: e, yields: t, yieldsUnit: r }) =>
          (0, Y.x)(e)
            ? []
            : Object.keys(G)?.map?.((n) => {
                let i = e[n];
                return i
                  ? {
                      label: G[n],
                      quantity:
                        "number" == typeof t && t
                          ? `${Math.round(B[r] ? i.quantity / t : i.quantity)}`
                          : "0",
                      unit: U[i.unit] || "",
                    }
                  : {};
              }),
        z = (e, t, r) => {
          let n = `${e ?? ""}${t ? ` - ${t}` : ""}`;
          return n ? [n, ...(r ? [r] : [])] : [];
        },
        J = (e) => {
          if (!e) return [];
          let t = e.split(" "),
            r = 2 === t.length ? t[0] : "",
            n = 2 === t.length ? t[1] : t[0],
            [i = 0, o = 0] = n.split(":");
          return [+r, +i, +o];
        },
        ee = (e, t, r) =>
          r && (!t || t.length) ? [e, r, 1, 0 === e ? 60 : 90 * e] : null;
      async function et(e, t, r, n) {
        let i = await (0, W._i)([
          H,
          {
            id: t,
            start: r,
            first: n,
          },
        ]);
        return i?.ingredientgroups?.[0].ingredients?.[0]
          ? i?.ingredientgroups?.[0].ingredients
          : [];
      }
      let er = (e, t, r, n) =>
          [
            {
              title: "prep-time",
              timeValue: e,
            },
            {
              title: "process-time",
              timeValue: t,
            },
            {
              title: "total-time",
              timeValue: r,
            },
          ]
            .map(({ title: e, timeValue: t }) => {
              let [i, o, a] = J(t);
              return r && i + o + a > 0
                ? [
                    n[e],
                    {
                      daysVal: i,
                      hoursVal: o,
                      minsVal: a,
                    },
                    L.TIME,
                  ]
                : [];
            })
            .filter((e) => !!e.length),
        en = (e, t, r, n, i, o) => {
          if (!t) return e;
          if (!r || !i) return null;
          let a = i * $[o];
          return "number" == typeof a && n ? Math.round(n / a) : e;
        };
      var ei = r(10043),
        eo = r(50581);
      function ea({ yields: e, yieldsUpper: t, yieldsUnit: r }) {
        let [n] = Object.entries(F).find(([e, t]) => t === r) || [""],
          i = (0, R.$G)(`content.recipe.unit.${n.toLowerCase()}`),
          [o, a] = z(e, t, i || r);
        return (0, ei.tZ)(
          eo.Fragment,
          null,
          o && (0, ei.tZ)(S, null, o),
          a && (0, ei.tZ)(C, null, " ", a)
        );
      }
      ea.defaultProps = {
        yields: 0,
        yieldsUpper: 0,
        yieldsUnit: "",
      };
      var el = r(23615);
      function ec({ daysVal: e, hoursVal: t, minsVal: r }) {
        let [n, i, o, a, l, c] = (0, R.$G)([
            "content.day",
            "content.days",
            "content.hour",
            "content.hours",
            "content.min",
            "content.mins",
          ]),
          s = [
            e && {
              value: e,
              unit: 1 === e ? n : i,
            },
            t && {
              value: t,
              unit: 1 === t ? o : a,
            },
            r && {
              value: r,
              unit: 1 === r ? l : c,
            },
          ],
          u = (0, O.useCallback)(
            () =>
              s.map(({ value: e, unit: t }) =>
                (0, ei.tZ)(
                  O.default.Fragment,
                  {
                    key: t,
                  },
                  (0, ei.tZ)(S, null, " ", e),
                  (0, ei.tZ)(C, null, " ", t)
                )
              ),
            [s]
          );
        return u();
      }
      function es({ children: e }) {
        return (0, ei.tZ)(S, null, e);
      }
      function eu({ label: e, value: t, type: r }) {
        let n = (0, O.useCallback)(() => {
          switch (r) {
            case L.YIELDS:
              return (0, ei.tZ)(ea, t);
            case L.TIME:
              return (0, ei.tZ)(ec, t);
            default:
              return (0, ei.tZ)(es, null, t);
          }
        }, [t]);
        return (0, ei.tZ)(
          v,
          null,
          (0, ei.tZ)(_, null, e, ": "),
          (0, ei.tZ)(E, null, n()),
          (0, ei.tZ)(T, {
            "aria-hidden": "true",
          })
        );
      }
      (ec.propTypes = {
        daysVal: el.number.isRequired,
        hoursVal: el.number.isRequired,
        minsVal: el.number.isRequired,
      }),
        (es.displayName = "DefaultType"),
        (eu.displayName = "RecipeInfoItem"),
        (eu.defaultProps = {
          type: "",
        });
      var ep = r(96263);
      function ed({ recipeInfo: e }) {
        let t = (0, ep.P)("seo.hide-calories"),
          {
            yields: r,
            yieldsUpper: n,
            yieldsUnit: i,
            prepTime: o,
            processTime: a,
            totalTime: l,
            caloriesPerServing: c,
          } = e ?? {},
          s = (0, R.$G)("content.recipe"),
          u = er(o, a, l, s),
          p = [
            ...(r
              ? [
                  [
                    s.yields,
                    {
                      yields: r,
                      yieldsUpper: n,
                      yieldsUnit: i,
                    },
                    L.YIELDS,
                  ],
                ]
              : []),
            ...u,
            ...(c && !t ? [[s["calories-per-serving"], c]] : []),
          ],
          d = (0, O.useCallback)(
            () =>
              p.map((e) => {
                let [t, r, n = ""] = e;
                return (0, ei.tZ)(eu, {
                  key: t,
                  label: t,
                  value: r,
                  type: n,
                });
              }),
            [p]
          );
        return (0, ei.tZ)(D, y.Er.PARTIAL_BLUR, d());
      }
      (ed.displayName = "RecipeInfo"),
        (ed.defaultProps = {
          recipeInfo: {
            yields_upper: 0,
          },
        });
      var ef = r(54616),
        eb = r(13349),
        em = r(27954),
        eg = r(15239),
        ey = r(94969);
      function eO(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eO(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : eO(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let eP = l()(
          () =>
            Promise.resolve()
              .then(r.bind(r, 94969))
              .then((e) => e.PopoverActivator),
          {
            loadableGenerated: {
              webpack: () => [94969],
            },
          }
        ),
        eZ = (0, h.Z)(eP, {
          target: "evuuf5d9",
        })(
          (0, P.ZP)(
            "recipe-nutrition-activator",
            eh(eh(eh({}, Z.Cg), Z.cp), Z.Dh),
            {
              borderColor: "transparent",
              marginLeft: "-{xs}",
            }
          ),
          ""
        ),
        ej = (0, h.Z)("li", {
          target: "evuuf5d8",
        })(
          (0, P.ZP)("recipe-nutrition-list", eh(eh({}, Z.bK), Z.Dh), {
            width: "100%",
            p: "0",
            m: "0",
            marginTop: "m",
          }),
          ""
        ),
        ew = (0, h.Z)(ey.PopoverContent, {
          target: "evuuf5d7",
        })(
          (0, P.ZP)("recipe-nutrition-list-content", eh({}, Z.bK), {
            listStyle: "none",
            maxWidth: "284px",
          }),
          ""
        ),
        eD = (0, h.Z)("span", {
          target: "evuuf5d6",
        })(
          (0, P.ZP)(
            "recipe-nutrition-list-item",
            eh(
              eh(eh(eh(eh(eh(eh({}, Z.Cg), Z.$_), Z.jf), Z.GQ), Z.bK), Z.Dh),
              Z.cp
            ),
            {
              borderBottom: "border-thin-grey",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "28px",
              width: "100%",
              "&:first-of-type": {
                borderTop: "border-thin-grey",
              },
            }
          ),
          ""
        ),
        ev = (0, h.Z)("span", {
          target: "evuuf5d5",
        })(
          (0, P.ZP)(
            "recipe-nutrition-list-item-label",
            eh(eh(eh({}, Z.cp), Z.bK), Z.Dh),
            {
              width: "calc((100% / 3) * 2)",
            }
          ),
          ""
        ),
        e_ = (0, h.Z)(ey.PopoverHeading, {
          target: "evuuf5d4",
        })(
          (0, P.ZP)(
            "recipe-nutrition-heading",
            eh(eh(eh(eh(eh({}, Z.$_), Z.jf), Z.cp), Z.Dh), Z.bK),
            {
              display: "block",
              width: "100%",
              marginTop: "l",
            }
          ),
          ""
        ),
        eE = (0, h.Z)(ey.PopoverCloseButton, {
          target: "evuuf5d3",
        })(
          (0, P.ZP)("recipe-nutrition-heading", eh({}, Z.Dh), {
            marginTop: 0,
            marginRight: 0,
          }),
          ""
        ),
        eS = (0, h.Z)("li", {
          target: "evuuf5d2",
        })(
          (0, P.ZP)(
            "recipe-nutrition-subheading",
            eh(eh(eh(eh(eh({}, Z.$_), Z.jf), Z.cp), Z.Dh), Z.bK),
            {
              display: "block",
              width: "100%",
            }
          ),
          ""
        ),
        eC = (0, h.Z)("li", {
          target: "evuuf5d1",
        })(
          (0, P.ZP)(
            "recipe-nutrition-3rd-party-wrapper",
            eh(eh(eh({}, Z.bK), Z.Dh), Z.cp),
            {
              width: "100%",
              marginTop: "20px",
            }
          ),
          ""
        ),
        eT = (0, h.Z)("span", {
          target: "evuuf5d0",
        })(
          (0, P.ZP)(
            "recipe-nutrition-3rd-party-logo-wrapper",
            eh(eh(eh(eh(eh({}, Z.jf), Z.Dh), Z.cp), Z.$_), Z.GQ),
            {
              display: "flex",
              marginTop: "s",
              justifyContent: "flex-start",
              alignItems: "center",
            }
          ),
          ""
        );
      var eR = r(23615);
      let eA = eR.shape({
        label: eR.string,
        quantity: eR.number,
        unit: eR.string,
      });
      eR.shape({
        "CHOCDF.net": eA,
        CA: eA,
        CHOCDF: eA,
        CHOLE: eA,
        FAMS: eA,
        FAPU: eA,
        FASAT: eA,
        FAT: eA,
        FE: eA,
        FIBTG: eA,
        K: eA,
        NA: eA,
        PROCNT: eA,
        SUGAR: eA,
        VITD: eA,
      }).isRequired,
        eR.number.isRequired,
        eR.string.isRequired,
        eR.bool.isRequired;
      var ex = r(97348),
        eN = r(63622),
        eI = r(68124),
        ek = r(38419);
      let eL = l()(() => Promise.resolve().then(r.bind(r, 94969)), {
        loadableGenerated: {
          webpack: () => [94969],
        },
      });
      function eG({
        totalNutrients: e,
        yields: t,
        yieldsUnit: r,
        isYieldInServings: n,
      }) {
        let i = (0, ep.P)("seo.hide-calories"),
          o = (0, eN.Lm)("/static/images/3rd-party/edamam-logo.jpg"),
          a = n ? t * $[r] : t,
          l = X({
            totalNutrients: e,
            yields: a,
            yieldsUnit: r,
          }),
          c = V(i),
          s = () =>
            (0, ek.Z)("dropdownToggle", "nutrition-dropdown-toggle", {
              ctaText: c,
            });
        return (0, ei.tZ)(
          eL,
          {
            animationDuration: 200,
            triggerMode: "click",
            placement: "bottom-start",
            pointerOffsets: {
              x: -70,
            },
          },
          (0, ei.tZ)(
            eZ,
            {
              onClick: s,
              hasIcon: !1,
            },
            c
          ),
          (0, ei.tZ)(
            ew,
            null,
            (0, ei.tZ)(
              e_,
              {
                as: "li",
              },
              "Nutrition Information"
            ),
            B[r] ? (0, ei.tZ)(eS, null, K(a, r)) : null,
            (0, ei.tZ)(
              ej,
              null,
              l?.map?.(({ label: e, quantity: t, unit: r }) =>
                e
                  ? ei.tZ(
                      eD,
                      {
                        key: e,
                      },
                      ei.tZ(ev, null, e),
                      t || "",
                      " ",
                      r || ""
                    )
                  : null
              )
            ),
            (0, ei.tZ)(
              eC,
              null,
              (0, ei.tZ)(
                "span",
                null,
                "Note: The information shown is Edamam’s estimate based on available ingredients and preparation. It should not be considered a substitute for a professional nutritionist’s advice."
              ),
              (0, ei.tZ)(
                eT,
                null,
                (0, ei.tZ)(ex.Z, {
                  primitiveLabel: "Powered by",
                }),
                (0, ei.tZ)(
                  eI.ZP,
                  {
                    href: "https://www.edamam.com/",
                  },
                  (0, ei.tZ)("img", {
                    src: o,
                    loading: "lazy",
                    alt: "edamam logo",
                    width: 90,
                    height: 20,
                  })
                )
              )
            ),
            (0, ei.tZ)(eE, null)
          )
        );
      }
      eG.displayName = "Nutrition";
      var eU = r(97144);
      function eF({ amount: e, unit: t, description: r }) {
        let [n] = (0, R.$G)([`content.recipe.units.${t}`]);
        return (0, ei.tZ)(eb.Wv, {
          dangerouslySetInnerHTML: {
            __html: Q(e, n || t, r),
          },
        });
      }
      (eF.displayName = "IngredientsListItem"),
        (eF.defaultProps = {
          amount: null,
          unit: "",
        });
      let e$ = ["id"];
      function eV({
        id: e,
        ingredients: t = [],
        subhead: r,
        showRecipeNutrition: n,
      }) {
        let i = (0, R.$G)("content.loadMore"),
          { 0: o, 1: a } = (0, O.useState)(t),
          { 0: l, 1: c } = (0, O.useState)(t?.length === 31),
          s = (...t) => ee(...t, e),
          p = ({ size: e, data: r }) => {
            if (null !== r && r.length > t.length && 1 !== e) {
              r.length >= 30 * e ? c(!0) : c(!1);
              let t = [...new Map(r.map((e) => [e.position, e])).values()];
              a(t);
            }
          },
          d = (0, eU.Vi)("data.content.0.recipe.nutrition.total_nutrients"),
          f = (0, eU.Vi)("data.content.0.recipe.yields"),
          b = (0, eU.Vi)("data.content.0.recipe.yields_upper"),
          m = (0, eU.Vi)("data.content.0.recipe.yields_unit"),
          g = !!$[m];
        return (0, ei.tZ)(
          eb.LO,
          null,
          r && (0, ei.tZ)(eb.c8, null, r),
          o?.length
            ? (0, ei.tZ)(
                eb.V3,
                {
                  className: N.INGREDIENTS_CLASS,
                },
                o?.length &&
                  o.map((e, t) => {
                    let { id: r } = e,
                      n = (0, em.Z)(e, e$);
                    return (0, ei.tZ)(
                      eF,
                      (0, u.Z)(
                        {
                          key: r,
                          x: t,
                        },
                        n
                      )
                    );
                  })
              )
            : null,
          n &&
            (0, ei.tZ)(eG, {
              totalNutrients: d,
              yields: b || f,
              yieldsUnit: m,
              isYieldInServings: g,
            }),
          l
            ? (0, ei.tZ)(
                eb.zQ,
                null,
                (0, ei.tZ)(eg.Z, {
                  role: "button",
                  getKey: s,
                  fetcher: et,
                  onDataLoad: p,
                  themeKey: "recipe-load-more-ingredients-button",
                  buttonText: i,
                })
              )
            : null
        );
      }
      function eB(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eK(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eB(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : eB(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function eM({
        ingredientGroups: e,
        headingButton: t,
        showRecipeNutrition: r,
      }) {
        let n = (0, O.useCallback)(
            () =>
              Array.isArray(e)
                ? e.map((t, n) => {
                    let i = eK(
                      eK({}, t),
                      n === e.length - 1 && {
                        showRecipeNutrition: r,
                      }
                    );
                    return (0, ei.tZ)(eV, i);
                  })
                : null,
            e
          ),
          i = (0, R.$G)("content.recipe.ingredients");
        return (0, ei.tZ)(
          eb.Jd,
          null,
          (0, ei.tZ)(ef.DR, null, (0, ei.tZ)(eb.Gm, null, i), t),
          (0, ei.tZ)(
            eb.Ux,
            {
              className: "ingredients-body",
            },
            n()
          )
        );
      }
      (eV.displayName = "IngredientsSection"),
        (eV.defaultProps = {
          subhead: null,
          showRecipeNutrition: !1,
        }),
        (eM.displayName = "Ingredients"),
        (eM.defaultProps = {
          headingButton: null,
          showRecipeNutrition: !1,
        });
      var eq = r(53612),
        eH = r(68642),
        eW = r(97817);
      function eY(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eQ(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eY(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : eY(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let eX = (0, h.Z)("div", {
          target: "evb48wp6",
        })(
          (0, P.ZP)(
            "recipe-instructions-wrapper",
            eQ(eQ(eQ(eQ(eQ(eQ({}, Z.GQ), Z.eC), Z.bK), Z.e6), Z.Dh), Z.jf),
            {
              gridColumn: {
                md: "2/3",
              },
              maxWidth: {
                lg: 40.25,
              },
              paddingLeft: {
                xlg: 1,
                "xxxlg>": 2,
              },
              justifySelf: "center",
              width: "100%",
            }
          ),
          ""
        ),
        ez = (0, h.Z)("h2", {
          target: "evb48wp5",
        })(
          (0, P.ZP)(
            "recipe-instructions-heading",
            eQ(
              eQ(eQ(eQ(eQ(eQ(eQ({}, Z.Oq), Z.Cg), Z.$_), Z.jf), Z.e6), Z.Dh),
              Z.cp
            ),
            {
              margin: 0,
            }
          ),
          ""
        ),
        eJ = (0, h.Z)("ul", {
          target: "evb48wp4",
        })(
          (0, P.ZP)("recipe-instructions-list", Z.Dh, {
            p: 0,
            m: 0,
          }),
          ""
        ),
        e0 = (0, h.Z)("li", {
          target: "evb48wp3",
        })(
          (0, P.ZP)(
            "recipe-instructions-list-item",
            eQ(
              eQ(
                eQ(eQ(eQ(eQ(eQ(eQ({}, Z.Oq), Z.Cg), Z.$_), Z.jf), Z.bK), Z.FK),
                Z.Dh
              ),
              Z.cp
            ),
            {
              listStyle: "none",
              m: ".5rem 0 0",
              "&:first-of-type": {
                marginTop: 0,
              },
              ol: {
                listStyle: "none",
                counterReset: "item",
                m: 0,
                p: 0,
              },
              "ol > li": {
                position: "relative",
              },
              "li span": {
                fontWeight: "bold",
              },
            }
          ),
          ""
        ),
        e1 = (0, h.Z)("h3", {
          target: "evb48wp2",
        })(
          (0, P.ZP)(
            "recipe-instructions-subheading",
            eQ(eQ(eQ(eQ(eQ(eQ({}, Z.Oq), Z.Cg), Z.$_), Z.jf), Z.e6), Z.cp),
            {
              m: 0,
            }
          ),
          ""
        ),
        e5 = (0, h.Z)("span", {
          target: "evb48wp1",
        })(
          (0, P.ZP)(
            "recipe-instructions-list-item-step-label",
            eQ(eQ(eQ(eQ(eQ({}, Z.$_), Z.jf), Z.Dh), Z.cp), Z.WD)
          ),
          ""
        ),
        e2 = (0, h.Z)("span", {
          target: "evb48wp0",
        })(
          (0, P.ZP)(
            "recipe-instructions-list-item-number",
            eQ(
              eQ(eQ(eQ(eQ(eQ(eQ({}, Z.Cg), Z.$_), Z.fz), Z.bK), Z.FK), Z.cp),
              Z.Dh
            )
          ),
          ""
        ),
        e9 = {
          TitleDesignElementBefore: {
            variant:
              "recipe-instructions-list-item-number-design-element-before",
          },
          TitleDesignElementAfter: {
            variant:
              "recipe-instructions-list-item-number-design-element-after",
            display: "block",
          },
        },
        e6 = {
          TitleDesignElementBefore: {
            __themeKey:
              "recipe-instructions-list-item-number-design-element-before",
          },
          TitleDesignElementAfter: {
            __themeKey:
              "recipe-instructions-list-item-number-design-element-after",
          },
        };
      function e3({ subhead: e, steps: t }) {
        let r;
        return (0, ei.tZ)(
          e0,
          null,
          e && (0, ei.tZ)(e1, null, e),
          (0, ei.tZ)(eq.Z, {
            dom: t,
            views:
              ((r = 0),
              {
                li: () =>
                  function ({ children: e }) {
                    let { 0: t } = (0, O.useState)(() => (r += 1)),
                      n = (0, R.$G)("content.recipe.stepTitle");
                    return (0, ei.tZ)(
                      "li",
                      null,
                      (0, ei.tZ)(
                        eW.Z,
                        {
                          sxProps: e9,
                          themeOptions: e6,
                        },
                        (0, ei.tZ)(e5, null, n, "\xa0"),
                        (0, ei.tZ)(e2, null, t)
                      ),
                      e
                    );
                  },
              }),
            styles: eH.F,
          })
        );
      }
      function e7({ instructions: e, headingButton: t }) {
        let r = (0, O.useCallback)(
            () =>
              e.map((e) =>
                (0, ei.tZ)(
                  e3,
                  (0, u.Z)(
                    {
                      key: e.order,
                    },
                    e
                  )
                )
              ),
            [e]
          ),
          [n] = (0, R.$G)(["content.recipe.instructions"]);
        return (0, ei.tZ)(
          eX,
          null,
          (0, ei.tZ)(ef.DR, null, (0, ei.tZ)(ez, null, n), t),
          (0, ei.tZ)(
            eJ,
            {
              className: N.INSTRUCTIONS_CLASS,
            },
            Array.isArray(e) ? r() : null
          )
        );
      }
      (e3.displayName = "InstructionItem"),
        (e3.defaultProps = {
          subhead: "",
        }),
        (e7.displayName = "Instructions"),
        (e7.defaultProps = {
          instructions: [],
          headingButton: null,
        });
      var e8 = r(98820);
      function e4(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? e4(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : e4(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let tt = (0, h.Z)("section", {
          target: "e1cu2cdi4",
        })(
          (0, P.ZP)(
            "recipe-instruction-wrapper",
            te(
              te(
                te(te(te(te(te(te({}, Z.Cg), Z.$_), Z.jf), Z.GQ), Z.eC), Z.bK),
                Z.FK
              ),
              Z.Dh
            ),
            {
              display: "grid",
              gridColumn: {
                _: "1",
                lg: "2/3",
              },
              position: "relative",
              maxWidth: {
                "smd:lg": 40.25,
              },
              width: "100%",
              justifySelf: "center",
              m: {
                _: "1rem 0",
                "smd:lg": "1rem 0",
                xxlg: "1rem 0",
              },
              p: 0,
              "@media print": {
                display: "none",
              },
            }
          ),
          ""
        ),
        tr = {
          mb: {
            _: "0",
            md: "1rem",
          },
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: {
            _: "5",
            xs: "4",
            sm: "3",
            md: "unset",
          },
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          "div, p, h1, h2, h3, h4, h5, h6, section, hr, blockquote, ol, ul, li":
            {
              display: {
                _: "inline",
                md: "block",
              },
            },
        },
        tn = (0, h.Z)("div", {
          target: "e1cu2cdi3",
        })(
          (0, P.ZP)(
            "recipe-introduction",
            te(te(te(te(te({}, Z.Cg), Z.jf), Z.bK), Z.FK), Z.Dh),
            {
              m: "0 0 1rem",
              "& p": {
                ":first-of-type": {
                  mt: 0,
                },
                ":last-of-type": {
                  mb: 0,
                },
              },
            }
          ),
          ""
        ),
        ti = {
          mt: -1,
        },
        to = (0, h.Z)("div", {
          target: "e1cu2cdi2",
        })(
          (0, P.ZP)(
            "recipe-introduction-button-wrap",
            te(te(te({}, Z.jf), Z.GQ), Z.Dh),
            {
              display: "flex",
              justifyContent: "center",
            }
          ),
          ""
        ),
        ta = (0, h.Z)("button", {
          target: "e1cu2cdi1",
        })(
          (0, P.ZP)(
            "recipe-introduction-read-more-button",
            te(
              te(
                te(te(te(te(te(te({}, Z.oQ), Z.Oq), Z.Cg), Z.$_), Z.jf), Z.bK),
                Z.Dh
              ),
              Z.cp
            ),
            {
              display: {
                _: "block",
                md: "none",
              },
              border: "none",
              p: "{xs} {m}",
              bg: "brandColorPrimary",
              transition: "background-color .3s ease-in-out",
              cursor: "pointer",
              "&:active": {
                bg: "black",
              },
            }
          ),
          ""
        ),
        tl = (0, h.Z)("div", {
          target: "e1cu2cdi0",
        })(
          (0, P.ZP)(
            "recipe-introduction-gradient",
            te(te(te(te({}, Z.Oq), Z.jf), Z.bK), Z.Dh),
            {
              display: {
                _: "block",
                md: "none",
              },
              mt: -4,
              height: 4,
              background:
                "linear-gradient(to top, #fff 20%, rgba(256, 256, 256, 0.1) 100%)",
            }
          ),
          ""
        ),
        tc = (e) => (e ? tr : {}),
        ts = (e) => (e ? ti : {});
      function tu({ introductionContent: e }) {
        let { 0: t, 1: r } = (0, O.useState)({
            isShrinked: !0,
          }),
          { 0: n, 1: i } = (0, O.useState)(() => tc(t.isShrinked)),
          { 0: o, 1: a } = (0, O.useState)(() => ts(t.isShrinked)),
          [l, c] = (0, R.$G)(["content.readMore", "content.readLess"]),
          s = (0, O.useCallback)(() => {
            r({
              isShrinked: !t.isShrinked,
            }),
              i(() => tc(!t.isShrinked)),
              a(() => ts(!t.isShrinked));
          });
        return (0, ei.tZ)(
          tt,
          null,
          (0, ei.tZ)(
            tn,
            (0, u.Z)(
              {
                sx: n,
                id: x.ARIA_CONTROLS_RECIPE_INTRODUCTION,
              },
              y.Er.RECIPE_INTRODUCTION
            ),
            (0, ei.tZ)(eq.Z, {
              dom: e,
              styles: eH.F,
              views: e8.Z,
            })
          ),
          t.isShrinked && (0, ei.tZ)(tl, null),
          (0, ei.tZ)(
            to,
            {
              sx: o,
            },
            (0, ei.tZ)(
              ta,
              (0, u.Z)(
                {
                  onClick: s,
                  "aria-expanded": !t.isShrinked,
                  "aria-controls": x.ARIA_CONTROLS_RECIPE_INTRODUCTION,
                },
                y.Er.PARTIAL_BLUR
              ),
              t.isShrinked ? l : c
            )
          )
        );
      }
      (tu.displayName = "Introduction"),
        (tu.defaultProps = {
          introductionContent: {},
        });
      var tp = r(23615);
      let td = tp.shape({
        id: tp.string,
        introduction: tp.string,
        yields: tp.string.isRequired,
        yields_upper: tp.string,
        yields_unit: tp.string.isRequired,
        prep_time: tp.string.isRequired,
        process_time: tp.string.isRequired,
        total_time: tp.string.isRequired,
        calories_per_serving: tp.string.isRequired,
        ingredient_groups: tp.arrayOf(tp.object),
        instructionsDom: tp.arrayOf(tp.shape({})),
        tipDom: tp.string,
        showRecipeNutrition: tp.bool.isRequired,
      });
      function tf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function tb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tf(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : tf(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      td.isRequired;
      let tm = (0, h.Z)("section", {
        target: "e1t794cl0",
      })(
        (0, P.ZP)(
          "recipe-tip-wrapper",
          tb(
            tb(
              tb(
                tb(
                  tb(
                    tb(tb(tb(tb(tb({}, Z.Cg), Z.Oq), Z.$_), Z.jf), Z.GQ),
                    Z.bK
                  ),
                  Z.eC
                ),
                Z.Dh
              ),
              Z.cp
            ),
            Z.AF
          ),
          {
            gridColumn: {
              _: "1",
              lg: "2/3",
            },
            maxWidth: {
              lg: 40.25,
            },
            width: {
              _: "auto",
              md: "100%",
            },
            justifySelf: "center",
            marginY: "s",
            padding: "0 {s}",
          }
        ),
        ""
      );
      function tg({ tip: e }) {
        return (0, ei.tZ)(
          tm,
          y.Er.PARTIAL_BLUR,
          (0, ei.tZ)(eq.Z, {
            dom: e,
            styles: eH.F,
            views: e8.Z,
          })
        );
      }
      (tg.displayName = "Tip"),
        (tg.defaultProps = {
          tip: {},
        });
      var ty = r(87102),
        tO = r(21215),
        th = r(72053),
        tP = r(58495),
        tZ = r(96975),
        tj = r(22717),
        tw = r(29846),
        tD = r(97978),
        tv = r(56120);
      function t_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function tE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? t_(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : t_(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let tS = (e, t, r) => {
        let [n, i] = z(e, t, r);
        return `${n ?? ""} ${i ?? ""}`.trim();
      };
      function tC(e, t, r = !1) {
        if (e && e.length && t) {
          let n = e.filter(
            (e) => (!r && e.category === t) || (r && e.category !== t)
          );
          if (n && Array.isArray(n) && n.length) return n.map((e) => e.name);
        }
        return [];
      }
      var tT = r(54737),
        tR = r(50581);
      function tA(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function tx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tA(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : tA(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let tN = l()(() => r.e(9916).then(r.bind(r, 73529)), {
          loadableGenerated: {
            webpack: () => [73529],
          },
        }),
        tI = (0, tZ.V)(
          l()(
            () =>
              Promise.all([r.e(9523), r.e(3584), r.e(4280), r.e(8678)]).then(
                r.bind(r, 18678)
              ),
            {
              loadableGenerated: {
                webpack: () => [18678],
              },
            }
          )
        );
      var tk = function ({ recipeData: e }) {
          let {
              yields: t,
              yields_upper: r,
              yields_unit: n,
              prep_time: i,
              process_time: o,
              total_time: a,
              calories_per_serving: l,
              ingredient_groups: c,
              filters: s,
              keywords: p,
              media: d,
              metadata: { hide_main_ad: f },
              showRecipeNutrition: b,
            } = e,
            m = (0, eU.Vi)("instructionsDom"),
            h = (0, eU.Vi)("introductionDom"),
            P = (0, eU.Vi)("tipDom"),
            Z = (0, eU.Vi)("tipHasNutritionInfo"),
            j = (0, eU.Vi)("instructions"),
            w = (0, eU.Vi)("titleText"),
            D = (0, eU.Vi)("data.content.0.recipe.nutrition.total_nutrients"),
            v = (0, eU.Vi)("data.content.0.recipe.nutrition.calories"),
            _ = (0, eU.Vi)("data.content.0.metadata.disable_content_save"),
            E = !!$[n],
            S = {
              yields: t,
              yieldsUpper: r,
              yieldsUnit: n,
              prepTime: i,
              processTime: o,
              totalTime: a,
              caloriesPerServing: en(l, b, E, v, t, n),
            },
            [C, T, R, A, x, N] = (0, ep.P)([
              "fre.enable-jam-journey",
              "fre.jam-journey.enable-gates",
              "fre.enable-my-stuff",
              "spotim-seo",
              "fre.seo.hide-nutrition-tip",
              "enable-sso",
            ]),
            I = (0, eU.IK)("spotImRatingData"),
            L = tx(
              tx({}, S),
              {},
              {
                ingredientGroups: c,
                instructions: j,
                filters: s,
                titleText: w,
                media: d,
                keywords: p,
              },
              A && {
                spotImRatingData: I,
              }
            ),
            F = (0, eU.Vi)("layoutContextProps.isAdsFree", !1),
            V = F || (0, tj.f)(f),
            B =
              R && !_ && N
                ? (0, ei.tZ)(tI, {
                    tooltipId: "recipe-save",
                  })
                : null,
            K = (0, th.Z)("md>"),
            M = (0, eU.Vi)("products"),
            q = !!Object.keys(M || {}).length,
            H = (0, tP.b9)(tT.X),
            W = (0, O.useId)();
          return (
            (0, O.useEffect)(() => {
              H(W);
            }, []),
            (0, ei.tZ)(
              tR.Fragment,
              null,
              h
                ? (0, ei.tZ)(tu, {
                    introductionContent: h,
                  })
                : (0, ei.tZ)(
                    "div",
                    y.Er.RECIPE_INTRODUCTION,
                    (0, ei.tZ)("div", y.Er.CONTENT)
                  ),
              V
                ? null
                : (0, ei.tZ)(
                    g.QM,
                    (0, u.Z)(
                      {
                        className: y.F3,
                      },
                      y.Er.UNBLUR
                    ),
                    (0, ei.tZ)(tN, {
                      adId: "gpt-ad-vertical-top-mobile",
                      className:
                        "mobile-breaker-ad recipe-breaker-ad recipe-mobile-breaker-ad",
                    })
                  ),
              (0, ei.tZ)(ed, {
                recipeInfo: S,
              }),
              C && T
                ? (0, ei.tZ)(ef.wJ, {
                    className: "journey-recipe-gate",
                  })
                : null,
              (0, ei.tZ)(
                ef.AS,
                (0, u.Z)(
                  {
                    "data-anchor-id": W,
                  },
                  y.Er.PARTIAL_BLUR
                ),
                (0, ei.tZ)(eM, {
                  ingredientGroups: c,
                  headingButton: K ? null : B,
                  showRecipeNutrition: b,
                }),
                (0, ei.tZ)(e7, {
                  instructions: m,
                  headingButton: K ? B : null,
                })
              ),
              P &&
                (!b || (!Z && b) || !x) &&
                (0, ei.tZ)(tg, {
                  tip: P,
                }),
              (0, ei.tZ)(tO.h, {
                props: (function ({
                  authors: e = [],
                  titleText: t,
                  caloriesPerServing: r,
                  prepTime: n,
                  processTime: i,
                  totalTime: o,
                  totalNutrients: a,
                  ingredientGroups: l,
                  instructions: c,
                  yields: s,
                  yieldsUpper: u,
                  yieldsUnit: p,
                  filters: d,
                  keywords: f,
                  host: b,
                  showRecipeNutrition: m,
                  spotImRatingData: g,
                }) {
                  let y = Array.isArray(e) ? [...e] : [];
                  (0, tv.P$)(b, y, !1);
                  let O = (e, t) =>
                      t?.ingredients &&
                      Array.isArray(e) &&
                      e.concat(...t.ingredients),
                    h = l ? l.reduce(O, []) : [],
                    P = g && g?.reviewCount,
                    Z = m
                      ? (function (e, t, r) {
                          let n = !!$[t],
                            i = n ? r * $[t] : r,
                            o = X({
                              totalNutrients: e,
                              yields: i,
                              yieldsUnit: t,
                            }),
                            [a, l, c, s, u, p, d, f, b, m] = o,
                            { g, mg: y } = U,
                            { ENERC_KCAL: O } = G,
                            h = tE(
                              tE(
                                tE(
                                  tE(
                                    tE(
                                      tE(
                                        tE(
                                          tE(
                                            tE(
                                              tE(
                                                {
                                                  "@type":
                                                    "NutritionInformation",
                                                },
                                                a?.quantity && {
                                                  calories: ` ${a?.quantity} ${O}`,
                                                }
                                              ),
                                              l?.quantity && {
                                                fatContent: `${l.quantity} ${g}`,
                                              }
                                            ),
                                            c?.quantity && {
                                              saturatedFatContent: `${c.quantity} ${g}`,
                                            }
                                          ),
                                          s?.quantity && {
                                            transFatContent: `${s.quantity} ${g}`,
                                          }
                                        ),
                                        u?.quantity && {
                                          cholesterolContent: `${u.quantity} ${y}`,
                                        }
                                      ),
                                      p?.quantity && {
                                        sodiumContent: `${p.quantity} ${y}`,
                                      }
                                    ),
                                    d?.quantity && {
                                      carbohydrateContent: `${d.quantity} ${g}`,
                                    }
                                  ),
                                  f?.quantity && {
                                    fiberContent: `${f.quantity} ${g}`,
                                  }
                                ),
                                b?.quantity && {
                                  sugarContent: `${b.quantity} ${g}`,
                                }
                              ),
                              m?.quantity && {
                                proteinContent: `${m.quantity} ${g}`,
                              }
                            );
                          return h;
                        })(a, p, s)
                      : r
                      ? {
                          "@type": "NutritionInformation",
                          calories: `${r} calories`,
                        }
                      : "";
                  return tE(
                    tE(
                      tE(
                        tE(
                          tE(
                            tE(
                              tE(
                                tE(
                                  {
                                    "@type": "Recipe",
                                    name: t,
                                    prepTime: (0, tD.EH)(n),
                                    cookTime: (0, tD.EH)(i),
                                    totalTime: (0, tD.EH)(o),
                                  },
                                  Array.isArray(h) &&
                                    h.length && {
                                      recipeIngredient: h.map(
                                        ({
                                          amount: e,
                                          unit: t,
                                          description: r,
                                        }) => (0, tw.o)(Q(e, t, r))
                                      ),
                                    }
                                ),
                                c &&
                                  c.length && {
                                    recipeInstructions: (function (e) {
                                      if (!e || !e.length) return [];
                                      let t = (e, { subhead: t, steps: r }) => {
                                        let n = (
                                          r.match(/<li>(.*?)<\/li>/g) || []
                                        ).map((e) => ({
                                          "@type": "HowToStep",
                                          text: e.replace(/<\/?li>/g, ""),
                                        }));
                                        return t
                                          ? e.concat({
                                              "@type": "HowToSection",
                                              name: t,
                                              itemListElement: n,
                                            })
                                          : e.concat(...n);
                                      };
                                      return e.reduce(t, []);
                                    })(c),
                                  }
                              ),
                              s && {
                                recipeYield: tS(s, u, p),
                              }
                            ),
                            d &&
                              d.length && {
                                recipeCuisine: tC(d, k.CUISINE),
                              }
                          ),
                          d &&
                            d.length && {
                              recipeCategory: tC(d, k.CUISINE, !0),
                            }
                        ),
                        f && {
                          keywords: f,
                        }
                      ),
                      P && {
                        aggregateRating: g,
                      }
                    ),
                    {},
                    {
                      articleBody: null,
                      wordCount: null,
                    },
                    !!Z && {
                      nutrition: Z,
                    }
                  );
                })(
                  tx(
                    tx({}, L),
                    {},
                    {
                      totalNutrients: D,
                      showRecipeNutrition: b,
                    }
                  )
                ),
              }),
              q &&
                (0, ei.tZ)(ty.Z, {
                  products: M,
                })
            )
          );
        },
        tL = r(91177),
        tG = r(50581);
      function tU(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function tF(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tU(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : tU(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function t$({ dom: e, configs: t }) {
        let { ArticleWrapperComponent: r = null, wrapperClassName: n } =
            t ?? {},
          i = (0, eU.Vi)("data.content.0.display_type.slug"),
          o = (0, eU.Vi)("data.content.0.metadata.hide_main_ad") ?? null,
          a = (0, eU.Vi)("data.content.0.metadata.seo_meta_keywords") ?? null,
          l = (0, eU.Vi)("data.content.0.recipe"),
          c = (0, eU.Vi)("data.content.0.media"),
          s = (0, eU.Vi)("hasNutritionInfoInBody"),
          p = (0, eU.Vi)("data.content.0.recipe.nutrition.total_nutrients"),
          g = (0, eU.Vi)("data.content.0.metadata.hide_nutrition_info"),
          O = (0, eU.IK)("spotImRatingData") ?? null,
          [h, P] = (0, ep.P)([
            "fre.sharing-component",
            "Display-nutrition-data",
          ]),
          Z = (0, eU.Vi)("data.content.0.section.title"),
          j = !(0, Y.x)(p) && !(0, tj.f)(g) && P,
          w = tF(
            tF({}, l),
            {},
            {
              media: c,
              keywords: a,
              spotImRatingData: O,
              metadata: {
                hide_main_ad: o,
              },
              showRecipeNutrition: j,
            }
          );
        return (0, ei.tZ)(
          tG.Fragment,
          null,
          Z
            ? (0, ei.tZ)(
                d(),
                null,
                (0, ei.tZ)("meta", {
                  name: "parsely-section",
                  content: Z,
                })
              )
            : null,
          (0, ei.tZ)(
            r,
            {
              className: `${n} content-container article-container`,
            },
            (0, ei.tZ)(m.Z, null),
            (0, ei.tZ)(f.Z, {
              noPrint: !0,
            }),
            (0, ei.tZ)(
              ef.PQ,
              {
                className: "recipe-body",
                [y.Er.BODY_ATTR]: i,
              },
              !h && (0, ei.tZ)(tL.default, null),
              (0, ei.tZ)(tk, {
                recipeData: w,
              }),
              !(s && j) &&
                (0, ei.tZ)(
                  b.Z,
                  (0, u.Z)(
                    {
                      dom: e,
                      displayShare: !0,
                      withSocialReview: !0,
                      noPrint: !0,
                    },
                    y.Er.RECIPE_ARTICLE_BODY
                  )
                )
            )
          )
        );
      }
      t$.defaultProps = {
        configs: {
          ArticleWrapperComponent: null,
          wrapperClassName: "",
        },
      };
      var tV = r(66061),
        tB = r(65239);
      let tK = {
        AffiliateDisclaimerBar: {
          key: "repositioned-disclaimer",
          excludeAutos: !0,
          behindFeatureFlag: "content-editor.enable-repositioned-disclaimer",
        },
        BreadcrumbsList: {
          key: "left-align-breadcrumb",
          excludeAutos: !0,
          behindFeatureFlag: "content-editor.enable-custom-header",
        },
        ByLineName: {
          key: "left-align-byline",
          excludeAutos: !0,
          behindFeatureFlag: "content-editor.enable-custom-header",
        },
        ContentHeaderPublishDate: {
          key: "left-align-publish-date",
          excludeAutos: !0,
          behindFeatureFlag: "content-editor.enable-custom-header",
        },
        EnhancedByLineContainer: {
          key: "left-align-enhanced-byline-container",
          excludeAutos: !0,
          behindFeatureFlag: "content-editor.enable-custom-header",
        },
        EnhancedByLineWrapper: {
          key: "left-align-enhanced-byline-wrapper",
          excludeAutos: !0,
          behindFeatureFlag: "content-editor.enable-custom-header",
        },
        ContentHeaderTextareaContainer: {
          key: "content-header-text-only",
          excludeAutos: !0,
          behindFeatureFlag: "content-editor.enable-custom-header",
        },
        ContentHeaderTextOnlyContainer: {
          key: "left-align-content-container",
          excludeAutos: !0,
          behindFeatureFlag: "content-editor.enable-custom-header",
        },
        EnhancedByLineLabel: {
          key: "left-align-enhanced-byline-label",
          excludeAutos: !0,
          behindFeatureFlag: "content-editor.enable-custom-header",
        },
        VerifierJobTitle: {
          key: "left-align-verifier-job-title",
          excludeAutos: !0,
          behindFeatureFlag: "content-editor.enable-custom-header",
        },
        ActionBlock: {
          key: "left-align-action-block",
          excludeAutos: !0,
          behindFeatureFlag: "content-editor.enable-custom-header",
        },
        ContentDek: {
          key: "left-align-content-dek",
          excludeAutos: !0,
          behindFeatureFlag: "content-editor.enable-custom-header",
        },
      };
      var tM = r(50581);
      function tq(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function tH(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tq(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : tq(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let tW = l()(() => r.e(986).then(r.bind(r, 50986)), {
        loadableGenerated: {
          webpack: () => [50986],
        },
      });
      function tY(e) {
        let t = {
            ArticleWrapperComponent: i.NZ,
            wrapperClassName: "recipe-container",
            DisplayTypeComponent: t$,
          },
          r = (0, tB.W7)(["AffiliateDisclaimerBar"]),
          n = (0, tV.Z)(),
          o = (0, eU.Vi)("bodyDom"),
          a = (0, eU.Vi)("data.content.0.metadata.header.title_layout"),
          l = y.kA[a] || y.Xv.TITLE_LAYOUT_TEXT_ONLY,
          u = l === y.Xv.TITLE_LAYOUT_TEXT_ONLY,
          p = e?.bodyDom
            ? e
            : tH(
                tH({}, e),
                {},
                {
                  bodyDom: o,
                }
              );
        return (0, ei.tZ)(
          tM.Fragment,
          null,
          r?.AffiliateDisclaimerBar
            ? (0, ei.tZ)(
                tM.Fragment,
                null,
                u
                  ? (0, ei.tZ)(c.x_, {
                      name: "content-layout.header-legal-language",
                    })
                  : null,
                (0, ei.tZ)(
                  c.x_,
                  {
                    name: "content-layout.lead-media-legal-language",
                  },
                  n && u ? (0, ei.tZ)(tW, null) : null
                )
              )
            : null,
          (0, ei.tZ)(s.default, {
            articleData: p,
            configs: t,
          })
        );
      }
      (tY.defaultProps = o.$),
        (tY.getTemplateProps = ({ pageProps: e, appProps: t }) =>
          tH(
            {
              variants: (0, tB.nl)({
                pageProps: e,
                appProps: t,
                variantConfig: tK,
              }),
            },
            y.oP
          ));
      var tQ = !0,
        tX = tY;
    },
    32980: function (e, t, r) {
      r.d(t, {
        $: function () {
          return i;
        },
      });
      var n = r(23615);
      n.oneOfType([n.element, n.arrayOf(n.element)]);
      let i = {
        children: null,
      };
    },
    93128: function (e, t, r) {
      r.d(t, {
        x: function () {
          return l;
        },
      });
      var n = r(76145);
      let i = {
        AD: "EUR",
        AE: "AED",
        AF: "AFN",
        AG: "XCD",
        AI: "XCD",
        AL: "ALL",
        AM: "AMD",
        AN: "ANG",
        AO: "AOA",
        AR: "ARS",
        AS: "USD",
        AT: "EUR",
        AU: "AUD",
        AW: "AWG",
        AX: "EUR",
        AZ: "AZN",
        BA: "BAM",
        BB: "BBD",
        BD: "BDT",
        BE: "EUR",
        BF: "XOF",
        BG: "BGN",
        BH: "BHD",
        BI: "BIF",
        BJ: "XOF",
        BL: "EUR",
        BM: "BMD",
        BN: "BND",
        BO: "BOB",
        BQ: "USD",
        BR: "BRL",
        BS: "BSD",
        BT: "BTN",
        BV: "NOK",
        BW: "BWP",
        BY: "BYN",
        BZ: "BZD",
        CA: "CAD",
        CC: "AUD",
        CD: "CDF",
        CF: "XAF",
        CG: "XAF",
        CH: "CHF",
        CI: "XOF",
        CK: "NZD",
        CL: "CLP",
        CM: "XAF",
        CN: "CNY",
        CO: "COP",
        CR: "CRC",
        CU: "CUP",
        CV: "CVE",
        CW: "ANG",
        CX: "AUD",
        CY: "EUR",
        CZ: "CZK",
        DE: "EUR",
        DJ: "DJF",
        DK: "DKK",
        DM: "XCD",
        DO: "DOP",
        DZ: "DZD",
        EC: "USD",
        EE: "EUR",
        EG: "EGP",
        EH: "MAD",
        ER: "ERN",
        ES: "EUR",
        ET: "ETB",
        FI: "EUR",
        FJ: "FJD",
        FK: "FKP",
        FM: "USD",
        FO: "DKK",
        FR: "EUR",
        GA: "XAF",
        GB: "GBP",
        GD: "XCD",
        GE: "GEL",
        GF: "EUR",
        GG: "GBP",
        GH: "GHS",
        GI: "GIP",
        GL: "DKK",
        GM: "GMD",
        GN: "GNF",
        GP: "EUR",
        GQ: "XAF",
        GR: "EUR",
        GS: "GBP",
        GT: "GTQ",
        GU: "USD",
        GW: "XOF",
        GY: "GYD",
        HK: "HKD",
        HM: "AUD",
        HN: "HNL",
        HR: "HRK",
        HT: "HTG",
        HU: "HUF",
        ID: "IDR",
        IE: "EUR",
        IL: "ILS",
        IM: "GBP",
        IN: "INR",
        IO: "USD",
        IQ: "IQD",
        IR: "IRR",
        IS: "ISK",
        IT: "EUR",
        JE: "GBP",
        JM: "JMD",
        JO: "JOD",
        JP: "JPY",
        KE: "KES",
        KG: "KGS",
        KH: "KHR",
        KI: "AUD",
        KM: "KMF",
        KN: "XCD",
        KP: "KPW",
        KR: "KRW",
        KW: "KWD",
        KY: "KYD",
        KZ: "KZT",
        LA: "LAK",
        LB: "LBP",
        LC: "XCD",
        LI: "CHF",
        LK: "LKR",
        LR: "LRD",
        LS: "LSL",
        LT: "EUR",
        LU: "EUR",
        LV: "EUR",
        LY: "LYD",
        MA: "MAD",
        MC: "EUR",
        MD: "MDL",
        ME: "EUR",
        MF: "EUR",
        MG: "MGA",
        MH: "USD",
        MK: "MKD",
        ML: "XOF",
        MM: "MMK",
        MN: "MNT",
        MO: "MOP",
        MP: "USD",
        MQ: "EUR",
        MR: "MRO",
        MS: "XCD",
        MT: "EUR",
        MU: "MUR",
        MV: "MVR",
        MW: "MWK",
        MX: "MXN",
        MY: "MYR",
        MZ: "MZN",
        NA: "NAD",
        NC: "XPF",
        NE: "XOF",
        NF: "AUD",
        NG: "NGN",
        NI: "NIO",
        NL: "EUR",
        NO: "NOK",
        NP: "NPR",
        NR: "AUD",
        NU: "NZD",
        NZ: "NZD",
        OM: "OMR",
        PA: "PAB",
        PE: "PEN",
        PF: "XPF",
        PG: "PGK",
        PH: "PHP",
        PK: "PKR",
        PL: "PLN",
        PM: "EUR",
        PN: "NZD",
        PR: "USD",
        PS: "ILS",
        PT: "EUR",
        PW: "USD",
        PY: "PYG",
        QA: "QAR",
        RE: "EUR",
        RO: "RON",
        RS: "RSD",
        RU: "RUB",
        RW: "RWF",
        SA: "SAR",
        SB: "SBD",
        SC: "SCR",
        SD: "SDG",
        SE: "SEK",
        SG: "SGD",
        SH: "SHP",
        SI: "EUR",
        SJ: "NOK",
        SK: "EUR",
        SL: "SLL",
        SM: "EUR",
        SN: "XOF",
        SO: "SOS",
        SR: "SRD",
        SS: "SSP",
        ST: "STD",
        SV: "SVC",
        SX: "ANG",
        SY: "SYP",
        SZ: "SZL",
        TC: "USD",
        TD: "XAF",
        TF: "EUR",
        TG: "XOF",
        TH: "THB",
        TJ: "TJS",
        TK: "NZD",
        TL: "USD",
        TM: "TMT",
        TN: "TND",
        TO: "TOP",
        TR: "TRY",
        TT: "TTD",
        TV: "AUD",
        TW: "TWD",
        TZ: "TZS",
        UA: "UAH",
        UG: "UGX",
        UM: "USD",
        US: "USD",
        UY: "UYU",
        UZ: "UZS",
        VA: "EUR",
        VC: "XCD",
        VE: "VEF",
        VG: "USD",
        VI: "USD",
        VN: "VND",
        VU: "VUV",
        WF: "XPF",
        WS: "WST",
        YE: "YER",
        YT: "EUR",
        ZA: "ZAR",
        ZM: "ZMW",
        ZW: "ZWL",
      };
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      let a = (e) => e.toLowerCase().startsWith("zh"),
        l = (e, t, r = {}, l = "en-US") => {
          let c = (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? o(Object(r), !0).forEach(function (t) {
                      (0, n.Z)(e, t, r[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : o(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t)
                      );
                    });
              }
              return e;
            })(
              {
                style: "currency",
                currency:
                  t ??
                  (function (e) {
                    let { groups: t } = e.match(
                        /^.*?[_-](?<code>.*?)\W|^(?<code2>.*)$/
                      ),
                      r = t.code ? t.code : t.code2;
                    return i[r] ?? "USD";
                  })(l),
                currencyDisplay: a(l) ? "symbol" : "narrowSymbol",
              },
              r
            ),
            s = new Intl.NumberFormat(l, c);
          return s.format(e || 0);
        };
    },
    34738: function (e, t, r) {
      r.d(t, {
        H: function () {
          return n;
        },
      });
      class n {
        constructor(e, t) {
          (this.name = e), (this.fragment = t);
        }
      }
    },
    96109: function (e, t, r) {
      r.d(t, {
        _i: function () {
          return m;
        },
        YM: function () {
          return b;
        },
      });
      var n = r(76145),
        i = r(27954);
      r(67382);
      var o = r(95e3),
        a = r(14812);
      let { RUNTIME_GRAPHQL_URL: l, SERVER_GRAPHQL_URL: c = l } = o.ZP;
      var s = r(51974);
      let u = ["fetchOptions"];
      function p(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      let { RUNTIME_GRAPHQL_TOKEN: d, RUNTIME_GRAPHQL_TIMEOUT: f = 1e4 } = o.ZP,
        b = {
          shouldRetryOnError: !1,
          revalidateOnFocus: !1,
        },
        m = ([e, t]) => {
          let { fetchOptions: r } = t,
            o = (0, i.Z)(t, u),
            { query: l, variables: b } = (0, s.mB)(e, o);
          return (
            "object" == typeof e && (e = l.loc && l.loc.source.body),
            (0, a.he)(
              `${c}/graphql`,
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? p(Object(r), !0).forEach(function (t) {
                        (0, n.Z)(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(r)
                      )
                    : p(Object(r)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(r, t)
                        );
                      });
                }
                return e;
              })(
                {
                  headers: {
                    Authorization: d,
                  },
                  method: "POST",
                  body: JSON.stringify({
                    query: e,
                    variables: b,
                  }),
                  timeout: f,
                },
                r
              )
            )
              .then((e) => e.json())
              .then((e) => e)
          );
        };
    },
    51974: function (e, t, r) {
      r.d(t, {
        ls: function () {
          return d;
        },
        mB: function () {
          return f;
        },
      });
      var n = r(27954),
        i = r(76145),
        o = r(38817),
        a = r(92169);
      let l = ["fetcher"];
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                (0, i.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let u = new o.Z("GraphQL helper"),
        p = (e, t) => {
          let {
            variables: { offset: r, pageSize: n },
          } = t;
          return e && e.length && e.length === n
            ? ((t.variables = s(
                s({}, t.variables),
                {},
                {
                  offset: r + n,
                }
              )),
              t)
            : null;
        },
        d = async (e, t = "result", r = []) => {
          let { fetcher: i } = e,
            o = (0, n.Z)(e, l),
            { data: c } = await i.query(o),
            f = (0, a.U)(c, t, []);
          u.log(`Received result (length=${f?.length})`),
            (r = r.concat(f || [])),
            u.log(`Overall result (length=${r?.length})`);
          let b = p(f, o);
          return b
            ? d(
                s(
                  {
                    fetcher: i,
                  },
                  b
                ),
                t,
                r
              )
            : r;
        };
      function f(e, t, r) {
        return "Document" === e.kind
          ? {
              query: e,
              variables: t,
              options: r,
            }
          : {
              query: e.query,
              variables: s(s({}, e.variables), t),
              options: s(s({}, e.options), r),
            };
      }
    },
    97817: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return m;
        },
      });
      var n = r(4575),
        i = r(76145),
        o = r(2929),
        a = r(81463),
        l = r(11129);
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                (0, i.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let u = (0, o.Z)("span", {
          target: "eagam8p1",
        })(
          (0, a.ZP)(
            "title-design-element-after",
            s(
              s(
                s(
                  s(
                    s(s(s(s(s(s({}, l.Oq), l.Cg), l.$_), l.bK), l.FK), l.Dh),
                    l.jf
                  ),
                  l.cp
                ),
                l.WD
              ),
              l.oQ
            )
          ),
          ""
        ),
        p = (0, o.Z)("span", {
          target: "eagam8p0",
        })(
          (0, a.ZP)(
            "title-design-element-before",
            s(
              s(
                s(
                  s(
                    s(s(s(s(s(s({}, l.Oq), l.Cg), l.$_), l.bK), l.FK), l.Dh),
                    l.jf
                  ),
                  l.cp
                ),
                l.WD
              ),
              l.oQ
            )
          ),
          ""
        );
      var d = r(10043),
        f = r(50581);
      function b({ children: e, sxProps: t, themeOptions: r }) {
        return (0, d.tZ)(
          f.Fragment,
          null,
          (0, d.tZ)(
            p,
            (0, n.Z)(
              {
                "aria-hidden": "true",
                sx: t.TitleDesignElementBefore,
              },
              r.TitleDesignElementBefore
            )
          ),
          e,
          (0, d.tZ)(
            u,
            (0, n.Z)(
              {
                "aria-hidden": "true",
                sx: t.TitleDesignElementAfter,
              },
              r.TitleDesignElementAfter
            )
          )
        );
      }
      b.defaultProps = {
        sxProps: {
          TitleDesignElementBefore: {},
          TitleDesignElementAfter: {},
        },
        themeOptions: {
          TitleDesignElementBefore: {},
          TitleDesignElementAfter: {},
        },
      };
      var m = b;
    },
  },
]);
