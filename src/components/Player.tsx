import React from 'react';
import '../App.css';
import usePlayersService from "../services/usePlayersService";
import ronaldo from "../resources/ronaldo.jpg";

const Player: React.FC = () => {
    const service = usePlayersService();

    return (
        <div className="container">
            {service.status === 'loading'}
            <p>{service.status}</p>

            {service.status === 'loaded' && (
                <div className="player card">
                    <div className="card-image">
                        <figure>
                            <img src={ronaldo} alt="ronaldo"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                            </div>
                            <div className="media-content">
                                <p className="title is-4">{service.payload.name}</p>
                            </div>
                        </div>

                        <div className="content">
                            <p>Nationality: {service.payload.nationality}</p>
                            <p>Position: {service.payload.position}</p>
                            <p>Date of Birth: {service.payload.dateOfBirth}</p>
                        </div>
                    </div>
                </div>
            )}

            {service.status === 'error' && (
                <div className="error">
                    Error: Cannot call the API at this time.
                </div>
            )}
        </div>
    );
};

export default Player;
