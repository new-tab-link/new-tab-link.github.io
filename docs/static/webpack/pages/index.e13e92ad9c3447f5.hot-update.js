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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AnchorAnimation: function() { return /* binding */ AnchorAnimation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box!=!@mui/material */ \"__barrel_optimize__?names=Box!=!./node_modules/.pnpm/@mui+material@6.1.0_@emotion+react@11.13.3_@types+react@18.3.5_react@18.3.1__@emotion+styled@_42czr4sp5u73p6ghh3lgvsr42m/node_modules/@mui/material/index.js\");\n/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-spring/web */ \"./node_modules/.pnpm/@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@react-spring/web/dist/react-spring_web.modern.mjs\");\n/* harmony import */ var _src_components_index_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/components/index/Model */ \"./src/components/index/Model.ts\");\n/* harmony import */ var _barrel_optimize_names_useInViewport_useMemoizedFn_ahooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=useInViewport,useMemoizedFn!=!ahooks */ \"__barrel_optimize__?names=useInViewport,useMemoizedFn!=!./node_modules/.pnpm/ahooks@3.8.1_react@18.3.1/node_modules/ahooks/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nfunction AnchorAnimation(param) {\n    let { anchor, children } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const { anchor: anchorString, animationTriggered, setAnchorComplete } = _src_components_index_Model__WEBPACK_IMPORTED_MODULE_2__.indexModel.useAnchor();\n    console.log(\"anchorData23rrrccccddd=\", anchorString, \"animationTriggered\", animationTriggered, \"setAnchorComplete\", setAnchorComplete);\n    const callback = (0,_barrel_optimize_names_useInViewport_useMemoizedFn_ahooks__WEBPACK_IMPORTED_MODULE_4__.useMemoizedFn)((entry)=>{\n        // console.log('entry=', entry)\n        // console.log('radio=', radio)\n        // console.log('inViewport=', inViewport)\n        if (!entry.isIntersecting) return;\n        checkAnchor();\n    });\n    const [inViewport, radio] = (0,_barrel_optimize_names_useInViewport_useMemoizedFn_ahooks__WEBPACK_IMPORTED_MODULE_4__.useInViewport)(ref, {\n        callback\n    });\n    const checkAnchor = ()=>{\n        // console.log('checkAnchor',indexModel.anchor.animationTriggered, inViewport, indexModel.anchor.anchor)\n        if (_src_components_index_Model__WEBPACK_IMPORTED_MODULE_2__.indexModel.anchor.animationTriggered) return;\n        if (_src_components_index_Model__WEBPACK_IMPORTED_MODULE_2__.indexModel.anchor.anchor !== anchor) return;\n        _src_components_index_Model__WEBPACK_IMPORTED_MODULE_2__.indexModel.anchor.animationTriggered = true;\n        handleClick();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (!inViewport) return;\n        checkAnchor();\n    }, [\n        inViewport\n    ]);\n    const [springs, api] = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.useSpring)(()=>({\n            from: {\n                border: \"2px solid rgba(255,0,0,0)\",\n                borderRadius: 3\n            }\n        }));\n    const handleClick = ()=>{\n        // console.log('handleClick')\n        api.start({\n            from: {\n                border: \"2px solid rgba(255,0,0,0)\"\n            },\n            to: [\n                {\n                    border: \"2px solid rgba(255,0,0,1)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,0)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,1)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,0)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,1)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,0)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,1)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,0)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,1)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,0)\"\n                }\n            ]\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            id: anchor,\n            ref: ref,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.animated.div, {\n                style: {\n                    ...springs\n                },\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\work\\\\temp\\\\js\\\\new-tab-link.github.io\\\\src\\\\components\\\\doc-components\\\\anchor-animation\\\\AnchorAnimation.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\work\\\\temp\\\\js\\\\new-tab-link.github.io\\\\src\\\\components\\\\doc-components\\\\anchor-animation\\\\AnchorAnimation.tsx\",\n            lineNumber: 57,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(AnchorAnimation, \"KRyGcBElnM5/dzylvNazRbZ2BsY=\", false, function() {\n    return [\n        _src_components_index_Model__WEBPACK_IMPORTED_MODULE_2__.indexModel.useAnchor,\n        _barrel_optimize_names_useInViewport_useMemoizedFn_ahooks__WEBPACK_IMPORTED_MODULE_4__.useMemoizedFn,\n        _barrel_optimize_names_useInViewport_useMemoizedFn_ahooks__WEBPACK_IMPORTED_MODULE_4__.useInViewport,\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_1__.useSpring\n    ];\n});\n_c = AnchorAnimation;\nfunction Spring(param) {\n    let { children } = param;\n    _s1();\n    const [springs, api] = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.useSpring)(()=>({\n            from: {\n                border: \"2px solid rgba(255,0,0,1)\",\n                borderRadius: 3\n            }\n        }));\n    const handleClick = ()=>{\n        console.log(\"clicked\");\n        api.start({\n            from: {\n                border: \"2px solid rgba(255,0,0,1)\"\n            },\n            to: [\n                {\n                    border: \"2px solid rgba(255,0,0,1)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,0)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,1)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,0)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,1)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,0)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,1)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,0)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,1)\"\n                },\n                {\n                    border: \"2px solid rgba(255,0,0,0)\"\n                }\n            ]\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.animated.div, {\n        onClick: handleClick,\n        style: {\n            width: 80,\n            height: 80,\n            ...springs\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\work\\\\temp\\\\js\\\\new-tab-link.github.io\\\\src\\\\components\\\\doc-components\\\\anchor-animation\\\\AnchorAnimation.tsx\",\n        lineNumber: 95,\n        columnNumber: 7\n    }, this);\n}\n_s1(Spring, \"iQHKdmNc2D9tcLlwjCvKk9B+BqI=\", false, function() {\n    return [\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_1__.useSpring\n    ];\n});\n_c1 = Spring;\nvar _c, _c1;\n$RefreshReg$(_c, \"AnchorAnimation\");\n$RefreshReg$(_c1, \"Spring\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kb2MtY29tcG9uZW50cy9hbmNob3ItYW5pbWF0aW9uL0FuY2hvckFuaW1hdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDb0I7QUFDWTtBQUNkO0FBQzZCO0FBRTVFLFNBQVNRLGdCQUFnQixLQUFzRDtRQUF0RCxFQUFDQyxNQUFNLEVBQUVDLFFBQVEsRUFBcUMsR0FBdEQ7O0lBQzVCLE1BQU1DLE1BQU1KLDZDQUFNQSxDQUFpQjtJQUNuQyxNQUFNLEVBQUNFLFFBQU9HLFlBQVksRUFBRUMsa0JBQWtCLEVBQUVDLGlCQUFpQixFQUFDLEdBQUdYLG1FQUFVQSxDQUFDWSxTQUFTO0lBQ3pGQyxRQUFRQyxHQUFHLENBQUMsMkJBQTJCTCxjQUFhLHNCQUFzQkMsb0JBQW9CLHFCQUFxQkM7SUFDbkgsTUFBTUksV0FBV2Qsd0dBQWFBLENBQUMsQ0FBQ2U7UUFDNUIsK0JBQStCO1FBQy9CLCtCQUErQjtRQUMvQix5Q0FBeUM7UUFDekMsSUFBRyxDQUFDQSxNQUFNQyxjQUFjLEVBQUM7UUFDekJDO0lBQ0o7SUFDQSxNQUFNLENBQUNDLFlBQVlDLE1BQU0sR0FBR2xCLHdHQUFhQSxDQUFDTSxLQUFLO1FBQUNPO0lBQVE7SUFFeEQsTUFBTUcsY0FBYztRQUNoQix3R0FBd0c7UUFDeEcsSUFBR2xCLG1FQUFVQSxDQUFDTSxNQUFNLENBQUNJLGtCQUFrQixFQUFDO1FBQ3hDLElBQUdWLG1FQUFVQSxDQUFDTSxNQUFNLENBQUNBLE1BQU0sS0FBS0EsUUFBTztRQUN2Q04sbUVBQVVBLENBQUNNLE1BQU0sQ0FBQ0ksa0JBQWtCLEdBQUc7UUFDdkNXO0lBQ0o7SUFDQWxCLGdEQUFTQSxDQUFDO1FBQ04sSUFBRyxDQUFDZ0IsWUFBVztRQUNmRDtJQUNKLEdBQUc7UUFBQ0M7S0FBVztJQUNmLE1BQU0sQ0FBQ0csU0FBU0MsSUFBSSxHQUFHekIsNERBQVNBLENBQUMsSUFBTztZQUNwQzBCLE1BQU07Z0JBQ0pDLFFBQVE7Z0JBQTZCQyxjQUFhO1lBQUU7UUFDeEQ7SUFFQSxNQUFNTCxjQUFjO1FBQ2xCLDZCQUE2QjtRQUM3QkUsSUFBSUksS0FBSyxDQUFDO1lBQ1JILE1BQU07Z0JBQ0hDLFFBQVE7WUFDWDtZQUNBRyxJQUFJO2dCQUNGO29CQUFDSCxRQUFRO2dCQUEyQjtnQkFDcEM7b0JBQUNBLFFBQVE7Z0JBQTJCO2dCQUNwQztvQkFBQ0EsUUFBUTtnQkFBMkI7Z0JBQ3BDO29CQUFDQSxRQUFRO2dCQUEyQjtnQkFDcEM7b0JBQUNBLFFBQVE7Z0JBQTJCO2dCQUNwQztvQkFBQ0EsUUFBUTtnQkFBMkI7Z0JBQ3BDO29CQUFDQSxRQUFRO2dCQUEyQjtnQkFDcEM7b0JBQUNBLFFBQVE7Z0JBQTJCO2dCQUNwQztvQkFBQ0EsUUFBUTtnQkFBMkI7Z0JBQ3BDO29CQUFDQSxRQUFRO2dCQUEyQjthQUNyQztRQUNIO0lBQ0Y7SUFDRixxQkFBUTtrQkFDUiw0RUFBQzVCLHdFQUFHQTtZQUFDZ0MsSUFBSXZCO1lBQVFFLEtBQUtBO3NCQUNwQiw0RUFBQ1QsdURBQVFBLENBQUMrQixHQUFHO2dCQUNYQyxPQUFPO29CQUNMLEdBQUdULE9BQU87Z0JBQ1o7MEJBQ0FmOzs7Ozs7Ozs7Ozs7QUFJUjtHQTNEZ0JGOztRQUV5REwsbUVBQVVBLENBQUNZO1FBRS9EWCxvR0FBYUE7UUFPRkMsb0dBQWFBO1FBYWxCSix3REFBU0E7OztLQXhCcEJPO0FBNkRoQixTQUFTMkIsT0FBTyxLQUE0QjtRQUE1QixFQUFDekIsUUFBUSxFQUFtQixHQUE1Qjs7SUFDWixNQUFNLENBQUNlLFNBQVNDLElBQUksR0FBR3pCLDREQUFTQSxDQUFDLElBQU87WUFDdEMwQixNQUFNO2dCQUNKQyxRQUFRO2dCQUE2QkMsY0FBYTtZQUFFO1FBQ3hEO0lBRUEsTUFBTUwsY0FBYztRQUNsQlIsUUFBUUMsR0FBRyxDQUFDO1FBQ1pTLElBQUlJLEtBQUssQ0FBQztZQUNSSCxNQUFNO2dCQUNIQyxRQUFRO1lBQ1g7WUFDQUcsSUFBSTtnQkFDRjtvQkFBQ0gsUUFBUTtnQkFBMkI7Z0JBQ3BDO29CQUFDQSxRQUFRO2dCQUEyQjtnQkFDcEM7b0JBQUNBLFFBQVE7Z0JBQTJCO2dCQUNwQztvQkFBQ0EsUUFBUTtnQkFBMkI7Z0JBQ3BDO29CQUFDQSxRQUFRO2dCQUEyQjtnQkFDcEM7b0JBQUNBLFFBQVE7Z0JBQTJCO2dCQUNwQztvQkFBQ0EsUUFBUTtnQkFBMkI7Z0JBQ3BDO29CQUFDQSxRQUFRO2dCQUEyQjtnQkFDcEM7b0JBQUNBLFFBQVE7Z0JBQTJCO2dCQUNwQztvQkFBQ0EsUUFBUTtnQkFBMkI7YUFDckM7UUFDSDtJQUNGO0lBQ0EscUJBQ0UsOERBQUMxQix1REFBUUEsQ0FBQytCLEdBQUc7UUFDWEcsU0FBU1o7UUFDVFUsT0FBTztZQUNMRyxPQUFPO1lBQ1BDLFFBQVE7WUFDUixHQUFHYixPQUFPO1FBQ1o7a0JBQ0FmOzs7Ozs7QUFHTjtJQXJDT3lCOztRQUNrQmxDLHdEQUFTQTs7O01BRDNCa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZG9jLWNvbXBvbmVudHMvYW5jaG9yLWFuaW1hdGlvbi9BbmNob3JBbmltYXRpb24udHN4PzkzYjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gXCJAcmVhY3Qtc3ByaW5nL3dlYlwiO1xyXG5pbXBvcnQgeyBpbmRleE1vZGVsLCB1c2VBbmNob3IgfSBmcm9tIFwiQHNyYy9jb21wb25lbnRzL2luZGV4L01vZGVsXCI7XHJcbmltcG9ydCB7IHVzZU1lbW9pemVkRm4sIHVzZUluVmlld3BvcnQgfSBmcm9tIFwiYWhvb2tzXCI7XHJcbmltcG9ydCB7IFByb3BzV2l0aENoaWxkcmVuLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3luY0V4dGVybmFsU3RvcmUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBbmNob3JBbmltYXRpb24oe2FuY2hvciwgY2hpbGRyZW59OnthbmNob3I6c3RyaW5nfSAmIFByb3BzV2l0aENoaWxkcmVuKXtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcclxuICAgIGNvbnN0IHthbmNob3I6YW5jaG9yU3RyaW5nLCBhbmltYXRpb25UcmlnZ2VyZWQsIHNldEFuY2hvckNvbXBsZXRlfSA9IGluZGV4TW9kZWwudXNlQW5jaG9yKClcclxuICAgIGNvbnNvbGUubG9nKCdhbmNob3JEYXRhMjNycnJjY2NjZGRkPScsIGFuY2hvclN0cmluZywnYW5pbWF0aW9uVHJpZ2dlcmVkJywgYW5pbWF0aW9uVHJpZ2dlcmVkLCAnc2V0QW5jaG9yQ29tcGxldGUnLCBzZXRBbmNob3JDb21wbGV0ZSlcclxuICAgIGNvbnN0IGNhbGxiYWNrID0gdXNlTWVtb2l6ZWRGbigoZW50cnkpPT57XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2VudHJ5PScsIGVudHJ5KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyYWRpbz0nLCByYWRpbylcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW5WaWV3cG9ydD0nLCBpblZpZXdwb3J0KVxyXG4gICAgICAgIGlmKCFlbnRyeS5pc0ludGVyc2VjdGluZylyZXR1cm47XHJcbiAgICAgICAgY2hlY2tBbmNob3IoKVxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtpblZpZXdwb3J0LCByYWRpb10gPSB1c2VJblZpZXdwb3J0KHJlZiwge2NhbGxiYWNrfSlcclxuICAgIFxyXG4gICAgY29uc3QgY2hlY2tBbmNob3IgPSAoKT0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGVja0FuY2hvcicsaW5kZXhNb2RlbC5hbmNob3IuYW5pbWF0aW9uVHJpZ2dlcmVkLCBpblZpZXdwb3J0LCBpbmRleE1vZGVsLmFuY2hvci5hbmNob3IpXHJcbiAgICAgICAgaWYoaW5kZXhNb2RlbC5hbmNob3IuYW5pbWF0aW9uVHJpZ2dlcmVkKXJldHVybjtcclxuICAgICAgICBpZihpbmRleE1vZGVsLmFuY2hvci5hbmNob3IgIT09IGFuY2hvcilyZXR1cm47XHJcbiAgICAgICAgaW5kZXhNb2RlbC5hbmNob3IuYW5pbWF0aW9uVHJpZ2dlcmVkID0gdHJ1ZVxyXG4gICAgICAgIGhhbmRsZUNsaWNrKClcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKCFpblZpZXdwb3J0KXJldHVybjtcclxuICAgICAgICBjaGVja0FuY2hvcigpXHJcbiAgICB9LCBbaW5WaWV3cG9ydF0pXHJcbiAgICBjb25zdCBbc3ByaW5ncywgYXBpXSA9IHVzZVNwcmluZygoKSA9PiAoe1xyXG4gICAgICAgIGZyb206IHtcclxuICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgcmdiYSgyNTUsMCwwLDApXCIsIGJvcmRlclJhZGl1czozIH0sXHJcbiAgICAgIH0pKVxyXG4gICAgXHJcbiAgICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdoYW5kbGVDbGljaycpXHJcbiAgICAgICAgYXBpLnN0YXJ0KHtcclxuICAgICAgICAgIGZyb206IHtcclxuICAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgcmdiYSgyNTUsMCwwLDApXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0bzogW1xyXG4gICAgICAgICAgICB7Ym9yZGVyOiBcIjJweCBzb2xpZCByZ2JhKDI1NSwwLDAsMSlcIn0sXHJcbiAgICAgICAgICAgIHtib3JkZXI6IFwiMnB4IHNvbGlkIHJnYmEoMjU1LDAsMCwwKVwifSxcclxuICAgICAgICAgICAge2JvcmRlcjogXCIycHggc29saWQgcmdiYSgyNTUsMCwwLDEpXCJ9LFxyXG4gICAgICAgICAgICB7Ym9yZGVyOiBcIjJweCBzb2xpZCByZ2JhKDI1NSwwLDAsMClcIn0sXHJcbiAgICAgICAgICAgIHtib3JkZXI6IFwiMnB4IHNvbGlkIHJnYmEoMjU1LDAsMCwxKVwifSxcclxuICAgICAgICAgICAge2JvcmRlcjogXCIycHggc29saWQgcmdiYSgyNTUsMCwwLDApXCJ9LFxyXG4gICAgICAgICAgICB7Ym9yZGVyOiBcIjJweCBzb2xpZCByZ2JhKDI1NSwwLDAsMSlcIn0sXHJcbiAgICAgICAgICAgIHtib3JkZXI6IFwiMnB4IHNvbGlkIHJnYmEoMjU1LDAsMCwwKVwifSxcclxuICAgICAgICAgICAge2JvcmRlcjogXCIycHggc29saWQgcmdiYSgyNTUsMCwwLDEpXCJ9LFxyXG4gICAgICAgICAgICB7Ym9yZGVyOiBcIjJweCBzb2xpZCByZ2JhKDI1NSwwLDAsMClcIn0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIHJldHVybiAoPD5cclxuICAgIDxCb3ggaWQ9e2FuY2hvcn0gcmVmPXtyZWZ9PlxyXG4gICAgICA8YW5pbWF0ZWQuZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIC4uLnNwcmluZ3MsXHJcbiAgICAgICAgfX1cclxuICAgICAgPntjaGlsZHJlbn1cclxuICAgICAgPC9hbmltYXRlZC5kaXY+XHJcbiAgICA8L0JveD5cclxuICAgIDwvPilcclxufVxyXG5cclxuZnVuY3Rpb24gU3ByaW5nKHtjaGlsZHJlbn06UHJvcHNXaXRoQ2hpbGRyZW4pe1xyXG4gICAgY29uc3QgW3NwcmluZ3MsIGFwaV0gPSB1c2VTcHJpbmcoKCkgPT4gKHtcclxuICAgICAgZnJvbToge1xyXG4gICAgICAgIGJvcmRlcjogXCIycHggc29saWQgcmdiYSgyNTUsMCwwLDEpXCIsIGJvcmRlclJhZGl1czozIH0sXHJcbiAgICB9KSlcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpXHJcbiAgICAgIGFwaS5zdGFydCh7XHJcbiAgICAgICAgZnJvbToge1xyXG4gICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgcmdiYSgyNTUsMCwwLDEpXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvOiBbXHJcbiAgICAgICAgICB7Ym9yZGVyOiBcIjJweCBzb2xpZCByZ2JhKDI1NSwwLDAsMSlcIn0sXHJcbiAgICAgICAgICB7Ym9yZGVyOiBcIjJweCBzb2xpZCByZ2JhKDI1NSwwLDAsMClcIn0sXHJcbiAgICAgICAgICB7Ym9yZGVyOiBcIjJweCBzb2xpZCByZ2JhKDI1NSwwLDAsMSlcIn0sXHJcbiAgICAgICAgICB7Ym9yZGVyOiBcIjJweCBzb2xpZCByZ2JhKDI1NSwwLDAsMClcIn0sXHJcbiAgICAgICAgICB7Ym9yZGVyOiBcIjJweCBzb2xpZCByZ2JhKDI1NSwwLDAsMSlcIn0sXHJcbiAgICAgICAgICB7Ym9yZGVyOiBcIjJweCBzb2xpZCByZ2JhKDI1NSwwLDAsMClcIn0sXHJcbiAgICAgICAgICB7Ym9yZGVyOiBcIjJweCBzb2xpZCByZ2JhKDI1NSwwLDAsMSlcIn0sXHJcbiAgICAgICAgICB7Ym9yZGVyOiBcIjJweCBzb2xpZCByZ2JhKDI1NSwwLDAsMClcIn0sXHJcbiAgICAgICAgICB7Ym9yZGVyOiBcIjJweCBzb2xpZCByZ2JhKDI1NSwwLDAsMSlcIn0sXHJcbiAgICAgICAgICB7Ym9yZGVyOiBcIjJweCBzb2xpZCByZ2JhKDI1NSwwLDAsMClcIn0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhbmltYXRlZC5kaXZcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgd2lkdGg6IDgwLFxyXG4gICAgICAgICAgaGVpZ2h0OiA4MCxcclxuICAgICAgICAgIC4uLnNwcmluZ3MsXHJcbiAgICAgICAgfX1cclxuICAgICAgPntjaGlsZHJlbn1cclxuICAgICAgPC9hbmltYXRlZC5kaXY+XHJcbiAgICApXHJcbiAgfSJdLCJuYW1lcyI6WyJCb3giLCJ1c2VTcHJpbmciLCJhbmltYXRlZCIsImluZGV4TW9kZWwiLCJ1c2VNZW1vaXplZEZuIiwidXNlSW5WaWV3cG9ydCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkFuY2hvckFuaW1hdGlvbiIsImFuY2hvciIsImNoaWxkcmVuIiwicmVmIiwiYW5jaG9yU3RyaW5nIiwiYW5pbWF0aW9uVHJpZ2dlcmVkIiwic2V0QW5jaG9yQ29tcGxldGUiLCJ1c2VBbmNob3IiLCJjb25zb2xlIiwibG9nIiwiY2FsbGJhY2siLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiY2hlY2tBbmNob3IiLCJpblZpZXdwb3J0IiwicmFkaW8iLCJoYW5kbGVDbGljayIsInNwcmluZ3MiLCJhcGkiLCJmcm9tIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwic3RhcnQiLCJ0byIsImlkIiwiZGl2Iiwic3R5bGUiLCJTcHJpbmciLCJvbkNsaWNrIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/doc-components/anchor-animation/AnchorAnimation.tsx\n"));

/***/ })

});