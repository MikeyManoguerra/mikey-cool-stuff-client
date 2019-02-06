import React from 'react';
import './list-item.css';
import { handleExpandedItem } from '../actions/display';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export class ListItem extends React.Component {

  expandThisItem(e) {
    console.log(this.props)
    this.props.dispatch(handleExpandedItem(e))
  }

  render() {
    return (
      <div className="list-item">
        <div className='image-container'>
        </div>
        <div className='info-container'>
          <h3> {this.props.name}</h3>
          <p>Postal code location: {this.props.postalCode}</p>
          <p>Country of origin: {this.props.countryOfOrigin}</p>
        </div>
        <div className='button-container'>
          <button
            value={this.props.id}
            onClick={(e) => this.expandThisItem(e.target.value)}>
            More</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({

})

export default withRouter(connect(mapStateToProps)(ListItem));
