var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Search = require('./explore/Search')
var Link = ReactRouter.Link;

var Header = React.createClass({
  render: function () {
    return(

<header style={styles.header}>
<nav style={styles.navStyles}>
  <div className="nav-wrapper">
    <span className="brand-logo hide-on-med-and-down">VID Search</span>
    {/* <span className="center"><Search className="center"/></span> */}
{/* <!--Full sized Nav  --> */}
    <ul id="nav-full" className="right hide-on-med-and-down white-text" style={styles.headerFont}>
      <li><Link className="white-text" activeClassName="active" to="/">Home</Link></li>
      <li><Link className="white-text" activeClassName="active" to="/explore/movie">Movies</Link></li>
      <li><Link className="white-text" activeClassName="active" to="/explore/tv">TV Shows</Link></li>
     </ul>
     {/* <!-- Mobile Button --> */}
        <a href="#" className="button-collapse" data-activates="mobile-nav" data-sidenav="left" data-closeonclick="true" data-menuwidth="100">
           <i className="material-icons">menu</i>
         </a>
{/* <!-- Mobile Sidenav Menu --> */}
   <ul id="mobile-nav" className="black-text side-nav">
      <li><Link className="black-text" activeClassName="active" to="/">Home</Link></li>
      <li><Link  className="black-text" activeClassName="active" to="/explore/movie">Movies</Link></li>
     <li><Link className="black-text" activeClassName="active" to="/explore/tv">TV Shows</Link></li>
     </ul>

  </div>
</nav>
<span className="center"><Search className="center"/></span>
</header>

    )
  }
});

module.exports = Header;
