import React, { Component } from 'react';

import ItemList from './items/itemList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemList />
      </div>
    );
  }
}

export default App;
