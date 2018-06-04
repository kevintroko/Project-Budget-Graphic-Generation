
import  PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';
import React, { Component } from 'react';
import {Popover, Button, PopoverBody} from 'reactstrap';
const jwt = require('jsonwebtoken');
const config = require('../../config');

function Notif(props){
  let timeText;
  let time = props.time;
  if(time > 1440){
    time = Math.round(time/1440);
    timeText="days ago";
  }else if(time > 60){
    time = Math.round(time/60);
    timeText="hours ago";
  }else{
    timeText="mins ago";
  }

  return(
    <div class="notification rounded m-2 p-1">
      <h6>
        {props.text}
      </h6>
      <p class="text-right font-weight-light font-italic m-0">
        {time} {timeText}
      </p>
    </div>
  );
}

class Notifications extends Component {

  render() {
    let result=[];
    let notifs=this.props.notifs;
    if(notifs){
      for(var i=0; i<notifs.length; i++){
        result.push(
          <Notif
            text={notifs[i].text}
            time={notifs[i].time}
          />
        );
        if(i<notifs.length-1){
          result.push(
            <hr class="m-2"/>
          );
        }
      }
    }
    return (
      <div>

        {result}

        <div class="m-2">
          <button class="btn  btn-sm btn-block">Mark as read</button>
        </div>

      </div>
    );
  }
};

var secretData;
var userEmail;
function getUsername() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
          secretData:xhr.response.message
          // decode the token using a secret key-phrase
          jwt.verify(secretData, config.jwtSecret, (err, decoded) => {
            // the 401 code is for unauthorized status
            if (err) { return res.status(401).end(); }
            userEmail:decoded.sub
          });
      }
    });
    xhr.send();
    return(<Link to="/">{userEmail}</Link>);
  }

const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">Budget Manager</IndexLink>
      </div>

      {Auth.isUserAuthenticated() 
      ? (
        <div className="top-bar-right">
        <Link to={{pathname:"/editproject"
                    , state: { 
                      name: 'hiii:)))',
                    }
                }}>Edit Project</Link>
        <Link to="/newproject">Create A New Project</Link>
        <Link to="/profile">Profile</Link>
          <Link to="/logout">Log out</Link>
          </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      )}

    </div>

    { /* child component will be rendered here */ }
    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;