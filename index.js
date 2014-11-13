(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	/**
	* @jsx React.DOM
	*/
	
	__webpack_require__(/*! ./index.css */ 1);
	
	var DummyContent = React.createClass({displayName: 'DummyContent',
	  render: function() {
	    return (
	      React.DOM.div({className: "link-content"}, 
	        React.DOM.img({className: "option-image", 
	          src: "https://placeimg.com/400/300/tech/grayscale"}), 
	        React.DOM.h2(null, this.props.title), 
	        React.DOM.p(null, this.props.description)
	      )
	    );
	  }
	});
	
	var DummyInstance = (DummyContent({title: "Some title", description: "A nice description"}));
	
	var structure = {
	  title: 'First',
	  options: [
	    {
	      title: 'Second',
	      content: DummyInstance,
	      options: [
	        {title: 'Thirth', content: DummyInstance, options: []},
	        {title: 'Forth', content: DummyInstance, options: []},
	        {title: 'Fifth', content: DummyInstance, options: []},
	        {title: 'Sixth', content: DummyInstance, options: []}
	      ]
	    },
	    {
	      title: 'Second',
	      content: DummyInstance,
	      options: [
	        {title: 'Thirth', content: DummyInstance, options: []},
	        {title: 'Forth', content: DummyInstance, options: []},
	        {title: 'Fifth', content: DummyInstance, options: []},
	        {title: 'Sixth', content: DummyInstance, options: []}
	      ]
	    },
	    {
	      title: 'Second',
	      content: DummyInstance,
	      options: [
	        {title: 'Thirth', content: DummyInstance, options: []},
	        {title: 'Forth', content: DummyInstance, options: []},
	        {title: 'Fifth', content: DummyInstance, options: []},
	        {title: 'Sixth', content: DummyInstance, options: []}
	      ]
	    },
	    {
	      title: 'Second',
	      content: DummyInstance,
	      options: [
	        {title: 'Thirth', content: DummyInstance, options: []},
	        {title: 'Forth', content: DummyInstance, options: []},
	        {title: 'Fifth', content: DummyInstance, options: []},
	        {title: 'Sixth', content: DummyInstance, options: []}
	      ]
	    },
	    {
	      title: 'Other',
	      content: DummyInstance,
	      options: [
	        {title: 'Thirth', content: DummyInstance, options: []},
	        {title: 'Forth', content: DummyInstance, options: []},
	        {title: 'Fifth', content: DummyInstance, options: []},
	        {title: 'Sixth', content: DummyInstance, options: []}
	      ]
	    },
	  ]
	};
	
	var showStatus = function (status) {
	  console.log(status);
	};
	
	var Example = React.createClass({displayName: 'Example',
	  render: function(){
	    var sendComponent = (
	      React.DOM.div({className: "final-step"}, 
	        React.DOM.h1(null, "Send the results"), 
	        React.DOM.button({className: "send"}, "Send")
	      )
	    );
	
	    return (
	      WizardPager({backText: "voltar", 
	        finalPage: sendComponent, 
	        onChange: showStatus, 
	        structure: structure})
	    );
	  }
	});
	
	React.renderComponent(
	  Example(null),
	  document.getElementById('container')
	);
	


/***/ },
/* 1 */
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../~/css-loader!./index.css */ 2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../~/style-loader/addStyles.js */ 3)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/mateus/dev/react-components/react-choices/node_modules/css-loader/index.js!/home/mateus/dev/react-components/react-choices/example/index.css", function() {
			var newContent = require("!!/home/mateus/dev/react-components/react-choices/node_modules/css-loader/index.js!/home/mateus/dev/react-components/react-choices/example/index.css");
			if(typeof newContent === 'string') newContent = [module.id, newContent, ''];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/*!***********************************!*\
  !*** ../~/css-loader!./index.css ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../~/css-loader/cssToString.js */ 4)();
	exports.push([module.id, "@import url(http://fonts.googleapis.com/css?family=Gentium+Basic);", ""]);
	exports.push([module.id, "@import url(http://fonts.googleapis.com/css?family=Open+Sans);", ""]);
	exports.push([module.id, "\n\n\nbody{\n  background-color: #333333;\n  color: #dedede;\n  font-family: 'Gentium Basic', serif;\n  margin: 8px;\n}\n\nh1, h2{\n font-family: 'Open Sans', sans-serif;\n text-align: center;\n text-transform: uppercase;\n}\n\n.navigation-history{\n  padding: 0 5%;\n}\n\nbutton.button-back{\n  background-color: #09A1B2;\n  border: none;\n  border-radius: 5px;\n  color: #DEDEDE;\n  display: inline-block;\n  font-size: 16px;\n  height: 32px;\n  margin: 10px;\n  position: relative;\n  top: -4px;\n}\n\nul.navigation-list{\n  display: inline-block;\n  font-size: 32px;\n  padding: 10px;\n  margin: 5px 0 10px 0 ;\n  text-transform: uppercase;\n}\n\nli.navigation-item{\n  display: inline;\n  width: 50%;\n}\n\nli.navigation-item.actual{\n  text-decoration: underline;\n}\n\nli.navigation-item:after{\n  content: ' > ';\n}\n\nli.navigation-item:last-child:after{\n  content: '';\n}\n\nul.options-list{\n  list-style: none;\n  margin: 0 5%;\n  padding: 0;\n}\n\nli.option-item{\n  width: 25%;\n  display: inline-block;\n}\n\na.option-link{\n  color: #555555;\n  text-align: center;\n  text-decoration: none;\n}\n\na.option-link:visited{\n  color: #555555;\n}\n\n.option-image{\n  width: 100%;\n}\n\n.link-content{\n  transition: all 0.4s ease-in-out;\n  margin: 10px 10px;\n  background-color: #FF9140;\n  padding: 10px;\n}\n\n.link-content:hover{\n  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.4);\n  background: #FFA059;\n}\n\n.final-step{\n  border: 1px solid #DEDEDE;\n  border-radius: 5px;\n  margin: 0 30%;\n  text-align: center;\n}\n\nbutton.send{\n  background-color: #09A1B2;\n  border: none;\n  border-radius: 5px;\n  color: #DEDEDE;\n  display: inline-block;\n  font-size: 16px;\n  height: 32px;\n  margin: 10px;\n}\n", ""]);

/***/ },
/* 3 */
/*!**************************************!*\
  !*** ../~/style-loader/addStyles.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:stylesheet/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 4 */
/*!**************************************!*\
  !*** ../~/css-loader/cssToString.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ }
/******/ ])
});

//# sourceMappingURL=index.js.map