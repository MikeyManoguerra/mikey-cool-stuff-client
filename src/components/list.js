import React from 'react';
import { connect } from 'react-redux';
import { fetchObjects } from '../actions/display';
import ListItem from './list-item';

class List extends React.Component {
  componentDidMount() {

    this.props.dispatch(fetchObjects());
  }

  render() {
    console.log(this.props.objects)

    const objectList = this.props.objects.map((obj, index) => <li key={index}><ListItem {...obj} /></li>)


    return (
      <div className='display'>
        <ul className='object-list'>
          {objectList}
        </ul>
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return ({
    objects: state.display.objects
  })
}

export default connect(mapStatetoProps)(List);