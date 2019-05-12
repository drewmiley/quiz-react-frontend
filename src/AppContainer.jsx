import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { mapDispatchToProps } from './ducks/actions';

import InitQuiz from './components/InitQuiz';
import Leaderboard from './components/Leaderboard';
import Leaderboards from './components/Leaderboards';
import QuizArea from './components/QuizArea';
import SubmitAnswers from './components/SubmitAnswers';

class Home extends Component {
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

const About = () => {
  return <h2>About</h2>;
}

const Users = () => {
  return <h2>Users</h2>;
}

class App extends Component {
    componentDidMount() {
        this.props.getValidQuizCodes();
        this.props.getValidQuizOptions();
    }
    render() {
        return (
            <Router>
                <>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about/">About</Link>
                            </li>
                            <li>
                                <Link to="/users/">Users</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route
                        path="/"
                        exact
                        render={(routeProps) => (
                            <Home {...this.props} />
                        )}
                    />
                    <Route path="/about/" component={About} />
                    <Route path="/users/" component={Users} />
                </>
            </Router>
        )
    }
}

export const AppContainer = connect(state => state, mapDispatchToProps)(App);
