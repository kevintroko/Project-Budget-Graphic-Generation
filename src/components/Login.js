import React, {Component} from 'react';
import {Form,FormGroup,Input,InputGroup,InputGroupAddon,Col,Row,Container} from 'reactstrap';
import '../css/Login.css';

export class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:"",
      password:"",
      professors: [],
      isLoading: false,
      response:'',
    };
  }

  componentDidMount(){
    this.setState({ isLoading: true });
    this.callApi().then(data => (this.setState({projects:data,isLoading:false})));
  }

  callApi = async() => {
    const response = await fetch('/professors');
    const body = await response.json();
  if (response.status !== 200) throw Error(body.message);

    return body;
  };
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
  					<h1 class="text-center">Project Budget Manager</h1>
  					<br/>

  					{/* Login Form */}
  					<Row>
  						<Col sm={{size: 8, offset: 2}}>


                <Form
                  method="post">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <span class="input-group-text" id="basic-addon1"><i class="material-icons">email</i></span>
                      </InputGroupAddon>
                      <Input type="text" name="email" placeholder="Enter your Email address" aria-label="Username" aria-describedby="basic-addon1"
                          value={this.state.username}
                          onChange={(e) => this.handleChange("username", e)}/>
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <span class="input-group-text" id="basic-addon1"><i class="material-icons">lock</i></span>
                      </InputGroupAddon>
                      <Input type="password" name="password" class="form-control" placeholder="Enter your Password" aria-label="Password" aria-describedby="basic-addon1"
                      value={this.state.pass}
                      onChange={(e) => this.handleChange("password", e)}/>
                    </InputGroup>
                  </FormGroup>

  								<br/>
  								<input class="btn btn-lg btn-block" type="submit" value="Login" disabled={this.isInvalid()}/>
                </Form>


  						</Col>
  					</Row>
  				</Col>
  			</Row>
  		</Container>
    );
  }
};
