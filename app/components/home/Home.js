var React = require('react');
var SectionTitle = require('./SectionTitle');
var PopularContainer = require('../../containers/PopularContainer');
var Grid = require('react-bootstrap').Grid;

var Home = React.createClass({
  render: function () {
    return(
        <Grid fluid={true}>
          <PopularContainer />
        </Grid>
    )
  }
});

module.exports = Home;
