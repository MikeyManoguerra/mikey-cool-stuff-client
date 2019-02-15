
import React, { Component } from 'react';
import './css/App.css';
import Header from './header';
import List from './list';
import Form from './form';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { Menu } from './menu';
import { Contact } from './contact-us';
import { About } from './about';
import { CategoryFilter } from './category-filter'
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
        <Route path='/menu/' exact component={Menu} />
        <Route path='/menu/categories' exact component={CategoryFilter} />
        <Route path='/menu/about' exact component={About} />
        <Route path='/menu/contact' exact component={Contact} />

      </div>
    );
  }
}

const mapStateToProps = state => ({
  objects: state.display.objects
})

export default withRouter(
  connect(mapStateToProps)(App));
