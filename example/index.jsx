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
}

var Example = React.createClass({
  render: function(){
    return (
      <Choices backText="voltar" structure={structure}/>
    );
  }
});

React.renderComponent(
  <Example />,
  document.getElementById('container')
);

