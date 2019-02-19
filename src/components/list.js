import React from 'react';
import { connect } from 'react-redux';
import ListItem from './list-item';
import ExpandedListItem from './expanded-list-item';
import { withRouter } from 'react-router-dom';
import { contractInfoSection, expandInfoSection } from '../actions/display';


class List extends React.Component {

  userContractsInfoSection() {
    this.props.dispatch(contractInfoSection())
  }

  userExpandsInfoSection() {
    this.props.dispatch(expandInfoSection())
  }

  render() {
    let infoDisplay = (<button className="info-button"
      onClick={() => this.userExpandsInfoSection()}>
      Contact us</button>);
    if (this.props.infoSection) {
      infoDisplay = (
        <div className='info-section'>
          <div id='text'>
              <h3>Contact us</h3>
        <p>Questions? Suggestions? </p>
        <p>Email the developer at mikeyManoguerra@gmail.com</p>
        <button onClick={() => this.userContractsInfoSection()}>
              Hide</button>
          </div>
          
        </div>
      )
      }
    const objectList = this.props.objects.map((obj, index) => {
      if (this.props.expandedListItem === obj.id) {
        return (
          <li key={index}><ExpandedListItem {...obj} /></li>)
      } else return (
        <li key={index}><ListItem {...obj} /></li>)
    })
    let errorMessage;

    if (this.props.error) {
      errorMessage = (<div className='error'>{this.props.error}</div>)
    }

    return (
      <div role='main' className='display'>
        {errorMessage}
        <ul className='object-list'>
          {objectList}
        </ul>
        {infoDisplay}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    objects: state.display.objects,
    expandedListItem: state.display.expandedListItem,
    error: state.display.error,
    infoSection: state.display.infoSection

  })
}

export default withRouter(connect(mapStateToProps)(List));