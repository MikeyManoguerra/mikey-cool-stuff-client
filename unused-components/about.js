import React from 'react'
import { Link } from 'react-router-dom'


export class About extends React.Component {


  render() {
    // TODO add popup text here
    return (
      <div className='sub-menu'>
        <h3>Welcome!</h3>
        <p>On this site you can post a photo and describe an object, along with your location
          and where on the globe your object was made.
          </p>
        <p>This is a place to share and document the materials
       of your life, and to view and revere the menagerie of matter
         humans have collected and created for our modern world.
          </p>
        <Link to='/menu/'><div className='go-back'>Go back</div></Link>
      </div>
    )
  }
}