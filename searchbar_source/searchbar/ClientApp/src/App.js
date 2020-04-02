import React, { Component } from 'react';
import { Route } from 'react-router';
import { Search } from './components/Search';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

  render () {
      return (
          <Route exact path='/' component={Search} />
    );
  }
}
