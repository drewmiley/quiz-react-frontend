import React, { useState } from 'react';

import Leaderboard from './Leaderboard';

export default props => {
    const [value, setValue] = useState('');

    const onChange = e => setValue(e.target.value);

    const onClick = () => props.getLeaderboards(value);

    return (
        <div id="leaderboards">
            <h2>{props.code} LEADERBOARDS</h2>
            <div id="leaderboards-by-user">
                <input id="name" type="text" value={value} onChange={onChange} />
                <button id="get-leaderboards" onClick={onClick}>Get Leaderboards</button>
            </div>
            {props.leaderboards.map(leaderboard =>
                <Leaderboard
                    code={leaderboard.code}
                    leaderboard={leaderboard.leaderboard}
                />
            )}
        </div>
    );
}
