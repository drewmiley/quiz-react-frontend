import React, { Component } from 'react';

import InitQuiz from '../components/InitQuiz';
import Leaderboard from '../components/Leaderboard';
import Leaderboards from '../components/Leaderboards';
import QuizArea from '../components/QuizArea';
import SubmitAnswers from '../components/SubmitAnswers';

export default props => {
    return <>
        <InitQuiz
            loadQuiz={props.loadQuiz}
            generateQuiz={props.generateQuiz}
            validQuizCodes={props.validQuizCodes}
            validQuizOptions={props.validQuizOptions}
        />
        <QuizArea
            setAnswer={props.setAnswer}
            code={props.code}
            quiz={props.quiz}
            answers={props.answers}
        />
        <SubmitAnswers
            submitAnswers={props.submitAnswers}
        />
        <Leaderboard
            code={props.code}
            leaderboard={props.leaderboard}
        />
        <Leaderboards
            getLeaderboards={props.getLeaderboards}
            leaderboards={props.leaderboards}
        />
    </>
};
