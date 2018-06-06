import React from 'react';
import Auth from '../modules/Auth';
import  PropTypes  from 'prop-types';
import { Link } from 'react-router';
const jwt = require('jsonwebtoken');
const config = require('../../config');
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Picker from 'react-month-picker'
import MonthBox from '../components/MonthBox.jsx';
import Dropdown from 'react-dropdown';

class EditProjectPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);
    var currMonth=new Date().getMonth()+1;
    var currYear=new Date().getFullYear();
    // set the initial component state
    this.btn = [];
    this.state = {
      options:[],
      errors: {},
      email: '',
      mrange2: {from: {year: currYear, month: currMonth}, to: {year: currYear, month: currMonth}},
      participants: [],
      persons:[],
      values: [],
      fetched_projects:[],
      project: {
        name: '',
        project_code: '',
        project_budget:0,
        project_desc:'',
        project_start:'',
        project_deadline:'',
      },
      secretData: '',
    };
    this.processForm = this.processForm.bind(this);
    this.changeProject = this.changeProject.bind(this);
    this._handleClickRangeBox2 = this._handleClickRangeBox2.bind(this);
    this.handleRangeChange2 = this.handleRangeChange2.bind(this);
    this.handleRangeDissmis2 = this.handleRangeDissmis2.bind(this);

    this._handleClickRangeBox = this._handleClickRangeBox.bind(this)
    this.handleRangeChange = this.handleRangeChange.bind(this)
    this.handleRangeDissmis = this.handleRangeDissmis.bind(this)
    this._onSelect = this._onSelect.bind(this)
  }

  formTheDates(){
    var from_year=this.state.mrange2.from.year;
    var from_month=this.state.mrange2.from.month;
    var to_year=this.state.mrange2.to.year;
    var to_month=this.state.mrange2.to.month;
    if (from_month<10){
      var from=new Date(from_year+"-0"+from_month+"-01");
    }else{
      var from=new Date(from_year+"-"+from_month+"-01");
    }
    if (to_month<10){
      var to=new Date(to_year+"-0"+to_month+"-01");
    }else{
      var to=new Date(to_year+"-"+to_month+"-01");
    }

    const project = this.state.project;
    project["project_start"] = from;
    project["project_deadline"] = to;
    this.setState({
      project
    });
  }
  
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    this.formTheDates();
    // create a string for an HTTP body message
    const name = encodeURIComponent(this.state.project.name);
    const email = encodeURIComponent(this.state.email);
    const project_code = encodeURIComponent(this.state.project.project_code);
    const project_desc = encodeURIComponent(this.state.project.project_desc);
    const project_budget = encodeURIComponent(this.state.project.project_budget);
    const project_start = encodeURIComponent(this.state.project.project_start);
    const project_deadline = encodeURIComponent(this.state.project.project_deadline);
    const values=encodeURIComponent(JSON.stringify(this.state.values));
    const formData = `name=${name}&email=${email}&project_code=${project_code}&project_desc=${project_desc}&project_budget=${project_budget}&project_start=${project_start}&project_deadline=${project_deadline}&values=${values}`;
    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/newproject');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // set a message
        localStorage.setItem('successMessage', xhr.response.message);

       
        // make a redirect
        this.context.router.replace('/');
      } else {
        // failure

        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;
        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeProject(event) {
    const field = event.target.name;
    const project = this.state.project;
    project[field] = event.target.value;
    this.setState({
      project
    });
  }
// createSelectItems() {
//      var i=0;
//      this.state.persons.map(person => {            
//           this.state.options.push(<option key={i} value={person.email}>{i}</option>);
//           i++;   
//      }
//  }  

componentWillMount(){
  this.callApi().then(data => (this.setState({persons:data})));  
  this.callApiProjectDetails().then(data => (this.updateChanges(data)));
}

updateChanges(data){
  let pr=Object.assign({}, this.state.project);
  pr.name=data[0].name,
  pr.project_code=data[0].code;
  pr.project_budget=data[0].budget;
  pr.project_desc=data[0].description;
  pr.project_start=data[0].start_date;
  pr.project_deadline=data[0].deadline;
  this.setState({project:pr})
}


  async callApi(){
    const response = await fetch('http://localhost:5000/all_person_emails');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  async callApiProjectDetails(){
    const response = await fetch('http://localhost:5000/projectDetails?code='+this.props.location.state.name);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
createUI(){
  const pickerLang = {
                months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                from: 'From', to: 'To',
            }
            const mrange2 = this.state.mrange2
            const makeText = m => {
                if (m && m.year && m.month) return (pickerLang.months[m.month-1] + '. ' + m.year)
                return '?'
            }
            let opt=this.state.persons.map(p => (p.email));
            
     return(
      <div>
      { this.state.values.map((el, i) => {
      let boundActRunClick = this._handleClickRangeBox.bind(this,el, i);
      return(
        <div key={i}>
          <TextField
            floatingLabelText="Workload"
            name="workload"
            errorText={this.state.errors.workload}
            onChange={this.handleChangeWorkload.bind(this, i)}
            value={el.workload||''}
          />
          <TextField
            floatingLabelText="Job Description"
            name="description"
            errorText={this.state.errors.name}
            onChange={this.handleChangeDescription.bind(this, i)}
            value={el.description||''}
          />
          <div className="edit">
            <Picker
              ref={(ref) => this.btn[i] = ref}
              years={{min: {year: mrange2.from.year, month: mrange2.from.month}, max: {year: mrange2.to.year, month: mrange2.to.month}}}
              range={el.range}
              lang={pickerLang}
              theme="dark"
              onChange={this.handleRangeChange.bind(this)}
              onDismiss={this.handleRangeDissmis.bind(this,i)}
              >
              <MonthBox value={makeText(el.range.from) + ' ~ ' + makeText(el.range.to)} onClick={boundActRunClick} />
            </Picker>
          </div>
          <Dropdown 
            options={opt}
            onChange={this._onSelect.bind(this,i)} 
            value={el.email||opt[0]} 
            placeholder="Select an option" />
          <input type='button' value='-' onClick={this.removeClick.bind(this, i)}/>
        </div> 
      )
    })
  }
  </div>
  );
}   


  _onSelect (i,option) {
    console.log('You selected ', option.label)
    let values = [...this.state.values];
     values[i].email = option.label;
     this.setState({ values });
  }

  _handleClickRangeBox(el,i,e) {
   this.btn[i].show();
  }
  handleRangeChange(value, text, listIndex) {
  }
  handleRangeDissmis(i,value) {
    console.log(value);
    let values = [...this.state.values];
    values[i].range = value;
    this.setState({ values });
  }

  handleChangeWorkload(i, event) {
     let values = [...this.state.values];
     values[i].workload = event.target.value;
     this.setState({ values });
  }
  handleChangeDescription(i, event) {
     let values = [...this.state.values];
     values[i].description = event.target.value;
     this.setState({ values });
  }
  
  addClick(){
    var newItem={workload:'',description:'',range:this.state.mrange2 , email:this.state.persons[0].email};
    this.setState(prevState => ({ values: [...prevState.values, newItem]}))
    console.log(this.state.values);
  }
  
  removeClick(i){
     let values = [...this.state.values];
     values.splice(i,1);
     this.setState({ values });
  }

  render() {
    const pickerLang = {
                months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                from: 'From', to: 'To',
            }
            const mrange2 = this.state.mrange2

            const makeText = m => {
                if (m && m.year && m.month) return (pickerLang.months[m.month-1] + '. ' + m.year)
                return '?'
            }

    return (
      <Card className="container">
    <form action="/" onSubmit={this.processForm}>
      <h2 className="card-heading">{this.props.location.state.name}</h2>

      {this.state.errors.summary && <p className="error-message">{this.state.errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Name of the project"
          name="name"
          errorText={this.state.errors.name}
          onChange={this.changeProject}
          value={this.state.project.name}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Code (Must be unique!)"
          name="project_code"
          onChange={this.changeProject}
          errorText={this.state.errors.code}
          value={this.state.project.project_code}
        />
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="Budget"
          name="project_budget"
          errorText={this.state.errors.budget}
          onChange={this.changeProject}
          value={this.state.project.project_budget}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Description"
          name="project_desc"
          onChange={this.changeProject}
          errorText={this.state.errors.description}
          value={this.state.project.project_desc}
        />
      </div>
      <label><b>Pick A Span of Months</b><span>(Available months from Jan.2000 to Jan.3000)</span></label>
      <div className="edit">
        <Picker
          ref="pickRange2"
          years= {{min: {year: 2000, month: 1}, max: {year: 3000, month: 1}}}
          range={mrange2}
          lang={pickerLang}
          theme="dark"
          onChange={this.handleRangeChange2}
          onDismiss={this.handleRangeDissmis2}
        >
          <MonthBox value={makeText(mrange2.from) + ' ~ ' + makeText(mrange2.to)} onClick={this._handleClickRangeBox2} />
        </Picker>
    </div>
        <h4>Participants</h4>
        {this.createUI()}        
        <input type='button' value='Add Participant' onClick={this.addClick.bind(this)}/>
      <div className="button-line">
        <RaisedButton type="submit" label="Create New Project" primary />
      </div>
    </form>
  </Card>
    );
  }

  _handleClickRangeBox2(e) {
   this.refs.pickRange2.show()
  }
  handleRangeChange2(value, text, listIndex) {
  }
  handleRangeDissmis2(value) {
    this.setState( {mrange2: value} )
  }
}

EditProjectPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default EditProjectPage;