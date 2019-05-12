import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { mapDispatchToProps } from './ducks/actions';

import Home from './routes/Home';
import About from './routes/About';
import Users from './routes/Users';

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
