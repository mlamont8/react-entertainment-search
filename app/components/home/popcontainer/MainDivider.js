var React = require('react')
var styles = require('../../../styles')
var Col = require('react-bootstrap').Col
var Row = require('react-bootstrap').Row
import css from '../../../styles/index.scss';


var MainDivider = function(){

    return (
        <Row>
          <Col className="col red darken-4 white-text titleBlock" xs={12} >
            <span style={styles.mainTitle}>
                WHAT'S OUT
            </span>
        </Col>
      </Row>
    )

}

module.exports = MainDivider;
