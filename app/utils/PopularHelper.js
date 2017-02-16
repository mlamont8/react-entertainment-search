var fetchJsonp = require('fetch-jsonp');
var api_key = '21b0daca9dad79653c91d176b7930bee';
var param = "/popular/?api_key=21b0daca9dad79653c91d176b7930bee&language=en-US&page=1"

function infoType (type) {
  return fetchJsonp('http://api.themoviedb.org/3/'+ type + param)
}

var helpers = {
  getApiInfo: function (type){
  infoType(type)
                      .then (function(response){
                        console.log(response);
                        return response.json()
                      }).then(function(json) {
                        console.log('parsed json', json)
                        return json;
                      }).catch(function(ex) {
                        console.log('parsing failed', ex)
                      })
                    }
                  }

// var helpers = {
//   getApiInfo: function (types){
//     return fetchJsonp.all(types.map(function (type){
//       return infoType(type)
//     })).then (function(response){
//       return response.json()
//     }).then (function(json){
//         return json.map(function(ent){
//           console.log(ent.data);
//     //      return ent.data;
//         })
//     }).catch(function(ex){
//       console.log('GetApiInfo failed', ex)
//     })
//     }
//     }




module.exports = helpers;
