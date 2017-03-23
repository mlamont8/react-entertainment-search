var React = require('react');
var css = require('../styles/index.scss');
var ReactRouter = require('react-router');
var Search = require('./explore/Search')
var Nav = require('react-bootstrap').Nav
var NavItem = require('react-bootstrap').NavItem
var Navbar = require('react-bootstrap').Navbar
var MenuItem = require('react-bootstrap').MenuItem
var LinkContainer = require('react-router-bootstrap').LinkContainer
var Image = require('react-bootstrap').Image
var IndexLinkContainer = require('react-router-bootstrap').IndexLinkContainer

var Header = React.createClass({

getInitialState() {
  return {
    type:''
  };
},

  render: function () {
    return(


      <Navbar collapseOnSelect className="navStyles fixedTop">
        <Navbar.Header>
                <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="navigation" pullRight>

            <IndexLinkContainer className="homeLink headerFont" to="/"><NavItem eventKey={1}>Home</NavItem></IndexLinkContainer>
            <LinkContainer className="movie-link headerFont" to="/explore/movie"><NavItem eventKey={2}>Movies</NavItem></LinkContainer>
            <LinkContainer className="tv-link headerFont" to="/explore/tv"><NavItem eventKey={3}>TV Shows</NavItem></LinkContainer>

          </Nav>
          </Navbar.Collapse>
        </Navbar>


    )
  }
});

module.exports = Header;
