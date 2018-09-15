import React from "react";
import { connect } from "react-redux";
import { fetchExploreData } from "../actions";
import Search from "../components/explore/Search";
import Pagination from "../components/explore/PaginationComponent";
import Loader from "../components/Loader";

class ExploreContainer extends React.Component {
  componentDidMount() {
    const type = this.props.route.type;
    this.props.fetch(type, 1);
  }
  // Add is fetching
  render() {
    return this.props.data.isLoading === true ? (
      <Loader />
    ) : (
      <div
        className="container"
        style={{ backgroundColor: "#000000", paddingTop: "80px" }}
      >
        <Search type={this.props.route.type} />

        <Pagination
          type={this.props.route.type}
          exploreFetch={this.props.data.exploreResults}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.exploreResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: (type, page) => {
      dispatch(fetchExploreData(type, page));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExploreContainer);
