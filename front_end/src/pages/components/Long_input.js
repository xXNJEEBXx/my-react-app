import React, { Component } from 'react';


export default class Long_input extends Component {
    error() {
        if (this.props.error != null) {
            return "is-invalid"
        }
    }

    render() {
        console.log(this.props.type)
        if (this.props.type != "checkbox") {
            return (
                <div className="form-group" style={{ textAlign: 'left' }}>
                    <label htmlFor={this.props.name} style={{ width: '500px', fontSize: '40px' }} className="inline-block text-align-left">{this.props.text}</label>
                    <input onChange={this.props.onChange} id={this.props.name} type={this.props.type} required={this.props.required} placeholder={this.props.text} name={this.props.name} style={{ height: '40px', marginBottom: '20px', fontSize: '20px', padding: '5px' }} className={"background-gray2 border-none form-control " + this.error()} />
                    <span style={{ fontSize: '20px' }} className="text-danger">{this.props.error}</span>
                </div>
            )
        }
        else {
            return (
                <div className="form-group" style={{ textAlign: 'left' }}>
                    <label htmlFor={this.props.name} style={{ width: '100%', fontSize: '23px', marginBottom: '7px' }} className="inline-block">
                        <input id={this.props.name} required={this.props.required} type={this.props.type} style={{ marginRight: '5px' }} />{this.props.text}
                    </label>
                </div>
            )
        }
    }
}


