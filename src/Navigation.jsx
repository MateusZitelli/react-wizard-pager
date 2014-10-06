/**
 * @jsx React.DOM
 */

var React = require('React');

var Navigation = React.createClass({
  propTypes: {
    history: React.PropTypes.array.isRequired,
    backText: React.PropTypes.string.isRequired,
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

    return (
      <nav className="navigation-history">
        <button onClick={this.props.onClickBack} className="button-back">
          {this.props.backText}
        </button>
        <ul className="navigation-list">
          {history}
        </ul>
      </nav>
    );
  }

});

module.exports = Navigation;
