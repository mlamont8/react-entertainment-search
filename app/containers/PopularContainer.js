var React = require('react');
var LeftPopular = require('../components/home/popcontainer/LeftPopular');
var RightPopular = require('../components//home/popcontainer/RightPopular');
var styles = require('../styles');



var PopularContainer = React.createClass({
render: function () {
  return(
      <div className="row mostPopularFull" style={styles.mostPopularStyle}>
        <LeftPopular />
        <RightPopular />

      </div>
  )
}
})

module.exports = PopularContainer;
