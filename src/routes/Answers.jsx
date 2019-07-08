import React from 'react';

import QuizAnswers from '../components/QuizAnswers';

export default props => {
    return <>
        <QuizAnswers
            code={props.code}
            quiz={props.quiz}
        />
    </>
};
