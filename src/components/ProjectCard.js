import React, { Component } from 'react';
import '../css/Home.css';

class ProjectCard extends Component {
  render() {
    return (
            <div className="col-12 col-md-6">
              <div className="project shadow hvr-grow">
                  <p className="bold title inline-block">{this.props.title}</p>
                  <div className="percentage bold">{this.props.percentage}%</div>
                  <p className="bold">Owner: <span className="nobold">{this.props.owner}</span></p>
                  <p className="bold">Budget: <span className="nobold">{this.props.currentBudget}/{this.props.budget}</span></p>
                  <p className="italic">{this.props.description}</p>
              </div>
            </div>
    )
  }
};

ProjectCard.defaultProps={title:"Title",description: "description"};
export default ProjectCard;
