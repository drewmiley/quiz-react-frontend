import React, { Component } from 'react';
import {connect} from 'react-redux';

import { mapDispatchToProps } from './ducks/actions';

import InitQuiz from './components/InitQuiz';
import Leaderboard from './components/Leaderboard';
import QuizArea from './components/QuizArea';
import SubmitAnswers from './components/SubmitAnswers';

import ClickMe from './components/ClickMe';
import NumeralDisplay from './components/NumeralDisplay';
import FetchRandomUsers from './components/FetchRandomUsers';

export default class App extends Component {
    render() {
        return <div>
            <InitQuiz
                loadQuiz={this.props.loadQuiz}
                generateQuiz={this.props.generateQuiz}
            />
            <QuizArea
                setAnswer={this.props.setAnswer}
                code={this.props.code}
                quiz={this.props.quiz}
            />
            <SubmitAnswers
                submitAnswers={this.props.submitAnswers}
                code={this.props.code}
                answers={this.props.answers}
            />
            <Leaderboard
                leaderboard={this.props.leaderboard}
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

export const AppContainer = connect(state => state, mapDispatchToProps)(App);
