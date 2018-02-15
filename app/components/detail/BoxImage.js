import React, {propTypes} from 'react';
import css  from '../../styles/index.scss';
import {Col, Image} from 'react-bootstrap';


export default class BoxImage extends React.Component {


  render() {
    const path = this.props.path
    return (
          <Col md={12} lg={2} className="boxCover">
            <Image responsive src={'https://image.tmdb.org/t/p/w185/' + path} className="boxCoverImg" />
          </Col>
          );
          }

}

BoxImage.propTypes = {
  path: React.PropTypes.string
}
