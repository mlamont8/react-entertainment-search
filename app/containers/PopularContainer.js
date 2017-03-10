var React = require('react');
var TopContainer = require('./TopMainContainer');
var BottomContainer = require('./BottomMainContainer');
var MainDivider = require('../components/home/popcontainer/MainDivider')
var styles = require('../styles')



var PopularContainer = React.createClass({

render: function () {
  return(
      <div className="mostPopularFull" style={styles.popMain}>
          <TopContainer />
            <MainDivider />
          <BottomContainer />

      </div>

  )
}
})

module.exports = PopularContainer;
