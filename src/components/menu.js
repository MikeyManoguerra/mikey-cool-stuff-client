import React from 'react';
import { Link } from 'react-router-dom';
import './css/menu.css'



export class Menu extends React.Component {

  render() {
    return (
      <div className='menu display'>
        <h2> Navigation Menu</h2>
        <div className='menu-container'>
          {/* <div className='menu-item'><button>switch data view</button></div>
          on close menu, uses store data to conditionally render isst vs map page */}
          <Link to='/menu/categories'>
            <div className='menu-item'>Filter by categories</div></Link>
          <Link to='/menu/about'>
            <div className='menu-item'><span>About this project</span></div></Link>
          <Link to='/menu/contact'>
            <div className='menu-item'>Contact us</div></Link>
          <Link to='/App/form'>
            <div className='menu-item'> Add an Item</div></Link>
          <Link to='/App/List'>
            <div className='menu-item'>close  menu</div></Link>
          {/*  last Link will have conditional path for map v lisst */}
        </div>
      </div>

    )
  }
}