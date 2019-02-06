import React from 'react';
import './list-item.css';
import { handleExpandedItem } from '../actions/display';
import { connect } from 'react-redux';

export class ListItem extends React.Component {
 
  expandThisitem(e){
    console.log(this.props)
    this.props.dispatch(handleExpandedItem(e))
  }
 
  render() {
    return (
      <div className="list-item">
        <div className='image-container'>
        x
        </div>

        <div className='info-container'>
          <h3> {this.props.name}</h3>
          <p>Postal code location: {this.props.postalCode}</p>
          <p>Country of origin: {this.props.countryOfOrigin}</p>
  </div>
        <div className='button-container'>
        <button value={this.props.id} onClick={(e)=>this.expandThisitem(e.target.value)}>More</button>
      </div>
      </div>
    );
  }
};

const mapStateToProps = state =>({}) 

export default connect(mapStateToProps)(ListItem);
