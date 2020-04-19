import React from 'react';
import usePlayersService from "../services/usePlayersService";

const Player: React.FC = () => {
    const service = usePlayersService();

    return (
        <div className="player-modal-container">
            <div className="player-modal-background"/>

            {service.status === 'loading'}
            <p>{service.status}</p>

            {service.status === 'loaded' && (
                <div className="Player">
                    <h2>{service.payload.name}</h2>
                    <h2>{service.payload.nationality}</h2>
                    <h2>{service.payload.position}</h2>
                    <h2>{service.payload.shirtNumber}</h2>
                    <h2>{service.payload.dateOfBirth}</h2>
                </div>
            )}

            {service.status === 'error' && (
                <div className="player">
                    Error: Cannot call the API at this time.
                </div>
            )}
        </div>
    );
};

export default Player;
