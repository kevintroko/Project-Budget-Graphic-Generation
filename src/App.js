import React, { Component } from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Filter from './components/Filter';
import AddIcon from './components/AddIcon';

class App extends Component {
  render() {
      return (
        <div className="App">
          <Navbar/>
          <Filter/>
          <AddIcon/>
          <div className="row boxes"> {/* keep this div to keep the 2xn structure */}
            <ProjectCard
              title="Project" percentage={10}
              owner={"Owner"}
              budget={"1,000,000"} currentBudget={"532,487"}
              description={"Project description"}
            /> {/* keep this to keep the 2xn structure */}
          </div>
        </div>
      );
    }
}

export default App;
