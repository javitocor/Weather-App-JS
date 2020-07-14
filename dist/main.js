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
exports.push([module.i, "#main {\r\n    display: block;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover;\r\n    background-position-y: 100%;\r\n    height: 80vh;\r\n}\r\n\r\n#image {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-size: cover;\r\n    background-position-y: 100%;\r\n    height: 75vh;\r\n}\r\n\r\n#section {\r\n    display: none;\r\n    height: 80vh;\r\n}\r\n\r\n#temp,\r\n#feel,\r\n#desc,\r\n#pressure,\r\n#humidity,\r\n#minTemp,\r\n#maxTemp,\r\n#wind,\r\n#windDir,\r\n#clouds,\r\n#sunrise,\r\n#sunset {\r\n    background-color: rgba(255,255,255,0.1);\r\n}\r\n\r\n#home {\r\n    cursor: pointer;\r\n}\r\n", ""]);
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
/* harmony import */ var _js_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/helpers */ "./src/js/helpers.js");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_style_css__WEBPACK_IMPORTED_MODULE_3__);





let manip = Object(_js_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])();
let event = Object(_js_events__WEBPACK_IMPORTED_MODULE_1__["events"])();
let help = Object(_js_helpers__WEBPACK_IMPORTED_MODULE_2__["helpers"])();

const submit = document.getElementById('submit');
submit.addEventListener('click', event.getSearch.bind(undefined,'search'));

const submit2 = document.getElementById('submit2');
submit2.addEventListener('click', event.getForecast.bind(undefined));

const search2 = document.getElementById('search2');
search2.addEventListener('click', event.getSearch.bind(undefined, 'searchBar'));

const home = document.getElementById('home');
home.addEventListener('click', ()=>{ Object(_js_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])().show('aaa') });

const farCel = document.getElementById('farCel');
farCel.addEventListener('click', help.converter.bind(undefined));





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


const dom = function () {

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
        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('title', data['name']);
        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('temp', '<i class="fas fa-thermometer-half text-warning my-2"></i> Temp: ' + data['main']['temp'] + ' Celsius');
        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('feel', '<i class="fas fa-meteor text-warning my-2"></i> Feel: ' + data['main']['feels_like'] + ' Celsius');
        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('desc', '<i class="fas fa-cloud-sun-rain text-warning my-2"></i> ' + data['weather'][0]['main']);
        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('pressure', '<i class="fas fa-compress-arrows-alt text-warning my-2"></i> Pressure: ' + data['main']['pressure'] + ' hPa');
        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('humidity', '<i class="fas fa-percent text-warning my-2"></i> Humidity: ' + data['main']['humidity'] + '%');
        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('minTemp','<i class="fas fa-temperature-low text-warning my-2"></i> Min: ' + data['main']['temp_min'] + ' Celsius');
        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('maxTemp','<i class="fas fa-temperature-high text-warning my-2"></i> Max: ' + data['main']['temp_max'] + ' Celsius');
        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('wind','<i class="fas fa-wind text-warning my-2"></i> ' + data['wind']['speed'] + ' meter/sec');
        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('windDir','<i class="fas fa-compass text-warning my-2"></i> ' + data['wind']['deg'] + ' degrees');
        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('clouds','<i class="fas fa-cloud text-warning my-2"></i> Clouds: ' + data['clouds']['all'] + '%');
        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('sunrise','<i class="fas fa-sun text-warning my-2"></i> ' + `Sunrise: ${new Date((data.sys.sunrise + data.timezone) * 1000).toUTCString().slice(-11, -7)} AM`);
        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().addInnerText('sunset','<i class="fas fa-sun text-warning my-2"></i> ' + `Sunset: ${new Date((data.sys.sunset + data.timezone) * 1000).toUTCString().slice(-11, -7)} PM`);
    }

    function imageSwitch(data, id) {
        const code = data['weather'][0]['id'];
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
            case code==800:
                document.getElementById(id).style.backgroundImage = "url('../src/images/shiningsun.jpg')";
                break;
            default:
                document.getElementById(id).style.backgroundImage = "url('../src/images/bluesky.jpg')";
                break;
        }
    };

    function clearForms() {
        document.getElementById("searching").reset();
        document.getElementById('navSearch').reset();
    }

    function createCard(data) {
        const name = document.getElementById('cityName');
        name.innerHTML = data.city.name;
        const row = document.getElementById('row');
        row.innerHTML = "";
        const forecastFive = data.list.filter(function(value, index, Arr) {
            return index % 8 == 0;
        });
        forecastFive.forEach ((day, index) =>{            
            const cont = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElement('div', "col-5");
            const card = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElement('div', "card bg-dark text-white w-100 mb-2 mx-2");
            const imgBg = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElement('div', '');
            imgBg.id = 'images'+`${index+1}`;
            imgBg.style = "background-size: cover;background-position-y: 100%;height: 75vh;";
            const over = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElement('div', "card-img-overlay");
            const h5 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElement('h5', "card-title text-center text-warning");
            h5.innerHTML = day.dt_txt.slice(0, -9);
            const listCont = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElement('div', "d-flex flex-row justify-content-around");
            const ul1 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElement('ul',"list-group list-unstyled");
            const ul2 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElement('ul',"list-group list-unstyled");
            const temp = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElementWithInnerText('li', "list-group-item", '<i class="fas fa-thermometer-half text-warning my-2"></i> Temp: ' + day['main']['temp'] + ' Celsius');
            const feel = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElementWithInnerText('li', "list-group-item", '<i class="fas fa-meteor text-warning my-2"></i> Feel: ' + day['main']['feels_like'] + ' Celsius');
            const pressure = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElementWithInnerText('li', "list-group-item", '<i class="fas fa-compress-arrows-alt text-warning my-2"></i> Pressure: ' + day['main']['pressure'] + ' hPa');
            const humidity = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElementWithInnerText('li', "list-group-item", '<i class="fas fa-percent text-warning my-2"></i> Humidity: ' + day['main']['humidity'] + '%');
            const desc = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElementWithInnerText('li', "list-group-item", '<i class="fas fa-cloud-sun-rain text-warning my-2"></i> ' + day['weather'][0]['main']);
            const minTemp = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElementWithInnerText('li', "list-group-item", '<i class="fas fa-temperature-low text-warning my-2"></i> Min: ' + day['main']['temp_min'] + ' Celsius');
            const maxTemp = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElementWithInnerText('li', "list-group-item", '<i class="fas fa-temperature-high text-warning my-2"></i> Max: ' + day['main']['temp_max'] + ' Celsius');
            const clouds = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElementWithInnerText('li', "list-group-item", '<i class="fas fa-cloud text-warning my-2"></i> Clouds: ' + day['clouds']['all'] + '%');
            const wind = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElementWithInnerText('li', "list-group-item", '<i class="fas fa-wind text-warning my-2"></i> ' + day['wind']['speed'] + ' meter/sec');
            const windDir = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["helpers"])().createElementWithInnerText('li', "list-group-item", '<i class="fas fa-compass text-warning my-2"></i> ' + day['wind']['deg'] + ' degrees');            
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

            for(let i = 0; i<color.length; i++){
                color[i].style = "background-color: rgba(255,255,255,0.1);";
            };

            imageSwitch(day, ('images'+`${index+1}`));
        });
    }

    return { show, fillCard, imageSwitch, createCard, clearForms }
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


const events = function () {
    
    async function getSearch(searchBar) {
        try {
            const value = (document.getElementById(searchBar).value).toLowerCase();
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=903507f17d707fecd352d38301efba77&units=metric`;
            const url2 = `http://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=903507f17d707fecd352d38301efba77&unitsimperial`;
            const response = await fetch(url, { mode: 'cors' });
            const response2 = await fetch(url2, { mode: 'cors' });
            const cityData = await response.json();
            const cityData2 = await response2.json();
            showFlow(cityData);
        } catch (error) {
            console.error('Error:', error);
            alert('Could not find the location');
        }
    };  

    async function getForecast() {
        try {
            const value = (document.getElementById('search').value).toLowerCase();            
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=903507f17d707fecd352d38301efba77`;            
            const response = await fetch(url, { mode: 'cors' });
            const cityData = await response.json();
            console.log(cityData.list)
            forecastFlow(cityData);
        } catch (error) {
            console.error('Error:', error);
            alert('Could not find the location');
        }
    }; 

    function showFlow(data) {        
        Object(_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])().clearForms();
        Object(_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])().fillCard(data);
        Object(_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])().imageSwitch(data, 'image');
        Object(_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])().show('search');
    };

    function forecastFlow(data) {
        Object(_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])().clearForms();
        Object(_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])().createCard(data);
        Object(_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])().show('forecast');
    }

    return { getSearch, showFlow, getForecast, }
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

    function converter(){
      if(document.getElementById('temp').innerHTML.includes('Celsius')){
        
      }
      const tempFahrenheit = parseFloat((tempCelsius * (9 / 5) + 32).toFixed(2));
      const tempCelsius = parseFloat(((tempFahrenheit - 32) * 5/9).toFixed(2));
    }
  
    return {
      addInnerText, createElement, converter, createElementWithInnerText, 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc3VtbWVyLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N1bnNldC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGLHNDQUFzQyxtQkFBTyxDQUFDLDhHQUFzRDtBQUNwRyxvQ0FBb0MsbUJBQU8sQ0FBQyxxREFBc0I7QUFDbEUsb0NBQW9DLG1CQUFPLENBQUMscURBQXNCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFTLFVBQVUsdUJBQXVCLDBFQUEwRSwrQkFBK0Isb0NBQW9DLHFCQUFxQixLQUFLLGdCQUFnQiwwRUFBMEUsK0JBQStCLG9DQUFvQyxxQkFBcUIsS0FBSyxrQkFBa0Isc0JBQXNCLHFCQUFxQixLQUFLLHFKQUFxSixnREFBZ0QsS0FBSyxlQUFlLHdCQUF3QixLQUFLO0FBQzlzQjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDN0ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxTQUFJOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxxRUFBcUUscUJBQXFCLGFBQWE7O0FBRXZHOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDNVFBO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDTTtBQUNFO0FBQ1o7O0FBRTNCLFlBQVksbURBQUc7QUFDZixZQUFZLHlEQUFNO0FBQ2xCLFdBQVcsMkRBQU87O0FBRWxCO0FBQ0Esc0RBQXNELFNBQUk7O0FBRTFEO0FBQ0EseURBQXlELFNBQUk7O0FBRTdEO0FBQ0EsdURBQXVELFNBQUk7O0FBRTNEO0FBQ0Esb0NBQW9DLENBQUMsbURBQUcsZ0JBQWdCOztBQUV4RDtBQUNBLHFEQUFxRCxTQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ6RDtBQUFBO0FBQUE7QUFBa0M7O0FBRWxDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHdEQUFPO0FBQ2YsUUFBUSx3REFBTztBQUNmLFFBQVEsd0RBQU87QUFDZixRQUFRLHdEQUFPO0FBQ2YsUUFBUSx3REFBTztBQUNmLFFBQVEsd0RBQU87QUFDZixRQUFRLHdEQUFPO0FBQ2YsUUFBUSx3REFBTztBQUNmLFFBQVEsd0RBQU87QUFDZixRQUFRLHdEQUFPO0FBQ2YsUUFBUSx3REFBTztBQUNmLFFBQVEsd0RBQU8sd0ZBQXdGLGlGQUFpRjtBQUN4TCxRQUFRLHdEQUFPLHNGQUFzRixnRkFBZ0Y7QUFDckw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw4QztBQUNBLHlCQUF5Qix3REFBTztBQUNoQyx5QkFBeUIsd0RBQU87QUFDaEMsMEJBQTBCLHdEQUFPO0FBQ2pDLG1DQUFtQyxRQUFRO0FBQzNDLGtEQUFrRCw0QkFBNEIsYUFBYTtBQUMzRix5QkFBeUIsd0RBQU87QUFDaEMsdUJBQXVCLHdEQUFPO0FBQzlCO0FBQ0EsNkJBQTZCLHdEQUFPO0FBQ3BDLHdCQUF3Qix3REFBTztBQUMvQix3QkFBd0Isd0RBQU87QUFDL0IseUJBQXlCLHdEQUFPO0FBQ2hDLHlCQUF5Qix3REFBTztBQUNoQyw2QkFBNkIsd0RBQU87QUFDcEMsNkJBQTZCLHdEQUFPO0FBQ3BDLHlCQUF5Qix3REFBTztBQUNoQyw0QkFBNEIsd0RBQU87QUFDbkMsNEJBQTRCLHdEQUFPO0FBQ25DLDJCQUEyQix3REFBTztBQUNsQyx5QkFBeUIsd0RBQU87QUFDaEMsNEJBQTRCLHdEQUFPLDhJO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCQUEwQixnQkFBZ0I7QUFDMUMsMEVBQTBFO0FBQzFFOztBQUVBLDBDQUEwQyxRQUFRO0FBQ2xELFNBQVM7QUFDVDs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7O0FDNUlBO0FBQUE7QUFBQTtBQUEwQjs7QUFFMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLE1BQU07QUFDbEYsNkVBQTZFLE1BQU07QUFDbkYsK0NBQStDLGVBQWU7QUFDOUQsaURBQWlELGVBQWU7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE07O0FBRUE7QUFDQTtBQUNBLGtGO0FBQ0EsOEVBQThFLE1BQU0sc0Q7QUFDcEYsK0NBQStDLGVBQWU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE07O0FBRUEsNkI7QUFDQSxRQUFRLGdEQUFHO0FBQ1gsUUFBUSxnREFBRztBQUNYLFFBQVEsZ0RBQUc7QUFDWCxRQUFRLGdEQUFHO0FBQ1g7O0FBRUE7QUFDQSxRQUFRLGdEQUFHO0FBQ1gsUUFBUSxnREFBRztBQUNYLFFBQVEsZ0RBQUc7QUFDWDs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0Esd0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxFOzs7Ozs7Ozs7OztBQ2xDQSxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDJIQUF5RDs7QUFFM0Y7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvc3VtbWVyLmpwZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvc3Vuc2V0LmpwZ1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNtYWluIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA4MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jaW1hZ2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNzV2aDtcXHJcXG59XFxyXFxuXFxyXFxuI3NlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDgwdmg7XFxyXFxufVxcclxcblxcclxcbiN0ZW1wLFxcclxcbiNmZWVsLFxcclxcbiNkZXNjLFxcclxcbiNwcmVzc3VyZSxcXHJcXG4jaHVtaWRpdHksXFxyXFxuI21pblRlbXAsXFxyXFxuI21heFRlbXAsXFxyXFxuI3dpbmQsXFxyXFxuI3dpbmREaXIsXFxyXFxuI2Nsb3VkcyxcXHJcXG4jc3VucmlzZSxcXHJcXG4jc3Vuc2V0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwMjVmYWIzNWYwNzgzNzY2NTEwYzcwYzE0YmFjMzNiNi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmRjNGE2ODQ0ZDY5MDk3NWE2MTg5Mjk2ZjhjYzU0ZWUuanBnXCI7IiwiaW1wb3J0IHsgZG9tIH0gZnJvbSAnLi9qcy9kb20nO1xuaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi9qcy9ldmVudHMnO1xuaW1wb3J0IHsgaGVscGVycyB9IGZyb20gJy4vanMvaGVscGVycyc7XG5pbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcblxubGV0IG1hbmlwID0gZG9tKCk7XG5sZXQgZXZlbnQgPSBldmVudHMoKTtcbmxldCBoZWxwID0gaGVscGVycygpO1xuXG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Jyk7XG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudC5nZXRTZWFyY2guYmluZCh0aGlzLCdzZWFyY2gnKSk7XG5cbmNvbnN0IHN1Ym1pdDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0MicpO1xuc3VibWl0Mi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50LmdldEZvcmVjYXN0LmJpbmQodGhpcykpO1xuXG5jb25zdCBzZWFyY2gyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaDInKTtcbnNlYXJjaDIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudC5nZXRTZWFyY2guYmluZCh0aGlzLCAnc2VhcmNoQmFyJykpO1xuXG5jb25zdCBob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+eyBkb20oKS5zaG93KCdhYWEnKSB9KTtcblxuY29uc3QgZmFyQ2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhckNlbCcpO1xuZmFyQ2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGVscC5jb252ZXJ0ZXIuYmluZCh0aGlzKSk7XG5cblxuXG4iLCJpbXBvcnQge2hlbHBlcnN9IGZyb20gJy4vaGVscGVycyc7XHJcblxyXG5jb25zdCBkb20gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvdyh2YWx1ZSkge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIHZhbHVlID09PSAnc2VhcmNoJzpcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbjInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgdmFsdWUgPT09ICdmb3JlY2FzdCc6XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbjInKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uMicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaWxsQ2FyZChkYXRhKSB7XHJcbiAgICAgICAgaGVscGVycygpLmFkZElubmVyVGV4dCgndGl0bGUnLCBkYXRhWyduYW1lJ10pO1xyXG4gICAgICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ3RlbXAnLCAnPGkgY2xhc3M9XCJmYXMgZmEtdGhlcm1vbWV0ZXItaGFsZiB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gVGVtcDogJyArIGRhdGFbJ21haW4nXVsndGVtcCddICsgJyBDZWxzaXVzJyk7XHJcbiAgICAgICAgaGVscGVycygpLmFkZElubmVyVGV4dCgnZmVlbCcsICc8aSBjbGFzcz1cImZhcyBmYS1tZXRlb3IgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IEZlZWw6ICcgKyBkYXRhWydtYWluJ11bJ2ZlZWxzX2xpa2UnXSArICcgQ2Vsc2l1cycpO1xyXG4gICAgICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ2Rlc2MnLCAnPGkgY2xhc3M9XCJmYXMgZmEtY2xvdWQtc3VuLXJhaW4gdGV4dC13YXJuaW5nIG15LTJcIj48L2k+ICcgKyBkYXRhWyd3ZWF0aGVyJ11bMF1bJ21haW4nXSk7XHJcbiAgICAgICAgaGVscGVycygpLmFkZElubmVyVGV4dCgncHJlc3N1cmUnLCAnPGkgY2xhc3M9XCJmYXMgZmEtY29tcHJlc3MtYXJyb3dzLWFsdCB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gUHJlc3N1cmU6ICcgKyBkYXRhWydtYWluJ11bJ3ByZXNzdXJlJ10gKyAnIGhQYScpO1xyXG4gICAgICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ2h1bWlkaXR5JywgJzxpIGNsYXNzPVwiZmFzIGZhLXBlcmNlbnQgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IEh1bWlkaXR5OiAnICsgZGF0YVsnbWFpbiddWydodW1pZGl0eSddICsgJyUnKTtcclxuICAgICAgICBoZWxwZXJzKCkuYWRkSW5uZXJUZXh0KCdtaW5UZW1wJywnPGkgY2xhc3M9XCJmYXMgZmEtdGVtcGVyYXR1cmUtbG93IHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBNaW46ICcgKyBkYXRhWydtYWluJ11bJ3RlbXBfbWluJ10gKyAnIENlbHNpdXMnKTtcclxuICAgICAgICBoZWxwZXJzKCkuYWRkSW5uZXJUZXh0KCdtYXhUZW1wJywnPGkgY2xhc3M9XCJmYXMgZmEtdGVtcGVyYXR1cmUtaGlnaCB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gTWF4OiAnICsgZGF0YVsnbWFpbiddWyd0ZW1wX21heCddICsgJyBDZWxzaXVzJyk7XHJcbiAgICAgICAgaGVscGVycygpLmFkZElubmVyVGV4dCgnd2luZCcsJzxpIGNsYXNzPVwiZmFzIGZhLXdpbmQgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+ICcgKyBkYXRhWyd3aW5kJ11bJ3NwZWVkJ10gKyAnIG1ldGVyL3NlYycpO1xyXG4gICAgICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ3dpbmREaXInLCc8aSBjbGFzcz1cImZhcyBmYS1jb21wYXNzIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiAnICsgZGF0YVsnd2luZCddWydkZWcnXSArICcgZGVncmVlcycpO1xyXG4gICAgICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ2Nsb3VkcycsJzxpIGNsYXNzPVwiZmFzIGZhLWNsb3VkIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBDbG91ZHM6ICcgKyBkYXRhWydjbG91ZHMnXVsnYWxsJ10gKyAnJScpO1xyXG4gICAgICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ3N1bnJpc2UnLCc8aSBjbGFzcz1cImZhcyBmYS1zdW4gdGV4dC13YXJuaW5nIG15LTJcIj48L2k+ICcgKyBgU3VucmlzZTogJHtuZXcgRGF0ZSgoZGF0YS5zeXMuc3VucmlzZSArIGRhdGEudGltZXpvbmUpICogMTAwMCkudG9VVENTdHJpbmcoKS5zbGljZSgtMTEsIC03KX0gQU1gKTtcclxuICAgICAgICBoZWxwZXJzKCkuYWRkSW5uZXJUZXh0KCdzdW5zZXQnLCc8aSBjbGFzcz1cImZhcyBmYS1zdW4gdGV4dC13YXJuaW5nIG15LTJcIj48L2k+ICcgKyBgU3Vuc2V0OiAke25ldyBEYXRlKChkYXRhLnN5cy5zdW5zZXQgKyBkYXRhLnRpbWV6b25lKSAqIDEwMDApLnRvVVRDU3RyaW5nKCkuc2xpY2UoLTExLCAtNyl9IFBNYCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW1hZ2VTd2l0Y2goZGF0YSwgaWQpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZGF0YVsnd2VhdGhlciddWzBdWydpZCddO1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNvZGUgPj0gMjAwICYmIGNvZGUgPD0gMjMyOlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9zcmMvaW1hZ2VzL2xpZ2h0aW5nLmpwZycpXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjb2RlID49IDMwMCAmJiBjb2RlIDw9IDMyMTpcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vc3JjL2ltYWdlcy9kcml6emxlLmpwZycpXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjb2RlID49IDUwMCAmJiBjb2RlIDw9IDUzMTpcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vc3JjL2ltYWdlcy9yYWluLmpwZycpXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjb2RlID49IDYwMCAmJiBjb2RlIDw9IDYyMjpcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vc3JjL2ltYWdlcy9zbm93LmpwZycpXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjb2RlID49IDcwMSAmJiBjb2RlIDw9IDc4MTpcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vc3JjL2ltYWdlcy9taXN0LmpwZycpXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjb2RlID49IDgwMSAmJiBjb2RlIDw9IDgwNDpcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vc3JjL2ltYWdlcy9yYWluY2xvdWRzLmpwZycpXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjb2RlPT04MDA6XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9pbWFnZXMvc2hpbmluZ3N1bi5qcGcnKVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9pbWFnZXMvYmx1ZXNreS5qcGcnKVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhckZvcm1zKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoaW5nXCIpLnJlc2V0KCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdlNlYXJjaCcpLnJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2FyZChkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5TmFtZScpO1xyXG4gICAgICAgIG5hbWUuaW5uZXJIVE1MID0gZGF0YS5jaXR5Lm5hbWU7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdycpO1xyXG4gICAgICAgIHJvdy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0Rml2ZSA9IGRhdGEubGlzdC5maWx0ZXIoZnVuY3Rpb24odmFsdWUsIGluZGV4LCBBcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGluZGV4ICUgOCA9PSAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvcmVjYXN0Rml2ZS5mb3JFYWNoICgoZGF5LCBpbmRleCkgPT57ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnQgPSBoZWxwZXJzKCkuY3JlYXRlRWxlbWVudCgnZGl2JywgXCJjb2wtNVwiKTtcclxuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50KCdkaXYnLCBcImNhcmQgYmctZGFyayB0ZXh0LXdoaXRlIHctMTAwIG1iLTIgbXgtMlwiKTtcclxuICAgICAgICAgICAgY29uc3QgaW1nQmcgPSBoZWxwZXJzKCkuY3JlYXRlRWxlbWVudCgnZGl2JywgJycpO1xyXG4gICAgICAgICAgICBpbWdCZy5pZCA9ICdpbWFnZXMnK2Ake2luZGV4KzF9YDtcclxuICAgICAgICAgICAgaW1nQmcuc3R5bGUgPSBcImJhY2tncm91bmQtc2l6ZTogY292ZXI7YmFja2dyb3VuZC1wb3NpdGlvbi15OiAxMDAlO2hlaWdodDogNzV2aDtcIjtcclxuICAgICAgICAgICAgY29uc3Qgb3ZlciA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50KCdkaXYnLCBcImNhcmQtaW1nLW92ZXJsYXlcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGg1ID0gaGVscGVycygpLmNyZWF0ZUVsZW1lbnQoJ2g1JywgXCJjYXJkLXRpdGxlIHRleHQtY2VudGVyIHRleHQtd2FybmluZ1wiKTtcclxuICAgICAgICAgICAgaDUuaW5uZXJIVE1MID0gZGF5LmR0X3R4dC5zbGljZSgwLCAtOSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RDb250ID0gaGVscGVycygpLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1hcm91bmRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHVsMSA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50KCd1bCcsXCJsaXN0LWdyb3VwIGxpc3QtdW5zdHlsZWRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHVsMiA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50KCd1bCcsXCJsaXN0LWdyb3VwIGxpc3QtdW5zdHlsZWRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBoZWxwZXJzKCkuY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQoJ2xpJywgXCJsaXN0LWdyb3VwLWl0ZW1cIiwgJzxpIGNsYXNzPVwiZmFzIGZhLXRoZXJtb21ldGVyLWhhbGYgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IFRlbXA6ICcgKyBkYXlbJ21haW4nXVsndGVtcCddICsgJyBDZWxzaXVzJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZlZWwgPSBoZWxwZXJzKCkuY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQoJ2xpJywgXCJsaXN0LWdyb3VwLWl0ZW1cIiwgJzxpIGNsYXNzPVwiZmFzIGZhLW1ldGVvciB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gRmVlbDogJyArIGRheVsnbWFpbiddWydmZWVsc19saWtlJ10gKyAnIENlbHNpdXMnKTtcclxuICAgICAgICAgICAgY29uc3QgcHJlc3N1cmUgPSBoZWxwZXJzKCkuY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQoJ2xpJywgXCJsaXN0LWdyb3VwLWl0ZW1cIiwgJzxpIGNsYXNzPVwiZmFzIGZhLWNvbXByZXNzLWFycm93cy1hbHQgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IFByZXNzdXJlOiAnICsgZGF5WydtYWluJ11bJ3ByZXNzdXJlJ10gKyAnIGhQYScpO1xyXG4gICAgICAgICAgICBjb25zdCBodW1pZGl0eSA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCgnbGknLCBcImxpc3QtZ3JvdXAtaXRlbVwiLCAnPGkgY2xhc3M9XCJmYXMgZmEtcGVyY2VudCB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gSHVtaWRpdHk6ICcgKyBkYXlbJ21haW4nXVsnaHVtaWRpdHknXSArICclJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2MgPSBoZWxwZXJzKCkuY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQoJ2xpJywgXCJsaXN0LWdyb3VwLWl0ZW1cIiwgJzxpIGNsYXNzPVwiZmFzIGZhLWNsb3VkLXN1bi1yYWluIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiAnICsgZGF5Wyd3ZWF0aGVyJ11bMF1bJ21haW4nXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pblRlbXAgPSBoZWxwZXJzKCkuY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQoJ2xpJywgXCJsaXN0LWdyb3VwLWl0ZW1cIiwgJzxpIGNsYXNzPVwiZmFzIGZhLXRlbXBlcmF0dXJlLWxvdyB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gTWluOiAnICsgZGF5WydtYWluJ11bJ3RlbXBfbWluJ10gKyAnIENlbHNpdXMnKTtcclxuICAgICAgICAgICAgY29uc3QgbWF4VGVtcCA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCgnbGknLCBcImxpc3QtZ3JvdXAtaXRlbVwiLCAnPGkgY2xhc3M9XCJmYXMgZmEtdGVtcGVyYXR1cmUtaGlnaCB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gTWF4OiAnICsgZGF5WydtYWluJ11bJ3RlbXBfbWF4J10gKyAnIENlbHNpdXMnKTtcclxuICAgICAgICAgICAgY29uc3QgY2xvdWRzID0gaGVscGVycygpLmNyZWF0ZUVsZW1lbnRXaXRoSW5uZXJUZXh0KCdsaScsIFwibGlzdC1ncm91cC1pdGVtXCIsICc8aSBjbGFzcz1cImZhcyBmYS1jbG91ZCB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gQ2xvdWRzOiAnICsgZGF5WydjbG91ZHMnXVsnYWxsJ10gKyAnJScpO1xyXG4gICAgICAgICAgICBjb25zdCB3aW5kID0gaGVscGVycygpLmNyZWF0ZUVsZW1lbnRXaXRoSW5uZXJUZXh0KCdsaScsIFwibGlzdC1ncm91cC1pdGVtXCIsICc8aSBjbGFzcz1cImZhcyBmYS13aW5kIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiAnICsgZGF5Wyd3aW5kJ11bJ3NwZWVkJ10gKyAnIG1ldGVyL3NlYycpO1xyXG4gICAgICAgICAgICBjb25zdCB3aW5kRGlyID0gaGVscGVycygpLmNyZWF0ZUVsZW1lbnRXaXRoSW5uZXJUZXh0KCdsaScsIFwibGlzdC1ncm91cC1pdGVtXCIsICc8aSBjbGFzcz1cImZhcyBmYS1jb21wYXNzIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiAnICsgZGF5Wyd3aW5kJ11bJ2RlZyddICsgJyBkZWdyZWVzJyk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGlzdC1ncm91cC1pdGVtJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB1bDIuYXBwZW5kQ2hpbGQobWluVGVtcCk7XHJcbiAgICAgICAgICAgIHVsMi5hcHBlbmRDaGlsZChtYXhUZW1wKTtcclxuICAgICAgICAgICAgdWwyLmFwcGVuZENoaWxkKHdpbmQpO1xyXG4gICAgICAgICAgICB1bDIuYXBwZW5kQ2hpbGQod2luZERpcik7XHJcbiAgICAgICAgICAgIHVsMi5hcHBlbmRDaGlsZChjbG91ZHMpO1xyXG5cclxuICAgICAgICAgICAgdWwxLmFwcGVuZENoaWxkKHRlbXApO1xyXG4gICAgICAgICAgICB1bDEuYXBwZW5kQ2hpbGQoZmVlbCk7XHJcbiAgICAgICAgICAgIHVsMS5hcHBlbmRDaGlsZChkZXNjKTtcclxuICAgICAgICAgICAgdWwxLmFwcGVuZENoaWxkKHByZXNzdXJlKTtcclxuICAgICAgICAgICAgdWwxLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcclxuXHJcbiAgICAgICAgICAgIGxpc3RDb250LmFwcGVuZENoaWxkKHVsMSk7XHJcbiAgICAgICAgICAgIGxpc3RDb250LmFwcGVuZENoaWxkKHVsMik7XHJcblxyXG4gICAgICAgICAgICBvdmVyLmFwcGVuZENoaWxkKGg1KTtcclxuICAgICAgICAgICAgb3Zlci5hcHBlbmRDaGlsZChsaXN0Q29udCk7XHJcblxyXG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZ0JnKTtcclxuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChvdmVyKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnQuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjb250KTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGk8Y29sb3IubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgY29sb3JbaV0uc3R5bGUgPSBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcIjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGltYWdlU3dpdGNoKGRheSwgKCdpbWFnZXMnK2Ake2luZGV4KzF9YCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHNob3csIGZpbGxDYXJkLCBpbWFnZVN3aXRjaCwgY3JlYXRlQ2FyZCwgY2xlYXJGb3JtcyB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBkb20gfSIsImltcG9ydCB7ZG9tfSBmcm9tICcuL2RvbSc7XHJcblxyXG5jb25zdCBldmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFNlYXJjaChzZWFyY2hCYXIpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWFyY2hCYXIpLnZhbHVlKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7dmFsdWV9JkFQUElEPTkwMzUwN2YxN2Q3MDdmZWNkMzUyZDM4MzAxZWZiYTc3JnVuaXRzPW1ldHJpY2A7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybDIgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7dmFsdWV9JkFQUElEPTkwMzUwN2YxN2Q3MDdmZWNkMzUyZDM4MzAxZWZiYTc3JnVuaXRzaW1wZXJpYWxgO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IGZldGNoKHVybDIsIHsgbW9kZTogJ2NvcnMnIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBjaXR5RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgY29uc3QgY2l0eURhdGEyID0gYXdhaXQgcmVzcG9uc2UyLmpzb24oKTtcclxuICAgICAgICAgICAgc2hvd0Zsb3coY2l0eURhdGEpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgICAgICAgYWxlcnQoJ0NvdWxkIG5vdCBmaW5kIHRoZSBsb2NhdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH07ICBcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJykudmFsdWUpLnRvTG93ZXJDYXNlKCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke3ZhbHVlfSZ1bml0cz1tZXRyaWMmYXBwaWQ9OTAzNTA3ZjE3ZDcwN2ZlY2QzNTJkMzgzMDFlZmJhNzdgOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNpdHlEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaXR5RGF0YS5saXN0KVxyXG4gICAgICAgICAgICBmb3JlY2FzdEZsb3coY2l0eURhdGEpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgICAgICAgYWxlcnQoJ0NvdWxkIG5vdCBmaW5kIHRoZSBsb2NhdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH07IFxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dGbG93KGRhdGEpIHsgICAgICAgIFxyXG4gICAgICAgIGRvbSgpLmNsZWFyRm9ybXMoKTtcclxuICAgICAgICBkb20oKS5maWxsQ2FyZChkYXRhKTtcclxuICAgICAgICBkb20oKS5pbWFnZVN3aXRjaChkYXRhLCAnaW1hZ2UnKTtcclxuICAgICAgICBkb20oKS5zaG93KCdzZWFyY2gnKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZm9yZWNhc3RGbG93KGRhdGEpIHtcclxuICAgICAgICBkb20oKS5jbGVhckZvcm1zKCk7XHJcbiAgICAgICAgZG9tKCkuY3JlYXRlQ2FyZChkYXRhKTtcclxuICAgICAgICBkb20oKS5zaG93KCdmb3JlY2FzdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGdldFNlYXJjaCwgc2hvd0Zsb3csIGdldEZvcmVjYXN0LCB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBldmVudHMgfSIsImNvbnN0IGhlbHBlcnMgPSBmdW5jdGlvbiBoZWxwZXJzKCkge1xyXG4gICAgY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBjbGFzc05hbWUpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQgPSBmdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCh0YWcsIGNsYXNzTmFtZSwgdGV4dCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IGFkZElubmVyVGV4dCA9IGZ1bmN0aW9uIGFkZElubmVyVGV4dChjbGFzc05hbWUsIHRleHQpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2xhc3NOYW1lKTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0OyAgICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNvbnZlcnRlcigpe1xyXG4gICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcCcpLmlubmVySFRNTC5pbmNsdWRlcygnQ2Vsc2l1cycpKXtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB0ZW1wRmFocmVuaGVpdCA9IHBhcnNlRmxvYXQoKHRlbXBDZWxzaXVzICogKDkgLyA1KSArIDMyKS50b0ZpeGVkKDIpKTtcclxuICAgICAgY29uc3QgdGVtcENlbHNpdXMgPSBwYXJzZUZsb2F0KCgodGVtcEZhaHJlbmhlaXQgLSAzMikgKiA1LzkpLnRvRml4ZWQoMikpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYWRkSW5uZXJUZXh0LCBjcmVhdGVFbGVtZW50LCBjb252ZXJ0ZXIsIGNyZWF0ZUVsZW1lbnRXaXRoSW5uZXJUZXh0LCBcclxuICAgIH07XHJcbiAgfTtcclxuICBcclxuICBcclxuICBleHBvcnQgeyBoZWxwZXJzIH07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==