/**
* @jsx React.DOM
*/

'use strict';

jest.autoMockOff();


describe("Navigation", () => {
  var React,
      TU,
      Navigation;

  var getChoiceInstanceFrom = (obj, act) =>
    TU.renderIntoDocument(<Navigation history={obj} actual={act} />);

  beforeEach(() => {
    React = require('react/addons');
    TU = React.addons.TestUtils;
    Navigation = require('../Navigation.jsx');
  });

  it('be requirable', () => {
    expect(!!Navigation).toBeTruthy;
  }); 

  it('show links correctly', () => {
    var href, liDOMNode;
    var navigationLinksData = [
      {
        title: 'section0',
        options: []
      }
    ];

    var actualData =  {
      title: 'section1',
      options: []
    };

    var instance = getChoiceInstanceFrom(navigationLinksData, actualData);
    var navigationLinks = TU
      .scryRenderedDOMComponentsWithClass(instance, 'navigation-item');

    for(var i = 0; i < navigationLinksData.length; i++){
      liDOMNode = navigationLinks[i].getDOMNode();
      expect(liDOMNode.textContent).toBe(navigationLinksData[i].title);
    }
  });

});
