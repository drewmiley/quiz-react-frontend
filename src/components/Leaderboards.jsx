import React, { useState } from 'react';

import InputAction from './InputAction';
import Leaderboard from './Leaderboard';

export default props => {
    return (
        <div id="leaderboards">
            <h2>{props.code} LEADERBOARDS</h2>
            <InputAction
                id="leaderboards-by-user"
                buttonText="Get Leaderboards"
                action={props.getLeaderboards}
            />
            {props.leaderboards.map((leaderboard, i) =>
                <Leaderboard
                    key={i}
                    code={leaderboard.code}
                    leaderboard={leaderboard.results}
                />
            )}
        </div>
    );
}
