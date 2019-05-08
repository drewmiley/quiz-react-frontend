import React, { useState } from 'react';

const SubmitAnswers = props => {
    const [value, setValue] = useState('');

    const onChange = e => setValue(e.target.value);

    const onClick = () => props.submitAnswers(props.code, value, props.answers);

    return (
        <div id="submit-answers">
            <input id="name" type="text" value={value} onChange={onChange} />
            <button id="check-answers" onClick={onClick}>Load</button>
        </div>
    );
}

export default SubmitAnswers;
