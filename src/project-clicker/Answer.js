import { Component } from 'react';

export class Answer extends Component {

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