var React = require('react')
var fetchJsonp = require('fetch-jsonp')

var helpers = {

    //Retrieve info for Detail Container based on type and ID given
  getDetailInfo: function(type,id){
    return fetchJsonp('https://api.themoviedb.org/3/'+type+'/'+id+'?api_key=21b0daca9dad79653c91d176b7930bee&language=en-US&page=1')
  .then (function(response){

      return response.json()
  }).then(function(json) {

    return json
    })
  .catch(function(ex) {
    console.log('PopularFetch Movie Failure', ex)
  })


  }
}
module.exports = helpers;
