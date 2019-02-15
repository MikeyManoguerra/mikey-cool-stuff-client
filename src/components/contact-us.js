import React from 'react'
import { Link } from 'react-router-dom'


export class Contact extends React.Component {


  render() {

    return (
      <div className='sub-menu'>
        <h3>Contact us</h3>
        <p>Questions? Suggestions? </p>
        <p>Email the developer at mikeyManoguerra@gmail.com</p>
        <Link to='/menu/'><div className='go-back'>Go back</div></Link>
      </div>
    )
  }
}