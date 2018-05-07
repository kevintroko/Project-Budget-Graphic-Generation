import React, { Component } from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Filter from './components/Filter';
import AddIcon from './components/AddIcon';
// import ProfilePane from './components/ProfilePane';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = { projects: [],
  isLoading: false,
  response:'',
  };
  }


  componentDidMount(){
    this.setState({ isLoading: true });
    this.callApi().then(data => (this.setState({projects:data,isLoading:false})));
  } 

  callApi = async() => {
    const response = await fetch('/projects');
    const body = await response.json();
  if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    const {projects,isLoading}=this.state;
    if (isLoading) {
      // return <p>Loading ...</p>;
    }
      return (
        <div className="App">
          <Navbar/>
          {/* <ProfilePane/> */}
          <Filter/>
          <AddIcon/>
          <div className="row boxes">
              {projects.sort((a, b) => a.name > b.name).map(item => (
                  <ProjectCard
                    title={item.name} percentage={item.workload}
                    owner={item.owner}
                    budget={item.budget} currentBudget={item.current_balance}
                    description={item.description}
                  />
              ))}
          </div>
        </div>
      );
    }
}

export default App;
