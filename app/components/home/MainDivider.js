import React from 'react';
import {Col, Row} from 'react-bootstrap';
import css from '../../styles/index.scss';


class MainDivider extends React.Component {

  render() {
    return (
      <Row>
        <Col className="col red darken-4 white-text titleBlock" xs={12} >
          <p className="mainDividerTitle">
              Whats Out
          </p>
      </Col>
    </Row>
    );
  }

}

export default MainDivider;
