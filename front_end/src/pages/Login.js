import React, { Component } from 'react';
import Long_input from './components/Long_input';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div>
                <div style={{ width: '100%' }} className="page-warapper inline-block flex justify-content-center">
                    <div style={{ width: '600px', marginBlock: '80px', padding: '40px' }} className="align-items-center box-shadow3  ">
                        <div style={{ marginTop: '20px' }} className="flex justify-content-center ">
                            <Link to="/Sigin_in">
                                <button style={{ height: '50px', width: '250px', fontSize: '30px', background: 'white', color: 'blue', cursor: 'pointer', transition: '0.5s' }} className="sigin-in-button  tab tab-active ">Sign in</button>
                            </Link>
                            <button style={{ height: '50px', width: '250px', fontSize: '30px', background: 'blue', color: 'white', cursor: 'pointer', transition: '0.5s' }} className="login-button">Login</button>
                        </div>
                        <form action method="post">
                            <div style={{ background: 'white' }} className="login text-align-center ">
                                <div style={{ padding: '15px', background: 'white' }} className="flex justify-content-center">
                                </div>
                                <h1 style={{ fontSize: '50px' }}>Welcome Back</h1><br />
                                <Long_input name="username" placeholder="Email/Username" />
                                <Long_input name="password" placeholder="Password" />
                                <a style={{ width: '500px', marginBottom: '7px', cursor: 'pointer', transition: '0.5s' }} className="inline-block text-align-right hover-color-blue ">Forgot Password?</a>
                                <button type="submit" style={{ marginBottom: '20px', fontSize: '30px', padding: '5px' }} className="button-blue form-control">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
