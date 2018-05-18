import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import {ProjectContainer} from './components/ProjectContainer';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <Navbar/>
          {/* <Profile/> */}
          <ProjectContainer />
        </div>
      );
    }
}

export default App;
