
import React, { Component } from 'react';
import './App.css';
import { Header } from './header';
import {Route, withRouter} from 'react-router-dom';
import {Menu } from './menu';

class App extends Component {
  render() {
    return (
      <div>
     <Route exact path='/' component={Header}/>
     <Route path='/menu/' exact component={Menu}/>
     </div>
    );
  }
}

export default App;
