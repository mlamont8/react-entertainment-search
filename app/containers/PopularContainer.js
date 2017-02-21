var React = require('react');
var TopContainer = require('./TopMainContainer');
var BottomContainer = require('./BottomMainContainer');




var PopularContainer = React.createClass({

render: function () {
  return(
      <div className="mostPopularFull" style={{backgroundColor: '#000000'}}>
        <TopContainer />
        <BottomContainer />

      </div>

  )
}
})

module.exports = PopularContainer;
