var React = require('react')

var ImageView = React.createClass({

  render: function (){
    return (
        <img src = {this.props.image} />
    )
  }
});

module.exports = ImageView;
