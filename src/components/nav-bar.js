import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './nav-bar.css';

export class NavBar extends React.Component{

  render(){
    return(
      <nav className='nav-list'>
        <Link to='/menu/' className='menu'>Menu</Link>
         <Link to='/form/' className='form'>Add Object!</Link>

     </nav>
    )
  }
}