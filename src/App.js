import React, { Component } from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';

class App extends Component {
  render() {
      return (
        <div className="App">
          <Navbar/>
          <Home/>
        </div>
      );
    }
}

export default App;
