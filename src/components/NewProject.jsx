import React from 'react';
import  PropTypes  from 'prop-types';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Picker from 'month-picker'



const NewProject = ({
  onSubmit,
  onChange,
  errors,
  project,
  mrange,
  pickerLang,
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">New Project</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Name of the project"
          name="name"
          errorText={errors.name}
          onChange={onChange}
          value={project.name}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Budget"
          name="project_budget"
          errorText={errors.budget}
          onChange={onChange}
          value={project.project_budget}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Description"
          name="project_desc"
          onChange={onChange}
          errorText={errors.description}
          value={project.project_desc}
        />
      </div>
      <label><b>Pick A Span of Months</b><span>(Available months from Apr.2013 to Sep.2016)</span></label>
      <div className="edit">
        <Picker
          ref="pickRange2"
                          years={{min: {year: 2013, month: 4}, max: {year: 2016, month: 9}}}
          range={mrange2}
          lang={pickerLang}
          theme="dark"
          onChange={this.handleRangeChange2}
          onDismiss={this.handleRangeDissmis2}
        >
          <MonthBox value={makeText(mrange2.from) + ' ~ ' + makeText(mrange2.to)} onClick={this._handleClickRangeBox2} />
        </Picker>
    </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Create New Project" primary />
      </div>
    </form>
  </Card>
);

NewProject.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired
};

export default NewProject;