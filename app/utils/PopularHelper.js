var axios = require('axios');
import ajax from 'superagent';
var api_key = '21b0daca9dad79653c91d176b7930bee';
var param = "/popular/?api_key=21b0daca9dad79653c91d176b7930bee&callback=test&language=en-US&page=1"

// var helpers = {
//     getPopMovieInfo: ajax.get('http://api.themoviedb.org/3/tv' + param)
//                           .withCredentials()
//                           .end((error, response) => {
//                             if (!error && response) {
//                               console.log(response);
//                             }else{
//                               console.log('GetPopMovieInfo error',error)
//                             }
//                           })
// }

var helpers = {
  getPopMovieInfo: fetch("http://api.themoviedb.org/3/tv/" + param,
                    {
                      mode: 'no-cors'
                    })
                    .then(function (response){
                    return response;
                    })
                    .then(function (json){
                      console.log(json);
                    })
                  }
// function getInfo(type){
//   return axios({
// url: 'http://api.themoviedb.org/3/' + type + param,
// method: 'GET',
// withCredentials: true
// }
// )
// }
//
// var helpers = {
//
//   getPopMovieInfo: function(retData){
//     return axios.all(retData.map(function (type){
//       return getInfo(type)
//     })).then(function(info){
//       return info.map(function(data){
//       console.log(response.data.results)
//     })
//     }).catch(function(err){
//       console.warn('Error in getPopMovieInfo', err)
//     })
// }
// };


module.exports = helpers;
