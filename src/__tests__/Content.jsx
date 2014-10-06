
/**
* @jsx React.DOM
*/

'use strict';

jest.autoMockOff();


describe("Content", () => {
  var React,
      TU,
      Content;

  var getChoiceInstanceFrom = (obj, onClickSection) =>
    TU.renderIntoDocument(<Content section={obj}
                                   onClickSection={onClickSection} />);

  beforeEach(() => {
    React = require('react/addons');
    TU = React.addons.TestUtils;
    Content = require('../Content.jsx');
  });

  it('show the list of questions', () => {
    var section = {
      title: 'My custom title',
      options: [{title:'opt0'}, {title:'opt1'}, {title:'opt2'}]
    };

    var instance = getChoiceInstanceFrom(section, null);
    var optionItems = TU
      .scryRenderedDOMComponentsWithClass(instance, 'option-link');

    for(var i = 0; i < section.options.length; i++){
      expect(optionItems[i].getDOMNode().textContent)
        .toBe(section.options[i].title);
    }
  });
});
