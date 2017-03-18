var React = require('react');
var TopContainer = require('./TopMainContainer');
var BottomContainer = require('./BottomMainContainer');
var MainDivider = require('../components/home/popcontainer/MainDivider')
var Row = require('react-bootstrap').Row




var PopularContainer = React.createClass({

render: function () {
  return(

      <Row className="popularContainer" style={{position:'relative'}}>
          <TopContainer />
            <MainDivider />
          <BottomContainer />

      </Row>


  )
}
})

module.exports = PopularContainer;
