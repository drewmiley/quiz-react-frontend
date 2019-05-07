import React, { Component } from 'react';

export default class LoadQuiz extends Component {
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
            <div id="quiz-loader">
                <input id="code" type="text" value={this.state.value} onChange={this.handleChange} />
                <button id="load" onClick={(e) => this.props.loadQuiz(this.state.value)}>Load</button>
            </div>
        );
    }
};
