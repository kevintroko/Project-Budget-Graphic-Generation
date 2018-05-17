import React, {Component} from 'react';
import {Form,FormGroup,Input,InputGroup,InputGroupAddon,Col,Row,Container} from 'reactstrap';
import '../css/Login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:"",
      password:""
    };
  }
  isInvalid(){
    return !((this.state.username.length > 0)&&(this.state.password.length > 0));
  }

  handleChange = (name, e) =>{
    this.setState({[name]: e.target.value});
  }

  render() {
    return(
      <Container>
  			<Row>

  				{/* Login Box */}
          <Col xs={{size: 12}} sm={{size: 8, offset: 2}}  id="main-login">
  					<h1 className="text-center">Project Budget Manager</h1>
  					<br/>

  					{/* Login Form */}
  					<Row>
  						<Col sm={{size: 8, offset: 2}}>


                <Form
                  method="post">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <span className="input-group-text" id="basic-addon1"><i className="material-icons">email</i></span>
                      </InputGroupAddon>
                      <Input type="text" name="email" placeholder="Enter your Email address" aria-label="Username" aria-describedby="basic-addon1"
                          value={this.state.username}
                          onChange={(e) => this.handleChange("username", e)}/>
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <span className="input-group-text" id="basic-addon1"><i className="material-icons">lock</i></span>
                      </InputGroupAddon>
                      <Input type="password" name="password" className="form-control" placeholder="Enter your Password" aria-label="Password" aria-describedby="basic-addon1"
                      value={this.state.pass}
                      onChange={(e) => this.handleChange("password", e)}/>
                    </InputGroup>
                  </FormGroup>

  								<br/>
  								<input className="btn btn-lg btn-block" type="submit" value="Login" disabled={this.isInvalid()}/>
                </Form>


  						</Col>
  					</Row>
  				</Col>
  			</Row>
  		</Container>
    );
  }
};
export default Login;
