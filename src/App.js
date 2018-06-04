import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Project from './components/Project';
// import Profile from './components/Profile';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <Navbar/>
          {/* <Profile name="Kevin" lastname="Cabrera" rolee="Professor" email="kevintroko@gmail.com"/> */}
          <Project/>
        </div>
      );
    }
}

export default App;
