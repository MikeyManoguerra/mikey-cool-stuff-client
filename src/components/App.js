
import React, { Component } from 'react';
import './css/App.css';
import Header from './header';
import List from './list';
import Form from './form';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { fetchObjects, contractInfoSection } from '../actions/display';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchObjects());
    this.startPageLoadTimer()
  }

  startPageLoadTimer() {
    setTimeout(
      () => this.props.dispatch(contractInfoSection()),
      7 * 1000
    )
  }

  render() {

    return (
      <div>
        <Redirect exact from='/' to='/App/List' />
        <Route path='/App/' component={Header} />
        <Route exact path='/App/List/' component={List} />
        <Route exact path='/App/form/' component={Form} />
       
      </div>
    );
  }
}

const mapStateToProps = state => ({
  objects: state.display.objects
})

export default withRouter(
  connect(mapStateToProps)(App));
