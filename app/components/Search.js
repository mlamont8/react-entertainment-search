import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchTerm } from '../../actions'



class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchItem: '',
    },
    this.onUpdateUser = this.onUpdateUser.bind(this)
    this.handleSubmitTerm = this.handleSubmitTerm.bind(this)
    this.onSubmitTerm = this.onSubmitTerm.bind(this)
  }

// Push route to Search route using context.router
  handleSubmitTerm(e) {
    e.preventDefault();
    this.props.searchItem(this.state.searchTerm);
    this.context.router.push({
      pathname: '/search',
      query: {
        type: this.props.type,
        searchTerm: this.state.searchTerm
    }
    })
  }

  onUpdateUser(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  onSubmitTerm(e){
    e.preventDefault();
    let searchTerm = this.state.searchTerm;
    this.setState({
      searchItem: searchTerm,
      searchTerm: ''
    });



  }


  render() {
    return (
      <div className="row">
        <form className="col s3" onSubmit={this.handleSubmitTerm} style ={{width:'250px'}}>
          <div className="input-field white-text">
          <input
            // style={styles.inputArea}
            onChange={this.onUpdateUser}
            value={this.state.searchTerm}
            id="searchTextInput"
            type="text"
            placeholder="Search for a title..."
            className="inputArea"
             />
        </div>

      </form>
      </div>
    );
  }

}

Search.contextTypes = {
  router: React.PropTypes.object.isRequired
};

Search.propTypes = {
  type : React.PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    searchItem: (item) => {
      dispatch(searchTerm(item))
    }
  }
}



export default connect (
  null,
  mapDispatchToProps)
  (Search)
