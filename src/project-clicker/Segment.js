import { Component } from 'react';
import App from './App';
import { useState } from 'react';

export class Segment extends Component {
    constructor() {
        super();
        this.state = {
            //counter: 0,
        };
    }

    render() {
        return (
            <div className="row">
                    <button className='col-1' onClick={(e) => this.props.kbGetNumber(e.target.textContent)}>{this.props.num1}</button>
                    <button className='col-1' onClick={(e) => this.props.kbGetNumber(e.target.textContent)}>{this.props.num2}</button>
            </div>
        )
    }
}