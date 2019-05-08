import React from 'react';

export default props => {
    return (
        <div id="leaderboard">
            {props.leaderboard.sort((a, b) => b.score - a.score).map((d, i) =>
                <div key={i}>{d.user} - {d.score}</div>
            )}
        </div>
    );
}
