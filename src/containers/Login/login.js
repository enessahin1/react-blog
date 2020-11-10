import React from "react";
import SubmitBtn from '../../components/LoaderButton/submitBtn.js'
import InputBtn from '../../components/LoaderButton/inputBtn.js'
import Checkbox from '../../components/LoaderButton/checkbox.js'

const Login = ({onViewChange}) => {

    const hal = (event) => {
        event.preventDefault()
    }

    const submitBtn = <SubmitBtn className="btn btn-primary btn-block" text="Submit" onClick={hal} />
    const signUp = <SubmitBtn className="btn btn-secondary btn-block" text="Sign Up" onClick={(e) => {
        e.preventDefault()
        onViewChange(2)
    }} />
    const checkbox = <Checkbox className="custom-control custom-checkbox" text="Remember me!" id="remember" />
    const passwordInput = <InputBtn
        className="form-control mb-2"
        placeholder="Password"
        name="password"
        type="password"
    />
    const usernameInput = <InputBtn
        className="form-control mb-2"
        placeholder="Username"
        name="username"
        type="input"
    />

    return (
        <form className="col-3 container center_div">
            <h3>Sign In</h3>
            {usernameInput}
            {passwordInput}
            {checkbox}
            {submitBtn}
            {signUp}
            <p className="forgot-password text-right">
                Forgot <a href="/" onClick={hal}>password?</a>
            </p>
        </form>
    );
}
export default Login