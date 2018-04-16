'use strict';

import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';

export default class Boilermaker extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>HELLO WORLD</h1>
        </div>
      </Router>
    );
  }
}
