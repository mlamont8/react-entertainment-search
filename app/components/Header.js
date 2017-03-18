var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Search = require('./explore/Search')
var Link = ReactRouter.Link;
var Radium = require('radium')
var RadiumLink = Radium(Link)
var Menu = require('react-burger-menu').stack
var Nav = require('react-bootstrap').Nav
var NavItem = require('react-bootstrap').NavItem
var Navbar = require('react-bootstrap').Navbar
var MenuItem = require('react-bootstrap').MenuItem
var LinkContainer = require('react-router-bootstrap').LinkContainer

var Header = React.createClass({

getInitialState() {
  return {
    type:''
  };
},

  render: function () {
    return(


      <Navbar style={styles.navStyles}>
        <Navbar.Header>
          {/* <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand> */}
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav bsStyle="pills" pullRight>

            <LinkContainer className="home-link" to="/" style={styles.headerFont}><NavItem eventKey={1}>Home</NavItem></LinkContainer>
            <LinkContainer className="movie-link" to="/explore/movie"  style={styles.headerFont}><NavItem eventKey={2}>Movies</NavItem></LinkContainer>
            <LinkContainer className="tv-link" to="/explore/tv"  style={styles.headerFont}><NavItem eventKey={3}>TV Shows</NavItem></LinkContainer>

          </Nav>
          </Navbar.Collapse>
        </Navbar>


    )
  }
});

module.exports = Header;
