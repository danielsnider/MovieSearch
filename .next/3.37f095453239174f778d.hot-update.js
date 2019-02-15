webpackHotUpdate(3, {
  /***/ "./pages/index.jsx": /***/ function(
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* WEBPACK VAR INJECTION */ (function(module) {
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(
        "./node_modules/babel-runtime/regenerator/index.js"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(
        "./node_modules/react/cjs/react.development.js"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_1_react__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_basic_ReactiveBase__ = __webpack_require__(
        "./node_modules/@appbaseio/reactivesearch/lib/components/basic/ReactiveBase.js"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_basic_ReactiveBase___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_basic_ReactiveBase__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_basic_TagCloud__ = __webpack_require__(
        "./node_modules/@appbaseio/reactivesearch/lib/components/basic/TagCloud.js"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_basic_TagCloud___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_3__appbaseio_reactivesearch_lib_components_basic_TagCloud__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_basic_SelectedFilters__ = __webpack_require__(
        "./node_modules/@appbaseio/reactivesearch/lib/components/basic/SelectedFilters.js"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_basic_SelectedFilters___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_basic_SelectedFilters__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appbaseio_reactivesearch_lib_components_result_ResultCard__ = __webpack_require__(
        "./node_modules/@appbaseio/reactivesearch/lib/components/result/ResultCard.js"
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
        "./node_modules/@appbaseio/reactivesearch/lib/server/index.js"
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

      (function() {
        var enterModule = __webpack_require__(
          "./node_modules/react-hot-loader/index.js"
        ).enterModule;

        enterModule && enterModule(module);
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
        // CALL APi
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
                      lineNumber: 248
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_basic_ReactiveBase___default.a,
                    _extends({}, components.settings, {
                      initialState: this.props.store,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 249
                      }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_6__Navbar_js__[
                        "a" /* default */
                      ],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 250
                        }
                      }
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      "div",
                      {
                        className: "sub-container",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 252
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
                            lineNumber: 253
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
                            lineNumber: 255
                          }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_4__appbaseio_reactivesearch_lib_components_basic_SelectedFilters___default.a,
                          _extends({}, components.selectedFilters, {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 262
                            }
                          })
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_5__appbaseio_reactivesearch_lib_components_result_ResultCard___default.a,
                          _extends({}, components.resultCard, {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 264
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
                            lineNumber: 269
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
                          lineNumber: 277
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "div",
                        {
                          className: "filter-heading center",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 278
                          }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          "b",
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 279
                            }
                          },
                          " ",
                          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "i",
                            {
                              className: "fa fa-cloud",
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 281
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
                            lineNumber: 285
                          }
                        })
                      )
                    )
                  )
                );
              }
            },
            {
              key: "__reactstandin__regenerateByEval",
              value: function __reactstandin__regenerateByEval(key, code) {
                this[key] = eval(code);
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

      var _default = Main;

      /* harmony default export */ __webpack_exports__["default"] = _default;

      // console.log(document.getElementById('root'))

      (function() {
        var reactHotLoader = __webpack_require__(
          "./node_modules/react-hot-loader/index.js"
        ).default;

        var leaveModule = __webpack_require__(
          "./node_modules/react-hot-loader/index.js"
        ).leaveModule;

        if (!reactHotLoader) {
          return;
        }

        reactHotLoader.register(
          components,
          "components",
          "/home/dan/MovieSearch/pages/index.jsx"
        );
        reactHotLoader.register(
          AddToCollection,
          "AddToCollection",
          "/home/dan/MovieSearch/pages/index.jsx"
        );
        reactHotLoader.register(
          Main,
          "Main",
          "/home/dan/MovieSearch/pages/index.jsx"
        );
        reactHotLoader.register(
          _default,
          "default",
          "/home/dan/MovieSearch/pages/index.jsx"
        );
        leaveModule(module);
      })();

      (function(Component, route) {
        if (!Component) return;
        if (false) return;
        module.hot.accept();
        Component.__route = route;

        if (module.hot.status() === "idle") return;

        var components = next.router.components;
        for (var r in components) {
          if (!components.hasOwnProperty(r)) continue;

          if (components[r].Component.__route === route) {
            next.router.update(r, Component);
          }
        }
      })(
        typeof __webpack_exports__ !== "undefined"
          ? __webpack_exports__.default
          : module.exports.default || module.exports,
        "/index.jsx"
      );

      /* WEBPACK VAR INJECTION */
    }.call(
      __webpack_exports__,
      __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(
        module
      )
    ));

    /***/
  }
});
//# sourceMappingURL=3.37f095453239174f778d.hot-update.js.map
