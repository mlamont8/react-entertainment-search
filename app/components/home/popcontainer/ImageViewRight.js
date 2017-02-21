var React = require('react')
var styles = require('../../../styles')

var ImageViewRight = function(props){

    return (
        <img style = {styles.largeImage} src = {'https://image.tmdb.org/t/p/w780' + props.imageSrc} />
    )

}

module.exports = ImageViewRight;
