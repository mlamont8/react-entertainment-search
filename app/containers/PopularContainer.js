var React = require('react');
var TopContainer = require('./TopMainContainer');
var BottomContainer = require('./BottomMainContainer');
var MainDivider = require('../components/home/popcontainer/MainDivider')
var Row = require('react-bootstrap').Row
var apiHelper = require('../utils/apiHelper')




var PopularContainer = React.createClass({

getInitialState() {
  return {
    backgroundImg: '',
    imgNum: 0
  };
},

componentDidMount() {
  apiHelper.getMovieInfo()
  .then(function (data){
    // generate a random image from the array between 1 and 10
    var randImage=Math.floor(Math.random()*11)
    this.setState({
      backgroundImg: data[randImage].backdrop_path
    })
  }.bind(this)
  )
  },




render: function () {
  var backgroundUrl = {
    backgroundImage : "url(https://image.tmdb.org/t/p/w1280" + this.state.backgroundImg +")"

  }
  return(


      <div className = "frontBackground" style = {backgroundUrl}>
        <MainDivider />

      </div>

  )
}
})

module.exports = PopularContainer;
