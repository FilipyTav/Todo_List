/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/todo.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/todo.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n    box-sizing: border-box;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n\n    overflow: auto;\n}\n\nbutton {\n    border: none;\n    cursor: pointer;\n}\n\nbutton,\nlabel {\n    font-weight: bold;\n}\n\n/* modal and overlay start */\n\n#modal_add_book {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    transition: 200ms ease-in-out;\n\n    z-index: 10;\n}\n\n#modal_add_book.active {\n    transform: translate(-50%, -50%) scale(1);\n}\n\n#overlay {\n    opacity: 0;\n    position: fixed;\n    transition: 200ms ease-in-out;\n\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgb(0, 0, 0, 0.7);\n    pointer-events: none;\n}\n\n#overlay.active {\n    pointer-events: all;\n    opacity: 1;\n}\n\n/* modal and overlay end */\n\n/* add todo form start */\n\n.todo_inputs {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 10px;\n    width: 60vw;\n\n    background: rgb(202, 150, 202);\n    padding: 15px;\n    border-radius: 15px;\n}\n\n.input_container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 30px;\n}\n\n.input_container textarea {\n    resize: none;\n}\n\n.priority {\n    justify-content: flex-end;\n}\n\n.priority button {\n    background: aqua;\n    border-radius: 20px;\n    cursor: default;\n\n    padding: 10px 30px;\n}\n\n.submit_btn {\n    margin: 15px auto 0 auto;\n}\n\n.submit_btn button {\n    padding: 5px 15px;\n    border-radius: 10px;\n\n    background: lightblue;\n}\n\n/* add todo form end */\n\n/* todos container and items start */\n\n.todos {\n    background: #280828;\n    padding: 20px;\n\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 20px;\n\n    overflow: auto;\n}\n\n.todo {\n    color: mistyrose;\n    background: rebeccapurple;\n    padding: 5px 10px;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.todo:hover {\n    background: rgb(153, 109, 197);\n}\n\n.todo > .title {\n    font-size: 1.3rem;\n    user-select: none;\n}\n\n.todo .remove_todo {\n    padding: 0 5px;\n    background: none;\n    user-select: none;\n\n    font-size: 1.5rem;\n}\n\n/* todos container and items end */\n\n/* menu start */\n\n.menu {\n    background: mistyrose;\n    padding: 20px;\n\n    position: sticky;\n    top: 0;\n\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: center;\n    gap: 20px;\n}\n\n.projects {\n    display: flex;\n    flex-flow: column wrap;\n}\n\n.project {\n    background: rgb(247, 217, 247);\n    width: 100%;\n    padding: 10px 30px;\n    border-top: 1px solid purple;\n\n    font-size: 1.5rem;\n    font-weight: normal;\n    cursor: default;\n}\n\n.project:hover {\n    background: rgb(240, 193, 240);\n}\n\n.projects .project:last-child {\n    border-bottom: 1px solid purple;\n}\n\n/* menu end */\n", "",{"version":3,"sources":["webpack://./src/css/todo.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,8BAA8B;;IAE9B,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA,4BAA4B;;AAE5B;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,yCAAyC;IACzC,6BAA6B;;IAE7B,WAAW;AACf;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,UAAU;IACV,eAAe;IACf,6BAA6B;;IAE7B,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,6BAA6B;IAC7B,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;IACnB,UAAU;AACd;;AAEA,0BAA0B;;AAE1B,wBAAwB;;AAExB;IACI,aAAa;IACb,wBAAwB;IACxB,SAAS;IACT,WAAW;;IAEX,8BAA8B;IAC9B,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;;IAEf,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;;IAEnB,qBAAqB;AACzB;;AAEA,sBAAsB;;AAEtB,oCAAoC;;AAEpC;IACI,mBAAmB;IACnB,aAAa;;IAEb,aAAa;IACb,wBAAwB;IACxB,SAAS;;IAET,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,iBAAiB;;IAEjB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,iBAAiB;;IAEjB,iBAAiB;AACrB;;AAEA,kCAAkC;;AAElC,eAAe;;AAEf;IACI,qBAAqB;IACrB,aAAa;;IAEb,gBAAgB;IAChB,MAAM;;IAEN,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;IAC9B,WAAW;IACX,kBAAkB;IAClB,4BAA4B;;IAE5B,iBAAiB;IACjB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,+BAA+B;AACnC;;AAEA,aAAa","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n    box-sizing: border-box;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n\n    overflow: auto;\n}\n\nbutton {\n    border: none;\n    cursor: pointer;\n}\n\nbutton,\nlabel {\n    font-weight: bold;\n}\n\n/* modal and overlay start */\n\n#modal_add_book {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    transition: 200ms ease-in-out;\n\n    z-index: 10;\n}\n\n#modal_add_book.active {\n    transform: translate(-50%, -50%) scale(1);\n}\n\n#overlay {\n    opacity: 0;\n    position: fixed;\n    transition: 200ms ease-in-out;\n\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgb(0, 0, 0, 0.7);\n    pointer-events: none;\n}\n\n#overlay.active {\n    pointer-events: all;\n    opacity: 1;\n}\n\n/* modal and overlay end */\n\n/* add todo form start */\n\n.todo_inputs {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 10px;\n    width: 60vw;\n\n    background: rgb(202, 150, 202);\n    padding: 15px;\n    border-radius: 15px;\n}\n\n.input_container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 30px;\n}\n\n.input_container textarea {\n    resize: none;\n}\n\n.priority {\n    justify-content: flex-end;\n}\n\n.priority button {\n    background: aqua;\n    border-radius: 20px;\n    cursor: default;\n\n    padding: 10px 30px;\n}\n\n.submit_btn {\n    margin: 15px auto 0 auto;\n}\n\n.submit_btn button {\n    padding: 5px 15px;\n    border-radius: 10px;\n\n    background: lightblue;\n}\n\n/* add todo form end */\n\n/* todos container and items start */\n\n.todos {\n    background: #280828;\n    padding: 20px;\n\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 20px;\n\n    overflow: auto;\n}\n\n.todo {\n    color: mistyrose;\n    background: rebeccapurple;\n    padding: 5px 10px;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.todo:hover {\n    background: rgb(153, 109, 197);\n}\n\n.todo > .title {\n    font-size: 1.3rem;\n    user-select: none;\n}\n\n.todo .remove_todo {\n    padding: 0 5px;\n    background: none;\n    user-select: none;\n\n    font-size: 1.5rem;\n}\n\n/* todos container and items end */\n\n/* menu start */\n\n.menu {\n    background: mistyrose;\n    padding: 20px;\n\n    position: sticky;\n    top: 0;\n\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: center;\n    gap: 20px;\n}\n\n.projects {\n    display: flex;\n    flex-flow: column wrap;\n}\n\n.project {\n    background: rgb(247, 217, 247);\n    width: 100%;\n    padding: 10px 30px;\n    border-top: 1px solid purple;\n\n    font-size: 1.5rem;\n    font-weight: normal;\n    cursor: default;\n}\n\n.project:hover {\n    background: rgb(240, 193, 240);\n}\n\n.projects .project:last-child {\n    border-bottom: 1px solid purple;\n}\n\n/* menu end */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/todo.css":
/*!**************************!*\
  !*** ./src/css/todo.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./todo.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/todo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Helpers": () => (/* binding */ Helpers)
/* harmony export */ });
/* harmony import */ var _new_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new_todo */ "./src/js/new_todo.js");


const Helpers = (function () {
    const add_to_DOM = function (parent, child, placement) {
        if (
            !(placement === "first" || placement === "last") ||
            !parent ||
            !child
        )
            return;

        if (placement === "first") {
            parent.prepend(child);
        } else {
            parent.append(child);
        }
    };

    const purge_all_children = function (parent) {
        if (!parent) return;

        while (parent.lastChild) {
            parent.removeChild(parent.lastChild);
        }
    };

    const create_DOM = function (type, ...classes) {
        if (!type) return;

        const element = document.createElement(type);

        if (classes) {
            // TIL you cant use the word class for a variable
            classes.forEach((clas) => {
                element.classList.add(clas);
            });
        }

        return element;
    };

    const create_project = function (title, id) {
        if (!title) return;

        const project = (function () {
            return {
                name: title,
                todos: [],
            };
        })();

        _new_todo__WEBPACK_IMPORTED_MODULE_0__.projects.push(project);
    };

    const create_todo = function (name) {
        if (!name) return;

        const all_todos = document.querySelector(".todos");

        const todo = Helpers.create_DOM("div", "todo");
        Helpers.add_to_DOM(all_todos, todo, "last");

        const title = Helpers.create_DOM("div", "title");
        title.textContent = `${name}`;
        Helpers.add_to_DOM(todo, title, "first");

        const options = Helpers.create_DOM("div", "options");
        Helpers.add_to_DOM(todo, options, "last");

        const rmv_btn = Helpers.create_DOM("button", "remove_todo");
        rmv_btn.innerHTML = "&times;";
        Helpers.add_to_DOM(options, rmv_btn, "last");
    };

    return {
        add_to_DOM,
        purge_all_children,
        create_DOM,
        create_todo,
        create_project,
    };
})();




/***/ }),

/***/ "./src/js/manage_buttons.js":
/*!**********************************!*\
  !*** ./src/js/manage_buttons.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Manage_buttons": () => (/* binding */ Manage_buttons)
/* harmony export */ });
/* harmony import */ var _render_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render_page */ "./src/js/render_page.js");


const Manage_buttons = (function () {
    const projs = function () {
        const buttons = document.querySelectorAll(".project");

        buttons.forEach((button) => {
            button.addEventListener("click", (e) => {
                (0,_render_page__WEBPACK_IMPORTED_MODULE_0__.render_page)(e.target.textContent);
            });
        });
    };

    return {
        projs,
    };
})();




/***/ }),

/***/ "./src/js/modal_popup.js":
/*!*******************************!*\
  !*** ./src/js/modal_popup.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "manage_modal": () => (/* binding */ manage_modal)
/* harmony export */ });
const manage_modal = function () {
    const open_modal_button = document.querySelector("[data_open_modal]");

    const overlay = document.querySelector("#overlay");

    overlay.addEventListener("click", () => {
        const modal = document.querySelector("#modal_add_book.active");

        close_modal(modal);
    });

    open_modal_button.addEventListener("click", () => {
        const modal = document.querySelector("#modal_add_book");

        open_modal(modal);
    });

    function open_modal(modal) {
        if (!modal) return;

        modal.classList.add("active");
        overlay.classList.add("active");
    }

    function close_modal(modal) {
        if (!modal) return;

        modal.classList.remove("active");
        overlay.classList.remove("active");
    }
};




/***/ }),

/***/ "./src/js/new_todo.js":
/*!****************************!*\
  !*** ./src/js/new_todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");


let projects = [
    // {
    //     name: "proj1",
    //     todos: [],
    // },
    // {
    //     name: "proj2",
    //     todos: [],
    // },
];

const Todo = function (title, description, due_date, priority) {
    const prototype = (function () {
        const add_to = function (pj) {
            projects.forEach((proj) => {
                if (proj.name === pj) {
                    if (!proj.todos.includes(this)) {
                        proj.todos.push(this);
                    }
                }
            });
        };

        return {
            add_to,
        };
    })();

    ////

    return Object.assign(Object.create(prototype), {
        title,
        description,
        due_date,
        priority,
    });
};




/***/ }),

/***/ "./src/js/render_page.js":
/*!*******************************!*\
  !*** ./src/js/render_page.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render_page": () => (/* binding */ render_page)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");
/* harmony import */ var _manage_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage_buttons */ "./src/js/manage_buttons.js");
/* harmony import */ var _new_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new_todo */ "./src/js/new_todo.js");




const render_page = function (pj) {
    const todos = document.querySelector(".todos");
    _helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.purge_all_children(todos);

    const projs = document.querySelector(".projects");
    _helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.purge_all_children(projs);

    const home = _helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.create_DOM("button", "project");
    home.textContent = "Home";
    _helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.add_to_DOM(projs, home, "first");

    const render_projects = function (p) {
        const proj = _helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.create_DOM("button", "project");
        proj.textContent = `${p.name}`;
        _helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.add_to_DOM(projs, proj, "last");
    };

    if (pj === "Home") {
        _new_todo__WEBPACK_IMPORTED_MODULE_2__.projects.forEach((project) => {
            render_projects(project);
            project.todos.forEach((todo) => {
                _helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.create_todo(todo.title);
            });
        });
    } else {
        _new_todo__WEBPACK_IMPORTED_MODULE_2__.projects.forEach((project) => {
            render_projects(project);
            if (!(pj === project.name)) return;

            project.todos.forEach((todo) => {
                _helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.create_todo(todo.title);
            });
        });
    }

    _manage_buttons__WEBPACK_IMPORTED_MODULE_1__.Manage_buttons.projs();
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_todo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/todo.css */ "./src/css/todo.css");
/* harmony import */ var _new_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new_todo */ "./src/js/new_todo.js");
/* harmony import */ var _render_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render_page */ "./src/js/render_page.js");
/* harmony import */ var _modal_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal_popup */ "./src/js/modal_popup.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");






const init = (function () {
    (0,_modal_popup__WEBPACK_IMPORTED_MODULE_3__.manage_modal)();

    _helpers__WEBPACK_IMPORTED_MODULE_4__.Helpers.create_project("Project1", 1);
    _helpers__WEBPACK_IMPORTED_MODULE_4__.Helpers.create_project("Project2", 2);

    let a = (0,_new_todo__WEBPACK_IMPORTED_MODULE_1__.Todo)("a", "cool", "now", "medium");
    a.add_to("Project1");

    let b = (0,_new_todo__WEBPACK_IMPORTED_MODULE_1__.Todo)("b");
    b.add_to("Project2");

    let c = (0,_new_todo__WEBPACK_IMPORTED_MODULE_1__.Todo)("c", "Very cool", "not now");
    c.add_to("Project2");

    console.log(_new_todo__WEBPACK_IMPORTED_MODULE_1__.projects);
    (0,_render_page__WEBPACK_IMPORTED_MODULE_2__.render_page)("Home");
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3hCOztBQUV1Qjs7Ozs7OztVQzFDdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeUI7QUFDZ0M7QUFDYjtBQUNDO0FBQ1Q7O0FBRXBDO0FBQ0EsSUFBSSwwREFBWTs7QUFFaEIsSUFBSSw0REFBc0I7QUFDMUIsSUFBSSw0REFBc0I7O0FBRTFCLFlBQVksK0NBQUk7QUFDaEI7O0FBRUEsWUFBWSwrQ0FBSTtBQUNoQjs7QUFFQSxZQUFZLCtDQUFJO0FBQ2hCOztBQUVBLGdCQUFnQiwrQ0FBUTtBQUN4QixJQUFJLHlEQUFXO0FBQ2YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9jc3MvdG9kby5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvY3NzL3RvZG8uY3NzP2U4NDEiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvanMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvanMvbWFuYWdlX2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2pzL21vZGFsX3BvcHVwLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9qcy9uZXdfdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvanMvcmVuZGVyX3BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcblxcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbixcXG5sYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBtb2RhbCBhbmQgb3ZlcmxheSBzdGFydCAqL1xcblxcbiNtb2RhbF9hZGRfYm9vayB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcblxcbiAgICB6LWluZGV4OiAxMDtcXG59XFxuXFxuI21vZGFsX2FkZF9ib29rLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbn1cXG5cXG4jb3ZlcmxheSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDAsIDAuNyk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jb3ZlcmxheS5hY3RpdmUge1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiBtb2RhbCBhbmQgb3ZlcmxheSBlbmQgKi9cXG5cXG4vKiBhZGQgdG9kbyBmb3JtIHN0YXJ0ICovXFxuXFxuLnRvZG9faW5wdXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiA2MHZ3O1xcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjAyLCAxNTAsIDIwMik7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5pbnB1dF9jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLmlucHV0X2NvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnByaW9yaXR5IGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IGFxdWE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG5cXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcbn1cXG5cXG4uc3VibWl0X2J0biB7XFxuICAgIG1hcmdpbjogMTVweCBhdXRvIDAgYXV0bztcXG59XFxuXFxuLnN1Ym1pdF9idG4gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLyogYWRkIHRvZG8gZm9ybSBlbmQgKi9cXG5cXG4vKiB0b2RvcyBjb250YWluZXIgYW5kIGl0ZW1zIHN0YXJ0ICovXFxuXFxuLnRvZG9zIHtcXG4gICAgYmFja2dyb3VuZDogIzI4MDgyODtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIGNvbG9yOiBtaXN0eXJvc2U7XFxuICAgIGJhY2tncm91bmQ6IHJlYmVjY2FwdXJwbGU7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE1MywgMTA5LCAxOTcpO1xcbn1cXG5cXG4udG9kbyA+IC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRvZG8gLnJlbW92ZV90b2RvIHtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcblxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLyogdG9kb3MgY29udGFpbmVyIGFuZCBpdGVtcyBlbmQgKi9cXG5cXG4vKiBtZW51IHN0YXJ0ICovXFxuXFxuLm1lbnUge1xcbiAgICBiYWNrZ3JvdW5kOiBtaXN0eXJvc2U7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ3LCAyMTcsIDI0Nyk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBwdXJwbGU7XFxuXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI0MCwgMTkzLCAyNDApO1xcbn1cXG5cXG4ucHJvamVjdHMgLnByb2plY3Q6bGFzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBwdXJwbGU7XFxufVxcblxcbi8qIG1lbnUgZW5kICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy90b2RvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhOztJQUViLGFBQWE7SUFDYiw4QkFBOEI7O0lBRTlCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUEsNEJBQTRCOztBQUU1QjtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULHlDQUF5QztJQUN6Qyw2QkFBNkI7O0lBRTdCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsNkJBQTZCOztJQUU3QixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsNkJBQTZCO0lBQzdCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUEsMEJBQTBCOztBQUUxQix3QkFBd0I7O0FBRXhCO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1QsV0FBVzs7SUFFWCw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7O0lBRWYsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjs7SUFFbkIscUJBQXFCO0FBQ3pCOztBQUVBLHNCQUFzQjs7QUFFdEIsb0NBQW9DOztBQUVwQztJQUNJLG1CQUFtQjtJQUNuQixhQUFhOztJQUViLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsU0FBUzs7SUFFVCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixpQkFBaUI7O0lBRWpCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCOztJQUVqQixpQkFBaUI7QUFDckI7O0FBRUEsa0NBQWtDOztBQUVsQyxlQUFlOztBQUVmO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7O0lBRWIsZ0JBQWdCO0lBQ2hCLE1BQU07O0lBRU4sYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDRCQUE0Qjs7SUFFNUIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBLGFBQWFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uLFxcbmxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIG1vZGFsIGFuZCBvdmVybGF5IHN0YXJ0ICovXFxuXFxuI21vZGFsX2FkZF9ib29rIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4jbW9kYWxfYWRkX2Jvb2suYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG5cXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCwgMC43KTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNvdmVybGF5LmFjdGl2ZSB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIG1vZGFsIGFuZCBvdmVybGF5IGVuZCAqL1xcblxcbi8qIGFkZCB0b2RvIGZvcm0gc3RhcnQgKi9cXG5cXG4udG9kb19pbnB1dHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDYwdnc7XFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYigyMDIsIDE1MCwgMjAyKTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLmlucHV0X2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uaW5wdXRfY29udGFpbmVyIHRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucHJpb3JpdHkgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogYXF1YTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcblxcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxufVxcblxcbi5zdWJtaXRfYnRuIHtcXG4gICAgbWFyZ2luOiAxNXB4IGF1dG8gMCBhdXRvO1xcbn1cXG5cXG4uc3VibWl0X2J0biBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xcbn1cXG5cXG4vKiBhZGQgdG9kbyBmb3JtIGVuZCAqL1xcblxcbi8qIHRvZG9zIGNvbnRhaW5lciBhbmQgaXRlbXMgc3RhcnQgKi9cXG5cXG4udG9kb3Mge1xcbiAgICBiYWNrZ3JvdW5kOiAjMjgwODI4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMjBweDtcXG5cXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi50b2RvIHtcXG4gICAgY29sb3I6IG1pc3R5cm9zZTtcXG4gICAgYmFja2dyb3VuZDogcmViZWNjYXB1cnBsZTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTUzLCAxMDksIDE5Nyk7XFxufVxcblxcbi50b2RvID4gLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udG9kbyAucmVtb3ZlX3RvZG8ge1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4vKiB0b2RvcyBjb250YWluZXIgYW5kIGl0ZW1zIGVuZCAqL1xcblxcbi8qIG1lbnUgc3RhcnQgKi9cXG5cXG4ubWVudSB7XFxuICAgIGJhY2tncm91bmQ6IG1pc3R5cm9zZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNDcsIDIxNywgMjQ3KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHB1cnBsZTtcXG5cXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQwLCAxOTMsIDI0MCk7XFxufVxcblxcbi5wcm9qZWN0cyAucHJvamVjdDpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHB1cnBsZTtcXG59XFxuXFxuLyogbWVudSBlbmQgKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG8uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBUb2RvLCBwcm9qZWN0cyB9IGZyb20gXCIuL25ld190b2RvXCI7XG5cbmNvbnN0IEhlbHBlcnMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFkZF90b19ET00gPSBmdW5jdGlvbiAocGFyZW50LCBjaGlsZCwgcGxhY2VtZW50KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICEocGxhY2VtZW50ID09PSBcImZpcnN0XCIgfHwgcGxhY2VtZW50ID09PSBcImxhc3RcIikgfHxcbiAgICAgICAgICAgICFwYXJlbnQgfHxcbiAgICAgICAgICAgICFjaGlsZFxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgaWYgKHBsYWNlbWVudCA9PT0gXCJmaXJzdFwiKSB7XG4gICAgICAgICAgICBwYXJlbnQucHJlcGVuZChjaGlsZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBwdXJnZV9hbGxfY2hpbGRyZW4gPSBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgIGlmICghcGFyZW50KSByZXR1cm47XG5cbiAgICAgICAgd2hpbGUgKHBhcmVudC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVfRE9NID0gZnVuY3Rpb24gKHR5cGUsIC4uLmNsYXNzZXMpIHtcbiAgICAgICAgaWYgKCF0eXBlKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cbiAgICAgICAgaWYgKGNsYXNzZXMpIHtcbiAgICAgICAgICAgIC8vIFRJTCB5b3UgY2FudCB1c2UgdGhlIHdvcmQgY2xhc3MgZm9yIGEgdmFyaWFibGVcbiAgICAgICAgICAgIGNsYXNzZXMuZm9yRWFjaCgoY2xhcykgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZV9wcm9qZWN0ID0gZnVuY3Rpb24gKHRpdGxlLCBpZCkge1xuICAgICAgICBpZiAoIXRpdGxlKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgcHJvamVjdCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRpdGxlLFxuICAgICAgICAgICAgICAgIHRvZG9zOiBbXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlX3RvZG8gPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBpZiAoIW5hbWUpIHJldHVybjtcblxuICAgICAgICBjb25zdCBhbGxfdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zXCIpO1xuXG4gICAgICAgIGNvbnN0IHRvZG8gPSBIZWxwZXJzLmNyZWF0ZV9ET00oXCJkaXZcIiwgXCJ0b2RvXCIpO1xuICAgICAgICBIZWxwZXJzLmFkZF90b19ET00oYWxsX3RvZG9zLCB0b2RvLCBcImxhc3RcIik7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBIZWxwZXJzLmNyZWF0ZV9ET00oXCJkaXZcIiwgXCJ0aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtuYW1lfWA7XG4gICAgICAgIEhlbHBlcnMuYWRkX3RvX0RPTSh0b2RvLCB0aXRsZSwgXCJmaXJzdFwiKTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0gSGVscGVycy5jcmVhdGVfRE9NKFwiZGl2XCIsIFwib3B0aW9uc1wiKTtcbiAgICAgICAgSGVscGVycy5hZGRfdG9fRE9NKHRvZG8sIG9wdGlvbnMsIFwibGFzdFwiKTtcblxuICAgICAgICBjb25zdCBybXZfYnRuID0gSGVscGVycy5jcmVhdGVfRE9NKFwiYnV0dG9uXCIsIFwicmVtb3ZlX3RvZG9cIik7XG4gICAgICAgIHJtdl9idG4uaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG4gICAgICAgIEhlbHBlcnMuYWRkX3RvX0RPTShvcHRpb25zLCBybXZfYnRuLCBcImxhc3RcIik7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZF90b19ET00sXG4gICAgICAgIHB1cmdlX2FsbF9jaGlsZHJlbixcbiAgICAgICAgY3JlYXRlX0RPTSxcbiAgICAgICAgY3JlYXRlX3RvZG8sXG4gICAgICAgIGNyZWF0ZV9wcm9qZWN0LFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgeyBIZWxwZXJzIH07XG4iLCJpbXBvcnQgeyByZW5kZXJfcGFnZSB9IGZyb20gXCIuL3JlbmRlcl9wYWdlXCI7XG5cbmNvbnN0IE1hbmFnZV9idXR0b25zID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwcm9qcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcblxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlbmRlcl9wYWdlKGUudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvanMsXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IE1hbmFnZV9idXR0b25zIH07XG4iLCJjb25zdCBtYW5hZ2VfbW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgb3Blbl9tb2RhbF9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGFfb3Blbl9tb2RhbF1cIik7XG5cbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVybGF5XCIpO1xuXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWxfYWRkX2Jvb2suYWN0aXZlXCIpO1xuXG4gICAgICAgIGNsb3NlX21vZGFsKG1vZGFsKTtcbiAgICB9KTtcblxuICAgIG9wZW5fbW9kYWxfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbF9hZGRfYm9va1wiKTtcblxuICAgICAgICBvcGVuX21vZGFsKG1vZGFsKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG9wZW5fbW9kYWwobW9kYWwpIHtcbiAgICAgICAgaWYgKCFtb2RhbCkgcmV0dXJuO1xuXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZV9tb2RhbChtb2RhbCkge1xuICAgICAgICBpZiAoIW1vZGFsKSByZXR1cm47XG5cbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IG1hbmFnZV9tb2RhbCB9O1xuIiwiaW1wb3J0IHsgSGVscGVycyB9IGZyb20gXCIuL2hlbHBlcnNcIjtcblxubGV0IHByb2plY3RzID0gW1xuICAgIC8vIHtcbiAgICAvLyAgICAgbmFtZTogXCJwcm9qMVwiLFxuICAgIC8vICAgICB0b2RvczogW10sXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICAgIG5hbWU6IFwicHJvajJcIixcbiAgICAvLyAgICAgdG9kb3M6IFtdLFxuICAgIC8vIH0sXG5dO1xuXG5jb25zdCBUb2RvID0gZnVuY3Rpb24gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlX2RhdGUsIHByaW9yaXR5KSB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgYWRkX3RvID0gZnVuY3Rpb24gKHBqKSB7XG4gICAgICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2oubmFtZSA9PT0gcGopIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcm9qLnRvZG9zLmluY2x1ZGVzKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qLnRvZG9zLnB1c2godGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkX3RvLFxuICAgICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICAvLy8vXG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKHByb3RvdHlwZSksIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVfZGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgfSk7XG59O1xuXG5leHBvcnQgeyBUb2RvLCBwcm9qZWN0cyB9O1xuIiwiaW1wb3J0IHsgSGVscGVycyB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCB7IE1hbmFnZV9idXR0b25zIH0gZnJvbSBcIi4vbWFuYWdlX2J1dHRvbnNcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vbmV3X3RvZG9cIjtcblxuY29uc3QgcmVuZGVyX3BhZ2UgPSBmdW5jdGlvbiAocGopIHtcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3NcIik7XG4gICAgSGVscGVycy5wdXJnZV9hbGxfY2hpbGRyZW4odG9kb3MpO1xuXG4gICAgY29uc3QgcHJvanMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuICAgIEhlbHBlcnMucHVyZ2VfYWxsX2NoaWxkcmVuKHByb2pzKTtcblxuICAgIGNvbnN0IGhvbWUgPSBIZWxwZXJzLmNyZWF0ZV9ET00oXCJidXR0b25cIiwgXCJwcm9qZWN0XCIpO1xuICAgIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBIZWxwZXJzLmFkZF90b19ET00ocHJvanMsIGhvbWUsIFwiZmlyc3RcIik7XG5cbiAgICBjb25zdCByZW5kZXJfcHJvamVjdHMgPSBmdW5jdGlvbiAocCkge1xuICAgICAgICBjb25zdCBwcm9qID0gSGVscGVycy5jcmVhdGVfRE9NKFwiYnV0dG9uXCIsIFwicHJvamVjdFwiKTtcbiAgICAgICAgcHJvai50ZXh0Q29udGVudCA9IGAke3AubmFtZX1gO1xuICAgICAgICBIZWxwZXJzLmFkZF90b19ET00ocHJvanMsIHByb2osIFwibGFzdFwiKTtcbiAgICB9O1xuXG4gICAgaWYgKHBqID09PSBcIkhvbWVcIikge1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICByZW5kZXJfcHJvamVjdHMocHJvamVjdCk7XG4gICAgICAgICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICBIZWxwZXJzLmNyZWF0ZV90b2RvKHRvZG8udGl0bGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIHJlbmRlcl9wcm9qZWN0cyhwcm9qZWN0KTtcbiAgICAgICAgICAgIGlmICghKHBqID09PSBwcm9qZWN0Lm5hbWUpKSByZXR1cm47XG5cbiAgICAgICAgICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgICAgIEhlbHBlcnMuY3JlYXRlX3RvZG8odG9kby50aXRsZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgTWFuYWdlX2J1dHRvbnMucHJvanMoKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlcl9wYWdlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi4vY3NzL3RvZG8uY3NzXCI7XG5pbXBvcnQgeyBUb2RvLCBwcm9qZWN0cywgY3JlYXRlX3RvZG8gfSBmcm9tIFwiLi9uZXdfdG9kb1wiO1xuaW1wb3J0IHsgcmVuZGVyX3BhZ2UgfSBmcm9tIFwiLi9yZW5kZXJfcGFnZVwiO1xuaW1wb3J0IHsgbWFuYWdlX21vZGFsIH0gZnJvbSBcIi4vbW9kYWxfcG9wdXBcIjtcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmNvbnN0IGluaXQgPSAoZnVuY3Rpb24gKCkge1xuICAgIG1hbmFnZV9tb2RhbCgpO1xuXG4gICAgSGVscGVycy5jcmVhdGVfcHJvamVjdChcIlByb2plY3QxXCIsIDEpO1xuICAgIEhlbHBlcnMuY3JlYXRlX3Byb2plY3QoXCJQcm9qZWN0MlwiLCAyKTtcblxuICAgIGxldCBhID0gVG9kbyhcImFcIiwgXCJjb29sXCIsIFwibm93XCIsIFwibWVkaXVtXCIpO1xuICAgIGEuYWRkX3RvKFwiUHJvamVjdDFcIik7XG5cbiAgICBsZXQgYiA9IFRvZG8oXCJiXCIpO1xuICAgIGIuYWRkX3RvKFwiUHJvamVjdDJcIik7XG5cbiAgICBsZXQgYyA9IFRvZG8oXCJjXCIsIFwiVmVyeSBjb29sXCIsIFwibm90IG5vd1wiKTtcbiAgICBjLmFkZF90byhcIlByb2plY3QyXCIpO1xuXG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgIHJlbmRlcl9wYWdlKFwiSG9tZVwiKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=