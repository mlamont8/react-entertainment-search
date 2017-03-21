var React = require('react')
var Image = require('react-bootstrap').Image

var detailPoster = function (props){

return (


<div className="detailPoster" style={{position: 'relative'}}>

  <Image responsive className="backImage" style={{overflow: 'hidden'}} src={'https://image.tmdb.org/t/p/w1280' + props.image} />


</div>


)

}

module.exports = detailPoster
