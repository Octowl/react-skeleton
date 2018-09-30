import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Actions
import { loginUser } from "../../redux/actions/authActions";
import { resetErrors } from "../../redux/actions/commonActions";

// Components
import TextFieldGroup from "../common/TextFieldGroup";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) this.props.history.push("/");
    this.props.resetErrors();
  }

  componentDidUpdate() {
    if (this.props.auth.isAuthenticated) this.props.history.push("/");
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.loginUser(user, this.props.history);
  }

  render() {
    const { errors } = this.props;

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Something clever</p>
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email || errors.non_field_errors}
                />
                <TextFieldGroup
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password || errors.non_field_errors}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  resetErrors: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser, resetErrors }
)(Login);
