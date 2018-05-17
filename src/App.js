import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Chart from './components/Chart';

// import ProfilePane from './components/ProfilePane';


class App extends React.Component {
  render() {
      return (
        <div className="App">
          <Navbar/>
          <Chart/>
          {/* <Home/> */}
        </div>
      );
    }
}

export default App;
