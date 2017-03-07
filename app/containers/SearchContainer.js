var React = require('react')
var DisplayGridContainer = require('./DisplayGridContainer')
var apiHelper = require('../utils/apiHelper')

var SearchContainer =  React.createClass({

  getInitialState(){
    return {
      apiInfo: []
    }
  },

componentDidMount: function () {
  var searchType = this.props.location.query.type
  var searchTerm = this.props.location.query.searchTerm
  apiHelper.getSearchInfo(searchType, searchTerm)
    .then (function(data){

      this.setState ({
        apiInfo: data
      })
    }.bind(this)
  )
},


  render: function () {

    return (
      <div style={{backgroundColor: '#000000', paddingTop: '80px'}}>
        <DisplayGridContainer
          data={this.state.apiInfo}
          type ={this.props.location.query.type}/>
      </div>
    )
  }


})

module.exports = SearchContainer
