var React = require('react')
var css = require('../../styles/index.scss')
var Col = require('react-bootstrap').Col
var Image = require('react-bootstrap').Image

var boxImage = function(props){

  return(

    <Col md={12} lg={2} className="boxCover">
      <Image responsive src={'https://image.tmdb.org/t/p/w185/' + props.path} className="boxCoverImg" />
    </Col>
  )
}

module.exports = boxImage
