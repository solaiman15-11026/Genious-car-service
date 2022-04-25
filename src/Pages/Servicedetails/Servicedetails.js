import React from 'react';
import { useParams } from 'react-router-dom';

const Servicedetails = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h2>This is service id: {serviceId}</h2>
        </div>
    );
};

export default Servicedetails;