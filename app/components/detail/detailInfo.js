var React = require('react')
var styles = require('../../styles')


var detailInfo = function (props){

  return(
    <div className=' row detailInfo col s12 m9 white-text' style={styles.detailInfo}>
    <p>Release Date: {props.date}</p>
    <span className="description">{props.overview}</span>
    <p>Rating: {props.rating} of 10.0</p>
    <p><span className="homepage"><a href={props.homepage}>HOMEPAGE</a></span></p>
  </div>
  )
}

module.exports = detailInfo
