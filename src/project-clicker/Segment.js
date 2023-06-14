import { Component } from 'react';


export class Segment extends Component {

    render() {
        return (
            <div className={"row justify-content-center"}>
                    <button className={`btn btn-outline-danger col-3`} onClick={(e) => this.props.kbGetNumber(e.target.textContent)}>
                        {this.props.num1}
                    </button>
                    <div className={"col-2"}></div>
                    <button className={"btn btn-outline-success col-3"} onClick={(e) => this.props.kbGetNumber(e.target.textContent)}>
                        {this.props.num2}
                    </button>
            </div>
        )
    }
}