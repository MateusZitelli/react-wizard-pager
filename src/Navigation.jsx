/**
 * @jsx React.DOM
 */

var React = require('react');

var Navigation = React.createClass({
  propTypes: {
    history: React.PropTypes.array.isRequired,
    backText: React.PropTypes.string.isRequired,
    actual: React.PropTypes.object,
    onClickBack: React.PropTypes.func
  },

  render() {
    var href;

    var history = this.props.history.map((prev, i) => {
      href = '#' + (!!prev.uri ? prev.uri : '');
      return <li className="navigation-item" key={i}>
        {prev.title}
      </li>
    });

    var backButton = (
      <button onClick={this.props.onClickBack}
              className="button-back">
        {this.props.backText}
      </button>
    );
    
    var actualTitle = (
      <li className="navigation-item actual">
        {this.props.actual.title} 
      </li>
    );

    return (
      <nav className="navigation-history">
        {this.props.history.length === 0 ? null : backButton}
        <ul className="navigation-list">
          {history}
          {actualTitle} 
        </ul>
      </nav>
    );
  }

});

module.exports = Navigation;
