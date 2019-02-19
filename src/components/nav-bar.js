import React from 'react';
import { Link } from 'react-router-dom';
import './css/nav-bar.css';

export class NavBar extends React.Component {

  render() {
    return (
      <nav role='navigation' className='nav-list'>
        <Link to='/App/List/'><div className='nav-item'>See the Collection</div></Link>
        <Link to='/App/Form/'><div className='nav-item'>Add An Object</div></Link>
      </nav>
    )
  }
}