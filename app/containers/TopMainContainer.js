// Top Movie Container of Home Page
var React = require('react');
var LeftPopular = require('../components/home/popcontainer/LeftPopular');
var RightPopular = require('../components//home/popcontainer/RightPopular');
var apiHelper = require('../utils/apiHelper')
var fetchJsonp = require('fetch-jsonp');
var Row = require('react-bootstrap').Row
var styles = require('../styles');

var TopMainContainer= React.createClass({

  getInitialState: function (){
    return {

      BigImage: '',
      SmallImage: [],

    }
  },

  componentDidMount: function() {
      apiHelper.getMovieInfo()
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
      <Row className="topMainContainer"  style={styles.mostPopularStyle}>
        <LeftPopular
          BigImage={this.state.BigImage}
        />

        <RightPopular
          SmallImage={this.state.SmallImage}
        />

 </Row>

    )
  }
})

module.exports = TopMainContainer
