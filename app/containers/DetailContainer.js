var React = require('react')
var apiHelper = require('../utils/apiHelper')
var DetailPoster = require('../components/detail/detailPoster')
var DetailTitle = require('../components/detail/detailTitle')
var BoxImage = require('../components/detail/boxImage')
var styles = require('../styles')

var DetailContainer = React.createClass({

getInitialState() {
  return {
    type: this.props.params.type,
    id: this.props.params.id,
    info: ''
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
        title: data.name
      })
    }else{
      // Type is Movie
      this.setState({
      info: data,
      title: data.title
    })
  }

  }.bind(this)
)
},

  render: function(){

    return (
      <div>
      <div className="row">

    <BoxImage path= {this.state.info.poster_path} />

    	<div className="col s12 m9 white-text">

      <DetailTitle title={this.state.title} />
    	<span className="tagline">{this.state.info.tagline}</span>

    	<p>Release Date: {this.state.info.release_date}</p>
    	<span className="description">{this.state.info.overview}</span>
    	<p>Rating: {this.state.info.vote_average} of 10.0</p>
    	<p><span className="homepage"><a href={this.state.info.homepage}>HOMEPAGE</a></span></p>

    </div>
    </div>

    <DetailPoster
      image = {this.state.info.backdrop_path} />
</div>

    )
  }

})
module.exports = DetailContainer;
