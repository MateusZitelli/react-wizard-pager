/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var merge = require('../utils/merge.js');

var Navigation = require('./Navigation.jsx');
var Content = require('./Content.jsx');

var WizardPager = React.createClass({
  propTypes: {
    structure: React.PropTypes.object.isRequired,
    backText: React.PropTypes.string.isRequired,
    finalPage: React.PropTypes.renderable,
    onChange: React.PropTypes.func
  },

  getInitialState() {
    return {
      previews: [],
      activeSection: this.props.structure,
      finalPage: null
    };
  },

  _updateFinalPage(activeSection) {
    if(activeSection.options.length === 0 && !!this.props.finalPage){
      this.setState({
        finalPage: this.props.finalPage
      });
    }else{
      this.setState({
        finalPage: null
      });
    }
  },

  _handleBack() {
    var previews = this.state.previews;

    this.setState({
      activeSection: previews[previews.length - 1],
      previews: previews.slice(0, previews.length - 1)
    });
    
    this._updateFinalPage(previews[previews.length - 1]);

    if(!!this.props.onChange)
      this.props.onChange(this.state);
  },

  _handleOptionClick(i, e) {
    this.setState({
      previews: this.state.previews.concat(this.state.activeSection),
      activeSection: this.state.activeSection.options[i]
    });

    this._updateFinalPage(this.state.activeSection.options[i]);

    if(!!this.props.onChange)
      this.props.onChange(this.state);
  },

  render() {
    return (
      <div className="wizard-pager">
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
          {this.state.finalPage}
        </ReactCSSTransitionGroup>
      </div>
    );
  },
});

module.exports = WizardPager;
