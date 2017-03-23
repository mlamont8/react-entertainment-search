var React = require('react')
var apiHelper = require('../utils/apiHelper')
var DetailPoster = require('../components/detail/detailPoster')
var DetailTitle = require('../components/detail/detailTitle')
var BoxImage = require('../components/detail/boxImage')
var DetailInfo = require('../components/detail/detailInfo')
var styles = require('../styles')

// var sectionStyle = {
//   backgroundImage: "url(" + { background } + ")"
// };

var DetailContainer = React.createClass({

getInitialState: function() {
  return {
    type: this.props.params.type,
    id: this.props.params.id,
    info: '',
    background: ''
  }
},



componentDidMount: function (){
  var type = this.state.type
  var id = this.state.id

  apiHelper.getDetailInfo(type,id)
  .then (function(data){

    // Check if type is TV
    if (type === 'tv'){
        this.setState({
        info: data,
        title: data.name,
        background: 'https://image.tmdb.org/t/p/w1280' + data.backdrop_path

      })
    }else{
      // Type is Movie
      this.setState({
      info: data,
      title: data.title,
      background: "url(https://image.tmdb.org/t/p/w1280" + data.backdrop_path + ")"
    })
  }

  }.bind(this)
)
},

  render: function(){

    return (
    <main style={{backgroundImage: this.state.background}}>

{/*
        <DetailPoster
        image = {this.state.info.backdrop_path} /> */}
{/*
         <BoxImage path= {this.state.info.poster_path} />


           <DetailInfo
            tag= {this.state.info.tagline}
            date={this.state.info.release_date}
            overview={this.state.info.overview}
            rating={this.state.info.vote_average}
            homepage={this.state.info.homepage}
          /> */}



</main>



    )
  }

})
module.exports = DetailContainer;
