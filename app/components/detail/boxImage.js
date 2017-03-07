var React = require('react')

var boxImage = function(props){

  return(

    <div className="posterContainer col s12 m3">
      <img src={'https://image.tmdb.org/t/p/w185/' + props.path} className="responsive-image" />
    </div>
  )
}

module.exports = boxImage
