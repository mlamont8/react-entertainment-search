var React = require('react')
var RadioButtons = require('./RadioButtons')
var styles = require('../../styles')


var Search = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  handleSubmitTerm: function (e){
    e.preventDefault();
    this.context.router.push({
      pathname: '/search',
      query: {
        type: this.props.type,
        searchTerm: this.state.searchTerm
    }
    })
  },

getInitialState: function () {
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

  <form className="col s3" onSubmit={this.handleSubmitTerm} style ={styles.searchform}>
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

</form>

)
}
  })


module.exports = Search;
