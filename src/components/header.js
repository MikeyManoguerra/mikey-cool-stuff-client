import React from 'react';
import { connect } from 'react-redux';
import { NavBar } from './nav-bar';
import './css/header.css';
import { contractInfoSection, expandInfoSection } from '../actions/display';


export class Header extends React.Component {

  userContractsInfoSection() {
    this.props.dispatch(contractInfoSection())
  }

  userExpandsInfoSection() {
    this.props.dispatch(expandInfoSection())
  }

  render() {
    let infoDisplay = (<button
      onClick={() => this.userExpandsInfoSection()}>
      Click for more info</button>);
    if (this.props.infoSection === 'page-load' ||
      this.props.infoSection === 'more-info') {
      infoDisplay = (
        <div className='info-section'>
        <div id='text'>
          <button onClick={() => this.userContractsInfoSection()}>
            hide the app info</button>
            <h3>Welcome!</h3>
          <p>On this site you can post a photo and describe an object, along with your location 
            and where on the globe your object was made.
          </p>
           <p>This is a place to share and document the materials
          of your life, and to view and revere the menagerie of matter 
            humans have collected and created for our modern world.
          </p>
          </div>
        </div>
      )
    }

    return (
      <header>
        <NavBar />
        <div className="title">
          <h1>Source Stuff</h1>
          <h2>Locate matter on Earth</h2>
          {infoDisplay}
        </div>
      </header>
    )
  }
}

const mapStatetoProps = state => ({
  infoSection: state.display.infoSection
});

export default connect(mapStatetoProps)(Header)