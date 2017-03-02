var React = require('react')
var styles = require('../../styles')


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
    // <div className="search-form" var style ={styles.searchform}>


  <form className="col s3" onSubmit={this.onSubmitTerm} style ={styles.searchform}>
    <div className="input-field white-text">
      <i className="material-icons prefix">search</i>
    <input
      style={styles.searchform}
      onChange={this.onUpdateUser}
      value={this.state.searchTerm}
      id="searchTextInput"
      type="text"
       />
  </div>
</form>


// </div>
)
}
  })


module.exports = Search;
