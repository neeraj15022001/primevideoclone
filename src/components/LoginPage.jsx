import React from 'react';
import Logo from "../assets/logo.png";
import Button from '@material-ui/core/Button';
import "./css/LoginPage.css";
import {auth, provider} from "../firebase";
import {actionTypes} from "../reducer";
import {useStateValue} from "../StateContext";

function LoginPage() {
    const [state, dispatch] = useStateValue();
    function signIn() {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result)
            dispatch({
                type: actionTypes.SET_USER,
                user : result.user
            })
        })
        .catch(error => {
            alert(error.message)
        })
    }
    return (
        <div className="loginPage">
            <img src={Logo} alt="image" />
            <Button onClick={signIn} className="loginPage__loginButton" variant="contained" color="primary">Continue With Google</Button>
        </div>
    )
}

export default LoginPage
