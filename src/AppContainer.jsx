import React from 'react';
import {connect} from 'react-redux';

import * as actions from './ducks/actions';

import ClickMe from './components/ClickMe';
import NumeralDisplay from './components/NumeralDisplay';
import FetchRandomUsers from './components/FetchRandomUsers';

export default class App extends React.Component {
    render() {
        return <div>
            <ClickMe
                setNumber={this.props.setNumber}
            />
            <NumeralDisplay
                number={this.props.number}
            />
            <FetchRandomUsers />
        </div>
    }
};

function mapStateToProps(state) {
    return state;
}

export const AppContainer = connect(mapStateToProps, actions)(App);
