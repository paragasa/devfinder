import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
//import { Test } from './Nav.styles';
const DEV_FINDER='DevFinder';
const ICON = 'fa fa-binoculars';

const NavBar = () => { 

    return(
      <nav className="navbar bg-primary">
        <h1><i className={ICON}></i>{DEV_FINDER}</h1> 
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    );
  
}

NavBar.propTypes = {
  // bla: PropTypes.string,
  
};

NavBar.defaultProps = {
  // bla: 'test',

};

export default NavBar;
