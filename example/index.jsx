/**
* @jsx React.DOM
*/

require('./index.css');

var DummyContent = React.createClass({
  render: function() {
    return (
      <div className="link-content">
        <img className="option-image"
          src="https://placeimg.com/400/300/tech/grayscale" />
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
});

var DummyInstance = (<DummyContent title="Some title" description="A nice description" />);

var structure = {
  title: 'First',
  options: [
    {
      title: 'Second',
      content: DummyInstance,
      options: [
        {title: 'Thirth', content: DummyInstance, options: []},
        {title: 'Forth', content: DummyInstance, options: []},
        {title: 'Fifth', content: DummyInstance, options: []},
        {title: 'Sixth', content: DummyInstance, options: []}
      ]
    },
    {
      title: 'Second',
      content: DummyInstance,
      options: [
        {title: 'Thirth', content: DummyInstance, options: []},
        {title: 'Forth', content: DummyInstance, options: []},
        {title: 'Fifth', content: DummyInstance, options: []},
        {title: 'Sixth', content: DummyInstance, options: []}
      ]
    },
    {
      title: 'Second',
      content: DummyInstance,
      options: [
        {title: 'Thirth', content: DummyInstance, options: []},
        {title: 'Forth', content: DummyInstance, options: []},
        {title: 'Fifth', content: DummyInstance, options: []},
        {title: 'Sixth', content: DummyInstance, options: []}
      ]
    },
    {
      title: 'Second',
      content: DummyInstance,
      options: [
        {title: 'Thirth', content: DummyInstance, options: []},
        {title: 'Forth', content: DummyInstance, options: []},
        {title: 'Fifth', content: DummyInstance, options: []},
        {title: 'Sixth', content: DummyInstance, options: []}
      ]
    },
    {
      title: 'Other',
      content: DummyInstance,
      options: [
        {title: 'Thirth', content: DummyInstance, options: []},
        {title: 'Forth', content: DummyInstance, options: []},
        {title: 'Fifth', content: DummyInstance, options: []},
        {title: 'Sixth', content: DummyInstance, options: []}
      ]
    },
  ]
};

var showStatus = function (status) {
  console.log(status);
};

var Example = React.createClass({
  render: function(){
    var sendComponent = (
      <div className="final-step">
        <h1>Send the results</h1>
        <button className="send">Send</button>
      </div>
    );

    return (
      <Choices backText="voltar"
        finalPage={sendComponent}
        onChange={showStatus}
        structure={structure}/>
    );
  }
});

React.renderComponent(
  <Example />,
  document.getElementById('container')
);

