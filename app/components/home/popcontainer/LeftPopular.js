// Left TV Container of Home Page
var React = require('react')
var styles = require('../../../styles')
var TopImages = require('./TopImages')
var ImageView = require('./ImageView')


var LeftPopular= React.createClass({
  render: function () {
    return(
      <div className="leftContainer blue imgBlock col s12 m6 l6" style={styles.leftPop}>
          <span>left container</span>
          {/* <ImageView image = {this.Props.frontMovieInfo[0].backdrop_path}/> */}
        </div>

    )
  }
})

module.exports = LeftPopular;
