// Left TV Container of Home Page
var React = require('react')
var styles = require('../../../styles')
var TopImages = require('./TopImages')
var ImageView = require('./ImageView')
var ImageTitle = require('./ImageTitle')


var LeftPopular= React.createClass({

  render: function () {
    return(
      <div className="leftContainer blue imgBlock col s12 m6 l6" style={styles.leftPop}>

          <ImageView
            imageSrc = {this.props.BigImage}>
            </ImageView>
            <ImageTitle
              title = {this.props.BigTitle} />

        </div>

    )
  }
})

module.exports = LeftPopular;
