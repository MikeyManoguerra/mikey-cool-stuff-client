import React from 'react';
import { Link } from 'react-router-dom';
import './css/nav-bar.css';

export class NavBar extends React.Component {

  render() {
    return (
      <nav className='nav-list'>
        <Link to='/menu/' className='menu'>Menu</Link>
        <Link to='/App/form/' className='form'>Add Object!</Link>
      </nav>
    )
  }
}