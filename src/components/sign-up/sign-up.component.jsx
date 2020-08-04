import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
      displayName: "",
      confirmPassword: "",
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className={"sign-up"}>
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            id="displayName"
            type="text"
            value={this.state.displayName}
            required={true}
            handleChange={this.handleChange}
            label={"Display Name"}
          />
          <FormInput
            name="email"
            id="email"
            type="email"
            value={this.state.email}
            required={true}
            handleChange={this.handleChange}
            label="Email"
          />

          <FormInput
            name="password"
            id="password"
            type="password"
            value={this.state.password}
            required={true}
            handleChange={this.handleChange}
            label={"Password"}
          />
          <FormInput
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            required={true}
            handleChange={this.handleChange}
            label={"Confirm Password"}
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
