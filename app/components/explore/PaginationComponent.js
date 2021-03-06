import React from "react";
import { Pagination } from "react-bootstrap";
import GridCard from "../GridCard/GridCard";
import apiHelper from "../../utils/apiHelper";

class PaginationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchTerm: "",
      apiInfo: [],
      activePage: 1,
      totalPages: 10
    };
  }
  componentDidMount() {
    const type = this.props.type;
    const page = 1;
    apiHelper.getExploreInfo(type, page).then(data =>
      this.setState({
        apiInfo: data.results,
        totalPages: data.total_pages
      })
    );
  }

  // When making a type change from menu...gets the new type and re render results.
  componentWillReceiveProps(nextProps) {
    // Check if type actually changed
    if (JSON.stringify(this.props.type) !== JSON.stringify(nextProps.type)) {
      const type = nextProps.type;
      apiHelper.getExploreInfo(type).then(data =>
        this.setState({
          apiInfo: data.results
        })
      );
    }
  }

  // Update when pagination is used
  PageChange(eventKey) {
    const type = this.props.type;
    const page = eventKey;
    this.setState({
      activePage: eventKey
    });
    apiHelper.getExploreInfo(type, page).then(data =>
      this.setState({
        apiInfo: data.results
      })
    );
  }

  render() {
    return (
      <div>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          bsSize="small"
          items={this.props.exploreFetch.total_pages}
          maxButtons={4}
          onSelect={this.PageChange.bind(this)}
          activePage={this.state.activePage}
        />

        <GridCard data={this.state.apiInfo} type={this.props.type} />
      </div>
    );
  }
}

PaginationComponent.propTypes = {
  type: React.PropTypes.string.isRequired
};
export default PaginationComponent;
