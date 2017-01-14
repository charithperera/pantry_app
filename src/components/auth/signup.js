import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';


class SignUp extends Component {
  handleFormSubmit(values) {
    this.props.signupUser(values)
  }

  renderAlerts() {
    if (this.props.errorMessage && Array.isArray(this.props.errorMessage)) {
      return this.props.errorMessage.map((error, index) => {
        return (
          <li key={index}>{error}</li>
        )
      })
    }
  }

  hasAlerts() {
    if (this.props.errorMessage && Array.isArray(this.props.errorMessage)) {
      return 'alert alert-danger'
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className={this.hasAlerts()}>
          {this.renderAlerts()}
        </div>
        <fieldset className="form-group">
          <label>Email</label>
          <Field name="email" component="input" type="email" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <Field name="password" component="input" type="password" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password</label>
          <Field name="password_confirmation" component="input" type="password" className="form-control"/>
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign Up</button>
      </form>
    )
  }
}

function mapStateToProps(state)  {
  return { errorMessage: state.auth.error };
};

SignUp = reduxForm({
  form: 'SignInForm',
  fields: ['email', 'password', 'password_confirmation']
})(SignUp);

export default SignUp = connect(mapStateToProps, actions)(SignUp);
