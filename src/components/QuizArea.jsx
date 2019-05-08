import React, { Component } from 'react';

import Question from './Question';

export default props => {
    return (
        <div id="quiz-area">
            <div id="quiz-code">{props.code}</div>
            {props.quiz.map((d, i) =>
                <Question
                    key={i}
                    setAnswer={props.setAnswer}
                    question={d.question}
                    selectedAnswer={props.answers.find(qa => qa.question == d.question)}
                    answers={[d.answer].concat(d.incorrectAnswers).sort(() => 0.5 - Math.random())}
                />
            )}
        </div>
    );
}
