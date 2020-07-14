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
exports.push([module.i, "#main {\r\n    display: block;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover;\r\n    background-position-y: 100%;\r\n    height: 80vh;\r\n}\r\n\r\n#image {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-size: cover;\r\n    background-position-y: 100%;\r\n    height: 75vh;\r\n}\r\n\r\n#section {\r\n    display: none;\r\n    height: 80vh;\r\n}\r\n\r\n#temp,\r\n#feel,\r\n#desc,\r\n#pressure,\r\n#humidity,\r\n#minTemp,\r\n#maxTemp,\r\n#wind,\r\n#windDir,\r\n#clouds,\r\n#sunrise,\r\n#sunset {\r\n    background-color: rgba(255,255,255,0.1);\r\n}\r\n\r\n#home {\r\n    cursor: pointer;\r\n}", ""]);
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
            for(let i = 0; i<color.length; i++){
                color[i].style = "background-color: rgba(255,255,255,0.1);";
            };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc3VtbWVyLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N1bnNldC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFD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O0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHdDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsRTs7Ozs7Ozs7Ozs7QUNsQ0EsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQywySEFBeUQ7O0FBRTNGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL3N1bW1lci5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL3N1bnNldC5qcGdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjbWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogODB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI2ltYWdlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDc1dmg7XFxyXFxufVxcclxcblxcclxcbiNzZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiA4MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jdGVtcCxcXHJcXG4jZmVlbCxcXHJcXG4jZGVzYyxcXHJcXG4jcHJlc3N1cmUsXFxyXFxuI2h1bWlkaXR5LFxcclxcbiNtaW5UZW1wLFxcclxcbiNtYXhUZW1wLFxcclxcbiN3aW5kLFxcclxcbiN3aW5kRGlyLFxcclxcbiNjbG91ZHMsXFxyXFxuI3N1bnJpc2UsXFxyXFxuI3N1bnNldCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWUge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDI1ZmFiMzVmMDc4Mzc2NjUxMGM3MGMxNGJhYzMzYjYuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjZkYzRhNjg0NGQ2OTA5NzVhNjE4OTI5NmY4Y2M1NGVlLmpwZ1wiOyIsImltcG9ydCB7IGRvbSB9IGZyb20gJy4vanMvZG9tJztcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4vanMvZXZlbnRzJztcbmltcG9ydCB7IGhlbHBlcnMgfSBmcm9tICcuL2pzL2hlbHBlcnMnO1xuaW1wb3J0ICcuL3N0eWxlL3N0eWxlLmNzcyc7XG5cbmxldCBtYW5pcCA9IGRvbSgpO1xubGV0IGV2ZW50ID0gZXZlbnRzKCk7XG5sZXQgaGVscCA9IGhlbHBlcnMoKTtcblxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpO1xuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQuZ2V0U2VhcmNoLmJpbmQodGhpcywnc2VhcmNoJykpO1xuXG5jb25zdCBzdWJtaXQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdDInKTtcbnN1Ym1pdDIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudC5nZXRGb3JlY2FzdC5iaW5kKHRoaXMpKTtcblxuY29uc3Qgc2VhcmNoMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gyJyk7XG5zZWFyY2gyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQuZ2V0U2VhcmNoLmJpbmQodGhpcywgJ3NlYXJjaEJhcicpKTtcblxuY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PnsgZG9tKCkuc2hvdygnYWFhJykgfSk7XG5cbmNvbnN0IGZhckNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYXJDZWwnKTtcbmZhckNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhlbHAuY29udmVydGVyLmJpbmQodGhpcykpO1xuXG5cblxuIiwiaW1wb3J0IHtoZWxwZXJzfSBmcm9tICcuL2hlbHBlcnMnO1xyXG5cclxuY29uc3QgZG9tID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3codmFsdWUpIHtcclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSB2YWx1ZSA9PT0gJ3NlYXJjaCc6XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24yJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHZhbHVlID09PSAnZm9yZWNhc3QnOlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24yJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbjInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmlsbENhcmQoZGF0YSkge1xyXG4gICAgICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ3RpdGxlJywgZGF0YVsnbmFtZSddKTtcclxuICAgICAgICBoZWxwZXJzKCkuYWRkSW5uZXJUZXh0KCd0ZW1wJywgJzxpIGNsYXNzPVwiZmFzIGZhLXRoZXJtb21ldGVyLWhhbGYgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IFRlbXA6ICcgKyBkYXRhWydtYWluJ11bJ3RlbXAnXSArICcgQ2Vsc2l1cycpO1xyXG4gICAgICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ2ZlZWwnLCAnPGkgY2xhc3M9XCJmYXMgZmEtbWV0ZW9yIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBGZWVsOiAnICsgZGF0YVsnbWFpbiddWydmZWVsc19saWtlJ10gKyAnIENlbHNpdXMnKTtcclxuICAgICAgICBoZWxwZXJzKCkuYWRkSW5uZXJUZXh0KCdkZXNjJywgJzxpIGNsYXNzPVwiZmFzIGZhLWNsb3VkLXN1bi1yYWluIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiAnICsgZGF0YVsnd2VhdGhlciddWzBdWydtYWluJ10pO1xyXG4gICAgICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ3ByZXNzdXJlJywgJzxpIGNsYXNzPVwiZmFzIGZhLWNvbXByZXNzLWFycm93cy1hbHQgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IFByZXNzdXJlOiAnICsgZGF0YVsnbWFpbiddWydwcmVzc3VyZSddICsgJyBoUGEnKTtcclxuICAgICAgICBoZWxwZXJzKCkuYWRkSW5uZXJUZXh0KCdodW1pZGl0eScsICc8aSBjbGFzcz1cImZhcyBmYS1wZXJjZW50IHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBIdW1pZGl0eTogJyArIGRhdGFbJ21haW4nXVsnaHVtaWRpdHknXSArICclJyk7XHJcbiAgICAgICAgaGVscGVycygpLmFkZElubmVyVGV4dCgnbWluVGVtcCcsJzxpIGNsYXNzPVwiZmFzIGZhLXRlbXBlcmF0dXJlLWxvdyB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gTWluOiAnICsgZGF0YVsnbWFpbiddWyd0ZW1wX21pbiddICsgJyBDZWxzaXVzJyk7XHJcbiAgICAgICAgaGVscGVycygpLmFkZElubmVyVGV4dCgnbWF4VGVtcCcsJzxpIGNsYXNzPVwiZmFzIGZhLXRlbXBlcmF0dXJlLWhpZ2ggdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IE1heDogJyArIGRhdGFbJ21haW4nXVsndGVtcF9tYXgnXSArICcgQ2Vsc2l1cycpO1xyXG4gICAgICAgIGhlbHBlcnMoKS5hZGRJbm5lclRleHQoJ3dpbmQnLCc8aSBjbGFzcz1cImZhcyBmYS13aW5kIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiAnICsgZGF0YVsnd2luZCddWydzcGVlZCddICsgJyBtZXRlci9zZWMnKTtcclxuICAgICAgICBoZWxwZXJzKCkuYWRkSW5uZXJUZXh0KCd3aW5kRGlyJywnPGkgY2xhc3M9XCJmYXMgZmEtY29tcGFzcyB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gJyArIGRhdGFbJ3dpbmQnXVsnZGVnJ10gKyAnIGRlZ3JlZXMnKTtcclxuICAgICAgICBoZWxwZXJzKCkuYWRkSW5uZXJUZXh0KCdjbG91ZHMnLCc8aSBjbGFzcz1cImZhcyBmYS1jbG91ZCB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gQ2xvdWRzOiAnICsgZGF0YVsnY2xvdWRzJ11bJ2FsbCddICsgJyUnKTtcclxuICAgICAgICBoZWxwZXJzKCkuYWRkSW5uZXJUZXh0KCdzdW5yaXNlJywnPGkgY2xhc3M9XCJmYXMgZmEtc3VuIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiAnICsgYFN1bnJpc2U6ICR7bmV3IERhdGUoKGRhdGEuc3lzLnN1bnJpc2UgKyBkYXRhLnRpbWV6b25lKSAqIDEwMDApLnRvVVRDU3RyaW5nKCkuc2xpY2UoLTExLCAtNyl9IEFNYCk7XHJcbiAgICAgICAgaGVscGVycygpLmFkZElubmVyVGV4dCgnc3Vuc2V0JywnPGkgY2xhc3M9XCJmYXMgZmEtc3VuIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiAnICsgYFN1bnNldDogJHtuZXcgRGF0ZSgoZGF0YS5zeXMuc3Vuc2V0ICsgZGF0YS50aW1lem9uZSkgKiAxMDAwKS50b1VUQ1N0cmluZygpLnNsaWNlKC0xMSwgLTcpfSBQTWApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGltYWdlU3dpdGNoKGRhdGEsIGlkKSB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGRhdGFbJ3dlYXRoZXInXVswXVsnaWQnXTtcclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSBjb2RlID49IDIwMCAmJiBjb2RlIDw9IDIzMjpcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vc3JjL2ltYWdlcy9saWdodGluZy5qcGcnKVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY29kZSA+PSAzMDAgJiYgY29kZSA8PSAzMjE6XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9pbWFnZXMvZHJpenpsZS5qcGcnKVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY29kZSA+PSA1MDAgJiYgY29kZSA8PSA1MzE6XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9pbWFnZXMvcmFpbi5qcGcnKVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY29kZSA+PSA2MDAgJiYgY29kZSA8PSA2MjI6XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9pbWFnZXMvc25vdy5qcGcnKVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY29kZSA+PSA3MDEgJiYgY29kZSA8PSA3ODE6XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9pbWFnZXMvbWlzdC5qcGcnKVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY29kZSA+PSA4MDEgJiYgY29kZSA8PSA4MDQ6XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9pbWFnZXMvcmFpbmNsb3Vkcy5qcGcnKVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY29kZT09ODAwOlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9zcmMvaW1hZ2VzL3NoaW5pbmdzdW4uanBnJylcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9zcmMvaW1hZ2VzL2JsdWVza3kuanBnJylcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJGb3JtcygpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaGluZ1wiKS5yZXNldCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZTZWFyY2gnKS5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNhcmQoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eU5hbWUnKTtcclxuICAgICAgICBuYW1lLmlubmVySFRNTCA9IGRhdGEuY2l0eS5uYW1lO1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3cnKTtcclxuICAgICAgICByb3cuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBjb25zdCBmb3JlY2FzdEZpdmUgPSBkYXRhLmxpc3QuZmlsdGVyKGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgQXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleCAlIDggPT0gMDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3JlY2FzdEZpdmUuZm9yRWFjaCAoKGRheSwgaW5kZXgpID0+eyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBjb250ID0gaGVscGVycygpLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFwiY29sLTVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBoZWxwZXJzKCkuY3JlYXRlRWxlbWVudCgnZGl2JywgXCJjYXJkIGJnLWRhcmsgdGV4dC13aGl0ZSB3LTEwMCBtYi0yIG14LTJcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGltZ0JnID0gaGVscGVycygpLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICcnKTtcclxuICAgICAgICAgICAgaW1nQmcuaWQgPSAnaW1hZ2VzJytgJHtpbmRleCsxfWA7XHJcbiAgICAgICAgICAgIGltZ0JnLnN0eWxlID0gXCJiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO2JhY2tncm91bmQtcG9zaXRpb24teTogMTAwJTtoZWlnaHQ6IDc1dmg7XCI7XHJcbiAgICAgICAgICAgIGNvbnN0IG92ZXIgPSBoZWxwZXJzKCkuY3JlYXRlRWxlbWVudCgnZGl2JywgXCJjYXJkLWltZy1vdmVybGF5XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBoNSA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50KCdoNScsIFwiY2FyZC10aXRsZSB0ZXh0LWNlbnRlciB0ZXh0LXdhcm5pbmdcIik7XHJcbiAgICAgICAgICAgIGg1LmlubmVySFRNTCA9IGRheS5kdF90eHQuc2xpY2UoMCwgLTkpO1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0Q29udCA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50KCdkaXYnLCBcImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB1bDEgPSBoZWxwZXJzKCkuY3JlYXRlRWxlbWVudCgndWwnLFwibGlzdC1ncm91cCBsaXN0LXVuc3R5bGVkXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB1bDIgPSBoZWxwZXJzKCkuY3JlYXRlRWxlbWVudCgndWwnLFwibGlzdC1ncm91cCBsaXN0LXVuc3R5bGVkXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gaGVscGVycygpLmNyZWF0ZUVsZW1lbnRXaXRoSW5uZXJUZXh0KCdsaScsIFwibGlzdC1ncm91cC1pdGVtXCIsICc8aSBjbGFzcz1cImZhcyBmYS10aGVybW9tZXRlci1oYWxmIHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBUZW1wOiAnICsgZGF5WydtYWluJ11bJ3RlbXAnXSArICcgQ2Vsc2l1cycpO1xyXG4gICAgICAgICAgICBjb25zdCBmZWVsID0gaGVscGVycygpLmNyZWF0ZUVsZW1lbnRXaXRoSW5uZXJUZXh0KCdsaScsIFwibGlzdC1ncm91cC1pdGVtXCIsICc8aSBjbGFzcz1cImZhcyBmYS1tZXRlb3IgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IEZlZWw6ICcgKyBkYXlbJ21haW4nXVsnZmVlbHNfbGlrZSddICsgJyBDZWxzaXVzJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXNzdXJlID0gaGVscGVycygpLmNyZWF0ZUVsZW1lbnRXaXRoSW5uZXJUZXh0KCdsaScsIFwibGlzdC1ncm91cC1pdGVtXCIsICc8aSBjbGFzcz1cImZhcyBmYS1jb21wcmVzcy1hcnJvd3MtYWx0IHRleHQtd2FybmluZyBteS0yXCI+PC9pPiBQcmVzc3VyZTogJyArIGRheVsnbWFpbiddWydwcmVzc3VyZSddICsgJyBoUGEnKTtcclxuICAgICAgICAgICAgY29uc3QgaHVtaWRpdHkgPSBoZWxwZXJzKCkuY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQoJ2xpJywgXCJsaXN0LWdyb3VwLWl0ZW1cIiwgJzxpIGNsYXNzPVwiZmFzIGZhLXBlcmNlbnQgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IEh1bWlkaXR5OiAnICsgZGF5WydtYWluJ11bJ2h1bWlkaXR5J10gKyAnJScpO1xyXG4gICAgICAgICAgICBjb25zdCBkZXNjID0gaGVscGVycygpLmNyZWF0ZUVsZW1lbnRXaXRoSW5uZXJUZXh0KCdsaScsIFwibGlzdC1ncm91cC1pdGVtXCIsICc8aSBjbGFzcz1cImZhcyBmYS1jbG91ZC1zdW4tcmFpbiB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gJyArIGRheVsnd2VhdGhlciddWzBdWydtYWluJ10pO1xyXG4gICAgICAgICAgICBjb25zdCBtaW5UZW1wID0gaGVscGVycygpLmNyZWF0ZUVsZW1lbnRXaXRoSW5uZXJUZXh0KCdsaScsIFwibGlzdC1ncm91cC1pdGVtXCIsICc8aSBjbGFzcz1cImZhcyBmYS10ZW1wZXJhdHVyZS1sb3cgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IE1pbjogJyArIGRheVsnbWFpbiddWyd0ZW1wX21pbiddICsgJyBDZWxzaXVzJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heFRlbXAgPSBoZWxwZXJzKCkuY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQoJ2xpJywgXCJsaXN0LWdyb3VwLWl0ZW1cIiwgJzxpIGNsYXNzPVwiZmFzIGZhLXRlbXBlcmF0dXJlLWhpZ2ggdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IE1heDogJyArIGRheVsnbWFpbiddWyd0ZW1wX21heCddICsgJyBDZWxzaXVzJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3VkcyA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCgnbGknLCBcImxpc3QtZ3JvdXAtaXRlbVwiLCAnPGkgY2xhc3M9XCJmYXMgZmEtY2xvdWQgdGV4dC13YXJuaW5nIG15LTJcIj48L2k+IENsb3VkczogJyArIGRheVsnY2xvdWRzJ11bJ2FsbCddICsgJyUnKTtcclxuICAgICAgICAgICAgY29uc3Qgd2luZCA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCgnbGknLCBcImxpc3QtZ3JvdXAtaXRlbVwiLCAnPGkgY2xhc3M9XCJmYXMgZmEtd2luZCB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gJyArIGRheVsnd2luZCddWydzcGVlZCddICsgJyBtZXRlci9zZWMnKTtcclxuICAgICAgICAgICAgY29uc3Qgd2luZERpciA9IGhlbHBlcnMoKS5jcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCgnbGknLCBcImxpc3QtZ3JvdXAtaXRlbVwiLCAnPGkgY2xhc3M9XCJmYXMgZmEtY29tcGFzcyB0ZXh0LXdhcm5pbmcgbXktMlwiPjwvaT4gJyArIGRheVsnd2luZCddWydkZWcnXSArICcgZGVncmVlcycpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xpc3QtZ3JvdXAtaXRlbScpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpPGNvbG9yLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGNvbG9yW2ldLnN0eWxlID0gXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XCI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHVsMi5hcHBlbmRDaGlsZChtaW5UZW1wKTtcclxuICAgICAgICAgICAgdWwyLmFwcGVuZENoaWxkKG1heFRlbXApO1xyXG4gICAgICAgICAgICB1bDIuYXBwZW5kQ2hpbGQod2luZCk7XHJcbiAgICAgICAgICAgIHVsMi5hcHBlbmRDaGlsZCh3aW5kRGlyKTtcclxuICAgICAgICAgICAgdWwyLmFwcGVuZENoaWxkKGNsb3Vkcyk7XHJcblxyXG4gICAgICAgICAgICB1bDEuYXBwZW5kQ2hpbGQodGVtcCk7XHJcbiAgICAgICAgICAgIHVsMS5hcHBlbmRDaGlsZChmZWVsKTtcclxuICAgICAgICAgICAgdWwxLmFwcGVuZENoaWxkKGRlc2MpO1xyXG4gICAgICAgICAgICB1bDEuYXBwZW5kQ2hpbGQocHJlc3N1cmUpO1xyXG4gICAgICAgICAgICB1bDEuYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xyXG5cclxuICAgICAgICAgICAgbGlzdENvbnQuYXBwZW5kQ2hpbGQodWwxKTtcclxuICAgICAgICAgICAgbGlzdENvbnQuYXBwZW5kQ2hpbGQodWwyKTtcclxuXHJcbiAgICAgICAgICAgIG92ZXIuYXBwZW5kQ2hpbGQoaDUpO1xyXG4gICAgICAgICAgICBvdmVyLmFwcGVuZENoaWxkKGxpc3RDb250KTtcclxuXHJcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nQmcpO1xyXG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKG92ZXIpO1xyXG5cclxuICAgICAgICAgICAgY29udC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNvbnQpO1xyXG5cclxuICAgICAgICAgICAgaW1hZ2VTd2l0Y2goZGF5LCAoJ2ltYWdlcycrYCR7aW5kZXgrMX1gKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc2hvdywgZmlsbENhcmQsIGltYWdlU3dpdGNoLCBjcmVhdGVDYXJkLCBjbGVhckZvcm1zIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IGRvbSB9IiwiaW1wb3J0IHtkb219IGZyb20gJy4vZG9tJztcclxuXHJcbmNvbnN0IGV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0U2VhcmNoKHNlYXJjaEJhcikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlYXJjaEJhcikudmFsdWUpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHt2YWx1ZX0mQVBQSUQ9OTAzNTA3ZjE3ZDcwN2ZlY2QzNTJkMzgzMDFlZmJhNzcmdW5pdHM9bWV0cmljYDtcclxuICAgICAgICAgICAgY29uc3QgdXJsMiA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHt2YWx1ZX0mQVBQSUQ9OTAzNTA3ZjE3ZDcwN2ZlY2QzNTJkMzgzMDFlZmJhNzcmdW5pdHNpbXBlcmlhbGA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UyID0gYXdhaXQgZmV0Y2godXJsMiwgeyBtb2RlOiAnY29ycycgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNpdHlEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBjaXR5RGF0YTIgPSBhd2FpdCByZXNwb25zZTIuanNvbigpO1xyXG4gICAgICAgICAgICBzaG93RmxvdyhjaXR5RGF0YSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICBhbGVydCgnQ291bGQgbm90IGZpbmQgdGhlIGxvY2F0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTsgIFxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKS52YWx1ZSkudG9Mb3dlckNhc2UoKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7dmFsdWV9JnVuaXRzPW1ldHJpYyZhcHBpZD05MDM1MDdmMTdkNzA3ZmVjZDM1MmQzODMwMWVmYmE3N2A7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcclxuICAgICAgICAgICAgY29uc3QgY2l0eURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNpdHlEYXRhLmxpc3QpXHJcbiAgICAgICAgICAgIGZvcmVjYXN0RmxvdyhjaXR5RGF0YSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICBhbGVydCgnQ291bGQgbm90IGZpbmQgdGhlIGxvY2F0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTsgXHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0Zsb3coZGF0YSkgeyAgICAgICAgXHJcbiAgICAgICAgZG9tKCkuY2xlYXJGb3JtcygpO1xyXG4gICAgICAgIGRvbSgpLmZpbGxDYXJkKGRhdGEpO1xyXG4gICAgICAgIGRvbSgpLmltYWdlU3dpdGNoKGRhdGEsICdpbWFnZScpO1xyXG4gICAgICAgIGRvbSgpLnNob3coJ3NlYXJjaCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBmb3JlY2FzdEZsb3coZGF0YSkge1xyXG4gICAgICAgIGRvbSgpLmNsZWFyRm9ybXMoKTtcclxuICAgICAgICBkb20oKS5jcmVhdGVDYXJkKGRhdGEpO1xyXG4gICAgICAgIGRvbSgpLnNob3coJ2ZvcmVjYXN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgZ2V0U2VhcmNoLCBzaG93RmxvdywgZ2V0Rm9yZWNhc3QsIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IGV2ZW50cyB9IiwiY29uc3QgaGVscGVycyA9IGZ1bmN0aW9uIGhlbHBlcnMoKSB7XHJcbiAgICBjb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBjcmVhdGVFbGVtZW50V2l0aElubmVyVGV4dCA9IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoSW5uZXJUZXh0KHRhZywgY2xhc3NOYW1lLCB0ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRleHQ7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgYWRkSW5uZXJUZXh0ID0gZnVuY3Rpb24gYWRkSW5uZXJUZXh0KGNsYXNzTmFtZSwgdGV4dCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjbGFzc05hbWUpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50LmlubmVySFRNTCA9IHRleHQ7ICAgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gY29udmVydGVyKCl7XHJcbiAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wJykuaW5uZXJIVE1MLmluY2x1ZGVzKCdDZWxzaXVzJykpe1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHRlbXBGYWhyZW5oZWl0ID0gcGFyc2VGbG9hdCgodGVtcENlbHNpdXMgKiAoOSAvIDUpICsgMzIpLnRvRml4ZWQoMikpO1xyXG4gICAgICBjb25zdCB0ZW1wQ2Vsc2l1cyA9IHBhcnNlRmxvYXQoKCh0ZW1wRmFocmVuaGVpdCAtIDMyKSAqIDUvOSkudG9GaXhlZCgyKSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhZGRJbm5lclRleHQsIGNyZWF0ZUVsZW1lbnQsIGNvbnZlcnRlciwgY3JlYXRlRWxlbWVudFdpdGhJbm5lclRleHQsIFxyXG4gICAgfTtcclxuICB9O1xyXG4gIFxyXG4gIFxyXG4gIGV4cG9ydCB7IGhlbHBlcnMgfTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9