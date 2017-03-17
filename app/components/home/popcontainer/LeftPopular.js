// Left TV Container of Home Page
var React = require('react')
var styles = require('../../../styles')
var ImageView = require('./ImageView')
var ImageTitle = require('./ImageTitle')
var Col = require('react-bootstrap').Col


var LeftPopular= React.createClass({

  render: function () {
    return(
    <Col className="leftContainer blue imgBlock" sm={12} md={6} style={styles.leftPop}>

          <ImageView
            imageSrc = {this.props.BigImage}

            >
            </ImageView>


        </Col>

    )
  }
})

module.exports = LeftPopular;
