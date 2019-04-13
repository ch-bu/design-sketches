webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/grid.js":
/*!****************************!*\
  !*** ./components/grid.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-spring/renderprops.cjs */ "./node_modules/react-spring/renderprops.cjs.js");
/* harmony import */ var react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/home/christian/Repositories/design-sketches/next-website/components/grid.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  margin-top: 50vh;\n  display: grid;\n  height: 800px;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: repeat(1fr, 5);\n  grid-template-areas: \"box1 box1\"\n                       \"box2 box3\"\n                       \"box4 box5\"\n                       \"box6 box6\";\n\n  @media only screen and (min-width: 1000px) {\n    margin-top: 30vh;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-areas: \". . box1 box1\"\n                        \"box2 box3 . .\"\n                        \"box2 box4 box5 box6\";\n  }\n\n  .box1, .box2, .box3, .box4, .box5, .box6 {\n    font-size: 1.2rem;\n    color: #fff;\n    padding: 20px;\n\n    @media only screen and (min-width: 1000px) {\n      font-size: 1.8rem;\n    }\n  }\n\n  .box1 {\n    background-color: #324333;\n    grid-area: box1;\n  }\n\n  .box2 {\n    grid-area: box2;\n    background-color: #366baa;\n  }\n\n  .box3 {\n    grid-area: box3;\n    background-color: #6baa36;\n  }\n\n  .box4 {\n    grid-area: box4;\n    background-color: #d2d49a;\n  }\n\n  .box5 {\n    grid-area: box5;\n    background-color: #666666;\n  }\n\n  .box6 {\n    grid-area: box6;\n    background-color: #53832a;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Grid = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject());

var GridContainer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(GridContainer, _React$Component);

  function GridContainer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GridContainer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GridContainer).call(this, props));
    _this.state = {
      visible: null
    };
    _this.onChangeVisibility = _this.onChangeVisibility.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GridContainer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10___default.a, {
        active: !this.state.visible,
        onChange: this.onChangeVisibility,
        partialVisibility: true,
        offset: {
          top: 100
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, function (_ref) {
        var isVisible = _ref.isVisible;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_9__["Spring"], {
          delay: 300,
          to: {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(600px)"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, function (props) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            style: props,
            className: "box1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          }, "The best gras ever");
        });
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "When do seed!"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Smell it"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }));
    }
  }, {
    key: "onChangeVisibility",
    value: function onChangeVisibility(isVisible) {
      this.setState({
        visible: isVisible
      });
    }
  }]);

  return GridContainer;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (GridContainer);

/***/ })

})
//# sourceMappingURL=index.js.92849b1d3bd810e1e4c2.hot-update.js.map