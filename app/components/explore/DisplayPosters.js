var React = require('react');


var displayPosters = function(props){

    return (

          <img src = {'https://image.tmdb.org/t/p/w92' + props.imageSrc} />

    )

}

module.exports = displayPosters;
