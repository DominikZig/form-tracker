import {useEffect, useState} from "react";
import {Service} from "../types/Service";
import {PlayerStats} from "../types/PlayerStats";

const usePlayerStatsService = (playerId: number) => {
    const [playerStats, setPlayerStats] = useState<Service<PlayerStats>>({
        status: 'loading'
    });

    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://www.api-football.com/demo/v2/players/player/" + playerId;

    useEffect(() => {
        fetch(proxyUrl + url)
            .then(response => response.json())
            .then(response => setPlayerStats({status: 'loaded', payload: response}))
            .catch(error => setPlayerStats({status: 'error', error}));
    }, [playerId]);

    return playerStats;
};

export default usePlayerStatsService;