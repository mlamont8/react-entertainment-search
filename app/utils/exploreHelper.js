var React = require('react')
var fetchJsonp = require('fetch-jsonp')


var helpers = {
  // Retrieve info for Explore Container
  getExploreInfo: function (type){

    return fetchJsonp('https://api.themoviedb.org/3/'+type+'/popular?api_key=21b0daca9dad79653c91d176b7930bee&language=en-US&page=1&callback=test')
  .then (function(response){

      return response.json()
  }).then(function(json) {

    return json.results
    })
  .catch(function(ex) {
    console.log('PopularFetch Movie Failure', ex)
  })

  }
}
module.exports = helpers;
