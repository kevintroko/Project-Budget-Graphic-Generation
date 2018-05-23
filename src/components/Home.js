import React from 'react';
import '../css/App.css';
import ProjectCard from './ProjectCard';
import {FilterBar} from './FilterBar';
import AddIcon from './AddIcon';

const filters = ["Project name", "Owner", "Budget left", "Time left"];


 class Home extends React.Component{
  constructor(props) {
		super(props);
		this.state={
			activeFilter: 0, //last clicked filter's number in filters array
      isOrderAsc: 1,
      projects: [],
      isLoading: false,
      response:'',
		};

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount(){
    this.setState({ isLoading: true });
    this.callApi().then(data => (this.setState({projects:data,isLoading:false})));
  }

  async callApi() {
    const response = await fetch('/projects');
    const body = await response.json();
  if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleFilterChange(filterNum, isAsc){
    this.setState({activeFilter: filterNum, isOrderAsc: isAsc});
  }


  orderProjects(){
    switch (this.state.activeFilter) {
      case 0:
        this.orderByName(this.state.isOrderAsc);
        break;
      case 1:
        this.orderByOwner(this.state.isOrderAsc);
        break;
      case 2:
        this.orderByBudget(this.state.isOrderAsc);
        break;
      case 3:
        this.orderByTime(this.state.isOrderAsc);
        break;
      default:
        alert('unknown filter');
    }
  }

  orderByName(ascending){
    this.state.projects.sort(function(a, b){
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      return x.localeCompare(y)*ascending;
    });
  }
  orderByOwner(ascending){
    this.state.projects.sort(function(a, b){
      var x = a.owner.toLowerCase();
      var y = b.owner.toLowerCase();
      return x.localeCompare(y)*ascending;
    });
  }
  orderByBudget(ascending){
    this.state.projects.sort(function(a, b){
      return (a.current_balance-b.current_balance)*ascending;
    });
  }
  orderByTime(ascending){
    /*PLS IMPLEMENT ME SENPAI */
  }

  render(){
    this.orderProjects();
    const {projects,isLoading}=this.state;
    if (isLoading) {
      return <p>Start node server.js</p>;
    }

    let cards = projects.map(project =>
      (<ProjectCard
        name={project.name} workload={project.workload}
        owner={project.owner}
        budget={project.budget} current_balance={project.current_balance}
        description={project.description}
      />)
    );

    return(
      <div>
        <FilterBar
          filters={filters}
          activeFilter={this.state.activeFilter}
          onFilterChange={this.handleFilterChange}
          isOrderAsc={this.state.isOrderAsc}
          />
        <AddIcon/>

        <div className="row boxes">
          {cards}
        </div>
      </div>
    );
  }
}
export default Home;