import { Component } from 'react';
import App from './App';
import { useState } from 'react';

export class Segment extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={"row justify-content-center"}>
                    <button className={`btn btn-outline-danger col-3`} onClick={(e) => this.props.kbGetNumber(e.target.textContent)}>{this.props.num1}</button>
                    <button className={"btn btn-outline-success col-3"} onClick={(e) => this.props.kbGetNumber(e.target.textContent)}>{this.props.num2}</button>
            </div>
        )
    }
}