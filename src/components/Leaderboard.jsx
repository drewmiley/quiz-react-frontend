import React from 'react';

export default props => {
    return (
        <div id="leaderboard">
            <h2>{props.code} LEADERBOARD</h2>
            {props.leaderboard.sort((a, b) => b.score - a.score)
                .map((d, i) => {
                    const position = i + 1;
                    return { position, user: d.user, score: d.score };
                })
                .map((d, i) =>
                    <div key={i}>{d.position} - {d.user} - {d.score}</div>
                )
            }
        </div>
    );
}
