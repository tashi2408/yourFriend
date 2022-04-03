import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import { red } from "@mui/material/colors";

const form_id = "form_id";
class MaintenanceForm extends Component {
  editOnClick = event => {
    event.preventDefault();
    const data = !this?.props?.status?.edit;
    this.props.setStatus({
      edit: data
    });
  };

  cancelOnClick = event => {
    event.preventDefault();
    this.props.resetForm();
    this.props.setStatus({
      edit: false
    });
  };

  _renderAction() {
    return (
      <React.Fragment>
        <div className="form-statusbar">
          {this?.props?.status?.edit ? (
            <React.Fragment>
              <button style={{width:"100px"}}
                className="btn btn-primary btn-sm"
                type="submit"
                form={form_id}
              >
                Save
              </button>
              <button 
                className="btn btn-danger btn-sm"
                onClick={this.cancelOnClick}
                style={{width:"100px"}}
              >
                Cancel
              </button>
            </React.Fragment>
          ) : (
            <button style={{width:"100px"}}
              className="btn btn-primary btn-sm"
              onClick={this.editOnClick}
            >
              Edit
            </button>
          )}
        </div>
      </React.Fragment>
    );
  }

  _renderFormView = () => {
    return (
      <React.Fragment>
        <div className="form-group row" style={{marginTop:"10px"}}>
          <label className="col-sm-2 col-form-label"><strong>Date Of Birth</strong></label>
          <div className="col-sm-10">
            <label type="text" name="dob" className="form-control" style={{color:"seagreen"}}>
              {this?.props?.fields?.dob}
            </label>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label"><strong>Gender</strong></label>
          <div className="col-sm-10">
            <label type="text" name="gender" className="form-control" style={{color:"seagreen"}}>
              {this?.props?.fields?.gender}
            </label>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" style={{marginTop:"8px"}}><strong>Occupation</strong></label>
          <div className="col-sm-10">
            <label type="text" name="occupation" className="form-control" style={{color:"seagreen"}}>
              {this?.props?.fields?.occupation}
            </label>
          </div>
        </div>
      </React.Fragment>
    );
  };

  _renderFormInput = () => {
    return (
      <React.Fragment>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Date Of Birth</label>
          <div className="col-sm-10">
            <Field
              type="text"
              name="dob"
              className="form-control"
              placeholder="Dob"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Gender</label>
          <div className="col-sm-10">
            <Field
              type="text"
              name="gender"
              className="form-control"
              placeholder="Gender"
            />
          </div>
        </div>
        <div style={{marginTop:"10px"}}className="form-group row">
          <label className="col-sm-2 col-form-label">Occupation</label>
          <div className="col-sm-10">
            <Field 
              type="text"
              name="occupation"
              className="form-control"
              placeholder="Occupation"
            />
          </div>
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <h2>Personal Details</h2>
        {this._renderAction()}
        <Form id={form_id}>
          {this?.props?.status?.edit
            ? this._renderFormInput()
            : this._renderFormView()}
        </Form>
      </React.Fragment>
    );
  }
}

const FormikForm = withFormik({
  mapPropsToStatus: props => {
    return {
      edit: props?.edit || false
    };
  },
  mapPropsToValues: props => {
    return {
      dob: props.fields.dob,
      gender: props.fields.gender,
      occupation: props.fields.occupation
    };
  },
  enableReinitialize: true,
  handleSubmit: (values, { props, ...actions }) => {
    props.updateFields(values);
    actions.setStatus({
      edit: false
    });
  }
})(MaintenanceForm);

export default FormikForm;
