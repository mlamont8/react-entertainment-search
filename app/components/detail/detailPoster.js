var React = require('react')

var detailPoster = function (props){

return (
  <div className="row">

<div className="col s12 moviefoot">

  <img className="responsive-img" src={'https://image.tmdb.org/t/p/w1280' + props.image} />

</div>
</div>

)

}

module.exports = detailPoster
