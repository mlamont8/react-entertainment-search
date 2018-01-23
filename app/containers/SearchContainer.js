// Displays search results after a search

import React from 'react';
import apiHelper from '../utils/apiHelper';
import DisplayGridContainer from './DisplayGridContainer';
import Search from '../components/explore/Search'


class SearchContainer extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    apiInfo: []
  }
}

componentDidMount() {
  const searchType = this.props.location.query.type
  const searchTerm = this.props.location.query.searchTerm
  apiHelper.getSearchInfo(searchType, searchTerm)
    .then (function(data){

      this.setState ({
        apiInfo: data
      })
    }.bind(this)
  )
}

  render() {
    return (
            <div style={{backgroundColor: '#000000', paddingTop: '80px'}}>
              <Search type={this.props.location.query.type} />
              <DisplayGridContainer
                data={this.state.apiInfo}
                type ={this.props.location.query.type}/>
            </div>
          )

  }

}

export default SearchContainer;
