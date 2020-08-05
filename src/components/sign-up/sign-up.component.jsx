import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

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

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password Don't Match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        email: "",
        password: "",
        displayName: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log("Error: ", err.message);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    console.log("HI");
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className={"sign-up"}>
        <h2 className={"title"}>I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            id="displayName"
            type="text"
            value={displayName}
            required={true}
            handleChange={this.handleChange}
            label={"Display Name"}
          />
          <FormInput
            name="email"
            id="email"
            type="email"
            value={email}
            required={true}
            handleChange={this.handleChange}
            label="Email"
          />

          <FormInput
            name="password"
            id="password"
            type="password"
            value={password}
            required={true}
            handleChange={this.handleChange}
            label={"Password"}
          />
          <FormInput
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            value={confirmPassword}
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
