import React from 'react';
import  PropTypes  from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import '../css/Home.css';
import ProjectCard from './ProjectCard';
import {FilterBar} from './FilterBar';
import AddIcon from './AddIcon';


const filters = ["Project name", "Owner", "Budget left", "Time left"];

const Dashboard = ({cards},{userEmail},{activeFilter},{handleFilterChange},{isOrderAsc}) => (
  
  <div>
        <FilterBar
        filters={filters}
         activeFilter={activeFilter}
         onFilterChange={handleFilterChange}
         isOrderAsc={isOrderAsc}
          />
        <AddIcon/>

        <div className="row boxes">
          {cards}
        </div>
      </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired
};

export default Dashboard;