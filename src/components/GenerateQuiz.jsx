import React, { useEffect, useState } from 'react';

const Select = props => {
    const [value, setValue] = useState(props.default);
    return (
        <select value={value} onChange={e => setValue(e.target.value)} >
            {props.values.sort().map(d =>
                <option key={d} value={d}>
                    {d}
                </option>
            )}
        </select>
    )
}

export default props => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [type, setType] = useState('');

    useEffect(() => {
        if (!category) {
            setCategory('General Knowledge');
        }
        if (!difficulty) {
            setDifficulty('any');
        }
        if (!type) {
            setType('any');
        }
    }, [props.validQuizOptions]);

    const onClick = () => props.generateQuiz({ amount, category, difficulty, type});

    return (
        <div id="quiz-generator">
            <div id="options">
                <input type="number" id="amount" min="1" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
                <Select
                    default='General Knowledge'
                    values={props.validQuizOptions.category.sort()}
                />
                <select id="category" value={category} onChange={e => setCategory(e.target.value)} >
                    {props.validQuizOptions.category.sort().map(category =>
                        <option key={category} value={category}>
                            {category}
                        </option>
                    )}
                </select>
                <Select
                    default='any'
                    values={props.validQuizOptions.difficulty}
                />
                <select id="difficulty" value={difficulty} onChange={e => setDifficulty(e.target.value)} >
                    {props.validQuizOptions.difficulty.map(difficulty =>
                        <option key={difficulty} value={difficulty}>
                            {difficulty}
                        </option>
                    )}
                </select>
                <Select
                    default='any'
                    values={props.validQuizOptions.type}
                />
                <select id="type" value={type} onChange={e => setType(e.target.value)} >
                    {props.validQuizOptions.type.map(type =>
                        <option key={type} value={type}>
                            {type}
                        </option>
                    )}
                </select>
            </div>
            <button id="generate" onClick={onClick} disabled={!amount}>Generate</button>
        </div>
    );
}
