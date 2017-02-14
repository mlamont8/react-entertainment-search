var axios = require('axios');

var api_key = '21b0daca9dad79653c91d176b7930bee';
var param = "/popular/?api_key=21b0daca9dad79653c91d176b7930bee&language=en-US&page=1"

// var helpers = {
//   getPopMovieInfo: axios('http://api.themoviedb.org/3/tv/popular/?api_key=' + api_key + param)
//                     .then(function (response){
//                       console.log(response.data.results);
//                     })
//                     .catch(function (error){
//                       console.log('API Error',error);
//                     })
//                   }
function getInfo(type){
  return axios({
url: 'http://api.themoviedb.org/3/' + type + param,
method: 'GET',
withCredentials: true
}
)
}

var helpers = {

  getPopMovieInfo: function(retData){
    return axios.all(retData.map(function (type){
      return getInfo(type)
    })).then(function(info){
      return info.map(function(data){
      console.log(response.data.results)
    })
    }).catch(function(err){
      console.warn('Error in getPopMovieInfo', err)
    })
}
};


module.exports = helpers;
