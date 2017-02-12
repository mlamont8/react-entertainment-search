var React = require('react');

var Header = React.createClass({
  render: function () {
    return(

<header>
<nav className="indigo darken-4">
  <div className="nav-wrapper">
    <span className="brand-logo hide-on-med-and-down">Entertainment Search</span>
{/* <!--Full sized Nav  --> */}
    <ul id="nav-full" className="right hide-on-med-and-down white-text">
      <li className="active"><a className="white-text" href="/">Home</a></li>
      <li><a  className="white-text" href="/movies">Movies</a></li>
     <li><a className="white-text" href="/tv">TV Shows</a></li>
     </ul>
     {/* <!-- Mobile Button --> */}
        <a href="#" className="button-collapse" data-activates="mobile-nav" data-sidenav="left" data-closeonclick="true" data-menuwidth="100">
           <i className="material-icons">menu</i>
</a>
{/* <!-- Mobile Sidenav Menu --> */}
   <ul id="mobile-nav" className="black-text side-nav">
      <li className="active"><a className="black-text" href="/">Home</a></li>
      <li><a  className="black-text" href="/movies">Movies</a></li>
     <li><a className="black-text" href="/tv">TV Shows</a></li>
     </ul>

  </div>
</nav>
</header>

    )
  }
});

module.exports = Header;
