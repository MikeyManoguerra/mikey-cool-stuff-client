import React from 'react';
import { contractAllItems, getMapFromMapApi } from '../actions/display';
import { connect } from 'react-redux';

export class ExpandedListItem extends React.Component {

  condenseListItem() {
    this.props.dispatch(contractAllItems());
  }
  requestMapView() {
    this.props.dispatch(getMapFromMapApi(
      this.props.countryOfOrigin,
      this.props.capital,
      this.props.id))
  }

  render() {
    const categoryNames = this.props.categories.map((category, index) => {
      return <li id={category.id} key={index}>{category.name}</li>
    })
    let fullImage = (<img className='full-image'
      src={this.props.imageOne}
      alt={this.props.name}
      onClick={() => this.condenseListItem()}
    />)

    if (this.props.mapViewItem === this.props.id) {
      fullImage = (<img className='full-image'
        src={this.props.mapUrl}
        alt={`map displaying the capital of the country of origin ${this.props.countryOfOrigin}`}
        onClick={() => this.condenseListItem()}
      />)
    }

    let thumbnailImage;

    if (this.props.mapViewItem === this.props.id) {
      thumbnailImage = (<img id='thumbnail-for-map'
        src={this.props.imageOne}
        alt={this.props.name}
      />)
    }


    return (
      <div className="expanded list-item" id={this.props.id}>
        <div className='map-button-container'>
          <button
            className='expanded-button'
            onClick={(e) => this.requestMapView(e.target)}>
            switch to map view
      </button>
        </div>
        <div id='image-thumbnail-container'>
          {thumbnailImage}
        </div>
        <div className='expanded image-container'>
          {fullImage}
        </div>
        <div className='expanded name-location-container'>
          <h3> {this.props.name}</h3>
          <p>Postal code location: {this.props.postalCode}</p>
          <p>Country of origin: {this.props.countryOfOrigin}</p>
        </div>
        <div className='expanded description-container'>
          <p>{this.props.description}</p>
          <ul>{categoryNames}</ul>
        </div>
        <div className='expanded button-container'>
          <button className='expanded-button' onClick={() => this.condenseListItem()}>close</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return ({
    mapUrl: state.display.mapUrl,
    mapViewItem: state.display.mapViewItem
  })
}

export default connect(mapStateToProps)(ExpandedListItem);