/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 94072:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ contact; }
/* harmony export */ });
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50162);

function contact(req, res) {
  __webpack_require__(59738).config();

  const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'alecjohnsondev@gmail.com',
      pass: process.env.password
    },
    secure: true
  });
  const mailData = {
    from: `${req.body.email}`,
    to: 'alecjohnsondev@gmail.com',
    subject: `Message From ${req.body.fullName}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);else console.log(info);
  });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end();
}

/***/ }),

/***/ 26348:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ next_serverless_loaderpage_2Fapi_2Fcontact_absolutePagePath_private_next_pages_2Fapi_2Fcontact_ts_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_distDir_private_dot_next_buildId_xE8e5knHd_kg0cv2M9KhN_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_226c725b3372bbb123107059506c69b3a4_22_2C_22previewModeSigningKey_22_3A_22756324469eb05dcf57a2f5a5312d82f25ecb9d0653d9700ae0c3d89cc05c13b9_22_2C_22previewModeEncryptionKey_22_3A_22066cb7e6f40845d774e4616b3961181f85d03fc1ef693b3436687e72ccf85532_22_7D_loadedEnvFiles_W3sicGF0aCI6Ii5lbnYiLCJjb250ZW50cyI6InBhc3N3b3JkPTEyM2FrajMyMSJ9XQ_3D_3D_i18n_; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/next-server/server/node-polyfill-fetch.js
var node_polyfill_fetch = __webpack_require__(3660);
;// CONCATENATED MODULE: ./.next/routes-manifest.json
var routes_manifest_namespaceObject = {"Dg":[]};
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/api-handler.js
var api_handler = __webpack_require__(88277);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/index.js?page=%2Fapi%2Fcontact&absolutePagePath=private-next-pages%2Fapi%2Fcontact.ts&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=private-next-pages%2F_document.tsx&absoluteErrorPath=next%2Fdist%2Fpages%2F_error&absolute404Path=&distDir=private-dot-next&buildId=xE8e5knHd_kg0cv2M9KhN&assetPrefix=&generateEtags=true&poweredByHeader=true&canonicalBase=&basePath=&runtimeConfig=&previewProps=%7B%22previewModeId%22%3A%226c725b3372bbb123107059506c69b3a4%22%2C%22previewModeSigningKey%22%3A%22756324469eb05dcf57a2f5a5312d82f25ecb9d0653d9700ae0c3d89cc05c13b9%22%2C%22previewModeEncryptionKey%22%3A%22066cb7e6f40845d774e4616b3961181f85d03fc1ef693b3436687e72ccf85532%22%7D&loadedEnvFiles=W3sicGF0aCI6Ii5lbnYiLCJjb250ZW50cyI6InBhc3N3b3JkPTEyM2FrajMyMSJ9XQ%3D%3D&i18n=!

        
      const { processEnv } = __webpack_require__(72333)
      processEnv([{"path":".env","contents":"password=123akj321"}])
    
        
        const runtimeConfig = {}
        ;
        

        

        const combinedRewrites = Array.isArray(routes_manifest_namespaceObject.Dg)
          ? routes_manifest_namespaceObject.Dg
          : []

        if (!Array.isArray(routes_manifest_namespaceObject.Dg)) {
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.beforeFiles)
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.afterFiles)
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.fallback)
        }

        const apiHandler = (0,api_handler/* getApiHandler */.Y)({
          pageModule: __webpack_require__(94072),
          rewrites: combinedRewrites,
          i18n: undefined,
          page: "/api/contact",
          basePath: "",
          pageIsDynamic: false,
          encodedPreviewProps: {previewModeId:"6c725b3372bbb123107059506c69b3a4",previewModeSigningKey:"756324469eb05dcf57a2f5a5312d82f25ecb9d0653d9700ae0c3d89cc05c13b9",previewModeEncryptionKey:"066cb7e6f40845d774e4616b3961181f85d03fc1ef693b3436687e72ccf85532"}
        })
        /* harmony default export */ var next_serverless_loaderpage_2Fapi_2Fcontact_absolutePagePath_private_next_pages_2Fapi_2Fcontact_ts_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_distDir_private_dot_next_buildId_xE8e5knHd_kg0cv2M9KhN_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_226c725b3372bbb123107059506c69b3a4_22_2C_22previewModeSigningKey_22_3A_22756324469eb05dcf57a2f5a5312d82f25ecb9d0653d9700ae0c3d89cc05c13b9_22_2C_22previewModeEncryptionKey_22_3A_22066cb7e6f40845d774e4616b3961181f85d03fc1ef693b3436687e72ccf85532_22_7D_loadedEnvFiles_W3sicGF0aCI6Ii5lbnYiLCJjb250ZW50cyI6InBhc3N3b3JkPTEyM2FrajMyMSJ9XQ_3D_3D_i18n_ = (apiHandler);
      

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

/***/ 64293:
/***/ (function(module) {

"use strict";
module.exports = require("buffer");;

/***/ }),

/***/ 63129:
/***/ (function(module) {

"use strict";
module.exports = require("child_process");;

/***/ }),

/***/ 76417:
/***/ (function(module) {

"use strict";
module.exports = require("crypto");;

/***/ }),

/***/ 40881:
/***/ (function(module) {

"use strict";
module.exports = require("dns");;

/***/ }),

/***/ 28614:
/***/ (function(module) {

"use strict";
module.exports = require("events");;

/***/ }),

/***/ 35747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 98605:
/***/ (function(module) {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ 57211:
/***/ (function(module) {

"use strict";
module.exports = require("https");;

/***/ }),

/***/ 11631:
/***/ (function(module) {

"use strict";
module.exports = require("net");;

/***/ }),

/***/ 12087:
/***/ (function(module) {

"use strict";
module.exports = require("os");;

/***/ }),

/***/ 85622:
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 94213:
/***/ (function(module) {

"use strict";
module.exports = require("punycode");;

/***/ }),

/***/ 71191:
/***/ (function(module) {

"use strict";
module.exports = require("querystring");;

/***/ }),

/***/ 92413:
/***/ (function(module) {

"use strict";
module.exports = require("stream");;

/***/ }),

/***/ 24304:
/***/ (function(module) {

"use strict";
module.exports = require("string_decoder");;

/***/ }),

/***/ 4016:
/***/ (function(module) {

"use strict";
module.exports = require("tls");;

/***/ }),

/***/ 78835:
/***/ (function(module) {

"use strict";
module.exports = require("url");;

/***/ }),

/***/ 31669:
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ 78761:
/***/ (function(module) {

"use strict";
module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = function() {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [894,911], function() { return __webpack_require__(26348); })
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [{"url":"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap","content":"@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX-KVElMYYaJe8bpLHnCwDKjbLeEw.woff) format('woff')}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjR7_MIU.woff) format('woff')}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjXr8MIU.woff) format('woff')}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYXgKVElMYYaJe8bpLHnCwDKtdU.woff) format('woff')}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjSL9MIU.woff) format('woff')}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjQ76MIU.woff) format('woff')}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjWr7MIU.woff) format('woff')}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX-KVElMYYaJe8bpLHnCwDKjbLuGqZJW9XjDlN8.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX-KVElMYYaJe8bpLHnCwDKjbLuE6ZJW9XjDlN8.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX-KVElMYYaJe8bpLHnCwDKjbLuFKZJW9XjDlN8.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX-KVElMYYaJe8bpLHnCwDKjbLuGKZJW9XjDlN8.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX-KVElMYYaJe8bpLHnCwDKjbLuGaZJW9XjDlN8.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:100;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX-KVElMYYaJe8bpLHnCwDKjbLuF6ZJW9XjDg.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjR7_AIxsdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjR7_AIVsdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjR7_AIJsdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjR7_AI5sdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjR7_AI9sdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:200;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjR7_AIFsdP3pBms.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIxsdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIVsdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIJsdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjXr8AI5sdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjXr8AI9sdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIFsdP3pBms.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYXgKVElMYYaJe8bpLHnCwDKhdzeFaxOedfTDw.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYXgKVElMYYaJe8bpLHnCwDKhdXeFaxOedfTDw.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYXgKVElMYYaJe8bpLHnCwDKhdLeFaxOedfTDw.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYXgKVElMYYaJe8bpLHnCwDKhd7eFaxOedfTDw.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYXgKVElMYYaJe8bpLHnCwDKhd_eFaxOedfTDw.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYXgKVElMYYaJe8bpLHnCwDKhdHeFaxOedc.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjSL9AIxsdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjSL9AIVsdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjSL9AIJsdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjSL9AI5sdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjSL9AI9sdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjSL9AIFsdP3pBms.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIxsdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIVsdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIJsdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjQ76AI5sdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjQ76AI9sdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIFsdP3pBms.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIxsdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIVsdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIJsdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjWr7AI5sdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjWr7AI9sdP3pBmtF8A.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v9/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIFsdP3pBms.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}"}];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);/* webpack/runtime/require chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			91: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = function(chunkId) { return installedChunks[chunkId]; };
/******/ 		
/******/ 		var installChunk = function(chunk) {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	!function() {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			__webpack_require__.e(894);
/******/ 			__webpack_require__.e(911);
/******/ 			return next();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;