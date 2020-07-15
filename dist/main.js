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




const event = Object(_js_events__WEBPACK_IMPORTED_MODULE_1__["default"])();

const submit = document.getElementById('submit');
submit.addEventListener('click', event.getLocation.bind(undefined, 'search'));

const submit2 = document.getElementById('submit2');
submit2.addEventListener('click', event.getForecast.bind(undefined));

const search2 = document.getElementById('search2');
search2.addEventListener('click', event.getLocation.bind(undefined, 'searchBar'));

const home = document.getElementById('home');
home.addEventListener('click', () => { Object(_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().show('aaa'); });


/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dom; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");


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
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().addInnerText('title', `${data.name}, ${data.sys.country}`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().addInnerText('temp', `<i class="fas fa-thermometer-half text-warning my-2"></i> Temp: ${data.main.temp} Celsius`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().addInnerText('feel', `<i class="fas fa-meteor text-warning my-2"></i> Feel: ${data.main.feels_like} Celsius`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().addInnerText('desc', `<i class="fas fa-cloud-sun-rain text-warning my-2"></i> ${data.weather[0].main}`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().addInnerText('pressure', `<i class="fas fa-compress-arrows-alt text-warning my-2"></i> Pressure: ${data.main.pressure} hPa`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().addInnerText('humidity', `<i class="fas fa-percent text-warning my-2"></i> Humidity: ${data.main.humidity}%`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().addInnerText('minTemp', `<i class="fas fa-temperature-low text-warning my-2"></i> Min: ${data.main.temp_min} Celsius`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().addInnerText('maxTemp', `<i class="fas fa-temperature-high text-warning my-2"></i> Max: ${data.main.temp_max} Celsius`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().addInnerText('wind', `<i class="fas fa-wind text-warning my-2"></i> ${data.wind.speed} meter/sec`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().addInnerText('windDir', `<i class="fas fa-compass text-warning my-2"></i> ${data.wind.deg} degrees`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().addInnerText('clouds', `<i class="fas fa-cloud text-warning my-2"></i> Clouds: ${data.clouds.all}%`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().addInnerText('sunrise', `<i class="fas fa-sun text-warning my-2"></i> Sunrise: ${new Date((data.sys.sunrise + data.timezone) * 1000).toUTCString().slice(-11, -7)} AM`);
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().addInnerText('sunset', `<i class="fas fa-sun text-warning my-2"></i> Sunset: ${new Date((data.sys.sunset + data.timezone) * 1000).toUTCString().slice(-11, -7)} PM`);
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
      const cont = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement('div', 'col-5');
      const card = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement('div', 'card bg-dark text-white w-100 mb-2 mx-2');
      const imgBg = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement('div', '');
      imgBg.id = `images${index + 1}`;
      imgBg.style = 'background-size: cover;background-position-y: 100%;height: 75vh;';
      const over = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement('div', 'card-img-overlay');
      const h5 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement('h5', 'card-title text-center text-warning');
      h5.innerHTML = day.dt_txt.slice(0, -9);
      const listCont = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement('div', 'd-flex flex-row justify-content-around');
      const ul1 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement('ul', 'list-group list-unstyled');
      const ul2 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement('ul', 'list-group list-unstyled');
      const temp = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithInnerText('li', 'list-group-item', `<i class="fas fa-thermometer-half text-warning my-2"></i> Temp: ${day.main.temp} Celsius`);
      const feel = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithInnerText('li', 'list-group-item', `<i class="fas fa-meteor text-warning my-2"></i> Feel: ${day.main.feels_like} Celsius`);
      const pressure = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithInnerText('li', 'list-group-item', `<i class="fas fa-compress-arrows-alt text-warning my-2"></i> Pressure: ${day.main.pressure} hPa`);
      const humidity = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithInnerText('li', 'list-group-item', `<i class="fas fa-percent text-warning my-2"></i> Humidity: ${day.main.humidity}%`);
      const desc = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithInnerText('li', 'list-group-item', `<i class="fas fa-cloud-sun-rain text-warning my-2"></i> ${day.weather[0].main}`);
      const minTemp = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithInnerText('li', 'list-group-item', `<i class="fas fa-temperature-low text-warning my-2"></i> Min: ${day.main.temp_min} Celsius`);
      const maxTemp = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithInnerText('li', 'list-group-item', `<i class="fas fa-temperature-high text-warning my-2"></i> Max: ${day.main.temp_max} Celsius`);
      const clouds = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithInnerText('li', 'list-group-item', `<i class="fas fa-cloud text-warning my-2"></i> Clouds: ${day.clouds.all}%`);
      const wind = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithInnerText('li', 'list-group-item', `<i class="fas fa-wind text-warning my-2"></i> ${day.wind.speed} meter/sec`);
      const windDir = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithInnerText('li', 'list-group-item', `<i class="fas fa-compass text-warning my-2"></i> ${day.wind.deg} degrees`);
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

      for (let i = 0; i < color.length; i += 1) {
        color[i].style = 'background-color: rgba(255,255,255,0.1);';
      }


      imageSwitch(day, (`images${index + 1}`));
    });
  }


  async function converter(data) {
    const data2 = await Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().getFahrenheit(data.name);
    if (document.getElementById('temp').innerHTML.includes(' Celsius')) {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().addInnerText('temp', `<i class="fas fa-thermometer-half text-warning my-2"></i> Temp: ${data2.main.temp} &#8457`);
      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().addInnerText('feel', `<i class="fas fa-meteor text-warning my-2"></i> Feel: ${data2.main.feels_like} &#8457`);
      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().addInnerText('minTemp', `<i class="fas fa-temperature-low text-warning my-2"></i> Min: ${data2.main.temp_min} &#8457`);
      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().addInnerText('maxTemp', `<i class="fas fa-temperature-high text-warning my-2"></i> Max: ${data2.main.temp_max} &#8457`);
    } else {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().addInnerText('temp', `<i class="fas fa-thermometer-half text-warning my-2"></i> Temp: ${data.main.temp} Celsius`);
      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().addInnerText('feel', `<i class="fas fa-meteor text-warning my-2"></i> Feel: ${data.main.feels_like} Celsius`);
      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().addInnerText('minTemp', `<i class="fas fa-temperature-low text-warning my-2"></i> Min: ${data.main.temp_min} Celsius`);
      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])().addInnerText('maxTemp', `<i class="fas fa-temperature-high text-warning my-2"></i> Max: ${data.main.temp_max} Celsius`);
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return events; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/js/dom.js");
/* eslint-disable no-alert */
/* eslint-disable no-console */


const events = function events() {
  function showFlow(data) {
    Object(_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().clearForms();
    Object(_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().fillCard(data);
    Object(_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().imageSwitch(data, 'image');
    Object(_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().show('search');

    const farCel = document.getElementById('farCel');
    farCel.onclick = function changeTemp() { Object(_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().converter(data); };
  }

  function forecastFlow(data) {
    Object(_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().clearForms();
    Object(_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().createCard(data);
    Object(_dom__WEBPACK_IMPORTED_MODULE_0__["default"])().show('forecast');
  }

  async function getSearch(city) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=903507f17d707fecd352d38301efba77&units=metric`;
      const response = await fetch(url, { mode: 'cors' });
      const cityData = await response.json();
      showFlow(cityData);
    } catch (error) {
      console.error('Error:', error);
      alert('Could not find the location');
    }
  }

  function getLocation(searchBar) {
    const city = (document.getElementById(searchBar).value).toLowerCase();
    getSearch(city);
  }

  async function getForecast() {
    try {
      const value = (document.getElementById('search').value).toLowerCase();
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=903507f17d707fecd352d38301efba77`;
      const response = await fetch(url, { mode: 'cors' });
      const cityData = await response.json();
      forecastFlow(cityData);
    } catch (error) {
      console.error('Error:', error);
      alert('Could not find the location');
    }
  }


  return {
    getSearch, showFlow, getForecast, getLocation,
  };
};



/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return helpers; });
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable no-console */

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
    element.innerHTML = text;
    return element.innerHTML;
  };

  async function getFahrenheit(city) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=903507f17d707fecd352d38301efba77&units=imperial`;
      const response = await fetch(url, { mode: 'cors' });
      const cityFahr = await response.json();
      return cityFahr;
    } catch (error) {
      console.error('Error:', error);
      alert('Could not find the location');
    }
  }

  return {
    addInnerText, createElement, createElementWithInnerText, getFahrenheit,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc3VtbWVyLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N1bnNldC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFD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aGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL3N1bW1lci5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL3N1bnNldC5qcGdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjbWFpbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA4MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jaW1hZ2Uge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDc1dmg7XFxyXFxufVxcclxcblxcclxcbiNzZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDgwdmg7XFxyXFxufVxcclxcblxcclxcbiN0ZW1wLFxcclxcbiNmZWVsLFxcclxcbiNkZXNjLFxcclxcbiNwcmVzc3VyZSxcXHJcXG4jaHVtaWRpdHksXFxyXFxuI21pblRlbXAsXFxyXFxuI21heFRlbXAsXFxyXFxuI3dpbmQsXFxyXFxuI3dpbmREaXIsXFxyXFxuI2Nsb3VkcyxcXHJcXG4jc3VucmlzZSxcXHJcXG4jc3Vuc2V0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjAyNWZhYjM1ZjA3ODM3NjY1MTBjNzBjMTRiYWMzM2I2LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2ZGM0YTY4NDRkNjkwOTc1YTYxODkyOTZmOGNjNTRlZS5qcGdcIjsiLCJpbXBvcnQgZG9tIGZyb20gJy4vanMvZG9tJztcbmltcG9ydCBldmVudHMgZnJvbSAnLi9qcy9ldmVudHMnO1xuaW1wb3J0ICcuL3N0eWxlL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGV2ZW50ID0gZXZlbnRzKCk7XG5cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQnKTtcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50LmdldExvY2F0aW9uLmJpbmQodGhpcywgJ3NlYXJjaCcpKTtcblxuY29uc3Qgc3VibWl0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQyJyk7XG5zdWJtaXQyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQuZ2V0Rm9yZWNhc3QuYmluZCh0aGlzKSk7XG5cbmNvbnN0IHNlYXJjaDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoMicpO1xuc2VhcmNoMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50LmdldExvY2F0aW9uLmJpbmQodGhpcywgJ3NlYXJjaEJhcicpKTtcblxuY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBkb20oKS5zaG93KCdhYWEnKTsgfSk7XG4iLCJpbXBvcnQgaGVscGVycyBmcm9tICcuL2hlbHBlcnMnO1xuXG5jb25zdCBkb20gPSBmdW5jdGlvbiBkb20oKSB7XG4gIGZ1bmN0aW9uIHNob3codmFsdWUpIHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgdmFsdWUgPT09ICdzZWFyY2gnOlxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uMicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB2YWx1ZSA9PT0gJ2ZvcmVjYXN0JzpcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uMicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24yJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsbENhcmQoZGF0YSkge1xuICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ3RpdGxlJywgYCR7ZGF0YS5uYW1lfSwgJHtkYXRhLnN5cy5jb3VudHJ5fWApO1xuICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ3RlbXAnLCBgPGkgY2xhc3M9XCJmYXMgZmEtdGhlcm1vbWV0ZXItaGFsZiB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gVGVtcDogJHtkYXRhLm1haW4udGVtcH0gQ2Vsc2l1c2ApO1xuICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ2ZlZWwnLCBgPGkgY2xhc3M9XCJmYXMgZmEtbWV0ZW9yIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBGZWVsOiAke2RhdGEubWFpbi5mZWVsc19saWtlfSBDZWxzaXVzYCk7XG4gICAgaGVscGVycygpLmFkZElubmVyVGV4dCgnZGVzYycsIGA8aSBjbGFzcz1cImZhcyBmYS1jbG91ZC1zdW4tcmFpbiB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gJHtkYXRhLndlYXRoZXJbMF0ubWFpbn1gKTtcbiAgICBoZWxwZXJzKCkuYWRkSW5uZXJUZXh0KCdwcmVzc3VyZScsIGA8aSBjbGFzcz1cImZhcyBmYS1jb21wcmVzcy1hcnJvd3MtYWx0IHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBQcmVzc3VyZTogJHtkYXRhLm1haW4ucHJlc3N1cmV9IGhQYWApO1xuICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ2h1bWlkaXR5JywgYDxpIGNsYXNzPVwiZmFzIGZhLXBlcmNlbnQgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IEh1bWlkaXR5OiAke2RhdGEubWFpbi5odW1pZGl0eX0lYCk7XG4gICAgaGVscGVycygpLmFkZElubmVyVGV4dCgnbWluVGVtcCcsIGA8aSBjbGFzcz1cImZhcyBmYS10ZW1wZXJhdHVyZS1sb3cgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IE1pbjogJHtkYXRhLm1haW4udGVtcF9taW59IENlbHNpdXNgKTtcbiAgICBoZWxwZXJzKCkuYWRkSW5uZXJUZXh0KCdtYXhUZW1wJywgYDxpIGNsYXNzPVwiZmFzIGZhLXRlbXBlcmF0dXJlLWhpZ2ggdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IE1heDogJHtkYXRhLm1haW4udGVtcF9tYXh9IENlbHNpdXNgKTtcbiAgICBoZWxwZXJzKCkuYWRkSW5uZXJUZXh0KCd3aW5kJywgYDxpIGNsYXNzPVwiZmFzIGZhLXdpbmQgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+ICR7ZGF0YS53aW5kLnNwZWVkfSBtZXRlci9zZWNgKTtcbiAgICBoZWxwZXJzKCkuYWRkSW5uZXJUZXh0KCd3aW5kRGlyJywgYDxpIGNsYXNzPVwiZmFzIGZhLWNvbXBhc3MgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+ICR7ZGF0YS53aW5kLmRlZ30gZGVncmVlc2ApO1xuICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ2Nsb3VkcycsIGA8aSBjbGFzcz1cImZhcyBmYS1jbG91ZCB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gQ2xvdWRzOiAke2RhdGEuY2xvdWRzLmFsbH0lYCk7XG4gICAgaGVscGVycygpLmFkZElubmVyVGV4dCgnc3VucmlzZScsIGA8aSBjbGFzcz1cImZhcyBmYS1zdW4gdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IFN1bnJpc2U6ICR7bmV3IERhdGUoKGRhdGEuc3lzLnN1bnJpc2UgKyBkYXRhLnRpbWV6b25lKSAqIDEwMDApLnRvVVRDU3RyaW5nKCkuc2xpY2UoLTExLCAtNyl9IEFNYCk7XG4gICAgaGVscGVycygpLmFkZElubmVyVGV4dCgnc3Vuc2V0JywgYDxpIGNsYXNzPVwiZmFzIGZhLXN1biB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gU3Vuc2V0OiAke25ldyBEYXRlKChkYXRhLnN5cy5zdW5zZXQgKyBkYXRhLnRpbWV6b25lKSAqIDEwMDApLnRvVVRDU3RyaW5nKCkuc2xpY2UoLTExLCAtNyl9IFBNYCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbWFnZVN3aXRjaChkYXRhLCBpZCkge1xuICAgIGNvbnN0IGNvZGUgPSBkYXRhLndlYXRoZXJbMF0uaWQ7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIGNvZGUgPj0gMjAwICYmIGNvZGUgPD0gMjMyOlxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9pbWFnZXMvbGlnaHRpbmcuanBnJylcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGNvZGUgPj0gMzAwICYmIGNvZGUgPD0gMzIxOlxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9pbWFnZXMvZHJpenpsZS5qcGcnKVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgY29kZSA+PSA1MDAgJiYgY29kZSA8PSA1MzE6XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vc3JjL2ltYWdlcy9yYWluLmpwZycpXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBjb2RlID49IDYwMCAmJiBjb2RlIDw9IDYyMjpcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9zcmMvaW1hZ2VzL3Nub3cuanBnJylcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGNvZGUgPj0gNzAxICYmIGNvZGUgPD0gNzgxOlxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9pbWFnZXMvbWlzdC5qcGcnKVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgY29kZSA+PSA4MDEgJiYgY29kZSA8PSA4MDQ6XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vc3JjL2ltYWdlcy9yYWluY2xvdWRzLmpwZycpXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBjb2RlID09PSA4MDA6XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vc3JjL2ltYWdlcy9zaGluaW5nc3VuLmpwZycpXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9zcmMvaW1hZ2VzL2JsdWVza3kuanBnJylcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJGb3JtcygpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoaW5nJykucmVzZXQoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2U2VhcmNoJykucmVzZXQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNhcmQoZGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eU5hbWUnKTtcbiAgICBuYW1lLmlubmVySFRNTCA9IGAke2RhdGEuY2l0eS5uYW1lfSwgJHtkYXRhLmNpdHkuY291bnRyeX1gO1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3cnKTtcbiAgICByb3cuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgZm9yZWNhc3RGaXZlID0gZGF0YS5saXN0LmZpbHRlcigodmFsdWUsIGluZGV4KSA9PiBpbmRleCAlIDggPT09IDApO1xuICAgIGZvcmVjYXN0Rml2ZS5mb3JFYWNoKChkYXksIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjb250ID0gaGVscGVycygpLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb2wtNScpO1xuICAgICAgY29uc3QgY2FyZCA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnY2FyZCBiZy1kYXJrIHRleHQtd2hpdGUgdy0xMDAgbWItMiBteC0yJyk7XG4gICAgICBjb25zdCBpbWdCZyA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnJyk7XG4gICAgICBpbWdCZy5pZCA9IGBpbWFnZXMke2luZGV4ICsgMX1gO1xuICAgICAgaW1nQmcuc3R5bGUgPSAnYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDEwMCU7aGVpZ2h0OiA3NXZoOyc7XG4gICAgICBjb25zdCBvdmVyID0gaGVscGVycygpLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjYXJkLWltZy1vdmVybGF5Jyk7XG4gICAgICBjb25zdCBoNSA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50KCdoNScsICdjYXJkLXRpdGxlIHRleHQtY2VudGVyIHRleHQtd2FybmluZycpO1xuICAgICAgaDUuaW5uZXJIVE1MID0gZGF5LmR0X3R4dC5zbGljZSgwLCAtOSk7XG4gICAgICBjb25zdCBsaXN0Q29udCA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1hcm91bmQnKTtcbiAgICAgIGNvbnN0IHVsMSA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50KCd1bCcsICdsaXN0LWdyb3VwIGxpc3QtdW5zdHlsZWQnKTtcbiAgICAgIGNvbnN0IHVsMiA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50KCd1bCcsICdsaXN0LWdyb3VwIGxpc3QtdW5zdHlsZWQnKTtcbiAgICAgIGNvbnN0IHRlbXAgPSBoZWxwZXJzKCkuY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQoJ2xpJywgJ2xpc3QtZ3JvdXAtaXRlbScsIGA8aSBjbGFzcz1cImZhcyBmYS10aGVybW9tZXRlci1oYWxmIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBUZW1wOiAke2RheS5tYWluLnRlbXB9IENlbHNpdXNgKTtcbiAgICAgIGNvbnN0IGZlZWwgPSBoZWxwZXJzKCkuY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQoJ2xpJywgJ2xpc3QtZ3JvdXAtaXRlbScsIGA8aSBjbGFzcz1cImZhcyBmYS1tZXRlb3IgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IEZlZWw6ICR7ZGF5Lm1haW4uZmVlbHNfbGlrZX0gQ2Vsc2l1c2ApO1xuICAgICAgY29uc3QgcHJlc3N1cmUgPSBoZWxwZXJzKCkuY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQoJ2xpJywgJ2xpc3QtZ3JvdXAtaXRlbScsIGA8aSBjbGFzcz1cImZhcyBmYS1jb21wcmVzcy1hcnJvd3MtYWx0IHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBQcmVzc3VyZTogJHtkYXkubWFpbi5wcmVzc3VyZX0gaFBhYCk7XG4gICAgICBjb25zdCBodW1pZGl0eSA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCgnbGknLCAnbGlzdC1ncm91cC1pdGVtJywgYDxpIGNsYXNzPVwiZmFzIGZhLXBlcmNlbnQgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IEh1bWlkaXR5OiAke2RheS5tYWluLmh1bWlkaXR5fSVgKTtcbiAgICAgIGNvbnN0IGRlc2MgPSBoZWxwZXJzKCkuY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQoJ2xpJywgJ2xpc3QtZ3JvdXAtaXRlbScsIGA8aSBjbGFzcz1cImZhcyBmYS1jbG91ZC1zdW4tcmFpbiB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gJHtkYXkud2VhdGhlclswXS5tYWlufWApO1xuICAgICAgY29uc3QgbWluVGVtcCA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCgnbGknLCAnbGlzdC1ncm91cC1pdGVtJywgYDxpIGNsYXNzPVwiZmFzIGZhLXRlbXBlcmF0dXJlLWxvdyB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gTWluOiAke2RheS5tYWluLnRlbXBfbWlufSBDZWxzaXVzYCk7XG4gICAgICBjb25zdCBtYXhUZW1wID0gaGVscGVycygpLmNyZWF0ZUVsZW1lbnRXaXRoSW5uZXJUZXh0KCdsaScsICdsaXN0LWdyb3VwLWl0ZW0nLCBgPGkgY2xhc3M9XCJmYXMgZmEtdGVtcGVyYXR1cmUtaGlnaCB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gTWF4OiAke2RheS5tYWluLnRlbXBfbWF4fSBDZWxzaXVzYCk7XG4gICAgICBjb25zdCBjbG91ZHMgPSBoZWxwZXJzKCkuY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQoJ2xpJywgJ2xpc3QtZ3JvdXAtaXRlbScsIGA8aSBjbGFzcz1cImZhcyBmYS1jbG91ZCB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gQ2xvdWRzOiAke2RheS5jbG91ZHMuYWxsfSVgKTtcbiAgICAgIGNvbnN0IHdpbmQgPSBoZWxwZXJzKCkuY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQoJ2xpJywgJ2xpc3QtZ3JvdXAtaXRlbScsIGA8aSBjbGFzcz1cImZhcyBmYS13aW5kIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiAke2RheS53aW5kLnNwZWVkfSBtZXRlci9zZWNgKTtcbiAgICAgIGNvbnN0IHdpbmREaXIgPSBoZWxwZXJzKCkuY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQoJ2xpJywgJ2xpc3QtZ3JvdXAtaXRlbScsIGA8aSBjbGFzcz1cImZhcyBmYS1jb21wYXNzIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiAke2RheS53aW5kLmRlZ30gZGVncmVlc2ApO1xuICAgICAgY29uc3QgY29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaXN0LWdyb3VwLWl0ZW0nKTtcblxuICAgICAgdWwyLmFwcGVuZENoaWxkKG1pblRlbXApO1xuICAgICAgdWwyLmFwcGVuZENoaWxkKG1heFRlbXApO1xuICAgICAgdWwyLmFwcGVuZENoaWxkKHdpbmQpO1xuICAgICAgdWwyLmFwcGVuZENoaWxkKHdpbmREaXIpO1xuICAgICAgdWwyLmFwcGVuZENoaWxkKGNsb3Vkcyk7XG5cbiAgICAgIHVsMS5hcHBlbmRDaGlsZCh0ZW1wKTtcbiAgICAgIHVsMS5hcHBlbmRDaGlsZChmZWVsKTtcbiAgICAgIHVsMS5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICAgIHVsMS5hcHBlbmRDaGlsZChwcmVzc3VyZSk7XG4gICAgICB1bDEuYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xuXG4gICAgICBsaXN0Q29udC5hcHBlbmRDaGlsZCh1bDEpO1xuICAgICAgbGlzdENvbnQuYXBwZW5kQ2hpbGQodWwyKTtcblxuICAgICAgb3Zlci5hcHBlbmRDaGlsZChoNSk7XG4gICAgICBvdmVyLmFwcGVuZENoaWxkKGxpc3RDb250KTtcblxuICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWdCZyk7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKG92ZXIpO1xuXG4gICAgICBjb250LmFwcGVuZENoaWxkKGNhcmQpO1xuICAgICAgcm93LmFwcGVuZENoaWxkKGNvbnQpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbG9yLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbG9yW2ldLnN0eWxlID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTsnO1xuICAgICAgfVxuXG5cbiAgICAgIGltYWdlU3dpdGNoKGRheSwgKGBpbWFnZXMke2luZGV4ICsgMX1gKSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbnZlcnRlcihkYXRhKSB7XG4gICAgY29uc3QgZGF0YTIgPSBhd2FpdCBoZWxwZXJzKCkuZ2V0RmFocmVuaGVpdChkYXRhLm5hbWUpO1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcCcpLmlubmVySFRNTC5pbmNsdWRlcygnIENlbHNpdXMnKSkge1xuICAgICAgaGVscGVycygpLmFkZElubmVyVGV4dCgndGVtcCcsIGA8aSBjbGFzcz1cImZhcyBmYS10aGVybW9tZXRlci1oYWxmIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBUZW1wOiAke2RhdGEyLm1haW4udGVtcH0gJiM4NDU3YCk7XG4gICAgICBoZWxwZXJzKCkuYWRkSW5uZXJUZXh0KCdmZWVsJywgYDxpIGNsYXNzPVwiZmFzIGZhLW1ldGVvciB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gRmVlbDogJHtkYXRhMi5tYWluLmZlZWxzX2xpa2V9ICYjODQ1N2ApO1xuICAgICAgaGVscGVycygpLmFkZElubmVyVGV4dCgnbWluVGVtcCcsIGA8aSBjbGFzcz1cImZhcyBmYS10ZW1wZXJhdHVyZS1sb3cgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IE1pbjogJHtkYXRhMi5tYWluLnRlbXBfbWlufSAmIzg0NTdgKTtcbiAgICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ21heFRlbXAnLCBgPGkgY2xhc3M9XCJmYXMgZmEtdGVtcGVyYXR1cmUtaGlnaCB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gTWF4OiAke2RhdGEyLm1haW4udGVtcF9tYXh9ICYjODQ1N2ApO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWxwZXJzKCkuYWRkSW5uZXJUZXh0KCd0ZW1wJywgYDxpIGNsYXNzPVwiZmFzIGZhLXRoZXJtb21ldGVyLWhhbGYgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IFRlbXA6ICR7ZGF0YS5tYWluLnRlbXB9IENlbHNpdXNgKTtcbiAgICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ2ZlZWwnLCBgPGkgY2xhc3M9XCJmYXMgZmEtbWV0ZW9yIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBGZWVsOiAke2RhdGEubWFpbi5mZWVsc19saWtlfSBDZWxzaXVzYCk7XG4gICAgICBoZWxwZXJzKCkuYWRkSW5uZXJUZXh0KCdtaW5UZW1wJywgYDxpIGNsYXNzPVwiZmFzIGZhLXRlbXBlcmF0dXJlLWxvdyB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gTWluOiAke2RhdGEubWFpbi50ZW1wX21pbn0gQ2Vsc2l1c2ApO1xuICAgICAgaGVscGVycygpLmFkZElubmVyVGV4dCgnbWF4VGVtcCcsIGA8aSBjbGFzcz1cImZhcyBmYS10ZW1wZXJhdHVyZS1oaWdoIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBNYXg6ICR7ZGF0YS5tYWluLnRlbXBfbWF4fSBDZWxzaXVzYCk7XG4gICAgfVxuICB9XG5cblxuICByZXR1cm4ge1xuICAgIHNob3csIGZpbGxDYXJkLCBpbWFnZVN3aXRjaCwgY3JlYXRlQ2FyZCwgY2xlYXJGb3JtcywgY29udmVydGVyLFxuICB9O1xufTtcblxuZXhwb3J0IHsgZG9tIGFzIGRlZmF1bHQgfTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IGRvbSBmcm9tICcuL2RvbSc7XG5cbmNvbnN0IGV2ZW50cyA9IGZ1bmN0aW9uIGV2ZW50cygpIHtcbiAgZnVuY3Rpb24gc2hvd0Zsb3coZGF0YSkge1xuICAgIGRvbSgpLmNsZWFyRm9ybXMoKTtcbiAgICBkb20oKS5maWxsQ2FyZChkYXRhKTtcbiAgICBkb20oKS5pbWFnZVN3aXRjaChkYXRhLCAnaW1hZ2UnKTtcbiAgICBkb20oKS5zaG93KCdzZWFyY2gnKTtcblxuICAgIGNvbnN0IGZhckNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYXJDZWwnKTtcbiAgICBmYXJDZWwub25jbGljayA9IGZ1bmN0aW9uIGNoYW5nZVRlbXAoKSB7IGRvbSgpLmNvbnZlcnRlcihkYXRhKTsgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcmVjYXN0RmxvdyhkYXRhKSB7XG4gICAgZG9tKCkuY2xlYXJGb3JtcygpO1xuICAgIGRvbSgpLmNyZWF0ZUNhcmQoZGF0YSk7XG4gICAgZG9tKCkuc2hvdygnZm9yZWNhc3QnKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFNlYXJjaChjaXR5KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mQVBQSUQ9OTAzNTA3ZjE3ZDcwN2ZlY2QzNTJkMzgzMDFlZmJhNzcmdW5pdHM9bWV0cmljYDtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgIGNvbnN0IGNpdHlEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2hvd0Zsb3coY2l0eURhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICBhbGVydCgnQ291bGQgbm90IGZpbmQgdGhlIGxvY2F0aW9uJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TG9jYXRpb24oc2VhcmNoQmFyKSB7XG4gICAgY29uc3QgY2l0eSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWFyY2hCYXIpLnZhbHVlKS50b0xvd2VyQ2FzZSgpO1xuICAgIGdldFNlYXJjaChjaXR5KTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJykudmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHt2YWx1ZX0mdW5pdHM9bWV0cmljJmFwcGlkPTkwMzUwN2YxN2Q3MDdmZWNkMzUyZDM4MzAxZWZiYTc3YDtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgIGNvbnN0IGNpdHlEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgZm9yZWNhc3RGbG93KGNpdHlEYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgICAgYWxlcnQoJ0NvdWxkIG5vdCBmaW5kIHRoZSBsb2NhdGlvbicpO1xuICAgIH1cbiAgfVxuXG5cbiAgcmV0dXJuIHtcbiAgICBnZXRTZWFyY2gsIHNob3dGbG93LCBnZXRGb3JlY2FzdCwgZ2V0TG9jYXRpb24sXG4gIH07XG59O1xuXG5leHBvcnQgeyBldmVudHMgYXMgZGVmYXVsdCB9OyIsIi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXG5jb25zdCBoZWxwZXJzID0gZnVuY3Rpb24gaGVscGVycygpIHtcbiAgY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUVsZW1lbnRXaXRoSW5uZXJUZXh0ID0gZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQodGFnLCBjbGFzc05hbWUsIHRleHQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dDtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcblxuICBjb25zdCBhZGRJbm5lclRleHQgPSBmdW5jdGlvbiBhZGRJbm5lclRleHQoY2xhc3NOYW1lLCB0ZXh0KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNsYXNzTmFtZSk7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIHJldHVybiBlbGVtZW50LmlubmVySFRNTDtcbiAgfTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRGYWhyZW5oZWl0KGNpdHkpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZBUFBJRD05MDM1MDdmMTdkNzA3ZmVjZDM1MmQzODMwMWVmYmE3NyZ1bml0cz1pbXBlcmlhbGA7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICBjb25zdCBjaXR5RmFociA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBjaXR5RmFocjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgICAgYWxlcnQoJ0NvdWxkIG5vdCBmaW5kIHRoZSBsb2NhdGlvbicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWRkSW5uZXJUZXh0LCBjcmVhdGVFbGVtZW50LCBjcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCwgZ2V0RmFocmVuaGVpdCxcbiAgfTtcbn07XG5cblxuZXhwb3J0IHsgaGVscGVycyBhcyBkZWZhdWx0IH07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==