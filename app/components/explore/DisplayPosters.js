var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var DisplayPosters = function(props){

    return (
          <Link data={props.data} to="detail">
            <img src = {'https://image.tmdb.org/t/p/w154' + props.data.poster_path} />
         </Link>
    )

}

module.exports = DisplayPosters;
