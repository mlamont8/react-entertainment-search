var React = require('react')


var Search = React.createClass({

getInitialState() {
  return {
    searchTerm: ''
  }
},

onUpdateUser: function (e){
  this.setState({
    searchTerm: e.target.value
  })
},

onSubmitTerm: function (e){
  e.preventDefault();
  var searchTerm = this.state.searchTerm;
  this.setState({
    searchTerm: '',
    searchItem: searchTerm
  });


},

  render: function() {
  return(
    <div className="search-form row" >


  <form className="col s3" onSubmit={this.onSubmitTerm}>
    <div className="input-field white-text">
      <i className="material-icons prefix">search</i>
    <input
      onChange={this.onUpdateUser}
      value={this.state.searchTerm}
      id="searchTextInput"
      type="text"
       />
       <label htmlFor="searchInput">Search Icon</label>
  </div>
</form>


</div>
)
}
  })


module.exports = Search;
