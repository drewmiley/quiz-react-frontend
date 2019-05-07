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
                        <div>
                            <div>{decode(answer)}</div>
                            <button onClick={() => this.props.setAnswer(this.props.question, this.props.answers[i])}>Option {i}</button>
                        </div>
                    )}
                </div>
            </div>
        );
    }
};
