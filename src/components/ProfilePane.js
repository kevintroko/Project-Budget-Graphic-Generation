import React, { Component } from 'react';
import Profile from './Profile.js';
import '../css/Profile.css';

class ProfilePane extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <div className="title">Profile</div>
            <Profile/>
          </div>
        </div>
        <div className="row">
          <div className="col">
          {/* <div class="col graph">
              <img src="img/graph.png" style="width:100%;">
          </div> */}
          </div>
        </div>
      </div>
    )
  }
};
/*https://medium.com/the-codelog/intro-to-react-js-a37696fd99af*/
export default ProfilePane;
