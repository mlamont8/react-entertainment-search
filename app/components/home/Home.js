var React = require('react');
var SectionTitle = require('./SectionTitle');
var PopularContainer = require('../../containers/PopularContainer');

var Home = React.createClass({
  render: function () {
    return(
      <div>
    <SectionTitle />
    <PopularContainer />
    </div>
    )
  }
});

module.exports = Home;
