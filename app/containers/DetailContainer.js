var React = require('react')
var DetailHelper = require('../utils/detailHelper')
var ExploreBottom = require('../components/exploreBottom')
var styles = require('../styles')

var DetailContainer = React.createClass({

getInitialState() {
  return {
    type: this.props.params.type,
    id: this.props.params.id,
    info: ''
  }
},

// componentDidMount: function (){
//   var type = this.state.type
//   var id = this.state.id
//   DetailHelper.getDetailInfo(type,id)
//   .then (function(data){
//     console.log('detaildata',data)
//     this.setState({
//       info: data
//     })
//   }.bind(this)
// )
// },

componentDidMount: function (){
  var type = this.state.type
  var id = this.state.id
  DetailHelper.getDetailInfo(type,id)
  .then (function(data){
    console.log('detaildata',type,data)
    // Check if type is TV
    if (type === 'tv'){
      console.log('tv')
      this.setState({
        info: data,
        title: data.name
      })
    }else{
      // Type is Movie
    console.log('movie')
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
        <div className="divide col s12 grey darken-4" style={styles.divide}></div>
    		<div className="posterContainer col s12 m3">
    	<img src={'https://image.tmdb.org/t/p/w185/' + this.state.info.poster_path} className="responsive-image" />
    </div>

    	<div className="col s12 m9 white-text">

    	<span className="title">
    		<h3>{this.state.title}</h3>
    	</span>
    	<span className="tagline">{this.state.info.tagline}</span>

    	<p>Release Date: {this.state.info.release_date}</p>

    	<span className="description">{this.state.info.overview}</span>

    	<p>Rating: {this.state.info.vote_average} of 10.0</p>

    	<p><span className="homepage"><a href={this.state.info.homepage}>HOMEPAGE</a></span></p>

    </div>
    </div>

    <ExploreBottom
      image = {this.state.info.backdrop_path} />
</div>

    )
  }

})
module.exports = DetailContainer;
