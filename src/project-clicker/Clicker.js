import { Component } from 'react';
import { Segment } from './Segment';
import { Answer } from './Answer';

export class Clicker extends Component {
    constructor() {
        super();
        this.state = {
            number: 'Nothing',
        };
        this.getNumber = this.getNumber.bind(this);

    }
    getNumber(text) {
        this.setState({ number: text })
    }

    render() {
        return (
            <div className={'container'}>
                <div className={'flex-column justify-content-center'}>
                    < Segment num1={1} num2={2} kbGetNumber={this.getNumber} />
                    < Segment num1={2} num2={4} kbGetNumber={this.getNumber} />
                    < Segment num1={3} num2={6} kbGetNumber={this.getNumber} />
                    < Segment num1={4} num2={8} kbGetNumber={this.getNumber} />
                    < Segment num1={5} num2={10} kbGetNumber={this.getNumber} />
                    < Segment num1={6} num2={12} kbGetNumber={this.getNumber} />
                    < Answer num={this.state.number} />
                </div>
            </div>
        )
    }
}