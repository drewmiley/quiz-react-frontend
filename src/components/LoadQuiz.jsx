import React, { useEffect, useState } from 'react';

export default props => {
    const [value, setValue] = useState('');

    useEffect(() => {
        if (!value) {
            setValue(props.validQuizCodes[0]);
        }
    }, [props.validQuizCodes]);

    const onChange = e => setValue(e.target.value);

    const onClick = () => props.loadQuiz(value);

    return (
        <div id="quiz-loader">
            <select id="code" value={value} onChange={onChange} >
                {props.validQuizCodes.map(code =>
                    <option key={code} value={code}>
                        {code}
                    </option>
                )}
            </select>
            <button id="load" onClick={onClick}>Load</button>
        </div>
    );
}
