// Bottom TV Container of Home Page
var React = require('react');
var LeftPopular = require('../components/home/popcontainer/LeftPopular');
var RightPopular = require('../components//home/popcontainer/RightPopular');
var styles = require('../styles');


var BottomMainContainer= React.createClass({
  render: function () {
    return(
      <div className=" row BottomMainContainer"  style={styles.mostPopularStyle}>
        <LeftPopular />
        <RightPopular />
 </div>
    )
  }
})

module.exports = BottomMainContainer
