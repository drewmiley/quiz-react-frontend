import React from 'react';

export default props => {
    return (
        <div id="quiz-answers">
            {props.code.length > 0 &&
                <h4 id="quiz-code">Code: {props.code}</h4>
            }
            {props.quiz.map(d =>
                <div key={d.question}>
                    <p>Q: {d.question}</p>
                    <p>A: {d.answer}</p>
                </div>
            )}
        </div>
    );
}
