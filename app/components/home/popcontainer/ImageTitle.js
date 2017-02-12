var React = require('react')

var ImageTitle = React.createClass({

  render: function (){
    return (
        <h3>{this.props.name}</h3>
    )
  }
});

module.exports = ImageTitle;
