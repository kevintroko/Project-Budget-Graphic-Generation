import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import {ProjectContainer} from './components/ProjectContainer';
// import ProfilePane from './components/ProfilePane';


class App extends React.Component {

  render() {
      return (
        <div className="App">
          <Navbar/>
          {/* <ProfilePane/> */}

          <ProjectContainer />
        </div>
      );
    }
}

export default App;
