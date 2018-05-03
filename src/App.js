import React, { Component } from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Filter from './components/Filter';
import AddIcon from './components/AddIcon';

class App extends Component {
  render() {
      return (
        <div className="App">
          <Navbar/>
          <Filter/>
          <AddIcon/>
          <Home/>
        </div>
      );
    }
}

export default App;
