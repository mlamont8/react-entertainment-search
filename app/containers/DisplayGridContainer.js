// Displays Grid of images during TV or Movie Browse

import React from 'react';
import ReactRouter, {Link} from 'react-router';
import {Col, Row, Image} from 'react-bootstrap';


class DisplayGridContainer extends React.Component {

  render() {
    return (
      <Row className="row">

          {this.props.data.map(data => {
                  return (

                <Col key={data.id} lg={2} sm={4} xs={6} className=' gridCol' >

                  <Link to={'detail/'+ this.props.type +'/'+ data.id } >
                    <Image responsive src = {'https://image.tmdb.org/t/p/w154' + data.poster_path}


                   />
                  </Link>

                </Col>

              )
            }
        )}
      </Row>


    );
  }

}

export default DisplayGridContainer;
