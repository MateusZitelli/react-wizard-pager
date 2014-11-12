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
    var props = this.props;
    var onClick = (i) => { 
      return !!props.onClickOption ? props.onClickOption.bind(null, i) : null;
    }

    var optionItems = this.props.section.options.map((option, i) => 
      <li key={i} className="option-item">
        <a onClick={onClick(i)}
           href="#"
           className="option-link">
           {option.content ? option.content : option.title}
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
