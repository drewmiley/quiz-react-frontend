import React, { Component } from 'react';

export default class NumeralDisplay extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = (nextProps, nextState) => {
            return this.props.number !== nextProps.number;
        };
    }

    render() {
        return (
            <span>{this.props.number}</span>
        );
    }
};
