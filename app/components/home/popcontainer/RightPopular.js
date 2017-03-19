// Right Movie Container of Home Page
var React = require('react');
var PropTypes = React.PropTypes;
var ImageView = require('./ImageView')
var ImageTitle = require('./ImageTitle')
var css = require('../../../styles/index.scss')
var Col = require('react-bootstrap').Col


var RightPopular= React.createClass({

  render: function () {
    return(
      <Col className="rightContainer quarterPop" sm={12} md={12} lg={6}>


        { this.props.SmallImage.map((SmallImage, index) =>
    <Col key={index} className='imgBlock smallPopImg' sm={6} md={6}>

          <ImageView
            imageSrc={SmallImage}
           />

      </Col>

        )}





      </Col>
    )
  }
})



module.exports = RightPopular;
