import React, { Component } from 'react';

import Question from './Question';

export default class QuizArea extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = (nextProps, nextState) => {
            return true;
        };
    }

    render() {
        return (
            <div id="quiz-area">
                <div id="quiz-code">{this.props.code}</div>
                {this.props.quiz.map((d, i) =>
                    <Question
                        key={i}
                        setAnswer={this.props.setAnswer}
                        question={d.question}
                        answers={[d.answer].concat(d.incorrectAnswers).sort(() => 0.5 - Math.random())}
                    />
                )}
            </div>
        );
    }
};
