var React = require('react')
var styles = require('../../../styles')
var Col = require('react-bootstrap').Col
var Row = require('react-bootstrap').Row


var MainDivider = function(){

    return (
        <Row>
          <Col className="col red darken-4 white-text" xs={12} style={styles.titleBlock}>
            <span style={styles.mainTitle}>
                WHAT'S OUT
            </span>
        </Col>
      </Row>
    )

}

module.exports = MainDivider;
