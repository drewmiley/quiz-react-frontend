import React, { Component } from 'react';
import {connect} from 'react-redux';

import { mapDispatchToProps } from './ducks/actions';

import InitQuiz from './components/InitQuiz';
import Leaderboard from './components/Leaderboard';
import Leaderboards from './components/Leaderboards';
import QuizArea from './components/QuizArea';
import SubmitAnswers from './components/SubmitAnswers';

export default class App extends Component {
    render() {
        return <>
            <InitQuiz
                loadQuiz={this.props.loadQuiz}
                generateQuiz={this.props.generateQuiz}
            />
            <QuizArea
                setAnswer={this.props.setAnswer}
                code={this.props.code}
                quiz={this.props.quiz}
                answers={this.props.answers}
            />
            <SubmitAnswers
                submitAnswers={this.props.submitAnswers}
                code={this.props.code}
                answers={this.props.answers}
            />
            <Leaderboard
                code={this.props.code}
                leaderboard={this.props.leaderboard}
            />
            <Leaderboards
                getLeaderboards={this.props.getLeaderboards}
                leaderboards={this.props.leaderboards}
            />
        </>
    }
};

export const AppContainer = connect(state => state, mapDispatchToProps)(App);
