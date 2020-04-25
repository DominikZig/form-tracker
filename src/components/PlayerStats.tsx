import React, {useState} from "react";
import usePlayerStatsService from "../services/usePlayerStatsService";
import ronaldopose from "../resources/ronaldo-pose.png";

const PlayerStats: React.FC = () => {
    const service = usePlayerStatsService();
    const [visible, setVisible] = useState(true);

    return (
        <>
            {visible &&
                <div className="modal is-active">
                    <div className="modal-background"/>
                    <button className="delete" aria-label="close" onClick={() => setVisible(false)}/>
                    <div className="modal-card">
                        {service.status === 'loaded' && (
                            <section className="modal-card-body">
                                <img src={ronaldopose} alt="ronaldo" id="modal-img"/>
                                <h1 id="player-stats-header">Player stats:</h1>
                                <section id="stats">
                                    <h2>Goals scored: <strong>{service.payload.api["players"][0].goals.total}</strong></h2>
                                    <h2>Assists: <strong>{service.payload.api["players"][0].goals.assists}</strong></h2>
                                    <h2>Key passes: <strong>{service.payload.api["players"][0].passes.key}</strong></h2>
                                    <h2>Pass accuracy: <strong>{service.payload.api["players"][0].passes.accuracy}</strong></h2>
                                    <h2>Dribbles
                                        attempted: <strong>{service.payload.api["players"][0].dribbles.attempts}</strong></h2>
                                    <h2>Successful
                                        dribbles: <strong>{service.payload.api["players"][0].dribbles.success}</strong></h2>
                                    <h2>Games played: <strong>{service.payload.api["players"][0].games.appearences}</strong>
                                    </h2>
                                </section>
                            </section>
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
