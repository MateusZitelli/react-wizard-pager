/**
 * @jsx React.DOM
 */

var React = require('react');

var ClassName = React.createClass({
  propTypes: {
    section: React.PropTypes.object.isRequired,
    onClickOption: React.PropTypes.func
  },

  render() {
    var optionItems = this.props.section.options.map((option, i) => 
      <li key={i} className="option-item">
        <a onClick={this.props.onClickOption.bind(null, i)}
           href="#"
           className="option-link">
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
