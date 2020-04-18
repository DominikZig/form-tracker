import {useEffect, useState} from 'react';
import {Service} from "../types/Service";
import {Player} from "../types/Player";

const usePlayerByUrlService = (url: string) => {
    const [result, setResult] = useState<Service<Player>>({
        status: 'loading'
    });

    useEffect(() => {
        if (url) {
            setResult({status: 'loading'});
            // fetch(url)
            fetch('http://api.football-data.org/v2/players/45', {headers: new Headers({
                    'X-Auth-Token': '89d3fc1202a147158fd63bdafa3e34a0'
                })
            })
                .then(response => response.json())
                .then(response => setResult({status: 'loaded', payload: response}))
                .catch(error => setResult({status: 'error', error}));
        }
    }, [url]);

    return result;
};

export default usePlayerByUrlService;