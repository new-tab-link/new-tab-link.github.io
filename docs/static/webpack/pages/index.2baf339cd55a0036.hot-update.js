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

/***/ "./src/components/doc-components/anchor-animation/AnchorAnimation.tsx":
/*!****************************************************************************!*\
  !*** ./src/components/doc-components/anchor-animation/AnchorAnimation.tsx ***!
  \****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AnchorAnimation: function() { return /* binding */ AnchorAnimation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box!=!@mui/material */ \"__barrel_optimize__?names=Box!=!./node_modules/.pnpm/@mui+material@6.1.0_@emotion+react@11.13.3_@types+react@18.3.5_react@18.3.1__@emotion+styled@_42czr4sp5u73p6ghh3lgvsr42m/node_modules/@mui/material/index.js\");\n/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-spring/web */ \"./node_modules/.pnpm/@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@react-spring/web/dist/react-spring_web.modern.mjs\");\n/* harmony import */ var _src_components_index_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/components/index/Model */ \"./src/components/index/Model.ts\");\n/* harmony import */ var _barrel_optimize_names_useInViewport_useMemoizedFn_ahooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=useInViewport,useMemoizedFn!=!ahooks */ \"__barrel_optimize__?names=useInViewport,useMemoizedFn!=!./node_modules/.pnpm/ahooks@3.8.1_react@18.3.1/node_modules/ahooks/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nfunction AnchorAnimation(param) {\n    let { anchor, children } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    // const {anchor:anchorString, animationTriggered, setAnchorComplete} = indexModel.useAnchor()!\n    // const {anchor:anchorString, animationTriggered, setAnchorComplete} = useSyncExternalStore(indexModel.anchorStore.subscribe, indexModel.anchorStore.getSnapshot)!\n    const { anchor: anchorString, animationTriggered, setAnchorComplete } = (0,_src_components_index_Model__WEBPACK_IMPORTED_MODULE_2__.useAnchor)();\n    console.log(\"anchorData23rrrcccc=\", anchorString, \"animationTriggered\", animationTriggered, \"setAnchorComplete\", setAnchorComplete);\n    const callback = (0,_barrel_optimize_names_useInViewport_useMemoizedFn_ahooks__WEBPACK_IMPORTED_MODULE_4__.useMemoizedFn)((entry)=>{\n        // console.log('entry=', entry)\n        // console.log('radio=', radio)\n        // console.log('inViewport=', inViewport)\n        if (!entry.isIntersecting) return;\n        checkAnchor();\n    });\n    const [inViewport, radio] = (0,_barrel_optimize_names_useInViewport_useMemoizedFn_ahooks__WEBPACK_IMPORTED_MODULE_4__.useInViewport)(ref, {\n        callback\n    });\n    const checkAnchor = ()=>{\n        // console.log('checkAnchor',indexModel.anchor.animationTriggered, inViewport, indexModel.anchor.anchor)\n        if (_src_components_index_Model__WEBPACK_IMPORTED_MODULE_2__.indexModel.anchor.animationTriggered) return;\n        if (_src_components_index_Model__WEBPACK_IMPORTED_MODULE_2__.indexModel.anchor.anchor !== anchor) return;\n        _src_components_index_Model__WEBPACK_IMPORTED_MODULE_2__.indexModel.anchor.animationTriggered = true;\n        handleClick();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (!inViewport) return;\n        checkAnchor();\n    }, [\n        inViewport\n    ]);\n    const [springs, api] = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.useSpring)(()=>({\n            from: {\n                border: \"2px solid rgba(255,0,0,0)\",\n                borderRadius: 3\n            }\n        }));\n    const handleClick = ()=>{\n        // console.log('handleClick')\n        api.start({\n            from: {\n                border: \"2px solid rgba(255,0,0,0)\"\n            },\n            to: [\n                {\n                    border: \"2px solid rgba(255,0,0,1)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,0)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,1)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,0)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,1)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,0)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,1)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,0)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,1)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,0)\"\n                }\n            ]\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            id: anchor,\n            ref: ref,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.animated.div, {\n                style: {\n                    ...springs\n                },\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\work\\\\temp\\\\js\\\\new-tab-link.github.io\\\\src\\\\components\\\\doc-components\\\\anchor-animation\\\\AnchorAnimation.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\work\\\\temp\\\\js\\\\new-tab-link.github.io\\\\src\\\\components\\\\doc-components\\\\anchor-animation\\\\AnchorAnimation.tsx\",\n            lineNumber: 59,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(AnchorAnimation, \"KRyGcBElnM5/dzylvNazRbZ2BsY=\", false, function() {\n    return [\n        _src_components_index_Model__WEBPACK_IMPORTED_MODULE_2__.useAnchor,\n        _barrel_optimize_names_useInViewport_useMemoizedFn_ahooks__WEBPACK_IMPORTED_MODULE_4__.useMemoizedFn,\n        _barrel_optimize_names_useInViewport_useMemoizedFn_ahooks__WEBPACK_IMPORTED_MODULE_4__.useInViewport,\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_1__.useSpring\n    ];\n});\n_c = AnchorAnimation;\nfunction Spring(param) {\n    let { children } = param;\n    _s1();\n    const [springs, api] = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.useSpring)(()=>({\n            from: {\n                border: \"2px solid rgba(255,0,0,1)\",\n                borderRadius: 3\n            }\n        }));\n    const handleClick = ()=>{\n        console.log(\"clicked\");\n        api.start({\n            from: {\n                border: \"2px solid rgba(255,0,0,1)\"\n            },\n            to: [\n                {\n                    border: \"2px solid rgba(255,0,0,1)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,0)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,1)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,0)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,1)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,0)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,1)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,0)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,1)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,0)\"\n                }\n            ]\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.animated.div, {\n        onClick: handleClick,\n        style: {\n            width: 80,\n            height: 80,\n            ...springs\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\work\\\\temp\\\\js\\\\new-tab-link.github.io\\\\src\\\\components\\\\doc-components\\\\anchor-animation\\\\AnchorAnimation.tsx\",\n        lineNumber: 97,\n        columnNumber: 7\n    }, this);\n}\n_s1(Spring, \"iQHKdmNc2D9tcLlwjCvKk9B+BqI=\", false, function() {\n    return [\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_1__.useSpring\n    ];\n});\n_c1 = Spring;\nvar _c, _c1;\n$RefreshReg$(_c, \"AnchorAnimation\");\n$RefreshReg$(_c1, \"Spring\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kb2MtY29tcG9uZW50cy9hbmNob3ItYW5pbWF0aW9uL0FuY2hvckFuaW1hdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDb0I7QUFDWTtBQUNkO0FBQzZCO0FBRTVFLFNBQVNTLGdCQUFnQixLQUFzRDtRQUF0RCxFQUFDQyxNQUFNLEVBQUVDLFFBQVEsRUFBcUMsR0FBdEQ7O0lBQzVCLE1BQU1DLE1BQU1KLDZDQUFNQSxDQUFpQjtJQUNuQywrRkFBK0Y7SUFDL0YsbUtBQW1LO0lBQ25LLE1BQU0sRUFBQ0UsUUFBT0csWUFBWSxFQUFFQyxrQkFBa0IsRUFBRUMsaUJBQWlCLEVBQUMsR0FBR1gsc0VBQVNBO0lBQzlFWSxRQUFRQyxHQUFHLENBQUMsd0JBQXdCSixjQUFhLHNCQUFzQkMsb0JBQW9CLHFCQUFxQkM7SUFDaEgsTUFBTUcsV0FBV2Isd0dBQWFBLENBQUMsQ0FBQ2M7UUFDNUIsK0JBQStCO1FBQy9CLCtCQUErQjtRQUMvQix5Q0FBeUM7UUFDekMsSUFBRyxDQUFDQSxNQUFNQyxjQUFjLEVBQUM7UUFDekJDO0lBQ0o7SUFDQSxNQUFNLENBQUNDLFlBQVlDLE1BQU0sR0FBR2pCLHdHQUFhQSxDQUFDTSxLQUFLO1FBQUNNO0lBQVE7SUFFeEQsTUFBTUcsY0FBYztRQUNoQix3R0FBd0c7UUFDeEcsSUFBR2xCLG1FQUFVQSxDQUFDTyxNQUFNLENBQUNJLGtCQUFrQixFQUFDO1FBQ3hDLElBQUdYLG1FQUFVQSxDQUFDTyxNQUFNLENBQUNBLE1BQU0sS0FBS0EsUUFBTztRQUN2Q1AsbUVBQVVBLENBQUNPLE1BQU0sQ0FBQ0ksa0JBQWtCLEdBQUc7UUFDdkNVO0lBQ0o7SUFDQWpCLGdEQUFTQSxDQUFDO1FBQ04sSUFBRyxDQUFDZSxZQUFXO1FBQ2ZEO0lBQ0osR0FBRztRQUFDQztLQUFXO0lBQ2YsTUFBTSxDQUFDRyxTQUFTQyxJQUFJLEdBQUd6Qiw0REFBU0EsQ0FBQyxJQUFPO1lBQ3BDMEIsTUFBTTtnQkFDSkMsUUFBUTtnQkFBNkJDLGNBQWE7WUFBRTtRQUN4RDtJQUVBLE1BQU1MLGNBQWM7UUFDbEIsNkJBQTZCO1FBQzdCRSxJQUFJSSxLQUFLLENBQUM7WUFDUkgsTUFBTTtnQkFDSEMsUUFBUTtZQUNYO1lBQ0FHLElBQUk7Z0JBQ0Y7b0JBQUNILFFBQVE7Z0JBQTJCO2dCQUNwQztvQkFBQ0EsUUFBUTtnQkFBMkI7Z0JBQ3BDO29CQUFDQSxRQUFRO2dCQUEyQjtnQkFDcEM7b0JBQUNBLFFBQVE7Z0JBQTJCO2dCQUNwQztvQkFBQ0EsUUFBUTtnQkFBMkI7Z0JBQ3BDO29CQUFDQSxRQUFRO2dCQUEyQjtnQkFDcEM7b0JBQUNBLFFBQVE7Z0JBQTJCO2dCQUNwQztvQkFBQ0EsUUFBUTtnQkFBMkI7Z0JBQ3BDO29CQUFDQSxRQUFRO2dCQUEyQjtnQkFDcEM7b0JBQUNBLFFBQVE7Z0JBQTJCO2FBQ3JDO1FBQ0g7SUFDRjtJQUNGLHFCQUFRO2tCQUNSLDRFQUFDNUIsd0VBQUdBO1lBQUNnQyxJQUFJdEI7WUFBUUUsS0FBS0E7c0JBQ3BCLDRFQUFDVix1REFBUUEsQ0FBQytCLEdBQUc7Z0JBQ1hDLE9BQU87b0JBQ0wsR0FBR1QsT0FBTztnQkFDWjswQkFDQWQ7Ozs7Ozs7Ozs7OztBQUlSO0dBN0RnQkY7O1FBSXlETCxrRUFBU0E7UUFFN0RDLG9HQUFhQTtRQU9GQyxvR0FBYUE7UUFhbEJMLHdEQUFTQTs7O0tBMUJwQlE7QUErRGhCLFNBQVMwQixPQUFPLEtBQTRCO1FBQTVCLEVBQUN4QixRQUFRLEVBQW1CLEdBQTVCOztJQUNaLE1BQU0sQ0FBQ2MsU0FBU0MsSUFBSSxHQUFHekIsNERBQVNBLENBQUMsSUFBTztZQUN0QzBCLE1BQU07Z0JBQ0pDLFFBQVE7Z0JBQTZCQyxjQUFhO1lBQUU7UUFDeEQ7SUFFQSxNQUFNTCxjQUFjO1FBQ2xCUixRQUFRQyxHQUFHLENBQUM7UUFDWlMsSUFBSUksS0FBSyxDQUFDO1lBQ1JILE1BQU07Z0JBQ0hDLFFBQVE7WUFDWDtZQUNBRyxJQUFJO2dCQUNGO29CQUFDSCxRQUFRO2dCQUEyQjtnQkFDcEM7b0JBQUNBLFFBQVE7Z0JBQTJCO2dCQUNwQztvQkFBQ0EsUUFBUTtnQkFBMkI7Z0JBQ3BDO29CQUFDQSxRQUFRO2dCQUEyQjtnQkFDcEM7b0JBQUNBLFFBQVE7Z0JBQTJCO2dCQUNwQztvQkFBQ0EsUUFBUTtnQkFBMkI7Z0JBQ3BDO29CQUFDQSxRQUFRO2dCQUEyQjtnQkFDcEM7b0JBQUNBLFFBQVE7Z0JBQTJCO2dCQUNwQztvQkFBQ0EsUUFBUTtnQkFBMkI7Z0JBQ3BDO29CQUFDQSxRQUFRO2dCQUEyQjthQUNyQztRQUNIO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQzFCLHVEQUFRQSxDQUFDK0IsR0FBRztRQUNYRyxTQUFTWjtRQUNUVSxPQUFPO1lBQ0xHLE9BQU87WUFDUEMsUUFBUTtZQUNSLEdBQUdiLE9BQU87UUFDWjtrQkFDQWQ7Ozs7OztBQUdOO0lBckNPd0I7O1FBQ2tCbEMsd0RBQVNBOzs7TUFEM0JrQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kb2MtY29tcG9uZW50cy9hbmNob3ItYW5pbWF0aW9uL0FuY2hvckFuaW1hdGlvbi50c3g/OTNiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSBcIkByZWFjdC1zcHJpbmcvd2ViXCI7XHJcbmltcG9ydCB7IGluZGV4TW9kZWwsIHVzZUFuY2hvciB9IGZyb20gXCJAc3JjL2NvbXBvbmVudHMvaW5kZXgvTW9kZWxcIjtcclxuaW1wb3J0IHsgdXNlTWVtb2l6ZWRGbiwgdXNlSW5WaWV3cG9ydCB9IGZyb20gXCJhaG9va3NcIjtcclxuaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4sIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTeW5jRXh0ZXJuYWxTdG9yZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFuY2hvckFuaW1hdGlvbih7YW5jaG9yLCBjaGlsZHJlbn06e2FuY2hvcjpzdHJpbmd9ICYgUHJvcHNXaXRoQ2hpbGRyZW4pe1xyXG4gICAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxyXG4gICAgLy8gY29uc3Qge2FuY2hvcjphbmNob3JTdHJpbmcsIGFuaW1hdGlvblRyaWdnZXJlZCwgc2V0QW5jaG9yQ29tcGxldGV9ID0gaW5kZXhNb2RlbC51c2VBbmNob3IoKSFcclxuICAgIC8vIGNvbnN0IHthbmNob3I6YW5jaG9yU3RyaW5nLCBhbmltYXRpb25UcmlnZ2VyZWQsIHNldEFuY2hvckNvbXBsZXRlfSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlKGluZGV4TW9kZWwuYW5jaG9yU3RvcmUuc3Vic2NyaWJlLCBpbmRleE1vZGVsLmFuY2hvclN0b3JlLmdldFNuYXBzaG90KSFcclxuICAgIGNvbnN0IHthbmNob3I6YW5jaG9yU3RyaW5nLCBhbmltYXRpb25UcmlnZ2VyZWQsIHNldEFuY2hvckNvbXBsZXRlfSA9IHVzZUFuY2hvcigpXHJcbiAgICBjb25zb2xlLmxvZygnYW5jaG9yRGF0YTIzcnJyY2NjYz0nLCBhbmNob3JTdHJpbmcsJ2FuaW1hdGlvblRyaWdnZXJlZCcsIGFuaW1hdGlvblRyaWdnZXJlZCwgJ3NldEFuY2hvckNvbXBsZXRlJywgc2V0QW5jaG9yQ29tcGxldGUpXHJcbiAgICBjb25zdCBjYWxsYmFjayA9IHVzZU1lbW9pemVkRm4oKGVudHJ5KT0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbnRyeT0nLCBlbnRyeSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmFkaW89JywgcmFkaW8pXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2luVmlld3BvcnQ9JywgaW5WaWV3cG9ydClcclxuICAgICAgICBpZighZW50cnkuaXNJbnRlcnNlY3RpbmcpcmV0dXJuO1xyXG4gICAgICAgIGNoZWNrQW5jaG9yKClcclxuICAgIH0pXHJcbiAgICBjb25zdCBbaW5WaWV3cG9ydCwgcmFkaW9dID0gdXNlSW5WaWV3cG9ydChyZWYsIHtjYWxsYmFja30pXHJcbiAgICBcclxuICAgIGNvbnN0IGNoZWNrQW5jaG9yID0gKCk9PntcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY2hlY2tBbmNob3InLGluZGV4TW9kZWwuYW5jaG9yLmFuaW1hdGlvblRyaWdnZXJlZCwgaW5WaWV3cG9ydCwgaW5kZXhNb2RlbC5hbmNob3IuYW5jaG9yKVxyXG4gICAgICAgIGlmKGluZGV4TW9kZWwuYW5jaG9yLmFuaW1hdGlvblRyaWdnZXJlZClyZXR1cm47XHJcbiAgICAgICAgaWYoaW5kZXhNb2RlbC5hbmNob3IuYW5jaG9yICE9PSBhbmNob3IpcmV0dXJuO1xyXG4gICAgICAgIGluZGV4TW9kZWwuYW5jaG9yLmFuaW1hdGlvblRyaWdnZXJlZCA9IHRydWVcclxuICAgICAgICBoYW5kbGVDbGljaygpXHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZighaW5WaWV3cG9ydClyZXR1cm47XHJcbiAgICAgICAgY2hlY2tBbmNob3IoKVxyXG4gICAgfSwgW2luVmlld3BvcnRdKVxyXG4gICAgY29uc3QgW3NwcmluZ3MsIGFwaV0gPSB1c2VTcHJpbmcoKCkgPT4gKHtcclxuICAgICAgICBmcm9tOiB7XHJcbiAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIHJnYmEoMjU1LDAsMCwwKVwiLCBib3JkZXJSYWRpdXM6MyB9LFxyXG4gICAgICB9KSlcclxuICAgIFxyXG4gICAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnaGFuZGxlQ2xpY2snKVxyXG4gICAgICAgIGFwaS5zdGFydCh7XHJcbiAgICAgICAgICBmcm9tOiB7XHJcbiAgICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIHJnYmEoMjU1LDAsMCwwKVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdG86IFtcclxuICAgICAgICAgICAge2JvcmRlcjogXCIycHggc29saWQgcmdiYSgyNTUsMCwwLDEpXCJ9LFxyXG4gICAgICAgICAgICB7Ym9yZGVyOiBcIjJweCBzb2xpZCByZ2JhKDI1NSwwLDAsMClcIn0sXHJcbiAgICAgICAgICAgIHtib3JkZXI6IFwiMnB4IHNvbGlkIHJnYmEoMjU1LDAsMCwxKVwifSxcclxuICAgICAgICAgICAge2JvcmRlcjogXCIycHggc29saWQgcmdiYSgyNTUsMCwwLDApXCJ9LFxyXG4gICAgICAgICAgICB7Ym9yZGVyOiBcIjJweCBzb2xpZCByZ2JhKDI1NSwwLDAsMSlcIn0sXHJcbiAgICAgICAgICAgIHtib3JkZXI6IFwiMnB4IHNvbGlkIHJnYmEoMjU1LDAsMCwwKVwifSxcclxuICAgICAgICAgICAge2JvcmRlcjogXCIycHggc29saWQgcmdiYSgyNTUsMCwwLDEpXCJ9LFxyXG4gICAgICAgICAgICB7Ym9yZGVyOiBcIjJweCBzb2xpZCByZ2JhKDI1NSwwLDAsMClcIn0sXHJcbiAgICAgICAgICAgIHtib3JkZXI6IFwiMnB4IHNvbGlkIHJnYmEoMjU1LDAsMCwxKVwifSxcclxuICAgICAgICAgICAge2JvcmRlcjogXCIycHggc29saWQgcmdiYSgyNTUsMCwwLDApXCJ9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICA8Qm94IGlkPXthbmNob3J9IHJlZj17cmVmfT5cclxuICAgICAgPGFuaW1hdGVkLmRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAuLi5zcHJpbmdzLFxyXG4gICAgICAgIH19XHJcbiAgICAgID57Y2hpbGRyZW59XHJcbiAgICAgIDwvYW5pbWF0ZWQuZGl2PlxyXG4gICAgPC9Cb3g+XHJcbiAgICA8Lz4pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNwcmluZyh7Y2hpbGRyZW59OlByb3BzV2l0aENoaWxkcmVuKXtcclxuICAgIGNvbnN0IFtzcHJpbmdzLCBhcGldID0gdXNlU3ByaW5nKCgpID0+ICh7XHJcbiAgICAgIGZyb206IHtcclxuICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIHJnYmEoMjU1LDAsMCwxKVwiLCBib3JkZXJSYWRpdXM6MyB9LFxyXG4gICAgfSkpXHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKVxyXG4gICAgICBhcGkuc3RhcnQoe1xyXG4gICAgICAgIGZyb206IHtcclxuICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIHJnYmEoMjU1LDAsMCwxKVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0bzogW1xyXG4gICAgICAgICAge2JvcmRlcjogXCIycHggc29saWQgcmdiYSgyNTUsMCwwLDEpXCJ9LFxyXG4gICAgICAgICAge2JvcmRlcjogXCIycHggc29saWQgcmdiYSgyNTUsMCwwLDApXCJ9LFxyXG4gICAgICAgICAge2JvcmRlcjogXCIycHggc29saWQgcmdiYSgyNTUsMCwwLDEpXCJ9LFxyXG4gICAgICAgICAge2JvcmRlcjogXCIycHggc29saWQgcmdiYSgyNTUsMCwwLDApXCJ9LFxyXG4gICAgICAgICAge2JvcmRlcjogXCIycHggc29saWQgcmdiYSgyNTUsMCwwLDEpXCJ9LFxyXG4gICAgICAgICAge2JvcmRlcjogXCIycHggc29saWQgcmdiYSgyNTUsMCwwLDApXCJ9LFxyXG4gICAgICAgICAge2JvcmRlcjogXCIycHggc29saWQgcmdiYSgyNTUsMCwwLDEpXCJ9LFxyXG4gICAgICAgICAge2JvcmRlcjogXCIycHggc29saWQgcmdiYSgyNTUsMCwwLDApXCJ9LFxyXG4gICAgICAgICAge2JvcmRlcjogXCIycHggc29saWQgcmdiYSgyNTUsMCwwLDEpXCJ9LFxyXG4gICAgICAgICAge2JvcmRlcjogXCIycHggc29saWQgcmdiYSgyNTUsMCwwLDApXCJ9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YW5pbWF0ZWQuZGl2XHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHdpZHRoOiA4MCxcclxuICAgICAgICAgIGhlaWdodDogODAsXHJcbiAgICAgICAgICAuLi5zcHJpbmdzLFxyXG4gICAgICAgIH19XHJcbiAgICAgID57Y2hpbGRyZW59XHJcbiAgICAgIDwvYW5pbWF0ZWQuZGl2PlxyXG4gICAgKVxyXG4gIH0iXSwibmFtZXMiOlsiQm94IiwidXNlU3ByaW5nIiwiYW5pbWF0ZWQiLCJpbmRleE1vZGVsIiwidXNlQW5jaG9yIiwidXNlTWVtb2l6ZWRGbiIsInVzZUluVmlld3BvcnQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJBbmNob3JBbmltYXRpb24iLCJhbmNob3IiLCJjaGlsZHJlbiIsInJlZiIsImFuY2hvclN0cmluZyIsImFuaW1hdGlvblRyaWdnZXJlZCIsInNldEFuY2hvckNvbXBsZXRlIiwiY29uc29sZSIsImxvZyIsImNhbGxiYWNrIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImNoZWNrQW5jaG9yIiwiaW5WaWV3cG9ydCIsInJhZGlvIiwiaGFuZGxlQ2xpY2siLCJzcHJpbmdzIiwiYXBpIiwiZnJvbSIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInN0YXJ0IiwidG8iLCJpZCIsImRpdiIsInN0eWxlIiwiU3ByaW5nIiwib25DbGljayIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/doc-components/anchor-animation/AnchorAnimation.tsx\n"));

/***/ }),

/***/ "./src/components/index/Model.ts":
/*!***************************************!*\
  !*** ./src/components/index/Model.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   indexModel: function() { return /* binding */ indexModel; },\n/* harmony export */   useAnchor: function() { return /* binding */ useAnchor; }\n/* harmony export */ });\n/* harmony import */ var _src_libs_fanfanlo_html_anchor_Anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/libs/fanfanlo/html/anchor/Anchor */ \"./src/libs/fanfanlo/html/anchor/Anchor.ts\");\n/* harmony import */ var _src_libs_fanfanlo_react_hooks_externalstore_SyncExternalStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/libs/fanfanlo/react/hooks/externalstore/SyncExternalStore */ \"./src/libs/fanfanlo/react/hooks/externalstore/SyncExternalStore.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst anchor = new _src_libs_fanfanlo_html_anchor_Anchor__WEBPACK_IMPORTED_MODULE_0__.Anchor();\nconst anchorStore = (0,_src_libs_fanfanlo_react_hooks_externalstore_SyncExternalStore__WEBPACK_IMPORTED_MODULE_1__.createStore)(anchor.getData());\nanchor.anchorStore = anchorStore;\nfunction useAnchor() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useSyncExternalStore)(anchorStore.subscribe, anchorStore.getSnapshot);\n}\nconst indexModel = {\n    anchor,\n    anchorStore,\n    useAnchor\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbmRleC9Nb2RlbC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0Q7QUFDOEI7QUFDM0M7QUFFbEQsTUFBTUcsU0FBUyxJQUFJSCx5RUFBTUE7QUFDekIsTUFBTUksY0FBY0gsMkdBQVdBLENBQUNFLE9BQU9FLE9BQU87QUFDOUNGLE9BQU9DLFdBQVcsR0FBR0E7QUFDZCxTQUFTRTtJQUNaLE9BQU9KLDJEQUFvQkEsQ0FBQ0UsWUFBWUcsU0FBUyxFQUFFSCxZQUFZSSxXQUFXO0FBQzlFO0FBRU8sTUFBTUMsYUFBYTtJQUN0Qk47SUFDQUM7SUFDQUU7QUFDSixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2luZGV4L01vZGVsLnRzPzJiMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSBcIkBzcmMvbGlicy9mYW5mYW5sby9odG1sL2FuY2hvci9BbmNob3JcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwiQHNyYy9saWJzL2ZhbmZhbmxvL3JlYWN0L2hvb2tzL2V4dGVybmFsc3RvcmUvU3luY0V4dGVybmFsU3RvcmVcIjtcclxuaW1wb3J0IHsgdXNlLCB1c2VTeW5jRXh0ZXJuYWxTdG9yZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgYW5jaG9yID0gbmV3IEFuY2hvcigpXHJcbmNvbnN0IGFuY2hvclN0b3JlID0gY3JlYXRlU3RvcmUoYW5jaG9yLmdldERhdGEoKSlcclxuYW5jaG9yLmFuY2hvclN0b3JlID0gYW5jaG9yU3RvcmVcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFuY2hvcigpe1xyXG4gICAgcmV0dXJuIHVzZVN5bmNFeHRlcm5hbFN0b3JlKGFuY2hvclN0b3JlLnN1YnNjcmliZSwgYW5jaG9yU3RvcmUuZ2V0U25hcHNob3QpIVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5kZXhNb2RlbCA9IHtcclxuICAgIGFuY2hvcixcclxuICAgIGFuY2hvclN0b3JlLFxyXG4gICAgdXNlQW5jaG9yXHJcbn0iXSwibmFtZXMiOlsiQW5jaG9yIiwiY3JlYXRlU3RvcmUiLCJ1c2VTeW5jRXh0ZXJuYWxTdG9yZSIsImFuY2hvciIsImFuY2hvclN0b3JlIiwiZ2V0RGF0YSIsInVzZUFuY2hvciIsInN1YnNjcmliZSIsImdldFNuYXBzaG90IiwiaW5kZXhNb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/index/Model.ts\n"));

/***/ })

});