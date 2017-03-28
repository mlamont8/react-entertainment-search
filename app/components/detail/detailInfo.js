var React = require('react')
var css = require('../../styles/index.scss')
var Row = require('react-bootstrap').Row
var Col = require('react-bootstrap').Col



var detailInfo = function (props){

  return(


      <Col  md={12} lg={10} className='detailInfo'>
        <h1>{props.title}</h1>
        <p>Release Date: {props.date}</p>
        <p className="description lead">{props.overview}</p>
        <p>Rating: {props.rating} of 10.0</p>
        <p><span className="homepage"><a href={props.homepage}>HOMEPAGE</a></span></p>
  </Col>

  )
}

module.exports = detailInfo
