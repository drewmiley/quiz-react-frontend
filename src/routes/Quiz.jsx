import React from 'react';

import Leaderboard from '../components/Leaderboard';
import QuizArea from '../components/QuizArea';
import SubmitAnswers from '../components/SubmitAnswers';

export default props => {
    return <>
        <QuizArea
            setAnswer={props.setAnswer}
            code={props.code}
            quiz={props.quiz}
            answers={props.answers}
        />
        <SubmitAnswers
            canSubmit={props.quiz.length && props.quiz.length == props.answers.length}
            submitAnswers={props.submitAnswers}
        />
        <Leaderboard
            code={props.code}
            leaderboard={props.leaderboard}
        />
    </>
};
