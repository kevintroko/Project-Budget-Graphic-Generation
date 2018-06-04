import React from 'react';
// import Navbar from './components/Navbar';
import Profile from './components/Profile';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <Navbar/>
          <Profile name="Kevin" lastname="Cabrera" rolee="Professor" email="kevintroko@gmail.com"/>
          {/* <Project/> */}
        </div>
      );
    }
}
export default App;
