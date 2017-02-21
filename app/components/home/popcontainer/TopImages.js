var React = require('react');
var ReactDOM = require('react-dom');
var ImageUrl = require('./ImageUrl');
var ImageView = require('./ImageView');
var ImageTitle = require('./ImageTitle');


var USER_DATA = {
  image: "https://image.tmdb.org/t/p/w780/o9OKe3M06QMLOzTl3l6GStYtnE9.jpg",
  name: "Movie Name 1",


}



var TopImage = React.createClass({
  render: function () {
    return
//
//  <ImageUrl url={this.props.user.url}>
// <ImageView image={this.props.user.image} />
//
//   <h3><ImageTitle name = {this.props.user.name}/></h3>
// </ImageUrl>

    <div>Image Url</div>
  }
})

module.exports = TopImage;
