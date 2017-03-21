var React = require('react')
var Search = require('../components/explore/Search')
var apiHelper = require('../utils/apiHelper')
var DisplayGridContainer = require('./DisplayGridContainer')
var ReactPaginate = require('react-paginate')
var Pagination = require('react-bootstrap').Pagination

var ExploreContainer = React.createClass({

getInitialState() {
  return {
    SearchTerm: '',
    apiInfo: [],
    activePage: 1,
    totalPages: 10

  };
},


componentDidMount: function (){
  var type = this.props.route.type
  var page = 1
apiHelper.getExploreInfo(type, page)
.then(function (data){

  this.setState({
    apiInfo: data.results,
    totalPages: data.total_pages
  })
}.bind(this)
)
},

componentWillReceiveProps: function (nextProps){
  if(JSON.stringify(this.props.route.type) !== JSON.stringify(nextProps.route.type))
  // Check if type actually changed
    {
  var type = nextProps.route.type
apiHelper.getExploreInfo(type)
.then(function (data){

  this.setState({
    apiInfo: data.results
  })
}.bind(this)
)
}
},

// Update when pagination is used
PageChange: function (eventKey){
    var type = this.props.route.type
    var page = eventKey
    this.setState({
      activePage: eventKey
    });
    apiHelper.getExploreInfo(type,page)
    .then(function (data){
        this.setState({
        apiInfo: data.results
      })
    }.bind(this)
    )

},


  render: function () {
    return(
      <div style={{backgroundColor: '#000000', paddingTop: '80px'}}>
        <div className="row">
          <Search type={this.props.route.type} />
        </div>

        <Pagination
               prev
               next
               first
               last
               ellipsis
               boundaryLinks
               bsSize = 'small'
               items={this.state.totalPages}
               maxButtons={4}
               onSelect = {this.PageChange}
               activePage={this.state.activePage}
             />

        <DisplayGridContainer data={this.state.apiInfo} type={this.props.route.type}/>

      </div>
    )

  }
})

module.exports = ExploreContainer;
