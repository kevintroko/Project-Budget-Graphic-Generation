import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import {Home} from './components/Home';
// import ProfilePane from './components/ProfilePane';


class App extends React.Component {
  render() {
      return (
        <div className="App">
          <Navbar/>
          {/* <ProfilePane/> */}

          <Home/>
        </div>
      );
    }
}

export default App;
