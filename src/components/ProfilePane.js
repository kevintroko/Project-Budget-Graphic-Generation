import React, { Component } from 'react';
import Profile from './Profile.js';
import '../css/Profile.css';

class ProfilePane extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col">
            <div class="title">Profile</div>
            <Profile/>
          </div>
        </div>
        <div class="row">
          <div class="col">
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
