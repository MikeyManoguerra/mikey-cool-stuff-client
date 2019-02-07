import React from 'react';
import {Link} from 'react-router-dom';
import './menu.css'



export class Menu extends React.Component{

  render(){
    return (
      <div className='menu'>
        <ul>
          <li><button>switch data view</button></li> 
          {/* on close menu, uses store data to conditionally render list vs map page */}
          <li><Link to='menu/categories'>Filter by categories</Link></li>
          <li><Link to='menu/about'>About this project</Link></li>
          <li><Link to='menu/contact'>Contact us</Link></li>
          <li><Link to='/App/form'>Add an Item</Link></li>
          <li><Link to='/App/List'>close menu</Link></li>
          {/*  last link will have conditional path for map v list */}
        </ul>
      </div>

    )
  }
}