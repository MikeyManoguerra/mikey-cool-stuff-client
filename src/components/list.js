import React from 'react';
import {connect} from 'react-redux';

export class List extends React.Component{


  render(){
    return(
      <div>
        Test
      </div>
    )
  }
}

const mapStatetoProps ={
  
}

export default connect(mapStatetoProps)(List)