import React from 'react';
import './expanded-list-item.css';

export default function ExpandedListItem(props) {

  return (
    <div className="expanded-list-item" id={props.id}>
      <div className='expanded-image-container'>
      </div>
      <div className='expanded-name-location-container'>
        <h3> {props.name}</h3>
        <p>Postal code location: {props.postalCode}</p>
        <p>Country of origin: {props.countryOfOrigin}</p>
      </div>
          <div className='expanded-description-container'>
        <p>{props.description}</p>
          </div>
          <div className='expanded-button-container'>
        <button onClick={console.log(props)}>close</button>
    </div>
    </div>
  );

};