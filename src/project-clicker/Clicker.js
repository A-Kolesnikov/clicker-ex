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
    getNumber(number) {
        console.log('num')
    }

    render() {
        const segment = < Segment num1 = {1} num2 = {2} />
        return (
            <div className="container border">
            
            < Segment num1 = {1} num2 = {2} />
            < Segment num1 = {3} num2 = {4} />
            < Answer num = {this.state.number} />

            </div>
        )
    }
}