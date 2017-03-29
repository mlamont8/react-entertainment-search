
import React from 'react';
import css from '../styles/index.scss';
import {slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router';
import Radium from 'radium';



var RadiumLink = Radium(Link);


class Header extends React.Component {

  render() {
    return (
      //uses react-burger-menu with Links wrapped in Radium

      <Menu right isOpen={ false } width={ 175}>
              <RadiumLink className="menu-item" to="/">Home</RadiumLink>
              <RadiumLink className="menu-item" to="/explore/movie">Movies</RadiumLink>
              <RadiumLink className="menu-item" to="/explore/tv">TV Shows</RadiumLink>
            </Menu>

    );
  }

}

export default Header;
