// Right Movie Container of Home Page
var React = require('react');
var PropTypes = React.PropTypes;
var ImageViewRight = require('./ImageViewRight')
var ImageTitle = require('./ImageTitle')
var styles = require('../../../styles')


var RightPopular= React.createClass({

  getInitialState : function() {
    return {
      style: 'smallImageStyle'
    }
  },



  render: function () {
    return(
      <div className="rightContainer col s12 m12 l6" style={{padding: 0}}>


        { this.props.SmallImage.map(SmallImage =>
      <div className='imgBlock col s6 m6' style={styles.rightPop}>
          <ImageViewRight imageSrc={SmallImage}
          imageStyle = {this.state.style}
           />
      </div>

        )}





      </div>
    )
  }
})



module.exports = RightPopular;
