exports.id = 585;
exports.ids = [585];
exports.modules = {

/***/ 32738:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-a54b4f32bdc1ef890ddd.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/xE8e5knHd_kg0cv2M9KhN/_buildManifest.js","static/xE8e5knHd_kg0cv2M9KhN/_ssgManifest.js"],"pages":{"/":["static/chunks/webpack-20d43e08bea62467b090.js","static/chunks/framework-92300432a1172ef1338b.js","static/chunks/main-1f18f76c3a76cf3a94ff.js","static/chunks/pages/index-dad92771cca171856b1e.js"],"/_app":["static/chunks/webpack-20d43e08bea62467b090.js","static/chunks/framework-92300432a1172ef1338b.js","static/chunks/main-1f18f76c3a76cf3a94ff.js","static/css/aa93648ca7d04e983561.css","static/chunks/pages/_app-6f5c86b3d0278b035d89.js"],"/_error":["static/chunks/webpack-20d43e08bea62467b090.js","static/chunks/framework-92300432a1172ef1338b.js","static/chunks/main-1f18f76c3a76cf3a94ff.js","static/chunks/pages/_error-94ed2348718d59e1af9b.js"],"/contact":["static/chunks/webpack-20d43e08bea62467b090.js","static/chunks/framework-92300432a1172ef1338b.js","static/chunks/main-1f18f76c3a76cf3a94ff.js","static/chunks/613-22bb74fb46fd4f6dcaaf.js","static/chunks/pages/contact-882d80530d5793b2042c.js"],"/portfolio":["static/chunks/webpack-20d43e08bea62467b090.js","static/chunks/framework-92300432a1172ef1338b.js","static/chunks/main-1f18f76c3a76cf3a94ff.js","static/chunks/pages/portfolio-9b6f56f4e99879c5ae0a.js"],"/resume":["static/chunks/webpack-20d43e08bea62467b090.js","static/chunks/framework-92300432a1172ef1338b.js","static/chunks/main-1f18f76c3a76cf3a94ff.js","static/chunks/pages/resume-69bd328419ed86b4efbb.js"],"/success":["static/chunks/webpack-20d43e08bea62467b090.js","static/chunks/framework-92300432a1172ef1338b.js","static/chunks/main-1f18f76c3a76cf3a94ff.js","static/chunks/pages/success-a7ae973addfd81a8b534.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 19392:
/***/ (function(module) {

"use strict";
module.exports = {};

/***/ }),

/***/ 35706:
/***/ (function(module) {

"use strict";
module.exports = {"Dg":[]};

/***/ }),

/***/ 19651:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.js
var dist = __webpack_require__(51143);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.js + 152 modules
var motion = __webpack_require__(35414);
;// CONCATENATED MODULE: ./public/Logo.svg
/* harmony default export */ var Logo = ({"src":"/_next/static/image/public/Logo.7a3a4b443cfb0595b6d954756f1cc851.svg","height":512,"width":512});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/hooks/useScroll.ts

function useScroll() {
  const {
    0: isScrolled,
    1: setIsScrolled
  } = (0,react.useState)(false);
  const {
    0: scrollTop,
    1: setScrollTop
  } = (0,react.useState)(0);
  (0,react.useEffect)(() => {
    const onScroll = () => {
      const scrollTop = window !== undefined ? window.pageYOffset : 80;
      setIsScrolled(scrollTop > 50);
      setScrollTop(scrollTop);
    };

    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return {
    isScrolled,
    scrollTop
  };
}
;// CONCATENATED MODULE: ./src/components/ThemeSwitch/index.tsx



function ThemeSwitch() {
  const {
    0: mounted,
    1: setMounted
  } = (0,react.useState)(false);
  const {
    theme,
    setTheme
  } = (0,dist/* useTheme */.F)();
  (0,react.useEffect)(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return /*#__PURE__*/jsx_runtime.jsx("a", {
    className: "cursor-pointer",
    onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    children: theme === 'dark' ? /*#__PURE__*/jsx_runtime.jsx("i", {
      className: "p-2 text-yellow-400 fas fa-sun fa-lg"
    }) : /*#__PURE__*/jsx_runtime.jsx("i", {
      className: "p-2 text-gray-800 far fa-moon fa-lg"
    })
  });
}
;// CONCATENATED MODULE: ./src/components/Navbar/index.tsx









const Navbar = () => {
  const {
    isScrolled,
    scrollTop
  } = useScroll();
  console.log(scrollTop);
  return /*#__PURE__*/jsx_runtime.jsx(motion/* motion.nav */.E.nav, {
    initial: {
      opacity: 1
    },
    animate: {
      y: isScrolled ? '-4.5rem' : 0,
      opacity: scrollTop > 50 ? 0 : 1
    },
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 30
    },
    className: "sticky top-0 z-50 flex justify-center w-full text-blue-700 bg-gray-500 dark:bg-gray-500 frosted h-14",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "flex items-center justify-between w-2/3",
      children: [/*#__PURE__*/jsx_runtime.jsx(next_link.default, {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime.jsx(motion/* motion.div */.E.div, {
          whileHover: {
            scale: 1.2
          },
          className: "flex h-full cursor-pointer",
          children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
            height: 30,
            width: 30,
            src: Logo,
            alt: "Website Logo"
          })
        })
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "flex items-center w-3/4 h-full xl:w-1/4 lg:w-2/3",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
          className: "flex items-center w-full h-full tracking-tighter justify-evenly",
          children: [/*#__PURE__*/jsx_runtime.jsx(next_link.default, {
            passHref: true,
            href: "/portfolio",
            children: /*#__PURE__*/jsx_runtime.jsx("li", {
              className: "nav-btn",
              children: "Portfolio"
            })
          }), /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
            passHref: true,
            href: "/resume",
            children: /*#__PURE__*/jsx_runtime.jsx("li", {
              className: "nav-btn",
              children: "Resume"
            })
          }), /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
            passHref: true,
            href: "/contact",
            children: /*#__PURE__*/jsx_runtime.jsx("li", {
              className: "nav-btn",
              children: "Contact"
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "flex cursor-pointer",
        children: /*#__PURE__*/jsx_runtime.jsx(ThemeSwitch, {})
      })]
    })
  });
};

/* harmony default export */ var components_Navbar = (Navbar);
;// CONCATENATED MODULE: ./src/pages/_app.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(dist/* ThemeProvider */.f, {
    attribute: "class",
    defaultTheme: "system",
    children: [/*#__PURE__*/jsx_runtime.jsx(components_Navbar, {}), /*#__PURE__*/jsx_runtime.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 37485:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56859);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__.default {
  static async getInitialProps(ctx) {
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1__.default.getInitialProps(ctx);
    return _objectSpread({}, initialProps);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
      lang: "en",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
          rel: "icon",
          type: "image/svg+xml",
          href: "/reddit.svg"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
          property: "og:site_name",
          content: "AKJ.DEV"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
          property: "twitter:site",
          content: "@AKJ.DEV"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
          property: "twitter:card",
          content: "summary"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
          property: "og:type",
          content: "website"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
          rel: "preconnect",
          href: "https://fonts.gstatic.com"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap",
          rel: "stylesheet"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
          integrity: "sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==",
          crossOrigin: "anonymous"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
        className: "bg-gray-300 dark:bg-gray-600",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})]
      })]
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ 82308:
/***/ (function(module) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 82308;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 14453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;