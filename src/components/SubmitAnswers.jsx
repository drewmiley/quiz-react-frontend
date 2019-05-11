import React, { useState } from 'react';

export default props => {
    const [value, setValue] = useState('');

    const onChange = e => setValue(e.target.value);

    const onClick = () => props.submitAnswers(value);

    return (
        <div id="submit-answers">
            <input id="name" type="text" value={value} onChange={onChange} />
            <button id="check-answers" onClick={onClick}>Submit Answers</button>
        </div>
    );
}
