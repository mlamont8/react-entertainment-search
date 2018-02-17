// Displays Grid of images during TV or Movie Browse

import React from 'react';
import ReactRouter, {Link} from 'react-router';
import {Col, Row, Image} from 'react-bootstrap';


const DisplayGridContainer = ({data,type}) => {
        return (
          <Row className="row">
              {data.map(data => {
                  return (
                    <Col key={data.id} lg={2} sm={4} xs={6} className=' gridCol' >
                      <Link to={'detail/'+ type +'/'+ data.id } >
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


DisplayGridContainer.propTypes = {
    type: React.PropTypes.string.isRequired,
    data: React.PropTypes.array.isRequired
};

export default DisplayGridContainer;
