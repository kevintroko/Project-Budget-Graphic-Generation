import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';
const jwt = require('jsonwebtoken');
const config = require('../../config');
import ProjectCard from '../components/ProjectCard';
import {FilterBar} from '../components/FilterBar';
import AddIcon from '../components/AddIcon';
import {Col} from 'reactstrap';

const filters = ["Project name", "Owner", "Budget left", "Time left"];
class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);
    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }
    this.state = {
      successMessage,
    activeFilter: 0, //last clicked filter's number in filters array
      isOrderAsc: 1,
      projects: [],
      isLoading: false,
      response:'',
      secretData: '',
      userEmail:'',
      req:"",
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    this.setState({ isLoading: true });
  const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    //set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
         this.setState({
            secretData:xhr.response.message
          });
          // decode the token using a secret key-phrase
          jwt.verify(this.state.secretData, config.jwtSecret, (err, decoded) => {
            // the 401 code is for unauthorized status
            if (err) { return res.status(401).end(); }
            this.setState({
                userEmail:decoded.sub
            });
            this.callApi().then(data => (this.setState({projects:data,isLoading:false})));
          });
      }
    });
    xhr.send();
  }

  getEmail() {

  }

  async callApi(){
    const response = await fetch('http://localhost:5000/user_projects?code='+this.state.userEmail);
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

  /**
   * Render the component.
   */
  render() {
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
      <Col xs={{size: 10, offset: 1}}>
      {this.state.successMessage && <p className="success-message">{this.state.successMessage}</p>}
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
      </Col>
    );
  }

}

export default DashboardPage;
