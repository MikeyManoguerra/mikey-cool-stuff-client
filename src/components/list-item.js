import React from 'react';
import { handleExpandedItem } from '../actions/display';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export class ListItem extends React.Component {
  expandThisItem() {
    this.props.dispatch(handleExpandedItem(this.props.id))
  }

  render() {
    return (
      <div className="contracted list-item">
        <div className='contracted image-container'>
          <img className='image-thumbnail' src={this.props.imageOne}
            alt={this.props.name}
            onClick={() => this.expandThisItem()}
          />
        </div>
        <div className='contracted info-container'>
          <h3>{this.props.name}</h3>
          <h4>Postal code location</h4>
          <p>{this.props.postalCode}</p>
          <h4>Country of Origin</h4>
          <p>{this.props.countryOfOrigin}</p>
        </div>
        <div className='contracted button-container'>
          <button className='contracted-button'
            value={this.props.id}
            onClick={() => {
              console.log();
              this.expandThisItem()
            }}>
            More</button>
        </div>
      </div>
    );
  }
};



export default withRouter(connect()(ListItem));
