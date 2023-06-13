import { Component } from 'react';
import App from './App';
import { useState } from 'react';

export class Answer extends Component {
    constructor() {
        super();
        
    }

    render() {
        return (
            <div>
            <div className={"row justify-content-center bottom"}>
                You`ve clicked {this.props.num}
            </div>
            </div>
        )
    }
}