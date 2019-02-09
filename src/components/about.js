import React from 'react'
import { Link } from 'react-router-dom'


export class About extends React.Component {


  render() {

    return (
      <div>
        <h3>about this site stub</h3>

        <Link to='/menu/'>go back</Link>
      </div>
    )
  }
}