/**
 * @jsx React.DOM
 */

'use strict';

var React = require('React');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var merge = require('../utils/merge.js');

var Navigation = require('./Navigation.jsx');
var Content = require('./Content.jsx');

var Choices = React.createClass({
  propTypes: {
    structure: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      previews: [],
      activeSection: this.props.structure
    };
  },

  render() {
    // Copy the props to prevent the original intact
    return (
      <div className="Choices">
        <header>
          {this.props.structure.title}
        </header>

        <Navigation onClickBack={this._handleBack}
                    history={this.state.previews} />

        <ReactCSSTransitionGroup transitionName="sections">
          <Content section={this.state.activeSection} />
        </ReactCSSTransitionGroup>
      </div>
    );
  },
});

module.exports = Choices;
