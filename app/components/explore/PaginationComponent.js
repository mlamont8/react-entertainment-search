import React from 'react';
import { Pagination } from 'react-bootstrap';
import DisplayGridContainer from '../../containers/DisplayGridContainer';
import apiHelper from '../../utils/apiHelper';

class PaginationComponent extends React.Component {

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
    // console.log('pagi', this.props.exploreData)
    const type = this.props.type
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

// When making a type change from menu...gets the new type and re render results.
  componentWillReceiveProps(nextProps){
    // Check if type actually changed
    if(JSON.stringify(this.props.type) !== JSON.stringify(nextProps.type))
      {
        const type = nextProps.type
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
      const type = this.props.type
      const page = eventKey
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
    
    console.log('pagi2', this.props.exploreFetch)
    return (
      <div>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          bsSize = 'small'
          items = {this.state.totalPages}
          maxButtons = {4}
          onSelect = {this.PageChange.bind(this)}
          activePage={this.state.activePage}
        />

        <DisplayGridContainer data={this.state.apiInfo} type={this.props.type}/>
    </div>
    );
  }

}
PaginationComponent.propTypes = {
    type: React.PropTypes.string.isRequired
};

export default PaginationComponent;
