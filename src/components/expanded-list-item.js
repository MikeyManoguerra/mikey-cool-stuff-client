import React from 'react';
import { contractAllItems, getMapFromMapApi, handleExpandedItem } from '../actions/display';
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

  showFullPhotoAgain() {
    this.props.dispatch(handleExpandedItem(this.props.id))
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

    let mapButton = ( <button
      onClick={(e) => this.requestMapView(e.target)}>
      View Origin Map
</button>)

    if (this.props.mapViewItem === this.props.id) {
      fullImage = (<img className='full-image'
        src={this.props.mapUrl}
        alt={`map displaying the capital of the country of origin ${this.props.countryOfOrigin}`}
        onClick={() => this.condenseListItem()}
      />)
      mapButton = ( <button
        onClick={(e) => this.showFullPhotoAgain(e.target)}>
    Show Full Photo
  </button>)
    }

    let thumbnailImage;

    if (this.props.mapViewItem === this.props.id) {
      thumbnailImage = (<img id='thumbnail-for-map'
        src={this.props.imageOne}
        alt={this.props.name}
      />)
    }
    let mapError;
    if (this.props.mapError === this.props.id) {
      mapError = (<div className='expanded-map-error'>
        <p>Error: Cannot retrieve location
         data of the country of origin for this object.
         It is possible the stated origin is too obscure of a place to
       locate on a map!</p>
      </div>)
    }

    return (
      <div id="expanded-list-item">
        <div className='expanded-map-button-container'>
         {mapButton}
        </div>
        <div className='expanded-image-thumbnail-container'>
          {thumbnailImage}
        </div>
        <div className='expanded-image-container'>
          {mapError}
          {fullImage}
        </div>
        <div className='expanded-name-location-container'>
          <h3>{this.props.name}</h3>
          <p>Postal code location: {this.props.postalCode}</p>
          <p>Country of origin: {this.props.countryOfOrigin}</p>
        </div>
        <div className='expanded-description-container'>
          <p>{this.props.description}</p>
          <ul>{categoryNames}</ul>
        </div>
        <div className='expanded-button-container'>
          <button className='expanded-button' onClick={() => this.condenseListItem()}>close</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return ({
    mapUrl: state.display.mapUrl,
    mapViewItem: state.display.mapViewItem,
    mapError: state.display.mapError
  })
}

export default connect(mapStateToProps)(ExpandedListItem);