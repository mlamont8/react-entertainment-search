var React = require('react')
var css = require('../../../styles/index.scss')
var Image = require('react-bootstrap').Image

var ImageView = function(props){

    return (
        <Image className="popImage" responsive src = {'https://image.tmdb.org/t/p/w780' + props.imageSrc} />
    )

}

module.exports = ImageView;
