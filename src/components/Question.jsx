import React, { Component } from 'react';

export default class Question extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = (nextProps, nextState) => {
            return false;
        };
    }

    render() {
        return (
            <div id="quiz-question">
                <div>
                    Question
                </div>
                <div>
                    Answers Choice
                </div>
            </div>
        );
    }
};
