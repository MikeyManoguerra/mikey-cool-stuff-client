
import React, { Component } from 'react';
import './App.css';
import { Header } from './header';
import List from './list';
import Form from './new-object-form';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { Menu } from './menu';

class App extends Component {

  render() {

    return (
      <div>
        <Redirect exact from='/' to='/App/List' />
          <Route path='/App/' component={Header} />
          <Route path='/menu/' exact component={Menu} />
          <Route path='/App/List/' exact component={List} />
          <Route path='/App/form/' exact component={Form} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  objects: state.display.objects
})

export default withRouter(connect(mapStateToProps)(App));
