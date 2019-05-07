import React, { Component } from 'react';

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
                    {this.props.question}
                </h3>
                <div>
                    {this.props.answers.map(answer =>
                        <div>{answer}</div>
                    )}
                </div>
            </div>
        );
    }
};
