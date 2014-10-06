/**
* @jsx React.DOM
*/

'use strict';

jest.autoMockOff();


describe("Choices", () => {
  var React,
      TU,
      Choices;

  var getChoiceInstanceFrom = (obj) =>
    TU.renderIntoDocument(<Choices structure={obj} />);

  beforeEach(() => {
    React = require('react/addons');
    TU = React.addons.TestUtils;
    Choices = require('../Choices.jsx');
  });

  it('be requirable', () => {
    expect(!!Choices).toBeTruthy;
  }); 

  it('show main title', () => {
    var structure = {
      title: 'My custom title',
      options: []
    };

    var instance = getChoiceInstanceFrom(structure);
    var headerText = TU.findRenderedDOMComponentWithTag(instance, 'header')
      .getDOMNode().textContent;

    expect(headerText).toBe(structure.title);
  });
});
