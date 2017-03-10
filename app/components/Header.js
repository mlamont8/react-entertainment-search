var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Search = require('./explore/Search')
var Link = ReactRouter.Link;

var Header = React.createClass({

getInitialState() {
  return {
    type:''
  };
},

  render: function () {
    return(

<header style={styles.header}>
<nav className="transparent" style={styles.navStyles}>
  <div className="nav-wrapper">
  
{/* <!--Full sized Nav  --> */}
    <ul id="nav-full" className="right hide-on-med-and-down white-text">
      <li><Link className="white-text" activeClassName="active" to="/" style={styles.headerFont}>Home</Link></li>
      <li><Link className="white-text" activeClassName="active" to="/explore/movie"  style={styles.headerFont}>Movies</Link></li>
      <li><Link className="white-text" activeClassName="active" to="/explore/tv"  style={styles.headerFont}>TV Shows</Link></li>
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

</header>

    )
  }
});

module.exports = Header;
