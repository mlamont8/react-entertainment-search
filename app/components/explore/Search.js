var React = require('react')
var RadioButtons = require('./RadioButtons')
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
      style={styles.inputArea}
      onChange={this.onUpdateUser}
      value={this.state.searchTerm}
      id="searchTextInput"
      type="text"
       />
  </div>
  <div>
  <span>
    <input name="searchType" type="radio" id="movRadio" value='movie' />
    <label for="movRadio">Movies</label>
  </span>
  <span>
    <input name="searchType" type="radio" id="tvRadio" value='tv' />
    <label for="tvRadio">TV Shows</label>
  </span>
</div>
</form>


// </div>
)
}
  })


module.exports = Search;
