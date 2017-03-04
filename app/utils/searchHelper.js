var react = require('react')
var fetchJsonp = require('fetch-jsonp')

var helpers = {
  getSearchInfo: function(type, search){
    return fetchJsonp('https://api.themoviedb.org/3/search/'+ type +'?api_key=21b0daca9dad79653c91d176b7930bee&query='+ search + '&language=en-US&include_adult=false')
  .then (function(response){

      return response.json()
  }).then(function(json) {
      console.log('searchreturn',json.results)
    return json.results
    })
  .catch(function(ex) {
    console.log('PopularFetch Movie Failure', ex)
  })
  }
}

module.exports = helpers;
