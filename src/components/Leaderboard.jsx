import React from 'react';

const Leaderboard = props => {
    return (
        <div id="leaderboard">
            {props.leaderboard.sort((a, b) => b.score - a.score).map((d, i) =>
                <div key={i}>{d.user} - {d.score}</div>
            )}
        </div>
    );
}

export default Leaderboard;
