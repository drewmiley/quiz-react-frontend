import React, { Component } from 'react';

export default class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = (nextProps, nextState) => {
            return true;
        };
    }

    render() {
        return (
            <div id="leaderboard">
                {this.props.leaderboard.map((d, i) =>
                    <div key={i}>{d.user} - {d.score}</div>
                )}
            </div>
        );
    }
};
