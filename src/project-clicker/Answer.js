import { Component } from 'react';
import App from './App';
import { useState } from 'react';

export class Answer extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            mult: 5
        };
    }

    render() {
        return (
            <div className="row">
                <div>{this.props.num}</div>


            </div>
        )
    }
}