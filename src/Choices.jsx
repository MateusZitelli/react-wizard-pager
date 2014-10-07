/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var merge = require('../utils/merge.js');

var Navigation = require('./Navigation.jsx');
var Content = require('./Content.jsx');

var Choices = React.createClass({
  propTypes: {
    structure: React.PropTypes.object.isRequired,
    backText: React.PropTypes.string.isRequired
  },

  getInitialState() {
    return {
      previews: [],
      activeSection: this.props.structure
    };
  },

  _handleBack() {
    var previews = this.state.previews;

    this.setState({
      activeSection: previews[previews.length - 1],
      previews: previews.slice(0, previews.length - 1)
    });
  },

  _handleOptionClick(i, e) {
    this.setState({
      previews: this.state.previews.concat(this.state.activeSection),
      activeSection: this.state.activeSection.options[i]
    });   
  },

  render() {
    // Copy the props to prevent the original intact

    return (
      <div className="Choices">
        {/*<header>
          {this.props.structure.title}
        </header>*/}

        <Navigation backText={this.props.backText}
                    onClickBack={this._handleBack}
                    actual={this.state.activeSection}
                    history={this.state.previews} />

        <ReactCSSTransitionGroup transitionName="sections">
          <Content onClickOption={this._handleOptionClick}
                   section={this.state.activeSection} />
        </ReactCSSTransitionGroup>
      </div>
    );
  },
});

module.exports = Choices;
