import { Component } from 'react';
import App from './App';
import { useState } from 'react';
import { Segment } from './Segment';
import { Answer } from './Answer';

export class Clicker extends Component {
    constructor() {
        super();
        this.state = {
            number: '99',
        };
        this.getNumber = this.getNumber.bind(this);

    }
    getNumber(text) {
        this.setState({number: text})
    }

    render() {
        const segment = < Segment num1 = {1} num2 = {2} />
        return (
            <div className="container border">
            < Segment num1 = {1} num2 = {2} kbGetNumber = {this.getNumber}/>
            < Segment num1 = {2} num2 = {4} kbGetNumber = {this.getNumber}/>
            < Segment num1 = {3} num2 = {6} kbGetNumber = {this.getNumber}/>
            < Segment num1 = {4} num2 = {8} kbGetNumber = {this.getNumber}/>
            < Segment num1 = {5} num2 = {10} kbGetNumber = {this.getNumber}/>
            < Segment num1 = {6} num2 = {12} kbGetNumber = {this.getNumber}/>
            < Answer num = {this.state.number} />
            </div>
        )
    }
}