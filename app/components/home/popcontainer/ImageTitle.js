var React = require('react')
var styles = require('../../../styles')

var ImageTitle = React.createClass({

  render: function (props){
    return (
        <h3 style = {styles.titleStyle}>{this.props.title}</h3>
    )
  }
});

module.exports = ImageTitle;
