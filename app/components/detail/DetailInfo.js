import React, {propTypes} from 'react';
import {Row, Col} from 'react-bootstrap';



class DetailInfo extends React.Component {

  render() {
    return (
  
      <Col  md={12} lg={10} className='detailInfo'>
        <h1>{this.props.title}</h1>
        <p>Release Date: {this.props.date}</p>
        <p className="description lead">{this.props.overview}</p>
        <p>Rating: {this.props.rating} of 10.0</p>
        <p><span className="homepage"><a href={this.props.homepage}>HOMEPAGE</a></span></p>
      </Col>


    );
  }

}

DetailInfo.propTypes = {
  title: React.PropTypes.string.isRequired,
  data: React.PropTypes.string,
  overview: React.PropTypes.string,
  rating: React.PropTypes.number,
  homepage: React.PropTypes.string
};
  export default DetailInfo;
