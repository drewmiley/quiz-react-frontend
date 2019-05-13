import React from 'react';

import Leaderboard from '../components/Leaderboard';
import QuizArea from '../components/QuizArea';
import SubmitAnswers from '../components/SubmitAnswers';

export default props => {
    const canSubmit = props.quiz.length && props.quiz.length == props.answers.length;
    return <>
        <QuizArea
            setAnswer={props.setAnswer}
            code={props.code}
            quiz={props.quiz}
            answers={props.answers}
        />
        <SubmitAnswers
            canSubmit={canSubmit}
            submitAnswers={props.submitAnswers}
        />
        <Leaderboard
            code={props.code}
            leaderboard={props.leaderboard}
        />
    </>
};
