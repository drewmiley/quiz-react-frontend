import React, { Component } from 'react';
import {connect} from 'react-redux';

import { mapDispatchToProps } from './ducks/actions';

import InitQuiz from './components/InitQuiz';
import Leaderboard from './components/Leaderboard';
import Leaderboards from './components/Leaderboards';
import QuizArea from './components/QuizArea';
import SubmitAnswers from './components/SubmitAnswers';

export default class App extends Component {
    componentDidMount() {
        this.props.getValidQuizCodes();
        this.props.getValidQuizOptions();
    }
    render() {
        return <>
            <InitQuiz
                loadQuiz={this.props.loadQuiz}
                generateQuiz={this.props.generateQuiz}
                validQuizCodes={this.props.validQuizCodes}
                validQuizOptions={this.props.validQuizOptions}
            />
            <QuizArea
                setAnswer={this.props.setAnswer}
                code={this.props.code}
                quiz={this.props.quiz}
                answers={this.props.answers}
            />
            <SubmitAnswers
                submitAnswers={this.props.submitAnswers}
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
