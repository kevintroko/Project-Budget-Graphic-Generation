import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import GraphTest from './components/GraphTest';

// import {Home} from './components/Home';
// import ProfilePane from './components/ProfilePane';


class App extends React.Component {
  render() {
      return (
        <div className="App">
          <Navbar/>
          <GraphTest.js/>
          {/* <ProfilePane/> */}
{/*
          <Home/> */}
        </div>
      );
    }
}

export default App;
