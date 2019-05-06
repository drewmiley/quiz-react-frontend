import React, { Component } from 'react';

import GenerateQuiz from './GenerateQuiz';
import LoadQuiz from './LoadQuiz';

export default class InitQuiz extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = (nextProps, nextState) => {
            return true;
        };
    }

    render() {
        return (
            <div id="quiz-init">
                <LoadQuiz
                    loadQuiz={this.props.loadQuiz}
                />
                <GenerateQuiz
                    generateQuiz={this.props.generateQuiz}
                />
            </div>
        );
    }
};
