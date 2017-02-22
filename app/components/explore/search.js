var React = require('react')


function Search (){
  return(
    <div className="search-form row" >
  <form className="col s12" ng-submit="search()">
  <div className="row">

    <div className="inputField col s6 white-text">
    <input placeholder = "Search for" id="searchInput" type="text" ng-model="searchTerm" />
  </div>

  </div>



</form>





</div>


  )
}

module.exports = Search;
