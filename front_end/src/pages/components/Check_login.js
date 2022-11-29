import React, { Component } from 'react';

export default class Check_login extends Component {
    render() {
        if (localStorage.getItem('auth_token')) {
            return (this.props.login)
        }
        else {
            return (this.props.not_login)
        }
    }
}

