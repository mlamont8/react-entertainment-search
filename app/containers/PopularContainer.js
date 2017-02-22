var React = require('react');
var TopContainer = require('./TopMainContainer');
var BottomContainer = require('./BottomMainContainer');
var styles = require('../styles')



var PopularContainer = React.createClass({

render: function () {
  return(
      <div className="mostPopularFull" style={{backgroundColor: '#000000'}}>

        <div className="divide col s12 grey darken-4" style={styles.divide} />
        <TopContainer />
        <div className="divide col s12 grey darken-4" style={styles.divide} />

        <BottomContainer />

      </div>

  )
}
})

module.exports = PopularContainer;
