import React, { Component } from 'react';
import {connect} from 'react-redux';

import { mapDispatchToProps } from './ducks/actions';

import InitQuiz from './components/InitQuiz';
import Leaderboard from './components/Leaderboard';
import QuizArea from './components/QuizArea';
import SubmitAnswers from './components/SubmitAnswers';

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
                answers={this.props.answers}
            />
            <SubmitAnswers
                submitAnswers={this.props.submitAnswers}
                code={this.props.code}
                answers={this.props.answers}
            />
            <Leaderboard
                leaderboard={this.props.leaderboard}
            />
        </div>
    }
};

export const AppContainer = connect(state => state, mapDispatchToProps)(App);
