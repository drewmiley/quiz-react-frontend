import React from 'react';

import Leaderboard from '../components/Leaderboard';
import QuizArea from '../components/QuizArea';
import SubmitAnswers from '../components/SubmitAnswers';

export default props => {
    const questionsAnswers = props.answers.map(d => d.question);
    const canSubmit = props.quiz.length && !props.quiz.find(d => !questionsAnswers.includes(d.question));
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
