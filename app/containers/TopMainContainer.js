// Top Movie Container of Home Page
var React = require('react');
var LeftPopular = require('../components/home/popcontainer/LeftPopular');
var RightPopular = require('../components//home/popcontainer/RightPopular');
var fetchJsonp = require('fetch-jsonp');
var styles = require('../styles');





var TopMainContainer= React.createClass({
  getInitialState: function (){
    return {
      frontMovieInfo: []
    }
  },

  componentDidMount() {
    this.PopularFetch();
  },

  PopularFetch() {
    // This API prefers calls using jsonp
    return fetchJsonp('http://api.themoviedb.org/3/movie/popular/?api_key=21b0daca9dad79653c91d176b7930bee&language=en-US&page=1')
    .then (function(response){
      console.log(response);
      return response.json()
    }).then(function(json) {
      //set state for results
      this.setState({frontMovieInfo: json.results});
      }.bind(this))
    .catch(function(ex) {
      console.log('PopularFetch Movie Failure', ex)
    })
    },






  render: function () {
    return(
      <div className="row topMainContainer"  style={styles.mostPopularStyle}>
        <LeftPopular
          frontMovieInfo={this.state.frontMovieInfo[0]}
        />
        <RightPopular
          frontMovieInfo={this.state.frontMovieInfo}
        />
        <a>top Info</a>
 </div>
    )
  }
})

module.exports = TopMainContainer
