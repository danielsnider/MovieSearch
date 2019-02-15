module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        /******/ configurable: false,
        /******/ enumerable: true,
        /******/ get: getter
        /******/
      });
      /******/
    }
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 2));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./pages/Leftbar.js": /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(
        "babel-runtime/regenerator"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(
        "react"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_1_react__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivecore_lib_actions__ = __webpack_require__(
        "@appbaseio/reactivecore/lib/actions"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivecore_lib_actions___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivecore_lib_actions__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_list_MultiDataList__ = __webpack_require__(
        "@appbaseio/reactivesearch/lib/components/list/MultiDataList"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_list_MultiDataList___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_list_MultiDataList__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_range_RangeSlider__ = __webpack_require__(
        "@appbaseio/reactivesearch/lib/components/range/RangeSlider"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_range_RangeSlider___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_range_RangeSlider__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appbaseio_reactivesearch_lib_components_basic_TagCloud__ = __webpack_require__(
        "@appbaseio/reactivesearch/lib/components/basic/TagCloud"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appbaseio_reactivesearch_lib_components_basic_TagCloud___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_5__appbaseio_reactivesearch_lib_components_basic_TagCloud__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appbaseio_reactivesearch_lib_components_date_DateRange__ = __webpack_require__(
        "@appbaseio/reactivesearch/lib/components/date/DateRange"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appbaseio_reactivesearch_lib_components_date_DateRange___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_6__appbaseio_reactivesearch_lib_components_date_DateRange__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__appbaseio_reactivesearch_lib_components_list_MultiList__ = __webpack_require__(
        "@appbaseio/reactivesearch/lib/components/list/MultiList"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__appbaseio_reactivesearch_lib_components_list_MultiList___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_7__appbaseio_reactivesearch_lib_components_list_MultiList__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__appbaseio_reactivesearch_lib_components_range_SingleRange__ = __webpack_require__(
        "@appbaseio/reactivesearch/lib/components/range/SingleRange"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__appbaseio_reactivesearch_lib_components_range_SingleRange___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_8__appbaseio_reactivesearch_lib_components_range_SingleRange__
      );

      var _extends =
        Object.assign ||
        function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };

      var _jsxFileName = "/home/dan/MovieSearch/pages/Leftbar.js";

      var _createClass = (function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();

      function _asyncToGenerator(fn) {
        return function() {
          var gen = fn.apply(this, arguments);
          return new Promise(function(resolve, reject) {
            function step(key, arg) {
              try {
                var info = gen[key](arg);
                var value = info.value;
              } catch (error) {
                reject(error);
                return;
              }
              if (info.done) {
                resolve(value);
              } else {
                return Promise.resolve(value).then(
                  function(value) {
                    step("next", value);
                  },
                  function(err) {
                    step("throw", err);
                  }
                );
              }
            }
            return step("next");
          });
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return call && (typeof call === "object" || typeof call === "function")
          ? call
          : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof superClass
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          Object.setPrototypeOf
            ? Object.setPrototypeOf(subClass, superClass)
            : (subClass.__proto__ = superClass);
      }

      var components = {
        multiListModality: {
          componentId: "modality-list",
          dataField: "Modality.raw",
          className: "modality-filter",
          size: 20,
          sortBy: "asc",
          queryFormat: "or",
          selectAllLabel: "All Modalities",
          showCheckbox: true,
          showCount: true,
          showSearch: true,
          placeholder: "Search for a Modality",
          react: {
            and: [
              "mainSearch",
              "results",
              "gender-list",
              "bodypart-list",
              "age-slider",
              "acquisitiondate-range",
              "tagCloud"
            ]
          },
          showFilter: true,
          filterLabel: "Modality",
          URLParams: false,
          innerClass: {
            label: "list-item",
            input: "list-input"
          }
        },
        multiListGender: {
          componentId: "gender-list",
          dataField: "PatientSex.raw",
          className: "gender-filter",
          size: 20,
          sortBy: "asc",
          queryFormat: "or",
          selectAllLabel: "All Genders",
          showCheckbox: true,
          showCount: true,
          showSearch: false,
          placeholder: "Search for a Gender",
          react: {
            and: [
              "mainSearch",
              "results",
              "modality-list",
              "bodypart-list",
              "age-slider",
              "acquisitiondate-range",
              "tagCloud"
            ]
          },
          showFilter: true,
          filterLabel: "Gender",
          URLParams: false,
          innerClass: {
            label: "list-item",
            input: "list-input"
          }
        },
        multiListBodyPart: {
          componentId: "bodypart-list",
          dataField: "BodyPartExamined.raw",
          className: "bodypart-filter",
          size: 20,
          sortBy: "asc",
          queryFormat: "or",
          selectAllLabel: "All Body Parts",
          showCheckbox: true,
          showCount: true,
          showSearch: true,
          placeholder: "Search for a Body Part",
          react: {
            and: [
              "mainSearch",
              "results",
              "modality-list",
              "gender-list",
              "age-slider",
              "acquisitiondate-range",
              "tagCloud"
            ]
          },
          showFilter: true,
          filterLabel: "Body Part",
          URLParams: false,
          innerClass: {
            label: "list-item",
            input: "list-input"
          }
        },
        rangeSliderAge: {
          componentId: "age-slider",
          dataField: "PatientAgeInt",
          className: "age-filter",
          filterLabel: "Age",
          range: {
            start: 0,
            end: 100
          },
          rangeLabels: {
            start: "0",
            end: "100"
          },
          react: {
            and: [
              "mainSearch",
              "results",
              "modality-list",
              "gender-list",
              "bodypart-list",
              "acquisitiondate-range",
              "tagCloud"
            ]
          }
        },
        dateRangeAcquisition: {
          componentId: "acquisitiondate-range",
          dataField: "AcquisitionDate",
          className: "acquisitiondate-filter"
        },
        multiDataList: {
          componentId: "language-list",
          dataField: "original_language.raw",
          className: "language-filter",
          size: 100,
          sortBy: "asc",
          queryFormat: "or",
          selectAllLabel: "All Languages",
          showCheckbox: true,
          showSearch: true,
          placeholder: "Search for a language",
          react: {
            and: [
              "mainSearch",
              "results",
              "date-filter",
              "RangeSlider",
              "modality-list",
              "revenue-list"
            ]
          },
          data: [
            {
              label: "English",
              value: "English"
            },
            {
              label: "Chinese",
              value: "Chinese"
            },
            {
              label: "Turkish",
              value: "Turkish"
            },
            {
              label: "Swedish",
              value: "Swedish"
            },
            {
              label: "Russian",
              value: "Russian"
            },
            {
              label: "Portuguese",
              value: "Portuguese"
            },
            {
              label: "Korean",
              value: "Korean"
            },
            {
              label: "Japanese",
              value: "Japanese"
            },
            {
              label: "Italian",
              value: "Italian"
            },
            {
              label: "Hindi",
              value: "Hindi"
            },
            {
              label: "French",
              value: "French"
            },
            {
              label: "Finnish",
              value: "Finnish"
            },
            {
              label: "Spanish",
              value: "Spanish"
            },
            {
              label: "Deutsch",
              value: "Deutsch"
            }
          ],
          showFilter: true,
          filterLabel: "Language",
          URLParams: false,
          innerClass: {
            label: "list-item",
            input: "list-input"
          }
        },
        singleRange: {
          componentId: "revenue-list",
          dataField: "ran_revenue",
          className: "revenue-filter",
          data: [
            { start: 0, end: 1000, label: "< 1M" },
            { start: 1000, end: 10000, label: "1M-10M" },
            { start: 10000, end: 500000, label: "10M-500M" },
            { start: 500000, end: 1000000, label: "500M-1B" },
            { start: 1000000, end: 10000000, label: "> 1B" }
          ],
          showRadio: true,
          showFilter: true,
          filterLabel: "Revenue",
          URLParams: false,
          innerClass: {
            label: "revenue-label",
            radio: "revenue-radio"
          }
        }
      };

      var Leftbar = (function(_Component) {
        _inherits(Leftbar, _Component);

        function Leftbar() {
          _classCallCheck(this, Leftbar);

          var _this = _possibleConstructorReturn(
            this,
            (Leftbar.__proto__ || Object.getPrototypeOf(Leftbar)).call(this)
          );

          _this.state = { isChecked: false };
          _this.handleChecked = _this.handleChecked.bind(_this); // set this, because you need get methods from CheckBox
          return _this;
        }

        _createClass(
          Leftbar,
          [
            {
              key: "handleChecked",
              value: function handleChecked() {
                this.setState({ isChecked: !this.state.isChecked });
              }
            },
            {
              key: "render",
              value: function render() {
                var show_rangeSliderAge;
                if (this.state.isChecked) {
                  show_rangeSliderAge = "checked";
                } else {
                  show_rangeSliderAge = "unchecked";
                  // updateHits()
                  // removeComponent(...components.dateRangeAcquisition)
                  // this.forceUpdate();
                  // console.log(document)
                  // var elem = document.getElementById('ceohuao');
                  // elem.parentNode.removeChild(elem);
                }

                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  "div",
                  {
                    className: this.props.isClicked
                      ? "left-bar-optional"
                      : "left-bar",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 318
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "div",
                    {
                      className: "filter-heading center",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 320
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      "b",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 321
                        }
                      },
                      " ",
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "i",
                        {
                          className: "fa fa-camera",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 323
                          }
                        }
                      ),
                      " Modality",
                      " "
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7__appbaseio_reactivesearch_lib_components_list_MultiList___default.a,
                    _extends({}, components.multiListModality, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 327
                      }
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "hr",
                    {
                      className: "blue",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 329
                      }
                    }
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "div",
                    {
                      className: "filter-heading center",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 331
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      "b",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 332
                        }
                      },
                      " ",
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "i",
                        {
                          className: "fa fa-user",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 334
                          }
                        }
                      ),
                      " Body Part",
                      " "
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7__appbaseio_reactivesearch_lib_components_list_MultiList___default.a,
                    _extends({}, components.multiListBodyPart, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 338
                      }
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "hr",
                    {
                      className: "blue",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 340
                      }
                    }
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "div",
                    {
                      className: "filter-heading center",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 342
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      "b",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 343
                        }
                      },
                      " ",
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "i",
                        {
                          className: "fa fa-transgender",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 345
                          }
                        }
                      ),
                      " Gender",
                      " "
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7__appbaseio_reactivesearch_lib_components_list_MultiList___default.a,
                    _extends({}, components.multiListGender, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 349
                      }
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "hr",
                    {
                      className: "blue",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 363
                      }
                    }
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "div",
                    {
                      className: "filter-heading center",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 365
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      "b",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 366
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "i",
                        {
                          className: "fa fa-address-card",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 367
                          }
                        }
                      ),
                      " Patient Age"
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_range_RangeSlider___default.a,
                    _extends({}, components.rangeSliderAge, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 378
                      }
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "hr",
                    {
                      className: "blue",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 380
                      }
                    }
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "div",
                    {
                      className: "filter-heading center",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 382
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      "b",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 383
                        }
                      },
                      " ",
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "i",
                        {
                          className: "fa fa-calendar",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 385
                          }
                        }
                      ),
                      " Acquisition Date",
                      " "
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_6__appbaseio_reactivesearch_lib_components_date_DateRange___default.a,
                    _extends({}, components.dateRangeAcquisition, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 389
                      }
                    })
                  )
                );
              }
            }
          ],
          [
            {
              key: "getInitialProps",
              value: (function() {
                var _ref = _asyncToGenerator(
                  /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
                    function _callee() {
                      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
                        function _callee$(_context) {
                          while (1) {
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                _context.next = 2;
                                return initReactivesearch(
                                  [
                                    _extends({}, components.multiListModality, {
                                      type: "MultiList",
                                      source:
                                        __WEBPACK_IMPORTED_MODULE_7__appbaseio_reactivesearch_lib_components_list_MultiList___default.a
                                    }),
                                    _extends({}, components.multiListBodyPart, {
                                      type: "MultiList",
                                      source:
                                        __WEBPACK_IMPORTED_MODULE_7__appbaseio_reactivesearch_lib_components_list_MultiList___default.a
                                    }),
                                    _extends({}, components.multiListGender, {
                                      type: "MultiList",
                                      source:
                                        __WEBPACK_IMPORTED_MODULE_7__appbaseio_reactivesearch_lib_components_list_MultiList___default.a
                                    }),
                                    _extends({}, components.multiDataList, {
                                      type: "MultiDataList",
                                      source:
                                        __WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_list_MultiDataList___default.a
                                    }),
                                    _extends(
                                      {},
                                      components.dateRangeAcquisition,
                                      {
                                        type: "DateRange",
                                        source:
                                          __WEBPACK_IMPORTED_MODULE_6__appbaseio_reactivesearch_lib_components_date_DateRange___default.a
                                      }
                                    ),
                                    _extends({}, components.rangeSliderAge, {
                                      type: "RangeSlider",
                                      source:
                                        __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_range_RangeSlider___default.a
                                    }),
                                    _extends({}, components.singleRange, {
                                      type: "SingleRange",
                                      source:
                                        __WEBPACK_IMPORTED_MODULE_8__appbaseio_reactivesearch_lib_components_range_SingleRange___default.a
                                    })
                                  ],
                                  null
                                );

                              case 2:
                                _context.t0 = _context.sent;
                                return _context.abrupt("return", {
                                  store: _context.t0
                                });

                              case 4:
                              case "end":
                                return _context.stop();
                            }
                          }
                        },
                        _callee,
                        this
                      );
                    }
                  )
                );

                function getInitialProps() {
                  return _ref.apply(this, arguments);
                }

                return getInitialProps;
              })()
            }
          ]
        );

        return Leftbar;
      })(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

      /* harmony default export */ __webpack_exports__["a"] = Leftbar;

      /***/
    },

    /***/ "./pages/Navbar.js": /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(
        "babel-runtime/regenerator"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(
        "react"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_1_react__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_search_DataSearch__ = __webpack_require__(
        "@appbaseio/reactivesearch/lib/components/search/DataSearch"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_search_DataSearch___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_search_DataSearch__
      );

      var _extends =
        Object.assign ||
        function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };

      var _jsxFileName = "/home/dan/MovieSearch/pages/Navbar.js";

      var _createClass = (function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();

      function _asyncToGenerator(fn) {
        return function() {
          var gen = fn.apply(this, arguments);
          return new Promise(function(resolve, reject) {
            function step(key, arg) {
              try {
                var info = gen[key](arg);
                var value = info.value;
              } catch (error) {
                reject(error);
                return;
              }
              if (info.done) {
                resolve(value);
              } else {
                return Promise.resolve(value).then(
                  function(value) {
                    step("next", value);
                  },
                  function(err) {
                    step("throw", err);
                  }
                );
              }
            }
            return step("next");
          });
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return call && (typeof call === "object" || typeof call === "function")
          ? call
          : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof superClass
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          Object.setPrototypeOf
            ? Object.setPrototypeOf(subClass, superClass)
            : (subClass.__proto__ = superClass);
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      function custQuery(value, props) {
        if (value.length == 0) {
          return;
        }
        if (!value.includes(":")) {
          return;
        }

        var res = value.split(":");
        var field = res[0];
        var search = res[1];
        var query = _defineProperty({}, field, search);

        return {
          match: query
        };
      }

      var components = {
        dataSearch: {
          componentId: "mainSearch",
          // dataField: ["descriptions"],
          // dataField: ["StudyDescription","ReasonForStudy","SeriesDescription","StudyComments"],
          customQuery: custQuery,
          categoryField: "title",
          className: "search-bar",
          queryFormat: "and",
          placeholder: "Search for images...",
          iconPosition: "left",
          autosuggest: false,
          filterLabel: "search",
          highlight: true
        }
      };

      var Navbar = (function(_Component) {
        _inherits(Navbar, _Component);

        function Navbar() {
          _classCallCheck(this, Navbar);

          return _possibleConstructorReturn(
            this,
            (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(
              this,
              arguments
            )
          );
        }

        _createClass(
          Navbar,
          [
            {
              key: "render",
              value: function render() {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  "div",
                  {
                    className: "navbar",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 57
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "div",
                    {
                      className: "logo-container",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      "img",
                      {
                        className: "app-logo",
                        src: "/static/sickkids.png",
                        alt: "ImageArchive",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 59
                        }
                      }
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "div",
                    {
                      className: "search-container",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_search_DataSearch___default.a,
                      _extends({}, components.dataSearch, {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 63
                        }
                      })
                    )
                  )
                );
              }
            }
          ],
          [
            {
              key: "getInitialProps",
              value: (function() {
                var _ref = _asyncToGenerator(
                  /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
                    function _callee() {
                      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
                        function _callee$(_context) {
                          while (1) {
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                _context.next = 2;
                                return initReactivesearch(
                                  [
                                    _extends({}, components.datasearch, {
                                      type: "DataSearch",
                                      source:
                                        __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_search_DataSearch___default.a
                                    })
                                  ],
                                  null
                                );

                              case 2:
                                _context.t0 = _context.sent;
                                return _context.abrupt("return", {
                                  store: _context.t0
                                });

                              case 4:
                              case "end":
                                return _context.stop();
                            }
                          }
                        },
                        _callee,
                        this
                      );
                    }
                  )
                );

                function getInitialProps() {
                  return _ref.apply(this, arguments);
                }

                return getInitialProps;
              })()
            }
          ]
        );

        return Navbar;
      })(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

      /* harmony default export */ __webpack_exports__["a"] = Navbar;

      /***/
    },

    /***/ "./pages/index.css": /***/ function(module, exports) {
      /***/
    },

    /***/ "./pages/index.jsx": /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(
        "babel-runtime/regenerator"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(
        "react"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_1_react__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_basic_ReactiveBase__ = __webpack_require__(
        "@appbaseio/reactivesearch/lib/components/basic/ReactiveBase"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_basic_ReactiveBase___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_basic_ReactiveBase__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_basic_TagCloud__ = __webpack_require__(
        "@appbaseio/reactivesearch/lib/components/basic/TagCloud"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_basic_TagCloud___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_basic_TagCloud__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_basic_SelectedFilters__ = __webpack_require__(
        "@appbaseio/reactivesearch/lib/components/basic/SelectedFilters"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_basic_SelectedFilters___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_basic_SelectedFilters__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appbaseio_reactivesearch_lib_components_result_ResultCard__ = __webpack_require__(
        "@appbaseio/reactivesearch/lib/components/result/ResultCard"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appbaseio_reactivesearch_lib_components_result_ResultCard___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_5__appbaseio_reactivesearch_lib_components_result_ResultCard__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Navbar_js__ = __webpack_require__(
        "./pages/Navbar.js"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Leftbar_js__ = __webpack_require__(
        "./pages/Leftbar.js"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__appbaseio_reactivesearch_lib_server__ = __webpack_require__(
        "@appbaseio/reactivesearch/lib/server"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__appbaseio_reactivesearch_lib_server___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_8__appbaseio_reactivesearch_lib_server__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index_css__ = __webpack_require__(
        "./pages/index.css"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index_css___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_9__index_css__
      );

      var _extends =
        Object.assign ||
        function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };

      var _createClass = (function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();

      var _jsxFileName = "/home/dan/MovieSearch/pages/index.jsx";

      function _asyncToGenerator(fn) {
        return function() {
          var gen = fn.apply(this, arguments);
          return new Promise(function(resolve, reject) {
            function step(key, arg) {
              try {
                var info = gen[key](arg);
                var value = info.value;
              } catch (error) {
                reject(error);
                return;
              }
              if (info.done) {
                resolve(value);
              } else {
                return Promise.resolve(value).then(
                  function(value) {
                    step("next", value);
                  },
                  function(err) {
                    step("throw", err);
                  }
                );
              }
            }
            return step("next");
          });
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return call && (typeof call === "object" || typeof call === "function")
          ? call
          : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof superClass
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          Object.setPrototypeOf
            ? Object.setPrototypeOf(subClass, superClass)
            : (subClass.__proto__ = superClass);
      }

      var components = {
        settings: {
          // type: "movieappfinal",
          app: "movie6",
          url: "http://192.168.136.148:9200/",
          // app: "MovieAppFinal",
          // credentials: "RxIAbH9Jc:6d3a5016-5e9d-448f-bd2b-63c80b401484",
          theme: {
            typography: {
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
              fontSize: "16px"
            },
            colors: {
              textColor: "#fff",
              backgroundColor: "#212121",
              primaryTextColor: "#fff",
              primaryColor: "#2196F3",
              titleColor: "#fff",
              alertColor: "#d9534f",
              borderColor: "#666"
            }
          }
        },
        selectedFilters: {
          showClearAll: true,
          clearAllLabel: "Clear filters"
        },
        tagCloudDescription: {
          componentId: "tagCloud",
          dataField: "descriptions.raw",
          title: "",
          size: 200,
          showCount: true,
          multiSelect: true,
          queryFormat: "or",
          react: {
            and: [
              "mainSearch",
              "results",
              "gender-list",
              "bodypart-list",
              "age-slider",
              "acquisitiondate-range"
            ]
          },
          showFilter: true,
          filterLabel: "Description",
          URLParams: false,
          loader: "Loading ..."
        },

        resultCard: {
          componentId: "results",
          dataField: "original_title.search",
          react: {
            and: [
              "mainSearch",
              "modality-list",
              "gender-list",
              "bodypart-list",
              "age-slider",
              "acquisitiondate-range",
              "tagCloud"
            ]
          },
          pagination: true,
          className: "Result_card",
          paginationAt: "bottom",
          pages: 5,
          size: 12,
          Loader: "Loading...",
          noResults: "No results found...",
          // sortOptions: [
          //   {
          //     dataField: "revenue",
          //     sortBy: "desc",
          //     label: "Sort by Revenue(High to Low) \u00A0"
          //   },
          //   {
          //     dataField: "popularity",
          //     sortBy: "desc",
          //     label: "Sort by Popularity(High to Low)\u00A0 \u00A0"
          //   },
          //   {
          //     dataField: "vote_average",
          //     sortBy: "desc",
          //     label: "Sort by Ratings(High to Low) \u00A0"
          //   },
          //   {
          //     dataField: "original_title.raw",
          //     sortBy: "asc",
          //     label: "Sort by Title(A-Z) \u00A0"
          //   }
          // ],
          onData: function onData(res) {
            return {
              description: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "div",
                {
                  className: "main-description",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  "div",
                  {
                    className: "ih-item square effect6 top_to_bottom",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 113
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "a",
                    {
                      target: "#",
                      href:
                        "http://192.168.136.148:8080/index.html?input=" +
                        res.dicom_url,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 114
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      "div",
                      {
                        className: "img",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 115
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "img",
                        {
                          src: "static/" + res.poster_path,
                          alt: res.original_title,
                          className: "result-image",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 116
                          }
                        }
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      "div",
                      {
                        className: "info colored",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 122
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "h3",
                        {
                          className: "overlay-title",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 123
                          }
                        },
                        res.original_title,
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          "button",
                          {
                            type: "button",
                            class: "btn btn-dark",
                            style: { marginLeft: "100px" },
                            onClick: function onClick(e) {
                              return AddToCollection(e, res);
                            },
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 124
                            }
                          },
                          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "i",
                            {
                              className: "fa fa-plus",
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 124
                              }
                            }
                          ),
                          " "
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "div",
                        {
                          className: "overlay-description",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 127
                          }
                        },
                        res.tagline
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "div",
                        {
                          className: "overlay-info",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 129
                          }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          "div",
                          {
                            className: "rating-time-score-container",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 130
                            }
                          },
                          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "div",
                            {
                              className: "sub-title Modality-data",
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 131
                              }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                              "b",
                              {
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 132
                                }
                              },
                              "Modality",
                              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                "span",
                                {
                                  className: "details",
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 134
                                  }
                                },
                                " ",
                                res.Modality,
                                " "
                              )
                            )
                          ),
                          Number.isInteger(res.PatientAgeInt) &&
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                              "div",
                              {
                                className: "sub-title Age-data",
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 147
                                }
                              },
                              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                "b",
                                {
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 148
                                  }
                                },
                                "Age:",
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                  "span",
                                  {
                                    className: "details",
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 150
                                    }
                                  },
                                  " ",
                                  res.PatientAgeInt
                                )
                              )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          "div",
                          {
                            className: "revenue-lang-container",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 156
                            }
                          },
                          res.AcquisitionDate &&
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                              "div",
                              {
                                className: "sub-title AcquisitionDate-data",
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 159
                                }
                              },
                              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                "b",
                                {
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 160
                                  }
                                },
                                "Acquisition Date:",
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                  "span",
                                  {
                                    className: "details",
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 162
                                    }
                                  },
                                  " ",
                                  res.AcquisitionDatePretty
                                )
                              )
                            )
                        )
                      )
                    )
                  )
                )
              ),
              url:
                "http://192.168.136.148:8080/index.html?input=" + res.dicom_url
            };
          },
          innerClass: {
            title: "result-title",
            listItem: "result-item",
            list: "list-container",
            sortOptions: "sort-options",
            resultStats: "result-stats",
            resultsInfo: "result-list-info",
            poweredBy: "powered-by"
          }
        }
      };

      function AddToCollection(e, res) {
        console.log(e);
        console.log(res);
        e.preventDefault();
        // CALL API
      }

      var Main = (function(_Component) {
        _inherits(Main, _Component);

        function Main(props) {
          _classCallCheck(this, Main);

          var _this = _possibleConstructorReturn(
            this,
            (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props)
          );

          _this.state = {
            isClicked: false,
            message: "🔬Show Filters"
          };
          return _this;
        }

        _createClass(
          Main,
          [
            {
              key: "handleClick",
              value: function handleClick() {
                console.log("handleClick");
                console.log(this);
                this.setState({
                  isClicked: !this.state.isClicked,
                  message: this.state.isClicked
                    ? "🔬 Show Filters"
                    : "🎬 Show Movies"
                });
              }
            },
            {
              key: "render",
              value: function render() {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  "div",
                  {
                    className: "main-container",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 247
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_basic_ReactiveBase___default.a,
                    _extends({}, components.settings, {
                      initialState: this.props.store,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 248
                      }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_6__Navbar_js__[
                        "a" /* default */
                      ],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 249
                        }
                      }
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      "div",
                      {
                        className: "sub-container",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 251
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7__Leftbar_js__[
                          "a" /* default */
                        ],
                        {
                          isClicked: this.state.isClicked,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 252
                          }
                        }
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "div",
                        {
                          className: this.state.isClicked
                            ? "result-container-optional"
                            : "result-container",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 254
                          }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_basic_SelectedFilters___default.a,
                          _extends({}, components.selectedFilters, {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 261
                            }
                          })
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_5__appbaseio_reactivesearch_lib_components_result_ResultCard___default.a,
                          _extends({}, components.resultCard, {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 263
                            }
                          })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "button",
                        {
                          className: "toggle-button",
                          onClick: this.handleClick.bind(this),
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 268
                          }
                        },
                        this.state.message
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      "div",
                      {
                        className: "bottom-bar",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 276
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "div",
                        {
                          className: "filter-heading center",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 277
                          }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          "b",
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 278
                            }
                          },
                          " ",
                          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "i",
                            {
                              className: "fa fa-cloud",
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 280
                              }
                            }
                          ),
                          " Tag Cloud",
                          " "
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_basic_TagCloud___default.a,
                        _extends({}, components.tagCloudDescription, {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 284
                          }
                        })
                      )
                    )
                  )
                );
              }
            }
          ],
          [
            {
              key: "getInitialProps",
              value: (function() {
                var _ref = _asyncToGenerator(
                  /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
                    function _callee() {
                      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
                        function _callee$(_context) {
                          while (1) {
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                _context.next = 2;
                                return __WEBPACK_IMPORTED_MODULE_8__appbaseio_reactivesearch_lib_server___default()(
                                  [
                                    _extends({}, components.selectedFilters, {
                                      type: "SelectedFilters",
                                      source:
                                        __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_basic_SelectedFilters___default.a
                                    }),
                                    _extends({}, components.resultCard, {
                                      type: "ResultCard",
                                      source:
                                        __WEBPACK_IMPORTED_MODULE_5__appbaseio_reactivesearch_lib_components_result_ResultCard___default.a
                                    })
                                  ],
                                  null,
                                  components.settings
                                );

                              case 2:
                                _context.t0 = _context.sent;
                                return _context.abrupt("return", {
                                  store: _context.t0
                                });

                              case 4:
                              case "end":
                                return _context.stop();
                            }
                          }
                        },
                        _callee,
                        this
                      );
                    }
                  )
                );

                function getInitialProps() {
                  return _ref.apply(this, arguments);
                }

                return getInitialProps;
              })()
            }
          ]
        );

        return Main;
      })(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

      /* harmony default export */ __webpack_exports__["default"] = Main;

      // console.log(document.getElementById('root'))

      /***/
    },

    /***/ 2: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__("./pages/index.jsx");

      /***/
    },

    /***/ "@appbaseio/reactivecore/lib/actions": /***/ function(
      module,
      exports
    ) {
      module.exports = require("@appbaseio/reactivecore/lib/actions");

      /***/
    },

    /***/ "@appbaseio/reactivesearch/lib/components/basic/ReactiveBase": /***/ function(
      module,
      exports
    ) {
      module.exports = require("@appbaseio/reactivesearch/lib/components/basic/ReactiveBase");

      /***/
    },

    /***/ "@appbaseio/reactivesearch/lib/components/basic/SelectedFilters": /***/ function(
      module,
      exports
    ) {
      module.exports = require("@appbaseio/reactivesearch/lib/components/basic/SelectedFilters");

      /***/
    },

    /***/ "@appbaseio/reactivesearch/lib/components/basic/TagCloud": /***/ function(
      module,
      exports
    ) {
      module.exports = require("@appbaseio/reactivesearch/lib/components/basic/TagCloud");

      /***/
    },

    /***/ "@appbaseio/reactivesearch/lib/components/date/DateRange": /***/ function(
      module,
      exports
    ) {
      module.exports = require("@appbaseio/reactivesearch/lib/components/date/DateRange");

      /***/
    },

    /***/ "@appbaseio/reactivesearch/lib/components/list/MultiDataList": /***/ function(
      module,
      exports
    ) {
      module.exports = require("@appbaseio/reactivesearch/lib/components/list/MultiDataList");

      /***/
    },

    /***/ "@appbaseio/reactivesearch/lib/components/list/MultiList": /***/ function(
      module,
      exports
    ) {
      module.exports = require("@appbaseio/reactivesearch/lib/components/list/MultiList");

      /***/
    },

    /***/ "@appbaseio/reactivesearch/lib/components/range/RangeSlider": /***/ function(
      module,
      exports
    ) {
      module.exports = require("@appbaseio/reactivesearch/lib/components/range/RangeSlider");

      /***/
    },

    /***/ "@appbaseio/reactivesearch/lib/components/range/SingleRange": /***/ function(
      module,
      exports
    ) {
      module.exports = require("@appbaseio/reactivesearch/lib/components/range/SingleRange");

      /***/
    },

    /***/ "@appbaseio/reactivesearch/lib/components/result/ResultCard": /***/ function(
      module,
      exports
    ) {
      module.exports = require("@appbaseio/reactivesearch/lib/components/result/ResultCard");

      /***/
    },

    /***/ "@appbaseio/reactivesearch/lib/components/search/DataSearch": /***/ function(
      module,
      exports
    ) {
      module.exports = require("@appbaseio/reactivesearch/lib/components/search/DataSearch");

      /***/
    },

    /***/ "@appbaseio/reactivesearch/lib/server": /***/ function(
      module,
      exports
    ) {
      module.exports = require("@appbaseio/reactivesearch/lib/server");

      /***/
    },

    /***/ "babel-runtime/regenerator": /***/ function(module, exports) {
      module.exports = require("babel-runtime/regenerator");

      /***/
    },

    /***/ react: /***/ function(module, exports) {
      module.exports = require("react");

      /***/
    }

    /******/
  }
);
//# sourceMappingURL=index.js.map
