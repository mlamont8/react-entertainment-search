// Left TV Container of Home Page
var React = require('react')
var css = require('../../../styles/index.scss')
var ImageView = require('./ImageView')
var ImageTitle = require('./ImageTitle')
var Col = require('react-bootstrap').Col


var LeftPopular= React.createClass({

  render: function () {
    return(
    <Col className="leftContainer blue imgBlock halfPop" sm={12} md={12} lg={6}>

          <ImageView
            imageSrc = {this.props.BigImage}

            >
            </ImageView>


        </Col>

    )
  }
})

module.exports = LeftPopular;
