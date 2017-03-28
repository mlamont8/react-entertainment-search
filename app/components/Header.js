var React = require('react');
var css = require('../styles/index.scss');
var Menu = require('react-burger-menu').slide;
import { Link } from 'react-router';
import Radium from 'radium';

var RadiumLink = Radium(Link);

var Head = React.createClass({


  render: function () {
    return(

      //uses react-burger-menu with Links wrapped in Radium

      <Menu right isOpen={ false } width={ 150 }>
              <RadiumLink className="menu-item" to="/">Home</RadiumLink>
              <RadiumLink className="menu-item" to="/explore/movie">Movies</RadiumLink>
              <RadiumLink className="menu-item" to="/explore/tv">TV Shows</RadiumLink>
            </Menu>

    )
  }
});

module.exports = Head;
