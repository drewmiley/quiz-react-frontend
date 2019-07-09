import React, { useEffect } from 'react';

import Leaderboards from '../components/Leaderboards';

export default props => {
    useEffect(() => {
        props.getLeaderboards();
    });

    return <>
        <Leaderboards
            getLeaderboards={props.getLeaderboards}
            leaderboards={props.leaderboards}
        />
    </>
};
