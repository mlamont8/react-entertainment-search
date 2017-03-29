import React from 'react';
import DisplayGridContainer from './DisplayGridContainer';
import Search  from '../components/explore/Search';
import apiHelper from '../utils/apiHelper';
import ReactPaginate from 'react-paginate';
import {Pagination} from 'react-bootstrap';



class ExploreContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      SearchTerm: '',
      apiInfo: [],
      activePage: 1,
      totalPages: 10
    }
  }

  componentDidMount(){
    const type = this.props.route.type
    const page = 1
  apiHelper.getExploreInfo(type, page)
  .then(function (data){

    this.setState({
      apiInfo: data.results,
      totalPages: data.total_pages
    })
  }.bind(this)
  )
  }

  componentWillReceiveProps(nextProps){
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
  }

  // Update when pagination is used
  PageChange(eventKey){
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

  }

  render() {
    return (
      <div className= "container" style={{backgroundColor: '#000000', paddingTop: '80px'}}>
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
    );
  }

}

export default ExploreContainer;
