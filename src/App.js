import React from 'react';
import './css/App.css';
// import Navbar from './components/Navbar';
import Profile from './components/Profile';
// import {Home} from './components/Home';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          {/* <Navbar/> */}
          {/* <Home/> */}
          <Profile name="Kevin" lastname="Cabrera" rolee="Professor" email="kevintroko@gmail.com"/>
          {/* <ProjectContainer /> */}
        </div>
      );
    }
}

export default App;
