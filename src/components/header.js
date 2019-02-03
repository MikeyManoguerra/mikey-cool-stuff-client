import React from 'react';
import {connect} from 'react-redux';
import {NavBar} from './nav-bar';
import './header.css';

export class Header extends React.Component {
  


  render(){
    return(
      <header>
      <NavBar/>
      <div className="title">
        <h1>Object Assign</h1>
        <h2> Organizations of Matter coming and going</h2>
       </div>
      </header>
    )

  }
}
const mapStatetoProps = state => ({


});

export default connect(mapStatetoProps)(Header)