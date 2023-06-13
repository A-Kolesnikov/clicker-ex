import { Component } from 'react';
import App from './App';
import { useState } from 'react';

export class Answer extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };
    }

    render() {
        return (
            <div className="row">
                <div>You`ve clicked {this.props.num}</div>
            </div>
        )
    }
}