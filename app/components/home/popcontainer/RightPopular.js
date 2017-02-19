// Right Movie Container of Home Page
var React = require('react');
var PropTypes = React.PropTypes;


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
      <div className="rightContainer red col s12 m12 l6">
        {/* {
          this.props.SmallImage.map(function(i){
            return (<ImageView imageSrc={this} />)
          })

        } */}

        { this.props.SmallImage.map(SmallImage =>
          <ImageView imageSrc={SmallImage}></ImageView>
        )}

      </div>
    )
  }
})

RightPopular.propTypes = {
  SmallImage: PropTypes.array.isRequired,
  SmallTitle: PropTypes.array.isRequired

}

module.exports = RightPopular;
