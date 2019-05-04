import React from 'react';
import {connect} from 'react-redux';

import * as actions from './ducks/actions';

import InitQuiz from './components/InitQuiz';
import Leaderboard from './components/Leaderboard';
import QuizArea from './components/QuizArea';
import SubmitAnswers from './components/SubmitAnswers';

import ClickMe from './components/ClickMe';
import NumeralDisplay from './components/NumeralDisplay';
import FetchRandomUsers from './components/FetchRandomUsers';

export default class App extends React.Component {
    render() {
        return <div>
            <InitQuiz

            />
            <QuizArea

            />
            <SubmitAnswers

            />
            <Leaderboard

            />
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

export const AppContainer = connect(state => state, actions)(App);
