// Right Movie Container of Home Page
var React = require('react');
var PropTypes = React.PropTypes;
var ImageView = require('./ImageView')
var ImageTitle = require('./ImageTitle')
var styles = require('../../../styles')


var RightPopular= React.createClass({


  render: function () {
    return(
      <div className="rightContainer col s12 m6 l6" style={styles.rightPop}>


        { this.props.SmallImage.map((SmallImage, index) =>
    <div key={index} className='imgBlock col s6 m6' style={styles.rightPopImg}>
          <ImageView
            imageSrc={SmallImage}

           />

      </div>

        )}





      </div>
    )
  }
})



module.exports = RightPopular;
