import React from 'react'
import SubmitBtn from '../../components/LoaderButton/submitBtn.js'
import InputBtn from '../../components/LoaderButton/inputBtn.js'

const Register = ({onViewChange}) => {

    const hal = (event) => {
        event.preventDefault()
    }

    const submitBtn = <SubmitBtn className="btn btn-primary btn-block" text="Submit" onClick={hal} />
    const signIn = <SubmitBtn className="btn btn-secondary btn-block" text="Sign In" onClick={(e) => {
        e.preventDefault()
        onViewChange(1)
    }} />
    const passwordInput = <InputBtn
        className="form-control mb-2"
        placeholder="Password"
        name="password"
        type="password"
    />
    const passwordInput2 = <InputBtn
        className="form-control mb-2"
        placeholder="Confirm Password"
        name="confirmPassword"
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
            <h3>Sign Up</h3>
            {usernameInput}
            {passwordInput}
            {passwordInput2}
            {submitBtn}
            {signIn}
        </form>
    );

}
export default Register