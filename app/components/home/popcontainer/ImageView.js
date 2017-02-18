var React = require('react')




var ImageView = function(props){


    return (
      <div>
        <p>image</p>
        <img src = {'https://image.tmdb.org/t/p/w780' + this.props.image} />
      </div>
    )

}

module.exports = ImageView;
