import React, { Component } from 'react';

export default class GenerateQuiz extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = (nextProps, nextState) => {
            console.log(nextProps.validQuizOptions);
            return false;
        };
    }

    render() {
        return (
            <div id="quiz-generator">
                <div id="options">
                    Options
                </div>
                <button id="generate">Generate</button>
            </div>
        );
    }
};
