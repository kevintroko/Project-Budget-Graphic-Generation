import React, {Component} from 'react';
import '../css/Login.css';

class Login extends Component {
  render() {
    if (this.props.signedIn == true) {
      return <h1>GO AWAY</h1>;
    } else {
      return <h1>Hi there Mark</h1>;
    }
  }
};
/*https://medium.com/the-codelog/intro-to-react-js-a37696fd99af*/
export default Login;
