import React, { Component } from 'react';
import '../css/Home.css';
import '../css/EditIcons.css';

class Home extends Component {
  render() {
    return (
       <div>
         <div className="container">
           <span><i class="material-icons circle-icon shadow hvr-grow">add</i></span>
           <div className="row filter shadow d-flex justify-content-around p-2">
             <div className="p-2 filter-text">Owner <i className="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></div>
             <div className="p-2 filter-text">Project name	 <i className="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></div>
             <div className="p-2 filter-text">Budget percentage  <i className="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></div>
             <div className="p-2 filter-text">Budget left  <i className="material-icons vertical-align-middle padding-bottom-3">arrow_drop_down</i></div>
           </div>
           <div className="row boxes">
     				<div className="col-12 col-md-6">
     					<div className="project shadow hvr-grow">
     							<p className="bold title inline-block">Title</p>
     							<div className="percentage bold">10%</div>
     							<p className="bold">Owner: <span className="nobold">Project Owner</span></p>
     							<p className="bold">Budget: <span className="nobold">1,000,000/5,000,000</span></p>
     							<p className="italic">Description of the project to be done hahah</p>
     					</div>
     				</div>

            <div className="col-12 col-md-6">
              <div className="project shadow hvr-grow">
                  <p className="bold title inline-block">Title</p>
                  <div className="percentage bold">10%</div>
                  <p className="bold">Owner: <span className="nobold">Project Owner</span></p>
                  <p className="bold">Budget: <span className="nobold">1,000,000/5,000,000</span></p>
                  <p className="italic">Description of the project to be done hahah</p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="project shadow hvr-grow">
                  <p className="bold title inline-block">Title</p>
                  <div className="percentage bold">10%</div>
                  <p className="bold">Owner: <span className="nobold">Project Owner</span></p>
                  <p className="bold">Budget: <span className="nobold">1,000,000/5,000,000</span></p>
                  <p className="italic">Description of the project to be done hahah</p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="project shadow hvr-grow">
                  <p className="bold title inline-block">Title</p>
                  <div className="percentage bold">10%</div>
                  <p className="bold">Owner: <span className="nobold">Project Owner</span></p>
                  <p className="bold">Budget: <span className="nobold">1,000,000/5,000,000</span></p>
                  <p className="italic">Description of the project to be done hahah</p>
              </div>
            </div>
          </div>

      </div>
    </div>
    )
  }
};

export default Home;
