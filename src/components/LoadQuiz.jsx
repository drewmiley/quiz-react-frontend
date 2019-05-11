import React, { useEffect, useState } from 'react';
import AutoComplete from 'react-autocomplete';

export default props => {
    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');

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
            <AutoComplete
              getItemValue={(item) => item.label}
              items={[
                { label: 'apple', key:0 },
                { label: 'banana', key:1 },
                { label: 'pear', key:2 }
              ]}
              renderItem={(item, isHighlighted) =>
                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                  {item.label}
                </div>
              }
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              onSelect={(val) => setValue1(val)}
            />
            <button id="load" onClick={onClick}>Load</button>
        </div>
    );
}
