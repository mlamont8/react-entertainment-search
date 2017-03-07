var React = require('react')
var Search = require('../components/explore/Search')
var apiHelper = require('../utils/apiHelper')
var DisplayGridContainer = require('./DisplayGridContainer')
var ReactPaginate = require('react-paginate')

var ExploreContainer = React.createClass({

getInitialState() {
  return {
    SearchTerm: '',
    apiInfo: []

  };
},


componentDidMount: function (){
  var type = this.props.route.type
apiHelper.getExploreInfo(type)
.then(function (data){

  this.setState({
    apiInfo: data
  })
}.bind(this)
)


},

componentWillReceiveProps: function (nextProps){
  if(JSON.stringify(this.props.route.type) !== JSON.stringify(nextProps.route.type))
  // Check if type actually changed
    {
  var type = nextProps.route.type
ExploreHelper.getExploreInfo(type)
.then(function (data){
  console.log('update',type)
  this.setState({
    apiInfo: data
  })
}.bind(this)
)
}
},

PageChange: function (){
    var type = this.props.params.type
    var page = this.props.page
    apiHelper.getExploreInfo(type,page)
    .then(function (data){
      console.log('pagechange',data, page)
      this.setState({
        apiInfo: data
      })
    }.bind(this)
    )

},


  render: function () {
    return(
      <div style={{backgroundColor: '#000000', paddingTop: '80px'}}>
        <Search
        type={this.props.route.type}
      />
        {/* <ReactPaginate previousLabel={"previous"}
               nextLabel={"next"}
               breakLabel={<a href="">...</a>}
               breakClassName={"break-me"}
               pageCount={this.state.total_pages}
               marginPagesDisplayed={2}
               pageRangeDisplayed={5}
               onPageChange = {this.PageChange}
               containerClassName={"pagination"}
               subContainerClassName={"pages pagination"}
               activeClassName={"active"} /> */}
        <DisplayGridContainer data={this.state.apiInfo} type={this.props.route.type}/>

      </div>
    )

  }
})

module.exports = ExploreContainer;
