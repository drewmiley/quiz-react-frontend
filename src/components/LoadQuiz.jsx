import React, { useState } from 'react';

export default props => {
    const [value, setValue] = useState('');

    const onChange = e => setValue(e.target.value);

    const onClick = () => props.loadQuiz(value);

    return (
        <div id="quiz-loader">
            <input id="code" type="text" value={value} onChange={onChange} />
            <button id="load" onClick={onClick}>Load</button>
        </div>
    );
}
