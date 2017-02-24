var React = require('react');


var displayPosters = function(props){

    return (
        <div>
          <img src= {'https://image.tmdb.org/t/p/w92' + props.imageSrc} />
        </div>
    )

}

module.exports = displayPosters;
