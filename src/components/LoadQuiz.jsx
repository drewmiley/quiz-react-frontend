import React, { Component } from 'react';

export default class LoadQuiz extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = (nextProps, nextState) => {
            return false;
        };
    }

    render() {
        return (
            <div id="quiz-loader">
                <input id="code" /><button id="load">Load</button>
            </div>
        );
    }
};
