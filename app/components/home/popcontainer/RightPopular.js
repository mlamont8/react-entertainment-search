// Right Movie Container of Home Page
var React = require('react');
var PropTypes = React.PropTypes;
var ImageView = require('./ImageView')
var ImageTitle = require('./ImageTitle')
var styles = require('../../../styles')
var Col = require('react-bootstrap').Col


var RightPopular= React.createClass({


  render: function () {
    return(
      <Col className="rightContainer" sm={12} md={6} style={styles.rightPop}>


        { this.props.SmallImage.map((SmallImage, index) =>
    <Col key={index} className='imgBlock' sm={6} md={6} style={styles.rightPopImg}>
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
