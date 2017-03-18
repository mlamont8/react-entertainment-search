var React = require('react');
var PopularContainer = require('../../containers/PopularContainer');
var Grid = require('react-bootstrap').Grid;

var Home = React.createClass({
  render: function () {
    return(
                <PopularContainer />
      )
  }
});

module.exports = Home;
