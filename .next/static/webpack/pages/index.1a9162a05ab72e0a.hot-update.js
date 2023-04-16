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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _EventItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventItem.module.css */ \"./components/events/EventItem.module.css\");\n/* harmony import */ var _EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Button */ \"./components/ui/Button.js\");\n/* harmony import */ var _icons_date_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/date-icon */ \"./components/icons/date-icon.js\");\n\n\n\n\nfunction EventItem(param) {\n    let { title , image , date , location , id  } = param;\n    const readableDate = new Date(date).toLocaleDateString(\"en-US\", {\n        day: \"numeric\",\n        month: \"long\",\n        year: \"numeric\"\n    });\n    const formattedAddress = location.replace(\", \", \"\\n\");\n    const exploreLink = \"/events/\".concat(id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().item),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/\" + image,\n                alt: title\n            }, void 0, false, {\n                fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().address),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().date),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Date, {}, void 0, false, {\n                                fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n                                lineNumber: 23,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                                children: readableDate\n                            }, void 0, false, {\n                                fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().address),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                            children: formattedAddress\n                        }, void 0, false, {\n                            fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            link: exploreLink,\n                            children: \"Explore Event\"\n                        }, void 0, false, {\n                            fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/components/events/EventItem.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_c = EventItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventItem);\nvar _c;\n$RefreshReg$(_c, \"EventItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V2ZW50cy9FdmVudEl0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQTZDO0FBQ1g7QUFDTztBQUV6QyxTQUFTRyxVQUFVLEtBQW9DLEVBQUU7UUFBdEMsRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRUMsU0FBUSxFQUFFQyxHQUFFLEVBQUUsR0FBcEM7SUFDZixNQUFNQyxlQUFlLElBQUlDLEtBQUtKLE1BQU1LLGtCQUFrQixDQUFDLFNBQVM7UUFDNURDLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxNQUFNO0lBQ1Y7SUFFQSxNQUFNQyxtQkFBbUJSLFNBQVNTLE9BQU8sQ0FBQyxNQUFNO0lBQ2hELE1BQU1DLGNBQWMsV0FBYyxPQUFIVDtJQUUvQixxQkFDSSw4REFBQ1U7UUFBR0MsV0FBV25CLG1FQUFZOzswQkFDdkIsOERBQUNxQjtnQkFBSUMsS0FBSyxNQUFNakI7Z0JBQU9rQixLQUFLbkI7Ozs7OzswQkFDNUIsOERBQUNvQjtnQkFBSUwsV0FBV25CLHNFQUFlOztrQ0FDM0IsOERBQUN3Qjt3QkFBSUwsV0FBV25CLHNFQUFlO2tDQUMzQiw0RUFBQzJCO3NDQUFJdkI7Ozs7Ozs7Ozs7O2tDQUVULDhEQUFDb0I7d0JBQUlMLFdBQVduQixtRUFBWTs7MENBQ3hCLDhEQUFDVTs7Ozs7MENBQ0QsOERBQUNrQjswQ0FBTW5COzs7Ozs7Ozs7Ozs7a0NBRVgsOERBQUNlO3dCQUFJTCxXQUFXbkIsc0VBQWU7a0NBQzNCLDRFQUFDMEI7c0NBQVNYOzs7Ozs7Ozs7OztrQ0FFZCw4REFBQ1M7d0JBQUlMLFdBQVduQixzRUFBZTtrQ0FDM0IsNEVBQUNDLGtEQUFNQTs0QkFBQzZCLE1BQU1iO3NDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvQztLQTlCU2Q7QUFnQ1QsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvRXZlbnRJdGVtLmpzPzc1ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9FdmVudEl0ZW0ubW9kdWxlLmNzcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL3VpL0J1dHRvbic7XG5pbXBvcnQgRGF0ZUljb24gZnJvbSAnLi4vaWNvbnMvZGF0ZS1pY29uJ1xuXG5mdW5jdGlvbiBFdmVudEl0ZW0oeyB0aXRsZSwgaW1hZ2UsIGRhdGUsIGxvY2F0aW9uLCBpZCB9KSB7XG4gICAgY29uc3QgcmVhZGFibGVEYXRlID0gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHtcbiAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgIHllYXI6ICdudW1lcmljJ1xuICAgIH0pO1xuXG4gICAgY29uc3QgZm9ybWF0dGVkQWRkcmVzcyA9IGxvY2F0aW9uLnJlcGxhY2UoJywgJywgJ1xcbicpO1xuICAgIGNvbnN0IGV4cGxvcmVMaW5rID0gYC9ldmVudHMvJHtpZH1gO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXsnLycgKyBpbWFnZX0gYWx0PXt0aXRsZX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFkZHJlc3N9PlxuICAgICAgICAgICAgICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGF0ZX0+XG4gICAgICAgICAgICAgICAgICAgIDxEYXRlIC8+XG4gICAgICAgICAgICAgICAgICAgIDx0aW1lPntyZWFkYWJsZURhdGV9PC90aW1lPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFkZHJlc3N9PlxuICAgICAgICAgICAgICAgICAgICA8YWRkcmVzcz57Zm9ybWF0dGVkQWRkcmVzc308L2FkZHJlc3M+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbGluaz17ZXhwbG9yZUxpbmt9PkV4cGxvcmUgRXZlbnQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50SXRlbTtcbiJdLCJuYW1lcyI6WyJjbGFzc2VzIiwiQnV0dG9uIiwiRGF0ZUljb24iLCJFdmVudEl0ZW0iLCJ0aXRsZSIsImltYWdlIiwiZGF0ZSIsImxvY2F0aW9uIiwiaWQiLCJyZWFkYWJsZURhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZm9ybWF0dGVkQWRkcmVzcyIsInJlcGxhY2UiLCJleHBsb3JlTGluayIsImxpIiwiY2xhc3NOYW1lIiwiaXRlbSIsImltZyIsInNyYyIsImFsdCIsImRpdiIsImNvbnRlbnQiLCJhZGRyZXNzIiwiaDIiLCJ0aW1lIiwiYWN0aW9ucyIsImxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/events/EventItem.js\n"));

/***/ })

});