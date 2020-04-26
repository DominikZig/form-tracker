import React, {useEffect, useState} from "react";
import usePlayerStatsService from "../services/usePlayerStatsService";

function PlayerStats(props) {
    const service = usePlayerStatsService(props.playerId);
    const [visible, setVisible] = useState(props.isVisible);

    useEffect(() => {
        setVisible(props.isVisible);
    }, [props.isVisible]);

    return (
        <>
            {visible &&
                <div className="modal is-active">
                    <div className="modal-background"/>
                    <button className="delete" aria-label="close" onClick={props.handleClosePlayerStats}/>
                    <div className="modal-content">
                        {service.status === 'loaded' && (
                            <article className="media">
                                <div className="media-left">
                                    <img src={props.posephoto} alt="pose-photo" id="modal-img"/>
                                </div>
                                <div className="media-content">
                                    <h1 id="player-stats-header">Player stats:</h1>
                                    <section id="stats">
                                        <h2>Goals scored: <strong>{service.payload.api["players"][0].goals.total}</strong></h2>
                                        <h2>Assists: <strong>{service.payload.api["players"][0].goals.assists}</strong></h2>
                                        <h2>Key passes: <strong>{service.payload.api["players"][0].passes.key}</strong></h2>
                                        <h2>Pass accuracy: <strong>{service.payload.api["players"][0].passes.accuracy}%</strong></h2>
                                        <h2>Dribbles attempted: <strong>{service.payload.api["players"][0].dribbles.attempts}</strong></h2>
                                        <h2>Successful dribbles: <strong>{service.payload.api["players"][0].dribbles.success}</strong></h2>
                                        <h2>Games played: <strong>{service.payload.api["players"][0].games.appearences}</strong>
                                        </h2>
                                    </section>
                                </div>
                            </article>
                        )}
                        {service.status === 'error' && (
                            <div className="error">
                                Error: Cannot call the API at this time.
                            </div>
                        )}
                    </div>
                </div>
            }
        </>
    );
};

export default PlayerStats;
