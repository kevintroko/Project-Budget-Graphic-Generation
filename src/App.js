import React from 'react';
import './css/App.css';
// import Navbar from './components/Navbar';
import Profile from './components/Profile';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <Profile name="Kevin" lastname="Cabrera" rolee="Professor" email="kevintroko@gmail.com"/>
        </div>
      );
    }
}

export default App;
