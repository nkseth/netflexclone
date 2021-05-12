import React from 'react';
import './loginscreen.css'
import Signinform from './signupfrom'
const Login = () => {
    const [signin, setsignin] = React.useState(false);
    return (<div className="login">

        <div className="loginbg">
            <img src="https://pngimg.com/uploads/netflix/netflix_PNG11.png" alt="logo"
                className="loginscreen__logo" />
            <button className="loginscreen__button" onClick={() => { setsignin(true) }}>
                Sign Up
     </button>
            <div className="loginscreen__gradient">

            </div>
            <div className="loginscreen__body">
                {signin ?
                    <Signinform />
                    : <>
                        <h1>Unlimited flims,TV programes and more..</h1>

                        <h2 className="sub">Watch anytime.Cancel at any time</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className="loginscreen__input">
                            <form>
                                <input type="email" placeholder="Email Address" />
                                <button onClick={() => { setsignin(true) }} className="loginscreen__getstarted">GET STARTED</button>
                            </form>
                        </div>
                    </>
                }
            </div>
        </div>


    </div>);
}

export default Login;