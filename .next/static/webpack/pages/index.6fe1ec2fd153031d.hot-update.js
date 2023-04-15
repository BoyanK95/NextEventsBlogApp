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

/***/ "./components/events/EventItem.js":
/*!****************************************!*\
  !*** ./components/events/EventItem.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _EventItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventItem.module.css */ \"./components/events/EventItem.module.css\");\n/* harmony import */ var _EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Button */ \"./components/ui/Button.js\");\n\n\n\n\nfunction EventItem(param) {\n    let { title , image , date , location , id  } = param;\n    const readableDate = new Date(date).toLocaleDateString(\"en-US\", {\n        day: \"numeric\",\n        month: \"long\",\n        year: \"numeric\"\n    });\n    const formattedAddress = location.replace(\", \", \"\\n\");\n    const exploreLink = \"/events/\".concat(id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().item),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/\" + image,\n                alt: title\n            }, void 0, false, {\n                fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().address),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().date),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                            children: readableDate\n                        }, void 0, false, {\n                            fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().address),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                            children: formattedAddress\n                        }, void 0, false, {\n                            fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            link: true\n                        }, void 0, false, {\n                            fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_c = EventItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventItem);\nvar _c;\n$RefreshReg$(_c, \"EventItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V2ZW50cy9FdmVudEl0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNnQjtBQUNYO0FBRWxDLFNBQVNHLFVBQVUsS0FBb0MsRUFBRTtRQUF0QyxFQUFFQyxNQUFLLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFQyxTQUFRLEVBQUVDLEdBQUUsRUFBRSxHQUFwQztJQUNmLE1BQU1DLGVBQWUsSUFBSUMsS0FBS0osTUFBTUssa0JBQWtCLENBQUMsU0FBUztRQUM1REMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLE1BQU07SUFDVjtJQUVBLE1BQU1DLG1CQUFtQlIsU0FBU1MsT0FBTyxDQUFDLE1BQU07SUFDaEQsTUFBTUMsY0FBYyxXQUFjLE9BQUhUO0lBRS9CLHFCQUNJLDhEQUFDVTtRQUFHQyxXQUFXbEIsbUVBQVk7OzBCQUN2Qiw4REFBQ29CO2dCQUFJQyxLQUFLLE1BQU1qQjtnQkFBT2tCLEtBQUtuQjs7Ozs7OzBCQUM1Qiw4REFBQ29CO2dCQUFJTCxXQUFXbEIsc0VBQWU7O2tDQUMzQiw4REFBQ3VCO3dCQUFJTCxXQUFXbEIsc0VBQWU7a0NBQzNCLDRFQUFDMEI7c0NBQUl2Qjs7Ozs7Ozs7Ozs7a0NBRVQsOERBQUNvQjt3QkFBSUwsV0FBV2xCLG1FQUFZO2tDQUN4Qiw0RUFBQzJCO3NDQUFNbkI7Ozs7Ozs7Ozs7O2tDQUVYLDhEQUFDZTt3QkFBSUwsV0FBV2xCLHNFQUFlO2tDQUMzQiw0RUFBQ3lCO3NDQUFTWDs7Ozs7Ozs7Ozs7a0NBRWQsOERBQUNTO3dCQUFJTCxXQUFXbEIsc0VBQWU7a0NBQzNCLDRFQUFDQyxrREFBTUE7NEJBQUM0QixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQztLQTdCUzNCO0FBK0JULCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZXZlbnRzL0V2ZW50SXRlbS5qcz83NWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluayc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0V2ZW50SXRlbS5tb2R1bGUuY3NzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vdWkvQnV0dG9uJztcblxuZnVuY3Rpb24gRXZlbnRJdGVtKHsgdGl0bGUsIGltYWdlLCBkYXRlLCBsb2NhdGlvbiwgaWQgfSkge1xuICAgIGNvbnN0IHJlYWRhYmxlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7XG4gICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICB5ZWFyOiAnbnVtZXJpYydcbiAgICB9KTtcblxuICAgIGNvbnN0IGZvcm1hdHRlZEFkZHJlc3MgPSBsb2NhdGlvbi5yZXBsYWNlKCcsICcsICdcXG4nKTtcbiAgICBjb25zdCBleHBsb3JlTGluayA9IGAvZXZlbnRzLyR7aWR9YDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XG4gICAgICAgICAgICA8aW1nIHNyYz17Jy8nICsgaW1hZ2V9IGFsdD17dGl0bGV9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRyZXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PlxuICAgICAgICAgICAgICAgICAgICA8dGltZT57cmVhZGFibGVEYXRlfTwvdGltZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRyZXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPGFkZHJlc3M+e2Zvcm1hdHRlZEFkZHJlc3N9PC9hZGRyZXNzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxpbmsvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRJdGVtO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJjbGFzc2VzIiwiQnV0dG9uIiwiRXZlbnRJdGVtIiwidGl0bGUiLCJpbWFnZSIsImRhdGUiLCJsb2NhdGlvbiIsImlkIiwicmVhZGFibGVEYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsImZvcm1hdHRlZEFkZHJlc3MiLCJyZXBsYWNlIiwiZXhwbG9yZUxpbmsiLCJsaSIsImNsYXNzTmFtZSIsIml0ZW0iLCJpbWciLCJzcmMiLCJhbHQiLCJkaXYiLCJjb250ZW50IiwiYWRkcmVzcyIsImgyIiwidGltZSIsImFjdGlvbnMiLCJsaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/events/EventItem.js\n"));

/***/ })

});