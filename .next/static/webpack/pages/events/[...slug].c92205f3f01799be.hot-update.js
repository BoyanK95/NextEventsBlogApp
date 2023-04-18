"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events/[...slug]",{

/***/ "./pages/events/[...slug].js":
/*!***********************************!*\
  !*** ./pages/events/[...slug].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DUMMY_DATA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../DUMMY_DATA */ \"./DUMMY_DATA.js\");\n/* harmony import */ var _components_events_EventList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/events/EventList */ \"./components/events/EventList.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction FilteredEventsPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const filteredData = router.query.slug;\n    if (!filteredData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"center\",\n            children: \"Loading ...\"\n        }, void 0, false, {\n            fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/pages/events/[...slug].js\",\n            lineNumber: 12,\n            columnNumber: 16\n        }, this);\n    }\n    const filteredYear = filteredData[0];\n    const filteredMonth = filteredData[1];\n    const numYear = +filteredYear;\n    const numMonth = +filteredMonth;\n    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2020 || numMonth < 1 || numMonth > 12) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"center\",\n            children: \"Invalid filter. Please adjust your values!\"\n        }, void 0, false, {\n            fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/pages/events/[...slug].js\",\n            lineNumber: 22,\n            columnNumber: 16\n        }, this);\n    }\n    const filteredEvents = (0,_DUMMY_DATA__WEBPACK_IMPORTED_MODULE_2__.getFilteredEvents)({\n        year: numYear,\n        month: numMonth\n    });\n    if (!filteredEvents || filteredEvents.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"center\",\n            children: \"No events found for the chosen filter!\"\n        }, void 0, false, {\n            fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/pages/events/[...slug].js\",\n            lineNumber: 28,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_EventList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            items: filteredEvents\n        }, void 0, false, {\n            fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/pages/events/[...slug].js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/boyankoichev/Desktop/BoyanYaraCoding/next-totorial/NextEventsBlogApp/NextEventsBlogApp/pages/events/[...slug].js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_s(FilteredEventsPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = FilteredEventsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilteredEventsPage);\nvar _c;\n$RefreshReg$(_c, \"FilteredEventsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNhO0FBQ0s7QUFDekI7QUFFakMsU0FBU0kscUJBQXFCOztJQUMxQixNQUFNQyxTQUFTTCxzREFBU0E7SUFFeEIsTUFBTU0sZUFBZUQsT0FBT0UsS0FBSyxDQUFDQyxJQUFJO0lBRXRDLElBQUksQ0FBQ0YsY0FBYztRQUNmLHFCQUFPLDhEQUFDRztZQUFFQyxXQUFVO3NCQUFTOzs7Ozs7SUFDakMsQ0FBQztJQUVELE1BQU1DLGVBQWVMLFlBQVksQ0FBQyxFQUFFO0lBQ3BDLE1BQU1NLGdCQUFnQk4sWUFBWSxDQUFDLEVBQUU7SUFFckMsTUFBTU8sVUFBVSxDQUFDRjtJQUNqQixNQUFNRyxXQUFXLENBQUNGO0lBRWxCLElBQUlHLE1BQU1GLFlBQVlFLE1BQU1ELGFBQWFELFVBQVUsUUFBUUEsVUFBVSxRQUFRQyxXQUFXLEtBQUtBLFdBQVcsSUFBSTtRQUN4RyxxQkFBTyw4REFBQ0w7WUFBRUMsV0FBVTtzQkFBUzs7Ozs7O0lBQ2pDLENBQUM7SUFFRCxNQUFNTSxpQkFBaUJmLDhEQUFpQkEsQ0FBQztRQUFFZ0IsTUFBTUo7UUFBU0ssT0FBT0o7SUFBUztJQUUxRSxJQUFJLENBQUNFLGtCQUFrQkEsZUFBZUcsTUFBTSxLQUFLLEdBQUc7UUFDaEQscUJBQU8sOERBQUNWO1lBQUVDLFdBQVU7c0JBQVM7Ozs7OztJQUNqQyxDQUFDO0lBRUQscUJBQ0ksOERBQUNQLDJDQUFRQTtrQkFDTCw0RUFBQ0Qsb0VBQVNBO1lBQUNrQixPQUFPSjs7Ozs7Ozs7Ozs7QUFHOUI7R0E5QlNaOztRQUNVSixrREFBU0E7OztLQURuQkk7QUFnQ1QsK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmpzPzUyNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgZ2V0RmlsdGVyZWRFdmVudHMgfSBmcm9tICcuLi8uLi9EVU1NWV9EQVRBJztcbmltcG9ydCBFdmVudExpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ldmVudHMvRXZlbnRMaXN0JztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBGaWx0ZXJlZEV2ZW50c1BhZ2UoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSByb3V0ZXIucXVlcnkuc2x1ZztcblxuICAgIGlmICghZmlsdGVyZWREYXRhKSB7XG4gICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9J2NlbnRlcic+TG9hZGluZyAuLi48L3A+O1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlcmVkWWVhciA9IGZpbHRlcmVkRGF0YVswXTtcbiAgICBjb25zdCBmaWx0ZXJlZE1vbnRoID0gZmlsdGVyZWREYXRhWzFdO1xuXG4gICAgY29uc3QgbnVtWWVhciA9ICtmaWx0ZXJlZFllYXI7XG4gICAgY29uc3QgbnVtTW9udGggPSArZmlsdGVyZWRNb250aDtcblxuICAgIGlmIChpc05hTihudW1ZZWFyKSB8fCBpc05hTihudW1Nb250aCkgfHwgbnVtWWVhciA+IDIwMzAgfHwgbnVtWWVhciA8IDIwMjAgfHwgbnVtTW9udGggPCAxIHx8IG51bU1vbnRoID4gMTIpIHtcbiAgICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT0nY2VudGVyJz5JbnZhbGlkIGZpbHRlci4gUGxlYXNlIGFkanVzdCB5b3VyIHZhbHVlcyE8L3A+O1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlcmVkRXZlbnRzID0gZ2V0RmlsdGVyZWRFdmVudHMoeyB5ZWFyOiBudW1ZZWFyLCBtb250aDogbnVtTW9udGggfSk7XG5cbiAgICBpZiAoIWZpbHRlcmVkRXZlbnRzIHx8IGZpbHRlcmVkRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPSdjZW50ZXInPk5vIGV2ZW50cyBmb3VuZCBmb3IgdGhlIGNob3NlbiBmaWx0ZXIhPC9wPjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICA8RXZlbnRMaXN0IGl0ZW1zPXtmaWx0ZXJlZEV2ZW50c30gLz5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJlZEV2ZW50c1BhZ2U7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiZ2V0RmlsdGVyZWRFdmVudHMiLCJFdmVudExpc3QiLCJGcmFnbWVudCIsIkZpbHRlcmVkRXZlbnRzUGFnZSIsInJvdXRlciIsImZpbHRlcmVkRGF0YSIsInF1ZXJ5Iiwic2x1ZyIsInAiLCJjbGFzc05hbWUiLCJmaWx0ZXJlZFllYXIiLCJmaWx0ZXJlZE1vbnRoIiwibnVtWWVhciIsIm51bU1vbnRoIiwiaXNOYU4iLCJmaWx0ZXJlZEV2ZW50cyIsInllYXIiLCJtb250aCIsImxlbmd0aCIsIml0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n"));

/***/ })

});