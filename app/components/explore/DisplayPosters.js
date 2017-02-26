var React = require('react');


var displayPosters = function(props){

    return (

          <img src = {'https://image.tmdb.org/t/p/w154' + props.posterSrc} />

    )

}

module.exports = displayPosters;
