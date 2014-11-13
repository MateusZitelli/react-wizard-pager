/**
* @jsx React.DOM
*/

'use strict';

jest.autoMockOff();


describe("WizardPager", () => {
  var React,
      TU,
      WizardPager;

  var getChoiceInstanceFrom = (obj, callback) =>
    TU.renderIntoDocument(<WizardPager structure={obj} onChange={callback} />);

  beforeEach(() => {
    React = require('react/addons');
    TU = React.addons.TestUtils;
    WizardPager = require('../WizardPager.jsx');
  });

  it('be requirable', () => {
    expect(!!WizardPager).toBeTruthy;
  }); 

  // it('show main title', () => {
  //   var structure = {
  //     title: 'My custom title',
  //     options: []
  //   };

  //   var instance = getChoiceInstanceFrom(structure);
  //   var headerText = TU.findRenderedDOMComponentWithTag(instance, 'header')
  //     .getDOMNode().textContent;

  //   expect(headerText).toBe(structure.title);
  // });

  it('call the callback when change', () => {
    var structure = {
      title: 'Example',
      options:[
        {
          title: 't1',
          options: []
        } 
      ] 
    };
    var fn = jest.genMockFunction();

    var instance = getChoiceInstanceFrom(structure, fn);
    var links = TU
      .scryRenderedDOMComponentsWithClass(instance, 'option-link');

    TU.Simulate.click(links[0]);
    expect(fn).toBeCalled();
  });
});
