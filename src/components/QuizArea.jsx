import React, { Component } from 'react';

import Question from './Question';

export default class QuizArea extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = (nextProps, nextState) => {
            return false;
        };
    }

    render() {
        return (
            <div id="quiz-area">
                <div id="quiz-code">QUIZ CODE</div>
                {this.props.quiz.map(d =>
                    <Question

                    />
                )}
            </div>
        );
    }
};
