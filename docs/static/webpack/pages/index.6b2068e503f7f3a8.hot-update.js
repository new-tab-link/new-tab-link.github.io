"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/i18nconf/i18nSetting.ts":
/*!*************************************!*\
  !*** ./src/i18nconf/i18nSetting.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   i18nData: function() { return /* binding */ i18nData; },\n/* harmony export */   i18nLogger: function() { return /* binding */ i18nLogger; },\n/* harmony export */   resources: function() { return /* binding */ resources; }\n/* harmony export */ });\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-i18next */ \"./node_modules/.pnpm/react-i18next@15.0.2_i18next@23.15.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next-browser-languagedetector */ \"./node_modules/.pnpm/i18next-browser-languagedetector@8.0.0/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js\");\n/* harmony import */ var i18next_http_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next-http-backend */ \"./node_modules/.pnpm/i18next-http-backend@2.6.1_encoding@0.1.13/node_modules/i18next-http-backend/esm/index.js\");\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next */ \"./node_modules/.pnpm/i18next@23.15.1/node_modules/i18next/dist/esm/i18next.js\");\n/* harmony import */ var _src_libs_fanfanlo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/libs/fanfanlo */ \"./src/libs/fanfanlo/index.ts\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/config */ \"./node_modules/.pnpm/next@14.2.11_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.78.0/node_modules/next/config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ i18nLogger,resources,i18nData,default auto */ var _getConfig_publicRuntimeConfig;\n\n\n\n\n\n\nconst isProduction = \"development\" === \"production\";\nconst isBrowser = ()=>\"object\" !== \"undefined\";\nconst fileDateVersion = (_getConfig_publicRuntimeConfig = next_config__WEBPACK_IMPORTED_MODULE_5___default()().publicRuntimeConfig) === null || _getConfig_publicRuntimeConfig === void 0 ? void 0 : _getConfig_publicRuntimeConfig.version;\nconst i18nLogger = new _src_libs_fanfanlo__WEBPACK_IMPORTED_MODULE_4__.Log(false, \"i18n\");\nconst backendOptions = {\n    // loadPath: '/_locales/{{lng}}/messages.json',\n    loadPath: function(lngs, namespaces) {\n        const log = i18nLogger.sub(false, \"i18n loadpath\");\n        log.pause = true;\n        let lng = lngs[0];\n        lng = \"zh-CN\";\n        let p = \"/options/_locales/\".concat(lngs[0].replace(\"-\", \"_\"), \"/messages.json\");\n        p = \"/locales/zh-CN/ns1/content.json\";\n        // p = `locales/${lng}/${namespaces[0].replaceAll('___', '-').replaceAll(\"__\", \"/\")}/content.json?v=${fileDateVersion}`\n        p = \"locales/\".concat(lng, \"/\").concat(namespaces[0], \".json?v=\").concat(fileDateVersion);\n        // if (isProduction) {\n        //   if (typeof window !== \"undefined\") {\n        //     const url = new URL(window.location.href);\n        //     p = `${url.protocol}://${url.hostname}:${url.port}${p}`;\n        //   }\n        // }\n        // log.print(`backend loadpath arguments444455`, lngs, namespaces, p);\n        log.log(\"lngs=\", lngs);\n        log.log(\"namespaces=\", namespaces);\n        log.log(\"p=\", p);\n        // console.log(`i18n backend loadpath`, lngs, namespaces);\n        return p;\n    },\n    parse: function(data, languages, namespaces) {\n        const log = i18nLogger.sub(false, \"i18n backend parse\");\n        log.pause = true;\n        // log.log(`parrrse`, data, languages, namespaces);\n        const l = JSON.parse(data);\n        log.print(\"before set i18ndata\", i18nData);\n        i18nData = l;\n        // log.log(`i18nData.rule.scripts.sys.rules`, i18nData.rule.scripts.sys.rules);\n        log.log(\"parrrse\", languages, namespaces, i18nData);\n        return l;\n    }\n};\nconst backend = new i18next_http_backend__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nbackend.init(null, backendOptions);\nconst i18n = i18next__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nconst resources = {\n};\n// export let i18nData: II18n;\nlet i18nData; //= zhCN;\ni18n.on(\"languageChanged\", async function(lng) {\n    const log = i18nLogger.sub(false, \"onlanguageChanged\");\n    log.pause = true;\n    log.log(\"lllllng\", lng);\n    lng = \"en\";\n    const p = \"/options/_locales/\".concat(lng.replace(\"-\", \"_\"), \"/messages.json\");\n});\ni18n.use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).use(backend).use(react_i18next__WEBPACK_IMPORTED_MODULE_0__.initReactI18next).init({\n    load: \"currentOnly\",\n    // supportedLngs: ['zh-CN', 'zh-TW', 'en', 'en-GB', 'ja'],\n    // resources,\n    // fallbackLng: \"en\",\n    // lng: \"zh-CN\",\n    partialBundledLanguages: true,\n    ns: [],\n    debug: false,\n    interpolation: {\n        escapeValue: false\n    },\n    detection: {\n        caches: [\n            \"localStorage\"\n        ]\n    }\n});\ni18n.on(\"missingKey\", function(lngs, namespace, key, res) {\n    console.error(\"i18n mssing key, lngs=%s, namespace=%s, key=%s, res=%s\", lngs, namespace, key, res);\n});\ni18n.on(\"loaded\", function(loaded) {\n    const log = i18nLogger.sub(false, \"onloaded\");\n    log.pause = true;\n    log.log(\"onloaded arguments\", loaded);\n});\ni18n.on(\"failedLoading\", function(lng, ns, msg) {\n    const log = i18nLogger.sub(false, \"onfailedLoading\");\n    log.pause = true;\n    log.log(\"failedLoading arguments\", lng, ns, msg);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (i18n);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaTE4bmNvbmYvaTE4blNldHRpbmcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OzsrRkFpQndCQTtBQWhCeUI7QUFPZTtBQUNHO0FBQ3JDO0FBQ1c7QUFDTDtBQUdwQyxNQUFNTSxlQUFlQyxrQkFBeUI7QUFDOUMsTUFBTUMsWUFBWSxJQUFNLGFBQWtCO0FBQzFDLE1BQU1DLG1CQUFrQlQsaUNBQUFBLGtEQUFTQSxHQUFHVSxtQkFBbUIsY0FBL0JWLHFEQUFBQSwrQkFBaUNXLE9BQU87QUFDekQsTUFBTUMsYUFBYSxJQUFJUCxtREFBR0EsQ0FBQyxPQUFRLFFBQU87QUFDakQsTUFBTVEsaUJBQWlCO0lBQ3JCLCtDQUErQztJQUMvQ0MsVUFBVSxTQUFVQyxJQUFjLEVBQUVDLFVBQW9CO1FBQ3RELE1BQU1DLE1BQU1MLFdBQVdNLEdBQUcsQ0FBQyxPQUFRO1FBQ25DRCxJQUFJRSxLQUFLLEdBQUc7UUFDWixJQUFJQyxNQUFNTCxJQUFJLENBQUMsRUFBRTtRQUNqQkssTUFBTTtRQUNOLElBQUlDLElBQUkscUJBQStDLE9BQTFCTixJQUFJLENBQUMsRUFBRSxDQUFDTyxPQUFPLENBQUMsS0FBSyxNQUFLO1FBQ3ZERCxJQUFLO1FBQ0wsdUhBQXVIO1FBQ3ZIQSxJQUFJLFdBQWtCTCxPQUFQSSxLQUFJLEtBQTJCWCxPQUF4Qk8sVUFBVSxDQUFDLEVBQUUsRUFBQyxZQUEwQixPQUFoQlA7UUFDOUMsc0JBQXNCO1FBQ3RCLHlDQUF5QztRQUN6QyxpREFBaUQ7UUFDakQsK0RBQStEO1FBQy9ELE1BQU07UUFDTixJQUFJO1FBQ0osc0VBQXNFO1FBQ3RFUSxJQUFJQSxHQUFHLENBQUUsU0FBUUY7UUFDakJFLElBQUlBLEdBQUcsQ0FBRSxlQUFjRDtRQUN2QkMsSUFBSUEsR0FBRyxDQUFDLE1BQU1JO1FBQ2QsMERBQTBEO1FBQzFELE9BQU9BO0lBQ1Q7SUFDQUUsT0FBTyxTQUNMQyxJQUFZLEVBQ1pDLFNBQTZCLEVBQzdCVCxVQUE4QjtRQUU5QixNQUFNQyxNQUFNTCxXQUFXTSxHQUFHLENBQUMsT0FBUTtRQUNuQ0QsSUFBSUUsS0FBSyxHQUFHO1FBQ1osbURBQW1EO1FBQ25ELE1BQU1PLElBQUlDLEtBQUtKLEtBQUssQ0FBQ0M7UUFDckJQLElBQUlXLEtBQUssQ0FBRSx1QkFBc0JDO1FBQ2pDQSxXQUFXSDtRQUNYLCtFQUErRTtRQUMvRVQsSUFBSUEsR0FBRyxDQUFFLFdBQVVRLFdBQVdULFlBQVlhO1FBQzFDLE9BQU9IO0lBQ1Q7QUFDRjtBQUNBLE1BQU1JLFVBQVUsSUFBSTNCLDREQUFPQTtBQUMzQjJCLFFBQVFDLElBQUksQ0FBQyxNQUFNbEI7QUFDbkIsTUFBTW1CLE9BQU81QiwrQ0FBT0E7QUFDYixNQUFNNkIsWUFBc0I7QUFPbkMsRUFBRTtBQUVGLDhCQUE4QjtBQUN2QixJQUFJSixTQUFnQixDQUFDLFNBQVM7QUFDckNHLEtBQUtFLEVBQUUsQ0FBQyxtQkFBbUIsZUFBZ0JkLEdBQUc7SUFDNUMsTUFBTUgsTUFBTUwsV0FBV00sR0FBRyxDQUFDLE9BQVE7SUFDbkNELElBQUlFLEtBQUssR0FBRztJQUNaRixJQUFJQSxHQUFHLENBQUUsV0FBVUc7SUFDbkJBLE1BQU07SUFDTixNQUFNQyxJQUFJLHFCQUEyQyxPQUF0QkQsSUFBSUUsT0FBTyxDQUFDLEtBQUssTUFBSztBQUN2RDtBQUNBVSxLQUNHRyxHQUFHLENBQUNqQyx3RUFBZ0JBLEVBQ3BCaUMsR0FBRyxDQUFDTCxTQUNKSyxHQUFHLENBQUNsQywyREFBZ0JBLEVBQ3BCOEIsSUFBSSxDQUFxQjtJQUN4QkssTUFBTTtJQUNOLDBEQUEwRDtJQUMxRCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQkMseUJBQXdCO0lBQ3hCQyxJQUFHLEVBQUU7SUFFTEMsT0FBTztJQUNQQyxlQUFlO1FBQ2JDLGFBQWE7SUFDZjtJQUNBQyxXQUFXO1FBQ1RDLFFBQVE7WUFBQztTQUFlO0lBQzFCO0FBQ0Y7QUFFRlgsS0FBS0UsRUFBRSxDQUFDLGNBQWMsU0FBVW5CLElBQUksRUFBRTZCLFNBQVMsRUFBRUMsR0FBRyxFQUFFQyxHQUFHO0lBQ3ZEQyxRQUFRQyxLQUFLLENBQ1gsMERBQ0FqQyxNQUNBNkIsV0FDQUMsS0FDQUM7QUFFSjtBQUVBZCxLQUFLRSxFQUFFLENBQUMsVUFBVSxTQUFVZSxNQUFNO0lBQ2hDLE1BQU1oQyxNQUFNTCxXQUFXTSxHQUFHLENBQUMsT0FBUTtJQUNuQ0QsSUFBSUUsS0FBSyxHQUFHO0lBQ1pGLElBQUlBLEdBQUcsQ0FBRSxzQkFBcUJnQztBQUNoQztBQUVBakIsS0FBS0UsRUFBRSxDQUFDLGlCQUFpQixTQUFVZCxHQUFHLEVBQUVrQixFQUFFLEVBQUVZLEdBQUc7SUFDN0MsTUFBTWpDLE1BQU1MLFdBQVdNLEdBQUcsQ0FBQyxPQUFRO0lBQ25DRCxJQUFJRSxLQUFLLEdBQUc7SUFDWkYsSUFBSUEsR0FBRyxDQUFFLDJCQUEwQkcsS0FBS2tCLElBQUlZO0FBQzlDO0FBRUEsK0RBQWVsQixJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9pMThuY29uZi9pMThuU2V0dGluZy50cz9iNGU1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBpbml0UmVhY3RJMThuZXh0IH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcclxuLy8gaW1wb3J0IHpoQ04gZnJvbSAnLi9sb2NhbGVzL3poLUNOLmpzb24nO1xyXG4vLyBpbXBvcnQgZW4gZnJvbSAnLi9sb2NhbGVzL21lc3NhZ2VzLmpzb24nO1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IGkxOG5SZXNvdXJjZSB9IGZyb20gXCIuL3Jlc291cmNlXCI7XHJcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSBcImkxOG5leHQvdHlwZXNjcmlwdC9vcHRpb25zXCI7XHJcblxyXG5pbXBvcnQgTGFuZ3VhZ2VEZXRlY3RvciBmcm9tIFwiaTE4bmV4dC1icm93c2VyLWxhbmd1YWdlZGV0ZWN0b3JcIjtcclxuaW1wb3J0IEJhY2tlbmQsIHsgSHR0cEJhY2tlbmRPcHRpb25zIH0gZnJvbSBcImkxOG5leHQtaHR0cC1iYWNrZW5kXCI7XHJcbmltcG9ydCBpMThuZXh0IGZyb20gXCJpMThuZXh0XCI7XHJcbmltcG9ydCB7IExvZyB9IGZyb20gXCJAc3JjL2xpYnMvZmFuZmFubG9cIjtcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tIFwibmV4dC9jb25maWdcIjtcclxudHlwZSBJSTE4biA9IHR5cGVvZiBpMThuUmVzb3VyY2U7XHJcblxyXG5jb25zdCBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCI7XHJcbmNvbnN0IGlzQnJvd3NlciA9ICgpID0+IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XHJcbmNvbnN0IGZpbGVEYXRlVmVyc2lvbiA9IGdldENvbmZpZygpLnB1YmxpY1J1bnRpbWVDb25maWc/LnZlcnNpb25cclxuZXhwb3J0IGNvbnN0IGkxOG5Mb2dnZXIgPSBuZXcgTG9nKGZhbHNlLCBgaTE4bmApO1xyXG5jb25zdCBiYWNrZW5kT3B0aW9ucyA9IHtcclxuICAvLyBsb2FkUGF0aDogJy9fbG9jYWxlcy97e2xuZ319L21lc3NhZ2VzLmpzb24nLFxyXG4gIGxvYWRQYXRoOiBmdW5jdGlvbiAobG5nczogc3RyaW5nW10sIG5hbWVzcGFjZXM6IHN0cmluZ1tdKSB7XHJcbiAgICBjb25zdCBsb2cgPSBpMThuTG9nZ2VyLnN1YihmYWxzZSwgYGkxOG4gbG9hZHBhdGhgKTtcclxuICAgIGxvZy5wYXVzZSA9IHRydWU7XHJcbiAgICBsZXQgbG5nID0gbG5nc1swXVxyXG4gICAgbG5nID0gJ3poLUNOJ1xyXG4gICAgbGV0IHAgPSBgL29wdGlvbnMvX2xvY2FsZXMvJHtsbmdzWzBdLnJlcGxhY2UoXCItXCIsIFwiX1wiKX0vbWVzc2FnZXMuanNvbmA7XHJcbiAgICBwID0gYC9sb2NhbGVzL3poLUNOL25zMS9jb250ZW50Lmpzb25gO1xyXG4gICAgLy8gcCA9IGBsb2NhbGVzLyR7bG5nfS8ke25hbWVzcGFjZXNbMF0ucmVwbGFjZUFsbCgnX19fJywgJy0nKS5yZXBsYWNlQWxsKFwiX19cIiwgXCIvXCIpfS9jb250ZW50Lmpzb24/dj0ke2ZpbGVEYXRlVmVyc2lvbn1gXHJcbiAgICBwID0gYGxvY2FsZXMvJHtsbmd9LyR7bmFtZXNwYWNlc1swXX0uanNvbj92PSR7ZmlsZURhdGVWZXJzaW9ufWBcclxuICAgIC8vIGlmIChpc1Byb2R1Y3Rpb24pIHtcclxuICAgIC8vICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIC8vICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgIC8vICAgICBwID0gYCR7dXJsLnByb3RvY29sfTovLyR7dXJsLmhvc3RuYW1lfToke3VybC5wb3J0fSR7cH1gO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgICAvLyBsb2cucHJpbnQoYGJhY2tlbmQgbG9hZHBhdGggYXJndW1lbnRzNDQ0NDU1YCwgbG5ncywgbmFtZXNwYWNlcywgcCk7XHJcbiAgICBsb2cubG9nKGBsbmdzPWAsIGxuZ3MpO1xyXG4gICAgbG9nLmxvZyhgbmFtZXNwYWNlcz1gLCBuYW1lc3BhY2VzKTtcclxuICAgIGxvZy5sb2coXCJwPVwiLCBwKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGBpMThuIGJhY2tlbmQgbG9hZHBhdGhgLCBsbmdzLCBuYW1lc3BhY2VzKTtcclxuICAgIHJldHVybiBwO1xyXG4gIH0sXHJcbiAgcGFyc2U6IGZ1bmN0aW9uIChcclxuICAgIGRhdGE6IHN0cmluZyxcclxuICAgIGxhbmd1YWdlcz86IHN0cmluZyB8IHN0cmluZ1tdLFxyXG4gICAgbmFtZXNwYWNlcz86IHN0cmluZyB8IHN0cmluZ1tdXHJcbiAgKSB7XHJcbiAgICBjb25zdCBsb2cgPSBpMThuTG9nZ2VyLnN1YihmYWxzZSwgYGkxOG4gYmFja2VuZCBwYXJzZWApO1xyXG4gICAgbG9nLnBhdXNlID0gdHJ1ZTtcclxuICAgIC8vIGxvZy5sb2coYHBhcnJyc2VgLCBkYXRhLCBsYW5ndWFnZXMsIG5hbWVzcGFjZXMpO1xyXG4gICAgY29uc3QgbCA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICBsb2cucHJpbnQoYGJlZm9yZSBzZXQgaTE4bmRhdGFgLCBpMThuRGF0YSk7XHJcbiAgICBpMThuRGF0YSA9IGwgYXMgSUkxOG47XHJcbiAgICAvLyBsb2cubG9nKGBpMThuRGF0YS5ydWxlLnNjcmlwdHMuc3lzLnJ1bGVzYCwgaTE4bkRhdGEucnVsZS5zY3JpcHRzLnN5cy5ydWxlcyk7XHJcbiAgICBsb2cubG9nKGBwYXJycnNlYCwgbGFuZ3VhZ2VzLCBuYW1lc3BhY2VzLCBpMThuRGF0YSk7XHJcbiAgICByZXR1cm4gbDtcclxuICB9LFxyXG59O1xyXG5jb25zdCBiYWNrZW5kID0gbmV3IEJhY2tlbmQoKTtcclxuYmFja2VuZC5pbml0KG51bGwsIGJhY2tlbmRPcHRpb25zKTtcclxuY29uc3QgaTE4biA9IGkxOG5leHQ7XHJcbmV4cG9ydCBjb25zdCByZXNvdXJjZXM6IFJlc291cmNlID0ge1xyXG4gIC8vICd6aC1DTic6IHtcclxuICAvLyAgIHRyYW5zbGF0aW9uOiBfLm1lcmdlKHt9LCB6aENOKSxcclxuICAvLyB9LFxyXG4gIC8vIGVuOiB7XHJcbiAgLy8gICB0cmFuc2xhdGlvbjogXy5tZXJnZSh7fSwgZW4pLFxyXG4gIC8vIH0sXHJcbn07XHJcblxyXG4vLyBleHBvcnQgbGV0IGkxOG5EYXRhOiBJSTE4bjtcclxuZXhwb3J0IGxldCBpMThuRGF0YTogSUkxOG47IC8vPSB6aENOO1xyXG5pMThuLm9uKFwibGFuZ3VhZ2VDaGFuZ2VkXCIsIGFzeW5jIGZ1bmN0aW9uIChsbmcpIHtcclxuICBjb25zdCBsb2cgPSBpMThuTG9nZ2VyLnN1YihmYWxzZSwgYG9ubGFuZ3VhZ2VDaGFuZ2VkYCk7XHJcbiAgbG9nLnBhdXNlID0gdHJ1ZTtcclxuICBsb2cubG9nKGBsbGxsbG5nYCwgbG5nKTtcclxuICBsbmcgPSBcImVuXCI7XHJcbiAgY29uc3QgcCA9IGAvb3B0aW9ucy9fbG9jYWxlcy8ke2xuZy5yZXBsYWNlKFwiLVwiLCBcIl9cIil9L21lc3NhZ2VzLmpzb25gO1xyXG59KTtcclxuaTE4blxyXG4gIC51c2UoTGFuZ3VhZ2VEZXRlY3RvcilcclxuICAudXNlKGJhY2tlbmQpXHJcbiAgLnVzZShpbml0UmVhY3RJMThuZXh0KVxyXG4gIC5pbml0PEh0dHBCYWNrZW5kT3B0aW9ucz4oe1xyXG4gICAgbG9hZDogXCJjdXJyZW50T25seVwiLFxyXG4gICAgLy8gc3VwcG9ydGVkTG5nczogWyd6aC1DTicsICd6aC1UVycsICdlbicsICdlbi1HQicsICdqYSddLFxyXG4gICAgLy8gcmVzb3VyY2VzLFxyXG4gICAgLy8gZmFsbGJhY2tMbmc6IFwiZW5cIixcclxuICAgIC8vIGxuZzogXCJ6aC1DTlwiLFxyXG4gICAgcGFydGlhbEJ1bmRsZWRMYW5ndWFnZXM6dHJ1ZSxcclxuICAgIG5zOltdLFxyXG4gICAgXHJcbiAgICBkZWJ1ZzogZmFsc2UsXHJcbiAgICBpbnRlcnBvbGF0aW9uOiB7XHJcbiAgICAgIGVzY2FwZVZhbHVlOiBmYWxzZSwgLy8gbm90IG5lZWRlZCBmb3IgcmVhY3QgYXMgaXQgZXNjYXBlcyBieSBkZWZhdWx0XHJcbiAgICB9LFxyXG4gICAgZGV0ZWN0aW9uOiB7XHJcbiAgICAgIGNhY2hlczogW1wibG9jYWxTdG9yYWdlXCJdLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbmkxOG4ub24oXCJtaXNzaW5nS2V5XCIsIGZ1bmN0aW9uIChsbmdzLCBuYW1lc3BhY2UsIGtleSwgcmVzKSB7XHJcbiAgY29uc29sZS5lcnJvcihcclxuICAgIFwiaTE4biBtc3Npbmcga2V5LCBsbmdzPSVzLCBuYW1lc3BhY2U9JXMsIGtleT0lcywgcmVzPSVzXCIsXHJcbiAgICBsbmdzLFxyXG4gICAgbmFtZXNwYWNlLFxyXG4gICAga2V5LFxyXG4gICAgcmVzXHJcbiAgKTtcclxufSk7XHJcblxyXG5pMThuLm9uKFwibG9hZGVkXCIsIGZ1bmN0aW9uIChsb2FkZWQpIHtcclxuICBjb25zdCBsb2cgPSBpMThuTG9nZ2VyLnN1YihmYWxzZSwgYG9ubG9hZGVkYCk7XHJcbiAgbG9nLnBhdXNlID0gdHJ1ZTtcclxuICBsb2cubG9nKGBvbmxvYWRlZCBhcmd1bWVudHNgLCBsb2FkZWQpO1xyXG59KTtcclxuXHJcbmkxOG4ub24oXCJmYWlsZWRMb2FkaW5nXCIsIGZ1bmN0aW9uIChsbmcsIG5zLCBtc2cpIHtcclxuICBjb25zdCBsb2cgPSBpMThuTG9nZ2VyLnN1YihmYWxzZSwgYG9uZmFpbGVkTG9hZGluZ2ApO1xyXG4gIGxvZy5wYXVzZSA9IHRydWU7XHJcbiAgbG9nLmxvZyhgZmFpbGVkTG9hZGluZyBhcmd1bWVudHNgLCBsbmcsIG5zLCBtc2cpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGkxOG47XHJcbiJdLCJuYW1lcyI6WyJnZXRDb25maWciLCJpbml0UmVhY3RJMThuZXh0IiwiTGFuZ3VhZ2VEZXRlY3RvciIsIkJhY2tlbmQiLCJpMThuZXh0IiwiTG9nIiwiaXNQcm9kdWN0aW9uIiwicHJvY2VzcyIsImlzQnJvd3NlciIsImZpbGVEYXRlVmVyc2lvbiIsInB1YmxpY1J1bnRpbWVDb25maWciLCJ2ZXJzaW9uIiwiaTE4bkxvZ2dlciIsImJhY2tlbmRPcHRpb25zIiwibG9hZFBhdGgiLCJsbmdzIiwibmFtZXNwYWNlcyIsImxvZyIsInN1YiIsInBhdXNlIiwibG5nIiwicCIsInJlcGxhY2UiLCJwYXJzZSIsImRhdGEiLCJsYW5ndWFnZXMiLCJsIiwiSlNPTiIsInByaW50IiwiaTE4bkRhdGEiLCJiYWNrZW5kIiwiaW5pdCIsImkxOG4iLCJyZXNvdXJjZXMiLCJvbiIsInVzZSIsImxvYWQiLCJwYXJ0aWFsQnVuZGxlZExhbmd1YWdlcyIsIm5zIiwiZGVidWciLCJpbnRlcnBvbGF0aW9uIiwiZXNjYXBlVmFsdWUiLCJkZXRlY3Rpb24iLCJjYWNoZXMiLCJuYW1lc3BhY2UiLCJrZXkiLCJyZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJsb2FkZWQiLCJtc2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/i18nconf/i18nSetting.ts\n"));

/***/ })

});