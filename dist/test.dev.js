'use strict';

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        You are loading Turbo from a <script> element inside the <body> element. This is probably not what you meant to do!\n\n        Load your application\xE2\u20AC\u2122s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\n        For more information, see: https://turbo.hotwired.dev/handbook/building#working-with-script-elements\n\n        \xE2\u20AC\u201D\xE2\u20AC\u201D\n        Suppress this warning by adding a \"data-turbo-suppress-warning\" attribute to: %s\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      .turbo-progress-bar {\n        position: fixed;\n        display: block;\n        top: 0;\n        left: 0;\n        height: 3px;\n        background: #0076ff;\n        z-index: 2147483647;\n        transition:\n          width ", "ms ease-out,\n          opacity ", "ms ", "ms ease-in;\n        transform: translate3d(0, 0, 0);\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(globalThis.webpackChunk = globalThis.webpackChunk || []).push([['vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js'], {
  7332: function _(e, t, s) {
    s.d(t, {
      H5: function H5() {
        return PageRenderer;
      },
      Uz: function Uz() {
        return D;
      },
      YR: function YR() {
        return O;
      },
      dK: function dK() {
        return o;
      },
      gM: function gM() {
        return q;
      },
      session: function session() {
        return M;
      }
    }), function () {
      if (void 0 === window.Reflect || void 0 === window.customElements || window.customElements.polyfillWrapFlushCallback) return;
      var e = HTMLElement;
      window.HTMLElement = {
        HTMLElement: function HTMLElement() {
          return Reflect.construct(e, [], this.constructor);
        }
      }.HTMLElement, HTMLElement.prototype = e.prototype, HTMLElement.prototype.constructor = HTMLElement, Object.setPrototypeOf(HTMLElement, e);
    }(), function (e) {
      'function' != typeof e.requestSubmit && (e.requestSubmit = function (e) {
        var s;
        e ? ((s = e) instanceof HTMLElement || t(TypeError, "parameter 1 is not of type 'HTMLElement'"), 'submit' == s.type || t(TypeError, 'The specified element is not a submit button'), s.form == this || t(DOMException, 'The specified element is not owned by this form element', 'NotFoundError'), e.click()) : ((e = document.createElement('input')).type = 'submit', e.hidden = !0, this.appendChild(e), e.click(), this.removeChild(e));
      });

      function t(e, t, s) {
        throw new e("Failed to execute 'requestSubmit' on 'HTMLFormElement': " + t + '.', s);
      }
    }(HTMLFormElement.prototype);
    var i = new WeakMap();

    function r(e) {
      var t = function (e) {
        var t = e instanceof Element ? e : e instanceof Node ? e.parentElement : null,
            s = t ? t.closest('input, button') : null;
        return (null == s ? void 0 : s.type) == 'submit' ? s : null;
      }(e.target);

      t && t.form && i.set(t.form, t);
    }

    !function () {
      var e;

      if (!('submitter' in Event.prototype)) {
        if ('SubmitEvent' in window && /Apple Computer/.test(navigator.vendor)) e = window.SubmitEvent.prototype;else {
          if ('SubmitEvent' in window) return;
          e = window.Event.prototype;
        }
        addEventListener('click', r, !0), Object.defineProperty(e, 'submitter', {
          get: function get() {
            if ('submit' == this.type && this.target instanceof HTMLFormElement) return i.get(this.target);
          }
        });
      }
    }();
    var n = null;

    function o(e) {
      n = e;
    }

    var a = null !== (x = null === (W = globalThis.trustedTypes) || void 0 === W ? void 0 : W.emptyHTML) && void 0 !== x ? x : '';
    !function (e) {
      e.eager = 'eager', e.lazy = 'lazy';
    }(U || (U = {}));

    var FrameElement =
    /*#__PURE__*/
    function (_HTMLElement) {
      _inherits(FrameElement, _HTMLElement);

      function FrameElement() {
        var _this;

        _classCallCheck(this, FrameElement);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(FrameElement).call(this)), _this.loaded = Promise.resolve(), _this.previousSrc = null, _this.delegate = new FrameElement.delegateConstructor(_assertThisInitialized(_this));
        return _this;
      }

      _createClass(FrameElement, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          this.delegate.connect();
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          this.delegate.disconnect();
        }
      }, {
        key: "reload",
        value: function reload() {
          return this.delegate.sourceURLReloaded();
        }
      }, {
        key: "attributeChangedCallback",
        value: function attributeChangedCallback(e) {
          'loading' == e ? this.delegate.loadingStyleChanged() : 'complete' == e ? this.delegate.completeChanged() : 'src' == e ? this.delegate.sourceURLChanged() : this.delegate.disabledChanged();
        }
      }, {
        key: "src",
        get: function get() {
          return this.getAttribute('src');
        },
        set: function set(e) {
          if (e) {
            if (n) {
              var _t = n.createScriptURL(e);

              this.setAttribute('src', _t);
            } else this.setAttribute('src', e);
          } else this.removeAttribute('src');
        }
      }, {
        key: "loading",
        get: function get() {
          return 'lazy' === (this.getAttribute('loading') || '').toLowerCase() ? U.lazy : U.eager;
        },
        set: function set(e) {
          e ? this.setAttribute('loading', e) : this.removeAttribute('loading');
        }
      }, {
        key: "disabled",
        get: function get() {
          return this.hasAttribute('disabled');
        },
        set: function set(e) {
          e ? this.setAttribute('disabled', '') : this.removeAttribute('disabled');
        }
      }, {
        key: "autoscroll",
        get: function get() {
          return this.hasAttribute('autoscroll');
        },
        set: function set(e) {
          e ? this.setAttribute('autoscroll', '') : this.removeAttribute('autoscroll');
        }
      }, {
        key: "complete",
        get: function get() {
          return !this.delegate.isLoading;
        }
      }, {
        key: "isActive",
        get: function get() {
          return this.ownerDocument === document && !this.isPreview;
        }
      }, {
        key: "isPreview",
        get: function get() {
          var e, t;
          return null === (t = null === (e = this.ownerDocument) || void 0 === e ? void 0 : e.documentElement) || void 0 === t ? void 0 : t.hasAttribute('data-turbo-preview');
        }
      }], [{
        key: "observedAttributes",
        get: function get() {
          return ['disabled', 'complete', 'loading', 'src'];
        }
      }]);

      return FrameElement;
    }(_wrapNativeSuper(HTMLElement));

    function l(e) {
      return new URL(e.toString(), document.baseURI);
    }

    function h(e) {
      var t;
      return e.hash ? e.hash.slice(1) : (t = e.href.match(/#(.*)$/)) ? t[1] : void 0;
    }

    function c(e, t) {
      return l((null == t ? void 0 : t.getAttribute('formaction')) || e.getAttribute('action') || e.action);
    }

    function d(e) {
      var t = h(e);
      return null != t ? e.href.slice(0, -(t.length + 1)) : e.href;
    }

    var FetchResponse =
    /*#__PURE__*/
    function () {
      function FetchResponse(e) {
        _classCallCheck(this, FetchResponse);

        this.response = e;
      }

      _createClass(FetchResponse, [{
        key: "header",
        value: function header(e) {
          return this.response.headers.get(e);
        }
      }, {
        key: "succeeded",
        get: function get() {
          return this.response.ok;
        }
      }, {
        key: "failed",
        get: function get() {
          return !this.succeeded;
        }
      }, {
        key: "clientError",
        get: function get() {
          return this.statusCode >= 400 && this.statusCode <= 499;
        }
      }, {
        key: "serverError",
        get: function get() {
          return this.statusCode >= 500 && this.statusCode <= 599;
        }
      }, {
        key: "redirected",
        get: function get() {
          return this.response.redirected;
        }
      }, {
        key: "location",
        get: function get() {
          return l(this.response.url);
        }
      }, {
        key: "isHTML",
        get: function get() {
          return this.contentType && this.contentType.match(/^(?:text\/([^\s;,]+\b)?html|application\/xhtml\+xml)\b/);
        }
      }, {
        key: "statusCode",
        get: function get() {
          return this.response.status;
        }
      }, {
        key: "contentType",
        get: function get() {
          return this.header('Content-Type');
        }
      }, {
        key: "responseText",
        get: function get() {
          return this.response.clone().text();
        }
      }, {
        key: "responseHTML",
        get: function get() {
          return this.isHTML ? this.response.clone().text() : Promise.resolve(void 0);
        }
      }]);

      return FetchResponse;
    }();

    function u(e) {
      return 'advance' == e || 'replace' == e || 'restore' == e;
    }

    function m(e) {
      if ('false' == e.getAttribute('data-turbo-eval')) return e;
      {
        var _t2 = document.createElement('script'),
            _s = L('csp-nonce');

        return _s && (_t2.nonce = _s), null !== e.textContent && (null !== n ? _t2.textContent = n.createScript(e.textContent) : _t2.textContent = e.textContent), _t2.async = !1, function (e, t) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = t.attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _step$value = _step.value,
                  _s2 = _step$value.name,
                  _i = _step$value.value;

              if ('src' === _s2 && null !== n) {
                var _t3 = n.createScriptURL(_i);

                e.setAttribute(_s2, _t3);
              } else e.setAttribute(_s2, _i);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }(_t2, e), _t2;
      }
    }

    function p(e) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          t = _ref.target,
          s = _ref.cancelable,
          i = _ref.detail;

      var r = new CustomEvent(e, {
        cancelable: s,
        bubbles: !0,
        detail: i
      });
      return t && t.isConnected ? t.dispatchEvent(r) : document.documentElement.dispatchEvent(r), r;
    }

    function g() {
      return new Promise(function (e) {
        return requestAnimationFrame(function () {
          return e();
        });
      });
    }

    function f() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return new DOMParser().parseFromString(e, 'text/html');
    }

    function v(e) {
      for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        t[_key - 1] = arguments[_key];
      }

      var s = e.reduce(function (e, s, i) {
        return e + s + (void 0 == t[i] ? '' : t[i]);
      }, '').replace(/^\n/, '').split('\n'),
          i = s[0].match(/^\s+/),
          r = i ? i[0].length : 0;
      return s.map(function (e) {
        return e.slice(r);
      }).join('\n');
    }

    function b() {
      return Array.from({
        length: 36
      }).map(function (e, t) {
        return 8 == t || 13 == t || 18 == t || 23 == t ? '-' : 14 == t ? '4' : 19 == t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
      }).join('');
    }

    function S(e) {
      for (var _len2 = arguments.length, t = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        t[_key2 - 1] = arguments[_key2];
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = t.map(function (t) {
          return null == t ? void 0 : t.getAttribute(e);
        })[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _s3 = _step2.value;
          if ('string' == typeof _s3) return _s3;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return null;
    }

    function w() {
      for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        e[_key3] = arguments[_key3];
      }

      for (var _i2 = 0, _e = e; _i2 < _e.length; _i2++) {
        var _t4 = _e[_i2];
        'turbo-frame' == _t4.localName && _t4.setAttribute('busy', ''), _t4.setAttribute('aria-busy', 'true');
      }
    }

    function E() {
      for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        e[_key4] = arguments[_key4];
      }

      for (var _i3 = 0, _e2 = e; _i3 < _e2.length; _i3++) {
        var _t5 = _e2[_i3];
        'turbo-frame' == _t5.localName && _t5.removeAttribute('busy'), _t5.removeAttribute('aria-busy');
      }
    }

    function y(e) {
      switch (e) {
        case 'replace':
          return history.replaceState;

        case 'advance':
        case 'restore':
          return history.pushState;
      }
    }

    function R(e) {
      return document.querySelector("meta[name=\"".concat(e, "\"]"));
    }

    function L(e) {
      var t = R(e);
      return t && t.content;
    }

    !function (e) {
      e[e.get = 0] = 'get', e[e.post = 1] = 'post', e[e.put = 2] = 'put', e[e.patch = 3] = 'patch', e[e["delete"] = 4] = 'delete';
    }(j || (j = {}));

    var FetchRequest =
    /*#__PURE__*/
    function () {
      function FetchRequest(e, t, s) {
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new URLSearchParams();
        var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

        _classCallCheck(this, FetchRequest);

        this.abortController = new AbortController(), this.resolveRequestPromise = function (e) {}, this.delegate = e, this.method = t, this.headers = this.defaultHeaders, this.body = i, this.url = s, this.target = r;
      }

      _createClass(FetchRequest, [{
        key: "cancel",
        value: function cancel() {
          this.abortController.abort();
        }
      }, {
        key: "perform",
        value: function perform() {
          var e, t, s, _e3;

          return regeneratorRuntime.async(function perform$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  s = this.fetchOptions;
                  null === (t = (e = this.delegate).prepareHeadersForRequest) || void 0 === t || t.call(e, this.headers, this);
                  _context.next = 4;
                  return regeneratorRuntime.awrap(this.allowRequestToBeIntercepted(s));

                case 4:
                  _context.prev = 4;
                  this.delegate.requestStarted(this);
                  _context.next = 8;
                  return regeneratorRuntime.awrap(fetch(this.url.href, s));

                case 8:
                  _e3 = _context.sent;
                  _context.next = 11;
                  return regeneratorRuntime.awrap(this.receive(_e3));

                case 11:
                  return _context.abrupt("return", _context.sent);

                case 14:
                  _context.prev = 14;
                  _context.t0 = _context["catch"](4);

                  if (!('AbortError' !== _context.t0.name)) {
                    _context.next = 18;
                    break;
                  }

                  throw this.willDelegateErrorHandling(_context.t0) && this.delegate.requestErrored(this, _context.t0), _context.t0;

                case 18:
                  _context.prev = 18;
                  this.delegate.requestFinished(this);
                  return _context.finish(18);

                case 21:
                case "end":
                  return _context.stop();
              }
            }
          }, null, this, [[4, 14, 18, 21]]);
        }
      }, {
        key: "receive",
        value: function receive(e) {
          var t;
          return regeneratorRuntime.async(function receive$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  t = new FetchResponse(e);
                  return _context2.abrupt("return", (p('turbo:before-fetch-response', {
                    cancelable: !0,
                    detail: {
                      fetchResponse: t
                    },
                    target: this.target
                  }).defaultPrevented ? this.delegate.requestPreventedHandlingResponse(this, t) : t.succeeded ? this.delegate.requestSucceededWithResponse(this, t) : this.delegate.requestFailedWithResponse(this, t), t));

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "acceptResponseType",
        value: function acceptResponseType(e) {
          this.headers.Accept = [e, this.headers.Accept].join(', ');
        }
      }, {
        key: "allowRequestToBeIntercepted",
        value: function allowRequestToBeIntercepted(e) {
          var _this2 = this;

          var t;
          return regeneratorRuntime.async(function allowRequestToBeIntercepted$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  t = new Promise(function (e) {
                    return _this2.resolveRequestPromise = e;
                  });
                  _context3.t0 = p('turbo:before-fetch-request', {
                    cancelable: !0,
                    detail: {
                      fetchOptions: e,
                      url: this.url,
                      resume: this.resolveRequestPromise
                    },
                    target: this.target
                  }).defaultPrevented;

                  if (!_context3.t0) {
                    _context3.next = 5;
                    break;
                  }

                  _context3.next = 5;
                  return regeneratorRuntime.awrap(t);

                case 5:
                case "end":
                  return _context3.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "willDelegateErrorHandling",
        value: function willDelegateErrorHandling(e) {
          return !p('turbo:fetch-request-error', {
            target: this.target,
            cancelable: !0,
            detail: {
              request: this,
              error: e
            }
          }).defaultPrevented;
        }
      }, {
        key: "location",
        get: function get() {
          return this.url;
        }
      }, {
        key: "params",
        get: function get() {
          return this.url.searchParams;
        }
      }, {
        key: "entries",
        get: function get() {
          return this.body ? Array.from(this.body.entries()) : [];
        }
      }, {
        key: "fetchOptions",
        get: function get() {
          var e;
          return {
            method: j[this.method].toUpperCase(),
            credentials: 'same-origin',
            headers: this.headers,
            redirect: 'follow',
            body: this.isIdempotent ? null : this.body,
            signal: this.abortSignal,
            referrer: null === (e = this.delegate.referrer) || void 0 === e ? void 0 : e.href
          };
        }
      }, {
        key: "defaultHeaders",
        get: function get() {
          return {
            Accept: 'text/html, application/xhtml+xml'
          };
        }
      }, {
        key: "isIdempotent",
        get: function get() {
          return this.method == j.get;
        }
      }, {
        key: "abortSignal",
        get: function get() {
          return this.abortController.signal;
        }
      }]);

      return FetchRequest;
    }();

    var AppearanceObserver =
    /*#__PURE__*/
    function () {
      function AppearanceObserver(e, t) {
        var _this3 = this;

        _classCallCheck(this, AppearanceObserver);

        this.started = !1, this.intersect = function (e) {
          var t = e.slice(-1)[0];
          (null == t ? void 0 : t.isIntersecting) && _this3.delegate.elementAppearedInViewport(_this3.element);
        }, this.delegate = e, this.element = t, this.intersectionObserver = new IntersectionObserver(this.intersect);
      }

      _createClass(AppearanceObserver, [{
        key: "start",
        value: function start() {
          this.started || (this.started = !0, this.intersectionObserver.observe(this.element));
        }
      }, {
        key: "stop",
        value: function stop() {
          this.started && (this.started = !1, this.intersectionObserver.unobserve(this.element));
        }
      }]);

      return AppearanceObserver;
    }();

    var StreamMessage =
    /*#__PURE__*/
    function () {
      function StreamMessage(e) {
        _classCallCheck(this, StreamMessage);

        this.fragment = function (e) {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = e.querySelectorAll('turbo-stream')[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var t = _step3.value;

              var _e4 = document.importNode(t, !0);

              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                for (var _iterator4 = _e4.templateElement.content.querySelectorAll('script')[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var _t6 = _step4.value;
                  'application/json' !== _t6.type && _t6.replaceWith(m(_t6));
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                    _iterator4["return"]();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }

              t.replaceWith(_e4);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                _iterator3["return"]();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          return e;
        }(e);
      }

      _createClass(StreamMessage, null, [{
        key: "wrap",
        value: function wrap(e) {
          return 'string' == typeof e ? new this(function (e) {
            var t = document.createElement('template');
            return t.innerHTML = e, t.content;
          }(e)) : e;
        }
      }]);

      return StreamMessage;
    }();

    StreamMessage.contentType = 'text/vnd.turbo-stream.html', function (e) {
      e[e.initialized = 0] = 'initialized', e[e.requesting = 1] = 'requesting', e[e.waiting = 2] = 'waiting', e[e.receiving = 3] = 'receiving', e[e.stopping = 4] = 'stopping', e[e.stopped = 5] = 'stopped';
    }(_ || (_ = {})), function (e) {
      e.urlEncoded = 'application/x-www-form-urlencoded', e.multipart = 'multipart/form-data', e.plain = 'text/plain';
    }($ || ($ = {}));

    var FormSubmission =
    /*#__PURE__*/
    function () {
      function FormSubmission(e, t, s) {
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;

        _classCallCheck(this, FormSubmission);

        this.state = _.initialized, this.delegate = e, this.formElement = t, this.submitter = s, this.formData = function (e, t) {
          var s = new FormData(e),
              i = null == t ? void 0 : t.getAttribute('name'),
              r = null == t ? void 0 : t.getAttribute('value');
          return i && s.append(i, r || ''), s;
        }(t, s), this.location = l(this.action), this.method == j.get && function (e, t) {
          var s = new URLSearchParams();
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = t[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var _step5$value = _slicedToArray(_step5.value, 2),
                  _e5 = _step5$value[0],
                  _i4 = _step5$value[1];

              _i4 instanceof File || s.append(_e5, _i4);
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                _iterator5["return"]();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          e.search = s.toString();
        }(this.location, _toConsumableArray(this.body.entries())), this.fetchRequest = new FetchRequest(this, this.method, this.location, this.body, this.formElement), this.mustRedirect = i;
      }

      _createClass(FormSubmission, [{
        key: "start",
        value: function start() {
          var _ref2, e, t, s;

          return regeneratorRuntime.async(function start$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _ref2 = _, e = _ref2.initialized, t = _ref2.requesting, s = S('data-turbo-confirm', this.submitter, this.formElement);
                  _context4.t1 = 'string' != typeof s;

                  if (_context4.t1) {
                    _context4.next = 6;
                    break;
                  }

                  _context4.next = 5;
                  return regeneratorRuntime.awrap(FormSubmission.confirmMethod(s, this.formElement, this.submitter));

                case 5:
                  _context4.t1 = _context4.sent;

                case 6:
                  _context4.t0 = _context4.t1;

                  if (!_context4.t0) {
                    _context4.next = 9;
                    break;
                  }

                  _context4.t0 = this.state == e;

                case 9:
                  if (!_context4.t0) {
                    _context4.next = 11;
                    break;
                  }

                  return _context4.abrupt("return", (this.state = t, this.fetchRequest.perform()));

                case 11:
                case "end":
                  return _context4.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "stop",
        value: function stop() {
          var _ref3 = _,
              e = _ref3.stopping,
              t = _ref3.stopped;
          if (this.state != e && this.state != t) return this.state = e, this.fetchRequest.cancel(), !0;
        }
      }, {
        key: "prepareHeadersForRequest",
        value: function prepareHeadersForRequest(e, t) {
          if (!t.isIdempotent) {
            var _t7 = function (e) {
              if (null != e) {
                var _t8 = (document.cookie ? document.cookie.split('; ') : []).find(function (t) {
                  return t.startsWith(e);
                });

                if (_t8) {
                  var _e6 = _t8.split('=').slice(1).join('=');

                  return _e6 ? decodeURIComponent(_e6) : void 0;
                }
              }
            }(L('csrf-param')) || L('csrf-token');

            _t7 && (e['X-CSRF-Token'] = _t7);
          }

          this.requestAcceptsTurboStreamResponse(t) && t.acceptResponseType(StreamMessage.contentType);
        }
      }, {
        key: "requestStarted",
        value: function requestStarted(e) {
          var t;
          this.state = _.waiting, null === (t = this.submitter) || void 0 === t || t.setAttribute('disabled', ''), p('turbo:submit-start', {
            target: this.formElement,
            detail: {
              formSubmission: this
            }
          }), this.delegate.formSubmissionStarted(this);
        }
      }, {
        key: "requestPreventedHandlingResponse",
        value: function requestPreventedHandlingResponse(e, t) {
          this.result = {
            success: t.succeeded,
            fetchResponse: t
          };
        }
      }, {
        key: "requestSucceededWithResponse",
        value: function requestSucceededWithResponse(e, t) {
          if (t.clientError || t.serverError) this.delegate.formSubmissionFailedWithResponse(this, t);else {
            var s;

            if (this.requestMustRedirect(e) && 200 == (s = t).statusCode && !s.redirected) {
              var _e7 = Error('Form responses must redirect to another location');

              this.delegate.formSubmissionErrored(this, _e7);
            } else this.state = _.receiving, this.result = {
              success: !0,
              fetchResponse: t
            }, this.delegate.formSubmissionSucceededWithResponse(this, t);
          }
        }
      }, {
        key: "requestFailedWithResponse",
        value: function requestFailedWithResponse(e, t) {
          this.result = {
            success: !1,
            fetchResponse: t
          }, this.delegate.formSubmissionFailedWithResponse(this, t);
        }
      }, {
        key: "requestErrored",
        value: function requestErrored(e, t) {
          this.result = {
            success: !1,
            error: t
          }, this.delegate.formSubmissionErrored(this, t);
        }
      }, {
        key: "requestFinished",
        value: function requestFinished(e) {
          var t;
          this.state = _.stopped, null === (t = this.submitter) || void 0 === t || t.removeAttribute('disabled'), p('turbo:submit-end', {
            target: this.formElement,
            detail: Object.assign({
              formSubmission: this
            }, this.result)
          }), this.delegate.formSubmissionFinished(this);
        }
      }, {
        key: "requestMustRedirect",
        value: function requestMustRedirect(e) {
          return !e.isIdempotent && this.mustRedirect;
        }
      }, {
        key: "requestAcceptsTurboStreamResponse",
        value: function requestAcceptsTurboStreamResponse(e) {
          return !e.isIdempotent || function (e) {
            for (var _len5 = arguments.length, t = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
              t[_key5 - 1] = arguments[_key5];
            }

            return t.some(function (t) {
              return t && t.hasAttribute(e);
            });
          }('data-turbo-stream', this.submitter, this.formElement);
        }
      }, {
        key: "method",
        get: function get() {
          var e;
          return function (e) {
            switch (e.toLowerCase()) {
              case 'get':
                return j.get;

              case 'post':
                return j.post;

              case 'put':
                return j.put;

              case 'patch':
                return j.patch;

              case 'delete':
                return j["delete"];
            }
          }(((null === (e = this.submitter) || void 0 === e ? void 0 : e.getAttribute('formmethod')) || this.formElement.getAttribute('method') || '').toLowerCase()) || j.get;
        }
      }, {
        key: "action",
        get: function get() {
          var e;
          var t = 'string' == typeof this.formElement.action ? this.formElement.action : null;
          return (null === (e = this.submitter) || void 0 === e ? void 0 : e.hasAttribute('formaction')) ? this.submitter.getAttribute('formaction') || '' : this.formElement.getAttribute('action') || t || '';
        }
      }, {
        key: "body",
        get: function get() {
          return this.enctype == $.urlEncoded || this.method == j.get ? new URLSearchParams(this.stringFormData) : this.formData;
        }
      }, {
        key: "enctype",
        get: function get() {
          var e;
          return function (e) {
            switch (e.toLowerCase()) {
              case $.multipart:
                return $.multipart;

              case $.plain:
                return $.plain;

              default:
                return $.urlEncoded;
            }
          }((null === (e = this.submitter) || void 0 === e ? void 0 : e.getAttribute('formenctype')) || this.formElement.enctype);
        }
      }, {
        key: "isIdempotent",
        get: function get() {
          return this.fetchRequest.isIdempotent;
        }
      }, {
        key: "stringFormData",
        get: function get() {
          return _toConsumableArray(this.formData).reduce(function (e, _ref4) {
            var _ref5 = _slicedToArray(_ref4, 2),
                t = _ref5[0],
                s = _ref5[1];

            return e.concat('string' == typeof s ? [[t, s]] : []);
          }, []);
        }
      }], [{
        key: "confirmMethod",
        value: function confirmMethod(e, t, s) {
          return Promise.resolve(confirm(e));
        }
      }]);

      return FormSubmission;
    }();

    var Snapshot =
    /*#__PURE__*/
    function () {
      function Snapshot(e) {
        _classCallCheck(this, Snapshot);

        this.element = e;
      }

      _createClass(Snapshot, [{
        key: "hasAnchor",
        value: function hasAnchor(e) {
          return null != this.getElementForAnchor(e);
        }
      }, {
        key: "getElementForAnchor",
        value: function getElementForAnchor(e) {
          return e ? this.element.querySelector("[id='".concat(e, "'], a[name='").concat(e, "']")) : null;
        }
      }, {
        key: "getPermanentElementById",
        value: function getPermanentElementById(e) {
          return C(this.element, e);
        }
      }, {
        key: "getPermanentElementMapForSnapshot",
        value: function getPermanentElementMapForSnapshot(e) {
          var t = {};
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = this.permanentElements[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var _s4 = _step6.value;

              var _i5 = _s4.id,
                  _r = e.getPermanentElementById(_i5);

              _r && (t[_i5] = [_s4, _r]);
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
                _iterator6["return"]();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }

          return t;
        }
      }, {
        key: "activeElement",
        get: function get() {
          return this.element.ownerDocument.activeElement;
        }
      }, {
        key: "children",
        get: function get() {
          return _toConsumableArray(this.element.children);
        }
      }, {
        key: "isConnected",
        get: function get() {
          return this.element.isConnected;
        }
      }, {
        key: "firstAutofocusableElement",
        get: function get() {
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = this.element.querySelectorAll('[autofocus]')[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var e = _step7.value;
              if (null == e.closest('[inert], :disabled, [hidden], details:not([open]), dialog:not([open])')) return e;
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
                _iterator7["return"]();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }

          return null;
        }
      }, {
        key: "permanentElements",
        get: function get() {
          return A(this.element);
        }
      }]);

      return Snapshot;
    }();

    function C(e, t) {
      return e.querySelector("#".concat(t, "[data-turbo-permanent]"));
    }

    function A(e) {
      return e.querySelectorAll('[id][data-turbo-permanent]');
    }

    var FormSubmitObserver =
    /*#__PURE__*/
    function () {
      function FormSubmitObserver(e, t) {
        var _this4 = this;

        _classCallCheck(this, FormSubmitObserver);

        this.started = !1, this.submitCaptured = function () {
          _this4.eventTarget.removeEventListener('submit', _this4.submitBubbled, !1), _this4.eventTarget.addEventListener('submit', _this4.submitBubbled, !1);
        }, this.submitBubbled = function (e) {
          if (!e.defaultPrevented) {
            var _t9 = e.target instanceof HTMLFormElement ? e.target : void 0,
                _s5 = e.submitter || void 0;

            _t9 && function (e, t) {
              return 'dialog' != ((null == t ? void 0 : t.getAttribute('formmethod')) || e.getAttribute('method'));
            }(_t9, _s5) && function (e, t) {
              var s = (null == t ? void 0 : t.getAttribute('formtarget')) || e.target;
              var _iteratorNormalCompletion8 = true;
              var _didIteratorError8 = false;
              var _iteratorError8 = undefined;

              try {
                for (var _iterator8 = document.getElementsByName(s)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                  var _e8 = _step8.value;
                  if (_e8 instanceof HTMLIFrameElement) return !1;
                }
              } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
                    _iterator8["return"]();
                  }
                } finally {
                  if (_didIteratorError8) {
                    throw _iteratorError8;
                  }
                }
              }

              return !0;
            }(_t9, _s5) && _this4.delegate.willSubmitForm(_t9, _s5) && (e.preventDefault(), e.stopImmediatePropagation(), _this4.delegate.formSubmitted(_t9, _s5));
          }
        }, this.delegate = e, this.eventTarget = t;
      }

      _createClass(FormSubmitObserver, [{
        key: "start",
        value: function start() {
          this.started || (this.eventTarget.addEventListener('submit', this.submitCaptured, !0), this.started = !0);
        }
      }, {
        key: "stop",
        value: function stop() {
          this.started && (this.eventTarget.removeEventListener('submit', this.submitCaptured, !0), this.started = !1);
        }
      }]);

      return FormSubmitObserver;
    }();

    var View =
    /*#__PURE__*/
    function () {
      function View(e, t) {
        _classCallCheck(this, View);

        this.resolveRenderPromise = function (e) {}, this.resolveInterceptionPromise = function (e) {}, this.delegate = e, this.element = t;
      }

      _createClass(View, [{
        key: "scrollToAnchor",
        value: function scrollToAnchor(e) {
          var t = this.snapshot.getElementForAnchor(e);
          t ? (this.scrollToElement(t), this.focusElement(t)) : this.scrollToPosition({
            x: 0,
            y: 0
          });
        }
      }, {
        key: "scrollToAnchorFromLocation",
        value: function scrollToAnchorFromLocation(e) {
          this.scrollToAnchor(h(e));
        }
      }, {
        key: "scrollToElement",
        value: function scrollToElement(e) {
          e.scrollIntoView();
        }
      }, {
        key: "focusElement",
        value: function focusElement(e) {
          e instanceof HTMLElement && (e.hasAttribute('tabindex') ? e.focus() : (e.setAttribute('tabindex', '-1'), e.focus(), e.removeAttribute('tabindex')));
        }
      }, {
        key: "scrollToPosition",
        value: function scrollToPosition(_ref6) {
          var e = _ref6.x,
              t = _ref6.y;
          this.scrollRoot.scrollTo(e, t);
        }
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          this.scrollToPosition({
            x: 0,
            y: 0
          });
        }
      }, {
        key: "render",
        value: function render(e) {
          var _this5 = this;

          var t, s, i, _s6, _r2;

          return regeneratorRuntime.async(function render$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  t = e.isPreview, s = e.shouldRender, i = e.newSnapshot;

                  if (!s) {
                    _context5.next = 22;
                    break;
                  }

                  _context5.prev = 2;
                  this.renderPromise = new Promise(function (e) {
                    return _this5.resolveRenderPromise = e;
                  });
                  this.renderer = e;
                  _context5.next = 7;
                  return regeneratorRuntime.awrap(this.prepareToRenderSnapshot(e));

                case 7:
                  _s6 = new Promise(function (e) {
                    return _this5.resolveInterceptionPromise = e;
                  }), _r2 = {
                    resume: this.resolveInterceptionPromise,
                    render: this.renderer.renderElement
                  };
                  _context5.t0 = this.delegate.allowsImmediateRender(i, _r2);

                  if (_context5.t0) {
                    _context5.next = 12;
                    break;
                  }

                  _context5.next = 12;
                  return regeneratorRuntime.awrap(_s6);

                case 12:
                  _context5.next = 14;
                  return regeneratorRuntime.awrap(this.renderSnapshot(e));

                case 14:
                  this.delegate.viewRenderedSnapshot(i, t);
                  this.delegate.preloadOnLoadLinksForView(this.element);
                  this.finishRenderingSnapshot(e);

                case 17:
                  _context5.prev = 17;
                  delete this.renderer, this.resolveRenderPromise(void 0), delete this.renderPromise;
                  return _context5.finish(17);

                case 20:
                  _context5.next = 23;
                  break;

                case 22:
                  this.invalidate(e.reloadReason);

                case 23:
                case "end":
                  return _context5.stop();
              }
            }
          }, null, this, [[2,, 17, 20]]);
        }
      }, {
        key: "invalidate",
        value: function invalidate(e) {
          this.delegate.viewInvalidated(e);
        }
      }, {
        key: "prepareToRenderSnapshot",
        value: function prepareToRenderSnapshot(e) {
          return regeneratorRuntime.async(function prepareToRenderSnapshot$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  this.markAsPreview(e.isPreview);
                  _context6.next = 3;
                  return regeneratorRuntime.awrap(e.prepareToRender());

                case 3:
                case "end":
                  return _context6.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "markAsPreview",
        value: function markAsPreview(e) {
          e ? this.element.setAttribute('data-turbo-preview', '') : this.element.removeAttribute('data-turbo-preview');
        }
      }, {
        key: "renderSnapshot",
        value: function renderSnapshot(e) {
          return regeneratorRuntime.async(function renderSnapshot$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return regeneratorRuntime.awrap(e.render());

                case 2:
                case "end":
                  return _context7.stop();
              }
            }
          });
        }
      }, {
        key: "finishRenderingSnapshot",
        value: function finishRenderingSnapshot(e) {
          e.finishRendering();
        }
      }, {
        key: "scrollRoot",
        get: function get() {
          return window;
        }
      }]);

      return View;
    }();

    var FrameView =
    /*#__PURE__*/
    function (_View) {
      _inherits(FrameView, _View);

      function FrameView() {
        _classCallCheck(this, FrameView);

        return _possibleConstructorReturn(this, _getPrototypeOf(FrameView).apply(this, arguments));
      }

      _createClass(FrameView, [{
        key: "invalidate",
        value: function invalidate() {
          this.element.textContent = '';
        }
      }, {
        key: "snapshot",
        get: function get() {
          return new Snapshot(this.element);
        }
      }]);

      return FrameView;
    }(View);

    var LinkInterceptor =
    /*#__PURE__*/
    function () {
      function LinkInterceptor(e, t) {
        var _this6 = this;

        _classCallCheck(this, LinkInterceptor);

        this.clickBubbled = function (e) {
          _this6.respondsToEventTarget(e.target) ? _this6.clickEvent = e : delete _this6.clickEvent;
        }, this.linkClicked = function (e) {
          _this6.clickEvent && _this6.respondsToEventTarget(e.target) && e.target instanceof Element && _this6.delegate.shouldInterceptLinkClick(e.target, e.detail.url, e.detail.originalEvent) && (_this6.clickEvent.preventDefault(), e.preventDefault(), _this6.delegate.linkClickIntercepted(e.target, e.detail.url, e.detail.originalEvent)), delete _this6.clickEvent;
        }, this.willVisit = function (e) {
          delete _this6.clickEvent;
        }, this.delegate = e, this.element = t;
      }

      _createClass(LinkInterceptor, [{
        key: "start",
        value: function start() {
          this.element.addEventListener('click', this.clickBubbled), document.addEventListener('turbo:click', this.linkClicked), document.addEventListener('turbo:before-visit', this.willVisit);
        }
      }, {
        key: "stop",
        value: function stop() {
          this.element.removeEventListener('click', this.clickBubbled), document.removeEventListener('turbo:click', this.linkClicked), document.removeEventListener('turbo:before-visit', this.willVisit);
        }
      }, {
        key: "respondsToEventTarget",
        value: function respondsToEventTarget(e) {
          var t = e instanceof Element ? e : e instanceof Node ? e.parentElement : null;
          return t && t.closest('turbo-frame, html') == this.element;
        }
      }]);

      return LinkInterceptor;
    }();

    var LinkClickObserver =
    /*#__PURE__*/
    function () {
      function LinkClickObserver(e, t) {
        var _this7 = this;

        _classCallCheck(this, LinkClickObserver);

        this.started = !1, this.clickCaptured = function () {
          _this7.eventTarget.removeEventListener('click', _this7.clickBubbled, !1), _this7.eventTarget.addEventListener('click', _this7.clickBubbled, !1);
        }, this.clickBubbled = function (e) {
          if (e instanceof MouseEvent && _this7.clickEventIsSignificant(e)) {
            var _t10 = e.composedPath && e.composedPath()[0] || e.target,
                _s7 = _this7.findLinkFromClickTarget(_t10);

            if (_s7 && function (e) {
              var _iteratorNormalCompletion9 = true;
              var _didIteratorError9 = false;
              var _iteratorError9 = undefined;

              try {
                for (var _iterator9 = document.getElementsByName(e.target)[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                  var _t11 = _step9.value;
                  if (_t11 instanceof HTMLIFrameElement) return !1;
                }
              } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
                    _iterator9["return"]();
                  }
                } finally {
                  if (_didIteratorError9) {
                    throw _iteratorError9;
                  }
                }
              }

              return !0;
            }(_s7)) {
              var _t12 = _this7.getLocationForLink(_s7);

              _this7.delegate.willFollowLinkToLocation(_s7, _t12, e) && (e.preventDefault(), _this7.delegate.followedLinkToLocation(_s7, _t12));
            }
          }
        }, this.delegate = e, this.eventTarget = t;
      }

      _createClass(LinkClickObserver, [{
        key: "start",
        value: function start() {
          this.started || (this.eventTarget.addEventListener('click', this.clickCaptured, !0), this.started = !0);
        }
      }, {
        key: "stop",
        value: function stop() {
          this.started && (this.eventTarget.removeEventListener('click', this.clickCaptured, !0), this.started = !1);
        }
      }, {
        key: "clickEventIsSignificant",
        value: function clickEventIsSignificant(e) {
          return !(e.target && e.target.isContentEditable || e.defaultPrevented || e.which > 1 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey);
        }
      }, {
        key: "findLinkFromClickTarget",
        value: function findLinkFromClickTarget(e) {
          if (e instanceof Element) return e.closest('a[href]:not([target^=_]):not([download])');
        }
      }, {
        key: "getLocationForLink",
        value: function getLocationForLink(e) {
          return l(e.getAttribute('href') || '');
        }
      }]);

      return LinkClickObserver;
    }();

    var FormLinkClickObserver =
    /*#__PURE__*/
    function () {
      function FormLinkClickObserver(e, t) {
        _classCallCheck(this, FormLinkClickObserver);

        this.delegate = e, this.linkInterceptor = new LinkClickObserver(this, t);
      }

      _createClass(FormLinkClickObserver, [{
        key: "start",
        value: function start() {
          this.linkInterceptor.start();
        }
      }, {
        key: "stop",
        value: function stop() {
          this.linkInterceptor.stop();
        }
      }, {
        key: "willFollowLinkToLocation",
        value: function willFollowLinkToLocation(e, t, s) {
          return this.delegate.willSubmitFormLinkToLocation(e, t, s) && e.hasAttribute('data-turbo-method');
        }
      }, {
        key: "followedLinkToLocation",
        value: function followedLinkToLocation(e, t) {
          var s = t.href,
              i = document.createElement('form');
          i.setAttribute('data-turbo', 'true'), i.setAttribute('action', s), i.setAttribute('hidden', '');
          var r = e.getAttribute('data-turbo-method');
          r && i.setAttribute('method', r);
          var n = e.getAttribute('data-turbo-frame');
          n && i.setAttribute('data-turbo-frame', n);
          var o = e.getAttribute('data-turbo-action');
          o && i.setAttribute('data-turbo-action', o);
          var a = e.getAttribute('data-turbo-confirm');
          a && i.setAttribute('data-turbo-confirm', a), e.hasAttribute('data-turbo-stream') && i.setAttribute('data-turbo-stream', ''), this.delegate.submittedFormLinkToLocation(e, t, i), document.body.appendChild(i), i.addEventListener('turbo:submit-end', function () {
            return i.remove();
          }, {
            once: !0
          }), requestAnimationFrame(function () {
            return i.requestSubmit();
          });
        }
      }]);

      return FormLinkClickObserver;
    }();

    var Bardo =
    /*#__PURE__*/
    function () {
      function Bardo(e, t) {
        _classCallCheck(this, Bardo);

        this.delegate = e, this.permanentElementMap = t;
      }

      _createClass(Bardo, [{
        key: "enter",
        value: function enter() {
          for (var e in this.permanentElementMap) {
            var _this$permanentElemen = _slicedToArray(this.permanentElementMap[e], 2),
                t = _this$permanentElemen[0],
                _s8 = _this$permanentElemen[1];

            this.delegate.enteringBardo(t, _s8), this.replaceNewPermanentElementWithPlaceholder(_s8);
          }
        }
      }, {
        key: "leave",
        value: function leave() {
          for (var e in this.permanentElementMap) {
            var _this$permanentElemen2 = _slicedToArray(this.permanentElementMap[e], 1),
                t = _this$permanentElemen2[0];

            this.replaceCurrentPermanentElementWithClone(t), this.replacePlaceholderWithPermanentElement(t), this.delegate.leavingBardo(t);
          }
        }
      }, {
        key: "replaceNewPermanentElementWithPlaceholder",
        value: function replaceNewPermanentElementWithPlaceholder(e) {
          var t = function (e) {
            var t = document.createElement('meta');
            return t.setAttribute('name', 'turbo-permanent-placeholder'), t.setAttribute('content', e.id), t;
          }(e);

          e.replaceWith(t);
        }
      }, {
        key: "replaceCurrentPermanentElementWithClone",
        value: function replaceCurrentPermanentElementWithClone(e) {
          var t = e.cloneNode(!0);
          e.replaceWith(t);
        }
      }, {
        key: "replacePlaceholderWithPermanentElement",
        value: function replacePlaceholderWithPermanentElement(e) {
          var t = this.getPlaceholderById(e.id);
          null == t || t.replaceWith(e);
        }
      }, {
        key: "getPlaceholderById",
        value: function getPlaceholderById(e) {
          return this.placeholders.find(function (t) {
            return t.content == e;
          });
        }
      }, {
        key: "placeholders",
        get: function get() {
          return _toConsumableArray(document.querySelectorAll('meta[name=turbo-permanent-placeholder][content]'));
        }
      }], [{
        key: "preservingPermanentElements",
        value: function preservingPermanentElements(e, t, s) {
          var i;
          return regeneratorRuntime.async(function preservingPermanentElements$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  i = new this(e, t);
                  i.enter();
                  _context8.next = 4;
                  return regeneratorRuntime.awrap(s());

                case 4:
                  i.leave();

                case 5:
                case "end":
                  return _context8.stop();
              }
            }
          }, null, this);
        }
      }]);

      return Bardo;
    }();

    var Renderer =
    /*#__PURE__*/
    function () {
      function Renderer(e, t, s, i) {
        var _this8 = this;

        var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;

        _classCallCheck(this, Renderer);

        this.activeElement = null, this.currentSnapshot = e, this.newSnapshot = t, this.isPreview = i, this.willRender = r, this.renderElement = s, this.promise = new Promise(function (e, t) {
          return _this8.resolvingFunctions = {
            resolve: e,
            reject: t
          };
        });
      }

      _createClass(Renderer, [{
        key: "prepareToRender",
        value: function prepareToRender() {}
      }, {
        key: "finishRendering",
        value: function finishRendering() {
          this.resolvingFunctions && (this.resolvingFunctions.resolve(), delete this.resolvingFunctions);
        }
      }, {
        key: "preservingPermanentElements",
        value: function preservingPermanentElements(e) {
          return regeneratorRuntime.async(function preservingPermanentElements$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return regeneratorRuntime.awrap(Bardo.preservingPermanentElements(this, this.permanentElementMap, e));

                case 2:
                case "end":
                  return _context9.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "focusFirstAutofocusableElement",
        value: function focusFirstAutofocusableElement() {
          var e = this.connectedSnapshot.firstAutofocusableElement;
          e && 'function' == typeof e.focus && e.focus();
        }
      }, {
        key: "enteringBardo",
        value: function enteringBardo(e) {
          !this.activeElement && e.contains(this.currentSnapshot.activeElement) && (this.activeElement = this.currentSnapshot.activeElement);
        }
      }, {
        key: "leavingBardo",
        value: function leavingBardo(e) {
          e.contains(this.activeElement) && this.activeElement instanceof HTMLElement && (this.activeElement.focus(), this.activeElement = null);
        }
      }, {
        key: "shouldRender",
        get: function get() {
          return !0;
        }
      }, {
        key: "reloadReason",
        get: function get() {}
      }, {
        key: "connectedSnapshot",
        get: function get() {
          return this.newSnapshot.isConnected ? this.newSnapshot : this.currentSnapshot;
        }
      }, {
        key: "currentElement",
        get: function get() {
          return this.currentSnapshot.element;
        }
      }, {
        key: "newElement",
        get: function get() {
          return this.newSnapshot.element;
        }
      }, {
        key: "permanentElementMap",
        get: function get() {
          return this.currentSnapshot.getPermanentElementMapForSnapshot(this.newSnapshot);
        }
      }]);

      return Renderer;
    }();

    var FrameRenderer =
    /*#__PURE__*/
    function (_Renderer) {
      _inherits(FrameRenderer, _Renderer);

      function FrameRenderer(e, t, s, i, r) {
        var _this9;

        var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !0;

        _classCallCheck(this, FrameRenderer);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(FrameRenderer).call(this, t, s, i, r, n)), _this9.delegate = e;
        return _this9;
      }

      _createClass(FrameRenderer, [{
        key: "render",
        value: function render() {
          var _this10 = this;

          return regeneratorRuntime.async(function render$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return regeneratorRuntime.awrap(g());

                case 2:
                  this.preservingPermanentElements(function () {
                    _this10.loadFrameElement();
                  });
                  this.scrollFrameIntoView();
                  _context10.next = 6;
                  return regeneratorRuntime.awrap(g());

                case 6:
                  this.focusFirstAutofocusableElement();
                  _context10.next = 9;
                  return regeneratorRuntime.awrap(g());

                case 9:
                  this.activateScriptElements();
                  this.activateImageElements();

                case 11:
                case "end":
                  return _context10.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "loadFrameElement",
        value: function loadFrameElement() {
          this.delegate.willRenderFrame(this.currentElement, this.newElement), this.renderElement(this.currentElement, this.newElement);
        }
      }, {
        key: "scrollFrameIntoView",
        value: function scrollFrameIntoView() {
          if (this.currentElement.autoscroll || this.newElement.autoscroll) {
            var e, t;

            var _s9 = this.currentElement.firstElementChild,
                _i6 = 'end' == (e = this.currentElement.getAttribute('data-autoscroll-block')) || 'start' == e || 'center' == e || 'nearest' == e ? e : 'end',
                _r3 = 'auto' == (t = this.currentElement.getAttribute('data-autoscroll-behavior')) || 'smooth' == t ? t : 'auto';

            if (_s9) return _s9.scrollIntoView({
              block: _i6,
              behavior: _r3
            }), !0;
          }

          return !1;
        }
      }, {
        key: "activateScriptElements",
        value: function activateScriptElements() {
          var _iteratorNormalCompletion10 = true;
          var _didIteratorError10 = false;
          var _iteratorError10 = undefined;

          try {
            for (var _iterator10 = this.newScriptElements[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
              var e = _step10.value;
              if ('application/json' === e.type) continue;
              var t = m(e);
              e.replaceWith(t);
            }
          } catch (err) {
            _didIteratorError10 = true;
            _iteratorError10 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
                _iterator10["return"]();
              }
            } finally {
              if (_didIteratorError10) {
                throw _iteratorError10;
              }
            }
          }
        }
      }, {
        key: "activateImageElements",
        value: function activateImageElements() {
          var _iteratorNormalCompletion11 = true;
          var _didIteratorError11 = false;
          var _iteratorError11 = undefined;

          try {
            for (var _iterator11 = this.imageElements[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
              var e = _step11.value;

              var t = function (e) {
                if ('false' == e.getAttribute('data-turbo-eval')) return e;
                {
                  var _t13 = document.createElement('img');

                  return function (e, t) {
                    var _iteratorNormalCompletion12 = true;
                    var _didIteratorError12 = false;
                    var _iteratorError12 = undefined;

                    try {
                      for (var _iterator12 = t.attributes[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                        var _step12$value = _step12.value,
                            _s10 = _step12$value.name,
                            _i7 = _step12$value.value;
                        e.setAttribute(_s10, _i7);
                      }
                    } catch (err) {
                      _didIteratorError12 = true;
                      _iteratorError12 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
                          _iterator12["return"]();
                        }
                      } finally {
                        if (_didIteratorError12) {
                          throw _iteratorError12;
                        }
                      }
                    }
                  }(_t13, e), _t13;
                }
              }(e);

              e.replaceWith(t);
            }
          } catch (err) {
            _didIteratorError11 = true;
            _iteratorError11 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
                _iterator11["return"]();
              }
            } finally {
              if (_didIteratorError11) {
                throw _iteratorError11;
              }
            }
          }
        }
      }, {
        key: "shouldRender",
        get: function get() {
          return !0;
        }
      }, {
        key: "newScriptElements",
        get: function get() {
          return this.currentElement.querySelectorAll('script');
        }
      }, {
        key: "imageElements",
        get: function get() {
          return this.currentElement.querySelectorAll('img');
        }
      }], [{
        key: "renderElement",
        value: function renderElement(e, t) {
          var s;
          var i = document.createRange();
          i.selectNodeContents(e), i.deleteContents();
          var r = null === (s = t.ownerDocument) || void 0 === s ? void 0 : s.createRange();
          r && (r.selectNodeContents(t), e.appendChild(r.extractContents()));
        }
      }]);

      return FrameRenderer;
    }(Renderer);

    var ProgressBar =
    /*#__PURE__*/
    function () {
      function ProgressBar() {
        var _this11 = this;

        _classCallCheck(this, ProgressBar);

        this.hiding = !1, this.value = 0, this.visible = !1, this.trickle = function () {
          _this11.setValue(_this11.value + Math.random() / 100);
        }, this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement(), this.installStylesheetElement(), this.setValue(0);
      }

      _createClass(ProgressBar, [{
        key: "show",
        value: function show() {
          this.visible || (this.visible = !0, this.installProgressElement(), this.startTrickling());
        }
      }, {
        key: "hide",
        value: function hide() {
          var _this12 = this;

          this.visible && !this.hiding && (this.hiding = !0, this.fadeProgressElement(function () {
            _this12.uninstallProgressElement(), _this12.stopTrickling(), _this12.visible = !1, _this12.hiding = !1;
          }));
        }
      }, {
        key: "setValue",
        value: function setValue(e) {
          this.value = e, this.refresh();
        }
      }, {
        key: "installStylesheetElement",
        value: function installStylesheetElement() {
          document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }
      }, {
        key: "installProgressElement",
        value: function installProgressElement() {
          this.progressElement.style.width = '0', this.progressElement.style.opacity = '1', document.documentElement.insertBefore(this.progressElement, document.body), this.refresh();
        }
      }, {
        key: "fadeProgressElement",
        value: function fadeProgressElement(e) {
          this.progressElement.style.opacity = '0', setTimeout(e, 1.5 * ProgressBar.animationDuration);
        }
      }, {
        key: "uninstallProgressElement",
        value: function uninstallProgressElement() {
          this.progressElement.parentNode && document.documentElement.removeChild(this.progressElement);
        }
      }, {
        key: "startTrickling",
        value: function startTrickling() {
          this.trickleInterval || (this.trickleInterval = window.setInterval(this.trickle, ProgressBar.animationDuration));
        }
      }, {
        key: "stopTrickling",
        value: function stopTrickling() {
          window.clearInterval(this.trickleInterval), delete this.trickleInterval;
        }
      }, {
        key: "refresh",
        value: function refresh() {
          var _this13 = this;

          requestAnimationFrame(function () {
            _this13.progressElement.style.width = "".concat(10 + 90 * _this13.value, "%");
          });
        }
      }, {
        key: "createStylesheetElement",
        value: function createStylesheetElement() {
          var e = document.createElement('style');
          return e.type = 'text/css', e.textContent = ProgressBar.defaultCSS, this.cspNonce && (e.nonce = this.cspNonce), e;
        }
      }, {
        key: "createProgressElement",
        value: function createProgressElement() {
          var e = document.createElement('div');
          return e.className = 'turbo-progress-bar', e;
        }
      }, {
        key: "cspNonce",
        get: function get() {
          return L('csp-nonce');
        }
      }], [{
        key: "defaultCSS",
        get: function get() {
          return v(_templateObject(), ProgressBar.animationDuration, ProgressBar.animationDuration / 2, ProgressBar.animationDuration / 2);
        }
      }]);

      return ProgressBar;
    }();

    ProgressBar.animationDuration = 300;

    var HeadSnapshot =
    /*#__PURE__*/
    function (_Snapshot) {
      _inherits(HeadSnapshot, _Snapshot);

      function HeadSnapshot() {
        var _this14;

        _classCallCheck(this, HeadSnapshot);

        _this14 = _possibleConstructorReturn(this, _getPrototypeOf(HeadSnapshot).apply(this, arguments)), _this14.detailsByOuterHTML = _this14.children.filter(function (e) {
          return 'noscript' != e.localName;
        }).map(function (e) {
          return function (e) {
            return e.hasAttribute('nonce') && e.setAttribute('nonce', ''), e;
          }(e);
        }).reduce(function (e, t) {
          var s = t.outerHTML,
              i = s in e ? e[s] : {
            type: function (e) {
              return 'script' == e.localName ? 'script' : !function (e) {
                var t = e.localName;
                return 'style' == t || 'link' == t && 'stylesheet' == e.getAttribute('rel');
              }(e) ? void 0 : 'stylesheet';
            }(t),
            tracked: 'reload' == t.getAttribute('data-turbo-track'),
            elements: []
          };
          return Object.assign(Object.assign({}, e), _defineProperty({}, s, Object.assign(Object.assign({}, i), {
            elements: [].concat(_toConsumableArray(i.elements), [t])
          })));
        }, {});
        return _this14;
      }

      _createClass(HeadSnapshot, [{
        key: "getScriptElementsNotInSnapshot",
        value: function getScriptElementsNotInSnapshot(e) {
          return this.getElementsMatchingTypeNotInSnapshot('script', e);
        }
      }, {
        key: "getStylesheetElementsNotInSnapshot",
        value: function getStylesheetElementsNotInSnapshot(e) {
          return this.getElementsMatchingTypeNotInSnapshot('stylesheet', e);
        }
      }, {
        key: "getElementsMatchingTypeNotInSnapshot",
        value: function getElementsMatchingTypeNotInSnapshot(e, t) {
          var _this15 = this;

          return Object.keys(this.detailsByOuterHTML).filter(function (e) {
            return !(e in t.detailsByOuterHTML);
          }).map(function (e) {
            return _this15.detailsByOuterHTML[e];
          }).filter(function (_ref7) {
            var t = _ref7.type;
            return t == e;
          }).map(function (_ref8) {
            var _ref8$elements = _slicedToArray(_ref8.elements, 1),
                e = _ref8$elements[0];

            return e;
          });
        }
      }, {
        key: "getMetaValue",
        value: function getMetaValue(e) {
          var t = this.findMetaElementByName(e);
          return t ? t.getAttribute('content') : null;
        }
      }, {
        key: "findMetaElementByName",
        value: function findMetaElementByName(e) {
          var _this16 = this;

          return Object.keys(this.detailsByOuterHTML).reduce(function (t, s) {
            var _this16$detailsByOute = _slicedToArray(_this16.detailsByOuterHTML[s].elements, 1),
                i = _this16$detailsByOute[0];

            return 'meta' == i.localName && i.getAttribute('name') == e ? i : t;
          }, void 0);
        }
      }, {
        key: "trackedElementSignature",
        get: function get() {
          var _this17 = this;

          return Object.keys(this.detailsByOuterHTML).filter(function (e) {
            return _this17.detailsByOuterHTML[e].tracked;
          }).join('');
        }
      }, {
        key: "provisionalElements",
        get: function get() {
          var _this18 = this;

          return Object.keys(this.detailsByOuterHTML).reduce(function (e, t) {
            var _this18$detailsByOute = _this18.detailsByOuterHTML[t],
                s = _this18$detailsByOute.type,
                i = _this18$detailsByOute.tracked,
                r = _this18$detailsByOute.elements;
            return null != s || i ? r.length > 1 ? [].concat(_toConsumableArray(e), _toConsumableArray(r.slice(1))) : e : [].concat(_toConsumableArray(e), _toConsumableArray(r));
          }, []);
        }
      }]);

      return HeadSnapshot;
    }(Snapshot);

    var PageSnapshot =
    /*#__PURE__*/
    function (_Snapshot2) {
      _inherits(PageSnapshot, _Snapshot2);

      function PageSnapshot(e, t) {
        var _this19;

        _classCallCheck(this, PageSnapshot);

        _this19 = _possibleConstructorReturn(this, _getPrototypeOf(PageSnapshot).call(this, e)), _this19.headSnapshot = t;
        return _this19;
      }

      _createClass(PageSnapshot, [{
        key: "clone",
        value: function clone() {
          var e = this.element.cloneNode(!0),
              t = this.element.querySelectorAll('select'),
              s = e.querySelectorAll('select');
          var _iteratorNormalCompletion13 = true;
          var _didIteratorError13 = false;
          var _iteratorError13 = undefined;

          try {
            for (var _iterator13 = t.entries()[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
              var _step13$value = _slicedToArray(_step13.value, 2),
                  _e9 = _step13$value[0],
                  _i8 = _step13$value[1];

              var _t14 = s[_e9];
              var _iteratorNormalCompletion15 = true;
              var _didIteratorError15 = false;
              var _iteratorError15 = undefined;

              try {
                for (var _iterator15 = _t14.selectedOptions[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                  var _e10 = _step15.value;
                  _e10.selected = !1;
                }
              } catch (err) {
                _didIteratorError15 = true;
                _iteratorError15 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion15 && _iterator15["return"] != null) {
                    _iterator15["return"]();
                  }
                } finally {
                  if (_didIteratorError15) {
                    throw _iteratorError15;
                  }
                }
              }

              var _iteratorNormalCompletion16 = true;
              var _didIteratorError16 = false;
              var _iteratorError16 = undefined;

              try {
                for (var _iterator16 = _i8.selectedOptions[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                  var _e11 = _step16.value;
                  _t14.options[_e11.index].selected = !0;
                }
              } catch (err) {
                _didIteratorError16 = true;
                _iteratorError16 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion16 && _iterator16["return"] != null) {
                    _iterator16["return"]();
                  }
                } finally {
                  if (_didIteratorError16) {
                    throw _iteratorError16;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError13 = true;
            _iteratorError13 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
                _iterator13["return"]();
              }
            } finally {
              if (_didIteratorError13) {
                throw _iteratorError13;
              }
            }
          }

          var _iteratorNormalCompletion14 = true;
          var _didIteratorError14 = false;
          var _iteratorError14 = undefined;

          try {
            for (var _iterator14 = e.querySelectorAll('input[type="password"]')[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
              var _t15 = _step14.value;
              _t15.value = '';
            }
          } catch (err) {
            _didIteratorError14 = true;
            _iteratorError14 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
                _iterator14["return"]();
              }
            } finally {
              if (_didIteratorError14) {
                throw _iteratorError14;
              }
            }
          }

          return new PageSnapshot(e, this.headSnapshot);
        }
      }, {
        key: "getSetting",
        value: function getSetting(e) {
          return this.headSnapshot.getMetaValue("turbo-".concat(e));
        }
      }, {
        key: "headElement",
        get: function get() {
          return this.headSnapshot.element;
        }
      }, {
        key: "rootLocation",
        get: function get() {
          var e;
          return l(null !== (e = this.getSetting('root')) && void 0 !== e ? e : '/');
        }
      }, {
        key: "cacheControlValue",
        get: function get() {
          return this.getSetting('cache-control');
        }
      }, {
        key: "isPreviewable",
        get: function get() {
          return 'no-preview' != this.cacheControlValue;
        }
      }, {
        key: "isCacheable",
        get: function get() {
          return 'no-cache' != this.cacheControlValue;
        }
      }, {
        key: "isVisitable",
        get: function get() {
          return 'reload' != this.getSetting('visit-control');
        }
      }], [{
        key: "fromResponse",
        value: function fromResponse(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a;
          if (!e || null == n) return this.fromHTMLString(t);
          var s = n.createHTML(t, e);
          return this.fromHTMLString(s);
        }
      }, {
        key: "fromHTMLString",
        value: function fromHTMLString() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : a;
          return this.fromDocument(f(e));
        }
      }, {
        key: "fromElement",
        value: function fromElement(e) {
          return this.fromDocument(e.ownerDocument);
        }
      }, {
        key: "fromDocument",
        value: function fromDocument(_ref9) {
          var e = _ref9.head,
              t = _ref9.body;
          return new this(t, new HeadSnapshot(e));
        }
      }]);

      return PageSnapshot;
    }(Snapshot);

    !function (e) {
      e.visitStart = 'visitStart', e.requestStart = 'requestStart', e.requestEnd = 'requestEnd', e.visitEnd = 'visitEnd';
    }(z || (z = {})), function (e) {
      e.initialized = 'initialized', e.started = 'started', e.canceled = 'canceled', e.failed = 'failed', e.completed = 'completed';
    }(K || (K = {}));
    var P = {
      action: 'advance',
      historyChanged: !1,
      visitCachedSnapshot: function visitCachedSnapshot() {},
      willRender: !0,
      updateHistory: !0,
      shouldCacheSnapshot: !0,
      acceptsStreamResponse: !1
    };
    !function (e) {
      e[e.networkFailure = 0] = 'networkFailure', e[e.timeoutFailure = -1] = 'timeoutFailure', e[e.contentTypeMismatch = -2] = 'contentTypeMismatch';
    }(Y || (Y = {}));

    var Visit =
    /*#__PURE__*/
    function () {
      function Visit(e, t, s) {
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        _classCallCheck(this, Visit);

        this.identifier = b(), this.timingMetrics = {}, this.followedRedirect = !1, this.historyChanged = !1, this.scrolled = !1, this.shouldCacheSnapshot = !0, this.acceptsStreamResponse = !1, this.snapshotCached = !1, this.state = K.initialized, this.delegate = e, this.location = t, this.restorationIdentifier = s || b();

        var _Object$assign2 = Object.assign(Object.assign({}, P), i),
            r = _Object$assign2.action,
            n = _Object$assign2.historyChanged,
            o = _Object$assign2.referrer,
            a = _Object$assign2.snapshot,
            l = _Object$assign2.snapshotHTML,
            h = _Object$assign2.response,
            c = _Object$assign2.visitCachedSnapshot,
            d = _Object$assign2.willRender,
            u = _Object$assign2.updateHistory,
            m = _Object$assign2.shouldCacheSnapshot,
            p = _Object$assign2.acceptsStreamResponse;

        this.action = r, this.historyChanged = n, this.referrer = o, this.snapshot = a, this.snapshotHTML = l, this.response = h, this.isSamePage = this.delegate.locationWithActionIsSamePage(this.location, this.action), this.visitCachedSnapshot = c, this.willRender = d, this.updateHistory = u, this.scrolled = !d, this.shouldCacheSnapshot = m, this.acceptsStreamResponse = p;
      }

      _createClass(Visit, [{
        key: "start",
        value: function start() {
          this.state == K.initialized && (this.recordTimingMetric(z.visitStart), this.state = K.started, this.adapter.visitStarted(this), this.delegate.visitStarted(this));
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.state == K.started && (this.request && this.request.cancel(), this.cancelRender(), this.state = K.canceled);
        }
      }, {
        key: "complete",
        value: function complete() {
          this.state != K.started || (this.recordTimingMetric(z.visitEnd), this.state = K.completed, this.followRedirect(), this.followedRedirect || (this.adapter.visitCompleted(this), this.delegate.visitCompleted(this)));
        }
      }, {
        key: "fail",
        value: function fail() {
          this.state == K.started && (this.state = K.failed, this.adapter.visitFailed(this));
        }
      }, {
        key: "changeHistory",
        value: function changeHistory() {
          var e;

          if (!this.historyChanged && this.updateHistory) {
            var t = y(this.location.href === (null === (e = this.referrer) || void 0 === e ? void 0 : e.href) ? 'replace' : this.action);
            this.history.update(t, this.location, this.restorationIdentifier), this.historyChanged = !0;
          }
        }
      }, {
        key: "issueRequest",
        value: function issueRequest() {
          this.hasPreloadedResponse() ? this.simulateRequest() : this.shouldIssueRequest() && !this.request && (this.request = new FetchRequest(this, j.get, this.location), this.request.perform());
        }
      }, {
        key: "simulateRequest",
        value: function simulateRequest() {
          this.response && (this.startRequest(), this.recordResponse(), this.finishRequest());
        }
      }, {
        key: "startRequest",
        value: function startRequest() {
          this.recordTimingMetric(z.requestStart), this.adapter.visitRequestStarted(this);
        }
      }, {
        key: "recordResponse",
        value: function recordResponse() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.response;

          if (this.response = e, e) {
            var t = e.statusCode;
            T(t) ? this.adapter.visitRequestCompleted(this) : this.adapter.visitRequestFailedWithStatusCode(this, t);
          }
        }
      }, {
        key: "finishRequest",
        value: function finishRequest() {
          this.recordTimingMetric(z.requestEnd), this.adapter.visitRequestFinished(this);
        }
      }, {
        key: "loadResponse",
        value: function loadResponse() {
          var _this20 = this;

          if (this.response) {
            var _this$response = this.response,
                e = _this$response.statusCode,
                t = _this$response.response,
                _s11 = _this$response.responseHTML;
            this.render(function _callee() {
              return regeneratorRuntime.async(function _callee$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _this20.shouldCacheSnapshot && _this20.cacheSnapshot();
                      _context11.t0 = _this20.view.renderPromise;

                      if (!_context11.t0) {
                        _context11.next = 5;
                        break;
                      }

                      _context11.next = 5;
                      return regeneratorRuntime.awrap(_this20.view.renderPromise);

                    case 5:
                      if (!(T(e) && null != _s11)) {
                        _context11.next = 13;
                        break;
                      }

                      _context11.next = 8;
                      return regeneratorRuntime.awrap(_this20.view.renderPage(PageSnapshot.fromResponse(t, _s11), !1, _this20.willRender, _this20));

                    case 8:
                      _this20.performScroll();

                      _this20.adapter.visitRendered(_this20);

                      _this20.complete();

                      _context11.next = 17;
                      break;

                    case 13:
                      _context11.next = 15;
                      return regeneratorRuntime.awrap(_this20.view.renderError(PageSnapshot.fromResponse(t, _s11), _this20));

                    case 15:
                      _this20.adapter.visitRendered(_this20);

                      _this20.fail();

                    case 17:
                    case "end":
                      return _context11.stop();
                  }
                }
              });
            });
          }
        }
      }, {
        key: "getCachedSnapshot",
        value: function getCachedSnapshot() {
          var e = this.view.getCachedSnapshotForLocation(this.location) || this.getPreloadedSnapshot();
          if (e && (!h(this.location) || e.hasAnchor(h(this.location))) && ('restore' == this.action || e.isPreviewable)) return e;
        }
      }, {
        key: "getPreloadedSnapshot",
        value: function getPreloadedSnapshot() {
          if (this.snapshotHTML) return PageSnapshot.fromHTMLString(this.snapshotHTML);
        }
      }, {
        key: "hasCachedSnapshot",
        value: function hasCachedSnapshot() {
          return null != this.getCachedSnapshot();
        }
      }, {
        key: "loadCachedSnapshot",
        value: function loadCachedSnapshot() {
          var _this21 = this;

          var e = this.getCachedSnapshot();

          if (e) {
            var t = this.shouldIssueRequest();
            this.render(function _callee2() {
              return regeneratorRuntime.async(function _callee2$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _this21.cacheSnapshot();

                      if (!_this21.isSamePage) {
                        _context12.next = 5;
                        break;
                      }

                      _this21.adapter.visitRendered(_this21);

                      _context12.next = 14;
                      break;

                    case 5:
                      _context12.t0 = _this21.view.renderPromise;

                      if (!_context12.t0) {
                        _context12.next = 9;
                        break;
                      }

                      _context12.next = 9;
                      return regeneratorRuntime.awrap(_this21.view.renderPromise);

                    case 9:
                      _context12.next = 11;
                      return regeneratorRuntime.awrap(_this21.view.renderPage(e, t, _this21.willRender, _this21));

                    case 11:
                      _this21.performScroll();

                      _this21.adapter.visitRendered(_this21);

                      t || _this21.complete();

                    case 14:
                    case "end":
                      return _context12.stop();
                  }
                }
              });
            });
          }
        }
      }, {
        key: "followRedirect",
        value: function followRedirect() {
          var e;
          this.redirectedToLocation && !this.followedRedirect && (null === (e = this.response) || void 0 === e ? void 0 : e.redirected) && (this.adapter.visitProposedToLocation(this.redirectedToLocation, {
            action: 'replace',
            response: this.response
          }), this.followedRedirect = !0);
        }
      }, {
        key: "goToSamePageAnchor",
        value: function goToSamePageAnchor() {
          var _this22 = this;

          this.isSamePage && this.render(function _callee3() {
            return regeneratorRuntime.async(function _callee3$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _this22.cacheSnapshot(), _this22.performScroll(), _this22.changeHistory(), _this22.adapter.visitRendered(_this22);

                  case 1:
                  case "end":
                    return _context13.stop();
                }
              }
            });
          });
        }
      }, {
        key: "prepareHeadersForRequest",
        value: function prepareHeadersForRequest(e, t) {
          this.acceptsStreamResponse && t.acceptResponseType(StreamMessage.contentType);
        }
      }, {
        key: "requestStarted",
        value: function requestStarted() {
          this.startRequest();
        }
      }, {
        key: "requestPreventedHandlingResponse",
        value: function requestPreventedHandlingResponse(e, t) {}
      }, {
        key: "requestSucceededWithResponse",
        value: function requestSucceededWithResponse(e, t) {
          var s, i, r, n;
          return regeneratorRuntime.async(function requestSucceededWithResponse$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.next = 2;
                  return regeneratorRuntime.awrap(t.responseHTML);

                case 2:
                  s = _context14.sent;
                  i = t.redirected;
                  r = t.statusCode;
                  n = t.response;
                  void 0 == s ? this.recordResponse({
                    statusCode: Y.contentTypeMismatch,
                    redirected: i
                  }) : (this.redirectedToLocation = t.redirected ? t.location : void 0, this.redirectedToLocation && '' === t.location.hash && (this.redirectedToLocation.hash = e.url.hash), this.recordResponse({
                    statusCode: r,
                    redirected: i,
                    response: n,
                    responseHTML: s
                  }));

                case 7:
                case "end":
                  return _context14.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "requestFailedWithResponse",
        value: function requestFailedWithResponse(e, t) {
          var s, i, r, n;
          return regeneratorRuntime.async(function requestFailedWithResponse$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.next = 2;
                  return regeneratorRuntime.awrap(t.responseHTML);

                case 2:
                  s = _context15.sent;
                  i = t.redirected;
                  r = t.statusCode;
                  n = t.response;
                  void 0 == s ? this.recordResponse({
                    statusCode: Y.contentTypeMismatch,
                    redirected: i
                  }) : this.recordResponse({
                    statusCode: r,
                    redirected: i,
                    response: n,
                    responseHTML: s
                  });

                case 7:
                case "end":
                  return _context15.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "requestErrored",
        value: function requestErrored(e, t) {
          this.recordResponse({
            statusCode: Y.networkFailure,
            redirected: !1
          });
        }
      }, {
        key: "requestFinished",
        value: function requestFinished() {
          this.finishRequest();
        }
      }, {
        key: "performScroll",
        value: function performScroll() {
          this.scrolled || this.view.forceReloaded || ('restore' == this.action ? this.scrollToRestoredPosition() || this.scrollToAnchor() || this.view.scrollToTop() : this.scrollToAnchor() || this.view.scrollToTop(), this.isSamePage && this.delegate.visitScrolledToSamePageLocation(this.view.lastRenderedLocation, this.location), this.scrolled = !0);
        }
      }, {
        key: "scrollToRestoredPosition",
        value: function scrollToRestoredPosition() {
          var e = this.restorationData.scrollPosition;
          if (e) return this.view.scrollToPosition(e), !0;
        }
      }, {
        key: "scrollToAnchor",
        value: function scrollToAnchor() {
          var e = h(this.location);
          if (null != e) return this.view.scrollToAnchor(e), !0;
        }
      }, {
        key: "recordTimingMetric",
        value: function recordTimingMetric(e) {
          this.timingMetrics[e] = new Date().getTime();
        }
      }, {
        key: "getTimingMetrics",
        value: function getTimingMetrics() {
          return Object.assign({}, this.timingMetrics);
        }
      }, {
        key: "getHistoryMethodForAction",
        value: function getHistoryMethodForAction(e) {
          switch (e) {
            case 'replace':
              return history.replaceState;

            case 'advance':
            case 'restore':
              return history.pushState;
          }
        }
      }, {
        key: "hasPreloadedResponse",
        value: function hasPreloadedResponse() {
          return 'object' == _typeof(this.response);
        }
      }, {
        key: "shouldIssueRequest",
        value: function shouldIssueRequest() {
          return !this.isSamePage && ('restore' == this.action ? !this.hasCachedSnapshot() : this.willRender);
        }
      }, {
        key: "cacheSnapshot",
        value: function cacheSnapshot() {
          var _this23 = this;

          this.snapshotCached || (this.view.cacheSnapshot(this.snapshot).then(function (e) {
            return e && _this23.visitCachedSnapshot(e);
          }), this.snapshotCached = !0);
        }
      }, {
        key: "render",
        value: function render(e) {
          var _this24 = this;

          return regeneratorRuntime.async(function render$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  this.cancelRender();
                  _context16.next = 3;
                  return regeneratorRuntime.awrap(new Promise(function (e) {
                    _this24.frame = requestAnimationFrame(function () {
                      return e();
                    });
                  }));

                case 3:
                  _context16.next = 5;
                  return regeneratorRuntime.awrap(e());

                case 5:
                  delete this.frame;

                case 6:
                case "end":
                  return _context16.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "cancelRender",
        value: function cancelRender() {
          this.frame && (cancelAnimationFrame(this.frame), delete this.frame);
        }
      }, {
        key: "adapter",
        get: function get() {
          return this.delegate.adapter;
        }
      }, {
        key: "view",
        get: function get() {
          return this.delegate.view;
        }
      }, {
        key: "history",
        get: function get() {
          return this.delegate.history;
        }
      }, {
        key: "restorationData",
        get: function get() {
          return this.history.getRestorationDataForIdentifier(this.restorationIdentifier);
        }
      }, {
        key: "silent",
        get: function get() {
          return this.isSamePage;
        }
      }]);

      return Visit;
    }();

    function T(e) {
      return e >= 200 && e < 300;
    }

    var BrowserAdapter =
    /*#__PURE__*/
    function () {
      function BrowserAdapter(e) {
        var _this25 = this;

        _classCallCheck(this, BrowserAdapter);

        this.progressBar = new ProgressBar(), this.showProgressBar = function () {
          _this25.progressBar.show();
        }, this.session = e;
      }

      _createClass(BrowserAdapter, [{
        key: "visitProposedToLocation",
        value: function visitProposedToLocation(e, t) {
          this.navigator.startVisit(e, (null == t ? void 0 : t.restorationIdentifier) || b(), t);
        }
      }, {
        key: "visitStarted",
        value: function visitStarted(e) {
          this.location = e.location, e.loadCachedSnapshot(), e.issueRequest(), e.goToSamePageAnchor();
        }
      }, {
        key: "visitRequestStarted",
        value: function visitRequestStarted(e) {
          this.progressBar.setValue(0), e.hasCachedSnapshot() || 'restore' != e.action ? this.showVisitProgressBarAfterDelay() : this.showProgressBar();
        }
      }, {
        key: "visitRequestCompleted",
        value: function visitRequestCompleted(e) {
          e.loadResponse();
        }
      }, {
        key: "visitRequestFailedWithStatusCode",
        value: function visitRequestFailedWithStatusCode(e, t) {
          switch (t) {
            case Y.networkFailure:
            case Y.timeoutFailure:
            case Y.contentTypeMismatch:
              return this.reload({
                reason: 'request_failed',
                context: {
                  statusCode: t
                }
              });

            default:
              return e.loadResponse();
          }
        }
      }, {
        key: "visitRequestFinished",
        value: function visitRequestFinished(e) {
          this.progressBar.setValue(1), this.hideVisitProgressBar();
        }
      }, {
        key: "visitCompleted",
        value: function visitCompleted(e) {}
      }, {
        key: "pageInvalidated",
        value: function pageInvalidated(e) {
          this.reload(e);
        }
      }, {
        key: "visitFailed",
        value: function visitFailed(e) {}
      }, {
        key: "visitRendered",
        value: function visitRendered(e) {}
      }, {
        key: "formSubmissionStarted",
        value: function formSubmissionStarted(e) {
          this.progressBar.setValue(0), this.showFormProgressBarAfterDelay();
        }
      }, {
        key: "formSubmissionFinished",
        value: function formSubmissionFinished(e) {
          this.progressBar.setValue(1), this.hideFormProgressBar();
        }
      }, {
        key: "showVisitProgressBarAfterDelay",
        value: function showVisitProgressBarAfterDelay() {
          this.visitProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
        }
      }, {
        key: "hideVisitProgressBar",
        value: function hideVisitProgressBar() {
          this.progressBar.hide(), null != this.visitProgressBarTimeout && (window.clearTimeout(this.visitProgressBarTimeout), delete this.visitProgressBarTimeout);
        }
      }, {
        key: "showFormProgressBarAfterDelay",
        value: function showFormProgressBarAfterDelay() {
          null == this.formProgressBarTimeout && (this.formProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay));
        }
      }, {
        key: "hideFormProgressBar",
        value: function hideFormProgressBar() {
          this.progressBar.hide(), null != this.formProgressBarTimeout && (window.clearTimeout(this.formProgressBarTimeout), delete this.formProgressBarTimeout);
        }
      }, {
        key: "reload",
        value: function reload(e) {
          var t;
          p('turbo:reload', {
            detail: e
          }), window.location.href = (null === (t = this.location) || void 0 === t ? void 0 : t.toString()) || window.location.href;
        }
      }, {
        key: "navigator",
        get: function get() {
          return this.session.navigator;
        }
      }]);

      return BrowserAdapter;
    }();

    var CacheObserver =
    /*#__PURE__*/
    function () {
      function CacheObserver() {
        _classCallCheck(this, CacheObserver);

        this.started = !1, this.removeStaleElements = function (e) {
          for (var _i9 = 0, _arr2 = _toConsumableArray(document.querySelectorAll('[data-turbo-cache="false"]')); _i9 < _arr2.length; _i9++) {
            var _e12 = _arr2[_i9];

            _e12.remove();
          }
        };
      }

      _createClass(CacheObserver, [{
        key: "start",
        value: function start() {
          this.started || (this.started = !0, addEventListener('turbo:before-cache', this.removeStaleElements, !1));
        }
      }, {
        key: "stop",
        value: function stop() {
          this.started && (this.started = !1, removeEventListener('turbo:before-cache', this.removeStaleElements, !1));
        }
      }]);

      return CacheObserver;
    }();

    var FrameRedirector =
    /*#__PURE__*/
    function () {
      function FrameRedirector(e, t) {
        _classCallCheck(this, FrameRedirector);

        this.session = e, this.element = t, this.linkInterceptor = new LinkInterceptor(this, t), this.formSubmitObserver = new FormSubmitObserver(this, t);
      }

      _createClass(FrameRedirector, [{
        key: "start",
        value: function start() {
          this.linkInterceptor.start(), this.formSubmitObserver.start();
        }
      }, {
        key: "stop",
        value: function stop() {
          this.linkInterceptor.stop(), this.formSubmitObserver.stop();
        }
      }, {
        key: "shouldInterceptLinkClick",
        value: function shouldInterceptLinkClick(e, t, s) {
          return this.shouldRedirect(e) && this.frameAllowsVisitingLocation(e, l(t), s);
        }
      }, {
        key: "linkClickIntercepted",
        value: function linkClickIntercepted(e, t, s) {
          var i = this.findFrameElement(e);
          i && i.delegate.linkClickIntercepted(e, t, s);
        }
      }, {
        key: "willSubmitForm",
        value: function willSubmitForm(e, t) {
          return null == e.closest('turbo-frame') && this.shouldSubmit(e, t) && this.shouldRedirect(e, t);
        }
      }, {
        key: "formSubmitted",
        value: function formSubmitted(e, t) {
          var s = this.findFrameElement(e, t);
          s && s.delegate.formSubmitted(e, t);
        }
      }, {
        key: "frameAllowsVisitingLocation",
        value: function frameAllowsVisitingLocation(e, _ref10, s) {
          var t = _ref10.href;
          return !p('turbo:frame-click', {
            target: e,
            detail: {
              url: t,
              originalEvent: s
            },
            cancelable: !0
          }).defaultPrevented;
        }
      }, {
        key: "shouldSubmit",
        value: function shouldSubmit(e, t) {
          var s;
          var i = c(e, t),
              r = this.element.ownerDocument.querySelector('meta[name="turbo-root"]'),
              n = l(null !== (s = null == r ? void 0 : r.content) && void 0 !== s ? s : '/');
          return this.shouldRedirect(e, t) && this.session.locationIsVisitable(i, n);
        }
      }, {
        key: "shouldRedirect",
        value: function shouldRedirect(e, t) {
          if (!(e instanceof HTMLFormElement ? this.session.submissionIsNavigatable(e, t) : this.session.elementIsNavigatable(e))) return !1;
          {
            var _s12 = this.findFrameElement(e, t);

            return !!_s12 && _s12 != e.closest('turbo-frame');
          }
        }
      }, {
        key: "findFrameElement",
        value: function findFrameElement(e, t) {
          var s = (null == t ? void 0 : t.getAttribute('data-turbo-frame')) || e.getAttribute('data-turbo-frame');

          if (s && '_top' != s) {
            var _e13 = this.element.querySelector("#".concat(s, ":not([disabled])"));

            if (_e13 instanceof FrameElement) return _e13;
          }
        }
      }]);

      return FrameRedirector;
    }();

    var History =
    /*#__PURE__*/
    function () {
      function History(e) {
        var _this26 = this;

        _classCallCheck(this, History);

        this.restorationIdentifier = b(), this.restorationData = {}, this.started = !1, this.pageLoaded = !1, this.onPopState = function (e) {
          if (_this26.shouldHandlePopState()) {
            var _ref11 = e.state || {},
                t = _ref11.turbo;

            if (t) {
              _this26.location = new URL(window.location.href);
              var _e14 = t.restorationIdentifier;
              _this26.restorationIdentifier = _e14, _this26.delegate.historyPoppedToLocationWithRestorationIdentifier(_this26.location, _e14);
            }
          }
        }, this.onPageLoad = function _callee4(e) {
          return regeneratorRuntime.async(function _callee4$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  _context17.next = 2;
                  return regeneratorRuntime.awrap(Promise.resolve());

                case 2:
                  _this26.pageLoaded = !0;

                case 3:
                case "end":
                  return _context17.stop();
              }
            }
          });
        }, this.delegate = e;
      }

      _createClass(History, [{
        key: "start",
        value: function start() {
          this.started || (addEventListener('popstate', this.onPopState, !1), addEventListener('load', this.onPageLoad, !1), this.started = !0, this.replace(new URL(window.location.href)));
        }
      }, {
        key: "stop",
        value: function stop() {
          this.started && (removeEventListener('popstate', this.onPopState, !1), removeEventListener('load', this.onPageLoad, !1), this.started = !1);
        }
      }, {
        key: "push",
        value: function push(e, t) {
          this.update(history.pushState, e, t);
        }
      }, {
        key: "replace",
        value: function replace(e, t) {
          this.update(history.replaceState, e, t);
        }
      }, {
        key: "update",
        value: function update(e, t) {
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : b();
          e.call(history, {
            turbo: {
              restorationIdentifier: s
            }
          }, '', t.href), this.location = t, this.restorationIdentifier = s;
        }
      }, {
        key: "getRestorationDataForIdentifier",
        value: function getRestorationDataForIdentifier(e) {
          return this.restorationData[e] || {};
        }
      }, {
        key: "updateRestorationData",
        value: function updateRestorationData(e) {
          var t = this.restorationIdentifier,
              s = this.restorationData[t];
          this.restorationData[t] = Object.assign(Object.assign({}, s), e);
        }
      }, {
        key: "assumeControlOfScrollRestoration",
        value: function assumeControlOfScrollRestoration() {
          var e;
          this.previousScrollRestoration || (this.previousScrollRestoration = null !== (e = history.scrollRestoration) && void 0 !== e ? e : 'auto', history.scrollRestoration = 'manual');
        }
      }, {
        key: "relinquishControlOfScrollRestoration",
        value: function relinquishControlOfScrollRestoration() {
          this.previousScrollRestoration && (history.scrollRestoration = this.previousScrollRestoration, delete this.previousScrollRestoration);
        }
      }, {
        key: "shouldHandlePopState",
        value: function shouldHandlePopState() {
          return this.pageIsLoaded();
        }
      }, {
        key: "pageIsLoaded",
        value: function pageIsLoaded() {
          return this.pageLoaded || 'complete' == document.readyState;
        }
      }]);

      return History;
    }();

    var Navigator =
    /*#__PURE__*/
    function () {
      function Navigator(e) {
        _classCallCheck(this, Navigator);

        this.delegate = e;
      }

      _createClass(Navigator, [{
        key: "proposeVisit",
        value: function proposeVisit(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.delegate.allowsVisitingLocationWithAction(e, t.action) && (this.delegate.locationIsVisitable(e, this.view.snapshot.rootLocation) ? this.delegate.visitProposedToLocation(e, t) : window.location.href = e.toString());
        }
      }, {
        key: "startVisit",
        value: function startVisit(e, t) {
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          this.stop(), this.currentVisit = new Visit(this, l(e), t, Object.assign({
            referrer: this.location
          }, s)), this.currentVisit.start();
        }
      }, {
        key: "submitForm",
        value: function submitForm(e, t) {
          this.stop(), this.formSubmission = new FormSubmission(this, e, t, !0), this.formSubmission.start();
        }
      }, {
        key: "stop",
        value: function stop() {
          this.formSubmission && (this.formSubmission.stop(), delete this.formSubmission), this.currentVisit && (this.currentVisit.cancel(), delete this.currentVisit);
        }
      }, {
        key: "formSubmissionStarted",
        value: function formSubmissionStarted(e) {
          'function' == typeof this.adapter.formSubmissionStarted && this.adapter.formSubmissionStarted(e);
        }
      }, {
        key: "formSubmissionSucceededWithResponse",
        value: function formSubmissionSucceededWithResponse(e, t) {
          var _s13, _i10, _r4, _n2, _o, _a, _l;

          return regeneratorRuntime.async(function formSubmissionSucceededWithResponse$(_context18) {
            while (1) {
              switch (_context18.prev = _context18.next) {
                case 0:
                  if (!(e == this.formSubmission)) {
                    _context18.next = 5;
                    break;
                  }

                  _context18.next = 3;
                  return regeneratorRuntime.awrap(t.responseHTML);

                case 3:
                  _s13 = _context18.sent;

                  if (_s13) {
                    _i10 = e.method == j.get;
                    _i10 || this.view.clearSnapshotCache();
                    _r4 = t.statusCode, _n2 = t.redirected, _o = t.response, _a = this.getActionForFormSubmission(e), _l = t.location;
                    _n2 && '' === t.location.hash && (_l.hash = e.fetchRequest.location.hash), this.proposeVisit(_l, {
                      action: _a,
                      shouldCacheSnapshot: _i10,
                      response: {
                        statusCode: _r4,
                        redirected: _n2,
                        response: _o,
                        responseHTML: _s13
                      }
                    });
                  }

                case 5:
                case "end":
                  return _context18.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "formSubmissionFailedWithResponse",
        value: function formSubmissionFailedWithResponse(e, t) {
          var s, _e15;

          return regeneratorRuntime.async(function formSubmissionFailedWithResponse$(_context19) {
            while (1) {
              switch (_context19.prev = _context19.next) {
                case 0:
                  _context19.next = 2;
                  return regeneratorRuntime.awrap(t.responseHTML);

                case 2:
                  s = _context19.sent;

                  if (!s) {
                    _context19.next = 14;
                    break;
                  }

                  _e15 = PageSnapshot.fromResponse(t.response, s);

                  if (!t.serverError) {
                    _context19.next = 10;
                    break;
                  }

                  _context19.next = 8;
                  return regeneratorRuntime.awrap(this.view.renderError(_e15, this.currentVisit));

                case 8:
                  _context19.next = 12;
                  break;

                case 10:
                  _context19.next = 12;
                  return regeneratorRuntime.awrap(this.view.renderPage(_e15, !1, !0, this.currentVisit));

                case 12:
                  this.view.scrollToTop();
                  this.view.clearSnapshotCache();

                case 14:
                case "end":
                  return _context19.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "formSubmissionErrored",
        value: function formSubmissionErrored(e, t) {
          console.error(t);
        }
      }, {
        key: "formSubmissionFinished",
        value: function formSubmissionFinished(e) {
          'function' == typeof this.adapter.formSubmissionFinished && this.adapter.formSubmissionFinished(e);
        }
      }, {
        key: "visitStarted",
        value: function visitStarted(e) {
          this.delegate.visitStarted(e);
        }
      }, {
        key: "visitCompleted",
        value: function visitCompleted(e) {
          this.delegate.visitCompleted(e);
        }
      }, {
        key: "locationWithActionIsSamePage",
        value: function locationWithActionIsSamePage(e, t) {
          var s = h(e),
              i = h(this.view.lastRenderedLocation);
          return 'replace' !== t && d(e) === d(this.view.lastRenderedLocation) && ('restore' === t && void 0 === s || null != s && s !== i);
        }
      }, {
        key: "visitScrolledToSamePageLocation",
        value: function visitScrolledToSamePageLocation(e, t) {
          this.delegate.visitScrolledToSamePageLocation(e, t);
        }
      }, {
        key: "getActionForFormSubmission",
        value: function getActionForFormSubmission(e) {
          var t = e.formElement,
              s = e.submitter,
              i = S('data-turbo-action', s, t);
          return u(i) ? i : 'advance';
        }
      }, {
        key: "adapter",
        get: function get() {
          return this.delegate.adapter;
        }
      }, {
        key: "view",
        get: function get() {
          return this.delegate.view;
        }
      }, {
        key: "history",
        get: function get() {
          return this.delegate.history;
        }
      }, {
        key: "location",
        get: function get() {
          return this.history.location;
        }
      }, {
        key: "restorationIdentifier",
        get: function get() {
          return this.history.restorationIdentifier;
        }
      }]);

      return Navigator;
    }();

    !function (e) {
      e[e.initial = 0] = 'initial', e[e.loading = 1] = 'loading', e[e.interactive = 2] = 'interactive', e[e.complete = 3] = 'complete';
    }(Q || (Q = {}));

    var PageObserver =
    /*#__PURE__*/
    function () {
      function PageObserver(e) {
        var _this27 = this;

        _classCallCheck(this, PageObserver);

        this.stage = Q.initial, this.started = !1, this.interpretReadyState = function () {
          var e = _this27.readyState;
          'interactive' == e ? _this27.pageIsInteractive() : 'complete' == e && _this27.pageIsComplete();
        }, this.pageWillUnload = function () {
          _this27.delegate.pageWillUnload();
        }, this.delegate = e;
      }

      _createClass(PageObserver, [{
        key: "start",
        value: function start() {
          this.started || (this.stage == Q.initial && (this.stage = Q.loading), document.addEventListener('readystatechange', this.interpretReadyState, !1), addEventListener('pagehide', this.pageWillUnload, !1), this.started = !0);
        }
      }, {
        key: "stop",
        value: function stop() {
          this.started && (document.removeEventListener('readystatechange', this.interpretReadyState, !1), removeEventListener('pagehide', this.pageWillUnload, !1), this.started = !1);
        }
      }, {
        key: "pageIsInteractive",
        value: function pageIsInteractive() {
          this.stage == Q.loading && (this.stage = Q.interactive, this.delegate.pageBecameInteractive());
        }
      }, {
        key: "pageIsComplete",
        value: function pageIsComplete() {
          this.pageIsInteractive(), this.stage == Q.interactive && (this.stage = Q.complete, this.delegate.pageLoaded());
        }
      }, {
        key: "readyState",
        get: function get() {
          return document.readyState;
        }
      }]);

      return PageObserver;
    }();

    var ScrollObserver =
    /*#__PURE__*/
    function () {
      function ScrollObserver(e) {
        var _this28 = this;

        _classCallCheck(this, ScrollObserver);

        this.started = !1, this.onScroll = function () {
          _this28.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          });
        }, this.delegate = e;
      }

      _createClass(ScrollObserver, [{
        key: "start",
        value: function start() {
          this.started || (addEventListener('scroll', this.onScroll, !1), this.onScroll(), this.started = !0);
        }
      }, {
        key: "stop",
        value: function stop() {
          this.started && (removeEventListener('scroll', this.onScroll, !1), this.started = !1);
        }
      }, {
        key: "updatePosition",
        value: function updatePosition(e) {
          this.delegate.scrollPositionChanged(e);
        }
      }]);

      return ScrollObserver;
    }();

    var StreamMessageRenderer =
    /*#__PURE__*/
    function () {
      function StreamMessageRenderer() {
        _classCallCheck(this, StreamMessageRenderer);
      }

      _createClass(StreamMessageRenderer, [{
        key: "render",
        value: function render(_ref12) {
          var e = _ref12.fragment;
          Bardo.preservingPermanentElements(this, function (e) {
            var t = A(document.documentElement),
                s = {};
            var _iteratorNormalCompletion17 = true;
            var _didIteratorError17 = false;
            var _iteratorError17 = undefined;

            try {
              for (var _iterator17 = t[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                var _i11 = _step17.value;
                var _t16 = _i11.id;
                var _iteratorNormalCompletion18 = true;
                var _didIteratorError18 = false;
                var _iteratorError18 = undefined;

                try {
                  for (var _iterator18 = e.querySelectorAll('turbo-stream')[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                    var _r5 = _step18.value;

                    var _e16 = C(_r5.templateElement.content, _t16);

                    _e16 && (s[_t16] = [_i11, _e16]);
                  }
                } catch (err) {
                  _didIteratorError18 = true;
                  _iteratorError18 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion18 && _iterator18["return"] != null) {
                      _iterator18["return"]();
                    }
                  } finally {
                    if (_didIteratorError18) {
                      throw _iteratorError18;
                    }
                  }
                }
              }
            } catch (err) {
              _didIteratorError17 = true;
              _iteratorError17 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion17 && _iterator17["return"] != null) {
                  _iterator17["return"]();
                }
              } finally {
                if (_didIteratorError17) {
                  throw _iteratorError17;
                }
              }
            }

            return s;
          }(e), function () {
            return document.documentElement.appendChild(e);
          });
        }
      }, {
        key: "enteringBardo",
        value: function enteringBardo(e, t) {
          t.replaceWith(e.cloneNode(!0));
        }
      }, {
        key: "leavingBardo",
        value: function leavingBardo() {}
      }]);

      return StreamMessageRenderer;
    }();

    var StreamObserver =
    /*#__PURE__*/
    function () {
      function StreamObserver(e) {
        var _this29 = this;

        _classCallCheck(this, StreamObserver);

        this.sources = new Set(), this.started = !1, this.inspectFetchResponse = function (e) {
          var t = function (e) {
            var t;
            var s = null === (t = e.detail) || void 0 === t ? void 0 : t.fetchResponse;
            if (s instanceof FetchResponse) return s;
          }(e);

          t && function (e) {
            var t;
            return (null !== (t = e.contentType) && void 0 !== t ? t : '').startsWith(StreamMessage.contentType);
          }(t) && (e.preventDefault(), _this29.receiveMessageResponse(t));
        }, this.receiveMessageEvent = function (e) {
          _this29.started && 'string' == typeof e.data && _this29.receiveMessageHTML(e.data);
        }, this.delegate = e;
      }

      _createClass(StreamObserver, [{
        key: "start",
        value: function start() {
          this.started || (this.started = !0, addEventListener('turbo:before-fetch-response', this.inspectFetchResponse, !1));
        }
      }, {
        key: "stop",
        value: function stop() {
          this.started && (this.started = !1, removeEventListener('turbo:before-fetch-response', this.inspectFetchResponse, !1));
        }
      }, {
        key: "connectStreamSource",
        value: function connectStreamSource(e) {
          this.streamSourceIsConnected(e) || (this.sources.add(e), e.addEventListener('message', this.receiveMessageEvent, !1));
        }
      }, {
        key: "disconnectStreamSource",
        value: function disconnectStreamSource(e) {
          this.streamSourceIsConnected(e) && (this.sources["delete"](e), e.removeEventListener('message', this.receiveMessageEvent, !1));
        }
      }, {
        key: "streamSourceIsConnected",
        value: function streamSourceIsConnected(e) {
          return this.sources.has(e);
        }
      }, {
        key: "receiveMessageResponse",
        value: function receiveMessageResponse(e) {
          var t;
          return regeneratorRuntime.async(function receiveMessageResponse$(_context20) {
            while (1) {
              switch (_context20.prev = _context20.next) {
                case 0:
                  _context20.next = 2;
                  return regeneratorRuntime.awrap(e.responseHTML);

                case 2:
                  t = _context20.sent;
                  t && this.receiveMessageHTML(t);

                case 4:
                case "end":
                  return _context20.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "receiveMessageHTML",
        value: function receiveMessageHTML(e) {
          this.delegate.receivedMessageFromStream(StreamMessage.wrap(e));
        }
      }]);

      return StreamObserver;
    }();

    var ErrorRenderer =
    /*#__PURE__*/
    function (_Renderer2) {
      _inherits(ErrorRenderer, _Renderer2);

      function ErrorRenderer() {
        _classCallCheck(this, ErrorRenderer);

        return _possibleConstructorReturn(this, _getPrototypeOf(ErrorRenderer).apply(this, arguments));
      }

      _createClass(ErrorRenderer, [{
        key: "render",
        value: function render() {
          return regeneratorRuntime.async(function render$(_context21) {
            while (1) {
              switch (_context21.prev = _context21.next) {
                case 0:
                  this.replaceHeadAndBody(), this.activateScriptElements();

                case 1:
                case "end":
                  return _context21.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "replaceHeadAndBody",
        value: function replaceHeadAndBody() {
          var _document = document,
              e = _document.documentElement,
              t = _document.head;
          e.replaceChild(this.newHead, t), this.renderElement(this.currentElement, this.newElement);
        }
      }, {
        key: "activateScriptElements",
        value: function activateScriptElements() {
          var _iteratorNormalCompletion19 = true;
          var _didIteratorError19 = false;
          var _iteratorError19 = undefined;

          try {
            for (var _iterator19 = this.scriptElements[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
              var e = _step19.value;
              if ('application/json' === e.type) continue;
              var t = e.parentNode;

              if (t) {
                var _s14 = m(e);

                t.replaceChild(_s14, e);
              }
            }
          } catch (err) {
            _didIteratorError19 = true;
            _iteratorError19 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion19 && _iterator19["return"] != null) {
                _iterator19["return"]();
              }
            } finally {
              if (_didIteratorError19) {
                throw _iteratorError19;
              }
            }
          }
        }
      }, {
        key: "newHead",
        get: function get() {
          return this.newSnapshot.headSnapshot.element;
        }
      }, {
        key: "scriptElements",
        get: function get() {
          return document.documentElement.querySelectorAll('script');
        }
      }], [{
        key: "renderElement",
        value: function renderElement(e, t) {
          var _document2 = document,
              s = _document2.documentElement,
              i = _document2.body;
          s.replaceChild(t, i);
        }
      }]);

      return ErrorRenderer;
    }(Renderer);

    var PageRenderer =
    /*#__PURE__*/
    function (_Renderer3) {
      _inherits(PageRenderer, _Renderer3);

      function PageRenderer() {
        _classCallCheck(this, PageRenderer);

        return _possibleConstructorReturn(this, _getPrototypeOf(PageRenderer).apply(this, arguments));
      }

      _createClass(PageRenderer, [{
        key: "prepareToRender",
        value: function prepareToRender() {
          return regeneratorRuntime.async(function prepareToRender$(_context22) {
            while (1) {
              switch (_context22.prev = _context22.next) {
                case 0:
                  _context22.next = 2;
                  return regeneratorRuntime.awrap(this.mergeHead());

                case 2:
                case "end":
                  return _context22.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "render",
        value: function render() {
          return regeneratorRuntime.async(function render$(_context23) {
            while (1) {
              switch (_context23.prev = _context23.next) {
                case 0:
                  _context23.t0 = this.willRender;

                  if (!_context23.t0) {
                    _context23.next = 4;
                    break;
                  }

                  _context23.next = 4;
                  return regeneratorRuntime.awrap(this.replaceBody());

                case 4:
                case "end":
                  return _context23.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "finishRendering",
        value: function finishRendering() {
          _get(_getPrototypeOf(PageRenderer.prototype), "finishRendering", this).call(this), this.isPreview || this.focusFirstAutofocusableElement();
        }
      }, {
        key: "mergeHead",
        value: function mergeHead() {
          var e;
          return regeneratorRuntime.async(function mergeHead$(_context24) {
            while (1) {
              switch (_context24.prev = _context24.next) {
                case 0:
                  e = this.copyNewHeadStylesheetElements();
                  this.copyNewHeadScriptElements();
                  this.removeCurrentHeadProvisionalElements();
                  this.copyNewHeadProvisionalElements();
                  _context24.next = 6;
                  return regeneratorRuntime.awrap(e);

                case 6:
                case "end":
                  return _context24.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "replaceBody",
        value: function replaceBody() {
          var _this30 = this;

          return regeneratorRuntime.async(function replaceBody$(_context26) {
            while (1) {
              switch (_context26.prev = _context26.next) {
                case 0:
                  _context26.next = 2;
                  return regeneratorRuntime.awrap(this.preservingPermanentElements(function _callee5() {
                    return regeneratorRuntime.async(function _callee5$(_context25) {
                      while (1) {
                        switch (_context25.prev = _context25.next) {
                          case 0:
                            _this30.activateNewBody();

                            _context25.next = 3;
                            return regeneratorRuntime.awrap(_this30.assignNewBody());

                          case 3:
                          case "end":
                            return _context25.stop();
                        }
                      }
                    });
                  }));

                case 2:
                case "end":
                  return _context26.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "copyNewHeadStylesheetElements",
        value: function copyNewHeadStylesheetElements() {
          var e, _iteratorNormalCompletion20, _didIteratorError20, _iteratorError20, _iterator20, _step20, t;

          return regeneratorRuntime.async(function copyNewHeadStylesheetElements$(_context27) {
            while (1) {
              switch (_context27.prev = _context27.next) {
                case 0:
                  e = [];
                  _iteratorNormalCompletion20 = true;
                  _didIteratorError20 = false;
                  _iteratorError20 = undefined;
                  _context27.prev = 4;

                  for (_iterator20 = this.newHeadStylesheetElements[Symbol.iterator](); !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                    t = _step20.value;
                    e.push(function (e) {
                      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2e3;
                      return new Promise(function (s) {
                        var i = function i() {
                          e.removeEventListener('error', i), e.removeEventListener('load', i), s();
                        };

                        e.addEventListener('load', i, {
                          once: !0
                        }), e.addEventListener('error', i, {
                          once: !0
                        }), setTimeout(s, t);
                      });
                    }(t)), document.head.appendChild(t);
                  }

                  _context27.next = 12;
                  break;

                case 8:
                  _context27.prev = 8;
                  _context27.t0 = _context27["catch"](4);
                  _didIteratorError20 = true;
                  _iteratorError20 = _context27.t0;

                case 12:
                  _context27.prev = 12;
                  _context27.prev = 13;

                  if (!_iteratorNormalCompletion20 && _iterator20["return"] != null) {
                    _iterator20["return"]();
                  }

                case 15:
                  _context27.prev = 15;

                  if (!_didIteratorError20) {
                    _context27.next = 18;
                    break;
                  }

                  throw _iteratorError20;

                case 18:
                  return _context27.finish(15);

                case 19:
                  return _context27.finish(12);

                case 20:
                  _context27.next = 22;
                  return regeneratorRuntime.awrap(Promise.all(e));

                case 22:
                case "end":
                  return _context27.stop();
              }
            }
          }, null, this, [[4, 8, 12, 20], [13,, 15, 19]]);
        }
      }, {
        key: "copyNewHeadScriptElements",
        value: function copyNewHeadScriptElements() {
          var _iteratorNormalCompletion21 = true;
          var _didIteratorError21 = false;
          var _iteratorError21 = undefined;

          try {
            for (var _iterator21 = this.newHeadScriptElements[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
              var e = _step21.value;
              document.head.appendChild(m(e));
            }
          } catch (err) {
            _didIteratorError21 = true;
            _iteratorError21 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion21 && _iterator21["return"] != null) {
                _iterator21["return"]();
              }
            } finally {
              if (_didIteratorError21) {
                throw _iteratorError21;
              }
            }
          }
        }
      }, {
        key: "removeCurrentHeadProvisionalElements",
        value: function removeCurrentHeadProvisionalElements() {
          var _iteratorNormalCompletion22 = true;
          var _didIteratorError22 = false;
          var _iteratorError22 = undefined;

          try {
            for (var _iterator22 = this.currentHeadProvisionalElements[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
              var e = _step22.value;
              document.head.removeChild(e);
            }
          } catch (err) {
            _didIteratorError22 = true;
            _iteratorError22 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion22 && _iterator22["return"] != null) {
                _iterator22["return"]();
              }
            } finally {
              if (_didIteratorError22) {
                throw _iteratorError22;
              }
            }
          }
        }
      }, {
        key: "copyNewHeadProvisionalElements",
        value: function copyNewHeadProvisionalElements() {
          var _iteratorNormalCompletion23 = true;
          var _didIteratorError23 = false;
          var _iteratorError23 = undefined;

          try {
            for (var _iterator23 = this.newHeadProvisionalElements[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
              var e = _step23.value;
              document.head.appendChild(e);
            }
          } catch (err) {
            _didIteratorError23 = true;
            _iteratorError23 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion23 && _iterator23["return"] != null) {
                _iterator23["return"]();
              }
            } finally {
              if (_didIteratorError23) {
                throw _iteratorError23;
              }
            }
          }
        }
      }, {
        key: "activateNewBody",
        value: function activateNewBody() {
          document.adoptNode(this.newElement), this.activateNewBodyScriptElements();
        }
      }, {
        key: "activateNewBodyScriptElements",
        value: function activateNewBodyScriptElements() {
          var _iteratorNormalCompletion24 = true;
          var _didIteratorError24 = false;
          var _iteratorError24 = undefined;

          try {
            for (var _iterator24 = this.newBodyScriptElements[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
              var e = _step24.value;
              if ('application/json' === e.type) continue;
              var t = m(e);
              e.replaceWith(t);
            }
          } catch (err) {
            _didIteratorError24 = true;
            _iteratorError24 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion24 && _iterator24["return"] != null) {
                _iterator24["return"]();
              }
            } finally {
              if (_didIteratorError24) {
                throw _iteratorError24;
              }
            }
          }
        }
      }, {
        key: "assignNewBody",
        value: function assignNewBody() {
          return regeneratorRuntime.async(function assignNewBody$(_context28) {
            while (1) {
              switch (_context28.prev = _context28.next) {
                case 0:
                  _context28.next = 2;
                  return regeneratorRuntime.awrap(this.renderElement(this.currentElement, this.newElement));

                case 2:
                case "end":
                  return _context28.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "shouldRender",
        get: function get() {
          return this.newSnapshot.isVisitable && this.trackedElementsAreIdentical;
        }
      }, {
        key: "reloadReason",
        get: function get() {
          return this.newSnapshot.isVisitable ? this.trackedElementsAreIdentical ? void 0 : {
            reason: 'tracked_element_mismatch'
          } : {
            reason: 'turbo_visit_control_is_reload'
          };
        }
      }, {
        key: "currentHeadSnapshot",
        get: function get() {
          return this.currentSnapshot.headSnapshot;
        }
      }, {
        key: "newHeadSnapshot",
        get: function get() {
          return this.newSnapshot.headSnapshot;
        }
      }, {
        key: "newElement",
        get: function get() {
          return this.newSnapshot.element;
        }
      }, {
        key: "trackedElementsAreIdentical",
        get: function get() {
          return this.currentHeadSnapshot.trackedElementSignature == this.newHeadSnapshot.trackedElementSignature;
        }
      }, {
        key: "newHeadStylesheetElements",
        get: function get() {
          return this.newHeadSnapshot.getStylesheetElementsNotInSnapshot(this.currentHeadSnapshot);
        }
      }, {
        key: "newHeadScriptElements",
        get: function get() {
          return this.newHeadSnapshot.getScriptElementsNotInSnapshot(this.currentHeadSnapshot);
        }
      }, {
        key: "currentHeadProvisionalElements",
        get: function get() {
          return this.currentHeadSnapshot.provisionalElements;
        }
      }, {
        key: "newHeadProvisionalElements",
        get: function get() {
          return this.newHeadSnapshot.provisionalElements;
        }
      }, {
        key: "newBodyScriptElements",
        get: function get() {
          return this.newElement.querySelectorAll('script');
        }
      }], [{
        key: "renderElement",
        value: function renderElement(e, t) {
          document.body && t instanceof HTMLBodyElement ? document.body.replaceWith(t) : document.documentElement.appendChild(t);
        }
      }]);

      return PageRenderer;
    }(Renderer);

    var SnapshotCache =
    /*#__PURE__*/
    function () {
      function SnapshotCache(e) {
        _classCallCheck(this, SnapshotCache);

        this.keys = [], this.snapshots = {}, this.size = e;
      }

      _createClass(SnapshotCache, [{
        key: "has",
        value: function has(e) {
          return d(e) in this.snapshots;
        }
      }, {
        key: "get",
        value: function get(e) {
          if (this.has(e)) {
            var t = this.read(e);
            return this.touch(e), t;
          }
        }
      }, {
        key: "put",
        value: function put(e, t) {
          return this.write(e, t), this.touch(e), t;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.snapshots = {};
        }
      }, {
        key: "read",
        value: function read(e) {
          return this.snapshots[d(e)];
        }
      }, {
        key: "write",
        value: function write(e, t) {
          this.snapshots[d(e)] = t;
        }
      }, {
        key: "touch",
        value: function touch(e) {
          var t = d(e),
              s = this.keys.indexOf(t);
          s > -1 && this.keys.splice(s, 1), this.keys.unshift(t), this.trim();
        }
      }, {
        key: "trim",
        value: function trim() {
          var _iteratorNormalCompletion25 = true;
          var _didIteratorError25 = false;
          var _iteratorError25 = undefined;

          try {
            for (var _iterator25 = this.keys.splice(this.size)[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
              var e = _step25.value;
              delete this.snapshots[e];
            }
          } catch (err) {
            _didIteratorError25 = true;
            _iteratorError25 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion25 && _iterator25["return"] != null) {
                _iterator25["return"]();
              }
            } finally {
              if (_didIteratorError25) {
                throw _iteratorError25;
              }
            }
          }
        }
      }]);

      return SnapshotCache;
    }();

    var PageView =
    /*#__PURE__*/
    function (_View2) {
      _inherits(PageView, _View2);

      function PageView() {
        var _this31;

        _classCallCheck(this, PageView);

        _this31 = _possibleConstructorReturn(this, _getPrototypeOf(PageView).apply(this, arguments)), _this31.snapshotCache = new SnapshotCache(10), _this31.lastRenderedLocation = new URL(location.href), _this31.forceReloaded = !1;
        return _this31;
      }

      _createClass(PageView, [{
        key: "renderPage",
        value: function renderPage(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
          var i = arguments.length > 3 ? arguments[3] : undefined;
          var r = new PageRenderer(this.snapshot, e, PageRenderer.renderElement, t, s);
          return r.shouldRender ? null == i || i.changeHistory() : this.forceReloaded = !0, this.render(r);
        }
      }, {
        key: "renderError",
        value: function renderError(e, t) {
          null == t || t.changeHistory();
          var s = new ErrorRenderer(this.snapshot, e, ErrorRenderer.renderElement, !1);
          return this.render(s);
        }
      }, {
        key: "clearSnapshotCache",
        value: function clearSnapshotCache() {
          this.snapshotCache.clear();
        }
      }, {
        key: "cacheSnapshot",
        value: function cacheSnapshot() {
          var e,
              t,
              _s15,
              _args29 = arguments;

          return regeneratorRuntime.async(function cacheSnapshot$(_context29) {
            while (1) {
              switch (_context29.prev = _context29.next) {
                case 0:
                  e = _args29.length > 0 && _args29[0] !== undefined ? _args29[0] : this.snapshot;

                  if (!e.isCacheable) {
                    _context29.next = 8;
                    break;
                  }

                  this.delegate.viewWillCacheSnapshot();
                  t = this.lastRenderedLocation;
                  _context29.next = 6;
                  return regeneratorRuntime.awrap(new Promise(function (e) {
                    return setTimeout(function () {
                      return e();
                    }, 0);
                  }));

                case 6:
                  _s15 = e.clone();
                  return _context29.abrupt("return", (this.snapshotCache.put(t, _s15), _s15));

                case 8:
                case "end":
                  return _context29.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "getCachedSnapshotForLocation",
        value: function getCachedSnapshotForLocation(e) {
          return this.snapshotCache.get(e);
        }
      }, {
        key: "snapshot",
        get: function get() {
          return PageSnapshot.fromElement(this.element);
        }
      }]);

      return PageView;
    }(View);

    var Preloader =
    /*#__PURE__*/
    function () {
      function Preloader(e) {
        _classCallCheck(this, Preloader);

        this.selector = 'a[data-turbo-preload]', this.delegate = e;
      }

      _createClass(Preloader, [{
        key: "start",
        value: function start() {
          var _this32 = this;

          if ('loading' === document.readyState) return document.addEventListener('DOMContentLoaded', function () {
            _this32.preloadOnLoadLinksForView(document.body);
          });
          this.preloadOnLoadLinksForView(document.body);
        }
      }, {
        key: "preloadOnLoadLinksForView",
        value: function preloadOnLoadLinksForView(e) {
          var _iteratorNormalCompletion26 = true;
          var _didIteratorError26 = false;
          var _iteratorError26 = undefined;

          try {
            for (var _iterator26 = e.querySelectorAll(this.selector)[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
              var t = _step26.value;
              this.preloadURL(t);
            }
          } catch (err) {
            _didIteratorError26 = true;
            _iteratorError26 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion26 && _iterator26["return"] != null) {
                _iterator26["return"]();
              }
            } finally {
              if (_didIteratorError26) {
                throw _iteratorError26;
              }
            }
          }
        }
      }, {
        key: "preloadURL",
        value: function preloadURL(e) {
          var t, _e17, _s16, _i12;

          return regeneratorRuntime.async(function preloadURL$(_context30) {
            while (1) {
              switch (_context30.prev = _context30.next) {
                case 0:
                  t = new URL(e.href);

                  if (this.snapshotCache.has(t)) {
                    _context30.next = 15;
                    break;
                  }

                  _context30.prev = 2;
                  _context30.next = 5;
                  return regeneratorRuntime.awrap(fetch(t.toString(), {
                    headers: {
                      'VND.PREFETCH': 'true',
                      Accept: 'text/html'
                    }
                  }));

                case 5:
                  _e17 = _context30.sent;
                  _context30.next = 8;
                  return regeneratorRuntime.awrap(_e17.text());

                case 8:
                  _s16 = _context30.sent;
                  _i12 = PageSnapshot.fromResponse(_e17, _s16);
                  this.snapshotCache.put(t, _i12);
                  _context30.next = 15;
                  break;

                case 13:
                  _context30.prev = 13;
                  _context30.t0 = _context30["catch"](2);

                case 15:
                case "end":
                  return _context30.stop();
              }
            }
          }, null, this, [[2, 13]]);
        }
      }, {
        key: "snapshotCache",
        get: function get() {
          return this.delegate.navigator.view.snapshotCache;
        }
      }]);

      return Preloader;
    }();

    var Session =
    /*#__PURE__*/
    function () {
      function Session() {
        _classCallCheck(this, Session);

        this.navigator = new Navigator(this), this.history = new History(this), this.preloader = new Preloader(this), this.view = new PageView(this, document.documentElement), this.adapter = new BrowserAdapter(this), this.pageObserver = new PageObserver(this), this.cacheObserver = new CacheObserver(), this.linkClickObserver = new LinkClickObserver(this, window), this.formSubmitObserver = new FormSubmitObserver(this, document), this.scrollObserver = new ScrollObserver(this), this.streamObserver = new StreamObserver(this), this.formLinkClickObserver = new FormLinkClickObserver(this, document.documentElement), this.frameRedirector = new FrameRedirector(this, document.documentElement), this.streamMessageRenderer = new StreamMessageRenderer(), this.drive = !0, this.enabled = !0, this.progressBarDelay = 500, this.started = !1, this.formMode = 'on';
      }

      _createClass(Session, [{
        key: "start",
        value: function start() {
          this.started || (this.pageObserver.start(), this.cacheObserver.start(), this.formLinkClickObserver.start(), this.linkClickObserver.start(), this.formSubmitObserver.start(), this.scrollObserver.start(), this.streamObserver.start(), this.frameRedirector.start(), this.history.start(), this.preloader.start(), this.started = !0, this.enabled = !0);
        }
      }, {
        key: "disable",
        value: function disable() {
          this.enabled = !1;
        }
      }, {
        key: "stop",
        value: function stop() {
          this.started && (this.pageObserver.stop(), this.cacheObserver.stop(), this.formLinkClickObserver.stop(), this.linkClickObserver.stop(), this.formSubmitObserver.stop(), this.scrollObserver.stop(), this.streamObserver.stop(), this.frameRedirector.stop(), this.history.stop(), this.started = !1);
        }
      }, {
        key: "registerAdapter",
        value: function registerAdapter(e) {
          this.adapter = e;
        }
      }, {
        key: "visit",
        value: function visit(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var s = t.frame ? document.getElementById(t.frame) : null;
          s instanceof FrameElement ? (s.src = e.toString(), s.loaded) : this.navigator.proposeVisit(l(e), t);
        }
      }, {
        key: "connectStreamSource",
        value: function connectStreamSource(e) {
          this.streamObserver.connectStreamSource(e);
        }
      }, {
        key: "disconnectStreamSource",
        value: function disconnectStreamSource(e) {
          this.streamObserver.disconnectStreamSource(e);
        }
      }, {
        key: "renderStreamMessage",
        value: function renderStreamMessage(e) {
          this.streamMessageRenderer.render(StreamMessage.wrap(e));
        }
      }, {
        key: "clearCache",
        value: function clearCache() {
          this.view.clearSnapshotCache();
        }
      }, {
        key: "isVisitable",
        value: function isVisitable(e) {
          return !!((e.pathname.split('/').slice(1).slice(-1)[0].match(/\.[^.]*$/) || [])[0] || '').match(/^(?:|\.(?:htm|html|xhtml|php))$/);
        }
      }, {
        key: "locationIsVisitable",
        value: function locationIsVisitable(e, t) {
          return function (e, t) {
            var s;
            var i = (s = t.origin + t.pathname).endsWith('/') ? s : s + '/';
            return e.href === l(i).href || e.href.startsWith(i);
          }(e, t) && this.isVisitable(e);
        }
      }, {
        key: "setProgressBarDelay",
        value: function setProgressBarDelay(e) {
          this.progressBarDelay = e;
        }
      }, {
        key: "setFormMode",
        value: function setFormMode(e) {
          this.formMode = e;
        }
      }, {
        key: "historyPoppedToLocationWithRestorationIdentifier",
        value: function historyPoppedToLocationWithRestorationIdentifier(e, t) {
          this.enabled ? this.navigator.startVisit(e, t, {
            action: 'restore',
            historyChanged: !0
          }) : this.adapter.pageInvalidated({
            reason: 'turbo_disabled'
          });
        }
      }, {
        key: "scrollPositionChanged",
        value: function scrollPositionChanged(e) {
          this.history.updateRestorationData({
            scrollPosition: e
          });
        }
      }, {
        key: "willSubmitFormLinkToLocation",
        value: function willSubmitFormLinkToLocation(e, t) {
          return this.elementIsNavigatable(e) && this.locationIsVisitable(t, this.snapshot.rootLocation);
        }
      }, {
        key: "submittedFormLinkToLocation",
        value: function submittedFormLinkToLocation() {}
      }, {
        key: "willFollowLinkToLocation",
        value: function willFollowLinkToLocation(e, t, s) {
          return this.elementIsNavigatable(e) && this.locationIsVisitable(t, this.snapshot.rootLocation) && this.applicationAllowsFollowingLinkToLocation(e, t, s);
        }
      }, {
        key: "followedLinkToLocation",
        value: function followedLinkToLocation(e, t) {
          var s = this.getActionForLink(e),
              i = e.hasAttribute('data-turbo-stream');
          this.visit(t.href, {
            action: s,
            acceptsStreamResponse: i
          });
        }
      }, {
        key: "allowsVisitingLocationWithAction",
        value: function allowsVisitingLocationWithAction(e, t) {
          return this.locationWithActionIsSamePage(e, t) || this.applicationAllowsVisitingLocation(e);
        }
      }, {
        key: "visitProposedToLocation",
        value: function visitProposedToLocation(e, t) {
          F(e), this.adapter.visitProposedToLocation(e, t);
        }
      }, {
        key: "visitStarted",
        value: function visitStarted(e) {
          e.acceptsStreamResponse || w(document.documentElement), F(e.location), e.silent || this.notifyApplicationAfterVisitingLocation(e.location, e.action);
        }
      }, {
        key: "visitCompleted",
        value: function visitCompleted(e) {
          E(document.documentElement), this.notifyApplicationAfterPageLoad(e.getTimingMetrics());
        }
      }, {
        key: "locationWithActionIsSamePage",
        value: function locationWithActionIsSamePage(e, t) {
          return this.navigator.locationWithActionIsSamePage(e, t);
        }
      }, {
        key: "visitScrolledToSamePageLocation",
        value: function visitScrolledToSamePageLocation(e, t) {
          this.notifyApplicationAfterVisitingSamePageLocation(e, t);
        }
      }, {
        key: "willSubmitForm",
        value: function willSubmitForm(e, t) {
          var s = c(e, t);
          return this.submissionIsNavigatable(e, t) && this.locationIsVisitable(l(s), this.snapshot.rootLocation);
        }
      }, {
        key: "formSubmitted",
        value: function formSubmitted(e, t) {
          this.navigator.submitForm(e, t);
        }
      }, {
        key: "pageBecameInteractive",
        value: function pageBecameInteractive() {
          this.view.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad();
        }
      }, {
        key: "pageLoaded",
        value: function pageLoaded() {
          this.history.assumeControlOfScrollRestoration();
        }
      }, {
        key: "pageWillUnload",
        value: function pageWillUnload() {
          this.history.relinquishControlOfScrollRestoration();
        }
      }, {
        key: "receivedMessageFromStream",
        value: function receivedMessageFromStream(e) {
          this.renderStreamMessage(e);
        }
      }, {
        key: "viewWillCacheSnapshot",
        value: function viewWillCacheSnapshot() {
          var e;
          (null === (e = this.navigator.currentVisit) || void 0 === e ? void 0 : e.silent) || this.notifyApplicationBeforeCachingSnapshot();
        }
      }, {
        key: "allowsImmediateRender",
        value: function allowsImmediateRender(_ref13, t) {
          var e = _ref13.element;

          var _this$notifyApplicati = this.notifyApplicationBeforeRender(e, t),
              s = _this$notifyApplicati.defaultPrevented,
              i = _this$notifyApplicati.detail.render;

          return this.view.renderer && i && (this.view.renderer.renderElement = i), !s;
        }
      }, {
        key: "viewRenderedSnapshot",
        value: function viewRenderedSnapshot(e, t) {
          this.view.lastRenderedLocation = this.history.location, this.notifyApplicationAfterRender();
        }
      }, {
        key: "preloadOnLoadLinksForView",
        value: function preloadOnLoadLinksForView(e) {
          this.preloader.preloadOnLoadLinksForView(e);
        }
      }, {
        key: "viewInvalidated",
        value: function viewInvalidated(e) {
          this.adapter.pageInvalidated(e);
        }
      }, {
        key: "frameLoaded",
        value: function frameLoaded(e) {
          this.notifyApplicationAfterFrameLoad(e);
        }
      }, {
        key: "frameRendered",
        value: function frameRendered(e, t) {
          this.notifyApplicationAfterFrameRender(e, t);
        }
      }, {
        key: "applicationAllowsFollowingLinkToLocation",
        value: function applicationAllowsFollowingLinkToLocation(e, t, s) {
          return !this.notifyApplicationAfterClickingLinkToLocation(e, t, s).defaultPrevented;
        }
      }, {
        key: "applicationAllowsVisitingLocation",
        value: function applicationAllowsVisitingLocation(e) {
          return !this.notifyApplicationBeforeVisitingLocation(e).defaultPrevented;
        }
      }, {
        key: "notifyApplicationAfterClickingLinkToLocation",
        value: function notifyApplicationAfterClickingLinkToLocation(e, t, s) {
          return p('turbo:click', {
            target: e,
            detail: {
              url: t.href,
              originalEvent: s
            },
            cancelable: !0
          });
        }
      }, {
        key: "notifyApplicationBeforeVisitingLocation",
        value: function notifyApplicationBeforeVisitingLocation(e) {
          return p('turbo:before-visit', {
            detail: {
              url: e.href
            },
            cancelable: !0
          });
        }
      }, {
        key: "notifyApplicationAfterVisitingLocation",
        value: function notifyApplicationAfterVisitingLocation(e, t) {
          return p('turbo:visit', {
            detail: {
              url: e.href,
              action: t
            }
          });
        }
      }, {
        key: "notifyApplicationBeforeCachingSnapshot",
        value: function notifyApplicationBeforeCachingSnapshot() {
          return p('turbo:before-cache');
        }
      }, {
        key: "notifyApplicationBeforeRender",
        value: function notifyApplicationBeforeRender(e, t) {
          return p('turbo:before-render', {
            detail: Object.assign({
              newBody: e
            }, t),
            cancelable: !0
          });
        }
      }, {
        key: "notifyApplicationAfterRender",
        value: function notifyApplicationAfterRender() {
          return p('turbo:render');
        }
      }, {
        key: "notifyApplicationAfterPageLoad",
        value: function notifyApplicationAfterPageLoad() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return p('turbo:load', {
            detail: {
              url: this.location.href,
              timing: e
            }
          });
        }
      }, {
        key: "notifyApplicationAfterVisitingSamePageLocation",
        value: function notifyApplicationAfterVisitingSamePageLocation(e, t) {
          dispatchEvent(new HashChangeEvent('hashchange', {
            oldURL: e.toString(),
            newURL: t.toString()
          }));
        }
      }, {
        key: "notifyApplicationAfterFrameLoad",
        value: function notifyApplicationAfterFrameLoad(e) {
          return p('turbo:frame-load', {
            target: e
          });
        }
      }, {
        key: "notifyApplicationAfterFrameRender",
        value: function notifyApplicationAfterFrameRender(e, t) {
          return p('turbo:frame-render', {
            detail: {
              fetchResponse: e
            },
            target: t,
            cancelable: !0
          });
        }
      }, {
        key: "submissionIsNavigatable",
        value: function submissionIsNavigatable(e, t) {
          if ('off' == this.formMode) return !1;
          {
            var _s17 = !t || this.elementIsNavigatable(t);

            return 'optin' == this.formMode ? _s17 && null != e.closest('[data-turbo="true"]') : _s17 && this.elementIsNavigatable(e);
          }
        }
      }, {
        key: "elementIsNavigatable",
        value: function elementIsNavigatable(e) {
          var t = e.closest('[data-turbo]'),
              s = e.closest('turbo-frame');
          return this.drive || s ? !t || 'false' != t.getAttribute('data-turbo') : !!t && 'true' == t.getAttribute('data-turbo');
        }
      }, {
        key: "getActionForLink",
        value: function getActionForLink(e) {
          var t = e.getAttribute('data-turbo-action');
          return u(t) ? t : 'advance';
        }
      }, {
        key: "location",
        get: function get() {
          return this.history.location;
        }
      }, {
        key: "restorationIdentifier",
        get: function get() {
          return this.history.restorationIdentifier;
        }
      }, {
        key: "snapshot",
        get: function get() {
          return this.view.snapshot;
        }
      }]);

      return Session;
    }();

    function F(e) {
      Object.defineProperties(e, k);
    }

    var k = {
      absoluteURL: {
        get: function get() {
          return this.toString();
        }
      }
    };

    var Cache =
    /*#__PURE__*/
    function () {
      function Cache(e) {
        _classCallCheck(this, Cache);

        this.session = e;
      }

      _createClass(Cache, [{
        key: "clear",
        value: function clear() {
          this.session.clearCache();
        }
      }, {
        key: "resetCacheControl",
        value: function resetCacheControl() {
          this.setCacheControl('');
        }
      }, {
        key: "exemptPageFromCache",
        value: function exemptPageFromCache() {
          this.setCacheControl('no-cache');
        }
      }, {
        key: "exemptPageFromPreview",
        value: function exemptPageFromPreview() {
          this.setCacheControl('no-preview');
        }
      }, {
        key: "setCacheControl",
        value: function setCacheControl(e) {
          var t;
          var s;
          (s = R(t = 'turbo-cache-control')) || ((s = document.createElement('meta')).setAttribute('name', t), document.head.appendChild(s)), s.setAttribute('content', e);
        }
      }]);

      return Cache;
    }();

    var I = {
      after: function after() {
        var _this33 = this;

        this.targetElements.forEach(function (e) {
          var t;
          return null === (t = e.parentElement) || void 0 === t ? void 0 : t.insertBefore(_this33.templateContent, e.nextSibling);
        });
      },
      append: function append() {
        var _this34 = this;

        this.removeDuplicateTargetChildren(), this.targetElements.forEach(function (e) {
          return e.append(_this34.templateContent);
        });
      },
      before: function before() {
        var _this35 = this;

        this.targetElements.forEach(function (e) {
          var t;
          return null === (t = e.parentElement) || void 0 === t ? void 0 : t.insertBefore(_this35.templateContent, e);
        });
      },
      prepend: function prepend() {
        var _this36 = this;

        this.removeDuplicateTargetChildren(), this.targetElements.forEach(function (e) {
          return e.prepend(_this36.templateContent);
        });
      },
      remove: function remove() {
        this.targetElements.forEach(function (e) {
          return e.remove();
        });
      },
      replace: function replace() {
        var _this37 = this;

        this.targetElements.forEach(function (e) {
          return e.replaceWith(_this37.templateContent);
        });
      },
      update: function update() {
        var _this38 = this;

        this.targetElements.forEach(function (e) {
          return e.replaceChildren(_this38.templateContent);
        });
      }
    },
        M = new Session(),
        H = new Cache(M),
        q = M.navigator;

    function B() {
      M.start();
    }

    function O(e, t) {
      M.visit(e, t);
    }

    function V(e) {
      M.connectStreamSource(e);
    }

    function N(e) {
      M.disconnectStreamSource(e);
    }

    function D(e) {
      M.setProgressBarDelay(e);
    }

    var W,
        x,
        U,
        j,
        _,
        $,
        z,
        K,
        Y,
        Q,
        X = Object.freeze({
      __proto__: null,
      navigator: q,
      session: M,
      cache: H,
      PageRenderer: PageRenderer,
      PageSnapshot: PageSnapshot,
      FrameRenderer: FrameRenderer,
      start: B,
      registerAdapter: function registerAdapter(e) {
        M.registerAdapter(e);
      },
      visit: O,
      connectStreamSource: V,
      disconnectStreamSource: N,
      renderStreamMessage: function renderStreamMessage(e) {
        M.renderStreamMessage(e);
      },
      clearCache: function clearCache() {
        console.warn('Please replace `Turbo.clearCache()` with `Turbo.cache.clear()`. The top-level function is deprecated and will be removed in a future version of Turbo.`'), M.clearCache();
      },
      setProgressBarDelay: D,
      setConfirmMethod: function setConfirmMethod(e) {
        FormSubmission.confirmMethod = e;
      },
      setFormMode: function setFormMode(e) {
        M.setFormMode(e);
      },
      StreamActions: I,
      setCSPTrustedTypesPolicy: o
    });

    var FrameController =
    /*#__PURE__*/
    function () {
      function FrameController(e) {
        var _this39 = this;

        _classCallCheck(this, FrameController);

        this.fetchResponseLoaded = function (e) {}, this.currentFetchRequest = null, this.resolveVisitPromise = function () {}, this.connected = !1, this.hasBeenLoaded = !1, this.ignoredAttributes = new Set(), this.action = null, this.visitCachedSnapshot = function (_ref14) {
          var e = _ref14.element;
          var t = e.querySelector('#' + _this39.element.id);
          t && _this39.previousFrameElement && t.replaceChildren.apply(t, _toConsumableArray(_this39.previousFrameElement.children)), delete _this39.previousFrameElement;
        }, this.element = e, this.view = new FrameView(this, this.element), this.appearanceObserver = new AppearanceObserver(this, this.element), this.formLinkClickObserver = new FormLinkClickObserver(this, this.element), this.linkInterceptor = new LinkInterceptor(this, this.element), this.restorationIdentifier = b(), this.formSubmitObserver = new FormSubmitObserver(this, this.element);
      }

      _createClass(FrameController, [{
        key: "connect",
        value: function connect() {
          this.connected || (this.connected = !0, this.loadingStyle == U.lazy ? this.appearanceObserver.start() : this.loadSourceURL(), this.formLinkClickObserver.start(), this.linkInterceptor.start(), this.formSubmitObserver.start());
        }
      }, {
        key: "disconnect",
        value: function disconnect() {
          this.connected && (this.connected = !1, this.appearanceObserver.stop(), this.formLinkClickObserver.stop(), this.linkInterceptor.stop(), this.formSubmitObserver.stop());
        }
      }, {
        key: "disabledChanged",
        value: function disabledChanged() {
          this.loadingStyle == U.eager && this.loadSourceURL();
        }
      }, {
        key: "sourceURLChanged",
        value: function sourceURLChanged() {
          !this.isIgnoringChangesTo('src') && (this.element.isConnected && (this.complete = !1), (this.loadingStyle == U.eager || this.hasBeenLoaded) && this.loadSourceURL());
        }
      }, {
        key: "sourceURLReloaded",
        value: function sourceURLReloaded() {
          var _this40 = this;

          var e = this.element.src;
          return this.ignoringChangesToAttribute('complete', function () {
            _this40.element.removeAttribute('complete');
          }), this.element.src = null, this.element.src = e, this.element.loaded;
        }
      }, {
        key: "completeChanged",
        value: function completeChanged() {
          this.isIgnoringChangesTo('complete') || this.loadSourceURL();
        }
      }, {
        key: "loadingStyleChanged",
        value: function loadingStyleChanged() {
          this.loadingStyle == U.lazy ? this.appearanceObserver.start() : (this.appearanceObserver.stop(), this.loadSourceURL());
        }
      }, {
        key: "loadSourceURL",
        value: function loadSourceURL() {
          return regeneratorRuntime.async(function loadSourceURL$(_context31) {
            while (1) {
              switch (_context31.prev = _context31.next) {
                case 0:
                  _context31.t0 = this.enabled && this.isActive && !this.complete && this.sourceURL;

                  if (!_context31.t0) {
                    _context31.next = 7;
                    break;
                  }

                  this.element.loaded = this.visit(l(this.sourceURL));
                  this.appearanceObserver.stop();
                  _context31.next = 6;
                  return regeneratorRuntime.awrap(this.element.loaded);

                case 6:
                  this.hasBeenLoaded = !0;

                case 7:
                case "end":
                  return _context31.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "loadResponse",
        value: function loadResponse(e) {
          var t, _s18, _i14, _i13, _t17, _s19;

          return regeneratorRuntime.async(function loadResponse$(_context32) {
            while (1) {
              switch (_context32.prev = _context32.next) {
                case 0:
                  (e.redirected || e.succeeded && e.isHTML) && (this.sourceURL = e.response.url);
                  _context32.prev = 1;
                  _context32.next = 4;
                  return regeneratorRuntime.awrap(e.responseHTML);

                case 4:
                  t = _context32.sent;

                  if (!t) {
                    _context32.next = 26;
                    break;
                  }

                  if (null == n) _s18 = f(t).body;else {
                    _i14 = n.createHTML(t, e.response);
                    _s18 = f(_i14).body;
                  }
                  _context32.next = 9;
                  return regeneratorRuntime.awrap(this.extractForeignFrameElement(_s18));

                case 9:
                  _i13 = _context32.sent;

                  if (!_i13) {
                    _context32.next = 25;
                    break;
                  }

                  _t17 = new Snapshot(_i13), _s19 = new FrameRenderer(this, this.view.snapshot, _t17, FrameRenderer.renderElement, !1, !1);
                  _context32.t0 = this.view.renderPromise;

                  if (!_context32.t0) {
                    _context32.next = 16;
                    break;
                  }

                  _context32.next = 16;
                  return regeneratorRuntime.awrap(this.view.renderPromise);

                case 16:
                  this.changeHistory();
                  _context32.next = 19;
                  return regeneratorRuntime.awrap(this.view.render(_s19));

                case 19:
                  this.complete = !0;
                  M.frameRendered(e, this.element);
                  M.frameLoaded(this.element);
                  this.fetchResponseLoaded(e);
                  _context32.next = 26;
                  break;

                case 25:
                  this.willHandleFrameMissingFromResponse(e) && (console.warn("A matching frame for #".concat(this.element.id, " was missing from the response, transforming into full-page Visit.")), this.visitResponse(e.response));

                case 26:
                  _context32.next = 31;
                  break;

                case 28:
                  _context32.prev = 28;
                  _context32.t1 = _context32["catch"](1);
                  console.error(_context32.t1), this.view.invalidate();

                case 31:
                  _context32.prev = 31;

                  this.fetchResponseLoaded = function () {};

                  return _context32.finish(31);

                case 34:
                case "end":
                  return _context32.stop();
              }
            }
          }, null, this, [[1, 28, 31, 34]]);
        }
      }, {
        key: "elementAppearedInViewport",
        value: function elementAppearedInViewport(e) {
          this.pageSnapshot = PageSnapshot.fromElement(e).clone(), this.proposeVisitIfNavigatedWithAction(e, e), this.loadSourceURL();
        }
      }, {
        key: "willSubmitFormLinkToLocation",
        value: function willSubmitFormLinkToLocation(e) {
          return this.shouldInterceptNavigation(e);
        }
      }, {
        key: "submittedFormLinkToLocation",
        value: function submittedFormLinkToLocation(e, t, s) {
          var i = this.findFrameElement(e);
          i && s.setAttribute('data-turbo-frame', i.id);
        }
      }, {
        key: "shouldInterceptLinkClick",
        value: function shouldInterceptLinkClick(e, t, s) {
          return this.shouldInterceptNavigation(e) && this.frameAllowsVisitingLocation(e, l(t), s);
        }
      }, {
        key: "linkClickIntercepted",
        value: function linkClickIntercepted(e, t) {
          this.navigateFrame(e, t);
        }
      }, {
        key: "willSubmitForm",
        value: function willSubmitForm(e, t) {
          return e.closest('turbo-frame') == this.element && this.shouldInterceptNavigation(e, t);
        }
      }, {
        key: "formSubmitted",
        value: function formSubmitted(e, t) {
          this.formSubmission && this.formSubmission.stop(), this.formSubmission = new FormSubmission(this, e, t);
          var s = this.formSubmission.fetchRequest;
          this.prepareHeadersForRequest(s.headers, s), this.formSubmission.start();
        }
      }, {
        key: "prepareHeadersForRequest",
        value: function prepareHeadersForRequest(e, t) {
          var s;
          e['Turbo-Frame'] = this.id, (null === (s = this.currentNavigationElement) || void 0 === s ? void 0 : s.hasAttribute('data-turbo-stream')) && t.acceptResponseType(StreamMessage.contentType);
        }
      }, {
        key: "requestStarted",
        value: function requestStarted(e) {
          w(this.element);
        }
      }, {
        key: "requestPreventedHandlingResponse",
        value: function requestPreventedHandlingResponse(e, t) {
          this.resolveVisitPromise();
        }
      }, {
        key: "requestSucceededWithResponse",
        value: function requestSucceededWithResponse(e, t) {
          return regeneratorRuntime.async(function requestSucceededWithResponse$(_context33) {
            while (1) {
              switch (_context33.prev = _context33.next) {
                case 0:
                  _context33.next = 2;
                  return regeneratorRuntime.awrap(this.loadResponse(t));

                case 2:
                  this.resolveVisitPromise();

                case 3:
                case "end":
                  return _context33.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "requestFailedWithResponse",
        value: function requestFailedWithResponse(e, t) {
          return regeneratorRuntime.async(function requestFailedWithResponse$(_context34) {
            while (1) {
              switch (_context34.prev = _context34.next) {
                case 0:
                  console.error(t);
                  _context34.next = 3;
                  return regeneratorRuntime.awrap(this.loadResponse(t));

                case 3:
                  this.resolveVisitPromise();

                case 4:
                case "end":
                  return _context34.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "requestErrored",
        value: function requestErrored(e, t) {
          console.error(t), this.resolveVisitPromise();
        }
      }, {
        key: "requestFinished",
        value: function requestFinished(e) {
          E(this.element);
        }
      }, {
        key: "formSubmissionStarted",
        value: function formSubmissionStarted(_ref15) {
          var e = _ref15.formElement;
          w(e, this.findFrameElement(e));
        }
      }, {
        key: "formSubmissionSucceededWithResponse",
        value: function formSubmissionSucceededWithResponse(e, t) {
          var s = this.findFrameElement(e.formElement, e.submitter);
          s.delegate.proposeVisitIfNavigatedWithAction(s, e.formElement, e.submitter), s.delegate.loadResponse(t);
        }
      }, {
        key: "formSubmissionFailedWithResponse",
        value: function formSubmissionFailedWithResponse(e, t) {
          this.element.delegate.loadResponse(t);
        }
      }, {
        key: "formSubmissionErrored",
        value: function formSubmissionErrored(e, t) {
          console.error(t);
        }
      }, {
        key: "formSubmissionFinished",
        value: function formSubmissionFinished(_ref16) {
          var e = _ref16.formElement;
          E(e, this.findFrameElement(e));
        }
      }, {
        key: "allowsImmediateRender",
        value: function allowsImmediateRender(_ref17, t) {
          var e = _ref17.element;

          var _p = p('turbo:before-frame-render', {
            target: this.element,
            detail: Object.assign({
              newFrame: e
            }, t),
            cancelable: !0
          }),
              s = _p.defaultPrevented,
              i = _p.detail.render;

          return this.view.renderer && i && (this.view.renderer.renderElement = i), !s;
        }
      }, {
        key: "viewRenderedSnapshot",
        value: function viewRenderedSnapshot(e, t) {}
      }, {
        key: "preloadOnLoadLinksForView",
        value: function preloadOnLoadLinksForView(e) {
          M.preloadOnLoadLinksForView(e);
        }
      }, {
        key: "viewInvalidated",
        value: function viewInvalidated() {}
      }, {
        key: "willRenderFrame",
        value: function willRenderFrame(e, t) {
          this.previousFrameElement = e.cloneNode(!0);
        }
      }, {
        key: "visit",
        value: function visit(e) {
          var _this41 = this;

          var t;
          return regeneratorRuntime.async(function visit$(_context35) {
            while (1) {
              switch (_context35.prev = _context35.next) {
                case 0:
                  t = new FetchRequest(this, j.get, e, new URLSearchParams(), this.element);
                  return _context35.abrupt("return", (this.cancelInFlightNavigation(), this.currentFetchRequest = t, new Promise(function (e) {
                    _this41.resolveVisitPromise = function () {
                      _this41.resolveVisitPromise = function () {}, _this41.currentFetchRequest = null, e();
                    }, t.perform();
                  })));

                case 2:
                case "end":
                  return _context35.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "cancelInFlightNavigation",
        value: function cancelInFlightNavigation(e) {
          this.currentFetchRequest && (this.currentFetchRequest.cancel(), this.currentFetchRequest = null, e && (this.ignoringChangesToAttribute('src', function () {
            e.src = e.previousSrc, E(e);
          }), e.previousSrc && this.ignoringChangesToAttribute('complete', function () {
            e.setAttribute('complete', '');
          })));
        }
      }, {
        key: "navigateFrame",
        value: function navigateFrame(e, t, s) {
          var i = this.findFrameElement(e, s);
          this.cancelInFlightNavigation(i), this.pageSnapshot = PageSnapshot.fromElement(i).clone(), i.delegate.proposeVisitIfNavigatedWithAction(i, e, s), this.withCurrentNavigationElement(e, function () {
            i.src = t;
          });
        }
      }, {
        key: "proposeVisitIfNavigatedWithAction",
        value: function proposeVisitIfNavigatedWithAction(e, t, s) {
          var _this42 = this;

          if (this.action = function () {
            for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              e[_key6] = arguments[_key6];
            }

            var t = S.apply(void 0, ['data-turbo-action'].concat(e));
            return u(t) ? t : null;
          }(s, t, e), u(this.action)) {
            var _t18 = e.delegate.visitCachedSnapshot;

            e.delegate.fetchResponseLoaded = function (s) {
              if (e.src) {
                var _i15 = s.statusCode,
                    _r6 = s.redirected,
                    _n3 = s.response,
                    _o2 = {
                  response: {
                    statusCode: _i15,
                    redirected: _r6,
                    response: _n3,
                    responseHTML: e.ownerDocument.documentElement.outerHTML
                  },
                  visitCachedSnapshot: _t18,
                  willRender: !1,
                  updateHistory: !1,
                  restorationIdentifier: _this42.restorationIdentifier,
                  snapshot: _this42.pageSnapshot
                };
                _this42.action && (_o2.action = _this42.action), M.visit(e.src, _o2);
              }
            };
          }
        }
      }, {
        key: "changeHistory",
        value: function changeHistory() {
          if (this.action) {
            var e = y(this.action);
            M.history.update(e, l(this.element.src || ''), this.restorationIdentifier);
          }
        }
      }, {
        key: "willHandleFrameMissingFromResponse",
        value: function willHandleFrameMissingFromResponse(e) {
          var _this43 = this;

          this.element.setAttribute('complete', '');

          var t = e.response,
              s = function s(e) {
            var t,
                _args36 = arguments;
            return regeneratorRuntime.async(function s$(_context36) {
              while (1) {
                switch (_context36.prev = _context36.next) {
                  case 0:
                    t = _args36.length > 1 && _args36[1] !== undefined ? _args36[1] : {};
                    e instanceof Response ? _this43.visitResponse(e) : M.visit(e, t);

                  case 2:
                  case "end":
                    return _context36.stop();
                }
              }
            });
          };

          return !p('turbo:frame-missing', {
            target: this.element,
            detail: {
              response: t,
              visit: s
            },
            cancelable: !0
          }).defaultPrevented;
        }
      }, {
        key: "visitResponse",
        value: function visitResponse(e) {
          var t, s, i, r, n;
          return regeneratorRuntime.async(function visitResponse$(_context37) {
            while (1) {
              switch (_context37.prev = _context37.next) {
                case 0:
                  t = new FetchResponse(e);
                  _context37.next = 3;
                  return regeneratorRuntime.awrap(t.responseHTML);

                case 3:
                  s = _context37.sent;
                  i = t.location;
                  r = t.redirected;
                  n = t.statusCode;
                  return _context37.abrupt("return", M.visit(i, {
                    response: {
                      redirected: r,
                      statusCode: n,
                      response: e,
                      responseHTML: s
                    }
                  }));

                case 8:
                case "end":
                  return _context37.stop();
              }
            }
          });
        }
      }, {
        key: "findFrameElement",
        value: function findFrameElement(e, t) {
          var s;
          return null !== (s = J(S('data-turbo-frame', t, e) || this.element.getAttribute('target'))) && void 0 !== s ? s : this.element;
        }
      }, {
        key: "extractForeignFrameElement",
        value: function extractForeignFrameElement(e) {
          var t, s;
          return regeneratorRuntime.async(function extractForeignFrameElement$(_context38) {
            while (1) {
              switch (_context38.prev = _context38.next) {
                case 0:
                  s = CSS.escape(this.id);
                  _context38.prev = 1;

                  if (!(t = G(e.querySelector("turbo-frame#".concat(s)), this.sourceURL))) {
                    _context38.next = 4;
                    break;
                  }

                  return _context38.abrupt("return", t);

                case 4:
                  if (!(t = G(e.querySelector("turbo-frame[src][recurse~=".concat(s, "]")), this.sourceURL))) {
                    _context38.next = 10;
                    break;
                  }

                  _context38.next = 7;
                  return regeneratorRuntime.awrap(t.loaded);

                case 7:
                  _context38.next = 9;
                  return regeneratorRuntime.awrap(this.extractForeignFrameElement(t));

                case 9:
                  return _context38.abrupt("return", _context38.sent);

                case 10:
                  _context38.next = 15;
                  break;

                case 12:
                  _context38.prev = 12;
                  _context38.t0 = _context38["catch"](1);
                  return _context38.abrupt("return", (console.error(_context38.t0), new FrameElement()));

                case 15:
                  return _context38.abrupt("return", null);

                case 16:
                case "end":
                  return _context38.stop();
              }
            }
          }, null, this, [[1, 12]]);
        }
      }, {
        key: "formActionIsVisitable",
        value: function formActionIsVisitable(e, t) {
          var s = c(e, t);
          return M.locationIsVisitable(l(s), this.rootLocation);
        }
      }, {
        key: "shouldInterceptNavigation",
        value: function shouldInterceptNavigation(e, t) {
          var s = S('data-turbo-frame', t, e) || this.element.getAttribute('target');
          if (e instanceof HTMLFormElement && !this.formActionIsVisitable(e, t) || !this.enabled || '_top' == s) return !1;

          if (s) {
            var _e18 = J(s);

            if (_e18) return !_e18.disabled;
          }

          return !!(M.elementIsNavigatable(e) && (!t || M.elementIsNavigatable(t)));
        }
      }, {
        key: "frameAllowsVisitingLocation",
        value: function frameAllowsVisitingLocation(e, _ref18, s) {
          var t = _ref18.href;
          return !p('turbo:frame-click', {
            target: e,
            detail: {
              url: t,
              originalEvent: s
            },
            cancelable: !0
          }).defaultPrevented;
        }
      }, {
        key: "isIgnoringChangesTo",
        value: function isIgnoringChangesTo(e) {
          return this.ignoredAttributes.has(e);
        }
      }, {
        key: "ignoringChangesToAttribute",
        value: function ignoringChangesToAttribute(e, t) {
          this.ignoredAttributes.add(e), t(), this.ignoredAttributes["delete"](e);
        }
      }, {
        key: "withCurrentNavigationElement",
        value: function withCurrentNavigationElement(e, t) {
          this.currentNavigationElement = e, t(), delete this.currentNavigationElement;
        }
      }, {
        key: "id",
        get: function get() {
          return this.element.id;
        }
      }, {
        key: "enabled",
        get: function get() {
          return !this.element.disabled;
        }
      }, {
        key: "sourceURL",
        get: function get() {
          if (this.element.src) return this.element.src;
        },
        set: function set(e) {
          var _this44 = this;

          this.ignoringChangesToAttribute('src', function () {
            _this44.element.src = null != e ? e : null;
          });
        }
      }, {
        key: "loadingStyle",
        get: function get() {
          return this.element.loading;
        }
      }, {
        key: "isLoading",
        get: function get() {
          return void 0 !== this.formSubmission || void 0 !== this.resolveVisitPromise();
        }
      }, {
        key: "complete",
        get: function get() {
          return this.element.hasAttribute('complete');
        },
        set: function set(e) {
          var _this45 = this;

          this.ignoringChangesToAttribute('complete', function () {
            e ? (_this45.element.setAttribute('complete', ''), _this45.element.previousSrc = _this45.element.src) : _this45.element.removeAttribute('complete');
          });
        }
      }, {
        key: "isActive",
        get: function get() {
          return this.element.isActive && this.connected;
        }
      }, {
        key: "rootLocation",
        get: function get() {
          var e;
          var t = this.element.ownerDocument.querySelector('meta[name="turbo-root"]');
          return l(null !== (e = null == t ? void 0 : t.content) && void 0 !== e ? e : '/');
        }
      }]);

      return FrameController;
    }();

    function J(e) {
      if (null != e) {
        var t = document.getElementById(e);
        if (t instanceof FrameElement) return t;
      }
    }

    function G(e, t) {
      if (e) {
        var _s20 = e.getAttribute('src');

        if (null != _s20 && null != t && l(_s20).href == l(t).href) throw Error("Matching <turbo-frame id=\"".concat(e.id, "\"> element has a source URL which references itself"));
        if (e.ownerDocument !== document && (e = document.importNode(e, !0)), e instanceof FrameElement) return e.connectedCallback(), e.disconnectedCallback(), e;
      }
    }

    var StreamElement =
    /*#__PURE__*/
    function (_HTMLElement2) {
      _inherits(StreamElement, _HTMLElement2);

      function StreamElement() {
        _classCallCheck(this, StreamElement);

        return _possibleConstructorReturn(this, _getPrototypeOf(StreamElement).apply(this, arguments));
      }

      _createClass(StreamElement, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          return regeneratorRuntime.async(function connectedCallback$(_context39) {
            while (1) {
              switch (_context39.prev = _context39.next) {
                case 0:
                  _context39.prev = 0;
                  _context39.next = 3;
                  return regeneratorRuntime.awrap(this.render());

                case 3:
                  _context39.next = 8;
                  break;

                case 5:
                  _context39.prev = 5;
                  _context39.t0 = _context39["catch"](0);
                  console.error(_context39.t0);

                case 8:
                  _context39.prev = 8;
                  this.disconnect();
                  return _context39.finish(8);

                case 11:
                case "end":
                  return _context39.stop();
              }
            }
          }, null, this, [[0, 5, 8, 11]]);
        }
      }, {
        key: "render",
        value: function render() {
          var _this46 = this;

          var e;
          return regeneratorRuntime.async(function render$(_context41) {
            while (1) {
              switch (_context41.prev = _context41.next) {
                case 0:
                  return _context41.abrupt("return", null !== (e = this.renderPromise) && void 0 !== e ? e : this.renderPromise = function _callee6() {
                    var e;
                    return regeneratorRuntime.async(function _callee6$(_context40) {
                      while (1) {
                        switch (_context40.prev = _context40.next) {
                          case 0:
                            e = _this46.beforeRenderEvent;
                            _context40.t0 = _this46.dispatchEvent(e);

                            if (!_context40.t0) {
                              _context40.next = 7;
                              break;
                            }

                            _context40.next = 5;
                            return regeneratorRuntime.awrap(g());

                          case 5:
                            _context40.next = 7;
                            return regeneratorRuntime.awrap(e.detail.render(_this46));

                          case 7:
                          case "end":
                            return _context40.stop();
                        }
                      }
                    });
                  }());

                case 1:
                case "end":
                  return _context41.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "disconnect",
        value: function disconnect() {
          try {
            this.remove();
          } catch (e) {}
        }
      }, {
        key: "removeDuplicateTargetChildren",
        value: function removeDuplicateTargetChildren() {
          this.duplicateChildren.forEach(function (e) {
            return e.remove();
          });
        }
      }, {
        key: "raise",
        value: function raise(e) {
          throw Error("".concat(this.description, ": ").concat(e));
        }
      }, {
        key: "duplicateChildren",
        get: function get() {
          var e;

          var t = this.targetElements.flatMap(function (e) {
            return _toConsumableArray(e.children);
          }).filter(function (e) {
            return !!e.id;
          }),
              s = _toConsumableArray((null === (e = this.templateContent) || void 0 === e ? void 0 : e.children) || []).filter(function (e) {
            return !!e.id;
          }).map(function (e) {
            return e.id;
          });

          return t.filter(function (e) {
            return s.includes(e.id);
          });
        }
      }, {
        key: "performAction",
        get: function get() {
          if (this.action) {
            var e = I[this.action];
            if (e) return e;
            this.raise('unknown action');
          }

          this.raise('action attribute is missing');
        }
      }, {
        key: "targetElements",
        get: function get() {
          return this.target ? this.targetElementsById : this.targets ? this.targetElementsByQuery : void this.raise('target or targets attribute is missing');
        }
      }, {
        key: "templateContent",
        get: function get() {
          return this.templateElement.content.cloneNode(!0);
        }
      }, {
        key: "templateElement",
        get: function get() {
          if (null === this.firstElementChild) {
            var e = this.ownerDocument.createElement('template');
            return this.appendChild(e), e;
          }

          if (this.firstElementChild instanceof HTMLTemplateElement) return this.firstElementChild;
          this.raise('first child element must be a <template> element');
        }
      }, {
        key: "action",
        get: function get() {
          return this.getAttribute('action');
        }
      }, {
        key: "target",
        get: function get() {
          return this.getAttribute('target');
        }
      }, {
        key: "targets",
        get: function get() {
          return this.getAttribute('targets');
        }
      }, {
        key: "description",
        get: function get() {
          var e, t;
          return null !== (t = (null !== (e = this.outerHTML.match(/<[^>]+>/)) && void 0 !== e ? e : [])[0]) && void 0 !== t ? t : '<turbo-stream>';
        }
      }, {
        key: "beforeRenderEvent",
        get: function get() {
          return new CustomEvent('turbo:before-stream-render', {
            bubbles: !0,
            cancelable: !0,
            detail: {
              newStream: this,
              render: StreamElement.renderElement
            }
          });
        }
      }, {
        key: "targetElementsById",
        get: function get() {
          var e;
          var t = null === (e = this.ownerDocument) || void 0 === e ? void 0 : e.getElementById(this.target);
          return null !== t ? [t] : [];
        }
      }, {
        key: "targetElementsByQuery",
        get: function get() {
          var e;
          var t = null === (e = this.ownerDocument) || void 0 === e ? void 0 : e.querySelectorAll(this.targets);
          return 0 !== t.length ? Array.prototype.slice.call(t) : [];
        }
      }], [{
        key: "renderElement",
        value: function renderElement(e) {
          return regeneratorRuntime.async(function renderElement$(_context42) {
            while (1) {
              switch (_context42.prev = _context42.next) {
                case 0:
                  _context42.next = 2;
                  return regeneratorRuntime.awrap(e.performAction());

                case 2:
                case "end":
                  return _context42.stop();
              }
            }
          });
        }
      }]);

      return StreamElement;
    }(_wrapNativeSuper(HTMLElement));

    var StreamSourceElement =
    /*#__PURE__*/
    function (_HTMLElement3) {
      _inherits(StreamSourceElement, _HTMLElement3);

      function StreamSourceElement() {
        var _this47;

        _classCallCheck(this, StreamSourceElement);

        _this47 = _possibleConstructorReturn(this, _getPrototypeOf(StreamSourceElement).apply(this, arguments)), _this47.streamSource = null;
        return _this47;
      }

      _createClass(StreamSourceElement, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          this.streamSource = this.src.match(/^ws{1,2}:/) ? new WebSocket(this.src) : new EventSource(this.src), V(this.streamSource);
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          this.streamSource && N(this.streamSource);
        }
      }, {
        key: "src",
        get: function get() {
          return this.getAttribute('src') || '';
        }
      }]);

      return StreamSourceElement;
    }(_wrapNativeSuper(HTMLElement));

    FrameElement.delegateConstructor = FrameController, void 0 === customElements.get('turbo-frame') && customElements.define('turbo-frame', FrameElement), void 0 === customElements.get('turbo-stream') && customElements.define('turbo-stream', StreamElement), void 0 === customElements.get('turbo-stream-source') && customElements.define('turbo-stream-source', StreamSourceElement), function () {
      var e = document.currentScript;
      if (e && !e.hasAttribute('data-turbo-suppress-warning')) for (e = e.parentElement; e;) {
        if (e == document.body) return console.warn(v(_templateObject2()), e.outerHTML);
        e = e.parentElement;
      }
    }(), window.Turbo = X, B();
  }
}]);
//# sourceMappingURL=test.dev.js.map
