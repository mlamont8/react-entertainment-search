// Right Movie Container of Home Page
var React = require('react');
var PropTypes = React.PropTypes;
var ImageView = require('./ImageView')
var ImageTitle = require('./ImageTitle')
var styles = require('../../../styles')


var RightPopular= React.createClass({

  // getInitialState : function() {
  //   return {
  //     smallImage: []
  //   }
  // },
//   componentDidMount: function () {
//
//   this.setState({
//     smallImage: this.props.SmallImage
//   })
// },


  render: function () {
    return(
      <div className="rightContainer col s12 m12 l6">
        {/* {
          this.props.SmallImage.map(function(i){
            return (<ImageView imageSrc={this} />)
          })

        } */}

        { this.props.SmallImage.map(SmallImage =>
      <div className='imgBlock col s6 m6'>
          <ImageView imageSrc={SmallImage} />
      </div>

        )}

        {/* <ImageView imageSrc={this.props.SmallImage[1]}></ImageView>
        <ImageTitle title={this.props.SmallTitle[1]}></ImageTitle> */}

      </div>
    )
  }
})

// RightPopular.propTypes = {
//   SmallImage: PropTypes.array.isRequired,
//   SmallTitle: PropTypes.array.isRequired
//
// }

module.exports = RightPopular;
