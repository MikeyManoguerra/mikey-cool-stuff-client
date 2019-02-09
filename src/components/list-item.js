import React from 'react';
import { handleExpandedItem } from '../actions/display';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export class ListItem extends React.Component {
  expandThisItem() {
    this.props.dispatch(handleExpandedItem(this.props.id))
  }

  render() {
    console.log(this.props.imageOne);
    return (
      <div className="contracted list-item">
        <div className='contracted image-container'>
          <img className='image-thumbnail' src={this.props.imageOne}
            alt={this.props.name}
            onClick={(e) => this.expandThisItem(e.target)}
          />
        </div>
        <div className='contracted info-container'>
          <h3> {this.props.name}</h3>
          <p>Postal code location: {this.props.postalCode}</p>
          <p>Country of origin: {this.props.countryOfOrigin}</p>
        </div>
        <div className='contracted button-container'>
          <button className='contracted-button'
            value={this.props.id}
            onClick={(e) => this.expandThisItem(e.target)}>
            More</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({

})

export default withRouter(connect(mapStateToProps)(ListItem));
