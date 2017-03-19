var React = require('react')
var css = require('../../styles/index.scss')
var Row = require('react-bootstrap').Row
var Col = require('react-bootstrap').Col



var detailInfo = function (props){

  return(
    <Row>
      <Col sm={12} md={9} className=' row detailInfo col s12 m9 white-text'>
    <p>Release Date: {props.date}</p>
    <span className="description">{props.overview}</span>
    <p>Rating: {props.rating} of 10.0</p>
    <p><span className="homepage"><a href={props.homepage}>HOMEPAGE</a></span></p>
  </Col>
  </Row>
  )
}

module.exports = detailInfo
