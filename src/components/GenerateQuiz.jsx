import React, { useEffect, useState } from 'react';

// TODO: refactor
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
                <select id="category" value={category} onChange={e => setCategory(e.target.value)} >
                    {props.validQuizOptions.category.sort().map(category =>
                        <option key={category} value={category}>
                            {category}
                        </option>
                    )}
                </select>
                <select id="difficulty" value={difficulty} onChange={e => setDifficulty(e.target.value)} >
                    {props.validQuizOptions.difficulty.map(difficulty =>
                        <option key={difficulty} value={difficulty}>
                            {difficulty}
                        </option>
                    )}
                </select>
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
