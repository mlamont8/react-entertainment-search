import React from 'react';
import DisplayGridContainer from './DisplayGridContainer';
import Search  from '../components/explore/Search';
import apiHelper from '../utils/apiHelper';
import Pagination from '../components/explore/PaginationComponent';



class ExploreContainer extends React.Component {



  render() {
    return (
      <div className= "container" style={{backgroundColor: '#000000', paddingTop: '80px'}}>

          <Search type={this.props.route.type} />

          <Pagination type={this.props.route.type}/>

      </div>
    );
  }

}



export default ExploreContainer;
