import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Servicedetails = () => {
    const { serviceId } = useParams();

    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2>This Product you book: {service.name}</h2>
            <Link to='/cheackout'><button>CheackOut</button></Link>
        </div>
    );
};

export default Servicedetails;