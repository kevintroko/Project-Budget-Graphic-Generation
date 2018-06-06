import React, { Component } from 'react';
import { Link } from 'react-router';
// import '../css/Home.css';

class ProjectCard extends Component {
  render() {
    let link= "/project?code="+this.props.code;
    return (
            <div className="col-12 col-md-6">
              <Link to={link} >
                <div className="project box-shadow hvr-grow">
                    <p className="bold project-title inline-block">{this.props.name}</p>
                    <div className="percentage bold">{this.props.workload}%</div>
                    <p className="bold">Owner: <span className="nobold">{this.props.owner}</span></p>
                    <p className="bold">Budget: <span className="nobold">{this.props.budget}</span></p>
                    <p className="italic">{this.props.description}</p>
                </div>
              </Link>
            </div>
    )
  }
};

ProjectCard.defaultProps={title:"Title",description: "description"};
export default ProjectCard;
