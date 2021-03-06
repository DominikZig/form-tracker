import React, {useState} from 'react';
import '../App.css';
import usePlayerService from "../services/usePlayerService";
import PlayerStats from "./PlayerStats";

export interface Props {
    playerId: number;
    photo: string;
    apiFootballId: number;
    posephoto: string;
}

const Player: React.FC<Props> = ({playerId, photo, apiFootballId, posephoto} ) => {
    const service = usePlayerService(playerId);
    const [openPlayerStats, setOpenPlayerStats] = useState(false);

    const handleClosePlayerStats = () => {
        setOpenPlayerStats(false);
    }

    return (
        <div className="column">
            {service.status === 'loaded' && (
                <a onClick={() => setOpenPlayerStats(true)}>
                    <div className="card">
                        <div className="card-image">
                            <figure>
                                <img id="headshot" src={photo} alt="photo"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <p className="title is-4">{service.payload.name}</p>
                                <p>Nationality: {service.payload.nationality}</p>
                                <p>Position: {service.payload.position}</p>
                                <p>Date of Birth: {service.payload.dateOfBirth}</p>
                            </div>
                        </div>
                    </div>
                </a>
            )}

            {service.status === 'error' && (
                <div className="error">
                    Error: Cannot call the API at this time.
                </div>
            )}

            <PlayerStats playerId={apiFootballId} isVisible={openPlayerStats} handleClosePlayerStats={handleClosePlayerStats} posephoto={posephoto}/>
        </div>
    );
};

export default Player;
