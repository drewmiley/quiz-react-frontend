import React, { Component } from 'react';

export default class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = (nextProps, nextState) => {
            return false;
        };
    }

    render() {
        return (
            <div id="leaderboard">
                Leaderboard
            </div>
        );
    }
};
