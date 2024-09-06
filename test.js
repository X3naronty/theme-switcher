'use strict';
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
  ['vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js'],
  {
    7332: (e, t, s) => {
      s.d(t, {
        H5: () => PageRenderer,
        Uz: () => D,
        YR: () => O,
        dK: () => o,
        gM: () => q,
        session: () => M,
      }),
        (function () {
          if (
            void 0 === window.Reflect ||
            void 0 === window.customElements ||
            window.customElements.polyfillWrapFlushCallback
          )
            return;
          let e = HTMLElement;
          (window.HTMLElement = {
            HTMLElement: function () {
              return Reflect.construct(e, [], this.constructor);
            },
          }.HTMLElement),
            (HTMLElement.prototype = e.prototype),
            (HTMLElement.prototype.constructor = HTMLElement),
            Object.setPrototypeOf(HTMLElement, e);
        })(),
        (function (e) {
          'function' != typeof e.requestSubmit &&
            (e.requestSubmit = function (e) {
              var s;
              e
                ? ((s = e) instanceof HTMLElement ||
                    t(TypeError, "parameter 1 is not of type 'HTMLElement'"),
                  'submit' == s.type ||
                    t(
                      TypeError,
                      'The specified element is not a submit button'
                    ),
                  s.form == this ||
                    t(
                      DOMException,
                      'The specified element is not owned by this form element',
                      'NotFoundError'
                    ),
                  e.click())
                : (((e = document.createElement('input')).type = 'submit'),
                  (e.hidden = !0),
                  this.appendChild(e),
                  e.click(),
                  this.removeChild(e));
            });
          function t(e, t, s) {
            throw new e(
              "Failed to execute 'requestSubmit' on 'HTMLFormElement': " +
                t +
                '.',
              s
            );
          }
        })(HTMLFormElement.prototype);
      let i = new WeakMap();
      function r(e) {
        let t = (function (e) {
          let t =
              e instanceof Element
                ? e
                : e instanceof Node
                ? e.parentElement
                : null,
            s = t ? t.closest('input, button') : null;
          return (null == s ? void 0 : s.type) == 'submit' ? s : null;
        })(e.target);
        t && t.form && i.set(t.form, t);
      }
      !(function () {
        let e;
        if (!('submitter' in Event.prototype)) {
          if (
            'SubmitEvent' in window &&
            /Apple Computer/.test(navigator.vendor)
          )
            e = window.SubmitEvent.prototype;
          else {
            if ('SubmitEvent' in window) return;
            e = window.Event.prototype;
          }
          addEventListener('click', r, !0),
            Object.defineProperty(e, 'submitter', {
              get() {
                if (
                  'submit' == this.type &&
                  this.target instanceof HTMLFormElement
                )
                  return i.get(this.target);
              },
            });
        }
      })();
      let n = null;
      function o(e) {
        n = e;
      }
      let a =
        null !==
          (x =
            null === (W = globalThis.trustedTypes) || void 0 === W
              ? void 0
              : W.emptyHTML) && void 0 !== x
          ? x
          : '';
      !(function (e) {
        (e.eager = 'eager'), (e.lazy = 'lazy');
      })(U || (U = {}));
      let FrameElement = class FrameElement extends HTMLElement {
        constructor() {
          super(),
            (this.loaded = Promise.resolve()),
            (this.previousSrc = null),
            (this.delegate = new FrameElement.delegateConstructor(this));
        }
        static get observedAttributes() {
          return ['disabled', 'complete', 'loading', 'src'];
        }
        connectedCallback() {
          this.delegate.connect();
        }
        disconnectedCallback() {
          this.delegate.disconnect();
        }
        reload() {
          return this.delegate.sourceURLReloaded();
        }
        attributeChangedCallback(e) {
          'loading' == e
            ? this.delegate.loadingStyleChanged()
            : 'complete' == e
            ? this.delegate.completeChanged()
            : 'src' == e
            ? this.delegate.sourceURLChanged()
            : this.delegate.disabledChanged();
        }
        get src() {
          return this.getAttribute('src');
        }
        set src(e) {
          if (e) {
            if (n) {
              let t = n.createScriptURL(e);
              this.setAttribute('src', t);
            } else this.setAttribute('src', e);
          } else this.removeAttribute('src');
        }
        get loading() {
          return 'lazy' === (this.getAttribute('loading') || '').toLowerCase()
            ? U.lazy
            : U.eager;
        }
        set loading(e) {
          e ? this.setAttribute('loading', e) : this.removeAttribute('loading');
        }
        get disabled() {
          return this.hasAttribute('disabled');
        }
        set disabled(e) {
          e
            ? this.setAttribute('disabled', '')
            : this.removeAttribute('disabled');
        }
        get autoscroll() {
          return this.hasAttribute('autoscroll');
        }
        set autoscroll(e) {
          e
            ? this.setAttribute('autoscroll', '')
            : this.removeAttribute('autoscroll');
        }
        get complete() {
          return !this.delegate.isLoading;
        }
        get isActive() {
          return this.ownerDocument === document && !this.isPreview;
        }
        get isPreview() {
          var e, t;
          return null ===
            (t =
              null === (e = this.ownerDocument) || void 0 === e
                ? void 0
                : e.documentElement) || void 0 === t
            ? void 0
            : t.hasAttribute('data-turbo-preview');
        }
      };
      function l(e) {
        return new URL(e.toString(), document.baseURI);
      }
      function h(e) {
        let t;
        return e.hash
          ? e.hash.slice(1)
          : (t = e.href.match(/#(.*)$/))
          ? t[1]
          : void 0;
      }
      function c(e, t) {
        return l(
          (null == t ? void 0 : t.getAttribute('formaction')) ||
            e.getAttribute('action') ||
            e.action
        );
      }
      function d(e) {
        let t = h(e);
        return null != t ? e.href.slice(0, -(t.length + 1)) : e.href;
      }
      let FetchResponse = class FetchResponse {
        constructor(e) {
          this.response = e;
        }
        get succeeded() {
          return this.response.ok;
        }
        get failed() {
          return !this.succeeded;
        }
        get clientError() {
          return this.statusCode >= 400 && this.statusCode <= 499;
        }
        get serverError() {
          return this.statusCode >= 500 && this.statusCode <= 599;
        }
        get redirected() {
          return this.response.redirected;
        }
        get location() {
          return l(this.response.url);
        }
        get isHTML() {
          return (
            this.contentType &&
            this.contentType.match(
              /^(?:text\/([^\s;,]+\b)?html|application\/xhtml\+xml)\b/
            )
          );
        }
        get statusCode() {
          return this.response.status;
        }
        get contentType() {
          return this.header('Content-Type');
        }
        get responseText() {
          return this.response.clone().text();
        }
        get responseHTML() {
          return this.isHTML
            ? this.response.clone().text()
            : Promise.resolve(void 0);
        }
        header(e) {
          return this.response.headers.get(e);
        }
      };
      function u(e) {
        return 'advance' == e || 'replace' == e || 'restore' == e;
      }
      function m(e) {
        if ('false' == e.getAttribute('data-turbo-eval')) return e;
        {
          let t = document.createElement('script'),
            s = L('csp-nonce');
          return (
            s && (t.nonce = s),
            null !== e.textContent &&
              (null !== n
                ? (t.textContent = n.createScript(e.textContent))
                : (t.textContent = e.textContent)),
            (t.async = !1),
            (function (e, t) {
              for (let { name: s, value: i } of t.attributes)
                if ('src' === s && null !== n) {
                  let t = n.createScriptURL(i);
                  e.setAttribute(s, t);
                } else e.setAttribute(s, i);
            })(t, e),
            t
          );
        }
      }
      function p(e, { target: t, cancelable: s, detail: i } = {}) {
        let r = new CustomEvent(e, { cancelable: s, bubbles: !0, detail: i });
        return (
          t && t.isConnected
            ? t.dispatchEvent(r)
            : document.documentElement.dispatchEvent(r),
          r
        );
      }
      function g() {
        return new Promise((e) => requestAnimationFrame(() => e()));
      }
      function f(e = '') {
        return new DOMParser().parseFromString(e, 'text/html');
      }
      function v(e, ...t) {
        let s = e
            .reduce((e, s, i) => e + s + (void 0 == t[i] ? '' : t[i]), '')
            .replace(/^\n/, '')
            .split('\n'),
          i = s[0].match(/^\s+/),
          r = i ? i[0].length : 0;
        return s.map((e) => e.slice(r)).join('\n');
      }
      function b() {
        return Array.from({ length: 36 })
          .map((e, t) =>
            8 == t || 13 == t || 18 == t || 23 == t
              ? '-'
              : 14 == t
              ? '4'
              : 19 == t
              ? (Math.floor(4 * Math.random()) + 8).toString(16)
              : Math.floor(15 * Math.random()).toString(16)
          )
          .join('');
      }
      function S(e, ...t) {
        for (let s of t.map((t) => (null == t ? void 0 : t.getAttribute(e))))
          if ('string' == typeof s) return s;
        return null;
      }
      function w(...e) {
        for (let t of e)
          'turbo-frame' == t.localName && t.setAttribute('busy', ''),
            t.setAttribute('aria-busy', 'true');
      }
      function E(...e) {
        for (let t of e)
          'turbo-frame' == t.localName && t.removeAttribute('busy'),
            t.removeAttribute('aria-busy');
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
        return document.querySelector(`meta[name="${e}"]`);
      }
      function L(e) {
        let t = R(e);
        return t && t.content;
      }
      !(function (e) {
        (e[(e.get = 0)] = 'get'),
          (e[(e.post = 1)] = 'post'),
          (e[(e.put = 2)] = 'put'),
          (e[(e.patch = 3)] = 'patch'),
          (e[(e.delete = 4)] = 'delete');
      })(j || (j = {}));
      let FetchRequest = class FetchRequest {
        constructor(e, t, s, i = new URLSearchParams(), r = null) {
          (this.abortController = new AbortController()),
            (this.resolveRequestPromise = (e) => {}),
            (this.delegate = e),
            (this.method = t),
            (this.headers = this.defaultHeaders),
            (this.body = i),
            (this.url = s),
            (this.target = r);
        }
        get location() {
          return this.url;
        }
        get params() {
          return this.url.searchParams;
        }
        get entries() {
          return this.body ? Array.from(this.body.entries()) : [];
        }
        cancel() {
          this.abortController.abort();
        }
        async perform() {
          var e, t;
          let { fetchOptions: s } = this;
          null === (t = (e = this.delegate).prepareHeadersForRequest) ||
            void 0 === t ||
            t.call(e, this.headers, this),
            await this.allowRequestToBeIntercepted(s);
          try {
            this.delegate.requestStarted(this);
            let e = await fetch(this.url.href, s);
            return await this.receive(e);
          } catch (e) {
            if ('AbortError' !== e.name)
              throw (
                (this.willDelegateErrorHandling(e) &&
                  this.delegate.requestErrored(this, e),
                e)
              );
          } finally {
            this.delegate.requestFinished(this);
          }
        }
        async receive(e) {
          let t = new FetchResponse(e);
          return (
            p('turbo:before-fetch-response', {
              cancelable: !0,
              detail: { fetchResponse: t },
              target: this.target,
            }).defaultPrevented
              ? this.delegate.requestPreventedHandlingResponse(this, t)
              : t.succeeded
              ? this.delegate.requestSucceededWithResponse(this, t)
              : this.delegate.requestFailedWithResponse(this, t),
            t
          );
        }
        get fetchOptions() {
          var e;
          return {
            method: j[this.method].toUpperCase(),
            credentials: 'same-origin',
            headers: this.headers,
            redirect: 'follow',
            body: this.isIdempotent ? null : this.body,
            signal: this.abortSignal,
            referrer:
              null === (e = this.delegate.referrer) || void 0 === e
                ? void 0
                : e.href,
          };
        }
        get defaultHeaders() {
          return { Accept: 'text/html, application/xhtml+xml' };
        }
        get isIdempotent() {
          return this.method == j.get;
        }
        get abortSignal() {
          return this.abortController.signal;
        }
        acceptResponseType(e) {
          this.headers.Accept = [e, this.headers.Accept].join(', ');
        }
        async allowRequestToBeIntercepted(e) {
          let t = new Promise((e) => (this.resolveRequestPromise = e));
          p('turbo:before-fetch-request', {
            cancelable: !0,
            detail: {
              fetchOptions: e,
              url: this.url,
              resume: this.resolveRequestPromise,
            },
            target: this.target,
          }).defaultPrevented && (await t);
        }
        willDelegateErrorHandling(e) {
          return !p('turbo:fetch-request-error', {
            target: this.target,
            cancelable: !0,
            detail: { request: this, error: e },
          }).defaultPrevented;
        }
      };
      let AppearanceObserver = class AppearanceObserver {
        constructor(e, t) {
          (this.started = !1),
            (this.intersect = (e) => {
              let t = e.slice(-1)[0];
              (null == t ? void 0 : t.isIntersecting) &&
                this.delegate.elementAppearedInViewport(this.element);
            }),
            (this.delegate = e),
            (this.element = t),
            (this.intersectionObserver = new IntersectionObserver(
              this.intersect
            ));
        }
        start() {
          this.started ||
            ((this.started = !0),
            this.intersectionObserver.observe(this.element));
        }
        stop() {
          this.started &&
            ((this.started = !1),
            this.intersectionObserver.unobserve(this.element));
        }
      };
      let StreamMessage = class StreamMessage {
        constructor(e) {
          this.fragment = (function (e) {
            for (let t of e.querySelectorAll('turbo-stream')) {
              let e = document.importNode(t, !0);
              for (let t of e.templateElement.content.querySelectorAll(
                'script'
              ))
                'application/json' !== t.type && t.replaceWith(m(t));
              t.replaceWith(e);
            }
            return e;
          })(e);
        }
        static wrap(e) {
          return 'string' == typeof e
            ? new this(
                (function (e) {
                  let t = document.createElement('template');
                  return (t.innerHTML = e), t.content;
                })(e)
              )
            : e;
        }
      };
      (StreamMessage.contentType = 'text/vnd.turbo-stream.html'),
        (function (e) {
          (e[(e.initialized = 0)] = 'initialized'),
            (e[(e.requesting = 1)] = 'requesting'),
            (e[(e.waiting = 2)] = 'waiting'),
            (e[(e.receiving = 3)] = 'receiving'),
            (e[(e.stopping = 4)] = 'stopping'),
            (e[(e.stopped = 5)] = 'stopped');
        })(_ || (_ = {})),
        (function (e) {
          (e.urlEncoded = 'application/x-www-form-urlencoded'),
            (e.multipart = 'multipart/form-data'),
            (e.plain = 'text/plain');
        })($ || ($ = {}));
      let FormSubmission = class FormSubmission {
        constructor(e, t, s, i = !1) {
          (this.state = _.initialized),
            (this.delegate = e),
            (this.formElement = t),
            (this.submitter = s),
            (this.formData = (function (e, t) {
              let s = new FormData(e),
                i = null == t ? void 0 : t.getAttribute('name'),
                r = null == t ? void 0 : t.getAttribute('value');
              return i && s.append(i, r || ''), s;
            })(t, s)),
            (this.location = l(this.action)),
            this.method == j.get &&
              (function (e, t) {
                let s = new URLSearchParams();
                for (let [e, i] of t) i instanceof File || s.append(e, i);
                e.search = s.toString();
              })(this.location, [...this.body.entries()]),
            (this.fetchRequest = new FetchRequest(
              this,
              this.method,
              this.location,
              this.body,
              this.formElement
            )),
            (this.mustRedirect = i);
        }
        static confirmMethod(e, t, s) {
          return Promise.resolve(confirm(e));
        }
        get method() {
          var e;
          return (
            (function (e) {
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
                  return j.delete;
              }
            })(
              (
                (null === (e = this.submitter) || void 0 === e
                  ? void 0
                  : e.getAttribute('formmethod')) ||
                this.formElement.getAttribute('method') ||
                ''
              ).toLowerCase()
            ) || j.get
          );
        }
        get action() {
          var e;
          let t =
            'string' == typeof this.formElement.action
              ? this.formElement.action
              : null;
          return (
            null === (e = this.submitter) || void 0 === e
              ? void 0
              : e.hasAttribute('formaction')
          )
            ? this.submitter.getAttribute('formaction') || ''
            : this.formElement.getAttribute('action') || t || '';
        }
        get body() {
          return this.enctype == $.urlEncoded || this.method == j.get
            ? new URLSearchParams(this.stringFormData)
            : this.formData;
        }
        get enctype() {
          var e;
          return (function (e) {
            switch (e.toLowerCase()) {
              case $.multipart:
                return $.multipart;
              case $.plain:
                return $.plain;
              default:
                return $.urlEncoded;
            }
          })(
            (null === (e = this.submitter) || void 0 === e
              ? void 0
              : e.getAttribute('formenctype')) || this.formElement.enctype
          );
        }
        get isIdempotent() {
          return this.fetchRequest.isIdempotent;
        }
        get stringFormData() {
          return [...this.formData].reduce(
            (e, [t, s]) => e.concat('string' == typeof s ? [[t, s]] : []),
            []
          );
        }
        async start() {
          let { initialized: e, requesting: t } = _,
            s = S('data-turbo-confirm', this.submitter, this.formElement);
          if (
            ('string' != typeof s ||
              (await FormSubmission.confirmMethod(
                s,
                this.formElement,
                this.submitter
              ))) &&
            this.state == e
          )
            return (this.state = t), this.fetchRequest.perform();
        }
        stop() {
          let { stopping: e, stopped: t } = _;
          if (this.state != e && this.state != t)
            return (this.state = e), this.fetchRequest.cancel(), !0;
        }
        prepareHeadersForRequest(e, t) {
          if (!t.isIdempotent) {
            let t =
              (function (e) {
                if (null != e) {
                  let t = (
                    document.cookie ? document.cookie.split('; ') : []
                  ).find((t) => t.startsWith(e));
                  if (t) {
                    let e = t.split('=').slice(1).join('=');
                    return e ? decodeURIComponent(e) : void 0;
                  }
                }
              })(L('csrf-param')) || L('csrf-token');
            t && (e['X-CSRF-Token'] = t);
          }
          this.requestAcceptsTurboStreamResponse(t) &&
            t.acceptResponseType(StreamMessage.contentType);
        }
        requestStarted(e) {
          var t;
          (this.state = _.waiting),
            null === (t = this.submitter) ||
              void 0 === t ||
              t.setAttribute('disabled', ''),
            p('turbo:submit-start', {
              target: this.formElement,
              detail: { formSubmission: this },
            }),
            this.delegate.formSubmissionStarted(this);
        }
        requestPreventedHandlingResponse(e, t) {
          this.result = { success: t.succeeded, fetchResponse: t };
        }
        requestSucceededWithResponse(e, t) {
          if (t.clientError || t.serverError)
            this.delegate.formSubmissionFailedWithResponse(this, t);
          else {
            var s;
            if (
              this.requestMustRedirect(e) &&
              200 == (s = t).statusCode &&
              !s.redirected
            ) {
              let e = Error('Form responses must redirect to another location');
              this.delegate.formSubmissionErrored(this, e);
            } else
              (this.state = _.receiving),
                (this.result = { success: !0, fetchResponse: t }),
                this.delegate.formSubmissionSucceededWithResponse(this, t);
          }
        }
        requestFailedWithResponse(e, t) {
          (this.result = { success: !1, fetchResponse: t }),
            this.delegate.formSubmissionFailedWithResponse(this, t);
        }
        requestErrored(e, t) {
          (this.result = { success: !1, error: t }),
            this.delegate.formSubmissionErrored(this, t);
        }
        requestFinished(e) {
          var t;
          (this.state = _.stopped),
            null === (t = this.submitter) ||
              void 0 === t ||
              t.removeAttribute('disabled'),
            p('turbo:submit-end', {
              target: this.formElement,
              detail: Object.assign({ formSubmission: this }, this.result),
            }),
            this.delegate.formSubmissionFinished(this);
        }
        requestMustRedirect(e) {
          return !e.isIdempotent && this.mustRedirect;
        }
        requestAcceptsTurboStreamResponse(e) {
          return (
            !e.isIdempotent ||
            (function (e, ...t) {
              return t.some((t) => t && t.hasAttribute(e));
            })('data-turbo-stream', this.submitter, this.formElement)
          );
        }
      };
      let Snapshot = class Snapshot {
        constructor(e) {
          this.element = e;
        }
        get activeElement() {
          return this.element.ownerDocument.activeElement;
        }
        get children() {
          return [...this.element.children];
        }
        hasAnchor(e) {
          return null != this.getElementForAnchor(e);
        }
        getElementForAnchor(e) {
          return e
            ? this.element.querySelector(`[id='${e}'], a[name='${e}']`)
            : null;
        }
        get isConnected() {
          return this.element.isConnected;
        }
        get firstAutofocusableElement() {
          for (let e of this.element.querySelectorAll('[autofocus]'))
            if (
              null ==
              e.closest(
                '[inert], :disabled, [hidden], details:not([open]), dialog:not([open])'
              )
            )
              return e;
          return null;
        }
        get permanentElements() {
          return A(this.element);
        }
        getPermanentElementById(e) {
          return C(this.element, e);
        }
        getPermanentElementMapForSnapshot(e) {
          let t = {};
          for (let s of this.permanentElements) {
            let { id: i } = s,
              r = e.getPermanentElementById(i);
            r && (t[i] = [s, r]);
          }
          return t;
        }
      };
      function C(e, t) {
        return e.querySelector(`#${t}[data-turbo-permanent]`);
      }
      function A(e) {
        return e.querySelectorAll('[id][data-turbo-permanent]');
      }
      let FormSubmitObserver = class FormSubmitObserver {
        constructor(e, t) {
          (this.started = !1),
            (this.submitCaptured = () => {
              this.eventTarget.removeEventListener(
                'submit',
                this.submitBubbled,
                !1
              ),
                this.eventTarget.addEventListener(
                  'submit',
                  this.submitBubbled,
                  !1
                );
            }),
            (this.submitBubbled = (e) => {
              if (!e.defaultPrevented) {
                let t = e.target instanceof HTMLFormElement ? e.target : void 0,
                  s = e.submitter || void 0;
                t &&
                  (function (e, t) {
                    return (
                      'dialog' !=
                      ((null == t ? void 0 : t.getAttribute('formmethod')) ||
                        e.getAttribute('method'))
                    );
                  })(t, s) &&
                  (function (e, t) {
                    let s =
                      (null == t ? void 0 : t.getAttribute('formtarget')) ||
                      e.target;
                    for (let e of document.getElementsByName(s))
                      if (e instanceof HTMLIFrameElement) return !1;
                    return !0;
                  })(t, s) &&
                  this.delegate.willSubmitForm(t, s) &&
                  (e.preventDefault(),
                  e.stopImmediatePropagation(),
                  this.delegate.formSubmitted(t, s));
              }
            }),
            (this.delegate = e),
            (this.eventTarget = t);
        }
        start() {
          this.started ||
            (this.eventTarget.addEventListener(
              'submit',
              this.submitCaptured,
              !0
            ),
            (this.started = !0));
        }
        stop() {
          this.started &&
            (this.eventTarget.removeEventListener(
              'submit',
              this.submitCaptured,
              !0
            ),
            (this.started = !1));
        }
      };
      let View = class View {
        constructor(e, t) {
          (this.resolveRenderPromise = (e) => {}),
            (this.resolveInterceptionPromise = (e) => {}),
            (this.delegate = e),
            (this.element = t);
        }
        scrollToAnchor(e) {
          let t = this.snapshot.getElementForAnchor(e);
          t
            ? (this.scrollToElement(t), this.focusElement(t))
            : this.scrollToPosition({ x: 0, y: 0 });
        }
        scrollToAnchorFromLocation(e) {
          this.scrollToAnchor(h(e));
        }
        scrollToElement(e) {
          e.scrollIntoView();
        }
        focusElement(e) {
          e instanceof HTMLElement &&
            (e.hasAttribute('tabindex')
              ? e.focus()
              : (e.setAttribute('tabindex', '-1'),
                e.focus(),
                e.removeAttribute('tabindex')));
        }
        scrollToPosition({ x: e, y: t }) {
          this.scrollRoot.scrollTo(e, t);
        }
        scrollToTop() {
          this.scrollToPosition({ x: 0, y: 0 });
        }
        get scrollRoot() {
          return window;
        }
        async render(e) {
          let { isPreview: t, shouldRender: s, newSnapshot: i } = e;
          if (s)
            try {
              (this.renderPromise = new Promise(
                (e) => (this.resolveRenderPromise = e)
              )),
                (this.renderer = e),
                await this.prepareToRenderSnapshot(e);
              let s = new Promise((e) => (this.resolveInterceptionPromise = e)),
                r = {
                  resume: this.resolveInterceptionPromise,
                  render: this.renderer.renderElement,
                };
              this.delegate.allowsImmediateRender(i, r) || (await s),
                await this.renderSnapshot(e),
                this.delegate.viewRenderedSnapshot(i, t),
                this.delegate.preloadOnLoadLinksForView(this.element),
                this.finishRenderingSnapshot(e);
            } finally {
              delete this.renderer,
                this.resolveRenderPromise(void 0),
                delete this.renderPromise;
            }
          else this.invalidate(e.reloadReason);
        }
        invalidate(e) {
          this.delegate.viewInvalidated(e);
        }
        async prepareToRenderSnapshot(e) {
          this.markAsPreview(e.isPreview), await e.prepareToRender();
        }
        markAsPreview(e) {
          e
            ? this.element.setAttribute('data-turbo-preview', '')
            : this.element.removeAttribute('data-turbo-preview');
        }
        async renderSnapshot(e) {
          await e.render();
        }
        finishRenderingSnapshot(e) {
          e.finishRendering();
        }
      };
      let FrameView = class FrameView extends View {
        invalidate() {
          this.element.textContent = '';
        }
        get snapshot() {
          return new Snapshot(this.element);
        }
      };
      let LinkInterceptor = class LinkInterceptor {
        constructor(e, t) {
          (this.clickBubbled = (e) => {
            this.respondsToEventTarget(e.target)
              ? (this.clickEvent = e)
              : delete this.clickEvent;
          }),
            (this.linkClicked = (e) => {
              this.clickEvent &&
                this.respondsToEventTarget(e.target) &&
                e.target instanceof Element &&
                this.delegate.shouldInterceptLinkClick(
                  e.target,
                  e.detail.url,
                  e.detail.originalEvent
                ) &&
                (this.clickEvent.preventDefault(),
                e.preventDefault(),
                this.delegate.linkClickIntercepted(
                  e.target,
                  e.detail.url,
                  e.detail.originalEvent
                )),
                delete this.clickEvent;
            }),
            (this.willVisit = (e) => {
              delete this.clickEvent;
            }),
            (this.delegate = e),
            (this.element = t);
        }
        start() {
          this.element.addEventListener('click', this.clickBubbled),
            document.addEventListener('turbo:click', this.linkClicked),
            document.addEventListener('turbo:before-visit', this.willVisit);
        }
        stop() {
          this.element.removeEventListener('click', this.clickBubbled),
            document.removeEventListener('turbo:click', this.linkClicked),
            document.removeEventListener('turbo:before-visit', this.willVisit);
        }
        respondsToEventTarget(e) {
          let t =
            e instanceof Element
              ? e
              : e instanceof Node
              ? e.parentElement
              : null;
          return t && t.closest('turbo-frame, html') == this.element;
        }
      };
      let LinkClickObserver = class LinkClickObserver {
        constructor(e, t) {
          (this.started = !1),
            (this.clickCaptured = () => {
              this.eventTarget.removeEventListener(
                'click',
                this.clickBubbled,
                !1
              ),
                this.eventTarget.addEventListener(
                  'click',
                  this.clickBubbled,
                  !1
                );
            }),
            (this.clickBubbled = (e) => {
              if (e instanceof MouseEvent && this.clickEventIsSignificant(e)) {
                let t = (e.composedPath && e.composedPath()[0]) || e.target,
                  s = this.findLinkFromClickTarget(t);
                if (
                  s &&
                  (function (e) {
                    for (let t of document.getElementsByName(e.target))
                      if (t instanceof HTMLIFrameElement) return !1;
                    return !0;
                  })(s)
                ) {
                  let t = this.getLocationForLink(s);
                  this.delegate.willFollowLinkToLocation(s, t, e) &&
                    (e.preventDefault(),
                    this.delegate.followedLinkToLocation(s, t));
                }
              }
            }),
            (this.delegate = e),
            (this.eventTarget = t);
        }
        start() {
          this.started ||
            (this.eventTarget.addEventListener('click', this.clickCaptured, !0),
            (this.started = !0));
        }
        stop() {
          this.started &&
            (this.eventTarget.removeEventListener(
              'click',
              this.clickCaptured,
              !0
            ),
            (this.started = !1));
        }
        clickEventIsSignificant(e) {
          return !(
            (e.target && e.target.isContentEditable) ||
            e.defaultPrevented ||
            e.which > 1 ||
            e.altKey ||
            e.ctrlKey ||
            e.metaKey ||
            e.shiftKey
          );
        }
        findLinkFromClickTarget(e) {
          if (e instanceof Element)
            return e.closest('a[href]:not([target^=_]):not([download])');
        }
        getLocationForLink(e) {
          return l(e.getAttribute('href') || '');
        }
      };
      let FormLinkClickObserver = class FormLinkClickObserver {
        constructor(e, t) {
          (this.delegate = e),
            (this.linkInterceptor = new LinkClickObserver(this, t));
        }
        start() {
          this.linkInterceptor.start();
        }
        stop() {
          this.linkInterceptor.stop();
        }
        willFollowLinkToLocation(e, t, s) {
          return (
            this.delegate.willSubmitFormLinkToLocation(e, t, s) &&
            e.hasAttribute('data-turbo-method')
          );
        }
        followedLinkToLocation(e, t) {
          let s = t.href,
            i = document.createElement('form');
          i.setAttribute('data-turbo', 'true'),
            i.setAttribute('action', s),
            i.setAttribute('hidden', '');
          let r = e.getAttribute('data-turbo-method');
          r && i.setAttribute('method', r);
          let n = e.getAttribute('data-turbo-frame');
          n && i.setAttribute('data-turbo-frame', n);
          let o = e.getAttribute('data-turbo-action');
          o && i.setAttribute('data-turbo-action', o);
          let a = e.getAttribute('data-turbo-confirm');
          a && i.setAttribute('data-turbo-confirm', a),
            e.hasAttribute('data-turbo-stream') &&
              i.setAttribute('data-turbo-stream', ''),
            this.delegate.submittedFormLinkToLocation(e, t, i),
            document.body.appendChild(i),
            i.addEventListener('turbo:submit-end', () => i.remove(), {
              once: !0,
            }),
            requestAnimationFrame(() => i.requestSubmit());
        }
      };
      let Bardo = class Bardo {
        constructor(e, t) {
          (this.delegate = e), (this.permanentElementMap = t);
        }
        static async preservingPermanentElements(e, t, s) {
          let i = new this(e, t);
          i.enter(), await s(), i.leave();
        }
        enter() {
          for (let e in this.permanentElementMap) {
            let [t, s] = this.permanentElementMap[e];
            this.delegate.enteringBardo(t, s),
              this.replaceNewPermanentElementWithPlaceholder(s);
          }
        }
        leave() {
          for (let e in this.permanentElementMap) {
            let [t] = this.permanentElementMap[e];
            this.replaceCurrentPermanentElementWithClone(t),
              this.replacePlaceholderWithPermanentElement(t),
              this.delegate.leavingBardo(t);
          }
        }
        replaceNewPermanentElementWithPlaceholder(e) {
          let t = (function (e) {
            let t = document.createElement('meta');
            return (
              t.setAttribute('name', 'turbo-permanent-placeholder'),
              t.setAttribute('content', e.id),
              t
            );
          })(e);
          e.replaceWith(t);
        }
        replaceCurrentPermanentElementWithClone(e) {
          let t = e.cloneNode(!0);
          e.replaceWith(t);
        }
        replacePlaceholderWithPermanentElement(e) {
          let t = this.getPlaceholderById(e.id);
          null == t || t.replaceWith(e);
        }
        getPlaceholderById(e) {
          return this.placeholders.find((t) => t.content == e);
        }
        get placeholders() {
          return [
            ...document.querySelectorAll(
              'meta[name=turbo-permanent-placeholder][content]'
            ),
          ];
        }
      };
      let Renderer = class Renderer {
        constructor(e, t, s, i, r = !0) {
          (this.activeElement = null),
            (this.currentSnapshot = e),
            (this.newSnapshot = t),
            (this.isPreview = i),
            (this.willRender = r),
            (this.renderElement = s),
            (this.promise = new Promise(
              (e, t) => (this.resolvingFunctions = { resolve: e, reject: t })
            ));
        }
        get shouldRender() {
          return !0;
        }
        get reloadReason() {}
        prepareToRender() {}
        finishRendering() {
          this.resolvingFunctions &&
            (this.resolvingFunctions.resolve(), delete this.resolvingFunctions);
        }
        async preservingPermanentElements(e) {
          await Bardo.preservingPermanentElements(
            this,
            this.permanentElementMap,
            e
          );
        }
        focusFirstAutofocusableElement() {
          let e = this.connectedSnapshot.firstAutofocusableElement;
          e && 'function' == typeof e.focus && e.focus();
        }
        enteringBardo(e) {
          !this.activeElement &&
            e.contains(this.currentSnapshot.activeElement) &&
            (this.activeElement = this.currentSnapshot.activeElement);
        }
        leavingBardo(e) {
          e.contains(this.activeElement) &&
            this.activeElement instanceof HTMLElement &&
            (this.activeElement.focus(), (this.activeElement = null));
        }
        get connectedSnapshot() {
          return this.newSnapshot.isConnected
            ? this.newSnapshot
            : this.currentSnapshot;
        }
        get currentElement() {
          return this.currentSnapshot.element;
        }
        get newElement() {
          return this.newSnapshot.element;
        }
        get permanentElementMap() {
          return this.currentSnapshot.getPermanentElementMapForSnapshot(
            this.newSnapshot
          );
        }
      };
      let FrameRenderer = class FrameRenderer extends Renderer {
        constructor(e, t, s, i, r, n = !0) {
          super(t, s, i, r, n), (this.delegate = e);
        }
        static renderElement(e, t) {
          var s;
          let i = document.createRange();
          i.selectNodeContents(e), i.deleteContents();
          let r =
            null === (s = t.ownerDocument) || void 0 === s
              ? void 0
              : s.createRange();
          r && (r.selectNodeContents(t), e.appendChild(r.extractContents()));
        }
        get shouldRender() {
          return !0;
        }
        async render() {
          await g(),
            this.preservingPermanentElements(() => {
              this.loadFrameElement();
            }),
            this.scrollFrameIntoView(),
            await g(),
            this.focusFirstAutofocusableElement(),
            await g(),
            this.activateScriptElements(),
            this.activateImageElements();
        }
        loadFrameElement() {
          this.delegate.willRenderFrame(this.currentElement, this.newElement),
            this.renderElement(this.currentElement, this.newElement);
        }
        scrollFrameIntoView() {
          if (this.currentElement.autoscroll || this.newElement.autoscroll) {
            var e, t;
            let s = this.currentElement.firstElementChild,
              i =
                'end' ==
                  (e = this.currentElement.getAttribute(
                    'data-autoscroll-block'
                  )) ||
                'start' == e ||
                'center' == e ||
                'nearest' == e
                  ? e
                  : 'end',
              r =
                'auto' ==
                  (t = this.currentElement.getAttribute(
                    'data-autoscroll-behavior'
                  )) || 'smooth' == t
                  ? t
                  : 'auto';
            if (s) return s.scrollIntoView({ block: i, behavior: r }), !0;
          }
          return !1;
        }
        activateScriptElements() {
          for (let e of this.newScriptElements) {
            if ('application/json' === e.type) continue;
            let t = m(e);
            e.replaceWith(t);
          }
        }
        activateImageElements() {
          for (let e of this.imageElements) {
            let t = (function (e) {
              if ('false' == e.getAttribute('data-turbo-eval')) return e;
              {
                let t = document.createElement('img');
                return (
                  (function (e, t) {
                    for (let { name: s, value: i } of t.attributes)
                      e.setAttribute(s, i);
                  })(t, e),
                  t
                );
              }
            })(e);
            e.replaceWith(t);
          }
        }
        get newScriptElements() {
          return this.currentElement.querySelectorAll('script');
        }
        get imageElements() {
          return this.currentElement.querySelectorAll('img');
        }
      };
      let ProgressBar = class ProgressBar {
        constructor() {
          (this.hiding = !1),
            (this.value = 0),
            (this.visible = !1),
            (this.trickle = () => {
              this.setValue(this.value + Math.random() / 100);
            }),
            (this.stylesheetElement = this.createStylesheetElement()),
            (this.progressElement = this.createProgressElement()),
            this.installStylesheetElement(),
            this.setValue(0);
        }
        static get defaultCSS() {
          return v`
      .turbo-progress-bar {
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        height: 3px;
        background: #0076ff;
        z-index: 2147483647;
        transition:
          width ${ProgressBar.animationDuration}ms ease-out,
          opacity ${ProgressBar.animationDuration / 2}ms ${
            ProgressBar.animationDuration / 2
          }ms ease-in;
        transform: translate3d(0, 0, 0);
      }
    `;
        }
        show() {
          this.visible ||
            ((this.visible = !0),
            this.installProgressElement(),
            this.startTrickling());
        }
        hide() {
          this.visible &&
            !this.hiding &&
            ((this.hiding = !0),
            this.fadeProgressElement(() => {
              this.uninstallProgressElement(),
                this.stopTrickling(),
                (this.visible = !1),
                (this.hiding = !1);
            }));
        }
        setValue(e) {
          (this.value = e), this.refresh();
        }
        installStylesheetElement() {
          document.head.insertBefore(
            this.stylesheetElement,
            document.head.firstChild
          );
        }
        installProgressElement() {
          (this.progressElement.style.width = '0'),
            (this.progressElement.style.opacity = '1'),
            document.documentElement.insertBefore(
              this.progressElement,
              document.body
            ),
            this.refresh();
        }
        fadeProgressElement(e) {
          (this.progressElement.style.opacity = '0'),
            setTimeout(e, 1.5 * ProgressBar.animationDuration);
        }
        uninstallProgressElement() {
          this.progressElement.parentNode &&
            document.documentElement.removeChild(this.progressElement);
        }
        startTrickling() {
          this.trickleInterval ||
            (this.trickleInterval = window.setInterval(
              this.trickle,
              ProgressBar.animationDuration
            ));
        }
        stopTrickling() {
          window.clearInterval(this.trickleInterval),
            delete this.trickleInterval;
        }
        refresh() {
          requestAnimationFrame(() => {
            this.progressElement.style.width = `${10 + 90 * this.value}%`;
          });
        }
        createStylesheetElement() {
          let e = document.createElement('style');
          return (
            (e.type = 'text/css'),
            (e.textContent = ProgressBar.defaultCSS),
            this.cspNonce && (e.nonce = this.cspNonce),
            e
          );
        }
        createProgressElement() {
          let e = document.createElement('div');
          return (e.className = 'turbo-progress-bar'), e;
        }
        get cspNonce() {
          return L('csp-nonce');
        }
      };
      ProgressBar.animationDuration = 300;
      let HeadSnapshot = class HeadSnapshot extends Snapshot {
        constructor() {
          super(...arguments),
            (this.detailsByOuterHTML = this.children
              .filter((e) => 'noscript' != e.localName)
              .map((e) =>
                (function (e) {
                  return (
                    e.hasAttribute('nonce') && e.setAttribute('nonce', ''), e
                  );
                })(e)
              )
              .reduce((e, t) => {
                let { outerHTML: s } = t,
                  i =
                    s in e
                      ? e[s]
                      : {
                          type: (function (e) {
                            return 'script' == e.localName
                              ? 'script'
                              : !(function (e) {
                                  let t = e.localName;
                                  return (
                                    'style' == t ||
                                    ('link' == t &&
                                      'stylesheet' == e.getAttribute('rel'))
                                  );
                                })(e)
                              ? void 0
                              : 'stylesheet';
                          })(t),
                          tracked:
                            'reload' == t.getAttribute('data-turbo-track'),
                          elements: [],
                        };
                return Object.assign(Object.assign({}, e), {
                  [s]: Object.assign(Object.assign({}, i), {
                    elements: [...i.elements, t],
                  }),
                });
              }, {}));
        }
        get trackedElementSignature() {
          return Object.keys(this.detailsByOuterHTML)
            .filter((e) => this.detailsByOuterHTML[e].tracked)
            .join('');
        }
        getScriptElementsNotInSnapshot(e) {
          return this.getElementsMatchingTypeNotInSnapshot('script', e);
        }
        getStylesheetElementsNotInSnapshot(e) {
          return this.getElementsMatchingTypeNotInSnapshot('stylesheet', e);
        }
        getElementsMatchingTypeNotInSnapshot(e, t) {
          return Object.keys(this.detailsByOuterHTML)
            .filter((e) => !(e in t.detailsByOuterHTML))
            .map((e) => this.detailsByOuterHTML[e])
            .filter(({ type: t }) => t == e)
            .map(({ elements: [e] }) => e);
        }
        get provisionalElements() {
          return Object.keys(this.detailsByOuterHTML).reduce((e, t) => {
            let {
              type: s,
              tracked: i,
              elements: r,
            } = this.detailsByOuterHTML[t];
            return null != s || i
              ? r.length > 1
                ? [...e, ...r.slice(1)]
                : e
              : [...e, ...r];
          }, []);
        }
        getMetaValue(e) {
          let t = this.findMetaElementByName(e);
          return t ? t.getAttribute('content') : null;
        }
        findMetaElementByName(e) {
          return Object.keys(this.detailsByOuterHTML).reduce((t, s) => {
            let {
              elements: [i],
            } = this.detailsByOuterHTML[s];
            return 'meta' == i.localName && i.getAttribute('name') == e ? i : t;
          }, void 0);
        }
      };
      let PageSnapshot = class PageSnapshot extends Snapshot {
        constructor(e, t) {
          super(e), (this.headSnapshot = t);
        }
        static fromResponse(e, t = a) {
          if (!e || null == n) return this.fromHTMLString(t);
          let s = n.createHTML(t, e);
          return this.fromHTMLString(s);
        }
        static fromHTMLString(e = a) {
          return this.fromDocument(f(e));
        }
        static fromElement(e) {
          return this.fromDocument(e.ownerDocument);
        }
        static fromDocument({ head: e, body: t }) {
          return new this(t, new HeadSnapshot(e));
        }
        clone() {
          let e = this.element.cloneNode(!0),
            t = this.element.querySelectorAll('select'),
            s = e.querySelectorAll('select');
          for (let [e, i] of t.entries()) {
            let t = s[e];
            for (let e of t.selectedOptions) e.selected = !1;
            for (let e of i.selectedOptions) t.options[e.index].selected = !0;
          }
          for (let t of e.querySelectorAll('input[type="password"]'))
            t.value = '';
          return new PageSnapshot(e, this.headSnapshot);
        }
        get headElement() {
          return this.headSnapshot.element;
        }
        get rootLocation() {
          var e;
          return l(
            null !== (e = this.getSetting('root')) && void 0 !== e ? e : '/'
          );
        }
        get cacheControlValue() {
          return this.getSetting('cache-control');
        }
        get isPreviewable() {
          return 'no-preview' != this.cacheControlValue;
        }
        get isCacheable() {
          return 'no-cache' != this.cacheControlValue;
        }
        get isVisitable() {
          return 'reload' != this.getSetting('visit-control');
        }
        getSetting(e) {
          return this.headSnapshot.getMetaValue(`turbo-${e}`);
        }
      };
      !(function (e) {
        (e.visitStart = 'visitStart'),
          (e.requestStart = 'requestStart'),
          (e.requestEnd = 'requestEnd'),
          (e.visitEnd = 'visitEnd');
      })(z || (z = {})),
        (function (e) {
          (e.initialized = 'initialized'),
            (e.started = 'started'),
            (e.canceled = 'canceled'),
            (e.failed = 'failed'),
            (e.completed = 'completed');
        })(K || (K = {}));
      let P = {
        action: 'advance',
        historyChanged: !1,
        visitCachedSnapshot: () => {},
        willRender: !0,
        updateHistory: !0,
        shouldCacheSnapshot: !0,
        acceptsStreamResponse: !1,
      };
      !(function (e) {
        (e[(e.networkFailure = 0)] = 'networkFailure'),
          (e[(e.timeoutFailure = -1)] = 'timeoutFailure'),
          (e[(e.contentTypeMismatch = -2)] = 'contentTypeMismatch');
      })(Y || (Y = {}));
      let Visit = class Visit {
        constructor(e, t, s, i = {}) {
          (this.identifier = b()),
            (this.timingMetrics = {}),
            (this.followedRedirect = !1),
            (this.historyChanged = !1),
            (this.scrolled = !1),
            (this.shouldCacheSnapshot = !0),
            (this.acceptsStreamResponse = !1),
            (this.snapshotCached = !1),
            (this.state = K.initialized),
            (this.delegate = e),
            (this.location = t),
            (this.restorationIdentifier = s || b());
          let {
            action: r,
            historyChanged: n,
            referrer: o,
            snapshot: a,
            snapshotHTML: l,
            response: h,
            visitCachedSnapshot: c,
            willRender: d,
            updateHistory: u,
            shouldCacheSnapshot: m,
            acceptsStreamResponse: p,
          } = Object.assign(Object.assign({}, P), i);
          (this.action = r),
            (this.historyChanged = n),
            (this.referrer = o),
            (this.snapshot = a),
            (this.snapshotHTML = l),
            (this.response = h),
            (this.isSamePage = this.delegate.locationWithActionIsSamePage(
              this.location,
              this.action
            )),
            (this.visitCachedSnapshot = c),
            (this.willRender = d),
            (this.updateHistory = u),
            (this.scrolled = !d),
            (this.shouldCacheSnapshot = m),
            (this.acceptsStreamResponse = p);
        }
        get adapter() {
          return this.delegate.adapter;
        }
        get view() {
          return this.delegate.view;
        }
        get history() {
          return this.delegate.history;
        }
        get restorationData() {
          return this.history.getRestorationDataForIdentifier(
            this.restorationIdentifier
          );
        }
        get silent() {
          return this.isSamePage;
        }
        start() {
          this.state == K.initialized &&
            (this.recordTimingMetric(z.visitStart),
            (this.state = K.started),
            this.adapter.visitStarted(this),
            this.delegate.visitStarted(this));
        }
        cancel() {
          this.state == K.started &&
            (this.request && this.request.cancel(),
            this.cancelRender(),
            (this.state = K.canceled));
        }
        complete() {
          this.state != K.started ||
            (this.recordTimingMetric(z.visitEnd),
            (this.state = K.completed),
            this.followRedirect(),
            this.followedRedirect ||
              (this.adapter.visitCompleted(this),
              this.delegate.visitCompleted(this)));
        }
        fail() {
          this.state == K.started &&
            ((this.state = K.failed), this.adapter.visitFailed(this));
        }
        changeHistory() {
          var e;
          if (!this.historyChanged && this.updateHistory) {
            let t = y(
              this.location.href ===
                (null === (e = this.referrer) || void 0 === e ? void 0 : e.href)
                ? 'replace'
                : this.action
            );
            this.history.update(t, this.location, this.restorationIdentifier),
              (this.historyChanged = !0);
          }
        }
        issueRequest() {
          this.hasPreloadedResponse()
            ? this.simulateRequest()
            : this.shouldIssueRequest() &&
              !this.request &&
              ((this.request = new FetchRequest(this, j.get, this.location)),
              this.request.perform());
        }
        simulateRequest() {
          this.response &&
            (this.startRequest(), this.recordResponse(), this.finishRequest());
        }
        startRequest() {
          this.recordTimingMetric(z.requestStart),
            this.adapter.visitRequestStarted(this);
        }
        recordResponse(e = this.response) {
          if (((this.response = e), e)) {
            let { statusCode: t } = e;
            T(t)
              ? this.adapter.visitRequestCompleted(this)
              : this.adapter.visitRequestFailedWithStatusCode(this, t);
          }
        }
        finishRequest() {
          this.recordTimingMetric(z.requestEnd),
            this.adapter.visitRequestFinished(this);
        }
        loadResponse() {
          if (this.response) {
            let { statusCode: e, response: t, responseHTML: s } = this.response;
            this.render(async () => {
              this.shouldCacheSnapshot && this.cacheSnapshot(),
                this.view.renderPromise && (await this.view.renderPromise),
                T(e) && null != s
                  ? (await this.view.renderPage(
                      PageSnapshot.fromResponse(t, s),
                      !1,
                      this.willRender,
                      this
                    ),
                    this.performScroll(),
                    this.adapter.visitRendered(this),
                    this.complete())
                  : (await this.view.renderError(
                      PageSnapshot.fromResponse(t, s),
                      this
                    ),
                    this.adapter.visitRendered(this),
                    this.fail());
            });
          }
        }
        getCachedSnapshot() {
          let e =
            this.view.getCachedSnapshotForLocation(this.location) ||
            this.getPreloadedSnapshot();
          if (
            e &&
            (!h(this.location) || e.hasAnchor(h(this.location))) &&
            ('restore' == this.action || e.isPreviewable)
          )
            return e;
        }
        getPreloadedSnapshot() {
          if (this.snapshotHTML)
            return PageSnapshot.fromHTMLString(this.snapshotHTML);
        }
        hasCachedSnapshot() {
          return null != this.getCachedSnapshot();
        }
        loadCachedSnapshot() {
          let e = this.getCachedSnapshot();
          if (e) {
            let t = this.shouldIssueRequest();
            this.render(async () => {
              this.cacheSnapshot(),
                this.isSamePage
                  ? this.adapter.visitRendered(this)
                  : (this.view.renderPromise && (await this.view.renderPromise),
                    await this.view.renderPage(e, t, this.willRender, this),
                    this.performScroll(),
                    this.adapter.visitRendered(this),
                    t || this.complete());
            });
          }
        }
        followRedirect() {
          var e;
          this.redirectedToLocation &&
            !this.followedRedirect &&
            (null === (e = this.response) || void 0 === e
              ? void 0
              : e.redirected) &&
            (this.adapter.visitProposedToLocation(this.redirectedToLocation, {
              action: 'replace',
              response: this.response,
            }),
            (this.followedRedirect = !0));
        }
        goToSamePageAnchor() {
          this.isSamePage &&
            this.render(async () => {
              this.cacheSnapshot(),
                this.performScroll(),
                this.changeHistory(),
                this.adapter.visitRendered(this);
            });
        }
        prepareHeadersForRequest(e, t) {
          this.acceptsStreamResponse &&
            t.acceptResponseType(StreamMessage.contentType);
        }
        requestStarted() {
          this.startRequest();
        }
        requestPreventedHandlingResponse(e, t) {}
        async requestSucceededWithResponse(e, t) {
          let s = await t.responseHTML,
            { redirected: i, statusCode: r, response: n } = t;
          void 0 == s
            ? this.recordResponse({
                statusCode: Y.contentTypeMismatch,
                redirected: i,
              })
            : ((this.redirectedToLocation = t.redirected ? t.location : void 0),
              this.redirectedToLocation &&
                '' === t.location.hash &&
                (this.redirectedToLocation.hash = e.url.hash),
              this.recordResponse({
                statusCode: r,
                redirected: i,
                response: n,
                responseHTML: s,
              }));
        }
        async requestFailedWithResponse(e, t) {
          let s = await t.responseHTML,
            { redirected: i, statusCode: r, response: n } = t;
          void 0 == s
            ? this.recordResponse({
                statusCode: Y.contentTypeMismatch,
                redirected: i,
              })
            : this.recordResponse({
                statusCode: r,
                redirected: i,
                response: n,
                responseHTML: s,
              });
        }
        requestErrored(e, t) {
          this.recordResponse({ statusCode: Y.networkFailure, redirected: !1 });
        }
        requestFinished() {
          this.finishRequest();
        }
        performScroll() {
          this.scrolled ||
            this.view.forceReloaded ||
            ('restore' == this.action
              ? this.scrollToRestoredPosition() ||
                this.scrollToAnchor() ||
                this.view.scrollToTop()
              : this.scrollToAnchor() || this.view.scrollToTop(),
            this.isSamePage &&
              this.delegate.visitScrolledToSamePageLocation(
                this.view.lastRenderedLocation,
                this.location
              ),
            (this.scrolled = !0));
        }
        scrollToRestoredPosition() {
          let { scrollPosition: e } = this.restorationData;
          if (e) return this.view.scrollToPosition(e), !0;
        }
        scrollToAnchor() {
          let e = h(this.location);
          if (null != e) return this.view.scrollToAnchor(e), !0;
        }
        recordTimingMetric(e) {
          this.timingMetrics[e] = new Date().getTime();
        }
        getTimingMetrics() {
          return Object.assign({}, this.timingMetrics);
        }
        getHistoryMethodForAction(e) {
          switch (e) {
            case 'replace':
              return history.replaceState;
            case 'advance':
            case 'restore':
              return history.pushState;
          }
        }
        hasPreloadedResponse() {
          return 'object' == typeof this.response;
        }
        shouldIssueRequest() {
          return (
            !this.isSamePage &&
            ('restore' == this.action
              ? !this.hasCachedSnapshot()
              : this.willRender)
          );
        }
        cacheSnapshot() {
          this.snapshotCached ||
            (this.view
              .cacheSnapshot(this.snapshot)
              .then((e) => e && this.visitCachedSnapshot(e)),
            (this.snapshotCached = !0));
        }
        async render(e) {
          this.cancelRender(),
            await new Promise((e) => {
              this.frame = requestAnimationFrame(() => e());
            }),
            await e(),
            delete this.frame;
        }
        cancelRender() {
          this.frame && (cancelAnimationFrame(this.frame), delete this.frame);
        }
      };
      function T(e) {
        return e >= 200 && e < 300;
      }
      let BrowserAdapter = class BrowserAdapter {
        constructor(e) {
          (this.progressBar = new ProgressBar()),
            (this.showProgressBar = () => {
              this.progressBar.show();
            }),
            (this.session = e);
        }
        visitProposedToLocation(e, t) {
          this.navigator.startVisit(
            e,
            (null == t ? void 0 : t.restorationIdentifier) || b(),
            t
          );
        }
        visitStarted(e) {
          (this.location = e.location),
            e.loadCachedSnapshot(),
            e.issueRequest(),
            e.goToSamePageAnchor();
        }
        visitRequestStarted(e) {
          this.progressBar.setValue(0),
            e.hasCachedSnapshot() || 'restore' != e.action
              ? this.showVisitProgressBarAfterDelay()
              : this.showProgressBar();
        }
        visitRequestCompleted(e) {
          e.loadResponse();
        }
        visitRequestFailedWithStatusCode(e, t) {
          switch (t) {
            case Y.networkFailure:
            case Y.timeoutFailure:
            case Y.contentTypeMismatch:
              return this.reload({
                reason: 'request_failed',
                context: { statusCode: t },
              });
            default:
              return e.loadResponse();
          }
        }
        visitRequestFinished(e) {
          this.progressBar.setValue(1), this.hideVisitProgressBar();
        }
        visitCompleted(e) {}
        pageInvalidated(e) {
          this.reload(e);
        }
        visitFailed(e) {}
        visitRendered(e) {}
        formSubmissionStarted(e) {
          this.progressBar.setValue(0), this.showFormProgressBarAfterDelay();
        }
        formSubmissionFinished(e) {
          this.progressBar.setValue(1), this.hideFormProgressBar();
        }
        showVisitProgressBarAfterDelay() {
          this.visitProgressBarTimeout = window.setTimeout(
            this.showProgressBar,
            this.session.progressBarDelay
          );
        }
        hideVisitProgressBar() {
          this.progressBar.hide(),
            null != this.visitProgressBarTimeout &&
              (window.clearTimeout(this.visitProgressBarTimeout),
              delete this.visitProgressBarTimeout);
        }
        showFormProgressBarAfterDelay() {
          null == this.formProgressBarTimeout &&
            (this.formProgressBarTimeout = window.setTimeout(
              this.showProgressBar,
              this.session.progressBarDelay
            ));
        }
        hideFormProgressBar() {
          this.progressBar.hide(),
            null != this.formProgressBarTimeout &&
              (window.clearTimeout(this.formProgressBarTimeout),
              delete this.formProgressBarTimeout);
        }
        reload(e) {
          var t;
          p('turbo:reload', { detail: e }),
            (window.location.href =
              (null === (t = this.location) || void 0 === t
                ? void 0
                : t.toString()) || window.location.href);
        }
        get navigator() {
          return this.session.navigator;
        }
      };
      let CacheObserver = class CacheObserver {
        constructor() {
          (this.started = !1),
            (this.removeStaleElements = (e) => {
              for (let e of [
                ...document.querySelectorAll('[data-turbo-cache="false"]'),
              ])
                e.remove();
            });
        }
        start() {
          this.started ||
            ((this.started = !0),
            addEventListener(
              'turbo:before-cache',
              this.removeStaleElements,
              !1
            ));
        }
        stop() {
          this.started &&
            ((this.started = !1),
            removeEventListener(
              'turbo:before-cache',
              this.removeStaleElements,
              !1
            ));
        }
      };
      let FrameRedirector = class FrameRedirector {
        constructor(e, t) {
          (this.session = e),
            (this.element = t),
            (this.linkInterceptor = new LinkInterceptor(this, t)),
            (this.formSubmitObserver = new FormSubmitObserver(this, t));
        }
        start() {
          this.linkInterceptor.start(), this.formSubmitObserver.start();
        }
        stop() {
          this.linkInterceptor.stop(), this.formSubmitObserver.stop();
        }
        shouldInterceptLinkClick(e, t, s) {
          return (
            this.shouldRedirect(e) &&
            this.frameAllowsVisitingLocation(e, l(t), s)
          );
        }
        linkClickIntercepted(e, t, s) {
          let i = this.findFrameElement(e);
          i && i.delegate.linkClickIntercepted(e, t, s);
        }
        willSubmitForm(e, t) {
          return (
            null == e.closest('turbo-frame') &&
            this.shouldSubmit(e, t) &&
            this.shouldRedirect(e, t)
          );
        }
        formSubmitted(e, t) {
          let s = this.findFrameElement(e, t);
          s && s.delegate.formSubmitted(e, t);
        }
        frameAllowsVisitingLocation(e, { href: t }, s) {
          return !p('turbo:frame-click', {
            target: e,
            detail: { url: t, originalEvent: s },
            cancelable: !0,
          }).defaultPrevented;
        }
        shouldSubmit(e, t) {
          var s;
          let i = c(e, t),
            r = this.element.ownerDocument.querySelector(
              'meta[name="turbo-root"]'
            ),
            n = l(
              null !== (s = null == r ? void 0 : r.content) && void 0 !== s
                ? s
                : '/'
            );
          return (
            this.shouldRedirect(e, t) && this.session.locationIsVisitable(i, n)
          );
        }
        shouldRedirect(e, t) {
          if (
            !(e instanceof HTMLFormElement
              ? this.session.submissionIsNavigatable(e, t)
              : this.session.elementIsNavigatable(e))
          )
            return !1;
          {
            let s = this.findFrameElement(e, t);
            return !!s && s != e.closest('turbo-frame');
          }
        }
        findFrameElement(e, t) {
          let s =
            (null == t ? void 0 : t.getAttribute('data-turbo-frame')) ||
            e.getAttribute('data-turbo-frame');
          if (s && '_top' != s) {
            let e = this.element.querySelector(`#${s}:not([disabled])`);
            if (e instanceof FrameElement) return e;
          }
        }
      };
      let History = class History {
        constructor(e) {
          (this.restorationIdentifier = b()),
            (this.restorationData = {}),
            (this.started = !1),
            (this.pageLoaded = !1),
            (this.onPopState = (e) => {
              if (this.shouldHandlePopState()) {
                let { turbo: t } = e.state || {};
                if (t) {
                  this.location = new URL(window.location.href);
                  let { restorationIdentifier: e } = t;
                  (this.restorationIdentifier = e),
                    this.delegate.historyPoppedToLocationWithRestorationIdentifier(
                      this.location,
                      e
                    );
                }
              }
            }),
            (this.onPageLoad = async (e) => {
              await Promise.resolve(), (this.pageLoaded = !0);
            }),
            (this.delegate = e);
        }
        start() {
          this.started ||
            (addEventListener('popstate', this.onPopState, !1),
            addEventListener('load', this.onPageLoad, !1),
            (this.started = !0),
            this.replace(new URL(window.location.href)));
        }
        stop() {
          this.started &&
            (removeEventListener('popstate', this.onPopState, !1),
            removeEventListener('load', this.onPageLoad, !1),
            (this.started = !1));
        }
        push(e, t) {
          this.update(history.pushState, e, t);
        }
        replace(e, t) {
          this.update(history.replaceState, e, t);
        }
        update(e, t, s = b()) {
          e.call(history, { turbo: { restorationIdentifier: s } }, '', t.href),
            (this.location = t),
            (this.restorationIdentifier = s);
        }
        getRestorationDataForIdentifier(e) {
          return this.restorationData[e] || {};
        }
        updateRestorationData(e) {
          let { restorationIdentifier: t } = this,
            s = this.restorationData[t];
          this.restorationData[t] = Object.assign(Object.assign({}, s), e);
        }
        assumeControlOfScrollRestoration() {
          var e;
          this.previousScrollRestoration ||
            ((this.previousScrollRestoration =
              null !== (e = history.scrollRestoration) && void 0 !== e
                ? e
                : 'auto'),
            (history.scrollRestoration = 'manual'));
        }
        relinquishControlOfScrollRestoration() {
          this.previousScrollRestoration &&
            ((history.scrollRestoration = this.previousScrollRestoration),
            delete this.previousScrollRestoration);
        }
        shouldHandlePopState() {
          return this.pageIsLoaded();
        }
        pageIsLoaded() {
          return this.pageLoaded || 'complete' == document.readyState;
        }
      };
      let Navigator = class Navigator {
        constructor(e) {
          this.delegate = e;
        }
        proposeVisit(e, t = {}) {
          this.delegate.allowsVisitingLocationWithAction(e, t.action) &&
            (this.delegate.locationIsVisitable(
              e,
              this.view.snapshot.rootLocation
            )
              ? this.delegate.visitProposedToLocation(e, t)
              : (window.location.href = e.toString()));
        }
        startVisit(e, t, s = {}) {
          this.stop(),
            (this.currentVisit = new Visit(
              this,
              l(e),
              t,
              Object.assign({ referrer: this.location }, s)
            )),
            this.currentVisit.start();
        }
        submitForm(e, t) {
          this.stop(),
            (this.formSubmission = new FormSubmission(this, e, t, !0)),
            this.formSubmission.start();
        }
        stop() {
          this.formSubmission &&
            (this.formSubmission.stop(), delete this.formSubmission),
            this.currentVisit &&
              (this.currentVisit.cancel(), delete this.currentVisit);
        }
        get adapter() {
          return this.delegate.adapter;
        }
        get view() {
          return this.delegate.view;
        }
        get history() {
          return this.delegate.history;
        }
        formSubmissionStarted(e) {
          'function' == typeof this.adapter.formSubmissionStarted &&
            this.adapter.formSubmissionStarted(e);
        }
        async formSubmissionSucceededWithResponse(e, t) {
          if (e == this.formSubmission) {
            let s = await t.responseHTML;
            if (s) {
              let i = e.method == j.get;
              i || this.view.clearSnapshotCache();
              let { statusCode: r, redirected: n, response: o } = t,
                a = this.getActionForFormSubmission(e),
                l = t.location;
              n &&
                '' === t.location.hash &&
                (l.hash = e.fetchRequest.location.hash),
                this.proposeVisit(l, {
                  action: a,
                  shouldCacheSnapshot: i,
                  response: {
                    statusCode: r,
                    redirected: n,
                    response: o,
                    responseHTML: s,
                  },
                });
            }
          }
        }
        async formSubmissionFailedWithResponse(e, t) {
          let s = await t.responseHTML;
          if (s) {
            let e = PageSnapshot.fromResponse(t.response, s);
            t.serverError
              ? await this.view.renderError(e, this.currentVisit)
              : await this.view.renderPage(e, !1, !0, this.currentVisit),
              this.view.scrollToTop(),
              this.view.clearSnapshotCache();
          }
        }
        formSubmissionErrored(e, t) {
          console.error(t);
        }
        formSubmissionFinished(e) {
          'function' == typeof this.adapter.formSubmissionFinished &&
            this.adapter.formSubmissionFinished(e);
        }
        visitStarted(e) {
          this.delegate.visitStarted(e);
        }
        visitCompleted(e) {
          this.delegate.visitCompleted(e);
        }
        locationWithActionIsSamePage(e, t) {
          let s = h(e),
            i = h(this.view.lastRenderedLocation);
          return (
            'replace' !== t &&
            d(e) === d(this.view.lastRenderedLocation) &&
            (('restore' === t && void 0 === s) || (null != s && s !== i))
          );
        }
        visitScrolledToSamePageLocation(e, t) {
          this.delegate.visitScrolledToSamePageLocation(e, t);
        }
        get location() {
          return this.history.location;
        }
        get restorationIdentifier() {
          return this.history.restorationIdentifier;
        }
        getActionForFormSubmission(e) {
          let { formElement: t, submitter: s } = e,
            i = S('data-turbo-action', s, t);
          return u(i) ? i : 'advance';
        }
      };
      !(function (e) {
        (e[(e.initial = 0)] = 'initial'),
          (e[(e.loading = 1)] = 'loading'),
          (e[(e.interactive = 2)] = 'interactive'),
          (e[(e.complete = 3)] = 'complete');
      })(Q || (Q = {}));
      let PageObserver = class PageObserver {
        constructor(e) {
          (this.stage = Q.initial),
            (this.started = !1),
            (this.interpretReadyState = () => {
              let { readyState: e } = this;
              'interactive' == e
                ? this.pageIsInteractive()
                : 'complete' == e && this.pageIsComplete();
            }),
            (this.pageWillUnload = () => {
              this.delegate.pageWillUnload();
            }),
            (this.delegate = e);
        }
        start() {
          this.started ||
            (this.stage == Q.initial && (this.stage = Q.loading),
            document.addEventListener(
              'readystatechange',
              this.interpretReadyState,
              !1
            ),
            addEventListener('pagehide', this.pageWillUnload, !1),
            (this.started = !0));
        }
        stop() {
          this.started &&
            (document.removeEventListener(
              'readystatechange',
              this.interpretReadyState,
              !1
            ),
            removeEventListener('pagehide', this.pageWillUnload, !1),
            (this.started = !1));
        }
        pageIsInteractive() {
          this.stage == Q.loading &&
            ((this.stage = Q.interactive),
            this.delegate.pageBecameInteractive());
        }
        pageIsComplete() {
          this.pageIsInteractive(),
            this.stage == Q.interactive &&
              ((this.stage = Q.complete), this.delegate.pageLoaded());
        }
        get readyState() {
          return document.readyState;
        }
      };
      let ScrollObserver = class ScrollObserver {
        constructor(e) {
          (this.started = !1),
            (this.onScroll = () => {
              this.updatePosition({
                x: window.pageXOffset,
                y: window.pageYOffset,
              });
            }),
            (this.delegate = e);
        }
        start() {
          this.started ||
            (addEventListener('scroll', this.onScroll, !1),
            this.onScroll(),
            (this.started = !0));
        }
        stop() {
          this.started &&
            (removeEventListener('scroll', this.onScroll, !1),
            (this.started = !1));
        }
        updatePosition(e) {
          this.delegate.scrollPositionChanged(e);
        }
      };
      let StreamMessageRenderer = class StreamMessageRenderer {
        render({ fragment: e }) {
          Bardo.preservingPermanentElements(
            this,
            (function (e) {
              let t = A(document.documentElement),
                s = {};
              for (let i of t) {
                let { id: t } = i;
                for (let r of e.querySelectorAll('turbo-stream')) {
                  let e = C(r.templateElement.content, t);
                  e && (s[t] = [i, e]);
                }
              }
              return s;
            })(e),
            () => document.documentElement.appendChild(e)
          );
        }
        enteringBardo(e, t) {
          t.replaceWith(e.cloneNode(!0));
        }
        leavingBardo() {}
      };
      let StreamObserver = class StreamObserver {
        constructor(e) {
          (this.sources = new Set()),
            (this.started = !1),
            (this.inspectFetchResponse = (e) => {
              let t = (function (e) {
                var t;
                let s =
                  null === (t = e.detail) || void 0 === t
                    ? void 0
                    : t.fetchResponse;
                if (s instanceof FetchResponse) return s;
              })(e);
              t &&
                (function (e) {
                  var t;
                  return (
                    null !== (t = e.contentType) && void 0 !== t ? t : ''
                  ).startsWith(StreamMessage.contentType);
                })(t) &&
                (e.preventDefault(), this.receiveMessageResponse(t));
            }),
            (this.receiveMessageEvent = (e) => {
              this.started &&
                'string' == typeof e.data &&
                this.receiveMessageHTML(e.data);
            }),
            (this.delegate = e);
        }
        start() {
          this.started ||
            ((this.started = !0),
            addEventListener(
              'turbo:before-fetch-response',
              this.inspectFetchResponse,
              !1
            ));
        }
        stop() {
          this.started &&
            ((this.started = !1),
            removeEventListener(
              'turbo:before-fetch-response',
              this.inspectFetchResponse,
              !1
            ));
        }
        connectStreamSource(e) {
          this.streamSourceIsConnected(e) ||
            (this.sources.add(e),
            e.addEventListener('message', this.receiveMessageEvent, !1));
        }
        disconnectStreamSource(e) {
          this.streamSourceIsConnected(e) &&
            (this.sources.delete(e),
            e.removeEventListener('message', this.receiveMessageEvent, !1));
        }
        streamSourceIsConnected(e) {
          return this.sources.has(e);
        }
        async receiveMessageResponse(e) {
          let t = await e.responseHTML;
          t && this.receiveMessageHTML(t);
        }
        receiveMessageHTML(e) {
          this.delegate.receivedMessageFromStream(StreamMessage.wrap(e));
        }
      };
      let ErrorRenderer = class ErrorRenderer extends Renderer {
        static renderElement(e, t) {
          let { documentElement: s, body: i } = document;
          s.replaceChild(t, i);
        }
        async render() {
          this.replaceHeadAndBody(), this.activateScriptElements();
        }
        replaceHeadAndBody() {
          let { documentElement: e, head: t } = document;
          e.replaceChild(this.newHead, t),
            this.renderElement(this.currentElement, this.newElement);
        }
        activateScriptElements() {
          for (let e of this.scriptElements) {
            if ('application/json' === e.type) continue;
            let t = e.parentNode;
            if (t) {
              let s = m(e);
              t.replaceChild(s, e);
            }
          }
        }
        get newHead() {
          return this.newSnapshot.headSnapshot.element;
        }
        get scriptElements() {
          return document.documentElement.querySelectorAll('script');
        }
      };
      let PageRenderer = class PageRenderer extends Renderer {
        static renderElement(e, t) {
          document.body && t instanceof HTMLBodyElement
            ? document.body.replaceWith(t)
            : document.documentElement.appendChild(t);
        }
        get shouldRender() {
          return (
            this.newSnapshot.isVisitable && this.trackedElementsAreIdentical
          );
        }
        get reloadReason() {
          return this.newSnapshot.isVisitable
            ? this.trackedElementsAreIdentical
              ? void 0
              : { reason: 'tracked_element_mismatch' }
            : { reason: 'turbo_visit_control_is_reload' };
        }
        async prepareToRender() {
          await this.mergeHead();
        }
        async render() {
          this.willRender && (await this.replaceBody());
        }
        finishRendering() {
          super.finishRendering(),
            this.isPreview || this.focusFirstAutofocusableElement();
        }
        get currentHeadSnapshot() {
          return this.currentSnapshot.headSnapshot;
        }
        get newHeadSnapshot() {
          return this.newSnapshot.headSnapshot;
        }
        get newElement() {
          return this.newSnapshot.element;
        }
        async mergeHead() {
          let e = this.copyNewHeadStylesheetElements();
          this.copyNewHeadScriptElements(),
            this.removeCurrentHeadProvisionalElements(),
            this.copyNewHeadProvisionalElements(),
            await e;
        }
        async replaceBody() {
          await this.preservingPermanentElements(async () => {
            this.activateNewBody(), await this.assignNewBody();
          });
        }
        get trackedElementsAreIdentical() {
          return (
            this.currentHeadSnapshot.trackedElementSignature ==
            this.newHeadSnapshot.trackedElementSignature
          );
        }
        async copyNewHeadStylesheetElements() {
          let e = [];
          for (let t of this.newHeadStylesheetElements)
            e.push(
              (function (e, t = 2e3) {
                return new Promise((s) => {
                  let i = () => {
                    e.removeEventListener('error', i),
                      e.removeEventListener('load', i),
                      s();
                  };
                  e.addEventListener('load', i, { once: !0 }),
                    e.addEventListener('error', i, { once: !0 }),
                    setTimeout(s, t);
                });
              })(t)
            ),
              document.head.appendChild(t);
          await Promise.all(e);
        }
        copyNewHeadScriptElements() {
          for (let e of this.newHeadScriptElements)
            document.head.appendChild(m(e));
        }
        removeCurrentHeadProvisionalElements() {
          for (let e of this.currentHeadProvisionalElements)
            document.head.removeChild(e);
        }
        copyNewHeadProvisionalElements() {
          for (let e of this.newHeadProvisionalElements)
            document.head.appendChild(e);
        }
        activateNewBody() {
          document.adoptNode(this.newElement),
            this.activateNewBodyScriptElements();
        }
        activateNewBodyScriptElements() {
          for (let e of this.newBodyScriptElements) {
            if ('application/json' === e.type) continue;
            let t = m(e);
            e.replaceWith(t);
          }
        }
        async assignNewBody() {
          await this.renderElement(this.currentElement, this.newElement);
        }
        get newHeadStylesheetElements() {
          return this.newHeadSnapshot.getStylesheetElementsNotInSnapshot(
            this.currentHeadSnapshot
          );
        }
        get newHeadScriptElements() {
          return this.newHeadSnapshot.getScriptElementsNotInSnapshot(
            this.currentHeadSnapshot
          );
        }
        get currentHeadProvisionalElements() {
          return this.currentHeadSnapshot.provisionalElements;
        }
        get newHeadProvisionalElements() {
          return this.newHeadSnapshot.provisionalElements;
        }
        get newBodyScriptElements() {
          return this.newElement.querySelectorAll('script');
        }
      };
      let SnapshotCache = class SnapshotCache {
        constructor(e) {
          (this.keys = []), (this.snapshots = {}), (this.size = e);
        }
        has(e) {
          return d(e) in this.snapshots;
        }
        get(e) {
          if (this.has(e)) {
            let t = this.read(e);
            return this.touch(e), t;
          }
        }
        put(e, t) {
          return this.write(e, t), this.touch(e), t;
        }
        clear() {
          this.snapshots = {};
        }
        read(e) {
          return this.snapshots[d(e)];
        }
        write(e, t) {
          this.snapshots[d(e)] = t;
        }
        touch(e) {
          let t = d(e),
            s = this.keys.indexOf(t);
          s > -1 && this.keys.splice(s, 1), this.keys.unshift(t), this.trim();
        }
        trim() {
          for (let e of this.keys.splice(this.size)) delete this.snapshots[e];
        }
      };
      let PageView = class PageView extends View {
        constructor() {
          super(...arguments),
            (this.snapshotCache = new SnapshotCache(10)),
            (this.lastRenderedLocation = new URL(location.href)),
            (this.forceReloaded = !1);
        }
        renderPage(e, t = !1, s = !0, i) {
          let r = new PageRenderer(
            this.snapshot,
            e,
            PageRenderer.renderElement,
            t,
            s
          );
          return (
            r.shouldRender
              ? null == i || i.changeHistory()
              : (this.forceReloaded = !0),
            this.render(r)
          );
        }
        renderError(e, t) {
          null == t || t.changeHistory();
          let s = new ErrorRenderer(
            this.snapshot,
            e,
            ErrorRenderer.renderElement,
            !1
          );
          return this.render(s);
        }
        clearSnapshotCache() {
          this.snapshotCache.clear();
        }
        async cacheSnapshot(e = this.snapshot) {
          if (e.isCacheable) {
            this.delegate.viewWillCacheSnapshot();
            let { lastRenderedLocation: t } = this;
            await new Promise((e) => setTimeout(() => e(), 0));
            let s = e.clone();
            return this.snapshotCache.put(t, s), s;
          }
        }
        getCachedSnapshotForLocation(e) {
          return this.snapshotCache.get(e);
        }
        get snapshot() {
          return PageSnapshot.fromElement(this.element);
        }
      };
      let Preloader = class Preloader {
        constructor(e) {
          (this.selector = 'a[data-turbo-preload]'), (this.delegate = e);
        }
        get snapshotCache() {
          return this.delegate.navigator.view.snapshotCache;
        }
        start() {
          if ('loading' === document.readyState)
            return document.addEventListener('DOMContentLoaded', () => {
              this.preloadOnLoadLinksForView(document.body);
            });
          this.preloadOnLoadLinksForView(document.body);
        }
        preloadOnLoadLinksForView(e) {
          for (let t of e.querySelectorAll(this.selector)) this.preloadURL(t);
        }
        async preloadURL(e) {
          let t = new URL(e.href);
          if (!this.snapshotCache.has(t))
            try {
              let e = await fetch(t.toString(), {
                  headers: { 'VND.PREFETCH': 'true', Accept: 'text/html' },
                }),
                s = await e.text(),
                i = PageSnapshot.fromResponse(e, s);
              this.snapshotCache.put(t, i);
            } catch (e) {}
        }
      };
      let Session = class Session {
        constructor() {
          (this.navigator = new Navigator(this)),
            (this.history = new History(this)),
            (this.preloader = new Preloader(this)),
            (this.view = new PageView(this, document.documentElement)),
            (this.adapter = new BrowserAdapter(this)),
            (this.pageObserver = new PageObserver(this)),
            (this.cacheObserver = new CacheObserver()),
            (this.linkClickObserver = new LinkClickObserver(this, window)),
            (this.formSubmitObserver = new FormSubmitObserver(this, document)),
            (this.scrollObserver = new ScrollObserver(this)),
            (this.streamObserver = new StreamObserver(this)),
            (this.formLinkClickObserver = new FormLinkClickObserver(
              this,
              document.documentElement
            )),
            (this.frameRedirector = new FrameRedirector(
              this,
              document.documentElement
            )),
            (this.streamMessageRenderer = new StreamMessageRenderer()),
            (this.drive = !0),
            (this.enabled = !0),
            (this.progressBarDelay = 500),
            (this.started = !1),
            (this.formMode = 'on');
        }
        start() {
          this.started ||
            (this.pageObserver.start(),
            this.cacheObserver.start(),
            this.formLinkClickObserver.start(),
            this.linkClickObserver.start(),
            this.formSubmitObserver.start(),
            this.scrollObserver.start(),
            this.streamObserver.start(),
            this.frameRedirector.start(),
            this.history.start(),
            this.preloader.start(),
            (this.started = !0),
            (this.enabled = !0));
        }
        disable() {
          this.enabled = !1;
        }
        stop() {
          this.started &&
            (this.pageObserver.stop(),
            this.cacheObserver.stop(),
            this.formLinkClickObserver.stop(),
            this.linkClickObserver.stop(),
            this.formSubmitObserver.stop(),
            this.scrollObserver.stop(),
            this.streamObserver.stop(),
            this.frameRedirector.stop(),
            this.history.stop(),
            (this.started = !1));
        }
        registerAdapter(e) {
          this.adapter = e;
        }
        visit(e, t = {}) {
          let s = t.frame ? document.getElementById(t.frame) : null;
          s instanceof FrameElement
            ? ((s.src = e.toString()), s.loaded)
            : this.navigator.proposeVisit(l(e), t);
        }
        connectStreamSource(e) {
          this.streamObserver.connectStreamSource(e);
        }
        disconnectStreamSource(e) {
          this.streamObserver.disconnectStreamSource(e);
        }
        renderStreamMessage(e) {
          this.streamMessageRenderer.render(StreamMessage.wrap(e));
        }
        clearCache() {
          this.view.clearSnapshotCache();
        }
        isVisitable(e) {
          return !!(
            (e.pathname
              .split('/')
              .slice(1)
              .slice(-1)[0]
              .match(/\.[^.]*$/) || [])[0] || ''
          ).match(/^(?:|\.(?:htm|html|xhtml|php))$/);
        }
        locationIsVisitable(e, t) {
          return (
            (function (e, t) {
              var s;
              let i = (s = t.origin + t.pathname).endsWith('/') ? s : s + '/';
              return e.href === l(i).href || e.href.startsWith(i);
            })(e, t) && this.isVisitable(e)
          );
        }
        setProgressBarDelay(e) {
          this.progressBarDelay = e;
        }
        setFormMode(e) {
          this.formMode = e;
        }
        get location() {
          return this.history.location;
        }
        get restorationIdentifier() {
          return this.history.restorationIdentifier;
        }
        historyPoppedToLocationWithRestorationIdentifier(e, t) {
          this.enabled
            ? this.navigator.startVisit(e, t, {
                action: 'restore',
                historyChanged: !0,
              })
            : this.adapter.pageInvalidated({ reason: 'turbo_disabled' });
        }
        scrollPositionChanged(e) {
          this.history.updateRestorationData({ scrollPosition: e });
        }
        willSubmitFormLinkToLocation(e, t) {
          return (
            this.elementIsNavigatable(e) &&
            this.locationIsVisitable(t, this.snapshot.rootLocation)
          );
        }
        submittedFormLinkToLocation() {}
        willFollowLinkToLocation(e, t, s) {
          return (
            this.elementIsNavigatable(e) &&
            this.locationIsVisitable(t, this.snapshot.rootLocation) &&
            this.applicationAllowsFollowingLinkToLocation(e, t, s)
          );
        }
        followedLinkToLocation(e, t) {
          let s = this.getActionForLink(e),
            i = e.hasAttribute('data-turbo-stream');
          this.visit(t.href, { action: s, acceptsStreamResponse: i });
        }
        allowsVisitingLocationWithAction(e, t) {
          return (
            this.locationWithActionIsSamePage(e, t) ||
            this.applicationAllowsVisitingLocation(e)
          );
        }
        visitProposedToLocation(e, t) {
          F(e), this.adapter.visitProposedToLocation(e, t);
        }
        visitStarted(e) {
          e.acceptsStreamResponse || w(document.documentElement),
            F(e.location),
            e.silent ||
              this.notifyApplicationAfterVisitingLocation(e.location, e.action);
        }
        visitCompleted(e) {
          E(document.documentElement),
            this.notifyApplicationAfterPageLoad(e.getTimingMetrics());
        }
        locationWithActionIsSamePage(e, t) {
          return this.navigator.locationWithActionIsSamePage(e, t);
        }
        visitScrolledToSamePageLocation(e, t) {
          this.notifyApplicationAfterVisitingSamePageLocation(e, t);
        }
        willSubmitForm(e, t) {
          let s = c(e, t);
          return (
            this.submissionIsNavigatable(e, t) &&
            this.locationIsVisitable(l(s), this.snapshot.rootLocation)
          );
        }
        formSubmitted(e, t) {
          this.navigator.submitForm(e, t);
        }
        pageBecameInteractive() {
          (this.view.lastRenderedLocation = this.location),
            this.notifyApplicationAfterPageLoad();
        }
        pageLoaded() {
          this.history.assumeControlOfScrollRestoration();
        }
        pageWillUnload() {
          this.history.relinquishControlOfScrollRestoration();
        }
        receivedMessageFromStream(e) {
          this.renderStreamMessage(e);
        }
        viewWillCacheSnapshot() {
          var e;
          (null === (e = this.navigator.currentVisit) || void 0 === e
            ? void 0
            : e.silent) || this.notifyApplicationBeforeCachingSnapshot();
        }
        allowsImmediateRender({ element: e }, t) {
          let {
            defaultPrevented: s,
            detail: { render: i },
          } = this.notifyApplicationBeforeRender(e, t);
          return (
            this.view.renderer && i && (this.view.renderer.renderElement = i),
            !s
          );
        }
        viewRenderedSnapshot(e, t) {
          (this.view.lastRenderedLocation = this.history.location),
            this.notifyApplicationAfterRender();
        }
        preloadOnLoadLinksForView(e) {
          this.preloader.preloadOnLoadLinksForView(e);
        }
        viewInvalidated(e) {
          this.adapter.pageInvalidated(e);
        }
        frameLoaded(e) {
          this.notifyApplicationAfterFrameLoad(e);
        }
        frameRendered(e, t) {
          this.notifyApplicationAfterFrameRender(e, t);
        }
        applicationAllowsFollowingLinkToLocation(e, t, s) {
          return !this.notifyApplicationAfterClickingLinkToLocation(e, t, s)
            .defaultPrevented;
        }
        applicationAllowsVisitingLocation(e) {
          return !this.notifyApplicationBeforeVisitingLocation(e)
            .defaultPrevented;
        }
        notifyApplicationAfterClickingLinkToLocation(e, t, s) {
          return p('turbo:click', {
            target: e,
            detail: { url: t.href, originalEvent: s },
            cancelable: !0,
          });
        }
        notifyApplicationBeforeVisitingLocation(e) {
          return p('turbo:before-visit', {
            detail: { url: e.href },
            cancelable: !0,
          });
        }
        notifyApplicationAfterVisitingLocation(e, t) {
          return p('turbo:visit', { detail: { url: e.href, action: t } });
        }
        notifyApplicationBeforeCachingSnapshot() {
          return p('turbo:before-cache');
        }
        notifyApplicationBeforeRender(e, t) {
          return p('turbo:before-render', {
            detail: Object.assign({ newBody: e }, t),
            cancelable: !0,
          });
        }
        notifyApplicationAfterRender() {
          return p('turbo:render');
        }
        notifyApplicationAfterPageLoad(e = {}) {
          return p('turbo:load', {
            detail: { url: this.location.href, timing: e },
          });
        }
        notifyApplicationAfterVisitingSamePageLocation(e, t) {
          dispatchEvent(
            new HashChangeEvent('hashchange', {
              oldURL: e.toString(),
              newURL: t.toString(),
            })
          );
        }
        notifyApplicationAfterFrameLoad(e) {
          return p('turbo:frame-load', { target: e });
        }
        notifyApplicationAfterFrameRender(e, t) {
          return p('turbo:frame-render', {
            detail: { fetchResponse: e },
            target: t,
            cancelable: !0,
          });
        }
        submissionIsNavigatable(e, t) {
          if ('off' == this.formMode) return !1;
          {
            let s = !t || this.elementIsNavigatable(t);
            return 'optin' == this.formMode
              ? s && null != e.closest('[data-turbo="true"]')
              : s && this.elementIsNavigatable(e);
          }
        }
        elementIsNavigatable(e) {
          let t = e.closest('[data-turbo]'),
            s = e.closest('turbo-frame');
          return this.drive || s
            ? !t || 'false' != t.getAttribute('data-turbo')
            : !!t && 'true' == t.getAttribute('data-turbo');
        }
        getActionForLink(e) {
          let t = e.getAttribute('data-turbo-action');
          return u(t) ? t : 'advance';
        }
        get snapshot() {
          return this.view.snapshot;
        }
      };
      function F(e) {
        Object.defineProperties(e, k);
      }
      let k = {
        absoluteURL: {
          get() {
            return this.toString();
          },
        },
      };
      let Cache = class Cache {
        constructor(e) {
          this.session = e;
        }
        clear() {
          this.session.clearCache();
        }
        resetCacheControl() {
          this.setCacheControl('');
        }
        exemptPageFromCache() {
          this.setCacheControl('no-cache');
        }
        exemptPageFromPreview() {
          this.setCacheControl('no-preview');
        }
        setCacheControl(e) {
          var t;
          let s;
          (s = R((t = 'turbo-cache-control'))) ||
            ((s = document.createElement('meta')).setAttribute('name', t),
            document.head.appendChild(s)),
            s.setAttribute('content', e);
        }
      };
      let I = {
          after() {
            this.targetElements.forEach((e) => {
              var t;
              return null === (t = e.parentElement) || void 0 === t
                ? void 0
                : t.insertBefore(this.templateContent, e.nextSibling);
            });
          },
          append() {
            this.removeDuplicateTargetChildren(),
              this.targetElements.forEach((e) =>
                e.append(this.templateContent)
              );
          },
          before() {
            this.targetElements.forEach((e) => {
              var t;
              return null === (t = e.parentElement) || void 0 === t
                ? void 0
                : t.insertBefore(this.templateContent, e);
            });
          },
          prepend() {
            this.removeDuplicateTargetChildren(),
              this.targetElements.forEach((e) =>
                e.prepend(this.templateContent)
              );
          },
          remove() {
            this.targetElements.forEach((e) => e.remove());
          },
          replace() {
            this.targetElements.forEach((e) =>
              e.replaceWith(this.templateContent)
            );
          },
          update() {
            this.targetElements.forEach((e) =>
              e.replaceChildren(this.templateContent)
            );
          },
        },
        M = new Session(),
        H = new Cache(M),
        { navigator: q } = M;
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
          registerAdapter: function (e) {
            M.registerAdapter(e);
          },
          visit: O,
          connectStreamSource: V,
          disconnectStreamSource: N,
          renderStreamMessage: function (e) {
            M.renderStreamMessage(e);
          },
          clearCache: function () {
            console.warn(
              'Please replace `Turbo.clearCache()` with `Turbo.cache.clear()`. The top-level function is deprecated and will be removed in a future version of Turbo.`'
            ),
              M.clearCache();
          },
          setProgressBarDelay: D,
          setConfirmMethod: function (e) {
            FormSubmission.confirmMethod = e;
          },
          setFormMode: function (e) {
            M.setFormMode(e);
          },
          StreamActions: I,
          setCSPTrustedTypesPolicy: o,
        });
      let FrameController = class FrameController {
        constructor(e) {
          (this.fetchResponseLoaded = (e) => {}),
            (this.currentFetchRequest = null),
            (this.resolveVisitPromise = () => {}),
            (this.connected = !1),
            (this.hasBeenLoaded = !1),
            (this.ignoredAttributes = new Set()),
            (this.action = null),
            (this.visitCachedSnapshot = ({ element: e }) => {
              let t = e.querySelector('#' + this.element.id);
              t &&
                this.previousFrameElement &&
                t.replaceChildren(...this.previousFrameElement.children),
                delete this.previousFrameElement;
            }),
            (this.element = e),
            (this.view = new FrameView(this, this.element)),
            (this.appearanceObserver = new AppearanceObserver(
              this,
              this.element
            )),
            (this.formLinkClickObserver = new FormLinkClickObserver(
              this,
              this.element
            )),
            (this.linkInterceptor = new LinkInterceptor(this, this.element)),
            (this.restorationIdentifier = b()),
            (this.formSubmitObserver = new FormSubmitObserver(
              this,
              this.element
            ));
        }
        connect() {
          this.connected ||
            ((this.connected = !0),
            this.loadingStyle == U.lazy
              ? this.appearanceObserver.start()
              : this.loadSourceURL(),
            this.formLinkClickObserver.start(),
            this.linkInterceptor.start(),
            this.formSubmitObserver.start());
        }
        disconnect() {
          this.connected &&
            ((this.connected = !1),
            this.appearanceObserver.stop(),
            this.formLinkClickObserver.stop(),
            this.linkInterceptor.stop(),
            this.formSubmitObserver.stop());
        }
        disabledChanged() {
          this.loadingStyle == U.eager && this.loadSourceURL();
        }
        sourceURLChanged() {
          !this.isIgnoringChangesTo('src') &&
            (this.element.isConnected && (this.complete = !1),
            (this.loadingStyle == U.eager || this.hasBeenLoaded) &&
              this.loadSourceURL());
        }
        sourceURLReloaded() {
          let { src: e } = this.element;
          return (
            this.ignoringChangesToAttribute('complete', () => {
              this.element.removeAttribute('complete');
            }),
            (this.element.src = null),
            (this.element.src = e),
            this.element.loaded
          );
        }
        completeChanged() {
          this.isIgnoringChangesTo('complete') || this.loadSourceURL();
        }
        loadingStyleChanged() {
          this.loadingStyle == U.lazy
            ? this.appearanceObserver.start()
            : (this.appearanceObserver.stop(), this.loadSourceURL());
        }
        async loadSourceURL() {
          this.enabled &&
            this.isActive &&
            !this.complete &&
            this.sourceURL &&
            ((this.element.loaded = this.visit(l(this.sourceURL))),
            this.appearanceObserver.stop(),
            await this.element.loaded,
            (this.hasBeenLoaded = !0));
        }
        async loadResponse(e) {
          (e.redirected || (e.succeeded && e.isHTML)) &&
            (this.sourceURL = e.response.url);
          try {
            let t = await e.responseHTML;
            if (t) {
              let s;
              if (null == n) s = f(t).body;
              else {
                let i = n.createHTML(t, e.response);
                s = f(i).body;
              }
              let i = await this.extractForeignFrameElement(s);
              if (i) {
                let t = new Snapshot(i),
                  s = new FrameRenderer(
                    this,
                    this.view.snapshot,
                    t,
                    FrameRenderer.renderElement,
                    !1,
                    !1
                  );
                this.view.renderPromise && (await this.view.renderPromise),
                  this.changeHistory(),
                  await this.view.render(s),
                  (this.complete = !0),
                  M.frameRendered(e, this.element),
                  M.frameLoaded(this.element),
                  this.fetchResponseLoaded(e);
              } else
                this.willHandleFrameMissingFromResponse(e) &&
                  (console.warn(
                    `A matching frame for #${this.element.id} was missing from the response, transforming into full-page Visit.`
                  ),
                  this.visitResponse(e.response));
            }
          } catch (e) {
            console.error(e), this.view.invalidate();
          } finally {
            this.fetchResponseLoaded = () => {};
          }
        }
        elementAppearedInViewport(e) {
          (this.pageSnapshot = PageSnapshot.fromElement(e).clone()),
            this.proposeVisitIfNavigatedWithAction(e, e),
            this.loadSourceURL();
        }
        willSubmitFormLinkToLocation(e) {
          return this.shouldInterceptNavigation(e);
        }
        submittedFormLinkToLocation(e, t, s) {
          let i = this.findFrameElement(e);
          i && s.setAttribute('data-turbo-frame', i.id);
        }
        shouldInterceptLinkClick(e, t, s) {
          return (
            this.shouldInterceptNavigation(e) &&
            this.frameAllowsVisitingLocation(e, l(t), s)
          );
        }
        linkClickIntercepted(e, t) {
          this.navigateFrame(e, t);
        }
        willSubmitForm(e, t) {
          return (
            e.closest('turbo-frame') == this.element &&
            this.shouldInterceptNavigation(e, t)
          );
        }
        formSubmitted(e, t) {
          this.formSubmission && this.formSubmission.stop(),
            (this.formSubmission = new FormSubmission(this, e, t));
          let { fetchRequest: s } = this.formSubmission;
          this.prepareHeadersForRequest(s.headers, s),
            this.formSubmission.start();
        }
        prepareHeadersForRequest(e, t) {
          var s;
          (e['Turbo-Frame'] = this.id),
            (null === (s = this.currentNavigationElement) || void 0 === s
              ? void 0
              : s.hasAttribute('data-turbo-stream')) &&
              t.acceptResponseType(StreamMessage.contentType);
        }
        requestStarted(e) {
          w(this.element);
        }
        requestPreventedHandlingResponse(e, t) {
          this.resolveVisitPromise();
        }
        async requestSucceededWithResponse(e, t) {
          await this.loadResponse(t), this.resolveVisitPromise();
        }
        async requestFailedWithResponse(e, t) {
          console.error(t),
            await this.loadResponse(t),
            this.resolveVisitPromise();
        }
        requestErrored(e, t) {
          console.error(t), this.resolveVisitPromise();
        }
        requestFinished(e) {
          E(this.element);
        }
        formSubmissionStarted({ formElement: e }) {
          w(e, this.findFrameElement(e));
        }
        formSubmissionSucceededWithResponse(e, t) {
          let s = this.findFrameElement(e.formElement, e.submitter);
          s.delegate.proposeVisitIfNavigatedWithAction(
            s,
            e.formElement,
            e.submitter
          ),
            s.delegate.loadResponse(t);
        }
        formSubmissionFailedWithResponse(e, t) {
          this.element.delegate.loadResponse(t);
        }
        formSubmissionErrored(e, t) {
          console.error(t);
        }
        formSubmissionFinished({ formElement: e }) {
          E(e, this.findFrameElement(e));
        }
        allowsImmediateRender({ element: e }, t) {
          let {
            defaultPrevented: s,
            detail: { render: i },
          } = p('turbo:before-frame-render', {
            target: this.element,
            detail: Object.assign({ newFrame: e }, t),
            cancelable: !0,
          });
          return (
            this.view.renderer && i && (this.view.renderer.renderElement = i),
            !s
          );
        }
        viewRenderedSnapshot(e, t) {}
        preloadOnLoadLinksForView(e) {
          M.preloadOnLoadLinksForView(e);
        }
        viewInvalidated() {}
        willRenderFrame(e, t) {
          this.previousFrameElement = e.cloneNode(!0);
        }
        async visit(e) {
          let t = new FetchRequest(
            this,
            j.get,
            e,
            new URLSearchParams(),
            this.element
          );
          return (
            this.cancelInFlightNavigation(),
            (this.currentFetchRequest = t),
            new Promise((e) => {
              (this.resolveVisitPromise = () => {
                (this.resolveVisitPromise = () => {}),
                  (this.currentFetchRequest = null),
                  e();
              }),
                t.perform();
            })
          );
        }
        cancelInFlightNavigation(e) {
          this.currentFetchRequest &&
            (this.currentFetchRequest.cancel(),
            (this.currentFetchRequest = null),
            e &&
              (this.ignoringChangesToAttribute('src', () => {
                (e.src = e.previousSrc), E(e);
              }),
              e.previousSrc &&
                this.ignoringChangesToAttribute('complete', () => {
                  e.setAttribute('complete', '');
                })));
        }
        navigateFrame(e, t, s) {
          let i = this.findFrameElement(e, s);
          this.cancelInFlightNavigation(i),
            (this.pageSnapshot = PageSnapshot.fromElement(i).clone()),
            i.delegate.proposeVisitIfNavigatedWithAction(i, e, s),
            this.withCurrentNavigationElement(e, () => {
              i.src = t;
            });
        }
        proposeVisitIfNavigatedWithAction(e, t, s) {
          if (
            ((this.action = (function (...e) {
              let t = S('data-turbo-action', ...e);
              return u(t) ? t : null;
            })(s, t, e)),
            u(this.action))
          ) {
            let { visitCachedSnapshot: t } = e.delegate;
            e.delegate.fetchResponseLoaded = (s) => {
              if (e.src) {
                let { statusCode: i, redirected: r, response: n } = s,
                  o = {
                    response: {
                      statusCode: i,
                      redirected: r,
                      response: n,
                      responseHTML: e.ownerDocument.documentElement.outerHTML,
                    },
                    visitCachedSnapshot: t,
                    willRender: !1,
                    updateHistory: !1,
                    restorationIdentifier: this.restorationIdentifier,
                    snapshot: this.pageSnapshot,
                  };
                this.action && (o.action = this.action), M.visit(e.src, o);
              }
            };
          }
        }
        changeHistory() {
          if (this.action) {
            let e = y(this.action);
            M.history.update(
              e,
              l(this.element.src || ''),
              this.restorationIdentifier
            );
          }
        }
        willHandleFrameMissingFromResponse(e) {
          this.element.setAttribute('complete', '');
          let t = e.response,
            s = async (e, t = {}) => {
              e instanceof Response ? this.visitResponse(e) : M.visit(e, t);
            };
          return !p('turbo:frame-missing', {
            target: this.element,
            detail: { response: t, visit: s },
            cancelable: !0,
          }).defaultPrevented;
        }
        async visitResponse(e) {
          let t = new FetchResponse(e),
            s = await t.responseHTML,
            { location: i, redirected: r, statusCode: n } = t;
          return M.visit(i, {
            response: {
              redirected: r,
              statusCode: n,
              response: e,
              responseHTML: s,
            },
          });
        }
        findFrameElement(e, t) {
          var s;
          return null !==
            (s = J(
              S('data-turbo-frame', t, e) || this.element.getAttribute('target')
            )) && void 0 !== s
            ? s
            : this.element;
        }
        async extractForeignFrameElement(e) {
          let t;
          let s = CSS.escape(this.id);
          try {
            if ((t = G(e.querySelector(`turbo-frame#${s}`), this.sourceURL)))
              return t;
            if (
              (t = G(
                e.querySelector(`turbo-frame[src][recurse~=${s}]`),
                this.sourceURL
              ))
            )
              return await t.loaded, await this.extractForeignFrameElement(t);
          } catch (e) {
            return console.error(e), new FrameElement();
          }
          return null;
        }
        formActionIsVisitable(e, t) {
          let s = c(e, t);
          return M.locationIsVisitable(l(s), this.rootLocation);
        }
        shouldInterceptNavigation(e, t) {
          let s =
            S('data-turbo-frame', t, e) || this.element.getAttribute('target');
          if (
            (e instanceof HTMLFormElement &&
              !this.formActionIsVisitable(e, t)) ||
            !this.enabled ||
            '_top' == s
          )
            return !1;
          if (s) {
            let e = J(s);
            if (e) return !e.disabled;
          }
          return !!(
            M.elementIsNavigatable(e) &&
            (!t || M.elementIsNavigatable(t))
          );
        }
        get id() {
          return this.element.id;
        }
        get enabled() {
          return !this.element.disabled;
        }
        get sourceURL() {
          if (this.element.src) return this.element.src;
        }
        set sourceURL(e) {
          this.ignoringChangesToAttribute('src', () => {
            this.element.src = null != e ? e : null;
          });
        }
        get loadingStyle() {
          return this.element.loading;
        }
        get isLoading() {
          return (
            void 0 !== this.formSubmission ||
            void 0 !== this.resolveVisitPromise()
          );
        }
        get complete() {
          return this.element.hasAttribute('complete');
        }
        set complete(e) {
          this.ignoringChangesToAttribute('complete', () => {
            e
              ? (this.element.setAttribute('complete', ''),
                (this.element.previousSrc = this.element.src))
              : this.element.removeAttribute('complete');
          });
        }
        get isActive() {
          return this.element.isActive && this.connected;
        }
        get rootLocation() {
          var e;
          let t = this.element.ownerDocument.querySelector(
            'meta[name="turbo-root"]'
          );
          return l(
            null !== (e = null == t ? void 0 : t.content) && void 0 !== e
              ? e
              : '/'
          );
        }
        frameAllowsVisitingLocation(e, { href: t }, s) {
          return !p('turbo:frame-click', {
            target: e,
            detail: { url: t, originalEvent: s },
            cancelable: !0,
          }).defaultPrevented;
        }
        isIgnoringChangesTo(e) {
          return this.ignoredAttributes.has(e);
        }
        ignoringChangesToAttribute(e, t) {
          this.ignoredAttributes.add(e), t(), this.ignoredAttributes.delete(e);
        }
        withCurrentNavigationElement(e, t) {
          (this.currentNavigationElement = e),
            t(),
            delete this.currentNavigationElement;
        }
      };
      function J(e) {
        if (null != e) {
          let t = document.getElementById(e);
          if (t instanceof FrameElement) return t;
        }
      }
      function G(e, t) {
        if (e) {
          let s = e.getAttribute('src');
          if (null != s && null != t && l(s).href == l(t).href)
            throw Error(
              `Matching <turbo-frame id="${e.id}"> element has a source URL which references itself`
            );
          if (
            (e.ownerDocument !== document && (e = document.importNode(e, !0)),
            e instanceof FrameElement)
          )
            return e.connectedCallback(), e.disconnectedCallback(), e;
        }
      }
      let StreamElement = class StreamElement extends HTMLElement {
        static async renderElement(e) {
          await e.performAction();
        }
        async connectedCallback() {
          try {
            await this.render();
          } catch (e) {
            console.error(e);
          } finally {
            this.disconnect();
          }
        }
        async render() {
          var e;
          return null !== (e = this.renderPromise) && void 0 !== e
            ? e
            : (this.renderPromise = (async () => {
                let e = this.beforeRenderEvent;
                this.dispatchEvent(e) &&
                  (await g(), await e.detail.render(this));
              })());
        }
        disconnect() {
          try {
            this.remove();
          } catch (e) {}
        }
        removeDuplicateTargetChildren() {
          this.duplicateChildren.forEach((e) => e.remove());
        }
        get duplicateChildren() {
          var e;
          let t = this.targetElements
              .flatMap((e) => [...e.children])
              .filter((e) => !!e.id),
            s = [
              ...((null === (e = this.templateContent) || void 0 === e
                ? void 0
                : e.children) || []),
            ]
              .filter((e) => !!e.id)
              .map((e) => e.id);
          return t.filter((e) => s.includes(e.id));
        }
        get performAction() {
          if (this.action) {
            let e = I[this.action];
            if (e) return e;
            this.raise('unknown action');
          }
          this.raise('action attribute is missing');
        }
        get targetElements() {
          return this.target
            ? this.targetElementsById
            : this.targets
            ? this.targetElementsByQuery
            : void this.raise('target or targets attribute is missing');
        }
        get templateContent() {
          return this.templateElement.content.cloneNode(!0);
        }
        get templateElement() {
          if (null === this.firstElementChild) {
            let e = this.ownerDocument.createElement('template');
            return this.appendChild(e), e;
          }
          if (this.firstElementChild instanceof HTMLTemplateElement)
            return this.firstElementChild;
          this.raise('first child element must be a <template> element');
        }
        get action() {
          return this.getAttribute('action');
        }
        get target() {
          return this.getAttribute('target');
        }
        get targets() {
          return this.getAttribute('targets');
        }
        raise(e) {
          throw Error(`${this.description}: ${e}`);
        }
        get description() {
          var e, t;
          return null !==
            (t = (
              null !== (e = this.outerHTML.match(/<[^>]+>/)) && void 0 !== e
                ? e
                : []
            )[0]) && void 0 !== t
            ? t
            : '<turbo-stream>';
        }
        get beforeRenderEvent() {
          return new CustomEvent('turbo:before-stream-render', {
            bubbles: !0,
            cancelable: !0,
            detail: { newStream: this, render: StreamElement.renderElement },
          });
        }
        get targetElementsById() {
          var e;
          let t =
            null === (e = this.ownerDocument) || void 0 === e
              ? void 0
              : e.getElementById(this.target);
          return null !== t ? [t] : [];
        }
        get targetElementsByQuery() {
          var e;
          let t =
            null === (e = this.ownerDocument) || void 0 === e
              ? void 0
              : e.querySelectorAll(this.targets);
          return 0 !== t.length ? Array.prototype.slice.call(t) : [];
        }
      };
      let StreamSourceElement = class StreamSourceElement extends HTMLElement {
        constructor() {
          super(...arguments), (this.streamSource = null);
        }
        connectedCallback() {
          (this.streamSource = this.src.match(/^ws{1,2}:/)
            ? new WebSocket(this.src)
            : new EventSource(this.src)),
            V(this.streamSource);
        }
        disconnectedCallback() {
          this.streamSource && N(this.streamSource);
        }
        get src() {
          return this.getAttribute('src') || '';
        }
      };
      (FrameElement.delegateConstructor = FrameController),
        void 0 === customElements.get('turbo-frame') &&
          customElements.define('turbo-frame', FrameElement),
        void 0 === customElements.get('turbo-stream') &&
          customElements.define('turbo-stream', StreamElement),
        void 0 === customElements.get('turbo-stream-source') &&
          customElements.define('turbo-stream-source', StreamSourceElement),
        (() => {
          let e = document.currentScript;
          if (e && !e.hasAttribute('data-turbo-suppress-warning'))
            for (e = e.parentElement; e; ) {
              if (e == document.body)
                return console.warn(
                  v`
        You are loading Turbo from a <script> element inside the <body> element. This is probably not what you meant to do!

        Load your applicationâ€™s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.

        For more information, see: https://turbo.hotwired.dev/handbook/building#working-with-script-elements

        â€”â€”
        Suppress this warning by adding a "data-turbo-suppress-warning" attribute to: %s
      `,
                  e.outerHTML
                );
              e = e.parentElement;
            }
        })(),
        (window.Turbo = X),
        B();
    },
  },
]);
//# sourceMappingURL=vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js-69d00c3c0248.js.map
