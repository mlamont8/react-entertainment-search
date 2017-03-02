var React = require('react')


var Search = React.createClass({

getInitialState() {
  return {
    searchTerm: '',
    searchItem: ''
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
    searchItem: searchTerm,
    searchTerm: ''

  });


},

  render: function() {
  return(
    <div className="search-form" >


  <form className="col s3" onSubmit={this.onSubmitTerm}>
    <div className="input-field white-text">
      <i className="material-icons prefix">search</i>
    <input
      onChange={this.onUpdateUser}
      value={this.state.searchTerm}
      id="searchTextInput"
      type="text"
       />
  </div>
</form>


</div>
)
}
  })


module.exports = Search;
