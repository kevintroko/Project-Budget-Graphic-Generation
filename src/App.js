import React, { Component } from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Filter from './components/Filter';
import AddIcon from './components/AddIcon';
// import ProfilePane from './components/ProfilePane';

class App extends Component {
  render() {
      return (
        <div className="App">
          <Navbar/>
          {/* <ProfilePane/> */}
          <Filter/>
          <AddIcon/>
          <div className="row boxes">
            <ProjectCard
              title="Project" percentage={10}
              owner={"Owner"}
              budget={"1,000,000"} currentBudget={"532,487"}
              description={"Project description"}
            />
          </div>
        </div>
      );
    }
}

export default App;
