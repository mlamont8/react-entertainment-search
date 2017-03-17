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
var NavBar = require('react-bootstrap').NavBar
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

<NavBar>
    {/* <NavBar.Collapse> */}
      <Nav bsStyle="pills" pullRight style={styles.navStyles}>
    {/* <div className="nav-wrapper"> */}

{/* <!--Full sized Nav  --> */}

    {/* <ul id="nav-full" className="right hide-on-med-and-down white-text"> */}
      <LinkContainer className="white-text" activeClassName="active" to="/" style={styles.headerFont}><NavItem eventKey={1}>Home</NavItem></LinkContainer>
      <LinkContainer className="white-text" activeClassName="active" to="/explore/movie"  style={styles.headerFont}><NavItem eventKey={2}>Movies</NavItem></LinkContainer>
      <LinkContainer className="white-text" activeClassName="active" to="/explore/tv"  style={styles.headerFont}><NavItem eventKey={3}>TV Shows</NavItem></LinkContainer>
     {/* </ul> */}
     {/* <!-- Mobile Button --> */}

{/* <!-- Mobile Sidenav Menu --> */}
   {/* <ul id="mobile-nav" className="black-text side-nav">
      <li><Link className="black-text" activeClassName="active" to="/">Home</Link></li>
      <li><Link  className="black-text" activeClassName="active" to="/explore/movie">Movies</Link></li>
     <li><Link className="black-text" activeClassName="active" to="/explore/tv">TV Shows</Link></li>
     </ul> */}
{/* <div className="hide-on-large-only">
     <Menu width={ 300 } styles={ styles }>
       <RadiumLink className="menu-item" to="/">Home</RadiumLink>
       <RadiumLink className="menu-item" to="/explore/movie">Movies</RadiumLink>
       <RadiumLink className="menu-item" to="/explore/tv">TV Shows</RadiumLink>
       {/* <RadiumLink onClick={ this.showSettings } className="menu-item--small" href="">Settings</RadiumLink> */}
       {/* <RadiumLink onClick={ this.showSettings } href="#" className=" menu-item button-collapse"  data-sidenav="left" data-closeonclick="true">
          <i className="material-icons">menu</i>
        </RadiumLink> */}
     {/* </Menu>
</div> */}
  {/* </div> */}
  </Nav>


</NavBar>

    )
  }
});

module.exports = Header;
