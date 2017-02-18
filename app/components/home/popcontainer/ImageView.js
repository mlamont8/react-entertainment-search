var React = require('react')
var styles = require('../../../styles')

var ImageView = function(props){

    return (
        <img style = {styles.largeImage} src = {'https://image.tmdb.org/t/p/w780' + props.imageSrc} />
    )

}

module.exports = ImageView;
