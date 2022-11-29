import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import custom_axios from './components/custom_axios';
import Chang_secreen from './components/Chang_secreen';
import swal from 'sweetalert';

export default class Menubar extends Component {
    state = {
        navigate_states: false
    }
    logout = async (e) => {
        e.preventDefault();
        var custom_axios_var = new custom_axios
        var res = await custom_axios_var.make_requst("http://localhost:8000/api/logout")
        if (res.data.status === 200) {
            localStorage.removeItem('auth_token')
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
    }
    render() {



        return (
            <div>
                <Chang_secreen to="/" navigate_states={this.state.navigate_states} />
                <div style={{ height: '950px' }} className="page-warapper flex justify-content-center align-items-center  background-gray3">
                    <div style={{ width: '1200px', background: 'white', padding: '40px' }} className="profile  box-shadow1 ">
                        <div className="inline-flex">
                            <img style={{ height: '200px', width: '200px', marginLeft: '100px', margin: '40px' }} className="circle2 border-gray2 " src="{{ asset('images/profile images/default.jpg') }}" />
                            <form action="{{ route('profile_requst') }}" method="post" encType="multipart/form-data">
                                <div style={{ marginLeft: '50px' }} className="photo_info">
                                    <h1 style={{ fontSize: '60px' }}>username</h1>
                                    <br />
                                    <p style={{ fontSize: '25px', color: 'gray' }}>Avatar by <b>njeebxalmusawi.com</b>. Or upload your own...</p>
                                    <div id="div-profile-file" style={{ height: '200px', width: '200px', marginTop: '40px', marginLeft: '150px', transition: 300, cursor: 'pointer' }} className=" border-style-dashed  flex justify-content-center align-items-center  drop-files-box ">
                                        <h1 id="no-file-alert" style={{ fontSize: '30px', transition: 300 }} className="color-gray2  drop-files-box">Drop your<br />file here<br />or click in<br />this area</h1>
                                        <input style={{ display: 'none' }} name="input_profile_file" id="input-profile-file" type="file" />
                                        <div id="back-ground-img" style={{ position: 'absolute', width: '150px', height: '150px', borderRadius: '10px' }} className="display-none background-gray flex align-items-end justify-content-center  background-repeat-no-repeat background-size-cover">
                                            <div id="data_label" style={{ fontSize: '25px', paddingBottom: '3px', backgroundColor: 'rgb(0, 0, 0, 0.6)', color: 'white', width: '100%' }} className=" text-align-center border-radius-bottom10px label-profile-file">
                                            </div>
                                        </div>
                                    </div>
                                    <button style={{ marginLeft: '200px', marginTop: '15px', fontSize: '20px', background: 'blue', color: 'white', cursor: 'pointer', height: '40px', width: '100px' }} className=" hover-background-blue2  transition500 focus-box-shadow-blue2">UPLOAD</button>
                                </div>
                            </form>
                        </div>
                        <hr />
                        <div style={{ marginLeft: '100px' }}>
                            <h1 style={{ fontSize: '40px' }} className="font-weight-bold ">Account info</h1>
                            <div style={{ margin: 'top40px' }}>
                                <li className="inline-flex">
                                    <label style={{ fontSize: '40px', width: '300px' }}>Email</label><input style={{ height: '50px', width: '700px', font: 'size30px' }} type="text" defaultValue=" " />
                                </li>
                            </div>
                            <div style={{ margin: 'top20px' }}>
                                <li className="inline-flex">
                                    <label style={{ fontSize: '40px', width: '300px' }}>Password</label><input style={{ height: '50px', width: '700px', fontSize: '30px' }} type="text" defaultValue=" " />
                                </li>
                            </div>
                            <div style={{ width: '100%' }} className=" text-align-right">
                                <button style={{ fontSize: '25px', marginTop: '40px', padding: '5px', paddingInline: '10px' }} onClick={this.logout} className=" button-red ">Log out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



