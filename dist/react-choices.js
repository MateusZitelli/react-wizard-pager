(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Choices"] = factory(require("react"));
	else
		root["Choices"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
/*!*************************!*\
  !*** ./src/Choices.jsx ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @jsx React.DOM
	 */
	
	'use strict';
	
	var React = __webpack_require__(/*! react */ 1);
	var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
	
	var merge = __webpack_require__(/*! ../utils/merge.js */ 4);
	
	var Navigation = __webpack_require__(/*! ./Navigation.jsx */ 2);
	var Content = __webpack_require__(/*! ./Content.jsx */ 3);
	
	var Choices = React.createClass({displayName: 'Choices',
	  propTypes: {
	    structure: React.PropTypes.object.isRequired,
	    backText: React.PropTypes.string.isRequired
	  },
	
	  getInitialState:function() {
	    return {
	      previews: [],
	      activeSection: this.props.structure
	    };
	  },
	
	  _handleBack:function() {
	    var previews = this.state.previews;
	
	    this.setState({
	      activeSection: previews[previews.length - 1],
	      previews: previews.slice(0, previews.length - 1)
	    });
	  },
	
	  _handleOptionClick:function(i, e) {
	    this.setState({
	      previews: this.state.previews.concat(this.state.activeSection),
	      activeSection: this.state.activeSection.options[i]
	    });   
	  },
	
	  render:function() {
	    // Copy the props to prevent the original intact
	
	    return (
	      React.DOM.div({className: "Choices"}, 
	        /*<header>
	          {this.props.structure.title}
	        </header>*/
	
	        Navigation({backText: this.props.backText, 
	                    onClickBack: this._handleBack, 
	                    actual: this.state.activeSection, 
	                    history: this.state.previews}), 
	
	        ReactCSSTransitionGroup({transitionName: "sections"}, 
	          Content({onClickOption: this._handleOptionClick, 
	                   section: this.state.activeSection})
	        )
	      )
	    );
	  },
	});
	
	module.exports = Choices;


/***/ },
/* 1 */
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"} ***!
  \**************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/*!****************************!*\
  !*** ./src/Navigation.jsx ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @jsx React.DOM
	 */
	
	var React = __webpack_require__(/*! react */ 1);
	
	var Navigation = React.createClass({displayName: 'Navigation',
	  propTypes: {
	    history: React.PropTypes.array.isRequired,
	    backText: React.PropTypes.string.isRequired,
	    actual: React.PropTypes.object,
	    onClickBack: React.PropTypes.func
	  },
	
	  render:function() {
	    var href;
	
	    var history = this.props.history.map(function(prev, i)  {
	      href = '#' + (!!prev.uri ? prev.uri : '');
	      return React.DOM.li({className: "navigation-item", key: i}, 
	        prev.title
	      )
	    });
	
	    var backButton = (
	      React.DOM.button({onClick: this.props.onClickBack, 
	              className: "button-back"}, 
	        this.props.backText
	      )
	    );
	
	    var actualTitle = (
	      React.DOM.li({className: "navigation-item actual"}, 
	        this.props.actual.title
	      )
	    );
	
	    return (
	      React.DOM.nav({className: "navigation-history"}, 
	        this.props.history.length === 0 ? null : backButton, 
	        React.DOM.ul({className: "navigation-list"}, 
	          history, 
	          actualTitle
	        )
	      )
	    );
	  }
	
	});
	
	module.exports = Navigation;


/***/ },
/* 3 */
/*!*************************!*\
  !*** ./src/Content.jsx ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @jsx React.DOM
	 */
	
	var React = __webpack_require__(/*! react */ 1);
	
	var ClassName = React.createClass({displayName: 'ClassName',
	  propTypes: {
	    section: React.PropTypes.object.isRequired,
	    onClickOption: React.PropTypes.func
	  },
	
	  render:function() {
	    var optionItems = this.props.section.options.map(function(option, i)  
	      {return React.DOM.li({key: i, className: "option-item"}, 
	        React.DOM.a({onClick: this.props.onClickOption.bind(null, i), 
	           href: "#", 
	           className: "option-link"}, 
	          option.title
	        )
	      );}.bind(this)
	    );
	
	    return (
	      React.DOM.main({className: "content"}, 
	        React.DOM.ul({className: "options-list"}, 
	          optionItems
	        )
	      )
	    );
	  }
	
	});
	
	module.exports = ClassName;


/***/ },
/* 4 */
/*!************************!*\
  !*** ./utils/merge.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	// Define Object assign if there is no support for it
	if (!Object.assign) {
	  Object.defineProperty(Object, "assign", {
	    enumerable: false,
	    configurable: true,
	    writable: true,
	    value: function(target, firstSource) {
	      if (target === undefined || target === null)
	        throw new TypeError("Cannot convert first argument to object");
	
	      var to = Object(target);
	
	      var hasPendingException = false;
	      var pendingException;
	
	      for (var i = 1; i < arguments.length; i++) {
	        var nextSource = arguments[i];
	        if (nextSource === undefined || nextSource === null)
	          continue;
	
	        var keysArray = Object.keys(Object(nextSource));
	        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	          var nextKey = keysArray[nextIndex];
	          try {
	            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	            if (desc !== undefined && desc.enumerable)
	              to[nextKey] = nextSource[nextKey];
	          } catch (e) {
	            if (!hasPendingException) {
	              hasPendingException = true;
	              pendingException = e;
	            }
	          }
	        }
	
	        if (hasPendingException)
	          throw pendingException;
	      }
	      return to;
	    }
	  });
	}
	
	/**
	 * * Shallow merges two structures into a return value, without mutating either.
	 * *
	 * * @param {?object} one Optional object with properties to merge from.
	 * * @param {?object} two Optional object with properties to merge from.
	 * * @return {object} The shallow extension of one by two.
	 * */
	var merge = function(one, two) {
	  return Object.assign({}, one, two);
	};
	
	module.exports = merge;


/***/ }
/******/ ])
});

//# sourceMappingURL=react-choices.js.map