var React = require('react')
var fetchJsonp = require('fetch-jsonp')


var helpers = {
  getExploreInfo: function (){
    return fetchJsonp('https://api.themoviedb.org/3/movie/popular?api_key=21b0daca9dad79653c91d176b7930bee&sort_by=popularity.desc')
  .then (function(response){
    console.log(response)
      return response.json()
  }).then(function(json) {

    console.log(json)

    return json.results
    })
  .catch(function(ex) {
    console.log('PopularFetch Movie Failure', ex)
  })

  }
}
module.exports = helpers;
