var React = require('react')
var css = require('../../styles/index.scss')
var Col = require('react-bootstrap').Col
var Image = require('react-bootstrap').Image

var boxImage = function(props){

  return(

    <Col sm={12} md={3} className="boxCover col s12 m3">
      <Image src={'https://image.tmdb.org/t/p/w185/' + props.path} className="responsive-image" />
    </Col>
  )
}

module.exports = boxImage
