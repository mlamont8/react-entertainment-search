var React = require('react')
var Image = require('react-bootstrap').Image

var detailPoster = function (props){

return (


  <Image responsive className="backImage" style={{overflow: 'hidden'}} src={'https://image.tmdb.org/t/p/w1280' + props.image} />


)

}

module.exports = detailPoster
