import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Servicedetails = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h2>This is service id: {serviceId}</h2>
            <Link to='/cheackout'><button>CheackOut</button></Link>
        </div>
    );
};

export default Servicedetails;