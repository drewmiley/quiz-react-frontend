import React, { Component } from 'react';

export default class SubmitAnswers extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = (nextProps, nextState) => {
            return false;
        };
    }

    render() {
        return (
            <div id="submit-answers">
                <input id="name" />
                <button id="check-answers">Check Answers</button>
            </div>
        );
    }
};
