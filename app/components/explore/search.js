var React = require('react')


function Search (){
  return(
    <div className="search-form row" >
  <form className="col s12" onSubmit={props.searchTerm}>
  <div className="row">

    <div className="inputField col s6 white-text">
    <input
      placeholder = "Search for"
      id="searchInput"
      type="text"
       />
  </div>

  </div>



</form>





</div>


  )
}

module.exports = Search;
