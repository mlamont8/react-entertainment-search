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
var NavDropdown = require('react-bootstrap').NavDropdown
var Menu = require('react-burger-menu').slide;
import { Link } from 'react-router';
import Radium from 'radium';

var RadiumLink = Radium(Link);

var Head = React.createClass({

// getInitialState() {
//   return {
//     type:''
//   };
// },

  render: function () {
    return(

      // <Navbar collapseOnSelect className="navStyles fixedTop">
      //   <Navbar.Header>
      //   <Navbar.Toggle />
      //   </Navbar.Header>
      //   {/* Full Navbar */}
      //   <Navbar.Collapse>
      //   <Nav className="navigation" pullRight>
      //
      //   <IndexLinkContainer className="homeLink headerLinks" to="/"><NavItem eventKey={1}>Home</NavItem></IndexLinkContainer>
      //   <LinkContainer className="movie-link headerLinks" to="/explore/movie"><NavItem eventKey={2}>Movies</NavItem></LinkContainer>
      //   <LinkContainer className="tv-link headerLinks" to="/explore/tv"><NavItem eventKey={3}>TV Shows</NavItem></LinkContainer>
      //
      //   {/* <NavItem eventKey={1} href='/'>Home</NavItem>
      //   <NavItem eventKey={2} href='explore/movie'>Movies</NavItem>
      //   <NavItem eventKey={3} href='explore/tv'>TV Shows</NavItem> */}
      //
      //   </Nav>
      //   </Navbar.Collapse>
      // {/* Mobile Navbar */}
      //   {/* <Navbar.Collapse>
      //   <NavDropdown className="nav-dropdown">
      //
      //   <IndexLinkContainer className="homeLink dropdownLinks" to="/"><NavItem eventKey={1}>Home</NavItem></IndexLinkContainer>
      //   <LinkContainer className="movie-link dropdownLinks" to="/explore/movie"><NavItem eventKey={2}>Movies</NavItem></LinkContainer>
      //   <LinkContainer className="tv-link dropdownLinks" to="/explore/tv"><NavItem eventKey={3}>TV Shows</NavItem></LinkContainer>
      //
      //   </NavDropdown>
      //   </Navbar.Collapse> */}
      //   </Navbar>

      <Menu right isOpen={ false } width={ 150 }>
              <RadiumLink className="menu-item" to="/">Home</RadiumLink>
              <RadiumLink className="menu-item" to="/explore/movie">Movies</RadiumLink>
              <RadiumLink className="menu-item" to="/explore/tv">TV Shows</RadiumLink>
            </Menu>

    )
  }
});

module.exports = Head;
