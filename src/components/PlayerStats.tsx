import React from "react";
import usePlayerStatsService from "../services/usePlayerStatsService";

const PlayerStats: React.FC = () => {
    const service = usePlayerStatsService();

    return (
        <div className="modal is-active">
            <div className="modal-background"/>
            <div className="modal-card">
                <section className="modal-card-body">
                        <section>
                            <p>Goals: {service.goalsScored}</p>
                            <p>Goals: {service.gamesPlayed}</p>
                        </section>
                </section>
            </div>
            <button className="modal-close is-large" aria-label="close"/>
        </div>
        );
};

export default PlayerStats;
