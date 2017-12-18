import React from 'react';
import {Col, Row, Button} from 'react-bootstrap';
import { Link } from 'react-router';


class MainDivider extends React.Component {

  render() {
    return (
      <Row>

        <Row>
        <Col className="white-text text-center titleBlock" xs={12} >
          <p className="mainDividerTitle">
              Whats Out
          </p>
      </Col>
      </Row>

      <Row>
        <Col className="text-center subTitle" xs={12}>
          <span><Link to="/explore/movie">Hot Movies</Link></span>
          <span><Link to="/explore/tv">Hot TV Shows</Link></span>
        </Col>
        </Row>

    </Row>
    );
  }

}

export default MainDivider;
