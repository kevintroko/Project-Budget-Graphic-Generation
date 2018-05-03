import React, { Component } from 'react';
import '../css/Home.css';

class Home extends Component {
  render() {
    return (
       <div>
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
          </div>
      </div>
    )
  }
};

export default Home;
