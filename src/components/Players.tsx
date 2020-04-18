import React from 'react';
import usePlayersService from '../services/usePlayersService';
import Player from './Player';

const Players: React.FC<{}> = () => {
    const service = usePlayersService();
    const [url, setUrl] = React.useState('');

    return (
        <>
            <div className="card">
                {/*{service.status === 'loading' && (*/}
                {/*    <div className="loader-container">*/}
                {/*        <Loader />*/}
                {/*    </div>*/}
                {/*)}*/}
                {/*{service.status === 'loaded' &&*/}
                {/*service.payload.results.map(player => (*/}
                {/*    <div>*/}
                {/*        {player.name}*/}
                {/*    </div>*/}
                {/*))}*/}
                {/*{!!url && <Player url={url} onClose={() => setUrl('')} />}*/}
                <p>{service.status}</p>
                {service.status === 'loaded' && (
                        <h2>{service.payload.results}</h2>
                    )}
                <Player url={'http://api.football-data.org/v2/players/45'} onClose={() => setUrl('')}/>
            </div>
            {service.status === 'error' && (
                <div>Error: Cannot call the API at this time.</div>
            )}
        </>
    );
};

export default Players;