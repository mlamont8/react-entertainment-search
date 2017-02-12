var React = require('react')

var ImageUrl = React.createClass({

  render: function (){
    return (
      <a href={this.props.url}>
              {this.props.children}
      </a>
    )
  }
});

module.exports = ImageUrl;
