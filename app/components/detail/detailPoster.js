var React = require('react')

var detailPoster = function (props){

return (


<div className="detailbackground" style={{position: 'absolute'}}>

  <img className="backImage" style={{height:'100%'}} src={'https://image.tmdb.org/t/p/w1280' + props.image} />


</div>


)

}

module.exports = detailPoster
