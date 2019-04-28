import React, { Component } from 'react';

export default class ClickMe extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = (nextProps, nextState) => {
            return false;
        };
    }

    clickMe() {
        this.props.setNumber(Math.floor(100 * Math.random()));
    }

    render() {
        return (
            <button type='button' onClick={(e) => this.clickMe()}>Click Me</button>
        );
    }
};
