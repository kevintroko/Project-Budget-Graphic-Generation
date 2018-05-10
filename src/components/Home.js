import React from 'react';
import '../css/Home.css';
import ProjectCard from './ProjectCard';
import {FilterBar} from './FilterBar';
import AddIcon from './AddIcon';

const filters = ["Project name", "Owner", "Budget left", "Time left"];
const projects = [
  {title:"Project", percentage:10,
  owner:"Owner",
  budget:1000000, currentBudget:999999999,
  description:"Project description",},

  {title:"XXX", percentage:50,
  owner:"Martin",
  budget:300000, currentBudget:51513,
  description:"Project description",},

  {title:"AAAA", percentage:50,
  owner:"Xartin",
  budget:300000, currentBudget:5,
  description:"Project description",},
];

export class Home extends React.Component{
  constructor(props) {
		super(props);
		this.state={
			activeFilter: 0, //last clicked filter's number in filters array
      isOrderAsc: 1,
		};

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

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
    projects.sort(function(a, b){
      var x = a.title.toLowerCase();
      var y = b.title.toLowerCase();
      return x.localeCompare(y)*ascending;
    });
  }
  orderByOwner(ascending){
    projects.sort(function(a, b){
      var x = a.owner.toLowerCase();
      var y = b.owner.toLowerCase();
      return x.localeCompare(y)*ascending;
    });
  }
  orderByBudget(ascending){
    projects.sort(function(a, b){
      return (a.currentBudget-b.currentBudget)*ascending;
    });
  }
  orderByTime(ascending){
    /*PLS IMPLEMENT ME SENPAI */
  }

  render(){
    this.orderProjects();

    let cards = projects.map(project =>
      (<ProjectCard
        title={project.title} percentage={project.percentage}
        owner={project.owner}
        budget={project.budget} currentBudget={project.currentBudget}
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
