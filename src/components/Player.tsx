import React from 'react';
import Loader from './Loader';
import usePlayerByUrlService from "../services/usePlayerByUrlService";

export interface Props {
    url: string;
    onClose(): void;
}

const Player: React.FC<Props> = ({ url, onClose }) => {
    const service = usePlayerByUrlService(url);

    return (
        <div className="player-modal-container">
            <div className="player-modal-background" onClick={onClose} />

            {service.status === 'loading' && <Loader />}

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
