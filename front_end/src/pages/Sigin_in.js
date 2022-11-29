import React, { Component } from 'react';
import Long_input from './components/Long_input';
import Chang_secreen from './components/Chang_secreen';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

class Sigin_in extends Component {
    constructor() {
        super();
        this.state = {
            navigate_states: false,
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
            errors_list: []
        }
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = async (e) => {
        e.preventDefault();
        // console.log(this.state)
        const res = await axios.post("http://localhost:8000/api/register", this.state)
        // console.log(res)
        if (res.data.status === 200) {
            localStorage.setItem('auth_token', res.data.token)
            swal({
                title: "Success!",
                text: res.data.message,
                icon: "success",
                button: "OK!"
            }).then(() => {
                this.setState({
                    navigate_states: true
                })
            });
        }
        else {
            console.log(this.errors_list)
            this.setState({
                errors_list: res.data.validate_err
            })
        }
    }

    render() {
        return (
            <div style={{ width: '100%' }} className="page-warapper inline-block flex justify-content-center">
                <Chang_secreen to="/" navigate_states={this.state.navigate_states} />
                <div style={{ width: '600px', marginBlock: '80px', padding: '40px' }} className="align-items-center box-shadow3  ">
                    <div style={{ marginTop: '20px' }} className="flex justify-content-center ">
                        <button style={{ height: '50px', width: '250px', fontSize: '30px', background: 'blue', color: 'white', cursor: 'pointer', transition: '0.5s' }} className="sigin-in-button">Sign in</button>
                        <Link to="/Login">
                            <button style={{ height: '50px', width: '250px', fontSize: '30px', background: 'white', color: 'blue', cursor: 'pointer', transition: '0.5s' }} className="login-button">Login
                            </button>
                        </Link>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div style={{ background: 'white', textAlign: 'center' }} className="sigin-in ">
                            <h1 style={{ fontSize: '50px', padding: '15px', paddingTop: '25px' }}>Welcome</h1>
                            <Long_input name="username" text="Username" onChange={this.onChange} error={this.state.errors_list.username} />
                            <Long_input name="email" text="Email" required="yes" type="email" onChange={this.onChange} error={this.state.errors_list.email} />
                            <Long_input name="password" text="Password" required="yes" type="password" onChange={this.onChange} error={this.state.errors_list.password} />
                            <Long_input name="password_confirmation" text="Re-enter password" required="yes" type="password" onChange={this.onChange} />
                            <Long_input name="checkbox" text="by prees this" required="yes" type="checkbox" />
                            <button style={{ marginBottom: '20px', fontSize: '30px' }} className="button-blue form-control">Sign up</button>
                        </div>
                    </form>
                </div>
            </div >
        )
    }
}

export default Sigin_in;