import React, { Component } from 'react';

export default class SubmitAnswers extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = (nextProps, nextState) => {
            return true;
        };
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div id="submit-answers">
                <input id="name" type="text" value={this.state.value} onChange={this.handleChange} />
                <button id="check-answers" onClick={(e) => this.props.submitAnswers(this.props.code, this.state.value, this.props.answers)}>Check Answers</button>
            </div>
        );
    }
};
