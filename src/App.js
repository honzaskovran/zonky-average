import React, { Component } from 'react';
import Selection from './components/Selection';
import Result from './components/Result';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Průměrná výše půjčky na zonky.cz podle ratingu</h1>
          <Selection/>
        </header>
        <Result/>
      </div>
    );
  }
}

export default App;
