// Top Movie Container of Home Page
var React = require('react');
var LeftPopular = require('../components/home/popcontainer/LeftPopular');
var RightPopular = require('../components//home/popcontainer/RightPopular');
var apiHelper = require('../utils/apiHelper')
var Row = require('react-bootstrap').Row
var fetchJsonp = require('fetch-jsonp');
var styles = require('../styles');

var BottomMainContainer= React.createClass({

  getInitialState: function (){
    return {
      BigImage: '',
      SmallImage: []

    }
  },

  componentDidMount: function() {
    apiHelper.getTvInfo()
    .then(function (json){
      this.setState({
        BigImage: json[0].backdrop_path,
        SmallImage: [json[1].backdrop_path,json[2].backdrop_path,json[3].backdrop_path,json[4].backdrop_path]

      })
    }.bind(this)
  )
  },


  render: function () {
    return(
      <Row className="row topMainContainer"  style={styles.mostPopularStyle}>

        <RightPopular
          SmallImage={this.state.SmallImage}

        />

        <LeftPopular
          BigImage={this.state.BigImage}

        />

 </Row>
)

}

})

module.exports = BottomMainContainer
