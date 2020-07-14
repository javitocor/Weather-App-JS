/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../images/summer.jpg */ "./src/images/summer.jpg");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../images/sunset.jpg */ "./src/images/sunset.jpg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "#main {\r\n  display: block;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  background-position-y: 100%;\r\n  height: 80vh;\r\n}\r\n\r\n#image {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-size: cover;\r\n  background-position-y: 100%;\r\n  height: 75vh;\r\n}\r\n\r\n#section {\r\n  display: none;\r\n  height: 80vh;\r\n}\r\n\r\n#temp,\r\n#feel,\r\n#desc,\r\n#pressure,\r\n#humidity,\r\n#minTemp,\r\n#maxTemp,\r\n#wind,\r\n#windDir,\r\n#clouds,\r\n#sunrise,\r\n#sunset {\r\n  background-color: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n#home {\r\n  cursor: pointer;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/images/summer.jpg":
/*!*******************************!*\
  !*** ./src/images/summer.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "025fab35f0783766510c70c14bac33b6.jpg");

/***/ }),

/***/ "./src/images/sunset.jpg":
/*!*******************************!*\
  !*** ./src/images/sunset.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6dc4a6844d690975a6189296f8cc54ee.jpg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/dom */ "./src/js/dom.js");
/* harmony import */ var _js_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/events */ "./src/js/events.js");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_style_css__WEBPACK_IMPORTED_MODULE_2__);




const event = Object(_js_events__WEBPACK_IMPORTED_MODULE_1__["events"])();

const submit = document.getElementById('submit');
submit.addEventListener('click', event.getSearch.bind(undefined, 'search'));

const submit2 = document.getElementById('submit2');
submit2.addEventListener('click', event.getForecast.bind(undefined));

const search2 = document.getElementById('search2');
search2.addEventListener('click', event.getSearch.bind(undefined, 'searchBar'));

const home = document.getElementById('home');
home.addEventListener('click', () => { Object(_js_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])().show('aaa'); });


/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/*! exports provided: dom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");
/* eslint-disable no-useless-concat */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */


const dom = function dom() {
  function show(value) {
    switch (true) {
      case value === 'search':
        document.getElementById('main').style.display = 'none';
        document.getElementById('section').style.display = 'block';
        document.getElementById('section2').style.display = 'none';
        break;
      case value === 'forecast':
        document.getElementById('main').style.display = 'none';
        document.getElementById('section').style.display = 'none';
        document.getElementById('section2').style.display = 'block';
        break;
      default:
        document.getElementById('main').style.display = 'block';
        document.getElementById('section').style.display = 'none';
        document.getElementById('section2').style.display = 'none';
        break;
    }
  }

  function fillCard(data) {
    const data2 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().getTemp(data);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('title', `${data.name}, ${data.sys.country}`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('temp', `<i class="fas fa-thermometer-half text-warning my-2"></i> Temp: ${data2.tempC} Celsius`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('feel', `<i class="fas fa-meteor text-warning my-2"></i> Feel: ${data2.tempFeelC} Celsius`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('desc', `<i class="fas fa-cloud-sun-rain text-warning my-2"></i> ${data.weather[0].main}`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('pressure', `<i class="fas fa-compress-arrows-alt text-warning my-2"></i> Pressure: ${data.main.pressure} hPa`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('humidity', `<i class="fas fa-percent text-warning my-2"></i> Humidity: ${data.main.humidity}%`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('minTemp', `<i class="fas fa-temperature-low text-warning my-2"></i> Min: ${data2.tempMinC} Celsius`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('maxTemp', `<i class="fas fa-temperature-high text-warning my-2"></i> Max: ${data2.tempMaxC} Celsius`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('wind', `<i class="fas fa-wind text-warning my-2"></i> ${data.wind.speed} meter/sec`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('windDir', `<i class="fas fa-compass text-warning my-2"></i> ${data.wind.deg} degrees`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('clouds', `<i class="fas fa-cloud text-warning my-2"></i> Clouds: ${data.clouds.all}%`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('sunrise', '<i class="fas fa-sun text-warning my-2"></i> ' + `Sunrise: ${new Date((data.sys.sunrise + data.timezone) * 1000).toUTCString().slice(-11, -7)} AM`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('sunset', '<i class="fas fa-sun text-warning my-2"></i> ' + `Sunset: ${new Date((data.sys.sunset + data.timezone) * 1000).toUTCString().slice(-11, -7)} PM`);
  }

  function imageSwitch(data, id) {
    const code = data.weather[0].id;
    switch (true) {
      case code >= 200 && code <= 232:
        document.getElementById(id).style.backgroundImage = "url('../src/images/lighting.jpg')";
        break;
      case code >= 300 && code <= 321:
        document.getElementById(id).style.backgroundImage = "url('../src/images/drizzle.jpg')";
        break;
      case code >= 500 && code <= 531:
        document.getElementById(id).style.backgroundImage = "url('../src/images/rain.jpg')";
        break;
      case code >= 600 && code <= 622:
        document.getElementById(id).style.backgroundImage = "url('../src/images/snow.jpg')";
        break;
      case code >= 701 && code <= 781:
        document.getElementById(id).style.backgroundImage = "url('../src/images/mist.jpg')";
        break;
      case code >= 801 && code <= 804:
        document.getElementById(id).style.backgroundImage = "url('../src/images/rainclouds.jpg')";
        break;
      case code === 800:
        document.getElementById(id).style.backgroundImage = "url('../src/images/shiningsun.jpg')";
        break;
      default:
        document.getElementById(id).style.backgroundImage = "url('../src/images/bluesky.jpg')";
        break;
    }
  }

  function clearForms() {
    document.getElementById('searching').reset();
    document.getElementById('navSearch').reset();
  }

  function createCard(data) {
    const name = document.getElementById('cityName');
    name.innerHTML = `${data.city.name}, ${data.city.country}`;
    const row = document.getElementById('row');
    row.innerHTML = '';
    const forecastFive = data.list.filter((value, index) => index % 8 === 0);
    forecastFive.forEach((day, index) => {
      const cont = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElement('div', 'col-5');
      const card = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElement('div', 'card bg-dark text-white w-100 mb-2 mx-2');
      const imgBg = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElement('div', '');
      imgBg.id = 'images' + `${index + 1}`;
      imgBg.style = 'background-size: cover;background-position-y: 100%;height: 75vh;';
      const over = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElement('div', 'card-img-overlay');
      const h5 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElement('h5', 'card-title text-center text-warning');
      h5.innerHTML = day.dt_txt.slice(0, -9);
      const listCont = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElement('div', 'd-flex flex-row justify-content-around');
      const ul1 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElement('ul', 'list-group list-unstyled');
      const ul2 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElement('ul', 'list-group list-unstyled');
      const temp = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElementWithInnerText('li', 'list-group-item', `<i class="fas fa-thermometer-half text-warning my-2"></i> Temp: ${day.main.temp} Celsius`);
      const feel = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElementWithInnerText('li', 'list-group-item', `<i class="fas fa-meteor text-warning my-2"></i> Feel: ${day.main.feels_like} Celsius`);
      const pressure = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElementWithInnerText('li', 'list-group-item', `<i class="fas fa-compress-arrows-alt text-warning my-2"></i> Pressure: ${day.main.pressure} hPa`);
      const humidity = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElementWithInnerText('li', 'list-group-item', `<i class="fas fa-percent text-warning my-2"></i> Humidity: ${day.main.humidity}%`);
      const desc = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElementWithInnerText('li', 'list-group-item', `<i class="fas fa-cloud-sun-rain text-warning my-2"></i> ${day.weather[0].main}`);
      const minTemp = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElementWithInnerText('li', 'list-group-item', `<i class="fas fa-temperature-low text-warning my-2"></i> Min: ${day.main.temp_min} Celsius`);
      const maxTemp = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElementWithInnerText('li', 'list-group-item', `<i class="fas fa-temperature-high text-warning my-2"></i> Max: ${day.main.temp_max} Celsius`);
      const clouds = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElementWithInnerText('li', 'list-group-item', `<i class="fas fa-cloud text-warning my-2"></i> Clouds: ${day.clouds.all}%`);
      const wind = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElementWithInnerText('li', 'list-group-item', `<i class="fas fa-wind text-warning my-2"></i> ${day.wind.speed} meter/sec`);
      const windDir = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElementWithInnerText('li', 'list-group-item', `<i class="fas fa-compass text-warning my-2"></i> ${day.wind.deg} degrees`);
      const color = document.getElementsByClassName('list-group-item');

      ul2.appendChild(minTemp);
      ul2.appendChild(maxTemp);
      ul2.appendChild(wind);
      ul2.appendChild(windDir);
      ul2.appendChild(clouds);

      ul1.appendChild(temp);
      ul1.appendChild(feel);
      ul1.appendChild(desc);
      ul1.appendChild(pressure);
      ul1.appendChild(humidity);

      listCont.appendChild(ul1);
      listCont.appendChild(ul2);

      over.appendChild(h5);
      over.appendChild(listCont);

      card.appendChild(imgBg);
      card.appendChild(over);

      cont.appendChild(card);
      row.appendChild(cont);

      for (let i = 0; i < color.length; i++) {
        color[i].style = 'background-color: rgba(255,255,255,0.1);';
      }

      // eslint-disable-next-line no-useless-concat
      imageSwitch(day, ('images' + `${index + 1}`));
    });
  }


  function converter(data) {
    if (document.getElementById('temp').innerHTML.includes(' Celsius')) {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('temp', `<i class="fas fa-thermometer-half text-warning my-2"></i> Temp: ${data.tempF} &#8457`);
      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('feel', `<i class="fas fa-meteor text-warning my-2"></i> Feel: ${data.tempFeelF} &#8457`);
      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('minTemp', `<i class="fas fa-temperature-low text-warning my-2"></i> Min: ${data.tempMinF} &#8457`);
      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('maxTemp', `<i class="fas fa-temperature-high text-warning my-2"></i> Max: ${data.tempMaxF} &#8457`);
    } else {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('temp', `<i class="fas fa-thermometer-half text-warning my-2"></i> Temp: ${data.tempC} Celsius`);
      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('feel', `<i class="fas fa-meteor text-warning my-2"></i> Feel: ${data.tempFeelC} Celsius`);
      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('minTemp', `<i class="fas fa-temperature-low text-warning my-2"></i> Min: ${data.tempMinC} Celsius`);
      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('maxTemp', `<i class="fas fa-temperature-high text-warning my-2"></i> Max: ${data.tempMaxC} Celsius`);
    }
  }


  return {
    show, fillCard, imageSwitch, createCard, clearForms, converter,
  };
};



/***/ }),

/***/ "./src/js/events.js":
/*!**************************!*\
  !*** ./src/js/events.js ***!
  \**************************/
/*! exports provided: events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/js/dom.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-alert */



const events = function events() {
  function showFlow(data) {
    Object(_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])().clearForms();
    Object(_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])().fillCard(data);
    Object(_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])().imageSwitch(data, 'image');
    Object(_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])().show('search');

    const farCel = document.getElementById('farCel');
    farCel.onclick = function changeTemp() { Object(_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])().converter(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["helpers"])().getTemp(data)); };
  }

  function forecastFlow(data) {
    Object(_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])().clearForms();
    Object(_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])().createCard(data);
    Object(_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])().show('forecast');
  }

  async function getSearch(searchBar) {
    try {
      const value = (document.getElementById(searchBar).value).toLowerCase();
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=903507f17d707fecd352d38301efba77`;
      const response = await fetch(url, { mode: 'cors' });
      const cityData = await response.json();
      showFlow(cityData);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error:', error);
      alert('Could not find the location');
    }
  }

  async function getForecast() {
    try {
      const value = (document.getElementById('search').value).toLowerCase();
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=903507f17d707fecd352d38301efba77`;
      const response = await fetch(url, { mode: 'cors' });
      const cityData = await response.json();
      forecastFlow(cityData);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error:', error);
      alert('Could not find the location');
    }
  }


  return { getSearch, showFlow, getForecast };
};



/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: helpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "helpers", function() { return helpers; });
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-return-assign */
const helpers = function helpers() {
  const createElement = function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
  };

  const createElementWithInnerText = function createElementWithInnerText(tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;
    element.innerHTML = text;
    return element;
  };


  const addInnerText = function addInnerText(className, text) {
    const element = document.getElementById(className);
    return element.innerHTML = text;
  };

  function getTemp(data) {
    const report = {};
    report.tempC = (parseFloat(data.main.temp) - 273.15).toFixed(1);
    report.tempF = ((parseFloat(data.main.temp) - 273.15) * (9 / 5) + 32).toFixed(1);

    report.tempFeelC = (parseFloat(data.main.feels_like) - 273.15).toFixed(1);
    report.tempFeelF = ((parseFloat(data.main.feels_like) - 273.15) * (9 / 5) + 32).toFixed(1);

    report.tempMinC = (parseFloat(data.main.temp_min) - 273.15).toFixed(1);
    report.tempMinF = ((parseFloat(data.main.temp_min) - 273.15) * (9 / 5) + 32).toFixed(1);

    report.tempMaxC = (parseFloat(data.main.temp_max) - 273.15).toFixed(1);
    report.tempMaxF = ((parseFloat(data.main.temp_max) - 273.15) * (9 / 5) + 32).toFixed(1);

    return report;
  }

  return {
    addInnerText, createElement, createElementWithInnerText, getTemp,
  };
};




/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc3VtbWVyLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N1bnNldC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFD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YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL3N1bW1lci5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL3N1bnNldC5qcGdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjbWFpbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA4MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jaW1hZ2Uge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDc1dmg7XFxyXFxufVxcclxcblxcclxcbiNzZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDgwdmg7XFxyXFxufVxcclxcblxcclxcbiN0ZW1wLFxcclxcbiNmZWVsLFxcclxcbiNkZXNjLFxcclxcbiNwcmVzc3VyZSxcXHJcXG4jaHVtaWRpdHksXFxyXFxuI21pblRlbXAsXFxyXFxuI21heFRlbXAsXFxyXFxuI3dpbmQsXFxyXFxuI3dpbmREaXIsXFxyXFxuI2Nsb3VkcyxcXHJcXG4jc3VucmlzZSxcXHJcXG4jc3Vuc2V0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjAyNWZhYjM1ZjA3ODM3NjY1MTBjNzBjMTRiYWMzM2I2LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2ZGM0YTY4NDRkNjkwOTc1YTYxODkyOTZmOGNjNTRlZS5qcGdcIjsiLCJpbXBvcnQgeyBkb20gfSBmcm9tICcuL2pzL2RvbSc7XG5pbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2pzL2V2ZW50cyc7XG5pbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcblxuY29uc3QgZXZlbnQgPSBldmVudHMoKTtcblxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpO1xuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQuZ2V0U2VhcmNoLmJpbmQodGhpcywgJ3NlYXJjaCcpKTtcblxuY29uc3Qgc3VibWl0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQyJyk7XG5zdWJtaXQyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQuZ2V0Rm9yZWNhc3QuYmluZCh0aGlzKSk7XG5cbmNvbnN0IHNlYXJjaDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoMicpO1xuc2VhcmNoMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50LmdldFNlYXJjaC5iaW5kKHRoaXMsICdzZWFyY2hCYXInKSk7XG5cbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgZG9tKCkuc2hvdygnYWFhJyk7IH0pO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlbGVzcy1jb25jYXQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgeyBoZWxwZXJzIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuY29uc3QgZG9tID0gZnVuY3Rpb24gZG9tKCkge1xuICBmdW5jdGlvbiBzaG93KHZhbHVlKSB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIHZhbHVlID09PSAnc2VhcmNoJzpcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbjInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdmFsdWUgPT09ICdmb3JlY2FzdCc6XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbjInKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uMicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGxDYXJkKGRhdGEpIHtcbiAgICBjb25zdCBkYXRhMiA9IGhlbHBlcnMoKS5nZXRUZW1wKGRhdGEpO1xuICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ3RpdGxlJywgYCR7ZGF0YS5uYW1lfSwgJHtkYXRhLnN5cy5jb3VudHJ5fWApO1xuICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ3RlbXAnLCBgPGkgY2xhc3M9XCJmYXMgZmEtdGhlcm1vbWV0ZXItaGFsZiB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gVGVtcDogJHtkYXRhMi50ZW1wQ30gQ2Vsc2l1c2ApO1xuICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ2ZlZWwnLCBgPGkgY2xhc3M9XCJmYXMgZmEtbWV0ZW9yIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBGZWVsOiAke2RhdGEyLnRlbXBGZWVsQ30gQ2Vsc2l1c2ApO1xuICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ2Rlc2MnLCBgPGkgY2xhc3M9XCJmYXMgZmEtY2xvdWQtc3VuLXJhaW4gdGV4dC13YXJuaW5nIG15LTJcIj48L2k+ICR7ZGF0YS53ZWF0aGVyWzBdLm1haW59YCk7XG4gICAgaGVscGVycygpLmFkZElubmVyVGV4dCgncHJlc3N1cmUnLCBgPGkgY2xhc3M9XCJmYXMgZmEtY29tcHJlc3MtYXJyb3dzLWFsdCB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gUHJlc3N1cmU6ICR7ZGF0YS5tYWluLnByZXNzdXJlfSBoUGFgKTtcbiAgICBoZWxwZXJzKCkuYWRkSW5uZXJUZXh0KCdodW1pZGl0eScsIGA8aSBjbGFzcz1cImZhcyBmYS1wZXJjZW50IHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBIdW1pZGl0eTogJHtkYXRhLm1haW4uaHVtaWRpdHl9JWApO1xuICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ21pblRlbXAnLCBgPGkgY2xhc3M9XCJmYXMgZmEtdGVtcGVyYXR1cmUtbG93IHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBNaW46ICR7ZGF0YTIudGVtcE1pbkN9IENlbHNpdXNgKTtcbiAgICBoZWxwZXJzKCkuYWRkSW5uZXJUZXh0KCdtYXhUZW1wJywgYDxpIGNsYXNzPVwiZmFzIGZhLXRlbXBlcmF0dXJlLWhpZ2ggdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IE1heDogJHtkYXRhMi50ZW1wTWF4Q30gQ2Vsc2l1c2ApO1xuICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ3dpbmQnLCBgPGkgY2xhc3M9XCJmYXMgZmEtd2luZCB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gJHtkYXRhLndpbmQuc3BlZWR9IG1ldGVyL3NlY2ApO1xuICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ3dpbmREaXInLCBgPGkgY2xhc3M9XCJmYXMgZmEtY29tcGFzcyB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gJHtkYXRhLndpbmQuZGVnfSBkZWdyZWVzYCk7XG4gICAgaGVscGVycygpLmFkZElubmVyVGV4dCgnY2xvdWRzJywgYDxpIGNsYXNzPVwiZmFzIGZhLWNsb3VkIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBDbG91ZHM6ICR7ZGF0YS5jbG91ZHMuYWxsfSVgKTtcbiAgICBoZWxwZXJzKCkuYWRkSW5uZXJUZXh0KCdzdW5yaXNlJywgJzxpIGNsYXNzPVwiZmFzIGZhLXN1biB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gJyArIGBTdW5yaXNlOiAke25ldyBEYXRlKChkYXRhLnN5cy5zdW5yaXNlICsgZGF0YS50aW1lem9uZSkgKiAxMDAwKS50b1VUQ1N0cmluZygpLnNsaWNlKC0xMSwgLTcpfSBBTWApO1xuICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ3N1bnNldCcsICc8aSBjbGFzcz1cImZhcyBmYS1zdW4gdGV4dC13YXJuaW5nIG15LTJcIj48L2k+ICcgKyBgU3Vuc2V0OiAke25ldyBEYXRlKChkYXRhLnN5cy5zdW5zZXQgKyBkYXRhLnRpbWV6b25lKSAqIDEwMDApLnRvVVRDU3RyaW5nKCkuc2xpY2UoLTExLCAtNyl9IFBNYCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbWFnZVN3aXRjaChkYXRhLCBpZCkge1xuICAgIGNvbnN0IGNvZGUgPSBkYXRhLndlYXRoZXJbMF0uaWQ7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIGNvZGUgPj0gMjAwICYmIGNvZGUgPD0gMjMyOlxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9pbWFnZXMvbGlnaHRpbmcuanBnJylcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGNvZGUgPj0gMzAwICYmIGNvZGUgPD0gMzIxOlxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9pbWFnZXMvZHJpenpsZS5qcGcnKVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgY29kZSA+PSA1MDAgJiYgY29kZSA8PSA1MzE6XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vc3JjL2ltYWdlcy9yYWluLmpwZycpXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBjb2RlID49IDYwMCAmJiBjb2RlIDw9IDYyMjpcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9zcmMvaW1hZ2VzL3Nub3cuanBnJylcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGNvZGUgPj0gNzAxICYmIGNvZGUgPD0gNzgxOlxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9pbWFnZXMvbWlzdC5qcGcnKVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgY29kZSA+PSA4MDEgJiYgY29kZSA8PSA4MDQ6XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vc3JjL2ltYWdlcy9yYWluY2xvdWRzLmpwZycpXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBjb2RlID09PSA4MDA6XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vc3JjL2ltYWdlcy9zaGluaW5nc3VuLmpwZycpXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9zcmMvaW1hZ2VzL2JsdWVza3kuanBnJylcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJGb3JtcygpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoaW5nJykucmVzZXQoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2U2VhcmNoJykucmVzZXQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNhcmQoZGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eU5hbWUnKTtcbiAgICBuYW1lLmlubmVySFRNTCA9IGAke2RhdGEuY2l0eS5uYW1lfSwgJHtkYXRhLmNpdHkuY291bnRyeX1gO1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3cnKTtcbiAgICByb3cuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgZm9yZWNhc3RGaXZlID0gZGF0YS5saXN0LmZpbHRlcigodmFsdWUsIGluZGV4KSA9PiBpbmRleCAlIDggPT09IDApO1xuICAgIGZvcmVjYXN0Rml2ZS5mb3JFYWNoKChkYXksIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjb250ID0gaGVscGVycygpLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb2wtNScpO1xuICAgICAgY29uc3QgY2FyZCA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnY2FyZCBiZy1kYXJrIHRleHQtd2hpdGUgdy0xMDAgbWItMiBteC0yJyk7XG4gICAgICBjb25zdCBpbWdCZyA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnJyk7XG4gICAgICBpbWdCZy5pZCA9ICdpbWFnZXMnICsgYCR7aW5kZXggKyAxfWA7XG4gICAgICBpbWdCZy5zdHlsZSA9ICdiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO2JhY2tncm91bmQtcG9zaXRpb24teTogMTAwJTtoZWlnaHQ6IDc1dmg7JztcbiAgICAgIGNvbnN0IG92ZXIgPSBoZWxwZXJzKCkuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NhcmQtaW1nLW92ZXJsYXknKTtcbiAgICAgIGNvbnN0IGg1ID0gaGVscGVycygpLmNyZWF0ZUVsZW1lbnQoJ2g1JywgJ2NhcmQtdGl0bGUgdGV4dC1jZW50ZXIgdGV4dC13YXJuaW5nJyk7XG4gICAgICBoNS5pbm5lckhUTUwgPSBkYXkuZHRfdHh0LnNsaWNlKDAsIC05KTtcbiAgICAgIGNvbnN0IGxpc3RDb250ID0gaGVscGVycygpLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWFyb3VuZCcpO1xuICAgICAgY29uc3QgdWwxID0gaGVscGVycygpLmNyZWF0ZUVsZW1lbnQoJ3VsJywgJ2xpc3QtZ3JvdXAgbGlzdC11bnN0eWxlZCcpO1xuICAgICAgY29uc3QgdWwyID0gaGVscGVycygpLmNyZWF0ZUVsZW1lbnQoJ3VsJywgJ2xpc3QtZ3JvdXAgbGlzdC11bnN0eWxlZCcpO1xuICAgICAgY29uc3QgdGVtcCA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCgnbGknLCAnbGlzdC1ncm91cC1pdGVtJywgYDxpIGNsYXNzPVwiZmFzIGZhLXRoZXJtb21ldGVyLWhhbGYgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IFRlbXA6ICR7ZGF5Lm1haW4udGVtcH0gQ2Vsc2l1c2ApO1xuICAgICAgY29uc3QgZmVlbCA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCgnbGknLCAnbGlzdC1ncm91cC1pdGVtJywgYDxpIGNsYXNzPVwiZmFzIGZhLW1ldGVvciB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gRmVlbDogJHtkYXkubWFpbi5mZWVsc19saWtlfSBDZWxzaXVzYCk7XG4gICAgICBjb25zdCBwcmVzc3VyZSA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCgnbGknLCAnbGlzdC1ncm91cC1pdGVtJywgYDxpIGNsYXNzPVwiZmFzIGZhLWNvbXByZXNzLWFycm93cy1hbHQgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IFByZXNzdXJlOiAke2RheS5tYWluLnByZXNzdXJlfSBoUGFgKTtcbiAgICAgIGNvbnN0IGh1bWlkaXR5ID0gaGVscGVycygpLmNyZWF0ZUVsZW1lbnRXaXRoSW5uZXJUZXh0KCdsaScsICdsaXN0LWdyb3VwLWl0ZW0nLCBgPGkgY2xhc3M9XCJmYXMgZmEtcGVyY2VudCB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gSHVtaWRpdHk6ICR7ZGF5Lm1haW4uaHVtaWRpdHl9JWApO1xuICAgICAgY29uc3QgZGVzYyA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCgnbGknLCAnbGlzdC1ncm91cC1pdGVtJywgYDxpIGNsYXNzPVwiZmFzIGZhLWNsb3VkLXN1bi1yYWluIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiAke2RheS53ZWF0aGVyWzBdLm1haW59YCk7XG4gICAgICBjb25zdCBtaW5UZW1wID0gaGVscGVycygpLmNyZWF0ZUVsZW1lbnRXaXRoSW5uZXJUZXh0KCdsaScsICdsaXN0LWdyb3VwLWl0ZW0nLCBgPGkgY2xhc3M9XCJmYXMgZmEtdGVtcGVyYXR1cmUtbG93IHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBNaW46ICR7ZGF5Lm1haW4udGVtcF9taW59IENlbHNpdXNgKTtcbiAgICAgIGNvbnN0IG1heFRlbXAgPSBoZWxwZXJzKCkuY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQoJ2xpJywgJ2xpc3QtZ3JvdXAtaXRlbScsIGA8aSBjbGFzcz1cImZhcyBmYS10ZW1wZXJhdHVyZS1oaWdoIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBNYXg6ICR7ZGF5Lm1haW4udGVtcF9tYXh9IENlbHNpdXNgKTtcbiAgICAgIGNvbnN0IGNsb3VkcyA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCgnbGknLCAnbGlzdC1ncm91cC1pdGVtJywgYDxpIGNsYXNzPVwiZmFzIGZhLWNsb3VkIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBDbG91ZHM6ICR7ZGF5LmNsb3Vkcy5hbGx9JWApO1xuICAgICAgY29uc3Qgd2luZCA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCgnbGknLCAnbGlzdC1ncm91cC1pdGVtJywgYDxpIGNsYXNzPVwiZmFzIGZhLXdpbmQgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+ICR7ZGF5LndpbmQuc3BlZWR9IG1ldGVyL3NlY2ApO1xuICAgICAgY29uc3Qgd2luZERpciA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCgnbGknLCAnbGlzdC1ncm91cC1pdGVtJywgYDxpIGNsYXNzPVwiZmFzIGZhLWNvbXBhc3MgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+ICR7ZGF5LndpbmQuZGVnfSBkZWdyZWVzYCk7XG4gICAgICBjb25zdCBjb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xpc3QtZ3JvdXAtaXRlbScpO1xuXG4gICAgICB1bDIuYXBwZW5kQ2hpbGQobWluVGVtcCk7XG4gICAgICB1bDIuYXBwZW5kQ2hpbGQobWF4VGVtcCk7XG4gICAgICB1bDIuYXBwZW5kQ2hpbGQod2luZCk7XG4gICAgICB1bDIuYXBwZW5kQ2hpbGQod2luZERpcik7XG4gICAgICB1bDIuYXBwZW5kQ2hpbGQoY2xvdWRzKTtcblxuICAgICAgdWwxLmFwcGVuZENoaWxkKHRlbXApO1xuICAgICAgdWwxLmFwcGVuZENoaWxkKGZlZWwpO1xuICAgICAgdWwxLmFwcGVuZENoaWxkKGRlc2MpO1xuICAgICAgdWwxLmFwcGVuZENoaWxkKHByZXNzdXJlKTtcbiAgICAgIHVsMS5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG5cbiAgICAgIGxpc3RDb250LmFwcGVuZENoaWxkKHVsMSk7XG4gICAgICBsaXN0Q29udC5hcHBlbmRDaGlsZCh1bDIpO1xuXG4gICAgICBvdmVyLmFwcGVuZENoaWxkKGg1KTtcbiAgICAgIG92ZXIuYXBwZW5kQ2hpbGQobGlzdENvbnQpO1xuXG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGltZ0JnKTtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQob3Zlcik7XG5cbiAgICAgIGNvbnQuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQoY29udCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29sb3JbaV0uc3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjEpOyc7XG4gICAgICB9XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNvbmNhdFxuICAgICAgaW1hZ2VTd2l0Y2goZGF5LCAoJ2ltYWdlcycgKyBgJHtpbmRleCArIDF9YCkpO1xuICAgIH0pO1xuICB9XG5cblxuICBmdW5jdGlvbiBjb252ZXJ0ZXIoZGF0YSkge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcCcpLmlubmVySFRNTC5pbmNsdWRlcygnIENlbHNpdXMnKSkge1xuICAgICAgaGVscGVycygpLmFkZElubmVyVGV4dCgndGVtcCcsIGA8aSBjbGFzcz1cImZhcyBmYS10aGVybW9tZXRlci1oYWxmIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBUZW1wOiAke2RhdGEudGVtcEZ9ICYjODQ1N2ApO1xuICAgICAgaGVscGVycygpLmFkZElubmVyVGV4dCgnZmVlbCcsIGA8aSBjbGFzcz1cImZhcyBmYS1tZXRlb3IgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IEZlZWw6ICR7ZGF0YS50ZW1wRmVlbEZ9ICYjODQ1N2ApO1xuICAgICAgaGVscGVycygpLmFkZElubmVyVGV4dCgnbWluVGVtcCcsIGA8aSBjbGFzcz1cImZhcyBmYS10ZW1wZXJhdHVyZS1sb3cgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IE1pbjogJHtkYXRhLnRlbXBNaW5GfSAmIzg0NTdgKTtcbiAgICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ21heFRlbXAnLCBgPGkgY2xhc3M9XCJmYXMgZmEtdGVtcGVyYXR1cmUtaGlnaCB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gTWF4OiAke2RhdGEudGVtcE1heEZ9ICYjODQ1N2ApO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWxwZXJzKCkuYWRkSW5uZXJUZXh0KCd0ZW1wJywgYDxpIGNsYXNzPVwiZmFzIGZhLXRoZXJtb21ldGVyLWhhbGYgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IFRlbXA6ICR7ZGF0YS50ZW1wQ30gQ2Vsc2l1c2ApO1xuICAgICAgaGVscGVycygpLmFkZElubmVyVGV4dCgnZmVlbCcsIGA8aSBjbGFzcz1cImZhcyBmYS1tZXRlb3IgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IEZlZWw6ICR7ZGF0YS50ZW1wRmVlbEN9IENlbHNpdXNgKTtcbiAgICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ21pblRlbXAnLCBgPGkgY2xhc3M9XCJmYXMgZmEtdGVtcGVyYXR1cmUtbG93IHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBNaW46ICR7ZGF0YS50ZW1wTWluQ30gQ2Vsc2l1c2ApO1xuICAgICAgaGVscGVycygpLmFkZElubmVyVGV4dCgnbWF4VGVtcCcsIGA8aSBjbGFzcz1cImZhcyBmYS10ZW1wZXJhdHVyZS1oaWdoIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBNYXg6ICR7ZGF0YS50ZW1wTWF4Q30gQ2Vsc2l1c2ApO1xuICAgIH1cbiAgfVxuXG5cbiAgcmV0dXJuIHtcbiAgICBzaG93LCBmaWxsQ2FyZCwgaW1hZ2VTd2l0Y2gsIGNyZWF0ZUNhcmQsIGNsZWFyRm9ybXMsIGNvbnZlcnRlcixcbiAgfTtcbn07XG5cbmV4cG9ydCB7IGRvbSB9OyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG5pbXBvcnQgeyBkb20gfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBoZWxwZXJzIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuY29uc3QgZXZlbnRzID0gZnVuY3Rpb24gZXZlbnRzKCkge1xuICBmdW5jdGlvbiBzaG93RmxvdyhkYXRhKSB7XG4gICAgZG9tKCkuY2xlYXJGb3JtcygpO1xuICAgIGRvbSgpLmZpbGxDYXJkKGRhdGEpO1xuICAgIGRvbSgpLmltYWdlU3dpdGNoKGRhdGEsICdpbWFnZScpO1xuICAgIGRvbSgpLnNob3coJ3NlYXJjaCcpO1xuXG4gICAgY29uc3QgZmFyQ2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhckNlbCcpO1xuICAgIGZhckNlbC5vbmNsaWNrID0gZnVuY3Rpb24gY2hhbmdlVGVtcCgpIHsgZG9tKCkuY29udmVydGVyKGhlbHBlcnMoKS5nZXRUZW1wKGRhdGEpKTsgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcmVjYXN0RmxvdyhkYXRhKSB7XG4gICAgZG9tKCkuY2xlYXJGb3JtcygpO1xuICAgIGRvbSgpLmNyZWF0ZUNhcmQoZGF0YSk7XG4gICAgZG9tKCkuc2hvdygnZm9yZWNhc3QnKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFNlYXJjaChzZWFyY2hCYXIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdmFsdWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VhcmNoQmFyKS52YWx1ZSkudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7dmFsdWV9JkFQUElEPTkwMzUwN2YxN2Q3MDdmZWNkMzUyZDM4MzAxZWZiYTc3YDtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgIGNvbnN0IGNpdHlEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2hvd0Zsb3coY2l0eURhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgICAgYWxlcnQoJ0NvdWxkIG5vdCBmaW5kIHRoZSBsb2NhdGlvbicpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJykudmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHt2YWx1ZX0mdW5pdHM9bWV0cmljJmFwcGlkPTkwMzUwN2YxN2Q3MDdmZWNkMzUyZDM4MzAxZWZiYTc3YDtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgIGNvbnN0IGNpdHlEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgZm9yZWNhc3RGbG93KGNpdHlEYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICAgIGFsZXJ0KCdDb3VsZCBub3QgZmluZCB0aGUgbG9jYXRpb24nKTtcbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiB7IGdldFNlYXJjaCwgc2hvd0Zsb3csIGdldEZvcmVjYXN0IH07XG59O1xuXG5leHBvcnQgeyBldmVudHMgfTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXR1cm4tYXNzaWduICovXG5jb25zdCBoZWxwZXJzID0gZnVuY3Rpb24gaGVscGVycygpIHtcbiAgY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUVsZW1lbnRXaXRoSW5uZXJUZXh0ID0gZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQodGFnLCBjbGFzc05hbWUsIHRleHQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dDtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcblxuXG4gIGNvbnN0IGFkZElubmVyVGV4dCA9IGZ1bmN0aW9uIGFkZElubmVyVGV4dChjbGFzc05hbWUsIHRleHQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFRlbXAoZGF0YSkge1xuICAgIGNvbnN0IHJlcG9ydCA9IHt9O1xuICAgIHJlcG9ydC50ZW1wQyA9IChwYXJzZUZsb2F0KGRhdGEubWFpbi50ZW1wKSAtIDI3My4xNSkudG9GaXhlZCgxKTtcbiAgICByZXBvcnQudGVtcEYgPSAoKHBhcnNlRmxvYXQoZGF0YS5tYWluLnRlbXApIC0gMjczLjE1KSAqICg5IC8gNSkgKyAzMikudG9GaXhlZCgxKTtcblxuICAgIHJlcG9ydC50ZW1wRmVlbEMgPSAocGFyc2VGbG9hdChkYXRhLm1haW4uZmVlbHNfbGlrZSkgLSAyNzMuMTUpLnRvRml4ZWQoMSk7XG4gICAgcmVwb3J0LnRlbXBGZWVsRiA9ICgocGFyc2VGbG9hdChkYXRhLm1haW4uZmVlbHNfbGlrZSkgLSAyNzMuMTUpICogKDkgLyA1KSArIDMyKS50b0ZpeGVkKDEpO1xuXG4gICAgcmVwb3J0LnRlbXBNaW5DID0gKHBhcnNlRmxvYXQoZGF0YS5tYWluLnRlbXBfbWluKSAtIDI3My4xNSkudG9GaXhlZCgxKTtcbiAgICByZXBvcnQudGVtcE1pbkYgPSAoKHBhcnNlRmxvYXQoZGF0YS5tYWluLnRlbXBfbWluKSAtIDI3My4xNSkgKiAoOSAvIDUpICsgMzIpLnRvRml4ZWQoMSk7XG5cbiAgICByZXBvcnQudGVtcE1heEMgPSAocGFyc2VGbG9hdChkYXRhLm1haW4udGVtcF9tYXgpIC0gMjczLjE1KS50b0ZpeGVkKDEpO1xuICAgIHJlcG9ydC50ZW1wTWF4RiA9ICgocGFyc2VGbG9hdChkYXRhLm1haW4udGVtcF9tYXgpIC0gMjczLjE1KSAqICg5IC8gNSkgKyAzMikudG9GaXhlZCgxKTtcblxuICAgIHJldHVybiByZXBvcnQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFkZElubmVyVGV4dCwgY3JlYXRlRWxlbWVudCwgY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQsIGdldFRlbXAsXG4gIH07XG59O1xuXG5cbmV4cG9ydCB7IGhlbHBlcnMgfTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9