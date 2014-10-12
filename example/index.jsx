/**
* @jsx React.DOM
*/

var structure = {
  title: 'First',
  options: [
    {
      title: 'Second',
      options: [
        {title: 'Thirth', options: []},
        {title: 'Forth', options: []},
        {title: 'Fifth', options: []},
        {title: 'Sixth', options: []}
      ]
    },
    {
      title: 'Other',
      options: [
        {title: 'Thirth', options: []},
        {title: 'Forth', options: []},
        {title: 'Fifth', options: []},
        {title: 'Sixth', options: []}
      ]
    },
  ]
};

var showStatus = function (status) {
  console.log(status);
};

var Example = React.createClass({
  render: function(){
    return (
      <Choices backText="voltar"
               finalPage={<h1>Some nice content</h1>}
               onChange={showStatus}
               structure={structure }/>
    );
  }
});

React.renderComponent(
  <Example />,
  document.getElementById('container')
);

