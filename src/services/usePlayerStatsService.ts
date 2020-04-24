import {useEffect, useState} from "react";

const usePlayerStatsService = () => {
    let [playerStats, setPlayerStats] = useState({
        goalsScored: 0,
        gamesPlayed: 0
    });

    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://www.api-football.com/demo/v2/players/player/2189";

    useEffect(() => {
        fetch(proxyUrl + url)
            .then(response => response.json())
            .then(response => {
                console.log(response.api["players"][0].goals.total);
                setPlayerStats({goalsScored : response.api["players"][0].goals.total, gamesPlayed: response.api["players"][0].games.appearences});
            });
    });

    return playerStats;
};

export default usePlayerStatsService;