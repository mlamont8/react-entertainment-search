var React = require('react');
var TopContainer = require('./TopMainContainer');
var BottomContainer = require('./BottomMainContainer');
var MainDivider = require('../components/home/popcontainer/MainDivider')
var styles = require('../styles')
var Row = require('react-bootstrap').Row




var PopularContainer = React.createClass({

render: function () {
  return(

      <Row className="popularContainer" style={styles.popMain}>
          <TopContainer />
            <MainDivider />
          <BottomContainer />

      </Row>


  )
}
})

module.exports = PopularContainer;
