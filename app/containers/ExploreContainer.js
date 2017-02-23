var React = require('react')
var Search = require('../components/explore/search')
var fetchJsonp = require('fetch-jsonp');


var ExploreContainer = React.createClass({

// getInitialState() {
//   return {
//     SearchTerm: '',
//
//   };
// },

GetUrl (SearchTerm) {
  var entType = this.state.params.entType
  if (!SearchTerm){

    return ('https://api.themoviedb.org/3/'+ entType + '/popular?api_key=21b0daca9dad79653c91d176b7930bee&sort_by=popularity.desc')

  }else{
    return ('https://api.themoviedb.org/3/search/' + entType + '?api_key=21b0daca9dad79653c91d176b7930bee&query=' + SearchTerm)
  }
},

componentDidMount: function (){

  return fetchJsonp(GetUrl(SearchTerm))
  .then (function(response){
      return response.json()
  }).then(function(json) {
    //set state for results
    console.log(json)
    // this.setState({
    //   BigImage: json.results[0].backdrop_path,
    //   SmallImage: [json.results[1].backdrop_path,json.results[2].backdrop_path,json.results[3].backdrop_path,json.results[4].backdrop_path]
    // });
    }.bind(this))
  .catch(function(ex) {
    console.log('PopularFetch Movie Failure', ex)
  })

},


  render: function () {
    return(
      <div style={{backgroundColor: '#000000'}}>
        <Search />

      </div>
    )

  }
})

module.exports = ExploreContainer;
