import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions'


class SignIn extends Component {
  handleFormSubmit({email, password}) {
    console.log(email, password);
    this.props.signinUser({ email, password });
    // console.log(this.props.signinUser({email, password}))
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong>{this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, fields: {email, password} } = this.props;
    return (
      <form onSubmit = {handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email</label>
          <Field name="email" component="input" type="email" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <Field name="password" component="input" type="password" className="form-control"/>
        </fieldset>
        {this.renderAlert()}
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    )
  }
}

// function mapStateToProps(state)  {
//   return { errorMessage: state.auth.error };
// };

SignIn = reduxForm({
  form: 'SignInForm',
  fields: ['email', 'password']
})(SignIn);

export default SignIn = connect(null, actions)(SignIn);
