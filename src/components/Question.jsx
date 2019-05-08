import React from 'react';
import { decode } from 'he';

export default props => {
    return (
        <div id="quiz-question">
            <h3>{decode(props.question)}</h3>
            <>
                {props.answers.map((answer, i) =>
                    <button
                        key={i}
                        onClick={() => props.setAnswer(props.question, answer)}
                        style={props.selectedAnswer ? { backgroundColor: answer == props.selectedAnswer.answer ? 'lightblue': 'white' } : {}}
                    >
                        {decode(answer)}
                    </button>
                )}
            </>
        </div>
    );
}
