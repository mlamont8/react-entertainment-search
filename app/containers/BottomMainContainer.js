// Top Movie Container of Home Page
var React = require('react');
var LeftPopular = require('../components/home/popcontainer/LeftPopular');
var RightPopular = require('../components//home/popcontainer/RightPopular');
var fetchJsonp = require('fetch-jsonp');
var styles = require('../styles');

var BottomMainContainer= React.createClass({
  getInitialState: function (){
    return {
      frontMovieInfo: [],
      BigImage: '',
      BigTitle: '',
      SmallImage: [],
      SmallImageTitle: []
    }
  },

  componentDidMount() {
    this.PopularFetch();
  },

  PopularFetch() {
    // This API prefers calls using jsonp
    return fetchJsonp('http://api.themoviedb.org/3/tv/popular/?api_key=21b0daca9dad79653c91d176b7930bee&language=en-US&page=1')
    .then (function(response){
        return response.json()
    }).then(function(json) {
      //set state for results
      this.setState({
        BigImage: json.results[0].backdrop_path,
        BigTitle: json.results[0].name

      });
      }.bind(this))
    .catch(function(ex) {
      console.log('PopularFetch Movie Failure', ex)
    })
    },

  render: function () {
    return(
      <div className="row topMainContainer"  style={styles.mostPopularStyle}>
        <LeftPopular
          BigImage={this.state.BigImage}
          BigTitle={this.state.BigTitle}
        />
        <RightPopular
          frontMovieInfo={this.state.frontMovieInfo}
        />

 </div>
    )
  }
})

module.exports = BottomMainContainer
