(this["webpackJsonphealthcare-transformers"] = this["webpackJsonphealthcare-transformers"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_Headline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Headline */ "./src/components/Headline.js");
/* harmony import */ var _components_LatestArticle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/LatestArticle */ "./src/components/LatestArticle.js");
/* harmony import */ var _components_CategorisedArticles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/CategorisedArticles */ "./src/components/CategorisedArticles.js");
/* harmony import */ var _components_PopularArticles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/PopularArticles */ "./src/components/PopularArticles.js");
/* harmony import */ var _components_HomeNewsletter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/HomeNewsletter */ "./src/components/HomeNewsletter.js");
/* harmony import */ var _components_HomeAboutUs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/HomeAboutUs */ "./src/components/HomeAboutUs.js");
/* harmony import */ var _components_SectionHeading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/SectionHeading */ "./src/components/SectionHeading.js");
/* harmony import */ var _components_CategoryArticles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/CategoryArticles */ "./src/components/CategoryArticles.js");
/* harmony import */ var _components_ResourceCenterArticles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ResourceCenterArticles */ "./src/components/ResourceCenterArticles.js");
/* harmony import */ var _components_AuthorList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/AuthorList */ "./src/components/AuthorList.js");
/* harmony import */ var _components_AuthorHeading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/AuthorHeading */ "./src/components/AuthorHeading.js");
/* harmony import */ var _components_LatestArticles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/LatestArticles */ "./src/components/LatestArticles.js");
/* harmony import */ var _components_AboutUsContent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/AboutUsContent */ "./src/components/AboutUsContent.js");
/* harmony import */ var _components_UpcomingEvents__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/UpcomingEvents */ "./src/components/UpcomingEvents.js");
/* harmony import */ var _components_PastEvents__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/PastEvents */ "./src/components/PastEvents.js");
/* harmony import */ var _components_EventDetail__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/EventDetail */ "./src/components/EventDetail.js");
/* harmony import */ var _components_TrainingDetail__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/TrainingDetail */ "./src/components/TrainingDetail.js");
/* harmony import */ var _components_LatestTrainings__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/LatestTrainings */ "./src/components/LatestTrainings.js");
/* harmony import */ var _components_SearchResults__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/SearchResults */ "./src/components/SearchResults.js");
/* harmony import */ var _components_PageContent__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/PageContent */ "./src/components/PageContent.js");
/* harmony import */ var _components_PostContent__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/PostContent */ "./src/components/PostContent.js");
/* harmony import */ var _components_ThankYouPage__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/ThankYouPage */ "./src/components/ThankYouPage.js");
/* harmony import */ var _components_NotFound__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/NotFound */ "./src/components/NotFound.js");
/* harmony import */ var _components_BreadcrumbOnly__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/BreadcrumbOnly */ "./src/components/BreadcrumbOnly.js");
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\App.js";




























const jsonData = window.frontend.pageJson;
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }, Object.keys(jsonData.blocks).map((block, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, (() => {
      switch (block) {
        case 'Header':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: jsonData.blocks.Header,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 20
            }
          });
        case 'Headline':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Headline__WEBPACK_IMPORTED_MODULE_4__["default"], {
            data: jsonData.blocks.Headline,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 20
            }
          });
        case 'LatestArticle':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LatestArticle__WEBPACK_IMPORTED_MODULE_5__["default"], {
            data: jsonData.blocks.LatestArticle,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 20
            }
          });
        case 'CategorisedArticles':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CategorisedArticles__WEBPACK_IMPORTED_MODULE_6__["default"], {
            data: jsonData.blocks.CategorisedArticles.filteredArticles,
            orangeBg: jsonData.blocks.CategorisedArticles.orangeBg,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 20
            }
          });
        case 'PopularArticles':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PopularArticles__WEBPACK_IMPORTED_MODULE_7__["default"], {
            data: jsonData.blocks.PopularArticles,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 20
            }
          });
        case 'HomeNewsletter':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomeNewsletter__WEBPACK_IMPORTED_MODULE_8__["default"], {
            data: jsonData.blocks.HomeNewsletter,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 20
            }
          });
        case 'HomeAboutUs':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomeAboutUs__WEBPACK_IMPORTED_MODULE_9__["default"], {
            data: jsonData.blocks.HomeAboutUs,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 20
            }
          });
        case 'SectionHeading':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SectionHeading__WEBPACK_IMPORTED_MODULE_10__["default"], {
            data: jsonData.blocks.SectionHeading,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 20
            }
          });
        case 'CategoryArticles':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CategoryArticles__WEBPACK_IMPORTED_MODULE_11__["default"], {
            data: jsonData.blocks.CategoryArticles,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 20
            }
          });
        case 'ResourceCenterArticles':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ResourceCenterArticles__WEBPACK_IMPORTED_MODULE_12__["default"], {
            data: jsonData.blocks.ResourceCenterArticles,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 20
            }
          });
        case 'BreadcrumbOnly':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BreadcrumbOnly__WEBPACK_IMPORTED_MODULE_27__["default"], {
            data: jsonData.blocks.BreadcrumbOnly,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 20
            }
          });
        case 'AuthorList':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AuthorList__WEBPACK_IMPORTED_MODULE_13__["default"], {
            data: jsonData.blocks.AuthorList,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 20
            }
          });
        case 'AuthorHeading':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AuthorHeading__WEBPACK_IMPORTED_MODULE_14__["default"], {
            data: jsonData.blocks.AuthorHeading,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 20
            }
          });
        case 'AuthorArticles':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LatestArticles__WEBPACK_IMPORTED_MODULE_15__["default"], {
            data: jsonData.blocks.AuthorArticles,
            smallTitle: "Articles",
            title: "Author's latest publications",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 20
            }
          });
        case 'AboutUsContent':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AboutUsContent__WEBPACK_IMPORTED_MODULE_16__["default"], {
            data: jsonData.blocks.AboutUsContent,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 20
            }
          });
        case 'UpcomingEvents':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UpcomingEvents__WEBPACK_IMPORTED_MODULE_17__["default"], {
            data: jsonData.blocks.UpcomingEvents,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 20
            }
          });
        case 'PastEvents':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PastEvents__WEBPACK_IMPORTED_MODULE_18__["default"], {
            data: jsonData.blocks.PastEvents,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 20
            }
          });
        case 'EventDetail':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EventDetail__WEBPACK_IMPORTED_MODULE_19__["default"], {
            data: jsonData.blocks.EventDetail,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 20
            }
          });
        case 'TrainingDetail':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TrainingDetail__WEBPACK_IMPORTED_MODULE_20__["default"], {
            data: jsonData.blocks.TrainingDetail,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 20
            }
          });
        case 'LatestTrainings':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LatestTrainings__WEBPACK_IMPORTED_MODULE_21__["default"], {
            data: jsonData.blocks.LatestTrainings,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 20
            }
          });
        case 'SearchResults':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchResults__WEBPACK_IMPORTED_MODULE_22__["default"], {
            data: jsonData.blocks.SearchResults,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 20
            }
          });
        case 'PageContent':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageContent__WEBPACK_IMPORTED_MODULE_23__["default"], {
            data: jsonData.blocks.PageContent,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 20
            }
          });
        case 'PostContent':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PostContent__WEBPACK_IMPORTED_MODULE_24__["default"], {
            data: jsonData.blocks.PostContent,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 20
            }
          });
        case 'ThankYouPage':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ThankYouPage__WEBPACK_IMPORTED_MODULE_25__["default"], {
            data: jsonData.blocks.ThankYouPage,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 20
            }
          });
        case 'Footer':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
            data: jsonData.blocks.Footer,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 20
            }
          });
        case 'NotFound':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NotFound__WEBPACK_IMPORTED_MODULE_26__["default"], {
            data: jsonData.blocks.NotFound,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 20
            }
          });
        default:
          return;
      }
    })());
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/AboutUsContent.js":
/*!******************************************!*\
  !*** ./src/components/AboutUsContent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_AboutUs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/AboutUs.scss */ "./src/css/AboutUs.scss");
/* harmony import */ var _css_AboutUs_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_AboutUs_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MostPopular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MostPopular */ "./src/components/MostPopular.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content */ "./src/components/Content.js");
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\AboutUsContent.js";




function AboutUsContent({
  data
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "Aboutus-main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    html: data.content.top_area,
    rootClass: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 8
    }
  }), data.content.bottom_box_area && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "innertext",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    html: data.content.bottom_box_area,
    rootClass: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 10
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 6
    }
  }, data.popularPosts && data.popularPosts.posts && data.popularPosts.posts.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MostPopular__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data.popularPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 8
    }
  })))));
}
/* harmony default export */ __webpack_exports__["default"] = (AboutUsContent);

/***/ }),

/***/ "./src/components/AuthorHeading.js":
/*!*****************************************!*\
  !*** ./src/components/AuthorHeading.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_AuthorDetailsBanner_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/AuthorDetailsBanner.scss */ "./src/css/AuthorDetailsBanner.scss");
/* harmony import */ var _css_AuthorDetailsBanner_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_AuthorDetailsBanner_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Breadcrumbs */ "./src/components/Breadcrumbs.js");
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\AuthorHeading.js";



function AuthorHeading({
  data
}) {
  var _data$author, _data$author$images;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "author-details-banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }
  }, data.breadcrumb && data.breadcrumb.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: data.breadcrumb,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 58
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 8
    }
  }, data.author.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, data.author.authorDegree && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, data.author.authorDegree, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 39
    }
  })), data.author.authorProfession)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 10
    }
  }, data.author.title, " ", data.author.authorDescription)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: data === null || data === void 0 ? void 0 : (_data$author = data.author) === null || _data$author === void 0 ? void 0 : (_data$author$images = _data$author.images) === null || _data$author$images === void 0 ? void 0 : _data$author$images['472x265'],
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 10
    }
  }))))))));
}
/* harmony default export */ __webpack_exports__["default"] = (AuthorHeading);

/***/ }),

/***/ "./src/components/AuthorList.js":
/*!**************************************!*\
  !*** ./src/components/AuthorList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_AuthorList_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/AuthorList.scss */ "./src/css/AuthorList.scss");
/* harmony import */ var _css_AuthorList_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_AuthorList_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_author_blank_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/author_blank.png */ "./src/images/author_blank.png");
/* harmony import */ var _images_author_blank_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_author_blank_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\AuthorList.js";



const changeViewChars = (isPrev, alphabets, activeChar, setActiveChar, viewChars, setViewChars) => e => {
  e.preventDefault();
  if (isPrev && viewChars[0] === 'A' || !isPrev && viewChars[0] === 'V') {
    return;
  }
  let currentStartIndex = alphabets.indexOf(viewChars[0]);
  let newStartIndex = isPrev ? currentStartIndex - 1 : currentStartIndex + 1;
  let newChars = alphabets.slice(newStartIndex, newStartIndex + 5);
  setViewChars(newChars);
  if (activeChar !== null && !newChars.includes(activeChar)) {
    setActiveChar(isPrev ? newChars[4] : newChars[0]);
  }
};
const charClicked = (viewChar, setActiveChar) => e => {
  e.preventDefault();
  setActiveChar(viewChar);
};
const toggleAll = (activeChar, setActiveChar, viewChars) => e => {
  if (e.target.checked) {
    activeChar = null;
  } else {
    activeChar = viewChars[0];
  }
  setActiveChar(activeChar);
};
const paginate = (page, viewAuthors, setPaginated) => e => {
  e.preventDefault();
  setPaginated(calculatePagination(viewAuthors, page));
};
const calculatePagination = (viewAuthors, currentPage = 1) => {
  let perPage = 6;
  let totalPages = Math.ceil(viewAuthors.length / perPage);
  currentPage = currentPage > totalPages ? totalPages : currentPage;
  currentPage = currentPage < 1 ? 1 : currentPage;
  let startIndex = (currentPage - 1) * perPage;
  return {
    items: viewAuthors.slice(startIndex, startIndex + perPage),
    page: currentPage,
    totalPages: totalPages
  };
};
function AuthorList({
  data
}) {
  const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const authors = data.authors;
  const [viewAuthors, setViewAuthors] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(authors);
  const [paginated, setPaginated] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(calculatePagination(viewAuthors));
  const [viewChars, setViewChars] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(alphabets.slice(0, 5));
  const [activeChar, setActiveChar] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    let viewAuthors = authors;
    if (activeChar !== null) {
      viewAuthors = authors.filter(author => author.title.replace(/Prof. |Dr. /g, '').charAt(0) === activeChar);
    }
    setViewAuthors(viewAuthors);
    setPaginated(calculatePagination(viewAuthors));
  }, [activeChar, authors]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "author-list-wrap padding-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-wrap align-items-center mb-104",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "pagrination",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${window.location.href}#`,
    className: `${viewChars[0] === 'A' ? 'disabled' : ''}`,
    onClick: changeViewChars(true, alphabets, activeChar, setActiveChar, viewChars, setViewChars),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M8.28789 12.0007L14.2979 18.0107L15.7129 16.5967L11.1129 11.9967L15.7129 7.40374L14.2989 5.98974L8.28789 12.0007Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 12
    }
  })))), viewChars.map(viewChar => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: `${viewChar === activeChar ? "active" : ""}`,
    key: viewChar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${window.location.href}#`,
    onClick: charClicked(viewChar, setActiveChar),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, viewChar))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${window.location.href}#`,
    className: `${viewChars[0] === 'V' ? 'disabled' : ''}`,
    onClick: changeViewChars(false, alphabets, activeChar, setActiveChar, viewChars, setViewChars),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.7131 12.0002L9.70309 5.99023L8.28809 7.40423L12.8881 12.0042L8.28809 16.5972L9.70209 18.0112L15.7131 12.0002Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 12
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "all-author-checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-control custom-checkbox ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    className: "custom-control-input",
    checked: activeChar === null,
    onChange: toggleAll(activeChar, setActiveChar, viewChars),
    id: "check2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 58
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "custom-control-label",
    htmlFor: "check2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 216
    }
  }, "All"))))), paginated.items.length > 0 && paginated.items.map(author => {
    var _author$images;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-6 col-lg-4",
      key: author.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "author-list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "author-list-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: author.url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: (author === null || author === void 0 ? void 0 : (_author$images = author.images) === null || _author$images === void 0 ? void 0 : _author$images['472x265']) ? author.images['472x265'] : _images_author_blank_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: author.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 10
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 10
      }
    }, author.authorProfession), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: author.url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 31
      }
    }, author.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "rightarrowlink",
      href: author.url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      width: "24",
      height: "32",
      viewBox: "0 0 24 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 12
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4 16.9998H16.17L11.17 21.9998L12.59 23.4098L20 15.9998L12.59 8.58984L11.17 9.99984L16.17 14.9998H4V16.9998Z",
      fill: "#0B41CD",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 10
      }
    }, author.authorDescription.slice(0, 100), "..."))));
  }), paginated.items.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, "No Author found."), paginated.totalPages > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-center align-items-center pt-52",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "pagrination",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${window.location.href}#`,
    className: `${paginated.page === 1 ? 'disabled' : ''}`,
    onClick: paginate(paginated.page - 1, viewAuthors, setPaginated),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M8.28789 12.0007L14.2979 18.0107L15.7129 16.5967L11.1129 11.9967L15.7129 7.40374L14.2989 5.98974L8.28789 12.0007Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }, paginated.page, " / ", paginated.totalPages)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${window.location.href}#`,
    className: `${paginated.page === paginated.totalPages ? 'disabled' : ''}`,
    onClick: paginate(paginated.page + 1, viewAuthors, setPaginated),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.7131 12.0002L9.70309 5.99023L8.28809 7.40423L12.8881 12.0042L8.28809 16.5972L9.70209 18.0112L15.7131 12.0002Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }))))))))));
}
/* harmony default export */ __webpack_exports__["default"] = (AuthorList);

/***/ }),

/***/ "./src/components/AuthorSlide.js":
/*!***************************************!*\
  !*** ./src/components/AuthorSlide.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_HomeAboutUs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/HomeAboutUs.scss */ "./src/css/HomeAboutUs.scss");
/* harmony import */ var _css_HomeAboutUs_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_HomeAboutUs_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\AuthorSlide.js";


const paginate = (items, newIndex, setActiveIndex, setActiveItem) => e => {
  e.preventDefault();
  if (!items[newIndex]) {
    return;
  }
  setActiveIndex(newIndex);
  setActiveItem(items[newIndex]);
};
function AuthorSlide({
  items
}) {
  var _activeItem$images, _activeItem$images2;
  const [activeIndex, setActiveIndex] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [activeItem, setActiveItem] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(items[activeIndex]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "padding-2 alt-color twocoltext",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "Author")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-lg-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "author-slide-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: (activeItem === null || activeItem === void 0 ? void 0 : (_activeItem$images = activeItem.images) === null || _activeItem$images === void 0 ? void 0 : _activeItem$images['724x407']) ? activeItem === null || activeItem === void 0 ? void 0 : (_activeItem$images2 = activeItem.images) === null || _activeItem$images2 === void 0 ? void 0 : _activeItem$images2['724x407'] : '',
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 45
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-lg-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text pt-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, activeItem === null || activeItem === void 0 ? void 0 : activeItem.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, (activeItem === null || activeItem === void 0 ? void 0 : activeItem.authorDegree) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 19
    }
  }, activeItem.authorDegree, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 47
    }
  })), activeItem === null || activeItem === void 0 ? void 0 : activeItem.authorProfession), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mh-inharite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, activeItem === null || activeItem === void 0 ? void 0 : activeItem.title, " ", activeItem.authorDescription.slice(0, 250), "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: activeItem.url,
    className: "btn-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, "Learn more"))), items.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-center align-items-center ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "pagrination",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${window.location.href}#`,
    className: `${activeIndex === 0 ? 'disabled' : ''}`,
    onClick: paginate(items, activeIndex - 1, setActiveIndex, setActiveItem),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M8.28789 12.0007L14.2979 18.0107L15.7129 16.5967L11.1129 11.9967L15.7129 7.40374L14.2989 5.98974L8.28789 12.0007Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, activeIndex + 1, " / ", items.length)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${window.location.href}#`,
    className: `${activeIndex === items.length - 1 ? 'disabled' : ''}`,
    onClick: paginate(items, activeIndex + 1, setActiveIndex, setActiveItem),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.7131 12.0002L9.70309 5.99023L8.28809 7.40423L12.8881 12.0042L8.28809 16.5972L9.70209 18.0112L15.7131 12.0002Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }))))))))));
}
/* harmony default export */ __webpack_exports__["default"] = (AuthorSlide);

/***/ }),

/***/ "./src/components/BreadcrumbOnly.js":
/*!******************************************!*\
  !*** ./src/components/BreadcrumbOnly.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Breadcrumbs */ "./src/components/Breadcrumbs.js");
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\BreadcrumbOnly.js";


function BreadcrumbOnly({
  data
}) {
  if (data.breadcrumb && data.breadcrumb.length > 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container breadcrumbs-full-line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__["default"], {
      items: data.breadcrumb,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }))));
  }
  return false;
}
/* harmony default export */ __webpack_exports__["default"] = (BreadcrumbOnly);

/***/ }),

/***/ "./src/components/Breadcrumbs.js":
/*!***************************************!*\
  !*** ./src/components/Breadcrumbs.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_Breadcrumbs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/Breadcrumbs.scss */ "./src/css/Breadcrumbs.scss");
/* harmony import */ var _css_Breadcrumbs_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_Breadcrumbs_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\Breadcrumbs.js";


function breadcrumbs({
  items
}) {
  return items && items.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "breadcrumbs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, items.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, item.url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: item.url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 18
    }
  }, item.title) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 56
    }
  }, item.title)))));
}
/* harmony default export */ __webpack_exports__["default"] = (breadcrumbs);

/***/ }),

/***/ "./src/components/CategorisedArticles.js":
/*!***********************************************!*\
  !*** ./src/components/CategorisedArticles.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_custom_scrollbars_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-custom-scrollbars-2 */ "./node_modules/react-custom-scrollbars-2/lib/index.js");
/* harmony import */ var react_custom_scrollbars_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SingleArticleList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleArticleList */ "./src/components/SingleArticleList.js");
/* harmony import */ var _css_ArticleListFilter_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/ArticleListFilter.scss */ "./src/css/ArticleListFilter.scss");
/* harmony import */ var _css_ArticleListFilter_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_ArticleListFilter_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\CategorisedArticles.js";




const groupClicked = (group, setActiveGroup, setPagination) => e => {
  e.preventDefault();
  setActiveGroup(group);
  setPagination(calculatePagination(group));
};
const paginate = (page, activeGroup, setPagination) => e => {
  e.preventDefault();
  setPagination(calculatePagination(activeGroup, page));
};
const calculatePagination = (activeGroup, currentPage = 1) => {
  let perPage = 4;
  if (window.innerWidth < 768) {
    perPage = 1;
  } else if (window.innerWidth < 992) {
    perPage = 2;
  } else if (window.innerWidth < 1200) {
    perPage = 3;
  }
  let totalPages = Math.ceil(activeGroup.posts.length / perPage);
  currentPage = currentPage > totalPages ? totalPages : currentPage;
  currentPage = currentPage < 1 ? 1 : currentPage;
  let startIndex = (currentPage - 1) * perPage;
  return {
    items: activeGroup.posts.slice(startIndex, startIndex + perPage),
    page: currentPage,
    totalPages: totalPages
  };
};
function CategorisedArticles({
  data,
  orangeBg,
  trainingSeriesContent = false
}) {
  const [activeGroup, setActiveGroup] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data[0]);
  const [pagination, setPagination] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(calculatePagination(activeGroup));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function handleResize() {
      setPagination(calculatePagination(activeGroup));
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeGroup]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: `padding-1 ${orangeBg ? 'alt-color' : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 6
    }
  }, !orangeBg && !trainingSeriesContent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "More-articles-of",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 8
    }
  }, "More articles of"), trainingSeriesContent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, "Related content"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spacer-56",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  })), !trainingSeriesContent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "article-list-filter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars_2__WEBPACK_IMPORTED_MODULE_1__["Scrollbars"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 10
    }
  }, data.map(group => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: `${group.id === activeGroup.id ? "active" : ""}`,
    key: group.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${window.location.href}#`,
    onClick: groupClicked(group, setActiveGroup, setPagination),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, group.title))))))), pagination.items.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, "No articles found."), pagination.items.map((post, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-lg-4 col-xl-3",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SingleArticleList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: post,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 8
    }
  }))), pagination.totalPages > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-center align-items-center pt-52",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "pagrination",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${window.location.href}#`,
    className: `${pagination.page === 1 ? 'disabled' : ''}`,
    onClick: paginate(pagination.page - 1, activeGroup, setPagination),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M8.28789 12.0007L14.2979 18.0107L15.7129 16.5967L11.1129 11.9967L15.7129 7.40374L14.2989 5.98974L8.28789 12.0007Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, pagination.page, " / ", pagination.totalPages)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${window.location.href}#`,
    className: `${pagination.page === pagination.totalPages ? 'disabled' : ''}`,
    onClick: paginate(pagination.page + 1, activeGroup, setPagination),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.7131 12.0002L9.70309 5.99023L8.28809 7.40423L12.8881 12.0042L8.28809 16.5972L9.70209 18.0112L15.7131 12.0002Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }))))))))));
}
/* harmony default export */ __webpack_exports__["default"] = (CategorisedArticles);

/***/ }),

/***/ "./src/components/CategoryArticles.js":
/*!********************************************!*\
  !*** ./src/components/CategoryArticles.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_custom_scrollbars_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-custom-scrollbars-2 */ "./node_modules/react-custom-scrollbars-2/lib/index.js");
/* harmony import */ var react_custom_scrollbars_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_ArticleListFilter_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/ArticleListFilter.scss */ "./src/css/ArticleListFilter.scss");
/* harmony import */ var _css_ArticleListFilter_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_ArticleListFilter_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SingleArticleList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SingleArticleList */ "./src/components/SingleArticleList.js");
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\CategoryArticles.js";




const groupClicked = (group, setActiveGroup) => e => {
  e.preventDefault();
  setActiveGroup(group);
};
const loadMoreArticles = (ajaxUrl, activeGroup, groupCategories, setGroupCategories, setActiveGroup, isLoading, setIsLoading) => async e => {
  e.preventDefault();
  if (isLoading) {
    return;
  }
  setIsLoading(true);
  const groupCategoryIndex = groupCategories.findIndex(obj => obj.id === activeGroup.id);
  try {
    const nextPage = activeGroup.lastPage + 1;
    const response = await fetch(`${ajaxUrl}?action=loadMorePosts&category=${activeGroup.id}&page=${nextPage}&perPage=${activeGroup.perPage}`);
    const responseJson = await response.json();
    const updatedGroupCategories = groupCategories.map(obj => {
      if (obj.id === activeGroup.id) {
        obj.posts = obj.posts.concat(responseJson.posts);
        obj.foundPosts = responseJson.foundPosts;
        obj.lastPage = nextPage;
        return obj;
      }
      return obj;
    });
    setGroupCategories(updatedGroupCategories);
    setActiveGroup(updatedGroupCategories[groupCategoryIndex]);
  } catch (error) {}
  setIsLoading(false);
};
function CategoryArticles({
  data
}) {
  var _groupCategories$acti;
  const [groupCategories, setGroupCategories] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data.categories);
  const activeGroupIndex = groupCategories.findIndex(obj => obj.id === data.selectedCategoryId);
  const [activeGroup, setActiveGroup] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])((_groupCategories$acti = groupCategories[activeGroupIndex]) !== null && _groupCategories$acti !== void 0 ? _groupCategories$acti : groupCategories[0]);
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "article-list-main padding-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, data.heading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 8
    }
  }, data.heading)), groupCategories && groupCategories.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "article-list-filter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars_2__WEBPACK_IMPORTED_MODULE_1__["Scrollbars"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 10
    }
  }, groupCategories.map(group => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: `${group.id === activeGroup.id ? "active" : ""}`,
    key: group.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${window.location.href}#`,
    onClick: groupClicked(group, setActiveGroup),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, group.title))))))), activeGroup.posts.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, "No articles found."), activeGroup.posts.map((post, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-lg-4 col-xl-3",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SingleArticleList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: post,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 8
    }
  }))), activeGroup.posts.length < activeGroup.foundPosts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${window.location.href}#`,
    className: `btn-main min-width ${isLoading ? 'btn-disabled' : ''}`,
    onClick: loadMoreArticles(data.ajaxUrl, activeGroup, groupCategories, setGroupCategories, setActiveGroup, isLoading, setIsLoading),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 8
    }
  }, "View more ", '  ', isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "spinner-border spinner-border-sm",
    role: "status",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 23
    }
  }))))));
}
/* harmony default export */ __webpack_exports__["default"] = (CategoryArticles);

/***/ }),

/***/ "./src/components/Content.js":
/*!***********************************!*\
  !*** ./src/components/Content.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _css_Terms_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/Terms.scss */ "./src/css/Terms.scss");
/* harmony import */ var _css_Terms_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Terms_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_Article_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/Article.scss */ "./src/css/Article.scss");
/* harmony import */ var _css_Article_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_Article_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_InlineBanner_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/InlineBanner.scss */ "./src/css/InlineBanner.scss");
/* harmony import */ var _css_InlineBanner_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_InlineBanner_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_InlineBanner2_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/InlineBanner2.scss */ "./src/css/InlineBanner2.scss");
/* harmony import */ var _css_InlineBanner2_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_InlineBanner2_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\Content.js";






function appendScript(settings, baseUrl, setScriptLoaded) {
  if (window.MktoForms2) return setScriptLoaded(true);
  const script = document.createElement("script");
  script.src = `//${baseUrl}/js/forms2/js/forms2.min.js`;
  const script2 = document.createElement("script");
  script2.src = `//${settings.baseUrl}/rs/${settings.marketoCode}/images/ReCAPTCHAv3.js`;
  document.body.appendChild(script);
  script.onload = () => window.MktoForms2 ? document.body.appendChild(script2) : null;
  script2.onload = () => window.MktoForms2 ? setScriptLoaded(true) : null;
}
function Content({
  html,
  rootClass
}) {
  const firstRenderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const [scriptLoaded, setScriptLoaded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (firstRenderRef.current && scriptLoaded) {
      firstRenderRef.current = false;
      try {
        const mktFormsEls = document.querySelectorAll('[id^="mktoForm_"]');
        let formIdsList = [];
        mktFormsEls.forEach((node, i) => {
          const isAlreadyLoaded = node.getAttribute('loaded');
          node.setAttribute('loaded', true);
          const elId = node.getAttribute('id');
          const elIdParts = elId.split('_');
          if (formIdsList.indexOf(elIdParts[1]) === -1) {
            formIdsList.push(elIdParts[1]);
            if (!isAlreadyLoaded && elIdParts.length === 2) {
              /* isAlreadyLoaded is to prevent double loading */
              if (elIdParts[0] === 'mktoForm' && elIdParts[1].length > 0) {
                const formId = elIdParts[1];
                const ctaWrapperEl = node.closest('.cta-modal-wrapper');
                let accessUrl = null;
                let accessPostType = null;
                let accessPostId = null;
                let ajaxUrl = null;
                let queryParameter = null;
                if (ctaWrapperEl) {
                  const accessNode = ctaWrapperEl.querySelector(`[ht-access-formid^="${formId}"]`);
                  if (accessNode) {
                    accessPostType = accessNode.getAttribute('ht-access-postType');
                    accessPostId = accessNode.getAttribute('ht-access-postId');
                    ajaxUrl = accessNode.getAttribute('ht-access-ajaxUrl');
                    accessUrl = accessNode.getAttribute('ht-access');
                  }
                }
                window.MktoForms2.whenReady(function (mktoForm) {
                  mktoForm.addHiddenFields({
                    FormSubmissionID: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])()
                  });
                });
                window.MktoForms2.loadForm(`//${window.marketoSettings.baseUrl}`, window.marketoSettings.marketoCode, formId, function (form) {
                  form.onSuccess(function (values, followUpUrl) {
                    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined' && typeof window.gtag === 'function') {
                      if (formId === '5853') {
                        window.lintrk('track', {
                          conversion_id: 11721004
                        });
                      }
                      if (formId === '5846') {
                        window.gtag('event', 'newsletter_subscribe', {});
                      } else {
                        window.gtag('event', 'form_submit', {});
                      }
                      window.dataLayer.push({
                        'formid': values.formVid
                      });
                      window.dataLayer.push({
                        'page_url': window.location.href
                      });
                    }
                    if (values && values.FormSubmissionID) {
                      queryParameter = '?FormSubmissionID=' + values.FormSubmissionID + '&formId=' + formId;
                    }
                    if (accessUrl) {
                      window.open(accessUrl + queryParameter, "_blank") || window.location.replace(accessUrl + queryParameter);
                    }
                    if (accessPostType && accessPostId && ajaxUrl && accessPostType === 'ht-training') {
                      (async () => {
                        await fetch(`${ajaxUrl}?action=trainingAttendeesFormSubmitted&trainingId=${accessPostId}`);
                      })();
                    }
                    if (ctaWrapperEl) {
                      const ctaFormEl = ctaWrapperEl.querySelector('.cta-form');
                      if (ctaFormEl) {
                        ctaFormEl.style.display = 'none';
                      }
                      const ctaThankEl = ctaWrapperEl.querySelector('.cta-thank-you');
                      if (ctaThankEl) {
                        ctaThankEl.style.display = 'block';
                      }
                    } else {
                      if (followUpUrl) {
                        window.location.href = followUpUrl + queryParameter;
                      } else {
                        window.location.href = `${window.frontend.homeUrl}/thank-you/${queryParameter}`;
                      }
                    }
                    return false;
                  });
                });
              }
            }
          }
        });
      } catch (e) {}
    }
    appendScript(window.marketoSettings, window.marketoSettings.baseUrl, setScriptLoaded);
  }, [scriptLoaded, html]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: rootClass,
    dangerouslySetInnerHTML: {
      __html: html
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 3
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./src/components/EventDetail.js":
/*!***************************************!*\
  !*** ./src/components/EventDetail.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_Event_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/Event.scss */ "./src/css/Event.scss");
/* harmony import */ var _css_Event_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_Event_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Breadcrumbs */ "./src/components/Breadcrumbs.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content */ "./src/components/Content.js");
/* harmony import */ var _MostPopular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MostPopular */ "./src/components/MostPopular.js");
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\EventDetail.js";





function EventDetail({
  data
}) {
  var _data$event, _data$event$images, _data$event2, _data$event2$images, _data$event3, _data$event3$registra, _data$event4, _data$event4$registra, _data$event5, _data$event5$registra, _data$event6, _data$event6$registra, _data$event7, _data$event7$registra, _data$event8, _data$event8$registra;
  //console.log(data.upcomingEvents)
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: `${data.event.past ? 'event-main past-event-data' : 'event-main'}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "features-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: ((_data$event = data.event) === null || _data$event === void 0 ? void 0 : (_data$event$images = _data$event.images) === null || _data$event$images === void 0 ? void 0 : _data$event$images['1440x450']) ? (_data$event2 = data.event) === null || _data$event2 === void 0 ? void 0 : (_data$event2$images = _data$event2.images) === null || _data$event2$images === void 0 ? void 0 : _data$event2$images['1440x450'] : '',
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spacer-56",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 6
    }
  }, data.breadcrumb && data.breadcrumb.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 57
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: data.breadcrumb,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 81
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `${data.event.past ? 'col-12 col-md-8' : 'col-12 col-md-8'}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post-meta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, data.event.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, data.event.headline, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 12
    }
  }, data.event.eventDate, " ", data.event.eventTime ? ` | ${data.event.eventTime}` : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "big-text",
    dangerouslySetInnerHTML: {
      __html: data.event.description
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  })), data.event.agenda && data.event.agenda.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accordion",
    id: "accordionExample",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "headingOne",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn-collapse collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapseOne",
    "aria-expanded": "true",
    "aria-controls": "collapseOne",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 14
    }
  }, "Agenda")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "collapseOne",
    className: "collapse",
    "aria-labelledby": "headingOne",
    "data-parent": "#accordionExample",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text big-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 14
    }
  }, data.event.agenda.map((agendaItem, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 16
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("big", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, agendaItem.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: agendaItem.description
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }))))))), data.event.authors && data.event.authors.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Host-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, data.event.authors.map((author, index) => {
    var _author$wpAuthor$imag, _author$wpAuthor$imag2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 14
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: author.wpAuthor.url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: ((_author$wpAuthor$imag = author.wpAuthor.images) === null || _author$wpAuthor$imag === void 0 ? void 0 : _author$wpAuthor$imag['472x265']) ? (_author$wpAuthor$imag2 = author.wpAuthor.images) === null || _author$wpAuthor$imag2 === void 0 ? void 0 : _author$wpAuthor$imag2['472x265'] : '',
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 16
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-9",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 14
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "host-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 16
      }
    }, author.role), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: author.wpAuthor.url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, author.wpAuthor.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: author.wpAuthor.url,
      className: "arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 18
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M2.586 13L17.172 13L11.879 18.293L13.293 19.707L21 12L13.293 4.29303L11.879 5.70703L17.172 11L2.586 11L2.586 13Z",
      fill: "#0B41CD",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 19
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 16
      }
    }, author.wpAuthor.authorProfession, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 51
      }
    }), author.wpAuthor.authorDescription.slice(0, 20), "..."))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "host-spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 10
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 8
    }
  }, ((data === null || data === void 0 ? void 0 : (_data$event3 = data.event) === null || _data$event3 === void 0 ? void 0 : (_data$event3$registra = _data$event3.registration) === null || _data$event3$registra === void 0 ? void 0 : _data$event3$registra.title) || (data === null || data === void 0 ? void 0 : (_data$event4 = data.event) === null || _data$event4 === void 0 ? void 0 : (_data$event4$registra = _data$event4.registration) === null || _data$event4$registra === void 0 ? void 0 : _data$event4$registra.description) || (data === null || data === void 0 ? void 0 : (_data$event5 = data.event) === null || _data$event5 === void 0 ? void 0 : (_data$event5$registra = _data$event5.registration) === null || _data$event5$registra === void 0 ? void 0 : _data$event5$registra.marketo_form_id)) && data.event.past === false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "registration-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 12
    }
  }, data === null || data === void 0 ? void 0 : (_data$event6 = data.event) === null || _data$event6 === void 0 ? void 0 : (_data$event6$registra = _data$event6.registration) === null || _data$event6$registra === void 0 ? void 0 : _data$event6$registra.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 12
    }
  }, data === null || data === void 0 ? void 0 : (_data$event7 = data.event) === null || _data$event7 === void 0 ? void 0 : (_data$event7$registra = _data$event7.registration) === null || _data$event7$registra === void 0 ? void 0 : _data$event7$registra.description), (data === null || data === void 0 ? void 0 : (_data$event8 = data.event) === null || _data$event8 === void 0 ? void 0 : (_data$event8$registra = _data$event8.registration) === null || _data$event8$registra === void 0 ? void 0 : _data$event8$registra.marketo_form_id) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    html: `<form id="mktoForm_${data.event.registration.marketo_form_id}"></form>`,
    rootClass: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  })), data.upcomingEvents && data.upcomingEvents.posts && data.upcomingEvents.posts.length > 0 && false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MostPopular__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data.upcomingEvents,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  })))))));
}
/* harmony default export */ __webpack_exports__["default"] = (EventDetail);

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_Footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/Footer.scss */ "./src/css/Footer.scss");
/* harmony import */ var _css_Footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_Footer_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\Footer.js";


const getHrefUrl = link => {
  return link === '#' ? `${window.location.href}#` : link;
};
const socialIcons = {
  linkedin: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M19.3 4H4.7C4.3 4 4 4.3 4 4.7V19.4C4 19.7 4.3 20 4.7 20H19.4C19.8 20 20.1 19.7 20.1 19.3V4.7C20 4.3 19.7 4 19.3 4ZM8.7 17.6H6.4V10H8.8V17.6H8.7ZM7.6 9C6.8 9 6.2 8.3 6.2 7.6C6.2 6.8 6.8 6.2 7.6 6.2C8.4 6.2 9 6.8 9 7.6C8.9 8.3 8.3 9 7.6 9ZM17.6 17.6H15.2V13.9C15.2 13 15.2 11.9 14 11.9C12.8 11.9 12.6 12.9 12.6 13.9V17.7H10.2V10H12.5V11C12.8 10.4 13.6 9.8 14.7 9.8C17.1 9.8 17.5 11.4 17.5 13.4V17.6H17.6Z",
    className: "svgfillsocial",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 109
    }
  }), " "),
  facebook: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10.0229 20L10 13H7V10H10V8C10 5.3008 11.6715 4 14.0794 4C15.2328 4 16.2241 4.08587 16.5129 4.12425V6.94507L14.843 6.94583C13.5334 6.94583 13.2799 7.5681 13.2799 8.48124V10H17L16 13H13.2799V20H10.0229Z",
    className: "svgfillsocial",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 109
    }
  }), " "),
  twitter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 12
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M20 7C19.4 7.3 18.8 7.4 18.1 7.5C18.8 7.1 19.3 6.5 19.5 5.7C18.9 6.1 18.2 6.3 17.4 6.5C16.8 5.9 15.9 5.5 15 5.5C13.3 5.5 11.8 7 11.8 8.8C11.8 9.1 11.8 9.3 11.9 9.5C9.2 9.4 6.7 8.1 5.1 6.1C4.8 6.6 4.7 7.1 4.7 7.8C4.7 8.9 5.3 9.9 6.2 10.5C5.7 10.5 5.2 10.3 4.7 10.1C4.7 11.7 5.8 13 7.3 13.3C7 13.4 6.7 13.4 6.4 13.4C6.2 13.4 6 13.4 5.8 13.3C6.2 14.6 7.4 15.6 8.9 15.6C7.8 16.5 6.4 17 4.8 17C4.5 17 4.3 17 4 17C5.5 17.9 7.2 18.5 9 18.5C15 18.5 18.3 13.5 18.3 9.2C18.3 9.1 18.3 8.9 18.3 8.8C19 8.3 19.6 7.7 20 7Z",
    className: "svgfillsocial",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 108
    }
  }), " "),
  instagram: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 14
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 5.441C14.136 5.441 14.389 5.45 15.233 5.488C15.7402 5.49409 16.2425 5.58746 16.718 5.764C17.0658 5.89248 17.3802 6.09754 17.638 6.364C17.9045 6.62179 18.1095 6.93622 18.238 7.284C18.4145 7.75949 18.5079 8.26183 18.514 8.769C18.552 9.613 18.561 9.869 18.561 12.002C18.561 14.135 18.552 14.391 18.514 15.235C18.5079 15.7422 18.4145 16.2445 18.238 16.72C18.1052 17.0651 17.9015 17.3785 17.64 17.64C17.3785 17.9015 17.0651 18.1052 16.72 18.238C16.2445 18.4145 15.7422 18.5079 15.235 18.514C14.391 18.552 14.135 18.561 12.002 18.561C9.869 18.561 9.613 18.552 8.769 18.514C8.26183 18.5079 7.75949 18.4145 7.284 18.238C6.93622 18.1095 6.62179 17.9045 6.364 17.638C6.09754 17.3802 5.89248 17.0658 5.764 16.718C5.58746 16.2425 5.49409 15.7402 5.488 15.233C5.45 14.389 5.441 14.133 5.441 12C5.441 9.867 5.45 9.611 5.488 8.767C5.49409 8.25983 5.58746 7.75749 5.764 7.282C5.89248 6.93422 6.09754 6.61979 6.364 6.362C6.62179 6.09554 6.93622 5.89048 7.284 5.762C7.75949 5.58546 8.26183 5.49209 8.769 5.486C9.613 5.448 9.869 5.439 12.002 5.439L12 5.441ZM12 4C9.827 4 9.555 4.009 8.7 4.048C8.03696 4.06148 7.381 4.18727 6.76 4.42C6.22596 4.62056 5.74231 4.9356 5.343 5.343C4.9356 5.74231 4.62056 6.22596 4.42 6.76C4.18727 7.381 4.06148 8.03696 4.048 8.7C4.009 9.555 4 9.827 4 12C4 14.173 4.009 14.445 4.048 15.3C4.06148 15.963 4.18727 16.619 4.42 17.24C4.62056 17.774 4.9356 18.2577 5.343 18.657C5.74231 19.0644 6.22596 19.3794 6.76 19.58C7.38163 19.813 8.03828 19.9387 8.702 19.952C9.555 19.991 9.827 20 12 20C14.173 20 14.445 19.991 15.3 19.952C15.9637 19.9387 16.6204 19.813 17.242 19.58C17.7734 19.3743 18.256 19.0599 18.659 18.657C19.0619 18.254 19.3763 17.7714 19.582 17.24C19.815 16.6184 19.9407 15.9617 19.954 15.298C19.993 14.445 20.002 14.173 20.002 11.998C20.002 9.823 19.993 9.553 19.954 8.698C19.9397 8.03552 19.8132 7.38025 19.58 6.76C19.3794 6.22596 19.0644 5.74231 18.657 5.343C18.2577 4.9356 17.774 4.62056 17.24 4.42C16.619 4.18727 15.963 4.06148 15.3 4.048C14.445 4.009 14.173 4 12 4ZM12 7.892C11.1875 7.892 10.3933 8.13293 9.71772 8.58432C9.04216 9.03571 8.51563 9.6773 8.2047 10.4279C7.89378 11.1786 7.81243 12.0046 7.97093 12.8014C8.12944 13.5983 8.52069 14.3303 9.09521 14.9048C9.66972 15.4793 10.4017 15.8706 11.1986 16.0291C11.9954 16.1876 12.8214 16.1062 13.5721 15.7953C14.3227 15.4844 14.9643 14.9578 15.4157 14.2823C15.8671 13.6067 16.108 12.8125 16.108 12C16.108 11.4605 16.0017 10.9263 15.7953 10.4279C15.5889 9.92953 15.2863 9.47667 14.9048 9.0952C14.5233 8.71374 14.0705 8.41115 13.5721 8.2047C13.0737 7.99825 12.5395 7.892 12 7.892ZM12 14.667C11.4725 14.667 10.9569 14.5106 10.5183 14.2175C10.0797 13.9245 9.73787 13.5079 9.53601 13.0206C9.33415 12.5333 9.28134 11.997 9.38425 11.4797C9.48715 10.9623 9.74116 10.4871 10.1141 10.1141C10.4871 9.74116 10.9623 9.48715 11.4797 9.38424C11.997 9.28134 12.5333 9.33415 13.0206 9.53601C13.5079 9.73787 13.9245 10.0797 14.2175 10.5183C14.5106 10.9569 14.667 11.4725 14.667 12C14.667 12.7073 14.386 13.3857 13.8859 13.8859C13.3857 14.386 12.7073 14.667 12 14.667ZM17.23 7.73C17.23 8.26019 16.8002 8.69 16.27 8.69C15.7398 8.69 15.31 8.26019 15.31 7.73C15.31 7.1998 15.7398 6.77 16.27 6.77C16.8002 6.77 17.23 7.1998 17.23 7.73Z",
    className: "svgfillsocial",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 110
    }
  }), " "),
  youtube: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 12
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M20.85 8.7C20.85 8.7 20.7 7.425 20.1 6.9C19.425 6.15 18.675 6.15 18.3 6.15C15.75 6 12 6 12 6C12 6 8.25 6 5.7 6.15C5.325 6.225 4.575 6.225 3.9 6.9C3.375 7.425 3.15 8.7 3.15 8.7C3.15 8.7 3 10.125 3 11.625V12.975C3 14.4 3.15 15.9 3.15 15.9C3.15 15.9 3.3 17.175 3.9 17.7C4.575 18.45 5.475 18.375 5.85 18.45C7.275 18.6 12 18.6 12 18.6C12 18.6 15.75 18.6 18.3 18.375C18.675 18.3 19.425 18.3 20.1 17.625C20.625 17.1 20.85 15.825 20.85 15.825C20.85 15.825 21 14.4 21 12.9V11.55C21 10.125 20.85 8.7 20.85 8.7ZM10.125 14.625V9.6L15 12.15L10.125 14.625Z",
    className: "svgfillsocial",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 108
    }
  }), " ")
};
/*console.log(socialIcons)
let socialIcons1 = [...socialIcons]
console.log(socialIcons1.linkedin)*/
/*const socialIcons = [
	{key: 'linkedin', value: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.3 4H4.7C4.3 4 4 4.3 4 4.7V19.4C4 19.7 4.3 20 4.7 20H19.4C19.8 20 20.1 19.7 20.1 19.3V4.7C20 4.3 19.7 4 19.3 4ZM8.7 17.6H6.4V10H8.8V17.6H8.7ZM7.6 9C6.8 9 6.2 8.3 6.2 7.6C6.2 6.8 6.8 6.2 7.6 6.2C8.4 6.2 9 6.8 9 7.6C8.9 8.3 8.3 9 7.6 9ZM17.6 17.6H15.2V13.9C15.2 13 15.2 11.9 14 11.9C12.8 11.9 12.6 12.9 12.6 13.9V17.7H10.2V10H12.5V11C12.8 10.4 13.6 9.8 14.7 9.8C17.1 9.8 17.5 11.4 17.5 13.4V17.6H17.6Z" className="svgfillsocial" /> </svg>'},
];*/

/*var socialIconsObj = socialIcons.reduce(
	(obj, item) => Object.assign(obj, { [item.key]: item.value }), {});*/

//console.log({socialIcons[linkedin]})

function Footer({
  data
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://diagnostics.roche.com/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: data.column4.logo ? data.column4.logo : 'src',
    alt: data.siteTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 65
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  }, data.column1.links.map((linkItem, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `${index === 0 ? "footer-subscribe" : "footer-contact-menu"}`,
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: getHrefUrl(linkItem.link.url),
    target: linkItem.link.target,
    dangerouslySetInnerHTML: {
      __html: linkItem.link.title
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 8
    }
  }, data.column2.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 8
    }
  }, data.column2.links.map((linkItem, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: getHrefUrl(linkItem.link.url),
    target: linkItem.link.target,
    dangerouslySetInnerHTML: {
      __html: linkItem.link.title
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 8
    }
  }, data.column3.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 8
    }
  }, data.column3.links.map((linkItem, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: getHrefUrl(linkItem.link.url),
    target: linkItem.link.target,
    dangerouslySetInnerHTML: {
      __html: linkItem.link.title
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row footer-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "social-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 8
    }
  }, data.bottom.social.map((socialItem, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, socialItem.icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: getHrefUrl(socialItem.url),
    className: "socail-svg",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 12
    }
  }, socialIcons[socialItem.icon])))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-main-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 8
    }
  }, data.bottom.menu.map((linkItem, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: getHrefUrl(linkItem.link.url),
    target: linkItem.link.target,
    dangerouslySetInnerHTML: {
      __html: linkItem.link.title
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }))), data.bottom.show_cookie_preference_link && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "javascript:void(0)",
    target: "",
    className: "ot-sdk-show-settings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 12
    }
  }, "Cookie Preference")), data.bottom.us_supplemental_privacy_policy && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: getHrefUrl(data.bottom.us_supplemental_privacy_policy.url),
    target: data.bottom.us_supplemental_privacy_policy.target,
    dangerouslySetInnerHTML: {
      __html: data.bottom.us_supplemental_privacy_policy.title
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "copyright-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, data.bottom.copyright)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, data.bottom.description)))));
}
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_Header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/Header.scss */ "./src/css/Header.scss");
/* harmony import */ var _css_Header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_Header_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavbarItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavbarItems */ "./src/components/NavbarItems.js");
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\Header.js";



const searchClicked = setSearchOpen => e => {
  e.preventDefault();
  setSearchOpen(true);
};
const searchCloseClicked = setSearchOpen => e => {
  setSearchOpen(false);
};
const body = document.body;
const scrollUp = "scrollup";
const pFixed = "p-fixed";
const scrollDown = "scrolldown";
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    return;
  }
  if (currentScroll > lastScroll && currentScroll > 60) {
    body.classList.remove(scrollUp);
  } else if (currentScroll < lastScroll) {
    body.classList.add(scrollDown);
    body.classList.add(pFixed);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});
function Header({
  data
}) {
  const [searchOpen, setSearchOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar navbar-expand-md d-block p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: data.homeUrl,
    className: "navbar-brand",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: data.logo ? data.logo : '',
    alt: data.siteTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 55
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navright ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 8
    }
  }, data.smallMenu.map((smallMenuItem, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mobile-hide",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: smallMenuItem.link.url,
    target: smallMenuItem.link.target,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, smallMenuItem.link.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "navsaprator mobile-hide",
    key: data.smallMenu.length,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: `search-input ${searchOpen ? 'show' : ''}`,
    key: data.smallMenu.length + 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "iconhover",
    href: `${window.location.href}#`,
    onClick: searchClicked(setSearchOpen),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z",
    className: "iconfill",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 1
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-open",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    method: "GET",
    action: data.homeUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "s",
    type: "text",
    placeholder: "Enter your search term",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 52
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: searchCloseClicked(setSearchOpen),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.974 5.436L18.565 4.026L12 10.59L5.411 4L4 5.41L10.59 12L4 18.59L5.411 20L12 13.41L18.59 20L20 18.59L13.411 12L19.974 5.436Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: data.smallMenu.length + 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "navbar-toggler collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#MenuMain",
    "aria-controls": "MenuMain",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navbar-toggler-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
    menuData: data.menu,
    homeUrl: data.homeUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 6
    }
  }))));
}
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Headline.js":
/*!************************************!*\
  !*** ./src/components/Headline.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_Headline_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/Headline.scss */ "./src/css/Headline.scss");
/* harmony import */ var _css_Headline_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_Headline_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\Headline.js";


function scrollToNextEl(e) {
  e.preventDefault();
  const latestArticleSectionEl = document.getElementById('latest-article');
  if (latestArticleSectionEl) {
    latestArticleSectionEl.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
function Headline({
  data
}) {
  var _data$acf, _data$acf2, _data$acf3;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "homebanner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "display-small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 8
    }
  }, data === null || data === void 0 ? void 0 : (_data$acf = data.acf) === null || _data$acf === void 0 ? void 0 : _data$acf.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 8
    }
  }, data === null || data === void 0 ? void 0 : (_data$acf2 = data.acf) === null || _data$acf2 === void 0 ? void 0 : _data$acf2.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "scroll-down",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${window.location.href}#`,
    onClick: scrollToNextEl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 8
    }
  }, data === null || data === void 0 ? void 0 : (_data$acf3 = data.acf) === null || _data$acf3 === void 0 ? void 0 : _data$acf3.scroll_to_down_title))))));
}
/* harmony default export */ __webpack_exports__["default"] = (Headline);

/***/ }),

/***/ "./src/components/HomeAboutUs.js":
/*!***************************************!*\
  !*** ./src/components/HomeAboutUs.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_HomeAboutUs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/HomeAboutUs.scss */ "./src/css/HomeAboutUs.scss");
/* harmony import */ var _css_HomeAboutUs_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_HomeAboutUs_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\HomeAboutUs.js";


function HomeAboutUs({
  data
}) {
  var _data$acf, _data$acf$left_block;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "padding-2 twocoltext",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-lg-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 6
    }
  }, (data === null || data === void 0 ? void 0 : (_data$acf = data.acf) === null || _data$acf === void 0 ? void 0 : (_data$acf$left_block = _data$acf.left_block) === null || _data$acf$left_block === void 0 ? void 0 : _data$acf$left_block.imageSrc) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: data.acf.left_block.imageSrc,
    alt: "img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 44
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-lg-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, data.acf.right_block.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 40
    }
  }, data.acf.right_block.title), data.acf.right_block.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 46
    }
  }, data.acf.right_block.description), data.acf.right_block.button && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: data.acf.right_block.button.url,
    target: data.acf.right_block.button.target,
    className: "btn-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 41
    }
  }, data.acf.right_block.button.title))))));
}
/* harmony default export */ __webpack_exports__["default"] = (HomeAboutUs);

/***/ }),

/***/ "./src/components/HomeNewsletter.js":
/*!******************************************!*\
  !*** ./src/components/HomeNewsletter.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_SubscribeHome_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/SubscribeHome.scss */ "./src/css/SubscribeHome.scss");
/* harmony import */ var _css_SubscribeHome_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_SubscribeHome_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content */ "./src/components/Content.js");
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\HomeNewsletter.js";



function HomeNewsletter({
  data
}) {
  var _data$acf, _data$acf$left_block, _data$acf2, _data$acf2$left_block, _data$acf3, _data$acf3$left_block, _data$acf4, _data$acf4$left_block, _data$acf5, _data$acf5$right_bloc;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "padding-1 gr-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "homesubscribe-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 8
    }
  }, data === null || data === void 0 ? void 0 : (_data$acf = data.acf) === null || _data$acf === void 0 ? void 0 : (_data$acf$left_block = _data$acf.left_block) === null || _data$acf$left_block === void 0 ? void 0 : _data$acf$left_block.title), (data === null || data === void 0 ? void 0 : (_data$acf2 = data.acf) === null || _data$acf2 === void 0 ? void 0 : (_data$acf2$left_block = _data$acf2.left_block) === null || _data$acf2$left_block === void 0 ? void 0 : _data$acf2$left_block.description_lines) && (data === null || data === void 0 ? void 0 : (_data$acf3 = data.acf) === null || _data$acf3 === void 0 ? void 0 : (_data$acf3$left_block = _data$acf3.left_block) === null || _data$acf3$left_block === void 0 ? void 0 : _data$acf3$left_block.description_lines.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, data === null || data === void 0 ? void 0 : (_data$acf4 = data.acf) === null || _data$acf4 === void 0 ? void 0 : (_data$acf4$left_block = _data$acf4.left_block) === null || _data$acf4$left_block === void 0 ? void 0 : _data$acf4$left_block.description_lines.map((description_line, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, description_line === null || description_line === void 0 ? void 0 : description_line.description))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 6
    }
  }, (data === null || data === void 0 ? void 0 : (_data$acf5 = data.acf) === null || _data$acf5 === void 0 ? void 0 : (_data$acf5$right_bloc = _data$acf5.right_block) === null || _data$acf5$right_bloc === void 0 ? void 0 : _data$acf5$right_bloc.marketo_form_id) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    html: `<form id="mktoForm_${data.acf.right_block.marketo_form_id}"></form>`,
    rootClass: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 8
    }
  })))));
}
/* harmony default export */ __webpack_exports__["default"] = (HomeNewsletter);

/***/ }),

/***/ "./src/components/LatestArticle.js":
/*!*****************************************!*\
  !*** ./src/components/LatestArticle.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_FeaturedArticle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/FeaturedArticle.scss */ "./src/css/FeaturedArticle.scss");
/* harmony import */ var _css_FeaturedArticle_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_FeaturedArticle_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_art_main_blank_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/art-main-blank.png */ "./src/images/art-main-blank.png");
/* harmony import */ var _images_art_main_blank_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_art_main_blank_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\LatestArticle.js";



function LatestArticle({
  data
}) {
  var _data$images, _data$authors;
  if (!data) {
    return;
  }
  const imageUrl = (data === null || data === void 0 ? void 0 : (_data$images = data.images) === null || _data$images === void 0 ? void 0 : _data$images['1440x616']) ? data.images['1440x616'] : _images_art_main_blank_png__WEBPACK_IMPORTED_MODULE_2___default.a;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "latest-article",
    className: "features-article",
    style: {
      backgroundImage: `url(${imageUrl})`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: data.url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "texttitile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "article-meta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, data === null || data === void 0 ? void 0 : (_data$authors = data.authors) === null || _data$authors === void 0 ? void 0 : _data$authors.map(item => item.title).join(', '), " | ", data.publishedDate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn-main readmore",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 10
    }
  }, "Read more")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imageUrl,
    alt: data.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 10
    }
  }))))))));
}
/* harmony default export */ __webpack_exports__["default"] = (LatestArticle);

/***/ }),

/***/ "./src/components/LatestArticles.js":
/*!******************************************!*\
  !*** ./src/components/LatestArticles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleArticleList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleArticleList */ "./src/components/SingleArticleList.js");
/* harmony import */ var _css_AuthorPublications_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/AuthorPublications.scss */ "./src/css/AuthorPublications.scss");
/* harmony import */ var _css_AuthorPublications_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_AuthorPublications_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\LatestArticles.js";



const paginate = (page, posts, setPagination) => e => {
  e.preventDefault();
  setPagination(calculatePagination(posts, page));
};
const calculatePagination = (posts, currentPage = 1) => {
  let perPage = 4;
  if (window.innerWidth < 768) {
    perPage = 1;
  } else if (window.innerWidth < 992) {
    perPage = 2;
  } else if (window.innerWidth < 1200) {
    perPage = 3;
  }
  let totalPages = Math.ceil(posts.length / perPage);
  currentPage = currentPage > totalPages ? totalPages : currentPage;
  currentPage = currentPage < 1 ? 1 : currentPage;
  let startIndex = (currentPage - 1) * perPage;
  return {
    items: posts.slice(startIndex, startIndex + perPage),
    page: currentPage,
    totalPages: totalPages
  };
};
function LatestArticles({
  data,
  smallTitle,
  title
}) {
  const [pagination, setPagination] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(calculatePagination(data.filteredItems.posts));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function handleResize() {
      setPagination(calculatePagination(data.filteredItems.posts));
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [data]);
  if (data.filteredItems.posts.length === 0) {
    return;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "authorpublications padding-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 6
    }
  }, smallTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "More-articles-of",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 22
    }
  }, "Articles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, title)), pagination.items.map((post, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-lg-4 col-xl-3",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SingleArticleList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: post,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 8
    }
  }))), pagination.totalPages > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-center align-items-center pt-52",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "pagrination",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${window.location.href}#`,
    className: `${pagination.page === 1 ? 'disabled' : ''}`,
    onClick: paginate(pagination.page - 1, data.filteredItems.posts, setPagination),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M8.28789 12.0007L14.2979 18.0107L15.7129 16.5967L11.1129 11.9967L15.7129 7.40374L14.2989 5.98974L8.28789 12.0007Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, pagination.page, " / ", pagination.totalPages)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${window.location.href}#`,
    className: `${pagination.page === pagination.totalPages ? 'disabled' : ''}`,
    onClick: paginate(pagination.page + 1, data.filteredItems.posts, setPagination),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.7131 12.0002L9.70309 5.99023L8.28809 7.40423L12.8881 12.0042L8.28809 16.5972L9.70209 18.0112L15.7131 12.0002Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }))))))))));
}
/* harmony default export */ __webpack_exports__["default"] = (LatestArticles);

/***/ }),

/***/ "./src/components/LatestTrainings.js":
/*!*******************************************!*\
  !*** ./src/components/LatestTrainings.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_PastEvents_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/PastEvents.scss */ "./src/css/PastEvents.scss");
/* harmony import */ var _css_PastEvents_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_PastEvents_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_photo1_blank_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/photo1-blank.png */ "./src/images/photo1-blank.png");
/* harmony import */ var _images_photo1_blank_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_photo1_blank_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\LatestTrainings.js";



const loadMoreTrainings = (ajaxUrl, trainings, setTrainings, isLoading, setIsLoading) => async e => {
  e.preventDefault();
  if (isLoading) {
    return;
  }
  setIsLoading(true);
  try {
    const nextPage = trainings.lastPage + 1;
    const response = await fetch(`${ajaxUrl}?action=loadMoreTrainings&page=${nextPage}&perPage=${trainings.perPage}`);
    const responseJson = await response.json();
    setTrainings({
      posts: trainings.posts.concat(responseJson.posts),
      foundPosts: responseJson.foundPosts,
      lastPage: responseJson.lastPage,
      perPage: responseJson.perPage
    });
  } catch (error) {}
  setIsLoading(false);
};
function LatestTrainings({
  data
}) {
  const [trainings, setTrainings] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data.latestTrainings);
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return trainings.posts.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "part-events",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, data.sectionTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, trainings.posts.map(event => {
    var _event$images, _event$authors;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-6 col-lg-3",
      key: event.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: event.url,
      className: "past-thumb",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: (event === null || event === void 0 ? void 0 : (_event$images = event.images) === null || _event$images === void 0 ? void 0 : _event$images['288x162']) ? event.images['288x162'] : _images_photo1_blank_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: event.url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 12
      }
    }, event.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: event.url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 12
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M2.586 13L17.172 13L11.879 18.293L13.293 19.707L21 12L13.293 4.29303L11.879 5.70703L17.172 11L2.586 11L2.586 13Z",
      fill: "#0B41CD",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 14
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    }, event === null || event === void 0 ? void 0 : (_event$authors = event.authors) === null || _event$authors === void 0 ? void 0 : _event$authors.map(item => item.wpAuthor.title).join(', '))));
  }))), trainings.posts.length < trainings.foundPosts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${window.location.href}#`,
    className: `btn-main min-width ${isLoading ? 'btn-disabled' : ''}`,
    onClick: loadMoreTrainings(data.ajaxUrl, trainings, setTrainings, isLoading, setIsLoading),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 8
    }
  }, "View more ", '  ', isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "spinner-border spinner-border-sm",
    role: "status",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 23
    }
  }))))));
}
/* harmony default export */ __webpack_exports__["default"] = (LatestTrainings);

/***/ }),

/***/ "./src/components/MostPopular.js":
/*!***************************************!*\
  !*** ./src/components/MostPopular.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_MostPopular_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/MostPopular.scss */ "./src/css/MostPopular.scss");
/* harmony import */ var _css_MostPopular_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_MostPopular_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\MostPopular.js";


function MostPopular({
  data
}) {
  if (data.posts.length === 0) {
    return;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "most-popular-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, "Most popular"), data.posts.map(post => {
    var _post$images;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "popular-article",
      key: post.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: post.url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 6
      }
    }, (post === null || post === void 0 ? void 0 : (_post$images = post.images) === null || _post$images === void 0 ? void 0 : _post$images['288x162']) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: post.images['288x162'],
      alt: "thumb",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 37
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }, post.title)));
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (MostPopular);

/***/ }),

/***/ "./src/components/NavbarItems.js":
/*!***************************************!*\
  !*** ./src/components/NavbarItems.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\NavbarItems.js";

const getHrefUrl = link => {
  return link === '#' ? `${window.location.href}#` : link;
};
const toggleMenu = (key, menu, setMenu) => e => {
  e.preventDefault();
  let currentState = menu[key].isOpen || false;
  let menu1 = [...menu];
  menu1[key].isOpen = !currentState;
  setMenu(menu1);
};
const toggleLevel1Menu = (level0Index, key, menu, setMenu) => e => {
  e.preventDefault();
  let currentState = menu[level0Index].submenu_level_1[key].isOpen || false;
  let menu1 = [...menu];
  menu[level0Index].submenu_level_1[key].isOpen = !currentState;
  setMenu(menu1);
};
function NavbarItems(props) {
  const {
    menuData,
    homeUrl
  } = props;
  const [menu, setMenu] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(menuData);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "collapse navbar-collapse",
    id: "MenuMain",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar-nav w-100 Mobile-hide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }
  }, menu.map((menuItem, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 6
    }
  }, menuItem.prepend_line_seperator && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-spartor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 8
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: `nav-item ${menuItem.isOpen ? 'open-menu' : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, menuItem.has_submenu && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link",
    href: getHrefUrl(menuItem.nav_menu_link.url),
    onClick: toggleMenu(index, menu, setMenu),
    target: menuItem.nav_menu_link.target,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, menuItem.nav_menu_link.title, menuItem.has_submenu && menuItem.submenu_level_1.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mobile-arrow1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "25",
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12.0017 16.2121L18.0117 10.2021L16.5977 8.78711L11.9977 13.3871L7.40472 8.78711L5.99072 10.2011L12.0017 16.2121Z",
    fill: "#544F4F",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 12
    }
  })))), !menuItem.has_submenu && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link",
    href: getHrefUrl(menuItem.nav_menu_link.url),
    target: menuItem.nav_menu_link.target,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, menuItem.nav_menu_link.title), menuItem.has_submenu && menuItem.submenu_level_1.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "submenu no-show-mobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: getHrefUrl(menuItem.nav_menu_link.url),
    target: menuItem.nav_menu_link.target,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, menuItem.nav_menu_link.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: `menu-lavel-1`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 10
    }
  }, menuItem.submenu_level_1.map((level1Item, level1Index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: `menu-lavel-li-1 ${level1Item.has_submenu && level1Item.submenu_level_2.length ? "has-submenu" : ""} ${level1Item.isOpen ? 'open-menu' : ''} `,
    key: level1Index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: getHrefUrl(level1Item.nav_menu_link.url),
    target: level1Item.nav_menu_link.target,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, level1Item.nav_menu_link.title, level1Item.has_submenu && level1Item.submenu_level_2.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mobile-arrow1",
    onClick: toggleLevel1Menu(index, level1Index, menu, setMenu),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "19",
    height: "16",
    viewBox: "0 0 19 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0.586001 9.00003L15.172 9.00003L9.879 14.293L11.293 15.707L19 8.00003L11.293 0.29303L9.879 1.70703L15.172 7.00003L0.586001 7.00003L0.586001 9.00003Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 1
    }
  })))), level1Item.has_submenu && level1Item.submenu_level_2.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: `menu-lavel-2 ${level1Item.rightBorder ? "" : "no-border"}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 14
    }
  }, level1Item.submenu_level_2.map((level2Item, level2Index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: `menu-lavel-li-2 ${level2Item.has_submenu && level2Item.submenu_level_3.length ? "has-submenu" : ""}`,
    key: level2Index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 16
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: getHrefUrl(level2Item.nav_menu_link.url),
    target: level2Item.nav_menu_link.target,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, level2Item.nav_menu_link.title), level2Item.has_submenu && level2Item.submenu_level_3.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "menu-lavel-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 18
    }
  }, level2Item.submenu_level_3.map((level3Item, level3Index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "menu-lavel-li-3",
    key: level3Index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: getHrefUrl(level3Item.nav_menu_link.url),
    target: level3Item.nav_menu_link.target,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }, level3Item.nav_menu_link.title))))))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mobile-spartor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item mobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${homeUrl}/newsletter`,
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 6
    }
  }, "Subscribe")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item mobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${homeUrl}/about-us`,
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 6
    }
  }, "About us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mobile-spartor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item mobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${homeUrl}/?s=`,
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 6
    }
  }, "Search"))));
}
/* harmony default export */ __webpack_exports__["default"] = (NavbarItems);

/***/ }),

/***/ "./src/components/NotFound.js":
/*!************************************!*\
  !*** ./src/components/NotFound.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\NotFound.js";

function NotFound({
  data
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "content-main 404-not-found",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, data.description)))));
}
/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./src/components/PageContent.js":
/*!***************************************!*\
  !*** ./src/components/PageContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content */ "./src/components/Content.js");
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\PageContent.js";


function PageContent({
  data
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "content-main article-main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_1__["default"], {
    html: data.html,
    rootClass: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  })))));
}
/* harmony default export */ __webpack_exports__["default"] = (PageContent);

/***/ }),

/***/ "./src/components/PastEvents.js":
/*!**************************************!*\
  !*** ./src/components/PastEvents.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_PastEvents_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/PastEvents.scss */ "./src/css/PastEvents.scss");
/* harmony import */ var _css_PastEvents_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_PastEvents_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_photo1_blank_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/photo1-blank.png */ "./src/images/photo1-blank.png");
/* harmony import */ var _images_photo1_blank_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_photo1_blank_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\PastEvents.js";



const loadMoreEvents = (ajaxUrl, pastEvents, setPastEvents, isLoading, setIsLoading) => async e => {
  e.preventDefault();
  if (isLoading) {
    return;
  }
  setIsLoading(true);
  try {
    const nextPage = pastEvents.lastPage + 1;
    const response = await fetch(`${ajaxUrl}?action=loadMorePastEvents&page=${nextPage}&perPage=${pastEvents.perPage}`);
    const responseJson = await response.json();
    setPastEvents({
      posts: pastEvents.posts.concat(responseJson.posts),
      foundPosts: responseJson.foundPosts,
      lastPage: responseJson.lastPage,
      perPage: responseJson.perPage
    });
  } catch (error) {}
  setIsLoading(false);
};
function PastEvents({
  data
}) {
  const [pastEvents, setPastEvents] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data.pastEvents);
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return pastEvents.posts.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "part-events",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, data.sectionTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, pastEvents.posts.map(event => {
    var _event$images, _event$authors;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-6 col-lg-3",
      key: event.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: event.url,
      className: "past-thumb",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: (event === null || event === void 0 ? void 0 : (_event$images = event.images) === null || _event$images === void 0 ? void 0 : _event$images['288x162']) ? event.images['288x162'] : _images_photo1_blank_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: event.url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 12
      }
    }, event.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: event.url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 12
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M2.586 13L17.172 13L11.879 18.293L13.293 19.707L21 12L13.293 4.29303L11.879 5.70703L17.172 11L2.586 11L2.586 13Z",
      fill: "#0B41CD",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 14
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    }, event === null || event === void 0 ? void 0 : (_event$authors = event.authors) === null || _event$authors === void 0 ? void 0 : _event$authors.map(item => item.wpAuthor.title).join(', '))));
  }))), pastEvents.posts.length < pastEvents.foundPosts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${window.location.href}#`,
    className: `btn-main min-width ${isLoading ? 'btn-disabled' : ''}`,
    onClick: loadMoreEvents(data.ajaxUrl, pastEvents, setPastEvents, isLoading, setIsLoading),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 8
    }
  }, "View more ", '  ', isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "spinner-border spinner-border-sm",
    role: "status",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 23
    }
  }))))));
}
/* harmony default export */ __webpack_exports__["default"] = (PastEvents);

/***/ }),

/***/ "./src/components/PopularArticleList.js":
/*!**********************************************!*\
  !*** ./src/components/PopularArticleList.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_MorePopularList_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/MorePopularList.scss */ "./src/css/MorePopularList.scss");
/* harmony import */ var _css_MorePopularList_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_MorePopularList_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\PopularArticleList.js";


function PopularArticleList({
  data
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "most-Popular-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "catwrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, data.categories.map((category, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: category.url,
    className: "articletitlecategory",
    key: category.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 6
    }
  }, category.title, index < data.categories.length - 1 ? ', ' : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: data.url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: data.url,
    className: "arrow1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "19",
    height: "16",
    viewBox: "0 0 19 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0.586001 9.00003L15.172 9.00003L9.879 14.293L11.293 15.707L19 8.00003L11.293 0.29303L9.879 1.70703L15.172 7.00003L0.586001 7.00003L0.586001 9.00003Z",
    className: "fillblue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 8
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, data.authors.map(item => item.title).join(', '))));
}
/* harmony default export */ __webpack_exports__["default"] = (PopularArticleList);

/***/ }),

/***/ "./src/components/PopularArticles.js":
/*!*******************************************!*\
  !*** ./src/components/PopularArticles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_MorePopular_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/MorePopular.scss */ "./src/css/MorePopular.scss");
/* harmony import */ var _css_MorePopular_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_MorePopular_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PopularArticleList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopularArticleList */ "./src/components/PopularArticleList.js");
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\PopularArticles.js";



function PopularArticles({
  data
}) {
  return data.posts && data.posts.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "padding-1 gr-2x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, data.acf.sectionTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "h2-title-mb",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, data.acf.sectionTitle)), data.posts.map((post, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `col-12 col-lg-4 ${index === data.posts.length - 1 ? "last-in-list" : ""}`,
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PopularArticleList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: post,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 8
    }
  }))))));
}
/* harmony default export */ __webpack_exports__["default"] = (PopularArticles);

/***/ }),

/***/ "./src/components/PostContent.js":
/*!***************************************!*\
  !*** ./src/components/PostContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_Article_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/Article.scss */ "./src/css/Article.scss");
/* harmony import */ var _css_Article_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_Article_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MostPopular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MostPopular */ "./src/components/MostPopular.js");
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Breadcrumbs */ "./src/components/Breadcrumbs.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Content */ "./src/components/Content.js");
/* harmony import */ var _AuthorSlide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AuthorSlide */ "./src/components/AuthorSlide.js");
/* harmony import */ var _CategorisedArticles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CategorisedArticles */ "./src/components/CategorisedArticles.js");
/* harmony import */ var _PostSocialShare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostSocialShare */ "./src/components/PostSocialShare.js");
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\PostContent.js";








function PostContent({
  data
}) {
  var _data$post, _data$post$images, _data$post2, _data$post3, _data$post3$authors, _data$post4, _data$post5, _data$post6, _data$post7, _data$post8;
  const [isFormVisible, setIsFormVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const scrollToFooter = () => {
    setIsFormVisible(true);
    setTimeout(() => {
      const footerElement = document.getElementById("subscriptionform");
      if (footerElement) {
        footerElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    }, 50);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "article-main ht-article-detail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, (data === null || data === void 0 ? void 0 : (_data$post = data.post) === null || _data$post === void 0 ? void 0 : (_data$post$images = _data$post.images) === null || _data$post$images === void 0 ? void 0 : _data$post$images['1440x450']) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "features-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: data.post.images['1440x450'],
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spacer-56",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, data.breadcrumb && data.breadcrumb.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: data.breadcrumb,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 68
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post-meta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }
  }, data === null || data === void 0 ? void 0 : (_data$post2 = data.post) === null || _data$post2 === void 0 ? void 0 : _data$post2.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row g-0 align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "m-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 27
    }
  }, data === null || data === void 0 ? void 0 : (_data$post3 = data.post) === null || _data$post3 === void 0 ? void 0 : (_data$post3$authors = _data$post3.authors) === null || _data$post3$authors === void 0 ? void 0 : _data$post3$authors.map(item => item.title).join(', '))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-auto my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#subscriptionform",
    className: "btn-outline d-block",
    onClick: e => {
      e.preventDefault();
      scrollToFooter();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, "Subscribe"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row g-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post-deate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 23
    }
  }, data === null || data === void 0 ? void 0 : (_data$post4 = data.post) === null || _data$post4 === void 0 ? void 0 : _data$post4.publishedDate, " ", (data === null || data === void 0 ? void 0 : (_data$post5 = data.post) === null || _data$post5 === void 0 ? void 0 : _data$post5.avgReadingTime) ? ` | ${data.post.avgReadingTime}` : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "social-share mb-42",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostSocialShare__WEBPACK_IMPORTED_MODULE_7__["default"], {
    post: data.post,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post-content pt-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, (data === null || data === void 0 ? void 0 : data.htmlContent) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_4__["default"], {
    html: data === null || data === void 0 ? void 0 : data.htmlContent,
    rootClass: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "social-share mt-48",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostSocialShare__WEBPACK_IMPORTED_MODULE_7__["default"], {
    post: data.post,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-3 mobile-hide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, data.popularPosts && data.popularPosts.posts && data.popularPosts.posts.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MostPopular__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data.popularPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: `Aboutus-main padding-1 gr-1 ${isFormVisible ? '' : 'd-none'}`,
    id: "subscriptionform",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, (data === null || data === void 0 ? void 0 : data.bottomhtml) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_4__["default"], {
    html: data === null || data === void 0 ? void 0 : data.bottomhtml,
    rootClass: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }))))), (data === null || data === void 0 ? void 0 : (_data$post6 = data.post) === null || _data$post6 === void 0 ? void 0 : _data$post6.authors) && (data === null || data === void 0 ? void 0 : (_data$post7 = data.post) === null || _data$post7 === void 0 ? void 0 : _data$post7.authors.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuthorSlide__WEBPACK_IMPORTED_MODULE_5__["default"], {
    items: data === null || data === void 0 ? void 0 : (_data$post8 = data.post) === null || _data$post8 === void 0 ? void 0 : _data$post8.authors,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "article-main ht-article-detail desktop-hide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spacer-56",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, data.popularPosts && data.popularPosts.posts && data.popularPosts.posts.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MostPopular__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data.popularPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }))))), (data === null || data === void 0 ? void 0 : data.relatedArticles) && (data === null || data === void 0 ? void 0 : data.relatedArticles.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CategorisedArticles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data === null || data === void 0 ? void 0 : data.relatedArticles,
    orangeBg: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (PostContent);

/***/ }),

/***/ "./src/components/PostSocialShare.js":
/*!*******************************************!*\
  !*** ./src/components/PostSocialShare.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\PostSocialShare.js";

function PostSocialShare({
  post
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `https://linkedin.com/shareArticle?mini=true&title=${post === null || post === void 0 ? void 0 : post.title}&url=${post === null || post === void 0 ? void 0 : post.url}`,
    target: "_blank",
    className: "socail-svg",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M19.3 4H4.7C4.3 4 4 4.3 4 4.7V19.4C4 19.7 4.3 20 4.7 20H19.4C19.8 20 20.1 19.7 20.1 19.3V4.7C20 4.3 19.7 4 19.3 4ZM8.7 17.6H6.4V10H8.8V17.6H8.7ZM7.6 9C6.8 9 6.2 8.3 6.2 7.6C6.2 6.8 6.8 6.2 7.6 6.2C8.4 6.2 9 6.8 9 7.6C8.9 8.3 8.3 9 7.6 9ZM17.6 17.6H15.2V13.9C15.2 13 15.2 11.9 14 11.9C12.8 11.9 12.6 12.9 12.6 13.9V17.7H10.2V10H12.5V11C12.8 10.4 13.6 9.8 14.7 9.8C17.1 9.8 17.5 11.4 17.5 13.4V17.6H17.6Z",
    className: "svgfillsocial",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 1
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `https://www.facebook.com/sharer.php?u=${post === null || post === void 0 ? void 0 : post.url}`,
    target: "_blank",
    className: "socail-svg",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10.0229 20L10 13H7V10H10V8C10 5.3008 11.6715 4 14.0794 4C15.2328 4 16.2241 4.08587 16.5129 4.12425V6.94507L14.843 6.94583C13.5334 6.94583 13.2799 7.5681 13.2799 8.48124V10H17L16 13H13.2799V20H10.0229Z",
    className: "svgfillsocial",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 1
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `https://twitter.com/share?text=${post === null || post === void 0 ? void 0 : post.title}&url=${post === null || post === void 0 ? void 0 : post.url}`,
    target: "_blank",
    className: "socail-svg",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M20 7C19.4 7.3 18.8 7.4 18.1 7.5C18.8 7.1 19.3 6.5 19.5 5.7C18.9 6.1 18.2 6.3 17.4 6.5C16.8 5.9 15.9 5.5 15 5.5C13.3 5.5 11.8 7 11.8 8.8C11.8 9.1 11.8 9.3 11.9 9.5C9.2 9.4 6.7 8.1 5.1 6.1C4.8 6.6 4.7 7.1 4.7 7.8C4.7 8.9 5.3 9.9 6.2 10.5C5.7 10.5 5.2 10.3 4.7 10.1C4.7 11.7 5.8 13 7.3 13.3C7 13.4 6.7 13.4 6.4 13.4C6.2 13.4 6 13.4 5.8 13.3C6.2 14.6 7.4 15.6 8.9 15.6C7.8 16.5 6.4 17 4.8 17C4.5 17 4.3 17 4 17C5.5 17.9 7.2 18.5 9 18.5C15 18.5 18.3 13.5 18.3 9.2C18.3 9.1 18.3 8.9 18.3 8.8C19 8.3 19.6 7.7 20 7Z",
    className: "svgfillsocial",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 1
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `mailto:?subject=${post === null || post === void 0 ? void 0 : post.title}&body=${post === null || post === void 0 ? void 0 : post.url}`,
    target: "_blank",
    className: "socail-svg",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.66134 9.74871C7.66797 8.7425 9.033 8.17725 10.4563 8.17725C11.8796 8.17725 13.2446 8.7425 14.2513 9.74871C14.6419 10.1392 14.642 10.7723 14.2516 11.1629C13.8611 11.5535 13.2279 11.5537 12.8373 11.1632C12.2058 10.5319 11.3493 10.1772 10.4563 10.1772C9.56331 10.1772 8.70687 10.5319 8.07529 11.1632M8.07529 11.1632C7.44378 11.7948 4 15.7393 4 16.6325C4 17.5257 4.35482 18.3823 4.98641 19.0139C5.61799 19.6454 6.4746 20.0003 7.3678 20.0003C8.26099 20.0003 9.11761 19.6454 9.74919 19.0139L11.2932 17.4699C11.6837 17.0793 12.3169 17.0793 12.7074 17.4699C13.0979 17.8604 13.0979 18.4935 12.7074 18.8841L11.1634 20.4281C10.1567 21.4347 8.79143 22.0003 7.3678 22.0003C5.94417 22.0003 4.57885 21.4347 3.57219 20.4281C2.56553 19.4214 2 18.0561 2 16.6325C2 15.2088 2.56553 13.8435 3.57219 12.8369L6.66134 9.74871",
    className: "svgfillsocial",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.8826 14.2518C16.876 15.258 15.5109 15.8232 14.0876 15.8232C12.6644 15.8232 11.2993 15.258 10.2927 14.2518C9.90208 13.8613 9.90195 13.2282 10.2924 12.8376C10.6828 12.447 11.316 12.4468 11.7066 12.8373C12.3382 13.4686 13.1946 13.8232 14.0876 13.8232C14.9806 13.8232 15.8371 13.4686 16.4687 12.8373M16.4687 12.8373C17.1002 12.2057 20.5439 8.26117 20.5439 7.36803C20.5439 6.47483 20.1891 5.61822 19.5575 4.98663C18.926 4.35505 18.0693 4.00023 17.1761 4.00023C16.283 4.00023 15.4263 4.35505 14.7948 4.98663L13.2508 6.53063C12.8602 6.92116 12.2271 6.92116 11.8365 6.53063C11.446 6.14011 11.446 5.50694 11.8365 5.11642L13.3805 3.57242C14.3872 2.56576 15.7525 2.00023 17.1761 2.00023C18.5998 2.00023 19.9651 2.56576 20.9718 3.57242C21.9784 4.57908 22.5439 5.9444 22.5439 7.36803C22.5439 8.79166 21.9784 10.157 20.9718 11.1636L17.8826 14.2518",
    className: "svgfillsocial",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 1
    }
  })))));
}
/* harmony default export */ __webpack_exports__["default"] = (PostSocialShare);

/***/ }),

/***/ "./src/components/ResourceCenterArticles.js":
/*!**************************************************!*\
  !*** ./src/components/ResourceCenterArticles.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleArticleList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleArticleList */ "./src/components/SingleArticleList.js");
/* harmony import */ var _css_FilterResources_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/FilterResources.scss */ "./src/css/FilterResources.scss");
/* harmony import */ var _css_FilterResources_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_FilterResources_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ResourcePostContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResourcePostContent */ "./src/components/ResourcePostContent.js");
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\ResourceCenterArticles.js";




const loadMoreArticles = (ajaxUrl, filters, filteredItems, setFilteredItems, isLoadMoreLoading, setIsLoadMoreLoading) => async e => {
  e.preventDefault();
  if (isLoadMoreLoading) {
    return;
  }
  setIsLoadMoreLoading(true);
  try {
    const nextPage = filteredItems.lastPage + 1;
    let ajaxFireUrl = `${ajaxUrl}?action=loadMorePosts&resources=true&page=${nextPage}&perPage=${filteredItems.perPage}&s=${filters.s}&category=${filters.categories}&contentType=${filters.contentTypes}`;
    const response = await fetch(ajaxFireUrl);
    const responseJson = await response.json();
    setFilteredItems(filteredItems => ({
      posts: [...filteredItems.posts, ...responseJson.posts],
      perPage: responseJson.perPage,
      lastPage: responseJson.lastPage,
      foundPosts: responseJson.foundPosts
    }));
  } catch (error) {}
  setIsLoadMoreLoading(false);
};
const triggerSearchChange = (filters, setFilters) => e => {
  filters.s = e.target.value;
  setFilters({
    ...filters
  });
};
const triggerCategoryChange = (categoryId, allCategories, filters, setFilters) => e => {
  if (e.target.checked) {
    if (categoryId === 0) {
      filters.categories = allCategories.map(i => i.id);
    } else {
      filters.categories.push(categoryId);
    }
  } else {
    if (categoryId === 0) {
      filters.categories = [];
    } else {
      filters.categories = filters.categories.filter(item => item !== categoryId);
    }
  }
  setFilters({
    ...filters
  });
};
const triggerContentTypeChange = (contentType, allContentTypes, filters, setFilters) => e => {
  if (e.target.checked) {
    if (contentType === 0) {
      filters.contentTypes = allContentTypes;
    } else {
      filters.contentTypes.push(contentType);
    }
  } else {
    if (contentType === 0) {
      filters.contentTypes = [];
    } else {
      filters.contentTypes = filters.contentTypes.filter(item => item !== contentType);
    }
  }
  setFilters({
    ...filters
  });
};
function ResourceCenterArticles({
  data
}) {
  const firstRenderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const [filteredItems, setFilteredItems] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data.filteredItems);
  const [filters, setFilters] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    s: '',
    categories: [],
    contentTypes: []
  });
  const [isLoadMoreLoading, setIsLoadMoreLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [isFiltersLoading, setIsFiltersLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [showSingle, setShowSingle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!!data.singleResourceArticleDetail);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const filterArticles = setTimeout(() => {
      if (firstRenderRef.current) {
        firstRenderRef.current = false;
      } else {
        setShowSingle(false);
        setIsFiltersLoading(true);
        let ajaxFireUrl = `${data.ajaxUrl}?action=loadMorePosts&resources=true&page=1&perPage=${filteredItems.perPage}&s=${filters.s}&category=${filters.categories}&contentType=${filters.contentTypes}`;
        fetch(ajaxFireUrl).then(response => response.json()).then(data => {
          setFilteredItems(data);
          setIsFiltersLoading(false);
        });
      }
    }, 250);
    return () => clearTimeout(filterArticles);
  }, [filters, data.ajaxUrl, filteredItems.perPage]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "article-list-main padding-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-8 col-lg-9 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 6
    }
  }, showSingle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResourcePostContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data.singleResourceArticleDetail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 8
    }
  }), !showSingle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 8
    }
  }, isFiltersLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card position-relative overflow-hidden",
    style: {
      border: "none",
      minHeight: "300px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-absolute w-100 h-100 d-flex flex-column align-items-center bg-white justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spinner-border",
    role: "status",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, "Loading...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 12
    }
  }, "Loading"))), !isFiltersLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 10
    }
  }, filteredItems.posts.length > 0 && filteredItems.posts.map((post, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-lg-4",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SingleArticleList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: post,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }))), filteredItems.posts.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card position-relative overflow-hidden",
    style: {
      border: "none",
      minHeight: "300px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 14
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-absolute w-100 h-100 d-flex flex-column align-items-center bg-white justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 16
    }
  }, "No resources found")))), filteredItems.posts.length < filteredItems.foundPosts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${window.location.href}#`,
    className: `btn-main min-width ${isLoadMoreLoading ? 'btn-disabled' : ''}`,
    onClick: loadMoreArticles(data.ajaxUrl, filters, filteredItems, setFilteredItems, isLoadMoreLoading, setIsLoadMoreLoading),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, "View more ", '  ', isLoadMoreLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "spinner-border spinner-border-sm",
    role: "status",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 36
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `col-12 col-md-4 col-lg-3 ${showSingle ? 'order-md-first' : 'order-first'}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filter-Left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mobile-hide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, data.filterTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filter-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 10
    }
  }, "Search by"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "title, author...",
    value: filters.s,
    onChange: triggerSearchChange(filters, setFilters),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 10
    }
  })), data.filterCategories.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filter-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 11
    }
  }, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filter-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-control custom-checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    autoComplete: "off",
    className: "custom-control-input",
    id: "check0",
    checked: filters.categories.length === data.filterCategories.length,
    onChange: triggerCategoryChange(0, data.filterCategories, filters, setFilters),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "custom-control-label",
    htmlFor: "check0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 13
    }
  }, "All"))), data.filterCategories.map(category => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filter-row",
    key: category.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-control custom-checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    autoComplete: "off",
    className: "custom-control-input",
    id: `check${category.id}`,
    checked: filters.categories.includes(category.id),
    onChange: triggerCategoryChange(category.id, data.filterCategories, filters, setFilters),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 14
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "custom-control-label",
    htmlFor: `check${category.id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 14
    }
  }, category.title))))), data.filterContentTypes.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filter-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 11
    }
  }, "Content type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filter-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-control custom-checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    autoComplete: "off",
    className: "custom-control-input",
    id: "contentType0",
    checked: filters.contentTypes.length === data.filterContentTypes.length,
    onChange: triggerContentTypeChange(0, data.filterContentTypes, filters, setFilters),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "custom-control-label",
    htmlFor: "contentType0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  }, "All"))), data.filterContentTypes.map((contentType, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filter-row",
    key: index + 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-control custom-checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    autoComplete: "off",
    className: "custom-control-input",
    id: `contentType${index + 1}`,
    checked: filters.contentTypes.includes(contentType),
    onChange: triggerContentTypeChange(contentType, data.filterContentTypes, filters, setFilters),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 14
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "custom-control-label",
    htmlFor: `contentType${index + 1}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 14
    }
  }, contentType)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desktop-hide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accordion",
    id: "accordionExample2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "headingOnea",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn-collapse collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapseOnea",
    "aria-expanded": "true",
    "aria-controls": "collapseOnea",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 12
    }
  }, data.filterTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "collapseOnea",
    className: "collapse",
    "aria-labelledby": "headingOnea",
    "data-parent": "#accordionExample2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filter-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 14
    }
  }, "Search by"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "title, author...",
    value: filters.s,
    onChange: triggerSearchChange(filters, setFilters),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 14
    }
  })), data.filterCategories.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filter-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 14
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 15
    }
  }, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filter-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-control custom-checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 16
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    autoComplete: "off",
    className: "custom-control-input",
    id: "mcheck0",
    checked: filters.categories.length === data.filterCategories.length,
    onChange: triggerCategoryChange(0, data.filterCategories, filters, setFilters),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "custom-control-label",
    htmlFor: "mcheck0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 17
    }
  }, "All"))), data.filterCategories.map(category => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filter-row",
    key: category.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 16
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-control custom-checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    autoComplete: "off",
    className: "custom-control-input",
    id: `mcheck${category.id}`,
    checked: filters.categories.includes(category.id),
    onChange: triggerCategoryChange(category.id, data.filterCategories, filters, setFilters),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 18
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "custom-control-label",
    htmlFor: `mcheck${category.id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 18
    }
  }, category.title))))), data.filterContentTypes.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filter-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 14
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 15
    }
  }, "Content type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filter-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-control custom-checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 16
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    autoComplete: "off",
    className: "custom-control-input",
    id: "mcontentType0",
    checked: filters.contentTypes.length === data.filterContentTypes.length,
    onChange: triggerContentTypeChange(0, data.filterContentTypes, filters, setFilters),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "custom-control-label",
    htmlFor: "mcontentType0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 17
    }
  }, "All"))), data.filterContentTypes.map((contentType, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filter-row",
    key: index + 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 16
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-control custom-checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    autoComplete: "off",
    className: "custom-control-input",
    id: `mcontentType${index + 1}`,
    checked: filters.contentTypes.includes(contentType),
    onChange: triggerContentTypeChange(contentType, data.filterContentTypes, filters, setFilters),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 18
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "custom-control-label",
    htmlFor: `mcontentType${index + 1}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 18
    }
  }, contentType)))))))))))))));
}
/* harmony default export */ __webpack_exports__["default"] = (ResourceCenterArticles);

/***/ }),

/***/ "./src/components/ResourcePostContent.js":
/*!***********************************************!*\
  !*** ./src/components/ResourcePostContent.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_ResourceCenterArticle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/ResourceCenterArticle.scss */ "./src/css/ResourceCenterArticle.scss");
/* harmony import */ var _css_ResourceCenterArticle_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_ResourceCenterArticle_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_Article_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/Article.scss */ "./src/css/Article.scss");
/* harmony import */ var _css_Article_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Article_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content */ "./src/components/Content.js");
/* harmony import */ var _PostSocialShare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostSocialShare */ "./src/components/PostSocialShare.js");
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\ResourcePostContent.js";





function ResourcePostContent({
  data
}) {
  var _data$post;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "resource-center-article article-main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, (data === null || data === void 0 ? void 0 : (_data$post = data.post) === null || _data$post === void 0 ? void 0 : _data$post.contentType) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "tag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, data.post.contentType.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, data.post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "social-share",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostSocialShare__WEBPACK_IMPORTED_MODULE_4__["default"], {
    post: data.post,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }))), (data === null || data === void 0 ? void 0 : data.htmlContent) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    html: data === null || data === void 0 ? void 0 : data.htmlContent,
    rootClass: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (ResourcePostContent);

/***/ }),

/***/ "./src/components/SearchResults.js":
/*!*****************************************!*\
  !*** ./src/components/SearchResults.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_SearchResults_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/SearchResults.scss */ "./src/css/SearchResults.scss");
/* harmony import */ var _css_SearchResults_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_SearchResults_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\SearchResults.js";


function SearchResults({
  data
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "search-results",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 6
    }
  }, data.items.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 8
    }
  }, "Search Results Found For: \"", data.searchQuery, "\""), data.items.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 8
    }
  }, "No search results found for: \"", data.searchQuery, "\""), data.items.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-list",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 8
    }
  }, item.breadcrumb && item.breadcrumb.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "breadcrumbs-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, item.breadcrumb.map((breadcrumbItem, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, breadcrumbItem.url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: breadcrumbItem.url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 36
    }
  }, breadcrumbItem.title) : breadcrumbItem.title)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: item.url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 10
    }
  }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: item.url,
    className: "arrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M2.586 13L17.172 13L11.879 18.293L13.293 19.707L21 12L13.293 4.29303L11.879 5.70703L17.172 11L2.586 11L2.586 13Z",
    fill: "#0B41CD",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 12
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, item.authors && item.authors.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, item.authors.join(', '), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 38
    }
  })), item.shortContent))), data.maxPages > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-center align-items-center pt-52",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "pagrination",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${data.prevPageLink ? data.prevPageLink : `${window.location.href}#`}`,
    className: `${data.prevPageLink ? '' : 'disabled'}`,
    onClick: e => {
      if (!data.prevPageLink) {
        e.preventDefault();
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M8.28789 12.0007L14.2979 18.0107L15.7129 16.5967L11.1129 11.9967L15.7129 7.40374L14.2989 5.98974L8.28789 12.0007Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, data.currentPage, " / ", data.maxPages)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${data.nextPageLink ? data.nextPageLink : `${window.location.href}#`}`,
    className: `${data.nextPageLink ? '' : 'disabled'}`,
    onClick: e => {
      if (!data.nextPageLink) {
        e.preventDefault();
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.7131 12.0002L9.70309 5.99023L8.28809 7.40423L12.8881 12.0042L8.28809 16.5972L9.70209 18.0112L15.7131 12.0002Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }))))))))));
}
/* harmony default export */ __webpack_exports__["default"] = (SearchResults);

/***/ }),

/***/ "./src/components/SectionHeading.js":
/*!******************************************!*\
  !*** ./src/components/SectionHeading.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_InnerBanner_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/InnerBanner.scss */ "./src/css/InnerBanner.scss");
/* harmony import */ var _css_InnerBanner_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_InnerBanner_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_AuthorListBanner_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/AuthorListBanner.scss */ "./src/css/AuthorListBanner.scss");
/* harmony import */ var _css_AuthorListBanner_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_AuthorListBanner_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Breadcrumbs */ "./src/components/Breadcrumbs.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Content */ "./src/components/Content.js");
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\SectionHeading.js";





function SectionHeading({
  data
}) {
  var _data$className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: `${(_data$className = data.className) !== null && _data$className !== void 0 ? _data$className : 'inner-banner'}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, data.breadcrumb && data.breadcrumb.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: data.breadcrumb,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 58
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 8
    }
  }, data === null || data === void 0 ? void 0 : data.title), (data === null || data === void 0 ? void 0 : data.description) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_4__["default"], {
    html: `<p>${data === null || data === void 0 ? void 0 : data.description}</p>`,
    rootClass: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), data.link && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "thanks-butttons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn-main",
    href: data.link.url,
    target: data.link.target,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, data.link.title)))))));
}
/* harmony default export */ __webpack_exports__["default"] = (SectionHeading);

/***/ }),

/***/ "./src/components/SingleArticleList.js":
/*!*********************************************!*\
  !*** ./src/components/SingleArticleList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_SingleArticleList_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/SingleArticleList.scss */ "./src/css/SingleArticleList.scss");
/* harmony import */ var _css_SingleArticleList_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_SingleArticleList_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_art1_blank_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/art1-blank.png */ "./src/images/art1-blank.png");
/* harmony import */ var _images_art1_blank_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_art1_blank_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\SingleArticleList.js";



function SingleArticleList({
  data
}) {
  var _data$images, _data$categoryNames, _data$authors;
  const articleImage = (data === null || data === void 0 ? void 0 : (_data$images = data.images) === null || _data$images === void 0 ? void 0 : _data$images['346x194']) ? data.images['346x194'] : _images_art1_blank_png__WEBPACK_IMPORTED_MODULE_2___default.a;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "single-article-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: data.url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-thumb",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: articleImage,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, data === null || data === void 0 ? void 0 : data.contentType)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "articletitlecategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, data.primaryCategory.length > 0 ? data.primaryCategory : data === null || data === void 0 ? void 0 : (_data$categoryNames = data.categoryNames) === null || _data$categoryNames === void 0 ? void 0 : _data$categoryNames.join(', ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 6
    }
  }, data.title.substring(0, 79), data.title.length > 79 ? '...' : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("big", {
    className: "mobile-arrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "25",
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M2.586 13.5L17.172 13.5L11.879 18.793L13.293 20.207L21 12.5L13.293 4.79303L11.879 6.20703L17.172 11.5L2.586 11.5L2.586 13.5Z",
    fill: "#0B41CD",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 8
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "twoline-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 6
    }
  }, data === null || data === void 0 ? void 0 : (_data$authors = data.authors) === null || _data$authors === void 0 ? void 0 : _data$authors.map(item => item.title).join(', ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 6
    }
  }, data.publishedDate, " ", data.avgReadingTime ? ` | ${data.avgReadingTime}` : '')))));
}
/* harmony default export */ __webpack_exports__["default"] = (SingleArticleList);

/***/ }),

/***/ "./src/components/ThankYouPage.js":
/*!****************************************!*\
  !*** ./src/components/ThankYouPage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_EventThankYou_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/EventThankYou.scss */ "./src/css/EventThankYou.scss");
/* harmony import */ var _css_EventThankYou_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_EventThankYou_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Breadcrumbs */ "./src/components/Breadcrumbs.js");
/* harmony import */ var _LatestArticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LatestArticles */ "./src/components/LatestArticles.js");
/* harmony import */ var _images_linkedin_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/linkedin.svg */ "./src/images/linkedin.svg");
/* harmony import */ var _images_linkedin_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_linkedin_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_facebook_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/facebook.svg */ "./src/images/facebook.svg");
/* harmony import */ var _images_facebook_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_facebook_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_twitter_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/twitter.svg */ "./src/images/twitter.svg");
/* harmony import */ var _images_twitter_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_twitter_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_link_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/link.svg */ "./src/images/link.svg");
/* harmony import */ var _images_link_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_link_svg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\ThankYouPage.js";








const getHrefUrl = link => {
  return link === '#' ? `${window.location.href}#` : link;
};
const getImage = platform => {
  switch (platform) {
    case 'linkedIn':
      return _images_linkedin_svg__WEBPACK_IMPORTED_MODULE_4___default.a;
    case 'facebook':
      return _images_facebook_svg__WEBPACK_IMPORTED_MODULE_5___default.a;
    case 'twitter':
      return _images_twitter_svg__WEBPACK_IMPORTED_MODULE_6___default.a;
    default:
      return _images_link_svg__WEBPACK_IMPORTED_MODULE_7___default.a;
  }
};
function ThankYouPage({
  data
}) {
  var _data$ThankYouHeading, _data$ThankYouHeading2, _data$ThankYouHeading3, _data$ThankYouHeading4, _data$ThankYouHeading5, _data$ThankYouHeading6, _data$ThankYouHeading7, _data$ThankYouHeading8, _data$ThankYouSocial, _data$ThankYouSocial2, _data$ThankYouSocial3, _data$ThankYouSocial4, _data$ThankYouSocial5, _data$ThankYouSocial6, _data$ThankYouSocial7, _data$ThankYouSocial8, _data$ThankYouSocial9, _data$ThankYouSocial10, _data$ThankYouSocial11, _data$ThankYouSocial12, _data$ThankYouSocial13, _data$ThankYouSocial14, _data$ThankYouSocial15, _data$ThankYouSocial16, _data$ThankYouSocial17, _data$ThankYouSocial18, _data$ThankYouSocial19, _data$ThankYouSocial20, _data$ThankYouSocial21, _data$ThankYouSocial22, _data$ThankYouSocial23, _data$ThankYouSocial24;
  const [isShared, setIsShared] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "event-main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, data.featuredImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "features-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: data.featuredImage,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spacer-64",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, data.breadcrumb && data.breadcrumb.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: data.breadcrumb,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 66
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post-meta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, (data === null || data === void 0 ? void 0 : (_data$ThankYouHeading = data.ThankYouHeading) === null || _data$ThankYouHeading === void 0 ? void 0 : _data$ThankYouHeading.title) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, data === null || data === void 0 ? void 0 : (_data$ThankYouHeading2 = data.ThankYouHeading) === null || _data$ThankYouHeading2 === void 0 ? void 0 : _data$ThankYouHeading2.title), (data === null || data === void 0 ? void 0 : (_data$ThankYouHeading3 = data.ThankYouHeading) === null || _data$ThankYouHeading3 === void 0 ? void 0 : _data$ThankYouHeading3.description) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "big-text mb-0",
    dangerouslySetInnerHTML: {
      __html: data === null || data === void 0 ? void 0 : (_data$ThankYouHeading4 = data.ThankYouHeading) === null || _data$ThankYouHeading4 === void 0 ? void 0 : _data$ThankYouHeading4.description
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }), (data === null || data === void 0 ? void 0 : (_data$ThankYouHeading5 = data.ThankYouHeading) === null || _data$ThankYouHeading5 === void 0 ? void 0 : _data$ThankYouHeading5.links) && (data === null || data === void 0 ? void 0 : (_data$ThankYouHeading6 = data.ThankYouHeading) === null || _data$ThankYouHeading6 === void 0 ? void 0 : (_data$ThankYouHeading7 = _data$ThankYouHeading6.links) === null || _data$ThankYouHeading7 === void 0 ? void 0 : _data$ThankYouHeading7.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "twobnt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, data === null || data === void 0 ? void 0 : (_data$ThankYouHeading8 = data.ThankYouHeading) === null || _data$ThankYouHeading8 === void 0 ? void 0 : _data$ThankYouHeading8.links.map((link, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: getHrefUrl(link.link.url),
    target: link.link.target,
    className: "btn-main",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, link.link.title)))))))), ((data === null || data === void 0 ? void 0 : (_data$ThankYouSocial = data.ThankYouSocial) === null || _data$ThankYouSocial === void 0 ? void 0 : _data$ThankYouSocial.image) || (data === null || data === void 0 ? void 0 : (_data$ThankYouSocial2 = data.ThankYouSocial) === null || _data$ThankYouSocial2 === void 0 ? void 0 : _data$ThankYouSocial2.title) || (data === null || data === void 0 ? void 0 : (_data$ThankYouSocial3 = data.ThankYouSocial) === null || _data$ThankYouSocial3 === void 0 ? void 0 : _data$ThankYouSocial3.description) || (data === null || data === void 0 ? void 0 : (_data$ThankYouSocial4 = data.ThankYouSocial) === null || _data$ThankYouSocial4 === void 0 ? void 0 : _data$ThankYouSocial4.socialLinks) && (data === null || data === void 0 ? void 0 : (_data$ThankYouSocial5 = data.ThankYouSocial) === null || _data$ThankYouSocial5 === void 0 ? void 0 : (_data$ThankYouSocial6 = _data$ThankYouSocial5.socialLinks) === null || _data$ThankYouSocial6 === void 0 ? void 0 : _data$ThankYouSocial6.length) > 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "twocol-vent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, (data === null || data === void 0 ? void 0 : (_data$ThankYouSocial7 = data.ThankYouSocial) === null || _data$ThankYouSocial7 === void 0 ? void 0 : _data$ThankYouSocial7.image) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: data === null || data === void 0 ? void 0 : (_data$ThankYouSocial8 = data.ThankYouSocial) === null || _data$ThankYouSocial8 === void 0 ? void 0 : _data$ThankYouSocial8.image,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, data === null || data === void 0 ? void 0 : (_data$ThankYouSocial9 = data.ThankYouSocial) === null || _data$ThankYouSocial9 === void 0 ? void 0 : _data$ThankYouSocial9.title), (data === null || data === void 0 ? void 0 : (_data$ThankYouSocial10 = data.ThankYouSocial) === null || _data$ThankYouSocial10 === void 0 ? void 0 : _data$ThankYouSocial10.description) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: data === null || data === void 0 ? void 0 : (_data$ThankYouSocial11 = data.ThankYouSocial) === null || _data$ThankYouSocial11 === void 0 ? void 0 : _data$ThankYouSocial11.description
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 23
    }
  }), (data === null || data === void 0 ? void 0 : (_data$ThankYouSocial12 = data.ThankYouSocial) === null || _data$ThankYouSocial12 === void 0 ? void 0 : _data$ThankYouSocial12.socialLinks) && (data === null || data === void 0 ? void 0 : (_data$ThankYouSocial13 = data.ThankYouSocial) === null || _data$ThankYouSocial13 === void 0 ? void 0 : (_data$ThankYouSocial14 = _data$ThankYouSocial13.socialLinks) === null || _data$ThankYouSocial14 === void 0 ? void 0 : _data$ThankYouSocial14.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "social-share",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }, data === null || data === void 0 ? void 0 : (_data$ThankYouSocial15 = data.ThankYouSocial) === null || _data$ThankYouSocial15 === void 0 ? void 0 : _data$ThankYouSocial15.socialLinks.map((link, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: getHrefUrl(link.url),
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: e => {
      setIsShared(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 31
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: getImage(link.social_platform),
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 141
    }
  })))))), isShared && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 23
    }
  }, (data === null || data === void 0 ? void 0 : (_data$ThankYouSocial16 = data.ThankYouSocial) === null || _data$ThankYouSocial16 === void 0 ? void 0 : _data$ThankYouSocial16.downloadContent) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: data === null || data === void 0 ? void 0 : (_data$ThankYouSocial17 = data.ThankYouSocial) === null || _data$ThankYouSocial17 === void 0 ? void 0 : _data$ThankYouSocial17.downloadContent
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 27
    }
  }), (data === null || data === void 0 ? void 0 : (_data$ThankYouSocial18 = data.ThankYouSocial) === null || _data$ThankYouSocial18 === void 0 ? void 0 : _data$ThankYouSocial18.downloadLink) && (data === null || data === void 0 ? void 0 : (_data$ThankYouSocial19 = data.ThankYouSocial) === null || _data$ThankYouSocial19 === void 0 ? void 0 : (_data$ThankYouSocial20 = _data$ThankYouSocial19.downloadLink) === null || _data$ThankYouSocial20 === void 0 ? void 0 : (_data$ThankYouSocial21 = _data$ThankYouSocial20.url) === null || _data$ThankYouSocial21 === void 0 ? void 0 : _data$ThankYouSocial21.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: getHrefUrl(data === null || data === void 0 ? void 0 : (_data$ThankYouSocial22 = data.ThankYouSocial) === null || _data$ThankYouSocial22 === void 0 ? void 0 : _data$ThankYouSocial22.downloadLink.url),
    target: data === null || data === void 0 ? void 0 : (_data$ThankYouSocial23 = data.ThankYouSocial) === null || _data$ThankYouSocial23 === void 0 ? void 0 : _data$ThankYouSocial23.downloadLink.target,
    className: "btn-main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 27
    }
  }, data === null || data === void 0 ? void 0 : (_data$ThankYouSocial24 = data.ThankYouSocial) === null || _data$ThankYouSocial24 === void 0 ? void 0 : _data$ThankYouSocial24.downloadLink.title)))))))), data.LatestArticles && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LatestArticles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data.LatestArticles,
    smallTitle: "",
    title: "Don\u2019t Miss Our Latest Publications",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (ThankYouPage);

/***/ }),

/***/ "./src/components/TrainingDetail.js":
/*!******************************************!*\
  !*** ./src/components/TrainingDetail.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_Training_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/Training.scss */ "./src/css/Training.scss");
/* harmony import */ var _css_Training_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_Training_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Breadcrumbs */ "./src/components/Breadcrumbs.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content */ "./src/components/Content.js");
/* harmony import */ var _PostSocialShare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostSocialShare */ "./src/components/PostSocialShare.js");
/* harmony import */ var _images_1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/1.svg */ "./src/images/1.svg");
/* harmony import */ var _images_1_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_1_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_2_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/2.svg */ "./src/images/2.svg");
/* harmony import */ var _images_2_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_2_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_3_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/3.svg */ "./src/images/3.svg");
/* harmony import */ var _images_3_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_3_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CategorisedArticles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CategorisedArticles */ "./src/components/CategorisedArticles.js");
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\TrainingDetail.js";









const accessTrainingClicked = () => e => {
  e.preventDefault();
  document.querySelector(".post-button  a.btn-main").click();
};
function TrainingDetail({
  data
}) {
  var _data$training, _data$training2, _data$training2$image, _data$training3, _data$training4, _data$training5, _data$training6, _data$training7, _data$training8;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "ht-training-detail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 8
    }
  }, data.breadcrumb && data.breadcrumb.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: data.breadcrumb,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 59
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post-meta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 10
    }
  }, data === null || data === void 0 ? void 0 : (_data$training = data.training) === null || _data$training === void 0 ? void 0 : _data$training.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row g-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "social-share mb-42",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostSocialShare__WEBPACK_IMPORTED_MODULE_4__["default"], {
    post: data.training,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spacer-56",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-8 order-2 order-md-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post-content pt-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 8
    }
  }, (data === null || data === void 0 ? void 0 : (_data$training2 = data.training) === null || _data$training2 === void 0 ? void 0 : (_data$training2$image = _data$training2.images) === null || _data$training2$image === void 0 ? void 0 : _data$training2$image['821x462']) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "features-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: data.training.images['821x462'],
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spacer-56",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), (data === null || data === void 0 ? void 0 : (_data$training3 = data.training) === null || _data$training3 === void 0 ? void 0 : _data$training3.htmlContent) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    html: data === null || data === void 0 ? void 0 : (_data$training4 = data.training) === null || _data$training4 === void 0 ? void 0 : _data$training4.htmlContent,
    rootClass: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 10
    }
  }), data.training.authors && data.training.authors.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Host-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 10
    }
  }, data.training.authors.map((author, index) => {
    var _author$wpAuthor$imag, _author$wpAuthor$imag2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 12
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: author.wpAuthor.url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 14
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: ((_author$wpAuthor$imag = author.wpAuthor.images) === null || _author$wpAuthor$imag === void 0 ? void 0 : _author$wpAuthor$imag['472x265']) ? (_author$wpAuthor$imag2 = author.wpAuthor.images) === null || _author$wpAuthor$imag2 === void 0 ? void 0 : _author$wpAuthor$imag2['472x265'] : '',
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-9",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "host-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 14
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 15
      }
    }, author.role), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: author.wpAuthor.url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 16
      }
    }, author.wpAuthor.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: author.wpAuthor.url,
      className: "arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M2.586 13L17.172 13L11.879 18.293L13.293 19.707L21 12L13.293 4.29303L11.879 5.70703L17.172 11L2.586 11L2.586 13Z",
      fill: "#0B41CD",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 18
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }
    }, author.wpAuthor.authorProfession))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-4 order-1 order-md-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "popular-article",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "training-right-side-links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 10
    }
  }, data.training.training_atendees_count > 49 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_1_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 26
    }
  }), "Attendees: ", data.training.training_atendees_count)), (data === null || data === void 0 ? void 0 : (_data$training5 = data.training) === null || _data$training5 === void 0 ? void 0 : _data$training5.audio) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_3_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 26
    }
  }), "Audio: ", data.training.audio)), (data === null || data === void 0 ? void 0 : (_data$training6 = data.training) === null || _data$training6 === void 0 ? void 0 : _data$training6.time) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_2_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 26
    }
  }), "Time: ", data.training.time))), (data === null || data === void 0 ? void 0 : (_data$training7 = data.training) === null || _data$training7 === void 0 ? void 0 : _data$training7.access_training_series_link) && data.training.htmlContent.includes('ht-access-postType="ht-training"') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "javascript:void(0)",
    onClick: accessTrainingClicked(),
    className: "btn-main access-training-setires",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, data === null || data === void 0 ? void 0 : (_data$training8 = data.training) === null || _data$training8 === void 0 ? void 0 : _data$training8.access_training_series_link))))))), (data === null || data === void 0 ? void 0 : data.CategorisedArticles) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CategorisedArticles__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data === null || data === void 0 ? void 0 : data.CategorisedArticles.filteredArticles,
    orangeBg: false,
    trainingSeriesContent: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (TrainingDetail);

/***/ }),

/***/ "./src/components/UpcomingEvents.js":
/*!******************************************!*\
  !*** ./src/components/UpcomingEvents.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_UpcomingEvents_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/UpcomingEvents.scss */ "./src/css/UpcomingEvents.scss");
/* harmony import */ var _css_UpcomingEvents_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_UpcomingEvents_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\components\\UpcomingEvents.js";


function UpcomingEvents({
  data
}) {
  if (data.upcomingEvents.posts.length <= 0) {
    return;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Upcoming-events",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, data.sectionTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 6
    }
  }, data.upcomingEvents.posts.map(event => {
    var _event$images, _event$images2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row upeventrow",
      key: event.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-4 col-xl-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 10
      }
    }, (event === null || event === void 0 ? void 0 : (_event$images = event.images) === null || _event$images === void 0 ? void 0 : _event$images['288x162']) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: event.url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: event.images['288x162'],
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 31
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `col-12  ${(event === null || event === void 0 ? void 0 : (_event$images2 = event.images) === null || _event$images2 === void 0 ? void 0 : _event$images2['288x162']) ? 'col-md-8 col-xl-9' : ''}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: event.url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 12
      }
    }, event.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: event.url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 12
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M2.586 13L17.172 13L11.879 18.293L13.293 19.707L21 12L13.293 4.29303L11.879 5.70703L17.172 11L2.586 11L2.586 13Z",
      fill: "#0B41CD",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 14
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, event.eventDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    }, event.authors.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, event.authors.map(item => item.wpAuthor.title).join(', '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 14
      }
    })), event.eventTime, " ", event.duration ? ` | ${event.duration}` : ''))));
  })))));
}
/* harmony default export */ __webpack_exports__["default"] = (UpcomingEvents);

/***/ }),

/***/ "./src/css/AboutUs.scss":
/*!******************************!*\
  !*** ./src/css/AboutUs.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/Article.scss":
/*!******************************!*\
  !*** ./src/css/Article.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/ArticleListFilter.scss":
/*!****************************************!*\
  !*** ./src/css/ArticleListFilter.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/AuthorDetailsBanner.scss":
/*!******************************************!*\
  !*** ./src/css/AuthorDetailsBanner.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/AuthorList.scss":
/*!*********************************!*\
  !*** ./src/css/AuthorList.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/AuthorListBanner.scss":
/*!***************************************!*\
  !*** ./src/css/AuthorListBanner.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/AuthorPublications.scss":
/*!*****************************************!*\
  !*** ./src/css/AuthorPublications.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/Breadcrumbs.scss":
/*!**********************************!*\
  !*** ./src/css/Breadcrumbs.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/Event.scss":
/*!****************************!*\
  !*** ./src/css/Event.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/EventThankYou.scss":
/*!************************************!*\
  !*** ./src/css/EventThankYou.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/FeaturedArticle.scss":
/*!**************************************!*\
  !*** ./src/css/FeaturedArticle.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/FilterResources.scss":
/*!**************************************!*\
  !*** ./src/css/FilterResources.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/Footer.scss":
/*!*****************************!*\
  !*** ./src/css/Footer.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/Header.scss":
/*!*****************************!*\
  !*** ./src/css/Header.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/Headline.scss":
/*!*******************************!*\
  !*** ./src/css/Headline.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/HomeAboutUs.scss":
/*!**********************************!*\
  !*** ./src/css/HomeAboutUs.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/InlineBanner.scss":
/*!***********************************!*\
  !*** ./src/css/InlineBanner.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/InlineBanner2.scss":
/*!************************************!*\
  !*** ./src/css/InlineBanner2.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/InnerBanner.scss":
/*!**********************************!*\
  !*** ./src/css/InnerBanner.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/MorePopular.scss":
/*!**********************************!*\
  !*** ./src/css/MorePopular.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/MorePopularList.scss":
/*!**************************************!*\
  !*** ./src/css/MorePopularList.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/MostPopular.scss":
/*!**********************************!*\
  !*** ./src/css/MostPopular.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/PastEvents.scss":
/*!*********************************!*\
  !*** ./src/css/PastEvents.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/ResourceCenterArticle.scss":
/*!********************************************!*\
  !*** ./src/css/ResourceCenterArticle.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/SearchResults.scss":
/*!************************************!*\
  !*** ./src/css/SearchResults.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/SingleArticleList.scss":
/*!****************************************!*\
  !*** ./src/css/SingleArticleList.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/SubscribeHome.scss":
/*!************************************!*\
  !*** ./src/css/SubscribeHome.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/Terms.scss":
/*!****************************!*\
  !*** ./src/css/Terms.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/Training.scss":
/*!*******************************!*\
  !*** ./src/css/Training.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/UpcomingEvents.scss":
/*!*************************************!*\
  !*** ./src/css/UpcomingEvents.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/images/1.svg":
/*!**************************!*\
  !*** ./src/images/1.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/1.1c422ade.svg";

/***/ }),

/***/ "./src/images/2.svg":
/*!**************************!*\
  !*** ./src/images/2.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/2.d932462d.svg";

/***/ }),

/***/ "./src/images/3.svg":
/*!**************************!*\
  !*** ./src/images/3.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/3.813847b7.svg";

/***/ }),

/***/ "./src/images/art-main-blank.png":
/*!***************************************!*\
  !*** ./src/images/art-main-blank.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/art-main-blank.91476733.png";

/***/ }),

/***/ "./src/images/art1-blank.png":
/*!***********************************!*\
  !*** ./src/images/art1-blank.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkAAAAFECAYAAADP44G9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAJTGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4wLWMwMDAgNzkuMjE3YmNhNiwgMjAyMS8wNi8xNC0xODoyODoxMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxYzRmNTVhMi03NTI0LWY3NGEtOGEzNi1jNGQ0NmU2NTY3M2UiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTEyYzU5ZDQtZWQ0YS1mMzQ1LWI5OTctNzc3ZjFjMjE5YTExIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IjUwQ0RBODQ1RjI5MkJFNzM2RTRBNTFFQ0FCRUY4MEM2IiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IiIgdGlmZjpJbWFnZVdpZHRoPSI1NzYiIHRpZmY6SW1hZ2VMZW5ndGg9IjMyNCIgdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPSIyIiB0aWZmOlNhbXBsZXNQZXJQaXhlbD0iMyIgdGlmZjpYUmVzb2x1dGlvbj0iMTQ0LzEiIHRpZmY6WVJlc29sdXRpb249IjE0NC8xIiB0aWZmOlJlc29sdXRpb25Vbml0PSIyIiBleGlmOkV4aWZWZXJzaW9uPSIwMjMxIiBleGlmOkNvbG9yU3BhY2U9IjY1NTM1IiBleGlmOlBpeGVsWERpbWVuc2lvbj0iNTc2IiBleGlmOlBpeGVsWURpbWVuc2lvbj0iMzI0IiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMS0wNFQwODoyODoyOCswNTozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMTEtMDRUMDg6MzE6NDQrMDU6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTEtMDRUMDg6MzE6NDQrMDU6MzAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1ZDc1ZmZlYS1mZDRkLWQ1NGMtOWNkNi03MWNiZTJmZjFhMzkiIHN0RXZ0OndoZW49IjIwMjItMTEtMDRUMDg6MzE6NDQrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGltYWdlL2pwZWcgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTEyYzU5ZDQtZWQ0YS1mMzQ1LWI5OTctNzc3ZjFjMjE5YTExIiBzdEV2dDp3aGVuPSIyMDIyLTExLTA0VDA4OjMxOjQ0KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVkNzVmZmVhLWZkNGQtZDU0Yy05Y2Q2LTcxY2JlMmZmMWEzOSIgc3RSZWY6ZG9jdW1lbnRJRD0iNTBDREE4NDVGMjkyQkU3MzZFNEE1MUVDQUJFRjgwQzYiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0iNTBDREE4NDVGMjkyQkU3MzZFNEE1MUVDQUJFRjgwQzYiLz4gPHRpZmY6Qml0c1BlclNhbXBsZT4gPHJkZjpTZXE+IDxyZGY6bGk+ODwvcmRmOmxpPiA8cmRmOmxpPjg8L3JkZjpsaT4gPHJkZjpsaT44PC9yZGY6bGk+IDwvcmRmOlNlcT4gPC90aWZmOkJpdHNQZXJTYW1wbGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WOdmtQAABaZJREFUeJzt1jEBACAMwDDAv+fhAo4mCnp2z8wCACg5vwMAAF4zQABAjgECAHIMEACQY4AAgBwDBADkGCAAIMcAAQA5BggAyDFAAECOAQIAcgwQAJBjgACAHAMEAOQYIAAgxwABADkGCADIMUAAQI4BAgByDBAAkGOAAIAcAwQA5BggACDHAAEAOQYIAMgxQABAjgECAHIMEACQY4AAgBwDBADkGCAAIMcAAQA5BggAyDFAAECOAQIAcgwQAJBjgACAHAMEAOQYIAAgxwABADkGCADIMUAAQI4BAgByDBAAkGOAAIAcAwQA5BggACDHAAEAOQYIAMgxQABAjgECAHIMEACQY4AAgBwDBADkGCAAIMcAAQA5BggAyDFAAECOAQIAcgwQAJBjgACAHAMEAOQYIAAgxwABADkGCADIMUAAQI4BAgByDBAAkGOAAIAcAwQA5BggACDHAAEAOQYIAMgxQABAjgECAHIMEACQY4AAgBwDBADkGCAAIMcAAQA5BggAyDFAAECOAQIAcgwQAJBjgACAHAMEAOQYIAAgxwABADkGCADIMUAAQI4BAgByDBAAkGOAAIAcAwQA5BggACDHAAEAOQYIAMgxQABAjgECAHIMEACQY4AAgBwDBADkGCAAIMcAAQA5BggAyDFAAECOAQIAcgwQAJBjgACAHAMEAOQYIAAgxwABADkGCADIMUAAQI4BAgByDBAAkGOAAIAcAwQA5BggACDHAAEAOQYIAMgxQABAjgECAHIMEACQY4AAgBwDBADkGCAAIMcAAQA5BggAyDFAAECOAQIAcgwQAJBjgACAHAMEAOQYIAAgxwABADkGCADIMUAAQI4BAgByDBAAkGOAAIAcAwQA5BggACDHAAEAOQYIAMgxQABAjgECAHIMEACQY4AAgBwDBADkGCAAIMcAAQA5BggAyDFAAECOAQIAcgwQAJBjgACAHAMEAOQYIAAgxwABADkGCADIMUAAQI4BAgByDBAAkGOAAIAcAwQA5BggACDHAAEAOQYIAMgxQABAjgECAHIMEACQY4AAgBwDBADkGCAAIMcAAQA5BggAyDFAAECOAQIAcgwQAJBjgACAHAMEAOQYIAAgxwABADkGCADIMUAAQI4BAgByDBAAkGOAAIAcAwQA5BggACDHAAEAOQYIAMgxQABAjgECAHIMEACQY4AAgBwDBADkGCAAIMcAAQA5BggAyDFAAECOAQIAcgwQAJBjgACAHAMEAOQYIAAgxwABADkGCADIMUAAQI4BAgByDBAAkGOAAIAcAwQA5BggACDHAAEAOQYIAMgxQABAjgECAHIMEACQY4AAgBwDBADkGCAAIMcAAQA5BggAyDFAAECOAQIAcgwQAJBjgACAHAMEAOQYIAAgxwABADkGCADIMUAAQI4BAgByDBAAkGOAAIAcAwQA5BggACDHAAEAOQYIAMgxQABAjgECAHIMEACQY4AAgBwDBADkGCAAIMcAAQA5BggAyDFAAECOAQIAcgwQAJBjgACAHAMEAOQYIAAgxwABADkGCADIMUAAQI4BAgByDBAAkGOAAIAcAwQA5BggACDHAAEAOQYIAMgxQABAjgECAHIMEACQY4AAgBwDBADkGCAAIMcAAQA5BggAyDFAAECOAQIAcgwQAJBjgACAHAMEAOQYIAAgxwABADkGCADIMUAAQI4BAgByDBAAkGOAAIAcAwQA5BggACDHAAEAOQYIAMgxQABAjgECAHIMEACQY4AAgBwDBADkGCAAIMcAAQA5BggAyDFAAECOAQIAcgwQAJBjgACAHAMEAOQYIAAgxwABADkGCADIMUAAQI4BAgByDBAAkGOAAIAcAwQA5BggACDHAAEAOQYIAMgxQABAjgECAHIMEACQY4AAgBwDBADkGCAAIMcAAQA5BggAyDFAAECOAQIAci79dwWFae1QwgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/images/author_blank.png":
/*!*************************************!*\
  !*** ./src/images/author_blank.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAxYAAAG8CAYAAABDpjMGAAAACXBIWXMAABYlAAAWJQFJUiTwAAAJTGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4wLWMwMDAgNzkuMjE3YmNhNiwgMjAyMS8wNi8xNC0xODoyODoxMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjNzg2ZDhhNC0zMmZhLTNjNGMtOGY0MS1jMWRkNGU3NjVjYmUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MWYzYzg1MTUtODdjMi03NDQzLTgwNDMtOWYwZDJhMmVkMTY3IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IjZEODRCOTQ3Q0FDNTg4N0Q3NDJENzRBQzcxMTU4RkJCIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IiIgdGlmZjpJbWFnZVdpZHRoPSI3OTAiIHRpZmY6SW1hZ2VMZW5ndGg9IjQ0NCIgdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPSIyIiB0aWZmOlNhbXBsZXNQZXJQaXhlbD0iMyIgdGlmZjpYUmVzb2x1dGlvbj0iMTQ0LzEiIHRpZmY6WVJlc29sdXRpb249IjE0NC8xIiB0aWZmOlJlc29sdXRpb25Vbml0PSIyIiBleGlmOkV4aWZWZXJzaW9uPSIwMjMxIiBleGlmOkNvbG9yU3BhY2U9IjY1NTM1IiBleGlmOlBpeGVsWERpbWVuc2lvbj0iNzkwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iNDQ0IiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wOS0yNFQwOTo1NjoxNyswNTozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMTEtMDRUMDg6MzI6MzQrMDU6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTEtMDRUMDg6MzI6MzQrMDU6MzAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5M2NhNmIyOC1jYzNiLTEzNGMtYmZjMi03NjAzYjA4ZDhjNTQiIHN0RXZ0OndoZW49IjIwMjItMTEtMDRUMDg6MzI6MzQrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGltYWdlL2pwZWcgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MWYzYzg1MTUtODdjMi03NDQzLTgwNDMtOWYwZDJhMmVkMTY3IiBzdEV2dDp3aGVuPSIyMDIyLTExLTA0VDA4OjMyOjM0KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkzY2E2YjI4LWNjM2ItMTM0Yy1iZmMyLTc2MDNiMDhkOGM1NCIgc3RSZWY6ZG9jdW1lbnRJRD0iNkQ4NEI5NDdDQUM1ODg3RDc0MkQ3NEFDNzExNThGQkIiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0iNkQ4NEI5NDdDQUM1ODg3RDc0MkQ3NEFDNzExNThGQkIiLz4gPHRpZmY6Qml0c1BlclNhbXBsZT4gPHJkZjpTZXE+IDxyZGY6bGk+ODwvcmRmOmxpPiA8cmRmOmxpPjg8L3JkZjpsaT4gPHJkZjpsaT44PC9yZGY6bGk+IDwvcmRmOlNlcT4gPC90aWZmOkJpdHNQZXJTYW1wbGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+pwpVnQAACQJJREFUeJzt10ENACAQwDDAv+dDxB6EpFWw7/bMLAAAgOK8DgAAAP5nLAAAgMxYAAAAmbEAAAAyYwEAAGTGAgAAyIwFAACQGQsAACAzFgAAQGYsAACAzFgAAACZsQAAADJjAQAAZMYCAADIjAUAAJAZCwAAIDMWAABAZiwAAIDMWAAAAJmxAAAAMmMBAABkxgIAAMiMBQAAkBkLAAAgMxYAAEBmLAAAgMxYAAAAmbEAAAAyYwEAAGTGAgAAyIwFAACQGQsAACAzFgAAQGYsAACAzFgAAACZsQAAADJjAQAAZMYCAADIjAUAAJAZCwAAIDMWAABAZiwAAIDMWAAAAJmxAAAAMmMBAABkxgIAAMiMBQAAkBkLAAAgMxYAAEBmLAAAgMxYAAAAmbEAAAAyYwEAAGTGAgAAyIwFAACQGQsAACAzFgAAQGYsAACAzFgAAACZsQAAADJjAQAAZMYCAADIjAUAAJAZCwAAIDMWAABAZiwAAIDMWAAAAJmxAAAAMmMBAABkxgIAAMiMBQAAkBkLAAAgMxYAAEBmLAAAgMxYAAAAmbEAAAAyYwEAAGTGAgAAyIwFAACQGQsAACAzFgAAQGYsAACAzFgAAACZsQAAADJjAQAAZMYCAADIjAUAAJAZCwAAIDMWAABAZiwAAIDMWAAAAJmxAAAAMmMBAABkxgIAAMiMBQAAkBkLAAAgMxYAAEBmLAAAgMxYAAAAmbEAAAAyYwEAAGTGAgAAyIwFAACQGQsAACAzFgAAQGYsAACAzFgAAACZsQAAADJjAQAAZMYCAADIjAUAAJAZCwAAIDMWAABAZiwAAIDMWAAAAJmxAAAAMmMBAABkxgIAAMiMBQAAkBkLAAAgMxYAAEBmLAAAgMxYAAAAmbEAAAAyYwEAAGTGAgAAyIwFAACQGQsAACAzFgAAQGYsAACAzFgAAACZsQAAADJjAQAAZMYCAADIjAUAAJAZCwAAIDMWAABAZiwAAIDMWAAAAJmxAAAAMmMBAABkxgIAAMiMBQAAkBkLAAAgMxYAAEBmLAAAgMxYAAAAmbEAAAAyYwEAAGTGAgAAyIwFAACQGQsAACAzFgAAQGYsAACAzFgAAACZsQAAADJjAQAAZMYCAADIjAUAAJAZCwAAIDMWAABAZiwAAIDMWAAAAJmxAAAAMmMBAABkxgIAAMiMBQAAkBkLAAAgMxYAAEBmLAAAgMxYAAAAmbEAAAAyYwEAAGTGAgAAyIwFAACQGQsAACAzFgAAQGYsAACAzFgAAACZsQAAADJjAQAAZMYCAADIjAUAAJAZCwAAIDMWAABAZiwAAIDMWAAAAJmxAAAAMmMBAABkxgIAAMiMBQAAkBkLAAAgMxYAAEBmLAAAgMxYAAAAmbEAAAAyYwEAAGTGAgAAyIwFAACQGQsAACAzFgAAQGYsAACAzFgAAACZsQAAADJjAQAAZMYCAADIjAUAAJAZCwAAIDMWAABAZiwAAIDMWAAAAJmxAAAAMmMBAABkxgIAAMiMBQAAkBkLAAAgMxYAAEBmLAAAgMxYAAAAmbEAAAAyYwEAAGTGAgAAyIwFAACQGQsAACAzFgAAQGYsAACAzFgAAACZsQAAADJjAQAAZMYCAADIjAUAAJAZCwAAIDMWAABAZiwAAIDMWAAAAJmxAAAAMmMBAABkxgIAAMiMBQAAkBkLAAAgMxYAAEBmLAAAgMxYAAAAmbEAAAAyYwEAAGTGAgAAyIwFAACQGQsAACAzFgAAQGYsAACAzFgAAACZsQAAADJjAQAAZMYCAADIjAUAAJAZCwAAIDMWAABAZiwAAIDMWAAAAJmxAAAAMmMBAABkxgIAAMiMBQAAkBkLAAAgMxYAAEBmLAAAgMxYAAAAmbEAAAAyYwEAAGTGAgAAyIwFAACQGQsAACAzFgAAQGYsAACAzFgAAACZsQAAADJjAQAAZMYCAADIjAUAAJAZCwAAIDMWAABAZiwAAIDMWAAAAJmxAAAAMmMBAABkxgIAAMiMBQAAkBkLAAAgMxYAAEBmLAAAgMxYAAAAmbEAAAAyYwEAAGTGAgAAyIwFAACQGQsAACAzFgAAQGYsAACAzFgAAACZsQAAADJjAQAAZMYCAADIjAUAAJAZCwAAIDMWAABAZiwAAIDMWAAAAJmxAAAAMmMBAABkxgIAAMiMBQAAkBkLAAAgMxYAAEBmLAAAgMxYAAAAmbEAAAAyYwEAAGTGAgAAyIwFAACQGQsAACAzFgAAQGYsAACAzFgAAACZsQAAADJjAQAAZMYCAADIjAUAAJAZCwAAIDMWAABAZiwAAIDMWAAAAJmxAAAAMmMBAABkxgIAAMiMBQAAkBkLAAAgMxYAAEBmLAAAgMxYAAAAmbEAAAAyYwEAAGTGAgAAyIwFAACQGQsAACAzFgAAQGYsAACAzFgAAACZsQAAADJjAQAAZMYCAADIjAUAAJAZCwAAIDMWAABAZiwAAIDMWAAAAJmxAAAAMmMBAABkxgIAAMiMBQAAkBkLAAAgMxYAAEBmLAAAgMxYAAAAmbEAAAAyYwEAAGTGAgAAyIwFAACQGQsAACAzFgAAQGYsAACAzFgAAACZsQAAADJjAQAAZMYCAADIjAUAAJAZCwAAIDMWAABAZiwAAIDMWAAAAJmxAAAAMmMBAABkxgIAAMiMBQAAkBkLAAAgMxYAAEBmLAAAgMxYAAAAmbEAAAAyYwEAAGTGAgAAyIwFAACQGQsAACAzFgAAQGYsAACAzFgAAACZsQAAADJjAQAAZMYCAADIjAUAAJAZCwAAIDMWAABAZiwAAIDMWAAAAJmxAAAAMmMBAABkxgIAAMiMBQAAkBkLAAAgMxYAAEBmLAAAgMxYAAAAmbEAAAAyYwEAAGTGAgAAyIwFAACQGQsAACAzFgAAQGYsAACAzFgAAACZsQAAADJjAQAAZMYCAADIjAUAAJAZCwAAIDMWAABAZiwAAIDMWAAAAJmxAAAAMmMBAABkxgIAAMiMBQAAkBkLAAAgMxYAAEBmLAAAgMxYAAAAmbEAAAAyYwEAAGTGAgAAyIwFAACQGQsAACAzFgAAQGYsAACAzFgAAADZBZ+ABnUiBB9CAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/images/facebook.svg":
/*!*********************************!*\
  !*** ./src/images/facebook.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/facebook.977afd66.svg";

/***/ }),

/***/ "./src/images/link.svg":
/*!*****************************!*\
  !*** ./src/images/link.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/link.10f1db2b.svg";

/***/ }),

/***/ "./src/images/linkedin.svg":
/*!*********************************!*\
  !*** ./src/images/linkedin.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/linkedin.f5035afa.svg";

/***/ }),

/***/ "./src/images/photo1-blank.png":
/*!*************************************!*\
  !*** ./src/images/photo1-blank.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMAAAAKsCAYAAAAKrMGNAAAACXBIWXMAABYlAAAWJQFJUiTwAAAJTmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4wLWMwMDAgNzkuMjE3YmNhNiwgMjAyMS8wNi8xNC0xODoyODoxMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3OTRkOThlNS1iODZhLTk0NGUtOTgyMS02MTQ2NWZjODk2ODIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YTYyZWU3NjMtZjE3ZS0yODRjLThiZjItYjA1OTIxNzE5N2ExIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IjE0NUU2NjE3MDBDNjM1NzMxNjdFQTM5NTk3OTExQjE4IiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IiIgdGlmZjpJbWFnZVdpZHRoPSIxMjE2IiB0aWZmOkltYWdlTGVuZ3RoPSI2ODQiIHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj0iMiIgdGlmZjpTYW1wbGVzUGVyUGl4ZWw9IjMiIHRpZmY6WFJlc29sdXRpb249IjE0NC8xIiB0aWZmOllSZXNvbHV0aW9uPSIxNDQvMSIgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIgZXhpZjpFeGlmVmVyc2lvbj0iMDIzMSIgZXhpZjpDb2xvclNwYWNlPSI2NTUzNSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEyMTYiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSI2ODQiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA5LTEyVDE0OjE1OjM2KzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMS0wNFQwODozNjoxNCswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMS0wNFQwODozNjoxNCswNTozMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjY1ZDgyNGNmLTU2M2QtZDE0Yy05ZDIxLTNmOWRlOTZkYzQxMCIgc3RFdnQ6d2hlbj0iMjAyMi0xMS0wNFQwODozNjoxNCswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvanBlZyB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGltYWdlL2pwZWcgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphNjJlZTc2My1mMTdlLTI4NGMtOGJmMi1iMDU5MjE3MTk3YTEiIHN0RXZ0OndoZW49IjIwMjItMTEtMDRUMDg6MzY6MTQrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjVkODI0Y2YtNTYzZC1kMTRjLTlkMjEtM2Y5ZGU5NmRjNDEwIiBzdFJlZjpkb2N1bWVudElEPSIxNDVFNjYxNzAwQzYzNTczMTY3RUEzOTU5NzkxMUIxOCIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSIxNDVFNjYxNzAwQzYzNTczMTY3RUEzOTU5NzkxMUIxOCIvPiA8dGlmZjpCaXRzUGVyU2FtcGxlPiA8cmRmOlNlcT4gPHJkZjpsaT44PC9yZGY6bGk+IDxyZGY6bGk+ODwvcmRmOmxpPiA8cmRmOmxpPjg8L3JkZjpsaT4gPC9yZGY6U2VxPiA8L3RpZmY6Qml0c1BlclNhbXBsZT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4x5W+QAAAS0UlEQVR4nO3YQQ0AIBDAMMC/50MFIVlaBXtvz8wCAAAAgKrzOwAAAAAAXjLAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEgzwAAAAABIM8AAAAAASDPAAAAAAEi7HzQIVUFUE1MAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/images/twitter.svg":
/*!********************************!*\
  !*** ./src/images/twitter.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/twitter.59b9e758.svg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-gtm-module */ "./node_modules/react-gtm-module/dist/index.js");
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "C:\\Users\\ratnesh.s_uplers\\Local Sites\\healthcare\\app\\public\\wp-content\\themes\\healthcare-transformers\\react-src\\src\\index.js";





const tagManagerArgs = {
  gtmId: 'GTM-K6N48QV'
};
react_gtm_module__WEBPACK_IMPORTED_MODULE_2___default.a.initialize(tagManagerArgs);
const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1___default.a.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
})));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

const isLocalhost = Boolean(window.location.hostname === 'localhost' ||
// [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' ||
// 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}
function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (installingWorker == null) {
        return;
      }
      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.');

            // Execute callback
            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');

            // Execute callback
            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}
function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');
    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}
function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ratnesh.s_uplers\Local Sites\healthcare\app\public\wp-content\themes\healthcare-transformers\react-src\src\index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map