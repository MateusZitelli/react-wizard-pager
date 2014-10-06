/**
 * @jsx React.DOM
 */

var React = require('React');

var ClassName = React.createClass({
  propTypes: {
    section: React.PropTypes.object.isRequired,
    onClickSection: React.PropTypes.func
  },

  render() {
    var optionItems = this.props.section.options.map((option, i) => 
      <li key={i} className="option-item">
        <a href="#" className="option-link">
          {option.title}
        </a>
      </li>
    );

    return (
      <main className="content">
        <ul className="options-list">
          {optionItems}
        </ul>
      </main>
    );
  }

});

module.exports = ClassName;
