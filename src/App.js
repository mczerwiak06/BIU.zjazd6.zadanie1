import React, { useEffect, useState } from 'react';
import DataToRender from './DataToRender';

export default function App() {
    const [randomData, setRandomData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        gatherData();
    }, []);

    const gatherData = () => {
        fetch('https://randomuser.me/api')
            .then((data) => data.json())
            .then(setRandomData)
            .then(() => setLoading(false))
            .catch(setError);
    };
    if (loading) {
        return <p>waiting for response</p>;
    }
    if (gatherData === undefined) {
        return <pre>{JSON.stringify(error, null, 2)}</pre>;
    }
    return (
        <div className="app-container">
            <DataToRender data={randomData} />
            <button onClick={() => gatherData()}>GENERATE</button>
        </div>
    );
}
