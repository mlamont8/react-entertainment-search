// Displays Grid of images during TV or Movie Browse

var React = require('react')
var ReactRouter = require('react-router');
var Col = require('react-bootstrap').Col
var Row = require('react-bootstrap').Row
var Link = ReactRouter.Link;
var Image = require('react-bootstrap').Image

var DisplayGridContainer = React.createClass({



render: function(){
  return(
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


  )
}
})




module.exports = DisplayGridContainer;
