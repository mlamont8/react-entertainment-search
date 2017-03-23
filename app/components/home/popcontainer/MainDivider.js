var React = require('react')
var Col = require('react-bootstrap').Col
var Row = require('react-bootstrap').Row
var css = require( '../../../styles/index.scss');


var MainDivider = function(){

    return (
        <Row>
          <Col className="col red darken-4 white-text titleBlock" xs={12} >
            <span className="mainTitle">
                Whats Out
            </span>
        </Col>
      </Row>
    )

}

module.exports = MainDivider;
