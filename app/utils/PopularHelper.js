var fetchJsonp = require('fetch-jsonp');
var api_key = '21b0daca9dad79653c91d176b7930bee';
var param = "/popular/?api_key=21b0daca9dad79653c91d176b7930bee&callback=test&language=en-US&page=1"


var helpers = {
  getPopMovieInfo: fetchJsonp('http://api.themoviedb.org/3/tv/popular/?api_key=21b0daca9dad79653c91d176b7930bee&language=en-US&page=1')
                      .then (function(response){
                        console.log(response);
                        return response.json()
                      }).then(function(json) {
                        console.log('parsed json', json)
                      }).catch(function(ex) {
                        console.log('parsing failed', ex)
                      })
                  }



module.exports = helpers;
