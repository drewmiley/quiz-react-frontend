import React, { Component } from 'react';
import { decode } from 'he';

export default class Question extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = (nextProps, nextState) => {
            return true;
        };
    }

    render() {
        return (
            <div id="quiz-question">
                <h3>
                    {decode(this.props.question)}
                </h3>
                <div>
                    {this.props.answers.map((answer, i) =>
                        <button key={i} onClick={() => this.props.setAnswer(this.props.question, answer)}>
                            {decode(answer)}
                        </button>
                    )}
                </div>
            </div>
        );
    }
};
