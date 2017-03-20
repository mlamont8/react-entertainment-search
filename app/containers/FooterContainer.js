var React = require('react')
var styles = require('../styles')
var img = require('../images/poweredbytmdb.png')
var Row = require('react-bootstrap').Row
var Col = require('react-bootstrap').Col
var Image = require('react-bootstrap').Image


var FooterContainer = React.createClass({

  render: function(){
    return(
      <footer className="page-footer container" style={styles.footer}>
<div className="container">
  <Row className="row">
    <Col md={4} sm={12} className="footerArea right">

     <Image responsive className="poweredBy black" style={{paddingTop: '10px'}} src={img} />

   </Col>

    <Col md={6} sm={12} className="col m6 s12 left">
    <span className="grey-text">This product uses the TMDb API but is not endorsed or certified by TMDb.</span>
  <p className="grey-text text-lighten-4" style={{marginTop: '40px'}} > © 2017 Copyright M Lamont Taylor</p>


</Col>
</Row>
    </div>
</footer>
    )
  }
})

module.exports = FooterContainer
