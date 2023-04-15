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

/***/ "./pages/components/events/EventItem.js":
/*!**********************************************!*\
  !*** ./pages/components/events/EventItem.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _EventItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventItem.module.css */ \"./pages/components/events/EventItem.module.css\");\n/* harmony import */ var _EventItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_EventItem_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction EventItem(param) {\n    let { title , image , date , location , id  } = param;\n    const readableDate = new Date(date).toLocaleDateString(\"en-US\", {\n        day: \"numeric\",\n        month: \"long\",\n        year: \"numeric\"\n    });\n    const formattedAddress = location.replace(\", \", \"\\n\");\n    const exploreLink = \"/events/\".concat(id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().item),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/\" + image,\n                alt: title\n            }, void 0, false, {\n                fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/pages/components/events/EventItem.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/pages/components/events/EventItem.js\",\n                            lineNumber: 19,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/pages/components/events/EventItem.js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                            children: readableDate\n                        }, void 0, false, {\n                            fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/pages/components/events/EventItem.js\",\n                            lineNumber: 22,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/pages/components/events/EventItem.js\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                            children: formattedAddress\n                        }, void 0, false, {\n                            fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/pages/components/events/EventItem.js\",\n                            lineNumber: 25,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/pages/components/events/EventItem.js\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: exploreLink,\n                            children: \"Explore Event\"\n                        }, void 0, false, {\n                            fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/pages/components/events/EventItem.js\",\n                            lineNumber: 28,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/pages/components/events/EventItem.js\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/pages/components/events/EventItem.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/pages/components/events/EventItem.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n_c = EventItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventItem);\nvar _c;\n$RefreshReg$(_c, \"EventItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2V2ZW50cy9FdmVudEl0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQTZCO0FBQ2U7QUFFNUMsU0FBU0UsVUFBVSxLQUFvQyxFQUFFO1FBQXRDLEVBQUVDLE1BQUssRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUVDLFNBQVEsRUFBRUMsR0FBRSxFQUFFLEdBQXBDO0lBQ2YsTUFBTUMsZUFBZSxJQUFJQyxLQUFLSixNQUFNSyxrQkFBa0IsQ0FBQyxTQUFTO1FBQzVEQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsTUFBTTtJQUNWO0lBRUEsTUFBTUMsbUJBQW1CUixTQUFTUyxPQUFPLENBQUMsTUFBTTtJQUNoRCxNQUFNQyxjQUFjLFdBQWMsT0FBSFQ7SUFFL0IscUJBQ0ksOERBQUNVO1FBQUdDLFdBQVdqQixtRUFBWTs7MEJBQ3ZCLDhEQUFDbUI7Z0JBQUlDLEtBQUssTUFBTWpCO2dCQUFPa0IsS0FBS25COzs7Ozs7MEJBQzVCLDhEQUFDb0I7Z0JBQUlMLFdBQVdqQixzRUFBZTs7a0NBQzNCLDhEQUFDc0I7a0NBQ0QsNEVBQUNFO3NDQUFJdEI7Ozs7Ozs7Ozs7O2tDQUVULDhEQUFDb0I7a0NBQ0csNEVBQUNHO3NDQUFNbEI7Ozs7Ozs7Ozs7O2tDQUVYLDhEQUFDZTtrQ0FDRyw0RUFBQ0k7c0NBQVNiOzs7Ozs7Ozs7OztrQ0FFZCw4REFBQ1M7a0NBQ0csNEVBQUN2QixrREFBSUE7NEJBQUM0QixNQUFNWjtzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekM7S0E3QlNkO0FBK0JULCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvZXZlbnRzL0V2ZW50SXRlbS5qcz81ZjhhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0V2ZW50SXRlbS5tb2R1bGUuY3NzJ1xuXG5mdW5jdGlvbiBFdmVudEl0ZW0oeyB0aXRsZSwgaW1hZ2UsIGRhdGUsIGxvY2F0aW9uLCBpZCB9KSB7XG4gICAgY29uc3QgcmVhZGFibGVEYXRlID0gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHtcbiAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgIHllYXI6ICdudW1lcmljJ1xuICAgIH0pO1xuXG4gICAgY29uc3QgZm9ybWF0dGVkQWRkcmVzcyA9IGxvY2F0aW9uLnJlcGxhY2UoJywgJywgJ1xcbicpO1xuICAgIGNvbnN0IGV4cGxvcmVMaW5rID0gYC9ldmVudHMvJHtpZH1gXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxuICAgICAgICAgICAgPGltZyBzcmM9eycvJyArIGltYWdlfSBhbHQ9e3RpdGxlfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHRpbWU+e3JlYWRhYmxlRGF0ZX08L3RpbWU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGFkZHJlc3M+e2Zvcm1hdHRlZEFkZHJlc3N9PC9hZGRyZXNzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2V4cGxvcmVMaW5rfT5FeHBsb3JlIEV2ZW50PC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEl0ZW07XG4iXSwibmFtZXMiOlsiTGluayIsImNsYXNzZXMiLCJFdmVudEl0ZW0iLCJ0aXRsZSIsImltYWdlIiwiZGF0ZSIsImxvY2F0aW9uIiwiaWQiLCJyZWFkYWJsZURhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZm9ybWF0dGVkQWRkcmVzcyIsInJlcGxhY2UiLCJleHBsb3JlTGluayIsImxpIiwiY2xhc3NOYW1lIiwiaXRlbSIsImltZyIsInNyYyIsImFsdCIsImRpdiIsImNvbnRlbnQiLCJoMiIsInRpbWUiLCJhZGRyZXNzIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/events/EventItem.js\n"));

/***/ })

});