import React from 'react';
import { connect } from 'react-redux';
import { NavBar } from './nav-bar';
import './css/header.css';


export class Header extends React.Component {

 

  render() {
    
    

    return (
      <div >
        <NavBar />
        <header role='banner' className="title">
          <h1>Matter Source</h1>
          <h2 className='sub-header'>Locate stuff on Earth</h2>

          <p>On this site you can post a photo and describe an object, along with your location
              and where on the globe your object was made.
          </p>
            <p>Here is a place to share and document the materials
           of your life, and to view and revere the menagerie of matter
             humans have collected and created for our modern world.
          </p>
         
        </header>
      </div>
    )
  }
}


export default connect()(Header)