import React, { Component } from 'react';

import Crawler from './crawler/Crawler'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Crawler />
      </div>
    );
  }
}

export default App;
